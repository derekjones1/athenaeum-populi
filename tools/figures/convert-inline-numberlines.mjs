/**
 * convert-inline-numberlines.mjs — hand-written inline `<svg>` number lines →
 * `apfigure kind="numberline"` specs, each verified SEMANTICALLY before it may
 * be written.
 *
 *   node tools/figures/convert-inline-numberlines.mjs --dry-run content/math
 *   node tools/figures/convert-inline-numberlines.mjs --gallery out.html content/math/<book>/<chapter>
 *
 * The math books carry number lines drawn by hand in July 2026, before the
 * figure engine existed. Most of them say nothing `buildNumberLine` cannot
 * say — an inequality's paren or bracket and its shaded ray, or integer ticks
 * with a few plotted points — and converting them puts them under the
 * engine's upkeep (house style, label fitting, the tick-digit knockout, the
 * overlap gate) instead of leaving them frozen.
 *
 * The rewrite is NOT a re-render diff (convert-figures.mjs does that for the
 * legacy `data-spec` divs, whose spec is known). Here the spec has to be
 * RECOVERED from the drawing, so the drawing is read as mathematics: the tick
 * labels give the scale, every other mark is mapped through it, and the
 * recovered spec is then built by the real builder and read back the same
 * way. Only when the two readings agree — the same tick labels, the same
 * glyphs and dots at the same values (±0.02 on an integer line, a fiftieth
 * of the label spacing on a finer one), the same tick grid, the same shaded directions,
 * the same point labels and title, no text left unexplained — is the figure
 * rewritten:
 *
 *   =   converted   the engine draws the same number line
 *   --  skipped     the builder cannot say what this figure says (annotation
 *                   text, arcs above the line, labels the 280px line would
 *                   crowd…); the reason is printed and the SVG is left alone.
 *                   An `<svg data-pictorial>` is never read at all
 *   !!  mismatch    the recovered spec reads back differently, or a value the
 *                   drawing implies is not one the aria label names — a bug
 *                   in the recovery or a figure for the skip list; left alone
 *
 * Values are not taken from pixels alone. A glyph's x inverse-mapped through
 * the tick scale is a float; the value written is the one the aria label (or
 * a point's own label) NAMES — "negative three fifths", "-9/2", "2.5" — within
 * that tolerance, so −3/5 lands as −0.6, never as −0.5999. The tick grid is
 * recovered the same way: `step` and `labelEvery` from the label values as
 * printed and the tick spacing under them (0.0 … 1.0 in tenths; −1.00 …
 * 0.00 labelled every tenth over hundredths).
 *
 * A figure that reads back right is then run through check-figure-overlaps
 * on a scratch page; one the gate would fail is skipped with the checker's
 * finding (October 6, 2026: every paren/bracket marker — the spec pass has no
 * 'bracket on axis' exemption, which the inline pass has). The checker is
 * the authority, so when it changes, the next run converts what it now
 * accepts.
 *
 * The emitted shortcode gets exactly one blank line on each side (a welded
 * `<ap-figure>` swallows the shortcodes after it), and replaces the enclosing
 * `<div class="ap-figure">` too when that div held nothing else.
 *
 * `--dry-run` writes nothing. `--journal out.json` records each conversion's
 * spec and the exact markup it replaced; `--restore out.json [path…]` puts
 * that markup back. Exit status is 1 when any figure is `!!`.
 */
import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildNumberLine, toSvgString } from '../../assets/js/lib/math/graph-core.mjs'
import { parseCliArgs } from '../lib/cli.mjs'
import { maskCode, PAIRED_SHORTCODES, shortcodes, walkMarkdown } from '../lib/content.mjs'
import { decodeHtmlEntities, htmlAttribute, openTagSource } from '../lib/html.mjs'
import { apply, flattenPath, IDENTITY, mul, parseTransform, parseSvgTree, textBox } from './svg-geometry.mjs'

// ---------------------------------------------------------------------------
// markup → ink. parseSvgTree is the parser; this is only the cascade walk, and
// it keeps what svgInk throws away and a number line turns on: each shape's
// paint (a red dot is not the engine's dot), a circle's centre and radius, and
// whether a text is bold.

const NOT_DRAWN = new Set(['defs', 'marker', 'symbol', 'clipPath', 'mask', 'pattern', 'linearGradient',
  'radialGradient', 'filter', 'title', 'desc', 'metadata', 'style', 'script'])
const INHERITED = ['fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'font-size', 'font-weight',
  'font-style', 'text-anchor', 'dominant-baseline', 'marker-start', 'marker-end', 'visibility']
const ROOT_STYLE = {
  fill: '#000', stroke: 'none', 'stroke-width': '1', 'stroke-dasharray': 'none', 'font-size': '16',
  'font-weight': 'normal', 'font-style': 'normal', 'text-anchor': 'start', 'dominant-baseline': 'auto',
  visibility: 'visible',
}
const NUM = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g
const nums = (s) => (String(s ?? '').match(NUM) || []).map(Number)
const paint = (v) => Boolean(v) && v !== 'none' && v !== 'transparent'
/** the ink the engine draws in: anything else is colour the spec cannot carry */
const NEUTRAL = /^(?:currentcolor|inherit|black|#000|#000000|#111|#111111|none|transparent)$/i
/** a dot "filled" with the page background is a hollow dot */
const BACKGROUND = /^(?:white|#fff|#ffffff|var\(--[\w-]*(?:bg|background)[\w-]*(?:,[^)]*)?\))$/i

function ownProps(node) {
  const p = { ...node.attrs }
  for (const decl of String(node.attrs.style ?? '').split(';')) {
    const i = decl.indexOf(':')
    if (i > 0) p[decl.slice(0, i).trim()] = decl.slice(i + 1).trim()
  }
  return p
}

function cascade(parent, props) {
  const s = { ...parent }
  for (const k of INHERITED) {
    if (props[k] === undefined || props[k] === 'inherit') continue
    if (k === 'font-size') {
      const v = String(props[k]).trim(), n = parseFloat(v), base = Number(parent['font-size'])
      if (Number.isFinite(n)) s[k] = String(v.endsWith('em') ? n * base : v.endsWith('%') ? (n / 100) * base : n)
    } else s[k] = props[k]
  }
  return s
}

const scaleOf = (m) => Math.sqrt(Math.abs(m[0] * m[3] - m[1] * m[2]))

/**
 * Every shape and text of an inline SVG, in root coordinates:
 *   shapes: { id, tag, subpaths: [{ pts, closed }], circle?, width, stroke,
 *             fill, stroked, filled, dashed, curved, markerStart, markerEnd, bbox }
 *   texts:  { id, text, x, y, anchor, size, bold, fills, box, cx }
 */
export function svgElements(svgText) {
  const svg = parseSvgTree(svgText)
  const ids = new Map()
  const index = (node) => {
    if (!node.tag) return
    if (node.attrs.id) ids.set(node.attrs.id, node)
    node.children.forEach(index)
  }
  index(svg)
  const shapes = [], texts = [], unsupported = []
  let nextId = 0

  const markerRef = (ref) => {
    const id = /url\(\s*#([^)\s]+)\s*\)/.exec(ref ?? '')?.[1]
    return id && ids.get(id)?.tag === 'marker' ? id : null
  }

  function walk(node, m, style) {
    if (!node.tag || NOT_DRAWN.has(node.tag)) return
    const p = ownProps(node)
    if (p.display === 'none') return
    const st = cascade(style, p)
    const mm = p.transform ? mul(m, parseTransform(p.transform)) : m
    if (['g', 'svg', 'a', 'switch'].includes(node.tag)) {
      for (const child of node.children) walk(child, mm, st)
      return
    }
    if (st.visibility === 'hidden') return
    if (node.tag === 'text') return textChunks(node, p, mm, st)
    const n = (k) => Number(nums(p[k])[0] ?? 0)
    let subpaths = [], circle = null, curved = false
    switch (node.tag) {
      case 'line': subpaths = [{ pts: [[n('x1'), n('y1')], [n('x2'), n('y2')]], closed: false }]; break
      case 'polyline':
      case 'polygon': {
        const v = nums(p.points), pts = []
        for (let k = 0; k + 1 < v.length; k += 2) pts.push([v[k], v[k + 1]])
        subpaths = [{ pts, closed: node.tag === 'polygon' }]
        break
      }
      case 'rect': {
        const x = n('x'), y = n('y'), w = n('width'), h = n('height')
        subpaths = [{ pts: [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], closed: true }]
        break
      }
      case 'circle':
      case 'ellipse': {
        const rx = node.tag === 'circle' ? n('r') : n('rx'), ry = node.tag === 'circle' ? n('r') : n('ry')
        const [cx, cy] = apply(mm, [n('cx'), n('cy')])
        circle = { cx, cy, r: Math.max(rx, ry) * scaleOf(mm), round: Math.abs(rx - ry) < 0.01 }
        break
      }
      case 'path':
        subpaths = flattenPath(p.d)
        curved = /[CcSsQqTtAa]/.test(String(p.d ?? ''))
        break
      default:
        unsupported.push({ id: nextId++, tag: node.tag })
        return
    }
    subpaths = subpaths.map((sp) => ({ pts: sp.pts.map((q) => apply(mm, q)), closed: sp.closed }))
    const width = Number(nums(st['stroke-width'])[0] ?? 1) * scaleOf(mm)
    const stroked = paint(st.stroke) && width > 0
    const filled = paint(st.fill) && node.tag !== 'line'
    if (!stroked && !filled) return
    const all = circle
      ? [[circle.cx - circle.r, circle.cy - circle.r], [circle.cx + circle.r, circle.cy + circle.r]]
      : subpaths.flatMap((sp) => sp.pts)
    if (!all.length) return
    const xs = all.map((q) => q[0]), ys = all.map((q) => q[1])
    shapes.push({
      id: nextId++, tag: node.tag, subpaths, circle, width, curved,
      stroke: st.stroke, fill: st.fill, stroked, filled,
      dashed: stroked && st['stroke-dasharray'] !== 'none' && nums(st['stroke-dasharray']).some((v) => v > 0),
      markerStart: stroked ? markerRef(st['marker-start']) : null,
      markerEnd: stroked ? markerRef(st['marker-end']) : null,
      bbox: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)],
    })
  }

  // A text is one chunk per absolutely positioned run (a tspan with its own x
  // starts a new one); runs inside a chunk are joined, so `<tspan
  // font-style="italic">x</tspan> &gt; 3` reads "x > 3".
  function textChunks(node, p, m, style) {
    const chunks = []
    let chunk = null, penX = 0, penY = 0
    const visit = (el, props, st, first) => {
      const xs = nums(props.x), ys = nums(props.y)
      if (xs.length) penX = xs[0]
      if (ys.length) penY = ys[0]
      if (first || xs.length) {
        chunk = { x: penX, y: penY, anchor: st['text-anchor'], baseline: st['dominant-baseline'], runs: [] }
        chunks.push(chunk)
      } else if (ys.length || nums(props.dy).length) chunk.shifted = true
      penY += nums(props.dy)[0] ?? 0
      for (const child of el.children) {
        if (child.text !== undefined) {
          chunk.runs.push({
            str: child.text, size: Number(st['font-size']), fill: st.fill,
            bold: /bold|[6-9]00/.test(st['font-weight']), italic: /italic|oblique/.test(st['font-style']),
          })
        } else if (child.tag === 'tspan') {
          const cp = ownProps(child)
          if (cp.display !== 'none') visit(child, cp, cascade(st, cp), false)
        }
      }
    }
    visit(node, p, style, true)
    const id = nextId++
    for (const c of chunks) {
      const text = c.runs.map((r) => r.str).join('').replace(/\s+/g, ' ').trim()
      if (!text) continue
      const size = Math.max(...c.runs.map((r) => r.size)) * scaleOf(m)
      const [x, y0] = apply(m, [c.x, c.y])
      const shift = /middle|central|mathematical/.test(c.baseline) ? 0.3 * size : /hanging|before-edge|text-top/.test(c.baseline) ? 0.75 * size : 0
      const y = y0 + shift
      const bold = c.runs.some((r) => r.bold)
      const box = textBox({ text, size, x, y, anchor: c.anchor, bold })
      texts.push({
        id, text, x, y, anchor: c.anchor, size, bold, shifted: Boolean(c.shifted),
        fills: [...new Set(c.runs.map((r) => r.fill))], box, cx: (box[0] + box[2]) / 2,
      })
    }
  }

  walk({ ...svg, tag: 'g', attrs: { ...svg.attrs, transform: undefined } }, IDENTITY, ROOT_STYLE)
  return { shapes, texts, unsupported, attrs: svg.attrs ?? {} }
}

// ---------------------------------------------------------------------------
// numbers as an aria label says them

const UNITS = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
  eighteen: 18, nineteen: 19,
}
const TENS = { twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 }
const DENOMINATORS = {
  half: 2, halves: 2, third: 3, thirds: 3, fourth: 4, fourths: 4, quarter: 4, quarters: 4, fifth: 5,
  fifths: 5, sixth: 6, sixths: 6, seventh: 7, sevenths: 7, eighth: 8, eighths: 8, ninth: 9, ninths: 9,
  tenth: 10, tenths: 10, eleventh: 11, elevenths: 11, twelfth: 12, twelfths: 12,
}
const MINUS = /[−–-]/g
export const normalizeMinus = (s) => String(s).replace(MINUS, '−')

/** a float with its binary noise rounded away: 0.1 / 10 → 0.01 */
const clean = (x) => Number.parseFloat(x.toPrecision(12))
/** decimals a number carries as written (1e-7 counts 7) — the builder's rule */
const decimalsOf = (n) => {
  if (Number.isInteger(n)) return 0
  const [mantissa, exp = '0'] = String(n).split('e')
  return Math.max(0, (mantissa.split('.')[1] ?? '').length - Number(exp))
}
/** a tick label as buildNumberLine prints it */
const printTick = (v, decimals) => {
  if (!decimals) return normalizeMinus(String(Math.round(v)))
  const text = v.toFixed(decimals)
  return normalizeMinus(/^-0\.0+$/.test(text) ? text.slice(1) : text)
}

/** a label's own value: "−9/2", "-3 1/2", "2.5", "4" — or null */
export function labelValue(text) {
  const t = String(text).replace(MINUS, '-').replace(/\s+/g, ' ').trim()
  let m = /^(-)?(\d+(?:\.\d+)?)$/.exec(t)
  if (m) return (m[1] ? -1 : 1) * Number(m[2])
  m = /^(-)?(\d+)\/(\d+)$/.exec(t)
  if (m && Number(m[3])) return (m[1] ? -1 : 1) * Number(m[2]) / Number(m[3])
  m = /^(-)?(\d+) (\d+)\/(\d+)$/.exec(t)
  if (m && Number(m[4])) return (m[1] ? -1 : 1) * (Number(m[2]) + Number(m[3]) / Number(m[4]))
  return null
}

/**
 * Every number an aria label names, in digits or in words: "negative 5",
 * "−9/2", "-3 1/2", "2.5", "negative three fifths", "nine eighths", "one half".
 */
export function namedValues(prose) {
  const out = []
  const src = String(prose ?? '').toLowerCase().replace(MINUS, (c, i, s) => (/[a-z0-9]/.test(s[i - 1] ?? '') && c !== '−' ? ' ' : ' -'))
  const tokens = src.match(/-?\d+(?:\.\d+)?(?:\/\d+)?|[a-z]+/g) ?? []
  const cardinal = (i) => {
    if (TENS[tokens[i]] !== undefined) {
      if (UNITS[tokens[i + 1]] !== undefined && UNITS[tokens[i + 1]] < 10 && UNITS[tokens[i + 1]] > 0) return [TENS[tokens[i]] + UNITS[tokens[i + 1]], i + 2]
      return [TENS[tokens[i]], i + 1]
    }
    if (UNITS[tokens[i]] !== undefined) return [UNITS[tokens[i]], i + 1]
    if (tokens[i] === 'a' && DENOMINATORS[tokens[i + 1]]) return [1, i + 1]
    return null
  }
  // each phrase consumes its tokens, so "negative three fifths" names −3/5
  // and not also 3/5, 3, or 5
  for (let i = 0; i < tokens.length; i++) {
    let sign = 1, j = i
    if (tokens[j] === 'negative' || tokens[j] === 'minus') { sign = -1; j++ }
    const tok = tokens[j]
    if (tok === undefined) break
    if (/^-?\d/.test(tok)) {
      let v = labelValue(tok)
      const mixed = /^-?\d+$/.test(tok) && /^\d+\/\d+$/.test(tokens[j + 1] ?? '')
      if (mixed) {
        out.push(sign * v) // "3 1/2" names 3 as well: the whole part is a tick
        const frac = labelValue(tokens[j + 1])
        v = tok.startsWith('-') ? v - frac : v + frac
      }
      if (v !== null) out.push(sign * v)
      i = mixed ? j + 1 : j
      continue
    }
    const c = cardinal(j)
    if (!c) { i = j; continue }
    let [v, k] = c
    if (DENOMINATORS[tokens[k]]) { v /= DENOMINATORS[tokens[k]]; k++ } else if (tokens[k] === 'and') {
      const f = cardinal(k + 1)
      if (f && DENOMINATORS[tokens[f[1]]]) { v += f[0] / DENOMINATORS[tokens[f[1]]]; k = f[1] + 1 }
    }
    out.push(sign * v)
    i = k - 1
  }
  return out
}

/** the named value within `tol` (0.02 on an integer line) of `raw`, nearest first — or null */
function nearestNamed(raw, candidates, tol = 0.02) {
  let best = null
  for (const c of candidates) {
    if (Math.abs(c - raw) <= tol && (best === null || Math.abs(c - raw) < Math.abs(best - raw))) best = c
  }
  return best
}

const fmtValue = (v) => normalizeMinus(String(+v.toFixed(3)))

// ---------------------------------------------------------------------------
// reading a drawing as a number line

const GLYPHS = new Set(['(', ')', '[', ']'])
const RELATION = /[<>≤≥=≠]/
const segmentOf = (s) => (s.subpaths.length === 1 && s.subpaths[0].pts.length === 2 && !s.subpaths[0].closed && !s.circle
  ? s.subpaths[0].pts : null)
const isH = (seg) => Math.abs(seg[0][1] - seg[1][1]) < 0.5
const isV = (seg) => Math.abs(seg[0][0] - seg[1][0]) < 0.5
const len = (seg) => Math.hypot(seg[1][0] - seg[0][0], seg[1][1] - seg[0][1])

/**
 * Read one inline SVG.
 *   { candidate: false }                       not a number line (a graph, a diagram)
 *   { candidate: true, reasons: [...] }        a number line the builder cannot draw
 *   { candidate: true, reasons: [], sem }      what it says, in math units
 */
export function readNumberLine(svgText) {
  const { shapes, texts, unsupported, attrs } = svgElements(svgText)
  const segs = shapes.map((s) => ({ s, seg: segmentOf(s) })).filter((e) => e.seg)
  const vb = nums(attrs.viewBox)
  const allX = shapes.flatMap((s) => [s.bbox[0], s.bbox[2]])
  const drawingWidth = vb.length === 4 ? vb[2] : Math.max(...allX) - Math.min(...allX)

  // A coordinate plane has a long vertical axis; a number line never does.
  if (segs.some(({ s, seg }) => isV(seg) && len(seg) > 60 && !s.dashed)) return { candidate: false }
  const crossing = (y) => segs.filter(({ s, seg }) => isV(seg) && len(seg) >= 4 && len(seg) <= 30
    && Math.min(seg[0][1], seg[1][1]) <= y + 0.5 && Math.max(seg[0][1], seg[1][1]) >= y - 0.5 && !s.dashed)
  const axes = segs.filter(({ s, seg }) => isH(seg) && s.stroked && s.width < 3 && !s.dashed
    && len(seg) >= 100 && len(seg) >= 0.4 * drawingWidth && crossing(seg[0][1]).length >= 2)
  if (!axes.length) return { candidate: false }
  const axisYs = [...new Set(axes.map(({ seg }) => Math.round(seg[0][1])))]
  if (axisYs.length > 1) return { candidate: true, reasons: ['several number lines in one figure'] }
  const axis = axes.sort((a, b) => len(b.seg) - len(a.seg))[0]
  const Y = axis.seg[0][1]
  const [AX0, AX1] = [Math.min(axis.seg[0][0], axis.seg[1][0]), Math.max(axis.seg[0][0], axis.seg[1][0])]
  const used = new Set([axis.s.id])
  const usedText = new Set()
  const reasons = []
  const reason = (r) => { if (!reasons.includes(r)) reasons.push(r) }
  if (/\bdata-pictorial\b/.test(svgText.slice(0, svgText.indexOf('>')))) reason('marked data-pictorial (kept hand-drawn)')
  if (unsupported.length) reason(`unsupported markup <${unsupported[0].tag}>`)

  // ticks: short vertical strokes through the axis, drawn as lines or as the
  // subpaths of one path (a comb of minor ticks)
  const tickShapes = []
  const tickXs = crossing(Y).map(({ s, seg }) => { used.add(s.id); tickShapes.push(s); return seg[0][0] })
  for (const s of shapes) {
    if (used.has(s.id) || s.circle || s.dashed || s.subpaths.length < 2) continue
    if (s.subpaths.every((sp) => sp.pts.length === 2 && isV(sp.pts) && len(sp.pts) <= 30
      && Math.min(sp.pts[0][1], sp.pts[1][1]) <= Y + 0.5 && Math.max(sp.pts[0][1], sp.pts[1][1]) >= Y - 0.5)) {
      used.add(s.id)
      tickShapes.push(s)
      for (const sp of s.subpaths) tickXs.push(sp.pts[0][0])
    }
  }
  tickXs.sort((a, b) => a - b)

  // labels: numbers as written ("0.40", "−1.00") in the row under the ticks.
  // A label off every tick still counts when it sits in the row — the engine
  // drops the tick under a hollow marker.
  const below = texts.filter((t) => t.box[1] > Y)
  const numeric = (t) => /^[−–-]?\d+(?:\.\d+)?$/.test(t.text)
  const onTick = below.filter((l) => numeric(l) && tickXs.some((x) => Math.abs(l.cx - x) <= 2.5))
  const rowYs = onTick.map((l) => l.y).sort((a, b) => a - b)
  const rowY = rowYs.length ? rowYs[Math.floor(rowYs.length / 2)] : null
  const labels = below.filter((l) => numeric(l) && rowY !== null && Math.abs(l.y - rowY) <= 2).sort((a, b) => a.cx - b.cx)
  for (const l of labels) usedText.add(l)
  let scale = null
  if (labels.length < 2) reason('fewer than two tick labels')
  else {
    // the labels step evenly in value and in position; the ticks lay a finer
    // grid under them, every k-th one labelled, starting at the first label
    const values = labels.map((l) => labelValue(l.text))
    const n = labels.length
    const D = (values[n - 1] - values[0]) / (n - 1)
    const Lpx = (labels[n - 1].cx - labels[0].cx) / (n - 1)
    const sample = `${labels.slice(0, 3).map((l) => l.text).join(' ')} …`
    if (!(D > 0) || values.some((v, i) => Math.abs(v - (values[0] + i * D)) > D * 1e-6)) reason(`tick labels not an even sequence (${sample})`)
    else if (labels.some((l, i) => Math.abs(l.cx - (labels[0].cx + i * Lpx)) > Math.max(1, 0.02 * Lpx))) reason('tick labels unevenly spaced')
    else {
      const gaps = tickXs.slice(1).map((x, i) => x - tickXs[i]).filter((g) => g > 0.5)
      const k = Math.max(1, Math.round(Lpx / Math.min(Lpx, ...gaps)))
      const Tpx = Lpx / k
      const grid = tickXs.map((x) => (x - labels[0].cx) / Tpx)
      if (grid.some((j) => Math.abs(j - Math.round(j)) * Tpx > 1)) reason('ticks off an even grid')
      else if (grid.some((j) => Math.round(j) < 0)) reason('ticks before the first label')
      else {
        const step = clean(D / k)
        const last = Math.max((n - 1) * k, ...grid.map((j) => Math.round(j)))
        const min = values[0], max = clean(values[0] + last * step)
        const decimals = Math.max(decimalsOf(min), decimalsOf(max), decimalsOf(step))
        const printed = values.map((v) => printTick(v, decimals))
        const off = labels.findIndex((l, i) => normalizeMinus(l.text) !== printed[i])
        if (off >= 0) reason(`tick labels not printed to one precision (“${labels[off].text}” beside “${printed[off]}”)`)
        else scale = { min, max, step, labelEvery: k, x0: labels[0].cx, u: Lpx / D, tol: 0.02 * Math.min(1, D) }
      }
    }
  }
  if (labels.some((l) => l.bold)) reason('bold tick labels')

  // arrowheads at both ends: a marker on the axis, or a chevron / filled
  // triangle sitting on the axis end
  const ends = [[AX0, axis.seg[0][0] <= axis.seg[1][0] ? 'markerStart' : 'markerEnd'],
    [AX1, axis.seg[0][0] <= axis.seg[1][0] ? 'markerEnd' : 'markerStart']]
  let arrows = 0
  for (const [ex, markerKey] of ends) {
    if (axis.s[markerKey]) { arrows++; continue }
    const head = shapes.find((s) => !used.has(s.id) && !s.circle && !segmentOf(s)
      && s.bbox[0] >= ex - 16 && s.bbox[2] <= ex + 16 && s.bbox[1] < Y - 2 && s.bbox[3] > Y + 2
      && s.subpaths.flatMap((sp) => sp.pts).some((q) => Math.abs(q[0] - ex) <= 2.5 && Math.abs(q[1] - Y) <= 2.5))
    if (head) { used.add(head.id); arrows++ }
  }
  if (arrows < 2) reason(arrows ? 'arrowhead at one end only' : 'no arrowheads at the ends')

  // heavy stretches on the axis
  const stretches = segs.filter(({ s, seg }) => !used.has(s.id) && isH(seg) && s.width >= 3 && Math.abs(seg[0][1] - Y) <= 1.5)
    .map(({ s, seg }) => { used.add(s.id); return { s, x0: Math.min(seg[0][0], seg[1][0]), x1: Math.max(seg[0][0], seg[1][0]) } })
    .sort((a, b) => a.x0 - b.x0)

  // boundary glyphs: ( ) [ ] as text on the axis, or drawn as a short path
  const glyphs = []
  for (const t of texts) {
    if (GLYPHS.has(t.text) && t.box[1] < Y && t.box[3] > Y) {
      glyphs.push({ glyph: t.text, x: t.cx })
      usedText.add(t)
    }
  }
  for (const s of shapes) {
    if (used.has(s.id) || s.circle || s.filled || s.subpaths.length !== 1 || s.subpaths[0].closed) continue
    const pts = s.subpaths[0].pts
    const [x0, y0, x1, y1] = s.bbox
    if (pts.length < 3 || x1 - x0 > 10 || y1 - y0 < 8 || y1 - y0 > 34 || !(y0 < Y - 3 && y1 > Y + 3)) continue
    const endsX = (pts[0][0] + pts.at(-1)[0]) / 2
    const extreme = pts.reduce((a, q) => (Math.abs(q[0] - endsX) > Math.abs(a[0] - endsX) ? q : a), pts[0])
    if (Math.abs(extreme[0] - endsX) < 1.5) continue
    const opensRight = extreme[0] < endsX
    glyphs.push({ glyph: s.curved ? (opensRight ? '(' : ')') : (opensRight ? '[' : ']'), x: extreme[0], drawn: true })
    used.add(s.id)
  }

  // dots on the axis, and the label directly above each
  const dots = []
  for (const s of shapes) {
    if (used.has(s.id) || !s.circle || !s.circle.round || s.circle.r > 8 || Math.abs(s.circle.cy - Y) > 2) continue
    const solid = s.filled && !BACKGROUND.test(String(s.fill).trim())
    if (!solid && !s.stroked) continue
    used.add(s.id)
    dots.push({ s, filled: solid, x: s.circle.cx })
  }
  dots.sort((a, b) => a.x - b.x)
  for (const d of dots) {
    // a relation is the title even when it sits right over a marker dot
    const label = texts.filter((t) => !usedText.has(t) && t.box[3] < Y && Math.abs(t.cx - d.x) <= 2.5 && !RELATION.test(t.text))
      .sort((a, b) => b.box[3] - a.box[3])[0]
    if (label) { d.label = label.text; d.labelText = label; usedText.add(label) }
  }

  // title: a relation set above the line at about 14px
  const titles = texts.filter((t) => !usedText.has(t) && t.box[3] < Y && RELATION.test(t.text) && t.size >= 11 && t.size <= 17)
  const title = titles.length === 1 ? titles[0] : null
  if (title) usedText.add(title)

  // colour and weight the engine does not draw
  const inked = [axis.s, ...tickShapes, ...stretches.map((t) => t.s), ...dots.map((d) => d.s)]
  if (inked.some((s) => (s.stroked && !NEUTRAL.test(String(s.stroke).trim())) || (s.filled && !s.circle && !NEUTRAL.test(String(s.fill).trim()))
    || (s.circle && s.filled && !NEUTRAL.test(String(s.fill).trim()) && !BACKGROUND.test(String(s.fill).trim())))) reason('coloured ink')
  if ([...usedText].some((t) => t.fills.some((f) => !NEUTRAL.test(String(f).trim())))) reason('coloured ink')
  if ([title, ...dots.map((d) => d.labelText)].some((t) => t?.bold)) reason('bold labels')

  // everything left is something the builder cannot draw — name it
  const leftover = shapes.filter((s) => !used.has(s.id))
  const leftText = texts.filter((t) => !usedText.has(t))
  const near = (p, box, d) => p[0] >= box[0] - d && p[0] <= box[2] + d && p[1] >= box[1] - d && p[1] <= box[3] + d
  for (const s of leftover) {
    const seg = segmentOf(s)
    if (s.dashed) { reason(seg && isV(seg) ? 'dashed vertical lines (sign chart)' : 'dashed lines'); continue }
    if (seg && isH(seg) && len(seg) <= 18
      && texts.some((t) => Math.abs(t.cx - (seg[0][0] + seg[1][0]) / 2) <= 3 && t.box[3] <= seg[0][1] + 2 && t.box[3] >= seg[0][1] - 10)
      && texts.some((t) => Math.abs(t.cx - (seg[0][0] + seg[1][0]) / 2) <= 3 && t.box[1] >= seg[0][1] - 2 && t.box[1] <= seg[0][1] + 10)) {
      reason('stacked-fraction labels')
      continue
    }
    if (seg && dots.some((d) => seg.some((q) => Math.hypot(q[0] - d.x, q[1] - Y) <= 8))
      && texts.some((t) => seg.some((q) => near(q, t.box, 6)))) { reason('leader lines to displaced labels'); continue }
    if (s.circle) { reason(Math.abs(s.circle.cy - Y) <= 2 ? 'large circles on the line' : 'dots off the line'); continue }
    if (s.bbox[3] < Y - 1) reason('arrows, arcs or braces above the line')
    else if (s.bbox[1] > Y + 1) reason('marks below the line')
    else reason('extra marks on the line')
  }
  // a dot's own label nudged sideways to clear a neighbour: the engine always
  // sets a label straight over its dot, so this layout is not one it can give
  const toMathX = (x) => scale && scale.min + (x - scale.x0) / scale.u
  const displaced = leftText.filter((t) => scale && t.box[3] < Y && labelValue(t.text) !== null
    && dots.some((d) => d.label === undefined && Math.abs(toMathX(d.x) - labelValue(t.text)) <= scale.tol
      && Math.abs(t.cx - d.x) <= (scale.u * scale.step * scale.labelEvery) / 2))
  if (displaced.length) reason('point labels displaced from their dots')
  const unexplained = leftText.filter((t) => !displaced.includes(t))
  if (unexplained.length && !reasons.includes('stacked-fraction labels') && !reasons.includes('leader lines to displaced labels')) {
    reason(`annotation text “${unexplained[0].text}”${unexplained.length > 1 ? ` (+${unexplained.length - 1})` : ''}`)
  }
  if (reasons.length || !scale) return { candidate: true, reasons }

  const toMath = (x) => scale.min + (x - scale.x0) / scale.u
  const xOf = (v) => scale.x0 + (v - scale.min) * scale.u
  const xMin = xOf(scale.min), xMax = xOf(scale.max)
  return {
    candidate: true,
    reasons,
    sem: {
      min: scale.min, max: scale.max, u: scale.u, step: scale.step, labelEvery: scale.labelEvery, tol: scale.tol,
      tickTexts: labels.map((l) => normalizeMinus(l.text)),
      glyphs: glyphs.sort((a, b) => a.x - b.x).map((g) => ({ glyph: g.glyph, at: toMath(g.x), x: g.x })),
      dots: dots.map((d) => ({ filled: d.filled, at: toMath(d.x), x: d.x, label: d.label === undefined ? undefined : normalizeMinus(d.label) })),
      stretches: stretches.map((t) => ({
        x0: t.x0, x1: t.x1, from: toMath(t.x0), to: toMath(t.x1),
        left: t.x0 < xMin - 4 || t.x0 <= AX0 + 4, right: t.x1 > xMax + 4 || t.x1 >= AX1 - 4,
      })),
      title: title ? normalizeMinus(title.text) : undefined,
      texts,
    },
  }
}

// ---------------------------------------------------------------------------
// the spec a reading implies

/**
 * Turn a reading into a `buildNumberLine` spec.
 *   { spec } | { skip: reason } | { bad: reason }
 */
export function specFromReading(sem, ariaLabel) {
  const named = namedValues(ariaLabel)
  const valueOf = (raw, what, label) => {
    const own = label === undefined ? null : labelValue(label)
    if (own !== null && Math.abs(own - raw) <= sem.tol) return { v: own }
    const v = nearestNamed(raw, named, sem.tol)
    if (v !== null) return { v }
    // On a tick and unnamed is deliberate: "a point at the eighth mark" over
    // "What decimal is plotted above?" — a spec would print the answer.
    const j = Math.round((raw - sem.min) / sem.step)
    if (Math.abs(raw - (sem.min + j * sem.step)) <= sem.tol) return { skip: `${what} on a tick the aria label leaves unnamed (the figure poses the question)` }
    return { bad: `${what} at ${fmtValue(raw)} is not a value the aria label names` }
  }
  const { glyphs, dots, stretches } = sem
  // which mark bounds each bounded end of each stretch
  const markAt = (x) => [...glyphs.map((g) => ({ ...g, kind: 'glyph' })), ...dots.map((d) => ({ ...d, kind: 'dot' }))]
    .filter((m) => Math.abs(m.x - x) <= 7).sort((a, b) => Math.abs(a.x - x) - Math.abs(b.x - x))[0]
  const bounds = []
  for (const t of stretches) {
    for (const [side, x] of [['left', t.x0], ['right', t.x1]]) {
      if (t[side]) continue
      const m = markAt(x)
      if (!m) return { skip: 'heavy line ends at no marker' }
      bounds.push({ stretch: t, side, mark: m })
    }
  }
  const boundMarks = new Set(bounds.map((b) => b.mark.x))
  const spare = { glyphs: glyphs.filter((g) => !boundMarks.has(g.x)), dots: dots.filter((d) => !boundMarks.has(d.x)) }
  if (spare.glyphs.length) return { skip: stretches.length ? 'paren/bracket glyph off the heavy line' : 'paren/bracket glyph without shading' }
  if (spare.dots.some((d) => !d.filled)) return { skip: 'hollow dot off the heavy line' }
  // the engine starts a stretch exactly at its glyph; a hand stretch that
  // starts elsewhere says something the spec would silently change
  for (const { stretch, side, mark } of bounds) {
    const gap = Math.abs(stretch[side === 'left' ? 'x0' : 'x1'] - mark.x)
    if (mark.kind === 'glyph' && gap > 2) return { bad: `heavy line starts ${gap.toFixed(1)}px from its ${mark.glyph} glyph` }
  }
  const typeOf = (mark) => (mark.kind === 'glyph' ? (/[()]/.test(mark.glyph) ? 'paren' : 'bracket') : (mark.filled ? 'closed' : 'open'))

  const spec = { ariaLabel, min: sem.min, max: sem.max }
  // the default grid (every integer, each labelled) stays unwritten
  if (sem.step !== 1 || !Number.isInteger(sem.min) || !Number.isInteger(sem.max)) spec.step = sem.step
  if (sem.labelEvery !== 1) spec.labelEvery = sem.labelEvery
  if (sem.title !== undefined) spec.title = sem.title
  if (stretches.length === 1 && bounds.length === 1) {
    const { side, mark } = bounds[0]
    const v = valueOf(mark.at, mark.kind === 'glyph' ? `the ${mark.glyph} glyph` : 'the endpoint dot', mark.label)
    if (!('v' in v)) return v
    spec.marker = { at: v.v, type: typeOf(mark) }
    spec.shade = side === 'left' ? 'right' : 'left'
  } else if (stretches.length) {
    spec.intervals = []
    for (const t of stretches) {
      const iv = {}
      for (const b of bounds.filter((x) => x.stretch === t)) {
        const v = valueOf(b.mark.at, 'an interval end', b.mark.label)
        if (!('v' in v)) return v
        const key = b.side === 'left' ? 'from' : 'to'
        iv[key] = v.v
        iv[`${key}Type`] = typeOf(b.mark)
      }
      spec.intervals.push(iv)
    }
  }
  const points = []
  for (const d of spare.dots) {
    const v = valueOf(d.at, 'a plotted point', d.label)
    if (!('v' in v)) return v
    points.push(d.label === undefined ? { at: v.v } : { at: v.v, label: d.label })
  }
  if (points.length) spec.points = points
  return { spec }
}

// ---------------------------------------------------------------------------
// the semantic check

const boxesMeet = (a, b) => a[0] < b[2] - 0.5 && b[0] < a[2] - 0.5 && a[1] < b[3] - 0.5 && b[1] < a[3] - 0.5

/** first difference between two readings, or null */
export function compareReadings(a, b) {
  if (a.tickTexts.join(' ') !== b.tickTexts.join(' ')) return `tick labels ${a.tickTexts.join(' ')} → ${b.tickTexts.join(' ')}`
  if (Math.abs(a.step - b.step) > 1e-9 || a.labelEvery !== b.labelEvery) {
    return `ticks every ${a.step}, labelled every ${a.labelEvery} → every ${b.step}, labelled every ${b.labelEvery}`
  }
  if (a.glyphs.length !== b.glyphs.length) return `glyphs ${a.glyphs.map((g) => g.glyph).join('') || 'none'} → ${b.glyphs.map((g) => g.glyph).join('') || 'none'}`
  for (const [i, g] of a.glyphs.entries()) {
    const h = b.glyphs[i]
    if (g.glyph !== h.glyph) return `glyph ${g.glyph} at ${fmtValue(g.at)} → ${h.glyph}`
    if (Math.abs(g.at - h.at) > a.tol) return `glyph ${g.glyph} at ${fmtValue(g.at)} → ${fmtValue(h.at)}`
  }
  if (a.dots.length !== b.dots.length) return `${a.dots.length} dot(s) → ${b.dots.length}`
  for (const [i, d] of a.dots.entries()) {
    const e = b.dots[i]
    if (d.filled !== e.filled) return `dot at ${fmtValue(d.at)} ${d.filled ? 'filled' : 'hollow'} → ${e.filled ? 'filled' : 'hollow'}`
    if (Math.abs(d.at - e.at) > a.tol) return `dot at ${fmtValue(d.at)} → ${fmtValue(e.at)}`
    if ((d.label ?? '') !== (e.label ?? '')) return `dot label “${d.label ?? ''}” → “${e.label ?? ''}”`
  }
  if (a.stretches.length !== b.stretches.length) return `${a.stretches.length} heavy stretch(es) → ${b.stretches.length}`
  for (const [i, t] of a.stretches.entries()) {
    const s = b.stretches[i]
    if (t.left !== s.left || t.right !== s.right) {
      const dir = (x) => (x.left && x.right ? 'both ways' : x.left ? 'left' : x.right ? 'right' : 'bounded')
      return `shading ${dir(t)} → ${dir(s)}`
    }
  }
  if ((a.title ?? '') !== (b.title ?? '')) return `title “${a.title ?? ''}” → “${b.title ?? ''}”`
  return null
}

/**
 * Recover, build, read back, compare. One hand SVG in, one verdict out:
 *   { verdict: '=', spec, newSvg } | { verdict: '--', reason } | { verdict: '!!', reason }
 *   | null (not a number line)
 */
export function convertSvg(svgText, { ariaLabel, knockoutId = 'ap-knockout' } = {}) {
  const read = readNumberLine(svgText)
  if (!read.candidate) return null
  if (read.reasons.length) return { verdict: '--', reason: read.reasons.join('; ') }
  if (!ariaLabel) return { verdict: '--', reason: 'no aria label' }
  const rec = specFromReading(read.sem, ariaLabel)
  if (rec.skip) return { verdict: '--', reason: rec.skip }
  if (rec.bad) return { verdict: '!!', reason: rec.bad }
  let newSvg
  try {
    newSvg = toSvgString(rec.spec, { builder: buildNumberLine, color: null, knockoutId })
  } catch (error) {
    return { verdict: '!!', reason: `spec does not build: ${error.message}`, spec: rec.spec }
  }
  const back = readNumberLine(newSvg)
  if (!back.candidate || back.reasons.length) {
    return { verdict: '!!', reason: `the engine render does not read back: ${back.reasons?.join('; ') || 'not a number line'}`, spec: rec.spec }
  }
  const mismatch = compareReadings(read.sem, back.sem)
  if (mismatch) return { verdict: '!!', reason: mismatch, spec: rec.spec }
  // The engine draws every number line at one width; labels a hand drawing
  // spread over 600px can collide at 280px. That is a layout the builder
  // cannot give this figure, not a recovery bug.
  const t = back.sem.texts
  for (let i = 0; i < t.length; i++) {
    for (let j = i + 1; j < t.length; j++) {
      if (boxesMeet(t[i].box, t[j].box)) return { verdict: '--', reason: `labels collide at the engine's 280px scale (“${t[i].text}” / “${t[j].text}”)` }
    }
  }
  return { verdict: '=', spec: rec.spec, newSvg }
}

// ---------------------------------------------------------------------------
// pages

const SVG_RE = /<svg\b[\s\S]*?<\/svg>/gi
const WRAP_OPEN_RE = /<div\b(?:[^>'"]|"[^"]*"|'[^']*')*\bclass="ap-figure"(?:[^>'"]|"[^"]*"|'[^']*')*>\s*$/
const WRAP_CLOSE_RE = /^\s*<\/div>/

/** [start, end) of every paired shortcode body a figure may not be moved into */
function shortcodeSpans(src) {
  const spans = []
  for (const [name, paired] of Object.entries(PAIRED_SHORTCODES)) {
    if (!paired) continue
    for (const sc of shortcodes(src, name)) spans.push([sc.index, sc.end])
  }
  return spans
}

/** the shortcode a converted figure becomes — and what `restorePage` looks for */
const shortcodeFor = (spec) => `{{< apfigure kind="numberline" >}}\n${JSON.stringify(spec)}\n{{< /apfigure >}}`

/**
 * Convert every hand number line on one page. Pure: returns the new source
 * and one row per inline SVG that reads as a number line. `others` counts
 * the inline SVGs that are not number lines at all. `gate(spec)` — the CLI
 * passes the overlap checker — returns a reason to keep a figure that reads
 * back right but would fail a gate once written, or null.
 */
export function convertPage(src, { gate } = {}) {
  const rows = []
  const edits = []
  let others = 0, pictorial = 0
  const masked = maskCode(src)
  const spans = shortcodeSpans(src)
  for (const m of src.matchAll(SVG_RE)) {
    const start = m.index, end = start + m[0].length
    const line = src.slice(0, start).split('\n').length
    if (masked[start] !== '<') continue // inside code
    const before = src.slice(0, start), after = src.slice(end)
    const divAt = before.lastIndexOf('<div')
    const openMatch = divAt >= 0 ? WRAP_OPEN_RE.exec(before.slice(divAt)) : null
    const open = openMatch?.index === 0 ? openMatch : null
    const wrapOpenTag = open ? new RegExp(openTagSource('div'), 'i').exec(open[0])[0] : ''
    const close = WRAP_CLOSE_RE.exec(after)
    const tag = new RegExp(openTagSource('svg'), 'i').exec(m[0])[0]
    // kept hand-drawn by decision (counters, blocks, machines…): never read
    if (/\sdata-pictorial\b/.test(tag)) { pictorial++; continue }
    const rawAria = htmlAttribute(tag, 'aria-label') || (open ? htmlAttribute(wrapOpenTag, 'aria-label') : '')
    const aria = rawAria ? decodeHtmlEntities(rawAria) : undefined
    if (/\bdata-spec=/.test(wrapOpenTag)) { others++; continue } // a legacy spec div: convert-figures.mjs
    const result = convertSvg(m[0], { ariaLabel: aria, knockoutId: `nl-${rows.length + 1}` })
    if (!result) { others++; continue }
    const row = { line, aria: aria ?? '', ...result, oldSvg: m[0] }
    rows.push(row)
    if (result.verdict !== '=') continue
    const demote = (reason) => Object.assign(row, { verdict: '--', reason })
    if (spans.some(([a, b]) => start > a && start < b)) { demote('inside a shortcode body'); continue }
    // The whole wrapper goes when it held only this svg; otherwise the svg
    // alone is replaced and the wrapper keeps the rest.
    const whole = Boolean(open && close)
    const from = whole ? divAt : start
    const to = whole ? end + close[0].length : end
    const lead = src.slice(src.lastIndexOf('\n', from - 1) + 1, from)
    const eol = src.indexOf('\n', to)
    const trail = src.slice(to, eol === -1 ? src.length : eol)
    const keptWrapper = Boolean(open) !== Boolean(close)
    if (!keptWrapper && /\S/.test(lead + trail)) { demote('figure is inline in a paragraph'); continue }
    if (!keptWrapper && lead.length) { demote('indented figure'); continue }
    const failed = gate?.(result.spec)
    if (failed) { demote(`fails the overlap gate: ${failed}`); continue }
    row.original = src.slice(from, to)
    edits.push({ from, to, body: shortcodeFor(result.spec) })
  }
  let out = src
  for (const { from, to, body } of edits.reverse()) {
    // exactly one blank line on each side, none added at the file's edges
    const head = out.slice(0, from).replace(/[ \t]*\n*[ \t]*$/, '')
    const tail = out.slice(to).replace(/^[ \t]*\n*/, '')
    out = (head ? `${head}\n\n` : '') + body + (tail ? `\n\n${tail}` : '\n')
  }
  return { out, rows, others, pictorial }
}

/**
 * Put converted figures back: each journal entry's shortcode (matched by its
 * exact spec) becomes the markup it replaced. The blank lines the conversion
 * normalized stay as they are.
 */
export function restorePage(src, entries) {
  let out = src
  const missing = []
  for (const e of entries) {
    const at = out.indexOf(shortcodeFor(e.spec))
    if (at === -1) { missing.push(e); continue }
    out = out.slice(0, at) + e.original + out.slice(at + shortcodeFor(e.spec).length)
  }
  return { out, restored: entries.length - missing.length, missing }
}

/**
 * The overlap checker, run on a scratch page holding only the new shortcode:
 * a figure that reads back right but would fail the gate is not one this
 * tool may write (and the checker is the authority, not a copy of its rules).
 */
function overlapGate() {
  const dir = mkdtempSync(join(tmpdir(), 'nl-gate-'))
  const page = join(dir, 'figure.md')
  const checker = new URL('./check-figure-overlaps.mjs', import.meta.url).pathname
  process.on('exit', () => rmSync(dir, { recursive: true, force: true }))
  return (spec) => {
    writeFileSync(page, `${shortcodeFor(spec)}\n`)
    const run = spawnSync(process.execPath, [checker, page], { encoding: 'utf8' })
    if (run.status === 0) return null
    const finding = (run.stdout.match(/^\s*✗ (.*)$/m) ?? [])[1]
    return finding ?? (run.stderr.trim().split('\n')[0] || `checker exited ${run.status}`)
  }
}

// ---------------------------------------------------------------------------

const MARK = { '=': '=', '--': '--', '!!': '!!' }
const escapeHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function galleryHtml(pairs) {
  const cells = pairs.map(({ file, r }) => `
  <figure>
    <figcaption><b>${escapeHtml(file)}:${r.line}</b> — ${escapeHtml(r.aria)}</figcaption>
    <div class="pair">
      <div><span>hand SVG</span>${r.oldSvg}</div>
      <div><span>engine</span>${r.newSvg}</div>
    </div>
    <pre>${escapeHtml(JSON.stringify(r.spec))}</pre>
  </figure>`).join('\n')
  return `<!doctype html><meta charset="utf-8"><title>number-line conversion</title>
<style>
  body { font: 14px/1.5 system-ui, sans-serif; margin: 2rem; color: #111; background: #fff }
  figure { margin: 0 0 2.5rem; border-top: 1px solid #ccc; padding-top: .75rem }
  figcaption { margin-bottom: .5rem }
  .pair { display: flex; gap: 2rem; align-items: flex-start }
  .pair > div { flex: 1; min-width: 0 }
  .pair span { display: block; font-weight: 700; color: #666 }
  .pair svg { width: 100%; max-width: 420px; height: auto; display: block }
  pre { white-space: pre-wrap; font-size: 12px; color: #444 }
</style>
<p>${pairs.length} converted number line(s): the hand-drawn SVG on the left, the engine's render of the recovered spec on the right.</p>
${cells}
`
}

/** `--restore journal.json [path…]`: undo the conversions a journal records */
function restore(journalPath, roots, dryRun) {
  const entries = JSON.parse(readFileSync(journalPath, 'utf8'))
    .filter((e) => !roots.length || roots.some((r) => e.file === r || e.file.startsWith(r.endsWith('/') ? r : `${r}/`)))
  const byFile = Map.groupBy(entries, (e) => e.file)
  let restored = 0, missing = 0
  for (const [file, list] of byFile) {
    const src = readFileSync(file, 'utf8')
    const r = restorePage(src, list)
    console.log(`${file}: ${r.restored} restored${r.missing.length ? `, ${r.missing.length} not found (L${r.missing.map((e) => e.line).join(', L')})` : ''}`)
    restored += r.restored
    missing += r.missing.length
    if (!dryRun && r.out !== src) writeFileSync(file, r.out)
  }
  console.log(`${dryRun ? 'would restore' : 'restored'} ${restored} figure(s); ${missing} not found.`)
  return missing ? 1 : 0
}

function main(argv) {
  const usage = 'usage: node tools/figures/convert-inline-numberlines.mjs [--dry-run] [--gallery out.html] [--journal out.json] <path…>\n'
    + '       node tools/figures/convert-inline-numberlines.mjs --restore journal.json [--dry-run] [path…]'
  let cli
  try {
    cli = parseCliArgs(argv, { boolFlags: ['dry-run'], valueFlags: ['gallery', 'journal', 'restore'] })
  } catch (error) {
    console.error(`convert-inline-numberlines: ${error.message}`)
    console.error(usage)
    return 2
  }
  const dryRun = cli.bool('dry-run')
  const galleryPath = cli.flag('gallery')
  const journalPath = cli.flag('journal')
  const roots = cli.positional
  if (cli.flag('restore')) return restore(cli.flag('restore'), roots, dryRun)
  if (!roots.length) {
    console.error(usage)
    return 2
  }
  const gate = overlapGate()
  const tally = { '=': 0, '--': 0, '!!': 0 }
  const reasons = new Map()
  const converted = []
  const pages = new Map()
  let others = 0, pictorial = 0
  for (const file of roots.flatMap((root) => walkMarkdown(root))) {
    const src = readFileSync(file, 'utf8')
    const { out, rows, others: o, pictorial: p } = convertPage(src, { gate })
    others += o
    pictorial += p
    if (!rows.length) continue
    console.log(`\n${file}`)
    for (const r of rows) {
      tally[r.verdict]++
      console.log(`  ${MARK[r.verdict].padEnd(2)} L${String(r.line).padEnd(5)} ${r.aria.slice(0, 72)}`)
      if (r.verdict === '--') {
        console.log(`       skip: ${r.reason}`)
        const key = r.reason.split('; ')[0].replace(/ \((?:“|[−–\d-]).*$/, '').replace(/ “.*$/, '').replace(/^(fails the overlap gate):.*$/, '$1')
        reasons.set(key, (reasons.get(key) ?? 0) + 1)
      }
      if (r.verdict === '!!') console.log(`       ${r.reason}${r.spec ? `\n       spec: ${JSON.stringify(r.spec)}` : ''}`)
      if (r.verdict === '=') {
        converted.push({ file, r })
        pages.set(file, (pages.get(file) ?? 0) + 1)
      }
    }
    if (!dryRun && out !== src) writeFileSync(file, out)
  }
  console.log(`\n${dryRun ? 'would convert' : 'converted'} ${tally['=']} number line(s) on ${pages.size} page(s); `
    + `${tally['--']} skipped; ${tally['!!']} need investigation; ${others} other inline svg(s) are not number lines; ${pictorial} data-pictorial svg(s) left unread.`)
  if (reasons.size) {
    console.log('skipped, by first reason:')
    for (const [k, n] of [...reasons].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)}  ${k}`)
  }
  if (galleryPath) {
    writeFileSync(galleryPath, galleryHtml(converted))
    console.log(`${converted.length} converted pair(s) written to ${galleryPath}`)
  }
  if (journalPath && !dryRun) {
    const journal = converted.map(({ file, r }) => ({ file, line: r.line, aria: r.aria, spec: r.spec, original: r.original }))
    writeFileSync(journalPath, `${JSON.stringify(journal, null, 1)}\n`)
    console.log(`journal of ${journal.length} conversion(s) written to ${journalPath} — \`--restore ${journalPath}\` undoes them`)
  }
  return tally['!!'] ? 1 : 0
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(main(process.argv.slice(2)))
