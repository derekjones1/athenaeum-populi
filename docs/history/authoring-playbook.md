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
