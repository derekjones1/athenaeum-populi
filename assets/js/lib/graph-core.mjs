/**
 * Deterministic geometry engine for coordinate-plane figures.
 *
 * The import pipeline never hand-positions SVG for graphs: source declares
 * the *mathematical objects* (lines, points, regions…) as structured props,
 * and this module computes every pixel — mapping, clipping, arrowheads,
 * shading polygons, and label placement. One shared implementation of the
 * playbook §"Coordinate-plane graphs" rules, instead of one hand-derived
 * copy per figure.
 *
 * buildGraph(props)  → { viewBox, width, height, ariaLabel, els }
 *   els: [{ tag, attrs, text? }] with JavaScript-style attribute names.
 *   toSvgString(props) serializes them to a plain SVG document so QA
 *   scripts can rasterize figures without a browser runtime.
 *
 * Props (all coordinates in MATH units, never pixels):
 *   xMin,xMax,yMin,yMax  axis ranges (integers; default -7..7)
 *   unit                 px per unit, both axes (default 20)
 *   xUnit,yUnit          px per unit per axis (default `unit`) — use when
 *                        the axes differ in scale (e.g. break-even graphs
 *                        with benches vs. dollars); everything downstream
 *                        is px-space, so all features work under anisotropy
 *   ariaLabel            REQUIRED — human prose description
 *   xLabel,yLabel        axis letters (default 'x','y')
 *   quadrantLabels       true → Roman numerals I–IV in the quadrant centres
 *   grid                 false → hide the faint integer grid (default true)
 *   xGridStep,yGridStep  per-axis gridline spacing (default gridStep = 1)
 *   tickLabels           true → label numbered ticks on both axes
 *                        (comma-grouped, e.g. 7,000)
 *   tickStep             spacing between labeled ticks (default gridStep)
 *   xTickStep,yTickStep  per-axis tick spacing (default tickStep or the
 *                        matching grid step)
 *   tickGrouping         false → no thousands separators in tick labels;
 *                        xTickGrouping/yTickGrouping override per axis, so a
 *                        year axis reads 1975 while a count axis reads 2,200
 *   maxWidth             CSS max-width (default viewBox width + 20)
 *
 *   points:   [{ at:[x,y], label?, labelSide?, labelNudge?, open? }]
 *             labelSide: 'e','w','n','s','ne','nw','se','sw' (else auto)
 *             labelNudge: [dx,dy] px offset applied to the placed label —
 *             for the rare label that must sit a few px off its natural
 *             station to clear a curve (pair it with labelSide)
 *             open: true → hollow dot
 *   lines:    [{ through:[[x,y],[x,y]] | slope+intercept | x | y,
 *                label?, labelSide?, labelAt?, dashed?, arrows? }]
 *             x: a → vertical line; y: b → horizontal line
 *             labelAt: 0..1 position along the visible segment (default .78)
 *             labelSide: 'left'|'right' of travel direction (else auto)
 *   quadratics: [{ a, b?, c?, sideways?, dashed?, arrows? }]
 *             graphs y = ax^2 + bx + c; with sideways:true, graphs
 *             x = ay^2 + by + c; b and c default to 0
 *   cubics:   [{ a, b?, c?, d?, dashed?, arrows? }]
 *             graphs y = ax^3 + bx^2 + cx + d; b, c, and d default to 0
 *             Polynomial curves are clipped to the grid; arrows default true.
 *             arrows may also be 'start' or 'end' for a one-ended curve
 *   polynomials: [{ coeffs:[a0, a1, …], from?, to?, dashed?, arrows? }]
 *             graphs y = a0 + a1·x + a2·x^2 + … for any degree, so a source
 *             curve fitted to a quartic or higher renders from its exact
 *             formula instead of a spline. The leading (last) coefficient
 *             must be nonzero; quadratics/cubics remain the readable shorthand
 *             for degrees 2 and 3.
 *   rationals: [{ num:[a0,…], den:[b0,…], from?, to?, dashed?, arrows? }]
 *             graphs num(x)/den(x) from the exact quotient. Branches split at
 *             each pole on their own, because a run already ends wherever the
 *             curve leaves the grid. Use this for slant- and
 *             vertical-asymptote shapes such as 2/x + x/3 = (x^2+6)/(3x).
 *   smoothCurves: [{ through:[[x,y],...], freeform:true, dashed?, arrows? }]
 *             shape-preserving smooth interpolation through increasing x-values;
 *             REQUIRES freeform:true — an explicit acknowledgment that the
 *             curve is source art with no formula. Known shapes (including
 *             "generic" textbook curves, which should be fitted to an exact
 *             polynomial or sinusoid) must use an analytic primitive:
 *             quadratics, cubics, circles, polylines, or curves.
 *             arrows default false and may be true, 'start', or 'end'
 *   curves:   [{ kind:'sqrt'|'cbrt'|'reciprocal'|'reciprocal-squared'|'sine'
 *                     |'exp'|'log',
 *                a?, h?, k?, b?, from?, to?, dashed?, arrows? }]
 *             named analytic curves a·f(x−h)+k sampled from their exact
 *             equations. 'sine' draws k + a·sin(b·(x−h)) with angular
 *             frequency b (default 1); 'exp' draws k + a·b^(x−h) and 'log'
 *             draws k + a·log_b(x−h), both with base b (default e), the log
 *             sampled in y so its vertical tangent stays smooth. Quadratics,
 *             cubics, polynomials, and curves accept
 *             from/to (math x; y for sideways quadratics) to trim the drawn
 *             domain, e.g. to end a curve with an arrow mid-grid.
 *   segments: [{ from:[x,y], to:[x,y], dashed?, label?, labelSide?, arrows? }]
 *             arrows: true | 'start' | 'end' — an indicator ray, e.g. the
 *             "Domain" extent drawn above a graph to show it continues
 *   guides:   [[x,y], …]  dashed axis crosshair to each point
 *   slopeTriangles: [{ from:[x,y], to:[x,y], riseLabel?, runLabel?,
 *                      order? ('vh' vertical-first default, or 'hv') }]
 *   circles:  [{ at:[x,y], r | rx+ry, from?, to?, dashed? }]
 *             a real SVG ellipse, never a spline. rx/ry give unequal
 *             semi-axes in MATH units; from/to (degrees counter-clockwise
 *             from the positive x-axis) draw an exact elliptical arc instead
 *             of the closed curve, e.g. from:0 to:180 for an upper semicircle
 *   regions:  [{ line:<line spec>, side:[x,y] test point, dashed?,
 *                label?, labelSide?, labelAt? }]
 *             boundary drawn dashed for strict inequalities; the label
 *             rides on the boundary line and places like any line label
 *   texts:    [{ at:[x,y], text, anchor?, dx?, dy?, fontSize? }]
 *             escape hatch for axis words, quadrant notes, etc.
 */

import { GEOMETRY_EPSILON } from './geometry-constants.mjs'
import { fitTextBox, measureTextWidth } from './text-metrics.mjs'

const FONT = 13
const MIN_EFFECTIVE_FONT = 12 // px on screen, after any CSS max-width shrink
const MAX_GENERATED_STEPS = 10_000

/**
 * Text can be placed only from measured widths, never estimated ones, and a
 * figure that renders below MIN_EFFECTIVE_FONT is illegible: when the
 * builder's natural width exceeds its CSS max-width, the base font scales UP
 * so the on-screen size never drops below the floor.
 */
function fontFloor(naturalWidth, maxWidth) {
  const shrink = Math.min(1, maxWidth / naturalWidth)
  return Math.max(FONT, Math.ceil((MIN_EFFECTIVE_FONT / shrink) * 2) / 2)
}

/**
 * Final fit pass: expand the viewBox to cover every element the builder
 * emitted, so no label (or out-of-grid annotation) can ever clip. Sides that
 * nothing crosses stay exactly at the natural 0/0/W/H, so an in-bounds
 * figure keeps its historical viewBox byte for byte. `<path>` data is the one
 * shape not parsed here: paths come from circle arcs and smoothCurve
 * beziers, both bounded by grid geometry that never approaches the margin.
 */
function fitViewBox(els, W, H) {
  let x0 = 0, y0 = 0, x1 = W, y1 = H
  const eat = (x, y, pad = 2) => {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return
    x0 = Math.min(x0, x - pad); y0 = Math.min(y0, y - pad)
    x1 = Math.max(x1, x + pad); y1 = Math.max(y1, y + pad)
  }
  for (const { tag, attrs, text } of els) {
    if (tag === 'text') {
      const b = fitTextBox({
        x: attrs.x, y: attrs.y, text,
        fontSize: attrs.fontSize || FONT,
        textAnchor: attrs.textAnchor,
        italic: attrs.fontStyle === 'italic',
      })
      eat(b[0], b[1], 0); eat(b[2], b[3], 0)
    } else if (tag === 'line') {
      eat(+attrs.x1, +attrs.y1); eat(+attrs.x2, +attrs.y2)
    } else if (tag === 'polyline' || tag === 'polygon') {
      for (const pair of String(attrs.points).trim().split(/\s+/)) {
        const [x, y] = pair.split(',')
        eat(+x, +y)
      }
    } else if (tag === 'circle') {
      const r = +attrs.r
      eat(+attrs.cx - r, +attrs.cy - r); eat(+attrs.cx + r, +attrs.cy + r)
    } else if (tag === 'ellipse') {
      eat(+attrs.cx - +attrs.rx, +attrs.cy - +attrs.ry)
      eat(+attrs.cx + +attrs.rx, +attrs.cy + +attrs.ry)
    }
  }
  const x = Math.floor(x0), y = Math.floor(y0)
  return { x, y, w: Math.ceil(x1) - x, h: Math.ceil(y1) - y }
}

function stepCount(min, max, step, label) {
  const count = Math.floor((max - min) / step) + 1
  if (!Number.isFinite(count) || count > MAX_GENERATED_STEPS) {
    throw new Error(`${label} would generate too many elements`)
  }
  return count
}

// ---------------------------------------------------------------------------
// small vector helpers
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]]
const len = (v) => Math.hypot(v[0], v[1])
const norm = (v) => { const l = len(v) || 1; return [v[0] / l, v[1] / l] }

/** distance from point p to segment a-b (all px) */
function distToSeg(p, a, b) {
  const ab = sub(b, a)
  const t = Math.max(0, Math.min(1,
    ((p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1]) / ((ab[0] ** 2 + ab[1] ** 2) || 1)))
  return len(sub(p, [a[0] + t * ab[0], a[1] + t * ab[1]]))
}

/** U+2212 for negatives so minus signs render full-width */
export const mathMinus = (s) => String(s).replace(/-/g, '−')

/**
 * The render defaults `<graph-plot>` applies on top of an authored `grid`.
 *
 * They live here, next to the renderer that honors them, so that
 * `parseGraphPlotConfig` can validate the config the component will ACTUALLY
 * render. It used to validate a different one: the tick-label ceiling only ran
 * when the author had set `tickLabels`, and the tick step defaulted to the
 * grid step. An authored `{"grid":{"xMin":-1e6,"xMax":1e6}}` therefore passed
 * `npm run lint` and then asked the browser for a million tick labels.
 */
export const GRAPH_PLOT_RENDER_DEFAULTS = Object.freeze({ tickLabels: true, tickStep: 2 })

// ---------------------------------------------------------------------------
export function buildGraph(props) {
  const {
    xMin = -7, xMax = 7, yMin = -7, yMax = 7,
    unit = 20, xUnit: ux = unit, yUnit: uy = unit,
    margin = 26,
    caption,
    xLabel = 'x', yLabel = 'y',
    grid = true, gridStep = 1, xGridStep = gridStep, yGridStep = gridStep,
    tickLabels = false, tickStep,
    xTickStep = tickStep ?? xGridStep, yTickStep = tickStep ?? yGridStep,
    tickGrouping = true, xTickGrouping = tickGrouping, yTickGrouping = tickGrouping,
    quadrantLabels = false,
    points = [], lines = [], quadratics = [], cubics = [], polynomials = [], rationals = [],
    smoothCurves = [], segments = [], guides = [],
    circles = [], polylines = [], curves = [],
    slopeTriangles = [], regions = [], texts = [],
  } = props

  if (![xMin, xMax, yMin, yMax, ux, uy, margin].every(Number.isFinite)
    || xMin >= xMax || yMin >= yMax || ux <= 0 || uy <= 0 || margin < 0) {
    throw new Error('Graph needs finite increasing bounds, positive units, and a nonnegative margin')
  }
  if (grid && (!Number.isFinite(xGridStep) || xGridStep <= 0
    || !Number.isFinite(yGridStep) || yGridStep <= 0)) {
    throw new Error('Graph grid steps must be positive numbers')
  }
  const xGridCount = grid ? stepCount(xMin, xMax, xGridStep, 'xGridStep') : 0
  const yGridCount = grid ? stepCount(yMin, yMax, yGridStep, 'yGridStep') : 0

  const mTop = margin + (caption ? 22 : 0)
  const W = (xMax - xMin) * ux + 2 * margin
  const H = (yMax - yMin) * uy + margin + mTop
  const ox = margin - xMin * ux
  const oy = mTop + yMax * uy
  const px = ([mx, my]) => [ox + ux * mx, oy - uy * my]

  // CSS max-width shrinks a dense figure on screen; scale fonts so nothing
  // renders below the legibility floor. (The fit pass can widen the final
  // viewBox a little past W, so the shrink here is the natural-width bound —
  // within a couple percent of the shipped one.)
  const cssMaxWidth = props.maxWidth ?? Math.min(W + 20, 360)
  const FS = fontFloor(W, cssMaxWidth)
  const fsScale = FS / FONT
  const tickFS = Math.ceil(11 * fsScale)
  const quadrantFS = Math.ceil(15 * fsScale)

  // grid rectangle in px
  const gx0 = px([xMin, 0])[0], gx1 = px([xMax, 0])[0]
  const gy0 = px([0, yMax])[1], gy1 = px([0, yMin])[1]
  // axes overshoot the grid a little, arrowheads at the tips
  const OVER = 12, AH = 10, AW = 5

  const els = []
  const allLines = [...lines] // regions append their boundary lines
  const allSegments = [...segments]
  const obstacles = [] // px segments labels must clear
  const labelBoxes = [] // placed label bboxes [x0,y0,x1,y1]
  const strokeGapBoxes = [] // tick digits + axis letters; strokes pass BEHIND these
  const dotPx = [] // plotted dot centres
  const arrowTips = [] // arrowhead tip px points

  const add = (tag, attrs, text) => { els.push(text === undefined ? { tag, attrs } : { tag, attrs, text }) }

  // --- normalize a line spec to two math anchor points -------------------
  function lineAnchors(spec) {
    if (spec.through) return spec.through
    if (spec.x !== undefined) return [[spec.x, 0], [spec.x, 1]]
    if (spec.y !== undefined) return [[0, spec.y], [1, spec.y]]
    if (spec.slope !== undefined) {
      const b = spec.intercept ?? 0
      return [[0, b], [1, spec.slope + b]]
    }
    throw new Error('line spec needs through / slope+intercept / x / y')
  }

  /** clip infinite line through math points A,B to the grid rect (px);
      returns [P0, P1] px endpoints ordered along (B-A) direction.
      over=6 lets drawn lines overshoot the last gridline like the axes do;
      regions pass over=0 so shading stays flush with the grid. */
  function clipLine(A, B, over = 6) {
    const a = px(A), b = px(B)
    const d = sub(b, a)
    const R = { x0: gx0 - over, x1: gx1 + over, y0: gy0 - over, y1: gy1 + over }
    let t0 = -Infinity, t1 = Infinity
    for (const [p, q] of [[-d[0], a[0] - R.x0], [d[0], R.x1 - a[0]], [-d[1], a[1] - R.y0], [d[1], R.y1 - a[1]]]) {
      if (p === 0) { if (q < 0) return null; continue }
      const r = q / p
      if (p < 0) t0 = Math.max(t0, r); else t1 = Math.min(t1, r)
    }
    if (t0 > t1) return null
    return [[a[0] + t0 * d[0], a[1] + t0 * d[1]], [a[0] + t1 * d[0], a[1] + t1 * d[1]]]
  }

  /** t-interval (within [0,1]) where segment a→b passes through box bb, or null */
  function segBoxInterval(a, b, bb) {
    const d = [b[0] - a[0], b[1] - a[1]]
    let t0 = 0, t1 = 1
    for (const [p, q] of [[-d[0], a[0] - bb[0]], [d[0], bb[2] - a[0]], [-d[1], a[1] - bb[1]], [d[1], bb[3] - a[1]]]) {
      if (p === 0) { if (q < 0) return null; continue }
      const r = q / p
      if (p < 0) t0 = Math.max(t0, r); else t1 = Math.min(t1, r)
    }
    return t0 < t1 ? [t0, t1] : null
  }

  /** t-intervals of segment a→b OUTSIDE every gap box (inflated by pad) */
  function outsideGapRuns(a, b, pad = 1.5, boxes = strokeGapBoxes) {
    const cuts = []
    for (const bb of boxes) {
      const iv = segBoxInterval(a, b, [bb[0] - pad, bb[1] - pad, bb[2] + pad, bb[3] + pad])
      if (iv) cuts.push(iv)
    }
    if (!cuts.length) return [[0, 1]]
    cuts.sort((p, q) => p[0] - q[0])
    const runs = []
    let t = 0
    for (const [c0, c1] of cuts) {
      if (c0 > t + 1e-6) runs.push([t, Math.min(c0, 1)])
      t = Math.max(t, c1)
      if (t >= 1) break
    }
    if (t < 1 - 1e-6) runs.push([t, 1])
    return runs
  }

  /** Draw a DASHED segment a→b as sub-segments that pass BEHIND tick digits
      and axis letters — a dashed asymptote must not strike through the
      number at its own tick, and a gap in a dash pattern is invisible.
      Solid strokes never take these gaps: a solid line or curve with chunks
      missing reads as dashing, which is a mathematical statement. */
  function addGappedLine(a, b, extra) {
    for (const [s0, s1] of outsideGapRuns(a, b)) {
      const p = [a[0] + (b[0] - a[0]) * s0, a[1] + (b[1] - a[1]) * s0]
      const q = [a[0] + (b[0] - a[0]) * s1, a[1] + (b[1] - a[1]) * s1]
      add('line', segAttrs(p, q, extra))
    }
  }

  function arrowhead(tip, dir) {
    const [ux, uy] = norm(dir)
    const bx = tip[0] - AH * ux, by = tip[1] - AH * uy
    const p = [
      tip,
      [bx - AW * uy, by + AW * ux],
      [bx + AW * uy, by - AW * ux],
    ].map((q) => q.map((n) => +n.toFixed(1)).join(',')).join(' ')
    arrowTips.push(tip)
    add('polygon', { points: p, fill: 'currentColor' })
  }

  /** Drop the final ~arrowhead length of a px polyline so the stroke's round
      cap cannot poke past the arrowhead apex as a stray dot. The arrowhead
      itself is still drawn with its tip at the ORIGINAL endpoint. */
  function trimTailForArrow(pts) {
    let need = AH - 2 // keep a little overlap under the arrowhead base
    for (let i = pts.length - 1; i > 0; i--) {
      const d = len(sub(pts[i], pts[i - 1]))
      if (d >= need) {
        const t = need / d
        const cut = [
          pts[i][0] + (pts[i - 1][0] - pts[i][0]) * t,
          pts[i][1] + (pts[i - 1][1] - pts[i][1]) * t,
        ]
        return [...pts.slice(0, i), cut]
      }
      need -= d
    }
    return pts
  }

  /** Draw a px polyline with optional arrowheads at either end, trimming the
      stroke back under each arrowhead. Shared by every curve family. */
  function strokePolyline(pts, { dashed = false, startArrow = false, endArrow = false } = {}) {
    let drawn = pts
    if (endArrow && drawn.length > 1) drawn = trimTailForArrow(drawn)
    if (startArrow && drawn.length > 1) drawn = trimTailForArrow([...drawn].reverse()).reverse()
    add('polyline', {
      points: drawn.map((p) => p.map(fmt).join(',')).join(' '),
      fill: 'none', stroke: 'currentColor', strokeWidth: '1.8',
      strokeLinejoin: 'round', strokeLinecap: 'round',
      ...(dashed ? { strokeDasharray: '6 5' } : {}),
    })
    for (let i = 1; i < pts.length; i++) obstacles.push([pts[i - 1], pts[i]])
    // Orient each head along the chord it covers — from the trimmed stroke
    // end to the true endpoint — not the endpoint tangent. On a curving path
    // (e.g. a curve ending near an extremum) the tangent can differ visibly
    // from the covered stretch, leaving the head sitting beside the stroke
    // instead of flowing out of it.
    const chordDir = (tip, base, fallback) => (len(sub(tip, base)) > 0.5 ? sub(tip, base) : fallback)
    if (startArrow) arrowhead(pts[0], chordDir(pts[0], drawn[0], sub(pts[0], pts[1])))
    if (endArrow) arrowhead(pts.at(-1), chordDir(pts.at(-1), drawn.at(-1), sub(pts.at(-1), pts.at(-2))))
  }

  const fmt = (n) => +n.toFixed(1)
  const segAttrs = (a, b, extra = {}) => ({
    x1: fmt(a[0]), y1: fmt(a[1]), x2: fmt(b[0]), y2: fmt(b[1]),
    stroke: 'currentColor', ...extra,
  })

  // --- 1. grid ------------------------------------------------------------
  if (grid) {
    for (let index = 0; index < xGridCount; index++) {
      const mx = xMin + index * xGridStep
      if (mx === 0 && yMin <= 0 && yMax >= 0) continue
      add('line', segAttrs(px([mx, yMin]), px([mx, yMax]), { strokeWidth: '0.4', opacity: '0.2' }))
    }
    for (let index = 0; index < yGridCount; index++) {
      const my = yMin + index * yGridStep
      if (my === 0 && xMin <= 0 && xMax >= 0) continue
      add('line', segAttrs(px([xMin, my]), px([xMax, my]), { strokeWidth: '0.4', opacity: '0.2' }))
    }
  }
  if (caption) {
    add('text', { x: fmt(W / 2), y: '14', fontSize: String(FS), fill: 'currentColor', textAnchor: 'middle' }, mathMinus(caption))
  }

  // --- 2. shaded regions (under everything else) ---------------------------
  for (const r of regions) {
    const [A, B] = lineAnchors(r.line)
    // signed side of the test point relative to the boundary, in px space
    const a = px(A), b = px(B), d = sub(b, a)
    const sideOf = (p) => Math.sign(d[0] * (p[1] - a[1]) - d[1] * (p[0] - a[0])) || 0
    const want = sideOf(px(r.side))
    const clipped = clipLine(A, B, 0)
    if (!clipped) continue
    const corners = [[gx0, gy0], [gx1, gy0], [gx1, gy1], [gx0, gy1]]
      .filter((c) => sideOf(c) === want)
    // order polygon: walk boundary, then the kept corners sorted around centroid
    const pts = [...clipped, ...corners]
    const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length
    const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length
    pts.sort((p, q) => Math.atan2(p[1] - cy, p[0] - cx) - Math.atan2(q[1] - cy, q[0] - cx))
    add('polygon', {
      points: pts.map((q) => q.map(fmt).join(',')).join(' '),
      fill: 'currentColor', opacity: '0.12', stroke: 'none',
    })
    // boundary line itself
    allLines.push({ ...r.line, dashed: r.dashed, label: r.label, labelSide: r.labelSide, labelAt: r.labelAt })
  }

  // --- 3. axes --------------------------------------------------------------
  const axisY = yMin <= 0 && yMax >= 0
    ? px([0, 0])[1]
    : yMax < 0 ? gy0 : gy1 // negative-only: zero is above; positive-only: below
  const axisX = xMin <= 0 && xMax >= 0
    ? px([0, 0])[0]
    : xMax < 0 ? gx1 : gx0 // negative-only: zero is right; positive-only: left
  const xA0 = xMin < 0 ? gx0 - OVER + AH : axisX
  const yA1 = yMin < 0 ? gy1 + OVER - AH : axisY
  add('line', segAttrs([xA0, axisY], [gx1 + OVER - AH, axisY], { strokeWidth: '1' }))
  add('line', segAttrs([axisX, gy0 - OVER + AH], [axisX, yA1], { strokeWidth: '1' }))
  arrowhead([gx1 + OVER, axisY], [1, 0])
  arrowhead([axisX, gy0 - OVER], [0, -1])
  if (xMin < 0) arrowhead([gx0 - OVER, axisY], [-1, 0])
  if (yMin < 0) arrowhead([axisX, gy1 + OVER], [0, 1])
  obstacles.push([[gx0 - OVER, axisY], [gx1 + OVER, axisY]], [[axisX, gy0 - OVER], [axisX, gy1 + OVER]])
  // Tight ink box of a text node, for collision scoring. Exact advance
  // widths (no fit-pass safety), ascent/descent bounds of the glyphs this
  // stack actually inks — the fit pass keeps its own wider margins.
  const tightBox = (x, y, text, anchor, size, italic = false) => {
    const w = measureTextWidth(text, size, { italic })
    const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x
    return [x0, y - 0.72 * size, x0 + w, y + 0.2 * size]
  }

  // axis letters just off the arrow tips — registered as label obstacles, so
  // an auto-placed label cannot print over the x/y letter
  add('text', { x: fmt(gx1 + OVER - 2), y: fmt(axisY - 8), fontSize: String(FS), fill: 'currentColor', textAnchor: 'end', fontStyle: 'italic' }, xLabel)
  add('text', { x: fmt(axisX + 8), y: fmt(gy0 - OVER + 10), fontSize: String(FS), fill: 'currentColor', fontStyle: 'italic' }, yLabel)
  const xLetterBox = tightBox(gx1 + OVER - 2, axisY - 8, xLabel, 'end', FS, true)
  const yLetterBox = tightBox(axisX + 8, gy0 - OVER + 10, yLabel, 'start', FS, true)
  labelBoxes.push(xLetterBox, yLetterBox)
  strokeGapBoxes.push(xLetterBox, yLetterBox)
  if (caption) labelBoxes.push(tightBox(W / 2, 14, caption, 'middle', FS))

  if (tickLabels !== undefined && tickLabels !== true && tickLabels !== false
    && tickLabels !== 'x' && tickLabels !== 'y') {
    throw new Error("tickLabels must be true, false, 'x', or 'y'")
  }
  if (tickLabels) {
    // `true` labels both axes; 'x' or 'y' labels one — source art sometimes
    // numbers only the axis the discussion reads from.
    const wantX = tickLabels === true || tickLabels === 'x'
    const wantY = tickLabels === true || tickLabels === 'y'
    if (!Number.isFinite(xTickStep) || xTickStep <= 0) throw new Error('xTickStep must be a positive number')
    if (!Number.isFinite(yTickStep) || yTickStep <= 0) throw new Error('yTickStep must be a positive number')
    // Digit grouping is right for counts and money and wrong for years, so
    // each axis can opt out: 1975 must not render as 1,975.
    const fmtTick = (n, grouped) => mathMinus(grouped
      ? (+n.toFixed(6)).toLocaleString('en-US')
      : String(+n.toFixed(6)))
    // Ticks ride the drawn axis, not the line y = 0 / x = 0, so data ranges
    // that never reach the origin (years 1973..2008, barrels 0..2200) still
    // get labeled axes. The origin label is dropped only when both axes
    // actually cross there and the single "0" would be ambiguous.
    const originShown = xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0
    const xDigits = [], yDigits = []
    const firstX = Math.ceil(xMin / xTickStep) * xTickStep
    const xCount = wantX && firstX <= xMax ? stepCount(firstX, xMax, xTickStep, 'xTickStep') : 0
    for (let index = 0; index < xCount; index++) {
      const mx = firstX + index * xTickStep
      if (originShown && Math.abs(mx) < GEOMETRY_EPSILON) continue
      const cx = px([mx, 0])[0]
      add('line', segAttrs([cx, axisY - 3], [cx, axisY + 3], { strokeWidth: '1' }))
      const el = { tag: 'text', attrs: { x: fmt(cx), y: fmt(axisY + 4 + tickFS), fontSize: String(tickFS), fill: 'currentColor', textAnchor: 'middle' }, text: fmtTick(mx, xTickGrouping) }
      els.push(el); xDigits.push(el)
    }
    const firstY = Math.ceil(yMin / yTickStep) * yTickStep
    const yCount = wantY && firstY <= yMax ? stepCount(firstY, yMax, yTickStep, 'yTickStep') : 0
    for (let index = 0; index < yCount; index++) {
      const my = firstY + index * yTickStep
      if (originShown && Math.abs(my) < GEOMETRY_EPSILON) continue
      const cy = px([0, my])[1]
      add('line', segAttrs([axisX - 3, cy], [axisX + 3, cy], { strokeWidth: '1' }))
      const el = { tag: 'text', attrs: { x: fmt(axisX - 6), y: fmt(cy + 4), fontSize: String(tickFS), fill: 'currentColor', textAnchor: 'end' }, text: fmtTick(my, yTickGrouping) }
      els.push(el); yDigits.push(el)
    }
    // On a dense grid the x digit and y digit nearest the origin share the
    // third-quadrant corner cell (both spell "−1"); slide the y digit LEFT
    // along its row until it clears, the way set type does, instead of
    // printing the two digits through each other. Every digit box then
    // becomes a placement obstacle, so auto-placed labels cannot print over
    // tick numbers, and a stroke-gap box, so lines and curves pass behind
    // the numbers rather than through them.
    const xDigitBoxes = xDigits.map((el) => tightBox(+el.attrs.x, +el.attrs.y, el.text, 'middle', tickFS))
    const yDigitBoxes = yDigits.map((el) => tightBox(+el.attrs.x, +el.attrs.y, el.text, 'end', tickFS))
    const overlaps = (p, q) => (
      Math.min(p[2], q[2]) - Math.max(p[0], q[0]) > 0
      && Math.min(p[3], q[3]) - Math.max(p[1], q[1]) > 0)
    yDigits.forEach((el, i) => {
      // The x digit row cannot make room sideways (its gaps are narrower
      // than any digit), so a colliding y digit drops just BELOW the row —
      // set type does the same. If even that space is taken (a next y digit
      // is already there), keep the original position: the figure is too
      // dense for this tick labeling and the layout check will say so.
      const bb = yDigitBoxes[i]
      const hits = xDigitBoxes.filter((xb) => overlaps(bb, xb))
      if (!hits.length) return
      const clearTop = Math.max(...hits.map((xb) => xb[3])) + 1
      const dropped = [bb[0], clearTop, bb[2], clearTop + (bb[3] - bb[1])]
      const others = [...xDigitBoxes, ...yDigitBoxes.filter((_, j) => j !== i)]
      if (others.some((ob) => overlaps(dropped, ob))) return
      el.attrs.y = fmt(+el.attrs.y + (clearTop - bb[1]))
      yDigitBoxes[i] = dropped
    })
    labelBoxes.push(...xDigitBoxes, ...yDigitBoxes)
    strokeGapBoxes.push(...xDigitBoxes, ...yDigitBoxes)
  }

  if (quadrantLabels) {
    const qs = [[1, 1, 'I'], [-1, 1, 'II'], [-1, -1, 'III'], [1, -1, 'IV']]
    for (const [sx, sy, t] of qs) {
      const qx = sx > 0 ? xMax / 2 : xMin / 2
      const qy = sy > 0 ? yMax / 2 : yMin / 2
      const q = px([qx, qy])
      add('text', { x: fmt(q[0]), y: fmt(q[1] + 4), fontSize: String(quadrantFS), fill: 'currentColor', textAnchor: 'middle', opacity: '0.75' }, t)
      labelBoxes.push([q[0] - 8, q[1] - 9, q[0] + 8, q[1] + 8])
    }
  }

  // --- 4. guides (dashed crosshair to a point) ------------------------------
  for (const g of guides) {
    const p = px(g)
    addGappedLine([p[0], axisY], p, { strokeWidth: '1', strokeDasharray: '4 3', opacity: '0.7' })
    addGappedLine([axisX, p[1]], p, { strokeWidth: '1', strokeDasharray: '4 3', opacity: '0.7' })
    obstacles.push([[p[0], axisY], p], [[axisX, p[1]], p])
  }

  // --- 5. lines --------------------------------------------------------------
  // A DASHED line is guide ink (an asymptote, a boundary), so it yields to
  // label ink the way print art does: its stroke is emitted only after the
  // label placement pass below, gapped around every label box it crosses.
  // The element still lands at THIS index (spliced), keeping paint order —
  // and solid lines, axes, and curves never yield.
  const pendingLineLabels = []
  const deferredLineStrokes = []
  for (const l of allLines) {
    const [A, B] = lineAnchors(l)
    const clipped = clipLine(A, B)
    if (!clipped) continue
    const [P0, P1] = clipped
    const dir = norm(sub(P1, P0))
    const dash = l.dashed ? { strokeDasharray: '6 5' } : {}
    const arrows = l.arrows !== false
    // shorten by arrowhead length so the shaft doesn't poke past the tip
    const s0 = arrows ? [P0[0] + AH * dir[0], P0[1] + AH * dir[1]] : P0
    const s1 = arrows ? [P1[0] - AH * dir[0], P1[1] - AH * dir[1]] : P1
    if (l.dashed) {
      deferredLineStrokes.push({ index: els.length, a: s0, b: s1, extra: { strokeWidth: '1.8', ...dash } })
    } else {
      add('line', segAttrs(s0, s1, { strokeWidth: '1.8', ...dash }))
    }
    if (arrows) { arrowhead(P1, dir); arrowhead(P0, [-dir[0], -dir[1]]) }
    obstacles.push({ seg: [P0, P1], soft: !!l.dashed })
    if (l.label) pendingLineLabels.push({ l, P0, P1, dir })
  }

  // --- 6. polynomial curves --------------------------------------------------
  // Sample densely enough that curves remain visually smooth even where their
  // slope changes quickly. Runs are split whenever a curve leaves the grid,
  // preventing an off-canvas point from stretching a polyline across it.
  function drawPolynomialCurve(spec, { independentMin, independentMax, pointAt, errorName, unitPx = ux, toIndependent = (v) => v }) {
    if (!Number.isFinite(spec.a) || spec.a === 0) throw new Error(`${errorName} needs a nonzero numeric a`)
    for (const [key, clamp] of [['from', Math.max], ['to', Math.min]]) {
      if (spec[key] === undefined) continue
      if (!Number.isFinite(spec[key])) throw new Error(`${errorName} ${key} must be a finite number`)
      const t = toIndependent(spec[key])
      if (key === 'from') independentMin = clamp(independentMin, t)
      else independentMax = clamp(independentMax, t)
    }
    if (!(independentMax > independentMin)) throw new Error(`${errorName} from/to leave no domain to draw`)
    const samples = Math.max(240, Math.ceil((independentMax - independentMin) * unitPx * 4))
    if (!Number.isFinite(samples) || samples > MAX_GENERATED_STEPS) {
      throw new Error(`${errorName} would generate too many curve samples`)
    }
    const runs = []
    let run = []
    for (let i = 0; i <= samples; i++) {
      const t = independentMin + (independentMax - independentMin) * i / samples
      const point = pointAt(t)
      if (point[0] >= xMin && point[0] <= xMax && point[1] >= yMin && point[1] <= yMax) run.push(px(point))
      else if (run.length) { if (run.length > 1) runs.push(run); run = [] }
    }
    if (run.length > 1) runs.push(run)
    for (const pts of runs) {
      const wantArrows = pts.length > 2
      strokePolyline(pts, {
        dashed: !!spec.dashed,
        startArrow: wantArrows && spec.arrows !== false && spec.arrows !== 'end',
        endArrow: wantArrows && spec.arrows !== false && spec.arrows !== 'start',
      })
    }
  }

  for (const q of quadratics) {
    const b = q.b ?? 0, c = q.c ?? 0
    if (q.sideways) {
      drawPolynomialCurve(q, {
        independentMin: yMin,
        independentMax: yMax,
        pointAt: (y) => [q.a * y * y + b * y + c, y],
        errorName: 'quadratic',
        unitPx: uy,
      })
    } else {
      drawPolynomialCurve(q, {
        independentMin: xMin,
        independentMax: xMax,
        pointAt: (x) => [x, q.a * x * x + b * x + c],
        errorName: 'quadratic',
      })
    }
  }

  for (const c of cubics) {
    const b = c.b ?? 0, linear = c.c ?? 0, d = c.d ?? 0
    drawPolynomialCurve(c, {
      independentMin: xMin,
      independentMax: xMax,
      pointAt: (x) => [x, c.a * x * x * x + b * x * x + linear * x + d],
      errorName: 'cubic',
    })
  }

  // General-degree polynomials. A textbook curve that is "generic" only in
  // appearance is still a function: fit it, then draw the fitted formula here
  // rather than spline-tracing it through smoothCurves.
  for (const p of polynomials) {
    const { coeffs } = p
    if (!Array.isArray(coeffs) || coeffs.length < 2 || !coeffs.every(Number.isFinite)) {
      throw new Error('polynomial needs a coeffs array [a0, a1, …] of at least two finite numbers')
    }
    if (coeffs.at(-1) === 0) {
      throw new Error('polynomial leading coefficient must be nonzero — drop the trailing zero term')
    }
    // Horner evaluation: fewer operations and less floating-point drift than
    // summing x**i term by term across the dense sample grid.
    const at = (x) => coeffs.reduceRight((acc, c) => acc * x + c, 0)
    drawPolynomialCurve({ ...p, a: coeffs.at(-1) }, {
      independentMin: xMin,
      independentMax: xMax,
      pointAt: (x) => [x, at(x)],
      errorName: 'polynomial',
    })
  }

  // Rational functions, num(x)/den(x). Each branch is drawn from the exact
  // quotient; runs already split wherever the curve leaves the grid, so a pole
  // separates the branches without any special casing.
  for (const r of rationals) {
    for (const [key, coeffs] of [['num', r.num], ['den', r.den]]) {
      if (!Array.isArray(coeffs) || !coeffs.length || !coeffs.every(Number.isFinite)) {
        throw new Error(`rational ${key} must be a coeffs array [a0, a1, …] of finite numbers`)
      }
      if (coeffs.every((c) => c === 0)) throw new Error(`rational ${key} cannot be identically zero`)
    }
    const evalAt = (coeffs, x) => coeffs.reduceRight((acc, c) => acc * x + c, 0)
    drawPolynomialCurve({ ...r, a: r.num.at(-1) || 1 }, {
      independentMin: xMin,
      independentMax: xMax,
      pointAt: (x) => [x, evalAt(r.num, x) / evalAt(r.den, x)],
      errorName: 'rational',
    })
  }

  // Shape-preserving piecewise cubic interpolation. Interior tangents use a
  // weighted harmonic mean of adjacent slopes and become zero at extrema, so
  // the rendered curve cannot overshoot a stated minimum or maximum.
  for (const curve of smoothCurves) {
    if (curve.freeform !== true) {
      throw new Error('smoothCurves is spline interpolation for genuinely freeform source art and requires an explicit freeform: true — draw a known or generic shape from an analytic primitive instead (quadratics, cubics, circles, polylines, or curves with kind sqrt/cbrt/reciprocal/reciprocal-squared/sine/exp/log)')
    }
    const through = curve.through
    if (!Array.isArray(through) || through.length < 2) throw new Error('smoothCurve needs at least two through points')
    if (through.some((p) => !Array.isArray(p) || p.length !== 2 || p.some((n) => !Number.isFinite(n)))) {
      throw new Error('smoothCurve through points must be finite [x,y] pairs')
    }
    const h = [], slopes = []
    for (let i = 0; i < through.length - 1; i++) {
      const dx = through[i + 1][0] - through[i][0]
      if (dx <= 0) throw new Error('smoothCurve through points need strictly increasing x-values')
      h.push(dx)
      slopes.push((through[i + 1][1] - through[i][1]) / dx)
    }
    const tangents = [slopes[0]]
    for (let i = 1; i < through.length - 1; i++) {
      const before = slopes[i - 1], after = slopes[i]
      if (before * after <= 0) tangents.push(0)
      else {
        const w1 = 2 * h[i] + h[i - 1], w2 = h[i] + 2 * h[i - 1]
        tangents.push((w1 + w2) / (w1 / before + w2 / after))
      }
    }
    tangents.push(slopes.at(-1))

    const start = px(through[0])
    const path = [`M ${fmt(start[0])} ${fmt(start[1])}`]
    const sampled = [start]
    for (let i = 0; i < through.length - 1; i++) {
      const p0 = through[i], p3 = through[i + 1], dx = h[i]
      const p1 = [p0[0] + dx / 3, p0[1] + tangents[i] * dx / 3]
      const p2 = [p3[0] - dx / 3, p3[1] - tangents[i + 1] * dx / 3]
      const [a, b, c] = [p1, p2, p3].map(px)
      path.push(`C ${fmt(a[0])} ${fmt(a[1])} ${fmt(b[0])} ${fmt(b[1])} ${fmt(c[0])} ${fmt(c[1])}`)
      const p0px = px(p0)
      for (let step = 1; step <= 20; step++) {
        const t = step / 20, mt = 1 - t
        sampled.push([
          mt ** 3 * p0px[0] + 3 * mt ** 2 * t * a[0] + 3 * mt * t ** 2 * b[0] + t ** 3 * c[0],
          mt ** 3 * p0px[1] + 3 * mt ** 2 * t * a[1] + 3 * mt * t ** 2 * b[1] + t ** 3 * c[1],
        ])
      }
    }
    const startArrow = curve.arrows === true || curve.arrows === 'start'
    const endArrow = curve.arrows === true || curve.arrows === 'end'
    if (startArrow || endArrow) {
      // arrows need the stroke trimmed under the head; draw the dense sample
      // polyline (visually identical at these sizes) instead of the bezier
      strokePolyline(sampled, { dashed: !!curve.dashed, startArrow, endArrow })
    } else {
      add('path', {
        d: path.join(' '), fill: 'none', stroke: 'currentColor', strokeWidth: '1.8',
        strokeLinejoin: 'round', strokeLinecap: 'round',
        ...(curve.dashed ? { strokeDasharray: '6 5' } : {}),
      })
      for (let i = 1; i < sampled.length; i++) obstacles.push([sampled[i - 1], sampled[i]])
    }
  }

  // --- 6b. straight polylines (piecewise-linear graphs such as y = |x|) ------
  // Corners are preserved exactly; smoothCurves would round them off.
  for (const p of polylines) {
    const through = p.through
    if (!Array.isArray(through) || through.length < 2) throw new Error('polyline needs at least two through points')
    if (through.some((q) => !Array.isArray(q) || q.length !== 2 || q.some((n) => !Number.isFinite(n)))) {
      throw new Error('polyline through points must be finite [x,y] pairs')
    }
    strokePolyline(through.map(px), {
      dashed: !!p.dashed,
      startArrow: p.arrows === true || p.arrows === 'start',
      endArrow: p.arrows === true || p.arrows === 'end',
    })
  }

  // --- 6c. exact circles ------------------------------------------------------
  // Rendered as a real SVG ellipse (rx/ry follow the axis units), never as a
  // spline approximation, so conics stay geometrically true.
  for (const c of circles) {
    const rx = c.rx ?? c.r, ry = c.ry ?? c.r
    if (!Array.isArray(c.at) || c.at.length !== 2 || !c.at.every(Number.isFinite)
      || !Number.isFinite(rx) || rx <= 0 || !Number.isFinite(ry) || ry <= 0) {
      throw new Error('circle needs a finite at:[x,y] centre and a positive r (or rx and ry)')
    }
    const [cx, cy] = px(c.at)
    const pxRx = rx * ux, pxRy = ry * uy
    const stroke = {
      fill: 'none', stroke: 'currentColor', strokeWidth: '1.8',
      ...(c.dashed ? { strokeDasharray: '6 5' } : {}),
    }
    // from/to (degrees, counter-clockwise from the positive x-axis) draw an
    // arc — a real SVG elliptical arc, so a semicircle stays exact.
    const arc = c.from !== undefined || c.to !== undefined
    const a0 = arc ? (c.from ?? 0) : 0
    const a1 = arc ? (c.to ?? 360) : 360
    if (arc && (!Number.isFinite(a0) || !Number.isFinite(a1) || a1 === a0 || Math.abs(a1 - a0) > 360)) {
      throw new Error('circle from/to must be distinct finite angles no more than 360 degrees apart')
    }
    const at = (deg) => {
      const t = (deg * Math.PI) / 180
      return [cx + pxRx * Math.cos(t), cy - pxRy * Math.sin(t)]
    }
    if (arc) {
      const [x0, y0] = at(a0), [x1, y1] = at(a1)
      const large = Math.abs(a1 - a0) > 180 ? 1 : 0
      // y is flipped in px space, so increasing math angle sweeps clockwise
      const sweep = a1 > a0 ? 0 : 1
      add('path', {
        d: `M ${fmt(x0)} ${fmt(y0)} A ${fmt(pxRx)} ${fmt(pxRy)} 0 ${large} ${sweep} ${fmt(x1)} ${fmt(y1)}`,
        ...stroke,
      })
    } else {
      add('ellipse', { cx: fmt(cx), cy: fmt(cy), rx: fmt(pxRx), ry: fmt(pxRy), ...stroke })
    }
    let prev = null
    for (let i = 0; i <= 36; i++) {
      const q = at(a0 + ((a1 - a0) * i) / 36)
      if (prev) obstacles.push([prev, q])
      prev = q
    }
  }

  // --- 6d. named analytic curves ----------------------------------------------
  // Toolkit shapes with vertical tangents or asymptotes, sampled from their
  // exact equations (parametrically where x-sampling would corner them).
  // Spec: { kind, a?, h?, k?, dashed?, arrows? } drawing a·f(x−h)+k.
  for (const c of curves) {
    const a = c.a ?? 1, h = c.h ?? 0, k = c.k ?? 0
    const spec = { ...c, a }
    if (c.kind === 'sqrt') {
      const tMin = Math.sqrt(Math.max(0, xMin - h))
      const tMax = Math.sqrt(Math.max(0, xMax - h))
      if (tMax <= tMin) throw new Error('sqrt curve lies outside the x-range')
      drawPolynomialCurve({ arrows: 'end', ...spec }, {
        independentMin: tMin, independentMax: tMax,
        pointAt: (t) => [h + t * t, k + a * t], errorName: 'sqrt curve',
        toIndependent: (x) => Math.sqrt(Math.max(0, x - h)),
      })
    } else if (c.kind === 'cbrt') {
      drawPolynomialCurve(spec, {
        independentMin: Math.cbrt(xMin - h), independentMax: Math.cbrt(xMax - h),
        pointAt: (t) => [h + t * t * t, k + a * t], errorName: 'cbrt curve',
        toIndependent: (x) => Math.cbrt(x - h),
      })
    } else if (c.kind === 'sine') {
      const b = c.b ?? 1
      if (!Number.isFinite(b) || b === 0) throw new Error('sine curve needs a nonzero numeric b (angular frequency)')
      drawPolynomialCurve(spec, {
        independentMin: xMin, independentMax: xMax,
        pointAt: (x) => [x, k + a * Math.sin(b * (x - h))], errorName: 'sine curve',
      })
    } else if (c.kind === 'exp') {
      const b = c.b ?? Math.E
      if (!Number.isFinite(b) || b <= 0 || b === 1) throw new Error('exp curve needs a positive base b other than 1')
      drawPolynomialCurve(spec, {
        independentMin: xMin, independentMax: xMax,
        pointAt: (x) => [x, k + a * b ** (x - h)], errorName: 'exp curve',
      })
    } else if (c.kind === 'log') {
      const b = c.b ?? Math.E
      if (!Number.isFinite(b) || b <= 0 || b === 1) throw new Error('log curve needs a positive base b other than 1')
      const lnB = Math.log(b)
      // sampled in y so the vertical tangent at the asymptote stays smooth
      drawPolynomialCurve(spec, {
        independentMin: yMin, independentMax: yMax,
        pointAt: (y) => [h + b ** ((y - k) / a), y], errorName: 'log curve',
        unitPx: uy,
        toIndependent: (x) => k + a * Math.log(Math.max(1e-12, x - h)) / lnB,
      })
    } else if (c.kind === 'reciprocal') {
      drawPolynomialCurve(spec, {
        independentMin: xMin, independentMax: xMax,
        pointAt: (x) => [x, k + a / (x - h)], errorName: 'reciprocal curve',
      })
    } else if (c.kind === 'reciprocal-squared') {
      drawPolynomialCurve(spec, {
        independentMin: xMin, independentMax: xMax,
        pointAt: (x) => [x, k + a / ((x - h) * (x - h))], errorName: 'reciprocal-squared curve',
      })
    } else {
      throw new Error(`unknown curve kind ${JSON.stringify(c.kind)}`)
    }
  }

  // --- 7. segments & slope triangles -----------------------------------------
  for (const t of slopeTriangles) {
    const order = t.order || 'vh'
    const corner = order === 'vh' ? [t.from[0], t.to[1]] : [t.to[0], t.from[1]]
    const vSeg = order === 'vh' ? [t.from, corner] : [corner, t.to]
    const hSeg = order === 'vh' ? [corner, t.to] : [t.from, corner]
    allSegments.push(
      { from: vSeg[0], to: vSeg[1], dashed: true, label: t.riseLabel, kind: 'v', nudge: t.riseNudge },
      { from: hSeg[0], to: hSeg[1], dashed: true, label: t.runLabel, kind: 'h', nudge: t.runNudge },
    )
  }
  for (const s of allSegments) {
    const a = px(s.from), b = px(s.to)
    // arrows: true | 'start' | 'end' — for indicator rays such as the
    // "Domain"/"Range" extents drawn alongside a graph. The shaft stops short
    // of each head so no stroke cap pokes past the apex.
    const headStart = s.arrows === true || s.arrows === 'start'
    const headEnd = s.arrows === true || s.arrows === 'end'
    const dir = norm(sub(b, a))
    const s0 = headStart ? [a[0] + AH * dir[0], a[1] + AH * dir[1]] : a
    const s1 = headEnd ? [b[0] - AH * dir[0], b[1] - AH * dir[1]] : b
    if (s.dashed) addGappedLine(s0, s1, { strokeWidth: '1.4', strokeDasharray: '4 3' })
    else add('line', segAttrs(s0, s1, { strokeWidth: '1.4' }))
    if (headEnd) arrowhead(b, dir)
    if (headStart) arrowhead(a, [-dir[0], -dir[1]])
    obstacles.push([a, b])
    if (s.label) {
      const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
      const vertical = Math.abs(a[0] - b[0]) < Math.abs(a[1] - b[1])
      pendingLineLabels.push({ seg: s, mid, vertical })
    }
  }

  // --- 8. points ---------------------------------------------------------------
  const placed = []
  for (const p of points) {
    const c = px(p.at)
    dotPx.push(c)
    add('circle', {
      cx: fmt(c[0]), cy: fmt(c[1]), r: '4',
      ...(p.open ? { fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' } : { fill: 'currentColor' }),
    })
    if (p.label) placed.push({ p, c })
  }

  // --- raw text annotations, computed before placement ----------------------
  // texts are the exact-placement escape hatch: they are never moved, but
  // their ink is registered as an obstacle BEFORE the placement pass below,
  // so auto-placed labels route around them instead of printing through them.
  // They are still EMITTED after the placed labels, keeping element order
  // (and therefore serialized output) stable for unaffected figures.
  const textAnnotations = texts.map((t) => {
    const p = px(t.at)
    const size = t.fontSize ? t.fontSize * fsScale : FS
    const attrs = {
      x: fmt(p[0] + (t.dx || 0)), y: fmt(p[1] + (t.dy || 0)),
      fontSize: String(size), fill: 'currentColor',
      ...(t.anchor ? { textAnchor: t.anchor } : {}),
      ...(t.italic ? { fontStyle: 'italic' } : {}),
    }
    labelBoxes.push(tightBox(+attrs.x, +attrs.y, mathMinus(t.text), t.anchor || 'start', size, !!t.italic))
    return { attrs, text: mathMinus(t.text) }
  })

  // --- label placement -----------------------------------------------------
  const SIDES = {
    e: [1, 0, 'start', 4], w: [-1, 0, 'end', 4],
    n: [0, -1, 'middle', 0], s: [0, 1, 'middle', 9],
    ne: [0.8, -0.8, 'start', 0], nw: [-0.8, -0.8, 'end', 0],
    se: [0.8, 0.8, 'start', 9], sw: [-0.8, 0.8, 'end', 9],
  }
  const OFF = 14 * fsScale

  function labelBox(anchorPt, text, anchorMode) {
    const w = measureTextWidth(text, FS)
    const x0 = anchorMode === 'start' ? anchorPt[0] : anchorMode === 'end' ? anchorPt[0] - w : anchorPt[0] - w / 2
    // text y is the baseline; box spans ~FS above it
    return [x0, anchorPt[1] - FS + 2, x0 + w, anchorPt[1] + 3]
  }
  const boxPoints = (bb) => [
    [bb[0], bb[1]], [bb[2], bb[1]], [bb[0], bb[3]], [bb[2], bb[3]],
    [(bb[0] + bb[2]) / 2, (bb[1] + bb[3]) / 2],
    [bb[0], (bb[1] + bb[3]) / 2], [bb[2], (bb[1] + bb[3]) / 2],
  ]

  function scoreBox(bb) {
    let worst = Infinity
    for (const o of obstacles) {
      const [a, b] = o.seg ?? o
      for (const q of boxPoints(bb)) worst = Math.min(worst, distToSeg(q, a, b))
      // A stroke PASSING THROUGH the box is worse than any near miss: score
      // it negative by penetration depth, or a label prefers sitting across
      // the y-axis (distance zero) over sitting 2px from a curve (distance
      // two). A SOFT obstacle (a dashed guide, which is emitted gapped
      // around label ink) costs a mild flat penalty instead, so the pocket
      // print art would use — over the dashed asymptote — stays available.
      const iv = segBoxInterval(a, b, bb)
      if (iv) {
        const [t0, t1] = iv
        const m = [a[0] + (b[0] - a[0]) * (t0 + t1) / 2, a[1] + (b[1] - a[1]) * (t0 + t1) / 2]
        const depth = Math.min(m[0] - bb[0], bb[2] - m[0], m[1] - bb[1], bb[3] - m[1])
        if (depth > 0) worst = Math.min(worst, o.soft ? -1.5 : -depth - 2)
      }
    }
    for (const q of boxPoints(bb)) {
      for (const d of dotPx) worst = Math.min(worst, len(sub(q, d)) - 4)
      for (const t of arrowTips) worst = Math.min(worst, len(sub(q, t)) - 6)
    }
    for (const other of labelBoxes) {
      const overlapX = Math.max(0, Math.min(bb[2], other[2]) - Math.max(bb[0], other[0]) + 6)
      const overlapY = Math.max(0, Math.min(bb[3], other[3]) - Math.max(bb[1], other[1]) + 6)
      if (overlapX > 0 && overlapY > 0) worst = Math.min(worst, -Math.min(overlapX, overlapY))
    }
    // stay inside the viewBox
    const edge = Math.min(bb[0] - 2, bb[1] - 2, W - 2 - bb[2], H - 2 - bb[3])
    if (edge < 0) worst = Math.min(worst, edge)
    return worst
  }

  function placeLabel(c, text, prefer, nudge) {
    const [nx, ny] = nudge || [0, 0]
    const order = prefer ? [prefer, ...Object.keys(SIDES).filter((k) => k !== prefer)]
      : ['e', 'ne', 'se', 'w', 'nw', 'sw', 'n', 's']
    let best = null
    for (const side of order) {
      const [dx, dy, anchor, vAdj] = SIDES[side]
      const ap = [c[0] + OFF * dx + nx, c[1] + OFF * dy + vAdj * fsScale + ny]
      const bb = labelBox(ap, text, anchor)
      const sc = scoreBox(bb)
      // An explicit labelSide is the author's call and is always honored:
      // clipping is impossible now that the viewBox fits itself around every
      // label, so there is nothing left to protect the author from.
      if (prefer && side === prefer) { best = { ap, anchor, bb, sc }; break }
      if (!best || sc > best.sc) best = { ap, anchor, bb, sc }
      if (!prefer && sc >= 10) break // good enough, keep natural reading side
    }
    labelBoxes.push(best.bb)
    add('text', {
      x: fmt(best.ap[0]), y: fmt(best.ap[1]),
      fontSize: String(FS), fill: 'currentColor', textAnchor: best.anchor,
    }, mathMinus(text))
  }

  for (const { p, c } of placed) placeLabel(c, p.label, p.labelSide, p.labelNudge)

  // line + segment labels
  for (const item of pendingLineLabels) {
    if (item.seg) {
      // rise/run style: put the label on the outside of the leg
      const prefer = item.vertical ? 'w' : 's'
      placeLabel(item.mid, item.seg.label, item.seg.labelSide || prefer, item.seg.nudge)
      continue
    }
    const { l, P0, P1, dir } = item
    const n = [-dir[1], dir[0]] // unit normal
    const tryPlace = (t, sgn, dist) => {
      const base = [P0[0] + (P1[0] - P0[0]) * t, P0[1] + (P1[1] - P0[1]) * t]
      const ap = [base[0] + sgn * dist * n[0], base[1] + sgn * dist * n[1] + 4 * fsScale]
      const anchor = Math.abs(n[0]) < 0.3 ? 'middle' : (sgn * n[0] > 0 ? 'start' : 'end')
      const bb = labelBox(ap, l.label, anchor)
      // small bias so tighter offsets and outer positions win ties
      return { ap, anchor, bb, sc: scoreBox(bb) - dist * 0.05 }
    }
    const want = l.labelSide === 'left' ? -1 : l.labelSide === 'right' ? 1 : 0
    // Enough stations along the line that a crowded figure (tick digits,
    // texts annotations, and curve branches all registered as obstacles)
    // still has somewhere clean to stand.
    const ts = l.labelAt !== undefined ? [l.labelAt] : [0.78, 0.62, 0.86, 0.4, 0.25, 0.92, 0.5, 0.12]
    let best = null
    outer: for (const t of ts) {
      for (const sgn of want ? [want] : [1, -1]) {
        for (const dist of [16 * fsScale, 22 * fsScale, 28 * fsScale]) {
          const cand = tryPlace(t, sgn, dist)
          if (!best || cand.sc > best.sc) best = cand
          if (best.sc >= 8) break outer
        }
      }
    }
    labelBoxes.push(best.bb)
    add('text', {
      x: fmt(best.ap[0]), y: fmt(best.ap[1]),
      fontSize: String(FS), fill: 'currentColor', textAnchor: best.anchor,
    }, mathMinus(l.label))
  }

  // --- 8b. deferred dashed guide strokes ------------------------------------
  // Every label box is final now, so each dashed line can be emitted gapped
  // around the label ink it crosses, spliced back at its original position
  // so paint order is unchanged. Reverse order keeps earlier recorded
  // indexes valid while splicing.
  const yieldBoxes = [...strokeGapBoxes, ...labelBoxes]
  for (const d of [...deferredLineStrokes].reverse()) {
    const parts = []
    for (const [s0, s1] of outsideGapRuns(d.a, d.b, 2, yieldBoxes)) {
      const p = [d.a[0] + (d.b[0] - d.a[0]) * s0, d.a[1] + (d.b[1] - d.a[1]) * s0]
      const q = [d.a[0] + (d.b[0] - d.a[0]) * s1, d.a[1] + (d.b[1] - d.a[1]) * s1]
      parts.push({ tag: 'line', attrs: segAttrs(p, q, d.extra) })
    }
    els.splice(d.index, 0, ...parts)
  }

  // --- 9. raw text annotations (attrs computed above, before placement) -----
  for (const t of textAnnotations) add('text', t.attrs, t.text)

  // Fit pass: no label can clip, ever. Coordinates are untouched — only the
  // viewBox grows to cover what the placement pass let stick out.
  const box = fitViewBox(els, W, H)
  return {
    viewBox: `${box.x} ${box.y} ${box.w} ${box.h}`,
    width: box.w, height: box.h,
    box,
    maxWidth: props.maxWidth ?? Math.min(box.w + 20, 360),
    ariaLabel: props.ariaLabel || 'A coordinate-plane graph.',
    els,
    // px↔math mapping, so the <graph-plot> interactive overlay shares the
    // exact same coordinate transform as the renderer.
    map: {
      toPx: px,
      toMath: ([X, Y]) => [(X - ox) / ux, (oy - Y) / uy],
    },
  }
}

// ---------------------------------------------------------------------------
/**
 * buildNumberLine(props) — same contract as buildGraph, for number lines.
 *
 * Props (values in MATH units):
 *   min, max      integer endpoints of the visible ticks (required)
 *   ariaLabel     REQUIRED — human prose description
 *   title         optional text (e.g. 'x > 3'), centered above the marker
 *                 if there is one, else above the middle
 *   marker        { at, type: 'paren' | 'bracket' | 'open' | 'closed' }
 *                 'paren'/'bracket' render the actual ( [ ) ] glyph —
 *                 direction picked from `shade` — matching interval
 *                 notation in the prose; 'open'/'closed' are circles.
 *   shade         'left' | 'right' — thick ray from the marker to that end
 *   intervals     [{ from?, to?, fromType?, toType? }] — one heavy stretch per
 *                 interval, for compound sets a single marker+shade cannot
 *                 express, e.g. (−∞,2)∪(2,∞) or [1,3]∪(5,∞). Omitting `from`
 *                 runs the stretch to the left arrow (−∞); omitting `to` runs
 *                 it to the right arrow (∞); `{}` is therefore the whole line,
 *                 (−∞, ∞). fromType/toType are 'open' or
 *                 'closed' (default 'closed') and draw the endpoint circle;
 *                 an unbounded end takes no circle.
 *   points        [{ at, label? }] plain plotted points (labels above;
 *                 house rule: only off-tick points need labels)
 *
 * Layout matches the house style: 280px line regardless of range, chevron
 * arrows, every integer ticked and labeled. All positions are computed
 * from `at` values — never hand-placed.
 */
export function buildNumberLine(props) {
  const { min, max, marker, shade, title, points = [], intervals = [] } = props
  if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max) || max <= min) {
    throw new Error('NumberLine needs integer min < max')
  }
  for (const iv of intervals) {
    // {} is the deliberate spelling of all real numbers, (−∞, ∞)
    const bounded = ['from', 'to'].filter((k) => iv[k] !== undefined)
    for (const key of bounded) {
      if (!Number.isFinite(iv[key])) throw new Error(`NumberLine interval ${key} must be a finite number`)
      if (iv[key] < min || iv[key] > max) throw new Error(`NumberLine interval ${key} ${iv[key]} falls outside ${min}..${max}`)
      const type = iv[`${key}Type`]
      if (type !== undefined && type !== 'open' && type !== 'closed') {
        throw new Error(`NumberLine interval ${key}Type must be 'open' or 'closed'`)
      }
    }
    if (bounded.length === 2 && !(iv.to > iv.from)) {
      throw new Error('NumberLine interval needs from < to')
    }
  }
  const tickCount = stepCount(min, max, 1, 'NumberLine range')
  const LINE = 264, X0 = 28, EXT = 12 // line overshoots ticks by EXT each side
  const u = LINE / (max - min)
  const X = (v) => X0 + (v - min) * u
  const hasTitle = title !== undefined
  const yLine = hasTitle ? 45 : 30
  const H = hasTitle ? 90 : 76
  const W = 320
  const L0 = X0 - EXT, L1 = X0 + LINE + EXT
  const els = []
  const add = (tag, attrs, text) => { els.push(text === undefined ? { tag, attrs } : { tag, attrs, text }) }

  // baseline + outward chevron arrows (drawn as paths — no marker/orient
  // pitfalls; apex sits OUTSIDE the line so the head points away from it)
  add('line', { x1: String(L0), y1: String(yLine), x2: String(L1), y2: String(yLine), stroke: 'currentColor', strokeWidth: '1.5' })
  add('path', { d: `M ${L0 + 8} ${yLine - 7} L ${L0} ${yLine} L ${L0 + 8} ${yLine + 7}`, fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' })
  add('path', { d: `M ${L1 - 8} ${yLine - 7} L ${L1} ${yLine} L ${L1 - 8} ${yLine + 7}`, fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' })

  // shaded ray from the marker toward one end
  if (marker && shade) {
    const from = X(marker.at)
    const to = shade === 'right' ? L1 : L0
    add('line', { x1: fmtN(from), y1: String(yLine), x2: String(to), y2: String(yLine), stroke: 'currentColor', strokeWidth: '3.5' })
  }

  // heavy stretches for compound sets; an unbounded end runs to the chevron.
  // An excluded end stops short of its hollow circle so the circle reads as
  // hollow in both themes without needing a background fill to paint over.
  const DOT_R = 5
  for (const iv of intervals) {
    const from = iv.from === undefined ? L0 : X(iv.from) + (iv.fromType === 'open' ? DOT_R : 0)
    const to = iv.to === undefined ? L1 : X(iv.to) - (iv.toType === 'open' ? DOT_R : 0)
    add('line', { x1: fmtN(from), y1: String(yLine), x2: fmtN(to), y2: String(yLine), stroke: 'currentColor', strokeWidth: '3.5' })
  }

  // Positions a hollow endpoint will sit on. Their ticks are skipped: a tick
  // showing through an unfilled circle reads as a crosshair, and painting the
  // circle with a background colour would break in one theme or the other.
  const hollowAt = new Set()
  if (marker && (marker.type === 'open' || marker.type === 'paren')) hollowAt.add(marker.at)
  for (const iv of intervals) {
    for (const key of ['from', 'to']) {
      if (iv[key] !== undefined && iv[`${key}Type`] === 'open') hollowAt.add(iv[key])
    }
  }

  // ticks + integer labels
  for (let index = 0; index < tickCount; index++) {
    const v = min + index
    if (!hollowAt.has(v)) {
      add('line', { x1: fmtN(X(v)), y1: String(yLine - 6), x2: fmtN(X(v)), y2: String(yLine + 6), stroke: 'currentColor', strokeWidth: '1.5' })
    }
    add('text', { x: fmtN(X(v)), y: String(yLine + 25), textAnchor: 'middle', fontSize: '12', fill: 'currentColor' }, mathMinus(String(v)))
  }

  // boundary marker
  if (marker) {
    const mx = X(marker.at)
    if (marker.type === 'paren' || marker.type === 'bracket') {
      const glyph = marker.type === 'paren'
        ? (shade === 'left' ? ')' : '(')
        : (shade === 'left' ? ']' : '[')
      add('text', {
        x: fmtN(mx), y: String(yLine + 7), textAnchor: 'middle',
        fontSize: '22', fontWeight: '600', fill: 'currentColor',
      }, glyph)
    } else {
      add('circle', {
        cx: fmtN(mx), cy: String(yLine), r: '5',
        ...(marker.type === 'open'
          ? { fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' }
          : { fill: 'currentColor' }),
      })
    }
  }

  // interval endpoint circles, drawn over the ticks they may land on
  for (const iv of intervals) {
    for (const key of ['from', 'to']) {
      if (iv[key] === undefined) continue // unbounded ends carry no circle
      const open = iv[`${key}Type`] === 'open'
      add('circle', {
        cx: fmtN(X(iv[key])), cy: String(yLine), r: String(DOT_R),
        ...(open
          ? { fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' }
          : { fill: 'currentColor' }),
      })
    }
  }

  // plain plotted points
  for (const p of points) {
    add('circle', { cx: fmtN(X(p.at)), cy: String(yLine), r: '4', fill: 'currentColor' })
    if (p.label) {
      add('text', { x: fmtN(X(p.at)), y: String(yLine - 12), textAnchor: 'middle', fontSize: '12', fill: 'currentColor' }, mathMinus(p.label))
    }
  }

  if (hasTitle) {
    const tx = marker ? X(marker.at) : X0 + LINE / 2
    add('text', { x: fmtN(tx), y: '16', textAnchor: 'middle', fontSize: '14', fill: 'currentColor' }, mathMinus(title))
  }

  const box = fitViewBox(els, W, H)
  return {
    viewBox: `${box.x} ${box.y} ${box.w} ${box.h}`,
    width: box.w, height: box.h,
    box,
    maxWidth: props.maxWidth ?? 420,
    ariaLabel: props.ariaLabel || 'A number line.',
    els,
  }
}
const fmtN = (n) => String(+Number(n).toFixed(1))

// ---------------------------------------------------------------------------
/**
 * buildFigure(props) — same contract as buildGraph, for plain geometric
 * figures (no axes/grid): triangles, rectangles, circles with radius and
 * diameter, height segments, right-angle marks. Math coordinates, y-up;
 * the viewBox auto-fits all geometry plus label room.
 *
 * Props:
 *   ariaLabel  REQUIRED
 *   unit       px per math unit (default 30)
 *   padding    px around the fitted geometry (default 30)
 *   polygons   [{ points: [[x,y]…],
 *                 edgeLabels?:   [str|null…]  — edge i joins points i, i+1;
 *                                labels sit OUTSIDE on the edge normal
 *                 vertexLabels?: [str|null…]  — pushed away from centroid
 *                 dashedEdges?:  [i…],
 *                 rightAngles?:  [i…]         — square mark at vertex i }]
 *   segments   [{ from, to, dashed?, label?, labelSide?: 'left'|'right' }]
 *              labelSide is relative to the from→to direction (default left)
 *   rightAngles [{ at, dirs: [[dx,dy],[dx,dy]] }] standalone marks (e.g.
 *              where a height meets a base); dirs point INTO the corner
 *   circles    [{ at, r, dashed?,
 *                 radius?:   { angle?: deg (default 40), label? },
 *                 diameter?: { angle?: deg (default 0), label?, dashed? },
 *                 label?:    { text, angle?: deg (default -90) } — outside
 *                            label with a short leader line to the rim }]
 *              radius/diameter endpoints are COMPUTED from r — they always
 *              reach the rim exactly.
 *   points     [{ at, r?, label? }]
 *   texts      [{ at, text, anchor?, dx?, dy? }]
 */
export function buildFigure(props) {
  const {
    unit: u = 30, padding = 36,
    polygons = [], segments = [], circles = [], points = [],
    rightAngles = [], texts = [],
  } = props
  const rad = (deg) => (deg * Math.PI) / 180

  // ---- fit: collect math-space extents (plus label room in px later)
  let mnX = Infinity, mxX = -Infinity, mnY = Infinity, mxY = -Infinity
  const eat = (x, y) => { mnX = Math.min(mnX, x); mxX = Math.max(mxX, x); mnY = Math.min(mnY, y); mxY = Math.max(mxY, y) }
  for (const p of polygons) for (const [x, y] of p.points) eat(x, y)
  for (const s of segments) { eat(...s.from); eat(...s.to) }
  for (const c of circles) {
    eat(c.at[0] - c.r, c.at[1] - c.r); eat(c.at[0] + c.r, c.at[1] + c.r)
    if (c.label) { // reserve radial room for the outside label + leader
      const a = rad(c.label.angle ?? -90)
      eat(c.at[0] + (c.r + 44 / u) * Math.cos(a), c.at[1] + (c.r + 44 / u) * Math.sin(a))
    }
  }
  for (const p of points) eat(...p.at)
  for (const t of texts) eat(...t.at)
  if (!Number.isFinite(mnX)) throw new Error('Figure has no geometry')

  const W = Math.round((mxX - mnX) * u + 2 * padding)
  const H = Math.round((mxY - mnY) * u + 2 * padding)
  const px = ([x, y]) => [padding + (x - mnX) * u, padding + (mxY - y) * u]

  // Same legibility floor as buildGraph: fonts scale up when the CSS
  // max-width would shrink the figure below MIN_EFFECTIVE_FONT on screen.
  const FS = fontFloor(W, props.maxWidth ?? Math.min(W + 10, 340))

  const els = []
  const add = (tag, attrs, text) => { els.push(text === undefined ? { tag, attrs } : { tag, attrs, text }) }
  const seg = (a, b, extra = {}) => add('line', {
    x1: fmtN(a[0]), y1: fmtN(a[1]), x2: fmtN(b[0]), y2: fmtN(b[1]),
    stroke: 'currentColor', strokeWidth: '1.5', ...extra,
  })
  const DASH = { strokeDasharray: '5 4' }

  /** text placed OFF an anchor px point in the px direction `dir` */
  function offsetText(anchorPx, dirPx, text, dist = 14) {
    const [dx, dy] = norm(dirPx)
    const pos = [anchorPx[0] + dist * dx, anchorPx[1] + dist * dy]
    const anchor = dx > 0.35 ? 'start' : dx < -0.35 ? 'end' : 'middle'
    const vAdj = dy > 0.35 ? 10 : dy < -0.35 ? -2 : 4
    add('text', {
      x: fmtN(pos[0]), y: fmtN(pos[1] + vAdj), textAnchor: anchor,
      fontSize: String(FS), fill: 'currentColor',
    }, mathMinus(text))
  }

  function rightAngleMark(cornerPx, d1px, d2px, size = 10) {
    const a = norm(d1px), b = norm(d2px)
    const p1 = [cornerPx[0] + size * a[0], cornerPx[1] + size * a[1]]
    const p2 = [p1[0] + size * b[0], p1[1] + size * b[1]]
    const p3 = [cornerPx[0] + size * b[0], cornerPx[1] + size * b[1]]
    add('path', {
      d: `M ${fmtN(p1[0])} ${fmtN(p1[1])} L ${fmtN(p2[0])} ${fmtN(p2[1])} L ${fmtN(p3[0])} ${fmtN(p3[1])}`,
      fill: 'none', stroke: 'currentColor', strokeWidth: '1.2',
    })
  }

  // ---- polygons
  for (const poly of polygons) {
    const pts = poly.points.map(px)
    const n = pts.length
    const cen = [pts.reduce((s, p) => s + p[0], 0) / n, pts.reduce((s, p) => s + p[1], 0) / n]
    const dashedEdges = new Set(poly.dashedEdges || [])
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n]
      seg(a, b, dashedEdges.has(i) ? DASH : {})
      const label = poly.edgeLabels?.[i]
      if (label) {
        const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
        let nrm = norm([-(b[1] - a[1]), b[0] - a[0]])
        // flip outward (away from centroid)
        if ((mid[0] - cen[0]) * nrm[0] + (mid[1] - cen[1]) * nrm[1] < 0) nrm = [-nrm[0], -nrm[1]]
        offsetText(mid, nrm, label, 12)
      }
    }
    poly.vertexLabels?.forEach((label, i) => {
      if (!label) return
      const v = pts[i]
      offsetText(v, sub(v, cen), label, 13)
    })
    for (const i of poly.rightAngles || []) {
      const v = pts[i]
      rightAngleMark(v, sub(pts[(i + 1) % n], v), sub(pts[(i - 1 + n) % n], v))
    }
  }

  /** filled arrowhead at px point `tip`, pointing along px direction `dir` */
  function arrowMark(tip, dir, size = 8, width = 4) {
    const [ax, ay] = norm(dir)
    const bx = tip[0] - size * ax, by = tip[1] - size * ay
    const pts = [
      tip,
      [bx - width * ay, by + width * ax],
      [bx + width * ay, by - width * ax],
    ].map((q) => q.map(fmtN).join(',')).join(' ')
    add('polygon', { points: pts, fill: 'currentColor' })
  }

  // ---- standalone segments (heights, braces…, mapping arrows)
  for (const s of segments) {
    const a = px(s.from), b = px(s.to)
    // `arrow: true` points at `to`; `arrow: "both"` also points back at `from`.
    // Shorten the drawn shaft under each arrowhead so the stroke end cannot
    // poke past the apex.
    const dir = norm(sub(b, a))
    const headEnd = s.arrow ? [b[0] - 6 * dir[0], b[1] - 6 * dir[1]] : b
    const headStart = s.arrow === 'both' ? [a[0] + 6 * dir[0], a[1] + 6 * dir[1]] : a
    seg(headStart, headEnd, s.dashed ? DASH : {})
    if (s.arrow) {
      arrowMark(b, sub(b, a))
      if (s.arrow === 'both') arrowMark(a, sub(a, b))
    }
    if (s.label) {
      const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
      const d = norm(sub(b, a))
      const left = [d[1], -d[0]] // px-space left of travel
      const nrm = s.labelSide === 'right' ? [-d[1], d[0]] : left
      offsetText(mid, nrm, s.label, 12)
    }
  }
  for (const m of rightAngles) {
    rightAngleMark(px(m.at), sub(px([m.at[0] + m.dirs[0][0], m.at[1] + m.dirs[0][1]]), px(m.at)),
      sub(px([m.at[0] + m.dirs[1][0], m.at[1] + m.dirs[1][1]]), px(m.at)))
  }

  // ---- circles (+ computed radius / diameter / outside label)
  for (const c of circles) {
    const ctr = px(c.at)
    add('circle', {
      cx: fmtN(ctr[0]), cy: fmtN(ctr[1]), r: fmtN(c.r * u),
      fill: 'none', stroke: 'currentColor', strokeWidth: '1.5',
      ...(c.dashed ? DASH : {}),
    })
    const rim = (deg) => px([c.at[0] + c.r * Math.cos(rad(deg)), c.at[1] + c.r * Math.sin(rad(deg))])
    if (c.radius) {
      const deg = c.radius.angle ?? 40
      const end = rim(deg)
      seg(ctr, end)
      if (c.radius.label) {
        const mid = [(ctr[0] + end[0]) / 2, (ctr[1] + end[1]) / 2]
        const d = norm(sub(end, ctr))
        offsetText(mid, [d[1], -d[0]], c.radius.label, 11) // left of outward dir
      }
      add('circle', { cx: fmtN(ctr[0]), cy: fmtN(ctr[1]), r: '2.5', fill: 'currentColor' })
    }
    if (c.diameter) {
      const deg = c.diameter.angle ?? 0
      const a = rim(deg), b = rim(deg + 180)
      seg(a, b, { strokeWidth: '1', ...(c.diameter.dashed !== false ? { strokeDasharray: '4 3' } : {}) })
      if (c.diameter.label) {
        const d = norm(sub(a, b))
        offsetText(ctr, [-d[1], d[0]], c.diameter.label, 10) // below a horizontal diameter
      }
    }
    if (c.label) {
      const deg = c.label.angle ?? -90
      const dir = [Math.cos(rad(deg)), -Math.sin(rad(deg))] // px direction
      const from = [ctr[0] + (c.r * u + 3) * dir[0], ctr[1] + (c.r * u + 3) * dir[1]]
      const to = [ctr[0] + (c.r * u + 15) * dir[0], ctr[1] + (c.r * u + 15) * dir[1]]
      seg(from, to, { strokeWidth: '1' })
      offsetText(to, dir, c.label.text, 6)
    }
  }

  // ---- loose points and texts
  for (const p of points) {
    const c = px(p.at)
    add('circle', { cx: fmtN(c[0]), cy: fmtN(c[1]), r: String(p.r ?? 2.5), fill: 'currentColor' })
    if (p.label) offsetText(c, [0, -1], p.label, 12)
  }
  for (const t of texts) {
    const c = px(t.at)
    add('text', {
      x: fmtN(c[0] + (t.dx || 0)), y: fmtN(c[1] + (t.dy || 0)),
      fontSize: String(FS), fill: 'currentColor',
      ...(t.anchor ? { textAnchor: t.anchor } : {}),
    }, mathMinus(t.text))
  }

  const box = fitViewBox(els, W, H)
  return {
    viewBox: `${box.x} ${box.y} ${box.w} ${box.h}`,
    width: box.w, height: box.h,
    box,
    maxWidth: props.maxWidth ?? Math.min(box.w + 10, 340),
    ariaLabel: props.ariaLabel || 'A geometric figure.',
    els,
  }
}

// ---------------------------------------------------------------------------
/** Serialize to a plain standalone SVG string (for QA rasterization). */
// Generic, the same conversion `<graph-plot>` applies in the browser. The
// lookup table this replaced passed an unmapped camelCase key straight through
// (`KEBAB[k] || k`), so a new attribute would serialize as valid-looking but
// inert SVG here while rendering correctly in the DOM.
const camelToKebab = (s) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
const escXml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * `color: null` omits the `style` attribute entirely, so the figure inherits
 * the page's text color and stays legible in dark mode. That is what content
 * needs; the default `#111` is for standalone QA rasterization, where nothing
 * supplies a color.
 */
export function toSvgString(props, { color = '#111', builder = buildGraph } = {}) {
  const g = builder(props)
  const body = g.els.map(({ tag, attrs, text }) => {
    const a = Object.entries(attrs).map(([k, v]) => `${camelToKebab(k)}="${v}"`).join(' ')
    return text === undefined ? `<${tag} ${a}/>` : `<${tag} ${a}>${escXml(text)}</${tag}>`
  }).join('\n  ')
  const style = color === null ? '' : ` style="color:${color}"`
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${g.viewBox}" width="${g.width}" height="${g.height}"${style} font-family="Helvetica, Arial, sans-serif">\n  ${body}\n</svg>`
}
