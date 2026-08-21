import assert from 'node:assert/strict';
import test from 'node:test';
import { parseLedgerArgs, shardSlice } from './lib-ledger.mjs';

const OPTS = {
  commands: ['candidates', 'list', 'merge'],
  valueFlags: ['verdict', 'shard'],
  boolFlags: ['unverified'],
};

test('a flag VALUE is never mistaken for the optional positional root', () => {
  // `candidates --shard 1/4` filtered out only tokens beginning with `--`, so
  // '1/4' became positional[0] and therefore the content root: the run died on
  // `ENOENT: scandir '1/4'`, a path the caller never typed, for an argument
  // documented as optional. The same class of defect verify-replay.test.mjs
  // records as having shipped once already.
  for (const argv of [['candidates', '--shard', '1/4'], ['candidates', '--shard=1/4']]) {
    const cli = parseLedgerArgs(argv, OPTS);
    assert.deepEqual(cli.positional, [], argv.join(' '));
    assert.equal(cli.flag('shard'), '1/4', argv.join(' '));
  }
  // An explicit root still reaches positional, before or after the flag.
  assert.deepEqual(parseLedgerArgs(['candidates', 'content', '--shard', '1/4'], OPTS).positional, ['content']);
  assert.deepEqual(parseLedgerArgs(['candidates', '--shard', '1/4', 'content'], OPTS).positional, ['content']);
});

test('boolean flags take no value, and unknown flags are refused outright', () => {
  const cli = parseLedgerArgs(['list', 'content', '--unverified'], OPTS);
  assert.equal(cli.bool('unverified'), true);
  assert.deepEqual(cli.positional, ['content'], 'a boolean flag does not swallow the next token');
  assert.equal(cli.flag('verdict'), null);

  // A misspelled flag must not look like a clean empty result.
  assert.throws(() => parseLedgerArgs(['list', '--verdcit', 'convert'], OPTS), /unknown flag --verdcit/);
  assert.throws(() => parseLedgerArgs(['list', '--shard'], OPTS), /--shard needs a value/);
  assert.throws(() => parseLedgerArgs(['list', '--shard', '--verdict'], OPTS), /--shard needs a value/);
  assert.throws(() => parseLedgerArgs(['nope'], OPTS), /command must be one of/);
  assert.throws(() => parseLedgerArgs([], OPTS), /command must be one of/);
});

test('--ledger is accepted by every command, so a caller can name its own file', () => {
  assert.equal(parseLedgerArgs(['merge', 'results', '--ledger', '/tmp/l.json'], OPTS).flag('ledger'), '/tmp/l.json');
  assert.deepEqual(parseLedgerArgs(['merge', 'results', '--ledger', '/tmp/l.json'], OPTS).positional, ['results']);
});

test('shardSlice covers every item exactly once and rejects a bad spec', () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const shards = ['1/3', '2/3', '3/3'].map((spec) => shardSlice(items, spec));
  assert.deepEqual(shards.flat(), items, 'the shards partition the list in order');
  for (const spec of ['0/3', '4/3', 'x/3', '1/', '1']) {
    assert.throws(() => shardSlice(items, spec), /--shard must be/, spec);
  }
});
