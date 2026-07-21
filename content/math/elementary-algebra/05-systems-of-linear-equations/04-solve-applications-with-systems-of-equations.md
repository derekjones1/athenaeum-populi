---
title: Solve Applications with Systems of Equations
description: >-
  Translating word problems into a system of two equations in two variables,
  then using that system to solve direct-translation, geometry, and
  uniform-motion applications — adapted from OpenStax Elementary Algebra 2e,
  Section 5.4.
source_section: "5.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** translate to a system
  of equations, solve direct translation applications, solve geometry
  applications, and solve uniform motion applications.
{{< /callout >}}

{{< callout type="info" >}}
  **Use a problem-solving strategy for systems of linear equations.**

  1. **Read** the problem. Make sure all the words and ideas are understood.
  2. **Identify** what we are looking for.
  3. **Name** what we are looking for. Choose variables to represent those
     quantities.
  4. **Translate** into a system of equations.
  5. **Solve** the system of equations using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

## Translate to a System of Equations

Many of the problems we solved in earlier applications related two
quantities. Here are two examples from
[Use a Problem-Solving Strategy](/math/elementary-algebra/03-math-models/01-use-a-problem-solving-strategy):

- The sum of two numbers is negative fourteen. One number is four less than
  the other. Find the numbers.
- A married couple together earns \$110,000 a year. The wife earns \$16,000
  less than twice what her husband earns. What does the husband earn?

In that chapter we translated each situation into *one* equation using only
one variable. Now that we can solve systems of equations, let's translate
these same two problems into a system of *two* equations in *two* variables.
We'll focus on Steps 1 through 4 of our problem-solving strategy.

**Example.** Translate to a system of equations: the sum of two numbers is
negative fourteen. One number is four less than the other. Find the
numbers.

This is a number problem, and we are looking for two numbers. Let $m =$ one
number and $n =$ the second number.

"The sum of the numbers is negative fourteen" translates to one equation,
and "one number is four less than the other" translates to the second:

$$
\begin{cases}
m + n = -14 \\
m = n - 4
\end{cases}
$$

{{< fillin
  question="Translate to a system of equations and then solve: the sum of two numbers is negative twenty-three. One number is 7 less than the other. Find the smaller number."
  answer="-15"
  hint="Let n = the larger number, so $n - 7$ = the smaller number. The system is $n + (n - 7) = -23$. Solve for n, then find $n - 7$."
>}}

**Example.** Translate to a system of equations: a married couple together
earns \$110,000 a year. The wife earns \$16,000 less than twice what her
husband earns. What does the husband earn?

We are looking for the amount that the husband and wife each earn. Let
$h =$ the amount the husband earns and $w =$ the amount the wife earns.

"A married couple together earns \$110,000" translates to one equation, and
"the wife earns \$16,000 less than twice what her husband earns" translates
to the second:

$$
\begin{cases}
w + h = 110{,}000 \\
w = 2h - 16{,}000
\end{cases}
$$

{{< fillin
  question="Translate to a system of equations and then solve: a couple has a total household income of \$84,000. The husband earns \$18,000 less than twice what the wife earns. How much does the wife earn, in dollars?"
  answer="34000"
  answerDisplay="\$34,000"
  hint="Let h = the husband's earnings and w = the wife's earnings. The system is $h + w = 84{,}000$ and $h = 2w - 18{,}000$. Substitute and solve for w."
>}}

## Solve Direct Translation Applications

We just set up, but did not solve, the systems of equations in the two
examples above. Now we'll translate a situation to a system of equations
and then solve it, using all seven steps of the strategy.

**Example.** Devon is 26 years older than his son Cooper. The sum of their
ages is 50. Find their ages.

We are looking for the ages of Devon and Cooper. Let $d =$ Devon's age and
$c =$ Cooper's age.

"Devon is 26 years older than Cooper" translates to $d = c + 26$. "The sum
of their ages is 50" translates to $d + c = 50$:

$$
\begin{cases}
d = c + 26 \\
d + c = 50
\end{cases}
$$

We solve by substitution. Substitute $c + 26$ for $d$ in the second
equation:

$$
\begin{array}{lrcl}
& (c + 26) + c &=& 50 \\[4pt]
\text{Combine like terms.} & 2c + 26 &=& 50 \\[4pt]
\text{Subtract 26 from each side.} & 2c &=& 24 \\[4pt]
\text{Divide each side by 2.} & c &=& 12
\end{array}
$$

Substituting $c = 12$ into the first equation gives $d = 12 + 26 = 38$.

Check: is Devon's age 26 more than Cooper's? $12 + 26 = 38$. ✓ Is the sum of
their ages 50? $38 + 12 = 50$. ✓ Devon is 38 years old and Cooper is 12
years old.

{{< fillin
  question="Ali is 12 years older than his youngest sister, Jameela. The sum of their ages is 40. Find Jameela's age."
  answer="14"
  hint="Let a = Ali's age and j = Jameela's age. The system is $a = j + 12$ and $a + j = 40$. Substitute and solve for j."
>}}

**Example.** When Jenna spent 10 minutes on the elliptical trainer and then
did circuit training for 20 minutes, her fitness app said she burned 278
calories. When she spent 20 minutes on the elliptical trainer and 30
minutes circuit training she burned 473 calories. How many calories does
she burn for each minute on the elliptical trainer? How many calories does
she burn for each minute of circuit training?

We are looking for the number of calories burned each minute on the
elliptical trainer and each minute of circuit training. Let $e =$ calories
burned per minute on the elliptical trainer and $c =$ calories burned per
minute of circuit training.

Each workout gives us one equation relating the two rates:

$$
\begin{cases}
10e + 20c = 278 \\
20e + 30c = 473
\end{cases}
$$

We solve by elimination. Multiply the first equation by $-2$ so the
$e$-terms cancel when we add:

$$
\begin{array}{rcl}
-20e - 40c &=& -556 \\
20e + 30c &=& 473 \\
\hline
-10c &=& -83
\end{array}
$$

So $c = 8.3$. Substituting $c = 8.3$ into the first equation:

$$
\begin{array}{lrcl}
& 10e + 20(8.3) &=& 278 \\[4pt]
\text{Simplify.} & 10e + 166 &=& 278 \\[4pt]
\text{Subtract 166 from each side.} & 10e &=& 112 \\[4pt]
\text{Divide each side by 10.} & e &=& 11.2
\end{array}
$$

Check: $10(11.2) + 20(8.3) = 112 + 166 = 278$ ✓, and
$20(11.2) + 30(8.3) = 224 + 249 = 473$ ✓. Jenna burns 11.2 calories per
minute on the elliptical trainer and 8.3 calories per minute of circuit
training.

{{< fillin
  question="Mark went to the gym and did 40 minutes of Bikram hot yoga and 10 minutes of jumping jacks. He burned 510 calories. The next time he went to the gym, he did 30 minutes of Bikram hot yoga and 20 minutes of jumping jacks, burning 470 calories. How many calories were burned for each minute of jumping jacks?"
  answer="7"
  hint="Let y = calories burned per minute of yoga and j = calories burned per minute of jumping jacks. Set up $40y + 10j = 510$ and $30y + 20j = 470$, then solve the system for j."
>}}

## Solve Geometry Applications

When we learned about geometry applications earlier, we solved them using
properties of triangles and rectangles. Now we'll add some properties of
angles. The measures of two **complementary angles** add to $90$ degrees.
The measures of two **supplementary angles** add to $180$ degrees.

{{< callout type="info" >}}
  **Complementary and supplementary angles.** Two angles are
  **complementary** if the sum of the measures of their angles is $90$
  degrees. Two angles are **supplementary** if the sum of the measures of
  their angles is $180$ degrees.

  If two angles are complementary, we say that one angle is *the complement*
  of the other. If two angles are supplementary, we say that one angle is
  *the supplement* of the other.
{{< /callout >}}

**Example.** The difference of two complementary angles is 26 degrees. Find
the measures of the angles.

We are looking for the measure of each angle. Let $x =$ the measure of the
first angle and $y =$ the measure of the second angle.

"The angles are complementary" translates to $x + y = 90$. "The difference
of the two angles is 26 degrees" translates to $x - y = 26$:

$$
\begin{cases}
x + y = 90 \\
x - y = 26
\end{cases}
$$

We solve by elimination — the $y$-terms already have opposite coefficients,
so we just add the equations:

$$
\begin{array}{rcl}
x + y &=& 90 \\
x - y &=& 26 \\
\hline
2x &=& 116
\end{array}
$$

So $x = 58$. Substituting $x = 58$ into $x + y = 90$ gives $58 + y = 90$, so
$y = 32$.

Check: $58 + 32 \overset{?}{=} 90$, and indeed $90 = 90$. ✓
$58 - 32 \overset{?}{=} 26$, and indeed $26 = 26$. ✓ The angle measures are
58 degrees and 32 degrees.

{{< fillin
  question="The difference of two complementary angles is 20 degrees. Find the measure of the larger angle."
  answer="55"
  hint="Let x and y be the two angle measures. The system is $x + y = 90$ and $x - y = 20$. Add the equations to solve for x."
>}}

**Example.** Two angles are supplementary. The measure of the larger angle
is twelve degrees less than five times the measure of the smaller angle.
Find the measures of both angles.

Let $x =$ the measure of the smaller angle and $y =$ the measure of the
larger angle.

"The angles are supplementary" translates to $x + y = 180$. "The larger
angle is twelve less than five times the smaller angle" translates to
$y = 5x - 12$:

$$
\begin{cases}
x + y = 180 \\
y = 5x - 12
\end{cases}
$$

We solve by substitution. Substitute $5x - 12$ for $y$ in the first
equation:

$$
\begin{array}{lrcl}
& x + (5x - 12) &=& 180 \\[4pt]
\text{Combine like terms.} & 6x - 12 &=& 180 \\[4pt]
\text{Add 12 to each side.} & 6x &=& 192 \\[4pt]
\text{Divide each side by 6.} & x &=& 32
\end{array}
$$

Substituting $x = 32$ into $y = 5x - 12$ gives $y = 5(32) - 12 = 160 - 12 =
148$.

Check: $32 + 148 \overset{?}{=} 180$, and indeed $180 = 180$. ✓
$5(32) - 12 \overset{?}{=} 148$, and indeed $148 = 148$. ✓ The angle
measures are 32 degrees and 148 degrees.

{{< fillin
  question="Two angles are supplementary. The measure of the larger angle is 12 degrees more than three times the measure of the smaller angle. Find the measure of the smaller angle."
  answer="42"
  hint="Let x = the smaller angle and y = the larger angle. The system is $x + y = 180$ and $y = 3x + 12$. Substitute and solve for x."
>}}

**Example.** Randall has 125 feet of fencing to enclose the rectangular
part of his backyard adjacent to his house. He will only need to fence
around three sides, because the fourth side will be the wall of the house.
He wants the length of the fenced yard (parallel to the house wall) to be 5
feet more than four times as long as the width. Find the length and the
width.

<div class="ap-figure">
<svg role="img" aria-label="A rectangle representing the fenced yard. The top side, along the house wall, is dashed and labeled L for length. The bottom side and the two vertical sides, which are the fenced sides, are solid and the vertical sides are each labeled W for width." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 168" width="252" height="168" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="132" x2="216" y2="132" stroke="currentColor" stroke-width="1.5"/>
  <line x1="216" y1="132" x2="216" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="228" y="88" text-anchor="start" font-size="13" fill="currentColor">W</text>
  <line x1="216" y1="36" x2="36" y2="36" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="126" y="22" text-anchor="middle" font-size="13" fill="currentColor">L (house wall)</text>
  <line x1="36" y1="36" x2="36" y2="132" stroke="currentColor" stroke-width="1.5"/>
  <text x="24" y="88" text-anchor="end" font-size="13" fill="currentColor">W</text>
</svg>
</div>

We are looking for the length and width of the fenced yard. Let $L =$ the
length of the fenced yard and $W =$ the width of the fenced yard.

Since one length and two widths make up the 125 feet of fencing,
$L + 2W = 125$. Since "the length will be 5 feet more than four times as
long as the width," $L = 4W + 5$:

$$
\begin{cases}
L + 2W = 125 \\
L = 4W + 5
\end{cases}
$$

We solve by substitution. Substitute $4W + 5$ for $L$ in the first
equation:

$$
\begin{array}{lrcl}
& (4W + 5) + 2W &=& 125 \\[4pt]
\text{Combine like terms.} & 6W + 5 &=& 125 \\[4pt]
\text{Subtract 5 from each side.} & 6W &=& 120 \\[4pt]
\text{Divide each side by 6.} & W &=& 20
\end{array}
$$

Substituting $W = 20$ into $L = 4W + 5$ gives $L = 4(20) + 5 = 85$.

Check: is one length plus two widths equal to 125 feet?
$85 + 20 + 20 \overset{?}{=} 125$, and indeed $125 = 125$. ✓ Is the length
5 more than four times the width? $4(20) + 5 \overset{?}{=} 85$, and indeed
$85 = 85$. ✓ The length is 85 feet and the width is 20 feet.

{{< fillin
  question="Mario wants to put a rectangular fence around the pool in his backyard. Since one side is adjacent to the house, he will only need to fence three sides — two long sides and the one shorter side parallel to the house. He needs 155 feet of fencing to enclose the pool. The length of the long side is 10 feet less than twice the width. Find the width of the pool area, in feet."
  answer="41.25"
  hint="Let L = the length and W = the width. The system is $L + 2W = 155$ and $L = 2W - 10$. Substitute and solve for W."
>}}

## Solve Uniform Motion Applications

We used a table to organize the information in uniform motion problems when
we introduced them earlier. We'll continue using that table here. The basic
equation is $D = rt$, where $D$ is the distance traveled, $r$ is the rate,
and $t$ is the time. Now that we can use two variables and two equations,
we no longer need to write one person's time or rate in terms of the
other's.

**Example.** Joni left St. Louis on the interstate, driving west towards
Denver at a speed of 65 miles per hour. Half an hour later, Kelly left St.
Louis on the same route as Joni, driving 78 miles per hour. How long will it
take Kelly to catch up to Joni?

We are looking for the length of time Kelly, $k$, and Joni, $j$, will each
drive. Since $D = r \cdot t$, we can fill in the distance column of the
table below.

| | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | :---: | :---: | :---: |
| Joni | $65$ | $j$ | $65j$ |
| Kelly | $78$ | $k$ | $78k$ |

To translate into a system of equations, we recognize that Kelly and Joni
will drive the same distance when Kelly catches up, so $65j = 78k$. Also,
since Kelly left later, her time will be $\tfrac{1}{2}$ hour less than
Joni's time, so $k = j - \tfrac{1}{2}$:

$$
\begin{cases}
65j = 78k \\
k = j - \tfrac{1}{2}
\end{cases}
$$

We solve by substitution. Substitute $j - \tfrac{1}{2}$ for $k$ in the
first equation:

$$
\begin{array}{lrcl}
& 65j &=& 78\left(j - \tfrac{1}{2}\right) \\[4pt]
\text{Distribute.} & 65j &=& 78j - 39 \\[4pt]
\text{Subtract 78j from each side.} & -13j &=& -39 \\[4pt]
\text{Divide each side by} -13. & j &=& 3
\end{array}
$$

Substituting $j = 3$ into $k = j - \tfrac{1}{2}$ gives
$k = 3 - \tfrac{1}{2} = 2\tfrac{1}{2}$.

Check: Joni drives $3$ hours at $65$ mph, covering $195$ miles. Kelly drives
$2\tfrac{1}{2}$ hours at $78$ mph, also covering $195$ miles — the same
distance. ✓ Kelly will catch up to Joni in $2\tfrac{1}{2}$ hours; by then,
Joni will have traveled 3 hours.

{{< fillin
  question="Mitchell left Detroit on the interstate driving south towards Orlando at a speed of 60 miles per hour. Clark left Detroit 1 hour later, traveling at a speed of 75 miles per hour, following the same route as Mitchell. How long will it take Clark to catch Mitchell? Enter the time in hours."
  answer="4"
  hint="Let t be Clark's driving time, so Mitchell's time is $t + 1$. Both travel the same distance: $60(t + 1) = 75t$. Solve for t."
>}}

Many real-world uniform motion applications arise because of the effect of
a current — of water or air — on an object's actual speed. Picture a boat
with a still-water speed of $b$ traveling on a river whose current moves at
speed $c$. Going downstream, in the same direction as the current, the
current helps push the boat along, so its actual speed is $b + c$. Going
upstream, against the current, the current slows the boat down, so its
actual speed is $b - c$. Wind currents affect airplane speeds the same way:
a **tailwind** (blowing in the same direction the plane flies) gives an
actual speed of $j + w$, and a **headwind** (blowing against the plane)
gives an actual speed of $j - w$, where $j$ is the plane's speed in still
air and $w$ is the wind's speed.

**Example.** A river cruise ship sailed 60 miles downstream for 4 hours and
then took 5 hours sailing upstream to return to the dock. Find the speed of
the ship in still water and the speed of the river current.

We are looking for the speed of the ship in still water and the speed of
the current. Let $s =$ the rate of the ship in still water and $c =$ the
rate of the current. Going downstream, the current helps the ship, so the
actual rate is $s + c$. Going upstream, the current slows the ship, so the
actual rate is $s - c$.

| | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | :---: | :---: | :---: |
| Downstream | $s + c$ | $4$ | $60$ |
| Upstream | $s - c$ | $5$ | $60$ |

Since rate times time is distance, we get the system of equations:

$$
\begin{cases}
4(s + c) = 60 \\
5(s - c) = 60
\end{cases}
$$

We solve by elimination. First distribute, then divide each equation by its
common factor to simplify:

$$
\begin{cases}
s + c = 15 \\
s - c = 12
\end{cases}
$$

Adding the two equations:

$$
\begin{array}{rcl}
s + c &=& 15 \\
s - c &=& 12 \\
\hline
2s &=& 27
\end{array}
$$

So $s = 13.5$. Substituting $s = 13.5$ into $s + c = 15$ gives $c = 1.5$.

Check: downstream, the ship's actual rate is $13.5 + 1.5 = 15$ mph, and in
4 hours it travels $15 \cdot 4 = 60$ miles. ✓ Upstream, its actual rate is
$13.5 - 1.5 = 12$ mph, and in 5 hours it travels $12 \cdot 5 = 60$ miles. ✓
The rate of the ship is 13.5 mph and the rate of the current is 1.5 mph.

{{< fillin
  question="A Mississippi river boat cruise sailed 120 miles upstream for 12 hours and then took 10 hours to return to the dock. Find the speed of the river boat in still water, in mph."
  answer="11"
  hint="Let s = the boat's speed in still water and c = the current's speed. The system is $12(s - c) = 120$ and $10(s + c) = 120$. Solve for s."
>}}

**Example.** A private jet can fly 1,095 miles in three hours with a
tailwind but only 987 miles in three hours into a headwind. Find the speed
of the jet in still air and the speed of the wind.

Let $j =$ the speed of the jet in still air and $w =$ the speed of the
wind. In a tailwind, the wind helps the jet, so the rate is $j + w$. In a
headwind, the wind slows the jet, so the rate is $j - w$.

| | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | :---: | :---: | :---: |
| Tailwind | $j + w$ | $3$ | $1{,}095$ |
| Headwind | $j - w$ | $3$ | $987$ |

Since rate times time is distance, the system of equations is:

$$
\begin{cases}
3(j + w) = 1{,}095 \\
3(j - w) = 987
\end{cases}
$$

We solve by elimination. Distribute, then add the equations:

$$
\begin{array}{rcl}
3j + 3w &=& 1{,}095 \\
3j - 3w &=& 987 \\
\hline
6j &=& 2{,}082
\end{array}
$$

So $j = 347$. Substituting $j = 347$ into $3(j + w) = 1{,}095$ gives
$3(347 + w) = 1{,}095$, so $1{,}041 + 3w = 1{,}095$, and $w = 18$.

Check: with the tailwind, the jet's actual rate is $347 + 18 = 365$ mph, and
in 3 hours it flies $365 \cdot 3 = 1{,}095$ miles. ✓ Into the headwind, its
actual rate is $347 - 18 = 329$ mph, and in 3 hours it flies
$329 \cdot 3 = 987$ miles. ✓ The rate of the jet is 347 mph and the rate of
the wind is 18 mph.

{{< fillin
  question="A small jet can fly 1,325 miles in 5 hours with a tailwind but only 1,035 miles in 5 hours into a headwind. Find the speed of the wind, in mph."
  answer="29"
  hint="Let j = the jet's speed in still air and w = the wind's speed. The system is $5(j + w) = 1{,}325$ and $5(j - w) = 1{,}035$. Solve for w."
>}}

## Key terms

**complementary angles** — two angles whose measures add to $90$ degrees;
each is called the *complement* of the other. **supplementary angles** —
two angles whose measures add to $180$ degrees; each is called the
*supplement* of the other. **tailwind** — a wind current blowing in the
same direction a plane is flying, so it increases the plane's actual speed
to $j + w$. **headwind** — a wind current blowing against the direction a
plane is flying, so it decreases the plane's actual speed to $j - w$.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 5.4: Solve Applications with Systems of Equations](https://openstax.org/books/elementary-algebra-2e/pages/5-4-solve-applications-with-systems-of-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated Randall's fenced-yard figure as an accessible inline graphic and described the river-current and wind-current figures in prose; wrote each system of equations and its elimination or substitution steps as display-math blocks; corrected an arithmetic slip in the source's own worked solution for the supplementary-angle example (the check step's $5(32) - 12$ was printed as 147 instead of 148); omitted the "Be Prepared" readiness quiz, the Media links block, the Section 5.4 Exercises ("Practice Makes Perfect") block, and the Self Check checklist; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
