---
title: Solve Applications with Systems of Equations
description: >-
  Translating word problems into a system of two equations in two variables,
  then solving direct-translation, geometry, and uniform-motion applications
  — adapted from OpenStax Intermediate Algebra 2e, Section 4.2.
source_section: "4.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve direct
  translation applications, solve geometry applications, and solve uniform
  motion applications.
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

## Solve Direct Translation Applications

Systems of linear equations are very useful for solving applications. Some
people find setting up word problems with two variables easier than setting
them up with just one variable. To solve an application, we'll first
translate the words into a system of linear equations. Then we will decide
the most convenient method to use, and then solve the system.

**Example.** The sum of two numbers is zero. One number is nine less than
the other. Find the numbers.

We are looking for two numbers. Let $n=$ the first number and $m=$ the
second number.

"The sum of two numbers is zero" translates to one equation, and "one number
is nine less than the other" translates to the second:

$$
\left\{\begin{array}{l}
n + m = 0 \\
n = m - 9
\end{array}\right.
$$

We solve by substitution. Substitute $m-9$ for $n$ in the first equation:

$$
\begin{array}{lrcl}
& (m - 9) + m &=& 0 \\[4pt]
\text{Combine like terms.} & 2m - 9 &=& 0 \\[4pt]
\text{Add 9 to each side.} & 2m &=& 9 \\[4pt]
\text{Divide each side by 2.} & m &=& \tfrac{9}{2}
\end{array}
$$

Substituting $m=\tfrac{9}{2}$ into $n=m-9$ gives $n=\tfrac{9}{2}-9=-\tfrac{9}{2}$.

Check: is the sum zero? $\tfrac{9}{2}+\left(-\tfrac{9}{2}\right)\overset{?}{=}0$,
and indeed $0=0$. ✓ Is one number nine less than the other?
$\tfrac{9}{2}-9\overset{?}{=}-\tfrac{9}{2}$, and indeed
$-\tfrac{9}{2}=-\tfrac{9}{2}$. ✓ The numbers are $\tfrac{9}{2}$ and
$-\tfrac{9}{2}$.

{{< fillin
  question="The sum of two numbers is 10. One number is 4 less than the other. Find the smaller number."
  answer="3"
  hint="Let m = the larger number and n = the smaller number, so $m + n = 10$ and $n = m - 4$. Substitute and solve for n."
>}}

**Example.** Heather has been offered two options for her salary as a
trainer at the gym. Option A would pay her \$25,000 plus \$15 for each
training session. Option B would pay her \$10,000 plus \$40 for each
training session. How many training sessions would make the salary options
equal?

We are looking for the number of training sessions that would make the pay
equal. Let $s=$ Heather's salary and $n=$ the number of training sessions.

"Option A would pay her \$25,000 plus \$15 for each training session"
translates to $s=25{,}000+15n$. "Option B would pay her \$10,000 plus \$40
for each training session" translates to $s=10{,}000+40n$:

$$
\left\{\begin{array}{l}
s = 25{,}000 + 15n \\
s = 10{,}000 + 40n
\end{array}\right.
$$

We solve by substitution. Substitute $25{,}000+15n$ for $s$ in the second
equation:

$$
\begin{array}{lrcl}
& 25{,}000 + 15n &=& 10{,}000 + 40n \\[4pt]
\text{Subtract 10,000 from each side.} & 15{,}000 + 15n &=& 40n \\[4pt]
\text{Subtract }15n\text{ from each side.} & 15{,}000 &=& 25n \\[4pt]
\text{Divide each side by 25.} & 600 &=& n
\end{array}
$$

Check: are $600$ training sessions a year reasonable? Yes. Are the two
options equal when $n=600$? $25{,}000+15(600)=34{,}000$ and
$10{,}000+40(600)=34{,}000$. ✓ The salary options would be equal for $600$
training sessions.

{{< fillin
  question="Geraldine has been offered positions by two insurance companies. The first company pays a salary of \$12,000 plus a commission of \$100 for each policy sold. The second pays a salary of \$20,000 plus a commission of \$50 for each policy sold. How many policies would need to be sold for the total pay to be the same?"
  answer="160"
  hint="Let s = the salary and p = the number of policies sold. The system is $s = 12{,}000 + 100p$ and $s = 20{,}000 + 50p$. Substitute and solve for p."
>}}

**Example.** When Jenna spent 10 minutes on the elliptical trainer and then
did circuit training for 20 minutes, her fitness app said she burned 278
calories. When she spent 20 minutes on the elliptical trainer and 30 minutes
of circuit training she burned 473 calories. How many calories does she burn
for each minute on the elliptical trainer? How many calories does she burn
for each minute of circuit training?

We are looking for the number of calories burned each minute on the
elliptical trainer and each minute of circuit training. Let $e=$ calories
burned per minute on the elliptical trainer and $c=$ calories burned per
minute of circuit training.

Each workout gives us one equation relating the two rates:

$$
\left\{\begin{array}{l}
10e + 20c = 278 \\
20e + 30c = 473
\end{array}\right.
$$

We solve by elimination. Multiply the first equation by $-2$ so the
$e$-terms have opposite coefficients, then add the equations:

$$
\begin{array}{rcl}
-20e - 40c &=& -556 \\
20e + 30c &=& 473 \\
\hline
-10c &=& -83
\end{array}
$$

So $c=8.3$. Substituting $c=8.3$ into the first equation:

$$
\begin{array}{lrcl}
& 10e + 20(8.3) &=& 278 \\[4pt]
\text{Simplify.} & 10e + 166 &=& 278 \\[4pt]
\text{Subtract 166 from each side.} & 10e &=& 112 \\[4pt]
\text{Divide each side by 10.} & e &=& 11.2
\end{array}
$$

Check: $10(11.2)+20(8.3)=112+166=278$ ✓, and $20(11.2)+30(8.3)=224+249=473$
✓. Jenna burns $11.2$ calories per minute on the elliptical trainer and
$8.3$ calories per minute of circuit training.

{{< fillin
  question="Mark went to the gym and did 40 minutes of Bikram hot yoga and 10 minutes of jumping jacks, burning 510 calories. The next time he went to the gym, he did 30 minutes of Bikram hot yoga and 20 minutes of jumping jacks, burning 470 calories. How many calories were burned for each minute of jumping jacks?"
  answer="7"
  hint="Let y = calories burned per minute of yoga and j = calories burned per minute of jumping jacks. Set up $40y + 10j = 510$ and $30y + 20j = 470$, then solve for j."
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

**Example.** Translate to a system of equations and then solve: the
difference of two complementary angles is 26 degrees. Find the measures of
the angles.

We are looking for the measure of each angle. Let $x=$ the measure of the
first angle and $y=$ the measure of the second angle.

"The angles are complementary" translates to $x+y=90$. "The difference of
the two angles is 26 degrees" translates to $x-y=26$:

$$
\left\{\begin{array}{l}
x + y = 90 \\
x - y = 26
\end{array}\right.
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

So $x=58$. Substituting $x=58$ into $x+y=90$ gives $58+y=90$, so $y=32$.

Check: $58+32\overset{?}{=}90$, and indeed $90=90$. ✓
$58-32\overset{?}{=}26$, and indeed $26=26$. ✓ The angle measures are $58$
degrees and $32$ degrees.

{{< fillin
  question="The difference of two complementary angles is 20 degrees. Find the measure of the larger angle."
  answer="55"
  hint="Let x and y be the two angle measures. The system is $x + y = 90$ and $x - y = 20$. Add the equations to solve for x."
>}}

**Example.** Translate to a system of equations and then solve: two angles
are supplementary. The measure of the larger angle is twelve degrees less
than five times the measure of the smaller angle. Find the measures of both
angles.

Let $x=$ the measure of the smaller angle and $y=$ the measure of the larger
angle.

"The angles are supplementary" translates to $x+y=180$. "The larger angle is
twelve less than five times the smaller angle" translates to $y=5x-12$:

$$
\left\{\begin{array}{l}
x + y = 180 \\
y = 5x - 12
\end{array}\right.
$$

We solve by substitution. Substitute $5x-12$ for $y$ in the first equation:

$$
\begin{array}{lrcl}
& x + (5x - 12) &=& 180 \\[4pt]
\text{Combine like terms.} & 6x - 12 &=& 180 \\[4pt]
\text{Add 12 to each side.} & 6x &=& 192 \\[4pt]
\text{Divide each side by 6.} & x &=& 32
\end{array}
$$

Substituting $x=32$ into $y=5x-12$ gives $y=5(32)-12=160-12=148$.

Check: $32+148\overset{?}{=}180$, and indeed $180=180$. ✓
$5(32)-12\overset{?}{=}148$, and indeed $148=148$. ✓ The angle measures are
$32$ degrees and $148$ degrees.

{{< fillin
  question="Two angles are supplementary. The measure of the larger angle is 12 degrees more than three times the measure of the smaller angle. Find the measure of the smaller angle."
  answer="42"
  hint="Let x = the smaller angle and y = the larger angle. The system is $x + y = 180$ and $y = 3x + 12$. Substitute and solve for x."
>}}

Recall that the angles of a triangle add up to $180$ degrees. A right
triangle has one angle that measures $90$ degrees. What does that tell us
about the other two angles? In the next example we'll find the measures of
the other two angles.

**Example.** The measure of one of the small angles of a right triangle is
ten more than three times the measure of the other small angle. Find the
measures of both angles.

<div class="ap-figure">
<svg role="img" aria-label="A right triangle with the right angle at the bottom-left corner, marked with a small square. The top vertex is labeled a and the bottom-right vertex is labeled b." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 162" width="198" height="162" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="126" x2="162" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <line x1="162" y1="126" x2="36" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36" y1="36" x2="36" y2="126" stroke="currentColor" stroke-width="1.5"/>
  <text x="174.2" y="134.4" text-anchor="start" font-size="13" fill="currentColor">b</text>
  <text x="28.5" y="23.3" text-anchor="end" font-size="13" fill="currentColor">a</text>
  <path d="M 46 126 L 46 116 L 36 116" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

We are looking for the measures of the angles. Let $a=$ the measure of the
first angle and $b=$ the measure of the second angle.

"One small angle is ten more than three times the other" translates to
$a=3b+10$. Since the triangle's angles sum to $180$ and one angle is the
right angle ($90$ degrees), the two small angles satisfy $a+b+90=180$, or
$a+b=90$:

$$
\left\{\begin{array}{l}
a = 3b + 10 \\
a + b = 90
\end{array}\right.
$$

We solve by substitution. Substitute $3b+10$ for $a$ in the second equation:

$$
\begin{array}{lrcl}
& (3b + 10) + b &=& 90 \\[4pt]
\text{Combine like terms.} & 4b + 10 &=& 90 \\[4pt]
\text{Subtract 10 from each side.} & 4b &=& 80 \\[4pt]
\text{Divide each side by 4.} & b &=& 20
\end{array}
$$

Substituting $b=20$ into $a=3b+10$ gives $a=3(20)+10=70$.

Check: $a+b+90\overset{?}{=}180$: $70+20+90\overset{?}{=}180$, and indeed
$180=180$. ✓ $3(20)+10\overset{?}{=}70$, and indeed $70=70$. ✓ The measures
of the small angles are $70$ degrees and $20$ degrees.

{{< fillin
  question="The measure of one of the small angles of a right triangle is 2 more than 3 times the measure of the other small angle. Find the measure of the larger small angle."
  answer="68"
  hint="Let a and b be the two small angles, with $a = 3b + 2$. Since the small angles of a right triangle sum to 90 degrees, $a + b = 90$. Substitute and solve for b, then find a."
>}}

Often it is helpful to draw a picture to visualize a geometry application.

**Example.** Translate to a system of equations and then solve: Randall has
125 feet of fencing to enclose the rectangular part of his backyard adjacent
to his house. He will only need to fence around three sides, because the
fourth side will be the wall of the house. He wants the length of the
fenced yard (parallel to the house wall) to be 5 feet more than four times
as long as the width. Find the length and the width.

<div class="ap-figure">
<svg role="img" aria-label="A rectangle representing the fenced yard. The top side, along the house wall, is dashed and labeled L. The bottom side and the two vertical sides, which are the fenced sides, are solid; the vertical sides are each labeled W." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 168" width="252" height="168" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="132" x2="216" y2="132" stroke="currentColor" stroke-width="1.5"/>
  <line x1="216" y1="132" x2="216" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="228" y="88" text-anchor="start" font-size="13" fill="currentColor">W</text>
  <line x1="216" y1="36" x2="36" y2="36" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="126" y="22" text-anchor="middle" font-size="13" fill="currentColor">L (house wall)</text>
  <line x1="36" y1="36" x2="36" y2="132" stroke="currentColor" stroke-width="1.5"/>
  <text x="24" y="88" text-anchor="end" font-size="13" fill="currentColor">W</text>
</svg>
</div>

We are looking for the length and width of the fenced yard. Let $L=$ the
length of the fenced yard and $W=$ the width of the fenced yard.

Since one length and two widths make up the $125$ feet of fencing,
$L+2W=125$. Since "the length will be 5 feet more than four times as long as
the width," $L=4W+5$:

$$
\left\{\begin{array}{l}
L + 2W = 125 \\
L = 4W + 5
\end{array}\right.
$$

We solve by substitution. Substitute $4W+5$ for $L$ in the first equation:

$$
\begin{array}{lrcl}
& (4W + 5) + 2W &=& 125 \\[4pt]
\text{Combine like terms.} & 6W + 5 &=& 125 \\[4pt]
\text{Subtract 5 from each side.} & 6W &=& 120 \\[4pt]
\text{Divide each side by 6.} & W &=& 20
\end{array}
$$

Substituting $W=20$ into $L=4W+5$ gives $L=4(20)+5=85$.

Check: is one length plus two widths equal to $125$ feet?
$85+20+20\overset{?}{=}125$, and indeed $125=125$. ✓ Is the length $5$ more
than four times the width? $4(20)+5\overset{?}{=}85$, and indeed $85=85$. ✓
The length is $85$ feet and the width is $20$ feet.

{{< fillin
  question="Mario wants to put a fence around the pool in his backyard. Since one side is adjacent to the house, he only needs to fence three sides: the two long sides and the one shorter side that runs parallel to the house. He needs 155 feet of fencing to enclose the pool. The length of the long side is 10 feet less than twice the width. Find the width of the pool area, in feet."
  answer="35"
  hint="Let L = the length of the long side and W = the width. Two long sides plus one width use the fencing: $2L + W = 155$. The long side is $L = 2W - 10$. Substitute and solve for W."
>}}

## Solve Uniform Motion Applications

We used a table to organize the information in uniform motion problems when
we introduced them earlier. We'll continue using that table here. The basic
equation is $D=rt$, where $D$ is the distance traveled, $r$ is the rate, and
$t$ is the time. Now that we can use two variables and two equations, we no
longer need to write one person's time or rate in terms of the other's.

**Example.** Translate to a system of equations and then solve: Joni left
St. Louis on the interstate, driving west towards Denver at a speed of 65
miles per hour. Half an hour later, Kelly left St. Louis on the same route
as Joni, driving 78 miles per hour. How long will it take Kelly to catch up
to Joni?

We are looking for the length of time Kelly, $k$, and Joni, $j$, will each
drive. Since $D=rt$, a table organizes the rates, times, and distances:

| | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | :---: | :---: | :---: |
| Joni | $65$ | $j$ | $65j$ |
| Kelly | $78$ | $k$ | $78k$ |

Kelly and Joni will have driven the same distance when Kelly catches up, so
$65j=78k$. Since Kelly left later, her time will be $\tfrac{1}{2}$ hour less
than Joni's, so $k=j-\tfrac{1}{2}$:

$$
\left\{\begin{array}{l}
65j = 78k \\
k = j - \tfrac{1}{2}
\end{array}\right.
$$

We solve by substitution. Substitute $j-\tfrac{1}{2}$ for $k$ in the first
equation:

$$
\begin{array}{lrcl}
& 65j &=& 78\left(j - \tfrac{1}{2}\right) \\[4pt]
\text{Distribute.} & 65j &=& 78j - 39 \\[4pt]
\text{Subtract }78j\text{ from each side.} & -13j &=& -39 \\[4pt]
\text{Divide each side by }-13. & j &=& 3
\end{array}
$$

Substituting $j=3$ into $k=j-\tfrac{1}{2}$ gives $k=3-\tfrac{1}{2}=2\tfrac{1}{2}$.

Check: Joni drives $3$ hours at $65$ mph, covering $195$ miles. Kelly drives
$2\tfrac{1}{2}$ hours at $78$ mph, also covering $195$ miles — the same
distance. ✓ Kelly will catch up to Joni in $2\tfrac{1}{2}$ hours; by then
Joni will have traveled $3$ hours.

{{< fillin
  question="Mitchell left Detroit on the interstate driving south towards Orlando at a speed of 60 miles per hour. Clark left Detroit 1 hour later, traveling at a speed of 75 miles per hour, following the same route as Mitchell. How long will it take Clark to catch Mitchell? Enter the time in hours."
  answer="4"
  hint="Let t = Clark's driving time, so Mitchell's time is $t + 1$. Both travel the same distance: $60(t + 1) = 75t$. Solve for t."
>}}

Many real-world uniform motion applications arise because of the effect of
a current — of water or air — on an object's actual speed. Picture a boat
with a still-water speed of $b$ traveling on a river whose current moves at
speed $c$. Going downstream, in the same direction as the current, the
current helps push the boat along, so its actual speed is $b+c$. Going
upstream, against the current, the current slows the boat down, so its
actual speed is $b-c$. Wind currents affect airplane speeds the same way: a
**tailwind** (blowing in the same direction the plane flies) gives an actual
speed of $j+w$, and a **headwind** (blowing against the plane) gives an
actual speed of $j-w$, where $j$ is the plane's speed in still air and $w$ is
the wind's speed.

**Example.** Translate to a system of equations and then solve: a river
cruise ship sailed 60 miles downstream for 4 hours and then took 5 hours
sailing upstream to return to the dock. Find the speed of the ship in still
water and the speed of the river current.

We are looking for the speed of the ship in still water and the speed of the
current. Let $s=$ the rate of the ship in still water and $c=$ the rate of
the current. Going downstream, the current helps the ship, so the actual
rate is $s+c$. Going upstream, the current slows the ship, so the actual
rate is $s-c$.

| | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | :---: | :---: | :---: |
| Downstream | $s + c$ | $4$ | $60$ |
| Upstream | $s - c$ | $5$ | $60$ |

Since rate times time is distance, we get the system of equations:

$$
\left\{\begin{array}{l}
4(s + c) = 60 \\
5(s - c) = 60
\end{array}\right.
$$

We solve by elimination. First distribute, then divide each equation by its
common factor to simplify:

$$
\left\{\begin{array}{l}
s + c = 15 \\
s - c = 12
\end{array}\right.
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

So $s=13.5$. Substituting $s=13.5$ into $s+c=15$ gives $c=1.5$.

Check: downstream, the ship's actual rate is $13.5+1.5=15$ mph, and in $4$
hours it travels $15\cdot4=60$ miles. ✓ Upstream, its actual rate is
$13.5-1.5=12$ mph, and in $5$ hours it travels $12\cdot5=60$ miles. ✓ The
rate of the ship is $13.5$ mph and the rate of the current is $1.5$ mph.

{{< fillin
  question="A Mississippi river boat cruise sailed 120 miles upstream for 12 hours and then took 10 hours to return to the dock. Find the speed of the river boat in still water, in mph."
  answer="11"
  hint="Let s = the boat's speed in still water and c = the current's speed. Upstream (against the current): $12(s - c) = 120$. The return trip downstream (with the current): $10(s + c) = 120$. Solve for s."
>}}

**Example.** Translate to a system of equations and then solve: a private
jet can fly 1,095 miles in three hours with a tailwind but only 987 miles in
three hours into a headwind. Find the speed of the jet in still air and the
speed of the wind.

Let $j=$ the speed of the jet in still air and $w=$ the speed of the wind.
In a tailwind, the wind helps the jet, so the rate is $j+w$. In a headwind,
the wind slows the jet, so the rate is $j-w$.

| | Rate (mph) | Time (hrs) | Distance (miles) |
| :--- | :---: | :---: | :---: |
| Tailwind | $j + w$ | $3$ | $1{,}095$ |
| Headwind | $j - w$ | $3$ | $987$ |

Since rate times time is distance, the system of equations is:

$$
\left\{\begin{array}{l}
3(j + w) = 1{,}095 \\
3(j - w) = 987
\end{array}\right.
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

So $j=347$. Substituting $j=347$ into $3(j+w)=1{,}095$ gives
$3(347+w)=1{,}095$, so $1{,}041+3w=1{,}095$, and $w=18$.

Check: with the tailwind, the jet's actual rate is $347+18=365$ mph, and in
$3$ hours it flies $365\cdot3=1{,}095$ miles. ✓ Into the headwind, its
actual rate is $347-18=329$ mph, and in $3$ hours it flies $329\cdot3=987$
miles. ✓ The rate of the jet is $347$ mph and the rate of the wind is $18$
mph.

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
to $j+w$. **headwind** — a wind current blowing against the direction a
plane is flying, so it decreases the plane's actual speed to $j-w$.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.2: Solve Applications with Systems of Equations](https://openstax.org/books/intermediate-algebra-2e/pages/4-2-solve-applications-with-systems-of-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the right-triangle and fenced-yard figures as accessible inline graphics and described the river-current and wind-current illustrations in prose; wrote each system of equations and its elimination or substitution steps as display-math blocks; omitted the "Be Prepared" readiness quiz, the Media link, and the Section 4.2 Exercises ("Practice Makes Perfect") block; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
