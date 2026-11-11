// A dry run of the two source gates over a Chemistry 2e chapter BEFORE it is
// authored (docs/briefs/chemistry/run.md §1 step 6a).
//
// The gates were written from the shapes of the chapters already on the
// site, and a shape they have not met fails a sound page in the middle of a
// wave — or lets a part go unrequired. This tool meets every shape first:
// for each keyed unit of each module it builds the item the page will carry,
// with the SOURCE's own stem and the SOURCE's own answer as its key, and
// asks the gates the three questions they will be asked of the real page:
//
//   seen      does verify-source-keys read the item as its own unit?
//   keyed     does it confirm the source's answer as the key (a number, a
//             formula, an equation; words and sentences are the checker's)?
//   covered   does verify-source-coverage call every keyed unit rendered
//             and every unkeyed one omitted, on a page of those items?
//
// Anything it prints is a gate to fix (with a test) or a unit the parent
// rules on in the run facts — before the wave, not after it.
//
// Usage:
//   node tools/source/chemistry-gate-probe.mjs <chapter>     one chapter, every finding
//   node tools/source/chemistry-gate-probe.mjs all           the book, one line per chapter
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { keyedUnits } from '../lib/keyed-units.mjs';
import { judgeKeyedUnit, labelledFormulas } from '../verify/verify-source-keys.mjs';
import { coverage, sourceExercises } from '../verify/verify-source-coverage.mjs';
import { chapters, shapeOf } from './chemistry-shapes.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const bundle = path.join(root, 'sources/openstax/osbooks-chemistry-bundle');

/** The stem as a shortcode parameter holds it. */
const quoted = (text) => text.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const figureOf = (unit) => (unit.label && !unit.partText && (unit.media || [])[0]) || '';
/**
 * What the page's stem says for the unit: its own words; "the figure above"
 * where the part is only an image; and, for a Check Your Learning that leans
 * on an earlier one ("the sweetened tea described in [Example 3.14]", 3.3),
 * that one's given data restated first, in its own sentence, as the playbook
 * has the page do ("Stems") — every word of the earlier stem, its question
 * made a statement, which is the most of the other unit a page can print.
 */
export const askOf = (unit, units = []) => {
  if (unit.choices) return unit.lead; // one of a closed set: the parts are the options, not the stem
  if (figureOf(unit)) return `${unit.stem} Answer for the structure shown in the figure above.`;
  const leant = unit.leansOn ? units.find((other) => other.id === unit.leansOn) : null;
  return leant ? `${leant.stem.replace(/\?\s*$/, '.').replace(/\?(?=\s)/g, '.')} ${unit.stem}` : unit.stem;
};

/**
 * The items the playbook's table gives a keyed answer, keyed with the
 * source's own text; empty where nothing is auto-graded. Two shapes are
 * carried as the page carries them: an answer of formulas each labelled in
 * words ("… (empirical formula), … (molecular formula)", 3.2) as one text-in
 * per formula, its closing sentence naming the label; and one of a closed
 * set (keyed-units.mjs `closedSet`, 3.1) as ONE multiple choice whose
 * options are the parts.
 */
export function itemsFor(unit, units) {
  const answer = unit.answer.replace(/\s+/g, ' ').trim().replace(/[.;]$/, '');
  const base = { question: askOf(unit, units), figure: figureOf(unit) };
  if (unit.choices) {
    const options = unit.choices.map((choice) => choice.text);
    return [{ ...base, type: 'multiplechoice', options, answer: options[unit.choices.findIndex((choice) => choice.label === unit.chosen)] }];
  }
  const labelled = labelledFormulas(answer, 'formula');
  if (labelled.length) {
    return labelled.map((entry) => ({ ...base, question: `${base.question} Enter the ${entry.label}${/formula$/.test(entry.label) ? '' : ' formula'}.`, type: 'textin', answer: entry.printed, form: 'formula' }));
  }
  const item = itemFor(unit, answer, base);
  return item ? [item] : [];
}

function itemFor(unit, answer, base) {
  const { shape } = shapeOf(answer);
  if (shape === 'number') {
    const numeral = /[−–-]?\d[\d,]*(?:\.\d+)?(?:\s*[×x]\s*10\s*\^\{[−–-]?\d+\})?/.exec(answer);
    if (!numeral) return null;
    const key = numeral[0].replace(/[−–]/g, '-').replace(/,(?=\d{3})/g, '').replace(/\s*[×x]\s*10\s*\^\{(-?\d+)\}/, '\\times10^{$1}');
    return { ...base, type: 'fillin', answer: key, form: '' };
  }
  if (shape === 'formula' && !/[,;]|\s(?:and|or)\s/.test(answer)) return { ...base, type: 'textin', answer, form: 'formula' };
  if (shape === 'equation') return { ...base, type: 'textin', answer, form: 'equation' };
  return null;
}

/** Every finding for one module: `{ unit, kind, detail }`. */
export function probeModule(xml) {
  const units = keyedUnits(xml);
  const keyed = units.filter((unit) => unit.keyed);
  const findings = [];
  for (const unit of keyed) {
    if (unit.label && unit.answered === false) continue; // reported by chemistry-shapes; ruled on, not probed
    const probe = unit.choices ? itemsFor(unit, units)[0] : { type: 'selfcheck', question: askOf(unit, units), figure: figureOf(unit), model: unit.answer };
    const seen = judgeKeyedUnit(probe, units);
    if (!seen) { findings.push({ unit: unit.id, kind: 'not seen', detail: 'the keys gate reads the unit\'s own stem as no exercise' }); continue; }
    if (seen.exercise.id !== unit.id) {
      // Two units with one stem and one answer are one question asked twice: either reading is right.
      const other = units.find((candidate) => candidate.id === seen.exercise.id);
      if (!other || other.answer !== unit.answer) findings.push({ unit: unit.id, kind: 'read as another', detail: `the keys gate reads the unit's own stem as ${seen.exercise.id}${other && !other.keyed ? ' (UNKEYED: the item would be refused)' : ''} — the two stems are one text; the page's item must differ by its restated data or its figure` });
      continue;
    }
    for (const item of itemsFor(unit, units)) {
      const verdict = judgeKeyedUnit(item, units);
      if (!verdict || !['confirmed', 'figures-differ', 'symbolic'].includes(verdict.status)) {
        findings.push({ unit: unit.id, kind: 'key not confirmed', detail: `${item.type}${item.form ? ` (${item.form})` : ''} keyed with the source's own ${JSON.stringify(item.answer.slice(0, 60))}: ${verdict ? verdict.status : 'no unit'} — a source defect, or an answer that is not the shape chemistry-shapes read` });
      }
    }
  }
  // One page carrying every keyed unit: a mediafigure above an image-only part, then its item.
  const page = keyed.filter((unit) => !(unit.label && unit.answered === false)).map((unit) => {
    const figure = figureOf(unit);
    if (unit.choices) {
      const [item] = itemsFor(unit, units);
      return `{{< multiplechoice question="${quoted(item.question)}" answer="${quoted(item.answer)}" hint="h" >}}\n${item.options.join('\n')}\n{{< /multiplechoice >}}\n`;
    }
    return `${figure ? `{{< mediafigure src="chemistry/${figure}" kind="diagram" alt="A structure." >}}\n{{< /mediafigure >}}\n\n` : ''}`
      + `{{< selfcheck question="${quoted(askOf(unit, units))}" hint="h" >}}\nModel answer.\n{{< /selfcheck >}}\n`;
  }).join('\n');
  const skipped = new Set(keyed.filter((unit) => unit.label && unit.answered === false).map((unit) => unit.id));
  for (const verdict of coverage(page, sourceExercises(xml), { keyedOnly: true })) {
    if (skipped.has(verdict.id)) continue;
    const isKeyed = keyed.some((unit) => unit.id === verdict.id || unit.group === verdict.id || unit.id === verdict.group);
    if (isKeyed && !['rendered', 'folded'].includes(verdict.status)) findings.push({ unit: verdict.id, kind: 'not covered', detail: `the coverage gate calls its own item ${verdict.status}` });
    if (!isKeyed && verdict.status !== 'omitted') findings.push({ unit: verdict.id, kind: 'unkeyed read as rendered', detail: `the coverage gate reads a keyed sibling's item as this unkeyed exercise (${verdict.status})` });
  }
  return { findings, keyed: keyed.length };
}

function main(argv) {
  const all = chapters();
  const which = argv[0] === 'all' ? all.map((_, index) => index + 1) : [Number(argv[0])];
  if (!which.every((chapter) => Number.isInteger(chapter) && all[chapter - 1])) {
    console.error('usage: node tools/source/chemistry-gate-probe.mjs <chapter 1–21 | all>');
    process.exit(2);
  }
  let total = 0;
  for (const chapter of which) {
    const lines = [];
    let keyed = 0;
    all[chapter - 1].modules.forEach((moduleId, index) => {
      const file = path.join(bundle, 'modules', moduleId, 'index.cnxml');
      if (index === 0 || !existsSync(file)) return;
      const result = probeModule(readFileSync(file, 'utf8'));
      keyed += result.keyed;
      for (const finding of result.findings) lines.push(`  ${chapter}.${index} ${moduleId} ${finding.unit}: ${finding.kind} — ${finding.detail}`);
    });
    total += lines.length;
    console.log(`Chapter ${chapter}, ${all[chapter - 1].title}: ${keyed} keyed units probed, ${lines.length} finding(s)`);
    if (argv[0] !== 'all' || argv.includes('--list')) console.log(lines.join('\n'));
  }
  if (which.length > 1) console.log(`\n${total} finding(s) across the book.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main(process.argv.slice(2));
