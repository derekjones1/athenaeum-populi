# Prose claim pass ledger

The prose claim pass (`docs/subjects/life-sciences.md` → Verification →
"Prose claim pass") reads every section's prose as a scientist and checks
its claims against the rest of the book and then one citable reference. It
is the fourth reading on every new life-sciences section, and this file
tracks the RETROACTIVE sweep over sections authored before the rule existed
(September 6, 2026). Update a row when a chapter's pass lands: status, date,
errata numbers, and any kept-as-printed calls.

**How to run a chapter.** One Sonnet checker per chapter, read-only, briefed
with the checker brief (the parent's memory holds it verbatim under the
microbiology brief, §8; the rules are the playbook's). The parent
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

**Biology 2e: sweep complete.** All 47 chapters were read on September 6,
2026 in five Sonnet waves (chapters 1–10, 11–20, 21–30, 31–40, 41–47); the
accepted corrections are errata 382–457 under the five "Biology 2e prose
claim pass" headings in `docs/openstax-errata.md`, and the per-chapter rows
were retired from this table the same day because those headings are the
record. No Biology chapter is outstanding.

| Book | Chapter | Sections | Status | Errata |
|---|---|---|---|---|
| Microbiology | 01-an-invisible-world | 3 | done Sep 6 2026 | 377–378; Koch kept |
| Microbiology | 02-how-we-see-the-invisible-world | 4 | done Sep 6 2026 | 374 |
| Microbiology | 03-the-cell | 4 | done Sep 6 2026 | 379–381; pentaglycine kept |
| Microbiology | 04-prokaryotic-diversity | 6 | done Sep 6 2026 (author's own pass + review) | 367–368, 373 |
| Microbiology | 05-the-eukaryotes-of-microbiology | 5 | done Sep 7 2026 (in the authoring run) | 467–468, 470–471; Volvox and the supergroup scheme kept |
| Microbiology | 06-acellular-pathogens | 4 | done Sep 7 2026 (in the authoring run) | 483, 487–488; ICTV year and the Duncan contact counts kept |
| Microbiology | 07-microbial-biochemistry | 5 | done Sep 7 2026 (in the authoring run) | none; polypeptide "up to ~50" vs Glossary "20 to 50" and the CF phenylalanine-deletion simplification kept |
| Microbiology | 09-microbial-growth | 6 | done Sep 8 2026 (in the authoring run) | 532–533; the singlet-oxygen radical notation and the 20% listeriosis mortality figure kept |
| Microbiology | 10-biochemistry-of-the-genome | 4 | done Sep 8 2026 (in the authoring run) | 545–546 (pX02 capsule; viral genome-size floor vs the module's own chart), 537 (Griffith citation pages); nothing kept |
| Microbiology | 11-mechanisms-of-microbial-genetics | 7 | done Sep 8 2026 (in the authoring run) | 550–551 (pol ε/δ strands; topoisomerase IV break type); nothing kept |
| Microbiology | 12-modern-applications-of-microbial-genetics | 4 | done Sep 8 2026 (in the authoring run) | 556–557 (the *Xenopus* cloning year; Sanger dideoxy year); the RFLP "definitively determine" forensic sentence kept as an introductory simplification |
| Microbiology | 08-microbial-metabolism | 7 | done Sep 7 2026 (in the authoring run) | 512, 518; lithotroph/organotroph Glossary equivalences, the 5–10% meningococcal fatality figure, the anaerobic-respiration ATP ranges, and the *Nitrosomonas* attribution kept |
| Microbiology | 13-control-of-microbial-growth | 4 | done Sep 12 2026 (in the authoring run) | none; the germicidal-lamp "260 nm" wavelength kept (the module teaches the DNA absorption maximum, not a lamp's emission line) |
| Microbiology | 14-antimicrobial-drugs | 7 | done Sep 12 2026 (in the authoring run) | 587 (Albert Schatz), 595 (oxazolidinone translocation), 597–598 (artemisinin "antifungal"; chloroquine and G6PD deficiency), 602 (*Streptomyces clavuligerus*), 607 (teixobactin from Maine, not Mount Ararat); the PCP 10%-of-HIV-deaths figure, the superseded *S. avermectinius* name, and ivermectin "nontoxic to humans" kept |
| Microbiology | 15-microbial-mechanisms-of-pathogenicity | 4 | done Sep 12 2026 (in the authoring run) | 608–610 |
| Microbiology | 16-disease-and-epidemiology | 4 | done Sep 12 2026 (in the authoring run) | none |
| Microbiology | 17-innate-nonspecific-host-defenses | 5 | done Sep 13 2026 (in the authoring run) | 622–623; "laudable pus" kept |
| Microbiology | 18-adaptive-specific-host-defenses | 5 | done Sep 13 2026 (in the authoring run) | 624–626 |
| Microbiology | 19-diseases-of-the-immune-system | 5 | done Sep 13 2026 (in the authoring run) | none from the claim pass; erratum 659 — §19.2's Addison-disease "lymphocytosis" gloss corrected from "decreased levels of white blood cells" to "increased levels of lymphocytes" (found by the author, adjudicated by the parent, not the claim pass) |
| Microbiology | 20-laboratory-analysis-of-the-immune-response | 5 | done Sep 13 2026 (in the authoring run) | erratum 663 — §20.3's Widal-test sentence corrected from the source's "Salmonella enterica subspecies typhi" to "serovar Typhi" (claim pass finding, adjudicated by the parent) |
| Microbiology | 21-skin-and-eye-infections | 5 | done Sep 14 2026 (in the authoring run) | none; the necrotizing-fasciitis glossary "exotoxin A" finding adjudicated not an error |
| Microbiology | 22-respiratory-system-infections | 4 | done Sep 14 2026 (in the authoring run) | 678–679 — Q fever's "rickettsia" classification and the MERS 2013→2012 date, both claim pass findings adjudicated by the parent |
| Microbiology | 23-urogenital-system-infections | 6 | done Sep 14 2026 (in the authoring run), report `claims-ch23.md` | 720 (23.4 trigeminal ganglion), 721 (23.2 IgA protease/H2O2), both claim pass findings adjudicated by the parent |
| Microbiology | 24-digestive-system-infections | 6 | done Sep 14 2026 (in the authoring run) | 735–754 (743 the accepted Treponema vincentii spelling; no claim corrections); Typhoid Mary case count reviewed and not errata |
| Microbiology | 25-circulatory-and-lymphatic-system-infections | 4 | done Sep 14 2026 (in the authoring run) | errata 755–775; three claim corrections accepted this run: 25.2's rat-bite fever causative genus (766, and 767 for the source exercise option), 25.2's tick body regions (765), and 25.3's HTLV/HIV conflation (768), all adjudicated by the parent; two suspicions reviewed and not errata |
| Microbiology | 26-nervous-system-infections | 4 + landing | done Sep 14 2026 (in the authoring run) | 4 findings: 3 claim corrections accepted this run — 26.1's arachnoid mater/CSF Source note, 26.2's neonatal meningitis 3-months Source note, and 26.2's Listeria 45 °C Source note — all adjudicated by the parent; 1 suspicion reviewed and not an erratum: 26.4's neurocysticercosis source key D stands |
| Anatomy and Physiology | 01-an-introduction-to-the-human-body/01-overview-of-anatomy-and-physiology (m45983) | 1 | done Sep 22 2026 (in the authoring run) | none |
| Anatomy and Physiology | 01-an-introduction-to-the-human-body/02-structural-organization-of-the-human-body (m45985) | 1 | done Sep 22 2026 (in the authoring run) | none |
| Anatomy and Physiology | 01-an-introduction-to-the-human-body/03-functions-of-human-life (m45986) | 1 | done Sep 22 2026 (in the authoring run) | none |
| Anatomy and Physiology | 01-an-introduction-to-the-human-body/04-requirements-for-human-life (m45988) | 1 | done Sep 22 2026 (in the authoring run) | 857 |
| Anatomy and Physiology | 01-an-introduction-to-the-human-body/05-homeostasis (m45989) | 1 | done Sep 22 2026 (in the authoring run) | 858 |
| Anatomy and Physiology | 01-an-introduction-to-the-human-body/06-anatomical-terminology (m45990) | 1 | done Sep 22 2026 (in the authoring run) | none |
| Anatomy and Physiology | 01-an-introduction-to-the-human-body/07-medical-imaging (m45991) | 1 | done Sep 22 2026 (in the authoring run) | 859 |
| Anatomy and Physiology | 02-the-chemical-level-of-organization/01-elements-and-atoms-the-building-blocks-of-matter (m45998) | 2 | done Sep 22 2026 (in the authoring run) | 877 |
| Anatomy and Physiology | 02-the-chemical-level-of-organization/02-chemical-bonds (m46000) | 2 | done Sep 22 2026 (in the authoring run) | none |
| Anatomy and Physiology | 02-the-chemical-level-of-organization/03-chemical-reactions (m46004) | 2 | done Sep 22 2026 (in the authoring run) | none |
| Anatomy and Physiology | 02-the-chemical-level-of-organization/04-inorganic-compounds-essential-to-human-functioning (m46006) | 2 | done Sep 22 2026 (in the authoring run) | none |
| Anatomy and Physiology | 02-the-chemical-level-of-organization/05-organic-compounds-essential-to-human-functioning (m46008) | 2 | done Sep 22 2026 (in the authoring run) | none |

Knowledge-check pages (`knowledge-check-*.md`) carry no source prose and are
outside this pass; their items are covered by the KC audit.
