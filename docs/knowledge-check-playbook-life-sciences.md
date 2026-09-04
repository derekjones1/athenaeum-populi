# Knowledge Check Playbook — Life Sciences

A Knowledge Check is a cumulative, unit-level self-test — not a section. It is
the one deliberate departure from section-page exercise patterns: **quizzes
have no hints.**

Read and follow `docs/authoring-playbook.md` and `docs/subjects/biology.md`
first. The core's source-fidelity, component, verification, and handoff
rules all apply here, and so do the biology playbook's component rules
(`textin` shape and accept lists, multiple-choice distractor discipline,
`selfcheck` rubrics, `sortbins` construction, `mediafigure` manifest rule).

This edition governs OpenStax Biology 2e and any later life-sciences book
wired the same way. The mathematics edition is
`docs/knowledge-check-playbook-math.md`. The two share one philosophy —
cumulative, grouped by the chapter and section each item comes from so a
miss points the reader at exactly one place, no hints, every item recorded
in the answer ledger and independently solved — and differ where the source
differs. Biology 2e has no chapter Practice Test, no Review Exercises, and
no odd-numbered Answer Key; every one of its 1509 source exercises is
already spent on the section pages. So a biology Knowledge Check is
**author-written from the module text at a fixed count per section**, where
a math one samples an official pool at whatever count the pool supports.

## Placement

The placement and identity rules every edition shares — file name and
location, frontmatter, non-overlapping ranges, the numeric-prefix exemption,
`aliases` on rename, no hints, the waived 2–3 cap, real components only —
live in `docs/authoring-playbook.md` §3 "Knowledge Checks (both editions)".
What is specific to a unit-level check:

- **One page per unit.** Biology 2e's units are the machine-readable
  `books.biology.units` list in `data/openstax/source-map.json`; the sidebar
  nests chapters under them and keeps a page without `source_chapter` inside
  whichever unit is open, so a Knowledge Check weighted immediately after its
  unit's last chapter renders as the unit's final entry with no template
  work.
- File: `content/<subject>/<book>/knowledge-check-XX-YY.md` (book level, next
  to the chapter folders), where `XX-YY` is the unit's zero-padded chapter
  range.
- Frontmatter: `title`, `description`, `source_chapters: "1-3"`, and a
  `weight` one past the unit's last chapter. The title names the unit and
  carries the chapter range the validator reads
  (`Knowledge Check: Unit 1 — Chapters 1–3`).
- **Weights shift.** Chapters and Knowledge Checks share one sequential
  weight order (authoring playbook, "Where the files go"), so landing a unit's
  check moves every later chapter's `weight` up by one. The full table for
  Biology 2e, so nobody re-derives it:

  | Unit | Chapters | Chapter weights | File | KC weight |
  |---|---|---|---|---|
  | 1 | 1–3 | 1–3 | `knowledge-check-01-03.md` | 4 |
  | 2 | 4–10 | 5–11 | `knowledge-check-04-10.md` | 12 |
  | 3 | 11–17 | 13–19 | `knowledge-check-11-17.md` | 20 |
  | 4 | 18–20 | 21–23 | `knowledge-check-18-20.md` | 24 |
  | 5 | 21–29 | 25–33 | `knowledge-check-21-29.md` | 34 |
  | 6 | 30–32 | 35–37 | `knowledge-check-30-32.md` | 38 |
  | 7 | 33–43 | 39–49 | `knowledge-check-33-43.md` | 50 |
  | 8 | 44–47 | 51–54 | `knowledge-check-44-47.md` | 55 |

  Chapter weight = chapter number + the number of units that end before it.
  Land a unit's check and the shift of every chapter at or after its last
  chapter in the same commit: `npm run validate` requires strictly
  sequential weights at the book root, so a check without the shift, or a
  shift without the check, is red.

## Content rules

- **Cumulative:** questions cover every chapter in the unit, grouped by the
  section they come from. Use one `## Chapter N: Title` heading per chapter
  and one `### N.M Title` heading per authored section, titles verbatim from
  the section pages; do not silently omit a section. A one-paragraph
  `callout` before the first chapter says what the check covers, that the
  questions are written from the chapters' own text, and that there are no
  hints.
- **Exactly three items per section**, and **at least one auto-graded item**
  (`multiplechoice`, `textin`, or `sortbins`) among them. The lint (the
  `knowledgeCheck` profile in `BOOK_RULES`, `tools/lint/lints.mjs`, keyed
  per book like the practice floors) reports any other count, a section of only selfchecks, an
  item above the first `### N.M` heading, and any `fillin` or `graphplot`
  as an **error**. The count is per section rather than per objective or
  per body subsection because those vary too much to equalise (objectives
  run two to four per section, body `##` subsections zero to nine); three
  per section tests every section with the same weight and keeps Unit 7's
  fifty sections to about 150 items. That page will be roughly twice the
  largest math check — say so in the handoff and let `npm run check:build`
  measure it, but do not thin the quota for one unit.
- **Author-written from the module.** Every item is built from the pinned
  CNXML module of the section it sits under, with **no new claim**:
  - a **summary** sentence, as a cloze `textin` or a select-the-term
    `multiplechoice`, exactly as `docs/subjects/biology.md` "Summary items"
    prescribes;
  - a **glossary** definition, as a `textin` recall item (meaning as the
    prompt, term as the answer, one to four words, accept list of the
    ordinary variants);
  - a **body** passage, as a `multiplechoice` whose stem and every option
    are things the module prints (distractors of the same category from
    the same module — no "all of the above", no option that is also
    correct: read every distractor as a possible second key);
  - a **comparison table** with categorical columns, as a `sortbins`
    (columns become bins, rows become items — the biology playbook's
    construction rule);
  - an explanation the module gives, as a `selfcheck` whose model answer is
    made of the module's own sentences and whose `===CHECKS===` rubric
    lists 2–6 clauses of that answer. The rubric is required on this book's
    Knowledge Checks (lint error without it): with no hint and no key, it
    is the only thing that makes the item self-gradable.
- **A Knowledge Check stem may not duplicate a section Practice item.**
  The section pages already carry every source exercise, so re-asking one
  verbatim tests recall of the page, not the biology. A fact may be asked
  again with a different stem and, for a multiple choice, a different keyed
  emphasis or option set; a glossary term already recalled on the section
  page may be recalled here from a differently worded meaning. Check the
  section's `## Practice` block before writing.
- **Spread across the section.** Where the section has three or more body
  `##` subsections, draw the three items from three different ones; with
  fewer, take the balance from the summary and glossary. Do not let a
  section's three items all test one paragraph.
- Multiple-choice options are three or four, parallel in grammar and length
  band. The corpus-wide answer-position gate measures this book across all
  its pages, so ~200 new items on one page can move it: spread keyed
  positions as you write, and if the gate fails, reorder with a
  deterministic seeded shuffle and say so in `Changes:` — never hand-pick.
- `mediafigure` is allowed when an item genuinely needs the figure (a
  Visual-Connection-style ask); the stem must already be vendored in the
  media manifest. A figure whose caption or alt names the answer leaks it —
  to that item and to its neighbours — so read the items on both sides and
  put the figure-reading item after the property questions about the same
  object.
- The attribution footer follows the section-page form (licence, deep link
  to the source book, and a `Changes:` clause stating that every item is
  locally written from the named chapters' modules).

## Source and answer audit

Build a **source ledger** before authoring; it is the handoff artefact, not a
committed file. For every item record:

- module ID of the section it sits under, and the **subsection** it is built
  from — the CNXML `<section>` id and title for a body passage, or
  `summary`, `glossary` (with the `<definition>` id), or the table id;
- the exact sentence, definition, or table cells the item is built from;
- the chosen component, and the independently derived answer with a
  one-line justification from the module;
- for a multiple choice, where in the module each distractor appears, and
  why none is also correct.

That subsection tie is the provenance: the learner page groups by
`### N.M` only, and the ledgers carry the rest. When the item's answer-ledger
record is written (Verify, step 3), its `note` starts with
`KC <unit> <N.M> § <subsection>` so the tie survives in the committed data.

Inspect the pinned CNXML module as the semantic source; the PDF is the
edition and visual evidence for figures and tables. If the module's summary,
body, and glossary disagree with each other, stop and document the
discrepancy in `docs/openstax-errata.md` — do not silently pick one.

## Verify

The biology triple check applies unchanged: author, then an independent
Sonnet checker, then the orchestrator answers every graded item with the
keys hidden.

1. Reconcile the chapter/section headings against the authored book and the
   source ledger. Every section in the unit must be represented, at the
   quota.
2. Independent checker: re-read every item against the raw CNXML module
   (not the page) — stem and every option printed there, no second correct
   option, textin answer a term the module defines or prints, rubric
   clauses drawn from the model answer, no stem duplicating the section's
   Practice block — and report defects to the parent.
3. Orchestrator blind solve: `npm run solve:emit` on the page, then
   `npm run solve:compare`; settle every disagreement against the module's
   text (source outranks general knowledge). Record each verdict and its
   `solved` block in the **answer ledger** (AGENTS.md §The answer ledger,
   `npm run ledger:merge` last, after every other edit — hashes depend on
   the final text): every item needs a record, and `npm test` fails at
   `verify:ledger` until it exists, since `--require-solved` covers this
   book's Knowledge Checks like its sections.
4. Run `npm run verify-section -- content/.../knowledge-check-XX-YY.md`; it
   runs the lints (quota, auto-graded floor, rubric, no-hint), self-grades
   every `textin`, and checks every `mediafigure` resolves.
5. Run `npm test`; it validates the complete `content/` tree, every
   Knowledge Check range, heading, and weight, real-grader parseability, the
   answer-position gate, and all authoring lints. Move the baselines with
   `npm run baseline:update` (`--min-exercises`, `--min-verified`,
   `--min-replayed`; not `--min-confirmed` — Knowledge Check items are
   unmatched by `verify:source-keys` by design, which never visits a page
   outside `map.sections`). Then `npm run build && npm run check:build`.
6. In the browser, confirm the check sits last inside its unit in the
   sidebar, chapter/section grouping, no hint controls, correctly rendered
   figures, and working right and wrong submissions from every chapter.
7. Include the full source ledger, discrepancies and errata numbers, the
   chapter-weight shift, the page-size measurement, and uncommitted files in
   the handoff.
