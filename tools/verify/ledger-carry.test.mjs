import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { extractExercises, validateRecord } from './answer-ledger.mjs';
import { pageBlocks, planCarry, planRebind, snapshot } from './ledger-carry.mjs';

const TOOL = new URL('./ledger-carry.mjs', import.meta.url).pathname;

const page = ({
  hint = 'Think about energy.', accept = 'mitochondrion', answer = 'mitochondria', mcHint = 'Count its factors.', row = '| 0 | 3 |', stem = 'Which is prime?',
} = {}) => `---
title: Sample
---

## Practice

{{< textin question="Name the organelle that makes ATP." answer="${answer}" accept="${accept}" hint="${hint}" >}}

{{< multiplechoice question="${stem}" answer="7" hint="${mcHint}" >}}
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

test('a fill-in carries across an answerForm change only while its key grades correct under it', () => {
  const fillinPage = (form) => `---\ntitle: Sample\n---\n\n## Practice\n\n{{< fillin question="Elena read 29 pages and then 76 more. How many pages?" answer="105"${form ? ` answerForm="${form}"` : ''} hint="Add." >}}\n`;
  const run = (from, to) => {
    const dir = site(fillinPage(from));
    const before = snapshot(join(dir, 'content'));
    writeFileSync(join(dir, 'content', 'a.md'), fillinPage(to));
    return planCarry({ before, now: snapshot(join(dir, 'content')), entries: recorded(before), note: 'n' });
  };
  const added = run('', 'decimal');
  assert.equal(added.results.length, 1, 'adding a form the key satisfies carries');
  assert.deepEqual(added.results[0].solved, { by: 'fable', result: 'agrees' });
  assert.deepEqual(run('', 'fraction').resolve.map((r) => r.why), ['form-rejects-key'],
    'a form the key itself fails is not carried');
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

test('an accept member the closed hyphen fold still grades is not a narrowing', () => {
  // The grader reads a hyphen as nothing as well as a space (October 27,
  // 2026), so dropping `mitochondri-a` for a key `mitochondria` narrows
  // nothing. The check must run on the RAW old spelling: its normalized
  // form (`mitochondri a`) never reaches the closed fold, and the first plan
  // of that day's sweep left 88 sound records "accept-narrowed".
  const dir = site(page({ accept: 'mitochondri-a' }));
  const before = snapshot(join(dir, 'content'));
  writeFileSync(join(dir, 'content', 'a.md'), page({ accept: '' }));
  const { results } = planCarry({ before, now: snapshot(join(dir, 'content')), entries: recorded(before), note: 'n' });
  assert.equal(results.length, 1);
});

test('a site link added around a stem\'s unchanged words carries; changed words or an outside link do not', () => {
  const linked = plan({ stem: 'Which is [prime](/math/prealgebra/02-primes/)?' });
  assert.equal(linked.resolve.length, 0);
  assert.equal(linked.results.length, 1);
  assert.equal(linked.results[0].hash, linked.now[1].hash);
  assert.notEqual(linked.now[1].hash, linked.before[1].hash, 'the link re-hashed the item');
  for (const stem of ['Which is [a prime](/math/prealgebra/02-primes/)?', 'Which is [prime](https://example.org/primes)?']) {
    const { results, resolve } = plan({ stem });
    assert.equal(results.length, 0, stem);
    assert.deepEqual(resolve.map((r) => r.why), ['changed'], stem);
  }
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
  writeFileSync(join(dir, 'data', 'verification', 'answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: recorded(JSON.parse(snap.stdout).exercises) }));
  assert.equal(JSON.parse(snap.stdout).blocks['content/a.md'].length, 1, 'the snapshot holds each page\'s blocks');
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

// A change to the binding RULE moves an item to another block with no page
// edited: "take each specific heat from the table above" was bound to the
// photograph between the item and the table (Chemistry 5.1).
const rebound = ({ edit = {}, blocks } = {}) => {
  const dir = site(page());
  const root = join(dir, 'content');
  const table = extractExercises(root)[2];
  // What the snapshot held under the old rule: the same item, bound to another block.
  const before = snapshot(root).map((e) => (e.hash === table.hash ? { ...e, hash: '0'.repeat(16), dependency: 'f'.repeat(16) } : e));
  const onPage = pageBlocks(root);
  writeFileSync(join(dir, 'content', 'a.md'), page(edit));
  const now = extractExercises(root);
  return { before, now, table: now[2], ...planRebind({ before, blocks: blocks ?? onPage, now, entries: recorded(before), note: 'rebound by test' }) };
};

test('rebind carries a record to the block a changed binding rule now names, when that block stood on the page', () => {
  const { table, results, moves, refused } = rebound();
  assert.deepEqual(refused, []);
  assert.deepEqual(results.map((r) => r.hash), [table.hash]);
  assert.equal(results[0].note, 'read textin | rebound by test');
  assert.deepEqual(results[0].solved, { by: 'fable', result: 'agrees' });
  assert.equal(validateRecord(results[0], { requireHash: true }), null, 'the record is merge-ready');
  assert.equal(moves[0].to.kind, 'table');
  assert.match(moves[0].to.opens, /^\| x \| y \|/, 'each move prints the block it now reads');
  // A hint reworded so the phrase names its table is still the same item.
  assert.equal(rebound({ edit: { hint: 'Read along the row.' } }).results.length, 2 - 1, 'the bound item carries; the other textin\'s hint edit is plan\'s to carry');
});

test('rebind refuses a block that was edited, and an item whose key changed is not its case', () => {
  // The table changed with the rule: the solver never read this block.
  const edited = rebound({ edit: { row: '| 0 | 4 |' } });
  assert.deepEqual(edited.results, []);
  assert.deepEqual(edited.refused.map((r) => r.why), ['block-edited']);
  assert.deepEqual(rebound({ blocks: {} }).refused.map((r) => r.why), ['block-edited'], 'a page with no recorded blocks proves nothing');
  // An item bound to the same block as before is plan's case; rebind leaves it.
  const dir = site(page());
  const root = join(dir, 'content');
  const before = snapshot(root);
  const same = planRebind({ before, blocks: pageBlocks(root), now: extractExercises(root), entries: {}, note: 'n' });
  assert.deepEqual(same, { results: [], moves: [], refused: [] });
});

test('the CLI lists the moves without writing, writes them with --out, and refuses a snapshot without blocks', () => {
  const dir = site(page());
  const run = (args) => spawnSync(process.execPath, [TOOL, ...args], { cwd: dir, encoding: 'utf8' });
  const snap = JSON.parse(run(['snapshot', 'content']).stdout);
  // The old rule's binding: the table item recorded under another identity.
  const table = snap.exercises[2];
  const old = { ...table, hash: '0'.repeat(16), dependency: 'f'.repeat(16) };
  snap.exercises[2] = old;
  writeFileSync(join(dir, 'before.json'), JSON.stringify(snap));
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  writeFileSync(join(dir, 'data', 'verification', 'answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: recorded(snap.exercises) }));
  const listed = run(['rebind', 'before.json', 'content']);
  assert.equal(listed.status, 0, listed.stderr);
  assert.match(listed.stdout, /content\/a\.md:\d+ textin "in the table" — was bound to another block; now table L\d+: \| x \| y \|/);
  assert.match(listed.stdout, /1 record\(s\) to move; 0 refused\n\s+nothing written/);
  assert.equal(run(['rebind', 'before.json', 'content', '--out', 'rebind']).status, 0);
  const written = JSON.parse(readFileSync(join(dir, 'rebind', 'results', 'rebound.json'), 'utf8')).results;
  assert.deepEqual(written.map((r) => r.hash), [table.hash]);
  assert.match(written[0].note, /\| rebound \d{4}-\d{2}-\d{2} \(ledger-carry\)/);
  writeFileSync(join(dir, 'old.json'), JSON.stringify(snap.exercises));
  assert.equal(run(['rebind', 'old.json', 'content']).status, 2, 'a snapshot from before the blocks were recorded cannot prove a block was on the page');
  assert.equal(run(['plan', 'old.json', 'content', '--out', 'carry']).status, 0, 'plan still reads the older snapshot');
});
