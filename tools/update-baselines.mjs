/**
 * Recount the published quality baselines and rewrite them in place.
 *
 * The floors are deliberately dumb numbers — a self-updating gate is a gate
 * that cannot fire. So the CHECKS stay dumb (`verify-answers --min-verified`,
 * `verify-replay --min-replayed`) and this tool is the one sanctioned way to
 * move them: run it at the END of an authoring session and commit what it
 * rewrote together with the content that moved the numbers.
 *
 * It recomputes reality — a real `verify-answers` run, a real `verify-replay`
 * run, and a real `answer-ledger check` run — then rewrites every moved
 * number in package.json.
 *
 * EVERY tool is run, and every number is considered, every time. The
 * previous version exited 0 the moment `--min-verified` was unchanged, which
 * is the NORMAL end-of-session case, so anything appended after that point
 * would never have executed; it also never invoked the replay tool at all.
 * Structure follows from that: measure all of them, guard each independently,
 * exit "already current" only when NONE moved, and write once.
 *
 * Direction guards, because a baseline moving the wrong way is a finding, not
 * an update: neither count may fall (`--allow-decrease` to acknowledge a
 * deliberate drop). The two guards are separate — a legitimate drop in one is
 * not permission to lose the other silently.
 *
 * Until August 9, 2026 this tool also recounted the Practice-retrofit backlog
 * and rewrote it into AGENTS.md and playbook §5. That backlog reached zero
 * when the last mapped section landed its block; the lint rule is now an
 * error, so there is no count left to publish and no worklist to track.
 *
 * Usage: node tools/update-baselines.mjs [content-root]
 *          [--dry-run] [--allow-decrease]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { BASELINE_SOURCES, planBaselineUpdate } from './baselines.mjs';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const root = args.find((a) => !a.startsWith('--')) || 'content';
const dryRun = flags.has('--dry-run');
const allowDecrease = flags.has('--allow-decrease');

const run = (argv) => new Promise((resolve, reject) => {
  const child = spawn(process.execPath, argv);
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (d) => { stdout += d; });
  child.stderr.on('data', (d) => { stderr += d; });
  child.on('error', reject);
  child.on('close', (code) => resolve({ code, out: stdout, err: stderr }));
});

/**
 * The count a tool printed, or a loud failure. Both tools print their count
 * ONLY on the success path, so a failed run has no number to read and must
 * never be parsed for one — reporting "could not read the count" for a run
 * that actually failed its own gate would send the reader looking in the
 * wrong place.
 */
function countFrom({ code, out, err }, { label, pattern }) {
  if (code !== 0) {
    console.error(`✖ ${label} failed — fix its failures before moving the baseline`);
    process.stderr.write(err || out);
    process.exit(1);
  }
  const match = out.match(pattern);
  if (!match) {
    console.error(`✖ could not read the count from ${label} output (it printed no ${pattern})`);
    process.stderr.write(out);
    process.exit(1);
  }
  return Number(match[1]);
}

/* ---- 1. reality, from the real tools ------------------------------------- */

// Both tools are run before anything is decided, so a failure in either is
// reported against its own tool rather than hidden behind an early exit.
// Sequentially: each tool fans out across the machine's cores on its own, so
// running them at once would oversubscribe rather than finish sooner.
const measurements = {};
for (const source of BASELINE_SOURCES) {
  measurements[source.name] = countFrom(await run([source.tool, ...(source.args ?? []), root]), source);
}

/* ---- 2. current state and guards ----------------------------------------- */

const pkgText = readFileSync('package.json', 'utf8');
const { baselines, moved, dropped, rewritten } = planBaselineUpdate(pkgText, measurements);

if (dropped.length && !allowDecrease) {
  for (const baseline of dropped) {
    console.error(`✖ ${baseline.fell}: ${baseline.current} → ${baseline.measured}. ${baseline.why}`);
  }
  console.error('  Investigate first; rerun with --allow-decrease only if the drop is deliberate.');
  process.exit(1);
}

if (moved.length === 0) {
  const state = baselines.map(({ name, measured }) => `${name} ${measured}`).join(', ');
  console.log(`✓ baselines already current: ${state}`);
  process.exit(0);
}

/* ---- 3. rewrite, once ---------------------------------------------------- */

if (!dryRun) writeFileSync('package.json', rewritten);
for (const { name, current, measured } of moved) {
  console.log(`${dryRun ? 'would rewrite' : 'rewrote'} package.json: ${name} ${current} → ${measured}`);
}
console.log(dryRun
  ? '── dry run: nothing written.'
  : '── commit this rewrite together with the content that moved the numbers.');
