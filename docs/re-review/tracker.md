# Re-review tracker

Procedure, standard, and the prompt to paste: [README.md](README.md). One row
per request; tick it only when every step of the README's loop is done and
committed. Fill `Fixed` with the defect count, `Errata` with the numbers
logged (or `—`), `Commit` with the short hash, and Notes with the cost and
anything the next row should know.

Status: `[ ]` pending · `[~]` in progress (note the section reached) · `[x]` done

## Reference: Anatomy and Physiology 2e

Chapters 1–2 are the standard (authored with the full kit and re-reviewed by
Opus on September 22, 2026). New A&P chapters meet it by being authored with
`docs/briefs/anatomy-physiology/run.md`, so they are not tracked here.

## Prealgebra 2e

`content/math/prealgebra` · 11 chapters, 60 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. The first math request is the pilot (README
step 0).

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [x] | 1. Whole Numbers | 5 | 134 | 1103–1113 | 923a086 | Math pilot: wrote `brief-math.md` (v2 after a 1.2 trial) and `tools/figures/render-page-figures.mjs`. One Opus fixer per section, 138–158k tokens each (731k total, about double a life-sciences section); Fable solve 108k for 55 items, 55/55 after one adjudication (Jenna 27, source key). Fixes: hint leaks ~55, word-problem/translate retype 47 (`answerForm="decimal"`), figure geometry 5 (1.2 blocks drew 3 rods + 7 ones for 17 + 26; 1.3 circles cut blocks), carry rows over the wrong column 3 (now a lint), model-count alts stating the key 2 (1.5), Try Its restored to source numbers. `ledger:provenance` skipped for math (mislabels MathML source items). Open: the 2,151 numeric fill-ins corpus-wide without `answerForm`. |
| [ ] | 2. The Language of Algebra | 5 | | | | |
| [ ] | 3. Integers | 5 | | | | |
| [ ] | 4. Fractions | 7 | | | | |
| [ ] | 5. Decimals | 7 | | | | |
| [ ] | 6. Percents | 5 | | | | |
| [ ] | 7. The Properties of Real Numbers | 5 | | | | |
| [ ] | 8. Solving Linear Equations | 4 | | | | |
| [ ] | 9. Math Models and Geometry | 7 | | | | |
| [ ] | 10. Polynomials | 6 | | | | |
| [ ] | 11. Graphs | 4 | | | | |
| [ ] | KC `knowledge-check-01-06` | — | | | | |
| [ ] | KC `knowledge-check-07-11` | — | | | | |

## Elementary Algebra 2e

`content/math/elementary-algebra` · 10 chapters, 71 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. The first math request is the pilot (README
step 0).

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [ ] | 1. Foundations | 10 | | | | |
| [ ] | 2. Solving Linear Equations and Inequalities | 7 | | | | |
| [ ] | 3. Math Models | 6 | | | | |
| [ ] | 4. Graphs | 7 | | | | |
| [ ] | 5. Systems of Linear Equations | 6 | | | | |
| [ ] | 6. Polynomials | 7 | | | | |
| [ ] | 7. Factoring | 6 | | | | |
| [ ] | 8. Rational Expressions and Equations | 9 | | | | |
| [ ] | 9. Roots and Radicals | 8 | | | | |
| [ ] | 10. Quadratic Equations | 5 | | | | |
| [ ] | KC `knowledge-check-01-05` | — | | | | |
| [ ] | KC `knowledge-check-06-10` | — | | | | |

## Intermediate Algebra 2e

`content/math/intermediate-algebra` · 12 chapters, 70 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. The first math request is the pilot (README
step 0).

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [ ] | 1. Foundations | 5 | | | | |
| [ ] | 2. Solving Linear Equations | 7 | | | | |
| [ ] | 3. Graphs and Functions | 6 | | | | |
| [ ] | 4. Systems of Linear Equations | 7 | | | | |
| [ ] | 5. Polynomials and Polynomial Functions | 4 | | | | |
| [ ] | 6. Factoring | 5 | | | | |
| [ ] | 7. Rational Expressions and Functions | 6 | | | | |
| [ ] | 8. Roots and Radicals | 8 | | | | |
| [ ] | 9. Quadratic Equations and Functions | 8 | | | | |
| [ ] | 10. Exponential and Logarithmic Functions | 5 | | | | |
| [ ] | 11. Conics | 5 | | | | |
| [ ] | 12. Sequences, Series and Binomial Theorem | 4 | | | | |
| [ ] | KC `knowledge-check-01-06` | — | | | | |
| [ ] | KC `knowledge-check-07-12` | — | | | | |

## Precalculus 2e

`content/math/precalculus` · 12 chapters, 73 section pages, 2 knowledge checks

Never read against the September 22 bar: needs the full checker read AND
the image-first figure pass. The first math request is the pilot (README
step 0).

| | Chapter | Sections | Fixed | Errata | Commit | Notes |
|---|---|---|---|---|---|---|
| [ ] | 1. Functions | 7 | | | | |
| [ ] | 2. Linear Functions | 4 | | | | |
| [ ] | 3. Polynomial and Rational Functions | 9 | | | | |
| [ ] | 4. Exponential and Logarithmic Functions | 8 | | | | |
| [ ] | 5. Trigonometric Functions | 4 | | | | |
| [ ] | 6. Periodic Functions | 3 | | | | |
| [ ] | 7. Trigonometric Identities and Equations | 6 | | | | |
| [ ] | 8. Further Applications of Trigonometry | 8 | | | | |
| [ ] | 9. Systems of Equations and Inequalities | 8 | | | | |
| [ ] | 10. Analytic Geometry | 5 | | | | |
| [ ] | 11. Sequences, Probability and Counting Theory | 7 | | | | |
| [ ] | 12. Introduction to Calculus | 4 | | | | |
| [ ] | KC `knowledge-check-01-06` | — | | | | |
| [ ] | KC `knowledge-check-07-12` | — | | | | |

## Completed

Biology 2e (47 chapters, 8 unit checks) and Microbiology (26 chapters, 5
block checks) were re-reviewed to this standard September 22–24, 2026, and
every alt-only figure in both books was re-read image-first by Opus
September 24–26, 2026. Their rows — fixes, errata, commits, costs, and
each row's notes — are in `docs/history/biology.md` and
`docs/history/microbiology.md` ("Re-review to the A&P standard" and
"Alt-only figure pass"); the lessons are in the playbooks and the README.
