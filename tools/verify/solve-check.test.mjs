import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  compareAnswers, emitPackets, gradeAnswer, isResidualFillin, maskedContext, optionsOf, packetItem,
} from './solve-check.mjs';
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

{{< fillin
  question="Jaime has \\$2.60 in dimes and nickels. The number of dimes is 14 more than the number of nickels. Enter the number of nickels, then dimes."
  answer="8,22"
  answerMode="unordered"
  hint="Let n be the nickels."
>}}
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

test('a fillin packet carries the question and the answer shape — never the key or hint — and is graded by the math grader', () => {
  const fillin = exercisesIn(scratch()).find((exercise) => exercise.kind === 'fillin');
  const item = packetItem(fillin);
  assert.equal(item.answerMode, 'unordered');
  assert.ok(!('answer' in item) && !('hint' in item));
  assert.ok(!JSON.stringify(item).includes('8,22') && !JSON.stringify(item).includes('Let n be'));
  assert.equal(gradeAnswer(fillin, '22,8').status, 'agrees');
  assert.equal(gradeAnswer(fillin, '8, 22').status, 'agrees');
  assert.equal(gradeAnswer(fillin, '8,21').status, 'disagrees');
  assert.equal(gradeAnswer(fillin, '').status, 'unrecognized');
});

test('the residual is the fill-ins no mechanical reading confirmed and no record explains', () => {
  const [mechanical, wordy] = [
    { kind: 'fillin', hash: 'a', path: 'content/math/x.md', line: 1, params: { question: 'Solve: $2x=6$.', answer: '3' } },
    { kind: 'fillin', hash: 'b', path: 'content/math/x.md', line: 9, params: { question: 'Jaime has 8 nickels and 22 dimes. How many coins?', answer: '30' } },
  ];
  const ledger = { entries: { b: { verdict: 'ok' } } };
  const empty = new Map();
  assert.equal(isResidualFillin(mechanical, { sourceStatus: empty, ledger }), false, 'verify-answers reads it');
  assert.equal(isResidualFillin(wordy, { sourceStatus: empty, ledger }), true);
  assert.equal(isResidualFillin(wordy, { sourceStatus: new Map([['content/math/x.md:9', 'confirmed']]), ledger }), false, 'the source solution confirmed it');
  assert.equal(isResidualFillin(wordy, { sourceStatus: new Map([['content/math/x.md:9', 'unmatched']]), ledger }), true);
  assert.equal(isResidualFillin(wordy, { sourceStatus: empty, ledger: { entries: { b: { verdict: 'ok', note: 'derived: 8+22' } } } }), false, 'a derivation note is a third reading');
  assert.equal(isResidualFillin(wordy, { sourceStatus: empty, ledger: { entries: { b: { verdict: 'ok', solved: { by: 'x', result: 'agrees' } } } } }), false);
  assert.equal(isResidualFillin({ ...wordy, kind: 'textin' }, { sourceStatus: empty, ledger }), false);
});

test('page context above an item carries prose and earlier questions, never a key, accept list, hint, or model answer', () => {
  const context = maskedContext(PAGE, PAGE.split('\n').length, 80);
  assert.doesNotMatch(context, /photosystem I"|carotenoid|A hint the solver|Another hint|Model answer|8,22|Let n be/);
  assert.match(context, /Which complex is not involved/);
  assert.match(context, /disposes of excess energy/);
  assert.match(context, /model answer removed/);
  const dir = scratch();
  const previous = process.cwd();
  process.chdir(dir);
  try {
    const [items] = emitPackets('content', { context: 80 }).values();
    assert.ok(items.every((item) => typeof item.pageContext === 'string'));
    assert.doesNotMatch(JSON.stringify(items), /carotenoid"|8,22|Let n be/);
    const [onlyOne] = emitPackets('content', { only: new Set([items[2].hash]) }).values();
    assert.deepEqual(onlyOne.map((item) => item.hash), [items[2].hash]);
  } finally { process.chdir(previous); }
});

test('emit groups packets by page and leaves self-checks out', () => {
  const dir = scratch();
  const previous = process.cwd();
  process.chdir(dir);
  try {
    const packets = emitPackets('content');
    assert.equal(packets.size, 1);
    const [items] = packets.values();
    assert.deepEqual(items.map((i) => i.kind), ['multiplechoice', 'textin', 'fillin']);
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


/* ---- sortbins ------------------------------------------------------------- */

const SORTBINS_PAGE = `---
title: Sortbins sample
---

{{< sortbins question="Assign each replication property to the cell type it describes." hint="Never handed to the solver." >}}
{"bins":["Prokaryotes","Eukaryotes"],"items":[{"label":"Single origin of replication","bin":0},{"label":"Telomerase present","bin":1},{"label":"DNA polymerase III elongates strands","bin":0},{"label":"PCNA sliding clamp","bin":1}]}
{{< /sortbins >}}
`;

function sortbinsScratch() {
  const dir = mkdtempSync(join(tmpdir(), 'solve-sb-'));
  mkdirSync(join(dir, 'content'), { recursive: true });
  writeFileSync(join(dir, 'content/b.md'), SORTBINS_PAGE);
  return dir;
}

test('a sortbins packet carries bins and item labels — never the assignments or the hint', () => {
  const dir = sortbinsScratch();
  const previous = process.cwd();
  process.chdir(dir);
  let exercise;
  try { [exercise] = extractExercises('content'); } finally { process.chdir(previous); }
  assert.equal(exercise.kind, 'sortbins');
  const item = packetItem(exercise);
  assert.deepEqual(Object.keys(item).sort(), ['bins', 'hash', 'items', 'kind', 'line', 'path', 'question']);
  assert.deepEqual(item.bins, ['Prokaryotes', 'Eukaryotes']);
  assert.deepEqual(item.items, [
    'Single origin of replication', 'Telomerase present',
    'DNA polymerase III elongates strands', 'PCNA sliding clamp',
  ]);
  const serialized = JSON.stringify(item);
  assert.doesNotMatch(serialized, /"bin"\s*:/, 'no assignment index survives into the packet');
  assert.doesNotMatch(serialized, /hint|Never handed/);
});

test('a sortbins answer is a full label→bin mapping graded against the config', () => {
  const dir = sortbinsScratch();
  const previous = process.cwd();
  process.chdir(dir);
  let exercise;
  try { [exercise] = extractExercises('content'); } finally { process.chdir(previous); }

  const right = {
    'Single origin of replication': 'Prokaryotes',
    'Telomerase present': 'Eukaryotes',
    'DNA polymerase III elongates strands': 'prokaryotes', // label matching is normalized
    'PCNA sliding clamp': 'Eukaryotes',
  };
  assert.equal(gradeAnswer(exercise, right).status, 'agrees');

  const swapped = { ...right, 'Telomerase present': 'Prokaryotes' };
  const disagreement = gradeAnswer(exercise, swapped);
  assert.equal(disagreement.status, 'disagrees');
  assert.match(disagreement.detail, /Telomerase present.*solver: "Prokaryotes"; key: "Eukaryotes"/);

  assert.equal(gradeAnswer(exercise, 'Prokaryotes').status, 'unrecognized', 'a bare string is a solver slip');
  assert.equal(gradeAnswer(exercise, { ...right, 'Telomerase present': 'Ribosomes' }).status, 'unrecognized', 'an unknown bin is a solver slip');
  const { 'PCNA sliding clamp': dropped, ...partial } = right;
  assert.equal(gradeAnswer(exercise, partial).status, 'unrecognized', 'a missing item is a solver slip');
});

// ---- context masking at page level -------------------------------------------
// The old `maskedContext` cut the window first and masked second, with a regex
// that needed both selfcheck tags in view and knew nothing about a sortbins'
// `"bin"` assignments, a graphplot's answer config, or `answerIndex`.
const CONTEXT_PAGE = `---
title: Context
---

{{< sortbins question="Sort each cell type." hint="Think membranes." >}}
{"bins":["Prokaryote","Eukaryote"],"items":[{"label":"no nucleus","bin":0},{"label":"nucleus","bin":1}]}
{{< /sortbins >}}

{{< selfcheck question="Explain the difference." >}}
Model answer line one.
Model answer line two.
Model answer line three.
{{< /selfcheck >}}

{{< graphplot question="Plot the line." answerDisplay="y = 2x - 1" >}}
{"answer":{"slope":2,"intercept":-1,"plotPoints":2},"grid":{"xMin":-5,"xMax":5}}
{{< /graphplot >}}

{{< multiplechoice question="Which graph shows the line?" mode="graph" answerIndex="1" hint="Check the slope." >}}
{"ariaLabel":"A line falling from left to right.","lines":[{"slope":-1,"intercept":2}]}
===OPT===
{"ariaLabel":"A line rising from left to right.","lines":[{"slope":1,"intercept":2}]}
{{< /multiplechoice >}}

{{< fillin question="Using the graph above, find the slope." answer="1" >}}
`;

test('a narrow window that opens inside a selfcheck carries no model answer', () => {
  const lines = CONTEXT_PAGE.split('\n');
  const fillinLine = lines.findIndex((l) => l.startsWith('{{< fillin')) + 1;
  const selfcheckClose = lines.findIndex((l) => l.startsWith('{{< /selfcheck')) + 1;
  // A window whose first line is INSIDE the selfcheck body: the old code saw
  // no opening tag and passed "Model answer line three." straight through.
  const window = fillinLine - selfcheckClose + 1;
  const narrow = maskedContext(CONTEXT_PAGE, fillinLine, window);
  assert.doesNotMatch(narrow, /Model answer/);
  assert.match(narrow, /\{\{< \/selfcheck >\}\}/);
});

test('a sortbins, a graphplot, and a graph-mode multiple choice in the context window carry no key', () => {
  const context = maskedContext(CONTEXT_PAGE, CONTEXT_PAGE.split('\n').length, 80);
  assert.doesNotMatch(context, /"bin"\s*:/, 'sortbins assignments ARE the key');
  assert.match(context, /assignments removed/);
  assert.match(context, /Sort each cell type/);
  assert.doesNotMatch(context, /"answer"\s*:|plotPoints|y = 2x - 1/, 'the graphplot answer config and its display are the key');
  assert.match(context, /answer config removed/);
  assert.match(context, /Plot the line/);
  assert.doesNotMatch(context, /answerIndex="\d/);
  assert.match(context, /answerIndex="…"/);
  assert.doesNotMatch(context, /Think membranes|Check the slope/);
  assert.match(context, /A line rising from left to right/, 'the option specs themselves are not the key');
});

test('a graph-mode multiple choice is keyed by answerIndex and graded by option number or option text', () => {
  const dir = mkdtempSync(join(tmpdir(), 'solve-'));
  mkdirSync(join(dir, 'content'), { recursive: true });
  writeFileSync(join(dir, 'content/g.md'), CONTEXT_PAGE);
  const mc = exercisesIn(dir).find((e) => e.kind === 'multiplechoice');
  assert.equal(mc.params.answer, undefined, 'graph mode keys by answerIndex, not answer');
  assert.deepEqual(optionsOf(mc).length, 2, 'options split on ===OPT===, not on line breaks');
  assert.equal(packetItem(mc).options.length, 2);
  assert.equal(gradeAnswer(mc, '1').status, 'agrees');
  assert.equal(gradeAnswer(mc, '0').status, 'disagrees');
  assert.equal(gradeAnswer(mc, optionsOf(mc)[1]).status, 'agrees');
  assert.equal(gradeAnswer(mc, '7').status, 'unrecognized');
});
