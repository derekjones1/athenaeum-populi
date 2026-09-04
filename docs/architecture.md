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
  generated markup. Math pages preload the KaTeX font faces the corpus uses
  (with `crossorigin`, or the CORS-mode font fetch double-downloads) so the
  first layout has real font metrics; the build audit enforces the preload
  set. Separately, WebKit (observed Safari 26.5, zoom-dependent) computes the
  baseline of KaTeX's `vlist-t2` inline-tables at the table bottom, dropping
  a `\begin{cases}` brace a full depth below its rows and floating tall
  determinant blocks ~a row above their `D =`. The head-bundle shim
  `assets/js/head/katex-webkit-baseline.js` fixes this by measurement, not
  UA-sniffing: it probes each `vlist-t2` against a temporary baseline strut
  and corrects only elements that measure wrong (re-probing on resize/zoom
  and font arrival, undoing itself when the engine state is healthy). The
  browser suite pins both halves: shim shipped, inert on a healthy engine,
  and every display block's rows on the math axis. A display equation wider
  than the article scrolls horizontally rather than painting over the rail,
  and `assets/js/scrollable-math.js` makes exactly the blocks that overflow
  keyboard-focusable (a scrollable region a keyboard user cannot reach fails
  WCAG 2.1.1; the graded-state axe scans caught three on one page).
- Static diagrams are accessible inline SVG. New figures are authored as
  graph-core spec JSON in the `apfigure` shortcode and rendered in the
  browser by the `<ap-figure>` component (measured text metrics plus a
  viewBox fit pass, so labels cannot clip); older pages still carry
  prerendered SVG with its generating `data-spec`, and both forms are
  lint-validated. Interactive practice uses the `fillin`, `multiplechoice`,
  `graphplot`, `textin`, `selfcheck`, and `sortbins` shortcodes; graph-mode
  multiplechoice options are authored as the same spec JSON and render
  through `<ap-figure>`.

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

The five completed books — Prealgebra 2e, Elementary Algebra 2e,
Intermediate Algebra 2e, Precalculus 2e, and Biology 2e — remain reviewed
Markdown, not generated output. A committed lock and section map under
`data/openstax/` (`source-lock.json`, `source-map.json`) connect each page
to a stable CNXML module in the official OpenStax source repository. The upstream checkout is a
sparse, ignored cache under `sources/openstax/`.

`npm run source:verify` validates the committed mapping without network
access. After `npm run source:fetch`, `npm run source:check` performs a
report-only comparison and `npm run source:history` distinguishes inferred
PDF-era content from later upstream changes. None of these commands writes to
`content/`; upstream changes require explicit review and the normal content
verification gates. See `docs/source/openstax-source-workflow.md`.

The lock is bundle-keyed and each book carries its own `contentPath`, so the
pipeline is not specific to `content/math`: Biology 2e is pinned at
`biology-bundle` with `contentPath: "content/life-health-sciences/biology"`
and `authoringStatus: "complete"` (all 47 chapters authored) — its collection
(which nests unit, chapter, and module) was mapped chapter by chapter as
authoring proceeded, and
`build-map`/`verify-map` state the book's local/upstream counts on every
run rather than omitting a book that has few or no pages yet. Each book's
summary in the map also carries its `contentPath` and, for a collection
that nests units, a `units` list (index, title, chapter numbers) that
`verify-map` checks structurally and that `layouts/_partials/sidebar.html`
reads — matched to the book by `contentPath` — to nest the book's chapters
under "Unit N: <title>" labels, so the sidebar's hierarchy for Biology is
unit → chapter → section without the URL or directory layout changing.

That sidebar renders one list for every width. Upstream Hextra emits two —
a phone-drawer list (the top-level menu entries, with the current book's
tree expanded beneath its shelf) hidden from md up, and a desktop list (the
book tree alone) hidden below md — so every page shipped its book tree
twice, ~1.26 KiB per link per copy, and that doubled tree drove both
`audit-build` budgets. The override keeps
only the drawer list: the rows only the drawer shows (the other shelves,
Home, About, the in-page heading list under the active item) carry
`hx:md:hidden`, and the two rows that wrap the tree — the shelf entry and
the book's own "Overview" row — carry `.ap-sidebar-shell`, which
`assets/css/custom.css` hides and un-indents from md up (48rem, the
breakpoint the theme's own `sidebar.css` and `menu.js` use for the drawer),
so the desktop reader sees exactly the tree the second list used to draw.
The theme's `sidebar.js` needs no change: collapsible buttons still sit in
their `<li>`, and its scroll-to-active already picks the first active item
with a visible box. `audit-build`'s mean-chrome budget (300 KiB) is the
gate against the tree coming back twice, and the browser suite pins the
shape (the unit nesting on a biology page, the first chapter as the first
visible link, one sidebar contact link).

## Media and text-answer components

The math books forbid file-backed images outright (content lint and build
audit). An image-dependent subject needs a sanctioned path, and it is one
narrow path rather than an exception: `npm run source:media`
(`tools/source/vendor-media.mjs`) reads each figure a chapter's modules
reference straight from the pinned checkout's commit (`git show`, so the
blobless clone fetches only those blobs), resizes to ≤800/≤1600 px without
upscaling, encodes WebP into `static/media/<book>/`, and records
dimensions, variants, source SHA-256, alt, caption, and a photo/diagram kind
in `data/media/<book>.json`. That manifest is the contract: the
`mediafigure` shortcode resolves `src="<book>/<stem>"` against it for
width/height/srcset and fails the build on an unvendored stem; the content
lint requires every `src` to be in it; and `audit-build` treats the
manifest as both the allowlist for `/media/**` and a floor (a listed file
missing from the build fails). Every other embedding form stays banned. On
the dark theme a diagram sits on a white plate and a photo is left alone,
driven by the manifest's kind and overridable per figure.

Three components serve prose subjects beside the math ones: `<text-in>`
(`layouts/shortcodes/textin.html`, `assets/js/components/text/text-in.js`),
a plain text field graded by `assets/js/lib/text/check-text.mjs` —
normalized exact match against the key plus an author-listed `accept` list,
deliberately without fuzzy tolerance; `<self-check>`
(`selfcheck.html`, `self-check.js`), a written response with a model
answer and rubric revealed by a native `<details>` and a self-mark that
writes only a live region, functional without JavaScript; and `<sort-bins>`
(`sortbins.html`, `sort-bins.js`), a categorize-into-bins exercise graded by
`assets/js/lib/text/check-sortbins.mjs` as the label→bin mapping, with
partial credit and no drag — click-to-pick-up, "Place here" per bin. All
three follow the fill-in's accessibility contract (named control before it is interactive, `role=status`
feedback, focus retained on success, honest no-JS state) and are covered by
the browser suite, whose axe scans also caught that Hextra's blue info
callout fails AA for muted figure captions and its own links — fixed in
`assets/css/custom.css` for that ground only.

Headings may carry inline `$...$` math; Hugo's passthrough renders it in
the article, but the "On this page" rail (`toc.html`) and the sidebar's
in-page heading list (`sidebar.html`) print each heading's `.Title`
themselves, so both route it through the `mathtext` partial. A page's
front-matter `title` is plain text wherever it appears (`<title>`,
breadcrumb, pager, JSON-LD, the search index) and is written in Unicode
(`x²+bx+c`); `audit-build` fails any page whose chrome or `<h1>` prints a
raw `$...$` run, and `check-seo` fails a `<title>` that does.

The sticky navbar has two shapes. At the top of a page it is Hextra's full
bar — logo, title, the six shelves (flat from xl up, one "Library"
dropdown between md and xl), Home, About, search. Once the reader scrolls
into the article, `assets/js/navbar-compact.js` (imported by the components
bundle) marks `<html>` `ap-nav-compact` and `custom.css` takes the bar
away: what remains is a 3rem cluster pinned to the top-right corner — the
logo, the search box, and a "Scroll to top" button
(`layouts/_partials/navbar.html`, a site override of the theme partial that
adds only that button), plus the hamburger below md — sized and padded like
the "On this page" rail column, so from xl up it sits above that rail, over
space the article never uses, with the logo on the rail heading's left
edge. Scrolling back to the top — by hand or with the button — restores the
full bar; that button is the site's only scroll-to-top control (the theme's
rail button is dropped in the `toc.html` override, since a second,
opacity-hidden copy added a duplicate stop for keyboard and screen-reader
users). The sticky container keeps its 4rem in-flow height in both states
so the article never jumps at the threshold:
only the painted backdrop shrinks to the cluster, the rest of the
container's box passes pointer events through, the left sidebar rises to
the viewport top, and the rail's sticky offset moves up to meet the
cluster. Folded controls are `display: none`, so they leave the tab order
rather than lingering invisibly. The browser suite asserts both shapes and
axe-scans the compact cluster in both themes.

The "On this page" rail is one element at every width. Hextra renders it
only from xl (80rem) up — `hx:hidden hx:xl:block` — so phones and tablets
never had a heading list except the copy the phone drawer prints under the
active page. The `toc.html` override keeps the same `<nav>` in the DOM
below xl and `custom.css` ("On this page drawer") makes it a right-hand
off-canvas panel there: fixed beneath the navbar, the rail column's width,
slid in by the same transform, layer, and easing as the theme's own phone
drawer, `visibility: hidden` while closed. The navbar override adds the
button that opens it (`.ap-nav-toc`, hidden from xl up; the compact
cluster widens by one button where it is present), and
`assets/js/toc-drawer.js` holds the state and the accessibility contract
`menu.js` set for the left drawer: closed, the panel is inert and
aria-hidden; open, main, footer, and the left sidebar are inert behind a
click-to-close scrim, Tab cycles through the button and the panel's links,
Escape and any heading link close it, and the two drawers never overlap.
`utils/toc-drawer.html` decides, for the button and the scrim alike,
whether a page has a heading list at all — a landing page with
`toc: false` gets neither. The browser suite drives the drawer at phone
and tablet widths, checks the hand-back to the inline rail past xl, and
axe-scans the open panel in both themes.

## Search

Pagefind 1.5.2 builds one global index from the completed `public/` tree.
Search is site-wide, not partitioned by book. The post-build checks verify
that the generated bundle loads and that representative content is indexed.

## Verification

`npm test` is the repository-wide checked-source gate; `npm run build`
creates a clean Hugo production build and the Pagefind index;
`npm run check:build` verifies the built artifact (routes, links, search
coverage and exclusions, the SEO surface, generated assets, the 20,000-file
ceiling); and `npm run ci` composes them with the replay gate and the
Playwright suites —
the GitHub workflow runs exactly that script, so the pipeline is encoded
once. What each gate contains is `package.json`'s `test`, `check:build`, and
`ci` scripts, and AGENTS.md §Commands describes every command; this document
keeps only the two facts that are architectural:

- The one gate that reads the pinned CNXML itself, `verify:source-keys`,
  skips a bundle whose gitignored checkout is absent and says so — CI has no
  `sources/`, so that comparison is a local gate, run on an authoring machine
  before the push (the ledger and replay gates, which run everywhere, still
  hold every key to its recorded verdict).
- The browser suites never measure a dev server: Playwright builds `public/`
  and serves it through `npm run serve:public` on port 1315, and every spec
  refuses a page carrying a livereload script or unloaded stylesheets. Set
  `PLAYWRIGHT_SKIP_BUILD=1` when a current build already exists, or
  `BASE_URL` to test a deployment. `npm run test:e2e` drives the grader
  end-to-end through a real MathLive field (`tests/browser-check.spec.mjs`,
  light scheme only — its checks are colour-scheme-independent),
  `npm run test:a11y` runs axe-core against representative pages and graded
  component states in both schemes (`tests/accessibility.spec.mjs`),
  `tests/figures.spec.mjs` renders every page carrying a spec-first figure
  in both schemes and fails on any label outside its fitted viewBox, and
  `npm run test:browser` runs every suite in one server startup.

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
