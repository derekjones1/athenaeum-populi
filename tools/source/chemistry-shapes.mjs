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
import { keyedUnits, sequentialParts } from '../lib/keyed-units.mjs';
import { chemCanon, chemKeyProblem } from '../../assets/js/lib/text/check-chem.mjs';

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
const NUMBER = /^[−–-]?\d[\d,.]*(?:\s*[×x]\s*10\s*\^?\s*\{?[−–-]?\d+\}?)?/;

/**
 * `{ shape, component, flag? }` for one keyed answer segment.
 * Shapes: number, formula, equation, equation+, words, sentence, drawing.
 */
export function shapeOf(answer) {
  const text = String(answer ?? '').replace(/\s+/g, ' ').trim().replace(/[.;]$/, '');
  if (!text) return { shape: 'drawing', component: 'selfcheck with the figure as the model answer' };
  // "SeF₆:" is the label of a drawing that follows it, and "Yes" is not yttrium and einsteinium.
  if (/:$/.test(text) && text.split(' ').length <= 8) return { shape: 'drawing', component: 'selfcheck with the figure as the model answer (the text is the drawing\'s label)' };
  if (/^(?:yes|no)\b/i.test(text) && text.split(' ').length <= 8) return { shape: 'words', component: 'multiplechoice (yes or no), then a selfcheck for any reason' };
  const words = text.split(' ').length;
  if (ARROW.test(text)) {
    const arrows = (text.match(/⟶|→|⇌/g) || []).length;
    if (arrows === 1 && chemCanon(text, 'equation')) {
      const problem = chemKeyProblem(text, 'equation');
      return { shape: 'equation', component: 'textin answerForm="equation"', ...(problem ? { flag: problem } : {}) };
    }
    // One readable equation among other things: an equation and a mass, two equations.
    const pieces = text.split(/[,;]/).map((piece) => piece.trim()).filter((piece) => ARROW.test(piece));
    const readable = pieces.filter((piece) => chemCanon(piece, 'equation'));
    if (readable.length) {
      const problems = readable.map((piece) => chemKeyProblem(piece, 'equation')).filter(Boolean);
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
    if (!unread.length) {
      return { shape: 'formula', component: pieces.length === 1 ? 'textin answerForm="formula"' : 'one textin answerForm="formula" per formula' };
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

function main(argv) {
  const chapter = Number(argv[0]);
  const all = chapters();
  if (!Number.isInteger(chapter) || !all[chapter - 1]) {
    console.error('usage: node tools/source/chemistry-shapes.mjs <chapter 1–21> [--list]');
    process.exit(2);
  }
  const list = argv.includes('--list');
  const SHAPES = ['number', 'formula', 'equation', 'equation+', 'words', 'sentence', 'drawing'];
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
      const read = shapeOf(unit.answer);
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
