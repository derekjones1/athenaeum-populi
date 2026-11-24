/**
 * check-text — deterministic grading for short TEXT answers (a term, a name,
 * a short phrase). The math grader in ../math/check-answer.mjs cannot take
 * words at all: MathLive parses `undefined` as `def\in ed`, so any word answer
 * either lint-fails (`\text{}` keys) or marks correct learners wrong. This
 * module is the other half of that decision — words are graded here, values
 * are graded there, and nothing crosses over.
 *
 * Grading is a normalized exact match against the keyed answer or any of the
 * author-listed alternates. There is deliberately NO fuzzy tolerance: an
 * edit-distance rule would accept `ribozyme` for `ribosome`, and a subject
 * whose vocabulary is full of near-miss pairs (mitosis/meiosis,
 * glycogen/glucagon) cannot afford it. The one fold beyond normalization is
 * the regular English plural, in BOTH directions: a typed answer that is an
 * accepted form plus a trailing `s` or `es` grades correct (`cells` for
 * `cell`), and so does a typed answer that is an accepted form minus its
 * regular-plural ending (`receptor` for `receptors`, `gas` for `gases`). The
 * singular direction is narrower (see `singularFolds`): it strips only a last
 * word SHAPED like a regular plural, because a trailing `s` on `genus`,
 * `taxis`, `species`, `genetics`, or `70S` is not a plural and stripping it
 * lands on a different word (`genu`, `taxi`, `specie`, `genetic`, `70`).
 * There is no stemming behind either direction, so `hypotheses` is still NOT
 * `hypothesis` + s and an irregular plural (or an irregular singular) is
 * listed.
 * One more fold reads a parenthetical: `X (Y)` — a term typed with its
 * abbreviation or expansion in parentheses (`cyclic AMP (cAMP)`,
 * `CAP (catabolite activator protein)`) — grades correct when X and Y EACH
 * grade correct on their own, so the learner who names both forms is not
 * marked wrong and a hedge (`cAMP (cGMP)`) still fails (September 23, 2026:
 * blind solvers wrote the form three times in one pass).
 * The author names every other accepted spelling (irregular plural or
 * singular, British, abbreviation) in `accept`; the lint checks they are
 * distinct, not a plural or singular the fold already covers, and not
 * printed in the question.
 */

import { checkChem } from './check-chem.mjs';
import { systematicName } from './older-names.mjs';
import { FIXED_CHARGE, ionicName } from './prefix-names.mjs';

const DIACRITICS = /[̀-ͯ]/g;
const DASHES = /[‐‑‒–—−]/g;
// U+02B9 (modifier letter prime) is what OpenStax types for 5ʹ/3ʹ in some
// modules; it is a letter to Unicode, so the letter filter would keep it.
const QUOTES = /[‘’‚‛′ʹʼ]/g;
const LEADING_ARTICLE = /^(?:a|an|the) /;
// The three element names English spells two ways, and every word built on
// them: sulphate, sulphuric, aluminium, caesium. IUPAC itself prints
// "aluminium" and "caesium" where OpenStax prints "aluminum" and "cesium", so
// a compound's name typed either way is the same name (November 9, 2026,
// before Chemistry 2e's nomenclature chapter: a fold here, not an accept
// member on every sulfate).
const BRITISH = [[/sulph/g, 'sulf'], [/\baluminium\b/g, 'aluminum'], [/\bcaesium\b/g, 'cesium']];

/**
 * Canonical form of a learner's or author's text: Unicode-decomposed with
 * diacritics dropped (`naïve` → `naive`), lowercased, apostrophes removed
 * (`Hooke's` → `hookes`), every hyphen/dash/slash/underscore read as a space
 * (`light-dependent` ≡ `light dependent`), other punctuation dropped,
 * whitespace collapsed, and one leading article removed (`the cell` ≡
 * `cell`). Numerals survive so `Type 2 diabetes` keeps its 2.
 */
export function normalizeText(value) {
  return canonical(value, ' ');
}

/**
 * The same canonical form with every hyphen/dash read as NOTHING instead of
 * a space (`fore-gut` → `foregut`, `semi-conservative` → `semiconservative`),
 * so a hyphenated respelling of a closed compound grades the same as the
 * compound (October 27, 2026). A slash or underscore is still a space. The
 * grader compares inputs and forms under BOTH readings; a spaced respelling
 * (`fore gut`) folds under neither, since folding spaces away would read
 * any two words as one.
 */
export function closedForm(value) {
  return canonical(value, '');
}

function canonical(value, hyphen) {
  // The increment sign (U+2206, what Option-J types on a Mac) is a math
  // symbol, not a letter, and would be dropped below with the punctuation;
  // read it as the Greek capital delta it stands for.
  let text = String(value ?? '').replace(/\u2206/g, '\u0394').normalize('NFKD').replace(DIACRITICS, '');
  text = text.toLowerCase();
  text = text.replace(QUOTES, '').replace(/'/g, '');
  text = text.replace(DASHES, '-').replace(/-+/g, hyphen).replace(/[_/]+/g, ' ');
  text = text.replace(/[^\p{L}\p{N}\s]/gu, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  text = text.replace(LEADING_ARTICLE, '');
  for (const [pattern, american] of BRITISH) text = text.replace(pattern, american);
  return text;
}

/** The keyed answer plus its `|`-separated alternates, normalized, deduped, non-empty. */
export function acceptedForms(answer, accept = '', normalize = normalizeText) {
  const forms = [answer, ...String(accept ?? '').split('|')].map(normalize).filter(Boolean);
  return [...new Set(forms)];
}

/**
 * The regular plurals the grader folds onto one normalized form: exactly
 * `form + "s"` and `form + "es"`, nothing else. Exported so the lint can
 * name an accept member the fold already covers and a question that prints
 * a folded form.
 */
export function pluralFolds(form) {
  return form ? [`${form}s`, `${form}es`] : [];
}

// A last word whose trailing `s` is not a plural ending: `-ss` (stress,
// moss), `-us` (genus, virus, thymus), `-is` (mitosis, taxis, axis), `-ics`
// (genetics, thermodynamics — a discipline, whose strip is the adjective),
// and `-ies` (species; a regular `-ies` plural's singular is `-y`, which no
// strip produces, so stripping one can only land on a non-word or a wrong
// word like `specie`).
const NOT_A_PLURAL_ENDING = /(?:ss|us|is|ics|ies)$/;
// `-es` is the plural ending only after a sibilant (gases, boxes, branches,
// dishes); after anything else the `s` alone is (genes → gene, not `gen`;
// rates → rate, not `rat`).
const SIBILANT_ES = /(?:s|x|z|ch|sh)es$/;

/**
 * The regular singulars the grader folds onto one normalized form — the
 * reverse of `pluralFolds`, restricted to a last word shaped like a regular
 * English plural: at least three characters, ending in `s` after a LETTER
 * (`70S` is a unit, not a plural), and not in `-ss`/`-us`/`-is`/`-ics`/`-ies`.
 * Such a form yields itself minus `s`, plus itself minus `es` when the `es`
 * follows a sibilant. Measured September 22, 2026 over every textin in the
 * corpus: the excluded shapes were exactly where the strip landed on a
 * different real word (genu, taxi, specie, genetic, 70).
 */
export function singularFolds(form) {
  const last = String(form ?? '').split(' ').at(-1);
  if (last.length < 3 || !/\p{L}s$/u.test(last) || NOT_A_PLURAL_ENDING.test(last)) return [];
  const folds = [form.slice(0, -1)];
  if (SIBILANT_ES.test(last)) folds.push(form.slice(0, -2));
  return folds;
}

/** Every spelling one normalized form grades besides itself: its regular plurals and regular singulars. */
export function foldedForms(form) {
  return [...pluralFolds(form), ...singularFolds(form)];
}

/** Does a normalized input match a normalized form, directly or through the two-way regular-plural fold? */
export function matchesForm(normalized, form) {
  return normalized === form || foldedForms(form).includes(normalized);
}

/**
 * Grade a response and say why: `{ status, message? }`. A `form` of
 * `formula` or `equation` hands the response to check-chem.mjs, which reads
 * capitals, subscripts, charges, and coefficients where this module reads
 * words; its `form` status is a right answer not yet in the form asked for,
 * as the math grader's is.
 *
 * A word answer has one `form` reading of its own: an OLDER NAME of the keyed
 * compound ("ferrous chloride" where the key is "iron(II) chloride"). The
 * learner has the compound right and the name out of date, so the verdict
 * says that instead of "Not quite" and the field stays open; the older name
 * of a different compound ("ferric chloride") is plainly incorrect. Only
 * this function reads it — `checkText`, which every gate calls, still
 * answers `incorrect`, so no gate can take an older name for a key.
 *
 * It has a second: a GREEK-PREFIX NAME of a keyed metal compound ("titanium
 * tetrachloride" where the key is "titanium(IV) chloride"). The compound is
 * right and the naming method is the one for two nonmetals, so the verdict
 * says which method the item asks for (prefix-names.mjs); the same rule —
 * `gradeText` only, never a gate — holds it.
 *
 * And two more, for a name keyed with a metal's charge: the name typed
 * WITHOUT its Roman numeral is `incorrect` with a sentence that says a
 * numeral is needed (which chloride of iron is not said), and the right
 * charge typed as an ordinary number is `form` (`numeralProblem`).
 */
export function gradeText(input, answer, { accept = '', form = '' } = {}) {
  if (form) return checkChem(input, answer, { accept, form });
  const status = checkText(input, answer, { accept });
  // A subshell's letter typed without its shell number: incomplete, and said so.
  if (status === 'incorrect' && SUBSHELL.test(String(answer ?? '').trim())
    && /^[spdf](?:\s+(?:subshells?|orbitals?))?$/.test(normalizeText(input).replace(/^the\s+/, ''))) {
    return { status: 'incorrect', message: SUBSHELL_LETTER_ONLY };
  }
  // A hybridization key answered with its own orbitals in another order, or
  // with a molecular shape's name: said, and the label not given.
  if (status === 'incorrect' && isHybridKey(answer)) {
    const typed = hybridOrbitals(input);
    if (typed && hybridLabel(input) === hybridLabel(answer)) return { status: 'form', message: HYBRID_ORDER_MESSAGE };
    if (SHAPE_NAME.test(normalizeText(String(input ?? '').replace(ANGLE_AFTER, '')))) return { status: 'incorrect', message: HYBRID_SHAPE_MESSAGE };
    return { status };
  }
  if (status === 'incorrect' && unitSymbolCaseMiss(input, answer, accept)) return { status: 'form', message: UNIT_SYMBOL_CASE_MESSAGE };
  if (status === 'incorrect' && isOlderName(input, answer, { accept })) {
    return { status: 'form', message: OLDER_NAME_MESSAGE };
  }
  if (status === 'incorrect' && isPrefixName(input, answer, { accept })) {
    return { status: 'form', message: PREFIX_NAME_MESSAGE };
  }
  if (status === 'incorrect') {
    const numeral = numeralProblem(input, answer, { accept });
    if (numeral === 'arabic') return { status: 'form', message: ARABIC_NUMERAL_MESSAGE };
    if (numeral === 'missing') return { status: 'incorrect', message: MISSING_NUMERAL_MESSAGE };
    if (hasUnneededNumeral(input, answer, { accept })) return { status: 'form', message: UNNEEDED_NUMERAL_MESSAGE };
  }
  return { status };
}

// A metal of one charge named with that charge as a Roman numeral —
// "aluminum(III) fluoride" for aluminum fluoride (Chemistry 2e 2.7; audit
// G13, November 24, 2026: a bare "Not quite"). IUPAC allows the numeral and
// 2.7's own example writes "gallium(III) nitride", so the compound is right
// and the name carries what the book leaves out: `form`. A numeral that is
// not the metal's charge stays plainly incorrect. Gives no metal and no number.
export const UNNEEDED_NUMERAL_MESSAGE = 'This metal forms only one ion, so its name needs no Roman numeral: name the compound without it.';

/** Is the response the key with the metal's one charge added as a Roman numeral? */
export function hasUnneededNumeral(input, answer, { accept = '' } = {}) {
  const words = normalizeText(input).split(' ').filter(Boolean);
  if (words.length < 3) return false;
  const charge = ROMAN_NUMERALS.indexOf(words[1]);
  if (charge < 1 || FIXED_CHARGE.get(words[0]) !== charge) return false;
  return checkText([words[0], ...words.slice(2)].join(' '), answer, { accept }) === 'correct';
}

// Says nothing of the answer: not the metal, not the numeral.
export const OLDER_NAME_MESSAGE = 'That is an older name. Give the systematic name.';

/** Is the response a classical (-ous/-ic) name of the compound the item keys? */
export function isOlderName(input, answer, { accept = '' } = {}) {
  const systematic = systematicName(normalizeText(input));
  return Boolean(systematic) && checkText(systematic, answer, { accept }) === 'correct';
}

// Says nothing of the answer — not the metal, not whether a numeral is
// needed — and does not call the name wrong: IUPAC allows it. It says which
// of Section 2.7's two naming methods the item asks for.
export const PREFIX_NAME_MESSAGE = 'That name counts the atoms with Greek prefixes, as a compound of two nonmetals is named. Name a metal’s compound as an ionic compound, without prefixes.';

/**
 * Is the response a Greek-prefix name ("titanium tetrachloride") of the
 * metal compound the item keys ("titanium(IV) chloride")? The name's counts
 * must give the charge the key prints — or, for a key with no numeral, the
 * one charge of a metal the book names without one — so the prefix name of
 * another compound ("titanium trichloride") is not read as this one.
 */
export function isPrefixName(input, answer, { accept = '' } = {}) {
  const ionic = ionicName(normalizeText(input));
  if (!ionic) return false;
  if (checkText(ionic.numeral, answer, { accept }) === 'correct') return true;
  return ionic.fixed && checkText(ionic.bare, answer, { accept }) === 'correct';
}

// A name keyed with a charge — "iron(II) chloride" — typed without the
// numeral, or with the charge as an ordinary number. Both were a bare "Not
// quite" on eleven items of Chemistry 2.7 until November 14, 2026, and the
// missing numeral is the commonest slip in naming. Neither message gives
// the numeral; `gradeText` only, so no gate reads either as the key.
export const MISSING_NUMERAL_MESSAGE = 'This metal forms more than one ion, so the name must say which: add the ion’s charge as a Roman numeral in parentheses after the metal’s name.';
export const ARABIC_NUMERAL_MESSAGE = 'That is the right compound — now write the metal ion’s charge as a Roman numeral, not as an ordinary number.';

const ROMAN_NUMERALS = ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'];
// "iron(II)", "Iron (III)": a word, then a Roman numeral in parentheses —
// the one place this book writes a numeral, so "Type I" is never read.
const CHARGED_METAL = /^\s*(?:the\s+)?[A-Za-z]+\s*\((I{1,3}|IV|VI{0,3}|V)\)/i;

/**
 * What is wrong with the numeral of a typed name, against a key that
 * prints a metal's charge: `'missing'` when the name is the key's without
 * its numeral ("iron chloride"), `'arabic'` when the right charge is typed
 * as an ordinary number ("iron(2) chloride", "iron 2+ chloride"), else
 * `null`. The typed name is rebuilt WITH the key's numeral and graded, so
 * every fold the grader makes is made here too, and a wrong charge
 * ("iron(3) chloride" for iron(II) chloride) is read as nothing.
 */
export function numeralProblem(input, answer, { accept = '' } = {}) {
  const numerals = new Set([answer, ...String(accept ?? '').split('|')]
    .map((member) => CHARGED_METAL.exec(String(member ?? ''))?.[1].toLowerCase())
    .filter(Boolean));
  if (!numerals.size) return null;
  const words = normalizeText(input).split(' ').filter(Boolean);
  // A name that already carries a numeral is not read: a wrong one is wrong.
  if (!words.length || (words[1] && ROMAN_NUMERALS.includes(words[1]))) return null;
  const graded = (name) => checkText(name, answer, { accept }) === 'correct';
  for (const numeral of numerals) {
    if (words[1] === String(ROMAN_NUMERALS.indexOf(numeral)) && graded([words[0], numeral, ...words.slice(2)].join(' '))) return 'arabic';
    if (graded([words[0], numeral, ...words.slice(1)].join(' '))) return 'missing';
  }
  return null;
}

/**
 * @returns {'empty'|'correct'|'incorrect'|'form'} — `form` only under a
 * chemistry `form`; an older name is `incorrect` here (see `gradeText`).
 */
const SUBSHELL = /^[1-7][spdf]$/i;
/** A typed subshell, its inner space and a trailing "subshell" or "orbital(s)" dropped ("2 p orbitals" → "2p"), or null. */
const subshellTyped = (normalized) => {
  const bare = normalized.replace(/^the\s+/, '').replace(/\s+(?:subshells?|orbitals?)$/, '').replace(/\s+/g, '');
  return SUBSHELL.test(bare) ? bare : null;
};
/** Said to a bare subshell letter ("p") against a key that is a subshell (Chemistry 2e 6.3). */
export const SUBSHELL_LETTER_ONLY = 'Give the shell number with the letter.';

/**
 * A hybridization label (Chemistry 2e chapter 8): `sp`, `sp²`, `sp³`, `sp³d`,
 * `sp³d²`, as the page keys it. `hybridOrbitals` reads a key or a typed
 * response as the orbitals it mixes — `{ s, p, d, order }`, each count, and
 * the letters in the order typed — or null when it is no such label. What it
 * folds, in the manner of the subshell fold: capitals, a superscript typed as
 * a digit, `^`, braces, spaces and hyphens inside the label (`sp^3d`,
 * `sp^{3}d`, `sp 3`, `SP3D`), a count of 1 written out (`s1p3`), a leading
 * "the", and a trailing "hybridized", "hybridization", "hybrid", or "hybrid
 * orbital(s)" (`sp3 hybridized`, `sp3-hybridized`, `sp3 hybrid orbitals`).
 * Each letter is written once.
 */
const HYBRID_KEY = /^sp(?:[23](?:d2?)?)?$/;
const HYBRID_WORDS = /(?:\s|-)+(?:hybridi[sz]ed|hybridi[sz]ation|hybrids?(?:\s+(?:atomic\s+)?orbitals?)?|orbitals?)$/;
export function hybridOrbitals(value) {
  let text = String(value ?? '').normalize('NFKC').toLowerCase().trim().replace(/[.!]+$/, '').trim();
  text = text.replace(/^the\s+/, '');
  for (let again = true; again;) {
    const shorter = text.replace(HYBRID_WORDS, '').trim();
    again = shorter !== text;
    text = shorter;
  }
  text = text.replace(/[\s^{}\-‐‑–—_]+/g, '');
  if (!/^(?:[spd]\d?){1,3}$/.test(text)) return null;
  const counts = { s: 0, p: 0, d: 0 };
  const order = [];
  for (const [, letter, count] of text.matchAll(/([spd])(\d?)/g)) {
    if (counts[letter]) return null;
    counts[letter] = Number(count || 1);
    order.push(letter);
  }
  if (!counts.s || !counts.p || counts.s !== 1 || counts.p > 3 || counts.d > 5) return null;
  return { ...counts, order: order.join('') };
}
/** The label in print order, s then p then d, superscripts as digits ("sp3d2"), or null. */
export function hybridLabel(value) {
  const orbitals = hybridOrbitals(value);
  if (!orbitals) return null;
  return `s${orbitals.p > 1 ? `p${orbitals.p}` : 'p'}${orbitals.d ? (orbitals.d > 1 ? `d${orbitals.d}` : 'd') : ''}`;
}
/** Is the keyed answer a hybridization label (sp, sp², sp³, sp³d, sp³d²)? */
export const isHybridKey = (answer) => HYBRID_KEY.test(String(answer ?? '').normalize('NFKC').trim());
/** Said to the key's own orbitals in another order: `dsp3` against `sp³d`, `d2sp3` against `sp³d²`. Gives no label. */
export const HYBRID_ORDER_MESSAGE = 'Write the orbitals in the order s, p, d.';
/** Said to a molecular shape's name typed against a hybridization key. Gives no label. */
export const HYBRID_SHAPE_MESSAGE = 'That names a shape. The question asks for the hybridization: which atomic orbitals mix, and how many of each.';

/**
 * A molecular shape's name (Chemistry 2e 7.6), the keys an angle may follow:
 * the source prints "bent (109°)", "bent (<120°)", and a learner copying the
 * book's print is right. Only against such a key, and only a parenthesis
 * that holds a number and a degree sign, optionally after < or ≈.
 */
const SHAPE_NAME = /^(?:linear|bent|angular|trigonal planar|trigonal pyramidal|trigonal pyramid|tetrahedral|trigonal bipyramidal|trigonal bipyramid|seesaw|sawhorse|t shaped|square planar|square pyramidal|octahedral)$/;
const ANGLE_AFTER = /\s*\(\s*[<≈]?\s*\d+(?:\.\d+)?\s*°\s*\)\s*$/;
// …and the source's own qualifier after a shape: "bent, with two lone
// pairs" (Chemistry 2e 8.2, printed 19(b), the source's answer verbatim).
const LONE_PAIRS_AFTER = /\s*,?\s*with\s+(?:a|an|one|two|three|four|\d+)\s+lone\s+pairs?\s*\.?\s*$/i;

/*
 * A unit's symbol is case-sensitive: `M` is mega (or molar), not meter, and
 * `KG` is no symbol (Chemistry 2e 1.4; audit G11, November 24, 2026: the
 * word grader lowercased both into the `m` and `kg` accept members). Read
 * only against a key that NAMES a unit, and only of a member that is that
 * unit's symbol, so no other short accept member (DNA, ATP) gains case.
 * A response that is the symbol with other capitals is `form`, as wrong
 * capitals on a formula are; the message gives no symbol.
 */
const UNIT_NAMES = new Set(['meter', 'metre', 'kilogram', 'gram', 'second', 'kelvin', 'ampere', 'mole', 'candela', 'liter', 'litre', 'joule', 'pascal', 'newton', 'watt', 'hertz']);
const UNIT_SYMBOLS = new Set(['m', 'kg', 'g', 's', 'K', 'A', 'mol', 'cd', 'L', 'l', 'J', 'Pa', 'N', 'W', 'Hz']);
export const UNIT_SYMBOL_CASE_MESSAGE = 'Those are the right letters — now fix the capitals: in a unit’s symbol, a capital and a small letter are different symbols.';
// …and a square or cubic unit (`m3`, `m^3` for cubic meters), and the
// symbol typed with a plural s (`Ms`, `Kgs`), which the plural fold would
// otherwise lowercase past the rule (round 2, November 24, 2026).
const POWER = /\^?\{?[23]\}?$/;
function unitSymbolCaseMiss(input, answer, accept) {
  const name = normalizeText(answer).replace(/^(?:square|cubic) /, '').replace(/ (?:squared|cubed)$/, '').replace(/s$/, '');
  if (!UNIT_NAMES.has(name)) return false;
  const typed = String(input ?? '').trim();
  const members = String(accept ?? '').split('|').map((member) => member.trim())
    .filter((member) => UNIT_SYMBOLS.has(member.replace(POWER, '')));
  const writings = [typed, typed.replace(/s$/i, '')].filter(Boolean);
  if (writings.some((writing) => members.includes(writing))) return false;
  return writings.some((writing) => members.some((member) => member.toLowerCase() === writing.toLowerCase()));
}

export function checkText(input, answer, { accept = '', form = '' } = {}) {
  if (form) return checkChem(input, answer, { accept, form }).status;
  if (acceptedForms(answer, accept).some((member) => SHAPE_NAME.test(member))) {
    const bare = String(input ?? '').replace(LONE_PAIRS_AFTER, '');
    if (bare.trim() && bare !== String(input ?? '')) input = bare;
    if (ANGLE_AFTER.test(String(input ?? ''))) input = String(input).replace(ANGLE_AFTER, '');
  }
  const normalized = normalizeText(input);
  if (!normalized) return 'empty';
  const forms = acceptedForms(answer, accept);
  const closedForms = acceptedForms(answer, accept, closedForm);
  const graded = (text) => {
    const value = normalizeText(text);
    if (!value) return false;
    if (forms.some((form) => matchesForm(value, form))) return true;
    const closed = closedForm(text);
    return closedForms.some((form) => matchesForm(closed, form));
  };
  if (unitSymbolCaseMiss(input, answer, accept)) return 'incorrect';
  if (graded(input)) return 'correct';
  // A hybridization label (Chemistry 2e chapter 8) is its orbitals and their
  // counts: `sp^3d`, `sp 3 d`, `sp3d hybridized` against `sp³d` (see
  // `hybridOrbitals`). Read only against a key that IS such a label, and the
  // letters must stand in the key's order — `dsp3` is `form` in `gradeText`.
  if (isHybridKey(answer)) {
    const typed = hybridOrbitals(input);
    return typed && typed.order === 'spd'.slice(0, typed.order.length) && hybridLabel(input) === hybridLabel(answer) ? 'correct' : 'incorrect';
  }
  // A subshell is its shell number and its letter, and a learner may set a
  // space between them: "2 p" for the key "2p" (Chemistry 2e 6.3, "Identify
  // the subshell …"). Folded only against a key that IS a subshell, so no
  // other two words are read as one.
  // …and named with its noun: "2p subshell", "the 2p subshell", "2p orbital(s)"
  // (the article is already dropped by the normalizer).
  const subshell = subshellTyped(normalized);
  if (SUBSHELL.test(String(answer ?? '').trim()) && subshell) {
    return subshell === normalizeText(answer) ? 'correct' : 'incorrect';
  }
  const paren = /^([^()]+)\(([^()]+)\)\s*$/.exec(String(input ?? '').trim());
  return paren && graded(paren[1]) && graded(paren[2]) ? 'correct' : 'incorrect';
}
