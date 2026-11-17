/**
 * Leak and notation lints — the rules landed from the September 22, 2026
 * probe pass over the life-sciences corpus (Anatomy and Physiology chapters
 * 1–2 and their re-review, which found about 80 defects the per-section
 * checkers had passed, most of them one of the shapes below).
 *
 * lintLeaks(src, filename?) → { errors }
 *
 * A second module beside lints.mjs, run by `npm run lint` (lint-all.mjs),
 * in the same error format (`L<line>: <message>`) and with the same policy:
 * every rule is an error, and each landed with the corpus clean.
 *
 *   - an HTML character reference in a shortcode param (every book)
 *   - a chemical formula or ion in ASCII instead of Unicode sub/superscripts
 *     (life sciences, and Chemistry with the whole periodic table)
 *   - a `textin` key printed by the item directly above it in a Practice
 *     group or Knowledge Check — its stem, its options, or its hint (every
 *     book)
 *   - a root or derivative of a `textin` key in its own hint (every book)
 *   - an acronym cloze whose stem spells the acronym out right before the
 *     blank (every book)
 *   - a `multiplechoice` hint that prints the keyed option (life sciences)
 *
 * Landed September 23, 2026, each with the corpus clean (measured over every
 * book, every hit read; tools/lint/lints-leaks.test.mjs has the fixtures):
 *
 *   - a `textin` keyed to a number, a number word, or a number with a unit
 *     (every book; 1 hit, 1 true, Microbiology 26.2's tetanus-booster CYU)
 *   - a `selfcheck` hint that restates two or more of its own rubric
 *     clauses (every book; 1 hit, 1 true, Biology 32.1's flower whorls)
 *   - a `textin` hint that says "not X" where X is a graded spelling, or
 *     "not the … abbreviation" beside an abbreviation accept (every book;
 *     0 hits — the one known case, Microbiology 19.3's HLA, was fixed first)
 *
 * Landed October 16, 2026, with the corpus clean:
 *
 *   - a `selfcheck` model answer or rubric clause that prints the key of
 *     the graded item directly below it (every book; 12 hits, all read and
 *     all true, fixed by reordering within their objective groups — 8
 *     Biology pages, 4 Microbiology; "any later item" measured 151 and was
 *     rejected)
 *
 * Landed November 9, 2026, with Chemistry 2e pinned and no page yet authored
 * (so the corpus is clean by construction; the fixtures are the cases):
 *
 *   - a formula set by hand inside math — `H_2O` (italic, as variables),
 *     `\text{H}_2\text{O}`, `\mathrm{H_2O}` — where the book writes
 *     `\ce{H2O}` (Chemistry)
 *
 * Landed November 12, 2026, from the readings of Chemistry chapter 4 (each
 * fixed on its page by hand first; chapters 1–4 swept clean):
 *
 *   - a footer that prints a graded item's key: a measured fill-in's key of
 *     three or more significant figures as the key or its display writes
 *     it, or a formula or equation key (Chemistry; 4.3's "18.86")
 *   - a `###` heading under `## Practice` that ends with a period (every
 *     book: the objectives callout keeps the source's period, the heading
 *     drops it)
 *   - a unit set inside a stem's math after a power of ten,
 *     `$1.00 \times 10^{3}\ \text{kg}$` (Chemistry; an answer display is
 *     not a stem)
 *
 * Landed November 16, 2026: the checks chapters 5 and 6 left on the
 * playbook's open list, each a defect a reader caught and no gate could
 * (Chemistry; the readings are in chemistry-readings.mjs and tools/lib, the
 * measurements in docs/history/chemistry.md, "The chapter 5 and 6 lints"):
 *
 *   - a negative key under "how much heat is produced / released / evolved"
 *     (5.2's benzene, −39.0), and a hint on such an item that leads to a
 *     negative number (0 hits: chapter 5's fix pass had cleared them)
 *   - an answer display whose unit is not the unit the closing asks for (246
 *     closings, 230 read; 1 hit, 1.6's "in feet" over ft/cubit, fixed)
 *   - a colour keyed to light outside the visible range (6.1's cesium line)
 *   - a subshell label with an italic shell number, `$n$s` (0 hits)
 *   - a bare `f` or `i` subscript in math, `E_f` (0 hits)
 *   - a hyphen where the source means a dash: before a word that opens a
 *     clause, or between the numbers of a unit range (0 hits)
 *   - "Table N.M" or "Figure N.M" outside the footer and Source notes (0 hits)
 *   - a configuration in a figure description that does not hold its
 *     element's electrons (124 read; 1 miscount, 6.4's curium, which is the
 *     source figure's own and is quoted by the page's Source note)
 *   - a rubric clause of three or more words repeated in the footer or a
 *     Source note (0 hits; 6.1's footer had said "outside the visible range")
 */
import { bookKeyOf, blankPreservingOffsets, maskCode, mathSpans, shortcodes, SHORTCODE_PARAMS } from '../lib/content.mjs';
import { strictTextProblems } from '../lib/katex.mjs';
// The real textin grading normalizer, so a "printed key" here means printed
// in exactly the sense check-text.mjs would grade a retyped copy of it.
import { foldedForms, matchesForm, normalizeText } from '../../assets/js/lib/text/check-text.mjs';
import { chemCanon, hasFractionalCoefficient, readSpecies } from '../../assets/js/lib/text/check-chem.mjs';
import { isConfiguration } from '../../assets/js/lib/text/check-config.mjs';
import { isPossibleSet, isQuantumSet, readQuantum } from '../../assets/js/lib/text/check-quantum.mjs';
import { chemSpans } from '../verify/verify-replay.mjs';
import { amountHintProblem, heatAsk, isNegativeKey } from '../lib/heat-ask.mjs';
import { askedUnit, shownUnit, showsAskedUnit } from '../lib/item-units.mjs';
import { isWordRun, readWords } from '../lib/rubric-run.mjs';
import { cePrinted } from '../lib/keyed-units.mjs';
import { bareGreekMath, bareProportionality, bareSigmaPi, crowdedFractionRows, ungroupedNumberBeforeUnit, britishSpellingAndStraightApostrophes, italicOrbitalLetters, minusAsBond, overlappingRubricClauses, plainAnswerDisplays, straightApostrophes } from './chemistry-notation.mjs';
import {
  colourOutsideVisible, dashHyphens, italicDescriptiveSubscripts, miscountedConfigurations, proseOnly, sourceNumberReferences, subshellLabelSlips,
} from './chemistry-readings.mjs';

/**
 * The list of members an ordering's stem prints in the key's order or its
 * exact reverse, or null. Either way the stem answers the item: the key's
 * order is retyped with < between the members, the reverse with > (6.5's
 * "list the following atoms in order of increasing radius: Mg, Ca, Rb, Cs"
 * and "…ions …: K⁺, Ca²⁺, Al³⁺, Si⁴⁺", the consistency reading of chapter 6).
 */
export function orderingStemAnswers(question, answer) {
  const key = chemCanon(answer, 'ordering');
  if (!key) return null;
  const reversed = key.split(' < ').reverse().join(' < ');
  return chemSpans(String(question ?? ''), 'ordering').find((span) => {
    const listed = chemCanon(span.replace(/\s*,\s*/g, ' < ').replace(/\s*>\s*/g, ' < '), 'ordering');
    return listed === key || listed === reversed;
  }) ?? null;
}

/** The sentence an electron configuration's stem closes with (Chemistry 6.4; lint). */
export const CONFIGURATION_CLOSING = 'Type each subshell followed by its number of electrons, with a space between subshells.';
/** The sentence an ordering's stem closes with (Chemistry 6.5; lint). */
export const ORDERING_CLOSING = 'Type the symbols in the order you rank them, separated by <.';
/**
 * The sentence a set of quantum numbers' stem closes with (Chemistry 6.3;
 * lint). Plain letters, not math: a `textin` stem takes no `$` (the
 * shortcode and the lint refuse it), so mₗ and mₛ are the Unicode
 * subscripts the page's rubrics already print.
 */
export const QUANTUM_CLOSING = 'Type the four values in the order n, l, mₗ, mₛ, separated by spaces.';

/**
 * The sentence a hybridization label's text-in closes with (Chemistry
 * chapter 8; lint): the field has no typing guide and a learner's keyboard
 * has no superscript. It names no label.
 */
export const HYBRID_CLOSING = 'Type any superscript as an ordinary number.';
/** The labels a hybridization key may be, in the book's print. */
export const HYBRID_KEYS = Object.freeze(['sp', 'sp²', 'sp³', 'sp³d', 'sp³d²']);

/**
 * The sentence a formal-charge fill-in closes with (Chemistry 7.4; lint),
 * the element's SYMBOL in place of `<Symbol>`: the source gate holds the item
 * to that element's number ("C −1, O +1"), and the example pair is no key of
 * the chapter (its keys are 0, −1, and +1).
 */
export const FORMAL_CHARGE_CLOSING = 'Enter the formal charge of <Symbol> as a signed number, the sign first, as +2 or −2.';
/**
 * Its twin for an oxidation state (Chemistry 4.2; lint since chapter 8, when
 * one exercise asked both — 8.2's strike-anywhere matches — and the gate
 * learned to hold each item to its own list). "oxidation number", which the
 * book also prints (Knowledge Check 4–5), is the same closing.
 */
export const OXIDATION_STATE_CLOSING = 'Enter the oxidation state of <Symbol> as a signed number, the sign first, as +2 or −1.';
/**
 * The example pair any signed closing ends with ("…, the sign first, as +2
 * or −1."). Its two numbers are the author's to choose — one positive, one
 * negative — and neither may be a key of a whole-number fill-in on the page
 * (lint): 8.2 keys an oxidation state of −2 beside two formal charges, whose
 * default pair "+2 or −2" would print it.
 */
export const EXAMPLE_PAIR = /, the sign first, as \+([1-9]\d*) or −([1-9]\d*)\.$/;
/**
 * The sentence a CHARGE fill-in closes with (Derek, November 16, 2026: a
 * charge is written as Section 4.2 says, number first, then sign), with its
 * `answerForm="whole-number charge"`. Its example pair, read by
 * CHARGE_PAIR, is no key of the page either.
 */
export const CHARGE_CLOSING = 'Enter the charge with its number first and then its sign, as 1+ or 1−.';
export const CHARGE_PAIR = /, as ([1-9]\d*)\+ or ([1-9]\d*)−\.$/;
/** The closing a charge item had until November 16, 2026 (sign first): refused. */
const OLD_CHARGE_CLOSING = /Enter the charge as a signed number, the sign first/;

/**
 * A page's own heading called "the … section" ("the Lewis Symbols section",
 * Chemistry 7.3): a heading of the same page is a subsection, and a Section
 * is a numbered page of the book ("Section 7.3"). Returns the phrases (lint, Chemistry; the 11 in chapters 1, 2 and 4 were
 * swept to "subsection" November 15, 2026).
 */
export function ownHeadingCalledSection(src) {
  const headings = new Set([...String(src).matchAll(/^##+ (.+)$/gm)].map((match) => match[1].trim().toLowerCase()));
  return [...String(src).matchAll(/\bthe ([A-Z][^.;:,()[\]]{2,60}?) section\b/g)].filter((match) => headings.has(match[1].toLowerCase())).map((match) => match[0]);
}

/** The elements a formal-charge stem may name in words: [name, the root of its -ide name]. */
const NAMED_ELEMENTS = Object.freeze({
  H: ['hydrogen', 'hydr'], B: ['boron', 'bor'], Be: ['beryllium', null], C: ['carbon', 'carb'], N: ['nitrogen', 'nitr'], O: ['oxygen', 'ox'],
  F: ['fluorine', 'fluor'], P: ['phosphorus', 'phosph'], S: ['sulfur', 'sulf'], Cl: ['chlorine', 'chlor'], Se: ['selenium', 'selen'],
  Br: ['bromine', 'brom'], I: ['iodine', 'iod'], Xe: ['xenon', null],
});

/**
 * Why a whole-number fill-in's stem that asks `asked` ("formal charge")
 * does not close with `closing` word for word about an element the stem
 * prints — or null. `closing` holds `<Symbol>`.
 */
export function signedClosingProblem(question, closing) {
  // A formula the stem sets as `$\\ce{ClO3-}$` (a fill-in stem may hold
  // math, 8.2) is read as it prints: ClO₃⁻.
  const text = cePrinted(String(question ?? '')).trim();
  const [head, tail] = closing.split('<Symbol>');
  const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // The example pair is free (EXAMPLE_PAIR); the words around it are not.
  const pair = /as \+\d+ or −\d+\.$/;
  const tailPattern = escape(tail.replace(pair, '')) + 'as \\+[1-9]\\d* or −[1-9]\\d*\\.';
  const heads = [head, ...(/oxidation state/.test(head) ? [head.replace('oxidation state', 'oxidation number')] : [])];
  const match = heads.map((one) => new RegExp(`(?:^|\\s)${escape(one)}([A-Z][a-z]?)${tailPattern}$`).exec(text)).find(Boolean);
  if (!match) return `close the stem word for word "${closing}", the element's symbol in place of <Symbol> (the example pair may be another, neither number a key of the page)`;
  const symbol = match[1];
  const before = text.slice(0, match.index);
  if (!ALL_ELEMENTS.has(symbol)) return `"${symbol}" in the closing is no element's symbol`;
  // The symbols of every formula the stem prints ("Al(OH)₃" prints Al, O, H; "NCl₃" N and Cl).
  const printed = before.split(/\s+/).map((token) => token.replace(/^[^A-Z(\[]+|[.,;:?!)”’]+$/g, ''))
    .filter((token) => /^(?:[A-Z][a-z]?|[\d₀-₉⁰¹²³⁴-⁹⁺⁻()[\]·])+$/.test(token))
    .flatMap((token) => token.match(/[A-Z][a-z]?/g) ?? []);
  // …or by name, as 7.4's Check Your Learning prints "the carbon monoxide
  // molecule" (its structure in the figure): "carbon" is C, "-oxide" is O.
  const words = before.toLowerCase().split(/[^a-z]+/).filter(Boolean);
  const named = Object.entries(NAMED_ELEMENTS).filter(([, [name, root]]) => words.some((word) => word === name || (root && word.endsWith(`${root}ide`)))).map(([named]) => named);
  if (!printed.includes(symbol) && !named.includes(symbol)) return `the closing names ${symbol}, which the stem does not print (as a symbol in a formula, or by the element's name)`;
  return null;
}

/**
 * A full possible set of quantum numbers of the key's n and l that a stem
 * prints, as it prints it, or null: four values in a row ("4 0 0 ½") or
 * labelled ("n = 4, l = 0, mₗ = 0, mₛ = +½"). Such a stem answers its item.
 */
export function quantumStemAnswers(question, answer) {
  const key = readQuantum(answer);
  if (!isPossibleSet(key)) return null;
  return chemSpans(String(question ?? ''), 'quantum-numbers').find((span) => {
    const set = readQuantum(span);
    return isPossibleSet(set) && set.n === key.n && set.l === key.l;
  }) ?? null;
}

// The rubric-checkpoint coverage helper lints.mjs holds every checkpoint to.
import { phraseCoverage } from '../lib/openstax-source.mjs';

const lineOf = (src, index) => src.slice(0, index).split('\n').length;

/** Does `needle` (already normalized) occur as a whole-word run in `haystack` (already normalized)? */
function containsWholeWordRun(haystack, needle) {
  return Boolean(needle) && ` ${haystack} `.includes(` ${needle} `);
}

/** A short, stable label for an item in a diagnostic, in lints.mjs's shape. */
const labelOf = (kind, params) => `${kind} (${(params.question || '?').slice(0, 40)}…)`;

/** Every spelling of a textin the grader takes: its members and their two-way regular-plural folds. */
function gradedSpellings(params) {
  const members = [params.answer || '', ...(params.accept || '').split('|')]
    .map((raw) => ({ raw, norm: normalizeText(raw) }))
    .filter((m) => m.norm);
  const out = [];
  for (const member of members) {
    for (const norm of [member.norm, ...foldedForms(member.norm)]) {
      out.push({ member: member.raw, norm });
    }
  }
  return out;
}

// ---- number-keyed textins ----------------------------------------------------

/** Cardinal number words; ordinals ("first law") name things, so they are not here. */
const NUMBER_WORD = /^(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion)$/;
const NUMBER_TOKEN = (t) => /^\d+$/.test(t) || NUMBER_WORD.test(t);
/**
 * Unit words a measurement key ends with, normalized (`µm` decomposes to
 * Greek `μm`; `°C` to `c`; `400×` loses its sign, so `400x` is matched by
 * shape). Singular and plural both, since normalizeText does not fold.
 */
const UNITS = new Set(('μm um nm mm cm m km micrometer micrometers micrometre micrometres micron microns nanometer nanometers '
  + 'millimeter millimeters meter meters g mg kg μg ug gram grams l ml liter liters litre litres percent c f degree degrees '
  + 'x times fold bp kb kbp mb kda da mv mmhg second seconds minute minutes hour hours day days week weeks month months year years decade decades').split(' '));

/**
 * Is a normalized textin answer a number — all digits, number words, or a
 * number followed by one unit word (`5 0 μm`, `400x`, `two`) — or does it
 * hold a number-and-unit run (`every 10 years`)? A number inside a name
 * (`glyceraldehyde 3 phosphate`, `BSL 4`, `5′ end`, `CCR5 delta 32`) is
 * not: no unit follows it and the answer is more than the number.
 */
export function numericKey(norm) {
  const tokens = norm.split(' ').filter(Boolean);
  if (!tokens.length) return false;
  const isNumberWithUnit = (run) => {
    let k = 0;
    while (k < run.length && NUMBER_TOKEN(run[k])) k += 1;
    if (k === 0) return run.length === 1 && /^\d+x$/.test(run[0]);
    return k === run.length || (k === run.length - 1 && UNITS.has(run[k]));
  };
  if (isNumberWithUnit(tokens)) return true;
  // A number-and-unit run anywhere in the answer ("every 10 years").
  return tokens.some((t, i) => NUMBER_TOKEN(t) && i + 1 < tokens.length && UNITS.has(tokens[i + 1]) && !NUMBER_TOKEN(tokens[i + 1]));
}

// ---- chemistry notation ------------------------------------------------------

/**
 * Element symbols a formula token may be built from. Deuterium (`D`) is left
 * out on purpose: with it, `CD4` and `CD8` (the T-cell markers) read as
 * formulas.
 */
const ELEMENTS = new Set(('H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn '
  + 'Ga Ge As Se Br Kr Rb Sr Y Zr Mo Ag Cd Sn I Xe Cs Ba Pt Au Hg Pb Bi Rn Ra U').split(' '));
/**
 * The whole periodic table, for a chemistry book. The life-sciences set
 * above is deliberately short — every symbol added there is another way for
 * an abbreviation (`CD4`, `Th1`, `No`) to parse as a formula — but a general
 * chemistry text writes compounds of every element, and its prose has no
 * immunology shorthand to collide with.
 */
const ALL_ELEMENTS = new Set(('H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn '
  + 'Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm '
  + 'Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt '
  + 'Ds Rg Cn Nh Fl Mc Lv Ts Og D').split(' '));
/** Cofactor abbreviations that carry a charge in the source (`NAD⁺`, `NADP⁺`, `FAD`). */
const COFACTORS = new Set(['NAD', 'NADP', 'FAD']);
/** The one-element molecules that are formulas; `B12`, `C3`, `K1` and the like are not. */
const DIATOMIC_ETC = new Set(['O2', 'N2', 'H2', 'O3', 'I2', 'S8', 'P4', 'Cl2', 'F2', 'Br2']);
/**
 * Tokens that parse as element runs with digits but name something else:
 * vaccine and virus designations, a Creative Commons licence, a histone
 * variant, the numbered postsynaptic potentials of a summation worked
 * example (`IPSP1`, `IPSP2` — I, P, S are all elements; `EPSP1` never
 * matched because E is not). Influenza subtypes (`H1N1`, `H5N1`) are
 * matched by shape below.
 */
const NOT_FORMULAS = new Set(['PCV13', 'PPSV23', 'SV40', 'CC0', 'HSV1', 'HSV2', 'H2A', 'H2B', 'H3', 'H4', 'F0', 'F1', 'F1F0', 'F0F1', 'C3', 'C4', 'C5', 'IPSP1', 'IPSP2', 'IPSP3']);

/** The bare-sign ions a lone symbol may form, by symbol. */
const ION_CHARGES = { H: '+', K: '+', Na: '+', Li: '+', Ag: '+', Cl: '-', Br: '-', I: '-', F: '+-' };
/**
 * The same for a chemistry book: the other +1 metals a general chemistry
 * text writes, and fluoride only (no F plasmid here, so `F+` is not an ion).
 */
const CHEMISTRY_ION_CHARGES = { ...ION_CHARGES, F: '-', Rb: '+', Cs: '+', Cu: '+', Au: '+', Tl: '+' };

const SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' };
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '+': '⁺', '-': '⁻', '−': '⁻' };

// A run of element symbols with optional counts, or a cofactor, then an
// optional charge (`+`, `-`, `2+`, `3−`). The charge may be followed by `/`
// (`Na+/K+`) but not by a letter or digit, so `C-terminal` and `N-linked`
// back off to a bare, digit-free symbol, which is not a hit.
const FORMULA_RE = /(?<![\p{L}\p{N}_./#&-])((?:NADP|NAD|FAD)|(?:[A-Z][a-z]?\d*)+?)(\d?[+\-−])?(?![\p{L}\p{N}_]|[+\-−]|\.\p{L})/gu;

/**
 * The Unicode spelling of an ASCII formula token, or null when the token is
 * not chemistry. A charge digit is a superscript and a count is a subscript;
 * a lone element with a digit and a sign (`Ca2+`, `Fe3+`) carries the digit
 * as its charge, a compound (`NH4+`, `NO3-`) as a count.
 */
export function unicodeFormula(token, { chemistry = false } = {}) {
  const elements = chemistry ? ALL_ELEMENTS : ELEMENTS;
  const ionCharges = chemistry ? CHEMISTRY_ION_CHARGES : ION_CHARGES;
  const m = /^((?:NADP|NAD|FAD)|(?:[A-Z][a-z]?\d*)+?)(\d?[+\-−])?$/u.exec(token);
  if (!m) return null;
  let [, base, charge = ''] = m;
  // Where the digit before a sign lands depends on how the regex split the
  // token, so settle it here: in a compound (`NH4+`, `NO3-`) the digit is a
  // count, and on a lone element (`Ca2+`, `Fe3+`, `S2-`) it is the charge.
  const capitals = (base.match(/[A-Z]/g) || []).length;
  if (/^\d/.test(charge) && capitals > 1) {
    base += charge[0];
    charge = charge.slice(1);
  } else if (/^[+\-−]$/.test(charge) && capitals === 1 && /^[A-Z][a-z]?\d$/.test(base)) {
    charge = base.slice(-1) + charge;
    base = base.slice(0, -1);
  }
  if (COFACTORS.has(base)) return charge ? base + [...charge].map((c) => SUP[c]).join('') : null;
  const parts = base.match(/[A-Z][a-z]?\d*/g) || [];
  if (!parts.length || !parts.every((p) => elements.has(p.replace(/\d+/g, '')))) return null;
  // Influenza subtypes, and the NCBI Bookshelf (`NBK555891`) and PubMed
  // Central (`PMC1234567`) ids a Source note cites — N, B, K, P, M, C are
  // all elements (Anatomy and Physiology 14.3).
  // An intravenous fluid's trade name — D5W, D10W: "dextrose 5% in water"
  // (D is deuterium and W tungsten; Chemistry 2e 3.4, the first page to
  // print one in an exercise stem).
  if (/^H\d+N\d+$/.test(base) || /^(?:NBK|PMC)\d+$/.test(base) || /^D\d+W$/.test(base) || NOT_FORMULAS.has(base)) return null;
  // `Ca2` + `+`: the regex is lazy, so a lone element's digit lands in the
  // charge group already; a compound's trailing count stays in the base.
  const hasDigit = /\d/.test(base + charge.replace(/[+\-−]/, ''));
  if (!hasDigit && !charge) return null;
  if (parts.length === 1 && !charge && !DIATOMIC_ETC.has(base)) return null;
  // A lone symbol with a bare sign is an ion only for the charges the
  // element takes: `O+` and `B-` are blood groups, and `K-` is the "K-" of
  // "K- and r-selected". F takes both signs because the F plasmid's donor
  // and recipient strains are printed F⁺ and F⁻ by the source.
  if (parts.length === 1 && !/\d/.test(base + charge)) {
    const sign = charge === '+' ? '+' : '-';
    if (!(ionCharges[base] || '').includes(sign)) return null;
  }
  const uni = base.replace(/\d/g, (d) => SUB[d]) + [...charge].map((c) => SUP[c]).join('');
  return uni === token ? null : uni;
}

// ---- formulas set by hand inside math ----------------------------------------

/** Blank every `\name{…}` group (balanced braces) of the named commands, offsets kept. */
function blankCommandGroups(tex, names) {
  const open = new RegExp(String.raw`\\(?:${names.join('|')})\s*\{`, 'g');
  let out = tex;
  for (const m of tex.matchAll(open)) {
    let depth = 0;
    let end = -1;
    for (let i = m.index + m[0].length - 1; i < tex.length; i += 1) {
      if (tex[i] === '\\') { i += 1; continue; }
      if (tex[i] === '{') depth += 1;
      else if (tex[i] === '}') { depth -= 1; if (depth === 0) { end = i; break; } }
    }
    if (end === -1) continue;
    out = out.slice(0, m.index) + ' '.repeat(end + 1 - m.index) + out.slice(end + 1);
  }
  return out;
}

const SUBSCRIPT_DIGITS = String.raw`_\s*(?:\d|\{\s*\d+\s*\})`;
// `\text{H}_2`, `\mathrm{O}_2`: an upright element symbol with a count hung on it.
const UPRIGHT_SYMBOL_WITH_COUNT = new RegExp(String.raw`\\(?:text|textrm|mathrm)\s*\{\s*([A-Z][a-z]?)\s*\}\s*${SUBSCRIPT_DIGITS}`, 'g');
// `\mathrm{H_2O}`: the count inside the upright group.
const UPRIGHT_GROUP_WITH_COUNT = new RegExp(String.raw`\\mathrm\s*\{[^{}]*?([A-Z][a-z]?)${SUBSCRIPT_DIGITS}[^{}]*\}`, 'g');
// `H_2O`, `CO_2`, `H_2SO_4`: a run of two or more capitalised symbols, bare in math.
const BARE_SYMBOL_RUN = new RegExp(String.raw`(?<![A-Za-z\\}])((?:[A-Z][a-z]?(?:${SUBSCRIPT_DIGITS})?){2,})(?![A-Za-z])`, 'g');
const BARE_SYMBOL = new RegExp(String.raw`([A-Z][a-z]?)(${SUBSCRIPT_DIGITS})?`, 'g');

/**
 * Every chemical formula in one math span that is typeset by hand where the
 * book writes `\ce{…}`, as `{ index, written, why }` (index into `tex`).
 *
 * Three spellings, all of which render, which is why nothing else catches
 * them. Bare `H_2O` is the worst: TeX sets letters in math italic, as
 * variables, so water prints as the product H₂·O in the wrong face.
 * `\text{H}_2\text{O}` and `\mathrm{H_2O}` are upright but each author
 * spaces them differently, and a page that mixes them with `\ce{H2O}` shows
 * one compound three ways.
 *
 * A bare run is a formula only when it cannot be a product of variables:
 * every symbol an element, at least one carrying a count and at least one
 * not. `P_1V_1` and `C_1V_1 = C_2V_2` (every symbol subscripted) and `PV`
 * (none) are the gas and dilution laws and are left alone; so is a lone
 * `N_2` or `K_2`, which no rule can tell from a variable. Those are the
 * checker's to read on the rendered page.
 */
export function handSetFormulas(tex) {
  const hits = [];
  const outsideCe = blankCommandGroups(tex, ['ce', 'pu']);
  for (const re of [UPRIGHT_SYMBOL_WITH_COUNT, UPRIGHT_GROUP_WITH_COUNT]) {
    for (const m of outsideCe.matchAll(re)) {
      if (ALL_ELEMENTS.has(m[1])) hits.push({ index: m.index, written: m[0], why: 'upright' });
    }
  }
  // Bare runs are read with every command group that sets text blanked, and
  // every remaining command name too (`\Delta H_2…` must not lend its letters).
  const bare = blankCommandGroups(outsideCe, ['text', 'textrm', 'mathrm', 'operatorname', 'textbf', 'textit', 'mathbf'])
    .replace(/\\[a-zA-Z]+/g, (name) => ' '.repeat(name.length));
  for (const m of bare.matchAll(BARE_SYMBOL_RUN)) {
    const parts = [...m[1].matchAll(BARE_SYMBOL)];
    if (!parts.every((part) => ALL_ELEMENTS.has(part[1]))) continue;
    const counted = parts.filter((part) => part[2]).length;
    if (counted === 0 || counted === parts.length) continue;
    hits.push({ index: m.index, written: m[1], why: 'italic' });
  }
  return hits.sort((a, b) => a.index - b.index);
}

/** `H_2SO_4` → `H2SO4`: the mhchem spelling of a hand-set formula, for the message. */
const ceSpelling = (written) => written
  .replace(/\\(?:text|textrm|mathrm)\s*\{([^{}]*)\}/g, '$1')
  .replace(/_\s*\{?\s*(\d+)\s*\}?/g, '$1')
  .replace(/\s+/g, '');

/** `src` reduced to reader-visible text for the notation rule, offsets kept. */
function notationText(src) {
  return maskCode(src)
    .replace(/<!--[\s\S]*?-->/g, blankPreservingOffsets)
    .replace(/\$\$[\s\S]*?\$\$/g, blankPreservingOffsets)
    .replace(/(?<!\\)\$[^$\n]+?(?<!\\)\$/g, blankPreservingOffsets)
    .replace(/https?:\/\/[^\s)>"]+/g, blankPreservingOffsets)
    .replace(/\]\([^)]*\)/g, (m) => `]${blankPreservingOffsets(m.slice(1))}`)
    // `accept` members are what a learner TYPES, so they stay ASCII; `src`
    // is a media path.
    .replace(/\b(?:accept|src|href|id)="[^"]*"/g, blankPreservingOffsets)
    // The attribution footer is the disclosure record, and it quotes the
    // source's own ASCII when it says what was changed ("set in Unicode
    // where the source prints "H+"").
    .replace(/<small>[\s\S]*?<\/small>/g, blankPreservingOffsets);
}

// ---- the "directly above" leak ---------------------------------------------

/** The reader-visible text an item shows before it is answered, by field. */
function printedFields(item) {
  const fields = [['stem', item.params.question || ''], ['hint', item.params.hint || '']];
  if (item.kind === 'multiplechoice' && item.params.mode !== 'graph') {
    fields.push(['options', item.inner.split('\n').map((s) => s.trim()).filter(Boolean).join('\n')]);
  }
  if (item.kind === 'sortbins') {
    try {
      const config = JSON.parse(item.inner);
      fields.push(['bins and labels', [...(config.bins || []), ...(config.items || []).map((i) => i.label)].join('\n')]);
    } catch { /* the sortbins parser rule in lints.mjs names a broken config */ }
  }
  return fields;
}

/** Normalized one line at a time, so a whole-word run never spans two options. */
const normalizedLines = (value) => value.split('\n').map(normalizeText).join(' \n ');

/**
 * Does `prev` — an item as `shortcodes()` yields it, plus its `kind` — print
 * the key of the `textin` directly below it? Returns null, `{ option,
 * member }` when a whole multiple-choice option IS a graded spelling, or
 * `{ field, member, norm }` for a whole-word run in the stem, hint, options,
 * or sortbins labels. Exported for the reorder tooling that fixes a hit.
 */
export function directlyAboveLeak(prev, textin) {
  const spellings = gradedSpellings(textin.params);
  if (prev.kind === 'multiplechoice' && prev.params.mode !== 'graph') {
    const options = prev.inner.split('\n').map((s) => normalizeText(s.replace(/\.$/, ''))).filter(Boolean);
    const option = spellings.find((s) => options.includes(s.norm));
    if (option) return { option: true, member: option.member };
  }
  // A formula or ion key (`answerForm`) is printed only where its own
  // characters are, charge included: the normalized text drops a charge, so
  // the stem's "(NH₄)₂CO₃" read as printing the key "NH₄⁺" of the item that
  // asks for the cation's symbol (Chemistry 2.6) — and the charge is what
  // that item grades. A neutral formula the item above prints is still a hit.
  const formula = textin.params.answerForm !== undefined;
  const tight = (value) => String(value ?? '').replace(/\s+/g, '');
  for (const [field, value] of printedFields(prev)) {
    const haystack = normalizedLines(value);
    const hit = spellings.find((s) => containsWholeWordRun(haystack, s.norm)
      && (!formula || tight(value).includes(tight(s.member))));
    if (hit) return { field, member: hit.member, norm: hit.norm };
  }
  return null;
}

/**
 * Does the closed `selfcheck` `sc` print, in its model answer or one of its
 * rubric clauses, the key of `next` — the graded item directly below it?
 * Returns null or `{ field, member, norm }`. `count` is the MC hint rule's
 * count pattern. Exported for the reorder tooling that fixes a hit.
 */
export function selfcheckForwardLeak(sc, next, count = /^(?:\d+|zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/) {
  const parts = sc.inner.split(/^[ \t]*===CHECKS===[ \t]*$/m);
  const fields = [['model answer', normalizedLines(parts[0])]];
  for (const clause of (parts[1] || '').split('\n').map((c) => c.trim()).filter(Boolean)) {
    fields.push(['rubric clause', normalizeText(clause)]);
  }
  const stem = normalizeText(next.params.question || '');
  let spellings;
  if (next.kind === 'textin') {
    spellings = gradedSpellings(next.params);
  } else if (next.kind === 'multiplechoice' && next.params.mode !== 'graph' && next.closed) {
    const key = normalizeText((next.params.answer || '').replace(/\.$/, ''));
    if (!key || count.test(key)) return null;
    spellings = [key, ...foldedForms(key)].map((norm) => ({ member: next.params.answer, norm }));
    if (spellings.some((s) => containsWholeWordRun(stem, s.norm))) return null;
    const distractors = next.inner.split('\n').map((s) => normalizeText(s.replace(/\.$/, ''))).filter((o) => o && o !== key);
    if (distractors.some((o) => [o, ...foldedForms(o)].some((f) => fields.some(([, hay]) => containsWholeWordRun(hay, f))))) return null;
  } else {
    return null;
  }
  for (const [field, hay] of fields) {
    const hit = spellings.find((s) => containsWholeWordRun(hay, s.norm));
    if (hit) return { field, member: hit.member, norm: hit.norm };
  }
  return null;
}

// ---- Chemistry chapter 4: what its readers found -----------------------------

/**
 * The `###` objective headings of a page's `## Practice` block that end with
 * a period. The objectives callout keeps the source's sentence period; the
 * heading drops it (Chemistry 4.x shipped "### Derive … equations." beside
 * its siblings). Exported for the library-wide count.
 */
export function practicePeriodHeadings(text) {
  const practice = /^## Practice[ \t]*$/m.exec(text);
  if (!practice) return [];
  const start = practice.index + practice[0].length;
  const next = /^## /m.exec(text.slice(start));
  const block = text.slice(start, next ? start + next.index : text.length);
  return [...block.matchAll(/^###[ \t]+(.*?)[ \t]*$/gm)]
    .filter((m) => /\.$/.test(m[1]) && !/\.\.\.$|…$/.test(m[1]))
    .map((m) => ({ index: start + m.index, heading: m[1] }));
}

/**
 * The significant figures of a plain decimal written as a key writes it
 * ("18.86" → 4, "0.0250" → 3, "1500" → 2); null for anything else.
 */
function writtenSigFigs(number) {
  const digits = number.replace(/^[-−+]/, '');
  if (!/^(?:\d+\.?\d*|\.\d+)$/.test(digits)) return null;
  if (digits.includes('.')) return digits.replace('.', '').replace(/^0+/, '').length;
  return digits.replace(/^0+/, '').replace(/0+$/, '').length;
}

/**
 * The spellings of a graded item's key that its page's footer must not
 * print: a measured fill-in's key of three or more significant figures,
 * written as the key writes it and as its answer display does (the mantissa
 * of a power of ten, thousands separators dropped), and a formula or an
 * equation key. A whole-number key is a count, and a year-shaped integer is
 * never measured; both are left out, so "38 items" and "2019" never fire.
 */
export function footerKeySpellings(item) {
  const answer = String(item.params.answer ?? '').trim();
  const form = String(item.params.answerForm ?? '');
  if (!answer) return [];
  if (item.kind === 'textin') {
    return ['formula', 'equation', 'configuration', 'ordering', 'quantum-numbers'].includes(form) ? [{ kind: form, text: answer }] : [];
  }
  if (item.kind !== 'fillin' || /\bwhole-number\b/.test(form)) return [];
  const declared = /\bsig-figs:(\d+)/.exec(form);
  const numbers = [];
  const mantissa = answer.replace(/\s*\\times\s*10\^\{?[^}]*\}?\s*$/, '').replace(/\{,\}|,(?=\d{3}\b)/g, '');
  numbers.push(mantissa);
  const display = String(item.params.answerDisplay ?? '').replace(/\{,\}|(?<=\d),(?=\d{3}\b)/g, '');
  const first = /[-−]?\d*\.?\d+/.exec(display);
  if (first) numbers.push(first[0]);
  const spellings = [];
  for (const number of new Set(numbers.map((n) => n.replace(/^[-−+]/, '')))) {
    const figures = writtenSigFigs(number);
    if (figures === null) continue;
    if (!number.includes('.') && /^(?:1[5-9]|20)\d\d$/.test(number)) continue;
    if (Math.max(figures, declared && number === mantissa.replace(/^[-−+]/, '') ? Number(declared[1]) : 0) < 3) continue;
    spellings.push({ kind: 'number', text: number });
  }
  return spellings;
}

/** Where `spelling` stands whole in `footer` (a number not inside a longer one, a formula not inside a longer one). */
function footerPrints(footer, spelling) {
  const escaped = spelling.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (spelling.kind === 'number') {
    const plain = footer.replace(/(?<=\d),(?=\d{3}\b)/g, '').replace(/\{,\}/g, '');
    return new RegExp(`(?<![\\d.])${escaped}(?!\\d|\\.\\d)`).test(plain);
  }
  const FORMULA_CHAR = '[\\p{L}\\p{N}₀-₉⁰¹²³⁴-⁹⁺⁻·([\\]]';
  return new RegExp(`(?<!${FORMULA_CHAR})${escaped}(?!${FORMULA_CHAR})`, 'u').test(footer);
}

/** A power of ten in a stem's inline math followed, inside the same span, by a unit set as text. */
export const STEM_POWER_UNIT = /\\times\s*10\s*\^\s*(?:\{[^{}]*\}|-?\d)\s*(?:\\ |\\,)\s*\\(?:text|mathrm)\s*\{/;
/** Any number in a stem's inline math followed, inside the same span, by a unit set as text: `$\Delta H = -314\ \text{kJ}$` (chapter 5). */
export const STEM_NUMBER_UNIT = /\d(?:\{,\}\d)*\s*(?:\\ |\\,)\s*\\(?:text|mathrm)\s*\{(?!\s*(?:and|or|of|for|to|in)\b)/;

/**
 * Is this inline math nothing but a symbol set equal to a value with its
 * unit — `q = -2.9\ \text{kJ}`, `T_\text{i} = 248\ {}^\circ\text{C}`? In
 * running text that is the symbol in math and the value and unit in prose
 * (`$q$ = −2.9 kJ`), body and stem alike (Derek, November 14, 2026).
 * Arithmetic stays math: a fraction, a product, a relation between two
 * quantities (`1\ \text{ppm} = 10^{3}\ \text{ppb}`), a formula in words.
 */
export function symbolValueUnit(tex) {
  const sides = String(tex).split('=');
  if (sides.length !== 2) return false;
  const [left, right] = sides.map((side) => side.trim());
  if (!left || /^[\d+\-−(]|\\t?frac|\\times|\\div|\\cdot/.test(left) || STEM_NUMBER_UNIT.test(left)) return false;
  // A symbol, not a quantity named in words ("percent yield = …").
  if (/^\\(?:text|mathrm)\s*\{/.test(left) || /^\\%/.test(left)) return false;
  const value = /^[+\-−]?\d[\d.]*(?:\{,\}\d+)*\s*(?:\\times\s*10\s*\^\s*(?:\{[^{}]*\}|-?\d)\s*)?(?:\\ |\\,)\s*(.+)$/.exec(right);
  if (!value) return false;
  const unit = value[1];
  return /^(?:\\(?:text|mathrm)\s*\{|\{\}\^\\circ)/.test(unit) && !/\\t?frac|\\times|\\div|[+=]|\\left|\\right/.test(unit);
}

// ---- the lint ----------------------------------------------------------------

/**
 * Every `\ce{…}` in `tex` whose last character before its closing brace is a
 * period, comma, or semicolon, as `{ index, written, mark }` (index of the
 * `\ce`). Braces nest (`\ce{X_{(l)}}`), and a backslash escapes the next
 * character.
 */
export function ceTrailingPunctuation(tex) {
  const hits = [];
  for (const m of tex.matchAll(/\\ce\s*\{/g)) {
    let depth = 1;
    let at = m.index + m[0].length;
    for (; at < tex.length && depth; at++) {
      if (tex[at] === '\\') { at++; continue; }
      if (tex[at] === '{') depth++;
      else if (tex[at] === '}') depth--;
    }
    if (depth) continue;
    const close = at - 1;
    const mark = tex[close - 1];
    if (/[.,;]/.test(mark) && tex[close - 2] !== '\\') hits.push({ index: m.index, written: tex.slice(m.index, close + 1), mark });
  }
  return hits;
}

export function lintLeaks(src, filename = '') {
  const errors = [];
  const err = (i, msg) => errors.push(`L${lineOf(src, i)}: ${msg}`);
  const book = bookKeyOf(filename);
  const lifeSciences = book.startsWith('life-health-sciences/');
  // Chemistry 2e: Unicode formulas in prose like the life sciences, and
  // `\ce{…}` for every formula inside math (docs/subjects/chemistry.md).
  const chemistry = book === 'physical-sciences/chemistry';
  // Code examples and HTML comments are documentation, not authored content.
  const text = maskCode(src).replace(/<!--[\s\S]*?-->/g, blankPreservingOffsets);

  // ---- HTML character references in shortcode params -----------------------
  // Hugo templates escape attribute text, so `alt="a &quot;Sunlight&quot;
  // box"` ships as `&amp;quot;Sunlight&amp;quot;` and a screen reader reads
  // "ampersand quot" aloud (Biology 8.1 and 47.1, twelve of them in two
  // alts). Authors reached for the entity because a bare `"` ends the param;
  // the fix is a character that does not: ‘…’ or '…'. Body prose is not
  // touched — Markdown decodes `&lt;` there and it renders correctly.
  for (const name of Object.keys(SHORTCODE_PARAMS)) {
    for (const { params, index } of shortcodes(text, name)) {
      for (const [param, value] of Object.entries(params)) {
        const m = /&(?:[a-z][a-z0-9]*|#\d+|#x[0-9a-f]+);/i.exec(value);
        if (m) {
          err(index, `${name}: param \`${param}\` holds the HTML character reference \`${m[0]}\` — the template escapes attribute text, so it ships double-escaped and a screen reader reads the entity's letters; write the character itself (‘…’ or '…' for quotation marks)`);
        }
      }
    }
  }

  // ---- chemistry in ASCII ---------------------------------------------------
  // Life-science prose writes formulas and ions with Unicode sub- and
  // superscripts (docs/subjects/life-sciences.md, Notation). The ASCII form
  // is not just untidy: a screen reader voices `Ca2+` as "C a 2 plus", the
  // same as a coefficient, where `Ca²⁺` is read as a superscript; and
  // `CO2`/`CO₂` are two different strings to the site search. Microbiology
  // 8.3 had flattened about twenty of its source's `H<sup>+</sup>` to `H+`
  // beside five `H⁺`. Alt and longdesc text is held to the same form (it is
  // read aloud, which is the point); `accept` members are exempt because
  // they are what a learner types, and math spans are TeX.
  if (lifeSciences || chemistry) {
    const visible = notationText(src);
    for (const m of visible.matchAll(FORMULA_RE)) {
      // A token wrapped whole in quotation marks is a quotation of the
      // string itself (a Source note naming the printed "N2N2"), and one
      // wrapped in asterisks is an italic gene symbol (*USP14*).
      const around = visible[m.index - 1] + visible[m.index + m[0].length];
      if (/^(?:["“”'‘’]{2}|\*\*|__)$/.test(around ?? '')) continue;
      // The one formula a stem prints as it is TYPED: the closing sentence
      // of a hydrate item, "Type the dot as a period, as in CuSO4.5H2O."
      // (the hydrate rule below requires it, so this rule cannot refuse it).
      if (chemistry && /Type the dot as a period, as in $/.test(visible.slice(Math.max(0, m.index - 40), m.index))) continue;
      const uni = unicodeFormula(m[0], { chemistry });
      if (uni) err(m.index, `ASCII chemistry \`${m[0]}\` — write \`${uni}\` with Unicode sub/superscripts (a screen reader reads \`${m[0]}\` as letters and a bare number); only an \`accept\` member stays typeable ASCII`);
    }
  }

  // ---- a formula set by hand inside math ------------------------------------
  // In the Chemistry book every formula inside `$…$` or `$$…$$` is
  // `\ce{…}`: Hugo's KaTeX carries mhchem, which sets the symbols upright,
  // the counts as subscripts, the charges as superscripts, and the reaction
  // arrows at their proper length from one plain spelling. handSetFormulas()
  // has the three hand spellings and what it deliberately does not flag.
  if (chemistry) {
    for (const span of mathSpans(src, { maskCode: true })) {
      // `tex` starts after the opening delimiter: one `$` inline, two for display.
      const texStart = span.index + (span.display ? 2 : 1);
      for (const hit of handSetFormulas(span.tex)) {
        const reason = hit.why === 'italic'
          ? 'math sets bare letters italic, as variables, so this prints as a product of them'
          : 'a formula spaced by hand never matches the ones mhchem sets beside it';
        err(texStart + hit.index, `formula \`${hit.written}\` is set by hand inside math — write \`\\ce{${ceSpelling(hit.written)}}\` (${reason})`);
      }
    }
  }

  // ---- a symbol with its value, in running text ------------------------------
  // One form wherever a sentence gives a symbol its value: the symbol in
  // math, the equals sign, value, and unit in prose — `$q$ = −2.9 kJ` — so a
  // worked example and the exercise under it read alike (the stem half of
  // the rule is the unit lint further down; a stem's math is also spoken
  // whole). An `answerDisplay` is a math display, not a sentence, and
  // display math keeps `\Delta H = -92.2\ \text{kJ}`.
  if (chemistry) {
    for (const span of mathSpans(src, { maskCode: true })) {
      if (span.display || !symbolValueUnit(span.tex)) continue;
      const lineStart = src.lastIndexOf('\n', span.index) + 1;
      const param = /(\w+)="(?:[^"\\]|\\.)*$/.exec(src.slice(lineStart, span.index))?.[1];
      if (param === 'answerDisplay' || param === 'answer' || param === 'question') continue;
      err(span.index, `\`$${span.tex.slice(0, 50)}$\` sets a symbol's value and unit inside inline math — in running text the symbol is math and the value and unit are prose: \`$q$ = −2.9 kJ\` (the minus sign U+2212)`);
    }
  }

  // ---- a character the build's KaTeX refuses inside \text{…} --------------
  // The gates render math with `strict: 'ignore'`; Hugo's build renders with
  // strict mode on, which refuses some Unicode inside a text group — ≡, ×,
  // −, Greek letters — and fails the whole build (7.5's `D_\text{C≡O}`, which
  // `verify-section` passed). Every book: the build is one.
  for (const span of mathSpans(src, { maskCode: true })) {
    const texStart = span.index + (span.display ? 2 : 1);
    for (const { group, character } of strictTextProblems(span.tex)) {
      err(texStart, `\`${group}\` holds "${character}" (U+${character.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}), which the build's KaTeX (strict mode) refuses inside a text group and fails the site build on — write it as math outside the group (\\equiv, \\times, -, \\alpha), or in \\ce{…}`);
    }
  }

  // ---- punctuation closing a \ce{…} ------------------------------------------
  // mhchem reads a period, comma, or semicolon typed last inside `\ce{…}` as
  // part of the formula and draws a period as a raised dot (the hydrate
  // dot), so `\ce{H2O.}` prints "H₂O·". The sentence's punctuation goes
  // after the closing `$`, where the glue span holds it on the formula's line.
  // Every book: `\ce` is the Chemistry book's, but a formula anywhere is read
  // the same way.
  for (const span of mathSpans(src, { maskCode: true })) {
    const texStart = span.index + (span.display ? 2 : 1);
    for (const hit of ceTrailingPunctuation(span.tex)) {
      err(texStart + hit.index, `\`${hit.written}\` ends with \`${hit.mark}\` inside the braces — mhchem draws it as part of the formula (a period as a raised dot); put the punctuation after the closing \`$\``);
    }
  }

  // ---- items in page order -----------------------
  const KINDS = ['fillin', 'multiplechoice', 'graphplot', 'textin', 'selfcheck', 'sortbins'];
  const items = KINDS.flatMap((kind) => [...shortcodes(text, kind)].map((sc) => ({ kind, ...sc })))
    .sort((a, b) => a.index - b.index);
  // The Practice block (`## Practice` to the next `## `), or the whole of a
  // Knowledge Check. A body item sits under prose that prints its topic
  // anyway, at the source's own note position, so adjacency means nothing
  // there; in a Practice group the item above is the last thing read.
  const isKnowledgeCheck = /knowledge-check-\d+-\d+\.md$/.test(filename);
  const practiceHeading = /^## Practice[ \t]*$/m.exec(text);
  const practiceStart = isKnowledgeCheck ? -1 : (practiceHeading?.index ?? Infinity);
  const practiceEnd = (() => {
    if (!practiceHeading || isKnowledgeCheck) return text.length;
    const after = practiceHeading.index + practiceHeading[0].length;
    const next = /^## /m.exec(text.slice(after));
    return next ? after + next.index : text.length;
  })();
  const inPractice = (index) => index > practiceStart && index < practiceEnd;

  for (let k = 0; k < items.length; k += 1) {
    const item = items[k];
    if (item.kind !== 'textin') continue;
    const where = labelOf('textin', item.params);
    const spellings = gradedSpellings(item.params);

    // ---- the key carries an operator the text grader drops (Chemistry) -----
    // The text grader reads `/`, `·`, `×`, `*`, and `°` as spaces, so
    // `kg/m3` and `kg·m3` are one string and `°K` is `K`. A derived unit's
    // quotient-or-product is the very thing such an item tests, and the body
    // teaches that kelvin takes no degree sign: the pilot's 1.4 page marked
    // "meters·second" right for a speed and "°K" right for a temperature.
    // Such a key is a `multiplechoice` whose distractors are the product,
    // the inverse, and the degree-marked form.
    // ---- a formula keyed as a word (Chemistry) -------------------------------
    // The word grader lowercases and drops punctuation: `CO` passes for `Co`,
    // `No` for `NO`, `FeCl3` for `FeCl₃·2H₂O`'s first half typed alone.
    // A key that reads as a formula declares answerForm="formula" (and an
    // equation "equation"), which grades capitals, subscripts, and charge.
    if (chemistry && item.params.answerForm === undefined) {
      const key = String(item.params.answer ?? '').trim();
      const question = String(item.params.question ?? '');
      const marked = /[\d₀-₉⁰¹²³⁴-⁹⁺⁻()[\]·^]/.test(key) || (key.match(/[A-Z]/g) || []).length >= 2;
      const symbol = /^[A-Z][a-z]?$/.test(key) && /\b(?:symbol|formula)/i.test(question);
      if (/⟶|→|⇌|->/.test(key)) {
        err(item.index, `${where}: its key ${JSON.stringify(key)} is an equation graded as words — declare answerForm="equation"`);
      } else if (isConfiguration(key)) {
        // The word grader drops the superscripts' meaning and the order:
        // `1s22s22p6` would have to be typed as the key's characters.
        err(item.index, `${where}: its key ${JSON.stringify(key)} is an electron configuration graded as words — declare answerForm="configuration"`);
      } else if (isQuantumSet(key)) {
        // The word grader reads "4 0 0 +1/2" as four words: another possible
        // set of the shell and subshell (any mₗ, either spin) is refused.
        err(item.index, `${where}: its key ${JSON.stringify(key)} is a set of quantum numbers graded as words (only the key's own set passes) — declare answerForm="quantum-numbers"`);
      } else if (/[<>]/.test(key) && chemCanon(key, 'ordering')) {
        // The word grader drops `<`, so the members typed in ANY order pass.
        err(item.index, `${where}: its key ${JSON.stringify(key)} is an ordering graded as words (the word grader drops "<", so any order passes) — declare answerForm="ordering"`);
      } else if ((marked || symbol) && readSpecies(key).length) {
        err(item.index, `${where}: its key ${JSON.stringify(key)} is a chemical formula graded as a word (the word grader ignores capitals, so "CO" passes for "Co") — declare answerForm="formula"`);
      }
    }

    // ---- a hydrate key says how its dot is typed (Chemistry) ----------------
    // The formula field's guide shows subscripts and a charge and nothing
    // else. A centered dot is on no keyboard, and nothing on the 2.7 page
    // said the grader reads a period for it (the rendered-page reading).
    if (chemistry && item.params.answerForm === 'formula' && String(item.params.answer ?? '').includes('·')
      && !/Type the dot as a period, as in \S+\.\S+\./.test(String(item.params.question ?? ''))) {
      err(item.index, `${where}: its key is a hydrate's formula, and the field's guide does not say how a centered dot is typed — close the stem "Type the dot as a period, as in Na2CO3.10H2O." (a hydrate whose formula holds no key of the page)`);
    }

    // ---- a half-reaction key says how its electron is typed (Chemistry) ----
    // The equation field's guide shows subscripts, a charge, and the arrow.
    // Nothing on the 4.2 page said an electron is typed at all, and a bare
    // "2e" does not read (the rendered-page reading of Chemistry 4.2).
    if (chemistry && item.params.answerForm === 'equation' && /(?:^|[\s+⟶])\d*\s*e⁻/.test(String(item.params.answer ?? ''))
      && !/Type an electron as e-\./.test(String(item.params.question ?? ''))) {
      err(item.index, `${where}: its key is a half-reaction, and the field's guide does not say how an electron is typed — close the stem "Type an electron as e-."`);
    }

    // ---- a key with a fractional coefficient says how a fraction is typed --
    // A formation equation is written for one mole of its product (Chemistry
    // 2e 5.3: "4C(s, graphite) + 5H₂(g) + ½O₂(g) ⟶ C₂H₅OC₂H₅(l)"), and the
    // equation field's guide says nothing of fractions: ½ is on no keyboard.
    if (chemistry && item.params.answerForm === 'equation' && hasFractionalCoefficient(item.params.answer)
      && !/Type a fraction as 1\/2\./.test(String(item.params.question ?? ''))) {
      err(item.index, `${where}: its key has a fractional coefficient, and the field's guide does not say how a fraction is typed — close the stem "Type a fraction as 1/2."`);
    }

    // ---- a configuration or an ordering says how it is typed -----------------
    // Neither field carries a typing guide (a configuration's would print a
    // configuration, an ordering's a list), so the stem closes with the
    // sentence — one that prints no key: "Type each subshell as 1s2 2s2 …"
    // would hand over the start of every configuration in the book.
    if (chemistry && item.params.answerForm === 'configuration'
      && !String(item.params.question ?? '').includes(CONFIGURATION_CLOSING)) {
      err(item.index, `${where}: an electron configuration's field has no typing guide — close the stem "${CONFIGURATION_CLOSING}"`);
    }
    if (chemistry && item.params.answerForm === 'ordering'
      && !String(item.params.question ?? '').includes(ORDERING_CLOSING)) {
      err(item.index, `${where}: an ordering's field has no typing guide — close the stem "${ORDERING_CLOSING}"`);
    }
    // ---- a hybridization label (Chemistry chapter 8) ------------------------
    // A plain text-in whose grader folds the label's writings (`sp3d`,
    // `sp^3d`, "sp3d hybridized"): no accept, no form, the key in the book's
    // print, and the stem closing with how a superscript is typed.
    const hybridKey = String(item.params.answer ?? '').normalize('NFKC').toLowerCase().replace(/[\s^{}]/g, '');
    if (chemistry && /^sp\d?(?:d\d?)?$/.test(hybridKey)) {
      const problems = [];
      if (!HYBRID_KEYS.includes(item.params.answer)) problems.push(`its key ${JSON.stringify(item.params.answer)} is written in print, with Unicode superscripts (${HYBRID_KEYS.join(', ')})`);
      if (!String(item.params.question ?? '').trim().endsWith(HYBRID_CLOSING)) problems.push(`the stem closes, last, "${HYBRID_CLOSING}"`);
      if (item.params.accept !== undefined) problems.push('it takes no `accept` (the grader folds every writing of the label)');
      if (item.params.answerForm !== undefined) problems.push('it declares no `answerForm`');
      if (problems.length) err(item.index, `${where}: a hybridization label — ${problems.join('; ')}`);
    }
    if (chemistry && item.params.answerForm === 'quantum-numbers'
      && !String(item.params.question ?? '').includes(QUANTUM_CLOSING)) {
      err(item.index, `${where}: a set of quantum numbers' field has no typing guide — close the stem "${QUANTUM_CLOSING}"`);
    }
    if (item.params.answerForm === 'quantum-numbers') {
      const printed = quantumStemAnswers(item.params.question, item.params.answer);
      if (printed) err(item.index, `${where}: the stem prints ${JSON.stringify(printed)}, a set of quantum numbers for the key's own n and l — the stem answers the item`);
    }
    if (item.params.answerForm === 'ordering') {
      const printed = orderingStemAnswers(item.params.question, item.params.answer);
      if (printed) err(item.index, `${where}: the stem prints the members as ${JSON.stringify(printed)}, in the key's order or its reverse — the stem answers the item: list the members alphabetically`);
    }

    if (chemistry && item.params.answerForm === undefined) {
      const operator = [String(item.params.answer ?? ''), ...String(item.params.accept ?? '').split('|')]
        .find((member) => /[\/·×*°]/.test(member));
      if (operator) {
        err(item.index, `${where}: its key ${JSON.stringify(operator)} carries an operator or degree sign the text grader reads as a space (a product would pass for the quotient, "°K" for "K") — ask a derived unit or a degree-marked unit as a \`multiplechoice\``);
      }
    }

    // ---- the key is a word of its own objective heading (Chemistry) -------
    // Chemistry 2e keys only half its exercises, so an objective with no
    // keyed exercise is covered by fillers alone — and the easy filler is a
    // recall of the objective's own words. The pilot's 1.2 page filled
    // "Distinguish between mass and weight" with two textins keyed `weight`
    // and `mass`: with the heading printing both, each is answered by
    // elimination, and nothing else in the group was graded. The
    // life-sciences books treat a heading-printed key as a preference (their
    // groups always hold keyed source items too); here it is the rule.
    if (chemistry && inPractice(item.index)) {
      const before = text.slice(0, item.index);
      const headings = [...before.matchAll(/^###[ \t]+(.+)$/gm)];
      const heading = headings.length ? headings[headings.length - 1] : null;
      if (heading && heading.index > practiceStart) {
        const headingText = normalizeText(heading[1]);
        const printed = spellings.find((s) => containsWholeWordRun(headingText, s.norm));
        if (printed) {
          err(item.index, `${where}: its key ${JSON.stringify(printed.member)} is printed (as ${JSON.stringify(printed.norm)}) in its own objective heading \`### ${heading[1].trim()}\` — a filler's key is never a word its heading prints; blank a word of the body sentence the heading does not print`);
        }
      }
    }

    // ---- the "directly above" leak ----------------------------------------
    // The item directly above a `textin` is the last thing a learner read
    // before the blank, so if its stem, its options, or its hint prints the
    // key — or a plural or singular the grader folds onto it — the recall
    // item is answered
    // by copying. This was the top defect class of A&P chapter 1 (the
    // `X-ray` textin under "…which of the following are X-rays best used to
    // visualize?"; `nutrient` under "…statements about nutrients…";
    // `isotope` under "It has seven stable isotopes"), and 42 textins in
    // Biology and Microbiology sat directly under a multiple choice that
    // offered their key as an option. A hint or stem further up the page is
    // not this rule: measured September 2026, "anywhere on the page" hit
    // topic words by the hundred and was rejected (docs/subjects/
    // microbiology.md). "Directly above" is the previous interactive item
    // of a Practice block or Knowledge Check, across a `###` group heading too:
    // the last item of one group and the first textin of the next sit one
    // above the other on the page (Biology 3.3: an option "histones" over a
    // `histone` cloze). It landed with the A&P
    // hits fixed by that book's own re-review and 289 Biology and
    // Microbiology groups (Knowledge Checks included) cleared: 285 by
    // moving recall items up the group, which leaves every source item's
    // relative order alone, and four by hand, three of them with a reworded
    // author-written hint. Source stems and options are never edited to
    // pass it — order the group so the recall item comes before the items
    // that print its key.
    const prev = items[k - 1];
    const leak = prev && inPractice(item.index) && inPractice(prev.index) ? directlyAboveLeak(prev, item) : null;
    if (leak?.option) {
      // The documented special case, with its own message: a whole option
      // that IS the key (a distractor, or the same fact keyed twice back to
      // back, where the multiple choice's feedback hands it over).
      err(item.index, `${where}: the multiplechoice directly above it offers ${JSON.stringify(leak.member)} as an option — the textin's own key; order the group so the recall item comes first (source options are never edited)`);
    } else if (leak) {
      err(item.index, `${where}: its key ${JSON.stringify(leak.member)} is printed (as ${JSON.stringify(leak.norm)}) in the ${leak.field} of the ${prev.kind} directly above it — order the group so the recall item comes before the items that print its key, or word that hint by role`);
    }

    // ---- the hint prints a root or derivative of the key ------------------
    // lints.mjs already refuses a hint that prints an accepted spelling as a
    // whole-word run. What it cannot see is the key inside a longer word or
    // a word built on the key's root: A&P 1.4 "…and the micronutrients are
    // the three basic classes of this" (`nutrient`), 1.6 "This word also
    // names 'pronation'" (`prone`) and "'supination'" (`supine`); Biology's
    // "phospholipids" for `lipid`, "Metabolomics" for `metabolome`,
    // "lignified" for `lignin`. So for a one-word spelling of five letters or
    // more, a hint word that CONTAINS it, or that shares its first
    // max(4, length − 2) letters, prints the answer's root. Under five
    // letters a key is a syllable of too many unrelated words (`cell` in
    // "cellulose", `ion` everywhere), so it is left to the whole-word rule.
    const hint = normalizeText(item.params.hint || '');
    if (hint) {
      const hintWords = hint.split(' ');
      let found = null;
      for (const { member, norm } of spellings) {
        if (found) break;
        if (norm.includes(' ') || norm.length < 5 || norm !== normalizeText(member)) continue;
        const need = Math.max(4, norm.length - 2);
        for (const word of hintWords) {
          if (word === norm || foldedForms(norm).includes(word)) continue; // lints.mjs's whole-word rule
          let common = 0;
          while (common < word.length && common < norm.length && word[common] === norm[common]) common += 1;
          if (word.includes(norm) || common >= need) {
            found = { member, word };
            break;
          }
        }
      }
      if (found) {
        err(item.index, `${where}: the hint's word ${JSON.stringify(found.word)} prints the root of ${JSON.stringify(found.member)} — a hint says WHERE to look (the subsection, figure, or table), never the key or a word built on it`);
      }
    }

    // ---- the acronym cloze ----------------------------------------------------
    // "…fluorescence-activated cell sorter, or ________" keyed `FACS`: the
    // stem spells the acronym out in the words right before the blank, so
    // the item tests initials, not recall (Microbiology 20.5, twice; the KC
    // playbook's "abbreviated ____" rule). Up to three short words may sit
    // between the spelled-out name and the blank ("…, or", "…, abbreviated").
    const answer = (item.params.answer || '').trim();
    const question = (item.params.question || '').replace(/\*+/g, '');
    const blank = question.search(/_{3,}/);
    if (blank >= 0 && /^[A-Z][A-Za-z]{1,6}$/.test(answer) && (answer.match(/[A-Z]/g) || []).length >= 2) {
      const initials = answer.replace(/[a-z]/g, '').toLowerCase();
      const before = question.slice(0, blank).split(/[^\p{L}\d]+/u).filter(Boolean);
      for (let gap = 0; gap <= 3; gap += 1) {
        const end = before.length - gap;
        const words = before.slice(end - initials.length, end);
        if (end - initials.length >= 0 && words.every((w, j) => w[0].toLowerCase() === initials[j])) {
          err(item.index, `${where}: the answer ${JSON.stringify(answer)} is the initials of "${words.join(' ')}", printed right before the blank — ask for the name the acronym stands for, or key the item on something the stem does not spell out`);
          break;
        }
      }
    }

    // ---- a number-keyed textin ----------------------------------------------
    // Numbers are `fillin` territory: the text grader compares strings, so
    // `5 µm`, `5.0 µm`, `5.0 micrometers`, and `five` are four different
    // answers to it, and an accept list never covers them all
    // (docs/subjects/life-sciences.md, "Never a textin whose answer is a
    // number"). The September 22, 2026 sweep found seven shipped — each a
    // summary cloze whose blank fell on a count or a measurement — and the
    // rule landed on September 23 with Microbiology 26.2's "every 10 years"
    // Check Your Understanding converted. Fix: blank a different phrase, or
    // make the item a `multiplechoice` whose options are module-printed or
    // adjacent values, disclosed in the footer. A set of quantum numbers
    // (`answerForm="quantum-numbers"`, Chemistry 6.3) is four numbers read
    // as values by its own grader, never compared as a string.
    if (item.params.answerForm !== 'quantum-numbers' && numericKey(normalizeText(item.params.answer || ''))) {
      err(item.index, `${where}: the answer ${JSON.stringify(item.params.answer)} is a number (or a number with a unit) — a numeric key is never graded as typed text; blank a different phrase, or make it a multiplechoice whose options are module-printed or adjacent values, disclosed in the footer`);
    }

    // ---- a hint that rules out a graded spelling ------------------------------
    // "Not X" in a hint, where X is the key or an accept member (plurals
    // folded as the grader folds them), tells a learner who knows the
    // accepted answer to type something else. Microbiology 19.3's MHC hint
    // said the answer was "not the human-specific" abbreviation, so a
    // correct `HLA`, an accept member, graded wrong in the learner's head
    // before it was typed. Two shapes: "not X" (after an optional article or
    // "just"/"only") where a run of up to five words starting there is a
    // graded spelling, and "not the … abbreviation/acronym" on an item that
    // accepts an abbreviation. Fix: drop the contradicting clause.
    if (item.params.hint) {
      const words = normalizeText(item.params.hint).split(' ');
      const members = spellings.map((s) => s.norm);
      const abbreviations = [item.params.answer || '', ...(item.params.accept || '').split('|')]
        .map((a) => a.trim()).filter((a) => /^[A-Z][A-Za-z0-9-]*[A-Z0-9]$/.test(a) && (a.match(/[A-Z]/g) || []).length >= 2);
      let contradiction = null;
      for (let i = 0; i < words.length && !contradiction; i += 1) {
        if (words[i] !== 'not') continue;
        const start = ['the', 'a', 'an', 'just', 'only'].includes(words[i + 1]) ? i + 2 : i + 1;
        for (let len = 1; len <= 5 && start + len <= words.length; len += 1) {
          const phrase = words.slice(start, start + len).join(' ');
          const member = members.find((m) => matchesForm(phrase, m));
          if (member) { contradiction = `"not ${phrase}"`; break; }
        }
        if (!contradiction && abbreviations.length && words.slice(i + 1, i + 6).some((w) => /^(?:abbreviation|acronym|initialism)s?$/.test(w))) {
          contradiction = `"not … abbreviation" beside the accepted abbreviation ${JSON.stringify(abbreviations[0])}`;
        }
      }
      if (contradiction) {
        err(item.index, `${where}: the hint's ${contradiction} rules out a spelling the grader accepts — drop the contradicting clause; a hint says where to look, never what the answer is not`);
      }
    }
  }

  // ---- a selfcheck hint that restates its rubric ----------------------------
  // A selfcheck's rubric is what the learner marks their answer against, so
  // a hint that already names two of its clauses hands over the answer the
  // learner was asked to compose: Biology 32.1's "Work through the
  // definitions of staminate and carpellate flowers" over a rubric of
  // `pollen`, `carpellate`, `staminate`. Coverage is the same
  // phraseCoverage ≥ 0.8 lints.mjs holds each checkpoint to against the
  // model answer, here against the hint; one covered clause is allowed,
  // because a hint that names its topic ("Reread the frameshift panel" over
  // "a frameshift mutation") is where-to-look: at one clause the
  // September 23, 2026 measurement found 13 hints, mostly topic-naming ones
  // like that, too noisy for an error. At two clauses the corpus had exactly
  // the one above, rewritten when the rule landed.
  // ---- `scientific-notation` only where the question asks for it ------------
  // The token refuses a plain decimal as `form` ("…now write it in
  // scientific notation"), which is right only when the question says so.
  // Where the stem does not, a learner who types 0.000123 for 1.23 × 10⁻⁴ is
  // told to change the form of an answer nothing asked to be in that form
  // (the consistency reading of chapter 6). Corpus clean when it landed
  // (November 15, 2026: 34 such fill-ins, every stem names the notation).
  for (const item of items) {
    if (item.kind !== 'fillin' || !/(?:^|\s)scientific-notation(?:\s|$)/.test(String(item.params.answerForm ?? ''))) continue;
    if (!/scientific|exponential/i.test(String(item.params.question ?? ''))) {
      err(item.index, `${labelOf('fillin', item.params)}: answerForm declares scientific-notation, but the question does not ask for it — drop the token, or ask "in scientific notation" (or "exponential notation") as the source does`);
    }
  }

  for (const item of items) {
    if (item.kind !== 'selfcheck' || !item.closed || !(item.params.hint || '').trim()) continue;
    const parts = item.inner.split(/^[ \t]*===CHECKS===[ \t]*$/m);
    if (parts.length !== 2) continue;
    const covered = parts[1].split('\n').map((c) => c.trim()).filter(Boolean)
      .filter((c) => phraseCoverage(c, item.params.hint) >= 0.8);
    if (covered.length >= 2) {
      err(item.index, `${labelOf('selfcheck', item.params)}: the hint restates ${covered.length} of its rubric clauses (${covered.map((c) => JSON.stringify(c)).join(', ')}) — a hint says WHERE to look (the subsection, paragraph, or figure), never the points the answer must make`);
    }
  }

  // ---- a selfcheck answer that prints the key of the item below it ---------
  // The forward twin of the "directly above" rule. A selfcheck's model
  // answer and its ===CHECKS=== rubric are shown the moment the learner
  // reveals them, so when the very next item of the Practice block (or
  // Knowledge Check) is a `textin` or `multiplechoice` whose key the reveal
  // prints, that item is answered by copying what was just read: Biology
  // 5.2's "…the surrounding fluid becomes hypotonic…" over a `hypotonic`
  // cloze, 6.5's vitamins-as-coenzymes answer over a `coenzyme` cloze.
  // A key here is exactly the key of the rules above: a textin's graded
  // spellings (members and their plural folds); a multiple choice's keyed
  // option (trailing period dropped, plurals folded), with the MC hint rule's
  // exemptions — a count, a graph-mode item, a key the item's own stem
  // already prints, and a contrast: a reveal that also prints a distractor
  // ("lysosomes … peroxisomes") does not single the key out. Only the NEXT
  // shortcode is this rule: measured October 16, 2026, "any later item in
  // the block" found 151 hits that were mostly topic words a long answer
  // names in passing, items further down. Fix by reordering within the
  // `###` objective group — the recall item above the selfcheck, or the
  // selfcheck to the group's end; keys, stems, and model answers are never
  // edited to pass it.
  {
    const COUNT = /^(?:\d+|zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
    for (let k = 0; k + 1 < items.length; k += 1) {
      const sc = items[k];
      const next = items[k + 1];
      if (sc.kind !== 'selfcheck' || !sc.closed || !inPractice(sc.index) || !inPractice(next.index)) continue;
      const leak = selfcheckForwardLeak(sc, next, COUNT);
      if (leak) {
        err(next.index, `${labelOf(next.kind, next.params)}: its key ${JSON.stringify(leak.member)} is printed (as ${JSON.stringify(leak.norm)}) in the ${leak.field} of the selfcheck directly above it — the reveal answers it; order the group so this item comes before the selfcheck, or the selfcheck goes to the group's end (keys and model answers are never edited)`);
      }
    }
  }

  // ---- a multiple-choice hint that prints the keyed option -----------------
  // The multiple-choice twin of lints.mjs's textin hint rule. A hint is read
  // by exactly the learner who does not know the answer, so "Uracil replaces
  // thymine only in RNA" under a uracil-keyed item, or "Recall which
  // mechanism depends on the conjugation pilus" under a conjugation-keyed
  // one, answers it. Of the 18 life-sciences hits re-read on September 22,
  // 2026, 15 were that, two printed the key inside a subsection title the
  // hint named (reworded too: there the title IS the answer), and one was a
  // count (below). Folding plurals both ways then found two more true hits
  // ("proto-oncogene" for `oncogenes`, "releases" for `release`) and one
  // contrast hint naming a distractor's plural, which is skipped.
  // Not a hit: a hint that prints a distractor the same way
  // (a contrast, "X does this, Y does that"), a key the stem already prints,
  // and a key that is a count — a number word in a counting hint is almost
  // always a different count ("the first shell holds at most two
  // electrons" for a how-many-shells item). Life sciences only: a math hint
  // states the decision rule ("opposite signs mean a hyperbola"), which
  // names the answer category by design.
  // An objective heading under `## Practice` drops the source's period —
  // in every book. First enforced for Chemistry (chapter 4); the 15 such
  // headings in Biology, Microbiology and Precalculus were cleared on
  // November 12, 2026 and the rule left the Chemistry block.
  for (const { index, heading } of practicePeriodHeadings(text)) {
    err(index, `Practice heading \`### ${heading}\` ends with a period — the objectives callout keeps the source's period; the heading drops it`);
  }
  // ---- Chemistry: the checks chapters 5 and 6 left open ----------------------
  // Each was a defect a reader caught after every gate had passed the page
  // (docs/subjects/chemistry.md listed them as "lints not yet written" until
  // November 16, 2026). The readings and their incidents are in
  // chemistry-readings.mjs, tools/lib/heat-ask.mjs, and tools/lib/item-units.mjs.
  if (chemistry) {
    for (const item of items) {
      const question = String(item.params.question ?? '');
      const where = labelOf(item.kind, item.params);
      if (item.kind === 'fillin' && heatAsk(question) === 'amount') {
        // 5.2's benzene item was keyed −39.0 from its source's "q_rx = −39.0 kJ".
        if (isNegativeKey(item.params.answer)) {
          err(item.index, `${where}: keyed ${item.params.answer}, a negative number, under a question that asks how much heat is produced, released, or evolved — the verb already says which way the heat goes, so the amount is positive; a signed key belongs to a stem that asks q, ΔH, or the heat involved (playbook "Numeric keys")`);
        }
        // Two positive items of 5.2 carried "q_reaction = −q_solution" in the
        // hint: a learner who followed it typed −1.34 and was marked wrong.
        const leads = amountHintProblem(item.params.hint);
        if (leads) {
          err(item.index, `${where}: the question asks an amount of heat, a positive number, and its hint leads to a negative one: ${leads} — close the hint with "the heat produced is the size of …", or name the heat balance without the signed equation`);
        }
      }
      if (item.kind === 'fillin') {
        const asked = askedUnit(question);
        const shown = shownUnit(item.params.answerDisplay);
        if (asked && shown && !showsAskedUnit(asked, shown)) {
          err(item.index, `${where}: the closing asks for the answer in ${asked}, and the answer display shows ${shown} — the learner types a bare number, so the closing and the display name one unit, written one way`);
        }
      }
      const key = item.kind === 'selfcheck' ? item.inner.split(/^[ \t]*===CHECKS===[ \t]*$/m)[0] : item.params.answer;
      const colour = colourOutsideVisible(question, key);
      if (colour) err(item.index, `${where}: ${colour} — the answer is the region the light falls in, read from the page's own spectrum; where the source's answer names a colour, that is a correction with a Source note`);
    }
    for (const hit of subshellLabelSlips(text)) {
      err(hit.index, `\`${hit.written}\` sets the shell number italic and the subshell letter upright — a subshell label with a variable shell number is one upright token, n included: \`${hit.upright}\` (\`$n$\` alone, the quantum number, stays math)`);
    }
    for (const span of mathSpans(src, { maskCode: true })) {
      const texStart = span.index + (span.display ? 2 : 1);
      for (const hit of italicDescriptiveSubscripts(span.tex)) {
        err(texStart + hit.index, `\`${hit.written}\` in \`$${span.tex.slice(0, 40)}$\` is an italic subscript — "final" and "initial" are words, and a descriptive subscript is upright: \`${hit.upright}\` (an index a sum runs over stays italic)`);
      }
    }
    // Chapter 8's notation rulings (docs/subjects/chemistry.md "Notation";
    // each measured on the whole book before it was turned on).
    for (const hit of italicOrbitalLetters(text)) {
      err(hit.index, `\`${hit.written}\` sets an orbital letter italic — an orbital, subshell, or hybridization label is upright Unicode in prose (\`2p\`, \`sp³d²\`, "an s orbital"), whatever the source italicizes; state symbols and axis letters keep their italics`);
    }
    for (const hit of bareGreekMath(text)) {
      err(hit.index, `\`${hit.written}\` is a bare ${hit.letter} set as math outside a multiple choice or fill-in — write the letter (${hit.letter}) in the body, a caption, an alt, a text-in, or a self-check; math is for a multiple-choice or fill-in question, option, or hint (and the self-check that shares its stem), and for an orbital symbol with a subscript, superscript, or star`);
    }
    for (const hit of bareSigmaPi(text)) {
      err(hit.index, `"${hit.written}": a bare ${hit.letter} names a bond or orbital in running prose — write it with its name, "${hit.name} (${hit.letter})" ("a sigma (σ) bond", "pi (π) bonding"); item text, alts and longdescs, math, and a label with a subscript, superscript, or star stay as they are (playbook "Notation", σ and π)`);
    }
    for (const hit of minusAsBond(text)) {
      err(hit.index, `"${hit.written}" draws a bond with the minus sign U+2212 — a single bond between symbols is an en dash (H–C≡C–H)`);
    }
    for (const hit of britishSpellingAndStraightApostrophes(text).filter((one) => one.kind === 'spelling')) {
      err(hit.index, `"${hit.written}" — American spelling, the source's: labeled, color, gray (a word the source itself spells otherwise is quoted in curly quotation marks)`);
    }
    for (const hit of overlappingRubricClauses(text)) {
      err(hit.index, `selfcheck: the rubric clause ${JSON.stringify(hit.inner)} is wholly inside the clause ${JSON.stringify(hit.outer)} — the same words tick both boxes; split the model answer's words at a seam so the clauses are disjoint runs ("lesser; more heat would be lost …" / "and so ΔT … would be lesser")`);
    }
    for (const hit of straightApostrophes(text)) {
      err(hit.index, `a straight ' ${hit.kind === 'opening' ? 'opening a quotation' : 'in a word'} ("${text.slice(Math.max(0, hit.index - 8), hit.index + 3).replace(/\s+/g, ' ')}") — the house writes the curly ${hit.kind === 'opening' ? '‘' : '’'} in prose, alts, and item text (the grader reads either as typed)`);
    }
    // Chapter 9's notation readings (November 17, 2026; measured on the
    // whole book, every hit fixed before they were turned on).
    for (const hit of bareProportionality(text)) {
      err(hit.index, `"${hit.written}": a bare ∝ outside math renders as a speck in the body face — write \`$\\propto$\` (playbook "Notation")`);
    }
    for (const hit of ungroupedNumberBeforeUnit(text)) {
      err(hit.index, `\`${hit.written}\`: ${hit.value} stands before a unit in math, so it is no year — group it: \`${hit.grouped}\` (playbook "Notation", digit grouping)`);
    }
    for (const hit of crowdedFractionRows(text)) {
      err(hit.index, `\`${hit.written}\`: two rows of an aligned display that each hold a fraction are separated by a bare \`\\\\\` — write \`\\\\[6pt]\` so one row's denominator does not sit on the next row's numerator (playbook "Notation")`);
    }
    for (const hit of plainAnswerDisplays(text)) {
      err(hit.index, `${hit.kind}: answerDisplay="${hit.written}" has no math — every answerDisplay is math, the value as the book prints it (\`$4$\`, \`$2+$\`, \`$-2$\`)`);
    }
    for (const hit of dashHyphens(proseOnly(text))) {
      err(hit.index, `"${hit.written}" is the source's hyphen where it means a dash — write "${hit.dash}" (an em dash between clauses, an en dash in a range), and say so in the footer`);
    }
    for (const hit of sourceNumberReferences(text)) {
      err(hit.index, `"${hit.written}" is the source's number, and the site numbers no table or figure — name it by what it shows and where it is ("the table of specific heats of common substances in Section 5.1")`);
    }
    const sourceNotes = [...text.matchAll(/\*Source note:\*[^\n]*|\*\(Source note:[\s\S]*?\)\*/g)];
    const quoted = sourceNotes.map((note) => note[0]).join('\n');
    for (const figure of shortcodes(text, 'mediafigure')) {
      const description = [figure.params.alt, figure.params.longdesc, figure.inner].join('\n');
      for (const hit of miscountedConfigurations(description, quoted)) {
        const number = hit.number ? `, and ${hit.symbol} is element ${hit.number}` : '';
        err(figure.index, `mediafigure: its description gives \`${hit.written}\`, which holds ${hit.counted} electrons where ${hit.symbol} has ${hit.expected}${number} — re-read the figure; if the figure itself prints it, a Source note on the page quotes the configuration and says what it should be`);
      }
    }
    // The footer and the Source notes are read on the page the item is
    // answered on. 6.1's footer said the cesium line fell "outside the
    // visible range", which is a clause of that self-check's rubric. Three
    // words or more: a two-word clause ("the volume", "no electrons") is in
    // any sentence about its item (8 such hits measured, none a leak).
    const clauses = items.filter((item) => item.kind === 'selfcheck' && item.closed).flatMap((item) => {
      const rubric = item.inner.split(/^[ \t]*===CHECKS===[ \t]*$/m)[1] ?? '';
      return rubric.split('\n').map((clause) => clause.trim()).filter((clause) => readWords(clause).length >= 3).map((clause) => ({ item, clause }));
    });
    const said = [
      ...[...text.matchAll(/<small>[\s\S]*?<\/small>/g)].map((match) => ({ what: 'the footer', index: match.index, words: match[0] })),
      ...sourceNotes.map((match) => ({ what: 'a Source note', index: match.index, words: match[0] })),
    ];
    for (const { what, index, words } of said) {
      for (const { item, clause } of clauses) {
        if (isWordRun(clause, words)) {
          err(index, `${what} repeats ${JSON.stringify(clause)}, a point of the rubric of ${labelOf('selfcheck', item.params)} — it is read on the page the item is answered on; say THAT the answer differs from the source's, or where the item is, never what the answer is`);
        }
      }
    }
  }

  // ---- Chemistry: what only reading the pilot's six pages together found ----
  // Each page had passed its own author and checker; these four shapes were
  // legal on any one page and wrong across them (November 9, 2026).
  if (chemistry) {
    for (const item of items) {
      const question = String(item.params.question ?? '');
      const where = labelOf(item.kind, item.params);
      // 1.6 wrote "Enter the temperature in degrees Celsius, with its sign."
      // on its two negative keys and on none of its positive ones.
      if (/\bwith its sign\b/i.test(question)) {
        err(item.index, `${where}: "with its sign" — a negative answer is typed with its minus sign as a matter of course, and the phrase, which pages wrote on negative keys only, tells the learner the sign; drop it`);
      }
      // A hint that does the item: the pilot's pages carried "Multiply by
      // nine-fifths, then add 32" and "Every digit here is significant"
      // after the rule against them was written. The line the playbook
      // draws by pairs ("Hints") is drawn here by the two shapes a pattern
      // can see: an arithmetic imperative, and a verdict on this number's
      // digits. Every auto-graded kind is read: chapter 2's counts and
      // formulas are `textin`s and multiple choices, and "Add the protons
      // and neutrons" does a `textin` as surely as it does a `fillin`.
      if (item.kind !== 'selfcheck') {
        const hint = String(item.params.hint ?? '');
        const does = /^(?:first,?\s+)?(?:multiply|divide|add|subtract|cube|square)\b/i.exec(hint)
          || /\bevery (?:non-?zero )?(?:digit|zero)\b[^.]*\bsignificant\b|\bplaceholder zero\b|\bis a final 5\b/i.exec(hint);
        if (does) {
          err(item.index, `${where}: the hint ${JSON.stringify(hint.slice(0, 60))} does the item ("${does[0]}") — a hint names the tool (the equation by name, the rule, the table), never the arithmetic on this item's numbers or a verdict on its digits (playbook "Hints")`);
        }
      }
      // A formal charge per element (7.4) closes with the one sentence the
      // source gate reads, about an element the stem prints.
      const wholeNumber = item.kind === 'fillin' && /(?:^|\s)whole-number(?:\s|$)/.test(String(item.params.answerForm ?? ''));
      const closingSentence = question.split(/(?<=[.?!])\s+/).pop();
      // An item of an exercise that asks oxidation states AND formal charges
      // (8.2) is the closing's: an oxidation-state closing is read below.
      if (wholeNumber && /\bformal charges?\b/i.test(question) && !/\boxidation (?:states?|numbers?)\b/i.test(closingSentence)) {
        const problem = signedClosingProblem(question, FORMAL_CHARGE_CLOSING);
        if (problem) err(item.index, `${where}: a formal charge — ${problem}`);
      }
      // …and an oxidation state (chapter 8): the gate holds each item to the
      // list its closing names where one answer gives both.
      if (wholeNumber && /\boxidation (?:states?|numbers?)\b/i.test(closingSentence)) {
        const problem = signedClosingProblem(question, OXIDATION_STATE_CLOSING);
        if (problem) err(item.index, `${where}: an oxidation state — ${problem}`);
      }
      // The example pair a signed closing prints is no key of the page: a
      // learner reads "as +2 or −2" beside an item keyed −2.
      // A charge (Derek, November 16, 2026): number first, its own closing
      // and its own token, each only with the other.
      if (item.kind === 'fillin') {
        const form = String(item.params.answerForm ?? '');
        const isCharge = /(?:^|\s)charge(?:\s|$)/.test(form);
        const closes = question.trim().endsWith(CHARGE_CLOSING);
        if (OLD_CHARGE_CLOSING.test(question)) err(item.index, `${where}: "Enter the charge as a signed number, the sign first …" asks a charge sign first — a charge is written number first, then sign (Section 4.2): close "${CHARGE_CLOSING}" and declare answerForm="whole-number charge"`);
        if (isCharge && !wholeNumber) err(item.index, `${where}: \`charge\` is declared only beside \`whole-number\` (answerForm="whole-number charge")`);
        if (isCharge && !closes) err(item.index, `${where}: a charge closes word for word "${CHARGE_CLOSING}"`);
        if (closes && !isCharge) err(item.index, `${where}: the charge closing asks for the number first — declare answerForm="whole-number charge", or the field answers \`2+\` as a sign typed last`);
      }
      const chargePair = CHARGE_PAIR.exec(question);
      const pair = EXAMPLE_PAIR.exec(question) ?? (chargePair ? [chargePair[0], chargePair[1], chargePair[2]] : null);
      if (wholeNumber && pair) {
        const keys = new Set(items.filter((other) => other.kind === 'fillin' && /(?:^|\s)whole-number(?:\s|$)/.test(String(other.params.answerForm ?? '')))
          .map((other) => Number(String(other.params.answer ?? '').replace(/[−–]/g, '-').replace(/^\+/, ''))));
        const printed = [Number(pair[1]), -Number(pair[2])].filter((value) => keys.has(value));
        if (printed.length) err(item.index, `${where}: its closing's example pair ("as +${pair[1]} or −${pair[2]}.") prints ${printed.map((value) => (value > 0 ? `+${value}` : `−${-value}`)).join(' and ')}, a key of a whole-number fill-in on this page — choose a pair neither number of which is a key here`);
      }
      // A display equation set inline in a stem and run into the next
      // sentence: "…$d = \frac{m}{V}$ Considering that…" (1.3).
      const run = /\$[^$]*=[^$]*\$[ \t]+([A-Z][a-z]{2,})/.exec(question);
      if (run) {
        err(item.index, `${where}: the inline equation runs into the next sentence ("… ${run[1]}") with no punctuation — an equation set inline in a stem ends its sentence with a period`);
      }
    }
    // A heading of this page called "the … section" (7.3's "the Lewis
    // Symbols section"): it is a subsection; a Section is a numbered page.
    for (const phrase of ownHeadingCalledSection(text)) {
      err(text.indexOf(phrase), `"${phrase}" names a heading of this page — call it a subsection ("${phrase.replace(/section$/, 'subsection')}"); "Section" is a numbered page of the book`);
    }
    // Two text-ins for one stem's electron-pair geometry and molecular
    // structure (7.6) come in the stem's order: the geometry first.
    const geometrySeen = new Map();
    for (const item of items.filter((entry) => entry.kind === 'textin')) {
      const question = String(item.params.question ?? '');
      const half = /\s*Enter the (electron-pair geometry|molecular structure)\.\s*$/.exec(question);
      if (!half) continue;
      const stem = question.slice(0, half.index);
      if (half[1] === 'electron-pair geometry' && geometrySeen.get(stem) === 'molecular structure') {
        err(item.index, `${labelOf('textin', item.params)}: the electron-pair geometry is asked after the molecular structure of the same stem — the stem asks the geometry first; put this item first`);
      }
      if (!geometrySeen.has(stem)) geometrySeen.set(stem, half[1]);
    }
    // A footer that says a defect was "kept as printed" on a page that
    // carries no Source note (7.5 said it twice): the learner meets the
    // defect on the page, so the page says so where it stands.
    for (const footer of text.matchAll(/<small>[\s\S]*?<\/small>/g)) {
      const kept = /\b(?:kept|left|stands?) as (?:the source )?printed\b/i.exec(footer[0]);
      if (kept && !src.includes('*Source note:*')) {
        err(footer.index + kept.index, `the footer says a defect was "${kept[0]}", and the page carries no \`*Source note:*\` — a defect kept on the page is noted where it stands`);
      }
    }
    // The footer is on the page the learner answers on. 1.2's said
    // "(blank: gravity)" of an added cloze.
    for (const footer of text.matchAll(/<small>[\s\S]*?<\/small>/g)) {
      const blank = /\(blank:/i.exec(footer[0]);
      if (blank) {
        err(footer.index + blank.index, 'the footer prints an added item\'s key ("(blank: …)") — name the item by where its sentence is ("a cloze on the Summary sentence that defines weight"), never by its answer');
      }
    }
    // A footer that prints a graded item's key: 4.3's said "keyed with the
    // source's 18.86" of a Check Your Learning fill-in. The footer is read on
    // the page the item is answered on, so naming an item by its key answers
    // it (the "(blank: …)" rule above is the cloze case of the same thing).
    const keyed = items.flatMap((item) => footerKeySpellings(item).map((spelling) => ({ item, spelling })));
    for (const footer of text.matchAll(/<small>[\s\S]*?<\/small>/g)) {
      for (const { item, spelling } of keyed) {
        if (footerPrints(footer[0], spelling)) {
          err(footer.index, `the footer prints ${JSON.stringify(spelling.text)}, the key of ${labelOf(item.kind, item.params)} — name an item by where it is or what it asks ("the Check Your Learning of the propane example"), never by its key`);
        }
      }
    }
    // A unit inside a stem's math after a power of ten: "$1.00 \times
    // 10^{3}\ \text{kg}$" is read aloud as a product of the number and the
    // word (the stem's math is spoken whole). The unit goes outside the
    // math: "$1.00 \times 10^{3}$ kg". An answer display is not a stem.
    for (const item of items) {
      for (const span of String(item.params.question ?? '').matchAll(/(?<!\$)\$([^$]+)\$(?!\$)/g)) {
        const unit = STEM_POWER_UNIT.exec(span[1]);
        if (unit) {
          err(item.index, `${labelOf(item.kind, item.params)}: the stem's math \`${span[1].slice(0, 50)}\` sets a unit after its power of ten inside the math — close the math before the unit: \`$1.00 \\times 10^{3}$ kg\``);
        } else if (STEM_NUMBER_UNIT.test(span[1])) {
          // The same for any value (chapter 5's ΔH): a symbol with its value
          // is the symbol in math and the value and unit in prose,
          // `$\Delta H^\circ$ = −314 kJ`, as `($d$ = 0.7134 g/mL)`.
          err(item.index, `${labelOf(item.kind, item.params)}: the stem's math \`${span[1].slice(0, 50)}\` sets a unit after its value inside the math — a symbol with its value is the symbol in math and the value and unit in prose: \`$\\Delta H^\\circ$ = −314 kJ\``);
        }
      }
    }
    // Key terms: every definition closes with a period (1.5's seven did not).
    const keyTerms = /^## Key terms[ \t]*$/m.exec(text);
    if (keyTerms) {
      const after = keyTerms.index + keyTerms[0].length;
      const next = /^## /m.exec(text.slice(after));
      const block = text.slice(after, next ? after + next.index : text.length);
      for (const bullet of block.matchAll(/^- [^\n]*(?:\n(?!- |\n)[^\n]+)*/gm)) {
        if (!/[.!?][)”"*]*\s*$/.test(bullet[0])) {
          err(after + bullet.index, `Key terms: the entry ${JSON.stringify(bullet[0].slice(0, 40))}… does not end with a period — every definition closes with one`);
        }
      }
    }
  }

  if (lifeSciences) {
    const COUNT = /^(?:\d+|zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
    for (const item of items) {
      if (item.kind !== 'multiplechoice' || item.params.mode === 'graph' || !item.closed) continue;
      const key = normalizeText((item.params.answer || '').replace(/\.$/, ''));
      const hint = normalizeText(item.params.hint || '');
      if (!key || !hint || COUNT.test(key)) continue;
      const printsKey = [key, ...foldedForms(key)].some((s) => containsWholeWordRun(hint, s));
      if (!printsKey || containsWholeWordRun(normalizeText(item.params.question || ''), key)) continue;
      const distractors = item.inner.split('\n').map((s) => normalizeText(s.replace(/\.$/, ''))).filter((o) => o && o !== key);
      if (distractors.some((o) => [o, ...foldedForms(o)].some((f) => containsWholeWordRun(hint, f)))) continue;
      err(item.index, `${labelOf('multiplechoice', item.params)}: the hint prints the keyed option ${JSON.stringify(item.params.answer)} — a hint says WHERE to look (the subsection, figure, or table), never the key or the fact the correct option asserts`);
    }
  }

  return { errors };
}
