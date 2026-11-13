import test from 'node:test';
import assert from 'node:assert/strict';
import { loadElements, printedMass } from '../lib/elements.mjs';
import { COLORS, GEOMETRY, fittedWidth, layout, manifestEntry, periodicTableSvg, plan } from './periodic-table.mjs';

const data = loadElements();
const boxes = layout(data);
const { BOX, WIDTH, HEIGHT } = GEOMETRY;

/** WCAG relative luminance and contrast of two `#rrggbb` colors. */
function contrast(a, b) {
  const luminance = (hex) => {
    const [r, g, bl] = [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16) / 255)
      .map((channel) => (channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

test('the checked-in figure and manifest entry are what the data file draws', () => {
  assert.deepEqual(plan().differences, []);
});

test('the drawing is deterministic and prints every element’s mass as the data file writes it', () => {
  const svg = periodicTableSvg(data);
  assert.equal(svg, periodicTableSvg(data));
  for (const element of data.elements) {
    assert.ok(svg.includes(`>${printedMass(element)}</text>`), `${element.symbol}: ${printedMass(element)}`);
    assert.ok(svg.includes(`>${element.name}</text>`), element.name);
  }
  // The trailing zero of a measured value is drawn.
  assert.ok(svg.includes('>1.0080</text>'));
  assert.ok(svg.includes('>118.71</text>'));
  assert.ok(!/NaN|undefined|null/.test(svg));
  // Whole-number coordinates only: nothing a float could print two ways.
  assert.ok(!/(?:x|y|x1|x2|y1|y2|width|height)="-?\d+\.\d/.test(svg));
});

test('every element has one box, inside the figure, overlapping no other', () => {
  assert.equal(boxes.length, 118);
  const seen = new Set();
  for (const box of boxes) {
    assert.ok(box.x >= 0 && box.x + BOX <= WIDTH && box.y >= 0 && box.y + BOX <= HEIGHT, box.element.symbol);
    const key = `${box.x}/${box.y}`;
    assert.ok(!seen.has(key), `two elements drawn at ${key}`);
    seen.add(key);
  }
  for (const a of boxes) {
    for (const b of boxes) {
      if (a === b) continue;
      assert.ok(Math.abs(a.x - b.x) >= BOX || Math.abs(a.y - b.y) >= BOX, `${a.element.symbol} overlaps ${b.element.symbol}`);
    }
  }
});

test('the two rows of fifteen sit under groups 4 to 18, lanthanum under titanium’s column', () => {
  const at = (symbol) => boxes.find((box) => box.element.symbol === symbol);
  assert.equal(at('La').x, at('Ti').x);
  assert.equal(at('Lu').x, at('Kr').x);
  assert.equal(at('Ac').x, at('La').x);
  assert.equal(at('Lr').x, at('Lu').x);
  assert.ok(at('La').y > at('Fr').y + BOX);
  assert.equal(at('Ac').y - at('La').y, GEOMETRY.PITCH);
});

test('every line of every box fits inside its box with the platform margin', () => {
  for (const box of boxes) {
    const lines = Object.fromEntries(box.labels.map((label) => [label.role, label]));
    for (const label of box.labels) {
      const width = fittedWidth(label);
      const left = label.anchor === 'start' ? label.x : label.x - width / 2;
      assert.ok(left >= box.x + 2 && left + width <= box.x + BOX - 2,
        `${box.element.symbol} ${label.role} ${JSON.stringify(label.text)} is ${width.toFixed(1)} px wide in a ${BOX} px box`);
      assert.ok(label.y - label.size * 0.75 >= box.y + 1 && label.y + label.size * 0.25 <= box.y + BOX - 1, `${box.element.symbol} ${label.role} leaves the box vertically`);
    }
    // Stacked lines do not touch: each baseline clears the cap height of the next.
    assert.ok(lines.symbol.y + 3 <= lines.mass.y - lines.mass.size * 0.75, `${box.element.symbol}: mass under symbol`);
    assert.ok(lines.mass.y + 3 <= lines.name.y - lines.name.size * 0.75, `${box.element.symbol}: name under mass`);
    // The atomic number's corner is clear of the symbol.
    const symbolLeft = lines.symbol.x - fittedWidth(lines.symbol) / 2;
    const numberRight = lines.number.x + fittedWidth(lines.number);
    assert.ok(numberRight <= symbolLeft || lines.number.y <= lines.symbol.y - lines.symbol.size * 0.75,
      `${box.element.symbol}: atomic number runs into the symbol`);
  }
});

test('text is readable on its shading: at least 4.5 to 1', () => {
  for (const shade of ['metal', 'metalloid', 'nonmetal', 'unclassified']) {
    for (const ink of ['solid', 'liquid', 'gas', 'text']) {
      assert.ok(contrast(COLORS[shade], COLORS[ink]) >= 4.5, `${ink} on ${shade}: ${contrast(COLORS[shade], COLORS[ink]).toFixed(2)}`);
    }
  }
  for (const ink of ['group', 'period', 'series', 'text']) assert.ok(contrast(COLORS.page, COLORS[ink]) >= 4.5, ink);
  assert.ok(contrast(COLORS.keyHead, COLORS.keyHeadText) >= 4.5);
  // The three shades are distinct colors, not one tint.
  assert.equal(new Set([COLORS.metal, COLORS.metalloid, COLORS.nonmetal, COLORS.unclassified]).size, 4);
});

test('the manifest entry is one SVG variant marked generated', () => {
  const entry = manifestEntry();
  assert.equal(entry.generated, true);
  assert.deepEqual(entry.variants, [{ width: WIDTH, height: HEIGHT, file: 'periodic-table.svg' }]);
  assert.equal(entry.kind, 'diagram');
});
