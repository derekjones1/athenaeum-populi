/**
 * The ways `verify:typed` (typed-keys.mjs) types an electron configuration,
 * an ordering, and a set of quantum numbers — kept here, apart from the
 * browser driver, so a test can read them.
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
 *   quantum-numbers pass A: the four values with a space between them, the
 *                   spin as 1/2 or -1/2 — what the stem's closing sentence
 *                   asks ("4 0 0 1/2"). --variants: the other spin, another
 *                   allowed mₗ (where l > 0), the comma list in parentheses,
 *                   the labelled writing, the spin as a decimal — each right
 *                   — and four expected refusals, typed so each message is
 *                   seen: an l its own n does not allow, an mₗ its own l
 *                   does not allow, a possible set of another shell, and
 *                   one of the key's shell in another subshell.
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

/** `[{ typed, kind }]` for a quantum-number key ("4 0 0 +1/2"), pass A or B; a kind that starts "wrong-" is an expected refusal. */
export function quantumWritings(key, { variants = false } = {}) {
  const [n, l, ml, ms] = key.replace(/−/g, '-').split(' ');
  const ascii = (value) => value.replace(/^\+/, '');
  const set = (...values) => values.map(ascii).join(' ');
  if (!variants) return [{ typed: set(n, l, ml, ms), kind: 'spaced' }];
  const N = Number(n);
  const L = Number(l);
  const other = ms.startsWith('-') ? '1/2' : '-1/2';
  const out = [{ typed: set(n, l, ml, other), kind: 'other-spin' }];
  if (L > 0) out.push({ typed: set(n, l, String(Number(ml) === L ? -L : L), ms), kind: 'other-ml' });
  out.push(
    { typed: `(${[n, l, ml, ms].map(ascii).join(', ')})`, kind: 'comma-list' },
    { typed: `n = ${n}, l = ${l}, ml = ${ascii(ml)}, ms = ${ascii(ms)}`, kind: 'labelled' },
    { typed: set(n, l, ml, ms.startsWith('-') ? '-0.5' : '0.5'), kind: 'decimal-spin' },
    { typed: set(n, n, '0', ms), kind: 'wrong-l-for-n' },
    { typed: set(n, l, String(L + 1), ms), kind: 'wrong-ml-for-l' },
    { typed: set(String(N + 1), l, ml, ms), kind: 'wrong-shell' },
  );
  if (N >= 2) out.push({ typed: set(n, String(L === 0 ? 1 : 0), '0', ms), kind: 'wrong-subshell' });
  return out;
}
