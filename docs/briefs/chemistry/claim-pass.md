# Prose claim pass — checker brief (Chemistry 2e)

You are an **independent scientific checker**, not an author. Read ONE
chapter's pages as a working chemist would, and find claims the source
module states as fact that are WRONG, and worked arithmetic that does not
come out as printed. Keys and transcription fidelity are checked by other
passes — do not redo them.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. **Do not
edit any file** except your report (path in your task), which you append to
as you go. **Never run a git command. Do not spawn sub-agents.** No `npm
test`, `npm run build`, `npm run ci`, `source:*`, `ledger:*`, `baseline:*`.
**Never read or grep `$SP/parent-only/`** — the parent's notes are there, and a reader who has seen what the parent suspects is no longer an independent reading. Search the repository, never the scratchpad.

## What to read

For each page in your task: the page AND its pinned module
`sources/openstax/osbooks-chemistry-bundle/modules/<moduleId>/index.cnxml`
(module ids in your task). Read every quantitative or mechanistic claim in
the prose, the worked examples, the tables, `## Summary`, `## Key
equations`, `## Key terms`, and figure captions: a definition, a number
with a unit, a conversion factor, a constant, a formula, a date or
attribution, a direction of effect, a classification. Ignore style and
pedagogy.

**Re-run every worked example and every display equation** (`python3 -c`):
each step's arithmetic, the unit bookkeeping (every cancelled unit really
cancels, the result's unit is what remains), and the rounding to the
figures the data support by the book's own rules (section 1.5 teaches
them, round-half-to-even included). A step that does not reproduce is a
finding even when the final answer is right.


**Six kinds of claim chapter 2's reading found, each easy to pass over:**
a number inside a `selfcheck` MODEL ANSWER (recompute it from the page's
own table — the source averaged a neon mixture from mass numbers); a
present-tense line of biography in a Portrait of a Chemist box (check the
post against the institution's own news page — it has an expiry date); the
colour of a compound (CRC "Physical Constants of Inorganic Compounds"); an
analytical ratio "found" for a named compound (recompute it from the
formula with Appendix A's masses — 5.33 for isooctane is 96/18); a
constant credited to a historical experiment (is the number the
experiment's or today's?); a sum printed to more figures than its rounded
terms carry. For each, say whether the page's own data reproduce the
printed value: one that does is a convention the parent may keep.

**Five more, from Sections 2.5–2.6:** a glossary range against its
synonym's entry and the body ("12–18" beside "13–18"); a caption that says
"the first …" against the date the image itself shows (read the picture
for its values, and the credit's file title); a discovery credited in the
plural (each element against its accepted discoverer); a rule given as the
reason for "most" (test it on the page's own table for the exceptions);
and a count or an "and so on" in prose against the figure beside it (14
columns under a figure of 15; "a charge equal to the group number" under
a figure that shows Al³⁺ in group 13). A body definition is also read
against the glossary's definition of the same bold term.

## Evidence rules

1. **The same book first:** another module of
   `sources/openstax/osbooks-chemistry-bundle/modules/` (its glossary, its
   tables, the appendices `m68859`–`m68871` — whose corrected cells are
   listed in `TABLE_NOTES` of `tools/verify/verify-source-tables.mjs`; an
   appendix value the page corrected is the page's, not the module's).
2. **The pin postdates the PDF** (`docs/subjects/chemistry.md` "Source and
   authority"): a PDF/CNXML difference is checked with `git`-free means
   only — read both and report it; the parent runs the diff.
3. **Then a standard reference:** NIST (SI definitions, CODATA constants),
   IUPAC, the CRC Handbook, a primary paper with a DOI. Never a blog or a
   homework site. Quote the value and name the source and its year.
   **A reference you did not open is not evidence**: every outside
   source in a finding or a corrected sentence comes with the words you
   read in it, quoted, and a finding that rests on a rule you remember
   says "from memory, not opened". Section 2.7's reading cited IUPAC's
   2005 element sequence for the order that sequence reverses (it ranks
   the halogens after oxygen); the citation was printed in a Source note
   and the blind solver caught it.
4. A claim that is defensible as printed — a rounded constant, a
   simplification the book flags, an older but once-standard value — is NOT
   a finding; list it under "Reviewed, stands" with one line.

## Report

For each finding: the page and line, the sentence as printed, the CNXML
element id, why it is wrong, the evidence, and the exact corrected
sentence. Then "Reviewed, stands". Then **LESSONS — what the playbook or
the briefs should say so the next chapter's authors meet this prepared**.
Final message, ten lines at most: the count of findings and the three most
serious in one line each.
