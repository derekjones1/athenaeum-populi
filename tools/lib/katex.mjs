/**
 * The one KaTeX the Node-side gates render with.
 *
 * The site's math is typeset at build time by Hugo's embedded KaTeX
 * (layouts/_markup/render-passthrough.html), and that renderer ships the
 * mhchem extension: `\ce{2H2 + O2 -> 2H2O}` and `\pu{1.83 g/mL}` typeset
 * there with nothing to load. The npm `katex` package is the same 0.16.22
 * engine WITHOUT the extension until `katex/contrib/mhchem` is imported, so
 * a gate that imported `katex` directly called every chemical equation an
 * "Undefined control sequence" while the production build rendered it — the
 * gate and the build disagreeing about the same text. `lint-all` and
 * `verify-section` each had their own import; both now take this one, so the
 * extension set is stated once.
 *
 * mhchem registers its macros on the shared `katex` module as a side effect
 * of the import, so the order of the two lines below matters.
 */
import katex from 'katex';
import 'katex/contrib/mhchem';

/**
 * Render one math span exactly as the gates judge it: a parse error throws,
 * and `strict: 'ignore'` silences the benign "unknown symbol" warnings (an
 * em dash inside a money-dollar span). Returns the HTML string; callers that
 * only want the verdict wrap it in try/catch.
 */
export function renderMath(tex, { display = false } = {}) {
  return katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: 'ignore' });
}
