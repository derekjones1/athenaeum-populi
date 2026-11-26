---
title: Colligative Properties
description: >-
  Mole fraction and molality, vapor pressure lowering and Raoult’s law,
  distillation, boiling point elevation, freezing point depression, osmotic
  pressure, molar masses from colligative properties, and the van’t Hoff factor
  of electrolytes — adapted from OpenStax Chemistry 2e, Section 11.4.
source_section: "11.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Express concentrations of solution components using mole fraction and molality
- Describe the effect of solute concentration on various solution properties (vapor pressure, boiling point, freezing point, and osmotic pressure)
- Perform calculations using the mathematical equations that describe these various colligative effects
- Describe the process of distillation and its practical applications
- Explain the process of osmosis and describe how it is applied industrially and in nature
{{< /callout >}}

The properties of a solution are different from those of either the pure solute(s) or solvent. Many solution properties are dependent upon the chemical identity of the solute. Compared to pure water, a solution of hydrogen chloride is more acidic, a solution of ammonia is more basic, a solution of sodium chloride is more dense, and a solution of sucrose is more viscous. There are a few solution properties, however, that depend *only* upon the total concentration of solute species, regardless of their identities. These **colligative properties** include vapor pressure lowering, boiling point elevation, freezing point depression, and osmotic pressure. This small set of properties is of central importance to many natural phenomena and technological applications, as will be described in this module.

## Mole Fraction and Molality

Several units commonly used to express the concentrations of solution components were introduced in an earlier chapter of this text ([Section 3.3 Molarity](/physical-sciences/chemistry/03-composition-of-substances-and-solutions/03-molarity/) and [Section 3.4 Other Units for Solution Concentrations](/physical-sciences/chemistry/03-composition-of-substances-and-solutions/04-other-units-for-solution-concentrations/)), each providing certain benefits for use in different applications. For example, molarity ($M$) is a convenient unit for use in stoichiometric calculations, since it is defined in terms of the molar amounts of solute species:

$$M = \frac{\text{mol solute}}{\text{L solution}}$$

Because solution volumes vary with temperature, molar concentrations will likewise vary. When expressed as molarity, the concentration of a solution with identical numbers of solute and solvent species will be different at different temperatures, due to the contraction/expansion of the solution. More appropriate for calculations involving many colligative properties are mole-based concentration units whose values are not dependent on temperature. Two such units are *mole fraction* (introduced in the chapter on gases, [Section 9.3 Stoichiometry of Gaseous Substances, Mixtures, and Reactions](/physical-sciences/chemistry/09-gases/03-stoichiometry-of-gaseous-substances-mixtures-and-reactions/)) and *molality*.

The mole fraction, $X$, of a component is the ratio of its molar amount to the total number of moles of all solution components:

$$X_\text{A} = \frac{\text{mol A}}{\text{total mol of all components}}$$

By this definition, the sum of mole fractions for all solution components (the solvent and all solutes) is equal to one.

**Molality** is a concentration unit defined as the ratio of the numbers of moles of solute to the mass of the solvent in kilograms:

$$m = \frac{\text{mol solute}}{\text{kg solvent}}$$

Since these units are computed using only masses and molar amounts, they do not vary with temperature and, thus, are better suited for applications requiring temperature-independent concentrations, including several colligative properties, as will be described in this chapter module.

**Example.** *Calculating Mole Fraction and Molality.* The antifreeze in most automobile radiators is a mixture of equal volumes of ethylene glycol and water, with minor amounts of other additives that prevent corrosion. What are the (a) mole fraction and (b) molality of ethylene glycol, C₂H₄(OH)₂, in a solution prepared from $2.22 \times 10^{3}$ g of ethylene glycol and $2.00 \times 10^{3}$ g of water (approximately 2 L of glycol and 2 L of water)?

**Solution.** (a) The mole fraction of ethylene glycol may be computed by first deriving molar amounts of both solution components and then substituting these amounts into the definition of mole fraction.

$$
\begin{aligned}
\text{mol}\ \ce{C2H4(OH)2} &= 2.22 \times 10^{3}\ \text{g} \times \frac{1\ \text{mol}\ \ce{C2H4(OH)2}}{62.068\ \text{g}\ \ce{C2H4(OH)2}} \\[6pt]
&= 35.8\ \text{mol}\ \ce{C2H4(OH)2} \\[6pt]
\text{mol}\ \ce{H2O} &= 2.00 \times 10^{3}\ \text{g} \times \frac{1\ \text{mol}\ \ce{H2O}}{18.015\ \text{g}\ \ce{H2O}} = 111\ \text{mol}\ \ce{H2O} \\[6pt]
X_\text{ethylene glycol} &= \frac{35.767\ \text{mol}\ \ce{C2H4(OH)2}}{(35.767 + 111.019)\ \text{mol total}} = 0.244
\end{aligned}
$$

*Source note:* the molar masses in this section’s examples are computed from this book’s periodic table (Appendix A), so they differ in their last digits from the ones the source prints, and where the source rounds an intermediate value before it uses it again, or converts a Celsius temperature to kelvin by adding 273, that value is printed here with the digits that are carried and only the result is rounded; the examples’ results are the same, except where a note below says otherwise.

Notice that mole fraction is a dimensionless property, being the ratio of properties with identical units (moles).

(b) Derive moles of solute and mass of solvent (in kg).

First, use the given mass of ethylene glycol and its molar mass to find the moles of solute:

$$
\begin{aligned}
&2.22 \times 10^{3}\ \text{g}\ \ce{C2H4(OH)2}\left(\frac{\text{mol}\ \ce{C2H4(OH)2}}{62.068\ \text{g}}\right) \\[6pt]
&\quad = 35.8\ \text{mol}\ \ce{C2H4(OH)2}
\end{aligned}
$$

Then, convert the mass of the water from grams to kilograms:

$$2.00 \times 10^{3}\ \text{g}\ \ce{H2O}\left(\frac{1\ \text{kg}}{1{,}000\ \text{g}}\right) = 2.00\ \text{kg}\ \ce{H2O}$$

Finally, calculate molality per its definition:

$$
\begin{aligned}
\text{molality} &= \frac{\text{mol solute}}{\text{kg solvent}} \\[6pt]
\text{molality} &= \frac{35.767\ \text{mol}\ \ce{C2H4(OH)2}}{2.00\ \text{kg}\ \ce{H2O}} \\[6pt]
\text{molality} &= 17.9\ m
\end{aligned}
$$

{{< fillin
  question="What are the mole fraction and molality of a solution that contains 0.850 g of ammonia, NH₃, dissolved in 125 g of water? Enter the mole fraction of NH₃."
  answer="7.14\times10^{-3}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$7.14 \times 10^{-3}$"
  hint="Convert each mass to the quantity the definition needs, with a molar mass computed from the formula, and use the definitions of mole fraction and molality."
>}}

{{< fillin
  question="What are the mole fraction and molality of a solution that contains 0.850 g of ammonia, NH₃, dissolved in 125 g of water? Enter the molality in mol/kg."
  answer="0.399"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.399\ m$"
  hint="Convert each mass to the quantity the definition needs, with a molar mass computed from the formula, and use the definitions of mole fraction and molality."
>}}

**Example.** *Converting Mole Fraction and Molal Concentrations.* Calculate the mole fraction of solute and solvent in a 3.0 *m* solution of sodium chloride.

**Solution.** Converting from one concentration unit to another is accomplished by first comparing the two unit definitions. In this case, both units have the same numerator (moles of solute) but different denominators. The provided molal concentration may be written as:

$$\frac{3.0\ \text{mol NaCl}}{1\ \text{kg}\ \ce{H2O}}$$

The numerator for this solution’s mole fraction is, therefore, 3.0 mol NaCl. The denominator may be computed by deriving the molar amount of water corresponding to 1.0 kg

$$1.0\ \text{kg}\ \ce{H2O}\left(\frac{1{,}000\ \text{g}}{1\ \text{kg}}\right)\left(\frac{\text{mol}\ \ce{H2O}}{18.015\ \text{g}}\right) = 55\ \text{mol}\ \ce{H2O}$$

and then substituting these molar amounts into the definition for mole fraction.

$$
\begin{aligned}
X_{\ce{H2O}} &= \frac{\text{mol}\ \ce{H2O}}{\text{mol NaCl} + \text{mol}\ \ce{H2O}} \\[6pt]
X_{\ce{H2O}} &= \frac{55.509\ \text{mol}\ \ce{H2O}}{3.0\ \text{mol NaCl} + 55.509\ \text{mol}\ \ce{H2O}} \\[6pt]
X_{\ce{H2O}} &= 0.95 \\[6pt]
X_\text{NaCl} &= \frac{\text{mol NaCl}}{\text{mol NaCl} + \text{mol}\ \ce{H2O}} \\[6pt]
X_\text{NaCl} &= \frac{3.0\ \text{mol NaCl}}{3.0\ \text{mol NaCl} + 55.509\ \text{mol}\ \ce{H2O}} \\[6pt]
X_\text{NaCl} &= 0.051
\end{aligned}
$$

*Source note:* the source prints 0.052 for the mole fraction of NaCl; it divides by a molar amount of water it had already rounded.

{{< fillin
  question="The mole fraction of iodine, I₂, dissolved in dichloromethane, CH₂Cl₂, is 0.115. What is the molal concentration, *m*, of iodine in this solution? Enter the molality in mol/kg."
  answer="1.53"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$1.53\ m$"
  hint="Use the definitions of mole fraction and molality, with a molar mass computed from the solvent’s formula."
>}}

**Example.** *Molality and Molarity Conversions.* Intravenous infusion of a 0.556 *M* aqueous solution of glucose (density of 1.04 g/mL) is part of some post-operative recovery therapies. What is the molal concentration of glucose in this solution?

**Solution.** The provided molar concentration may be explicitly written as:

$$M = 0.556\ \text{mol glucose/1 L solution}$$

Consider the definition of molality:

$$m = \text{mol solute/kg solvent}$$

The amount of glucose in 1-L of this solution is 0.556 mol, so the mass of water in this volume of solution is needed.

First, compute the mass of 1.00 L of the solution:

$$
\begin{aligned}
&(1.00\ \text{L soln})(1.04\ \text{g/mL})(1{,}000\ \text{mL/1 L})(1\ \text{kg}/1{,}000\ \text{g}) \\
&\quad = 1.04\ \text{kg soln}
\end{aligned}
$$

This is the mass of both the water and its solute, glucose, and so the mass of glucose must be subtracted. Compute the mass of glucose from its molar amount:

$$(0.556\ \text{mol glucose})(180.156\ \text{g/1 mol}) = 100.2\ \text{g or}\ 0.1002\ \text{kg}$$

Subtracting the mass of glucose yields the mass of water in the solution:

$$1.04\ \text{kg solution} - 0.100167\ \text{kg glucose} = 0.94\ \text{kg water}$$

Finally, the molality of glucose in this solution is computed as:

$$m = 0.556\ \text{mol glucose}/0.93983\ \text{kg water} = 0.59\ m$$

{{< fillin
  question="Nitric acid, HNO₃(*aq*), is commercially available as a 33.7 *m* aqueous solution (density = 1.35 g/mL). What is the molarity of this solution? Enter the molarity in mol/L."
  answer="14.6"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$14.6\ M$"
  hint="Consider a sample that holds one kilogram of water, and use a molar mass computed from the formula, the density, and the definition of molarity."
>}}

## Vapor Pressure Lowering

As described in the chapter on liquids and solids ([Section 10.3 Phase Transitions](/physical-sciences/chemistry/10-liquids-and-solids/03-phase-transitions/)), the equilibrium vapor pressure of a liquid is the pressure exerted by its gaseous phase when vaporization and condensation are occurring at equal rates:

$$\text{liquid} \rightleftharpoons \text{gas}$$

Dissolving a nonvolatile substance in a volatile liquid results in a lowering of the liquid’s vapor pressure. This phenomenon can be rationalized by considering the effect of added solute molecules on the liquid’s vaporization and condensation processes. To vaporize, solvent molecules must be present at the surface of the solution. The presence of solute decreases the surface area available to solvent molecules and thereby reduces the rate of solvent vaporization. Since the rate of condensation is unaffected by the presence of solute, the net result is that the vaporization-condensation equilibrium is achieved with fewer solvent molecules in the vapor phase (i.e., at a lower vapor pressure) (shown in the figure below). While this interpretation is useful, it does not account for several important aspects of the colligative nature of vapor pressure lowering. A more rigorous explanation involves the property of *entropy*, a topic of discussion in a later text chapter on thermodynamics (Section 16.2 Entropy). For purposes of understanding the lowering of a liquid’s vapor pressure, it is adequate to note that the more dispersed nature of matter in a solution, compared to separate solvent and solute phases, serves to effectively stabilize the solvent molecules and hinder their vaporization. A lower vapor pressure results, and a correspondingly higher boiling point as described in the next section of this module.

{{< mediafigure src="chemistry/CNX_Chem_11_04_RaoultLaw" kind="diagram" eager="true" alt="Two stoppered conical flasks, each partly filled with a light blue liquid. In (a), pure water, eleven water molecules, each a red oxygen sphere with two white hydrogen spheres, are in the liquid and twelve are in the space above it; four curved arrows rise from the liquid and three point down into it. In (b), an aqueous solution, the liquid holds eleven water molecules among eleven larger purple spheres, eight water molecules are above it, and two arrows rise from the liquid while two point down into it." >}}
The presence of nonvolatile solutes lowers the vapor pressure of a solution by impeding the evaporation of solvent molecules.
{{< /mediafigure >}}

The relationship between the vapor pressures of solution components and the concentrations of those components is described by **Raoult’s law**: *The partial pressure exerted by any component of an ideal solution is equal to the vapor pressure of the pure component multiplied by its mole fraction in the solution.*

$$P_\text{A} = X_\text{A}P_\text{A}^*$$

where $P_\text{A}$ is the partial pressure exerted by component A in the solution, $P_\text{A}^*$ is the vapor pressure of pure A, and $X_\text{A}$ is the mole fraction of A in the solution.

Recalling that the total pressure of a gaseous mixture is equal to the sum of partial pressures for all its components (Dalton’s law of partial pressures), the total vapor pressure exerted by a solution containing $i$ components is

$$P_\text{solution} = \sum_i P_i = \sum_i X_iP_i^*$$

A nonvolatile substance is one whose vapor pressure is negligible ($P^* \approx 0$), and so the vapor pressure above a solution containing only nonvolatile solutes is due only to the solvent:

$$P_\text{solution} = X_\text{solvent}P_\text{solvent}^*$$

**Example.** *Calculation of a Vapor Pressure.* Compute the vapor pressure of an ideal solution containing 92.1 g of glycerin, C₃H₅(OH)₃, and 184.4 g of ethanol, C₂H₅OH, at 40 °C. The vapor pressure of pure ethanol is 0.178 atm at 40 °C. Glycerin is essentially nonvolatile at this temperature.

**Solution.** Since the solvent is the only volatile component of this solution, its vapor pressure may be computed per Raoult’s law as:

$$P_\text{solution} = X_\text{solvent}P_\text{solvent}^*$$

First, calculate the molar amounts of each solution component using the provided mass data.

$$
\begin{aligned}
&92.1\ \cancel{\text{g}\ \ce{C3H5(OH)3}} \times \frac{1\ \text{mol}\ \ce{C3H5(OH)3}}{92.094\ \cancel{\text{g}\ \ce{C3H5(OH)3}}} \\[6pt]
&\quad = 1.00\ \text{mol}\ \ce{C3H5(OH)3} \\[6pt]
&184.4\ \cancel{\text{g}\ \ce{C2H5OH}} \times \frac{1\ \text{mol}\ \ce{C2H5OH}}{46.069\ \cancel{\text{g}\ \ce{C2H5OH}}} \\[6pt]
&\quad = 4.003\ \text{mol}\ \ce{C2H5OH}
\end{aligned}
$$

Next, calculate the mole fraction of the solvent (ethanol) and use Raoult’s law to compute the solution’s vapor pressure.

$$
\begin{aligned}
X_{\ce{C2H5OH}} &= \frac{4.0027\ \text{mol}}{(1.0001\ \text{mol} + 4.0027\ \text{mol})} = 0.800 \\[6pt]
P_\text{solv} &= X_\text{solv}P_\text{solv}^* = 0.80010 \times 0.178\ \text{atm} = 0.142\ \text{atm}
\end{aligned}
$$

*Source note:* the source prints 4.000 mol of ethanol, which is not the quotient of its own line; the mole fraction and the vapor pressure are the same.

{{< fillin
  question="A solution contains 5.00 g of urea, CO(NH₂)₂ (a nonvolatile solute) and 0.100 kg of water. If the [vapor pressure of pure water at 25 °C](/physical-sciences/chemistry/appendices/e-water-properties/) is 23.8 torr, what is the vapor pressure of the solution assuming ideal behavior? Enter the vapor pressure in torr."
  answer="23.4"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$23.4\ \text{torr}$"
  hint="Use Raoult’s law for the solvent, with the mole fraction of water found from molar masses computed from the formulas."
>}}

*Source note:* the source’s stem gives the vapor pressure of pure water at 25 °C as 23.7 torr, where [Appendix E](/physical-sciences/chemistry/appendices/e-water-properties/) prints 23.8 torr; the stem here prints the appendix’s value.

## Distillation of Solutions

Solutions whose components have significantly different vapor pressures may be separated by a selective vaporization process known as distillation. Consider the simple case of a mixture of two volatile liquids, A and B, with A being the more volatile liquid. Raoult’s law can be used to show that the vapor above the solution is enriched in component A, that is, the mole fraction of A in the vapor is greater than the mole fraction of A in the liquid (see the exercise on a solution of methanol and ethanol at the end of this section). By appropriately heating the mixture, component A may be vaporized, condensed, and collected—effectively separating it from component B.

Distillation is widely applied in both laboratory and industrial settings, being used to refine petroleum, to isolate fermentation products, and to purify water. A typical apparatus for laboratory-scale distillations is shown in the figure below.

{{< mediafigure src="chemistry/CNX_Chem_11_04_LabDistill" kind="diagram" alt="Two panels. (a) A photograph of a distillation apparatus on a laboratory bench: a round flask in a heating bath, joined by sloping glass tubing to a small receiving flask, with orange rubber hoses. (b) A labeled drawing of the parts: a still pot of green sample mixture in a heating bath on a stirrer/heat plate, a still head with a thermometer in its top, a water-jacketed condenser sloping down to the right, and a receiving flask that has collected a little green liquid." longdesc="The drawing’s labels, from the top: boiling point temperature, at the thermometer standing in the top of the still head; still head, the vertical tube rising from the flask; still pot, the round flask; sample mixture, the green liquid in it; heating bath (oil/sand), the dish of yellow liquid around the flask; stirrer speed control and heat source, the two knobs on the front of the base; stirrer/heat plate, the base itself. The condenser leaves the side of the still head and slopes down to the right inside a light blue water jacket; light blue arrows show water entering the jacket at its lower end and leaving at its upper end. At its lower end the still receiver, a bent glass piece, leads down into the receiving flask." >}}
A typical laboratory distillation unit is shown in (a) a photograph and (b) a schematic diagram of the components. (credit a: modification of work by “Rifleman82”/Wikimedia commons; credit b: modification of work by “Slashme”/Wikimedia Commons)
{{< /mediafigure >}}

Oil refineries use large-scale *fractional distillation* to separate the components of crude oil. The crude oil is heated to high temperatures at the base of a tall *fractionating column*, vaporizing many of the components that rise within the column. As vaporized components reach adequately cool zones during their ascent, they condense and are collected. The collected liquids are simpler mixtures of hydrocarbons and other petroleum compounds that are of appropriate composition for various applications (e.g., diesel fuel, kerosene, gasoline), as depicted in the figure below.

{{< mediafigure src="chemistry/CNX_Chem_11_04_refinery" kind="diagram" alt="A photograph of a refinery’s tall steel columns beside a drawing of a fractionating column. Heated crude oil enters near the bottom at the left and residue leaves at the bottom; trays up the column draw off, from bottom to top, fuel oil, diesel oil, kerosene, naphtha (spelled naptha in the drawing), and gasoline, and refinery gas leaves at the top. Dots for molecules shade from dark gold low in the column to white at the top. A double-headed arrow at the right shades from red at the bottom to blue-gray at the top." longdesc="White arrows inside the column show vapor rising through the trays. The top of the double-headed arrow is labeled: Small molecules: low boiling point, very volatile, flows easily, ignites easily. Its bottom is labeled: Large molecules: high boiling point, not very volatile, does not flow easily, does not ignite easily." >}}
Crude oil is a complex mixture that is separated by large-scale fractional distillation to isolate various simpler mixtures.
{{< /mediafigure >}}

## Boiling Point Elevation

As described in the chapter on liquids and solids ([Section 10.3 Phase Transitions](/physical-sciences/chemistry/10-liquids-and-solids/03-phase-transitions/)), the *boiling point* of a liquid is the temperature at which its vapor pressure is equal to ambient atmospheric pressure. Since the vapor pressure of a solution is lowered due to the presence of nonvolatile solutes, it stands to reason that the solution’s boiling point will subsequently be increased. Vapor pressure increases with temperature, and so a solution will require a higher temperature than will pure solvent to achieve any given vapor pressure, including one equivalent to that of the surrounding atmosphere. The increase in boiling point observed when nonvolatile solute is dissolved in a solvent, $\Delta T_\text{b}$, is called **boiling point elevation** and is directly proportional to the molal concentration of solute species:

$$\Delta T_\text{b} = K_\text{b}m$$

where $K_\text{b}$ is the **boiling point elevation constant**, or the *ebullioscopic constant* and $m$ is the molal concentration (molality) of all solute species.

Boiling point elevation constants are characteristic properties that depend on the identity of the solvent. Values of $K_\text{b}$ for several solvents are listed in the table below.

**Boiling Point Elevation and Freezing Point Depression Constants for Several Solvents**

| Solvent | Boiling Point (°C at 1 atm) | $K_\text{b}$ (°C $m^{-1}$) | Freezing Point (°C at 1 atm) | $K_\text{f}$ (°C $m^{-1}$) |
|---|---|---|---|---|
| water | 100.0 | 0.512 | 0.0 | 1.86 |
| hydrogen acetate (glacial acetic acid) | 118.1 | 3.07 | 16.6 | 3.9 |
| benzene | 80.1 | 2.53 | 5.5 | 5.12 |
| chloroform | 61.26 | 3.63 | −63.5 | 4.68 |
| nitrobenzene | 210.9 | 5.24 | 5.67 | 8.1 |

*Source note:* the normal freezing point and boiling point of water are taken as exactly 0 °C and 100 °C in this section’s calculations, so a result for water keeps the decimal places of its temperature change.

The extent to which the vapor pressure of a solvent is lowered and the boiling point is elevated depends on the total number of solute particles present in a given amount of solvent, not on the mass or size or chemical identities of the particles. A 1 *m* aqueous solution of sucrose (342 g/mol) and a 1 *m* aqueous solution of ethylene glycol (62 g/mol) will exhibit the same boiling point because each solution has one mole of solute particles (molecules) per kilogram of solvent.

**Example.** *Calculating the Boiling Point of a Solution.* Assuming ideal solution behavior, what is the boiling point of a 0.33 *m* solution of a nonvolatile solute in benzene?

**Solution.** Use the equation relating boiling point elevation to solute molality to solve this problem in two steps.

{{< mediafigure src="chemistry/CNX_Chem_11_04_Ex02Steps_img" kind="diagram" alt="A flow chart of three boxes in a row: molality of solution, arrow 1 to change in boiling point, arrow 2 to new boiling point." >}}
{{< /mediafigure >}}

1. *Calculate the change in boiling point.*

   $$\Delta T_\text{b} = K_\text{b}m = 2.53\ {}^\circ\text{C}\ m^{-1} \times 0.33\ m = 0.83\ {}^\circ\text{C}$$

2. *Add the boiling point elevation to the pure solvent’s boiling point.*

   $$\text{Boiling temperature} = 80.1\ {}^\circ\text{C} + 0.8349\ {}^\circ\text{C} = 80.9\ {}^\circ\text{C}$$

{{< fillin
  question="Assuming ideal solution behavior, what is the boiling point of the antifreeze described in the example “Calculating Mole Fraction and Molality” above? (In that example, the antifreeze is a solution of $2.22 \times 10^{3}$ g of ethylene glycol, C₂H₄(OH)₂, in $2.00 \times 10^{3}$ g of water.) Enter the boiling point in degrees Celsius."
  answer="109.16"
  answerForm="sig-figs:5 last-digit:1"
  answerDisplay="$109.16\ {}^\circ\text{C}$"
  hint="Find the molality of the antifreeze, then use the boiling point elevation equation with the constant for water from the table of boiling point elevation and freezing point depression constants above."
>}}

*Source note:* the answer graded for this exercise is written to the number of significant figures its data give, which is not the number the source prints.

**Example.** *The Boiling Point of an Iodine Solution.* Find the boiling point of a solution of 92.1 g of iodine, I₂, in 800.0 g of chloroform, CHCl₃, assuming that the iodine is nonvolatile and that the solution is ideal.

**Solution.** A four-step approach to solving this problem is outlined below.

{{< mediafigure src="chemistry/CNX_Chem_11_04_EX03Steps_img" kind="diagram" alt="A flow chart of five boxes in a row: mass of iodine, arrow 1 to moles of iodine, arrow 2 to molality of solution, arrow 3 to change in boiling point, arrow 4 to new boiling point." >}}
{{< /mediafigure >}}

1. *Convert from grams to moles of* I₂ *using the molar mass of* I₂ *in the unit conversion factor.*

   Result: 0.363 mol

2. *Determine the molality of the solution from the number of moles of solute and the mass of solvent, in kilograms.*

   Result: 0.454 *m*

3. *Use the direct proportionality between the change in boiling point and molal concentration to determine how much the boiling point changes.*

   Result: 1.65 °C

4. *Determine the new boiling point from the boiling point of the pure solvent and the change.*

   Result: 62.91 °C

   Check each result as a self-assessment.

{{< fillin
  question="What is the boiling point of a solution of 1.0 g of glycerin, C₃H₅(OH)₃, in 47.8 g of water? Assume an ideal solution. Enter the boiling point in degrees Celsius."
  answer="100.12"
  answerForm="sig-figs:5 last-digit:1"
  answerDisplay="$100.12\ {}^\circ\text{C}$"
  hint="Find the molality with a molar mass computed from the formula, then use the boiling point elevation equation with the constant for water from the table of boiling point elevation and freezing point depression constants above."
>}}

## Freezing Point Depression

Solutions freeze at lower temperatures than pure liquids. This phenomenon is exploited in “de-icing” schemes that use salt (shown in the photograph below), calcium chloride, or urea to melt ice on roads and sidewalks, and in the use of ethylene glycol as an “antifreeze” in automobile radiators. Seawater freezes at a lower temperature than fresh water, and so the Arctic and Antarctic oceans remain unfrozen even at temperatures below 0 °C (as do the body fluids of fish and other cold-blooded sea animals that live in these oceans).

{{< mediafigure src="chemistry/CNX_Chem_11_04_rocksalt" kind="photo" alt="White crystalline grains scattered over gray paving stones, thickest across the middle of the view." >}}
Rock salt (NaCl), calcium chloride (CaCl₂), or a mixture of the two are used to melt ice. (credit: modification of work by Eddie Welker)
{{< /mediafigure >}}

The decrease in freezing point of a dilute solution compared to that of the pure solvent, $\Delta T_\text{f}$, is called the **freezing point depression** and is directly proportional to the molal concentration of the solute

$$\Delta T_\text{f} = K_\text{f}m$$

where $m$ is the molal concentration of the solute and $K_\text{f}$ is called the **freezing point depression constant** (or *cryoscopic constant*). Just as for boiling point elevation constants, these are characteristic properties whose values depend on the chemical identity of the solvent. Values of $K_\text{f}$ for several solvents are listed in the table of boiling point elevation and freezing point depression constants above.

**Example.** *Calculation of the Freezing Point of a Solution.* Assuming ideal solution behavior, what is the freezing point of the 0.33 *m* solution of a nonvolatile nonelectrolyte solute in benzene described in the example “Calculating the Boiling Point of a Solution” above?

**Solution.** Use the equation relating freezing point depression to solute molality to solve this problem in two steps.

{{< mediafigure src="chemistry/CNX_Chem_11_04_Ex04Steps_img" kind="diagram" alt="A flow chart of three boxes in a row: molality of solution, arrow 1 to change in freezing point, arrow 2 to new freezing point." >}}
{{< /mediafigure >}}

1. *Calculate the change in freezing point.*

   $$\Delta T_\text{f} = K_\text{f}m = 5.12\ {}^\circ\text{C}\ m^{-1} \times 0.33\ m = 1.7\ {}^\circ\text{C}$$

2. *Subtract the freezing point change observed from the pure solvent’s freezing point.*

   $$\text{Freezing Temperature} = 5.5\ {}^\circ\text{C} - 1.6896\ {}^\circ\text{C} = 3.8\ {}^\circ\text{C}$$

{{< fillin
  question="Assuming ideal solution behavior, what is the freezing point of a 1.85 *m* solution of a nonvolatile nonelectrolyte solute in nitrobenzene? Enter the freezing point in degrees Celsius."
  answer="-9"
  answerForm="sig-figs:1 last-digit:0"
  answerDisplay="$-9\ {}^\circ\text{C}$"
  hint="Use the freezing point depression equation, with nitrobenzene’s freezing point and constant from the table of boiling point elevation and freezing point depression constants above."
>}}

*Source note:* the answer graded for this exercise is written to the number of significant figures its data give, which is not the number the source prints.

{{< callout type="info" >}}
**Chemistry in Everyday Life.** *Colligative Properties and De-Icing.*

Sodium chloride and its group 2 analogs calcium and magnesium chloride are often used to de-ice roadways and sidewalks, due to the fact that a solution of any one of these salts will have a freezing point lower than 0 °C, the freezing point of pure water. The group 2 metal salts are frequently mixed with the cheaper and more readily available sodium chloride (“rock salt”) for use on roads, since they tend to be somewhat less corrosive than the NaCl, and they provide a larger depression of the freezing point, since they dissociate to yield three particles per formula unit, rather than two particles like the sodium chloride.

Because these ionic compounds tend to hasten the corrosion of metal, they would not be a wise choice to use in antifreeze for the radiator in your car or to de-ice a plane prior to takeoff. For these applications, covalent compounds, such as ethylene or propylene glycol, are often used. The glycols used in radiator fluid not only lower the freezing point of the liquid, but they elevate the boiling point, making the fluid useful in both winter and summer. Heated glycols are often sprayed onto the surface of airplanes prior to takeoff in inclement weather in the winter to remove ice that has already formed and prevent the formation of more ice, which would be particularly dangerous if formed on the control surfaces of the aircraft (shown in the figure below).

{{< mediafigure src="chemistry/CNX_Chem_11_04_deice" kind="photo" alt="(a) The back of a yellow highway truck carrying a tank and an orange sign reading DE-ICER, spraying a wet film onto the lane behind it. (b) At night, a worker in a raised bucket sprays a parked passenger jet near its wing, and a cloud of vapor rises over the plane." >}}
Freezing point depression is exploited to remove ice from (a) roadways and (b) the control surfaces of aircraft.
{{< /mediafigure >}}
{{< /callout >}}

## Phase Diagram for a Solution

The colligative effects on vapor pressure, boiling point, and freezing point described in the previous section are conveniently summarized by comparing the phase diagrams for a pure liquid and a solution derived from that liquid (shown in the figure below).

{{< mediafigure src="chemistry/CNX_Chem_11_04_phasediag" kind="diagram" alt="A pressure–temperature phase diagram with regions labeled solid, liquid, and gas. Solid curves belong to the pure solvent and dashed curves to the solution: the solution’s liquid–gas curve lies below the solvent’s, the gap marked ΔP, and its solid–liquid curve lies to the left of the solvent’s. Along the line marked 1 atm, ΔTf spans the two freezing points and ΔTb the two boiling points. The solid–gas curve is one curve for both." longdesc="Dashed vertical lines drop from the 1 atm line to the temperature axis at four points, labeled from left to right: freezing point of solution, freezing point of pure solvent, boiling point of pure solvent, boiling point of solution. The band between each solid curve and its dashed partner is shaded and dotted. The solid–gas curve rises from the lower left to the pure solvent’s triple point; the solution’s dashed curves leave it a little lower and to the left. The ΔP arrow spans the gap between the two liquid–gas curves at a temperature between the triple point and the boiling points. The solid region is pale green at the left, the liquid region lavender at the top center, and the gas region pale yellow at the right and along the bottom." >}}
Phase diagrams for a pure solvent (solid curves) and a solution formed by dissolving nonvolatile solute in the solvent (dashed curves).
{{< /mediafigure >}}

The liquid-vapor curve for the solution is located *beneath* the corresponding curve for the solvent, depicting the vapor pressure *lowering*, $\Delta P$, that results from the dissolution of nonvolatile solute. Consequently, at any given pressure, the solution’s boiling point is observed at a higher temperature than that for the pure solvent, reflecting the boiling point elevation, $\Delta T_\text{b}$, associated with the presence of nonvolatile solute. The solid-liquid curve for the solution is displaced left of that for the pure solvent, representing the freezing point depression, $\Delta T_\text{f}$, that accompanies solution formation. Finally, notice that the solid-gas curves for the solvent and its solution are identical. This is the case for many solutions comprising liquid solvents and nonvolatile solutes. Just as for vaporization, when a solution of this sort is frozen, it is actually just the *solvent* molecules that undergo the liquid-to-solid transition, forming pure solid solvent that excludes solute species. The solid and gaseous phases, therefore, are composed of solvent only, and so transitions between these phases are not subject to colligative effects.

## Osmosis and Osmotic Pressure of Solutions

A number of natural and synthetic materials exhibit *selective permeation*, meaning that only molecules or ions of a certain size, shape, polarity, charge, and so forth, are capable of passing through (permeating) the material. Biological cell membranes provide elegant examples of selective permeation in nature, while dialysis tubing used to remove metabolic wastes from blood is a more simplistic technological example. Regardless of how they may be fabricated, these materials are generally referred to as **semipermeable membranes**.

Consider the apparatus illustrated in the figure below, in which samples of pure solvent and a solution are separated by a membrane that only solvent molecules may permeate. Solvent molecules will diffuse across the membrane in both directions. Since the concentration of *solvent* is greater in the pure solvent than the solution, these molecules will diffuse from the solvent side of the membrane to the solution side at a faster rate than they will in the reverse direction. The result is a net transfer of solvent molecules from the pure solvent to the solution. Diffusion-driven transfer of solvent molecules through a semipermeable membrane is a process known as **osmosis**.

{{< mediafigure src="chemistry/CNX_Chem_11_04_osmosis" kind="diagram" alt="Two U-shaped tubes, each with a semipermeable membrane at the bottom of the bend, pure solvent of small gold spheres at the left and a solution of small gold and larger blue spheres at the right. (a) The two liquid levels are equal; at the membrane, two arrows carry small spheres to the right, one carries a small sphere to the left, and an arrow from a large sphere turns back at the membrane. (b) The solution’s level stands well above the solvent’s, and a red double-headed arrow labeled osmotic pressure spans the height between them; two arrows cross the membrane each way." >}}
(a) A solution and pure solvent are initially separated by an osmotic membrane. (b) Net transfer of solvent molecules to the solution occurs until its osmotic pressure yields equal rates of transfer in both directions.
{{< /mediafigure >}}

When osmosis is carried out in an apparatus like that shown in the figure above, the volume of the solution increases as it becomes diluted by accumulation of solvent. This causes the level of the solution to rise, increasing its hydrostatic pressure (due to the weight of the column of solution in the tube) and resulting in a faster transfer of solvent molecules back to the pure solvent side. When the pressure reaches a value that yields a reverse solvent transfer rate equal to the osmosis rate, bulk transfer of solvent ceases. This pressure is called the **osmotic pressure ($\Pi$)** of the solution. The osmotic pressure of a dilute solution is related to its solute molarity, $M$, and absolute temperature, $T$, according to the equation

$$\Pi = MRT$$

where $R$ is the universal gas constant.

**Example.** *Calculation of Osmotic Pressure.* Assuming ideal solution behavior, what is the osmotic pressure (atm) of a 0.30 *M* solution of glucose in water that is used for intravenous infusion at body temperature, 37 °C?

**Solution.** Find the osmotic pressure, $\Pi$, using the formula $\Pi = MRT$, where $T$ is on the Kelvin scale (310.15 K) and the value of $R$ is expressed in appropriate units (0.08206 L atm/(mol K)).

$$
\begin{aligned}
\Pi &= MRT \\
&= 0.30\ \text{mol/L} \times 0.08206\ \text{L atm/mol K} \times 310.15\ \text{K} \\
&= 7.6\ \text{atm}
\end{aligned}
$$

{{< fillin
  question="Assuming ideal solution behavior, what is the osmotic pressure (atm) of a solution with a volume of 0.750 L that contains 5.0 g of methanol, CH₃OH, in water at 37 °C?"
  answer="5.3"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$5.3\ \text{atm}$"
  hint="Find the molarity with a molar mass computed from the formula, then use the osmotic pressure equation with the temperature in kelvin."
>}}

If a solution is placed in an apparatus like the one shown in the figure below, applying pressure greater than the osmotic pressure of the solution reverses the osmosis and pushes solvent molecules from the solution into the pure solvent. This technique of reverse osmosis is used for large-scale desalination of seawater and on smaller scales to produce high-purity tap water for drinking.

{{< mediafigure src="chemistry/CNX_Chem_11_04_rvosmosis" kind="diagram" alt="A U-shaped tube with a semipermeable membrane at the bottom of the bend, pure solvent of small gold spheres at the left and a solution of small gold and larger blue spheres at the right. A gray piston rests on the solution, pushed down by an arrow labeled pressure greater than Π of the solution, and four arrows carry small spheres leftward through the membrane into the pure solvent." >}}
Applying a pressure greater than the osmotic pressure of a solution will reverse osmosis. Solvent molecules from the solution are pushed into the pure solvent.
{{< /mediafigure >}}

{{< callout type="info" >}}
**Chemistry in Everyday Life.** *Reverse Osmosis Water Purification.*

In the process of osmosis, diffusion serves to move water through a semipermeable membrane from a less concentrated solution to a more concentrated solution. Osmotic pressure is the amount of pressure that must be applied to the more concentrated solution to cause osmosis to stop. If greater pressure is applied, the water will go from the more concentrated solution to a less concentrated (more pure) solution. This is called reverse osmosis. Reverse osmosis (RO) is used to purify water in many applications, from desalination plants in coastal cities, to water-purifying machines in grocery stores (shown in the figure below), and smaller reverse-osmosis household units. With a hand-operated pump, small RO units can be used in third-world countries, disaster areas, and in lifeboats. Our military forces have a variety of generator-operated RO units that can be transported in vehicles to remote locations.

{{< mediafigure src="chemistry/CNX_Chem_11_04_waterpur" kind="photo" alt="(a) A compact beige water-purifying unit with two pressure gauges, a control panel, a blue filter canister, and braided hoses at its side. (b) Outdoors on muddy ground, a soldier fills plastic water cans beside a large green frame packed with long cylindrical filter housings." >}}
Reverse osmosis systems for purifying drinking water are shown here on (a) small and (b) large scales. (credit a: modification of work by Jerry Kirkhart; credit b: modification of work by Willard J. Lathrop)
{{< /mediafigure >}}
{{< /callout >}}

Examples of osmosis are evident in many biological systems because cells are surrounded by semipermeable membranes. Carrots and celery that have become limp because they have lost water can be made crisp again by placing them in water. Water moves into the carrot or celery cells by osmosis. A cucumber placed in a concentrated salt solution loses water by osmosis and absorbs some salt to become a pickle. Osmosis can also affect animal cells. Solute concentrations are particularly important when solutions are injected into the body. Solutes in body cell fluids and blood serum give these solutions an osmotic pressure of approximately 7.7 atm. Solutions injected into the body must have the same osmotic pressure as blood serum; that is, they should be **isotonic** with blood serum. If a less concentrated solution, a **hypotonic** solution, is injected in sufficient quantity to dilute the blood serum, water from the diluted serum passes into the blood cells by osmosis, causing the cells to expand and rupture. This process is called **hemolysis**. When a more concentrated solution, a **hypertonic** solution, is injected, the cells lose water to the more concentrated solution, shrivel, and possibly die in a process called **crenation**. These effects are illustrated in the figure below.

{{< mediafigure src="chemistry/CNX_Chem_11_04_bloodcell" kind="diagram" alt="Three panels, each a red blood cell with curved blue arrows for water, labeled H₂O, above a circle of many cells. (a) A thick arrow carries water into the cell and a thin one out; the cells below are plump, and one bursts, spraying blue liquid. (b) Equal thin arrows carry water in and out; the cells below are smooth disks. (c) A thin arrow carries water in and a thick one out of a shrunken, crinkled cell; the cells below are shriveled." >}}
Red blood cell membranes are water permeable and will (a) swell and possibly rupture in a hypotonic solution; (b) maintain normal volume and shape in an isotonic solution; and (c) shrivel and possibly die in a hypertonic solution. (credit a/b/c: modifications of work by “LadyofHats”/Wikimedia commons)
{{< /mediafigure >}}

## Determination of Molar Masses

Osmotic pressure and changes in freezing point, boiling point, and vapor pressure are directly proportional to the number of solute species present in a given amount of solution. Consequently, measuring one of these properties for a solution prepared using a known mass of solute permits determination of the solute’s molar mass.

**Example.** *Determination of a Molar Mass from a Freezing Point Depression.* A solution of 4.00 g of a nonelectrolyte dissolved in 55.0 g of benzene is found to freeze at 2.32 °C. Assuming ideal solution behavior, what is the molar mass of this compound?

**Solution.** Solve this problem using the following steps.

{{< mediafigure src="chemistry/CNX_Chem_11_04_Ex07Steps_img" kind="diagram" alt="A flow chart: freezing point of solution, arrow 1 to ΔTf, arrow 2 to molal concentration of compound, arrow 3 to moles of compound in sample, and arrow 4, pointing down, to molar mass of compound." >}}
{{< /mediafigure >}}

1. *Determine the change in freezing point from the observed freezing point and the freezing point of pure benzene* (the table of boiling point elevation and freezing point depression constants above).

   $$\Delta T_\text{f} = 5.5\ {}^\circ\text{C} - 2.32\ {}^\circ\text{C} = 3.2\ {}^\circ\text{C}$$

2. *Determine the molal concentration from* $K_\text{f}$, *the freezing point depression constant for benzene* (the table of boiling point elevation and freezing point depression constants above), *and* $\Delta T_\text{f}$.

   $$
   \begin{aligned}
   \Delta T_\text{f} &= K_\text{f}m \\[6pt]
   m &= \frac{\Delta T_\text{f}}{K_\text{f}} = \frac{3.18\ {}^\circ\text{C}}{5.12\ {}^\circ\text{C}\ m^{-1}} = 0.62\ m
   \end{aligned}
   $$

3. *Determine the number of moles of compound in the solution from the molal concentration and the mass of solvent used to make the solution.*

   $$
   \begin{aligned}
   \text{Moles of solute} &= \frac{0.6211\ \text{mol solute}}{1.00\ \cancel{\text{kg solvent}}} \times 0.0550\ \cancel{\text{kg solvent}} \\[6pt]
   &= 0.034\ \text{mol}
   \end{aligned}
   $$

4. *Determine the molar mass from the mass of the solute and the number of moles in that mass.*

   $$\text{Molar mass} = \frac{4.00\ \text{g}}{0.03416\ \text{mol}} = 1.2 \times 10^{2}\ \text{g/mol}$$

*Source note:* the source prints $1.1 \times 10^{2}$ g/mol; it divides by an amount of solute it had already rounded.

{{< fillin
  question="A solution of 35.7 g of a nonelectrolyte in 220.0 g of chloroform has a boiling point of 64.5 °C. Assuming ideal solution behavior, what is the molar mass of this compound? Enter the molar mass in g/mol."
  answer="1.8\times10^{2}"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$1.8 \times 10^{2}\ \text{g/mol}$"
  hint="Find the molality from the boiling point elevation equation, with chloroform’s boiling point and constant from the table of boiling point elevation and freezing point depression constants above, then the moles of solute in the solvent."
>}}

**Example.** *Determination of a Molar Mass from Osmotic Pressure.* A 0.500 L sample of an aqueous solution containing 10.0 g of hemoglobin has an osmotic pressure of 5.9 torr at 22 °C. Assuming ideal solution behavior, what is the molar mass of hemoglobin?

**Solution.** Here is one set of steps that can be used to solve the problem:

{{< mediafigure src="chemistry/CNX_Chem_11_04_Ex08Steps_img" kind="diagram" alt="A flow chart of four boxes in a row: osmotic pressure, arrow 1 to molar concentration, arrow 2 to moles of hemoglobin in sample, arrow 3 to molar mass of hemoglobin." >}}
{{< /mediafigure >}}

1. *Convert the osmotic pressure to atmospheres, then determine the molar concentration from the osmotic pressure.*

   $$
   \begin{aligned}
   \Pi &= \frac{5.9\ \text{torr} \times 1\ \text{atm}}{760\ \text{torr}} = 7.8 \times 10^{-3}\ \text{atm} \\[6pt]
   \Pi &= MRT \\[6pt]
   M &= \frac{\Pi}{RT} = \frac{7.763 \times 10^{-3}\ \text{atm}}{(0.08206\ \text{L atm/mol K})(295.15\ \text{K})} \\[6pt]
   &= 3.2 \times 10^{-4}\ M
   \end{aligned}
   $$

2. *Determine the number of moles of hemoglobin in the solution from the concentration and the volume of the solution.*

   $$
   \begin{aligned}
   \text{moles of hemoglobin} &= \frac{3.2052 \times 10^{-4}\ \text{mol}}{1\ \cancel{\text{L solution}}} \times 0.500\ \cancel{\text{L solution}} \\[6pt]
   &= 1.6 \times 10^{-4}\ \text{mol}
   \end{aligned}
   $$

3. *Determine the molar mass from the mass of hemoglobin and the number of moles in that mass.*

   $$\text{molar mass} = \frac{10.0\ \text{g}}{1.6026 \times 10^{-4}\ \text{mol}} = 6.2 \times 10^{4}\ \text{g/mol}$$

{{< fillin
  question="Assuming ideal solution behavior, what is the molar mass of a protein if a solution of 0.02 g of the protein in 25.0 mL of solution has an osmotic pressure of 0.56 torr at 25 °C? Enter the molar mass in g/mol."
  answer="3\times10^{4}"
  answerForm="sig-figs:1 last-digit:0"
  answerDisplay="$3 \times 10^{4}\ \text{g/mol}$"
  hint="Find the molarity from the osmotic pressure equation, with the pressure in atmospheres and the temperature in kelvin, then the moles of protein in the sample."
>}}

## Colligative Properties of Electrolytes

As noted previously in this module, the colligative properties of a solution depend only on the number, not on the identity, of solute species dissolved. The concentration terms in the equations for various colligative properties (freezing point depression, boiling point elevation, osmotic pressure) pertain to *all solute species present in the solution*. For the solutions considered thus far in this chapter, the solutes have been nonelectrolytes that dissolve physically without dissociation or any other accompanying process. Each molecule that dissolves yields one dissolved solute molecule. The dissolution of an electrolyte, however, is not this simple, as illustrated by the two common examples below:

$$
\begin{aligned}
&\text{dissociation} &&\ce{NaCl(s) -> Na+(aq) + Cl-(aq)} \\
&\text{ionization} &&\ce{HCl(aq) + H2O(l) -> Cl-(aq) + H3O+(aq)}
\end{aligned}
$$

Considering the first of these examples, and assuming complete dissociation, a 1.0 *m* aqueous solution of NaCl contains 2.0 mole of ions (1.0 mol Na⁺ and 1.0 mol Cl⁻) per each kilogram of water, and its freezing point depression is expected to be

$$
\begin{aligned}
\Delta T_\text{f} &= 2.0\ \text{mol ions/kg water} \times 1.86\ {}^\circ\text{C kg water/mol ion} \\
&= 3.7\ {}^\circ\text{C}.
\end{aligned}
$$

When this solution is actually prepared and its freezing point depression measured, however, a value of 3.4 °C is obtained. Similar discrepancies are observed for other ionic compounds, and the differences between the measured and expected colligative property values typically become more significant as solute concentrations increase. These observations suggest that the ions of sodium chloride (and other strong electrolytes) are not completely dissociated in solution.

To account for this and avoid the errors accompanying the assumption of total dissociation, an experimentally measured parameter named in honor of Nobel Prize-winning Dutch chemist Jacobus Henricus van’t Hoff is used. The **van’t Hoff factor ($i$)** is defined as the ratio of solute particles in solution to the number of formula units dissolved:

$$i = \frac{\text{moles of particles in solution}}{\text{moles of formula units dissolved}}$$

*Source note:* the source calls van’t Hoff a German chemist. He was born in Rotterdam, in the Netherlands, and held a chair at Amsterdam before he moved to Berlin ([Nobel Foundation](https://www.nobelprize.org/prizes/chemistry/1901/hoff/biographical/)).

Values for measured van’t Hoff factors for several solutes, along with predicted values assuming complete dissociation, are shown in the table below.

**Predicted and Measured van’t Hoff Factors for Several 0.050 *m* Aqueous Solutions**

| Formula unit | Classification | Dissolution products | $i$ (predicted) | $i$ (measured) |
|---|---|---|---|---|
| C₁₂H₂₂O₁₁ (sucrose) | Nonelectrolyte | C₁₂H₂₂O₁₁ | 1 | 1.0 |
| NaCl | Strong electrolyte | Na⁺, Cl⁻ | 2 | 1.9 |
| HCl | Strong electrolyte (acid) | H₃O⁺, Cl⁻ | 2 | 1.9 |
| MgSO₄ | Strong electrolyte | Mg²⁺, SO₄²⁻ | 2 | 1.3 |
| MgCl₂ | Strong electrolyte | Mg²⁺, 2Cl⁻ | 3 | 2.7 |
| FeCl₃ | Strong electrolyte | Fe³⁺, 3Cl⁻ | 4 | 3.4 |

In 1923, the chemists Peter Debye and Erich Hückel proposed a theory to explain the apparent incomplete ionization of strong electrolytes. They suggested that although interionic attraction in an aqueous solution is very greatly reduced by solvation of the ions and the insulating action of the polar solvent, it is not completely nullified. The residual attractions prevent the ions from behaving as totally independent particles (shown in the figure below). In some cases, a positive and negative ion may actually touch, giving a solvated unit called an ion pair. Thus, the **activity**, or the effective concentration, of any particular kind of ion is less than that indicated by the actual concentration. Ions become more and more widely separated the more dilute the solution, and the residual interionic attractions become less and less. Thus, in extremely dilute solutions, the effective concentrations of the ions (their activities) are essentially equal to the actual concentrations. Note that the van’t Hoff factors for the electrolytes in the table above are for 0.05 *m* solutions, at which concentration the value of $i$ for NaCl is 1.9, as opposed to an ideal value of 2.

{{< mediafigure src="chemistry/CNX_Chem_11_04_ionpair" kind="diagram" alt="Four large purple spheres labeled K⁺ and four smaller green spheres labeled Cl⁻ among water molecules, each a red oxygen sphere with two white hydrogen spheres; the atoms of one water molecule are labeled H and O. Water molecules surround each ion, oxygen toward each K⁺ and a hydrogen toward each Cl⁻. In two places a K⁺ and a Cl⁻ touch, and each such pair is labeled ion pair." >}}
Dissociation of ionic compounds in water is not always complete due to the formation of ion pairs.
{{< /mediafigure >}}

**Example.** *The Freezing Point of a Solution of an Electrolyte.* The concentration of ions in seawater is approximately the same as that in a solution containing 4.2 g of NaCl dissolved in 125 g of water. Use this information and a predicted value for the van’t Hoff factor (the table of predicted and measured van’t Hoff factors above) to determine the freezing temperature of the solution (assume ideal solution behavior).

**Solution.** Solve this problem using the following series of steps.

{{< mediafigure src="chemistry/CNX_Chem_11_04_Ex09Steps_img" kind="diagram" alt="A flow chart: mass of NaCl, arrow 1 to moles of NaCl, arrow 2 to moles of ions, arrow 3 to molality of solution, arrow 4 to change in freezing point, and arrow 5, pointing down, to new freezing point." >}}
{{< /mediafigure >}}

1. *Convert from grams to moles of NaCl using the molar mass of NaCl in the unit conversion factor.*

   Result: 0.072 mol NaCl (0.071869 mol carried to the next step)

2. *Determine the number of moles of ions present in the solution using the number of moles of ions in 1 mole of NaCl as the conversion factor (2 mol ions/1 mol NaCl).*

   Result: 0.14 mol ions (0.14374 mol carried to the next step)

3. *Determine the molality of the ions in the solution from the number of moles of ions and the mass of solvent, in kilograms.*

   Result: 1.1 *m* (1.1499 *m* carried to the next step)

4. *Use the direct proportionality between the change in freezing point and molal concentration to determine how much the freezing point changes.*

   Result: 2.1 °C (2.1388 °C carried to the next step)

5. *Determine the new freezing point from the freezing point of the pure solvent and the change.*

   Result: −2.1 °C

   Check each result as a self-assessment, taking care to avoid rounding errors by retaining guard digits in each step’s result for computing the next step’s result.

*Source note:* the source prints 1.2 *m* for the molality of the ions, which it computes from an amount of sodium chloride it had already rounded, and it prints each result rounded. Here each result is printed with the digits carried to the next step as well; the freezing point is the same.

{{< fillin
  question="Assuming complete dissociation and ideal solution behavior, calculate the freezing point of a solution of 0.724 g of CaCl₂ in 175 g of water. Enter the freezing point in degrees Celsius."
  answer="-0.208"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$-0.208\ {}^\circ\text{C}$"
  hint="Find the molality of all the dissolved particles the compound gives when it dissociates completely, then use the freezing point depression equation with the constant for water from the table of boiling point elevation and freezing point depression constants above."
>}}

## Summary

- Properties of a solution that depend only on the concentration of solute particles are called colligative properties. They include changes in the vapor pressure, boiling point, and freezing point of the solvent in the solution. The magnitudes of these properties depend only on the total concentration of solute particles in solution, not on the type of particles. The total concentration of solute particles in a solution also determines its osmotic pressure. This is the pressure that must be applied to the solution to prevent diffusion of molecules of pure solvent through a semipermeable membrane into the solution. Ionic compounds may not completely dissociate in solution due to activity effects, in which case observed colligative effects may be less than predicted.

## Key equations

- $P_\text{A} = X_\text{A}P_\text{A}^*$
- $P_\text{solution} = \sum_i P_i = \sum_i X_iP_i^*$
- $P_\text{solution} = X_\text{solvent}P_\text{solvent}^*$
- $\Delta T_\text{b} = K_\text{b}m$
- $\Delta T_\text{f} = K_\text{f}m$
- $\Pi = MRT$

## Key terms

- **boiling point elevation** — elevation of the boiling point of a liquid by addition of a solute.
- **boiling point elevation constant** — the proportionality constant in the equation relating boiling point elevation to solute molality; also known as the ebullioscopic constant.
- **colligative property** — property of a solution that depends only on the concentration of a solute species.
- **crenation** — process whereby biological cells become shriveled due to loss of water by osmosis.
- **freezing point depression** — lowering of the freezing point of a liquid by addition of a solute.
- **freezing point depression constant** — (also, cryoscopic constant) proportionality constant in the equation relating freezing point depression to solute molality.
- **hemolysis** — rupture of red blood cells due to the accumulation of excess water by osmosis.
- **hypertonic** — of greater osmotic pressure.
- **hypotonic** — of less osmotic pressure.
- **ion pair** — solvated anion/cation pair held together by moderate electrostatic attraction.
- **isotonic** — of equal osmotic pressure.
- **molality ($m$)** — a concentration unit defined as the ratio of the numbers of moles of solute to the mass of the solvent in kilograms.
- **osmosis** — diffusion of solvent molecules through a semipermeable membrane.
- **osmotic pressure ($\Pi$)** — opposing pressure required to prevent bulk transfer of solvent molecules through a semipermeable membrane.
- **Raoult’s law** — the relationship between a solution’s vapor pressure and the vapor pressures and concentrations of its components.
- **semipermeable membrane** — a membrane that selectively permits passage of certain ions or molecules.
- **van’t Hoff factor ($i$)** — the ratio of the number of moles of particles in a solution to the number of moles of formula units dissolved in the solution.

## Practice

*Source note:* the source’s answer key for some exercises of this section was worked from atomic masses other than the ones in this book’s periodic table. The answers here are worked from this book’s table (Appendix A), so some differ from the source’s in their last digits.

### Express concentrations of solution components using mole fraction and molality

#### Mole fractions

{{< selfcheck question="What are the mole fractions of HNO₃ and water in a concentrated solution of nitric acid (68.0% HNO₃ by mass)? Outline the steps necessary to answer the question." hint="Use the definition of percent by mass from Section 3.4 Other Units for Solution Concentrations and the definition of mole fraction, with molar masses computed from the formulas." >}}
Find number of moles of HNO₃ and H₂O in 100 g of the solution. Find the mole fractions for the components.
===CHECKS===
find number of moles of HNO₃ and H₂O in 100 g of the solution
find the mole fractions for the components
{{< /selfcheck >}}

{{< fillin
  question="What are the mole fractions of HNO₃ and water in a concentrated solution of nitric acid (68.0% HNO₃ by mass)? Answer the question. Enter the mole fraction of HNO₃."
  answer="0.378"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.378$"
  hint="Use the definition of percent by mass from Section 3.4 Other Units for Solution Concentrations and the definition of mole fraction, with molar masses computed from the formulas."
>}}

{{< fillin
  question="What are the mole fractions of HNO₃ and water in a concentrated solution of nitric acid (68.0% HNO₃ by mass)? Answer the question. Enter the mole fraction of H₂O."
  answer="0.622"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.622$"
  hint="Use the definition of percent by mass from Section 3.4 Other Units for Solution Concentrations and the definition of mole fraction, with molar masses computed from the formulas."
>}}

{{< fillin
  question="Calculate the mole fraction of the solute and the solvent: 0.710 kg of sodium carbonate (washing soda), Na₂CO₃, in 10.0 kg of water—a saturated solution at 0 °C. Enter the mole fraction of Na₂CO₃."
  answer="0.0119"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.0119$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

{{< fillin
  question="Calculate the mole fraction of the solute and the solvent: 0.710 kg of sodium carbonate (washing soda), Na₂CO₃, in 10.0 kg of water—a saturated solution at 0 °C. Enter the mole fraction of H₂O."
  answer="0.988"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.988$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

{{< fillin
  question="Calculate the mole fraction of the solute and the solvent: 125 g of NH₄NO₃ in 275 g of water—a mixture used to make an instant ice pack. Enter the mole fraction of NH₄NO₃."
  answer="0.0928"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.0928$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

{{< fillin
  question="Calculate the mole fraction of the solute and the solvent: 125 g of NH₄NO₃ in 275 g of water—a mixture used to make an instant ice pack. Enter the mole fraction of H₂O."
  answer="0.907"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.907$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

{{< fillin
  question="Calculate the mole fraction of the solute and the solvent: 25 g of Cl₂ in 125 g of dichloromethane, CH₂Cl₂. Enter the mole fraction of Cl₂."
  answer="0.19"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$0.19$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

*Source note:* the answer graded for this exercise is written to the number of significant figures its data give, which is not the number the source prints.

{{< fillin
  question="Calculate the mole fraction of the solute and the solvent: 25 g of Cl₂ in 125 g of dichloromethane, CH₂Cl₂. Enter the mole fraction of CH₂Cl₂."
  answer="0.807"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.807$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

{{< fillin
  question="Calculate the mole fraction of the solute and the solvent: 0.372 g of tetrahydropyridine, C₅H₉N, in 125 g of chloroform, CHCl₃. Enter the mole fraction of C₅H₉N."
  answer="0.00425"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.00425$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

{{< fillin
  question="Calculate the mole fraction of the solute and the solvent: 0.372 g of tetrahydropyridine, C₅H₉N, in 125 g of chloroform, CHCl₃. Enter the mole fraction of CHCl₃."
  answer="0.996"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.996$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

#### Molality

{{< selfcheck question="What is the difference between a 1 *M* solution and a 1 *m* solution?" hint="Compare the definitions of molarity and molality in the Mole Fraction and Molality subsection above." >}}
In a 1 *M* solution, the mole is contained in exactly 1 L of solution. In a 1 *m* solution, the mole is contained in exactly 1 kg of solvent.
===CHECKS===
in a 1 M solution, the mole is contained in exactly 1 L of solution
in a 1 m solution, the mole is contained in exactly 1 kg of solvent
{{< /selfcheck >}}

{{< selfcheck question="What is the molality of nitric acid in a concentrated solution of nitric acid (68.0% HNO₃ by mass)? Outline the steps necessary to answer the question." hint="Use the definition of percent by mass from Section 3.4 Other Units for Solution Concentrations and the definition of molality, with a molar mass computed from the formula." >}}
Determine the molar mass of HNO₃. Determine the number of moles of acid in the solution. From the number of moles and the mass of solvent, determine the molality.
===CHECKS===
determine the molar mass of HNO₃
determine the number of moles of acid in the solution
from the number of moles and the mass of solvent, determine the molality
{{< /selfcheck >}}

{{< fillin
  question="What is the molality of nitric acid in a concentrated solution of nitric acid (68.0% HNO₃ by mass)? Answer the question. Enter the molality in mol/kg."
  answer="33.7"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$33.7\ m$"
  hint="Use the definition of percent by mass from Section 3.4 Other Units for Solution Concentrations and the definition of molality, with a molar mass computed from the formula."
>}}

{{< fillin
  question="Calculate the molality of the following solution: 0.710 kg of sodium carbonate (washing soda), Na₂CO₃, in 10.0 kg of water—a saturated solution at 0 °C. Enter the molality in mol/kg."
  answer="6.70\times10^{-1}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$6.70 \times 10^{-1}\ m$"
  hint="Convert the solute’s mass to moles with a molar mass computed from the formula, and the solvent’s mass to kilograms, then use the definition of molality."
>}}

{{< fillin
  question="Calculate the molality of the following solution: 125 g of NH₄NO₃ in 275 g of water—a mixture used to make an instant ice pack. Enter the molality in mol/kg."
  answer="5.68"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$5.68\ m$"
  hint="Convert the solute’s mass to moles with a molar mass computed from the formula, and the solvent’s mass to kilograms, then use the definition of molality."
>}}

{{< fillin
  question="Calculate the molality of the following solution: 25 g of Cl₂ in 125 g of dichloromethane, CH₂Cl₂. Enter the molality in mol/kg."
  answer="2.8"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$2.8\ m$"
  hint="Convert the solute’s mass to moles with a molar mass computed from the formula, and the solvent’s mass to kilograms, then use the definition of molality."
>}}

{{< fillin
  question="Calculate the molality of the following solution: 0.372 g of tetrahydropyridine, C₅H₉N, in 125 g of chloroform, CHCl₃. Enter the molality in mol/kg."
  answer="0.0358"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.0358\ m$"
  hint="Convert the solute’s mass to moles with a molar mass computed from the formula, and the solvent’s mass to kilograms, then use the definition of molality."
>}}

{{< fillin
  question="A 13.0% solution of K₂CO₃ by mass has a density of 1.09 g/cm³. Calculate the molality of the solution. Enter the molality in mol/kg."
  answer="1.08"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$1.08\ m$"
  hint="Consider 100 g of the solution, and use the definition of percent by mass from Section 3.4 Other Units for Solution Concentrations and the definition of molality, with a molar mass computed from the formula."
>}}

### Describe the effect of solute concentration on various solution properties (vapor pressure, boiling point, freezing point, and osmotic pressure)

{{< selfcheck question="What is the microscopic explanation for the macroscopic behavior illustrated in the photograph of oil and water in a glass in [Section 11.3 Solubility](/physical-sciences/chemistry/11-solutions-and-colloids/03-solubility/)?" hint="Name the intermolecular attractions that act between water molecules, between oil molecules, and between the two." >}}
The strength of the bonds between like molecules is stronger than the strength between unlike molecules. Therefore, some regions will exist in which the water molecules will exclude oil molecules and other regions will exist in which oil molecules will exclude water molecules, forming a heterogeneous region.
===CHECKS===
the strength of the bonds between like molecules is stronger than the strength between unlike molecules
some regions will exist in which the water molecules will exclude oil molecules
other regions will exist in which oil molecules will exclude water molecules, forming a heterogeneous region
{{< /selfcheck >}}

{{< selfcheck question="A solution of potassium nitrate, an electrolyte, and a solution of glycerin (C₃H₅(OH)₃), a nonelectrolyte, both boil at 100.3 °C. What other physical properties of the two solutions are identical?" hint="Recall what a colligative property depends on, and which properties this section names as colligative." >}}
Both form homogeneous solutions; their boiling point elevations are the same, as are their lowering of vapor pressures. Osmotic pressure and the lowering of the freezing point are also the same for both solutions.
===CHECKS===
both form homogeneous solutions
their boiling point elevations are the same, as are their lowering of vapor pressures
osmotic pressure and the lowering of the freezing point are also the same for both solutions
{{< /selfcheck >}}

{{< multiplechoice question="A 1.0 *m* solution of HCl in benzene has a freezing point of 0.4 °C. Is HCl an electrolyte in benzene? Explain." answer="no" hint="Compare the observed freezing point depression with the one the freezing point depression equation predicts for HCl that does not ionize, with benzene’s values from the table of boiling point elevation and freezing point depression constants above." >}}
yes
no
{{< /multiplechoice >}}

{{< selfcheck question="A 1.0 *m* solution of HCl in benzene has a freezing point of 0.4 °C. Is HCl an electrolyte in benzene? Explain." hint="Compare the observed freezing point depression with the one the freezing point depression equation predicts for HCl that does not ionize, with benzene’s values from the table of boiling point elevation and freezing point depression constants above." >}}
No. Pure benzene freezes at 5.5 °C, and so the observed freezing point of this solution is depressed by $\Delta T_\text{f} = 5.5 - 0.4 = 5.1\ {}^\circ\text{C}$. The value computed, assuming no ionization of HCl, is $\Delta T_\text{f} = (1.0\ m)(5.12\ {}^\circ\text{C}/m) = 5.1\ {}^\circ\text{C}$. Agreement of these values supports the assumption that HCl is not ionized.
===CHECKS===
pure benzene freezes at 5.5 °C
the observed freezing point of this solution is depressed by ΔTf = 5.5 − 0.4 = 5.1 °C
the value computed, assuming no ionization of HCl, is ΔTf = (1.0 m)(5.12 °C/m) = 5.1 °C
agreement of these values supports the assumption that HCl is not ionized
{{< /selfcheck >}}

*Source note:* the source’s answer gives benzene’s freezing point depression constant as 5.14 °C/*m*, where the table of boiling point elevation and freezing point depression constants above prints 5.12 °C/*m*; the model answer here uses the table’s value.

{{< selfcheck question="Meat can be classified as fresh (not frozen) even though it is stored at −1 °C. Why wouldn’t meat freeze at this temperature?" hint="Reread the Freezing Point Depression subsection above." >}}
The ions and compounds present in the water in the beef lower the freezing point of the beef below −1 °C.
===CHECKS===
the ions and compounds present in the water in the beef lower the freezing point
lower the freezing point of the beef below −1 °C
{{< /selfcheck >}}

### Perform calculations using the mathematical equations that describe these various colligative effects

{{< selfcheck question="Assuming ideal solution behavior, what is the boiling point of a solution of 115.0 g of nonvolatile sucrose, C₁₂H₂₂O₁₁, in 350.0 g of water? Outline the steps necessary to answer the question." hint="Use the boiling point elevation equation, with the constant for water from the table of boiling point elevation and freezing point depression constants above." >}}
Determine the molar mass of sucrose; determine the number of moles of sucrose in the solution; convert the mass of solvent to units of kilograms; from the number of moles and the mass of solvent, determine the molality; determine the difference between the boiling point of water and the boiling point of the solution; determine the new boiling point.
===CHECKS===
determine the molar mass of sucrose
determine the number of moles of sucrose in the solution
convert the mass of solvent to units of kilograms
from the number of moles and the mass of solvent, determine the molality
determine the difference between the boiling point of water and the boiling point of the solution
determine the new boiling point
{{< /selfcheck >}}

{{< fillin
  question="Assuming ideal solution behavior, what is the boiling point of a solution of 115.0 g of nonvolatile sucrose, C₁₂H₂₂O₁₁, in 350.0 g of water? Answer the question. Enter the boiling point in degrees Celsius."
  answer="100.491"
  answerForm="sig-figs:6 last-digit:1"
  answerDisplay="$100.491\ {}^\circ\text{C}$"
  hint="Use the boiling point elevation equation, with the constant for water from the table of boiling point elevation and freezing point depression constants above."
>}}

*Source note:* the answer graded for this exercise is written to the number of significant figures its data give, which is not the number the source prints.

{{< selfcheck question="Assuming ideal solution behavior, what is the freezing temperature of a solution of 115.0 g of sucrose, C₁₂H₂₂O₁₁, in 350.0 g of water? Outline the steps necessary to answer the question." hint="Use the freezing point depression equation, with the constant for water from the table of boiling point elevation and freezing point depression constants above." >}}
Determine the molar mass of sucrose; determine the number of moles of sucrose in the solution; convert the mass of solvent to units of kilograms; from the number of moles and the mass of solvent, determine the molality; determine the difference between the freezing temperature of water and the freezing temperature of the solution; determine the new freezing temperature.
===CHECKS===
determine the molar mass of sucrose
determine the number of moles of sucrose in the solution
convert the mass of solvent to units of kilograms
from the number of moles and the mass of solvent, determine the molality
determine the difference between the freezing temperature of water and the freezing temperature of the solution
determine the new freezing temperature
{{< /selfcheck >}}

{{< fillin
  question="Assuming ideal solution behavior, what is the freezing temperature of a solution of 115.0 g of sucrose, C₁₂H₂₂O₁₁, in 350.0 g of water? Answer the question. Enter the freezing temperature in degrees Celsius."
  answer="-1.79"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$-1.79\ {}^\circ\text{C}$"
  hint="Use the freezing point depression equation, with the constant for water from the table of boiling point elevation and freezing point depression constants above."
>}}

*Source note:* the answer graded for this exercise is written to the number of significant figures its data give, which is not the number the source prints.

{{< selfcheck question="A solution containing 5.00 g of a compound dissolved in 25.00 g of carbon tetrachloride (bp 76.8 °C; $K_\text{b}$ = 5.02 °C/*m*) exhibits a normal boiling point of 81.5 °C. Assuming ideal solution behavior, what is the molar mass of the compound? Outline the steps necessary to answer the question." hint="Work back from the change in boiling point through the boiling point elevation equation." >}}
Determine the molal concentration from the change in boiling point and $K_\text{b}$; determine the moles of solute in the solution from the molal concentration and mass of solvent; determine the molar mass from the number of moles and the mass of solute.
===CHECKS===
determine the molal concentration from the change in boiling point
determine the moles of solute in the solution from the molal concentration and mass of solvent
determine the molar mass from the number of moles and the mass of solute
{{< /selfcheck >}}

{{< fillin
  question="A solution containing 5.00 g of a compound dissolved in 25.00 g of carbon tetrachloride (bp 76.8 °C; $K_\text{b}$ = 5.02 °C/*m*) exhibits a normal boiling point of 81.5 °C. Assuming ideal solution behavior, what is the molar mass of the compound? Solve the problem. Enter the molar mass in g/mol."
  answer="2.1\times10^{2}"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$2.1 \times 10^{2}\ \text{g/mol}$"
  hint="Work back from the change in boiling point through the boiling point elevation equation."
>}}

{{< fillin
  question="A 12.0-g sample of a nonelectrolyte is dissolved in 80.0 g of water. The solution freezes at −1.94 °C. Assuming ideal solution behavior, calculate the molar mass of the substance. Enter the molar mass in g/mol."
  answer="144"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$144\ \text{g/mol}$"
  hint="Find the molality from the freezing point depression equation, with the constant for water from the table of boiling point elevation and freezing point depression constants above, then the moles of solute in the water."
>}}

{{< fillin
  question="Calculate the boiling point elevation of 0.100 kg of water containing 0.010 mol of NaCl, 0.020 mol of Na₂SO₄, and 0.030 mol of MgCl₂, assuming complete dissociation of these electrolytes and ideal solution behavior. Enter the boiling point elevation in degrees Celsius."
  answer="0.870"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.870\ {}^\circ\text{C}$"
  hint="Find the total moles of dissolved ions that complete dissociation of all three compounds gives, then use the boiling point elevation equation with the constant for water from the table of boiling point elevation and freezing point depression constants above."
>}}

{{< textin
  question="A sample of sulfur weighing 0.210 g was dissolved in 17.8 g of carbon disulfide, CS₂ (*K*<sub>b</sub> = 2.34 °C/*m*). If the boiling point elevation was 0.107 °C, what is the formula of a sulfur molecule in carbon disulfide (assuming ideal solution behavior)?"
  answer="S₈"
  answerForm="formula"
  hint="Find the molar mass of the dissolved sulfur from the boiling point elevation equation, then compare it with the atomic mass of sulfur from the periodic table."
>}}

{{< fillin
  question="Lysozyme is an enzyme that cleaves cell walls. A 0.100-L sample of a solution of lysozyme that contains 0.0750 g of the enzyme exhibits an osmotic pressure of $1.32 \times 10^{-3}$ atm at 25 °C. Assuming ideal solution behavior, what is the molar mass of lysozyme? Enter the molar mass in g/mol."
  answer="1.39\times10^{4}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$1.39 \times 10^{4}\ \text{g/mol}$"
  hint="Find the molarity from the osmotic pressure equation, with the temperature in kelvin, then the moles of enzyme in the sample."
>}}

{{< fillin
  question="Assuming ideal solution behavior, what is the boiling point of a solution of NaCl in water if the solution freezes at −0.93 °C? Enter the boiling point in degrees Celsius."
  answer="100.26"
  answerForm="sig-figs:5 last-digit:1"
  answerDisplay="$100.26\ {}^\circ\text{C}$"
  hint="Find the molality of the dissolved particles from the freezing point depression equation, then use the boiling point elevation equation, with both constants for water from the table of boiling point elevation and freezing point depression constants above."
>}}

{{< selfcheck question="A sample of HgCl₂ weighing 9.41 g is dissolved in 32.75 g of ethanol, C₂H₅OH ($K_\text{b}$ = 1.20 °C/*m*). The boiling point elevation of the solution is 1.27 °C. Is HgCl₂ an electrolyte in ethanol? Show your calculations." hint="Compare the observed boiling point elevation with the one the boiling point elevation equation predicts for HgCl₂ that does not dissociate." >}}
$$\Delta\text{bp} = K_\text{b}m = (1.20\ {}^\circ\text{C}/m)\left(\frac{9.41\ \text{g} \times \frac{1\ \text{mol}\ \ce{HgCl2}}{271.49\ \text{g}}}{0.03275\ \text{kg}}\right) = 1.27\ {}^\circ\text{C}$$

The observed change equals the theoretical change; therefore, no dissociation occurs.
===CHECKS===
the observed change equals the theoretical change
therefore, no dissociation occurs
{{< /selfcheck >}}

*Source note:* the source’s answer divides by a molar mass of HgCl₂ of 271.496 g; the model answer here uses the molar mass from this book’s periodic table (Appendix A).

### Describe the process of distillation and its practical applications

{{< fillin
  question="The vapor pressure of methanol, CH₃OH, is 94 torr at 20 °C. The vapor pressure of ethanol, C₂H₅OH, is 44 torr at the same temperature. Calculate the mole fraction of methanol and of ethanol in a solution of 50.0 g of methanol and 50.0 g of ethanol. Enter the mole fraction of CH₃OH."
  answer="0.590"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.590$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

{{< fillin
  question="The vapor pressure of methanol, CH₃OH, is 94 torr at 20 °C. The vapor pressure of ethanol, C₂H₅OH, is 44 torr at the same temperature. Calculate the mole fraction of methanol and of ethanol in a solution of 50.0 g of methanol and 50.0 g of ethanol. Enter the mole fraction of C₂H₅OH."
  answer="0.410"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.410$"
  hint="Convert each mass to moles with a molar mass computed from the formula, then use the definition of mole fraction."
>}}

{{< fillin
  question="The vapor pressure of methanol, CH₃OH, is 94 torr at 20 °C. The vapor pressure of ethanol, C₂H₅OH, is 44 torr at the same temperature. A solution is made of 50.0 g of methanol and 50.0 g of ethanol. Ethanol and methanol form a solution that behaves like an ideal solution. Calculate the vapor pressure of methanol and of ethanol above the solution at 20 °C. Enter the vapor pressure of CH₃OH in torr."
  answer="55"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$55\ \text{torr}$"
  hint="Use Raoult’s law for each component, with its mole fraction in the solution."
>}}

{{< fillin
  question="The vapor pressure of methanol, CH₃OH, is 94 torr at 20 °C. The vapor pressure of ethanol, C₂H₅OH, is 44 torr at the same temperature. A solution is made of 50.0 g of methanol and 50.0 g of ethanol. Ethanol and methanol form a solution that behaves like an ideal solution. Calculate the vapor pressure of methanol and of ethanol above the solution at 20 °C. Enter the vapor pressure of C₂H₅OH in torr."
  answer="18"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$18\ \text{torr}$"
  hint="Use Raoult’s law for each component, with its mole fraction in the solution."
>}}

{{< fillin
  question="The vapor pressure of methanol, CH₃OH, is 94 torr at 20 °C. The vapor pressure of ethanol, C₂H₅OH, is 44 torr at the same temperature. A solution is made of 50.0 g of methanol and 50.0 g of ethanol. Ethanol and methanol form a solution that behaves like an ideal solution. Calculate the mole fraction of methanol and of ethanol in the vapor above the solution. Enter the mole fraction of CH₃OH in the vapor."
  answer="0.75"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$0.75$"
  hint="Use Raoult’s law for each component, then the relation between a gas’s partial pressure, its mole fraction, and the total pressure of the mixture from Section 9.3 Stoichiometry of Gaseous Substances, Mixtures, and Reactions."
>}}

{{< fillin
  question="The vapor pressure of methanol, CH₃OH, is 94 torr at 20 °C. The vapor pressure of ethanol, C₂H₅OH, is 44 torr at the same temperature. A solution is made of 50.0 g of methanol and 50.0 g of ethanol. Ethanol and methanol form a solution that behaves like an ideal solution. Calculate the mole fraction of methanol and of ethanol in the vapor above the solution. Enter the mole fraction of C₂H₅OH in the vapor."
  answer="0.25"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$0.25$"
  hint="Use Raoult’s law for each component, then the relation between a gas’s partial pressure, its mole fraction, and the total pressure of the mixture from Section 9.3 Stoichiometry of Gaseous Substances, Mixtures, and Reactions."
>}}

### Explain the process of osmosis and describe how it is applied industrially and in nature

{{< selfcheck question="Assuming ideal solution behavior, what is the osmotic pressure of an aqueous solution of 1.64 g of Ca(NO₃)₂ in water at 25 °C? The volume of the solution is 275 mL. Outline the steps necessary to answer the question." hint="Use the osmotic pressure equation, counting every ion the compound gives when it dissociates, with the temperature in kelvin." >}}
Determine the molar mass of Ca(NO₃)₂; determine the number of moles of Ca(NO₃)₂ in the solution; determine the number of moles of ions in the solution; determine the molarity of ions, then the osmotic pressure.
===CHECKS===
determine the molar mass of Ca(NO₃)₂
determine the number of moles of Ca(NO₃)₂ in the solution
determine the number of moles of ions in the solution
determine the molarity of ions, then the osmotic pressure
{{< /selfcheck >}}

{{< fillin
  question="Assuming ideal solution behavior, what is the osmotic pressure of an aqueous solution of 1.64 g of Ca(NO₃)₂ in water at 25 °C? The volume of the solution is 275 mL. Answer the question. Enter the osmotic pressure in atmospheres."
  answer="2.67"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$2.67\ \text{atm}$"
  hint="Use the osmotic pressure equation, counting every ion the compound gives when it dissociates, with the temperature in kelvin."
>}}

{{< fillin
  question="The osmotic pressure of human blood is 7.6 atm at 37 °C. What mass of glucose, C₆H₁₂O₆, is required to make 1.00 L of aqueous solution for intravenous feeding if the solution must have the same osmotic pressure as blood at body temperature, 37 °C (assuming ideal solution behavior)? Enter the mass in grams."
  answer="54"
  answerForm="sig-figs:2 last-digit:1"
  answerDisplay="$54\ \text{g}$"
  hint="Find the molarity from the osmotic pressure equation, with the temperature in kelvin, then the mass of glucose with a molar mass computed from the formula."
>}}

---

<small>This section is adapted from [Chemistry 2e, Section 11.4: Colligative Properties](https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: the seventeen images re-encoded as WebP, fourteen marked as diagrams and three as photos, and every alt text written from the image (among other differences, the source alt of the ion-pair figure turns the water molecules the other way from the drawing, which points oxygen toward each potassium ion and a hydrogen toward each chloride ion; the source alt of the vapor-pressure figure calls the stoppered flasks beakers; the source alt of the phase diagram puts the vapor pressure lowering at the boiling point, where the drawing marks it at a lower temperature; the source alt of the distillation figure names parts its drawing does not label; the source alt of the de-icing photograph describes a white deposit where the photograph shows a wet spray; and the source alts of the freezing-point molar-mass and electrolyte step charts set all their boxes in a row, where each drawing places its last box below), with extended descriptions for the distillation, refinery, and phase-diagram figures, the refinery drawing’s “naptha” named naphtha in its alt text; the six step charts of the worked examples placed as uncaptioned figures where the source prints them; the two feature boxes rendered as callouts; references to numbered figures and tables replaced by describing phrases, bare references written “(shown in the figure below)”, and references to examples on this page named by their titles; each reference to another section of this book linked to that section’s page, the references to earlier chapters followed by the sections meant (Sections 3.3 and 3.4, Section 9.3, and Section 10.3), the source’s “previous chapter on gases” written “the chapter on gases”, since that chapter is not the one before this, and the reference to a later chapter on thermodynamics by Section 16.2 Entropy, in plain text since that page is not yet written; the body’s reference to an end-of-chapter exercise by number replaced by a description of the methanol and ethanol exercise; the words naming the vapor pressure of water in the urea Check Your Learning linked to Appendix E; the source’s equations typeset as KaTeX math and its two dissolution reactions as chemical equations, the longer lines broken into aligned rows to fit the column, and unit cancellation set with a diagonal strike; the two tables transcribed as Markdown tables with their titles as bold lines above them, the second title’s “Predicated” corrected to “Predicted”, the ordinal sign the first table’s column heads print for the degree sign set as the degree sign, and a stray comma after the sulfate ion in the magnesium sulfate row removed; the first key equation set without the parentheses the source’s list prints around it, the form the body gives; the gas constant’s unit written L atm/(mol K) in running text; the molal unit italicized in the nitric acid Check Your Learning, where the source prints it upright; the nationality of van’t Hoff corrected from German to Dutch, with a Source note; one-word corrections: “electroyte” to “electrolyte”, the formula C₂H₂(OH)₂ in the antifreeze example’s second equation to C₂H₄(OH)₂, “2 kg” there to 2.00 kg, the glucose example’s “1.0 L” to the 1.00 L its sentence gives, and “of” added where the electrolyte example asks for “the freezing temperature the solution” and where the methanol Check Your Learning asks for “the osmotic pressure (atm) a solution”; the worked examples set as prose, each followed by its Check Your Learning as an interactive fill-in (twelve in all, two for the ammonia one, one per quantity), the printed answers serving as their keys rather than appearing as text; the examples’ molar masses computed from this book’s periodic table, their intermediate values printed with the digits carried, and their Celsius temperatures converted to kelvin with 273.15, with a Source note after the first calculation; four Source notes where the source’s worked values differ from the recomputed ones: the mole fraction of sodium chloride in the molal-conversion example, the amount of ethanol in the vapor-pressure example, the molar mass in the freezing-point example, and the molality of the ions in the electrolyte example; a Source note under the table of constants saying that water’s normal freezing and boiling points are taken as exact; the antifreeze Check Your Learning’s stem given the example’s masses in a parenthesis; the urea Check Your Learning’s vapor pressure of water printed as Appendix E gives it, with a Source note; the keys of the antifreeze and nitrobenzene Check Your Learning items, of the sucrose boiling-point and freezing-temperature answers, and of the chlorine mole fraction written to the number of significant figures their data give, each with a Source note; the answers worked from this book’s periodic table, with one Source note under the Practice heading; the model answers of the hydrogen chloride and mercury(II) chloride exercises given the table’s freezing point depression constant of benzene and this book’s molar mass of mercury(II) chloride, each with a Source note; the end-of-section exercises adapted into the interactive Practice block, with the 22 exercises the source keys carried as 45 items: 31 fill-ins, one per lettered part and one per quantity where a part asks two, each with a sentence added after the stem saying which quantity to enter and in what unit where the stem leaves it open, the six outline-and-answer exercises asked as a self-check for the outline and then the answer; 1 multiple-choice item, the yes-or-no of the hydrogen chloride exercise, followed by a self-check with the source’s answer whole; 1 formula text-recall item, the sulfur exercise, its Kb constant written with an HTML subscript since the item takes no math; and 12 self-checks carrying the source solutions as model answers, capitals and periods added, each with rubric checkpoints copied from that answer; the lead-ins of the lettered mole-fraction and molality exercises restated in the singular (“Calculate the mole fraction of the solute and the solvent”, “Calculate the molality of the following solution”), the second and third parts of the methanol and ethanol exercise given the first part’s masses in a sentence of their own and the third part the ideal-solution sentence, the unspaced “0°C” of the molality exercise’s first part written 0 °C, the outline and answer parts closed with a period where the source prints none, the molar-mass unit the source’s answers print with a negative exponent written g/mol, and the oil-and-water exercise’s numbered figure named by a describing phrase and linked to Section 11.3; and the 23 exercises the source prints no answer for are omitted.</small>
