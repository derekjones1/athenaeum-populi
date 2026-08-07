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
 * With `--check-docs` (how `npm run lint` runs it) the Practice-backlog
 * warning count is also asserted against the two documents that publish it.
 * Only this tool has walked the corpus, so only this tool can tell whether the
 * published number is still true — a doc test can compare the documents to each
 * other, but not to reality.
 *
 * Exit non-zero on any error. Run via `npm run lint`.
 */
import { readFileSync } from 'node:fs';
import katex from 'katex';
import { lintHugo } from './lints.mjs';
import { mathSpans, walkMarkdown } from './lib-content.mjs';
import { PRACTICE_BACKLOG_DOCS } from './baselines.mjs';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const root = args.find((a) => !a.startsWith('--')) || 'content';

let errors = 0, warns = 0, files = 0, practiceBacklog = 0;
for (const f of walkMarkdown(root)) {
  files++;
  const src = readFileSync(f, 'utf8');
  const { errors: le, warnings: lw } = lintHugo(src, f);
  for (const e of le) { errors++; console.log(`LINT  ${f} ${e}`); }
  for (const w of lw) {
    warns++;
    // Counted by category rather than as "the warning total", so that adding a
    // second warning category later cannot silently corrupt the published
    // backlog figure.
    if (w.includes('no `## Practice` block')) practiceBacklog++;
    console.log(`warn  ${f} ${w}`);
  }
  for (const { tex, display } of mathSpans(src, { maskCode: true })) {
    // throwOnError catches real parse errors; strict:'ignore' silences benign
    // "unknown symbol" warnings (e.g. an em-dash inside a money-dollar span).
    try { katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: 'ignore' }); }
    catch (e) { errors++; console.log(`KATEX ${f}: ${JSON.stringify(tex.slice(0, 50))} — ${e.message.slice(0, 80)}`); }
  }
}
console.log(`\n${files} files. ${errors} error(s), ${warns} warning(s).`);

// The Practice-block retrofit is the one non-blocking rule in the repository,
// and two documents publish its remaining count as a worklist. The count is
// only knowable from a full corpus walk, so this is where it is checked: a
// document test can prove AGENTS.md and the playbook agree with each other, but
// only the lint can prove they agree with the content. The patterns live in
// tools/baselines.mjs, shared with `npm run baseline:update` — the sanctioned
// way to move these numbers — so the check and the rewrite cannot drift apart.
if (flags.has('--check-docs')) {
  for (const [path, pattern] of PRACTICE_BACKLOG_DOCS) {
    const text = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
    const match = text.match(pattern);
    if (!match) {
      errors++;
      console.log(`DOCS  ${path}: the Practice-backlog sentence no longer matches ${pattern} — the lint can no longer check it (update tools/baselines.mjs alongside the rephrase)`);
      continue;
    }
    if (Number(match[1]) !== practiceBacklog) {
      errors++;
      console.log(`DOCS  ${path}: states ${match[1]} sections missing a \`## Practice\` block; the lint counts ${practiceBacklog} — run \`npm run baseline:update\` and commit the rewrite`);
    }
  }
}

if (errors) {
  console.error(`✖ content lint failed: ${errors} error(s) across ${files} file(s)`);
  process.exit(1);
}
// A success banner in the same shape as the other gates, so "no output after
// the counts" is never mistaken for "the tool did not run".
console.log(`✓ content lint: ${files} files, 0 errors, ${warns} warning(s)`);
