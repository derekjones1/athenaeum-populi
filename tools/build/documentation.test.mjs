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
import { existsSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { relative, sep } from 'node:path';
import { ANSWER_FORM_TOKENS } from '../../assets/js/lib/math/check-answer.mjs';
import { walkMarkdown } from '../lib/content.mjs';
import { BOOK_RULES } from '../lint/lints.mjs';

const repositoryRoot = new URL('../../', import.meta.url);
const repositoryRootPath = fileURLToPath(repositoryRoot);

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
// gitignored local scratchpad and is absent in CI. Matched by basename so the
// `docs/source/` nesting doesn't have to be spelled out here. Walk the tree
// rather than listing names, so a new doc — at any depth — is covered the day
// it lands.
const GENERATED_OR_LOCAL_DOCS = new Set([
  'openstax-existing-math-audit.md',
  'openstax-existing-biology-audit.md',
  'openstax-upstream-history-audit.md',
  'openstax-errata.md',
  // A gitignored local planning note (never committed, absent in CI): walking
  // it here made the command-parity gate pass locally on a claim CI could not
  // see.
  'accounts-plan.md',
]);
const AGENT_DOCS = ['AGENTS.md', 'README.md', 'CLAUDE.md'];
const PROSE_DOCS = [
  ...AGENT_DOCS,
  ...walkMarkdown(fileURLToPath(new URL('docs/', repositoryRoot)))
    .map((absolutePath) => relative(repositoryRootPath, absolutePath).split(sep).join('/'))
    .filter((relativeDocPath) => !GENERATED_OR_LOCAL_DOCS.has(relativeDocPath.split('/').pop()))
    .sort(),
];

const packageJson = JSON.parse(read('package.json'));

test('the playbooks live in docs/ only', () => {
  // They were previously mirrored into `content/docs/` and published as site
  // pages, which meant two copies of each file to keep byte-identical. Nothing
  // linked to those routes and they were absent from the nav and the legacy
  // route manifest, so the mirror was deleted rather than kept in sync. Guard
  // against it coming back.
  for (const name of ['authoring-playbook.md', 'knowledge-check-playbook-math.md', 'knowledge-check-playbook-life-sciences.md']) {
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
  // Per-book floors: the override table is real lint surface, so the playbook
  // must say floors are per book or the biology floor reads as a global one.
  assert.match(authoring, /Floors are per book/);
  assert.match(authoring, /one\s+component per part/);
  assert.match(authoring, /\*\*one\s+objective per Markdown list item\*\*/);
  // The missing-block rule is an ERROR now that the retrofit is finished; the
  // playbook must say so, or the next author reads it as optional.
  assert.match(authoring, /reports a\s+missing one as an \*\*error\*\*/);
  assert.match(authoring, /A categorical answer is never a number/);
  // The retrofit is done, but §5's working rules outlived it and several other
  // sections cite them by number — so the section stays, under its own title.
  assert.match(authoring, /## 5\. Working rules/);
  assert.match(authoring, /zero errors, and errors are all there is/);
  assert.match(authoring, /\*\*Never add a warning level back\.\*\*/);
  assert.match(authoring, /A rule that fires on sound content is a bug in the rule/);
  // Authoring an exercise creates a ledger obligation — verify:ledger runs
  // inside `npm test` — so the step-by-step verify workflow must carry the
  // recording step, or the next author meets a red gate with no documented
  // fix.
  assert.match(authoring, /ledger:list -- --unverified/);
  assert.match(authoring, /ledger:merge/);
});

test('the math subject playbook documents the answerForm and fillin answer-shape rules', () => {
  // Value grading cannot see the shape of a response, so a re-expression prompt
  // is only gradeable with an answerForm. The math playbook must document the
  // tokens and the rule, or the next such exercise ships passable by retyping
  // it. This content moved out of the subject-neutral core into the math
  // subject playbook; the unordered-list fillin rule moved with it.
  const math = read('docs/subjects/math.md');
  assert.match(math, /answerMode="unordered"/);
  assert.match(math, /answerForm="lowest-terms"/);
});

test('AGENTS.md documents the ledger result-file shape the merge reads', () => {
  // The merge's input format lives in tools/verify/answer-ledger.mjs; an agent told
  // to "record the verdict" must not have to reverse-engineer the tool.
  const agents = read('AGENTS.md');
  assert.match(agents, /\{"results": \[\{"hash"/);
  assert.match(agents, /fail the merge with nothing written/);
});

test('the core owns the shared knowledge-check rules and both editions point at it', () => {
  // The overlap/identity rule used to be stated verbatim in both editions;
  // it lives once in the core now, and each edition delegates.
  const core = read('docs/authoring-playbook.md');
  assert.match(core, /### Knowledge Checks \(both editions\)/);
  assert.match(core, /must not overlap/);
  assert.match(core, /filename, title,\s+`source_chapters`/);
  for (const name of ['knowledge-check-playbook-math.md', 'knowledge-check-playbook-life-sciences.md']) {
    const knowledgeChecks = read(`docs/${name}`);
    assert.match(knowledgeChecks, /authoring-playbook\.md[^\n]*Knowledge Checks/, `${name} points at the core's shared rules`);
    assert.doesNotMatch(knowledgeChecks, /must not overlap/, `${name} no longer restates the overlap rule`);
    // Knowledge-check questions are ledger-covered exercises like any other,
    // and these playbooks overload the word "ledger" for their source-audit
    // notes — so the verify list must name the answer ledger explicitly.
    assert.match(knowledgeChecks, /\*\*answer ledger\*\*/, name);
  }
  assert.match(read('docs/knowledge-check-playbook-math.md'), /exercise, problem, and solution element IDs/);
});

test('the biology subject playbook states its lint-backed rules', () => {
  // The only subject playbook that had no assertion at all. The practice
  // floor is derived from the lint's own table rather than restated here.
  const biology = read('docs/subjects/biology.md');
  const floor = BOOK_RULES['life-health-sciences/biology'].practice;
  const stated = biology.match(/floor is (\d+) exercises per objective group and (\d+) per section/);
  assert.ok(stated, 'docs/subjects/biology.md must state the practice floor in digits');
  assert.equal(Number(stated[1]), floor.perObjective, 'the per-objective floor matches BOOK_RULES');
  assert.equal(Number(stated[2]), floor.perSection, 'the per-section floor matches BOOK_RULES');
  assert.match(biology, /data\/media\/<book>\.json|data\/media\/biology\.json/, 'the mediafigure manifest rule');
  assert.match(biology, /knowledge-check-playbook-life-sciences\.md/, 'the KC playbook pointer');
  assert.match(biology, /None of the eight unit Knowledge Checks is authored yet/, 'the honest status of the unit checks');
});

test('the math playbook states the graph-recognition companion rule the lint enforces', () => {
  assert.match(read('docs/subjects/math.md'), /carries at least one `mode="graph"` multiplechoice/);
});

test('the graphplot-conversion ledger stays retired', () => {
  // Retired once every entry was adjudicated `keep`; a tool with no queue
  // and no ratchet drifted (8 unread candidates went unnoticed). Its docs
  // went with it — a doc naming `graphable:` sends an agent to a command
  // package.json no longer defines.
  assert.equal(exists('tools/verify/graphplot-conversion.mjs'), false);
  assert.equal(exists('data/verification/graphplot-conversion-ledger.json'), false);
  for (const name of Object.keys(packageJson.scripts)) assert.doesNotMatch(name, /^graphable:/);
  for (const path of PROSE_DOCS) assert.doesNotMatch(read(path), /graphable:|graphplot-conversion/, path);
});

test('the upstream-history audit report is as fresh as the section map', () => {
  // The report is committed, and it once sat 253 sections behind the map
  // ("precalculus … scaffolded, 28 sections mapped") for a month: the
  // workflow doc pins the regeneration command, but nothing pinned that it
  // had been run.
  const sourceMap = JSON.parse(read('data/openstax/source-map.json'));
  const report = read('docs/source/openstax-upstream-history-audit.md');
  assert.equal(
    Number(capture('docs/source/openstax-upstream-history-audit.md', /Mapped local sections: (\d+)/, 'the mapped-section count')),
    sourceMap.sections.length,
    'regenerate with `npm run source:history -- --output docs/source/openstax-upstream-history-audit.md`',
  );
  assert.doesNotMatch(report, /scaffolded/, 'no book is scaffolded any more');
});

test('the life-sciences knowledge-check playbook documents its quota, unit placement, and source rules', () => {
  // These three rules are what make a biology Knowledge Check different from
  // a math one; the quota is real lint surface (KC_SECTION_QUOTAS in
  // tools/lint/lints.mjs), so the playbook must state the number.
  const lifeSciences = read('docs/knowledge-check-playbook-life-sciences.md');
  assert.match(lifeSciences, /exactly three items/i);
  assert.match(lifeSciences, /one page per unit/i);
  assert.match(lifeSciences, /may not duplicate a section Practice item/i);
  assert.match(lifeSciences, /at least one auto-graded item/);
  assert.match(lifeSciences, /===CHECKS===/);
});

test('the OpenStax workflow doc documents every pinned bundle', () => {
  const openStaxWorkflow = read('docs/source/openstax-source-workflow.md');
  assert.match(openStaxWorkflow, /report-only connection/);
  // The frozen "Initial reconciliation result" was condensed into git history
  // on 2026-08-15; what must survive is the live procedure — the exact
  // commands that regenerate the checked-in audit snapshots.
  assert.match(openStaxWorkflow, /--output docs\/source\/openstax-existing-math-audit\.md/);
  assert.match(openStaxWorkflow, /--output docs\/source\/openstax-upstream-history-audit\.md/);
  assert.match(openStaxWorkflow, /does not by itself\s+prove every local equation/);
  assert.match(openStaxWorkflow, /Precalculus 2e is pinned and complete/);
  assert.match(openStaxWorkflow, /moduleScope: "mapped-collections"/);
  assert.match(openStaxWorkflow, /Every command accepts `--bundle KEY`/);

  const sourceLock = JSON.parse(read('data/openstax/source-lock.json'));
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
  assert.equal(packageJson.scripts['source:verify'], 'node tools/source/openstax-source.mjs verify-map');
});

// ---- answerForm token parity, in both directions ---------------------------

test('the math playbook documents every answerForm token', () => {
  // Derived from the predicates rather than re-listed here: the token list used
  // to be copied into the playbook by hand, so adding a predicate could leave
  // the playbook silently behind. Iterating the export makes a new token fail
  // here until it is documented. The whole answerForm table lives in the math
  // subject playbook, not the subject-neutral core.
  const math = read('docs/subjects/math.md');
  for (const token of ANSWER_FORM_TOKENS) {
    assert.match(math, new RegExp(`\`${token.replace(/[<>]/g, '\\$&')}\``),
      `the math playbook documents the ${token} answerForm token`);
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
    ['tools/build/toolchain.test.mjs', /const expectedHugo = '(\d+(?:\.\d+)*)'/],
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
    ['README.md', /KaTeX (\d+(?:\.\d+)*), MathLive/],
  ]],
  ['MathLive', [
    ['package.json', /"mathlive": "(\d+(?:\.\d+)*)"/],
    ['package.json', /MathLive (\d+(?:\.\d+)*) and/],
    ['docs/architecture.md', /MathLive (\d+(?:\.\d+)*) and/],
    ['README.md', /MathLive (\d+(?:\.\d+)*), and/],
  ]],
  ['compute-engine', [
    ['package.json', /"@cortex-js\/compute-engine": "(\d+(?:\.\d+)*)"/],
    ['package.json', /compute-engine (\d+(?:\.\d+)*) are pinned/],
    ['docs/architecture.md', /compute-engine` (\d+(?:\.\d+)*) are excluded/],
    ['docs/subjects/math.md', /Measured against the pinned\s+(\d+(?:\.\d+)*) the engine/],
    ['README.md', /compute-engine (\d+(?:\.\d+)*)\./],
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
  const sourceMap = JSON.parse(read('data/openstax/source-map.json'));
  const mapped = sourceMap.sections.length;
  // ONE prose site, deliberately. The count used to be restated in five docs
  // and derived-then-checked in each — a tax on every authoring session. The
  // workflow doc describes the map, so it is the one place the number is
  // stated; every other doc says "the committed section map".
  const sites = [
    ['docs/source/openstax-source-workflow.md', /connects all (\d+) authored/],
  ];
  for (const [path, pattern] of sites) {
    assert.equal(
      Number(capture(path, pattern, 'the mapped-section count')),
      mapped,
      `${path} states a mapped-section count that data/openstax/source-map.json contradicts (${mapped})`,
    );
  }
});

test('no document reopens the finished Practice retrofit as a warning', () => {
  // The retrofit finished on August 9, 2026: the lint rule is an error, the
  // published backlog count is deleted, and `npm run lint` no longer takes
  // `--check-docs`. A doc that still describes a non-blocking Practice rule
  // would send the next author looking for a worklist that does not exist.
  for (const path of ['AGENTS.md', 'docs/authoring-playbook.md']) {
    const text = readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');
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
  // both entry points drive the installed Chrome through the stdio shim. A doc
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
  assert.match(read('playwright.config.mjs'), /chrome-stdio-shim\.sh/);
});

test('Chrome launches only through the stdio shim, and the shim detaches both streams', () => {
  // Real Google Chrome spawns crashpad/updater daemons that inherit its
  // stdout/stderr and can outlive it; Playwright finishes closing a browser
  // only when both streams hit EOF, so an inherited pipe hangs `npm run ci`
  // after the last test passes. The shim launches Chrome with both streams on
  // /dev/null so no daemon can ever hold Playwright's pipes. This test pins
  // that mechanism: every launch entry point goes through the shim, and every
  // exec line inside the shim carries the redirect.
  assert.match(
    read('playwright.config.mjs'),
    /executablePath: chromeShim/,
    'playwright.config.mjs must launch Chrome through the stdio shim',
  );
  assert.match(
    read('tools/build/screenshot-page.mjs'),
    /executablePath: chromeShim/,
    'tools/build/screenshot-page.mjs must launch Chrome through the stdio shim',
  );
  const shim = read('tools/build/chrome-stdio-shim.sh');
  const execLines = shim.split('\n').filter((line) => /^\s*exec /.test(line));
  assert.ok(execLines.length >= 3, 'the shim should exec the override, app-bundle, and PATH candidates');
  for (const line of execLines) {
    assert.match(
      line,
      /"\$@" >\/dev\/null 2>&1$/,
      `every shim exec must detach stdout and stderr: ${line.trim()}`,
    );
  }
  // A shim that lost its execute bit fails every browser launch with a
  // spawn EACCES that reads nothing like "chmod the shim"; catch it here.
  const mode = statSync(new URL('tools/build/chrome-stdio-shim.sh', repositoryRoot)).mode;
  assert.ok(mode & 0o111, 'tools/build/chrome-stdio-shim.sh must be executable');
  // The CI workflow's comment once described a `channel: 'chrome'` launch the
  // config no longer used — a reader porting that claim would detach the shim
  // and bring the post-suite hang back. Pin the comment to the mechanism.
  const ciWorkflow = read('.github/workflows/ci.yml');
  assert.match(
    ciWorkflow,
    /chrome-stdio-shim\.sh/,
    '.github/workflows/ci.yml should describe the shim launch',
  );
  assert.doesNotMatch(
    ciWorkflow,
    /channel: 'chrome'/,
    "ci.yml must not claim a channel: 'chrome' launch — Chrome launches through the shim's executablePath",
  );
});

test('the README no longer instructs a browser install', () => {
  const readme = read('README.md');
  assert.doesNotMatch(readme, /playwright install/);
  assert.match(readme, /No browser install step is needed/);
});
