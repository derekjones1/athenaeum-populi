/**
 * Documentation parity gate.
 *
 * Prose is the one part of this repository nothing else checks. Every claim
 * asserted here is one that a reader — human or agent — would act on: a command
 * to run, a pinned version, a count, a prohibition. The rule for adding an
 * assertion is *derive, don't restate*: read the value from the code, the
 * config, or the data file that owns it, then assert the documents agree. An
 * assertion that hardcodes the number on both sides only doubles the drift.
 *
 * The AGENTS.md / README.md / CLAUDE.md trio is covered here for the same
 * reason `docs/` is: those three carry the claims an agent reads first and acts
 * on without checking, and one of them (the Practice backlog count) had already
 * drifted 38 sections behind the lint before a hand edit caught it.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { ANSWER_FORM_TOKENS } from '../assets/js/lib/check-answer.mjs';

const repositoryRoot = new URL('../', import.meta.url);

function read(path) {
  return readFileSync(new URL(path, repositoryRoot), 'utf8').replace(/\r\n/g, '\n');
}

function exists(path) {
  return existsSync(new URL(path, repositoryRoot));
}

/**
 * Capture one value out of a file, failing with the file and pattern named
 * rather than with `null[1]`. A moved or reworded claim must fail loudly here:
 * a regex that silently stops matching is exactly the drift this file exists to
 * catch.
 */
function capture(path, pattern, label) {
  const match = read(path).match(pattern);
  assert.ok(match, `${path} must still state ${label} (pattern ${pattern})`);
  return match[1];
}

// Every hand-written document an agent or a contributor reads. The two
// `openstax-*-audit.md` files are generated reports ("do not hand-edit"), so
// their numbers are outputs rather than claims; `openstax-errata.md` is a
// gitignored local scratchpad and is absent in CI. Read the directory rather
// than listing names, so a new doc is covered the day it lands.
const GENERATED_OR_LOCAL_DOCS = new Set([
  'openstax-existing-math-audit.md',
  'openstax-upstream-history-audit.md',
  'openstax-errata.md',
]);
const AGENT_DOCS = ['AGENTS.md', 'README.md', 'CLAUDE.md'];
const PROSE_DOCS = [
  ...AGENT_DOCS,
  ...readdirSync(new URL('docs/', repositoryRoot))
    .filter((name) => name.endsWith('.md') && !GENERATED_OR_LOCAL_DOCS.has(name))
    .sort()
    .map((name) => `docs/${name}`),
];

const packageJson = JSON.parse(read('package.json'));

test('the playbooks live in docs/ only', () => {
  // They were previously mirrored into `content/docs/` and published as site
  // pages, which meant two copies of each file to keep byte-identical. Nothing
  // linked to those routes and they were absent from the nav and the legacy
  // route manifest, so the mirror was deleted rather than kept in sync. Guard
  // against it coming back.
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
});

test('the authoring playbook documents the authoring rules', () => {
  const authoring = read('docs/authoring-playbook.md');
  assert.match(authoring, /plain Markdown with Hugo shortcodes/);
  assert.match(authoring, /answerMode="unordered"/);
  assert.match(authoring, /Run `npm test`/);
  assert.match(authoring, /chapters and Knowledge Checks share one sequential weight order/);
  assert.match(authoring, /before July 22, 2026[\s\S]*grandfathered/);
  assert.match(authoring, /section-final `## Practice` block/);
  // The Practice block sizes itself from the objectives list rather than a flat
  // count, so the playbook must document both halves of the rule and the
  // list-formatted callout the groups key to.
  assert.match(authoring, /one `### ` group per section\s+objective/);
  assert.match(authoring, /at least two interactive\s+exercises/);
  assert.match(authoring, /at least five\s+exercises overall/);
  assert.match(authoring, /one\s+component per part/);
  assert.match(authoring, /\*\*one\s+objective per Markdown list item\*\*/);
  // The missing-block rule is an ERROR now that the retrofit is finished; the
  // playbook must say so, or the next author reads it as optional.
  assert.match(authoring, /reports a\s+missing one as an \*\*error\*\*/);
  // Value grading cannot see the shape of a response, so a re-expression prompt
  // is only gradeable with an answerForm. The playbook must document the tokens
  // and the rule, or the next such exercise ships passable by retyping it.
  assert.match(authoring, /answerForm="lowest-terms"/);
  assert.match(authoring, /A categorical answer is never a number/);
  // The retrofit is done, but §5's working rules outlived it and several other
  // sections cite them by number — so the section stays, under its own title.
  assert.match(authoring, /## 5\. Working rules/);
  assert.match(authoring, /zero errors, and errors are all there is/);
  assert.match(authoring, /\*\*Never add a warning level back\.\*\*/);
  assert.match(authoring, /A rule that fires on sound content is a bug in the rule/);
});

test('the knowledge-check playbook documents the overlap and identity rules', () => {
  const knowledgeChecks = read('docs/knowledge-check-playbook.md');
  assert.match(knowledgeChecks, /must not overlap/);
  assert.match(knowledgeChecks, /filename, title,\s+`source_chapters`/);
  assert.match(knowledgeChecks, /exercise, problem, and solution element IDs/);
});

test('the OpenStax workflow doc documents every pinned bundle', () => {
  const openStaxWorkflow = read('docs/openstax-source-workflow.md');
  assert.match(openStaxWorkflow, /report-only connection/);
  // 201 is a frozen historical record — the "Initial reconciliation result"
  // captured when the three completed algebra books were the whole map. It is
  // deliberately NOT the live 212 asserted below; do not "fix" it to match.
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
});

test('the architecture doc describes the shipped runtime', () => {
  const architecture = read('docs/architecture.md');
  assert.match(architecture, /Pagefind 1\.5\.2 builds one global index/);
  assert.match(architecture, /loaded when a page containing a fill-in exercise initializes/);
  assert.match(architecture, /`npm test` is the repository-wide checked-source gate/);
});

test('retired documents stay retired', () => {
  assert.equal(
    exists('docs/main-branch-promotion-checklist.md'),
    false,
    'the main-branch promotion checklist was retired; CI is the promotion gate',
  );
  assert.equal(exists('MIGRATION.md'), false, 'completed migration plan must stay retired');
  assert.equal(exists('MIGRATION-STATUS.md'), false, 'completed migration status must stay retired');
});

test('hugo.toml keeps the tested build-time math configuration', () => {
  const hugoConfig = read('hugo.toml');
  const mathParams = hugoConfig.match(/\[params\.math\]([\s\S]*?)\[params\.math\.katex\]/)?.[1];
  assert.ok(mathParams, 'hugo.toml must keep the tested build-time math configuration');
  assert.doesNotMatch(mathParams, /^\s*(?:enable|render)\s*=/m);
});

test('package.json keeps the scripts the test gate composes', () => {
  assert.match(packageJson.scripts.test, /verify:content/);
  assert.match(packageJson.scripts.test, /lint/);
  assert.equal(packageJson.scripts['source:verify'], 'node tools/openstax-source.mjs verify-map');
});

// ---- answerForm token parity, in both directions ---------------------------

test('the playbook documents every answerForm token', () => {
  // Derived from the predicates rather than re-listed here: the token list used
  // to be copied into the playbook by hand, so adding a predicate could leave
  // the playbook silently behind. Iterating the export makes a new token fail
  // here until it is documented.
  const authoring = read('docs/authoring-playbook.md');
  for (const token of ANSWER_FORM_TOKENS) {
    assert.match(authoring, new RegExp(`\`${token.replace(/[<>]/g, '\\$&')}\``),
      `the playbook documents the ${token} answerForm token`);
  }
});

test('the fillin shortcode accepts exactly the exported answerForm tokens', () => {
  // The Hugo shortcode validates `answerForm` against its own hardcoded copy of
  // the list and `errorf`s on anything else. That copy cannot be derived from
  // JavaScript at template time, so assert the parity here — otherwise a new
  // token passes every test and then fails the production build the first time
  // content uses it.
  //
  // Both directions matter, and only one used to be covered. A token added to
  // the template alone is invisible to the grader: the shortcode accepts it,
  // the build passes, and `answerForm="…"` silently grades nothing. So parse
  // the template's own slice and assert set equality rather than containment.
  const fillinShortcode = read('layouts/shortcodes/fillin.html');
  const sliceLine = fillinShortcode.match(/\$formTokens := slice ([^\n]*?)-?\}\}/);
  assert.ok(sliceLine, 'layouts/shortcodes/fillin.html must define $formTokens with a literal slice');
  const templateTokens = new Set([...sliceLine[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]));

  // The parameterized families are the tokens the template cannot list
  // literally: each is matched by its own `findRE` a few lines below.
  const exported = new Set(ANSWER_FORM_TOKENS);
  assert.ok(exported.delete('denominator:<n>'), 'ANSWER_FORM_TOKENS still exports the denominator family');
  assert.match(fillinShortcode, /findRE `\^denominator:\\d\+\$`/,
    'the shortcode still matches the denominator:<n> family with findRE');
  assert.ok(exported.delete('solved:<variable>'), 'ANSWER_FORM_TOKENS still exports the solved family');
  assert.match(fillinShortcode, /findRE `\^solved:\[a-zA-Z\]\$`/,
    'the shortcode still matches the solved:<variable> family with findRE');

  assert.deepEqual(
    [...templateTokens].sort(),
    [...exported].sort(),
    'layouts/shortcodes/fillin.html $formTokens must equal ANSWER_FORM_TOKENS (minus the denominator family)',
  );
});

// ---- command parity --------------------------------------------------------

/**
 * npm scripts that no document names, by design. Each is an internal step of a
 * documented aggregate, so documenting it separately would invite someone to
 * run half a pipeline:
 *   build:hugo, search:index  — the two halves of `npm run build`
 *   check:routes, check:links, check:search, audit:build — the four gates
 *                              `npm run check:build` composes, in order
 *   verify:content            — a step of `npm test`
 *   preview                   — a local convenience (build + Pagefind's own
 *                              server); `npm run serve` is the documented one
 * Anything else must be documented: an undocumented top-level command is one an
 * agent never runs.
 */
const UNDOCUMENTED_BY_DESIGN = new Set([
  'build:hugo',
  'search:index',
  'check:routes',
  'check:links',
  'check:search',
  'audit:build',
  'verify:content',
  'preview',
]);

test('every npm command named in the docs exists in package.json', () => {
  const scripts = packageJson.scripts;
  for (const path of PROSE_DOCS) {
    const text = read(path);
    for (const match of text.matchAll(/npm run ([a-z0-9:-]+)/g)) {
      assert.ok(
        Object.hasOwn(scripts, match[1]),
        `${path} tells the reader to run \`npm run ${match[1]}\`, which package.json does not define`,
      );
    }
    if (/\bnpm test\b/.test(text)) {
      assert.ok(Object.hasOwn(scripts, 'test'), `${path} names \`npm test\``);
    }
  }
});

test('every npm script is documented or allowlisted as internal', () => {
  const documented = new Set();
  for (const path of PROSE_DOCS) {
    const text = read(path);
    for (const match of text.matchAll(/npm run ([a-z0-9:-]+)/g)) documented.add(match[1]);
    if (/\bnpm test\b/.test(text)) documented.add('test');
  }
  const undocumented = Object.keys(packageJson.scripts)
    .filter((name) => !documented.has(name) && !UNDOCUMENTED_BY_DESIGN.has(name))
    .sort();
  assert.deepEqual(
    undocumented,
    [],
    'these npm scripts are named nowhere in AGENTS.md, README.md, CLAUDE.md, or docs/ — document them, or add them to UNDOCUMENTED_BY_DESIGN with the reason',
  );
  // Keep the allowlist honest in the other direction too: an entry for a script
  // that no longer exists, or one that has since been documented, is dead.
  for (const name of UNDOCUMENTED_BY_DESIGN) {
    assert.ok(
      Object.hasOwn(packageJson.scripts, name),
      `UNDOCUMENTED_BY_DESIGN lists ${name}, which package.json no longer defines`,
    );
    assert.ok(
      !documented.has(name),
      `${name} is now documented — remove it from UNDOCUMENTED_BY_DESIGN`,
    );
  }
});

// ---- version parity --------------------------------------------------------

/**
 * One version, stated in many places. Each entry names a file and the pattern
 * that captures the version *in that file's own words*, so a reworded sentence
 * fails loudly rather than quietly stopping being checked. The first entry of
 * each group is the authority; every later entry must equal it.
 */
const VERSION_CLAIMS = [
  ['Hugo', [
    ['hugo.toml', /\[module\.hugoVersion\][\s\S]*?min = "(\d+(?:\.\d+)*)"/],
    ['hugo.toml', /\[module\.hugoVersion\][\s\S]*?max = "(\d+(?:\.\d+)*)"/],
    ['hugo.toml', /# Pinned Hugo: extended v(\d+(?:\.\d+)*)\./],
    ['hugo.toml', /for Hugo (\d+(?:\.\d+)*)/],
    ['tools/toolchain.test.mjs', /const expectedHugo = '(\d+(?:\.\d+)*)'/],
    ['.github/workflows/ci.yml', /HUGO_VERSION: "(\d+(?:\.\d+)*)"/],
    ['AGENTS.md', /Hugo extended (\d+(?:\.\d+)*)/],
    ['README.md', /Hugo extended (\d+(?:\.\d+)*)/],
    ['docs/architecture.md', /Hugo extended (\d+(?:\.\d+)*)/],
    ['package.json', /embedded in Hugo (\d+(?:\.\d+)*)/],
  ]],
  ['KaTeX', [
    ['package.json', /"katex": "(\d+(?:\.\d+)*)"/],
    ['package.json', /KaTeX (\d+(?:\.\d+)*) matches/],
    ['hugo.toml', /v(\d+(?:\.\d+)*) for Hugo/],
    ['AGENTS.md', /KaTeX (\d+(?:\.\d+)*) CSS/],
    ['docs/architecture.md', /KaTeX (\d+(?:\.\d+)*) assets/],
  ]],
  ['MathLive', [
    ['package.json', /"mathlive": "(\d+(?:\.\d+)*)"/],
    ['package.json', /MathLive (\d+(?:\.\d+)*) and/],
    ['docs/architecture.md', /MathLive (\d+(?:\.\d+)*) and/],
  ]],
  ['compute-engine', [
    ['package.json', /"@cortex-js\/compute-engine": "(\d+(?:\.\d+)*)"/],
    ['package.json', /compute-engine (\d+(?:\.\d+)*) are pinned/],
    ['docs/architecture.md', /compute-engine` (\d+(?:\.\d+)*) are excluded/],
    ['docs/authoring-playbook.md', /Measured against the pinned\s+(\d+(?:\.\d+)*) the engine/],
  ]],
  ['Pagefind', [
    ['package.json', /"pagefind": "(\d+(?:\.\d+)*)"/],
    ['docs/architecture.md', /Pagefind (\d+(?:\.\d+)*) builds one global index/],
  ]],
  ['Node', [
    ['package.json', /"node": ">=(\d+)"/],
    ['README.md', /Node\.js (\d+)/],
    ['.github/workflows/ci.yml', /node-version: (\d+)/],
  ]],
  ['Hextra', [
    ['themes/hextra/VENDORED.md', /\*\*Version:\*\* (\d+(?:\.\d+)*)/],
    ['hugo.toml', /Hextra v(\d+(?:\.\d+)*)/],
    ['AGENTS.md', /Hextra (\d+(?:\.\d+)*)/],
    ['docs/architecture.md', /Hextra (\d+(?:\.\d+)*)/],
  ]],
];

for (const [name, sites] of VERSION_CLAIMS) {
  test(`the pinned ${name} version is stated identically everywhere`, () => {
    const [authorityPath, authorityPattern] = sites[0];
    const expected = capture(authorityPath, authorityPattern, `the pinned ${name} version`);
    for (const [path, pattern] of sites.slice(1)) {
      assert.equal(
        capture(path, pattern, `the pinned ${name} version`),
        expected,
        `${path} states a different ${name} version than ${authorityPath} (${expected})`,
      );
    }
  });
}

test('the CI workflow uses the pinned Node version in every job', () => {
  // `node-version:` appears once per job; the loop above only checks the first.
  const ci = read('.github/workflows/ci.yml');
  const expected = capture('package.json', /"node": ">=(\d+)"/, 'the supported Node major');
  const versions = [...ci.matchAll(/node-version: (\d+)/g)].map((m) => m[1]);
  assert.ok(versions.length >= 2, '.github/workflows/ci.yml must set up Node in both the verify and deploy jobs');
  for (const version of versions) assert.equal(version, expected);
});

test('the vendored theme records what it is and how it may be changed', () => {
  // Upstream Hextra ships no version marker inside the theme tree, so the two
  // prose claims (AGENTS.md, hugo.toml) had nothing to be checked against. This
  // file is that marker; the version parity group above asserts the three agree.
  assert.ok(exists('themes/hextra/VENDORED.md'), 'the vendored theme must record its provenance');
  const vendored = read('themes/hextra/VENDORED.md');
  assert.match(vendored, /\*\*Upstream:\*\* https:\/\/github\.com\/imfing\/hextra/);
  assert.match(vendored, /\*\*Upstream commit\/tag:\*\*/);
  assert.match(vendored, /## The vendoring rule/);
  // The 0.12 minor line is verifiable from the vendored tree even though the
  // patch level is not; keep that evidence present rather than re-deriving it.
  assert.ok(
    exists('themes/hextra/docs/content/blog/v0.12.md'),
    'VENDORED.md cites the upstream v0.12 release post as the evidence for the minor line',
  );
});

// ---- count parity ----------------------------------------------------------

test('the mapped-section count in the docs matches the source map', () => {
  const sourceMap = JSON.parse(read('data/openstax/math-source-map.json'));
  const mapped = sourceMap.sections.length;
  const sites = [
    ['AGENTS.md', /verify the committed (\d+)-section map/],
    ['README.md', /checks the committed (\d+)-section/],
    ['docs/architecture.md', /(\d+)-section map under `data\/openstax\/`/],
    ['docs/openstax-source-workflow.md', /connects all (\d+) authored/],
    ['docs/authoring-playbook.md', /All (\d+) mapped\s+sections carry the block/],
  ];
  for (const [path, pattern] of sites) {
    assert.equal(
      Number(capture(path, pattern, 'the mapped-section count')),
      mapped,
      `${path} states a mapped-section count that data/openstax/math-source-map.json contradicts (${mapped})`,
    );
  }
});

test('no document reopens the finished Practice retrofit as a warning', () => {
  // The retrofit finished on August 9, 2026: the lint rule is an error, the
  // published backlog count is deleted, and `npm run lint` no longer takes
  // `--check-docs`. A doc that still describes a non-blocking Practice rule
  // would send the next author looking for a worklist that does not exist.
  for (const path of ['AGENTS.md', 'docs/authoring-playbook.md']) {
    const text = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
    assert.doesNotMatch(
      text,
      /sections still missing a `## Practice` block|one warning category|retrofit pending/,
      `${path} still publishes the Practice retrofit as an open worklist`,
    );
  }
});

// ---- prohibitions ----------------------------------------------------------

test('the forbidden Playwright install appears only in the AGENTS.md prohibition', () => {
  // `npx playwright install` hangs on this machine and undoes the local fix;
  // both entry points drive the installed Chrome via `channel: 'chrome'`. A doc
  // that prints the command is a trap, so the string is allowed to exist in
  // exactly one place: the §Browsers section that forbids it.
  const FORBIDDEN = /npx playwright install/;
  for (const path of PROSE_DOCS) {
    if (path === 'AGENTS.md') continue;
    assert.doesNotMatch(
      read(path),
      FORBIDDEN,
      `${path} names \`npx playwright install\` — AGENTS.md §Browsers forbids it; the suites drive the installed Chrome`,
    );
  }
  const agents = read('AGENTS.md');
  const browsersAt = agents.indexOf('## Browsers');
  assert.ok(browsersAt > 0, 'AGENTS.md must keep its §Browsers section');
  assert.doesNotMatch(
    agents.slice(0, browsersAt),
    FORBIDDEN,
    'AGENTS.md may name `npx playwright install` only inside §Browsers, where it is forbidden',
  );
  assert.match(agents.slice(browsersAt), /never run `npx playwright install`/);
  // And the config the prohibition rests on has to still be true.
  assert.match(read('playwright.config.mjs'), /channel: 'chrome'/);
});

test('the README no longer instructs a browser install', () => {
  const readme = read('README.md');
  assert.doesNotMatch(readme, /playwright install/);
  assert.match(readme, /No browser install step is needed/);
});
