import test from 'node:test';
import assert from 'node:assert/strict';
import { extractModuleImages, kindOf, parseArgs, plainXmlText, stemOf, variantWidths } from './vendor-media.mjs';

test('variantWidths never upscales and dedupes', () => {
  assert.deepEqual(variantWidths(430), [430]);
  assert.deepEqual(variantWidths(800), [800]);
  assert.deepEqual(variantWidths(1200), [800, 1200]);
  assert.deepEqual(variantWidths(1600), [800, 1600]);
  assert.deepEqual(variantWidths(3000), [800, 1600]);
});

test('extractModuleImages pairs each image with its media alt and innermost figure caption', () => {
  const xml = `
<document>
<figure id="fig-1">
  <media id="m1" alt="Photo A depicts algae. Photo B depicts fossils.">
    <image mime-type="image/jpg" src="../../media/Figure_01_01_01-3978.jpg"/>
  </media>
  <caption>Formerly called blue-green algae, these &amp; those (credit a: modification of work by X)</caption>
</figure>
<figure id="fig-2">
  <figure id="fig-2a">
    <media id="m2a" alt="Inner alt"><image src="../../media/Inner.png" width="300"/></media>
    <caption>inner caption</caption>
  </figure>
  <caption>outer caption</caption>
</figure>
<note class="visual-connection"><media id="m3" alt="Bare media"><image src="../../media/Bare.png"/></media></note>
<media id="m4" alt="not vendored"><image src="http://example.test/x.png"/></media>
</document>`;
  const images = extractModuleImages('m66427', xml);
  assert.deepEqual(images, [
    { module: 'm66427', source: 'media/Figure_01_01_01-3978.jpg', alt: 'Photo A depicts algae. Photo B depicts fossils.', caption: 'Formerly called blue-green algae, these & those (credit a: modification of work by X)' },
    { module: 'm66427', source: 'media/Inner.png', alt: 'Inner alt', caption: 'inner caption' },
    { module: 'm66427', source: 'media/Bare.png', alt: 'Bare media', caption: '' },
  ]);
});

test('stemOf drops the extension only', () => {
  assert.equal(stemOf('media/Figure_01_01_09new.png'), 'Figure_01_01_09new');
  assert.equal(stemOf('media/Figure_01_01_01-3978.jpg'), 'Figure_01_01_01-3978');
});

test('plainXmlText strips tags and decodes entities', () => {
  assert.equal(plainXmlText('<emphasis effect="italics">Homo</emphasis> sapiens &amp; co'), 'Homo sapiens & co');
});

test('parseArgs requires a book and at least one chapter or module', () => {
  assert.throws(() => parseArgs(['--chapter', '1']), /--book/);
  assert.throws(() => parseArgs(['--book', 'biology']), /at least one/);
  assert.throws(() => parseArgs(['--book', 'biology', '--chapter', 'x']), /positive integer/);
  assert.deepEqual(parseArgs(['--book', 'biology', '--chapter', '1', '--module', 'm1', '--dry-run']),
    { book: 'biology', chapters: [1], modules: ['m1'], dryRun: true });
});

test('kindOf reads photo from a JPEG source and diagram from anything else', () => {
  assert.equal(kindOf('media/Figure_01_01_01-3978.jpg'), 'photo');
  assert.equal(kindOf('media/Figure_01_01_04.JPEG'), 'photo');
  assert.equal(kindOf('media/Figure_01_01_03.png'), 'diagram');
  assert.equal(kindOf('media/Figure_01_02_17abcd.gif'), 'diagram');
});
