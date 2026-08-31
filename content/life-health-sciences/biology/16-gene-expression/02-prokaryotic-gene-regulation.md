---
title: Prokaryotic Gene Regulation
description: >-
  How bacteria switch operons on and off in response to their environment,
  from the *trp* operon's repressor to the *lac* operon's combined use of a
  repressor and the CAP activator — adapted from OpenStax Biology 2e,
  Section 16.2.
source_section: "16.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Describe the steps involved in prokaryotic gene regulation
- Explain the roles of activators, inducers, and repressors in gene regulation
{{< /callout >}}

The DNA of prokaryotes is organized into a circular chromosome, supercoiled within the nucleoid region of the cell cytoplasm. Proteins that are needed for a specific function, or that are involved in the same biochemical pathway, are encoded together in blocks called **operons**. For example, all of the genes needed to use lactose as an energy source are coded next to each other in the lactose (or *lac*) operon, and transcribed into a single mRNA.

In prokaryotic cells, there are three types of regulatory molecules that can affect the expression of operons: repressors, activators, and inducers. Repressors and activators are proteins produced in the cell. Both repressors and activators regulate gene expression by binding to specific DNA sites *adjacent* to the genes they control. *In general, activators bind to the promoter site, while repressors bind to operator regions.* **Repressors** prevent transcription of a gene in response to an external stimulus, whereas **activators** increase the transcription of a gene in response to an external stimulus. **Inducers** are small molecules that may be produced by the cell or that are in the cell's environment. Inducers either activate or repress transcription depending on the needs of the cell and the availability of substrate.

## The *trp* Operon: A Repressible Operon

Bacteria such as *Escherichia coli* need amino acids to survive, and are able to synthesize many of them. **Tryptophan** is one such amino acid that *E. coli* can either ingest from the environment or synthesize using enzymes that are encoded by five genes. These five genes are next to each other in what is called the **tryptophan (*trp*) operon** (see the figure below). The genes are transcribed into a single mRNA, which is then translated to produce all five enzymes. If tryptophan is present in the environment, then *E. coli* does not need to synthesize it and the *trp* operon is switched off. However, when tryptophan availability is low, the switch controlling the operon is turned on, the mRNA is transcribed, the enzyme proteins are translated, and tryptophan is synthesized.

{{< mediafigure src="biology/Figure_16_02_01-04e9" kind="diagram" eager="true" alt="Two-panel diagram of the trp operon's promoter, operator, and five genes (trpE, trpD, trpC, trpB, trpA) shown as a bar in sequential order. Top panel: with tryptophan present, a repressor bound to tryptophan sits on the operator and blocks RNA polymerase from moving past it. Bottom panel: with no tryptophan present, the repressor is off the operator and RNA polymerase moves through the genes unblocked." longdesc="Top panel, labeled 'When tryptophan is present, the trp repressor binds the operator, and RNA synthesis is blocked': the gene bar reads Promoter, Operator, trpE, trpD, trpC, trpB, trpA left to right; a peach oval labeled RNA Polymerase overlaps the Promoter and Operator; a red X sits between RNA Polymerase and an orange Repressor box on the Operator; a blue pentagon labeled Tryptophan points into the Repressor box with an arrow. Bottom panel, labeled 'In the absence of tryptophan, the repressor dissociates from the operator, and RNA synthesis proceeds': the same gene bar; the RNA Polymerase oval now has a black arrow running through the Operator into trpE; a separate, unbound orange Repressor box sits below and to the right of the bar." >}}
The tryptophan operon. The five genes that are needed to synthesize tryptophan in *E. coli* are located next to each other in the *trp* operon. When tryptophan is plentiful, two tryptophan molecules bind the repressor protein at the operator sequence. This physically blocks the RNA polymerase from transcribing the tryptophan genes. When tryptophan is absent, the repressor protein does not bind to the operator and the genes are transcribed.
{{< /mediafigure >}}

The *trp* operon includes three important regions: the coding region, the *trp* operator and the *trp* promoter. The coding region includes the genes for the five tryptophan biosynthesis enzymes. Just before the coding region is the **transcriptional start site**. The promoter sequence, to which RNA polymerase binds to initiate transcription, is before or "upstream" of the transcriptional start site. Between the promoter and the transcriptional start site is the operator region.

The *trp* **operator** contains the DNA code to which the *trp* repressor protein can bind. However, the repressor alone cannot bind to the operator. When tryptophan is present in the cell, two tryptophan molecules bind to the *trp* repressor, which changes the shape of the repressor protein to a form that can bind to the *trp* operator. Binding of the tryptophan–repressor complex at the operator physically prevents the RNA polymerase from binding to the promoter and transcribing the downstream genes.

When tryptophan is not present in the cell, the repressor by itself does not bind to the operator, the polymerase can transcribe the enzyme genes, and tryptophan is synthesized. Because the repressor protein actively binds to the operator to keep the genes turned off, the *trp* operon is said to be *negatively regulated* and the proteins that bind to the operator to silence *trp* expression are **negative regulators**.

{{< callout type="info" >}}
**Link to Learning.** Watch [a video about the *trp* operon](https://www.openstax.org/l/trp_operon).
{{< /callout >}}

## Catabolite Activator Protein (CAP): A Transcriptional Activator

Just as the *trp* operon is negatively regulated by tryptophan molecules, there are proteins that bind to the promoter sequences that act as **positive regulators** to turn genes on and activate them. For example, when glucose is scarce, *E. coli* bacteria can turn to other sugar sources for fuel. To do this, new genes to process these alternate sugars must be transcribed. When glucose levels drop, cyclic AMP (cAMP) begins to accumulate in the cell. The cAMP molecule is a signaling molecule that is involved in glucose and energy metabolism in *E. coli*. Accumulating cAMP binds to the positive regulator **catabolite activator protein (CAP)**, a protein that binds to the promoters of operons which control the processing of alternative sugars. When cAMP binds to CAP, the complex then binds to the promoter region of the genes that are needed to use the alternate sugar sources (see the figure below). In these operons, a CAP-binding site is located upstream of the RNA-polymerase-binding site in the promoter. CAP binding stabilizes the binding of RNA polymerase to the promoter region and increases transcription of the associated protein-coding genes.

{{< mediafigure src="biology/Figure_16_02_02-994c" kind="diagram" alt="Two-panel diagram of the lac operon's promoter, operator, and three genes (lacZ, lacY, lacA) shown as a bar. Top panel: CAP is unbound and floats free; RNA polymerase transcribes the genes at a low rate. Bottom panel: a cAMP + CAP complex is attached to the promoter's left edge, and RNA polymerase transcribes the genes at a visibly faster rate." longdesc="Top panel, labeled 'In the absence of cAMP, CAP does not bind the promoter. Transcription occurs at a low rate': a green oval labeled CAP sits apart from the gene bar, which reads Promoter, Operator, lacZ, lacY, lacA; a peach oval labeled RNA Polymerase overlaps the Promoter, with a thin black arrow pointing right toward the genes. Bottom panel, labeled 'In the presence of cAMP, CAP binds the promoter and increases RNA polymerase activity': the same gene bar, now with a green oval labeled cAMP + CAP attached to the left edge of the Promoter; the RNA Polymerase oval overlaps the Promoter as before, but the arrow toward the genes is thick and orange." >}}
Transcriptional activation by the CAP protein. When glucose levels fall, *E. coli* may use other sugars for fuel but must transcribe new genes to do so. As glucose supplies become limited, cAMP levels increase. This cAMP binds to the CAP protein, a positive regulator that binds to a promoter region upstream of the genes required to use other sugar sources.
{{< /mediafigure >}}

## The *lac* Operon: An Inducible Operon

The third type of gene regulation in prokaryotic cells occurs through *inducible operons*, which have proteins that bind to activate or repress transcription depending on the local environment and the needs of the cell. The *lac* operon is a typical inducible operon. As mentioned previously, *E. coli* is able to use other sugars as energy sources when glucose concentrations are low. One such sugar source is lactose. The ***lac* operon** encodes the genes necessary to acquire and process the lactose from the local environment. The Z gene of the *lac* operon encodes beta-galactosidase, which breaks lactose down to glucose and galactose.

However, for the *lac* operon to be activated, two conditions must be met. First, the level of glucose must be very low or non-existent. Second, lactose must be present. Only when glucose is absent and lactose is present will the *lac* operon be transcribed (see the figure below). In the absence of glucose, the binding of the CAP protein makes transcription of the *lac* operon more effective. When lactose is present, its metabolite, allolactose, binds to the *lac* repressor and changes its shape so that it cannot bind to the *lac* operator to prevent transcription. This combination of conditions makes sense for the cell, because it would be energetically wasteful to synthesize the enzymes to process lactose if glucose was plentiful or lactose was not available. It should be mentioned that the lac operon is transcribed at a very low rate even when glucose is present and lactose absent.

{{< mediafigure src="biology/Figure_16_02_03" kind="diagram" alt="Four-panel diagram of the lac operon's promoter, operator, and three genes (lacZ, lacY, lacA) shown as a bar, working through the four combinations of lactose and cAMP-CAP that determine whether RNA polymerase transcribes the genes, is blocked, or transcribes slowly." longdesc="Panel 1, labeled 'In the absence of lactose, the lac repressor binds the operator, and transcription is blocked': the gene bar reads Promoter, Operator, lacZ, lacY, lacA; RNA Polymerase overlaps the Promoter, a red X sits between it and a blue-grey Repressor box on the Operator. Panel 2, labeled 'In the presence of lactose, the lac repressor is released from the operator, and transcription proceeds at a slow rate': the same bar; RNA Polymerase has a thin black arrow through to the genes; the Repressor box sits detached to the right, with a small blue circle labeled Allolactose attached to it. Panel 3, labeled 'cAMP-CAP complex stimulates RNA Polymerase activity and increases RNA synthesis': a green oval labeled cAMP + CAP is attached to the left edge of the Promoter; RNA Polymerase has a thick orange arrow through to the genes. Panel 4, labeled 'However, even in the presence of cAMP-CAP complex, RNA synthesis is blocked when the repressor is bound to the operator': the cAMP + CAP oval is still attached to the Promoter, but a red X and a blue-grey Repressor box on the Operator again block RNA Polymerase." >}}
Regulation of the *lac* operon. Transcription of the *lac* operon is carefully regulated so that its expression only occurs when glucose is limited and lactose is present to serve as an alternative fuel source.
{{< /mediafigure >}}

{{< selfcheck question="In E. coli, the trp operon is on by default, while the lac operon is off. Why do you think that this is the case?" hint="Ask which of the two products, tryptophan or lactose, the cell always needs on hand, and which one is not always available in the environment." >}}
Tryptophan is an amino acid essential for making proteins, so the cell always needs to have some on hand. However, if plenty of tryptophan is present, it is wasteful to make more, and the expression of the *trp* operon is repressed. Lactose, a sugar found in milk, is not always available. It makes no sense to make the enzymes necessary to digest an energy source that is not available, so the *lac* operon is only turned on when lactose is present.
===CHECKS===
tryptophan is essential for making proteins, so the cell always needs some on hand
if plenty of tryptophan is present, it is wasteful to make more, and the trp operon is repressed
lactose is not always available
the lac operon is only turned on when lactose is present
{{< /selfcheck >}}

If glucose is present, then CAP fails to bind to the promoter sequence to activate transcription. If lactose is absent, then the repressor binds to the operator to prevent transcription. If either of these conditions is met, then transcription remains off. Only when glucose is absent and lactose is present is the *lac* operon transcribed at a higher rate. If both glucose and lactose are present, the transcription rate is low as the CAP is not bound to promote maximal rates of *lac* operon transcription (see the table below).

| Signals that Induce or Repress Transcription of the *lac* Operon | | | | |
|---|---|---|---|---|
| Glucose | CAP binds | Lactose | Repressor binds | Transcription |
| + | − | − | + | No |
| + | − | + | − | Some |
| − | + | − | + | No |
| − | + | + | − | Yes |

{{< callout type="info" >}}
**Link to Learning.** Watch [an animated tutorial about the workings of the *lac* operon](https://www.openstax.org/l/lac_operon).
{{< /callout >}}

## Summary

The regulation of gene expression in prokaryotic cells occurs at the transcriptional level. There are two majors kinds of proteins that control prokaryotic transcription: repressors and activators. Repressors bind to an operator region to block the action of RNA polymerase. Activators bind to the promoter to enhance the binding of RNA polymerase. Inducer molecules can increase transcription either by inactivating repressors or by activating activator proteins. In the *trp* operon, the *trp* repressor is itself activated by binding to tryptophan. Therefore, if tryptophan is not needed, the repressor is bound to the operator and transcription remains off. The *lac* operon is activated by the CAP (catabolite activator protein), which binds to the promoter to stabilize RNA polymerase binding. CAP is itself activated by cAMP, whose concentration rises as the concentration of glucose falls. However, the *lac* operon also requires the presence of lactose for transcription to occur. Lactose inactivates the *lac* repressor, and prevents the repressor protein from binding to the *lac* operator. With the repressor inactivated, transcription may proceed. Therefore glucose must be absent and lactose must be present for effective transcription of the *lac* operon.

## Key terms

- **activator** — protein that binds to prokaryotic promoters to increase transcription
- **catabolite activator protein (CAP)** — protein that complexes with cAMP to bind to the promoter sequences of operons which control sugar processing when glucose is not available
- **inducer** — a small molecule that either activates or represses transcription
- **inducible operon** — operon that can be activated or repressed depending on cellular needs and the surrounding environment
- ***lac* operon** — operon in prokaryotic cells that encodes genes required for processing and intake of lactose
- **negative regulator** — protein that prevents transcription
- **operator** — region of DNA outside of the promoter region that binds activators or repressors that control gene expression in prokaryotic cells
- **operon** — collection of genes involved in a pathway that are transcribed together as a single mRNA in prokaryotic cells
- **positive regulator** — protein that increases transcription
- **repressor** — protein that binds to the operator of prokaryotic genes to prevent transcription
- **transcriptional start site** — site at which transcription begins
- ***trp* operon** — series of genes necessary to synthesize tryptophan in prokaryotic cells
- **tryptophan** — amino acid that can be synthesized by prokaryotic cells when necessary

## Practice

### Describe the steps involved in prokaryotic gene regulation

{{< multiplechoice
  question="Prokaryotic cells lack a nucleus. Therefore, the genes in prokaryotic cells are:"
  answer="b and c are both true"
  hint="Check whether translation really can begin before transcription ends, and whether that also means transcription is controlled — both, one, or neither?"
>}}
all expressed, all of the time
transcribed and translated almost simultaneously
transcriptionally controlled because translation begins before transcription ends
b and c are both true
{{< /multiplechoice >}}

{{< selfcheck question="What is the difference between a repressible and an inducible operon?" hint="Think about which kind starts on and needs a block actively removed, and which kind starts off or on depending on conditions." >}}
A repressible operon uses a protein bound to the operator region of a gene to keep the gene repressed or silent. This repressor must be actively removed in order to transcribe the gene. An inducible operon is either activated or repressed depending on the needs of the cell and what is available in the local environment.
===CHECKS===
a repressible operon uses a protein bound to the promoter region to keep the gene repressed
this repressor must be actively removed in order to transcribe the gene
an inducible operon is activated or repressed depending on the needs of the cell and the local environment
{{< /selfcheck >}}

{{< textin
  question="A collection of genes involved in the same pathway that are transcribed together as a single mRNA in prokaryotic cells is called a(n) ________."
  answer="operon"
  accept="operons"
  hint="The lac and trp examples in this section are both named this way."
>}}

{{< textin
  question="In the trp operon, the DNA region between the promoter and the transcriptional start site, to which the repressor protein can bind, is called the ________."
  answer="operator"
  accept="operators"
  hint="It sits downstream of the promoter and is where the trp repressor binds when tryptophan is present."
>}}

{{< textin
  question="The site at which transcription begins, located just after a gene's promoter and operator, is called the ________."
  answer="transcriptional start site"
  accept="transcription start site"
  hint="RNA polymerase reaches this point right after it has bound the promoter."
>}}

### Explain the roles of activators, inducers, and repressors in gene regulation

{{< multiplechoice
  question="If glucose is absent, but so is lactose, the lac operon will be ________."
  answer="repressed"
  hint="Both conditions the section names for turning the operon fully on are not met here — check what happens when lactose alone is missing."
>}}
activated
repressed
activated, but only partially
mutated
{{< /multiplechoice >}}

{{< multiplechoice
  question="The ara operon is an inducible operon that controls the breakdown of the sugar arabinose. When arabinose is present in a bacterium it binds to the protein AraC, and the complex binds to the initiator site to promote transcription. In this scenario, AraC is a(n) ________."
  answer="activator"
  hint="AraC's binding to the initiator site promotes transcription rather than blocking it."
>}}
activator
inducer
repressor
operator
{{< /multiplechoice >}}

{{< selfcheck question="Describe how transcription in prokaryotic cells can be altered by external stimulation such as excess lactose in the environment." hint="Name the operon lactose induces, and the one other environmental condition that must also be met." >}}
Environmental stimuli can increase or induce transcription in prokaryotic cells. In this example, lactose in the environment will induce the transcription of the lac operon, but only if glucose is not available in the environment.
===CHECKS===
environmental stimuli can increase or induce transcription in prokaryotic cells
lactose in the environment will induce the transcription of the lac operon
only if glucose is not available in the environment
{{< /selfcheck >}}

{{< textin
  question="A protein that binds to a prokaryotic promoter sequence to increase transcription of a gene is called a(n) ________."
  answer="activator"
  accept="activators"
  hint="It is a positive regulator — the opposite of a repressor."
>}}

{{< textin
  question="A protein that binds to the operator of a prokaryotic gene to prevent its transcription is called a(n) ________."
  answer="repressor"
  accept="repressors"
  hint="Two molecules of tryptophan must bind this protein before it can bind the trp operator."
>}}

{{< textin
  question="A small molecule, produced by the cell or present in its environment, that can activate or repress transcription depending on the cell's needs is called a(n) ________."
  answer="inducer"
  accept="inducers"
  hint="Allolactose and cAMP both act as one of these in this section's examples."
>}}

---

<small>This section is adapted from [Biology 2e, Section 16.2: Prokaryotic Gene Regulation](https://openstax.org/books/biology-2e/pages/16-2-prokaryotic-gene-regulation) by Mary Ann Clark, Jung Choi, Matthew Douglas, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/biology-2e). Changes: figures re-encoded as WebP and set `kind="diagram"` (the manifest's file-extension guess called the first two figures "photo," but all three are labeled operon schematics); the source's letter-spelled screen-reader alts ("The t r p operon has a promoter...") rewritten as plain descriptions, with an extended description added to each figure since none of the three schematics' arrows, boxes, and labels are carried by their captions; internal print cross-references ("Figure 16.4") changed to "see the figure below" since figures are not numbered here; the note wrapping the Visual Connection question rendered as the figure plus the question kept in the body as a self-check, since the source keys it with a prose answer rather than a lettered option; the two Link to Learning notes rendered as callouts with descriptive link text; the source's glossary definition of "activator," which both the CNXML and the printed Key Terms page give as a protein that binds to prokaryotic "operators," corrected here to "promoters" to match this section's own explicit statement that "activators bind to the promoter site, while repressors bind to operator regions" (reported to the errata log); the end-of-section Review Questions and Critical Thinking Questions adapted into the closing interactive Practice block (multiple choice and self-check respectively); rubric checkpoints added to each self-check, decomposing its model answer (the source solution) into check-off clauses with no new claims; and six key-term recall items (operon, operator, transcriptional start site, activator, repressor, inducer) added from the glossary; the repressible-operon self-check's source solution corrected from a protein bound to the "promoter region" to the "operator region", per the module's own sentence that repressors bind operator regions (reported as a source defect); and the tryptophan self-check's source phrase "the expression of the trp receptor is repressed" corrected to "the trp operon", matching every other passage in the module (reported as a source defect).</small>
