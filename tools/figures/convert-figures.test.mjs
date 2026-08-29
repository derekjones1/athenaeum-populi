// The figure converter has two jobs, and both are tested here on real
// generator output rather than hand-written markup: rewrite a legacy
// `<div class="ap-figure" data-spec=…>` into an `apfigure` shortcode without
// changing the spec, and classify what the re-render did to the picture —
// label drift (expected, the engine improved) apart from geometry drift (a
// bug). The classifier is the reason the tool exists, so it is sabotaged here
// in both directions: a moved curve must read `geometry`, and a dashed guide
// split into collinear pieces must not.
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { toSvgString } from '../../assets/js/lib/math/graph-core.mjs';
import { decodeHtmlEntities } from '../lib/html.mjs';
import { convertPage, compareRenders, parseSvgElements, classifyPins, tidySpecPins } from './convert-figures.mjs';
import { buildGraph } from '../../assets/js/lib/math/graph-core.mjs';

const TOOL = new URL('./convert-figures.mjs', import.meta.url).pathname;

/** a legacy figure block exactly as tools/figures/render-figure.mjs emitted it */
function legacyBlock(spec, { svg } = {}) {
  const { type = 'graph', ...props } = spec;
  const body = svg ?? toSvgString(props, { color: null });
  const attr = JSON.stringify({ type, ...props })
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/'/g, '&#39;');
  return `<div class="ap-figure" data-spec='${attr}'>\n${body}\n</div>`;
}

const LINE = { type: 'graph', ariaLabel: 'A line.', lines: [{ slope: 1, intercept: 0 }] };

test('a legacy div becomes an apfigure shortcode carrying the same spec', () => {
  const { out, rows } = convertPage(`---\ntitle: T\n---\n\n${legacyBlock(LINE)}\n\nAfter.\n`);
  assert.match(out, /\{\{< apfigure kind="graph" >\}\}/);
  assert.doesNotMatch(out, /data-spec/, 'the pasted SVG and its provenance attribute are gone');
  const body = out.match(/\{\{< apfigure kind="graph" >\}\}\n(.*)\n\{\{< \/apfigure >\}\}/)[1];
  const { type, ...props } = LINE;
  assert.deepEqual(JSON.parse(body), props, 'the spec survives verbatim, minus the legacy type key');
  assert.equal(rows[0].verdict, 'identical', 'a spec re-rendered by the same engine is byte-identical');
});

test('the shortcode lands with a blank line on both sides', () => {
  // Welded to the text around it, <ap-figure> is parsed inside that paragraph
  // and swallows the shortcodes that follow — three exercises were lost this
  // way converting precalculus 3.7.
  const { out } = convertPage(`Before.\n${legacyBlock(LINE)}\nAfter.\n`);
  assert.match(out, /Before\.\n\n\{\{< apfigure/);
  assert.match(out, /\{\{< \/apfigure >\}\}\n\nAfter\./);
});

test('an escaped spec decodes once, not twice', () => {
  // `5 &lt; h` in the attribute is a literal `<`; `&amp;lt;` would be the four
  // characters. Sequential replaces turn the second into the first and the
  // reader gets a tick label reading "&lt;".
  assert.equal(decodeHtmlEntities('5 &lt; h &amp;lt; 10'), '5 < h &lt; 10');
  const spec = { type: 'numberline', ariaLabel: 'A number line.', min: 4, max: 11, title: '5 < h ≤ 10' };
  const { out } = convertPage(`${legacyBlock(spec)}\n`);
  const body = out.match(/\{\{< apfigure kind="numberline" >\}\}\n(.*)\n/)[1];
  assert.equal(JSON.parse(body).title, '5 < h ≤ 10');
});

test('geometry drift is called out and label drift is not', () => {
  const spec = { ariaLabel: 'A line.', lines: [{ slope: 1, intercept: 0 }] };
  const same = toSvgString(spec, { color: null });
  assert.equal(compareRenders(same, same).verdict, 'identical');

  const moved = same.replace(/(<text[^>]*?)y="(\d+(?:\.\d+)?)"/, (m, head, y) => `${head}y="${Number(y) + 9}"`);
  assert.equal(compareRenders(moved, same).verdict, 'label', 'a text that moved is label drift, not a bug');

  const curve = toSvgString({ ariaLabel: 'A parabola.', quadratics: [{ a: 1 }] }, { color: null });
  const bent = curve.replace(/(<polyline[^>]*points=")([\d.]+)/, (m, head, x) => `${head}${Number(x) + 7}`);
  assert.notEqual(bent, curve, 'the sabotage must actually change the curve');
  assert.equal(compareRenders(bent, curve).verdict, 'geometry', 'a curve that moved must be reported');
});

test('a dashed guide split into collinear pieces is gapping, not geometry drift', () => {
  const dashed = (parts) => `<svg viewBox="0 0 10 10">\n  ${parts.join('\n  ')}\n</svg>`;
  const whole = '<line stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.4" x1="20" y1="100" x2="200" y2="100"/>';
  const pieces = [
    '<line stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.4" x1="20" y1="100" x2="90" y2="100"/>',
    '<line stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.4" x1="120" y1="100" x2="200" y2="100"/>',
  ];
  assert.equal(compareRenders(dashed([whole]), dashed(pieces)).verdict, 'gapped');

  const solid = pieces.map((p) => p.replace(' stroke-dasharray="4 3"', ''));
  assert.equal(
    compareRenders(dashed([whole.replace(' stroke-dasharray="4 3"', '')]), dashed(solid)).verdict,
    'geometry',
    'a SOLID stroke drawn in pieces reads as dashing — a mathematical statement, so it is a real change',
  );

  const elsewhere = ['<line stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.4" x1="20" y1="40" x2="200" y2="40"/>'];
  assert.equal(compareRenders(dashed([whole]), dashed(elsewhere)).verdict, 'geometry',
    'a dashed line that moved off its host line is not a gap');
});

test('the CLI rewrites files, and --dry-run does not', () => {
  const dir = mkdtempSync(join(tmpdir(), 'figconv-'));
  const file = join(dir, 'page.md');
  const src = `---\ntitle: T\n---\n\n${legacyBlock(LINE)}\n`;
  try {
    writeFileSync(file, src);
    const dry = execFileSync(process.execPath, [TOOL, '--dry-run', file], { encoding: 'utf8' });
    assert.match(dry, /would convert 1 figure/);
    assert.equal(readFileSync(file, 'utf8'), src, '--dry-run writes nothing');

    execFileSync(process.execPath, [TOOL, file], { encoding: 'utf8' });
    assert.match(readFileSync(file, 'utf8'), /\{\{< apfigure/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('the CLI exits non-zero when a figure needs investigation', () => {
  const dir = mkdtempSync(join(tmpdir(), 'figconv-'));
  const file = join(dir, 'page.md');
  try {
    // A spec whose recorded SVG shows a different curve: the pasted art and
    // the spec disagree, which is exactly what conversion must not ship blind.
    const stale = toSvgString({ ariaLabel: 'A line.', lines: [{ slope: 3, intercept: 1 }] }, { color: null });
    writeFileSync(file, `---\ntitle: T\n---\n\n${legacyBlock(LINE, { svg: stale })}\n`);
    assert.throws(
      () => execFileSync(process.execPath, [TOOL, '--dry-run', file], { encoding: 'utf8', stdio: 'pipe' }),
      (e) => e.status === 1 && /1 need investigation/.test(e.stdout),
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('a label pin is classified by what deleting it would do, not by its presence', () => {
  // Precalculus 2.1 carried five pinned specs and two of the pins named the
  // side the engine picks unaided — free to delete. Telling those from the
  // three that actually moved a label took an ad-hoc script, so the converter
  // now renders both ways itself. The board below is the shape that matters:
  // one labelled point, so exactly the sides that reproduce the engine's own
  // choice are redundant and the rest are load-bearing.
  const board = { ariaLabel: 'A point.', xMin: -4, xMax: 4, yMin: -4, yMax: 4, points: [{ at: [1, 1], label: '(1, 1)' }] };
  const pin = (side) => ({ ...board, points: [{ ...board.points[0], labelSide: side }] });

  assert.equal(classifyPins(board, buildGraph), null, 'an unpinned spec is not a finding at all');

  const verdicts = ['e', 'w', 'n', 's', 'ne', 'nw', 'se', 'sw'].map((s) => classifyPins(pin(s), buildGraph));
  assert.ok(verdicts.every((v) => v === 'redundant' || v === 'load-bearing'), 'every pin gets a verdict');
  assert.ok(verdicts.includes('redundant'),
    'the side the engine would have chosen must read redundant — that is the whole point of rendering both');
  assert.ok(verdicts.includes('load-bearing'),
    'a pin that overrides the engine must read load-bearing');

  // The classification survives a spec the engine cannot build unpinned: a
  // side name only the pinned path accepts is load-bearing by definition, and
  // must not take the converter down with it.
  assert.equal(classifyPins(pin('nonsense-side'), buildGraph), 'load-bearing');
});

test('tidying drops the pins that change nothing and keeps the ones that do', () => {
  // A spec routinely mixes the two, which is why this works per pin and not
  // per spec: the point below is pinned to the side the engine picks unaided
  // (free to delete) while the line's pin moves its label (must survive).
  const engineChoice = ['e', 'w', 'n', 's', 'ne', 'nw', 'se', 'sw']
    .find((s) => classifyPins({
      ariaLabel: 'A point.', xMin: -4, xMax: 4, yMin: -4, yMax: 4,
      points: [{ at: [1, 1], label: '(1, 1)', labelSide: s }],
    }, buildGraph) === 'redundant');
  assert.ok(engineChoice, 'the board must have a side the engine agrees with');

  const spec = {
    ariaLabel: 'A point and a line.', xMin: -4, xMax: 4, yMin: -4, yMax: 4,
    points: [{ at: [1, 1], label: '(1, 1)', labelSide: engineChoice }],
    lines: [{ slope: 1, intercept: 0, label: 'y = x', labelAt: 0.1 }],
  };
  const before = toSvgString(spec, { builder: buildGraph, color: null });
  const { spec: tidied, removed, kept } = tidySpecPins(spec, buildGraph);
  assert.equal(removed, 1, 'the redundant point pin goes');
  assert.equal(kept, 1, 'the load-bearing line pin stays');
  assert.equal(tidied.points[0].labelSide, undefined);
  assert.equal(tidied.lines[0].labelAt, 0.1);
  assert.equal(toSvgString(tidied, { builder: buildGraph, color: null }), before,
    'tidying is defined by the render not moving — a pixel change is a bug in the tool');
});

test('--tidy-pins rewrites apfigure bodies in place and leaves clean pages alone', () => {
  const dir = mkdtempSync(join(tmpdir(), 'figtidy-'));
  const file = join(dir, 'page.md');
  try {
    const pinned = {
      ariaLabel: 'A point.', xMin: -4, xMax: 4, yMin: -4, yMax: 4,
      points: [{ at: [1, 1], label: '(1, 1)' }],
    };
    const engineChoice = ['e', 'w', 'n', 's', 'ne', 'nw', 'se', 'sw'].find((s) => classifyPins(
      { ...pinned, points: [{ ...pinned.points[0], labelSide: s }] }, buildGraph,
    ) === 'redundant');
    const body = JSON.stringify({ ...pinned, points: [{ ...pinned.points[0], labelSide: engineChoice }] });
    writeFileSync(file, `---\ntitle: T\n---\n\n{{< apfigure kind="graph" >}}\n${body}\n{{< /apfigure >}}\n`);

    const out = execFileSync(process.execPath, [TOOL, '--tidy-pins', file], { encoding: 'utf8' });
    assert.match(out, /dropped 1 redundant pin/);
    const after = readFileSync(file, 'utf8');
    assert.doesNotMatch(after, /labelSide/);

    const second = execFileSync(process.execPath, [TOOL, '--tidy-pins', file], { encoding: 'utf8' });
    assert.match(second, /dropped 0 redundant pin/, 'tidying is idempotent');
    assert.equal(readFileSync(file, 'utf8'), after);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('conversion leaves exactly one blank line around the shortcode', () => {
  // The pasted divs were authored with one or two blank lines after `</div>`;
  // carrying that through makes every converted page's diff carry noise.
  const { out } = convertPage(`Before.\n\n${legacyBlock(LINE)}\n\n\nAfter.\n`);
  assert.match(out, /Before\.\n\n\{\{< apfigure/);
  assert.match(out, /\{\{< \/apfigure >\}\}\n\nAfter\./);
});

test('the SVG reader sees every element the serializer wrote', () => {
  const els = parseSvgElements(toSvgString({
    ariaLabel: 'A line.', xMin: -2, xMax: 2, yMin: -2, yMax: 2, tickLabels: true,
    lines: [{ slope: 1, intercept: 0, label: 'y = x' }],
  }, { color: null }));
  assert.ok(els.some((e) => e.tag === 'text' && e.text === 'y = x'), 'labels are read with their text');
  assert.ok(els.some((e) => e.tag === 'line'), 'strokes are read');
});
