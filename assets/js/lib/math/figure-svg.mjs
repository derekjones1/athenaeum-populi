/**
 * The one implementation of "builder output → SVG children", shared by every
 * renderer of graph-core figures: `<ap-figure>` and `<graph-plot>` build DOM
 * nodes from it (`appendFigure`), and `toSvgString` serializes the same node
 * tree for QA rasterization. Three renderers used to each walk `g.els` with
 * their own camelCase→kebab copy; the tick-digit knockout made the walk
 * structural (a mask and a masked group), which is exactly the kind of logic
 * that drifts when it is copied, so it lives here once.
 *
 * `g.els` stays a FLAT list of `{ tag, attrs, text? }` — tests, the overlap
 * checker, and the fit pass all read it that way. Nesting is decided here:
 *
 *   knockout null → the flat list exactly as emitted (byte-identical output
 *   for a figure with no tick digits).
 *
 *   knockout { texts } → three parts, so every stroke passes BEHIND the tick
 *   digits, cut by a glyph-shaped 1.5px halo, on any background (tinted
 *   callouts, a graded multiple-choice button) with no page colour in the
 *   engine:
 *     1. a luminance <mask>: an oversized white rect (a later viewBox growth
 *        in ap-figure's real-font fit needs no mask update) minus a black,
 *        3px-stroked copy of every knockout digit;
 *     2. a <g mask> holding every stroke element in paint order;
 *     3. everything else in order — texts and plotted dots (a dot stays
 *        unmasked so a digit's halo never nicks it) — with the knockout
 *        digits last.
 */

const SVGNS = 'http://www.w3.org/2000/svg'

/** element tags that are ink strokes, masked behind the tick digits */
const STROKE_TAGS = new Set(['line', 'polyline', 'polygon', 'ellipse', 'path'])

/** SVG attributes whose real spelling is camelCase; every other key is kebab-cased */
const CAMEL_ATTRS = new Set(['maskUnits'])

/** a builder attrs key (JavaScript style) → its SVG attribute name */
export const svgAttrName = (k) => (CAMEL_ATTRS.has(k) ? k : k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()))

// The mask spans far past any viewBox the fit passes can produce.
const MASK_BOUNDS = { x: '-10000', y: '-10000', width: '20000', height: '20000' }

/**
 * The node tree for one built figure: `[{ tag, attrs, text?, children? }]`.
 * `knockoutId` names the mask; it must be unique within the HTML document,
 * since many figures share one page.
 */
export function figureNodes(g, knockoutId) {
  const knockout = g.knockout
  if (!knockout) return g.els
  const digits = new Set(knockout.texts)
  const strokes = [], rest = []
  for (const el of g.els) {
    if (digits.has(el)) continue
    if (STROKE_TAGS.has(el.tag)) strokes.push(el)
    else rest.push(el)
  }
  const halo = knockout.texts.map(({ attrs, text }) => ({
    tag: 'text',
    attrs: {
      x: attrs.x, y: attrs.y, fontSize: attrs.fontSize,
      ...(attrs.textAnchor ? { textAnchor: attrs.textAnchor } : {}),
      ...(attrs.fontStyle ? { fontStyle: attrs.fontStyle } : {}),
      fill: '#000', stroke: '#000', strokeWidth: '3', strokeLinejoin: 'round', strokeLinecap: 'round',
    },
    text,
  }))
  return [
    {
      tag: 'mask',
      attrs: { id: knockoutId, maskUnits: 'userSpaceOnUse', ...MASK_BOUNDS },
      children: [{ tag: 'rect', attrs: { ...MASK_BOUNDS, fill: '#fff' } }, ...halo],
    },
    { tag: 'g', attrs: { mask: `url(#${knockoutId})` }, children: strokes },
    ...rest,
    ...knockout.texts,
  ]
}

// Many <svg> share one HTML document, so every mask id in the browser is
// fresh. (`toSvgString` names its own: one figure per standalone document.)
let knockoutSequence = 0

/** Append a built figure's elements to an `<svg>` element (browser only). */
export function appendFigure(svg, g) {
  const id = g.knockout ? `ap-knockout-${++knockoutSequence}` : undefined
  const build = ({ tag, attrs, text, children }) => {
    const el = document.createElementNS(SVGNS, tag)
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(svgAttrName(k), v)
    if (text !== undefined) el.textContent = text
    if (children) for (const child of children) el.appendChild(build(child))
    return el
  }
  for (const node of figureNodes(g, id)) svg.appendChild(build(node))
}
