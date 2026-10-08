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

function runOn(markdown, args = []) {
  const dir = mkdtempSync(join(tmpdir(), 'figcheck-'));
  const file = join(dir, 'page.md');
  writeFileSync(file, markdown);
  try {
    const out = execFileSync(process.execPath, [TOOL, ...args, file], { encoding: 'utf8' });
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

// ---------------------------------------------------------------------------
// The queue counts every inline <svg>, bare or wrapped, and sets the pictorial
// ones (data-pictorial: no engine primitive, kept hand-drawn by decision)
// apart so they never block `converted` (October 7, 2026).

const specFirstPage = () => page({
  ariaLabel: 'clean', xMin: -5, xMax: 5, yMin: -5, yMax: 5,
  lines: [{ slope: 1, intercept: 0 }],
});
const bareSvg = (attrs = '') => `\n<svg role="img" aria-label="counters"${attrs} viewBox="0 0 40 20"><circle cx="10" cy="10" r="4"/></svg>\n`;

test('--status counts a bare <svg> in no wrapper as hand-written, which keeps the page mixed', () => {
  const { code, out } = runOn(specFirstPage() + bareSvg(), ['--status']);
  assert.equal(code, 0, out);
  assert.match(out, /mixed\s+.*page\.md/, 'one bare svg keeps a spec-first page off the converted list');
  assert.match(out, /1 spec-first, 1 hand-written SVG \(no spec\)/);
  assert.match(out, /1 page\(s\) with figures: 0 converted, 1 still carrying legacy or hand-written figures\./);
  assert.match(out, /1 of those are hand-written SVG with no spec at all/);
  assert.doesNotMatch(out, /pictorial/, 'no pictorial wording when nothing is pictorial');
});

test('--status sets a data-pictorial <svg> apart: kept hand-drawn, the page reads converted', () => {
  const { code, out } = runOn(specFirstPage() + bareSvg(' data-pictorial'), ['--status']);
  assert.equal(code, 0, out);
  assert.match(out, /converted\s+.*page\.md/, 'a pictorial svg does not block converted');
  assert.match(out, /1 spec-first, 1 pictorial SVG \(kept\)/);
  assert.doesNotMatch(out, /hand-written SVG/, 'a pictorial svg is not hand-written conversion debt');
  assert.match(out, /1 page\(s\) with figures: 1 converted, 0 still carrying/);
  assert.match(out, /1 pictorial SVG\(s\) are kept as hand-drawn by decision \(data-pictorial\) and are not conversion debt\./);
  // every spelling of the attribute counts, and a page of only pictorial svgs is listed (converted), not dropped
  for (const attr of [' data-pictorial=""', ' data-pictorial="true"', " data-pictorial='true'"]) {
    const only = runOn(`---\ntitle: T\n---\n${bareSvg(attr)}`, ['--status']).out;
    assert.match(only, /converted\s+.*page\.md\s+\(1 pictorial SVG \(kept\)\)/, attr);
  }
});

test('--status counts a legacy data-spec div once, not again for its frozen <svg>', () => {
  const legacy = '---\ntitle: L\n---\n\n'
    + '<div class="ap-figure" data-spec=\'{"type":"graph","ariaLabel":"old","lines":[{"slope":1,"intercept":0}]}\'>\n'
    + '  <div class="inner"><svg role="img" aria-label="old" viewBox="0 0 10 10"><line x1="0" y1="0" x2="1" y2="1"/></svg></div>\n'
    + '</div>\n';
  const { out } = runOn(legacy, ['--status']);
  assert.match(out, /TODO\s+.*page\.md\s+\(1 legacy\)/, `the frozen render is the spec's own, not a second figure:\n${out}`);
  assert.doesNotMatch(out, /hand-written SVG/);
  const json = JSON.parse(runOn(legacy, ['--status', '--json']).out).pages[0];
  assert.deepEqual([json.specFirst, json.legacy, json.handwritten, json.pictorial], [0, 1, 0, 0]);
  // a bare svg AFTER the legacy block is outside it and still counts
  const after = JSON.parse(runOn(legacy + bareSvg(), ['--status', '--json']).out).pages[0];
  assert.deepEqual([after.legacy, after.handwritten], [1, 1]);
});

test('--status counts an ap-figure div with no data-spec as one hand-written svg', () => {
  const wrapped = '---\ntitle: W\n---\n\n<div class="ap-figure">\n'
    + '<svg role="img" aria-label="hand-drawn" viewBox="0 0 10 10"><line x1="0" y1="0" x2="1" y2="1"/></svg>\n</div>\n';
  const { out } = runOn(wrapped, ['--status']);
  assert.match(out, /TODO\s+.*page\.md\s+\(1 hand-written SVG \(no spec\)\)/, out);
  const json = JSON.parse(runOn(wrapped, ['--status', '--json']).out).pages[0];
  assert.deepEqual([json.legacy, json.handwritten, json.pictorial], [0, 1, 0]);
});

test('a data-pictorial <svg> is kept out of the queue but never out of the overlap gate', () => {
  const body = '<text x="60" y="50" font-size="13" fill="currentColor">y = 2x + 1</text>\n<text x="70" y="54" font-size="13" fill="currentColor">(3, 7)</text>';
  const pictorial = `---\ntitle: T\n---\n\n<svg role="img" aria-label="fixture" data-pictorial viewBox="0 0 200 120" width="200" height="120">\n${body}\n</svg>\n`;
  const { code, out } = runOn(pictorial, ['--json']);
  assert.equal(code, 1, 'overlapping labels in a pictorial svg still fail the run');
  const inline = JSON.parse(out).inline;
  assert.equal(inline.figures, 1);
  assert.equal(inline.dirty, 1);
});

// ---------------------------------------------------------------------------
// Hand-written inline SVG: read from the markup, gating since September 28,
// 2026 (INLINE_SVG_GATES in the tool). Each fixture is one figure; the verdict is
// read from --json so a test pins the exact finding, not console wording.

/** a page holding ONE inline figure whose body is the given element lines (the <svg> opens on line 5) */
const svgPage = (...lines) => `---\ntitle: T\n---\n\n<svg role="img" aria-label="fixture" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="200" height="120" font-family="Helvetica, Arial, sans-serif">\n${lines.join('\n')}\n</svg>\n`;

function inlineReport(markdown) {
  const { code, out } = runOn(markdown, ['--json']);
  const json = JSON.parse(out);
  return { code, inline: json.inline, real: json.inline.report.flatMap((r) => r.found.filter((c) => !c.graze)), all: json.inline.report.flatMap((r) => r.found) };
}

test('inline SVG: two labels printed over each other are a text-text finding', () => {
  const { real, inline } = inlineReport(svgPage(
    '<text x="60" y="50" font-size="13" fill="currentColor">y = 2x + 1</text>\n<text x="70" y="54" font-size="13" fill="currentColor">(3, 7)</text>',
  ));
  assert.equal(inline.figures, 1);
  assert.equal(inline.dirty, 1);
  assert.ok(real.some((c) => c.kind === 'text-text' && c.a === 'y = 2x + 1' && c.b === '(3, 7)'), JSON.stringify(real));
});

test('inline SVG: a cubic path curve through a label is a text-curve finding; a grid hairline is not', () => {
  const { real, all } = inlineReport(svgPage(
    // faint gridline straight through the label: background, never ink
    '<line x1="0" y1="45" x2="200" y2="45" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
    // an S-curve whose middle passes through the label box around (100, 45)
    '<path d="M 20 100 C 80 100, 120 -10, 180 10" fill="none" stroke="currentColor" stroke-width="1.8"/>',
    '<text x="100" y="50" font-size="13" text-anchor="middle" fill="currentColor">vertex</text>',
  ));
  assert.ok(real.some((c) => c.kind === 'text-curve' && c.a === 'vertex'), JSON.stringify(real));
  assert.ok(!all.some((c) => c.kind === 'text-line'), 'the faint gridline is background');
});

test('inline SVG: group transforms move the ink the label is checked against', () => {
  // The line is drawn at x = 10 inside a group translated by +90: it lands
  // at x = 100, through the label. Untranslated, it would be clear.
  const hit = inlineReport(svgPage(
    '<g transform="translate(90 0)" stroke="currentColor" stroke-width="1.5"><line x1="10" y1="10" x2="10" y2="110"/></g>',
    '<text x="100" y="60" font-size="13" text-anchor="middle" fill="currentColor">label</text>',
  ));
  assert.ok(hit.real.some((c) => c.kind === 'text-line' && c.a === 'label'), JSON.stringify(hit.real));
  // and a rotated group: a horizontal line turned 90° about (100, 60) becomes vertical through the label
  const rotated = inlineReport(svgPage(
    '<g transform="rotate(90 100 60)"><line x1="40" y1="60" x2="160" y2="60" stroke="currentColor" stroke-width="1.5"/></g>',
    '<text x="100" y="20" font-size="13" text-anchor="middle" fill="currentColor">top</text>',
  ));
  assert.ok(rotated.real.some((c) => c.kind === 'text-line' && c.a === 'top'), JSON.stringify(rotated.real));
  const clear = inlineReport(svgPage(
    '<g transform="translate(90 0)" stroke="currentColor" stroke-width="1.5"><line x1="60" y1="10" x2="60" y2="110"/></g>',
    '<text x="100" y="60" font-size="13" text-anchor="middle" fill="currentColor">label</text>',
  ));
  assert.equal(clear.real.length, 0, JSON.stringify(clear.real));
});

test('inline SVG: a <tspan> extends its label — a line past the main run still hits the superscript', () => {
  // "f" alone ends near x = 105; the raised "-1" tspan runs on to ≈ 113.
  const body = (x) => `<line x1="${x}" y1="0" x2="${x}" y2="120" stroke="currentColor" stroke-width="1.5"/>\n`
    + '<text x="100" y="60" font-size="13" fill="currentColor" font-style="italic">f<tspan font-size="9" dy="-5">-1</tspan></text>';
  const hit = inlineReport(svgPage(body(108)));
  assert.ok(hit.real.some((c) => c.kind === 'text-line' && c.a === 'f-1'), JSON.stringify(hit.real));
  const clear = inlineReport(svgPage(body(120)));
  assert.equal(clear.real.length, 0, JSON.stringify(clear.real));
});

test('inline SVG: a bracket glyph drawn ON the number-line axis and its endpoint tick is exempt', () => {
  // The book's number-line convention (IA 2.5): axis, a tick at 3, and the
  // "(" glyph centred on that tick, straddling the axis.
  const { real, all, code } = inlineReport(svgPage(
    '<line x1="16" y1="45" x2="184" y2="45" stroke="currentColor" stroke-width="1.5"/>',
    '<line x1="100" y1="39" x2="100" y2="51" stroke="currentColor" stroke-width="1.5"/>',
    '<text x="100" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>',
    '<text x="100" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">(</text>',
  ));
  assert.equal(code, 0);
  assert.equal(real.length, 0, JSON.stringify(real));
  assert.ok(all.some((c) => c.exempt === 'bracket on axis' && c.a === '('), JSON.stringify(all));
  // the exemption is the bracket's alone: a word parked on the same axis is reported
  const word = inlineReport(svgPage(
    '<line x1="16" y1="45" x2="184" y2="45" stroke="currentColor" stroke-width="1.5"/>',
    '<text x="100" y="50" text-anchor="middle" font-size="13" fill="currentColor">open</text>',
  ));
  assert.ok(word.real.some((c) => c.kind === 'text-line' && c.a === 'open'), JSON.stringify(word.real));
});

test('inline SVG: a tick digit on its own tick is exempt; a curve through the same digit is not', () => {
  // tick at x = 100 runs 40..52; the digit sits low enough to touch it
  const own = inlineReport(svgPage(
    '<line x1="100" y1="40" x2="100" y2="52" stroke="currentColor" stroke-width="1"/>',
    '<text x="100" y="58" text-anchor="middle" font-size="11" fill="currentColor">−2</text>',
  ));
  assert.equal(own.real.length, 0, JSON.stringify(own.real));
  assert.ok(own.all.some((c) => c.exempt === 'own tick'), JSON.stringify(own.all));
  const curve = inlineReport(svgPage(
    '<line x1="100" y1="40" x2="100" y2="52" stroke="currentColor" stroke-width="1"/>',
    '<text x="100" y="58" text-anchor="middle" font-size="11" fill="currentColor">−2</text>',
    '<polyline points="80,40 100,54 120,70" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  ));
  assert.ok(curve.real.some((c) => c.kind === 'text-curve' && c.a === '−2'), JSON.stringify(curve.real));
});

test('inline SVG: a label running past the viewBox edge is reported (inline SVG clips)', () => {
  const { real } = inlineReport(svgPage(
    '<text x="190" y="60" font-size="13" fill="currentColor">cut off</text>',
  ));
  assert.ok(real.some((c) => c.kind === 'outside viewBox' && c.a === 'cut off'), JSON.stringify(real));
});

test('inline SVG findings gate: the console names them and the run fails', () => {
  const { code, out } = runOn(svgPage(
    '<text x="60" y="50" font-size="13" fill="currentColor">y = 2x + 1</text>\n<text x="70" y="54" font-size="13" fill="currentColor">(3, 7)</text>',
  ), []);
  assert.equal(code, 1, `inline findings must fail the run:\n${out}`);
  assert.match(out, /page\.md:5 \(inline svg\)/, 'a finding names page:line — the render-page-figures L<line>');
  assert.match(out, /✗ text-text/);
  assert.match(out, /1 inline SVG figure\(s\) checked: 0 clean, 1 with overlaps, 0 with only/);
  assert.doesNotMatch(out, /report-only/);
});

// ---------------------------------------------------------------------------
// Faint strokes (October 6, 2026): hairlines of any shape are background.

test('a spec-first number line may draw its bracket marker on the axis (the inline exemption, spec side)', () => {
  // The hand-written inequality number lines of IA 2.5–2.7 converted to
  // `numberline` specs on October 7, 2026, and every one was blocked by its
  // own `(` or `[` glyph crossing the axis, the tick, and the shaded ray.
  const numberline = (spec) => `---\ntitle: T\n---\n\n{{< apfigure kind="numberline" >}}\n${JSON.stringify(spec)}\n{{< /apfigure >}}\n`;
  for (const [type, shade] of [['paren', 'right'], ['bracket', 'left']]) {
    const { code, out } = runOn(numberline({
      ariaLabel: 'x > 3', min: -5, max: 5, marker: { at: 3, type }, shade, title: 'x > 3',
    }));
    assert.equal(code, 0, `${type} marker on its axis must exit 0, got:\n${out}`);
    assert.match(out, /0 with real overlaps/);
  }
  // The exemption is the glyph's alone: a full-size label on the axis is still a finding.
  const { code, out } = runOn(numberline({
    ariaLabel: 'bad', min: -5, max: 5, marker: { at: 3, type: 'paren' }, shade: 'right',
    points: [{ at: 0, label: 'x' }],
  }));
  assert.equal(code, 0, out);
  assert.match(out, /0 with real overlaps/);
});

test('a faint ring through a tick digit is not a finding; the same ring at full weight is', () => {
  // r = 3 crosses the x-axis at the "3" tick, straight through its digit.
  const spec = (faint) => ({
    ariaLabel: 'ring', xMin: -5, xMax: 5, yMin: -5, yMax: 5, unit: 24, tickLabels: true,
    circles: [{ at: [0, 0], r: 3, ...(faint ? { faint: true } : {}) }],
  });
  const crossings = (faint) => {
    const { code, out } = runOn(page(spec(faint)), ['--json']);
    assert.equal(code, 0, out);
    return JSON.parse(out).report.flatMap((r) => r.found).filter((c) => c.kind === 'text-circle' && c.a === '3');
  };
  assert.deepEqual(crossings(true), [], 'a hairline ring is background, never ink');
  const full = crossings(false);
  assert.ok(full.some((c) => c.depth >= 3), `the full-weight ring is read as ink: ${JSON.stringify(full)}`);
});
