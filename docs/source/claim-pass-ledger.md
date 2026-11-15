# Prose claim pass ledger

The prose claim pass (`docs/subjects/life-sciences.md` → Verification →
"Prose claim pass") reads every section's prose as a scientist and checks
its claims against the rest of the book and then one citable reference. It
is the fourth reading on every new life-sciences section. This file is the
prose claim pass, one row per chapter: the Anatomy and Physiology run writes
a row at close-out (`docs/briefs/anatomy-physiology/run.md` §4 step 3) with
status, date, errata numbers, and any kept-as-printed calls.

**How to run a chapter.** One Sonnet checker per chapter, read-only, briefed
with `docs/briefs/<book>/claim-pass.md` (the rules are the playbook's). The parent
adjudicates every finding against the cited evidence before editing, then
handles each accepted finding like a corrected key: visible source note,
`data/openstax/reconciliation-decisions.json` entry (one per page, all
element ids on it), footer `Changes:` sentence, erratum in
`docs/openstax-errata.md`. Dismissed suspicions go in that file's
"Reviewed and *not* errata" list. A true distractor is replaced and listed
in `DISCLOSED_DEVIATIONS` (`tools/verify/verify-source-keys.mjs`), and the
`--min-confirmed` floor in `package.json` drops by one per disclosed item.
Any edited graded item changes its hash: `solve:emit` → answer →
`solve:compare --out` → `ledger:merge`. Finish with `npm test`.

**Rates from the September 6 runs** (plan by these): about one evidenced
source error per two sections; roughly half of a checker's "findings" are
textbook simplifications or priority disputes the parent should keep as
printed; a Sonnet checker takes 5–8 minutes per chapter of 3–6 sections.

**Biology 2e: sweep complete and closed.** All 47 chapters were read on September 6,
2026 in five Sonnet waves (chapters 1–10, 11–20, 21–30, 31–40, 41–47); the
accepted corrections are errata 382–457 under the five "Biology 2e prose
claim pass" headings in `docs/openstax-errata.md`, and the per-chapter rows
were retired from this table the same day because those headings are the
record. No Biology chapter is outstanding.

| Book | Chapter | Sections | Status | Errata |
|---|---|---|---|---|
| Anatomy and Physiology | 01-an-introduction-to-the-human-body | 7 | done Sep 22 2026 (in the authoring run) | 857–859 |
| Anatomy and Physiology | 02-the-chemical-level-of-organization | 5 | done Sep 22 2026 (in the authoring run) | 877 |
| Anatomy and Physiology | 03-the-cellular-level-of-organization | 6 | done Oct 13 2026 (in the authoring run) | 1808–1815 |
| Anatomy and Physiology | 04-the-tissue-level-of-organization | 6 | done Oct 13 2026 (in the authoring run) | 1843, 1844, 1853, 1859, 1860, 1863, 1867, 1872, 1875, 1884, 1886 |
| Anatomy and Physiology | 05-the-integumentary-system | 4 | done Oct 14 2026 (in the authoring run) | 1901, 1906, 1908, 1914, 1917, 1918, 1923, 1927, 1928 |
| Anatomy and Physiology | 06-bone-tissue-and-the-skeletal-system | 7 | done Oct 15 2026 (in the authoring run) | 1934–1940 |
| Anatomy and Physiology | 07-axial-skeleton | 5 | done Oct 16 2026 (in the authoring run) | 1958–1969 |
| Anatomy and Physiology | 08-the-appendicular-skeleton | 5 | done Oct 16 2026 (in the authoring run) | 1999, 2003, 2009, 2013, 2014, 2015 |
| Anatomy and Physiology | 09-joints | 7 | done Oct 16 2026 (in the authoring run) | 2017–2023 |
| Anatomy and Physiology | 10-muscle-tissue | 9 | done Oct 18 2026 (in the authoring run) | 2054–2064 |
| Anatomy and Physiology | 11-the-muscular-system | 6 | done Oct 18 2026 (in the authoring run) | 2089–2129 |
| Anatomy and Physiology | 12-the-nervous-system-and-nervous-tissue | 5 | done Oct 20 2026 (in the authoring run) | 2173–2178 |
| Anatomy and Physiology | 13-anatomy-of-the-nervous-system | 4 | done Oct 21 2026 (in the authoring run) | 2207, 2215–2222, 2230–2235, 2240–2249 |
| Anatomy and Physiology | 14-the-somatic-nervous-system | 3 | done Oct 21 2026 (in the authoring run) | 2252–2265, 2267, 2276, 2281–2282 |
| Anatomy and Physiology | 15-the-autonomic-nervous-system | 4 | done Oct 21 2026 (in the authoring run) | 2287–2290, 2296–2297, 2304–2305, 2309–2310 |
| Anatomy and Physiology | 16-the-neurological-exam | 5 | done Oct 24 2026 (in the authoring run) | 2321–2323, 2329–2331, 2336–2337 |
| Anatomy and Physiology | 17-the-endocrine-system | 11 | done Oct 24 2026 (in the authoring run) | 2348–2349, 2354, 2367–2368, 2373–2374, 2378 |
| Anatomy and Physiology | 18-the-cardiovascular-system-blood | 6 | done Oct 25 2026 (in the authoring run) | 2386, 2390, 2394–2399, 2408–2409, 2411–2412 |
| Anatomy and Physiology | 19-the-cardiovascular-system-the-heart | 5 | done Oct 25 2026 (in the authoring run) | 2428–2434, 2443–2446, 2458, 2460–2462, 2464–2466, 2477 |
| Anatomy and Physiology | 20-the-cardiovascular-system-blood-vessels-and-circulation | 6 | done Oct 26 2026 (in the authoring run) | 2480, 2488–2492, 2500, 2502–2512 |
| Anatomy and Physiology | 21-the-lymphatic-and-immune-system | 7 | done Oct 26 2026 (in the authoring run) | 2532, 2546, 2547, 2552, 2557–2559, 2565–2567 |
| Anatomy and Physiology | 22-the-respiratory-system | 7 | done Oct 27 2026 (in the authoring run); 10 findings (22.1 five, 22.3 one, 22.4 one, 22.5 one, 22.7 two; 22.2 and 22.6 none), 9 applied, 1 kept as printed (22.7 F10) | 2585–2589, 2599, 2607, 2609, 2620–2621 |
| Anatomy and Physiology | 23-the-digestive-system | 7 | done Oct 28 2026 (in the authoring run); 20 findings (23.1 three, 23.2 one, 23.3 four, 23.4 three, 23.5 four, 23.6 three, 23.7 two; F18–F20 ruled from the verifier's claim-type items), all 20 applied, 1 options ruling (23.3 hiatus Review Question) | 2632–2652 |
| Anatomy and Physiology | 24-metabolism-and-nutrition | 7 | done Oct 31 2026 (in the authoring run) | 2677–2680, 2683–2689, 2695, 2696, 2704, 2717, 2721–2727 (23 claim corrections + 2 stem claims) |
| Anatomy and Physiology | 25-the-urinary-system | 10 | done Oct 31 2026 (in the authoring run) | 2738–2754 (17 claim corrections, all accepted) |
| Anatomy and Physiology | 26-fluid-electrolyte-and-acid-base-balance | 5 | done Nov 1 2026 (in the authoring run) | 2794–2804 |
| Anatomy and Physiology | 27-the-reproductive-system | 3 | done Nov 2 2026 (in the authoring run) | 2832–2836 |
| Anatomy and Physiology | 28-development-and-inheritance | 7 | done Nov 2 2026 (in the authoring run); 13 findings (28.1 one, 28.2 four, 28.3 two, 28.4 four, 28.5 none, 28.6 two, 28.7 none) | 2849–2862 |
| Chemistry | 01-essential-ideas | 6 | done Nov 9 2026 (in the authoring run, the book's pilot); 19 findings, 8 corrected on the pages, 11 reviewed and not errata | 2883, 2887, 2894, 2895, 2902–2905, 2907, 2909 |
| Chemistry | 02-atoms-molecules-and-ions | 7 of 7 | done Nov 10 2026 (in the three authoring runs). Sections 2.1–2.4: 11 findings — 5 corrected on the pages, 1 kept with a Source note, 1 kept as printed and logged, 4 reviewed and not errata. Sections 2.5–2.6: 11 findings — 5 corrected on the pages, 3 kept with a Source note, 3 reviewed and not errata. Section 2.7: 4 findings — 2 corrected on the page, 2 kept with a Source note (one of whose citations the blind solver corrected); the worked example's “gallium(III) nitride” kept with a Source note on the checker's and the consistency reader's finding | 2924, 2925, 2931–2933, 2939, 2940; 2943, 2945, 2948, 2951, 2952, 2956, 2959, 2961; 2968, 2970, 2972, 2973, 2976 |
| Chemistry | 03-composition-of-substances-and-solutions | 4 | done Nov 11 2026 (in the authoring run). 13 findings — 6 corrected on the pages (the mole and Avogadro’s number in 3.1’s Key terms, against the section’s own body; the saccharin atom count; “bacterial” fermentation of grain; the nicotine ratio’s 8.624; 0.284 mol H; “g HCl/g solution”), 2 kept with a Source note (argon in a liter of air; the potassium “estimated average requirement” — its quotation of the 2019 review was not confirmed word for word by the fix checker and is paraphrased), 3 kept as printed and logged (81.13 and 180.159, inside the chapter’s 0.05 percent band; the 24.81-g sample whose elements sum to 24.82 g), 2 reviewed and not errata (the brain caption; the brewery caption); five further suspicions from memory, with no source opened, not acted on | 2979, 2980, 2981, 2983, 2989, 2991, 2992, 2993, 2995, 3000 |
| Chemistry | 04-stoichiometry-of-chemical-reactions | 5 | done Nov 12 2026 (in the authoring run). 12 findings — 4 corrected on the pages (the Na₂CO₃ + H₂S answer, against Appendix H’s ionization constants, now a self-check with the corrected equation; the oxalic acid Check Your Learning’s 0.2648 M, which the stem’s data give as 0.2647; ibuprofen “first marketed in the early 1960s”; the glossary’s strong base that “reacts completely”, against the section’s own body), 3 kept with a Source note (“normal serum” at a tenth of the normal chloride level; harmful bacteria that “require a basic environment”; the Space Launch System “being developed”, on the landing and in 4.2), 1 credit corrected (“National” for “Natural” Resources Conservation Service), 1 rejected (the chloride 23.76%, which this book’s table returns), 3 kept as printed (Great Lakes Chemical’s present tense; K[Ag(CN)₂] called an ore; the fluoride solubility row), with the pickling box’s “starches” suspected from memory and not acted on; every outside quotation was opened by the orchestrator | 3002, 3007, 3008, 3009, 3010, 3021, 3027, 3028 |
| Chemistry | 05-thermochemistry | 3 | done Nov 14 2026 (in the authoring run). 14 findings — 11 corrected on the pages (natural gas missing from the landing’s list of fuels; three specific heats in 5.1’s table against the NIST WebBook; the metal example’s 4.18; the calorimeter citation’s volume; the isooctane row of 5.3’s combustion table; acetylene’s enthalpy of formation, against Appendix G; “1 atm” for a gas’s standard state, against the section’s own definition; 218 lbs; the algae box’s Air Force claim, against the article it cites; and two self-check model answers whose numbers the question’s data do not give), 2 kept with a Source note (Ivanpah’s record, mirrors, and acreage; the Hess’s-law diagram’s step labels), 1 a key the key readings settled (TNT) | 3044–3046, 3049, 3054, 3056, 3058, 3060, 3061, 3070–3075 |
| Chemistry | 06-electronic-structure-and-periodic-properties-of-elements | 5 | done Nov 15 2026 (in the authoring run; a second reader opened a source for each finding the first made from memory). 19 findings — 9 corrected on the pages (Hodgkin’s death year; the AM band’s upper limit, against 47 CFR 73.14; the Summary’s standing-wave sentence, against the section’s own body; de Broglie’s thesis year; Davisson and Germer’s electrons “through” a crystal; Born’s interpretation “a few years later”; the hydrogen doublets dated to the 1920s; the direction of the electron’s magnetic moment and a field splitting called fine structure, against the CODATA g factor; copper, silver, and gold left out of the transition elements, against the book’s own Sections 2.5 and 19.1), 1 a one-word correction (Bohr “orbitals”), 7 kept with a Source note (the interference caption’s blue light; insulin’s “mass production”; four cells of the full configuration table, eleven of the electron-affinity table, four of the first-ionization-energy table, and four of the successive-ionization-energy table, against NIST; fluorine’s 128 pm and 64 pm against the book’s own bond-length table, and the radii graph’s metallic radii), 2 kept as printed with no source found against them (the slit spacing; one f-orbital label) | 3087–3091, 3105, 3110–3114, 3118, 3119, 3129–3135 |

The Microbiology rows (26 chapters) are in `docs/history/microbiology.md`
under "Prose claim pass rows". Knowledge-check pages (`knowledge-check-*.md`) carry no source prose and are
outside this pass; their items are covered by the KC audit.
