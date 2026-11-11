# Run facts — Chemistry 2e chapter NN (`$SP/run-facts.md`)

The parent fills this per run from `$SP/chN-inventory.txt`, the
`keys-N.M.txt` files, and the raw CNXML. Authors and checkers read it after
their brief. Everything here is a FACT about this run or a DECISION the
parent has made; a rule belongs in the playbook, not here. Delete a heading
that does not apply.

## Facts

- Book key `chemistry`; content root
  `content/physical-sciences/chemistry/NN-<slug>/`.
- Bundle checkout:
  `sources/openstax/osbooks-chemistry-bundle/modules/<id>/index.cnxml`.
- Chapters done before this run: 1–(N−1); every rule in
  `docs/subjects/chemistry.md` applies.

| Section | Module | Output file | PDF pages (p-00NN.png) | Printed exercise offset |
|---|---|---|---|---|
| N.1 Title | mNNNNN | `01-<slug>.md` | A–B | +0 |

- PDF pages are `$SP/pdf/chNN/p-00NN.png` (NN = PDF index; printed folio =
  index − 14, re-checked for this chapter). The ranges are the parent's
  first read: confirm your first and last page by looking. The chapter's
  pooled end matter: Key Terms p-…, Key Equations and Summary p-…,
  Exercises p-… to p-… (numbered through the chapter; a module's exercise n
  is printed as n plus the offset above). The answer key for the chapter:
  `$SP/pdf/chNN/key-NNNN.png` to `key-NNNN.png`.
- **Every module of this book was corrected upstream after the PDF was
  made.** Where the PDF and the CNXML differ, the CNXML is the corrected
  text: follow it and do not report the difference as a defect.
- OpenStax page URL:
  `https://openstax.org/books/chemistry-2e/pages/N-M-<slug>` (confirm the
  slug against the section title).
- Footer authors: Paul Flowers, Klaus Theopold, Richard Langley, William R.
  Robinson, and OpenStax. License CC BY-NC-SA 4.0. Book details URL
  `https://openstax.org/details/books/chemistry-2e`.
- **Exemplars:**
  `content/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results.md`
  for a numeric page (worked examples, measured fill-ins, Key equations);
  `…/02-phases-and-classification-of-matter.md` for classification items
  and added recall items. Read the first 40 lines and from `## Summary` to
  the end. Where this chapter keys the shape, one chapter 2 item each,
  found by its stem in `content/physical-sciences/chemistry/02-atoms-molecules-and-ions/`
  (read the item and the lines around it, not the page): a formula
  `textin` under a part that is only an image — `04-chemical-formulas.md`,
  "Write the molecular and empirical formulas of the following compound,
  shown in the figure above. Enter the molecular formula."; a name
  `textin` — `07-chemical-nomenclature.md`, "Name the following compound:
  CsCl."; further items held in a `followup` —
  `06-ionic-and-molecular-compounds.md`, "…write the symbols for the ions
  involved: BaO." (the `multiplechoice`, then its `followup` of two formula
  `textin`s). Delete the lines this chapter does not need.
- Practice floor: at least 2 exercises per objective group and 5 per
  section, each group with at least one auto-graded item.

## Per section (one block each)

Every count is an element count in the raw CNXML, never a grep over the
keys files.

- **N.M** — objectives: K. Exercises: E, of which keyed: e (the rest are
  omitted). Worked examples: x, with Check Your Learning: c. Glossary
  definitions: G. Key equations: yes (n) / no. Figures: stems, noting any
  outside a captioned figure, any in an exercise stem, any that is a keyed
  answer. Tables: list, noting a table printed as an image. Feature boxes:
  class and title. Keyed-answer shapes the playbook's "Exercises" table
  does not list: the exercise ids, or "none". Appendices: each one the
  module links (with its site path), and each place the content needs an
  appendix without linking it — the phrase, the items, the site path —
  both of which are links on the page. **Appendix A is the exception**:
  the periodic table is a control on every page, so an item that needs
  only its data (an atomic mass, a molar mass, an element for an atomic
  number) and names no table is NOT listed and gets nothing added —
  chapter 3's molar-mass items take no pointer. Where the source's own
  words name the table ("Using the periodic table, …"), those words are
  listed and linked. Every OTHER appendix is listed for each item that
  needs it.

## Parent decisions

Each names the playbook rule it applies; a shape the playbook already fixes
is not re-decided. Each was checked against the house lints before it was
written here (a decision the lint refuses is not a decision).

1. …
