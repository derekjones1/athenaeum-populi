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
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { buildGraph, buildNumberLine, buildFigure } from '../../assets/js/lib/math/graph-core.mjs'
import { measureTextWidth } from '../../assets/js/lib/math/text-metrics.mjs'
import { shortcodes } from '../lib/content.mjs'
import { decodeHtmlEntities, openTagRe, htmlAttribute } from '../lib/html.mjs'

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const statusMode = args.includes('--status')
const nearIx = args.indexOf('--near')
const NEAR = nearIx >= 0 ? Number(args[nearIx + 1]) : 0
const roots = args.filter((a, i) => !a.startsWith('--') && (nearIx < 0 || i !== nearIx + 1))
if (!roots.length) roots.push('content')

const BUILDERS = { graph: buildGraph, numberline: buildNumberLine, figure: buildFigure }

// ---------------------------------------------------------------------------
// geometry: tight text boxes + segment/rect intersection
const FONT_ASCENT = 0.72 // em above the baseline actually inked by this stack
const FONT_DESCENT = 0.2

function textBox(el) {
  const size = Number(el.attrs.fontSize || 13)
  const w = measureTextWidth(el.text, size, { italic: el.attrs.fontStyle === 'italic' })
  const X = Number(el.attrs.x), Y = Number(el.attrs.y)
  const anchor = el.attrs.textAnchor
  const x0 = anchor === 'middle' ? X - w / 2 : anchor === 'end' ? X - w : X
  return [x0, Y - FONT_ASCENT * size, x0 + w, Y + FONT_DESCENT * size]
}

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
        segs.push(...arcSegments(x0, y0, rx, ry, large, sweep, x1, y1))
      }
    }
  }
  return segs
}

/** sample an SVG elliptical arc (rotation 0) into short segments */
function arcSegments(x0, y0, rx, ry, large, sweep, x1, y1) {
  // endpoint → center parameterization, SVG spec B.2.4 (phi = 0)
  const dx = (x0 - x1) / 2, dy = (y0 - y1) / 2
  const L = (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry)
  if (L > 1) { const s = Math.sqrt(L); rx *= s; ry *= s }
  const sign = large === sweep ? -1 : 1
  const num = rx * rx * ry * ry - rx * rx * dy * dy - ry * ry * dx * dx
  const den = rx * rx * dy * dy + ry * ry * dx * dx
  const co = sign * Math.sqrt(Math.max(0, num / den))
  const cxp = co * (rx * dy) / ry, cyp = co * (-ry * dx) / rx
  const cx = cxp + (x0 + x1) / 2, cy = cyp + (y0 + y1) / 2
  const angleOf = (px, py) => Math.atan2((py - cyp) / ry, (px - cxp) / rx)
  const th0 = angleOf(dx, dy)
  let dTh = angleOf(-dx, -dy) - th0
  if (sweep === 0 && dTh > 0) dTh -= 2 * Math.PI
  if (sweep === 1 && dTh < 0) dTh += 2 * Math.PI
  const segs = []
  const n = Math.max(4, Math.ceil(Math.abs(dTh) / (Math.PI / 36)))
  let prev = null
  for (let i = 0; i <= n; i++) {
    const th = th0 + (dTh * i) / n
    const q = [cx + rx * Math.cos(th), cy + ry * Math.sin(th)]
    if (prev) segs.push({ seg: [prev, q], kind: 'circle' })
    prev = q
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

function collisions(built) {
  const texts = built.els.filter((e) => e.tag === 'text')
  const found = []
  // Tick digits are the smallest font on the board; labels and axis letters
  // run at the base size. On a digit-only board every text is a "digit",
  // which is exactly right — there are no labels to protect.
  const sizes = texts.map((t) => Number(t.attrs.fontSize))
  const maxSize = Math.max(...sizes, 0)
  const isDigit = (t) => Number(t.attrs.fontSize) < maxSize
  const boxes = texts.map((t) => ({ t, bb: grow(textBox(t), NEAR) }))
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const p = boxes[i].bb, q = boxes[j].bb
      if (!boxesOverlap(p, q)) continue
      const depth = Math.min(
        Math.min(p[2], q[2]) - Math.max(p[0], q[0]),
        Math.min(p[3], q[3]) - Math.max(p[1], q[1]),
      )
      found.push({ kind: 'text-text', a: boxes[i].t.text, b: boxes[j].t.text, depth })
    }
  }
  const segs = strokeSegments(built.els)
  for (const { t, bb } of boxes) {
    const deepest = new Map()
    for (const { seg, kind } of segs) {
      if (!segHitsBox(seg[0], seg[1], bb)) continue
      const depth = segDepth(seg[0], seg[1], bb)
      if (depth > (deepest.get(kind) ?? 0)) deepest.set(kind, depth)
    }
    for (const [kind, depth] of deepest) {
      const tolerated = isDigit(t) && kind !== 'dashed line'
      found.push({ kind: `text-${kind}`, a: t.text, depth, tolerated })
    }
  }
  return found.map((c) => ({ ...c, graze: c.depth < GRAZE || !!c.tolerated }))
}

// ---------------------------------------------------------------------------
// figure discovery, one page at a time
const mdFiles = (root) => {
  const st = statSync(root)
  if (st.isFile()) return [root]
  const out = []
  for (const name of readdirSync(root)) {
    const p = join(root, name)
    const s = statSync(p)
    if (s.isDirectory()) out.push(...mdFiles(p))
    else if (name.endsWith('.md')) out.push(p)
  }
  return out.sort()
}

function figureSpecs(src) {
  const specs = []
  let prerendered = 0
  for (const { params, inner, closed } of shortcodes(src, 'apfigure')) {
    if (!closed) continue
    specs.push({ kind: params.kind || 'graph', json: inner.trim(), where: 'apfigure' })
  }
  for (const { params, inner, closed } of shortcodes(src, 'multiplechoice')) {
    if (!closed || params.mode !== 'graph') continue
    inner.split(/^===OPT===$/m).forEach((opt, i) => {
      const body = opt.trim()
      if (!body.startsWith('{')) { prerendered++; return } // pre-spec <svg> option: no spec to build
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
  return { specs, prerendered, unspecced }
}

// ---------------------------------------------------------------------------
// --status: the conversion queue, derived from the content itself
if (statusMode) {
  const rows = []
  for (const file of roots.flatMap(mdFiles)) {
    const src = readFileSync(file, 'utf8')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/`[^`\n]*`/g, ' ')
    const { specs, prerendered, unspecced } = figureSpecs(src)
    const legacy = specs.filter((s) => s.legacy).length
    const specFirst = specs.length - legacy
    if (!specs.length && !prerendered && !unspecced) continue // no figures — nothing to convert
    const behind = legacy + prerendered + unspecced
    const state = behind === 0 ? 'converted' : specFirst === 0 ? 'TODO' : 'mixed'
    rows.push({ file, specFirst, legacy, prerendered, unspecced, state })
  }
  if (asJson) {
    console.log(JSON.stringify({ pages: rows }, null, 2))
  } else {
    for (const r of rows) {
      const parts = []
      if (r.specFirst) parts.push(`${r.specFirst} spec-first`)
      if (r.legacy) parts.push(`${r.legacy} legacy`)
      if (r.prerendered) parts.push(`${r.prerendered} pre-spec option`)
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
let legacyFigures = 0, legacyDirty = 0, skippedPrerendered = 0
const report = []
for (const file of roots.flatMap(mdFiles)) {
  const src = readFileSync(file, 'utf8')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
  const { specs, prerendered } = figureSpecs(src)
  skippedPrerendered += prerendered
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
  console.log(JSON.stringify({ figures, dirty, grazeOnly, legacyFigures, legacyDirty, skippedPrerendered, failed, report }, null, 2))
} else {
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
  if (skippedPrerendered) console.log(`${skippedPrerendered} pre-spec <svg> option figure(s) carry no spec to check.`)
  if (failed) console.log(`${failed} spec(s) failed to build.`)
}
process.exit(failed || dirty ? 1 : 0)
