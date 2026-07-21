/**
 * Grader for <GraphPlot /> — checks the mathematical object determined by
 * the student's placed points against the authored answer, and returns a
 * DIAGNOSTIC status, not just right/wrong, so the component can teach
 * ("right steepness, wrong intercept") instead of only judging.
 *
 * Answer forms (see components/GraphPlot.jsx for the MDX-facing docs):
 *   { slope, intercept }            y = slope·x + intercept
 *   { y: b } / { x: a }             horizontal / vertical line
 *   { system: [<line>, <line>] }    two lines (4 points; order-agnostic)
 *   { quadratic: { a, b?, c? } }    parabola y = ax² + bx + c
 *                                   (student places vertex, then one point)
 *
 * Points snap to the grid, so computed slopes/intercepts are exact for
 * lattice-reachable answers; EPS only absorbs float noise.
 *
 * Statuses:
 *   'needMore'        not enough (distinct/usable) points yet
 *   'correct'
 *   'incorrect'       nothing salvageable to name
 *   'slopeRight'      line: slope matches, intercept doesn't
 *   'interceptRight'  line: intercept matches, slope doesn't
 *   'systemPartial'   system: exactly one of the two lines matches
 *   'vertexRight'     parabola: vertex matches, opening (a) doesn't
 *   'shapeRight'      parabola: a matches, vertex doesn't
 */

const EPS = 1e-9;
const near = (a, b) => Math.abs(a - b) < EPS;

/** line through two distinct points → { x } (vertical) or { m, b } */
function lineOf([x1, y1], [x2, y2]) {
  if (x1 === x2) return { x: x1 };
  const m = (y2 - y1) / (x2 - x1);
  return { m, b: y1 - m * x1 };
}

/** normalize an authored line answer to the same shape */
function normLine(t) {
  if (t.x !== undefined) return { x: t.x };
  if (t.y !== undefined) return { m: 0, b: t.y };
  return { m: t.slope, b: t.intercept };
}

function gradeLine(s, t) {
  if (t.x !== undefined) {
    return s.x !== undefined && near(s.x, t.x) ? 'correct' : 'incorrect';
  }
  if (s.x !== undefined) return 'incorrect';
  const mOk = near(s.m, t.m);
  const bOk = near(s.b, t.b);
  return mOk && bOk ? 'correct' : mOk ? 'slopeRight' : bOk ? 'interceptRight' : 'incorrect';
}

/** vertex [h, k] of y = ax² + bx + c */
export function quadraticVertex({ a, b = 0, c = 0 }) {
  return [-b / (2 * a), c - (b * b) / (4 * a)];
}

const distinct = (p, q) => p && q && (p[0] !== q[0] || p[1] !== q[1]);

export function checkGraphPlot(pts, answer) {
  if (answer.system) {
    if (pts.length < 4 || !distinct(pts[0], pts[1]) || !distinct(pts[2], pts[3])) {
      return 'needMore';
    }
    const s = [lineOf(pts[0], pts[1]), lineOf(pts[2], pts[3])];
    const t = answer.system.map(normLine);
    let best = 0;
    for (const [i, j] of [[0, 1], [1, 0]]) {
      const n =
        (gradeLine(s[0], t[i]) === 'correct' ? 1 : 0) +
        (gradeLine(s[1], t[j]) === 'correct' ? 1 : 0);
      best = Math.max(best, n);
    }
    return best === 2 ? 'correct' : best === 1 ? 'systemPartial' : 'incorrect';
  }

  if (answer.quadratic) {
    // pts[0] is the vertex; pts[1] any other point (different x, or no
    // parabola is determined).
    if (pts.length < 2 || !pts[0] || !pts[1] || pts[0][0] === pts[1][0]) {
      return 'needMore';
    }
    const { a } = answer.quadratic;
    const [h, k] = quadraticVertex(answer.quadratic);
    const [hs, ks] = pts[0];
    const [px, py] = pts[1];
    const as = (py - ks) / (px - hs) ** 2;
    const vOk = near(hs, h) && near(ks, k);
    const aOk = near(as, a);
    return vOk && aOk ? 'correct' : vOk ? 'vertexRight' : aOk ? 'shapeRight' : 'incorrect';
  }

  if (pts.length < 2 || !distinct(pts[0], pts[1])) return 'needMore';
  return gradeLine(lineOf(pts[0], pts[1]), normLine(answer));
}
