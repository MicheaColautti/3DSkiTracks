/* LiveSportArena 3D · ui.js
 * Interfaccia condivisa: intestazione con bandiera, schede, pin, etichette, camera e input. */
(function (LSA) {
  'use strict';
  const { clamp } = LSA.util;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  LSA.start = function (course) {
    const app = $('app'), canvas = $('world'), pinsBox = $('pins');
    const notice = (msg) => { const n = $('notice'); n.innerHTML = msg; n.classList.remove('hidden'); };

    // ---------------- intestazione, scheda pista
    const flag = $('flag');
    flag.innerHTML = (window.LSA_FLAGS || {})[course.iso] || '';
    flag.classList.toggle('sq', course.iso === 'CH');
    flag.title = course.country;
    $('title').textContent = course.location + ' / ' + course.course;
    $('subtitle').textContent = course.disciplineLabel + ' · ' + course.country + ' · ' + course.gender;
    const mt = course.metrics || {}, rows = [];
    if (mt.length) rows.push(['Lunghezza', mt.length]);
    if (mt.vertical) rows.push(['Dislivello', mt.vertical]);
    if (mt.alt) rows.push(['Quote partenza → arrivo', mt.alt]);
    if (mt.maxgrad) rows.push(['Pendenza massima', mt.maxgrad]);
    $('stats').innerHTML =
      '<div class="eyebrow">' + esc(course.location) + ' · ' + esc(course.country) + '</div>' +
      '<h2>' + esc(course.subtitle || course.course) + '</h2>' +
      '<div class="tags"><span class="tag disc d-' + course.discipline + '">' + course.discipline + ' · ' + esc(course.disciplineLabel) + '</span>' +
      '<span class="tag">Modello ' + esc(course.archetypeLabel) + '</span></div>' +
      (rows.length ? '<div class="metrics">' + rows.map((r) => '<div class="metric' + (r[1].length > 9 ? ' wide' : '') + '"><strong>' + esc(r[1]) + '</strong><span>' + r[0] + '</span></div>').join('') + '</div>' : '');

    // ---------------- mondo e renderer
    let world, scene, cam, R;
    try {
      world = new LSA.World(course.model);
      scene = LSA.buildScene(world, course);
      cam = new LSA.Camera(world);
      R = new LSA.Renderer(canvas, scene.mesh, cam);
      R.overlay = scene.overlay;
    } catch (err) {
      console.error(err);
      notice('<strong>Impossibile disegnare la mappa.</strong><br>Apri il file con una versione aggiornata di Safari, Chrome, Firefox o Edge.');
      return;
    }
    const sr = LSA.util.rng(course.model.seed + 7);
    R.stars = Array.from({ length: 90 }, () => [sr(), sr(), sr() < 0.85 ? 1 : 1.6]);
    if (course.model.night) $('nightBtn').classList.remove('hidden');

    // Bounding box del diorama per l'inquadratura
    let yMax = -1e9, yMin = 1e9;
    for (let i = 0; i <= 12; i++) for (let j = 0; j <= 24; j++) {
      const y = world.height(world.xMin + (world.xMax - world.xMin) * i / 12, world.zMin + (world.zMax - world.zMin) * j / 24);
      yMax = Math.max(yMax, y); yMin = Math.min(yMin, y);
    }
    // punti del perimetro (sopra e sotto la lastra) per inquadrare l'intero diorama
    const box = [];
    for (let k = 0; k <= 16; k++) {
      const z = world.zMin + (world.zMax - world.zMin) * k / 16;
      for (const x of [world.xMin, world.xMax]) box.push([x, world.height(x, z) + 30, z], [x, world.base(z), z]);
    }
    for (let k = 0; k <= 8; k++) for (const z of [world.zMin, world.zMax]) { const x = world.xMin + (world.xMax - world.xMin) * k / 8; box.push([x, world.height(x, z) + 30, z]); }
    const center = [0, (world.base((world.zMin + world.zMax) / 2) + yMax) / 2, (world.zMin + world.zMax) / 2];
    const isMobile = () => cam.W < 760;
    const landscape = () => cam.W >= cam.Hh * 0.95;
    function margins() {
      if (isMobile()) return { l: 10, r: 56, t: 160, b: 60 };
      return { l: 24, r: 84, t: cam.W < 1100 ? 150 : 80, b: 30 };
    }
    let fitDist = 3000, userMoved = false, view = 'explore';
    function homeGoal() {
      const az = landscape() ? -0.62 : -0.3, tilt = landscape() ? 0.6 : 0.66;
      fitDist = cam.fit(az, tilt, center, box, margins());
      return { az, tilt, dist: fitDist, t: center.slice() };
    }
    function topGoal() {
      const az = landscape() ? -Math.PI / 2 : 0, tilt = 1.48;
      return { az, tilt, dist: cam.fit(az, tilt, center, box, margins()), t: center.slice() };
    }
    const setView = (v) => {
      view = v;
      $('viewExplore').classList.toggle('active', v === 'explore');
      $('viewTop').classList.toggle('active', v === 'top');
    };
    function reset() { cam.goal = homeGoal(); setView('explore'); userMoved = false; dirty = true; }

    // ---------------- pin e lista POI
    const poi = course.poi;
    let active = -1, labelsOn = false, dirty = true;
    const hint = $('hint'); function hideHint() { hint.classList.add('gone'); }
    const pins = poi.map((p, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'pin';
      b.innerHTML = '<span class="pinLeader"></span><span class="pinDot"></span><span class="pinText">' + esc(p.name) + '</span>';
      b.title = p.name; b.setAttribute('aria-label', 'Sezione: ' + p.name);
      b.addEventListener('click', (e) => { e.stopPropagation(); select(i); });
      pinsBox.appendChild(b);
      return b;
    });
    const list = $('pathList');
    poi.forEach((p, i) => {
      const li = document.createElement('li');
      li.innerHTML = '<button type="button"><span class="n">' + String(i + 1).padStart(2, '0') + '</span><span><strong>' + esc(p.name) + '</strong><em>' + esc(p.type) + '</em></span></button>';
      li.firstChild.addEventListener('click', () => select(i));
      list.appendChild(li);
    });
    $('count').textContent = poi.length + ' sezioni';

    let sizes = [];
    const measure = () => { sizes = pins.map((el) => { const t = el.querySelector('.pinText'); return { w: Math.max(40, t.offsetWidth), h: Math.max(22, t.offsetHeight) }; }); };
    let masks = [];
    function refreshMasks() {
      masks = [];
      for (const id of ['header', 'toolbar', 'listBtn', 'stats', 'controls', 'detail', 'pathPanel', 'profilePanel']) {
        const el = $(id);
        if (!el || el.classList.contains('hidden') || el.classList.contains('closed') || el.offsetParent === null) continue;
        const r = el.getBoundingClientRect();
        if (r.width && r.height) masks.push({ x: r.left - 6, y: r.top - 6, w: r.width + 12, h: r.height + 12 });
      }
      const sheet = $('detail');
      const off = isMobile() && !sheet.classList.contains('closed') ? sheet.getBoundingClientRect().height + 8 : 0;
      app.style.setProperty('--sheet-off', off + 'px');
      dirty = true;
    }
    const overlap = (a, b) => Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) * Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));

    function layoutPins() {
      const W = cam.W, H = cam.Hh, live = [];
      for (let i = 0; i < pins.length; i++) {
        const p = scene.poiPts[i], q = cam.project(p[0], p[1], p[2]), el = pins[i];
        const vis = q[2] > 12 && q[0] > -10 && q[0] < W + 10 && q[1] > -10 && q[1] < H + 10;
        if (el.classList.contains('out') === vis) el.classList.toggle('out', !vis);
        if (!vis) continue;
        el.style.transform = 'translate3d(' + (Math.round(q[0] * 2) / 2) + 'px,' + (Math.round(q[1] * 2) / 2) + 'px,0)';
        live.push({ i, el, px: q[0], py: q[1] });
      }
      const detailOpen = !$('detail').classList.contains('closed');
      const want = labelsOn ? live : live.filter((m) => m.i === active && detailOpen);
      const wantSet = new Set(want.map((m) => m.i));
      pins.forEach((el, i) => { const on = wantSet.has(i); if (el.classList.contains('labeled') !== on) el.classList.toggle('labeled', on); });
      if (!want.length) return;
      if (!sizes.length) measure();
      // L'etichetta selezionata per prima, poi le altre dall'alto verso il basso (corsie sfalsate).
      want.sort((a, b) => (a.i === active ? -1 : b.i === active ? 1 : a.py - b.py));
      const placed = [], mob = W < 760;
      for (const m of want) {
        const { w, h } = sizes[m.i];
        if (mob && labelsOn && m.i !== active && m.i % 2) { m.el.classList.remove('labeled'); continue; }
        const prefer = m.px > W * 0.55 ? -1 : 1;
        let best = null, bestCost = 1e20;
        for (const side of [prefer, -prefer]) for (const dx of [16, 48, 90, 140]) for (const dy of [-34, -70, -110, 0, 36, 74, 116]) {
          const x = m.px + (side > 0 ? dx : -dx - w), y = m.py + dy - h / 2, r = { x, y, w, h };
          let pen = 0;
          if (x < 8 || x + w > W - 8) pen += 1e6;
          if (y < 8 || y + h > H - 8) pen += 1e6;
          for (const o of placed) pen += overlap(r, o) * 9000;
          for (const o of masks) pen += overlap(r, o) * 2500;
          for (const o of live) if (o !== m && Math.abs(o.px - (x + w / 2)) < w / 2 + 8 && Math.abs(o.py - (y + h / 2)) < h / 2 + 8) pen += 1500;
          const prev = m.el._lp, inertia = prev ? Math.hypot(x - prev.x, y - prev.y) * 0.6 : 0;
          const cost = pen + dx * 0.3 + Math.abs(dy) * 0.25 + (side !== prefer ? 12 : 0) + inertia;
          if (cost < bestCost) { bestCost = cost; best = r; }
        }
        if (bestCost >= 1e6 && m.i !== active) { m.el.classList.remove('labeled'); continue; }
        placed.push(best); m.el._lp = { x: best.x, y: best.y };
        const lbl = m.el.querySelector('.pinText'), ld = m.el.querySelector('.pinLeader');
        lbl.style.transform = 'translate3d(' + Math.round(best.x - m.px) + 'px,' + Math.round(best.y - m.py) + 'px,0)';
        const ax = best.x + best.w / 2 - m.px, ay = best.y + best.h / 2 - m.py, len = Math.hypot(ax, ay);
        ld.style.width = Math.max(0, len - best.w / 2 * 0.6).toFixed(1) + 'px';
        ld.style.transform = 'rotate(' + Math.atan2(ay, ax).toFixed(4) + 'rad)';
      }
    }

    // ---------------- selezione
    function select(i) {
      active = (i + poi.length) % poi.length;
      const p = poi[active];
      $('detailType').textContent = p.type + ' · Sezione ' + String(active + 1).padStart(2, '0');
      $('detailName').textContent = p.name;
      $('detailDesc').textContent = p.desc;
      $('detailIndex').textContent = String(active + 1).padStart(2, '0') + ' / ' + poi.length;
      $('detail').classList.remove('closed'); app.classList.add('detail-open'); hideHint();
      pins.forEach((el, k) => el.classList.toggle('active', k === active));
      pinsBox.classList.add('dim');
      Array.from(list.children).forEach((li, k) => li.firstChild.classList.toggle('sel', k === active));
      const sel = list.children[active]; if (sel && !$('pathPanel').classList.contains('hidden')) sel.scrollIntoView({ block: 'nearest' });
      const t = scene.poiPts[active];
      cam.goal = { az: cam.goal.az, tilt: clamp(cam.goal.tilt, 0.42, 1.2), dist: clamp(fitDist * 0.33, 280, 1600), t: [t[0], t[1], t[2]] };
      setView('explore'); userMoved = true;
      requestAnimationFrame(refreshMasks); profileMark();
    }
    function closeDetail() {
      $('detail').classList.add('closed'); app.classList.remove('detail-open'); active = -1;
      pins.forEach((el) => el.classList.remove('active')); pinsBox.classList.remove('dim');
      Array.from(list.children).forEach((li) => li.firstChild.classList.remove('sel'));
      requestAnimationFrame(refreshMasks); profileMark();
    }

    // ---------------- profilo (generato dal diorama, illustrativo)
    const prof = scene.profile, pMin = Math.min(...prof), pMax = Math.max(...prof);
    const PX = (s) => 6 + s * 308, PY = (y) => 8 + (1 - (y - pMin) / (pMax - pMin || 1)) * 84;
    const pPath = prof.map((y, i) => (i ? 'L' : 'M') + PX(i / (prof.length - 1)).toFixed(1) + ' ' + PY(y).toFixed(1)).join(' ');
    function profileMark() {
      $('profilePanel').innerHTML = '<h3>Profilo del diorama</h3><svg viewBox="0 0 320 112" role="img" aria-label="Profilo illustrativo">' +
        '<defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fb8e0" stop-opacity=".45"/><stop offset="1" stop-color="#b6dbf4" stop-opacity="0"/></linearGradient></defs>' +
        '<path d="' + pPath + ' L314 100 L6 100Z" fill="url(#pg)"/><path d="' + pPath + '" fill="none" stroke="#168ccb" stroke-width="2.4" stroke-linejoin="round"/>' +
        poi.map((p, i) => { const k = Math.round(p.s * (prof.length - 1)); return '<circle cx="' + PX(p.s).toFixed(1) + '" cy="' + PY(prof[k]).toFixed(1) + '" r="' + (i === active ? 5 : 3.2) + '" fill="' + (i === active ? '#c81e3a' : '#e2475a') + '" stroke="#fff" stroke-width="1.5"><title>' + esc(p.name) + '</title></circle>'; }).join('') +
        '</svg>';
    }
    profileMark();

    // ---------------- comandi
    const minD = 180, maxD = () => fitDist * 2.4;
    const zoom = (k) => { cam.goal.dist = clamp(cam.goal.dist * k, minD, maxD()); userMoved = true; };
    $('zoomIn').onclick = () => zoom(0.78);
    $('zoomOut').onclick = () => zoom(1.28);
    $('rotL').onclick = () => { cam.goal.az += 0.35; userMoved = true; };
    $('rotR').onclick = () => { cam.goal.az -= 0.35; userMoved = true; };
    $('reset').onclick = () => { closeDetail(); reset(); };
    $('viewExplore').onclick = () => { cam.goal = homeGoal(); setView('explore'); };
    $('viewTop').onclick = () => { cam.goal = topGoal(); setView('top'); userMoved = true; };
    $('closeDetail').onclick = closeDetail;
    $('nextPoi').onclick = () => select(active + 1);
    $('prevPoi').onclick = () => select(active < 0 ? poi.length - 1 : active - 1);
    const togglePanel = (btn, panel, attr) => {
      const open = $(panel).classList.toggle('hidden') === false;
      $(btn).setAttribute(attr, String(open));
      if (open) for (const [b, p, a] of [['listBtn', 'pathPanel', 'aria-expanded'], ['profileBtn', 'profilePanel', 'aria-pressed']]) if (p !== panel) { $(p).classList.add('hidden'); $(b).setAttribute(a, 'false'); }
      app.classList.toggle('list-open', !$('pathPanel').classList.contains('hidden'));
      app.classList.toggle('panel-open', !$('pathPanel').classList.contains('hidden') || !$('profilePanel').classList.contains('hidden'));
      requestAnimationFrame(refreshMasks);
    };
    $('listBtn').onclick = () => togglePanel('listBtn', 'pathPanel', 'aria-expanded');
    $('profileBtn').onclick = () => togglePanel('profileBtn', 'profilePanel', 'aria-pressed');
    $('labelsToggle').onclick = () => {
      labelsOn = !labelsOn;
      $('labelsToggle').setAttribute('aria-checked', String(labelsOn));
      app.classList.toggle('labels-on', labelsOn);
      sizes = []; dirty = true;
    };
    $('nightBtn').onclick = () => {
      R.night = !R.night; app.classList.toggle('night', R.night);
      $('nightBtn').setAttribute('aria-checked', String(R.night)); dirty = true;
    };

    // ---------------- input: ruota, zoom (rotella/pizzico), sposta (tasto destro, Maiusc, due dita)
    const ptrs = new Map(); let pinch = null;
    setTimeout(hideHint, 9000);
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('pointerdown', (e) => {
      canvas.setPointerCapture(e.pointerId);
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, pan: e.button === 2 || e.shiftKey });
      canvas.classList.add('grabbing'); hideHint();
      if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 }; }
    });
    function pan(dx, dy) {
      const B = cam.B, k = cam.dist / B.F;
      const fl = Math.hypot(B.f[0], B.f[2]) || 1, fx = B.f[0] / fl, fz = B.f[2] / fl;
      const g = cam.goal.t;
      const x = clamp(g[0] - B.r[0] * dx * k + fx * dy * k * 1.4, world.xMin, world.xMax);
      const z = clamp(g[2] - B.r[2] * dx * k + fz * dy * k * 1.4, world.zMin, world.zMax);
      cam.goal.t = [x, world.height(x, z), z]; userMoved = true;
    }
    canvas.addEventListener('pointermove', (e) => {
      const p = ptrs.get(e.pointerId); if (!p) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
      if (ptrs.size >= 2 && pinch) {
        const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        if (d > 0 && pinch.d > 0) cam.goal.dist = clamp(cam.goal.dist * pinch.d / d, minD, maxD());
        pan(mx - pinch.mx, my - pinch.my); pinch = { d, mx, my }; return;
      }
      if (p.pan) { pan(dx, dy); return; }
      cam.goal.az -= dx * 0.006;
      cam.goal.tilt = clamp(cam.goal.tilt + dy * 0.004, 0.24, 1.5);
      userMoved = true;
    });
    const up = (e) => { ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null; if (!ptrs.size) canvas.classList.remove('grabbing'); };
    canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault(); hideHint();
      zoom(Math.exp(clamp(e.deltaY, -120, 120) * (e.ctrlKey ? 0.01 : 0.0016)));
    }, { passive: false });
    window.addEventListener('keydown', (e) => {
      const tg = document.activeElement && document.activeElement.tagName;
      if (tg === 'INPUT' || tg === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') select(active + 1);
      else if (e.key === 'ArrowLeft') select(active < 0 ? poi.length - 1 : active - 1);
      else if (e.key === 'Escape') closeDetail();
      else if (e.key === '+' || e.key === '=') zoom(0.78);
      else if (e.key === '-') zoom(1.28);
    });

    // ---------------- ridimensionamento e ciclo di disegno
    function resize() {
      R.resize(app.clientWidth, app.clientHeight);
      cam.fov = (cam.W < 760 && !landscape() ? 50 : 38) * Math.PI / 180;
      sizes = [];
      refreshMasks();
      const g = homeGoal();
      if (!userMoved) cam.goal = g;
      dirty = true;
    }
    window.addEventListener('resize', resize);
    resize();
    Object.assign(cam, { az: cam.goal.az, tilt: cam.goal.tilt, dist: cam.goal.dist, t: cam.goal.t.slice() });
    let failed = false, settled = false;
    function frame() {
      if (failed) return;
      try {
        const moving = cam.step();
        // durante il movimento si salta il rifinito dei bordi; a camera ferma si ridisegna in qualità piena
        if (moving) { R.draw(true); layoutPins(); settled = false; }
        else if (dirty || !settled) { R.draw(false); layoutPins(); dirty = false; settled = true; }
      } catch (err) {
        failed = true; console.error(err);
        notice('<strong>Errore di disegno.</strong><br>Ricarica la pagina; se persiste, aprila con un browser aggiornato.');
        return;
      }
      requestAnimationFrame(frame);
    }
    // Collegamenti diretti (integrazione dashboard): #poi=3&labels=1&night=1&view=top
    const hp = new URLSearchParams(location.hash.slice(1));
    if (hp.get('view') === 'top') $('viewTop').click();
    if (hp.get('labels') === '1') $('labelsToggle').click();
    if (course.model.night && hp.get('night') !== '0') $('nightBtn').click();
    if (hp.get('poi')) { select(clamp(parseInt(hp.get('poi'), 10) - 1 || 0, 0, poi.length - 1)); Object.assign(cam, { az: cam.goal.az, tilt: cam.goal.tilt, dist: cam.goal.dist, t: cam.goal.t.slice() }); }
    if (hp.get('panel') === 'list') $('listBtn').click();
    if (hp.get('panel') === 'profile') $('profileBtn').click();
    frame();
    window.__LSA = { world, scene, cam, R, faces: scene.mesh.f.length };
  };
})(window.LSA);
