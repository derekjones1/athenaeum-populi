---
title: The Genetic Code
description: >-
  The central dogma of DNA-to-mRNA-to-protein synthesis, why the triplet
  genetic code is degenerate yet nearly universal, and how a reading frame
  set by the AUG start codon is read three nucleotides at a time to a stop
  codon — adapted from OpenStax Biology 2e, Section 15.1.
source_section: "15.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Explain the “central dogma” of DNA-protein synthesis
- Describe the genetic code and how the nucleotide sequence prescribes the amino acid and the protein sequence
{{< /callout >}}

The cellular process of transcription generates messenger RNA (mRNA), a mobile molecular copy of one or more genes with an alphabet of A, C, G, and uracil (U). Translation of the mRNA template on ribosomes converts nucleotide-based genetic information into a protein product. That is the central dogma of DNA-protein synthesis. Protein sequences consist of 20 commonly occurring amino acids; therefore, it can be said that the protein alphabet consists of 20 “letters” (shown in the figure below). Different amino acids have different chemistries (such as acidic versus basic, or polar and nonpolar) and different structural constraints. Variation in amino acid sequence is responsible for the enormous variation in protein structure and function.

{{< mediafigure src="biology/Figure_15_01_01" alt="A chart titled 'Amino Acid' grouping the twenty standard amino acids by R-group chemistry: six nonpolar, aliphatic R groups (glycine, alanine, valine, leucine, methionine, isoleucine); six polar, uncharged R groups (serine, threonine, cysteine, proline, asparagine, glutamine); three positively charged R groups (lysine, arginine, histidine); two negatively charged R groups (aspartate, glutamate); and three nonpolar, aromatic R groups (phenylalanine, tyrosine, tryptophan). Every structure shares the same amino group and carboxyl group backbone, differing only in the blue-shaded R group." longdesc="Each of the twenty structures is drawn with the same vertical backbone — a carboxyl group (COO⁻) at top, a central carbon bonded to an amino group (H₃N⁺) at left, a hydrogen at right, and the shaded blue R group below. In the nonpolar, aliphatic panel (upper left), the R groups are plain carbon-hydrogen chains: glycine is a single H; alanine a CH₃; valine a branched CH bonded to two CH₃ groups; leucine a CH₂-CH branching into two CH₃ groups; methionine a CH₂-CH₂-S-CH₃ chain; isoleucine a branched CH-CH₃ chain continuing to CH₂-CH₃. In the polar, uncharged panel (lower left), each R group adds an oxygen, nitrogen, or sulfur: serine's is CH₂OH; threonine's a CH bonded to OH and CH₃; cysteine's CH₂-SH; proline's loops back to bond the backbone's own amino nitrogen, closing a five-membered ring; asparagine's and glutamine's end in an amide (C=O and NH₂) after one and two CH₂ groups. In the positively charged panel (upper right), each R group ends in a charged nitrogen: lysine's is four CH₂ groups ending in ⁺NH₃; arginine's three CH₂ groups end in a guanidinium group (NH–C(=NH₂⁺)–NH₂); histidine's one CH₂ ends in a five-membered ring bearing a positively charged nitrogen. In the negatively charged panel (middle right), aspartate's R group is one CH₂ ending in COO⁻, and glutamate's is two CH₂ groups ending in COO⁻. In the aromatic panel (lower right), each R group carries a ring: phenylalanine's CH₂ bonds to a benzene ring; tyrosine's CH₂ bonds to a benzene ring bearing a hydroxyl; tryptophan's CH₂ bonds to a bicyclic indole ring." kind="diagram" eager="true" >}}
Structures of the 20 amino acids found in proteins are shown. Each amino acid is composed of an amino group (NH₃⁺), a carboxyl group (COO⁻), and a side chain (blue). The side chain may be nonpolar, polar, or charged, as well as large or small. It is the variety of amino acid side chains that gives rise to the incredible variation of protein structure and function.
{{< /mediafigure >}}

## The Central Dogma: DNA Encodes RNA; RNA Encodes Protein

The flow of genetic information in cells from DNA to mRNA to protein is described by the **central dogma**, which states that genes specify the sequence of mRNAs, which in turn specify the sequence of amino acids making up all proteins. The decoding of one molecule to another is performed by specific proteins and RNAs. Because the information stored in DNA is so central to cellular function, it makes intuitive sense that the cell would make mRNA copies of this information for protein synthesis, while keeping the DNA itself intact and protected. The copying of DNA to RNA is relatively straightforward, with one nucleotide being added to the mRNA strand for every nucleotide read in the DNA strand. The translation to protein is a bit more complex because three mRNA nucleotides correspond to one amino acid in the polypeptide sequence. However, the translation to protein is still systematic and **colinear**, such that nucleotides 1 to 3 correspond to amino acid 1, nucleotides 4 to 6 correspond to amino acid 2, and so on.

{{< mediafigure src="biology/Figure_15_01_02" alt="A three-step flow chart: Transcription shows a DNA double helix opened inside an oval labeled RNA polymerase, generating a single RNA strand; RNA processing shows a primary RNA transcript of alternating exons and introns spliced into a shorter mature RNA with a capped 5′ end and a poly-A tail; Translation shows a ribosome reading the spliced mRNA codon by codon to string amino acids into a growing polypeptide chain." longdesc="Top, labeled Transcription: a double-stranded DNA helix, each strand labeled 5′ at one end and 3′ at the other, passes through an oval labeled RNA polymerase; a single RNA strand (labeled 5′ to 3′) peels away from the DNA inside the oval. Middle, labeled RNA processing: a bar labeled Primary RNA transcript shows seven segments in order — an unlabeled leading segment, Exon 1, Intron, Exon 2, Intron, Exon 3, and an unlabeled trailing segment; below it, a bar labeled Spliced RNA shows three small circles (the 5′ cap), a short unlabeled segment, then Exon 1, Exon 2, and Exon 3 joined directly together, another unlabeled segment, and finally a run of A's (the poly-A tail). Bottom, labeled Translation: a ribosome, drawn as three adjoining colored subunits labeled E, P, and A, sits on a red mRNA strand reading AUGUUUCGA; the P and A subunits each hold a tRNA (anticodons AAA and GCU) carrying an amino acid, Phe and Arg, which are linking onto a growing polypeptide chain that already carries Met." kind="diagram" >}}
Instructions on DNA are transcribed onto messenger RNA. Ribosomes are able to read the genetic information inscribed on a strand of messenger RNA and use this information to string amino acids together into a protein.
{{< /mediafigure >}}

### The Genetic Code Is Degenerate and Universal

Each amino acid is defined by a three-nucleotide sequence called the triplet codon. Given the different numbers of “letters” in the mRNA and protein “alphabets,” scientists theorized that single amino acids must be represented by combinations of nucleotides. Nucleotide doublets would not be sufficient to specify every amino acid because there are only 16 possible two-nucleotide combinations ($4^2$). In contrast, there are 64 possible nucleotide triplets ($4^3$), which is far more than the number of amino acids. Scientists theorized that amino acids were encoded by nucleotide triplets and that the genetic code was “**degenerate**.” In other words, a given amino acid could be encoded by more than one nucleotide triplet. This was later confirmed experimentally: Francis Crick and Sydney Brenner used the chemical mutagen proflavin to insert one, two, or three nucleotides into the gene of a virus. When one or two nucleotides were inserted, the normal proteins were not produced. When three nucleotides were inserted, the protein was synthesized and functional. This demonstrated that the amino acids must be specified by groups of three nucleotides. These nucleotide triplets are called **codons**. The insertion of one or two nucleotides completely changed the triplet **reading frame**, thereby altering the message for every subsequent amino acid (illustrated further below). Though insertion of three nucleotides caused an extra amino acid to be inserted during translation, the integrity of the rest of the protein was maintained.

Scientists painstakingly solved the genetic code by translating synthetic mRNAs in vitro and sequencing the proteins they specified (shown in the figure below).

{{< mediafigure src="biology/Figure_15_02_05" alt="A 4-by-4 codon table with rows for the codon's first letter (U, C, A, G) and columns for the second letter (U, C, A, G); each cell lists the four codons sharing that first and second letter, split by third letter into the amino acid or acids they encode, with AUG highlighted as the start codon (Met) and UAA, UAG, and UGA marked as stop codons." longdesc="The table has four row-groups by first letter and four column-groups by second letter, with a third-letter column (U, C, A, G) running down the right edge of every row. First letter U: second letter U gives UUU, UUC → Phe and UUA, UUG → Leu; second letter C gives UCU, UCC, UCA, UCG → Ser; second letter A gives UAU, UAC → Tyr and UAA, UAG → Stop; second letter G gives UGU, UGC → Cys, UGA → Stop, and UGG → Trp. First letter C: second letter U gives CUU, CUC, CUA, CUG → Leu; second letter C gives CCU, CCC, CCA, CCG → Pro; second letter A gives CAU, CAC → His and CAA, CAG → Gln; second letter G gives CGU, CGC, CGA, CGG → Arg. First letter A: second letter U gives AUU, AUC, AUA → Ile and AUG → Met, highlighted as the start codon; second letter C gives ACU, ACC, ACA, ACG → Thr; second letter A gives AAU, AAC → Asn and AAA, AAG → Lys; second letter G gives AGU, AGC → Ser and AGA, AGG → Arg. First letter G: second letter U gives GUU, GUC, GUA, GUG → Val; second letter C gives GCU, GCC, GCA, GCG → Ala; second letter A gives GAU, GAC → Asp and GAA, GAG → Glu; second letter G gives GGU, GGC, GGA, GGG → Gly." kind="diagram" >}}
This figure shows the genetic code for translating each nucleotide triplet in mRNA into an amino acid or a termination signal in a protein. (credit: modification of work by NIH)
{{< /mediafigure >}}

In addition to codons that instruct the addition of a specific amino acid to a polypeptide chain, three of the 64 codons terminate protein synthesis and release the polypeptide from the translation machinery. These triplets are called **nonsense codons**, or *stop codons*. Another codon, AUG, also has a special function. In addition to specifying the amino acid methionine, it also serves as the start codon to initiate translation. The reading frame for translation is set by the AUG start codon near the 5′ end of the mRNA. Following the start codon, the mRNA is read in groups of three until a stop codon is encountered.

The arrangement of the coding table reveals the structure of the code. There are sixteen "blocks" of codons, each specified by the first and second nucleotides of the codons within the block, e.g., the "AC*" block that corresponds to the amino acid threonine (Thr). Some blocks are divided into a pyrimidine half, in which the codon ends with U or C, and a purine half, in which the codon ends with A or G. Some amino acids get a whole block of four codons, like alanine (Ala), threonine (Thr) and proline (Pro). Some get the pyrimidine half of their block, like histidine (His) and asparagine (Asn). Others get the purine half of their block, like glutamate (Glu) and lysine (Lys). Note that some amino acids get a block and a half-block for a total of six codons.

The specification of a single amino acid by multiple similar codons is called "degeneracy." Degeneracy is believed to be a cellular mechanism to reduce the negative impact of random mutations. Codons that specify the same amino acid typically only differ by one nucleotide. In addition, amino acids with chemically similar side chains are encoded by similar codons. For example, aspartate (Asp) and glutamate (Glu), which occupy the GA* block, are both negatively charged. This nuance of the genetic code ensures that a single-nucleotide substitution mutation might specify the same amino acid but have no effect or specify a similar amino acid, preventing the protein from being rendered completely nonfunctional.

*The genetic code is nearly universal.* With a few minor exceptions, virtually all species use the same genetic code for protein synthesis. Conservation of codons means that a purified mRNA encoding the globin protein in horses could be transferred to a tulip cell, and the tulip would synthesize horse globin. That there is only one genetic code is powerful evidence that all of life on Earth shares a common origin, especially considering that there are about $10^{84}$ possible combinations of 20 amino acids and 64 triplet codons.

{{< callout type="info" >}}
**Link to Learning.** Transcribe a gene and translate it to protein using complementary pairing and the genetic code at [this site](https://openstax.org/l/create_protein).
{{< /callout >}}

{{< mediafigure src="biology/Figure_15_02_03" alt="Illustration of a frameshift mutation: an arrow shows a twelve-nucleotide mRNA sequence, translated into four amino acids, changing into a second sequence with two nucleotides deleted, whose reading frame — and every amino acid after the deletion — is shifted." longdesc="The first mRNA sequence, boxed into four codons and labeled below with the amino acids they specify, reads AGC (Ser), GUA (Val), CCC (Pro), UAC (Tyr); the U and A of the second codon are shaded orange. After those two nucleotides are deleted, the second sequence — shown one nucleotide window later — reads AGC (Ser), GCC (Ala), CUA (Leu), CUU (Leu): the first codon is unchanged, but every codon after the deletion is shifted by two nucleotides and specifies a different amino acid." kind="diagram" >}}
The deletion of two nucleotides shifts the reading frame of an mRNA and changes the entire protein message, creating a nonfunctional protein or terminating protein synthesis altogether.
{{< /mediafigure >}}

{{< callout type="info" >}}
**Scientific Method Connection.** *Which Has More DNA: A Kiwi or a Strawberry?*

{{< mediafigure src="biology/Figure_15_01_03-d9f3" alt="Two side-by-side photographs: a cross-section of a kiwifruit sliced in half, showing its green flesh, pale core, and ring of small black seeds, on the left; a white bowl of whole red strawberries on a blue plate, on the right." kind="photo" >}}
Do you think that a kiwi or a strawberry has more DNA per fruit? (credit “kiwi”: "Kelbv"/Flickr; credit: “strawberry”: Alisdair McDiarmid)
{{< /mediafigure >}}

**Question**: Would a kiwi and strawberry that are approximately the same size also have approximately the same amount of DNA?

**Background**: Genes are carried on chromosomes and are made of DNA. All mammals are diploid, meaning they have two copies of each chromosome. However, not all plants are diploid. The common strawberry is octoploid (8*n*) and the cultivated kiwi is hexaploid (6*n*). Research the total number of chromosomes in the cells of each of these fruits and think about how this might correspond to the amount of DNA in these fruits' cell nuclei. What other factors might contribute to the total amount of DNA in a single fruit? Read about the technique of DNA isolation to understand how each step in the isolation protocol helps liberate and precipitate DNA.

**Hypothesis**: Hypothesize whether you would be able to detect a difference in DNA quantity from similarly sized strawberries and kiwis. Which fruit do you think would yield more DNA?

**Test your hypothesis**: Isolate the DNA from a strawberry and a kiwi that are similarly sized. Perform the experiment in at least triplicate for each fruit

1. Prepare a bottle of DNA extraction buffer from 900 mL water, 50 mL dish detergent, and two teaspoons of table salt. Mix by inversion (cap it and turn it upside down a few times).
2. Grind a strawberry and a kiwi by hand in a plastic bag, or using a mortar and pestle, or with a metal bowl and the end of a blunt instrument. Grind for at least two minutes per fruit.
3. Add 10 mL of the DNA extraction buffer to each fruit, and mix well for at least one minute.
4. Remove cellular debris by filtering each fruit mixture through cheesecloth or porous cloth and into a funnel placed in a test tube or an appropriate container.
5. Pour ice-cold ethanol or isopropanol (rubbing alcohol) into the test tube. You should observe white, precipitated DNA.
6. Gather the DNA from each fruit by winding it around separate glass rods.

**Record your observations**: Because you are not quantitatively measuring DNA volume, you can record for each trial whether the two fruits produced the same or different amounts of DNA as observed by eye. If one or the other fruit produced noticeably more DNA, record this as well. Determine whether your observations are consistent with several pieces of each fruit.

**Analyze your data**: Did you notice an obvious difference in the amount of DNA produced by each fruit? Were your results reproducible?

**Draw a conclusion**: Given what you know about the number of chromosomes in each fruit, can you conclude that chromosome number necessarily correlates to DNA amount? Can you identify any drawbacks to this procedure? If you had access to a laboratory, how could you standardize your comparison and make it more quantitative?
{{< /callout >}}

## Summary

The genetic code refers to the DNA alphabet (A, T, C, G), the RNA alphabet (A, U, C, G), and the polypeptide alphabet (20 amino acids). The central dogma describes the flow of genetic information in the cell from genes to mRNA to proteins. Genes are used to make mRNA by the process of transcription; mRNA is used to synthesize proteins by the process of translation. The genetic code is degenerate because 64 triplet codons in mRNA specify only 20 amino acids and three nonsense codons. Most amino acids have several similar codons. Almost every species on the planet uses the same genetic code.

## Key terms

- **central dogma** — states that genes specify the sequence of mRNAs, which in turn specify the sequence of proteins
- **codon** — three consecutive nucleotides in mRNA that specify the insertion of an amino acid or the release of a polypeptide chain during translation
- **colinear** — in terms of RNA and protein, three “units” of RNA (nucleotides) specify one “unit” of protein (amino acid) in a consecutive fashion
- **degeneracy** — (of the genetic code) describes that a given amino acid can be encoded by more than one nucleotide triplet; the code is degenerate, but not ambiguous
- **nonsense codon** — one of the three mRNA codons that specifies termination of translation
- **reading frame** — sequence of triplet codons in mRNA that specify a particular protein; a ribosome shift of one or two nucleotides in either direction completely abolishes synthesis of that protein

## Practice

### Explain the “central dogma” of DNA-protein synthesis

{{< multiplechoice
  question="Which event contradicts the central dogma of molecular biology?"
  answer="Scientists use reverse transcriptase enzymes to make DNA from RNA."
  hint="Central dogma flows DNA → RNA → protein; look for the option that reverses that direction."
>}}
Poly-A polymerase enzymes process mRNA in the nucleus.
Endonuclease enzymes splice out and repair damaged DNA.
Scientists use reverse transcriptase enzymes to make DNA from RNA.
Codons specifying amino acids are degenerate and universal.
{{< /multiplechoice >}}

{{< textin
  question="The principle stating that genes specify the sequence of mRNAs, which in turn specify the sequence of proteins, is called the ________."
  answer="central dogma"
  hint="It is the section's own name for the DNA-to-mRNA-to-protein flow of genetic information."
>}}

{{< textin
  question="Genes are used to make mRNA by the process of ________; mRNA is used to synthesize proteins by the process of translation."
  answer="transcription"
  hint="This is the first of the two processes the central dogma describes."
>}}

### Describe the genetic code and how the nucleotide sequence prescribes the amino acid and the protein sequence

{{< multiplechoice
  question="The AUC and AUA codons in mRNA both specify isoleucine. What feature of the genetic code explains this?"
  answer="degeneracy"
  hint="Think about how many different codons can specify one amino acid."
>}}
complementarity
nonsense codons
universality
degeneracy
{{< /multiplechoice >}}

{{< multiplechoice
  question="How many nucleotides are in 12 mRNA codons?"
  answer="36"
  hint="Each codon is three nucleotides; multiply."
>}}
12
24
36
48
{{< /multiplechoice >}}

{{< selfcheck question="Imagine if there were 200 commonly occurring amino acids instead of 20. Given what you know about the genetic code, what would be the shortest possible codon length? Explain." hint="Find the smallest number of nucleotides n such that 4 raised to the n-th power is at least 200." >}}
For 200 commonly occurring amino acids, codons consisting of four types of nucleotides would have to be at least four nucleotides long, because four to the fourth power ($4^4$) is 256. There would be much less degeneracy in this case.
===CHECKS===
codons would have to be at least four nucleotides long
four to the fourth power is 256
there would be much less degeneracy in this case
{{< /selfcheck >}}

{{< selfcheck question="Discuss how degeneracy of the genetic code makes cells more robust to mutations." hint="Think about what happens when only the third nucleotide of a codon changes." >}}
Codons that specify the same amino acid typically only differ by one nucleotide. In addition, amino acids with chemically similar side chains are encoded by similar codons. This nuance of the genetic code ensures that a single-nucleotide substitution mutation might either specify the same amino acid and have no effect, or may specify a similar amino acid, preventing the protein from being rendered completely nonfunctional.
===CHECKS===
codons that specify the same amino acid typically only differ by one nucleotide
amino acids with chemically similar side chains are encoded by similar codons
a single-nucleotide substitution mutation might either specify the same amino acid and have no effect, or may specify a similar amino acid
preventing the protein from being rendered completely nonfunctional
{{< /selfcheck >}}

{{< selfcheck question="A scientist sequencing mRNA identifies the following strand: CUAUGUGUCGUAACAGCCGAUGACCCG. What is the sequence of the amino acid chain this mRNA makes when it is translated?" hint="First locate the start codon AUG, then read the rest in groups of three until you reach a stop codon." >}}
Met Cys Arg Asn Ser Arg. The first step to writing the amino acid sequence is to find the start codon AUG. Then, the nucleotide sequence is separated into triplets: CU AUG UGU CGU AAC AGC CGA UGA. We stop the translation at UGA because that triplet encodes a stop codon. When we convert these codons to amino acids, the sequence becomes Met Cys Arg Asn Ser Arg.
===CHECKS===
the amino acid sequence is Met Cys Arg Asn Ser Arg
find the start codon AUG
separated into triplets: CU AUG UGU CGU AAC AGC CGA UGA
stop the translation at UGA because that triplet encodes a stop codon
{{< /selfcheck >}}

{{< textin
  question="Three consecutive nucleotides in mRNA that specify the insertion of an amino acid, or the release of a polypeptide chain during translation, are called a ________."
  answer="codon"
  accept="codons"
  hint="AUG, UAA, and UGA are all examples of this three-nucleotide unit."
>}}

{{< textin
  question="A shift of one or two nucleotides in the sequence of triplets that specifies a particular protein completely abolishes synthesis of that protein by changing its ________."
  answer="reading frame"
  accept="reading frames"
  hint="The AUG start codon sets where this begins near the 5′ end of the mRNA."
>}}

---

<small>This section is adapted from [Biology 2e, Section 15.1: The Genetic Code](https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code) by Mary Ann Clark, Jung Choi, Matthew Douglas, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/biology-2e). Changes: figures re-encoded as WebP; Figure_15_01_01 and Figure_15_01_02 re-kinded from the manifest's file-extension guess of "photo" to "diagram" after inspection (both are drawn charts, not photographs); Figure_15_01_01's source alt corrected from "glutamate" to "glutamine" for the polar-uncharged panel (the source alt names the same amino acid twice — once uncharged, once negatively charged — while the image and glossary agree on glutamine for the uncharged group), and a longdesc added walking every panel of the chart since its structural detail is not in the caption; Figure_15_01_02's source alt, a letter-spaced screen-reader spelling ("D N A", "m R N A", "5 prime cap"), rewritten as a plain description, with the walk-through of the flow chart's three stages moved into a longdesc; Figure_15_02_05's source alt rewritten to name the actual table structure, with a longdesc transcribing all 64 codons by first and second letter, since the codon table's content is not otherwise carried in this section's prose; Figure_15_02_03's source alt corrected from "the deletion of two amino acids" to name what is actually deleted — two nucleotides, not amino acids, as the figure's own caption and the deleted letters (U and A) both show — with a longdesc naming the specific codons and amino acids on both sides of the frameshift; the interactive note rendered as a Link to Learning callout; the scientific-method note kept as a callout with its figure, question, background, hypothesis, procedure, and analysis prompts in full; the "AC*"/"GA*" wildcard block notation, the doublet/triplet counts ($4^2$, $4^3$), the $10^{84}$ combination count, and the $4^4 = 256$ in the Critical Thinking solution set as KaTeX per the biology notation rule, with the matching rubric checkpoint spelled out in words because checkpoints render as plain text; the three Review Questions and three Critical Thinking Questions adapted into the closing interactive Practice block, the Critical Thinking solutions decomposed into rubric checkpoints; one key-term recall item (central dogma) and one summary cloze item (transcription) added for the first objective, and two key-term recall items (codon, reading frame) added for the second, since this section's own exercises test the second objective more heavily than the first.</small>
