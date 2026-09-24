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

const DIACRITICS = /[̀-ͯ]/g;
const DASHES = /[‐‑‒–—−]/g;
// U+02B9 (modifier letter prime) is what OpenStax types for 5ʹ/3ʹ in some
// modules; it is a letter to Unicode, so the letter filter would keep it.
const QUOTES = /[‘’‚‛′ʹʼ]/g;
const LEADING_ARTICLE = /^(?:a|an|the) /;

/**
 * Canonical form of a learner's or author's text: Unicode-decomposed with
 * diacritics dropped (`naïve` → `naive`), lowercased, apostrophes removed
 * (`Hooke's` → `hookes`), every hyphen/dash/slash/underscore read as a space
 * (`light-dependent` ≡ `light dependent`), other punctuation dropped,
 * whitespace collapsed, and one leading article removed (`the cell` ≡
 * `cell`). Numerals survive so `Type 2 diabetes` keeps its 2.
 */
export function normalizeText(value) {
  let text = String(value ?? '').normalize('NFKD').replace(DIACRITICS, '');
  text = text.toLowerCase();
  text = text.replace(QUOTES, '').replace(/'/g, '');
  text = text.replace(DASHES, '-').replace(/[-_/]+/g, ' ');
  text = text.replace(/[^\p{L}\p{N}\s]/gu, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  text = text.replace(LEADING_ARTICLE, '');
  return text;
}

/** The keyed answer plus its `|`-separated alternates, normalized, deduped, non-empty. */
export function acceptedForms(answer, accept = '') {
  const forms = [answer, ...String(accept ?? '').split('|')].map(normalizeText).filter(Boolean);
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
 * @returns {'empty'|'correct'|'incorrect'}
 */
export function checkText(input, answer, { accept = '' } = {}) {
  const normalized = normalizeText(input);
  if (!normalized) return 'empty';
  const forms = acceptedForms(answer, accept);
  const graded = (text) => {
    const value = normalizeText(text);
    return Boolean(value) && forms.some((form) => matchesForm(value, form));
  };
  if (graded(input)) return 'correct';
  const paren = /^([^()]+)\(([^()]+)\)\s*$/.exec(String(input ?? '').trim());
  return paren && graded(paren[1]) && graded(paren[2]) ? 'correct' : 'incorrect';
}
