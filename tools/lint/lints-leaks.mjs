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
 *     (life sciences)
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
 */
import { bookKeyOf, blankPreservingOffsets, maskCode, shortcodes, SHORTCODE_PARAMS } from '../lib/content.mjs';
// The real textin grading normalizer, so a "printed key" here means printed
// in exactly the sense check-text.mjs would grade a retyped copy of it.
import { foldedForms, matchesForm, normalizeText } from '../../assets/js/lib/text/check-text.mjs';
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
/** Cofactor abbreviations that carry a charge in the source (`NAD⁺`, `NADP⁺`, `FAD`). */
const COFACTORS = new Set(['NAD', 'NADP', 'FAD']);
/** The one-element molecules that are formulas; `B12`, `C3`, `K1` and the like are not. */
const DIATOMIC_ETC = new Set(['O2', 'N2', 'H2', 'O3', 'I2', 'S8', 'P4', 'Cl2', 'F2', 'Br2']);
/**
 * Tokens that parse as element runs with digits but name something else:
 * vaccine and virus designations, a Creative Commons licence, a histone
 * variant. Influenza subtypes (`H1N1`, `H5N1`) are matched by shape below.
 */
const NOT_FORMULAS = new Set(['PCV13', 'PPSV23', 'SV40', 'CC0', 'HSV1', 'HSV2', 'H2A', 'H2B', 'H3', 'H4', 'F0', 'F1', 'F1F0', 'F0F1', 'C3', 'C4', 'C5']);

/** The bare-sign ions a lone symbol may form, by symbol. */
const ION_CHARGES = { H: '+', K: '+', Na: '+', Li: '+', Ag: '+', Cl: '-', Br: '-', I: '-', F: '+-' };

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
export function unicodeFormula(token) {
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
  if (!parts.length || !parts.every((p) => ELEMENTS.has(p.replace(/\d+/g, '')))) return null;
  if (/^H\d+N\d+$/.test(base) || NOT_FORMULAS.has(base)) return null;
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
    if (!(ION_CHARGES[base] || '').includes(sign)) return null;
  }
  const uni = base.replace(/\d/g, (d) => SUB[d]) + [...charge].map((c) => SUP[c]).join('');
  return uni === token ? null : uni;
}

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
  for (const [field, value] of printedFields(prev)) {
    const haystack = normalizedLines(value);
    const hit = spellings.find((s) => containsWholeWordRun(haystack, s.norm));
    if (hit) return { field, member: hit.member, norm: hit.norm };
  }
  return null;
}

// ---- the lint ----------------------------------------------------------------

export function lintLeaks(src, filename = '') {
  const errors = [];
  const err = (i, msg) => errors.push(`L${lineOf(src, i)}: ${msg}`);
  const book = bookKeyOf(filename);
  const lifeSciences = book.startsWith('life-health-sciences/');
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
  if (lifeSciences) {
    const visible = notationText(src);
    for (const m of visible.matchAll(FORMULA_RE)) {
      // A token wrapped whole in quotation marks is a quotation of the
      // string itself (a Source note naming the printed "N2N2"), and one
      // wrapped in asterisks is an italic gene symbol (*USP14*).
      const around = visible[m.index - 1] + visible[m.index + m[0].length];
      if (/^(?:["“”'‘’]{2}|\*\*|__)$/.test(around ?? '')) continue;
      const uni = unicodeFormula(m[0]);
      if (uni) err(m.index, `ASCII chemistry \`${m[0]}\` — write \`${uni}\` with Unicode sub/superscripts (a screen reader reads \`${m[0]}\` as letters and a bare number); only an \`accept\` member stays typeable ASCII`);
    }
  }

  // ---- items in page order, with their heading group -----------------------
  const KINDS = ['fillin', 'multiplechoice', 'graphplot', 'textin', 'selfcheck', 'sortbins'];
  const items = KINDS.flatMap((kind) => [...shortcodes(text, kind)].map((sc) => ({ kind, ...sc })))
    .sort((a, b) => a.index - b.index);
  const headings = [...text.matchAll(/^#{1,6}[ \t]+\S.*$/gm)].map((h) => h.index);
  const groupOf = (index) => headings.filter((h) => h < index).length;
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
    // under the same `###` group of a Practice block or Knowledge Check; a
    // heading between the two ends the adjacency. It landed with the A&P
    // hits fixed by that book's own re-review and 289 Biology and
    // Microbiology groups (Knowledge Checks included) cleared: 285 by
    // moving recall items up the group, which leaves every source item's
    // relative order alone, and four by hand, three of them with a reworded
    // author-written hint. Source stems and options are never edited to
    // pass it — order the group so the recall item comes before the items
    // that print its key.
    const prev = items[k - 1];
    const leak = prev && inPractice(item.index) && groupOf(prev.index) === groupOf(item.index) ? directlyAboveLeak(prev, item) : null;
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
    // adjacent values, disclosed in the footer.
    if (numericKey(normalizeText(item.params.answer || ''))) {
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
