#!/usr/bin/env node
/**
 * periodic-table — the Chemistry book's periodic table, drawn from its data.
 *
 *   node tools/figures/periodic-table.mjs --write   write the SVG and its manifest entry
 *   node tools/figures/periodic-table.mjs --check   fail when either differs from what --write would produce
 *
 * The book's atomic masses are `data/chemistry/elements.json` (IUPAC's
 * abridged standard atomic weights). The source's periodic table is a raster
 * image with four-figure masses printed in its pixels, so it cannot show
 * them; this tool draws the same table — the same boxes, color code, sample
 * box, and two rows of fifteen below the main table — from the data file,
 * and nothing in the drawing is typed here that the file holds.
 *
 * Output: `static/media/chemistry/periodic-table.svg`, served through the
 * `mediafigure` shortcode and the page rail's "Periodic table" control like
 * any vendored figure, and an entry `periodic-table` in
 * `data/media/chemistry.json` marked `generated` (vendor-media leaves such an
 * entry alone).
 *
 * Every coordinate is a whole number on a fixed pitch, so the file is the
 * same bytes on every machine and `--check` (run by the tests) can compare
 * it exactly. Text is set in the figure font stack and fitted with the
 * measured advances of assets/js/lib/math/text-metrics.mjs, with that
 * module's safety margin, so a name fits its box on a platform whose
 * sans-serif runs wider than Arial.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { measureTextWidth } from '../../assets/js/lib/math/text-metrics.mjs';
import { parseCliArgs } from '../lib/cli.mjs';
import { loadElements, printedMass } from '../lib/elements.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const FIGURE_STEM = 'periodic-table';
export const FIGURE_FILE = `static/media/chemistry/${FIGURE_STEM}.svg`;
export const MANIFEST_FILE = 'data/media/chemistry.json';

/* ------------------------------------------------------------- geometry */

const PITCH = 84; // one group across, one period down
const BOX = 82; // an element's box; the 2 px left over is the gap
const LEFT = 46; // room for the period numbers
const TOP = 104; // room for the title and the group numbers
const F_GAP = 30; // between period 7 and the two rows of fifteen
const WIDTH = LEFT + 18 * PITCH + 8;
const F_TOP = TOP + 7 * PITCH + F_GAP;
const LEGEND_TOP = F_TOP + 2 * PITCH + 46;
const SAMPLE = 190; // the enlarged hydrogen box
const HEIGHT = LEGEND_TOP + SAMPLE + 86;

const FONT = 'Helvetica, Arial, sans-serif';
// The widest a platform's sans-serif runs against the measured table
// (text-metrics.mjs FIT_SAFETY): a label must fit with this much to spare.
const FIT_SAFETY = 1.08;
const SIZE = Object.freeze({ number: 14, symbol: 27, mass: 15, name: 11 });

export const COLORS = Object.freeze({
  metal: '#f6efd4',
  metalloid: '#eadcee',
  nonmetal: '#dbe8e2',
  unclassified: '#ffffff',
  boxStroke: '#55575a',
  solid: '#111111',
  liquid: '#0a5c99',
  gas: '#8f1a14',
  text: '#111111',
  group: '#2b4a9b',
  period: '#75147c',
  series: '#c8102e',
  band: '#c5c9c8',
  keyHead: '#34549f',
  keyHeadText: '#ffffff',
  page: '#ffffff',
});

const CATEGORY_LABEL = Object.freeze({ metal: 'Metal', metalloid: 'Metalloid', nonmetal: 'Nonmetal', unclassified: 'Not classified' });
const STATE_LABEL = Object.freeze({ solid: 'Solid', liquid: 'Liquid', gas: 'Gas' });

const xOfGroup = (group) => LEFT + (group - 1) * PITCH;
const yOfPeriod = (period) => TOP + (period - 1) * PITCH;

/** The top-left corner of an element's box. The f-block rows sit under groups 4 to 18. */
export function boxOrigin(element, rowOf) {
  if (!element.series) return { x: xOfGroup(element.group), y: yOfPeriod(element.period) };
  const index = rowOf[element.series].indexOf(element.number);
  return { x: xOfGroup(4 + index), y: F_TOP + (element.series === 'lanthanide' ? 0 : PITCH) };
}

const escapeXml = (text) => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function text(x, y, content, { size, anchor = 'middle', weight = null, fill = COLORS.text, rotate = null } = {}) {
  const attributes = [`x="${x}"`, `y="${y}"`, `font-size="${size}"`];
  if (anchor !== 'start') attributes.push(`text-anchor="${anchor}"`);
  if (weight) attributes.push(`font-weight="${weight}"`);
  if (fill !== COLORS.text) attributes.push(`fill="${fill}"`);
  if (rotate !== null) attributes.push(`transform="rotate(${rotate} ${x} ${y})"`);
  return `<text ${attributes.join(' ')}>${escapeXml(content)}</text>`;
}

/** A straight arrow from (x1, y) to (x2, y) with a solid head at (x2, y). */
function arrow(x1, x2, y, { stroke = COLORS.text, width = 3 } = {}) {
  const direction = x2 > x1 ? 1 : -1;
  const head = 16;
  const base = x2 - direction * head;
  return `<line x1="${x1}" y1="${y}" x2="${base}" y2="${y}" stroke="${stroke}" stroke-width="${width}"/>`
    + `<polygon points="${x2},${y} ${base},${y - 7} ${base},${y + 7}" fill="${stroke}"/>`;
}

/**
 * The lines of an element's box, as data: what is printed, where, how large.
 * The drawing and the fit test both read this, so the test measures the
 * drawing itself.
 */
export function boxLabels(element, { x, y }) {
  const center = x + BOX / 2;
  return [
    { role: 'number', text: String(element.number), x: x + 4, y: y + 16, size: SIZE.number, anchor: 'start', fill: COLORS.text },
    { role: 'symbol', text: element.symbol, x: center, y: y + 43, size: SIZE.symbol, anchor: 'middle', weight: 'bold', fill: COLORS[element.state] },
    { role: 'mass', text: printedMass(element), x: center, y: y + 61, size: SIZE.mass, anchor: 'middle', fill: COLORS.text },
    { role: 'name', text: element.name, x: center, y: y + 76, size: SIZE.name, anchor: 'middle', fill: COLORS.text },
  ];
}

/** Every element's box origin and labels: `[{ element, x, y, labels }]`. */
export function layout(data) {
  const rowOf = {
    lanthanide: data.elements.filter((element) => element.series === 'lanthanide').map((element) => element.number),
    actinide: data.elements.filter((element) => element.series === 'actinide').map((element) => element.number),
  };
  return data.elements.map((element) => {
    const origin = boxOrigin(element, rowOf);
    return { element, ...origin, labels: boxLabels(element, origin) };
  });
}

/** A label's width in pixels on the widest platform the fit allows for. */
export const fittedWidth = (label) => measureTextWidth(label.text, label.size) * (label.weight === 'bold' ? 1.06 : 1) * FIT_SAFETY;

export const GEOMETRY = Object.freeze({ PITCH, BOX, LEFT, TOP, WIDTH, HEIGHT, F_TOP, LEGEND_TOP, SAMPLE });

/* -------------------------------------------------------------- drawing */

/** The figure as an SVG document (a string ending in a newline). */
export function periodicTableSvg(data) {
  const boxes = layout(data);
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" width="${WIDTH}" height="${HEIGHT}" font-family="${FONT}" fill="${COLORS.text}">`);
  out.push('<title>Periodic Table of the Elements</title>');
  out.push(`<rect width="${WIDTH}" height="${HEIGHT}" fill="${COLORS.page}"/>`);
  out.push(text(WIDTH / 2, 40, 'Periodic Table of the Elements', { size: 28, weight: 'bold' }));

  // Group numbers, each above the first box of its column.
  const topPeriod = new Map();
  for (const { element } of boxes) {
    if (element.series) continue;
    topPeriod.set(element.group, Math.min(topPeriod.get(element.group) ?? 8, element.period));
  }
  out.push(text(xOfGroup(1) + BOX / 2, TOP - 38, 'Group', { size: 22, weight: 'bold', fill: COLORS.group }));
  for (let group = 1; group <= 18; group += 1) {
    out.push(text(xOfGroup(group) + BOX / 2, yOfPeriod(topPeriod.get(group)) - 9, String(group), { size: 24, weight: 'bold', fill: COLORS.group }));
  }
  // Period numbers down the left side.
  out.push(text(18, TOP - 12, 'Period', { size: 22, weight: 'bold', fill: COLORS.period, anchor: 'start', rotate: -90 }));
  for (let period = 1; period <= 7; period += 1) {
    out.push(text(LEFT - 26, yOfPeriod(period) + BOX / 2 + 9, String(period), { size: 24, weight: 'bold', fill: COLORS.period }));
  }

  // The band behind the two rows of fifteen.
  out.push(`<rect x="${xOfGroup(4) - 6}" y="${F_TOP - 6}" width="${15 * PITCH + 10}" height="${2 * PITCH + 10}" fill="${COLORS.band}"/>`);

  for (const { element, x, y, labels } of boxes) {
    out.push(`<rect x="${x}" y="${y}" width="${BOX}" height="${BOX}" fill="${COLORS[element.category ?? 'unclassified']}" stroke="${COLORS.boxStroke}"/>`);
    for (const label of labels) out.push(text(label.x, label.y, label.text, label));
  }

  // The two boxes of group 3 that stand for the rows below, and the way to them.
  const seriesX = xOfGroup(3);
  const first = (series) => data.elements.find((element) => element.series === series);
  const last = (series) => data.elements.findLast((element) => element.series === series);
  for (const [series, period, mark] of [['lanthanide', 6, '*'], ['actinide', 7, '**']]) {
    const y = yOfPeriod(period);
    out.push(`<rect x="${seriesX}" y="${y}" width="${BOX}" height="${BOX}" fill="${COLORS.metal}" stroke="${COLORS.boxStroke}"/>`);
    out.push(text(seriesX + 4, y + 16, `${first(series).number}–${last(series).number}`, { size: SIZE.number, anchor: 'start' }));
    out.push(text(seriesX + BOX / 2, y + 46, `${first(series).symbol}–${last(series).symbol}`, { size: 22, weight: 'bold' }));
    out.push(text(seriesX + BOX / 2, y + 72, mark, { size: 22, weight: 'bold' }));
    out.push(text(xOfGroup(4) - 12, F_TOP + (period - 6) * PITCH + BOX / 2 + 14, mark, { size: 22, weight: 'bold', anchor: 'end' }));
  }
  out.push(`<rect x="${seriesX - 1}" y="${yOfPeriod(6) - 1}" width="${BOX + 2}" height="${PITCH + BOX + 2}" fill="none" stroke="${COLORS.series}" stroke-width="3"/>`);
  const elbowX = seriesX + BOX / 2;
  const elbowY = F_TOP + PITCH - 1;
  out.push(`<line x1="${elbowX}" y1="${yOfPeriod(7) + BOX + 2}" x2="${elbowX}" y2="${elbowY}" stroke="${COLORS.series}" stroke-width="3" stroke-linecap="square"/>`);
  out.push(arrow(elbowX, xOfGroup(4) - 6, elbowY, { stroke: COLORS.series }));

  // The enlarged box: what each line of a box is.
  const hydrogen = data.bySymbol.get('H');
  const sx = 250;
  const sy = LEGEND_TOP;
  out.push(`<rect x="${sx}" y="${sy}" width="${SAMPLE}" height="${SAMPLE}" fill="${COLORS[hydrogen.category]}" stroke="${COLORS.boxStroke}" stroke-width="2"/>`);
  out.push(text(sx + 12, sy + 44, String(hydrogen.number), { size: 40, anchor: 'start' }));
  out.push(text(sx + SAMPLE / 2, sy + 100, hydrogen.symbol, { size: 64, weight: 'bold', fill: COLORS[hydrogen.state] }));
  out.push(text(sx + SAMPLE / 2, sy + 140, printedMass(hydrogen), { size: 34 }));
  out.push(text(sx + SAMPLE / 2, sy + 174, hydrogen.name, { size: 28 }));
  out.push(text(sx - 232, sy + 28, 'Atomic', { size: 26, anchor: 'start' }));
  out.push(text(sx - 232, sy + 58, 'number', { size: 26, anchor: 'start' }));
  out.push(arrow(sx - 134, sx + 8, sy + 30));
  out.push(text(sx - 232, sy + 174, 'Name', { size: 26, anchor: 'start' }));
  out.push(arrow(sx - 150, sx + 30, sy + 165));
  out.push(text(sx + SAMPLE + 110, sy + 86, 'Symbol', { size: 26, anchor: 'start' }));
  out.push(arrow(sx + SAMPLE + 100, sx + SAMPLE / 2 + 34, sy + 78));
  out.push(text(sx + SAMPLE + 110, sy + 138, 'Atomic mass', { size: 26, anchor: 'start' }));
  out.push(arrow(sx + SAMPLE + 100, sx + SAMPLE / 2 + 62, sy + 129));

  // The color code: box shading by class, symbol color by state.
  const kx = xOfGroup(13);
  const ky = LEGEND_TOP - 16;
  const keyWidth = 6 * PITCH - 2;
  const keyHeight = SAMPLE + 54;
  out.push(`<rect x="${kx}" y="${ky}" width="${keyWidth}" height="${keyHeight}" fill="${COLORS.page}" stroke="${COLORS.keyHead}" stroke-width="2"/>`);
  out.push(`<rect x="${kx}" y="${ky}" width="${keyWidth}" height="40" fill="${COLORS.keyHead}"/>`);
  out.push(text(kx + keyWidth / 2, ky + 29, 'Color Code', { size: 24, weight: 'bold', fill: COLORS.keyHeadText }));
  Object.entries(CATEGORY_LABEL).forEach(([category, label], index) => {
    const y = ky + 58 + index * 44;
    out.push(`<rect x="${kx + 18}" y="${y}" width="32" height="32" fill="${COLORS[category]}" stroke="${COLORS.boxStroke}"/>`);
    out.push(text(kx + 62, y + 25, label, { size: 24, anchor: 'start' }));
  });
  out.push(text(kx + 262, ky + 74, 'Symbol color', { size: 18, anchor: 'start' }));
  Object.entries(STATE_LABEL).forEach(([state, label], index) => {
    out.push(text(kx + 262, ky + 112 + index * 44, label, { size: 24, weight: 'bold', fill: COLORS[state], anchor: 'start' }));
  });

  out.push(text(LEFT, HEIGHT - 14, `Atomic masses: IUPAC, ${data.sources.mass.title}. A mass in brackets is a mass number: the element has no standard atomic weight.`, { size: 16, anchor: 'start' }));
  out.push('</svg>');
  return `${out.join('\n')}\n`;
}

/** The figure's entry in the media manifest. */
export function manifestEntry() {
  return {
    generated: true,
    generator: 'tools/figures/periodic-table.mjs',
    data: 'data/chemistry/elements.json',
    kind: 'diagram',
    width: WIDTH,
    height: HEIGHT,
    variants: [{ width: WIDTH, height: HEIGHT, file: `${FIGURE_STEM}.svg` }],
    transparent: false,
    alt: '',
    caption: '',
  };
}

/** What `--write` would leave on disk, beside what is there: `{ svg, manifest, differences }`. */
export function plan(root = repositoryRoot) {
  const data = loadElements(root);
  const svg = periodicTableSvg(data);
  const manifestPath = path.join(root, MANIFEST_FILE);
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const differences = [];
  const figurePath = path.join(root, FIGURE_FILE);
  if (!existsSync(figurePath) || readFileSync(figurePath, 'utf8') !== svg) differences.push(`${FIGURE_FILE} is not what the data file draws`);
  if (JSON.stringify(manifest.figures[FIGURE_STEM]) !== JSON.stringify(manifestEntry())) differences.push(`${MANIFEST_FILE} has no current "${FIGURE_STEM}" entry`);
  // Sorted as vendor-media's writeManifest sorts, so either tool rewrites the file the same way.
  const figures = { ...manifest.figures, [FIGURE_STEM]: manifestEntry() };
  manifest.figures = Object.fromEntries(Object.keys(figures).sort().map((stem) => [stem, figures[stem]]));
  return { svg, manifest, manifestPath, figurePath, differences };
}

function main(argv) {
  const cli = parseCliArgs(argv, { boolFlags: ['write', 'check'] });
  if (cli.bool('write') === cli.bool('check')) throw new Error('give exactly one of --write or --check');
  const result = plan();
  if (cli.bool('check')) {
    if (result.differences.length) {
      for (const difference of result.differences) console.error(`✖ ${difference}`);
      console.error('  run: node tools/figures/periodic-table.mjs --write');
      process.exit(1);
    }
    console.log(`✓ ${FIGURE_FILE} is drawn from data/chemistry/elements.json`);
    return;
  }
  writeFileSync(result.figurePath, result.svg);
  writeFileSync(result.manifestPath, `${JSON.stringify(result.manifest, null, 2)}\n`);
  console.log(`✓ wrote ${FIGURE_FILE} (${WIDTH}×${HEIGHT}) and its entry in ${MANIFEST_FILE}`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`periodic-table: ${error.message}`);
    process.exit(2);
  }
}
