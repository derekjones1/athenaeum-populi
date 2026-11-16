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

/**
 * The characters inside `\text{…}` (and `\textrm`, `\mathrm`, `\textbf`,
 * `\textit`) that KaTeX's strict mode refuses — the build's mode: Hugo's
 * `transform.ToMath` renders with `strict: 'error'`, the gates above with
 * `'ignore'`. 7.5's `D_\text{C≡O}` passed `verify-section` and broke the
 * site build. Each text group is rendered alone under strict mode, so a
 * dollar pair the gates read as math that the build does not (an em dash
 * between two money amounts in a graph's JSON) is not judged here. Returns
 * `[{ group, character }]`.
 */
export function strictTextProblems(tex) {
  const problems = [];
  for (const match of String(tex).matchAll(/\\(?:text|textrm|mathrm|textbf|textit)\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g)) {
    try {
      katex.renderToString(`\\text{${match[1]}}`, { throwOnError: true, strict: 'error' });
    } catch (error) {
      const character = /Unicode character "(.)"/u.exec(error.message)?.[1];
      if (character) problems.push({ group: match[0], character });
    }
  }
  return problems;
}
