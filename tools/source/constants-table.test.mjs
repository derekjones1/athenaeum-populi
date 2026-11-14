import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CONSTANTS_PAGE, compareConstantsTable, constantDeviations, constantRows, figuresOf, listedValue, loadConstants,
  printedValue, readExact, rewriteConstantsTable, roundExact,
} from './constants-table.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const data = loadConstants(root);
const page = readFileSync(path.join(root, CONSTANTS_PAGE), 'utf8');

/** NIST's listing as `quantity → value`: fixed columns, the quantity in the first sixty. */
function listing(text) {
  const rows = new Map();
  for (const line of text.split('\n')) {
    if (line.length > 85 && /^\S/.test(line) && !line.startsWith('-')) rows.set(line.slice(0, 60).trim(), line.slice(60, 85).trim());
  }
  return rows;
}

test('the checked-in CODATA listing is the one the data file names', () => {
  const copy = readFileSync(path.join(root, data.sources.values.copy));
  assert.equal(createHash('sha256').update(copy).digest('hex'), data.sources.values.copySha256);
  assert.match(data.sources.values.url, /^https:\/\/physics\.nist\.gov\//);
  assert.match(copy.toString('utf8'), /2022 CODATA adjustment/);
});

test('every quantity is the listing\'s value, digit for digit', () => {
  const rows = listing(readFileSync(path.join(root, data.sources.values.copy), 'utf8'));
  assert.ok(rows.size > 300, 'the listing was read');
  for (const [name, value] of Object.entries(data.quantities)) {
    assert.ok(rows.has(name), `the listing has no quantity ${JSON.stringify(name)}`);
    assert.equal(value, listedValue(rows.get(name)), name);
  }
  // Every quantity the file lists is one a row uses, and the other way round.
  const used = new Set(data.constants.flatMap((row) => row.values.flatMap((spec) => (spec.quantity ? [spec.quantity] : [...spec.derive.multiply, ...(spec.derive.divide ?? [])]))));
  assert.deepEqual([...used].sort(), Object.keys(data.quantities).sort());
});

test('a value is rounded half up to the figures the source prints, in the source\'s notation', () => {
  assert.equal(listedValue('-1.758 820 008 38 e11'), '-1.75882000838e11');
  assert.equal(listedValue('96 485.332 12...'), '96485.33212');
  assert.equal(figuresOf('1.6605402e-27'), 8);
  assert.equal(figuresOf('8.205784e-2'), 7);
  assert.equal(figuresOf('22.41409'), 7);
  assert.deepEqual(roundExact(readExact('96485.33212'), 8), { digits: '96485332', lead: 4 });
  assert.deepEqual(roundExact(readExact('9.9996'), 4), { digits: '1000', lead: 1 }, 'a carry moves the leading digit');
  assert.deepEqual(roundExact(readExact('0.00125'), 2), { digits: '13', lead: -3 }, 'half rounds up');
  const quantities = { a: '6.02214076e23', b: '1.380649e-23', c: '101325', v: '22.41396954e-3' };
  assert.equal(printedValue({ quantity: 'a', sourcePrint: '6.02214076e23' }, quantities), '6.02214076 \\times 10^{23}');
  assert.equal(printedValue({ quantity: 'v', scale: 3, sourcePrint: '22.41409' }, quantities), '22.41397');
  // The gas constant in L atm: N_A · k / 101 325 Pa × 10³, from exact values.
  assert.equal(printedValue({ derive: { multiply: ['a', 'b'], divide: ['c'] }, scale: 3, sourcePrint: '8.205784e-2' }, quantities), '8.205737 \\times 10^{-2}');
  assert.throws(() => printedValue({ quantity: 'missing', sourcePrint: '1.0' }, quantities), /lists no quantity/);
});

test('the exact constants agree with one another, as the source\'s mixed table did not', () => {
  const q = data.quantities;
  const product = (a, b) => { const x = readExact(q[a]); const y = readExact(q[b]); return { n: x.n * y.n, d: x.d * y.d }; };
  // Faraday's constant is Avogadro's number times the unit of charge, and the gas constant Avogadro's number times Boltzmann's constant.
  assert.equal(roundExact(product('Avogadro constant', 'elementary charge'), 10).digits, roundExact(readExact(q['Faraday constant']), 10).digits);
  assert.equal(roundExact(product('Avogadro constant', 'Boltzmann constant'), 10).digits, roundExact(readExact(q['molar gas constant']), 10).digits);
});

test('Appendix D prints the data file\'s rows, and a changed cell is seen', () => {
  assert.deepEqual(compareConstantsTable(page, data), { cells: 2 + 2 * data.constants.length, errors: [] });
  assert.equal(rewriteConstantsTable(page, data), page, 'the page is what --write writes');
  const [name, value] = constantRows(data)[0];
  const errors = compareConstantsTable(page.replace(value, value.replace('1.6605391', '1.6605402')), data).errors;
  assert.equal(errors.length, 1);
  assert.match(errors[0], new RegExp(`row 1 \\(${name.replace(/[()]/g, '\\$&')}\\), Value`));
  // Ten rows carry a value the source prints from an older adjustment; the five exact ones stand as printed.
  const changed = constantDeviations(data).map(([, , row]) => row);
  assert.equal(changed.length, 10);
  for (const exact of ['Avogadro’s number', 'Boltzmann’s constant ($k$)', 'fundamental unit of charge ($e$)', 'Planck’s constant ($h$)', 'speed of light (in vacuum) ($c$)']) {
    assert.ok(!changed.includes(exact), `${exact} is unchanged`);
  }
});
