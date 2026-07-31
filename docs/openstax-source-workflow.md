# OpenStax source reconciliation

The three completed math books now have a report-only connection to the
official OpenStax publishing source. The connection maps and audits the
existing Hugo pages; it does **not** regenerate them or accept upstream changes
automatically.

The source repository is
[`openstax/osbooks-prealgebra-bundle`](https://github.com/openstax/osbooks-prealgebra-bundle).
It contains Prealgebra 2e, Elementary Algebra 2e, and Intermediate Algebra 2e
as CollXML collections and CNXML modules.

## Quick start

From the repository root:

```sh
npm run source:fetch
npm run source:verify
npm run source:check
npm run source:history
```

What those commands do:

- `source:fetch` creates an ignored, sparse Git checkout under
  `sources/openstax/osbooks-prealgebra-bundle`. It checks out the locked commit
  and materializes the sparse text files for the two inferred PDF-era commits.
  It does not download the large `media/` tree.
- `source:verify` works offline. It confirms that every local numbered math
  section has exactly one committed module mapping and that the map agrees
  with the local paths and `source_section` frontmatter.
- `source:check` works offline after the fetch. It compares titles,
  objectives, instructional headings, prose traceability, local interaction
  counts, and heuristic Try It prompt matches against the checked-out CNXML.
  It never writes under `content/`.
- `source:history` compares each book's inferred PDF-era commit with the
  current locked OpenStax commit. It separates later upstream changes from
  possible original transcription differences.

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
official OpenStax repository (read only)
  → exact locked commit
  → ignored sparse checkout
  → committed book/section/module map
  → report + explicit review decisions
  → reviewed edits to Athenaeum content, if any
```

The final arrow is always manual. Neither `source:check` nor `source:history`
changes learner-facing content. A new OpenStax commit is a review candidate,
not a publishing instruction.

## Committed provenance files

- `data/openstax/math-source-lock.json` records the official repository,
  current reviewed commit, collections, license, and inferred PDF-era commit
  for each book.
- `data/openstax/math-source-map.json` connects all 201 local section paths to
  stable OpenStax module IDs and module SHA-256 fingerprints.
- `data/openstax/math-reconciliation-decisions.json` records known intentional
  adaptations and adjudicated upstream disagreements so later audits do not
  silently reverse them.

The OpenStax checkout itself remains under ignored `sources/`; the large source
repository is not copied into this Git repository.

## Initial reconciliation result

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

### Important upstream inconsistency

Elementary Algebra 2e section 2.7 needs special treatment. Current OpenStax
changes the Try It inequality's right-hand constant from `−3/5` to `+3/5` but
retains a solution graphic saying “Contradiction / No solution.” With `+3/5`,
the variable terms cancel to a true inequality, so the result is an identity.
The local PDF-era `−3/5` prompt and contradiction answer are internally
correct. The decision file therefore retains the local version instead of
blindly applying current upstream.

This is why updates stop for review.

## Checking for a newer OpenStax commit

```sh
npm run source:status
```

If OpenStax has moved, create a separate ignored checkout and audit it:

```sh
npm run source:fetch -- \
  --latest \
  --source-dir sources/openstax/math-latest

npm run source:check -- \
  --source-dir sources/openstax/math-latest \
  --output sources/openstax/reports/latest-candidate.md
```

Changed module fingerprints appear as `upstream-module-changed`. Review the
actual OpenStax commit diff, independently verify changed mathematics and
answers, update any affected local pages, run the complete project checks, and
only then update the lock and map. Do not point production at upstream `main`.

The maintainer-only map refresh is:

```sh
node tools/openstax-source.mjs build-map \
  --source-dir sources/openstax/osbooks-prealgebra-bundle
```

Run it only after deliberately updating the locked commit and reviewing its
content changes.

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
