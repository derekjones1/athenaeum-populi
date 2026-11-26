// Chapter 8's notation readings (docs/subjects/chemistry.md "Notation",
// "Selfchecks"; the consistency reading of chapter 8, findings 1, 2, 4, 8,
// 10, 11). Each takes a page's Markdown and returns its hits as
// `[{ index, written, … }]`, offsets into the page, so the lint can place
// them and a measurement can count them over the book.
import { blankPreservingOffsets, mathSpans, shortcodes } from '../lib/content.mjs';
import { proseOnly } from './chemistry-readings.mjs';
import { isWordRun, readWords } from '../lib/rubric-run.mjs';
import { loadElements } from '../lib/elements.mjs';

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

/** The item shortcodes whose every word — question, options, hint, model answer, rubric — is the item's. */
const ITEM_SHORTCODES = ['multiplechoice', 'fillin', 'textin', 'selfcheck', 'sortbins', 'graphplot'];

/**
 * g. A bare σ or π in running prose that names a kind of bond or orbital
 * and is not written with its name, "sigma (σ)" / "pi (π)" (GR2, November
 * 16, 2026, Derek). Read: body paragraphs, list items, table cells,
 * headings, captions, callouts, Summary, Key terms, Source notes, the
 * footer. Not read: item text (every multiple choice, fill-in, text-in,
 * self-check, sort-bins, graph plot — stems are the source's verbatim), a
 * shortcode's attributes (`alt`, `longdesc`: a screen reader says the
 * letter's name), HTML attributes, math, code, front matter. Not a hit: a
 * letter already beside its name ("sigma bonds (σ bonds)", "pi (π)"); a
 * label — the letter followed at once by a subscript, superscript, star,
 * letter, or digit (σ₂ₛ, π*, σ2s, πp); and π the number ("multiplied by
 * π", "2π", "π × r").
 */
export function bareSigmaPi(text) {
  let prose = body(text);
  for (const name of ITEM_SHORTCODES) {
    for (const sc of shortcodes(prose, name)) prose = prose.slice(0, sc.index) + blankPreservingOffsets(prose.slice(sc.index, sc.end)) + prose.slice(sc.end);
  }
  prose = proseOnly(prose)
    .replace(/\{\{<[\s\S]*?>\}\}/g, blankPreservingOffsets)
    .replace(/\b(?:alt|title|aria-label)="[^"]*"/g, blankPreservingOffsets);
  const hits = [];
  for (const match of prose.matchAll(/[σπ]/g)) {
    const at = match.index;
    const letter = match[0];
    const name = letter === 'σ' ? 'sigma' : 'pi';
    const before = prose.slice(Math.max(0, at - 40), at);
    const after = prose.slice(at + 1, at + 4);
    // A label: σ₂ₛ, σ*, π*, σ2s, πp, σ¹.
    if (/^[*∗\p{L}\p{N}₀-₉ₐ-ₜ⁰-⁹⁺⁻]/u.test(after)) continue;
    // π the number: after a digit, an operator, or "by", and before no word.
    if (letter === 'π' && (/(?:\d|[×·=/+−]\s*|\bby\s)$/u.test(before) || /^\s*[×·=/+−\d]/u.test(after)) && !/^[\s-]+(?:bond|orbital|electron|overlap|system|character|cloud)/u.test(prose.slice(at + 1, at + 20))) continue;
    // The letter named as a letter, not a bond: a footer's "σ and π set as
    // math", "σ and π written with their names".
    if (/^(?:\s+(?:and|or)\s+[σπ])?\s+(?:set|written|typed)\b/u.test(prose.slice(at + 1, at + 24))) continue;
    // Beside its name: "sigma (σ)", "Pi (π)", "sigma bonds (σ bonds)", "pi (π) bonding orbital".
    if (new RegExp(`\\b${name}\\b[^.()\\n]{0,24}\\(\\s*$`, 'i').test(before)) continue;
    hits.push({ index: at, written: prose.slice(Math.max(0, at - 12), at + 12).replace(/\s+/g, ' ').trim(), letter, name });
  }
  return hits;
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

let elementSymbols = null;
const isElementSymbol = (symbol) => {
  elementSymbols ??= loadElements().bySymbol;
  return elementSymbols.has(symbol);
};

/**
 * d2. A group's bond written with the minus sign U+2212 in prose (chapter 10
 * readings, F3, November 18, 2026): the minus directly before an element
 * symbol or a group formula with nothing bonded on its left — "−OH groups",
 * "−NH₂", "−COOH", "−CH₃". The bond is an en dash, "–OH"; 10.2 and 10.3
 * copied the source's U+2212 where 10.1 wrote the dash. The symbol must be
 * an element's and not run on into a lower-case letter ("−In" of a word is
 * no indium). Not a hit: a charge (O²⁻ is a superscript), a signed number
 * or temperature ("−1", "−85 °C"), math, and a bond between two symbols,
 * which `minusAsBond` reads.
 */
export function minusAsGroupBond(text) {
  const prose = proseOnly(body(text));
  const between = new Set(minusAsBond(text).map((hit) => hit.index));
  const hits = [];
  for (const match of prose.matchAll(/−(?=([A-Z][a-z]?)(?![a-z]))/g)) {
    if (between.has(match.index) || !isElementSymbol(match[1])) continue;
    const group = /^−[A-Z][A-Za-z₀-₉]*/.exec(prose.slice(match.index))[0];
    hits.push({ index: match.index, written: group, dash: group.replace('−', '–') });
  }
  return hits;
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

/** Every math span of the page (front matter and code blanked), with the offset of its TeX. */
const texSpans = (text) => mathSpans(body(text))
  .map((span) => ({ ...span, at: span.index + (span.display ? 2 : 1) }));

/**
 * h. A bare proportionality sign ∝ (U+221D) outside math (chapter 9
 * readings, November 17, 2026): body, list, table, caption, Source note,
 * footer, and item text. In the body face it renders as a speck; write
 * `$\propto$`. Not read: math, code, front matter, and an `alt`,
 * `longdesc`, or `title` attribute (plain text, where math does not set).
 */
export function bareProportionality(text) {
  let prose = body(text).replace(/\b(?:alt|longdesc|title|aria-label)="[^"]*"/g, blankPreservingOffsets);
  for (const span of mathSpans(prose)) {
    prose = prose.slice(0, span.index) + ' '.repeat(span.length) + prose.slice(span.index + span.length);
  }
  return [...prose.matchAll(/∝/g)].map((match) => ({ index: match.index, written: String(text).slice(Math.max(0, match.index - 12), match.index + 12).replace(/\s+/g, ' ').trim() }));
}

/**
 * i. A four-digit number in the 1000–2099 band set in math directly before
 * a spacing command and a unit — `1000\ \text{mL}`, `1250\ \cancel{\text{km}}`,
 * `-1407\ \text{kJ}` — ungrouped (chapter 9 readings, November 17, 2026).
 * The house grouping lint lets that band through as possible years; a year
 * is never followed by a unit, so this one is refused: `1{,}000\ \text{mL}`.
 * Display and inline math alike, item text included. Not a hit: a grouped
 * number, a number with more digits or a decimal part, a year with no unit
 * after it, and an `answer=` key (no math).
 */
export function ungroupedNumberBeforeUnit(text) {
  const hits = [];
  for (const span of texSpans(text)) {
    for (const match of span.tex.matchAll(/(?<![\d.,}])(1\d{3}|20\d{2})(?![\d.,{])\s*(?:\\[ ,;:!]|~|\\quad\b|\\enspace\b)\s*(?:\\(?:text|mathrm|cancel|mu)\b|[A-Za-z°])/g)) {
      hits.push({ index: span.at + match.index, written: span.tex.slice(match.index, match.index + match[0].length + 8), value: match[1], grouped: `${match[1][0]}{,}${match[1].slice(1)}` });
    }
  }
  return hits;
}

/**
 * j. A bare `\\` between two rows of an `aligned` display that each hold a
 * fraction (playbook "Notation", chapter 3): one row's denominator sits on
 * the next row's numerator and the column reads as one tall fraction. The
 * rows are separated by `\\[6pt]`. Not a hit: a bare `\\` beside a row with
 * no fraction, and a `\\[…]` with any spacing.
 */
export function crowdedFractionRows(text) {
  const hits = [];
  for (const span of texSpans(text)) {
    for (const env of span.tex.matchAll(/\\begin\{aligned\}([\s\S]*?)\\end\{aligned\}/g)) {
      const start = span.at + env.index + '\\begin{aligned}'.length;
      const parts = env[1].split(/(\\\\(?:\s*\[[^\]]*\])?)/);
      let offset = parts[0].length;
      for (let i = 1; i < parts.length - 1; i += 2) {
        if (parts[i] === '\\\\' && /\\[dt]?frac\b/.test(parts[i - 1]) && /\\[dt]?frac\b/.test(parts[i + 1])) {
          hits.push({ index: start + offset, written: `${parts[i - 1].trim().slice(-30)} \\\\ ${parts[i + 1].trim().slice(0, 30)}` });
        }
        offset += parts[i].length + parts[i + 1].length;
      }
    }
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

/**
 * l. A reference to ONE other chapter with no section after it (playbook,
 * page-skeleton rule 9: "A reference to a whole chapter is resolved to the
 * section meant"; chapter 11's consistency reader found six, a measurement
 * of the book eighteen, all resolved November 25, 2026). Read: "chapter on
 * …", and "(an|the) (earlier|previous|preceding|later|next) chapter" —
 * singular. It passes when "Section N.M" — a link or plain text, for a page
 * not yet written — follows in the same sentence ("…the chapter on
 * thermochemistry ([Section 5.3 Enthalpy](…))", "a later chapter of this
 * text (Section 16.1 Spontaneity)"). Not read: the plural "later
 * chapters" / "subsequent chapters" (no one section to name), "this
 * chapter", code, front matter, the footer (it quotes the source's words),
 * and an alt, longdesc, or title attribute. A Source note IS read.
 */
export function chapterWithoutSection(text) {
  const prose = body(text).replace(/\b(?:alt|longdesc|title|aria-label)="[^"]*"/g, blankPreservingOffsets)
    // The footer quotes the source's words to say what changed ("“the next chapter on liquids” followed by a link").
    .replace(/<small>[\s\S]*?<\/small>/g, blankPreservingOffsets);
  const hits = [];
  const REFERENCE = /\bchapter on\b|\b(?:an|the)\s+(?:earlier|previous|preceding|later|next)\s+(?:text\s+)?chapter\b(?!s)/gi;
  for (const match of prose.matchAll(REFERENCE)) {
    const rest = prose.slice(match.index + match[0].length);
    // The rest of the sentence: up to a sentence's end (a period, question
    // mark, or exclamation mark before a space, a quotation mark, or the
    // line's end — "9.2" and a link's path are no end) or the line's end.
    const end = rest.search(/[.?!](?=["”’)]?(?:\s|$))|\n/);
    const sentence = end === -1 ? rest : rest.slice(0, end + 1);
    if (/\bSection \d+\.\d+/.test(sentence)) continue;
    hits.push({ index: match.index, written: String(text).slice(match.index, match.index + match[0].length + 50).replace(/\s+/g, ' ').trim() });
  }
  return hits;
}
