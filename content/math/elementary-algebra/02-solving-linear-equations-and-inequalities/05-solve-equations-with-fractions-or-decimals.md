---
title: Solve Equations with Fractions or Decimals
description: >-
  Clearing fraction coefficients by multiplying both sides of an equation by
  the LCD, and clearing decimal coefficients by multiplying both sides by a
  power of ten — adapted from OpenStax Elementary Algebra 2e, Section 2.5.
source_section: "2.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve equations with
  fraction coefficients, and solve equations with decimal coefficients.
{{< /callout >}}

## Solve Equations with Fraction Coefficients

Let's use the general strategy for solving linear equations introduced
earlier to solve the equation $\tfrac{1}{8}x + \tfrac{1}{2} = \tfrac{1}{4}$.
To isolate the $x$ term, we subtract $\tfrac{1}{2}$ from both sides, giving
$\tfrac{1}{8}x = \tfrac{1}{4} - \tfrac{1}{2}$. Changing the constants to
equivalent fractions with the LCD $4$ and subtracting gives
$\tfrac{1}{8}x = -\tfrac{1}{4}$. Multiplying both sides by the reciprocal of
$\tfrac{1}{8}$, which is $8$, gives $x = -2$.

This method worked fine, but many students do not feel very confident when
they see all those fractions. So, we are going to show an alternate method
to solve equations with fractions — one that eliminates the fractions.

We apply the Multiplication Property of Equality and multiply both sides of
an equation by the least common denominator of all the fractions in the
equation. The result is a new equation, equivalent to the first, but without
fractions. This process is called "clearing" the equation of fractions.

{{< callout type="info" >}}
  **Strategy to solve equations with fraction coefficients.**

  1. Find the least common denominator of *all* the fractions in the
     equation.
  2. Multiply both sides of the equation by that LCD. This clears the
     fractions.
  3. Solve using the General Strategy for Solving Linear Equations.
{{< /callout >}}

**Example.** Solve: $\tfrac{1}{6}y - \tfrac{1}{3} = \tfrac{5}{6}$.

The LCD of $\tfrac{1}{6}, \tfrac{1}{3},$ and $\tfrac{5}{6}$ is $6$. We
multiply both sides of the equation by $6$, then distribute:

$$
\begin{array}{lrcl}
& \tfrac{1}{6}y - \tfrac{1}{3} &=& \tfrac{5}{6} \\[4pt]
\text{Multiply both sides by the LCD, 6.} & 6\left(\tfrac{1}{6}y - \tfrac{1}{3}\right) &=& 6\left(\tfrac{5}{6}\right) \\[4pt]
\text{Distribute.} & 6 \cdot \tfrac{1}{6}y - 6 \cdot \tfrac{1}{3} &=& 6 \cdot \tfrac{5}{6} \\[4pt]
\text{Simplify — notice, no more fractions!} & y - 2 &=& 5 \\[4pt]
\text{Add 2 to both sides.} & y - 2 + 2 &=& 5 + 2 \\[4pt]
\text{Simplify.} & y &=& 7
\end{array}
$$

Notice that once we cleared the equation of fractions, the equation was
like those we solved earlier in this chapter. We changed the problem to one
we already knew how to solve! We then used the General Strategy for Solving
Linear Equations.

{{< fillin
  question="Solve: $\tfrac{1}{4} x + \tfrac{1}{2} = \tfrac{5}{8}$."
  answer="\frac{1}{2}"
  hint="Find the LCD of all the fractions, then multiply both sides of the equation by it to clear the fractions before solving."
>}}

{{< fillin
  question="Solve: $\tfrac{1}{8} x + \tfrac{1}{2} = \tfrac{1}{4}$."
  answer="-2"
  hint="Find the LCD of all the fractions, then multiply both sides of the equation by it to clear the fractions before solving."
>}}

**Example.** Solve: $6 = \tfrac{1}{2}v + \tfrac{2}{5}v - \tfrac{3}{4}v$.

We want to clear the fractions by multiplying both sides of the equation by
the LCD of all the fractions in the equation. The LCD of $\tfrac{1}{2},
\tfrac{2}{5},$ and $\tfrac{3}{4}$ is $20$.

$$
\begin{array}{lrcl}
& 6 &=& \tfrac{1}{2}v + \tfrac{2}{5}v - \tfrac{3}{4}v \\[4pt]
\text{Multiply both sides by the LCD, 20.} & 20(6) &=& 20\left(\tfrac{1}{2}v + \tfrac{2}{5}v - \tfrac{3}{4}v\right) \\[4pt]
\text{Distribute.} & 20(6) &=& 20 \cdot \tfrac{1}{2}v + 20 \cdot \tfrac{2}{5}v - 20 \cdot \tfrac{3}{4}v \\[4pt]
\text{Simplify — notice, no more fractions!} & 120 &=& 10v + 8v - 15v \\[4pt]
\text{Combine like terms.} & 120 &=& 3v \\[4pt]
\text{Divide by 3.} & \tfrac{120}{3} &=& \tfrac{3v}{3} \\[4pt]
\text{Simplify.} & 40 &=& v
\end{array}
$$

Check by substituting $v = 40$ into the original equation: $6 = \tfrac{1}{2}(40) + \tfrac{2}{5}(40) - \tfrac{3}{4}(40)$ simplifies to $6 = 20 + 16 - 30$, and indeed $6 = 6$. ✓

{{< fillin
  question="Solve: $7 = \tfrac{1}{2} x + \tfrac{3}{4} x - \tfrac{2}{3} x$."
  answer="12"
  hint="Multiply both sides by the LCD of $\tfrac{1}{2}$, $\tfrac{3}{4}$, and $\tfrac{2}{3}$ to clear every fraction at once, then combine like terms."
>}}

{{< fillin
  question="Solve: $-1 = \tfrac{1}{2} u + \tfrac{1}{4} u - \tfrac{2}{3} u$."
  answer="-12"
  hint="Multiply both sides by the LCD of $\tfrac{1}{2}$, $\tfrac{1}{4}$, and $\tfrac{2}{3}$ to clear every fraction at once, then combine like terms."
>}}

In the next example, we again have variables on both sides of the equation.

**Example.** Solve: $a + \tfrac{3}{4} = \tfrac{3}{8}a - \tfrac{1}{2}$.

The LCD of all the fractions in the equation is $8$.

$$
\begin{array}{lrcl}
& a + \tfrac{3}{4} &=& \tfrac{3}{8}a - \tfrac{1}{2} \\[4pt]
\text{Multiply both sides by the LCD, 8.} & 8\left(a + \tfrac{3}{4}\right) &=& 8\left(\tfrac{3}{8}a - \tfrac{1}{2}\right) \\[4pt]
\text{Distribute.} & 8 \cdot a + 8 \cdot \tfrac{3}{4} &=& 8 \cdot \tfrac{3}{8}a - 8 \cdot \tfrac{1}{2} \\[4pt]
\text{Simplify — no more fractions.} & 8a + 6 &=& 3a - 4 \\[4pt]
\text{Subtract } 3a \text{ from both sides.} & 8a - 3a + 6 &=& 3a - 3a - 4 \\[4pt]
\text{Simplify.} & 5a + 6 &=& -4 \\[4pt]
\text{Subtract 6 from both sides.} & 5a + 6 - 6 &=& -4 - 6 \\[4pt]
\text{Simplify.} & 5a &=& -10 \\[4pt]
\text{Divide by 5.} & \tfrac{5a}{5} &=& \tfrac{-10}{5} \\[4pt]
\text{Simplify.} & a &=& -2
\end{array}
$$

{{< fillin
  question="Solve: $x + \tfrac{1}{3} = \tfrac{1}{6} x - \tfrac{1}{2}$."
  answer="-1"
  hint="Clear the fractions first by multiplying both sides by the LCD, then collect the variable terms on one side."
>}}

{{< fillin
  question="Solve: $c + \tfrac{3}{4} = \tfrac{1}{2} c - \tfrac{1}{4}$."
  answer="-2"
  hint="Clear the fractions first by multiplying both sides by the LCD, then collect the variable terms on one side."
>}}

In the next example, we start by using the Distributive Property. This step
clears the fractions right away.

**Example.** Solve: $-5 = \tfrac{1}{4}(8x + 4)$.

$$
\begin{array}{lrcl}
& -5 &=& \tfrac{1}{4}(8x+4) \\[4pt]
\text{Distribute.} & -5 &=& \tfrac{1}{4}\cdot 8x + \tfrac{1}{4}\cdot 4 \\[4pt]
\text{Simplify — now there are no fractions.} & -5 &=& 2x + 1 \\[4pt]
\text{Subtract 1 from both sides.} & -5 - 1 &=& 2x + 1 - 1 \\[4pt]
\text{Simplify.} & -6 &=& 2x \\[4pt]
\text{Divide by 2.} & \tfrac{-6}{2} &=& \tfrac{2x}{2} \\[4pt]
\text{Simplify.} & -3 &=& x
\end{array}
$$

{{< fillin
  question="Solve: $-11 = \tfrac{1}{2} (6p + 2)$."
  answer="-4"
  hint="Distribute the fraction across the parentheses first — this clears the fraction immediately."
>}}

{{< fillin
  question="Solve: $8 = \tfrac{1}{3} (9q + 6)$."
  answer="2"
  hint="Distribute the fraction across the parentheses first — this clears the fraction immediately."
>}}

In the next example, even after distributing, we still have fractions to
clear.

**Example.** Solve: $\tfrac{1}{2}(y-5) = \tfrac{1}{4}(y-1)$.

$$
\begin{array}{lrcl}
& \tfrac{1}{2}(y-5) &=& \tfrac{1}{4}(y-1) \\[4pt]
\text{Distribute.} & \tfrac{1}{2}y - \tfrac{5}{2} &=& \tfrac{1}{4}y - \tfrac{1}{4} \\[4pt]
\text{Multiply both sides by the LCD, 4.} & 4\left(\tfrac{1}{2}y - \tfrac{5}{2}\right) &=& 4\left(\tfrac{1}{4}y - \tfrac{1}{4}\right) \\[4pt]
\text{Distribute.} & 4\cdot\tfrac{1}{2}y - 4\cdot\tfrac{5}{2} &=& 4\cdot\tfrac{1}{4}y - 4\cdot\tfrac{1}{4} \\[4pt]
\text{Simplify.} & 2y - 10 &=& y - 1 \\[4pt]
\text{Collect the variables to the left.} & 2y - y - 10 &=& y - y - 1 \\[4pt]
\text{Simplify.} & y - 10 &=& -1 \\[4pt]
\text{Collect the constants to the right.} & y - 10 + 10 &=& -1 + 10 \\[4pt]
\text{Simplify.} & y &=& 9
\end{array}
$$

{{< fillin
  question="Solve: $\tfrac{1}{5} (n + 3) = \tfrac{1}{4} (n + 2)$."
  answer="2"
  hint="Distribute both sides first, then clear the remaining fractions by multiplying by the LCD."
>}}

{{< fillin
  question="Solve: $\tfrac{1}{2} (m - 3) = \tfrac{1}{4} (m - 7)$."
  answer="-1"
  hint="Distribute both sides first, then clear the remaining fractions by multiplying by the LCD."
>}}

Some equations have fractions written as a single quotient, such as
$\tfrac{5x-3}{4}$. Since a fraction bar is a grouping symbol, we treat the
numerator as if it were in parentheses, even without seeing them.

**Example.** Solve: $\tfrac{5x-3}{4} = \tfrac{x}{2}$.

$$
\begin{array}{lrcl}
& \tfrac{5x-3}{4} &=& \tfrac{x}{2} \\[4pt]
\text{Multiply both sides by the LCD, 4.} & 4\left(\tfrac{5x-3}{4}\right) &=& 4\left(\tfrac{x}{2}\right) \\[4pt]
\text{Simplify.} & 5x - 3 &=& 2x \\[4pt]
\text{Collect the variables to the right.} & 5x - 5x - 3 &=& 2x - 5x \\[4pt]
\text{Simplify.} & -3 &=& -3x \\[4pt]
\text{Divide by }{-3}. & \tfrac{-3}{-3} &=& \tfrac{-3x}{-3} \\[4pt]
\text{Simplify.} & 1 &=& x
\end{array}
$$

{{< fillin
  question="Solve: $\tfrac{4y - 7}{3} = \tfrac{y}{6}$."
  answer="2"
  hint="Multiply both sides by the LCD, 6, treating the whole numerator as if it were in parentheses."
>}}

{{< fillin
  question="Solve: $\tfrac{-2z - 5}{4} = \tfrac{z}{8}$."
  answer="-2"
  hint="Multiply both sides by the LCD, 8, treating the whole numerator as if it were in parentheses."
>}}

**Example.** Solve: $\tfrac{a}{6} + 2 = \tfrac{a}{4} + 3$.

$$
\begin{array}{lrcl}
& \tfrac{a}{6} + 2 &=& \tfrac{a}{4} + 3 \\[4pt]
\text{Multiply both sides by the LCD, 12.} & 12\left(\tfrac{a}{6} + 2\right) &=& 12\left(\tfrac{a}{4} + 3\right) \\[4pt]
\text{Distribute.} & 12\cdot\tfrac{a}{6} + 12\cdot 2 &=& 12\cdot\tfrac{a}{4} + 12\cdot 3 \\[4pt]
\text{Simplify.} & 2a + 24 &=& 3a + 36 \\[4pt]
\text{Collect the variables to the right.} & 2a - 2a + 24 &=& 3a - 2a + 36 \\[4pt]
\text{Simplify.} & 24 &=& a + 36 \\[4pt]
\text{Collect the constants to the left.} & 24 - 36 &=& a + 36 - 36 \\[4pt]
\text{Simplify.} & a &=& -12
\end{array}
$$

{{< fillin
  question="Solve: $\tfrac{b}{10} + 2 = \tfrac{b}{4} + 5$."
  answer="-20"
  hint="Multiply every term by the LCD to clear all the fractions at once before collecting terms."
>}}

{{< fillin
  question="Solve: $\tfrac{c}{6} + 3 = \tfrac{c}{3} + 4$."
  answer="-6"
  hint="Multiply every term by the LCD to clear all the fractions at once before collecting terms."
>}}

**Example.** Solve: $\tfrac{4q+3}{2} + 6 = \tfrac{3q+5}{4}$.

$$
\begin{array}{lrcl}
& \tfrac{4q+3}{2} + 6 &=& \tfrac{3q+5}{4} \\[4pt]
\text{Multiply both sides by the LCD, 4.} & 4\left(\tfrac{4q+3}{2} + 6\right) &=& 4\left(\tfrac{3q+5}{4}\right) \\[4pt]
\text{Distribute.} & 4\left(\tfrac{4q+3}{2}\right) + 4\cdot 6 &=& 4\left(\tfrac{3q+5}{4}\right) \\[4pt]
\text{Simplify.} & 2(4q+3) + 24 &=& 3q+5 \\[4pt]
& 8q + 6 + 24 &=& 3q + 5 \\[4pt]
& 8q + 30 &=& 3q + 5 \\[4pt]
\text{Collect the variables to the left.} & 8q - 3q + 30 &=& 3q - 3q + 5 \\[4pt]
\text{Simplify.} & 5q + 30 &=& 5 \\[4pt]
\text{Collect the constants to the right.} & 5q + 30 - 30 &=& 5 - 30 \\[4pt]
\text{Simplify.} & 5q &=& -25 \\[4pt]
\text{Divide by 5.} & \tfrac{5q}{5} &=& \tfrac{-25}{5} \\[4pt]
\text{Simplify.} & q &=& -5
\end{array}
$$

{{< fillin
  question="Solve: $\tfrac{3r + 5}{6} + 1 = \tfrac{4r + 3}{3}$."
  answer="1"
  hint="Multiply both sides by the LCD, treating each numerator as if it were in parentheses when you distribute."
>}}

{{< fillin
  question="Solve: $\tfrac{2s + 3}{2} + 1 = \tfrac{3s + 2}{4}$."
  answer="-8"
  hint="Multiply both sides by the LCD, treating each numerator as if it were in parentheses when you distribute."
>}}

## Solve Equations with Decimal Coefficients

Some equations have decimals in them. This kind of equation occurs when we
solve problems dealing with money or percentages. But decimals can also be
expressed as fractions — for example, $0.3 = \tfrac{3}{10}$ and
$0.17 = \tfrac{17}{100}$. So, with an equation with decimals, we can use the
same method we used to clear fractions — multiply both sides of the equation
by the least common denominator.

**Example.** Solve: $0.06x + 0.02 = 0.25x - 1.5$.

Looking at the decimals, $0.06 = \tfrac{6}{100}$, $0.02 = \tfrac{2}{100}$,
$0.25 = \tfrac{25}{100}$, and $1.5 = 1\tfrac{5}{10}$, so the LCD is $100$. By
multiplying by the LCD, we clear the decimals from the equation:

$$
\begin{array}{lrcl}
& 0.06x + 0.02 &=& 0.25x - 1.5 \\[4pt]
\text{Multiply both sides by 100.} & 100(0.06x + 0.02) &=& 100(0.25x - 1.5) \\[4pt]
\text{Distribute.} & 100(0.06x) + 100(0.02) &=& 100(0.25x) - 100(1.5) \\[4pt]
\text{Multiply — now there are no more decimals.} & 6x + 2 &=& 25x - 150 \\[4pt]
\text{Collect the variables to the right.} & 6x - 6x + 2 &=& 25x - 6x - 150 \\[4pt]
\text{Simplify.} & 2 &=& 19x - 150 \\[4pt]
\text{Collect the constants to the left.} & 2 + 150 &=& 19x - 150 + 150 \\[4pt]
\text{Simplify.} & 152 &=& 19x \\[4pt]
\text{Divide by 19.} & \tfrac{152}{19} &=& \tfrac{19x}{19} \\[4pt]
\text{Simplify.} & 8 &=& x
\end{array}
$$

Check: with $x=8$, $0.06(8) + 0.02 = 0.48 + 0.02 = 0.50$, and
$0.25(8) - 1.5 = 2.00 - 1.5 = 0.50$. Both sides equal $0.50$. ✓

{{< fillin
  question="Solve: $0.14h + 0.12 = 0.35h - 2.4$."
  answer="12"
  hint="Multiply both sides by 100 to clear every decimal at once, then solve as usual."
>}}

{{< fillin
  question="Solve: $0.65k - 0.1 = 0.4k - 0.35$."
  answer="-1"
  hint="Multiply both sides by 100 to clear every decimal at once, then solve as usual."
>}}

The next example uses an equation that is typical of the money applications
in a later chapter. Notice that we distribute the decimal before we clear
all the decimals.

**Example.** Solve: $0.25x + 0.05(x+3) = 2.85$.

$$
\begin{array}{lrcl}
& 0.25x + 0.05(x+3) &=& 2.85 \\[4pt]
\text{Distribute first.} & 0.25x + 0.05x + 0.15 &=& 2.85 \\[4pt]
\text{Combine like terms.} & 0.30x + 0.15 &=& 2.85 \\[4pt]
\text{To clear decimals, multiply by 100.} & 100(0.30x + 0.15) &=& 100(2.85) \\[4pt]
\text{Distribute.} & 30x + 15 &=& 285 \\[4pt]
\text{Subtract 15 from both sides.} & 30x + 15 - 15 &=& 285 - 15 \\[4pt]
\text{Simplify.} & 30x &=& 270 \\[4pt]
\text{Divide by 30.} & \tfrac{30x}{30} &=& \tfrac{270}{30} \\[4pt]
\text{Simplify.} & x &=& 9
\end{array}
$$

Check this yourself by substituting $x = 9$ into the original equation.

{{< fillin
  question="Solve: $0.25n + 0.05(n + 5) = 2.95$."
  answer="9"
  hint="Distribute the decimal across the parentheses and combine like terms first, then clear the decimals by multiplying by 100."
>}}

{{< fillin
  question="Solve: $0.10d + 0.05(d - 5) = 2.15$."
  answer="16"
  hint="Distribute the decimal across the parentheses and combine like terms first, then clear the decimals by multiplying by 100."
>}}

## Key terms

**clearing the equation of fractions** — multiplying both sides of an
equation by the least common denominator (LCD) of all its fractions so the
resulting equivalent equation has no fractions. **clearing the equation of
decimals** — multiplying both sides of an equation by an appropriate power
of ten so the resulting equivalent equation has no decimals.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 2.5: Solve Equations with Fractions or Decimals](https://openstax.org/books/elementary-algebra-2e/pages/2-5-solve-equations-with-fractions-or-decimals) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked-example step tables into annotated derivation displays; omitted the Be Prepared quiz, media links, Self Check checklist, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
