import assert from 'node:assert/strict';
import { checkGraphPlot, quadraticVertex } from './check-graph.mjs';
import { buildGraph, buildNumberLine, toSvgString } from './graph-core.mjs';
import { findFreeGridPoint, parseGraphPlotConfig } from './graph-plot-config.mjs';

const cases = [
  // --- LINE mode --------------------------------------------------------
  // y = 2x + 1 — any two points on it pass, either order
  [[[0, 1], [1, 3]], { slope: 2, intercept: 1 }, 'correct'],
  [[[-2, -3], [3, 7]], { slope: 2, intercept: 1 }, 'correct'],
  [[[1, 3], [0, 1]], { slope: 2, intercept: 1 }, 'correct'],
  [[[0, 0], [1, 2]], { slope: 2 }, 'correct'],
  // diagnostics: right slope / right intercept
  [[[0, 2], [1, 4]], { slope: 2, intercept: 1 }, 'slopeRight'],
  [[[0, 1], [1, 4]], { slope: 2, intercept: 1 }, 'interceptRight'],
  // both wrong
  [[[0, 2], [1, 1]], { slope: 2, intercept: 1 }, 'incorrect'],
  // fractional slope y = (5/2)x − 4
  [[[0, -4], [2, 1]], { slope: 5 / 2, intercept: -4 }, 'correct'],
  [[[4, 6], [2, 1]], { slope: 5 / 2, intercept: -4 }, 'correct'],
  // horizontal, both spellings
  [[[-3, 2], [5, 2]], { y: 2 }, 'correct'],
  [[[-3, 2], [5, 2]], { slope: 0, intercept: 2 }, 'correct'],
  [[[-3, 3], [5, 3]], { y: 2 }, 'slopeRight'], // horizontal but wrong height
  // vertical x = 3
  [[[3, -2], [3, 5]], { x: 3 }, 'correct'],
  [[[2, -2], [2, 5]], { x: 3 }, 'incorrect'],
  [[[3, -2], [4, 5]], { x: 3 }, 'incorrect'],
  // student vertical vs sloped answer
  [[[2, 0], [2, 4]], { slope: 2, intercept: 1 }, 'incorrect'],
  // degenerate input
  [[null, [1, 3]], { slope: 2, intercept: 1 }, 'needMore'],
  [[[1, 3], [1, 3]], { slope: 2, intercept: 1 }, 'needMore'],
  [[[1, 3]], { slope: 2, intercept: 1 }, 'needMore'],

  // --- SYSTEM mode ------------------------------------------------------
  // y = x − 2 and y = −x + 4 (intersection (3, 1))
  [[[0, -2], [3, 1], [0, 4], [4, 0]], { system: [{ slope: 1, intercept: -2 }, { slope: -1, intercept: 4 }] }, 'correct'],
  // same lines, authored order swapped — order-agnostic
  [[[0, -2], [3, 1], [0, 4], [4, 0]], { system: [{ slope: -1, intercept: 4 }, { slope: 1, intercept: -2 }] }, 'correct'],
  // one line right, one wrong
  [[[0, -2], [3, 1], [0, 5], [4, 1]], { system: [{ slope: 1, intercept: -2 }, { slope: -1, intercept: 4 }] }, 'systemPartial'],
  // both wrong
  [[[0, 0], [1, 5], [0, 5], [4, 1]], { system: [{ slope: 1, intercept: -2 }, { slope: -1, intercept: 4 }] }, 'incorrect'],
  // vertical member: x = 2 and y = 3
  [[[2, -5], [2, 5], [-4, 3], [4, 3]], { system: [{ x: 2 }, { y: 3 }] }, 'correct'],
  // not enough points
  [[[0, -2], [3, 1], [0, 4]], { system: [{ slope: 1, intercept: -2 }, { slope: -1, intercept: 4 }] }, 'needMore'],
  // a pair collapses to one point
  [[[0, -2], [0, -2], [0, 4], [4, 0]], { system: [{ slope: 1, intercept: -2 }, { slope: -1, intercept: 4 }] }, 'needMore'],

  // --- PARABOLA mode ----------------------------------------------------
  // y = x² − 4x + 3 → vertex (2, −1); (0, 3) and (4, 3) lie on it
  [[[2, -1], [0, 3]], { quadratic: { a: 1, b: -4, c: 3 } }, 'correct'],
  [[[2, -1], [4, 3]], { quadratic: { a: 1, b: -4, c: 3 } }, 'correct'],
  // right vertex, wrong width (point too shallow → a = 1/2)
  [[[2, -1], [4, 1]], { quadratic: { a: 1, b: -4, c: 3 } }, 'vertexRight'],
  // right shape (a = 1), wrong vertex
  [[[3, -1], [1, 3]], { quadratic: { a: 1, b: -4, c: 3 } }, 'shapeRight'],
  // both wrong
  [[[3, 0], [5, 1]], { quadratic: { a: 1, b: -4, c: 3 } }, 'incorrect'],
  // downward parabola y = −2x² (vertex origin)
  [[[0, 0], [1, -2]], { quadratic: { a: -2 } }, 'correct'],
  // second point directly above vertex determines nothing
  [[[2, -1], [2, 3]], { quadratic: { a: 1, b: -4, c: 3 } }, 'needMore'],
  [[[2, -1]], { quadratic: { a: 1, b: -4, c: 3 } }, 'needMore'],
];

let n = 0;
for (const [pts, answer, expected] of cases) {
  assert.equal(
    checkGraphPlot(pts, answer),
    expected,
    `checkGraphPlot(${JSON.stringify(pts)}, ${JSON.stringify(answer)}) should be ${expected}`
  );
  n++;
}

assert.deepEqual(quadraticVertex({ a: 1, b: -4, c: 3 }), [2, -1]);
const [h0, k0] = quadraticVertex({ a: -2 });
assert.ok(h0 === 0 && k0 === 0, 'vertex of y = -2x² is the origin');

// Negative-only ranges put zero on the top/right edges, not the bottom/left.
const negative = buildGraph({ xMin: -8, xMax: -2, yMin: -6, yMax: -1, grid: false });
const axisLines = negative.els.filter(({ tag, attrs }) => (
  tag === 'line' && attrs.strokeWidth === '1'
)).slice(0, 2);
assert.equal(axisLines[0].attrs.y1, 26, 'negative-only x-axis belongs on the top edge');
assert.equal(axisLines[0].attrs.y2, 26, 'negative-only x-axis stays horizontal');
assert.equal(axisLines[1].attrs.x1, 146, 'negative-only y-axis belongs on the right edge');
assert.equal(axisLines[1].attrs.x2, 146, 'negative-only y-axis stays vertical');

assert.throws(
  () => buildGraph({ xGridStep: 0 }),
  /grid steps must be positive/,
  'zero grid steps must fail instead of hanging',
);
assert.throws(
  () => buildGraph({ xMin: 0, xMax: 1, xGridStep: 0.00001 }),
  /too many elements/,
  'an impractically small grid step must fail instead of monopolizing the renderer',
);
assert.throws(
  () => buildNumberLine({ min: 0, max: 20_000 }),
  /too many elements/,
  'an impractically large number line must fail instead of monopolizing the renderer',
);

const serialized = toSvgString({}, {
  builder: () => ({
    viewBox: '0 0 10 10',
    width: 10,
    height: 10,
    els: [{
      tag: 'path',
      attrs: { d: 'M0 0L1 1', strokeLinejoin: 'round', fontWeight: '600' },
    }],
  }),
});
assert.match(serialized, /stroke-linejoin="round"/);
assert.match(serialized, /font-weight="600"/);
assert.doesNotMatch(serialized, /strokeLinejoin|fontWeight/);

const narrowConfig = parseGraphPlotConfig(
  '{"answer":{"slope":1,"intercept":0},"grid":{"xMin":0,"xMax":1,"yMin":0,"yMax":1}}',
  1,
);
const firstFree = findFreeGridPoint(narrowConfig, [[1, 1]]);
assert.ok(firstFree, 'a narrow grid must return a different point instead of looping');
assert.notDeepEqual(firstFree, [1, 1]);
assert.equal(
  findFreeGridPoint(narrowConfig, [[0, 0], [0, 1], [1, 0], [1, 1]]),
  null,
  'a full grid reports no free point',
);
for (const [raw, snap, pattern] of [
  ['{', 1, /valid JSON/],
  ['{"answer":{"slope":1},"grid":{"xMin":2,"xMax":1}}', 1, /minimum/],
  ['{"answer":{"slope":1},"grid":{}}', 0, /snap/],
  ['{"answer":{"quadratic":{"a":0}},"grid":{}}', 1, /nonzero/],
  ['{"answer":{"x":1,"slope":2},"grid":{}}', 1, /exactly one/],
  ['{"answer":{"slope":1},"grid":{"xMin":0,"xMax":1,"xGridStep":0.00001}}', 1, /too many/],
]) {
  assert.throws(() => parseGraphPlotConfig(raw, snap), pattern);
}
console.log(`check-graph: ${n} cases passed`);
