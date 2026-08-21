/**
 * graphplot-engine — the geometry/grading deps for <graph-plot> AND the
 * static-figure renderer for <ap-figure>, built as their own bundle and
 * loaded at runtime only on pages that contain either. Lighter than the
 * FillIn engine: geometry + grader, NO MathLive / Compute Engine.
 */
export { buildGraph, buildNumberLine, buildFigure } from './lib/graph-core.mjs';
export { checkGraphPlot, correctAsymptoteCount, correctPointCount, parabolaThrough } from './lib/check-graph.mjs';
