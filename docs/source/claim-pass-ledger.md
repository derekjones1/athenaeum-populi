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
source error per two sections; roughly half of a checker's "findings" are
textbook simplifications or priority disputes the parent should keep as
printed; a Sonnet checker takes 5–8 minutes per chapter of 3–6 sections.

| Book | Chapter | Sections | Status | Errata |
|---|---|---|---|---|
| Microbiology | 01-an-invisible-world | 3 | done Sep 6 2026 | 377–378; Koch kept |
| Microbiology | 02-how-we-see-the-invisible-world | 4 | done Sep 6 2026 | 374 |
| Microbiology | 03-the-cell | 4 | done Sep 6 2026 | 379–381; pentaglycine kept |
| Microbiology | 04-prokaryotic-diversity | 6 | done Sep 6 2026 (author's own pass + review) | 367–368, 373 |

Knowledge-check pages (`knowledge-check-*.md`) carry no source prose and are
outside this pass; their items are covered by the KC audit.
