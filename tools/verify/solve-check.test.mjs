import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { compareAnswers, emitPackets, gradeAnswer, packetItem } from './solve-check.mjs';
import { extractExercises } from './answer-ledger.mjs';

const TOOL = new URL('./solve-check.mjs', import.meta.url).pathname;

const PAGE = `---
title: Sample
---

{{< multiplechoice
  question="Which complex is not involved in the establishment of conditions for ATP synthesis?"
  answer="photosystem I"
  hint="A hint the solver must never see."
>}}
photosystem I
ATP synthase
photosystem II
cytochrome complex
{{< /multiplechoice >}}

{{< textin
  question="A photosynthetic pigment that disposes of excess energy is called a(n) ________."
  answer="carotenoid"
  accept="carotenoids"
  hint="Another hint."
>}}

{{< selfcheck question="Not handed to the solver." >}}
Model answer.
{{< /selfcheck >}}
`;

function scratch() {
  const dir = mkdtempSync(join(tmpdir(), 'solve-'));
  mkdirSync(join(dir, 'content/life-health-sciences'), { recursive: true });
  mkdirSync(join(dir, 'data/verification'), { recursive: true });
  writeFileSync(join(dir, 'content/life-health-sciences/a.md'), PAGE);
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: {} }));
  return dir;
}

const exercisesIn = (dir) => {
  const previous = process.cwd();
  process.chdir(dir);
  try { return extractExercises('content'); } finally { process.chdir(previous); }
};

test('a packet carries the question and options only — never the key, accept list, or hint', () => {
  const dir = scratch();
  const [mc, textin] = exercisesIn(dir).filter((e) => e.kind !== 'selfcheck');
  const item = packetItem(mc);
  assert.deepEqual(Object.keys(item).sort(), ['hash', 'kind', 'line', 'options', 'path', 'question']);
  assert.equal(item.options.length, 4);
  assert.equal(packetItem(textin).options, undefined);
  const serialized = JSON.stringify([item, packetItem(textin)]);
  assert.doesNotMatch(serialized, /hint|accept|answer=/);
  assert.doesNotMatch(serialized, /carotenoids/);
});

test('emit groups packets by page and leaves self-checks out', () => {
  const dir = scratch();
  const previous = process.cwd();
  process.chdir(dir);
  try {
    const packets = emitPackets('content');
    assert.equal(packets.size, 1);
    const [items] = packets.values();
    assert.deepEqual(items.map((i) => i.kind), ['multiplechoice', 'textin']);
  } finally { process.chdir(previous); }
});

test('a multiplechoice answer must name an option; agreement is against the key', () => {
  const dir = scratch();
  const [mc] = exercisesIn(dir);
  assert.equal(gradeAnswer(mc, 'photosystem I').status, 'agrees');
  assert.equal(gradeAnswer(mc, 'Photosystem I').status, 'agrees');
  assert.equal(gradeAnswer(mc, 'photosystem II').status, 'disagrees');
  assert.equal(gradeAnswer(mc, 'plastocyanin').status, 'unrecognized');
});

test('a textin answer is graded by the real grader, so an accept-list gap shows as a disagreement', () => {
  const dir = scratch();
  const textin = exercisesIn(dir).find((e) => e.kind === 'textin');
  assert.equal(gradeAnswer(textin, 'carotenoid').status, 'agrees');
  assert.equal(gradeAnswer(textin, 'a carotenoid').status, 'agrees');
  assert.equal(gradeAnswer(textin, 'carotenoids').status, 'agrees');
  assert.equal(gradeAnswer(textin, 'carotene').status, 'disagrees');
});

test('compare records agreement, refuses an unadjudicated disagreement or flag, and records an adjudicated one', () => {
  const dir = scratch();
  const previous = process.cwd();
  process.chdir(dir);
  try {
    const [mc, textin] = extractExercises('content');
    const ledger = { entries: { [mc.hash]: { verdict: 'ok', note: 'reading pass' } } };

    const clean = compareAnswers({ by: 'orchestrator', answers: [
      { hash: mc.hash, answer: 'photosystem I' },
      { hash: textin.hash, answer: 'carotenoid' },
    ] }, 'content', ledger);
    assert.equal(clean.unresolved, 0);
    assert.equal(clean.results.length, 2);
    // the existing note survives; an unrecorded item gets a record from the solve
    assert.deepEqual(clean.results[0], { hash: mc.hash, verdict: 'ok', note: 'reading pass', solved: { by: 'orchestrator', result: 'agrees' } });
    assert.equal(clean.results[1].verdict, 'ok');
    assert.match(clean.results[1].note, /orchestrator solve/);

    const open = compareAnswers({ answers: [
      { hash: mc.hash, answer: 'photosystem II' },
      { hash: textin.hash, answer: 'carotenoid', alsoDefensible: 'xanthophyll' },
    ] }, 'content', ledger);
    assert.equal(open.unresolved, 2, 'a disagreement and a flag both wait for adjudication');
    assert.equal(open.results.length, 0, 'nothing is recorded while they wait');

    const settled = compareAnswers({ answers: [
      { hash: mc.hash, answer: 'photosystem II', adjudicated: 'module credits PSII with the gradient; key stands' },
    ] }, 'content', ledger);
    assert.equal(settled.unresolved, 0);
    assert.deepEqual(settled.results[0].solved, { by: 'orchestrator', result: 'adjudicated', note: 'module credits PSII with the gradient; key stands' });

    const slip = compareAnswers({ answers: [{ hash: mc.hash, answer: 'plastocyanin' }, { hash: 'deadbeefdeadbeef', answer: 'x' }] }, 'content', ledger);
    assert.equal(slip.report.unrecognized.length, 1);
    assert.deepEqual(slip.report.missing, ['deadbeefdeadbeef']);
  } finally { process.chdir(previous); }
});

test('the CLI writes no result file while a disagreement is unresolved, and exits non-zero', () => {
  const dir = scratch();
  const [mc] = exercisesIn(dir);
  const answers = join(dir, 'answers.json');
  writeFileSync(answers, JSON.stringify({ answers: [{ hash: mc.hash, answer: 'photosystem II' }] }));
  const run = spawnSync(process.execPath, [TOOL, 'compare', answers, 'content', '--out', join(dir, 'out')], { cwd: dir, encoding: 'utf8' });
  assert.equal(run.status, 1);
  assert.match(run.stdout, /1 disagree/);
  assert.match(run.stderr, /not writing results/);
});
