---
title: Solve Rational Equations
description: >-
  Solving rational equations by clearing fractions with the LCD, checking for
  extraneous solutions caused by excluded values, and solving a rational
  equation for a specific variable — adapted from OpenStax Elementary Algebra
  2e, Section 8.6.
source_section: "8.6"
weight: 6
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve rational
  equations, and solve a rational equation for a specific variable.
{{< /callout >}}

We have simplified many rational expressions so far in this chapter. Now we
will solve **rational equations**. The definition of a rational equation is
similar to the definition of equation we used earlier.

{{< callout type="info" >}}
  **Rational equation.** A rational equation is two rational expressions
  connected by an equal sign.
{{< /callout >}}

You must be careful to know the difference between rational *expressions* and
rational *equations*. The equation contains an equal sign.

| Rational expression | Rational equation |
| :---: | :---: |
| $\tfrac{1}{8}x + \tfrac{1}{2}$ | $\tfrac{1}{8}x + \tfrac{1}{2} = \tfrac{1}{4}$ |
| $\tfrac{y+6}{y^2-36}$ | $\tfrac{y+6}{y^2-36} = y + 1$ |
| $\tfrac{1}{n-3} + \tfrac{1}{n+4}$ | $\tfrac{1}{n-3} + \tfrac{1}{n+4} = \tfrac{15}{n^2+n-12}$ |

## Solve Rational Equations

We have already solved linear equations that contained fractions. We found
the LCD of all the fractions in the equation and then multiplied both sides
of the equation by the LCD to "clear" the fractions. We will use the same
strategy to solve rational equations: multiply both sides of the equation by
the LCD. Then we will have an equation that does not contain rational
expressions and thus is much easier for us to solve.

But because the original equation may have a variable in a denominator we
must be careful that we don't end up with a solution that would make a
denominator equal to zero. So before we begin solving a rational equation, we
examine it first to find the values that would make any denominators zero.
That way, when we solve the equation we will know if there are any algebraic
solutions we must discard.

An algebraic solution to a rational equation that would cause any of the
rational expressions to be undefined is called an **extraneous solution**.

{{< callout type="info" >}}
  **Extraneous solution to a rational equation.** An extraneous solution to a
  rational equation is an algebraic solution that would cause any of the
  expressions in the original equation to be undefined.
{{< /callout >}}

We note any possible extraneous solutions, $c$, by writing $x \neq c$ next to
the equation.

**Example.** Solve: $\tfrac{1}{x} + \tfrac{1}{3} = \tfrac{5}{6}$.

$$
\begin{array}{lrcl}
& \tfrac{1}{x} + \tfrac{1}{3} &=& \tfrac{5}{6} \\[4pt]
\text{Note any value that makes a denominator zero: } x \neq 0. & \tfrac{1}{x} + \tfrac{1}{3} &=& \tfrac{5}{6}, \; x \neq 0 \\[4pt]
\text{The LCD of all denominators is } 6x. \text{ Multiply both sides by it.} & 6x\left(\tfrac{1}{x} + \tfrac{1}{3}\right) &=& 6x\left(\tfrac{5}{6}\right) \\[4pt]
\text{Distribute.} & 6x \cdot \tfrac{1}{x} + 6x \cdot \tfrac{1}{3} &=& 6x \cdot \tfrac{5}{6} \\[4pt]
\text{Simplify — no more fractions!} & 6 + 2x &=& 5x \\[4pt]
\text{Solve the resulting equation.} & 6 &=& 3x \\[4pt]
& 2 &=& x
\end{array}
$$

Check: we did not get $0$ as an algebraic solution, so substitute $x = 2$
into the original equation.

$$
\begin{array}{rcl}
\tfrac{1}{x} + \tfrac{1}{3} &=& \tfrac{5}{6} \\[2pt]
\tfrac{1}{2} + \tfrac{1}{3} &\overset{?}{=}& \tfrac{5}{6} \\[2pt]
\tfrac{3}{6} + \tfrac{2}{6} &\overset{?}{=}& \tfrac{5}{6} \\[2pt]
\tfrac{5}{6} &=& \tfrac{5}{6} \; \checkmark
\end{array}
$$

The solution is $x = 2$.

{{< callout type="info" >}}
  **Solve equations with rational expressions.**

  1. Note any value of the variable that would make any denominator zero.
  2. Find the least common denominator of *all* denominators in the equation.
  3. Clear the fractions by multiplying both sides of the equation by the LCD.
  4. Solve the resulting equation.
  5. Check.
     - If any values found in Step 1 are algebraic solutions, discard them.
     - Check any remaining solutions in the original equation.
{{< /callout >}}

{{< fillin
  question="Solve: $\tfrac{1}{y} + \tfrac{2}{3} = \tfrac{1}{5}$."
  answer="-\frac{15}{7}"
  answerDisplay="$-\tfrac{15}{7}$"
  hint="The LCD of $y$, $3$, and $5$ is $15y$; note $y \neq 0$. Multiply both sides by $15y$ to clear the fractions, then solve."
>}}

We always start by noting the values that would cause any denominators to be
zero. When one of the denominators is a quadratic, remember to factor it
first to find the LCD.

**Example.** Solve: $1 - \tfrac{5}{y} = -\tfrac{6}{y^2}$.

The denominators are $y$ and $y^2$, so $y \neq 0$. The LCD is $y^2$. Multiply
both sides by $y^2$ and simplify.

$$
\begin{array}{lrcl}
& 1 - \tfrac{5}{y} &=& -\tfrac{6}{y^2}, \; y \neq 0 \\[4pt]
\text{Multiply both sides by } y^2 \text{ and distribute.} & y^2 - 5y &=& -6 \\[4pt]
\text{Write the quadratic equation in standard form.} & y^2 - 5y + 6 &=& 0 \\[4pt]
\text{Factor.} & (y-2)(y-3) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & y = 2 &\text{or}& y = 3
\end{array}
$$

We did not get $0$ as an algebraic solution, and checking $y = 2$ and $y = 3$
in the original equation makes both sides equal. The solutions are $y = 2$
and $y = 3$.

**Example.** Solve: $\tfrac{5}{3u-2} = \tfrac{3}{2u}$.

The denominators are $3u - 2$ and $2u$, so $u \neq \tfrac{2}{3}$ and
$u \neq 0$. The LCD is $2u(3u-2)$.

$$
\begin{array}{lrcl}
& \tfrac{5}{3u-2} &=& \tfrac{3}{2u}, \; u \neq \tfrac{2}{3},\ u \neq 0 \\[4pt]
\text{Multiply both sides by } 2u(3u-2) \text{ and remove common factors.} & 2u(5) &=& (3u-2)(3) \\[4pt]
\text{Multiply.} & 10u &=& 9u - 6 \\[4pt]
\text{Solve the resulting equation.} & u &=& -6
\end{array}
$$

We did not get $0$ or $\tfrac{2}{3}$ as an algebraic solution, so $u = -6$
is a valid solution. Checking it gives $-\tfrac{1}{4} = -\tfrac{1}{4}$.

{{< fillin
  question="Solve: $\tfrac{1}{x-1} = \tfrac{2}{3x}$. (Enter the value of $x$.)"
  answer="-2"
  hint="Note $x \neq 1$ and $x \neq 0$. The LCD is $3x(x-1)$. Cross-multiply: $3x = 2(x-1)$, then solve."
>}}

### Extraneous solutions

Sometimes an algebraic solution turns out to be a value we already excluded —
one that makes a denominator zero. That value is an **extraneous solution**
and must be discarded. If it was the *only* algebraic solution, the equation
has **no solution**.

**Example.** Solve: $\tfrac{m+11}{m^2-5m+4} = \tfrac{5}{m-4} - \tfrac{3}{m-1}$.

Factor the first denominator: $m^2 - 5m + 4 = (m-4)(m-1)$. So $m \neq 4$ and
$m \neq 1$, and the LCD is $(m-4)(m-1)$.

$$
\begin{array}{lrcl}
& \tfrac{m+11}{(m-4)(m-1)} &=& \tfrac{5}{m-4} - \tfrac{3}{m-1}, \; m \neq 4,\ m \neq 1 \\[4pt]
\text{Clear the fractions and remove common factors.} & m + 11 &=& 5(m-1) - 3(m-4) \\[4pt]
\text{Solve the resulting equation.} & m + 11 &=& 5m - 5 - 3m + 12 \\[4pt]
& m + 11 &=& 2m + 7 \\[4pt]
& 4 &=& m
\end{array}
$$

The only algebraic solution is $4$, but we noted that $4$ would make a
denominator equal to zero. The algebraic solution is an extraneous solution.
**There is no solution to this equation.**

For a no-solution case like this one, the check step is what catches the
trap: the excluded value and the algebraic solution are the same number.

{{< multiplechoice
  question="Solve: $\tfrac{x}{2x-2} - \tfrac{2}{3x+3} = \tfrac{5x^2-2x+9}{12x^2-12}$. After clearing fractions, the equation simplifies to $x^2 - 1 = 0$, giving $x = 1$ or $x = -1$. What is the solution set?"
  hint="Factor the denominators: $2(x-1)$, $3(x+1)$, and $12(x-1)(x+1)$. Which values are excluded? Compare them to the algebraic solutions."
  answer="No solution"
>}}
$x = 1$
$x = -1$
$x = 1$ and $x = -1$
No solution
{{< /multiplechoice >}}

**Example (extraneous root discarded).** Solve:
$\tfrac{n}{12} + \tfrac{n+3}{3n} = \tfrac{1}{n}$.

Here $n \neq 0$, and the LCD is $12n$. Clearing fractions gives
$n \cdot n + 4(n+3) = 12 \cdot 1$, which simplifies to $n^2 + 4n = 0$, so
$n(n+4) = 0$ and $n = 0$ or $n = -4$. Since $n = 0$ is an excluded value, it
is an **extraneous solution** and we discard it. Checking $n = -4$ gives
$-\tfrac{1}{4} = -\tfrac{1}{4}$, so the only solution is $n = -4$.

In each of these problems, identifying the excluded values *before* solving is
what tells us which algebraic solutions to keep.

{{< fillin
  question="For the equation $\tfrac{4}{q-4} - \tfrac{3}{q-3} = 1$, before solving you note the values that make a denominator zero. One of them is $q = 4$. What is the other excluded value of $q$?"
  answer="3"
  hint="A denominator is zero when $q - 3 = 0$."
>}}

## Solve a Rational Equation for a Specific Variable

When we solved linear equations, we learned how to solve a formula for a
specific variable. Many formulas used in business, science, economics, and
other fields use rational equations to model the relation between two or more
variables. We will now see how to solve a rational equation for a specific
variable, using the same steps: note the excluded values, clear the fractions
with the LCD, and then isolate the variable we want.

**Example.** Solve $\tfrac{D}{T} = R$ for $T$.

$$
\begin{array}{lrcl}
& \tfrac{D}{T} &=& R, \; T \neq 0 \\[4pt]
\text{Multiply both sides by the LCD, } T. & T\left(\tfrac{D}{T}\right) &=& T(R) \\[4pt]
\text{Simplify.} & D &=& T \cdot R \\[4pt]
\text{Divide both sides by } R \text{ to isolate } T. & \tfrac{D}{R} &=& T
\end{array}
$$

{{< fillin
  question="Solve $\tfrac{A}{L} = W$ for $L$. Enter the expression that $L$ equals."
  answer="\frac{A}{W}"
  answerDisplay="$L = \tfrac{A}{W}$"
  hint="Multiply both sides by $L$ to get $A = W \cdot L$, then divide both sides by $W$."
>}}

**Example.** Solve $m = \tfrac{x-2}{y-3}$ for $y$.

Note $y \neq 3$. Multiply both sides by the LCD, $y - 3$.

$$
\begin{array}{lrcl}
& m &=& \tfrac{x-2}{y-3}, \; y \neq 3 \\[4pt]
\text{Multiply both sides by } y - 3 \text{ and simplify.} & (y-3)m &=& x - 2 \\[4pt]
& ym - 3m &=& x - 2 \\[4pt]
\text{Isolate the term with } y. & ym &=& x - 2 + 3m \\[4pt]
\text{Divide both sides by } m \text{ to isolate } y. & y &=& \tfrac{x - 2 + 3m}{m}
\end{array}
$$

Some formulas look simple but cannot be solved instantly for either
denominator — be sure to follow all the steps.

**Example.** Solve $\tfrac{1}{c} + \tfrac{1}{m} = 1$ for $c$.

Here $c \neq 0$ and $m \neq 0$. The LCD is $cm$.

$$
\begin{array}{lrcl}
& \tfrac{1}{c} + \tfrac{1}{m} &=& 1, \; c \neq 0,\ m \neq 0 \\[4pt]
\text{Multiply both sides by } cm \text{ and distribute.} & m + c &=& cm \\[4pt]
\text{Collect the terms with } c \text{ on the right.} & m &=& cm - c \\[4pt]
\text{Factor the expression on the right.} & m &=& c(m-1) \\[4pt]
\text{Divide both sides by } m - 1 \text{ to isolate } c. & \tfrac{m}{m-1} &=& c
\end{array}
$$

Notice that even though we excluded $c = 0$ and $m = 0$ from the original
equation, we must also now state that $m \neq 1$.

{{< fillin
  question="Solve $\tfrac{y-2}{x+1} = \tfrac{2}{3}$ for $x$. Enter the expression that $x$ equals."
  answer="\frac{3y-8}{2}"
  answerDisplay="$x = \tfrac{3y-8}{2}$"
  hint="Cross-multiply to get $3(y-2) = 2(x+1)$, then isolate $x$: $3y - 6 = 2x + 2$."
>}}

## Key terms

**rational equation** — two rational expressions connected by an equal sign.
**extraneous solution to a rational equation** — an algebraic solution that
would cause any of the expressions in the original equation to be undefined;
it must be discarded. **excluded value** — a value of the variable that makes
a denominator equal to zero, so the rational expression is undefined there.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.6: Solve Rational Equations](https://openstax.org/books/elementary-algebra-2e/pages/8-6-solve-rational-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked examples into aligned step tables and prose, recast the "How To" procedures as callouts, folded the extraneous-solution cases (no-solution and discarded-root) into a single subsection; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
