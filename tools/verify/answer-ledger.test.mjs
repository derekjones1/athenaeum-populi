import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { EXERCISE_KINDS, exerciseHash, extractExercises } from './answer-ledger.mjs';

const TOOL = new URL('./answer-ledger.mjs', import.meta.url).pathname;

const scratch = (files) => {
  const dir = mkdtempSync(join(tmpdir(), 'ledger-'));
  mkdirSync(join(dir, 'content'), { recursive: true });
  for (const [name, body] of Object.entries(files)) {
    writeFileSync(join(dir, 'content', name), body);
  }
  return dir;
};

const PAGE = `---
title: Sample
---

## Practice

{{< fillin
  question="Solve $2x=8$."
  answer="4"
>}}

{{< multiplechoice question="Which is prime?" answer="7" >}}
7
9
{{< /multiplechoice >}}
`;

test('identity ignores reflowing but not a single semantic character', () => {
  const base = '{{< fillin question="Solve $2x=8$." answer="4" >}}';
  const reflowed = '{{< fillin\n  question="Solve $2x=8$."\n  answer="4"\n>}}';
  assert.equal(exerciseHash(reflowed), exerciseHash(base), 'whitespace is not identity');
  assert.notEqual(exerciseHash(base.replace('"4"', '"5"')), exerciseHash(base), 'the answer is identity');
  assert.notEqual(exerciseHash(base.replace('2x=8', '2x=9')), exerciseHash(base), 'the question is identity');
});

test('every answer-carrying shortcode kind is extracted, and code fences are not', () => {
  const dir = scratch({
    'a.md': PAGE,
    // A fenced example is documentation ABOUT a shortcode, never an exercise.
    'b.md': '---\ntitle: Doc\n---\n\n```\n{{< fillin question="Not real" answer="1" >}}\n```\n',
  });
  const found = extractExercises(join(dir, 'content'));
  assert.deepEqual(found.map((e) => e.kind).sort(), ['fillin', 'multiplechoice']);
  assert.equal(EXERCISE_KINDS.length, 5, 'graphplot, textin, and selfcheck must stay in the extracted set');
  assert.ok(!found.some((e) => e.raw.includes('Not real')), 'a fenced sample is not an exercise');
});

test('textin and selfcheck are extracted, and a selfcheck hash covers its inner model answer', () => {
  const dir = scratch({
    'a.md': `---
title: Sample
---

## Practice

{{< textin question="Name the organelle that makes ATP." answer="mitochondria" >}}

{{< selfcheck question="Why do cells divide?" >}}
Cells divide to grow, repair, and reproduce.
{{< /selfcheck >}}
`,
  });
  const found = extractExercises(join(dir, 'content'));
  assert.deepEqual(found.map((e) => e.kind).sort(), ['selfcheck', 'textin']);

  const textin = found.find((e) => e.kind === 'textin');
  assert.match(textin.raw, /answer="mitochondria"/);

  const selfcheck = found.find((e) => e.kind === 'selfcheck');
  assert.match(selfcheck.raw, /Cells divide to grow, repair, and reproduce\./, 'raw spans open to close, so the paired inner content is included');

  // The model answer IS the exercise for a selfcheck — editing it must change
  // identity, or a re-read model answer would keep its stale verdict.
  const editedInner = selfcheck.raw.replace('grow, repair, and reproduce', 'grow and repair');
  assert.notEqual(exerciseHash(editedInner), exerciseHash(selfcheck.raw), 'the inner model answer is identity for a selfcheck');
});

// Both streams, always: failures go to stderr and successes to stdout, so a
// helper that reads only one of them silently passes tests it never checked.
const run = (dir, args) => {
  const r = spawnSync(process.execPath, [TOOL, ...args], { cwd: dir, encoding: 'utf8' });
  return { code: r.status, out: `${r.stdout ?? ''}${r.stderr ?? ''}` };
};

test('check fails on an unrecorded exercise and passes once it is recorded', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });

  const empty = run(dir, ['check', 'content']);
  assert.equal(empty.code, 1);
  assert.match(empty.out, /2 exercise\(s\) have no current verification record/);

  const found = extractExercises(join(dir, 'content'));
  const entries = Object.fromEntries(found.map((e) => [e.hash, { verdict: 'ok' }]));
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'),
    JSON.stringify({ schemaVersion: 1, entries }));

  const full = run(dir, ['check', 'content']);
  assert.equal(full.code, 0, full.out);
  assert.match(full.out, /every one carries a verification record/);
});

test('editing a verified exercise invalidates its record', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  const found = extractExercises(join(dir, 'content'));
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'),
    JSON.stringify({ schemaVersion: 1, entries: Object.fromEntries(found.map((e) => [e.hash, { verdict: 'ok' }])) }));
  assert.equal(run(dir, ['check', 'content']).code, 0);

  // Change the answer only. The verdict recorded against the old text must
  // not carry over to the new one — that is the whole point of the ledger.
  writeFileSync(join(dir, 'content/a.md'), PAGE.replace('answer="4"', 'answer="5"'));
  const after = run(dir, ['check', 'content']);
  assert.equal(after.code, 1);
  assert.match(after.out, /1 exercise\(s\) have no current verification record/);
});

test('the floor catches extraction that has stopped reading the corpus', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  const found = extractExercises(join(dir, 'content'));
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'),
    JSON.stringify({ schemaVersion: 1, entries: Object.fromEntries(found.map((e) => [e.hash, { verdict: 'ok' }])) }));
  // Fully recorded, so the plain check passes — the floor is the only thing
  // that can tell "all verified" apart from "nothing was found".
  assert.equal(run(dir, ['check', 'content']).code, 0);
  const floored = run(dir, ['check', 'content', '--min-exercises', '500']);
  assert.equal(floored.code, 1);
  assert.match(floored.out, /below the --min-exercises floor/);
});

test('a recorded defect fails the gate, and unverifiable has its own ceiling', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  const found = extractExercises(join(dir, 'content'));
  const write = (verdicts) => writeFileSync(
    join(dir, 'data/verification/answer-ledger.json'),
    JSON.stringify({ schemaVersion: 1, entries: Object.fromEntries(found.map((e, i) => [e.hash, verdicts[i]])) }),
  );

  write([{ verdict: 'defect', note: 'declared 4, derived 6' }, { verdict: 'ok' }]);
  const defect = run(dir, ['check', 'content']);
  assert.equal(defect.code, 1);
  assert.match(defect.out, /recorded as DEFECTIVE and still shipped/);
  assert.match(defect.out, /declared 4, derived 6/);

  write([{ verdict: 'unverifiable', note: 'needs the figure' }, { verdict: 'ok' }]);
  assert.equal(run(dir, ['check', 'content']).code, 0, 'unverifiable is a record');
  const capped = run(dir, ['check', 'content', '--max-unverifiable', '0']);
  assert.equal(capped.code, 1);
  assert.match(capped.out, /over the --max-unverifiable ceiling/);
});

test('merge folds agent result files in, and disagreeing files fail it with nothing written', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: {} }));
  const results = join(dir, 'results');
  mkdirSync(results);
  writeFileSync(join(results, '01.json'), JSON.stringify({ results: [{ hash: 'aaaa', verdict: 'ok' }, { hash: 'bbbb', verdict: 'ok' }] }));
  writeFileSync(join(results, '02.json'), JSON.stringify({ results: [{ hash: 'aaaa', verdict: 'defect', note: 'wrong' }] }));
  // Two passes disagreeing means one of them read the exercise wrong, and no
  // merge order can decide which. An `ok` must never bury a `defect` (or the
  // reverse) on a coin flip of file naming: the merge fails and writes NOTHING
  // — not even the undisputed record — so a red merge is safe to rerun whole.
  const out = run(dir, ['merge', results]);
  assert.equal(out.code, 1, out.out);
  assert.match(out.out, /conflict aaaa: ok \(01\.json\) vs defect \(02\.json\)/);
  assert.match(out.out, /nothing merged/);
  const ledger = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.deepEqual(ledger.entries, {}, 'a conflicted merge writes nothing');
});

test('merge updates an already-recorded verdict, visibly — that is the re-read flow', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'),
    JSON.stringify({ schemaVersion: 1, entries: { aaaa: { verdict: 'unverifiable', note: 'needs the figure' } } }));
  const results = join(dir, 'results');
  mkdirSync(results);
  writeFileSync(join(results, '01.json'), JSON.stringify({ results: [{ hash: 'aaaa', verdict: 'ok' }] }));
  const out = run(dir, ['merge', results]);
  assert.equal(out.code, 0, out.out);
  assert.match(out.out, /updated aaaa: unverifiable → ok/, 'a changed verdict is printed, never silent');
  const ledger = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.equal(ledger.entries.aaaa.verdict, 'ok');
});

// ---- the orchestrator's solve ---------------------------------------------
// solve-check.mjs records `solved` on the record; merge must keep it, and
// `check --require-solved <prefix>` must refuse a graded item under the prefix
// that has none — a prose section cannot go green until it was answered.
test('merge keeps a solved result, validates its shape, and --require-solved gates a prefix', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ledger-'));
  mkdirSync(join(dir, 'content/life-health-sciences'), { recursive: true });
  mkdirSync(join(dir, 'content/math'), { recursive: true });
  mkdirSync(join(dir, 'data/verification'), { recursive: true });
  writeFileSync(join(dir, 'content/life-health-sciences/a.md'), PAGE);
  writeFileSync(join(dir, 'content/math/b.md'), PAGE.replace('Which is prime?', 'Which is even?').replace('answer="7"', 'answer="9"'));
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: {} }));
  const found = extractExercises(join(dir, 'content'));
  const prose = found.filter((e) => e.path.includes('life-health-sciences'));
  const math = found.filter((e) => e.path.includes('/math/'));

  // every exercise verified, none solved
  mkdirSync(join(dir, 'results'));
  writeFileSync(join(dir, 'results/read.json'), JSON.stringify({ results: found.map((e) => ({ hash: e.hash, verdict: 'ok' })) }));
  assert.equal(run(dir, ['merge', 'results']).code, 0);
  assert.equal(run(dir, ['check', 'content']).code, 0, 'without --require-solved the gate is unchanged');
  const unsolved = run(dir, ['check', 'content', '--require-solved', 'content/life-health-sciences']);
  assert.equal(unsolved.code, 1);
  assert.match(unsolved.out, /1 exercise\(s\) under content\/life-health-sciences have no orchestrator solve/);

  // a malformed solve is refused
  mkdirSync(join(dir, 'bad'));
  writeFileSync(join(dir, 'bad/solve.json'), JSON.stringify({ results: [
    { hash: prose[1].hash, verdict: 'ok', solved: { by: 'orchestrator', result: 'adjudicated' } },
  ] }));
  const bad = run(dir, ['merge', 'bad']);
  assert.equal(bad.code, 1);
  assert.match(bad.out, /an adjudicated solve needs a note/);

  // the solve merges, survives, and satisfies the gate; math needs none
  mkdirSync(join(dir, 'solved'));
  writeFileSync(join(dir, 'solved/solve.json'), JSON.stringify({ results: [
    { hash: prose[1].hash, verdict: 'ok', note: 'kept', solved: { by: 'orchestrator', result: 'agrees' } },
  ] }));
  assert.equal(run(dir, ['merge', 'solved']).code, 0);
  const ledger = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.deepEqual(ledger.entries[prose[1].hash], { verdict: 'ok', note: 'kept', solved: { by: 'orchestrator', result: 'agrees' } });
  assert.equal(ledger.entries[math[1].hash].solved, undefined);
  const solved = run(dir, ['check', 'content', '--require-solved', 'content/life-health-sciences']);
  assert.equal(solved.code, 0, solved.out);
});
