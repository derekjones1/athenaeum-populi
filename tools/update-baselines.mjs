/**
 * Recount the two published quality baselines and rewrite them in place.
 *
 * The floors are deliberately dumb numbers — a self-updating gate is a gate
 * that cannot fire. So the CHECKS stay dumb (`verify-answers --min-verified`,
 * `lint-all --check-docs`) and this tool is the one sanctioned way to move
 * them: run it at the END of an authoring session and commit what it rewrote
 * together with the content that moved the numbers.
 *
 * It recomputes reality (a full lint walk for the Practice backlog, a real
 * `verify-answers` run for the verified count), then rewrites:
 *   - package.json          `--min-verified <verified>`
 *   - AGENTS.md             the backlog count
 *   - docs/authoring-playbook.md §5   backlog count, per-book split, as-of
 *                           date, and the "N of the M mapped sections" figures
 *
 * Direction guards, because a baseline moving the wrong way is a finding, not
 * an update: the verified count may only rise (`--allow-decrease` to
 * acknowledge a deliberate drop) and the backlog may only shrink
 * (`--allow-increase` to acknowledge new sections joining the worklist).
 *
 * Usage: node tools/update-baselines.mjs [content-root]
 *          [--dry-run] [--allow-decrease] [--allow-increase]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { lintHugo } from './lints.mjs';
import { walkMarkdown } from './lib-content.mjs';
import {
  PRACTICE_BACKLOG_DOCS,
  applyBacklogCount,
  applyMinVerified,
  applyPlaybookDetail,
  readBacklogCount,
  readMinVerified,
  readPlaybookDetail,
} from './baselines.mjs';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const root = args.find((a) => !a.startsWith('--')) || 'content';
const dryRun = flags.has('--dry-run');

/* ---- 1. the verified count, from the real tool, concurrently ------------ */

const verifyRun = new Promise((resolve, reject) => {
  const child = spawn(process.execPath, ['tools/verify-answers.mjs', root]);
  let out = '';
  let err = '';
  child.stdout.on('data', (d) => { out += d; });
  child.stderr.on('data', (d) => { err += d; });
  child.on('error', reject);
  child.on('close', (code) => resolve({ code, out, err }));
});

/* ---- 2. the Practice backlog, from the same walk the lint does ---------- */

const byBook = new Map();
let backlog = 0;
for (const file of walkMarkdown(root)) {
  const { warnings } = lintHugo(readFileSync(file, 'utf8'), file);
  for (const warning of warnings) {
    if (!warning.includes('no `## Practice` block')) continue;
    backlog += 1;
    const segments = file.split('/');
    const book = segments[segments.indexOf('math') + 1] ?? segments[1] ?? 'unknown';
    byBook.set(book, (byBook.get(book) ?? 0) + 1);
  }
}

const { code, out, err } = await verifyRun;
if (code !== 0) {
  console.error('✖ verify-answers failed — fix its failures before moving any baseline');
  process.stderr.write(err);
  process.exit(1);
}
const verifiedMatch = out.match(/(\d+)\/\d+ fill-ins mathematically verified/);
if (!verifiedMatch) {
  console.error('✖ could not read the verified count from verify-answers output');
  process.exit(1);
}
const verified = Number(verifiedMatch[1]);

/* ---- 3. current state and guards ---------------------------------------- */

const pkgText = readFileSync('package.json', 'utf8');
const currentFloor = readMinVerified(pkgText);
const map = JSON.parse(readFileSync('data/openstax/math-source-map.json', 'utf8'));
const mapped = Array.isArray(map.sections) ? map.sections.length : Object.keys(map.sections).length;

const docTexts = PRACTICE_BACKLOG_DOCS.map(([path, pattern]) => (
  { path, pattern, text: readFileSync(path, 'utf8') }
));
const currentBacklog = readBacklogCount(docTexts[0].text, docTexts[0].pattern);
const detail = readPlaybookDetail(docTexts[1].text);
const books = [...byBook.entries()].sort(([a], [b]) => a.localeCompare(b));
const booksLine = books.map(([name, count]) => `${name} ${count}`).join(', ');

if (backlog === 0) {
  console.error('✖ the Practice backlog is 0 — this is not an update, it is the finish line:');
  console.error('  promote the rule to an error and delete playbook §5, per the section itself.');
  process.exit(1);
}
if (verified < currentFloor && !flags.has('--allow-decrease')) {
  console.error(`✖ verified count fell: ${currentFloor} → ${verified}. That is coverage shrinking, not growth.`);
  console.error('  Investigate first; rerun with --allow-decrease only if the drop is deliberate.');
  process.exit(1);
}
if (backlog > currentBacklog && !flags.has('--allow-increase')) {
  console.error(`✖ the Practice backlog grew: ${currentBacklog} → ${backlog}. New sections joined the worklist.`);
  console.error('  Rerun with --allow-increase to acknowledge it deliberately.');
  process.exit(1);
}

const unchanged = verified === currentFloor
  && docTexts.every(({ text, pattern }) => readBacklogCount(text, pattern) === backlog)
  && detail.carried === mapped - backlog
  && detail.mapped === mapped
  && detail.books === booksLine;
if (unchanged) {
  console.log(`✓ baselines already current: floor ${currentFloor}, backlog ${backlog} (${booksLine})`);
  process.exit(0);
}

/* ---- 4. rewrite ---------------------------------------------------------- */

const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
const changes = [];

if (verified !== currentFloor) {
  changes.push(['package.json', applyMinVerified(pkgText, verified),
    `--min-verified ${currentFloor} → ${verified}`]);
}
for (const { path, pattern, text } of docTexts) {
  let next = applyBacklogCount(text, pattern, backlog);
  if (path === 'docs/authoring-playbook.md') {
    next = applyPlaybookDetail(next, { byBook: books, date, carried: mapped - backlog, mapped });
  }
  if (next !== text) {
    changes.push([path, next, `Practice backlog → ${backlog} (${booksLine}; as of ${date})`]);
  }
}

for (const [path, next, summary] of changes) {
  if (!dryRun) writeFileSync(path, next);
  console.log(`${dryRun ? 'would rewrite' : 'rewrote'} ${path}: ${summary}`);
}
console.log(dryRun
  ? '── dry run: nothing written.'
  : '── commit these rewrites together with the content that moved the numbers.');
if (booksLine !== detail.books || backlog !== currentBacklog) {
  console.log('note: §5’s narrative details (chapter spread, exercise-minimum sum) are prose —');
  console.log('      give them a read when the shape of the worklist changes.');
}
