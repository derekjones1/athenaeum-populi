/*
 * Athenaeum Populi — interactive Web Components entry point.
 *
 * This is the single esbuild entry (bundled by Hugo Pipes js.Build, ESM +
 * code-splitting). Each component registers its own custom element. Heavy,
 * page-specific deps (MathLive, the Compute Engine grader) are DYNAMICALLY
 * imported inside the components, so esbuild splits them into lazy chunks that
 * never touch this shared bundle.
 */
import './components/math/fill-in.js';
import './components/shared/multiple-choice.js';
import './components/math/graph-plot.js';
import './components/math/ap-figure.js';
import './components/text/text-in.js';
import './components/text/self-check.js';
import './components/text/sort-bins.js';
// Site chrome (not a component): folds the sticky navbar down while reading.
import './navbar-compact.js';
