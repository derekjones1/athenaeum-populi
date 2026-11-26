import test from 'node:test';
import assert from 'node:assert/strict';
import { askedUnit, shownUnit, showsAskedUnit } from './item-units.mjs';

test('askedUnit reads the unit a closing sentence names, as a display prints it', () => {
  for (const [question, unit] of [
    ['How much heat is required? Enter the heat in kilojoules.', 'kJ'],
    ['Find the mass. Enter the mass in grams.', 'g'],
    ['Find the mass. Enter the mass in grams, to the nearest tenth of a gram.', 'g'],
    ['What is the molarity? Enter the concentration in mol/L.', 'M'],
    ['What is the molality? Enter the molality in mol/kg.', 'm'],
    ['Enter the temperature in degrees Celsius.', '°C'],
    ['Enter the specific heat in J/g °C.', 'J/g °C'],
    ['Enter the heat capacity in cal/°C.', 'cal/°C'],
    ['Enter the frequency in $\\text{s}^{-1}$.', 's⁻¹'],
    ['Enter the density in g/cm³.', 'g/cm³'],
    ['Enter the Calorie content in Calories.', 'Cal'],
    ['Enter the heat in calories.', 'cal'],
    ['Enter the enthalpy change in kJ/mol.', 'kJ/mol'],
    // The last "in" names the unit.
    ['Enter the mass of phosphorus in the 122 g of AlPO₄, in grams.', 'g'],
    ['Enter the change in temperature in degrees Celsius.', '°C'],
    // 1.6: the closing follows a parenthesis, not a period.
    ['How long is one cubit in meters and in feet? (1 Å = $1 \\times 10^{-8}$ cm) Enter the length of one cubit in feet.', 'ft'],
  ]) assert.equal(askedUnit(question), unit, question);
});

test('askedUnit is null where the closing names no unit', () => {
  for (const question of [
    'Enter the number of protons in an atom of cobalt–60.',
    'Enter the reading shown in the figure above.',
    'Enter the cost in dollars, to the nearest dollar.',
    'How much heat, in joules and in calories, is required?',
    'Enter the heat in kilojoules. Then explain your reasoning.',
    'What is the mass in grams?',
    '',
  ]) assert.equal(askedUnit(question), null, question);
});

test('shownUnit reads what an answer display prints after its number', () => {
  for (const [display, unit] of [
    ['$47.6\\ \\text{J/}{}^\\circ\\text{C}$', 'J/°C'],
    ['$0.451\\ \\text{J/g}\\ {}^\\circ\\text{C}$', 'J/g °C'],
    ['$8.69 \\times 10^{-7}\\ \\text{m}$', 'm'],
    ['$1.5\\ \\text{ft/cubit}$', 'ft/cubit'],
    ['$0.250\\ M$', 'M'],
    ['$12.0\\ \\text{g}\\ \\ce{O2}$', 'g O2'],
    ['$4.568 \\times 10^{14}\\ \\text{s}^{-1}$', 's⁻¹'],
    ['$7.87\\ \\text{g/cm}^3$', 'g/cm³'],
    ['$\\Delta H = -153\\ \\text{kJ}$', 'kJ'],
    ['$1.4 \\times 10^{2}\\ \\text{Calories}$', 'Cal'],
    ['$1{,}500\\ \\text{g}$ ($1.5\\ \\text{kg}$)', 'g'],
    ['$25.0\\%$', '%'],
  ]) assert.equal(shownUnit(display), unit, display);
  for (const display of ['$27$', '', undefined, '$\\tfrac{2.0\\ \\text{L}}{67.6\\ \\text{fl oz}}$', '$+3$']) assert.equal(shownUnit(display), null, String(display));
});

test('the display shows the asked unit when it prints that unit, with or without a substance after it', () => {
  assert.equal(showsAskedUnit('g', 'g'), true);
  assert.equal(showsAskedUnit('g', 'g O2'), true, 'a substance is not a second unit');
  assert.equal(showsAskedUnit('M', 'M CH3OH'), true);
  assert.equal(showsAskedUnit('J/g °C', 'J/g °C'), true);
  // 1.6 asked feet and showed ft/cubit; 5.1 asked cal/°C and showed cal °C⁻¹.
  assert.equal(showsAskedUnit('ft', 'ft/cubit'), false);
  assert.equal(showsAskedUnit('cal/°C', 'cal °C⁻¹'), false);
  assert.equal(showsAskedUnit('g', 'g/mol'), false);
  assert.equal(showsAskedUnit('kJ', 'J'), false);
  assert.equal(showsAskedUnit('g', 'kg'), false);
  assert.equal(showsAskedUnit('J', 'J K'), false, 'a second unit symbol is a different unit');
});
