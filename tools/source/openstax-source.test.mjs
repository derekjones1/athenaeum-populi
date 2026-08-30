import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
  collectionModuleIds,
  formatBookSummaryLine,
  formatTriesCoverage,
  loadSourceLock,
  normalizeSemanticText,
  parseCollectionXml,
  parseLocalSection,
  parseModuleXml,
  parseXml,
  verifyCommittedSourceMap,
} from '../lib/openstax-source.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const biologySourceDir = path.join(repositoryRoot, 'sources/openstax/osbooks-biology-bundle');

test('XML parser preserves namespaces, mixed content, and entities', () => {
  const document = parseXml('<x:root a="1 &amp; 2">before<x:item>3</x:item>after</x:root>');
  const root = document.children[0];
  assert.equal(root.name, 'x:root');
  assert.equal(root.attributes.a, '1 & 2');
  assert.equal(root.children[0], 'before');
  assert.equal(root.children[1].name, 'x:item');
  assert.equal(root.children[2], 'after');
  assert.throws(() => parseXml('<root><item></root>'), /mismatched XML closing tag/);
});

test('collection mapping treats only the first chapter module as the introduction', () => {
  const collection = parseCollectionXml(`
    <col:collection xmlns:col="urn:col" xmlns:md="urn:md">
      <metadata><md:title>Example 2e</md:title><md:slug>example-2e</md:slug><md:uuid>u1</md:uuid></metadata>
      <col:content>
        <col:subcollection>
          <md:title>Chapter One</md:title>
          <col:content>
            <col:module document="intro"/>
            <col:module document="section-1"/>
            <col:module document="section-2"/>
          </col:content>
        </col:subcollection>
      </col:content>
    </col:collection>
  `);
  assert.deepEqual(collection.chapters[0].sectionModuleIds, ['section-1', 'section-2']);
  assert.equal(collection.chapters[0].introModuleId, 'intro');
  assert.equal(collection.chapters[0].unit, null, 'a flat collection has no unit nesting');
  assert.deepEqual(collection.frontMatterModuleIds, []);
  assert.deepEqual(collection.backMatterModuleIds, []);
});

test('collection mapping flattens unit -> chapter -> module nesting on the fixture', () => {
  const xml = readFileSync(
    path.join(repositoryRoot, 'tools/fixtures/openstax/biology-2e-nested.collection.xml'),
    'utf8',
  );
  const collection = parseCollectionXml(xml);
  assert.equal(collection.slug, 'biology-2e-nested-fixture');
  assert.deepEqual(collection.frontMatterModuleIds, ['m-preface']);
  assert.deepEqual(collection.backMatterModuleIds, ['m-appendix']);
  assert.equal(collection.chapters.length, 4);

  assert.deepEqual(collection.chapters.map((chapter) => chapter.chapter), [1, 2, 3, 4]);
  assert.deepEqual(collection.chapters.map((chapter) => chapter.title), [
    'Chapter One', 'Chapter Two', 'Chapter Three', 'Chapter Four',
  ]);
  assert.deepEqual(collection.chapters.map((chapter) => chapter.unit), [
    { index: 1, title: 'Unit One' },
    { index: 1, title: 'Unit One' },
    { index: 2, title: 'Unit Two' },
    { index: 2, title: 'Unit Two' },
  ]);
  assert.deepEqual(collection.chapters[0].moduleIds, ['m-1-0', 'm-1-1', 'm-1-2']);
  assert.equal(collection.chapters[0].introModuleId, 'm-1-0');
  assert.deepEqual(collection.chapters[0].sectionModuleIds, ['m-1-1', 'm-1-2']);
  assert.deepEqual(collection.chapters[2].moduleIds, ['m-3-0', 'm-3-1']);
  assert.deepEqual(collection.chapters[2].sectionModuleIds, ['m-3-1']);
  assert.deepEqual(collection.chapters[3].sectionModuleIds, ['m-4-1', 'm-4-2', 'm-4-3']);
});

test('collection mapping flattens unit -> chapter -> module nesting on the real Biology 2e checkout', { skip: !existsSync(biologySourceDir) && 'run npm run source:fetch -- --bundle biology-bundle first' }, () => {
  const xml = readFileSync(
    path.join(biologySourceDir, 'collections/biology-2e.collection.xml'),
    'utf8',
  );
  const collection = parseCollectionXml(xml);
  assert.equal(collection.chapters.length, 47);
  const upstreamSections = collection.chapters.reduce((sum, chapter) => sum + chapter.sectionModuleIds.length, 0);
  assert.equal(upstreamSections, 208);
  assert.ok(collection.chapters.every((chapter) => chapter.unit && Number.isInteger(chapter.unit.index) && chapter.unit.title));
  assert.deepEqual(collection.frontMatterModuleIds, ['m66425']);
  assert.deepEqual(collection.backMatterModuleIds, ['m66719', 'm66716', 'm66717']);
});

test('CNXML extraction keeps math signs and excludes chapter review material', () => {
  const module = parseModuleXml(`
    <document xmlns="urn:cnxml" xmlns:m="http://www.w3.org/1998/Math/MathML">
      <title>Signed Fractions</title>
      <metadata xmlns:md="urn:md">
        <md:content-id>m1</md:content-id>
        <md:uuid>u1</md:uuid>
        <md:abstract><list><item>Solve an inequality</item></list></md:abstract>
      </metadata>
      <content>
        <section id="core"><title>Solve</title>
          <note id="try-1" class="try"><exercise><problem><para>
            Solve <m:math><m:mfrac><m:mn>2</m:mn><m:mn>3</m:mn></m:mfrac><m:mi>x</m:mi><m:mo>−</m:mo><m:mn>1</m:mn></m:math>.
          </para></problem><solution><para><m:math><m:mi>x</m:mi><m:mo>&gt;</m:mo><m:mn>1</m:mn></m:math></para></solution></exercise></note>
        </section>
        <section><title>Chapter 1 Review Exercises</title><note class="try"><exercise><problem><para>Omitted review</para></problem></exercise></note></section>
        <section><title>Chapter 1 Practice Test</title><para>Omitted test</para></section>
      </content>
    </document>
  `);
  assert.deepEqual(module.coreHeadings, ['Solve']);
  assert.equal(module.tries.length, 1);
  assert.deepEqual(module.tries[0].problemMath, ['(2)/(3)x-1']);
  assert.deepEqual(module.tries[0].solutionMath, ['x>1']);
});

test('semantic normalization distinguishes an upstream sign change', () => {
  const before = normalizeSemanticText(String.raw`$\tfrac{1}{15}z - \tfrac{3}{5}$`);
  const after = normalizeSemanticText(String.raw`$\tfrac{1}{15}z + \tfrac{3}{5}$`);
  assert.equal(before, '(1)/(15)z-(3)/(5)');
  assert.equal(after, '(1)/(15)z+(3)/(5)');
  assert.notEqual(before, after);
});

test('every mapped module id is collected for a collection-scoped sparse checkout', () => {
  const moduleIds = collectionModuleIds(`
    <col:collection xmlns:col="urn:col">
      <col:content>
        <col:module document="preface"/>
        <col:subcollection><col:content>
          <col:module document="intro"/>
          <col:module document="section-1"/>
          <col:module document="section-1"/>
        </col:content></col:subcollection>
      </col:content>
    </col:collection>
  `);
  assert.deepEqual(moduleIds, ['intro', 'preface', 'section-1']);
});

test('the source lock pins one upstream bundle per book', () => {
  const lock = loadSourceLock(repositoryRoot);
  assert.deepEqual(lock.bundleKeys, ['prealgebra-bundle', 'college-algebra-bundle', 'biology-bundle']);
  assert.deepEqual(
    [...lock.books.keys()].sort(),
    ['biology', 'elementary-algebra', 'intermediate-algebra', 'precalculus', 'prealgebra'].sort(),
  );
  for (const [book, config] of lock.books) {
    assert.ok(lock.bundles[config.bundleKey], `${book} resolves to a declared bundle`);
    assert.match(config.authoredBaselineCommit, /^[0-9a-f]{40}$/, `${book} pins a baseline commit`);
    assert.match(config.contentPath, /^content\/[^/]/, `${book} pins a contentPath under content/`);
    assert.ok(!config.contentPath.endsWith('/'), `${book} contentPath has no trailing slash`);
  }
  assert.equal(lock.books.get('precalculus').bundleKey, 'college-algebra-bundle');
  assert.equal(lock.books.get('precalculus').authoringStatus, 'complete');
  assert.equal(lock.books.get('prealgebra').bundleKey, 'prealgebra-bundle');
  assert.equal(lock.books.get('prealgebra').authoringStatus, 'complete');
  assert.equal(lock.bundles['college-algebra-bundle'].moduleScope, 'mapped-collections');
  assert.equal(lock.books.get('biology').bundleKey, 'biology-bundle');
  assert.equal(lock.books.get('biology').authoringStatus, 'in-progress');
  assert.equal(lock.books.get('biology').contentPath, 'content/life-health-sciences/biology');
  assert.equal(lock.bundles['biology-bundle'].moduleScope, 'mapped-collections');
});

test('loadSourceLock rejects a book missing contentPath, naming the book', () => {
  const lock = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-lock.json'), 'utf8'));
  delete lock.bundles['biology-bundle'].books.biology.contentPath;
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'openstax-lock-'));
  try {
    mkdirSync(path.join(tempRoot, 'data/openstax'), { recursive: true });
    writeFileSync(path.join(tempRoot, 'data/openstax/source-lock.json'), JSON.stringify(lock));
    assert.throws(
      () => loadSourceLock(tempRoot),
      /biology-bundle\/biology is missing contentPath/,
    );
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

test('formatBookSummaryLine states an unmapped book visibly rather than silently', () => {
  const summary = {
    bundle: 'biology-bundle',
    authoringStatus: 'scaffolded',
    upstreamChapters: 47,
    upstreamSections: 208,
    localChapters: 0,
    mappedSections: 0,
  };
  assert.equal(
    formatBookSummaryLine('biology', summary),
    'biology: scaffolded — 0/47 chapters, 0/208 sections mapped',
  );
});

test('formatTriesCoverage reports n/a rather than 0/0 for a book with no note.try elements', () => {
  assert.equal(formatTriesCoverage(0, 0), 'n/a');
  assert.equal(formatTriesCoverage(3, 5), '3/5');
});

test('committed provenance maps all 284 local sections exactly once', () => {
  const result = verifyCommittedSourceMap(repositoryRoot);
  assert.deepEqual(result.errors, []);
  assert.equal(result.expectedCount, 284);
  assert.equal(result.actualCount, 284);
  const counts = Object.groupBy(result.map.sections, (entry) => entry.book);
  assert.equal(counts.prealgebra.length, 60);
  assert.equal(counts['elementary-algebra'].length, 71);
  assert.equal(counts['intermediate-algebra'].length, 70);
  assert.equal(counts.precalculus.length, 73);
  assert.equal(counts.biology.length, 10);
  const representative = result.map.sections.find((entry) => (
    entry.book === 'intermediate-algebra' && entry.sourceSection === '3.1'
  ));
  assert.equal(representative.moduleId, 'm81369');
  const bundleForBook = {
    prealgebra: 'prealgebra-bundle',
    'elementary-algebra': 'prealgebra-bundle',
    'intermediate-algebra': 'prealgebra-bundle',
    precalculus: 'college-algebra-bundle',
    biology: 'biology-bundle',
  };
  for (const entry of result.map.sections) {
    assert.equal(entry.bundle, bundleForBook[entry.book], `${entry.localPath} is attributed to its pinned bundle`);
  }
});

test('the Precalculus book is mapped complete, every upstream section authored', () => {
  const result = verifyCommittedSourceMap(repositoryRoot);
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.map.books.precalculus, {
    bundle: 'college-algebra-bundle',
    contentPath: 'content/math/precalculus',
    authoringStatus: 'complete',
    upstreamChapters: 12,
    upstreamSections: 73,
    localChapters: 12,
    mappedSections: 73,
  });
  assert.deepEqual(
    Object.keys(result.map.bundles).sort(),
    ['biology-bundle', 'college-algebra-bundle', 'prealgebra-bundle'],
  );
});

test('the Biology book is pinned and in progress, its local landings and mapped sections counted visibly', () => {
  const result = verifyCommittedSourceMap(repositoryRoot);
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.map.books.biology, {
    bundle: 'biology-bundle',
    contentPath: 'content/life-health-sciences/biology',
    authoringStatus: 'in-progress',
    upstreamChapters: 47,
    upstreamSections: 208,
    localChapters: 3,
    mappedSections: 10,
    // The source's unit → chapter grouping, recorded so the sidebar can nest
    // chapters under their unit and so the grouping cannot drift from the
    // pinned collection. Every chapter 1–47 in exactly one unit.
    units: [
      { index: 1, title: 'The Chemistry of Life', chapters: [1, 2, 3] },
      { index: 2, title: 'The Cell', chapters: [4, 5, 6, 7, 8, 9, 10] },
      { index: 3, title: 'Genetics', chapters: [11, 12, 13, 14, 15, 16, 17] },
      { index: 4, title: 'Evolutionary Processes', chapters: [18, 19, 20] },
      { index: 5, title: 'Biological Diversity', chapters: [21, 22, 23, 24, 25, 26, 27, 28, 29] },
      { index: 6, title: 'Plant Structure and Function', chapters: [30, 31, 32] },
      { index: 7, title: 'Animal Structure and Function', chapters: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43] },
      { index: 8, title: 'Ecology', chapters: [44, 45, 46, 47] },
    ],
  });
  assert.equal(result.map.books.precalculus.units, undefined, 'a flat collection records no units key');
});

test('verify-map rejects a units list that drops, duplicates, or misorders a chapter', () => {
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const check = (mutate) => {
    const copy = JSON.parse(JSON.stringify(map));
    mutate(copy.books.biology);
    const dir = mkdtempSync(path.join(os.tmpdir(), 'ap-units-'));
    try {
      // A throwaway repository root holding only the lock, the mutated map,
      // and the biology cover: enough for verifyCommittedSourceMap's book
      // summary checks to run and nothing else to differ.
      mkdirSync(path.join(dir, 'data/openstax'), { recursive: true });
      cpSync(path.join(repositoryRoot, 'data/openstax/source-lock.json'), path.join(dir, 'data/openstax/source-lock.json'));
      writeFileSync(path.join(dir, 'data/openstax/source-map.json'), JSON.stringify(copy));
      copy.sections = [];
      for (const book of Object.values(copy.books)) book.mappedSections = 0;
      writeFileSync(path.join(dir, 'data/openstax/source-map.json'), JSON.stringify(copy));
      return verifyCommittedSourceMap(dir).errors.filter((e) => /unit/.test(e));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  };
  assert.deepEqual(check(() => {}), [], 'the committed grouping is structurally sound');
  assert.match(check((b) => { b.units[0].chapters = [1, 2]; }).join('\n'), /chapter 3 belongs to no unit/);
  assert.match(check((b) => { b.units[1].chapters.push(3); }).join('\n'), /chapter 3 in units 1 and 2/);
  assert.match(check((b) => { b.units.reverse(); }).join('\n'), /out of order/);
  assert.match(check((b) => { b.units[7].title = ' '; }).join('\n'), /unit 8 has no title/);
});

test('reconciliation decisions refer to mapped paths and modules', () => {
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const lock = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-lock.json'), 'utf8'));
  const decisions = JSON.parse(readFileSync(
    path.join(repositoryRoot, 'data/openstax/reconciliation-decisions.json'),
    'utf8',
  ));
  assert.equal(decisions.schemaVersion, 2);
  assert.deepEqual(
    Object.keys(decisions.targetCommits).sort(),
    Object.keys(lock.bundles).sort(),
    'every pinned bundle has a decision target commit',
  );
  for (const [bundleKey, commit] of Object.entries(decisions.targetCommits)) {
    assert.equal(commit, lock.bundles[bundleKey].commit, `decisions target the pinned ${bundleKey} commit`);
  }
  const byPath = new Map(map.sections.map((entry) => [entry.localPath, entry]));
  const keys = new Set();
  for (const decision of [...decisions.metadataDecisions, ...decisions.upstreamDriftDecisions]) {
    const mapped = byPath.get(decision.localPath);
    assert.ok(mapped, `decision path is mapped: ${decision.localPath}`);
    assert.equal(decision.moduleId, mapped.moduleId, `decision module matches ${decision.localPath}`);
    assert.equal(decision.bundle, mapped.bundle, `decision bundle matches ${decision.localPath}`);
    const key = `${decision.localPath}:${decision.status}`;
    assert.ok(!keys.has(key), `decision is unique: ${key}`);
    keys.add(key);
  }
});


test('a local section exposes its objectives list for the audit parity check', () => {
  const listed = parseLocalSection([
    '---',
    'title: Introduction to Whole Numbers',
    'source_section: "1.1"',
    '---',
    '',
    '{{< callout type="info" >}}',
    '**By the end of this section, you will be able to:**',
    '',
    '- Use place value to name whole numbers',
    '- Use place value to write whole numbers',
    '{{< /callout >}}',
    '',
    'Prose.',
  ].join('\n'));
  assert.deepEqual(listed.objectives, [
    'Use place value to name whole numbers',
    'Use place value to write whole numbers',
  ]);

  // The condensation that hid an objective in section 1.1: two source
  // objectives written as one phrase. The audit compares counts, so this
  // parses as a single objective and diverges from the source abstract.
  const condensed = parseLocalSection([
    '---',
    'title: Introduction to Whole Numbers',
    'source_section: "1.1"',
    '---',
    '',
    '{{< callout type="info" >}}',
    '**By the end of this section, you will be able to:**',
    '',
    '- Use place value to name and write whole numbers',
    '{{< /callout >}}',
    '',
    'Prose.',
  ].join('\n'));
  assert.equal(condensed.objectives.length, 1);

  const prose = parseLocalSection([
    '---',
    'title: Introduction to Whole Numbers',
    'source_section: "1.1"',
    '---',
    '',
    '{{< callout type="info" >}}',
    '**By the end of this section, you will be able to:** name whole numbers, and write whole numbers.',
    '{{< /callout >}}',
    '',
    'Prose.',
  ].join('\n'));
  assert.deepEqual(prose.objectives, [], 'prose objectives are not silently split into items');
});
