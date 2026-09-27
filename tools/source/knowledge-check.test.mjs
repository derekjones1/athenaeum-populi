import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { assemble, chapterBlocks, findLeaks, plannedWeights, provenanceResults } from './knowledge-check.mjs';

// knowledge-check.mjs is the parent's kit for a Knowledge Check run
// (docs/briefs/anatomy-physiology/kc-run.md). Earlier runs rebuilt these
// scripts in their scratchpads; one of them shifted the wrong weight range.

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'knowledge-check.mjs');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

const book = (chapters, checks, weights = {}) => {
  const dir = mkdtempSync(path.join(tmpdir(), 'kc-book-'));
  for (const n of chapters) {
    const name = `${String(n).padStart(2, '0')}-chapter-${n}`;
    mkdirSync(path.join(dir, name));
    writeFileSync(path.join(dir, name, '_index.md'), `---\ntitle: Chapter ${n}\nsource_chapter: "${n}"\nweight: ${weights[name] ?? n}\n---\n\nBody.\n`);
  }
  for (const [first, last, weight] of checks) {
    const name = `knowledge-check-${String(first).padStart(2, '0')}-${String(last).padStart(2, '0')}.md`;
    writeFileSync(path.join(dir, name), `---\ntitle: Check\nsource_chapters: "${first}-${last}"\nweight: ${weight}\n---\n`);
  }
  return dir;
};

test('weights are derived from what exists: a new check moves only the chapters after its last chapter', () => {
  // Unit 1 is chapters 1–2; its check lands with every chapter still at its number.
  const dir = book([1, 2, 3, 4], [[1, 2, 99]]);
  const plan = plannedWeights(dir).map((e) => [path.relative(dir, e.file).replace('/_index.md', ''), e.current, e.target]);
  assert.deepEqual(plan, [
    ['01-chapter-1', 1, 1], ['02-chapter-2', 2, 2], ['knowledge-check-01-02.md', 99, 3],
    ['03-chapter-3', 3, 4], ['04-chapter-4', 4, 5],
  ], 'the unit\'s own last chapter keeps its weight; the check and every later chapter move');
  // --write applies it and the book is then in order.
  const out = spawnSync(process.execPath, [SCRIPT, 'weights', dir], { encoding: 'utf8' });
  assert.equal(out.status, 1, 'a book out of order exits 1 without --write');
  execFileSync(process.execPath, [SCRIPT, 'weights', dir, '--write']);
  assert.match(readFileSync(path.join(dir, '03-chapter-3', '_index.md'), 'utf8'), /^weight: 4$/m);
  assert.equal(spawnSync(process.execPath, [SCRIPT, 'weights', dir], { encoding: 'utf8' }).status, 0);
});

test('a check whose last chapter is not authored yet is refused', () => {
  assert.throws(() => plannedWeights(book([1, 2], [[1, 4, 5]])), /no chapter ends where knowledge-check-01-04\.md does/);
});

test('every book in the tree already has its derived weights', () => {
  for (const shelf of ['math', 'life-health-sciences']) {
    const shelfDir = path.join(ROOT, 'content', shelf);
    for (const name of ['prealgebra', 'elementary-algebra', 'intermediate-algebra', 'precalculus', 'biology', 'microbiology', 'anatomy-physiology']) {
      const dir = path.join(shelfDir, name);
      let plan;
      try { plan = plannedWeights(dir); } catch (error) { if (error.code === 'ENOENT') continue; throw error; }
      const off = plan.filter((e) => e.current !== e.target);
      assert.deepEqual(off, [], `${shelf}/${name}`);
    }
  }
});

const HEAD = '---\ntitle: "Knowledge Check: Unit 1 — Chapters 1–2"\nsource_chapters: "1-2"\nweight: 3\n---\n\n{{< callout type="info" >}}\nCovers chapters 1–2.\n{{< /callout >}}\n';
const FOOT = '---\n\n<small>Adapted from OpenStax. Changes: every item is locally written.</small>\n';
const scratch = (n) => `---\ntitle: scratch\n---\n\n## Chapter ${n}: Title ${n}\n\n### ${n}.1 First\n\n{{< textin question="Q${n}?" answer="a${n}" >}}\n\n---\n\n<small>scratch footer</small>\n`;

test('assemble joins the head, the chapter blocks in order, and one footer last', () => {
  const page = assemble(HEAD, [scratch(1), scratch(2)], FOOT);
  assert.equal(page.match(/<small>/g).length, 1, 'the scratch footers are cut');
  assert.ok(page.indexOf('## Chapter 1') < page.indexOf('## Chapter 2'));
  assert.ok(page.trimEnd().endsWith('</small>'), 'the footer is the last element');
  assert.equal(chapterBlocks(scratch(1)).split('\n')[0], '## Chapter 1: Title 1');
  assert.throws(() => assemble(HEAD, [scratch(2), scratch(1)], FOOT), /out of order/);
  assert.throws(() => assemble(HEAD, [scratch(1)], FOOT), /source_chapters "1-2" does not match/);
  assert.throws(() => assemble(HEAD, [scratch(1), scratch(2).replace('### 2.1', '### 3.1')], FOOT), /sits under Chapter 2/);
});

test('notes match provenance by stem, keep the ledger\'s verdict and solve, and list gaps', () => {
  const solved = { by: 'orchestrator-solver', result: 'agrees' };
  const exercises = [
    { hash: 'a'.repeat(16), line: 5, kind: 'textin', params: { question: 'The <sub>2</sub> *italic* stem ________.' } },
    { hash: 'b'.repeat(16), line: 9, kind: 'multiplechoice', params: { question: 'An item nobody recorded?' } },
  ];
  const provenance = {
    'The 2 italic stem ________.': 'KC 1 1.1 § Membranes, m1',
    'A stem that is no longer on the page?': 'KC 1 1.2 § glossary cell (d1), m2',
  };
  const { results, missing, unused } = provenanceResults(exercises, provenance, { ['a'.repeat(16)]: { verdict: 'ok', note: 'orchestrator solve (solve-check.mjs)', solved } });
  assert.deepEqual(results, [{ hash: 'a'.repeat(16), verdict: 'ok', note: 'KC 1 1.1 § Membranes, m1', solved }]);
  assert.deepEqual(missing.map((m) => m.line), [9]);
  assert.deepEqual(unused, ['A stem that is no longer on the page?']);
  assert.throws(() => provenanceResults(exercises.slice(0, 1), { 'The 2 italic stem ________.': 'from the membranes section' }), /does not open "KC <n> <N\.M> § …"/);
});

test('leaks report a key printed by another item, through the plural fold, but not an item\'s own options or a count', () => {
  const page = [
    '{{< textin question="A structure that ________." answer="dermatophyte" >}}',
    '{{< multiplechoice question="Which fungi grow on skin, like dermatophytes?" answer="Trichophyton" >}}\nTrichophyton\nCandida\n{{< /multiplechoice >}}',
    '{{< multiplechoice question="How many?" answer="three" >}}\ntwo\nthree\n{{< /multiplechoice >}}',
    '{{< multiplechoice question="How many again?" answer="four" >}}\nthree\nfour\n{{< /multiplechoice >}}',
  ].join('\n\n');
  const leaks = findLeaks(page);
  assert.deepEqual(leaks.map((l) => [l.key, l.as, l.part, l.printedLine]), [['dermatophyte', 'dermatophytes', 'stem', 3]]);
});
