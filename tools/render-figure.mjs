/**
 * render-figure.mjs — author helper for NEW static figures.
 *
 * Hugo cannot run the graph-core geometry at template time, so authored
 * figures are inlined as prerendered SVG. Run this helper when authoring a new
 * figure, then paste its SVG output into the section.
 *
 *   node tools/render-figure.mjs graph '{"ariaLabel":"…","lines":[{"slope":2,"intercept":1}]}'
 *   node tools/render-figure.mjs numberline '{"ariaLabel":"…","min":-5,"max":5,"marker":{"at":3,"type":"paren"},"shade":"right"}'
 *   node tools/render-figure.mjs figure '{"ariaLabel":"…","polygons":[{"points":[[0,0],[4,0],[0,3]],"edgeLabels":["b","c","a"],"rightAngles":[0]}]}'
 *
 * JSON property names follow the graph-core builder contracts. Prints the SVG
 * to stdout.
 */
import { toSvgString, buildGraph, buildNumberLine, buildFigure } from '../assets/js/lib/graph-core.mjs';

const builders = { graph: buildGraph, numberline: buildNumberLine, figure: buildFigure };
const [, , type, json] = process.argv;
if (!builders[type] || !json) {
  console.error('usage: node tools/render-figure.mjs <graph|numberline|figure> \'<json spec>\'');
  process.exit(2);
}
const props = JSON.parse(json);
const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
// Single-quoted attribute value: JSON's double quotes stay readable.
const escSpecAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&#39;');
let svg = toSvgString(props, { builder: builders[type] });
const aria = props.ariaLabel ? ` role="img" aria-label="${escAttr(props.ariaLabel)}"` : ' role="img"';
// drop the hardcoded style="color:#111" so the figure inherits the page text
// color and stays visible in dark mode.
svg = svg.replace(' style="color:#111"', '').replace('<svg ', `<svg${aria} `);
// data-spec records the generating type + JSON so every pasted figure stays
// reproducible and lintable — keep the attribute when pasting into content.
const spec = escSpecAttr(JSON.stringify({ type, ...props }));
console.log(`<div class="ap-figure" data-spec='${spec}'>\n${svg}\n</div>`);
