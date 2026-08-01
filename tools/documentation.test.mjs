import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const repositoryRoot = new URL('../', import.meta.url);

function read(path) {
  return readFileSync(new URL(path, repositoryRoot), 'utf8').replace(/\r\n/g, '\n');
}

function exists(path) {
  return existsSync(new URL(path, repositoryRoot));
}

// The playbooks live in `docs/` only. They were previously mirrored into
// `content/docs/` and published as site pages, which meant two copies of each
// file to keep byte-identical. Nothing linked to those routes and they were
// absent from the nav and the legacy route manifest, so the mirror was deleted
// rather than kept in sync. Guard against it coming back.
for (const name of ['authoring-playbook.md', 'knowledge-check-playbook.md']) {
  assert.ok(
    exists(`docs/${name}`),
    `docs/${name} is the canonical location for this playbook`,
  );
  assert.ok(
    !exists(`content/docs/${name}`),
    `content/docs/${name} must not exist — docs/${name} is canonical, and a published mirror has to be kept byte-identical by hand`,
  );
}
assert.ok(
  !exists('content/docs/_index.md'),
  'content/docs/ was removed with the playbook mirror; do not reintroduce the section',
);

const authoring = read('docs/authoring-playbook.md');
assert.match(authoring, /plain Markdown with Hugo shortcodes/);
assert.match(authoring, /answerMode="unordered"/);
assert.match(authoring, /Run `npm test`/);
assert.match(authoring, /chapters and Knowledge Checks share one sequential weight order/);
assert.match(authoring, /before July 22, 2026[\s\S]*grandfathered/);
assert.match(authoring, /section-final `## Practice` block/);
assert.match(authoring, /exactly five(?:\*\*)? interactive exercises/);
assert.match(authoring, /before August 1, 2026[\s\S]*retrofit worklist/);

const knowledgeChecks = read('docs/knowledge-check-playbook.md');
assert.match(knowledgeChecks, /must not overlap/);
assert.match(knowledgeChecks, /filename, title,\s+`source_chapters`/);
assert.match(knowledgeChecks, /exercise, problem, and solution element IDs/);

const openStaxWorkflow = read('docs/openstax-source-workflow.md');
assert.match(openStaxWorkflow, /report-only connection/);
assert.match(openStaxWorkflow, /all 201 numbered sections map deterministically/);
assert.match(openStaxWorkflow, /does not by itself\s+prove every local equation/);
assert.match(openStaxWorkflow, /Precalculus 2e is pinned and scaffolded, with authoring underway/);
assert.match(openStaxWorkflow, /moduleScope: "mapped-collections"/);
assert.match(openStaxWorkflow, /Every command accepts `--bundle KEY`/);

const sourceLock = JSON.parse(read('data/openstax/math-source-lock.json'));
assert.equal(sourceLock.schemaVersion, 2);
for (const bundleKey of Object.keys(sourceLock.bundles)) {
  assert.match(
    openStaxWorkflow,
    new RegExp(`\`?${bundleKey}\`?`),
    `the workflow doc documents the ${bundleKey} source bundle`,
  );
}

const architecture = read('docs/architecture.md');
assert.match(architecture, /Pagefind 1\.5\.2 builds one global index/);
assert.match(architecture, /loaded when a page containing a fill-in exercise initializes/);
assert.match(architecture, /`npm test` is the repository-wide checked-source gate/);

const promotionChecklist = read('docs/main-branch-promotion-checklist.md');
assert.match(promotionChecklist, /Hugo extended 0\.164\.0/);
assert.match(promotionChecklist, /Pagefind 1\.5\.2/);
assert.match(promotionChecklist, /Deploy production/);

assert.equal(exists('MIGRATION.md'), false, 'completed migration plan must stay retired');
assert.equal(exists('MIGRATION-STATUS.md'), false, 'completed migration status must stay retired');

const hugoConfig = read('hugo.toml');
assert.match(hugoConfig, /min = "0\.164\.0"/);
assert.match(hugoConfig, /max = "0\.164\.0"/);
const mathParams = hugoConfig.match(/\[params\.math\]([\s\S]*?)\[params\.math\.katex\]/)?.[1];
assert.ok(mathParams, 'hugo.toml must keep the tested build-time math configuration');
assert.doesNotMatch(mathParams, /^\s*(?:enable|render)\s*=/m);

const packageJson = JSON.parse(read('package.json'));
assert.equal(packageJson.devDependencies.pagefind, '1.5.2');
assert.match(packageJson.scripts.test, /verify:content/);
assert.match(packageJson.scripts.test, /lint/);
assert.equal(packageJson.scripts['source:verify'], 'node tools/openstax-source.mjs verify-map');

console.log('documentation: published playbooks match the canonical Hugo guidance');
