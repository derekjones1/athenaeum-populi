// Geometry regression tests for the static-figure builders.
//
// These exist because spline-approximated conics and corners, and stroke caps
// poking past arrowheads, shipped to a production page before any test
// covered the SVG geometry. Figures are learner-facing mathematics: the
// circle primitive must be a real ellipse, a |x| corner must stay a corner,
// and no stroke may extend beyond an arrowhead apex.

import test from 'node:test';
import assert from 'node:assert/strict';
import { buildGraph, buildFigure, buildNumberLine } from '../assets/js/lib/graph-core.mjs';
import { fitTextBox, measureTextWidth } from '../assets/js/lib/text-metrics.mjs';

const GRID = { xMin: -5, xMax: 5, yMin: -5, yMax: 5, unit: 20 };

const polylines = (out) => out.els.filter((e) => e.tag === 'polyline')
  .map((e) => e.attrs.points.split(' ').map((p) => p.split(',').map(Number)));
const polygons = (out) => out.els.filter((e) => e.tag === 'polygon')
  .map((e) => e.attrs.points.split(' ').map((p) => p.split(',').map(Number)));
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

/** Every arrowhead apex must be clear of every polyline endpoint, so the
    round stroke cap can never reappear as a dot beyond the arrow tip. */
function assertNoCapPokesPastArrow(out) {
  const tips = polygons(out).map((pg) => pg[0]);
  for (const pl of polylines(out)) {
    for (const end of [pl[0], pl.at(-1)]) {
      for (const tip of tips) {
        assert.ok(dist(end, tip) > 1.5,
          `polyline endpoint ${end} coincides with arrowhead tip ${tip}`);
      }
    }
  }
}

test('circles render as exact SVG ellipses, never spline approximations', () => {
  const out = buildGraph({ ...GRID, circles: [{ at: [0, 0], r: 3 }] });
  const ellipses = out.els.filter((e) => e.tag === 'ellipse');
  assert.equal(ellipses.length, 1);
  assert.equal(ellipses[0].attrs.rx, 60); // 3 math units * 20 px
  assert.equal(ellipses[0].attrs.ry, 60);
  assert.equal(ellipses[0].attrs.cx, 126); // margin 26 + 5 * 20
  assert.equal(ellipses[0].attrs.cy, 126);
});

test('circle radii follow asymmetric axis units', () => {
  const out = buildGraph({ ...GRID, xUnit: 20, yUnit: 10, circles: [{ at: [1, 1], r: 2 }] });
  const e = out.els.find((el) => el.tag === 'ellipse');
  assert.equal(e.attrs.rx, 40);
  assert.equal(e.attrs.ry, 20);
});

test('circle spec validation rejects bad centres and radii', () => {
  assert.throws(() => buildGraph({ ...GRID, circles: [{ at: [0, 0], r: 0 }] }));
  assert.throws(() => buildGraph({ ...GRID, circles: [{ at: [Infinity, 0], r: 1 }] }));
});

test('circle arcs render as exact elliptical arc paths with unequal semi-axes', () => {
  // the upper half of x^2 + y^2 = 4: from (2,0) counter-clockwise to (-2,0)
  const out = buildGraph({ ...GRID, grid: false, circles: [{ at: [0, 0], r: 2, from: 0, to: 180 }] });
  assert.equal(out.els.filter((e) => e.tag === 'ellipse').length, 0, 'an arc is not a closed ellipse');
  const [path] = out.els.filter((e) => e.tag === 'path');
  // M px(2,0) A rx ry 0 largeArc sweep px(-2,0); half a turn is not a large arc
  assert.equal(path.attrs.d, 'M 166 126 A 40 40 0 0 0 86 126');
  // unequal semi-axes: a half-ellipse 4 wide and 2 tall
  const half = buildGraph({ ...GRID, grid: false, circles: [{ at: [0, 0], rx: 4, ry: 2, from: 0, to: 180 }] });
  assert.match(half.els.find((e) => e.tag === 'path').attrs.d, /A 80 40 /);
  assert.throws(() => buildGraph({ ...GRID, circles: [{ at: [0, 0], r: 2, from: 90, to: 90 }] }), /angles/);
});

test('polylines keep corners exact — the V of |x| must not be rounded', () => {
  const out = buildGraph({ ...GRID, polylines: [{ through: [[-4, 4], [0, 0], [4, 4]] }] });
  const [pl] = polylines(out);
  assert.equal(pl.length, 3);
  assert.deepEqual(pl[1], [126, 126]); // the corner is the exact px of (0,0)
});

test('polyline arrows trim the stroke but keep the arrowhead at the true end', () => {
  const out = buildGraph({
    ...GRID, grid: false,
    polylines: [{ through: [[-4, 4], [0, 0], [4, 4]], arrows: true }],
  });
  const [pl] = polylines(out);
  const tips = polygons(out).map((pg) => pg[0]);
  // arrowhead apexes sit at the true endpoints of the V
  assert.ok(tips.some((t) => dist(t, [46, 46]) < 0.6)); // px of (-4, 4)
  assert.ok(tips.some((t) => dist(t, [206, 46]) < 0.6)); // px of (4, 4)
  assertNoCapPokesPastArrow(out);
  // the corner survives trimming
  assert.ok(pl.some((p) => dist(p, [126, 126]) < 0.6));
});

test('quadratic and smooth curves never let the stroke poke past an arrowhead', () => {
  assertNoCapPokesPastArrow(buildGraph({ ...GRID, quadratics: [{ a: 1, b: -2, c: 1, arrows: true }] }));
  assertNoCapPokesPastArrow(buildGraph({
    ...GRID,
    smoothCurves: [{ through: [[-4, -2], [0, 2], [4, 1]], arrows: true, freeform: true }],
  }));
});

test('sqrt curve starts exactly at its endpoint with no arrow there', () => {
  const out = buildGraph({ ...GRID, curves: [{ kind: 'sqrt' }] });
  // 4 axis arrowheads + exactly 1 curve arrowhead (far end only)
  assert.equal(polygons(out).length, 5);
  const [pl] = polylines(out);
  assert.ok(dist(pl[0], [126, 126]) < 0.6, 'sqrt must begin at the origin');
});

test('cbrt curve passes through the origin despite its vertical tangent', () => {
  const out = buildGraph({ ...GRID, curves: [{ kind: 'cbrt' }] });
  const [pl] = polylines(out);
  const closest = Math.min(...pl.map((p) => dist(p, [126, 126])));
  assert.ok(closest < 1, `cbrt sampled ${closest}px from the origin`);
});

test('reciprocal curves render two branches split at the asymptote', () => {
  const out = buildGraph({ ...GRID, curves: [{ kind: 'reciprocal' }] });
  assert.equal(polylines(out).length, 2);
  // both branches stay strictly off the vertical asymptote x = 0 (px 126)
  for (const pl of polylines(out)) {
    for (const p of pl) assert.ok(Math.abs(p[0] - 126) > 0.5);
  }
  const sq = buildGraph({ ...GRID, curves: [{ kind: 'reciprocal-squared' }] });
  assert.equal(polylines(sq).length, 2);
  // reciprocal-squared branches stay above the x-axis (py < 126)
  for (const pl of polylines(sq)) {
    for (const p of pl) assert.ok(p[1] < 126);
  }
});

test('curve shifts a·f(x−h)+k relocate the curve exactly', () => {
  const out = buildGraph({ ...GRID, curves: [{ kind: 'sqrt', h: 1, k: -2 }] });
  const [pl] = polylines(out);
  assert.ok(dist(pl[0], [146, 166]) < 0.6, 'shifted sqrt must begin at (1, -2)');
});

test('exp and log curves sample their exact equations and mirror each other', () => {
  const exp = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'exp', b: 2 }] });
  const [pe] = polylines(exp);
  for (const [x, y] of [[0, 1], [1, 2], [2, 4], [-1, 0.5]]) {
    const closest = Math.min(...pe.map((p) => dist(p, [126 + x * 20, 126 - y * 20])));
    assert.ok(closest < 0.6, `2^x sampled ${closest}px from (${x}, ${y})`);
  }
  // log_2 is the reflection of 2^x in y = x: it must pass (1, 0), (2, 1), (4, 2)
  const log = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'log', b: 2 }] });
  const pl = polylines(log).flat();
  for (const [x, y] of [[1, 0], [2, 1], [4, 2], [0.5, -1]]) {
    const closest = Math.min(...pl.map((p) => dist(p, [126 + x * 20, 126 - y * 20])));
    assert.ok(closest < 0.6, `log2 sampled ${closest}px from (${x}, ${y})`);
  }
  for (const p of pl) assert.ok(p[0] > 126, 'the log curve stays right of its asymptote');
  assertNoCapPokesPastArrow(exp);
});

test('exp and log curves reject bases that cannot define them', () => {
  for (const kind of ['exp', 'log']) {
    assert.throws(() => buildGraph({ ...GRID, curves: [{ kind, b: 1 }] }), /base/);
    assert.throws(() => buildGraph({ ...GRID, curves: [{ kind, b: -2 }] }), /base/);
  }
});

test('unknown curve kinds are rejected', () => {
  assert.throws(() => buildGraph({ ...GRID, curves: [{ kind: 'parabola' }] }));
});

test('smoothCurves demands an explicit freeform acknowledgment', () => {
  assert.throws(
    () => buildGraph({ ...GRID, smoothCurves: [{ through: [[-4, -2], [0, 2], [4, 1]] }] }),
    /freeform/,
    'spline interpolation must not be reachable without freeform: true',
  );
});

test('sine curves sample the exact function and honor from/to', () => {
  const out = buildGraph({
    ...GRID, grid: false,
    curves: [{ kind: 'sine', a: 1.6, b: Math.PI / 2, h: -3, k: -0.2, from: -2.75, to: 1.85 }],
  });
  const [pl] = polylines(out);
  // the crest at (-2, 1.4) and trough at (0, -1.8) are sampled exactly
  const crest = Math.min(...pl.map((p) => dist(p, [126 - 2 * 20, 126 - 1.4 * 20])));
  const trough = Math.min(...pl.map((p) => dist(p, [126, 126 + 1.8 * 20])));
  assert.ok(crest < 0.6, `sine crest sampled ${crest}px away from (-2, 1.4)`);
  assert.ok(trough < 0.6, `sine trough sampled ${trough}px away from (0, -1.8)`);
  // from/to trim the drawn domain
  for (const p of pl) {
    assert.ok(p[0] >= 126 - 2.75 * 20 - 0.6 && p[0] <= 126 + 1.85 * 20 + 0.6);
  }
  assertNoCapPokesPastArrow(out);
});

test('sine curve rejects a zero angular frequency', () => {
  assert.throws(() => buildGraph({ ...GRID, curves: [{ kind: 'sine', b: 0 }] }));
});

test('cubics honor from/to domain trimming', () => {
  const out = buildGraph({ ...GRID, grid: false, cubics: [{ a: 0.1, to: 2 }] });
  const [pl] = polylines(out);
  const maxX = Math.max(...pl.map((p) => p[0]));
  assert.ok(maxX <= 126 + 2 * 20 + 0.6, `cubic sampled to px ${maxX}, past its to=2 bound`);
  assert.throws(() => buildGraph({ ...GRID, cubics: [{ a: 0.1, from: 3, to: 1 }] }),
    /from\/to/, 'an empty from/to domain must be rejected');
});

test('polynomials sample the exact formula at every degree', () => {
  // y = x^4/40 - 2 : a quartic no cubics/quadratics spec can express
  const out = buildGraph({ ...GRID, grid: false, polynomials: [{ coeffs: [-2, 0, 0, 0, 1 / 40] }] });
  const [pl] = polylines(out);
  for (const [x, y] of [[-4, 4.4], [-2, -1.6], [0, -2], [2, -1.6], [4, 4.4]]) {
    const px = [126 + x * 20, 126 - y * 20];
    const closest = Math.min(...pl.map((p) => dist(p, px)));
    assert.ok(closest < 0.6, `quartic sampled ${closest}px from (${x}, ${y})`);
  }
  assertNoCapPokesPastArrow(out);
});

test('polynomials honor from/to and reject degenerate coefficient lists', () => {
  const out = buildGraph({ ...GRID, grid: false, polynomials: [{ coeffs: [0, 0, 0, 0.1], to: 2 }] });
  const maxX = Math.max(...polylines(out).flat().map((p) => p[0]));
  assert.ok(maxX <= 126 + 2 * 20 + 0.6, `polynomial sampled to px ${maxX}, past its to=2 bound`);
  assert.throws(() => buildGraph({ ...GRID, polynomials: [{ coeffs: [1] }] }), /coeffs/);
  assert.throws(() => buildGraph({ ...GRID, polynomials: [{ coeffs: [1, 2, 0] }] }), /leading coefficient/);
  assert.throws(() => buildGraph({ ...GRID, polynomials: [{ coeffs: [1, Infinity] }] }), /coeffs/);
});

test('rationals split at a pole and sample the exact quotient', () => {
  // 2/x + x/3 = (x^2 + 6)/(3x): two branches, extrema at ±sqrt(6)
  const out = buildGraph({ ...GRID, grid: false, rationals: [{ num: [6, 0, 1], den: [0, 3] }] });
  const pls = polylines(out);
  assert.equal(pls.length, 2, 'the pole at x = 0 separates the branches');
  for (const pl of pls) for (const p of pl) assert.ok(Math.abs(p[0] - 126) > 0.5, 'no point sits on the asymptote');
  const min = [126 + Math.sqrt(6) * 20, 126 - (2 / Math.sqrt(6) + Math.sqrt(6) / 3) * 20];
  const closest = Math.min(...pls.flat().map((p) => dist(p, min)));
  assert.ok(closest < 0.6, `the local minimum at x = sqrt(6) sampled ${closest}px away`);
  assertNoCapPokesPastArrow(out);
});

test('rationals reject empty or identically zero coefficient lists', () => {
  assert.throws(() => buildGraph({ ...GRID, rationals: [{ num: [], den: [1] }] }), /num/);
  assert.throws(() => buildGraph({ ...GRID, rationals: [{ num: [1], den: [0, 0] }] }), /den.*zero/);
  assert.throws(() => buildGraph({ ...GRID, rationals: [{ num: [1], den: [NaN] }] }), /den/);
});

test('tick labels ride the drawn axes when the range never reaches the origin', () => {
  // a real-data window: years across, thousands of barrels up
  const out = buildGraph({
    xMin: 1973, xMax: 2008, yMin: 0, yMax: 2200,
    xUnit: 8, yUnit: 0.09, grid: true, xGridStep: 5, yGridStep: 200,
    tickLabels: true, xTickStep: 5, yTickStep: 200,
  });
  const labels = out.els.filter((e) => e.tag === 'text' && e.attrs.fontSize === '11').map((e) => e.text);
  assert.ok(labels.includes('1,975'), 'x ticks are labeled on a positive-only x range');
  assert.ok(labels.includes('2,200'), 'y ticks are labeled even though x never reaches 0');
  assert.ok(labels.includes('0'), 'the zero tick is kept when the axes do not cross at the origin');
});

test('a year axis can opt out of thousands separators one axis at a time', () => {
  const out = buildGraph({
    xMin: 1973, xMax: 2008, yMin: 0, yMax: 2200,
    xUnit: 8, yUnit: 0.09, xGridStep: 5, yGridStep: 200,
    tickLabels: true, xTickStep: 5, yTickStep: 200, xTickGrouping: false,
  });
  const labels = out.els.filter((e) => e.tag === 'text' && e.attrs.fontSize === '11').map((e) => e.text);
  assert.ok(labels.includes('1975'), 'years render without a separator');
  assert.ok(!labels.includes('1,975'));
  assert.ok(labels.includes('2,200'), 'the other axis keeps its grouping');
});

test('a graph through the origin still drops the ambiguous single zero label', () => {
  const out = buildGraph({ ...GRID, tickLabels: true });
  const labels = out.els.filter((e) => e.tag === 'text' && e.attrs.fontSize === '11').map((e) => e.text);
  assert.equal(labels.filter((t) => t === '0').length, 0);
  assert.ok(labels.includes('−5') && labels.includes('5'));
});

test('graph segment arrows mark an indicator ray without a cap past the apex', () => {
  const out = buildGraph({
    ...GRID, grid: false,
    segments: [{ from: [-3, 4], to: [5, 4], arrows: 'end' }],
  });
  const tips = polygons(out).map((pg) => pg[0]);
  assert.ok(tips.some((t) => dist(t, [126 + 5 * 20, 126 - 4 * 20]) < 0.6), 'head sits at the true end');
  const ray = out.els.find((e) => e.tag === 'line' && e.attrs.strokeWidth === '1.4');
  assert.ok(Number(ray.attrs.x2) < 126 + 5 * 20 - 5, 'the shaft stops short of the apex');
  assert.equal(Number(ray.attrs.x1), 126 - 3 * 20, 'the unarrowed end is untrimmed');
});

const heavy = (out) => out.els
  .filter((e) => e.tag === 'line' && e.attrs.strokeWidth === '3.5')
  .map((e) => [Number(e.attrs.x1), Number(e.attrs.x2)]);

test('number-line intervals draw one heavy stretch each, unbounded ends reaching the chevrons', () => {
  // (-inf, 2) U (2, inf) — the union a single marker+shade cannot express
  const out = buildNumberLine({
    min: -3, max: 3, ariaLabel: 'x < 2 or x > 2.',
    intervals: [{ to: 2, toType: 'open' }, { from: 2, fromType: 'open' }],
  });
  const spans = heavy(out);
  assert.equal(spans.length, 2);
  // X(v) = 28 + (v - min) * 264/6; X(2) = 248. Open ends inset by the dot radius.
  assert.deepEqual(spans, [[16, 243], [253, 304]]);
  const circles = out.els.filter((e) => e.tag === 'circle');
  assert.equal(circles.length, 2);
  for (const c of circles) {
    assert.equal(c.attrs.cx, '248');
    assert.equal(c.attrs.fill, 'none', 'an excluded endpoint must render hollow');
  }
  // no tick under a hollow circle — it would read as a crosshair
  const ticks = out.els.filter((e) => e.tag === 'line' && e.attrs.strokeWidth === '1.5' && e.attrs.x1 === e.attrs.x2);
  assert.ok(!ticks.some((t) => t.attrs.x1 === '248'), 'the tick at an excluded endpoint is suppressed');
  assert.equal(ticks.length, 6, 'the other six integer ticks stay');
  const labels = out.els.filter((e) => e.tag === 'text').map((e) => e.text);
  assert.ok(labels.includes('2'), 'the number under a hollow endpoint is still labeled');
});

test('number-line intervals mark included endpoints solid and validate their bounds', () => {
  const out = buildNumberLine({
    min: 0, max: 7, ariaLabel: '1 <= x <= 3 or x > 5.',
    intervals: [{ from: 1, to: 3 }, { from: 5, fromType: 'open' }],
  });
  const fills = out.els.filter((e) => e.tag === 'circle').map((e) => e.attrs.fill);
  assert.deepEqual(fills, ['currentColor', 'currentColor', 'none']);
  // {} spells all real numbers: one heavy stretch, arrow to arrow, no circles
  const reals = buildNumberLine({ min: 0, max: 5, ariaLabel: 'All real numbers.', intervals: [{}] });
  assert.deepEqual(heavy(reals), [[16, 304]]);
  assert.equal(reals.els.filter((e) => e.tag === 'circle').length, 0);
  assert.throws(() => buildNumberLine({ min: 0, max: 5, intervals: [{ from: 3, to: 1 }] }), /from < to/);
  assert.throws(() => buildNumberLine({ min: 0, max: 5, intervals: [{ from: 9 }] }), /outside/);
  assert.throws(() => buildNumberLine({ min: 0, max: 5, intervals: [{ from: 1, fromType: 'hollow' }] }), /open.*closed/);
});

test('figure segment arrows trim the shaft and point at the true target', () => {
  const out = buildFigure({
    unit: 40,
    segments: [{ from: [0, 0], to: [3, 0], arrow: true }],
    texts: [{ at: [0, 0], text: 'a' }],
  });
  const line = out.els.find((e) => e.tag === 'line');
  const tip = out.els.find((e) => e.tag === 'polygon').attrs.points.split(' ')[0].split(',').map(Number);
  // the arrow apex is at px of (3,0); the drawn shaft stops short of it
  assert.ok(dist([line.attrs.x2, line.attrs.y2], tip) >= 5);
});

// ---------------------------------------------------------------------------
// Label layout: measured text metrics, viewBox auto-fit, and the font floor.

test('an in-bounds figure keeps its natural 0 0 W H viewBox byte for byte', () => {
  const out = buildGraph({ ...GRID, lines: [{ slope: 1, intercept: 0 }] });
  assert.equal(out.viewBox, `0 0 ${out.width} ${out.height}`);
  assert.equal(out.viewBox, '0 0 252 252'); // 10 units * 20px + 2 * 26 margin
});

test('a long edge label expands the viewBox instead of clipping', () => {
  const out = buildGraph({
    ...GRID,
    points: [{ at: [4.8, 4.8], label: 'maximum observed value', labelSide: 'e' }],
  });
  const [x, y, w, h] = out.viewBox.split(' ').map(Number);
  const label = out.els.find((e) => e.tag === 'text' && e.text === 'maximum observed value');
  assert.ok(label, 'label rendered');
  const size = Number(label.attrs.fontSize);
  const width = measureTextWidth(label.text, size);
  const right = Number(label.attrs.x) + (label.attrs.textAnchor === 'end' ? 0
    : label.attrs.textAnchor === 'middle' ? width / 2 : width);
  assert.ok(x + w >= right, `viewBox right edge ${x + w} covers the label end ${right}`);
  assert.equal(out.width, w, 'width tracks the fitted viewBox');
  assert.ok(w > 252, 'the box actually grew');
});

test('every text element lies inside the fitted viewBox with fit-pass margins', () => {
  // A deliberately hostile figure: labels at every edge, long tick numbers.
  const out = buildGraph({
    xMin: -60, xMax: 60, yMin: -1000, yMax: 7000, xUnit: 2, yUnit: 0.03,
    tickLabels: true, xTickStep: 20, yTickStep: 2000, gridStep: 20,
    yGridStep: 1000, xLabel: 'years since 1900', yLabel: 'production',
    ariaLabel: 'test',
    points: [
      { at: [-60, 7000], label: 'northwest corner point', labelSide: 'w' },
      { at: [60, -1000], label: 'southeast corner point', labelSide: 'e' },
    ],
  });
  const [x, y, w, h] = out.viewBox.split(' ').map(Number);
  for (const e of out.els.filter((e) => e.tag === 'text')) {
    const b = fitTextBox({
      x: e.attrs.x, y: e.attrs.y, text: e.text, fontSize: e.attrs.fontSize,
      textAnchor: e.attrs.textAnchor, italic: e.attrs.fontStyle === 'italic',
    });
    assert.ok(b[0] >= x && b[2] <= x + w && b[1] >= y && b[3] <= y + h,
      `text ${JSON.stringify(e.text)} box ${b} inside viewBox ${out.viewBox}`);
  }
});

test('fonts scale up when CSS max-width would shrink text below the floor', () => {
  // 28 units wide at 20px/unit = 612px natural, capped at 360 on screen.
  const out = buildGraph({ xMin: -14, xMax: 14, yMin: -5, yMax: 5, unit: 20, tickLabels: true, ariaLabel: 'wide' });
  const shrink = out.maxWidth / out.width;
  for (const e of out.els.filter((e) => e.tag === 'text')) {
    assert.ok(Number(e.attrs.fontSize) * shrink >= 9.9,
      `${JSON.stringify(e.text)} renders at ${Number(e.attrs.fontSize) * shrink}px effective`);
  }
  const body = out.els.find((e) => e.tag === 'text' && e.attrs.fontStyle === 'italic');
  assert.ok(Number(body.attrs.fontSize) * shrink >= 11.9, 'axis letters hold the 12px floor');
});

test('an in-range figure keeps the base 13px font', () => {
  const out = buildGraph({ ...GRID, points: [{ at: [1, 1], label: 'P' }] });
  const label = out.els.find((e) => e.tag === 'text' && e.text === 'P');
  assert.equal(label.attrs.fontSize, '13');
});

test('number-line titles and figure labels get the same auto-fit', () => {
  const nl = buildNumberLine({
    min: -3, max: 3, ariaLabel: 'x <= -2.',
    marker: { at: -2, type: 'paren' }, shade: 'left',
    title: 'every real number x with x ≤ −2 (a deliberately long title)',
  });
  const [nx, , nw] = nl.viewBox.split(' ').map(Number);
  assert.ok(nx < 0 && nw > 320, 'long off-centre title widened the box leftward');

  const fig = buildFigure({
    ariaLabel: 'test',
    polygons: [{ points: [[0, 0], [3, 0], [0, 2]], vertexLabels: ['a very long vertex label', null, null] }],
  });
  const [fx] = fig.viewBox.split(' ').map(Number);
  assert.ok(fx < 0, 'left vertex label pushed the viewBox left');
});

test('measured widths order sanely and match Arial advances for digits', () => {
  assert.ok(measureTextWidth('iii', 13) < measureTextWidth('WWW', 13));
  assert.ok(Math.abs(measureTextWidth('123', 13) - 3 * 0.556 * 13) < 0.01);
  assert.ok(measureTextWidth('x', 13, { italic: true }) > measureTextWidth('x', 13));
});

test("tickLabels 'x' labels one axis only, and junk values are rejected", () => {
  const out = buildGraph({ xMin: 3, xMax: 12, yMin: -5, yMax: 5, unit: 20, tickLabels: 'x', ariaLabel: 't' });
  const ticks = out.els.filter((e) => e.tag === 'text' && !e.attrs.fontStyle).map((e) => e.text);
  assert.ok(ticks.includes('3') && ticks.includes('12'), 'x ticks labeled');
  assert.ok(!ticks.includes('5') || ticks.filter((t) => t === '5').length === 1, 'no y tick labels beyond the x run');
  assert.ok(!ticks.includes('−5'), 'no y tick labels');
  assert.throws(() => buildGraph({ ...GRID, tickLabels: 'both' }), /tickLabels/);
});

// ---------------------------------------------------------------------------
// Label collision avoidance: tick digits, axis letters, and texts are
// placement obstacles; dashed guides and axis-hugging strokes yield to text.
// These shipped after precalculus 3.7 rendered with asymptote labels printed
// across tick numbers, axis letters, and each other.

/** the tight ink box the engine scores against (0.72em over, 0.2em under) */
function inkBox(e) {
  const size = Number(e.attrs.fontSize);
  const w = measureTextWidth(e.text, size, { italic: e.attrs.fontStyle === 'italic' });
  const X = Number(e.attrs.x), Y = Number(e.attrs.y);
  const x0 = e.attrs.textAnchor === 'middle' ? X - w / 2 : e.attrs.textAnchor === 'end' ? X - w : X;
  return [x0, Y - 0.72 * size, x0 + w, Y + 0.2 * size];
}
const boxesTouch = (p, q, shrink = 0.5) => (
  p[0] + shrink < q[2] - shrink && q[0] + shrink < p[2] - shrink
  && p[1] + shrink < q[3] - shrink && q[1] + shrink < p[3] - shrink);
const segCrossesBox = (a, b, bb, shrink = 1) => {
  const box = [bb[0] + shrink, bb[1] + shrink, bb[2] - shrink, bb[3] - shrink];
  const d = [b[0] - a[0], b[1] - a[1]];
  let t0 = 0, t1 = 1;
  for (const [p, q] of [[-d[0], a[0] - box[0]], [d[0], box[2] - a[0]], [-d[1], a[1] - box[1]], [d[1], box[3] - a[1]]]) {
    if (p === 0) { if (q < 0) return false; continue; }
    const r = q / p;
    if (p < 0) t0 = Math.max(t0, r); else t1 = Math.min(t1, r);
  }
  return t0 < t1;
};

test('auto-placed labels never print over tick digits or other labels', () => {
  // Two figures from precalculus 3.7 that used to fail: the shifted
  // reciprocal (its x = −2 label landed across the y-axis digit column) and
  // the three-asymptote graph (y = 0 landed on the x digit 6, point labels
  // on the digits 4 and 5). Every placed label must clear every other text.
  const specs = [
    {
      xMin: -7, xMax: 7, yMin: -3, yMax: 7, unit: 18, tickLabels: true, tickStep: 1,
      ariaLabel: 't', rationals: [{ num: [7, 3], den: [2, 1] }],
      lines: [
        { x: -2, dashed: true, arrows: false, label: 'x = −2' },
        { y: 3, dashed: true, arrows: false, label: 'y = 3', labelSide: 'left' },
      ],
    },
    {
      xMin: -6, xMax: 8, yMin: -6, yMax: 6, unit: 20, tickLabels: true, tickStep: 1,
      ariaLabel: 't', rationals: [{ num: [-6, 1, 1], den: [10, -7, -4, 1] }],
      lines: [
        { x: -2, dashed: true, arrows: false, label: 'x = −2' },
        { x: 1, dashed: true, arrows: false, label: 'x = 1' },
        { x: 5, dashed: true, arrows: false, label: 'x = 5' },
        { y: 0, dashed: true, arrows: false, label: 'y = 0' },
      ],
    },
    {
      xMin: -6, xMax: 6, yMin: -7, yMax: 5, unit: 20, tickLabels: true, tickStep: 1,
      ariaLabel: 't', rationals: [{ num: [-24, -4, 4], den: [12, 0, -9, 3] }],
      lines: [
        { x: -1, dashed: true, arrows: false, label: 'x = −1' },
        { x: 2, dashed: true, arrows: false, label: 'x = 2' },
      ],
      points: [{ at: [-2, 0], label: '(−2, 0)' }, { at: [3, 0], label: '(3, 0)' }],
    },
  ];
  for (const spec of specs) {
    const texts = buildGraph(spec).els.filter((e) => e.tag === 'text');
    const labels = texts.filter((e) => e.attrs.fontSize === '13' && !e.attrs.fontStyle);
    assert.ok(labels.length >= 2, 'labels rendered');
    for (const label of labels) {
      for (const other of texts) {
        if (other === label) continue;
        assert.ok(!boxesTouch(inkBox(label), inkBox(other)),
          `label ${JSON.stringify(label.text)} prints over ${JSON.stringify(other.text)}`);
      }
    }
  }
});

test('texts annotations are placement obstacles for auto-placed labels', () => {
  // A texts note parked exactly where the x = 0 label likes to sit (the
  // toolkit reciprocal corridor); the label must move rather than overprint.
  const out = buildGraph({
    xMin: -4, xMax: 4, yMin: -4, yMax: 4, unit: 26, tickLabels: true, tickStep: 1,
    ariaLabel: 't', rationals: [{ num: [1], den: [0, 1] }],
    lines: [{ x: 0, dashed: true, arrows: false, label: 'x = 0', labelSide: 'right' }],
    texts: [{ at: [1.1, 2.6], text: 'y = 1/x', anchor: 'start' }],
  });
  const texts = out.els.filter((e) => e.tag === 'text');
  const label = texts.find((e) => e.text === 'x = 0');
  const note = texts.find((e) => e.text === 'y = 1/x');
  assert.ok(!boxesTouch(inkBox(label), inkBox(note)), 'x = 0 label prints over the texts note');
});

test('dashed guide lines are emitted gapped behind label ink', () => {
  const out = buildGraph({
    ...GRID, tickLabels: true, tickStep: 2, ariaLabel: 't',
    lines: [{ x: 0, dashed: true, arrows: false }],
    points: [{ at: [0.7, 3], label: 'level point', labelSide: 'w' }],
  });
  const label = out.els.find((e) => e.tag === 'text' && e.text === 'level point');
  const bb = inkBox(label);
  const dashed = out.els.filter((e) => e.tag === 'line' && e.attrs.strokeDasharray === '6 5');
  assert.ok(dashed.length >= 2, 'the dashed line splits around the label');
  for (const l of dashed) {
    assert.ok(!segCrossesBox([+l.attrs.x1, +l.attrs.y1], [+l.attrs.x2, +l.attrs.y2], bb, -2),
      'a dashed stroke crosses the label box it should yield to');
  }
});

test('dashed strokes gap at tick digits; solid curves stay continuous', () => {
  // The dashed asymptote at x = 3 runs straight through its own tick digit,
  // so its dashes gap there — invisible in a dash pattern. The reciprocal
  // itself hugs the axis across the digit row and must NOT gap: a solid
  // curve with chunks missing reads as dashing, which is a mathematical
  // statement (this shipped once and looked exactly that wrong).
  const out = buildGraph({
    xMin: -4, xMax: 4, yMin: -4, yMax: 4, unit: 26, tickLabels: true, tickStep: 1,
    ariaLabel: 't', rationals: [{ num: [1], den: [0, 1] }],
    lines: [{ x: 3, dashed: true, arrows: false }],
  });
  const digits = out.els.filter((e) => e.tag === 'text' && e.attrs.fontSize === '11');
  const dashed = out.els.filter((e) => e.tag === 'line' && e.attrs.strokeDasharray === '6 5');
  assert.ok(dashed.length >= 2, 'the dashed line splits around its own tick digit');
  for (const d of digits) {
    const bb = inkBox(d);
    for (const l of dashed) {
      assert.ok(!segCrossesBox([+l.attrs.x1, +l.attrs.y1], [+l.attrs.x2, +l.attrs.y2], bb),
        `a dashed stroke prints through tick digit ${JSON.stringify(d.text)}`);
    }
  }
  assert.equal(polylines(out).length, 2,
    'the reciprocal keeps one unbroken polyline per branch — solid strokes never gap');
});

test('the origin-adjacent x and y digits never print through each other', () => {
  const out = buildGraph({
    xMin: -7, xMax: 7, yMin: -3, yMax: 7, unit: 18, tickLabels: true, tickStep: 1, ariaLabel: 't',
  });
  const digits = out.els.filter((e) => e.tag === 'text' && e.attrs.fontSize === '11');
  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      assert.ok(!boxesTouch(inkBox(digits[i]), inkBox(digits[j])),
        `tick digits ${digits[i].text} and ${digits[j].text} overlap`);
    }
  }
});

