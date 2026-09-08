import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  EXERCISE_KINDS, VERDICTS, exerciseHash, extractExercises, validateRecord,
} from './answer-ledger.mjs';

const TOOL = new URL('./answer-ledger.mjs', import.meta.url).pathname;
// Result-file fixtures need real-shaped keys: merge refuses a hash that is
// not 16 hex characters.
const A = 'a'.repeat(16);
const B = 'b'.repeat(16);

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
  assert.equal(EXERCISE_KINDS.length, 6, 'graphplot, textin, selfcheck, and sortbins must stay in the extracted set');
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
  writeFileSync(join(results, '01.json'), JSON.stringify({ results: [{ hash: A, verdict: 'ok' }, { hash: B, verdict: 'ok' }] }));
  writeFileSync(join(results, '02.json'), JSON.stringify({ results: [{ hash: A, verdict: 'defect', note: 'wrong' }] }));
  // Two passes disagreeing means one of them read the exercise wrong, and no
  // merge order can decide which. An `ok` must never bury a `defect` (or the
  // reverse) on a coin flip of file naming: the merge fails and writes NOTHING
  // — not even the undisputed record — so a red merge is safe to rerun whole.
  const out = run(dir, ['merge', results]);
  assert.equal(out.code, 1, out.out);
  assert.match(out.out, new RegExp(`conflict ${A}: ok \\(01\\.json\\) vs defect \\(02\\.json\\)`));
  assert.match(out.out, /nothing merged/);
  const ledger = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.deepEqual(ledger.entries, {}, 'a conflicted merge writes nothing');
});

test('merge updates an already-recorded verdict, visibly — that is the re-read flow', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'),
    JSON.stringify({ schemaVersion: 1, entries: { [A]: { verdict: 'unverifiable', note: 'needs the figure' } } }));
  const results = join(dir, 'results');
  mkdirSync(results);
  writeFileSync(join(results, '01.json'), JSON.stringify({ results: [{ hash: A, verdict: 'ok' }] }));
  const out = run(dir, ['merge', results]);
  assert.equal(out.code, 0, out.out);
  assert.match(out.out, new RegExp(`updated ${A}: unverifiable → ok`), 'a changed verdict is printed, never silent');
  const ledger = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.equal(ledger.entries[A].verdict, 'ok');
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
  assert.match(unsolved.out, /2 exercise\(s\) under content\/life-health-sciences have no orchestrator solve/);

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
    ...prose.filter((e) => e.kind === 'fillin').map((e) => ({ hash: e.hash, verdict: 'ok', solved: { by: 'orchestrator', result: 'agrees' } })),
  ] }));
  assert.equal(run(dir, ['merge', 'solved']).code, 0);
  const ledger = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.deepEqual(ledger.entries[prose[1].hash], { verdict: 'ok', note: 'kept', solved: { by: 'orchestrator', result: 'agrees' } });
  assert.equal(ledger.entries[math[1].hash].solved, undefined);
  const solved = run(dir, ['check', 'content', '--require-solved', 'content/life-health-sciences']);
  assert.equal(solved.code, 0, solved.out);
});

// ---- record shape ------------------------------------------------------------
// The gate used to test a record for presence and for the literal 'defect':
// `verdict: "typo"` counted as verified and `solved: {}` satisfied
// --require-solved. The contract is now one function, applied on every read.
test('validateRecord names every malformed shape and accepts the live shapes', () => {
  const rejected = [
    [{ verdict: 'typo' }, /verdict must be one of ok, defect, unverifiable/],
    [{ verdict: 'Ok' }, /verdict must be one of/],
    [{ verdict: 'ok', solved: {} }, /solved.by must be a non-empty string/],
    [{ verdict: 'ok', solved: 'yes' }, /solved must be an object/],
    [{ verdict: 'ok', solved: { by: 'x', result: 'agrees', extra: 1 } }, /unknown solved field\(s\) extra/],
    [{ verdict: 'ok', solved: { by: '', result: 'agrees' } }, /solved.by must be/],
    [{ verdict: 'ok', solved: { by: 'x', result: 'maybe' } }, /solved.result must be agrees or adjudicated/],
    [{ verdict: 'ok', solved: { by: 'x', result: 'adjudicated' } }, /an adjudicated solve needs a note/],
    [{ verdict: 'defect' }, /a defect verdict needs a note/],
    [{ verdict: 'unverifiable' }, /an unverifiable verdict needs a note/],
    [{ verdict: 'ok', note: '' }, /note must be a non-empty string/],
    [{ verdict: 'ok', notes: 'x' }, /unknown field\(s\) notes/],
    ['ok', /record must be an object/],
  ];
  for (const [record, pattern] of rejected) {
    assert.match(validateRecord(record) ?? '', pattern, JSON.stringify(record));
  }
  for (const record of [
    { verdict: 'ok' },
    { verdict: 'ok', note: 'derived: 2x=8 → x=4' },
    { verdict: 'defect', note: 'declared 4, derived 6' },
    { verdict: 'unverifiable', note: 'needs the figure' },
    { verdict: 'ok', solved: { by: 'orchestrator', result: 'agrees' } },
    { verdict: 'ok', solved: { by: 'orchestrator', result: 'adjudicated', note: 'source keys B' } },
  ]) {
    assert.equal(validateRecord(record), null, JSON.stringify(record));
  }
  assert.equal(validateRecord({ hash: 'aaaa', verdict: 'ok' }, { requireHash: true }), 'missing or malformed hash (16 hex characters)');
  assert.equal(validateRecord({ hash: A, verdict: 'ok' }, { requireHash: true }), null);
  assert.deepEqual([...VERDICTS].sort(), ['defect', 'ok', 'unverifiable']);
});

test('check, stats, and list refuse a ledger record whose verdict is not ok, defect, or unverifiable', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  const found = extractExercises(join(dir, 'content'));
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'),
    JSON.stringify({ schemaVersion: 1, entries: { [found[0].hash]: { verdict: 'typo' }, [found[1].hash]: { verdict: 'ok' } } }));
  const check = run(dir, ['check', 'content']);
  assert.equal(check.code, 1);
  assert.match(check.out, /1 malformed record\(s\)/);
  assert.match(check.out, new RegExp(`${found[0].hash}: verdict must be one of ok, defect, unverifiable \\(got "typo"\\)`));
  assert.doesNotMatch(check.out, /independently re-derived/, 'a malformed ledger is never reported as verified');
  assert.equal(run(dir, ['stats', 'content']).code, 1);
  assert.equal(run(dir, ['list', 'content', '--unverified']).code, 1);
  assert.equal(run(dir, ['prune', 'content']).code, 1);
});

test('an empty solved object does not satisfy --require-solved', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ledger-'));
  mkdirSync(join(dir, 'content/life-health-sciences'), { recursive: true });
  mkdirSync(join(dir, 'data/verification'), { recursive: true });
  writeFileSync(join(dir, 'content/life-health-sciences/a.md'), PAGE);
  const found = extractExercises(join(dir, 'content'));
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'),
    JSON.stringify({ schemaVersion: 1, entries: Object.fromEntries(found.map((e) => [e.hash, { verdict: 'ok', solved: {} }])) }));
  const out = run(dir, ['check', 'content', '--require-solved', 'content/life-health-sciences']);
  assert.equal(out.code, 1);
  assert.match(out.out, /solved.by must be a non-empty string/);
});

test('merge rejects a verdict outside the enum, an unknown field, and a foreign key on the ledger itself', () => {
  const dir = scratch({ 'a.md': PAGE });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: {} }));
  const results = join(dir, 'results');
  mkdirSync(results);
  writeFileSync(join(results, '01.json'), JSON.stringify({ results: [{ hash: A, verdict: 'Ok' }, { hash: B, verdict: 'ok', extra: true }] }));
  const out = run(dir, ['merge', results]);
  assert.equal(out.code, 1);
  assert.match(out.out, /verdict must be one of ok, defect, unverifiable \(got "Ok"\)/);
  assert.match(out.out, /unknown field\(s\) extra/);
  assert.match(out.out, /nothing merged/);

  // The ledger file is committed and hand-editable: a bad key or a wrong
  // schemaVersion is refused before anything is merged into it.
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: { nope: { verdict: 'ok' } } }));
  writeFileSync(join(results, '01.json'), JSON.stringify({ results: [{ hash: A, verdict: 'ok' }] }));
  const badKey = run(dir, ['merge', results]);
  assert.equal(badKey.code, 1);
  assert.match(badKey.out, /nope: key is not a 16-hex exercise hash/);
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 2, entries: {} }));
  const badSchema = run(dir, ['check', 'content']);
  assert.equal(badSchema.code, 1);
  assert.match(badSchema.out, /schemaVersion must be 1/);
});

// ---- context-dependent identity ---------------------------------------------
// "The graph above" has an answer that lives half in the figure. Identity
// covers the block the stem names, so reversing the figure's shading strands
// the verdict exactly as changing the answer does.
const FIGURE = (intercept) => `{{< apfigure kind="graph" >}}
{"ariaLabel":"The line y = x ${intercept < 0 ? '-' : '+'} ${Math.abs(intercept)}.","lines":[{"slope":1,"intercept":${intercept}}]}
{{< /apfigure >}}`;
const CONTEXT_PAGE = (intercept) => `---
title: Context
---

{{< fillin question="Use the graph to find the range." answer="1" >}}

${FIGURE(intercept)}

{{< fillin question="The graph above shows a line. What is its $y$-intercept?" answer="${intercept}" >}}

{{< multiplechoice question="Using the same graph, is the slope positive?" answer="yes" >}}
yes
no
{{< /multiplechoice >}}

{{< fillin question="Solve $2x=8$." answer="4" >}}

{{< fillin question="Identify the intercept in the table below." answer="${intercept}" >}}

| x | y |
|---|---|
| 0 | ${intercept} |
`;

test('an exercise that names a figure changes identity when the figure changes; a self-contained one does not; "below" binds forward', () => {
  const before = extractExercises(join(scratch({ 'a.md': CONTEXT_PAGE(-1) }), 'content'));
  const after = extractExercises(join(scratch({ 'a.md': CONTEXT_PAGE(-2) }), 'content'));
  const [dangling, graphAsk, sameGraph, plain, tableAsk] = before;
  assert.equal(graphAsk.dependency.kind, 'apfigure');
  assert.equal(graphAsk.dependency.line, 7);
  assert.equal(graphAsk.reference.phrase, 'The graph above');
  assert.equal(sameGraph.dependency.kind, 'apfigure', 'a second "same graph" item skips the item before it');
  assert.equal(plain.dependency, undefined);
  assert.equal(tableAsk.reference.direction, 'below');
  assert.equal(tableAsk.dependency.kind, 'table');
  assert.equal(dangling.reference.phrase, 'Use the graph');
  assert.equal(dangling.dependency, undefined, 'a "use the graph" with nothing above it resolves to nothing');
  // Only the answers that read the figure changed text; the figure changed
  // for all of them.
  assert.notEqual(after[2].hash, sameGraph.hash, 'same shortcode text, different figure: different identity');
  assert.equal(after[2].raw, sameGraph.raw);
  assert.equal(after[3].hash, plain.hash, 'a self-contained exercise ignores the figure');
  assert.equal(after[0].hash, dangling.hash, 'an unresolved reference ignores the figure too');
  assert.equal(exerciseHash(dangling.raw), dangling.hash, 'an unresolved reference keeps raw-only identity');
});

test('rekey moves a legacy raw-only record to the context-aware key and refuses a conflicting target', () => {
  const dir = scratch({ 'a.md': CONTEXT_PAGE(-1) });
  mkdirSync(join(dir, 'data', 'verification'), { recursive: true });
  const found = extractExercises(join(dir, 'content'));
  const legacyKeyed = Object.fromEntries(found.map((e) => [exerciseHash(e.raw), { verdict: 'ok', note: `read ${e.kind}`, ...(e.kind === 'multiplechoice' ? { solved: { by: 'orchestrator', result: 'agrees' } } : {}) }]));
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: legacyKeyed }));
  const before = run(dir, ['check', 'content']);
  assert.equal(before.code, 1);
  assert.match(before.out, /3 exercise\(s\) have no current verification record/, 'the three bound items are stranded under their legacy keys');

  const rekey = run(dir, ['rekey', 'content']);
  assert.equal(rekey.code, 0, rekey.out);
  assert.match(rekey.out, /rekeyed 3 record\(s\) from 3 legacy key\(s\); 0 already current; 0 legacy record\(s\) absent[^;]*; 3 legacy key\(s\) retired; 5 total/);
  const ledger = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.deepEqual(ledger.entries[found[2].hash], { verdict: 'ok', note: 'read multiplechoice', solved: { by: 'orchestrator', result: 'agrees' } }, 'verdict, note, and solve ride along');
  assert.equal(ledger.entries[exerciseHash(found[2].raw)], undefined, 'the legacy key is retired');
  assert.equal(run(dir, ['check', 'content']).code, 0);
  assert.equal(run(dir, ['rekey', 'content']).code, 0, 'a second run is a no-op');

  // A target that already holds a different decision is two readings
  // disagreeing: nothing is written.
  writeFileSync(join(dir, 'data/verification/answer-ledger.json'), JSON.stringify({ schemaVersion: 1, entries: {
    ...legacyKeyed, [found[1].hash]: { verdict: 'defect', note: 'declared -1, derived -2' },
  } }));
  const conflict = run(dir, ['rekey', 'content']);
  assert.equal(conflict.code, 1);
  assert.match(conflict.out, /legacy record says ok, target already says defect/);
  assert.match(conflict.out, /nothing rekeyed/);
  const untouched = JSON.parse(readFileSync(join(dir, 'data/verification/answer-ledger.json'), 'utf8'));
  assert.equal(Object.keys(untouched.entries).length, 6, 'a refused rekey writes nothing');
});

test('list prints the dependency an exercise is bound to, and a packet-style context window is key-masked', () => {
  const dir = scratch({ 'a.md': CONTEXT_PAGE(-1) });
  const listed = JSON.parse(run(dir, ['list', 'content', '--context', '3']).out);
  assert.deepEqual(listed[1].dependency, { kind: 'apfigure', line: 7 });
  assert.equal(listed[0].dependency, undefined);
  assert.equal(listed[3].dependency, undefined);
  assert.doesNotMatch(listed[2].pageContext, /answer="-1"/, 'a neighbour\'s key is masked out of the context window');
  assert.match(listed[2].pageContext, /answer="…"/);
});
