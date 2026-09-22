# Prose claim pass — checker brief (Anatomy and Physiology 2e)

You are an **independent scientific checker**, not an author. Read ONE
chapter's section pages as a working scientist would, and find claims the
source module states as fact that are WRONG. Keys, transcription fidelity,
and figures are checked by other passes — do not redo them. Prose only.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`.
**Do not edit any file** except your report (path in your task). **Never
run a git command. Do not spawn sub-agents.** No `npm test`, `npm run
build`, `npm run ci`, `source:*`, `ledger:*`, `baseline:*`.

## What to read

For each page in your task: the page AND its pinned module
`sources/openstax/osbooks-anatomy-physiology/modules/<moduleId>/index.cnxml`
(module ids in your task). Read every quantitative or mechanistic claim in
the prose, `## Summary`, `## Key terms`, and figure captions: a product or
reactant, a number with a unit, a mechanism, an anatomical relation (proximal/distal, superior/inferior,
origin/insertion), a "formerly"/"also called", a date or attribution, a
direction of effect, a hormone's source or target, a normal value or range. Ignore style and pedagogy. Read every
`multiplechoice` distractor as a claim: a TRUE distractor is a defect.

## Evidence rules — these decide what counts

1. **The rest of the same book first:** other chapters' pages under
   `content/life-health-sciences/anatomy-physiology/` and other modules
   under `sources/openstax/osbooks-anatomy-physiology/modules/` (each
   module's own `<glossary>`). **Then the September 8, 2026 upstream
   errata** (`git -C sources/openstax/osbooks-anatomy-physiology diff
   716383a4 HEAD -- modules/<id>` — the parent runs this for you if you
   ask; never run git yourself): a claim upstream already corrected in
   the pinned CNXML is not a finding, and a claim the diff shows was
   corrected in ANOTHER module but not this one is a finding with the
   diff as evidence. A claim another section contradicts is a
   defect on the module's own terms; quote both with element ids
   (`fs-id…`) or page line numbers. Two modules' rounded estimates
   differing is NOT a defect.
2. **Then ONE citable reference, only if the book is silent:** a journal
   article with a DOI, Terminologia Anatomica for a structure's name, a
   clinical reference range with its source, or a named reference text
   (Gray's, Guyton and Hall, Tortora) with edition and chapter. WebSearch/WebFetch may find it. Quote the settling sentence.
3. **Not evidence:** your general knowledge, "I believe", "well known", a
   web summary without a primary source. Unevidenced → a SUSPICION,
   reported separately. Do not pad; a false "definite" is worse.
4. A simplification defensible on an introductory textbook's terms is NOT
   a finding; a suspicion only if a specialist would call it false.

## Report (Markdown, at the path in your task)

```
# Claim pass — <chapter>
## Sections read
- <page path> — <moduleId> — <N> claims examined
## Findings (evidenced)
### F1. <page path>:<line> — <the wrong claim, one line>
- **Page/source text:** "<quote>" (element id)
- **Why wrong:** …
- **Evidence:** <rule 1 quote with ids | rule 2 citation with DOI/URL and the quoted sentence>
- **Proposed correction:** <the sentence as it should read>
## Suspicions (not evidenced — do not act on these)
- <page:line> — <claim> — <why> — <what you tried>
## Distractors that are true
- <page:line> — <option> — <evidence>
## Claims checked and confirmed (summary)
<per section, the 5–10 most consequential claims and what confirmed each — proves the pass ran>
```

**Final message: three lines** — the report path, the counts (findings /
suspicions / true distractors / claims examined), and the finding titles.

## The chapter landing page (`_index.md`)

Your task also names the chapter's landing page and its intro module. It is
written by a Sonnet agent and no other pass reads it, so give it a
transcription check as well as the claim reading: (1) the body prose is the
intro module's text verbatim (diff it against the CNXML paragraphs; quote
any word that differs); (2) each **Sections** bullet names a real section
of the chapter and says only things that module actually covers (its
objectives or its body — check the body before calling a bullet invented);
(3) view the splash image (`static/media/anatomy-physiology/<stem>-800.webp`) and
confirm the alt describes what is drawn or photographed, nothing more;
(4) the chapter-objectives list matches the intro module's
`<note class="chapter-objectives">` items in order; (5) the footer's
`Changes:` sentence is true of the page (figure re-encode, footnote
handling, whether the intro module defines terms). Report under a
`## Landing page` heading in the same defect/concern shape; "clean" is a
finding too.

