# Prose claim pass ledger

The prose claim pass (`docs/subjects/life-sciences.md` → Verification →
"Prose claim pass") reads every section's prose as a scientist and checks
its claims against the rest of the book and then one citable reference. It
is the fourth reading on every new life-sciences section, and this file
tracks the RETROACTIVE sweep over sections authored before the rule existed
(September 6, 2026). Update a row when a chapter's pass lands: status, date,
errata numbers, and any kept-as-printed calls.

**How to run a chapter.** One Sonnet checker per chapter, read-only, briefed
with the checker brief (the parent's memory holds it verbatim under the
microbiology brief, §8; the rules are the playbook's). The parent
adjudicates every finding against the cited evidence before editing, then
handles each accepted finding like a corrected key: visible source note,
`data/openstax/reconciliation-decisions.json` entry (one per page, all
element ids on it), footer `Changes:` sentence, erratum in
`docs/openstax-errata.md`. Dismissed suspicions go in that file's
"Reviewed and *not* errata" list. A true distractor is replaced and listed
in `DISCLOSED_DEVIATIONS` (`tools/verify/verify-source-keys.mjs`), and the
`--min-confirmed` floor in `package.json` drops by one per disclosed item.
Any edited graded item changes its hash: `solve:emit` → answer →
`solve:compare --out` → `ledger:merge`. Finish with `npm test`.

**Rates from the September 6 runs** (plan by these): about one evidenced
source error per two sections; three in the one chemistry-heavy Biology
page sampled; roughly half of a checker's "findings" are textbook
simplifications or priority disputes the parent should keep as printed;
a Sonnet checker takes 5–8 minutes per chapter of 3–6 sections.

**Suggested order for Biology 2e:** units 1–2 first (chapters 1–10:
chemistry, metabolism, respiration, photosynthesis carry the densest
quantitative claims), then genetics (11–17), then the rest.

| Book | Chapter | Sections | Status | Errata |
|---|---|---|---|---|
| Microbiology | 01-an-invisible-world | 3 | done Sep 6 2026 | 377–378; Koch kept |
| Microbiology | 02-how-we-see-the-invisible-world | 4 | done Sep 6 2026 | 374 |
| Microbiology | 03-the-cell | 4 | done Sep 6 2026 | 379–381; pentaglycine kept |
| Microbiology | 04-prokaryotic-diversity | 6 | done Sep 6 2026 (author's own pass + review) | 367–368, 373 |
| Biology 2e | 01-the-study-of-life | 2 | pending | |
| Biology 2e | 02-the-chemical-foundation-of-life | 3 | partial — §2.1 done Sep 6 2026 (errata 375–376); §2.2–2.3 pending | |
| Biology 2e | 03-biological-macromolecules | 5 | pending | |
| Biology 2e | 04-cell-structure | 6 | pending | |
| Biology 2e | 05-structure-and-function-of-plasma-membranes | 4 | pending | |
| Biology 2e | 06-metabolism | 5 | pending | |
| Biology 2e | 07-cellular-respiration | 7 | pending | |
| Biology 2e | 08-photosynthesis | 3 | pending | |
| Biology 2e | 09-cell-communication | 4 | pending | |
| Biology 2e | 10-cell-reproduction | 5 | pending | |
| Biology 2e | 11-meiosis-and-sexual-reproduction | 2 | pending | |
| Biology 2e | 12-mendels-experiments-and-heredity | 3 | pending | |
| Biology 2e | 13-modern-understandings-of-inheritance | 2 | pending | |
| Biology 2e | 14-dna-structure-and-function | 6 | pending | |
| Biology 2e | 15-genes-and-proteins | 5 | pending | |
| Biology 2e | 16-gene-expression | 7 | pending | |
| Biology 2e | 17-biotechnology-and-genomics | 5 | pending | |
| Biology 2e | 18-evolution-and-the-origin-of-species | 3 | pending | |
| Biology 2e | 19-the-evolution-of-populations | 3 | pending | |
| Biology 2e | 20-phylogenies-and-the-history-of-life | 3 | pending | |
| Biology 2e | 21-viruses | 4 | pending | |
| Biology 2e | 22-prokaryotes-bacteria-and-archaea | 5 | pending | |
| Biology 2e | 23-protists | 4 | pending | |
| Biology 2e | 24-fungi | 5 | pending | |
| Biology 2e | 25-seedless-plants | 4 | pending | |
| Biology 2e | 26-seed-plants | 4 | pending | |
| Biology 2e | 27-introduction-to-animal-diversity | 4 | pending | |
| Biology 2e | 28-invertebrates | 7 | pending | |
| Biology 2e | 29-vertebrates | 7 | pending | |
| Biology 2e | 30-plant-form-and-physiology | 6 | pending | |
| Biology 2e | 31-soil-and-plant-nutrition | 3 | pending | |
| Biology 2e | 32-plant-reproduction | 3 | pending | |
| Biology 2e | 33-the-animal-body-basic-form-and-function | 3 | pending | |
| Biology 2e | 34-animal-nutrition-and-the-digestive-system | 4 | pending | |
| Biology 2e | 35-the-nervous-system | 5 | pending | |
| Biology 2e | 36-sensory-systems | 5 | pending | |
| Biology 2e | 37-the-endocrine-system | 5 | pending | |
| Biology 2e | 38-the-musculoskeletal-system | 4 | pending | |
| Biology 2e | 39-the-respiratory-system | 4 | pending | |
| Biology 2e | 40-the-circulatory-system | 4 | pending | |
| Biology 2e | 41-osmotic-regulation-and-excretion | 5 | pending | |
| Biology 2e | 42-the-immune-system | 4 | pending | |
| Biology 2e | 43-animal-reproduction-and-development | 7 | pending | |
| Biology 2e | 44-ecology-and-the-biosphere | 5 | pending | |
| Biology 2e | 45-population-and-community-ecology | 7 | pending | |
| Biology 2e | 46-ecosystems | 3 | pending | |
| Biology 2e | 47-conservation-biology-and-biodiversity | 4 | pending | |

Knowledge-check pages (`knowledge-check-*.md`) carry no source prose and are
outside this pass; their items are covered by the KC audit.
