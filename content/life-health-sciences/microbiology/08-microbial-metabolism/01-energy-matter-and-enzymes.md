---
title: Energy, Matter, and Enzymes
description: >-
  Metabolism, oxidation-reduction reactions, and the electron carriers ATP,
  NAD⁺, and NADP⁺ that power a cell's catabolic and anabolic pathways, plus
  how enzymes lower activation energy and how competitive and noncompetitive
  inhibitors regulate them — adapted from OpenStax Microbiology, Section 8.1.
source_section: "8.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Define and describe metabolism
- Compare and contrast autotrophs and heterotrophs
- Describe the importance of oxidation-reduction reactions in metabolism
- Describe why ATP, FAD, NAD⁺, and NADP⁺ are important in a cell
- Identify the structure and structural components of an enzyme
- Describe the differences between competitive and noncompetitive enzyme inhibitors
{{< /callout >}}

{{< callout type="info" >}}
**Clinical Focus.** *Part 1*

Hannah is a 15-month-old girl from Washington state. She is spending the summer in Gambia, where her parents are working for a nongovernmental organization. About 3 weeks after her arrival in Gambia, Hannah's appetite began to diminish and her parents noticed that she seemed unusually sluggish, fatigued, and confused. She also seemed very irritable when she was outdoors, especially during the day. When she began vomiting, her parents figured she had caught a 24-hour virus, but when her symptoms persisted, they took her to a clinic. The local physician noticed that Hannah's reflexes seemed abnormally slow, and when he examined her eyes with a light, she seemed unusually light sensitive. She also seemed to be experiencing a stiff neck.

- What are some possible causes of Hannah's symptoms?

The case continues in [Fermentation](/life-health-sciences/microbiology/08-microbial-metabolism/04-fermentation/).
{{< /callout >}}

The term used to describe all of the chemical reactions inside a cell is **metabolism** (shown in the figure below). Cellular processes such as the building or breaking down of complex molecules occur through series of stepwise, interconnected chemical reactions called metabolic pathways. Reactions that are spontaneous and release energy are **exergonic reaction**s, whereas **endergonic reaction**s require energy to proceed. The term **anabolism** refers to those endergonic metabolic pathways involved in biosynthesis, converting simple molecular building blocks into more complex molecules, and fueled by the use of cellular energy. Conversely, the term **catabolism** refers to exergonic pathways that break down complex molecules into simpler ones. Molecular energy stored in the bonds of complex molecules is released in catabolic pathways and harvested in such a way that it can be used to produce high-energy molecules, which are used to drive anabolic pathways. Thus, in terms of energy and molecules, cells are continually balancing catabolism with anabolism.

{{< mediafigure src="microbiology/OSC_Microbio_08_01_metabolism" kind="diagram" eager="true" alt="A cyclic diagram: four blue circles joined into one chain at the bottom break apart into four separate circles at top, releasing energy shown as a yellow burst labeled '+ energy' — this is catabolism, breaking a large molecule down into smaller ones and releasing energy. The reverse arrow, from the four separate circles and the energy burst back down to the joined chain, is anabolism, assembling small molecules into a larger one using energy. Both arrows meet at the center word 'METABOLISM.'" >}}
Metabolism includes catabolism and anabolism. Anabolic pathways require energy to synthesize larger molecules. Catabolic pathways generate energy by breaking down larger molecules. Both types of pathways are required for maintaining the cell's energy balance.
{{< /mediafigure >}}

## Classification by Carbon and Energy Source

Organisms can be identified according to the source of carbon they use for metabolism as well as their energy source. The prefixes auto- ("self") and hetero- ("other") refer to the origins of the carbon sources various organisms can use. Organisms that convert inorganic carbon dioxide (CO₂) into organic carbon compounds are **autotrophs**. Plants and cyanobacteria are well-known examples of autotrophs. Conversely, **heterotrophs** rely on more complex organic carbon compounds as nutrients; these are provided to them initially by autotrophs. Many organisms, ranging from humans to many prokaryotes, including the well-studied *Escherichia coli*, are heterotrophic.

Organisms can also be identified by the energy source they use. All energy is derived from the transfer of electrons, but the source of electrons differs between various types of organisms. The prefixes photo- ("light") and chemo- ("chemical") refer to the energy sources that various organisms use. Those that get their energy for electron transfer from light are **phototrophs**, whereas **chemotrophs** obtain energy for electron transfer by breaking chemical bonds. There are two types of chemotrophs: **organotrophs** and **lithotrophs**. Organotrophs, including humans, fungi, and many prokaryotes, are chemotrophs that obtain energy from organic compounds. Lithotrophs ("litho" means "rock") are chemotrophs that get energy from inorganic compounds, including hydrogen sulfide (H₂S) and reduced iron. Lithotrophy is unique to the microbial world.

The strategies used to obtain both carbon and energy can be combined for the classification of organisms according to nutritional type. Most organisms are chemoheterotrophs because they use organic molecules as both their electron and carbon sources. The table below summarizes this and the other classifications.

**Classifications of Organisms by Energy and Carbon Source**

| Classification | Type | Energy Source | Carbon Source | Examples |
|---|---|---|---|---|
| Chemotrophs | Chemoautotrophs | Chemical | Inorganic | Hydrogen-, sulfur-, iron-, nitrogen-, and carbon monoxide-oxidizing bacteria |
| Chemotrophs | Chemoheterotrophs | Chemical | Organic compounds | All animals, fungi, and most protozoa and bacteria |
| Phototrophs | Photoautotrophs | Light | Inorganic | All plants, algae, cyanobacteria, and green and purple sulfur bacteria |
| Phototrophs | Photoheterotrophs | Light | Organic compounds | Green and purple nonsulfur bacteria, heliobacteria |

**Check Your Understanding**

{{< sortbins question="Explain the difference between catabolism and anabolism. Sort each phrase under the pathway it describes." hint="Sort each phrase by whether it describes molecules being broken down or being built up." >}}
{"bins": ["Catabolism", "Anabolism"],
 "items": [
  {"label": "Breaks down complex molecules into simpler ones", "bin": 0},
  {"label": "Builds simple molecular building blocks into more complex molecules", "bin": 1},
  {"label": "An exergonic pathway", "bin": 0},
  {"label": "An endergonic pathway", "bin": 1},
  {"label": "Releases energy that is harvested to produce high-energy molecules", "bin": 0},
  {"label": "Fueled by the use of cellular energy", "bin": 1}]}
{{< /sortbins >}}

{{< sortbins question="Explain the difference between autotrophs and heterotrophs. Sort each phrase under the type of organism it describes." hint="Sort each phrase by whether its carbon source is inorganic or organic." >}}
{"bins": ["Autotrophs", "Heterotrophs"],
 "items": [
  {"label": "Hydrogen-, sulfur-, iron-, nitrogen-, and carbon monoxide-oxidizing bacteria, which use an inorganic carbon source", "bin": 0},
  {"label": "All animals, fungi, and most protozoa and bacteria, which use an organic carbon source", "bin": 1},
  {"label": "All plants, algae, cyanobacteria, and green and purple sulfur bacteria, which use an inorganic carbon source", "bin": 0},
  {"label": "Green and purple nonsulfur bacteria and heliobacteria, which use an organic carbon source", "bin": 1}]}
{{< /sortbins >}}

## Oxidation and Reduction in Metabolism

The transfer of electrons between molecules is important because most of the energy stored in atoms and used to fuel cell functions is in the form of high-energy electrons. The transfer of energy in the form of electrons allows the cell to transfer and use energy incrementally; that is, in small packages rather than a single, destructive burst. Reactions that remove electrons from donor molecules, leaving them oxidized, are **oxidation reactions**; those that add electrons to acceptor molecules, leaving them reduced, are **reduction reactions**. Because electrons can move from one molecule to another, oxidation and reduction occur in tandem. These pairs of reactions are called oxidation-reduction reactions, or **redox reactions**.

## Energy Carriers: NAD⁺, NADP⁺, FAD, and ATP

The energy released from the breakdown of the chemical bonds within nutrients can be stored either through the reduction of electron carriers or in the bonds of adenosine triphosphate (ATP). In living systems, a small class of compounds functions as mobile **electron carriers**, molecules that bind to and shuttle high-energy electrons between compounds in pathways. The principal electron carriers we will consider originate from the B vitamin group and are derivatives of nucleotides; they are **nicotinamide adenine dinucleotide**, **nicotinamide adenine dinucleotide phosphate**, and **flavin adenine dinucleotide**. These compounds can be easily reduced or oxidized. Nicotinamide adenine dinucleotide (**NAD⁺/NADH**) is the most common mobile electron carrier used in catabolism. NAD⁺ is the oxidized form of the molecule; NADH is the reduced form of the molecule. Nicotinamide adenine dinucleotide phosphate (**NADP⁺**), the oxidized form of an NAD⁺ variant that contains an extra phosphate group, is another important electron carrier; it forms **NADPH** when reduced. The oxidized form of flavin adenine dinucleotide is **FAD**, and its reduced form is **FADH₂**. Both NAD⁺/NADH and FAD/FADH₂ are extensively used in energy extraction from sugars during catabolism in chemoheterotrophs, whereas NADP⁺/NADPH plays an important role in anabolic reactions and photosynthesis. Collectively, FADH₂, NADH, and NADPH are often referred to as having reducing power due to their ability to donate electrons to various chemical reactions.

A living cell must be able to handle the energy released during catabolism in a way that enables the cell to store energy safely and release it for use only as needed. Living cells accomplish this by using the compound **adenosine triphosphate (ATP)**. ATP is often called the "energy currency" of the cell, and, like currency, this versatile compound can be used to fill any energy need of the cell. At the heart of ATP is a molecule of **adenosine monophosphate (AMP)**, which is composed of an adenine molecule bonded to a ribose molecule and a single phosphate group. Ribose is a five-carbon sugar found in RNA, and AMP is one of the nucleotides in RNA. The addition of a second phosphate group to this core molecule results in the formation of **adenosine diphosphate (ADP)**; the addition of a third phosphate group forms ATP (shown below). Adding a phosphate group to a molecule, a process called phosphorylation, requires energy. Phosphate groups are negatively charged and thus repel one another when they are arranged in series, as they are in ADP and ATP. This repulsion makes the ADP and ATP molecules inherently unstable. Thus, the bonds between phosphate groups (one in ADP and two in ATP) are called **high-energy phosphate bonds**. When these high-energy bonds are broken to release one phosphate (called **inorganic phosphate [Pᵢ]**) or two connected phosphate groups (called **pyrophosphate [PPᵢ]**) from ATP through a process called dephosphorylation, energy is released to drive endergonic reactions (shown in the figure below).

{{< mediafigure src="microbiology/OSC_Microbio_08_01_ATP" kind="diagram" alt="A cyclic diagram: a pink-outlined arrow labeled 'solar or chemical energy' points to a molecule with an adenine/ribose structure and three linked phosphate groups, labeled ATP; phosphorylation forms ATP from ADP + P. A curved arrow leads down to a molecule with two linked phosphate groups and one free phosphate, labeled ADP + P; dephosphorylation breaks ATP down to ADP + P, and the released energy leaves through a pink-outlined arrow labeled 'energy available for cellular work, including anabolism.'" >}}
The energy released from dephosphorylation of ATP is used to drive cellular work, including anabolic pathways. ATP is regenerated through phosphorylation, harnessing the energy found in chemicals or from sunlight. (credit: modification of work by Robert Bear, David Rintoul)
{{< /mediafigure >}}

{{< mediafigure src="microbiology/OSC_Microbio_08_01_EndoExo" kind="diagram" alt="A diamond diagram labeled 'exergonic' on one diagonal and 'endergonic' on the other. On the exergonic (red) side, glucose is broken down through glycolysis, the Krebs cycle, and oxidative phosphorylation into CO₂, H₂O, and heat, building ATP from ADP + Pᵢ at the center. On the endergonic (blue) side, ADP + Pᵢ from that same center is converted back to ATP, whose breakdown drives bond formation joining glucose into a polysaccharide." >}}
Exergonic reactions are coupled to endergonic ones, making the combination favorable. Here, the endergonic reaction of ATP phosphorylation is coupled to the exergonic reactions of catabolism. Similarly, the exergonic reaction of ATP dephosphorylation is coupled to the endergonic reaction of polysaccharide formation, an example of anabolism.
{{< /mediafigure >}}

**Check Your Understanding**

{{< multiplechoice question="What is the function of an electron carrier?" answer="It binds to and shuttles high-energy electrons between compounds in metabolic pathways." hint="Distinguish the role of these molecules from what enzymes, ATP, and inhibitors each do." >}}
It binds to and shuttles high-energy electrons between compounds in metabolic pathways.
It lowers the activation energy needed for a reaction to proceed.
It stores chemical energy safely in high-energy phosphate bonds for later use.
It binds to an enzyme's allosteric site to block substrate binding.
{{< /multiplechoice >}}

## Enzyme Structure and Function

A substance that helps speed up a chemical reaction is a **catalyst**. Catalysts are not used or changed during chemical reactions and, therefore, are reusable. Whereas inorganic molecules may serve as catalysts for a wide range of chemical reactions, proteins called **enzyme**s serve as catalysts for biochemical reactions inside cells. Enzymes thus play an important role in controlling cellular metabolism.

An enzyme functions by lowering the **activation energy** of a chemical reaction inside the cell. Activation energy is the energy needed to form or break chemical bonds and convert reactants to products (shown below). Enzymes lower the activation energy by binding to the reactant molecules and holding them in such a way as to speed up the reaction.

{{< mediafigure src="microbiology/OSC_Microbio_08_01_Enzymes" kind="diagram" alt="A line graph of energy (y-axis) versus reaction path (x-axis) comparing a reaction with and without a catalyst. Both curves start at the same flat 'reactants' level, rise to a peak, then drop to the same flat 'products' level, with products lower than reactants (the gap marked delta H). The catalyzed (red, dashed) curve's peak is much lower than the uncatalyzed (green, solid) curve's peak, showing a smaller activation energy." longdesc="A green solid line traces the reaction without a catalyst: a flat segment labeled 'reactants,' a rise to a tall peak — the vertical distance from the reactants level to this peak is labeled 'activation energy (X→Y)' — then a drop to a lower flat segment labeled 'products.' The vertical distance from the products level back up to the same peak is labeled 'activation energy (Y→X),' and the vertical distance between the reactants and products levels is labeled delta H. A red dashed line traces the same reaction with a catalyst: it starts and ends at the same reactants and products levels, but its peak is much lower than the green line's peak, showing a smaller activation energy for the catalyzed reaction." >}}
Enzymes lower the activation energy of a chemical reaction.
{{< /mediafigure >}}

The chemical reactants to which an enzyme binds are called **substrates**, and the location within the enzyme where the substrate binds is called the enzyme's **active site**. The characteristics of the amino acids near the active site create a very specific chemical environment within the active site that induces suitability to binding, albeit briefly, to a specific substrate (or substrates). Due to this jigsaw puzzle-like match between an enzyme and its substrates, enzymes are known for their specificity. In fact, as an enzyme binds to its substrate(s), the enzyme structure changes slightly to find the best fit between the transition state (a structural intermediate between the substrate and product) and the active site, just as a rubber glove molds to a hand inserted into it. This active-site modification in the presence of substrate, along with the simultaneous formation of the transition state, is called induced fit (shown below). Overall, there is a specifically matched enzyme for each substrate and, thus, for each chemical reaction; however, there is some flexibility as well. Some enzymes have the ability to act on several different structurally related substrates.

{{< mediafigure src="microbiology/OSC_Microbio_08_01_InducedFit" kind="diagram" alt="Four numbered panels show an enzyme, drawn as a gray sphere with a notch, binding a substrate at its active site. Panel 1: a matching green substrate approaches the notch. Panel 2: the substrate is seated in the notch, and the enzyme has changed shape slightly around it. Panel 3: the substrate has changed into two differently colored, differently shaped pieces (the products) while still in the notch. Panel 4: the two product pieces are shown leaving the notch." longdesc="1. Substrate enters the active site of the enzyme: a green two-part shape approaches a matching notch in the gray enzyme. 2. The enzyme/substrate complex forms: the substrate sits in the notch, and the enzyme's shape has changed slightly to better fit it. 3. The substrate is converted to products: the same notch now holds two differently colored, differently shaped pieces — a blue rounded piece and a yellow triangular piece — in place of the green substrate. 4. The products leave the active site: the blue and yellow pieces move away from the now-empty notch." >}}
According to the induced-fit model, the active site of the enzyme undergoes conformational changes upon binding with the substrate.
{{< /mediafigure >}}

Enzymes are subject to influences by local environmental conditions such as pH, substrate concentration, and temperature. Although increasing the environmental temperature generally increases reaction rates, enzyme catalyzed or otherwise, increasing or decreasing the temperature outside of an optimal range can affect chemical bonds within the active site, making them less well suited to bind substrates. High temperatures will eventually cause enzymes, like other biological molecules, to denature, losing their three-dimensional structure and function. Enzymes are also suited to function best within a certain pH range, and, as with temperature, extreme environmental pH values (acidic or basic) can cause enzymes to denature. Active-site amino-acid side chains have their own acidic or basic properties that are optimal for catalysis and, therefore, are sensitive to changes in pH.

Another factor that influences enzyme activity is substrate concentration: Enzyme activity is increased at higher concentrations of substrate until it reaches a saturation point at which the enzyme can bind no additional substrate. Overall, enzymes are optimized to work best under the environmental conditions in which the organisms that produce them live. For example, while microbes that inhabit hot springs have enzymes that work best at high temperatures, human pathogens have enzymes that work best at 37°C. Similarly, while enzymes produced by most organisms work best at a neutral pH, microbes growing in acidic environments make enzymes optimized to low pH conditions, allowing for their growth at those conditions.

Many enzymes do not work optimally, or even at all, unless bound to other specific nonprotein helper molecules, either temporarily through ionic or hydrogen bonds or permanently through stronger covalent bonds. Binding to these molecules promotes optimal conformation and function for their respective enzymes. Two types of helper molecules are **cofactor**s and **coenzyme**s. Cofactors are inorganic ions such as iron (Fe²⁺) and magnesium (Mg²⁺) that help stabilize enzyme conformation and function. One example of an enzyme that requires a metal ion as a cofactor is the enzyme that builds DNA molecules, DNA polymerase, which requires a bound zinc ion (Zn²⁺) to function.

Coenzymes are organic helper molecules that are required for enzyme action. Like enzymes, they are not consumed and, hence, are reusable. The most common sources of coenzymes are dietary vitamins. Some vitamins are precursors to coenzymes and others act directly as coenzymes.

Some cofactors and coenzymes, like coenzyme A (CoA), often bind to the enzyme's active site, aiding in the chemistry of the transition of a substrate to a product (shown below). In such cases, an enzyme lacking a necessary cofactor or coenzyme is called an **apoenzyme** and is inactive. Conversely, an enzyme with the necessary associated cofactor or coenzyme is called a **holoenzyme** and is active. NADH and ATP are also both examples of commonly used coenzymes that provide high-energy electrons or phosphate groups, respectively, which bind to enzymes, thereby activating them.

{{< mediafigure src="microbiology/OSC_Microbio_08_01_ApoHolo" kind="diagram" alt="Two numbered panels show a cofactor or coenzyme, drawn as a small purple shape, binding to a notch in a gray enzyme. Panel 1: the purple shape approaches the enzyme's notch, which does not yet match a substrate. Panel 2: with the purple cofactor or coenzyme now bound in the notch, a large green substrate fits against the enzyme's new combined surface." longdesc="1. The apoenzyme becomes active by the binding of a coenzyme or cofactor to the enzyme: a small purple shape moves toward a notch in the gray enzyme that does not yet match any substrate. 2. The holoenzyme is formed once the cofactor or coenzyme is bound in the enzyme's active site: with the purple piece now seated in the notch, a large green substrate shape fits against the enzyme's new combined surface." >}}
The binding of a coenzyme or cofactor to an apoenzyme is often required to form an active holoenzyme.
{{< /mediafigure >}}

**Check Your Understanding**

{{< selfcheck question="What role do enzymes play in a chemical reaction?" hint="Think about what an enzyme lowers, what it binds, and where it binds it." >}}
An enzyme is a catalyst — it speeds up a chemical reaction inside the cell without being used up or changed itself, so it is reusable. It plays this role by lowering the reaction's activation energy, the energy needed to form or break chemical bonds and convert reactants to products. An enzyme lowers this activation energy by binding to the reactant molecules, called substrates, at its active site and holding them in a way that speeds up the reaction; this induced-fit binding brings the reaction to its transition state more readily than it could reach on its own.
===CHECKS===
speeds up a chemical reaction without being used up or changed itself
lowers the reaction's activation energy
binds to the reactant molecules, called substrates, at its active site
holds them in a way that speeds up the reaction
{{< /selfcheck >}}

## Enzyme Inhibitors

Enzymes can be regulated in ways that either promote or reduce their activity. There are many different kinds of molecules that inhibit or promote enzyme function, and various mechanisms exist for doing so (shown below). A **competitive inhibitor** is a molecule similar enough to a substrate that it can compete with the substrate for binding to the active site by simply blocking the substrate from binding. For a competitive inhibitor to be effective, the inhibitor concentration needs to be approximately equal to the substrate concentration. Sulfa drugs provide a good example of competitive inhibition. They are used to treat bacterial infections because they bind to the active site of an enzyme within the bacterial folic acid synthesis pathway. When present in a sufficient dose, a sulfa drug prevents folic acid synthesis, and bacteria are unable to grow because they cannot synthesize DNA, RNA, and proteins. Humans are unaffected because we obtain folic acid from our diets.

On the other hand, a **noncompetitive (allosteric) inhibitor** binds to the enzyme at an **allosteric site**, a location other than the active site, and still manages to block substrate binding to the active site by inducing a conformational change that reduces the affinity of the enzyme for its substrate (shown below). Because only one inhibitor molecule is needed per enzyme for effective inhibition, the concentration of inhibitors needed for noncompetitive inhibition is typically much lower than the substrate concentration.

In addition to allosteric inhibitors, there are **allosteric activators** that bind to locations on an enzyme away from the active site, inducing a conformational change that increases the affinity of the enzyme's active site(s) for its substrate(s).

Allosteric control is an important mechanism of regulation of metabolic pathways involved in both catabolism and anabolism. In a most efficient and elegant way, cells have evolved also to use the products of their own metabolic reactions for **feedback inhibition** of enzyme activity. Feedback inhibition involves the use of a pathway product to regulate its own further production. The cell responds to the abundance of specific products by slowing production during anabolic or catabolic reactions (shown in the figure below).

{{< mediafigure src="microbiology/OSC_Microbio_08_01_EnzInh" kind="diagram" alt="Two side-by-side diagrams of the same gray enzyme, each with a substrate shown above it and an allosteric site marked on the enzyme (the notch where the substrate binds is not separately labeled). Left, 'Competitive inhibition': a pink square inhibitor occupies that notch itself, blocking the substrate from binding there. Right, 'Noncompetitive inhibition': the pink square inhibitor instead occupies the labeled allosteric site, a separate location from the notch." >}}
Enzyme activity can be regulated by either competitive inhibitors, which bind to the active site, or noncompetitive inhibitors, which bind to an allosteric site.
{{< /mediafigure >}}

{{< mediafigure src="microbiology/OSC_Microbio_08_01_InhAct" kind="diagram" alt="Two-part diagram of enzyme regulation. Part (a): two side-by-side pairs of enzyme drawings compare allosteric inhibition and allosteric activation, each shown before and after a pink square (inhibitor or activator) binds the enzyme's allosteric site, changing the shape of its active site. Part (b): a chain of three gray enzymes converts a substrate through two intermediate substrates to an end product, with the end product looping back along a red arrow to block the first enzyme from binding new substrate." longdesc="(a) Left pair, allosteric inhibition: before binding, the enzyme's active site matches its substrate; after a pink square inhibitor binds the allosteric site, the active site's shape changes so the substrate can no longer fit. Right pair, allosteric activation: before binding, the enzyme's altered active site does not match the substrate; after a pink square activator binds the allosteric site, the active site's shape changes so the substrate now fits. (b) A row of three enzymes reads left to right: enzyme 1 converts a substrate into intermediate substrate A; enzyme 2 converts intermediate substrate A into intermediate substrate B; enzyme 3 converts intermediate substrate B into the end product. A red arrow carries the end product back from enzyme 3 all the way to enzyme 1, where it binds and blocks the original substrate from binding — the feedback inhibition of the pathway." >}}
(a) Binding of an allosteric inhibitor reduces enzyme activity, but binding of an allosteric activator increases enzyme activity. (b) Feedback inhibition, where the end product of the pathway serves as a noncompetitive inhibitor to an enzyme early in the pathway, is an important mechanism of allosteric regulation in cells.
{{< /mediafigure >}}

**Check Your Understanding**

{{< selfcheck question="Explain the difference between a competitive inhibitor and a noncompetitive inhibitor." hint="Compare where each type of inhibitor binds on the enzyme and how much of it is needed relative to the substrate." >}}
A competitive inhibitor is a molecule similar enough to a substrate that it can compete with the substrate for binding to the enzyme's active site, simply blocking the substrate from binding there; for a competitive inhibitor to be effective, its concentration needs to be approximately equal to the substrate concentration. A noncompetitive (allosteric) inhibitor instead binds to the enzyme at an allosteric site, a location other than the active site, and still blocks substrate binding by inducing a conformational change that reduces the active site's affinity for the substrate; because only one inhibitor molecule is needed per enzyme for effective inhibition, the concentration of inhibitor needed for noncompetitive inhibition is typically much lower than the substrate concentration.
===CHECKS===
a competitive inhibitor binds to the enzyme's active site, blocking the substrate from binding there
a competitive inhibitor's concentration needs to be approximately equal to the substrate concentration
a noncompetitive (allosteric) inhibitor binds to an allosteric site, a location other than the active site
a noncompetitive inhibitor induces a conformational change that reduces the active site's affinity for the substrate
{{< /selfcheck >}}

## Summary

- **Metabolism** includes chemical reactions that break down complex molecules (**catabolism**) and those that build complex molecules (**anabolism**).
- Organisms may be classified according to their source of carbon. **Autotrophs** convert inorganic carbon dioxide into organic carbon; **heterotrophs** use fixed organic carbon compounds.
- Organisms may also be classified according to their energy source. **Phototrophs** obtain their energy from light. **Chemotrophs** get their energy from chemical compounds. **Organotrophs** use organic molecules, and **lithotrophs** use inorganic chemicals.
- Cellular **electron carriers** accept high-energy electrons from foods and later serve as electron donors in subsequent **redox reactions**. **FAD/FADH₂, NAD⁺/NADH**, **and NADP⁺/NADPH** are important electron carriers.
- **Adenosine triphosphate (ATP)** serves as the energy currency of the cell, safely storing chemical energy in its two **high-energy phosphate bonds** for later use to drive processes requiring energy.
- **Enzymes** are biological **catalysts** that increase the rate of chemical reactions inside cells by lowering the activation energy required for the reaction to proceed.
- In nature, **exergonic reactions** do not require energy beyond activation energy to proceed, and they release energy. They may proceed without enzymes, but at a slow rate. Conversely, **endergonic reactions** require energy beyond activation energy to occur. In cells, endergonic reactions are coupled to exergonic reactions, making the combination energetically favorable.
- **Substrates** bind to the enzyme's **active site**. This process typically alters the structures of both the active site and the substrate, favoring transition-state formation; this is known as **induced fit**.
- **Cofactors** are inorganic ions that stabilize enzyme conformation and function. **Coenzymes** are organic molecules required for proper enzyme function and are often derived from vitamins. An enzyme lacking a cofactor or coenzyme is an **apoenzyme;** an enzyme with a bound cofactor or coenzyme is a **holoenzyme**.
- **Competitive inhibitors** regulate enzymes by binding to an enzyme's active site, preventing substrate binding. **Noncompetitive (allosteric) inhibitors** bind to **allosteric sites**, inducing a conformational change in the enzyme that prevents it from functioning. **Feedback inhibition** occurs when the product of a metabolic pathway noncompetitively binds to an enzyme early on in the pathway, ultimately preventing the synthesis of the product.

## Key terms

- **metabolism** — all of the chemical reactions inside of cells.
- **exergonic reaction** — chemical reaction that does not require energy beyond activation energy to proceed; releases energy when the reaction occurs.
- **endergonic reaction** — chemical reaction that requires energy beyond activation energy to occur.
- **anabolism** — chemical reactions that convert simpler molecules into more complex ones.
- **catabolism** — chemical reactions that break down complex molecules into simpler ones.
- **autotroph** — organism that converts inorganic carbon dioxide into organic carbon.
- **heterotroph** — organism that uses fixed organic carbon compounds as its carbon source.
- **phototroph** — organism that gets its energy from light.
- **chemotroph** — organism that gets its energy from the transfer of electrons originating from chemical compounds.
- **organotroph** — chemotroph that uses organic molecules as its electron source; also known as chemoheterotroph.
- **lithotroph** — chemotroph that uses inorganic chemicals as its electron source; also known as chemoautotroph.
- **oxidation reactions** — chemical reaction that removes electrons (often as part of H atoms) from donor molecules, leaving them oxidized.
- **reduction reactions** — chemical reaction that adds electrons to acceptor molecules, leaving them reduced.
- **redox reactions** — pairing of an oxidation reaction with a reduction reaction.
- **electron carrier** — cellular molecule that accepts high-energy electrons from reduced molecules like foods and later serves as an electron donor in subsequent redox reactions.
- **nicotinamide adenine dinucleotide** (NAD⁺/NADH) — the most common mobile electron carrier used in catabolism; NAD⁺ is its oxidized form and NADH is its reduced form.
- **nicotinamide adenine dinucleotide phosphate** (NADP⁺/NADPH) — an NAD⁺ variant that contains an extra phosphate group; NADP⁺ is its oxidized form and NADPH is its reduced form.
- **flavin adenine dinucleotide** (FAD/FADH₂) — an electron carrier whose oxidized form is FAD and whose reduced form is FADH₂.
- **adenosine triphosphate (ATP)** — energy currency of the cell; a nucleotide derivative that safely stores chemical energy in its two high-energy phosphate bonds.
- **adenosine monophosphate (AMP)** — adenine molecule bonded to a ribose molecule and to a single phosphate group, having no high-energy phosphate bonds.
- **adenosine diphosphate (ADP)** — nucleotide derivative and relative of ATP containing only one high-energy phosphate bond.
- **high-energy phosphate bond** — bond between the negatively charged phosphate groups that holds a lot of potential energy.
- **inorganic phosphate [Pᵢ]** — single phosphate group in solution.
- **pyrophosphate [PPᵢ]** — two connected phosphate groups in solution.
- **catalyst** — molecule that increases the rate of a chemical reaction but is not used or changed during the chemical reaction and, thus, is reusable.
- **enzyme** — catalyst for biochemical reactions inside cells.
- **activation energy** — energy needed to form or break chemical bonds and convert a reactant or reactants to a product or products.
- **substrate** — chemical reactants of an enzymatic reaction.
- **active site** — location within an enzyme where substrate(s) bind.
- **cofactor** — inorganic ion that helps stabilize enzyme conformation and function.
- **coenzyme** — organic molecule required for proper enzyme function that is not consumed and is reusable.
- **apoenzyme** — enzyme without its cofactor or coenzyme.
- **holoenzyme** — enzyme with a bound cofactor or coenzyme.
- **competitive inhibitor** — molecule that binds to an enzyme's active site, preventing substrate binding.
- **noncompetitive (allosteric) inhibitor** — molecule that binds to allosteric sites, inducing a conformational change in the enzyme's structure that prevents it from functioning.
- **allosteric site** — location within an enzyme, other than the active site, to which molecules can bind, regulating enzyme activity.
- **allosteric activators** — molecule that binds to an enzyme's allosteric site, increasing the affinity of the enzyme's active site for the substrate(s).
- **feedback inhibition** — mechanism of regulating metabolic pathway whereby the product of a metabolic pathway noncompetitively binds to an enzyme early on in the pathway, temporarily preventing the synthesis of the product.

## Practice

### Define and describe metabolism

{{< textin question="Processes in which cellular energy is used to make complex molecules from simpler ones are described as ________." answer="anabolic" hint="This is the adjective form of the endergonic pathway that builds molecules up rather than breaking them down." >}}

{{< textin question="Exergonic pathways that break down complex molecules into simpler ones are called ________." answer="catabolism" hint="Contrast this with the pathway that uses cellular energy to build complex molecules from simpler ones." >}}

{{< textin question="All of the chemical reactions inside a cell are collectively known as a cell's ________." answer="metabolism" hint="This single word names the whole balance of building-up and breaking-down reactions this section describes." >}}

### Compare and contrast autotrophs and heterotrophs

{{< multiplechoice question="Which of the following is an organism that obtains its energy from the transfer of electrons originating from chemical compounds and its carbon from an inorganic source?" answer="chemoautotroph" hint="Match the chemo- prefix to its energy source and the auto- prefix to its carbon source." >}}
chemoautotroph
chemoheterotroph
photoheterotroph
photoautotroph
{{< /multiplechoice >}}

{{< textin question="An organism that converts inorganic carbon dioxide into organic carbon compounds is called a(n) ________." answer="autotroph" hint="Plants and cyanobacteria are well-known examples." >}}

{{< textin question="An organism that relies on complex organic carbon compounds provided by other organisms, rather than making its own, is called a(n) ________." answer="heterotroph" hint="Humans and many prokaryotes, including E. coli, are examples." >}}

### Describe the importance of oxidation-reduction reactions in metabolism

{{< textin question="The loss of an electron from a molecule is called ________." answer="oxidation" hint="Contrast this with the paired process that adds an electron to a molecule." >}}

{{< multiplechoice question="In cells, can an oxidation reaction happen in the absence of a reduction reaction? Explain." answer="No, oxidation and reduction always occur together because the electrons removed from one molecule must be accepted by another." hint="Think about where the electrons removed from an oxidized molecule must go." >}}
No, oxidation and reduction always occur together because the electrons removed from one molecule must be accepted by another.
Yes, a molecule can lose electrons without any other molecule accepting them.
{{< /multiplechoice >}}

{{< textin question="A chemical reaction that adds electrons to acceptor molecules, leaving them reduced, is called a ________." answer="reduction reaction" hint="This is the paired opposite of the reaction that removes electrons from a donor molecule." >}}

### Describe why ATP, FAD, NAD⁺, and NADP⁺ are important in a cell

{{< multiplechoice question="Which of the following molecules is reduced?" answer="NADPH" hint="A reduced molecule is the one already carrying the extra electrons — look for the form with the added H." >}}
NAD⁺
FAD
O₂
NADPH
{{< /multiplechoice >}}

{{< textin question="FAD/FADH₂, NAD⁺/NADH, and NADP⁺/NADPH are important ________." answer="electron carriers" hint="Look at this subsection's title for the general name these molecules share." >}}

{{< textin question="The compound often called the cell's “energy currency,” which safely stores chemical energy in its two high-energy phosphate bonds, is ________." answer="ATP" accept="adenosine triphosphate" hint="Its structure is built from three linked phosphate groups on a nucleotide base." >}}

### Identify the structure and structural components of an enzyme

{{< multiplechoice question="Enzymes work by which of the following?" answer="reducing the activation energy" hint="Compare the height of the energy barrier a reaction must cross with and without a catalyst." >}}
increasing the activation energy
reducing the activation energy
making exergonic reactions endergonic
making endergonic reactions exergonic
{{< /multiplechoice >}}

{{< multiplechoice question="Which of the following are organic molecules that help enzymes work correctly?" answer="coenzymes" hint="Distinguish the organic helper molecules from the inorganic ions and from the enzyme states that result from binding either one." >}}
cofactors
coenzymes
holoenzymes
apoenzymes
{{< /multiplechoice >}}

{{< textin question="The part of an enzyme to which a substrate binds is called the ________." answer="active site" hint="This is where the substrate fits, much like a puzzle piece." >}}

### Describe the differences between competitive and noncompetitive enzyme inhibitors

{{< multiplechoice question="To which of the following does a competitive inhibitor most structurally resemble?" answer="the substrate" hint="A competitive inhibitor works by directly blocking the same binding location a substrate would use." >}}
the active site
the allosteric site
the substrate
a coenzyme
{{< /multiplechoice >}}

{{< multiplechoice question="Competitive inhibitors bind to allosteric sites." answer="False" hint="Compare where a competitive inhibitor binds with where a noncompetitive inhibitor binds." >}}
True
False
{{< /multiplechoice >}}

{{< textin question="The use of a pathway's own product to regulate its own further production is called ________." answer="feedback inhibition" hint="This mechanism lets the end of a pathway signal back to its own beginning." >}}

---

<small>This section is adapted from [Microbiology, Section 8.1: Energy, Matter, and Enzymes](https://openstax.org/books/microbiology/pages/8-1-energy-matter-and-enzymes) by Nina Parker, Mark Schneegurt, Anh-Hue Thi Tu, Philip Lister, Brian M. Forster, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/microbiology). Changes: all eight figures are re-encoded as WebP and rendered as mediafigures with explicit `kind="diagram"`, overriding the media manifest's file-extension guess of "photo" on every one (they are drawn schematic diagrams, not photographs); alts are rewritten from the served images, and the reaction-energy graph, the four-step induced-fit diagram, the two-step apoenzyme/holoenzyme diagram, and the two-part inhibition/activation/feedback diagram each carry a `longdesc` walking their numbered steps or panels in order, since their captions do not name the steps; the module prints "nicotine adenine dinucleotide phosphate" twice in the body (the compound is nicotinamide adenine dinucleotide phosphate, and the book's own Glossary appendix headword carries the same misspelling), corrected here to "nicotinamide" at both occurrences; the module's four-row classification table (Chemotrophs and Phototrophs each spanning two rows) is transcribed as a Markdown table from the table's own cells, not from its `summary` attribute, and is represented by two sort-into-bins activities in the body Check Your Understanding — the second, sorting the four nutritional types' own energy/carbon-source examples into Autotrophs and Heterotrophs, is built from the table, and the first, sorting catabolism and anabolism by their own distinguishing sentences, is built from the same subsection's prose; the Clinical Focus box is rendered as a callout, its "Jump to the next Clinical Focus box" link replaced by a plain sentence naming that the case continues in Fermentation; of the section's five body Check Your Understanding bullets, two (autotrophs/heterotrophs and the electron carrier's function) are graded from the module's own table and defining sentence, and three (catabolism/anabolism, the enzyme's role in a reaction, and competitive versus noncompetitive inhibitors) are graded or kept as self-checks under the same rule — the enzyme's-role and inhibitor-contrast bullets remain self-checks because their honest answers assemble several of the module's sentences; the section's five Multiple Choice, three Fill in the Blank, and one True/False item (rendered as a two-option multiple choice, `True` then `False`) keep the source's own keys and option order; of the section's two unkeyed Short Answer questions, the oxidation/reduction question is graded as a multiple choice from the module's own "oxidation and reduction occur in tandem" sentence, and the electron-carrier-function question is omitted because it duplicates the body Check Your Understanding bullet asking the same thing, reworded; eight filler `textin` items (two cloze/term-recall items per objective for metabolism, autotrophs/heterotrophs, and the electron carriers, one for oxidation-reduction, and one for enzyme inhibitors) round out the Practice groups from the module's own defining sentences and this section's Key terms; key terms are compiled from the module's 43 defined-term elements and the book's Glossary appendix, merged to 38 bullets — the module tags "nicotinamide adenine dinucleotide," "NAD⁺/NADH," "nicotinamide adenine dinucleotide phosphate," "NADP⁺," "NADPH," "flavin adenine dinucleotide," "FAD," and "FADH₂" as eight separate terms in one passage, written here as three merged bullets naming the full compound and its abbreviation; five bullets (the three merged electron-carrier bullets plus inorganic phosphate [Pᵢ] and pyrophosphate [PPᵢ]) are sentence-derived because the module's own defining sentences supply the meaning rather than a directly matching Glossary entry; no source exercise was omitted beyond the one Short Answer question named above.</small>
