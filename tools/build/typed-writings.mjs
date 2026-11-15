/**
 * The ways `verify:typed` (typed-keys.mjs) types an electron configuration
 * and an ordering — kept here, apart from the browser driver, so a test can
 * read them.
 *
 *   configuration   pass A: each subshell and its count as plain digits, a
 *                   space between subshells — what the stem's closing
 *                   sentence asks ("1s2 2s2 2p6"); a core as typed, "[Kr]".
 *                   --variants: the unspaced writing ("1s22s22p6"), the
 *                   caret writing ("1s^2 2s^2 2p^6"), and the shell order
 *                   ("3d6 4s2" for the key's "4s²3d⁶").
 *   ordering        pass A: the members with `<` between them, each charge
 *                   after ^ ("Si^4+ < Al^3+"). --variants: the same order
 *                   from the other end with `>` and bare charges ("K+ >
 *                   Ca2+"), and the comma writing ("Si4+, Al3+, …"), which the
 *                   grader refuses (an ordering needs < or >): typed so
 *                   the refusal and its message are seen.
 */
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const LETTERS = 'spdf';
const plainSup = (run) => [...run].map((c) => (c === '⁺' ? '+' : c === '⁻' ? '-' : SUP.indexOf(c))).join('');

/** A configuration key's subshells: `{ core, subshells: [[label, count]] }`. */
function subshellsOf(key) {
  const core = /^\[([A-Z][a-z])\]/.exec(key)?.[1] ?? null;
  const subshells = [...key.matchAll(/(\d[spdf])([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g)].map((m) => [m[1], plainSup(m[2])]);
  return { core, subshells };
}

/** `[{ typed, kind }]` for a configuration key, pass A (`variants` false) or B. */
export function configurationWritings(key, { variants = false } = {}) {
  const { core, subshells } = subshellsOf(key);
  const head = core ? `[${core}] ` : '';
  const spaced = (list, caret = '') => head + list.map(([label, count]) => `${label}${caret}${count}`).join(' ');
  if (!variants) return [{ typed: spaced(subshells), kind: 'spaced' }];
  const shellOrder = [...subshells].sort(([a], [b]) => (Number(a[0]) * 10 + LETTERS.indexOf(a[1])) - (Number(b[0]) * 10 + LETTERS.indexOf(b[1])));
  return [
    { typed: (core ? `[${core}]` : '') + subshells.map(([label, count]) => `${label}${count}`).join(''), kind: 'unspaced' },
    { typed: spaced(subshells, '^'), kind: 'caret' },
    { typed: spaced(shellOrder), kind: 'shell-order' },
  ];
}

/** `[{ typed, kind }]` for an ordering key, pass A or B. */
export function orderingWritings(key, { variants = false } = {}) {
  const members = key.split('<').map((member) => member.trim());
  const ascii = (member, caret) => member.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/g, (run) => `${caret ? '^' : ''}${plainSup(run)}`);
  if (!variants) return [{ typed: members.map((member) => ascii(member, true)).join(' < '), kind: 'less-than' }];
  return [
    { typed: [...members].reverse().map((member) => ascii(member, false)).join(' > '), kind: 'greater-than' },
    { typed: members.map((member) => ascii(member, false)).join(', '), kind: 'comma-list' },
  ];
}
