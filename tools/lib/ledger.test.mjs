import assert from 'node:assert/strict';
import test from 'node:test';
import { shardSlice } from './ledger.mjs';

test('shardSlice covers every item exactly once and rejects a bad spec', () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const shards = ['1/3', '2/3', '3/3'].map((spec) => shardSlice(items, spec));
  assert.deepEqual(shards.flat(), items, 'the shards partition the list in order');
  for (const spec of ['0/3', '4/3', 'x/3', '1/', '1']) {
    assert.throws(() => shardSlice(items, spec), /--shard must be/, spec);
  }
});
