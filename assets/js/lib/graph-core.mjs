/**
 * Deterministic geometry engine for coordinate-plane figures.
 *
 * The authoring pipeline never writes SVG for graphs: MDX declares the
 * *mathematical objects* (lines, points, regions…) via <Graph …/> props,
 * and this module computes every pixel — mapping, clipping, arrowheads,
 * shading polygons, and label placement. One shared implementation of the
 * playbook §"Coordinate-plane graphs" rules, instead of one hand-derived
 * copy per figure.
 *
 * buildGraph(props)  → { viewBox, width, height, ariaLabel, els }
 *   els: [{ tag, attrs, text? }] with camelCase (JSX-style) attrs.
 *   components/Graph.jsx renders els as React elements;
 *   toSvgString(props) serializes them to a plain SVG document so QA
 *   scripts can rasterize figures without React.
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
 *   maxWidth             CSS max-width (default viewBox width + 20)
 *
 *   points:   [{ at:[x,y], label?, labelSide?, open? }]
 *             labelSide: 'e','w','n','s','ne','nw','se','sw' (else auto)
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
 *   smoothCurves: [{ through:[[x,y],...], dashed?, arrows? }]
 *             shape-preserving smooth interpolation through increasing x-values;
 *             arrows default false and may be true, 'start', or 'end'
 *   segments: [{ from:[x,y], to:[x,y], dashed?, label?, labelSide? }]
 *   guides:   [[x,y], …]  dashed axis crosshair to each point
 *   slopeTriangles: [{ from:[x,y], to:[x,y], riseLabel?, runLabel?,
 *                      order? ('vh' vertical-first default, or 'hv') }]
 *   regions:  [{ line:<line spec>, side:[x,y] test point, dashed? }]
 *             boundary drawn dashed for strict inequalities
 *   texts:    [{ at:[x,y], text, anchor?, dx?, dy?, fontSize? }]
 *             escape hatch for axis words, quadrant notes, etc.
 */

const FONT = 13
const CHAR_W = 6.9 // ≈ px per character at fontSize 13

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
    quadrantLabels = false,
    points = [], lines = [], quadratics = [], cubics = [], smoothCurves = [], segments = [], guides = [],
    slopeTriangles = [], regions = [], texts = [],
  } = props

  const mTop = margin + (caption ? 22 : 0)
  const W = (xMax - xMin) * ux + 2 * margin
  const H = (yMax - yMin) * uy + margin + mTop
  const ox = margin - xMin * ux
  const oy = mTop + yMax * uy
  const px = ([mx, my]) => [ox + ux * mx, oy - uy * my]

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

  const fmt = (n) => +n.toFixed(1)
  const segAttrs = (a, b, extra = {}) => ({
    x1: fmt(a[0]), y1: fmt(a[1]), x2: fmt(b[0]), y2: fmt(b[1]),
    stroke: 'currentColor', ...extra,
  })

  // --- 1. grid ------------------------------------------------------------
  if (grid) {
    for (let mx = xMin; mx <= xMax; mx += xGridStep) {
      if (mx === 0 && yMin <= 0 && yMax >= 0) continue
      add('line', segAttrs(px([mx, yMin]), px([mx, yMax]), { strokeWidth: '0.4', opacity: '0.2' }))
    }
    for (let my = yMin; my <= yMax; my += yGridStep) {
      if (my === 0 && xMin <= 0 && xMax >= 0) continue
      add('line', segAttrs(px([xMin, my]), px([xMax, my]), { strokeWidth: '0.4', opacity: '0.2' }))
    }
  }
  if (caption) {
    add('text', { x: fmt(W / 2), y: '14', fontSize: String(FONT), fill: 'currentColor', textAnchor: 'middle' }, mathMinus(caption))
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
  const axisY = yMin <= 0 && yMax >= 0 ? px([0, 0])[1] : gy1 // y px of x-axis
  const axisX = xMin <= 0 && xMax >= 0 ? px([0, 0])[0] : gx0 // x px of y-axis
  const xA0 = xMin < 0 ? gx0 - OVER + AH : axisX
  const yA1 = yMin < 0 ? gy1 + OVER - AH : axisY
  add('line', segAttrs([xA0, axisY], [gx1 + OVER - AH, axisY], { strokeWidth: '1' }))
  add('line', segAttrs([axisX, gy0 - OVER + AH], [axisX, yA1], { strokeWidth: '1' }))
  arrowhead([gx1 + OVER, axisY], [1, 0])
  arrowhead([axisX, gy0 - OVER], [0, -1])
  if (xMin < 0) arrowhead([gx0 - OVER, axisY], [-1, 0])
  if (yMin < 0) arrowhead([axisX, gy1 + OVER], [0, 1])
  obstacles.push([[gx0 - OVER, axisY], [gx1 + OVER, axisY]], [[axisX, gy0 - OVER], [axisX, gy1 + OVER]])
  // axis letters just off the arrow tips
  add('text', { x: fmt(gx1 + OVER - 2), y: fmt(axisY - 8), fontSize: String(FONT), fill: 'currentColor', textAnchor: 'end', fontStyle: 'italic' }, xLabel)
  add('text', { x: fmt(axisX + 8), y: fmt(gy0 - OVER + 10), fontSize: String(FONT), fill: 'currentColor', fontStyle: 'italic' }, yLabel)

  if (tickLabels) {
    if (!Number.isFinite(xTickStep) || xTickStep <= 0) throw new Error('xTickStep must be a positive number')
    if (!Number.isFinite(yTickStep) || yTickStep <= 0) throw new Error('yTickStep must be a positive number')
    const fmtTick = (n) => mathMinus((+n.toFixed(6)).toLocaleString('en-US'))
    if (yMin <= 0 && yMax >= 0) {
      const first = Math.ceil(xMin / xTickStep) * xTickStep
      for (let mx = first; mx <= xMax + 1e-9; mx += xTickStep) {
        if (Math.abs(mx) < 1e-9) continue
        const p = px([mx, 0])
        add('line', segAttrs([p[0], p[1] - 3], [p[0], p[1] + 3], { strokeWidth: '1' }))
        add('text', { x: fmt(p[0]), y: fmt(p[1] + 15), fontSize: '11', fill: 'currentColor', textAnchor: 'middle' }, fmtTick(mx))
      }
    }
    if (xMin <= 0 && xMax >= 0) {
      const first = Math.ceil(yMin / yTickStep) * yTickStep
      for (let my = first; my <= yMax + 1e-9; my += yTickStep) {
        if (Math.abs(my) < 1e-9) continue
        const p = px([0, my])
        add('line', segAttrs([p[0] - 3, p[1]], [p[0] + 3, p[1]], { strokeWidth: '1' }))
        add('text', { x: fmt(p[0] - 6), y: fmt(p[1] + 4), fontSize: '11', fill: 'currentColor', textAnchor: 'end' }, fmtTick(my))
      }
    }
  }

  if (quadrantLabels) {
    const qs = [[1, 1, 'I'], [-1, 1, 'II'], [-1, -1, 'III'], [1, -1, 'IV']]
    for (const [sx, sy, t] of qs) {
      const qx = sx > 0 ? xMax / 2 : xMin / 2
      const qy = sy > 0 ? yMax / 2 : yMin / 2
      const q = px([qx, qy])
      add('text', { x: fmt(q[0]), y: fmt(q[1] + 4), fontSize: '15', fill: 'currentColor', textAnchor: 'middle', opacity: '0.75' }, t)
      labelBoxes.push([q[0] - 8, q[1] - 9, q[0] + 8, q[1] + 8])
    }
  }

  // --- 4. guides (dashed crosshair to a point) ------------------------------
  for (const g of guides) {
    const p = px(g)
    add('line', segAttrs([p[0], axisY], p, { strokeWidth: '1', strokeDasharray: '4 3', opacity: '0.7' }))
    add('line', segAttrs([axisX, p[1]], p, { strokeWidth: '1', strokeDasharray: '4 3', opacity: '0.7' }))
    obstacles.push([[p[0], axisY], p], [[axisX, p[1]], p])
  }

  // --- 5. lines --------------------------------------------------------------
  const pendingLineLabels = []
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
    add('line', segAttrs(s0, s1, { strokeWidth: '1.8', ...dash }))
    if (arrows) { arrowhead(P1, dir); arrowhead(P0, [-dir[0], -dir[1]]) }
    obstacles.push([P0, P1])
    if (l.label) pendingLineLabels.push({ l, P0, P1, dir })
  }

  // --- 6. polynomial curves --------------------------------------------------
  // Sample densely enough that curves remain visually smooth even where their
  // slope changes quickly. Runs are split whenever a curve leaves the grid,
  // preventing an off-canvas point from stretching a polyline across it.
  function drawPolynomialCurve(spec, { independentMin, independentMax, pointAt, errorName, unitPx = ux }) {
    if (!Number.isFinite(spec.a) || spec.a === 0) throw new Error(`${errorName} needs a nonzero numeric a`)
    const samples = Math.max(240, Math.ceil((independentMax - independentMin) * unitPx * 4))
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
      const dash = spec.dashed ? { strokeDasharray: '6 5' } : {}
      add('polyline', {
        points: pts.map((p) => p.map(fmt).join(',')).join(' '),
        fill: 'none', stroke: 'currentColor', strokeWidth: '1.8',
        strokeLinejoin: 'round', strokeLinecap: 'round', ...dash,
      })
      for (let i = 1; i < pts.length; i++) obstacles.push([pts[i - 1], pts[i]])
      const startArrow = spec.arrows !== false && spec.arrows !== 'end'
      const endArrow = spec.arrows !== false && spec.arrows !== 'start'
      if ((startArrow || endArrow) && pts.length > 2) {
        if (startArrow) arrowhead(pts[0], sub(pts[0], pts[1]))
        if (endArrow) arrowhead(pts.at(-1), sub(pts.at(-1), pts.at(-2)))
      }
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

  // Shape-preserving piecewise cubic interpolation. Interior tangents use a
  // weighted harmonic mean of adjacent slopes and become zero at extrema, so
  // the rendered curve cannot overshoot a stated minimum or maximum.
  for (const curve of smoothCurves) {
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
    add('path', {
      d: path.join(' '), fill: 'none', stroke: 'currentColor', strokeWidth: '1.8',
      strokeLinejoin: 'round', strokeLinecap: 'round',
      ...(curve.dashed ? { strokeDasharray: '6 5' } : {}),
    })
    for (let i = 1; i < sampled.length; i++) obstacles.push([sampled[i - 1], sampled[i]])
    const startArrow = curve.arrows === true || curve.arrows === 'start'
    const endArrow = curve.arrows === true || curve.arrows === 'end'
    if (startArrow) arrowhead(sampled[0], sub(sampled[0], sampled[1]))
    if (endArrow) arrowhead(sampled.at(-1), sub(sampled.at(-1), sampled.at(-2)))
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
    add('line', segAttrs(a, b, { strokeWidth: '1.4', ...(s.dashed ? { strokeDasharray: '4 3' } : {}) }))
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

  // --- label placement -----------------------------------------------------
  const SIDES = {
    e: [1, 0, 'start', 4], w: [-1, 0, 'end', 4],
    n: [0, -1, 'middle', 0], s: [0, 1, 'middle', 9],
    ne: [0.8, -0.8, 'start', 0], nw: [-0.8, -0.8, 'end', 0],
    se: [0.8, 0.8, 'start', 9], sw: [-0.8, 0.8, 'end', 9],
  }
  const OFF = 14

  function labelBox(anchorPt, text, anchorMode) {
    const w = String(text).length * CHAR_W
    const x0 = anchorMode === 'start' ? anchorPt[0] : anchorMode === 'end' ? anchorPt[0] - w : anchorPt[0] - w / 2
    // text y is the baseline; box spans ~FONT above it
    return [x0, anchorPt[1] - FONT + 2, x0 + w, anchorPt[1] + 3]
  }
  const boxPoints = (bb) => [
    [bb[0], bb[1]], [bb[2], bb[1]], [bb[0], bb[3]], [bb[2], bb[3]],
    [(bb[0] + bb[2]) / 2, (bb[1] + bb[3]) / 2],
    [bb[0], (bb[1] + bb[3]) / 2], [bb[2], (bb[1] + bb[3]) / 2],
  ]

  function scoreBox(bb) {
    let worst = Infinity
    for (const q of boxPoints(bb)) {
      for (const [a, b] of obstacles) worst = Math.min(worst, distToSeg(q, a, b))
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
      const ap = [c[0] + OFF * dx + nx, c[1] + OFF * dy + vAdj + ny]
      const bb = labelBox(ap, text, anchor)
      const sc = scoreBox(bb)
      if (prefer && side === prefer && (nudge || sc > 2)) { best = { ap, anchor, bb, sc }; break }
      if (!best || sc > best.sc) best = { ap, anchor, bb, sc }
      if (!prefer && sc >= 10) break // good enough, keep natural reading side
    }
    labelBoxes.push(best.bb)
    add('text', {
      x: fmt(best.ap[0]), y: fmt(best.ap[1]),
      fontSize: String(FONT), fill: 'currentColor', textAnchor: best.anchor,
    }, mathMinus(text))
  }

  for (const { p, c } of placed) placeLabel(c, p.label, p.labelSide)

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
      const ap = [base[0] + sgn * dist * n[0], base[1] + sgn * dist * n[1] + 4]
      const anchor = Math.abs(n[0]) < 0.3 ? 'middle' : (sgn * n[0] > 0 ? 'start' : 'end')
      const bb = labelBox(ap, l.label, anchor)
      // small bias so tighter offsets and outer positions win ties
      return { ap, anchor, bb, sc: scoreBox(bb) - dist * 0.05 }
    }
    const want = l.labelSide === 'left' ? -1 : l.labelSide === 'right' ? 1 : 0
    const ts = l.labelAt !== undefined ? [l.labelAt] : [0.78, 0.62, 0.86, 0.4, 0.25]
    let best = null
    outer: for (const t of ts) {
      for (const sgn of want ? [want] : [1, -1]) {
        for (const dist of [16, 22]) {
          const cand = tryPlace(t, sgn, dist)
          if (!best || cand.sc > best.sc) best = cand
          if (best.sc >= 8) break outer
        }
      }
    }
    labelBoxes.push(best.bb)
    add('text', {
      x: fmt(best.ap[0]), y: fmt(best.ap[1]),
      fontSize: String(FONT), fill: 'currentColor', textAnchor: best.anchor,
    }, mathMinus(l.label))
  }

  // --- 9. raw text annotations ------------------------------------------------
  for (const t of texts) {
    const p = px(t.at)
    add('text', {
      x: fmt(p[0] + (t.dx || 0)), y: fmt(p[1] + (t.dy || 0)),
      fontSize: String(t.fontSize || FONT), fill: 'currentColor',
      ...(t.anchor ? { textAnchor: t.anchor } : {}),
      ...(t.italic ? { fontStyle: 'italic' } : {}),
    }, mathMinus(t.text))
  }

  return {
    viewBox: `0 0 ${W} ${H}`,
    width: W, height: H,
    maxWidth: props.maxWidth ?? Math.min(W + 20, 360),
    ariaLabel: props.ariaLabel || 'A coordinate-plane graph.',
    els,
    // px↔math mapping, so interactive overlays (components/GraphPlot.jsx)
    // share the exact same coordinate transform as the renderer.
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
 *   points        [{ at, label? }] plain plotted points (labels above;
 *                 house rule: only off-tick points need labels)
 *
 * Layout matches the house style: 280px line regardless of range, chevron
 * arrows, every integer ticked and labeled. All positions are computed
 * from `at` values — never hand-placed.
 */
export function buildNumberLine(props) {
  const { min, max, marker, shade, title, points = [] } = props
  if (!Number.isFinite(min) || !Number.isFinite(max) || max <= min) {
    throw new Error('NumberLine needs integer min < max')
  }
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

  // ticks + integer labels
  for (let v = Math.ceil(min); v <= Math.floor(max); v++) {
    add('line', { x1: fmtN(X(v)), y1: String(yLine - 6), x2: fmtN(X(v)), y2: String(yLine + 6), stroke: 'currentColor', strokeWidth: '1.5' })
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

  return {
    viewBox: `0 0 ${W} ${H}`,
    width: W, height: H,
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
      fontSize: String(FONT), fill: 'currentColor',
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

  // ---- standalone segments (heights, braces…)
  for (const s of segments) {
    const a = px(s.from), b = px(s.to)
    seg(a, b, s.dashed ? DASH : {})
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
      fontSize: String(FONT), fill: 'currentColor',
      ...(t.anchor ? { textAnchor: t.anchor } : {}),
    }, mathMinus(t.text))
  }

  return {
    viewBox: `0 0 ${W} ${H}`,
    width: W, height: H,
    maxWidth: props.maxWidth ?? Math.min(W + 10, 340),
    ariaLabel: props.ariaLabel || 'A geometric figure.',
    els,
  }
}

// ---------------------------------------------------------------------------
/** Serialize to a plain standalone SVG string (for QA rasterization). */
const KEBAB = { strokeWidth: 'stroke-width', strokeDasharray: 'stroke-dasharray', textAnchor: 'text-anchor', fontSize: 'font-size', fontStyle: 'font-style', strokeLinecap: 'stroke-linecap' }
const escXml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function toSvgString(props, { color = '#111', builder = buildGraph } = {}) {
  const g = builder(props)
  const body = g.els.map(({ tag, attrs, text }) => {
    const a = Object.entries(attrs).map(([k, v]) => `${KEBAB[k] || k}="${v}"`).join(' ')
    return text === undefined ? `<${tag} ${a}/>` : `<${tag} ${a}>${escXml(text)}</${tag}>`
  }).join('\n  ')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${g.viewBox}" width="${g.width}" height="${g.height}" style="color:${color}" font-family="Helvetica, Arial, sans-serif">\n  ${body}\n</svg>`
}
