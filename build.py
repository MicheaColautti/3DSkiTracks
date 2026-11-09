#!/usr/bin/env python3
"""Build LiveSportArena 3D maps.

Legge  data/tracks.json, data/archetypes.json, data/course-configs.json
       src/template.html, src/styles.css, src/engine.js, src/features.js, src/ui.js
Scrive maps/<id>.html (34 pagine autonome, apribili da file://) e index.html.

Uso:  python3 build.py
Nessuna dipendenza esterna (solo libreria standard Python 3.8+).
Modifica SEMPRE i sorgenti in src/ e data/, poi rilancia: non modificare a mano maps/*.html.
"""
import json, math, os, html, re

ROOT = os.path.dirname(os.path.abspath(__file__))
P = lambda *a: os.path.join(ROOT, *a)

ISO = {"Svizzera": "CH", "Austria": "AT", "Italia": "IT", "Francia": "FR", "Germania": "DE",
       "USA": "US", "Finlandia": "FI", "Slovenia": "SI", "Slovacchia": "SK",
       "Norvegia": "NO", "Svezia": "SE", "Andorra": "AD", "Canada": "CA"}
GENDER = {"M": "Maschile", "W": "Femminile", "ALL": "Maschile e femminile"}

DEFAULTS = {
    "jump": {"amp": 24, "len": 75, "skier": False},
    "humps": {"count": 3, "amp": 18, "spacing": 75, "skier": False},
    "compression": {"depth": 14, "len": 45},
    "rolling": {"amp": 8, "wave": 70, "len": 120},
    "steep": {"mult": 1.6, "len": None},
    "flat": {"mult": 0.6, "len": None},
    "turn": {"amp": 0.12, "len": 130},
    "s_turn": {"amp": 0.04, "wave": None, "len": 120},
    "straight": {"len": 180},
    "rocky_gate": {"gap": 30, "rise": 55, "len": 80, "narrow": 0.28, "rock": 38},
    "tight_passage": {"gap": 24, "rise": 26, "len": 90, "narrow": 0.3},
    "underpass": {"kind": "rail", "rise": 34, "len": 46},
    "fences": {"len": 200, "side": "both"},
    "crowd": {"count": 30},
    "skier": {},
    "building": {"side": 1, "dist": 120, "size": 40},
    "tunnel": {"kind": "road", "rise": 30, "len": 26},
    "grandstand": {"side": 1},
}


def fnv(s):
    h = 2166136261
    for c in s.encode("utf-8"):
        h ^= c
        h = (h * 16777619) & 0xFFFFFFFF
    return h


class Rng:
    def __init__(self, seed):
        self.s = seed & 0xFFFFFFFF or 1

    def __call__(self):
        self.s = (self.s * 1664525 + 1013904223) & 0xFFFFFFFF
        return self.s / 4294967296.0


def make_route(spec, rng):
    n, amp, mode = spec["controls"], spec["amp"], spec["mode"]
    phase = rng() * 6.28
    xs = []
    for k in range(n):
        r = rng()
        sgn = 1 if k % 2 else -1
        if mode == "wave":
            x = amp * math.sin(k * 1.25 + phase) * (0.75 + 0.25 * r)
        elif mode == "irregular":
            x = sgn * amp * (0.4 + 0.6 * r)
        elif mode == "serpentine":
            x = sgn * amp * (0.75 + 0.25 * r)
        else:
            x = sgn * amp * (0.55 + 0.45 * r)
        xs.append(round(x, 4))
    xs[0] = round(amp * 0.3 * (rng() - 0.5), 4)
    xs[-1] = 0.0
    xs[-2] = round(xs[-2] * 0.5, 4)
    return xs



import re

KIND_LABEL = [("humps", "Gobbe"), ("jump", "Salto"), ("finish", "Pendio d'arrivo"), ("wall", "Muro"),
              ("s-turn", "Curve a S"), ("turn", "Curva"), ("traverse", "Traverso"), ("gliding", "Scorrimento"),
              ("schuss", "Schuss"), ("compression", "Compressione"), ("gorge", "Passaggio stretto"),
              ("roll", "Dosso"), ("tunnel", "Sottopasso")]
STEEP_WORDS = ("zielhang", "muro", "mur ", "mur de", "wall", "headwall", "strmina", "konta", "steil", "freier fall", "reck", "eisfall")
GORGE_TYPES = {"rocky_gate", "tight_passage", "underpass", "tunnel"}


def num(v):
    m = re.search(r"\d+(?:[.,]\d+)?", str(v or ""))
    return float(m.group(0).replace(",", ".")) if m else None


def kind_label(kind, s, direction):
    k = (kind or "").lower()
    lab = next((l for key, l in KIND_LABEL if key in k), None)
    if not lab:
        lab = "Partenza" if s == 0 else "Arrivo" if s >= 1 else "Sezione"
    if direction in ("left", "right") and lab in ("Curva", "Traverso", "Muro", "Salto", "Scorrimento"):
        lab += " a " + ("sinistra" if direction == "left" else "destra")
    return lab


def section_features(sec, disc, L, turn_state):
    """Traduce una sezione documentata nel modificatore di terreno corrispondente."""
    k, n = (sec.get("kind") or "").lower(), sec["name"].lower()
    det = sec.get("details") or {}
    g, jl = num(det.get("gradient")), num(det.get("jump_length_m"))
    speed = disc in ("DH", "SG")
    d = sec.get("direction")

    def sign():
        if d == "right": return -1
        if d == "left": return 1
        turn_state[0] *= -1
        return turn_state[0]
    out = []
    if "humps" in k:
        out.append({"type": "humps", "count": 3, "amp": 22, "spacing": 80} if speed else {"type": "rolling", "amp": 8, "wave": 60, "len": 70})
    elif "jump" in k:
        if speed:
            amp = max(16, min(42, 14 + 0.32 * (jl or 30)))
            out.append({"type": "jump", "amp": round(amp), "len": round(55 + amp)})
        else:
            out.append({"type": "rolling", "amp": 6, "wave": 60, "len": 50})
    elif "compression" in k:
        out.append({"type": "compression", "depth": {"DH": 16, "SG": 14, "GS": 10, "SL": 7}[disc], "len": 40})
    elif k == "turn":
        out.append({"type": "turn", "amp": sign() * (0.13 if speed else 0.07), "len": L * (0.045 if speed else 0.05)})
    elif "s-turn" in k:
        out.append({"type": "s_turn", "amp": 0.05 if speed else 0.035, "wave": 220 if speed else 140, "len": L * 0.045})
    elif "traverse" in k:
        out += [{"type": "turn", "amp": sign() * (0.09 if speed else 0.05), "len": L * 0.05}, {"type": "flat", "mult": 0.8, "len": L * 0.05}]
    elif "gliding" in k:
        out += [{"type": "flat", "mult": 0.55, "len": L * 0.07}, {"type": "straight", "len": L * 0.06}]
    elif "schuss" in k:
        out.append({"type": "straight", "len": L * 0.05})
    elif "gorge" in k:
        if "rock" in k or "schuss" in n:
            out.append({"type": "rocky_gate", "gap": 28, "rise": 70, "len": 90, "narrow": 0.28, "rock": 44})
        else:
            out.append({"type": "tight_passage", "gap": 20, "rise": 28, "len": 90, "narrow": 0.3})
    elif "tunnel" in k:
        out.append({"type": "underpass", "kind": "rail" if "wasser" in n else "road", "rise": 34, "len": 46})
    elif "roll" in k:
        out.append({"type": "rolling", "amp": 7, "wave": 70, "len": 60})
    steepish = k.startswith("wall") or ("finish" in k and (g or any(w in n for w in STEEP_WORDS)))
    if steepish or (g and g >= 45):
        mult = 1 + ((g or 52) - 28) / 38
        out.append({"type": "steep", "mult": round(max(1.25, min(2.4, mult)), 2), "len": L * (0.05 if "finish" in k else 0.065)})
    return out


def apply_overrides(research, ov):
    if not ov:
        return research
    secs = research["sections"]
    if ov.get("replace_sections"):
        secs = [{"order": i + 1, "name": r["name"], "kind": r["kind"], "direction": r.get("dir"),
                 "position": {"s_approx": r["s"]}, "details": {"gradient": r.get("g")},
                 "description_it": r["d"], "confidence": "official", "source": ov.get("source", "")}
                for i, r in enumerate(ov["replace_sections"])]
    for name in ov.get("remove", []):
        secs = [s for s in secs if not s["name"].startswith(name)]
    for p in ov.get("patch", []):
        for s in secs:
            if s["name"].startswith(p["match"]):
                for key, val in p["set"].items():
                    if isinstance(val, dict) and isinstance(s.get(key), dict):
                        s[key].update(val)
                    else:
                        s[key] = val
                break
    secs = secs + [dict(x) for x in ov.get("insert", [])]
    secs.sort(key=lambda s: (s["position"]["s_approx"], s.get("order", 0)))
    research = dict(research, sections=secs)
    if ov.get("facts"):
        facts = dict(research["facts"])
        for key, val in ov["facts"].items():
            facts[key] = dict(facts.get(key) or {}, **val)
        research["facts"] = facts
    return research


def fmt_m(v):
    try:
        return f"{int(round(float(v))):,}".replace(",", "’") + " m"
    except (TypeError, ValueError):
        return None


def metrics_from(facts):
    ok = lambda f: isinstance(f, dict) and f.get("value") not in (None, "") and f.get("confidence") in ("official", "fis")
    out = {}
    if ok(facts.get("length_m")): out["length"] = fmt_m(facts["length_m"]["value"])
    if ok(facts.get("vertical_m")): out["vertical"] = fmt_m(facts["vertical_m"]["value"])
    if ok(facts.get("start_alt_m")) and ok(facts.get("finish_alt_m")):
        out["alt"] = f'{fmt_m(facts["start_alt_m"]["value"])[:-2]} → {fmt_m(facts["finish_alt_m"]["value"])}'
    mg = facts.get("max_gradient")
    if ok(mg):
        v = str(mg["value"]).replace(" %", "%")
        where = (mg.get("where") or "").strip()
        known_location = where and len(where) < 26 and not where.casefold().startswith(("non indicat", "non specificat"))
        out["maxgrad"] = f"{v} · {where}" if known_location else v
    return out


def resolve(track, cfg, research, arch_all, disc_all):
    disc = track["discipline"]
    arch_name = cfg["archetype"]
    A = dict(arch_all[arch_name])
    if "byDiscipline" in A:
        A.update(A["byDiscipline"].get(disc, {}))
        A.pop("byDiscipline")
    A.update(cfg.get("override", {}))
    D = disc_all[disc]
    seed = cfg.get("seed", fnv(track["id"]))
    rng = Rng(seed)
    L, W = A["L"], A["W"]
    decor = cfg.get("decor", {})

    # POI = sezioni documentate dalla ricerca, nell'ordine reale
    poi, last = [], -1.0
    for sec in research["sections"]:
        s = sec["position"].get("s_approx")
        s = 0.0 if s is None else float(s)
        s = max(s, last + 0.006) if last >= 0 else s
        s = min(1.0, s)
        last = s
        poi.append({"name": sec["name"], "type": kind_label(sec.get("kind"), s, sec.get("direction")),
                    "desc": sec.get("description_it") or "", "s": round(s, 4),
                    "conf": sec.get("confidence") or "", "_sec": sec})
    poi[0]["s"] = 0.0

    def find(prefix):
        for p in poi:
            if p["name"] == prefix:
                return p
        for p in poi:
            if p["name"].startswith(prefix):
                return p
        raise KeyError(f'{track["id"]}: sezione "{prefix}" non trovata')

    feats, turn_state = [], [1]
    for p in poi:
        for f in section_features(p["_sec"], disc, L, turn_state):
            f["s"], f["poi"] = p["s"], p["name"]
            feats.append(f)
    for x in cfg.get("extras", []):
        p = find(x["at"])
        if x.get("replace"):
            feats = [f for f in feats if not (f.get("poi") == p["name"] and (f["type"] == x["type"] or f["type"] in GORGE_TYPES))]
        f = {k: v for k, v in x.items() if k not in ("at", "ds", "replace")}
        f["s"] = round(min(1.0, max(0.0, p["s"] + x.get("ds", 0))), 4)
        f["poi"] = p["name"]
        if f["type"] in DEFAULTS:
            f = dict(DEFAULTS[f["type"]], **f)
        feats.append(f)
    for f in feats:
        if f["type"] in ("steep", "flat") and not f.get("len"):
            f["len"] = L * 0.07
        if "len" in f and f["len"] is not None:
            f["len"] = round(f["len"], 1)

    treeline = decor.get("treeline", A["treeline"])
    if decor.get("treeline_at"):
        treeline = find(decor["treeline_at"])["s"]
    model = {
        "L": L, "W": W, "H": round(L * A["drop"]), "cell": A["cell"],
        "marginTop": round(L * 0.05), "marginBottom": round(max(300, L * 0.11)),
        "pisteW": D["pisteW"], "gate": D["gate"], "spacing": D["spacing"], "lineAmp": D["lineAmp"],
        "route": make_route(A["route"], rng), "slope": A["slope"],
        "shoulder": A["shoulder"], "crest": A["crest"], "noise": A["noise"],
        "valleyW": A["valleyW"], "bowl": A["bowl"], "peak": A["peak"],
        "trees": round(A["trees"] * decor.get("forest", 1.0)),
        "rocks": round(A["rocks"] * decor.get("rocks", 1.0)),
        "huts": decor.get("huts", A["huts"]), "treeline": treeline,
        "lake": decor.get("lake"), "glacier": bool(decor.get("glacier")),
        "seed": seed, "features": feats,
        "finishModel": cfg.get("finish", {"model": "meadow"}), "night": bool(cfg.get("night")),
    }
    srcs = [s for s in research.get("sources", []) if s.get("type") == "official"] or research.get("sources", [])
    source = srcs[0]["url"] if srcs else track["source"]
    for p in poi:
        p.pop("_sec", None)
    return {
        "id": track["id"], "course": track["course"], "location": track["location"],
        "country": track["country"], "iso": ISO[track["country"]],
        "gender": GENDER.get(track["gender"], track["gender"]),
        "discipline": disc, "disciplineLabel": track["disciplineLabel"],
        "subtitle": track.get("subtitle", ""), "source": source, "nSources": len(research.get("sources", [])),
        "archetype": arch_name, "archetypeLabel": arch_all[arch_name]["label"],
        "metrics": metrics_from(research["facts"]), "poi": poi, "model": model,
        "finishName": research.get("finish_area", {}).get("name", ""),
    }


def esc_js(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")


def public_text(value):
    value = re.sub(r"\s*\((?:etichetta generica|generic[oa]|nessun nome proprio trovato: etichetta generica)\)", "", value, flags=re.I)
    value = re.sub(r"^(?:ETICHETTA GENERICA:|\[GENERICO\])\s*", "", value, flags=re.I)
    value = re.sub(r"(?:^|(?<=[.])\s+|\s*[;–:]\s*)(?:nessun nome|nome e profilo non documentati|nome non documentato)[^.]*\.?", "", value, flags=re.I)
    value = re.sub(r"\s*\((?:posizione|nome)[^()]*(?:non documentat[oa]|non indicata)[^()]*\)", "", value, flags=re.I)
    value = re.sub(r"; (?:posizione esatta non|direzione non documentata|le fonti la nominano)[^.]*", "", value, flags=re.I).strip()
    return value[:1].upper() + value[1:]


def main():
    tracks = json.load(open(P("data", "tracks.json"), encoding="utf-8"))["variants"]
    arch = json.load(open(P("data", "archetypes.json"), encoding="utf-8"))
    cfgs = json.load(open(P("data", "course-configs.json"), encoding="utf-8"))["courses"]
    ovs = json.load(open(P("data", "research-overrides.json"), encoding="utf-8"))["courses"]
    with open(P("data", "public-sections.json"), encoding="utf-8") as f:
        public_sections = json.load(f)
    tpl = open(P("src", "template.html"), encoding="utf-8").read()
    css = open(P("src", "styles.css"), encoding="utf-8").read()
    flags = open(P("src", "flags.json"), encoding="utf-8").read().strip()
    js = "\n".join(open(P("src", f), encoding="utf-8").read() for f in ("engine.js", "features.js", "ui.js"))
    os.makedirs(P("maps"), exist_ok=True)
    assert len(tracks) == len(cfgs), (len(tracks), len(cfgs))
    entries = []
    for t in tracks:
        research = json.load(open(P("data", "research", t["id"] + ".json"), encoding="utf-8"))
        research = apply_overrides(research, ovs.get(t["id"]))
        c = resolve(t, cfgs[t["id"]], research, arch["archetypes"], arch["disciplines"])
        edits = public_sections.get(t["id"], {})
        for point in c["poi"]:
            point["name"] = public_text(point["name"])
            point["desc"] = public_text(point["desc"])
            point.update(edits.get(point["name"], {}))
        for feature in c["model"]["features"]:
            if "poi" in feature:
                name = public_text(feature["poi"])
                feature["poi"] = edits.get(name, {}).get("name", name)
        title = f'{c["location"]} / {c["course"]} — {c["disciplineLabel"]} · LiveSportArena'
        page = (tpl.replace("{{TITLE}}", html.escape(title))
                   .replace("{{ARIA}}", html.escape(f'Diorama 3D illustrativo: {c["course"]}, {c["disciplineLabel"]}'))
                   .replace("{{CSS}}", css)
                   .replace("{{DATA}}", "window.LSA_FLAGS=" + flags.replace("</", "<\\/") + ";window.LSA_COURSE=" + esc_js(c) + ";")
                   .replace("{{JS}}", js))
        open(P("maps", t["id"] + ".html"), "w", encoding="utf-8").write(page)
        entries.append(c)
    write_index(entries, css)
    print(f"OK: {len(entries)} mappe in maps/, index.html aggiornato")


def write_index(entries, css):
    from collections import OrderedDict
    groups = OrderedDict()
    for c in sorted(entries, key=lambda c: (c["country"], c["location"])):
        groups.setdefault((c["location"], c["course"], c["iso"], c["country"]), []).append(c)
    order = {"DH": 0, "SG": 1, "GS": 2, "SL": 3}
    cards = []
    for (loc, course, iso, country), items in groups.items():
        mixed = len({c["gender"] for c in items}) > 1
        glab = {"Maschile": "uomini", "Femminile": "donne"}
        links = "".join(
            f'<a class="disc d-{c["discipline"]}" data-disc="{c["discipline"]}" href="maps/{c["id"]}.html">'
            f'<b>{c["discipline"]}</b><span>{html.escape(c["disciplineLabel"])}'
            + (f' · {glab.get(c["gender"], "")}' if mixed and c["gender"] in glab else "") + '</span>'
            f'<em>{html.escape(c["archetypeLabel"])}</em></a>'
            for c in sorted(items, key=lambda c: (order[c["discipline"]], c["gender"])))
        discs = " ".join(c["discipline"] for c in items)
        cards.append(f'<article class="card" data-discs="{discs}"><div class="cardHead"><span class="flag" data-iso="{iso}"></span>'
                     f'<div><h2>{html.escape(loc)}</h2><p>{html.escape(course)} · {html.escape(country)}</p></div></div>'
                     f'<div class="discs">{links}</div></article>')
    page = INDEX_TPL.replace("{{CARDS}}", "".join(cards)).replace("{{N}}", str(len(entries))) \
        .replace("{{L}}", str(len(groups)))
    open(P("index.html"), "w", encoding="utf-8").write(page)


INDEX_TPL = """<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>LiveSportArena · Mappe 3D sci alpino</title><style>
:root{--ink:#17314d;--muted:#5d758c;--line:#dde8f1;--accent:#0a75b9;--bg:#eef4f9}
*{box-sizing:border-box}body{margin:0;font:15px/1.5 -apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",Inter,Arial,sans-serif;color:var(--ink);background:linear-gradient(180deg,#dfeaf4 0,#f4f8fb 420px)}
main{max-width:1180px;margin:0 auto;padding:40px 22px 64px}h1{font-size:34px;letter-spacing:-.8px;margin:0 0 6px}.lead{color:var(--muted);max-width:720px;margin:0 0 22px}
.filters{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 22px}.filters button{font:inherit;font-size:13px;font-weight:600;border:1px solid var(--line);background:#fff;color:var(--ink);padding:7px 14px;border-radius:999px;cursor:pointer}.filters button.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
.card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(28,62,92,.06)}.card.hide{display:none}
.cardHead{display:flex;gap:12px;align-items:center;margin-bottom:12px}.cardHead h2{font-size:17px;margin:0;letter-spacing:-.2px}.cardHead p{margin:0;color:var(--muted);font-size:13px}
.flag{width:30px;height:21px;border-radius:5px;overflow:hidden;flex:none;box-shadow:0 0 0 1px rgba(23,49,77,.12)}.flag[data-iso=CH]{width:22px;height:22px}.flag svg{display:block;width:100%;height:100%}
.discs{display:grid;gap:6px}.disc{display:grid;grid-template-columns:40px 1fr auto;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:#f4f8fb;color:var(--ink);text-decoration:none;border:1px solid transparent}
.disc:hover{border-color:#b9d6ea;background:#eef6fc}.disc b{font-size:12px;text-align:center;padding:3px 0;border-radius:7px;color:#fff;background:var(--accent)}
.d-SG b{background:#2f8f9d}.d-GS b{background:#d9534f}.d-SL b{background:#7a4fc0}.disc span{font-weight:600;font-size:14px}.disc em{font-style:normal;font-size:11.5px;color:var(--muted)}.disc.hide{display:none}
footer{margin-top:28px;color:var(--muted);font-size:13px}footer a{color:var(--accent)}
@media(max-width:520px){h1{font-size:26px}.disc{grid-template-columns:36px 1fr}.disc em{grid-column:2}}
</style></head><body><main>
<h1>Mappe 3D · sci alpino</h1>
<p class="lead">{{N}} diorami interattivi per {{L}} piste di Coppa del Mondo, costruiti su sei archetipi. Le geometrie sono illustrative (non rilievi GPS).</p>
<div class="filters" id="filters"><button class="on" data-f="ALL">Tutte</button><button data-f="DH">Discesa</button><button data-f="SG">Super-G</button><button data-f="GS">Gigante</button><button data-f="SL">Slalom</button></div>
<div class="grid">{{CARDS}}</div>
</main><script>
(function(){var F=""" + "{FLAGS}" + """;
document.querySelectorAll('.flag').forEach(function(el){el.innerHTML=F[el.dataset.iso]||''});
var bs=document.querySelectorAll('#filters button');bs.forEach(function(b){b.onclick=function(){bs.forEach(function(x){x.classList.toggle('on',x===b)});var f=b.dataset.f;
document.querySelectorAll('.card').forEach(function(c){var ok=f==='ALL'||c.dataset.discs.split(' ').indexOf(f)>=0;c.classList.toggle('hide',!ok);
c.querySelectorAll('.disc').forEach(function(d){d.classList.toggle('hide',f!=='ALL'&&d.dataset.disc!==f)})})}})})();
</script></body></html>"""

if __name__ == "__main__":
    # Le bandiere vivono in un solo posto (src/flags.json) e vengono usate da indice e mappe.
    FLAGS = open(P("src", "flags.json"), encoding="utf-8").read().strip()
    INDEX_TPL = INDEX_TPL.replace("{FLAGS}", FLAGS)
    main()
