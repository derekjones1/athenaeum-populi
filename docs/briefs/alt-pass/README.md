# Figure-alt pass kit

The image-first re-read of every `mediafigure` in a life-sciences book,
required by `docs/subjects/life-sciences.md` §"Completion audit". Run
records: `docs/history/microbiology.md`, `docs/history/biology.md`
("Figure-alt pass", "Practice sweep and long-description pass", "Alt-only
figure pass").

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

1. `python3 tools/source/alt-pass-packets.py <book> <out-dir>
   [--longdesc with|without]` — one `packet-NN.md` per chapter, one line
   per figure (page:line of the opening tag, the largest vendored variant,
   the OpenStax module, the manifest stem); `--longdesc` keeps only the
   figures that carry or lack one. It reads the media manifest, the source
   map, and the lock; a figure missing from the manifest or the map is
   printed to stderr.
2. One `general-purpose` agent with `model: "opus"` per packet, six to
   twelve at a time, prompt = "read `docs/briefs/alt-pass/checker-brief.md`; packet
   `<out-dir>/packet-NN.md`; report `<out-dir>/report-NN.md` (Bash heredoc
   appends, not the Write tool)". Launch the next packet as each finishes.
   Agents share the scratch dir, so name each one's helper scripts and
   crops by packet (`<unit>-*.py`, `zoom/<unit>-*.png`) — a generic name
   is overwritten by a sibling mid-run. Tick the report against the
   packet's lines, not the agent's totals: reports skip verdicts and
   misstate fix counts. A session limit (429) kills checkers mid-packet:
   the report they appended survives, and after the reset each is resumed
   by `SendMessage` to its raw id — never re-run from scratch or skipped.
   Order the packets `longdesc` figures first — pathway maps, food webs,
   phylogenies, and other networks; then multi-row mechanism diagrams;
   then scale and range charts with brackets; then labeled anatomy — since
   figure kind predicts defects and chapter does not; then the alt-only
   figures (`--longdesc without`). Alt-only is not low-risk: after a
   Sonnet image-first pass, Opus still fixed 282 of 1,027 alt-only figures
   in Biology 2e and Microbiology (September 24–26, 2026), photographs as
   often as diagrams — body sites, counts, colours, and scale claims.
   The packet tool writes one packet per chapter; regroup its lines into
   packets of 30–45 figures, which is what one agent finishes.
3. The parent opens the image for EVERY flag before editing (crop and
   upscale with PIL for small labels; checkers mis-count and mis-measure
   about one flag in seven). A size or scale claim is measured with PIL
   against that figure's own scale bar — the same micrograph can print
   two bars that disagree (erratum 1079). Fix the page; a claim inherited from the
   source alt gets an erratum and a footer disclosure; an artwork typo
   gets an erratum in the pattern of erratum 171; a checker's "contradicts
   erratum N" is adjudicated on the image like any other flag. A fixer
   agent (one that edits the page itself) follows the same rules, plus:
   never a straight `"` inside a shortcode's double-quoted attribute (it
   breaks the whole page — use single quotes or `\"`), `npm run lint`
   after each page it edits, and no footer clause for correcting the
   page's own earlier alt or `longdesc` — `Changes:` names departures from
   the source only. When the image shows that a caption or the section's
   prose is wrong (Biology 4.5's "single microtubule doublet"), that is a
   claim correction — Source note, decisions entry, footer sentence,
   erratum — reported to Derek, not an alt fix.
4. Zero-flag packets get a parent spot-check of two figures: the two
   longest `longdesc`s, or in an alt-only packet two diagrams.
5. Close-out: take `npm run ledger:carry -- snapshot content >
   $SP/ledger-before.json` before the first edit and run `plan` after each
   batch — its resolve list is exactly the items re-hashed through their
   figure. `npm run lint` after each wave (rewrites cross the
   600-character alt cap), `npm test` — a graded item that names the
   figure above it carries that alt in its ledger hash, so edited figures
   re-hash items: `solve:emit --only <hashes>` for the graded ones, a fresh Fable solver on the masked pages, `solve:compare`,
   `ledger:merge`; selfchecks are re-read by the parent and recorded with a
   note; then `answer-ledger prune`. History record, playbook status line,
   errata section header.

`flags.sh NN` (in the run's scratch dir) greps a report's flagged verdict
lines; keep it beside the packets.
