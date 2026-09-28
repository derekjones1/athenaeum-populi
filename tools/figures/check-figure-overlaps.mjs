/**
 * Label-collision report and conversion queue for spec-first figures.
 *
 *   node tools/figures/check-figure-overlaps.mjs content [--near N] [--json]
 *   node tools/figures/check-figure-overlaps.mjs content/math/.../07-rational-functions.md
 *   node tools/figures/check-figure-overlaps.mjs --status content/math/<book>/<chapter>
 *
 * Builds every figure spec on every page through the REAL builders in
 * assets/js/lib/math/graph-core.mjs and reports overlapping text: label text that
 * collides with other label text, or with a drawn stroke (curves, lines,
 * axes, arrowheads). The machines already assert a spec BUILDS and that no
 * text leaves the viewBox (lint + figures.spec.mjs); this tool asserts the
 * result is READABLE — no label printed across a curve, a tick digit, or
 * another label.
 *
 * Sources checked, same population the figure lint walks:
 *   - {{< apfigure kind="…" >}} spec bodies
 *   - {{< multiplechoice mode="graph" >}} option specs (kind rides in JSON)
 *   - legacy prerendered <div class="ap-figure" data-spec="…"> figures
 *   - hand-written inline <svg> figures, read from the markup itself
 *     (svg-geometry.mjs) and named page:line — the L<line> that
 *     render-page-figures.mjs names its PNG. Their overlaps fail the run
 *     (INLINE_SVG_GATES, promoted September 28, 2026).
 *
 * `--status` skips the geometry entirely and prints the figure-engine
 * CONVERSION QUEUE instead: per page, whether its figures are all
 * spec-first (`converted` — skip it), still legacy `data-spec` divs
 * (`TODO`), or a mix (`mixed`). The state is read from the content itself —
 * there is no separate ledger to drift — so "convert this chapter" starts
 * with this command and touches only the pages it lists as unconverted.
 *
 * Text boxes use the EXACT measured advance widths (no fit-pass safety
 * margin) shrunk by a pixel, so a reported overlap is a real ink collision,
 * not a near miss. `--near N` widens every text box by N px to also surface
 * uncomfortably tight placements.
 */
import { readFileSync } from 'node:fs'
import { buildGraph, buildNumberLine, buildFigure } from '../../assets/js/lib/math/graph-core.mjs'
import { textBox, arcPoints, svgInk, apply, invert } from './svg-geometry.mjs'
import { extractRenderables } from './render-page-figures.mjs'
import { parseCliArgs } from '../lib/cli.mjs'
import { maskCode, shortcodes, walkMarkdown } from '../lib/content.mjs'
import { decodeHtmlEntities, openTagRe, htmlAttribute } from '../lib/html.mjs'

let cli
try {
  cli = parseCliArgs(process.argv.slice(2), { boolFlags: ['json', 'status'], valueFlags: ['near'] })
} catch (error) {
  console.error(`check-figure-overlaps: ${error.message}`)
  console.error('usage: node tools/figures/check-figure-overlaps.mjs [--status] [--json] [--near N] [path…]')
  process.exit(2)
}
const asJson = cli.bool('json')
const statusMode = cli.bool('status')
const NEAR = Number(cli.flag('near') ?? 0)
const roots = cli.positional.length ? cli.positional : ['content']

const BUILDERS = { graph: buildGraph, numberline: buildNumberLine, figure: buildFigure }

// ---------------------------------------------------------------------------
// geometry: tight text boxes + segment/rect intersection

/** a graph-core text element's tight box (see svg-geometry textBox) */
const specTextBox = (el) => textBox({
  text: el.text, size: Number(el.attrs.fontSize || 13), x: Number(el.attrs.x), y: Number(el.attrs.y),
  anchor: el.attrs.textAnchor, italic: el.attrs.fontStyle === 'italic',
})

const grow = ([a, b, c, d], p) => [a - p, b - p, c + p, d + p]
const boxesOverlap = (p, q) => p[0] < q[2] && q[0] < p[2] && p[1] < q[3] && q[1] < p[3]

/** does segment a-b intersect axis-aligned box bb? (Liang–Barsky) */
function segHitsBox(a, b, bb) {
  const d = [b[0] - a[0], b[1] - a[1]]
  let t0 = 0, t1 = 1
  for (const [p, q] of [
    [-d[0], a[0] - bb[0]], [d[0], bb[2] - a[0]],
    [-d[1], a[1] - bb[1]], [d[1], bb[3] - a[1]],
  ]) {
    if (p === 0) { if (q < 0) return false; continue }
    const r = q / p
    if (p < 0) { if (r > t1) return false; t0 = Math.max(t0, r) }
    else { if (r < t0) return false; t1 = Math.min(t1, r) }
  }
  return t0 <= t1
}

/** stroke segments worth protecting text from (grid lines excluded) */
function strokeSegments(els) {
  const segs = []
  for (const el of els) {
    const { tag, attrs } = el
    if (tag === 'line') {
      if (Number(attrs.strokeWidth) < 1) continue // faint gridline
      segs.push({ seg: [[+attrs.x1, +attrs.y1], [+attrs.x2, +attrs.y2]], kind: attrs.strokeDasharray ? 'dashed line' : 'line' })
    } else if (tag === 'polyline' || tag === 'polygon') {
      const pts = String(attrs.points).trim().split(/\s+/).map((p) => p.split(',').map(Number))
      for (let i = 1; i < pts.length; i++) segs.push({ seg: [pts[i - 1], pts[i]], kind: tag === 'polygon' ? 'arrowhead' : 'curve' })
      if (tag === 'polygon' && pts.length > 2) segs.push({ seg: [pts.at(-1), pts[0]], kind: 'arrowhead' })
    } else if (tag === 'ellipse') {
      const cx = +attrs.cx, cy = +attrs.cy, rx = +attrs.rx, ry = +attrs.ry
      let prev = null
      for (let i = 0; i <= 36; i++) {
        const t = (i / 36) * 2 * Math.PI
        const q = [cx + rx * Math.cos(t), cy + ry * Math.sin(t)]
        if (prev) segs.push({ seg: [prev, q], kind: 'circle' })
        prev = q
      }
    } else if (tag === 'circle') {
      const cx = +attrs.cx, cy = +attrs.cy, r = +attrs.r
      let prev = null
      for (let i = 0; i <= 12; i++) {
        const t = (i / 12) * 2 * Math.PI
        const q = [cx + r * Math.cos(t), cy + r * Math.sin(t)]
        if (prev) segs.push({ seg: [prev, q], kind: 'point' })
        prev = q
      }
    }
    else if (tag === 'path') {
      // Elliptical arcs (circle rims, possibly gap-split) are walked via the
      // standard endpoint-to-center conversion. smoothCurve beziers are not:
      // spline interpolation is bounded by its through points, which the
      // authoring rules keep on grid geometry.
      const arcRe = /M ([\d.-]+) ([\d.-]+) A ([\d.-]+) ([\d.-]+) 0 ([01]) ([01]) ([\d.-]+) ([\d.-]+)/g
      for (const m of String(attrs.d).matchAll(arcRe)) {
        const [x0, y0, rx, ry, large, sweep, x1, y1] = m.slice(1).map(Number)
        let prev = [x0, y0]
        for (const q of arcPoints(x0, y0, rx, ry, 0, large, sweep, x1, y1)) {
          segs.push({ seg: [prev, q], kind: 'circle' })
          prev = q
        }
      }
    }
  }
  return segs
}

/** how deep the segment's inside chunk cuts into the box, in px */
function segDepth(a, b, bb) {
  const d = [b[0] - a[0], b[1] - a[1]]
  let t0 = 0, t1 = 1
  for (const [p, q] of [
    [-d[0], a[0] - bb[0]], [d[0], bb[2] - a[0]],
    [-d[1], a[1] - bb[1]], [d[1], bb[3] - a[1]],
  ]) {
    if (p === 0) { if (q < 0) return 0; continue }
    const r = q / p
    if (p < 0) t0 = Math.max(t0, r); else t1 = Math.min(t1, r)
  }
  if (t0 > t1) return 0
  const m = [(a[0] + d[0] * (t0 + t1) / 2), (a[1] + d[1] * (t0 + t1) / 2)]
  return Math.max(0, Math.min(m[0] - bb[0], bb[2] - m[0], m[1] - bb[1], bb[3] - m[1]))
}

/** a text's box corners in root space (its box is local when it carries a rotation m) */
const corners = ({ bb, m }) => [[bb[0], bb[1]], [bb[2], bb[1]], [bb[2], bb[3]], [bb[0], bb[3]]].map((q) => (m ? apply(m, q) : q))

/** penetration depth of two text boxes (0 = apart); separating axes when either is rotated */
function boxDepth(p, q) {
  if (!p.m && !q.m) {
    if (!boxesOverlap(p.bb, q.bb)) return 0
    return Math.min(Math.min(p.bb[2], q.bb[2]) - Math.max(p.bb[0], q.bb[0]), Math.min(p.bb[3], q.bb[3]) - Math.max(p.bb[1], q.bb[1]))
  }
  const P = corners(p), Q = corners(q)
  let depth = Infinity
  for (const poly of [P, Q]) {
    for (let i = 0; i < 2; i++) {
      const e = [poly[i + 1][0] - poly[i][0], poly[i + 1][1] - poly[i][1]]
      const len = Math.hypot(...e) || 1
      const ax = [-e[1] / len, e[0] / len]
      const proj = (pts) => pts.map(([x, y]) => x * ax[0] + y * ax[1])
      const a = proj(P), b = proj(Q)
      const o = Math.min(Math.max(...a), Math.max(...b)) - Math.max(Math.min(...a), Math.min(...b))
      if (o <= 0) return 0
      depth = Math.min(depth, o)
    }
  }
  return depth
}

// Cuts at or under 3px are cosmetic: the tight box already over-reserves a
// digit's real ink (0.72em ascent covers the tallest glyph, not the average),
// so a ≤3px cut clips a box corner without touching a stroke of the glyph —
// the same tolerance print art shows where a curve tail passes an axis
// number. Anything deeper reads as ink-through-ink and fails — EXCEPT a
// solid stroke crossing a tick digit, which print art simply draws over (a
// curve hugging the axis crosses the digit row in the source books too);
// those are reported as tolerated, never gated. Dashed strokes gap behind
// digits in the engine, so a dashed crossing IS a defect and stays gated.
const GRAZE = 3

/**
 * Every overlap on one figure — the core both passes share.
 *   texts: [{ text, bb, m?, id? }]  bb in root space, or local to rotation m
 *   segs:  [{ seg, kind }]           root space
 * `tolerate(t, kind)` marks a stroke crossing as print-tolerated;
 * `exempt(t, s)` returns the name of an exemption that clears one segment.
 * Both stay in the report (JSON) but never count as an overlap.
 */
function overlaps(texts, segs, { tolerate = () => false, exempt = () => null } = {}) {
  const found = []
  for (let i = 0; i < texts.length; i++) {
    for (let j = i + 1; j < texts.length; j++) {
      if (texts[i].id !== undefined && texts[i].id === texts[j].id) continue // chunks of one <text>
      const depth = boxDepth(texts[i], texts[j])
      if (depth > 0) found.push({ kind: 'text-text', a: texts[i].text, b: texts[j].text, depth })
    }
  }
  for (const t of texts) {
    const inv = t.m ? invert(t.m) : null
    const deepest = new Map()
    for (const s of segs) {
      const [a, b] = inv ? s.seg.map((q) => apply(inv, q)) : s.seg
      if (!segHitsBox(a, b, t.bb)) continue
      const depth = segDepth(a, b, t.bb)
      const why = exempt(t, s)
      const key = `${s.kind}\u0000${why ?? ''}`
      if (depth > (deepest.get(key)?.depth ?? 0)) deepest.set(key, { kind: s.kind, why, depth })
    }
    for (const { kind, why, depth } of deepest.values()) {
      const c = { kind: `text-${kind}`, a: t.text, depth, tolerated: !why && tolerate(t, kind) }
      if (why) c.exempt = why
      found.push(c)
    }
  }
  return found.map((c) => ({ ...c, graze: c.depth < GRAZE || !!c.tolerated || !!c.exempt }))
}

function collisions(built) {
  const texts = built.els.filter((e) => e.tag === 'text')
  // Tick digits are the smallest font on the board; labels and axis letters
  // run at the base size. On a digit-only board every text is a "digit",
  // which is exactly right — there are no labels to protect.
  const sizes = texts.map((t) => Number(t.attrs.fontSize))
  const maxSize = Math.max(...sizes, 0)
  const boxes = texts.map((t) => ({ text: t.text, bb: grow(specTextBox(t), NEAR), digit: Number(t.attrs.fontSize) < maxSize }))
  return overlaps(boxes, strokeSegments(built.els), { tolerate: (t, kind) => t.digit && kind !== 'dashed line' })
}

// ---------------------------------------------------------------------------
// inline SVG: hand-written figures, read from the markup itself
//
// Gating since September 28, 2026, when the corpus was cleared (39 figures
// fixed). Setting this false makes inline findings report-only again.
const INLINE_SVG_GATES = true

/** a tick label: a bare number, fraction, or π multiple */
const TICK_LABEL = /^[−–+-]?(?:\d+(?:[.,]\d+)?|\d+\/\d+|\d*π(?:\/\d+)?|[½⅓⅔¼¾])$/
/** the number-line endpoint glyphs */
const BRACKET = /^[()[\]]$/

/**
 * The narrow exemptions, each drawn from a rendered corpus figure:
 *   - 'bracket on axis': a lone ( ) [ ] glyph straddling a horizontal solid
 *     line, and the short tick that line carries under the glyph — the
 *     book's number-line endpoint convention draws the glyph ON the axis,
 *     over the endpoint's own tick (IA 2.5–2.7, IA 7.6, EA 2.7);
 *   - 'own tick': a tick label crossed by its own tick mark — a short,
 *     solid, axis-aligned line through the label's own centre line (the
 *     spec checker's digit-on-its-tick tolerance; no corpus figure needs it
 *     today, so a label that starts touching its tick is not reported).
 * Nothing else is exempt: a curve or plotted line through a tick digit, two
 * tick labels crowding the origin, or a label on a plotted point is a
 * reported finding.
 */
function inlineExemption(t, s) {
  if (s.tag !== 'line' || s.dashed || !s.axisAligned) return null
  const [[x1, y1], [x2, y2]] = s.seg
  const len = Math.hypot(x2 - x1, y2 - y1)
  if (t.axisY !== undefined) {
    if (s.axisAligned === 'h' && Math.abs(y1 - t.axisY) < 0.5) return 'bracket on axis'
    if (s.axisAligned === 'v' && len <= TICK_MAX && Math.min(y1, y2) <= t.axisY && Math.max(y1, y2) >= t.axisY) return 'bracket on axis'
  }
  if (TICK_LABEL.test(t.text) && len <= TICK_MAX) {
    const cx = (t.bb[0] + t.bb[2]) / 2, cy = (t.bb[1] + t.bb[3]) / 2
    if (s.axisAligned === 'v' && Math.abs(x1 - cx) <= (t.bb[2] - t.bb[0]) / 2) return 'own tick'
    if (s.axisAligned === 'h' && Math.abs(y1 - cy) <= (t.bb[3] - t.bb[1]) / 2) return 'own tick'
  }
  return null
}
/** longest line that still reads as a tick mark (corpus ticks: 6–12 px) */
const TICK_MAX = 12

/**
 * The axis a bracket glyph sits on: a solid horizontal line running
 * through the glyph's body (not along its top or bottom edge) and past
 * both of its sides.
 */
function bracketAxis(t, ink) {
  if (t.m || !BRACKET.test(t.text)) return undefined
  const [x0, y0, x1, y1] = t.bb
  for (const s of ink) {
    if (s.tag !== 'line' || s.dashed || s.axisAligned !== 'h') continue
    const y = s.seg[0][1]
    const lo = Math.min(s.seg[0][0], s.seg[1][0]), hi = Math.max(s.seg[0][0], s.seg[1][0])
    if (y > y0 + 1 && y < y1 - 1 && lo <= x0 && hi >= x1) return y
  }
  return undefined
}

function inlineCollisions(svgText) {
  const { viewBox, texts, strokes } = svgInk(svgText)
  const boxes = texts.map((t) => ({ text: t.text, bb: grow(t.box, NEAR), m: t.m, id: t.id }))
  const ink = strokes.filter((s) => !s.faint)
  for (const t of boxes) t.axisY = bracketAxis(t, ink)
  const found = overlaps(boxes, ink, { exempt: inlineExemption })
  if (viewBox) {
    // an inline <svg> clips to its viewport: text past the edge is cut off
    const [vx, vy, vw, vh] = viewBox
    for (const t of boxes) {
      const pts = corners(t)
      const xs = pts.map((q) => q[0]), ys = pts.map((q) => q[1])
      const out = Math.max(vx - Math.min(...xs), vy - Math.min(...ys), Math.max(...xs) - (vx + vw), Math.max(...ys) - (vy + vh))
      if (out > 0) found.push({ kind: 'outside viewBox', a: t.text, depth: out, graze: out < GRAZE })
    }
  }
  return found
}

// ---------------------------------------------------------------------------
// figure discovery, one page at a time

function figureSpecs(src) {
  const specs = []
  for (const { params, inner, closed } of shortcodes(src, 'apfigure')) {
    if (!closed) continue
    specs.push({ kind: params.kind || 'graph', json: inner.trim(), where: 'apfigure' })
  }
  for (const { params, inner, closed } of shortcodes(src, 'multiplechoice')) {
    if (!closed || params.mode !== 'graph') continue
    inner.split(/^===OPT===$/m).forEach((opt, i) => {
      const body = opt.trim()
      if (!body.startsWith('{')) return // the lint rejects a non-spec option; nothing here to build
      specs.push({ kind: null, json: body, where: `mc option ${i}` })
    })
  }
  // Legacy prerendered figures: the page ships their pasted SVG, so what is
  // checked here is the spec-first RE-RENDER each will get when its page is
  // converted (playbook: "the recorded data-spec JSON is the spec"). Their
  // findings are reported as a separate, non-gating class.
  const divRe = /<div[^>]*class="ap-figure"[^>]*data-spec=(?:"([^"]*)"|'([^']*)')/g
  for (const m of src.matchAll(divRe)) {
    specs.push({ kind: null, json: decodeHtmlEntities(m[1] ?? m[2]), where: 'legacy div', legacy: true })
  }
  // The oldest form of all: an `ap-figure` div holding hand-written SVG with
  // no `data-spec` at all. Nothing here can build it, so it is invisible to
  // every geometry gate — which is exactly why the queue has to count it. A
  // page carrying one is NOT converted, however many spec-first figures sit
  // beside it.
  let unspecced = 0
  for (const m of src.matchAll(openTagRe('div'))) {
    if (/class="ap-figure"/.test(m[0]) && !htmlAttribute(m[0], 'data-spec')) unspecced++
  }
  return { specs, unspecced }
}

// ---------------------------------------------------------------------------
// --status: the conversion queue, derived from the content itself
if (statusMode) {
  const rows = []
  for (const file of roots.flatMap((root) => walkMarkdown(root))) {
    const src = maskCode(readFileSync(file, 'utf8'))
    const { specs, unspecced } = figureSpecs(src)
    const legacy = specs.filter((s) => s.legacy).length
    const specFirst = specs.length - legacy
    if (!specs.length && !unspecced) continue // no figures — nothing to convert
    const behind = legacy + unspecced
    const state = behind === 0 ? 'converted' : specFirst === 0 ? 'TODO' : 'mixed'
    rows.push({ file, specFirst, legacy, unspecced, state })
  }
  if (asJson) {
    console.log(JSON.stringify({ pages: rows }, null, 2))
  } else {
    for (const r of rows) {
      const parts = []
      if (r.specFirst) parts.push(`${r.specFirst} spec-first`)
      if (r.legacy) parts.push(`${r.legacy} legacy`)
      if (r.unspecced) parts.push(`${r.unspecced} hand-written SVG (no spec)`)
      console.log(`${r.state.padEnd(9)} ${r.file}  (${parts.join(', ')})`)
    }
    const todo = rows.filter((r) => r.state !== 'converted')
    const unspecced = rows.reduce((n, r) => n + r.unspecced, 0)
    console.log(`\n${rows.length} page(s) with figures: `
      + `${rows.length - todo.length} converted, ${todo.length} still carrying legacy or pre-spec figures.`)
    if (unspecced) {
      console.log(`${unspecced} of those are hand-written SVG with no spec at all — `
        + 'reconstruct the spec from the drawing (no data-spec to copy), or extend graph-core if the shape has no primitive.')
    }
  }
  process.exit(0)
}

let figures = 0, dirty = 0, grazeOnly = 0, failed = 0
let legacyFigures = 0, legacyDirty = 0
let inlineFigures = 0, inlineDirty = 0, inlineGrazeOnly = 0
const report = []
const inlineReport = []
for (const file of roots.flatMap((root) => walkMarkdown(root))) {
  const src = maskCode(readFileSync(file, 'utf8'))
  const { specs } = figureSpecs(src)
  // Hand-written inline SVG, numbered by the line its <svg> opens on — the
  // same L<line> render-page-figures.mjs names its PNG, so a finding opens
  // straight onto its picture.
  for (const { line, text } of extractRenderables(src).svgs) {
    inlineFigures++
    let found
    try {
      found = inlineCollisions(text)
    } catch (e) {
      inlineDirty++
      inlineReport.push({ file, line, error: e.message })
      continue
    }
    if (!found.length) continue
    if (found.every((c) => c.graze)) inlineGrazeOnly++
    else inlineDirty++
    inlineReport.push({ file, line, aria: ((text.match(/aria-label="([^"]*)"/) || [])[1] || '').slice(0, 70), found })
  }
  for (const { kind, json, where, legacy } of specs) {
    if (legacy) legacyFigures++
    else figures++
    let spec, built
    try {
      spec = JSON.parse(json)
      const k = kind ?? spec.kind ?? spec.type ?? 'graph'
      built = BUILDERS[k](spec)
    } catch (e) {
      failed++
      report.push({ file, where, error: e.message })
      continue
    }
    const found = collisions(built)
    if (found.length) {
      if (legacy) { if (!found.every((c) => c.graze)) legacyDirty++ }
      else if (found.every((c) => c.graze)) grazeOnly++
      else dirty++
      report.push({ file, where, legacy, aria: (spec.ariaLabel || '').slice(0, 70), found })
    }
  }
}

if (asJson) {
  console.log(JSON.stringify({
    figures, dirty, grazeOnly, legacyFigures, legacyDirty, failed, report,
    inline: { gates: INLINE_SVG_GATES, figures: inlineFigures, dirty: inlineDirty, grazeOnly: inlineGrazeOnly, report: inlineReport },
  }, null, 2))
} else {
  for (const r of inlineReport) {
    if (!r.error && r.found.every((c) => c.graze)) continue
    console.log(`\n${r.file}:${r.line} (inline svg)`)
    if (r.error) { console.log(`  ⚠ failed to read: ${r.error}`); continue }
    console.log(`  aria: ${r.aria}…`)
    for (const c of r.found.filter((c) => !c.graze)) {
      console.log(`  ${INLINE_SVG_GATES ? '✗' : '⚠'} ${c.kind} (${c.depth.toFixed(1)}px): ${JSON.stringify(c.a)}${c.b ? ` ⟷ ${JSON.stringify(c.b)}` : ''}`)
    }
  }
  for (const r of report) {
    if (!r.error && r.found.every((c) => c.graze)) continue // grazes stay out of the console noise
    console.log(`\n${r.file} (${r.where}${r.legacy ? ', re-render preview' : ''})`)
    if (r.error) { console.log(`  ✗ failed to build: ${r.error}`); continue }
    console.log(`  aria: ${r.aria}…`)
    for (const c of r.found.filter((c) => !c.graze)) {
      console.log(`  ${r.legacy ? '⚠' : '✗'} ${c.kind} (${c.depth.toFixed(1)}px): ${JSON.stringify(c.a)}${c.b ? ` ⟷ ${JSON.stringify(c.b)}` : ''}`)
    }
  }
  console.log(`\n${figures} spec-first figure(s) checked: ${figures - dirty - grazeOnly} clean, `
    + `${dirty} with real overlaps, ${grazeOnly} with only ≤${GRAZE}px grazes or print-tolerated digit crossings.`)
  console.log(`${legacyFigures} legacy figure(s) previewed as spec-first re-renders: `
    + `${legacyDirty} would need label work at conversion (⚠, non-gating).`)
  console.log(`${inlineFigures} inline SVG figure(s) checked: ${inlineFigures - inlineDirty - inlineGrazeOnly} clean, `
    + `${inlineDirty} with overlaps, ${inlineGrazeOnly} with only ≤${GRAZE}px grazes or exempt crossings`
    + `${INLINE_SVG_GATES ? '.' : ' (⚠ report-only: not yet gating).'}`)
  if (failed) console.log(`${failed} spec(s) failed to build.`)
}
process.exit(failed || dirty || (INLINE_SVG_GATES && inlineDirty) ? 1 : 0)
