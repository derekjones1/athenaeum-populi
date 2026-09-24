import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { validateRecord } from './answer-ledger.mjs';
import { planCarry, snapshot } from './ledger-carry.mjs';

const TOOL = new URL('./ledger-carry.mjs', import.meta.url).pathname;

const page = ({
  hint = 'Think about energy.', accept = 'mitochondrion', answer = 'mitochondria', mcHint = 'Count its factors.', row = '| 0 | 3 |',
} = {}) => `---
title: Sample
---

## Practice

{{< textin question="Name the organelle that makes ATP." answer="${answer}" accept="${accept}" hint="${hint}" >}}

{{< multiplechoice question="Which is prime?" answer="7" hint="${mcHint}" >}}
7
9
{{< /multiplechoice >}}

{{< textin question="Read the $y$ value in the table below." answer="3" hint="${hint}" >}}

| x | y |
|---|---|
${row}
`;

const site = (body) => {
  const dir = mkdtempSync(join(tmpdir(), 'carry-'));
  mkdirSync(join(dir, 'content'));
  writeFileSync(join(dir, 'content', 'a.md'), body);
  return dir;
};

// Every pre-edit exercise carries a solved `ok` record, as a finished section does.
const recorded = (items) => Object.fromEntries(items.map((e) => [e.hash, {
  verdict: 'ok', note: `read ${e.kind}`, solved: { by: 'fable', result: 'agrees' },
}]));

const plan = (edit) => {
  const dir = site(page());
  const before = snapshot(join(dir, 'content'));
  writeFileSync(join(dir, 'content', 'a.md'), page(edit));
  const now = snapshot(join(dir, 'content'));
  return { before, now, ...planCarry({ before, now, entries: recorded(before), note: 'carried by test' }) };
};

test('a hint edit carries the verdict, the note, and the solve to the new hash', () => {
  const { before, now, results, resolve } = plan({ mcHint: 'A prime has two factors.' });
  assert.equal(resolve.length, 0);
  assert.equal(results.length, 1);
  const [carried] = results;
  assert.equal(carried.hash, now[1].hash);
  assert.notEqual(carried.hash, before[1].hash, 'the edit re-hashed the item');
  assert.equal(carried.note, 'read multiplechoice | carried by test');
  assert.deepEqual(carried.solved, { by: 'fable', result: 'agrees' });
  assert.equal(validateRecord(carried, { requireHash: true }), null, 'the record is merge-ready');
});

test('an accept addition carries; removing a graded form or changing the key does not', () => {
  assert.equal(plan({ accept: 'mitochondrion|powerhouse' }).results.length, 1);
  assert.deepEqual(plan({ accept: '' }).resolve.map((r) => r.why), ['accept-narrowed']);
  const rekeyed = plan({ answer: 'chloroplast' });
  assert.equal(rekeyed.results.length, 0);
  assert.deepEqual(rekeyed.resolve.map((r) => r.why), ['changed']);
});

test('an accept member the plural fold still grades is not a narrowing', () => {
  // Dropping `mitochondrion` narrows (the fold does not reach it); dropping a
  // regular plural of the key does not, because the grader folds it anyway.
  const dir = site(page({ accept: 'mitochondrias' }));
  const before = snapshot(join(dir, 'content'));
  writeFileSync(join(dir, 'content', 'a.md'), page({ accept: '' }));
  const { results } = planCarry({ before, now: snapshot(join(dir, 'content')), entries: recorded(before), note: 'n' });
  assert.equal(results.length, 1);
});

test('a hint edit made together with a table edit is re-read, not carried', () => {
  // Both textins' hints change; only the table-bound one also changes its dependency.
  const { results, resolve } = plan({ hint: 'Look carefully.', row: '| 0 | 4 |' });
  assert.equal(results.length, 1, 'the self-contained textin carries');
  assert.deepEqual(resolve.map((r) => [r.question.includes('table'), r.why]), [[true, 'dependency-changed']]);
});

test('an exercise already recorded, or one with no recorded predecessor, is handled without a carry', () => {
  const dir = site(page());
  const items = snapshot(join(dir, 'content'));
  const none = planCarry({ before: items, now: items, entries: recorded(items), note: 'n' });
  assert.deepEqual(none, { results: [], resolve: [] }, 'nothing re-hashed, nothing to do');
  const fresh = planCarry({ before: items, now: items, entries: {}, note: 'n' });
  assert.equal(fresh.results.length, 0);
  assert.ok(fresh.resolve.every((r) => r.why === 'changed'), 'an unrecorded predecessor is never a carry source');
});

test('the CLI writes a merge-ready results directory and a resolve list', () => {
  const dir = site(page());
  const run = (args) => spawnSync(process.execPath, [TOOL, ...args], { cwd: dir, encoding: 'utf8' });
  const snap = run(['snapshot', 'content']);
  assert.equal(snap.status, 0, snap.stderr);
  writeFileSync(join(dir, 'before.json'), snap.stdout);
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  writeFileSync(join(dir, 'data', 'verification', 'answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: recorded(JSON.parse(snap.stdout)) }));
  writeFileSync(join(dir, 'content', 'a.md'), page({ mcHint: 'Two factors.', answer: 'ribosome', accept: '' }));
  const out = run(['plan', 'before.json', 'content', '--out', 'carry']);
  assert.equal(out.status, 0, out.stderr);
  assert.match(out.stdout, /carried 1; left to re-read 1/);
  const carried = JSON.parse(readFileSync(join(dir, 'carry', 'results', 'carried.json'), 'utf8')).results;
  assert.match(carried[0].note, /\| carried \d{4}-\d{2}-\d{2} \(ledger-carry\)/);
  const resolveList = JSON.parse(readFileSync(join(dir, 'carry', 'resolve-list.json'), 'utf8'));
  assert.deepEqual(resolveList.map((r) => r.why), ['changed']);
  assert.equal(run(['plan', 'before.json']).status, 2, '--out is required');
});
