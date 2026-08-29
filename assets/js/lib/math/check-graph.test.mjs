import assert from 'node:assert/strict';
import {
  checkGraphPlot, correctAsymptoteCount, correctPointCount, quadraticVertex,
} from './check-graph.mjs';
import { buildGraph, buildNumberLine, toSvgString } from './graph-core.mjs';
import {
  findFreeGridPoint, parseGraphPlotConfig, reachableValues, resolveGraphPress, snapToGrid,
} from './graph-plot-config.mjs';

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

  // --- PARABOLA mode with plotPoints -------------------------------------
  // Three points determine the parabola on their own, so the ORDER they were
  // placed in is not part of the answer — the same contract every other
  // multi-point form here uses. Anchoring the fit on pts[0] as the vertex
  // instead told a learner who had plotted the curve correctly, but had not
  // put the vertex first, that their points "do not all lie on one parabola".
  [[[2, -1], [0, 3], [4, 3]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'correct'],
  [[[2, -1], [1, 0], [3, 0]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'correct'],
  // the same three points, vertex placed LAST
  [[[0, 3], [4, 3], [2, -1]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'correct'],
  // and three points on the curve with no vertex among them at all — which is
  // exactly what "graph it using its intercepts" asks a learner to plot
  [[[1, 0], [3, 0], [0, 3]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'correct'],
  // three consistent points on the WRONG parabola keep the diagnostics
  [[[2, -1], [4, 5], [0, 5]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'vertexRight'],
  [[[3, -1], [1, 3], [5, 3]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'shapeRight'],
  // Three points at distinct x-values ALWAYS lie on one parabola, so this is
  // simply the wrong parabola — 'notOnParabola' would be a false claim about
  // the learner's own points.
  [[[2, -1], [0, 3], [4, 2]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'incorrect'],
  // notOnParabola is what is left when there is genuinely no parabola: two
  // points sharing an x-value (no function passes through both), three
  // collinear points (a line is not a parabola), and a fourth point off the
  // curve the others determine.
  [[[2, -1], [0, 3], [2, 3]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'notOnParabola'],
  [[[2, -1], [3, 0], [4, 1]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'notOnParabola'],
  [[[2, -1], [0, 3], [4, 3], [1, 5]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 4 }, 'notOnParabola'],
  // not enough yet, and a duplicate placement is "need more", not wrong
  [[[2, -1], [0, 3]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'needMore'],
  [[[2, -1], [0, 3], [0, 3]], { quadratic: { a: 1, b: -4, c: 3 }, plotPoints: 3 }, 'needMore'],

  // --- LINE mode with plotPoints -----------------------------------------
  // "plot three points on y = 2x + 1" — ANY three points on the line pass
  [[[0, 1], [1, 3], [2, 5]], { slope: 2, intercept: 1, plotPoints: 3 }, 'correct'],
  [[[-1, -1], [3, 7], [1, 3]], { slope: 2, intercept: 1, plotPoints: 3 }, 'correct'],
  // three collinear points on the WRONG line keep the line diagnostics
  [[[0, 2], [1, 4], [2, 6]], { slope: 2, intercept: 1, plotPoints: 3 }, 'slopeRight'],
  [[[0, 1], [1, 4], [2, 7]], { slope: 2, intercept: 1, plotPoints: 3 }, 'interceptRight'],
  // two on the line, one off it: no single line exists to grade
  [[[0, 1], [1, 3], [2, 6]], { slope: 2, intercept: 1, plotPoints: 3 }, 'notCollinear'],
  // vertical target with three points
  [[[3, -2], [3, 0], [3, 5]], { x: 3, plotPoints: 3 }, 'correct'],
  [[[3, -2], [3, 0], [4, 5]], { x: 3, plotPoints: 3 }, 'notCollinear'],
  // not enough yet, and a drag-created duplicate is "need more", not wrong
  [[[0, 1], [1, 3]], { slope: 2, intercept: 1, plotPoints: 3 }, 'needMore'],
  [[[0, 1], [1, 3], [1, 3]], { slope: 2, intercept: 1, plotPoints: 3 }, 'needMore'],

  // --- ASYMPTOTES mode --------------------------------------------------
  // vertical x = 2 and horizontal y = 3, pairs in either order
  [[[2, -5], [2, 5], [-4, 3], [4, 3]], { asymptotes: [{ x: 2 }, { y: 3 }] }, 'correct'],
  [[[-4, 3], [4, 3], [2, -5], [2, 5]], { asymptotes: [{ x: 2 }, { y: 3 }] }, 'correct'],
  // a horizontal member spelled as a zero-slope line still matches
  [[[-4, 3], [4, 3], [2, -5], [2, 5]], { asymptotes: [{ x: 2 }, { slope: 0, intercept: 3 }] }, 'correct'],
  // one of the two placed right
  [[[2, -5], [2, 5], [-4, 4], [4, 4]], { asymptotes: [{ x: 2 }, { y: 3 }] }, 'asymptotePartial'],
  // both pairs drawing the SAME correct line match only one target
  [[[2, -5], [2, 5], [2, 0], [2, 3]], { asymptotes: [{ x: 2 }, { y: 3 }] }, 'asymptotePartial'],
  // neither right
  [[[1, -5], [1, 5], [-4, 4], [4, 4]], { asymptotes: [{ x: 2 }, { y: 3 }] }, 'incorrect'],
  // a single vertical asymptote ("find the vertical asymptote…")
  [[[-1, 0], [-1, 3]], { asymptotes: [{ x: -1 }] }, 'correct'],
  [[[1, 0], [1, 3]], { asymptotes: [{ x: -1 }] }, 'incorrect'],
  // a slant asymptote is a plain line answer member
  [[[0, -1], [2, 1]], { asymptotes: [{ slope: 1, intercept: -1 }] }, 'correct'],
  [[[0, 1], [2, 3]], { asymptotes: [{ slope: 1, intercept: -1 }] }, 'incorrect'],
  // three members: two verticals and the horizontal
  [[[2, -5], [2, 5], [-3, -5], [-3, 5], [-6, 4], [6, 4]],
    { asymptotes: [{ x: 2 }, { x: -3 }, { y: 4 }] }, 'correct'],
  [[[2, -5], [2, 5], [-3, -5], [-3, 5], [-6, 1], [6, 1]],
    { asymptotes: [{ x: 2 }, { x: -3 }, { y: 4 }] }, 'asymptotePartial'],
  // crossing asymptotes may legitimately share their intersection point
  [[[2, 4], [2, 0], [2, 4], [-2, 4]], { asymptotes: [{ x: 2 }, { y: 4 }] }, 'correct'],
  // not enough points, and a collapsed pair draws nothing
  [[[2, -5], [2, 5], [-4, 3]], { asymptotes: [{ x: 2 }, { y: 3 }] }, 'needMore'],
  [[[2, -5], [2, 5], [4, 3], [4, 3]], { asymptotes: [{ x: 2 }, { y: 3 }] }, 'needMore'],

  // --- POINTS mode ------------------------------------------------------
  // the five standard points of y = x², placed in a different order
  [[[0, 0], [1, 1], [-1, 1], [2, 4], [-2, 4]],
    { points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]] }, 'correct'],
  // four of five right
  [[[0, 0], [1, 1], [-1, 1], [2, 4], [-2, 3]],
    { points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]] }, 'pointsPartial'],
  // none right
  [[[3, 3], [4, 4], [5, 5], [6, 6], [7, 7]],
    { points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]] }, 'incorrect'],
  // not enough points yet
  [[[0, 0], [1, 1]],
    { points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]] }, 'needMore'],
  // a single-point answer ("plot the point (3, −2)")
  [[[3, -2]], { points: [[3, -2]] }, 'correct'],
  [[[-2, 3]], { points: [[3, -2]] }, 'incorrect'],
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

assert.equal(
  correctPointCount([[0, 0], [1, 1], [9, 9]], [[1, 1], [0, 0], [2, 4]]),
  2,
  'correctPointCount counts matched targets, order-agnostic',
);

assert.equal(
  correctAsymptoteCount(
    [[-3, -5], [-3, 5], [-6, 1], [6, 1], [2, -5], [2, 5]],
    [{ x: 2 }, { x: -3 }, { y: 4 }],
  ),
  2,
  'correctAsymptoteCount counts matched member lines, order-agnostic',
);

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

// A points answer, so the 2×2 grid is about findFreeGridPoint's behaviour on a
// nearly-full lattice and not about the plotPoints slack rule (which such a
// grid can never satisfy).
const narrowConfig = parseGraphPlotConfig(
  '{"answer":{"points":[[0,0]]},"grid":{"xMin":0,"xMax":1,"yMin":0,"yMax":1}}',
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
// A valid points answer parses into points mode, including snap-fraction
// targets when the snap allows them.
assert.equal(
  parseGraphPlotConfig('{"answer":{"points":[[-2,4],[-1,1],[0,0],[1,1],[2,4]]},"grid":{}}', 1).mode,
  'points',
);
assert.equal(
  parseGraphPlotConfig('{"answer":{"points":[[1.5,2]]},"grid":{}}', 0.5).mode,
  'points',
);
assert.equal(
  parseGraphPlotConfig('{"answer":{"slope":2,"intercept":1,"plotPoints":3},"grid":{}}', 1).mode,
  'line',
);
// Asymptote answers: one to three member lines, any mix of vertical,
// horizontal, and slant.
assert.equal(
  parseGraphPlotConfig('{"answer":{"asymptotes":[{"x":2},{"y":3}]},"grid":{}}', 1).mode,
  'asymptotes',
);
assert.equal(
  parseGraphPlotConfig('{"answer":{"asymptotes":[{"x":2},{"x":-3},{"slope":1,"intercept":-1}]},"grid":{}}', 1).mode,
  'asymptotes',
);

const thirteen = JSON.stringify(Array.from({ length: 13 }, (_, i) => [i - 6, 0]));
for (const [raw, snap, pattern] of [
  ['{', 1, /valid JSON/],
  ['{"answer":{"slope":1},"grid":{"xMin":2,"xMax":1}}', 1, /minimum/],
  ['{"answer":{"slope":1},"grid":{}}', 0, /snap/],
  ['{"answer":{"quadratic":{"a":0}},"grid":{}}', 1, /nonzero/],
  ['{"answer":{"x":1,"slope":2},"grid":{}}', 1, /exactly one/],
  ['{"answer":{"slope":1},"grid":{"xMin":0,"xMax":1,"xGridStep":0.00001}}', 1, /too many/],
  ['{"answer":{"points":[]},"grid":{}}', 1, /non-empty/],
  ['{"answer":{"points":[[0,0],[1]]},"grid":{}}', 1, /pair of finite numbers/],
  ['{"answer":{"points":[[0,0],[1,1],[0,0]]},"grid":{}}', 1, /same point/],
  ['{"answer":{"points":[[0,9]]},"grid":{}}', 1, /outside the grid/],
  ['{"answer":{"points":[[0.5,0]]},"grid":{}}', 1, /not reachable/],
  ['{"answer":{"points":[[0,0]],"slope":1},"grid":{}}', 1, /exactly one/],
  [`{"answer":{"points":${thirteen}},"grid":{}}`, 1, /at most 12/],
  ['{"answer":{"slope":2,"plotPoints":1},"grid":{}}', 1, /between 2 and 12/],
  ['{"answer":{"slope":2,"plotPoints":13},"grid":{}}', 1, /between 2 and 12/],
  ['{"answer":{"slope":2,"plotPoints":2.5},"grid":{}}', 1, /between 2 and 12/],
  ['{"answer":{"points":[[0,0]],"plotPoints":3},"grid":{}}', 1, /only to a line or quadratic/],
  ['{"answer":{"system":[{"slope":1,"plotPoints":3},{"slope":2}]},"grid":{}}', 1, /does not support plotPoints/],
  // Unwinnable exercises: fewer reachable lattice points than the ask.
  ['{"answer":{"slope":0.3,"intercept":0.05},"grid":{}}', 1, /only 0 snap-1 point/],
  ['{"answer":{"slope":2,"intercept":0,"plotPoints":5},"grid":{"xMin":-1,"xMax":1,"yMin":-2,"yMax":2}}', 1, /only 3 snap-1 point/],
  ['{"answer":{"x":1.5},"grid":{}}', 1, /only 0 snap-1 point/],
  // A quadratic whose vertex is off the snap lattice can never be matched.
  ['{"answer":{"quadratic":{"a":1,"b":1}},"grid":{}}', 1, /vertex \(-0.5, -0.25\) is not reachable/],
  // Asymptote answers: 1–3 distinct member lines, each drawable on the lattice.
  ['{"answer":{"asymptotes":[]},"grid":{}}', 1, /one to three/],
  ['{"answer":{"asymptotes":[{"x":1},{"x":2},{"x":3},{"x":4}]},"grid":{}}', 1, /one to three/],
  ['{"answer":{"asymptotes":[{"y":3},{"slope":0,"intercept":3}]},"grid":{}}', 1, /Asymptotes 1 and 2 are the same line/],
  ['{"answer":{"asymptotes":[{"x":2,"y":3}]},"grid":{}}', 1, /exactly one of x, y, or slope/],
  ['{"answer":{"asymptotes":[{"x":2}],"plotPoints":3},"grid":{}}', 1, /only to a line or quadratic/],
  ['{"answer":{"asymptotes":[{"x":2,"plotPoints":3}]},"grid":{}}', 1, /does not support plotPoints/],
  ['{"answer":{"asymptotes":[{"x":2}],"slope":1},"grid":{}}', 1, /exactly one answer form/],
  ['{"answer":{"asymptotes":[{"x":1.5}]},"grid":{}}', 1, /Asymptote 1 has only 0 snap-1 point/],
  ['{"answer":{"asymptotes":[{"x":2},{"y":0.5}]},"grid":{}}', 1, /Asymptote 2 has only 0 snap-1 point/],
  // The same drawability guard now covers system members too.
  ['{"answer":{"system":[{"slope":1,"intercept":0.5},{"slope":2}]},"grid":{}}', 1, /System line 1 has only 0 snap-1 point/],
  // A grid admitting EXACTLY plotPoints reachable points is winnable but
  // forced — one admissible point set, none of the choice plotPoints exists to
  // give. Eight exercises shipped that way while the rule lived only in the
  // playbook as "count them and surface it in the handoff".
  ['{"answer":{"slope":0.25,"intercept":2,"plotPoints":3},"grid":{}}', 1, /exactly 3 reachable snap-1 point/],
  ['{"answer":{"quadratic":{"a":-3,"b":12,"c":-4},"plotPoints":3},"grid":{"xMin":-3,"xMax":7,"yMin":-3,"yMax":10}}', 1, /exactly 3 reachable snap-1 point/],
]) {
  assert.throws(() => parseGraphPlotConfig(raw, snap), pattern);
}

// …and the widened grids the corpus now carries do pass: seven reachable
// points for the line, five for the parabola once f(0) = f(4) = −4 fits.
assert.equal(
  parseGraphPlotConfig('{"answer":{"slope":0.25,"intercept":2,"plotPoints":3},"grid":{"xMin":-14,"xMax":14,"yMin":-14,"yMax":14}}', 1).mode,
  'line',
);
assert.equal(
  parseGraphPlotConfig('{"answer":{"quadratic":{"a":-3,"b":12,"c":-4},"plotPoints":3},"grid":{"xMin":-3,"xMax":7,"yMin":-5,"yMax":10}}', 1).mode,
  'quadratic',
);

// --- reachability follows snapToGrid, clamping included --------------------
// Snapping rounds and only THEN clamps, so a bound that is not itself on the
// lattice is still reachable: every drag past that edge lands on it. Modelling
// reachability as "an exact multiple of snap" alone rejected authored targets
// the learner can place.
assert.deepEqual(snapToGrid([6.4, -99], { xMin: -6.5, xMax: 6.5, yMin: -6.5, yMax: 6.5, snap: 1 }), [6, -6.5]);
assert.deepEqual(snapToGrid([9, 0], { xMin: -6.5, xMax: 6.5, yMin: -6.5, yMax: 6.5, snap: 1 }), [6.5, 0]);
assert.deepEqual(reachableValues(-2.5, 2.5, 1), [-2.5, -2, -1, 0, 1, 2, 2.5]);
assert.deepEqual(reachableValues(-2, 2, 0.5), [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]);
assert.equal(
  parseGraphPlotConfig('{"answer":{"points":[[6.5,0]]},"grid":{"xMin":-6.5,"xMax":6.5,"yMin":-6.5,"yMax":6.5}}', 1).mode,
  'points',
  'a target on a non-lattice grid edge is reachable by dragging into the edge',
);
assert.equal(
  parseGraphPlotConfig('{"answer":{"x":6.5,"plotPoints":3},"grid":{"xMin":-6.5,"xMax":6.5,"yMin":-6.5,"yMax":6.5}}', 1).mode,
  'line',
  'and a vertical line standing on that edge is drawable',
);

// Duplicate members are refused on BOTH member-list forms. The guard lived
// inside the asymptotes branch only, so a system answer listing one line twice
// parsed clean and shipped an exercise that graded 'correct' for drawing that
// line twice — while correctAsymptoteCount justified its per-target counting
// with "the config parser refuses duplicates".
for (const [form, config] of [
  ['system', '{"answer":{"system":[{"slope":1,"intercept":0},{"slope":1,"intercept":0}]}}'],
  ['system spelled differently', '{"answer":{"system":[{"y":3},{"slope":0,"intercept":3}]}}'],
  ['asymptotes', '{"answer":{"asymptotes":[{"x":2},{"x":2}]}}'],
]) {
  assert.throws(
    () => parseGraphPlotConfig(config, 1),
    /are the same line/,
    `${form}: a member list must not repeat a line`,
  );
}

// The slack rule's remedy has to name something the config actually carries:
// without an authored plotPoints the ask is the engine's default of 2, and
// "lower plotPoints" pointed at a key that is not there.
assert.throws(
  () => parseGraphPlotConfig('{"answer":{"slope":1,"intercept":0},"grid":{"xMin":0,"xMax":1,"yMin":0,"yMax":1}}', 1),
  (error) => {
    assert.match(error.message, /exactly 2 reachable/);
    assert.doesNotMatch(error.message, /plotPoints/, 'do not name a key the answer does not have');
    return true;
  },
);
assert.throws(
  () => parseGraphPlotConfig('{"answer":{"slope":1,"intercept":0,"plotPoints":3},"grid":{"xMin":0,"xMax":2,"yMin":0,"yMax":2}}', 1),
  /lower plotPoints/,
  'but when it IS authored, lowering it is a real remedy',
);

// --- resolveGraphPress ----------------------------------------------------
// A press resolves to the lattice point it SNAPS ONTO, not to whatever handle
// falls inside a fixed radius.
const bounds = { xMin: -6, xMax: 6, yMin: -6, yMax: 6 };
const press = (state, at) => resolveGraphPress({ maxPoints: 4, mode: 'line', snap: 1, ...bounds, ...state }, at);

// The snap-0.5 regression: the neighbouring lattice point is 0.5 away, well
// inside the old 0.6-unit grab radius, so pressing an EMPTY neighbour grabbed
// the placed point and dragged it there — silently moving a point the learner
// had already put in the right place.
assert.deepEqual(
  press({ snap: 0.5, pts: [[0, 0]] }, [0.5, 0]),
  { place: [0.5, 0] },
  'an empty neighbour on a half-unit lattice takes a new point, not the neighbour',
);
assert.deepEqual(press({ snap: 0.5, pts: [[0, 0]] }, [0.1, 0.1]), { grab: 0 }, 'a press on the point’s own cell grabs it');
// The snap-1 dead band: 0.57 units away diagonally was too far for the radius
// but still snapped back onto the occupied cell, so the press did nothing.
assert.deepEqual(press({ pts: [[0, 0]] }, [0.4, 0.4]), { grab: 0 });
assert.deepEqual(press({ pts: [[0, 0]] }, [0.6, 0]), { place: [1, 0] });

// Two crossing asymptotes legitimately share their intersection point, and
// check-graph grades that as correct (see the case above) — so the third
// point, which opens the second pair, may land on the first pair's cell.
assert.deepEqual(
  press({ mode: 'asymptotes', pts: [[0, 0], [2, 2]] }, [0, 0]),
  { place: [0, 0] },
  'a new PAIR may start on a point an earlier pair already holds',
);
assert.deepEqual(
  press({ mode: 'asymptotes', pts: [[0, 0]] }, [0, 0]),
  { grab: 0 },
  'but the second point of the SAME pair must differ, so that press grabs',
);
assert.deepEqual(
  press({ mode: 'line', pts: [[0, 0], [2, 2]] }, [0, 0]),
  { grab: 0 },
  'and every other mode grades a duplicate as needMore, so it still grabs',
);
// SYSTEM mode does not get the shared-cell rule. Generalizing it there bought
// nothing — two lines cross at the solution, which is what the learner is
// solving FOR rather than a point they set out to plot twice — and cost the
// pointer its only way to adjust an earlier pair: a press meant to nudge
// line 1's first point silently stacked a coincident point on top of it.
assert.deepEqual(
  press({ mode: 'system', pts: [[0, 3], [1, 1]] }, [0, 3]),
  { grab: 0 },
  'a press on an earlier system pair grabs that point rather than stacking one',
);
assert.deepEqual(
  press({ mode: 'system', pts: [[0, 3], [1, 1], [2, 2]] }, [1, 1]),
  { grab: 1 },
  'and it keeps grabbing once the second pair is under way',
);
// Once every point is placed nothing competes with grabbing, so a near miss
// takes the nearest handle rather than demanding its exact cell.
assert.deepEqual(
  press({ maxPoints: 2, pts: [[0, 0], [4, 4]] }, [3.4, 4]),
  { grab: 1 },
  'a press that snaps to the free cell next door still grabs when the grid is full',
);
assert.equal(press({ maxPoints: 2, pts: [[0, 0], [4, 4]] }, [2, 2]), null);

console.log(`check-graph: ${n} cases passed`);
