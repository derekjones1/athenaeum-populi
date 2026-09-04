import assert from 'node:assert/strict';
import test from 'node:test';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * The per-page verifier ran over all 595 files inside `npm test` without a
 * single test of its own — the only untested module on that path. These
 * pin the two contracts that matter to its callers: an author's run lints
 * (steps 1–2), verify-all's `--skip-lint` run does not, and every finding
 * fails — there is no non-failing tier.
 */
const verifier = fileURLToPath(new URL('./verify-section.mjs', import.meta.url));
const repoRoot = fileURLToPath(new URL('../../', import.meta.url));

function run(args) {
  return spawnSync(process.execPath, [verifier, ...args], { cwd: repoRoot, encoding: 'utf8' });
}

// A page inside a chapter but NOT a numbered section (no `NN-` prefix), so
// the section-only rules — Practice block, hints, rubrics — stay out of the
// way and the two findings are exactly the ones planted: one lint defect
// (`\dfrac`) and one grader defect (an MC whose answer is not among its
// options), so the two tiers of finding are distinguishable.
const fixture = mkdtempSync(join(tmpdir(), 'ap-verify-section-'));
const section = join(fixture, 'content', 'math', 'book', '01-chapter', 'note.md');
mkdirSync(join(fixture, 'content', 'math', 'book', '01-chapter'), { recursive: true });
const page = (body) => `---\ntitle: A Section\nweight: 1\n---\n\n${body}\n`;
const dirty = page([
  'Compute $\\dfrac{1}{2}$.',
  '{{< multiplechoice question="Which?" answer="c" hint="h" >}}\na\nb\n{{< /multiplechoice >}}',
].join('\n\n'));
const clean = page('{{< fillin question="Find $1+1$." answer="2" hint="h" >}}');

test('an author run lints and grades; every finding fails the run', () => {
  writeFileSync(section, dirty);
  const result = run([section]);
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stderr, /\\dfrac is banned/, 'step 1 (lint) fires');
  assert.match(result.stderr, /is not one of the options/, 'step 5 (grader) fires');
  assert.match(result.stderr, /✖ \d+ problem\(s\)\./);
});

test('--skip-lint drops steps 1–2 only, so verify-all can leave the lint pass to lint-all', () => {
  writeFileSync(section, dirty);
  const result = run(['--skip-lint', section]);
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.doesNotMatch(result.stderr, /\\dfrac is banned/, 'the lint finding is not repeated');
  assert.match(result.stderr, /is not one of the options/, 'the grader finding still fails');
});

test('a clean page reports success in the shared banner shape', () => {
  writeFileSync(section, clean);
  const result = run([section]);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout, /✓ 1 section\(s\) verified\./);
  assert.equal(result.stderr, '');
});

test('a bad command line is a usage error, never a silent run', () => {
  assert.equal(run([]).status, 2, 'no files');
  const bogus = run(['--bogus', section]);
  assert.equal(bogus.status, 2);
  assert.match(bogus.stderr, /unknown flag --bogus/);
});

test.after(() => rmSync(fixture, { recursive: true, force: true }));
