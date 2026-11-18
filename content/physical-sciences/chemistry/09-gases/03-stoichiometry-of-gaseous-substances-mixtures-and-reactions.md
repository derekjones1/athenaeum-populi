---
title: "Stoichiometry of Gaseous Substances, Mixtures, and Reactions"
description: >-
  Gas densities and molar masses from the ideal gas law, Dalton’s law of
  partial pressures and mole fractions, gases collected over water, and the
  stoichiometry of reactions involving gases — adapted from OpenStax Chemistry
  2e, Section 9.3.
source_section: "9.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use the ideal gas law to compute gas densities and molar masses
- Perform stoichiometric calculations involving gaseous substances
- State Dalton’s law of partial pressures and use it in calculations involving gaseous mixtures
{{< /callout >}}

The study of the chemical behavior of gases was part of the basis of perhaps the most fundamental chemical revolution in history. French nobleman Antoine Lavoisier, widely regarded as the “father of modern chemistry,” changed chemistry from a qualitative to a quantitative science through his work with gases. He discovered the law of conservation of matter, discovered the role of oxygen in combustion reactions, determined the composition of air, explained respiration in terms of chemical reactions, and more. He was a casualty of the French Revolution, guillotined in 1794. Of his death, mathematician and astronomer Joseph-Louis Lagrange said, “It took the mob only a moment to remove his head; a century will not suffice to reproduce it.” (“Quotations by Joseph-Louis Lagrange,” last modified February 2006, accessed February 10, 2015.) Much of the knowledge we do have about Lavoisier’s contributions is due to his wife, Marie-Anne Paulze Lavoisier, who worked with him in his lab. A trained artist fluent in several languages, she created detailed illustrations of the equipment in his lab, and translated texts from foreign scientists to complement his knowledge. After his execution, she was instrumental in publishing Lavoisier’s major treatise, which unified many concepts of chemistry and laid the groundwork for significant further study.

As described in [Section 4.3 Reaction Stoichiometry](/physical-sciences/chemistry/04-stoichiometry-of-chemical-reactions/03-reaction-stoichiometry/), we can turn to chemical stoichiometry for answers to many of the questions that ask “How much?” The essential property involved in such use of stoichiometry is the amount of substance, typically measured in moles ($n$). For gases, molar amount can be derived from convenient experimental measurements of pressure, temperature, and volume. Therefore, these measurements are useful in assessing the stoichiometry of pure gases, gas mixtures, and chemical reactions involving gases. This section will not introduce any new material or ideas, but will provide examples of applications and ways to integrate concepts already discussed.

## Gas Density and Molar Mass

The ideal gas law described in [Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](/physical-sciences/chemistry/09-gases/02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law/) relates the properties of pressure $P$, volume $V$, temperature $T$, and molar amount $n$. This law is universal, relating these properties in identical fashion regardless of the chemical identity of the gas:

$$PV = nRT$$

The density $d$ of a gas, on the other hand, is determined by its identity. As described in [Section 1.3 Physical and Chemical Properties](/physical-sciences/chemistry/01-essential-ideas/03-physical-and-chemical-properties/), the density of a substance is a characteristic property that may be used to identify the substance.

$$d = \frac{m}{V}$$

Rearranging the ideal gas equation to isolate $V$ and substituting into the density equation yields

$$d = \frac{mP}{nRT} = \left(\frac{m}{n}\right)\frac{P}{RT}$$

The ratio $m/n$ is the definition of molar mass, $\mathscr{M}$:

$$\mathscr{M} = \frac{m}{n}$$

The density equation can then be written

$$d = \frac{\mathscr{M}P}{RT}$$

This relation may be used for calculating the densities of gases of known identities at specified values of pressure and temperature as demonstrated in the example below.

**Example.** *Measuring Gas Density.* What is the density of molecular nitrogen gas at STP? (STP is defined in [Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](/physical-sciences/chemistry/09-gases/02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law/).)

**Solution.** The molar mass of molecular nitrogen, N₂, is 28.014 g/mol. Substituting this value along with standard temperature and pressure into the gas density equation yields

$$\begin{aligned} d = \frac{\mathscr{M}P}{RT} &= \frac{(28.014\ \text{g/mol})(1.00\ \text{atm})}{(0.08206\ \text{L atm mol}^{-1}\ \text{K}^{-1})(273.15\ \text{K})} \\[6pt] &= 1.25\ \text{g/L} \end{aligned}$$

*Source note:* the source works this section’s examples with rounded atomic masses, with $R$ = 0.0821 L atm/(mol K) in the first two, and with each Celsius temperature converted to kelvin by adding 273, and it rounds intermediate values before it uses them again. Here they are worked with the masses this book’s periodic table prints (Appendix A), with $R$ = 0.08206 L atm/(mol K), with each temperature converted with 273.15 ([Section 1.6 Mathematical Treatment of Measurement Results](/physical-sciences/chemistry/01-essential-ideas/06-mathematical-treatment-of-measurement-results/)), and with each intermediate value printed with the digits that are carried, so some values differ from the source’s in their last digits: the final results for the partial pressure of neon in the first example of a mixture of gases, the partial pressure of oxygen in the anesthesia example, and the volume of hydrogen in the gallium example, and the intermediate ratio of moles of hydrogen to moles of carbon in the cyclopropane example. The other final results are the same, except the propane example’s, which has its own note.

{{< fillin
  question="What is the density of molecular hydrogen gas at 17.0 °C and a pressure of 760 torr? Enter the density in g/L."
  answer="0.0847"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.0847\ \text{g/L}$"
  hint="Rearrange the ideal gas law to give the density from the molar mass, with the temperature on the kelvin scale and the pressure in the units of a value of $R$."
>}}

When the identity of a gas is unknown, measurements of the mass, pressure, volume, and temperature of a sample can be used to calculate the molar mass of the gas (a useful property for identification purposes). Combining the ideal gas equation

$$PV = nRT$$

and the definition of molar mass

$$\mathscr{M} = \frac{m}{n}$$

yields the following equation:

$$\mathscr{M} = \frac{mRT}{PV}$$

Determining the molar mass of a gas via this approach is demonstrated in the example below.

**Example.** *Determining the Molecular Formula of a Gas from its Molar Mass and Empirical Formula.* Cyclopropane, a gas once used with oxygen as a general anesthetic, is composed of 85.7% carbon and 14.3% hydrogen by mass. Find the empirical formula. If 1.56 g of cyclopropane occupies a volume of 1.00 L at 0.984 atm and 50 °C, what is the molecular formula for cyclopropane?

**Solution.** First determine the empirical formula of the gas. Assume 100 g and convert the percentage of each element into grams. Determine the number of moles of carbon and hydrogen in the 100-g sample of cyclopropane. Divide by the smallest number of moles to relate the number of moles of carbon to the number of moles of hydrogen. In the last step, realize that the smallest whole number ratio is the empirical formula:

$$\begin{aligned} 85.7\ \text{g C} \times \frac{1\ \text{mol C}}{12.011\ \text{g C}} &= 7.135\ \text{mol C} \\[6pt] \frac{7.135}{7.135} &= 1.00\ \text{mol C} \end{aligned}$$

$$\begin{aligned} 14.3\ \text{g H} \times \frac{1\ \text{mol H}}{1.0080\ \text{g H}} &= 14.187\ \text{mol H} \\[6pt] \frac{14.187}{7.135} &= 1.99\ \text{mol H} \end{aligned}$$

Empirical formula is CH₂ [empirical mass (EM) of 14.027 g/empirical unit].

Next, use the provided values for mass, pressure, temperature and volume to compute the molar mass of the gas:

$$\begin{aligned} \mathscr{M} = \frac{mRT}{PV} &= \frac{(1.56\ \text{g})(0.08206\ \text{L atm mol}^{-1}\ \text{K}^{-1})(323.15\ \text{K})}{(0.984\ \text{atm})(1.00\ \text{L})} \\[6pt] &= 42.0\ \text{g/mol} \end{aligned}$$

Comparing the molar mass to the empirical formula mass shows how many empirical formula units make up a molecule:

$$\frac{\mathscr{M}}{\text{EM}} = \frac{42.040\ \text{g/mol}}{14.027\ \text{g/mol}} = 3$$

The molecular formula is thus derived from the empirical formula by multiplying each of its subscripts by three:

$$(\ce{CH2})_3 = \ce{C3H6}$$

{{< textin
  question="Acetylene, a fuel used in welding torches, is composed of 92.3% C and 7.7% H by mass. Find the empirical formula. If 1.10 g of acetylene occupies a volume of 1.00 L at 1.15 atm and 59.5 °C, what is the molecular formula for acetylene? Enter the empirical formula."
  answer="CH"
  answerForm="formula"
  hint="Convert each percentage to moles of atoms in 100 g, then find the simplest whole-number ratio."
>}}

{{< textin
  question="Acetylene, a fuel used in welding torches, is composed of 92.3% C and 7.7% H by mass. Find the empirical formula. If 1.10 g of acetylene occupies a volume of 1.00 L at 1.15 atm and 59.5 °C, what is the molecular formula for acetylene? Enter the molecular formula."
  answer="C₂H₂"
  answerForm="formula"
  hint="Find the molar mass from the ideal gas law, then divide it by the mass of one empirical-formula unit."
>}}

**Example.** *Determining the Molar Mass of a Volatile Liquid.* The approximate molar mass of a volatile liquid can be determined by:

1. Heating a sample of the liquid in a flask with a tiny hole at the top, which converts the liquid into gas that may escape through the hole
2. Removing the flask from heat at the instant when the last bit of liquid becomes gas, at which time the flask will be filled with only gaseous sample at ambient pressure
3. Sealing the flask and permitting the gaseous sample to condense to liquid, and then weighing the flask to determine the sample’s mass (shown in the figure below)

{{< mediafigure src="chemistry/CNX_Chem_09_03_liquidgas" kind="photo" eager="true" alt="Four photographs joined left to right by gray arrows. First, a round-bottomed flask with its mouth capped by aluminum foil sits on the pan of a digital balance. Second, a syringe with a green-hubbed needle pierces the foil over the mouth of the flask. Third, the capped flask, held by a clamp on a stand, is immersed in a beaker of water on a hot plate whose red display reads 100. Fourth, the capped flask sits on the balance again." >}}
When the volatile liquid in the flask is heated past its boiling point, it becomes gas and drives air out of the flask. At $t_{l \longrightarrow g}$, the flask is filled with volatile liquid gas at the same pressure as the atmosphere. If the flask is then cooled to room temperature, the gas condenses and the mass of the gas that filled the flask, and is now liquid, can be measured. (credit: modification of work by Mark Ott)
{{< /mediafigure >}}

Using this procedure, a sample of chloroform gas weighing 0.494 g is collected in a flask with a volume of 129 cm³ at 99.6 °C when the atmospheric pressure is 742.1 mm Hg. What is the approximate molar mass of chloroform?

**Solution.** Since $\mathscr{M} = \frac{m}{n}$ and $n = \frac{PV}{RT}$, substituting and rearranging gives $\mathscr{M} = \frac{mRT}{PV}$,

then

$$\begin{aligned} \mathscr{M} &= \frac{mRT}{PV} \\[6pt] &= \frac{0.494\ \text{g} \times 0.08206\ \text{L atm mol}^{-1}\ \text{K}^{-1} \times 372.75\ \text{K}}{0.97645\ \text{atm} \times 0.129\ \text{L}} \\[6pt] &= 120\ \text{g/mol} \end{aligned}$$

{{< fillin
  question="A sample of phosphorus that weighs 0.03243 g exerts a pressure of 31.89 kPa in a 56.0-mL bulb at 550 °C. What are the molar mass and molecular formula of phosphorus vapor? Enter the molar mass in g/mol."
  answer="124"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$124\ \text{g/mol}$"
  hint="Find the moles of vapor with the ideal gas law and the value of $R$ in kPa L/(mol K) from Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law, each quantity in that value’s units, then divide the mass by the moles."
>}}

{{< textin
  question="A sample of phosphorus that weighs 0.03243 g exerts a pressure of 31.89 kPa in a 56.0-mL bulb at 550 °C. What are the molar mass and molecular formula of phosphorus vapor? Enter the molecular formula."
  answer="P₄"
  answerForm="formula"
  hint="Compare the molar mass of the vapor with the atomic mass of phosphorus in the periodic table."
>}}

## The Pressure of a Mixture of Gases: Dalton’s Law

Unless they chemically react with each other, the individual gases in a mixture of gases do not affect each other’s pressure. Each individual gas in a mixture exerts the same pressure that it would exert if it were present alone in the container (shown in the figure below). The pressure exerted by each individual gas in a mixture is called its **partial pressure**. This observation is summarized by **Dalton’s law of partial pressures**: *The total pressure of a mixture of ideal gases is equal to the sum of the partial pressures of the component gases*:

$$P_\text{Total} = P_\text{A} + P_\text{B} + P_\text{C} + \dots = \sum_i P_i$$

In the equation $P_\text{Total}$ is the total pressure of a mixture of gases, $P_\text{A}$ is the partial pressure of gas A; $P_\text{B}$ is the partial pressure of gas B; $P_\text{C}$ is the partial pressure of gas C; and so on.

{{< mediafigure src="chemistry/CNX_Chem_09_03_DaltonLaw1-f981" kind="diagram" alt="Four gas cylinders, each with a valve on top. The first is shaded blue, holds scattered blue dots, and is labeled 300 kPa. The second is shaded purple, holds scattered purple dots, and is labeled 600 kPa. The third is shaded yellow, holds scattered yellow dots, and is labeled 450 kPa. An arrow labeled Total pressure combined points from these to a fourth cylinder, shaded pale green, which holds blue, purple, and yellow dots together and is labeled 1350 kPa." >}}
If equal-volume cylinders containing gases at pressures of 300 kPa, 450 kPa, and 600 kPa are all combined in the same-size cylinder, the total pressure of the gas mixture is 1350 kPa.
{{< /mediafigure >}}

The partial pressure of gas A is related to the total pressure of the gas mixture via its **mole fraction ($X$)**, a unit of concentration defined as the number of moles of a component of a solution divided by the total number of moles of all components:

$$P_\text{A} = X_\text{A} \times P_\text{Total} \qquad \text{where} \qquad X_\text{A} = \frac{n_\text{A}}{n_\text{Total}}$$

where $P_\text{A}$, $X_\text{A}$, and $n_\text{A}$ are the partial pressure, mole fraction, and number of moles of gas A, respectively, and $n_\text{Total}$ is the number of moles of all components in the mixture.

**Example.** *The Pressure of a Mixture of Gases.* A 10.0-L vessel contains $2.50 \times 10^{-3}$ mol of H₂, $1.00 \times 10^{-3}$ mol of He, and $3.00 \times 10^{-4}$ mol of Ne at 35 °C.

(a) What are the partial pressures of each of the gases?

(b) What is the total pressure in atmospheres?

**Solution.** The gases behave independently, so the partial pressure of each gas can be determined from the ideal gas equation, using $P = \frac{nRT}{V}$:

$$\begin{aligned} P_{\ce{H2}} &= \frac{(2.50 \times 10^{-3}\ \cancel{\text{mol}})(0.08206\ \cancel{\text{L}}\ \text{atm}\ \cancel{\text{mol}^{-1}\ \text{K}^{-1}})(308.15\ \cancel{\text{K}})}{10.0\ \cancel{\text{L}}} \\[6pt] &= 6.32 \times 10^{-3}\ \text{atm} \end{aligned}$$

$$\begin{aligned} P_{\ce{He}} &= \frac{(1.00 \times 10^{-3}\ \cancel{\text{mol}})(0.08206\ \cancel{\text{L}}\ \text{atm}\ \cancel{\text{mol}^{-1}\ \text{K}^{-1}})(308.15\ \cancel{\text{K}})}{10.0\ \cancel{\text{L}}} \\[6pt] &= 2.53 \times 10^{-3}\ \text{atm} \end{aligned}$$

$$\begin{aligned} P_{\ce{Ne}} &= \frac{(3.00 \times 10^{-4}\ \cancel{\text{mol}})(0.08206\ \cancel{\text{L}}\ \text{atm}\ \cancel{\text{mol}^{-1}\ \text{K}^{-1}})(308.15\ \cancel{\text{K}})}{10.0\ \cancel{\text{L}}} \\[6pt] &= 7.59 \times 10^{-4}\ \text{atm} \end{aligned}$$

The total pressure is given by the sum of the partial pressures:

$$\begin{aligned} P_\text{T} &= P_{\ce{H2}} + P_{\ce{He}} + P_{\ce{Ne}} \\[6pt] &= (0.0063217 + 0.0025287 + 0.00075860)\ \text{atm} \\[6pt] &= 9.61 \times 10^{-3}\ \text{atm} \end{aligned}$$

{{< fillin
  question="A 5.73-L flask at 25 °C contains 0.0388 mol of N₂, 0.147 mol of CO, and 0.0803 mol of H₂. What is the total pressure in the flask in atmospheres?"
  answer="1.14"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$1.14\ \text{atm}$"
  hint="Use Dalton’s law of partial pressures with the ideal gas law, and the temperature on the kelvin scale."
>}}

*Source note:* the answer graded for this exercise is written to the number of significant figures its data give, which is not the number the source prints.

Here is another example of this concept, but dealing with mole fraction calculations.

**Example.** *The Pressure of a Mixture of Gases.* A gas mixture used for anesthesia contains 2.83 mol oxygen, O₂, and 8.41 mol nitrous oxide, N₂O. The total pressure of the mixture is 192 kPa.

(a) What are the mole fractions of O₂ and N₂O?

(b) What are the partial pressures of O₂ and N₂O?

**Solution.** The mole fraction is given by $X_\text{A} = \frac{n_\text{A}}{n_\text{Total}}$ and the partial pressure is $P_\text{A} = X_\text{A} \times P_\text{Total}$.

For O₂,

$$X_{\ce{O2}} = \frac{n_{\ce{O2}}}{n_\text{Total}} = \frac{2.83\ \text{mol}}{(2.83 + 8.41)\ \text{mol}} = 0.252$$

and $P_{\ce{O2}} = X_{\ce{O2}} \times P_\text{Total} = 0.25178 \times 192\ \text{kPa} = 48.3\ \text{kPa}$

For N₂O,

$$X_{\ce{N2O}} = \frac{n_{\ce{N2O}}}{n_\text{Total}} = \frac{8.41\ \text{mol}}{(2.83 + 8.41)\ \text{mol}} = 0.748$$

and

$$P_{\ce{N2O}} = X_{\ce{N2O}} \times P_\text{Total} = 0.74822 \times 192\ \text{kPa} = 144\ \text{kPa}$$

{{< fillin
  question="What is the pressure of a mixture of 0.200 g of H₂, 1.00 g of N₂, and 0.820 g of Ar in a container with a volume of 2.00 L at 20 °C? Enter the pressure in atmospheres."
  answer="1.87"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$1.87\ \text{atm}$"
  hint="Convert each mass to moles with a molar mass computed from its formula, then use the ideal gas law with the total amount and the temperature on the kelvin scale."
>}}

## Collection of Gases over Water

A simple way to collect gases that do not react with water is to capture them in a bottle that has been filled with water and inverted into a dish filled with water. The pressure of the gas inside the bottle can be made equal to the air pressure outside by raising or lowering the bottle. When the water level is the same both inside and outside the bottle (shown in the figure below), the pressure of the gas is equal to the atmospheric pressure, which can be measured with a barometer.

{{< mediafigure src="chemistry/CNX_Chem_09_03_WaterVapor" kind="diagram" alt="An Erlenmeyer flask, partly filled with a bubbling lavender liquid and labeled Reaction producing gas, is closed by a brown stopper. A glass tube runs from the space above the liquid up through the stopper, across, and down into a dish of water labeled Water, then bends up into the mouth of an inverted flask labeled Collection flask, whose mouth is under the water’s surface. Bubbles rise into the inverted flask, which holds water in its lower part, and a label, Collected gas, points into it." >}}
When a reaction produces a gas that is collected above water, the trapped gas is a mixture of the gas produced by the reaction and water vapor. If the collection flask is appropriately positioned to equalize the water levels both within and outside the flask, the pressure of the trapped gas mixture will equal the atmospheric pressure outside the flask (see the earlier discussion of manometers in [Section 9.1 Gas Pressure](/physical-sciences/chemistry/09-gases/01-gas-pressure/)).
{{< /mediafigure >}}

However, there is another factor we must consider when we measure the pressure of the gas by this method. Water evaporates and there is always gaseous water (water vapor) above a sample of liquid water. As a gas is collected over water, it becomes saturated with water vapor and the total pressure of the mixture equals the partial pressure of the gas plus the partial pressure of the water vapor. The pressure of the pure gas is therefore equal to the total pressure minus the pressure of the water vapor—this is referred to as the “dry” gas pressure, that is, the pressure of the gas only, without water vapor. The **vapor pressure of water**, which is the pressure exerted by water vapor in equilibrium with liquid water in a closed container, depends on the temperature (shown in the figure below); more detailed information on the temperature dependence of water vapor can be found in the table of vapor pressures of ice and water below, and vapor pressure will be discussed in more detail in the next chapter on liquids.

{{< mediafigure src="chemistry/CNX_Chem_09_03_WaterVapor2" kind="diagram" alt="A graph of Vapor pressure (torr), from 0 to 800, against Temperature (°C), from 0 to 100, on a grid with lines every 10 °C and every 100 torr. A curve starts near zero at 0 °C, rises slowly and then ever more steeply, and ends short of the 100 °C gridline, between the 700 and 800 torr gridlines, level with the arrow’s label. On the vertical axis, (760) is printed just below 800, with an arrow labeled Vapor pressure at (100 °C) pointing to it." >}}
This graph shows the vapor pressure of water at sea level as a function of temperature.
{{< /mediafigure >}}

**Vapor Pressure of Ice and Water in Various Temperatures at Sea Level**

| Temperature (°C) | Pressure (torr) | Temperature (°C) | Pressure (torr) | Temperature (°C) | Pressure (torr) |
|---|---|---|---|---|---|
| −10 | 1.95 | 18 | 15.5 | 30 | 31.8 |
| −5 | 3.0 | 19 | 16.5 | 35 | 42.2 |
| −2 | 3.9 | 20 | 17.5 | 40 | 55.3 |
| 0 | 4.6 | 21 | 18.7 | 50 | 92.5 |
| 2 | 5.3 | 22 | 19.8 | 60 | 149.4 |
| 4 | 6.1 | 23 | 21.1 | 70 | 233.7 |
| 6 | 7.0 | 24 | 22.4 | 80 | 355.1 |
| 8 | 8.0 | 25 | 23.8 | 90 | 525.8 |
| 10 | 9.2 | 26 | 25.2 | 95 | 633.9 |
| 12 | 10.5 | 27 | 26.7 | 99 | 733.2 |
| 14 | 12.0 | 28 | 28.3 | 100.0 | 760.0 |
| 16 | 13.6 | 29 | 30.0 | 101.0 | 787.6 |

**Example.** *Pressure of a Gas Collected Over Water.* If 0.200 L of argon is collected over water at a temperature of 26 °C and a pressure of 750 torr in a system like that shown in the figure of a gas collected over water above, what is the partial pressure of argon?

**Solution.** According to Dalton’s law, the total pressure in the bottle (750 torr) is the sum of the partial pressure of argon and the partial pressure of gaseous water:

$$P_\text{T} = P_{\ce{Ar}} + P_{\ce{H2O}}$$

Rearranging this equation to solve for the pressure of argon gives:

$$P_{\ce{Ar}} = P_\text{T} - P_{\ce{H2O}}$$

The pressure of water vapor above a sample of liquid water at 26 °C is 25.2 torr (the table of vapor pressures of ice and water above), so:

$$P_{\ce{Ar}} = 750\ \text{torr} - 25.2\ \text{torr} = 725\ \text{torr}$$

{{< fillin
  question="A sample of oxygen collected over water at a temperature of 29.0 °C and a pressure of 764 torr has a volume of 0.560 L. What volume would the dry oxygen from this sample have under the same conditions of temperature and pressure? Enter the volume in liters."
  answer="0.538"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.538\ \text{L}$"
  hint="Use Dalton’s law with the vapor pressure of water from the table of vapor pressures of ice and water above, then Boyle’s law."
>}}

*Source note:* the answer graded for this exercise is not the one the source prints; the source’s value does not follow from the stem’s data and the table’s vapor pressure.

## Chemical Stoichiometry and Gases

Chemical stoichiometry describes the quantitative relationships between reactants and products in chemical reactions.

We have previously measured quantities of reactants and products using masses for solids and volumes in conjunction with the molarity for solutions; now we can also use gas volumes to indicate quantities. If we know the volume, pressure, and temperature of a gas, we can use the ideal gas equation to calculate how many moles of the gas are present. If we know how many moles of a gas are involved, we can calculate the volume of a gas at any temperature and pressure.

## Avogadro’s Law Revisited

Sometimes we can take advantage of a simplifying feature of the stoichiometry of gases that solids and solutions do not exhibit: All gases that show ideal behavior contain the same number of molecules in the same volume (at the same temperature and pressure). Thus, the ratios of volumes of gases involved in a chemical reaction are given by the coefficients in the equation for the reaction, provided that the gas volumes are measured at the same temperature and pressure.

We can extend Avogadro’s law (that the volume of a gas is directly proportional to the number of moles of the gas) to chemical reactions with gases: Gases combine, or react, in definite and simple proportions by volume, provided that all gas volumes are measured at the same temperature and pressure. For example, since nitrogen and hydrogen gases react to produce ammonia gas according to $\ce{N2(g) + 3H2(g) -> 2NH3(g)}$, a given volume of nitrogen gas reacts with three times that volume of hydrogen gas to produce two times that volume of ammonia gas, if pressure and temperature remain constant.

The explanation for this is illustrated in the figure below. According to Avogadro’s law, equal volumes of gaseous N₂, H₂, and NH₃, at the same temperature and pressure, contain the same number of molecules. Because one molecule of N₂ reacts with three molecules of H₂ to produce two molecules of NH₃, the volume of H₂ required is three times the volume of N₂, and the volume of NH₃ produced is two times the volume of N₂.

{{< mediafigure src="chemistry/CNX_Chem_09_03_Ammonia" kind="diagram" alt="Top row: a blue balloon holding one molecule of two joined blue spheres, a plus sign, three gray balloons each holding one molecule of two joined white spheres, an arrow, and two yellow balloons each holding one molecule of a blue sphere joined to three white spheres. The balloons carry no labels. Bottom row: the same molecules without balloons, above the labels N₂, plus, 3H₂, an arrow, and 2NH₃." >}}
One volume of N₂ combines with three volumes of H₂ to form two volumes of NH₃.
{{< /mediafigure >}}

**Example.** *Reaction of Gases.* Propane, C₃H₈(*g*), is used in gas grills to provide the heat for cooking. What volume of O₂(*g*) measured at 25 °C and 760 torr is required to react with 2.7 L of propane measured under the same conditions of temperature and pressure? Assume that the propane undergoes complete combustion.

**Solution.** The ratio of the volumes of C₃H₈ and O₂ will be equal to the ratio of their coefficients in the balanced equation for the reaction:

$$\begin{array}{ccccccc} \ce{C3H8(g)} & + & \ce{5O2(g)} & \ce{->} & \ce{3CO2(g)} & + & \ce{4H2O(l)} \\ \text{1 volume} & + & \text{5 volumes} & \ce{->} & \text{3 volumes} & & \end{array}$$

*Source note:* the source prints “4 volumes” under the liquid water; the volume ratios hold only for the gases.

From the equation, we see that one volume of C₃H₈ will react with five volumes of O₂:

$$2.7\ \cancel{\text{L}\ \ce{C3H8}} \times \frac{5\ \text{L}\ \ce{O2}}{1\ \cancel{\text{L}\ \ce{C3H8}}} = 14\ \text{L}\ \ce{O2}$$

A volume of 14 L of O₂ will be required to react with 2.7 L of C₃H₈.

*Source note:* the source prints 13.5 L here, three figures from a volume given to two.

{{< fillin
  question="An acetylene tank for an oxyacetylene welding torch provides 9340 L of acetylene gas, C₂H₂, at 0 °C and 1 atm. How many tanks of oxygen, each providing $7.00 \times 10^{3}$ L of O₂ at 0 °C and 1 atm, will be required to burn the acetylene? $\ce{2C2H2 + 5O2 -> 4CO2 + 2H2O}$. Enter the number of tanks as a decimal, not rounded up to a whole tank."
  answer="3.34"
  answerForm="sig-figs:3 last-digit:0 decimal"
  answerDisplay="$3.34\ \text{tanks}$"
  hint="Gases at the same temperature and pressure react in the volume ratio of their coefficients."
>}}

**Example.** *Volumes of Reacting Gases.* Ammonia is an important fertilizer and industrial chemical. Suppose that a volume of 683 billion cubic feet of gaseous ammonia, measured at 25 °C and 1 atm, was manufactured. What volume of H₂(*g*), measured under the same conditions, was required to prepare this amount of ammonia by reaction with N₂?

$$\ce{N2(g) + 3H2(g) -> 2NH3(g)}$$

**Solution.** Because equal volumes of H₂ and NH₃ contain equal numbers of molecules and each three molecules of H₂ that react produce two molecules of NH₃, the ratio of the volumes of H₂ and NH₃ will be equal to 3:2. Two volumes of NH₃, in this case in units of billion ft³, will be formed from three volumes of H₂:

$$\begin{aligned} &683\ \cancel{\text{billion ft}^{3}\ \ce{NH3}} \times \frac{3\ \text{billion ft}^{3}\ \ce{H2}}{2\ \cancel{\text{billion ft}^{3}\ \ce{NH3}}} \\[6pt] &= 1.02 \times 10^{3}\ \text{billion ft}^{3}\ \ce{H2} \end{aligned}$$

The manufacture of 683 billion ft³ of NH₃ required 1020 billion ft³ of H₂. (At 25 °C and 1 atm, this is the volume of a cube with an edge length of approximately 1.9 miles.)

{{< fillin
  question="What volume of O₂(*g*) measured at 25 °C and 760 torr is required to react with 17.0 L of ethylene, C₂H₄(*g*), measured under the same conditions of temperature and pressure? The products are CO₂ and water vapor. Enter the volume in liters."
  answer="51.0"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$51.0\ \text{L}$"
  hint="Write the balanced equation for the combustion; gases at the same temperature and pressure react in the volume ratio of their coefficients."
>}}

**Example.** *Volume of Gaseous Product.* What volume of hydrogen at 27 °C and 723 torr may be prepared by the reaction of 8.88 g of gallium with an excess of hydrochloric acid?

$$\ce{2Ga(s) + 6HCl(aq) -> 2GaCl3(aq) + 3H2(g)}$$

**Solution.** Convert the provided mass of the limiting reactant, Ga, to moles of hydrogen produced:

$$\begin{aligned} &8.88\ \cancel{\text{g Ga}} \times \frac{1\ \cancel{\text{mol Ga}}}{69.723\ \cancel{\text{g Ga}}} \times \frac{3\ \text{mol}\ \ce{H2}}{2\ \cancel{\text{mol Ga}}} \\[6pt] &= 0.19104\ \text{mol}\ \ce{H2} \end{aligned}$$

Convert the provided temperature and pressure values to appropriate units (K and atm, respectively), and then use the molar amount of hydrogen gas and the ideal gas equation to calculate the volume of gas:

$$\begin{aligned} V &= \left(\frac{nRT}{P}\right) \\[6pt] &= \frac{0.19104\ \cancel{\text{mol}} \times 0.08206\ \text{L}\ \cancel{\text{atm mol}^{-1}\ \text{K}^{-1}} \times 300.15\ \cancel{\text{K}}}{0.95132\ \cancel{\text{atm}}} \\[6pt] &= 4.95\ \text{L} \end{aligned}$$

{{< fillin
  question="Sulfur dioxide is an intermediate in the preparation of sulfuric acid. What volume of SO₂ at 343 °C and 1.21 atm is produced by burning 1.00 kg of sulfur in excess oxygen? Enter the volume in liters."
  answer="1.30\times10^{3}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$1.30 \times 10^{3}\ \text{L}$"
  hint="Write the balanced equation for burning sulfur, convert the mass of sulfur to moles with the atomic mass from the periodic table, then use the ideal gas law with the temperature on the kelvin scale."
>}}

{{< callout type="info" >}}
**How Sciences Interconnect.** *Greenhouse Gases and Climate Change.*

The thin skin of our atmosphere keeps the earth from being an ice planet and makes it habitable. In fact, this is due to less than 0.5% of the air molecules. Of the energy from the sun that reaches the earth, almost $\frac{1}{3}$ is reflected back into space, with the rest absorbed by the atmosphere and the surface of the earth. Some of the energy that the earth absorbs is re-emitted as infrared (IR) radiation, a portion of which passes back out through the atmosphere into space. Most of this IR radiation, however, is absorbed by certain atmospheric gases, effectively trapping heat within the atmosphere in a phenomenon known as the *greenhouse effect*. This effect maintains global temperatures within the range needed to sustain life on earth. Without our atmosphere, the earth’s average temperature would be lower by more than 30 °C (nearly 60 °F). The major greenhouse gases (GHGs) are water vapor, carbon dioxide, methane, and ozone. Since the Industrial Revolution, human activity has been increasing the concentrations of GHGs, which have changed the energy balance and are significantly altering the earth’s climate (shown in the figure below).

{{< mediafigure src="chemistry/CNX_Chem_09_03_GlobalWarming-b740" kind="diagram" alt="Part of the earth, blue ocean and green land, at the left, inside a faint gray arc labeled Atmosphere. The formulas CO₂, CH₄, O₃, and N₂O are printed in the band between the earth and the arc. A yellow sun at the right, labeled Sun, sends four wavy yellow arrows toward the earth: three reach its surface, and the fourth turns back at the arc and heads away. Five wavy red arrows, two near the top and three near the bottom, run outward from the earth’s surface; a label, Infrared radiation, points to the upper ones." >}}
Greenhouse gases trap enough of the sun’s energy to make the planet habitable—this is known as the greenhouse effect. Human activities are increasing greenhouse gas levels, warming the planet and causing more extreme weather events.
{{< /mediafigure >}}

There is strong evidence from multiple sources that higher atmospheric levels of CO₂ are caused by human activity, with fossil fuel burning accounting for about $\frac{3}{4}$ of the recent increase in CO₂. Reliable data from ice cores reveals that CO₂ concentration in the atmosphere is at the highest level in the past 800,000 years; other evidence indicates that it may be at its highest level in 20 million years. In recent years, the CO₂ concentration has increased from preindustrial levels of ~280 ppm to more than 400 ppm today (shown in the figure below).

{{< mediafigure src="chemistry/CNX_Chem_09_03_GlobalWarming2" kind="diagram" alt="Two graphs under the title Carbon Dioxide in the Atmosphere. The left one plots carbon dioxide concentration (ppm) against year (BC), from 700,000 to 0: a jagged line swings between about 180 and 300 ppm and jumps up at its right-hand end. Lines connect that end to the right graph, which plots carbon dioxide concentration (ppmv), 320 to 400, against year, 1960 to 2010: a black line rises steadily through a red sawtooth band, from about 315 ppmv to about 395 ppmv." longdesc="Left graph: the vertical axis, Carbon dioxide concentration (ppm), is marked every 50 from 0 to 400 with a horizontal gridline at each mark; the horizontal axis, Year (BC), is marked every 100,000 from 700,000 at the left to 0 at the right. A thick, jagged black line begins a little before 600,000 at about 190 ppm and rises and falls in several cycles, its peaks between about 250 and 300 ppm and its lows near 180 to 200 ppm. At the right-hand end, near 0, it rises steeply to nearly 380 ppm. Right graph, an enlargement of that end: the vertical axis, Carbon dioxide concentration (ppmv), is marked every 20 from 320 to 400; the horizontal axis is marked every 10 years from 1960 to 2010. A red band zigzags up and down each year around a smooth black line that climbs from about 315 ppmv just before 1960 to about 395 ppmv a little after 2010, curving slightly upward." >}}
CO₂ levels over the past 700,000 years were typically from 200–300 ppm, with a steep, unprecedented increase over the past 50 years.
{{< /mediafigure >}}
{{< /callout >}}

{{< callout type="info" >}}
**Link to Learning**

Click [here to see a 2-minute video explaining greenhouse gases and global warming](http://openstax.org/l/16GlobalWarming).
{{< /callout >}}

{{< callout type="info" >}}
**Portrait of a Chemist.** *Susan Solomon.*

Atmospheric and climate scientist Susan Solomon (shown in the photograph below) is the author of one of *The New York Times* books of the year (*The Coldest March*, 2001), one of Time magazine’s 100 most influential people in the world (2008), and a working group leader of the Intergovernmental Panel on Climate Change (IPCC), which was the recipient of the 2007 Nobel Peace Prize. She helped determine and explain the cause of the formation of the ozone hole over Antarctica, and has authored many important papers on climate change. She has been awarded the top scientific honors in the US and France (the National Medal of Science and the Grande Medaille, respectively), and is a member of the National Academy of Sciences, the Royal Society, the French Academy of Sciences, and the European Academy of Sciences. Formerly a professor at the University of Colorado, she is now at MIT, and continues to work at NOAA.

*Source note:* MIT’s Department of Earth, Atmospheric and Planetary Sciences [says](https://eaps.mit.edu/people/susan-solomon/) that before coming to MIT in 2012 she was a scientist at NOAA in Boulder, Colorado, and an adjunct professor at the University of Colorado from 1982 to 2011.

For more information, watch this [video about Susan Solomon](http://openstax.org/l/16SusanSolomon).

{{< mediafigure src="chemistry/CNX_Chem_09_03_SusanSolom" kind="photo" alt="A smiling woman with dark curly hair, in a dark jacket over a pale blue sweater, sits with her hands folded on a desk beside a large globe on a gold-colored stand, with shelves of books behind her." >}}
Susan Solomon’s research focuses on climate change and has been instrumental in determining the cause of the ozone hole over Antarctica. (credit: National Oceanic and Atmospheric Administration)
{{< /mediafigure >}}
{{< /callout >}}

## Summary

- The ideal gas law can be used to derive a number of convenient equations relating directly measured quantities to properties of interest for gaseous substances and mixtures. Appropriate rearrangement of the ideal gas equation may be made to permit the calculation of gas densities and molar masses. Dalton’s law of partial pressures may be used to relate measured gas pressures for gaseous mixtures to their compositions. Avogadro’s law may be used in stoichiometric computations for chemical reactions involving gaseous reactants or products.

## Key equations

- $P_\text{Total} = P_\text{A} + P_\text{B} + P_\text{C} + \dots = \sum_i P_i$
- $P_\text{A} = X_\text{A} \times P_\text{Total}$
- $X_\text{A} = \frac{n_\text{A}}{n_\text{Total}}$

## Key terms

- **Dalton’s law of partial pressures** — total pressure of a mixture of ideal gases is equal to the sum of the partial pressures of the component gases.
- **mole fraction ($X$)** — concentration unit defined as the ratio of the molar amount of a mixture component to the total number of moles of all mixture components.
- **partial pressure** — pressure exerted by an individual gas in a mixture.
- **vapor pressure of water** — pressure exerted by water vapor in equilibrium with liquid water in a closed container at a specific temperature.

## Practice

### Use the ideal gas law to compute gas densities and molar masses

{{< fillin
  question="Calculate the density of Freon 12, CF₂Cl₂, at 30.0 °C and 0.954 atm. Enter the density in g/L."
  answer="4.64"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$4.64\ \text{g/L}$"
  hint="Rearrange the ideal gas law to give the density from the molar mass, with a molar mass computed from the formula and the temperature on the kelvin scale."
>}}

{{< fillin
  question="A cylinder of O₂(*g*) used in breathing by patients with emphysema has a volume of 3.00 L at a pressure of 10.0 atm. If the temperature of the cylinder is 28.0 °C, what mass of oxygen is in the cylinder? Enter the mass in grams."
  answer="38.8"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$38.8\ \text{g}$"
  hint="Find the moles of O₂ with the ideal gas law, with the temperature on the kelvin scale, then convert moles to grams with a molar mass computed from the formula."
>}}

{{< fillin
  question="What is the molar mass of a gas if 0.281 g of the gas occupies a volume of 125 mL at a temperature 126 °C and a pressure of 777 torr? Enter the molar mass in g/mol."
  answer="72.0"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$72.0\ \text{g/mol}$"
  hint="Use the equation for the molar mass from the ideal gas law, with each quantity in the units of a value of $R$."
>}}

{{< fillin
  question="The density of a certain gaseous fluoride of phosphorus is 3.93 g/L at STP. (STP is defined in [Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](/physical-sciences/chemistry/09-gases/02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law/).) Calculate the molar mass of this fluoride and determine its molecular formula. Enter the molar mass in g/mol."
  answer="88.1"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$88.1\ \text{g/mol}$"
  hint="Rearrange the ideal gas law to give the molar mass from the density, with the temperature and pressure of STP."
>}}

{{< textin
  question="The density of a certain gaseous fluoride of phosphorus is 3.93 g/L at STP. Calculate the molar mass of this fluoride and determine its molecular formula. Enter the molecular formula."
  answer="PF₃"
  answerForm="formula"
  hint="Compare the molar mass with the molar masses of the possible formulas with one phosphorus atom, computed from the periodic table."
>}}

### Perform stoichiometric calculations involving gaseous substances

{{< selfcheck question="Joseph Priestley first prepared pure oxygen by heating mercuric oxide, HgO: $\ce{2HgO(s) -> 2Hg(l) + O2(g)}$. Outline the steps necessary to answer the following question: What volume of O₂ at 23 °C and 0.975 atm is produced by the decomposition of 5.36 g of HgO?" hint="Trace the path from the mass of the reactant to the volume of the gaseous product." >}}
Determine the moles of HgO that decompose; using the chemical equation, determine the moles of O₂ produced by decomposition of this amount of HgO; and determine the volume of O₂ from the moles of O₂, temperature, and pressure.
===CHECKS===
determine the moles of HgO that decompose
using the chemical equation, determine the moles of O₂ produced by decomposition of this amount of HgO
determine the volume of O₂ from the moles of O₂, temperature, and pressure
{{< /selfcheck >}}

{{< fillin
  question="Joseph Priestley first prepared pure oxygen by heating mercuric oxide, HgO: $\ce{2HgO(s) -> 2Hg(l) + O2(g)}$. Outline the steps necessary to answer the following question: What volume of O₂ at 23 °C and 0.975 atm is produced by the decomposition of 5.36 g of HgO? Answer the question. Enter the volume in liters."
  answer="0.308"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$0.308\ \text{L}$"
  hint="Convert the mass of HgO to moles with a molar mass computed from the formula, use the equation’s mole ratio, then the ideal gas law."
>}}

{{< selfcheck question="The chlorofluorocarbon CCl₂F₂ can be recycled into a different compound by reaction with hydrogen to produce CH₂F₂(*g*), a compound useful in chemical manufacturing: $\ce{CCl2F2(g) + 4H2(g) -> CH2F2(g) + 2HCl(g)}$. Outline the steps necessary to answer the following question: What volume of hydrogen at 225 atm and 35.5 °C would be required to react with 1 ton ($1.000 \times 10^{3}$ kg) of CCl₂F₂?" hint="Trace the path from the mass of the reactant to the volume of the gaseous reactant." >}}
Determine the molar mass of CCl₂F₂. From the balanced equation, calculate the moles of H₂ needed for the complete reaction. From the ideal gas law, convert moles of H₂ into volume.
===CHECKS===
determine the molar mass of CCl₂F₂
from the balanced equation, calculate the moles of H₂ needed for the complete reaction
from the ideal gas law, convert moles of H₂ into volume
{{< /selfcheck >}}

{{< fillin
  question="The chlorofluorocarbon CCl₂F₂ can be recycled into a different compound by reaction with hydrogen to produce CH₂F₂(*g*), a compound useful in chemical manufacturing: $\ce{CCl2F2(g) + 4H2(g) -> CH2F2(g) + 2HCl(g)}$. Outline the steps necessary to answer the following question: What volume of hydrogen at 225 atm and 35.5 °C would be required to react with 1 ton ($1.000 \times 10^{3}$ kg) of CCl₂F₂? Answer the question. Enter the volume in liters."
  answer="3.72\times10^{3}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$3.72 \times 10^{3}\ \text{L}$"
  hint="Convert the mass of CCl₂F₂ to moles with a molar mass computed from the formula, use the equation’s mole ratio, then the ideal gas law."
>}}

{{< selfcheck question="Lime, CaO, is produced by heating calcium carbonate, CaCO₃; carbon dioxide is the other product. Outline the steps necessary to answer the following question: What volume of carbon dioxide at 875 K and 0.966 atm is produced by the decomposition of 1 ton ($1.000 \times 10^{3}$ kg) of calcium carbonate?" hint="Start from the balanced equation, then trace the path from the mass of the reactant to the volume of the gas." >}}
Balance the equation. Determine the grams of CO₂ produced and the number of moles. From the ideal gas law, determine the volume of gas.
===CHECKS===
balance the equation
determine the grams of CO₂ produced and the number of moles
from the ideal gas law, determine the volume of gas
{{< /selfcheck >}}

{{< fillin
  question="Lime, CaO, is produced by heating calcium carbonate, CaCO₃; carbon dioxide is the other product. Outline the steps necessary to answer the following question: What volume of carbon dioxide at 875 K and 0.966 atm is produced by the decomposition of 1 ton ($1.000 \times 10^{3}$ kg) of calcium carbonate? Answer the question. Enter the volume in liters."
  answer="7.43\times10^{5}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$7.43 \times 10^{5}\ \text{L}$"
  hint="Write the balanced equation, convert the mass of CaCO₃ to moles with a molar mass computed from the formula, use the mole ratio, then the ideal gas law."
>}}

{{< fillin
  question="Calculate the volume of oxygen required to burn 12.00 L of ethane gas, C₂H₆, to produce carbon dioxide and water, if the volumes of C₂H₆ and O₂ are measured under the same conditions of temperature and pressure. Enter the volume in liters."
  answer="42.00"
  answerForm="sig-figs:4 last-digit:0"
  answerDisplay="$42.00\ \text{L}$"
  hint="Write the balanced equation for the combustion; gases at the same temperature and pressure react in the volume ratio of their coefficients."
>}}

{{< fillin
  question="Consider the following question: What is the total volume of the CO₂(*g*) and H₂O(*g*) at 600 °C and 0.888 atm produced by the combustion of 1.00 L of C₂H₆(*g*) measured at STP? (STP is defined in [Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](/physical-sciences/chemistry/09-gases/02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law/).) Enter the volume in liters."
  answer="18.0"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$18.0\ \text{L}$"
  hint="Write the balanced equation for the combustion, find the moles of ethane at STP, then the moles of gaseous products and their volume from the ideal gas law."
>}}

{{< fillin
  question="Consider the following question: The combustion of 1.00 L of C₂H₆(*g*) measured at STP produces CO₂(*g*) and H₂O(*g*) at 600 °C and 0.888 atm. (STP is defined in [Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](/physical-sciences/chemistry/09-gases/02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law/).) What is the partial pressure of H₂O in the product gases? Enter the partial pressure in atmospheres."
  answer="0.533"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$0.533\ \text{atm}$"
  hint="Find the mole fraction of water in the product gases from the balanced equation, then use Dalton’s law."
>}}

{{< fillin
  question="What volume of oxygen at 423.0 K and a pressure of 127.4 kPa is produced by the decomposition of 129.7 g of BaO₂ to BaO and O₂? Enter the volume in liters."
  answer="10.57"
  answerForm="sig-figs:4 last-digit:1"
  answerDisplay="$10.57\ \text{L}$"
  hint="Write the balanced equation, convert the mass of BaO₂ to moles of O₂, then use the ideal gas law with the value of $R$ in kPa L/(mol K) from Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law."
>}}

{{< fillin
  question="Ethanol, C₂H₅OH, is produced industrially from ethylene, C₂H₄, by the following sequence of reactions: $\ce{3C2H4 + 2H2SO4 ->}$ $\ce{C2H5HSO4 + (C2H5)2SO4}$; $\ce{C2H5HSO4 + (C2H5)2SO4 + 3H2O ->}$ $\ce{3C2H5OH + 2H2SO4}$. What volume of ethylene at STP is required to produce 1.000 metric ton (1000 kg) of ethanol if the overall yield of ethanol is 90.1%? (STP is defined in [Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](/physical-sciences/chemistry/09-gases/02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law/).) Enter the volume in liters."
  answer="5.40\times10^{5}"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$5.40 \times 10^{5}\ \text{L}$"
  hint="Convert the mass of ethanol to moles with a molar mass computed from the formula, allow for the yield, use the overall mole ratio of the two reactions, then the standard molar volume at STP from Section 9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law."
>}}

{{< textin
  question="A sample of a compound of xenon and fluorine was confined in a bulb with a pressure of 18 torr. Hydrogen was added to the bulb until the pressure was 72 torr. Passage of an electric spark through the mixture produced Xe and HF. After the HF was removed by reaction with solid KOH, the final pressure of xenon and unreacted hydrogen in the bulb was 36 torr. What is the empirical formula of the xenon fluoride in the original sample? (Note: Xenon fluorides contain only one xenon atom per molecule.) Enter the empirical formula."
  answer="XeF₄"
  answerForm="formula"
  hint="At constant volume and temperature, pressures are in the ratio of moles: find how much hydrogen reacted, and from it how much fluorine each xenon atom carried."
>}}

### State Dalton’s law of partial pressures and use it in calculations involving gaseous mixtures

{{< fillin
  question="A 36.0-L cylinder of a gas used for calibration of blood gas analyzers in medical laboratories contains 350 g CO₂, 805 g O₂, and 4,880 g N₂. At 25 °C, what is the pressure in the cylinder in atmospheres?"
  answer="141"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$141\ \text{atm}$"
  hint="Use the ideal gas law with the total amount of gas, each amount from a molar mass computed from its formula."
>}}

{{< fillin
  question="A sample of gas isolated from unrefined petroleum contains 90.0% CH₄, 8.9% C₂H₆, and 1.1% C₃H₈ at a total pressure of 307.2 kPa. What is the partial pressure of each component of this gas? (The percentages given indicate the percent of the total pressure that is due to each component.) Enter the partial pressure of CH₄ in kilopascals."
  answer="276"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$276\ \text{kPa}$"
  hint="Each gas’s partial pressure is its share of the total pressure."
>}}

{{< fillin
  question="A sample of gas isolated from unrefined petroleum contains 90.0% CH₄, 8.9% C₂H₆, and 1.1% C₃H₈ at a total pressure of 307.2 kPa. What is the partial pressure of each component of this gas? (The percentages given indicate the percent of the total pressure that is due to each component.) Enter the partial pressure of C₂H₆ in kilopascals."
  answer="27"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$27\ \text{kPa}$"
  hint="Each gas’s partial pressure is its share of the total pressure."
>}}

{{< fillin
  question="A sample of gas isolated from unrefined petroleum contains 90.0% CH₄, 8.9% C₂H₆, and 1.1% C₃H₈ at a total pressure of 307.2 kPa. What is the partial pressure of each component of this gas? (The percentages given indicate the percent of the total pressure that is due to each component.) Enter the partial pressure of C₃H₈ in kilopascals."
  answer="3.4"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$3.4\ \text{kPa}$"
  hint="Each gas’s partial pressure is its share of the total pressure."
>}}

{{< multiplechoice question="Most mixtures of hydrogen gas with oxygen gas are explosive. However, a mixture that contains less than 3.0 % O₂ is not. If enough O₂ is added to a cylinder of H₂ at 33.2 atm to bring the total pressure to 34.5 atm, is the mixture explosive?" answer="yes" hint="Find the partial pressure of the added O₂, then its share of the total pressure." >}}
yes
no
{{< /multiplechoice >}}

{{< fillin
  question="A sample of carbon monoxide was collected over water at a total pressure of 756 torr and a temperature of 18 °C. What is the pressure of the carbon monoxide? (See the table of vapor pressures of ice and water above for the vapor pressure of water.) Enter the pressure in torr."
  answer="740"
  answerForm="sig-figs:3 last-digit:1"
  answerDisplay="$740\ \text{torr}$"
  hint="Use Dalton’s law of partial pressures with the vapor pressure of water at the stated temperature."
>}}

---

<small>This section is adapted from [Chemistry 2e, Section 9.3: Stoichiometry of Gaseous Substances, Mixtures, and Reactions](https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: the eight figures re-encoded as WebP, the photographs of the flask procedure and of Susan Solomon marked as photos and the other six as diagrams; every figure’s alt text written from the image (among other differences, the source alt of the cylinders figure reads its second and third labels as 450 kPa and 6000 kPa where the figure prints 600 kPa and 450 kPa, the source alt of the ammonia figure writes NH₂ for N₂, labels the balloons, which carry no labels, and calls the product balloons light green where they are yellow, and the source alt of the greenhouse figure writes CH₃ for CH₄ and leaves out O₃), with an extended description added to the carbon dioxide graphs; the How Sciences Interconnect box, the Link to Learning box, and the Portrait of a Chemist box rendered as callouts, each box’s figures inside it, and the two video links’ text extended over the words that describe the video; the footnote on the Lagrange quotation printed as a parenthetical citation after the quotation, its address dropped; references to numbered figures, tables, and examples replaced by describing phrases; the source’s equations typeset as KaTeX math, with unit cancellation set with a diagonal strike, the units of the gas constant written $\text{L atm mol}^{-1}\ \text{K}^{-1}$ in every display where the source writes them three ways, the volume table of the propane example set as an array, with no volume printed under the liquid water, where the source prints “4 volumes”, with a Source note, several long rows broken into aligned rows to fit the column, and the script capital M of molar mass set as math; the quantity symbols the source italicizes set as math; the Key equations written in the body’s form, with the multiplication sign of the partial-pressure equation and the summation sign the body prints; the references to “an earlier chapter” on stoichiometry, “another chapter” on density, the ideal gas law “described previously in this chapter”, and “the earlier discussion of manometers” named as Sections 4.3, 1.3, 9.2, and 9.1 and linked to their pages, and a parenthesis saying that STP is defined in Section 9.2, linked to its page, added to the nitrogen-density example and to the four exercise stems that need the definition; the reference to “the next chapter on liquids” left in plain text; the citation of Appendix E for the vapor pressure of water at 26 °C in the argon example replaced by the section’s own table of vapor pressures, since this book’s Appendix E prints no row for that temperature; “gasses” corrected to “gases” in the caption of the cylinders figure, “occupies of volume” corrected to “occupies a volume” in the acetylene Check Your Learning, “increased preindustrial levels” repaired to “increased from preindustrial levels” in the greenhouse box, the en dash in “36.0–L” printed as a hyphen, and “25 degrees C” written 25 °C in the blood-gas cylinder exercise; the examples worked with the atomic masses of this book’s periodic table, $R$ = 0.08206 L atm/(mol K) where the first two use 0.0821, each temperature converted to kelvin with 273.15 where the source adds 273, and each intermediate value printed with the digits carried, with a Source note, so that the final results for the partial pressure of neon in the first mixture example, the partial pressure of oxygen in the anesthesia example, and the volume of hydrogen in the gallium example, and the cyclopropane example’s intermediate ratio of moles of hydrogen to moles of carbon, differ from the source’s in their last digits and the other final results, but for the propane example’s, are the same; the propane example’s result written to the two significant figures of its given volume, with a Source note; the kelvin unit of the gallium example’s temperature struck through as the source strikes the kelvin of the gas constant; a Source note after the Susan Solomon paragraph giving her earlier positions as MIT lists them; the nine Check Your Learning items carried as 11 items after their solutions, the printed answers serving as their keys rather than appearing as text: 8 fill-ins, each stem closing with a sentence that names the unit to enter where the stem leaves it open, the welding-tank stem closing with a sentence that asks for the number of tanks as a decimal, and 3 formula text-recall items, the empirical and molecular formulas of acetylene and the molecular formula of phosphorus vapor, each asked as its own item after the molar mass where the answer prints one; the phosphorus mass written 0.03243 g where the source writes it with a power of ten, since a formula field’s question cannot print one; the key of the gas-mixture Check Your Learning written to the significant figures its data give, and the key of the oxygen-over-water Check Your Learning corrected to what the stem’s data and the table’s vapor pressure give, each with a Source note; the end-of-section exercises adapted into the interactive Practice block, with the 16 exercises the source keys carried as 23 items: 17 fill-ins, one per lettered part and one per gas of the petroleum-gas exercise, each stem closing with a sentence that names what to enter where the stem leaves it open, the blood-gas cylinder exercise keyed with the pressure in atmospheres that its question asks for and not the other two units its answer prints; 2 formula text-recall items, the phosphorus fluoride’s formula asked after its molar mass and the xenon fluoride’s empirical formula; 1 multiple-choice item for the explosive-mixture question; and 3 self-checks for the outline parts of the mercuric oxide, chlorofluorocarbon, and lime exercises, carrying the source solutions as model answers, capitals and periods added, with rubric checkpoints copied from those answers; the lead-in of the combustion exercise restated in the singular for each part, and its second part restating the first part’s given data; the two reactions of the ethanol exercise joined by a semicolon and each split after its arrow to fit the card; the 17 exercises the source prints no answer for are omitted.</small>
