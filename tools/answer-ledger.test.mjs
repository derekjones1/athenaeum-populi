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
  assert.equal(EXERCISE_KINDS.length, 3, 'graphplot must stay in the extracted set');
  assert.ok(!found.some((e) => e.raw.includes('Not real')), 'a fenced sample is not an exercise');
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

test('merge folds agent result files in and reports a disagreement', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: {} }));
  const results = join(dir, 'results');
  mkdirSync(results);
  writeFileSync(join(results, '01.json'), JSON.stringify({ results: [{ hash: 'aaaa', verdict: 'ok' }] }));
  writeFileSync(join(results, '02.json'), JSON.stringify({ results: [{ hash: 'aaaa', verdict: 'defect', note: 'wrong' }] }));
  const out = run(dir, ['merge', results]);
  assert.equal(out.code, 0, out.out);
  assert.match(out.out, /conflict aaaa/, 'two passes disagreeing must be reported, not silently overwritten');
  const ledger = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.equal(ledger.entries.aaaa.verdict, 'defect');
});
