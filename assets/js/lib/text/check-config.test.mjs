import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkConfiguration, configurationCanon, configurationKeyProblem, isConfiguration, previewConfiguration, readConfiguration,
  CONFIGURATION_CORE, CONFIGURATION_COUNT, CONFIGURATION_DISTRIBUTION, CONFIGURATION_REPEATED, CONFIGURATION_UNREAD,
} from './check-config.mjs';
import { checkChem, chemCanon, chemKeyProblem, previewChem } from './check-chem.mjs';
import { gradeText, checkText, SUBSHELL_LETTER_ONLY } from './check-text.mjs';

// Chemistry 2e 6.4, Exercise 4(c): iron, in the source's filling order.
const FE = '1s²2s²2p⁶3s²3p⁶4s²3d⁶';
const status = (typed, key = FE) => checkConfiguration(typed, key).status;

test('a configuration is read from plain digits, carets, or superscripts, spaced or not', () => {
  for (const typed of [
    '1s2 2s2 2p6 3s2 3p6 4s2 3d6',
    '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6',
    '1s²2s²2p⁶3s²3p⁶4s²3d⁶',
    '1s22s22p63s23p64s23d6',
    '1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d6',
    '1S2 2S2 2P6 3S2 3P6 4S2 3D6',
    ' 1s2 2s2 2p6 3s2 3p6 4s2 3d6. ',
  ]) assert.equal(checkChem(typed, FE, { form: 'configuration' }).status, 'correct', typed);
});

test('the unspaced writing reads one way: the last digit before a letter is the next shell', () => {
  // 3d10 then 4s2: "3d104s2" is a count of 10, not of 104.
  const zinc = '1s²2s²2p⁶3s²3p⁶4s²3d¹⁰';
  assert.equal(status('1s22s22p63s23p64s23d10', zinc), 'correct');
  assert.equal(status('1s22s22p63s23p63d104s2', zinc), 'correct');
  assert.deepEqual(readConfiguration('3d104s2').subshells.map(({ label, count }) => `${label}${count}`), ['3d10', '4s2']);
});

test('the order of the subshells is free: filling order and shell order are one configuration', () => {
  assert.equal(status('1s2 2s2 2p6 3s2 3p6 3d6 4s2'), 'correct');
  assert.equal(status('3d6 4s2 1s2 2s2 2p6 3s2 3p6'), 'correct');
});

test('a noble-gas core: form against a key that writes every subshell, correct against a key with one', () => {
  const core = checkConfiguration('[Ar]4s2 3d6', FE);
  assert.deepEqual(core, { status: 'form', message: CONFIGURATION_CORE });
  assert.equal(status('[Ar] 3d6 4s2'), 'form');
  assert.equal(status('[Ne]3s2 3p6 4s2 3d6'), 'form', 'any core that expands to the key');
  const cadmium = '[Kr]5s²4d¹⁰';
  for (const typed of ['[Kr]5s2 4d10', '[Kr] 4d10 5s2', '[kr]5s24d10', '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10', '[Ar]3d10 4s2 4p6 5s2 4d10']) {
    assert.equal(status(typed, cadmium), 'correct', typed);
  }
});

test('a wrong configuration is told why, and never told the answer', () => {
  const said = (typed) => checkConfiguration(typed, FE);
  assert.deepEqual(said('1s2 2s2 2p6 3s2 3p6 4s2 3d5 4p1'), { status: 'incorrect', message: CONFIGURATION_DISTRIBUTION });
  assert.deepEqual(said('1s2 2s2 2p6 3s2 3p6 4s2 3d7'), { status: 'incorrect', message: CONFIGURATION_COUNT });
  assert.deepEqual(said('1s2 2s2 2p8 3s2 3p6 4s2 3d4'), { status: 'incorrect', message: 'A p subshell holds at most 6 electrons.' });
  assert.equal(said('1s3').message, 'An s subshell holds at most 2 electrons.');
  assert.equal(said('1s2 2s2 2p6 3s2 3p6 4s2 3d12').message, 'A d subshell holds at most 10 electrons.');
  assert.equal(said('1s2 2s2 2p6 3s2 3p6 4s2 4f16').message, 'An f subshell holds at most 14 electrons.');
  assert.equal(said('1s2 2s2 2d6').message, 'There is no 2d subshell: the n = 2 shell has only s and p subshells.');
  assert.equal(said('1p2').message, 'There is no 1p subshell: the n = 1 shell has only an s subshell.');
  assert.equal(said('3f2').message, 'There is no 3f subshell: the n = 3 shell has only s, p, and d subshells.');
  assert.deepEqual(said('1s2 2s2 2p6 2p6'), { status: 'incorrect', message: CONFIGURATION_REPEATED });
  assert.deepEqual(said('[Ne]2p6 3s2'), { status: 'incorrect', message: CONFIGURATION_REPEATED });
  assert.deepEqual(said('iron'), { status: 'incorrect', message: CONFIGURATION_UNREAD });
  assert.deepEqual(said('1s 2s 2p'), { status: 'incorrect', message: CONFIGURATION_UNREAD });
  assert.equal(said('').status, 'empty');
  // No message prints a count of electrons or a subshell the response did not type.
  for (const message of [CONFIGURATION_COUNT, CONFIGURATION_DISTRIBUTION, CONFIGURATION_UNREAD, CONFIGURATION_CORE, CONFIGURATION_REPEATED]) {
    assert.doesNotMatch(message, /\d/, message);
  }
});

test('the field reads back what it has read, in the book\'s print', () => {
  assert.equal(previewConfiguration('1s22s22p6'), '1s²2s²2p⁶');
  assert.equal(previewChem('[Kr] 5s2 4d10', 'configuration'), '[Kr]5s²4d¹⁰');
  assert.equal(previewChem('iron', 'configuration'), '');
});

test('canon: a gate reads the source\'s spaced print and the key\'s Unicode as one, order aside, core kept', () => {
  const source = '1 s^{2} 2 s^{2} 2 p^{6} 3 s^{2} 3 p^{6} 4 s^{2} 3 d^{6} ';
  assert.equal(configurationCanon(source), configurationCanon(FE));
  assert.equal(chemCanon('1s²2s²2p⁶3s²3p⁶3d⁶4s²', 'configuration'), chemCanon(FE, 'configuration'));
  assert.notEqual(chemCanon('[Ar]4s²3d⁶', 'configuration'), chemCanon(FE, 'configuration'), 'a core is part of the print');
  assert.equal(chemCanon('[Kr]5 s^{2} 4 d^{10}', 'configuration'), '[Kr]4d10 5s2');
  assert.equal(chemCanon('2 p', 'configuration'), null, 'a subshell is no configuration');
  assert.equal(isConfiguration('2p'), false);
  assert.equal(isConfiguration('1s²2s¹'), true);
  assert.equal(isConfiguration('[Ne]3s¹'), true);
});

test('the lint: a key is written in print and is a configuration that can exist', () => {
  assert.equal(configurationKeyProblem(FE), null);
  assert.equal(configurationKeyProblem('[Kr]5s²4d¹⁰'), null);
  assert.match(configurationKeyProblem('1s2 2s2 2p6'), /not written in print/);
  assert.match(configurationKeyProblem('1s^2'), /not written in print/);
  assert.match(configurationKeyProblem('1s²2s²2p⁸'), /holds at most 6/);
  assert.match(configurationKeyProblem('1s²2d²'), /There is no 2d subshell/);
  assert.match(configurationKeyProblem('1s²1s²'), /twice/);
  assert.match(chemKeyProblem(FE, 'configuration', '1s2'), /only the noble-gas core that is the whole key/);
  assert.match(chemKeyProblem(FE, 'formula'), /declare answerForm="configuration"/);
  assert.match(chemKeyProblem('x', 'exact'), /"configuration", "ordering", or "quantum-numbers"/);
});

test('the text grader hands a configuration to this reader; a subshell label stays a word', () => {
  assert.equal(gradeText('1s2 2s2 2p3', '1s²2s²2p³', { form: 'configuration' }).status, 'correct');
  assert.equal(checkText('[He]2s2 2p3', '1s²2s²2p³', { form: 'configuration' }), 'form');
  // 6.3's "Identify the subshell …" is a plain textin keyed 2p.
  for (const typed of ['2p', '2 p', '2P', ' 2p. ']) assert.equal(checkText(typed, '2p'), 'correct', typed);
  for (const typed of ['2s', '3p', 'p']) assert.equal(checkText(typed, '2p'), 'incorrect', typed);
  // Named with its noun (the rendered-page reading of 6.3).
  for (const typed of ['2p subshell', 'the 2p subshell', '2p orbital', '2p orbitals', '2 p subshell', 'The 2P Orbitals']) {
    assert.equal(checkText(typed, '2p'), 'correct', typed);
  }
  for (const typed of ['2s subshell', '3p orbitals']) assert.equal(checkText(typed, '2p'), 'incorrect', typed);
  // A bare letter is told what is missing; the field stays open.
  for (const typed of ['p', 'P', 'the p subshell', 'd orbitals']) {
    assert.deepEqual(gradeText(typed, '2p'), { status: 'incorrect', message: SUBSHELL_LETTER_ONLY }, typed);
  }
  assert.deepEqual(gradeText('q', '2p'), { status: 'incorrect' });
  assert.deepEqual(gradeText('p', 'proton'), { status: 'incorrect' }, 'only against a key that is a subshell');
});

test('a key that is a noble-gas core alone (7.1: "K⁺: [Ar]") grades the core, its expansion, and any core-plus-rest that holds the same electrons', () => {
  for (const typed of ['[Ar]', '[ar]', 'Ar', '1s2 2s2 2p6 3s2 3p6', '[Ne]3s2 3p6', '[Ne] 3s² 3p⁶']) assert.equal(status(typed, '[Ar]'), 'correct', typed);
  // The atom's configuration, or another core, is told the count is wrong — never the count itself.
  assert.deepEqual(checkConfiguration('[Ar]4s1', '[Ar]'), { status: 'incorrect', message: CONFIGURATION_COUNT });
  assert.deepEqual(checkConfiguration('[Ne]', '[Ar]'), { status: 'incorrect', message: CONFIGURATION_COUNT });
  // A key, a gate's canon, and a read-back: bracketed it is a configuration; bare "Ar" is argon's symbol.
  assert.equal(configurationKeyProblem('[Ar]'), null);
  assert.equal(chemKeyProblem('[Ne]', 'configuration'), null);
  assert.match(configurationKeyProblem('Ar'), /does not read as an electron configuration/);
  assert.equal(configurationCanon('[Ar]'), '[Ar]');
  assert.equal(chemCanon('[Ne]', 'configuration'), '[Ne]');
  assert.equal(configurationCanon('Ar'), null);
  assert.notEqual(configurationCanon('[Ar]'), configurationCanon('1s²2s²2p⁶3s²3p⁶'), 'a core the source prints is the key\'s');
  assert.equal(isConfiguration('[Ar]'), true);
  assert.equal(isConfiguration('Ar'), false);
  assert.equal(previewConfiguration('[Ar]'), '[Ar]');
  assert.equal(previewChem('[kr]', 'configuration'), '[Kr]');
  assert.equal(previewConfiguration('Ar'), '');
});
