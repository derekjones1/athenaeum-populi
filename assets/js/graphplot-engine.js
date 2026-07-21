/**
 * graphplot-engine — the deps for <graph-plot>, built as their own bundle and
 * loaded at runtime only on pages with a GraphPlot. Lighter than the FillIn
 * engine: geometry + grader, NO MathLive / Compute Engine.
 */
export { buildGraph } from './lib/graph-core.mjs';
export { checkGraphPlot } from './lib/check-graph.mjs';
