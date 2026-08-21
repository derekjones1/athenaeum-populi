/**
 * Parabola algebra shared by the author-time validator, the runtime grader,
 * and the component's live preview.
 *
 * Deliberately dependency-free, for the same reason `geometry-constants.mjs`
 * is: `graph-plot-config.mjs` ships in the EAGER components bundle while
 * `check-graph.mjs` and `graph-core.mjs` load lazily from the graphplot
 * engine, so anything both sides need has to be a leaf that costs nothing to
 * pull into either. Importing the grader from the validator to share one
 * formula would drag the whole grader into the eager bundle.
 *
 * These three formulas were written out three times — the validator's
 * reachability gate re-derived the vertex inline, the grader had
 * `quadraticVertex`, and `<graph-plot>`'s preview rebuilt standard-form
 * coefficients from a vertex and a point. A sign fixed in one of those and
 * not the others is the validator accepting a vertex the grader will never
 * match, which is the exact class of engine/validator disagreement
 * `snapToGrid`/`reachableValues` exist to prevent on the snapping side.
 */

/** Vertex [h, k] of y = ax² + bx + c. */
export function quadraticVertex({ a, b = 0, c = 0 }) {
  return [-b / (2 * a), c - (b * b) / (4 * a)];
}

/** y at x on y = ax² + bx + c. */
export function quadraticAt({ a, b = 0, c = 0 }, x) {
  return a * x * x + b * x + c;
}

/**
 * Standard-form coefficients of the parabola with vertex [h, k] through the
 * distinct-x point [px, py]. Returns null when the point shares the vertex's
 * x-value, where no parabola is determined.
 */
export function quadraticThroughVertex([h, k], [px, py]) {
  if (px === h) return null;
  const a = (py - k) / (px - h) ** 2;
  return { a, b: -2 * a * h, c: a * h * h + k };
}
