/* LiveSportArena 3D · engine.js
 * Motore unico: terreno parametrico, mesh nel mondo, camera orbitale, renderer Canvas 2D.
 * Canvas 2D è il percorso principale: funziona da file:// e in ogni browser, senza GPU/WebGL.
 * Tutte le geometrie sono generate UNA volta; muovendo la camera si riproiettano solo i vertici. */
(function (LSA) {
  'use strict';

  // ---------------------------------------------------------------- utilità
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
  const bell = (v, w) => Math.exp(-(v * v) / (w * w));
  function rng(seed) { // mulberry32: deterministico per pista
    let s = (seed >>> 0) || 1;
    return function () {
      s = (s + 0x6D2B79F5) >>> 0; let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hex(c) { c = c.replace('#', ''); return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)]; }
  LSA.util = { clamp, lerp, smooth, bell, rng, hex };

  // Modificatori che deformano il terreno (gli altri sono solo oggetti o curvatura della linea).
  const TERRAIN = { jump: 1, humps: 1, compression: 1, rolling: 1, rocky_gate: 1, tight_passage: 1, underpass: 1, tunnel: 1 };

  // ---------------------------------------------------------------- mondo
  function World(m) {
    const W = this;
    W.m = m; W.L = m.L; W.W = m.W; W.H = m.H;
    W.z0 = -m.L / 2; W.z1 = m.L / 2;
    W.zMin = W.z0 - m.marginTop; W.zMax = W.z1 + m.marginBottom;
    W.xMin = -m.W / 2; W.xMax = m.W / 2;
    W.hw = m.pisteW / 2;
    // area d'arrivo: corral recintato largo cHW, lungo cLen dopo la linea; piana spianata larga faHW
    W.fm = m.finishModel || { model: 'meadow' };
    W.cHW = Math.max(W.hw * 1.5 + 12, 58); W.cLen = Math.min(m.marginBottom * 0.45, 150); W.faHW = W.cHW + 125;
    const R = rng(m.seed ^ 0x9e3779b9);
    W.ph = [0, 1, 2, 3, 4, 5].map(() => R() * 6.283);
    W.feats = m.features.map((f) => Object.assign({ z: W.z0 + f.s * m.L }, f));

    // Linea della pista x = f(z): spline sui controlli + curve/S/rettilinei dei modificatori.
    const C = m.route, n = C.length;
    const base = (z) => {
      const u = clamp((z - W.z0) / m.L, 0, 1) * (n - 1);
      const i = Math.min(n - 2, Math.floor(u)), q = u - i;
      const p0 = C[Math.max(0, i - 1)], p1 = C[i], p2 = C[i + 1], p3 = C[Math.min(n - 1, i + 2)];
      return 0.5 * (2 * p1 + (-p0 + p2) * q + (2 * p0 - 5 * p1 + 4 * p2 - p3) * q * q + (-p0 + 3 * p1 - 3 * p2 + p3) * q * q * q) * m.W;
    };
    W.step = 4;
    const N = Math.ceil((W.zMax - W.zMin) / W.step) + 2;
    W.rt = new Float32Array(N);
    const lim = m.W / 2 - m.pisteW - 90;
    for (let k = 0; k < N; k++) {
      const z = W.zMin + k * W.step;
      let x = base(z), off = 0;
      for (const f of W.feats) {
        const a = z - f.z;
        if (f.type === 'straight') x *= 1 - 0.75 * bell(a, f.len);
      }
      for (const f of W.feats) {
        const a = z - f.z;
        if (f.type === 'turn') off += f.amp * m.W * bell(a, f.len);
        else if (f.type === 's_turn') off += f.amp * m.W * Math.sin(2 * Math.PI * a / f.wave) * bell(a, f.len);
      }
      // l'area d'arrivo resta centrata e diritta
      const fin = smooth((z - (W.z1 - 160)) / 220);
      W.rt[k] = clamp((x + off) * (1 - fin), -lim, lim);
    }

    // Profilo longitudinale: integrale della pendenza (archetipo × muri/piani).
    const sl = m.slope, SN = 900;
    W.slopeAt = (u) => {
      let v = sl[sl.length - 1][1];
      if (u <= sl[0][0]) v = sl[0][1];
      else for (let i = 1; i < sl.length; i++) if (u <= sl[i][0]) { v = lerp(sl[i - 1][1], sl[i][1], smooth((u - sl[i - 1][0]) / (sl[i][0] - sl[i - 1][0]))); break; }
      for (const f of W.feats) if (f.type === 'steep' || f.type === 'flat') v *= 1 + (f.mult - 1) * bell(u - f.s, f.len / m.L);
      return Math.max(0.08, v);
    };
    W.prof = new Float32Array(SN + 1);
    let acc = 0;
    for (let i = 1; i <= SN; i++) { acc += W.slopeAt((i - 0.5) / SN) / SN; W.prof[i] = acc; }
    W.profTot = acc; W.SN = SN;
    W.lamps = [];
  }
  World.prototype.routeX = function (z) {
    const k = (z - this.zMin) / this.step, i = clamp(Math.floor(k), 0, this.rt.length - 2), q = clamp(k - i, 0, 1);
    return this.rt[i] + (this.rt[i + 1] - this.rt[i]) * q;
  };
  World.prototype.profile = function (u) {
    const H = this.H;
    if (u < 0) return H - u * H * 1.25 * (this.m.peak || 1);
    if (u > 1) return -(u - 1) * H * 0.1;
    const k = u * this.SN, i = Math.min(this.SN - 1, Math.floor(k)), q = k - i;
    const c = this.prof[i] + (this.prof[i + 1] - this.prof[i]) * q;
    return H * (1 - c / this.profTot);
  };
  World.prototype.halfWidth = function (z) {
    let w = this.hw;
    for (const f of this.feats) if (f.type === 'rocky_gate' || f.type === 'tight_passage') w *= 1 - f.narrow * bell(z - f.z, f.len * 0.9);
    return w;
  };
  World.prototype.height = function (x, z) {
    const m = this.m, P = this.ph;
    const u = (z - this.z0) / m.L;
    let y = this.profile(u);
    const d = x - this.routeX(z), ad = Math.abs(d), hw = this.hw;
    y += m.shoulder * (1 - bell(d, m.W * (m.valleyW || 0.26)));
    if (m.bowl) y += m.bowl * (1 - bell(d, hw * 3.4)) * bell(z - (this.z1 + m.marginBottom * 0.2), 280);
    y += m.crest * (bell(x - this.xMin, m.W * 0.11) + bell(x - this.xMax, m.W * 0.11)) * (0.65 + 0.35 * Math.sin(z * 0.0037 + P[0]));
    const damp = 0.18 + 0.82 * smooth((ad - hw) / 170);
    y += m.noise * damp * (Math.sin(x * 0.0105 + P[1]) * Math.sin(z * 0.0085 + P[2]) + 0.55 * Math.sin(x * 0.021 + z * 0.016 + P[3]) + 0.28 * Math.sin(x * 0.047 - z * 0.039 + P[4]));
    for (const f of this.feats) {
      if (!TERRAIN[f.type]) continue;
      const a = z - f.z;
      if (a < -500 || a > 500) continue;
      switch (f.type) {
        case 'jump': {
          if (a < -f.len || a > f.len) break;
          const k = a < 0 ? f.amp * smooth((a + f.len) / f.len) : f.amp * (1 - smooth(a / (f.len * 0.55)));
          y += k * bell(d, hw * 1.9); break;
        }
        case 'humps': {
          let k = 0;
          for (let i = 0; i < f.count; i++) k += f.amp * bell(a - (i - (f.count - 1) / 2) * f.spacing, f.spacing * 0.3);
          y += k * bell(d, hw * 1.9); break;
        }
        case 'compression': y -= f.depth * bell(a, f.len) * bell(d, hw * 3); break;
        case 'rolling': y += f.amp * Math.sin(2 * Math.PI * a / f.wave) * bell(a, f.len) * bell(d, hw * 2.4); break;
        case 'rocky_gate': case 'tight_passage': y += f.rise * (1 - bell(d, this.halfWidth(z) + f.gap)) * bell(a, f.len); break;
        case 'underpass': y += f.rise * (1 - bell(d, hw * 1.35)) * bell(a, f.len); break;
        case 'tunnel': y -= f.rise * smooth((ad - hw - 8) / 30) * bell(a, f.len); break;
      }
    }
    // Piana d'arrivo: terreno spianato sotto corral, tribune ed edifici (nessun oggetto sospeso)
    const fz = smooth((z - (this.z1 - 50)) / 80);
    if (fz > 0) { const fm = fz * (1 - smooth((ad - this.faHW) / 90)); if (fm > 0) y += (this.profile(u) + 1 - y) * fm; }
    return y;
  };
  // Fondo del diorama: lastra di spessore costante che segue la pendenza.
  World.prototype.base = function (z) { return this.profile((z - this.z0) / this.L) - (0.1 * this.H + 120); };
  World.prototype.zOf = function (s) { return this.z0 + s * this.L; };
  World.prototype.point = function (s, up) { const z = this.zOf(s), x = this.routeX(z); return [x, this.height(x, z) + (up || 0), z]; };
  LSA.World = World;

  // ---------------------------------------------------------------- mesh
  // Ogni faccia: vertici mondo, normale, colore giorno/notte precalcolato, bias di profondità.
  const LIGHT = (function () { const v = [0.38, 0.86, 0.34], l = Math.hypot(...v); return v.map((x) => x / l); })();
  function Mesh(world) { this.w = world; this.v = []; this.f = []; this.night = !!world.m.night; }
  Mesh.prototype.face = function (pts, col, o) {
    o = o || {};
    // normale di Newell
    let nx = 0, ny = 0, nz = 0, cx = 0, cy = 0, cz = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      nx += (a[1] - b[1]) * (a[2] + b[2]); ny += (a[2] - b[2]) * (a[0] + b[0]); nz += (a[0] - b[0]) * (a[1] + b[1]);
      cx += a[0]; cy += a[1]; cz += a[2];
    }
    cx /= pts.length; cy /= pts.length; cz /= pts.length;
    const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    if (o.center) { if (nx * (cx - o.center[0]) + ny * (cy - o.center[1]) + nz * (cz - o.center[2]) < 0) { nx = -nx; ny = -ny; nz = -nz; } }
    else if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
    const idx = [];
    for (const p of pts) { this.v.push(p[0], p[1], p[2]); idx.push(this.v.length / 3 - 1); }
    const rgb = typeof col === 'string' ? hex(col) : col;
    const dl = Math.max(0, nx * LIGHT[0] + ny * LIGHT[1] + nz * LIGHT[2]);
    const sh = (o.flat ? 0.93 : o.soft ? 0.8 + 0.22 * dl : 0.6 + 0.42 * dl) * (o.shade || 1);
    const day = rgb.map((c) => clamp(Math.round(c * sh), 0, 255));
    let night = null;
    if (this.night) {
      if (o.emissive) night = rgb;
      else {
        const lit = clamp(this.w.lit(cx, cz) * (o.kind === 'piste' ? 1 : 0.8), 0, 1);
        const k = [lerp(0.25, 1.0, lit), lerp(0.31, 0.97, lit), lerp(0.48, 0.9, lit)];
        night = rgb.map((c, i) => clamp(Math.round(c * sh * k[i]), 0, 255));
      }
    }
    this.f.push({
      i: idx, n: [nx, ny, nz], c: [cx, cy, cz], cull: !!o.cull, bias: o.bias || 0, stroke: !!o.stroke,
      day: 'rgb(' + day + ')', nightC: night ? 'rgb(' + night + ')' : null,
    });
  };
  // Prisma verticale a base poligonale (tronchi, pali, piloni).
  Mesh.prototype.prism = function (x, y, z, r, h, sides, col, top, rot) {
    const ring = [], up = [];
    for (let i = 0; i < sides; i++) { const a = (rot || 0) + 2 * Math.PI * i / sides; ring.push([x + r * Math.cos(a), y, z + r * Math.sin(a)]); up.push([x + r * Math.cos(a), y + h, z + r * Math.sin(a)]); }
    const c = [x, y + h / 2, z];
    for (let i = 0; i < sides; i++) { const j = (i + 1) % sides; this.face([ring[i], ring[j], up[j], up[i]], col, { cull: true, center: c }); }
    if (top) this.face(up, top, { cull: true, center: c });
  };
  // Box orientato (yaw) con base appoggiata a y.
  Mesh.prototype.box = function (x, y, z, w, d, h, col, topCol, yaw, opt) {
    const cs = Math.cos(yaw || 0), sn = Math.sin(yaw || 0);
    const P = (lx, ly, lz) => [x + lx * cs - lz * sn, y + ly, z + lx * sn + lz * cs];
    const b = [P(-w / 2, 0, -d / 2), P(w / 2, 0, -d / 2), P(w / 2, 0, d / 2), P(-w / 2, 0, d / 2)];
    const t = b.map((p) => [p[0], p[1] + h, p[2]]);
    const c = [x, y + h / 2, z], o = Object.assign({ cull: true, center: c }, opt || {});
    for (let i = 0; i < 4; i++) { const j = (i + 1) % 4; this.face([b[i], b[j], t[j], t[i]], col, o); }
    this.face(t, topCol || col, o);
  };
  // Asta tra due punti (sezione quadrata) per corde, ringhiere, travi.
  Mesh.prototype.rod = function (a, b, r, col, opt) {
    const dx = b[0] - a[0], dz = b[2] - a[2], l = Math.hypot(dx, dz) || 1;
    let px = -dz / l * r, pz = dx / l * r;
    if (Math.hypot(dx, dz) < 1e-3) { px = r; pz = 0; }
    const o = Object.assign({ bias: 0 }, opt || {});
    this.face([[a[0] + px, a[1], a[2] + pz], [b[0] + px, b[1], b[2] + pz], [b[0] - px, b[1], b[2] - pz], [a[0] - px, a[1], a[2] - pz]], col, o);
    this.face([[a[0], a[1] + r, a[2]], [b[0], b[1] + r, b[2]], [b[0], b[1] - r, b[2]], [a[0], a[1] - r, a[2]]], col, o);
  };
  Mesh.prototype.freeze = function () {
    this.V = new Float32Array(this.v); this.v = null;
    const n = this.V.length / 3;
    this.PX = new Float32Array(n); this.PY = new Float32Array(n); this.PD = new Float32Array(n);
    this.K = new Float64Array(this.f.length); this.SH = Math.pow(2, Math.ceil(Math.log2(this.f.length + 1)));
  };
  LSA.Mesh = Mesh;

  // ---------------------------------------------------------------- camera
  function Camera(world) {
    this.w = world;
    this.az = 0; this.tilt = 0.5; this.dist = 3000; this.t = [0, 0, 0];
    this.goal = { az: 0, tilt: 0.5, dist: 3000, t: [0, 0, 0] };
    this.fov = 38 * Math.PI / 180; this.W = 1; this.Hh = 1;
  }
  Camera.prototype.basis = function (az, tilt, dist, t) {
    const ct = Math.cos(tilt);
    const e = [t[0] + dist * ct * Math.sin(az), t[1] + dist * Math.sin(tilt), t[2] + dist * ct * Math.cos(az)];
    let f = [t[0] - e[0], t[1] - e[1], t[2] - e[2]]; let l = Math.hypot(...f); f = f.map((x) => x / l);
    let r = [-f[2], 0, f[0]]; l = Math.hypot(...r) || 1; r = r.map((x) => x / l);
    const u = [r[1] * f[2] - r[2] * f[1], r[2] * f[0] - r[0] * f[2], r[0] * f[1] - r[1] * f[0]];
    const F = (this.Hh / 2) / Math.tan(this.fov / 2);
    return { e, f, r, u, F };
  };
  Camera.prototype.update = function () { this.B = this.basis(this.az, this.tilt, this.dist, this.t); };
  Camera.prototype.project = function (x, y, z, B) {
    B = B || this.B;
    const vx = x - B.e[0], vy = y - B.e[1], vz = z - B.e[2];
    const d = vx * B.f[0] + vy * B.f[1] + vz * B.f[2];
    return [this.W / 2 + B.F * (vx * B.r[0] + vy * B.r[1] + vz * B.r[2]) / d, this.Hh / 2 - B.F * (vx * B.u[0] + vy * B.u[1] + vz * B.u[2]) / d, d];
  };
  // Distanza che inquadra tutto il diorama dentro il riquadro libero (margini UI).
  Camera.prototype.fit = function (az, tilt, target, box, margin) {
    let lo = 200, hi = 40000;
    for (let it = 0; it < 28; it++) {
      const mid = (lo + hi) / 2, B = this.basis(az, tilt, mid, target);
      let ok = true;
      for (const p of box) {
        const q = this.project(p[0], p[1], p[2], B);
        if (q[2] < 10 || q[0] < margin.l || q[0] > this.W - margin.r || q[1] < margin.t || q[1] > this.Hh - margin.b) { ok = false; break; }
      }
      if (ok) hi = mid; else lo = mid;
    }
    return hi;
  };
  Camera.prototype.step = function () {
    const g = this.goal, k = 0.17;
    const d = Math.abs(this.az - g.az) + Math.abs(this.tilt - g.tilt) + Math.abs(this.dist - g.dist) / Math.max(200, g.dist) +
      (Math.abs(this.t[0] - g.t[0]) + Math.abs(this.t[1] - g.t[1]) + Math.abs(this.t[2] - g.t[2])) / 300;
    if (d < 0.0004) { this.az = g.az; this.tilt = g.tilt; this.dist = g.dist; this.t = g.t.slice(); return false; }
    this.az = lerp(this.az, g.az, k); this.tilt = lerp(this.tilt, g.tilt, k); this.dist = lerp(this.dist, g.dist, k);
    this.t = this.t.map((v, i) => lerp(v, g.t[i], k));
    return true;
  };
  LSA.Camera = Camera;

  // ---------------------------------------------------------------- renderer Canvas 2D
  function Renderer(canvas, mesh, cam) {
    this.cv = canvas; this.ctx = canvas.getContext('2d', { alpha: false });
    if (!this.ctx) throw new Error('Canvas 2D non disponibile');
    this.m = mesh; this.cam = cam; this.night = false; this.dpr = 1;
    this.overlay = null; // linea di gara sempre leggibile
  }
  Renderer.prototype.resize = function (w, h) {
    this.dpr = Math.min(1.75, window.devicePixelRatio || 1);
    this.cv.width = Math.max(1, Math.round(w * this.dpr)); this.cv.height = Math.max(1, Math.round(h * this.dpr));
    this.cv.style.width = w + 'px'; this.cv.style.height = h + 'px';
    this.cam.W = w; this.cam.Hh = h;
  };
  Renderer.prototype.draw = function (fast) {
    const ctx = this.ctx, m = this.m, cam = this.cam, W = cam.W, H = cam.Hh;
    cam.update();
    const B = cam.B, e = B.e, V = m.V, PX = m.PX, PY = m.PY, PD = m.PD, nv = V.length / 3;
    const fx = B.f[0], fy = B.f[1], fz = B.f[2], rx = B.r[0], ry = B.r[1], rz = B.r[2], ux = B.u[0], uy = B.u[1], uz = B.u[2], F = B.F;
    for (let i = 0, j = 0; i < nv; i++, j += 3) {
      const vx = V[j] - e[0], vy = V[j + 1] - e[1], vz = V[j + 2] - e[2];
      const d = vx * fx + vy * fy + vz * fz;
      PD[i] = d;
      if (d > 1) { PX[i] = W / 2 + F * (vx * rx + vy * ry + vz * rz) / d; PY[i] = H / 2 - F * (vx * ux + vy * uy + vz * uz) / d; }
    }
    // selezione facce visibili + ordinamento per profondità (algoritmo del pittore)
    const faces = m.f, K = m.K, SH = m.SH; let cnt = 0;
    const near = 12;
    for (let k = 0; k < faces.length; k++) {
      const f = faces[k], ix = f.i;
      let ok = true, minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
      for (let q = 0; q < ix.length; q++) {
        const v = ix[q]; if (PD[v] < near) { ok = false; break; }
        const x = PX[v], y = PY[v];
        if (x < minx) minx = x; if (x > maxx) maxx = x; if (y < miny) miny = y; if (y > maxy) maxy = y;
      }
      if (!ok || maxx < -20 || minx > W + 20 || maxy < -20 || miny > H + 20) continue;
      const c = f.c;
      if (f.cull && f.n[0] * (e[0] - c[0]) + f.n[1] * (e[1] - c[1]) + f.n[2] * (e[2] - c[2]) <= 0) continue;
      // chiave = profondità quantizzata + indice: ordinamento numerico nativo, molto più rapido del comparatore
      const dep = (c[0] - e[0]) * fx + (c[1] - e[1]) * fy + (c[2] - e[2]) * fz + f.bias;
      K[cnt++] = Math.floor(Math.max(0, dep) * 8) * SH + k;
    }
    const list = K.subarray(0, cnt);
    list.sort();
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const g = ctx.createLinearGradient(0, 0, 0, H);
    if (this.night) { g.addColorStop(0, '#0d1a2e'); g.addColorStop(0.6, '#1d3352'); g.addColorStop(1, '#2a4566'); }
    else { g.addColorStop(0, '#9fc3e2'); g.addColorStop(0.55, '#cfe2f0'); g.addColorStop(1, '#e3eef6'); }
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    if (this.night && this.stars) { ctx.fillStyle = 'rgba(255,255,255,.55)'; for (const s of this.stars) ctx.fillRect(s[0] * W, s[1] * H * 0.55, s[2], s[2]); }

    ctx.lineJoin = 'round'; ctx.lineWidth = 0.9;
    const night = this.night; let last = null;
    for (let n = cnt - 1; n >= 0; n--) {
      const f = faces[list[n] % SH], ix = f.i, col = night && f.nightC ? f.nightC : f.day;
      ctx.beginPath();
      ctx.moveTo(PX[ix[0]], PY[ix[0]]);
      for (let q = 1; q < ix.length; q++) ctx.lineTo(PX[ix[q]], PY[ix[q]]);
      ctx.closePath();
      if (col !== last) { ctx.fillStyle = col; if (!fast) ctx.strokeStyle = col; last = col; }
      ctx.fill();
      if (f.stroke && !fast) ctx.stroke();
    }
    // Linea di gara in trasparenza: resta leggibile anche da angolazioni sfavorevoli.
    if (this.overlay) {
      ctx.beginPath(); let pen = false;
      for (const p of this.overlay) {
        const q = cam.project(p[0], p[1], p[2], B);
        if (q[2] < near) { pen = false; continue; }
        if (!pen) { ctx.moveTo(q[0], q[1]); pen = true; } else ctx.lineTo(q[0], q[1]);
      }
      ctx.strokeStyle = night ? 'rgba(120,200,255,.4)' : 'rgba(8,125,203,.38)'; ctx.lineWidth = 2.4; ctx.lineCap = 'round'; ctx.stroke();
    }
    if (night && m.w.lamps.length) {
      ctx.globalCompositeOperation = 'lighter';
      for (const L of m.w.lamps) {
        const q = cam.project(L[0], L[1], L[2], B); if (q[2] < near) continue;
        const r = clamp(2600 * F / 700 / q[2] * 18, 6, 70);
        const gr = ctx.createRadialGradient(q[0], q[1], 0, q[0], q[1], r);
        gr.addColorStop(0, 'rgba(255,244,210,.85)'); gr.addColorStop(0.25, 'rgba(255,230,170,.32)'); gr.addColorStop(1, 'rgba(255,220,150,0)');
        ctx.fillStyle = gr; ctx.fillRect(q[0] - r, q[1] - r, 2 * r, 2 * r);
      }
      ctx.globalCompositeOperation = 'source-over';
    }
    return cnt;
  };
  LSA.Renderer = Renderer;
})(window.LSA = window.LSA || {});
