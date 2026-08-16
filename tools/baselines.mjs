/**
 * The published quality baselines and how to rewrite them.
 *
 * Three numbers about this corpus are published in a place a corpus walk
 * cannot reach on its own, all wired into package.json scripts: the
 * verified-answers floor (`--min-verified N`), the replayed-spans floor
 * (`--min-replayed N`), and the answer-ledger floor (`--min-exercises N`).
 * The gates that CHECK them live with the tools that compute them
 * (`verify-answers`, `verify-replay`, `answer-ledger check`); this module is
 * the one place that knows where each number is WRITTEN, so the checkers and
 * the rewriter (`tools/update-baselines.mjs`) can never disagree about what
 * they point at.
 *
 * The baselines ratchet differently, on purpose. `--min-verified` is an EXACT
 * match: the cross-check's job is to read a known set of fill-ins, so a move
 * in either direction is news. `--min-replayed` and `--min-exercises` are
 * FLOORS: both counts rise with ordinary authoring (spans with any form
 * predicate that admits more spellings, exercises with every new section),
 * and only a DROP means a gate has gone quiet on part of the corpus. An
 * exact match there would go red on unrelated commits and be bumped without
 * being read, which is how a ratchet becomes a rubber stamp.
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

/** The wired replayed-spans floor in package.json. */
export const MIN_REPLAYED_RE = /--min-replayed (\d+)/;

export function readMinReplayed(packageJsonText) {
  const match = packageJsonText.match(MIN_REPLAYED_RE);
  if (!match) throw new Error('package.json no longer carries a --min-replayed floor');
  return Number(match[1]);
}

export function applyMinReplayed(packageJsonText, replayed) {
  readMinReplayed(packageJsonText); // throw before touching anything
  return packageJsonText.replace(MIN_REPLAYED_RE, `--min-replayed ${replayed}`);
}

/** The wired answer-ledger floor in package.json. */
export const MIN_EXERCISES_RE = /--min-exercises (\d+)/;

export function readMinExercises(packageJsonText) {
  const match = packageJsonText.match(MIN_EXERCISES_RE);
  if (!match) throw new Error('package.json no longer carries a --min-exercises floor');
  return Number(match[1]);
}

export function applyMinExercises(packageJsonText, exercises) {
  readMinExercises(packageJsonText); // throw before touching anything
  return packageJsonText.replace(MIN_EXERCISES_RE, `--min-exercises ${exercises}`);
}

/**
 * The lines each tool prints its count on, and the pattern that reads it.
 * Both tools print ONLY on their success path, so a failed run has no number
 * to read — the caller must check the exit code before ever matching these.
 */
export const BASELINE_SOURCES = Object.freeze([
  {
    name: '--min-verified',
    label: 'verify-answers',
    tool: 'tools/verify-answers.mjs',
    pattern: /(\d+)\/\d+ fill-ins mathematically verified/,
    // The fixed half of that pattern, so a test can assert the TOOL still
    // writes this wording rather than only that the pattern parses a fixture
    // the test wrote itself.
    literal: 'fill-ins mathematically verified',
    read: readMinVerified,
    apply: applyMinVerified,
    fell: 'verified count fell',
    why: 'That is coverage shrinking, not growth.',
  },
  {
    name: '--min-replayed',
    label: 'verify-replay',
    tool: 'tools/verify-replay.mjs',
    pattern: /replay: (\d+) scalar printed spans replayed/,
    literal: 'scalar printed spans replayed',
    read: readMinReplayed,
    apply: applyMinReplayed,
    fell: 'replayed span count fell',
    why: 'That is the replay gate reading less of the corpus than it used to.',
  },
  {
    name: '--min-exercises',
    label: 'answer-ledger',
    tool: 'tools/answer-ledger.mjs',
    // The ledger CLI takes a mode before the root; the runner splices these in.
    args: ['check'],
    pattern: /answer ledger: (\d+) unique exercises, every one carries a verification record/,
    literal: 'unique exercises, every one carries a verification record',
    read: readMinExercises,
    apply: applyMinExercises,
    fell: 'unique exercise count fell',
    why: 'That is extraction reading less of the corpus than it used to, or content being removed.',
  },
]);

/**
 * What an update would do, decided from text and numbers alone so the guards
 * are testable without a corpus-wide run.
 *
 * `moved` is every baseline whose measurement differs from what package.json
 * carries, `dropped` is the subset that FELL, and `rewritten` is the whole
 * file with every moved number applied in one pass. The caller writes once,
 * or reports "already current" when nothing moved — which is why this returns
 * both lists rather than deciding for it: the previous updater exited on the
 * first unchanged number and could never have reached a second baseline.
 */
export function planBaselineUpdate(packageJsonText, measurements) {
  const baselines = BASELINE_SOURCES.map((source) => ({
    ...source,
    current: source.read(packageJsonText),
    measured: measurements[source.name],
  }));
  for (const baseline of baselines) {
    if (!Number.isInteger(baseline.measured)) {
      throw new Error(`no measurement supplied for ${baseline.name}`);
    }
  }
  const moved = baselines.filter(({ current, measured }) => measured !== current);
  return {
    baselines,
    moved,
    dropped: baselines.filter(({ current, measured }) => measured < current),
    rewritten: moved.reduce((text, { apply, measured }) => apply(text, measured), packageJsonText),
  };
}
