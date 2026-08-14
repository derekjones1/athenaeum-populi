---
title: Solve Quadratic Equations Using the Quadratic Formula
description: >-
  Solving quadratic equations using the Quadratic Formula, using the
  discriminant to predict the number and type of solutions, and choosing the
  most appropriate solution method.
source_section: "9.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve quadratic equations using the Quadratic Formula
- Use the discriminant to predict the number and type of solutions of a quadratic equation
- Identify the most appropriate method to use to solve a quadratic equation
{{< /callout >}}

## Solve quadratic equations using the Quadratic Formula

When we solved quadratic equations in the last section by completing the
square, we took the same steps every time. By the end of the exercise set, you
may have been wondering “isn’t there an easier way to do this?” The answer is
“yes.” Mathematicians look for patterns when they do things over and over in
order to make their work easier. In this section we will derive and use a
formula to find the solution of a quadratic equation.

We have already seen how to solve a formula for a specific variable “in
general,” so that we would do the algebraic steps only once, and then use the
new formula to find the value of the specific variable. Now we will go through
the steps of completing the square using the general form of a quadratic
equation to solve a quadratic equation for $x$.

We start with the standard form of a quadratic equation and solve it for $x$ by
completing the square.

$$
\begin{array}{lrcl}
& ax^2+bx+c &=& 0,\quad a\ne0 \\[4pt]
\text{Isolate the variable terms on one side.} & ax^2+bx &=& -c \\[4pt]
\text{Divide by }a. & \tfrac{ax^2}{a}+\tfrac{b}{a}x &=& -\tfrac{c}{a} \\[10pt]
\text{Simplify.} & x^2+\tfrac{b}{a}x &=& -\tfrac{c}{a} \\[10pt]
\text{Add }\left(\tfrac{1}{2}\cdot\tfrac{b}{a}\right)^2=\tfrac{b^2}{4a^2}\text{ to both sides.}
& x^2+\tfrac{b}{a}x+\tfrac{b^2}{4a^2} &=& -\tfrac{c}{a}+\tfrac{b^2}{4a^2} \\[10pt]
\text{Factor the perfect square.} & \left(x+\tfrac{b}{2a}\right)^2 &=& -\tfrac{c}{a}+\tfrac{b^2}{4a^2} \\[10pt]
\text{Write equivalent fractions.} & \left(x+\tfrac{b}{2a}\right)^2 &=& \tfrac{b^2}{4a^2}-\tfrac{4ac}{4a^2} \\[10pt]
\text{Combine to one fraction.} & \left(x+\tfrac{b}{2a}\right)^2 &=& \tfrac{b^2-4ac}{4a^2} \\[10pt]
\text{Use the Square Root Property.} & x+\tfrac{b}{2a} &=& \pm\sqrt{\tfrac{b^2-4ac}{4a^2}} \\[10pt]
\text{Simplify the radical.} & x+\tfrac{b}{2a} &=& \pm\tfrac{\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Add }-\tfrac{b}{2a}\text{ to both sides.} & x &=& -\tfrac{b}{2a}\pm\tfrac{\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Combine the terms on the right side.} & x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a}
\end{array}
$$

{{< callout type="info" >}}
  **Quadratic Formula.** The solutions to a quadratic equation of the form
  $ax^2+bx+c=0$, where $a\ne0$, are given by the formula

  $$
  x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}.
  $$
{{< /callout >}}

To use the Quadratic Formula, we substitute the values of $a$, $b$, and $c$
from the standard form into the expression on the right side of the formula.
Then we simplify the expression. The result is the pair of solutions to the
quadratic equation.

Notice the formula is an equation. Make sure you use both sides of the
equation.

**Example.** Solve by using the Quadratic Formula:

$$
2x^2+9x-5=0.
$$

The equation is in standard form, so $a=2$, $b=9$, and $c=-5$. Substitute
these values in the Quadratic Formula and simplify:

$$
\begin{array}{lrcl}
\text{Write the Quadratic Formula.} & x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Substitute.} & x &=& \tfrac{-9\pm\sqrt{9^2-4\cdot2\cdot(-5)}}{2\cdot2} \\[10pt]
\text{Simplify.} & x &=& \tfrac{-9\pm\sqrt{121}}{4} \\[10pt]
&&=& \tfrac{-9\pm11}{4} \\[10pt]
\text{Write the two solutions.} & x &=& \tfrac{-9+11}{4},\quad x=\tfrac{-9-11}{4} \\[10pt]
\text{Simplify.} & x &=& \tfrac{1}{2},\quad x=-5
\end{array}
$$

Check the solutions in the original equation:

$$
\begin{array}{rcl}
2\left(\tfrac{1}{2}\right)^2+9\left(\tfrac{1}{2}\right)-5
&=& \tfrac{1}{2}+\tfrac{9}{2}-5=0\ \checkmark \\[10pt]
2(-5)^2+9(-5)-5 &=& 50-45-5=0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $3y^2-5y+2=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="1, \frac{2}{3}"
  answerMode="unordered"
  answerDisplay="$y=1,\ y=\tfrac{2}{3}$"
  hint="Use $a=3$, $b=-5$, and $c=2$ in the Quadratic Formula."
>}}

{{< fillin
  question="Solve $4z^2+2z-6=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="1, -\frac{3}{2}"
  answerMode="unordered"
  answerDisplay="$z=1,\ z=-\tfrac{3}{2}$"
  hint="Use $a=4$, $b=2$, and $c=-6$ in the Quadratic Formula."
>}}

{{< callout type="info" >}}
  **Solve a quadratic equation using the Quadratic Formula.**

  1. Write the quadratic equation in standard form, $ax^2+bx+c=0$. Identify
     the values of $a$, $b$, and $c$.
  2. Write the Quadratic Formula. Then substitute in the values of $a$, $b$,
     and $c$.
  3. Simplify.
  4. Check the solutions.
{{< /callout >}}

If you say the formula as you write it in each problem, you’ll have it
memorized in no time! And remember, the Quadratic Formula is an EQUATION. Be
sure you start with “$x=$.”

**Example.** Solve by using the Quadratic Formula:

$$
x^2-6x=-5.
$$

Write the equation in standard form by adding $5$ to each side. Then
$x^2-6x+5=0$, so $a=1$, $b=-6$, and $c=5$.

$$
\begin{array}{lrcl}
\text{Write the Quadratic Formula.} & x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[10pt]
\text{Substitute.} & x &=& \tfrac{-(-6)\pm\sqrt{(-6)^2-4\cdot1\cdot5}}{2\cdot1} \\[10pt]
\text{Simplify.} & x &=& \tfrac{6\pm\sqrt{16}}{2} \\[10pt]
&&=& \tfrac{6\pm4}{2} \\[10pt]
\text{Rewrite to show two solutions.} & x &=& \tfrac{6+4}{2},\quad x=\tfrac{6-4}{2} \\[10pt]
\text{Simplify.} & x &=& 5,\quad x=1
\end{array}
$$

Both values make $x^2-6x+5=0$ a true equation.

{{< fillin
  question="Solve $a^2-2a=15$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="-3, 5"
  answerMode="unordered"
  answerDisplay="$a=-3,\ a=5$"
  hint="First write the equation in standard form."
>}}

{{< fillin
  question="Solve $b^2+24=-10b$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="-6, -4"
  answerMode="unordered"
  answerDisplay="$b=-6,\ b=-4$"
  hint="Move every term to the left side before identifying $a$, $b$, and $c$."
>}}

When we solved quadratic equations by using the Square Root Property, we
sometimes got answers that had radicals. That can happen, too, when using the
Quadratic Formula. If we get a radical as a solution, the final answer must
have the radical in its simplified form.

**Example.** Solve by using the Quadratic Formula:

$$
2x^2+10x+11=0.
$$

This equation is in standard form, with $a=2$, $b=10$, and $c=11$.

$$
\begin{array}{lrcl}
\text{Substitute in the Quadratic Formula.} & x &=& \tfrac{-10\pm\sqrt{10^2-4\cdot2\cdot11}}{2\cdot2} \\[10pt]
\text{Simplify.} & x &=& \tfrac{-10\pm\sqrt{12}}{4} \\[10pt]
\text{Simplify the radical.} & x &=& \tfrac{-10\pm2\sqrt3}{4} \\[10pt]
\text{Factor the numerator.} & x &=& \tfrac{2(-5\pm\sqrt3)}{4} \\[10pt]
\text{Remove common factors.} & x &=& \tfrac{-5\pm\sqrt3}{2}
\end{array}
$$

Thus

$$
x=\tfrac{-5+\sqrt3}{2},\qquad x=\tfrac{-5-\sqrt3}{2}.
$$

Check: We leave the check for you!

{{< fillin
  question="Solve $3m^2+12m+7=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="\frac{-6+\sqrt{15}}{3}, \frac{-6-\sqrt{15}}{3}"
  answerMode="unordered"
  answerDisplay="$m=\tfrac{-6+\sqrt{15}}{3},\ m=\tfrac{-6-\sqrt{15}}{3}$"
  hint="Simplify the radical and remove the common factor from the numerator and denominator."
>}}

{{< fillin
  question="Solve $5n^2+4n-4=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="\frac{-2+2\sqrt{6}}{5}, \frac{-2-2\sqrt{6}}{5}"
  answerMode="unordered"
  answerDisplay="$n=\tfrac{-2+2\sqrt6}{5},\ n=\tfrac{-2-2\sqrt6}{5}$"
  hint="Use $a=5$, $b=4$, and $c=-4$, then simplify the radical."
>}}

When we substitute $a$, $b$, and $c$ into the Quadratic Formula and the
radicand is negative, the quadratic equation will have imaginary or complex
solutions. We will see this in the next example.

**Example.** Solve by using the Quadratic Formula:

$$
3p^2+2p+9=0.
$$

This equation is in standard form, with $a=3$, $b=2$, and $c=9$.

$$
\begin{array}{lrcl}
\text{Substitute in the Quadratic Formula.} & p &=& \tfrac{-2\pm\sqrt{2^2-4\cdot3\cdot9}}{2\cdot3} \\[10pt]
\text{Simplify.} & p &=& \tfrac{-2\pm\sqrt{-104}}{6} \\[10pt]
\text{Use complex numbers.} & p &=& \tfrac{-2\pm\sqrt{104}\,i}{6} \\[10pt]
\text{Simplify the radical.} & p &=& \tfrac{-2\pm2\sqrt{26}\,i}{6} \\[10pt]
\text{Remove common factors.} & p &=& \tfrac{-1\pm\sqrt{26}\,i}{3}
\end{array}
$$

In standard $a+bi$ form, the two solutions are

$$
p=-\tfrac{1}{3}+\tfrac{\sqrt{26}}{3}i,\qquad
p=-\tfrac{1}{3}-\tfrac{\sqrt{26}}{3}i.
$$

{{< fillin
  question="Solve $4a^2-2a+8=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="\frac{1}{4}+\frac{\sqrt{31}}{4}i, \frac{1}{4}-\frac{\sqrt{31}}{4}i"
  answerMode="unordered"
  answerDisplay="$a=\tfrac14+\tfrac{\sqrt{31}}4i,\ a=\tfrac14-\tfrac{\sqrt{31}}4i$"
  hint="A negative discriminant gives two complex solutions."
>}}

{{< fillin
  question="Solve $5b^2+2b+4=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="-\frac{1}{5}+\frac{\sqrt{19}}{5}i, -\frac{1}{5}-\frac{\sqrt{19}}{5}i"
  answerMode="unordered"
  answerDisplay="$b=-\tfrac15+\tfrac{\sqrt{19}}5i,\ b=-\tfrac15-\tfrac{\sqrt{19}}5i$"
  hint="Simplify $\sqrt{-76}$ using $i=\sqrt{-1}$."
>}}

Remember, to use the Quadratic Formula, the equation must be written in
standard form, $ax^2+bx+c=0$. Sometimes, we will need to do some algebra to
get the equation into standard form before we can use the Quadratic Formula.

**Example.** Solve by using the Quadratic Formula:

$$
x(x+6)+4=0.
$$

Distribute to get the equation in standard form, $x^2+6x+4=0$. Then $a=1$,
$b=6$, and $c=4$.

$$
\begin{array}{lrcl}
\text{Substitute in the Quadratic Formula.} & x &=& \tfrac{-6\pm\sqrt{6^2-4\cdot1\cdot4}}{2\cdot1} \\[10pt]
\text{Simplify.} & x &=& \tfrac{-6\pm\sqrt{20}}{2} \\[10pt]
\text{Simplify the radical.} & x &=& \tfrac{-6\pm2\sqrt5}{2} \\[10pt]
\text{Remove common factors.} & x &=& -3\pm\sqrt5
\end{array}
$$

Thus $x=-3+\sqrt5$ or $x=-3-\sqrt5$. Check: We leave the check for you!

{{< fillin
  question="Solve $x(x+2)-5=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="-1+\sqrt{6}, -1-\sqrt{6}"
  answerMode="unordered"
  answerDisplay="$x=-1+\sqrt6,\ x=-1-\sqrt6$"
  hint="Distribute before identifying $a$, $b$, and $c$."
>}}

{{< fillin
  question="Solve $3y(y-2)-3=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="1+\sqrt{2}, 1-\sqrt{2}"
  answerMode="unordered"
  answerDisplay="$y=1+\sqrt2,\ y=1-\sqrt2$"
  hint="Write the equation as $3y^2-6y-3=0$ first."
>}}

When we solved linear equations, if an equation had too many fractions we
cleared the fractions by multiplying both sides of the equation by the LCD.
This gave us an equivalent equation—without fractions—to solve. We can use the
same strategy with quadratic equations.

**Example.** Solve by using the Quadratic Formula:

$$
\tfrac12u^2+\tfrac23u=\tfrac13.
$$

Our first step is to clear the fractions.

$$
\begin{array}{lrcl}
\text{Multiply both sides by the LCD, }6. &
6\left(\tfrac12u^2+\tfrac23u\right) &=& 6\left(\tfrac13\right) \\[10pt]
\text{Multiply.} & 3u^2+4u &=& 2 \\[4pt]
\text{Write in standard form.} & 3u^2+4u-2 &=& 0 \\[4pt]
\text{Substitute in the Quadratic Formula.} & u &=& \tfrac{-4\pm\sqrt{4^2-4\cdot3\cdot(-2)}}{2\cdot3} \\[10pt]
\text{Simplify.} & u &=& \tfrac{-4\pm\sqrt{40}}{6} \\[10pt]
\text{Simplify the radical.} & u &=& \tfrac{-4\pm2\sqrt{10}}{6} \\[10pt]
\text{Remove common factors.} & u &=& \tfrac{-2\pm\sqrt{10}}{3}
\end{array}
$$

Thus $u=\tfrac{-2+\sqrt{10}}3$ or $u=\tfrac{-2-\sqrt{10}}3$. Check: We
leave the check for you!

{{< fillin
  question="Solve $\tfrac14c^2-\tfrac13c=\tfrac1{12}$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="\frac{2+\sqrt{7}}{3}, \frac{2-\sqrt{7}}{3}"
  answerMode="unordered"
  answerDisplay="$c=\tfrac{2+\sqrt7}{3},\ c=\tfrac{2-\sqrt7}{3}$"
  hint="Multiply both sides by $12$ to clear the fractions."
>}}

{{< fillin
  question="Solve $\tfrac19d^2-\tfrac12d=-\tfrac13$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="\frac{9+\sqrt{33}}{4}, \frac{9-\sqrt{33}}{4}"
  answerMode="unordered"
  answerDisplay="$d=\tfrac{9+\sqrt{33}}4,\ d=\tfrac{9-\sqrt{33}}4$"
  hint="Clear the fractions before using the Quadratic Formula."
>}}

Think about the equation $(x-3)^2=0$. We know from the Zero Product Property
that this equation has only one solution, $x=3$.

We will see in the next example how using the Quadratic Formula to solve an
equation whose standard form is a perfect square trinomial equal to $0$ gives
just one solution. Notice that once the radicand is simplified it becomes $0$,
which leads to only one solution.

**Example.** Solve by using the Quadratic Formula:

$$
4x^2-20x=-25.
$$

Add $25$ to get the equation in standard form, $4x^2-20x+25=0$. Then $a=4$,
$b=-20$, and $c=25$.

$$
\begin{array}{lrcl}
\text{Substitute in the Quadratic Formula.} & x &=& \tfrac{-(-20)\pm\sqrt{(-20)^2-4\cdot4\cdot25}}{2\cdot4} \\[10pt]
\text{Simplify.} & x &=& \tfrac{20\pm\sqrt0}{8} \\[10pt]
\text{Simplify the radical.} & x &=& \tfrac{20}{8} \\[10pt]
\text{Simplify the fraction.} & x &=& \tfrac52
\end{array}
$$

Check: We leave the check for you!

Did you recognize that $4x^2-20x+25$ is a perfect square trinomial? It is
equivalent to $(2x-5)^2$. If you solve $4x^2-20x+25=0$ by factoring and then
using the Square Root Property, do you get the same result?

{{< fillin
  question="Solve $r^2+10r+25=0$ by using the Quadratic Formula."
  answer="-5"
  answerDisplay="$r=-5$"
  hint="The discriminant is $0$, so there is only one solution."
>}}

{{< fillin
  question="Solve $25t^2-40t=-16$ by using the Quadratic Formula."
  answer="\frac{4}{5}"
  answerDisplay="$t=\tfrac45$"
  hint="Write the equation in standard form and simplify the discriminant."
>}}

## Use the discriminant to predict the number and type of solutions of a quadratic equation

When we solved the quadratic equations in the previous examples, sometimes we
got two real solutions, one real solution, and sometimes two complex
solutions. Is there a way to predict the number and type of solutions to a
quadratic equation without actually solving the equation?

Yes, the expression under the radical of the Quadratic Formula makes it easy
for us to determine the number and type of solutions. This expression is
called the **discriminant**.

{{< callout type="info" >}}
  **Discriminant.** In the Quadratic Formula
  $x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, the quantity $b^2-4ac$ is called the
  **discriminant**.
{{< /callout >}}

Let’s look at the discriminant of the equations in some of the examples and
the number and type of solutions to those quadratic equations.

| Quadratic equation (in standard form) | Discriminant $b^2-4ac$ | Value of the discriminant | Number and type of solutions |
|---|---|---:|---|
| $2x^2+9x-5=0$ | $9^2-4\cdot2(-5)=121$ | $+$ | 2 real |
| $4x^2-20x+25=0$ | $(-20)^2-4\cdot4\cdot25=0$ | $0$ | 1 real |
| $3p^2+2p+9=0$ | $2^2-4\cdot3\cdot9=-104$ | $-$ | 2 complex |

{{< callout type="info" >}}
  **Using the discriminant, $b^2-4ac$, to determine the number and type of
  solutions of a quadratic equation.** For a quadratic equation of the form
  $ax^2+bx+c=0$, $a\ne0$:

  - If $b^2-4ac>0$, the equation has 2 real solutions.
  - If $b^2-4ac=0$, the equation has 1 real solution.
  - If $b^2-4ac<0$, the equation has 2 complex solutions.
{{< /callout >}}

**Example.** Determine the number of solutions to each quadratic equation:
(a) $3x^2+7x-9=0$, (b) $5n^2+n+4=0$, and (c) $9y^2-6y+1=0$.

To determine the number of solutions of each quadratic equation, we will look
at its discriminant.

For (a), $a=3$, $b=7$, and $c=-9$, so
$b^2-4ac=7^2-4\cdot3(-9)=49+108=157$. Since the discriminant is positive,
there are 2 real solutions to the equation.

For (b), $a=5$, $b=1$, and $c=4$, so
$b^2-4ac=1^2-4\cdot5\cdot4=1-80=-79$. Since the discriminant is negative,
there are 2 complex solutions to the equation.

For (c), $a=9$, $b=-6$, and $c=1$, so
$b^2-4ac=(-6)^2-4\cdot9\cdot1=36-36=0$. Since the discriminant is $0$, there
is 1 real solution to the equation.

{{< multiplechoice
  question="Determine the number and type of solutions to $8m^2-3m+6=0$."
  answer="2 complex solutions"
  hint="Find the sign of $(-3)^2-4(8)(6)$."
>}}
2 real solutions
1 real solution
2 complex solutions
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine the number and type of solutions to $5z^2+6z-2=0$."
  answer="2 real solutions"
  hint="Find the sign of $6^2-4(5)(-2)$."
>}}
2 complex solutions
1 real solution
2 real solutions
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine the number and type of solutions to $9w^2+24w+16=0$."
  answer="1 real solution"
  hint="Find the sign of $24^2-4(9)(16)$."
>}}
2 complex solutions
2 real solutions
1 real solution
{{< /multiplechoice >}}

## Identify the most appropriate method to use to solve a quadratic equation

We summarize the four methods that we have used to solve quadratic equations
below.

{{< callout type="info" >}}
  **Methods for solving quadratic equations**

  1. Factoring
  2. Square Root Property
  3. Completing the Square
  4. Quadratic Formula
{{< /callout >}}

Given that we have four methods to use to solve a quadratic equation, how do
you decide which one to use? Factoring is often the quickest method and so we
try it first. If the equation is $ax^2=k$ or $a(x-h)^2=k$, we use the Square
Root Property. For any other equation, it is probably best to use the
Quadratic Formula. Remember, you can solve any quadratic equation by using the
Quadratic Formula, but that is not always the easiest method.

What about the method of Completing the Square? Most people find that method
cumbersome and prefer not to use it. We needed to include it in the list of
methods because we completed the square in general to derive the Quadratic
Formula. You will also use the process of Completing the Square in other areas
of algebra.

{{< callout type="info" >}}
  **Identify the most appropriate method to solve a quadratic equation.**

  1. Try **Factoring** first. If the quadratic factors easily, this method is
     very quick.
  2. Try the **Square Root Property** next. If the equation fits the form
     $ax^2=k$ or $a(x-h)^2=k$, it can easily be solved by using the Square Root
     Property.
  3. Use the **Quadratic Formula**. Any other quadratic equation is best solved
     by using the Quadratic Formula.
{{< /callout >}}

The next example uses this strategy to decide how to solve each quadratic
equation.

**Example.** Identify the most appropriate method to use to solve each
quadratic equation: (a) $5z^2=17$, (b) $4x^2-12x+9=0$, and
(c) $8u^2+6u=11$.

(a) Since the equation is in the form $ax^2=k$, the most appropriate method
is to use the Square Root Property.

(b) We recognize that the left side of the equation is a perfect square
trinomial, and so factoring will be the most appropriate method.

(c) Put the equation in standard form: $8u^2+6u-11=0$. While our first thought
may be to try factoring, thinking about all the possibilities for the trial
and error method leads us to choose the Quadratic Formula as the most
appropriate method.

{{< multiplechoice
  question="Identify the most appropriate method to solve $x^2+6x+8=0$."
  answer="Factoring"
  hint="Check whether the quadratic factors easily."
>}}
Square Root Property
Quadratic Formula
Factoring
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most appropriate method to solve $(n-3)^2=16$."
  answer="Square Root Property"
  hint="The equation is already in the form $a(n-h)^2=k$."
>}}
Factoring
Square Root Property
Quadratic Formula
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most appropriate method to solve $5p^2-6p=9$."
  answer="Quadratic Formula"
  hint="First consider whether the equation factors easily or fits a square-root form."
>}}
Factoring
Quadratic Formula
Square Root Property
{{< /multiplechoice >}}

## Key terms

The **Quadratic Formula** gives the solutions of
$ax^2+bx+c=0$, $a\ne0$, as
$x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$. The **discriminant** is the quantity
$b^2-4ac$ under the radical in the Quadratic Formula.

## Practice

### Solve quadratic equations using the Quadratic Formula

{{< fillin
  question="Solve $2p^2-7p+3=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="\frac{1}{2}, 3"
  answerMode="unordered"
  answerDisplay="$p=\tfrac{1}{2},\ p=3$"
  hint="Use $a=2$, $b=-7$, and $c=3$ in the Quadratic Formula."
>}}

{{< fillin
  question="Solve $3u^2+7u-2=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="\frac{-7+\sqrt{73}}{6}, \frac{-7-\sqrt{73}}{6}"
  answerMode="unordered"
  answerDisplay="$u=\tfrac{-7+\sqrt{73}}{6},\ u=\tfrac{-7-\sqrt{73}}{6}$"
  hint="The discriminant $73$ is not a perfect square, so leave the radical in simplified form."
>}}

{{< fillin
  question="Solve $2x^2+3x+3=0$ by using the Quadratic Formula. Enter both solutions separated by a comma."
  answer="-\frac{3}{4}+\frac{\sqrt{15}}{4}i, -\frac{3}{4}-\frac{\sqrt{15}}{4}i"
  answerMode="unordered"
  answerDisplay="$x=-\tfrac34+\tfrac{\sqrt{15}}4i,\ x=-\tfrac34-\tfrac{\sqrt{15}}4i$"
  hint="A negative discriminant gives two complex solutions."
>}}

### Use the discriminant to predict the number and type of solutions of a quadratic equation

{{< multiplechoice
  question="Determine the number and type of solutions to $4x^2-5x+16=0$."
  answer="2 complex solutions"
  hint="Find the sign of $(-5)^2-4(4)(16)$."
>}}
2 real solutions
1 real solution
2 complex solutions
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine the number and type of solutions to $36y^2+36y+9=0$."
  answer="1 real solution"
  hint="Find the sign of $36^2-4(36)(9)$."
>}}
2 complex solutions
2 real solutions
1 real solution
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine the number and type of solutions to $6m^2+3m-5=0$."
  answer="2 real solutions"
  hint="Find the sign of $3^2-4(6)(-5)$."
>}}
2 real solutions
1 real solution
2 complex solutions
{{< /multiplechoice >}}

### Identify the most appropriate method to use to solve a quadratic equation

{{< multiplechoice
  question="Identify the most appropriate method to solve $x^2-5x-24=0$."
  answer="Factoring"
  hint="Check whether the quadratic factors easily."
>}}
Square Root Property
Quadratic Formula
Factoring
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most appropriate method to solve $(y+5)^2=12$."
  answer="Square Root Property"
  hint="The equation is already in the form $a(y-h)^2=k$."
>}}
Quadratic Formula
Square Root Property
Factoring
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most appropriate method to solve $14m^2+3m=11$."
  answer="Quadratic Formula"
  hint="Write the equation in standard form and consider whether factoring would be quick."
>}}
Factoring
Quadratic Formula
Square Root Property
{{< /multiplechoice >}}

<small>Adapted from [OpenStax Intermediate Algebra 2e, Section 9.3](https://openstax.org/books/intermediate-algebra-2e/pages/9-3-solve-quadratic-equations-using-the-quadratic-formula), by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted examples and Try It exercises for interactive web use and accessibility, and adapted selected end-of-section exercises into an interactive Practice block.</small>
