---
title: Chemical Reaction Rates
description: >-
  The rate of a reaction and its rate expression, average, instantaneous, and
  initial rates, and the relative rates of reaction that the stoichiometry of a
  balanced equation gives — adapted from OpenStax Chemistry 2e, Section 12.1.
source_section: "12.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Define chemical reaction rate
- Derive rate expressions from the balanced equation for a given chemical reaction
- Calculate reaction rates from experimental data
{{< /callout >}}

A *rate* is a measure of how some property varies with time. Speed is a familiar rate that expresses the distance traveled by an object in a given amount of time. Wage is a rate that represents the amount of money earned by a person working for a given amount of time. Likewise, the rate of a chemical reaction is a measure of how much reactant is consumed, or how much product is produced, by the reaction in a given amount of time.

The **rate of reaction** is the change in the amount of a reactant or product per unit time. Reaction rates are therefore determined by measuring the time dependence of some property that can be related to reactant or product amounts. Rates of reactions that consume or produce gaseous substances, for example, are conveniently determined by measuring changes in volume or pressure. For reactions involving one or more colored substances, rates may be monitored via measurements of light absorption. For reactions involving aqueous electrolytes, rates may be measured via changes in a solution’s conductivity.

For reactants and products in solution, their relative amounts (concentrations) are conveniently used for purposes of expressing reaction rates. For example, the concentration of hydrogen peroxide, H₂O₂, in an aqueous solution changes slowly over time as it decomposes according to the equation:

$$\ce{2H2O2(aq) -> 2H2O(l) + O2(g)}$$

The rate at which the hydrogen peroxide decomposes can be expressed in terms of the rate of change of its concentration, as shown here:

$$
\begin{aligned}
&\text{rate of decomposition of}\ \ce{H2O2} \\[6pt]
&\qquad = -\frac{\text{change in concentration of reactant}}{\text{time interval}} \\[6pt]
&\qquad = -\frac{[\ce{H2O2}]_{t_2} - [\ce{H2O2}]_{t_1}}{t_2 - t_1} \\[6pt]
&\qquad = -\frac{\Delta[\ce{H2O2}]}{\Delta t}
\end{aligned}
$$

This mathematical representation of the change in species concentration over time is the **rate expression** for the reaction. The brackets indicate molar concentrations, and the symbol delta (Δ) indicates “change in.” Thus, $[\ce{H2O2}]_{t_1}$ represents the molar concentration of hydrogen peroxide at some time $t_1$; likewise, $[\ce{H2O2}]_{t_2}$ represents the molar concentration of hydrogen peroxide at a later time $t_2$; and Δ[H₂O₂] represents the change in molar concentration of hydrogen peroxide during the time interval $\Delta t$ (that is, $t_2 - t_1$). Since the reactant concentration decreases as the reaction proceeds, Δ[H₂O₂] is a negative quantity. Reaction rates are, by convention, positive quantities, and so this negative change in concentration is multiplied by −1. The table below provides an example of data collected during the decomposition of H₂O₂.

Each change in concentration, time interval, and rate in the table is the one for the interval between a time and the time before it, and stands on the row of the later time.

**The rate of decomposition of H₂O₂ in an aqueous solution decreases as the concentration of H₂O₂ decreases.**

| Time (h) | [H₂O₂] (mol/L) | Δ[H₂O₂] (mol/L) | Δ*t* (h) | Rate of Decomposition, (mol/L/h) |
|---|---|---|---|---|
| 0.00 | 1.000 | | | |
| 6.00 | 0.500 | −0.500 | 6.00 | 0.0833 |
| 12.00 | 0.250 | −0.250 | 6.00 | 0.0417 |
| 18.00 | 0.125 | −0.125 | 6.00 | 0.0208 |
| 24.00 | 0.0625 | −0.062 | 6.00 | 0.010 |

To obtain the tabulated results for this decomposition, the concentration of hydrogen peroxide was measured every 6 hours over the course of a day at a constant temperature of 40 °C. Reaction rates were computed for each time interval by dividing the change in concentration by the corresponding time increment, as shown here for the first 6-hour period:

$$
\begin{aligned}
\frac{-\Delta[\ce{H2O2}]}{\Delta t} &= \frac{-(0.500\ \text{mol/L} - 1.000\ \text{mol/L})}{(6.00\ \text{h} - 0.00\ \text{h})} \\[6pt]
&= 0.0833\ \text{mol L}^{-1}\ \text{h}^{-1}
\end{aligned}
$$

Notice that the reaction rates vary with time, decreasing as the reaction proceeds. Results for the last 6-hour period yield a reaction rate of:

$$
\begin{aligned}
\frac{-\Delta[\ce{H2O2}]}{\Delta t} &= \frac{-(0.0625\ \text{mol/L} - 0.125\ \text{mol/L})}{(24.00\ \text{h} - 18.00\ \text{h})} \\[6pt]
&= 0.010\ \text{mol L}^{-1}\ \text{h}^{-1}
\end{aligned}
$$

This behavior indicates the reaction continually slows with time. Using the concentrations at the beginning and end of a time period over which the reaction rate is changing results in the calculation of an **average rate** for the reaction over this time interval. At any specific time, the rate at which a reaction is proceeding is known as its **instantaneous rate**. The instantaneous rate of a reaction at “time zero,” when the reaction commences, is its **initial rate**. Consider the analogy of a car slowing down as it approaches a stop sign. The vehicle’s initial rate—analogous to the beginning of a chemical reaction—would be the speedometer reading at the moment the driver begins pressing the brakes ($t_0$). A few moments later, the instantaneous rate at a specific moment—call it $t_1$—would be somewhat slower, as indicated by the speedometer reading at that point in time. As time passes, the instantaneous rate will continue to fall until it reaches zero, when the car (or reaction) stops. Unlike instantaneous speed, the car’s average speed is not indicated by the speedometer; but it can be calculated as the ratio of the distance traveled to the time required to bring the vehicle to a complete stop ($\Delta t$). Like the decelerating car, the average rate of a chemical reaction will fall somewhere between its initial and final rates.

The instantaneous rate of a reaction may be determined one of two ways. If experimental conditions permit the measurement of concentration changes over very short time intervals, then average rates computed as described earlier provide reasonably good approximations of instantaneous rates. Alternatively, a graphical procedure may be used that, in effect, yields the results that would be obtained if short time interval measurements were possible. In a plot of the concentration of hydrogen peroxide against time, the instantaneous rate of decomposition of H₂O₂ at any time $t$ is given by the slope of a straight line that is tangent to the curve at that time (shown in the figure below). These tangent line slopes may be evaluated using calculus, but the procedure for doing so is beyond the scope of this chapter.

{{< mediafigure src="chemistry/CNX_Chem_12_01_RRateIll" kind="diagram" eager="true" alt="A graph of [H₂O₂] in mol/L, from 0.000 to 1.000, against time in hours, from 0.00 to 24.00. A black curve falls ever more gently from a red dot at 1.000 at 0 h to about 0.06 at 24 h. A red line touches the curve at that dot and runs down to 0.600, where dashed lines along the vertical axis and across to its end are labeled Δ[H₂O₂] and Δt. A second red line touches the curve at a red dot at 12 h, near 0.25, running from 6 h to 18 h with a dashed triangle below it labeled the same way. Labels read −slope = −Δ[H₂O₂]/Δt₀ = initial rate, and −slope = −Δ[H₂O₂]/Δt₁₂ = instantaneous rate @ 12 h." >}}
This graph shows a plot of concentration versus time for a 1.000 *M* solution of H₂O₂. The rate at any time is equal to the negative of the slope of a line tangent to the curve at that time. Tangents are shown at $t$ = 0 h (“initial rate”) and at $t$ = 12 h (“instantaneous rate” at 12 h).
{{< /mediafigure >}}

{{< callout type="info" >}}
**Chemistry in Everyday Life.** *Reaction Rates in Analysis: Test Strips for Urinalysis.*

Physicians often use disposable test strips to measure the amounts of various substances in a patient’s urine (shown in the photograph below). These test strips contain various chemical reagents, embedded in small pads at various locations along the strip, which undergo changes in color upon exposure to sufficient concentrations of specific substances. The usage instructions for test strips often stress that proper read time is critical for optimal results. This emphasis on read time suggests that kinetic aspects of the chemical reactions occurring on the test strip are important considerations.

The test for urinary glucose relies on a two-step process represented by the chemical equations shown here:

$$\ce{C6H12O6 + O2 ->[\text{catalyst}] C6H10O6 + H2O2}$$

$$\ce{H2O2 + 2I- + 2H+ ->[\text{catalyst}] 2H2O + I2}$$

The first equation depicts the oxidation of glucose in the urine to yield glucolactone and hydrogen peroxide. The hydrogen peroxide produced subsequently oxidizes colorless iodide ion to yield brown iodine, which may be visually detected. Some strips include an additional substance that reacts with iodine to produce a more distinct color change.

The two test reactions shown above are inherently very slow, but their rates are increased by special enzymes embedded in the test strip pad. This is an example of *catalysis*, a topic discussed later in this chapter (Section 12.7 Catalysis). A typical glucose test strip for use with urine requires approximately 30 seconds for completion of the color-forming reactions. Reading the result too soon might lead one to conclude that the glucose concentration of the urine sample is lower than it actually is (a *false-negative* result). Waiting too long to assess the color change can lead to a *false positive* due to the slower (not catalyzed) oxidation of iodide ion by other substances found in urine.

{{< mediafigure src="chemistry/CNX_Chem_12_01_Urinestrip" kind="photo" alt="Eight narrow white test strips lie side by side on a white paper towel, at slight angles to one another. Each carries a column of small square pads, in yellow, orange, tan, brown, green, teal, and near-black or maroon, the colors differing from strip to strip, and printed lettering near its lower end." >}}
Test strips are commonly used to detect the presence of specific substances in a person’s urine. Many test strips have several pads containing various reagents to permit the detection of multiple substances on a single strip. (credit: Iqbal Osman)
{{< /mediafigure >}}
{{< /callout >}}

## Relative Rates of Reaction

The rate of a reaction may be expressed as the change in concentration of any reactant or product. For any given reaction, these rate expressions are all related simply to one another according to the reaction stoichiometry. The rate of the general reaction

$$a\text{A} \longrightarrow b\text{B}$$

can be expressed in terms of the decrease in the concentration of A or the increase in the concentration of B. These two rate expressions are related by the stoichiometry of the reaction:

$$\text{rate} = -\left(\frac{1}{a}\right)\left(\frac{\Delta[\text{A}]}{\Delta t}\right) = \left(\frac{1}{b}\right)\left(\frac{\Delta[\text{B}]}{\Delta t}\right)$$

Consider the reaction represented by the following equation:

$$\ce{2NH3(g) -> N2(g) + 3H2(g)}$$

The relation between the reaction rates expressed in terms of nitrogen production and ammonia consumption, for example, is:

$$-\frac{\Delta\text{mol}\ \ce{NH3}}{\Delta t} \times \frac{1\ \text{mol}\ \ce{N2}}{2\ \text{mol}\ \ce{NH3}} = \frac{\Delta\text{mol}\ \ce{N2}}{\Delta t}$$

This may be represented in an abbreviated format by omitting the units of the stoichiometric factor:

$$-\frac{1}{2}\frac{\Delta\text{mol}\ \ce{NH3}}{\Delta t} = \frac{\Delta\text{mol}\ \ce{N2}}{\Delta t}$$

Note that a negative sign has been included as a factor to account for the opposite signs of the two amount changes (the reactant amount is decreasing while the product amount is increasing). For homogeneous reactions, both the reactants and products are present in the same solution and thus occupy the same volume, so the molar amounts may be replaced with molar concentrations:

$$-\frac{1}{2}\frac{\Delta[\ce{NH3}]}{\Delta t} = \frac{\Delta[\ce{N2}]}{\Delta t}$$

Similarly, the rate of formation of H₂ is three times the rate of formation of N₂ because three moles of H₂ are produced for each mole of N₂ produced.

$$\frac{1}{3}\frac{\Delta[\ce{H2}]}{\Delta t} = \frac{\Delta[\ce{N2}]}{\Delta t}$$

The graph below illustrates the change in concentrations over time for the decomposition of ammonia into nitrogen and hydrogen at 1100 °C. Slopes of the tangent lines at $t$ = 500 s show that the instantaneous rates derived from all three species involved in the reaction are related by their stoichiometric factors. The rate of hydrogen production, for example, is observed to be three times greater than that for nitrogen production:

$$\frac{2.91 \times 10^{-6}\ M\text{/s}}{9.70 \times 10^{-7}\ M\text{/s}} \approx 3$$

{{< mediafigure src="chemistry/CNX_Chem_12_01_NH3Decomp" kind="diagram" alt="A graph of concentration in M, from 0 to 4.0 × 10⁻³, against time in seconds, from 0 to 2000. The [NH₃] curve falls from about 2.8 × 10⁻³ at 0 s to near 0.1 × 10⁻³ at 2000 s. The [N₂] and [H₂] curves rise from 0, [N₂] to about 1.3 × 10⁻³ and [H₂] to about 3.9 × 10⁻³. A dashed vertical line marks 500 s, where a red line touches each curve. Labels give the slopes: −Δ[NH₃]/Δt = −slope = 1.94 × 10⁻⁶ M/s; Δ[N₂]/Δt = slope = 9.70 × 10⁻⁷ M/s; Δ[H₂]/Δt = slope = 2.91 × 10⁻⁶ M/s." >}}
Changes in concentrations of the reactant and products for the reaction $\ce{2NH3 -> N2 + 3H2}$. The rates of change of the three concentrations are related by the reaction stoichiometry, as shown by the different slopes of the tangents at $t$ = 500 s.
{{< /mediafigure >}}

**Example.** *Expressions for Relative Reaction Rates.* The first step in the production of nitric acid is the combustion of ammonia:

$$\ce{4NH3(g) + 5O2(g) -> 4NO(g) + 6H2O(g)}$$

Write the equations that relate the rates of consumption of the reactants and the rates of formation of the products.

**Solution.** Considering the stoichiometry of this homogeneous reaction, the rates for the consumption of reactants and formation of products are:

$$
\begin{aligned}
-\frac{1}{4}\frac{\Delta[\ce{NH3}]}{\Delta t} &= -\frac{1}{5}\frac{\Delta[\ce{O2}]}{\Delta t} \\[6pt]
&= \frac{1}{4}\frac{\Delta[\ce{NO}]}{\Delta t} = \frac{1}{6}\frac{\Delta[\ce{H2O}]}{\Delta t}
\end{aligned}
$$

{{< multiplechoice
  question="The rate of formation of Br₂ is $6.0 \times 10^{-6}$ mol/L/s in a reaction described by the following net ionic equation: $\ce{5Br- + BrO3- + 6H+ ->}$ $\ce{3Br2 + 3H2O}$. Write the equations that relate the rates of consumption of the reactants and the rates of formation of the products. Which equations relate them?"
  answer="$-\frac{1}{5}\frac{\Delta[\ce{Br-}]}{\Delta t} = -\frac{\Delta[\ce{BrO3-}]}{\Delta t} = -\frac{1}{6}\frac{\Delta[\ce{H+}]}{\Delta t} = \frac{1}{3}\frac{\Delta[\ce{Br2}]}{\Delta t} = \frac{1}{3}\frac{\Delta[\ce{H2O}]}{\Delta t}$"
  hint="Use the relation between the rate expressions and the coefficients of the balanced equation in the Key equations list."
>}}
$-5\frac{\Delta[\ce{Br-}]}{\Delta t} = -\frac{\Delta[\ce{BrO3-}]}{\Delta t} = -6\frac{\Delta[\ce{H+}]}{\Delta t} = 3\frac{\Delta[\ce{Br2}]}{\Delta t} = 3\frac{\Delta[\ce{H2O}]}{\Delta t}$
$-\frac{1}{5}\frac{\Delta[\ce{Br-}]}{\Delta t} = -\frac{\Delta[\ce{BrO3-}]}{\Delta t} = -\frac{1}{6}\frac{\Delta[\ce{H+}]}{\Delta t} = \frac{1}{3}\frac{\Delta[\ce{Br2}]}{\Delta t} = \frac{1}{3}\frac{\Delta[\ce{H2O}]}{\Delta t}$
$\frac{1}{5}\frac{\Delta[\ce{Br-}]}{\Delta t} = \frac{\Delta[\ce{BrO3-}]}{\Delta t} = \frac{1}{6}\frac{\Delta[\ce{H+}]}{\Delta t} = \frac{1}{3}\frac{\Delta[\ce{Br2}]}{\Delta t} = \frac{1}{3}\frac{\Delta[\ce{H2O}]}{\Delta t}$
$-\frac{\Delta[\ce{Br-}]}{\Delta t} = -\frac{\Delta[\ce{BrO3-}]}{\Delta t} = -\frac{\Delta[\ce{H+}]}{\Delta t} = \frac{\Delta[\ce{Br2}]}{\Delta t} = \frac{\Delta[\ce{H2O}]}{\Delta t}$
{{< /multiplechoice >}}

**Example.** *Reaction Rate Expressions for Decomposition of H₂O₂.* The graph of the concentration of H₂O₂ against time above shows the rate of the decomposition of H₂O₂ over time:

$$\ce{2H2O2 -> 2H2O + O2}$$

Based on these data, the instantaneous rate of decomposition of H₂O₂ at $t$ = 11.1 h is determined to be $3.20 \times 10^{-2}$ mol/L/h, that is:

$$-\frac{\Delta[\ce{H2O2}]}{\Delta t} = 3.20 \times 10^{-2}\ \text{mol L}^{-1}\ \text{h}^{-1}$$

What is the instantaneous rate of production of H₂O and O₂?

**Solution.** The reaction stoichiometry shows that

$$-\frac{1}{2}\frac{\Delta[\ce{H2O2}]}{\Delta t} = \frac{1}{2}\frac{\Delta[\ce{H2O}]}{\Delta t} = \frac{\Delta[\ce{O2}]}{\Delta t}$$

Therefore:

$$\frac{1}{2} \times 3.20 \times 10^{-2}\ \text{mol L}^{-1}\ \text{h}^{-1} = \frac{\Delta[\ce{O2}]}{\Delta t}$$

and

$$\frac{\Delta[\ce{O2}]}{\Delta t} = 1.60 \times 10^{-2}\ \text{mol L}^{-1}\ \text{h}^{-1}$$

Based on the stoichiometry of this reaction as shown above, the rate of water product is therefore

$$
\begin{aligned}
\frac{\Delta[\ce{H2O}]}{\Delta t} &= 2\frac{\Delta[\ce{O2}]}{\Delta t} \\[6pt]
&= (2)(1.60 \times 10^{-2}\ \text{mol L}^{-1}\ \text{h}^{-1}) \\[6pt]
&= 3.20 \times 10^{-2}\ \text{mol L}^{-1}\ \text{h}^{-1}
\end{aligned}
$$

{{< fillin
  question="If the rate of decomposition of ammonia, NH₃, at 1150 K is $2.10 \times 10^{-6}$ mol/L/s, what is the rate of production of nitrogen and hydrogen? Enter the rate of production of N₂ in mol/L/s."
  answer="1.05\times10^{-6}"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$1.05 \times 10^{-6}\ \text{mol/L/s}$"
  hint="Use the relation between the rate expressions and the coefficients of the balanced equation for the decomposition of ammonia, as the example above does for hydrogen peroxide."
>}}

{{< fillin
  question="If the rate of decomposition of ammonia, NH₃, at 1150 K is $2.10 \times 10^{-6}$ mol/L/s, what is the rate of production of nitrogen and hydrogen? Enter the rate of production of H₂ in mol/L/s."
  answer="3.15\times10^{-6}"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$3.15 \times 10^{-6}\ \text{mol/L/s}$"
  hint="Use the relation between the rate expressions and the coefficients of the balanced equation for the decomposition of ammonia, as the example above does for hydrogen peroxide."
>}}

## Summary

- The rate of a reaction can be expressed either in terms of the decrease in the amount of a reactant or the increase in the amount of a product per unit time. Relations between different rate expressions for a given reaction are derived directly from the stoichiometric coefficients of the equation representing the reaction.

## Key equations

- $\text{rate} = -\left(\frac{1}{a}\right)\left(\frac{\Delta[\text{A}]}{\Delta t}\right) = \left(\frac{1}{b}\right)\left(\frac{\Delta[\text{B}]}{\Delta t}\right)$

## Key terms

- **average rate** — rate of a chemical reaction computed as the ratio of a measured change in amount or concentration of substance to the time interval over which the change occurred.
- **initial rate** — instantaneous rate of a chemical reaction at $t$ = 0 s (immediately after the reaction has begun).
- **instantaneous rate** — rate of a chemical reaction at any instant in time, determined by the slope of the line tangential to a graph of concentration as a function of time.
- **rate of reaction** — measure of the speed at which a chemical reaction takes place.
- **rate expression** — mathematical representation defining reaction rate as change in amount, concentration, or pressure of reactant or product species per unit time.

## Practice

### Define chemical reaction rate

{{< selfcheck question="What is the difference between average rate, initial rate, and instantaneous rate?" hint="Reread the definitions of the three rates in the Key terms list." >}}
The instantaneous rate is the rate of a reaction at any particular point in time, a period of time that is so short that the concentrations of reactants and products change by a negligible amount. The initial rate is the instantaneous rate of reaction as it starts (as product just begins to form). Average rate is the average of the instantaneous rates over a time period.
===CHECKS===
the instantaneous rate is the rate of a reaction at any particular point in time
the initial rate is the instantaneous rate of reaction as it starts
average rate is the average of the instantaneous rates over a time period
{{< /selfcheck >}}

{{< textin
  question="For reactions involving aqueous electrolytes, rates may be measured via changes in a solution’s ________."
  answer="conductivity"
  hint="Reread the paragraph that defines the rate of reaction, on the properties by which rates are measured."
>}}

### Derive rate expressions from the balanced equation for a given chemical reaction

{{< multiplechoice
  question="In the nuclear industry, chlorine trifluoride is used to prepare uranium hexafluoride, a volatile compound of uranium used in the separation of uranium isotopes. Chlorine trifluoride is prepared by the reaction $\ce{Cl2(g) + 3F2(g) -> 2ClF3(g)}$. Write the equation that relates the rate expressions for this reaction in terms of the disappearance of Cl₂ and F₂ and the formation of ClF₃. Which equation relates them?"
  answer="$\text{rate} = +\frac{1}{2}\frac{\Delta[\ce{ClF3}]}{\Delta t} = -\frac{\Delta[\ce{Cl2}]}{\Delta t} = -\frac{1}{3}\frac{\Delta[\ce{F2}]}{\Delta t}$"
  hint="Use the relation between the rate expressions and the coefficients of the balanced equation in the Key equations list."
>}}
$\text{rate} = +2\frac{\Delta[\ce{ClF3}]}{\Delta t} = -\frac{\Delta[\ce{Cl2}]}{\Delta t} = -3\frac{\Delta[\ce{F2}]}{\Delta t}$
$\text{rate} = +\frac{1}{2}\frac{\Delta[\ce{ClF3}]}{\Delta t} = \frac{\Delta[\ce{Cl2}]}{\Delta t} = \frac{1}{3}\frac{\Delta[\ce{F2}]}{\Delta t}$
$\text{rate} = +\frac{1}{2}\frac{\Delta[\ce{ClF3}]}{\Delta t} = -\frac{\Delta[\ce{Cl2}]}{\Delta t} = -\frac{1}{3}\frac{\Delta[\ce{F2}]}{\Delta t}$
$\text{rate} = +\frac{\Delta[\ce{ClF3}]}{\Delta t} = -\frac{\Delta[\ce{Cl2}]}{\Delta t} = -\frac{\Delta[\ce{F2}]}{\Delta t}$
{{< /multiplechoice >}}

*Source note:* the answer graded here is not the one the source prints for this reaction; the source’s answer misprints one letter of an element symbol.

{{< textin
  question="For any given reaction, these rate expressions are all related simply to one another according to the reaction ________."
  answer="stoichiometry"
  hint="Reread the paragraph that opens the Relative Rates of Reaction subsection."
>}}

### Calculate reaction rates from experimental data

| Time (s) | 0.0 | 5.0 | 10.0 | 15.0 | 20.0 | 25.0 | 35.0 |
|---|---|---|---|---|---|---|---|
| [*A*] (*M*) | 1.00 | 0.775 | 0.625 | 0.465 | 0.360 | 0.285 | 0.230 |

{{< fillin
  question="A study of the rate of the reaction represented as $\ce{2A -> B}$ gave the following data, shown in the table above. Determine the average rate of disappearance of *A* between 0.0 s and 10.0 s, and between 10.0 s and 20.0 s. Enter the average rate between 0.0 s and 10.0 s in mol/L/s."
  answer="0.038"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$0.038\ \text{mol/L/s}$"
  hint="Use the definition of the average rate in the Key terms list."
>}}

*Source note:* the answer graded for this exercise is written to the number of significant figures its data give, which is not the number the source prints.

{{< fillin
  question="A study of the rate of the reaction represented as $\ce{2A -> B}$ gave the following data, shown in the table above. Determine the average rate of disappearance of *A* between 0.0 s and 10.0 s, and between 10.0 s and 20.0 s. Enter the average rate between 10.0 s and 20.0 s in mol/L/s."
  answer="0.0265"
  answerForm="sig-figs:3 last-digit:0"
  answerDisplay="$0.0265\ \text{mol/L/s}$"
  hint="Use the definition of the average rate in the Key terms list."
>}}

{{< selfcheck question="A study of the rate of the reaction represented as $\ce{2A -> B}$ gave the following data, shown in the table above. Estimate the instantaneous rate of disappearance of *A* at 15.0 s from a graph of time versus [*A*]. What are the units of this rate?" hint="Use the definition of the instantaneous rate in the Key terms list." >}}
Instantaneous rate, 15 s = 0.023 mol/L/s.
===CHECKS===
instantaneous rate, 15 s
0.023 mol/L/s
{{< /selfcheck >}}

{{< fillin
  question="A study of the rate of the reaction represented as $\ce{2A -> B}$ gave the following data, shown in the table above. Use the rates found in the previous items to determine the average rate of formation of *B* between 0.00 s and 10.0 s, and the instantaneous rate of formation of *B* at 15.0 s. Enter the average rate of formation of *B* between 0.00 s and 10.0 s in mol/L/s."
  answer="0.019"
  answerForm="sig-figs:2 last-digit:0"
  answerDisplay="$0.019\ \text{mol/L/s}$"
  hint="Relate the rate of formation of B to the rate of disappearance of A through the coefficients of the equation."
>}}

*Source note:* the answer graded for this exercise is written to the number of significant figures its data give, which is not the number the source prints.

{{< selfcheck question="A study of the rate of the reaction represented as $\ce{2A -> B}$ gave the following data, shown in the table above. Use the rates found in the previous items to determine the average rate of formation of *B* between 0.00 s and 10.0 s, and the instantaneous rate of formation of *B* at 15.0 s. Give the instantaneous rate of formation of *B* at 15.0 s." hint="Relate the rate of formation of B to the rate of disappearance of A through the coefficients of the equation." >}}
Instantaneous rate for B formation = 0.012 mol/L/s.
===CHECKS===
instantaneous rate for B formation
0.012 mol/L/s
{{< /selfcheck >}}

---

<small>This section is adapted from [Chemistry 2e, Section 12.1: Chemical Reaction Rates](https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates) by Paul Flowers, Klaus Theopold, Richard Langley, William R. Robinson, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/chemistry-2e). Changes: the three figures re-encoded as WebP, the two graphs marked as diagrams and the test-strip photograph as a photo, and every alt text written from the image (among other differences, the source alt of the ammonia graph gives the labels beside the nitrogen and hydrogen curves as the negative of each change over the negative slope, where the drawing prints each change over time equal to the slope, and the source alt of the hydrogen peroxide graph quotes its labels as the slope where the drawing prints the negative of the slope); the table of hydrogen peroxide decomposition data, which the source prints as an image, transcribed as a Markdown table from the image and the image dropped, its caption kept as a bold line above the table, its headings as the image prints them but with their units written with slashes where the image prints negative exponents, its positive rates as the image prints them where the source alt gives the rates as negative values, and each interval’s change, time interval, and rate set on the row of the time that ends the interval, with a sentence added before the table that says so; references to numbered figures replaced by describing phrases, the bare parenthetical ones written “(shown in the figure below)” and “(shown in the photograph below)”; the Chemistry in Everyday Life box rendered as a callout with its photograph inside it, and its reference to a later topic of this chapter followed by the section meant, Section 12.7 Catalysis, in plain text since that page is not yet written; the source’s equations typeset as KaTeX math and its reactions as chemical equations, the longer lines broken into aligned rows to fit the column; in the general relation between the rate expressions of a reaction, the brackets the source’s display omits restored, as its Key Equations table prints them, the coefficients a and b there and in the general reaction above it set in italics, and the Key equations entry written in that form, the body’s, without the table’s leading words; the worked examples set as prose, each followed by its Check Your Learning as interactive items, the printed answers serving as their keys rather than appearing as text: the bromide and bromate Check Your Learning as a multiple-choice item whose options are four whole chains of rate expressions, the source’s chain and three author-written chains, with the question “Which equations relate them?” added after the stem; and the ammonia Check Your Learning as two fill-ins, one per product, each with a sentence added after the stem naming the product and the unit; the end-of-section exercises adapted into the interactive Practice block, with the 3 exercises the source keys carried as 7 items: 3 fill-ins, two for the average rates of disappearance of A, one per interval, and one for the average rate of formation of B, each with a sentence added after the stem naming the rate and the unit; 1 multiple-choice item for the chlorine trifluoride exercise, with options built as the bromide and bromate item’s are and the question “Which equation relates them?” added after the stem; and 3 self-checks carrying the source solutions as model answers, capitals and periods added, each with rubric checkpoints copied from that answer — one for the difference between the three rates, one for the estimated instantaneous rate of disappearance of A and its units, and one for the instantaneous rate of formation of B, the last two carrying their parts’ segments of the source’s answer, since the learner draws the graph and the estimate is not graded, and the last one’s question closed with a sentence naming the rate it asks; the data table of the reaction of A placed once above its items, each stem reading “gave the following data, shown in the table above.” where the source’s lead-in ends in a colon, and the last part’s “parts (a) and (b)” written “the previous items”; the rate unit written with slashes, the module’s own prose form, in the model answers, closing sentences, and answer displays where the source’s answer prints it with negative exponents; the source’s answer to the chlorine trifluoride exercise, which misprints one letter of the product’s formula in its first rate expression, corrected, with a Source note; the keys of the average rate of disappearance of A between 0.0 s and 10.0 s and of the average rate of formation of B written to the number of significant figures their data give, which is not the number the source prints, each with a Source note after its item; two filler text-recall items added after the keyed items of their groups: a cloze on the body sentence on measuring the rates of reactions that involve aqueous electrolytes, which gives the group on defining reaction rate the auto-graded item the practice floor requires, and a cloze on the sentence opening the Relative Rates of Reaction subsection on how the rate expressions of a reaction are related, which gives the group on deriving rate expressions its second item; and the 3 exercises the source prints no answer for are omitted.</small>
