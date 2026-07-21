/**
 * fillin-engine — the heavy, page-specific dependencies for <fill-in>,
 * built as their OWN bundle (separate from the shared components entry) and
 * loaded on demand at runtime. Keeps MathLive + the Compute Engine grader
 * (~1.9 MB) off every page that doesn't use a FillIn, exactly like the old
 * site's lazy dynamic import.
 *
 * Importing `mathlive` here registers the <math-field> custom element as a
 * side effect, so simply loading this module makes the field available.
 */
export * as mathlive from 'mathlive';
export { checkAnswer, ce } from './lib/check-answer.mjs';
