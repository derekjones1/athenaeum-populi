#!/usr/bin/env node
/**
 * constants-table — Appendix D's table of fundamental physical constants,
 * written from the Chemistry book's constants data so that no value is typed
 * by hand.
 *
 *   node tools/source/constants-table.mjs --write   rewrite the table's rows on the page
 *   node tools/source/constants-table.mjs --check   fail when a cell of the page differs from the data file
 *
 * The data file is `data/chemistry/constants.json`. Its `quantities` are
 * copied digit for digit from NIST's listing of the CODATA adjustment kept
 * beside the tests (`tools/fixtures/codata/`); `constants-table.test.mjs`
 * holds the file to that copy. Each row of the table names the quantities it
 * prints and the number the SOURCE prints in that place (`sourcePrint`): a
 * value is rounded to the count of significant figures the source's row
 * shows, so the table keeps its shape and no width is chosen here.
 *
 * The source's own table mixes the exact values that have defined the SI
 * since 2019 with measured values from older adjustments, which no longer
 * agree with them (its Faraday constant is not its Avogadro number times its
 * unit of charge). One adjustment throughout is the book's "one data set"
 * rule applied to constants (Derek, November 12, 2026). `npm run
 * verify:source-tables` runs the same comparison (`compareConstantsTable`)
 * on every `npm test`.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCliArgs } from '../lib/cli.mjs';
import { pageTables } from '../lib/source-tables.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const CONSTANTS_PATH = 'data/chemistry/constants.json';
export const CONSTANTS_PAGE = 'content/physical-sciences/chemistry/appendices/d-fundamental-physical-constants.md';
export const CONSTANTS_TABLE_TITLE = 'Fundamental Physical Constants';
export const CONSTANTS_TABLE_HEADER = Object.freeze(['Name and Symbol', 'Value']);

export function loadConstants(root = repositoryRoot) {
  return JSON.parse(readFileSync(path.join(root, CONSTANTS_PATH), 'utf8'));
}

/** A value as NIST's listing prints it — "-1.758 820 008 38 e11", "96 485.332 12..." — as one plain numeral string. */
export const listedValue = (text) => String(text).replace(/\.\.\./g, '').replace(/\s+/g, '');

/** A numeral string ("1.6605402e-27", "22.41409") as an exact fraction `{ n, d }` of BigInts, its sign dropped. */
export function readExact(text) {
  const match = /^-?(\d+)(?:\.(\d+))?(?:e(-?\d+))?$/.exec(String(text));
  if (!match) throw new Error(`not a numeral: ${JSON.stringify(text)}`);
  const exponent = Number(match[3] ?? 0) - (match[2]?.length ?? 0);
  const digits = BigInt(match[1] + (match[2] ?? ''));
  return exponent >= 0 ? { n: digits * 10n ** BigInt(exponent), d: 1n } : { n: digits, d: 10n ** BigInt(-exponent) };
}

/** The count of significant figures a printed numeral shows (every digit of its mantissa from the first nonzero one). */
export function figuresOf(text) {
  const mantissa = String(text).replace(/^-/, '').replace(/e.*$/, '').replace('.', '').replace(/^0+/, '');
  if (!mantissa) throw new Error(`no significant figure in ${JSON.stringify(text)}`);
  return mantissa.length;
}

/** A positive fraction rounded half up to `figures` significant figures: `{ digits, exponent }`, value = 0.d₁d₂… × 10^exponent. */
export function roundExact({ n, d }, figures) {
  if (n <= 0n) throw new Error('a constant is positive');
  // The power of ten of the leading digit.
  let lead = String(n).length - String(d).length;
  const atLeast = (power) => (power >= 0 ? n >= d * 10n ** BigInt(power) : n * 10n ** BigInt(-power) >= d);
  while (!atLeast(lead)) lead -= 1;
  while (atLeast(lead + 1)) lead += 1;
  // n/d × 10^(figures − 1 − lead), rounded half up.
  const shift = figures - 1 - lead;
  const [top, bottom] = shift >= 0 ? [n * 10n ** BigInt(shift), d] : [n, d * 10n ** BigInt(-shift)];
  let digits = (2n * top + bottom) / (2n * bottom);
  if (String(digits).length > figures) { digits /= 10n; lead += 1; }
  return { digits: String(digits), lead };
}

/** One value of a row as an exact fraction: a listed quantity, or a product and quotient of listed quantities, times 10^scale. */
function exactValue(spec, quantities) {
  const listed = (name) => {
    if (!Object.hasOwn(quantities, name)) throw new Error(`constants.json lists no quantity ${JSON.stringify(name)}`);
    return readExact(quantities[name]);
  };
  let value = { n: 1n, d: 1n };
  for (const name of spec.quantity ? [spec.quantity] : spec.derive.multiply) { const q = listed(name); value = { n: value.n * q.n, d: value.d * q.d }; }
  for (const name of spec.derive?.divide ?? []) { const q = listed(name); value = { n: value.n * q.d, d: value.d * q.n }; }
  const scale = spec.scale ?? 0;
  return scale >= 0 ? { n: value.n * 10n ** BigInt(scale), d: value.d } : { n: value.n, d: value.d * 10n ** BigInt(-scale) };
}

/** One value as the page prints it, in TeX: `1.6605391 \times 10^{-27}`, or `22.41397` where the source prints a plain decimal. */
export function printedValue(spec, quantities) {
  const figures = figuresOf(spec.sourcePrint);
  const { digits, lead } = roundExact(exactValue(spec, quantities), figures);
  if (/e/.test(spec.sourcePrint)) {
    return `${digits[0]}${digits.length > 1 ? `.${digits.slice(1)}` : ''} \\times 10^{${lead}}`;
  }
  if (lead < 0 || lead >= figures) throw new Error(`${spec.sourcePrint}: a plain decimal of ${figures} figures cannot print a value with its leading digit at 10^${lead}`);
  return `${digits.slice(0, lead + 1)}${digits.length > lead + 1 ? `.${digits.slice(lead + 1)}` : ''}`;
}

/** The table's body, one `[name, value]` pair of cells per constant. */
export function constantRows(data) {
  return data.constants.map((row) => [
    row.name,
    row.cell.replace(/\{(\d)\}/g, (_, index) => printedValue(row.values[Number(index)], data.quantities)),
  ]);
}

/** The number the source prints in a value's place, in the page's TeX. */
function sourceValue(spec) {
  const [mantissa, exponent] = spec.sourcePrint.split('e');
  return exponent === undefined ? mantissa : `${mantissa} \\times 10^{${exponent}}`;
}

/**
 * The value cells that part from the source: `[source cell, page cell, name]`
 * in the page's Markdown, one per row whose 2022 value is not the number the
 * source prints. `verify-source-tables` reads the page against the pinned
 * CNXML with these as its deviations, so three things are held at once: the
 * source really prints `sourcePrint`, the page really prints the data
 * file's value, and every other cell of the table is still the source's.
 */
export function constantDeviations(data) {
  const fill = (row, print) => row.cell.replace(/\{(\d)\}/g, (_, index) => print(row.values[Number(index)]));
  return data.constants
    .map((row) => [fill(row, sourceValue), fill(row, (spec) => printedValue(spec, data.quantities)), row.name])
    .filter(([source, page]) => source !== page);
}

/** Split a table line into its cells; a cell holds no pipe on this page. */
const lineCells = (line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
const rowLine = (cells) => `| ${cells.join(' | ')} |`;

/** The page's table lines under the bold title: `{ start, end }` line indexes of the table. */
function tableSpan(lines) {
  const title = lines.findIndex((line) => line.trim() === `**${CONSTANTS_TABLE_TITLE}**`);
  if (title === -1) throw new Error(`no line **${CONSTANTS_TABLE_TITLE}** on the page`);
  let start = title + 1;
  while (start < lines.length && !lines[start].trim()) start += 1;
  let end = start;
  while (end < lines.length && lines[end].trim().startsWith('|')) end += 1;
  if (end - start < 2) throw new Error('no table follows the title');
  return { start, end };
}

/** Compare the page's table with the data file: `{ cells, errors }`. */
export function compareConstantsTable(markdown, data) {
  const errors = [];
  let cells = 0;
  if (!pageTables(markdown).tables.some((table) => table.title.replace(/\*/g, '').trim() === CONSTANTS_TABLE_TITLE)) {
    return { cells, errors: [`no table titled ${JSON.stringify(CONSTANTS_TABLE_TITLE)}`] };
  }
  const lines = markdown.split('\n');
  const { start, end } = tableSpan(lines);
  const header = lineCells(lines[start]);
  if (JSON.stringify(header) !== JSON.stringify(CONSTANTS_TABLE_HEADER)) errors.push(`the header is ${JSON.stringify(header)}, not ${JSON.stringify(CONSTANTS_TABLE_HEADER)}`);
  else cells += header.length;
  const got = lines.slice(start + 2, end).map(lineCells);
  const wanted = constantRows(data);
  if (got.length !== wanted.length) errors.push(`the table has ${got.length} row(s), the data file ${wanted.length} constant(s)`);
  for (let index = 0; index < Math.min(got.length, wanted.length); index += 1) {
    wanted[index].forEach((cell, column) => {
      if (got[index][column] === cell) cells += 1;
      else errors.push(`row ${index + 1} (${wanted[index][0]}), ${CONSTANTS_TABLE_HEADER[column]}: the page reads ${JSON.stringify(got[index][column])}, the data file gives ${JSON.stringify(cell)}`);
    });
    if (got[index].length !== wanted[index].length) errors.push(`row ${index + 1} (${wanted[index][0]}) has ${got[index].length} cell(s), not ${wanted[index].length}`);
  }
  return { cells, errors };
}

/** The page with the table's rows rewritten from the data file. */
export function rewriteConstantsTable(markdown, data) {
  const lines = markdown.split('\n');
  const { start, end } = tableSpan(lines);
  const table = [rowLine(CONSTANTS_TABLE_HEADER), `|${'---|'.repeat(CONSTANTS_TABLE_HEADER.length)}`, ...constantRows(data).map(rowLine)];
  return [...lines.slice(0, start), ...table, ...lines.slice(end)].join('\n');
}

function main(argv) {
  const cli = parseCliArgs(argv, { boolFlags: ['write', 'check'] });
  if (cli.bool('write') === cli.bool('check')) throw new Error('give exactly one of --write or --check');
  const data = loadConstants();
  const pagePath = path.join(repositoryRoot, CONSTANTS_PAGE);
  const markdown = readFileSync(pagePath, 'utf8');
  if (cli.bool('write')) {
    const rewritten = rewriteConstantsTable(markdown, data);
    if (rewritten !== markdown) writeFileSync(pagePath, rewritten);
    console.log(`✓ ${CONSTANTS_PAGE}: ${data.constants.length} rows ${rewritten === markdown ? 'already current' : 'written'}`);
    return;
  }
  const result = compareConstantsTable(markdown, data);
  if (result.errors.length) {
    for (const error of result.errors) console.error(`✖ ${error}`);
    console.error(`  ${result.errors.length} difference(s); run: node tools/source/constants-table.mjs --write`);
    process.exit(1);
  }
  console.log(`✓ ${CONSTANTS_PAGE}: ${result.cells} cells are the data file's`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`constants-table: ${error.message}`);
    process.exit(2);
  }
}
