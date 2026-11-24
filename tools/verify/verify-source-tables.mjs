#!/usr/bin/env node
/**
 * verify-source-tables — hold every table cell of a reference page to the
 * pinned CNXML.
 *
 *   node tools/verify/verify-source-tables.mjs [--min-cells N]
 *
 * A reference page is data: Chemistry 2e's Appendix G is 403 rows that the
 * keyed exercises of chapters 5 and 16 are worked from, Appendix L 136
 * half-cell potentials. Nothing on such a page is graded, so no answer gate
 * reads it, and a digit that drifts — in transcription, or in a later hand
 * edit — would be a wrong answer chapters away with every gate green. This
 * tool is the agent-free reading: for every appendix page in the source map
 * it lays the module's `<table>`s beside the page's Markdown tables and
 * requires each source row to be a page row, in order, cell for cell.
 *
 * Cells are compared as skeletons (tools/lib/source-tables.mjs): the
 * characters with the typesetting taken away, so `10<sup>−27</sup>` matches
 * `$10^{-27}$`. A page cell that is not math is also compared with its sub-
 * and superscript runs marked, so `Al³⁺` cannot stand for `Al₃₊`.
 *
 * What a page may do to a source table, and how the tool follows it
 * (docs/subjects/chemistry.md "Appendices"):
 *   - a cell a `morerows` span carries down is repeated on each row;
 *   - a cell the source breaks across lines is one row per line, the row's
 *     other cells repeated;
 *   - a full-width group row is a row whose only filled cell is the group;
 *   - a table the print folds into side-by-side column sets is one list
 *     (`unfold` below), in the page's own order when the print's order is
 *     only its pagination (`anyOrder`: the rows are matched as a set);
 *   - an image in a cell is typed as text, or shown as a figure outside the
 *     table (`images`, a stem → the text, or '' for a figure);
 *   - a column of figures leaves the table with its heading (`droppedHeads`);
 *   - a footnote is a sentence below the table.
 * A cell the page writes differently ON PURPOSE — a corrected source defect,
 * a notation the skeleton cannot fold — is listed in `deviations` with its
 * reason; one that no longer applies fails as stale. A page table the source
 * does not have is named in `added` by its bold title. Appendix A's list of
 * the elements is such a table — the source's periodic table is an image —
 * and it is not left unread: `elements` holds it, cell for cell, to
 * `data/chemistry/elements.json`, the file the periodic-table figure is
 * drawn from and every molar mass is computed from
 * (tools/source/elements-table.mjs writes it).
 *
 * With a bundle absent the tool says which pages it could not read and
 * applies no rule, as verify-source-keys does; ATHENAEUM_REQUIRE_SOURCES=1
 * (CI) makes that a failure. `--min-cells` is a FLOOR on the cells confirmed,
 * so a run that silently reads nothing cannot pass.
 */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { integerFlag, parseCliArgs } from '../lib/cli.mjs';
import { loadElements } from '../lib/elements.mjs';
import { descendants, loadSourceLock, localName, parseXml } from '../lib/openstax-source.mjs';
import {
  mediaStem, moduleTables, pageSkeleton, pageTables, sourceFootnotes, sourceSkeleton,
} from '../lib/source-tables.mjs';
import { ELEMENTS_TABLE_TITLE, compareElementsTable } from '../source/elements-table.mjs';
import { compareConstantsTable, constantDeviations, loadConstants } from '../source/constants-table.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

/**
 * Per-module reading notes, keyed "<bundle>:<moduleId>".
 *
 * `deviations` are [source skeleton, page skeleton, reason]. The reason of a
 * corrected source defect names its erratum in docs/openstax-errata.md.
 */
export const TABLE_NOTES = Object.freeze({
  // Appendix A: the source's periodic table is an image. The page draws its
  // own from data/chemistry/elements.json and lists the same file as a table,
  // which is read against that file (`elements`), not against the CNXML.
  'chemistry-bundle:m68859': { added: [ELEMENTS_TABLE_TITLE], elements: true },
  // Appendix D: the source's table mixes the exact SI values of 2019 with
  // measured values of older adjustments. The page prints one adjustment
  // throughout, from data/chemistry/constants.json (NIST's CODATA listing).
  // The table is still read against the CNXML: `constants` supplies one
  // deviation per value the data file changes, from the source's number
  // recorded there to the number the page must print.
  // Appendix C: the source truncates a cubic foot, 28.3168… L, to 28.316;
  // Section 1.6's own table (m68683) prints the rounded 28.317. It also marks
  // two relations to the millimeter of mercury "(exact, definition)" that
  // are not exact; the page prints them without the mark.
  'chemistry-bundle:m68861': {
    deviations: [
      ['=28.316L', '=28.317L', 'erratum 3043: 1 ft³ = (0.3048 m)³ = 28.3168… L, which is 28.317 L at five figures; the source truncates'],
      ['=1mmHg(exact,definition)', '=1mmHg', 'erratum 3233: a torr is 1/760 atm, a millimeter of mercury about one part in seven million more; Section 9.1 says the two no longer correspond exactly'],
      ['=760mmHg(exact,definition)', '=760mmHg', 'erratum 3233: an atmosphere is exactly 760 torr, not exactly 760 mm Hg'],
    ],
  },
  'chemistry-bundle:m68862': { constants: true },
  'chemistry-bundle:m68863': {
    deviations: [
      ['6.088', '6.01', 'erratum 3299: the enthalpy of melting of ice is 6.01 kJ/mol, the value Section 10.3 of the source itself prints; 6.088 is a misprint'],
    ],
  },
  // Appendix G: the calcite row prints the values of dissolved calcium
  // carbonate (the NBS tables' "ai" row, the entropy's sign dropped); the
  // page prints the tables' calcite row.
  // Seven more rows disagree with themselves (free energy recomputed from
  // the row's enthalpy and entropy) and are corrected from the same tables.
  // Four more (November 23, 2026): two transposed enthalpies, an entropy of
  // 0.00, and a liquid's row carrying the solid's entropy; and Al(g), one
  // digit of the enthalpy, found by reading every row against the tables.
  'chemistry-bundle:m68865': {
    deviations: [
      ['-1220.0', '-1206.9', 'erratum 3377: −1219.97 kJ/mol is the enthalpy of formation of the dissolved ions; calcite is −1206.92 (NBS tables, 1982, p. 2-272)'],
      ['-1081.4', '-1128.8', 'erratum 3377: −1081.39 kJ/mol is the free energy of formation of the dissolved ions; calcite is −1128.79'],
      ['110.0', '92.9', 'erratum 3377: −110.0 J/(K·mol) is the entropy of the dissolved ions, printed without its sign; calcite is 92.9'],
      ['11.13', '111.3', 'erratum 3378: the entropy of I⁻(aq) is 111.3 J/(K·mol) (NBS tables, 1982, p. 2-52); the decimal point slipped'],
      ['95.65', '-95.65', 'erratum 3379: the enthalpy of formation of IF(g) is −95.65 kJ/mol (NBS tables, p. 2-53); the sign was dropped'],
      ['H_2PO_4^2-(aq)', 'H_2PO_4^-(aq)', 'erratum 3380: dihydrogen phosphate carries one negative charge; the values are those of H₂PO₄⁻ (NBS tables, p. 2-73)'],
      ['Hg^2+(aq)', 'Hg_2^2+(aq)', 'erratum 3381: 172.4, 153.9, 84.5 are the values of the mercury(I) ion Hg₂²⁺ (NBS tables, p. 2-150); the row above is Hg²⁺'],
      ['-3445.06', '-3440.84', 'erratum 3382: the enthalpy of formation of Al₂(SO₄)₃(s) is −3440.84 kJ/mol (NBS tables, p. 2-129)'],
      ['-3506.61', '-3099.94', 'erratum 3382: the free energy of formation of Al₂(SO₄)₃(s) is −3099.94 kJ/mol; the printed value is about 400 kJ/mol from the row’s own enthalpy and entropy'],
      ['-492.4', '-', 'erratum 3383: −492.4 is 221 kJ/mol from the free energy the Al₂S₃ row’s own enthalpy and entropy give; the NBS tables (p. 2-129) print no free energy, and the page prints a dash'],
      ['CaSO_3·H_2O(s)', 'CaSO_3·2H_2O(s)', 'erratum 3384: −1752.68, −1555.19, 184.10 are self-consistent only for the dihydrate (−1554.7 computed), not the monohydrate (−1624.3)'],
      ['-576.27', '-567.27', 'erratum 3385: the enthalpy of formation of KF(s) is −567.27 kJ/mol (NBS tables, p. 2-329); two digits are exchanged'],
      ['-1378.83', '-1387.83', 'erratum 3386: the enthalpy of formation of Mn₃O₄(s) is −1387.8 kJ/mol (NBS tables, p. 2-191); two digits are exchanged'],
      ['0.00', '-', 'erratum 3387: an entropy of 0.00 for HgSO₄(s) is impossible for a compound at 298 K; the NBS tables (p. 2-151) print no entropy, and the page prints a dash'],
      ['-1124.3', '-', 'erratum 3388: −1124.3 is 17.5 kJ/mol from the free energy the H₃PO₄(l) row’s own enthalpy and entropy give; the NBS tables (p. 2-73) print no free energy for the liquid'],
      ['110.5', '-', 'erratum 3388: 110.5 J/(K·mol) is the entropy of solid H₃PO₄ (110.50, the row above); the NBS tables print no entropy for the liquid'],
      ['324.4', '326.4', 'erratum 3389: the enthalpy of formation of Al(g) is 326.4 kJ/mol (NBS tables, p. 2-127); the row’s own free energy and entropy give 326.3'],
    ],
  },
  // Appendix H: nine formulas are printed as images; the Lewis structures
  // leave the table and follow it as figures.
  'chemistry-bundle:m68866': {
    images: {
      CNX_Chem_00_HH_chemform1_img: 'H_2AsO_4^-',
      CNX_Chem_00_HH_chemform2_img: 'HAsO_4^2-',
      CNX_Chem_00_HH_chemform3_img: 'HCO_3^-',
      CNX_Chem_00_HH_chemform4_img: 'HSO_4^-',
      CNX_Chem_00_HH_chemform5_img: 'HC_2O_4^-',
      CNX_Chem_00_HH_chemform6_img: 'H_2PO_4^-',
      CNX_Chem_00_HH_chemform7_img: 'HPO_4^2-',
      CNX_Chem_00_HH_chemform8_img: 'H_2PO_3^-',
      CNX_Chem_00_HH_chemform9_img: 'HSO_3^-',
    },
    figures: /^CNX_Chem_00_HH_1s/,
    droppedHeads: ['LewisStructure'],
  },
  'chemistry-bundle:m68867': { figures: /^CNX_Chem_00_II_ls/, droppedHeads: ['LewisStructure'] },
  'chemistry-bundle:m68868': {
    deviations: [
      ['CaSO4·2H_2O', 'CaSO_4·2H_2O', 'erratum 2914: the source leaves the 4 of CaSO₄ on the line'],
      ['12Ag2O(Ag++OH-)', '1/2Ag2O(Ag++OH-)', 'the source stacks the ½ as a bare sub- and superscript; the page writes 1/2'],
      ['1.5×10-15', '7.40×10-14', 'erratum 3495 (November 24, 2026): the solubility product of PbCO₃ is 7.40 × 10⁻¹⁴ (CRC Handbook, 84th ed.); the source’s value is about fifty times too small'],
      ['9×10-15', '3.6×10-17', 'erratum 3495 (November 24, 2026): the solubility product of Hg₂CO₃ is 3.6 × 10⁻¹⁷ (CRC Handbook, 84th ed.); the source’s value is about two hundred fifty times too large'],
    ],
  },
  'chemistry-bundle:m68870': {
    deviations: [
      ['[Ag(S2O3)2]3++e-→Ag+2S2O32-', '[Ag(S2O3)2]3-+e-→Ag+2S2O32-', 'erratum 2915: the complex is an anion'],
      ['Ce3+3e-→Ce', 'Ce3++3e-→Ce', 'erratum 2915: the ion is printed without its plus sign'],
      ['Cr3+3e-→Cr', 'Cr3++3e-→Cr', 'erratum 2915: the ion is printed without its plus sign'],
      ['Pu3+3e-→Pu', 'Pu3++3e-→Pu', 'erratum 2915: the ion is printed without its plus sign'],
      ['[Zn(OH)4]2+2e-→Zn+4OH-', '[Zn(OH)4]2-+2e-→Zn+4OH-', 'erratum 2915: the ion is printed without its minus sign'],
      ['Zr4+4e-→Zr', 'Zr4++4e-→Zr', 'erratum 2915: the ion is printed without its plus sign'],
      ['+0.558', '+0.595', 'erratum 3496 (November 24, 2026): 0.558 V is the CRC potential of MnO₄⁻ + e⁻ → MnO₄²⁻; the electrochemical series of the CRC Handbook of Chemistry and Physics (P. Vanýsek) gives 0.595 V for MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻'],
      ['+0.10', '+0.01', 'erratum 3496 (November 24, 2026): the CRC electrochemical series gives 0.01 V for NO₃⁻ + H₂O + 2e⁻ → NO₂⁻ + 2OH⁻'],
      ['Co3++e-→Co2+(2mol//H2SO4)', 'Co3++e-→Co2+(2MH2SO4)', 'erratum 3496 (November 24, 2026): the CRC electrochemical series gives the condition as 2 molar H₂SO₄; “2 mol //” is garbled'],
    ],
  },
  // Appendix M: one three-column list printed as two side-by-side sets, on
  // two pages; the page lists it once, by atomic number and mass number.
  'chemistry-bundle:m68871': {
    unfold: 3,
    anyOrder: true,
    deviations: [
      ['23994Pu', '24094Pu', 'erratum 2916: the second plutonium-239 row carries plutonium-240’s half-life'],
      ['260105Ha', '260105Db', 'erratum 2917: element 105 is dubnium'],
      ['5.1×1015y', '4.41×1014y', 'erratum 3497 (November 24, 2026): the half-life of indium-115 is 4.41 × 10¹⁴ y (ENSDF, IAEA LiveChart); the source’s exponent is one too high'],
      ['23.54m', '23.45m', 'erratum 3497 (November 24, 2026): the half-life of uranium-239 is 23.45 min (ENSDF, IAEA LiveChart); two digits are exchanged'],
    ],
  },
});

/** A source entry split at its top-level `<newline/>`s: one pseudo-entry per printed line. */
function entryLines(node) {
  const lines = [[]];
  for (const child of node.children || []) {
    if (typeof child !== 'string' && localName(child) === 'newline') lines.push([]);
    else lines.at(-1).push(child);
  }
  return lines.map((children) => ({ name: node.name, attributes: node.attributes, children }));
}

/** A source table's body as the rows a page is expected to carry. */
function expectedRows(table, notes, images) {
  const skeletons = (node) => ({ plain: sourceSkeleton(node, { images }), marked: sourceSkeleton(node, { marks: true, images }) });
  const rows = [];
  for (const row of table.body) {
    const cells = row.cells.map((cell) => (cell?.node ? entryLines(cell.node) : [null]));
    const lines = Math.max(...cells.map((parts) => parts.length));
    for (let line = 0; line < lines; line += 1) {
      rows.push(cells.map((parts) => {
        const node = parts.length === 1 ? parts[0] : parts[line];
        return node ? skeletons(node) : { plain: '', marked: '' };
      }));
    }
  }
  if (!notes.unfold) return rows;
  const unfolded = [];
  for (let set = 0; set < table.columns / notes.unfold; set += 1) {
    for (const row of rows) {
      const cells = row.slice(set * notes.unfold, (set + 1) * notes.unfold);
      if (cells.some((cell) => cell.plain)) unfolded.push(cells);
    }
  }
  return unfolded;
}

/**
 * Compare one page with its module. Returns `{ cells, errors, usedDeviations }`.
 * Exported for the tests, which build both sides from fixtures.
 */
export function compareTables(moduleXml, markdown, notes = {}) {
  const errors = [];
  let cells = 0;
  const used = new Set();
  const deviations = notes.deviations || [];
  const deviates = (source, page) => {
    const index = deviations.findIndex(([from, to]) => from === source && to === page);
    if (index === -1) return false;
    used.add(index);
    return true;
  };
  const document = parseXml(moduleXml);
  const source = moduleTables(document);
  // What each image in a cell stands for: the text the page types for it, or
  // '' for a drawing the page shows as a figure outside the table.
  const images = { ...(notes.images || {}) };
  for (const image of descendants(document, (node) => localName(node) === 'image')) {
    const stem = mediaStem(image.attributes.src);
    if (!Object.hasOwn(images, stem) && notes.figures?.test(stem)) images[stem] = '';
  }
  const added = new Set((notes.added || []).map((title) => pageSkeleton(title)));
  const page = pageTables(markdown).tables.filter((table) => !added.has(pageSkeleton(table.title)));
  const addedSeen = pageTables(markdown).tables.length - page.length;
  if (addedSeen !== added.size) errors.push(`${added.size} added table(s) are listed but ${addedSeen} found on the page — an added table is named by its bold title`);
  if (source.length !== page.length) {
    errors.push(`the module has ${source.length} table(s) and the page ${page.length}${added.size ? ` (beside ${added.size} added)` : ''}`);
    return { cells, errors, usedDeviations: used };
  }
  const pageText = pageSkeleton(markdown.replace(/^---[\s\S]*?\n---/, ''));

  source.forEach((table, tableIndex) => {
    const local = page[tableIndex];
    const where = `table ${tableIndex + 1} (page line ${local.line})`;
    const dropped = new Set(notes.droppedHeads || []);

    // Title: the spanning head row is the bold line above the table.
    for (const row of table.head.filter((head) => head.spanning)) {
      const title = sourceSkeleton(row.cells[0].node);
      if (title !== pageSkeleton(local.title)) errors.push(`${where}: the source titles it ${JSON.stringify(title)}, the page ${JSON.stringify(pageSkeleton(local.title))}`);
      else cells += 1;
    }
    // Header: the last head row, in order, inside the page's header.
    const headRow = table.head.filter((head) => !head.spanning).at(-1);
    if (headRow) {
      let wanted = headRow.cells.map((cell) => (cell?.node ? sourceSkeleton(cell.node) : '')).filter((text) => text && !dropped.has(text));
      if (notes.unfold) wanted = wanted.slice(0, notes.unfold);
      const have = local.header.map((text) => pageSkeleton(text));
      let cursor = 0;
      for (const text of wanted) {
        const found = have.indexOf(text, cursor);
        if (found === -1) errors.push(`${where}: header ${JSON.stringify(text)} is not in the page's header ${JSON.stringify(have)}`);
        else { cursor = found + 1; cells += 1; }
      }
    }
    // Body: row for row.
    let expected = expectedRows(table, notes, images);
    let localRows = local.rows;
    if (expected.length !== localRows.length) {
      errors.push(`${where}: the source has ${expected.length} row(s), the page ${localRows.length}`);
    }
    if (notes.anyOrder) {
      // The page lists the rows in its own order. Rows that agree whole pair
      // off first; what is left pairs by its other cells, so a row whose
      // first cell the page corrects still meets its source row.
      const rowKey = (cellsOf) => cellsOf.join('\u0001');
      const sourceKeys = expected.map((row) => rowKey(row.filter((cell) => cell.plain).map((cell) => cell.plain)));
      const pageKeys = localRows.map((row) => rowKey(row.filter((text) => text.trim()).map((text) => pageSkeleton(text))));
      const pairs = [];
      const pageLeft = new Set(pageKeys.keys());
      const sourceLeft = [];
      sourceKeys.forEach((key, index) => {
        const match = [...pageLeft].find((candidate) => pageKeys[candidate] === key);
        if (match === undefined) sourceLeft.push(index);
        else { pageLeft.delete(match); pairs.push([index, match]); }
      });
      const tail = (key) => key.split('\u0001').slice(1).join('\u0001');
      const bySourceTail = [...sourceLeft].sort((a, b) => tail(sourceKeys[a]).localeCompare(tail(sourceKeys[b])));
      const byPageTail = [...pageLeft].sort((a, b) => tail(pageKeys[a]).localeCompare(tail(pageKeys[b])));
      bySourceTail.forEach((index, position) => { if (byPageTail[position] !== undefined) pairs.push([index, byPageTail[position]]); });
      expected = pairs.map(([index]) => expected[index]);
      localRows = pairs.map(([, index]) => localRows[index]);
    }
    for (let index = 0; index < Math.min(expected.length, localRows.length); index += 1) {
      const want = expected[index].filter((cell) => cell.plain);
      const got = localRows[index].filter((text) => text.trim());
      if (want.length !== got.length) {
        errors.push(`${where} row ${index + 1}: the source has ${want.length} filled cell(s) ${JSON.stringify(want.map((cell) => cell.plain))}, the page ${got.length} ${JSON.stringify(got)}`);
        continue;
      }
      want.forEach((cell, column) => {
        const text = got[column];
        const plain = pageSkeleton(text);
        const marked = pageSkeleton(text, { marks: true });
        const isMath = /\$/.test(text);
        if (cell.plain === plain && (isMath || cell.marked === marked)) { cells += 1; return; }
        if (deviates(isMath ? cell.plain : cell.marked, isMath ? plain : marked)) { cells += 1; return; }
        errors.push(`${where} row ${index + 1}: the source reads ${JSON.stringify(isMath ? cell.plain : cell.marked)}, the page ${JSON.stringify(isMath ? plain : marked)} (${JSON.stringify(text)})`);
      });
    }
  });

  // Footnotes: each is a sentence somewhere on the page.
  for (const table of source) {
    for (const row of [...table.head, ...table.body]) {
      for (const cell of row.cells) {
        if (!cell?.node || cell.carried) continue;
        for (const footnote of sourceFootnotes(cell.node)) {
          if (pageText.includes(footnote)) cells += 1;
          else errors.push(`a table footnote is not on the page: ${JSON.stringify(footnote.slice(0, 60))}`);
        }
      }
    }
  }
  deviations.forEach(([from, to], index) => {
    if (!used.has(index)) errors.push(`stale deviation ${JSON.stringify(from)} → ${JSON.stringify(to)}: no cell of the page differs that way`);
  });
  return { cells, errors, usedDeviations: used };
}

function main(argv) {
  const cli = parseCliArgs(argv, { valueFlags: ['min-cells'] });
  const minCells = integerFlag(cli, 'min-cells');
  const lock = loadSourceLock(repositoryRoot);
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const strict = process.env.ATHENAEUM_REQUIRE_SOURCES === '1';
  let cells = 0;
  let pages = 0;
  const failures = [];
  const skipped = new Set();
  for (const entry of map.appendices || []) {
    const sourceRoot = path.resolve(repositoryRoot, lock.bundles[entry.bundle].sourceDir);
    const modulePath = path.join(sourceRoot, 'modules', entry.moduleId, 'index.cnxml');
    if (!existsSync(modulePath)) { skipped.add(entry.bundle); continue; }
    let notes = TABLE_NOTES[`${entry.bundle}:${entry.moduleId}`] || {};
    const markdown = readFileSync(path.join(repositoryRoot, entry.localPath), 'utf8');
    const constants = notes.constants ? loadConstants(repositoryRoot) : null;
    if (constants) {
      notes = {
        ...notes,
        deviations: [...(notes.deviations || []), ...constantDeviations(constants).map(([from, to, name]) => [
          pageSkeleton(from), pageSkeleton(to), `2022 CODATA value of the ${name} (data/chemistry/constants.json)`,
        ])],
      };
    }
    const result = compareTables(readFileSync(modulePath, 'utf8'), markdown, notes);
    cells += result.cells;
    pages += 1;
    for (const error of result.errors) failures.push(`${entry.localPath}: ${error}`);
    if (notes.elements) {
      const table = compareElementsTable(markdown, loadElements(repositoryRoot));
      cells += table.cells;
      for (const error of table.errors) failures.push(`${entry.localPath}: table of the elements, ${error} (node tools/source/elements-table.mjs --write)`);
    }
    if (constants) {
      // The same cells as above, said in the data file's terms; not counted twice.
      const table = compareConstantsTable(markdown, constants);
      for (const error of table.errors) failures.push(`${entry.localPath}: table of constants, ${error} (node tools/source/constants-table.mjs --write)`);
    }
  }
  for (const key of Object.keys(TABLE_NOTES)) {
    const [bundle, moduleId] = key.split(':');
    if (!(map.appendices || []).some((entry) => entry.bundle === bundle && entry.moduleId === moduleId)) {
      failures.push(`TABLE_NOTES names ${key}, which no mapped reference page uses`);
    }
  }
  for (const bundle of skipped) {
    console.error(`verify-source-tables: bundle ${bundle} is not fetched — its reference pages were NOT read (npm run source:fetch -- --bundle ${bundle})`);
  }
  if (failures.length) {
    console.error(`✖ ${failures.length} table difference(s) from the pinned CNXML:\n`);
    for (const failure of failures) console.error(`  · ${failure}`);
    process.exit(1);
  }
  if (skipped.size && strict) {
    console.error('✖ ATHENAEUM_REQUIRE_SOURCES=1 and a bundle is absent');
    process.exit(1);
  }
  if (!skipped.size && minCells !== null && cells < minCells) {
    console.error(`✖ ${cells} table cells confirmed, below the floor of ${minCells} — the gate has stopped reading something`);
    process.exit(1);
  }
  console.log(`✓ source tables: ${cells} cells on ${pages} reference page(s) match the pinned CNXML`
    + (skipped.size ? ` (${skipped.size} bundle(s) not fetched, no floor applied)` : ''));
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`verify-source-tables: ${error.message}`);
    process.exit(2);
  }
}
