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
