---
title: Solve Quadratic Equations Using the Quadratic Formula
description: >-
  Solving quadratic equations with the Quadratic Formula, using the discriminant
  to predict the number of solutions, and choosing an appropriate solution method.
source_section: "10.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve quadratic equations
  using the quadratic formula, use the discriminant to predict the number of
  solutions of a quadratic equation, and identify the most appropriate method
  to use to solve a quadratic equation.
{{< /callout >}}

## Solve quadratic equations using the Quadratic Formula

When we solved quadratic equations in the last section by completing the square,
we took the same steps every time. By the end of this exercise set, you may have
been wondering “isn’t there an easier way to do this?” The answer is “yes.” In
this section, we will derive and use a formula to find the solution of a
quadratic equation.

We have already seen how to solve a formula for a specific variable “in general”
so that we would do the algebraic steps only once and then use the new formula
to find the value of the specific variable. Now, we will go through the steps of
completing the square in general to solve a quadratic equation for $x$. It may
be helpful to look at one of the examples at the end of the last section where
we solved an equation of the form $ax^2+bx+c=0$ as you read through the algebraic
steps below, so you see them with numbers as well as “in general.”

We start with the standard form of a quadratic equation and solve it for $x$ by
completing the square.

$$
\begin{array}{lrcl}
\text{Start with standard form.} & ax^2+bx+c &=& 0,\ a\ne0 \\[4pt]
\text{Isolate the variable terms on one side.} & ax^2+bx &=& -c \\[4pt]
\text{Make leading coefficient 1, by dividing by }a. & \tfrac{ax^2}{a}+\tfrac ba x &=& -\tfrac ca \\[10pt]
\text{Simplify.} & x^2+\tfrac ba x &=& -\tfrac ca \\[10pt]
\text{Find }(\tfrac12\cdot\tfrac ba)^2\text{ and add it to both sides.} & x^2+\tfrac ba x+\tfrac{b^2}{4a^2} &=& -\tfrac ca+\tfrac{b^2}{4a^2} \\[10pt]
\text{The left side is a perfect square, factor it.} & (x+\tfrac{b}{2a})^2 &=& -\tfrac ca+\tfrac{b^2}{4a^2} \\[10pt]
\text{Write equivalent fractions with the common denominator.} & (x+\tfrac{b}{2a})^2 &=& \tfrac{b^2}{4a^2}-\tfrac{c\cdot4a}{a\cdot4a} \\[10pt]
\text{Simplify.} & (x+\tfrac{b}{2a})^2 &=& \tfrac{b^2}{4a^2}-\tfrac{4ac}{4a^2} \\[10pt]
\text{Combine to one fraction.} & (x+\tfrac{b}{2a})^2 &=& \tfrac{b^2-4ac}{4a^2} \\[10pt]
\text{Use the square root property.} & x+\tfrac{b}{2a} &=& \pm\sqrt{\tfrac{b^2-4ac}{4a^2}} \\[10pt]
\text{Simplify.} & x+\tfrac{b}{2a} &=& \pm\tfrac{\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Add }-\tfrac{b}{2a}\text{ to both sides.} & x &=& -\tfrac{b}{2a}\pm\tfrac{\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Combine the terms on the right side.} & x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a}
\end{array}
$$

This last equation is the Quadratic Formula.

{{< callout type="info" >}}
  **Quadratic Formula.** The solutions to a quadratic equation of the form
  $ax^2+bx+c=0$, $a\ne0$ are given by the formula:

  $$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$
{{< /callout >}}

To use the Quadratic Formula we substitute the values of $a$, $b$, and $c$ into
the expression on the right side of the formula. Then, we do all the math to
simplify the expression. The result gives the solution(s) to the quadratic equation.

**Example 10.28. How to Solve a Quadratic Equation Using the Quadratic Formula.**
Solve $2x^2+9x-5=0$ by using the Quadratic Formula.

$$
\begin{array}{lrcl}
\text{Write in standard form and identify }a,b,c. & 2x^2+9x-5 &=& 0 \\[4pt]
&&& a=2,\ b=9,\ c=-5 \\[4pt]
\text{Substitute in the Quadratic Formula.} & x &=& \tfrac{-9\pm\sqrt{9^2-4\cdot2\cdot(-5)}}{2\cdot2} \\[10pt]
\text{Simplify the fraction, and solve for }x. & x &=& \tfrac{-9\pm\sqrt{121}}4 \\[10pt]
& x &=& \tfrac{-9\pm11}{4} \\[10pt]
&&& x=\tfrac12,\ x=-5
\end{array}
$$

Check the solutions: $2(\tfrac12)^2+9(\tfrac12)-5=0\ \checkmark$ and
$2(-5)^2+9(-5)-5=0\ \checkmark$.

{{< callout type="info" >}}
  **Solve a quadratic equation using the Quadratic Formula.**

  1. Write the Quadratic Formula in standard form. Identify the $a$, $b$, and $c$ values.
  2. Write the Quadratic Formula. Then substitute in the values of $a$, $b$, and $c$.
  3. Simplify.
  4. Check the solutions.
{{< /callout >}}

If you say the formula as you write it in each problem, you’ll have it memorized
in no time. And remember, the Quadratic Formula is an equation. Be sure you
start with “$x=$.”

{{< fillin
  question="Solve $3y^2-5y+2=0$ by using the Quadratic Formula. Enter both solutions separated by commas, least to greatest."
  answer="2/3, 1"
  answerDisplay="$\tfrac23,\ 1$"
  hint="Identify $a=3$, $b=-5$, and $c=2$, then substitute into the formula."
>}}

**Example 10.29.** Solve $x^2-6x+5=0$ by using the Quadratic Formula.

$$
\begin{array}{lrcl}
\text{This equation is in standard form.} & x^2-6x+5 &=& 0 \\[4pt]
\text{Identify the }a,b,c\text{ values.} &&& a=1,\ b=-6,\ c=5 \\[4pt]
\text{Write the Quadratic Formula.} & x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Substitute in the values.} & x &=& \tfrac{-(-6)\pm\sqrt{(-6)^2-4\cdot1\cdot5}}{2\cdot1} \\[10pt]
\text{Simplify.} & x &=& \tfrac{6\pm\sqrt{16}}2 \\[10pt]
& x &=& \tfrac{6\pm4}{2} \\[10pt]
\text{Rewrite to show two solutions.} & x &=& \tfrac{6+4}{2},\ x=\tfrac{6-4}{2} \\[10pt]
\text{Simplify.} &&& x=5,\ x=1
\end{array}
$$

Check: $5^2-6\cdot5+5=0\ \checkmark$ and $1^2-6\cdot1+5=0\ \checkmark$.

When we solved quadratic equations by using the Square Root Property, we
sometimes got answers that had radicals. That can happen, too, when using the
Quadratic Formula. If we get a radical as a solution, the final answer must
have the radical in its simplified form.

**Example 10.30.** Solve $4y^2-5y-3=0$ by using the Quadratic Formula.

We can use the Quadratic Formula to solve for the variable in a quadratic
equation, whether or not it is named $x$.

$$
\begin{array}{lrcl}
\text{This equation is in standard form.} & 4y^2-5y-3 &=& 0 \\[4pt]
\text{Identify the }a,b,c\text{ values.} &&& a=4,\ b=-5,\ c=-3 \\[4pt]
\text{Write the Quadratic Formula.} & y &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Substitute in the values.} & y &=& \tfrac{-(-5)\pm\sqrt{(-5)^2-4\cdot4\cdot(-3)}}{2\cdot4} \\[10pt]
\text{Simplify.} & y &=& \tfrac{5\pm\sqrt{73}}8 \\[10pt]
\text{Rewrite to show two solutions.} & y &=& \tfrac{5+\sqrt{73}}8,\ y=\tfrac{5-\sqrt{73}}8
\end{array}
$$

Check. We leave the check to you.

{{< fillin
  question="Solve $2p^2+8p+5=0$ by using the Quadratic Formula. Enter both solutions separated by commas, least to greatest."
  answer="(-4-\sqrt{6})/2, (-4+\sqrt{6})/2"
  answerDisplay="$\tfrac{-4-\sqrt6}{2},\ \tfrac{-4+\sqrt6}{2}$"
  hint="Use $a=2$, $b=8$, and $c=5$ and simplify the radical."
>}}

**Example 10.31.** Solve $2x^2+10x+11=0$ by using the Quadratic Formula.

$$
\begin{array}{lrcl}
\text{Identify the values.} & 2x^2+10x+11 &=& 0,\quad a=2,\ b=10,\ c=11 \\[4pt]
\text{Substitute in the formula.} & x &=& \tfrac{-(10)\pm\sqrt{(10)^2-4\cdot2\cdot11}}{2\cdot2} \\[10pt]
\text{Simplify.} & x &=& \tfrac{-10\pm\sqrt{12}}4 \\[10pt]
\text{Simplify the radical.} & x &=& \tfrac{-10\pm2\sqrt3}{4} \\[10pt]
\text{Factor out the common factor.} & x &=& \tfrac{2(-5\pm\sqrt3)}4 \\[10pt]
\text{Remove common factors.} & x &=& \tfrac{-5\pm\sqrt3}{2} \\[10pt]
\text{Rewrite to show two solutions.} & x &=& \tfrac{-5+\sqrt3}{2},\ x=\tfrac{-5-\sqrt3}{2}
\end{array}
$$

Check. We leave the check to you.

We cannot take the square root of a negative number. So, when we substitute
$a$, $b$, and $c$ into the Quadratic Formula, if the quantity inside the radical
is negative, the quadratic equation has no real solution. We will see this in
the next example.

**Example 10.32.** Solve $3p^2+2p+9=0$ by using the Quadratic Formula.

$$
\begin{array}{lrcl}
\text{Identify the values.} & 3p^2+2p+9 &=& 0,\quad a=3,\ b=2,\ c=9 \\[4pt]
\text{Write the Quadratic Formula.} & p &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Substitute in the values.} & p &=& \tfrac{-(2)\pm\sqrt{(2)^2-4\cdot3\cdot9}}{2\cdot3} \\[10pt]
\text{Simplify.} & p &=& \tfrac{-2\pm\sqrt{4-108}}6 \\[10pt]
\text{Simplify the radical.} & p &=& \tfrac{-2\pm\sqrt{-104}}6 \\[10pt]
\text{We cannot take the square root of a negative number.} &&& \text{There is no real solution.}
\end{array}
$$

{{< multiplechoice
  question="Solve $4a^2-3a+8=0$ by using the Quadratic Formula."
  hint="Evaluate $b^2-4ac$."
  answer="No real solution"
>}}
No real solution
$a=2$
$a=-2$
Two real solutions
{{< /multiplechoice >}}

The quadratic equations we have solved so far in this section were all written
in standard form, $ax^2+bx+c=0$. Sometimes, we will need to do some algebra to
get the equation into standard form before we can use the Quadratic Formula.

**Example 10.33.** Solve $x(x+6)+4=0$ by using the Quadratic Formula.

$$
\begin{array}{lrcl}
& x(x+6)+4 &=& 0 \\[4pt]
\text{Distribute to get standard form.} & x^2+6x+4 &=& 0 \\[4pt]
\text{Identify the values.} &&& a=1,\ b=6,\ c=4 \\[4pt]
\text{Write the Quadratic Formula.} & x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Substitute in the values.} & x &=& \tfrac{-(6)\pm\sqrt{(6)^2-4\cdot1\cdot4}}{2\cdot1} \\[10pt]
\text{Simplify.} & x &=& \tfrac{-6\pm\sqrt{20}}2 \\[10pt]
\text{Simplify the radical.} & x &=& \tfrac{-6\pm2\sqrt5}{2} \\[10pt]
\text{Factor out the common factor.} & x &=& \tfrac{2(-3\pm\sqrt5)}2 \\[10pt]
\text{Remove common factors.} & x &=& -3\pm\sqrt5 \\[4pt]
\text{Rewrite to show two solutions.} & x &=& -3+\sqrt5,\ x=-3-\sqrt5
\end{array}
$$

Check. We leave the check to you.

{{< fillin
  question="Solve $x(x+2)-5=0$ by using the Quadratic Formula. Enter both solutions separated by commas, least to greatest."
  answer="-1-\sqrt{6}, -1+\sqrt{6}"
  answerDisplay="$-1-\sqrt6,\ -1+\sqrt6$"
  hint="First distribute and write the equation in standard form."
>}}

When we solved linear equations, if an equation had too many fractions we
“cleared the fractions” by multiplying both sides of the equation by the LCD.
This gave us an equivalent equation—without fractions—to solve. We can use the
same strategy with quadratic equations.

**Example 10.34.** Solve $\tfrac12u^2+\tfrac23u=\tfrac13$ by using the
Quadratic Formula.

$$
\begin{array}{lrcl}
& \tfrac12u^2+\tfrac23u &=& \tfrac13 \\[10pt]
\text{Multiply both sides by the LCD, 6.} & 6(\tfrac12u^2+\tfrac23u) &=& 6(\tfrac13) \\[10pt]
\text{Multiply.} & 3u^2+4u &=& 2 \\[4pt]
\text{Subtract 2 to get standard form.} & 3u^2+4u-2 &=& 0 \\[4pt]
\text{Identify the values.} &&& a=3,\ b=4,\ c=-2 \\[4pt]
\text{Write the Quadratic Formula.} & u &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Substitute in the values.} & u &=& \tfrac{-(4)\pm\sqrt{(4)^2-4\cdot3\cdot(-2)}}{2\cdot3} \\[10pt]
\text{Simplify.} & u &=& \tfrac{-4\pm\sqrt{40}}6 \\[10pt]
\text{Simplify the radical.} & u &=& \tfrac{-4\pm2\sqrt{10}}6 \\[10pt]
\text{Factor out the common factor.} & u &=& \tfrac{2(-2\pm\sqrt{10})}6 \\[10pt]
\text{Remove common factors.} & u &=& \tfrac{-2\pm\sqrt{10}}3 \\[10pt]
\text{Rewrite to show two solutions.} & u &=& \tfrac{-2+\sqrt{10}}3,\ u=\tfrac{-2-\sqrt{10}}3
\end{array}
$$

Check. We leave the check to you.

{{< fillin
  question="Solve $\tfrac14c^2-\tfrac13c=\tfrac1{12}$ by using the Quadratic Formula. Enter both solutions separated by commas, least to greatest."
  answer="(2-\sqrt{7})/3, (2+\sqrt{7})/3"
  answerDisplay="$\tfrac{2-\sqrt7}{3},\ \tfrac{2+\sqrt7}{3}$"
  hint="Multiply both sides by the LCD, $12$, to clear the fractions."
>}}

Think about the equation $(x-3)^2=0$. We know from the Zero Products Principle
that this equation has only one solution: $x=3$.

We will see in the next example how using the Quadratic Formula to solve an
equation with a perfect square also gives just one solution.

**Example 10.35.** Solve $4x^2-20x=-25$ by using the Quadratic Formula.

$$
\begin{array}{lrcl}
& 4x^2-20x &=& -25 \\[4pt]
\text{Add 25 to get standard form.} & 4x^2-20x+25 &=& 0 \\[4pt]
\text{Identify the values.} &&& a=4,\ b=-20,\ c=25 \\[4pt]
\text{Write the Quadratic Formula.} & x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Substitute in the values.} & x &=& \tfrac{-(-20)\pm\sqrt{(-20)^2-4\cdot4\cdot25}}{2\cdot4} \\[10pt]
\text{Simplify.} & x &=& \tfrac{20\pm\sqrt0}{8} \\[10pt]
\text{Simplify the radical.} & x &=& \tfrac{20}{8} \\[10pt]
\text{Simplify the fraction.} & x &=& \tfrac52
\end{array}
$$

Check. We leave the check to you. Did you recognize that $4x^2-20x+25$ is a
perfect square?

{{< fillin
  question="Solve $r^2+10r+25=0$ by using the Quadratic Formula."
  answer="-5"
  answerDisplay="$r=-5$"
  hint="The discriminant is zero, so there is only one solution."
>}}

## Use the Discriminant to Predict the Number of Solutions of a Quadratic Equation

When we solved the quadratic equations in the previous examples, sometimes we
got two solutions, sometimes one solution, sometimes no real solutions. Is
there a way to predict the number of solutions to a quadratic equation without
actually solving the equation?

Yes, the quantity inside the radical of the Quadratic Formula makes it easy for
us to determine the number of solutions. This quantity is called the discriminant.

{{< callout type="info" >}}
  **Discriminant.** In the Quadratic Formula
  $x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, the quantity $b^2-4ac$ is called the
  **discriminant**.
{{< /callout >}}

Let’s look at the discriminant of the equations in Example 10.28, Example
10.32, and Example 10.35, and the number of solutions to those quadratic equations.

| Quadratic equation (in standard form) | Discriminant $b^2-4ac$ | Sign | Number of real solutions |
| :--- | :--- | :---: | :---: |
| $2x^2+9x-5=0$ | $9^2-4\cdot2(-5)=121$ | $+$ | 2 |
| $4x^2-20x+25=0$ | $(-20)^2-4\cdot4\cdot25=0$ | $0$ | 1 |
| $3p^2+2p+9=0$ | $2^2-4\cdot3\cdot9=-104$ | $-$ | 0 |

When the discriminant is **positive**, the quadratic equation has **two
solutions**. When the discriminant is **zero**, the quadratic equation has
**one solution**. When the discriminant is **negative**, the quadratic
equation has **no real solutions**.

{{< callout type="info" >}}
  **Use the discriminant, $b^2-4ac$, to determine the number of solutions of a
  Quadratic Equation.** For $ax^2+bx+c=0$, $a\ne0$:

  - if $b^2-4ac>0$, the equation has two solutions.
  - if $b^2-4ac=0$, the equation has one solution.
  - if $b^2-4ac<0$, the equation has no real solutions.
{{< /callout >}}

**Example 10.36.** Determine the number of solutions to each quadratic
equation: (a) $2v^2-3v+6=0$ (b) $3x^2+7x-9=0$ (c) $5n^2+n+4=0$
(d) $9y^2-6y+1=0$.

To determine the number of solutions of each quadratic equation, we will look
at its discriminant.

**(a)** For $2v^2-3v+6=0$, $a=2$, $b=-3$, and $c=6$.

$$b^2-4ac=(-3)^2-4\cdot2\cdot6=9-48=-39$$

Because the discriminant is negative, there are no real solutions to the equation.

**(b)** For $3x^2+7x-9=0$, $a=3$, $b=7$, and $c=-9$.

$$b^2-4ac=7^2-4\cdot3\cdot(-9)=49+108=157$$

Because the discriminant is positive, there are two solutions to the equation.

**(c)** For $5n^2+n+4=0$, $a=5$, $b=1$, and $c=4$.

$$b^2-4ac=1^2-4\cdot5\cdot4=1-80=-79$$

Because the discriminant is negative, there are no real solutions to the equation.

**(d)** For $9y^2-6y+1=0$, $a=9$, $b=-6$, and $c=1$.

$$b^2-4ac=(-6)^2-4\cdot9\cdot1=36-36=0$$

Because the discriminant is 0, there is one solution to the equation.

{{< multiplechoice
  question="Determine the number of solutions to $8m^2-3m+6=0$."
  hint="Compute the discriminant and use its sign."
  answer="No real solutions"
>}}
No real solutions
One real solution
Two real solutions
{{< /multiplechoice >}}

## Identify the Most Appropriate Method to Use to Solve a Quadratic Equation

We have used four methods to solve quadratic equations:

- Factoring
- Square Root Property
- Completing the Square
- Quadratic Formula

You can solve any quadratic equation by using the Quadratic Formula, but that
is not always the easiest method to use.

{{< callout type="info" >}}
  **Identify the most appropriate method to solve a Quadratic Equation.**

  1. Try **Factoring first**. If the quadratic factors easily, this method is very quick.
  2. Try the **Square Root Property next**. If the equation fits the form
     $ax^2=k$ or $a(x-h)^2=k$, it can easily be solved by using the Square Root Property.
  3. Use the **Quadratic Formula**. Any quadratic equation can be solved by using the Quadratic Formula.
{{< /callout >}}

What about the method of completing the square? Most people find that method
cumbersome and prefer not to use it. We needed to include it in this chapter
because we completed the square in general to derive the Quadratic Formula.
You will also use the process of completing the square in other areas of algebra.

**Example 10.37.** Identify the most appropriate method to use to solve each
quadratic equation: (a) $5z^2=17$ (b) $4x^2-12x+9=0$ (c) $8u^2+6u=11$.

**(a)** $5z^2=17$

Since the equation is in the $ax^2=k$ form, the most appropriate method is to
use the Square Root Property.

**(b)** $4x^2-12x+9=0$

We recognize that the left side of the equation is a perfect square trinomial,
and so Factoring will be the most appropriate method.

**(c)** $8u^2+6u=11$

Put the equation in standard form: $8u^2+6u-11=0$.

While our first thought may be to try Factoring, thinking about all the
possibilities for trial and error leads us to choose the Quadratic Formula as
the most appropriate method.

{{< multiplechoice
  question="Identify the most appropriate method to use to solve $x^2+6x+8=0$."
  hint="Check whether the quadratic factors easily."
  answer="Factoring"
>}}
Factoring
Square Root Property
Quadratic Formula
{{< /multiplechoice >}}

## Key terms

**Quadratic Formula** — the solutions to a quadratic equation of the form
$ax^2+bx+c=0$, $a\ne0$, are given by
$x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$. **discriminant** — the quantity
$b^2-4ac$ in the Quadratic Formula; its sign predicts the number of real
solutions.

---

<small>This page is adapted from [Elementary Algebra 2e, Section 10.3](https://openstax.org/books/elementary-algebra-2e/pages/10-3-solve-quadratic-equations-using-the-quadratic-formula) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: reformatted the source for accessible web presentation and converted selected Try It problems into interactive exercises; the source exercise set and media links are omitted.</small>
