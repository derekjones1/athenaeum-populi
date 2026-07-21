---
title: Solve Rational Equations
description: >-
  Solving rational equations, using rational functions, and solving rational
  equations for a specific variable — adapted from OpenStax Intermediate
  Algebra 2e, Section 7.4.
source_section: "7.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve rational
  equations, use rational functions, and solve a rational equation for a
  specific variable.
{{< /callout >}}

After defining the terms *expression* and *equation* earlier, we have used
them throughout this book. We have simplified many kinds of expressions and
solved many kinds of equations. We have simplified many rational expressions
so far in this chapter. Now we will solve a **rational equation**.

{{< callout type="info" >}}
  **Rational equation.** A rational equation is an equation that contains a
  rational expression.
{{< /callout >}}

You must make sure to know the difference between rational expressions and
rational equations. The equation contains an equal sign.

| Rational expression | Rational equation |
|---|---|
| $\tfrac{1}{8}x+\tfrac{1}{2}$ | $\tfrac{1}{8}x+\tfrac{1}{2}=\tfrac{1}{4}$ |
| $\tfrac{y+6}{y^2-36}$ | $\tfrac{y+6}{y^2-36}=y+1$ |
| $\tfrac{1}{n-3}+\tfrac{1}{n+4}$ | $\tfrac{1}{n-3}+\tfrac{1}{n+4}=\tfrac{15}{n^2+n-12}$ |

## Solve rational equations

We have already solved linear equations that contained fractions. We found
the LCD of all the fractions in the equation and then multiplied both sides
of the equation by the LCD to “clear” the fractions.

We will use the same strategy to solve rational equations. We will multiply
both sides of the equation by the LCD. Then, we will have an equation that
does not contain rational expressions and thus is much easier for us to
solve. But because the original equation may have a variable in a
denominator, we must be careful that we don't end up with a solution that
would make a denominator equal to zero.

So before we begin solving a rational equation, we examine it first to find
the values that would make any denominators zero. That way, when we solve a
rational equation we will know if there are any algebraic solutions we must
discard.

An algebraic solution to a rational equation that would cause any of the
rational expressions to be undefined is called an **extraneous solution to
a rational equation**.

{{< callout type="info" >}}
  **Extraneous solution to a rational equation.** An extraneous solution to
  a rational equation is an algebraic solution that would cause any of the
  expressions in the original equation to be undefined.
{{< /callout >}}

We note any possible extraneous solutions, $c$, by writing $x\ne c$ next to
the equation.

**Example.** Solve $\tfrac{1}{x}+\tfrac{1}{3}=\tfrac{5}{6}$.

If $x=0$, then $\tfrac{1}{x}$ is undefined, so write $x\ne0$. The LCD of
$\tfrac{1}{x}$, $\tfrac{1}{3}$, and $\tfrac{5}{6}$ is $6x$. Multiply both
sides by $6x$, distribute, and solve:

$$
\begin{array}{lrcl}
\text{Clear the fractions.} & 6x\left(\tfrac{1}{x}+\tfrac{1}{3}\right) &=& 6x\left(\tfrac{5}{6}\right) \\[10pt]
\text{Distribute and simplify.} & 6+2x &=& 5x \\[4pt]
\text{Solve.} & 6 &=& 3x \\[4pt]
&&& x=2
\end{array}
$$

We did not get $0$ as an algebraic solution. Check $x=2$ in the original
equation:

$$
\begin{array}{rcl}
\tfrac{1}{2}+\tfrac{1}{3} &\overset{?}{=}& \tfrac{5}{6} \\[10pt]
\tfrac{3}{6}+\tfrac{2}{6} &\overset{?}{=}& \tfrac{5}{6} \\[10pt]
\tfrac{5}{6} &=& \tfrac{5}{6}\ \checkmark
\end{array}
$$

The solution is $x=2$.

{{< fillin
  question="Solve $\tfrac{1}{y}+\tfrac{2}{3}=\tfrac{1}{5}$."
  answer="-\frac{15}{7}"
  answerDisplay="$y=-\tfrac{15}{7}$"
  hint="The LCD is $15y$. Note first that $y\ne0$."
>}}

{{< fillin
  question="Solve $\tfrac{2}{3}+\tfrac{1}{5}=\tfrac{1}{x}$."
  answer="\frac{15}{13}"
  answerDisplay="$x=\tfrac{15}{13}$"
  hint="Combine the fractions on the left, or clear all fractions using the LCD."
>}}

{{< callout type="info" >}}
  **Solve equations with rational expressions.**

  1. Note any value of the variable that would make any denominator zero.
  2. Find the least common denominator of all denominators in the equation.
  3. Clear the fractions by multiplying both sides of the equation by the LCD.
  4. Solve the resulting equation.
  5. Check: if any values found in Step 1 are algebraic solutions, discard
     them; check any remaining solutions in the original equation.
{{< /callout >}}

We always start by noting the values that would cause any denominators to be
zero.

**Example.** Solve $1-\tfrac{5}{y}=-\tfrac{6}{y^2}$.

Note $y\ne0$. The LCD is $y^2$. Clear the fractions and solve the resulting
quadratic equation using the Zero Product Property:

$$
\begin{array}{lrcl}
\text{Clear the fractions.} & y^2\left(1-\tfrac{5}{y}\right) &=& y^2\left(-\tfrac{6}{y^2}\right) \\[10pt]
\text{Distribute and multiply.} & y^2-5y &=& -6 \\[4pt]
\text{Write in standard form.} & y^2-5y+6 &=& 0 \\[4pt]
\text{Factor.} & (y-2)(y-3) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & y-2=0 &\text{or}& y-3=0 \\[4pt]
\text{Solve.} & y=2 &\text{or}& y=3
\end{array}
$$

Neither solution is excluded. Check both values in the original equation.

For $y=2$:

$$
\begin{array}{rcl}
1-\tfrac{5}{2} &\overset{?}{=}& -\tfrac{6}{2^2} \\[10pt]
\tfrac{2}{2}-\tfrac{5}{2} &\overset{?}{=}& -\tfrac{6}{4} \\[10pt]
-\tfrac{3}{2} &=& -\tfrac{3}{2}\ \checkmark
\end{array}
$$

For $y=3$:

$$
\begin{array}{rcl}
1-\tfrac{5}{3} &\overset{?}{=}& -\tfrac{6}{3^2} \\[10pt]
\tfrac{3}{3}-\tfrac{5}{3} &\overset{?}{=}& -\tfrac{6}{9} \\[10pt]
-\tfrac{2}{3} &=& -\tfrac{2}{3}\ \checkmark
\end{array}
$$

The solutions are $y=2$ and $y=3$.

{{< fillin
  question="Solve $1-\tfrac{2}{x}=\tfrac{15}{x^2}$. Enter both solutions, separated by commas."
  answer="-3, 5"
  answerDisplay="$x=-3,\ 5$"
  hint="Clear fractions with $x^2$, write the quadratic in standard form, and factor."
>}}

{{< fillin
  question="Solve $1-\tfrac{4}{y}=\tfrac{12}{y^2}$. Enter both solutions, separated by commas."
  answer="-2, 6"
  answerDisplay="$y=-2,\ 6$"
  hint="Clear fractions with $y^2$, then factor the resulting quadratic."
>}}

In the next example, the last denominator is a difference of squares.
Remember to factor it first to find the LCD.

**Example.** Solve $\tfrac{2}{x+2}+\tfrac{4}{x-2}=\tfrac{x-1}{x^2-4}$.

The denominators show that $x\ne-2$ and $x\ne2$. Since
$x^2-4=(x+2)(x-2)$, the LCD is $(x+2)(x-2)$.

$$
\begin{array}{lrcl}
\text{Multiply both sides by the LCD.} & (x+2)(x-2)\left(\tfrac{2}{x+2}+\tfrac{4}{x-2}\right) &=& (x+2)(x-2)\left(\tfrac{x-1}{x^2-4}\right) \\[10pt]
\text{Distribute.} & (x+2)(x-2)\tfrac{2}{x+2}+(x+2)(x-2)\tfrac{4}{x-2} &=& (x+2)(x-2)\tfrac{x-1}{(x+2)(x-2)} \\[10pt]
\text{Remove common factors and simplify.} & 2(x-2)+4(x+2) &=& x-1 \\[4pt]
\text{Distribute.}\quad & 2x-4+4x+8 &=& x-1 \\[4pt]
\text{Solve.} & 6x+4 &=& x-1 \\[4pt]
& 5x &=& -5 \\[4pt]
&&& x=-1
\end{array}
$$

The value $-1$ is not excluded. In the original equation it gives
$\tfrac{2}{1}+\tfrac{4}{-3}=\tfrac{-2}{-3}$, or
$\tfrac{2}{3}=\tfrac{2}{3}$. The solution is $x=-1$.

{{< fillin
  question="Solve $\tfrac{2}{x+1}+\tfrac{1}{x-1}=\tfrac{1}{x^2-1}$."
  answer="\frac{2}{3}"
  answerDisplay="$x=\tfrac{2}{3}$"
  hint="Factor $x^2-1$, note the excluded values, and multiply by the LCD."
>}}

{{< fillin
  question="Solve $\tfrac{5}{y+3}+\tfrac{2}{y-3}=\tfrac{5}{y^2-9}$."
  answer="2"
  answerDisplay="$y=2$"
  hint="Factor the difference of squares before finding the LCD."
>}}

In the next example, the first denominator is a trinomial. Remember to
factor it first to find the LCD.

**Example.** Solve
$\tfrac{m+11}{m^2-5m+4}=\tfrac{5}{m-4}-\tfrac{3}{m-1}$.

Factor $m^2-5m+4=(m-4)(m-1)$, so $m\ne4$ and $m\ne1$. The LCD is
$(m-4)(m-1)$.

Multiply both sides by the LCD:

$$
\begin{aligned}
&(m-4)(m-1)\left(\tfrac{m+11}{(m-4)(m-1)}\right) \\
&\quad=(m-4)(m-1)\left(\tfrac{5}{m-4}-\tfrac{3}{m-1}\right).
\end{aligned}
$$

Distribute, then remove the common factors:

$$
\begin{aligned}
&(m-4)(m-1)\tfrac{m+11}{(m-4)(m-1)} \\
&\quad=(m-4)(m-1)\tfrac{5}{m-4}
 -(m-4)(m-1)\tfrac{3}{m-1} \\
&m+11=5(m-1)-3(m-4).
\end{aligned}
$$

Now solve the resulting equation:

$$
\begin{array}{lrcl}
\text{Solve the resulting equation.} & m+11 &=& 5m-5-3m+12 \\[4pt]
&&& 4=m
\end{array}
$$

The only algebraic solution was $4$, but $4$ would make a denominator equal
to zero. The algebraic solution is an extraneous solution. There is no
solution to this equation.

{{< multiplechoice
  question="Solve $\tfrac{x+13}{x^2-7x+10}=\tfrac{6}{x-5}-\tfrac{4}{x-2}$."
  hint="Factor the quadratic denominator, clear fractions, and compare the algebraic solution with the excluded values."
  answer="No solution"
>}}
No solution
$x=2$
$x=5$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve $\tfrac{y-6}{y^2+3y-4}=\tfrac{2}{y+4}+\tfrac{7}{y-1}$."
  hint="Factor $y^2+3y-4$, clear fractions, and check whether the result is excluded."
  answer="No solution"
>}}
No solution
$y=-4$
$y=1$
{{< /multiplechoice >}}

The equation in the previous example had only one algebraic solution, but it
was an extraneous solution. That left us with no solution to the equation. In
the next example we get two algebraic solutions. Here one or both could be
extraneous solutions.

**Example.** Solve $\tfrac{y}{y+6}=\tfrac{72}{y^2-36}+4$.

Factor $y^2-36=(y-6)(y+6)$, so $y\ne6$ and $y\ne-6$. The LCD is
$(y-6)(y+6)$.

$$
\begin{array}{lrcl}
\text{Clear the fractions.} & (y-6)y &=& 72+4(y-6)(y+6) \\[4pt]
\text{Simplify.} & y^2-6y &=& 72+4y^2-144 \\[4pt]
\text{Solve the resulting equation.} & 0 &=& 3y^2+6y-72 \\[4pt]
&&& 0=3(y^2+2y-24) \\[4pt]
&&& 0=3(y+6)(y-4) \\[4pt]
&&& y=-6,\ y=4
\end{array}
$$

$y=-6$ is extraneous. Checking $y=4$ gives
$\tfrac{4}{10}=\tfrac{72}{-20}+4=\tfrac{4}{10}$. The solution is $y=4$.

{{< fillin
  question="Solve $\tfrac{x}{x+4}=\tfrac{32}{x^2-16}+5$."
  answer="3"
  answerDisplay="$x=3$"
  hint="Factor the difference of squares and discard any excluded algebraic solution."
>}}

{{< fillin
  question="Solve $\tfrac{y}{y+8}=\tfrac{128}{y^2-64}+9$."
  answer="7"
  answerDisplay="$y=7$"
  hint="Factor $y^2-64$, clear fractions, then test the algebraic solutions against the excluded values."
>}}

In some cases, all the algebraic solutions are extraneous.

**Example.** Solve
$\tfrac{x}{2x-2}-\tfrac{2}{3x+3}=\tfrac{5x^2-2x+9}{12x^2-12}$.

Factoring the denominators gives
$2(x-1)$, $3(x+1)$, and $12(x-1)(x+1)$, so $x\ne1$ and $x\ne-1$.
The LCD is $12(x-1)(x+1)$.

$$
\begin{array}{lrcl}
\text{Clear the fractions and simplify.} & 6x(x+1)-4(x-1)\cdot2 &=& 5x^2-2x+9 \\[4pt]
\text{Distribute.} & 6x^2+6x-8x+8 &=& 5x^2-2x+9 \\[4pt]
\text{Solve.} & x^2-1 &=& 0 \\[4pt]
&&& (x-1)(x+1)=0 \\[4pt]
&&& x=1\text{ or }x=-1
\end{array}
$$

Both $x=1$ and $x=-1$ are extraneous solutions. The equation has no
solution.

{{< multiplechoice
  question="Solve $\tfrac{y}{5y-10}-\tfrac{5}{3y+6}=\tfrac{2y^2-19y+54}{15y^2-60}$."
  hint="Factor every denominator, clear fractions, and compare both algebraic solutions with the excluded values."
  answer="No solution"
>}}
No solution
$y=2$
$y=-2$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve $\tfrac{z}{2z+8}-\tfrac{3}{4z-8}=\tfrac{3z^2-16z-16}{8z^2+16z-64}$."
  hint="Factor every denominator before finding the LCD."
  answer="No solution"
>}}
No solution
$z=-4$
$z=2$
{{< /multiplechoice >}}

**Example.** Solve
$\tfrac{4}{3x^2-10x+3}+\tfrac{3}{3x^2+2x-1}=\tfrac{2}{x^2-2x-3}$.

Factor all denominators:

$$
\frac{4}{(3x-1)(x-3)}+\frac{3}{(3x-1)(x+1)}
=\frac{2}{(x-3)(x+1)},
\qquad x\ne-1,\ x\ne\tfrac{1}{3},\ x\ne3.
$$

The LCD is $(3x-1)(x+1)(x-3)$. Clearing fractions gives

$$4(x+1)+3(x-3)=2(3x-1).$$

Distribute and solve:

$$
\begin{array}{rcl}
4x+4+3x-9 &=& 6x-2 \\[4pt]
7x-5 &=& 6x-2 \\[4pt]
x &=& 3
\end{array}
$$

The only algebraic solution, $x=3$, would make a denominator zero. The
algebraic solution is extraneous. There is no solution to this equation.

{{< multiplechoice
  question="Solve $\tfrac{15}{x^2+x-6}-\tfrac{3}{x-2}=\tfrac{2}{x+3}$."
  hint="Factor the quadratic denominator and compare the algebraic solution with the excluded values."
  answer="No solution"
>}}
No solution
$x=2$
$x=-3$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve $\tfrac{5}{x^2+2x-3}-\tfrac{3}{x^2+x-2}=\tfrac{1}{x^2+5x+6}$."
  hint="Factor all three quadratic denominators before finding the LCD."
  answer="No solution"
>}}
No solution
$x=1$
$x=-2$
{{< /multiplechoice >}}

## Use rational functions

Working with functions that are defined by rational expressions often lead
to rational equations. Again, we use the same techniques to solve them.

**Example.** For the rational function
$f(x)=\tfrac{2x-6}{x^2-8x+15}$, (a) find the domain of the function, (b)
solve $f(x)=1$, and (c) find the points on the graph at this function value.

The domain of a rational function is all real numbers except those that make
the rational expression undefined. Set the denominator equal to zero:

$$
\begin{array}{rcl}
x^2-8x+15 &=& 0 \\[4pt]
(x-3)(x-5) &=& 0 \\[4pt]
x &=& 3,\ 5
\end{array}
$$

So the domain is all real numbers except $x\ne3$ and $x\ne5$.

To solve $f(x)=1$, substitute the rational expression and factor the
denominator:

$$
\begin{array}{rcl}
\tfrac{2x-6}{(x-3)(x-5)} &=& 1 \\[10pt]
2x-6 &=& x^2-8x+15 \\[4pt]
0 &=& x^2-10x+21 \\[4pt]
0 &=& (x-7)(x-3) \\[4pt]
x-7=0 &\text{or}& x-3=0 \\[4pt]
x=7 &\text{or}& x=3
\end{array}
$$

However, $x=3$ is outside the domain, so discard that root as extraneous.
The value of the function is $1$ when $x=7$, so the point on the graph is
$(7,1)$.

{{< fillin
  question="For $f(x)=\tfrac{8-x}{x^2-7x+12}$, find the values excluded from the domain, separated by commas."
  answer="3, 4"
  answerDisplay="$x\ne3,\ x\ne4$"
  hint="Factor the denominator and set each factor equal to zero."
>}}

{{< fillin
  question="For $f(x)=\tfrac{8-x}{x^2-7x+12}$, solve $f(x)=3$. Enter both solutions, separated by commas."
  answer="2, \frac{14}{3}"
  answerDisplay="$x=2,\ \tfrac{14}{3}$"
  hint="Set the rational expression equal to $3$, clear fractions, and discard excluded roots."
>}}

{{< fillin
  question="For $f(x)=\tfrac{8-x}{x^2-7x+12}$, find the points on the graph where $f(x)=3$, separated by commas."
  answer="(2,3), (\frac{14}{3},3)"
  answerDisplay="$(2,3),\ (\tfrac{14}{3},3)$"
  hint="Use each input found when solving $f(x)=3$ as the first coordinate; the function value is the second coordinate."
>}}

{{< fillin
  question="For $f(x)=\tfrac{x-1}{x^2-6x+5}$, find the values excluded from the domain, separated by commas."
  answer="1, 5"
  answerDisplay="$x\ne1,\ x\ne5$"
  hint="Factor the denominator."
>}}

{{< fillin
  question="For $f(x)=\tfrac{x-1}{x^2-6x+5}$, solve $f(x)=4$."
  answer="\frac{21}{4}"
  answerDisplay="$x=\tfrac{21}{4}$"
  hint="Set the rational expression equal to $4$ and check the roots against the domain."
>}}

{{< fillin
  question="For $f(x)=\tfrac{x-1}{x^2-6x+5}$, find the point on the graph where $f(x)=4$."
  answer="(\frac{21}{4},4)"
  answerDisplay="$(\tfrac{21}{4},4)$"
  hint="Use the input found when solving $f(x)=4$ as the first coordinate and the function value as the second coordinate."
>}}

## Solve a rational equation for a specific variable

When we solved linear equations, we learned how to solve a formula for a
specific variable. Many formulas used in business, science, economics, and
other fields use rational equations to model the relation between two or
more variables. We will now see how to solve a rational equation for a
specific variable.

When we developed the point-slope formula from our slope formula, we cleared
the fractions by multiplying by the LCD:

$$
\begin{array}{lrcl}
&m&=&\tfrac{y-y_1}{x-x_1} \\[10pt]
\text{Multiply both sides by }x-x_1. & m(x-x_1)&=&\left(\tfrac{y-y_1}{x-x_1}\right)(x-x_1) \\[10pt]
\text{Simplify.} & m(x-x_1)&=&y-y_1 \\[4pt]
\text{Rewrite with the }y\text{ terms on the left.} & y-y_1&=&m(x-x_1)
\end{array}
$$

In the next example, we will use the same technique with the formula for
slope that we used to get the point-slope form of an equation of a line
through a point in Chapter 3. We will add one more step to solve for $y$.

**Example.** Solve $m=\tfrac{y-2}{x-3}$ for $y$.

Note $x\ne3$. Clear the fractions by multiplying both sides by $x-3$, then
isolate the term with $y$:

$$
\begin{array}{rcl}
(x-3)m &=& y-2 \\[4pt]
xm-3m+2 &=& y
\end{array}
$$

Thus $y=mx-3m+2$.

{{< fillin
  question="Solve $m=\tfrac{y-5}{x-4}$ for $y$."
  answer="mx-4m+5"
  answerDisplay="$y=mx-4m+5$"
  hint="Multiply both sides by $x-4$, then add $5$."
>}}

{{< fillin
  question="Solve $m=\tfrac{y-1}{x+5}$ for $y$."
  answer="mx+5m+1"
  answerDisplay="$y=mx+5m+1$"
  hint="Multiply both sides by $x+5$, then add $1$."
>}}

Remember to multiply both sides by the LCD in the next example.

**Example.** Solve $\tfrac{1}{c}+\tfrac{1}{m}=1$ for $c$.

Note $c\ne0$ and $m\ne0$. The LCD is $cm$.

$$
\begin{array}{lrcl}
\text{Clear the fractions.} & cm\left(\tfrac{1}{c}+\tfrac{1}{m}\right) &=& cm(1) \\[10pt]
\text{Distribute and simplify.} & m+c &=& cm \\[4pt]
\text{Collect the terms with }c\text{ to the right.} & m &=& cm-c \\[4pt]
\text{Factor the expression on the right.} & m &=& c(m-1) \\[4pt]
\text{Divide by }m-1. & \tfrac{m}{m-1} &=& c
\end{array}
$$

Even though we excluded $c=0$ and $m=0$ from the original equation, we must
also now state that $m\ne1$. Thus $c=\tfrac{m}{m-1}$.

{{< fillin
  question="Solve $\tfrac{1}{a}+\tfrac{1}{b}=c$ for $a$."
  answer="\frac{b}{bc-1}"
  answerDisplay="$a=\tfrac{b}{bc-1}$"
  hint="Multiply by $ab$, collect the terms containing $a$, and factor."
>}}

{{< fillin
  question="Solve $\tfrac{2}{x}+\tfrac{1}{3}=\tfrac{1}{y}$ for $y$."
  answer="\frac{3x}{x+6}"
  answerDisplay="$y=\tfrac{3x}{x+6}$"
  hint="Clear fractions using the LCD $3xy$, then isolate $y$."
>}}

**Key terms.** A **rational equation** is an equation that contains a
rational expression. An **extraneous solution to a rational equation** is
an algebraic solution that would cause an expression in the original
equation to be undefined.

<small>Adapted from [OpenStax Intermediate Algebra 2e, Section 7.4](https://openstax.org/books/intermediate-algebra-2e/pages/7-4-solve-rational-equations), by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/details/books/intermediate-algebra-2e). Changes: adapted the section for interactive web delivery and converted Try It exercises to immediate-feedback questions.</small>
