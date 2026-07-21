---
title: Quadratic Equations
description: >-
  Solving quadratic equations with the Zero Product Property, solving them by
  factoring after writing the equation in standard form, and solving number,
  geometry, and Pythagorean-theorem applications — adapted from OpenStax
  Elementary Algebra 2e, Section 7.6.
source_section: "7.6"
weight: 6
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve quadratic
  equations by using the Zero Product Property, solve quadratic equations by
  factoring, and solve applications modeled by quadratic equations.
{{< /callout >}}

We have already solved linear equations, equations of the form
$ax + by = c$. In linear equations, the variables have no exponents.
**Quadratic equations** are equations in which the variable is squared.
Listed below are some examples of quadratic equations:

$$x^2 + 5x + 6 = 0 \qquad 3y^2 + 4y = 10 \qquad 64u^2 - 81 = 0 \qquad n(n + 1) = 42$$

The last equation doesn't appear to have the variable squared, but when we
simplify the expression on the left we will get $n^2 + n$. The general form of
a quadratic equation is $ax^2 + bx + c = 0$, with $a \neq 0$.

{{< callout type="info" >}}
  **Quadratic equation.** An equation of the form $ax^2 + bx + c = 0$ is
  called a quadratic equation, where $a$, $b$, and $c$ are real numbers and
  $a \neq 0$.
{{< /callout >}}

To solve quadratic equations we need methods different than the ones we used
in solving linear equations. We will look at one method here and then several
others in a later chapter.

## Solve Quadratic Equations Using the Zero Product Property

We will first solve some quadratic equations by using the **Zero Product
Property**. The Zero Product Property says that if the product of two
quantities is zero, it must be that at least one of the quantities is zero.
The only way to get a product equal to zero is to multiply by zero itself.

{{< callout type="info" >}}
  **Zero Product Property.** If $a \cdot b = 0$, then either $a = 0$ or
  $b = 0$ or both.
{{< /callout >}}

We will now use the Zero Product Property to solve a quadratic equation.

**Example.** Solve: $(x + 1)(x - 4) = 0$.

**Step 1. Set each factor equal to zero.** The product equals zero, so at
least one factor must equal zero.

$$
\begin{array}{lrcl}
& (x + 1)(x - 4) &=& 0 \\[4pt]
& x + 1 = 0 \quad\text{or}\quad x - 4 &=& 0
\end{array}
$$

**Step 2. Solve the linear equations.**

$$x = -1 \quad\text{or}\quad x = 4$$

**Step 3. Check.** Substitute each solution separately into the original
equation.

$$
\begin{array}{rcl}
(-1 + 1)(-1 - 4) &\overset{?}{=}& 0 \\
(0)(-5) &\overset{?}{=}& 0 \\
0 &=& 0 \; \checkmark \\[6pt]
(4 + 1)(4 - 4) &\overset{?}{=}& 0 \\
(5)(0) &\overset{?}{=}& 0 \\
0 &=& 0 \; \checkmark
\end{array}
$$

The solutions are $x = -1$ and $x = 4$.

{{< fillin
  question="Solve: $(x - 3)(x + 5) = 0$. Enter the two solutions from least to greatest, separated by commas."
  answer="-5, 3"
  hint="Set each factor equal to zero: $x - 3 = 0$ or $x + 5 = 0$, then solve each."
>}}

{{< fillin
  question="Solve: $(y - 6)(y + 9) = 0$. Enter the two solutions from least to greatest, separated by commas."
  answer="-9, 6"
  hint="Set each factor equal to zero: $y - 6 = 0$ or $y + 9 = 0$, then solve each."
>}}

We usually will do a little more work than we did in this last example to
solve the linear equations that result from using the Zero Product Property.

**Example.** Solve: $(5n - 2)(6n - 1) = 0$.

Use the Zero Product Property to set each factor to $0$, then solve the
equations.

$$
\begin{array}{lrclcrcl}
& 5n - 2 &=& 0 & \quad\text{or}\quad & 6n - 1 &=& 0 \\
& n &=& \tfrac{2}{5} & & n &=& \tfrac{1}{6}
\end{array}
$$

Checking both answers shows that each makes one factor equal to zero, and the
product is then zero. The solutions are $n = \tfrac{2}{5}$ and
$n = \tfrac{1}{6}$.

{{< fillin
  question="Solve: $(3m - 2)(2m + 1) = 0$. Enter the two solutions from least to greatest, separated by commas."
  answer="-\frac{1}{2}, \frac{2}{3}"
  hint="Set $3m - 2 = 0$ and $2m + 1 = 0$, then solve each for $m$."
>}}

**Example.** Solve: $3p(10p + 7) = 0$.

Here one of the factors is $3p$. Use the Zero Product Property to set each
factor to $0$, then solve.

$$
\begin{array}{lrclcrcl}
& 3p &=& 0 & \quad\text{or}\quad & 10p + 7 &=& 0 \\
& p &=& 0 & & p &=& -\tfrac{7}{10}
\end{array}
$$

The solutions are $p = 0$ and $p = -\tfrac{7}{10}$.

{{< fillin
  question="Solve: $2u(5u - 1) = 0$. Enter the two solutions from least to greatest, separated by commas."
  answer="0, \frac{1}{5}"
  hint="Set $2u = 0$ and $5u - 1 = 0$. Note $2u = 0$ gives $u = 0$."
>}}

It may appear that there is only one factor in the next example. Remember,
however, that $(y - 8)^2$ means $(y - 8)(y - 8)$.

**Example.** Solve: $(y - 8)^2 = 0$.

Rewrite the left side as a product, then use the Zero Product Property to set
each factor to $0$.

$$
\begin{array}{lrcl}
& (y - 8)^2 &=& 0 \\[4pt]
\text{Rewrite the left side as a product.} & (y - 8)(y - 8) &=& 0 \\[4pt]
\text{Set each factor to } 0. & y - 8 = 0 \quad\text{or}\quad y - 8 &=& 0 \\[4pt]
\text{Solve.} & y = 8 \quad\text{or}\quad y &=& 8
\end{array}
$$

When a solution repeats, we call it a **double root**. The only solution is
$y = 8$.

{{< fillin
  question="Solve: $(x + 1)^2 = 0$. This has a double root — enter the single solution."
  answer="-1"
  hint="Rewrite as $(x + 1)(x + 1) = 0$. Both factors give the same equation."
>}}

## Solve Quadratic Equations by Factoring

Each of the equations we have solved in this section so far had one side in
factored form. In order to use the Zero Product Property, the quadratic
equation must be factored, with zero on one side. So we must be sure to start
with the quadratic equation in standard form, $ax^2 + bx + c = 0$. Then we can
factor the expression on the left.

**Example.** Solve: $x^2 + 2x - 8 = 0$.

**Step 1. Write the quadratic equation in standard form,
$ax^2 + bx + c = 0$.** The equation is already in standard form.

$$x^2 + 2x - 8 = 0$$

**Step 2. Factor the quadratic expression.**

$$(x + 4)(x - 2) = 0$$

**Step 3. Use the Zero Product Property.** Set each factor equal to zero.

$$x + 4 = 0 \quad\text{or}\quad x - 2 = 0$$

**Step 4. Solve the linear equations.**

$$x = -4 \quad\text{or}\quad x = 2$$

**Step 5. Check.** Substitute each solution separately into the original
equation.

$$
\begin{array}{rcl}
(-4)^2 + 2(-4) - 8 &\overset{?}{=}& 0 \\
16 + (-8) - 8 &\overset{?}{=}& 0 \\
0 &=& 0 \; \checkmark \\[6pt]
2^2 + 2(2) - 8 &\overset{?}{=}& 0 \\
4 + 4 - 8 &\overset{?}{=}& 0 \\
0 &=& 0 \; \checkmark
\end{array}
$$

The solutions are $x = -4$ and $x = 2$.

{{< fillin
  question="Solve: $x^2 - x - 12 = 0$. Enter the two solutions from least to greatest, separated by commas."
  answer="-3, 4"
  hint="Factor into $(x - 4)(x + 3) = 0$, then set each factor to zero."
>}}

{{< fillin
  question="Solve: $b^2 + 9b + 14 = 0$. Enter the two solutions from least to greatest, separated by commas."
  answer="-7, -2"
  hint="Factor into $(b + 7)(b + 2) = 0$, then set each factor to zero."
>}}

{{< callout type="info" >}}
  **Solve a quadratic equation by factoring.**

  1. Write the quadratic equation in standard form, $ax^2 + bx + c = 0$.
  2. Factor the quadratic expression.
  3. Use the Zero Product Property.
  4. Solve the linear equations.
  5. Check.
{{< /callout >}}

Before we factor, we must make sure the quadratic equation is in standard
form.

**Example.** Solve: $2y^2 = 13y + 45$.

$$
\begin{array}{lrcl}
& 2y^2 &=& 13y + 45 \\[4pt]
\text{Write the quadratic equation in standard form.} & 2y^2 - 13y - 45 &=& 0 \\[4pt]
\text{Factor the quadratic expression.} & (2y + 5)(y - 9) &=& 0 \\[4pt]
\text{Set each factor to } 0. & 2y + 5 = 0 \quad\text{or}\quad y - 9 &=& 0 \\[4pt]
\text{Solve each equation.} & y = -\tfrac{5}{2} \quad\text{or}\quad y &=& 9
\end{array}
$$

Both answers check. The solutions are $y = -\tfrac{5}{2}$ and $y = 9$.

{{< fillin
  question="Solve: $3c^2 = 10c - 8$. Enter the two solutions from least to greatest, separated by commas."
  answer="\frac{4}{3}, 2"
  hint="Write as $3c^2 - 10c + 8 = 0$, then factor into $(3c - 4)(c - 2) = 0$."
>}}

**Example.** Solve: $5x^2 - 13x = 7x$.

$$
\begin{array}{lrcl}
& 5x^2 - 13x &=& 7x \\[4pt]
\text{Write the quadratic equation in standard form.} & 5x^2 - 20x &=& 0 \\[4pt]
\text{Factor the left side of the equation.} & 5x(x - 4) &=& 0 \\[4pt]
\text{Set each factor to } 0. & 5x = 0 \quad\text{or}\quad x - 4 &=& 0 \\[4pt]
\text{Solve each equation.} & x = 0 \quad\text{or}\quad x &=& 4
\end{array}
$$

Both answers check. The solutions are $x = 0$ and $x = 4$.

{{< fillin
  question="Solve: $6a^2 + 9a = 3a$. Enter the two solutions from least to greatest, separated by commas."
  answer="-1, 0"
  hint="Write as $6a^2 + 6a = 0$, then factor out the greatest common factor $6a$."
>}}

Do you recognize the special product pattern in the next example?

**Example.** Solve: $144q^2 = 25$.

$$
\begin{array}{lrcl}
& 144q^2 &=& 25 \\[4pt]
\text{Write the quadratic equation in standard form.} & 144q^2 - 25 &=& 0 \\[4pt]
\text{Factor. It is a difference of squares.} & (12q - 5)(12q + 5) &=& 0 \\[4pt]
\text{Set each factor to } 0. & 12q - 5 = 0 \quad\text{or}\quad 12q + 5 &=& 0 \\[4pt]
\text{Solve each equation.} & q = \tfrac{5}{12} \quad\text{or}\quad q &=& -\tfrac{5}{12}
\end{array}
$$

The solutions are $q = \tfrac{5}{12}$ and $q = -\tfrac{5}{12}$.

{{< fillin
  question="Solve: $25p^2 = 49$. Enter the two solutions from least to greatest, separated by commas."
  answer="-\frac{7}{5}, \frac{7}{5}"
  hint="Write as $25p^2 - 49 = 0$, a difference of squares: $(5p - 7)(5p + 7) = 0$."
>}}

The left side in the next example is factored, but the right side is not
zero. In order to use the Zero Product Property, one side of the equation
must be zero. We'll multiply the factors and then write the equation in
standard form.

**Example.** Solve: $(3x - 8)(x - 1) = 3x$.

$$
\begin{array}{lrcl}
& (3x - 8)(x - 1) &=& 3x \\[4pt]
\text{Multiply the binomials.} & 3x^2 - 11x + 8 &=& 3x \\[4pt]
\text{Write the quadratic equation in standard form.} & 3x^2 - 14x + 8 &=& 0 \\[4pt]
\text{Factor the trinomial.} & (3x - 2)(x - 4) &=& 0 \\[4pt]
\text{Set each factor to } 0. & 3x - 2 = 0 \quad\text{or}\quad x - 4 &=& 0 \\[4pt]
\text{Solve each equation.} & x = \tfrac{2}{3} \quad\text{or}\quad x &=& 4
\end{array}
$$

The solutions are $x = \tfrac{2}{3}$ and $x = 4$.

{{< fillin
  question="Solve: $(2m + 1)(m + 3) = 12m$. Enter the two solutions from least to greatest, separated by commas."
  answer="1, \frac{3}{2}"
  hint="Multiply out to $2m^2 + 7m + 3 = 12m$, get standard form $2m^2 - 5m + 3 = 0$, then factor into $(2m - 3)(m - 1) = 0$."
>}}

The Zero Product Property also applies to the product of three or more
factors. If the product is zero, at least one of the factors must be zero. We
can solve some equations of degree more than two by using the Zero Product
Property, just like we solved quadratic equations.

**Example.** Solve: $9m^3 + 100m = 60m^2$.

$$
\begin{array}{lrcl}
& 9m^3 + 100m &=& 60m^2 \\[4pt]
\text{Bring all terms to one side so the other side is zero.} & 9m^3 - 60m^2 + 100m &=& 0 \\[4pt]
\text{Factor the greatest common factor first.} & m(9m^2 - 60m + 100) &=& 0 \\[4pt]
\text{Factor the trinomial.} & m(3m - 10)(3m - 10) &=& 0 \\[4pt]
\text{Set each factor to } 0. & m = 0 \quad\text{or}\quad 3m - 10 &=& 0 \\[4pt]
\text{Solve each equation.} & m = 0 \quad\text{or}\quad m &=& \tfrac{10}{3}
\end{array}
$$

The solutions are $m = 0$ and $m = \tfrac{10}{3}$.

{{< fillin
  question="Solve: $8x^3 = 24x^2 - 18x$. Enter the two distinct solutions from least to greatest, separated by commas."
  answer="0, \frac{3}{2}"
  hint="Get standard form $8x^3 - 24x^2 + 18x = 0$, factor out $2x$, then factor the perfect-square trinomial."
>}}

When we factor the quadratic equation in the next example we will get three
factors. However the first factor is a constant. We know that factor cannot
equal $0$.

**Example.** Solve: $4x^2 = 16x + 84$.

$$
\begin{array}{lrcl}
& 4x^2 &=& 16x + 84 \\[4pt]
\text{Write the quadratic equation in standard form.} & 4x^2 - 16x - 84 &=& 0 \\[4pt]
\text{Factor the greatest common factor first.} & 4(x^2 - 4x - 21) &=& 0 \\[4pt]
\text{Factor the trinomial.} & 4(x - 7)(x + 3) &=& 0 \\[4pt]
\text{Set each factor to } 0. & x - 7 = 0 \quad\text{or}\quad x + 3 &=& 0 \\[4pt]
\text{Solve each equation.} & x = 7 \quad\text{or}\quad x &=& -3
\end{array}
$$

The factor $4$ can never equal $0$, so it gives no solution. The solutions
are $x = 7$ and $x = -3$.

{{< fillin
  question="Solve: $18a^2 - 30 = -33a$. Enter the two solutions from least to greatest, separated by commas."
  answer="-\frac{5}{2}, \frac{2}{3}"
  hint="Get standard form $18a^2 + 33a - 30 = 0$, factor out $3$, then factor $(3a - 2)(2a + 5) = 0$."
>}}

Solving quadratic equations by factoring will make use of all the factoring
techniques you have learned in this chapter!

## Solve Applications Modeled by Quadratic Equations

The problem-solving strategy we used earlier for applications that translate
to linear equations will work just as well for applications that translate to
quadratic equations. We copy the problem-solving strategy here so we can use
it for reference.

{{< callout type="info" >}}
  **Use a problem-solving strategy to solve word problems.**

  1. **Read** the problem. Make sure all the words and ideas are understood.
  2. **Identify** what we are looking for.
  3. **Name** what we are looking for. Choose a variable to represent that
     quantity.
  4. **Translate** into an equation. It may be helpful to restate the problem
     in one sentence with all the important information. Then translate the
     English sentence into an algebra equation.
  5. **Solve** the equation using good algebra techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

We will start with a number problem to get practice translating words into a
quadratic equation.

**Example.** The product of two consecutive integers is $132$. Find the
integers.

Let $n =$ the first integer, so $n + 1 =$ the next consecutive integer. The
first integer times the next integer is $132$, so we translate to an
equation and solve:

$$
\begin{array}{lrcl}
\text{Translate.} & n(n + 1) &=& 132 \\[4pt]
\text{Multiply.} & n^2 + n &=& 132 \\[4pt]
\text{Bring all the terms to one side.} & n^2 + n - 132 &=& 0 \\[4pt]
\text{Factor the trinomial.} & (n - 11)(n + 12) &=& 0 \\[4pt]
\text{Set each factor to } 0. & n - 11 = 0 \quad\text{or}\quad n + 12 &=& 0 \\[4pt]
\text{Solve each equation.} & n = 11 \quad\text{or}\quad n &=& -12
\end{array}
$$

There are two values for $n$ that are solutions. So there are two sets of
consecutive integers that will work. If the first integer is $n = 11$, then
the next integer is $11 + 1 = 12$. If the first integer is $n = -12$, then the
next integer is $-12 + 1 = -11$. Both pairs check: $11 \cdot 12 = 132$ and
$(-11)(-12) = 132$. The consecutive integers are $11, 12$ and $-11, -12$.

{{< fillin
  question="The product of two consecutive integers is 240. Find the two positive integers, entered from least to greatest, separated by commas."
  answer="15, 16"
  hint="Let $n$ be the first integer. Then $n(n + 1) = 240$; write $n^2 + n - 240 = 0$ and factor."
>}}

Were you surprised by the pair of negative integers that is one of the
solutions to the previous example? The product of the two positive integers
and the product of the two negative integers both give $132$. In some
applications, negative solutions will result from the algebra, but will not
be realistic for the situation.

**Example.** A rectangular garden has an area $15$ square feet. The length of
the garden is two feet more than the width. Find the length and width of the
garden.

Let $W =$ the width of the garden. Then $W + 2 =$ the length. The area of the
rectangular garden is $15$ square feet, so we use the formula for the area of
a rectangle, $A = L \cdot W$:

$$
\begin{array}{lrcl}
\text{Substitute in the variables.} & 15 &=& (W + 2)W \\[4pt]
\text{Distribute first.} & 15 &=& W^2 + 2W \\[4pt]
\text{Get zero on one side.} & 0 &=& W^2 + 2W - 15 \\[4pt]
\text{Factor the trinomial.} & 0 &=& (W + 5)(W - 3) \\[4pt]
\text{Set each factor to } 0. & W + 5 = 0 \quad\text{or}\quad W - 3 &=& 0 \\[4pt]
\text{Solve each equation.} & W = -5 \quad\text{or}\quad W &=& 3
\end{array}
$$

Since $W$ is the width of the garden, it does not make sense for it to be
negative. We eliminate that value for $W$, so $W = 3$. Then the length is
$W + 2 = 3 + 2 = 5$. The width of the garden is $3$ feet and the length is
$5$ feet.

{{< fillin
  question="A rectangular sign has an area of 30 square feet. The length of the sign is one foot more than the width. Find the width of the sign, in feet."
  answer="5"
  hint="Let $W$ be the width. Then $W(W + 1) = 30$; write $W^2 + W - 30 = 0$ and factor. Keep the positive solution."
>}}

In an earlier chapter, we used the **Pythagorean Theorem** ($a^2 + b^2 = c^2$).
It gave the relation between the legs and the hypotenuse of a right triangle.

**Example.** Justine wants to put a deck in the corner of her backyard in the
shape of a right triangle, as shown below. The hypotenuse will be $17$ feet
long. The length of one side will be $7$ feet less than the length of the
other side. Find the lengths of the sides of the deck.

<div class="ap-figure">
<svg role="img" aria-label="A right triangle with the right angle at the bottom-left corner. The vertical left leg is labeled x minus 7, the horizontal bottom leg is labeled x, and the hypotenuse joining the top of the left leg to the right end of the bottom leg is labeled 17." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 546 336" width="546" height="336" font-family="Helvetica, Arial, sans-serif">
  <line x1="48" y1="288" x2="498" y2="288" stroke="currentColor" stroke-width="1.5"/>
  <text x="273" y="310" text-anchor="middle" font-size="13" fill="currentColor">x</text>
  <line x1="498" y1="288" x2="48" y2="48" stroke="currentColor" stroke-width="1.5"/>
  <text x="278.6" y="155.4" text-anchor="start" font-size="13" fill="currentColor">17</text>
  <line x1="48" y1="48" x2="48" y2="288" stroke="currentColor" stroke-width="1.5"/>
  <text x="36" y="172" text-anchor="end" font-size="13" fill="currentColor">x − 7</text>
  <path d="M 58 288 L 58 278 L 48 278" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

Let $x =$ the length of one side of the deck. Then $x - 7 =$ the length of
the other side. Since this is a right triangle, we use the Pythagorean
Theorem:

$$
\begin{array}{lrcl}
& a^2 + b^2 &=& c^2 \\[4pt]
\text{Substitute in the variables.} & x^2 + (x - 7)^2 &=& 17^2 \\[4pt]
\text{Multiply.} & x^2 + x^2 - 14x + 49 &=& 289 \\[4pt]
\text{Simplify.} & 2x^2 - 14x + 49 &=& 289 \\[4pt]
\text{Get zero on one side.} & 2x^2 - 14x - 240 &=& 0 \\[4pt]
\text{Factor the greatest common factor.} & 2(x^2 - 7x - 120) &=& 0 \\[4pt]
\text{Factor the trinomial.} & 2(x - 15)(x + 8) &=& 0 \\[4pt]
\text{Set each factor to } 0. & x - 15 = 0 \quad\text{or}\quad x + 8 &=& 0 \\[4pt]
\text{Solve each equation.} & x = 15 \quad\text{or}\quad x &=& -8
\end{array}
$$

Since $x$ is a side of the triangle, $x = -8$ does not make sense. So one
side is $x = 15$ and the other side is $x - 7 = 15 - 7 = 8$. Check with the
Pythagorean Theorem: $15^2 + 8^2 = 225 + 64 = 289 = 17^2\ \checkmark$. The
sides of the deck are $8$, $15$, and $17$ feet.

{{< fillin
  question="A boat's sail is a right triangle. The length of one side of the sail is 7 feet more than the other side. The hypotenuse is 13 feet. Enter the lengths of the two sides (the legs) from least to greatest, separated by commas."
  answer="5, 12"
  hint="Let $x$ be the shorter side. Then $x^2 + (x + 7)^2 = 13^2$; simplify to $2x^2 + 14x - 120 = 0$ and factor. Keep the positive solution, then add 7."
>}}

## Key terms

**quadratic equation** — an equation of the form $ax^2 + bx + c = 0$ with
$a \neq 0$; the variable is squared. **Zero Product Property** — if
$a \cdot b = 0$, then $a = 0$ or $b = 0$ (or both), the key fact that lets us
solve a factored equation set equal to zero. **double root** — a solution
that repeats because the same factor appears twice, as in $(y - 8)^2 = 0$.
**Pythagorean Theorem** — for a right triangle with legs $a$ and $b$ and
hypotenuse $c$, $a^2 + b^2 = c^2$.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 7.6: Quadratic Equations](https://openstax.org/books/elementary-algebra-2e/pages/7-6-quadratic-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the Example step tables as prose/typeset math, recreated the right-triangle deck figure with the accessible Figure component, and described the garden sketch in prose; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
