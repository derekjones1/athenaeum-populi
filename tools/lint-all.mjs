/**
 * Repo-wide content lint (Hugo edition) — replaces the old check-math.mjs.
 * No MDX deps: `hugo` is the compile check; this focuses on what a build
 * won't catch cheaply — the mechanical lints and KaTeX render errors.
 *
 * For every content Markdown file:
 *   - run the mechanical lints (tools/lints.mjs)
 *   - render every $…$ / $$…$$ math run with KaTeX (throwOnError) so bad LaTeX
 *     is caught here instead of shipping as a red error box
 *
 * A `--check-docs` flag lived here while the Practice retrofit ran, asserting
 * the published backlog count against the corpus. The retrofit finished on
 * August 9, 2026, the lint rule became an error, and the published count was
 * deleted with it — so the flag is gone and `npm run lint` takes no flags.
 *
 * Exit non-zero on any error. Run via `npm run lint`.
 */
import { readFileSync } from 'node:fs';
import katex from 'katex';
import { lintHugo } from './lints.mjs';
import { mathSpans, walkMarkdown } from './lib-content.mjs';

const args = process.argv.slice(2);
const root = args.find((a) => !a.startsWith('--')) || 'content';

let errors = 0, warns = 0, files = 0;
for (const f of walkMarkdown(root)) {
  files++;
  const src = readFileSync(f, 'utf8');
  const { errors: le, warnings: lw } = lintHugo(src, f);
  for (const e of le) { errors++; console.log(`LINT  ${f} ${e}`); }
  for (const w of lw) { warns++; console.log(`warn  ${f} ${w}`); }
  for (const { tex, display } of mathSpans(src, { maskCode: true })) {
    // throwOnError catches real parse errors; strict:'ignore' silences benign
    // "unknown symbol" warnings (e.g. an em-dash inside a money-dollar span).
    try { katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: 'ignore' }); }
    catch (e) { errors++; console.log(`KATEX ${f}: ${JSON.stringify(tex.slice(0, 50))} — ${e.message.slice(0, 80)}`); }
  }
}
console.log(`\n${files} files. ${errors} error(s), ${warns} warning(s).`);

if (errors) {
  console.error(`✖ content lint failed: ${errors} error(s) across ${files} file(s)`);
  process.exit(1);
}
// A success banner in the same shape as the other gates, so "no output after
// the counts" is never mistaken for "the tool did not run".
console.log(`✓ content lint: ${files} files, 0 errors, ${warns} warning(s)`);
