import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkSortbins, parseSortbinsConfig } from './check-sortbins.mjs';

// A valid, interleaved two-bin config used throughout. 6 items, runs = 6.
const GOOD = JSON.stringify({
  bins: ['Prokaryotes', 'Eukaryotes'],
  items: [
    { label: 'Single origin of replication', bin: 0 },
    { label: 'Telomerase present', bin: 1 },
    { label: 'DNA pol III elongates strands', bin: 0 },
    { label: 'PCNA sliding clamp', bin: 1 },
    { label: 'RNA primers removed by DNA pol I', bin: 0 },
    { label: 'About 14 DNA polymerase types', bin: 1 },
  ],
});

test('parseSortbinsConfig accepts a valid interleaved config and copies it', () => {
  const config = parseSortbinsConfig(GOOD);
  assert.equal(config.bins.length, 2);
  assert.equal(config.items.length, 6);
  assert.deepEqual(config.items[1], { label: 'Telomerase present', bin: 1 });
});

test('parseSortbinsConfig names structural defects', () => {
  const bad = [
    ['not json {', /not valid JSON/],
    ['[]', /must be a JSON object/],
    [JSON.stringify({ bins: ['A', 'B'], items: [], extra: 1 }), /unknown key/],
    [JSON.stringify({ bins: ['A'], items: [] }), /2–4 labels/],
    [JSON.stringify({ bins: ['A', 'B', 'C', 'D', 'E'], items: [] }), /2–4 labels/],
    [JSON.stringify({ bins: ['A', ' '], items: [] }), /bin 1 must be a non-empty string/],
    [JSON.stringify({ bins: ['A', 'a '], items: [] }), /bin labels must be unique/],
    [JSON.stringify({ bins: ['A', 'B'], items: [{ label: 'x', bin: 0 }] }), /4–12/],
    [JSON.stringify({
      bins: ['A', 'B'],
      items: [{ label: 'w', bin: 0 }, { label: 'x', bin: 1 }, { label: 'y', bin: 0 }, { label: 'z', bin: 2 }],
    }), /integer index into "bins"/],
    [JSON.stringify({
      bins: ['A', 'B'],
      items: [{ label: 'w', bin: 0 }, { label: 'x', bin: 1 }, { label: 'y', bin: 0 }, { label: 'x ', bin: 1 }],
    }), /item labels must be unique/],
    [JSON.stringify({
      bins: ['A', 'B'],
      items: [{ label: 'w', bin: 0, hint: 'no' }, { label: 'x', bin: 1 }, { label: 'y', bin: 0 }, { label: 'z', bin: 1 }],
    }), /unknown key/],
  ];
  for (const [text, re] of bad) {
    assert.throws(() => parseSortbinsConfig(text), re, text);
  }
});

test('parseSortbinsConfig requires every bin to own an item', () => {
  const text = JSON.stringify({
    bins: ['A', 'B', 'C'],
    items: [{ label: 'w', bin: 0 }, { label: 'x', bin: 1 }, { label: 'y', bin: 0 }, { label: 'z', bin: 1 }],
  });
  assert.throws(() => parseSortbinsConfig(text), /owns no items/);
});

test('parseSortbinsConfig caps a single bin at ⌈2n⁄3⌉ items', () => {
  // 6 items, cap = 4: five in one bin is a dump-bin.
  const text = JSON.stringify({
    bins: ['A', 'B'],
    items: [
      { label: 'u', bin: 0 }, { label: 'v', bin: 1 }, { label: 'w', bin: 0 },
      { label: 'x', bin: 0 }, { label: 'y', bin: 0 }, { label: 'z', bin: 0 },
    ],
  });
  assert.throws(() => parseSortbinsConfig(text), /owns 5 of 6 items/);
});

test('parseSortbinsConfig rejects items grouped by bin — authored order leaks the key', () => {
  const grouped = JSON.stringify({
    bins: ['A', 'B'],
    items: [
      { label: 'w', bin: 0 }, { label: 'x', bin: 0 },
      { label: 'y', bin: 1 }, { label: 'z', bin: 1 },
    ],
  });
  assert.throws(() => parseSortbinsConfig(grouped), /grouped by bin/);
  // One swap breaks the grouping (runs = 4 > 2 bins) and passes.
  const interleaved = JSON.stringify({
    bins: ['A', 'B'],
    items: [
      { label: 'w', bin: 0 }, { label: 'y', bin: 1 },
      { label: 'x', bin: 0 }, { label: 'z', bin: 1 },
    ],
  });
  assert.equal(parseSortbinsConfig(interleaved).items.length, 4);
});

test('checkSortbins statuses and counts', () => {
  const config = parseSortbinsConfig(GOOD);
  const key = config.items.map((item) => item.bin); // [0,1,0,1,0,1]
  assert.deepEqual(checkSortbins([0, 1, null, 1, 0, 1], config), {
    status: 'needMore', placed: 5, correctCount: 5, total: 6,
  });
  assert.deepEqual(checkSortbins([], config), {
    status: 'needMore', placed: 0, correctCount: 0, total: 6,
  });
  assert.deepEqual(checkSortbins(key, config), {
    status: 'correct', placed: 6, correctCount: 6, total: 6,
  });
  assert.deepEqual(checkSortbins([0, 1, 0, 1, 0, 0], config), {
    status: 'partial', placed: 6, correctCount: 5, total: 6,
  });
  assert.deepEqual(checkSortbins(key.map((bin) => 1 - bin), config), {
    status: 'incorrect', placed: 6, correctCount: 0, total: 6,
  });
});
