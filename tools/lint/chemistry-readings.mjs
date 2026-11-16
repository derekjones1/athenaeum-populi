/**
 * The readings behind the Chemistry lints of November 16, 2026 — the checks
 * chapters 5 and 6 left on the playbook's open list
 * (docs/subjects/chemistry.md, "What is still open"). Each one was a defect a
 * reader caught and no gate could. lintLeaks (lints-leaks.mjs) applies them
 * to Chemistry pages; they are pure, so the fixtures in
 * chemistry-readings.test.mjs are the incidents themselves.
 *
 *   colourOutsideVisible     6.1's cesium line, keyed "red" at 869 nm
 *   subshellLabelSlips       `$n$s`, `$(n - 1)$d` (6.4): the label is one upright token
 *   italicDescriptiveSubscripts  `E_f`, `n_i` (6.2): "final", "initial" are upright
 *   dashHyphens              the source's "the wave-they", "3 kHz-300 GHz" (6.1)
 *   sourceNumberReferences   "Table 5.1" (5.2): a table is named by what it shows
 *   miscountedConfigurations a figure description's "96 Cm 7s²5f⁹" (6.4): 97 electrons
 *
 * The heat-question and unit readings are in tools/lib (heat-ask.mjs,
 * item-units.mjs): the run-facts screen shares the first.
 */
import { blankPreservingOffsets } from '../lib/content.mjs';
import { loadElements } from '../lib/elements.mjs';
import { readConfiguration } from '../../assets/js/lib/text/check-config.mjs';

// ---- a colour keyed outside the visible range ------------------------------

const SPEED_OF_LIGHT = 2.998e8; // m/s
const PLANCK = 6.626e-34; // J s
const ELECTRON_VOLT = 1.602e-19; // J
/**
 * The visible range in nanometers. Its ends are a convention (the book's own
 * figures draw 400 to 700 nm), so the range is taken wide: the rule is for a
 * line that is plainly not light the eye sees, and 869 nm is.
 */
export const VISIBLE_NM = Object.freeze([380, 750]);
const COLOURS = 'red|orange|yellow|green|blue|indigo|violet|purple';

const NUMBER = String.raw`(\d+(?:\.\d+)?)(?:\s*\\times\s*10\s*\^\s*\{?\s*([-−]?\d+)\s*\}?)?`;
const valueOf = (mantissa, exponent) => Number(mantissa) * 10 ** Number(String(exponent ?? '0').replace('−', '-'));
const LENGTH_NM = { nm: 1, 'Å': 0.1, pm: 1e-3, 'µm': 1e3, 'μm': 1e3, mm: 1e6, cm: 1e7, m: 1e9 };
const FREQUENCY_HZ = { Hz: 1, kHz: 1e3, MHz: 1e6, GHz: 1e9, THz: 1e12, 's⁻¹': 1, 's^{-1}': 1 };

/**
 * Every wavelength, in nanometers, that a stem states for its light: a
 * wavelength as printed, a frequency (λ = c/ν), or the energy of a photon
 * (λ = hc/E). Math delimiters and `\text{}` are read through.
 */
export function stemWavelengths(question) {
  const text = String(question ?? '').replace(/\\(?:text|mathrm)\s*\{([^{}]*)\}/g, '$1').replace(/\\ /g, ' ');
  const found = [];
  const quantity = new RegExp(String.raw`${NUMBER}\s*\$?\s*(nm|Å|pm|µm|μm|mm|cm|m|[kMGT]?Hz|s⁻¹|s\^\{-1\}|J|eV)(?![A-Za-z/⁻^])`, 'g');
  for (const [, mantissa, exponent, unit] of text.matchAll(quantity)) {
    const value = valueOf(mantissa, exponent);
    if (!(value > 0)) continue;
    if (unit in LENGTH_NM) found.push(value * LENGTH_NM[unit]);
    else if (unit in FREQUENCY_HZ) found.push((SPEED_OF_LIGHT / (value * FREQUENCY_HZ[unit])) * 1e9);
    // An energy is a photon's only where the stem says so, and only at a photon's size.
    else if (/\bphotons?\b/i.test(text) && value * (unit === 'eV' ? ELECTRON_VOLT : 1) < 1e-15) {
      found.push(((PLANCK * SPEED_OF_LIGHT) / (value * (unit === 'eV' ? ELECTRON_VOLT : 1))) * 1e9);
    }
  }
  return found;
}

/**
 * The colour an item's key names when the item asks for one, or null. `key`
 * is what the learner is graded against or shown: a text-in's answer, a
 * multiple choice's keyed option, a self-check's model answer.
 */
export function keyedColour(question, key) {
  if (!/\b(?:what|which) colou?r\b|\bcolou?r (?:is|of)\b|\bcolou?r\b[^.?!]*\?/i.test(String(question ?? ''))) return null;
  const text = String(key ?? '');
  const named = new RegExp(String.raw`^\s*(${COLOURS})\s*\.?\s*$|\b(?:is|appears|looks|be|as)\s+(${COLOURS})\b`, 'i').exec(text);
  return named ? (named[1] || named[2]).toLowerCase() : null;
}

/**
 * Why a colour key is wrong by the stem's own light — or null. 6.1 keyed a
 * cesium line "red" from its source; the stem's 3.45 × 10¹⁴ Hz is 869 nm,
 * which is infrared on every figure of the page. Only a stem whose light all
 * falls outside the visible range is refused: where it states two quantities
 * (a line absorbed and a colour seen) the rule cannot tell which the key is
 * about, and band borders (is 590 nm yellow or orange?) are a convention.
 */
export function colourOutsideVisible(question, key) {
  const colour = keyedColour(question, key);
  if (!colour) return null;
  const wavelengths = stemWavelengths(question);
  if (!wavelengths.length || wavelengths.some((nm) => nm >= VISIBLE_NM[0] && nm <= VISIBLE_NM[1])) return null;
  const nm = wavelengths[0];
  const region = nm > VISIBLE_NM[1] ? 'infrared' : 'ultraviolet';
  return `keyed ${JSON.stringify(colour)}, and the stem's light is ${nm >= 100 ? Math.round(nm) : nm.toPrecision(3)} nm, outside the visible range (${VISIBLE_NM[0]}–${VISIBLE_NM[1]} nm): it is ${region}, and has no colour`;
}

// ---- a subshell label with an italic shell number ---------------------------

/**
 * `$n$s`, `$(n - 1)$d`, `*n*p`, and `n\text{s}` inside math: a subshell
 * label with a variable shell number is one upright Unicode token, n
 * included — ns, (n − 1)d, ns²np³ (the chapter 6 ruling, playbook
 * "Notation"). 6.4 wrote the italic forms and 6.5 the upright one. `$n$`
 * alone, the quantum number, stays math. Returns `[{ index, written, upright }]`.
 */
export function subshellLabelSlips(text) {
  const hits = [];
  const upright = (written) => written.replace(/[$*]|\\(?:text|mathrm)\s*\{([spdf])\}/g, '$1').replace(/\s*[-−]\s*/g, ' − ');
  for (const pattern of [
    /\$\(?n(?:\s*[-−]\s*\d)?\)?\$[spdf](?![A-Za-z])/g, // $n$s, $(n - 1)$d
    /(?<![\w*])\*\(?n(?:\s*[-−]\s*\d)?\)?\*[spdf](?![A-Za-z])/g, // *n*s
    /(?<![A-Za-z\\])\(?n(?:\s*[-−]\s*\d)?\)?\s*\\(?:text|mathrm)\s*\{[spdf]\}/g, // n\text{s} inside math
  ]) {
    for (const match of String(text).matchAll(pattern)) hits.push({ index: match.index, written: match[0], upright: upright(match[0]) });
  }
  return hits.sort((a, b) => a.index - b.index);
}

// ---- an italic "final" or "initial" subscript --------------------------------

/**
 * A bare `f` or `i` subscript in a math span: `E_f`, `n_{i}`, `T_{i,rebar}`.
 * "Final" and "initial" are words, and a descriptive subscript is upright —
 * `E_\text{f}`, `n_\text{i}` (the chapter 6 ruling; 6.2 set them italic and
 * 6.3 upright). A subscript that is itself a variable stays italic, so `_i`
 * passes in a span that sums or multiplies over it (`\sum_i`). Returns
 * `[{ index, written, upright }]`, offsets within `tex`.
 */
export function italicDescriptiveSubscripts(tex) {
  const source = String(tex);
  const indexed = /\\(?:sum|prod)\s*(?:\\limits\s*)?_\s*\{?\s*i\b/.test(source);
  const hits = [];
  for (const match of source.matchAll(/_\s*(?:\{\s*([fi])\s*(?=[,}])|([fi])(?![A-Za-z\\{]))/g)) {
    const letter = match[1] || match[2];
    if (letter === 'i' && indexed) continue;
    hits.push({ index: match.index, written: match[0].replace(/\s+/g, ''), upright: `_\\text{${letter}}` });
  }
  return hits;
}

// ---- a hyphen standing in for a dash ----------------------------------------

// Words no compound ends with: after a hyphen they open a new clause.
const CLAUSE_OPENERS = 'they|it|we|he|she|these|those|this|that|there|which|but|its|their|because|although|however';
const UNIT = '(?:[kMGmnµμc]?(?:Hz|m|g|L|J|K|s|Pa|eV|W|V|mol)|°C|°F|%|nm|pm|atm|torr|bar|ppm|ppb|kJ|kcal|cal|amu|Å)';

/**
 * The source prints a hyphen where it means a dash ("travel with the
 * wave-they all stay", "3 kHz-300 GHz"; 6.1), and a page that copies it
 * prints a compound word that is not one. Two shapes are readable: a hyphen
 * before a word that opens a clause and ends no compound (an em dash), and
 * a hyphen between the two numbers of a range with a unit (an en dash). A
 * dash-hyphen before any other word — "an enormous range-wavelengths of
 * kilometers" — reads as a compound to a pattern and stays with the reader.
 * `prose` is the page with math, code, and link targets blanked. Returns
 * `[{ index, written, dash }]`.
 */
export function dashHyphens(prose) {
  const text = String(prose);
  const hits = [];
  for (const match of text.matchAll(new RegExp(String.raw`[a-z]{2,}-(?:${CLAUSE_OPENERS})\b(?![-’'])`, 'g'))) {
    hits.push({ index: match.index, written: match[0], dash: match[0].replace('-', '—') });
  }
  for (const match of text.matchAll(new RegExp(String.raw`(?<![\w.,/-])\d[\d.,]*(?:\s?${UNIT})?-\d[\d.,]*\s?${UNIT}(?![A-Za-z])`, 'g'))) {
    hits.push({ index: match.index, written: match[0], dash: match[0].replace('-', '–') });
  }
  return hits.sort((a, b) => a.index - b.index);
}

/** `text` with math spans and link and image targets blanked, offsets kept: the prose a dash can stand in. */
export function proseOnly(text) {
  return String(text)
    .replace(/\$\$[\s\S]*?\$\$|(?<![\\$])\$(?!\$)[^$\n]*\$/g, blankPreservingOffsets)
    .replace(/\]\([^)\s]*\)/g, blankPreservingOffsets)
    .replace(/\b(?:src|href)="[^"]*"/g, blankPreservingOffsets)
    .replace(/https?:\/\/\S+/g, blankPreservingOffsets);
}

// ---- a table or figure cited by its source number -----------------------------

/**
 * "Table 5.1", "Figure 6.13": the source's numbers. The site numbers no
 * table or figure, so the number points at nothing a learner can find; a
 * table is named by what it shows and its section ("the table of specific
 * heats of common substances in Section 5.1"; playbook, chapter 5). The
 * footer and Source notes are exempt — they describe the source, and an
 * outside document's "Table 1.3" is its own. Returns `[{ index, written }]`.
 */
export function sourceNumberReferences(text) {
  const visible = String(text)
    .replace(/<small>[\s\S]*?<\/small>/g, blankPreservingOffsets)
    .replace(/\*Source note:\*[^\n]*/g, blankPreservingOffsets)
    .replace(/\*\(Source note:[\s\S]*?\)\*/g, blankPreservingOffsets)
    .replace(/\]\([^)\s]*\)/g, blankPreservingOffsets);
  return [...visible.matchAll(/\b(?:Table|Figure)\s+\d{1,2}\.\d{1,2}\b/g)].map((match) => ({ index: match.index, written: match[0] }));
}

// ---- electron counts in a figure description ----------------------------------

const CORE_ELECTRONS = Object.freeze({ He: 2, Ne: 10, Ar: 18, Kr: 36, Xe: 54, Rn: 86 });
const SUPERSCRIPT_CHARGE = { '⁺': 1, '²⁺': 2, '³⁺': 3, '⁴⁺': 4, '⁻': -1, '²⁻': -2, '³⁻': -3 };
const CONFIGURATION = String.raw`(?:\[(?:He|Ne|Ar|Kr|Xe|Rn)\])?(?:[1-7][spdf][⁰¹²³⁴⁵⁶⁷⁸⁹]+)+`;
let elements = null;
const elementOf = (symbol) => {
  elements ??= loadElements().bySymbol;
  return elements.get(symbol) ?? null;
};

/**
 * Each electron configuration a figure description attaches to an element,
 * whose electrons do not add up to that element's: `[{ written, symbol,
 * expected, counted }]`. Three attachments are read — "96 Cm 7s²5f⁹" (a
 * periodic table read out box by box), "N, 1s²2s²2p³", and "the symbol O and
 * the configuration 1s²2s²2p⁴" — and three ways of writing: a full
 * configuration (from 1s), a noble-gas core in brackets, and an outer
 * configuration, which stands on the noble gas below the element. An ion's
 * superscript charge is taken off.
 *
 * 6.4's long description transcribed curium as "7s²5f⁹": 97 electrons for
 * element 96. That was the source figure's own misprint, kept as printed and
 * named in a Source note, so a miscount the page's `sourceNotes` quote is
 * passed: the description says what the figure prints.
 */
export function miscountedConfigurations(description, sourceNotes = '') {
  const text = String(description ?? '');
  const wrong = [];
  const attached = new RegExp(String.raw`(?:\b(\d{1,3})\s+)?(?<![A-Za-z])([A-Z][a-z]?)(²⁺|³⁺|⁴⁺|⁺|²⁻|³⁻|⁻)?(?:[,:]| and| has|,? the configuration)*\s+(?:the configuration\s+)?(${CONFIGURATION})`, 'gu');
  for (const [, printedNumber, symbol, charge, written] of text.matchAll(attached)) {
    const element = elementOf(symbol);
    const read = readConfiguration(written);
    if (!element || !read) continue;
    const expected = element.number - (SUPERSCRIPT_CHARGE[charge] ?? 0);
    const outer = read.subshells.reduce((sum, subshell) => sum + subshell.count, 0);
    const below = Math.max(0, ...Object.values(CORE_ELECTRONS).filter((count) => count < element.number));
    const counted = read.core ? CORE_ELECTRONS[read.core] + outer
      : /^1s/.test(written) ? outer
        : below + outer;
    const numberWrong = printedNumber && Number(printedNumber) !== element.number;
    if (counted === expected && !numberWrong) continue;
    if (String(sourceNotes).includes(written)) continue;
    wrong.push({ written: `${printedNumber ? `${printedNumber} ` : ''}${symbol}${charge ?? ''} ${written}`, symbol, expected, counted, ...(numberWrong ? { number: element.number } : {}) });
  }
  return wrong;
}
