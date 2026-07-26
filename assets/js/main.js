/*
 * Athenaeum Populi — interactive Web Components entry point.
 *
 * This is the single esbuild entry (bundled by Hugo Pipes js.Build, ESM +
 * code-splitting). Each component registers its own custom element. Heavy,
 * page-specific deps (MathLive, the Compute Engine grader) are DYNAMICALLY
 * imported inside the components, so esbuild splits them into lazy chunks that
 * never touch this shared bundle.
 */
import './components/fill-in.js';
import './components/multiple-choice.js';
import './components/graph-plot.js';
