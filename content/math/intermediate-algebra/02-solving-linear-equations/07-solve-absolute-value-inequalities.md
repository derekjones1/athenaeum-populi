---
title: Solve Absolute Value Inequalities
description: >-
  Solving absolute value equations and inequalities with less than or greater
  than, and solving applications with absolute value — adapted from OpenStax
  Intermediate Algebra 2e, Section 2.7.
source_section: "2.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve absolute value equations
- Solve absolute value inequalities with “less than”
- Solve absolute value inequalities with “greater than”
- Solve applications with absolute value
{{< /callout >}}

## Solve Absolute Value Equations

As we prepare to solve absolute value equations, we review our definition of
**absolute value**.

{{< callout type="info" >}}
  **Absolute Value.** The absolute value of a number is its distance from zero
  on the number line.

  The absolute value of a number $n$ is written as $|n|$ and $|n| \geq 0$ for
  all numbers.

  Absolute values are always greater than or equal to zero.
{{< /callout >}}

We learned that both a number and its opposite are the same distance from zero
on the number line. Since they have the same distance from zero, they have the
same absolute value. For example:

$$
\begin{array}{l}
-5\text{ is 5 units away from 0, so }\lvert-5\rvert=5. \\[4pt]
5\text{ is 5 units away from 0, so }|5|=5.
\end{array}
$$

The numbers $5$ and $-5$ are both five units away from zero.

For the equation $|x|=5$, we are looking for all numbers that make this a true
statement. We are looking for the numbers whose distance from zero is 5. We
just saw that both 5 and $-5$ are five units from zero on the number line. They
are the solutions to the equation.

$$
\begin{array}{rcl}
\text{If} && |x|=5 \\[4pt]
\text{then} && x=-5\text{ or }x=5
\end{array}
$$

The solution can be simplified to a single statement by writing $x=\pm5$.
This is read, “$x$ is equal to positive or negative 5”. We can generalize this
to the following property for absolute value equations.

{{< callout type="info" >}}
  **Absolute Value Equations.** For any algebraic expression, $u$, and any
  positive real number, $a$,

  $$
  \begin{array}{rcl}
  \text{if} && |u|=a \\[4pt]
  \text{then} && u=-a\text{ or }u=a
  \end{array}
  $$

  Remember that an absolute value cannot be a negative number.
{{< /callout >}}

**Example 2.68.** Solve: (a) $|x|=8$ (b) $|y|=-6$ (c) $|z|=0$.

(a) Write the equivalent equations.

$$x=-8\text{ or }x=8$$

Thus, $x=\pm8$.

(b) Since an absolute value is always positive, there are no solutions to
this equation.

(c) Write the equivalent equations: $z=-0$ or $z=0$. Since $-0=0$, $z=0$.
Both equations tell us that $z=0$ and so there is only one solution.

To solve an absolute value equation, we first isolate the absolute value
expression using the same procedures we used to solve linear equations. Once
we isolate the absolute value expression we rewrite it as the two equivalent
equations.

**Example 2.69. How to Solve Absolute Value Equations.** Solve
$|5x-4|-3=8$.

$$
\begin{array}{lrcl}
\text{Add 3 to both sides.} & |5x-4|-3+3 &=& 8+3 \\[4pt]
& |5x-4| &=& 11 \\[4pt]
\text{Write the equivalent equations.} & 5x-4 &=& -11\text{ or }5x-4=11 \\[4pt]
\text{Add 4 to each side.} & 5x &=& -7\text{ or }5x=15 \\[4pt]
\text{Divide each side by 5.} & x &=& -\tfrac{7}{5}\text{ or }x=3
\end{array}
$$

Check $x=3$:

$$
\begin{array}{rcl}
|5x-4|-3 &\overset{?}{=}& 8 \\[4pt]
|5\cdot3-4|-3 &\overset{?}{=}& 8 \\[4pt]
|15-4|-3 &\overset{?}{=}& 8 \\[4pt]
|11|-3 &\overset{?}{=}& 8 \\[4pt]
11-3 &\overset{?}{=}& 8 \\[4pt]
8 &=& 8\ \checkmark
\end{array}
$$

Check $x=-\tfrac{7}{5}$:

$$
\begin{array}{rcl}
|5x-4|-3 &\overset{?}{=}& 8 \\[10pt]
\left|5\left(-\tfrac{7}{5}\right)-4\right|-3 &\overset{?}{=}& 8 \\[10pt]
\lvert-7-4\rvert-3 &\overset{?}{=}& 8 \\[4pt]
\lvert-11\rvert-3 &\overset{?}{=}& 8 \\[4pt]
11-3 &\overset{?}{=}& 8 \\[4pt]
8 &=& 8\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $|3x-5|-1=6$. Enter the two solutions separated by commas."
  answer="-\frac{2}{3},4"
  answerMode="unordered"
  answerForm="lowest-terms"
  answerDisplay="$-\tfrac{2}{3}, 4$"
  hint="First add 1 to isolate the absolute value expression, and then write the two equivalent equations."
>}}

{{< callout type="info" >}}
  **Solve absolute value equations.**

  1. Isolate the absolute value expression.
  2. Write the equivalent equations.
  3. Solve each equation.
  4. Check each solution.
{{< /callout >}}

**Example 2.70.** Solve $2|x-7|+5=9$.

$$
\begin{array}{lrcl}
&2|x-7|+5&=&9 \\[4pt]
\text{Isolate the absolute value expression.}&2|x-7|&=&4 \\[4pt]
&|x-7|&=&2 \\[4pt]
\text{Write the equivalent equations.}&x-7&=&-2\text{ or }x-7=2 \\[4pt]
\text{Solve each equation.}&x&=&5\text{ or }x=9
\end{array}
$$

Check:

$$
\begin{array}{rclcrcl}
2|5-7|+5&\overset{?}{=}&9 && 2|9-7|+5&\overset{?}{=}&9 \\[4pt]
2\lvert-2\rvert+5&\overset{?}{=}&9 && 2|2|+5&\overset{?}{=}&9 \\[4pt]
2\cdot2+5&\overset{?}{=}&9 && 2\cdot2+5&\overset{?}{=}&9 \\[4pt]
9&=&9\ \checkmark && 9&=&9\ \checkmark
\end{array}
$$

Remember, an absolute value is always positive!

**Example 2.71.** Solve $\left|\tfrac{2}{3}x-4\right|+11=3$.

$$
\begin{array}{lrcl}
&\left|\tfrac{2}{3}x-4\right|+11&=&3 \\[10pt]
\text{Isolate the absolute value term.}&\left|\tfrac{2}{3}x-4\right|&=&-8 \\[10pt]
\text{An absolute value cannot be negative.}&&&\text{No solution}
\end{array}
$$

Some of our absolute value equations could be of the form $|u|=|v|$ where
$u$ and $v$ are algebraic expressions. For example, $|x-3|=|2x+1|$.

How would we solve them? If two algebraic expressions are equal in absolute
value, then they are either equal to each other or negatives of each other.
The property for absolute value equations says that for any algebraic
expression, $u$, and a positive real number, $a$, if $|u|=a$, then $u=-a$ or
$u=a$.

This tells us that if $|u|=|v|$, then $u=-v$ or $u=v$.

{{< callout type="info" >}}
  **Equations with Two Absolute Values.** For any algebraic expressions, $u$
  and $v$, if $|u|=|v|$, then $u=-v$ or $u=v$.
{{< /callout >}}

When we take the opposite of a quantity, we must be careful with the signs and
to add parentheses where needed.

**Example 2.72.** Solve $|5x-1|=|2x+3|$.

$$
\begin{array}{rclcrcl}
5x-1&=&-(2x+3)&\text{ or }&5x-1&=&2x+3 \\[4pt]
5x-1&=&-2x-3&\text{ or }&3x-1&=&3 \\[4pt]
7x-1&=&-3&\text{ or }&3x&=&4 \\[4pt]
7x&=&-2&\text{ or }&x&=&\tfrac{4}{3} \\[10pt]
x&=&-\tfrac{2}{7}&\text{ or }&x&=&\tfrac{4}{3}
\end{array}
$$

Check. We leave the check to you.

## Solve Absolute Value Inequalities with “Less Than”

Let’s look now at what happens when we have an absolute value inequality.
Everything we’ve learned about solving inequalities still holds, but we must
consider how the absolute value impacts our work.

Again we will look at our definition of absolute value. The absolute value of
a number is its distance from zero on the number line. For the equation
$|x|=5$, we saw that both 5 and $-5$ are five units from zero on the number
line. They are the solutions to the equation.

What about the inequality $|x|\leq5$? Where are the numbers whose distance is
less than or equal to 5? We know $-5$ and 5 are both five units from zero. All
the numbers between $-5$ and 5 are less than five units from zero.

On the number line, the solution is the segment from $-5$ through 5, with a
closed bracket at each endpoint. This shows $-5\leq x\leq5$.

<div class="ap-figure">
<svg role="img" aria-label="A number line from negative six to six shaded between a closed bracket at negative five and a closed bracket at five." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50" y1="45" x2="270" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−6</text>
  <line x1="50" y1="39" x2="50" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="50" y="70" text-anchor="middle" font-size="12" fill="currentColor">−5</text>
  <line x1="72" y1="39" x2="72" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="72" y="70" text-anchor="middle" font-size="12" fill="currentColor">−4</text>
  <line x1="94" y1="39" x2="94" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="94" y="70" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="116" y1="39" x2="116" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="116" y="70" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="138" y1="39" x2="138" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="138" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="182" y1="39" x2="182" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="182" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="204" y1="39" x2="204" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="204" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="226" y1="39" x2="226" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="226" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="248" y1="39" x2="248" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="248" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="270" y1="39" x2="270" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="270" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <text x="50" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">[</text>
  <text x="270" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">]</text>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">−5 ≤ x ≤ 5</text>
</svg>
</div>

In a more general way, we can see that if $|u|\leq a$, then
$-a\leq u\leq a$.

{{< callout type="info" >}}
  **Absolute Value Inequalities with $<$ or $\leq$.** For any algebraic
  expression, $u$, and any positive real number, $a$:

  if $|u|<a$, then $-a<u<a$;

  if $|u|\leq a$, then $-a\leq u\leq a$.
{{< /callout >}}

After solving an inequality, it is often helpful to check some points to see
if the solution makes sense. The graph of the solution divides the number
line into three sections. Choose a value in each section and substitute it in
the original inequality to see if it makes the inequality true or not. While
this is not a complete check, it often helps verify the solution.

**Example 2.73.** Solve $|x|<7$. Graph the solution and write the solution in
interval notation.

Write the equivalent inequality: $-7<x<7$.

On the number line, shade the segment between $-7$ and 7 and place an open
parenthesis at each endpoint.

<div class="ap-figure">
<svg role="img" aria-label="A number line from negative eight to eight shaded between an open parenthesis at negative seven and an open parenthesis at seven." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="44.5" y1="45" x2="275.5" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="11" fill="currentColor">−8</text>
  <text x="44.5" y="70" text-anchor="middle" font-size="11" fill="currentColor">−7</text>
  <line x1="61" y1="39" x2="61" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="61" y="70" text-anchor="middle" font-size="11" fill="currentColor">−6</text>
  <line x1="77.5" y1="39" x2="77.5" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="77.5" y="70" text-anchor="middle" font-size="11" fill="currentColor">−5</text>
  <line x1="94" y1="39" x2="94" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="94" y="70" text-anchor="middle" font-size="11" fill="currentColor">−4</text>
  <line x1="110.5" y1="39" x2="110.5" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="110.5" y="70" text-anchor="middle" font-size="11" fill="currentColor">−3</text>
  <line x1="127" y1="39" x2="127" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="127" y="70" text-anchor="middle" font-size="11" fill="currentColor">−2</text>
  <line x1="143.5" y1="39" x2="143.5" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="143.5" y="70" text-anchor="middle" font-size="11" fill="currentColor">−1</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="11" fill="currentColor">0</text>
  <line x1="176.5" y1="39" x2="176.5" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="176.5" y="70" text-anchor="middle" font-size="11" fill="currentColor">1</text>
  <line x1="193" y1="39" x2="193" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="193" y="70" text-anchor="middle" font-size="11" fill="currentColor">2</text>
  <line x1="209.5" y1="39" x2="209.5" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="209.5" y="70" text-anchor="middle" font-size="11" fill="currentColor">3</text>
  <line x1="226" y1="39" x2="226" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="226" y="70" text-anchor="middle" font-size="11" fill="currentColor">4</text>
  <line x1="242.5" y1="39" x2="242.5" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="242.5" y="70" text-anchor="middle" font-size="11" fill="currentColor">5</text>
  <line x1="259" y1="39" x2="259" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="259" y="70" text-anchor="middle" font-size="11" fill="currentColor">6</text>
  <text x="275.5" y="70" text-anchor="middle" font-size="11" fill="currentColor">7</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="11" fill="currentColor">8</text>
  <text x="44.5" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">(</text>
  <text x="275.5" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">)</text>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">−7 &lt; x &lt; 7</text>
</svg>
</div>

The solution in interval notation is $(-7,7)$.

Check: To verify, check a value in each section of the number line showing the
solution. Choose numbers such as $-8$, 1, and 9.

$$\lvert-8\rvert<7\text{ is false},\qquad |1|<7\text{ is true},\qquad |9|<7\text{ is false}.$$

**Example 2.74.** Solve $|5x-6|\leq4$. Graph the solution and write the
solution in interval notation.

$$
\begin{array}{lrcl}
\text{Step 1. Isolate the absolute value expression. It is isolated.}&|5x-6|&\leq&4 \\[4pt]
\text{Step 2. Write the equivalent compound inequality.}&-4&\leq&5x-6\leq4 \\[4pt]
\text{Step 3. Solve the compound inequality.}&2&\leq&5x\leq10 \\[10pt]
&\tfrac{2}{5}&\leq&x\leq2
\end{array}
$$

On the number line, shade the segment from $\tfrac{2}{5}$ through 2 and place
a closed bracket at each endpoint.

<div class="ap-figure">
<svg role="img" aria-label="A number line from negative one to three shaded between a closed bracket at two fifths, labeled 2/5, and a closed bracket at two." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120.4" y1="45" x2="226" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="94" y1="39" x2="94" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="94" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="226" y1="39" x2="226" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="226" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <text x="120.4" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">[</text>
  <text x="226" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">]</text>
  <text x="120.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">2/5</text>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">2/5 ≤ x ≤ 2</text>
</svg>
</div>

The solution using interval notation is $\left[\tfrac{2}{5},2\right]$.
Check: The check is left to you.

{{< fillin
  question="Solve $|2x-1|\leq5$. Enter the solution in interval notation."
  answer="[-2,3]"
  answerForm="decimal"
  answerDisplay="$[-2,3]$"
  hint="The absolute value is already isolated. Write the equivalent compound inequality, and solve all three parts together."
>}}

{{< callout type="info" >}}
  **Solve absolute value inequalities with $<$ or $\leq$.**

  1. Isolate the absolute value expression.
  2. Write the equivalent compound inequality: $|u|<a$ is equivalent to
     $-a<u<a$; $|u|\leq a$ is equivalent to $-a\leq u\leq a$.
  3. Solve the compound inequality.
  4. Graph the solution.
  5. Write the solution using interval notation.
{{< /callout >}}

## Solve Absolute Value Inequalities with “Greater Than”

What happens for absolute value inequalities that have “greater than”? Again
we will look at our definition of absolute value. The absolute value of a
number is its distance from zero on the number line.

We started with the inequality $|x|\leq5$. We saw that the numbers whose
distance is less than or equal to five from zero on the number line were
$-5$ and 5 and all the numbers between $-5$ and 5.

Now we want to look at the inequality $|x|\geq5$. Where are the numbers whose
distance from zero is greater than or equal to five?

Again both $-5$ and 5 are five units from zero and so are included in the
solution. Numbers whose distance from zero is greater than five units would
be less than $-5$ and greater than 5 on the number line.

On the number line, place closed brackets at $-5$ and 5. Shade to the left of
$-5$ and to the right of 5. This shows $x\leq-5$ or $x\geq5$.

<div class="ap-figure">
<svg role="img" aria-label="A number line from negative six to six shaded left from a closed bracket at negative five and right from a closed bracket at five." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="16" y1="45" x2="50" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="270" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−6</text>
  <line x1="50" y1="39" x2="50" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="50" y="70" text-anchor="middle" font-size="12" fill="currentColor">−5</text>
  <line x1="72" y1="39" x2="72" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="72" y="70" text-anchor="middle" font-size="12" fill="currentColor">−4</text>
  <line x1="94" y1="39" x2="94" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="94" y="70" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="116" y1="39" x2="116" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="116" y="70" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="138" y1="39" x2="138" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="138" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="182" y1="39" x2="182" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="182" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="204" y1="39" x2="204" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="204" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="226" y1="39" x2="226" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="226" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="248" y1="39" x2="248" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="248" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="270" y1="39" x2="270" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="270" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <text x="50" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">]</text>
  <text x="270" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">[</text>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">x ≤ −5 or x ≥ 5</text>
</svg>
</div>

In a more general way, we can see that if $|u|\geq a$, then $u\leq-a$ or
$u\geq a$.

{{< callout type="info" >}}
  **Absolute Value Inequalities with $>$ or $\geq$.** For any algebraic
  expression, $u$, and any positive real number, $a$:

  if $|u|>a$, then $u<-a$ or $u>a$;

  if $|u|\geq a$, then $u\leq-a$ or $u\geq a$.
{{< /callout >}}

**Example 2.75.** Solve $|x|>4$. Graph the solution and write the solution in
interval notation.

Write the equivalent inequality: $x<-4$ or $x>4$.

On the number line, place open parentheses at $-4$ and 4. Shade to the left
of $-4$ and to the right of 4.

<div class="ap-figure">
<svg role="img" aria-label="A number line from negative six to six shaded left from an open parenthesis at negative four and right from an open parenthesis at four." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="16" y1="45" x2="72" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="248" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−6</text>
  <line x1="50" y1="39" x2="50" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="50" y="70" text-anchor="middle" font-size="12" fill="currentColor">−5</text>
  <text x="72" y="70" text-anchor="middle" font-size="12" fill="currentColor">−4</text>
  <line x1="94" y1="39" x2="94" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="94" y="70" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="116" y1="39" x2="116" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="116" y="70" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="138" y1="39" x2="138" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="138" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="182" y1="39" x2="182" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="182" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="204" y1="39" x2="204" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="204" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="226" y1="39" x2="226" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="226" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <text x="248" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="270" y1="39" x2="270" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="270" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <text x="72" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">)</text>
  <text x="248" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">(</text>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">x &lt; −4 or x &gt; 4</text>
</svg>
</div>

The solution using interval notation is
$(-\infty,-4)\cup(4,\infty)$.

Check: To verify, check a value in each section of the number line showing the
solution. Choose numbers such as $-6$, 0, and 7. Then $\lvert-6\rvert>4$ is true,
$|0|>4$ is false, and $|7|>4$ is true.

**Example 2.76.** Solve $|2x-3|\geq5$. Graph the solution and write the
solution in interval notation.

$$
\begin{array}{lrcl}
\text{Step 1. Isolate the absolute value expression. It is isolated.}&|2x-3|&\geq&5 \\[4pt]
\text{Step 2. Write the equivalent compound inequality.}&2x-3&\leq&-5\text{ or }2x-3\geq5 \\[4pt]
\text{Step 3. Solve the compound inequality.}&2x&\leq&-2\text{ or }2x\geq8 \\[4pt]
&x&\leq&-1\text{ or }x\geq4
\end{array}
$$

On the number line, place closed brackets at $-1$ and 4. Shade to the left of
$-1$ and to the right of 4.

<div class="ap-figure">
<svg role="img" aria-label="A number line from negative three to six shaded left from a closed bracket at negative one and right from a closed bracket at four." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="16" y1="45" x2="86.7" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="233.3" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="57.3" y1="39" x2="57.3" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="57.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="86.7" y1="39" x2="86.7" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="86.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="116" y1="39" x2="116" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="116" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="145.3" y1="39" x2="145.3" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="145.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="174.7" y1="39" x2="174.7" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="174.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="204" y1="39" x2="204" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="204" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="233.3" y1="39" x2="233.3" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="233.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="262.7" y1="39" x2="262.7" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="262.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <text x="86.7" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">]</text>
  <text x="233.3" y="52" text-anchor="middle" font-size="22" font-weight="600" fill="currentColor">[</text>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">x ≤ −1 or x ≥ 4</text>
</svg>
</div>

The solution using interval notation is
$(-\infty,-1]\cup[4,\infty)$. Check: The check is left to you.

{{< fillin
  question="Solve $|4x-3|\geq5$. Enter the solution in interval notation."
  answer="(-\infty,-\frac{1}{2}]\cup[2,\infty)"
  answerForm="lowest-terms"
  answerDisplay="$(-\infty,-\tfrac{1}{2}]\cup[2,\infty)$"
  hint="The absolute value is already isolated. Split it into the two inequalities joined by “or”, and solve each one."
>}}

{{< callout type="info" >}}
  **Solve absolute value inequalities with $>$ or $\geq$.**

  1. Isolate the absolute value expression.
  2. Write the equivalent compound inequality: $|u|>a$ is equivalent to
     $u<-a$ or $u>a$; $|u|\geq a$ is equivalent to $u\leq-a$ or $u\geq a$.
  3. Solve the compound inequality.
  4. Graph the solution.
  5. Write the solution using interval notation.
{{< /callout >}}

## Solve Applications with Absolute Value

Absolute value inequalities are often used in the manufacturing process. An
item must be made with near perfect specifications. Usually there is a certain
*tolerance* of the difference from the specifications that is allowed. If the
difference from the specifications exceeds the tolerance, the item is
rejected.

$$|\text{actual}-\text{ideal}|\leq\text{tolerance}$$

**Example 2.77.** The ideal diameter of a rod needed for a machine is 60 mm.
The actual diameter can vary from the ideal diameter by 0.075 mm. What range
of diameters will be acceptable to the customer without causing the rod to be
rejected?

Let $x=$ the actual measurement.

$$
\begin{array}{lrcl}
\text{Use an absolute value inequality to express this situation.}&|\text{actual}-\text{ideal}|&\leq&\text{tolerance} \\[4pt]
&|x-60|&\leq&0.075 \\[4pt]
\text{Rewrite as a compound inequality.}&-0.075&\leq&x-60\leq0.075 \\[4pt]
\text{Solve the inequality.}&59.925&\leq&x\leq60.075
\end{array}
$$

The diameter of the rod can be between 59.925 mm and 60.075 mm.

{{< fillin
  question="The ideal diameter of a rod needed for a machine is 80 mm. The actual diameter can vary from the ideal diameter by 0.009 mm. Enter the acceptable range of diameters, in millimeters, in interval notation."
  answer="[79.991,80.009]"
  answerForm="decimal"
  answerDisplay="$[79.991,80.009]$ mm"
  hint="Write an absolute value inequality comparing the actual diameter with the ideal one, rewrite it as a compound inequality, and solve."
>}}

## Key terms

**Absolute value** is the distance of a number from zero on
the number line. **Tolerance** is the allowed difference from a specification.

## Practice

### Solve absolute value equations

{{< fillin
  question="Solve $|x|=4$. Enter both solutions, separated by a comma."
  answer="-4,4"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$x=-4$ or $x=4$"
  hint="Absolute value is distance from zero: find every number that is that distance from zero."
>}}

{{< multiplechoice
  question="Solve $|y|=-5$."
  answer="No solution"
  hint="Before writing equivalent equations, compare the right side with the values an absolute value can take."
>}}
$y=-5$
No solution
$y=5$
$y=0$
{{< /multiplechoice >}}

{{< fillin
  question="Solve $|z|=0$."
  answer="0"
  answerForm="decimal"
  answerDisplay="$z=0$"
  hint="Write the two equivalent equations, and see how many different numbers they give."
>}}

{{< fillin
  question="Solve $|4x+3|=|2x+1|$. Enter both solutions, separated by a comma."
  answer="-1,-\frac{2}{3}"
  answerMode="unordered"
  answerForm="lowest-terms"
  answerDisplay="$x=-1$ or $x=-\tfrac{2}{3}$"
  hint="Two equal absolute values mean the expressions inside are equal or opposites. Write both equations, putting parentheses around the opposite, and solve each."
>}}

### Solve absolute value inequalities with “less than”

{{< fillin
  question="Solve $|2x-5|\le3$. Enter the solution in interval notation."
  answer="[1,4]"
  answerForm="decimal"
  answerDisplay="$[1,4]$"
  hint="The absolute value is already isolated. Write the equivalent compound inequality, and solve all three parts together."
>}}

{{< fillin
  question="Solve $|6x-5|<7$. Enter the solution in interval notation."
  answer="(-\frac{1}{3},2)"
  answerForm="lowest-terms"
  answerDisplay="$\left(-\tfrac{1}{3},2\right)$"
  hint="Write the equivalent compound inequality for a “less than” absolute value, and solve all three parts together."
>}}

{{< multiplechoice
  question="Solve $|5x+1|\le-2$."
  answer="No solution"
  hint="Before writing a compound inequality, compare the right side with the smallest value an absolute value can take."
>}}
$x=-\tfrac{1}{5}$
All real numbers
No solution
$\left[-\tfrac{3}{5},\tfrac{1}{5}\right]$
{{< /multiplechoice >}}

### Solve absolute value inequalities with “greater than”

{{< fillin
  question="Solve $|2x-1|>5$. Enter the solution in interval notation."
  answer="(-\infty,-2)\cup(3,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,-2)\cup(3,\infty)$"
  hint="Split the absolute value inequality into the two inequalities joined by “or”, and solve each one."
>}}

{{< fillin
  question="Solve $|x-7|\ge1$. Enter the solution in interval notation."
  answer="(-\infty,6]\cup[8,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,6]\cup[8,\infty)$"
  hint="Split the absolute value inequality into the two inequalities joined by “or”, and solve each one."
>}}

{{< fillin
  question="Solve $5|x|+6\ge1$. Enter the solution in interval notation."
  answer="(-\infty,\infty)"
  answerDisplay="$(-\infty,\infty)$"
  hint="Isolate the absolute value first, then compare the right side with the smallest value an absolute value can take."
>}}

### Solve applications with absolute value

{{< fillin
  question="An organic juice bottler ideally produces 215,000 bottles per day, but this total can vary by as much as 7,500 bottles. Enter the minimum and maximum expected daily production, in bottles, separated by a comma."
  answer="207500,222500"
  answerForm="decimal"
  answerDisplay="207,500 to 222,500 bottles"
  hint="Write an absolute value inequality comparing the actual production with the ideal, rewrite it as a compound inequality, and solve."
>}}

{{< fillin
  question="At Lilly’s Bakery, the ideal weight of a loaf of bread is 24 ounces. By law, the actual weight can vary from the ideal by 1.5 ounces. Enter the minimum and maximum acceptable weight, in ounces, separated by a comma."
  answer="22.5,25.5"
  answerForm="decimal"
  answerDisplay="22.5 to 25.5 ounces"
  hint="Write an absolute value inequality comparing the actual weight with the ideal, rewrite it as a compound inequality, and solve."
>}}

---

<small>Adapted from [*Intermediate Algebra 2e*, Section 2.7](https://openstax.org/books/intermediate-algebra-2e/pages/2-7-solve-absolute-value-inequalities) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/details/books/intermediate-algebra-2e). Changes: adapted the source text and examples for web presentation, converted selected Try It exercises into interactive checks, and adapted selected end-of-section exercises into an interactive practice block. Two corrections: the source’s answer to the juice-bottler exercise prints the maximum production as 2,225,000 bottles; $215{,}000+7{,}500=222{,}500$, and the exercise here keys 207,500 and 222,500; the same exercise’s stem reads “215,000 bottles” where the source prints “215,000 bottle”.</small>
