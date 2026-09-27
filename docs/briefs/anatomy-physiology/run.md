# Running an Anatomy and Physiology chapter — the parent's recipe

This is the orchestrator's checklist for "author chapter N of Anatomy and
Physiology". It is the one document the parent reads; the agents read the
briefs beside it. Rules live in the playbooks (`docs/authoring-playbook.md`,
`docs/subjects/life-sciences.md`, `docs/subjects/anatomy-physiology.md`);
this file says who reads what, in what order, with what in their context,
and restates no rule. The author and checker briefs do repeat the hint and
leak rules on purpose (Derek kept them, September 23, 2026), so a change
to one of those rules is made in the playbook AND in both briefs. A unit
Knowledge Check runs from `kc-run.md` beside this file.

This kit descends from the Microbiology kit (retired September 26, 2026,
with that book complete; its runs are in `docs/history/microbiology.md`),
with that book's content rules swapped for this book's: each module's own
`<glossary>` is the Key-terms list, every exercise is keyed, no Check Your
Understanding or Clinical Focus boxes; instead the Interactive Link
Questions rule, the References list, the figure `kind` check, and the
September-8 table (playbook "Source and authority"). The process — parent
context kept small, Sonnet prep and close-out agents, one Sonnet author per
section, a claim pass per chapter, the blind solve in a fresh Fable
subagent with masked pages — is unchanged, except that **the per-section
checker runs on Opus**, not Sonnet (§0).

## 0. Shape, and why

The checkers and claim pass find defects on lint-clean pages, so they
stay. On chapters 1–2 an Opus re-review found about 80 defects the Sonnet
checkers had passed (leaks, alt-vs-image errors), so the checker runs on
Opus; authors, prep, and close-out agents stay Sonnet, except the
alt-errata verifier (§4 step 0). Hence:

- **Parent context stays small.** Every note goes to `$SP/PARENT-NOTES.md`,
  not to the conversation. Every long command output goes to a file and
  the parent reads its tail (`> $SP/x.log 2>&1; tail -20 $SP/x.log`).
  Agents' final messages are ten lines; their reports are files.
- **Work from the packet list, not an agent's totals** *(September 23,
  2026)*: reports miscount and skip, so tick each packet line against the
  report before accepting a unit.
- **Agents sharing `$SP` name their helper files by unit**
  (`$SP/<unit>-*.py`, `$SP/zoom/<unit>-*.png`) — generic names get
  overwritten *(September 23, 2026)*. Say so in every brief that lets an
  agent write a helper.
- **Authors read the compact brief + the run facts, and the playbook
  sections named there** — not the whole core playbook, not the history.
- **The blind solve runs in a fresh Fable subagent** with only the packets
  in its context (`solve.md`) — Fable, because it is the orchestrator's
  own reading, not a Sonnet's. The parent adjudicates disagreements only.
- **Launch in a rolling window, about ten to twelve agents live**, the
  next started as one finishes; fourteen launched at once hit the session
  limit, and the limit is shared with any concurrent session. A limit
  (429) kills agents mid-task: first check what each left on disk (the
  page, a `verify-section` run, a complete `answers.json`), do the
  parent's own work until the reset, then resume each killed agent by
  `SendMessage` to its raw id ("resume; re-read your regions before
  editing") — it continues from its transcript. Respawn only if the resume
  errors ("No transcript found"), and never skip a killed pass. Every
  brief has its agent append its report as it goes, so a killed reader
  loses little.
- **Scripts that edit a page or data file** assert that the computed
  target is non-empty and matches exactly once (a `str.replace('')` once
  wrote a 5 MB page), rewrite JSON with `ensure_ascii=False` and the
  file's own indent, strip a matched attribute rather than drop its line,
  and name files explicitly rather than rely on a glob. A file several
  agents edit is changed with the Edit tool, never rewritten whole.

## 1. Before the wave

`SP` is this session's scratchpad. Never a git command from an agent — say
"not even a read-only one like `git diff`" in every prompt; the parent runs
them.

1. **Baseline.** `npm test > $SP/test-baseline.log 2>&1; tail -3 …` on the
   clean tree. Note HEAD and the last erratum number in PARENT-NOTES.
2. **Media.** `npm run source:media -- --book anatomy-physiology --chapter N
   --dry-run`, then without `--dry-run`. Note the stems that live inside
   feature boxes. The manifest's `kind` will read `photo` for nearly all;
   the author sets it from the image (playbook rule 4).
3. **PDF pages.** Find the chapter's true PDF index range with `pdftotext`
   (printed folio = index − 16 held for chapters 1–2; re-check), then
   `pdftoppm -f A -l B -r 110 -png sources/anatomy-and-physiology-2e_-_WEB.pdf $SP/pdf/chNN/p`.
   **The PDF predates the pin** (playbook "Source and authority"): for a
   module in the September-8 table, the PDF shows the old text or image;
   the CNXML wins and the table row explains it — not an erratum.
4. **Extraction, per module** (`tools/source/anatomy-physiology-prep.py`):
   `keys <moduleId> > $SP/keys-N.M.txt` and `terms <moduleId> >
   $SP/terms-N.M.md`. The parent does NOT read the keys files whole; a
   Sonnet agent reads them for step 6. Authors key from the raw CNXML.
5. **Landing page** `content/…/NN-<slug>/_index.md` from the intro module,
   in final form (bullets naming the sections; the chapter-objectives note
   as a list; no `authoring_status`). **Delegated:** one Sonnet agent,
   prompt = the chapter 1 and 2 landings as exemplars (Sections bullets are
   plain text, never links), the intro module id, the section list, the
   OpenStax deep link; it views the splash image for the alt. Launched
   together with the step-6 drafter.
6. **Run facts** — copy `run-facts-template.md` to `$SP/run-facts.md`.
   **Delegated, in two parts**: one Sonnet agent fills PART A (every
   factual field, from the `keys` files and the raw CNXML; every count an
   element count in the CNXML, never a grep over the keys files) in
   `$SP/run-facts.md`, and writes PART B, "DECISIONS NEEDED", to a
   SEPARATE file, `$SP/run-facts-B.md` — authors and checkers never read
   it. Part B is a numbered list of every Interactive Link Question (with
   the ONE module sentence that could fix its answer, quoted, or "no single
   sentence"; and whether the pooled exercise repeats the note's question
   verbatim, differs, or has a key that answers a different question),
   every feature box that ends in a question, every comparison table, every
   table with images or spanning cells, any notation (with its first corpus
   precedent, `grep -rn '<glyph>' content/life-health-sciences | head -1`,
   or "none"), any module in the September-8 table, any figure whose alt
   lists labels rather than describes, every `section.references` with its
   paragraph count, and every route, with the raw data beside each. The
   parent reads PART B only and writes PART C into `$SP/run-facts.md`, the
   decisions — made once, by the parent, not per author. A decision
   names the playbook rule it applies, and a shape the playbook already
   fixes is NOT re-decided: before the wave, grep
   `docs/subjects/anatomy-physiology.md` and `docs/subjects/life-sciences.md`
   for every form Part C names and quote the rule beside the decision.
   Part B quotes the extractor's key line verbatim and never infers a key.
   **Part C names WHICH rule and WHICH sentence, never a concrete `accept`
   list** — say "grader-check the members" and let the author verify. A
   decision about a figure reads its letters, labels, and counts off the
   vendored image, never the source alt, which can describe a different
   version of the drawing — for the four September-8 images replaced in
   place, the old one *(an alt's lettering restated in Part C was built
   on by an author, Microbiology ch. 26)*.
7. Copy the three agent briefs unchanged to `$SP/` (`author.md`,
   `checker.md`, `claim-pass.md`) so the agents' paths are one directory.

The parent's own prep work is then: the baseline, the media pull, the PDF
render, the extraction commands, PART C, and reading two ten-line reports.
Everything checklist-shaped goes to a Sonnet agent, every run, without
being asked *(September 12, 2026)*. Checklist-shaped means text: anything that reads or fixes a figure, alt,
or `longdesc` against its image runs on Opus (life-sciences "Figure, alt,
and `longdesc` reading and fixing run on Opus", *September 23, 2026*),
and after the first unit of any agent on a task new to its model the
parent spot-checks one of its "clean" verdicts against the image. A
run-specific correction to a brief is an edit to the repo copy, then the
scratchpad copy — never a fork.

## 2. The wave

One Sonnet author per section, launched together, each prompt three lines:
section number, module id, output path, PDF page range, "read
`$SP/author.md` first". Names cannot contain a dot (`author-1-1`).

As each author reports: launch its checker (one **Opus** agent per
section, `model: "opus"`, prompt = page path + "read `$SP/checker.md`").
**A prompt line naming one item for "specific attention" narrows a checker
to that item alone** — say "run the FULL pass, and in addition…", never a
bare pointer. When a chapter's last page is on disk: launch its claim-pass
checker (one Sonnet per chapter, prompt = the page paths with module ids,
PLUS the landing page path with its intro module id — the landing page is
Sonnet-written and this is its only reading — + "read
`$SP/claim-pass.md`", report path `$SP/claims-chNN.md`). Before launching
it, `grep -n 'Anatomy' docs/openstax-errata.md > $SP/ap-errata.txt` (the
book's existing errata and "Reviewed and *not* errata" lines) and name
that file in the prompt.

After the last author reports, grep every page of the wave for plain-text
cross-references to sibling sections that are now on disk — authors
launched together cannot link pages that did not exist yet — and have the
authors convert them to real links before the checkers repeat the finding
page by page.

Checker defects go back to the page's author by `SendMessage` (authors are
resumable by raw agent id); the parent applies only one-line fixes itself.
Read every changed `question=` line and every replaced option in the diff
— the gates do not read prose, and fixes have shipped garbled stems and
stems that print a neighbour's key above or below — and give the parent's
own rewrites the same read: grep the page for each new key, and each new
stem's words against every other key. **Read every author's report for the
words "dropped", "omitted", "duplicate", or "folded" and challenge each
one** — `verify:source-coverage` refuses a drop but cannot judge whether a
fold is honest, and most such rationales fail checking. The only exercise
that may lawfully stand ungraded
is an Interactive Link Question whose answer the module does not fix, and
it still stands as a prompt in its callout and is counted in the footer.
Verify every checker finding against the image or the raw CNXML before
relaying it — some are wrong.

Claim-pass findings: the parent verifies each against the cited evidence,
then applies the accepted ones (Source note, `reconciliation-decisions.json`
entry, footer sentence, erratum), lists the rest under "Reviewed and *not*
errata". After correcting a value on a page, grep the page, the book's
Knowledge Checks, and sibling pages for the OLD value: a hint, filler, or
check item built on it is now wrong.

## 3. The blind solve

Per chapter, once its pages are stable (checker fixes in):

```sh
npm run solve:emit -- content/life-health-sciences/anatomy-physiology/NN-<slug> --out $SP/solve/chNN --pages-out $SP/solve/chNN/pages
```

Launch ONE fresh `general-purpose` agent with `model: "fable"`, prompt =
"read `docs/briefs/anatomy-physiology/solve.md`; packets in
`$SP/solve/chNN`, masked pages in `$SP/solve/chNN/pages`; write
`$SP/solve/chNN/answers.json`". It sees the packets and the masked pages
only — never the live page, the keys, the ledgers, or the checker reports.

Then the parent:

```sh
npm run solve:compare -- $SP/solve/chNN/answers.json content --out $SP/solve-results/chNN > $SP/solve/chNN/compare.log 2>&1
```

Every disagreement or flag gets an `adjudicated` note settled against the
module's sentence. A why-question keyed to one abstract noun usually wants
its accept list extended within the 7-word accept cap; when the solver's
answer is right but a paraphrase no accept list can enumerate (an effect,
a reason — "unregulated activation" for "cytokine storm"), the item becomes
a `multiplechoice` over the module's own named outcomes and is re-solved
(never for a leak, which is fixed by order or wording). A flag on an item
that carries a `DISCLOSED_DEVIATIONS` entry or a "Reviewed and *not*
errata" ruling re-raises a recorded decision: read the footer, the
deviation, and the errata file, and adjudicate by the decision. Read every
answer's `note`, not only the disagreements: the solver reads the whole
masked page and has reported real source defects outside its own item
(2.5's four-row table under prose promising five); a note describing a
contradiction goes to the claim-pass handling. A compare that hits ONE
unresolved disagreement writes NOTHING for the whole file — re-run it after
adjudicating. Its results are merged in §4 step 5. A page edited after its solve re-hashes: re-emit that page
and solve it again. After a sweep, re-solve only what the carry rule in
AGENTS.md ("The answer ledger") does not carry *(September 23, 2026)* —
`npm run ledger:carry` applies it; snapshot BEFORE the sweep's first edit.

## 4. Close-out, in this order

0. **Delegate the mechanical close-out to Sonnet agents, launched together
   once the pages are stable**. Agents are addressed by their raw agent id
   for `SendMessage`, never by their description string — record each
   author's id when it is launched. (a) an alt-errata verifier, **on
   Opus** (it reads images; see §1; kept although the checkers read every
   figure, as a low-cost safety check — Derek, September 23, 2026) — every
   author/checker "suspected source defect" and every alt-vs-image claim,
   checked against the vendored image, the CNXML, AND the September-8
   table in the playbook for a module in that set, verdicts to
   `$SP/alt-errata.md`.
   **Its brief must say it never runs `source:media` or `vendor-media`**;
   (b) an errata drafter — reads the previous run's block for format,
   `$SP/alt-errata.md`, `claims-chNN.md`, and PARENT-NOTES, writes
   `$SP/errata-block.md` and `$SP/decisions-entries.json` (claim
   corrections only get decisions entries; alt and typo errata do not) and
   reports every footer that does not disclose what its erratum says; (c) a
   pins agent — step 3 below, with the old→new values in its report; it
   leaves the claim-pass-ledger errata column to the parent, who fills it
   from `$SP/errata-block.md` (claim errata only) once numbered; (d)
   any tool bug a checker found. The parent inserts, appends, and applies
   the footer one-liners.
1. Errata block inserted after the previous block (before the plain
   `## Confirmed`); decisions entries carry every element id of a page.
2. `node tools/source/openstax-source.mjs build-map` BEFORE the deviation
   test (an unmapped page leaves a deviation "unexercised").
3. Pins: chapter and section counts are NOT restated in prose — `npm run
   source:verify` prints them from the map, the A&P test in
   `tools/source/openstax-source.test.mjs` reads them from disk, and
   `documentation.test.mjs` fails a doc that restates one. Update: the
   book cover (the chapter moves from "Planned contents" to its `### Unit
   N` heading under `## Chapters`), `docs/source/claim-pass-ledger.md`
   rows, the playbook header sentence for the chapter. When the book's
   last section lands, the status flips to `complete` in every place
   life-sciences "Where the files go" lists — its own close-out step.
4. `node tools/source/openstax-source.mjs history --output
   docs/source/openstax-upstream-history-audit.md`.
5. `python3 tools/verify/rebuild-ledger-results.py --results
   $SP/ledger-results --out $SP/ledger-results-fixed --book
   life-health-sciences/anatomy-physiology` (rebuilds the author hashes
   your post-filing edits changed), then merge the author results and the
   solve records, and prune (`npm run ledger:merge --
   $SP/ledger-results-fixed > $SP/merge1.log 2>&1`; `npm run ledger:merge
   -- $SP/solve-results/chNN > $SP/merge2.log 2>&1`; `node
   tools/verify/answer-ledger.mjs prune content > $SP/prune.log 2>&1`).
   A merge keeps an author's note under a solve and a solve under an
   author's note, whichever lands first. Then `npm run ledger:provenance --
   content/life-health-sciences/anatomy-physiology --out $SP/prov` and
   merge `$SP/prov`: it gives any record still carrying only the solve
   placeholder (an item edited after its author filed) a provenance note,
   and lists weak matches in `$SP/prov/low-confidence.json` — read those.
   (Chapters 1–2 lost every graded item's author note to a compare merged
   last, before merges were order-independent; their notes were
   regenerated this way on September 26, 2026.) `baseline:update` in step
   6 moves `--min-exercises` to the new total. A page with more than one stale
   entry stops the rebuild and nothing is written for it or the pages
   after it: map stale → uncovered by question text against the solve
   packet's hashes, write the patched file, and merge that too.
6. `npm run check:external-links` BEFORE the errata drafter (step 0b), so
   dead-link errata land in the run's block (a 403 is a bot wall and stays
   linked; a 404 through the `openstax.org/l/` redirect is un-linked and
   filed). Then `npm run baseline:update`; `npm test > $SP/test-final.log
   2>&1`; read the tail. `npm run source:verify`. Then `npm run build >
   $SP/build.log 2>&1 && npm run check:build >> $SP/build.log 2>&1`; read
   the tail — a green `npm test` is not a buildable site (a bare `$4
   billion` once broke the build with every fast gate green), and the
   build-size cap this book is expected to trip (playbook "Build budgets")
   is measured only here. The axe suite reads only the routes in
   `REPRESENTATIVE_PAGES` (`tests/accessibility.spec.mjs`), which holds
   Biology and Microbiology section and check pages but no Anatomy and
   Physiology route yet: add a section page with this book's feature boxes
   and figures, and each unit Knowledge Check as it lands.
7. New lessons: a one-line rule into the playbook section it belongs to;
   the narrative into `docs/history/anatomy-physiology.md`; a lint or test
   where one can hold it. Then the session memory file.
8. Commit only when asked. A large push may fail from the sandbox — try
   once, then hand it to Derek.
