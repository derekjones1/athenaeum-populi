/**
 * Recount the published quality baseline and rewrite it in place.
 *
 * The floor is deliberately a dumb number — a self-updating gate is a gate
 * that cannot fire. So the CHECK stays dumb (`verify-answers --min-verified`)
 * and this tool is the one sanctioned way to move it: run it at the END of an
 * authoring session and commit what it rewrote together with the content that
 * moved the number.
 *
 * It recomputes reality (a real `verify-answers` run), then rewrites
 * package.json's `--min-verified <verified>`.
 *
 * Direction guard, because a baseline moving the wrong way is a finding, not
 * an update: the verified count may only rise (`--allow-decrease` to
 * acknowledge a deliberate drop).
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
import { applyMinVerified, readMinVerified } from './baselines.mjs';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const root = args.find((a) => !a.startsWith('--')) || 'content';
const dryRun = flags.has('--dry-run');

/* ---- 1. the verified count, from the real tool -------------------------- */

const { code, out, err } = await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, ['tools/verify-answers.mjs', root]);
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (d) => { stdout += d; });
  child.stderr.on('data', (d) => { stderr += d; });
  child.on('error', reject);
  child.on('close', (exit) => resolve({ code: exit, out: stdout, err: stderr }));
});
if (code !== 0) {
  console.error('✖ verify-answers failed — fix its failures before moving the baseline');
  process.stderr.write(err);
  process.exit(1);
}
const verifiedMatch = out.match(/(\d+)\/\d+ fill-ins mathematically verified/);
if (!verifiedMatch) {
  console.error('✖ could not read the verified count from verify-answers output');
  process.exit(1);
}
const verified = Number(verifiedMatch[1]);

/* ---- 2. current state and guard ----------------------------------------- */

const pkgText = readFileSync('package.json', 'utf8');
const currentFloor = readMinVerified(pkgText);

if (verified < currentFloor && !flags.has('--allow-decrease')) {
  console.error(`✖ verified count fell: ${currentFloor} → ${verified}. That is coverage shrinking, not growth.`);
  console.error('  Investigate first; rerun with --allow-decrease only if the drop is deliberate.');
  process.exit(1);
}
if (verified === currentFloor) {
  console.log(`✓ baseline already current: floor ${currentFloor}`);
  process.exit(0);
}

/* ---- 3. rewrite ---------------------------------------------------------- */

if (!dryRun) writeFileSync('package.json', applyMinVerified(pkgText, verified));
console.log(`${dryRun ? 'would rewrite' : 'rewrote'} package.json: --min-verified ${currentFloor} → ${verified}`);
console.log(dryRun
  ? '── dry run: nothing written.'
  : '── commit this rewrite together with the content that moved the number.');
