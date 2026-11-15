/**
 * check-config — grading for a typed ELECTRON CONFIGURATION
 * (`answerForm="configuration"`; Chemistry 2e from Section 6.4 on).
 *
 * The key is written in the book's print, a superscript count after each
 * subshell — `1s²2s²2p⁶3s²3p²` — and may begin with a noble-gas core,
 * `[Kr]5s²4d¹⁰`. A learner types what a plain keyboard gives:
 *
 *   `1s2 2s2 2p6`, `1s^2 2s^2 2p^6`, `1s²2s²2p⁶`, `1S2 2S2 2P6`, and the
 *   unspaced `1s22s22p63s23p64s23d10`
 *
 * The unspaced writing reads one way: a shell number is one digit and is
 * always followed by its subshell letter, so in a run of digits between two
 * letters the LAST digit is the next shell's number and the digits before it
 * are the count. A space, a comma, or a superscript run ends a count.
 *
 * WHAT IS COMPARED — the electrons in each subshell, with any noble-gas
 * core written out. The ORDER of the subshells is free: the filling order
 * `4s²3d⁶` and the shell order `3d⁶4s²` are one configuration.
 *
 *   correct    the key's electrons in the key's subshells; against a key
 *              WITH a core, the core form and the full expansion alike
 *   form       against a key with NO core, the right configuration written
 *              with a noble-gas core (the item asks every subshell)
 *   incorrect  anything else, with a sentence that says why and never the
 *              answer: a subshell that does not exist, one over its
 *              capacity, the wrong number of electrons, the right number in
 *              the wrong subshells, or a line that is no configuration
 */

const CAPACITY = Object.freeze({ s: 2, p: 6, d: 10, f: 14 });
const LETTERS = 'spdf';
const NOBLE = Object.freeze({ He: 2, Ne: 10, Ar: 18, Kr: 36, Xe: 54, Rn: 86 });
/** Each noble gas's configuration as the core it stands for. */
const CORES = (() => {
  const add = (base, more) => ({ ...base, ...more });
  const he = { '1s': 2 };
  const ne = add(he, { '2s': 2, '2p': 6 });
  const ar = add(ne, { '3s': 2, '3p': 6 });
  const kr = add(ar, { '3d': 10, '4s': 2, '4p': 6 });
  const xe = add(kr, { '4d': 10, '5s': 2, '5p': 6 });
  const rn = add(xe, { '4f': 14, '5d': 10, '6s': 2, '6p': 6 });
  return Object.freeze({ He: he, Ne: ne, Ar: ar, Kr: kr, Xe: xe, Rn: rn });
})();

const SUPERSCRIPTS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const SUPERSCRIPT_RUN = /[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g;

/** The subshells in shell order, then by l: what canon and the preview sort by. */
const ORDER = (label) => Number(label[0]) * 10 + LETTERS.indexOf(label[1]);

/**
 * Read a configuration: `{ core, subshells: [{ label, n, letter, count }] }`
 * in the order written, or null when the text is not one. A subshell that
 * does not exist or holds too many electrons still reads — the grader says
 * what is wrong with it.
 */
export function readConfiguration(raw) {
  let text = String(raw ?? '').normalize('NFC')
    // The source's print and TeX: braces, `\text`, `$`, emphasis stars.
    .replace(/\\(?:text|mathrm|mathit)\b|[{}$*]/g, '')
    // A superscript run is a count and ends there: ";" marks the end.
    .replace(SUPERSCRIPT_RUN, (run) => `^${[...run].map((c) => SUPERSCRIPTS.indexOf(c)).join('')};`)
    // A count marked by ^ in the source ("^{2}", braces gone) is whole too.
    .replace(/\^(\d+)(?=\s)/g, '^$1;')
    // A space, comma, or period between two digits ends the first's count.
    .replace(/(\d)[\s,.;]+(?=\d)/g, '$1;')
    .replace(/[\s,.;]+(?=\[|$)/g, ';')
    .replace(/[\s,]+/g, '')
    .trim();
  text = text.replace(/;+$/, '');
  if (!text) return null;
  let core = null;
  const coreMatch = /^\[?([A-Za-z]{2})\]?(?=\d|$)/.exec(text);
  if (coreMatch) {
    const symbol = Object.keys(NOBLE).find((gas) => gas.toLowerCase() === coreMatch[1].toLowerCase());
    if (!symbol) return null;
    core = symbol;
    text = text.slice(coreMatch[0].length).replace(/^;/, '');
  }
  const subshells = [];
  let i = 0;
  while (i < text.length) {
    if (text[i] === ';') { i += 1; continue; }
    const head = /^(\d)([spdfSPDF])/.exec(text.slice(i));
    if (!head) return null;
    i += 2;
    if (text[i] === '^') i += 1;
    const digits = /^\d+/.exec(text.slice(i))?.[0] ?? '';
    const ended = text[i + digits.length];
    // Digits followed by a letter: the last one is the next shell's number.
    const countDigits = ended !== undefined && ended !== ';' && /[spdfSPDF]/.test(ended) ? digits.slice(0, -1) : digits;
    if (!countDigits) return null;
    i += countDigits.length;
    const n = Number(head[1]);
    const letter = head[2].toLowerCase();
    subshells.push({ label: `${n}${letter}`, n, letter, count: Number(countDigits) });
  }
  if (!subshells.length && !core) return null;
  return { core, subshells };
}

/** The subshell a written label names, or why it cannot exist. */
function missingSubshell({ n, letter }) {
  const allowed = LETTERS.slice(0, Math.min(n, 4));
  if (n >= 1 && allowed.includes(letter)) return null;
  if (n === 0) return 'There is no shell numbered 0: shells are numbered from 1.';
  const names = [...allowed];
  const list = names.length === 1 ? 'an s subshell' : `${names.slice(0, -1).join(', ')}${names.length > 2 ? ',' : ''} and ${names[names.length - 1]} subshells`;
  return `There is no ${n}${letter} subshell: the n = ${n} shell has only ${list}.`;
}

const overCapacity = ({ letter, count }) => (count > CAPACITY[letter]
  ? `${letter === 's' || letter === 'f' ? 'An' : 'A'} ${letter} subshell holds at most ${CAPACITY[letter]} electrons.`
  : null);

/** The electrons in each subshell, the core written out: `{ '1s': 2, … }`, or null when a subshell repeats. */
function expanded(config) {
  const out = { ...(config.core ? CORES[config.core] : {}) };
  const written = new Set();
  for (const { label, count } of config.subshells) {
    if (written.has(label) || (config.core && out[label] !== undefined)) return null;
    written.add(label);
    if (count) out[label] = count;
  }
  return out;
}

const total = (electrons) => Object.values(electrons).reduce((a, b) => a + b, 0);
const sameElectrons = (a, b) => {
  const labels = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...labels].every((label) => (a[label] || 0) === (b[label] || 0));
};

export const CONFIGURATION_UNREAD = 'That does not read as an electron configuration. Type each subshell as its shell number and letter followed by its number of electrons, with a space between subshells.';
export const CONFIGURATION_CORE = 'That is the right configuration — now write out every subshell, without the noble-gas core.';
export const CONFIGURATION_REPEATED = 'Write each subshell once, with all of its electrons — a noble-gas core already holds its own subshells.';
export const CONFIGURATION_DISTRIBUTION = 'That has the right number of electrons, but not in the subshells they occupy.';
export const CONFIGURATION_COUNT = 'That configuration does not hold the number of electrons this atom or ion has.';

/** @returns {{ status: 'empty'|'correct'|'form'|'incorrect', message?: string }} */
export function checkConfiguration(input, answer) {
  if (!String(input ?? '').trim()) return { status: 'empty' };
  const key = readConfiguration(answer);
  const keyElectrons = key && expanded(key);
  if (!keyElectrons) return { status: 'incorrect' };
  const typed = readConfiguration(input);
  if (!typed) return { status: 'incorrect', message: CONFIGURATION_UNREAD };
  for (const subshell of typed.subshells) {
    const problem = missingSubshell(subshell);
    if (problem) return { status: 'incorrect', message: problem };
  }
  for (const subshell of typed.subshells) {
    const problem = overCapacity(subshell);
    if (problem) return { status: 'incorrect', message: problem };
  }
  const electrons = expanded(typed);
  if (!electrons) return { status: 'incorrect', message: CONFIGURATION_REPEATED };
  if (sameElectrons(electrons, keyElectrons)) {
    if (typed.core && !key.core) return { status: 'form', message: CONFIGURATION_CORE };
    return { status: 'correct' };
  }
  if (total(electrons) === total(keyElectrons)) return { status: 'incorrect', message: CONFIGURATION_DISTRIBUTION };
  return { status: 'incorrect', message: CONFIGURATION_COUNT };
}

/** A configuration in the book's print, as written: `1s²2s²2p⁶`, `[Kr]5s²4d¹⁰`. */
export function prettyConfiguration(config) {
  const sup = (n) => [...String(n)].map((d) => SUPERSCRIPTS[d]).join('');
  return `${config.core ? `[${config.core}]` : ''}${config.subshells.map(({ label, count }) => `${label}${sup(count)}`).join('')}`;
}

/** What the field shows it has read, or ''. */
export function previewConfiguration(input) {
  const config = readConfiguration(input);
  return config && config.subshells.length ? prettyConfiguration(config) : '';
}

/**
 * The key's canonical spelling for a gate: its core, if it prints one, then
 * its subshells in shell order — a key printed in filling order and the
 * source's shell order are one key; `[Ne]3s²` and `1s²2s²2p⁶3s²` are two.
 */
export function configurationCanon(text) {
  const config = readConfiguration(text);
  if (!config || !config.subshells.length || !expanded(config)) return null;
  const sorted = [...config.subshells].sort((a, b) => ORDER(a.label) - ORDER(b.label));
  return `${config.core ? `[${config.core}]` : ''}${sorted.map(({ label, count }) => `${label}${count}`).join(' ')}`;
}

/** Whether a text reads as a configuration of two or more subshells, or a core and one (what the lint calls a configuration key). */
export function isConfiguration(text) {
  const config = readConfiguration(text);
  return Boolean(config) && (config.subshells.length >= 2 || (config.core && config.subshells.length >= 1));
}

/** Why a configuration KEY cannot be graded, or null (the lint). */
export function configurationKeyProblem(answer) {
  const config = readConfiguration(answer);
  if (!config || !config.subshells.length) return `${JSON.stringify(answer)} does not read as an electron configuration`;
  if (!/^(?:\[(?:He|Ne|Ar|Kr|Xe|Rn)\])?(?:[1-7][spdf][⁰¹²³⁴⁵⁶⁷⁸⁹]+)+$/.test(String(answer).trim())) {
    return `${JSON.stringify(answer)} is not written in print — each subshell followed by its count in superscript digits, no spaces: 1s²2s²2p⁶ (a core in square brackets, [Ne]3s²)`;
  }
  for (const subshell of config.subshells) {
    const problem = missingSubshell(subshell) || overCapacity(subshell);
    if (problem) return `${JSON.stringify(answer)}: ${problem}`;
  }
  if (!expanded(config)) return `${JSON.stringify(answer)} writes a subshell twice`;
  return null;
}
