/**
 * The published quality baselines and how to rewrite them.
 *
 * Two numbers about this corpus are published in places a corpus walk cannot
 * reach on its own: the verified-answers floor (`--min-verified N` in
 * package.json) and the Practice-retrofit backlog (AGENTS.md and the
 * authoring playbook §5). The gates that CHECK those numbers live with the
 * tools that compute them (`lint-all --check-docs`, `verify-answers`); this
 * module is the one place that knows where the numbers are WRITTEN, so the
 * checker and the rewriter (`tools/update-baselines.mjs`) can never disagree
 * about what they point at.
 *
 * Every apply* function is pure text→text and THROWS when its pattern no
 * longer matches: a baseline the tools cannot find must fail loud, never be
 * skipped. If the prose is rephrased, update the pattern here and both the
 * check and the update follow together.
 */

/** Where the Practice backlog is published, and the sentence carrying it. */
export const PRACTICE_BACKLOG_DOCS = [
  ['AGENTS.md', /except one: the (\d+)(\s+)sections still missing/],
  ['docs/authoring-playbook.md', /one warning category\*\*: the (\d+)(\s+)sections/],
];

/** The wired verified-answers floor in package.json. */
export const MIN_VERIFIED_RE = /--min-verified (\d+)/;

/**
 * Playbook §5's detail sentence: the per-book split, the as-of date, and the
 * carried/mapped figures. Groups: (open paren)(book list)(", as of ")(date)
 * ("). ")(carried)(" of the ")(mapped)(tail).
 */
export const PLAYBOOK_DETAIL_RE =
  /(\()([a-z][a-z-]* \d+(?:,\s+[a-z][a-z-]* \d+)*)(,\s+as of )([^)]+)(\)\.\s+)(\d+)( of the )(\d+)( mapped sections now carry the block)/;

export function readMinVerified(packageJsonText) {
  const match = packageJsonText.match(MIN_VERIFIED_RE);
  if (!match) throw new Error('package.json no longer carries a --min-verified floor');
  return Number(match[1]);
}

export function applyMinVerified(packageJsonText, verified) {
  readMinVerified(packageJsonText); // throw before touching anything
  return packageJsonText.replace(MIN_VERIFIED_RE, `--min-verified ${verified}`);
}

/** Read the backlog number a doc currently publishes. */
export function readBacklogCount(text, pattern) {
  const match = text.match(pattern);
  if (!match) throw new Error(`backlog sentence no longer matches ${pattern}`);
  return Number(match[1]);
}

/** Replace the backlog number, preserving the sentence's own line wrapping. */
export function applyBacklogCount(text, pattern, backlog) {
  readBacklogCount(text, pattern); // throw before touching anything
  return text.replace(pattern, (whole) => whole.replace(/\d+/, String(backlog)));
}

/**
 * Rewrite playbook §5's detail sentence from a fresh count.
 * `byBook` is [name, count] pairs in display order; `carried` is derived as
 * mapped − backlog by the caller so the arithmetic lives in one place.
 */
export function applyPlaybookDetail(text, { byBook, date, carried, mapped }) {
  if (!PLAYBOOK_DETAIL_RE.test(text)) {
    throw new Error(`playbook §5 detail sentence no longer matches ${PLAYBOOK_DETAIL_RE}`);
  }
  const books = byBook.map(([name, count]) => `${name} ${count}`).join(', ');
  return text.replace(
    PLAYBOOK_DETAIL_RE,
    (_whole, open, _books, asOf, _date, close, _carried, ofThe, _mapped, tail) =>
      `${open}${books}${asOf}${date}${close}${carried}${ofThe}${mapped}${tail}`,
  );
}

/** Read the current §5 detail values, for the no-op comparison. */
export function readPlaybookDetail(text) {
  const match = text.match(PLAYBOOK_DETAIL_RE);
  if (!match) throw new Error(`playbook §5 detail sentence no longer matches ${PLAYBOOK_DETAIL_RE}`);
  return {
    books: match[2].replace(/\s+/g, ' '),
    date: match[4].trim(),
    carried: Number(match[6]),
    mapped: Number(match[8]),
  };
}
