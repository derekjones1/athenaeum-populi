// The layout checker is a gate on figure READABILITY: it must fail on a
// label printed across other ink and stay quiet on a clean page. Proven by
// running the real CLI on two tiny fixture pages (the dirty one is the
// four-arrow reciprocal figure exactly as precalculus 3.7 first shipped it,
// with every annotation parked on the axis letters and the curve).
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const TOOL = new URL('./check-figure-overlaps.mjs', import.meta.url).pathname;

function runOn(markdown) {
  const dir = mkdtempSync(join(tmpdir(), 'figcheck-'));
  const file = join(dir, 'page.md');
  writeFileSync(file, markdown);
  try {
    const out = execFileSync(process.execPath, [TOOL, file], { encoding: 'utf8' });
    return { code: 0, out };
  } catch (e) {
    return { code: e.status, out: `${e.stdout}${e.stderr}` };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const page = (spec) => `---
title: T
---

{{< apfigure kind="graph" >}}
${JSON.stringify(spec)}
{{< /apfigure >}}
`;

test('the layout checker fails a figure whose labels print over other ink', () => {
  const { code, out } = runOn(page({
    ariaLabel: 'overlapping',
    xMin: -5, xMax: 5, yMin: -5, yMax: 5, unit: 24, tickLabels: true, tickStep: 1,
    rationals: [{ num: [1], den: [0, 1] }],
    texts: [
      { at: [0.3, 4.85], text: 'Right of 0: f(x) → ∞', anchor: 'start' },
      { at: [1.1, 0.65], text: 'As x → ∞: f(x) → 0', anchor: 'start' },
    ],
  }));
  assert.equal(code, 1, 'a page with real overlaps must exit 1');
  assert.match(out, /text-text|text-curve/, 'the overlap is named');
});

test('the layout checker passes a clean figure and a blank grid', () => {
  const { code, out } = runOn(page({
    ariaLabel: 'clean',
    xMin: -5, xMax: 5, yMin: -5, yMax: 5, unit: 24, tickLabels: true, tickStep: 2,
    lines: [{ slope: 1, intercept: 0, label: 'y = x' }],
  }));
  assert.equal(code, 0, `clean page must exit 0, got:\n${out}`);
  assert.match(out, /0 with real overlaps/);
});

test('the layout checker reports a spec that cannot build as a failure', () => {
  const { code, out } = runOn(page({ ariaLabel: 'bad', circles: [{ at: [0, 0], r: 0 }] }));
  assert.equal(code, 1);
  assert.match(out, /failed to build/);
});

test('--status derives the conversion queue from the content itself', () => {
  const dir = mkdtempSync(join(tmpdir(), 'figstatus-'));
  writeFileSync(join(dir, 'converted.md'), page({
    ariaLabel: 'clean', xMin: -5, xMax: 5, yMin: -5, yMax: 5,
    lines: [{ slope: 1, intercept: 0 }],
  }));
  writeFileSync(join(dir, 'legacy.md'), '---\ntitle: L\n---\n\n'
    + '<div class="ap-figure" data-spec=\'{"type":"graph","ariaLabel":"old","lines":[{"slope":1,"intercept":0}]}\'>\n'
    + '<svg viewBox="0 0 10 10"></svg></div>\n');
  writeFileSync(join(dir, 'prose-only.md'), '---\ntitle: P\n---\n\nNo figures here.\n');
  try {
    const out = execFileSync(process.execPath, [TOOL, '--status', dir], { encoding: 'utf8' });
    assert.match(out, /converted\s+.*converted\.md/, 'an apfigure page reads converted — an agent skips it');
    assert.match(out, /TODO\s+.*legacy\.md/, 'a data-spec page is the conversion queue');
    assert.doesNotMatch(out, /prose-only\.md/, 'a page with no figures is not listed at all');
    assert.match(out, /1 converted, 1 still carrying/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('--status counts a spec-less ap-figure div, which no geometry gate can see', () => {
  // The oldest figure form: hand-written SVG in an ap-figure div with no
  // data-spec. Nothing can build it, so it is invisible to the lint, to
  // figures.spec.mjs, and to this tool's own readability pass. A queue that
  // called such a page "converted" would be reporting coverage it does not
  // have — the vacuous-gate failure AGENTS.md names.
  const dir = mkdtempSync(join(tmpdir(), 'figstatus-'));
  writeFileSync(join(dir, 'half.md'), page({
    ariaLabel: 'clean', xMin: -5, xMax: 5, yMin: -5, yMax: 5,
    lines: [{ slope: 1, intercept: 0 }],
  }) + '\n<div class="ap-figure">\n<svg role="img" aria-label="hand-drawn"><line x1="0" y1="0" x2="1" y2="1"/></svg>\n</div>\n');
  try {
    const out = execFileSync(process.execPath, [TOOL, '--status', dir], { encoding: 'utf8' });
    assert.match(out, /mixed\s+.*half\.md/, 'one spec-less figure keeps the page off the converted list');
    assert.match(out, /1 hand-written SVG \(no spec\)/);
    assert.match(out, /no spec at all/, 'the summary names the population');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
