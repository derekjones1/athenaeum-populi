import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
  collectionModuleIds,
  loadSourceLock,
  normalizeSemanticText,
  parseCollectionXml,
  parseLocalSection,
  parseModuleXml,
  parseXml,
  verifyCommittedSourceMap,
} from './lib-openstax-source.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

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
  assert.deepEqual(lock.bundleKeys, ['prealgebra-bundle', 'college-algebra-bundle']);
  assert.deepEqual(
    [...lock.books.keys()].sort(),
    ['elementary-algebra', 'intermediate-algebra', 'precalculus', 'prealgebra'].sort(),
  );
  for (const [book, config] of lock.books) {
    assert.ok(lock.bundles[config.bundleKey], `${book} resolves to a declared bundle`);
    assert.match(config.authoredBaselineCommit, /^[0-9a-f]{40}$/, `${book} pins a baseline commit`);
  }
  assert.equal(lock.books.get('precalculus').bundleKey, 'college-algebra-bundle');
  assert.equal(lock.books.get('precalculus').authoringStatus, 'scaffolded');
  assert.equal(lock.books.get('prealgebra').bundleKey, 'prealgebra-bundle');
  assert.equal(lock.books.get('prealgebra').authoringStatus, 'complete');
  assert.equal(lock.bundles['college-algebra-bundle'].moduleScope, 'mapped-collections');
});

test('committed provenance maps all 236 local math sections exactly once', () => {
  const result = verifyCommittedSourceMap(repositoryRoot);
  assert.deepEqual(result.errors, []);
  assert.equal(result.expectedCount, 236);
  assert.equal(result.actualCount, 236);
  const counts = Object.groupBy(result.map.sections, (entry) => entry.book);
  assert.equal(counts.prealgebra.length, 60);
  assert.equal(counts['elementary-algebra'].length, 71);
  assert.equal(counts['intermediate-algebra'].length, 70);
  assert.equal(counts.precalculus.length, 35);
  const representative = result.map.sections.find((entry) => (
    entry.book === 'intermediate-algebra' && entry.sourceSection === '3.1'
  ));
  assert.equal(representative.moduleId, 'm81369');
  const bundleForBook = {
    prealgebra: 'prealgebra-bundle',
    'elementary-algebra': 'prealgebra-bundle',
    'intermediate-algebra': 'prealgebra-bundle',
    precalculus: 'college-algebra-bundle',
  };
  for (const entry of result.map.sections) {
    assert.equal(entry.bundle, bundleForBook[entry.book], `${entry.localPath} is attributed to its pinned bundle`);
  }
});

test('the Precalculus book is mapped chapter-complete with its authored sections only', () => {
  const result = verifyCommittedSourceMap(repositoryRoot);
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.map.books.precalculus, {
    bundle: 'college-algebra-bundle',
    authoringStatus: 'scaffolded',
    upstreamChapters: 12,
    upstreamSections: 73,
    localChapters: 12,
    mappedSections: 35,
  });
  assert.deepEqual(
    Object.keys(result.map.bundles).sort(),
    ['college-algebra-bundle', 'prealgebra-bundle'],
  );
});

test('reconciliation decisions refer to mapped paths and modules', () => {
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/math-source-map.json'), 'utf8'));
  const lock = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/math-source-lock.json'), 'utf8'));
  const decisions = JSON.parse(readFileSync(
    path.join(repositoryRoot, 'data/openstax/math-reconciliation-decisions.json'),
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
