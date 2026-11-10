/**
 * Keyed units — how a book that renders only the exercises its source KEYS
 * is read by the two source gates.
 *
 * Chemistry 2e (docs/subjects/chemistry.md "Exercises") prints an answer for
 * its odd-numbered end-of-section exercises and for every Check Your
 * Learning, and a page builds no item on an answer an author derived. Its
 * exercises differ from the life-sciences books' in three ways the gates
 * have to read:
 *
 *   - the unit an item transcribes is often a LETTERED PART, and the parts
 *     are short ("(a) iron", "(b) 9.000") under a shared lead-in, where the
 *     life-sciences books' parts are whole sentences;
 *   - the answer to part (b) is the "(b) …" segment of ONE solution
 *     paragraph ("(a) 394 ft; (b) 5.9634 km; …");
 *   - most answers are numbers written to the significant figures the data
 *     support, in a decimal or as a × 10ⁿ.
 *
 * `verify-source-coverage` asks whether every keyed unit is on the page and
 * no unkeyed one is; `verify-source-keys` asks whether each item's key is
 * what its unit's answer segment prints. Both read units through this
 * module, so they cannot disagree about what a part is.
 */
import {
  descendants, firstElement, localName, normalizeText, normalizeWhitespace, parseXml, phraseCoverage, tokenSimilarity,
} from './openstax-source.mjs';
import { readNumeral } from '../../assets/js/lib/math/significant-figures.mjs';

/** Books that render only keyed exercises, by source-map book key. */
export const KEYED_ONLY_BOOKS = Object.freeze(['chemistry']);

/** The source `<section class>` that holds such a book's exercises. */
export const KEYED_EXERCISE_CLASS = 'exercises';

/** The shortest part that can stand for its exercise without the lead-in. */
const STANDALONE_WORDS = 4;
/** A part at least this long may be matched by its words instead of verbatim… */
const RESTATED_WORDS = 6;
/** …when the question prints this share of them. */
const RESTATED_FLOOR = 0.75;
/** The score of a part matched that way, times the share printed: always below a verbatim part's 1. */
const RESTATED_SCORE = 0.9;
/** How much of the lead-in an item's question must share with the exercise's. */
const LEAD_FLOOR = 0.25;
/** A whole (unlettered) exercise is matched at verify-source-keys' own floor. */
const WHOLE_FLOOR = 0.5;

const SUBSCRIPTS = /[₀-₉]+/g;
const SUPERSCRIPTS = /[⁰¹²³⁴-⁹]+/g;
/**
 * Text with the markup the source never prints removed and the spellings the
 * page and the source disagree on folded, then `normalizeText`ed: inline HTML
 * and TeX control words dropped, Markdown link targets dropped, and a run of
 * Unicode sub/superscript digits read as one number set off by spaces (the
 * page's `C₆H₁₂O₆` and the source's spaced `<sub>` tags both become
 * "c 6 h 12 o 6"). `verify-source-coverage` exports this as `plain`.
 */
export const plain = (value) => normalizeText(String(value ?? '')
  // A grouped number is one number however the comma is spelled: the page's
  // `8{,}119` and `27,340` and the source's `8119` and `27,340` all read
  // as their digits (the math lint requires the grouping the source omits).
  .replace(/(\d)\{,\}(?=\d{3}(?!\d))/g, '$1')
  .replace(/(\d),(?=\d{3}(?!\d))/g, '$1')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\\[a-zA-Z]+/g, ' ')
  .replace(/\]\([^)]*\)/g, ' ')
  .replace(SUBSCRIPTS, (run) => ` ${run.normalize('NFKC')} `)
  .replace(SUPERSCRIPTS, (run) => ` ${run.normalize('NFKC')} `));

const padded = (value) => ` ${value} `;

/**
 * The lettered parts of a stem or a solution, read IN SEQUENCE — "(a)", then
 * the next "(b)" after it, and so on — as `{ lead, parts: [{ label, text }] }`,
 * or null when there are fewer than two. A label counts only where the next
 * expected letter stands at the start of a word, so a state symbol — "(g)",
 * "(s)", "(l)" are letters in parentheses too — is never a part, and parts
 * run past (h).
 */
export function sequentialParts(stem) {
  const marks = [];
  let from = 0;
  for (let code = 97; code <= 122; code += 1) {
    const label = String.fromCharCode(code);
    const found = new RegExp(`(?:^|\\s)\\(${label}\\)\\s+`).exec(stem.slice(from));
    if (!found) break;
    marks.push({ label, start: from + found.index, end: from + found.index + found[0].length });
    from = from + found.index + found[0].length;
  }
  if (marks.length < 2) return null;
  return {
    lead: stem.slice(0, marks[0].start).trim(),
    parts: marks.map((mark, index) => ({
      label: mark.label,
      text: stem.slice(mark.end, index + 1 < marks.length ? marks[index + 1].start : stem.length).trim(),
    })),
  };
}

/** Prose of a node with lists, tables, and media left out, every element boundary a space. */
function stemText(node) {
  const parts = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') { parts.push(candidate); return; }
    if (['list', 'table', 'media', 'figure'].includes(localName(candidate))) return;
    for (const child of candidate.children || []) visit(child);
  };
  visit(node);
  return normalizeWhitespace(parts.join(' '));
}

/**
 * An answer node as text a numeral can be read out of: `<sup>` and MathML
 * `msup` exponents written `^{…}`, a MathML fraction as `(a)/(b)`, every
 * other element boundary a space. "2.957 × 10<sup>−2</sup> L" reads
 * "2.957 × 10^{−2} L".
 */
export function answerText(node) {
  const visit = (candidate) => {
    if (typeof candidate === 'string') return candidate;
    const name = localName(candidate);
    const inner = () => (candidate.children || []).map(visit).join(' ');
    if (name === 'title') return '';
    if (name === 'sup') return `^{${normalizeWhitespace(inner()).replace(/\s+/g, '')}}`;
    if (name === 'sub') return ` _${normalizeWhitespace(inner())} `;
    if (name === 'msup') {
      const [base, exponent] = (candidate.children || []).filter((child) => typeof child !== 'string');
      return `${base ? visit(base) : ''}^{${exponent ? normalizeWhitespace(visit(exponent)).replace(/\s+/g, '') : ''}}`;
    }
    if (name === 'mfrac') {
      const [top, bottom] = (candidate.children || []).filter((child) => typeof child !== 'string');
      return ` (${top ? visit(top) : ''})/(${bottom ? visit(bottom) : ''}) `;
    }
    return ` ${inner()} `;
  };
  return normalizeWhitespace(visit(node)).replace(/\s*\^\{/g, '^{');
}

// A sign is U+2212, an en dash (the source prints "–802 kJ"), or a hyphen —
// but only where no digit or letter stands before it, so the dash of a
// range ("68–71 cm") is never a minus.
// The first alternative is a power of ten with no coefficient — "× 10^{−2}",
// the factor an SI prefix stands for — read before the general numeral so its
// "10" is never taken for the number ten.
const NUMERAL_IN_TEXT = /(?<![\w.^{])(?:[×x]\s*)?10\s*\^\{\s*[−–-]?\d+\s*\}|(?<![\w.^{])[−–-]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?(?:\s*[×x]\s*10\s*\^\{\s*[−–-]?\d+\s*\})?|(?<![\w.^{])[−–-]?\.\d+/g;
// A unit's own exponent ("cm^{3}", "mol^{−1}") is not a number the answer
// states; only the exponent of a power of ten is read, with its coefficient.
const UNIT_EXPONENT = /(?<!(?:^|[\s×x(])10\s*)\^\{[^}]*\}/g;

/**
 * Every numeral an answer segment prints, each as significant-figures.mjs
 * reads it (exact value, and the figures the writing shows): plain decimals,
 * thousands-grouped whole numbers, and `a × 10^{n}`.
 */
export function printedNumerals(text) {
  const numerals = [];
  for (const match of String(text).replace(UNIT_EXPONENT, ' ').matchAll(NUMERAL_IN_TEXT)) {
    const written = match[0]
      .replace(/[−–]/g, '-')
      .replace(/,(?=\d{3})/g, '')
      .replace(/^[×x]\s*/, '')
      .replace(/\s*[×x]\s*10\s*\^\{\s*(-?\d+)\s*\}/, '\\times10^{$1}')
      .replace(/^10\s*\^\{\s*(-?\d+)\s*\}$/, '10^{$1}');
    const numeral = readNumeral(written);
    if (numeral && numeral.rest === '') numerals.push({ ...numeral, printed: match[0] });
  }
  return numerals;
}

/**
 * Each Check Your Learning of a module, whole: the question a worked
 * `<example>` ends with — the titled paragraph and any paragraph between it
 * and the `Answer:` note — as `{ id, cls, stem, keyed, answer }`, the id the
 * example's with `#check` appended.
 */
export function checkYourLearning(document) {
  const found = [];
  for (const example of descendants(document, (node) => localName(node) === 'example')) {
    const children = (example.children || []).filter((child) => typeof child !== 'string');
    const titleOf = (node) => normalizeWhitespace(stemText(firstElement(node, 'title') || { children: [] }));
    const at = children.findIndex((child) => localName(child) === 'para' && /^check your learning$/i.test(titleOf(child)));
    if (at === -1) continue;
    const answerAt = children.findIndex((child, index) => index > at && localName(child) === 'note' && /^answer:?$/i.test(titleOf(child)));
    const paragraphs = children.slice(at, answerAt === -1 ? at + 1 : answerAt).filter((child) => localName(child) === 'para');
    const stem = normalizeWhitespace(paragraphs.map((para) => stemText(para)).join(' ')).replace(/^check your learning\s*/i, '');
    if (!stem) continue;
    found.push({
      id: `${example.attributes.id || ''}#check`, cls: 'check-your-learning', stem,
      keyed: answerAt !== -1, answer: answerAt === -1 ? '' : answerText(children[answerAt]),
    });
  }
  return found;
}

/**
 * Every keyed-book unit of one module, in source order:
 *
 *   { id, group, cls, label, lead, partText, stem, keyed, answer }
 *
 * One unit per exercise, or per lettered part of one; one per Check Your
 * Learning (the question a worked `<example>` ends with, keyed by the
 * `Answer:` note after it), or per lettered part of one. `answer` is the
 * unit's own segment of the solution as `answerText`; `keyed` is false for an
 * exercise the source prints no solution for.
 */
export function keyedUnits(xml) {
  const document = typeof xml === 'string' ? parseXml(xml) : xml;
  const whole = [];
  for (const section of descendants(document, (node) => localName(node) === 'section'
    && (node.attributes.class || '') === KEYED_EXERCISE_CLASS)) {
    for (const exercise of descendants(section, (node) => localName(node) === 'exercise')) {
      const problem = firstElement(exercise, 'problem');
      if (!problem) continue;
      const solution = firstElement(exercise, 'solution');
      whole.push({
        id: exercise.attributes.id || '', cls: KEYED_EXERCISE_CLASS, stem: stemText(problem),
        keyed: Boolean(solution), answer: solution ? answerText(solution) : '',
      });
    }
  }
  whole.push(...checkYourLearning(document));
  const units = [];
  for (const unit of whole) {
    const lettered = sequentialParts(unit.stem);
    if (!lettered) {
      units.push({ ...unit, group: unit.id, label: null, lead: '', partText: null });
      continue;
    }
    const answers = sequentialParts(unit.answer);
    for (const part of lettered.parts) {
      const segment = answers?.parts.find((candidate) => candidate.label === part.label);
      units.push({
        ...unit,
        id: `${unit.id}(${part.label})`,
        group: unit.id,
        label: part.label,
        lead: lettered.lead,
        partText: part.text,
        stem: `${lettered.lead} ${part.text}`.trim(),
        // A lettered stem whose solution is not lettered answers every part
        // with the whole solution.
        answer: answers ? (segment ? segment.text.replace(/[;,]\s*$/, '') : '') : unit.answer,
      });
    }
  }
  return units;
}

/**
 * How well a page question reads as one unit: `{ score, words }`, score 1
 * for a lettered part whose own words the question prints (beside a lead-in
 * that reads like the exercise's, or long enough to stand alone), the token
 * similarity for an unlettered exercise, 0 otherwise. `words` orders equal
 * scores, longest part first: "iron" also stands inside the item for
 * "iron oxide" and must not take it.
 */
export function unitScore(unit, question) {
  if (unit.partText !== null && unit.partText !== undefined) {
    const part = plain(unit.partText);
    if (!part) return { score: 0, words: 0 };
    const words = part.split(' ').length;
    if (!padded(plain(question)).includes(padded(part))) {
      // A part the page had to restate — "the cube in part (a)" replaced by
      // that part's given data, a trailing "Explain." moved to the selfcheck
      // beside it — is still its part when the question prints most of a
      // long part's words. A short part ("iron", "9.000") is verbatim or
      // nothing: its siblings differ from it by one word.
      // Scored by the share printed, so that of two exercises with one
      // lead-in (1.4's two density-simulation exercises) the part the
      // question actually restates outranks its neighbour's.
      // …and only under its OWN lead-in: 1.4's two simulation exercises open
      // with the same sentence and then part ways, and a part of one must not
      // be read into an item that carries the other's lead-in.
      const underOwnLead = !unit.lead || phraseCoverage(unit.lead, question) >= RESTATED_FLOOR;
      const share = words >= RESTATED_WORDS && underOwnLead ? phraseCoverage(unit.partText, question) : 0;
      return share >= RESTATED_FLOOR ? { score: RESTATED_SCORE * share, words } : { score: 0, words: 0 };
    }
    const lead = unit.lead ? tokenSimilarity(unit.lead, question) : 1;
    return lead >= LEAD_FLOOR || words >= STANDALONE_WORDS ? { score: 1, words } : { score: 0, words: 0 };
  }
  const score = tokenSimilarity(question, unit.stem);
  return { score: score >= WHOLE_FLOOR ? score : 0, words: 0 };
}

/** The unit a page question transcribes, or null. */
export function unitFor(question, units) {
  let best = null;
  for (const unit of units) {
    const { score, words } = unitScore(unit, question);
    if (score === 0) continue;
    if (!best || score > best.score || (score === best.score && words > best.words)) best = { unit, score, words };
  }
  return best ? best.unit : null;
}
