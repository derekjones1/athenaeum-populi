// cone-schematic.mjs — exact double-cone conic-section schematics for the
// Precalculus 2e chapter-10 pages (the "Figure 2" of §§10.1–10.3 and the
// nondegenerate/degenerate overviews of §10.4), emitted as one `figure`-mode
// apfigure spec. A right double cone x²+y²=(kz)² with apex at the origin is
// cut by a plane, and everything drawn — the base circles, the silhouette
// generators (tangents from the apex to the projected base, found
// numerically), the cutting plane, and the conic trace — is computed from the
// cone equation under the fixed oblique projection P(x,y,z)=(x+0.42y, z+0.28y)
// the §9.2 plane figures use. Hidden portions (y>0, behind the cone) are
// dashed; because SVG dashing restarts on every path, dashes are emitted as
// alternate sample segments so the dash pattern is the geometry itself.
//
//   node tools/cone-schematic.mjs '{"ariaLabel":"…","unit":26,"panels":[{"kind":"hyperbola","title":"Deep Vertical Slice","caption":"Hyperbola","shape":true}]}'
//
// kinds: ellipse (tilted plane, one nappe), circle (horizontal plane),
// hyperbola (vertical plane, both nappes), parabola (plane parallel to a
// generator, one nappe), lines (plane through the axis), line (plane tangent
// along a generator), point (horizontal plane through the apex). Per-panel
// `title` (above) and `caption` (below) are optional; `shape:true` draws the
// resulting plane curve small beneath the cone. Keep a composite to two
// panels — a wider `figure` scales its label font up (see the playbook).
// Cone x^2+y^2=(kz)^2, apex at origin, nappes to z=±H; oblique projection P(x,y,z)=(x+0.42y, z+0.28y).
// usage: node cone2.mjs '<json array of panels>'  where a panel is {kind, title?, caption?, shape?:true}
// kinds: ellipse circle hyperbola parabola lines line point
const H = 3, R = 1.6, k = R / H, GAP = 5.7;
const P = ([x, y, z]) => [x + 0.42 * y, z + 0.28 * y];
const fx = (v) => +v.toFixed(3);
export function panel(kind, ox = 0, opts = {}) {
  const segments = [], polygons = [], texts = [], points = [];
  const Q = (p) => [fx(p[0] + ox), fx(p[1])];
  const seg = (pts, dashed) => pts.slice(1).map((p, i) => ({ from: Q(pts[i]), to: Q(p) })).filter((_, i) => !dashed || i % 2 === 0);
  const base = (z) => { const f = [], b = []; for (let i = 0; i <= 24; i++) { const t = Math.PI + Math.PI * i / 24; f.push(P([R * Math.cos(t), R * Math.sin(t), z])) } for (let i = 0; i <= 24; i++) { const t = Math.PI * i / 24; b.push(P([R * Math.cos(t), R * Math.sin(t), z])) } return [...seg(f), ...seg(b, true)] };
  const silhouette = (z) => { const pt = (t) => P([R * Math.cos(t), R * Math.sin(t), z]); const c = (t) => { const e = 1e-4, [x, y] = pt(t), [x1, y1] = pt(t + e), [x0, y0] = pt(t - e); return x * (y1 - y0) - y * (x1 - x0) }; const out = []; const N = 1440; for (let i = 0; i < N; i++) { const t0 = 2 * Math.PI * i / N, t1 = 2 * Math.PI * (i + 1) / N; if (Math.sign(c(t0)) !== Math.sign(c(t1))) out.push({ from: Q([0, 0]), to: Q(pt((t0 + t1) / 2)) }) } return out };
  segments.push(...silhouette(-H), ...silhouette(H), ...base(-H), ...base(H));
  const curve = []; // [point, y] or null
  const plane = (pts) => polygons.push({ points: pts.map((p) => Q(P(p))), fill: true });
  if (kind === 'parabola') { const d = 1.0; const zOf = (y) => -(y * y + d * d) / (2 * k * d); const Y = Math.sqrt(2 * k * d * H - d * d); for (let i = 0; i <= 32; i++) { const y = -Y + 2 * Y * i / 32; const z = zOf(y); curve.push([P([k * z + d, y, z]), y]) } plane([[k * 0.6 + d, -1.35, 0.6], [k * 0.6 + d, 1.35, 0.6], [k * (-H - 0.45) + d, 1.35, -H - 0.45], [k * (-H - 0.45) + d, -1.35, -H - 0.45]]) }
  else if (kind === 'ellipse' || kind === 'circle') { const m = kind === 'circle' ? 0 : 0.35, c = -1.7; for (let i = 0; i <= 48; i++) { const t = 2 * Math.PI * i / 48; const r = -k * c / (1 - k * m * Math.sin(t)); const x = r * Math.cos(t), y = r * Math.sin(t); curve.push([P([x, y, m * y + c]), y]) } const xs = 1.9, y0 = -1.8, y1 = 1.8; plane([[-xs, y0, m * y0 + c], [xs, y0, m * y0 + c], [xs, y1, m * y1 + c], [-xs, y1, m * y1 + c]]) }
  else if (kind === 'hyperbola') { const d = 0.7; const Y = Math.sqrt(R * R - d * d); for (const s of [1, -1]) { curve.push(null); for (let i = 0; i <= 32; i++) { const y = -Y + 2 * Y * i / 32; curve.push([P([d, y, s * Math.sqrt(d * d + y * y) / k]), y]) } } plane([[d, -1.5, -H - 0.4], [d, 1.5, -H - 0.4], [d, 1.5, H + 0.4], [d, -1.5, H + 0.4]]) }
  else if (kind === 'lines') { // plane x = 0 through the axis: generators y = ±kz
    for (const s of [1, -1]) { curve.push(null); for (let i = 0; i <= 24; i++) { const z = -H + 2 * H * i / 24; curve.push([P([0, s * k * z, z]), s * k * z]) } } plane([[0, -1.9, -H - 0.4], [0, 1.9, -H - 0.4], [0, 1.9, H + 0.4], [0, -1.9, H + 0.4]]) }
  else if (kind === 'line') { // tangent plane x = kz along the generator (kt, 0, t)
    curve.push(null); for (let i = 0; i <= 2; i++) { const z = -H + 2 * H * i / 2; curve.push([P([k * z, 0, z]), -0.001]) } plane([[k * (-H - 0.4), -1.5, -H - 0.4], [k * (-H - 0.4), 1.5, -H - 0.4], [k * (H + 0.4), 1.5, H + 0.4], [k * (H + 0.4), -1.5, H + 0.4]]) }
  else if (kind === 'point') { plane([[-2.1, -1.8, 0], [2.1, -1.8, 0], [2.1, 1.8, 0], [-2.1, 1.8, 0]]); points.push({ at: Q([0, 0]), r: 3.5 }) }
  let run = [], runFront = null;
  const flush = () => { if (run.length > 1) segments.push(...seg(run, !runFront)); run = [] };
  for (const item of curve) { if (item === null) { flush(); runFront = null; continue } const [p, y] = item; const front = y <= 0; if (runFront !== null && front !== runFront) { const last = run[run.length - 1]; flush(); run = [last] } runFront = front; run.push(p) }
  flush();
  if (opts.title) texts.push({ at: Q([0, H + 1.35]), text: opts.title, anchor: 'middle' });
  if (opts.caption) texts.push({ at: Q([0, -H - 1.6]), text: opts.caption, anchor: 'middle' });
  if (opts.shape) { // the plane conic drawn small beneath
    const cy = -H - 2.55, s = 0.75; const pl = (pts, dashed) => segments.push(...seg(pts, dashed));
    if (kind === 'ellipse') { const pts = []; for (let i = 0; i <= 40; i++) { const t = 2 * Math.PI * i / 40; pts.push([1.6 * s * Math.cos(t), cy + 0.7 * s * Math.sin(t)]) } pl(pts) }
    if (kind === 'circle') { const pts = []; for (let i = 0; i <= 40; i++) { const t = 2 * Math.PI * i / 40; pts.push([1.0 * s * Math.cos(t), cy + 1.0 * s * Math.sin(t)]) } pl(pts) }
    if (kind === 'hyperbola') for (const sg of [1, -1]) { const pts = []; for (let i = 0; i <= 20; i++) { const u = -1.2 + 2.4 * i / 20; pts.push([1.1 * s * u, cy + sg * s * (0.35 + 0.55 * u * u)]) } pl(pts) }
    if (kind === 'parabola') { const pts = []; for (let i = 0; i <= 20; i++) { const u = -1.2 + 2.4 * i / 20; pts.push([1.1 * s * u, cy - 0.7 * s + 0.9 * s * u * u]) } pl(pts) }
    if (kind === 'lines') { pl([[-1.2 * s, cy - 1.0 * s], [1.2 * s, cy + 1.0 * s]]); pl([[-1.2 * s, cy + 1.0 * s], [1.2 * s, cy - 1.0 * s]]) }
    if (kind === 'line') pl([[-1.2 * s, cy + 1.0 * s], [1.2 * s, cy - 1.0 * s]]);
    if (kind === 'point') points.push({ at: Q([0, cy]), r: 3.5 });
  }
  return { segments, polygons, texts, points };
}
export function compose(panels, ariaLabel, unit = 30) {
  const out = { ariaLabel, unit, polygons: [], segments: [], points: [], texts: [] };
  panels.forEach((p, i) => { const s = panel(p.kind, i * GAP, p); for (const key of ['polygons', 'segments', 'points', 'texts']) out[key].push(...s[key]) });
  return out;
}
if (process.argv[1].endsWith('cone-schematic.mjs') && process.argv[2]) { const { panels, ariaLabel, unit } = JSON.parse(process.argv[2]); console.log(JSON.stringify(compose(panels, ariaLabel, unit))) }
