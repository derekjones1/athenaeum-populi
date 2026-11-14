---
title: Quantitative Chemical Analysis
description: >-
  Titration analysis, gravimetric analysis, and combustion analysis, and the
  stoichiometric calculations that turn titration volumes and precipitate or
  product masses into concentrations and formulas — adapted from OpenStax
  Chemistry 2e, Section 4.5.
source_section: "4.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Describe the fundamental aspects of titrations and gravimetric analysis.
- Perform stoichiometric calculations using typical titration and gravimetric data.
{{< /callout >}}

In the 18th century, the strength (actually the concentration) of vinegar samples was determined by noting the amount of potassium carbonate, K₂CO₃, which had to be added, a little at a time, before bubbling ceased. The greater the weight of potassium carbonate added to reach the point where the bubbling ended, the more concentrated the vinegar.

We now know that the effervescence that occurred during this process was due to reaction with acetic acid, CH₃CO₂H, the compound primarily responsible for the odor and taste of vinegar. Acetic acid reacts with potassium carbonate according to the following equation:

$$\ce{2CH3CO2H(aq) + K2CO3(s) -> 2CH3CO2K(aq) + CO2(g) + H2O(l)}$$

The bubbling was due to the production of CO₂.

The test of vinegar with potassium carbonate is one type of **quantitative analysis**—the determination of the amount or concentration of a substance in a sample. In the analysis of vinegar, the concentration of the solute (acetic acid) was determined from the amount of reactant that combined with the solute present in a known volume of the solution. In other types of chemical analyses, the amount of a substance present in a sample is determined by measuring the amount of product that results.

## Titration

The described approach to measuring vinegar strength was an early version of the analytical technique known as **titration analysis**. A typical titration analysis involves the use of a **buret** (shown in the photographs below) to make incremental additions of a solution containing a known concentration of some substance (the **titrant**) to a sample solution containing the substance whose concentration is to be measured (the **analyte**). The titrant and analyte undergo a chemical reaction of known stoichiometry, and so measuring the volume of titrant solution required for complete reaction with the analyte (the **equivalence point** of the titration) allows calculation of the analyte concentration. The equivalence point of a titration may be detected visually if a distinct change in the appearance of the sample solution accompanies the completion of the reaction. The halt of bubble formation in the classic vinegar analysis is one such example, though, more commonly, special dyes called **indicators** are added to the sample solutions to impart a change in color at or very near the equivalence point of the titration. Equivalence points may also be detected by measuring some solution property that changes in a predictable way during the course of the titration. Regardless of the approach taken to detect a titration’s equivalence point, the volume of titrant actually measured is called the **end point**. Properly designed titration methods typically ensure that the difference between the equivalence and end points is negligible. Though any type of chemical reaction may serve as the basis for a titration analysis, the three described in this chapter (precipitation, acid-base, and redox) are most common. Additional details regarding titration analysis are provided in the chapter on acid-base equilibria.

{{< mediafigure src="chemistry/CNX_Chem_04_05_titration" kind="photo" eager="true" alt="Two photographs. In the first, a man in orange safety goggles stands at a laboratory bench and pours blue liquid from a small beaker into a funnel at the top of a long glass tube held upright by a clamp on a stand; below the tube’s tip sits a flask of blue solution, beside a small brown dropper bottle. The second is a close-up of the top of such a tube, printed “TD 20 °C mL” and filled with blue liquid to just below the 0 mark. Rings around the tube mark 0, 1, 2, and 3, and between each pair of rings are nine lines, the middle one longer." >}}
(a) A student fills a buret in preparation for a titration analysis. (b) A typical buret permits volume measurements to the nearest 0.01 mL. (credit a: modification of work by Mark Blaser and Matt Evans; credit b: modification of work by Mark Blaser and Matt Evans)
{{< /mediafigure >}}

**Example.** *Titration Analysis.* The end point in a titration of a 50.00-mL sample of aqueous HCl was reached by addition of 35.23 mL of 0.250 *M* NaOH titrant. The titration reaction is:

$$\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$

What is the molarity of the HCl?

**Solution.** As for all reaction stoichiometry calculations, the key issue is the relation between the molar amounts of the chemical species of interest as depicted in the balanced chemical equation. The approach outlined in previous modules of this chapter is followed, with additional considerations required, since the amounts of reactants provided and requested are expressed as solution concentrations.

For this exercise, the calculation will follow the following outlined steps:

{{< mediafigure src="chemistry/CNX_Chem_04_05_map7_img" kind="diagram" alt="A flow chart of four boxes. “Volume of NaOH” leads right, by an arrow labeled “Molar concentration”, to “Moles of NaOH”; that box leads down, by an arrow labeled “Stoichiometric factor”, to “Moles of HCl”; that box leads left, by an arrow labeled “Solution volume”, to “Concentration of HCl”. The volume and concentration boxes are lavender, and the two moles boxes are pink." >}}
{{< /mediafigure >}}

The molar amount of HCl is calculated to be:

$$\begin{aligned} &35.23\ \cancel{\text{mL}\ \ce{NaOH}} \times \frac{1\ \cancel{\text{L}}}{1{,}000\ \cancel{\text{mL}}} \times \frac{0.250\ \cancel{\text{mol}\ \ce{NaOH}}}{1\ \cancel{\text{L}}} \\[6pt] &\quad \times \frac{1\ \text{mol}\ \ce{HCl}}{1\ \cancel{\text{mol}\ \ce{NaOH}}} = 8.81 \times 10^{-3}\ \text{mol}\ \ce{HCl} \end{aligned}$$

Using the provided volume of HCl solution and the definition of molarity, the HCl concentration is:

$$\begin{aligned} M &= \frac{\text{mol}\ \ce{HCl}}{\text{L solution}} \\[6pt] M &= \frac{8.8075 \times 10^{-3}\ \text{mol}\ \ce{HCl}}{50.00\ \text{mL} \times \frac{1\ \text{L}}{1{,}000\ \text{mL}}} \\[6pt] M &= 0.176\ M \end{aligned}$$

*Source note:* the source rounds an intermediate value in this section’s titration and gravimetric examples before it is used in the next step. Here that value is printed with the digits that are carried, and only the result is rounded; the results are the same.

Note: For these types of titration calculations, it is convenient to recognize that solution molarity is also equal to the number of *milli*moles of solute per *milli*liter of solution:

$$M = \frac{\text{mol solute}}{\text{L solution}} \times \frac{\frac{10^{3}\ \text{mmol}}{\text{mol}}}{\frac{10^{3}\ \text{mL}}{\text{L}}} = \frac{\text{mmol solute}}{\text{mL solution}}$$

Using this version of the molarity unit will shorten the calculation by eliminating two conversion factors:

$$\begin{aligned} &\frac{35.23\ \text{mL}\ \ce{NaOH} \times \frac{0.250\ \text{mmol}\ \ce{NaOH}}{\text{mL}\ \ce{NaOH}} \times \frac{1\ \text{mmol}\ \ce{HCl}}{1\ \text{mmol}\ \ce{NaOH}}}{50.00\ \text{mL solution}} \\[6pt] &= 0.176\ M\ \ce{HCl} \end{aligned}$$

{{< fillin
  question="A 20.00-mL sample of aqueous oxalic acid, H₂C₂O₄, was titrated with a 0.09113-*M* solution of potassium permanganate, KMnO₄ (see net ionic equation below). $\ce{2MnO4^-(aq) + 5H2C2O4(aq) + 6H+(aq) ->}$ $\ce{10CO2(g) + 2Mn^2+(aq) + 8H2O(l)}$. A volume of 23.24 mL was required to reach the end point. What is the oxalic acid molarity? Enter the molarity in mol/L."
  answer="0.2647"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$0.2647\ M$"
  hint="Volume of permanganate solution to moles of permanganate to moles of oxalic acid, with the mole ratio from the net ionic equation, then the definition of molarity."
>}}

*Source note:* the answer graded here is not the one the source prints for this item; the source’s value does not follow from the stem’s data.

## Gravimetric Analysis

A **gravimetric analysis** is one in which a sample is subjected to some treatment that causes a change in the physical state of the analyte that permits its separation from the other components of the sample. Mass measurements of the sample, the isolated analyte, or some other component of the analysis system, used along with the known stoichiometry of the compounds involved, permit calculation of the analyte concentration. Gravimetric methods were the first techniques used for quantitative chemical analysis, and they remain important tools in the modern chemistry laboratory.

The required change of state in a gravimetric analysis may be achieved by various physical and chemical processes. For example, the moisture (water) content of a sample is routinely determined by measuring the mass of a sample before and after it is subjected to a controlled heating process that evaporates the water. Also common are gravimetric techniques in which the analyte is subjected to a precipitation reaction of the sort described earlier in this chapter. The precipitate is typically isolated from the reaction mixture by filtration, carefully dried, and then weighed (shown in the photograph below). The mass of the precipitate may then be used, along with relevant stoichiometric relationships, to calculate analyte concentration.

{{< mediafigure src="chemistry/CNX_Chem_04_05_filter" kind="photo" alt="A glass funnel holding a bright orange-yellow crystalline solid sits in the neck of a flask, sealed by a black rubber collar. A clamp on a stand grips the flask’s neck, and a clear plastic tube leads from a side arm just below the neck. The flask holds a pale yellow, slightly cloudy liquid." >}}
Precipitate may be removed from a reaction mixture by filtration.
{{< /mediafigure >}}

**Example.** *Gravimetric Analysis.* A 0.4550-g solid mixture containing MgSO₄ is dissolved in water and treated with an excess of Ba(NO₃)₂, resulting in the precipitation of 0.6168 g of BaSO₄.

$$\ce{MgSO4(aq) + Ba(NO3)2(aq) -> BaSO4(s) + Mg(NO3)2(aq)}$$

What is the concentration (mass percent) of MgSO₄ in the mixture?

**Solution.** The plan for this calculation is similar to others used in stoichiometric calculations, the central step being the connection between the moles of BaSO₄ and MgSO₄ through their stoichiometric factor. Once the mass of MgSO₄ is computed, it may be used along with the mass of the sample mixture to calculate the requested percentage concentration.

{{< mediafigure src="chemistry/CNX_Chem_04_05_map8_img" kind="diagram" alt="A flow chart of five boxes. “Mass of BaSO₄” leads right, by an arrow labeled “Molar mass”, to “Moles of BaSO₄”; that box leads right, by an arrow labeled “Stoichiometric factor”, to “Moles of MgSO₄”; that box leads down, by an arrow labeled “Molar mass”, to “Mass of MgSO₄”; that box leads left, by an arrow labeled “Sample mass”, to “Percent MgSO₄”. The two mass boxes are pale yellow, the two moles boxes pink, and the percent box lavender." >}}
{{< /mediafigure >}}

The mass of MgSO₄ that would yield the provided precipitate mass is

$$\begin{aligned} &0.6168\ \cancel{\text{g}\ \ce{BaSO4}} \times \frac{1\ \cancel{\text{mol}\ \ce{BaSO4}}}{233.39\ \cancel{\text{g}\ \ce{BaSO4}}} \times \frac{1\ \cancel{\text{mol}\ \ce{MgSO4}}}{1\ \cancel{\text{mol}\ \ce{BaSO4}}} \\[6pt] &\quad \times \frac{120.36\ \text{g}\ \ce{MgSO4}}{1\ \cancel{\text{mol}\ \ce{MgSO4}}} = 0.3181\ \text{g}\ \ce{MgSO4} \end{aligned}$$

*Source note:* the molar masses in this section’s examples are computed from this book’s periodic table (Appendix A), so they differ in their last digits from the ones the source prints; the examples’ results are the same.

The concentration of MgSO₄ in the sample mixture is then calculated to be

$$\begin{aligned} &\text{percent}\ \ce{MgSO4} = \frac{\text{mass}\ \ce{MgSO4}}{\text{mass sample}} \times 100\% \\[6pt] &\frac{0.31809\ \text{g}}{0.4550\ \text{g}} \times 100\% = 69.91\% \end{aligned}$$

{{< fillin
  question="What is the percent of chloride ion in a sample if 1.1324 g of the sample produces 1.0881 g of AgCl when treated with excess Ag⁺? $\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}$. Enter the percent of chloride ion by mass as a number, without the percent sign."
  answer="23.77"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$23.77\%$"
  hint="Grams of AgCl to moles of AgCl to moles of chloride ion to grams of chloride ion, then the definition of percent by mass."
>}}

*Source note:* the source’s answer key for some exercises of this section was worked from atomic masses other than the ones in this book’s periodic table. The answers here are worked from this book’s table (Appendix A), so some differ from the source’s in their last digits.

The elemental composition of hydrocarbons and related compounds may be determined via a gravimetric method known as **combustion analysis**. In a combustion analysis, a weighed sample of the compound is heated to a high temperature under a stream of oxygen gas, resulting in its complete combustion to yield gaseous products of known identities. The complete combustion of hydrocarbons, for example, will yield carbon dioxide and water as the only products. The gaseous combustion products are swept through separate, preweighed collection devices containing compounds that selectively absorb each product (shown in the figure below). The mass increase of each device corresponds to the mass of the absorbed product and may be used in an appropriate stoichiometric calculation to derive the mass of the relevant element.

{{< mediafigure src="chemistry/CNX_Chem_04_05_combustion" kind="diagram" alt="A schematic, left to right. An arrow labeled O₂ enters a tube leading into a glass vessel inside a cutaway blue block labeled Furnace, whose lining glows red and orange; a brown solid labeled Sample lies in the vessel. Arrows carry the gas, labeled “CO₂, H₂O, O₂, and other gases”, out of the furnace into a tube packed with green beads, labeled “H₂O absorber such as Mg(ClO₄)₂”, then into a tube packed with dark blue and violet beads, labeled “CO₂ absorber such as NaOH”, and out at the right, labeled “O₂ and other gases”." >}}
This schematic diagram illustrates the basic components of a combustion analysis device for determining the carbon and hydrogen content of a sample.
{{< /mediafigure >}}

**Example.** *Combustion Analysis.* Polyethylene is a hydrocarbon polymer used to produce food-storage bags and many other flexible plastic items. A combustion analysis of a 0.00126-g sample of polyethylene yields 0.00394 g of CO₂ and 0.00161 g of H₂O. What is the empirical formula of polyethylene?

**Solution.** The primary assumption in this exercise is that all the carbon in the sample combusted is converted to carbon dioxide, and all the hydrogen in the sample is converted to water:

$$\ce{C_{x}H_{y}(s)} + \text{excess}\ \ce{O2(g)} \longrightarrow x\ce{CO2(g)} + \frac{y}{2}\ce{H2O(g)}$$

Note that a balanced equation is not necessary for the task at hand. To derive the empirical formula of the compound, only the subscripts $x$ and $y$ are needed.

First, calculate the molar amounts of carbon and hydrogen in the sample, using the provided masses of the carbon dioxide and water, respectively. With these molar amounts, the empirical formula for the compound may be written as described in the previous chapter of this text. An outline of this approach is given in the following flow chart:

{{< mediafigure src="chemistry/CNX_Chem_04_05_combmap_img" kind="diagram" alt="A flow chart in two rows with branches below. Top row: “Mass of CO₂” leads right, by an arrow labeled “Molar mass”, to “Moles of CO₂”, then by an arrow labeled “Stoichiometric factor” to “Moles of C”, then by an unlabeled arrow to “Mass of C”. The second row runs the same way from “Mass of H₂O” through “Moles of H₂O” and “Moles of H” to “Mass of H”. Unlabeled arrows lead down from “Moles of H” to “C to H mole ratio” and on to “Empirical formula”, and from “Mass of H” to “Percent composition”. Mass boxes are pale yellow, moles boxes pink, and the last three green." >}}
{{< /mediafigure >}}

$$\begin{aligned} \text{mol}\ \ce{C} &= 0.00394\ \text{g}\ \ce{CO2} \times \frac{1\ \text{mol}\ \ce{CO2}}{44.009\ \text{g}} \times \frac{1\ \text{mol}\ \ce{C}}{1\ \text{mol}\ \ce{CO2}} \\[6pt] &= 8.95 \times 10^{-5}\ \text{mol}\ \ce{C} \\[6pt] \text{mol}\ \ce{H} &= 0.00161\ \text{g}\ \ce{H2O} \times \frac{1\ \text{mol}\ \ce{H2O}}{18.015\ \text{g}} \times \frac{2\ \text{mol}\ \ce{H}}{1\ \text{mol}\ \ce{H2O}} \\[6pt] &= 1.79 \times 10^{-4}\ \text{mol}\ \ce{H} \end{aligned}$$

The empirical formula for the compound is then derived by identifying the smallest whole-number multiples for these molar amounts. The H-to-C molar ratio is

$$\frac{\text{mol}\ \ce{H}}{\text{mol}\ \ce{C}} = \frac{1.79 \times 10^{-4}\ \text{mol}\ \ce{H}}{8.95 \times 10^{-5}\ \text{mol}\ \ce{C}} = \frac{2\ \text{mol}\ \ce{H}}{1\ \text{mol}\ \ce{C}}$$

and the empirical formula for polyethylene is CH₂.

{{< textin
  question="A 0.00215-g sample of polystyrene, a polymer composed of carbon and hydrogen, produced 0.00726 g of CO₂ and 0.00148 g of H₂O in a combustion analysis. What is the empirical formula for polystyrene?"
  answer="CH"
  answerForm="formula"
  hint="Find the moles of carbon from the mass of CO₂ and the moles of hydrogen from the mass of H₂O, then their smallest whole-number ratio."
>}}

## Summary

- The stoichiometry of chemical reactions may serve as the basis for quantitative chemical analysis methods. Titrations involve measuring the volume of a titrant solution required to completely react with a sample solution. This volume is then used to calculate the concentration of analyte in the sample using the stoichiometry of the titration reaction. Gravimetric analysis involves separating the analyte from the sample by a physical or chemical process, determining its mass, and then calculating its concentration in the sample based on the stoichiometry of the relevant process. Combustion analysis is a gravimetric method used to determine the elemental composition of a compound by collecting and weighing the gaseous products of its combustion.

## Key terms

- **analyte** — chemical species of interest.
- **buret** — device used for the precise delivery of variable liquid volumes, such as in a titration analysis.
- **combustion analysis** — gravimetric technique used to determine the elemental composition of a compound via the collection and weighing of its gaseous combustion products.
- **end point** — measured volume of titrant solution that yields the change in sample solution appearance or other property expected for stoichiometric equivalence (see *equivalence point*).
- **equivalence point** — volume of titrant solution required to react completely with the analyte in a titration analysis; provides a stoichiometric amount of titrant for the sample’s analyte according to the titration reaction.
- **gravimetric analysis** — quantitative chemical analysis method involving the separation of an analyte from a sample by a physical or chemical process and subsequent mass measurements of the analyte, reaction product, and/or sample.
- **indicator** — substance added to the sample in a titration analysis to permit visual detection of the end point.
- **quantitative analysis** — the determination of the amount or concentration of a substance in a sample.
- **titrant** — solution containing a known concentration of substance that will react with the analyte in a titration analysis.
- **titration analysis** — quantitative chemical analysis method that involves measuring the volume of a reactant solution required to completely react with the analyte in a sample.

## Practice

### Describe the fundamental aspects of titrations and gravimetric analysis

{{< textin
  question="A device used for the precise delivery of variable liquid volumes, such as in a titration analysis, is called a ________."
  answer="buret"
  accept="burette"
  hint="See the first paragraph of the Titration subsection."
>}}

{{< textin
  question="The precipitate is typically isolated from the reaction mixture by ________, carefully dried, and then weighed."
  answer="filtration"
  accept="filtering"
  hint="See the second paragraph of the Gravimetric Analysis subsection."
>}}

### Perform stoichiometric calculations using typical titration and gravimetric data

{{< fillin
  question="Titration of a 20.0-mL sample of acid rain required 1.7 mL of 0.0811 *M* NaOH to reach the end point. If we assume that the acidity of the rain is due to the presence of sulfuric acid, what was the concentration of sulfuric acid in this sample of rain? Enter the concentration in mol/L."
  answer="3.4\times10^{-3}"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$3.4 \times 10^{-3}\ M\ \ce{H2SO4}$"
  hint="Write the balanced equation for the neutralization of sulfuric acid by sodium hydroxide; then volume of base to moles of base to moles of acid, and the definition of molarity."
>}}

{{< fillin
  question="In a common medical laboratory determination of the concentration of free chloride ion in blood serum, a serum sample is titrated with a Hg(NO₃)₂ solution. $\ce{2Cl-(aq) + Hg(NO3)2(aq) -> 2NO3-(aq) + HgCl2(s)}$. What is the Cl⁻ concentration in a 0.25-mL sample of normal serum that requires 1.46 mL of $8.25 \times 10^{-4}$ *M* Hg(NO₃)₂(*aq*) to reach the end point? Enter the concentration in mol/L."
  answer="9.6\times10^{-3}"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$9.6 \times 10^{-3}\ M\ \ce{Cl-}$"
  hint="Volume of titrant to moles of Hg(NO₃)₂ to moles of chloride ion, with the mole ratio from the equation, then the definition of molarity."
>}}

*Source note:* the stem’s data do not describe normal serum, whose chloride concentration is typically 98 to 107 millimoles per liter ([MedlinePlus](https://medlineplus.gov/ency/article/003485.htm)); the item is graded on the data as printed.

{{< fillin
  question="A sample of gallium bromide, GaBr₃, weighing 0.165 g was dissolved in water and treated with silver nitrate, AgNO₃, resulting in the precipitation of 0.299 g AgBr. Use these data to compute the %Ga (by mass) in GaBr₃. Enter the percent of gallium by mass as a number, without the percent sign."
  answer="22.4"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$22.4\%$"
  hint="Convert the mass of the precipitate to moles with a molar mass computed from the formula, use the mole ratio between the precipitate and gallium that the formulas give, then the definition of percent by mass."
>}}

*Source note:* the stem’s two masses do not agree exactly with the formula GaBr₃, so different routes through the data end apart; the answer graded here is found as the source’s is, from the mass of the precipitate through the mole ratios of the formulas.

{{< textin
  question="A 0.025-g sample of a compound composed of boron and hydrogen, with a molecular mass of ~28 amu, burns spontaneously when exposed to air, producing 0.063 g of B₂O₃. What are the empirical and molecular formulas of the compound? Enter the empirical formula."
  answer="BH₃"
  answerForm="formula"
  hint="Use the mass of B₂O₃ and the law of conservation of matter to find the moles of each element in the sample, then their smallest whole-number ratio."
>}}

{{< textin
  question="A 0.025-g sample of a compound composed of boron and hydrogen, with a molecular mass of ~28 amu, burns spontaneously when exposed to air, producing 0.063 g of B₂O₃. What are the empirical and molecular formulas of the compound? Enter the molecular formula."
  answer="B₂H₆"
  answerForm="formula"
  hint="Compare the molecular mass with the mass of one empirical formula unit."
>}}

{{< fillin
  question="What volume of 0.600 *M* HCl is required to react completely with 2.50 g of sodium hydrogen carbonate? $\ce{NaHCO3(aq) + HCl(aq) -> NaCl(aq) + CO2(g) + H2O(l)}$. Enter the volume in milliliters."
  answer="49.6"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$49.6\ \text{mL}$"
  hint="Convert the mass to moles with a molar mass computed from the formula, use the mole ratio from the equation, then the definition of molarity."
>}}

{{< fillin
  question="What volume of a 0.3300-*M* solution of sodium hydroxide would be required to titrate 15.00 mL of 0.1500 *M* oxalic acid? $\ce{C2O4H2(aq) + 2NaOH(aq) -> Na2C2O4(aq) + 2H2O(l)}$. Enter the volume in milliliters."
  answer="13.64"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$13.64\ \text{mL}$"
  hint="Volume of acid to moles of acid to moles of base, with the mole ratio from the equation, then back to a volume of base with the definition of molarity."
>}}

{{< fillin
  question="A sample of solid calcium hydroxide, Ca(OH)₂, is allowed to stand in water until a saturated solution is formed. A titration of 75.00 mL of this solution with $5.00 \times 10^{-2}$ *M* HCl requires 36.6 mL of the acid to reach the end point. $\ce{Ca(OH)2(aq) + 2HCl(aq) -> CaCl2(aq) + 2H2O(l)}$. What is the molarity? Enter the molarity of the calcium hydroxide solution in mol/L."
  answer="0.0122"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$0.0122\ M$"
  hint="Volume of acid to moles of acid to moles of calcium hydroxide, with the mole ratio from the equation, then the definition of molarity."
>}}

{{< fillin
  question="How many milliliters of a 0.1500-*M* solution of KOH will be required to titrate 40.00 mL of a 0.0656-*M* solution of H₃PO₄? $\ce{H3PO4(aq) + 2KOH(aq) -> K2HPO4(aq) + 2H2O(l)}$."
  answer="35.0"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$35.0\ \text{mL}$"
  hint="Volume of acid to moles of acid to moles of base, with the mole ratio from the equation, then back to a volume of base with the definition of molarity."
>}}

*Source note:* the answer graded here is not the one the source prints for this exercise; the source’s printed answer is not rounded by the significant-figure rules of Section 1.5 Measurement Uncertainty, Accuracy, and Precision.

{{< textin
  question="The reaction of WCl₆ with Al at ~400 °C gives black crystals of a compound containing only tungsten and chlorine. A sample of this compound, when reduced with hydrogen, gives 0.2232 g of tungsten metal and hydrogen chloride, which is absorbed in water. Titration of the hydrochloric acid thus produced requires 46.2 mL of 0.1051 *M* NaOH to reach the end point. What is the empirical formula of the black tungsten chloride?"
  answer="WCl₄"
  answerForm="formula"
  hint="Find the moles of chlorine from the titration of the hydrochloric acid and the moles of tungsten from its mass, then their smallest whole-number ratio."
>}}

---

<small>This section is adapted from [Chemistry 2e, Section 4.5: Quantitative Chemical Analysis](https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: the worked examples and the exercise answers computed from this book’s periodic table (Appendix A, IUPAC’s abridged standard atomic weights) where the source uses four-figure atomic masses, with Source notes in the body saying so, one after the first example worked with those masses and one after the Check Your Learning whose answer differs from the source’s; the intermediate values the source rounds before a later step uses them — the moles of hydrochloric acid in the titration example’s molarity line and the mass of magnesium sulfate in the gravimetric example’s percent line — printed in that later step with the digits carried, with a Source note after the first of them (no result changes); the source’s equations and powers of ten typeset as KaTeX math, the formulas inside them set with mhchem, with unit cancellation set with a diagonal strike and the 1000 of the titration example’s conversion factors written with a digit-grouping comma; four display equations broken into aligned rows to fit the column — the molar-amount line and the millimole line of the titration example, the mass line of the gravimetric example, and the two molar-amount lines of the combustion example, each result on its own row; the molar unit M set in italics in the titration example’s statement, where the source sets it upright; the three worked examples set as prose, each followed by its Check Your Learning as an interactive item (two fill-ins and one formula text-recall item), the printed answers serving as their keys rather than appearing as text, with a sentence added after a stem that leaves it open saying which quantity to enter and in what unit; the oxalic acid Check Your Learning keyed to the value the stem’s data give, with a Source note, where the source’s printed answer does not follow from them; the permanganate equation of that item split after its arrow so the line can wrap; cross-references to the figures written as describing phrases (“shown in the photographs below”, “shown in the photograph below”, “shown in the figure below”); the two photographs re-encoded as WebP and marked as photos, and the combustion schematic and the three flow charts without captions marked as diagrams, every alt text written from the artwork — the source’s alt for the buret photographs describes a woman and a scale marked 10, 15, and 20, where the photographs show a man and a scale marked 0 to 3, its alt for the hydrochloric acid flow chart says every arrow points right, where the chart turns down and back to the left, and its alt for the combustion flow chart labels three arrows “Molar mass” or “Sample mass” that the drawing leaves unlabeled; the 9 end-of-section exercises the source keys adapted into the interactive Practice block as 10 items — 7 fill-ins and 3 formula text-recall items, the boron hydride exercise asked as two formula items, empirical then molecular — with a sentence added after a stem that leaves it open saying which quantity to enter and in what unit, and the percent asked as a number without the percent sign; the serum chloride exercise given a Source note, since its data do not describe normal serum; the gallium bromide stem’s missing word restored (“the %Ga (by mass) in GaBr₃”); a Source note after that item saying its data do not fit the formula exactly and which route the graded answer takes; the source’s key for the potassium hydroxide volume of the phosphoric acid titration corrected, with a Source note, where the source’s printed answer is not rounded by the significant-figure rules; two text-recall items added for the first objective, which no keyed exercise reaches: a recall of the Key-terms definition of the delivery device, and a cloze on the Gravimetric Analysis sentence on how a precipitate is isolated; and the 9 exercises the source prints no answer for are omitted, with the structural-formula image of one of them.</small>
