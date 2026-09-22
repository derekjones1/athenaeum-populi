import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// alt-pass-packets.py drives the figure-alt pass (docs/briefs/alt-pass/):
// one packet per chapter, one line per `mediafigure`. It runs against the
// real tree because its whole job is to agree with the media manifest and
// the source map; a figure it silently dropped would never be re-read.

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'alt-pass-packets.py');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

function build(book) {
  const out = mkdtempSync(path.join(tmpdir(), 'alt-pass-'));
  const log = execFileSync('python3', [SCRIPT, book, out], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  return { out, log };
}

function countTags(book) {
  const base = path.join(ROOT, 'content', 'life-health-sciences', book);
  let n = 0;
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith('.md') && /^\d\d-/.test(path.basename(path.dirname(p))))
        n += (readFileSync(p, 'utf8').match(/\{\{<\s*mediafigure\s/g) || []).length;
    }
  };
  walk(base);
  return n;
}

for (const book of ['biology', 'microbiology']) {
  test(`${book}: every mediafigure in a chapter directory lands in exactly one packet line`, () => {
    const { out, log } = build(book);
    try {
      const packets = readdirSync(out).filter((f) => /^packet-\d\d\.md$/.test(f));
      const lines = packets.flatMap((f) => readFileSync(path.join(out, f), 'utf8').split('\n').filter((l) => l.startsWith('- `content/')));
      assert.equal(lines.length, countTags(book));
      assert.match(log, new RegExp(`total ${lines.length}$`, 'm'));
      for (const l of lines) assert.match(l, /^- `content\/[^`]+:\d+` — image `static\/media\/[^`]+` — module m\d+/);
      assert.match(readFileSync(path.join(out, packets[0]), 'utf8'), /`\{\{< mediafigure \.\.\. >\}\}`/);
    } finally {
      rmSync(out, { recursive: true, force: true });
    }
  });
}
