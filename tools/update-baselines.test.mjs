import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  PRACTICE_BACKLOG_DOCS,
  applyBacklogCount,
  applyMinVerified,
  applyPlaybookDetail,
  readBacklogCount,
  readMinVerified,
  readPlaybookDetail,
} from './baselines.mjs';

// Fixtures are verbatim slices of the real files, so a test failure here means
// the real prose and the shared patterns have genuinely diverged.
const AGENTS_FIXTURE = 'Every authoring rule in the content lint is an error except one: the 56\n'
  + 'sections still missing a `## Practice` block, which is an authoring programme\n';
const PLAYBOOK_FIXTURE = '`npm run lint` reports **zero errors and one warning category**: the 56\n'
  + 'sections with no `## Practice` block (intermediate-algebra 45, precalculus 11,\n'
  + 'as of August 6, 2026). 156 of the 212 mapped sections now carry the block:\n';
const PACKAGE_FIXTURE = '"verify:answers": "node tools/verify-answers.mjs content --min-verified 2587",';

test('the AGENTS backlog count rewrites in place, preserving the line wrap', () => {
  const [, agentsPattern] = PRACTICE_BACKLOG_DOCS[0];
  const next = applyBacklogCount(AGENTS_FIXTURE, agentsPattern, 41);
  assert.match(next, /except one: the 41\nsections still missing/);
  assert.equal(readBacklogCount(next, agentsPattern), 41);
});

test('the playbook backlog count rewrites through its own pattern', () => {
  const [, playbookPattern] = PRACTICE_BACKLOG_DOCS[1];
  const next = applyBacklogCount(PLAYBOOK_FIXTURE, playbookPattern, 41);
  assert.match(next, /one warning category\*\*: the 41\nsections/);
});

test('the playbook detail sentence rewrites books, date, and derived figures', () => {
  const next = applyPlaybookDetail(PLAYBOOK_FIXTURE, {
    byBook: [['intermediate-algebra', 30], ['precalculus', 11]],
    date: 'September 1, 2026',
    carried: 171,
    mapped: 212,
  });
  assert.match(next, /\(intermediate-algebra 30, precalculus 11,\s+as of September 1, 2026\)/);
  assert.match(next, /171 of the 212 mapped sections now carry the block/);
});

test('a single remaining book still matches and rewrites', () => {
  const single = PLAYBOOK_FIXTURE.replace(
    'intermediate-algebra 45, precalculus 11,\nas of',
    'precalculus 11,\nas of',
  );
  const next = applyPlaybookDetail(single, {
    byBook: [['precalculus', 4]], date: 'October 2, 2026', carried: 208, mapped: 212,
  });
  assert.match(next, /\(precalculus 4,\s+as of October 2, 2026\)/);
});

test('readPlaybookDetail reports the current published values', () => {
  const detail = readPlaybookDetail(PLAYBOOK_FIXTURE);
  assert.deepEqual(detail, {
    books: 'intermediate-algebra 45, precalculus 11',
    date: 'August 6, 2026',
    carried: 156,
    mapped: 212,
  });
});

test('the min-verified floor reads and rewrites', () => {
  assert.equal(readMinVerified(PACKAGE_FIXTURE), 2587);
  const next = applyMinVerified(PACKAGE_FIXTURE, 2701);
  assert.match(next, /--min-verified 2701/);
  assert.doesNotMatch(next, /2587/);
});

test('a rephrased sentence fails loud instead of being skipped', () => {
  const [, agentsPattern] = PRACTICE_BACKLOG_DOCS[0];
  assert.throws(() => applyBacklogCount('the worklist has 56 entries', agentsPattern), /no longer matches/);
  assert.throws(() => applyPlaybookDetail('rewritten prose', {
    byBook: [], date: '', carried: 0, mapped: 0,
  }), /no longer matches/);
  assert.throws(() => applyMinVerified('"verify:answers": "node tools/verify-answers.mjs content"', 1), /no longer carries/);
});

test('the live files still match the shared patterns', () => {
  // The fixtures above are copies; this pins the patterns to the real prose so
  // a rewrite of AGENTS.md or the playbook cannot silently detach the gate.
  for (const [path, pattern] of PRACTICE_BACKLOG_DOCS) {
    const text = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
    assert.ok(pattern.test(text), `${path} still matches its baseline pattern`);
  }
});
