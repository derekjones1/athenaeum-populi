---
title: Mutations
description: >-
  The types of point and frameshift mutations and their effects on protein
  structure, how mutagens and radiation cause mutations, how cells repair
  thymine dimers by light and dark repair, and how replica plating and the
  Ames test identify mutants and screen for carcinogens — adapted from
  OpenStax Microbiology, Section 11.5.
source_section: "11.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Compare point mutations and frameshift mutations
- Describe the differences between missense, nonsense, and silent mutations
- Describe the differences between light and dark repair
- Explain how different mutagens act
- Explain why the Ames test can be used to detect carcinogens
- Analyze sequences of DNA and identify examples of types of mutations
{{< /callout >}}

A **mutation** is a heritable change in the DNA sequence of an organism. The resulting organism, called a **mutant**, may have a recognizable change in phenotype compared to the **wild type**, which is the phenotype most commonly observed in nature. A change in the DNA sequence is conferred to mRNA through transcription, and may lead to an altered amino acid sequence in a protein on translation. Because proteins carry out the vast majority of cellular functions, a change in amino acid sequence in a protein may lead to an altered phenotype for the cell and organism.

## Effects of Mutations on DNA Sequence

There are several types of mutations that are classified according to how the DNA molecule is altered. One type, called a **point mutation**, affects a single base and most commonly occurs when one base is substituted or replaced by another. Mutations also result from the addition of one or more bases, known as an **insertion**, or the removal of one or more bases, known as a **deletion**.

**Check Your Understanding**

{{< textin question="What type of mutation occurs when a gene has two fewer nucleotides in its sequence?" answer="frameshift mutation" accept="frameshift" hint="Two nucleotides is not a multiple of three, so translation of every codon downstream of the change shifts out of register." >}}

## Effects of Mutations on Protein Structure and Function

Point mutations may have a wide range of effects on protein function (see the figure below). As a consequence of the degeneracy of the genetic code, a point mutation will commonly result in the same amino acid being incorporated into the resulting polypeptide despite the sequence change. This change would have no effect on the protein's structure, and is thus called a **silent mutation**. A **missense mutation** results in a different amino acid being incorporated into the resulting polypeptide. The effect of a missense mutation depends on how chemically different the new amino acid is from the wild-type amino acid. The location of the changed amino acid within the protein also is important. For example, if the changed amino acid is part of the enzyme's active site, then the effect of the missense mutation may be significant. Many missense mutations result in proteins that are still functional, at least to some degree. Sometimes the effects of missense mutations may be only apparent under certain environmental conditions; such missense mutations are called **conditional mutations**. Rarely, a missense mutation may be beneficial. Under the right environmental conditions, this type of mutation may give the organism that harbors it a selective advantage. Yet another type of point mutation, called a **nonsense mutation**, converts a codon encoding an amino acid (a sense codon) into a stop codon (a nonsense codon). Nonsense mutations result in the synthesis of proteins that are shorter than the wild type and typically not functional.

Deletions and insertions also cause various effects. Because codons are triplets of nucleotides, insertions or deletions in groups of three nucleotides may lead to the insertion or deletion of one or more amino acids and may not cause significant effects on the resulting protein's functionality. However, **frameshift mutations**, caused by insertions or deletions of a number of nucleotides that are not a multiple of three are extremely problematic because a shift in the reading frame results (see the figure below). Because ribosomes read the mRNA in triplet codons, frameshift mutations can change every amino acid after the point of the mutation. The new reading frame may also include a stop codon before the end of the coding sequence. Consequently, proteins made from genes containing frameshift mutations are nearly always nonfunctional.

{{< mediafigure src="microbiology/OSC_Microbio_11_05_EffMut" alt="Four side-by-side before-and-after diagrams of the same twelve-base DNA strand paired with its four encoded amino acids. Silent: the sixth base changes but all four amino acids (Ser, Val, Pro, Tyr) stay the same. Missense: the seventh base changes and the third amino acid changes from Pro to Thr. Nonsense: the last base changes and the fourth amino acid changes from Tyr to a stop codon. Frameshift: two bases are inserted after the fifth base, and the amino acids after that point change to Leu and Leu." longdesc="Four labeled panels, each showing a twelve-base DNA strand above its four bracketed codons and their amino acids, with an arrow to the mutated version. Point Mutations: (1) Silent — AGCGTACCCTAC becomes AGCGTTCCCTAC (position 6, A to T); amino acids stay Ser-Val-Pro-Tyr. (2) Missense — AGCGTACCCTAC becomes AGCGTAACCTAC (position 7, C to A); amino acids become Ser-Val-Thr-Tyr (Pro to Thr). (3) Nonsense — AGCGTACCCTAC becomes AGCGTACCCTAG (last position, C to G); amino acids become Ser-Val-Pro-Stop (Tyr to Stop). Frameshift Mutations: AGCGTACCCTAC becomes AGCGCCCTACTT (two bases, T and A, inserted after position 5); amino acids become Ser-Val-Leu-Leu." kind="diagram" eager="true" >}}
Mutations can lead to changes in the protein sequence encoded by the DNA.
{{< /mediafigure >}}

**Check Your Understanding**

{{< textin question="What are the reasons a nucleotide change in a gene for a protein might not have any effect on the phenotype of that gene?" answer="degeneracy" accept="degeneracy of the code|code degeneracy|silent mutation|silent" hint="Name the property of the genetic code — several codons can specify the same amino acid — that lets some base substitutions leave the protein unchanged." >}}

{{< selfcheck question="Is it possible for an insertion of three nucleotides together after the fifth nucleotide in a protein-coding gene to produce a protein that is shorter than normal? How or how not?" hint="Recall which insertions and deletions shift the reading frame and which do not, and what an in-frame insertion of one codon ordinarily does to protein length." >}}
Insertions or deletions in groups of three nucleotides do not shift the reading frame, because codons are triplets of nucleotides; such an in-frame change may lead to the insertion or deletion of one or more amino acids and may not cause significant effects on the resulting protein's functionality. So inserting three nucleotides after the fifth nucleotide would ordinarily add one extra amino acid to the protein, making it one residue longer rather than shorter, and this section does not describe a mechanism by which an in-frame insertion of this kind would shorten the protein.
===CHECKS===
Insertions or deletions in groups of three nucleotides do not shift the reading frame
codons are triplets of nucleotides
may lead to the insertion or deletion of one or more amino acids and may not cause significant effects
{{< /selfcheck >}}

{{< callout type="info" >}}
**Micro Connection.** *A Beneficial Mutation*

Since the first case of infection with human immunodeficiency virus (HIV) was reported in 1981, nearly 40 million people have died from HIV infection (World Health Organization, "Global Health Observatory (GHO) Data, HIV/AIDS"), the virus that causes acquired immune deficiency syndrome (AIDS). The virus targets helper T cells that play a key role in bridging the innate and adaptive immune response, infecting and killing cells normally involved in the body's response to infection. There is no cure for HIV infection, but many drugs have been developed to slow or block the progression of the virus. Although individuals around the world may be infected, the highest prevalence among people 15–49 years old is in sub-Saharan Africa, where nearly one person in 20 is infected, accounting for greater than 70% of the infections worldwide (World Health Organization, "Global Health Observatory (GHO) Data, HIV/AIDS") (see the figure below). Unfortunately, this is also a part of the world where prevention strategies and drugs to treat the infection are the most lacking.

In recent years, scientific interest has been piqued by the discovery of a few individuals from northern Europe who are resistant to HIV infection. In 1998, American geneticist Stephen J. O'Brien at the National Institutes of Health (NIH) and colleagues published the results of their genetic analysis of more than 4,000 individuals. These indicated that many individuals of Eurasian descent (up to 14% in some ethnic groups) have a deletion mutation, called CCR5-delta 32, in the gene encoding CCR5. CCR5 is a coreceptor found on the surface of T cells that is necessary for many strains of the virus to enter the host cell. The mutation leads to the production of a receptor to which HIV cannot effectively bind and thus blocks viral entry. People homozygous for this mutation have greatly reduced susceptibility to HIV infection, and those who are heterozygous have some protection from infection as well.

It is not clear why people of northern European descent, specifically, carry this mutation, but its prevalence seems to be highest in northern Europe and steadily decreases in populations as one moves south. Research indicates that the mutation has been present since before HIV appeared and may have been selected for in European populations as a result of exposure to the plague or smallpox. This mutation may protect individuals from plague (caused by the bacterium *Yersinia pestis*) and smallpox (caused by the variola virus) because this receptor may also be involved in these diseases. The age of this mutation is a matter of debate, but estimates suggest it appeared between 1875 years to 225 years ago, and may have been spread from Northern Europe through Viking invasions.

This exciting finding has led to new avenues in HIV research, including looking for drugs to block CCR5 binding to HIV in individuals who lack the mutation. Although DNA testing to determine which individuals carry the CCR5-delta 32 mutation is possible, there are documented cases of individuals homozygous for the mutation contracting HIV. For this reason, DNA testing for the mutation is not widely recommended by public health officials so as not to encourage risky behavior in those who carry the mutation. Nevertheless, inhibiting the binding of HIV to CCR5 continues to be a valid strategy for the development of drug therapies for those infected with HIV.

{{< mediafigure src="microbiology/OSC_Microbio_11_05_HIVPrev" alt="World map shaded by region showing HIV prevalence among people ages 15 to 49 in 2015. Global prevalence is 0.8%. Middle East and North Africa 0.1%; Southern Asia, Australia, and the Pacific 0.2%; Western and Central Europe and North America 0.3%; Central and South America 0.5%; Eastern Europe and Central Asia 0.9%; West and Central Africa 2.2%; East and Southern Africa 7.1%." kind="diagram" >}}
HIV is highly prevalent in sub-Saharan Africa, but its prevalence is quite low in some other parts of the world.
{{< /mediafigure >}}
{{< /callout >}}

## Causes of Mutations

Mistakes in the process of DNA replication can cause **spontaneous mutations** to occur. The error rate of DNA polymerase is one incorrect base per billion base pairs replicated. Exposure to **mutagens** can cause **induced mutations**, which are various types of chemical agents or radiation (see the table below). Exposure to a mutagen can increase the rate of mutation more than 1000-fold. Mutagens are often also **carcinogens**, agents that cause cancer. However, whereas nearly all carcinogens are mutagenic, not all mutagens are necessarily carcinogens.

### Chemical Mutagens

Various types of chemical mutagens interact directly with DNA either by acting as nucleoside analogs or by modifying nucleotide bases. Chemicals called **nucleoside analogs** are structurally similar to normal nucleotide bases and can be incorporated into DNA during replication (see the figure below). These base analogs induce mutations because they often have different base-pairing rules than the bases they replace. Other chemical mutagens can modify normal DNA bases, resulting in different base-pairing rules. For example, nitrous acid deaminates cytosine, converting it to uracil. Uracil then pairs with adenine in a subsequent round of replication, resulting in the conversion of a GC base pair to an AT base pair. Nitrous acid also deaminates adenine to hypoxanthine, which base pairs with cytosine instead of thymine, resulting in the conversion of a TA base pair to a CG base pair.

Chemical mutagens known as **intercalating agents** work differently. These molecules slide between the stacked nitrogenous bases of the DNA double helix, distorting the molecule and creating atypical spacing between nucleotide base pairs (see the figure below). As a result, during DNA replication, DNA polymerase may either skip replicating several nucleotides (creating a deletion) or insert extra nucleotides (creating an insertion). Either outcome may lead to a frameshift mutation. Combustion products like polycyclic aromatic hydrocarbons are particularly dangerous intercalating agents that can lead to mutation-caused cancers. The intercalating agents ethidium bromide and acridine orange are commonly used in the laboratory to stain DNA for visualization and are potential mutagens.

{{< mediafigure src="microbiology/OSC_Microbio_11_05_NucAnMod" alt="Chemical diagrams comparing normal nitrogenous bases with their nucleoside analogs. Adenine nucleoside is redrawn as 2-aminopurine nucleoside, with a hydrogen where adenine has an amine group. Thymine's ring is compared with 5-bromouracil, which carries a bromine where thymine carries a methyl group and is shown base-pairing with guanine. Cytosine reacts with nitrous acid to lose its amine group, becoming uracil, which is then shown hydrogen-bonded to adenine instead of guanine." longdesc="Panel (a): a normal adenine nucleoside (a sugar attached to a purine ring bearing an NH2 group) is converted by an arrow into 2-aminopurine nucleoside, the same purine ring with an H in place of the NH2. Below, thymine and 5-bromouracil are drawn as separate pyrimidine rings — thymine has a methyl (CH3) group and 5-bromouracil has a bromine (Br) at the equivalent ring position — and an arrow connects them to a hydrogen-bonded pair labeled guanine (normal state) hydrogen-bonded to 5-bromouracil (rare enol form) through three dashed hydrogen bonds, with sugar groups labeled on each base. Panel (b): cytosine, drawn with an NH2 group on its ring, reacts with nitrous acid (HNO2) to form uracil, which loses the NH2 group; uracil is then shown hydrogen-bonded through two dashed bonds to adenine, in place of cytosine's normal hydrogen bonding to guanine." kind="diagram" >}}
(a) 2-aminopurine nucleoside (2AP) structurally is a nucleoside analog to adenine nucleoside, whereas 5-bromouracil (5BU) is a nucleoside analog to thymine nucleoside. 2AP base pairs with C, converting an AT base pair to a GC base pair after several rounds of replication. 5BU pairs with G, converting an AT base pair to a GC base pair after several rounds of replication. (b) Nitrous acid is a different type of chemical mutagen that modifies already existing nucleoside bases like C to produce U, which base pairs with A. This chemical modification, as shown here, results in converting a CG base pair to a TA base pair.
{{< /mediafigure >}}

{{< mediafigure src="microbiology/OSC_Microbio_11_05_Intercal" alt="Diagram of acridine, a three-ringed molecule with a dimethylamino group at each end, sliding between the two strands of a normal parent DNA double helix at one base pair. An arrow marks that base pair with a red X, and after replication the diagram branches to two outcomes: a daughter DNA molecule with a deletion in the top strand, or a daughter DNA molecule with an insertion of three bases in the bottom strand." longdesc="Top left: the structure of acridine, three fused rings with a dimethylamino group at each end. An arrow leads from acridine to a short double-stranded DNA ladder labeled normal parent DNA, where an oval highlights the base pair the acridine molecule wedges into (marked CA/GT with a red X above it). The word 'replication' leads to two branches: on the left, a daughter DNA molecule labeled 'deletion in top strand,' where the top strand is missing the pair of bases at that position; on the right, a daughter DNA molecule labeled 'insertion in bottom strand,' where the bottom strand carries three extra bases (shown as GAT/CTA) not present in the parent." kind="diagram" >}}
Intercalating agents, such as acridine, introduce atypical spacing between base pairs, resulting in DNA polymerase introducing either a deletion or an insertion, leading to a potential frameshift mutation.
{{< /mediafigure >}}

### Radiation

Exposure to either ionizing or nonionizing radiation can each induce mutations in DNA, although by different mechanisms. Strong **ionizing radiation** like X-rays and gamma rays can cause single- and double-stranded breaks in the DNA backbone through the formation of hydroxyl radicals on radiation exposure (see the figure below). Ionizing radiation can also modify bases; for example, the deamination of cytosine to uracil, analogous to the action of nitrous acid (K.R. Tindall et al., "Changes in DNA Base Sequence Induced by Gamma-Ray Mutagenesis of Lambda Phage and Prophage," *Genetics* 118, no. 4 (1988): 551–560). Ionizing radiation exposure is used to kill microbes to sterilize medical devices and foods, because of its dramatic nonspecific effect in damaging DNA, proteins, and other cellular components (see Using Physical Methods to Control Microorganisms).

Nonionizing radiation, like ultraviolet light, is not energetic enough to initiate these types of chemical changes. However, **nonionizing radiation** can induce dimer formation between two adjacent pyrimidine bases, commonly two thymines, within a nucleotide strand. During **thymine dimer** formation, the two adjacent thymines become covalently linked and, if left unrepaired, both DNA replication and transcription are stalled at this point. DNA polymerase may proceed and replicate the dimer incorrectly, potentially leading to frameshift or point mutations.

{{< mediafigure src="microbiology/OSC_Microbio_11_05_Rad" alt="Two panels. (a) Ionizing radiation: a segment of double-helix DNA drawn as two ribbons with rung-like base pairs, with X-rays or γ-rays striking it (small black arrows), producing a single-strand break at one rung and a double-strand break, where both ribbons are severed, a short distance away. (b) Nonionizing radiation: a close-up of two adjacent thymine bases on one strand, each drawn as a hexagon, joined to each other by covalent bonds instead of to the adenines on the opposite strand; a UV-light arrow points at the thymine dimer, and the double helix is shown kinked at that point." longdesc="Panel (a), labeled ionizing radiation: a length of double-helix DNA (two backbone ribbons with paired rungs) with three small arrows labeled 'x-rays or γ-rays' striking it from above; a label 'single strand break' points to a rung where only one backbone strand is cut, and a label 'double strand break' points to a nearby spot where both backbone strands are cut all the way through. Panel (b), labeled nonionizing radiation: a boxed close-up of one strand's two adjacent thymine (T) bases, each still attached by its sugar-phosphate backbone (3′ and 5′ labeled) and now joined to each other by a pair of covalent bonds instead of to their normal adenine (A) partners on the complementary strand, with a red zigzag arrow labeled UV light striking the dimer; to the right, the full double helix is drawn with a visible kink at the position of the thymine dimer, and the two unpaired adenines are labeled on the opposite strand." kind="diagram" >}}
(a) Ionizing radiation may lead to the formation of single-stranded and double-stranded breaks in the sugar-phosphate backbone of DNA, as well as to the modification of bases (not shown). (b) Nonionizing radiation like ultraviolet light can lead to the formation of thymine dimers, which can stall replication and transcription and introduce frameshift or point mutations.
{{< /mediafigure >}}

**A Summary of Mutagenic Agents**

| Mutagenic Agent | Mode of Action | Effect on DNA | Resulting Type of Mutation |
| --- | --- | --- | --- |
| **Nucleoside analogs** | | | |
| 2-aminopurine | Is inserted in place of A but base pairs with C | Converts AT to GC base pair | Point |
| 5-bromouracil | Is inserted in place of T but base pairs with G | Converts AT to GC base pair | Point |
| **Nucleotide-modifying agent** | | | |
| Nitrous oxide | Deaminates C to U | Converts GC to AT base pair | Point |
| **Intercalating agents** | | | |
| Acridine orange, ethidium bromide, polycyclic aromatic hydrocarbons | Distorts double helix, creates unusual spacing between nucleotides | Introduces small deletions and insertions | Frameshift |
| **Ionizing radiation** | | | |
| X-rays, γ-rays | Forms hydroxyl radicals | Causes single- and double-strand DNA breaks | Repair mechanisms may introduce mutations |
| X-rays, γ-rays | Modifies bases (e.g., deaminating C to U) | Converts GC to AT base pair | Point |
| **Nonionizing radiation** | | | |
| Ultraviolet | Forms pyrimidine (usually thymine) dimers | Causes DNA replication errors | Frameshift or point |

**Check Your Understanding**

{{< multiplechoice
  question="How does a base analog introduce a mutation?"
  answer="It has different base-pairing rules than the normal base it replaces, so it can pair incorrectly during DNA replication."
  hint="Recall the one property, named right after base analogs are introduced, that lets them cause a mutation once they are incorporated into DNA."
>}}
It distorts the double helix and creates atypical spacing between base pairs.
It has different base-pairing rules than the normal base it replaces, so it can pair incorrectly during DNA replication.
It forms hydroxyl radicals that cause single- and double-stranded breaks in the DNA backbone.
It induces covalent linkage between two adjacent thymine bases on the same DNA strand.
{{< /multiplechoice >}}

{{< selfcheck question="How does an intercalating agent introduce a mutation?" hint="Combine what an intercalating agent physically does within the double helix with what DNA polymerase then does incorrectly during replication as a result." >}}
Intercalating agents are molecules that slide between the stacked nitrogenous bases of the DNA double helix, distorting the molecule and creating atypical spacing between nucleotide base pairs. As a result, during DNA replication, DNA polymerase may either skip replicating several nucleotides, creating a deletion, or insert extra nucleotides, creating an insertion — either outcome may lead to a frameshift mutation.
===CHECKS===
slide between the stacked nitrogenous bases of the DNA double helix, distorting the molecule and creating atypical spacing between nucleotide base pairs
DNA polymerase may either skip replicating several nucleotides, creating a deletion, or insert extra nucleotides, creating an insertion
either outcome may lead to a frameshift mutation
{{< /selfcheck >}}

{{< textin question="What type of mutagen causes thymine dimers?" answer="nonionizing radiation" accept="ultraviolet light|UV light|ultraviolet radiation|UV" hint="Recall the class of radiation that, unlike X-rays or γ-rays, is not energetic enough to break DNA strands but can still link adjacent pyrimidine bases." >}}

## DNA Repair

The process of DNA replication is highly accurate, but mistakes can occur spontaneously or be induced by mutagens. Uncorrected mistakes can lead to serious consequences for the phenotype. Cells have developed several repair mechanisms to minimize the number of mutations that persist.

### Proofreading

Most of the mistakes introduced during DNA replication are promptly corrected by most DNA polymerases through a function called proofreading. In proofreading, the DNA polymerase reads the newly added base, ensuring that it is complementary to the corresponding base in the template strand before adding the next one. If an incorrect base has been added, the enzyme makes a cut to release the wrong nucleotide and a new base is added.

### Mismatch Repair

Some errors introduced during replication are corrected shortly after the replication machinery has moved. This mechanism is called mismatch repair. The enzymes involved in this mechanism recognize the incorrectly added nucleotide, excise it, and replace it with the correct base. One example is the methyl-directed mismatch repair in *E. coli*. The DNA is hemimethylated. This means that the parental strand is methylated while the newly synthesized daughter strand is not. It takes several minutes before the new strand is methylated. Proteins MutS, MutL, and MutH bind to the hemimethylated site where the incorrect nucleotide is found. MutH cuts the nonmethylated strand (the new strand). An exonuclease removes a portion of the strand (including the incorrect nucleotide). The gap formed is then filled in by DNA pol III and ligase.

### Repair of Thymine Dimers

Because the production of thymine dimers is common (many organisms cannot avoid ultraviolet light), mechanisms have evolved to repair these lesions. In **nucleotide excision repair** (also called dark repair), enzymes remove the pyrimidine dimer and replace it with the correct nucleotides (see the figure below). In *E. coli*, the DNA is scanned by an enzyme complex. If a distortion in the double helix is found that was introduced by the pyrimidine dimer, the enzyme complex cuts the sugar-phosphate backbone several bases upstream and downstream of the dimer, and the segment of DNA between these two cuts is then enzymatically removed. DNA pol I replaces the missing nucleotides with the correct ones and DNA ligase seals the gap in the sugar-phosphate backbone.

The **direct repair** (also called light repair) of thymine dimers occurs through the process of **photoreactivation** in the presence of visible light. An enzyme called photolyase recognizes the distortion in the DNA helix caused by the thymine dimer and binds to the dimer. Then, in the presence of visible light, the photolyase enzyme changes conformation and breaks apart the thymine dimer, allowing the thymines to again correctly base pair with the adenines on the complementary strand. Photoreactivation appears to be present in all organisms, with the exception of placental mammals, including humans. Photoreactivation is particularly important for organisms chronically exposed to ultraviolet radiation, like plants, photosynthetic bacteria, algae, and corals, to prevent the accumulation of mutations caused by thymine dimer formation.

{{< mediafigure src="microbiology/OSC_Microbio_11_05_ThyDiRep" alt="Two side-by-side flow diagrams starting from a UV-light arrow striking a thymine dimer in a DNA segment. Left path, nucleotide excision repair: a nuclease cuts the strand on both sides of the dimer, a helicase removes the damaged section, and DNA pol I and DNA ligase fill and seal the gap. Right path, photoreactivation: photolyase surrounds the thymine dimer, then visible light is applied and the dimer's bond is shown broken, restoring the original base pairing." longdesc="Top: a double-stranded DNA ladder (5′ and 3′ labeled at each end) with a raised loop marking a thymine dimer (two Ts bonded to each other instead of to their opposite A bases) after a red UV-light arrow strikes it, labeled 'damage recognized.' Left column, nucleotide excision repair: (1) red arrows mark cut sites on the damaged strand upstream and downstream of the dimer, labeled 'nuclease cuts strand'; (2) the segment between the cuts is removed, leaving a gap, labeled 'helicase removes damaged section'; (3) the gap is filled with correct bases and sealed, labeled 'DNA pol I and DNA ligase make repairs,' restoring the original ten-base-pair sequence. Right column, photoreactivation: (1) a green oval labeled photolyase surrounds the thymine dimer, labeled 'photolyase binds'; (2) the oval remains as a light-red arrow labeled 'visible light' strikes it; (3) the bond joining the two thymines is broken and each thymine again pairs with its adenine, labeled 'thymine dimer bond broken,' restoring the original sequence." kind="diagram" >}}
Bacteria have two mechanisms for repairing thymine dimers. (a) In nucleotide excision repair, an enzyme complex recognizes the distortion in the DNA complex around the thymine dimer and cuts and removes the damaged DNA strand. The correct nucleotides are replaced by DNA pol I and the nucleotide strand is sealed by DNA ligase. (b) In photoreactivation, the enzyme photolyase binds to the thymine dimer and, in the presence of visible light, breaks apart the dimer, restoring the base pairing of the thymines with complementary adenines on the opposite DNA strand.
{{< /mediafigure >}}

**Check Your Understanding**

{{< multiplechoice
  question="During mismatch repair, how does the enzyme recognize which is the new and which is the old strand?"
  answer="The parental strand is methylated while the newly synthesized daughter strand has not yet been methylated."
  hint="Recall the term for DNA in which the parental strand carries a chemical tag the daughter strand has not yet acquired."
>}}
The parental strand is methylated while the newly synthesized daughter strand has not yet been methylated.
An enzyme complex detects a distortion in the double helix caused by a pyrimidine dimer.
The photolyase enzyme detects a distortion in the DNA helix caused by a thymine dimer.
DNA polymerase compares each newly added base to the corresponding base in the template strand.
{{< /multiplechoice >}}

{{< textin question="What type of mutation does photolyase repair?" answer="thymine dimers" accept="thymine dimer|pyrimidine dimer" hint="Name the lesion, described earlier in this section, that photolyase binds to and breaks apart in the presence of visible light." >}}

## Identifying Bacterial Mutants

One common technique used to identify bacterial mutants is called **replica plating**. This technique is used to detect nutritional mutants, called **auxotrophs**, which have a mutation in a gene encoding an enzyme in the biosynthesis pathway of a specific nutrient, such as an amino acid. As a result, whereas wild-type cells retain the ability to grow normally on a medium lacking the specific nutrient, auxotrophs are unable to grow on such a medium. During replica plating (see the figure below), a population of bacterial cells is mutagenized and then plated as individual cells on a complex nutritionally complete plate and allowed to grow into colonies. Cells from these colonies are removed from this master plate, often using sterile velvet. This velvet, containing cells, is then pressed in the same orientation onto plates of various media. At least one plate should also be nutritionally complete to ensure that cells are being properly transferred between the plates. The other plates lack specific nutrients, allowing the researcher to discover various auxotrophic mutants unable to produce specific nutrients. Cells from the corresponding colony on the nutritionally complete plate can be used to recover the mutant for further study.

{{< mediafigure src="microbiology/OSC_Microbio_11_05_PosNegSel" alt="Four-step flow diagram of replica plating. Step 1: a hand presses a sterile velvet surface onto a plate of colonies grown on medium containing histidine, picking up cells from each colony. Step 2: the velvet, still carrying the cell pattern, is pressed in the same orientation onto two new plates, one containing histidine and one lacking it. Step 3: both new plates are incubated. Step 4: comparing the two plates identifies a colony present on the histidine-containing plate but missing at the same position on the histidine-lacking plate as an auxotrophic mutant." longdesc="A hand holds a purple velvet-covered disc and presses it onto a plate labeled 'medium containing histidine' dotted with colonies, picking up their pattern (step 1, 'press sterile velvet onto plate to pick up cells from bacterial colonies'). The same velvet disc is then pressed, in the same orientation (a mark on the plate keeps the colonies aligned), onto two fresh plates: one labeled 'medium containing histidine,' the other 'medium lacking histidine' (step 2, 'transfer cells to new plates'). Both plates are incubated (step 3). In step 4, the two incubated plates are compared: the histidine-containing plate shows a full grid of colonies and is labeled 'auxotrophic mutant' at the position of one colony; the histidine-lacking plate is missing a colony at that same position, circled and labeled 'missing colony.'" kind="diagram" >}}
Identification of auxotrophic mutants, like histidine auxotrophs, is done using replica plating. After mutagenesis, colonies that grow on nutritionally complete medium but not on medium lacking histidine are identified as histidine auxotrophs.
{{< /mediafigure >}}

**Check Your Understanding**

{{< multiplechoice
  question="Why are cells plated on a nutritionally complete plate in addition to nutrient-deficient plates when looking for a mutant?"
  answer="To ensure that cells are being properly transferred between the plates."
  hint="Recall the role this one plate plays as a check on the replica-plating technique itself, not on identifying auxotrophs."
>}}
To identify which colonies are histidine auxotrophs.
To increase the number of colonies available for screening.
To ensure that cells are being properly transferred between the plates.
To select for cells that have already reverted to wild type.
{{< /multiplechoice >}}

## The Ames Test

The **Ames test**, developed by Bruce Ames (1928–) in the 1970s, is a method that uses bacteria for rapid, inexpensive screening of the carcinogenic potential of new chemical compounds. The test measures the mutation rate associated with exposure to the compound, which, if elevated, may indicate that exposure to this compound is associated with greater cancer risk. The Ames test uses as the test organism a strain of *Salmonella typhimurium* that is a histidine auxotroph, unable to synthesize its own histidine because of a mutation in an essential gene required for its synthesis. After exposure to a potential mutagen, these bacteria are plated onto a medium lacking histidine, and the number of mutants regaining the ability to synthesize histidine is recorded and compared with the number of such mutants that arise in the absence of the potential mutagen (see the figure below). Chemicals that are more mutagenic will bring about more mutants with restored histidine synthesis in the Ames test. Because many chemicals are not directly mutagenic but are metabolized to mutagenic forms by liver enzymes, rat liver extract is commonly included at the start of this experiment to mimic liver metabolism. After the Ames test is conducted, compounds identified as mutagenic are further tested for their potential carcinogenic properties by using other models, including animal models like mice and rats.

{{< mediafigure src="microbiology/OSC_Microbio_11_05_Ames" alt="Two-step diagram of the Ames test. Step 1: rat liver extract and a histidine-requiring Salmonella strain are added to a control tube, while rat liver extract, a possible mutagen, and the same Salmonella strain are added to an experimental tube; both are plated and incubated on medium lacking histidine. Step 2: the resulting plates are compared — the control plate carries only a few colonies (natural revertants), while the plate exposed to the possible mutagen carries many more colonies (a high number of his⁻-to-his⁺ revertants)." longdesc="Step 1, left: a dropper adds rat liver extract to a test tube of a Salmonella strain that requires histidine (the control tube, per the instruction text). Step 1, right: droppers add rat liver extract and a possible mutagen to a second tube of the same Salmonella strain (the experimental tube, per the instruction text). Both tubes are plated and incubated on medium lacking histidine (arrows point down to two petri dishes). Step 2: the two incubated plates are compared — the plate below the control tube shows a handful of scattered red colonies, captioned 'control with natural revertants'; the plate below the experimental tube shows many more red colonies covering the dish, captioned 'high number of revertants (his⁻ to his⁺).'" kind="diagram" >}}
The Ames test is used to identify mutagenic, potentially carcinogenic chemicals. A *Salmonella* histidine auxotroph is used as the test strain, exposed to a potential mutagen/carcinogen. The number of reversion mutants capable of growing in the absence of supplied histidine is counted and compared with the number of natural reversion mutants that arise in the absence of the potential mutagen.
{{< /mediafigure >}}

**Check Your Understanding**

{{< multiplechoice
  question="What mutation is used as an indicator of mutation rate in the Ames test?"
  answer="A mutation that restores the histidine auxotroph's ability to synthesize its own histidine."
  hint="Recall what happens to the histidine-auxotroph test strain used in the Ames test when it is exposed to a mutagen and then plated without histidine."
>}}
A mutation that restores the histidine auxotroph's ability to synthesize its own histidine.
A mutation that converts a codon encoding an amino acid into a stop codon.
A mutation that adds or deletes a number of nucleotides that is not a multiple of three.
A mutation that results in the same amino acid being incorporated into the polypeptide.
{{< /multiplechoice >}}

{{< selfcheck question="Why can the Ames test work as a test for carcinogenicity?" hint="Combine the Causes of Mutations sentence linking mutagens and carcinogens with the Ames Test paragraph's own description of what an elevated mutation rate indicates." >}}
Mutagens are often also carcinogens, and whereas nearly all carcinogens are mutagenic, not all mutagens are necessarily carcinogens — so a chemical's mutagenicity is at least a reasonable indicator of its carcinogenic potential. The Ames test measures the mutation rate associated with exposure to a compound, and an elevated mutation rate may indicate that exposure to the compound is associated with greater cancer risk. Because many chemicals are not directly mutagenic but are metabolized to mutagenic forms by liver enzymes, rat liver extract is included in the test to mimic liver metabolism, and compounds the Ames test identifies as mutagenic are further tested for their potential carcinogenic properties using other models, including animal models like mice and rats.
===CHECKS===
Mutagens are often also carcinogens
nearly all carcinogens are mutagenic, not all mutagens are necessarily carcinogens
The Ames test measures the mutation rate associated with exposure to a compound
an elevated mutation rate may indicate that exposure to the compound is associated with greater cancer risk
rat liver extract is included in the test to mimic liver metabolism
compounds ... identified as mutagenic are further tested for their potential carcinogenic properties ... using other models, including animal models
{{< /selfcheck >}}

## Summary

- A **mutation** is a heritable change in DNA. A mutation may lead to a change in the amino-acid sequence of a protein, possibly affecting its function.
- A **point mutation** affects a single base pair. A point mutation may cause a **silent mutation** if the mRNA codon codes for the same amino acid, a **missense mutation** if the mRNA codon codes for a different amino acid, or a **nonsense mutation** if the mRNA codon becomes a stop codon.
- Missense mutations may retain function, depending on the chemistry of the new amino acid and its location in the protein. Nonsense mutations produce truncated and frequently nonfunctional proteins.
- A **frameshift mutation** results from an insertion or deletion of a number of nucleotides that is not a multiple of three. The change in reading frame alters every amino acid after the point of the mutation and results in a nonfunctional protein.
- **Spontaneous mutations** occur through DNA replication errors, whereas **induced mutations** occur through exposure to a **mutagen**.
- Mutagenic agents are frequently carcinogenic but not always. However, nearly all carcinogens are mutagenic.
- Chemical mutagens include base analogs and chemicals that modify existing bases. In both cases, mutations are introduced after several rounds of DNA replication.
- **Ionizing radiation**, such as X-rays and γ-rays, leads to breakage of the phosphodiester backbone of DNA and can also chemically modify bases to alter their base-pairing rules.
- **Nonionizing radiation** like ultraviolet light may introduce pyrimidine (thymine) dimers, which, during DNA replication and transcription, may introduce frameshift or point mutations.
- Cells have mechanisms to repair naturally occurring mutations. DNA polymerase has proofreading activity. Mismatch repair is a process to repair incorrectly incorporated bases after DNA replication has been completed.
- Pyrimidine dimers can also be repaired. In **nucleotide excision repair (dark repair)**, enzymes recognize the distortion introduced by the pyrimidine dimer and replace the damaged strand with the correct bases, using the undamaged DNA strand as a template. Bacteria and other organisms may also use **direct repair**, in which the photolyase enzyme, in the presence of visible light, breaks apart the pyrimidines.
- Through comparison of growth on the complete plate and lack of growth on media lacking specific nutrients, specific loss-of-function mutants called **auxotrophs** can be identified.
- The **Ames test** is an inexpensive method that uses auxotrophic bacteria to measure mutagenicity of a chemical compound. Mutagenicity is an indicator of carcinogenic potential.

## Key terms

- **mutation** — heritable change in the DNA sequence of an organism.
- **mutant** — organism harboring a mutation that often has a recognizable change in phenotype compared to the wild type.
- **wild type** — phenotype of an organism that is most commonly observed in nature.
- **point mutation** — mutation, most commonly a base substitution, that affects a single base pair.
- **insertion** — type of mutation involving the addition of one or more bases into a DNA sequence.
- **deletion** — type of mutation involving the removal of one or more bases from a DNA sequence.
- **silent mutation** — point mutation that results in the same amino acid being incorporated into the resulting polypeptide.
- **missense mutation** — point mutation that results in a different amino acid being incorporated into the resulting polypeptide.
- **conditional mutation** — mutant form of a gene whose mutant phenotype is expressed only under certain environmental conditions.
- **nonsense mutation** — point mutation that converts a codon encoding an amino acid (a sense codon) into a stop codon (a nonsense codon).
- **frameshift mutation** — mutation resulting from either an insertion or a deletion in a number of nucleotides that, if not a multiple of three, changes every amino acid after the mutation.
- **spontaneous mutation** — mutation not caused by a mutagen that occurs through DNA replication errors.
- **mutagen** — type of chemical agent or radiation that can induce mutations.
- **induced mutation** — mutation caused by a mutagen.
- **carcinogen** — agent that causes cancer.
- **nucleoside analog** — chemical that is structurally similar to a normal nucleotide base that can be incorporated into DNA instead of normal bases during replication but that has different base pairing rules than the normal base for which it was substituted, inducing mutation.
- **intercalating agent** — molecule that slides between the stacked nitrogenous bases of the DNA double helix, potentially resulting in a frameshift mutation.
- **ionizing radiation** — high-energy form of radiation that is able to penetrate surfaces and sterilize materials by damaging microbial cell components and DNA.
- **nonionizing radiation** — low-energy radiation, like ultraviolet light, that can induce dimer formation between two adjacent pyrimidine bases, resulting in DNA polymerase stalling and possible formation of a frameshift mutation.
- **thymine dimer** — covalent linkage between two adjacent thymine bases on exposure to ultraviolet radiation.
- **nucleotide excision repair** — enzymatic mechanism to repair pyrimidine dimers by cutting the dimer-containing DNA strand on both sides of the dimer, removing the intervening strand, and replacing the bases with the correct ones.
- **direct repair** — light-dependent mechanism for repairing pyrimidine dimers involving the enzyme photolyase.
- **photoreactivation** — light-dependent mechanism for repairing pyrimidine dimers involving the enzyme photolyase.
- **replica plating** — plating technique in which cells from colonies growing on a complete medium are inoculated onto various types of minimal media using a piece of sterile velvet, ensuring that the orientation of cells deposited on all plates is the same so that growth (or absence thereof) can be compared between plates.
- **auxotroph** — nutritional mutant with a loss-of-function mutation in a gene encoding the biosynthesis of a specific nutrient such as an amino acid.
- **Ames test** — method that uses auxotrophic bacteria to detect mutations resulting from exposure to potentially mutagenic chemical compounds.

## Practice

### Compare point mutations and frameshift mutations

{{< multiplechoice
  question="Which of the following is an example of a frameshift mutation?"
  answer="deletion of one nucleotide"
  hint="Recall which of these changes the number of nucleotides by an amount that is not a multiple of three, shifting every codon downstream."
>}}
a deletion of a codon
missense mutation
silent mutation
deletion of one nucleotide
{{< /multiplechoice >}}

{{< textin question="The phenotype of an organism that is most commonly observed in nature is called the ________." answer="wild type" accept="wildtype" hint="Name the term this section defines in its opening paragraph, before any mutation is introduced." >}}

{{< selfcheck question="Why is it more likely that insertions or deletions will be more detrimental to a cell than point mutations?" hint="Contrast how much of the downstream sequence a single-base substitution can affect with how much a shift in reading frame affects." >}}
A point mutation affects only a single base and, at most, changes the identity of the amino acid encoded by that one codon — and often, because of the degeneracy of the genetic code, it changes nothing at all. An insertion or a deletion is far more often destructive, because whenever the number of nucleotides added or removed is not a multiple of three, a frameshift mutation results: since ribosomes read the mRNA in triplet codons, a frameshift mutation can change every amino acid after the point of the mutation, and the new reading frame may also include a stop codon before the end of the coding sequence. Consequently, proteins made from genes containing frameshift mutations are nearly always nonfunctional, whereas many missense point mutations still produce a protein that is at least partly functional.
===CHECKS===
A point mutation affects only a single base
ribosomes read the mRNA in triplet codons, a frameshift mutation can change every amino acid after the point of the mutation
the new reading frame may also include a stop codon before the end of the coding sequence
proteins made from genes containing frameshift mutations are nearly always nonfunctional
{{< /selfcheck >}}

### Describe the differences between missense, nonsense, and silent mutations

{{< multiplechoice
  question="Which of the following is a change in the sequence that leads to formation of a stop codon?"
  answer="nonsense mutation"
  hint="Recall which point mutation converts a sense codon into a stop codon."
>}}
missense mutation
nonsense mutation
silent mutation
deletion mutation
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which type of point mutation results in the mRNA codon coding for a different amino acid than in the wild type?"
  answer="missense mutation"
  hint="Recall which point mutation is defined by the summary as the mRNA codon coding for a different amino acid."
>}}
silent mutation
nonsense mutation
frameshift mutation
missense mutation
{{< /multiplechoice >}}

{{< textin question="A missense mutation whose effects are only apparent under certain environmental conditions is called a ________ mutation." answer="conditional" hint="Name the adjective this section gives to a missense mutation whose phenotype depends on the environment." >}}

### Describe the differences between light and dark repair

{{< multiplechoice
  question="Which of the following is the type of DNA repair in which thymine dimers are directly broken down by the enzyme photolyase?"
  answer="direct repair"
  hint="Recall which repair pathway's name matches the enzyme photolyase acting directly on the dimer, rather than cutting out and replacing a whole DNA segment."
>}}
direct repair
nucleotide excision repair
mismatch repair
proofreading
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which DNA repair mechanism removes the pyrimidine dimer and replaces it with the correct nucleotides, using an enzyme complex that cuts the DNA backbone on both sides of the damage?"
  answer="nucleotide excision repair (dark repair)"
  hint="Recall which of the two thymine-dimer repair pathways works by physically cutting out and replacing the damaged strand, rather than breaking the dimer's bond in place."
>}}
direct repair (light repair)
nucleotide excision repair (dark repair)
mismatch repair
proofreading
{{< /multiplechoice >}}

{{< textin question="The enzyme used in light repair to split thymine dimers is called ________." answer="photolyase" hint="Name the enzyme this section says changes conformation in the presence of visible light and breaks apart the thymine dimer." >}}

### Explain how different mutagens act

{{< multiplechoice
  question="The formation of pyrimidine dimers results from which of the following?"
  answer="exposure to ultraviolet radiation"
  hint="Recall which type of radiation is described as inducing dimer formation between adjacent pyrimidine bases."
>}}
spontaneous errors by DNA polymerase
exposure to gamma radiation
exposure to ultraviolet radiation
exposure to intercalating agents
{{< /multiplechoice >}}

{{< textin question="A chemical mutagen that is structurally similar to a nucleotide but has different base-pairing rules is called a ________." answer="nucleoside analog" accept="nucleoside analogue" hint="Name the class of chemical mutagen that can be incorporated into DNA during replication in place of a normal base." >}}

{{< sortbins question="Sort each fact about a mutagenic agent below into the class of mutagen it belongs to, using the table above." hint="Match each agent's mode of action or effect, as given in the table above, to its class of mutagen." >}}
{"bins": ["Nucleoside analogs", "Intercalating agents", "Ionizing radiation", "Nonionizing radiation"],
 "items": [
  {"label": "2-aminopurine, which is inserted in place of A but pairs with C, converting an AT to a GC base pair", "bin": 0},
  {"label": "Acridine orange, ethidium bromide, or a polycyclic aromatic hydrocarbon distorts the double helix and creates unusual spacing between nucleotides", "bin": 1},
  {"label": "X-rays or γ-rays form hydroxyl radicals, causing single- and double-strand DNA breaks", "bin": 2},
  {"label": "Ultraviolet light forms pyrimidine (usually thymine) dimers", "bin": 3},
  {"label": "5-bromouracil, which is inserted in place of T but pairs with G, converting an AT to a GC base pair", "bin": 0},
  {"label": "This distortion introduces small deletions and insertions, leading to a frameshift mutation", "bin": 1},
  {"label": "X-rays or γ-rays modify bases (for example, deaminating C to U), converting a GC to an AT base pair", "bin": 2},
  {"label": "This causes DNA replication errors, introducing frameshift or point mutations", "bin": 3}]}
{{< /sortbins >}}

### Explain why the Ames test can be used to detect carcinogens

{{< multiplechoice
  question="Which of the following regarding the Ames test is true?"
  answer="It is used to identify mutants with restored biosynthetic activity."
  hint="Recall what kind of mutants the histidine-auxotroph test strain becomes after a reversion event restores its ability to synthesize histidine."
>}}
It is used to identify newly formed auxotrophic mutants.
It is used to identify mutants with restored biosynthetic activity.
It is used to identify spontaneous mutants.
It is used to identify mutants lacking photoreactivation activity.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Carcinogens are typically mutagenic."
  answer="True"
  hint="Recall which of the two categories, carcinogens or mutagens, this section says is nearly all contained within the other."
>}}
True
False
{{< /multiplechoice >}}

{{< selfcheck question="Why do you think the Ames test is preferable to the use of animal models to screen chemical compounds for mutagenicity?" hint="Combine the Ames test's own description as rapid and inexpensive with what this section says happens to a compound only after it is flagged as mutagenic." >}}
The Ames test is a method that uses bacteria for rapid, inexpensive screening of the carcinogenic potential of new chemical compounds. Only after the Ames test identifies a compound as mutagenic are its potential carcinogenic properties further tested by using other models, including animal models like mice and rats — so the Ames test serves as a faster, cheaper initial screen, and animal testing is reserved for compounds the Ames test has already flagged as mutagenic.
===CHECKS===
a method that uses bacteria for rapid, inexpensive screening of the carcinogenic potential of new chemical compounds
compounds identified as mutagenic are further tested for their potential carcinogenic properties by using other models, including animal models like mice and rats
{{< /selfcheck >}}

### Analyze sequences of DNA and identify examples of types of mutations

{{< selfcheck question="Below are several DNA sequences that are mutated compared with the wild-type sequence, `3′-T A C T G A C T G A C G A T C-5′`. Envision that each is a section of a DNA molecule that has separated in preparation for transcription, so you are only seeing the template strand. Construct the complementary DNA sequence (indicating 5′ and 3′ ends) for each mutated DNA sequence, then transcribe (indicating 5′ and 3′ ends) the template strand, and translate the mRNA molecule using the genetic code, recording the resulting amino acid sequence (indicating the N and C termini). What type of mutation is each? Mutated Template Strand #1: `3′-T A C T G T C T G A C G A T C-5′`. Mutated Template Strand #2: `3′-T A C G G A C T G A C G A T C-5′`. Mutated Template Strand #3: `3′-T A C T G A C T G A C T A T C-5′`. Mutated Template Strand #4: `3′-T A C G A C T G A C T A T C-5′`." hint="Transcribe and translate each strand exactly as you would the wild type, then compare each resulting peptide, codon by codon, back to the wild-type Met-Thr-Asp-Cys sequence to see what single change occurred and what kind of mutation it produced." >}}
Using the wild-type template `3′-T A C T G A C T G A C G A T C-5′`, the wild-type complementary DNA strand is `5′-A T G A C T G A C T G C T A G-3′`, the wild-type mRNA is `5′-A U G A C U G A C U G C U A G-3′` (codons AUG-ACU-GAC-UGC-UAG), and the wild-type peptide, N-terminus to C-terminus, is fMet-Thr-Asp-Cys, followed immediately by a stop codon.

**Strand #1** (`3′-T A C T G T C T G A C G A T C-5′`): a single base changes (A→T) at the sixth position of the template compared with wild type. Complementary DNA: `5′-A T G A C A G A C T G C T A G-3′`. mRNA: `5′-A U G A C A G A C U G C U A G-3′` (codons AUG-ACA-GAC-UGC-UAG). Peptide: fMet-Thr-Asp-Cys (N-terminus fMet, C-terminus Cys) — the same amino acid sequence as wild type, because ACA and ACU both code for threonine. This is a silent mutation.

**Strand #2** (`3′-T A C G G A C T G A C G A T C-5′`): a single base changes (T→G) at the fourth position. Complementary DNA: `5′-A T G C C T G A C T G C T A G-3′`. mRNA: `5′-A U G C C U G A C U G C U A G-3′` (codons AUG-CCU-GAC-UGC-UAG). Peptide: fMet-Pro-Asp-Cys (N-terminus fMet, C-terminus Cys) — the second amino acid changes from threonine to proline. This is a missense mutation.

**Strand #3** (`3′-T A C T G A C T G A C T A T C-5′`): a single base changes (G→T) at the twelfth position. Complementary DNA: `5′-A T G A C T G A C T G A T A G-3′`. mRNA: `5′-A U G A C U G A C U G A U A G-3′` (codons AUG-ACU-GAC-UGA). The fourth codon, UGA, is a stop codon where wild type has UGC (cysteine), so translation ends there. Peptide: fMet-Thr-Asp (N-terminus fMet, C-terminus Asp), three residues instead of four. This is a nonsense mutation.

**Strand #4** (`3′-T A C G A C T G A C T A T C-5′`): this template is only fourteen bases long, one base shorter than wild type, so the reading frame shifts from that point on. Complementary DNA: `5′-A T G C T G A C T G A T A G-3′`. mRNA: `5′-A U G C U G A C U G A U A G-3′` (codons AUG-CUG-ACU-GAU, with two bases, AG, left over — an incomplete codon at the end of the given fragment). Peptide, as far as this fragment can be translated: fMet-Leu-Thr-Asp (N-terminus fMet), with no stop codon reached within the given sequence. This is a frameshift mutation: the reading frame is shifted, so every amino acid after the deletion differs from wild type.
===CHECKS===
because ACA and ACU both code for threonine. This is a silent mutation
the second amino acid changes from threonine to proline. This is a missense mutation
The fourth codon, UGA, is a stop codon where wild type has UGC (cysteine), so translation ends there
This is a frameshift mutation: the reading frame is shifted, so every amino acid after the deletion differs from wild type
the wild-type peptide, N-terminus to C-terminus, is fMet-Thr-Asp-Cys
{{< /selfcheck >}}

{{< textin question="The new reading frame produced by a frameshift mutation may also include a ________ before the end of the coding sequence." answer="stop codon" hint="Recall what a shift in reading frame can introduce early, cutting the resulting protein short." >}}

{{< textin question="An insertion of six nucleotides into a coding sequence is unlikely to cause a frameshift mutation because six is a multiple of ________." answer="three" hint="Recall the number of nucleotides per codon — an insertion or deletion of any multiple of this number keeps the reading frame intact." >}}

---

<small>This section is adapted from [Microbiology, Section 11.5: Mutations](https://openstax.org/books/microbiology/pages/11-5-mutations) by Nina Parker, Mark Schneegurt, Anh-Hue Thi Tu, Philip Lister, Brian M. Forster, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/microbiology). Changes: all eight source figures re-encoded as WebP and rendered as mediafigures after image and PDF inspection, all `kind="diagram"` (every image is a drawn diagram or map, not a photograph), the mutation-effects figure `eager="true"` as the first figure on the page; every figure's alt was rewritten from the image itself (the source alts were accurate in substance but several were rewritten for completeness and to avoid leaking a paired item's key — none is used beside a graded item), and a `longdesc` was added to every process/diagram figure (mutation-effects panels, the nucleoside-analog and intercalating-agent mechanisms, ionizing/nonionizing radiation, thymine-dimer repair, replica plating, and the Ames test) walking its panels, steps, or labels in reading order, since none of their captions name the mechanism in full; the Ames-test `longdesc` was corrected to say the two tubes are the control and experimental tubes "per the instruction text" rather than claiming the artwork itself labels the tubes "control"/"experimental" — only the plates below them carry printed captions, which the `longdesc` still quotes; the Micro Connection box (*A Beneficial Mutation*) is rendered as a callout in source order, its figure kept at its document position at the end of the box, and both of its identical World Health Organization "Global Health Observatory (GHO) Data, HIV/AIDS" footnotes are kept as inline parenthetical citations at the sentences they support, bare access URLs dropped; the Radiation subsection's Tindall et al. 1988 *Genetics* footnote is likewise an inline parenthetical citation; the cross-reference to *Using Physical Methods to Control Microorganisms* (Section 13.2) is plain text, since that section is not yet authored; the grouped "A Summary of Mutagenic Agents" table is transcribed as a Markdown table from the CNXML cells (never from the `summary` attribute), its five agent-class group rows kept as bold spanning labels, and it feeds one `sortbins` (Explain how different mutagens act) whose four bins are four of the table's own five printed group names verbatim (Nucleoside analogs, Intercalating agents, Ionizing radiation, Nonionizing radiation); the lone Nucleotide-modifying agent row (nitrous oxide) is dropped rather than folded into an invented label, since `sortbins` takes at most four bins; the single-row Intercalating agents and Nonionizing radiation groups each contribute two items (their mode-of-action and their effect-on-DNA/resulting-mutation phrases, split into separate items) so that every bin holds at least two items, as the interleave lint requires; the source's minor typographic inconsistencies — a curly closing quote on Mutated DNA Template Strand #3 ("…-5’" rather than "…-5′") and stray closing single quotes throughout the Critical Thinking exercise — are normalized to the Unicode prime (′) used everywhere else on the page, per the run's house notation; the eleven body Check Your Understanding bullets (across six boxes) are rendered as body items at each box's position — eight are graded (`textin` or `multiplechoice`) from a single sentence of this module (the "two fewer nucleotides" question from the frameshift definition; the "reasons…no effect on phenotype" question from the degeneracy sentence; the base-analog mechanism question from the Chemical Mutagens subsection's base-pairing-rules sentence alone; the thymine-dimer-mutagen question from the Radiation subsection; both DNA-repair-recognition questions from the Mismatch Repair and Repair of Thymine Dimers subsections; the replica-plating-control question from Identifying Bacterial Mutants; the Ames-test-indicator question from The Ames Test), and three stay `selfcheck`s whose model answers and rubrics are assembled from this module's own sentences only, because their honest answers need more than one fixing sentence (the three-nucleotide-insertion "how or how not" question; the intercalating-agent mechanism question, whose honest answer needs both the double-helix-distortion sentence and the following sentence naming DNA polymerase's skip-or-insert error, so it was reverted from a two-sentence multiplechoice to a selfcheck; and "why can the Ames test work as a test for carcinogenicity," which draws on both the Causes of Mutations paragraph and the Ames Test paragraph); of the module's twelve source exercises (5 Multiple Choice, 1 True/False, 3 Fill in the Blank, 1 Short Answer, 2 Critical Thinking), all twelve are adapted into Practice — the True/False item as a two-option multiple choice without a "True or false:" prefix; the unkeyed Short Answer question ("why…insertions or deletions…more detrimental…than point mutations") is graded as a `selfcheck` assembled from this module's own sentences, because its honest answer draws on sentences from two different paragraphs; the unkeyed four-sequence Critical Thinking question is a fully worked `selfcheck` whose model answer transcribes, transcribes-and-translates, and types every sequence explicitly (using the standard genetic code, as the question instructs, the same code table given in Section 11.4's figure, cited here as the source of the codon-to-amino-acid assignments rather than reproduced) and whose worksheet `<table>` is rendered as an enumerated list inside the item's question rather than as a data table; the unkeyed "why is the Ames test preferable to animal models" Critical Thinking question stays a `selfcheck`, because the module gives only that the Ames test is described as "rapid, inexpensive" and that animal testing is reserved for compounds it flags, not a full comparative argument; five filler items (two `multiplechoice`, three `textin`) were added to bring the Describe-missense/nonsense/silent, Describe-light/dark-repair, and Analyze-sequences objective groups to the book's floor of three, each built from a single body or summary sentence of this module and named in the ledger; the light/dark-repair filler asks about the nucleotide-excision-repair (dark-repair) mechanism rather than repeating the source item's light-versus-dark contrast, and is placed between the source photolyase-keyed multiplechoice and the photolyase-keyed `textin` so that the `textin`'s answer no longer sits directly beneath a stem that prints it; `accept="UV"` and `accept="wildtype"` were added to two items after confirming with the real grader that neither normalizes to its existing accept members; key terms compiled from the module's 26 defined-term elements (26 distinct terms — none repeated) and the book's Glossary appendix, all definitions taken directly from the Glossary, including `photoreactivation`, whose nearest appendix headword is "direct repair (light repair or photoreactivation)." No source exercise item is omitted.</small>
