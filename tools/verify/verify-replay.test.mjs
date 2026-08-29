/**
 * Run with:  node --test tools/verify/verify-replay.test.mjs   (needs Node 22+)
 *
 * The replay gate can only fail on spans it actually replays, so everything
 * that removes a span from the run is load-bearing: an over-broad exclusion
 * turns the gate vacuous for a whole class of exercises without changing a
 * single line of its summary.
 *
 * That is exactly what happened twice. An any-`=` equation skip took every
 * "Expand the partial sum and find its value: $\sum_{i=1}^{5}3i$" out of the
 * replay, because a summation writes its lower bound with an equals — the
 * very class whose fillins graded the retyped sigma 'correct'. And the
 * allowlist was checked before the spans were even extracted, so listing a
 * fillin for its one sound coincidence exempted all 191 spans of the 45
 * fillins that matched, when only 39 of them actually collided.
 *
 * Both are gone: the gate now replays every span it can grade, and an
 * allowlist entry exempts ONE named span. What is pinned here is that the
 * remaining exclusions stay honest — the allowlist points at real fillins and
 * real spans, the skip classes are all named and carry their unit, and the
 * command line means what it says.
 *
 * Deliberately imports nothing from the grader for the string predicates:
 * those must be provable without the compute engine.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

import { walkMarkdown, mathSpans, shortcodes } from '../lib/content.mjs';
import {
  SKIP_CLASSES, SOUND_COINCIDENCES, mathliveSpelling, parseReplayArgs,
} from './verify-replay.mjs';

const REPLAY_TOOL = new URL('./verify-replay.mjs', import.meta.url).pathname;

// The learner's field re-emits compact source TeX in a normalized spelling,
// and the gate replays both. A source-only replay reported 'invalid' for
// exactly the input that grades 'correct' once a learner types it.
const MATHLIVE_SPELLINGS = [
  ['\\tfrac12', '\\frac{1}{2}'],
  ['\\frac1{16}', '\\frac{1}{16}'],
  ['\\sqrt2', '\\sqrt{2}'],
  ['\\sqrt[3]4', '\\sqrt[3]{4}'],
  ['\\dfrac{x}{y}', '\\frac{x}{y}'],
  ['\\sum_{n=1}^{5}\\tfrac{n}{n+1}', '\\sum_{n=1}^{5}\\frac{n}{n+1}'],
  ['8(4x)', '8(4x)'],
  ['45', '45'],
];

test('the MathLive spelling of a source span is what the learner can submit', async (t) => {
  for (const [source, expected] of MATHLIVE_SPELLINGS) {
    await t.test(source, () => {
      assert.equal(mathliveSpelling(source), expected);
      // Idempotent: the gate replays both spellings, and a normalization that
      // moved on a second pass would mean it replays a third string nobody
      // can type.
      assert.equal(mathliveSpelling(expected), expected);
    });
  }
});

test('every skip class is named and carries the unit it counts', () => {
  // Two of the five old classes counted fillins and three counted spans, and
  // the summary printed them in one comma list as though they were the same
  // measurement.
  assert.ok(SKIP_CLASSES.length > 0);
  for (const entry of SKIP_CLASSES) {
    assert.equal(typeof entry.key, 'string', JSON.stringify(entry));
    assert.ok(['fillin', 'span'].includes(entry.unit), `${entry.key} names its unit`);
    assert.ok(entry.key.endsWith(entry.unit), `${entry.key} agrees with its declared unit`);
  }
  assert.equal(new Set(SKIP_CLASSES.map((c) => c.key)).size, SKIP_CLASSES.length);
});

// ---- the allowlist points at real, single, colliding spans -----------------
// A stale entry is invisible without this: it exempts nothing, so the gate
// still passes, and the reason it records describes an exercise that has
// moved or been rewritten. One entry named a file that does not exist.
test('every sound-coincidence entry names one real fillin and one printed span', async (t) => {
  const questionsByFile = new Map();
  for (const file of walkMarkdown('content/math')) {
    const rel = file.split('\\').join('/').replace(/^\.\//, '');
    const src = readFileSync(file, 'utf8');
    const fillins = [];
    for (const sc of shortcodes(src, 'fillin')) {
      if (sc.params.question) fillins.push(sc.params);
    }
    questionsByFile.set(rel, fillins);
  }
  const printedSpans = (question) => {
    const spans = [];
    let prose = question;
    for (const s of mathSpans(question, { allowNewlines: true })) {
      spans.push(s.tex.trim());
      prose = prose.slice(0, s.index) + ' '.repeat(s.length) + prose.slice(s.index + s.length);
    }
    for (const m of prose.matchAll(/(?<![\w.,−-])[−-]?\d+(?:\.\d+)?(?!\.?\d|\w)/g)) spans.push(m[0].trim());
    return spans;
  };

  for (const [file, prefix, span, reason] of SOUND_COINCIDENCES) {
    await t.test(`${file} :: ${span}`, () => {
      const fillins = [...questionsByFile.entries()]
        .filter(([rel]) => rel.endsWith(file))
        .flatMap(([, list]) => list);
      assert.ok(fillins.length > 0, `${file} has no fillins — the entry names a file that is not in the corpus`);
      const matched = fillins.filter((params) => params.question.startsWith(prefix));
      assert.equal(matched.length, 1,
        `the question prefix must name exactly ONE fillin, matched ${matched.length}`);
      assert.ok(printedSpans(matched[0].question).includes(span),
        `the exempted span ${JSON.stringify(span)} is not printed by that question`);
      assert.ok(reason.trim().length > 0, 'every exemption records why it is sound');
    });
  }
});

test('no two allowlist entries exempt the same span of the same question', () => {
  const seen = new Set();
  for (const [file, prefix, span] of SOUND_COINCIDENCES) {
    const key = `${file}|${prefix}|${span}`;
    assert.ok(!seen.has(key), `duplicate exemption: ${key}`);
    seen.add(key);
  }
});

// ---- the command line ------------------------------------------------------
// `argv[2]` used to BE the content root unconditionally, so
// `--min-replayed 6578` died on `ENOENT: scandir '--min-replayed/math'` in
// front of the root and was silently ignored behind it. A floor that never
// fires is worse than none: the summary still says the run passed.
test('the command line is parsed, not positionally assumed', async (t) => {
  await t.test('the root defaults, and a bare argument sets it', () => {
    assert.deepEqual(parseReplayArgs([]), { root: 'content', minReplayed: null, file: null });
    assert.deepEqual(parseReplayArgs(['content']), { root: 'content', minReplayed: null, file: null });
  });

  await t.test('--min-replayed is mistaken for neither the root nor --file', () => {
    for (const argv of [['--min-replayed', '6578'], ['--min-replayed=6578']]) {
      const parsed = parseReplayArgs(argv);
      assert.equal(parsed.minReplayed, 6578, argv.join(' '));
      assert.equal(parsed.root, 'content', argv.join(' '));
      assert.equal(parsed.file, null, argv.join(' '));
    }
  });

  await t.test('the flag works on either side of the root', () => {
    assert.deepEqual(parseReplayArgs(['content', '--min-replayed', '10']),
      { root: 'content', minReplayed: 10, file: null });
    assert.deepEqual(parseReplayArgs(['--min-replayed', '10', 'content']),
      { root: 'content', minReplayed: 10, file: null });
  });

  await t.test('--file stays an explicit mode', () => {
    const parsed = parseReplayArgs(['--file', 'content/math/x.md']);
    assert.equal(parsed.file, 'content/math/x.md');
    assert.equal(parsed.minReplayed, null);
  });

  await t.test('a non-integer floor is a usage error, not a silent zero', () => {
    for (const argv of [['--min-replayed'], ['--min-replayed', 'lots'], ['--min-replayed=']]) {
      assert.throws(() => parseReplayArgs(argv), /--min-replayed needs a whole number/, argv.join(' '));
    }
    assert.throws(() => parseReplayArgs(['--nope']), /unknown option/);
    assert.throws(() => parseReplayArgs(['content', 'other']), /unexpected argument/);
  });
});

test('a textin question that IS its own answer fails replay, and a safe one is counted', () => {
  const dir = mkdtempSync(join(tmpdir(), 'replay-textin-'));
  try {
    const file = join(dir, 'a.md');
    writeFileSync(file, [
      '---\ntitle: Sample\n---\n',
      '{{< textin question="mitochondria" answer="mitochondria" >}}',
      '',
      '{{< textin question="Name the organelle that makes ATP." answer="mitochondria" >}}',
    ].join('\n'));
    const result = spawnSync(process.execPath, [REPLAY_TOOL, '--file', file], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const parsed = JSON.parse(result.stdout);
    assert.equal(parsed.replayed, 2, 'each textin question counts as one replayed span for the --min-replayed floor');
    assert.equal(parsed.failures.length, 1, `only the retype-passable question fails: ${JSON.stringify(parsed.failures)}`);
    assert.match(parsed.failures[0], /accepts its own printed question/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
