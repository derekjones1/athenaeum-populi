# OpenStax source reconciliation

Every pinned book has a report-only connection to the official OpenStax
publishing sources. The connection maps and audits the existing Hugo pages; it
does **not** regenerate them or accept upstream changes automatically.

## Pinned source bundles

Each upstream OpenStax publishing repository is one *bundle*, pinned at one
reviewed commit. Every book belongs to exactly one bundle.

- [`openstax/osbooks-prealgebra-bundle`](https://github.com/openstax/osbooks-prealgebra-bundle)
  — Prealgebra 2e, Elementary Algebra 2e, and Intermediate Algebra 2e; the
  whole `modules/` tree is checked out (`moduleScope: "bundle"`).
- [`openstax/osbooks-college-algebra-bundle`](https://github.com/openstax/osbooks-college-algebra-bundle)
  — Precalculus 2e. The bundle also ships titles this project does not use,
  so the checkout is scoped to the modules the Precalculus collection
  references (`moduleScope: "mapped-collections"`, 87 modules).
- [`openstax/osbooks-biology-bundle`](https://github.com/openstax/osbooks-biology-bundle)
  — Biology 2e. Also `moduleScope: "mapped-collections"`, scoped to the
  modules the Biology 2e collection references.
- [`openstax/osbooks-microbiology`](https://github.com/openstax/osbooks-microbiology)
  — Microbiology. A single-book repository, so its bundle key is plain
  `microbiology` and the whole `modules/` tree is checked out
  (`moduleScope: "bundle"`, 159 modules: a preface, 26 chapter
  introductions, 127 numbered sections, and five appendices including the
  book-wide glossary).
- [`openstax/osbooks-anatomy-physiology`](https://github.com/openstax/osbooks-anatomy-physiology)
  — Anatomy and Physiology 2e. Also a single-book repository, so its bundle
  key is plain `anatomy-physiology` and the whole `modules/` tree is
  checked out (`moduleScope: "bundle"`, 198 modules: a preface, 28 chapter
  introductions, and 169 numbered sections; no appendices).

Books carry an `authoringStatus`. `complete` means every upstream numbered
section is authored locally and chapter-by-chapter parity is enforced;
`scaffolded` and `in-progress` mean the book's provenance is pinned while its
pages are still being written, so parity is only checked for what exists,
and `build-map`/`verify-map` print the partial count on the book's own line
(`k/N chapters, k/N sections mapped`), never folded silently into a
"0 errors" run. Anatomy and Physiology 2e is the one `in-progress` book; every
other pinned book is `complete`.

Every book's lock entry also carries a `contentPath` (for example
`content/math/precalculus`, `content/life-health-sciences/biology`): the
directory under `content/` the tooling walks for that book's chapter landings
and numbered sections.

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

**In CI.** The workflow caches `sources/openstax` on the lock file's hash,
runs `npm run source:fetch` on a miss, runs `npm run source:verify`, then
`npm run ci` with `ATHENAEUM_REQUIRE_SOURCES=1` — under which
`verify-source-keys` and `solve-check residual` fail instead of skipping
when a bundle is absent. `npm test` itself stays offline and never fetches:
without a fetched checkout it skips those gates loudly.

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

The CNXML parser knows both module shapes OpenStax uses: objectives in the
metadata `<md:abstract>` (the math bundles, Biology 2e) or, when that element
is empty, in a leading `<section class="learning-objectives">` (Microbiology),
and it excludes every end-matter section class any pinned bundle uses
(`summary`, `multiple-choice`, `fill-in-the-blank`, `true-false`, `matching`,
`short-answer`, `critical-thinking`, `interactive-exercise`, `references`, …)
from the core-heading comparison. A new bundle whose modules use a class not in that list shows up as
`heading-needs-review` on every section; add the class to
`EXCLUDED_CORE_SECTION_CLASSES` in `tools/lib/openstax-source.mjs` rather
than adjudicating the sections.

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

- `data/openstax/source-lock.json` (schema 2) records each bundle's
  official repository, current reviewed commit, module scope, and license,
  plus every book's collection, inferred PDF-era commit, and authoring status.
- `data/openstax/source-map.json` (schema 2) connects every authored
  local section path to stable OpenStax module IDs and module SHA-256
  fingerprints, attributes each section to its bundle, and records per-book
  chapter and section coverage against the upstream collection.
- `data/openstax/reconciliation-decisions.json` (schema 2) records known
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
  every decision's `localPath` is in `source-map.json`, and Knowledge
  Check pages are not mapped — a decisions entry naming one fails `npm test`
  at `assert.ok(mapped)`. A cumulative-assessment change that would need a
  decision needs a different home, or the item revalued in a mapped section.

The OpenStax checkouts themselves remain under ignored `sources/`; the large
source repositories are not copied into this Git repository.

## Checked-in audit snapshots

The current audit state is the generated reports committed beside this doc:
the [existing-math audit](openstax-existing-math-audit.md) (the two math
bundles), the [existing-biology audit](openstax-existing-biology-audit.md)
(the biology bundle), and the [upstream-history audit](openstax-upstream-history-audit.md).
After a reviewed lock or decision change — and after authoring adds mapped
sections — regenerate them exactly with:

```sh
npm run source:check -- --bundle prealgebra-bundle --bundle college-algebra-bundle --output docs/source/openstax-existing-math-audit.md
npm run source:check -- --bundle biology-bundle --output docs/source/openstax-existing-biology-audit.md
npm run source:history -- --output docs/source/openstax-upstream-history-audit.md
```

The Try It prompt-match number in the audit is deliberately a heuristic, not
a one-to-one coverage claim: multipart items can become several local
questions, source items resemble one another, and many source exercises were
intentionally omitted.

## Microbiology

OpenStax Microbiology was pinned on September 5, 2026 at
`633850257fbd3ccf6187b9428c55e80b69236382` (the upstream head of that day,
July 8, 2026). Its `authoredBaselineCommit` is the same commit with
confidence `inferred-from-local-pdf-date`: the local
`sources/microbiology_-_WEB.pdf` (generated September 2, 2026) prints no
revision number, so the pin and the PDF are taken to be the same edition
until a section audit says otherwise. The book is `complete` — its last
chapter (26) authored September 14, 2026 — and `verify-map` prints
`26/26 chapters, 127/127 sections mapped`. Its subject playbook is
`docs/subjects/microbiology.md`; the collection is flat (no units), so the
map records no `units` key for it. The authoring log is in
`docs/history/openstax-source-workflow.md`.

## Anatomy and Physiology 2e

OpenStax Anatomy and Physiology 2e was pinned on September 22, 2026 at
`5ae32b3f4bc24ed003e91dc38bf47dba80751044` (the upstream head of that day,
September 8, 2026). The pin is *newer* than the local PDF
(`sources/anatomy-and-physiology-2e_-_WEB.pdf`, generated September 2,
2026): upstream errata on September 8 touched 19 modules (listed in
`docs/subjects/anatomy-physiology.md`). The `authoredBaselineCommit` is
therefore the last commit before the PDF,
`716383a4c6c16037b14d75a156c65145e75e895e` (June 12, 2026), confidence
`inferred-from-local-pdf-date`, so `npm run source:history -- --bundle
anatomy-physiology` shows, section by section, exactly what the PDF lacks.
The book is `in-progress`: `content/life-health-sciences/anatomy-physiology/_index.md`
lists authored chapters under their unit heading (e.g.
`### Unit 1: Levels of Organization`) and the rest on "Planned contents",
grouped by the source's six units; `verify-map` prints
its partial count, with the six-unit `units` list recorded in the map. Its subject playbook is
`docs/subjects/anatomy-physiology.md`.

## Precalculus 2e

Precalculus 2e is pinned and complete: all 73 upstream numbered sections are
authored locally *(August 29, 2026)*, so chapter-by-chapter parity is
enforced. Its review target is
`789b54099106b071d1d32bfcee454fed72eb4768` in the college-algebra bundle, and
`content/math/precalculus` holds the book cover page, all twelve chapter
landings mapped to the upstream chapter structure, and their section pages;
`npm run source:verify` prints the per-book coverage.

Its authored baseline is `d1bd19c69107ba7f45775670809ae161d63db864`, the last
upstream commit on or before the local `sources/precalculus-2e_-_WEB.pdf`
build date of 2026-04-20 — the inference rule that reproduces the algebra
books' baselines exactly, but still a comparison candidate, not a proven
OpenStax build ID.

**Scaffolded chapters (any future book).** An unwritten chapter landing
declares `authoring_status: scaffolded` in its frontmatter — the marker that
lets an empty `## Sections` overview past the chapter-landing lint and the
content validator's bullets-match-pages check; `build-map` refuses one on a
`complete` book. Add each page with its
`source_section` frontmatter, remove `authoring_status` from that chapter's
landing once its first section page exists, list the section in the landing's
`## Sections` overview, then rerun `node tools/source/openstax-source.mjs build-map`
and commit the refreshed map; `build-map` fails if a marker outlives the first
authored section in its chapter, so an unwritten chapter can never be mistaken
for a finished one. When a future book's every section exists, change its
`authoringStatus` to `complete` in the lock; from then on the tooling
enforces full chapter-by-chapter parity with the upstream collection and the
book joins the audited section matrix.

## Biology 2e

Biology 2e is pinned and `complete`: the lock, the collection mapping, and
the vendored-media pipeline are in place, and `content/life-health-sciences/biology`
carries all 47 chapters (208 sections); `npm run source:verify` prints
`biology: complete — 47/47 chapters, 208/208 sections mapped`. Its pinned commit is
`63f8b6f8d129dd1582989bb755011e9a6d523471` in the `biology-bundle`.

Biology 2e's `collections/biology-2e.collection.xml` nests one level deeper
than the algebra and Precalculus collections: 8 units (`<col:subcollection>`
elements with no direct `<module>` children) each contain 2–8 chapters
(`<col:subcollection>` elements whose `<content>` holds `<module>` children
directly), for 47 chapters and 208 upstream sections total. `parseCollectionXml`
handles both shapes with one rule — a subcollection is a chapter exactly when
its own `<content>` holds `<module>` children directly, otherwise it is a unit
and its nested chapter subcollections are read instead — and numbers chapters
1-based in document order across every unit, recording `{ index, title }` on
`chapter.unit` (`null` for a flat collection like Precalculus's). The preface
module and the three appendix modules are top-level `<col:module>` elements
outside any subcollection, collected as `frontMatterModuleIds` /
`backMatterModuleIds` rather than mistaken for empty chapters.

Biology's end-of-chapter material uses different CNXML section classes than
the math books (`summary`, `multiple-choice`, `critical-thinking`,
`visual-exercise`, `free-response` instead of `key-concepts`,
`section-exercises`, `writing`), all excluded from the audited core
instructional text the same way. Its modules also carry no `note.try`
elements at all — Biology has no math-style Try It prompts — so the audit
reports that lane as `n/a` rather than `0/0`. The audit's local-interaction
scan recognizes `textin`, `selfcheck`, and `sortbins` alongside
`multiplechoice`.

Once a chapter's modules are ready to vendor, `npm run source:media` renders
the raster figures a chapter references into `static/media/<book>/` as WebP at
≤800/≤1600 px and records them in `data/media/<book>.json`:

```sh
npm run source:media -- --book biology --chapter 1 --dry-run
npm run source:media -- --book biology --chapter 1
```

It reads blobs with `git show <commit>:media/<file>` from the blobless
sparse clone, so it needs the fetch's commit to actually hold the referenced
media blob; it is local-only tooling and needs `sips` and `cwebp` on the
machine running it.

### Important upstream inconsistency

Elementary Algebra 2e section 2.7 needs special treatment. Current OpenStax
changes the Try It inequality's right-hand constant from `−3/5` to `+3/5` but
retains a solution graphic saying “Contradiction / No solution.” With `+3/5`
the result is an identity. The local PDF-era `−3/5` prompt and contradiction
answer are internally correct, so the decision file retains the local
version. This is why updates stop for review.

Other confirmed upstream defects are not enumerated here. The local pages
follow the PDF and the modules' own mathematics; where a local sentence had
to be corrected the page carries a visible source note beside it. The
defects go in `docs/openstax-errata.md` — a gitignored local file holding
submission-ready write-ups (module id, element id, current text, why it is
wrong, suggested correction) plus the cases already reviewed and dismissed.

**Logging a confirmed defect there is automatic and requires no approval.**
Whenever an authoring pass confirms a source defect against the raw CNXML plus
one independent check, write it up in `docs/openstax-errata.md` before handing
the work back — do not ask whether to log it, and do not report it only in
prose. A dismissed suspicion goes in the file's "Reviewed and *not* errata"
list with its reason, so it is not re-investigated later.

When section work is split across subagents, each worker is scoped to its own
content file and cannot write here; the parent collects the defects from every
worker's report and logs them. This does not replace recording the *local*
handling here or in `data/openstax/reconciliation-decisions.json`.

## Reading the pinned sources

Raw CNXML interleaves presentation MathML that is slow to read while
transcribing. Render a module as labelled text with approximate LaTeX:

```sh
python3 tools/source/cnxml-preview.py \
  sources/openstax/osbooks-college-algebra-bundle/modules/m49301/index.cnxml
```

The preview is a reading aid, not an authority — reconcile the finished page
against the actual CNXML and the PDF. It drops the spaces between adjacent
TeX tokens, so correct source mathematics can look mangled (`0\let\le8.75`);
confirm any suspected markup defect against the raw `index.cnxml` before
recording it.

The Precalculus 2e PDF is larger than 100 MB, so agents cannot read it
directly; use `poppler` (`brew install poppler`). Locate a section's PDF pages by scanning the running heads, then render the
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
node tools/source/openstax-source.mjs build-map
```

It always rebuilds every bundle, so the committed map stays complete. Run it
only after deliberately updating a locked commit and reviewing its content
changes, or after authoring new sections.

## Source authority for future work

For every mapped book:

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
