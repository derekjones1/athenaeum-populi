---
title: "Non-Ideal Gas Behavior"
description: >-
  Why real gases deviate from ideal behavior, the compressibility factor, and
  the van der Waals equation — adapted from OpenStax Chemistry 2e, Section 9.6.
source_section: "9.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Describe the physical factors that lead to deviations from ideal gas behavior
- Explain how these factors are represented in the van der Waals equation
- Define compressibility (Z) and describe how its variation with pressure reflects non-ideal behavior
- Quantify non-ideal behavior by comparing computations of gas properties using the ideal gas law and the van der Waals equation
{{< /callout >}}

Thus far, the ideal gas law, $PV = nRT$, has been applied to a variety of different types of problems, ranging from reaction stoichiometry and empirical and molecular formula problems to determining the density and molar mass of a gas. As mentioned in [Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](/physical-sciences/chemistry/09-gases/02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law/), however, the behavior of a gas is often non-ideal, meaning that the observed relationships between its pressure, volume, and temperature are not accurately described by the gas laws. In this section, the reasons for these deviations from ideal gas behavior are considered.

One way in which the accuracy of $PV = nRT$ can be judged is by comparing the actual volume of 1 mole of gas (its molar volume, $V_\text{m}$) to the molar volume of an ideal gas at the same temperature and pressure. This ratio is called the **compressibility factor ($Z$)** with:

$$\begin{aligned} Z &= \frac{\text{molar volume of gas at same}\ T\ \text{and}\ P}{\text{molar volume of ideal gas at same}\ T\ \text{and}\ P} \\[6pt] &= \left(\frac{PV_\text{m}}{RT}\right)_\text{measured} \end{aligned}$$

Ideal gas behavior is therefore indicated when this ratio is equal to 1, and any deviation from 1 is an indication of non-ideal behavior. The graph below shows plots of $Z$ over a large pressure range for several common gases.

{{< mediafigure src="chemistry/CNX_Chem_09_06_ZvsPgraph" kind="diagram" eager="true" alt="A graph of Z, from 0 to 2.0, against P (atm), from 0 to 1000. A horizontal light blue line at Z = 1.0 is labeled Ideal gas, and the area below it is shaded tan. Five colored curves start at Z = 1.0 at zero pressure. The orange H₂ line rises straight to about 1.7 near 1000 atm. The other four first dip below 1.0 and then rise across it: dark blue N₂ dips least, red O₂ further, purple CH₄ further still, and yellow CO₂ furthest, to about 0.4 near 90 atm. A legend at the right names the five gases by color." longdesc="The horizontal axis, P (atm), is marked every 200 atm from 0 to 1000; the vertical axis, Z, is marked every 0.5 from 0 to 2.0. The Ideal gas line runs flat at Z = 1.0 across the whole graph, with the region below it shaded tan. All five gas curves begin at Z = 1.0 at zero pressure. H₂ (orange): a straight line rising steadily, never below 1.0, to about 1.7 near 980 atm. N₂ (dark blue): dips to about 0.93 near 100 atm, crosses 1.0 near 220 atm, and rises to about 2.0 near 820 atm. O₂ (red): dips to about 0.77 near 190 atm, crosses 1.0 near 420 atm, and rises to about 1.5 near 750 atm. CH₄ (purple): dips to about 0.65 near 170 atm, crosses 1.0 near 390 atm, and rises to about 1.95 near 870 atm. CO₂ (yellow): drops steeply to about 0.38 near 90 atm, crosses 1.0 near 510 atm, and rises to about 1.6 near 910 atm." >}}
A graph of the compressibility factor (Z) vs. pressure shows that gases can exhibit significant deviations from the behavior predicted by the ideal gas law.
{{< /mediafigure >}}

As is apparent from the graph of $Z$ against pressure above, the ideal gas law does not describe gas behavior well at relatively high pressures. To determine why this is, consider the differences between real gas properties and what is expected of a hypothetical ideal gas.

Particles of a hypothetical ideal gas have no significant volume and do not attract or repel each other. In general, real gases approximate this behavior at relatively low pressures and high temperatures. However, at high pressures, the molecules of a gas are crowded closer together, and the amount of empty space between the molecules is reduced. At these higher pressures, the volume of the gas molecules themselves becomes appreciable relative to the total volume occupied by the gas. The gas therefore becomes less compressible at these high pressures, and although its volume continues to decrease with increasing pressure, this decrease is not *proportional* as predicted by Boyle’s law.

At relatively low pressures, gas molecules have practically no attraction for one another because they are (on average) so far apart, and they behave almost like particles of an ideal gas. At higher pressures, however, the force of attraction is also no longer insignificant. This force pulls the molecules a little closer together, slightly decreasing the pressure (if the volume is constant) or decreasing the volume (at constant pressure) (shown in the figure below). This change is more pronounced at low temperatures because the molecules have lower KE relative to the attractive forces, and so they are less effective in overcoming these attractions after colliding with one another.

{{< mediafigure src="chemistry/CNX_Chem_09_06_RealGas2" kind="diagram" alt="Two pairs of boxes of purple spheres, (a) and (b), each pair labeled Ideal on the left and Real on the right. (a) The Ideal box holds 14 spheres and no arrows; the Real box, smaller, holds 14 spheres, and six double-headed arrows join one sphere near its center to spheres around it. (b) Two boxes of the same size, each holding 16 spheres, one of them striking the right wall with a yellow burst. In the Ideal box a purple arrow points toward that sphere; in the Real box five double-headed arrows join the sphere beside it to its neighbors, and a shorter purple arrow points toward it." >}}
(a) Attractions between gas molecules serve to decrease the gas volume at constant pressure compared to an ideal gas whose molecules experience no attractive forces. (b) These attractive forces will decrease the force of collisions between the molecules and container walls, therefore reducing the pressure exerted at constant volume compared to an ideal gas.
{{< /mediafigure >}}

There are several different equations that better approximate gas behavior than does the ideal gas law. The first, and simplest, of these was developed by the Dutch scientist Johannes van der Waals in 1873. The **van der Waals equation** improves upon the ideal gas law by adding two terms: one to account for the volume of the gas molecules and another for the attractive forces between them.

*Source note:* the source prints 1879. Van der Waals put the equation forward in his doctoral thesis, for which he received his degree in 1873, according to the [Nobel Foundation’s biography](https://www.nobelprize.org/prizes/physics/1910/waals/biographical/).

{{< mediafigure src="chemistry/CNX_Chem_09_06_vanderWaals_img" kind="diagram" alt="The ideal gas law, PV = nRT, with P in blue and V in red, and an arrow to the van der Waals equation, (P + an²/V²)(V − nb) = nRT, its first factor in blue and its second in red. A line from the label Correction for molecular attraction, below, points to the V² of the term an²/V², and a line from the label Correction for volume of molecules, at the right, points to nb." >}}
{{< /mediafigure >}}

The constant $a$ corresponds to the strength of the attraction between molecules of a particular gas, and the constant $b$ corresponds to the size of the molecules of a particular gas. The “correction” to the pressure term in the ideal gas law is $\frac{n^2a}{V^2}$, and the “correction” to the volume is $nb$. Note that when $V$ is relatively large and $n$ is relatively small, both of these correction terms become negligible, and the van der Waals equation reduces to the ideal gas law, $PV = nRT$. Such a condition corresponds to a gas in which a relatively low number of molecules is occupying a relatively large volume, that is, a gas at a relatively low pressure. Experimental values for the van der Waals constants of some common gases are given in the table below.

**Values of van der Waals Constants for Some Common Gases**

| Gas | $a$ (L² atm/mol²) | $b$ (L/mol) |
|---|---|---|
| N₂ | 1.39 | 0.0391 |
| O₂ | 1.36 | 0.0318 |
| CO₂ | 3.59 | 0.0427 |
| H₂O | 5.46 | 0.0305 |
| He | 0.0342 | 0.0237 |
| CCl₄ | 20.4 | 0.1383 |

At low pressures, the correction for intermolecular attraction, $a$, is more important than the one for molecular volume, $b$. At high pressures and small volumes, the correction for the volume of the molecules becomes important because the molecules themselves are incompressible and constitute an appreciable fraction of the total volume. At some intermediate pressure, the two corrections have opposing influences and the gas appears to follow the relationship given by $PV = nRT$ over a small range of pressures. This behavior is reflected by the “dips” in several of the compressibility curves shown in the graph of $Z$ against pressure above. The attractive force between molecules initially makes the gas more compressible than an ideal gas, as pressure is raised ($Z$ decreases with increasing $P$). At very high pressures, the gas becomes less compressible ($Z$ increases with $P$), as the gas molecules begin to occupy an increasingly significant fraction of the total gas volume.

*Source note:* this holds for most gases near room temperature, not for all: for the helium of the table above, whose $a$ is very small, the correction for molecular volume is the larger one even at low pressures, and the graph of $Z$ against pressure above shows hydrogen’s $Z$ rising above 1 from the lowest pressures, with no dip.

Strictly speaking, the ideal gas equation functions well when intermolecular attractions between gas molecules are negligible and the gas molecules themselves do not occupy an appreciable part of the whole volume. These criteria are satisfied under conditions of *low pressure and high temperature*. Under such conditions, the gas is said to behave ideally, and deviations from the gas laws are small enough that they may be disregarded—this is, however, very often not the case.

**Example.** *Comparison of Ideal Gas Law and van der Waals Equation.* A 4.25-L flask contains 3.46 mol CO₂ at 229 °C. Calculate the pressure of this sample of CO₂:

(a) from the ideal gas law

(b) from the van der Waals equation

(c) Explain the reason(s) for the difference.

**Solution.** (a) From the ideal gas law:

$$\begin{aligned} P &= \frac{nRT}{V} \\[6pt] &= \frac{3.46\ \cancel{\text{mol}} \times 0.08206\ \cancel{\text{L}}\ \text{atm}\ \cancel{\text{mol}^{-1}}\ \cancel{\text{K}^{-1}} \times 502.15\ \cancel{\text{K}}}{4.25\ \cancel{\text{L}}} \\[6pt] &= 33.5\ \text{atm} \end{aligned}$$

*Source note:* the source converts the Celsius temperature of this section’s example to kelvin by adding 273. Here it is converted with 273.15 ([Section 1.6 Mathematical Treatment of Measurement Results](/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results/)), and the results are the same.

(b) From the van der Waals equation:

$$\left(P + \frac{n^2a}{V^2}\right) \times (V - nb) = nRT \longrightarrow P = \frac{nRT}{(V - nb)} - \frac{n^2a}{V^2}$$

$$\begin{aligned} P &= \frac{3.46\ \text{mol} \times 0.08206\ \text{L atm mol}^{-1}\ \text{K}^{-1} \times 502.15\ \text{K}}{(4.25\ \text{L} - 3.46\ \text{mol} \times 0.0427\ \text{L mol}^{-1})} \\[6pt] &\quad - \frac{(3.46\ \text{mol})^2 \times 3.59\ \text{L}^2\ \text{atm mol}^{-2}}{(4.25\ \text{L})^2} \end{aligned}$$

This finally yields $P$ = 32.4 atm.

(c) This is not very different from the value from the ideal gas law because the pressure is not very high and the temperature is not very low. The value is somewhat different because CO₂ molecules do have some volume and attractions between molecules, and the ideal gas law assumes they do not have volume or attractions.

{{< fillin
  question="A 560-mL flask contains 21.3 g N₂ at 145 °C. Calculate the pressure of N₂: from the ideal gas law. Enter the pressure in atmospheres."
  answer="46.6"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$46.6\ \text{atm}$"
  hint="Convert the mass to moles with a molar mass computed from the formula and the temperature to kelvin, then use the ideal gas law."
>}}

{{< fillin
  question="A 560-mL flask contains 21.3 g N₂ at 145 °C. Calculate the pressure of N₂: from the van der Waals equation. Enter the pressure in atmospheres."
  answer="46.6"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$46.6\ \text{atm}$"
  hint="Take the van der Waals constants for N₂ from the table of van der Waals constants above, and solve the equation for the pressure."
>}}

*Source note:* the answers graded for the two items above are written to the number of significant figures their data give, which is not the number the source prints.

{{< selfcheck question="A 560-mL flask contains 21.3 g N₂ at 145 °C. Calculate the pressure of N₂: Explain the reason(s) for the difference." hint="Compare what each equation assumes about the molecules of a gas." >}}
The van der Waals equation takes into account the volume of the gas molecules themselves as well as intermolecular attractions. At the three significant figures the data give, the two pressures are the same: the equations differ here by about 0.05 atm, less than the data can show.
===CHECKS===
the van der Waals equation takes into account the volume of the gas molecules themselves
as well as intermolecular attractions
{{< /selfcheck >}}

*Source note:* this model answer adds a sentence to the source’s, on how the two results compare at the figures their data give.

## Summary

- Gas molecules possess a finite volume and experience forces of attraction for one another. Consequently, gas behavior is not necessarily described well by the ideal gas law. Under conditions of low pressure and high temperature, these factors are negligible, the ideal gas equation is an accurate description of gas behavior, and the gas is said to exhibit ideal behavior. However, at lower temperatures and higher pressures, corrections for molecular volume and molecular attractions are required to account for finite molecular size and attractive forces. The van der Waals equation is a modified version of the ideal gas law that can be used to account for the non-ideal behavior of gases under these conditions.

## Key equations

- $Z = \frac{\text{molar volume of gas at same}\ T\ \text{and}\ P}{\text{molar volume of ideal gas at same}\ T\ \text{and}\ P} = \left(\frac{PV_\text{m}}{RT}\right)_\text{measured}$
- $\left(P + \frac{n^2a}{V^2}\right) \times (V - nb) = nRT$

## Key terms

- **compressibility factor ($Z$)** — ratio of the experimentally measured molar volume for a gas to its molar volume as computed from the ideal gas equation.
- **van der Waals equation** — modified version of the ideal gas equation containing additional terms to account for non-ideal gas behavior.

## Practice

### Describe the physical factors that lead to deviations from ideal gas behavior

{{< mediafigure src="chemistry/CNX_Chem_09_06_Exercise1_img" kind="diagram" alt="Six graphs, two to a row, each with unnumbered axes and one blue line. Gas A: volume against temperature, a straight line rising to the right, labeled n, P constant. Gas B: PV against P, a flat horizontal line, labeled n, T constant. Gas C: Z against PV/RT, a curve that dips and then rises to the right. Gas D: Z against PV/RT, a flat horizontal line, with no label. Gas E: volume against temperature, a curve that rises steeply and then less steeply, labeled n, P constant. Gas F: pressure against temperature, a curve that rises steeply and then levels into a slow rise, labeled n, V constant." >}}
{{< /mediafigure >}}

{{< multiplechoice question="Graphs showing the behavior of several different gases are shown in the figure above. Does the following gas exhibit behavior significantly different from that expected for ideal gases? Gas A." answer="no" hint="For each graph, ask what shape the ideal gas law predicts for a plot of the two quantities on its axes, with any quantities printed beside it held constant." >}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice question="Graphs showing the behavior of several different gases are shown in the figure above. Does the following gas exhibit behavior significantly different from that expected for ideal gases? Gas B." answer="no" hint="For each graph, ask what shape the ideal gas law predicts for a plot of the two quantities on its axes, with any quantities printed beside it held constant." >}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice question="Graphs showing the behavior of several different gases are shown in the figure above. Does the following gas exhibit behavior significantly different from that expected for ideal gases? Gas C." answer="yes" hint="For each graph, ask what shape the ideal gas law predicts for a plot of the two quantities on its axes, with any quantities printed beside it held constant." >}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice question="Graphs showing the behavior of several different gases are shown in the figure above. Does the following gas exhibit behavior significantly different from that expected for ideal gases? Gas D." answer="no" hint="For each graph, ask what shape the ideal gas law predicts for a plot of the two quantities on its axes, with any quantities printed beside it held constant." >}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice question="Graphs showing the behavior of several different gases are shown in the figure above. Does the following gas exhibit behavior significantly different from that expected for ideal gases? Gas E." answer="yes" hint="For each graph, ask what shape the ideal gas law predicts for a plot of the two quantities on its axes, with any quantities printed beside it held constant." >}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice question="Graphs showing the behavior of several different gases are shown in the figure above. Does the following gas exhibit behavior significantly different from that expected for ideal gases? Gas F." answer="yes" hint="For each graph, ask what shape the ideal gas law predicts for a plot of the two quantities on its axes, with any quantities printed beside it held constant." >}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice question="Under which of the following sets of conditions does a real gas behave most like an ideal gas, and for which conditions is a real gas expected to deviate from ideal behavior? Which set of conditions gives behavior most like an ideal gas?" answer="high temperature, low pressure" hint="Ask which conditions make the volume of the molecules and the attractions between them matter least." >}}
high pressure, small volume
high temperature, low pressure
low temperature, high pressure
{{< /multiplechoice >}}

{{< selfcheck question="Under which of the following sets of conditions does a real gas behave most like an ideal gas, and for which conditions is a real gas expected to deviate from ideal behavior? Explain. (a) high pressure, small volume; (b) high temperature, low pressure; (c) low temperature, high pressure" hint="Ask which conditions make the volume of the molecules and the attractions between them matter least." >}}
The gas behavior most like an ideal gas will occur under the conditions that minimize the chances of significant interactions between the gaseous atoms/molecules, namely, low pressures (fewer atoms/molecules per unit volume) and high temperatures (greater kinetic energies of atoms/molecules make them less susceptible to attractive forces). The conditions described in (b), high temperature and low pressure, are therefore most likely to yield ideal gas behavior.
===CHECKS===
the gas behavior most like an ideal gas will occur under the conditions that minimize the chances of significant interactions between the gaseous atoms/molecules
low pressures (fewer atoms/molecules per unit volume)
high temperatures (greater kinetic energies of atoms/molecules make them less susceptible to attractive forces)
the conditions described in (b), high temperature and low pressure, are therefore most likely to yield ideal gas behavior
{{< /selfcheck >}}

### Explain how these factors are represented in the van der Waals equation

{{< multiplechoice question="For which of the following gases should the correction for the molecular volume be largest: CO, CO₂, H₂, He, NH₃, SF₆?" answer="SF₆" hint="Recall what the volume correction of the van der Waals equation depends on, and compare the molecules in the list by that property." >}}
CO
CO₂
H₂
He
NH₃
SF₆
{{< /multiplechoice >}}

{{< multiplechoice question="In the van der Waals equation, which constant corresponds to the size of the molecules of a particular gas?" answer="$b$" hint="Reread the paragraph that follows the van der Waals equation and its two labeled corrections." >}}
$a$
$b$
{{< /multiplechoice >}}

### Define compressibility (Z) and describe how its variation with pressure reflects non-ideal behavior

{{< selfcheck question="Answer the following question: If a gas behaved as an ideal gas, what would its graph of $Z$ vs. $P$ look like?" hint="Recall the value of $Z$ for an ideal gas, and whether it depends on pressure." >}}
A straight horizontal line at 1.0.
===CHECKS===
a straight horizontal line
at 1.0
{{< /selfcheck >}}

{{< multiplechoice question="Answer the following question: In general, under what temperature conditions would you expect $Z$ to have the largest deviations from the $Z$ for an ideal gas?" answer="low temperatures" hint="Compare the strength of the attractions between molecules with the energy of their motion at each temperature." >}}
low temperatures
high temperatures
{{< /multiplechoice >}}

{{< selfcheck question="Answer the following question: For most of this chapter, we performed calculations treating gases as ideal. Was this justified?" hint="Compare the conditions of the chapter’s calculations with the conditions under which real gases deviate." >}}
When real gases are at low pressures and high temperatures, they behave close enough to ideal gases that they are approximated as such; however, in some cases, we see that at a high pressure and temperature, the ideal gas approximation breaks down and is significantly different from the pressure calculated by the ideal gas equation.
===CHECKS===
when real gases are at low pressures and high temperatures, they behave close enough to ideal gases that they are approximated as such
in some cases, we see that at a high pressure and temperature, the ideal gas approximation breaks down
{{< /selfcheck >}}

{{< selfcheck question="Answer the following question: What is the effect of the volume of gas molecules on $Z$? Under what conditions is this effect small? When is it large? Explain using an appropriate diagram." hint="Read the graph of $Z$ against pressure above, at low and at high pressures." >}}
The volume of the gas molecules raises $Z$. At low pressures this effect is small, and the correction for intermolecular attractions is more significant. At higher pressures, the molecules themselves take up an appreciable fraction of the total volume, so $Z$ increases and the gas becomes less compressible (see the graph of $Z$ against pressure above).
===CHECKS===
the volume of the gas molecules raises Z
at low pressures this effect is small
the correction for intermolecular attractions is more significant
at higher pressures, the molecules themselves take up an appreciable fraction of the total volume
Z increases and the gas becomes less compressible
{{< /selfcheck >}}

*Source note:* this model answer is not the source’s, whose account of the effect of molecular volume does not agree with what this section says of it.

{{< selfcheck question="Answer the following question: What is the effect of intermolecular attractions on the value of $Z$? Under what conditions is this effect small? When is it large? Explain using an appropriate diagram." hint="Read the graph of $Z$ against pressure above where its curves dip below 1." >}}
Once again, at low pressures, the effect of intermolecular attractions on $Z$ would be more important than the correction factor for the volume of the gas molecules themselves, though perhaps still small. At higher pressures and low temperatures, the effect of intermolecular attractions would be larger. See the graph of $Z$ against pressure above.
===CHECKS===
at low pressures, the effect of intermolecular attractions on Z would be more important than the correction factor for the volume of the gas molecules themselves
at higher pressures and low temperatures, the effect of intermolecular attractions would be larger
{{< /selfcheck >}}

### Quantify non-ideal behavior by comparing computations of gas properties using the ideal gas law and the van der Waals equation

{{< multiplechoice question="In the example comparing the ideal gas law and the van der Waals equation above, a 4.25-L flask contains 3.46 mol CO₂ at 229 °C. Which equation gives the higher pressure for this sample?" answer="the ideal gas law" hint="Ask what each of the two correction terms of the van der Waals equation does to the pressure, and which is the larger for CO₂, from the table of van der Waals constants above." >}}
the ideal gas law
the van der Waals equation
{{< /multiplechoice >}}

{{< selfcheck question="In the example comparing the ideal gas law and the van der Waals equation above, a 4.25-L flask contains 3.46 mol CO₂ at 229 °C. Why are the pressures the two equations give for this sample not very different, and why do they differ at all?" hint="Recall the conditions under which a real gas behaves most like an ideal gas, and what the van der Waals equation adds to the ideal gas law." >}}
This is not very different from the value from the ideal gas law because the pressure is not very high and the temperature is not very low. The value is somewhat different because CO₂ molecules do have some volume and attractions between molecules, and the ideal gas law assumes they do not have volume or attractions.
===CHECKS===
the pressure is not very high and the temperature is not very low
CO₂ molecules do have some volume and attractions between molecules
the ideal gas law assumes they do not have volume or attractions
{{< /selfcheck >}}

---

<small>This section is adapted from [Chemistry 2e, Section 9.6: Non-Ideal Gas Behavior](https://openstax.org/books/chemistry-2e/pages/9-6-non-ideal-gas-behavior) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: the four figures re-encoded as WebP and marked as diagrams; every figure’s alt text written from the image (among other differences, the source alt of the graph of Z against pressure labels its vertical axis in kilopascals and puts the lowest point of the CO₂ curve near 0.75 atm, where the figure draws it near 90 atm, the source alt of the van der Waals equation reads “P minus” where the figure prints a plus sign, the source alt of the figure of attractions between molecules gives every box 14 spheres where each box of part (b) holds 16, and the source alt of the graphs of the six gases labels the vertical axes of Gas C and Gas D “Moles” where the figure prints Z, and gives Gas D a label of constant quantities the figure does not print), with an extended description added to the graph of Z against pressure; the van der Waals equation figure and the graphs in the first exercise, which the source prints without captions, shown without captions; references to numbered figures and to the table replaced by describing phrases, and the table’s title printed as a bold line above it; the source’s equations typeset as KaTeX math, with unit cancellation set with a diagonal strike, and the compressibility equation and the two pressure calculations of the example broken into aligned rows to fit the column; the quantity symbols set as math, among them Z, which the source prints upright, wherever math can stand (the body, the Key terms, the questions, and the model answers; the rubric checkpoints, which hold no math, print it plain), with the subscript of the molar volume set upright; the year the source gives for van der Waals’s equation corrected, with a Source note; a Source note added to the paragraph on which correction matters at low pressures, whose words are kept; the reference to the previous modules of this chapter named as Section 9.2 and linked to its page; the compressibility equation in Key equations written as the body writes it, without the multiplication signs the source’s list prints; the Celsius temperature of the example converted to kelvin with 273.15 where the source adds 273, with a Source note, the results being the same; the Check Your Learning of the example carried as 3 items after its solution, the printed answers serving as their keys rather than appearing as text, each stem the lead-in followed by its part: 2 fill-ins, each stem closing with a sentence that names the unit to enter, keyed to the significant figures their data give, with a Source note each, where the source’s printed answers have more, and 1 self-check, whose model answer gains a sentence on how the two results compare at those figures, with a Source note; the end-of-section exercises adapted into the interactive Practice block, with the 4 exercises the source keys carried as 14 items: 9 multiple-choice items — one yes-or-no item per graph of the six-gas exercise, its lead-in restated as a question about one gas, with the graphs shown above the six items and the lead-in’s first sentence, which says the graphs follow, written to say they are shown in the figure above; one over the conditions exercise’s three lettered sets of conditions, its stem without the source’s “Explain.”, which the self-check after it carries, and followed by a closing question that names the set asked for; one over the stem’s list of gases in the molecular-volume exercise; and one for the temperature part of the compressibility exercise, its two options the low and high temperatures the section contrasts — and 5 self-checks, four carrying the source solutions as model answers, capitals and periods added, and the one for the molecular-volume part of the compressibility exercise carrying a corrected model answer, with a Source note, since the source’s does not agree with what the section says, each with rubric checkpoints copied from its model answer; the conditions exercise’s self-check keeping in its question the part letters its answer names, its three sets separated by semicolons; the lead-in of the compressibility exercise restated in the singular for each part, and the placeholder “XX” that the source leaves in its first part written “a gas”; the multiple-choice item of that exercise’s temperature part placed before the self-checks of the three parts above it in the source, since the model answer of the intermolecular-attraction part prints its key; the 3 exercises the source prints no answer for are omitted; one filler select-the-term multiple-choice item added to the group on the van der Waals equation, since its one keyed exercise gives that group a single item, built on the body sentence on what the two van der Waals constants correspond to; and two filler items added to the group on quantifying non-ideal behavior, since no exercise the source keys serves it, both on the worked example that compares the two equations: a two-option multiple-choice item on which of its two results is the higher, built on the example’s solution, and a self-check whose model answer is the example’s part (c), whole.</small>
