import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkQuantum, isPossibleSet, isQuantumSet, previewQuantum, quantumCanon, quantumKeyProblem, readQuantum,
  QUANTUM_L, QUANTUM_L_RANGE, QUANTUM_ML, QUANTUM_ML_RANGE, QUANTUM_N, QUANTUM_SHELL, QUANTUM_SPIN, QUANTUM_SUBSHELL, QUANTUM_UNREAD,
} from './check-quantum.mjs';
import { checkChem, chemCanon, chemKeyProblem, previewChem } from './check-chem.mjs';
import { checkText, gradeText } from './check-text.mjs';

// Chemistry 2e 6.3, exercise fs-idm139949520 part (c): the source's three sets.
const S = '4 0 0 +1/2';
const P = '2 1 0 +1/2';
const D = '3 2 0 +1/2';
const grade = (typed, key) => checkChem(typed, key, { form: 'quantum-numbers' });

test('the four values in order, spaced, comma- or semicolon-separated, in parentheses or braces', () => {
  for (const typed of ['4 0 0 +1/2', '4, 0, 0, 1/2', '(4, 0, 0, −1/2)', '4;0;0;-1/2', '{4 0 0 0.5}', '[4, 0, 0, +½]', ' 4 0 0 1/2. ', '4 0 0 + 1/2']) {
    assert.equal(grade(typed, S).status, 'correct', typed);
  }
});

test('the labelled writing, in any order of the labels, capitals folded', () => {
  for (const typed of [
    'n = 4, l = 0, ml = 0, ms = +1/2',
    'n=4 l=0 m_l=0 m_s=-1/2',
    'ms = -½, M_L = 0, L = 0, N = 4',
    'n = 4, l = 0, mₗ = 0, mₛ = +1/2',
    'n = 4, l = 0, m l = 0, s = .5',
    '(n = 4; l = 0; m_l = 0; s = −0.5)',
  ]) assert.equal(grade(typed, S).status, 'correct', typed);
  assert.equal(grade('n = 4, l = 0, ml = 0', S).message, QUANTUM_UNREAD, 'three labels');
  assert.equal(grade('n = 4, n = 4, l = 0, ml = 0, ms = 1/2', S).message, QUANTUM_UNREAD, 'a label twice');
  assert.equal(grade('n = 4, l = 0, ml = 0, ms = 1/2, electron', S).message, QUANTUM_UNREAD, 'words beside the set');
});

test('every spin writing, and every minus', () => {
  for (const spin of ['+1/2', '1/2', '-1/2', '−1/2', '–1/2', '½', '+½', '-½', '0.5', '+0.5', '-0.5', '.5']) {
    assert.equal(grade(`4 0 0 ${spin}`, S).status, 'correct', spin);
  }
  for (const ml of ['-1', '–1', '−1', '0', '1', '+1']) assert.equal(grade(`2 1 ${ml} 1/2`, P).status, 'correct', ml);
});

test('any mₗ from −l to +l and either spin of the key\'s n and l is right', () => {
  for (const ml of [-1, 0, 1]) for (const spin of ['+1/2', '-1/2']) assert.equal(grade(`2 1 ${ml} ${spin}`, P).status, 'correct');
  for (const ml of [-2, -1, 0, 1, 2]) assert.equal(grade(`3 2 ${ml} -1/2`, D).status, 'correct');
  assert.equal(grade('4 0 0 -1/2', S).status, 'correct', 'the other spin');
});

test('the page\'s TeX print and the source\'s MathML print of a key read', () => {
  assert.equal(grade('$4\\ 0\\ 0\\ {+\\frac{1}{2}}$', S).status, 'correct');
  assert.equal(grade('$2\\ 1\\ 0\\ {+\\frac{1}{2}}$', P).status, 'correct');
  assert.equal(grade('4 0 0 ( 1 )/( 2 )', S).status, 'correct', 'the source prints the positive spin unsigned');
  assert.equal(grade('4 0 0 ½', S).status, 'correct');
  assert.equal(chemCanon('x'.replace('x', '3 2 0 ( 1 )/( 2 )'), 'quantum-numbers'), chemCanon(D, 'quantum-numbers'));
  assert.equal(chemCanon('4 1 −1 − ( 1 )/( 2 )', 'quantum-numbers'), '4 1 -1 -1/2', 'the selenium table\'s spaced sign');
});

test('a wrong set is told why, in the order of precedence, and never the key\'s n or l', () => {
  const cases = [
    ['iron', S, QUANTUM_UNREAD],
    ['4 0 0', S, QUANTUM_UNREAD],
    ['4 0 0 1/2 1', S, QUANTUM_UNREAD],
    ['4 0 0 1', S, QUANTUM_SPIN],
    ['0 0 0 1', S, QUANTUM_SPIN],
    ['4.5 0 0 1/2', S, QUANTUM_N],
    ['0 0 0 1/2', S, QUANTUM_N],
    ['4 -1 0 1/2', S, QUANTUM_L],
    ['4 0.5 0 1/2', S, QUANTUM_L],
    ['4 0 0.5 1/2', S, QUANTUM_ML],
    ['2 2 0 1/2', P, QUANTUM_L_RANGE],
    ['4 4 0 1/2', S, QUANTUM_L_RANGE],
    ['4 0 1 1/2', S, QUANTUM_ML_RANGE],
    ['2 1 2 1/2', P, QUANTUM_ML_RANGE],
    ['5 0 0 1/2', S, QUANTUM_SHELL],
    ['3 1 0 1/2', P, QUANTUM_SHELL],
    ['4 1 0 1/2', S, QUANTUM_SUBSHELL],
    ['2 0 0 1/2', P, QUANTUM_SUBSHELL],
    ['3 1 1 -1/2', D, QUANTUM_SUBSHELL],
  ];
  for (const [typed, key, message] of cases) {
    const verdict = grade(typed, key);
    assert.equal(verdict.status, 'incorrect', typed);
    assert.equal(verdict.message, message, `${typed} against ${key}`);
  }
  for (const message of [QUANTUM_UNREAD, QUANTUM_SPIN, QUANTUM_N, QUANTUM_L, QUANTUM_ML, QUANTUM_L_RANGE, QUANTUM_ML_RANGE, QUANTUM_SHELL, QUANTUM_SUBSHELL]) {
    // No value of n or l (only the rules' own 0, 1, and 1/2), and no orbital's name or shape.
    assert.doesNotMatch(message.replace(/[+−]?1\/2|\b0 to n − 1\b|\bn − 1\b|1 or greater|0 or greater/g, ''), /\d/, message);
    assert.doesNotMatch(message, /\b[spdf](?: orbital| subshell|\b)(?![ₗₛ])|spherical|dumbbell|clover/, message);
  }
  assert.equal(grade('', S).status, 'empty');
});

test('nothing is form, and the gates and the field read the same verdict', () => {
  assert.equal(checkText('2 1 -1 -1/2', P, { form: 'quantum-numbers' }), 'correct');
  assert.equal(checkText('2 0 0 1/2', P, { form: 'quantum-numbers' }), 'incorrect');
  assert.deepEqual(gradeText('2 0 0 1/2', P, { form: 'quantum-numbers' }), { status: 'incorrect', message: QUANTUM_SUBSHELL });
  assert.equal(checkQuantum('4 0 0 1/2', 'not a key').status, 'incorrect');
});

test('the read-back, and what the reader returns', () => {
  assert.equal(previewChem('4, 0, 0, 1/2', 'quantum-numbers'), 'n = 4, l = 0, mₗ = 0, mₛ = +1/2');
  assert.equal(previewQuantum('2 1 -1 -.5'), 'n = 2, l = 1, mₗ = −1, mₛ = −1/2');
  assert.equal(previewQuantum('3 2 2 ½'), 'n = 3, l = 2, mₗ = +2, mₛ = +1/2');
  assert.equal(previewQuantum('4 0 0'), '');
  assert.deepEqual(readQuantum('n = 4, l = 0, ml = 0, ms = +1/2'), { n: 4, l: 0, ml: 0, ms: 0.5 });
  assert.equal(isPossibleSet(readQuantum('2 2 0 1/2')), false);
  assert.equal(isQuantumSet('4 0 0 +1/2'), true);
  assert.equal(isQuantumSet('4 0 0 1'), false);
});

test('a gate compares sets: the source\'s set, not another possible one', () => {
  assert.equal(quantumCanon('4 0 0 +1/2'), '4 0 0 +1/2');
  assert.equal(chemCanon('(4, 0, 0, ½)', 'quantum-numbers'), '4 0 0 +1/2');
  assert.notEqual(chemCanon('2 1 -1 +1/2', 'quantum-numbers'), chemCanon(P, 'quantum-numbers'));
  assert.notEqual(chemCanon('2 1 0 -1/2', 'quantum-numbers'), chemCanon(P, 'quantum-numbers'));
  assert.equal(chemCanon('4 0 0', 'quantum-numbers'), null);
});

test('a key is written in print, is a possible set, and takes no accept list (the lint)', () => {
  for (const key of [S, P, D, '2 1 −1 −1/2', '3 2 +2 +1/2']) assert.equal(chemKeyProblem(key, 'quantum-numbers'), null, key);
  assert.match(quantumKeyProblem('4 0 0 1/2'), /not written in print/);
  assert.match(quantumKeyProblem('4, 0, 0, +1/2'), /not written in print/);
  assert.match(quantumKeyProblem('2 1 -1 +1/2'), /not written in print/, 'a hyphen for the minus');
  assert.match(quantumKeyProblem('4 0 0 +½'), /not written in print/);
  assert.match(quantumKeyProblem('2 2 0 +1/2'), /l runs from 0 to n − 1/);
  assert.match(quantumKeyProblem('2 1 +2 +1/2'), /mₗ runs from −l to \+l/);
  assert.match(quantumKeyProblem('4 0 0 +1'), /not written in print/);
  assert.match(quantumKeyProblem('iron'), /does not read/);
  assert.match(chemKeyProblem(S, 'quantum-numbers', '4 0 0 -1/2'), /no accept list/);
});
