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
 * glycogen/glucagon) cannot afford it. The author names the accepted spellings
 * (plural, British, abbreviation) in `accept`; the lint checks they are
 * distinct and not printed in the question.
 */

const DIACRITICS = /[̀-ͯ]/g;
const DASHES = /[‐‑‒–—−]/g;
const QUOTES = /[‘’‚‛′ʼ]/g;
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
 * @returns {'empty'|'correct'|'incorrect'}
 */
export function checkText(input, answer, { accept = '' } = {}) {
  const normalized = normalizeText(input);
  if (!normalized) return 'empty';
  return acceptedForms(answer, accept).includes(normalized) ? 'correct' : 'incorrect';
}
