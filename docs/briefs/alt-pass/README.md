# Figure-alt pass kit

The image-first re-read of every `mediafigure` in a life-sciences book,
required by `docs/subjects/life-sciences.md` §"Completion audit". Run
twice: Microbiology (September 20, 2026, `docs/history/microbiology.md`)
and Biology 2e (September 21, 2026, `docs/history/biology.md`).

**Revised September 22, 2026: inventory, Opus, `longdesc` first.** A
60-figure sample after both passes still found 7 of 22 `longdesc` figures
wrong (1 of 38 without one), and the follow-up pass read all 914 Biology 2e
and Microbiology `longdesc` figures image-first (Biology's first 511 by
Opus fixers on September 22; Biology chapters 38–47 and all of
Microbiology by Sonnet fixers plus an Opus second read on September 23)
and found roughly 70% wrong (connection, position, count, and mislabel
leading; many of the fixes small; errata 898–982). The first passes had
read the image first as well; they missed detail — an arrow's far end, a
panel row, a bracket endpoint, a printed label — because the checker
described the image in two to four lines and never traced an edge. The
checker brief now requires a full inventory (every label, every count,
every arrow as `source → target` with both ends zoomed) before the words
are read, and a claim-by-claim check against it.

**Opus only, never Sonnet** *(September 23, 2026)*. On the ten units
given to Sonnet fixers, the Opus second read found about 70% of their
"clean" figures wrong and most of their fixes regressions or incomplete
(Microbiology chapters 5–8: 10 of 12 fixes regressed; chapters 22–26: 9
of 14); Sonnet plus an Opus check cost more than Opus alone. Whatever
model runs the first unit of a new task, the parent opens the image for
one of its "clean" verdicts before launching the rest.

## Run shape

1. `python3 tools/source/alt-pass-packets.py <book> <out-dir>` — one
   `packet-NN.md` per chapter, one line per figure (page:line of the
   opening tag, the largest vendored variant, the OpenStax module, the
   manifest stem). It reads the media manifest and the source map; a
   figure missing from either is printed to stderr.
2. One `general-purpose` agent with `model: "opus"` per packet, six at a
   time, prompt = "read `docs/briefs/alt-pass/checker-brief.md`; packet
   `<out-dir>/packet-NN.md`; report `<out-dir>/report-NN.md` (Bash heredoc
   appends, not the Write tool)". Launch the next packet as each finishes.
   Agents share the scratch dir, so name each one's helper scripts and
   crops by packet (`<unit>-*.py`, `zoom/<unit>-*.png`) — a generic name
   is overwritten by a sibling mid-run. Tick the report against the
   packet's lines, not the agent's totals: reports skip verdicts and
   misstate fix counts.
   Order the packets `longdesc` figures first — pathway maps, food webs,
   phylogenies, and other networks; then multi-row mechanism diagrams;
   then scale and range charts with brackets; then labeled anatomy — since
   figure kind predicts defects and chapter does not; photographs and
   alt-only figures last (1 in 38 defective in the sample, and harmless).
   The packet tool writes one packet per chapter; regroup its lines into
   packets of 30–45 `longdesc` figures, which is what one agent finishes.
3. The parent opens the image for EVERY flag before editing (crop and
   upscale with PIL for small labels; checkers mis-count and mis-measure
   about one flag in seven). Fix the page; a claim inherited from the
   source alt gets an erratum and a footer disclosure; an artwork typo
   gets an erratum in the pattern of erratum 171; a checker's "contradicts
   erratum N" is adjudicated on the image like any other flag (erratum 100
   was itself an alt-first misreading). A fixer agent (the September 22–23
   shape: the agent edits the page itself) follows the same rules, plus:
   never a straight `"` inside a shortcode's double-quoted attribute (it
   broke two whole pages, 174 and 81 lint errors — use single quotes or
   `\"`), `npm run lint` after each page it edits, and no footer clause for
   correcting the page's own earlier alt or `longdesc` — `Changes:` names
   departures from the source only (a fixer added 22 such clauses, two
   false).
4. Zero-flag chapters get a parent spot-check of their two longest
   `longdesc`s (two of five clean chapters in Biology hid a defect).
5. Close-out: `npm run lint` after each wave (rewrites cross the
   600-character alt cap), `npm test` — a graded item that names the
   figure above it carries that alt in its ledger hash, so edited figures
   re-hash items: `solve:emit --only <hashes>` for the multiple-choice
   ones, a fresh Fable solver on the masked pages, `solve:compare`,
   `ledger:merge`; selfchecks are re-read by the parent and recorded with a
   note; then `answer-ledger prune`. History record, playbook status line,
   errata section header.

`flags.sh NN` (in the run's scratch dir) greps a report's flagged verdict
lines; keep it beside the packets.
