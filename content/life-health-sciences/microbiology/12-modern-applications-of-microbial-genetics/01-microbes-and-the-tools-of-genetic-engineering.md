---
title: Microbes and the Tools of Genetic Engineering
description: >-
  Restriction enzymes, ligases, and plasmid vectors used in molecular
  cloning, blue-white screening, genomic and cDNA libraries, and the methods
  used to introduce recombinant DNA into prokaryotic and eukaryotic hosts —
  adapted from OpenStax Microbiology, Section 12.1.
source_section: "12.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Identify tools of molecular genetics that are derived from microorganisms
- Describe the methods used to create recombinant DNA molecules
- Describe methods used to introduce DNA into prokaryotic cells
- List the types of genomic libraries and describe their uses
- Describe the methods used to introduce DNA into eukaryotic cells
{{< /callout >}}

{{< callout type="info" >}}
**Clinical Focus.** *Part 1*

Kayla, a 24-year-old electrical engineer and running enthusiast, just moved from Arizona to New Hampshire to take a new job. On her weekends off, she loves to explore her new surroundings, going for long runs in the pine forests. In July she spent a week hiking through the mountains. In early August, Kayla developed a low fever, headache, and mild muscle aches, and she felt a bit fatigued. Not thinking much of it, she took some ibuprofen to combat her symptoms and vowed to get more rest.

- What types of medical conditions might be responsible for Kayla's symptoms?

The case continues in [Visualizing and Characterizing DNA, RNA, and Protein](/life-health-sciences/microbiology/12-modern-applications-of-microbial-genetics/02-visualizing-and-characterizing-dna-rna-and-protein/).
{{< /callout >}}

The science of using living systems to benefit humankind is called **biotechnology**. Technically speaking, the domestication of plants and animals through farming and breeding practices is a type of biotechnology. However, in a contemporary sense, we associate biotechnology with the direct alteration of an organism's genetics to achieve desirable traits through the process of **genetic engineering**. Genetic engineering involves the use of **recombinant DNA technology**, the process by which a DNA sequence is manipulated *in vitro,* thus creating **recombinant DNA molecules** that have new combinations of genetic material. The recombinant DNA is then introduced into a host organism. If the DNA that is introduced comes from a different species, the host organism is now considered to be **transgenic**.

Lydia Villa-Komaroff, working in Walter Gilbert's lab, demonstrated the groundbreaking power of biotechnology in 1978. The group was the first to show that a transgenic bacterial strain could be used to create human insulin (the diagram below). The insulin gene from humans was inserted into a plasmid. This recombinant DNA plasmid was then inserted into bacteria. As a result, these transgenic microbes are able to produce and secrete human insulin. Many prokaryotes are able to acquire foreign DNA and incorporate functional genes into their own genome through "mating" with other cells (conjugation), viral infection (transduction), and taking up DNA from the environment (transformation). Recall that these mechanisms are examples of horizontal gene transfer—the transfer of genetic material between cells of the same generation.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_RecombTech" alt="A flow diagram showing the human insulin gene removed from a cell nucleus and inserted into a plasmid, forming a recombinant plasmid; the plasmid is inserted into a bacterial cell, producing a transgenic bacterium that divides and secretes insulin." longdesc="Five stages, left to right. A human cell (labeled human cell, nucleus, DNA) holds the insulin gene, a red segment of its DNA; a plain circular plasmid, labeled plasmid, sits below the cell. An arrow leads to the insulin gene on its own (a red arc) above the plasmid, now cut open. An arrow leads to the red arc joined into the plasmid's gap, labeled recombinant DNA. An arrow leads to an oval bacterium holding its own tangled chromosome and the small recombinant plasmid, labeled transgenic bacterium with plasmid containing insulin gene. A final arrow leads to about a dozen small oval bacteria, each holding the plasmid and each with a small arrow pointing outward (one labeled insulin), captioned 'Recombinant bacteria gain ability to secrete human insulin.'" kind="diagram" eager="true" >}}
Recombinant DNA technology is the artificial recombination of DNA from two organisms. In this example, the human insulin gene is inserted into a bacterial plasmid. This recombinant plasmid can then be used to transform bacteria, which gain the ability to produce the insulin protein.
{{< /mediafigure >}}

## Molecular Cloning

Herbert Boyer and Stanley Cohen first demonstrated the complete **molecular cloning** process in 1974 when they successfully cloned genes from the African clawed frog (*Xenopus laevis*) into a bacterial plasmid that was then introduced into the bacterial host *Escherichia coli*.

*(Source note: the source dates this experiment to 1973. The 1973 paper by Cohen, Chang, Boyer, and Helling (*PNAS* 70 (1973): 3240–3244) joined bacterial plasmid DNA only; the *Xenopus laevis* ribosomal DNA was cloned into *E. coli* the following year (Morrow et al., *PNAS* 71 (1974): 1743–1747), so the page prints 1974.)* Molecular cloning is a set of methods used to construct recombinant DNA and incorporate it into a host organism; it makes use of a number of molecular tools that are derived from microorganisms.

### Restriction Enzymes and Ligases

In recombinant DNA technology, DNA molecules are manipulated using naturally occurring enzymes derived mainly from bacteria and viruses. The creation of recombinant DNA molecules is possible due to the use of naturally occurring **restriction endonucleases** (**restriction enzymes**), bacterial enzymes produced as a protection mechanism to cut and destroy foreign cytoplasmic DNA that is most commonly a result of bacteriophage infection. Stewart Linn and Werner Arber discovered restriction enzymes in their 1960s studies of how *E. coli* limits bacteriophage replication on infection. Today, we use restriction enzymes extensively for cutting DNA fragments that can then be spliced into another DNA molecule to form recombinant molecules. Each restriction enzyme cuts DNA at a characteristic **recognition site**, a specific, usually palindromic, DNA sequence typically between four to six base pairs in length. A palindrome is a sequence of letters that reads the same forward as backward. (The word "level" is an example of a palindrome.) Palindromic DNA sequences contain the same base sequences in the 5′ to 3′ direction on one strand as in the 5′ to 3′ direction on the complementary strand. A restriction enzyme recognizes the DNA palindrome and cuts each backbone at identical positions in the palindrome. Some restriction enzymes cut to produce molecules that have complementary overhangs (**sticky ends**) while others cut without generating such overhangs, instead producing **blunt ends** (see the diagram below).

Molecules with complementary sticky ends can easily **anneal**, or form hydrogen bonds between complementary bases, at their sticky ends. The annealing step allows **hybridization** of the single-stranded overhangs. Hybridization refers to the joining together of two complementary single strands of DNA. Blunt ends can also attach together, but less efficiently than sticky ends due to the lack of complementary overhangs facilitating the process. In either case, **ligation** by DNA ligase can then rejoin the two sugar-phosphate backbones of the DNA through covalent bonding, making the molecule a continuous double strand. In 1972, Paul Berg, a Stanford biochemist, was the first to produce a recombinant DNA molecule using this technique, combining the SV40 monkey virus with *E. coli* bacteriophage lambda to create a hybrid.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_Recuts" alt="Two diagrams comparing restriction-enzyme cuts. (a) Sticky-end cutting: a double-stranded DNA ladder is cut by BamHI between the two G's on each strand, leaving short single-stranded GATC overhangs on each fragment. (b) Blunt-end cutting: the same kind of DNA is cut by HaeIII directly between G and C on each strand, leaving no single-stranded overhangs." longdesc="(a) A vertical six-base-pair ladder: the left strand runs 5′ at the bottom to 3′ at the top and the right strand 5′ at the top to 3′ at the bottom, and each reads GGATCC from its 5′ end. Paired black arrowheads labeled cut mark a cut in the right strand between its two G's near the top and a cut in the left strand between its two G's near the bottom, so the cuts are staggered. After cutting, the two fragments each keep one intact G–C pair and carry a single-stranded 5′ GATC overhang, labeled sticky ends. (b) A vertical four-base-pair ladder whose strands each read GGCC from the 5′ end; arrowheads labeled cut mark cuts in both strands at the same level, between G and C. An arrow labeled HaeIII leads to two separate two-base-pair fragments joined by a plus sign, labeled blunt ends, with no overhang." kind="diagram" >}}
(a) In this six-nucleotide restriction enzyme site, recognized by the enzyme *Bam*HI, notice that the sequence reads the same in the 5′ to 3′ direction on both strands. This is known as a palindrome. The cutting of the DNA by the restriction enzyme at the sites (indicated by the black arrows) produces DNA fragments with sticky ends. Another piece of DNA cut with the same restriction enzyme could attach to one of these sticky ends, forming a recombinant DNA molecule. (b) This four-nucleotide recognition site also exhibits a palindromic sequence. The cutting of the DNA by the restriction enzyme *Hae*III at the indicated sites produces DNA fragments with blunt ends. Any other piece of blunt DNA could attach to one of the blunt ends produced, forming a recombinant DNA molecule.
{{< /mediafigure >}}

### Plasmids

After restriction digestion, genes of interest are commonly inserted into plasmids, small pieces of typically circular, double-stranded DNA that replicate independently of the bacterial chromosome (see [Unique Characteristics of Prokaryotic Cells](/life-health-sciences/microbiology/03-the-cell/03-unique-characteristics-of-prokaryotic-cells/)). In recombinant DNA technology, plasmids are often used as **vectors**, DNA molecules that carry DNA fragments from one organism to another. Plasmids used as vectors can be genetically engineered by researchers and scientific supply companies to have specialized properties, as illustrated by the commonly used plasmid vector pUC19 (see the plasmid map below). Some plasmid vectors contain genes that confer antibiotic resistance; these resistance genes allow researchers to easily find plasmid-containing colonies by plating them on media containing the corresponding antibiotic. The antibiotic kills all host cells that do not harbor the desired plasmid vector, but those that contain the vector are able to survive and grow.

Plasmid vectors used for cloning typically have a **polylinker site**, or **multiple cloning site (MCS)**. A polylinker site is a short sequence containing multiple unique restriction enzyme recognition sites that are used for inserting DNA into the plasmid after restriction digestion of both the DNA and the plasmid. Having these multiple restriction enzyme recognition sites within the polylinker site makes the plasmid vector versatile, so it can be used for many different cloning experiments involving different restriction enzymes.

This polylinker site is often found within a **reporter gene**, another gene sequence artificially engineered into the plasmid that encodes a protein that allows for visualization of DNA insertion. The reporter gene allows a researcher to distinguish host cells that contain recombinant plasmids with cloned DNA fragments from host cells that only contain the non-recombinant plasmid vector. The most common reporter gene used in plasmid vectors is the bacterial *lacZ* gene encoding beta-galactosidase, an enzyme that naturally degrades lactose but can also degrade a colorless synthetic analog X-gal, thereby producing blue colonies on X-gal–containing media. The *lacZ* reporter gene is disabled when the recombinant DNA is spliced into the plasmid. Because the LacZ protein is not produced when the gene is disabled, X-gal is not degraded and white colonies are produced, which can then be isolated. This **blue-white screening** method is described later and shown in the flowchart below. In addition to these features, some plasmids come pre-digested and with an enzyme linked to the linearized plasmid to aid in ligation after the insertion of foreign DNA fragments.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_pUC19" alt="A circular map of the pUC19 plasmid, 2686 bp, numbered starting at 1 at the top. Clockwise from position 1 is a polylinker site (multiple cloning site) containing the restriction sites HindIII, PstI, SalI, XbaI, BamHI, SmaI, and EcoRI, positioned within the lacZα gene. Moving counterclockwise from about position 2500 is the ampicillin resistance (amp) gene." kind="diagram" >}}
The artificially constructed plasmid vector pUC19 is commonly used for cloning foreign DNA. Arrows indicate the directions in which the genes are transcribed. Note the polylinker site, containing multiple unique restriction enzyme recognition sites, found within the *lacZ* reporter gene. Also note the ampicillin (*amp*) resistance gene encoded on the plasmid.
{{< /mediafigure >}}

### Molecular Cloning using Transformation

The most commonly used mechanism for introducing engineered plasmids into a bacterial cell is transformation, a process in which bacteria take up free DNA from their surroundings. In nature, free DNA typically comes from other lysed bacterial cells; in the laboratory, free DNA in the form of recombinant plasmids is introduced to the cell's surroundings.

Some bacteria, such as *Bacillus* spp., are naturally competent, meaning they are able to take up foreign DNA. However, not all bacteria are naturally competent. In most cases, bacteria must be made artificially competent in the laboratory by increasing the permeability of the cell membrane. This can be achieved through chemical treatments that neutralize charges on the cell membrane or by exposing the bacteria to an electric field that creates microscopic pores in the cell membrane. These methods yield chemically competent or electrocompetent bacteria, respectively.

Following the transformation protocol, bacterial cells are plated onto an antibiotic-containing medium to inhibit the growth of the many host cells that were not transformed by the plasmid conferring antibiotic resistance. A technique called blue-white screening is then used for *lacZ*-encoding plasmid vectors such as pUC19. Blue colonies have a functional beta-galactosidase enzyme because the *lacZ* gene is uninterrupted, with no foreign DNA inserted into the polylinker site. These colonies typically result from the digested, linearized plasmid religating to itself. However, white colonies lack a functional beta-galactosidase enzyme, indicating the insertion of foreign DNA within the polylinker site of the plasmid vector, thus disrupting the *lacZ* gene. Thus, white colonies resulting from this blue-white screening contain plasmids with an insert and can be further screened to characterize the foreign DNA. To be sure the correct DNA was incorporated into the plasmid, the DNA insert can then be sequenced.

{{< callout type="info" >}}
**Link to Learning**

View an [animation of molecular cloning](https://openstax.org/l/22moleclonani) from the DNA Learning Center.
{{< /callout >}}

**Check Your Understanding**

{{< selfcheck question="In blue-white screening, what does a blue colony mean and why is it blue?" hint="Reread the blue-white screening paragraph just above, and the reporter-gene paragraph of Plasmids." >}}
Blue colonies have a functional beta-galactosidase enzyme because the lacZ gene is uninterrupted, with no foreign DNA inserted into the polylinker site; these colonies typically result from the digested, linearized plasmid religating to itself. They are blue because beta-galactosidase degrades a colorless synthetic analog X-gal, thereby producing blue colonies on X-gal–containing media.
===CHECKS===
Blue colonies have a functional beta-galactosidase enzyme because the lacZ gene is uninterrupted
these colonies typically result from the digested, linearized plasmid religating to itself
beta-galactosidase degrades a colorless synthetic analog X-gal, thereby producing blue colonies
{{< /selfcheck >}}

### Molecular Cloning Using Conjugation or Transduction

The bacterial process of conjugation (see [How Asexual Prokaryotes Achieve Genetic Diversity](/life-health-sciences/microbiology/11-mechanisms-of-microbial-genetics/06-how-asexual-prokaryotes-achieve-genetic-diversity/)) can also be manipulated for molecular cloning. F plasmids, or fertility plasmids, are transferred between bacterial cells through the process of conjugation. Recombinant DNA can be transferred by conjugation when bacterial cells containing a recombinant F plasmid are mixed with compatible bacterial cells lacking the plasmid. F plasmids encode a surface structure called an F pilus that facilitates contact between a cell containing an F plasmid and one without an F plasmid. On contact, a cytoplasmic bridge forms between the two cells and the F-plasmid-containing cell replicates its plasmid, transferring a copy of the recombinant F plasmid to the recipient cell. Once it has received the recombinant F plasmid, the recipient cell can produce its own F pilus and facilitate transfer of the recombinant F plasmid to an additional cell. The use of conjugation to transfer recombinant F plasmids to recipient cells is another effective way to introduce recombinant DNA molecules into host cells.

Alternatively, bacteriophages can be used to introduce recombinant DNA into host bacterial cells through a manipulation of the transduction process (see [How Asexual Prokaryotes Achieve Genetic Diversity](/life-health-sciences/microbiology/11-mechanisms-of-microbial-genetics/06-how-asexual-prokaryotes-achieve-genetic-diversity/)). In the laboratory, DNA fragments of interest can be engineered into **phagemids**, which are plasmids that have phage sequences that allow them to be packaged into bacteriophages. Bacterial cells can then be infected with these bacteriophages so that the recombinant phagemids can be introduced into the bacterial cells. Depending on the type of phage, the recombinant DNA may be integrated into the host bacterial genome (lysogeny), or it may exist as a plasmid in the host's cytoplasm.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_MolCloning" alt="A five-step flowchart of molecular cloning by bacterial transformation, from foreign DNA and a plasmid carrying an ampicillin-resistance gene and a lacZ gene, through cutting, ligation into recombinant plasmids, bacterial transformation, and blue and white colony screening." longdesc="Step 1: both foreign DNA and a plasmid with an ampicillin-resistance gene are cut with the same restriction enzyme; in the plasmid, the restriction site sits within a single copy of the lacZ gene, whose intact product, beta-galactosidase, is lost once the gene is cut. Step 2: the restriction enzyme leaves complementary sticky ends on the foreign DNA fragment and the plasmid, letting the foreign DNA anneal into the plasmid. Step 3: DNA ligase reattaches the DNA backbones, forming recombinant plasmids. Step 4: the plasmids are combined with a culture of growing bacteria; some bacteria take up no plasmid, others take up nonrecombinant plasmid with the lacZ gene intact, and a few take up recombinant plasmid with the lacZ gene disrupted. Step 5: the bacteria are cultured on a plate with ampicillin and a substance that changes color when acted on by beta-galactosidase; ampicillin kills bacteria that took up no plasmid, nonrecombinant-plasmid bacteria form blue colonies, and recombinant-plasmid bacteria form white colonies." kind="diagram" >}}
The steps involved in molecular cloning using bacterial transformation are outlined in this graphic flowchart.
{{< /mediafigure >}}

**Check Your Understanding**

{{< multiplechoice
  question="What is the original function of a restriction enzyme?"
  answer="A bacterial protection mechanism that cuts and destroys foreign cytoplasmic DNA, most often from bacteriophage infection"
  hint="Reread the first paragraph of the subsection on restriction enzymes."
>}}
A bacterial protection mechanism that cuts and destroys foreign cytoplasmic DNA, most often from bacteriophage infection
A laboratory tool for reattaching the sugar-phosphate backbones of cut DNA
A mechanism that lets bacteria take up naked DNA from their environment
A viral enzyme that converts RNA into a complementary DNA copy
{{< /multiplechoice >}}

{{< selfcheck question="What two processes are exploited to get recombinant DNA into a bacterial host cell?" hint="Reread the subsection just above this box." >}}
Beyond transformation, covered above, conjugation and transduction can both be exploited to introduce recombinant DNA into a bacterial host cell. In conjugation, a recombinant F plasmid is transferred from a donor cell to a recipient cell through an F pilus and a cytoplasmic bridge. In transduction, DNA fragments of interest are engineered into phagemids, and bacteriophages carrying these phagemids infect bacterial cells, introducing the recombinant DNA.
===CHECKS===
conjugation ... a recombinant F plasmid is transferred from a donor cell to a recipient cell through an F pilus and a cytoplasmic bridge
transduction ... DNA fragments of interest can be engineered into phagemids ... bacteriophages so that the recombinant phagemids can be introduced into the bacterial cells
{{< /selfcheck >}}

{{< selfcheck question="Distinguish the uses of an antibiotic resistance gene and a reporter gene in a plasmid vector." hint="Reread the Plasmids subsection." >}}
An antibiotic resistance gene on a plasmid vector allows researchers to easily find plasmid-containing colonies by plating them on media containing the corresponding antibiotic, which kills host cells that do not harbor the plasmid. A reporter gene, by contrast, encodes a protein that allows for visualization of DNA insertion, letting a researcher distinguish host cells that contain recombinant plasmids with cloned DNA fragments from host cells that only contain the non-recombinant plasmid vector.
===CHECKS===
an antibiotic resistance gene ... allow researchers to easily find plasmid-containing colonies ... the antibiotic kills all host cells that do not harbor the desired plasmid vector
a reporter gene ... encodes a protein that allows for visualization of DNA insertion
the reporter gene allows a researcher to distinguish host cells that contain recombinant plasmids ... from host cells that only contain the non-recombinant plasmid vector
{{< /selfcheck >}}

## Creating a Genomic Library

Molecular cloning may also be used to generate a **genomic library**. The library is a complete (or nearly complete) copy of an organism's genome contained as recombinant DNA plasmids engineered into unique clones of bacteria. Having such a library allows a researcher to create large quantities of each fragment by growing the bacterial host for that fragment. These fragments can be used to determine the sequence of the DNA and the function of any genes present.

One method for generating a genomic library is to ligate individual restriction enzyme-digested genomic fragments into plasmid vectors cut with the same restriction enzyme (see the diagram below). After transformation into a bacterial host, each transformed bacterial cell takes up a single recombinant plasmid and grows into a colony of cells. All of the cells in this colony are identical **clones** and carry the same recombinant plasmid. The resulting library is a collection of colonies, each of which contains a fragment of the original organism's genome, that are each separate and distinct and can each be used for further study. This makes it possible for researchers to screen these different clones to discover the one containing a gene of interest from the original organism's genome.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_CloneLibry" alt="A flow diagram of genomic library construction: DNA is extracted from an organism and cut into fragments, each fragment is inserted into a separate plasmid, bacteria are transformed with the plasmids, and each transformed bacterium replicates into a colony of clones carrying one genomic fragment." longdesc="The figure begins with a blue-tinted fluorescence micrograph of a whole worm, the source organism, labeled 'DNA is extracted from the organism and cut into fragments.' A curved arrow leads to three short DNA fragments (red, gold, green), labeled 'DNA fragments,' above a plain circular plasmid labeled 'plasmid.' A joining arrow leads to three recombinant plasmids, each holding one of the colored fragments, labeled 'DNA fragments are inserted into plasmids.' An arrow leads to three oval bacteria, each holding its own chromosome and one recombinant plasmid, labeled 'Bacteria are transformed with vectors.' From each of these, three arrows fan out to three identical daughter bacteria carrying the same colored fragment (nine in all, in three color-matched groups), labeled 'Bacteria replicate, producing colonies of clones.'" kind="diagram" >}}
The generation of a genomic library facilitates the discovery of the genomic DNA fragment that contains a gene of interest. (credit "micrograph": modification of work by National Institutes of Health)
{{< /mediafigure >}}

To construct a genomic library using larger fragments of genomic DNA, an *E. coli* bacteriophage, such as lambda, can be used as a vector (see the diagram below). *(Source note: the source says the bacteriophage "can be used as a host." The rest of this paragraph ligates the genomic DNA into "a pre-digested bacteriophage lambda DNA vector" and uses the packaged phages "to infect E. coli host cells," so the phage is the vector and E. coli the host.)* Genomic DNA can be sheared or enzymatically digested and ligated into a pre-digested bacteriophage lambda DNA vector. Then, these recombinant phage DNA molecules can be packaged into phage particles and used to infect *E. coli* host cells on a plate. During infection within each cell, each recombinant phage will make many copies of itself and lyse the *E. coli* lawn, forming a plaque. Thus, each plaque from a phage library represents a unique recombinant phage containing a distinct genomic DNA fragment. Plaques can then be screened further to look for genes of interest. One advantage to producing a library using phages instead of plasmids is that a phage particle holds a much larger insert of foreign DNA compared with a plasmid vector, thus requiring a much smaller number of cultures to fully represent the entire genome of the original organism.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_PhageLibry" alt="A flow diagram of phage-library construction: a cellular genome and a phage genome are digested with the same restriction enzyme; the digested cellular fragments are built into recombinant phage particles; a bacterial lawn of E. coli is infected with the recombinant phages, producing plaques that each contain phages carrying a unique genomic fragment." longdesc="Left to right: a dark blue tangled loop labeled 'cellular genome' and a light blue tangled loop labeled 'phage genome' are each cut, labeled 'digest with same restriction enzyme,' producing three short colored fragments labeled A, B, and C from the cellular genome and a cluster of small unlabeled light blue fragments from the phage genome. An arrow labeled 'build recombinant phage' leads to three phage particles, each head holding one colored fragment. An arrow labeled 'Infect E. coli with recombinant phage' leads to a plate labeled 'bacterial lawn,' dotted with small red, green, and yellow spots labeled 'plaques.' Three arrows lead from different plaques to three rows of three identical phages each, captioned 'Each plaque contains phages with a unique fragment from the original genome.'" kind="diagram" >}}
Recombinant phage DNA molecules are made by ligating digested phage particles with fragmented genomic DNA molecules. These recombinant phage DNA molecules are packaged into phage particles and allowed to infect a bacterial lawn. Each plaque represents a unique recombinant DNA molecule that can be further screened for genes of interest.
{{< /mediafigure >}}

To focus on the expressed genes in an organism or even a tissue, researchers construct libraries using the organism's messenger RNA (mRNA) rather than its genomic DNA. Whereas all cells in a single organism will have the same genomic DNA, different tissues express different genes, producing different complements of mRNA. For example, all human cells' genomic DNA contains the gene for insulin, but only cells in the pancreas express mRNA directing the production of insulin. Because mRNA cannot be cloned directly, in the laboratory mRNA must be used as a template by the retroviral enzyme reverse transcriptase to make **complementary DNA (cDNA)**. A cell's full complement of mRNA can be reverse-transcribed into cDNA molecules, which can be used as a template for DNA polymerase to make double-stranded DNA copies; these fragments can subsequently be ligated into either plasmid vectors or bacteriophage to produce a cDNA library. The benefit of a cDNA library is that it contains DNA from only the expressed genes in the cell. This means that the introns, control sequences such as promoters, and DNA not destined to be translated into proteins are not represented in the library. The focus on translated sequences means that the library cannot be used to study the sequence and structure of the genome in its entirety. The construction of a cDNA genomic library is shown below.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_cDNALibry" alt="A flow diagram of cDNA library construction: RNA is extracted from an organism, reverse transcription converts the RNA into cDNA, the cDNA fragments are inserted into separate plasmids, bacteria are transformed with the plasmids, and each transformed bacterium replicates into a colony of clones carrying one cDNA fragment." longdesc="The figure begins with a blue-tinted fluorescence micrograph of a whole worm, the source organism, labeled 'RNA is extracted from the organism.' A curved arrow leads to three single wavy strands (red, gold, green) — the RNA — labeled 'Reverse transcription builds cDNA.' An arrow leads to the same three as double strands, labeled cDNA, above a plain circular plasmid labeled plasmid. A joining arrow leads to three recombinant plasmids, each holding one colored cDNA fragment, labeled 'cDNA fragments are inserted into plasmids.' An arrow leads to three oval bacteria, each holding its own chromosome and one recombinant plasmid, labeled 'Bacteria are transformed with vectors,' and from each, three arrows fan out to three identical daughter bacteria carrying the same colored fragment (nine in all), labeled 'Bacteria replicate, producing colonies of clones.'" kind="diagram" >}}
Complementary DNA (cDNA) is made from mRNA by the retroviral enzyme reverse transcriptase, converted into double-stranded copies, and inserted into either plasmid vectors or bacteriophage, producing a cDNA library. (credit "micrograph": modification of work by National Institutes of Health)
{{< /mediafigure >}}

**Check Your Understanding**

{{< textin question="What are the hosts for the genomic libraries described in this section?" answer="bacteria" accept="bacterial cells|bacterium|E. coli|Escherichia coli|E. coli cells|bacterial host cells" hint="Reread the first three paragraphs of Creating a Genomic Library." >}}

{{< multiplechoice
  question="What is cDNA?"
  answer="A DNA molecule complementary to mRNA, made using the mRNA as a template"
  hint="Reread the last paragraph of Creating a Genomic Library."
>}}
A DNA molecule complementary to mRNA, made using the mRNA as a template
A synthetic reporter gene inserted into a plasmid vector to visualize DNA insertion
A bacteriophage vector engineered to package large genomic DNA fragments
A plasmid vector engineered with a polylinker site for restriction digestion
{{< /multiplechoice >}}

## Introducing Recombinant Molecules into Eukaryotic Hosts

The use of bacterial hosts for genetic engineering laid the foundation for recombinant DNA technology; however, researchers have also had great interest in genetically engineering eukaryotic cells, particularly those of plants and animals. The introduction of recombinant DNA molecules into eukaryotic hosts is called **transfection**. Genetically engineered plants, called transgenic plants, are of significant interest for agricultural and pharmaceutical purposes. The first transgenic plant sold commercially was the Flavr Savr delayed-ripening tomato, which came to market in 1994. Genetically engineered livestock have also been successfully produced, resulting, for example, in pigs with increased nutritional value (Liangxue Lai, Jing X. Kang, Rongfeng Li, Jingdong Wang, William T. Witt, Hwan Yul Yong, Yanhong Hao et al., "Generation of Cloned Transgenic Pigs Rich in Omega-3 Fatty Acids," *Nature Biotechnology 24* no. 4 (2006): 435–436) and goats that secrete pharmaceutical products in their milk (Raylene Ramos Moura, Luciana Magalhães Melo, and Vicente José de Figueirêdo Freitas, "Production of Recombinant Proteins in Milk of Transgenic and Non-Transgenic Goats," *Brazilian Archives of Biology and Technology 54* no. 5 (2011): 927–938).

### Electroporation

Compared to bacterial cells, eukaryotic cells tend to be less amenable as hosts for recombinant DNA molecules. Because eukaryotes are typically neither competent to take up foreign DNA nor able to maintain plasmids, transfection of eukaryotic hosts is far more challenging and requires more intrusive techniques for success. One method used for transfecting cells in cell culture is called **electroporation**. A brief electric pulse induces the formation of transient pores in the phospholipid bilayers of cells through which the gene can be introduced. At the same time, the electric pulse generates a short-lived positive charge on one side of the cell's interior and a negative charge on the opposite side; the charge difference draws negatively charged DNA molecules into the cell (see the diagram below).

{{< mediafigure src="microbiology/OSC_Microbio_12_01_electropor" alt="A three-panel diagram of electroporation. Panel 1: recombinant DNA sits outside a cell with an intact plasma membrane, labeled 'Introduce the gene to the cell.' Panel 2: an electric pulse creates pores in the membrane with positive charges inside and negative charges outside, drawing DNA through, labeled 'Apply the electric pulse; pores form in the cell membrane and the gene enters.' Panel 3: the membrane reseals with the introduced gene inside the cell, labeled 'After the electric pulse, the pores reseal and the gene remains in the cell.'" kind="diagram" >}}
Electroporation is one laboratory technique used to introduce DNA into eukaryotic cells.
{{< /mediafigure >}}

### Microinjection

An alternative method of transfection is called **microinjection**. Because eukaryotic cells are typically larger than those of prokaryotes, DNA fragments can sometimes be directly injected into the cytoplasm using a glass micropipette, as shown below.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_microinjec" alt="A grayscale micrograph of a round cell held against a pipette at the left while a thin needle, labeled microinjection needle, enters from the right, passes through the cell membrane (labeled) and through the nucleus (labeled), and reaches nearly to the cell's far side." kind="photo" >}}
Microinjection is another technique for introducing DNA into eukaryotic cells. A microinjection needle containing recombinant DNA is able to penetrate both the cell membrane and nuclear envelope.
{{< /mediafigure >}}

### Gene Guns

Transfecting plant cells can be even more difficult than animal cells because of their thick cell walls. One approach involves treating plant cells with enzymes to remove their cell walls, producing protoplasts. Then, a **gene gun** is used to shoot gold or tungsten particles coated with recombinant DNA molecules into the plant protoplasts at high speeds. Recipient protoplast cells can then recover and be used to generate new transgenic plants (see the diagram below).

{{< mediafigure src="microbiology/OSC_Microbio_12_01_GeneGun" alt="(a) A diagram of a gene gun: a pulse of helium pushes microprojectiles — gold or tungsten particles coated with recombinant DNA — through the gun barrel and into a plant protoplast. (b) A photograph of a handheld gene gun, shaped like a hair dryer with a narrow barrel." kind="diagram" >}}
Heavy-metal particles coated with recombinant DNA are shot into plant protoplasts using a gene gun. The resulting transformed cells are allowed to recover and can be used to generate recombinant plants. (a) A schematic of a gene gun. (b) A photograph of a gene gun. (credit a, b: modification of work by JA O'Brien, SC Lummis)
{{< /mediafigure >}}

### Shuttle Vectors

Another method of transfecting plants involves **shuttle vectors**, plasmids that can move between bacterial and eukaryotic cells. The **tumor-inducing (T<sub>i</sub>) plasmids** originating from the bacterium *Agrobacterium tumefaciens* are commonly used as shuttle vectors for incorporating genes into plants (see the diagram below). In nature, the T<sub>i</sub> plasmids of *A. tumefaciens* cause plants to develop tumors when they are transferred from bacterial cells to plant cells. Researchers have been able to manipulate these naturally occurring plasmids to remove their tumor-causing genes and insert desirable DNA fragments. The resulting recombinant T<sub>i</sub> plasmids can be transferred into the plant genome through the natural transfer of T<sub>i</sub> plasmids from the bacterium to the plant host. Once inside the plant host cell, the gene of interest recombines into the plant cell's genome.

{{< mediafigure src="microbiology/OSC_Microbio_12_01_Ti" alt="A six-step diagram of plant transformation using the Ti plasmid: a micrograph of rod-shaped Agrobacterium tumefaciens cells; the Ti plasmid, carrying a T-DNA region, is isolated; a gene of interest from cellular DNA is cloned into the T-DNA region, making the plasmid recombinant; the recombinant plasmid is transformed back into A. tumefaciens, which infects a plant cell; the T-DNA integrates into the plant cell, producing a recombinant plant." longdesc="The diagram runs in a loop. Top left: a black-and-white micrograph of several rod-shaped Agrobacterium tumefaciens cells. An arrow labeled 'isolate plasmid' leads to a circular plasmid labeled Ti plasmid, whose top arc, drawn in red, is labeled T-DNA region; a curved arrow leads on from it to the cellular DNA. A curved arrow labeled 'clone gene of interest into Ti plasmid (making it recombinant)' leads from a tangled loop of cellular DNA holding the gene of interest into the plasmid, now redrawn with the gene added within the T-DNA region. An arrow labeled 'transform recombinant DNA back to A. tumefaciens' leads down to a drawing of an A. tumefaciens cell holding the Ti plasmid and its T-DNA, and a black curved arrow runs from that T-DNA into the nucleus of a box-shaped cell labeled plant cell, with the words 'infect plant cell with A. tumefaciens.' An arrow labeled 'results in a recombinant plant' leads right to a color photograph of a small seedling growing in a pot of soil, labeled 'recombinant plant.'" kind="diagram" >}}
The T<sub>i</sub> plasmid of *Agrobacterium tumefaciens* is a useful shuttle vector for the uptake of genes of interest into plant cells. The gene of interest is cloned into the T<sub>i</sub> plasmid, which is then introduced into plant cells. The gene of interest then recombines into the plant cell's genome, allowing for the production of transgenic plants.
{{< /mediafigure >}}

### Viral Vectors

Viral vectors can also be used to transfect eukaryotic cells. In fact, this method is often used in [gene therapy](/life-health-sciences/microbiology/12-modern-applications-of-microbial-genetics/04-gene-therapy/) to introduce healthy genes into human patients suffering from diseases that result from genetic mutations. Viral genes can be deleted and replaced with the gene to be delivered to the patient (William S.M. Wold and Karoly Toth, "Adenovirus Vectors for Gene Therapy, Vaccination and Cancer Gene Therapy," *Current Gene Therapy 13* no. 6 (2013): 421); the virus then infects the host cell and delivers the foreign DNA into the genome of the targeted cell. Adenoviruses are often used for this purpose because they can be grown to high titer and can infect both nondividing and dividing host cells. However, use of viral vectors for gene therapy can pose some risks for patients, as discussed in [Gene Therapy](/life-health-sciences/microbiology/12-modern-applications-of-microbial-genetics/04-gene-therapy/).

**Check Your Understanding**

{{< selfcheck question="What are the methods used to introduce recombinant DNA vectors into animal cells?" hint="Reread the subsections of Introducing Recombinant Molecules into Eukaryotic Hosts." >}}
Recombinant DNA vectors can be introduced into animal cells by electroporation, in which a brief electric pulse forms transient pores in the phospholipid bilayer through which the gene can be introduced; by microinjection, in which DNA fragments are directly injected into the cytoplasm using a glass micropipette; and by viral vectors, in which viral genes are deleted and replaced with the gene to be delivered, and the virus then infects the host cell and delivers the foreign DNA into its genome.
===CHECKS===
electroporation ... a brief electric pulse induces the formation of transient pores in the phospholipid bilayers of cells through which the gene can be introduced
microinjection ... DNA fragments can sometimes be directly injected into the cytoplasm using a glass micropipette
viral vectors ... viral genes can be deleted and replaced with the gene to be delivered to the patient ... the virus then infects the host cell and delivers the foreign DNA into the genome
{{< /selfcheck >}}

{{< selfcheck question="Compare and contrast shuttle vectors and viral vectors." hint="Reread the last two subsections of Introducing Recombinant Molecules into Eukaryotic Hosts." >}}
Shuttle vectors and viral vectors are both used to transfect eukaryotic cells, ultimately allowing a gene of interest to recombine into the host genome, but they differ in what carries the DNA. Shuttle vectors, such as the Ti plasmid of *Agrobacterium tumefaciens*, are plasmids that can move between bacterial and eukaryotic cells; the Ti plasmid is transferred naturally from the bacterium into a plant cell, where the gene of interest recombines into the plant genome. Viral vectors, by contrast, are viruses whose own genes have been deleted and replaced with the gene to be delivered; the virus infects the host cell directly and delivers the foreign DNA into the genome of the targeted cell, a method often used in gene therapy to introduce healthy genes into human patients.
===CHECKS===
shuttle vectors ... plasmids that can move between bacterial and eukaryotic cells
the Ti plasmid ... is then introduced into plant cells. The gene of interest then recombines into the plant cell's genome
viral vectors ... viral genes can be deleted and replaced with the gene to be delivered to the patient ... the virus then infects the host cell and delivers the foreign DNA into the genome of the targeted cell
{{< /selfcheck >}}

## Summary

- **Biotechology** is the science of utilizing living systems to benefit humankind. In recent years, the ability to directly alter an organism's genome through **genetic** **engineering** has been made possible due to advances in **recombinant DNA technology,** which allows researchers to create **recombinant DNA molecules** with new combinations of genetic material.
- **Molecular cloning** involves methods used to construct recombinant DNA and facilitate their replication in host organisms. These methods include the use of **restriction enzymes** (to cut both foreign DNA and **plasmid vectors)**, **ligation** (to paste fragments of DNA together), and the introduction of recombinant DNA into a host organism (often bacteria).
- **Blue-white screening** allows selection of bacterial transformants that contain recombinant plasmids using the phenotype of a **reporter gene** that is disabled by insertion of the DNA fragment.
- **Genomic libraries** can be made by cloning genomic fragments from one organism into plasmid vectors or into bacteriophage.
- **cDNA libraries** can be generated to represent the mRNA molecules expressed in a cell at a given point.
- **Transfection** of eukaryotic hosts can be achieved through various methods using **electroporation**, **gene guns**, **microinjection**, **shuttle vectors**, and **viral vectors**.

## Key terms

- **biotechnology** — the science of using living systems to benefit humankind.
- **genetic engineering** — the direct alteration of an organism's genetics to achieve desirable traits.
- **recombinant DNA technology** — the process by which DNA from one organism is cut and new pieces of foreign DNA from a second organism are inserted, artificially creating new combinations of genetic material within the organism.
- **recombinant DNA molecule** — a DNA molecule resulting from the cutting and insertion of DNA from one organism into the DNA of another organism, resulting in a new combination of genetic material.
- **transgenic** — describing an organism into which foreign DNA from a different species has been introduced.
- **molecular cloning** — the purposeful fragmentation of DNA followed by attachment to another piece of DNA to produce a recombinant molecule, followed by introduction of this recombinant molecule into an easily manipulated host to allow for the creation of multiple copies of a gene of interest.
- **restriction endonucleases (restriction enzymes)** — bacterial enzyme that cuts DNA fragments at a unique, often palindromic, recognition site; used in genetic engineering for splicing DNA fragments together into recombinant molecules.
- **recognition site** — a specific, often palindromic, DNA sequence recognized by a restriction enzyme that is typically four to six base pairs long and reads the same in the 5′ to 3′ direction on one strand as it does in the 5′ to 3′ direction on the complementary strand.
- **sticky ends** — short, single-stranded complementary overhangs that may be produced when many restriction enzymes cut DNA.
- **blunt ends** — ends of DNA molecules lacking single-stranded complementary overhangs that are produced when some restriction enzymes cut DNA.
- **anneal** — formation of hydrogen bonds between the nucleotide base pairs of two single-stranded complementary nucleic acid sequences.
- **hybridization** — the joining of two complementary single-stranded DNA molecules.
- **ligation** — repair of the sugar-phosphate backbone of the DNA, making the DNA molecule continuous.
- **vectors** — DNA molecules that carry DNA fragments from one organism to another.
- **polylinker site (multiple cloning site, MCS)** — a short sequence containing multiple unique restriction enzyme recognition sites that are used for inserting foreign DNA into the plasmid after restriction digestion of both the foreign DNA and the plasmid.
- **reporter gene** — genes that encode easily observable characteristics, allowing for their expression to be easily monitored.
- **blue-white screening** — a technique commonly used for identifying transformed bacterial cells containing recombinant plasmids using *lacZ*-encoding plasmid vectors.
- **phagemids** — a plasmid capable of being replicated as a plasmid and also incorporated into a phage head.
- **genomic library** — a repository of an organism's entire genome maintained as cloned fragments in the genomes of strains of a host organism.
- **clones** — a genetically identical cell or individual.
- **complementary DNA (cDNA)** — a DNA molecule complementary to mRNA that is made through the activity of reverse transcriptase.
- **transfection** — the introduction of recombinant DNA molecules into eukaryotic hosts.
- **electroporation** — a genetic engineering technique in which cells are exposed to a short electric pulse, inducing them to take up DNA molecules from their environment.
- **microinjection** — the direct injection of DNA into the cytoplasm of a eukaryotic cell using a glass micropipette.
- **gene gun** — an apparatus that shoots gold or tungsten particles coated with recombinant DNA molecules at high speeds into plant protoplasts.
- **shuttle vectors** — a plasmid that can move between bacterial and eukaryotic cells.
- **tumor-inducing (Ti) plasmids** — a naturally occurring plasmid of the bacterium *Agrobacterium tumefaciens* that researchers use as a shuttle vector to introduce a desired DNA fragment into plant cells.

## Practice

### Identify tools of molecular genetics that are derived from microorganisms

{{< multiplechoice
  question="Which of the following is required for repairing the phosphodiester backbone of DNA during molecular cloning?"
  answer="DNA ligase"
  hint="Reread the paragraph on annealing and hybridization."
>}}
cDNA
reverse transcriptase
restriction enzymes
DNA ligase
{{< /multiplechoice >}}

{{< multiplechoice
  question="The enzyme that uses RNA as a template to produce a DNA copy is called:"
  answer="reverse transcriptase"
  hint="Reread the last paragraph of Creating a Genomic Library."
>}}
a restriction enzyme
DNA ligase
reverse transcriptase
DNA polymerase
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is biotechnology always associated with genetic engineering?"
  answer="No, because domestication of plants and animals through farming and breeding is also a type of biotechnology"
  hint="Reread the first paragraph after Clinical Focus Part 1."
>}}
Yes, every form of biotechnology directly alters an organism's genetics
No, because domestication of plants and animals through farming and breeding is also a type of biotechnology
No, because biotechnology only refers to the production of pharmaceuticals in transgenic organisms
Yes, because recombinant DNA technology is required to domesticate any plant or animal
{{< /multiplechoice >}}

### Describe the methods used to create recombinant DNA molecules

{{< multiplechoice
  question="In blue-white screening, what do blue colonies represent?"
  answer="cells containing empty plasmid vectors"
  hint="Reread the blue-white screening paragraph of Molecular Cloning using Transformation."
>}}
cells that have not taken up the plasmid vector
cells with recombinant plasmids containing a new insert
cells containing empty plasmid vectors
cells with a non-functional *lacZ* gene
{{< /multiplechoice >}}

{{< multiplechoice
  question="Recombination is a process not usually observed in nature."
  answer="False"
  hint="Reread the second paragraph after Clinical Focus Part 1."
>}}
True
False
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which is more efficient: blunt-end cloning or sticky-end cloning? Why?"
  answer="Sticky-end cloning, because complementary overhangs facilitate annealing"
  hint="Reread the paragraph on annealing and hybridization."
>}}
Sticky-end cloning, because complementary overhangs facilitate annealing
Blunt-end cloning, because it works with any restriction enzyme
They are equally efficient, since both are rejoined by DNA ligase
Blunt-end cloning, because it does not require an annealing step at all
{{< /multiplechoice >}}

{{< textin question="Plasmid vectors used for cloning typically have a short sequence containing multiple unique restriction enzyme recognition sites, called a ________ site." answer="polylinker" accept="multiple cloning site|MCS|polylinker site|multiple cloning" hint="Reread the second paragraph of Plasmids." >}}

### Describe methods used to introduce DNA into prokaryotic cells

{{< multiplechoice
  question="All of the following are processes used to introduce DNA molecules into bacterial cells *except*:"
  answer="transcription"
  hint="Reread the second paragraph after Clinical Focus Part 1."
>}}
transformation
transduction
transcription
conjugation
{{< /multiplechoice >}}

{{< multiplechoice
  question="It is generally easier to introduce recombinant DNA into prokaryotic cells than into eukaryotic cells."
  answer="True"
  hint="Reread the first paragraph of Electroporation."
>}}
True
False
{{< /multiplechoice >}}

{{< selfcheck question="Name three elements incorporated into a plasmid vector for efficient cloning." hint="Reread the Plasmids subsection." >}}
Three elements commonly incorporated into a plasmid vector for efficient cloning are an antibiotic resistance gene, which allows researchers to select for cells that have taken up the plasmid by killing cells that lack it; a polylinker site (multiple cloning site), a short sequence of multiple unique restriction enzyme recognition sites used for inserting foreign DNA; and a reporter gene, such as *lacZ*, which allows visualization of DNA insertion by disabling an observable phenotype when the DNA fragment is inserted.
===CHECKS===
an antibiotic resistance gene, which allows researchers to select for cells that have taken up the plasmid by killing cells that lack it
a polylinker site (multiple cloning site), a short sequence of multiple unique restriction enzyme recognition sites used for inserting foreign DNA
a reporter gene, such as lacZ, which allows visualization of DNA insertion
{{< /selfcheck >}}

### List the types of genomic libraries and describe their uses

{{< textin question="A genetically identical cell or individual is called a ________." answer="clone" hint="Reread the second paragraph of Creating a Genomic Library." >}}

{{< multiplechoice
  question="When would a scientist want to generate a cDNA library instead of a genomic library?"
  answer="When only the genes actively expressed in a particular tissue need to be represented"
  hint="Reread the last paragraph of Creating a Genomic Library."
>}}
When only the genes actively expressed in a particular tissue need to be represented
When the researcher wants a complete copy of the organism's entire genome
When the researcher wants to study the introns and promoters of a gene
When the researcher needs a much larger insert of foreign DNA than a plasmid can hold
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is one advantage of generating a genomic library using phages instead of plasmids?"
  answer="A phage particle holds a much larger insert of foreign DNA, requiring fewer cultures to represent the whole genome"
  hint="Reread the last sentence of the phage-library paragraph."
>}}
A phage particle holds a much larger insert of foreign DNA, requiring fewer cultures to represent the whole genome
Phages replicate their DNA more accurately than plasmids do
Phages do not require restriction enzymes to construct a library
Phages can only be used with eukaryotic host cells
{{< /multiplechoice >}}

### Describe the methods used to introduce DNA into eukaryotic cells

{{< multiplechoice
  question="The T<sub>i</sub> plasmid is used for introducing genes into:"
  answer="plant cells"
  hint="Reread the subsection between Gene Guns and Viral Vectors."
>}}
animal cells
plant cells
bacteriophages
*E. coli* cells
{{< /multiplechoice >}}

{{< textin question="The process of introducing DNA molecules into eukaryotic cells is called ________." answer="transfection" hint="Reread the first paragraph of Introducing Recombinant Molecules into Eukaryotic Hosts." >}}

{{< textin question="Plasmids that can move between bacterial and eukaryotic cells are called ________." answer="shuttle vectors" hint="Reread the first sentence of the subsection between Gene Guns and Viral Vectors." >}}

---

<small>This section is adapted from [Microbiology, Section 12.1: Microbes and the Tools of Genetic Engineering](https://openstax.org/books/microbiology/pages/12-1-microbes-and-the-tools-of-genetic-engineering) by Nina Parker, Mark Schneegurt, Anh-Hue Thi Tu, Philip Lister, Brian M. Forster, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/microbiology). Changes: all eleven source figures are re-encoded as WebP and rendered as mediafigures; the media manifest guesses `kind="photo"` for all eleven because every source file is a JPEG, which is correct only for the microinjection micrograph — the other ten (RecombTech, Recuts, pUC19, MolCloning, CloneLibry, PhageLibry, cDNALibry, electropor, GeneGun, and Ti) are explicit `kind="diagram"` because each is a genuinely drawn, labeled figure, GeneGun and Ti included even though each also carries a photograph panel. The pUC19 alt is corrected for five source typos ("pC19" → pUC19, "plylinker" → polylinker, "HidIII" → HindIII, "PSTI" → PstI, "SaII" → SalI); the MolCloning alt is corrected for three source typos ("DNa" → DNA, "resistang" → resistant, "nto" → not); the Ti alt is corrected for two source typos ("inseted" → inserted, "resuts" → results). Longdesc walk-throughs are added for RecombTech, Recuts, MolCloning, CloneLibry, PhageLibry, cDNALibry, and Ti because each is a multi-step or multi-panel figure whose labelled stages the caption does not name individually. All five body Check Your Understanding boxes are rendered as body items at their note positions: of the eight bullets, three are graded (two multiple choice and one textin) because a single sentence or definition of this module fixes the whole answer, and five are self-checks with model answers and rubrics assembled only from this module's own sentences, because their honest answers require assembling more than one sentence (the two-process, the antibiotic-resistance-versus-reporter-gene, and the two eukaryotic-transfection self-checks) or because a graded form would re-ask a keyed source item (the blue-colony bullet, whose meaning half is the source Multiple Choice "In blue-white screening, what do blue colonies represent?" in Practice). The graded conversions draw their distractors from this module's own sibling terms and mechanisms (other transfection methods, other library types, other cloning outcomes), never invented content. Of the module's thirteen source exercises, all five Multiple Choice, both True/False (as two-option multiple choice), and the one Fill in the Blank are adapted into Practice; of the three unkeyed Short Answer and two unkeyed Critical Thinking questions, two Short Answer and both Critical Thinking questions convert to multiple choice because one sentence of this module fixes their whole answer, and the third Short Answer question (the three plasmid-vector elements) stays a self-check because its honest answer assembles three separate sentences. Three filler `textin` items (the polylinker/MCS term, the clone term, and the shuttle-vectors term) are author-written strictly from this module's own Key terms to fill the Describe the methods used to create recombinant DNA molecules, List the types of genomic libraries, and Describe the methods used to introduce DNA into eukaryotic cells objectives to the three-item floor. Feature boxes are rendered as callouts: Clinical Focus Part 1 keeps its closing question as an unanswered plain bullet and links forward to Visualizing and Characterizing DNA, RNA, and Protein, where the case continues; the Link to Learning keeps its animation link. The cross-references to Unique Characteristics of Prokaryotic Cells, How Asexual Prokaryotes Achieve Genetic Diversity (twice), and Gene Therapy (twice) are rendered as links, since all land in this run. Key terms are compiled from the module's 30 distinct defined terms (31 `<term>` elements; `blue-white screening` is defined twice and gets one bullet) and the book's Glossary appendix, rendered as 27 bullets: `recombinant DNA` and `molecule` have no distinct appendix entry and are merged into the one bullet `recombinant DNA molecule`, using the nearest appendix headword's meaning; `restriction enzymes` has no distinct appendix entry and is merged into the `restriction endonucleases (restriction enzymes)` bullet; `anneal` has no distinct appendix entry and takes the appendix's `annealing` definition under the module's own headword; `multiple cloning site (MCS)` has no distinct appendix entry and is merged with `polylinker site` into one bullet, `polylinker site (multiple cloning site, MCS)`; `vectors` has a doubled appendix entry (an arthropod-vector sense and a DNA-vector sense), and only the DNA-molecule clause is used, matching this module's sense. In Creating a Genomic Library, the source's "an *E. coli* bacteriophage, such as lambda, can be used as a host" is printed as "…can be used as a vector" with a visible Source note, since the same paragraph calls the phage DNA the vector and *E. coli* the host cells. The year of the Boyer–Cohen *Xenopus* cloning experiment is corrected from the source's 1973 to 1974 with a visible Source note (the 1973 paper joined bacterial plasmids only; the frog-gene clone is Morrow et al. 1974).</small>
