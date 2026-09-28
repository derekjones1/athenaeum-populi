/**
 * Ink geometry of a hand-written inline `<svg>`: every drawn stroke flattened
 * to straight segments and every `<text>` reduced to a measured box, both in
 * root (viewBox) coordinates, for the label-collision checker
 * (check-figure-overlaps.mjs). The spec-first figures get the same geometry
 * from graph-core's element list; hand-written SVG has no builder, so this
 * module reads the markup the browser reads.
 *
 * Covered, because the corpus uses it or because an author plausibly will:
 *   - shapes: line, polyline, polygon, rect, circle, ellipse, path
 *     (M L H V C S Q T A Z, absolute and relative; curves and arcs are
 *     flattened to short chords), `<use href>` of a `<defs>` group, and
 *     `marker-start` / `marker-mid` / `marker-end` arrowheads;
 *   - `<g>` nesting with inherited presentation attributes and `style=""`
 *     declarations (fill, stroke, stroke-width, stroke-dasharray, the
 *     opacities, font-size/style/weight, text-anchor, dominant-baseline);
 *     `opacity` multiplies down the tree; `display="none"` /
 *     `visibility="hidden"` remove ink;
 *   - `transform` (translate, scale, rotate, skewX/Y, matrix) on groups and
 *     elements, composed down the tree;
 *   - `<text>` with `<tspan>` children (x/y/dx/dy, own font size), each
 *     anchored chunk measured with the same advance widths the figure engine
 *     places labels with.
 *
 * What is NOT ink here is decided by the caller from `faint` (see
 * FAINT_OPACITY): grid hairlines and translucent shading are background.
 */
import { measureTextWidth } from '../../assets/js/lib/math/text-metrics.mjs'
import { decodeHtmlEntities } from '../lib/html.mjs'

// ---------------------------------------------------------------------------
// text boxes — shared with the spec-first pass

/** em above the baseline actually inked by the figure font stack */
export const FONT_ASCENT = 0.72
export const FONT_DESCENT = 0.2

/**
 * Tight [x0, y0, x1, y1] box of one run of label text: exact advance widths
 * (no fit-pass margin), baseline at `y`.
 */
export function textBox({ text, size, x, y, anchor, italic = false, bold = false }) {
  // Arial Bold's advances run ≈5% wider than the regular cut the table measures.
  const w = measureTextWidth(text, size, { italic }) * (bold ? 1.05 : 1)
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x
  return [x0, y - FONT_ASCENT * size, x0 + w, y + FONT_DESCENT * size]
}

// ---------------------------------------------------------------------------
// affine matrices [a b c d e f]: x' = a x + c y + e, y' = b x + d y + f

export const IDENTITY = [1, 0, 0, 1, 0, 0]
export const mul = (m, n) => [
  m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
  m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5],
]
export const apply = (m, [x, y]) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]
export function invert(m) {
  const det = m[0] * m[3] - m[1] * m[2]
  if (!det) return null
  return [
    m[3] / det, -m[1] / det, -m[2] / det, m[0] / det,
    (m[2] * m[5] - m[3] * m[4]) / det, (m[1] * m[4] - m[0] * m[5]) / det,
  ]
}
const isIdentity = (m) => m.every((v, i) => Math.abs(v - IDENTITY[i]) < 1e-9)
/** does m send axis-aligned boxes to axis-aligned boxes? (no rotation/skew off the quarter turns) */
const keepsAxes = (m) => (Math.abs(m[1]) < 1e-9 && Math.abs(m[2]) < 1e-9) || (Math.abs(m[0]) < 1e-9 && Math.abs(m[3]) < 1e-9)
/** mean linear scale of m (for stroke widths) */
const scaleOf = (m) => Math.sqrt(Math.abs(m[0] * m[3] - m[1] * m[2]))

const NUM = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g
const nums = (s) => (String(s ?? '').match(NUM) || []).map(Number)

export function parseTransform(src) {
  let m = IDENTITY
  for (const [, fn, args] of String(src ?? '').matchAll(/(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g)) {
    const v = nums(args)
    let t = IDENTITY
    if (fn === 'matrix' && v.length === 6) t = v
    else if (fn === 'translate') t = [1, 0, 0, 1, v[0] || 0, v[1] || 0]
    else if (fn === 'scale') t = [v[0] ?? 1, 0, 0, v[1] ?? v[0] ?? 1, 0, 0]
    else if (fn === 'rotate') {
      const r = ((v[0] || 0) * Math.PI) / 180, cos = Math.cos(r), sin = Math.sin(r)
      t = [cos, sin, -sin, cos, 0, 0]
      if (v.length >= 3) t = mul(mul([1, 0, 0, 1, v[1], v[2]], t), [1, 0, 0, 1, -v[1], -v[2]])
    } else if (fn === 'skewX') t = [1, 0, Math.tan(((v[0] || 0) * Math.PI) / 180), 1, 0, 0]
    else if (fn === 'skewY') t = [1, Math.tan(((v[0] || 0) * Math.PI) / 180), 0, 1, 0, 0]
    m = mul(m, t)
  }
  return m
}

// ---------------------------------------------------------------------------
// markup → tree

const TOKEN_RE = /<!--[\s\S]*?-->|<!\[CDATA\[([\s\S]*?)\]\]>|<\/([\w:.-]+)\s*>|<([\w:.-]+)((?:[^>'"]|"[^"]*"|'[^']*')*?)(\/?)>|([^<]+)/g
const ATTR_RE = /([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g

export function parseSvgTree(svg) {
  const root = { tag: '#root', attrs: {}, children: [] }
  const stack = [root]
  for (const m of svg.matchAll(TOKEN_RE)) {
    const top = stack.at(-1)
    if (m[1] !== undefined) top.children.push({ text: m[1] })
    else if (m[2]) {
      // close the nearest matching open element (tolerates stray closers)
      const i = stack.findLastIndex((n) => n.tag === m[2])
      if (i > 0) stack.length = i
    } else if (m[3]) {
      const attrs = {}
      for (const a of m[4].matchAll(ATTR_RE)) attrs[a[1]] = decodeHtmlEntities(a[2] ?? a[3])
      const node = { tag: m[3], attrs, children: [] }
      top.children.push(node)
      if (!m[5]) stack.push(node)
    } else if (m[6] !== undefined && !m[0].startsWith('<!--')) top.children.push({ text: decodeHtmlEntities(m[6]) })
  }
  return root.children.find((n) => n.tag === 'svg') ?? root
}

// ---------------------------------------------------------------------------
// styles

const INHERITED = [
  'fill', 'fill-opacity', 'stroke', 'stroke-opacity', 'stroke-width', 'stroke-dasharray',
  'font-size', 'font-style', 'font-weight', 'text-anchor', 'dominant-baseline',
  'marker-start', 'marker-mid', 'marker-end', 'visibility',
]
const DEFAULT_STYLE = {
  fill: '#000', 'fill-opacity': '1', stroke: 'none', 'stroke-opacity': '1', 'stroke-width': '1',
  'stroke-dasharray': 'none', 'font-size': '16', 'font-style': 'normal', 'font-weight': 'normal',
  'text-anchor': 'start', 'dominant-baseline': 'auto', visibility: 'visible',
}

/** presentation attributes overridden by `style=""` declarations (CSS wins) */
function ownProps(node) {
  const p = { ...node.attrs }
  for (const decl of String(node.attrs.style ?? '').split(';')) {
    const i = decl.indexOf(':')
    if (i > 0) p[decl.slice(0, i).trim()] = decl.slice(i + 1).trim()
  }
  return p
}

function fontSizeOf(value, parentSize) {
  const v = String(value).trim()
  const n = parseFloat(v)
  if (!Number.isFinite(n)) return parentSize
  if (v.endsWith('em')) return n * parentSize
  if (v.endsWith('%')) return (n / 100) * parentSize
  if (v.endsWith('pt')) return (n * 4) / 3
  return n
}

function cascade(parent, props) {
  const s = { ...parent }
  for (const k of INHERITED) {
    if (props[k] === undefined || props[k] === 'inherit') continue
    s[k] = k === 'font-size' ? String(fontSizeOf(props[k], Number(parent['font-size']))) : props[k]
  }
  return s
}

const paint = (v) => v && v !== 'none' && v !== 'transparent'
const opacityOf = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? Math.min(1, Math.max(0, String(v).trim().endsWith('%') ? n / 100 : n)) : 1 }

// ---------------------------------------------------------------------------
// paths

/** sample an SVG elliptical arc into points (SVG spec B.2.4), excluding the start point */
export function arcPoints(x0, y0, rx, ry, phiDeg, large, sweep, x1, y1, step = Math.PI / 36) {
  rx = Math.abs(rx); ry = Math.abs(ry)
  if (!rx || !ry || (x0 === x1 && y0 === y1)) return [[x1, y1]]
  const phi = (phiDeg * Math.PI) / 180, cos = Math.cos(phi), sin = Math.sin(phi)
  const hx = (x0 - x1) / 2, hy = (y0 - y1) / 2
  const dx = cos * hx + sin * hy, dy = -sin * hx + cos * hy
  const L = (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry)
  if (L > 1) { const s = Math.sqrt(L); rx *= s; ry *= s }
  const sign = large === sweep ? -1 : 1
  const num = rx * rx * ry * ry - rx * rx * dy * dy - ry * ry * dx * dx
  const den = rx * rx * dy * dy + ry * ry * dx * dx
  const co = sign * Math.sqrt(Math.max(0, num / den))
  const cxp = (co * (rx * dy)) / ry, cyp = (co * (-ry * dx)) / rx
  const cx = cos * cxp - sin * cyp + (x0 + x1) / 2, cy = sin * cxp + cos * cyp + (y0 + y1) / 2
  const angleOf = (px, py) => Math.atan2((py - cyp) / ry, (px - cxp) / rx)
  const th0 = angleOf(dx, dy)
  let dTh = angleOf(-dx, -dy) - th0
  if (!sweep && dTh > 0) dTh -= 2 * Math.PI
  if (sweep && dTh < 0) dTh += 2 * Math.PI
  const n = Math.max(4, Math.ceil(Math.abs(dTh) / step))
  const pts = []
  for (let i = 1; i <= n; i++) {
    const th = th0 + (dTh * i) / n
    const ex = rx * Math.cos(th), ey = ry * Math.sin(th)
    pts.push([cx + cos * ex - sin * ey, cy + sin * ex + cos * ey])
  }
  return pts
}

const CURVE_STEPS = 16

/** `d` → list of subpaths, each { pts, closed } with curves flattened */
export function flattenPath(d) {
  const src = String(d ?? '')
  let i = 0
  const skip = () => { while (i < src.length && /[\s,]/.test(src[i])) i++ }
  const num = () => {
    skip()
    const m = /^[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/.exec(src.slice(i))
    if (!m) return null
    i += m[0].length
    return Number(m[0])
  }
  const flag = () => { skip(); const c = src[i]; if (c !== '0' && c !== '1') return null; i++; return Number(c) }
  const subpaths = []
  let cur = null, x = 0, y = 0, sx = 0, sy = 0, cmd = null, lastCtrl = null, lastCmd = ''
  const start = (px, py) => { cur = { pts: [[px, py]], closed: false }; subpaths.push(cur); sx = px; sy = py }
  const to = (px, py) => { if (!cur) start(x, y); cur.pts.push([px, py]); x = px; y = py }
  const bezier = (ctrl, px, py) => {
    const p0 = [x, y], all = [p0, ...ctrl, [px, py]]
    for (let k = 1; k <= CURVE_STEPS; k++) {
      const t = k / CURVE_STEPS
      let pts = all
      while (pts.length > 1) pts = pts.slice(1).map((p, j) => [pts[j][0] + (p[0] - pts[j][0]) * t, pts[j][1] + (p[1] - pts[j][1]) * t])
      cur.pts.push(pts[0])
    }
    x = px; y = py
  }
  while (i < src.length) {
    skip()
    if (i >= src.length) break
    if (/[A-Za-z]/.test(src[i])) cmd = src[i++]
    else if (!cmd) break
    const rel = cmd !== cmd.toUpperCase()
    const C = cmd.toUpperCase()
    const ox = rel ? x : 0, oy = rel ? y : 0
    if (C === 'Z') {
      if (cur) { cur.closed = true; x = sx; y = sy; cur = null }
      lastCmd = 'Z'; lastCtrl = null
      cmd = null
      continue
    }
    let ok = true
    if (C === 'M') {
      const a = num(), b = num(); if (a === null || b === null) break
      start(ox + a, oy + b); x = ox + a; y = oy + b
      cmd = rel ? 'l' : 'L' // implicit lineto after the first pair
      lastCtrl = null
    } else if (C === 'L') {
      const a = num(), b = num(); if (a === null || b === null) break
      to(ox + a, oy + b); lastCtrl = null
    } else if (C === 'H') {
      const a = num(); if (a === null) break
      to(rel ? x + a : a, y); lastCtrl = null
    } else if (C === 'V') {
      const a = num(); if (a === null) break
      to(x, rel ? y + a : a); lastCtrl = null
    } else if (C === 'C' || C === 'S') {
      const v = []
      for (let k = 0; k < (C === 'C' ? 6 : 4); k++) { const n = num(); if (n === null) { ok = false; break } v.push(n) }
      if (!ok) break
      if (!cur) start(x, y)
      const c1 = C === 'C' ? [ox + v[0], oy + v[1]]
        : lastCtrl && /[CS]/.test(lastCmd) ? [2 * x - lastCtrl[0], 2 * y - lastCtrl[1]] : [x, y]
      const c2 = C === 'C' ? [ox + v[2], oy + v[3]] : [ox + v[0], oy + v[1]]
      const end = C === 'C' ? [ox + v[4], oy + v[5]] : [ox + v[2], oy + v[3]]
      bezier([c1, c2], ...end); lastCtrl = c2
    } else if (C === 'Q' || C === 'T') {
      const v = []
      for (let k = 0; k < (C === 'Q' ? 4 : 2); k++) { const n = num(); if (n === null) { ok = false; break } v.push(n) }
      if (!ok) break
      if (!cur) start(x, y)
      const c = C === 'Q' ? [ox + v[0], oy + v[1]]
        : lastCtrl && /[QT]/.test(lastCmd) ? [2 * x - lastCtrl[0], 2 * y - lastCtrl[1]] : [x, y]
      const end = C === 'Q' ? [ox + v[2], oy + v[3]] : [ox + v[0], oy + v[1]]
      bezier([c], ...end); lastCtrl = c
    } else if (C === 'A') {
      const rx = num(), ry = num(), rot = num(), large = flag(), sweep = flag(), a = num(), b = num()
      if ([rx, ry, rot, large, sweep, a, b].includes(null)) break
      if (!cur) start(x, y)
      for (const p of arcPoints(x, y, rx, ry, rot, large, sweep, ox + a, oy + b)) cur.pts.push(p)
      x = ox + a; y = oy + b; lastCtrl = null
    } else break
    lastCmd = C
  }
  return subpaths
}

// ---------------------------------------------------------------------------
// the walk

const NOT_DRAWN = new Set(['defs', 'marker', 'symbol', 'clipPath', 'mask', 'pattern', 'linearGradient',
  'radialGradient', 'filter', 'title', 'desc', 'metadata', 'style', 'script'])

function ellipsePoints(cx, cy, rx, ry, n) {
  const pts = []
  for (let k = 0; k <= n; k++) {
    const t = (k / n) * 2 * Math.PI
    pts.push([cx + rx * Math.cos(t), cy + ry * Math.sin(t)])
  }
  return pts
}

/** local-space outline(s) of a shape element: [{ pts, closed }] */
function outlines(node, p) {
  const n = (k) => Number(nums(p[k])[0] ?? 0)
  switch (node.tag) {
    case 'line': return [{ pts: [[n('x1'), n('y1')], [n('x2'), n('y2')]], closed: false }]
    case 'polyline':
    case 'polygon': {
      const v = nums(p.points), pts = []
      for (let k = 0; k + 1 < v.length; k += 2) pts.push([v[k], v[k + 1]])
      return pts.length > 1 ? [{ pts, closed: node.tag === 'polygon' }] : []
    }
    case 'rect': {
      const x = n('x'), y = n('y'), w = n('width'), h = n('height')
      if (!(w > 0 && h > 0)) return []
      return [{ pts: [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], closed: true }]
    }
    case 'circle': {
      const r = n('r')
      return r > 0 ? [{ pts: ellipsePoints(n('cx'), n('cy'), r, r, r > 8 ? 36 : 12), closed: true }] : []
    }
    case 'ellipse': {
      const rx = n('rx'), ry = n('ry')
      return rx > 0 && ry > 0 ? [{ pts: ellipsePoints(n('cx'), n('cy'), rx, ry, 36), closed: true }] : []
    }
    case 'path': return flattenPath(p.d)
    default: return []
  }
}

const SHAPES = new Set(['line', 'polyline', 'polygon', 'rect', 'circle', 'ellipse', 'path'])

/**
 * Flatten an inline SVG into ink:
 *   { viewBox: [x, y, w, h] | null,
 *     texts: [{ text, size, box, m, id, anchor }]   box in root space, or in
 *       text-local space with m (local→root) when a rotation/skew is in force
 *     strokes: [{ seg, kind, tag, faint, width, dashed, axisAligned, id }] }
 * `id` identifies the source element (a <text> may yield several chunks).
 * `kind` names what the text hit in a report ('line', 'dashed line',
 * 'curve', 'arrowhead', 'point', 'circle', 'rect', 'shape').
 */
export function svgInk(svgText) {
  const svg = parseSvgTree(svgText)
  const ids = new Map()
  const index = (node) => {
    if (!node.tag) return
    if (node.attrs.id) ids.set(node.attrs.id, node)
    node.children.forEach(index)
  }
  index(svg)
  const vb = nums(svg.attrs?.viewBox)
  const viewBox = vb.length === 4 ? vb : null
  const texts = []
  const strokes = []
  let nextId = 0

  const emit = (poly, m, meta) => {
    const pts = poly.pts.map((q) => apply(m, q))
    const push = (a, b) => strokes.push({
      seg: [a, b], ...meta,
      axisAligned: Math.abs(a[0] - b[0]) < 0.5 ? 'v' : Math.abs(a[1] - b[1]) < 0.5 ? 'h' : null,
    })
    for (let k = 1; k < pts.length; k++) push(pts[k - 1], pts[k])
    if (poly.closed && pts.length > 2) push(pts.at(-1), pts[0])
  }

  function drawMarker(ref, vertex, angle, strokeWidth, style, opacity, m) {
    const id = /url\(\s*#([^)\s]+)\s*\)/.exec(ref ?? '')?.[1]
    const marker = id && ids.get(id)
    if (!marker || marker.tag !== 'marker') return
    const a = marker.attrs
    const orient = a.orient ?? '0'
    const theta = orient === 'auto' || orient === 'auto-start-reverse' ? angle : (parseFloat(orient) || 0) * Math.PI / 180
    const units = a.markerUnits === 'userSpaceOnUse' ? 1 : strokeWidth
    let local = [Math.cos(theta), Math.sin(theta), -Math.sin(theta), Math.cos(theta), vertex[0], vertex[1]]
    local = mul(local, [units, 0, 0, units, 0, 0])
    const mvb = nums(a.viewBox)
    if (mvb.length === 4 && mvb[2] > 0 && mvb[3] > 0) {
      const sx = Number(a.markerWidth ?? 3) / mvb[2], sy = Number(a.markerHeight ?? 3) / mvb[3]
      const s = Math.min(sx, sy)
      local = mul(local, [s, 0, 0, s, -mvb[0] * s, -mvb[1] * s])
    }
    local = mul(local, [1, 0, 0, 1, -Number(a.refX ?? 0), -Number(a.refY ?? 0)])
    // marker content never carries markers of its own (it would recurse)
    const inner = { ...cascade(style, ownProps(marker)), 'marker-start': 'none', 'marker-mid': 'none', 'marker-end': 'none' }
    for (const child of marker.children) walk(child, mul(m, local), inner, opacity, 'arrowhead')
  }

  function walk(node, m, parentStyle, parentOpacity, forcedKind) {
    if (!node.tag) return
    if (NOT_DRAWN.has(node.tag)) return
    const p = ownProps(node)
    if (p.display === 'none') return
    const style = cascade(parentStyle, p)
    const opacity = parentOpacity * opacityOf(p.opacity ?? '1')
    const mm = p.transform ? mul(m, parseTransform(p.transform)) : m
    if (node.tag === 'g' || node.tag === 'svg' || node.tag === 'a' || node.tag === 'switch') {
      for (const child of node.children) walk(child, mm, style, opacity, forcedKind)
      return
    }
    if (node.tag === 'use') {
      const ref = (p.href ?? p['xlink:href'] ?? '').replace(/^#/, '')
      const target = ids.get(ref)
      if (!target || target === node) return
      const at = mul(mm, [1, 0, 0, 1, Number(nums(p.x)[0] ?? 0), Number(nums(p.y)[0] ?? 0)])
      // a referenced group inherits from the <use>, not from its <defs> parent
      if (target.tag === 'symbol') for (const child of target.children) walk(child, at, style, opacity, forcedKind)
      else walk({ ...target, tag: NOT_DRAWN.has(target.tag) ? 'g' : target.tag }, at, style, opacity, forcedKind)
      return
    }
    if (node.tag === 'text') return textInk(node, p, mm, style, opacity)
    if (!SHAPES.has(node.tag) || style.visibility === 'hidden') return
    const polys = outlines(node, p)
    if (!polys.length) return
    const scale = scaleOf(mm)
    const width = Number(nums(style['stroke-width'])[0] ?? 1) * scale
    const strokeAlpha = opacity * opacityOf(style['stroke-opacity'])
    const fillAlpha = opacity * opacityOf(style['fill-opacity'])
    const stroked = paint(style.stroke) && width > 0 && strokeAlpha > 0
    const filled = paint(style.fill) && fillAlpha > 0 && node.tag !== 'line'
    if (!stroked && !filled) return
    const dashed = stroked && style['stroke-dasharray'] !== 'none' && nums(style['stroke-dasharray']).some((v) => v > 0)
    const id = nextId++
    const kind = forcedKind ?? (
      node.tag === 'line' ? (dashed ? 'dashed line' : 'line')
        : node.tag === 'polygon' && filled && !stroked ? 'arrowhead'
          : node.tag === 'circle' ? (Number(nums(p.r)[0]) * scale <= 8 ? 'point' : 'circle')
            : node.tag === 'ellipse' ? 'circle'
              : node.tag === 'rect' ? 'rect'
                : node.tag === 'path' && filled && !stroked ? 'shape'
                  : dashed ? 'dashed line' : 'curve')
    // Ink strength: the stroke if there is one, else the fill. A faint
    // element (grid hairline, translucent shading) is background — see
    // FAINT_OPACITY / FAINT_WIDTH.
    const alpha = Math.max(stroked ? strokeAlpha : 0, filled ? fillAlpha : 0)
    const faint = alpha < FAINT_OPACITY || (stroked && !filled && width < FAINT_WIDTH)
    const meta = { kind, tag: node.tag, faint, width, dashed, id }
    for (const poly of polys) {
      emit(filled ? { ...poly, closed: true } : poly, mm, meta)
      // a solid dot is ink across its face, not just round its rim
      if (node.tag === 'circle' && filled && !faint) {
        const cx = Number(nums(p.cx)[0] ?? 0), cy = Number(nums(p.cy)[0] ?? 0), r = Number(nums(p.r)[0])
        emit({ pts: [[cx - r, cy], [cx + r, cy]] }, mm, meta)
        emit({ pts: [[cx, cy - r], [cx, cy + r]] }, mm, meta)
      }
    }
    // markers ride on the outline vertices, oriented along the path
    if (stroked && (style['marker-start'] || style['marker-end'] || style['marker-mid']) && node.tag !== 'rect') {
      for (const poly of polys) {
        const pts = poly.pts
        if (pts.length < 2) continue
        const dir = (a, b) => Math.atan2(b[1] - a[1], b[0] - a[0])
        const sw = width / (scale || 1)
        if (paint(style['marker-start']) && style['marker-start'] !== 'none') {
          const rev = /auto-start-reverse/.test(ids.get(/#([^)\s]+)/.exec(style['marker-start'])?.[1])?.attrs?.orient ?? '') ? Math.PI : 0
          drawMarker(style['marker-start'], pts[0], dir(pts[0], pts[1]) + rev, sw, style, opacity, mm)
        }
        if (paint(style['marker-end']) && style['marker-end'] !== 'none') drawMarker(style['marker-end'], pts.at(-1), dir(pts.at(-2), pts.at(-1)), sw, style, opacity, mm)
        if (paint(style['marker-mid']) && style['marker-mid'] !== 'none') {
          for (let k = 1; k < pts.length - 1; k++) drawMarker(style['marker-mid'], pts[k], (dir(pts[k - 1], pts[k]) + dir(pts[k], pts[k + 1])) / 2, sw, style, opacity, mm)
        }
      }
    }
  }

  function textInk(node, p, m, style, opacity) {
    if (style.visibility === 'hidden' || opacity * opacityOf(style['fill-opacity']) <= 0 || !paint(style.fill)) return
    // Runs in layout order; a chunk restarts at every absolute x/y.
    const chunks = []
    let chunk = null
    let penX = 0, penY = 0
    const newChunk = (anchor) => { chunk = { anchor, runs: [] }; chunks.push(chunk) }
    const place = (props, st, first) => {
      const xs = nums(props.x), ys = nums(props.y)
      const dx = nums(props.dx)[0] ?? 0, dy = nums(props.dy)[0] ?? 0
      if (xs.length || ys.length || first) {
        if (xs.length) penX = xs[0]
        if (ys.length) penY = ys[0]
        if (xs.length || first) newChunk(st['text-anchor'])
      }
      penX += dx; penY += dy
    }
    const visit = (el, props, st, first) => {
      place(props, st, first)
      for (const child of el.children) {
        if (child.text !== undefined) {
          const str = child.text.replace(/\s+/g, ' ')
          if (!str) continue
          const size = Number(st['font-size'])
          const italic = /italic|oblique/.test(st['font-style'])
          const bold = /bold|[6-9]00/.test(st['font-weight'])
          const w = measureTextWidth(str, size, { italic: false }) * (bold ? 1.05 : 1)
          chunk.runs.push({ str, size, italic, bold, x: penX, y: penY, baseline: st['dominant-baseline'] })
          penX += w
        } else if (child.tag === 'tspan') {
          const cp = ownProps(child)
          if (cp.display === 'none') continue
          visit(child, cp, cascade(st, cp), false)
        }
      }
    }
    visit(node, p, style, true)
    const axisOK = keepsAxes(m)
    for (const c of chunks) {
      // trim the chunk's outer whitespace (xml:space default)
      while (c.runs.length && !c.runs[0].str.trim()) c.runs.shift()
      while (c.runs.length && !c.runs.at(-1).str.trim()) c.runs.pop()
      if (!c.runs.length) continue
      c.runs[0].str = c.runs[0].str.replace(/^ /, '')
      c.runs.at(-1).str = c.runs.at(-1).str.replace(/ $/, '')
      const boxes = c.runs.map((r) => {
        const shift = BASELINE_SHIFT[r.baseline] ?? 0
        return textBox({ text: r.str, size: r.size, x: r.x, y: r.y + shift * r.size, anchor: 'start', italic: r.italic, bold: r.bold })
      })
      const x0 = Math.min(...boxes.map((b) => b[0])), x1 = Math.max(...boxes.map((b) => b[2]))
      const w = x1 - x0
      const off = c.anchor === 'middle' ? -w / 2 : c.anchor === 'end' ? -w : 0
      let box = [x0 + off, Math.min(...boxes.map((b) => b[1])), x1 + off, Math.max(...boxes.map((b) => b[3]))]
      const text = c.runs.map((r) => r.str).join('')
      const size = Math.max(...c.runs.map((r) => r.size))
      let tm = null
      if (!isIdentity(m)) {
        if (axisOK) {
          const a = apply(m, [box[0], box[1]]), b = apply(m, [box[2], box[3]])
          box = [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1])]
        } else tm = m
      }
      texts.push({ text, size: size * (tm ? 1 : scaleOf(m) || 1), box, m: tm, id: nextId, anchor: c.anchor })
    }
    nextId++
  }

  const rootStyle = cascade(DEFAULT_STYLE, {})
  // the root <svg> carries presentation attributes too (font-size, fill…)
  walk({ ...svg, tag: 'g', attrs: { ...svg.attrs, transform: undefined } }, IDENTITY, rootStyle, 1)
  return { viewBox, texts, strokes }
}

/** baseline offset (in em, downward) that puts the alphabetic baseline where `dominant-baseline` asks */
const BASELINE_SHIFT = {
  middle: 0.26, // half the x-height above the baseline
  central: 0.3, // centre of the em box (0.8 over / 0.2 under)
  mathematical: 0.26,
  hanging: 0.72,
  'text-before-edge': 0.8,
  'text-top': 0.8,
  'before-edge': 0.8,
  'text-after-edge': -0.2,
  'text-bottom': -0.2,
  ideographic: -0.2,
}

// Background, not ink: the corpus draws grid hairlines at stroke-width 0.4
// with opacity 0.2–0.25 (4,901 lines), and translucent region shading at
// fill-opacity 0.12–0.35; every inked element sits at 0.5 or above (geoboard
// pegs 0.5, fraction wedges 0.6, slope segments 0.7, bars 0.75). A label
// printed over a gridline or across a shaded region is the intended look.
export const FAINT_OPACITY = 0.4
export const FAINT_WIDTH = 0.5
