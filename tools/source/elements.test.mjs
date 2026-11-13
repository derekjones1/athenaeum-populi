import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ELEMENTS } from '../../assets/js/lib/text/check-chem.mjs';
import { atPlaces, loadElements, printedMass, readDecimal, writeDecimal } from '../lib/elements.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const data = loadElements(root);

/** The CIAAW page's rows as `number → { symbol, mass }`, mass null where it prints a dash. */
function ciaawRows(html) {
  const text = (cell) => cell.replace(/<[^>]+>/g, '').replace(/&plusmn;/g, '±').replace(/&mdash;/g, '—').replace(/&nbsp;/g, ' ').trim();
  const rows = new Map();
  for (const [, row] of html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const cells = [...row.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map(([, cell]) => text(cell));
    if (cells.length < 4 || !/^\d+$/.test(cells[0])) continue;
    const value = /^([0-9.]+)\s*±/.exec(cells[3]);
    assert.ok(value || cells[3] === '—', `row ${cells[0]} prints neither a value nor a dash: ${JSON.stringify(cells[3])}`);
    rows.set(Number(cells[0]), { symbol: cells[1], mass: value ? value[1] : null });
  }
  return rows;
}

test('the checked-in CIAAW page is the one the data file names', () => {
  const copy = readFileSync(path.join(root, data.sources.mass.copy));
  assert.equal(createHash('sha256').update(copy).digest('hex'), data.sources.mass.copySha256);
  assert.match(data.sources.mass.url, /^https:\/\/www\.ciaaw\.org\//);
  assert.match(data.sources.mass.retrieved, /^\d{4}-\d{2}-\d{2}$/);
});

test('every atomic mass is the CIAAW abridged value, digit for digit', () => {
  const rows = ciaawRows(readFileSync(path.join(root, data.sources.mass.copy), 'utf8'));
  assert.equal(rows.size, 118);
  assert.equal(data.elements.length, 118);
  for (const element of data.elements) {
    const row = rows.get(element.number);
    assert.equal(row.symbol, element.symbol, `element ${element.number}`);
    // An element CIAAW gives no standard atomic weight is the one the table
    // prints a bracketed mass number for, and no other.
    assert.equal(element.bracketed, row.mass === null, `${element.symbol}: bracketed exactly where CIAAW prints a dash`);
    if (!element.bracketed) assert.equal(element.mass, row.mass, `${element.symbol}`);
  }
});

test('a mass is a string of at most five significant figures; a bracketed one is a whole mass number', () => {
  for (const element of data.elements) {
    assert.equal(typeof element.mass, 'string');
    if (element.bracketed) {
      assert.match(element.mass, /^\d{2,3}$/, element.symbol);
      continue;
    }
    assert.match(element.mass, /^\d+\.\d+$/, element.symbol);
    const figures = element.mass.replace('.', '').replace(/^0+/, '').length;
    assert.ok(figures >= 3 && figures <= 5, `${element.symbol} ${element.mass} has ${figures} significant figures`);
  }
  // The trailing zero is data: hydrogen is 1.0080, not 1.008.
  assert.equal(data.bySymbol.get('H').mass, '1.0080');
  assert.equal(printedMass(data.bySymbol.get('Tc')), '[97]');
});

test('the bracketed mass numbers are the ones the source figure prints', () => {
  const printed = 'Tc:97 Pm:145 Po:209 At:210 Rn:222 Fr:223 Ra:226 Ac:227 Np:237 Pu:244 Am:243 Cm:247 Bk:247 Cf:251 Es:252 Fm:257 Md:258 No:259 Lr:262 '
    + 'Rf:267 Db:270 Sg:271 Bh:270 Hs:277 Mt:276 Ds:281 Rg:282 Cn:285 Nh:285 Fl:289 Mc:288 Lv:293 Ts:294 Og:294';
  assert.equal(data.elements.filter((element) => element.bracketed).map((element) => `${element.symbol}:${element.mass}`).join(' '), printed);
});

test('category and state are the source figure’s color code', () => {
  const symbols = (pick) => data.elements.filter(pick).map((element) => element.symbol).join(' ');
  assert.equal(symbols((element) => element.category === 'metalloid'), 'B Si Ge As Sb Te At');
  assert.equal(symbols((element) => element.category === 'nonmetal'), 'H He C N O F Ne P S Cl Ar Se Br Kr I Xe Rn');
  assert.equal(symbols((element) => element.category === null), 'Mt Ds Rg Nh Fl Mc Lv Ts Og');
  assert.equal(data.elements.filter((element) => element.category === 'metal').length, 85);
  assert.equal(symbols((element) => element.state === 'gas'), 'H He N O F Ne Cl Ar Kr Xe Rn');
  assert.equal(symbols((element) => element.state === 'liquid'), 'Br Hg');
  for (const element of data.elements) {
    assert.ok([null, 'metal', 'metalloid', 'nonmetal'].includes(element.category), element.symbol);
    assert.ok(['solid', 'liquid', 'gas'].includes(element.state), element.symbol);
  }
});

test('every element has one box: a group and period, or a place in an f-block row', () => {
  const boxes = new Set();
  for (const element of data.elements) {
    assert.ok(element.period >= 1 && element.period <= 7, element.symbol);
    if (element.series) {
      assert.equal(element.group, null, element.symbol);
      assert.equal(element.series, element.period === 6 ? 'lanthanide' : 'actinide', element.symbol);
    } else {
      assert.ok(element.group >= 1 && element.group <= 18, element.symbol);
      const box = `${element.group}/${element.period}`;
      assert.ok(!boxes.has(box), `two elements in group ${element.group}, period ${element.period}`);
      boxes.add(box);
    }
  }
  assert.equal(data.elements.filter((element) => element.series === 'lanthanide').map((element) => element.number).join(), '57,58,59,60,61,62,63,64,65,66,67,68,69,70,71');
  assert.equal(data.elements.filter((element) => element.series === 'actinide').map((element) => element.number).join(), '89,90,91,92,93,94,95,96,97,98,99,100,101,102,103');
});

test('the grader’s list of symbols is the data file’s, in atomic-number order', () => {
  assert.deepEqual([...ELEMENTS], data.elements.map((element) => element.symbol));
  assert.deepEqual(data.elements.map((element) => element.number), Array.from({ length: 118 }, (_, index) => index + 1));
});

test('decimal helpers keep trailing zeros and round half up, saying when it was a tie', () => {
  assert.deepEqual(readDecimal('1.0080'), { units: 10080n, places: 4 });
  assert.equal(writeDecimal({ units: 20160n, places: 4 }), '2.0160');
  assert.equal(writeDecimal({ units: 5n, places: 3 }), '0.005');
  assert.deepEqual(atPlaces(readDecimal('18.0150'), 3), { units: 18015n, places: 3, tie: false });
  assert.deepEqual(atPlaces(readDecimal('199.9860'), 2), { units: 19999n, places: 2, tie: false });
  assert.deepEqual(atPlaces(readDecimal('10.405'), 2), { units: 1041n, places: 2, tie: true });
  assert.deepEqual(atPlaces(readDecimal('58.44'), 3), { units: 58440n, places: 3, tie: false });
  assert.throws(() => readDecimal('[97]'), /not a plain decimal/);
});
