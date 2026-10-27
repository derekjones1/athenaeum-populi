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
context kept small, Clerk prep and close-out agents, one Author per
section, a claim pass per chapter, the blind solve in a fresh Fable
subagent with masked pages — is unchanged.

## 0. Shape, and why

**Which model runs which agent is fixed in `AGENTS.md` ("Which model
runs which agent")**, not here: every agent below is an **Author**
(Opus — section authors, checkers, the claim pass, the alt-errata
verifier), the **Blind solver** (Fable, fresh), or a **Clerk** (Sonnet —
landing page, run-facts drafter, errata drafter, pins, history, a fixer
applying accepted old→new sentences). The checkers and claim pass find
defects on lint-clean pages, so they stay: on chapters 1–2 an Opus
re-review found about 80 defects the Sonnet checkers had passed (leaks,
alt-vs-image errors); on chapter 4 the first Opus authors applied their own
checker fixes and twice pushed back correctly on a parent ruling. Hence:

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
  loses little (chapter 13: a 2:30 am reset killed four checkers and the
  claim pass at once; all five resumed by `SendMessage` and lost
  nothing). A NEW session cannot resume the old session's agent ids:
  relaunch with "a prior run died; treat the page as it stands" and point
  the agent at PARENT-NOTES and its predecessor's appended report.
- **Prompts are files** (`$SP/prompt-<unit>.md`; the launch prompt names
  the file in three lines), generated with `str.replace`, never `.format`
  or an unquoted heredoc — both eat `$` and braces, and a `$4x` once
  vanished from an erratum draft that way.
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
   The parent's per-section ranges are a first read: the step-6 drafter
   verifies each one by viewing the boundary pages, and a section's last
   page must include its last figure (the parent's first read stopped one
   page short twice in chapter 5, once in chapter 4). Part C names a figure
   by its full stem — two chapter 5 stems began `506_`.
   **The PDF predates the pin** (playbook "Source and authority"): for a
   module in the September-8 table, the PDF shows the old text or image;
   the CNXML wins and the table row explains it — not an erratum.
4. **Extraction, per module** (`tools/source/anatomy-physiology-prep.py`):
   `keys <moduleId> > $SP/keys-N.M.txt` and `terms <moduleId> >
   $SP/terms-N.M.md`. The parent does NOT read the keys files whole; a
   Clerk reads them for step 6. Authors key from the raw CNXML.
5. **Landing page** `content/…/NN-<slug>/_index.md` from the intro module,
   in final form (bullets naming the sections; the chapter-objectives note
   as a list; no `authoring_status`). **Delegated:** one Clerk (Sonnet),
   prompt = the chapter 1 and 2 landings as exemplars (Sections bullets are
   plain text, never links), the intro module id, the section list, the
   OpenStax deep link. The splash alt is image work (AGENTS.md rule 2):
   the parent views the image and writes the alt itself, BEFORE reading the
   Clerk's draft — on chapter 7 the parent tightened a Clerk alt whose
   colour-by-division reading was wrong, and the claim pass caught it.
   View the largest vendored width and zoom before writing: the chapter 10
   parent described a racket "flat just above the court" that the image
   holds at shoulder height, and a knee "under the body" that is out in a
   split — the claim pass rewrote the alt. Crop EACH limb separately
   before stating its position: the chapter 13 parent wrote "left arm
   bent behind the back" from a whole-figure zoom, and the claim pass and
   the verifier both read the crop as held out to the side *(chapter 13)*.
   Keep the alt at or under 600 characters — `verify-section` caps it, and
   the chapter 16 parent's first draft ran 817 and failed the Clerk's
   verify *(chapter 16)*. Launched together with the step-6 drafter.
6. **Run facts** — copy `run-facts-template.md` to `$SP/run-facts.md`.
   **Delegated, in two parts**: one Clerk (Sonnet) fills PART A (every
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
   for every form Part C names and quote the rule beside the decision —
   the HOUSE rule, never a sibling book's precedent Part B found (chapter
   10's Part C took Microbiology's `Pᵢ` from Part B's grep; life-sciences
   "Cases later chapters settled" keeps `P<sub>i</sub>`, and the parent
   re-edited two pages). A callout heading's form is copied byte for byte
   from the exemplar page (`**Interactive Link**` has no period; Part C
   wrote one and three authors had to say so — and a titled box is
   `**Homeostatic Imbalances.** *Potassium Concentration.*` and a Disorders
   box whose title names only the system is `**Disorders of the Joints.**`,
   periods inside the bold; chapter 12's Part C over-applied the
   Interactive Link note and two authors had to be sent back).
   Part B also greps `$SP/ap-errata.txt` for the chapter's module ids: an
   earlier run's erratum may name a sentence in this chapter and ask for a
   re-test (the ch13 block asked for 15.3's pupillary-reflex sentence), and
   Part C rules on it before the authors write, not after the claim pass
   finds it again *(chapter 15)*.
   An Interactive Link answer is fixed by module TEXT (a sentence, a
   paragraph, a caption): a figure LABEL alone does not fix it — 16.4's
   dermatome figure prints "T10" beside the navel, but the key is
   "T9–T11, approximately", and the item stood as a prompt *(chapter 16)*.
   A source Review Question whose STEM misnames a structure (16.4's
   jaw-jerk reflex "for the vestibulocochlear nerve"; "somatic and visceral
   senses" keyed to the ventral root) is corrected in place with a Source
   note, a footer clause, a decisions entry, and an erratum reserved in the
   ruling — options and key unchanged, so no `DISCLOSED_DEVIATIONS` entry
   (the gate has no stem kind) *(chapter 16, two items)*.
   Part B quotes the extractor's key line verbatim and never infers a key.
   A sentence Part C names as the one that fixes an Interactive Link answer
   is grepped in the raw CNXML OUTSIDE the `<solution>` before it is named —
   chapter 7's Part C named the item's own solution sentence as "the Chapter
   Review"; the author found the body sentence instead.
   Part C never names a shortcode parameter it has not checked against
   `SHORTCODE_PARAMS` ("the figure title as the figure's title" asked for a
   `mediafigure` param that does not exist, *chapter 4*).
   A precedent Part C cites ("7.5 linked the same pointer") is grepped on
   that page before it is written — chapter 8's Part C cited a 7.5 body
   link that was in fact inside a Source note; the decision stood on the
   rule, not the precedent, but the author had to say so.
   **Part C names WHICH rule and WHICH sentence, never a concrete `accept`
   list** — say "grader-check the members" and let the author verify. A
   decision about a figure reads its letters, labels, and counts off the
   vendored image, never the source alt, which can describe a different
   version of the drawing — for the four September-8 images replaced in
   place, the old one *(an alt's lettering restated in Part C was built
   on by an author, Microbiology ch. 26)* — **and never Part B's inference
   about the image either**: Part C told the 6.5 author the fractures
   figure draws a healthy bone because Part B had read the caption; the
   drawing has none *(chapter 6)*. The same holds for a table: Part C
   said the Bone Markings table "prints no class rows" from a Part B
   summary; the raw rows showed it does. Open the image or the CNXML
   for every figure and table decision. Part C also names the exemplar
   page the authors copy (chapter 6's authors asked) — and greps that page
   for each shape it is cited for, since a `grep -l 'Interactive Link'`
   matches a footer clause too: chapter 12's Part C named 10.4 for its
   callouts and 10.4 has none *(chapter 12)*.
   When Part C does the floor arithmetic for a thin section, it counts a
   glossary term as a recall item only after checking that no source item
   on the page keys or prints it: 9.3's two terms and 9.7's one were all
   headline exclusions, and both authors had to find more items than Part
   C promised *(chapter 9)*.
   A table Part C makes a `sortbins` is checked bin by bin against its
   member names first: a group label that shares a root with its members
   (Gluteal/gluteus, Iliopsoas/iliacus, Pronation/pronator) is a giveaway
   the lint does not catch, and the checkers removed two such items on
   chapter 11; "transcribe only" is the decision for that table. Then each
   member is checked against every cell of the OTHER bins' rows, not only
   its own: a member whose text is contained in another row's cell sorts
   under two bins and the author drops it (14.1's "Dermis, joint capsules"
   sat inside the free-nerve-endings Location cell) *(chapter 14)*.
   A sortbins whose bins are letters or short codes (18.6's A / B / AB /
   O) is checked member by member for the bin's own token: "Erythrocyte
   antigens: A only" under A is a giveaway the bin-word lint skipped until
   October 25, 2026 (it filtered tokens of three characters or fewer as
   stopwords; it now reads a one-token bin label whole), and a member that
   falsifies a sibling Review Question's distractor ("lifespan of 120
   days" beside "survive for an average of 4 days") eliminates options the
   same way — both 18.6's and 18.3's Part C members had to be removed
   *(chapter 18)*. Part C names a figure's `kind` only after viewing the
   image: chapter 18's Part C called 1907 "micrographs" from its stem and
   it is a drawing; "the author sets `kind` from the image" is the safer
   line. A source sentence that prints two notations to contrast them
   (18.3's "P<sub>O2</sub> or PO2") keeps both; a house form that merges
   them would print "PO₂ or PO₂" *(chapter 18)*.
   A figure's panel count is read off the vendored image, never inferred
   from the module's caption credits: four `LM ×` credits in 14.1 belong
   to four figures, and Part C told the author 1427 was "four panels" of
   one micrograph. A "sub-title" Part B reports inside a feature box is
   checked in the CNXML before Part C asks for a bold line: 14.2's
   "Retinal Disparity" was the in-box figure's `<title>`, which this book
   never prints *(chapter 14)*. A "missing space after a full stop" Part B
   reports is grepped in the raw CNXML before Part C lists it as a one-word
   defect: 17.8's "athletes.Commonly" and "mass.The" were paragraph
   boundaries in the drafter's stripped dump, and the real one ("FSH.During")
   was elsewhere — two authors had to say so. And the panel-count rule above
   binds Part C's figure lines too: chapter 17's Part C copied Part B's
   "two-part" 1811, and the image has three panels *(chapter 17)*.
   A checker can stumble on Part B while reading the run facts (17.10's did):
   `checker.md` now names the file as off-limits, and the drafter may be
   told to write it to `$SP/parent-only/` instead.
7. Copy the three agent briefs unchanged to `$SP/` (`author.md`,
   `checker.md`, `claim-pass.md`) so the agents' paths are one directory.

The parent's own prep work is then: the baseline, the media pull, the PDF
render, the extraction commands, PART C, and reading two ten-line reports.
Everything checklist-shaped goes to a Clerk (Sonnet), every run, without
being asked *(September 12, 2026)*. Checklist-shaped means text: anything that reads or fixes a figure, alt,
or `longdesc` against its image is Author work on Opus (`AGENTS.md`
"Which model runs which agent", rule 2),
and after the first unit of any agent on a task new to its model the
parent spot-checks one of its "clean" verdicts against the image. A
run-specific correction to a brief is an edit to the repo copy, then the
scratchpad copy — never a fork.

## 2. The wave

One Author (Opus, `model: "opus"`) per section, launched together, each
prompt three lines: section number, module id, output path, PDF page
range, "read `$SP/author.md` first". Names cannot contain a dot
(`author-1-1`).

As each author reports: launch its checker (one Author-kind agent per
section, `model: "opus"`, prompt = page path + "read `$SP/checker.md`").
The prompt never names the author's report file — `checker.md` forbids
reading it, and a prompt that names it invites the read *(chapter 7)*.
**A prompt line naming one item for "specific attention" narrows a checker
to that item alone** — say "run the FULL pass, and in addition…", never a
bare pointer. When a chapter's last page is on disk: launch its claim-pass
checker (one Opus agent per chapter, prompt = the page paths with module ids,
PLUS the landing page path with its intro module id — the landing page is
Clerk-written and this is its only reading — + "read
`$SP/claim-pass.md`", report path `$SP/claims-chNN.md`). Before launching
it, `grep -n -E 'Anatomy|^### [0-9]+\. m4[56]' docs/openstax-errata.md >
$SP/ap-errata.txt` (the book's block headings, every entry headline — the
book's module ids all begin `m45`/`m46` — and the "Reviewed and *not*
errata" lines) and name that file in the prompt. A bare `grep 'Anatomy'`
catches only the headings, and the chapter 16 Part B drafter had to re-grep
the whole file to find the three entries that quote chapter 16 sentences
*(chapter 16)*. A parent ruling that a source KEY stands is provisional
until the claim pass has read the module: chapter 16's parent ruled 16.5's
"processing visual information" key sound, and the claim pass found the
module's own sentence attributing visual processing to the cerebrocerebellum,
so the keyed option was changed (kind `key`, erratum 2316) *(chapter 16)*.

After the last author reports, run `node tools/source/openstax-source.mjs
build-map` at once: `verify:source-coverage` and `verify:source-keys`
silently skip a chapter with no `source-map.json` rows, and every chapter
9 checker had to hand-count its page's coverage because the map was built
only at close-out *(chapter 9)*. Then grep every page of the wave for plain-text
cross-references to sibling sections that are now on disk — authors
launched together cannot link pages that did not exist yet — and have the
authors convert them to real links before the checkers repeat the finding
page by page.

Checker defects go back to the page's author by `SendMessage` (authors are
resumable by raw agent id); the parent applies only one-line fixes itself.
A source notation the house re-sets inside a keyed option or key
(`Ca<sup>++</sup>` → `Ca²⁺`, 10.1) is a fold in `normalizeText`
(`tools/lib/openstax-source.mjs`, with a test), never a `key` deviation —
the keys gate reports it as a key-differs until the fold lands *(chapter
10)*. A double-keyed source option is ruled as an `options` deviation with the
erratum number assigned in the ruling message (the parent keeps a running
reserved list in PARENT-NOTES; the errata drafter numbers those first):
an entry with a placeholder number fails the keys test, and two chapter 11
authors each guessed one. A replacement item's stem is grepped against every
alt and `longdesc` on the page, not only against the keys: 14.2's
replacement cloze ("information similar to that carried by spinothalamic
tract, such as ________ sensations") was answered by a printed label in
the ascending-pathways `longdesc`, and the parent's own read caught it
after the author's key grep had passed *(chapter 14)*. A replacement distractor is grepped against the keys of the items above
and below it before it is accepted: "fat storage" landed directly above an
item keyed "fat stores" *(chapter 6; the author caught it)*. The harness
may refuse an agent's Write of its report file ("Subagents should return
findings as text"): the brief still says append-as-you-go, and when the
write is refused the report is the final message, which the parent saves
to `$SP/report-<unit>.md` itself before launching the checker *(chapter 6,
three of seven authors)*.
A checker fix that RE-BLANKS a cloze is read like a new item: 19.3's author
reblanked an under-determined cloze to "ventricles", a word six other stems on
the page print, and disclosed the leak in the footer — a disclosure cures a
leak only on an unmovable SOURCE item; an author item is replaced *(chapter
19)*.
A Source note is read like a stem: 20.4's note under a corrected Critical
Thinking model answer restated the key of the Review Question directly above
it, and the checker caught it — grep a note's words against the neighbouring
keys as for a replacement stem *(chapter 20)*. A section the size of 20.5
(22 figures, 136 glossary terms, 13 tables) is still ONE Opus author, launched
first with a prompt line telling it to write the page in parts under
`$SP/<unit>-*`, verify after each part, and keep crops in files: 276k tokens
for the first round and 300k after the checker and claim rounds, no resume
needed *(chapter 20)*.
A checker's "concern" that a hint rules out distractors is a defect to
apply, not a note (21.1's three hints named the table or the reasoning
step); and a Part B hedge ("the lint's digit-superscript rule applies")
is checked against the playbook sentence it names before Part C repeats
it — chapter 21's Part C sent Unicode `10¹⁴` where the rule says math
*(chapter 21)*. When a wave's authors each ask the same grammar-slip
question, rule it once in PARENT-NOTES and send the ruling to every
author still open *(chapter 21)*.
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

Claim-pass findings: the parent verifies each against the cited evidence
(a same-book quote is confirmed with the CNXML's tags stripped first — a
bare `grep -c` of a sentence that spans a `<term>` returns 0 and looks
like a misquote, *chapter 13*; an external citation is checked for being a
standard reference, Gray's 1918 or a primary paper with a DOI, not a
blog), then applies the accepted ones (Source note, `reconciliation-decisions.json`
entry, footer sentence, erratum), lists the rest under "Reviewed and *not*
errata". After correcting a value on a page, grep the page, the book's
Knowledge Checks, and sibling pages for the OLD value: a hint, filler, or
check item built on it is now wrong. A Source note and a footer clause state the
correction, never the erratum number — the footer-machinery lint rejects
"(erratum NNNN)" on a page, and a fixer brief that asks for it fails every
page at once *(chapter 3)*. A correction that changes a TERM (15.1's "mesenteric" → myenteric plexus)
cannot be keyed by an author-written item afterwards — `verify:source-keys`
accepts only a glossary term, a bolded term, or a phrase the module prints,
and the corrected word is none of these — so the author replaces that item
(and the parent re-solves the replacement alone) rather than re-keying it
*(chapter 15)*. Hand the accepted findings to each page's
author while it is still resumable (chapter 4), else to one Clerk fixer
(Sonnet) with the exact old and new sentences; a `kind: 'solution'` deviation for a
model-answer wording change is usually stale (the selfcheck compare
tolerates it) — add a DISCLOSED_DEVIATIONS line only when the keys gate
asks for one.

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
and solve it again — or, for a one-item edit after the solve, remap the
solver's answer to the new hash with a parent note, and for a form-only
edit write a one-item answers file. Adjacent answers shifted by one (a hash
slip) are realigned from the solver's `note`s, not re-solved. The packets
hold the auto-graded items only: a `selfcheck` model-answer correction
re-hashes nothing in the solve, and an option swap re-hashes one item —
diff a fresh `solve:emit` into a second directory against the first to
list exactly which hashes moved *(chapter 7: two of 63)*. Graded
Interactive Link `selfcheck`s read "unmatched" in `verify-source-keys`
on every chapter of this book; that is normal and no `solution`
deviation is owed for one. A graded one whose source key is a single
word or phrase ("Cortisol.", "Thyroid-stimulating hormone.") carries that
key in a one-sentence model answer that restates the question, so the
rubric can hold its two checkpoints; the keys gate once scored that
sentence "diverges" (7% of its words from the solution) and now reports
it `reworded` when a solution of four words or fewer is carried whole
(`SHORT_SOLUTION_WORDS`, with a test) — never a `solution` deviation
*(chapter 17)*. An Interactive Link Question with lettered
sub-asks (8.5's (a)(b)(c)) is ONE item on the page and in the footer but
several rows in `verify:source-coverage`, so the coverage floor rises by
more than the chapter's exercise count *(chapter 8: 44 for 42)*. After a
sweep, re-solve only what the carry rule in AGENTS.md ("The answer
ledger") does not carry — `npm run ledger:carry` applies it; snapshot
BEFORE the sweep's first edit, and one snapshot serves every carry plan in
the session.

## 4. Close-out, in this order

0. **Delegate the mechanical close-out to Clerks (Sonnet), launched
   together once the pages are stable**. Agents are addressed by their raw
   agent id for `SendMessage`, never by their description string — record
   each author's id when it is launched. (a) an alt-errata verifier, **on
   Opus** (Author kind: it reads images; see §1; kept although the checkers read every
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
   reports every footer that does not disclose what its erratum says —
   the math re-review runs merged (a) and (b) into ONE Opus errata
   compiler-verifier that drafts from every report AND verifies each draft
   against the image and the CNXML (95–180k a run); use that shape when the
   chapter's alt-vs-image claims are few, and grep its drafts for odd `$`
   counts before inserting; (c) a
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
   `documentation.test.mjs` fails a doc that restates one — the file is
   `node:test`, so the pins Clerk runs `node --test tools/source/openstax-source.test.mjs`,
   not vitest *(chapter 9)* — but the
   "committed provenance maps all N local sections" test in the same
   file hard-codes the corpus total and the book's count: raise both
   literals by the chapter's section count *(chapter 5)*. Update: the
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
   filed). The checker can report a 404 against the wrong URL on a page
   that carries two cdc.gov links: the page's author confirms each with
   its own full GET before un-linking *(chapter 7: the printed URL
   answered 200; the References link was the dead one)*. Then `npm run baseline:update` (since chapter 10 it moves the
   `--min-covered` coverage floor too; before that the floor was edited by
   hand); `npm test > $SP/test-final.log
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
8. Commit only when asked. A large push used to fail from the session with
   `LibreSSL … bad record mac`: the system libcurl's LibreSSL backend
   corrupts a pack over ~20 MB, and `http.sslBackend secure-transport` in
   the repo's local config fixes it (set October 20, 2026; the one-off form
   is `git -c http.sslBackend=secure-transport push`). Run `git ls-remote
   origin HEAD` once before a big push so credentials are cached — the
   first big POST of a session otherwise fails with "unable to rewind rpc
   post data" and hangs. If a push still fails, try once, then hand it to
   Derek.
