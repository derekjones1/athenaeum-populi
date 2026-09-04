import assert from 'node:assert/strict';
import test from 'node:test';
import { integerFlag, parseCliArgs } from './cli.mjs';

const LEDGER = {
  commands: ['candidates', 'list', 'merge'],
  valueFlags: ['verdict', 'shard', 'ledger'],
  boolFlags: ['unverified'],
};
const ROOTED = { valueFlags: ['min-verified'], positional: { max: 1, name: 'content root' } };

test('a flag VALUE is never mistaken for the optional positional root', () => {
  // `candidates --shard 1/4` once filtered out only tokens beginning with
  // `--`, so '1/4' became positional[0] and therefore the content root: the
  // run died on `ENOENT: scandir '1/4'`, a path the caller never typed.
  for (const argv of [['candidates', '--shard', '1/4'], ['candidates', '--shard=1/4']]) {
    const cli = parseCliArgs(argv, LEDGER);
    assert.deepEqual(cli.positional, [], argv.join(' '));
    assert.equal(cli.flag('shard'), '1/4', argv.join(' '));
  }
  // An explicit root still reaches positional, before or after the flag.
  assert.deepEqual(parseCliArgs(['candidates', 'content', '--shard', '1/4'], LEDGER).positional, ['content']);
  assert.deepEqual(parseCliArgs(['candidates', '--shard', '1/4', 'content'], LEDGER).positional, ['content']);
  // The verify-answers shape of the same bug: `--min-verified 3160` with no
  // root made `3160` the content root.
  const cli = parseCliArgs(['--min-verified', '3160'], ROOTED);
  assert.deepEqual(cli.positional, []);
  assert.equal(integerFlag(cli, 'min-verified'), 3160);
});

test('boolean flags take no value, and unknown flags are refused outright', () => {
  const cli = parseCliArgs(['list', 'content', '--unverified'], LEDGER);
  assert.equal(cli.bool('unverified'), true);
  assert.deepEqual(cli.positional, ['content'], 'a boolean flag does not swallow the next token');
  assert.equal(cli.flag('verdict'), null);

  // A misspelled flag must not look like a clean empty result — or a
  // disabled ratchet.
  assert.throws(() => parseCliArgs(['list', '--verdcit', 'convert'], LEDGER), /unknown flag --verdcit/);
  assert.throws(() => parseCliArgs(['content', '--min-verifed', '3160'], ROOTED), /unknown flag --min-verifed/);
  assert.throws(() => parseCliArgs(['--bogus-flag'], ROOTED), /unknown flag --bogus-flag/);
  assert.throws(() => parseCliArgs(['list', '--shard'], LEDGER), /--shard needs a value/);
  assert.throws(() => parseCliArgs(['list', '--shard', '--verdict'], LEDGER), /--shard needs a value/);
  assert.throws(() => parseCliArgs(['nope'], LEDGER), /command must be one of/);
  assert.throws(() => parseCliArgs([], LEDGER), /command must be one of/);
});

test('a bounded positional refuses a second root and names the first', () => {
  assert.throws(
    () => parseCliArgs(['content', 'public'], ROOTED),
    /unexpected argument "public" \(the content root is already "content"\)/,
  );
  // Unbounded by default: the section verifier takes any number of files.
  assert.deepEqual(parseCliArgs(['a.md', 'b.md', 'c.md']).positional, ['a.md', 'b.md', 'c.md']);
});

test('--ledger is an ordinary value flag, so a caller can name its own file', () => {
  const cli = parseCliArgs(['merge', 'results', '--ledger', '/tmp/l.json'], LEDGER);
  assert.equal(cli.flag('ledger'), '/tmp/l.json');
  assert.deepEqual(cli.positional, ['results']);
});

test('integerFlag distinguishes an absent floor from a zero floor and refuses a non-number', () => {
  assert.equal(integerFlag(parseCliArgs([], ROOTED), 'min-verified'), null);
  assert.equal(integerFlag(parseCliArgs(['--min-verified=0'], ROOTED), 'min-verified'), 0);
  assert.throws(
    () => integerFlag(parseCliArgs(['--min-verified', 'ten'], ROOTED), 'min-verified'),
    /--min-verified needs a whole number, got "ten"/,
  );
});
