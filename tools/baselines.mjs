/**
 * The published quality baseline and how to rewrite it.
 *
 * One number about this corpus is published in a place a corpus walk cannot
 * reach on its own: the verified-answers floor (`--min-verified N` in
 * package.json). The gate that CHECKS it lives with the tool that computes it
 * (`verify-answers`); this module is the one place that knows where the number
 * is WRITTEN, so the checker and the rewriter
 * (`tools/update-baselines.mjs`) can never disagree about what they point at.
 *
 * Every apply* function is pure text→text and THROWS when its pattern no
 * longer matches: a baseline the tools cannot find must fail loud, never be
 * skipped. If the prose is rephrased, update the pattern here and both the
 * check and the update follow together.
 *
 * A second baseline lived here until August 9, 2026: the Practice-retrofit
 * backlog, published in AGENTS.md and the playbook while the retrofit ran.
 * It reached zero when the last of the 212 mapped sections landed its block,
 * the lint rule was promoted from a warning to an error, and the published
 * count went with it — a count nothing derives from is exactly the kind of
 * doc AGENTS.md's review rules say to delete rather than maintain.
 */

/** The wired verified-answers floor in package.json. */
export const MIN_VERIFIED_RE = /--min-verified (\d+)/;

export function readMinVerified(packageJsonText) {
  const match = packageJsonText.match(MIN_VERIFIED_RE);
  if (!match) throw new Error('package.json no longer carries a --min-verified floor');
  return Number(match[1]);
}

export function applyMinVerified(packageJsonText, verified) {
  readMinVerified(packageJsonText); // throw before touching anything
  return packageJsonText.replace(MIN_VERIFIED_RE, `--min-verified ${verified}`);
}
