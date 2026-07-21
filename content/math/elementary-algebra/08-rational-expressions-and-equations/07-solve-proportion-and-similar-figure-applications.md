---
title: Solve Proportion and Similar Figure Applications
description: >-
  Solving proportions by clearing the fractions, using proportions to solve
  applications with matched units, and using the proportional sides of similar
  figures to find unknown lengths and heights — adapted from OpenStax
  Elementary Algebra 2e, Section 8.7.
source_section: "8.7"
weight: 7
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve proportions,
  solve applications using proportions, and solve similar figure
  applications.
{{< /callout >}}

## Solve proportions

When two rational expressions are equal, the equation relating them is called
a *proportion*.

{{< callout type="info" >}}
  **Proportion.** A **proportion** is an equation of the form
  $\tfrac{a}{b} = \tfrac{c}{d}$, where $b \neq 0$, $d \neq 0$. The proportion
  is read "$a$ is to $b$, as $c$ is to $d$."
{{< /callout >}}

The equation $\tfrac{1}{2} = \tfrac{4}{8}$ is a proportion because the two
fractions are equal. It is read "$1$ is to $2$ as $4$ is to $8$."

Proportions are used in many applications to "scale up" quantities. Suppose a
school principal wants to have $1$ teacher for $20$ students. To find the
number of teachers needed for $60$ students, let $x$ be that number and set
up a proportion, matching the units of the numerators and the units of the
denominators:

$$\frac{1 \text{ teacher}}{20 \text{ students}} = \frac{x \text{ teachers}}{60 \text{ students}}$$

Since a proportion is an equation with rational expressions, we solve it the
same way we solved rational equations — multiply both sides by the LCD to
clear the fractions, then solve. Omitting the units until the last step:

$$
\begin{array}{lrcl}
& \tfrac{1}{20} &=& \tfrac{x}{60} \\[6pt]
\text{Multiply both sides by the LCD, } 60. & \tfrac{1}{20} \cdot 60 &=& \tfrac{x}{60} \cdot 60 \\[6pt]
\text{Simplify.} & 3 &=& x
\end{array}
$$

The principal needs $3$ teachers for $60$ students.

**Example.** Solve the proportion $\tfrac{x}{63} = \tfrac{4}{7}$.

To isolate $x$, multiply both sides by the LCD, $63$, then simplify:

$$
\begin{array}{lrcl}
& \tfrac{x}{63} &=& \tfrac{4}{7} \\[6pt]
\text{Multiply both sides by the LCD, } 63. & 63\!\left(\tfrac{x}{63}\right) &=& 63\!\left(\tfrac{4}{7}\right) \\[6pt]
\text{Simplify.} & x &=& \tfrac{9 \cdot 7 \cdot 4}{7} \\[6pt]
\text{Divide the common factors.} & x &=& 36
\end{array}
$$

**Check.** Substitute $x = 36$ into the original proportion:

$$\frac{36}{63} \overset{?}{=} \frac{4}{7}, \qquad \frac{4 \cdot 9}{7 \cdot 9} \overset{?}{=} \frac{4}{7}, \qquad \frac{4}{7} = \frac{4}{7}\ \checkmark$$

{{< fillin
  question="Solve the proportion $\tfrac{n}{84} = \tfrac{11}{12}$."
  answer="77"
  hint="Multiply both sides by $84$ to clear the fraction, then simplify."
>}}

When we work with proportions, we exclude values that would make either
denominator zero, just as we do for all rational expressions.

**Example.** Solve the proportion $\tfrac{144}{a} = \tfrac{9}{4}$.

Multiply both sides by the LCD, $4a$, remove the common factors, and solve:

$$
\begin{array}{lrcl}
& \tfrac{144}{a} &=& \tfrac{9}{4} \\[6pt]
\text{Multiply both sides by the LCD.} & \tfrac{144}{a} \cdot 4a &=& \tfrac{9}{4} \cdot 4a \\[6pt]
\text{Remove common factors.} & 4 \cdot 144 &=& a \cdot 9 \\[4pt]
\text{Simplify.} & 576 &=& 9a \\[4pt]
\text{Divide both sides by } 9. & 64 &=& a
\end{array}
$$

You can check that $\tfrac{144}{64} = \tfrac{9}{4}$.

{{< fillin
  question="Solve the proportion $\tfrac{91}{b} = \tfrac{7}{5}$."
  answer="65"
  hint="Multiply both sides by the LCD $5b$, remove the common factors, then solve for $b$."
>}}

When a variable appears in a sum inside a denominator, we clear the fraction
the same way and then distribute.

**Example.** Solve the proportion $\tfrac{p+12}{9} = \tfrac{p-12}{6}$.

The LCD of $9$ and $6$ is $18$:

$$
\begin{array}{lrcl}
& \tfrac{p+12}{9} &=& \tfrac{p-12}{6} \\[6pt]
\text{Multiply both sides by the LCD, } 18. & 18\!\left(\tfrac{p+12}{9}\right) &=& 18\!\left(\tfrac{p-12}{6}\right) \\[6pt]
\text{Simplify.} & 2(p+12) &=& 3(p-12) \\[4pt]
\text{Distribute.} & 2p + 24 &=& 3p - 36 \\[4pt]
\text{Solve for } p. & 60 &=& p
\end{array}
$$

You can check that both sides equal $8$ when $p = 60$.

{{< fillin
  question="Solve the proportion $\tfrac{v+30}{8} = \tfrac{v+66}{12}$."
  answer="42"
  hint="Multiply both sides by the LCD $24$, distribute, then collect the $v$ terms."
>}}

## Solve applications using proportions

To solve applications with proportions, we follow our usual strategy for
solving applications. But when we set up the proportion, we must make sure the
units in the numerators match and the units in the denominators match.

**Example.** When pediatricians prescribe acetaminophen to children, they
prescribe $5$ milliliters (ml) for every $25$ pounds of the child's weight.
If Zoe weighs $80$ pounds, how many milliliters will her doctor prescribe?

Let $a$ be the milliliters of acetaminophen. Translate into a proportion,
keeping ml in both numerators and pounds in both denominators:

$$
\begin{array}{lrcl}
\text{Translate.} & \tfrac{5}{25} &=& \tfrac{a}{80} \\[6pt]
\text{Multiply both sides by the LCD, } 400. & 400\!\left(\tfrac{5}{25}\right) &=& 400\!\left(\tfrac{a}{80}\right) \\[6pt]
\text{Remove common factors.} & 16 \cdot 5 &=& 5a \\[4pt]
\text{Solve for } a. & 16 &=& a
\end{array}
$$

Since $80$ is about $3$ times $25$, the medicine should be about $3$ times
$5$, so $16$ ml is reasonable. The pediatrician would prescribe $16$ ml of
acetaminophen to Zoe.

{{< fillin
  question="Pediatricians prescribe $5$ milliliters (ml) of acetaminophen for every $25$ pounds of a child's weight. How many milliliters will the doctor prescribe for Emilia, who weighs $60$ pounds? Enter the number of milliliters."
  answer="12"
  hint="Set up $\tfrac{5}{25} = \tfrac{a}{60}$ with ml on top and pounds on the bottom, then solve for $a$."
>}}

**Example.** A $16$-ounce iced caramel macchiato has $230$ calories. How many
calories are there in a $24$-ounce iced caramel macchiato?

Let $c$ be the calories in $24$ ounces. Translate into a proportion with
calories in both numerators and ounces in both denominators, then solve:

$$
\begin{array}{lrcl}
\text{Translate.} & \tfrac{230}{16} &=& \tfrac{c}{24} \\[6pt]
\text{Multiply both sides by the LCD, } 48. & 48\!\left(\tfrac{230}{16}\right) &=& 48\!\left(\tfrac{c}{24}\right) \\[6pt]
\text{Simplify.} & 690 &=& 2c \\[4pt]
\text{Solve for } c. & 345 &=& c
\end{array}
$$

Since $345$ calories for $24$ ounces is more than $230$ for $16$ ounces but
not too much more, the answer is reasonable. There are $345$ calories in a
$24$-ounce iced caramel macchiato.

{{< fillin
  question="At a fast-food restaurant, a $22$-ounce chocolate shake has $850$ calories. How many calories are in their $12$-ounce chocolate shake? Round to the nearest whole number and enter the number of calories."
  answer="464"
  hint="Set up $\tfrac{850}{22} = \tfrac{c}{12}$ with calories on top and ounces on the bottom, then solve for $c$."
>}}

**Example.** Josiah went to Mexico for spring break and changed \$325 into
Mexican pesos. At that time the exchange rate had \$1 US equal to $12.54$
Mexican pesos. How many pesos did he get?

Let $p$ be the number of Mexican pesos. Translate into a proportion with
dollars in both numerators and pesos in both denominators, then solve:

$$
\begin{array}{lrcl}
\text{Translate.} & \tfrac{1}{12.54} &=& \tfrac{325}{p} \\[6pt]
\text{Multiply both sides by the LCD, } 12.54p. & 12.54p\!\left(\tfrac{1}{12.54}\right) &=& 12.54p\!\left(\tfrac{325}{p}\right) \\[6pt]
\text{Simplify.} & p &=& 4075.5
\end{array}
$$

Since \$100 would be about $1{,}254$ pesos and \$325 is a little more than
$3$ times that, the answer is reasonable. Josiah got $4075.5$ pesos for his
trip.

{{< fillin
  question="Yurianna is going to Europe and wants to change \$800 into Euros. At the current exchange rate, \$1 US is equal to $0.738$ Euro. How many Euros will she have for her trip? Enter the number of Euros."
  answer="590.4"
  hint="Set up $\tfrac{1}{0.738} = \tfrac{800}{e}$ with dollars on top and Euros on the bottom, then solve for $e$."
>}}

In this example we related the number of pesos to the number of dollars using
a proportion. We could say the number of pesos *is proportional to* the number
of dollars. If two quantities are related by a proportion, we say they are
proportional.

## Solve similar figure applications

When you shrink or enlarge a photo, figure out a distance on a map, or use a
pattern to build a bookcase, you are working with **similar figures**. If two
figures have exactly the same shape but different sizes, they are said to be
*similar*. All their corresponding angles have the same measures and their
corresponding sides are in the same ratio.

{{< callout type="info" >}}
  **Similar figures.** Two figures are similar if the measures of their
  corresponding angles are equal and their corresponding sides are in the same
  ratio.
{{< /callout >}}

For example, the two triangles below are similar. Each side of
$\triangle ABC$ is $4$ times the length of the corresponding side of
$\triangle XYZ$:

$$\frac{16}{4} = \frac{20}{5} = \frac{12}{3} = 4$$

<div class="ap-figure">
<svg role="img" aria-label="Two similar triangles. Triangle ABC is the larger triangle with vertex A at bottom left, C at bottom right, and B at the top; side AB is 12, side BC is 16, and side AC is 20. Triangle XYZ is the smaller triangle with the same shape, with vertex X at bottom left, Z at bottom right, and Y at the top; side XY is 3, side YZ is 4, and side XZ is 5." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222 162" width="222" height="162" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="126" x2="186" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <text x="111" y="148" text-anchor="middle" font-size="13" fill="currentColor">20</text>
  <line x1="186" y1="126" x2="144" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="175.9" y="73.9" text-anchor="start" font-size="13" fill="currentColor">16</text>
  <line x1="144" y1="36" x2="36" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <text x="82.3" y="69.8" text-anchor="end" font-size="13" fill="currentColor">12</text>
  <text x="23.7" y="134.3" text-anchor="end" font-size="13" fill="currentColor">A</text>
  <text x="197.8" y="141.5" text-anchor="start" font-size="13" fill="currentColor">C</text>
  <text x="148.5" y="21.8" text-anchor="middle" font-size="13" fill="currentColor">B</text>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="The smaller similar triangle XYZ, one quarter the size of triangle ABC, with vertex X at bottom left, Z at bottom right, and Y at the top; side XZ is 5, side YZ is 4, and side XY is 3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 95" width="110" height="95" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="58.5" x2="73.5" y2="58.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.8" y="80.5" text-anchor="middle" font-size="13" fill="currentColor">5</text>
  <line x1="73.5" y1="58.5" x2="63" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="79.1" y="40.2" text-anchor="start" font-size="13" fill="currentColor">4</text>
  <line x1="63" y1="36" x2="36" y2="58.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="41.8" y="36" text-anchor="end" font-size="13" fill="currentColor">3</text>
  <text x="23.7" y="66.8" text-anchor="end" font-size="13" fill="currentColor">X</text>
  <text x="85.3" y="74" text-anchor="start" font-size="13" fill="currentColor">Z</text>
  <text x="67.5" y="21.8" text-anchor="middle" font-size="13" fill="currentColor">Y</text>
</svg>
</div>

{{< callout type="info" >}}
  **Property of Similar Triangles.** If $\triangle ABC$ is similar to
  $\triangle XYZ$, then their corresponding angle measures are equal and their
  corresponding sides are in the same ratio:

  $$m\angle A = m\angle X, \quad m\angle B = m\angle Y, \quad m\angle C = m\angle Z$$

  $$\frac{a}{x} = \frac{b}{y} = \frac{c}{z}$$
{{< /callout >}}

To solve applications with similar figures, we follow the same
problem-solving strategy for geometry applications: read the problem and draw
the figure, identify and name what we are looking for, translate into an
equation using the proportional sides, solve, check, and answer in a complete
sentence.

**Example.** $\triangle ABC$ is similar to $\triangle XYZ$. The lengths of
two sides of each triangle are given. Find the lengths of the third sides.

<div class="ap-figure">
<svg role="img" aria-label="Two similar triangles. In the larger triangle ABC, side AB is 4, side BC is a (the unknown third side), and side AC is 3.2. In the smaller triangle XYZ, side XY is y (the unknown third side), side YZ is 3, and side XZ is 4.5." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 138" width="192" height="138" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="102" x2="156" y2="102" stroke="currentColor" stroke-width="1.5"/>
  <text x="96" y="124" text-anchor="middle" font-size="13" fill="currentColor">a</text>
  <line x1="156" y1="102" x2="72" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="121.4" y="57.6" text-anchor="start" font-size="13" fill="currentColor">4</text>
  <line x1="72" y1="36" x2="36" y2="102" stroke="currentColor" stroke-width="1.5"/>
  <text x="43.5" y="61.3" text-anchor="end" font-size="13" fill="currentColor">3.2</text>
  <text x="24" y="117.1" text-anchor="end" font-size="13" fill="currentColor">C</text>
  <text x="168.4" y="110" text-anchor="start" font-size="13" fill="currentColor">B</text>
  <text x="67.6" y="21.8" text-anchor="middle" font-size="13" fill="currentColor">A</text>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="The smaller similar triangle XYZ, with side XZ 4.5, side YZ 3, and the unknown side XY labeled y." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 115" width="150" height="115" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="78.9" x2="114" y2="78.9" stroke="currentColor" stroke-width="1.5"/>
  <text x="75" y="100.9" text-anchor="middle" font-size="13" fill="currentColor">4.5</text>
  <line x1="114" y1="78.9" x2="59.4" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="94.1" y="46" text-anchor="start" font-size="13" fill="currentColor">3</text>
  <line x1="59.4" y1="36" x2="36" y2="78.9" stroke="currentColor" stroke-width="1.5"/>
  <text x="37.2" y="49.7" text-anchor="end" font-size="13" fill="currentColor">y</text>
  <text x="24" y="94" text-anchor="end" font-size="13" fill="currentColor">Z</text>
  <text x="126.4" y="86.9" text-anchor="start" font-size="13" fill="currentColor">Y</text>
  <text x="55" y="21.8" text-anchor="middle" font-size="13" fill="currentColor">X</text>
</svg>
</div>

Let $a$ be the length of the third side of $\triangle ABC$ and $y$ the length
of the third side of $\triangle XYZ$. Since the triangles are similar, the
corresponding sides are proportional. The side $AB = 4$ corresponds to the
side $XY = 3$, so $\tfrac{AB}{XY} = \tfrac{4}{3}$. We write equations using
$\tfrac{AB}{XY}$ to find each unknown side:

$$
\begin{array}{lrcl}
\text{To find } a. & \tfrac{4}{3} &=& \tfrac{a}{4.5} \\[6pt]
\text{Solve.} & 3a &=& 4(4.5) \\[4pt]
& a &=& 6 \\[6pt]
\text{To find } y. & \tfrac{4}{3} &=& \tfrac{3.2}{y} \\[6pt]
\text{Solve.} & 4y &=& 3(3.2) \\[4pt]
& y &=& 2.4
\end{array}
$$

Checking, $4(4.5) = 6(3)$ gives $18 = 18\ \checkmark$ and
$4(2.4) = 3.2(3)$ gives $9.6 = 9.6\ \checkmark$. The third side of
$\triangle ABC$ is $6$ and the third side of $\triangle XYZ$ is $2.4$.

{{< fillin
  question="$\triangle ABC$ is similar to $\triangle XYZ$. In the smaller triangle $AB = 17$ and the unknown side $BC = a$; in the larger triangle the corresponding sides are $XY = 25.5$ and $YZ = 12$. Using $\tfrac{17}{25.5} = \tfrac{a}{12}$, find the length of side $a$."
  answer="8"
  hint="Cross-multiply: $25.5\,a = 17 \cdot 12$, then divide both sides by $25.5$."
>}}

The next example shows how similar triangles are used with maps.

**Example.** On a map, San Francisco, Las Vegas, and Los Angeles form a
triangle. The map distance from Los Angeles to Las Vegas is $1$ inch and from
Los Angeles to San Francisco is $1.3$ inches. The actual distance from Los
Angeles to Las Vegas is $270$ miles. Find the actual distance from Los Angeles
to San Francisco.

Let $x$ be the distance from Los Angeles to San Francisco. The map triangle
and the actual triangle are similar, so the corresponding sides are
proportional. Translate with miles in both numerators and inches in both
denominators, then solve:

$$
\begin{array}{lrcl}
\text{Translate.} & \tfrac{x \text{ miles}}{1.3 \text{ inches}} &=& \tfrac{270 \text{ miles}}{1 \text{ inch}} \\[6pt]
\text{Solve.} & 1.3\!\left(\tfrac{x}{1.3}\right) &=& 1.3\!\left(\tfrac{270}{1}\right) \\[6pt]
& x &=& 351
\end{array}
$$

On the map, the distance from Los Angeles to San Francisco is more than the
distance from Los Angeles to Las Vegas. Since $351$ is more than $270$, the
answer makes sense. The distance from Los Angeles to San Francisco is
$351$ miles.

{{< fillin
  question="On a map, Seattle, Portland, and Boise form a triangle. The map distance from Seattle to Boise is $4$ inches and from Seattle to Portland is $1.5$ inches. If the actual distance from Seattle to Boise is $400$ miles, find the distance from Seattle to Portland. Enter the number of miles."
  answer="150"
  hint="Set up $\tfrac{x}{1.5} = \tfrac{400}{4}$ with miles on top and inches on the bottom, then solve for $x$."
>}}

We can also use similar figures to find heights that we cannot directly
measure.

**Example.** Tyler is $6$ feet tall. Late one afternoon his shadow was $8$
feet long. At the same time, the shadow of a tree was $24$ feet long. Find the
height of the tree.

Tyler and his shadow form a triangle similar to the one formed by the tree and
its shadow. Let $h$ be the height of the tree. The small triangle is similar
to the large triangle, so the corresponding sides are proportional:

$$
\begin{array}{lrcl}
\text{Translate.} & \tfrac{h}{24} &=& \tfrac{6}{8} \\[6pt]
\text{Solve.} & 24\!\left(\tfrac{h}{24}\right) &=& 24\!\left(\tfrac{6}{8}\right) \\[6pt]
\text{Simplify.} & h &=& 18
\end{array}
$$

Tyler's height is less than his shadow's length, so it makes sense that the
tree's height is less than the length of its shadow. The tree is $18$ feet
tall.

{{< fillin
  question="A telephone pole casts a shadow that is $50$ feet long. Nearby, an $8$-foot tall traffic sign casts a shadow that is $10$ feet long. How tall is the telephone pole? Enter the height in feet."
  answer="40"
  hint="Set up $\tfrac{h}{50} = \tfrac{8}{10}$ (height over shadow for each object), then solve for $h$."
>}}

## Key terms

**proportion** — an equation of the form $\tfrac{a}{b} = \tfrac{c}{d}$ (with
$b \neq 0$ and $d \neq 0$) stating that two ratios are equal; read "$a$ is to
$b$ as $c$ is to $d$." **proportional** — two quantities are proportional when
they are related by a proportion. **similar figures** — two figures with the
same shape but possibly different sizes, so their corresponding angles are
equal and their corresponding sides are in the same ratio.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.7: Solve Proportion and Similar Figure Applications](https://openstax.org/books/elementary-algebra-2e/pages/8-7-solve-proportion-and-similar-figure-applications) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked examples into aligned step tables and prose, recast the "How To" procedure as a proportion strategy paragraph, recreated the similar-triangle and map figures with the accessible `<Figure />` component; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
