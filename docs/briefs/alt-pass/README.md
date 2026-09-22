# Figure-alt pass kit

The image-first re-read of every `mediafigure` in a life-sciences book,
required by `docs/subjects/life-sciences.md` §"Completion audit". Run
twice: Microbiology (September 20, 2026, `docs/history/microbiology.md`)
and Biology 2e (September 21, 2026, `docs/history/biology.md`).

## Run shape

1. `python3 tools/source/alt-pass-packets.py <book> <out-dir>` — one
   `packet-NN.md` per chapter, one line per figure (page:line of the
   opening tag, the largest vendored variant, the OpenStax module, the
   manifest stem). It reads the media manifest and the source map; a
   figure missing from either is printed to stderr.
2. One `general-purpose` Sonnet agent per chapter, six at a time, prompt =
   "read `docs/briefs/alt-pass/checker-brief.md`; packet `<out-dir>/packet-NN.md`;
   report `<out-dir>/report-NN.md` (Bash heredoc appends, not the Write
   tool)". Launch the next chapter as each finishes. Budget 100k–250k
   Sonnet tokens per chapter, scaling with figure count.
3. The parent opens the image for EVERY flag before editing (crop and
   upscale with PIL for small labels; checkers mis-count and mis-measure
   about one flag in seven). Fix the page; a claim inherited from the
   source alt gets an erratum and a footer disclosure; an artwork typo
   gets an erratum in the pattern of erratum 171; a checker's "contradicts
   erratum N" is adjudicated on the image like any other flag (erratum 100
   was itself an alt-first misreading).
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
