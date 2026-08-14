# OpenStax source reconciliation

The math books have a report-only connection to the official OpenStax
publishing sources. The connection maps and audits the existing Hugo pages; it
does **not** regenerate them or accept upstream changes automatically.

## Pinned source bundles

Each upstream OpenStax publishing repository is one *bundle*, pinned at one
reviewed commit. Every book belongs to exactly one bundle.

- [`openstax/osbooks-prealgebra-bundle`](https://github.com/openstax/osbooks-prealgebra-bundle)
  — Prealgebra 2e, Elementary Algebra 2e, and Intermediate Algebra 2e. All
  three books are used, so the whole `modules/` tree is checked out
  (`moduleScope: "bundle"`).
- [`openstax/osbooks-college-algebra-bundle`](https://github.com/openstax/osbooks-college-algebra-bundle)
  — Precalculus 2e. This bundle also ships College Algebra 2e, Algebra and
  Trigonometry 2e, and a corequisite title that this project does not use, so
  the checkout is scoped to the modules the Precalculus collection actually
  references (`moduleScope: "mapped-collections"`, 87 modules instead of the
  full tree).

Books carry an `authoringStatus`. `complete` means every upstream numbered
section is authored locally and chapter-by-chapter parity is enforced;
`scaffolded` and `in-progress` mean the book's provenance is pinned while its
pages are still being written, so parity is only checked for what exists.

## Quick start

From the repository root:

```sh
npm run source:fetch
npm run source:verify
npm run source:check
npm run source:history
```

What those commands do:

- `source:fetch` creates ignored, sparse Git checkouts under
  `sources/openstax/`. For each bundle it checks out the locked commit and
  materializes the sparse text files for the inferred PDF-era commits. It does
  not download the large `media/` tree.
- `source:verify` works offline. It confirms that every local numbered math
  section has exactly one committed module mapping, that the map agrees with
  the local paths and `source_section` frontmatter, and that each book's
  recorded bundle and authoring status match the lock.
- `source:check` works offline after the fetch. It compares titles,
  objectives, instructional headings, prose traceability, local interaction
  counts, and heuristic Try It prompt matches against the checked-out CNXML.
  It never writes under `content/`.
- `source:history` compares each book's inferred PDF-era commit with the
  current locked OpenStax commit for its bundle. It separates later upstream
  changes from possible original transcription differences.

Every command accepts `--bundle KEY` (repeatable) to work on one bundle at a
time, for example:

```sh
npm run source:fetch -- --bundle college-algebra-bundle
npm run source:check -- --bundle prealgebra-bundle
```

`--source-dir` overrides a checkout location and therefore needs exactly one
`--bundle`.

`source:check` currently audits regular numbered sections only. It inventories
their interactions but does not certify Knowledge Check prompts or answers.

To save the reports in the ignored source area:

```sh
npm run source:check -- \
  --output sources/openstax/reports/existing-math-audit.md

npm run source:history -- \
  --output sources/openstax/reports/upstream-history.md
```

## Data flow and safety boundary

```text
official OpenStax repositories (read only)
  → exact locked commit per bundle
  → ignored sparse checkout
  → committed book/section/module map
  → report + explicit review decisions
  → reviewed edits to Athenaeum content, if any
```

The final arrow is always manual. Neither `source:check` nor `source:history`
changes learner-facing content. A new OpenStax commit is a review candidate,
not a publishing instruction.

## Committed provenance files

- `data/openstax/math-source-lock.json` (schema 2) records each bundle's
  official repository, current reviewed commit, module scope, and license,
  plus every book's collection, inferred PDF-era commit, and authoring status.
- `data/openstax/math-source-map.json` (schema 2) connects all 212 authored
  local section paths to stable OpenStax module IDs and module SHA-256
  fingerprints, attributes each section to its bundle, and records per-book
  chapter and section coverage against the upstream collection.
- `data/openstax/math-reconciliation-decisions.json` (schema 2) records known
  intentional adaptations and adjudicated upstream disagreements, keyed to the
  target commit of each bundle, so later audits do not silently reverse them.

  An **exercise revaluation** — changing the numbers a Try It substitutes,
  without changing its expression or method — belongs here and is invisible
  anywhere else: `detectedFlags` inspects baseline SHA, title, objectives and
  headings only, never `tries` or interactions; `source:check` never sets a
  nonzero exit code for review items and is not in `npm run ci`. The decisions
  file is the only durable, machine-readable record that the change was
  deliberate. Use `covers: []` with a `covers_note` saying so — there is no
  audit flag for it to adjudicate.

  **Only mapped sections may be named.** `openstax-source.test.mjs` asserts
  every decision's `localPath` is in `math-source-map.json`, and Knowledge
  Check pages are not mapped — a decisions entry naming one fails `npm test`
  at `assert.ok(mapped)`. A cumulative-assessment change that would need a
  decision needs a different home, or the item revalued in a mapped section.

The OpenStax checkouts themselves remain under ignored `sources/`; the large
source repositories are not copied into this Git repository.

## Initial reconciliation result

This section is a point-in-time record of the FIRST reconciliation — the
three algebra books only, before any Precalculus section was mapped. For
current coverage (all books, including Precalculus), regenerate and read
`docs/openstax-existing-math-audit.md` (`npm run source:check`).

At OpenStax commit
`38cae454e644abf9f0a623e876994553881597c9`:

- all 201 numbered sections map deterministically to unique CNXML modules;
- 196 sections match the source title/objective/heading checks without a flag;
- 5 disclosed adaptations were reviewed and recorded explicitly;
- 0 metadata or instructional-heading flags remain unresolved;
- all 3,519 regular-section interactions are inventoried; and
- 3,635 of 4,576 upstream Try It records have a likely local prompt match.

The Try It number is deliberately a heuristic, not a one-to-one coverage
claim. OpenStax multipart items can become several local questions, different
source items can resemble one another, and many source exercises were
intentionally omitted.

The historical comparison found 10 mapped section modules changed since the
inferred PDF-era commits: 6 content-level and 4 markup/metadata-only. Three Try
It records changed, and 3 local-impact decisions are recorded.

The checked-in snapshots are the
[existing-math audit](openstax-existing-math-audit.md) and the
[upstream-history audit](openstax-upstream-history-audit.md). After a reviewed
lock or decision change, regenerate them exactly with:

```sh
npm run source:check -- --output docs/openstax-existing-math-audit.md
npm run source:history -- --output docs/openstax-upstream-history-audit.md
```

## Precalculus 2e

Precalculus 2e is pinned and scaffolded, with authoring underway. Its review
target is `789b54099106b071d1d32bfcee454fed72eb4768` in the college-algebra
bundle, and `content/math/precalculus` holds the book cover page and all
twelve chapter landings mapped to the upstream chapter structure. All seven
sections of chapter 1 are authored (modules `m49301`, `m49304`, `m49306`,
`m49308`, `m49312`, `m49314`, and `m49320`), as are all four sections of
chapter 2 (modules `m49324`, `m50389`, `m49326`, and `m49327`), so the book
currently contributes 11 of 73 upstream sections to the map and the audit's
section matrix.

Its authored baseline is `d1bd19c69107ba7f45775670809ae161d63db864`, the last
upstream commit on or before the local `sources/precalculus-2e_-_WEB.pdf`
build date of 2026-04-20. That is the same inference rule that reproduces the
three existing books' baselines exactly, but it remains an inference: a strong
comparison candidate, not a proven OpenStax build ID.

Each unwritten chapter landing declares `authoring_status: scaffolded` in its
frontmatter. That marker is what allows its `## Sections` overview to be empty:
the chapter-landing lint would otherwise require section bullets, and the
content validator requires those bullets to match authored pages exactly.
Chapter 1's landing has dropped the marker and lists all seven of its
sections.

As sections are written, add each page with its `source_section` frontmatter,
remove `authoring_status` from that chapter's landing once its first section
page exists, list the section in the landing's `## Sections` overview, then
rerun `node tools/openstax-source.mjs build-map` and commit the refreshed map.
`build-map` fails if a marker outlives the first authored section in its
chapter, so an unwritten chapter can never be mistaken for a finished one.
When all 73 sections exist, change the book's `authoringStatus` to `complete`
in the lock; from then on the tooling enforces full chapter-by-chapter parity
with the upstream collection and the book joins the audited section matrix.

### Important upstream inconsistency

Elementary Algebra 2e section 2.7 needs special treatment. Current OpenStax
changes the Try It inequality's right-hand constant from `−3/5` to `+3/5` but
retains a solution graphic saying “Contradiction / No solution.” With `+3/5`,
the variable terms cancel to a true inequality, so the result is an identity.
The local PDF-era `−3/5` prompt and contradiction answer are internally
correct. The decision file therefore retains the local version instead of
blindly applying current upstream.

This is why updates stop for review.

Two smaller upstream errata were found in Precalculus 2e module `m49301`
(section 1.1) during authoring and were deliberately not propagated:

- `Figure_01_01_009`'s alt text describes "an upward-facing parabola with a
  vertex at (0,1)". The PDF, and the module's own Try It (solve $f(x)=1$;
  answer $x=0$ or $x=2$), both fix the curve as $f(x)=(x-1)^2$ — vertex
  $(1,0)$, $y$-intercept $1$. The local figure follows the PDF geometry.
- `Table_01_01_10`'s `summary` attribute says the goldfish memory span is
  2100 hours, while the table cell and the surrounding prose
  ($P(\text{goldfish})=2160$) both say 2160. The local table says 2160.

Chapter 2 authoring found six more, none propagated. In `m49324` (section
2.1) three figure alt texts name points that are not on the line they
describe, or belong to a different figure: `..._013` puts $(2,-7)$ and
$(3,0)$ on $y=2x-7$ (neither satisfies it; the $x$-intercept is $3.5$),
`..._012` describes the Analysis line instead of the maglev-train graph, and
`..._008a` repeats the points of `..._014`. In `m49326` (section 2.3) the
truck-rental rate row labels the second function $P(d)$ although the module
defines only $K(d)$ and $M(d)$; that same table's `summary` describes an
entirely different table (Indiana and Alabama house values, apparently copied
from section 2.4); and the sentence setting up the comparison names Move It
Your Way where the inequality $K(d)<M(d)$, the surrounding sentences, and the
question all mean Keep on Trucking. The local pages follow the PDF and the
modules' own mathematics, and the 2.3 page carries a visible source note
beside the corrected sentence.

A caution learned the same way: `tools/cnxml-preview.py` drops the spaces
between adjacent TeX tokens, so correct source mathematics can look mangled in
the preview. One reported "defect" — a domain rendering as `0\let\le8.75` —
was a preview artifact over well-formed CNXML. Confirm any suspected markup
defect against the raw `index.cnxml` before recording it.

Upstream defects worth reporting to OpenStax are collected in
`docs/openstax-errata.md` — a gitignored local file holding
submission-ready write-ups (module id, element id, current text, why it is
wrong, suggested correction) plus the cases already reviewed and dismissed.

**Logging a confirmed defect there is automatic and requires no approval.**
Whenever an authoring pass confirms a source defect against the raw CNXML plus
one independent check, write it up in `docs/openstax-errata.md` before handing
the work back — do not ask whether to log it, and do not report it only in
prose. A dismissed suspicion goes in the file's "Reviewed and *not* errata"
list with its reason, so it is not re-investigated later. Because the file is
gitignored, this never touches the published site or a commit.

When section work is split across subagents, each worker is scoped to its own
content file and cannot write here; the parent collects the defects from every
worker's report and logs them. This does not replace recording the *local*
handling here or in `data/openstax/math-reconciliation-decisions.json`.

## Reading the pinned sources

Raw CNXML interleaves presentation MathML that is slow to read while
transcribing. Render a module as labelled text with approximate LaTeX:

```sh
python3 tools/cnxml-preview.py \
  sources/openstax/osbooks-college-algebra-bundle/modules/m49301/index.cnxml
```

The preview is a reading aid, not an authority — reconcile the finished page
against the actual CNXML and the PDF.

The Precalculus 2e PDF is larger than 100 MB, so agents cannot read it
directly; `poppler` (`brew install poppler`) provides the workflow instead.
Locate a section's PDF pages by scanning the running heads, then render the
range as images for visual comparison:

```sh
pdftotext -f 1 -l 60 -layout sources/precalculus-2e_-_WEB.pdf /tmp/front.txt
pdftoppm -f 17 -l 38 -r 110 -png sources/precalculus-2e_-_WEB.pdf /tmp/pages/p
```

The PDF text layer drops all mathematics — it is layout and figure evidence
only, never a transcription source.

## Checking for a newer OpenStax commit

```sh
npm run source:status
```

This reports every bundle. If a bundle has moved, create a separate ignored
checkout and audit it:

```sh
npm run source:fetch -- \
  --bundle prealgebra-bundle \
  --latest \
  --source-dir sources/openstax/prealgebra-bundle-latest

npm run source:check -- \
  --bundle prealgebra-bundle \
  --source-dir sources/openstax/prealgebra-bundle-latest \
  --output sources/openstax/reports/latest-candidate.md
```

Changed module fingerprints appear as `upstream-module-changed`. Review the
actual OpenStax commit diff, independently verify changed mathematics and
answers, update any affected local pages, run the complete project checks, and
only then update the lock and map. Do not point production at upstream `main`.

The maintainer-only map refresh is:

```sh
node tools/openstax-source.mjs build-map
```

It always rebuilds every bundle, so the committed map stays complete. Run it
only after deliberately updating a locked commit and reviewing its content
changes, or after authoring new sections.

## Source authority for future work

For the mapped math books:

- pinned CNXML is the semantic/transcription source for text, objectives,
  MathML, element IDs, exercise/solution pairing, and figure metadata;
- the corresponding local PDF is edition evidence and the visual authority
  for layout, graph geometry, part labels, and answer-key context; and
- current OpenStax `main` is only an update candidate until reviewed and
  locked.

When the CNXML, PDF, official answer, and independent calculation disagree,
stop and record the discrepancy. Never change one source silently to make it
agree with another.

## What the audit does not yet certify

The initial pass establishes provenance, structural mapping, upstream drift,
and high-confidence instructional metadata coverage. It does not by itself
prove every local equation, worked step, interactive answer, inline SVG, or
Knowledge Check item correct. Those require the existing section verifier,
independent mathematics, PDF visual review, and progressively recorded
exercise-level decisions.

After any accepted content correction, continue to run:

```sh
npm run verify-section -- content/math/<book>/<chapter>/<section>.md
npm test
npm run build
npm run check:build
```
