/**
 * convert-figures.mjs — mechanical legacy-figure → `apfigure` conversion, with
 * the old-vs-new render diff the migration actually turns on.
 *
 *   node tools/figures/convert-figures.mjs --dry-run content/math/<book>/<chapter>
 *   node tools/figures/convert-figures.mjs content/math/<book>/<chapter>/03-section.md
 *
 * A legacy figure is a `<div class="ap-figure" data-spec='…'>` wrapping the SVG
 * some earlier engine froze. Its `data-spec` IS the spec, so the rewrite is
 * mechanical: drop the legacy `"type"` key into the shortcode's `kind`
 * attribute, print the rest as the shortcode body, and keep a blank line on
 * both sides (playbook §3 — a welded `<ap-figure>` swallows the shortcodes
 * that follow it).
 *
 * The part that is NOT mechanical is what the re-render does. The pasted SVG
 * was frozen by whatever engine was current when it was authored, so
 * converting replays the spec through TODAY's builders. Drift in label
 * placement or font size is expected and is the new render being more faithful
 * to the spec (the engine now honors `labelSide`, and the font floor scales a
 * dense board up). Drift in GEOMETRY is a conversion bug. This tool separates
 * the two so a 100-figure chapter does not have to be eyeballed to find the one
 * that moved a curve:
 *
 *   =  identical      byte-identical re-render
 *   ~  label drift    same geometry, text moved / resized / re-worded
 *   !! GEOMETRY       stroke or shape changed — investigate before shipping
 *
 * `--dry-run` writes nothing and prints the report alone. Exit status is 1 if
 * any figure shows geometry drift or fails to build, so the conversion of a
 * whole chapter can be gated on it.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { toSvgString, buildGraph, buildNumberLine, buildFigure } from '../../assets/js/lib/math/graph-core.mjs'
import { openTagSource, htmlAttribute, decodeHtmlEntities } from '../lib/html.mjs'

const BUILDERS = { graph: buildGraph, numberline: buildNumberLine, figure: buildFigure }

/**
 * One legacy figure block: the opening div (whose `>` may sit inside quoted
 * JSON — `openTagSource` walks quoted runs whole), the pasted SVG, and the
 * closing `</div>` on its own line. Generated figures never nest a div, so the
 * first closer is the right one.
 */
const BLOCK_RE = new RegExp(`${openTagSource('div')}[\\s\\S]*?\\n<\\/div>`, 'gi')

/** `data-spec` as authored: single-quoted, with `&`, `<`, and `'` escaped. */
const decodeSpecAttr = decodeHtmlEntities

// ---------------------------------------------------------------------------
// SVG comparison. Both sides come from `toSvgString`, one element per line, so
// a line parser reads them exactly — no HTML parser is a dependency here.
const ELEMENT_RE = /<(\w+)\s([^>]*?)(?:\/>|>([\s\S]*?)<\/\1>)/g

export function parseSvgElements(svg) {
  const els = []
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>[\s\S]*$/, '')
  for (const m of inner.matchAll(ELEMENT_RE)) {
    const attrs = {}
    for (const a of m[2].matchAll(/([\w-]+)="([^"]*)"/g)) attrs[a[1]] = a[2]
    els.push({ tag: m[1], attrs, text: m[3] })
  }
  return els
}

/** Coordinates differing below a twentieth of a pixel are the same ink. */
const round = (v) => {
  const n = Number(v)
  return Number.isFinite(n) ? String(Math.round(n * 20) / 20) : String(v)
}

const normalize = ({ tag, attrs }) => `${tag} ` + Object.keys(attrs).sort()
  .map((k) => `${k}=${round(attrs[k])}`).join(' ')

/** the leftovers on each side after cancelling identically-drawn elements */
function diffElements(a, b) {
  const bucket = new Map()
  for (const el of b) {
    const k = normalize(el)
    if (!bucket.has(k)) bucket.set(k, [])
    bucket.get(k).push(el)
  }
  const onlyA = []
  for (const el of a) {
    const k = normalize(el)
    const pool = bucket.get(k)
    if (pool?.length) pool.pop()
    else onlyA.push(el)
  }
  return { a: onlyA, b: [...bucket.values()].flat() }
}

/**
 * Is every leftover explained by the engine GAPPING a dashed guide?
 *
 * The current engine emits a dashed asymptote or guide line in pieces where it
 * would otherwise print through label ink or a tick digit — a gap in a dash
 * pattern is invisible, so this is the same line, drawn the way print art
 * draws it. Structurally it is one `<line>` replaced by two or three collinear
 * sub-segments of itself, which a naive element diff calls a geometry change
 * and a reviewer then chases. Solid strokes never gap (a solid curve with
 * chunks missing reads as dashing, which is a mathematical claim), so a split
 * with no `stroke-dasharray` stays a real difference.
 */
function isDashGapping(oldEls, newEls) {
  if (!oldEls.length || !newEls.length) return false
  const isDashedLine = (e) => e.tag === 'line' && e.attrs['stroke-dasharray']
  if (!oldEls.every(isDashedLine) || !newEls.every(isDashedLine)) return false
  const style = (e) => normalize({ tag: e.tag, attrs: Object.fromEntries(
    Object.entries(e.attrs).filter(([k]) => !['x1', 'y1', 'x2', 'y2'].includes(k)),
  ) })
  const pt = (e, n) => [Number(e.attrs[`x${n}`]), Number(e.attrs[`y${n}`])]
  const within = (piece, whole) => {
    const [A, B] = [pt(whole, 1), pt(whole, 2)]
    const d = [B[0] - A[0], B[1] - A[1]]
    const len2 = d[0] * d[0] + d[1] * d[1]
    if (!len2) return false
    return [pt(piece, 1), pt(piece, 2)].every((P) => {
      const v = [P[0] - A[0], P[1] - A[1]]
      const off = Math.abs(v[0] * d[1] - v[1] * d[0]) / Math.sqrt(len2) // distance from the line
      const t = (v[0] * d[0] + v[1] * d[1]) / len2
      return off <= 0.5 && t >= -0.02 && t <= 1.02
    })
  }
  // every new piece lies on some old line of the same style, and every old
  // line gave up at least one piece (nothing vanished outright)
  const covered = new Set()
  for (const piece of newEls) {
    const host = oldEls.findIndex((o) => style(o) === style(piece) && within(piece, o))
    if (host < 0) return false
    covered.add(host)
  }
  return covered.size === oldEls.length
}

/** multiset difference, as a count plus a couple of examples */
function diffCounts(a, b) {
  const counts = new Map()
  for (const k of a) counts.set(k, (counts.get(k) ?? 0) + 1)
  for (const k of b) counts.set(k, (counts.get(k) ?? 0) - 1)
  const only = { a: [], b: [] }
  for (const [k, n] of counts) {
    for (let i = 0; i < Math.abs(n); i++) (n > 0 ? only.a : only.b).push(k)
  }
  return only
}

/**
 * Classify one re-render against the SVG it replaces.
 *
 * Geometry is every non-text element; the label layer is the `<text>` set. A
 * text element that only moved is drift; a text element whose CONTENT changed
 * (a tick that stopped being drawn, a re-worded label) is reported too — same
 * class, but it is the kind worth reading, so it is named separately.
 */
export function compareRenders(oldSvg, newSvg) {
  const oldEls = parseSvgElements(oldSvg), newEls = parseSvgElements(newSvg)
  const geom = (els) => els.filter((e) => e.tag !== 'text')
  const textsOf = (els) => els.filter((e) => e.tag === 'text')
  const g = diffElements(geom(oldEls), geom(newEls))
  const oldT = textsOf(oldEls), newT = textsOf(newEls)
  const words = diffCounts(oldT.map((t) => t.text), newT.map((t) => t.text))
  const placement = diffCounts(oldT.map(normalize), newT.map(normalize))
  const viewBoxOld = (oldSvg.match(/viewBox="([^"]*)"/) ?? [])[1]
  const viewBoxNew = (newSvg.match(/viewBox="([^"]*)"/) ?? [])[1]
  const geometryDrift = g.a.length > 0 || g.b.length > 0
  const gapped = geometryDrift && isDashGapping(g.a, g.b)
  const labelDrift = placement.a.length > 0 || placement.b.length > 0
  return {
    verdict: geometryDrift && !gapped ? 'geometry'
      : gapped ? 'gapped'
      : labelDrift || viewBoxOld !== viewBoxNew ? 'label' : 'identical',
    geometry: { a: g.a.map(normalize), b: g.b.map(normalize) },
    words,
    movedTexts: placement.a.length,
    viewBox: viewBoxOld === viewBoxNew ? null : [viewBoxOld, viewBoxNew],
  }
}

// ---------------------------------------------------------------------------
/**
 * Is a spec's `labelSide`/`labelAt` pin doing any work?
 *
 * The playbook prefers unpinned labels — the engine places them now, and the
 * hand-chosen pins predate that — but "carries a pin" is not by itself a
 * finding: most pins name the side the engine would have picked anyway, and
 * deleting those is free. The ones that MOVE a label are the review, and the
 * only way to tell the two apart is to render both. So render both:
 * `redundant` means the pin can be deleted with no pixel changing, and
 * `load-bearing` means dropping it re-places a label and someone has to look.
 *
 * Returns null when the spec carries no pin at all.
 */
export function classifyPins(props, builder) {
  const stripped = JSON.parse(JSON.stringify(props), (k, v) => (
    k === 'labelSide' || k === 'labelAt' ? undefined : v
  ))
  if (JSON.stringify(stripped) === JSON.stringify(props)) return null
  try {
    return toSvgString(stripped, { builder, color: null })
      === toSvgString(props, { builder, color: null }) ? 'redundant' : 'load-bearing'
  } catch {
    // A pin the engine cannot do without (an unknown side name it only reaches
    // through the pinned path) is as load-bearing as one gets.
    return 'load-bearing'
  }
}

/**
 * Every `labelSide`/`labelAt` pin in a spec, as a list of [containerPath, key]
 * addresses that can be deleted one at a time. Order is deterministic
 * (document order of the JSON), so tidying is reproducible.
 */
function pinPaths(node, path = []) {
  if (Array.isArray(node)) return node.flatMap((v, i) => pinPaths(v, [...path, i]))
  if (!node || typeof node !== 'object') return []
  const here = []
  for (const [k, v] of Object.entries(node)) {
    if (k === 'labelSide' || k === 'labelAt') here.push([path, k])
    else here.push(...pinPaths(v, [...path, k]))
  }
  return here
}

const withoutPin = (props, [path, key]) => {
  const copy = JSON.parse(JSON.stringify(props))
  let node = copy
  for (const step of path) node = node[step]
  delete node[key]
  return copy
}

/**
 * Delete the pins that are not doing anything.
 *
 * `classifyPins` answers the question for a spec as a whole; this answers it
 * per pin, because a spec routinely mixes the two — one `labelSide` that moves
 * a label beside two that merely name the side the engine picks unaided.
 * Deleting a redundant pin is free by construction: the pin is dropped only
 * when the re-render is byte-identical, checked one pin at a time against the
 * spec as it stands, so removals can never combine into a change. What is left
 * behind is the honest set — every remaining pin moves a label, which is the
 * set a reviewer should actually read.
 */
export function tidySpecPins(props, builder) {
  let current = props
  let render
  try {
    render = toSvgString(current, { builder, color: null })
  } catch {
    return { spec: props, removed: 0, kept: pinPaths(props).length }
  }
  let removed = 0
  // Re-derive the addresses each round: a deletion shifts nothing here (only
  // keys are dropped, never array entries), but re-reading keeps this honest
  // if that ever changes.
  for (let i = 0; i < pinPaths(current).length;) {
    const candidate = withoutPin(current, pinPaths(current)[i])
    let out
    try {
      out = toSvgString(candidate, { builder, color: null })
    } catch {
      i++
      continue
    }
    if (out === render) { current = candidate; removed++ } else i++
  }
  return { spec: current, removed, kept: pinPaths(current).length }
}

/**
 * Strip the redundant pins from every `apfigure` body on a page.
 *
 * The converter leaves a page spec-first but pin-for-pin as authored, and the
 * playbook then asks for the redundant ones to go by hand. By hand is how a
 * load-bearing pin gets deleted by mistake, so this does it the only safe way:
 * render, delete, re-render, keep the deletion only if nothing moved.
 */
export function tidyPage(src) {
  const rows = []
  const out = src.replace(/(\{\{< apfigure kind="(\w+)" >\}\}\n)([\s\S]*?)(\n\{\{< \/apfigure >\}\})/g,
    (block, open, kind, body, close) => {
      if (!BUILDERS[kind]) return block
      let props
      try {
        props = JSON.parse(body)
      } catch {
        return block
      }
      const { spec, removed, kept } = tidySpecPins(props, BUILDERS[kind])
      if (!removed) return block
      rows.push({ aria: props.ariaLabel, removed, kept })
      return `${open}${JSON.stringify(spec)}${close}`
    })
  return { out, rows }
}

/**
 * Rewrite one page's legacy figures, returning the new source and one report
 * row per figure. Pure — the caller decides whether to write.
 */
export function convertPage(src) {
  const rows = []
  const out = src.replace(BLOCK_RE, (block) => {
    const open = block.slice(0, block.indexOf('>') + 1)
    const raw = htmlAttribute(open, 'data-spec')
    if (!/class="ap-figure"/.test(open) || !raw) return block // not a figure div
    let spec
    try {
      spec = JSON.parse(decodeSpecAttr(raw))
    } catch (e) {
      rows.push({ verdict: 'error', error: `data-spec does not parse: ${e.message}` })
      return block
    }
    const { type, ...props } = spec
    const kind = type ?? 'graph'
    if (!BUILDERS[kind]) {
      rows.push({ verdict: 'error', error: `unknown figure type "${kind}"` })
      return block
    }
    let newSvg
    try {
      newSvg = toSvgString(props, { builder: BUILDERS[kind], color: null })
    } catch (e) {
      rows.push({ verdict: 'error', aria: props.ariaLabel, error: `spec does not build: ${e.message}` })
      return block
    }
    rows.push({
      ...compareRenders(block, newSvg),
      aria: props.ariaLabel,
      pinned: classifyPins(props, BUILDERS[kind]),
      oldSvg: block.slice(block.indexOf('<svg'), block.lastIndexOf('</svg>') + 6),
      newSvg,
    })
    return `{{< apfigure kind="${kind}" >}}\n${JSON.stringify(props)}\n{{< /apfigure >}}`
  })
  // Blank line on both sides of every shortcode: the pasted div was an HTML
  // block Goldmark isolated on its own; `<ap-figure>` is a custom element and
  // welds to the paragraph around it if the blank lines are missing.
  // Exactly one blank line, not "at least one": the legacy divs were pasted
  // over the years with one or two blank lines after `</div>`, and carrying
  // that inconsistency into the shortcode form makes every converted page's
  // diff carry noise no reader can act on.
  const spaced = out
    .replace(/([^\n])\n(\{\{< apfigure )/g, '$1\n\n$2')
    .replace(/(\{\{< \/apfigure >\}\})\n([^\n])/g, '$1\n\n$2')
    .replace(/\n{3,}(\{\{< apfigure )/g, '\n\n$1')
    .replace(/(\{\{< \/apfigure >\}\})\n{3,}/g, '$1\n\n')
  return { out: spaced, rows }
}

// ---------------------------------------------------------------------------
const mdFiles = (root) => {
  if (statSync(root).isFile()) return [root]
  const out = []
  for (const name of readdirSync(root)) {
    const p = join(root, name)
    if (statSync(p).isDirectory()) out.push(...mdFiles(p))
    else if (name.endsWith('.md')) out.push(p)
  }
  return out.sort()
}

const MARK = { identical: '=', label: '~', gapped: '~', geometry: '!!', error: 'xx' }

/**
 * The side-by-side page the migration is actually signed off from.
 *
 * The element diff proves a re-render is byte-identical; it cannot say whether
 * a figure that legitimately drifted still READS right. Those are the ones
 * worth a human's eyes, so the gallery carries every non-identical pair — old
 * on the left, new on the right — at the size the page renders them.
 */
function galleryHtml(pairs) {
  const cells = pairs.map(({ file, r }) => `
  <figure>
    <figcaption><b>${r.verdict}</b> — ${escapeHtml(r.aria ?? '')}<br><small>${escapeHtml(file)}</small></figcaption>
    <div class="pair">
      <div><span>was</span>${r.oldSvg}</div>
      <div><span>now</span>${r.newSvg}</div>
    </div>
  </figure>`).join('\n')
  return `<!doctype html><meta charset="utf-8"><title>figure conversion diff</title>
<style>
  body { font: 14px/1.5 system-ui, sans-serif; margin: 2rem; color: #111; background: #fff }
  figure { margin: 0 0 2.5rem; border-top: 1px solid #ccc; padding-top: .75rem }
  figcaption { margin-bottom: .5rem }
  .pair { display: flex; gap: 2rem; align-items: flex-start }
  .pair > div { flex: 1 }
  .pair span { display: block; font-weight: 700; color: #666 }
  svg { max-width: 340px; height: auto }
</style>
${cells}
`
}

const escapeHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * `--tidy-pins`: the post-conversion pass. Never fails a build — a page with
 * nothing to drop simply reports nothing.
 */
function tidyPins(roots, dryRun) {
  let dropped = 0, touched = 0
  for (const file of roots.flatMap(mdFiles)) {
    const src = readFileSync(file, 'utf8')
    const { out, rows } = tidyPage(src)
    if (!rows.length) continue
    console.log(`\n${file}`)
    for (const r of rows) {
      console.log(`  −${r.removed} pin(s)${r.kept ? `, ${r.kept} load-bearing kept` : ''}  ${(r.aria ?? '').slice(0, 60)}`)
      dropped += r.removed
    }
    touched += rows.length
    if (!dryRun && out !== src) writeFileSync(file, out)
  }
  console.log(`\n${dryRun ? 'would drop' : 'dropped'} ${dropped} redundant pin(s) across ${touched} figure(s); every render is byte-identical.`)
  return 0
}

function main(argv) {
  const dryRun = argv.includes('--dry-run')
  const galleryIx = argv.indexOf('--gallery')
  const galleryPath = galleryIx >= 0 ? argv[galleryIx + 1] : null
  const roots = argv.filter((a, i) => !a.startsWith('--') && (galleryIx < 0 || i !== galleryIx + 1))
  if (!roots.length) {
    console.error('usage: node tools/figures/convert-figures.mjs [--dry-run] [--tidy-pins] [--gallery out.html] <path…>')
    return 2
  }
  if (argv.includes('--tidy-pins')) return tidyPins(roots, dryRun)
  let converted = 0, bad = 0
  const drifted = []
  for (const file of roots.flatMap(mdFiles)) {
    const src = readFileSync(file, 'utf8')
    const { out, rows } = convertPage(src)
    if (!rows.length) continue
    console.log(`\n${file}`)
    for (const r of rows) {
      const aria = (r.aria ?? '').slice(0, 64)
      console.log(`  ${MARK[r.verdict].padEnd(2)} ${aria}`)
      if (r.error) console.log(`     ${r.error}`)
      if (r.verdict === 'geometry') {
        for (const g of r.geometry.a.slice(0, 3)) console.log(`     was: ${g}`)
        for (const g of r.geometry.b.slice(0, 3)) console.log(`     now: ${g}`)
      }
      if (r.verdict === 'gapped') {
        console.log(`     dashed guide now gapped behind label ink (${r.geometry.a.length} → ${r.geometry.b.length} pieces)`)
      }
      if (r.words?.a.length) console.log(`     text: ${r.words.a.join(' | ')} → ${r.words.b.join(' | ')}`)
      if (r.viewBox) console.log(`     viewBox ${r.viewBox[0]} → ${r.viewBox[1]}`)
      if (r.pinned === 'redundant') console.log('     labelSide/labelAt pins are redundant — delete them, the engine picks the same placement')
      if (r.pinned === 'load-bearing') console.log('     labelSide/labelAt pins MOVE a label — review whether the engine should place it instead')
      if (r.verdict === 'geometry' || r.verdict === 'error') bad++
      if (r.verdict !== 'identical' && r.newSvg) drifted.push({ file, r })
    }
    converted += rows.filter((r) => r.verdict !== 'error').length
    if (!dryRun && out !== src) writeFileSync(file, out)
  }
  const tally = dryRun ? 'would convert' : 'converted'
  console.log(`\n${tally} ${converted} figure(s); ${bad} need investigation.`)
  if (galleryPath) {
    writeFileSync(galleryPath, galleryHtml(drifted))
    console.log(`${drifted.length} drifted pair(s) written to ${galleryPath} — inspect before shipping.`)
  }
  return bad ? 1 : 0
}

if (import.meta.url === `file://${process.argv[1]}`) process.exit(main(process.argv.slice(2)))
