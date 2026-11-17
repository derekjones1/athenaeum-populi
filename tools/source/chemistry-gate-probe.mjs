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
import { answerUnits, keyedUnits, listMembers, printedAbbreviations, twoUnitAnswer } from '../lib/keyed-units.mjs';
import { ELEMENT_BY_NAME, answerEquations, judgeKeyedUnit, labelledConfigurations, labelledFormulas, letteredSets } from '../verify/verify-source-keys.mjs';
import { chemCanon } from '../../assets/js/lib/text/check-chem.mjs';
import { CONFIGURATION_CLOSING, FORMAL_CHARGE_CLOSING, ORDERING_CLOSING, OXIDATION_STATE_CLOSING, QUANTUM_CLOSING } from '../lint/lints-leaks.mjs';
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
export function itemsFor(unit, units, { abbreviations = [] } = {}) {
  const answer = unit.answer.replace(/\s+/g, ' ').trim().replace(/[.;]$/, '');
  const base = { question: askOf(unit, units), figure: figureOf(unit) };
  const chapterSix = chapterSixItems(unit, answer, base, abbreviations);
  if (chapterSix) return chapterSix;
  if (unit.choices) {
    const options = unit.choices.map((choice) => choice.text);
    return [{ ...base, type: 'multiplechoice', options, answer: options[unit.choices.findIndex((choice) => choice.label === unit.chosen)] }];
  }
  const labelled = labelledFormulas(answer, 'formula');
  if (labelled.length) {
    return labelled.map((entry) => ({ ...base, question: `${base.question} Enter the ${entry.label}${/formula$/.test(entry.label) ? '' : ' formula'}.`, type: 'textin', answer: entry.printed, form: 'formula' }));
  }
  // One part asked and answered in two units ("1310 J; 313 cal", 5.1): one
  // fill-in per unit, each closing with a sentence that names its unit.
  const inUnits = twoUnitAnswer(answer, unit.stem);
  if (inUnits.length) {
    const asked = /[.?!:]$/.test(base.question.trim()) ? base.question.trim() : `${base.question.trim()}.`;
    return inUnits.map((name) => ({
      ...base, question: `${asked} Enter the value in ${UNIT_NAMES[name]}.`, type: 'fillin', form: '',
      answer: answerUnits(answer).find((entry) => entry.unit === name).numeral.printed.replace(/[−–]/g, '-').replace(/,(?=\d{3})/g, ''),
    }));
  }
  const several = severalItems(answer, base);
  if (several.length) return several;
  const item = itemFor(unit, answer, base);
  return item ? [item] : [];
}

/** The stem closed with its punctuation, then `closing`. */
const closed = (question, closing) => `${/[.?!:]$/.test(question.trim()) ? question.trim() : `${question.trim()}.`} ${closing}`;
const SYMBOL_NAME = new Map([...ELEMENT_BY_NAME].map(([name, symbol]) => [symbol, name]));

/**
 * Chapter 6's shapes (docs/subjects/chemistry.md "Exercises"), built as the
 * page carries them, or null: an electron configuration, an ordering, a
 * subshell, one count per label ("x. 2, y. 2, z. 2"), a count said beside
 * labels that are no numbers ("n = 4", "the five degenerate 3d orbitals"),
 * the members of the stem's list asked yes or no, two formulas after an
 * "or", a formula and a quantity's symbol ("O, IE₁"), two ions told apart
 * by charge, and counts and a configuration per element.
 */
function chapterSixItems(unit, answer, base, abbreviations) {
  const { shape, key } = shapeOf(answer, unit.stem);
  if (shape === 'ordering' && /</.test(answer)) return [{ ...base, question: closed(base.question, ORDERING_CLOSING), type: 'textin', answer, form: 'ordering' }];
  // An ordering printed with commas (7.2's "H, C, N, O, F"): keyed with <, first to last.
  if (shape === 'ordering') return [{ ...base, question: closed(base.question, ORDERING_CLOSING), type: 'textin', answer: answer.split(/,\s*|\s+and\s+/).map((member) => member.trim()).filter(Boolean).join(' < '), form: 'ordering' }];
  // An atom's configuration and its ion's, or two ions' (7.1): one item each,
  // closing with whose — "of the atom." / "of the ion.", or, for two ions of
  // two elements, "of the potassium ion." — keyed as printed.
  const configurations = shape === 'configuration' ? labelledConfigurations(answer) : [];
  if (configurations.length) {
    const symbols = new Set(configurations.map((entry) => entry.symbol).filter(Boolean));
    const ions = configurations.every((entry) => entry.charged);
    const whose = configurations.map((entry, index) => (ions && symbols.size === configurations.length
      ? `${SYMBOL_NAME.get(entry.symbol)} ion`
      : (entry.charged ?? (configurations.some((other) => other.charged) ? false : index > 0)) ? 'ion' : 'atom'));
    if (new Set(whose).size === whose.length) {
      return configurations.map((entry, index) => ({ ...base, question: closed(base.question, `Enter the electron configuration of the ${whose[index]}. ${CONFIGURATION_CLOSING}`), type: 'textin', answer: entry.printed, form: 'configuration' }));
    }
  }
  if (shape === 'subshell') return [{ ...base, type: 'textin', answer: answer.replace(/\s/g, ''), form: '' }];
  // A set of quantum numbers, keyed in the page's print ("4 0 0 +1/2"); one
  // per label where the answer prints one per orbital type (6.3).
  if (shape === 'quantum-numbers') {
    const print = (canon) => canon.replace(/-/g, '−');
    const one = chemCanon(answer, 'quantum-numbers');
    if (one) return [{ ...base, question: closed(base.question, QUANTUM_CLOSING), type: 'textin', answer: print(one), form: 'quantum-numbers' }];
    const sets = letteredSets(answer);
    if (sets.length) {
      return sets.map((entry) => ({ ...base, question: closed(base.question, `Enter the set for the orbital of type (${entry.label}) shown in the figure above. ${QUANTUM_CLOSING}`), type: 'textin', answer: print(entry.canon), form: 'quantum-numbers' }));
    }
    return null; // the sets of several electrons: a selfcheck, read by the selfcheck probe
  }
  if (shape === 'configuration' && chemCanon(answer, 'configuration')) {
    return [{ ...base, question: closed(base.question, CONFIGURATION_CLOSING), type: 'textin', answer, form: 'configuration' }];
  }
  if (shape === 'configuration') {
    // "Co has 27 protons, 27 electrons, and 33 neutrons: 1s²…. I has …"
    const items = [];
    for (const sentence of answer.split(/(?<=\.)\s+(?=[A-Z][a-z]?\s+has\b)/)) {
      const name = SYMBOL_NAME.get(/^([A-Z][a-z]?)\s+has\b/.exec(sentence)?.[1]);
      if (!name) return null;
      for (const [, count, what] of sentence.matchAll(/(\d+)\s+(protons|neutrons|electrons)\b/g)) {
        items.push({ ...base, question: closed(base.question, `Enter the number of ${what} in an atom of ${name}.`), type: 'fillin', answer: count, form: 'whole-number' });
      }
      const configuration = sentence.split(/:\s*/).pop().replace(/\.$/, '');
      items.push({ ...base, question: closed(base.question, `Enter the electron configuration of ${name}. ${CONFIGURATION_CLOSING}`), type: 'textin', answer: configuration, form: 'configuration' });
    }
    return items;
  }
  const labels = answer.split(/,\s*/);
  if (labels.length >= 2 && labels.every((piece) => /^[a-z]\.\s+[−–-]?\d+$/.test(piece))) {
    return labels.map((piece) => ({ ...base, question: closed(base.question, `Enter the number for the orbital of type (${piece[0]}).`), type: 'fillin', answer: piece.split(/\s+/).pop(), form: 'whole-number' }));
  }
  if (shape === 'number' && key !== undefined && /^\d+$/.test(String(key))) return [{ ...base, type: 'fillin', answer: String(key), form: 'whole-number' }];
  const pieces = answer.split(/,|\s(?:and|or)\s/).map((piece) => piece.trim()).filter(Boolean);
  const members = listMembers(unit.stem);
  const named = pieces.map((piece) => chemCanon(piece, 'formula'));
  if (members.length >= 2 && pieces.length >= 2 && pieces.length < members.length && named.every(Boolean)) {
    const lead = unit.stem.slice(0, unit.stem.lastIndexOf(':')).replace(/^Which (atom and\/or ion|[a-z ]+?) is(?: \(are\))?/i, 'Is the following atom or ion');
    return members.map((member) => ({
      ...base, question: `${lead}? ${member}`, type: 'multiplechoice', options: ['yes', 'no'],
      answer: named.includes(chemCanon(member, 'formula')) ? 'yes' : 'no',
    }));
  }
  if (/\sor\s/.test(answer) && named.every(Boolean) && pieces.length >= 2) {
    return [{ ...base, question: closed(base.question, 'Enter the element’s symbol.'), type: 'textin', answer: pieces[0], accept: pieces.slice(1).join('|'), form: 'formula' }];
  }
  // A formula and a quantity's symbol the module abbreviates ("O, IE₁").
  const symbol = pieces.find((piece) => !chemCanon(piece, 'formula') && /^[A-Z]{1,3}\s*_?\s*\d$/.test(piece));
  if (symbol && pieces.length === 2) {
    const name = abbreviations.find(([, abbreviation]) => abbreviation === symbol.replace(/[\s_]/g, ''));
    const formula = pieces.find((piece) => piece !== symbol);
    if (name && chemCanon(formula, 'formula')) {
      return [
        { ...base, question: closed(base.question, 'Enter the element’s symbol.'), type: 'textin', answer: formula, form: 'formula' },
        { ...base, question: closed(base.question, 'Enter the name of the energy.'), type: 'textin', answer: name[0], accept: name[1], form: '' },
      ];
    }
  }
  // Ions told apart by their charges ("Rb⁺, Se²⁻" under "Which ion with a +1 charge … Which ion with a –2 charge …").
  const charges = named.map((canon) => /\^(\d*)([+-])$/.exec(canon ?? ''));
  if (pieces.length >= 2 && charges.every(Boolean) && new Set(charges.map((charge) => charge[0])).size === pieces.length && /\bcharge\b/.test(unit.stem)) {
    return pieces.map((piece, at) => {
      const [, size, sign] = charges[at];
      return { ...base, question: closed(base.question, `Enter the symbol of the ion with a ${sign === '+' ? '+' : '–'}${size || 1} charge.`), type: 'textin', answer: piece, form: 'formula' };
    });
  }
  return null;
}

const UNIT_NAMES = { J: 'joules', kJ: 'kilojoules', cal: 'calories', kcal: 'kilocalories', Cal: 'Calories' };

/**
 * Chapter 4's answers that print several keys to one part, carried one item
 * per key with a closing sentence that says which (docs/subjects/chemistry.md
 * "Exercises"; the gate holds each item to its own key):
 *   several equations — "Enter the net ionic equation." by the answer's own
 *   label, or, unlabelled, "Enter the equation for the reaction of
 *   magnesium." by the one element only that equation holds;
 *   an element's symbol before each signed number ("H +1, P +5, O −2") —
 *   "Enter the oxidation state of P as a signed number, …";
 *   amounts in mol and in grams of a substance ("0.435 mol Na, 0.217 mol
 *   Cl₂, 15.4 g Cl₂") — the moles and the mass of the substance whose mass
 *   is printed: "Enter the number of moles of Cl₂.", "Enter the mass of
 *   Cl₂ in grams.".
 */
function severalItems(answer, unclosed) {
  // The part closes with its period before the added sentence ("Stems": every stem ends with its punctuation).
  const base = { ...unclosed, question: /[.?!:]$/.test(unclosed.question.trim()) ? unclosed.question.trim() : `${unclosed.question.trim()}.` };
  const equations = answerEquations(answer);
  if (equations.length >= 2) {
    const items = equations.map((entry) => {
      if (entry.label) return { closing: `Enter the ${entry.label.replace(/\s*equation$/, '').replace(/^(complete|net)$/, '$1 ionic')} equation.`, entry };
      const own = [...ELEMENT_BY_NAME].find(([, symbol]) => equations.filter((other) => new RegExp(`${symbol}(?![a-z])`).test(other.printed)).length === 1
        && new RegExp(`${symbol}(?![a-z])`).test(entry.printed));
      return own ? { closing: `Enter the equation for the reaction of ${own[0]}.`, entry } : null;
    });
    if (items.every(Boolean)) return items.map(({ closing, entry }) => ({ ...base, question: `${base.question} ${closing}`, type: 'textin', answer: entry.printed, form: 'equation' }));
  }
  // Oxidation states AND formal charges, each list after its heading
  // ("Oxidation states P +1, … O –2. Formal charges: P 0; S 0; Cl +2: O –1",
  // 8.2): one fill-in per entry, each closing with its own list's sentence.
  const headed = /\boxidation states?\b/i.exec(answer) && /\bformal charges?\b/i.exec(answer);
  if (headed) {
    const at = answer.search(/\bformal charges?\b/i);
    const lists = [[answer.slice(0, at), OXIDATION_STATE_CLOSING], [answer.slice(at), FORMAL_CHARGE_CLOSING]];
    return lists.flatMap(([text, closing]) => [...text.replace(/^\s*(?:oxidation states?|formal charges?)\s*:?/i, ' ')
      .matchAll(/(?:^|[\s,;:])([A-Z][a-z]?)\s*:?\s*([+−–-]?\s?\d+)(?=\s*(?:[,;:.]|$))/g)]
      .map((match) => ({ ...base, question: `${base.question} ${closing.replace('<Symbol>', match[1]).replace(/as \+\d+ or −\d+\.$/, 'as +3 or −3.')}`, type: 'fillin', answer: match[2].replace(/[−–]/g, '-').replace(/[+\s]/g, ''), form: 'whole-number' })));
  }
  const states = [...answer.matchAll(/(?:^|[\s,;])([A-Z][a-z]?)\s*,?\s+([+−–-]\s?\d+)(?=\s*(?:[,;.]|$))/g)];
  if (new Set(states.map((match) => match[1])).size >= 2) {
    return states.map((match) => ({ ...base, question: `${base.question} Enter the oxidation state of ${match[1]} as a signed number, the sign first, as +2 or −1.`, type: 'fillin', answer: match[2].replace(/[−–]/g, '-').replace(/[+\s]/g, ''), form: 'whole-number' }));
  }
  const amounts = answer.split(/[,;]/).map((piece) => /([−–-]?\d[\d.]*(?:\s*[×x]\s*10\s*\^\{[−–-]?\d+\})?)\s+(mol|kg|g)\s+(.+)$/.exec(piece.trim()))
    .filter(Boolean).map(([, number, unit, formula]) => ({ number: number.replace(/[−–]/g, '-').replace(/\s*[×x]\s*10\s*\^\{(-?\d+)\}/, '\\times10^{$1}'), unit, formula: formula.replace(/\s/g, '') }));
  const mass = amounts.filter((entry) => entry.unit !== 'mol').pop();
  const moles = mass && (amounts.filter((entry) => entry.unit === 'mol' && entry.formula === mass.formula).pop() || amounts.filter((entry) => entry.unit === 'mol').pop());
  if (mass && moles) {
    return [
      { ...base, question: `${base.question} Enter the number of moles of ${mass.formula}.`, type: 'fillin', answer: moles.number, form: '' },
      { ...base, question: `${base.question} Enter the mass of ${mass.formula} in ${mass.unit === 'kg' ? 'kilograms' : 'grams'}.`, type: 'fillin', answer: mass.number, form: '' },
    ];
  }
  return [];
}

function itemFor(unit, answer, base) {
  const { shape, key: thermochemical, quantities } = shapeOf(answer, unit.stem);
  // Several quantities to one part: each item's closing sentence is the
  // author's to write ("Enter the mole fraction of CH₃OH."), so none is built.
  if (shape === 'number' && quantities >= 2) return null;
  // A thermochemical answer under a stem that asks a number: the ΔH alone (5.3).
  if (shape === 'number' && thermochemical) return { ...base, type: 'fillin', answer: thermochemical, form: '' };
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
  const abbreviations = printedAbbreviations(xml);
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
    const items = itemsFor(unit, units, { abbreviations });
    for (const item of items) {
      const verdict = judgeKeyedUnit(item, units, { abbreviations });
      if (!verdict || !['confirmed', 'figures-differ', 'symbolic'].includes(verdict.status)) {
        findings.push({ unit: unit.id, kind: 'key not confirmed', detail: `${item.type}${item.form ? ` (${item.form})` : ''} keyed with the source's own ${JSON.stringify(item.answer.slice(0, 60))}: ${verdict ? verdict.status : 'no unit'} — a source defect, or an answer that is not the shape chemistry-shapes read` });
      }
      // Several keys to one part, one item each: every item must refuse its
      // siblings' keys, or the closing sentence that says which is not read.
      for (const other of items) {
        if (other === item || other.type !== item.type || (other.form || '') !== (item.form || '') || other.answer === item.answer) continue;
        const swapped = judgeKeyedUnit({ ...item, answer: other.answer }, units, { abbreviations });
        if (swapped?.status === 'confirmed') findings.push({ unit: unit.id, kind: 'swap confirmed', detail: `the item that closes ${JSON.stringify(item.question.split(/(?<=[.?!])\s+/).pop())} is confirmed keyed with its sibling's ${JSON.stringify(other.answer.slice(0, 40))}` });
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
    if (twoUnitAnswer(unit.answer, unit.stem).length) {
      return itemsFor(unit, units).map((item) => `{{< fillin question="${quoted(item.question)}" answer="${item.answer}" hint="h" >}}\n`).join('\n');
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
