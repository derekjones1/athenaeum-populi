// The hand-drawn number-line converter reads a drawing as mathematics,
// rebuilds it with the real builder, and writes only when the two readings
// agree. So it is tested the way it can fail: a drawing the engine says the
// same way converts to the exact spec; a drawing it cannot say (decimal ticks)
// is skipped with its reason; a drawing whose recovered spec reads back
// differently is reported `!!` and left byte-for-byte alone; and the page
// around a converted figure ends up shaped the way the playbook requires (the
// wrapper div gone only when it held nothing else, one blank line each side).
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { convertPage, convertSvg, namedValues, readNumberLine, restorePage } from './convert-inline-numberlines.mjs';

const TOOL = new URL('./convert-inline-numberlines.mjs', import.meta.url).pathname;

// Intermediate Algebra 2.5, verbatim: a bracket at −3/5 (between ticks), the
// ray shaded left, the inequality as a title.
const BRACKET_AT_FRACTION = `<svg role="img" aria-label="Number line from negative 2 to 1 with a bracket at negative three fifths and shading left." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="151.2" y1="45" x2="16" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="116" y1="39" x2="116" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="116" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="204" y1="39" x2="204" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="204" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="151.2" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">]</text>
  <text x="151.2" y="16" text-anchor="middle" font-size="14" fill="currentColor">x ≤ −3/5</text>
</svg>`;

/** a points-only line in the Prealgebra style: marker arrowheads, grouped ticks, hyphen minus */
function pointsLine({ aria, points }) {
  const X = (v) => 220 + v * 50;
  const ticks = [];
  for (let v = -4; v <= 4; v++) {
    ticks.push(`<g><line x1="${X(v)}" y1="23" x2="${X(v)}" y2="37" stroke="currentColor" stroke-width="1.5" /><text x="${X(v)}" y="55" text-anchor="middle" font-size="15" fill="currentColor">${v < 0 ? `-${-v}` : v}</text></g>`);
  }
  const dots = points.map(({ at, label }) => `<circle cx="${X(at)}" cy="30" r="5" fill="currentColor" />${
    label ? `<text x="${X(at)}" y="12" text-anchor="middle" font-size="13" fill="currentColor">${label}</text>` : ''}`);
  return `<svg viewBox="-10 0 460 60" role="img" aria-label="${aria}" style="max-width: 460px">
  <line x1="0" y1="30" x2="440" y2="30" stroke="currentColor" stroke-width="1.5" marker-end="url(#a)" marker-start="url(#a-start)" />
  <defs>
    <marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor" /></marker>
    <marker id="a-start" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M8,0 L0,4 L8,8 Z" fill="currentColor" /></marker>
  </defs>
  ${ticks.join('\n  ')}
  ${dots.join('\n  ')}
</svg>`;
}

/** a tenths line in the Prealgebra 5.1 style; `print` writes each label */
function tenthsLine({ print = (k) => (k / 10).toFixed(1) } = {}) {
  const ticks = [];
  for (let k = 0; k <= 10; k++) {
    const x = 40 + k * 53;
    ticks.push(`<line x1="${x}" y1="28" x2="${x}" y2="42" stroke="currentColor" stroke-width="1.5" /><text x="${x}" y="60" text-anchor="middle" font-size="12" fill="currentColor">${print(k)}</text>`);
  }
  return `<svg viewBox="0 0 620 80" role="img" aria-label="A number line from 0.0 to 1.0 in tenths with a point at 0.4.">
  <line x1="20" y1="35" x2="600" y2="35" stroke="currentColor" stroke-width="1.5" />
  <polygon points="600,35 590,30 590,40" fill="currentColor" />
  <polygon points="20,35 30,30 30,40" fill="currentColor" />
  ${ticks.join('\n  ')}
  <circle cx="252" cy="35" r="5" fill="currentColor" />
</svg>`;
}

const spec = (out) => JSON.parse(out.match(/\{\{< apfigure kind="numberline" >\}\}\n(.*)\n\{\{< \/apfigure >\}\}/)[1]);

test('aria labels name values in digits and in words', () => {
  const has = (prose, v) => namedValues(prose).some((c) => Math.abs(c - v) < 1e-9);
  assert.ok(has('a bracket at negative three fifths', -0.6));
  assert.ok(has('a bracket at nine eighths', 1.125));
  assert.ok(has('at negative seventeen fifths', -3.4));
  assert.ok(has('a closed bracket at one half', 0.5));
  assert.ok(has('at negative three halves', -1.5));
  assert.ok(has('from negative 26 to negative 23', -26));
  assert.ok(has('points at -3 1/2 and −9/2', -3.5));
  assert.ok(has('points at -3 1/2 and −9/2', -4.5));
  assert.ok(has('a parenthesis at 2.5', 2.5));
  assert.ok(!has('a bracket at negative three fifths', 0.6), 'the sign is part of the name');
});

test('an inequality line converts: bracket at a fraction, shaded left, with its title', () => {
  const page = `Graph the solution.\n\n<div class="ap-figure">\n${BRACKET_AT_FRACTION}\n</div>\n\nIn interval notation…\n`;
  const { out, rows } = convertPage(page);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].verdict, '=', rows[0].reason);
  assert.deepEqual(spec(out), {
    ariaLabel: 'Number line from negative 2 to 1 with a bracket at negative three fifths and shading left.',
    min: -2, max: 1, title: 'x ≤ −3/5',
    marker: { at: -0.6, type: 'bracket' }, shade: 'left',
  }, 'the glyph lands on the value the aria label names, −3/5, not on a pixel-rounded float');
  assert.doesNotMatch(out, /<svg|ap-figure">/, 'the svg and the wrapper that held only it are gone');
});

test('a points-only line converts, labels kept on the off-tick points', () => {
  const svg = pointsLine({
    aria: 'A number line from -4 to 4 with points plotted at -3, -5/2, and 3.',
    points: [{ at: 3 }, { at: -3 }, { at: -2.5, label: '-5/2' }],
  });
  const { out, rows } = convertPage(`Plot them.\n\n${svg}\n\nNext.\n`);
  assert.equal(rows[0].verdict, '=', rows[0].reason);
  assert.deepEqual(spec(out), {
    ariaLabel: 'A number line from -4 to 4 with points plotted at -3, -5/2, and 3.',
    min: -4, max: 4,
    points: [{ at: -3 }, { at: -2.5, label: '−5/2' }, { at: 3 }],
  });
});

test('a tenths line converts with its step, labels read as printed', () => {
  const { out, rows } = convertPage(`Tenths.\n\n${tenthsLine()}\n\nNext.\n`);
  assert.equal(rows[0].verdict, '=', rows[0].reason);
  assert.deepEqual(spec(out), {
    ariaLabel: 'A number line from 0.0 to 1.0 in tenths with a point at 0.4.',
    min: 0, max: 1, step: 0.1, points: [{ at: 0.4 }],
  });
});

test('a comb of minor ticks under tenth labels converts with labelEvery', () => {
  // EA 1.8's shape: labelled ticks as lines, the hundredths as one path.
  // Labels carry the step's two decimals, as the engine prints them.
  const X = (k) => 40 + k * 5.3;
  const minor = [];
  const major = [];
  for (let k = 0; k <= 100; k++) {
    if (k % 10) minor.push(`M${X(k).toFixed(1)} 31 V39`);
    else major.push(`<line x1="${X(k)}" y1="28" x2="${X(k)}" y2="42" stroke="currentColor" stroke-width="1.5" /><text x="${X(k)}" y="60" text-anchor="middle" font-size="12" fill="currentColor">${(k / 100).toFixed(2)}</text>`);
  }
  const aria = 'A number line from 0.00 to 1.00, ticked in hundredths, with a point at 0.40.';
  const svg = `<svg viewBox="0 0 620 80" role="img" aria-label="${aria}">
  <line x1="20" y1="35" x2="600" y2="35" stroke="currentColor" stroke-width="1.5" marker-end="url(#e)" marker-start="url(#s)" />
  <defs><marker id="e" orient="auto"><path d="M0,0 L8,4 L0,8 Z" /></marker><marker id="s" orient="auto"><path d="M8,0 L0,4 L8,8 Z" /></marker></defs>
  <path d="${minor.join(' ')}" stroke="currentColor" stroke-width="1" fill="none" />
  ${major.join('\n  ')}
  <circle cx="${X(40)}" cy="35" r="5" fill="currentColor" />
</svg>`;
  const verdict = convertSvg(svg, { ariaLabel: aria });
  assert.equal(verdict.verdict, '=', verdict.reason);
  assert.deepEqual(verdict.spec, { ariaLabel: aria, min: 0, max: 1, step: 0.01, labelEvery: 10, points: [{ at: 0.4 }] });
});

test('a point the aria label withholds is a question, not a conversion', () => {
  // Prealgebra 5.1: "a point plotted at the eighth mark", then "What decimal
  // is plotted on the number line above?" — the spec would print the answer.
  const posed = tenthsLine().replace('with a point at 0.4.', 'with a point plotted at the fourth mark to the right of 0.0.');
  const verdict = convertSvg(posed, { ariaLabel: readAria(posed) });
  assert.equal(verdict.verdict, '--');
  assert.match(verdict.reason, /on a tick the aria label leaves unnamed/);
});

test('a line whose labels mix precisions is skipped with its reason and left alone', () => {
  // "2, 2.1, … 3": the engine prints one precision for the whole line
  const mixed = tenthsLine({ print: (k) => (k % 10 ? (k / 10).toFixed(1) : String(k / 10)) });
  const page = `Tenths.\n\n${mixed}\n\nNext.\n`;
  const { out, rows } = convertPage(page);
  assert.equal(rows[0].verdict, '--');
  assert.match(rows[0].reason, /tick labels not printed to one precision \(“0” beside “0\.0”\)/);
  assert.equal(out, page);
});

test('an interval bounded by paren and bracket glyphs converts to glyph-ended intervals', () => {
  // (−3, 2] from IA 2.6, compressed: the glyphs ride the axis, the stretch runs between them
  const X = (v) => 160 + v * 26.4;
  const ticks = [];
  for (let v = -5; v <= 5; v++) ticks.push(`<line x1="${X(v)}" y1="39" x2="${X(v)}" y2="51" stroke="currentColor" stroke-width="1.5"/><text x="${X(v)}" y="70" text-anchor="middle" font-size="12" fill="currentColor">${v < 0 ? `−${-v}` : v}</text>`);
  const aria = 'A number line shaded between an open parenthesis at negative three and a closed bracket at two.';
  const svg = `<svg role="img" aria-label="${aria}" viewBox="0 0 320 90">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="${X(-3)}" y1="45" x2="${X(2)}" y2="45" stroke="currentColor" stroke-width="3.5"/>
  ${ticks.join('\n  ')}
  <text x="${X(-3)}" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">(</text>
  <text x="${X(2)}" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">]</text>
  <text x="${(X(-3) + X(2)) / 2}" y="16" text-anchor="middle" font-size="14" fill="currentColor">x &gt; −3 and x ≤ 2</text>
</svg>`;
  const verdict = convertSvg(svg, { ariaLabel: aria });
  assert.equal(verdict.verdict, '=', verdict.reason);
  assert.deepEqual(verdict.spec, {
    ariaLabel: aria, min: -5, max: 5, title: 'x > −3 and x ≤ 2',
    intervals: [{ from: -3, fromType: 'paren', to: 2, toType: 'bracket' }],
  });
});

test('an svg marked data-pictorial is never read', () => {
  const svg = tenthsLine().replace('<svg ', '<svg data-pictorial ');
  const page = `${svg}\n`;
  const { out, rows, pictorial } = convertPage(page);
  assert.equal(rows.length, 0);
  assert.equal(pictorial, 1);
  assert.equal(out, page);
});

test('annotations and arcs above the line are skipped, never silently dropped', () => {
  const svg = pointsLine({ aria: 'A number line from -4 to 4 with a dot at 3.', points: [{ at: 3 }] })
    .replace('</svg>', '  <path d="M 220 25 Q 295 0 370 25" fill="none" stroke="currentColor" />\n  <text x="295" y="8" text-anchor="middle" font-size="12" fill="currentColor">larger</text>\n</svg>');
  const verdict = convertSvg(svg, { ariaLabel: 'A number line from -4 to 4 with a dot at 3.' });
  assert.equal(verdict.verdict, '--');
  assert.match(verdict.reason, /arrows, arcs or braces above the line/);
  assert.match(verdict.reason, /annotation text “larger”/);
});

test('a recovered spec that reads back differently is reported !! and left untouched', () => {
  // A "(" with the ray running LEFT: the engine picks the glyph from the
  // shading and would draw ")" — the drawing says something the spec cannot.
  const wrong = BRACKET_AT_FRACTION
    .replace('>]</text>', '>(</text>')
    .replace('bracket at negative three fifths', 'parenthesis at negative three fifths');
  const page = `${wrong}\n`;
  const { out, rows } = convertPage(page);
  assert.equal(rows[0].verdict, '!!');
  assert.match(rows[0].reason, /glyph \( at −0\.6 → \)/);
  assert.equal(out, page);

  // A glyph at a value the aria label never names is a recovery failure too:
  // the tool will not guess which number a pixel meant.
  const unnamed = BRACKET_AT_FRACTION.replace('negative three fifths', 'a point');
  const verdict = convertSvg(unnamed, { ariaLabel: readAria(unnamed) });
  assert.equal(verdict.verdict, '!!');
  assert.match(verdict.reason, /not a value the aria label names/);
});

const readAria = (svg) => svg.match(/aria-label="([^"]*)"/)[1];

test('the wrapper div goes only when it held nothing but the svg', () => {
  const alone = convertPage(`Text.\n\n<div class="ap-figure">\n${BRACKET_AT_FRACTION}\n</div>\n\nMore.\n`).out;
  assert.doesNotMatch(alone, /<div|<\/div>/);

  const captioned = convertPage(`Text.\n\n<div class="ap-figure">\n${BRACKET_AT_FRACTION}\n<p class="caption">Figure 1</p>\n</div>\n\nMore.\n`).out;
  assert.match(captioned, /<div class="ap-figure">\n\n\{\{< apfigure kind="numberline" >\}\}/, 'the wrapper is kept');
  assert.match(captioned, /\{\{< \/apfigure >\}\}\n\n<p class="caption">Figure 1<\/p>\n<\/div>/, 'and so is the rest of what it held');
});

test('the shortcode lands with exactly one blank line on each side', () => {
  // A welded <ap-figure> is parsed inside the paragraph next to it and
  // swallows the shortcodes that follow.
  const welded = convertPage(`Before.\n${BRACKET_AT_FRACTION}\nAfter.\n`).out;
  assert.match(welded, /Before\.\n\n\{\{< apfigure kind="numberline" >\}\}\n/);
  assert.match(welded, /\n\{\{< \/apfigure >\}\}\n\nAfter\.\n$/);
  const loose = convertPage(`Before.\n\n\n<div class="ap-figure">\n${BRACKET_AT_FRACTION}\n</div>\n\n\n\nAfter.\n`).out;
  assert.match(loose, /Before\.\n\n\{\{< apfigure/);
  assert.match(loose, /\{\{< \/apfigure >\}\}\n\nAfter\./);
});

test('the engine render reads back as the same number line', () => {
  // The verifier reads the builder's own output with the same reader it reads
  // the hand drawing with; if that ever stopped working, every figure would be
  // `!!` — this pins it to the render, knockout mask and all.
  const { newSvg } = convertSvg(BRACKET_AT_FRACTION, { ariaLabel: readAria(BRACKET_AT_FRACTION) });
  const back = readNumberLine(newSvg);
  assert.equal(back.reasons.length, 0, back.reasons.join('; '));
  assert.deepEqual(back.sem.glyphs.map((g) => g.glyph), [']']);
  assert.ok(Math.abs(back.sem.glyphs[0].at + 0.6) < 0.01);
});

test('a coordinate plane is not a number line at all', () => {
  const graph = `<svg viewBox="0 0 200 200" role="img" aria-label="A graph.">
  <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" />
  <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" />
  <line x1="50" y1="96" x2="50" y2="104" stroke="currentColor" /><line x1="150" y1="96" x2="150" y2="104" stroke="currentColor" />
</svg>`;
  assert.equal(convertSvg(graph, { ariaLabel: 'A graph.' }), null);
  assert.equal(convertPage(`${graph}\n`).others, 1);
});

test('a figure the overlap gate would fail is skipped, not written', () => {
  const page = `Text.\n\n${BRACKET_AT_FRACTION}\n\nMore.\n`;
  const seen = [];
  const { out, rows } = convertPage(page, { gate: (s) => { seen.push(s); return 'text-line (3.1px): "]"'; } });
  assert.equal(seen.length, 1, 'the gate sees the recovered spec');
  assert.equal(rows[0].verdict, '--');
  assert.match(rows[0].reason, /^fails the overlap gate: text-line/);
  assert.equal(out, page);
});

test('a journal entry puts the converted figure back exactly', () => {
  const page = `Text.\n\n<div class="ap-figure">\n${BRACKET_AT_FRACTION}\n</div>\n\nMore.\n`;
  const { out, rows } = convertPage(page);
  assert.notEqual(out, page);
  const back = restorePage(out, [{ spec: rows[0].spec, original: rows[0].original }]);
  assert.equal(back.restored, 1);
  assert.equal(back.out, page, 'the wrapper and the svg come back byte for byte');
  assert.equal(restorePage(page, [{ spec: rows[0].spec, original: rows[0].original }]).missing.length, 1,
    'a shortcode that is not there is reported, not invented');
});

test('--dry-run reports and writes nothing; a real run rewrites only the = figures and journals them', () => {
  const dir = mkdtempSync(join(tmpdir(), 'nlconv-'));
  const file = join(dir, 'page.md');
  const journal = join(dir, 'journal.json');
  try {
    const points = pointsLine({ aria: 'A number line from -4 to 4 with points plotted at -3 and 3.', points: [{ at: 3 }, { at: -3 }] });
    const mixed = tenthsLine({ print: (k) => (k % 10 ? (k / 10).toFixed(1) : String(k / 10)) });
    const page = `---\ntitle: T\n---\n\n${points}\n\n${mixed}\n`;
    writeFileSync(file, page);
    const dry = execFileSync(process.execPath, [TOOL, '--dry-run', file], { encoding: 'utf8' });
    assert.match(dry, /=  L5 /);
    assert.match(dry, /skip: tick labels not printed to one precision/);
    assert.match(dry, /would convert 1 number line\(s\) on 1 page\(s\); 1 skipped; 0 need investigation/);
    assert.equal(readFileSync(file, 'utf8'), page, '--dry-run writes nothing');

    execFileSync(process.execPath, [TOOL, '--journal', journal, file], { encoding: 'utf8' });
    const after = readFileSync(file, 'utf8');
    assert.match(after, /\{\{< apfigure kind="numberline" >\}\}/);
    assert.match(after, /<svg viewBox="0 0 620 80"/, 'the skipped figure is untouched');
    assert.equal(JSON.parse(readFileSync(journal, 'utf8')).length, 1);

    execFileSync(process.execPath, [TOOL, '--restore', journal], { encoding: 'utf8' });
    assert.equal(readFileSync(file, 'utf8'), page, '--restore undoes the run');

    const wrong = BRACKET_AT_FRACTION.replace('>]</text>', '>(</text>');
    writeFileSync(file, `${wrong}\n`);
    const bad = spawnSync(process.execPath, [TOOL, file], { encoding: 'utf8' });
    assert.equal(bad.status, 1, 'a !! figure fails the run');
    assert.equal(readFileSync(file, 'utf8'), `${wrong}\n`);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
