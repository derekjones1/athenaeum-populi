---
title: Whole-Genome Sequencing
description: >-
  The chain-termination (Sanger) method, shotgun and next-generation
  sequencing, and how whole-genome sequences — human and model-organism —
  are put to use in medicine, agriculture, and biofuel research — adapted
  from OpenStax Biology 2e, Section 17.3.
source_section: "17.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Describe three types of sequencing
- Define whole-genome sequencing
{{< /callout >}}

Although there have been significant advances in the medical sciences in recent years, doctors are still confounded by some diseases, and they are using whole-genome sequencing to discover the root of the problem. **Whole-genome sequencing** is a process that determines an entire genome's DNA sequence. Whole-genome sequencing is a brute-force approach to problem solving when there is a genetic basis at the core of a disease. Several laboratories now provide services to sequence, analyze, and interpret entire genomes.

For example, whole-exome sequencing is a lower-cost alternative to whole genome sequencing. In exome sequencing, the doctor sequences only the DNA's coding, exon-producing regions. In 2010, doctors used whole-exome sequencing to save a young boy whose intestines had multiple mysterious abscesses. The child had several colon operations with no relief. Finally, they performed whole-exome sequencing, which revealed a defect in a pathway that controls apoptosis (programmed cell death). The doctors used a bone-marrow transplant to overcome this genetic disorder, leading to a cure for the boy. He was the first person to receive successful treatment based on a whole-exome sequencing diagnosis. Today, human genome sequencing is more readily available and results are available within two days for about $1000.

## Strategies Used in Sequencing Projects

The basic sequencing technique used in all modern day sequencing projects is the chain termination method (also known as the dideoxy method), which Fred Sanger developed in the 1970s. The chain termination method involves DNA replication of a single-stranded template by using a primer and a regular **deoxynucleotide** (dNTP), which is a monomer, or a single DNA unit. The primer and dNTP mix with a small proportion of fluorescently labeled **dideoxynucleotides** (ddNTPs). The ddNTPs are monomers that are missing a hydroxyl group (–OH) at the site at which another nucleotide usually attaches to form a chain (below). Scientists label each ddNTP with a different color of fluorophore. Every time a ddNTP incorporates in the growing complementary strand, it terminates the DNA replication process, which results in multiple short strands of replicated DNA that each terminate at a different point during replication. When gel electrophoresis processes the reaction mixture after separating into single strands, the multiple newly replicated DNA strands form a ladder because of the differing sizes. Because the ddNTPs are fluorescently labeled, each band on the gel reflects the DNA strand's size and the ddNTP that terminated the reaction. The different colors of the fluorophore-labeled ddNTPs help identify the ddNTP incorporated at that position. Reading the gel on the basis of each band's color on the ladder produces the template strand's sequence (below).

{{< mediafigure src="biology/Figure_17_03_01-a947" kind="diagram" eager="true" alt="Two labeled diagrams comparing a dideoxynucleotide's and a deoxynucleotide's sugar-phosphate structure. Both show three phosphate groups linked through the sugar to a Base, differing only in the boxed group at the ring's 3′ carbon: H in the dideoxynucleotide, OH in the deoxynucleotide." longdesc="Two identical five-membered sugar-ring diagrams, stacked vertically, each with a chain of three phosphate groups (P–P–P) at the left, linked through OCH₂ to the ring's upper-left carbon. A bond from the ring's upper-right carbon leads out to a Base label, and plain H atoms mark two other ring carbons. A highlighted box at the ring's lower carbon marks the 3′ position. Top diagram, labeled 'Dideoxynucleotide (ddNTP)': the boxed 3′ group is H. Bottom diagram, labeled 'Deoxynucleotide (dNTP)': the boxed 3′ group is OH — the one difference between the two structures." >}}
A dideoxynucleotide is similar in structure to a deoxynucleotide, but is missing the 3′ hydroxyl group (indicated by the box). When a dideoxynucleotide is incorporated into a DNA strand, DNA synthesis stops.
{{< /mediafigure >}}

{{< mediafigure src="biology/Figure_B17_03_02" kind="diagram" alt="Two-panel figure illustrating Sanger's dideoxy chain-termination method. Left: four color-coded DNA fragments of increasing length, each ending in an arrowhead matching the dideoxynucleotide (ddCTP, ddATP, ddGTP, or ddTTP) that terminated it, above a row of colored boxes spelling out the template's complementary bases. Right: an electropherogram — overlapping colored peaks with the base sequence read off beneath them." longdesc="Left panel: four horizontal bars of decreasing length, each ending in a triangular arrowhead colored to match its terminating dideoxynucleotide, from longest (top) to shortest (bottom): a blue arrow labeled ddCTP, a green arrow labeled ddATP, a black arrow labeled ddGTP, and a red arrow labeled ddTTP. Below the bars, eight colored boxes read left to right: G (black), A (green), T (red), T (red), C (blue), A (green), G (black), C (blue), captioned 'Dye-labeled dideoxynucleotides are used to generate DNA fragments of different lengths.' Right panel: a chromatogram trace of overlapping black, green, red, and blue peaks running left to right above an axis marked with positions 120 and 130, with a row of base-call letters printed beneath the trace in the matching peak colors, spelling out the read sequence." >}}
This figure illustrates Frederick Sanger's dideoxy chain termination method. Using dideoxynucleotides, the DNA fragment can terminate at different points. The DNA separates on the basis of size, and we can read these bands based on the fragments' size.
{{< /mediafigure >}}

### Early Strategies: Shotgun Sequencing and Pair-Wise End Sequencing

In **shotgun sequencing** method, several DNA fragment copies cut randomly into many smaller pieces (somewhat like what happens to a round shot cartridge when fired from a shotgun). All of the segments sequence using the chain-sequencing method. Then, with sequence computer assistance, scientists can analyze the fragments to see where their sequences overlap. By matching overlapping sequences at each fragment's end, scientists can reform the entire DNA sequence. A larger sequence that is assembled from overlapping shorter sequences is called a **contig**. As an analogy, consider that someone has four copies of a landscape photograph that you have never seen before and know nothing about how it should appear. The person then rips up each photograph with their hands, so that different size pieces are present from each copy. The person then mixes all of the pieces together and asks you to reconstruct the photograph. In one of the smaller pieces you see a mountain. In a larger piece, you see that the same mountain is behind a lake. A third fragment shows only the lake, but it reveals that there is a cabin on the shore of the lake. Therefore, from looking at the overlapping information in these three fragments, you know that the picture contains a mountain behind a lake that has a cabin on its shore. This is the principle behind reconstructing entire DNA sequences using shotgun sequencing.

Originally, shotgun sequencing only analyzed one end of each fragment for overlaps. This was sufficient for sequencing small genomes. However, the desire to sequence larger genomes, such as that of a human, led to developing double-barrel shotgun sequencing, or **pairwise-end sequencing**. In pairwise-end sequencing, scientists analyze each fragment's end for overlap. Pairwise-end sequencing is, therefore, more cumbersome than shotgun sequencing, but it is easier to reconstruct the sequence because there is more available information.

### Next-generation Sequencing

Since 2005, automated sequencing techniques used by laboratories are under the umbrella of **next-generation sequencing** (deep sequencing or massively parallel sequencing), which is a group of automated techniques used for rapid DNA sequencing. These automated low-cost sequencers can generate sequences of hundreds of thousands or millions of short fragments (25 to 500 base pairs) in the span of one day. These sequencers use sophisticated software to get through the cumbersome process of putting all the fragments in order.

{{< callout type="info" >}}
**Evolution Connection.** *Comparing Sequences*

A sequence alignment is an arrangement of proteins, DNA, or RNA. Scientists use it to identify similar regions between cell types or species, which may indicate function or structure conservation. We can use sequence alignments to construct phylogenetic trees. The following website uses a software program called [BLAST (basic local alignment search tool)](http://blast.ncbi.nlm.nih.gov/Blast.cgi).

Under Web Blast,” click “Nucleotide Blast.” Input the following sequence into the large "query sequence" box: ATTGCTTCGATTGCA. Below the box, locate the "Organism" field and type "human" or "Homo sapiens". Then click “BLAST” to compare the inputted sequence against the human genome's known sequences. The search will take some amount of time before the results are displayed. The result is that this sequence occurs in over a hundred places in the human genome. A list of descriptions of the matches is presented. Click on the Graphic Summary tab above the results and the results will be presented with the horizontal bars and you will see a short description of each of the matching hits. Pick one of the hits near the top of the list and click on alignment, and in the new window click on "Graphics". This will bring you to a page that shows the sequence's location within the entire human genome. You can move the slider that looks like a colored flag back and forth to view the sequences immediately around the selected gene. You can then return to your selected sequence by clicking the "ATG" button.
{{< /callout >}}

## Use of Whole-Genome Sequences of Model Organisms

British biochemist and Nobel Prize winner Fred Sanger used a bacterial virus, the bacteriophage fx174 (5368 base pairs), to completely sequence the first genome. Other scientists later sequenced several other organelle and viral genomes. American biotechnologist, biochemist, geneticist, and businessman Craig Venter sequenced the bacterium *Haemophilus influenzae* in the 1980s. Approximately 74 different laboratories collaborated on sequencing the genome of the yeast *Saccharomyces cerevisiae*, which began in 1989 and was completed in 1996, because it was 60 times bigger than any other genome sequencing. By 1997, the genome sequences of two important model organisms were available: the bacterium *Escherichia coli* K12 and the yeast *Saccharomyces cerevisiae*. We now know the genomes of other model organisms, such as the mouse *Mus musculus*, the fruit fly *Drosophila melanogaster*, the nematode *Caenorhabditis. elegans*, and humans *Homo sapiens*. Researchers perform extensive basic research in model organisms because they can apply the information to genetically similar organisms. A **model organism** is a species that researchers use as a model to understand the biological processes in other species that the model organism represents. Having entire genomes sequenced helps with the research efforts in these model organisms. The process of attaching biological information to gene sequences is **genome annotation**. Annotating gene sequences helps with basic experiments in molecular biology, such as designing PCR primers and RNA targets.

{{< callout type="info" >}}
**Link to Learning.** Click through [each genome-sequencing step](https://openstax.org/l/DNA_sequence) at this interactive site.
{{< /callout >}}

## Genome Sequence Uses

**DNA microarrays** are methods that scientists use to detect gene expression by analyzing different DNA fragments that are fixed to a glass slide or a silicon chip to identify active genes and sequences. We can discover almost one million genotypic abnormalities using microarrays; whereas, whole-genome sequencing can provide information about all six billion base pairs in the human genome. Although studying genome sequencing with medical applications is interesting, this discipline dwells on abnormal gene function. Knowing about the entire genome will allow researchers to discover future onset diseases and other genetic disorders early. This will allow for more informed decisions about lifestyle, medication, and having children. Genomics is still in its infancy, although someday it may become routine to use whole-genome sequencing to screen every newborn to detect genetic abnormalities.

In addition to disease and medicine, genomics can contribute to developing novel enzymes that convert biomass to biofuel, which results in higher crop and fuel production, and lower consumer cost. This knowledge should allow better methods of control over the microbes that industry uses to produce biofuels. Genomics could also improve monitoring methods that measure the impact of pollutants on ecosystems and help clean up environmental contaminants. Genomics has aided in developing agrochemicals and pharmaceuticals that could benefit medical science and agriculture.

It sounds great to have all the knowledge we can get from whole-genome sequencing; however, humans have a responsibility to use this knowledge wisely. Otherwise, it could be easy to misuse the power of such knowledge, leading to discrimination based on a person's genetics, human genetic engineering, and other ethical concerns. This information could also lead to legal issues regarding health and privacy.

## Summary

Whole-genome sequencing is the latest available resource to treat genetic diseases. Some doctors are using whole-genome sequencing to save lives. Genomics has many industrial applications including biofuel development, agriculture, pharmaceuticals, and pollution control. The basic principle of all modern-day sequencing strategies involves the chain termination method of sequencing.

Although the human genome sequences provide key insights to medical professionals, researchers use whole-genome sequences of model organisms to better understand the species' genome. Automation and the decreased cost of whole-genome sequencing may lead to personalized medicine in the future.

## Key terms

- **chain termination method** — method of DNA sequencing using labeled dideoxynucleotides to terminate DNA replication; it is also called the dideoxy method or the Sanger method
- **contig** — larger sequence of DNA assembled from overlapping shorter sequences
- **deoxynucleotide** — individual DNA monomer (single unit)
- **dideoxynucleotide** — individual DNA monomer that is missing a hydroxyl group (–OH)
- **DNA microarray** — method to detect gene expression by analyzing many DNA fragments that are fixed to a glass slide or a silicon chip to identify active genes and identify sequences
- **genome annotation** — process of attaching biological information to gene sequences
- **model organism** — species that researchers study and use as a model to understand the biological processes in other species represented by the model organism
- **next-generation sequencing** — group of automated techniques for rapid DNA sequencing
- **shotgun sequencing** — method used to sequence multiple DNA fragments to generate the sequence of a large piece of DNA
- **whole-genome sequencing** — process that determines an entire genome's DNA sequence

## Practice

### Describe three types of sequencing

{{< multiplechoice
  question="The chain termination method of sequencing:"
  answer="uses labeled ddNTPs"
  hint="The section says only the ddNTPs, not the dNTPs, carry the fluorescent label that identifies where replication stopped."
>}}
uses labeled ddNTPs
uses only dideoxynucleotides
uses only deoxynucleotides
uses labeled dNTPs
{{< /multiplechoice >}}

{{< textin
  question="The DNA sequencing method that uses fluorescently labeled dideoxynucleotides to stop replication at different points along the template is called the ________."
  answer="chain termination method"
  accept="dideoxy method|Sanger method"
  hint="Fred Sanger developed this method in the 1970s; its own name describes what happens to the growing strand when a ddNTP is added."
>}}

{{< textin
  question="The method that cuts several copies of a DNA fragment into many random smaller pieces, sequences each piece, and reassembles the whole sequence by matching where the pieces' sequences overlap is called ________."
  answer="shotgun sequencing"
  hint="The section compares this to firing a shotgun cartridge — many random-sized pieces that get reassembled from their overlaps."
>}}

{{< textin
  question="The group of automated, low-cost DNA sequencing techniques used since 2005, able to generate hundreds of thousands to millions of short fragments in a single day, is called ________."
  answer="next-generation sequencing"
  accept="deep sequencing|massively parallel sequencing"
  hint="The section gives this group of techniques two other names — one about how deeply it reads, one about how many reads run at once."
>}}

{{< textin
  question="A larger DNA sequence assembled from overlapping shorter sequences is called a ________."
  answer="contig"
  accept="contigs"
  hint="In the section's torn-photograph analogy, this is the reconstructed picture built from the overlapping pieces."
>}}

### Define whole-genome sequencing

{{< multiplechoice
  question="Whole-genome sequencing can be used for advances in:"
  answer="all of the above"
  hint="The section lists medical, agricultural, and biofuel applications together — none of them rules out the others."
>}}
the medical field
agriculture
biofuels
all of the above
{{< /multiplechoice >}}

{{< multiplechoice
  question="Sequencing an individual person's genome"
  answer="all of the above"
  hint="The section says individual sequencing is available now, raises legal and privacy concerns, and can guide medical treatment — all three are true at once."
>}}
is currently possible
could lead to legal issues regarding discrimination and privacy
could help make informed choices about medical treatment
all of the above
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is the most challenging issue facing genome sequencing?"
  answer="the ethics of using information from genomes at the individual level"
  hint="The section's closing paragraph warns about discrimination, genetic engineering, and other ethical concerns from individual-level genome knowledge — not about sequencing speed or DNA's stability."
>}}
the inability to develop fast and accurate sequencing techniques
the ethics of using information from genomes at the individual level
the availability and stability of DNA
all of the above
{{< /multiplechoice >}}

{{< textin
  question="The process that determines the complete DNA sequence of an organism's entire genome is called ________."
  answer="whole-genome sequencing"
  hint="This is the process the section opens by naming, and the one whole-exome sequencing is a lower-cost alternative to."
>}}

{{< textin
  question="A species that researchers study and use as a stand-in to understand biological processes shared with other species is called a ________."
  answer="model organism"
  accept="model organisms"
  hint="The section names several examples — the mouse, the fruit fly, the nematode, and humans among them."
>}}

{{< textin
  question="The process of attaching biological information to gene sequences is called ________."
  answer="genome annotation"
  hint="This process follows sequencing a model organism's genome, and helps with tasks such as designing PCR primers and RNA targets."
>}}

---

<small>This section is adapted from [Biology 2e, Section 17.3: Whole-Genome Sequencing](https://openstax.org/books/biology-2e/pages/17-3-whole-genome-sequencing) by Mary Ann Clark, Jung Choi, Matthew Douglas, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/biology-2e). Changes: figures re-encoded as WebP; Figure_17_03_01-a947 re-kinded from the manifest's file-extension guess of "photo" to "diagram" (a drawn molecular schematic, not a photograph; Figure_B17_03_02's manifest guess of "diagram" was already correct and is set explicitly); both figures' alts rewritten to summarize the structure shown, with the full labeled walk-through (ring positions, phosphate chain, arrow order and colors, chromatogram) moved to a `longdesc`; the caption's ASCII apostrophe in "3' hydroxyl" set as a Unicode prime (3′); the evolution note rendered as an Evolution Connection callout with its title kept and the BLAST link kept with descriptive text; the interactive note rendered as a Link to Learning callout with descriptive link text in place of the source's bare "site" link text; the end-of-section Review Questions adapted into the closing interactive Practice block; seven key-term recall items (chain termination method, shotgun sequencing, next-generation sequencing, contig, whole-genome sequencing, model organism, genome annotation) added from the glossary, each prompt built from the glossary meaning without naming the term itself. No source exercise or key was found wrong or contradicted by the section text; no source defect required correction. One suspected defect in the module's own prose (not an exercise or key) is reported to the parent for the errata log: in "Use of Whole-Genome Sequences of Model Organisms," the nematode's binomial prints as *Caenorhabditis. elegans* — a stray period after the unabbreviated genus name, inconsistent with the other full binomials in the same sentence (*Mus musculus*, *Drosophila melanogaster*, *Homo sapiens*) — transcribed here exactly as printed in the CNXML and PDF pending the parent's adjudication.</small>
