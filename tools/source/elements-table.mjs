#!/usr/bin/env node
/**
 * elements-table — Appendix A's table of the elements, written from the
 * Chemistry book's element data so that no atomic mass is typed by hand.
 *
 *   node tools/source/elements-table.mjs --write   rewrite the table's rows on the page
 *   node tools/source/elements-table.mjs --check   fail when a cell of the page differs from the data file
 *
 * The page is `content/physical-sciences/chemistry/appendices/a-the-periodic-table.md`;
 * the table is the one under the bold title below. The periodic-table figure
 * above it is drawn from the same file (tools/figures/periodic-table.mjs), so
 * the picture and the text table are one data set. `npm run
 * verify:source-tables` runs the same comparison (`compareElementsTable`) on
 * every `npm test`, in the place where every other reference table is held
 * to its source.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCliArgs } from '../lib/cli.mjs';
import { loadElements, printedMass } from '../lib/elements.mjs';
import { pageTables } from '../lib/source-tables.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const ELEMENTS_PAGE = 'content/physical-sciences/chemistry/appendices/a-the-periodic-table.md';
export const ELEMENTS_TABLE_TITLE = 'The elements of the periodic table above';
export const ELEMENTS_TABLE_HEADER = Object.freeze(['Atomic number', 'Symbol', 'Name', 'Atomic mass', 'Group', 'Period']);

/**
 * The group cell: a number, or — for an element of the two rows drawn below
 * the main table — no number, and the row it is drawn in. Those thirty
 * elements belong to no numbered group (IUPAC's table gives them none, and
 * the data file's `group` is null). Until November 14, 2026 the cell read
 * "3 (row of elements 89–103)", the column their row hangs from: read
 * against the book's own key term, "transition metal: element in groups
 * 3–12", that made uranium a transition metal (a blind solver's note on
 * Section 2.5's sort of inner transition metals).
 */
function groupCell(element, data) {
  if (!element.series) return String(element.group);
  const row = data.elements.filter((other) => other.series === element.series);
  return `— (row of elements ${row[0].number}–${row.at(-1).number})`;
}

/** The table's body, one array of cells per element. */
export function elementRows(data) {
  return data.elements.map((element) => [
    String(element.number), element.symbol, element.name, printedMass(element), groupCell(element, data), String(element.period),
  ]);
}

const rowLine = (cells) => `| ${cells.join(' | ')} |`;

/** Compare the page's table with the data file: `{ cells, errors }`. */
export function compareElementsTable(markdown, data) {
  const errors = [];
  let cells = 0;
  const table = pageTables(markdown).tables.find((candidate) => candidate.title.replace(/\*/g, '').trim() === ELEMENTS_TABLE_TITLE);
  if (!table) return { cells, errors: [`no table titled ${JSON.stringify(ELEMENTS_TABLE_TITLE)}`] };
  const header = table.header.map((cell) => cell.trim());
  if (JSON.stringify(header) !== JSON.stringify(ELEMENTS_TABLE_HEADER)) errors.push(`the header is ${JSON.stringify(header)}, not ${JSON.stringify(ELEMENTS_TABLE_HEADER)}`);
  else cells += header.length;
  const wanted = elementRows(data);
  if (table.rows.length !== wanted.length) errors.push(`the table has ${table.rows.length} row(s), the data file ${wanted.length} element(s)`);
  for (let index = 0; index < Math.min(table.rows.length, wanted.length); index += 1) {
    const got = table.rows[index].map((cell) => cell.trim());
    wanted[index].forEach((cell, column) => {
      if (got[column] === cell) cells += 1;
      else errors.push(`row ${index + 1} (${wanted[index][1]}), ${ELEMENTS_TABLE_HEADER[column]}: the page reads ${JSON.stringify(got[column])}, the data file ${JSON.stringify(cell)}`);
    });
    if (got.length !== wanted[index].length) errors.push(`row ${index + 1} (${wanted[index][1]}) has ${got.length} cell(s), not ${wanted[index].length}`);
  }
  return { cells, errors };
}

/** The page with the table's rows rewritten from the data file. */
export function rewriteElementsTable(markdown, data) {
  const lines = markdown.split('\n');
  const title = lines.findIndex((line) => line.trim() === `**${ELEMENTS_TABLE_TITLE}**`);
  if (title === -1) throw new Error(`no line **${ELEMENTS_TABLE_TITLE}** on the page`);
  let start = title + 1;
  while (start < lines.length && !lines[start].trim()) start += 1;
  let end = start;
  while (end < lines.length && lines[end].trim().startsWith('|')) end += 1;
  if (end - start < 2) throw new Error('no table follows the title');
  const table = [rowLine(ELEMENTS_TABLE_HEADER), `|${'---|'.repeat(ELEMENTS_TABLE_HEADER.length)}`, ...elementRows(data).map(rowLine)];
  return [...lines.slice(0, start), ...table, ...lines.slice(end)].join('\n');
}

function main(argv) {
  const cli = parseCliArgs(argv, { boolFlags: ['write', 'check'] });
  if (cli.bool('write') === cli.bool('check')) throw new Error('give exactly one of --write or --check');
  const data = loadElements();
  const pagePath = path.join(repositoryRoot, ELEMENTS_PAGE);
  const markdown = readFileSync(pagePath, 'utf8');
  if (cli.bool('write')) {
    const rewritten = rewriteElementsTable(markdown, data);
    if (rewritten !== markdown) writeFileSync(pagePath, rewritten);
    console.log(`✓ ${ELEMENTS_PAGE}: ${data.elements.length} rows ${rewritten === markdown ? 'already current' : 'written'}`);
    return;
  }
  const result = compareElementsTable(markdown, data);
  if (result.errors.length) {
    for (const error of result.errors.slice(0, 40)) console.error(`✖ ${error}`);
    console.error(`  ${result.errors.length} difference(s); run: node tools/source/elements-table.mjs --write`);
    process.exit(1);
  }
  console.log(`✓ ${ELEMENTS_PAGE}: ${result.cells} cells are the data file's`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`elements-table: ${error.message}`);
    process.exit(2);
  }
}
