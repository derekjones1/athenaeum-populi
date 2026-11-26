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
import { chemCanon } from '../../assets/js/lib/text/check-chem.mjs';

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
  .replace(SUPERSCRIPTS, (run) => ` ${run.normalize('NFKC')} `)
  // Chapter 4's formulas and equations, which the source's MathML sets one
  // identifier at a time and the page prints in the book's Unicode print:
  //   an underline under a symbol is a lone "_" (MathML munder; the page's
  //   <u>N</u> is gone with the tags above);
  .replace(/\s+/g, ' ').replace(/ _ /g, ' ')
  //   the aqueous state is one word, not "( a q )";
  .replace(/\(\s*a\s+q\s*\)/g, '(aq)')
  //   a two-letter symbol is one word before a state symbol ("H g ( l )");
  .replace(/(?<![A-Za-z])([A-Z]) ([a-z]) (?=\(\s*(?:s|l|g|aq)\s*\))/g, '$1$2 ')
  //   a run of symbols before a subscript or a parenthesis is one formula
  //   ("Pb ( N O 3 )", "Ca F 2", "K N O 3" with the N underlined);
  .replace(/(?<![A-Za-z])[A-Z][a-z]?(?: [A-Z][a-z]?)+(?= \d| \()/g, (run) => run.replace(/ /g, ''))
  //   and a coefficient is its own number ("2HNO₃" is the source's "2 HNO 3").
  .replace(/(?<![\w.,])(\d+)(?=[A-Z[(])/g, '$1 ')
  //   A subshell is its shell number and its letter (chapter 6): the page's
  //   "1s²2s²" and "3d orbitals" are the source's "1 <em>s</em><sup>2</sup>"
  //   and "3 <em>d</em> orbitals".
  .replace(/(?<![\w.,])([1-7])([spdf])(?![A-Za-z])/g, '$1 $2'));

const padded = (value) => ` ${value} `;

/**
 * A question without its Markdown link targets: "Using the [periodic
 * table](/physical-sciences/…/a-the-periodic-table/), predict…" reads as the
 * source's "Using the periodic table, predict…". A link is not a word of the
 * stem (docs/subjects/chemistry.md, page skeleton rule 9), and its path is
 * six words no source stem prints — enough to take an unlettered exercise
 * carried one member at a time (2.6's six chlorides) under the floor.
 */
export const unlinked = (value) => cePrinted(String(value ?? '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1'));

const SUB_DIGITS = '₀₁₂₃₄₅₆₇₈₉';
const SUP_CHARS = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '+': '⁺', '-': '⁻', '−': '⁻' };
const asSub = (digits) => [...digits].map((digit) => SUB_DIGITS[digit] ?? digit).join('');
const asSup = (text) => [...text].map((char) => SUP_CHARS[char] ?? char).join('');

/**
 * One mhchem formula or reaction as the book prints it in Unicode:
 * `Na2S(aq) + 2HCl(aq) ->` is "Na₂S(aq) + 2HCl(aq) ⟶", `SO4^2-` "SO₄²⁻",
 * `CuSO4*5H2O` (or `.`) "CuSO₄·5H₂O", `^{7}_{3}Li` "⁷₃Li".
 */
export function ceAsPrint(ce) {
  return String(ce)
    .replace(/<=>/g, '⇌').replace(/->/g, '⟶')
    .replace(/\^\{([^}]*)\}|\^([0-9]*[+\-−]|[0-9]+)/g, (match, braced, bare) => asSup(braced ?? bare))
    .replace(/_\{([0-9]+)\}|_([0-9]+)/g, (match, braced, bare) => asSub(braced ?? bare))
    // A sign set directly after a symbol, a digit, or a parenthesis is a charge ("Cl-(aq)", "Na+").
    .replace(/(?<=[A-Za-z0-9)\]₀-₉])([+\-])(?=[\s(}]|$)/g, (sign) => asSup(sign))
    // A digit after a symbol or a closing bracket is a subscript; a coefficient stands first.
    .replace(/(?<=[A-Za-z)\]₀-₉])([0-9]+)/g, (digits) => asSub(digits))
    .replace(/(?<=[A-Za-z0-9)₀-₉])\s*[*.]\s*(?=[0-9]*[A-Z(])/g, '·');
}

/**
 * Text with every `\ce{…}` set in the book's Unicode print, its `$` and the
 * space between two spans of one reaction split after its arrow
 * (`$\ce{Na2S(aq) + 2HCl(aq) ->}$ $\ce{2NaCl(aq) + H2S(g)}$`, the chapter-4
 * ruling for fill-in and multiple-choice stems) read as one reaction: the
 * source gates read a reaction printed that way exactly as the same reaction
 * typed in Unicode.
 */
export function cePrinted(text) {
  return String(text).replace(/\$?\\ce\{((?:[^{}]|\{[^{}]*\})*)\}\$?/g, (match, ce) => ceAsPrint(ce));
}

/**
 * Text with its TeX math read as the words and symbols it prints: `\ce{…}`
 * in the book's Unicode print, `\text{f}` as "f", `\Delta` as Δ, `^\circ`
 * as °, and the layout a display sets — `\begin{array}{ll}`, `&`, `\\[4pt]`,
 * `\hline`, `\begin{aligned}` — dropped. A selfcheck whose model answer is a
 * source's derivation set as display math (7.5's Hess's-law cycle for the
 * H–Cl bond energy) was read as "begin array ll ce delta circ hline", none of
 * which the source prints, and diverged at 28%.
 */
export function texAsText(text) {
  return String(text ?? '').replace(/\$\$([\s\S]*?)\$\$|\$([^$]*)\$/g, (match, display, inline) => ` ${cePrinted(display ?? inline)
    .replace(/\\(?:begin|end)\{[^}]*\}(?:\{[lcr|\s]*\})?/g, ' ')
    .replace(/\\\\(?:\[[^\]]*\])?/g, ' ')
    .replace(/\\(?:hline|quad|qquad|left|right|,|;|!|\s)/g, ' ')
    .replace(/&/g, ' ')
    .replace(/\\(?:text|mathrm|textrm|mathit|operatorname|cancel)\s*\{([^{}]*)\}/g, ' $1 ')
    .replace(/\^\s*\{?\\circ\}?|\\circ/g, '°')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\(?:cdot|times)/g, '×')
    .replace(/\\[A-Za-z]+/g, ' ')
    .replace(/[{}^_]/g, ' ')} `);
}

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
 * The second names a module's own text gives a word in parentheses, "a
 * cation (a positive ion)", "an anion (a negative ion)" (7.1), as alias
 * pairs `glossaryAliases` gives: [word, name], and the word's regular plural
 * beside the name ("anions" → "negative ion"), since an answer sorts its
 * members in the plural ("P, I, Cl, and O would form anions"). Folded as
 * `plain` folds; one word before the parenthesis, two to four inside it,
 * each with its article.
 */
export function printedGlosses(xml) {
  const pairs = [];
  const text = String(xml ?? '').replace(/<[^>]+>/g, ' ');
  for (const match of text.matchAll(/\b(?:[Aa]n?|[Tt]he)\s+([a-z]{3,})\s+\((?:an?|the)\s+([a-z]+(?:\s+[a-z]+){1,3})\)/g)) {
    const [word, name] = [plain(match[1]), plain(match[2])];
    for (const pair of [[word, name], [`${word}s`, name]]) {
      if (!pairs.some(([a, b]) => a === pair[0] && b === pair[1])) pairs.push(pair);
    }
  }
  return pairs;
}

/** Every alias pair a module gives: its glossary's "(also, …)" and its text's "a cation (a positive ion)". */
export const moduleAliases = (xml) => [...glossaryAliases(xml), ...printedGlosses(xml)];

/**
 * The abbreviations a module prints for a name, in parentheses after it —
 * "the first ionization energy (IE<sub>1</sub>)" (6.5) — as `[name,
 * abbreviation]`, both as printed (the abbreviation's subscript run into
 * it: "IE1"). An abbreviation is one capital, then capitals or small
 * letters, and a subscript number; the name the run of words before the
 * parenthesis whose initials it holds, read back to the first word whose
 * initial is the abbreviation's first letter.
 */
export function printedAbbreviations(xml) {
  const pairs = [];
  const text = String(xml ?? '').replace(/<sub>(\d+)<\/sub>/g, '$1');
  for (const match of text.matchAll(/((?:[A-Za-z]+\s+){0,5}[A-Za-z]+)\s+\(([A-Z][A-Za-z]{0,4}\d*)\)/g)) {
    const words = match[1].split(/\s+/);
    const abbreviation = match[2];
    const initials = abbreviation.replace(/\d+$/, '').toLowerCase();
    // The words whose initials spell the letters of the abbreviation, in order.
    for (let from = words.length - 1; from >= 0; from -= 1) {
      const name = words.slice(from);
      const spelled = name.map((word) => word[0].toLowerCase()).join('');
      if (spelled === initials || (initials.length < name.length && name[0][0].toLowerCase() === initials[0] && initials.split('').every((letter) => spelled.includes(letter)))) {
        // A numbered abbreviation names its ordinal too: IE₁ is the FIRST ionization energy.
        const ordinal = /\d$/.test(abbreviation) && /^(?:first|second|third|fourth|fifth|sixth|seventh)$/i.test(words[from - 1] ?? '');
        const pair = [(ordinal ? [words[from - 1], ...name] : name).join(' ').toLowerCase(), abbreviation];
        if (!pairs.some(([a, b]) => a === pair[0] && b === pair[1])) pairs.push(pair);
        break;
      }
    }
  }
  return pairs;
}

/**
 * A `<media>` element inside a stem, as `markedStemText` writes it: the
 * image's file stem between marks no source text contains.
 */
const MEDIA_MARK = /\s*⟦media:([^⟧]*)⟧\s*/g;
/**
 * Where a marked stem's CLOSING begins: the paragraphs after its last
 * lettered paragraph that carry no label of their own — "(c) the Boyle’s law
 * equation" then "Comment on the likely accuracy of each method." (9.2's
 * Check Your Learning). The closing asks something of every part, or of the
 * parts together; it is no words of the last part (`markedParagraphs`).
 */
const CLOSING_MARK = '⟦closing⟧';
const withoutMarks = (text) => text.replace(MEDIA_MARK, ' ').split(CLOSING_MARK).join(' ').replace(/\s+/g, ' ').trim();
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
export function sequentialParts(whole, { answer = false } = {}) {
  // A closing marked after the last lettered paragraph (`CLOSING_MARK`) is
  // read apart: no label is looked for in it, and it is no part's text.
  const [stem, ...closed] = String(whole ?? '').split(CLOSING_MARK);
  const closing = closed.length ? withoutMarks(closed.join(' ')) : '';
  const marks = [];
  let from = 0;
  // A solution is typed more loosely than a stem: a label may follow a
  // semicolon with no space ("…is O₂;(d) F₂…", 8.4) and be followed by a
  // comma ("(c), [H₂] increases", 13.3). Read strictly, both exercises
  // lost every part after the slip and looked half-keyed.
  const before = answer ? '(?:^|[\\s;,])' : '(?:^|\\s)';
  // …and the last label may close the text, its answer being only an image.
  // A stray period after a label is read as a comma is: "… 3 d^{6} . (e).
  // Sm: 1 s^{2} …" (6.4's ions, erratum 3120) left part (e) unanswered and
  // its answer inside (d)'s.
  const after = answer ? '(?:[,:.]?\\s+|$|(?=\\^\\{))' : '(?:\\s+|(?=\\^\\{))';
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
  const lead = withoutMarks(stem.slice(0, marks[0].start));
  // A stem whose parts finish its lead-in's sentence as a list — "…a shell
  // with (a) n = 2, (b) n = 5, and (c) n as a variable. Note you are only
  // looking at the orbitals with the specified n value, not those at lower
  // energies." (6.3) — ends that sentence in its last part; a sentence after
  // it belongs to the whole question, and every part shares it (`shared`).
  // Each part is the list item, without the comma and "and" that join it.
  if (!answer && !closing && lead && !/[.?!:]$/.test(lead) && parts.slice(0, -1).every((part) => /,(?:\s+(?:and|or))?$/.test(part.text))) {
    const last = parts.at(-1);
    const end = /^(.*?[.?!])\s+(?=[A-Z])/.exec(last.text);
    if (end) {
      for (const part of parts.slice(0, -1)) part.text = part.text.replace(/,(?:\s+(?:and|or))?$/, '');
      const shared = last.text.slice(end[0].length).trim();
      last.text = end[1];
      return { lead, parts, closing: shared, shared: true };
    }
  }
  return { lead, parts, ...(closing ? { closing } : {}) };
}

/**
 * Paragraphs (and display equations) as one marked stem, a `CLOSING_MARK`
 * before the paragraphs that follow the last LETTERED one — a paragraph that
 * opens "(a) ", "(b) ", … — when at least two are lettered and something
 * follows the last. Without lettered paragraphs, the stem as
 * `markedStemText` reads it.
 */
export function markedParagraphs(nodes) {
  const texts = nodes.map((node) => markedStemText(node));
  const lettered = texts.map((text, index) => (/^\([a-z]\)\s/.test(text) ? index : -1)).filter((index) => index !== -1);
  const last = lettered.at(-1);
  if (lettered.length < 2 || last === texts.length - 1 || !texts.slice(last + 1).some((text) => withoutMarks(text))) {
    return normalizeWhitespace(texts.join(' '));
  }
  return normalizeWhitespace(`${texts.slice(0, last + 1).join(' ')} ${CLOSING_MARK} ${texts.slice(last + 1).join(' ')}`);
}

/** A problem's stem marked as `markedParagraphs` marks it: its child elements, each read whole. */
const markedProblem = (problem) => markedParagraphs((problem.children || []).filter((child) => typeof child !== 'string'));

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

/*
 * One part answered in two units (Chemistry 2e 5.1: "(a) 47.6 J/°C; 11.38
 * cal °C⁻¹", "1310 J; 313 cal"). The page carries one fill-in per unit, each
 * closing with a sentence that names its unit ("Enter the heat capacity in
 * J/°C.", "Enter the heat in calories."), and both source gates read the
 * unit word: the keys gate holds each item to the number printed under the
 * unit its closing names, the coverage gate requires an item per unit.
 *
 * A unit is read by its leading energy unit — what tells the two numbers of
 * such an answer apart — J, kJ, cal, kcal, and the food Calorie (capital C),
 * by symbol or name.
 */
const UNIT_FAMILIES = [
  ['kJ', /^(?:kJ\b|kilojoules?\b)/i],
  ['kcal', /^(?:kcal\b|kilocalories?\b)/i],
  ['J', /^(?:J\b|joules?\b)/i],
  ['Cal', /^Cal(?:ories?)?\b/],
  ['cal', /^(?:cal\b|calories?\b)/i],
];
/** The energy unit a text opens with ("J/°C", "calories per degree"), or null. */
export function unitFamily(text) {
  const opening = String(text ?? '').trim();
  const found = UNIT_FAMILIES.find(([, pattern]) => pattern.test(opening));
  return found ? found[0] : null;
}

/** Each number of an answer with the energy unit printed after it: [{ numeral, unit }]. */
export function answerUnits(answer) {
  const out = [];
  for (const piece of String(answer ?? '').split(/[;,]|\s(?:or|and)\s/)) {
    const [numeral] = printedNumerals(piece);
    if (!numeral) continue;
    const unit = unitFamily(piece.slice(piece.indexOf(numeral.printed) + numeral.printed.length));
    if (unit) out.push({ numeral, unit });
  }
  return out;
}

/**
 * The units of a part the source asks in two units and answers in both
 * ("How much heat, in joules and in calories, …?" → "1310 J; 313 cal"), else
 * []. The stem must name both: "41,360 J/mol or 41.4 kJ/mol" (10.3) is one
 * value written twice under a stem that asks it once, and either number is
 * the key.
 */
export function twoUnitAnswer(answer, stem) {
  const asked = new Set([...String(stem ?? '').matchAll(/\bin\s+(?:the\s+)?(\S+)/gi)].map((match) => unitFamily(match[1])).filter(Boolean));
  const units = [...new Set(answerUnits(answer).map((entry) => entry.unit))].filter((unit) => asked.has(unit));
  return units.length >= 2 ? units : [];
}

/** The energy unit an item's closing sentence names ("Enter the heat in calories."), or null. */
export function closingUnit(question) {
  const closing = String(question ?? '').trim().split(/(?<=[.?!][)”’"]?)\s+/).pop();
  // Only an added "Enter … in <unit>." sentence: the source's own question
  // names both units ("How much heat, in joules and in calories, …?").
  const named = /^Enter\b.*\bin\s+(\S.*?)\.?$/.exec(closing);
  return named ? unitFamily(named[1]) : null;
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
    // An example may end with more than one Check Your Learning, each with
    // its own Answer note (5.2's fs-idp13199280: the copper's initial
    // temperature, then the final temperature). The first keeps the id
    // `<example id>#check` every page and ledger already cites; the second is
    // `#check2`, the third `#check3`.
    const starts = children.map((child, index) => (localName(child) === 'para' && /^check your learning$/i.test(titleOf(child)) ? index : -1)).filter((index) => index !== -1);
    starts.forEach((at, ordinal) => {
      const next = starts[ordinal + 1] ?? children.length;
      const answerAt = children.findIndex((child, index) => index > at && index < next && localName(child) === 'note' && /^answer:?$/i.test(titleOf(child)));
      // Its paragraphs and the display equations between them: a Hess's-law
      // Check Your Learning prints its reactions as <equation>s (5.3's
      // "Calculate ΔH for the process: [equation] from the following
      // information: [two equations]"), and without them the stem is eight
      // words that read like any exercise that prints one of those reactions.
      const paragraphs = children.slice(at, answerAt === -1 ? at + 1 : answerAt).filter((child) => localName(child) === 'para' || localName(child) === 'equation');
      const read = (options) => normalizeWhitespace(paragraphs.map((para) => stemText(para, options)).join(' ')).replace(/^check your learning\s*/i, '');
      const stem = read();
      if (!stem) return;
      // Marked by paragraph, so a closing after the last lettered paragraph
      // is told from that part (`markedParagraphs`).
      const marked = markedParagraphs(paragraphs).replace(/^check your learning\s*/i, '');
      // The example whose Check Your Learning this one leans on ("the sweetened
      // tea described in [Example 3.14]", 3.3): the page restates that one's
      // given data (`unitFor`; the gate probe builds the item so).
      const links = paragraphs.flatMap((para) => descendants(para, (node) => localName(node) === 'link' && node.attributes['target-id']));
      const leansLink = links.find((link) => link.attributes['target-id'] !== example.attributes.id
        && descendants(document, (node) => localName(node) === 'example' && node.attributes.id === link.attributes['target-id']).length);
      const leans = leansLink?.attributes['target-id'];
      found.push({
        ...(leans ? { leansOn: leanTarget(document, paragraphs, leansLink, leans) } : {}),
        id: `${example.attributes.id || ''}#check${ordinal ? ordinal + 1 : ''}`, cls: 'check-your-learning', stem, marked,
        keyed: answerAt !== -1, answer: answerAt === -1 ? '' : answerText(children[answerAt]),
        answerMarked: answerAt === -1 ? '' : markedStemText(children[answerAt]),
      });
    });
  }
  return found;
}

/**
 * What a Check Your Learning that links another example leans on: that
 * example's own Check Your Learning (`<id>#check`) where the thing it names
 * is there — "the sweetened tea described in [Example 3.14]" (3.3), whose
 * tea is that example's Check Your Learning — or the example itself (`<id>`,
 * no keyed unit) where the thing is in the example's question and not its
 * Check Your Learning: "the antifreeze described in [Example 11.1]" (11.4,
 * fs-idp5504000#check) is the worked example's antifreeze, and the ammonia
 * solution of that example's Check Your Learning restated before it made
 * the gate probe read the item as the ammonia one. The thing is the last
 * word before the link, "described in" / "from" / "in" dropped; a link
 * this cannot read keeps the `#check` reading.
 */
function leanTarget(document, paragraphs, link, target) {
  const para = paragraphs.find((candidate) => (candidate.children || []).includes(link));
  const before = para ? normalizeWhitespace(stemText({ children: para.children.slice(0, para.children.indexOf(link)) })) : '';
  const thing = /([a-z][a-z-]+)\s+(?:described\s+)?(?:in|from|of)\s*$/i.exec(before)?.[1]?.toLowerCase();
  const [targetExample] = descendants(document, (node) => localName(node) === 'example' && node.attributes.id === target);
  if (!thing || !targetExample) return `${target}#check`;
  const children = (targetExample.children || []).filter((child) => typeof child !== 'string');
  const checkAt = children.findIndex((child) => localName(child) === 'para'
    && /^check your learning$/i.test(normalizeWhitespace(stemText(firstElement(child, 'title') || { children: [] }))));
  const words = (nodes) => new Set(normalizeWhitespace(nodes.map((node) => stemText(node)).join(' ')).toLowerCase().split(/[^a-z-]+/));
  if (checkAt !== -1 && words(children.slice(checkAt)).has(thing)) return `${target}#check`;
  return words(children.slice(0, checkAt === -1 ? children.length : checkAt)).has(thing) ? target : `${target}#check`;
}

/**
 * Each worked example of a module, whole: the question it asks — every
 * paragraph and equation before its titled `Solution` paragraph, the
 * example's own title dropped — and the Solution, up to the Check Your
 * Learning it ends with, as `answerText`. A Knowledge Check of a keyed-only
 * book re-asks the question and keys what the Solution prints
 * (docs/knowledge-check-playbook-chemistry.md, "Where the items come from").
 * Returns `{ id, cls, title, stem, marked, keyed, answer, leansOn, figures }`:
 * `leansOn` is the other example its question links ("the soft drink from
 * [Example 3.14]"), `figures` how many images the question holds.
 */
export function workedExamples(xml) {
  const document = typeof xml === 'string' ? parseXml(xml) : xml;
  const found = [];
  for (const example of descendants(document, (node) => localName(node) === 'example')) {
    const children = (example.children || []).filter((child) => typeof child !== 'string');
    const titleOf = (node) => normalizeWhitespace(stemText(firstElement(node, 'title') || { children: [] }));
    const solutionAt = children.findIndex((child) => localName(child) === 'para' && /^solution\b/i.test(titleOf(child)));
    if (solutionAt < 1) continue;
    const checkAt = children.findIndex((child, index) => index > solutionAt && localName(child) === 'para' && /^check your learning$/i.test(titleOf(child)));
    const asked = children.slice(0, solutionAt);
    const worked = children.slice(solutionAt, checkAt === -1 ? children.length : checkAt);
    const title = titleOf(asked[0]);
    const read = (options) => {
      const text = normalizeWhitespace(asked.map((child) => stemText(child, options)).join(' '));
      return title && text.startsWith(title) ? text.slice(title.length).trim() : text;
    };
    const stem = read();
    if (!stem) continue;
    const leans = asked.flatMap((child) => descendants(child, (node) => localName(node) === 'link' && node.attributes['target-id']))
      .map((link) => link.attributes['target-id']).find((target) => target !== example.attributes.id
        && descendants(document, (node) => localName(node) === 'example' && node.attributes.id === target).length);
    const marked = read({ marked: true });
    // The question as `answerText` writes it: a subscript is ` _2 ` and an
    // exponent `^{−9}`, so the numbers it GIVES can be told from the digits
    // of a formula ("the bond order for O 2" gives no 2, 8.4) and a power of
    // ten is one number, not a 10 and a −9 (6.1).
    const stemPrint = normalizeWhitespace(asked.map((child) => answerText(child)).join(' '));
    found.push({
      ...(leans ? { leansOn: leans } : {}),
      id: example.attributes.id || '', cls: 'worked-example', title, stem, marked, stemPrint,
      keyed: true, answer: normalizeWhitespace(worked.map((child) => answerText(child)).join(' ')),
      answerMarked: normalizeWhitespace(worked.map((child) => markedStemText(child)).join(' ')),
      figures: marksIn(marked).length + asked.filter((child) => localName(child) === 'figure').length,
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
  // Labels with nothing between them — no comma, no "and", no "only" — head
  // answers that are images ("(a) [diagram] (b) [diagram]", 6.4's orbital
  // diagrams, read without their images): parts, not a list of names.
  if (/\)\s*\(/.test(text) && !/,|\band\b|^only\b/i.test(text)) return null;
  return [...text.matchAll(/\(([a-z])\)/gi)].map((match) => match[1].toLowerCase());
}

/** A part or an answer as the words that name a sample: its parenthetical
 * asides ("(18.02 g/mol)") and its articles and "of" dropped, space-padded. */
const sampleWords = (text) => padded(plain(String(text ?? '').replace(/\([^)]*\)/g, ' '))
  .split(' ').filter((word) => word && !['of', 'the', 'a', 'an'].includes(word)).join(' '));

/**
 * A lettered exercise answered by NAMING ONE of its parts — "Which of the
 * following represents the least number of molecules? (a) 20.0 g of H₂O
 * (18.02 g/mol) (b) 77.0 g of CH₄ … (e) …", answered "20.0 g H₂O represents
 * the least number of molecules since…" (3.1). Its parts are not questions:
 * they are the closed set the stem asks the learner to choose from, and the
 * page carries the exercise as ONE multiple choice whose options are the
 * parts (docs/subjects/chemistry.md "Exercises", the row "one of a closed set
 * the stem or its figure names"). Returns `{ lead, choices: [{ label, text }],
 * chosen }`, or null: the lead-in must ask "which of the following", the
 * answer must letter nothing and list no labels ("Only (b)" is one yes/no per
 * part), and it must name exactly one part by that part's own words.
 */
export function closedSet(stem, answer) {
  const lettered = sequentialParts(stem);
  if (!lettered) return null;
  const choices = lettered.parts.map(({ label, text }) => ({ label, text }));
  // An answer that is ONE part's letter and that part's own words, and
  // nothing else — "(e) molecular crystals" under "Which best describes these
  // crystals? (a) ionic (b) covalent network … (e) molecular crystals";
  // "(b) metallic solid" under "Substance A is likely a(n): (a) ionic solid
  // (b) metallic solid …" (10.5) — chooses that part, whatever the lead-in
  // asks: the parts are the options.
  const echoed = /^\s*\(([a-z])\)\s*(.+?)\s*\.?\s*$/.exec(String(answer ?? ''));
  if (echoed && lettered.parts.some((part) => part.label === echoed[1] && tight(part.text).replace(/\.$/, '') === tight(echoed[2]))) {
    return { lead: lettered.lead, choices, chosen: echoed[1] };
  }
  if (!/\bwhich of the following\b/i.test(lettered.lead)) return null;
  // A lone letter under a lead-in that asks for THE one part with the most
  // or least of something ("For which of the following substances is the
  // least energy required …?" → "(d)", 7.5): one choice, not one part named
  // among several — "Only (b)" or a list of letters stays yes or no per part.
  const lone = namedParts(answer);
  if (lone?.length === 1 && !/^\s*only\b/i.test(answer) && SUPERLATIVE.test(lettered.lead) && choices.some((choice) => choice.label === lone[0])) {
    return { lead: lettered.lead, choices, chosen: lone[0] };
  }
  if (!answer || sequentialParts(answer, { answer: true }) || namedParts(answer)) return null;
  // …or by its LETTER, as the one the answer calls the answer: "Although
  // both (b) and (c) are correct, (e) encompasses both and is the best
  // answer." (6.4, whose options are the stem's own "(d) Both Mg and S (e)
  // Both Si and S").
  const byLetter = chosenLetter(answer);
  if (byLetter && choices.some((choice) => choice.label === byLetter)) return { lead: lettered.lead, choices, chosen: byLetter };
  // …or by the one letter the answer prints, in the sentence that answers
  // the lead-in's "most" or "least": "Under which of the following sets of
  // conditions does a real gas behave most like an ideal gas …?" → "… The
  // conditions described in (b), high temperature and low pressure, are
  // therefore most likely to yield ideal gas behavior." (9.6).
  const letters = [...new Set([...String(answer).matchAll(/\(([a-z])\)/g)].map((match) => match[1]))];
  const extreme = /\b(?:most|least)\b/i;
  if (letters.length === 1 && extreme.test(lettered.lead) && choices.some((choice) => choice.label === letters[0])
    && String(answer).split(/(?<=[.?!])\s+/).some((sentence) => sentence.includes(`(${letters[0]})`) && extreme.test(sentence))) {
    return { lead: lettered.lead, choices, chosen: letters[0] };
  }
  const said = sampleWords(answer);
  const named = lettered.parts.filter((part) => sampleWords(part.text).trim() && said.includes(sampleWords(part.text)));
  if (named.length !== 1) return null;
  return { lead: lettered.lead, choices, chosen: named[0].label };
}

/** A lead-in that asks for the one part at an extreme: "the least energy", "the most energy", "the largest", "the highest". */
const SUPERLATIVE = /\bthe\s+(?:most|least|largest|smallest|greatest|highest|lowest|strongest|weakest|longest|shortest|best)\b/i;

/** The one part letter an answer calls THE answer ("(e) … is the best answer", "(c) is correct"), or null. */
export function chosenLetter(answer) {
  const found = [...String(answer ?? '').matchAll(/\(([a-z])\)(?:[^().;]|\((?![a-z]\))[^)]*\))*?\bis\s+(?:the\s+)?(?:(?:best|correct|right)\s+)?(?:answer|correct)\b/gi)]
    .map((match) => match[1].toLowerCase());
  return new Set(found).size === 1 ? found[0] : null;
}

/** How alike an option must read to a part to be that part. */
const CHOICE_FLOOR = 0.5;

/**
 * The part each multiple-choice option is, as labels in option order, or
 * null unless the options are the parts one for one — every part an option,
 * no option two parts, none of them a part the stem does not print. An
 * option is the part it prints word for word; failing that, the one part it
 * reads most like by its words, clearly ahead of the next: a page that
 * corrects one value of a sample (3.1 prints CH₄'s molar mass 16.04 g/mol
 * where the source prints 16.06, with a Source note) still offers that part.
 */
export function choiceLabels(choices, options = []) {
  if (!choices?.length || options.length !== choices.length) return null;
  const labels = options.map((option) => {
    const exact = choices.filter((choice) => tight(choice.text) === tight(option));
    if (exact.length === 1) return exact[0].label;
    const ranked = choices.map((choice) => ({ label: choice.label, score: tokenSimilarity(choice.text, option) }))
      .sort((a, b) => b.score - a.score);
    return ranked[0].score >= CHOICE_FLOOR && ranked[0].score > (ranked[1]?.score ?? 0) ? ranked[0].label : null;
  });
  return labels.every(Boolean) && new Set(labels).size === choices.length ? labels : null;
}

/**
 * An answer that sorts the parts by LETTER under the stem's categories —
 * "ionic: (b), (d), (e), (g), and (i); covalent: (a), (c), (f), (h), (j),
 * and (k)" (7.2) — regrouped by part: a Map from label to its category
 * ("ionic"), or null unless every segment is a category and a list of
 * labels only, two segments or more, and no label is in two.
 */
export function categoryLetterParts(answer) {
  const segments = String(answer ?? '').trim().replace(/[.;]$/, '').split(';')
    .map((segment) => /^\s*([A-Za-z][A-Za-z -]*?)\s*:\s*((?:\(\s*[a-z]\s*\)\s*,?\s*(?:and\s+)?)+)$/.exec(segment));
  if (segments.length < 2 || !segments.every(Boolean)) return null;
  const byPart = new Map();
  for (const [, category, labels] of segments) {
    for (const [, label] of labels.matchAll(/\(\s*([a-z])\s*\)/g)) {
      if (byPart.has(label)) return null;
      byPart.set(label, category.trim());
    }
  }
  return byPart;
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
  const own = markedProblem(problem);
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
  return splitUnits(whole);
}

/** A lettered part's whole stem: the lead-in, the part, and — for the last part — the closing after it (`markedParagraphs`). */
export const closingStem = (lettered, part) => [lettered.lead, lettered.shared && !/[.?!]$/.test(part.text) ? `${part.text}.` : part.text,
  lettered.shared || part === lettered.parts.at(-1) ? lettered.closing : '']
  .filter(Boolean).join(' ').trim();

/** Whole exercises as units: one each, or one per lettered part (`keyedUnits`). */
function splitUnits(whole) {
  const units = [];
  for (const { marked, answerMarked, ...unit } of whole) {
    // One of a closed set: one unit, its parts the options (`closedSet`).
    const closed = unit.keyed ? closedSet(marked ?? unit.stem, unit.answer) : null;
    if (closed) {
      units.push({ ...unit, group: unit.id, label: null, lead: closed.lead, partText: null, choices: closed.choices, chosen: closed.chosen, answerMedia: [] });
      continue;
    }
    const lettered = sequentialParts(marked ?? unit.stem);
    if (!lettered) {
      units.push({ ...unit, group: unit.id, label: null, lead: '', partText: null, answerMedia: marksIn(answerMarked ?? '') });
      continue;
    }
    const byRole = roleFirstParts(unit.answer) ?? categoryLetterParts(unit.answer);
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
        // The closing stays in the last part's stem, as the source runs on —
        // in every part's where it follows a list that ends the lead-in's
        // sentence (`sequentialParts`, `shared`).
        stem: closingStem(lettered, part),
        ...(lettered.shared ? { sharedClosing: lettered.closing } : {}),
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
 * A module's worked examples as units the source gates' judges read
 * (`unitFor`, verify-source-keys `judgeKeyedUnit`): each example's question
 * the stem, its Solution the answer, split by lettered part as an exercise
 * is. They are NOT among `keyedUnits`: a section page prints a worked
 * example as prose and builds no item on it; a Knowledge Check does
 * (tools/source/knowledge-check.mjs `sources`).
 */
export function workedExampleUnits(xml) {
  return splitUnits(workedExamples(xml).map(({ title, figures, leansOn, ...unit }) => unit));
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
  // A sort into the stem's own categories (docs/subjects/chemistry.md
  // "Exercises", 2.5): the item asks the exercise's lead-in, which addresses
  // the parts together, and its LABELS are the parts. A part is this item's
  // when a label is the part character for character and the question reads
  // like the lead-in whole — a one-word label ("gold") says nothing about
  // which exercise it belongs to, so the lead-in is held to the whole-stem
  // floor, not the lettered part's.
  if (item.type === 'sortbins') return sortedPartScore(unit, question, item);
  // One of a closed set (`closedSet`): the item asks the lead-in and offers
  // every part, and nothing else, as its options. A missing option is a miss.
  if (unit.choices) {
    // The self-check that carries the answer's reason after the choice ("a
    // choice from the stem's set with a reason", 9.6's ideal-gas conditions)
    // prints the stem whole, parts and all, and has no options to read.
    if (item.type === 'selfcheck') {
      const whole = tokenSimilarity(question, unit.stem);
      return whole >= WHOLE_FLOOR ? { score: whole, words: 0, near: whole, exact: 0 } : { score: 0, words: 0 };
    }
    if (!choiceLabels(unit.choices, item.options)) return { score: 0, words: 0 };
    const near = tokenSimilarity(question, unit.lead);
    return near >= WHOLE_FLOOR ? { score: near, words: 0, near, exact: 0 } : { score: 0, words: 0 };
  }
  // One member of an unlettered list, asked yes or no (6.5: "Which atom
  // and/or ion is (are) isoelectronic with Br⁺: Se²⁺, Se, As⁻, Kr, Ga³⁺,
  // Cl⁻?" → "Se, As⁻", carried as "Is the following atom or ion
  // isoelectronic with Br⁺? Se²⁺" and five more): the member is this unit's
  // when its list holds it, under a question that reads like the lead-in.
  const member = memberAsked(unit, question, item) ?? (item.type === 'multiplechoice' ? memberAfterColon(unit, question) : null);
  if (member) {
    const lead = tokenSimilarity(unit.stem.slice(0, listStart(unit.stem) - 1), question);
    if (lead >= LEAD_FLOOR) return { score: 1, words: 1, near: lead, exact: tight(member).length };
  }
  // One labelled panel of the stem's image, asked yes or no (`panelAsked`,
  // 9.6's six graphs): the item's under a question that reads like the stem.
  const panel = item.type === 'multiplechoice' ? panelAsked(unit, question, item) : null;
  if (panel) {
    const lead = tokenSimilarity(unit.stem, question);
    if (lead >= LEAD_FLOOR) return { score: 1, words: 1, near: lead, exact: 0 };
  }
  // How much the question reads like THIS unit's whole stem, and whether it
  // prints the part character for character: what ranks two units that both
  // pass (`unitFor`). Sibling parts and twin exercises share most words.
  // A question that prints a configuration is also read as `plain` reads
  // both (the page's "1s²2s²2p⁶" is one word, the source's "1 s 2 2 s 2 2 p 6"
  // nine) — for a lettered part as for a whole exercise, or a whole exercise
  // read that way outranks the part the question prints verbatim (6.4: "…
  // given: [Kr]5s²4d¹⁰5p⁶" was read as the Zr exercise).
  // So is a question that prints a formula in the book's Unicode (7.3: the
  // page's "H₂CO" is one word, the source's "H 2 CO" two — and read raw, the
  // unkeyed twin's part "H 2" under the same lead-in read more like it).
  const configured = /\d[spdf][⁰¹²³⁴-⁹]/.test(question) || /[A-Za-z)][₀-₉⁰¹²³⁴-⁹⁺⁻]/.test(question);
  const near = Math.max(tokenSimilarity(question, unit.stem), configured ? tokenSimilarity(plain(question), plain(unit.stem)) : 0);
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
      if (share >= RESTATED_FLOOR) return { score: RESTATED_SCORE * share, words, near, exact };
      // A part that is only a datum set inline in the lead-in's sentence —
      // "…contains two lines whose frequencies are (a) 3.45 × 10¹⁴ Hz and (b)
      // 6.53 × 10¹⁴ Hz. What are …?" (6.1) — restated per part in the
      // singular ("…contains a line whose frequency is 3.45 × 10¹⁴ Hz. …"),
      // since a stem may not print "(a)…(b)". The part is the item's when
      // the question prints the datum's numbers as one run, under a lead-in
      // it reads like. Below a restated part's score: siblings differ only
      // in the datum.
      const datum = dataRun(unit.partText);
      if (datum && unit.lead && tokenSimilarity(unit.lead, question) >= LEAD_FLOOR && padded(plain(question)).includes(padded(datum))) {
        return { score: RESTATED_SCORE * RESTATED_FLOOR, words: datum.split(' ').length, near, exact: 0 };
      }
      // A part that is a list of formulas, re-listed in another order — an
      // ordering's stem never lists its members in the key's order or its
      // reverse (docs/subjects/chemistry.md "Stems"), so 10.1's "CH 4 , C 2
      // H 6 , C 3 H 8" is printed "C₂H₆, C₃H₈, CH₄": the part is the item's
      // when the question's list after a colon holds the same members, under
      // a lead-in it reads like.
      if (unit.lead && tokenSimilarity(unit.lead, question) >= LEAD_FLOOR && relistedPart(unit.partText, question)) {
        return { score: 1, words, near, exact: 0 };
      }
      return { score: 0, words: 0 };
    }
    const lead = unit.lead ? tokenSimilarity(unit.lead, question) : 1;
    return lead >= LEAD_FLOOR || words >= STANDALONE_WORDS ? { score: 1, words, near, exact } : { score: 0, words: 0 };
  }
  // A stem that names an example or exercise of ANOTHER section (the
  // source's link, whose text the gates never read) as the page must —
  // "the example “Heat Flow in an Instant Ice Pack” in [Section 5.2](…)",
  // "the calcium chloride calorimetry exercise in [Section 5.2](…)" — and
  // restates that one's given data in a closing parenthesis "(In that
  // example, …)" before its "Enter …" sentence (docs/subjects/chemistry.md
  // "Stems"; chapter 5's run facts, decision 6). The added words are a third
  // of such an item and none is the source's, so the stem is also read
  // without them. Only an item that carries such a reference is read so.
  const own = withoutCrossReference(question);
  // …and read as `plain` reads both, where the page's print and the source's
  // markup tokenize apart: the page's "1s²2s²2p⁶" is one word, the source's
  // "1 s 2 2 s 2 2 p 6" nine (6.4's "Which ion … has the electron
  // configuration …?").
  // …and read without the sentences the page adds after the source's stem
  // to say what to enter ("Enter the formal charge of C as a signed number,
  // the sign first, as +2 or −2."): fourteen words of closing put a nine-word
  // Check Your Learning ("Calculate the formal charge for each atom in the
  // carbon monoxide molecule:", 7.4) under the floor of its own stem.
  const bare = question.replace(/(?:\s+(?:Enter|Type)\b[^.?!]*[.?!])+\s*$/, '');
  const unclosed = bare !== question && bare.trim()
    ? Math.max(tokenSimilarity(bare, unit.stem), configured ? tokenSimilarity(plain(bare), plain(unit.stem)) : 0) : 0;
  const score = Math.max(near, own === null ? 0 : tokenSimilarity(own, unit.stem), unclosed);
  return { score: score >= WHOLE_FLOOR ? score : 0, words: 0, near: Math.max(near, score), exact: 0 };
}

/** A comma list's members as formulas, sorted, or null where any member is no formula or there are fewer than two. */
function formulaSet(text) {
  const members = String(text ?? '').split(/,|\s+and\s+/).map((member) => member.replace(/^\s*and\s+/, '').trim()).filter(Boolean);
  if (members.length < 2) return null;
  const canon = members.map((member) => chemCanon(member, 'formula'));
  return canon.every(Boolean) ? canon.sort().join(' ') : null;
}

/**
 * Whether `question` prints a part that is a list of formulas ("CH 4 , C 2 H
 * 6 , C 3 H 8") with its members in another order: a list after one of its
 * colons, up to that sentence's end, holding the same formulas each once.
 */
export function relistedPart(partText, question) {
  const part = formulaSet(partText);
  if (!part) return false;
  return String(question ?? '').split(':').slice(1)
    .some((after) => formulaSet(after.split(/[.?!](?:\s|$)/)[0]) === part);
}

/**
 * A lettered part that is only a datum — its text up to its first sentence
 * end is a number and at most a unit and a joining word ("3.45 × 10 14 Hz
 * and", "6.53 × 10 14 Hz. What are …") — as the run of its number tokens,
 * `plain`ed ("3 45 10 14"); else null.
 */
export function dataRun(partText) {
  const own = String(partText ?? '').split(/(?<=[.?!])\s+(?=[A-Z])|\?\s*/)[0].replace(/[.,;]\s*$/, '');
  // A measured number — a decimal, or a power of ten — never a formula's
  // subscript: "MgCl 2" is a compound, not a datum (2.6).
  if (!printedNumerals(own).some((numeral) => /[.×x]/.test(numeral.printed))) return null;
  const words = plain(own).split(' ').filter(Boolean);
  const numbers = words.filter((word) => /^\d+$/.test(word));
  if (!numbers.length || words.length - numbers.length > 3) return null;
  const first = words.findIndex((word) => /^\d+$/.test(word));
  const run = [];
  for (let at = first; at < words.length && /^\d+$/.test(words[at]); at += 1) run.push(words[at]);
  return run.length === numbers.length ? run.join(' ') : null;
}

/**
 * The members of an unlettered stem's list — the comma list after its last
 * colon, up to the question mark ("…with Br⁺: Se²⁺, Se, As⁻, Kr, Ga³⁺,
 * Cl⁻?") — as written, or [] when it has no such list of two or more.
 */
export function listMembers(stem) {
  const text = String(stem ?? '');
  const at = listStart(text);
  if (at === -1) return [];
  const members = text.slice(at).replace(/[?.]\s*$/, '').split(/,|\s+or\s+/).map((member) => member.replace(/^\s*(?:or|and)\s+/, '').trim()).filter(Boolean);
  // A formula's subscripts are no words of it: the source's "C 2 H 2" is
  // one member, as "Se 2+" is.
  const words = (member) => member.split(' ').filter((word) => !/^[\d+−–-]+$/.test(word)).length;
  return members.length >= 2 && members.every((member) => words(member) <= 3) ? members : [];
}

/**
 * Where an unlettered stem's list begins: after its last colon ("…with
 * Br⁺: Se²⁺, Se, …?"), or, in a stem with no colon, after the question the
 * list follows ("Which of the following gases diffuse more slowly than
 * oxygen? F₂, Ne, N₂O, C₂H₂, NO, Cl₂, H₂S", 9.4). -1 when neither.
 */
export function listStart(stem) {
  const text = String(stem ?? '');
  const colon = text.lastIndexOf(':');
  if (colon !== -1) return colon + 1;
  const asked = text.lastIndexOf('?');
  return asked !== -1 && text.slice(asked + 1).trim() ? asked + 1 : -1;
}

/**
 * A panel of the stem's image that a yes-or-no item asks about, by the label
 * the image prints — "Which of these gases exhibit behavior significantly
 * different from that expected for ideal gases?" over six graphs labelled
 * Gas A to Gas F, answered "Gases C, E, and F" (9.6), carried as one item per
 * panel ending "…? Gas A" — as `{ label, wanted }`, or null. The answer must
 * be nothing but the labels' noun, in the plural, and their letters.
 */
export function panelAsked(unit, question, item = {}) {
  if (unit.partText !== null && unit.partText !== undefined) return null;
  const options = (item.options || []).map((option) => plain(option));
  if (options.length !== 2 || !options.includes('yes') || !options.includes('no')) return null;
  const asked = /^([A-Za-z]+)\s+([A-Z])$/.exec(String(question ?? '').split('?').pop().trim().replace(/\.$/, ''));
  const listed = /^\s*([A-Za-z]+)\s+([A-Z](?:\s*,\s*(?:and\s+)?[A-Z])*(?:\s*,?\s+and\s+[A-Z])?)\s*\.?\s*$/.exec(String(unit.answer ?? ''));
  if (!asked || !listed) return null;
  const noun = asked[1].toLowerCase();
  if (![`${noun}s`, `${noun}es`].includes(listed[1].toLowerCase())) return null;
  const letters = listed[2].match(/[A-Z]/g);
  return { label: `${asked[1]} ${asked[2]}`, wanted: letters.includes(asked[2]) ? 'yes' : 'no' };
}

/**
 * The member of an unlettered unit's list that a yes-or-no item asks about
 * — the text after the question's last question mark, when the list holds
 * it — or null.
 */
export function memberAsked(unit, question, item = {}) {
  if (unit.partText !== null && unit.partText !== undefined) return null;
  const options = (item.options || []).map((option) => plain(option));
  if (options.length !== 2 || !options.includes('yes') || !options.includes('no')) return null;
  const asked = String(question ?? '').split('?').pop().trim().replace(/\.$/, '');
  if (!asked) return null;
  return listMembers(unit.stem).find((member) => tight(member) === tight(asked)) ?? null;
}

/**
 * The member of an unlettered unit's list that a multiple choice asks about
 * after its last colon — "Would the following atom be expected to form a
 * negative ion or a positive ion in binary ionic compounds: In?" (7.1, the
 * stem's list sorted into its categories one member at a time) — or null.
 * Read so, the member is this exercise's, not the unkeyed twin's lettered
 * part "In" under a lead-in that also says "in binary ionic compounds".
 */
export function memberAfterColon(unit, question) {
  if (unit.partText !== null && unit.partText !== undefined) return null;
  const at = String(question ?? '').lastIndexOf(':');
  if (at === -1) return null;
  const asked = String(question).slice(at + 1).replace(/[?.]\s*$/, '').trim();
  return asked ? listMembers(unit.stem).find((member) => tight(member) === tight(asked)) ?? null : null;
}

// The third form is a figure or table of another section named by a
// describing phrase, as page-skeleton rule 9 has the page name it — "the
// photograph of oil and water in a glass in [Section 11.3 Solubility](…)" for
// the source's bare link (11.4's fs-idp128725184, whose own stem is eleven
// words: the phrase put it under the floor, chapter 11's gate probe). The
// fourth is an example of the SAME page, "the example “Calculating Mole
// Fraction and Molality” above", whose given data the item restates in the
// same "(In that example, …)" parenthesis (11.4's antifreeze Check Your
// Learning, fs-idp5504000#check: a seventeen-word stem under a thirty-word
// parenthesis).
const CROSS_REFERENCE = /\bthe (?:example|exercise|figure|table) “[^”]*” in Section \d+\.\d+|\bthe [^,.;()“”]{1,60}? (?:example|exercise) in Section \d+\.\d+|\bthe (?:figure|photograph|photo|graph|table|diagram|drawing|image)\b[^,.;()“”]{0,80}? in Section \d+\.\d+|\bthe (?:example|exercise) “[^”]*” above\b/g;
/**
 * A question without what the page adds when it names another section's
 * example, exercise, figure, or table: the reference itself, the parenthesis that restates
 * that one's given data ("(In that example, …)"), and a closing "Enter …"
 * sentence. Null when the question names no other section's example or
 * exercise. The question arrives unlinked ("Section 5.2", not its link).
 */
export function withoutCrossReference(question) {
  const text = String(question ?? '');
  if (!text.match(CROSS_REFERENCE)) return null;
  return text.replace(CROSS_REFERENCE, ' ')
    .replace(/\s*\(In th(?:at|is|ose) [^()]*(?:\([^()]*\)[^()]*)*\)/g, '')
    .replace(/(?:^|\s)Enter [^.]*\.\s*$/, '')
    .replace(/\s+/g, ' ').trim();
}

/** A sortbins item's labels: `labels` (verify-source-keys `pageItems`) or `options` (verify-source-coverage `pageTexts`). */
export const sortLabels = (item = {}) => item.labels ?? item.options ?? [];

/** `ownScore` for a sortbins: score 1 when a label IS the unit's lettered part under a lead-in the question reads like whole. */
function sortedPartScore(unit, question, item) {
  const none = { score: 0, words: 0 };
  if (unit.partText === null || unit.partText === undefined || !plain(unit.partText) || !unit.lead) return none;
  const part = tight(unit.partText);
  if (!sortLabels(item).some((label) => tight(label) === part)) return none;
  const near = tokenSimilarity(unit.lead, question);
  return near >= WHOLE_FLOOR ? { score: 1, words: plain(unit.partText).split(' ').length, near, exact: part.length } : none;
}

/**
 * The lettered exercise a sortbins item sorts, as `{ group, parts }` — every
 * unit of that exercise, in source order — or null when no exercise's part
 * is one of its labels under a lead-in the question reads like
 * (`sortedPartScore`). Of two exercises that pass (a keyed one and its
 * unkeyed twin share a lead-in, 2.5), the one more of whose parts are
 * labels, then the one whose lead-in the question reads more like, then the
 * keyed one. The caller holds the item to the exercise: every label a part,
 * every part a label, each label in the bin its part's answer names.
 */
export function sortedExercise(linkedQuestion, units, item = {}) {
  const question = unlinked(linkedQuestion);
  const groups = new Map();
  for (const unit of units) {
    const group = groups.get(unit.group) || { group: unit.group, parts: [], hits: 0, near: 0, keyed: false };
    group.parts.push(unit);
    group.keyed = group.keyed || Boolean(unit.keyed);
    const reading = sortedPartScore(unit, question, item);
    if (reading.score > 0) {
      group.hits += 1;
      group.near = Math.max(group.near, reading.near);
    }
    groups.set(unit.group, group);
  }
  const passing = [...groups.values()].filter((group) => group.hits > 0)
    .sort((a, b) => b.hits - a.hits || b.near - a.near || Number(b.keyed) - Number(a.keyed));
  return passing.length ? { group: passing[0].group, parts: passing[0].parts.filter((unit) => unit.partText !== null && unit.partText !== undefined) } : null;
}

/** Whether a label is a part's own text (`sortedExercise`'s reading, for the caller). */
export const isPartLabel = (label, unit) => tight(label) === tight(unit.partText);

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
/** How alike two question sentences must read to be one question (a link's words aside). */
const ASK_SAME = 0.8;

/** The last sentence of a text that ends in a question mark, with its link targets dropped; '' when none. */
export function lastAsk(text) {
  const sentences = unlinked(text).split(/(?<=[.?!])\s+/).map((sentence) => sentence.trim());
  return [...sentences].reverse().find((sentence) => sentence.endsWith('?')) || '';
}

export function unitFor(linkedQuestion, units, item = {}) {
  const question = unlinked(linkedQuestion);
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
  // A Check Your Learning that leans on an earlier one opens with that one's
  // GIVEN data restated in its own sentence (docs/subjects/chemistry.md,
  // "Stems") — 3.3: "A teaspoon of table sugar containing about 0.01 mol
  // sucrose has been dissolved in a cup of tea with a volume of 200 mL. What
  // volume (mL) of the sweetened tea described above contains …?" — and so
  // reads, word for word, more like the earlier unit than like its own. Its
  // question is the one it ASKS: where the item's last question sentence is
  // the own question of exactly one passing whole unit, the item is that
  // unit's. (The earlier unit's own item asks the earlier question, and is
  // read as itself.)
  const asked = lastAsk(question);
  if (asked && asked.split(' ').length >= RESTATED_WORDS) {
    const carriers = [...groups.values()].flatMap((group) => group.readings)
      .filter(({ unit }) => unit.partText === null || unit.partText === undefined)
      .filter(({ unit }) => {
        const own = lastAsk(unit.stem);
        return own && tokenSimilarity(asked, own) >= ASK_SAME;
      });
    if (new Set(carriers.map(({ unit }) => unit.group)).size === 1) return carriers[0].unit;
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
  if (!best) return null;
  const ranked = best.readings.sort(compareReadings);
  // An outline-then-answer exercise (9.3: "(a) Outline the steps necessary
  // to answer the following question: What volume of O₂ …? (b) Answer the
  // question."): the fill-in for (b) must print (a)'s question to be
  // answerable, so it prints both parts and reads most like (a), whose
  // answer is an outline with no number. A fill-in asks a number: of the
  // parts it prints verbatim, it is the one whose answer prints one.
  if (item.type === 'fillin' && ranked[0].unit.label && !printedNumerals(ranked[0].unit.answer).length) {
    const numeric = ranked.find((reading) => reading.score === ranked[0].score && reading.unit.group === ranked[0].unit.group
      && printedNumerals(reading.unit.answer).length);
    if (numeric) return numeric.unit;
  }
  return ranked[0].unit;
}
