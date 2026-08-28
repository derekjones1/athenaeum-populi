# Current architecture

Athenaeum Populi is a statically generated Hugo site. This document records
the active production architecture after the completed framework migration.

## Rendering and content

- Hugo extended 0.164.0 builds Markdown content under `content/`.
- Hextra 0.12.3 is vendored under `themes/hextra/`; builds do not fetch the
  theme as a remote module.
- Textbook content is plain Markdown with Hugo shortcodes. React, JSX, MDX,
  Nextra metadata, and a server-side application runtime are not part of the
  authoring or delivery path.
- Hugo renders passthrough math at build time with its embedded KaTeX engine.
  The vendored KaTeX 0.16.22 assets must remain version-matched to Hugo's
  generated markup.
- Static diagrams are accessible inline SVG. New figures are authored as
  graph-core spec JSON in the `apfigure` shortcode and rendered in the
  browser by the `<ap-figure>` component (measured text metrics plus a
  viewBox fit pass, so labels cannot clip); older pages still carry
  prerendered SVG with its generating `data-spec`, and both forms are
  lint-validated. Interactive practice uses the `fillin`, `multiplechoice`,
  and `graphplot` shortcodes; graph-mode multiplechoice options may be
  authored as the same spec JSON and render through `<ap-figure>`.

## Browser runtime

The browser runtime is vanilla JavaScript and Web Components under
`assets/js/`. The shared entry point registers the lightweight components.
MathLive 0.110.0 and `@cortex-js/compute-engine` 0.58.0 are excluded from the
shared bundle and loaded when a page containing a fill-in exercise initializes.
Graphing logic is likewise split from the shared bundle and loaded only on
pages containing an interactive GraphPlot or a spec-first `<ap-figure>`
static figure, which share the same lazy geometry engine.

There is no account system, application server, analytics pipeline,
advertising, or learner-data store.

## OpenStax source provenance

The completed Prealgebra 2e, Elementary Algebra 2e, and Intermediate Algebra
2e books remain reviewed Markdown, not generated output. A committed lock and
250-section map under `data/openstax/` connect each page to a stable CNXML
module in the official OpenStax source repository. The upstream checkout is a
sparse, ignored cache under `sources/openstax/`.

`npm run source:verify` validates the committed mapping without network
access. After `npm run source:fetch`, `npm run source:check` performs a
report-only comparison and `npm run source:history` distinguishes inferred
PDF-era content from later upstream changes. None of these commands writes to
`content/`; upstream changes require explicit review and the normal content
verification gates. See `docs/openstax-source-workflow.md`.

## Search

Pagefind 1.5.2 builds one global index from the completed `public/` tree.
Search is site-wide, not partitioned by book. The post-build checks verify
that the generated bundle loads and that representative content is indexed.

## Verification

`npm test` is the repository-wide checked-source gate. It runs unit tests,
validates the complete content hierarchy and frontmatter, verifies every
authored page through the real answer grader and KaTeX, checks shortcode and
graph configuration, re-derives every mechanically checkable fill-in answer
from its own printed question (`verify:answers`), asserts that every exercise
carries a current answer-ledger record (`verify:ledger`), and enforces the
current documentation and authoring rules. It also verifies the committed
OpenStax map's integrity offline; it does not fetch upstream or run
`source:check` or `source:history`.

`npm run build` creates a clean Hugo production build and the Pagefind index.
`npm run check:build` then verifies routes, internal links, search coverage,
the SEO surface (corpus-unique composed `<title>`s, canonicals, and the
breadcrumb/entity JSON-LD — see `tools/check-seo.mjs`),
generated assets, and the 20,000-file ceiling. `npm run test:a11y` runs
axe-core in Chromium against representative pages in light and dark themes,
failing on serious or critical WCAG violations. It never measures a
dev server: Playwright builds `public/` and serves it through
`npm run serve:public` on port 1315, and the suite refuses to run against a
page carrying a livereload script or unloaded stylesheets. Set
`PLAYWRIGHT_SKIP_BUILD=1` when a current build already exists, or `BASE_URL`
to test a deployment. `npm run test:e2e` drives the grader end-to-end through
a real MathLive field (`tests/browser-check.spec.mjs`, light scheme only —
its checks are colour-scheme-independent), `tests/figures.spec.mjs` renders
every page carrying a spec-first figure in both colour schemes and fails on
any label outside its fitted viewBox, and `npm run test:browser` runs
every Playwright suite in a single server startup. `npm run ci` combines the
source, replay, built-artifact, and browser gates — the replay gate
(`npm run verify:replay`) re-runs every printed question span through the
grader so no exercise is passable by retyping its own prompt; the GitHub
workflow runs exactly that script, so the pipeline is encoded once.

## Deployment

`wrangler.jsonc` publishes `public/` as static assets to the existing
production Cloudflare Worker named `athenaeum-populi`. GitHub Actions verifies
pull requests without deploying. A push to `main`, or an explicitly enabled
manual production run, can deploy only after the verification job succeeds.
There is no staging Worker. `.github/workflows/ci.yml` is the promotion
record: the verification job it runs is the gate, and a rollback is a redeploy
of the last passing commit.

## Change boundaries

The pinned Hugo, Hextra, KaTeX, MathLive, compute-engine, Pagefind, and Wrangler
versions are part of the tested architecture. Upgrade them deliberately and
as a coordinated change. Preserve stable published URLs, accessibility,
open-license attribution, global search behavior, and production-only
deployment safeguards.
