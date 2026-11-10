import assert from 'node:assert/strict';
import test from 'node:test';
import { moduleTables, pageSkeleton, pageTables, sourceSkeleton, splitRow } from '../lib/source-tables.mjs';
import { parseXml } from '../lib/openstax-source.mjs';
import { compareTables } from './verify-source-tables.mjs';
import { cellMarkdown, draftTables, mathToCe } from '../source/appendix-draft.mjs';

const M = 'xmlns:m="http://www.w3.org/1998/Math/MathML"';
const table = (rows, { cols = 2, head = '' } = {}) => `<document ${M}><content><table id="t"><tgroup cols="${cols}">`
  + `${Array.from({ length: cols }, (_, i) => `<colspec colnum="${i + 1}" colname="c${i + 1}"/>`).join('')}`
  + `<thead>${head}</thead><tbody>${rows}</tbody></tgroup></table></content></document>`;
const row = (...cells) => `<row>${cells.map((cell) => (cell.startsWith('<entry') ? cell : `<entry>${cell}</entry>`)).join('')}</row>`;
const TIMES = '<m:math><m:mo>×</m:mo></m:math>';
const entryOf = (xml) => parseXml(`<entry ${M}>${xml}</entry>`).children[0];

test('a skeleton is the characters without the typesetting', () => {
  assert.equal(sourceSkeleton(entryOf(`1.6605402 ${TIMES}  10<sup>−27</sup> kg`)), '1.6605402×10-27kg');
  assert.equal(pageSkeleton('$1.6605402 \\times 10^{-27}$ kg'), '1.6605402×10-27kg');
  assert.equal(pageSkeleton('$6.02214076 \\times 10^{23}\\ \\text{mol}^{-1}$'), '6.02214076×1023mol-1');
  assert.equal(pageSkeleton('101,325 Pa'), pageSkeleton('$101{,}325$ Pa'), 'a thousands separator is typesetting');
  assert.equal(pageSkeleton('−531'), '-531', 'the three minus signs are one');
  assert.equal(pageSkeleton('–531'), '-531');
  assert.equal(pageSkeleton('Acid or Base\\*'), 'AcidorBase', 'a footnote mark is not content');
  assert.equal(pageSkeleton('\\[Co(en)₃\\](ClO₄)₃'), '[Co(en)3](ClO4)3', 'escaped brackets are brackets');
  assert.equal(pageSkeleton('$C^\\circ$(H₂O(*l*)) = 4.184 ${}^\\circ\\text{C}^{-1}$'), 'C°(H2O(l))=4.184°C-1', 'emphasis outside math is not a hydrate dot');
  assert.equal(pageSkeleton('$\\ce{CuSO4*5H2O}$'), 'CuSO4·5H2O', 'inside math it is');
});

test('marks tell a subscript from a superscript in a text cell', () => {
  const source = entryOf('Al<sup>3+</sup>(<emphasis effect="italics">aq</emphasis>)');
  assert.equal(sourceSkeleton(source, { marks: true }), 'Al^3+(aq)');
  assert.equal(pageSkeleton('Al³⁺(*aq*)', { marks: true }), 'Al^3+(aq)');
  assert.equal(pageSkeleton('Al₃₊(*aq*)', { marks: true }), 'Al_3+(aq)', 'the same characters, lowered, are a different cell');
  assert.equal(pageSkeleton('Al₃₊(*aq*)'), pageSkeleton('Al³⁺(*aq*)'), 'without marks they are not told apart');
});

test('MathML that a flat reading scrambles: a fraction, a nuclide', () => {
  const half = entryOf('<m:math><m:mfrac><m:mn>1</m:mn><m:mn>2</m:mn></m:mfrac><m:msub><m:mtext>H</m:mtext><m:mn>2</m:mn></m:msub></m:math>');
  assert.equal(sourceSkeleton(half), '1/2H2');
  assert.equal(pageSkeleton('$\\ce{1/2 H2}$'), '1/2H2');
  const nuclide = entryOf('<m:math><m:msubsup><m:mrow/><m:mrow><m:mn>6</m:mn></m:mrow><m:mn>14</m:mn></m:msubsup><m:mtext>C</m:mtext></m:math>');
  assert.equal(sourceSkeleton(nuclide), '146C', 'superscript first, as the page writes it');
  assert.equal(pageSkeleton('$\\ce{^{14}_{6}C}$'), '146C');
  assert.equal(mathToCe(nuclide.children[0]), '^{14}_{6}C');
});

test('a table is laid on its grid: spans carry, titles and group rows are marked', () => {
  const xml = table(
    row('<entry namest="c1" nameend="c2">aluminum</entry>')
    + row('<entry morerows="1">arsenic</entry>', 'first')
    + row('second'),
    { head: row('<entry namest="c1" nameend="c2">The Title</entry>') + row('Acid', 'Formula') },
  );
  const [parsed] = moduleTables(xml);
  assert.equal(parsed.columns, 2);
  assert.deepEqual(parsed.head.map((r) => r.spanning), [true, false]);
  assert.deepEqual(parsed.body.map((r) => r.spanning), [true, false, false]);
  assert.equal(parsed.body[2].cells[0].carried, true, 'the morerows cell appears again on the row below');
  assert.equal(sourceSkeleton(parsed.body[2].cells[0].node), 'arsenic');
});

test('a Markdown row splits on bars, but not inside math or a shortcode', () => {
  assert.deepEqual(splitRow('| a | $|x|$ | c \\| d |'), ['a', '$|x|$', 'c \\| d']);
  const { tables } = pageTables('## Heading\n\n**Title**\n\n| A | B |\n|---|---|\n| 1 | 2 |\n\ntext\n');
  assert.equal(tables.length, 1);
  assert.deepEqual([tables[0].heading, tables[0].title, tables[0].header, tables[0].rows], ['Heading', 'Title', ['A', 'B'], [['1', '2']]]);
});

const SOURCE = table(
  row('<entry namest="c1" nameend="c2">aluminum</entry>')
  + row('Al<sup>3+</sup>(<emphasis effect="italics">aq</emphasis>)', '–531')
  + row('meter (m)', '= 39.37 inches (in.)<newline/>= 1.094 yards (yd)')
  + row('<m:math><m:msup><m:mtext>Ce</m:mtext><m:mn>3</m:mn></m:msup><m:mo>+</m:mo><m:mn>3</m:mn><m:msup><m:mtext>e</m:mtext><m:mo>−</m:mo></m:msup><m:mo>⟶</m:mo><m:mtext>Ce</m:mtext></m:math>', '−2.483'),
  { head: row('<entry namest="c1" nameend="c2">Data</entry>') + row('Substance', `Value<footnote id="f">in kJ</footnote>`) },
);
const PAGE = [
  '**Data**', '',
  '| Substance | Value\\* |', '|---|---|',
  '| **aluminum** | |',
  '| Al³⁺(*aq*) | −531 |',
  '| meter (m) | = 39.37 inches (in.) |',
  '| meter (m) | = 1.094 yards (yd) |',
  '| $\\ce{Ce^3 + 3e^- -> Ce}$ | −2.483 |', '',
  '\\* in kJ', '',
].join('\n');

test('a faithful page matches: title, header, group row, split lines, footnote', () => {
  const result = compareTables(SOURCE, PAGE);
  assert.deepEqual(result.errors, []);
  assert.equal(result.cells, 1 + 2 + 1 + 2 + 2 + 2 + 2 + 1, 'every title, header, body cell, and footnote is counted');
});

test('a changed digit, a dropped row, and a lowered charge each fail', () => {
  assert.match(compareTables(SOURCE, PAGE.replace('−531', '−513')).errors.join('\n'), /the source reads "-531", the page "-513"/);
  assert.match(compareTables(SOURCE, PAGE.replace('| meter (m) | = 1.094 yards (yd) |\n', '')).errors.join('\n'), /the source has 5 row\(s\), the page 4/);
  assert.match(compareTables(SOURCE, PAGE.replace('Al³⁺', 'Al₃₊')).errors.join('\n'), /the source reads "Al\^3\+\(aq\)", the page "Al_3\+\(aq\)"/);
  assert.match(compareTables(SOURCE, PAGE.replace('\\* in kJ', '')).errors.join('\n'), /a table footnote is not on the page/);
  assert.match(compareTables(SOURCE, PAGE.replace('**Data**', '**Date**')).errors.join('\n'), /the source titles it "Data", the page "Date"/);
});

test('a corrected cell needs its deviation, and a deviation needs its cell', () => {
  const corrected = PAGE.replace('Ce^3 + 3e^-', 'Ce^3+ + 3e^-');
  assert.match(compareTables(SOURCE, corrected).errors.join('\n'), /the source reads "Ce3\+3e-→Ce", the page "Ce3\+\+3e-→Ce"/);
  const notes = { deviations: [['Ce3+3e-→Ce', 'Ce3++3e-→Ce', 'the ion is printed without its plus sign']] };
  assert.deepEqual(compareTables(SOURCE, corrected, notes).errors, []);
  assert.match(compareTables(SOURCE, PAGE, notes).errors.join('\n'), /stale deviation/);
});

test('an added table is named, a folded table is unfolded, and a set is matched in any order', () => {
  const extra = `${PAGE}\n**Extra**\n\n| A |\n|---|\n| 1 |\n`;
  assert.match(compareTables(SOURCE, extra).errors.join('\n'), /the module has 1 table\(s\) and the page 2/);
  assert.deepEqual(compareTables(SOURCE, extra, { added: ['Extra'] }).errors, []);
  assert.match(compareTables(SOURCE, PAGE, { added: ['Extra'] }).errors.join('\n'), /1 added table\(s\) are listed but 0 found/);

  const folded = table(row('C', '5730 y', 'Bi', '5.01 d') + row('N', '9.97 m', 'Po', '138.4 d'), {
    cols: 4, head: row('Isotope', 'Half-Life', 'Isotope', 'Half-Life'),
  });
  const list = (rows) => `| Isotope | Half-Life |\n|---|---|\n${rows.map((r) => `| ${r.join(' | ')} |`).join('\n')}\n`;
  const inPrint = [['C', '5730 y'], ['N', '9.97 m'], ['Bi', '5.01 d'], ['Po', '138.4 d']];
  assert.deepEqual(compareTables(folded, list(inPrint), { unfold: 2 }).errors, []);
  const resorted = [inPrint[2], inPrint[0], inPrint[1], inPrint[3]];
  assert.notDeepEqual(compareTables(folded, list(resorted), { unfold: 2 }).errors, [], 'a different order fails unless the note allows it');
  assert.deepEqual(compareTables(folded, list(resorted), { unfold: 2, anyOrder: true }).errors, []);
  const wrong = resorted.map((r) => (r[0] === 'Po' ? ['Po', '138.5 d'] : r));
  assert.match(compareTables(folded, list(wrong), { unfold: 2, anyOrder: true }).errors.join('\n'), /138\.4d.*138\.5d/, 'a set still compares every cell');
});

test('an image in a cell stays visible until a note says what it is', () => {
  const xml = table(row('arsenic', '<entry><media alt="x"><image src="../../media/form1.jpg"/></media></entry>', '<entry><media alt="y"><image src="../../media/ls_arsenic.jpg"/></media></entry>'), {
    cols: 3, head: row('Acid', 'Formula', 'Lewis Structure'),
  });
  const page = '| Acid | Formula |\n|---|---|\n| arsenic | **H₂**AsO₄⁻ |\n';
  assert.match(compareTables(xml, page).errors.join('\n'), /\[img:form1\]/);
  const notes = { images: { form1: 'H_2AsO_4^-' }, figures: /^ls_/, droppedHeads: ['LewisStructure'] };
  assert.deepEqual(compareTables(xml, page, notes).errors, []);
  assert.match(compareTables(xml, page.replace('AsO₄⁻', 'AsO₄²⁻'), notes).errors.join('\n'), /H_2AsO_4\^-/);
});

test('the draft writes the house notation from the CNXML', () => {
  const md = (xml) => cellMarkdown(entryOf(xml));
  assert.equal(md(`1.6605402 ${TIMES}  10<sup>−27</sup> kg`), '$1.6605402 \\times 10^{-27}$ kg');
  assert.equal(md('Al<sup>3+</sup>(<emphasis effect="italics">aq</emphasis>)'), 'Al³⁺(*aq*)');
  assert.equal(md('HCO<sub>3</sub> <sup>–</sup>(<emphasis effect="italics">aq</emphasis>)'), 'HCO₃⁻(*aq*)', 'a stray space before the charge goes');
  assert.equal(md('–531'), '−531', 'a minus sign in a sentence is U+2212');
  assert.equal(md('J K<sup>−1</sup>'), '$\\text{J}\\ \\text{K}^{-1}$');
  assert.equal(md('<emphasis effect="italics">K<sub>a</sub></emphasis> at 25 °C'), '$K_\\text{a}$ at 25 °C');
  assert.equal(md('[Co(en)<sub>3</sub>](ClO<sub>4</sub>)<sub>3</sub>'), '\\[Co(en)₃\\](ClO₄)₃', 'or Markdown reads a link');
  assert.equal(md('[Co(en)<sub>2</sub>Cl<sub>2</sub>]Cl, <emphasis effect="italics">cis</emphasis>'), '\\[Co(en)₂Cl₂\\]Cl, *cis*');
  const draft = draftTables(SOURCE, { groups: 'rows' });
  assert.match(draft, /^\*\*Data\*\*$/m);
  assert.match(draft, /^\| Substance \| Value\\\* \|$/m);
  assert.match(draft, /^\| \*\*aluminum\*\* \|  \|$/m);
  assert.match(draft, /^\| meter \(m\) \| = 39\.37 inches \(in\.\) \|\n\| meter \(m\) \| = 1\.094 yards \(yd\) \|$/m, 'one row per printed line');
  assert.match(draft, /^\| \$\\ce\{Ce\^3 \+ 3e\^- -> Ce\}\$ \| −2\.483 \|$/m);
  assert.match(draft, /^\\\* in kJ$/m);
  assert.deepEqual(compareTables(SOURCE, draft).errors, [], 'what the draft writes, the gate accepts');
});
