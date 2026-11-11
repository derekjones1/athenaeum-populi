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
 * A question without its Markdown link targets: "Using the [periodic
 * table](/physical-sciences/…/a-the-periodic-table/), predict…" reads as the
 * source's "Using the periodic table, predict…". A link is not a word of the
 * stem (docs/subjects/chemistry.md, page skeleton rule 9), and its path is
 * six words no source stem prints — enough to take an unlettered exercise
 * carried one member at a time (2.6's six chlorides) under the floor.
 */
export const unlinked = (value) => String(value ?? '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');

/**
 * The word pairs a module's own glossary makes one: "covalent compound —
 * (also, molecular compound)" gives ["covalent", "molecular"], the shared
 * head noun dropped; "main-group element — (also, representative element)"
 * gives ["main group", "representative"]. Folded as `plain` folds. An answer
 * that says "molecular" to a stem that asks "ionic or covalent" (2.6) is
 * read through them.
 */
export function glossaryAliases(xml) {
  const pairs = [];
  for (const match of String(xml ?? '').matchAll(/<term>([^<]+)<\/term>\s*<meaning[^>]*>\s*\(also,?\s*([^)<]+)\)/g)) {
    const term = plain(match[1]).split(' ').filter(Boolean);
    for (const other of match[2].split(/\s+or\s+|,\s*/)) {
      const alias = plain(other).split(' ').filter(Boolean);
      if (!alias.length) continue;
      let shared = 0;
      while (shared < Math.min(term.length, alias.length) - 1
        && term[term.length - 1 - shared] === alias[alias.length - 1 - shared]) shared += 1;
      const a = term.slice(0, term.length - shared).join(' ');
      const b = alias.slice(0, alias.length - shared).join(' ');
      if (a && b && a !== b && !pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a))) pairs.push([a, b]);
    }
  }
  return pairs;
}

/**
 * A `<media>` element inside a stem, as `markedStemText` writes it: the
 * image's file stem between marks no source text contains.
 */
const MEDIA_MARK = /\s*⟦media:([^⟧]*)⟧\s*/g;
const withoutMarks = (text) => text.replace(MEDIA_MARK, ' ').replace(/\s+/g, ' ').trim();
const marksIn = (text) => [...text.matchAll(MEDIA_MARK)].map((match) => match[1]);

/**
 * The lettered parts of a stem or a solution, read IN SEQUENCE — "(a)", then
 * the next "(b)" after it, and so on — as
 * `{ lead, parts: [{ label, text, media }] }`, or null when there are fewer
 * than two. A label counts only where the next expected letter stands at the
 * start of a word, so a state symbol — "(g)", "(s)", "(l)" are letters in
 * parentheses too — is never a part, and parts run past (h). In an answer a
 * label may stand directly before a superscript ("(a)^{133} Cs^{+}", a
 * nuclide's mass number), which `answerText` writes without a space.
 *
 * A stem read by `markedStemText` carries a mark for each image. The marks
 * are taken out of every `text` and listed in the part's `media`, so a part
 * that is ONLY an image ("(a) [structure] (b) [structure]", Chemistry 2.4) is
 * a part with an empty text and one image — and the last of them, which has
 * nothing but its image after the label, is still found.
 */
export function sequentialParts(stem, { answer = false } = {}) {
  const marks = [];
  let from = 0;
  // A solution is typed more loosely than a stem: a label may follow a
  // semicolon with no space ("…is O₂;(d) F₂…", 8.4) and be followed by a
  // comma ("(c), [H₂] increases", 13.3). Read strictly, both exercises
  // lost every part after the slip and looked half-keyed.
  const before = answer ? '(?:^|[\\s;,])' : '(?:^|\\s)';
  // …and the last label may close the text, its answer being only an image.
  const after = answer ? '(?:[,:]?\\s+|$|(?=\\^\\{))' : '(?:\\s+|(?=\\^\\{))';
  for (let code = 97; code <= 122; code += 1) {
    const label = String.fromCharCode(code);
    const found = new RegExp(`${before}\\(${label}\\)${after}`).exec(stem.slice(from));
    if (!found) break;
    marks.push({ label, start: from + found.index, end: from + found.index + found[0].length });
    from = from + found.index + found[0].length;
  }
  if (marks.length < 2) return null;
  const parts = marks.map((mark, index) => {
    const raw = stem.slice(mark.end, index + 1 < marks.length ? marks[index + 1].start : stem.length);
    return { label: mark.label, text: withoutMarks(raw), media: marksIn(raw) };
  });
  // An answer that only LISTS labels — "(a), (b), (c), (d), and (e)", the
  // nuclei that lie in the band of stability (21.1) — answers the exercise
  // whole: its labels name parts, they do not head answers.
  // (Labels with nothing between them and no "and" or comma are parts whose
  // answers are images — "(a) (b) (c)" — and stay parts.)
  if (answer && /,|\band\b/.test(stem) && parts.every((part) => !part.media.length && !part.text.replace(/\band\b|[.,;]/g, '').trim())) return null;
  return { lead: withoutMarks(stem.slice(0, marks[0].start)), parts };
}

/**
 * A nuclide's prescripts: MathML `msubsup` on an EMPTY base, the atomic
 * number below and the mass number above, set before the element's symbol
 * (`<msubsup><mrow/><mn>11</mn><mn>23</mn></msubsup><mtext>Na</mtext>`).
 * Returns `{ atomic, mass }` as text, or null for any other `msubsup`.
 */
function prescripts(node, textOf) {
  if (localName(node) !== 'msubsup') return null;
  const [base, sub, sup] = (node.children || []).filter((child) => typeof child !== 'string');
  if (!base || !sub || !sup || normalizeWhitespace(textOf(base))) return null;
  return { atomic: normalizeWhitespace(textOf(sub)), mass: normalizeWhitespace(textOf(sup)) };
}

/**
 * Prose of a node with lists, tables, and media left out, every element
 * boundary a space. With `marked`, each `<media>` leaves a mark naming its
 * image's file stem (`sequentialParts` reads and removes them).
 */
function stemText(node, { marked = false } = {}) {
  const parts = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') { parts.push(candidate); return; }
    const name = localName(candidate);
    if (name === 'media' && marked) {
      const image = descendants(candidate, (child) => localName(child) === 'image')[0];
      const file = (image?.attributes?.src || '').split('/').pop().replace(/\.[a-z0-9]+$/i, '');
      if (file) parts.push(` ⟦media:${file}⟧ `);
      return;
    }
    if (['list', 'table', 'media', 'figure'].includes(name)) return;
    // A nuclide's prescripts read mass number first, as the page prints
    // them (`\ce{^{7}_{3}Li}`, ⁷₃Li): MathML lists the subscript first.
    const nuclide = prescripts(candidate, (child) => stemText(child));
    if (nuclide) { parts.push(` ${nuclide.mass} ${nuclide.atomic} `); return; }
    for (const child of candidate.children || []) visit(child);
  };
  visit(node);
  return normalizeWhitespace(parts.join(' '));
}

/** A stem with a mark where each image stands — the text `sequentialParts`
 * splits when a part may be only an image. Never shown and never matched:
 * `stemText` is the stem. */
export const markedStemText = (node) => stemText(node, { marked: true });

/**
 * An answer node as text a numeral can be read out of: `<sup>` and MathML
 * `msup` exponents written `^{…}`, a MathML fraction as `(a)/(b)`, every
 * other element boundary a space. "2.957 × 10<sup>−2</sup> L" reads
 * "2.957 × 10^{−2} L", and a nuclide's MathML prescripts read
 * "^{23}_{11} Na".
 */
export function answerText(node) {
  const visit = (candidate) => {
    if (typeof candidate === 'string') return candidate;
    const name = localName(candidate);
    const inner = () => (candidate.children || []).map(visit).join(' ');
    if (name === 'title') return '';
    if (name === 'sup') return `^{${normalizeWhitespace(inner()).replace(/\s+/g, '')}}`;
    if (name === 'sub') return ` _${normalizeWhitespace(inner())} `;
    // A nuclide's prescripts, in the grader's own writing: "^{23}_{11} Na".
    const nuclide = prescripts(candidate, visit);
    if (nuclide) return ` ^{${nuclide.mass.replace(/\s+/g, '')}}_{${nuclide.atomic.replace(/\s+/g, '')}} `;
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
    const read = (options) => normalizeWhitespace(paragraphs.map((para) => stemText(para, options)).join(' ')).replace(/^check your learning\s*/i, '');
    const stem = read();
    if (!stem) continue;
    found.push({
      id: `${example.attributes.id || ''}#check`, cls: 'check-your-learning', stem, marked: read({ marked: true }),
      keyed: answerAt !== -1, answer: answerAt === -1 ? '' : answerText(children[answerAt]),
      answerMarked: answerAt === -1 ? '' : markedStemText(children[answerAt]),
    });
  }
  return found;
}

/**
 * The parts an answer NAMES instead of answering one by one — "Only (b)",
 * "(a), (b), (c), (d), and (e)" — as their labels, or null. Such an answer
 * says yes to the parts it names and no to the rest (13.3: which additions
 * raise the ionization; 21.1: which nuclei lie in the band of stability).
 */
export function namedParts(answer) {
  const text = String(answer ?? '').trim().replace(/[.;]$/, '');
  if (!/^(?:only\s+)?\([a-z]\)(?:\s*,?\s*(?:and\s+)?\([a-z]\))*$/i.test(text)) return null;
  return [...text.matchAll(/\(([a-z])\)/gi)].map((match) => match[1].toLowerCase());
}

/**
 * An answer lettered by ROLE first and part second — "Oxidized: (a) Sn²⁺;
 * (b) Hg; (c) Al; reduced: (a) H₂O₂; (b) PbO₂; …" (17.1) — regrouped by
 * part: a Map from label to "Oxidized: Sn²⁺; reduced: H₂O₂; …", or null
 * when the answer is not that shape. Read in sequence, such an answer gives
 * part (c) everything after its first "(c)".
 */
export function roleFirstParts(answer) {
  const text = String(answer ?? '');
  const heads = [...text.matchAll(/(?:^|[;.]\s*)([A-Za-z][A-Za-z ]*(?:=\s*[A-Za-z ]+)?):\s*(?=\(a\)\s)/g)];
  if (heads.length < 2) return null;
  const byPart = new Map();
  heads.forEach((head, index) => {
    const body = text.slice(head.index + head[0].length, index + 1 < heads.length ? heads[index + 1].index : text.length);
    for (const part of sequentialParts(body, { answer: true })?.parts ?? []) {
      const value = part.text.replace(/[;,.]\s*$/, '').trim();
      byPart.set(part.label, [...(byPart.get(part.label) || []), `${head[1].trim()}: ${value}`]);
    }
  });
  return byPart.size ? new Map([...byPart].map(([label, roles]) => [label, roles.join('; ')])) : null;
}

/**
 * The text a keyed exercise's stem is SPLIT from. Usually its own stem, with
 * its images marked. But nine keyed exercises of Chemistry 2e ask about
 * "each reaction in [another exercise]" or "each cell in the previous
 * exercise" and answer part by part — "(a) 0.435 mol Na…; (b) …" — for parts
 * their own stem does not print: the parts are the OTHER exercise's (4.3,
 * 13.2, 17.1, 17.2, 17.7, 19.2), which is an even-numbered one the page
 * omits. For those the lettered parts are borrowed: this exercise's stem is
 * the lead-in, and each part is the referenced exercise's part, which is
 * what the page's item must restate for the question to be answerable.
 *
 * The reference is a `<link target-id>` to an exercise of the module, or the
 * words "the previous exercise" / "the previous problem".
 */
/** The exercise of the module an exercise's stem refers to — by `<link target-id>`, or as "the previous exercise" — or null. */
export function referencedExercise(exercise, document) {
  const problem = firstElement(exercise, 'problem');
  if (!problem) return null;
  const all = descendants(document, (node) => localName(node) === 'exercise');
  const linked = descendants(problem, (node) => localName(node) === 'link' && node.attributes['target-id'])
    .map((link) => all.find((candidate) => candidate.attributes.id === link.attributes['target-id'])).find(Boolean);
  const previous = /\bprevious (?:exercise|problem)\b/i.test(stemText(problem)) ? all[all.indexOf(exercise) - 1] : null;
  const referenced = linked || previous || null;
  return referenced && referenced !== exercise && firstElement(referenced, 'problem') ? referenced : null;
}

export function splittingStem(exercise, document) {
  const problem = firstElement(exercise, 'problem');
  const own = markedStemText(problem);
  const solution = firstElement(exercise, 'solution');
  if (sequentialParts(own) || !solution || !sequentialParts(answerText(solution), { answer: true })) return own;
  const referenced = referencedExercise(exercise, document);
  const theirs = referenced && firstElement(referenced, 'problem') ? sequentialParts(markedStemText(firstElement(referenced, 'problem'))) : null;
  if (!theirs) return own;
  return `${own} ${theirs.parts.map((part) => `(${part.label}) ${part.text} ${part.media.map((file) => `⟦media:${file}⟧`).join(' ')}`).join(' ')}`;
}

/**
 * Every keyed-book unit of one module, in source order:
 *
 *   { id, group, cls, label, lead, partText, media, stem, keyed, answer }
 *
 * One unit per exercise, or per lettered part of one; one per Check Your
 * Learning (the question a worked `<example>` ends with, keyed by the
 * `Answer:` note after it), or per lettered part of one. `answer` is the
 * unit's own segment of the solution as `answerText`; `keyed` is false for an
 * exercise the source prints no solution for. `media` lists the images a
 * lettered part's stem holds, by file stem; a part that is only an image has
 * an empty `partText` and is told from its siblings by it (`unitScore`).
 * `answerMedia` lists the images its answer holds. A stem that takes its
 * parts from another exercise is split by them (`splittingStem`).
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
      // A keyed exercise that sends the learner to another one ("Repeat
      // [Exercise 2.25] using an element that has three naturally occurring
      // isotopes"): the page restates the other exercise's text beside this
      // one's words, and `unitFor` reads that item as THIS exercise.
      const referenced = solution ? referencedExercise(exercise, document) : null;
      whole.push({
        id: exercise.attributes.id || '', cls: KEYED_EXERCISE_CLASS, stem: stemText(problem), marked: splittingStem(exercise, document),
        keyed: Boolean(solution), answer: solution ? answerText(solution) : '',
        answerMarked: solution ? markedStemText(solution) : '',
        ...(referenced ? { refersTo: referenced.attributes.id || '', refersStem: stemText(firstElement(referenced, 'problem')) } : {}),
      });
    }
  }
  whole.push(...checkYourLearning(document));
  const units = [];
  for (const { marked, answerMarked, ...unit } of whole) {
    const lettered = sequentialParts(marked ?? unit.stem);
    if (!lettered) {
      units.push({ ...unit, group: unit.id, label: null, lead: '', partText: null, answerMedia: marksIn(answerMarked ?? '') });
      continue;
    }
    const byRole = roleFirstParts(unit.answer);
    const named = byRole ? null : namedParts(unit.answer);
    const answers = byRole
      ? { parts: [...byRole].map(([label, text]) => ({ label, text })) }
      // "Only (b)" answers every part: yes to the parts it names, no to the others.
      : named ? { parts: lettered.parts.map(({ label }) => ({ label, text: `${named.includes(label) ? 'yes' : 'no'} — the source answers ${JSON.stringify(unit.answer.trim())}` })) }
        : sequentialParts(unit.answer, { answer: true });
    const drawn = sequentialParts(answerMarked ?? '', { answer: true });
    for (const part of lettered.parts) {
      const segment = answers?.parts.find((candidate) => candidate.label === part.label);
      units.push({
        ...unit,
        id: `${unit.id}(${part.label})`,
        group: unit.id,
        label: part.label,
        lead: lettered.lead,
        partText: part.text,
        media: part.media,
        stem: `${lettered.lead} ${part.text}`.trim(),
        // A lettered stem whose solution is not lettered answers every part
        // with the whole solution.
        answer: answers ? (segment ? segment.text.replace(/[;,]\s*$/, '') : '') : unit.answer,
        // False when the solution letters its parts and prints none for this
        // one (8.4 answers (a)–(c) of five parts): a part the source leaves
        // unkeyed inside a keyed exercise. `chemistry-shapes` flags it.
        answered: answers ? Boolean(segment) : true,
        // The images this part's answer holds, by file stem: a drawing
        // answer is confirmed by the page showing THAT image.
        answerMedia: drawn ? (drawn.parts.find((candidate) => candidate.label === part.label)?.media ?? []) : marksIn(answerMarked ?? ''),
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
 * "iron oxide" and must not take it. `item.figure` is the image the page
 * item is bound to (exercise-context.mjs `mediaBindings`), read only for a
 * part that is nothing but an image.
 */
/**
 * A stem with nothing but its characters: TeX control words, math
 * delimiters, script marks, and spaces gone, compatibility forms folded
 * (`As³⁺`, `\ce{As^3+}`, and the source's "As 3+" are all `as3+`), a minus
 * sign of any kind a hyphen. `plain` drops a charge's sign with the rest of
 * the punctuation; this keeps it, and tells As³⁺ from As³⁻.
 */
const tight = (value) => String(value ?? '').normalize('NFKC').replace(/\\[a-zA-Z]+/g, '')
  .replace(/[\s${}^_\\]/g, '').replace(/[−–]/g, '-').toLowerCase();

/** How many times a space-padded phrase stands in a space-padded text; two in a row share the space between them. */
const occurrences = (needle, haystack) => {
  let count = 0;
  for (let at = haystack.indexOf(needle); at !== -1; at = haystack.indexOf(needle, at + needle.length - 1)) count += 1;
  return count;
};

export function unitScore(unit, linkedQuestion, item = {}) {
  const question = unlinked(linkedQuestion);
  const reading = ownScore(unit, question, item);
  if (!unit.refersTo) return reading;
  // A unit whose stem refers to another exercise. Its item restates that
  // exercise's text beside the unit's own words — the only place the learner
  // meets what is to be repeated — so the item is long where the stem is
  // short, and reads more like the exercise it quotes than like its own.
  // Where the question prints the unit's own words, the unit is read against
  // its stem AND the text it refers to, and the reading says which exercise
  // it quotes (`unitFor` then sets that exercise aside).
  const own = phraseCoverage(unit.lead || unit.stem, question) >= RESTATED_FLOOR;
  if (!own) return reading;
  if (reading.score > 0) return { ...reading, refers: unit.refersTo };
  if (unit.partText !== null && unit.partText !== undefined) return reading;
  const score = tokenSimilarity(question, `${unit.stem} ${unit.refersStem}`);
  return score >= WHOLE_FLOOR ? { score, words: 0, near: score, exact: 0, refers: unit.refersTo } : reading;
}

function ownScore(unit, question, item = {}) {
  // How much the question reads like THIS unit's whole stem, and whether it
  // prints the part character for character: what ranks two units that both
  // pass (`unitFor`). Sibling parts and twin exercises share most words.
  const near = tokenSimilarity(question, unit.stem);
  if (unit.partText !== null && unit.partText !== undefined) {
    const part = plain(unit.partText);
    // The length of the part printed character for character, so that of
    // "NO 2" and "NO 2 −" under one lead-in the longer one the question
    // prints is its part.
    const exact = part && tight(question).includes(tight(unit.partText)) ? tight(unit.partText).length : 0;
    if (!part) {
      // A part that is only an image: every sibling's item prints the same
      // words, so the part is the one whose image the item is bound to
      // ("the figure above" under that image's mediafigure), beside a
      // lead-in that reads like the exercise's.
      const bound = Boolean(item.figure) && (unit.media || []).includes(item.figure);
      const lead = unit.lead ? tokenSimilarity(unit.lead, question) : 1;
      return bound && lead >= LEAD_FLOOR ? { score: 1, words: 0, near, exact: 0 } : { score: 0, words: 0 };
    }
    const words = part.split(' ').length;
    const asked = padded(plain(question));
    // A part whose words the lead-in itself prints ("mm Hg" under a lead
    // that gives a pressure in mm Hg; the element In under any lead with
    // the word "in") is printed by every sibling's item. It is this part's
    // item only when it prints them once more than the lead does.
    const inLead = unit.lead ? occurrences(padded(part), padded(plain(unit.lead))) : 0;
    const printed = occurrences(padded(part), asked) > inLead;
    if (!printed) {
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
      return share >= RESTATED_FLOOR ? { score: RESTATED_SCORE * share, words, near, exact } : { score: 0, words: 0 };
    }
    const lead = unit.lead ? tokenSimilarity(unit.lead, question) : 1;
    return lead >= LEAD_FLOOR || words >= STANDALONE_WORDS ? { score: 1, words, near, exact } : { score: 0, words: 0 };
  }
  const score = tokenSimilarity(question, unit.stem);
  return { score: score >= WHOLE_FLOOR ? score : 0, words: 0, near, exact: 0 };
}

/**
 * The order of two passing readings of ONE exercise's parts, best first:
 * the stronger score (a part printed verbatim over one restated); then the
 * unit whose whole stem the question reads most like; then the longer part
 * printed character for character (a charge's sign included); then the
 * longer part in words.
 */
export const compareReadings = (a, b) => b.score - a.score || (b.near ?? 0) - (a.near ?? 0)
  || (b.exact ?? 0) - (a.exact ?? 0) || b.words - a.words;

/** One number that orders readings as `compareReadings` does, for a sort that has only a `tie`. */
export const readingRank = ({ near = 0, exact = 0, words = 0 }) => Math.round(near * 1000) * 1e6 + Math.min(exact, 999) * 1000 + Math.min(words, 999);

/**
 * The unit a page question transcribes, or null (`item` as in `unitScore`).
 *
 * Chosen in two steps, because two different things are being told apart.
 * FIRST the exercise: of every exercise with a passing unit, the one whose
 * stem the question reads most like, whole. Twin exercises put one part
 * ("Br", "0.710 kg of sodium carbonate…") under two lead-ins, and a short or
 * generic part of another exercise ("volume", "What is the rate constant?")
 * is printed by many questions verbatim — a score of 1 that says nothing
 * about which exercise is asked. THEN the part within it (`compareReadings`):
 * siblings share the lead-in, so there the part's own evidence decides.
 * Chapter 1 never needed the first step; the whole-book probe
 * (tools/source/chemistry-gate-probe.mjs) found about a hundred keyed parts
 * from chapter 2 on that were read as another exercise without it.
 */
export function unitFor(question, units, item = {}) {
  const groups = new Map();
  for (const unit of units) {
    const reading = unitScore(unit, question, item);
    if (reading.score === 0) continue;
    const group = groups.get(unit.group) || { near: -1, score: 0, keyed: false, readings: [] };
    group.keyed = group.keyed || Boolean(unit.keyed);
    group.near = Math.max(group.near, reading.near ?? 0);
    group.score = Math.max(group.score, reading.score);
    group.readings.push({ unit, ...reading });
    groups.set(unit.group, group);
  }
  // An item that prints a referring exercise's own words and the text of the
  // exercise it refers to ("Repeat the following exercise using an element
  // that has three naturally occurring isotopes: Open the … simulator …") is
  // the referring exercise's, however much of it is the other's text. Only
  // an UNKEYED exercise is set aside this way — the one the page omits and
  // must therefore quote; two keyed exercises that refer to each other are
  // told apart as any two are.
  for (const group of [...groups.values()]) {
    for (const reading of group.readings) {
      if (reading.refers && groups.has(reading.refers) && !groups.get(reading.refers).keyed) groups.delete(reading.refers);
    }
  }
  let best = null;
  for (const group of groups.values()) {
    // Two exercises the question reads equally like: the stronger part,
    // then the KEYED one — a page renders no unkeyed exercise, so a stem
    // that is word for word a keyed exercise's and its unkeyed twin's
    // (9.2: the two differ only in the figure they point at) is the keyed one.
    const better = group.near - best?.near || group.score - best?.score || Number(group.keyed) - Number(best?.keyed);
    if (!best || better > 0) best = group;
  }
  return best ? best.readings.sort(compareReadings)[0].unit : null;
}
