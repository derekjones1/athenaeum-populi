// Geometry regression tests for the static-figure builders.
//
// These exist because spline-approximated conics and corners, and stroke caps
// poking past arrowheads, shipped to a production page before any test
// covered the SVG geometry. Figures are learner-facing mathematics: the
// circle primitive must be a real ellipse, a |x| corner must stay a corner,
// and no stroke may extend beyond an arrowhead apex.

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildGraph, buildFigure, buildNumberLine, toSvgString, GRAPH_PLOT_RENDER_DEFAULTS,
} from '../../assets/js/lib/math/graph-core.mjs';
import { figureNodes, svgAttrName } from '../../assets/js/lib/math/figure-svg.mjs';
import { fitTextBox, measureTextWidth } from '../../assets/js/lib/math/text-metrics.mjs';

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

test('cosine curve samples the exact function', () => {
  const out = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'cosine' }] });
  const pl = polylines(out).flat();
  for (const [x, y] of [[0, 1], [Math.PI / 2, 0], [Math.PI, -1], [-Math.PI, -1]]) {
    const closest = Math.min(...pl.map((p) => dist(p, [126 + x * 20, 126 - y * 20])));
    assert.ok(closest < 0.6, `cos(x) sampled ${closest}px from (${x.toFixed(2)}, ${y})`);
  }
});

test('tangent branches split at each vertical asymptote', () => {
  const out = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'tangent' }] });
  // poles at ±π/2 and ±3π/2 cut [-5, 5] into five visible branches
  assert.equal(polylines(out).length, 5);
  const pl = polylines(out).flat();
  for (const [x, y] of [[0, 0], [Math.PI / 4, 1], [-Math.PI / 4, -1], [Math.PI, 0]]) {
    const closest = Math.min(...pl.map((p) => dist(p, [126 + x * 20, 126 - y * 20])));
    assert.ok(closest < 0.6, `tan(x) sampled ${closest}px from (${x.toFixed(2)}, ${y})`);
  }
  // no branch touches the asymptote x = π/2 (px 126 + π/2·20)
  for (const branch of polylines(out)) {
    for (const p of branch) assert.ok(Math.abs(p[0] - (126 + Math.PI / 2 * 20)) > 0.5);
  }
});

test('secant and cosecant never enter the forbidden band |y| < 1', () => {
  for (const kind of ['secant', 'cosecant']) {
    const out = buildGraph({ ...GRID, grid: false, curves: [{ kind }] });
    assert.ok(polylines(out).length >= 3, `${kind} must split into branches`);
    for (const p of polylines(out).flat()) {
      assert.ok(Math.abs(p[1] - 126) > 20 - 0.6, `${kind} entered |y| < 1 at ${p}`);
    }
  }
  // cosecant has a pole at x = 0: nothing may sit on the y-axis
  const csc = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'cosecant' }] });
  for (const p of polylines(csc).flat()) assert.ok(Math.abs(p[0] - 126) > 0.5);
});

test('cotangent passes its zeros and splits at x = 0', () => {
  const out = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'cotangent' }] });
  const pl = polylines(out).flat();
  for (const [x, y] of [[Math.PI / 2, 0], [-Math.PI / 2, 0], [Math.PI / 4, 1]]) {
    const closest = Math.min(...pl.map((p) => dist(p, [126 + x * 20, 126 - y * 20])));
    assert.ok(closest < 0.6, `cot(x) sampled ${closest}px from (${x.toFixed(2)}, ${y})`);
  }
  for (const p of pl) assert.ok(Math.abs(p[0] - 126) > 0.5, 'cot must stay off its x = 0 asymptote');
});

test('arcsine spans its closed domain, vertical tangents included', () => {
  const out = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'arcsine' }] });
  const pl = polylines(out).flat();
  for (const [x, y] of [[0, 0], [1, Math.PI / 2], [-1, -Math.PI / 2], [0.5, Math.PI / 6]]) {
    const closest = Math.min(...pl.map((p) => dist(p, [126 + x * 20, 126 - y * 20])));
    assert.ok(closest < 0.6, `arcsin(x) sampled ${closest}px from (${x}, ${y.toFixed(2)})`);
  }
  for (const p of pl) assert.ok(p[0] >= 126 - 20 - 0.6 && p[0] <= 126 + 20 + 0.6, 'arcsin domain is [-1, 1]');
});

test('arccosine falls from (-1, π) to (1, 0) and honors from/to', () => {
  const out = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'arccosine' }] });
  const pl = polylines(out).flat();
  for (const [x, y] of [[1, 0], [0, Math.PI / 2], [-1, Math.PI]]) {
    const closest = Math.min(...pl.map((p) => dist(p, [126 + x * 20, 126 - y * 20])));
    assert.ok(closest < 0.6, `arccos(x) sampled ${closest}px from (${x}, ${y.toFixed(2)})`);
  }
  const trimmed = buildGraph({
    ...GRID, grid: false, curves: [{ kind: 'arccosine', from: -0.5, to: 0.5 }],
  });
  for (const p of polylines(trimmed).flat()) {
    assert.ok(p[0] >= 126 - 0.5 * 20 - 0.6 && p[0] <= 126 + 0.5 * 20 + 0.6,
      'from/to must trim the arccosine domain despite x running against the parameter');
  }
});

test('arctangent stays strictly between its horizontal asymptotes', () => {
  const out = buildGraph({ ...GRID, grid: false, curves: [{ kind: 'arctangent' }] });
  const pl = polylines(out).flat();
  for (const [x, y] of [[0, 0], [1, Math.PI / 4], [-1, -Math.PI / 4]]) {
    const closest = Math.min(...pl.map((p) => dist(p, [126 + x * 20, 126 - y * 20])));
    assert.ok(closest < 0.6, `arctan(x) sampled ${closest}px from (${x}, ${y.toFixed(2)})`);
  }
  for (const p of pl) assert.ok(Math.abs(p[1] - 126) < Math.PI / 2 * 20, 'arctan is bounded by y = ±π/2');
});

test('the trig kinds reject a zero angular frequency', () => {
  for (const kind of ['cosine', 'tangent', 'secant', 'cosecant', 'cotangent', 'arcsine', 'arccosine', 'arctangent']) {
    assert.throws(() => buildGraph({ ...GRID, curves: [{ kind, b: 0 }] }), undefined, `${kind} b: 0`);
  }
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

const nlTicks = (out) => out.els.filter((e) => e.tag === 'line' && e.attrs.strokeWidth === '1.5' && e.attrs.x1 === e.attrs.x2);
const nlLabels = (out) => out.els.filter((e) => e.tag === 'text' && e.attrs.fontSize === '12').map((e) => e.text);

test('number-line paren and bracket interval ends draw the interval-notation glyph', () => {
  // (−2, 1]: the glyph sits on the axis exactly as a marker's does, the
  // stretch runs from glyph to glyph, and only the paren loses its tick
  const out = buildNumberLine({
    min: -3, max: 3, ariaLabel: '−2 < x ≤ 1.',
    intervals: [{ from: -2, fromType: 'paren', to: 1, toType: 'bracket' }],
  });
  // X(v) = 28 + (v + 3) * 44
  const glyphs = out.els.filter((e) => e.tag === 'text' && e.attrs.fontSize === '22');
  assert.deepEqual(glyphs.map((g) => [g.text, g.attrs.x, g.attrs.y, g.attrs.fontWeight]), [['(', '72', '37', '600'], [']', '204', '37', '600']]);
  assert.deepEqual(heavy(out), [[72, 204]], 'the stretch runs from the glyph positions, not inset');
  assert.equal(out.els.filter((e) => e.tag === 'circle').length, 0, 'glyph ends draw no circle');
  const tickXs = nlTicks(out).map((t) => t.attrs.x1);
  assert.ok(!tickXs.includes('72'), 'no tick under the paren');
  assert.ok(tickXs.includes('204'), 'the bracket keeps its tick');
  // the two-ray form: (−∞, −1] ∪ (2, ∞)
  const rays = buildNumberLine({
    min: -3, max: 3, ariaLabel: 'x ≤ −1 or x > 2.',
    intervals: [{ to: -1, toType: 'bracket' }, { from: 2, fromType: 'paren' }],
  });
  assert.deepEqual(rays.els.filter((e) => e.attrs.fontSize === '22').map((g) => g.text), [']', '(']);
  assert.deepEqual(heavy(rays), [[16, 116], [248, 304]]);
});

test('a tenths number line labels every tick with one decimal', () => {
  const out = buildNumberLine({ min: 0, max: 1, step: 0.1, ariaLabel: 'Tenths.', marker: { at: 0.3, type: 'paren' }, shade: 'right' });
  assert.deepEqual(nlLabels(out), ['0.0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0']);
  // 0.1 * 3 is 0.30000000000000004: the hollow comparison is within 1e-9
  assert.equal(nlTicks(out).length, 10, 'the tick under the paren at 0.3 is skipped');
  assert.ok(nlTicks(out).every((t) => Number(t.attrs.y2) - Number(t.attrs.y1) === 12), 'every labelled tick is a major tick');
  assert.equal(out.els.find((e) => e.text === '(').attrs.x, String(28 + 0.3 * 264));
});

test('a hundredths number line labelled every ten draws short minor ticks between', () => {
  const out = buildNumberLine({ min: -1, max: 0, step: 0.01, labelEvery: 10, ariaLabel: 'Hundredths.' });
  assert.deepEqual(nlLabels(out), ['−1.00', '−0.90', '−0.80', '−0.70', '−0.60', '−0.50', '−0.40', '−0.30', '−0.20', '−0.10', '0.00'],
    'two decimals from the step, U+2212 minus, and no −0.00');
  const ticks = nlTicks(out);
  assert.equal(ticks.length, 101);
  const lengths = ticks.map((t) => Number(t.attrs.y2) - Number(t.attrs.y1));
  assert.equal(lengths.filter((l) => l === 12).length, 11, 'labelled ticks keep ±6');
  assert.equal(lengths.filter((l) => l === 8).length, 90, 'minor ticks are ±4');
  assert.deepEqual(nlLabels(buildNumberLine({ min: 2.7, max: 2.8, step: 0.01, ariaLabel: 'x' })),
    ['2.70', '2.71', '2.72', '2.73', '2.74', '2.75', '2.76', '2.77', '2.78', '2.79', '2.80']);
  assert.deepEqual(nlLabels(buildNumberLine({ min: -12, max: 12, step: 4, ariaLabel: 'x' })),
    ['−12', '−8', '−4', '0', '4', '8', '12'], 'an integer step on integer ends prints plain');
});

test('the default step leaves an integer number line byte-for-byte as it was', () => {
  // Frozen October 6, 2026, before `step` existed: every number line in the
  // corpus renders through this path, so the default must not move a pixel.
  const spec = { ariaLabel: 'A number line from 70 to 80 with a dot at 76.', min: 70, max: 80, points: [{ at: 76 }] };
  const tick = (x, v) => `  <line x1="${x}" y1="24" x2="${x}" y2="36" stroke="currentColor" stroke-width="1.5"/>\n`
    + `  <text x="${x}" y="55" text-anchor="middle" font-size="12" fill="currentColor">${v}</text>`;
  const xs = ['28', '54.4', '80.8', '107.2', '133.6', '160', '186.4', '212.8', '239.2', '265.6', '292'];
  const expected = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 76" width="320" height="76" font-family="Helvetica, Arial, sans-serif">',
    '  <line x1="16" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="1.5"/>',
    '  <path d="M 24 23 L 16 30 L 24 37" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    '  <path d="M 296 23 L 304 30 L 296 37" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    ...xs.map((x, i) => tick(x, 70 + i)),
    '  <circle cx="186.4" cy="30" r="4" fill="currentColor"/>',
    '</svg>',
  ].join('\n');
  assert.equal(toSvgString(spec, { builder: buildNumberLine, color: null }), expected);
  assert.equal(toSvgString({ ...spec, step: 1 }, { builder: buildNumberLine, color: null }), expected, 'an explicit step: 1 is the default');
});

test('number-line step and labelEvery validate, naming what is wrong', () => {
  assert.throws(() => buildNumberLine({ min: 0, max: 1, step: 0.3, ariaLabel: 'x' }), /step 0\.3 does not divide 0\.\.1/);
  assert.throws(() => buildNumberLine({ min: 0, max: 1, step: 0, ariaLabel: 'x' }), /step must be a positive number/);
  assert.throws(() => buildNumberLine({ min: 0, max: 1, step: 0.1, labelEvery: 0, ariaLabel: 'x' }), /labelEvery must be a positive integer/);
  assert.throws(() => buildNumberLine({ min: 0, max: 4, labelEvery: 1.5, ariaLabel: 'x' }), /labelEvery must be a positive integer/);
  assert.throws(() => buildNumberLine({ min: 0.5, max: 4, ariaLabel: 'x' }), /integer min < max/, 'without a step the ends stay integers');
  assert.throws(() => buildNumberLine({ min: 0, max: 5, intervals: [{ to: 2, toType: 'brace' }] }), /'open', 'closed', 'paren', or 'bracket'/);
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

  // The superscript block is measured, not guessed. Figures write exponents as
  // literal superscript characters (`x⁶`, `f⁻¹(x)`) because the SVG label layer
  // has no typesetter, so an unmeasured one falls back to DEFAULT_ADVANCE —
  // 0.7 em, more than twice a superscript digit's real 0.278 em — and pushes
  // the label off the side the placer chose for it.
  for (const ch of '⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺⁼⁽⁾ⁿ') {
    assert.ok(measureTextWidth(ch, 13) < measureTextWidth('0', 13),
      `superscript ${ch} must measure narrower than a full-size digit`);
  }
  assert.ok(Math.abs(measureTextWidth('⁶', 13) - 0.278 * 13) < 0.01);
  assert.ok(measureTextWidth('x⁶', 13) < measureTextWidth('x6', 13));
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


// The logistic S-curve and the y-axis-reflected logarithm had no analytic
// spelling, so §§4.4, 4.7 and 4.8 drew six of them as dense hand-sampled
// point lists — the pasted-SVG problem with extra steps, and exactly what the
// playbook says to fix by extending the engine instead.

test('the logistic curve draws its exact formula, not a spline through samples', () => {
  const model = (x) => 1000 / (1 + 999 * Math.exp(-0.6030 * x));
  const window = { xMin: 0, xMax: 26, yMin: 0, yMax: 1100, unit: 15, yUnit: 0.5, ariaLabel: 't' };

  const drawn = polylines(buildGraph({
    ...window, curves: [{ kind: 'logistic', c: 1000, a: 999, b: 0.6030 }],
  }));
  assert.equal(drawn.length, 1, 'the S-curve is one unbroken run inside the grid');

  // Render the closed form as an explicit polyline in the SAME window, so the
  // two share one pixel mapping and the comparison needs no calibration.
  const n = 2600;
  const exact = polylines(buildGraph({
    ...window,
    polylines: [{ through: Array.from({ length: n + 1 }, (_, i) => {
      const x = 26 * i / n;
      return [x, model(x)];
    }) }],
  }))[0];

  let worst = 0;
  for (const [px, py] of drawn[0]) {
    const near = exact.reduce((best, q) => (
      Math.abs(q[0] - px) < Math.abs(best[0] - px) ? q : best));
    if (Math.abs(near[0] - px) < 0.5) worst = Math.max(worst, Math.abs(near[1] - py));
  }
  assert.ok(worst < 1.5,
    `logistic primitive is ${worst.toFixed(2)}px from its own closed form`);

  // Its defining features, which a spline through samples guarantees neither of:
  // it levels off at the capacity, and reaches half of it at ln(a)/b.
  const ys = drawn[0].map((p) => p[1]);
  const top = Math.min(...ys); // pixels grow downward, so the plateau is the min
  const halfPixel = (Math.max(...ys) + top) / 2;
  const half = drawn[0].reduce((best, p) => (
    Math.abs(p[1] - halfPixel) < Math.abs(best[1] - halfPixel) ? p : best));
  const xs = drawn[0].map((p) => p[0]);
  const halfMathX = (half[0] - Math.min(...xs)) * 26 / (Math.max(...xs) - Math.min(...xs));
  assert.ok(Math.abs(halfMathX - Math.log(999) / 0.6030) < 0.6,
    `half the carrying capacity should fall near ln(a)/b, got x=${halfMathX.toFixed(2)}`);
});

test('a reflected log curve opens leftward from its asymptote', () => {
  // f(x) = log_2(-(x-1)): asymptote x = 1, defined only for x < 1.
  const mirrored = buildGraph({
    xMin: -8, xMax: 4, yMin: -4, yMax: 4, unit: 26, ariaLabel: 't',
    curves: [{ kind: 'log', b: 2, h: 1, reflect: true }],
  });
  const plain = buildGraph({
    xMin: -8, xMax: 4, yMin: -4, yMax: 4, unit: 26, ariaLabel: 't',
    curves: [{ kind: 'log', b: 2, h: 1 }],
  });
  const [mPts] = polylines(mirrored);
  const [pPts] = polylines(plain);
  assert.ok(mPts.length > 2 && pPts.length > 2);

  // The two branches sit on opposite sides of the same asymptote.
  const mMax = Math.max(...mPts.map((p) => p[0]));
  const pMin = Math.min(...pPts.map((p) => p[0]));
  assert.ok(Math.max(...mPts.map((p) => p[0])) <= pMin + 1,
    'the reflected branch stays left of where the ordinary branch begins');
  assert.ok(Math.min(...pPts.map((p) => p[0])) >= mMax - 1);

  // y pixels grow downward, so a curve falling in value as x rises has both
  // coordinates increasing together — the mirror of the ordinary branch.
  const mDir = (mPts[mPts.length - 1][0] - mPts[0][0]) * (mPts[mPts.length - 1][1] - mPts[0][1]);
  const pDir = (pPts[pPts.length - 1][0] - pPts[0][0]) * (pPts[pPts.length - 1][1] - pPts[0][1]);
  assert.ok(mDir > 0, 'the reflected log descends as x increases');
  assert.ok(pDir < 0, 'the ordinary log still rises as x increases');
});

test('from/to trims a reflected log branch instead of reporting an empty domain', () => {
  // `from`/`to` are stated in math x, but a reflected branch is sampled in y
  // and runs the other way, so the two clamps have to swap. They did not, and
  // trimming a mirrored curve threw "from/to leave no domain to draw".
  const out = buildGraph({
    xMin: -10, xMax: 10, yMin: -3, yMax: 6, unit: 18, ariaLabel: 't',
    curves: [{ kind: 'log', a: 2, reflect: true, from: -10, to: -0.333 }],
  });
  const [pts] = polylines(out);
  assert.ok(pts.length > 2, 'the trimmed branch still draws');
});

// The hyperbola is a conic like the circle, not an a·f(x−h)+k function shape,
// so it is its own top-level family. Every drawn point must satisfy the
// standard-form equation exactly — a spline through plotted points would not.

/** invert the fixed pixel mapping (margin 26) back to math coordinates */
const toMath = ([pxX, pxY], { xMin, yMax, unit }) => [
  (pxX - 26) / unit + xMin,
  yMax - (pxY - 26) / unit,
];

/** the branch's turnaround point: near the vertex the curve is flat to fmt's
    0.1px rounding, so the extreme pixel is a tie shared by a stretch of
    samples — average the tied stretch rather than trusting any single one */
const turnaround = (branch, axis, dir) => {
  const extreme = dir * Math.max(...branch.map((p) => dir * p[axis]));
  const near = branch.filter((p) => Math.abs(p[axis] - extreme) <= 1);
  return [
    near.reduce((s, p) => s + p[0], 0) / near.length,
    near.reduce((s, p) => s + p[1], 0) / near.length,
  ];
};

test('a hyperbola draws two branches lying exactly on its standard-form equation', () => {
  const window = { xMin: -7, xMax: 7, yMin: -7, yMax: 7, unit: 20, ariaLabel: 't' };
  // x²/9 − y²/16 = 1: vertices (±3, 0), branches open left and right
  const out = buildGraph({ ...window, hyperbolas: [{ at: [0, 0], a: 3, b: 4 }] });
  const branches = polylines(out);
  assert.equal(branches.length, 2, 'a hyperbola is two branch runs');

  for (const branch of branches) {
    // endpoints are trimmed under the arrowheads, so test interior points
    for (const p of branch.slice(2, -2)) {
      const [x, y] = toMath(p, window);
      // 0.03 covers fmt's 0.1px serialization rounding; spline error is ~10×
      const residual = Math.abs((x * x) / 9 - (y * y) / 16 - 1);
      assert.ok(residual < 0.03,
        `(${x.toFixed(3)}, ${y.toFixed(3)}) is off the hyperbola by ${residual.toFixed(4)}`);
    }
  }

  // The vertices: each branch turns around exactly at (±3, 0).
  const [right, left] = branches[0][0][0] > branches[1][0][0]
    ? branches : [branches[1], branches[0]];
  const rightVertex = toMath(turnaround(right, 0, -1), window);
  const leftVertex = toMath(turnaround(left, 0, 1), window);
  assert.ok(dist(rightVertex, [3, 0]) < 0.05, `right vertex at (3,0), got ${rightVertex}`);
  assert.ok(dist(leftVertex, [-3, 0]) < 0.05, `left vertex at (-3,0), got ${leftVertex}`);
});

test('vertical: true opens a translated hyperbola up and down from its centre', () => {
  const window = { xMin: -7, xMax: 7, yMin: -7, yMax: 7, unit: 20, ariaLabel: 't' };
  // (y+1)²/4 − (x−1)²/9 = 1: centre (1,−1), vertices (1, 1) and (1, −3)
  const out = buildGraph({
    ...window, hyperbolas: [{ at: [1, -1], a: 2, b: 3, vertical: true }],
  });
  const branches = polylines(out);
  assert.equal(branches.length, 2);

  for (const branch of branches) {
    for (const p of branch.slice(2, -2)) {
      const [x, y] = toMath(p, window);
      const residual = Math.abs(((y + 1) ** 2) / 4 - ((x - 1) ** 2) / 9 - 1);
      assert.ok(residual < 0.03,
        `(${x.toFixed(3)}, ${y.toFixed(3)}) is off the hyperbola by ${residual.toFixed(4)}`);
    }
  }

  // pixels grow downward: the upper branch has the smaller y-pixels
  const [upper, lower] = branches[0][0][1] < branches[1][0][1]
    ? branches : [branches[1], branches[0]];
  const upperVertex = toMath(turnaround(upper, 1, 1), window);
  const lowerVertex = toMath(turnaround(lower, 1, -1), window);
  assert.ok(dist(upperVertex, [1, 1]) < 0.05, `upper vertex at (1,1), got ${upperVertex}`);
  assert.ok(dist(lowerVertex, [1, -3]) < 0.05, `lower vertex at (1,-3), got ${lowerVertex}`);
});

test('hyperbola spec validation rejects bad centres, semi-axes, and from/to', () => {
  assert.throws(() => buildGraph({ ...GRID, hyperbolas: [{ at: [0, 0], a: 0, b: 2 }] }));
  assert.throws(() => buildGraph({ ...GRID, hyperbolas: [{ at: [0, 0], a: 2, b: -1 }] }));
  assert.throws(() => buildGraph({ ...GRID, hyperbolas: [{ at: [Infinity, 0], a: 2, b: 2 }] }));
  assert.throws(() => buildGraph({ ...GRID, hyperbolas: [{ a: 2, b: 2 }] }));
  assert.throws(() => buildGraph({ ...GRID, hyperbolas: [{ at: [0, 0], a: 2, b: 2, from: 1 }] }),
    /from\/to/);
});

test('a grid never collapses into a solid block on a small-unit axis', () => {
  // The grid step is stated in MATH units. A "Cases" axis running 0–1,100 at
  // 0.5 px per unit emitted 1,100 horizontal lines half a pixel apart, which
  // renders as a grey block rather than a grid — it shipped that way in the
  // §4.7 flu figure.
  const out = buildGraph({
    xMin: 0, xMax: 26, yMin: 0, yMax: 1100, unit: 15, yUnit: 0.5,
    tickLabels: true, xTickStep: 2, yTickStep: 100, ariaLabel: 't',
  });
  const faint = out.els.filter((e) => e.tag === 'line' && e.attrs.opacity === '0.2');
  const horizontal = [...new Set(faint
    .filter((e) => e.attrs.y1 === e.attrs.y2)
    .map((e) => Number(e.attrs.y1)))].sort((a, b) => a - b);
  assert.ok(horizontal.length > 2, 'the grid is still drawn');
  for (let i = 1; i < horizontal.length; i += 1) {
    assert.ok(horizontal[i] - horizontal[i - 1] >= 9.5,
      `grid lines ${horizontal[i - 1]} and ${horizontal[i]} are too close to read as a grid`);
  }

  // An ordinary window is untouched: one line per unit, exactly as before.
  const plain = buildGraph({ ...GRID, ariaLabel: 't' });
  const plainH = plain.els.filter((e) => e.tag === 'line' && e.attrs.opacity === '0.2'
    && e.attrs.y1 === e.attrs.y2);
  assert.equal(plainH.length, 10, 'a 20px-per-unit grid still draws every integer line');
});

// Faint gridlines and 6px tick marks of a built graph, as sorted px positions
// per axis: x holds the vertical gridlines / x-axis ticks, y the horizontal.
const gridAndTicks = (out) => {
  const lines = out.els.filter((e) => e.tag === 'line');
  const sorted = (list) => [...new Set(list)].sort((a, b) => a - b);
  const faint = lines.filter((e) => e.attrs.opacity === '0.2');
  const marks = lines.filter((e) => e.attrs.strokeWidth === '1' && !e.attrs.strokeDasharray
    && Math.abs(e.attrs.x2 - e.attrs.x1) + Math.abs(e.attrs.y2 - e.attrs.y1) === 6);
  return {
    grid: {
      x: sorted(faint.filter((e) => e.attrs.x1 === e.attrs.x2).map((e) => e.attrs.x1)),
      y: sorted(faint.filter((e) => e.attrs.y1 === e.attrs.y2).map((e) => e.attrs.y1)),
    },
    ticks: {
      x: sorted(marks.filter((e) => e.attrs.x1 === e.attrs.x2).map((e) => e.attrs.x1)),
      y: sorted(marks.filter((e) => e.attrs.y1 === e.attrs.y2).map((e) => e.attrs.y1)),
    },
  };
};

test('gridlines sit on multiples of the step, not at the window edge', () => {
  // A window edge that is not a multiple of the step (xMin: -3.5 to give a
  // curve room) used to start the lattice AT the edge — lines at −3.5, −2.5,
  // … — so every gridline fell between two ticks and a point plotted at
  // (1, 2) sat inside a cell. 62 Precalculus graphs shipped that way.
  const out = buildGraph({
    xMin: -3.5, xMax: 3.5, yMin: -1.3, yMax: 4, unit: 20,
    tickLabels: true, tickStep: 1, points: [{ at: [1, 2] }], ariaLabel: 't',
  });
  const { grid, ticks } = gridAndTicks(out);
  // x = −3 … 3 and y = −1 … 4, less the two lines the axes replace.
  assert.deepEqual(grid.x, [36, 56, 76, 116, 136, 156]);
  assert.deepEqual(grid.y, [26, 46, 66, 86, 126]);
  assert.deepEqual(grid.x, ticks.x, 'every vertical gridline passes through an x tick');
  assert.deepEqual(grid.y, ticks.y, 'every horizontal gridline passes through a y tick');
  const dot = out.els.find((e) => e.tag === 'circle');
  assert.ok(grid.x.includes(Number(dot.attrs.cx)) && grid.y.includes(Number(dot.attrs.cy)),
    'a lattice point is drawn on a gridline crossing');

  // A step that is not 1 anchors the same way: years 1973–2008 by fives draw
  // 1975, 1980, …, not 1973, 1978, ….
  const years = gridAndTicks(buildGraph({
    xMin: 1973, xMax: 2008, yMin: 0, yMax: 10, xUnit: 8, yUnit: 20, xGridStep: 5,
    tickLabels: true, xTickStep: 5, yTickStep: 2, xTickGrouping: false, ariaLabel: 't',
  }));
  assert.deepEqual(years.grid.x, years.ticks.x);
  assert.equal(years.grid.x.length, 7, '1975 through 2005');
});

test('a coarsened grid still lands on the tick labels', () => {
  // Coarsening took the smallest multiple of the step that cleared 10px and
  // counted it from the window edge: a unit step at 1.5px per unit became 7,
  // drawn at −120, −113, −106, … under ticks at every 20.
  const out = gridAndTicks(buildGraph({
    xMin: -5, xMax: 5, yMin: -120, yMax: 120, unit: 20, yUnit: 1.5,
    tickLabels: true, xTickStep: 1, yTickStep: 20, ariaLabel: 't',
  }));
  // 10 is the smallest step ≥ 7 that divides 20: 25 lines, less the x-axis.
  assert.equal(out.grid.y.length, 24);
  for (const tick of out.ticks.y) assert.ok(out.grid.y.includes(tick), `the tick at y=${tick}px has a gridline`);
  for (let i = 1; i < out.grid.y.length; i += 1) assert.ok(out.grid.y[i] - out.grid.y[i - 1] >= 10);

  // When the tick step itself is too dense to draw, the grid thins to a
  // multiple of it instead, so every gridline still passes through a tick.
  const dense = gridAndTicks(buildGraph({
    xMin: -5, xMax: 5, yMin: -12, yMax: 12, unit: 20, yUnit: 3,
    tickLabels: true, xTickStep: 1, yTickStep: 2, ariaLabel: 't',
  }));
  assert.equal(dense.grid.y.length, 6, 'lines at ±4, ±8, ±12');
  for (const line of dense.grid.y) assert.ok(dense.ticks.y.includes(line), `the gridline at y=${line}px sits on a tick`);

  // An unnumbered axis has no ticks to land on: the smallest clear multiple
  // of the step, counted from zero rather than from yMin.
  const bare = gridAndTicks(buildGraph({ xMin: -5, xMax: 5, yMin: -10, yMax: 10, unit: 20, yUnit: 4, ariaLabel: 't' }));
  const oy = 26 + 10 * 4;
  assert.deepEqual(bare.grid.y, [-9, -6, -3, 3, 6, 9].map((v) => oy - v * 4).sort((a, b) => a - b));
});

test('quadratic-boundary regions shade the test-point side of the parabola', () => {
  // y >= x^2 - 4: test point (0,0) is above the vertex, so the fill runs from
  // the parabola up to the top window edge.
  const out = buildGraph({ ...GRID, regions: [{ quadratic: { a: 1, c: -4 }, side: [0, 0] }] });
  const fills = out.els.filter((e) => e.tag === 'polygon' && e.attrs.opacity === '0.12');
  assert.equal(fills.length, 1);
  const pts = fills[0].attrs.points.split(' ').map((p) => p.split(',').map(Number));
  // closure corners sit on the top edge (math yMax=5 → px y 26 with margin 26)
  const topEdge = pts.filter(([, y]) => Math.abs(y - 26) < 0.5);
  assert.ok(topEdge.length >= 2, 'fill closes along the top window edge when shading above');
  // the boundary parabola itself is stroked
  const curves = out.els.filter((e) => e.tag === 'path' || e.tag === 'polyline');
  assert.ok(curves.length >= 1, 'the boundary parabola is drawn');
  // vertex of the sampled boundary reaches y = -4 (px y = 26 + 9*20 = 206)
  const vertexY = Math.max(...pts.map(([, y]) => y));
  assert.ok(Math.abs(vertexY - 206) < 1.5, `boundary reaches the vertex (got px y ${vertexY})`);
});

test('quadratic-boundary regions shade below when the test point is below', () => {
  // y <= x^2 - 4 shades down to the bottom edge, and dashed marks the strict boundary
  const out = buildGraph({ ...GRID, regions: [{ quadratic: { a: 1, c: -4 }, side: [0, -4.9], dashed: true }] });
  const fill = out.els.find((e) => e.tag === 'polygon' && e.attrs.opacity === '0.12');
  const pts = fill.attrs.points.split(' ').map((p) => p.split(',').map(Number));
  const bottomEdge = pts.filter(([, y]) => Math.abs(y - 226) < 0.5); // yMin=-5 → 26+10*20
  assert.ok(bottomEdge.length >= 2, 'fill closes along the bottom window edge when shading below');
  const dashedEls = out.els.filter((e) => e.attrs && e.attrs.strokeDasharray);
  assert.ok(dashedEls.length >= 1, 'strict boundary is drawn dashed');
});

test('sideways quadratic regions close against a vertical window edge', () => {
  // x <= y^2 (sideways, test point left of the curve) closes along x = xMin
  const out = buildGraph({ ...GRID, regions: [{ quadratic: { a: 1, sideways: true }, side: [-3, 0] }] });
  const fill = out.els.find((e) => e.tag === 'polygon' && e.attrs.opacity === '0.12');
  const pts = fill.attrs.points.split(' ').map((p) => p.split(',').map(Number));
  const leftEdge = pts.filter(([x]) => Math.abs(x - 26) < 0.5); // xMin=-5 → px 26
  assert.ok(leftEdge.length >= 2, 'fill closes along the left window edge');
});

test('quadratic-boundary region spec validation', () => {
  assert.throws(() => buildGraph({ ...GRID, regions: [{ quadratic: { a: 0 }, side: [0, 0] }] }),
    /nonzero/);
  assert.throws(() => buildGraph({ ...GRID, regions: [{ quadratic: { a: 1 }, side: [0, 0] }] }),
    /off the boundary/);
  assert.throws(() => buildGraph({ ...GRID, regions: [{ quadratic: { a: 1 }, side: [1, 3], label: 'R' }] }),
    /texts entry/);
  assert.throws(() => buildGraph({ ...GRID, regions: [{ quadratic: { a: 1 }, line: { y: 0 }, side: [1, 3] }] }),
    /not both/);
  assert.throws(() => buildGraph({ ...GRID, regions: [{ quadratic: { a: 1 } }] }),
    /side test point/);
});

test('figure polygons can carry a translucent fill under every stroke', () => {
  const out = buildFigure({
    ariaLabel: 't',
    polygons: [
      { points: [[0, 0], [4, 0], [5, 2], [1, 2]], fill: true },
      { points: [[1, -1], [5, -1], [4, 3], [0, 3]], fill: true },
    ],
  });
  const fills = out.els.filter((e) => e.tag === 'polygon' && e.attrs.opacity === '0.12');
  assert.equal(fills.length, 2, 'each filled polygon paints one translucent body');
  // fills come before any polygon edge stroke, so strokes stay on top
  const firstStroke = out.els.findIndex((e) => e.tag === 'line');
  const lastFill = out.els.map((e, i) => (e.tag === 'polygon' && e.attrs.opacity === '0.12' ? i : -1))
    .reduce((a, b) => Math.max(a, b), -1);
  assert.ok(lastFill < firstStroke, 'fills are painted under the edge strokes');
  // an unfilled polygon adds no body
  const plain = buildFigure({ ariaLabel: 't', polygons: [{ points: [[0, 0], [2, 0], [1, 2]] }] });
  assert.equal(plain.els.filter((e) => e.tag === 'polygon' && e.attrs.opacity === '0.12').length, 0);
});

test('a gapTexts segment passes behind text entries instead of striking through them', () => {
  const out = buildFigure({
    ariaLabel: 't',
    texts: [{ at: [2, 1], text: 'b2', anchor: 'middle' }],
    segments: [{ from: [0, 0], to: [4, 2], gapTexts: true }],
  });
  const lines = out.els.filter((e) => e.tag === 'line');
  assert.ok(lines.length >= 2, `the shaft splits around the text (got ${lines.length} line(s))`);
  // no drawn run may enter the text's box
  const text = out.els.find((e) => e.tag === 'text');
  const tx = Number(text.attrs.x), ty = Number(text.attrs.y);
  for (const l of lines) {
    const mids = [0.25, 0.5, 0.75].map((t) => [
      Number(l.attrs.x1) + t * (Number(l.attrs.x2) - Number(l.attrs.x1)),
      Number(l.attrs.y1) + t * (Number(l.attrs.y2) - Number(l.attrs.y1)),
    ]);
    for (const [mx, my] of mids) {
      const inside = Math.abs(mx - tx) < 8 && my < ty + 2 && my > ty - 12;
      assert.ok(!inside, `a drawn run passes through the text at (${mx.toFixed(1)}, ${my.toFixed(1)})`);
    }
  }
  // without gapTexts the same segment is one unbroken line
  const solid = buildFigure({
    ariaLabel: 't',
    texts: [{ at: [2, 1], text: 'b2', anchor: 'middle' }],
    segments: [{ from: [0, 0], to: [4, 2] }],
  });
  assert.equal(solid.els.filter((e) => e.tag === 'line').length, 1);
});

test('an arrowless line stops at the grid edge — a first-quadrant boundary never crosses an axis', () => {
  // A region boundary drawn with arrows:false once overshot the grid by the
  // 6 px meant for arrowed lines, so on a first-quadrant application graph
  // (Intermediate Algebra 3.4) it poked past both axes toward the tick labels.
  const Q1 = { xMin: 0, xMax: 30, yMin: 0, yMax: 30, unit: 10 };
  const shaft = (out) => out.els.filter((e) => e.tag === 'line' && e.attrs.strokeWidth === '1.8')
    .map((e) => e.attrs);
  const axes = buildGraph(Q1).els.filter((e) => e.tag === 'line' && e.attrs.strokeWidth === '1').map((e) => e.attrs);
  const axisX = Math.min(...axes.map((a) => Math.min(a.x1, a.x2)));
  const axisY = Math.max(...axes.map((a) => Math.max(a.y1, a.y2)));
  for (const spec of [
    { ...Q1, lines: [{ through: [[0, 16], [24, 0]], arrows: false }] },
    { ...Q1, regions: [{ line: { through: [[0, 16], [24, 0]], arrows: false }, side: [30, 30] }] },
  ]) {
    const [l] = shaft(buildGraph(spec));
    assert.ok(l, 'the boundary line is drawn');
    for (const [x, y] of [[l.x1, l.y1], [l.x2, l.y2]]) {
      assert.ok(x >= axisX - 0.01, `line end x=${x} crosses the y-axis at ${axisX}`);
      assert.ok(y <= axisY + 0.01, `line end y=${y} crosses the x-axis at ${axisY}`);
    }
  }
});

test('a log curve with a base below 1 trims to its from/to window', () => {
  // f(x) = log_{1/3} x decreases, so from/to in x bound y the other way round.
  const trimmed = buildGraph({
    xMin: -1, xMax: 10, yMin: -4, yMax: 4, unit: 20, ariaLabel: 't',
    curves: [{ kind: 'log', b: 1 / 3, from: 1 / 3, to: 9, arrows: false }],
  });
  const [pts] = polylines(trimmed);
  assert.ok(pts.length > 2, 'the trimmed base-1/3 curve draws');
  const span = Math.max(...pts.map((p) => p[0])) - Math.min(...pts.map((p) => p[0]));
  assert.ok(Math.abs(span - (9 - 1 / 3) * 20) < 2, `it spans x = 1/3 to 9, got ${span}px`);
});

test('a figure circle with from/to draws an exact arc that fits its own sweep', () => {
  // Precalculus 5.4's angle of depression mark (October 4, 2026): an arc at a
  // vertex, not eight chords, and the frame must not grow to the full circle.
  const out = buildFigure({
    ariaLabel: 't', unit: 20, padding: 0,
    segments: [{ from: [0, 0], to: [4, 0] }],
    circles: [{ at: [4, 0], r: 1, from: 146.31, to: 180 }],
  });
  const arcs = out.els.filter((e) => e.tag === 'path' && / A /.test(e.attrs.d));
  assert.equal(arcs.length, 1, 'one SVG arc');
  assert.equal(out.els.filter((e) => e.tag === 'circle').length, 0, 'no full circle');
  assert.match(arcs[0].attrs.d, / A 20 20 0 0 0 /, 'a short counter-clockwise sweep at the radius');
  const full = buildFigure({ ariaLabel: 't', unit: 20, padding: 0, circles: [{ at: [4, 0], r: 1 }] });
  assert.ok(out.height < full.height, 'the arc reserves less height than the whole circle');
  assert.throws(() => buildFigure({ ariaLabel: 't', circles: [{ at: [0, 0], r: 1, from: 10, to: 10 }] }));
});

// ---------------------------------------------------------------------------
// Faint strokes (October 6, 2026): a polar grid's rings and spokes are
// background construction, not graphed objects, so they draw in the gridline
// style and stay out of the placement and readability machinery.

test('faint circles, arcs, and lines draw in the gridline style', () => {
  const out = buildGraph({
    ...GRID, grid: false, ariaLabel: 't',
    circles: [{ at: [0, 0], r: 2, faint: true }, { at: [0, 0], r: 3, from: 0, to: 90, faint: true }],
    lines: [{ slope: 1, intercept: 0, faint: true }],
  });
  const ring = out.els.find((e) => e.tag === 'ellipse');
  const arc = out.els.find((e) => e.tag === 'path');
  const spoke = out.els.find((e) => e.tag === 'line' && e.attrs.opacity === '0.2');
  for (const el of [ring, arc, spoke]) {
    assert.equal(el.attrs.strokeWidth, '0.4', `${el.tag} is a hairline`);
    assert.equal(el.attrs.opacity, '0.2', `${el.tag} is faint`);
    assert.equal(el.attrs.strokeDasharray, undefined, `${el.tag} is never dashed`);
  }
  // a spoke runs flush with the grid like a gridline: no overshoot, no heads
  assert.deepEqual([spoke.attrs.x1, spoke.attrs.y1, spoke.attrs.x2, spoke.attrs.y2], [26, 226, 226, 26]);
  assert.equal(polygons(out).length, 4, 'only the four axis arrowheads');
});

test('faint strokes refuse dashes, arrowheads, and labels', () => {
  assert.throws(() => buildGraph({ ...GRID, circles: [{ at: [0, 0], r: 2, faint: true, dashed: true }] }), /faint strokes are never dashed/);
  assert.throws(() => buildGraph({ ...GRID, lines: [{ x: 1, faint: true, dashed: true }] }), /faint strokes are never dashed/);
  assert.throws(() => buildGraph({ ...GRID, lines: [{ x: 1, faint: true, arrows: true }] }), /arrowheads/);
  assert.throws(() => buildGraph({ ...GRID, lines: [{ x: 1, faint: true, label: 'x = 1' }] }), /label/);
  assert.doesNotThrow(() => buildGraph({ ...GRID, lines: [{ x: 1, faint: true, arrows: false }] }));
});

test('faint strokes are no placement obstacle — a label sits on one as on a gridline', () => {
  // A ring of radius 2.8 runs straight through the east station of P's label.
  const base = { ...GRID, ariaLabel: 't', points: [{ at: [2, 0.6], label: 'P' }] };
  const labelOf = (spec) => buildGraph(spec).els.find((e) => e.tag === 'text' && e.text === 'P').attrs;
  const bare = labelOf(base);
  const faint = labelOf({ ...base, circles: [{ at: [0, 0], r: 2.8, faint: true }] });
  const solid = labelOf({ ...base, circles: [{ at: [0, 0], r: 2.8 }] });
  assert.deepEqual(faint, bare, 'the faint ring does not move the label');
  assert.notDeepEqual(solid, bare, 'the same ring at full weight does (the probe is live)');
});

// ---------------------------------------------------------------------------
// Tick-digit knockout (October 6, 2026): every stroke passes BEHIND the tick
// digits through a mask holding a glyph-shaped halo around each digit
// (figure-svg.mjs), instead of printing through them or being cut by a
// box-shaped gap that would read as dashing.

/** tick digits: the smallest font on the board (the overlap checker's own rule) */
function digitEls(out) {
  const texts = out.els.filter((e) => e.tag === 'text');
  const size = Math.min(...texts.map((e) => Number(e.attrs.fontSize)));
  return texts.filter((e) => Number(e.attrs.fontSize) === size);
}
const STROKE_TAG = /^(line|polyline|polygon|ellipse|path)$/;
const RECIPROCAL = { ariaLabel: 't', xMin: -4, xMax: 4, yMin: -4, yMax: 4, unit: 30, tickLabels: true, curves: [{ kind: 'reciprocal' }] };

test('knockout names exactly the tick-digit elements, and they come last in els', () => {
  const out = buildGraph({ ...RECIPROCAL, points: [{ at: [1, 1], label: 'P' }], texts: [{ at: [2, 3], text: 'note' }] });
  const digits = digitEls(out);
  assert.equal(digits.length, 16, '−4…4 on both axes, the origin zero dropped');
  assert.equal(out.knockout.texts.length, digits.length);
  digits.forEach((d, i) => assert.equal(out.knockout.texts[i], d, 'the SAME objects as in els'));
  assert.deepEqual(out.els.slice(-digits.length), digits, 'the digits are the last elements, after the texts note');
  assert.ok(out.els.indexOf(out.els.find((e) => e.text === 'note')) < out.els.indexOf(digits[0]));
});

test('tickKnockout: false (or no tick labels) leaves knockout null and the digits where they were', () => {
  const on = buildGraph(RECIPROCAL);
  const off = buildGraph({ ...RECIPROCAL, tickKnockout: false });
  assert.equal(off.knockout, null);
  const firstDigit = off.els.indexOf(digitEls(off)[0]);
  const firstCurve = off.els.findIndex((e) => e.tag === 'polyline');
  assert.ok(firstDigit < firstCurve, 'the digits keep their old place, right after their tick marks');
  const key = (e) => JSON.stringify(e);
  assert.deepEqual(off.els.map(key).sort(), on.els.map(key).sort(), 'the same elements, only reordered');
  assert.equal(buildGraph({ ...GRID, ariaLabel: 't' }).knockout, null, 'no tick labels, nothing to knock out');
  assert.throws(() => buildGraph({ ...RECIPROCAL, tickKnockout: 'yes' }), /tickKnockout/);
});

test('graph-plot inherits the knockout through its render defaults', () => {
  const out = buildGraph({ ...GRAPH_PLOT_RENDER_DEFAULTS, ...GRID, ariaLabel: 't' });
  assert.ok(out.knockout && out.knockout.texts.length > 0);
});

test('toSvgString masks every stroke behind a glyph halo of every digit', () => {
  const out = buildGraph(RECIPROCAL);
  const svg = toSvgString(RECIPROCAL);
  assert.equal(svg.match(/<mask /g).length, 1, 'one mask');
  const mask = svg.slice(svg.indexOf('<mask '), svg.indexOf('</mask>'));
  assert.match(mask, /^<mask id="ap-knockout" maskUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000">/);
  assert.match(mask, /<rect x="-10000" y="-10000" width="20000" height="20000" fill="#fff"\/>/);
  const halos = [...mask.matchAll(/<text ([^>]*)>([^<]*)<\/text>/g)];
  assert.equal(halos.length, digitEls(out).length, 'one halo per digit');
  for (const [, attrs] of halos) {
    assert.match(attrs, /fill="#000" stroke="#000" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/);
  }
  const group = svg.slice(svg.indexOf('<g mask="url(#ap-knockout)">'), svg.indexOf('</g>'));
  const strokes = out.els.filter((e) => STROKE_TAG.test(e.tag)).length;
  assert.equal((group.match(/<(line|polyline|polygon|ellipse|path) /g) || []).length, strokes, 'every stroke is masked');
  const outside = svg.slice(svg.indexOf('</g>'));
  assert.doesNotMatch(outside, /<(line|polyline|polygon|ellipse|path) /, 'no stroke paints over a digit unmasked');
  assert.equal(toSvgString(RECIPROCAL, { knockoutId: 'k7' }).match(/id="k7"|url\(#k7\)/g).length, 2, 'the mask id is the caller\'s');
});

test('plotted dots stay outside the mask, and the digits paint last', () => {
  const g = buildGraph({ ...RECIPROCAL, points: [{ at: [-2, -0.5] }] });
  const nodes = figureNodes(g, 'k');
  assert.deepEqual(nodes.map((n) => n.tag).slice(0, 2), ['mask', 'g']);
  assert.ok(!nodes[1].children.some((n) => n.tag === 'circle'), 'a dot is never nicked by a halo');
  assert.ok(nodes.some((n) => n.tag === 'circle'));
  assert.deepEqual(nodes.slice(-g.knockout.texts.length), g.knockout.texts);
  assert.equal(svgAttrName('maskUnits'), 'maskUnits');
  assert.equal(svgAttrName('strokeLinejoin'), 'stroke-linejoin');
});

// Captured from the engine BEFORE the knockout existed: a figure with no tick
// digits must serialize byte for byte as it always did.
const NO_DIGIT_SPEC = {
  ariaLabel: 'no digits', xMin: -3, xMax: 3, yMin: -3, yMax: 3, unit: 20,
  lines: [{ slope: 1, intercept: 1, label: 'y = x + 1' }, { x: 2, dashed: true, arrows: false }],
  polylines: [{ through: [[-3, 1], [-2, -1], [0, -2]], arrows: 'end' }],
  circles: [{ at: [0, 0], r: 1 }, { at: [0, 0], r: 2, from: 0, to: 90 }],
  segments: [{ from: [-2, -2], to: [-1, -2], dashed: true }],
  points: [{ at: [1, 2], label: 'P' }, { at: [-1, 0], open: true }],
  texts: [{ at: [-2.5, 2.5], text: 'note' }],
};
const NO_DIGIT_SVG_BEFORE = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" width="172" height="172" style="color:#111" font-family="Helvetica, Arial, sans-serif">',
  '  <line x1="26" y1="146" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="46" y1="146" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="66" y1="146" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="106" y1="146" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="126" y1="146" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="146" y1="146" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="26" y1="146" x2="146" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="26" y1="126" x2="146" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="26" y1="106" x2="146" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="26" y1="66" x2="146" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="26" y1="46" x2="146" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="26" y1="26" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>',
  '  <line x1="24" y1="86" x2="148" y2="86" stroke="currentColor" stroke-width="1"/>',
  '  <line x1="86" y1="24" x2="86" y2="148" stroke="currentColor" stroke-width="1"/>',
  '  <polygon points="158,86 148,91 148,81" fill="currentColor"/>',
  '  <polygon points="86,14 91,24 81,24" fill="currentColor"/>',
  '  <polygon points="14,86 24,81 24,91" fill="currentColor"/>',
  '  <polygon points="86,158 81,148 91,148" fill="currentColor"/>',
  '  <text x="156" y="78" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>',
  '  <text x="94" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>',
  '  <line x1="27.1" y1="124.9" x2="124.9" y2="27.1" stroke="currentColor" stroke-width="1.8"/>',
  '  <polygon points="132,20 128.5,30.6 121.4,23.5" fill="currentColor"/>',
  '  <polygon points="20,132 23.5,121.4 30.6,128.5" fill="currentColor"/>',
  '  <line x1="126" y1="146" x2="126" y2="26" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>',
  '  <polyline points="26,66 46,106 78.8,122.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>',
  '  <polygon points="86,126 74.8,126 79.3,117.1" fill="currentColor"/>',
  '  <ellipse cx="86" cy="86" rx="20" ry="20" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  '  <path d="M 126 86 A 40 40 0 0 0 86 46" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  '  <line x1="46" y1="126" x2="66" y2="126" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>',
  '  <circle cx="106" cy="46" r="4" fill="currentColor"/>',
  '  <circle cx="66" cy="86" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  '  <text x="106" y="69" font-size="13" fill="currentColor" text-anchor="middle">P</text>',
  '  <text x="56.2" y="60.2" font-size="13" fill="currentColor" text-anchor="end">y = x + 1</text>',
  '  <text x="36" y="36" font-size="13" fill="currentColor">note</text>',
  '</svg>',
].join('\n');

test('a figure with no tick digits serializes byte-identically to the pre-knockout engine', () => {
  assert.equal(toSvgString(NO_DIGIT_SPEC), NO_DIGIT_SVG_BEFORE);
});

// ---------------------------------------------------------------------------
// Tick-digit relocation (October 6, 2026): a digit a solid stroke crosses
// moves to the clear side of its axis when that spot is free; the knockout
// handles the rest.

/** where each tick digit ended up: 'left'/'right' of the y-axis, 'below'/'above' the x-axis */
function digitSides(out) {
  const [axisX, axisY] = out.map.toPx([0, 0]);
  const sides = { x: {}, y: {} };
  for (const d of digitEls(out)) {
    if (d.attrs.textAnchor === 'middle') sides.x[d.text] = +d.attrs.y < axisY ? 'above' : 'below';
    else {
      sides.y[d.text] = d.attrs.textAnchor === 'start' ? 'right' : 'left';
      if (d.attrs.textAnchor === 'start') assert.equal(+d.attrs.x, axisX + 6, 'a moved y digit sits 6px right of the axis');
    }
  }
  return sides;
}

test('a tick digit a solid stroke crosses moves to the clear side of its axis', () => {
  // y = 1/x hugs both axes in the third quadrant. Its branch crosses the y
  // digits −2 and −3 and its arrowhead the −4; the right of the y-axis is
  // empty there, so all three move. −1 is never crossed (the branch passes
  // it 20px out) and stays. On the x row the branch crosses −2 and −3, which
  // go above the axis; −4 is crossed by the branch's arrowhead but the axis
  // arrowhead's wing takes the spot above it, so it stays (knocked out), and
  // −1 is never crossed.
  const out = buildGraph(RECIPROCAL);
  const sides = digitSides(out);
  assert.deepEqual(sides.y, { '−4': 'right', '−3': 'right', '−2': 'right', '−1': 'left', 1: 'left', 2: 'left', 3: 'left', 4: 'left' });
  assert.deepEqual(sides.x, { '−4': 'below', '−3': 'above', '−2': 'above', '−1': 'below', 1: 'below', 2: 'below', 3: 'below', 4: 'below' });
  // an x digit above the axis keeps its box bottom clear of the tick mark
  const [, axisY] = out.map.toPx([0, 0]);
  const moved = digitEls(out).find((d) => d.text === '−2' && d.attrs.textAnchor === 'middle');
  assert.ok(inkBox(moved)[3] <= axisY - 4 + 1e-9, 'box bottom at least 4px above the axis');
});

test('a digit crossed on both sides of its axis stays put', () => {
  // cos x peaks on the y-axis: the curve crosses the digit 1 left AND right.
  const out = buildGraph({
    ariaLabel: 't', xMin: -7.3, xMax: 7.3, yMin: -1.95, yMax: 1.5, grid: false, tickLabels: 'y', unit: 34,
    curves: [{ kind: 'cosine', from: -6.9, to: 6.9 }],
  });
  assert.deepEqual(digitSides(out).y, { '−1': 'left', 1: 'left' });
  const one = digitEls(out).find((d) => d.text === '1');
  const [pl] = polylines(out);
  assert.ok(pl.some((p, i) => i > 0 && segCrossesBox(pl[i - 1], p, inkBox(one))), 'the curve does cross the 1 it leaves in place');
});

test('relocation is independent of the knockout', () => {
  const on = buildGraph(RECIPROCAL);
  const off = buildGraph({ ...RECIPROCAL, tickKnockout: false });
  assert.deepEqual(digitSides(off), digitSides(on));
});

test('a relocated digit moves its box in place, so deferred dashed strokes gap at the new spot', () => {
  // The dashed asymptote x = −2 is emitted after relocation: it must gap
  // around the −2 digit where it NOW stands (above the axis), and run
  // unbroken through the spot it left.
  const out = buildGraph({ ...RECIPROCAL, lines: [{ x: -2, dashed: true, arrows: false }] });
  const digit = digitEls(out).find((d) => d.text === '−2' && d.attrs.textAnchor === 'middle');
  const [, axisY] = out.map.toPx([0, 0]);
  assert.ok(+digit.attrs.y < axisY, 'the x digit −2 moved above the axis');
  const dashed = out.els.filter((e) => e.tag === 'line' && e.attrs.strokeDasharray === '6 5');
  assert.equal(dashed.length, 2, 'the asymptote splits once, around the moved digit');
  for (const l of dashed) {
    assert.ok(!segCrossesBox([+l.attrs.x1, +l.attrs.y1], [+l.attrs.x2, +l.attrs.y2], inkBox(digit)),
      'the dashed asymptote prints through the relocated digit');
  }
});

test('relocation runs after label placement and never lands on a placed label', () => {
  // A point label pinned west of (1, −2) occupies exactly the room right of
  // the y-axis that the crossed digit −2 would move into: the label keeps
  // its spot and the digit stays left (knocked out). The label is placed
  // where it would be with no relocation at all.
  const spec = { ...RECIPROCAL, points: [{ at: [1, -2], label: 'Q', labelSide: 'w' }] };
  const out = buildGraph(spec);
  assert.equal(digitSides(out).y['−2'], 'left', 'the digit yields to the label');
  assert.equal(digitSides(out).y['−3'], 'right', 'its neighbour still moves');
  const label = out.els.find((e) => e.text === 'Q');
  for (const d of digitEls(out)) {
    assert.ok(!boxesTouch(inkBox(label), inkBox(d)), `label Q prints over digit ${d.text}`);
  }
});

// ---------------------------------------------------------------------------
// Tick-row offsets (October 6, 2026): the author moves a whole digit row or
// column off its axis — 7.4's sound wave dips below the axis across every
// x digit, so its digits must sit below the trough.

const WAVE = {
  ariaLabel: 't', xMin: 0, xMax: 0.0105, yMin: -1.75, yMax: 1.4, xUnit: 36000, yUnit: 55,
  xTickStep: 0.002, yTickStep: 1, tickLabels: true, xTickGrouping: false,
  curves: [{ kind: 'sine', a: -1, b: 2764.6, arrows: 'end' }],
};

test('xTickOffset moves the x digit row down and yTickOffset the y column left; tick marks stay', () => {
  const base = buildGraph(WAVE);
  const out = buildGraph({ ...WAVE, xTickOffset: 56, yTickOffset: 9 });
  const [axisX, axisY] = out.map.toPx([0, 0]);
  const tickFS = Number(digitEls(out)[0].attrs.fontSize);
  const xs = digitEls(out).filter((d) => d.attrs.textAnchor === 'middle');
  const ys = digitEls(out).filter((d) => d.attrs.textAnchor !== 'middle');
  assert.ok(xs.length >= 5 && ys.length >= 2);
  for (const d of xs) assert.equal(+d.attrs.y, +(axisY + 4 + tickFS + 56).toFixed(1), `x digit ${d.text} rides 56px lower`);
  for (const d of ys) {
    assert.equal(d.attrs.textAnchor, 'end', `the offset y column is never relocated (${d.text})`);
    assert.equal(+d.attrs.x, +(axisX - 6 - 9).toFixed(1), `y digit ${d.text} sits 9px further left`);
  }
  // every digit now clears the trough at y = −1 (55px below the axis)
  const trough = out.map.toPx([0, -1])[1];
  for (const d of xs) assert.ok(inkBox(d)[1] > trough + 1, `x digit ${d.text} sits below the trough`);
  // the tick marks themselves never move
  const ticks = (g) => g.els.filter((e) => e.tag === 'line' && e.attrs.strokeWidth === '1'
    && Math.hypot(e.attrs.x2 - e.attrs.x1, e.attrs.y2 - e.attrs.y1) === 6).map((e) => JSON.stringify(e.attrs));
  assert.deepEqual(ticks(out), ticks(base));
  // and the fit pass grows the viewBox around the moved row
  assert.ok(Math.max(...xs.map((d) => inkBox(d)[3])) <= out.box.y + out.box.h);
});

test('an offset axis is never relocated, even where a solid stroke crosses its digits', () => {
  // RECIPROCAL moves −2 and −3 off both axes; an offset of 1px on one axis
  // keeps that axis exactly where the author put it.
  const out = buildGraph({ ...RECIPROCAL, xTickOffset: 1 });
  const sides = digitSides(out);
  assert.ok(Object.values(sides.x).every((s) => s === 'below'), JSON.stringify(sides.x));
  assert.equal(sides.y['−2'], 'right', 'the other axis still relocates');
  const yOffset = digitSides(buildGraph({ ...RECIPROCAL, yTickOffset: 1 }));
  assert.ok(Object.values(yOffset.y).every((s) => s === 'left'), JSON.stringify(yOffset.y));
  assert.equal(yOffset.x['−2'], 'above');
});

test('tick offsets must be finite px of 0 or more', () => {
  assert.throws(() => buildGraph({ ...GRID, tickLabels: true, xTickOffset: -1 }), /xTickOffset/);
  assert.throws(() => buildGraph({ ...GRID, tickLabels: true, yTickOffset: Infinity }), /yTickOffset/);
  assert.throws(() => buildGraph({ ...GRID, tickLabels: true, yTickOffset: '4' }), /yTickOffset/);
  assert.doesNotThrow(() => buildGraph({ ...GRID, tickLabels: true, xTickOffset: 0, yTickOffset: 12.5 }));
});

test('faint segments draw in the gridline style between their endpoints, refuse dashes, arrowheads and labels, and are no obstacle', () => {
  const spoke = { from: [0, 0], to: [3, 3], faint: true };
  const out = buildGraph({ ariaLabel: 't', segments: [spoke] });
  // gridlines are axis-aligned; the one diagonal hairline is the spoke
  const seg = out.els.find((e) => e.tag === 'line' && e.attrs.opacity === '0.2' && e.attrs.x1 !== e.attrs.x2 && e.attrs.y1 !== e.attrs.y2);
  assert.ok(seg, 'a faint segment is a hairline');
  assert.equal(seg.attrs.strokeWidth, '0.4');
  assert.equal(out.els.filter((e) => e.tag === 'polygon' && e.attrs.fill === 'currentColor').length, 4, 'no arrowheads beyond the four axis tips');
  for (const bad of [{ dashed: true }, { arrows: 'end' }, { label: 'r' }]) {
    assert.throws(() => buildGraph({ ariaLabel: 't', segments: [{ ...spoke, ...bad }] }), /faint/);
  }
  // no obstacle: a point label whose natural (east) box a segment runs through
  // sits exactly where it sits with no segment at all when the segment is faint
  const flat = { from: [0, 1], to: [3, 1] };
  const label = (g) => g.els.find((e) => e.tag === 'text' && e.text === 'P').attrs;
  const bare = buildGraph({ ariaLabel: 't', points: [{ at: [1, 1], label: 'P' }] });
  const withFaint = buildGraph({ ariaLabel: 't', points: [{ at: [1, 1], label: 'P' }], segments: [{ ...flat, faint: true }] });
  const withSolid = buildGraph({ ariaLabel: 't', points: [{ at: [1, 1], label: 'P' }], segments: [flat] });
  assert.deepEqual(label(withFaint), label(bare));
  assert.notDeepEqual(label(withSolid), label(bare), 'the same segment at full weight is an obstacle');
});

// ---------------------------------------------------------------------------
// Tick formats (October 6, 2026): a trig axis counts in π and a small-step
// axis in fractions. Precalculus 6.1 and 7.6 faked those digits with hand
// `texts` rows — 13px labels at author-chosen offsets, outside the knockout,
// never relocated — because the engine printed decimals only.

/** the x tick digits (centred under their ticks), in axis order */
const xDigitTexts = (out) => digitEls(out).filter((d) => d.attrs.textAnchor === 'middle').map((d) => d.text);
const yDigitTexts = (out) => digitEls(out).filter((d) => d.attrs.textAnchor !== 'middle').map((d) => d.text);
const PI_AXIS = { ariaLabel: 't', yMin: -1.9, yMax: 1.8, grid: false, tickLabels: true, xTickFormat: 'pi' };

test("xTickFormat 'pi' ticks in units of π and prints reduced fractions of π on the true positions", () => {
  const out = buildGraph({ ...PI_AXIS, xMin: -0.4, xMax: 6.8, xTickStep: 0.25, unit: 45 });
  const xs = digitEls(out).filter((d) => d.attrs.textAnchor === 'middle');
  assert.deepEqual(xs.map((d) => d.text), ['π/4', 'π/2', '3π/4', 'π', '5π/4', '3π/2', '7π/4', '2π']);
  xs.forEach((d, i) => {
    assert.equal(+d.attrs.x, +out.map.toPx([(i + 1) * Math.PI / 4, 0])[0].toFixed(1), `${d.text} sits on its tick`);
    assert.equal(d.attrs.fontSize, String(Math.min(...digitEls(out).map((e) => +e.attrs.fontSize))), 'a π digit is tick-size');
  });
  // the y axis keeps its decimal digits
  assert.deepEqual(yDigitTexts(out), ['−1', '1']);
});

test("a 'pi' axis signs its negatives and drops the origin's zero exactly as a decimal axis does", () => {
  const halves = xDigitTexts(buildGraph({ ...PI_AXIS, xMin: -7.3, xMax: 7.3, xTickStep: 0.5, unit: 30 }));
  for (const t of ['−2π', '−3π/2', '−π', '−π/2', 'π/2', 'π', '3π/2', '2π']) assert.ok(halves.includes(t), t);
  assert.ok(!halves.includes('0'), 'the axes cross at the origin');
  assert.deepEqual(xDigitTexts(buildGraph({ ...PI_AXIS, xMin: -14.6, xMax: 14.6, xTickStep: 2, unit: 10 })),
    ['−4π', '−2π', '2π', '4π']);
  // axes that do not cross at the origin keep the zero tick, printed 0
  assert.deepEqual(xDigitTexts(buildGraph({ ...PI_AXIS, yMin: 1, yMax: 3, xMin: -1, xMax: 7, xTickStep: 0.5, unit: 30 })),
    ['0', 'π/2', 'π', '3π/2', '2π']);
});

test("xTickFormat 'fraction' keeps plain-unit positions and prints reduced fractions", () => {
  const spec = { ariaLabel: 't', xMin: 0, xMax: 0.1, yMin: -1, yMax: 1, xUnit: 2000, yUnit: 40, grid: false, tickLabels: 'x', xTickStep: 0.025 };
  const out = buildGraph({ ...spec, xTickFormat: 'fraction' });
  assert.deepEqual(xDigitTexts(out), ['1/40', '1/20', '3/40', '1/10']);
  const decimal = buildGraph(spec);
  assert.deepEqual(digitEls(out).map((d) => d.attrs.x), digitEls(decimal).map((d) => d.attrs.x), 'same positions as the decimal axis');
  // integers stay plain and negatives take the math minus; grouping never applies
  assert.deepEqual(xDigitTexts(buildGraph({ ...spec, xMin: -2, xMax: 2, xUnit: 40, xTickStep: 0.5, xTickFormat: 'fraction' })),
    ['−2', '−3/2', '−1', '−1/2', '1/2', '1', '3/2', '2']);
});

test("yTickFormat 'pi' labels the y axis the same way, and a shared tickStep is scaled only on the π axis", () => {
  const out = buildGraph({ ariaLabel: 't', xMin: -2, xMax: 2, yMin: -7.3, yMax: 7.3, unit: 30, grid: false, tickLabels: true, tickStep: 0.5, yTickFormat: 'pi' });
  assert.deepEqual(yDigitTexts(out), ['−2π', '−3π/2', '−π', '−π/2', 'π/2', 'π', '3π/2', '2π']);
  const ys = digitEls(out).filter((d) => d.attrs.textAnchor !== 'middle');
  assert.equal(+ys[0].attrs.y, +(out.map.toPx([0, -2 * Math.PI])[1] + 4).toFixed(1), '−2π sits on its tick');
  assert.deepEqual(xDigitTexts(out), ['−2', '−1.5', '−1', '−0.5', '0.5', '1', '1.5', '2'], 'the x axis keeps plain half-unit steps');
});

test("a 'pi' axis scales its grid step too, and the grid's thinning still lands on the π ticks", () => {
  const out = buildGraph({ ariaLabel: 't', xMin: -7, xMax: 7, yMin: -2, yMax: 2, unit: 30, grid: true, xGridStep: 0.5, xTickFormat: 'pi' });
  const { grid } = gridAndTicks(out);
  const expected = [-4, -3, -2, -1, 1, 2, 3, 4].map((k) => +out.map.toPx([k * Math.PI / 2, 0])[0].toFixed(1));
  assert.deepEqual(grid.x, expected, 'vertical gridlines at k·π/2, less the y-axis');
  // π/4 at 10px per unit is 7.9px — too dense — so the grid thins to the
  // smallest multiple that clears 10px AND divides the π tick step: π/2.
  const thinOut = buildGraph({
    ariaLabel: 't', xMin: -7, xMax: 7, yMin: -2, yMax: 2, unit: 10, grid: true,
    xGridStep: 0.25, tickLabels: 'x', xTickStep: 1, xTickFormat: 'pi',
  });
  const thin = gridAndTicks(thinOut);
  assert.deepEqual(thin.grid.x, [-4, -3, -2, -1, 1, 2, 3, 4].map((k) => +thinOut.map.toPx([k * Math.PI / 2, 0])[0].toFixed(1)));
  for (const tick of thin.ticks.x) assert.ok(thin.grid.x.includes(tick), `the π tick at ${tick}px has a gridline`);
});

test('a π digit is a tick digit: knocked out, relocated off a crossing stroke, masked', () => {
  // A solid segment crosses the digit π below the axis; the room above it is
  // empty, so it moves there like any crossed digit. Its neighbours stay.
  const spec = {
    ariaLabel: 't', xMin: -0.5, xMax: 6.8, yMin: -1.5, yMax: 1.5, unit: 40, grid: false,
    tickLabels: 'x', xTickFormat: 'pi', xTickStep: 0.5, segments: [{ from: [Math.PI, -1.2], to: [Math.PI, -0.1] }],
  };
  const out = buildGraph(spec);
  const digits = digitEls(out);
  assert.equal(out.knockout.texts.length, digits.length);
  digits.forEach((d, i) => assert.equal(out.knockout.texts[i], d, 'the SAME objects as in els'));
  const sides = digitSides(out).x;
  assert.deepEqual(sides, { 'π/2': 'below', π: 'above', '3π/2': 'below', '2π': 'below' });
  const halos = [...toSvgString(spec).matchAll(/<mask [^]*?<\/mask>/g)][0][0];
  assert.match(halos, />π<\/text>/, 'the π digit has its glyph halo');
  assert.match(halos, />3π\/2<\/text>/);
});

test('tick formats reject anything but pi and fraction, and a value no small fraction states', () => {
  assert.throws(() => buildGraph({ ...GRID, tickLabels: true, xTickFormat: 'degrees' }), /xTickFormat must be 'pi', 'fraction', or omitted/);
  assert.throws(() => buildGraph({ ...GRID, tickLabels: true, yTickFormat: 'π' }), /yTickFormat must be 'pi', 'fraction', or omitted/);
  assert.throws(() => buildGraph({ ...GRID, tickLabels: true, xTickFormat: null }), /xTickFormat/);
  assert.throws(() => buildGraph({ ...GRID, tickLabels: 'x', xTickFormat: 'fraction', xTickStep: 0.0123, xMin: 0, xMax: 0.05, xUnit: 2000 }),
    /denominator of 64 or less/);
  assert.doesNotThrow(() => buildGraph({ ...GRID, tickLabels: true, xTickFormat: undefined, yTickFormat: 'fraction' }));
});

test('a decimal step on a π or fraction axis snaps once to its fraction, and no tick drifts with k', () => {
  // Content can write π/6 only as 0.166667; k · 0.166667 is off π-multiples
  // by 3.3e-7·k, so the step is rationalized once and every tick is k × 1/6.
  // (−0.4..6.5: a −0.75..7.05 window would also hold −π/6 and 13π/6)
  const sixths = buildGraph({ ...PI_AXIS, xMin: -0.4, xMax: 6.5, xTickStep: 0.166667, unit: 40 });
  assert.deepEqual(xDigitTexts(sixths),
    ['π/6', 'π/3', 'π/2', '2π/3', '5π/6', 'π', '7π/6', '4π/3', '3π/2', '5π/3', '11π/6', '2π'], 'the origin zero is skipped');
  digitEls(sixths).filter((d) => d.attrs.textAnchor === 'middle').forEach((d, i) => {
    assert.equal(+d.attrs.x, +sixths.map.toPx([(i + 1) * Math.PI / 6, 0])[0].toFixed(1), `${d.text} sits at exactly ${i + 1}π/6`);
  });
  assert.deepEqual(xDigitTexts(buildGraph({ ...PI_AXIS, xMin: -0.75, xMax: 7.05, xTickStep: 0.333333, unit: 40 })),
    ['π/3', '2π/3', 'π', '4π/3', '5π/3', '2π']);
  // far from the origin the 400th sixth is still exact: 0.166667 · 400 would be 66.6668
  assert.deepEqual(xDigitTexts(buildGraph({ ...PI_AXIS, xMin: 208.9, xMax: 209.8, xTickStep: 0.166667, unit: 40, yMin: 1, yMax: 3 })),
    ['133π/2', '200π/3']);
  // the snapped grid on a π axis lands on the snapped ticks
  const gridded = gridAndTicks(buildGraph({ ...PI_AXIS, grid: true, xMin: -0.75, xMax: 7.05, xTickStep: 0.333333, xGridStep: 0.166667, unit: 40 }));
  for (const tick of gridded.ticks.x) assert.ok(gridded.grid.x.includes(tick), `the π/3 tick at ${tick}px has a gridline`);
  // a step already exact is untouched
  assert.deepEqual(xDigitTexts(buildGraph({
    ariaLabel: 't', xMin: 0, xMax: 0.1, yMin: -1, yMax: 1, xUnit: 2000, yUnit: 40, grid: false, tickLabels: 'x', xTickStep: 0.025, xTickFormat: 'fraction',
  })), ['1/40', '1/20', '3/40', '1/10']);
  // a step no fraction with d ≤ 64 states within 1e-5 still throws, naming the step
  assert.throws(() => buildGraph({ ...PI_AXIS, xMin: -0.75, xMax: 7.05, xTickStep: 0.1667 }), /xTickStep 0\.1667 on a 'pi' axis is not within 1e-5/);
  assert.throws(() => buildGraph({ ...PI_AXIS, grid: true, xMin: -0.75, xMax: 7.05, xTickStep: 0.5, xGridStep: 0.0123 }), /xGridStep 0\.0123/);
});
