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
//   node tools/source/chemistry-shapes.mjs <chapter> --figures  and every numeric key's figures and sign
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
import { keyedUnits, listMembers, printedNumerals, sequentialParts } from '../lib/keyed-units.mjs';
import { heatAsk, isNegativeKey } from '../lib/heat-ask.mjs';
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
    // …or one per atom and ion, labelled or not ("…3p¹; Al³⁺: 1s²2s²2p⁶";
    // "K⁺: [Ar], Mg²⁺: [Ne]", 7.1 — an ion's bare noble-gas core is one).
    const configurations = text.split(/[:;,]\s*|\.\s+(?=[A-Z])/).map((piece) => piece.trim()).filter((piece) => chemCanon(piece, 'configuration'));
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
      // The key is written with <, first to last as printed; the source gate reads the comma list so (7.2).
      if (pieces.length === members.length) return { shape: 'ordering', component: 'textin answerForm="ordering" (the answer lists every member in order, with commas: the key is written with <, first to last as printed)' };
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

/*
 * Figure counts and signs (--figures): a screen of every numeric source key
 * before the wave. Chapter 5's run facts named, from a first read, 4 of the
 * 13 keys that later moved for their figure count or their sign
 * (docs/briefs/chemistry/run.md, "The run facts screen EVERY numeric key").
 * Each row is a key beside the figures its stem's data carry and the heat
 * its question asks; a flag is a row the parent rules on, never a verdict:
 * an exact multiplier keeps a table value's figures (docs/subjects/chemistry.md
 * "Figure counts of a key"), and a table value is data this cannot see.
 */

/*
 * The measured data a stem prints. A numeral is a datum when it is written
 * with a decimal point ("1.00 pound") or in scientific notation ("3.00 ×
 * 10² g"), or when an integer is directly followed by a unit ("502 g",
 * "25 °C", "28.4-g", "−907 kJ"). A bare integer is not: "2 NH₃", "the 50
 * chemical compounds", "n = 5" are counts as often as measurements. Of the
 * integers followed by a unit three are left out: one after "exactly"
 * (chapter 5's "exactly 1 mole of H₂O₂"), a 1 ("1 Calorie per can", "1
 * kilowatt-hour (kWh) = …", "(1-oz)": a per-one statement or a definition),
 * and a count of moles or a nominal molarity ("2 moles", "1 M") — an amount
 * the equation fixes. A numeral named as a label ("Example 5.3", "Table 4")
 * is no datum. An integer's trailing zeros count as figures ("100 g" is
 * three): reading them as placeholders would flag nearly every key under
 * "100 g of water" or "2000 Calories".
 */
const DATA_UNIT = String.raw`(?:°\s?[CF]|º\s?[CF]|K\b(?!\s*[[(])|kWh\b|k?J\b|k?cal\b|Cal(?:orie)?s?\b|calories?\b|(?:kilo)?joules?\b|[kmµμ]?g\b|(?:kilo|milli)?grams?\b|m?L\b|lit(?:er|re)s?\b|mol(?:es?)?\b|M\b|atm\b|torr\b|mm\s?Hg\b|k?Pa\b|bar\b|oz\b|ounces?\b|lb\b|pounds?\b|gal(?:lons?)?\b|qt\b|quarts?\b|[kcmnµμp]?m\b|met(?:er|re)s?\b|in\.|inch(?:es)?\b|ft\b|feet\b|miles?\b|seconds?\b|min\b|minutes?\b|hours?\b|days?\b|years?\b|%|percent\b|amu\b|Hz\b|Å|ppm\b|ppb\b)`;
const FOLLOWED_BY_UNIT = new RegExp(String.raw`^[\s-]*${DATA_UNIT}`);
const MOLE_COUNT = /^[\s-]*(?:mol(?:es?)?\b|M\b)/;
const TEMPERATURE_UNIT = /^[\s-]*(°\s?[CF]|º\s?[CF]|K\b(?!\s*[[(]))/;
const LABEL_BEFORE = /\b(?:Example|Figure|Table|Exercise|Section|Appendix|Chapter|Equation|exactly)\s*$/i;
// keyedUnits flattens a stem's superscript: "1.28 × 10 5 kJ/gal".
const flatPower = (text) => String(text ?? '').replace(/([×x])\s*10\s+([−–-]?\d+)\b/g, '$1 10^{$2}');
// A unit's own exponent ("cm^{3}") blanked to its length, so a numeral's place in the text is kept.
const blankUnitExponents = (text) => text.replace(/(?<!(?:^|[\s×x(])10\s*)\^\{[^}]*\}/g, (match) => ' '.repeat(match.length));

/** Every numeral of a text with what follows it: [{ numeral, before, after }]. */
function numeralsInPlace(text) {
  const blanked = blankUnitExponents(flatPower(text).replace(/\s+/g, ' '));
  const out = [];
  let cursor = 0;
  for (const numeral of printedNumerals(blanked)) {
    const at = blanked.indexOf(numeral.printed, cursor);
    if (at < 0) continue;
    cursor = at + numeral.printed.length;
    out.push({ numeral, before: blanked.slice(0, at), after: blanked.slice(cursor) });
  }
  return out;
}

/** The figures a numeral is taken to carry as a datum: its trailing zeros counted. */
const datumFigures = (numeral) => numeral.sigMax;

/*
 * A difference of two temperatures has the figures its last place gives
 * (docs/subjects/chemistry.md "Figure counts of a key": 110 °C − 100 °C is
 * 10 °C, two figures). Three chapter 5 keys moved for it — the TNT item's
 * 11.7 (26.9 − 23.4), the precipitation item's 1.34 kJ (23.5 − 21.9), the
 * steam item's 7.43 g (110 − 100) — and no datum the stem prints has so few
 * figures, so a change of temperature the stem prints is a datum too: two
 * temperatures in a row, in one unit, the words between them ending in "to"
 * ("from 23.4 °C to 26.9 °C", "at 22.4 °C causes the temperature to rise to
 * 25.8 °C"). "from 95.0 to 35.0 °C" names its unit once. Two temperatures
 * not joined so are not paired: the steam item's "35.0 °C, as the heat
 * provided when 100 g of steam is cooled from 110 °C" is no change.
 */
function temperatureDifferences(placed) {
  const between = (a, b) => b.before.slice(a.before.length + a.numeral.printed.length);
  const temperatures = [];
  placed.forEach((entry, index) => {
    const next = placed[index + 1];
    const unit = TEMPERATURE_UNIT.exec(entry.after)?.[1]
      ?? (next && /^\s*to\s*$/.test(between(entry, next)) ? TEMPERATURE_UNIT.exec(next.after)?.[1] : undefined);
    if (unit) temperatures.push({ ...entry, unit: unit.replace(/\s/g, '').replace('º', '°') });
  });
  const out = [];
  for (let index = 1; index < temperatures.length; index += 1) {
    const [a, b] = [temperatures[index - 1], temperatures[index]];
    if (a.unit !== b.unit || !/\bto\s*$/.test(between(a, b))) continue;
    const low = Math.min(a.numeral.exponent, b.numeral.exponent);
    const value = (numeral) => (numeral.negative ? -1n : 1n) * numeral.mantissa * 10n ** BigInt(numeral.exponent - low);
    let difference = value(a.numeral) - value(b.numeral);
    if (difference < 0n) difference = -difference;
    const scale = 10n ** BigInt(Math.max(a.numeral.exponent, b.numeral.exponent) - low);
    const atPlace = (difference + scale / 2n) / scale;
    if (atPlace === 0n) continue;
    out.push({ figures: atPlace.toString().length, printed: `${a.numeral.printed} → ${b.numeral.printed}` });
  }
  return out;
}

/** The stem's measured data, each `{ figures, printed }`, temperature differences last. */
export function stemData(stem) {
  const placed = numeralsInPlace(stem);
  const data = [];
  for (const { numeral, before, after } of placed) {
    if (LABEL_BEFORE.test(before)) continue;
    const integer = !numeral.scientific && !/\./.test(numeral.printed);
    if (integer) {
      if (!FOLLOWED_BY_UNIT.test(after) || MOLE_COUNT.test(after)) continue;
      if (numeral.mantissa === 1n && numeral.exponent === 0) continue;
    }
    data.push({ figures: datumFigures(numeral), printed: numeral.printed });
  }
  return [...data, ...temperatureDifferences(placed)];
}

/*
 * The numerals a keyed answer gives as its keys. A number-shaped answer: one
 * per quantity, the first numeral of each (a formula after a unit, "mol H 2
 * O", is never read). A sentence or words answer whose key is a number —
 * chapter 5 moved six such keys: "The initial temperature of the copper was
 * 335.6 °C.", "1.34 × 10³ kJ, or 1.34 kJ; assume …", "q_rx = –39.0 kJ (the
 * reaction produced …)", "22.6. Since …", "… Energy required = 7.47 kWh",
 * "The temperature of the coffee will drop 1 degree." — gives the numeral it
 * opens with (after a short "label ="), else the one after an "=", else the
 * one a short sentence ends on.
 */
const LEADING_NUMERAL = /^\s*(?:[^=\d.;]{1,24}?=\s*)?(?=[−–-]?(?:\d|\.\d))/;
function keyNumerals(answer, read) {
  const text = String(answer ?? '').replace(/\s+/g, ' ').trim();
  if (read.shape === 'number') {
    if (read.key !== undefined) return printedNumerals(String(read.key)).slice(0, 1);
    const pieces = read.quantities ? text.split(/;|\.\s+(?=[A-Z])/) : [text];
    return pieces.map((piece) => printedNumerals(piece.replace(/^(?:[A-Za-zνλ][\w\s^{}−–-]*?\s*[:=]\s*)(?=[−–-]?\d)/, ''))[0]).filter(Boolean);
  }
  if (read.shape !== 'sentence' && read.shape !== 'words') return [];
  const opening = LEADING_NUMERAL.exec(text);
  if (opening) return printedNumerals(text.slice(opening[0].length)).slice(0, 1);
  const equals = /=\s*(?=[−–-]?(?:\d|\.\d))/.exec(text);
  if (equals) return printedNumerals(text.slice(equals.index + equals[0].length)).slice(0, 1);
  const ending = text.split(/(?<=\.)\s+(?=[A-Z])/).find((sentence) => sentence.split(' ').length <= 16
    && new RegExp(String.raw`[−–-]?\d[\d.,]*\s*(?:${DATA_UNIT}|degrees?\b)\s*\.?$`).test(sentence));
  return ending ? printedNumerals(ending).slice(-1) : [];
}

const figuresOf = (numeral) => (numeral.sigMin === numeral.sigMax ? String(numeral.sigMax) : `${numeral.sigMin}–${numeral.sigMax}`);

/**
 * The --figures rows of one keyed unit: one per key numeral, each
 * `{ key, figures, ambiguous, data: { figures, printed } | null, sign, heat,
 * flags, sentence }`, or [] for a unit whose key is no number.
 */
export function figureRows(unit) {
  if (!unit?.keyed || unit.choices) return [];
  const read = shapeOf(unit.answer, unit.stem);
  const keys = keyNumerals(unit.answer, read);
  if (!keys.length) return [];
  const data = stemData(unit.stem);
  const fewest = data.reduce((least, datum) => (!least || datum.figures < least.figures ? datum : least), null);
  const heat = heatAsk(unit.stem);
  return keys.map((numeral) => {
    const ambiguous = numeral.sigMin !== numeral.sigMax;
    const flags = [];
    if (!ambiguous && fewest && numeral.sigMax !== fewest.figures) flags.push('figures');
    if (ambiguous) flags.push('zeros');
    const negative = isNegativeKey(numeral.printed);
    if (negative && heat === 'amount') flags.push('sign');
    return {
      key: numeral.printed.trim(),
      figures: figuresOf(numeral),
      ambiguous,
      data: fewest,
      sign: negative ? '−' : '+',
      heat: heat ?? '',
      flags,
      sentence: read.shape !== 'number',
    };
  });
}

function main(argv) {
  const chapter = Number(argv[0]);
  const all = chapters();
  if (!Number.isInteger(chapter) || !all[chapter - 1]) {
    console.error('usage: node tools/source/chemistry-shapes.mjs <chapter 1–21> [--list] [--figures]');
    process.exit(2);
  }
  const list = argv.includes('--list');
  const figures = argv.includes('--figures');
  const figureLines = [];
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
      if (figures) figureLines.push(...figureRows(unit).map((row) => ({ where, ...row })));
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
  if (figures) printFigureRows(figureLines);
}

/** The --figures section: one row per numeric key, then the tally. */
function printFigureRows(rows) {
  console.log('\nFigure counts and signs — rule on every flagged row before the wave (a screen: a flag is a question, not a defect):');
  console.log(['where', 'key', 'figures', 'data (fewest)', 'sign', 'heat', 'flags'].join('\t'));
  for (const row of rows) {
    const data = row.data ? `${row.data.figures} (${row.data.printed})` : '–';
    console.log([row.where, row.key, row.figures, data, row.sign, row.heat, row.flags.join(' '), row.sentence ? '(read from a sentence answer)' : ''].join('\t').trimEnd());
  }
  const count = (flag) => rows.filter((row) => row.flags.includes(flag)).length;
  console.log(`${rows.length} rows; flagged: figures ${count('figures')}, zeros ${count('zeros')}, sign ${count('sign')}; ${rows.filter((row) => row.flags.length).length} rows carry a flag.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main(process.argv.slice(2));
