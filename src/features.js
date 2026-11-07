/* LiveSportArena 3D · features.js
 * Costruzione della scena: terreno, pista, porte, ambiente e modificatori.
 * Ogni oggetto ha coordinate mondo fisse generate da un seed stabile per pista. */
(function (LSA) {
  'use strict';
  const { clamp, lerp, smooth, bell, rng, hex } = LSA.util;
  const mix = (a, b, t) => a.map((v, i) => Math.round(lerp(v, b[i], t)));

  // Palette condivisa del design system
  const C = {
    snow: hex('#f3f8fc'), snowShade: hex('#d3e3ef'), rockExp: hex('#aebccb'),
    wallA: hex('#d9e5ef'), wallB: hex('#c3d3e1'), lip: hex('#f9fcfe'),
    piste: hex('#fdfeff'), piste2: hex('#f2f8fc'), pisteEdge: hex('#b8d8ea'),
    line: hex('#1683cf'), corridor: hex('#d6ebf8'), dye: hex('#3e9ce0'),
    red: hex('#e2475a'), blue: hex('#2c79c7'),
    greens: ['#2f6f5e', '#367a63', '#2a6356', '#3d8268'].map(hex), trunk: hex('#7a6150'),
    rocks: ['#8193a5', '#a2b1bf', '#8e9fae', '#b4c2ce', '#7a8c9e'].map(hex),
    wood: hex('#c49c79'), wood2: hex('#a87e60'), roof: hex('#eef6fb'), window: hex('#f4cf78'),
    concrete: hex('#9eacb9'), concreteTop: hex('#bcc8d2'), rail: hex('#5f6f7d'),
    stand: hex('#d3dee8'), standTop: hex('#e6eef4'), mast: hex('#5f6f7e'), lamp: hex('#fff4c8'),
    lake: hex('#bfe0ef'), lakeRim: hex('#e3f2f9'), glacier: hex('#e6f0f8'), ice: hex('#b9d5e8'),
    road: hex('#6b7884'), glass: hex('#8fb9d6'), steel: hex('#b4c0cb'), seat: hex('#c7d4e0'), banner: hex('#1f5fa8'),
    facades: ['#efe4d3', '#e2cfb2', '#f4ede2', '#d9dfe3', '#ecd9c6'].map(hex), roofDark: hex('#8a6a55'),
    people: ['#d9434f', '#2b6cb0', '#f2b33d', '#2f855a', '#6b46c1', '#eef2f6', '#22303f', '#e86f3a'].map(hex),
  };

  LSA.World.prototype.lit = function (x, z) {
    if (!this.m.night) return 0;
    const u = (z - this.z0) / this.L, d = Math.abs(x - this.routeX(z));
    let v = smooth((u - 0.3) / 0.1) * bell(d, this.hw * 2.6);
    if (z > this.z1 - 170) v += bell(d, 300) * smooth((z - (this.z1 - 170)) / 90);
    return clamp(v, 0, 1);
  };

  function buildScene(w, course) {
    const m = w.m, M = new LSA.Mesh(w), R = rng(m.seed);
    const keep = []; // aree escluse dalla vegetazione [x, z, r]
    const free = (x, z, pad) => { for (const k of keep) if (Math.hypot(x - k[0], z - k[1]) < k[2] + (pad || 0)) return false; return true; };
    const finishHW = (z) => lerp(w.halfWidth(z), w.cHW, smooth((z - (w.z1 - 30)) / 60));
    const FM = w.fm;

    // ------------------------------------------------ terreno
    const cell = m.cell, nx = Math.ceil(m.W / cell), nz = Math.ceil((w.zMax - w.zMin) / cell);
    const dx = m.W / nx, dz = (w.zMax - w.zMin) / nz, G = new Float32Array((nx + 1) * (nz + 1));
        for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      G[j * (nx + 1) + i] = w.height(w.xMin + i * dx, w.zMin + j * dz);
    }
    const gy = (i, j) => G[j * (nx + 1) + i];
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const x = w.xMin + i * dx, z = w.zMin + j * dz, X = x + dx, Z = z + dz;
      const a = gy(i, j), b = gy(i + 1, j), c = gy(i + 1, j + 1), d = gy(i, j + 1);
      const sx = ((b - a) + (c - d)) / (2 * dx), sz = ((d - a) + (c - b)) / (2 * dz), st = Math.hypot(sx, sz);
      let col = mix(m.glacier ? C.glacier : C.snow, C.snowShade, clamp((st - 0.35) * 0.6, 0, 0.4));
      if (m.glacier && st > 0.7) col = mix(col, C.ice, clamp((st - 0.7) * 0.8, 0, 0.6));
      if (st > 1.3) col = mix(col, C.rockExp, clamp((st - 1.3) * 0.7, 0, 0.45));
      const nn = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453; const jit = (nn - Math.floor(nn) - 0.5) * 5;
      col = col.map((v) => clamp(v + jit, 0, 255));
      M.face([[x, a, z], [X, b, z], [X, c, Z], [x, d, Z]], col, { stroke: true, kind: 'ground', soft: true });
    }
    // Pareti del diorama "tagliato": lastra di spessore costante che segue la pendenza
    const ctr = [0, w.base((w.zMin + w.zMax) / 2) - 400, (w.zMin + w.zMax) / 2];
    const edge = (pts) => {
      for (let k = 0; k < pts.length - 1; k++) {
        const p = pts[k], q = pts[k + 1], bp = w.base(p[2]), bq = w.base(q[2]);
        const o = { cull: true, center: [ctr[0], Math.min(bp, bq) - 300, ctr[2]], stroke: true, soft: true };
        M.face([[p[0], p[1], p[2]], [q[0], q[1], q[2]], [q[0], q[1] - 9, q[2]], [p[0], p[1] - 9, p[2]]], C.lip, Object.assign({}, o, { flat: true }));
        M.face([[p[0], p[1] - 9, p[2]], [q[0], q[1] - 9, q[2]], [q[0], bq + 34, q[2]], [p[0], bp + 34, p[2]]], C.wallA, o);
        M.face([[p[0], bp + 34, p[2]], [q[0], bq + 34, q[2]], [q[0], bq, q[2]], [p[0], bp, p[2]]], C.wallB, o);
      }
    };
    const top = [], bot = [], lef = [], rig = [];
    for (let i = 0; i <= nx; i++) { top.push([w.xMin + i * dx, gy(i, 0), w.zMin]); bot.push([w.xMin + i * dx, gy(i, nz), w.zMax]); }
    for (let j = 0; j <= nz; j++) { lef.push([w.xMin, gy(0, j), w.zMin + j * dz]); rig.push([w.xMax, gy(nx, j), w.zMin + j * dz]); }
    edge(top); edge(bot); edge(lef); edge(rig);

    // ------------------------------------------------ pista
    const step = m.pisteW < 70 ? 9 : 13, fr = [-1, -0.9, -0.38, 0.38, 0.9, 1];
    let seg = 0;
    for (let z = w.z0 - 24; z < w.z1 + w.cLen; z += step, seg++) {
      const Z = z + step, hz = finishHW(z), hZ = finishHW(Z), rz = w.routeX(z), rZ = w.routeX(Z);
      for (let k = 0; k < fr.length - 1; k++) {
        const pts = [[rz + fr[k] * hz, 0, z], [rz + fr[k + 1] * hz, 0, z], [rZ + fr[k + 1] * hZ, 0, Z], [rZ + fr[k] * hZ, 0, Z]];
        for (const p of pts) p[1] = w.height(p[0], p[2]) + 2.2;
        const inCorral = z > w.z1 - 4;
        const col = (k === 0 || k === fr.length - 2) ? (inCorral ? C.piste2 : C.pisteEdge) : (k === 2 && !inCorral) ? C.corridor : (seg % 2 ? C.piste : C.piste2);
        M.face(pts, col, { bias: -28, stroke: true, kind: 'piste', flat: k > 0 && k < fr.length - 2 ? false : false });
      }
    }
    // Linea ideale e porte (densità e tipo dipendono dalla specialità, non dall'archetipo)
    const sp = m.spacing, A = m.lineAmp;
    const win = (z) => smooth((z - w.z0 - 40) / 120) * smooth((w.z1 - 70 - z) / 140);
    const lineX = (z) => w.routeX(z) + A * win(z) * Math.cos(Math.PI * (z - (w.z0 + sp * 0.5)) / sp);
    const lw = m.pisteW < 70 ? 1.9 : 2.5, ls = Math.min(10, sp / 3);
    const overlay = [];
    for (let z = w.z0; z < w.z1; z += ls) {
      const Z = Math.min(w.z1, z + ls), a = lineX(z), b = lineX(Z);
      const ya = w.height(a, z) + 3.6, yb = w.height(b, Z) + 3.6;
      M.face([[a - lw, ya, z], [a + lw, ya, z], [b + lw, yb, Z], [b - lw, yb, Z]], C.line, { bias: -40, kind: 'piste', flat: true });
    }
    for (let z = w.z0; z <= w.z1; z += 24) { const x = lineX(z); overlay.push([x, w.height(x, z) + 4, z]); }
    for (let i = 1; ; i++) {
      const z = w.z0 + sp * (i + 0.5); if (z > w.z1 - sp * 0.6) break;
      const side = i % 2 ? -1 : 1, hw = w.halfWidth(z), rx = w.routeX(z);
      const xin = rx + side * clamp(A * win(z) + 2.5, 2.5, hw - 6), col = i % 2 ? C.blue : C.red;
      if (m.gate === 'sl') {
        M.prism(xin, w.height(xin, z) - 1, z, 0.85, 17, 4, col, null);
      } else {
        const gw = m.gate === 'gs' ? 8 : 11, hgt = m.gate === 'gs' ? 16 : 18;
        const xout = rx + side * clamp(Math.abs(xin - rx) + gw, 0, hw - 1);
        const y1 = w.height(xin, z), y2 = w.height(xout, z);
        M.prism(xin, y1 - 1, z, 0.8, hgt, 4, col, null); M.prism(xout, y2 - 1, z, 0.8, hgt, 4, col, null);
        M.face([[xin, y1 + 6, z], [xout, y2 + 6, z], [xout, y2 + hgt - 2, z], [xin, y1 + hgt - 2, z]], col, { bias: -8, flat: true });
      }
    }

    // ------------------------------------------------ elementi costruiti
    function hut(x, z, s, yaw, start) {
      const y = w.height(x, z) - 1, cs = Math.cos(yaw), sn = Math.sin(yaw);
      const P = (lx, ly, lz) => [x + lx * cs - lz * sn, y + ly, z + lx * sn + lz * cs];
      const wd = s, dp = s * 0.74, hh = s * 0.5, rh = s * 0.32, o = 0.14 * s;
      M.box(x, y, z, wd, dp, hh, C.wood, C.wood2, yaw);
      const c = [x, y + hh, z];
      const a = P(-wd / 2 - o, hh, -dp / 2 - o), b = P(wd / 2 + o, hh, -dp / 2 - o), cc = P(wd / 2 + o, hh, dp / 2 + o), d = P(-wd / 2 - o, hh, dp / 2 + o);
      const r1 = P(-wd / 2 - o, hh + rh, 0), r2 = P(wd / 2 + o, hh + rh, 0);
      M.face([a, b, r2, r1], C.roof, { cull: true, center: c }); M.face([d, cc, r2, r1], C.roof, { cull: true, center: c });
      M.face([a, d, r1], C.wood2, { cull: true, center: c }); M.face([b, cc, r2], C.wood2, { cull: true, center: c });
      for (const lx of start ? [-0.22, 0.22] : [-0.25]) {
        const q = [P(lx * wd - s * 0.08, hh * 0.35, dp / 2 + 0.6), P(lx * wd + s * 0.08, hh * 0.35, dp / 2 + 0.6), P(lx * wd + s * 0.08, hh * 0.7, dp / 2 + 0.6), P(lx * wd - s * 0.08, hh * 0.7, dp / 2 + 0.6)];
        M.face(q, C.window, { cull: true, center: [x, y + hh / 2, z], emissive: true, flat: true });
      }
      keep.push([x, z, s * 1.1]);
    }
    function person(x, z, col, base) {
      const y = base != null ? base : w.height(x, z) - 0.5;
      M.box(x, y, z, 2.6, 2.6, 5.5, col, col); M.box(x, y + 5.5, z, 1.9, 1.9, 1.9, hex('#f0c9a4'), hex('#3a3a46'));
    }
    function crowd(x, z, n, spreadX, spreadZ) {
      for (let k = 0; k < n; k++) person(x + (R() - 0.5) * spreadX, z + (R() - 0.5) * spreadZ, C.people[(R() * C.people.length) | 0]);
    }
    function boards(z0, z1, side, off) { // pannelli/reti lungo la pista
      let k = 0;
      for (let z = z0; z < z1; z += 12, k++) {
        const Z = Math.min(z1, z + 12);
        const xa = w.routeX(z) + side * (finishHW(z) + off), xb = w.routeX(Z) + side * (finishHW(Z) + off);
        const ya = w.height(xa, z), yb = w.height(xb, Z);
        M.face([[xa, ya, z], [xb, yb, Z], [xb, yb + 7, Z], [xa, ya + 7, z]], k % 2 ? C.red : hex('#f06a6f'), { bias: -12 });
      }
    }
    function rock(x, z, s, stretch) {
      const n = 7, y = w.height(x, z) - 3, ring = [], mid = [];
      const st = stretch || 1, rot = R() * 6.28;
      for (let i = 0; i < n; i++) {
        const a = rot + 2 * Math.PI * i / n, r = s * (0.78 + 0.3 * R());
        const px = x + Math.cos(a) * r, pz = z + Math.sin(a) * r * st;
        ring.push([px, w.height(px, pz) - 3, pz]);
        const r2 = r * (0.55 + 0.15 * R());
        mid.push([x + Math.cos(a + 0.2) * r2, y + s * (0.55 + 0.2 * R()), z + Math.sin(a + 0.2) * r2 * st]);
      }
      const pk = [x + (R() - 0.5) * s * 0.3, y + s * (1.05 + 0.3 * R()), z + (R() - 0.5) * s * 0.3 * st], c = [x, y + s * 0.35, z];
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        M.face([ring[i], ring[j], mid[j], mid[i]], C.rocks[i % C.rocks.length], { cull: true, center: c });
        M.face([mid[i], mid[j], pk], i % 3 === 0 ? C.rocks[3] : mix(C.rocks[(i + 2) % 5], C.snow, 0.55), { cull: true, center: c });
      }
      keep.push([x, z, s * 1.2 * st]);
    }
    function fir(x, z, s) {
      const y = w.height(x, z) - 1.5, g = C.greens[(R() * C.greens.length) | 0];
      M.prism(x, y, z, s * 0.08, s * 0.3, 3, C.trunk, null, R());
      const tiers = [[0.47, 0.26, 0.78], [0.31, 0.72, 0.62]];
      for (let t = 0; t < 2; t++) {
        const [r, b, hgt] = tiers[t], by = y + s * b, apex = [x, by + s * hgt, z], rot = R() * 6.28, ring = [];
        for (let i = 0; i < 5; i++) { const a = rot + 2 * Math.PI * i / 5; ring.push([x + s * r * Math.cos(a), by, z + s * r * Math.sin(a)]); }
        const col = t === 1 ? mix(g, C.snow, 0.32) : g;
        for (let i = 0; i < 5; i++) M.face([ring[i], ring[(i + 1) % 5], apex], i % 2 ? col : mix(col, C.snow, 0.18), { cull: true, center: [x, by + s * hgt * 0.3, z] });
      }
    }

    // ------------------------------------------------ partenza
    const p0 = w.point(0);
    hut(p0[0] - 14, w.z0 - 40, 44, 0, true);
    for (const sd of [-1, 1]) M.prism(p0[0] + sd * (w.hw + 4), w.height(p0[0] + sd * (w.hw + 4), w.z0 - 8) - 1, w.z0 - 8, 1.6, 20, 4, C.red, null);

    // ------------------------------------------------ traguardo
    // Modelli: stadium (tribune), village (arrivo in paese), meadow (prato/conca), glacier (stadio su ghiacciaio).
    // Tutto poggia sulla piana d'arrivo spianata dal motore (World.height): niente elementi sospesi.
    const Z1 = w.z1, cHW = w.cHW, cLen = w.cLen, fx = w.routeX(Z1), gy0 = (x, z) => w.height(x, z);
    const sideA = 1, sideB = -1, fmodel = FM.model || 'meadow';
    const pick = () => C.people[(R() * C.people.length) | 0];
    function sample(pts, stepLen) {
      const out = [];
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1], n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / (stepLen || 18)));
        for (let k = 0; k < n; k++) out.push([lerp(a[0], b[0], k / n), lerp(a[1], b[1], k / n)]);
      }
      out.push(pts[pts.length - 1]);
      return out;
    }
    function road(pts, wd) {
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1], l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, nx = -(b[1] - a[1]) / l * wd / 2, nz = (b[0] - a[0]) / l * wd / 2;
        const q = [[a[0] + nx, 0, a[1] + nz], [b[0] + nx, 0, b[1] + nz], [b[0] - nx, 0, b[1] - nz], [a[0] - nx, 0, a[1] - nz]];
        for (const p of q) p[1] = gy0(p[0], p[2]) + 1.4;
        M.face(q, C.road, { bias: -10, flat: true, stroke: true });
        keep.push([a[0], a[1], wd]);
      }
    }
    function crowdBand(za, zb, sd, off, depth, n) {
      for (let k = 0; k < n; k++) { const z = lerp(za, zb, R()), x = w.routeX(z) + sd * (finishHW(z) + off + R() * depth); person(x, z, pick()); }
    }
    // Tribuna a gradoni piena: blocchi interrati sotto il piano, nessuna parte sospesa
    function stand(sd, za, zb, off, tiers, o, cx) {
      o = o || {}; cx = cx == null ? fx : cx;
      const tw = o.tw || 9, th = o.th || 5.5, zm = (za + zb) / 2, len = zb - za, x0 = cx + sd * off;
      let yG = 1e9;
      for (const z of [za, zm, zb]) for (let t = 0; t <= tiers; t++) yG = Math.min(yG, gy0(x0 + sd * t * tw, z));
      for (let t = 0; t < tiers; t++) {
        const xc = x0 + sd * (t * tw + tw / 2), hgt = 4 + (t + 1) * th;
        M.box(xc, yG - 14, zm, tw, len, hgt + 14, o.snow ? C.snowShade : C.stand, o.snow ? C.snow : C.seat);
        const n = Math.round(len / 6);
        for (let k = 0; k < n; k++) if (R() < 0.85) person(xc + (R() - 0.5) * (tw - 3), za + 3 + R() * (len - 6), pick(), yG + hgt);
      }
      const xb = x0 + sd * tiers * tw, topY = yG + 4 + tiers * th;
      if (!o.snow) M.box(xb + sd * 1.5, yG - 14, zm, 3, len, topY - yG + 20, C.stand, C.standTop);
      if (o.roof) {
        for (const z of [za + 4, zm, zb - 4]) M.prism(xb + sd * 1.5, topY + 4, z, 1.2, 16, 4, C.steel, null);
        const yIn = topY + 15, yOut = topY + 21, xi = x0 - sd * 2, xo = xb + sd * 4;
        M.face([[xi, yIn, za], [xi, yIn, zb], [xo, yOut, zb], [xo, yOut, za]], C.roof, { flat: true });
      }
      keep.push([x0 + sd * tiers * tw / 2, zm, len / 2 + tiers * tw]);
    }
    // Tribuna temporanea a ponteggio (pedane su pali)
    function tempStand(sd, za, zb, off, tiers, cx) {
      cx = cx == null ? fx : cx;
      const tw = 7, th = 4.5, zm = (za + zb) / 2, len = zb - za, x0 = cx + sd * off;
      let yG = 1e9;
      for (const z of [za, zm, zb]) for (let t = 0; t <= tiers; t++) yG = Math.min(yG, gy0(x0 + sd * t * tw, z));
      for (let t = 0; t < tiers; t++) {
        const xc = x0 + sd * (t * tw + tw / 2), yd = yG + 2 + (t + 1) * th;
        M.box(xc, yd - 1.5, zm, tw, len, 1.5, C.steel, C.seat);
        for (const z of [za + 2, zm, zb - 2]) M.prism(xc + sd * (tw / 2 - 1), yG - 3, z, 0.6, yd - yG + 2, 4, C.mast, null);
        const n = Math.round(len / 7);
        for (let k = 0; k < n; k++) if (R() < 0.8) person(xc + (R() - 0.5) * (tw - 2), za + 2 + R() * (len - 4), pick(), yd);
      }
      keep.push([x0 + sd * tiers * tw / 2, zm, len / 2 + tiers * tw]);
    }
    function zielhaus(sd, z, wdt) {
      const x = fx + sd * (cHW + 10 + wdt / 2), y = gy0(x, z) - 1;
      M.box(x, y, z, wdt, 22, 14, C.wood, C.roof);
      M.box(x, y + 14, z, wdt + 3, 25, 2, C.roof, C.roof);
      const gx = x - sd * (wdt / 2 + 0.4);
      M.face([[gx, y + 5, z - 9], [gx, y + 5, z + 9], [gx, y + 12, z + 9], [gx, y + 12, z - 9]], C.glass, { cull: true, center: [x, y + 7, z], emissive: true, flat: true });
      keep.push([x, z, wdt + 10]);
    }
    function screenAt(x, z) { // maxischermo rivolto verso monte
      const y = gy0(x, z);
      for (const dx of [-13, 13]) M.prism(x + dx, y - 1, z, 1, 30, 4, C.mast, null);
      M.box(x, y + 17, z, 34, 3, 19, hex('#1d2a3a'), hex('#1d2a3a'));
      M.face([[x - 15, y + 19, z - 1.6], [x + 15, y + 19, z - 1.6], [x + 15, y + 34, z - 1.6], [x - 15, y + 34, z - 1.6]], hex('#4f86c6'), { cull: true, center: [x, y + 26, z], emissive: true, flat: true });
      keep.push([x, z, 24]);
    }
    function vip(z) { // edificio media/VIP dietro la rete di fondo
      const wd = Math.min(cHW * 1.7, 150), y = gy0(fx, z) - 1;
      M.box(fx, y, z, wd, 24, 18, C.concrete, C.roof);
      M.face([[fx - wd / 2 + 4, y + 7, z - 12.4], [fx + wd / 2 - 4, y + 7, z - 12.4], [fx + wd / 2 - 4, y + 15, z - 12.4], [fx - wd / 2 + 4, y + 15, z - 12.4]], C.glass, { cull: true, center: [fx, y + 9, z], emissive: true, flat: true });
      keep.push([fx, z, wd / 2 + 10]);
    }
    function house(x, z, s, yaw) { // casa di paese: facciata chiara, tetto innevato, finestre
      const y = gy0(x, z) - 1, col = C.facades[(R() * C.facades.length) | 0], hgt = s * (0.7 + R() * 0.5);
      M.box(x, y, z, s, s * 0.8, hgt, col, col, yaw);
      const cs = Math.cos(yaw), sn = Math.sin(yaw), P = (lx, ly, lz) => [x + lx * cs - lz * sn, y + ly, z + lx * sn + lz * cs];
      const o = s * 0.1, w2 = s / 2 + o, d2 = s * 0.4 + o, rh = s * 0.38, c = [x, y + hgt, z];
      const a = P(-w2, hgt, -d2), b = P(w2, hgt, -d2), cc = P(w2, hgt, d2), d = P(-w2, hgt, d2), r1 = P(-w2, hgt + rh, 0), r2 = P(w2, hgt + rh, 0);
      M.face([a, b, r2, r1], C.roof, { cull: true, center: c }); M.face([d, cc, r2, r1], C.roof, { cull: true, center: c });
      M.face([a, d, r1], col, { cull: true, center: c }); M.face([b, cc, r2], col, { cull: true, center: c });
      for (const lz of [-1, 1]) for (const lx of [-0.25, 0.25]) {
        const zz = lz * (s * 0.4 + 0.4);
        M.face([P(lx * s - 2, hgt * 0.4, zz), P(lx * s + 2, hgt * 0.4, zz), P(lx * s + 2, hgt * 0.68, zz), P(lx * s - 2, hgt * 0.68, zz)], C.window, { cull: true, center: [x, y + hgt / 2, z], emissive: true, flat: true });
      }
      keep.push([x, z, s * 0.8]);
    }
    function church(x, z) {
      const y = gy0(x, z) - 1;
      house(x, z, 34, 0);
      M.box(x - 22, y, z, 10, 10, 46, hex('#f2ece3'), hex('#f2ece3'));
      const t = [x - 22, y + 64, z], c = [x - 22, y + 50, z], b = [[x - 27, y + 46, z - 5], [x - 17, y + 46, z - 5], [x - 17, y + 46, z + 5], [x - 27, y + 46, z + 5]];
      for (let i = 0; i < 4; i++) M.face([b[i], b[(i + 1) % 4], t], C.roofDark, { cull: true, center: c });
    }
    function village() {
      const xl = Math.max(w.xMin + 30, fx - w.faHW + 25), xr = Math.min(w.xMax - 30, fx + w.faHW - 25);
      let first = true;
      for (let z = Z1 + cLen + 42; z < w.zMax - 22; z += 44) for (let x = xl; x <= xr; x += 50) {
        const jx = x + (R() - 0.5) * 12, jz = z + (R() - 0.5) * 10;
        if (!free(jx, jz, 8)) continue;
        if (first && Math.abs(jx - fx) < 70) { church(jx, jz); first = false; } else house(jx, jz, 26 + R() * 12, (R() - 0.5) * 0.3);
      }
      for (let z = Z1 - 40; z < Z1 + cLen; z += 44) for (let off = cHW + 70; off < w.faHW - 15; off += 48) {
        const x = clamp(fx + sideB * off, w.xMin + 30, w.xMax - 30);
        if (free(x, z, 8)) house(x, z, 26 + R() * 10, Math.PI / 2 + (R() - 0.5) * 0.3);
      }
    }
    function gondola(x0, z0, x1, z1g) { // stazione a valle, piloni, fune e cabine
      const yb = gy0(x0, z0) - 1;
      M.box(x0, yb, z0, 34, 26, 18, C.concrete, C.concreteTop); M.box(x0, yb + 18, z0, 38, 30, 3, C.roof, C.roof);
      keep.push([x0, z0, 30]);
      const n = 6; let prev = [x0, yb + 22, z0];
      for (let i = 1; i <= n; i++) {
        const x = lerp(x0, x1, i / n), z = lerp(z0, z1g, i / n), y = gy0(x, z), last = i === n;
        const top = [x, y + (last ? 22 : 44), z];
        if (last) M.box(x, y - 1, z, 26, 22, 16, C.concrete, C.concreteTop);
        else { M.prism(x, y - 1, z, 2, 44, 4, C.mast, null); M.rod([x - 8, y + 44, z], [x + 8, y + 44, z], 1, C.mast); }
        M.rod(prev, top, 0.45, C.rail);
        const mx = lerp(prev[0], top[0], 0.5), my = lerp(prev[1], top[1], 0.5), mz = lerp(prev[2], top[2], 0.5);
        M.box(mx, my - 9, mz, 5, 5, 6, C.red, C.red);
        keep.push([x, z, 16]); prev = top;
      }
    }
    function glacierStadium(sd) { // edificio unico con vetrata verso la pista, terrazza con pubblico
      const x = fx + sd * (cHW + 34), za = Z1 - 30, zb = Z1 + cLen * 0.9, zm = (za + zb) / 2, len = zb - za;
      let y = 1e9; for (const z of [za, zm, zb]) y = Math.min(y, gy0(x - 20, z), gy0(x + 20, z));
      y -= 2;
      M.box(x, y - 8, zm, 44, len, 34, C.concrete, C.roof);
      const gx = x - sd * 22.3;
      M.face([[gx, y + 10, za + 6], [gx, y + 10, zb - 6], [gx, y + 22, zb - 6], [gx, y + 22, za + 6]], C.glass, { cull: true, center: [x, y + 10, zm], emissive: true, flat: true });
      for (let k = 0; k < 40; k++) person(x + (R() - 0.5) * 30, za + 6 + R() * (len - 12), pick(), y + 26);
      keep.push([x, zm, len / 2 + 30]);
      if (FM.road) {
        const px = x + sd * 48, ex = sd > 0 ? w.xMax - 4 : w.xMin + 4;
        road(sample([[px, zm - 50], [px, zm + 40], [lerp(px, ex, 0.5), zm + 80], [ex, Math.min(w.zMax - 10, zm + 120)]]), 16);
      }
    }

    // 1. linea del traguardo a terra
    {
      const h1 = finishHW(Z1), q = [[fx - h1, 0, Z1 - 2.5], [fx + h1, 0, Z1 - 2.5], [fx + h1, 0, Z1 + 2.5], [fx - h1, 0, Z1 + 2.5]];
      for (const p of q) p[1] = gy0(p[0], p[2]) + 3.2;
      M.face(q, C.red, { bias: -44, flat: true });
    }
    // 2. arco esattamente sopra la linea, piedritti appoggiati alla piana
    const archHW = finishHW(Z1) + 7, yA = gy0(fx, Z1);
    if (FM.steel_arch) {
      const R0 = archHW + 6, H0 = R0 * 0.85; let prev = null;
      for (let i = 0; i <= 16; i++) { const t = Math.PI * i / 16, p = [fx - Math.cos(t) * R0, yA + Math.sin(t) * H0, Z1 + 3]; if (prev) M.rod(prev, p, 2.4, C.steel); prev = p; }
      M.box(fx, yA + 30, Z1 + 3, archHW * 1.3, 3, 7, C.banner, C.banner);
    } else {
      for (const sd of [-1, 1]) M.box(fx + sd * archHW, gy0(fx + sd * archHW, Z1) - 1, Z1, 5, 5, 37, C.red, C.red);
      M.box(fx, yA + 34, Z1, archHW * 2 + 5, 6, 9, C.red, hex('#f6f9fc'));
    }
    // 3. corral: pannelli paralleli ai lati, rete di fondo; pannelli lungo il pendio d'arrivo
    for (const sd of [-1, 1]) boards(Z1 - 170, Z1 + cLen, sd, 3);
    {
      const zb = Z1 + cLen; let k = 0;
      for (let x = fx - cHW - 3; x < fx + cHW + 3; x += 12, k++) {
        const X = Math.min(fx + cHW + 3, x + 12), ya = gy0(x, zb), yb = gy0(X, zb);
        M.face([[x, ya, zb], [X, yb, zb], [X, yb + 9, zb], [x, ya + 9, zb]], k % 2 ? C.banner : hex('#2f7dd0'), { bias: -12 });
      }
    }
    keep.push([fx, Z1 + cLen / 2, cHW + cLen * 0.6]);
    // 4. modello specifico
    const zS0 = Z1 - 60, zS1 = Z1 + cLen * 0.85;
    if (fmodel === 'stadium') {
      const sides = FM.stands === 'single' ? [sideA] : [sideA, sideB];
      for (const sd of sides) stand(sd, zS0, zS1, cHW + 10, FM.snow_stand ? 7 : 5, { roof: FM.roof && sd === sideA, snow: FM.snow_stand });
      vip(Z1 + cLen + 26);
      if (FM.stands === 'single') crowdBand(Z1 - 150, Z1 + cLen * 0.8, sideB, 6, 16, 70);
      if (FM.screen) screenAt(fx + sideB * (cHW * 0.5), Z1 + cLen + 52);
    } else if (fmodel === 'village') {
      stand(sideA, Z1 - 30, Z1 + cLen * 0.7, cHW + 10, FM.stands === 'double' ? 4 : 3, {});
      if (FM.stands === 'double') stand(sideB, Z1 - 30, Z1 + cLen * 0.45, cHW + 10, 3, {});
      crowdBand(Z1 - 150, Z1 - 30, sideB, 6, 14, 50);
      if (FM.screen) screenAt(fx + sideB * (cHW + 26), Z1 + cLen * 0.8);
      village();
    } else if (fmodel === 'glacier') {
      glacierStadium(sideA);
      crowdBand(Z1 - 120, Z1 + cLen * 0.6, sideB, 6, 14, 55);
    } else {
      if (FM.stands === 'temporary') tempStand(sideA, Z1 - 20, Z1 + cLen * 0.6, cHW + 10, 4);
      crowdBand(Z1 - 160, Z1 + cLen * 0.6, sideB, 6, 16, 70);
      crowdBand(Z1 - 160, Z1 - 25, sideA, 6, 14, 36);
      if (FM.screen) screenAt(fx + sideA * (cHW + 30), Z1 + cLen * 0.85);
    }
    if (FM.zielhaus || fmodel === 'meadow') zielhaus(sideB, Z1 + cLen * 0.8, 26);
    if (FM.crowd_slope) for (const sd of [-1, 1]) crowdBand(Z1 - 300, Z1 - 60, sd, 6, 18, 60);
    if (FM.gondola) {
      const gx0 = clamp(fx + sideB * (cHW + 90), w.xMin + 40, w.xMax - 40);
      gondola(gx0, Z1 + 20, clamp(gx0 + sideB * 40, w.xMin + 30, w.xMax - 30), w.zOf(fmodel === 'glacier' ? 0.05 : 0.45));
    }
    if (m.night && fmodel !== 'meadow') {
      for (const [ox, oz] of [[-1, Z1 - 90], [1, Z1 - 90], [-1, Z1 + cLen], [1, Z1 + cLen]]) {
        const x = fx + ox * (w.faHW - 30), y = gy0(x, oz);
        M.prism(x, y - 1, oz, 2.2, 92, 4, C.mast, null);
        M.box(x - ox * 4, y + 90, oz, 14, 6, 6, C.lamp, C.lamp, 0, { emissive: true });
        w.lamps.push([x - ox * 4, y + 93, oz]); keep.push([x, oz, 14]);
      }
    }

    // ------------------------------------------------ modificatori puntuali
    const jumpsForDye = [];
    for (const f of w.feats) {
      const z = f.z, rx = w.routeX(z), hw = w.halfWidth(z);
      switch (f.type) {
        case 'jump': jumpsForDye.push(z); if (f.skier) skier(rx + 6, z + f.len * 0.5, w.height(rx, z) + f.amp * 0.5 + 16); break;
        case 'humps':
          for (let i = 0; i < f.count; i++) jumpsForDye.push(z + (i - (f.count - 1) / 2) * f.spacing);
          if (f.skier) skier(rx + 5, z + f.spacing * 0.5, w.height(rx, z) + f.amp + 10);
          break;
        case 'rocky_gate': // UNA formazione per lato, centro libero
          for (const sd of [-1, 1]) rock(rx + sd * (hw + f.gap * 0.55 + f.rock * 0.55), z, f.rock, 1.7);
          break;
        case 'underpass': bridge(rx, z, hw, f.kind); break;
        case 'fences': {
          const sides = f.side === 'both' ? [-1, 1] : [f.side === 'left' ? -1 : 1];
          for (const sd of sides) boards(z - f.len / 2, z + f.len / 2, sd, 7);
          break;
        }
        case 'crowd': for (const sd of [-1, 1]) crowd(rx + sd * (hw + 30), z, Math.round(f.count / 2), 14, 80); break;
        case 'tunnel': tunnelAt(rx, z, hw, f.kind); break;
        case 'building': { const x = clamp(rx + f.side * (hw + f.dist), w.xMin + 50, w.xMax - 50); hut(x, z, f.size, 0, true); break; }
        case 'grandstand': tempStand(f.side, z - 40, z + 40, hw + 22, 3, rx); break;
        case 'skier': {
          const j = w.feats.find((g) => g.poi === f.poi && (g.type === 'jump' || g.type === 'humps'));
          const len = j ? (j.len || j.spacing) : 60, amp = j ? j.amp : 14;
          skier(rx + 6, z + len * 0.5, w.height(rx, z) + amp * 0.5 + 18); break;
        }
      }
    }
    for (const z of jumpsForDye) { // linea blu di stacco sul dosso
      const rx = w.routeX(z), hw = w.halfWidth(z), pts = [];
      for (const [px, pz] of [[rx - hw, z - 1.6], [rx + hw, z - 1.6], [rx + hw, z + 1.6], [rx - hw, z + 1.6]]) pts.push([px, w.height(px, pz) + 2.8, pz]);
      M.face(pts, C.dye, { bias: -38, flat: true });
    }
    function skier(x, z, y) {
      M.box(x - 1.8, y, z, 1.2, 15, 0.7, hex('#22303f'), hex('#22303f'), 0.08);
      M.box(x + 1.8, y, z, 1.2, 15, 0.7, hex('#22303f'), hex('#22303f'), 0.08);
      M.box(x, y + 1.5, z + 1, 4, 3.2, 7.5, C.red, C.red, 0.1);
      M.box(x, y + 9, z + 2, 3, 3, 3, hex('#f4f6f8'), hex('#f4f6f8'));
    }
    function tunnelAt(rx, z, hw, kind) { // la pista passa SOPRA una galleria (strada o sentiero)
      for (const sd of [-1, 1]) {
        const x = rx + sd * (hw + 10), y = w.height(x, z);
        M.box(x, y - 2, z, 4, 30, 22, C.concrete, C.concreteTop);
        const ox = x + sd * 2.2;
        M.face([[ox, y, z - 9], [ox, y, z + 9], [ox, y + 14, z + 9], [ox, y + 14, z - 9]], hex('#2a333c'), { cull: true, center: [x, y + 8, z], flat: true });
        const ex = kind === 'road' ? (sd > 0 ? w.xMax - 4 : w.xMin + 4) : x + sd * 110;
        road(sample([[x + sd * 3, z], [ex, z + (kind === 'road' ? 30 : 8)]]), kind === 'road' ? 16 : 8);
      }
      keep.push([rx, z, hw + 50]);
    }
    function bridge(rx, z, hw, kind) { // sottopasso: la pista passa sotto un ponte (es. ferrovia)
      const yc = w.height(rx, z), deck = yc + 42, span = hw + 90;
      for (const sd of [-1, 1]) { const x = rx + sd * (hw + 16); const yb = w.height(x, z) - 4; M.box(x, yb, z, 12, 22, deck - yb, C.concrete, C.concreteTop); }
      M.box(rx, deck, z, span * 2, 22, 10, C.concrete, C.concreteTop);
      for (const dz of [-10, 10]) M.box(rx, deck + 10, z + dz, span * 2, 1.4, 4, C.rail, C.rail);
      if (kind === 'rail') {
        for (const dz of [-3, 3]) M.box(rx, deck + 10, z + dz, span * 2, 1, 1.2, hex('#46525e'), hex('#46525e'));
        M.box(rx - span * 0.45, deck + 11.5, z, 46, 11, 12, hex('#5b7f9e'), hex('#d9e3ea')); // vagone generico stilizzato
      }
      keep.push([rx, z, span + 20]);
    }
    // Laghetto puramente ornamentale nella piana d'arrivo
    if (m.lake) {
      const lz = w.z1 + m.marginBottom * 0.45, lx = clamp(w.routeX(lz) + m.lake.side * m.lake.dist, w.xMin + m.lake.r + 30, w.xMax - m.lake.r - 30), r = m.lake.r;
      const ring = (k) => { const pts = []; for (let i = 0; i < 18; i++) { const a = 2 * Math.PI * i / 18, px = lx + Math.cos(a) * r * k, pz = lz + Math.sin(a) * r * 0.62 * k; pts.push([px, w.height(px, pz) + 0.8 + (k < 1 ? 0.4 : 0), pz]); } return pts; };
      const o = ring(1.12), inn = ring(1), lo = { bias: -6, flat: true, stroke: true };
      for (let i = 0; i < 18; i++) { const j = (i + 1) % 18; M.face([o[i], o[j], inn[j], inn[i]], C.lakeRim, lo); M.face([[lx, inn[i][1], lz], inn[i], inn[j]], C.lake, Object.assign({}, lo, { bias: -8 })); }
      keep.push([lx, lz, r * 1.25]);
    }

    // Illuminazione serale (solo piste con night)
    if (m.night) {
      let k = 0;
      for (let z = w.zOf(0.33); z < w.z1 + 60; z += 105, k++) {
        const sd = k % 2 ? -1 : 1, x = w.routeX(z) + sd * (finishHW(z) + 36), y = w.height(x, z);
        M.prism(x, y - 1, z, 1.5, 68, 4, C.mast, null);
        M.box(x - sd * 3, y + 66, z, 9, 5, 4, C.lamp, C.lamp, 0, { emissive: true });
        w.lamps.push([x - sd * 3, y + 68, z]); keep.push([x, z, 12]);
      }
    }

    // Chalet (posizioni deterministiche ai lati, fuori pista)
    for (let k = 0; k < m.huts; k++) {
      const s = (k + 0.5) / m.huts * 0.95, z = w.zOf(clamp(s + (R() - 0.5) * 0.08, 0.04, 0.94)), sd = k % 2 ? -1 : 1;
      const x = clamp(w.routeX(z) + sd * (w.halfWidth(z) + 110 + R() * 150), w.xMin + 60, w.xMax - 60);
      if (free(x, z, 30)) hut(x, z, 30 + R() * 10, (R() - 0.5) * 0.7, false);
    }
    // Rocce: preferiscono i tratti ripidi e le creste
    let placed = 0;
    for (let tries = 0; placed < m.rocks && tries < m.rocks * 30; tries++) {
      const x = lerp(w.xMin + 40, w.xMax - 40, R()), z = lerp(w.zMin + 40, w.zMax - 60, R());
      const d = Math.abs(x - w.routeX(z)); if (d < w.halfWidth(z) + 45 || !free(x, z, 10)) continue;
      if (z > w.z1 - 70 && d < w.faHW + 15) continue;
      const st = Math.hypot(w.height(x + 8, z) - w.height(x - 8, z), w.height(x, z + 8) - w.height(x, z - 8)) / 16;
      if (R() > 0.15 + st * 0.7) continue;
      rock(x, z, 7 + R() * 14); placed++;
    }
    // Abeti: boschi a macchie, radi sopra il limite del bosco, mai sulla pista
    placed = 0;
    for (let tries = 0; placed < m.trees && tries < m.trees * 12; tries++) {
      const x = lerp(w.xMin + 26, w.xMax - 26, R()), z = lerp(w.zMin + 22, w.zMax - 22, R());
      const u = (z - w.z0) / w.L;
      if (u < m.treeline && R() > 0.12) continue;
      const d = Math.abs(x - w.routeX(z)), s = 17 + R() * 14;
      if (d < finishHW(z) + 22 + s * 0.4 || !free(x, z, 4)) continue;
      if (z > w.z1 - 70 && d < w.faHW + 15) continue; // piana d'arrivo libera
      const field = 0.5 + 0.5 * Math.sin(x * 0.0062 + w.ph[2]) * Math.sin(z * 0.0051 + w.ph[3]);
      if (R() > 0.3 + 0.7 * field) continue;
      fir(x, z, s); placed++;
    }

    M.freeze();
    // Profilo illustrativo dal diorama stesso
    const prof = [];
    for (let i = 0; i <= 120; i++) { const p = w.point(i / 120); prof.push(p[1]); }
    return { mesh: M, overlay, profile: prof, poiPts: course.poi.map((p) => w.point(p.s, 12)) };
  }
  LSA.buildScene = buildScene;
})(window.LSA);
