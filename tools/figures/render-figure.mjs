/**
 * render-figure.mjs — print a spec as standalone SVG, for QA and for the
 * legacy side-by-side comparison `figures:convert` makes.
 *
 * NEW figures are authored as `apfigure` shortcodes (the spec JSON is the
 * page content and `<ap-figure>` renders it in the browser) — never by
 * pasting this tool's output: the `<div class="ap-figure" data-spec>` it
 * prints is the LEGACY form that `figures:status` counts as the conversion
 * backlog. Use it to eyeball a spec, or to reproduce an old figure's SVG.
 *
 *   node tools/figures/render-figure.mjs graph '{"ariaLabel":"…","lines":[{"slope":2,"intercept":1}]}'
 *   node tools/figures/render-figure.mjs numberline '{"ariaLabel":"…","min":-5,"max":5,"marker":{"at":3,"type":"paren"},"shade":"right"}'
 *   node tools/figures/render-figure.mjs figure '{"ariaLabel":"…","polygons":[{"points":[[0,0],[4,0],[0,3]],"edgeLabels":["b","c","a"],"rightAngles":[0]}]}'
 *
 * JSON property names follow the graph-core builder contracts. Prints the SVG
 * to stdout.
 */
import { toSvgString, buildGraph, buildNumberLine, buildFigure } from '../../assets/js/lib/math/graph-core.mjs';

const builders = { graph: buildGraph, numberline: buildNumberLine, figure: buildFigure };
const [, , type, json] = process.argv;
if (!builders[type] || !json) {
  console.error('usage: node tools/figures/render-figure.mjs <graph|numberline|figure> \'<json spec>\'');
  process.exit(2);
}
const props = JSON.parse(json);
const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
// Single-quoted attribute value: JSON's double quotes stay readable.
const escSpecAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&#39;');
// `color: null` omits the style attribute, so the figure inherits the page
// text color and stays visible in dark mode. This used to be a string replace
// of the exact literal ` style="color:#111"` — which would have started
// silently doing nothing the day that default changed.
let svg = toSvgString(props, { builder: builders[type], color: null });
const aria = props.ariaLabel ? ` role="img" aria-label="${escAttr(props.ariaLabel)}"` : ' role="img"';
svg = svg.replace('<svg ', `<svg${aria} `);
// data-spec records the generating type + JSON so every pasted figure stays
// reproducible and lintable — keep the attribute when pasting into content.
const spec = escSpecAttr(JSON.stringify({ type, ...props }));
console.log(`<div class="ap-figure" data-spec='${spec}'>\n${svg}\n</div>`);
