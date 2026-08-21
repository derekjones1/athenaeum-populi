/**
 * Grader for <GraphPlot /> — checks the mathematical object determined by
 * the student's placed points against the authored answer, and returns a
 * DIAGNOSTIC status, not just right/wrong, so the component can teach
 * ("right steepness, wrong intercept") instead of only judging.
 *
 * Answer forms (the GraphPlot shortcode passes these as JSON):
 *   { slope, intercept }            y = slope·x + intercept
 *   { y: b } / { x: a }             horizontal / vertical line
 *   …any line answer may add plotPoints: N (2–12, default 2) — the student
 *   must place N distinct points and ALL of them must lie on the line;
 *   which points they choose is free
 *   { system: [<line>, <line>] }    two lines (4 points; order-agnostic)
 *   { asymptotes: [<line>, …] }     one to three asymptote lines, two points
 *                                   each (consecutive pairs; order-agnostic).
 *                                   Members are {x}, {y}, or slope lines, so
 *                                   vertical, horizontal, AND slant
 *                                   asymptotes all grade
 *   { quadratic: { a, b?, c? } }    parabola y = ax² + bx + c
 *                                   (student places vertex, then one point;
 *                                   plotPoints: N asks for the vertex plus
 *                                   N−1 points, all on one parabola)
 *   { points: [[x, y], …] }         a set of 1–12 points the student must
 *                                   place, any order ("plot the points…")
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
 *   'pointsPartial'   points: some but not all of the set is placed right
 *   'asymptotePartial' asymptotes: some but not all of the set is placed right
 *   'notCollinear'    line with plotPoints > 2: the points make no single line
 *   'notOnParabola'   quadratic with plotPoints > 2: the extra points are not
 *                     all on one parabola through the placed vertex
 */

// Constants only — check-graph grades in the browser with no MathLive and no
// Compute Engine on the page, and this import must never change that.
import { GEOMETRY_EPSILON } from './geometry-constants.mjs';

const near = (a, b) => Math.abs(a - b) < GEOMETRY_EPSILON;

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
  return { m: t.slope, b: t.intercept ?? 0 };
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

/**
 * How many answer points have a matching placed point. Both sets are distinct
 * (the component refuses duplicate placements; the config parser refuses
 * duplicate targets), so counting per-target is a true 1:1 matching. Exported
 * for the component's "3 of 5 points are placed correctly" feedback.
 */
export function correctPointCount(pts, targets) {
  const placed = pts.filter(Boolean);
  return targets.filter((t) => placed.some((p) => near(p[0], t[0]) && near(p[1], t[1]))).length;
}

/**
 * How many authored asymptotes have a matching student line. Each consecutive
 * pair of points draws one line; a degenerate pair draws none. Counting
 * per-target is a true maximum matching: the targets are distinct lines (the
 * config parser refuses duplicates), and one student line can only ever equal
 * one of them. Exported for the component's "1 of the 2 asymptotes…" feedback.
 */
export function correctAsymptoteCount(pts, targets) {
  const lines = [];
  for (let i = 0; i + 1 < pts.length; i += 2) {
    if (distinct(pts[i], pts[i + 1])) lines.push(lineOf(pts[i], pts[i + 1]));
  }
  return targets.filter((t) => lines.some((s) => gradeLine(s, normLine(t)) === 'correct')).length;
}

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

  if (answer.asymptotes) {
    // Same pairing contract as `system`, generalized to 1–3 members: each
    // consecutive pair of points draws one asymptote. Points may repeat
    // ACROSS pairs (two asymptotes legitimately cross), but a pair that
    // collapses to one point draws nothing.
    const wanted = answer.asymptotes.length;
    if (pts.filter(Boolean).length < 2 * wanted) return 'needMore';
    for (let i = 0; i + 1 < pts.length; i += 2) {
      if (!distinct(pts[i], pts[i + 1])) return 'needMore';
    }
    const matched = correctAsymptoteCount(pts, answer.asymptotes);
    return matched === wanted ? 'correct' : matched > 0 ? 'asymptotePartial' : 'incorrect';
  }

  if (answer.points) {
    if (pts.filter(Boolean).length < answer.points.length) return 'needMore';
    const matched = correctPointCount(pts, answer.points);
    return matched === answer.points.length ? 'correct'
      : matched > 0 ? 'pointsPartial' : 'incorrect';
  }

  if (answer.quadratic) {
    // pts[0] is the vertex; pts[1] any other point (different x, or no
    // parabola is determined). With plotPoints > 2 the later points must lie
    // on the parabola the first two determine, or there is no single
    // parabola to grade against the answer.
    const wanted = answer.plotPoints ?? 2;
    const placedQ = pts.filter(Boolean);
    if (placedQ.length < wanted || !pts[0] || !pts[1] || pts[0][0] === pts[1][0]) {
      return 'needMore';
    }
    for (let i = 0; i < placedQ.length; i += 1) {
      for (let j = i + 1; j < placedQ.length; j += 1) {
        if (!distinct(placedQ[i], placedQ[j])) return 'needMore';
      }
    }
    const { a } = answer.quadratic;
    const [h, k] = quadraticVertex(answer.quadratic);
    const [hs, ks] = pts[0];
    const [px, py] = pts[1];
    const as = (py - ks) / (px - hs) ** 2;
    const onParabola = (p) => p[0] !== hs && near(p[1], as * (p[0] - hs) ** 2 + ks);
    if (!placedQ.slice(2).every(onParabola)) return 'notOnParabola';
    const vOk = near(hs, h) && near(ks, k);
    const aOk = near(as, a);
    return vOk && aOk ? 'correct' : vOk ? 'vertexRight' : aOk ? 'shapeRight' : 'incorrect';
  }

  const placed = pts.filter(Boolean);
  const required = answer.plotPoints ?? 2;
  if (placed.length < required) return 'needMore';
  for (let i = 0; i < placed.length; i += 1) {
    for (let j = i + 1; j < placed.length; j += 1) {
      if (!distinct(placed[i], placed[j])) return 'needMore';
    }
  }
  const s = lineOf(placed[0], placed[1]);
  if (placed.length > 2) {
    // The first two points name a candidate line; every remaining point must
    // sit on it, or there is no single line to grade against the answer.
    const onS = (p) => (s.x !== undefined ? near(p[0], s.x) : near(p[1], s.m * p[0] + s.b));
    if (!placed.every(onS)) return 'notCollinear';
  }
  return gradeLine(s, normLine(answer));
}
