# Microbiology figure-alt pass — working log

**Temporary. Delete this file when the last chapter row below reads
"done" and the close-out steps are ticked.** It is a working log, not a
playbook: the rules it applies live in `docs/subjects/life-sciences.md`
§"Media: vendored figures" and §"Completion audit". Nothing here restates
them.

## Why this pass exists

The completion audit of September 20, 2026 (`docs/history/microbiology.md`,
"Completion audit record") read 53 of the book's figures cold and found 4
alt defects, about 1 in 13. Biology's audit measured 1 in 12. The graded
items in the same sample had 0 defects, so the item pipeline holds; the alt
checks do not. Two of the four defects were inherited from the OpenStax
source alt and confirmed against the image; two were page-introduced.
The pattern is anchored reading: author and checker both started from the
alt and looked for it in the image. The audit's checkers were told to
describe the image first and read the alt second, and that order found
the defects. This pass applies that order to every figure in the book.

## Scope

Every `mediafigure` on every Microbiology page, chapter openers
(`_index.md`) included. Knowledge Check pages carry no figures.

| Chapter | Pages | Figures | Status | Agent report | Flags | Fixed | Rejected |
|---|---|---|---|---|---|---|---|
| 01 An Invisible World | 3 | 23 | todo | | | | |
| 02 How We See the Invisible World | 4 | 45 | todo | | | | |
| 03 The Cell | 4 | 60 | todo | | | | |
| 04 Prokaryotic Diversity | 6 | 30 | todo | | | | |
| 05 The Eukaryotes of Microbiology | 5 | 39 | todo | | | | |
| 06 Acellular Pathogens | 4 | 29 | todo | | | | |
| 07 Microbial Biochemistry | 5 | 33 | todo | | | | |
| 08 Microbial Metabolism | 7 | 27 | todo | | | | |
| 09 Microbial Growth | 6 | 34 | todo | | | | |
| 10 Biochemistry of the Genome | 4 | 31 | todo | | | | |
| 11 Mechanisms of Microbial Genetics | 7 | 42 | todo | | | | |
| 12 Modern Applications of Microbial Genetics | 4 | 29 | todo | | | | |
| 13 Control of Microbial Growth | 4 | 34 | todo | | | | |
| 14 Antimicrobial Drugs | 7 | 23 | todo | | | | |
| 15 Microbial Mechanisms of Pathogenicity | 4 | 19 | todo | | | | |
| 16 Disease and Epidemiology | 4 | 17 | todo | | | | |
| 17 Innate Nonspecific Host Defenses | 5 | 26 | todo | | | | |
| 18 Adaptive Specific Host Defenses | 5 | 26 | todo | | | | |
| 19 Diseases of the Immune System | 5 | 19 | todo | | | | |
| 20 Laboratory Analysis of the Immune Response | 5 | 34 | todo | | | | |
| 21 Skin and Eye Infections | 5 | 33 | todo | | | | |
| 22 Respiratory System Infections | 4 | 26 | todo | | | | |
| 23 Urogenital System Infections | 6 | 23 | todo | | | | |
| 24 Digestive System Infections | 6 | 33 | todo | | | | |
| 25 Circulatory and Lymphatic System Infections | 4 | 31 | todo | | | | |
| 26 Nervous System Infections | 4 | 26 | todo | | | | |
| **Total** | **127** | **792** | | | | | |

Page counts include the chapter opener. Figure counts are the
`mediafigure` shortcodes on those pages (766 on section pages plus 26
openers). The four figures the audit already fixed (3.4 Cytoskel, 22.4
Legion, 23.1 nephron, 23.3 Chancroid) are re-read like any other; a
second flag on one of them means the fix was wrong.

Status values: `todo` → `running` (agent launched) → `reported` (report
file exists, flags unverified) → `done` (every flag verified on the image
by the parent, fixes landed, errata written, footer disclosures added).

## Method

One Sonnet agent per chapter, launched in waves of five or six. Each
agent reads nothing but the packet for its chapter (one line per figure:
page path, line, vendored image path, module id), the checker brief, and
the two playbook sections named above. For each figure, in this order:

1. Open the image with the Read tool and write down what is drawn: panels,
   parts, labels, colours, arrows and their direction, counts, numbers,
   scale bars, the subject's identity (a photograph of what).
2. Only then read the `alt`, the caption, and the `longdesc` if any, and
   the source alt in the module's CNXML `<image>` / `<media>` element.
3. Flag any claim the image contradicts or does not support, any part the
   alt mislabels, any "labeled" or "numbered" claim with no such marks,
   any sequence described backwards, any alt that describes a different
   drawing, and any drawn diagram whose meaning is in neither caption nor
   `longdesc`. Say which of the alt's claims was inherited from the source
   alt: that is an erratum candidate.
4. Write one report line per figure: `page:line — clean` or
   `page:line — <class> — <what the alt says> — <what the image shows> —
   <proposed alt sentence> — source-inherited yes/no`.

Agents edit nothing and run no git command. The parent opens the image
for every flag and decides. A rejected flag is logged in the chapter row
with one line of reasoning in `PARENT-NOTES.md`. A confirmed flag is
fixed on the page, and when the wrong claim came from the source alt, an
erratum goes to `docs/openstax-errata.md` and the page footer's
`Changes:` clause discloses the departure, as the audit did for errata
813 and 814.

Reports live in the session scratchpad as `alt-pass/report-NN.md`;
packets as `alt-pass/packet-NN.md`; the brief as
`alt-pass/checker-brief.md` (derive it from the completion audit's
checker brief, figures section only). The scratchpad does not survive the
session, so the row above records the report's flag counts, not its path.

## Per-chapter yield (fill in as rows close)

| Chapter | Flags | Confirmed | Source-inherited | Page-introduced | Errata |
|---|---|---|---|---|---|

## Close-out (tick when done)

- [ ] All 26 rows `done`; totals filled in.
- [ ] `node tools/lint/lint-all.mjs` clean (alt length, caption repeat,
      no HTML in alt, no key in a figure beside an item).
- [ ] `npm test` green. Alt edits touch no graded item, so the answer
      ledger is unchanged; if `npm test` reports a stale ledger record,
      an agent edited something it should not have.
- [ ] `npm run build` and `npm run check:build` green.
- [ ] Measured residual rate written into
      `docs/history/microbiology.md` under a new dated heading
      ("Figure-alt pass"), with the confirmed-defect count, the
      source-inherited share, and the errata range. Compare against the
      audit's projection (about 55 of 766).
- [ ] `docs/subjects/life-sciences.md` §"Completion audit" says whether a
      full image-first alt pass is now part of the standard for the next
      book, and the checker brief in `docs/briefs/microbiology/checker.md`
      says "describe the image before reading the alt".
- [ ] Decide whether Biology gets the same pass (same measured rate, never
      swept); record the decision in `docs/subjects/biology.md`.
- [ ] Commit. Then delete this file in the same commit or the next.
