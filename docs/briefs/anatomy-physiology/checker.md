# OpenStax Anatomy and Physiology 2e — independent checker brief

You are an **independent checker**, not an author. Catch wrong keys,
unfaithful transcription, leaky items, dishonest conversions, and
inaccessible figures on ONE already-written section page named in your task
prompt. You did not write it and you must not trust it. A false "all clean"
is worse than a false alarm. `SP` is the directory this brief is in.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`.
**Do not edit any file** except your report `$SP/check-N.M.md`. **Never run
a git command. Do not spawn sub-agents.** No `npm test`, `npm run build`,
`npm run ci`, `ledger:merge`, `baseline:update`, `source:*`. **Do not read
the author's ledger, results, or report** (`$SP/ledger-*`). You may read
`$SP/keys-N.M.txt` and `$SP/terms-N.M.md` only AFTER forming your own
answer to an item, as a cross-check (the extractor drops cross-references —
read the raw CNXML).

Read first: `$SP/run-facts.md` (this run's decisions — a page that follows
a parent decision is not defective for it), then
`docs/subjects/anatomy-physiology.md` and `docs/subjects/life-sciences.md` —
the rules you check against; anatomy-physiology wins where they differ; the
life-sciences sections "Unkeyed source questions" and "What the first
retrofit's checkers caught" and the anatomy-physiology "Verification" list
are the defect classes you hunt.

## 1. Enumerate

Every `multiplechoice`, `textin`, `selfcheck`, `sortbins` on the page, body
and Practice, in order, with question, key/accept/model answer, and hint.
Counts by kind; body items (graded vs selfcheck) separately from Practice.

Then enumerate the module's end-matter exercises from the raw CNXML —
Review Questions, Critical Thinking Questions, Interactive Link Questions —
and tick each one off against the page, by hand. **A missing exercise is
the defect this pass exists to catch**: no lint fires on it. A Review or
Critical Thinking Question missing is a defect, whatever the footer says.
An Interactive Link Question stands either as a graded `selfcheck` after
its callout (only when the module text fixes the answer — quote the
sentence yourself and judge it) or as a prompt inside the callout with the
footer counting it; absent from both is a defect, and graded without a
fixing sentence is a defect.

## 2. Answer every graded item yourself, key covered

- **multiplechoice:** from the module's own prose pick the supported option
  and check no other is also supportable (true by the module, by another
  section of this book, or by a citable reference = double-keyed, report
  with evidence). Then compare with the page's key AND the raw CNXML
  `<solution>` letter. A two-option source item is still a source item:
  exactly the source's two options, source order.
- **textin:** name the answer, list every spelling a correct learner might
  type (singular/irregular plural, British, a module abbreviation, a
  Latin/English pair, a hyphen variant), and run each through the grader:
  `node -e 'import("./assets/js/lib/text/check-text.mjs").then(m=>console.log(m.checkText("<variant>","<answer>",{accept:"<accept>"})))'`
  (pass `{}` as the third argument when the item has no accept list).
  Report every wrongly rejected variant and every wrong answer accepted.
  **Grep the module BODY (not the glossary, not the solutions) for every
  `textin` key** — a key the body never prints needs `multiplechoice`.
- **sortbins:** solve the mapping; report any item that reads as well
  under another bin, any item carrying a bin word, any bin label the
  module never prints.
- **A converted item** (a graded Interactive Link Question or a graded
  feature-box question): find the ONE module sentence, table, or figure
  that fixes it. Two sentences, an inference, a word the module never
  prints, the linked video, or outside knowledge → dishonest → defect
  (revert to a prompt, or name the fixing sentence the author missed). Also
  hunt the reverse: an Interactive Link Question left as a prompt that ONE
  sentence fixes. Stem = source question verbatim plus at most a referent.
  **Composite keys** are the classic dishonest form: quote the ONE sentence
  and diff the key against it word by word — any word the key carries from
  a second sentence fails.
- **A figure-keyed or media-bearing item:** open the image and answer
  before looking at the page's key; confirm the ARTWORK draws the fact
  (an alt-only fact is not honest); confirm alt, caption, and `longdesc`
  do not answer the paired item.
- **A filler item:** find its ONE sentence; confirm it adds no claim and
  re-asks nothing on the page.
- **A Critical Thinking `selfcheck`:** each `===CHECKS===` clause against
  the source `<solution>` and the module — a clause from another chapter or
  general knowledge is a defect even when true.

## 3. Leaks

- A `textin` answer or accept member in its own question or hint.
- **Every hint, stem, and option list against every key on the page,
  forwards AND backwards, across groups** — grep for the literal word when
  a group's central vocabulary word is a `textin` key; a distractor directly
  above a `textin` that is its key; a filler stem printing a key two groups
  away; a Practice hint leaking a body item's key.
- An MC stem containing the key's distinguishing word; a second defensible
  distractor. **A hint that quotes the correct option's own distinguishing
  phrase** is the same leak wearing the hint field instead of the stem.
- The figure beside an item answering it in alt, caption, or `longdesc` —
  **anatomy figures label everything**; a labelling item next to a figure
  whose `longdesc` lists the labels is leaked.
- **Reworded duplicates:** a Practice item re-asking a body item or another
  Practice item in other words (`distinctItems` is exact-match). Read the
  page's questions side by side.

## 4. Source fidelity, against the raw CNXML

- Objectives in source order and wording (from `<md:abstract>`).
- **Diff the page's prose against the CNXML word by word** (strip both to
  plain text; a ten-minute script) and list every departure; each must be
  named in the footer or it is a defect. A departure that changes a CLAIM
  without a Source note is a defect even if right — claim corrections are
  the parent's. **If the run facts list this module among the September 8,
  2026 errata modules, the CNXML — not the PDF — is the reference**; a
  PDF/page disagreement the upstream diff explains is not a finding.
- **Key terms = the module `<glossary>`**: one bullet per `<definition>`,
  glossary order, the meaning in the glossary's wording; a body `<term>`
  with no glossary entry is bold in the body and NOT a bullet; a glossary
  term the body never prints is still a bullet. Every class-less body term
  bolded at its defining occurrence (a `**bold**` count is a grep, not an
  impression). A module with no `<glossary>` has no `## Key terms` heading
  and says so in the footer.
- Every keyed exercise: stem verbatim, options in source order and count,
  key = the source `<solution>`. An edited source option is a defect.
  Straight quotes and apostrophes for the source's curly ones are the
  corpus convention, not a departure.
- Feature boxes complete, headed with the printed box name and the note's
  title; an Interactive Link callout keeps its URL with the source's
  sentence boundaries and its closing question; a box's closing question
  is unanswered inside the callout.
- `## References` present iff the module has a `section.references`, one
  bullet per source paragraph, text as printed, URLs linked; placed
  directly after `## Summary`.
- Cross-section links resolve (sibling pages may still be landing — a path
  in the run facts' route list is fine); links to unauthored modules are
  plain text.
- Tables with a `summary` transcribed from the cells and feeding the
  `sortbins` the run facts decided; the notation the run facts fix.
- `## Summary` complete and verbatim, one bullet per source paragraph.

## 5. Figures

For every `mediafigure`: open the vendored image AND the PDF page
(`$SP/pdf/chNN/`, ranges in the run facts; for a September-8 swapped
figure the PDF shows the old image — the vendored file is the reference).
**Describe the image before reading the alt.** Write down, in your report,
what is drawn — panels, labels, colours, arrows and their direction,
counts, orientation — and only then read the alt, caption, and `longdesc`
and compare claim by claim. An alt read first anchors you to its claims:
the Biology and Microbiology completion passes found 1 defect in 8–10
figures that authors and checkers reading alt-first had passed.

- Alt describes what is drawn — counts, colours, orientation, direction
  words, the labeled structures where the caption does not name them;
  nothing invented, nothing inherited from a source alt the image
  contradicts (each source-alt error is an erratum candidate); says what
  the figure teaches.
- Alt ≤600 characters, plain text; `longdesc` plain text, no cap.
- A `longdesc` wherever a drawn, multi-panel, or label-dense figure carries
  labels, steps, or counts the caption does not name — in the artwork's
  order; a shared panel is not dropped.
- **`kind` present and right for the image** — the manifest guesses
  `photo` for every JPEG and most of this book's JPEGs are drawings;
  report every `kind` the picture contradicts.
- Caption the source's, credit verbatim. A floated figure at its document
  position or at its first reference with the footer saying so.

## 6. Footer, frontmatter, lint

Every `Changes:` claim true of the page (counts of graded items and
`selfcheck`s, Interactive Link Questions graded vs prompt, fillers, omitted
items, one-word corrections, reorderings; a correction is named as a
correction with no clause about where it is logged); **re-derive every
count the footer states rather than reading it**; a footer describes the
shipped page only — a clause about run machinery ("reported to the
parent") is a defect; license CC BY-NC-SA 4.0; the ten named senior
authors; the deep link; `title`, `description`, `source_section`, `weight`;
`npm run verify-section -- <page>` tail.

## 7. Report

Write `$SP/check-N.M.md`: counts; **DEFECTS** numbered, each with evidence
(a CNXML quote, a grader output, what you saw in the image) and the exact
fix; **CONCERNS** numbered; source disagreements (page vs CNXML vs PDF vs
image) with a verdict and whether each is an erratum candidate; one line on
what you checked and found clean; anything the playbooks, the briefs, the
run facts, or the lints got wrong or made hard.

**Your final message is five lines:** the report path, the counts line,
the number of defects and concerns, the one-line defect list (titles only),
and the `verify-section` tail line. Do not repeat the report.
