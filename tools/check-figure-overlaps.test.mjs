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
