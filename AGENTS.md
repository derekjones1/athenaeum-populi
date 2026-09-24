# Athenaeum Populi — Hugo agent notes

This repository is the production Hugo architecture; `docs/architecture.md`
has the build and deployment design. For content work, follow
`docs/authoring-playbook.md` — the subject-neutral core — plus the subject
playbook under `docs/subjects/` for the book you are authoring; for
knowledge checks, also the subject's edition —
`docs/knowledge-check-playbook-math.md` or
`docs/knowledge-check-playbook-life-sciences.md`. The four OpenStax math
books — the three algebra books and Precalculus 2e — are `complete`; also
follow `docs/subjects/math.md` and `docs/source/openstax-source-workflow.md`.
Biology 2e is `complete` (47 chapters, 208 sections); its rules are
`docs/subjects/life-sciences.md` (the shelf's baseline) plus
`docs/subjects/biology.md` (the book's delta), on the same source workflow.
OpenStax Microbiology is `complete` (26 chapters, 127 sections); its rules
are in `docs/subjects/microbiology.md`, which records how it differs from
Biology 2e (unkeyed prose exercises, no per-module glossary, new box and
item types). A Microbiology chapter is run from
`docs/briefs/microbiology/run.md` (the parent's recipe) with the agent
briefs beside it — versioned there, not re-derived per session. Anatomy and
Physiology 2e is `in-progress` (28 chapters in six units, 169 sections;
`npm run source:verify` prints how many are authored); its rules are in
`docs/subjects/anatomy-physiology.md`, which records the scan, its two
book-specific rules (Interactive Link Questions, References), and that its
pin postdates its PDF; a chapter is run from
`docs/briefs/anatomy-physiology/run.md` with the briefs beside it. Dated
narrative — retrospectives, per-chapter logs, closed programmes — lives in
`docs/history/`, one file per playbook; the playbooks keep only what is
operative.

## Stack and constraints

- Hugo extended 0.164.0 and vendored Hextra 0.12.3 are pinned. Do not upgrade
  them casually: Hugo's embedded KaTeX is version-coupled to the vendored
  KaTeX 0.16.22 CSS.
- Interactive exercises are vanilla Web Components under `assets/js/`.
  MathLive and the compute engine are lazy-loaded. Keep heavy dependencies out
  of the shared bundle.
- Pagefind is one global site-wide index. Do not scope search by book.
- `wrangler.jsonc` deploys static assets to the production
  `athenaeum-populi` Cloudflare Worker. `.github/workflows/ci.yml` must verify
  every gate before its production deploy job. Do not create staging Workers.
- Preserve accessibility, open-license attribution, stable published URLs,
  and the 20,000-file artifact ceiling.
- For books covered by the OpenStax source lock, treat pinned CNXML as the
  semantic/transcription source, the local PDF as edition and visual evidence,
  and current upstream `main` as a review candidate. Never synchronize upstream
  changes into `content/` automatically.
- The lock pins one commit per upstream bundle: `prealgebra-bundle` for the
  three algebra books, `college-algebra-bundle` for Precalculus 2e,
  `biology-bundle` for Biology 2e, `microbiology` for OpenStax
  Microbiology, and `anatomy-physiology` for Anatomy and Physiology 2e (the
  last two are single-book repositories, e.g. `osbooks-microbiology`, so
  their keys have no `-bundle` suffix). Each lock entry carries a
  `contentPath`, so a book need not live under `content/math` (Biology 2e:
  `content/life-health-sciences/biology`). A book with
  `authoringStatus: complete` — every book but Anatomy and Physiology 2e —
  has a local page for every upstream numbered section, chapter parity
  enforced book-wide, and full coverage in `build-map`/`verify-map`. A book
  still being written follows the scaffolded-chapter procedure in
  `docs/source/openstax-source-workflow.md`.

## Commands

- `npm run serve` — local Hugo server (port 1313)
- `npm run serve:public` — serve the built `public/` with no livereload
  (port 1315; what the screenshot tools and the browser suite read)
- `npm test` — unit tests, content validation, per-page verification, the
  answer cross-check, the source-key and answer-ledger gates, math lint,
  figure label readability; stays offline and never fetches upstream — in
  CI, the source gates (`verify:source-keys`, `verify:fillin-residual`) run
  strict against the fetched checkouts instead of skipping
- `npm run check:figures` — build every spec-first figure and fail on any
  label printed across other ink (part of `npm test`); legacy `data-spec`
  figures are previewed as their eventual spec-first re-renders, non-gating
- `npm run figures:status -- <dir>` — the figure-engine conversion queue:
  which pages are already spec-first (skip them) and which still carry
  legacy `data-spec` figures or hand-written SVG with no spec; "convert this
  chapter" starts here (workflow in `docs/subjects/math.md`)
- `npm run figures:convert -- [--dry-run] [--gallery out.html] <path>` —
  rewrites legacy `data-spec` divs as `apfigure` shortcodes and diffs each
  re-render against the SVG it replaces: label drift is expected, geometry
  drift is a bug and a non-zero exit
- `npm run verify:replay` — replay every printed question span (source and
  MathLive-normalized spellings) through the grader so no exercise is passable
  by retyping its own prompt; holds a `--min-replayed` FLOOR (parallel,
  minutes — part of `npm run ci`, not `npm test`)
- `npm run verify:source-keys` — compare every `multiplechoice` key, `textin`
  answer, `selfcheck` model answer, and math `fillin` key on a mapped page
  against the pinned CNXML's own `<solution>` and glossary — the agent-free
  third reading of a prose book's keys and of the math fill-ins
  `verify:answers` cannot parse: a fill-in is matched to its source exercise
  by prose, by the stem's numbers in order, and by the shape of its math,
  and every value it keys must be one the source solution prints (rounding
  to the printed places allowed); a key that departs from the source on
  purpose must be listed in the tool's `DISCLOSED_DEVIATIONS` with its
  erratum number; holds an EXACT `--min-confirmed` baseline (part of
  `npm test`). Needs the pinned bundles (`npm run source:fetch`): an absent
  bundle is skipped by name on stderr with no floor applied, so run it
  locally, with every bundle fetched, before pushing
- `npm run verify:source-coverage` — refuse a life-sciences page that drops
  a source end-of-section exercise: every exercise, lettered part, and
  Matching entry in the pinned CNXML must have a rendered counterpart on its
  page (scored stem/option match, one-to-one), a Check Your Understanding
  fold the matcher can see, or a reviewed entry in the tool's
  `LISTED_EXERCISES` (disclosed folds and reworded conversions; an entry
  whose exercise becomes rendered, or whose named item disappears, fails as
  stale). `--min-covered` is the source's own unit total, so covered = total
  means nothing is missing; it moves only when the source pin moves. Skips absent
  bundles like `verify:source-keys` (part of `npm test`)
- `npm run verify:fillin-residual` — refuse a math `fillin` that has NO third
  reading: `verify:answers` cannot parse its ask, no source solution confirms
  it (unmatched, figure-only, symbolic, unkeyed, or a knowledge-check page
  with no module), and its ledger record carries neither a derivation note nor a solve.
  Clear one by recording a derivation note, or by the blind solve below
  (`solve:emit -- content/math --residual-fillins`). With a bundle absent it
  prints the count it could not judge and applies no rule (part of
  `npm test`)
- `npm run verify:ledger` — assert every exercise carries a current
  answer-verification record ("The answer ledger" below); holds a
  `--min-exercises` FLOOR and a `--max-unverifiable` CEILING, and
  `--require-solved <prefix>` refuses a `multiplechoice`, `textin`,
  `sortbins`, or `fillin` under a prose shelf whose record carries no
  orchestrator solve
- `npm run solve:emit -- <root> --out <dir>` / `npm run solve:compare -- <answers.json> content --out <dir>`
  — the orchestrator's pass over a prose book's graded questions, and the
  blind solve of the math fill-ins no mechanical reading reaches: `emit`
  writes every multiplechoice, textin, sortbins, and fillin with the key,
  accept list, and hint stripped (`--residual-fillins` keeps only the
  fill-ins `verify:fillin-residual` would refuse; `--pages-out <dir>` also
  writes each page whole with every key masked — what a fresh solver
  subagent reads instead of the live page — prefixing a basename that
  collides across books with its chapter folder); the orchestrator — or,
  for a chapter run, a fresh Fable subagent briefed by
  `docs/briefs/<book>/solve.md` — answers them in writing; `compare` grades
  the answers against the live keys (the real text grader for textin),
  prints every disagreement and "also defensible" flag, refuses to record
  one until it carries an `adjudicated` note settled against the CNXML, and
  writes the ledger records (`solved: { by, result }`) for `ledger:merge`
- `npm run ledger:stats` — verified/total per shortcode kind
- `npm run ledger:list` — emit exercises as JSON for a verification pass
  (`--shard i/n`, `--kind`, `--unverified`, `--verdict`, `--context N`)
- `npm run ledger:merge <dir>` — fold pass result files into the ledger;
  result files that disagree about a hash fail the merge with nothing written
- `npm run build` — clean production build plus global Pagefind
- `npm run check:build` — route, link, search, SEO (composed titles,
  breadcrumb/entity JSON-LD), and file-count gates
- `npm run check:external-links` — report-only: follow every external URL in
  the content tree (`--only-openstax` for the Link to Learning redirects)
  and list the dead, blocked, and unreachable ones; needs the network, so it
  is not in `test` or `ci`
- `npm run ci` — complete local equivalent of CI
- `npm run baseline:update` — recount the three published floors and rewrite
  package.json's `--min-verified`, `--min-replayed`, and `--min-exercises` in
  place
- `npm run source:fetch` — fetch the ignored, sparse OpenStax source checkout
- `npm run source:verify` — verify the committed section map offline
- `npm run source:check` — report-only comparison against pinned CNXML
- `npm run source:history` — review changes since the inferred PDF-era commits
- `npm run source:media -- --book KEY --chapter N` — vendor a chapter's raster
  figures from the pinned checkout into `static/media/<book>/` as WebP

Every `source:*` command takes `--bundle KEY` to work on one bundle at a time.

Every authoring rule in the content lint is an error — the lint has no
warning level (working rules: `docs/authoring-playbook.md` §5). If a rule
fires on sound content, narrow the rule and add a test for the case it got
wrong — do not exempt the page. When authoring moves any published floor
(`--min-verified`, `--min-replayed`, `--min-exercises`), end the session with
`npm run baseline:update` and commit the rewrite together with the content.

## The answer ledger

`verify:answers` re-derives an answer only where it can mechanically
recognize what the prompt asks, and never reads `multiplechoice` or
`graphplot`. `verify:source-keys` compares the prose books'
`multiplechoice`, `textin`, and `selfcheck` items to the pinned module's own
key — but only where the item transcribes a source exercise. Neither tool
can tell whether the SOURCE key is right, so a prose book's graded items get
one more reading: the orchestrator (in a chapter run, a fresh Fable subagent
reading masked pages) answers every multiplechoice and textin with the keys
hidden (`solve:emit` / `solve:compare`), the parent settles each
disagreement against the module's text, and the ledger record carries the
result; `verify:ledger --require-solved` makes that reading a condition of
green for the life-sciences shelf. A math fill-in gets its third reading
from `verify:answers` where the ask is parseable, from `verify:source-keys`
where it transcribes a printed solution, and otherwise from a blind solve
with keys hidden, graded by the live math grader, every disagreement
adjudicated against the CNXML, and recorded as `solved`;
`verify:fillin-residual` refuses any fill-in that arrives without one of the
three. `data/verification/answer-ledger.json` makes the result durable.

The three readings prove keys; nothing mechanical reads what surrounds
them. So a life-sciences per-section checker runs on Opus *(September 22,
2026)*, and the hint, leak, footer, and figure-inventory rules live in
`docs/subjects/life-sciences.md` ("Text recall", "Each thing once",
"Independent checker", "Completion audit") and in each book's
`docs/briefs/<book>/` kit.

An exercise's identity is the sha256 of its own source with whitespace runs
collapsed, plus — when the stem, hint, or options name a figure, graph, or
table on the page ("the graph above", "the table below", "according to the
table", "shown above") — the source of the nearest such block in that
direction (an `apfigure`, `mediafigure`, inline `<svg>`, Markdown table, or
image). Reflowing a shortcode keeps its verdict; changing any semantic
character — question, answer, option, hint, config, or the figure/table it
depends on — drops it out of the ledger and fails `npm run verify:ledger`
until it is read again. **Editing a figure or table an answer was read
against strands the record exactly as editing the answer does.** A reference
that resolves to no block on the page is a lint error. The key is the hash
alone, so an exercise duplicated across books is verified once and moving
one between files costs nothing.

**Re-solving after a sweep** *(September 23, 2026)*: an edit re-hashes the
item, but not every re-hash needs a new solve. A record carries to the new
hash when the stem, options, and key are unchanged and every previously
graded form still grades correct (so `accept` ADDITIONS carry, while a
removal or a new key does not); an item whose `dependency` block — the
figure or table it names — changed is re-solved, since the solver read
that block. The rule is `tools/verify/ledger-carry.mjs`: take
`npm run ledger:carry -- snapshot content > $SP/ledger-before.json` BEFORE
the sweep edits anything, then `npm run ledger:carry -- plan
$SP/ledger-before.json content --out $SP/carry` writes a merge-ready
`results/` directory and a `resolve-list.json` of what must be re-solved or
re-read. (Its snapshot holds each dependency block's hash; `ledger:list`
output does not, so it cannot stand in for one.)

Three verdicts: `ok`, `defect` (fails the gate — a known-wrong answer must not
ship), and `unverifiable` (read, but undeterminable from the exercise text
alone — a figure or table read). The `--max-unverifiable` ceiling keeps the
third from quietly swallowing the corpus, as `--min-exercises` keeps
extraction from going dark. The ledger is validated on every read — `check`,
`stats`, `list`, `prune`, `merge`, and `solve-check`'s `compare`/`residual` all
refuse a malformed one: `verdict` must be `ok`, `defect`, or `unverifiable`;
a `defect` or `unverifiable` verdict must carry a `note`; `solved` must be
`{ by, result: agrees|adjudicated, note? }`, with a note required when
`result` is `adjudicated`; and an unknown field on any record fails the
read. A malformed run exits 1 naming the offending record(s).

**Authoring a new exercise therefore means verifying it.** Derive the answer
independently, never from the key, and do the arithmetic by running it rather
than in your head; then record the verdict and re-run the gate (the recording
step is §4 of the authoring playbook).

**Every unique exercise carries an `ok` record, and `verify:ledger` runs
inside `npm test`** with the current count as its `--min-exercises` floor
(package.json owns the number; `baseline:update` moves it) and
`--max-unverifiable 0`: re-read a figure-dependent item with `--context 80`,
and repair an exercise whose figure was never transcribed rather than excuse
it. Both `npm run ledger:list -- --context N` and
`npm run solve:emit -- --context N` key-mask the *whole page* before cutting
the N-line window, and an item bound to a figure or table carries that block
as `dependency: { kind, line }` in `list` output — with the block's own
masked text as `dependency.text` in a solve packet — regardless of
`--context`: a "the table below" ask reaches a block a backward-looking
window could never see.

Commands that drive a re-run:

- `npm run ledger:list -- --unverified --shard i/n` for anything unrecorded;
- `npm run ledger:list -- --verdict unverifiable --context 80` for the
  figure-dependent follow-up queue;
- `npm run ledger:rekey` (`node tools/verify/answer-ledger.mjs rekey
  content`) is the one-off migration for a changed identity scheme,
  carrying every verdict forward. It cannot launder a later figure edit:
  the old key no longer exists, so the edit strands the record under its
  new key;
- `npm run ledger:carry -- snapshot|plan` carries records across a
  sweep's hint and accept-addition edits ("Re-solving after a sweep"
  above) and lists what it would not carry.

A pass writes result files, each shaped
`{"results": [{"hash": "…", "verdict": "…", "note": "…"?}]}`, and
`npm run ledger:merge <dir>` folds every `*.json` in the directory into the
ledger. Result files that disagree about a hash fail the merge with nothing
written — re-read the exercise rather than let file order pick a winner. A
merge that changes an already-recorded verdict prints the change; that is
the legitimate re-read flow. `node tools/verify/answer-ledger.mjs prune
content` drops records stranded by an edit.

Re-run the pass's calibration — provably-wrong answers seeded into a blind
sample, every one caught with no false alarm on the rest — whenever the
method changes.

## Reviews and verification protocol

A periodic review is only worth running on what the machines cannot assert.
`npm run ci` already proves the code builds, the content lints, the answers
cross-check, and the pages pass axe; a review that re-reports any of that is
noise. Look instead for:

- **Drifted duplication.** Two copies of the same idea that are consistent by
  luck rather than by construction — one shortcode grammar per tool, one
  directory walker per script. `tools/lib/content.mjs` and `tools/lib/html.mjs`
  are where a shared primitive belongs.
- **Gates gone vacuous.** A check that still passes because it stopped
  checking. Watch `verify:answers`' per-class out-of-scope counts: zero
  failures also describes a checker that can no longer read the corpus
  (`--min-verified N` is the ratchet against it). Watch for a lint whose rule
  no longer matches how content is written.
- **Docs that are true but no longer load-bearing** — a runbook for a process
  that has been automated, a count nothing derives from.
- **The error-to-warning ratio.** Every authoring rule here is an error. A
  warning list growing back from zero is a growing backlog of known-defective
  content.

Three rules for a finding:

1. **Every finding ships with the command that reproduces it.** A file:line
   anchor from a search is a hypothesis; a command output is evidence.
2. **A negative claim ("X doesn't exist", "nothing tests Y") and any count
   require a run, not a search.** Most wrong review findings are absence claims
   made from grep.
3. **When you add a gate, sabotage it once to prove it fires**, then revert the
   sabotage. A gate that has never been seen to fail has not been tested.

## Browsers (never run `npx playwright install`)

Use the browser that is already installed. `npx playwright install` hangs here,
and running it undoes the local fix. The cached
`~/Library/Caches/ms-playwright/chromium-1208` is incomplete, so that binary
aborts on launch and Playwright then asks for a `chrome-headless-shell`
build that is also absent. That prompt is the trap; do not take it.

Both entry points drive the installed Chrome through
`tools/build/chrome-stdio-shim.sh`, so no environment variable is needed:

- `tools/build/screenshot-page.mjs` launches with `executablePath` pointing at the
  shim.
- `tools/build/screenshot-components.mjs </route/> [outDir] [--only kind,kind]`
  crops every fill-in, text-in, multiple-choice, self-check, sort-bins,
  graph-plot, spec-first figure, mediafigure, and callout on a built page in
  both themes, each driven into its reviewable state first (a wrong answer
  graded, a model answer revealed, an extended description opened), one PNG
  per component per theme.
- `playwright.config.mjs` sets the same `executablePath` in its shared
  `launchOptions`.

The shim exists because launching Google Chrome directly hangs the run
*after* every test passes: Chrome's crashpad and (on macOS) GoogleUpdater
daemons inherit its stdout/stderr and can outlive it, and Playwright only
finishes closing a browser once both streams hit EOF. The shim points both
streams at `/dev/null` before exec; the CDP transport rides fds 3/4 and is
unaffected.

`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` stays available as an override when a
specific binary is required — the shim execs it first when set.
`PLAYWRIGHT_SKIP_BUILD=1 npm run test:browser` is the fast path whenever
`public/` is already current from a just-run `npm run build` (`test:browser`
runs every Playwright suite in one server startup; `test:a11y` / `test:e2e`
target a single spec). If the suite ever fails at launch again, the fix is
the shim's candidate list or an executable path — never an install.

Do not commit unless the user explicitly asks. Preserve unrelated worktree
changes.
