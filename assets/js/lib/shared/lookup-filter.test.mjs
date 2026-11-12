import assert from 'node:assert/strict';
import { test } from 'node:test';

import { countLabel, filterRows, foldLookup } from './lookup-filter.mjs';

// A slice of Chemistry's Appendix G, as its cells read on the page.
const G = [
  { cells: ['aluminum', '', '', ''], group: true },
  { cells: ['Al(s)', '0', '0', '28.3'] },
  { cells: ['Al³⁺(aq)', '−531', '−485', '−321.7'] },
  { cells: ['AlCl₃·6H₂O(s)', '−2691.57', '−2269.40', '376.56'] },
  { cells: ['carbon', '', '', ''], group: true },
  { cells: ['CO(g)', '−110.52', '−137.15', '197.7'] },
  { cells: ['CO₂(g)', '−393.51', '−394.36', '213.8'] },
  { cells: ['cobalt', '', '', ''], group: true },
  { cells: ['Co(s)', '0', '0', '30.0'] },
  { cells: ['CoO(s)', '−237.9', '−214.2', '52.97'] },
  { cells: ['silicon', '', '', ''], group: true },
  { cells: ['Si(s)', '0', '0', '18.8'] },
  { cells: ['SiF₄(g)', '−1615.0', '−1572.8', '282.8'] },
];
const shown = (query) => {
  const { visible } = filterRows(G, query);
  return G.filter((row, index) => visible[index]).map((row) => row.cells[0]);
};

test('lookup filter: a query is typed without subscripts, superscripts, or the minus sign', () => {
  assert.equal(foldLookup('SiF₄(g)'), 'SiF4(g)');
  assert.equal(foldLookup('Al³⁺(aq)'), 'Al3+(aq)');
  assert.equal(foldLookup('−1615.0'), '-1615.0');
  assert.equal(foldLookup('AlCl₃·6H₂O (s)'), 'AlCl3.6H2O(s)');
  assert.deepEqual(shown('SiF4'), ['silicon', 'SiF₄(g)']);
  assert.deepEqual(shown('Al3+'), ['aluminum', 'Al³⁺(aq)']);
  assert.deepEqual(shown('-1615'), ['silicon', 'SiF₄(g)']);
  assert.deepEqual(shown('AlCl3.6H2O'), ['aluminum', 'AlCl₃·6H₂O(s)']);
  assert.deepEqual(shown(' Si F4 '), ['silicon', 'SiF₄(g)'], 'spaces in the query are not part of it');
});

test('lookup filter: an empty query shows every row', () => {
  for (const query of ['', '   ', null, undefined]) {
    const result = filterRows(G, query);
    assert.ok(result.visible.every(Boolean));
    assert.equal(result.matched, 9);
    assert.equal(result.total, 9);
  }
});

test('lookup filter: a capital letter is read as typed, so Co is cobalt and CO is carbon monoxide', () => {
  assert.deepEqual(shown('CO'), ['carbon', 'CO(g)', 'CO₂(g)']);
  assert.deepEqual(shown('Co'), ['cobalt', 'Co(s)', 'CoO(s)']);
  // Without a capital the query is matched without regard to case: both of
  // those, and every group whose NAME holds the letters — "cobalt", and
  // "silicon" too. That breadth is why a formula is worth typing as printed.
  assert.deepEqual(shown('co'), ['carbon', 'CO(g)', 'CO₂(g)', 'cobalt', 'Co(s)', 'CoO(s)', 'silicon', 'Si(s)', 'SiF₄(g)']);
});

test('lookup filter: a capitalised query that matches nothing as typed is matched without regard to case', () => {
  assert.deepEqual(shown('Aluminum'), ['aluminum', 'Al(s)', 'Al³⁺(aq)', 'AlCl₃·6H₂O(s)']);
  assert.deepEqual(shown('SIF4'), ['silicon', 'SiF₄(g)']);
});

test('lookup filter: a group name stays over a matching row, and a matching name shows its whole group', () => {
  assert.deepEqual(shown('silicon'), ['silicon', 'Si(s)', 'SiF₄(g)']);
  assert.deepEqual(shown('282.8'), ['silicon', 'SiF₄(g)']);
  const { visible } = filterRows(G, '282.8');
  assert.equal(visible[0], false, 'a group with no matching row is hidden');
});

test('lookup filter: a match does not run from one cell into the next', () => {
  // "(s)0" would match Al(s) | 0 if the cells were joined end to end.
  assert.deepEqual(shown('(s)0'), []);
});

test('lookup filter: a table without groups filters row by row', () => {
  const rows = [{ cells: ['HF', '6.4 × 10⁻⁴'] }, { cells: ['HNO₂', '4.6 × 10⁻⁴'] }];
  const result = filterRows(rows, 'HNO2');
  assert.deepEqual(result.visible, [false, true]);
  assert.equal(result.matched, 1);
  assert.equal(result.total, 2);
  assert.deepEqual(filterRows(rows, '10-4').visible, [true, true], 'a superscript exponent is typed on the line');
  assert.deepEqual(filterRows(rows, '4.6x10-4').visible, [false, true], 'the multiplication sign is typed as the letter');
  assert.deepEqual(filterRows(rows, '4.6 X 10-4').visible, [false, true], 'in either case: nothing matches the capital as typed');
});

test('lookup filter: the count line', () => {
  assert.equal(countLabel(filterRows(G, ''), ''), '9 rows');
  assert.equal(countLabel(filterRows(G, 'SiF4'), 'SiF4'), '1 of 9 rows');
  assert.equal(countLabel(filterRows(G, 'CO'), 'CO'), '2 of 9 rows');
  assert.equal(countLabel(filterRows(G, 'xenon'), 'xenon'), 'No row of 9 matches');
  assert.equal(countLabel({ matched: 1, total: 1 }, ''), '1 row');
});
