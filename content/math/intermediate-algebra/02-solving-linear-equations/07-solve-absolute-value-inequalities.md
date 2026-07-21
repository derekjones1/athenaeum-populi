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
  **By the end of this section, you will be able to:** solve absolute value
  equations, solve absolute value inequalities with “less than,” solve
  absolute value inequalities with “greater than,” and solve applications
  with absolute value.
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
-5\text{ is 5 units away from 0, so }|-5|=5. \\[4pt]
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
|-7-4|-3 &\overset{?}{=}& 8 \\[4pt]
|-11|-3 &\overset{?}{=}& 8 \\[4pt]
11-3 &\overset{?}{=}& 8 \\[4pt]
8 &=& 8\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $|3x-5|-1=6$. Enter the two solutions separated by commas."
  answer="-\frac{2}{3},4"
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
2|-2|+5&\overset{?}{=}&9 && 2|2|+5&\overset{?}{=}&9 \\[4pt]
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

The solution in interval notation is $(-7,7)$.

Check: To verify, check a value in each section of the number line showing the
solution. Choose numbers such as $-8$, 1, and 9.

$$|-8|<7\text{ is false},\qquad |1|<7\text{ is true},\qquad |9|<7\text{ is false}.$$

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

The solution using interval notation is $\left[\tfrac{2}{5},2\right]$.
Check: The check is left to you.

{{< fillin
  question="Solve $|2x-1|\leq5$. Enter the solution in interval notation."
  answer="[-2,3]"
  answerDisplay="$[-2,3]$"
  hint="Write the equivalent compound inequality $-5\leq2x-1\leq5$, and solve all three parts together."
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

The solution using interval notation is
$(-\infty,-4)\cup(4,\infty)$.

Check: To verify, check a value in each section of the number line showing the
solution. Choose numbers such as $-6$, 0, and 7. Then $|-6|>4$ is true,
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

The solution using interval notation is
$(-\infty,-1]\cup[4,\infty)$. Check: The check is left to you.

{{< fillin
  question="Solve $|4x-3|\geq5$. Enter the solution in interval notation."
  answer="(-\infty,-\frac{1}{2}]\cup[2,\infty)"
  answerDisplay="$(-\infty,-\tfrac{1}{2}]\cup[2,\infty)$"
  hint="Write $4x-3\leq-5$ or $4x-3\geq5$, then solve both inequalities."
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
&&|x-60|\leq0.075& \\[4pt]
\text{Rewrite as a compound inequality.}&-0.075&\leq&x-60\leq0.075 \\[4pt]
\text{Solve the inequality.}&59.925&\leq&x\leq60.075
\end{array}
$$

The diameter of the rod can be between 59.925 mm and 60.075 mm.

{{< fillin
  question="The ideal diameter of a rod needed for a machine is 80 mm. The actual diameter can vary from the ideal diameter by 0.009 mm. Enter the acceptable range in interval notation."
  answer="[79.991,80.009]"
  answerDisplay="$[79.991,80.009]$ mm"
  hint="Use $|x-80|\leq0.009$, and rewrite it as a compound inequality."
>}}

**Key terms.** **Absolute value** is the distance of a number from zero on
the number line. **Tolerance** is the allowed difference from a specification.

---

<small>Adapted from [*Intermediate Algebra 2e*, Section 2.7](https://openstax.org/books/intermediate-algebra-2e/pages/2-7-solve-absolute-value-inequalities) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/details/books/intermediate-algebra-2e). Changes: adapted the source text and examples for web presentation and converted selected Try It exercises into interactive checks.</small>
