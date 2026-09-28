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
**By the end of this section, you will be able to:**

- Solve proportions
- Solve similar figure applications
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
  answerForm="decimal"
  hint="Multiply both sides by the LCD to clear the fractions, then simplify."
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
  answerForm="decimal"
  hint="Multiply both sides by the LCD, remove the common factors, then solve for $b$."
>}}

When the variable appears in a sum inside a denominator, we clear the
fractions the same way and then distribute.

**Example.** Solve the proportion $\tfrac{n}{n+14} = \tfrac{5}{7}$.

The value $n = -14$ is excluded. Multiply both sides by the LCD, $7(n+14)$:

$$
\begin{array}{lrcl}
& \tfrac{n}{n+14} &=& \tfrac{5}{7} \\[6pt]
\text{Multiply both sides by the LCD.} & 7(n+14)\!\left(\tfrac{n}{n+14}\right) &=& 7(n+14)\!\left(\tfrac{5}{7}\right) \\[6pt]
\text{Remove common factors.} & 7n &=& 5(n+14) \\[4pt]
\text{Simplify.} & 7n &=& 5n + 70 \\[4pt]
\text{Solve for } n. & 2n &=& 70 \\[4pt]
& n &=& 35
\end{array}
$$

**Check.** Substitute $n = 35$:

$$\frac{35}{35+14} \overset{?}{=} \frac{5}{7}, \qquad \frac{35}{49} \overset{?}{=} \frac{5}{7}, \qquad \frac{5 \cdot 7}{7 \cdot 7} \overset{?}{=} \frac{5}{7}, \qquad \frac{5}{7} = \frac{5}{7}\ \checkmark$$

When the numerators are sums or differences, we clear the fractions the same
way and distribute.

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
  answerForm="decimal"
  hint="Multiply both sides by the LCD, distribute, then collect the $v$ terms on one side."
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
  answerForm="decimal"
  hint="Write a proportion with milliliters in both numerators and pounds in both denominators, then clear the fractions and solve."
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
  answerForm="decimal"
  hint="Write a proportion with calories in both numerators and ounces in both denominators, then clear the fractions, solve, and round."
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
\text{Simplify.} & p &=& 4{,}075.5
\end{array}
$$

Since \$100 would be $1{,}254$ pesos and \$325 is a little more than
$3$ times that, the answer is reasonable. Josiah got $4{,}075.5$ pesos for his
trip.

{{< fillin
  question="Yurianna is going to Europe and wants to change \$800 into Euros. At the current exchange rate, \$1 US is equal to $0.738$ Euro. How many Euros will she have for her trip? Enter the number of Euros."
  answer="590.4"
  answerForm="decimal"
  hint="Write a proportion with dollars in both numerators and Euros in both denominators, then clear the fractions and solve."
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
<svg role="img" aria-label="Two similar triangles side by side. The larger triangle ABC has vertex A at bottom left, C at bottom right, and B at the top; side AB is 12, side BC is 16, and side AC is 20. The smaller triangle XYZ, one quarter the size and the same shape, has vertex X at bottom left, Z at bottom right, and Y at the top; side XY is 3, side YZ is 4, and side XZ is 5." xmlns="http://www.w3.org/2000/svg" viewBox="0 30 334 132" width="334" height="132" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="130" x2="90" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <line x1="90" y1="58" x2="186" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <line x1="186" y1="130" x2="36" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <text x="55" y="92.5" text-anchor="end" font-size="13" fill="currentColor">12</text>
  <text x="144" y="90.5" text-anchor="start" font-size="13" fill="currentColor">16</text>
  <text x="111" y="150.5" text-anchor="middle" font-size="13" fill="currentColor">20</text>
  <text x="25.6" y="138.2" text-anchor="end" font-size="13" fill="currentColor">A</text>
  <text x="86.9" y="51.9" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <text x="196.6" y="137.6" text-anchor="start" font-size="13" fill="currentColor">C</text>
  <line x1="258" y1="130" x2="271.5" y2="112" stroke="currentColor" stroke-width="1.5"/>
  <line x1="271.5" y1="112" x2="295.5" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <line x1="295.5" y1="130" x2="258" y2="130" stroke="currentColor" stroke-width="1.5"/>
  <text x="256.8" y="119.5" text-anchor="end" font-size="13" fill="currentColor">3</text>
  <text x="289.5" y="117.5" text-anchor="start" font-size="13" fill="currentColor">4</text>
  <text x="276.8" y="150.5" text-anchor="middle" font-size="13" fill="currentColor">5</text>
  <text x="247.6" y="138.2" text-anchor="end" font-size="13" fill="currentColor">X</text>
  <text x="268.4" y="105.9" text-anchor="middle" font-size="13" fill="currentColor">Y</text>
  <text x="306.1" y="137.6" text-anchor="start" font-size="13" fill="currentColor">Z</text>
</svg>
</div>

{{< callout type="info" >}}
  **Property of Similar Triangles.** If $\triangle ABC$ is similar to
  $\triangle XYZ$, then their corresponding angle measures are equal and their
  corresponding sides are in the same ratio:

  $$m\angle A = m\angle X, \quad m\angle B = m\angle Y, \quad m\angle C = m\angle Z$$

  $$\frac{a}{x} = \frac{b}{y} = \frac{c}{z}$$

  Here $a$, $b$, and $c$ are the lengths of the sides opposite angles $A$,
  $B$, and $C$, and $x$, $y$, and $z$ are the lengths of the sides opposite
  angles $X$, $Y$, and $Z$.
{{< /callout >}}

To solve applications with similar figures, we follow the same
problem-solving strategy for geometry applications: read the problem and draw
the figure, identify and name what we are looking for, translate into an
equation using the proportional sides, solve, check, and answer in a complete
sentence.

**Example.** $\triangle ABC$ is similar to $\triangle XYZ$. The lengths of
two sides of each triangle are given. Find the lengths of the third sides.

<div class="ap-figure">
<svg role="img" aria-label="Two similar triangles side by side. The larger triangle ABC has vertex C at bottom left, B at bottom right, and A at the top; side AB is 4, side AC is 3.2, and the third side BC is labeled a. The smaller triangle XYZ has vertex Z at bottom left, Y at bottom right, and X at the top; side XY is 3, side YZ is 4.5, and the third side XZ is labeled y." xmlns="http://www.w3.org/2000/svg" viewBox="0 58 344 92" width="344" height="92" font-family="Helvetica, Arial, sans-serif">
  <line x1="86.4" y1="80.6" x2="156" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="156" y1="120" x2="36" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36" y1="120" x2="86.4" y2="80.6" stroke="currentColor" stroke-width="1.5"/>
  <text x="126.1" y="96.1" text-anchor="start" font-size="13" fill="currentColor">4</text>
  <text x="96" y="140.5" text-anchor="middle" font-size="13" font-style="italic" fill="currentColor">a</text>
  <text x="55" y="96.9" text-anchor="end" font-size="13" fill="currentColor">3.2</text>
  <text x="83.8" y="74.4" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <text x="166.8" y="126.7" text-anchor="start" font-size="13" fill="currentColor">B</text>
  <text x="25.3" y="127" text-anchor="end" font-size="13" fill="currentColor">C</text>
  <line x1="253.8" y1="90.4" x2="306" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="306" y1="120" x2="216" y2="120" stroke="currentColor" stroke-width="1.5"/>
  <line x1="216" y1="120" x2="253.8" y2="90.4" stroke="currentColor" stroke-width="1.5"/>
  <text x="284.8" y="101" text-anchor="start" font-size="13" fill="currentColor">3</text>
  <text x="261" y="140.5" text-anchor="middle" font-size="13" fill="currentColor">4.5</text>
  <text x="228.7" y="101.8" text-anchor="end" font-size="13" font-style="italic" fill="currentColor">y</text>
  <text x="251.2" y="84.2" text-anchor="middle" font-size="13" fill="currentColor">X</text>
  <text x="316.8" y="126.7" text-anchor="start" font-size="13" fill="currentColor">Y</text>
  <text x="205.3" y="127" text-anchor="end" font-size="13" fill="currentColor">Z</text>
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
  question="$\triangle ABC$ is similar to $\triangle XYZ$. In the smaller triangle $AB = 17$ and the unknown side $BC = a$; in the larger triangle the corresponding sides are $XY = 25.5$ and $YZ = 12$. Find the length of side $a$."
  answer="8"
  answerForm="decimal"
  hint="Write a proportion of corresponding sides, pairing $AB$ with $XY$ and $BC$ with $YZ$, then clear the fractions and solve."
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
  answerForm="decimal"
  hint="Write a proportion with miles in both numerators and inches in both denominators, then clear the fractions and solve."
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
  answerForm="decimal"
  hint="The pole and its shadow form a triangle similar to the sign and its shadow: write a proportion of height over shadow length for each, then solve."
>}}

## Key terms

**proportion** — an equation of the form $\tfrac{a}{b} = \tfrac{c}{d}$ (with
$b \neq 0$ and $d \neq 0$) stating that two ratios are equal; read "$a$ is to
$b$ as $c$ is to $d$." **proportional** — two quantities are proportional when
they are related by a proportion. **similar figures** — two figures with the
same shape but possibly different sizes, so their corresponding angles are
equal and their corresponding sides are in the same ratio.

## Practice

### Solve proportions

{{< fillin
  question="Solve the proportion $\tfrac{x}{56} = \tfrac{7}{8}$."
  answer="49"
  answerForm="decimal"
  hint="Multiply both sides by the LCD to isolate $x$, then simplify."
>}}

{{< fillin
  question="Solve the proportion $\tfrac{98}{154} = \tfrac{-7}{p}$."
  answer="-11"
  answerForm="decimal"
  hint="Multiply both sides by the LCD, remove the common factors, then solve for $p$."
>}}

{{< fillin
  question="Janice is traveling to Canada and will change \$250 US dollars into Canadian dollars. At the current exchange rate, \$1 US is equal to $1.01$ Canadian dollars. How many Canadian dollars will she get for her trip? Enter the number of Canadian dollars."
  answer="252.5"
  answerForm="decimal"
  answerDisplay="$252.50$ Canadian dollars"
  hint="Write a proportion with US dollars in both numerators and Canadian dollars in both denominators, then clear the fractions and solve."
>}}

{{< fillin
  question="Karen eats $\tfrac{1}{2}$ cup of oatmeal that counts for $2$ points on her weight-loss program. Her husband, Joe, can have $3$ points of oatmeal for breakfast. How much oatmeal can he have? Enter the amount in cups as a fraction in lowest terms."
  answer="\tfrac{3}{4}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{3}{4}$ cup"
  hint="Write a proportion with cups in both numerators and points in both denominators, then clear the fractions and solve."
>}}

### Solve similar figure applications

{{< fillin
  question="A $2$-foot-tall dog casts a $3$-foot shadow at the same time a cat casts a $1$-foot shadow. How tall is the cat? Enter the height in feet as a fraction in lowest terms."
  answer="\tfrac{2}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{2}{3}$ foot (8 inches)"
  hint="The two animals and their shadows form similar triangles: write a proportion of height over shadow length for each, then solve."
>}}

{{< fillin
  question="The tower portion of a windmill is $212$ feet tall. A six foot tall person standing next to the tower casts a seven foot shadow. How long is the windmill's shadow? Round to the nearest tenth and enter the length in feet."
  answer="247.3"
  answerForm="decimal"
  answerDisplay="$247.3$ feet"
  hint="The tower and the person, with their shadows, form similar triangles: write a proportion of height over shadow length for each, then solve and round."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.7: Solve Proportion and Similar Figure Applications](https://openstax.org/books/elementary-algebra-2e/pages/8-7-solve-proportion-and-similar-figure-applications) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked examples into aligned step tables and prose, stated the "Solve geometry applications" procedure as a strategy sentence, redrew the two pairs of similar triangles as accessible inline figures, and gave the measurements of the map, shadow, and similar-triangle Try It figures in the text in place of those figures; omitted the Be Prepared quiz, Key Concepts summary, Self Check checklist, media links, and unselected end-of-section exercises; adapted selected end-of-section "Practice Makes Perfect" exercises into the interactive Practice block; and converted selected practice problems ("Try Its") into interactive exercises with instant feedback.</small>
