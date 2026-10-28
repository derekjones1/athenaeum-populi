# Authoring playbook — history

Dated records moved out of the operative core playbook, kept for
provenance. Cut (mostly verbatim; cross-references updated where the
referenced section itself moved here) from `docs/authoring-playbook.md`.

## The pre-July-22 grandfathering (from "2. Source fidelity")

Existing sections authored before July 22, 2026 whose attribution footer
explicitly discloses light condensation are grandfathered. Do not rewrite them
solely to remove that disclosed condensation. New sections and substantive
revisions follow the source-fidelity rule above; never use the grandfathering
exception to justify new omissions.

## The September 2026 option-figure conversion (from the GraphPlot section)

A prerendered `<svg>` option block fails both the lint and the build (the
last twelve were converted in September 2026).

## §5 Working rules: how the lint got to zero warnings

The last warning-level rules (missing hints, multipart-looking questions, an
empty worked Solution, all-same graph answer positions) were promoted to
errors on August 10, 2026, when the corpus carried zero of each, and the
warning channel was deleted with them.

The Practice retrofit that used to live here is finished: every mapped
section carries the block, the rule is an error, and the backlog count and
the `--check-docs` tooling that maintained it are gone. A future book's
sections each need theirs as they land — as an error on the page being
written, not as a worklist.

Everything else that used to live here has been fixed rather than documented:
numerically coded categorical answers are `multiplechoice`, four-digit numbers
are grouped, and figure curves come from analytic primitives. Two rules that
were over-firing were narrowed at the same time — an incidental value collision
is not a defect (the mode of a data set *is* one of the printed numbers), and
`\phantom{0000}` long-division spacing is not a number. The trivially
satisfiable fill-ins are closed class by class — the record moved to
`docs/history/math.md`.

## Grader hyphen fold, re-key notes, and glossary bullets (October 27, 2026)

Three rules landed the day Derek closed the standing "open for Derek"
list. **The text grader reads a hyphen as nothing as well as a space**
(`assets/js/lib/text/check-text.mjs`, `closedForm`): `fore-gut` grades
for `foregut` and `semi-conservative` for `semiconservative`, both ways and
under the plural folds, while a spaced respelling (`fore gut`) folds under
neither. The hyphenated or closed respelling of the answer or of a kept
member is now a redundant accept member (lint), and 127 such members were
stripped from 91 pages, all but two in Microbiology; their ledger records
carried once `ledger-carry` was fixed to test the raw old spelling instead
of its normalized form, which had left 88 sound records "accept-narrowed".
**A Source note under a multiple choice never prints the key**
(`docs/subjects/life-sciences.md`, "Multiple choice"; lint). **A Key terms
glossary is one entry per bullet** (`docs/authoring-playbook.md`; lint;
`docs/history/math.md` for the split). Two items on the list needed no
change: Microbiology 14.6's Kirby-Bauer Short Answer stays folded into its
self-check, as `docs/subjects/microbiology.md` already records (September
26, 2026), and the figure-bound choice component has no planned
replacement, which `life-sciences.md` now says.
