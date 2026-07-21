/**
 * render-figure.mjs — author helper for NEW static figures.
 *
 * Hugo can't run the JS geometry (graph-core) at template time, so a Graph /
 * NumberLine / Figure is inlined as a prerendered <svg>. The converter does
 * this for migrated content; when authoring a BRAND-NEW figure by hand, run
 * this to produce the SVG block and paste it into your section.
 *
 *   node tools/render-figure.mjs graph '{"ariaLabel":"…","lines":[{"slope":2,"intercept":1}]}'
 *   node tools/render-figure.mjs numberline '{"ariaLabel":"…","min":-5,"max":5,"marker":{"at":3,"type":"paren"},"shade":"right"}'
 *   node tools/render-figure.mjs figure '{"ariaLabel":"…","polygons":[{"points":[[0,0],[4,0],[0,3]],"edgeLabels":["b","c","a"],"rightAngles":[0]}]}'
 *
 * Prop names match the old <Graph>/<NumberLine>/<Figure> components
 * (see assets/js/lib/graph-core.mjs). Prints the SVG to stdout.
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
let svg = toSvgString(props, { builder: builders[type] });
const aria = props.ariaLabel ? ` role="img" aria-label="${escAttr(props.ariaLabel)}"` : ' role="img"';
// drop the hardcoded style="color:#111" so the figure inherits the page text
// color and stays visible in dark mode.
svg = svg.replace(' style="color:#111"', '').replace('<svg ', `<svg${aria} `);
console.log(`<div class="ap-figure">\n${svg}\n</div>`);
