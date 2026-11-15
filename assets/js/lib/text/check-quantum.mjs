/**
 * check-quantum — grading for a typed SET OF QUANTUM NUMBERS
 * (`answerForm="quantum-numbers"`; Chemistry 2e from Section 6.3 on).
 *
 * The key is the source's set in the page's print, n, l, mₗ, mₛ in that
 * order with a space between them: `4 0 0 +1/2`. A question that asks for
 * "a set of quantum numbers for an electron in an orbital of type (x) in a
 * shell with n = 4" fixes the SHELL and the SUBSHELL and nothing else, so
 *
 *   correct    n and l are the key's; mₗ is any whole number from −l to +l
 *              and mₛ is +1/2 or −1/2 — against `2 1 0 +1/2` all six of
 *              `2 1 −1 ±1/2`, `2 1 0 ±1/2`, `2 1 +1 ±1/2` are right
 *   incorrect  anything else, with a sentence that says why and never the
 *              key's n or l, nor the type of orbital: no four values, a
 *              spin that is not ±1/2, a value that is not the kind of
 *              number it must be, an l its own n does not allow, an mₗ its
 *              own l does not allow, a possible set in another shell, a
 *              possible set of the shell in another subshell
 *
 * Nothing is `form`, and the form takes no `accept` list.
 *
 * WHAT A LEARNER MAY TYPE
 *
 *   the four values in order, separated by spaces, commas, or semicolons,
 *   with or without parentheses or braces around them: `4 0 0 +1/2`,
 *   `4, 0, 0, 1/2`, `(4, 0, 0, −1/2)`; or each labelled, in any order of
 *   the labels: `n = 4, l = 0, ml = 0, ms = +1/2`, the labels written
 *   `m_l`, `mₗ`, `ml`, `m l` and `m_s`, `mₛ`, `ms`, `s`, capitals folded.
 *   A spin is `+1/2`, `1/2`, `-1/2`, `−1/2`, `–1/2`, `½`, `+½`, `-½`,
 *   `0.5`, `+0.5`, `-0.5`, `.5`; a minus is a hyphen, an en dash, or
 *   U+2212. The page's TeX print (`$4\ 0\ 0\ {+\frac{1}{2}}$`) and the
 *   source's MathML (`4 0 0 ( 1 )/( 2 )`, the positive spin unsigned) read
 *   too, since the gates pass keys and source answers through this reader.
 */

const LABELS = ['n', 'l', 'ml', 'ms'];

/** One spelling for every way the characters of a set are typed or printed. */
function prepare(raw) {
  return String(raw ?? '').normalize('NFC')
    // The page's TeX: `\frac{1}{2}`, `\tfrac12`, `\ ` and `\,` spaces, `$`.
    .replace(/\\[dt]?frac\s*\{\s*(\d+)\s*\}\s*\{\s*(\d+)\s*\}/g, '$1/$2')
    .replace(/\\[dt]?frac\s*(\d)(\d)/g, '$1/$2')
    .replace(/\\(?:left|right)\b/g, '')
    .replace(/\\[ ,;:!]|\\quad\b|\\qquad\b/g, ' ')
    .replace(/\\(?:text|mathrm|mathit)\b/g, '')
    .replace(/[$]/g, ' ')
    // A group's braces (`{+1/2}`, `m_{l}`) and braces around the whole set.
    .replace(/[{}]/g, ' ')
    // The source's MathML prints ½ as "( 1 )/( 2 )".
    .replace(/\(\s*(\d+)\s*\)\s*\/\s*\(\s*(\d+)\s*\)/g, '$1/$2')
    .replace(/½/g, '1/2')
    .replace(/[⁄∕]/g, '/')
    .replace(/[‐‑‒–—−]/g, '-')
    .replace(/ℓ/g, 'l')
    .replace(/ₗ/g, '_l')
    .replace(/ₛ/g, '_s')
    .replace(/ /g, ' ');
}

const VALUE = /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:\/\d+)?$/;
const VALUE_SRC = '[+-]?\\s*(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:\\s*/\\s*\\d+)?';

/** A value as typed — `+1/2`, `-0.5`, `3` — as a number, or NaN. */
function valueOf(token) {
  const text = String(token).replace(/\s+/g, '');
  if (!VALUE.test(text)) return NaN;
  const [top, bottom] = text.split('/');
  const value = Number(top) / (bottom === undefined ? 1 : Number(bottom));
  return Number.isFinite(value) ? value : NaN;
}

/** The labelled writing: `{ n, l, ml, ms }`, or null when the text is not one. */
function readLabelled(text) {
  const folded = text.toLowerCase()
    // m_l, m l, m _l, mₗ (already m_l) → ml; the same for m_s.
    .replace(/\bm\s*_?\s*\{?\s*([ls])\s*\}?(?=\s*=)/g, 'm$1');
  const pattern = new RegExp(`(?:^|[\\s,;({\\[])(n|l|ml|ms|s)\\s*=\\s*(${VALUE_SRC})(?=$|[\\s,;)}\\]])`, 'g');
  const values = {};
  for (const match of folded.matchAll(pattern)) {
    const label = match[1] === 's' ? 'ms' : match[1];
    if (label in values) return null;
    values[label] = valueOf(match[2]);
  }
  if (!LABELS.every((label) => label in values)) return null;
  // Nothing but the four labelled values and their separators.
  if (!/^[\s,;(){}[\]]*$/.test(folded.replace(pattern, ' '))) return null;
  return values;
}

/**
 * Read a set: `{ n, l, ml, ms }` (numbers, not yet judged), or null when the
 * text is not four readable values.
 */
export function readQuantum(raw) {
  const text = prepare(raw).trim();
  if (!text) return null;
  if (text.includes('=')) return readLabelled(text);
  const bare = text
    .replace(/^[([{]\s*/, '').replace(/\s*[)\]}]\s*$/, '')
    // A sign set apart from its value ("+ ( 1 )/( 2 )", the source's table).
    .replace(/([+-])\s+(?=[\d.])/g, '$1')
    .replace(/\s*\/\s*/g, '/');
  const tokens = bare.split(/[\s,;]+/).filter(Boolean);
  if (tokens.length !== 4) return null;
  const values = tokens.map(valueOf);
  if (values.some(Number.isNaN)) return null;
  const [n, l, ml, ms] = values;
  return { n, l, ml, ms };
}

const isSpin = (ms) => Math.abs(Math.abs(ms) - 0.5) < 1e-9;
const isWhole = (value) => Number.isInteger(value);

/** Whether a read set is a possible one: n ≥ 1, 0 ≤ l < n, |mₗ| ≤ l, mₛ = ±1/2, all whole but the spin. */
export function isPossibleSet(set) {
  return Boolean(set) && isSpin(set.ms) && isWhole(set.n) && set.n >= 1 && isWhole(set.l) && set.l >= 0
    && isWhole(set.ml) && set.l < set.n && Math.abs(set.ml) <= set.l;
}

export const QUANTUM_UNREAD = 'That does not read as a set of quantum numbers. Type the four values in the order n, l, mₗ, mₛ, separated by spaces.';
export const QUANTUM_SPIN = 'The spin quantum number mₛ is +1/2 or −1/2.';
export const QUANTUM_N = 'The principal quantum number n is a whole number, 1 or greater.';
export const QUANTUM_L = 'The angular momentum quantum number l is a whole number, 0 or greater.';
export const QUANTUM_ML = 'The magnetic quantum number mₗ is a whole number.';
export const QUANTUM_L_RANGE = 'In a shell, l runs from 0 to n − 1: the set you entered has an l its own n does not allow.';
export const QUANTUM_ML_RANGE = 'mₗ runs from −l to +l: the set you entered has an mₗ its own l does not allow.';
export const QUANTUM_SHELL = 'That is a possible set of quantum numbers, but not for the shell the question names.';
export const QUANTUM_SUBSHELL = 'That is a possible set for this shell, but not for this type of orbital.';

/** @returns {{ status: 'empty'|'correct'|'incorrect', message?: string }} */
export function checkQuantum(input, answer) {
  if (!String(input ?? '').trim()) return { status: 'empty' };
  const key = readQuantum(answer);
  if (!isPossibleSet(key)) return { status: 'incorrect' };
  const typed = readQuantum(input);
  if (!typed) return { status: 'incorrect', message: QUANTUM_UNREAD };
  if (!isSpin(typed.ms)) return { status: 'incorrect', message: QUANTUM_SPIN };
  if (!isWhole(typed.n) || typed.n < 1) return { status: 'incorrect', message: QUANTUM_N };
  if (!isWhole(typed.l) || typed.l < 0) return { status: 'incorrect', message: QUANTUM_L };
  if (!isWhole(typed.ml)) return { status: 'incorrect', message: QUANTUM_ML };
  if (typed.l >= typed.n) return { status: 'incorrect', message: QUANTUM_L_RANGE };
  if (Math.abs(typed.ml) > typed.l) return { status: 'incorrect', message: QUANTUM_ML_RANGE };
  if (typed.n !== key.n) return { status: 'incorrect', message: QUANTUM_SHELL };
  if (typed.l !== key.l) return { status: 'incorrect', message: QUANTUM_SUBSHELL };
  return { status: 'correct' };
}

const printed = (value) => (value < 0 ? `−${-value}` : `${value}`);
const signed = (value) => (value > 0 ? `+${value}` : printed(value));
const spin = (ms) => (isSpin(ms) ? `${ms > 0 ? '+' : '−'}1/2` : signed(ms));

/** What the field shows it has read ("n = 4, l = 0, mₗ = 0, mₛ = +1/2"), or ''. */
export function previewQuantum(input) {
  const set = readQuantum(input);
  if (!set) return '';
  return `n = ${printed(set.n)}, l = ${printed(set.l)}, mₗ = ${signed(set.ml)}, mₛ = ${spin(set.ms)}`;
}

/**
 * The set's canonical spelling for a gate, `4 0 0 +1/2`, or null when the
 * text is not four values with a spin of ±1/2. A gate compares SETS: the key
 * is the source's set, so another possible set of the same n and l is
 * another key.
 */
export function quantumCanon(text) {
  const set = readQuantum(text);
  if (!set || !isSpin(set.ms) || ![set.n, set.l, set.ml].every(isWhole)) return null;
  return `${set.n} ${set.l} ${set.ml} ${set.ms > 0 ? '+' : '-'}1/2`;
}

/** Whether a text reads as one set of quantum numbers (what the lint calls a set key). */
export const isQuantumSet = (text) => quantumCanon(text) !== null;

/** Why a quantum-number KEY cannot be graded, or null (the lint). */
export function quantumKeyProblem(answer) {
  const set = readQuantum(answer);
  if (!set) return `${JSON.stringify(answer)} does not read as a set of quantum numbers`;
  if (!/^[1-9]\d* \d+ (?:0|[+−]?[1-9]\d*) [+−]1\/2$/.test(String(answer))) {
    return `${JSON.stringify(answer)} is not written in print — n, l, mₗ, and mₛ in that order, one space between them, a negative value with the minus sign U+2212 and the spin signed: 4 0 0 +1/2, 2 1 −1 −1/2`;
  }
  if (set.l >= set.n) return `${JSON.stringify(answer)}: l runs from 0 to n − 1`;
  if (Math.abs(set.ml) > set.l) return `${JSON.stringify(answer)}: mₗ runs from −l to +l`;
  return null;
}
