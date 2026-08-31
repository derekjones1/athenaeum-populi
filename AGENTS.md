# Athenaeum Populi — Hugo agent notes

The Hugo migration is complete; this repository is the production
architecture. For content work, follow `docs/authoring-playbook.md` — the
subject-neutral core — plus the subject playbook under `docs/subjects/` for
the book you are authoring; for knowledge checks, also follow
`docs/knowledge-check-playbook.md`. See `docs/architecture.md` for the
current build and deployment design. For the OpenStax math books — the three
algebra books and Precalculus 2e, all four complete — also follow
`docs/subjects/math.md` and `docs/source/openstax-source-workflow.md`.
Biology 2e is pinned and `in-progress` (units 1–3, chapters 1–13, are authored); its
subject-specific rules are in `docs/subjects/biology.md`, on top of the same
source workflow.

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
  three algebra books, `college-algebra-bundle` for Precalculus 2e, and
  `biology-bundle` for Biology 2e. Books carry an `authoringStatus`; the four
  math books are `complete` (Precalculus 2e's last chapter landed on August
  29, 2026), so every upstream numbered section has a local page and chapter
  parity is enforced book-wide. Biology is `in-progress`: units 1–3 (chapters
  1–13, 51 sections) are authored under `content/life-health-sciences/biology`
  and the other 34 chapters have no landing yet, so `build-map`/`verify-map`
  print it as "13/47 chapters, 51/208 sections mapped" — visibly, never
  silently — and the biology subject playbook (`docs/subjects/biology.md`)
  governs its authoring. A book still being written marks its
  unwritten chapter landings `authoring_status: scaffolded`, drops the marker
  from a chapter as soon as it has a section page, and reruns
  `node tools/source/openstax-source.mjs build-map` after authoring. Every
  book's lock entry also carries a `contentPath` — the `content/` directory
  the tooling walks for that book — so a book need not live under
  `content/math`.

## Commands

- `npm run serve` — local Hugo server
- `npm run serve:public` — serve the built `public/` with no livereload
- `npm test` — unit tests, content validation, answer cross-check, math
  lint, figure label readability
- `npm run check:figures` — build every spec-first figure and fail on any
  label printed across other ink (part of `npm test`); legacy `data-spec`
  figures are previewed as their eventual spec-first re-renders, non-gating
- `npm run figures:status -- <dir>` — the figure-engine conversion queue,
  derived from the content itself: which pages are already spec-first
  (skip them) and which still carry legacy `data-spec` figures, pre-spec
  `<svg>` options, or hand-written SVG with no spec at all; "convert this
  chapter" starts here (workflow in `docs/subjects/math.md`)
- `npm run figures:convert -- [--dry-run] [--gallery out.html] <path>` —
  the mechanical half of that conversion: rewrites legacy `data-spec` divs
  as `apfigure` shortcodes and diffs each re-render against the SVG it
  replaces, separating label drift (expected — the engine improved) from
  geometry drift (a bug, and a non-zero exit)
- `npm run verify:replay` — replay every printed question span (source and
  MathLive-normalized spellings) through the grader so no exercise is passable
  by retyping its own prompt; holds a `--min-replayed` FLOOR so the gate
  cannot go quiet on part of the corpus (parallel, minutes — part of
  `npm run ci`, not `npm test`)
- `npm run verify:source-keys` — compare every `multiplechoice` key, `textin`
  answer, and `selfcheck` model answer on a mapped page against the pinned
  CNXML's own `<solution>` and glossary — the third, agent-free reading of a
  prose book's keys (the math books get theirs from `verify:answers`); a key
  that departs from the source on purpose must be listed in the tool's
  `DISCLOSED_DEVIATIONS` with its erratum number; holds an EXACT
  `--min-confirmed` baseline (part of `npm test`). Needs the pinned bundles
  checked out (`npm run source:fetch`): a bundle whose checkout is absent —
  CI, a fresh clone — is skipped by name on stderr with no floor applied,
  never failed, so the gate has teeth only on a machine that has fetched
  every bundle; run it locally before pushing
- `npm run verify:ledger` — assert every exercise in the corpus carries a
  current answer-verification record (see "The answer ledger" below); holds a
  `--min-exercises` FLOOR and a `--max-unverifiable` CEILING so it can go
  vacuous in neither direction, and `--require-solved <prefix>` refuses a
  `multiplechoice` or `textin` under a prose shelf whose record carries no
  orchestrator solve
- `npm run solve:emit -- <root> --out <dir>` / `npm run solve:compare -- <answers.json> content --out <dir>`
  — the orchestrator's own pass over a prose book's graded questions: `emit`
  writes every multiplechoice and textin with the key, accept list, and hint
  stripped; the orchestrator answers them in writing; `compare` grades the
  answers against the live keys (the real text grader for textin), prints
  every disagreement and "also defensible" flag, refuses to record one until
  it carries an `adjudicated` note settled against the CNXML, and writes the
  ledger records (`solved: { by, result }`) for `ledger:merge`
- `npm run ledger:stats` — verified/total per shortcode kind
- `npm run ledger:list` — emit exercises as JSON for a verification pass
  (`--shard i/n`, `--kind`, `--unverified`, `--verdict`, `--context N`)
- `npm run ledger:merge <dir>` — fold pass result files into the ledger;
  result files that disagree about a hash fail the merge with nothing written
- `npm run graphable:candidates` / `npm run graphable:list` /
  `npm run graphable:merge <dir>` / `npm run graphable:stats` — the
  graphplot-conversion ledger
  (`data/verification/graphplot-conversion-ledger.json`): an adjudicated
  queue of the MC/fillin exercises that could be authored as interactive
  `graphplot` exercises instead. `candidates` emits the unread queue
  (`--shard i/n`); `list --verdict convert` is where a conversion session
  starts; merge has the answer ledger's conflict-refusing contract, and
  `node tools/verify/graphplot-conversion.mjs prune content` retires entries whose
  exercise was converted or edited (workflow in
  `docs/subjects/math.md`). The queue is currently EMPTY — all 448
  are adjudicated `keep` — so `list --verdict convert` printing `[]` is the
  true state, not a missing ledger: every command but `merge` now fails
  loudly if the file is absent, `init` creates it, and `--ledger <path>`
  points at another one
- `npm run build` — clean production build plus global Pagefind
- `npm run check:build` — route, link, search, SEO (composed titles,
  breadcrumb/entity JSON-LD), and file-count gates
- `npm run ci` — complete local equivalent of CI
- `npm run baseline:update` — recount the three published floors and rewrite
  package.json's `--min-verified`, `--min-replayed`, and `--min-exercises` in
  place
- `npm run source:fetch` — fetch the ignored, sparse OpenStax source checkout
- `npm run source:verify` — verify the committed 325-section map offline
- `npm run source:check` — report-only comparison against pinned CNXML
- `npm run source:history` — review changes since the inferred PDF-era commits
- `npm run source:media -- --book KEY --chapter N` — vendor a chapter's raster
  figures from the pinned checkout into `static/media/<book>/` as WebP

Every `source:*` command takes `--bundle KEY` to work on one bundle at a time.

Every authoring rule in the content lint is an error, with no exceptions —
the lint has no warning level. The missing-`## Practice`-block rule was
promoted on August 9, 2026, when the final mapped section landed its block,
and the last warning-level rules (missing hints, multipart-looking questions,
an empty worked Solution, all-same graph answer positions) followed on
August 10, 2026, when the corpus carried zero of each; the working rules that
outlived that programme are in `docs/authoring-playbook.md` §5. If a rule
fires on sound content, narrow the rule and add a test for the case it got
wrong — do not exempt the page. When authoring moves any published floor
(`--min-verified`, `--min-replayed`, `--min-exercises`), end the session with
`npm run baseline:update` and commit the rewrite together with the content.

## The answer ledger

`verify:answers` re-derives an answer only where it can mechanically recognize
what the prompt asks; 79% of what it skips is skipped as "prompt class not
mechanically checkable", and it never reads `multiplechoice` or `graphplot` at
all. `verify:source-keys` covers the prose books' `multiplechoice`, `textin`,
and `selfcheck` items by comparing each to the pinned module's own key — but
only where the page item transcribes a source exercise; an author-written
item has no source key to compare against. Neither tool can tell whether the
SOURCE key is right (Biology unit 2 carried four wrong ones), so a prose
book's graded items get one more reading: the orchestrator answers every
multiplechoice and textin with the keys hidden (`solve:emit` /
`solve:compare`), settles each disagreement against the module's text, and
the ledger record carries the result; `verify:ledger --require-solved`
makes that reading a condition of green for the life-sciences shelf. Reading a prompt is exactly what a parser cannot do, so that population is
covered by a reading pass instead, and `data/verification/answer-ledger.json`
makes the result durable.

An exercise's identity is the sha256 of its own source with whitespace runs
collapsed. Reflowing a shortcode keeps its verdict; changing any semantic
character — question, answer, option, hint, config — drops it out of the ledger
and fails `npm run verify:ledger` until it is read again. The key is the hash
alone, so an exercise duplicated across books is verified once and moving one
between files costs nothing.

Three verdicts: `ok`, `defect` (fails the gate — a known-wrong answer must not
ship), and `unverifiable` (read, but undeterminable from the exercise text
alone — a figure or table read). The `--max-unverifiable` ceiling keeps the
third from quietly swallowing the corpus, the same way `--min-exercises` keeps
extraction from going dark.

**Authoring a new exercise therefore means verifying it.** Derive the answer
independently, never from the key, and do the arithmetic by running it rather
than in your head; then record the verdict and re-run the gate (the recording
step is §4 of the authoring playbook). The one wrong
answer that survived every other gate — a 3x3 system in a knowledge check whose
declared triple satisfied none of its three printed equations — is what this
ledger exists to catch.

**Status: complete as of August 15, 2026 — every unique exercise carries an
`ok` record, and `verify:ledger` runs inside `npm test`** with the current
count as its `--min-exercises` floor (package.json owns the number;
`baseline:update` moves it) and `--max-unverifiable 0`. The ceiling is 0 because the
residue really did go to zero: the figure-dependent items were re-read with
`--context 80`, which attaches the page text above the shortcode so a "read the
graph above" item can see the SVG it names, and the handful still unresolved
turned out to be exercises whose figure had never been transcribed at all —
repaired rather than excused.

Two commands drive a re-run:

- `npm run ledger:list -- --unverified --shard i/n` for anything unrecorded;
- `npm run ledger:list -- --verdict unverifiable --context 80` for the
  figure-dependent follow-up queue.

A pass writes result files, each shaped
`{"results": [{"hash": "…", "verdict": "…", "note": "…"?}]}`, and
`npm run ledger:merge <dir>` folds every `*.json` in the directory into the
ledger. Result files that disagree about a hash fail the merge with nothing
written — one of those passes read the exercise wrong, so re-read it rather
than let file order pick a winner. A merge that changes an already-recorded
verdict prints the change; that is the legitimate re-read flow.
`node tools/verify/answer-ledger.mjs prune content` drops records stranded by an
edit.

The pass was calibrated before it was trusted: 26 provably-wrong answers were
seeded into a blind sample of 90 real exercises, and the method caught 26/26
with zero false alarms on the 64 untouched ones. Re-run that calibration if the
method changes.

## Reviews and verification protocol

A periodic review is only worth running on what the machines cannot assert.
`npm run ci` already proves the code builds, the content lints, the answers
cross-check, and the pages pass axe. A review that re-reports any of that is
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
   sabotage. A gate that has never been seen to fail has not been tested; it
   has been written.

## Browsers (never run `npx playwright install`)

Use the browser that is already installed. `npx playwright install` hangs here,
and running it undoes the local fix. The cached
`~/Library/Caches/ms-playwright/chromium-1208` is incomplete — its launcher
stub is present but the `Google Chrome for Testing Framework.framework` bundle
it `dlopen`s is missing, so that binary aborts on launch and Playwright then
asks for a `chrome-headless-shell` build that is also absent. That prompt is
the trap; do not take it.

Both entry points drive the installed Chrome through
`tools/build/chrome-stdio-shim.sh`, so no environment variable is needed and
`npm run ci` passes clean out of the box:

- `tools/build/screenshot-page.mjs` launches with `executablePath` pointing at the
  shim.
- `tools/build/screenshot-components.mjs </route/> [outDir] [--only kind,kind]`
  crops every fill-in, text-in, multiple-choice, self-check, graph-plot,
  spec-first figure, mediafigure, and callout on a built page in both themes,
  each driven into its reviewable state first (a wrong answer graded, a model
  answer revealed, an extended description opened); the component-level
  review the Biology pilot did by hand, one PNG per component per theme.
- `playwright.config.mjs` sets the same `executablePath` in its shared
  `launchOptions`.

The shim exists because launching Google Chrome directly hangs the run
*after* every test passes: Chrome spawns crashpad and (on macOS) GoogleUpdater
daemons that inherit its stdout/stderr and can outlive it, and Playwright only
finishes closing a browser once both streams hit EOF. The shim points both
streams at `/dev/null` before exec, so no daemon can hold Playwright's pipes;
the CDP transport rides fds 3/4 and is unaffected.

`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` stays available as an override when a
specific binary is required — the shim execs it first when set.
`PLAYWRIGHT_SKIP_BUILD=1 npm run test:browser` is the fast path whenever
`public/` is already current from a just-run `npm run build` (`test:browser`
runs every Playwright suite in one server startup; `test:a11y` / `test:e2e`
target a single spec). If the suite ever fails at launch again, the fix is
the shim's candidate list or an executable path — never an install.

Do not commit unless the user explicitly asks. Preserve unrelated worktree
changes.
