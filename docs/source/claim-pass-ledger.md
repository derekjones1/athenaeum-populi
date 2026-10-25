# Prose claim pass ledger

The prose claim pass (`docs/subjects/life-sciences.md` → Verification →
"Prose claim pass") reads every section's prose as a scientist and checks
its claims against the rest of the book and then one citable reference. It
is the fourth reading on every new life-sciences section. This file is the
prose claim pass, one row per chapter: the Anatomy and Physiology run writes
a row at close-out (`docs/briefs/anatomy-physiology/run.md` §4 step 3) with
status, date, errata numbers, and any kept-as-printed calls.

**How to run a chapter.** One Sonnet checker per chapter, read-only, briefed
with `docs/briefs/<book>/claim-pass.md` (the rules are the playbook's). The parent
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

**Biology 2e: sweep complete and closed.** All 47 chapters were read on September 6,
2026 in five Sonnet waves (chapters 1–10, 11–20, 21–30, 31–40, 41–47); the
accepted corrections are errata 382–457 under the five "Biology 2e prose
claim pass" headings in `docs/openstax-errata.md`, and the per-chapter rows
were retired from this table the same day because those headings are the
record. No Biology chapter is outstanding.

| Book | Chapter | Sections | Status | Errata |
|---|---|---|---|---|
| Anatomy and Physiology | 01-an-introduction-to-the-human-body | 7 | done Sep 22 2026 (in the authoring run) | 857–859 |
| Anatomy and Physiology | 02-the-chemical-level-of-organization | 5 | done Sep 22 2026 (in the authoring run) | 877 |
| Anatomy and Physiology | 03-the-cellular-level-of-organization | 6 | done Oct 13 2026 (in the authoring run) | 1808–1815 |
| Anatomy and Physiology | 04-the-tissue-level-of-organization | 6 | done Oct 13 2026 (in the authoring run) | 1843, 1844, 1853, 1859, 1860, 1863, 1867, 1872, 1875, 1884, 1886 |
| Anatomy and Physiology | 05-the-integumentary-system | 4 | done Oct 14 2026 (in the authoring run) | 1901, 1906, 1908, 1914, 1917, 1918, 1923, 1927, 1928 |
| Anatomy and Physiology | 06-bone-tissue-and-the-skeletal-system | 7 | done Oct 15 2026 (in the authoring run) | 1934–1940 |
| Anatomy and Physiology | 07-axial-skeleton | 5 | done Oct 16 2026 (in the authoring run) | 1958–1969 |
| Anatomy and Physiology | 08-the-appendicular-skeleton | 5 | done Oct 16 2026 (in the authoring run) | 1999, 2003, 2009, 2013, 2014, 2015 |
| Anatomy and Physiology | 09-joints | 7 | done Oct 16 2026 (in the authoring run) | 2017–2023 |
| Anatomy and Physiology | 10-muscle-tissue | 9 | done Oct 18 2026 (in the authoring run) | 2054–2064 |
| Anatomy and Physiology | 11-the-muscular-system | 6 | done Oct 18 2026 (in the authoring run) | 2089–2129 |
| Anatomy and Physiology | 12-the-nervous-system-and-nervous-tissue | 5 | done Oct 20 2026 (in the authoring run) | 2173–2178 |
| Anatomy and Physiology | 13-anatomy-of-the-nervous-system | 4 | done Oct 21 2026 (in the authoring run) | 2207, 2215–2222, 2230–2235, 2240–2249 |
| Anatomy and Physiology | 14-the-somatic-nervous-system | 3 | done Oct 21 2026 (in the authoring run) | 2252–2265, 2267, 2276, 2281–2282 |
| Anatomy and Physiology | 15-the-autonomic-nervous-system | 4 | done Oct 21 2026 (in the authoring run) | 2287–2290, 2296–2297, 2304–2305, 2309–2310 |
| Anatomy and Physiology | 16-the-neurological-exam | 5 | done Oct 24 2026 (in the authoring run) | 2321–2323, 2329–2331, 2336–2337 |
| Anatomy and Physiology | 17-the-endocrine-system | 11 | done Oct 24 2026 (in the authoring run) | 2348–2349, 2354, 2367–2368, 2373–2374, 2378 |

The Microbiology rows (26 chapters) are in `docs/history/microbiology.md`
under "Prose claim pass rows". Knowledge-check pages (`knowledge-check-*.md`) carry no source prose and are
outside this pass; their items are covered by the KC audit.
