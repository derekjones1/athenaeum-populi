// A chapter's keyed answers by SHAPE, for the run facts of a Chemistry 2e
// chapter (docs/briefs/chemistry/run.md §1): which component each keyed
// unit's answer calls for under docs/subjects/chemistry.md "Exercises", how
// many of each a section has, and which keyed formulas and equations the
// grader cannot read or does not find balanced — a suspected source defect
// the parent rules on BEFORE the authors start, instead of a lint error an
// author meets in the middle of a page.
//
// Usage:
//   node tools/source/chemistry-shapes.mjs <chapter>            the table and the flags
//   node tools/source/chemistry-shapes.mjs <chapter> --list     every keyed unit, one line each
//
// After the flags come NOTES: the units whose STRUCTURE the page must shape
// for the source gates — a part that is only an image, an answer that is
// only an image, a part the solution leaves unkeyed, a lettered answer under
// a stem whose parts are in another exercise.
//
// The shape is read off the answer's text and is a first reading: the table
// in the playbook, and the parent, decide. "words" is the one shape this
// cannot split — a name is a `textin`, a member of a set the stem names is a
// `multiplechoice`.
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { keyedUnits, listMembers, sequentialParts } from '../lib/keyed-units.mjs';
import { chemCanon, chemKeyProblem } from '../../assets/js/lib/text/check-chem.mjs';
import { letteredSets, numberWords, numbersOnly } from '../verify/verify-source-keys.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const bundle = path.join(root, 'sources/openstax/osbooks-chemistry-bundle');

/** The chapters of the collection, each a title and its module ids (the first is the introduction). */
export function chapters() {
  const collection = readFileSync(path.join(bundle, 'collections/chemistry-2e.collection.xml'), 'utf8');
  return collection.split('<col:subcollection>').slice(1).map((sub) => {
    const body = sub.split('</col:subcollection>')[0];
    return {
      title: (body.match(/<md:title>([^<]*)<\/md:title>/) || [])[1] || '',
      modules: [...body.matchAll(/<col:module document="(m\d+)"/g)].map((m) => m[1]),
    };
  });
}

const ARROW = /⟶|→|⇌/;
// "[For the reaction] <equation> ΔH[°] = <number> kJ": the equation, the number.
const THERMOCHEMICAL = /^(?:for the reaction\s+)?(.+?(?:⟶|→|⇌).+?)\s+Δ\s*H\s*°?\s*=\s*([−–-]?\d[\d,]*(?:\.\d+)?)\s*k?J(?:\/mol)?$/i;
const ASKS_EQUATION = /\bequations?\b|\bwrite\b/i;
const NUMBER = /^[−–-]?\d[\d,.]*(?:\s*[×x]\s*10\s*\^?\s*\{?[−–-]?\d+\}?)?/;

/**
 * `{ shape, component, flag? }` for one keyed answer segment.
 * Shapes: number, formula, equation, equation+, configuration, ordering,
 * quantum-numbers, subshell, words, sentence, drawing.
 */
export function shapeOf(answer, stem = '') {
  const text = String(answer ?? '').replace(/\s+/g, ' ').trim().replace(/[.;]$/, '');
  if (!text) return { shape: 'drawing', component: 'selfcheck with the figure as the model answer' };
  // Chapter 6's shapes (docs/subjects/chemistry.md "Exercises").
  //   An electron configuration, alone or after a colon in each element's
  //   sentence ("Co has 27 protons, …: 1s²…3d⁷. I has …: …").
  if (!/^for example\b/i.test(text)) {
    if (chemCanon(text, 'configuration')) {
      // The source prints it spaced, so only a subshell's existence and capacity are read.
      const found = chemKeyProblem(text, 'configuration');
      const problem = found && !/not written in print/.test(found) ? found : null;
      return { shape: 'configuration', component: 'textin answerForm="configuration"', ...(problem ? { flag: problem } : {}) };
    }
    const configurations = text.split(/[:;]\s*|\.\s+(?=[A-Z])/).map((piece) => piece.trim()).filter((piece) => chemCanon(piece, 'configuration'));
    if (configurations.length) {
      const counts = /\d+\s+(?:protons|neutrons|electrons)\b/.test(text);
      return { shape: 'configuration', component: `one textin answerForm="configuration" per configuration (${configurations.length})${counts ? ', and one whole-number fillin per count' : ''}, each closing with the atom or ion it asks` };
    }
  }
  //   An ordering: "Rb < Li < N < F".
  if (/</.test(text) && chemCanon(text, 'ordering')) return { shape: 'ordering', component: 'textin answerForm="ordering"' };
  //   A set of quantum numbers, alone or one per label ("x. 4 0 0 ½, y. 2 1
  //   0 ½, z. 3 2 0 ½", 6.3 — the MathML ½ reads "( 1 )/( 2 )"): a graded
  //   set per orbital. The sets of SEVERAL electrons at once, a table with
  //   its header ("n l m _l s 4 0 0 + ½ 4 0 0 − ½ …", 6.3's selenium), is a
  //   self-check in the sample-answer form.
  if (chemCanon(text, 'quantum-numbers')) return { shape: 'quantum-numbers', component: 'textin answerForm="quantum-numbers"' };
  const sets = letteredSets(text);
  if (sets.length >= 2) {
    return { shape: 'quantum-numbers', component: `one textin answerForm="quantum-numbers" per label (${sets.map((entry) => `(${entry.label})`).join(', ')}), each closing with the label it asks` };
  }
  if (/^n\s+l\s+m\s*_?\s*l\s+(?:m\s*_?\s*)?s\b/.test(text)) {
    return { shape: 'quantum-numbers', component: 'selfcheck in the sample-answer form: the sets of several electrons, one answer of many' };
  }
  //   A subshell: "2 p", "4 d".
  if (/^[1-7]\s?[spdf]$/.test(text)) return { shape: 'subshell', component: `textin keyed ${text.replace(/\s/g, '')}` };
  //   One count per label: "x. 2, y. 2, z. 2".
  const labelled = text.split(/,\s*/);
  if (labelled.length >= 2 && labelled.every((piece) => /^[a-z]\.\s+[−–-]?\d+$/.test(piece))) {
    return { shape: 'number', component: `one whole-number fillin per label (${labelled.map((piece) => `(${piece[0]})`).join(', ')}), each closing with the label it asks` };
  }
  //   A count said in words or beside labels that are no numbers: "n = 4",
  //   "The five degenerate 3d orbitals", "15 (5A)".
  const counted = numbersOnly(text).replace(/^[a-z]\s*=\s*/i, '');
  const spelled = numberWords(counted);
  if ((counted.trim() !== text && /^\d+$/.test(counted.trim())) || (spelled.length === 1 && !/\d/.test(counted) && counted.split(' ').length <= 6)) {
    const key = /^\d+$/.test(counted.trim()) ? Number(counted.trim()) : spelled[0];
    return { shape: 'number', component: `whole-number fillin keyed ${key}`, key };
  }
  //   Two or more measured quantities, each labelled or not ("ν = 4.568 ×
  //   10¹⁴ s⁻¹; λ = 656.3 nm; …"; "Red: 660 nm; 4.54 × 10¹⁴ Hz; …"), and a
  //   judgment the number supports ("5.49 × 10¹⁴ s⁻¹; no").
  const quantities = quantityPieces(text);
  if (quantities && (quantities.numbers >= 2 || (quantities.numbers === 1 && quantities.judgments))) {
    return {
      shape: 'number',
      quantities: quantities.numbers,
      component: `${quantities.numbers >= 2 ? `one fillin per quantity (${quantities.numbers}), each closing with the quantity it asks` : 'fillin'}${quantities.judgments ? ', then a multiplechoice (yes or no) for the judgment' : ''}`,
    };
  }
  // "SeF₆:" is the label of a drawing that follows it, and "Yes" is not yttrium and einsteinium.
  if (/:$/.test(text) && text.split(' ').length <= 8) return { shape: 'drawing', component: 'selfcheck with the figure as the model answer (the text is the drawing\'s label)' };
  if (/^(?:yes|no)\b/i.test(text) && text.split(' ').length <= 8) return { shape: 'words', component: 'multiplechoice (yes or no), then a selfcheck for any reason' };
  const words = text.split(' ').length;
  // A thermochemical equation: an equation and its ΔH ("For the reaction
  // H₂(g) + Cl₂(g) ⟶ 2HCl(g) ΔH° = −184.6 kJ", 5.3). Its `=` is not an
  // arrow. Under a stem that asks a number and no equation ("What is the
  // enthalpy change …?") the page carries ONE fill-in keyed with the ΔH;
  // under one that asks the equation too, an equation text-in and a fill-in.
  const thermo = THERMOCHEMICAL.exec(text);
  if (thermo && chemCanon(thermo[1], 'equation')) {
    const key = thermo[2].replace(/[−–]/g, '-').replace(/,(?=\d{3})/g, '');
    if (!ASKS_EQUATION.test(stem)) return { shape: 'number', component: `fillin keyed ${key} (the ΔH: the stem asks a number, not the equation)`, key };
    return { shape: 'equation+', component: `textin answerForm="equation" for the equation, and a fillin keyed ${key} for its ΔH`, flag: 'a thermochemical equation and its ΔH under a stem that asks the equation: two items, an equation text-in and a ΔH fill-in' };
  }
  if (ARROW.test(text)) {
    const arrows = (text.match(/⟶|→|⇌/g) || []).length;
    if (arrows === 1 && chemCanon(text, 'equation')) {
      const problem = chemKeyProblem(text, 'equation', '', { written: false });
      return { shape: 'equation', component: 'textin answerForm="equation"', ...(problem ? { flag: problem } : {}) };
    }
    // One readable equation among other things: an equation and a mass, two equations.
    const pieces = text.split(/[,;]/).map((piece) => piece.trim()).filter((piece) => ARROW.test(piece));
    const readable = pieces.filter((piece) => chemCanon(piece, 'equation'));
    if (readable.length) {
      const problems = readable.map((piece) => chemKeyProblem(piece, 'equation', '', { written: false })).filter(Boolean);
      return { shape: 'equation+', component: 'one item per piece (textin answerForm="equation" for each equation)', ...(problems.length ? { flag: problems[0] } : {}) };
    }
    return { shape: 'equation+', component: 'selfcheck, or split by hand', flag: 'the equation does not read (a condition over the arrow, a nuclide, a structural formula, or a source typo)' };
  }
  if (NUMBER.test(text) && /^(?:\s|$)/.test(text.replace(NUMBER, '')) && text.replace(NUMBER, '').trim().split(' ').length <= 4) {
    return { shape: 'number', component: 'fillin' };
  }
  // A lettered answer under an unlettered stem ("(a) CH₂O; (b) C₂H₄O") is read piece by piece.
  const pieces = text.split(/[,;]|\s(?:and|or)\s/).map((piece) => piece.replace(/^\s*\([a-z]\)\s*/, '').trim()).filter(Boolean);
  const formulaLike = (piece) => /^[A-Z([^]/.test(piece) && /[A-Z]/.test(piece) && !/[a-z]{4,}/.test(piece) && !/[<>=]/.test(piece);
  if (pieces.length && pieces.every(formulaLike)) {
    const unread = pieces.filter((piece) => !chemCanon(piece, 'formula'));
    // Members of the stem's own list, named by the answer ("…isoelectronic
    // with Br⁺: Se²⁺, Se, As⁻, Kr, Ga³⁺, Cl⁻?" → "Se, As⁻"): yes or no to each.
    const members = listMembers(stem).map((member) => chemCanon(member, 'formula')).filter(Boolean);
    if (!unread.length && members.length >= 2 && pieces.every((piece) => members.includes(chemCanon(piece, 'formula')))) {
      // One member is one of the stem's closed set; two or more name members.
      if (pieces.length === 1) return { shape: 'formula', component: `multiplechoice whose options are the stem's list (${members.length}), in its order` };
      // Every member, in an order: an ordering printed with commas.
      if (pieces.length === members.length) return { shape: 'ordering', component: 'textin answerForm="ordering" (the answer lists every member in order, with commas: the key is written with <, and the source gate does not yet read a comma list — probe before the wave)' };
      return { shape: 'words', component: `one multiplechoice (yes or no) per member the stem lists (${members.length})` };
    }
    if (!unread.length && /\sor\s/.test(text)) {
      return { shape: 'formula', component: 'one textin answerForm="formula" keyed with the first, the others in accept' };
    }
    if (!unread.length) {
      return { shape: 'formula', component: pieces.length === 1 ? 'textin answerForm="formula"' : 'one textin answerForm="formula" per formula, each closing with whose (an element, a charge)' };
    }
    // A quantity's symbol beside a formula ("O, IE₁", 6.5): the formula item,
    // then the quantity's NAME as a plain textin with the symbol in accept.
    if (unread.every((piece) => /^[A-Z]{1,3}\s*_?\s*\d$/.test(piece)) && unread.length < pieces.length) {
      return { shape: 'formula', component: 'textin answerForm="formula" for the formula, then a textin for the quantity\'s name, its symbol in accept' };
    }
    if (/^\[(?:He|Ne|Ar|Kr|Xe|Rn)\]|\d[spdf]\s*\^/.test(text)) return { shape: 'words', component: 'selfcheck (an electron configuration: form open)' };
    return { shape: 'formula', component: 'textin answerForm="formula"', flag: `${JSON.stringify(unread[0])} does not read as a formula (a nuclide symbol, or a source typo)` };
  }
  if (NUMBER.test(text) && text.replace(NUMBER, '').trim().split(' ').length <= 4) {
    return { shape: 'number', component: 'fillin' };
  }
  if (words <= 8) return { shape: 'words', component: 'textin (a name) or multiplechoice (a set the stem names)' };
  return { shape: 'sentence', component: 'selfcheck' };
}

/** `{ numbers, judgments }` when every piece of an answer is a measured quantity or a yes/no, else null. */
export function quantityPieces(text) {
  const pieces = String(text).split(/;|\.\s+(?=[A-Z])/).map((piece) => piece.trim().replace(/\.$/, '')).filter(Boolean);
  let numbers = 0;
  let judgments = 0;
  for (const raw of pieces) {
    if (/^(?:yes|no)$/i.test(raw)) { judgments += 1; continue; }
    // A label before the number: "ν =", "Energy mol^{−1} =", "Red:".
    const piece = raw.replace(/^(?:[A-Za-zνλ][\w\s^{}−–-]*?\s*[:=]\s*)(?=[−–-]?\d)/, '');
    if (!NUMBER.test(piece)) return null;
    if (piece.replace(NUMBER, '').trim().split(' ').length > 4) return null;
    numbers += 1;
  }
  return numbers ? { numbers, judgments } : null;
}

function main(argv) {
  const chapter = Number(argv[0]);
  const all = chapters();
  if (!Number.isInteger(chapter) || !all[chapter - 1]) {
    console.error('usage: node tools/source/chemistry-shapes.mjs <chapter 1–21> [--list]');
    process.exit(2);
  }
  const list = argv.includes('--list');
  const SHAPES = ['number', 'formula', 'equation', 'equation+', 'configuration', 'ordering', 'quantum-numbers', 'subshell', 'words', 'sentence', 'drawing'];
  const flags = [];
  const notes = [];
  console.log(`Chapter ${chapter}, ${all[chapter - 1].title}: keyed answers by shape (one row per section; parts counted)`);
  console.log(['section', 'module', ...SHAPES, 'unkeyed'].join('\t'));
  all[chapter - 1].modules.forEach((moduleId, index) => {
    const file = path.join(bundle, 'modules', moduleId, 'index.cnxml');
    if (index === 0 || !existsSync(file)) return;
    const counts = Object.fromEntries([...SHAPES, 'unkeyed'].map((shape) => [shape, 0]));
    const lines = [];
    for (const unit of keyedUnits(readFileSync(file, 'utf8'))) {
      if (!unit.keyed) { counts.unkeyed += 1; continue; }
      // One of a closed set (keyed-units `closedSet`): the parts are the options.
      const read = unit.choices ? { shape: 'words', component: `one multiplechoice whose options are the stem's lettered parts (${unit.choices.length}), keyed (${unit.chosen})` } : shapeOf(unit.answer, unit.stem);
      counts[read.shape] += 1;
      const answer = unit.answer.replace(/\s+/g, ' ').trim();
      const imageOnly = unit.label && !unit.partText && (unit.media || []).length;
      lines.push(`  ${unit.id}\t${read.shape}\t${answer.slice(0, 90) || '(an image)'}\t→ ${read.component}${imageOnly ? ' — the part is only an image' : ''}`);
      if (read.flag) flags.push(`${chapter}.${index} ${moduleId} ${unit.id}: ${read.flag}\n    ${answer.slice(0, 160)}`);
      const where = `${chapter}.${index} ${moduleId} ${unit.id}`;
      // What the source gates need the page, or the parent, to do for this unit.
      if (imageOnly) {
        notes.push(`${where}: the part is only an image (${unit.media.join(', ')}) — its item sits under that mediafigure and says "the figure above"; the gates tell the parts apart by the figure`);
      }
      if (unit.label && unit.answered === false) {
        notes.push(`${where}: the solution prints no part (${unit.label}) — unkeyed inside a keyed exercise; the gates still expect it (rule on it: playbook "What is still open")`);
      } else if (unit.label && !answer) {
        notes.push(`${where}: the answer is only an image — a selfcheck with the figure as its model answer (playbook "Figures")`);
      }
      if (!unit.label && sequentialParts(unit.answer, { answer: true })) {
        notes.push(`${where}: a lettered answer under a stem with no parts — the parts are in the exercise or table the stem refers to; restate each datum (playbook "Stems")\n    ${unit.stem.slice(0, 140)}`);
      }
    }
    console.log([`${chapter}.${index}`, moduleId, ...SHAPES.map((shape) => counts[shape]), counts.unkeyed].join('\t'));
    if (list) console.log(lines.join('\n'));
  });
  console.log(flags.length
    ? `\nFlags — rule on each before the wave (a source defect, or a shape the forms do not read):\n${flags.join('\n')}`
    : '\nNo flags: every keyed formula reads and every keyed equation balances.');
  if (notes.length) console.log(`\nNotes — units the page must shape for the source gates:\n${notes.join('\n')}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main(process.argv.slice(2));
