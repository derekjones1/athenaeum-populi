import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const repositoryRoot = new URL('../', import.meta.url);

function read(path) {
  return readFileSync(new URL(path, repositoryRoot), 'utf8').replace(/\r\n/g, '\n');
}

function exists(path) {
  return existsSync(new URL(path, repositoryRoot));
}

function withoutFrontmatter(source) {
  const match = source.match(/^---\n[\s\S]*?\n---\n\n([\s\S]*)$/);
  assert.ok(match, 'published documentation needs YAML frontmatter');
  return match[1].trimEnd();
}

function withoutTopHeading(source) {
  return source.replace(/^# .+\n\n/, '').trimEnd();
}

for (const name of ['authoring-playbook.md', 'knowledge-check-playbook.md']) {
  assert.equal(
    withoutFrontmatter(read(`content/docs/${name}`)),
    withoutTopHeading(read(`docs/${name}`)),
    `content/docs/${name} must publish the canonical docs/${name} body without a duplicate page title`,
  );
}

const authoring = read('docs/authoring-playbook.md');
assert.match(authoring, /plain Markdown with Hugo shortcodes/);
assert.match(authoring, /answerMode="unordered"/);
assert.match(authoring, /Run `npm test`/);
assert.match(authoring, /chapters and Knowledge Checks share one sequential weight order/);
assert.match(authoring, /before July 22, 2026[\s\S]*grandfathered/);

const knowledgeChecks = read('docs/knowledge-check-playbook.md');
assert.match(knowledgeChecks, /must not overlap/);
assert.match(knowledgeChecks, /filename, title,\s+`source_chapters`/);

const architecture = read('docs/architecture.md');
assert.match(architecture, /Pagefind 1\.5\.2 builds one global index/);
assert.match(architecture, /loaded when a page containing a fill-in exercise initializes/);
assert.match(architecture, /`npm test` is the repository-wide source gate/);

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

console.log('documentation: published playbooks match the canonical Hugo guidance');
