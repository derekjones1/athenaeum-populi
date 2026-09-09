# Prose claim pass — checker brief (Microbiology)

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
`sources/openstax/osbooks-microbiology/modules/<moduleId>/index.cnxml`
(module ids in your task). Read every quantitative or mechanistic claim in
the prose, `## Summary`, `## Key terms`, and figure captions: a product or
reactant, a number with a unit, a mechanism, a taxonomic placement or rank,
a "formerly"/"also called", a date or attribution, a direction of effect, a
life-cycle stage or host. Ignore style and pedagogy. Read every
`multiplechoice` distractor as a claim: a TRUE distractor is a defect.

## Evidence rules — these decide what counts

1. **The rest of the same book first:** other chapters' pages under
   `content/life-health-sciences/microbiology/` and other modules under
   `sources/openstax/osbooks-microbiology/modules/` (Glossary m58950,
   taxonomy appendix m58949). A claim another section contradicts is a
   defect on the module's own terms; quote both with element ids
   (`fs-id…`) or page line numbers. Two modules' rounded estimates
   differing is NOT a defect.
2. **Then ONE citable reference, only if the book is silent:** a journal
   article with a DOI, LPSN (bacterial names), ICTV (viruses), Index
   Fungorum/MycoBank (fungi), or a named reference text with edition and
   chapter. WebSearch/WebFetch may find it. Quote the settling sentence.
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
