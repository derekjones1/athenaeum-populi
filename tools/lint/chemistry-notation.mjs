// Chapter 8's notation readings (docs/subjects/chemistry.md "Notation",
// "Selfchecks"; the consistency reading of chapter 8, findings 1, 2, 4, 8,
// 10, 11). Each takes a page's Markdown and returns its hits as
// `[{ index, written, … }]`, offsets into the page, so the lint can place
// them and a measurement can count them over the book.
import { blankPreservingOffsets, shortcodes } from '../lib/content.mjs';
import { proseOnly } from './chemistry-readings.mjs';
import { isWordRun, readWords } from '../lib/rubric-run.mjs';

/** The page with front matter and code blanked (offsets kept). */
const body = (text) => String(text)
  .replace(/^---\n[\s\S]*?\n---\n/, blankPreservingOffsets)
  .replace(/```[\s\S]*?```|`[^`\n]*`/g, blankPreservingOffsets);

/** Every region of a page that is inside the named shortcodes (open tag to close). */
function regionsOf(text, names) {
  const regions = [];
  for (const name of names) for (const sc of shortcodes(text, name)) regions.push([sc.index, sc.end ?? sc.index]);
  return regions;
}
const inside = (regions, index) => regions.some(([from, to]) => index >= from && index < to);

/**
 * a. An orbital, subshell, or hybridization letter set italic in prose:
 * `*s*`, `2*p*`, `*sp*³`, `*d*`, `*sp*`. State symbols — `(*s*)`, `(*l*)`,
 * `(*g*)`, `(*aq*)` after a formula — and the axis letters are not orbital
 * letters. Labels are upright Unicode whatever the source italicizes (GR1).
 */
export function italicOrbitalLetters(text) {
  const prose = proseOnly(body(text));
  const hits = [];
  // An orbital letter by its company: after a shell number ("4*s*",
  // "2*p*"), before what it names ("*s* orbital", "*p*-orbitals", "*d*
  // electrons", "*sp* hybrid"), or *sp* itself, which is nothing else. A
  // state symbol is italic too — "(*s*)", and in 4.1's own key "*s* for
  // solids, *l* for liquids" — and is never in that company.
  const ORBITAL = /(?<=\d)\*([spdfg])\*|\*(sp)\*|(?<![A-Za-z*\d])\*([spdfg])\*(?=[\s-]*(?:orbitals?|subshells?|electrons?|hybrids?|block|character|bonds?|overlap)\b)/g;
  for (const match of prose.matchAll(ORBITAL)) hits.push({ index: match.index, written: match[0] });
  return hits;
}

/**
 * b. A bare `$\sigma$` or `$\pi$` — the letter alone, no subscript,
 * superscript, or star — outside a `multiplechoice` or `fillin`, and outside
 * a `selfcheck` whose question is a `multiplechoice`'s on the page (GR2).
 * Unicode reads the same there and is what every chapter before 8.4 wrote.
 */
export function bareGreekMath(text) {
  const source = body(text);
  const allowed = regionsOf(source, ['multiplechoice', 'fillin']);
  const mcQuestions = new Set([...shortcodes(source, 'multiplechoice')].map((sc) => String(sc.params.question ?? '').trim()));
  for (const sc of shortcodes(source, 'selfcheck')) {
    if (mcQuestions.has(String(sc.params.question ?? '').trim())) allowed.push([sc.index, sc.end ?? sc.index]);
  }
  return [...source.matchAll(/\$\s*\\(sigma|pi)\s*\$/g)]
    .filter((match) => !inside(allowed, match.index))
    .map((match) => ({ index: match.index, written: match[0], letter: match[1] === 'pi' ? 'π' : 'σ' }));
}

/**
 * c. A clause of one rubric wholly contained in another clause of the same
 * rubric (GR4), read as the rubric-run lint reads a clause
 * (`tools/lib/rubric-run.mjs`): the same words tick both boxes. Two parallel
 * clauses that share a run of words ("the value of an extensive property …"
 * / "the value of an intensive property …") are sound and not refused, and
 * so is a clause of one or two words — the answer's choice ("lesser",
 * "formic acid") — that its reason repeats: the choice and the reason are
 * two checks.
 */
export function overlappingRubricClauses(text) {
  const hits = [];
  for (const sc of shortcodes(String(text), 'selfcheck')) {
    const tail = String(sc.inner ?? '').split(/^[ \t]*===CHECKS===[ \t]*$/m)[1];
    if (!tail) continue;
    const clauses = tail.split('\n').map((line) => line.trim()).filter(Boolean);
    for (let i = 0; i < clauses.length; i += 1) {
      for (let j = 0; j < clauses.length; j += 1) {
        if (i === j || (j < i && readWords(clauses[i]).join(' ') === readWords(clauses[j]).join(' '))) continue;
        if (readWords(clauses[i]).length >= 3 && isWordRun(clauses[i], clauses[j])) {
          hits.push({ index: sc.index, written: `${clauses[i]} | ${clauses[j]}`, inner: clauses[i], outer: clauses[j], contained: true });
        }
      }
    }
  }
  return hits;
}

/**
 * d. A bond written with the minus sign U+2212 in prose (GR7): between two
 * element symbols ("H−C"), or between a symbol and = or ≡. A bond is an en
 * dash; U+2212 is the minus sign of a number or a charge.
 */
export function minusAsBond(text) {
  const prose = proseOnly(body(text));
  return [...prose.matchAll(/(?<=[A-Z][a-z]?[₀-₉]*)−(?=[A-Z]|[=≡])|(?<=[=≡])−(?=[A-Z])/g)]
    .map((match) => ({ index: match.index, written: prose.slice(Math.max(0, match.index - 3), match.index + 4) }));
}

/**
 * e. British spelling — labelled, colour, grey and their inflections — and
 * a straight apostrophe, in prose or an alt (GR6). American spelling is the
 * source's; the curly apostrophe is the house's.
 */
export function britishSpellingAndStraightApostrophes(text) {
  // A word in curly quotation marks is the source's, quoted ("the source's
  // “silver-grey” spelled “silver-gray”", 6.5's footer).
  const prose = proseOnly(body(text)).replace(/“[^”\n]*”/g, blankPreservingOffsets);
  const hits = [...prose.matchAll(/\b(?:labell(?:ed|ing)|colour(?:ed|ing|ful|less|s)?|grey(?:s|ed|ish)?)\b/gi)]
    .map((match) => ({ index: match.index, written: match[0], kind: 'spelling' }));
  for (const hit of straightApostrophes(text)) {
    hits.push({ index: hit.index, written: String(text).slice(Math.max(0, hit.index - 6), hit.index + 3), kind: hit.kind === 'opening' ? 'opening quote' : 'apostrophe' });
  }
  return hits.sort((a, b) => a.index - b.index);
}

/**
 * The straight apostrophes of a page's prose, alts, and item text that are
 * typographic: `[{ index, kind }]`, `kind` 'apostrophe' (inside a word —
 * "Hund's", "don't", "1990's" — or after a plural's s: "electrons' "),
 * 'closing' (after a word, before punctuation or space: a closing single
 * quotation mark, the same ’), or 'opening' (before a word, after a space
 * or a bracket: ‘). Never read: front matter, code, math (a prime),
 * Markdown link targets, URLs, HTML tags with their attributes, and a mark
 * after a digit (a foot or a minute) unless a letter follows.
 */
export function straightApostrophes(text) {
  const masked = proseOnly(body(text)).replace(/<\/?[a-zA-Z][^>\n]*>/g, blankPreservingOffsets);
  const hits = [];
  for (const match of masked.matchAll(/'/g)) {
    const before = masked.slice(Math.max(0, match.index - 2), match.index);
    const after = masked.slice(match.index + 1, match.index + 2);
    const letterAfter = /\p{L}/u.test(after);
    const wordBefore = /[\p{L}\p{N}]$/u.test(before);
    if (wordBefore && letterAfter) hits.push({ index: match.index, kind: 'apostrophe' });
    else if (/\p{L}s$/u.test(before) && /^(?:[\s.,;:!?)”]|$)/u.test(after)) hits.push({ index: match.index, kind: 'apostrophe' });
    else if (/\p{L}$/u.test(before) && /^(?:[\s.,;:!?)”]|$)/u.test(after)) hits.push({ index: match.index, kind: 'closing' });
    else if ((/(?:^|[\s(“\[])$/u.test(before) || match.index === 0) && letterAfter) hits.push({ index: match.index, kind: 'opening' });
  }
  return hits;
}

/** f. An `answerDisplay` with no math: every display is math (playbook "Added items"). */
export function plainAnswerDisplays(text) {
  const hits = [];
  for (const kind of ['fillin', 'textin', 'multiplechoice']) {
    for (const sc of shortcodes(String(text), kind)) {
      const display = sc.params.answerDisplay;
      if (display !== undefined && !String(display).includes('$')) hits.push({ index: sc.index, written: display, kind, question: String(sc.params.question ?? '') });
    }
  }
  return hits;
}
