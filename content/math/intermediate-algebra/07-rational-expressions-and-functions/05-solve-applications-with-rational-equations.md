---
title: Solve Applications with Rational Equations
description: >-
  Solving proportions, similar-figure, uniform-motion, work, direct-variation,
  and inverse-variation applications with rational equations — adapted from
  OpenStax Intermediate Algebra 2e, Section 7.5.
source_section: "7.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve proportions, solve
  similar-figure applications, solve uniform-motion applications, solve work
  applications, solve direct-variation problems, and solve inverse-variation
  problems.
{{< /callout >}}

## Solve proportions

When two rational expressions are equal, the equation relating them is called
a **proportion**.

{{< callout type="info" >}}
  **Proportion.** A proportion is an equation of the form
  $\tfrac{a}{b}=\tfrac{c}{d}$, where $b\ne0$ and $d\ne0$. It is read “$a$ is
  to $b$ as $c$ is to $d$.”
{{< /callout >}}

The equation $\tfrac{1}{2}=\tfrac{4}{8}$ is a proportion because the two
fractions are equal. Since a proportion is an equation with rational
expressions, we solve it as we solved rational equations: multiply both sides
by the LCD to clear the fractions, then solve the resulting equation.

**Example.** Solve $\tfrac{n}{n+14}=\tfrac{5}{7}$.

The restriction is $n\ne-14$.

$$
\begin{array}{lrcl}
\text{Multiply both sides by the LCD.} & 7(n+14)\left(\tfrac{n}{n+14}\right) &=& 7(n+14)\left(\tfrac{5}{7}\right) \\[10pt]
\text{Remove common factors.} & 7n &=& 5(n+14) \\[4pt]
\text{Distribute.} & 7n &=& 5n+70 \\[4pt]
\text{Solve.} & 2n &=& 70 \\[4pt]
&& n=& 35
\end{array}
$$

Checking gives $\tfrac{35}{35+14}=\tfrac{35}{49}=\tfrac{5}{7}$.

{{< fillin
  question="Solve the proportion $\tfrac{y}{y+55}=\tfrac{3}{8}$."
  answer="33"
  hint="Multiply by the LCD $8(y+55)$ and solve for $y$."
>}}

{{< fillin
  question="Solve the proportion $\tfrac{z}{z-84}=-\tfrac{1}{5}$."
  answer="14"
  hint="Multiply by the LCD $5(z-84)$ and solve for $z$."
>}}

Clearing the fractions in $\tfrac{a}{b}=\tfrac{c}{d}$ gives $ad=bc$, the
same result as cross-multiplying.

When solving applications with proportions, we use our usual application
strategy. The units in the numerators must match one another, and the units in
the denominators must match one another.

**Example.** Pediatricians prescribe 5 milliliters (ml) of acetaminophen for
every 25 pounds of a child’s weight. If Zoe weighs 80 pounds, how many
milliliters will her doctor prescribe?

Let $a$ be the milliliters of acetaminophen. Keep milliliters in the numerators
and pounds in the denominators:

$$
\begin{array}{lrcl}
\text{Translate into a proportion.} & \tfrac{5}{25} &=& \tfrac{a}{80} \\[10pt]
\text{Multiply by the LCD, }400. & 400\left(\tfrac{5}{25}\right) &=& 400\left(\tfrac{a}{80}\right) \\[10pt]
\text{Simplify.} & 16\cdot5 &=& 5a \\[4pt]
\text{Solve.} & 16 &=& a
\end{array}
$$

Since 80 is about three times 25, about three times as much medicine is
reasonable. Substitution gives $\tfrac{5}{25}=\tfrac{16}{80}=\tfrac{1}{5}$.
The pediatrician would prescribe 16 ml of acetaminophen to Zoe.

{{< fillin
  question="Pediatricians prescribe 5 ml of acetaminophen for every 25 pounds of a child’s weight. How many ml will a doctor prescribe for Emilia, who weighs 60 pounds?"
  answer="12"
  hint="Set up a proportion with milliliters in the numerators and pounds in the denominators."
>}}

{{< fillin
  question="For every 1 kg of a child’s weight, pediatricians prescribe 15 mg of a fever reducer. If Isabella weighs 12 kg, how many mg will the pediatrician prescribe?"
  answer="180"
  hint="Use the proportion $\tfrac{15\text{ mg}}{1\text{ kg}}=\tfrac{x\text{ mg}}{12\text{ kg}}$."
>}}

## Solve similar-figure applications

When you shrink or enlarge a photo, find a distance on a map, or use a pattern
to build or sew something, you work with **similar figures**. Similar figures
have exactly the same shape but different sizes; one is a scale model of the
other.

{{< callout type="info" >}}
  **Similar figures.** Two figures are similar if the measures of their
  corresponding angles are equal and their corresponding sides have the same
  ratio.
{{< /callout >}}

For example, a triangle with side lengths 12, 16, and 20 is similar to a
triangle with corresponding side lengths 3, 4, and 5. Each side of the larger
triangle is four times the corresponding side of the smaller triangle:

$$\frac{16}{4}=\frac{20}{5}=\frac{12}{3}.$$

{{< callout type="info" >}}
  **Property of Similar Triangles.** If $\triangle ABC$ is similar to
  $\triangle XYZ$, corresponding angles have equal measures and corresponding
  sides have the same ratio. If the corresponding sides are $a,x$; $b,y$; and
  $c,z$, then

  $$\frac{a}{x}=\frac{b}{y}=\frac{c}{z}.$$
{{< /callout >}}

**Example.** On a map, San Francisco, Las Vegas, and Los Angeles form a
triangle. The map distances are 2.1 inches from San Francisco to Las Vegas,
1.3 inches from San Francisco to Los Angeles, and 1 inch from Los Angeles to
Las Vegas. The actual distance from Los Angeles to Las Vegas is 270 miles.
Find the actual distance from Los Angeles to San Francisco.

Let $x$ be the distance from Los Angeles to San Francisco. Keep miles in the
numerators and inches in the denominators:

$$
\begin{array}{lrcl}
\text{Write a proportion of corresponding sides.} & \tfrac{x}{1.3} &=& \tfrac{270}{1} \\[10pt]
\text{Multiply by }1.3. & x &=& 351
\end{array}
$$

On the map, Los Angeles to San Francisco is longer than Los Angeles to Las
Vegas; 351 miles is correspondingly more than 270 miles. The actual distance
is 351 miles.

For the next two checks, a map shows Seattle, Portland, and Boise forming a
triangle. The map distances are 1.5 inches from Seattle to Portland, 3.5
inches from Portland to Boise, and 4 inches from Seattle to Boise. The actual
distance from Seattle to Boise is 400 miles.

{{< fillin
  question="Using the Seattle–Portland–Boise map measurements above, find the actual distance in miles from Seattle to Portland."
  answer="150"
  hint="Use $\tfrac{x}{1.5}=\tfrac{400}{4}$."
>}}

{{< fillin
  question="Using the Seattle–Portland–Boise map measurements above, find the actual distance in miles from Portland to Boise."
  answer="350"
  hint="Use $\tfrac{x}{3.5}=\tfrac{400}{4}$."
>}}

Similar figures can also find heights we cannot directly measure.

**Example.** Tyler is 6 feet tall, and his shadow is 8 feet long. At the same
time, a tree’s shadow is 24 feet long. Find the tree’s height.

The person and tree form similar right triangles with their shadows. Let $h$
be the height of the tree.

$$
\begin{array}{lrcl}
\text{Write a proportion of height to shadow.} & \tfrac{h}{24} &=& \tfrac{6}{8} \\[10pt]
\text{Multiply by }24. & h &=& 18
\end{array}
$$

Tyler’s height is less than his shadow, so it makes sense that the tree’s
height is less than its shadow. The tree is 18 feet tall.

{{< fillin
  question="A telephone pole casts a 50-foot shadow while an 8-foot traffic sign casts a 10-foot shadow. How tall is the telephone pole, in feet?"
  answer="40"
  hint="The height-to-shadow ratios are equal."
>}}

{{< fillin
  question="A pine tree casts an 80-foot shadow while a 30-foot building casts a 40-foot shadow. How tall is the pine tree, in feet?"
  answer="60"
  hint="Set $\tfrac{h}{80}=\tfrac{30}{40}$."
>}}

## Solve uniform-motion applications

Uniform motion uses $D=rt$. If distance $D$ and rate $r$ are known and time
$t$ is needed, solve for time: $t=\tfrac{D}{r}$. A table organizes rate, time,
and distance.

**Example.** An airplane flies 200 miles into a 30-mph headwind in the same
time it flies 300 miles with a 30-mph tailwind. Find the airplane’s speed.

Let $r$ be the airplane’s speed. The headwind rate is $r-30$ and the tailwind
rate is $r+30$.

| Trip | Rate | Time | Distance |
| :--- | :---: | :---: | :---: |
| Headwind | $r-30$ | $\tfrac{200}{r-30}$ | 200 |
| Tailwind | $r+30$ | $\tfrac{300}{r+30}$ | 300 |

The times are equal:

$$
\begin{array}{lrcl}
\text{Write the time equation.} & \tfrac{200}{r-30} &=& \tfrac{300}{r+30} \\[10pt]
\text{Clear the denominators.} & 200(r+30) &=& 300(r-30) \\[4pt]
\text{Distribute.} & 200r+6{,}000 &=& 300r-9{,}000 \\[4pt]
\text{Solve.} & 15{,}000 &=& 100r \\[4pt]
&& r=&150
\end{array}
$$

With the tailwind the rate is 180 mph and time is $\tfrac{300}{180}=\tfrac53$
hours. Against the wind the rate is 120 mph and time is
$\tfrac{200}{120}=\tfrac53$ hours. The plane’s speed is 150 mph.

{{< fillin
  question="Link rides 20 miles into a 3-mph headwind in the same time he rides 30 miles with a 3-mph tailwind. What is his biking speed in mph?"
  answer="15"
  hint="Set $\tfrac{20}{r-3}=\tfrac{30}{r+3}$."
>}}

{{< fillin
  question="A river flows at 7 mph. Danica motors 5 miles upstream in the same time she motors 12 miles downstream. What is her boat’s speed in still water, in mph?"
  answer="17"
  hint="Set $\tfrac{5}{r-7}=\tfrac{12}{r+7}$."
>}}

**Example.** Jazmine trained for 3 hours. She ran 8 miles and then biked 24
miles. Her biking speed was 4 mph faster than her running speed. Find her
running speed.

Let $r$ be her running speed, so $r+4$ is her biking speed.

| Activity | Rate | Time | Distance |
| :--- | :---: | :---: | :---: |
| Run | $r$ | $\tfrac{8}{r}$ | 8 |
| Bike | $r+4$ | $\tfrac{24}{r+4}$ | 24 |

Her running time plus biking time is 3 hours:

$$
\begin{array}{lrcl}
\text{Write the equation.} & \tfrac{8}{r}+\tfrac{24}{r+4} &=& 3 \\[10pt]
\text{Multiply both sides by the LCD.} & r(r+4)\left(\tfrac{8}{r}+\tfrac{24}{r+4}\right) &=& 3r(r+4) \\[10pt]
\text{Distribute and remove common factors.} & 8(r+4)+24r &=& 3r(r+4) \\[4pt]
\text{Distribute.} & 8r+32+24r &=& 3r^2+12r \\[4pt]
\text{Collect like terms.} & 32+32r &=& 3r^2+12r \\[4pt]
\text{Write in standard form.} & 0 &=& 3r^2-20r-32 \\[4pt]
\text{Factor.} & 0 &=& (3r+4)(r-8) \\[4pt]
\text{Use the Zero Product Property.} & 3r+4=0 &\text{or}& r-8=0 \\[4pt]
\text{Solve.} & r=-\tfrac43 &\text{or}& r=8
\end{array}
$$

A negative speed does not make sense, so $r=8$. Running 8 miles at 8 mph takes
1 hour; biking 24 miles at 12 mph takes 2 hours. Jazmine’s running speed is 8
mph.

{{< fillin
  question="Dennis skied 20 miles uphill and 20 miles downhill in 6 hours. His uphill speed was 5 mph slower than his downhill speed. Enter his uphill and downhill speeds, separated by commas."
  answer="5, 10"
  answerDisplay="$5,10$ mph"
  hint="Let $r$ be the uphill speed, so the downhill speed is $r+5$, and set $\tfrac{20}{r}+\tfrac{20}{r+5}=6$."
>}}

{{< fillin
  question="Joon drove for 4 hours: 208 miles on the interstate and 40 miles on country roads. His interstate speed was 15 mph faster. What was his country-road speed in mph?"
  answer="50"
  hint="Let $r$ be the country-road speed and set $\tfrac{208}{r+15}+\tfrac{40}{r}=4$."
>}}

**Example.** Hamilton biked downhill 12 miles to the ocean and uphill 12 miles
home. His uphill speed was 8 mph slower, and the return took 2 hours longer.
Find his downhill speed.

Let $h$ be the downhill speed, so $h-8$ is the uphill speed.

| Trip | Rate | Time | Distance |
| :--- | :---: | :---: | :---: |
| Downhill | $h$ | $\tfrac{12}{h}$ | 12 |
| Uphill | $h-8$ | $\tfrac{12}{h-8}$ | 12 |

The uphill time is 2 hours more than the downhill time:

$$
\begin{array}{lrcl}
\text{Write the equation.} & \tfrac{12}{h-8} &=& \tfrac{12}{h}+2 \\[10pt]
\text{Multiply both sides by the LCD.} & h(h-8)\left(\tfrac{12}{h-8}\right) &=& h(h-8)\left(\tfrac{12}{h}+2\right) \\[10pt]
\text{Distribute and remove common factors.} & 12h &=& 12(h-8)+2h(h-8) \\[4pt]
\text{Distribute.} & 12h &=& 12h-96+2h^2-16h \\[4pt]
\text{Write in standard form.} & 0 &=& 2h^2-16h-96 \\[4pt]
\text{Factor out the GCF.} & 0 &=& 2(h^2-8h-48) \\[4pt]
\text{Factor the trinomial.} & 0 &=& 2(h-12)(h+4) \\[4pt]
\text{Use the Zero Product Property.} & h-12=0 &\text{or}& h+4=0 \\[4pt]
\text{Solve.} & h=12 &\text{or}& h=-4
\end{array}
$$

At 12 mph downhill, the trip takes 1 hour; at 4 mph uphill, it takes 3 hours.
Hamilton’s downhill speed is 12 mph.

{{< fillin
  question="Kayla biked 75 miles home and took a bus back. The bus trip took 2 hours less and the bus was 10 mph faster. Find Kayla’s biking speed in mph."
  answer="15"
  hint="Let $r$ be her biking speed and set $\tfrac{75}{r+10}=\tfrac{75}{r}-2$."
>}}

{{< fillin
  question="Victoria jogs 12 miles on a flat trail and returns on a 20-mile hilly trail. She is 1 mph slower on the hilly trail, and the return takes 2 hours longer. Find her flat-trail speed in mph."
  answer="6"
  hint="Let $r$ be the flat-trail speed and set $\tfrac{20}{r-1}=\tfrac{12}{r}+2$."
>}}

## Solve work applications

Suppose Press 1 completes a job in 6 hours and Press 2 completes it in 12
hours. In one hour they complete $\tfrac16$ and $\tfrac1{12}$ of the job. If
$t$ is the time together, they complete $\tfrac1t$ of the job per hour.

| Worker | Hours to complete job | Part completed per hour |
| :--- | :---: | :---: |
| Press 1 | 6 | $\tfrac16$ |
| Press 2 | 12 | $\tfrac1{12}$ |
| Together | $t$ | $\tfrac1t$ |

The part completed by Press 1 plus the part completed by Press 2 equals the
part completed together:

$$
\begin{array}{lrcl}
\text{Write the equation.} & \tfrac16+\tfrac1{12} &=& \tfrac1t \\[10pt]
\text{Multiply by the LCD, }12t. & 2t+t &=& 12 \\[4pt]
\text{Solve.} & t &=& 4
\end{array}
$$

Both presses take 4 hours, less than either press working alone.

**Example.** Pete can paint a room in 10 hours and Alicia can paint it in 8
hours. How long will they take together?

| Worker | Hours to complete job | Part completed per hour |
| :--- | :---: | :---: |
| Pete | 10 | $\tfrac1{10}$ |
| Alicia | 8 | $\tfrac18$ |
| Together | $t$ | $\tfrac1t$ |

$$
\begin{array}{lrcl}
\text{Add their hourly work rates.} & \tfrac1{10}+\tfrac18 &=& \tfrac1t \\[10pt]
\text{Multiply by }40t. & 4t+5t &=& 40 \\[4pt]
\text{Solve.} & t &=& \tfrac{40}{9}=4\tfrac49
\end{array}
$$

Since $\tfrac49(60)\approx27$, it would take about 4 hours and 27 minutes.

{{< fillin
  question="One gardener mows a golf course in 4 hours and another in 6 hours. How many hours will they take together?"
  answer="\frac{12}{5}"
  answerDisplay="$2\tfrac{2}{5}$ hours (2 hours 24 minutes)"
  hint="Set $\tfrac14+\tfrac16=\tfrac1t$."
>}}

{{< fillin
  question="Daria weeds a garden in 7 hours and her mother in 3 hours. How many hours will they take together?"
  answer="\frac{21}{10}"
  answerDisplay="$2\tfrac{1}{10}$ hours (2 hours 6 minutes)"
  hint="Set $\tfrac17+\tfrac13=\tfrac1t$."
>}}

**Example.** Ra’shon can clean a house in 7 hours. With his sister, the job
takes 3 hours. How long does his sister take alone?

| Worker | Hours to complete job | Part completed per hour |
| :--- | :---: | :---: |
| Ra’shon | 7 | $\tfrac17$ |
| Sister | $s$ | $\tfrac1s$ |
| Together | 3 | $\tfrac13$ |

$$
\begin{array}{lrcl}
\text{Write the work equation.} & \tfrac17+\tfrac1s &=& \tfrac13 \\[10pt]
\text{Multiply by }21s. & 3s+21 &=& 7s \\[4pt]
\text{Solve.} & s &=& \tfrac{21}{4}=5\tfrac14
\end{array}
$$

One quarter of an hour is 15 minutes, so Ra’shon’s sister takes 5 hours and 15
minutes alone.

{{< fillin
  question="Alice paints a room in 6 hours. With Kristina, it takes 4 hours. How many hours would Kristina take alone?"
  answer="12"
  hint="Set $\tfrac16+\tfrac1k=\tfrac14$."
>}}

{{< fillin
  question="Tracy lays a slab in 3 hours. With Jordan, it takes 2 hours. How many hours would Jordan take alone?"
  answer="6"
  hint="Set $\tfrac13+\tfrac1j=\tfrac12$."
>}}

## Solve direct-variation problems

When two quantities are related by a proportion, they are proportional. If
Lindsay earns \$15 per hour, her salary $s$ after $h$ hours is $s=15h$.
Her salary varies directly with the hours worked.

{{< callout type="info" >}}
  **Direct variation.** For variables $x$ and $y$, $y$ varies directly with
  $x$ if

  $$y=kx,\qquad k\ne0.$$

  The constant $k$ is the constant of variation.
{{< /callout >}}

{{< callout type="info" >}}
  **Solve direct-variation problems.**

  1. Write the formula for direct variation.
  2. Substitute the given values for the variables.
  3. Solve for the constant of variation.
  4. Write the equation relating $x$ and $y$ using the constant of variation.
{{< /callout >}}

**Example.** The calories $c$ Raoul burns on a treadmill vary directly with
the minutes $m$. He burned 315 calories in 18 minutes. (a) Write the equation
relating $c$ and $m$. (b) How many calories would he burn in 25 minutes?

$$
\begin{array}{lrcl}
\text{Use }c\text{ in place of }y\text{ and }m\text{ in place of }x. & c &=& km \\[4pt]
\text{Substitute the known pair.} & 315 &=& 18k \\[4pt]
\text{Find the constant.} & k &=& 17.5 \\[4pt]
\text{Write the variation equation.} & c &=& 17.5m \\[4pt]
\text{Evaluate at }m=25. & c &=& 17.5(25)=437.5
\end{array}
$$

Raoul would burn 437.5 calories in 25 minutes.

{{< fillin
  question="Calories $c$ vary directly with exercise time $t$. Arnold burned 312 calories in 65 minutes. Enter the equation relating $c$ and $t$ as an expression for $c$."
  answer="\frac{24}{5}t"
  answerDisplay="$c=4.8t$"
  hint="Use $c=kt$ and solve $312=65k$."
>}}

{{< fillin
  question="Using Arnold’s equation from the previous check, how many calories would he burn in 90 minutes?"
  answer="432"
  hint="Substitute $t=90$ into $c=4.8t$."
>}}

{{< fillin
  question="Distance $d$ varies directly with time $t$. A train travels 100 miles in 2 hours. Enter the equation relating $d$ and $t$ as an expression for $d$."
  answer="50t"
  answerDisplay="$d=50t$"
  hint="Use $d=kt$ and solve $100=2k$."
>}}

{{< fillin
  question="Using the train equation from the previous check, how many miles will it travel in 5 hours?"
  answer="250"
  hint="Substitute $t=5$ into $d=50t$."
>}}

## Solve inverse-variation problems

Many applications have variables that vary inversely: as one increases, the
other decreases.

{{< callout type="info" >}}
  **Inverse variation.** For variables $x$ and $y$, $y$ varies inversely with
  $x$ if

  $$y=\frac{k}{x},\qquad k\ne0.$$

  The constant $k$ is the constant of variation.
{{< /callout >}}

The word *inverse* refers to the multiplicative inverse; the multiplicative
inverse of $x$ is $\tfrac1x$.

{{< callout type="info" >}}
  **Solve inverse-variation problems.**

  1. Write the formula for inverse variation.
  2. Substitute the given values for the variables.
  3. Solve for the constant of variation.
  4. Write the equation relating $x$ and $y$ using the constant of variation.
{{< /callout >}}

**Example.** A guitar string’s frequency varies inversely with its length. A
26-inch string has a frequency of 440 vibrations per second. (a) Write the
equation of variation. (b) Find the frequency when its length is 20 inches.

Let $f$ be frequency and $L$ be length.

$$
\begin{array}{lrcl}
\text{Write the inverse-variation formula.} & f &=& \tfrac{k}{L} \\[10pt]
\text{Substitute the known pair.} & 440 &=& \tfrac{k}{26} \\[10pt]
\text{Find the constant.} & k &=& 11{,}440 \\[4pt]
\text{Write the variation equation.} & f &=& \tfrac{11{,}440}{L} \\[10pt]
\text{Evaluate at }L=20. & f &=& \tfrac{11{,}440}{20}=572
\end{array}
$$

A 20-inch guitar string has a frequency of 572 vibrations per second.

{{< fillin
  question="The hours $h$ for ice to melt vary inversely with temperature $t$. Ice melts in 2 hours at 65°C. Enter the equation relating $h$ and $t$ as an expression for $h$."
  answer="\frac{130}{t}"
  answerDisplay="$h=\tfrac{130}{t}$"
  hint="Use $h=\tfrac{k}{t}$ and substitute $h=2$, $t=65$."
>}}

{{< fillin
  question="Using the ice-melting equation above, how many hours will the same ice take to melt at 78°C?"
  answer="\frac{5}{3}"
  answerDisplay="$1\tfrac{2}{3}$ hours"
  hint="Substitute $t=78$ into $h=\tfrac{130}{t}$."
>}}

{{< fillin
  question="Daily demand $x$ varies inversely with price $p$. At a price of \$5, demand is 700 units. Enter the equation relating $x$ and $p$ as an expression for $x$."
  answer="\frac{3500}{p}"
  answerDisplay="$x=\tfrac{3{,}500}{p}$"
  hint="Use $x=\tfrac{k}{p}$ and substitute $x=700$, $p=5$."
>}}

{{< fillin
  question="Using the demand equation above, what is the demand when the price is \$7?"
  answer="500"
  hint="Substitute $p=7$ into $x=\tfrac{3{,}500}{p}$."
>}}

## Key terms

**proportion** — an equation stating that two ratios are equal. **similar
figures** — figures whose corresponding angles are equal and whose
corresponding sides have the same ratio. **direct variation** — a relationship
of the form $y=kx$. **constant of variation** — the constant $k$ in a direct-
or inverse-variation equation. **inverse variation** — a relationship of the
form $y=\tfrac{k}{x}$.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 7.5: Solve Applications with Rational Equations](https://openstax.org/books/intermediate-algebra-2e/pages/7-5-solve-applications-with-rational-equations) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the source’s application charts as accessible tables and described its map, shadow, and motion diagrams in text while preserving all measurements; omitted the Be Prepared quiz, media link, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
