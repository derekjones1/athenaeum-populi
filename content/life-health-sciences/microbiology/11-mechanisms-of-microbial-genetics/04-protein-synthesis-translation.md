---
title: Protein Synthesis (Translation)
description: >-
  The genetic code, the ribosomes, tRNAs, and enzymes of the translation
  machinery, and the initiation, elongation, and termination steps by which
  a ribosome converts an mRNA message into a polypeptide — adapted from
  OpenStax Microbiology, Section 11.4.
source_section: "11.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Describe the genetic code and explain why it is considered almost universal
- Explain the process of translation and the functions of the molecular machinery of translation
- Compare translation in eukaryotes and prokaryotes
{{< /callout >}}

The synthesis of proteins consumes more of a cell's energy than any other metabolic process. In turn, proteins account for more mass than any other macromolecule of living organisms. They perform virtually every function of a cell, serving as both functional (e.g., enzymes) and structural elements. The process of **translation**, or **protein synthesis**, the second part of gene expression, involves the decoding by a ribosome of an mRNA message into a polypeptide product.

## The Genetic Code

Translation of the mRNA template converts nucleotide-based genetic information into the "language" of amino acids to create a protein product. A protein sequence consists of 20 commonly occurring amino acids. Each amino acid is defined within the mRNA by a triplet of nucleotides called a **codon**. The relationship between an mRNA codon and its corresponding amino acid is called the **genetic code**.

The three-nucleotide code means that there is a total of 64 possible combinations ($4^3$, with four different nucleotides possible at each of the three different positions within the codon). This number is greater than the number of amino acids and a given amino acid is encoded by more than one codon (see the genetic code table below). This redundancy in the genetic code is called **degeneracy**. Typically, whereas the first two positions in a codon are important for determining which amino acid will be incorporated into a growing polypeptide, the third position, called the **wobble position**, is less critical. In some cases, if the nucleotide in the third position is changed, the same amino acid is still incorporated.

Whereas 61 of the 64 possible triplets code for amino acids, three of the 64 codons do not code for an amino acid; they terminate protein synthesis, releasing the polypeptide from the translation machinery. These are called **stop codons** or **nonsense codons**. Another codon, AUG, also has a special function. In addition to specifying the amino acid methionine, it also typically serves as the **start codon** to initiate translation. The **reading frame**, the way nucleotides in mRNA are grouped into codons, for translation is set by the AUG start codon near the 5′ end of the mRNA. Each set of three nucleotides following this start codon is a codon in the mRNA message.

The genetic code is nearly universal. With a few exceptions, virtually all species use the same genetic code for protein synthesis, which is powerful evidence that all extant life on earth shares a common origin. However, unusual amino acids such as selenocysteine and pyrrolysine have been observed in archaea and bacteria. In the case of selenocysteine, the codon used is UGA (normally a stop codon). However, UGA can encode for selenocysteine using a stem-loop structure (known as the selenocysteine insertion sequence, or SECIS element), which is found at the 3′ untranslated region of the mRNA. Pyrrolysine uses a different stop codon, UAG. The incorporation of pyrrolysine requires the *pylS* gene and a unique transfer RNA (tRNA) with a CUA anticodon.

{{< mediafigure src="microbiology/OSC_Microbio_11_04_GenCode" alt="A codon table with the first letter of the codon down the left side (U, C, A, G), the second letter across the top (U, C, A, G), and the third letter down the right side (U, C, A, G) of each row, so each row, column, and sub-row combination names one three-letter codon. Stop codons are printed in red and the start codon, AUG, is printed in green." longdesc="The table is a 4×4 grid of blocks, one block for each combination of the codon's first and second letters. Reading down the far-left column gives the first letter of the codon (U, C, A, or G); reading across the top row gives the second letter (U, C, A, or G); and reading down the third-letter column at the right edge of each row block gives the third letter (U, C, A, or G) for whichever line inside that block is being read. A codon is found by combining the row, column, and sub-row letters in that order, then reading the amino acid abbreviation — or, in the two red cells of that block, the word 'stop' — printed beside the group of codons that share it. The start codon, AUG, is picked out in green inside the third row block." kind="diagram" eager="true" >}}
This figure shows the genetic code for translating each nucleotide triplet in mRNA into an amino acid or a termination signal in a nascent protein. The first letter of a codon is shown vertically on the left, the second letter of a codon is shown horizontally across the top, and the third letter of a codon is shown vertically on the right. (credit: modification of work by National Institutes of Health)
{{< /mediafigure >}}

**Check Your Understanding**

{{< textin
  question="How many bases are in each codon?"
  answer="three"
  accept="3"
  hint="Recall the length of the nucleotide sequence that specifies one amino acid."
>}}

{{< multiplechoice
  question="Using the genetic code table above, what amino acid is coded for by the codon AAU?"
  answer="Asparagine"
  hint="Find the block for first letter A and second letter A, then read down to the sub-row for third letter U."
>}}
Threonine
Lysine
Asparagine
Serine
{{< /multiplechoice >}}

{{< selfcheck question="What happens when a stop codon is reached?" hint="Think about what is missing for a stop codon, and what that absence triggers." >}}
A stop codon (UAA, UAG, or UGA) has no complementary tRNA. On aligning with the A site, the nonsense codon is recognized by release factors in prokaryotes and eukaryotes, which cause the P-site amino acid to detach from its tRNA, releasing the newly made polypeptide. The small and large ribosomal subunits then dissociate from the mRNA and from each other.
===CHECKS===
A stop codon has no complementary tRNA
recognized by release factors
the P-site amino acid detaches from its tRNA, releasing the newly made polypeptide
the small and large ribosomal subunits dissociate from the mRNA and from each other
{{< /selfcheck >}}

## The Protein Synthesis Machinery

In addition to the mRNA template, many molecules and macromolecules contribute to the process of translation. The composition of each component varies across taxa; for instance, ribosomes may consist of different numbers of ribosomal RNAs (rRNAs) and polypeptides depending on the organism. However, the general structures and functions of the protein synthesis machinery are comparable from bacteria to human cells. Translation requires the input of an mRNA template, ribosomes, tRNAs, and various enzymatic factors.

### Ribosomes

A ribosome is a complex macromolecule composed of catalytic rRNAs (called ribozymes) and structural rRNAs, as well as many distinct polypeptides. Mature rRNAs make up approximately 50% of each ribosome. Prokaryotes have 70S ribosomes, whereas eukaryotes have 80S ribosomes in the cytoplasm and rough endoplasmic reticulum, and 70S ribosomes in mitochondria and chloroplasts. Ribosomes dissociate into large and small subunits when they are not synthesizing proteins and reassociate during the **initiation of translation**. In *E. coli*, the small subunit is described as 30S (which contains the 16S rRNA subunit), and the large subunit is 50S (which contains the 5S and 23S rRNA subunits), for a total of 70S (Svedberg units are not additive). Eukaryote ribosomes have a small 40S subunit (which contains the 18S rRNA subunit) and a large 60S subunit (which contains the 5S, 5.8S and 28S rRNA subunits), for a total of 80S. The small subunit is responsible for binding the mRNA template, whereas the large subunit binds tRNAs (discussed in the next subsection).

Each mRNA molecule is simultaneously translated by many ribosomes, all synthesizing protein in the same direction: reading the mRNA from 5′ to 3′ and synthesizing the polypeptide from the N terminus to the C terminus. The complete structure containing an mRNA with multiple associated ribosomes is called a **polyribosome** (or **polysome**). In both bacteria and archaea, before transcriptional termination occurs, each protein-encoding transcript is already being used to begin synthesis of numerous copies of the encoded polypeptide(s) because the processes of transcription and translation can occur concurrently, forming polyribosomes (see the figure below). The reason why transcription and translation can occur simultaneously is because both of these processes occur in the same 5′ to 3′ direction, they both occur in the cytoplasm of the cell, and because the RNA transcript is not processed once it is transcribed. This allows a prokaryotic cell to respond to an environmental signal requiring new proteins very quickly. In contrast, in eukaryotic cells, simultaneous transcription and translation is not possible. Although polyribosomes also form in eukaryotes, they cannot do so until RNA synthesis is complete and the RNA molecule has been modified and transported out of the nucleus.

{{< mediafigure src="microbiology/OSC_Microbio_11_04_Cotrantxn" alt="A double strand of DNA with an RNA polymerase enzyme partway along it, spinning out a single new RNA strand. Behind the enzyme, ribosomes have already attached to the growing RNA and are assembling polypeptide chains; farther still from the enzyme, where the RNA is longest, a row of many ribosomes is bound along it, one behind another." longdesc="At the left, a boxed close-up shows RNA polymerase, drawn as a large oval, sitting on double-stranded DNA (labeled 3′ and 5′ on the upper strand, 5′ and 3′ on the lower) and spinning out a single magenta RNA strand — labeled mRNA, with its free 5′ end already carrying one ribosome that is translating a short polypeptide. An arrow points from this boxed panel to a wider view at the right: RNA polymerase molecules run left to right along the DNA in the direction of transcription; behind each one, progressively longer magenta mRNA strands trail off in the direction of translation, each strand studded with a row of ribosomes — more ribosomes on the longer, older strands — forming a polyribosome." kind="diagram" >}}
In prokaryotes, multiple RNA polymerases can transcribe a single bacterial gene while numerous ribosomes concurrently translate the mRNA transcripts into polypeptides. In this way, a specific protein can rapidly reach a high concentration in the bacterial cell.
{{< /mediafigure >}}

### Transfer RNAs

Transfer RNAs (tRNAs) are structural RNA molecules and, depending on the species, many different types of tRNAs exist in the cytoplasm. Bacterial species typically have between 60 and 90 types. Serving as adaptors, each tRNA type binds to a specific codon on the mRNA template and adds the corresponding amino acid to the polypeptide chain. Therefore, tRNAs are the molecules that actually "translate" the language of RNA into the language of proteins. As the adaptor molecules of translation, it is surprising that tRNAs can fit so much specificity into such a small package. The tRNA molecule interacts with three factors: aminoacyl tRNA synthetases, ribosomes, and mRNA.

Mature tRNAs take on a three-dimensional structure when complementary bases exposed in the single-stranded RNA molecule hydrogen bond with each other (see the figure below). This shape positions the amino-acid binding site, called the **CCA amino acid binding end**, which is a cytosine-cytosine-adenine sequence at the 3′ end of the tRNA, and the **anticodon** at the other end. The anticodon is a three-nucleotide sequence that bonds with an mRNA codon through complementary base pairing.

An amino acid is added to the end of a tRNA molecule through the process of tRNA "charging," during which each tRNA molecule is linked to its correct or **cognate amino acid** by a group of enzymes called **aminoacyl tRNA synthetases**. At least one type of aminoacyl tRNA synthetase exists for each of the 20 amino acids. During this process, the amino acid is first activated by the addition of adenosine monophosphate (AMP) and then transferred to the tRNA, making it a **charged tRNA**, and AMP is released.

{{< mediafigure src="microbiology/OSC_Microbio_11_04_tRNA" alt="Three drawings of the same tRNA molecule. (a) A single strand folds into a cross-like shape; one end, the amino acid attachment site, carries the sequence ACC, and the opposite end carries a three-letter anticodon paired with a codon on a strand of mRNA below it. (b) A space-filling molecular model of the same tRNA, shaped like the letter L. (c) A simplified zigzag line drawing of the same tRNA." longdesc="(a) The folded strand's 3′ end sits at the top of the amino-acid-attachment arm and reads A-C-C; the 5′ end is also at the top, on the neighboring arm. Following the strand down from the fold, the base of the cross carries a three-letter anticodon, shown paired by short dashed lines to a complementary three-letter codon printed on the mRNA strand just below, which is itself labeled 5′ at the left and 3′ at the right. (b) The same molecule rendered as a space-filling model, narrow at the amino-acid-attachment end and widening toward the anticodon end. (c) The same molecule reduced to a single zigzag line, labeled at the same two ends." kind="diagram" >}}
(a) After folding caused by intramolecular base pairing, a tRNA molecule has one end that contains the anticodon, which interacts with the mRNA codon, and the CCA amino acid binding end. (b) A space-filling model is helpful for visualizing the three-dimensional shape of tRNA. (c) Simplified models are useful when drawing complex processes such as protein synthesis.
{{< /mediafigure >}}

**Check Your Understanding**

{{< selfcheck question="Describe the structure and composition of the prokaryotic ribosome." hint="Give its overall size class, then the size and rRNA content of each of its two subunits." >}}
A prokaryotic ribosome is a 70S ribosome, a complex macromolecule composed of catalytic rRNAs (ribozymes) and structural rRNAs, as well as many distinct polypeptides; mature rRNAs make up approximately 50% of each ribosome. In *E. coli*, it dissociates into a small 30S subunit, which contains the 16S rRNA subunit, and a large 50S subunit, which contains the 5S and 23S rRNA subunits. The small subunit binds the mRNA template, and the large subunit binds tRNAs.
===CHECKS===
a 70S ribosome
composed of catalytic rRNAs (ribozymes) and structural rRNAs, as well as many distinct polypeptides
a small 30S subunit, which contains the 16S rRNA subunit
a large 50S subunit, which contains the 5S and 23S rRNA subunits
{{< /selfcheck >}}

{{< multiplechoice
  question="In what direction is the mRNA template read?"
  answer="5′ to 3′"
  hint="All ribosomes translating a given mRNA move along it in the same direction, reading toward its 3′ end."
>}}
3′ to 5′
5′ to 3′
Either direction, depending on the ribosome
5′ to 3′ in prokaryotes, 3′ to 5′ in eukaryotes
{{< /multiplechoice >}}

{{< selfcheck question="Describe the structure and function of a tRNA." hint="Name the two functional ends of the folded molecule and what each one does." >}}
A tRNA is a structural RNA molecule that takes on a three-dimensional shape when complementary bases exposed in the single strand hydrogen bond with each other. This shape positions the CCA amino acid binding end, a cytosine-cytosine-adenine sequence at the 3′ end of the tRNA, at one end, and the anticodon at the other. The anticodon is a three-nucleotide sequence that bonds with an mRNA codon through complementary base pairing, and the amino acid binding end carries the tRNA's cognate amino acid once the tRNA is charged.
===CHECKS===
a three-dimensional shape when complementary bases hydrogen bond with each other
the CCA amino acid binding end, a cytosine-cytosine-adenine sequence at the 3′ end
the anticodon bonds with an mRNA codon through complementary base pairing
the amino acid binding end carries the tRNA's cognate amino acid once charged
{{< /selfcheck >}}

## The Mechanism of Protein Synthesis

Translation is similar in prokaryotes and eukaryotes. Here we will explore how translation occurs in *E. coli*, a representative prokaryote, and specify any differences between bacterial and eukaryotic translation.

### Initiation

The **initiation of protein synthesis** begins with the formation of an initiation complex. In *E. coli*, this complex involves the small 30S ribosome, the mRNA template, three **initiation factors** that help the ribosome assemble correctly, guanosine triphosphate (GTP) that acts as an energy source, and a special initiator tRNA carrying *N*-formyl-methionine (fMet-tRNA<sup>fMet</sup>) (see the figure below). The initiator tRNA interacts with the start codon AUG of the mRNA and carries a formylated methionine (fMet). Because of its involvement in initiation, fMet is inserted at the beginning (N terminus) of every polypeptide chain synthesized by *E. coli*. In *E. coli* mRNA, a leader sequence upstream of the first AUG codon, called the Shine-Dalgarno sequence (also known as the ribosomal binding site AGGAGG), interacts through complementary base pairing with the rRNA molecules that compose the ribosome. This interaction anchors the 30S ribosomal subunit at the correct location on the mRNA template. At this point, the 50S ribosomal subunit then binds to the initiation complex, forming an intact ribosome.

In eukaryotes, initiation complex formation is similar, with the following differences:

- The initiator tRNA is a different specialized tRNA carrying methionine, called Met-tRNAi
- Instead of binding to the mRNA at the Shine-Dalgarno sequence, the eukaryotic initiation complex recognizes the 5′ cap of the eukaryotic mRNA, then tracks along the mRNA in the 5′ to 3′ direction until the AUG start codon is recognized. At this point, the 60S subunit binds to the complex of Met-tRNAi, mRNA, and the 40S subunit.

{{< mediafigure src="microbiology/OSC_Microbio_11_04_TlnInit" alt="A diagram of bacterial translation in three labeled stages. Initiation shows a tRNA carrying the first amino acid binding the start codon AUG alongside the small and large ribosomal subunits. Elongation shows tRNAs adding amino acids one by one to a growing polypeptide chain, moving through the ribosome's E, P, and A sites. Termination shows a release factor recognizing the stop codon UAG, the completed polypeptide separating, and the ribosomal subunits dissociating and recycling." longdesc="At the upper left, a tRNA carrying the first amino acid and bearing the anticodon UAC approaches the mRNA at its start codon, AUG, together with the small ribosomal subunit (drawn as a flat oval) and the large ribosomal subunit (drawn as a dome); the same mRNA strand shows a stop codon, UAG, further along toward its 3′ end. Below, three panels run left to right. In INITIATION, the initiation complex has formed: the tRNA sits in the middle (P) of the ribosome's three sites, which run E, P, A from left to right at the start codon. In ELONGATION, tRNAs add amino acids one by one: a tRNA carrying a long chain of linked circles occupies the P site, a tRNA carrying a single circle occupies the A site, and an empty tRNA is leaving the E site. In TERMINATION, a release factor (drawn in red) has bound the stop codon UAG, now aligned with the A site; the completed polypeptide chain and the release factor separate from the ribosome. A curved arrow labeled 'Components are recycled' returns the dissociated subunits to the upper-left starting point." kind="diagram" >}}
Translation in bacteria begins with the formation of the initiation complex, which includes the small ribosomal subunit, the mRNA, the initiator tRNA carrying N-formyl-methionine, and initiation factors. Then the 50S subunit binds, forming an intact ribosome.
{{< /mediafigure >}}

### Elongation

In prokaryotes and eukaryotes, the basics of **elongation of translation** are the same. In *E. coli*, the binding of the 50S ribosomal subunit to produce the intact ribosome forms three functionally important ribosomal sites: The **A (aminoacyl) site** binds incoming charged aminoacyl tRNAs. The **P (peptidyl) site** binds charged tRNAs carrying amino acids that have formed peptide bonds with the growing polypeptide chain but have not yet dissociated from their corresponding tRNA. The **E (exit) site** releases dissociated tRNAs so that they can be recharged with free amino acids. There is one notable exception to this assembly line of tRNAs: During initiation complex formation, bacterial fMet-tRNA<sup>fMet</sup> or eukaryotic Met-tRNAi enters the P site directly without first entering the A site, providing a free A site ready to accept the tRNA corresponding to the first codon after the AUG.

Elongation proceeds with single-codon movements of the ribosome each called a translocation event. During each translocation event, the charged tRNAs enter at the A site, then shift to the P site, and then finally to the E site for removal. Ribosomal movements, or steps, are induced by conformational changes that advance the ribosome by three bases in the 3′ direction. Peptide bonds form between the amino group of the amino acid attached to the A-site tRNA and the carboxyl group of the amino acid attached to the P-site tRNA. The formation of each peptide bond is catalyzed by **peptidyl transferase**, an RNA-based ribozyme that is integrated into the 50S ribosomal subunit. The amino acid bound to the P-site tRNA is also linked to the growing polypeptide chain. As the ribosome steps across the mRNA, the former P-site tRNA enters the E site, detaches from the amino acid, and is expelled. Several of the steps during elongation, including binding of a charged aminoacyl tRNA to the A site and translocation, require energy derived from GTP hydrolysis, which is catalyzed by specific elongation factors. Amazingly, the *E. coli* translation apparatus takes only 0.05 seconds to add each amino acid, meaning that a 200 amino-acid protein can be translated in just 10 seconds.

### Termination

The **termination of translation** occurs when a **nonsense codon** (UAA, UAG, or UGA) is encountered for which there is no complementary tRNA. On aligning with the A site, these nonsense codons are recognized by release factors in prokaryotes and eukaryotes that result in the P-site amino acid detaching from its tRNA, releasing the newly made polypeptide. The small and large ribosomal subunits dissociate from the mRNA and from each other; they are recruited almost immediately into another translation initiation complex.

In summary, there are several key features that distinguish prokaryotic gene expression from that seen in eukaryotes. These are illustrated in the figure below and listed in the table below.

{{< mediafigure src="microbiology/OSC_Microbio_11_04_ProkEuk" alt="Two diagrams comparing gene expression in a prokaryote and a eukaryote. (a) In the prokaryotic cell, DNA lies free in the cytoplasm; mRNA is transcribed from it and ribosomes translate the mRNA into protein at the same time and place. (b) In the eukaryotic cell, DNA lies inside a nucleus bounded by a nuclear membrane; pre-mRNA is transcribed there and processed into mature mRNA, which then leaves the nucleus for the cytoplasm, where ribosomes translate it into protein." longdesc="(a) The prokaryotic cell is bounded by a single plasma membrane; a wavy DNA strand loops through the cytoplasm and gives rise to an mRNA strand still being synthesized, which is already studded with ribosomes translating it into a protein chain — transcription and translation shown occurring together in the same open space. (b) The eukaryotic cell has an outer plasma membrane and, within it, a separate nucleus bounded by its own nuclear membrane; inside the nucleus a DNA strand gives rise to a pre-mRNA strand that is processed into a mature mRNA, which then crosses into the cytoplasm, where ribosomes translate it into a protein chain — transcription and translation shown as separated in space." kind="diagram" >}}
(a) In prokaryotes, the processes of transcription and translation occur simultaneously in the cytoplasm, allowing for a rapid cellular response to an environmental cue. (b) In eukaryotes, transcription is localized to the nucleus and translation is localized to the cytoplasm, separating these processes and necessitating RNA processing for stability.
{{< /mediafigure >}}

| Property | Bacteria | Eukaryotes |
|---|---|---|
| Ribosomes | 70S | 80S |
| Small subunit | 30S (16S rRNA subunit) | 40S (18S rRNA subunit) |
| Large subunit | 50S (5S and 23S rRNA subunits) | 60S (5S, 5.8S, and 28S rRNA subunits) |
| Amino acid carried by initiator tRNA | fMet | Met |
| Shine-Dalgarno sequence in mRNA | Present | Absent |
| Simultaneous transcription and translation | Yes | No |

{{< mediafigure src="microbiology/OSC_Microbio_11_04_ComTranTbl" alt="A table titled Comparison of Translation in Bacteria Versus Eukaryotes, with a Property column and Bacteria and Eukaryotes columns giving each property's value for the two groups." kind="diagram" >}}
{{< /mediafigure >}}

## Protein Targeting, Folding, and Modification

During and after translation, polypeptides may need to be modified before they are biologically active. Post-translational modifications include:

1. removal of translated signal sequences—short tails of amino acids that aid in directing a protein to a specific cellular compartment
2. proper "folding" of the polypeptide and association of multiple polypeptide subunits, often facilitated by chaperone proteins, into a distinct three-dimensional structure
3. proteolytic processing of an inactive polypeptide to release an active protein component, and
4. various chemical modifications (e.g., phosphorylation, methylation, or glycosylation) of individual amino acids.

**Check Your Understanding**

{{< selfcheck question="What are the components of the initiation complex for translation in prokaryotes?" hint="List every molecule and macromolecule the module names as forming the complex, not only the two ribosomal subunits." >}}
The initiation complex in *E. coli* involves the small 30S ribosome, the mRNA template, three initiation factors that help the ribosome assemble correctly, guanosine triphosphate (GTP) that acts as an energy source, and a special initiator tRNA carrying N-formyl-methionine (fMet-tRNA<sup>fMet</sup>). The 50S ribosomal subunit then binds to this complex, forming an intact ribosome.
===CHECKS===
the small 30S ribosome
three initiation factors that help the ribosome assemble correctly
guanosine triphosphate (GTP) that acts as an energy source
a special initiator tRNA carrying N-formyl-methionine
{{< /selfcheck >}}

{{< sortbins
  question="What are two differences between initiation of prokaryotic and eukaryotic translation? Sort each phrase under the type of initiation it describes."
  hint="One difference is which amino acid the initiator tRNA carries; the other is what sequence on the mRNA the ribosome recognizes."
>}}
{"bins": ["Prokaryotic initiation", "Eukaryotic initiation"],
 "items": [
  {"label": "Initiator tRNA carries N-formyl-methionine (fMet)", "bin": 0},
  {"label": "Initiator tRNA carries methionine, called Met-tRNAi", "bin": 1},
  {"label": "Ribosome binds the mRNA at the Shine-Dalgarno sequence", "bin": 0},
  {"label": "Ribosome recognizes the 5′ cap of the mRNA", "bin": 1}]}
{{< /sortbins >}}

**Check Your Understanding**

{{< selfcheck question="What occurs at each of the three active sites of the ribosome?" hint="Give the A, P, and E sites in that order, in the order a tRNA passes through them." >}}
The A (aminoacyl) site binds incoming charged aminoacyl tRNAs. The P (peptidyl) site binds charged tRNAs carrying amino acids that have formed peptide bonds with the growing polypeptide chain but have not yet dissociated from their corresponding tRNA. The E (exit) site releases dissociated tRNAs so that they can be recharged with free amino acids.
===CHECKS===
The A site binds incoming charged aminoacyl tRNAs
The P site binds charged tRNAs that have formed peptide bonds with the growing polypeptide chain
The E site releases dissociated tRNAs so that they can be recharged
{{< /selfcheck >}}

{{< selfcheck question="What causes termination of translation?" hint="Name the kind of codon involved and what it lacks that lets release factors act." >}}
Termination occurs when a nonsense codon (UAA, UAG, or UGA) is encountered for which there is no complementary tRNA. On aligning with the A site, the nonsense codon is recognized by release factors in prokaryotes and eukaryotes, causing the P-site amino acid to detach from its tRNA and releasing the newly made polypeptide.
===CHECKS===
a nonsense codon (UAA, UAG, or UGA) for which there is no complementary tRNA
recognized by release factors
the P-site amino acid detaches, releasing the newly made polypeptide
{{< /selfcheck >}}

## Summary

- In **translation**, polypeptides are synthesized using mRNA sequences and cellular machinery, including tRNAs that match mRNA **codons** to specific amino acids and ribosomes composed of RNA and proteins that catalyze the reaction.
- The **genetic code** is **degenerate** in that several mRNA codons code for the same amino acids. The genetic code is almost universal among living organisms.
- Prokaryotic (70S) and cytoplasmic eukaryotic (80S) ribosomes are each composed of a large subunit and a small subunit of differing sizes between the two groups. Each subunit is composed of rRNA and protein. Organelle ribosomes in eukaryotic cells resemble prokaryotic ribosomes.
- Some 60 to 90 species of tRNA exist in bacteria. Each tRNA has a three-nucleotide **anticodon** as well as a binding site for a **cognate amino acid**. All tRNAs with a specific anticodon will carry the same amino acid.
- **Initiation** of translation occurs when the small ribosomal subunit binds with **initiation factors** and an initiator tRNA at the **start codon** of an mRNA, followed by the binding to the initiation complex of the large ribosomal subunit.
- In prokaryotic cells, the start codon codes for N-formyl-methionine carried by a special initiator tRNA. In eukaryotic cells, the start codon codes for methionine carried by a special initiator tRNA. In addition, whereas ribosomal binding of the mRNA in prokaryotes is facilitated by the Shine-Dalgarno sequence within the mRNA, eukaryotic ribosomes bind to the 5′ cap of the mRNA.
- During the **elongation** stage of translation, a **charged tRNA** binds to mRNA in the **A site** of the ribosome; a peptide bond is catalyzed between the two adjacent amino acids, breaking the bond between the first amino acid and its tRNA; the ribosome moves one codon along the mRNA; and the first tRNA is moved from the **P site** of the ribosome to the **E site** and leaves the ribosomal complex.
- **Termination** of translation occurs when the ribosome encounters a **stop codon**, which does not code for a tRNA. Release factors cause the polypeptide to be released, and the ribosomal complex dissociates.
- In prokaryotes, transcription and translation may be coupled, with translation of an mRNA molecule beginning as soon as transcription allows enough mRNA exposure for the binding of a ribosome, prior to transcription termination. Transcription and translation are not coupled in eukaryotes because transcription occurs in the nucleus, whereas translation occurs in the cytoplasm or in association with the rough endoplasmic reticulum.
- Polypeptides often require one or more **post-translational modifications** to become biologically active.

## Key terms

- **translation** — process of protein synthesis whereby a ribosome decodes an mRNA message into a polypeptide product.
- **protein synthesis** — process of protein synthesis whereby a ribosome decodes an mRNA message into a polypeptide product.
- **codon** — three-nucleotide sequence within mRNA that specifies a particular amino acid to be incorporated into the polypeptide being synthesized.
- **genetic code** — correspondence between mRNA nucleotide codons and the translated amino acids.
- **degeneracy** — redundancy in the genetic code because a given amino acid is encoded by more than one nucleotide triplet codon.
- **wobble position** — third position of a codon that, when changed, typically results in the incorporation of the same amino acid because of the degeneracy of the genetic code.
- **stop codons** — one of three codons for which there is no tRNA with a complementary anticodon; a signal within the mRNA for termination of translation.
- **nonsense codons** — codons for which there is no tRNA with a complementary anticodon; a signal within the mRNA for termination of translation.
- **start codon** — AUG codon, specifying methionine, which is typically the codon that initiates translation.
- **reading frame** — way nucleotides in mRNA are grouped into codons.
- **initiation of translation** — stage of translation during which an initiation complex composed of the small ribosomal subunit, the mRNA template, initiation factors, GTP, and a special initiator tRNA forms, and the large ribosomal subunit then binds to the initiation complex.
- **polyribosome** — structure including an mRNA molecule that is being translated by multiple ribosomes concurrently.
- **polysome** — structure including an mRNA molecule that is being translated by multiple ribosomes concurrently.
- **CCA amino acid binding end** — region of a mature tRNA that binds to an amino acid.
- **anticodon** — three-nucleotide sequence of a mature tRNA that interacts with an mRNA codon through complementary base pairing.
- **cognate amino acid** — amino acid added to a specific tRNA molecule that correctly corresponds to the tRNA's anticodon and, hence, the mRNA's codon, reflecting the genetic code.
- **aminoacyl tRNA synthetase** — enzyme that binds to a tRNA molecule and catalyzes the addition of the correct amino acid to the tRNA.
- **charged tRNA** — activated tRNA molecule carrying its cognate amino acid.
- **initiation of protein synthesis** — beginning of translation with the formation of an initiation complex composed of the small ribosomal subunit, the mRNA template, initiation factors, GTP, and a special initiator tRNA.
- **initiation factors** — proteins that participate in ribosome assembly during initiation.
- **elongation of translation** — stage of translation during which amino acids are added one by one to the C-terminus of the growing polypeptide.
- **A (aminoacyl) site** — functional site of an intact ribosome that binds incoming charged aminoacyl tRNAs.
- **P (peptidyl) site** — functional site of an intact ribosome that binds charged tRNAs carrying amino acids that have formed peptide bonds with the growing polypeptide chain but have not yet dissociated from their corresponding tRNA.
- **E (exit) site** — functional site of an intact ribosome that releases dissociated uncharged tRNAs so that they can be recharged with free amino acids.
- **peptidyl transferase** — RNA-based ribozyme that is part of the 50S ribosomal subunit and catalyzes formation of the peptide bond between the amino acid bound to a tRNA and the growing polypeptide chain.
- **termination of translation** — stage of translation during which a nonsense codon aligns with the A site, signaling release factors to release of the polypeptide, leading to the dissociation of the small and large ribosomal subunits from the mRNA and from each other.

## Practice

### Describe the genetic code and explain why it is considered almost universal

{{< multiplechoice
  question="Which of the following is the name of the three-base sequence in the mRNA that binds to a tRNA molecule?"
  answer="codon"
  hint="This sequence sits on the mRNA, not on the tRNA."
>}}
P site
codon
anticodon
CCA binding site
{{< /multiplechoice >}}

{{< multiplechoice
  question="Each codon within the genetic code encodes a different amino acid."
  answer="False"
  hint="Recall how many codons exist compared with how many amino acids are commonly incorporated into proteins."
>}}
True
False
{{< /multiplechoice >}}

{{< textin
  question="The third position within a codon, in which changes often result in the incorporation of the same amino acid into the growing polypeptide, is called the ________."
  answer="wobble position"
  accept="wobble"
  hint="This position is less critical than the first two for determining the amino acid."
>}}

{{< selfcheck question="What is meant by the genetic code being nearly universal?" hint="State the shared-code claim itself, then name the exceptions the module describes." >}}
The genetic code is nearly universal because, with a few exceptions, virtually all species use the same genetic code for protein synthesis — powerful evidence that all extant life on earth shares a common origin. The exceptions are unusual amino acids such as selenocysteine and pyrrolysine, observed in archaea and bacteria: selenocysteine is encoded by UGA (normally a stop codon) using a stem-loop structure called the selenocysteine insertion sequence (SECIS element), and pyrrolysine uses the stop codon UAG, requiring the *pylS* gene and a unique tRNA with a CUA anticodon.
===CHECKS===
virtually all species use the same genetic code for protein synthesis
powerful evidence that all extant life on earth shares a common origin
selenocysteine is encoded by UGA using a stem-loop structure called the selenocysteine insertion sequence
pyrrolysine uses the stop codon UAG, requiring the pylS gene and a unique tRNA with a CUA anticodon
{{< /selfcheck >}}

{{< selfcheck question="Prior to the elucidation of the genetic code, prominent scientists, including Francis Crick, had predicted that each mRNA codon, coding for one of the 20 amino acids, needed to be at least three nucleotides long. Why is it not possible for codons to be any shorter?" hint="Work out how many combinations a one- or two-nucleotide code would allow, using four possible nucleotides at each position." >}}
A codon must specify one of 20 amino acids using only four possible nucleotides at each position. A one-nucleotide code would give only $4^1$, or four, possible combinations — far fewer than 20. A two-nucleotide code would give only $4^2$, or sixteen, possible combinations — still fewer than 20. Only a three-nucleotide code, with $4^3$, or sixty-four, possible combinations, is large enough to specify all 20 amino acids.
===CHECKS===
A codon must specify one of 20 amino acids using only four possible nucleotides at each position
A one-nucleotide code would give only four possible combinations
A two-nucleotide code would give only sixteen possible combinations
Only a three-nucleotide code, with sixty-four possible combinations, is large enough to specify all 20 amino acids
{{< /selfcheck >}}

{{< selfcheck question="Below is an antisense DNA sequence. Translate the mRNA molecule synthesized using the genetic code, recording the resulting amino acid sequence, indicating the N and C termini. Antisense DNA strand: `3′-TACTGACTGACGATC-5′`" hint="Pair each template base with its RNA complement (T pairs with A, A with U, C with G, G with C) in order, then read the resulting mRNA in codons from its 5′ end." >}}
Pairing each base of the antisense (template) strand with its RNA complement, in order, gives the mRNA `5′-AUGACUGACUGCUAG-3′`. Reading this from the 5′ end in codons: AUG, ACU, GAC, UGC, UAG. Using the genetic code, AUG codes for methionine (the start codon), ACU codes for threonine, GAC codes for aspartate, UGC codes for cysteine, and UAG is a stop codon. The resulting polypeptide, from the N terminus to the C terminus, is methionine–threonine–aspartate–cysteine; translation terminates at the UAG stop codon, so no amino acid is added for it.
===CHECKS===
Pairing each base of the antisense strand with its RNA complement gives the mRNA 5′-AUGACUGACUGCUAG-3′
AUG codes for methionine (the start codon)
ACU codes for threonine, GAC codes for aspartate, UGC codes for cysteine
the polypeptide, N to C terminus, is methionine–threonine–aspartate–cysteine, and UAG is a stop codon
{{< /selfcheck >}}

### Explain the process of translation and the functions of the molecular machinery of translation

{{< multiplechoice
  question="Which component is the last to join the initiation complex during the initiation of translation?"
  answer="the large ribosomal subunit"
  hint="The small subunit, mRNA, and initiator tRNA assemble first; one component completes the intact ribosome."
>}}
the mRNA molecule
the small ribosomal subunit
the large ribosomal subunit
the initiator tRNA
{{< /multiplechoice >}}

{{< multiplechoice
  question="During elongation in translation, to which ribosomal site does an incoming charged tRNA molecule bind?"
  answer="A site"
  hint="This is the first of the three functional sites a charged tRNA passes through."
>}}
A site
P site
E site
B site
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which of the following is the amino acid that appears at the N-terminus of all newly translated prokaryotic and eukaryotic polypeptides?"
  answer="methionine"
  hint="This is the amino acid carried by the initiator tRNA that recognizes the start codon."
>}}
tryptophan
methionine
selenocysteine
glycine
{{< /multiplechoice >}}

{{< multiplechoice
  question="When the ribosome reaches a nonsense codon, which of the following occurs?"
  answer="the polypeptide is released"
  hint="No tRNA carries an anticodon complementary to a nonsense codon."
>}}
a methionine is incorporated
the polypeptide is released
a peptide bond forms
the A site binds to a charged tRNA
{{< /multiplechoice >}}

{{< textin
  question="The enzyme that adds an amino acid to a tRNA molecule is called ________."
  answer="aminoacyl-tRNA synthetase"
  hint="At least one type of this enzyme exists for each of the 20 amino acids."
>}}

{{< mediafigure src="microbiology/OSC_Microbio_11_04_TransComp_img" alt="A ribosome drawn as a dome sitting above a horizontal strand of many lettered bases, with a smaller oval beneath the dome. Two zigzag shapes sit inside the dome, one connected to a rising chain of linked circles near the top of the figure; a third zigzag shape, carrying a single small circle, sits to the left of the dome and touches one three-letter group on the strand. An arrow beneath the strand points to the right. Nine leader lines, lettered A through I, point to these parts and to a three-letter group at the base of the left-hand zigzag shape." kind="diagram" >}}
Label the following in the figure: ribosomal E, P, and A sites; mRNA; codons; anticodons; growing polypeptide; incoming amino acid; direction of translocation; small ribosomal unit; large ribosomal unit.
{{< /mediafigure >}}

{{< selfcheck question="Using the figure above, match each lettered leader line to the part of translation it points to." hint="Work from the mRNA at the bottom of the figure upward into the ribosome." >}}
Reading the leader lines on the drawing: G marks the mRNA, the long strand running along the bottom of the figure, and D marks the codons, the three-nucleotide groups printed on it. Letter C has three leader lines, one to each of the ribosome's three tRNA-occupied positions; reading them in the order they fall along the mRNA's 5′→3′ direction (left to right, the direction of translocation), they are the E (exit) site, the P (peptidyl) site, and the A (aminoacyl) site. H marks the anticodons at the base of the tRNAs occupying those sites. A marks the growing polypeptide chain, held by the tRNA in the P site, and B marks the incoming amino acid, carried by the tRNA in the A site. F marks the arrow showing the direction of translocation along the mRNA. I marks the large ribosomal subunit, the dome-shaped body of the ribosome, and the drawing's letter E marks the small ribosomal subunit beneath it.
===CHECKS===
G marks the mRNA and D marks the codons on it
Letter C's three leader lines point, in the order they fall along the mRNA's 5′→3′ direction, to the E site, the P site, and the A site
H marks the anticodons at the base of the tRNAs occupying those sites
A marks the growing polypeptide chain, held by the tRNA in the P site, and B marks the incoming amino acid, carried by the tRNA in the A site
F marks the arrow showing the direction of translocation along the mRNA
I marks the large ribosomal subunit, and the drawing's letter E marks the small ribosomal subunit
{{< /selfcheck >}}

### Compare translation in eukaryotes and prokaryotes

{{< sortbins
  question="Sort each property below under whether it describes translation in bacteria or in eukaryotes, using the comparison table above."
  hint="Ribosome and subunit sizes, the initiator amino acid, the Shine-Dalgarno sequence, and the timing of transcription and translation all differ between the two groups."
>}}
{"bins": ["Bacteria", "Eukaryotes"],
 "items": [
  {"label": "70S ribosomes", "bin": 0},
  {"label": "80S ribosomes", "bin": 1},
  {"label": "30S small subunit with 16S rRNA", "bin": 0},
  {"label": "40S small subunit with 18S rRNA", "bin": 1},
  {"label": "50S large subunit with 5S and 23S rRNA", "bin": 0},
  {"label": "60S large subunit with 5S, 5.8S, and 28S rRNA", "bin": 1},
  {"label": "Initiator tRNA carries fMet", "bin": 0},
  {"label": "Initiator tRNA carries Met", "bin": 1},
  {"label": "Shine-Dalgarno sequence present in the mRNA", "bin": 0},
  {"label": "No Shine-Dalgarno sequence in the mRNA", "bin": 1},
  {"label": "Transcription and translation occur simultaneously", "bin": 0},
  {"label": "Transcription and translation do not occur simultaneously", "bin": 1}]}
{{< /sortbins >}}

{{< textin
  question="Transcription and translation are not coupled in eukaryotes because transcription occurs in the ________, whereas translation occurs in the cytoplasm."
  answer="nucleus"
  hint="This is the membrane-bound compartment that separates the two processes in eukaryotic cells."
>}}

{{< textin
  question="Eukaryotic ribosomes located in the mitochondria and chloroplasts are ________, the same size class as prokaryotic ribosomes."
  answer="70S"
  accept="70 S"
  hint="Organelle ribosomes in eukaryotic cells resemble prokaryotic ribosomes, not the 80S ribosomes of the surrounding cytoplasm."
>}}

---

<small>This section is adapted from [Microbiology, Section 11.4: Protein Synthesis (Translation)](https://openstax.org/books/microbiology/pages/11-4-protein-synthesis-translation) by Nina Parker, Mark Schneegurt, Anh-Hue Thi Tu, Philip Lister, Brian M. Forster, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/microbiology). Changes: figures re-encoded as WebP; alts rewritten from the vendored images rather than copied from the source (the source alts for the genetic-code table, the co-transcriptional-translation diagram, the tRNA panels, the initiation/elongation/termination diagram, and the prokaryote/eukaryote diagram carry typos and are supplemented here with a `longdesc` walking each figure's steps or labels; the genetic-code table's `longdesc` explains how to read the table rather than listing all 64 codons); the *Comparison of Translation in Bacteria Versus Eukaryotes* figure, which prints no source caption, is transcribed as a Markdown table (its own `sortbins` under the third objective) and kept as a figure with no caption line; the ten body Check Your Understanding bullets (three boxes of three, three, and four) are rendered as body items at each note's position — 4 graded (`textin`, `multiplechoice`, `sortbins`) from this module's own sentences, table, and genetic-code figure, and 6 left as self-checks whose model answers are drawn from this section's text; of the source's four unkeyed Short Answer and two unkeyed Critical Thinking questions, 1 is graded from this module's own text and table (the prokaryote/eukaryote Short Answer, converted to the *Bacteria*/*Eukaryotes* `sortbins` fed by the comparison table), 4 stay self-checks with model answers assembled from this section's own text (the "nearly universal" question, including its selenocysteine/pyrrolysine exceptions; the antisense-strand translation, fully worked from the genetic-code table above; why codons cannot be shorter than three nucleotides, worked from the module's own $4^1$/$4^2$/$4^3$ arithmetic; and the figure-labelling Critical Thinking item, whose model answer is the letter-to-part mapping read from the image, including the ribosome's E, P, and A sites read off the leader line lettered C in the order they fall along the mRNA's 5′→3′ direction), and 1 (the "why does translation terminate at a stop codon" Short Answer) is dropped rather than converted or kept as a Practice self-check because it duplicates two body Check Your Understanding bullets already on the page (the first box's "what happens when a stop codon is reached?" and the third box's "what causes termination of translation?") — the source prints no answer key for any of the five that are used; key terms compiled from the module's 26 defined terms and the book's Glossary appendix, with 1 taken from the defining sentence (*initiation of protein synthesis* — no appendix entry matches its sense; *protein synthesis* and *aminoacyl tRNA synthetase* both have appendix entries, under the headwords "translation (protein synthesis)" and "aminoacyl-tRNA synthetase" respectively); the True/False item rendered as a two-option multiple choice; two filler `textin` items built from this section's own Summary and body sentences to fill the third objective's Practice group, one with an `accept` for its unhyphenated Svedberg spelling (`70 S`); primes normalized to U+2032 (′) throughout, matching the source's own mixed use of the right single quote and the prime character.</small>
