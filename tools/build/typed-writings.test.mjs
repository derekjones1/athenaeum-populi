import test from 'node:test';
import assert from 'node:assert/strict';
import { configurationWritings, orderingWritings, quantumWritings } from './typed-writings.mjs';
import { checkChem, ORDERING_NO_SIGN } from '../../assets/js/lib/text/check-chem.mjs';
import { QUANTUM_L_RANGE, QUANTUM_ML_RANGE, QUANTUM_SHELL, QUANTUM_SUBSHELL } from '../../assets/js/lib/text/check-quantum.mjs';

// verify:typed types these into the real field; here each is graded in Node,
// so a writing the grader refuses is found before a browser is started.
test('a configuration is typed as its stem asks, then unspaced, with carets, and in shell order', () => {
  const iron = '1s²2s²2p⁶3s²3p⁶4s²3d⁶';
  assert.deepEqual(configurationWritings(iron), [{ typed: '1s2 2s2 2p6 3s2 3p6 4s2 3d6', kind: 'spaced' }]);
  assert.deepEqual(configurationWritings(iron, { variants: true }).map(({ kind }) => kind), ['unspaced', 'caret', 'shell-order']);
  assert.equal(configurationWritings(iron, { variants: true })[2].typed, '1s2 2s2 2p6 3s2 3p6 3d6 4s2');
  for (const key of [iron, '[Kr]5s²4d¹⁰', '1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p⁶5s²4d¹⁰5p⁶6s²4f¹⁴5d¹⁰']) {
    for (const { typed } of [...configurationWritings(key), ...configurationWritings(key, { variants: true })]) {
      assert.equal(checkChem(typed, key, { form: 'configuration' }).status, 'correct', `${key}: ${typed}`);
    }
  }
});

test('an ordering is typed with <, then from the other end with >, then as a comma list', () => {
  const ions = 'Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺';
  assert.deepEqual(orderingWritings(ions), [{ typed: 'Si^4+ < Al^3+ < Ca^2+ < K^+', kind: 'less-than' }]);
  assert.deepEqual(orderingWritings(ions, { variants: true }), [
    { typed: 'K+ > Ca2+ > Al3+ > Si4+', kind: 'greater-than' },
    { typed: 'Si4+, Al3+, Ca2+, K+', kind: 'comma-list' },
  ]);
  for (const key of [ions, 'Rb < Li < N < F', 'Mg²⁺ < K⁺ < Br⁻ < As³⁻']) {
    for (const { typed, kind } of [...orderingWritings(key), ...orderingWritings(key, { variants: true })]) {
      // The comma list is an expected refusal: an ordering needs < or >.
      const verdict = checkChem(typed, key, { form: 'ordering' });
      if (kind === 'comma-list') assert.deepEqual(verdict, { status: 'incorrect', message: ORDERING_NO_SIGN }, `${key}: ${typed}`);
      else assert.equal(verdict.status, 'correct', `${key}: ${typed}`);
    }
  }
});

test('a set of quantum numbers is typed as its stem asks, then in every other writing, and four wrong sets show their messages', () => {
  assert.deepEqual(quantumWritings('4 0 0 +1/2'), [{ typed: '4 0 0 1/2', kind: 'spaced' }]);
  assert.deepEqual(quantumWritings('2 1 0 +1/2', { variants: true }).map(({ kind }) => kind),
    ['other-spin', 'other-ml', 'comma-list', 'labelled', 'decimal-spin', 'wrong-l-for-n', 'wrong-ml-for-l', 'wrong-shell', 'wrong-subshell']);
  const expected = { 'wrong-l-for-n': QUANTUM_L_RANGE, 'wrong-ml-for-l': QUANTUM_ML_RANGE, 'wrong-shell': QUANTUM_SHELL, 'wrong-subshell': QUANTUM_SUBSHELL };
  for (const key of ['4 0 0 +1/2', '2 1 0 +1/2', '3 2 0 +1/2', '2 1 −1 −1/2', '1 0 0 −1/2']) {
    for (const { typed, kind } of [...quantumWritings(key), ...quantumWritings(key, { variants: true })]) {
      const verdict = checkChem(typed, key, { form: 'quantum-numbers' });
      if (expected[kind]) assert.deepEqual(verdict, { status: 'incorrect', message: expected[kind] }, `${key}: ${typed}`);
      else assert.equal(verdict.status, 'correct', `${key}: ${typed} (${kind})`);
    }
  }
});

test('a charge key is typed number first (pass A) and sign first (pass B)', async () => {
  const { chargeWritings } = await import('./typed-writings.mjs');
  assert.deepEqual(chargeWritings('4'), { numberFirst: '4+', signFirst: '+4' });
  assert.deepEqual(chargeWritings('-3'), { numberFirst: '3-', signFirst: '-3' });
});
