import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  BASELINE_SOURCES, MIN_EXERCISES_RE, MIN_REPLAYED_RE, MIN_VERIFIED_RE,
  applyMinExercises, applyMinReplayed, applyMinVerified,
  planBaselineUpdate, readMinExercises, readMinReplayed, readMinVerified,
} from './baselines.mjs';

const read = (name) => readFileSync(new URL(`../../${name}`, import.meta.url), 'utf8');

// The fixtures are verbatim slices of the real file, so a test failure here
// means the real script line and the shared pattern have genuinely diverged.
const VERIFIED_FIXTURE = '"verify:answers": "node tools/verify/verify-answers.mjs content --min-verified 2587",';
const REPLAYED_FIXTURE = '"verify:replay": "node tools/verify/verify-replay.mjs content --min-replayed 5997",';
const LEDGER_FIXTURE = '"verify:ledger": "node tools/verify/answer-ledger.mjs check content --min-exercises 6806 --max-unverifiable 0",';
const ALL_FIXTURE = `${VERIFIED_FIXTURE}\n  ${REPLAYED_FIXTURE}\n  ${LEDGER_FIXTURE}`;
const CURRENT = { '--min-verified': 2587, '--min-replayed': 5997, '--min-exercises': 6806 };

test('the min-verified floor reads and rewrites', () => {
  assert.equal(readMinVerified(VERIFIED_FIXTURE), 2587);
  const next = applyMinVerified(VERIFIED_FIXTURE, 2701);
  assert.match(next, /--min-verified 2701/);
  assert.doesNotMatch(next, /2587/);
});

test('the min-replayed floor reads and rewrites', () => {
  assert.equal(readMinReplayed(REPLAYED_FIXTURE), 5997);
  const next = applyMinReplayed(REPLAYED_FIXTURE, 6100);
  assert.match(next, /--min-replayed 6100/);
  assert.doesNotMatch(next, /5997/);
});

test('the min-exercises floor reads and rewrites, leaving the ceiling alone', () => {
  assert.equal(readMinExercises(LEDGER_FIXTURE), 6806);
  const next = applyMinExercises(LEDGER_FIXTURE, 6900);
  assert.match(next, /--min-exercises 6900/);
  assert.doesNotMatch(next, /6806/);
  // --max-unverifiable is a hand-owned policy ceiling, not a measured
  // baseline; the rewrite must never touch it.
  assert.match(next, /--max-unverifiable 0/);
});

test('a rephrased script line fails loud instead of being skipped', () => {
  assert.throws(
    () => applyMinVerified('"verify:answers": "node tools/verify/verify-answers.mjs content"', 1),
    /no longer carries/,
  );
  assert.throws(
    () => applyMinReplayed('"verify:replay": "node tools/verify/verify-replay.mjs content"', 1),
    /no longer carries/,
  );
  assert.throws(
    () => applyMinExercises('"verify:ledger": "node tools/verify/answer-ledger.mjs check content"', 1),
    /no longer carries/,
  );
});

test('the live package.json still matches every shared pattern', () => {
  // The fixtures above are copies; this pins the patterns to the real script
  // lines so a rewrite of package.json cannot silently detach any gate.
  const text = read('package.json');
  assert.ok(MIN_VERIFIED_RE.test(text), 'package.json still matches its verified-answers pattern');
  assert.ok(MIN_REPLAYED_RE.test(text), 'package.json still matches its replay pattern');
  assert.ok(MIN_EXERCISES_RE.test(text), 'package.json still matches its answer-ledger pattern');
});

// ---- the guards, decided from text and numbers alone -----------------------
// Structure, not decoration: the previous updater exited 0 the moment
// --min-verified was unchanged — the normal end-of-session case — so a second
// baseline could never have been reached, let alone guarded.
test('an update plan considers every baseline, not just the first', async (t) => {
  await t.test('nothing moved is nothing to write', () => {
    const plan = planBaselineUpdate(ALL_FIXTURE, { ...CURRENT });
    assert.equal(plan.moved.length, 0);
    assert.equal(plan.dropped.length, 0);
    assert.equal(plan.rewritten, ALL_FIXTURE, 'an unchanged plan rewrites nothing');
  });

  await t.test('a LATER baseline still moves when the first is unchanged', () => {
    const plan = planBaselineUpdate(ALL_FIXTURE, { ...CURRENT, '--min-exercises': 6900 });
    assert.deepEqual(plan.moved.map((b) => b.name), ['--min-exercises']);
    assert.match(plan.rewritten, /--min-exercises 6900/);
    assert.match(plan.rewritten, /--min-verified 2587/, 'the unchanged numbers are left alone');
    assert.match(plan.rewritten, /--min-replayed 5997/);
  });

  await t.test('all moved baselines are rewritten in one pass', () => {
    const plan = planBaselineUpdate(ALL_FIXTURE, {
      '--min-verified': 2701, '--min-replayed': 6100, '--min-exercises': 6900,
    });
    assert.equal(plan.moved.length, 3);
    assert.match(plan.rewritten, /--min-verified 2701/);
    assert.match(plan.rewritten, /--min-replayed 6100/);
    assert.match(plan.rewritten, /--min-exercises 6900/);
  });

  await t.test('each drop is reported on its own, in any baseline', () => {
    const verifiedFell = planBaselineUpdate(ALL_FIXTURE, { ...CURRENT, '--min-verified': 2500 });
    assert.deepEqual(verifiedFell.dropped.map((b) => b.name), ['--min-verified']);
    const ledgerFell = planBaselineUpdate(ALL_FIXTURE, { ...CURRENT, '--min-exercises': 6500 });
    assert.deepEqual(ledgerFell.dropped.map((b) => b.name), ['--min-exercises']);
    const allFell = planBaselineUpdate(ALL_FIXTURE, {
      '--min-verified': 2500, '--min-replayed': 5000, '--min-exercises': 6500,
    });
    assert.equal(allFell.dropped.length, 3, 'a legitimate drop in one is not permission to lose another');
  });

  await t.test('a missing measurement is an error, never a silent zero', () => {
    assert.throws(() => planBaselineUpdate(ALL_FIXTURE, { '--min-verified': 2587 }),
      /no measurement supplied for --min-replayed/);
    assert.throws(() => planBaselineUpdate(ALL_FIXTURE, { '--min-verified': 2587, '--min-replayed': 5997 }),
      /no measurement supplied for --min-exercises/);
  });
});

// ---- the stdout coupling ---------------------------------------------------
// The updater reads each count out of the tool's own success line. That
// coupling was untested, so a reworded summary would have made the updater
// report "could not read the count" against a run that in fact succeeded.
test('each baseline pattern matches the line its tool actually prints', async (t) => {
  const SAMPLES = {
    '--min-verified': '✓ answer cross-check: 2988/6016 fill-ins mathematically verified (re-expression 2111); 3028 out of scope; 0 failure(s)',
    '--min-replayed': '✓ question-math replay: 5997 scalar printed spans replayed across 268 files (source + normalized spellings), none accepted (59 recorded sound coincidences)',
    '--min-exercises': '✓ answer ledger: 6806 unique exercises, every one carries a verification record (6806 independently re-derived, 0 unverifiable from the exercise text alone)',
  };
  for (const source of BASELINE_SOURCES) {
    await t.test(source.label, () => {
      const matched = SAMPLES[source.name].match(source.pattern);
      assert.ok(matched, `${source.label}'s sample summary line still parses`);
      assert.ok(Number.isInteger(Number(matched[1])), 'the captured group is the count');
      // …and the sample is not a fossil: the TOOL still writes that wording,
      // so a reworded summary fails here instead of at the next session's
      // baseline run.
      assert.ok(read(source.tool).includes(source.literal),
        `${source.tool} still prints ${JSON.stringify(source.literal)}`);
      assert.ok(SAMPLES[source.name].includes(source.literal),
        'the sample line and the tool agree about the wording');
    });
  }
});
