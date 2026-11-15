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
  SKIP_CLASSES, SOUND_COINCIDENCES, chemSpans, mathliveSpelling, parseReplayArgs,
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
  // The whole corpus, not content/math: Chemistry's fill-ins are replayed
  // too, and its first entry (a total mass that IS the printed reactant
  // mass, by conservation of matter) was "a file that is not in the corpus".
  for (const file of walkMarkdown('content')) {
    const rel = file.split('\\').join('/').replace(/^\.\//, '');
    const src = readFileSync(file, 'utf8');
    const fillins = [];
    for (const sc of shortcodes(src, 'fillin')) {
      if (sc.params.question) fillins.push(sc.params);
    }
    // A formula or equation text-in is replayed too (Chemistry 2.4: sucrose
    // is its own empirical formula), and its entry is held the same way.
    for (const sc of shortcodes(src, 'textin')) {
      if (sc.params.question && sc.params.answerForm) fillins.push(sc.params);
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
      const printed = matched[0].answerForm && /^(?:formula|equation)$/.test(matched[0].answerForm)
        ? chemSpans(matched[0].question, matched[0].answerForm)
        : printedSpans(matched[0].question);
      assert.ok(printed.includes(span),
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
    for (const argv of [['--min-replayed', 'lots'], ['--min-replayed=']]) {
      assert.throws(() => parseReplayArgs(argv), /--min-replayed needs a whole number/, argv.join(' '));
    }
    assert.throws(() => parseReplayArgs(['--min-replayed']), /--min-replayed needs a value/);
    assert.throws(() => parseReplayArgs(['--nope']), /unknown flag/);
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

test('a formula or equation a text-in stem prints is a span a learner can copy', () => {
  // Chemistry 2e 2.4: sucrose is already its own empirical formula.
  assert.deepEqual(chemSpans('Determine the empirical formula for the following compound: sucrose, C₁₂H₂₂O₁₁.', 'formula'),
    ['Determine', 'C₁₂H₂₂O₁₁']);
  assert.deepEqual(chemSpans('For the following pair of ions, write the formula of the compound they will form: NH₄⁺, SO₄²⁻', 'formula'),
    ['For', 'NH₄⁺', 'SO₄²⁻']);
  assert.deepEqual(chemSpans('Balance the following equation: PCl₅(s) + H₂O(l) ⟶ POCl₃(l) + HCl(aq).', 'equation'),
    ['PCl₅(s) + H₂O(l) ⟶ POCl₃(l) + HCl(aq)']);
  assert.deepEqual(chemSpans('Write a balanced equation for the decomposition of calcium carbonate.', 'equation'), []);
});

test('a configuration or an ordering a text-in stem prints is a span a learner can copy (Chemistry 2e chapter 6)', async () => {
  const { checkText } = await import('../../assets/js/lib/text/check-text.mjs');
  const replays = (question, key, form) => chemSpans(question, form).filter((span) => checkText(span, key, { form }) === 'correct');
  // 6.4: the stem's example configuration is no atom's key, and replays as wrong.
  const NOTATION = 'Using complete subshell notation (1s²2s²2p⁶, and so forth), predict the electron configuration of the following atom: N. Type each subshell followed by its number of electrons, with a space between subshells.';
  assert.deepEqual(chemSpans(NOTATION, 'configuration'), ['1s²2s²2p⁶']);
  assert.deepEqual(replays(NOTATION, '1s²2s²2p³', 'configuration'), []);
  assert.deepEqual(replays(NOTATION, '1s²2s²2p⁶', 'configuration'), ['1s²2s²2p⁶'], 'neon would be answered by the stem');
  assert.deepEqual(chemSpans('Which atom has the electron configuration [Kr]5s²4d¹⁰?', 'configuration'), ['[Kr]5s²4d¹⁰']);
  // 6.5: the stem lists the members; copied, the list is read in the key's direction.
  const RANK = 'Based on their positions in the periodic table, rank the following atoms in order of increasing first ionization energy: F, Li, N, Rb. Type the symbols in the order you rank them, separated by <.';
  assert.deepEqual(chemSpans(RANK, 'ordering'), ['F, Li, N, Rb']);
  assert.deepEqual(replays(RANK, 'Rb < Li < N < F', 'ordering'), [], 'listed in another order, the copy is wrong');
  const IONS = 'Based on their positions in the periodic table, list the following ions in order of increasing radius: K⁺, Ca²⁺, Al³⁺, Si⁴⁺. Type the symbols in the order you rank them, separated by <.';
  assert.deepEqual(chemSpans(IONS, 'ordering'), ['K⁺, Ca²⁺, Al³⁺, Si⁴⁺']);
  assert.deepEqual(replays(IONS, 'Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺', 'ordering'), [], 'the stem lists the reverse');
  // …and a stem that lists them in the key's order (6.5's Exercise 9) is not answered by its own
  // list either: a list with no sign is refused (ruled November 15, 2026).
  const RADIUS = 'Based on their positions in the periodic table, list the following atoms in order of increasing radius: Mg, Ca, Rb, Cs. Type the symbols in the order you rank them, separated by <.';
  assert.deepEqual(chemSpans(RADIUS, 'ordering'), ['Mg, Ca, Rb, Cs']);
  assert.deepEqual(replays(RADIUS, 'Mg < Ca < Rb < Cs', 'ordering'), []);
});

test('a set of quantum numbers a text-in stem prints is a span a learner can copy (Chemistry 2e 6.3)', async () => {
  const { checkText } = await import('../../assets/js/lib/text/check-text.mjs');
  const replays = (question, key) => chemSpans(question, 'quantum-numbers').filter((span) => checkText(span, key, { form: 'quantum-numbers' }) === 'correct');
  const CLOSE = 'Type the four values in the order n, l, mₗ, mₛ, separated by spaces.';
  // 6.3's stem prints n alone: the only span is the stem itself, which the reader refuses.
  const X = `Consider the orbitals shown here in outline. Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Of an orbital of type (y) in a shell with n = 2. Of an orbital of type (z) in a shell with n = 3. Enter the set for the orbital of type (x) shown in the figure above. ${CLOSE}`;
  assert.deepEqual(chemSpans(X, 'quantum-numbers'), [X]);
  assert.deepEqual(replays(X, '4 0 0 +1/2'), []);
  // A stem that printed a set of the key's shell and subshell would be answered by it, in either writing.
  assert.deepEqual(replays(`Is 4 0 0 ½ a possible set? ${CLOSE}`, '4 0 0 +1/2'), ['4 0 0 ½']);
  assert.deepEqual(replays(`Is n = 2, l = 1, mₗ = −1, and mₛ = −½ a possible set? ${CLOSE}`, '2 1 0 +1/2'), ['n = 2, l = 1, mₗ = −1, mₛ = −½']);
  assert.deepEqual(replays(`Is 2 0 0 ½ a possible set? ${CLOSE}`, '2 1 0 +1/2'), [], 'another subshell');
});
