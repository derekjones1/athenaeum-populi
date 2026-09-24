# Figure-alt pass kit

The image-first re-read of every `mediafigure` in a life-sciences book,
required by `docs/subjects/life-sciences.md` §"Completion audit". Run
records: `docs/history/microbiology.md`, `docs/history/biology.md`.

**Revised September 22, 2026: inventory, Opus, `longdesc` first.** Earlier
image-first passes missed detail — an arrow's far end, a panel row, a
bracket endpoint, a printed label — because the checker described the
image in a few lines and never traced an edge; a later read of every
`longdesc` figure found most of them wrong (errata 898–982). The checker
brief therefore requires a full inventory (every label, every count, every
arrow as `source → target` with both ends zoomed) before the words are
read, and a claim-by-claim check against it.

**Opus only, never Sonnet** *(September 23, 2026)*: about 70% of Sonnet
fixers' "clean" verdicts were wrong and most of their fixes regressed;
Sonnet plus an Opus check cost more than Opus alone. Whatever model runs
the first unit of a new task, the parent opens the image for one of its
"clean" verdicts before launching the rest.

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
   alt-only figures last (rarely defective).
   The packet tool writes one packet per chapter; regroup its lines into
   packets of 30–45 `longdesc` figures, which is what one agent finishes.
3. The parent opens the image for EVERY flag before editing (crop and
   upscale with PIL for small labels; checkers mis-count and mis-measure
   about one flag in seven). Fix the page; a claim inherited from the
   source alt gets an erratum and a footer disclosure; an artwork typo
   gets an erratum in the pattern of erratum 171; a checker's "contradicts
   erratum N" is adjudicated on the image like any other flag. A fixer
   agent (one that edits the page itself) follows the same rules, plus:
   never a straight `"` inside a shortcode's double-quoted attribute (it
   breaks the whole page — use single quotes or `\"`), `npm run lint`
   after each page it edits, and no footer clause for correcting the
   page's own earlier alt or `longdesc` — `Changes:` names departures from
   the source only.
4. Zero-flag chapters get a parent spot-check of their two longest
   `longdesc`s.
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
