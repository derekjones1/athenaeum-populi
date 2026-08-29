/**
 * Numeric tolerances shared by the geometry code.
 *
 * `1e-9` was written out in four places — `EPS` in check-graph.mjs and two
 * inline literals in graph-core.mjs's tick loops — with nothing tying them
 * together. They answer the same question ("is this coordinate the origin, to
 * within float noise?") over the same coordinate space, so a change to one
 * that is not a change to the others is a bug, not a decision.
 *
 * Deliberately dependency-free and constants-only. `check-graph.mjs` grades in
 * the browser with no MathLive and no Compute Engine on the page; importing
 * this must never pull anything else in.
 *
 * NOT shared with `assets/js/lib/math/check-answer.mjs`, whose `SAMPLE_TOLERANCE`
 * is also 1e-9 by coincidence of magnitude only: that one bounds agreement
 * between two CAS-evaluated expressions at sampled points, and it is paired
 * with `tools/verify/verify-answers.mjs`'s independent 1e-8 relative tolerance. The
 * two graders must be able to disagree — see tools/verify/grader-differential.test.mjs.
 */

/** Coordinate equality tolerance, in graph units. */
export const GEOMETRY_EPSILON = 1e-9;
