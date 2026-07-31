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
- Static diagrams are accessible inline SVG. Interactive practice uses the
  `fillin`, `multiplechoice`, and `graphplot` shortcodes.

## Browser runtime

The browser runtime is vanilla JavaScript and Web Components under
`assets/js/`. The shared entry point registers the lightweight components.
MathLive 0.110.0 and `@cortex-js/compute-engine` 0.58.0 are excluded from the
shared bundle and loaded when a page containing a fill-in exercise initializes.
Graphing logic is likewise split from the shared bundle and loaded only on
pages containing an interactive GraphPlot.

There is no account system, application server, analytics pipeline,
advertising, or learner-data store.

## Search

Pagefind 1.5.2 builds one global index from the completed `public/` tree.
Search is site-wide, not partitioned by book. The post-build checks verify
that the generated bundle loads and that representative content is indexed.

## Verification

`npm test` is the repository-wide source gate. It runs unit tests, validates
the complete content hierarchy and frontmatter, verifies every authored page
through the real answer grader and KaTeX, checks shortcode and graph
configuration, and enforces the current documentation and authoring rules.

`npm run build` creates a clean Hugo production build and the Pagefind index.
`npm run check:build` then verifies routes, internal links, search coverage,
generated assets, and the 20,000-file ceiling. `npm run test:a11y` runs
axe-core in Chromium against representative pages in light and dark themes,
failing on serious or critical WCAG violations. `npm run ci` combines the
source, built-artifact, and browser-accessibility gates.

## Deployment

`wrangler.jsonc` publishes `public/` as static assets to the existing
production Cloudflare Worker named `athenaeum-populi`. GitHub Actions verifies
pull requests without deploying. A push to `main`, or an explicitly enabled
manual production run, can deploy only after the verification job succeeds.
There is no staging Worker.

See `docs/main-branch-promotion-checklist.md` for promotion, smoke testing, and
rollback.

## Change boundaries

The pinned Hugo, Hextra, KaTeX, MathLive, compute-engine, Pagefind, and Wrangler
versions are part of the tested architecture. Upgrade them deliberately and
as a coordinated change. Preserve stable published URLs, accessibility,
open-license attribution, global search behavior, and production-only
deployment safeguards.
