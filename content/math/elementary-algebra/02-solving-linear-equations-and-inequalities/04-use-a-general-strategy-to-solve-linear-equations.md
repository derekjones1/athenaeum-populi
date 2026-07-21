---
title: Use a General Strategy to Solve Linear Equations
description: >-
  A step-by-step general strategy for solving any linear equation —
  simplify each side, collect variable and constant terms, and isolate the
  variable — plus classifying equations as conditional, an identity, or a
  contradiction — adapted from OpenStax Elementary Algebra 2e, Section 2.4.
source_section: "2.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve equations using
  a general strategy, and classify equations.
{{< /callout >}}

## Solve Equations Using the General Strategy

Until now we have dealt with solving one specific form of a linear equation.
It is time now to lay out one overall strategy that can be used to solve any
linear equation. Some equations we solve will not require all these steps to
solve, but many will.

Beginning by simplifying each side of the equation makes the remaining steps
easier.

**Example.** Solve: $-6(x+3) = 24$.

| Step | What to do | Result |
| :--- | :--- | :--- |
| 1. Simplify each side of the equation as much as possible. | Use the Distributive Property. | $-6(x+3) = 24$ becomes $-6x - 18 = 24$ |
| 2. Collect all variable terms on one side of the equation. | Nothing to do — all $x$'s are already on the left side. | $-6x - 18 = 24$ |
| 3. Collect constant terms on the other side of the equation. | Add $18$ to both sides. | $-6x = 42$ |
| 4. Make the coefficient of the variable term equal to $1$. | Divide each side by $-6$. | $x = -7$ |
| 5. Check the solution. | Let $x = -7$: $-6(-7+3) \overset{?}{=} 24$, so $-6(-4) \overset{?}{=} 24$, and $24 = 24$. ✓ | |

{{< fillin
  question="Solve: $5(x + 3) = 35$."
  answer="4"
  hint="Distribute the 5 first, then collect constants on the right and divide."
>}}

{{< fillin
  question="Solve: $6(y - 4) = -18$."
  answer="1"
  hint="Distribute the 6 first, then collect constants on the right and divide."
>}}

{{< callout type="info" >}}
  **General strategy for solving linear equations.**

  1. **Simplify each side of the equation as much as possible.** Use the
     Distributive Property to remove any parentheses. Combine like terms.
  2. **Collect all the variable terms on one side of the equation.** Use the
     Addition or Subtraction Property of Equality.
  3. **Collect all the constant terms on the other side of the equation.**
     Use the Addition or Subtraction Property of Equality.
  4. **Make the coefficient of the variable term equal to $1$.** Use the
     Multiplication or Division Property of Equality. State the solution to
     the equation.
  5. **Check the solution.** Substitute the solution into the original
     equation to make sure the result is a true statement.
{{< /callout >}}

**Example.** Solve: $-(y+9) = 8$.

Simplify each side of the equation as much as possible by distributing:
$-(y+9) = 8$ becomes $-y - 9 = 8$. The only $y$ term is on the left side, so
all variable terms are already on the left side of the equation. Add $9$ to
both sides to get all constant terms on the right side, and simplify:
$-y = 17$. Rewrite $-y$ as $-1y$, then make the coefficient of the variable
term equal to $1$ by dividing both sides by $-1$: $y = -17$.

Check: let $y = -17$. Then $-(-17+9) \overset{?}{=} 8$, so $-(-8)
\overset{?}{=} 8$, and $8 = 8$. ✓

{{< fillin
  question="Solve: $-(y + 8) = -2$."
  answer="-6"
  hint="Distribute the negative sign first: $-y - 8 = -2$. Then isolate y."
>}}

{{< fillin
  question="Solve: $-(z + 4) = -12$."
  answer="8"
  hint="Distribute the negative sign first: $-z - 4 = -12$. Then isolate z."
>}}

**Example.** Solve: $5(a-3)+5 = -10$.

Distribute: $5a - 15 + 5 = -10$. Combine like terms: $5a - 10 = -10$. The
only $a$ term is on the left side, so all variable terms are on one side of
the equation. Add $10$ to both sides to get all constant terms on the other
side, and simplify: $5a = 0$. Make the coefficient of the variable term equal
to $1$ by dividing both sides by $5$: $a = 0$.

Check: let $a=0$. Then $5(0-3)+5 \overset{?}{=} -10$, so $5(-3)+5
\overset{?}{=} -10$, so $-15+5 \overset{?}{=} -10$, and $-10 = -10$. ✓

{{< fillin
  question="Solve: $2(m - 4) + 3 = -1$."
  answer="2"
  hint="Distribute first, combine like terms, then collect the variable terms on one side and constants on the other."
>}}

{{< fillin
  question="Solve: $7(n - 3) - 8 = -15$."
  answer="2"
  hint="Distribute first, combine like terms, then isolate n."
>}}

**Example.** Solve: $\tfrac{2}{3}(6m - 3) = 8 - m$.

Distribute: $4m - 2 = 8 - m$. Add $m$ to both sides to get the variables only
on the left: $5m - 2 = 8$. Add $2$ to both sides to get constants only on the
right: $5m = 10$. Divide by $5$: $m = 2$.

Check: let $m = 2$. Then $\tfrac{2}{3}(6\cdot 2 - 3) \overset{?}{=} 8-2$, so
$\tfrac{2}{3}(9) \overset{?}{=} 6$, and $6 = 6$. ✓

{{< fillin
  question="Solve: $\tfrac{1}{3}(6u + 3) = 7 - u$."
  answer="2"
  hint="Distribute the $\tfrac{1}{3}$ first, then get all the u terms on one side."
>}}

{{< fillin
  question="Solve: $\tfrac{2}{3}(9x - 12) = 8 + 2x$."
  answer="4"
  hint="Distribute the $\tfrac{2}{3}$ first, then get all the x terms on one side."
>}}

**Example.** Solve: $8 - 2(3y+5) = 0$.

Simplify — use the Distributive Property: $8 - 6y - 10 = 0$. Combine like
terms: $-6y - 2 = 0$. Add $2$ to both sides to collect constants on the
right: $-6y = 2$. Divide both sides by $-6$: $y = -\tfrac{1}{3}$.

Check: let $y = -\tfrac{1}{3}$. Then
$8 - 2\left[3\left(-\tfrac{1}{3}\right)+5\right] \overset{?}{=} 0$, so
$8 - 2(-1+5) \overset{?}{=} 0$, so $8 - 2(4) \overset{?}{=} 0$, so
$8 - 8 \overset{?}{=} 0$, and $0 = 0$. ✓

{{< fillin
  question="Solve: $12 - 3(4j + 3) = -17$."
  answer="\frac{5}{3}"
  answerDisplay="$\tfrac{5}{3}$"
  hint="Distribute first, combine like terms, then collect the variable terms on one side and constants on the other."
>}}

{{< fillin
  question="Solve: $-6 - 8(k - 2) = -10$."
  answer="\frac{5}{2}"
  answerDisplay="$\tfrac{5}{2}$"
  hint="Distribute first, combine like terms, then isolate k."
>}}

**Example.** Solve: $4(x-1) - 2 = 5(2x+3) + 6$.

Distribute: $4x - 4 - 2 = 10x + 15 + 6$. Combine like terms:
$4x - 6 = 10x + 21$. Since $10 > 4$, subtract $4x$ from both sides to get the
variables only on the right side: $-6 = 6x + 21$. Subtract $21$ to get the
constants on the left: $-27 = 6x$. Divide by $6$: $-\tfrac{9}{2} = x$.

Check: let $x = -\tfrac{9}{2}$. Substituting back into both sides of the
original equation gives $-24 = -24$. ✓

{{< fillin
  question="Solve: $6(p - 3) - 7 = 5(4p + 3) - 12$."
  answer="-2"
  hint="Distribute both sides, combine like terms, then move all the variable terms to whichever side keeps their coefficient positive."
>}}

{{< fillin
  question="Solve: $8(q + 1) - 5 = 3(2q - 4) - 1$."
  answer="-8"
  hint="Distribute both sides, combine like terms, then collect variables on one side and constants on the other."
>}}

**Example.** Solve: $10[3 - 8(2s-5)] = 15(40-5s)$.

Simplify from the innermost parentheses first: $10[3 - 16s + 40] = 15(40-5s)$.
Combine like terms in the brackets: $10[43 - 16s] = 15(40-5s)$. Distribute:
$430 - 160s = 600 - 75s$. Add $160s$ to get the $s$'s to the right:
$430 = 600 + 85s$. Subtract $600$ to get the constants to the left:
$-170 = 85s$. Divide: $-2 = s$.

Check: let $s=-2$. Substituting back into both sides gives $750 = 750$. ✓

{{< fillin
  question="Solve: 6[$4 - 2(7y - 1)$] = 8(13 - 8y)."
  answer="-\frac{17}{5}"
  answerDisplay="$-\tfrac{17}{5}$"
  hint="Work from the innermost parentheses outward: distribute the $-2(7y-1)$ first, then the outer 6, then collect variable and constant terms."
>}}

{{< fillin
  question="Solve: 12[$1 - 5(4z - 1)$] = 3(24 + 11z)."
  answer="0"
  hint="Work from the innermost parentheses outward, then collect variable and constant terms on opposite sides."
>}}

**Example.** Solve: $0.36(100n+5) = 0.6(30n+15)$.

Distribute: $36n + 1.8 = 18n + 9$. Subtract $18n$ to get the variables to the
left: $18n + 1.8 = 9$. Subtract $1.8$ to get the constants to the right:
$18n = 7.2$. Divide by $18$: $n = 0.4$.

Check: let $n = 0.4$. Substituting back into both sides gives $16.2 = 16.2$.
✓

{{< fillin
  question="Solve: $0.55(100n + 8) = 0.6(85n + 14)$."
  answer="1"
  hint="Distribute the decimals first, then collect the variable terms on one side and the constants on the other."
>}}

{{< fillin
  question="Solve: $0.15(40m - 120) = 0.5(60m + 12)$."
  answer="-1"
  hint="Distribute the decimals first, then collect the variable terms on one side and the constants on the other."
>}}

## Classify Equations

Consider the equation we solved earlier, $7x+8=-13$. The solution we found
was $x=-3$. This means the equation $7x+8=-13$ is true when we replace the
variable, $x$, with the value $-3$. We showed this when we checked the
solution $x=-3$ and evaluated $7x+8=-13$ for $x=-3$:

$$7(-3)+8 \overset{?}{=} -13$$
$$-21+8 \overset{?}{=} -13$$
$$-13=-13 \checkmark$$

If we evaluate $7x+8$ for a different value of $x$, the left side will not be
$-13$.

The equation $7x+8=-13$ is true when we replace the variable, $x$, with the
value $-3$, but not true when we replace $x$ with any other value. Whether or
not the equation $7x+8=-13$ is true depends on the value of the variable.
Equations like this are called conditional equations. All the equations we
have solved so far are conditional equations.

{{< callout type="info" >}}
  **Conditional equation.** An equation that is true for one or more values
  of the variable and false for all other values of the variable is a
  **conditional equation**.
{{< /callout >}}

Now let's consider the equation $2y+6=2(y+3)$. Do you recognize that the left
side and the right side are equivalent? Let's see what happens when we solve
for $y$. Distribute: $2y+6=2y+6$. Subtract $2y$ to get the $y$'s to one
side: $6=6$.

But $6=6$ is true. This means that the equation $2y+6=2(y+3)$ is true for any
value of $y$. We say the solution to the equation is all of the real
numbers. An equation that is true for any value of the variable like this is
called an identity.

{{< callout type="info" >}}
  **Identity.** An equation that is true for any value of the variable is
  called an **identity**. The solution of an identity is all real numbers.
{{< /callout >}}

What happens when we solve the equation $5z=5z-1$? Subtract $5z$ to get the
constant alone on the right: $5z-5z=5z-5z-1$. Simplify — the $z$'s are gone:
$0 \neq -1$.

But $0 \neq -1$. Solving the equation $5z=5z-1$ led to the false statement
$0=-1$. The equation $5z=5z-1$ will not be true for any value of $z$. It has
no solution. An equation that has no solution, or that is false for all
values of the variable, is called a contradiction.

{{< callout type="info" >}}
  **Contradiction.** An equation that is false for all values of the
  variable is called a **contradiction**. A contradiction has no solution.
{{< /callout >}}

**Example.** Classify the equation as a conditional equation, an identity, or
a contradiction. Then state the solution.

$6(2n-1)+3 = 2n-8+5(2n+1)$

Distribute: $12n-6+3=2n-8+10n+5$. Combine like terms: $12n-3=12n-3$. Subtract
$12n$ to get the $n$'s to one side: $-3=-3$. This is a true statement. The
equation is an identity. The solution is all real numbers.

{{< fillin
  question="Consider the equation $4 + 9(3x - 7) = -42x - 13 + 23(3x - 2)$. Distribute and combine like terms on each side, then subtract the matching variable term from both sides. What true numerical statement is left once the variable terms cancel? Enter it as a full equation, e.g. $0=0$."
  answer="-59=-59"
  hint="After distributing and combining like terms, both sides simplify to the same expression in x. Subtracting that expression from both sides leaves only constants."
>}}

{{< fillin
  question="Consider the equation $8(1 - 3x) + 15(2x + 7) = 2(x + 50) + 4(x + 3) + 1$. Distribute and combine like terms on each side, then subtract the matching variable term from both sides. What true numerical statement is left once the variable terms cancel? Enter it as a full equation, e.g. $0=0$."
  answer="113=113"
  hint="After distributing and combining like terms, both sides simplify to the same expression in x. Subtracting that expression from both sides leaves only constants."
>}}

**Example.** Classify the equation as a conditional equation, an identity, or
a contradiction. Then state the solution.

$10+4(p-5)=0$

Distribute: $10+4p-20=0$. Combine like terms: $4p-10=0$. Add $10$ to both
sides: $4p=10$. Divide: $p=\tfrac{5}{2}$. The equation is true when
$p=\tfrac{5}{2}$. This is a conditional equation. The solution is
$p=\tfrac{5}{2}$.

{{< fillin
  question="Classify the equation as a conditional equation, an identity, or a contradiction, then solve it: $11(q + 3) - 5 = 19$."
  answer="-\frac{9}{11}"
  answerDisplay="$-\tfrac{9}{11}$"
  hint="Distribute, combine like terms, then isolate q. If exactly one value of q makes it true, it's conditional."
>}}

{{< fillin
  question="Classify the equation as a conditional equation, an identity, or a contradiction, then solve it: $6 + 14(k - 8) = 95$."
  answer="\frac{201}{14}"
  answerDisplay="$\tfrac{201}{14}$"
  hint="Distribute, combine like terms, then isolate k. If exactly one value of k makes it true, it's conditional."
>}}

**Example.** Classify the equation as a conditional equation, an identity, or
a contradiction. Then state the solution.

$5m+3(9+3m) = 2(7m-11)$

Distribute: $5m+27+9m=14m-22$. Combine like terms: $14m+27=14m-22$. Subtract
$14m$ from both sides: $27 \neq -22$. But $27 \neq -22$. The equation is a
contradiction. It has no solution.

{{< multiplechoice
  question="Classify the equation $12c + 5(5 + 3c) = 3(9c - 4)$ as a conditional equation, an identity, or a contradiction."
  hint="Distribute and combine like terms on each side, then subtract the matching variable term from both sides. Both sides have the same coefficient on the variable term but different constants ($25 \ne -12$)."
  answer="contradiction"
>}}
conditional equation
identity
contradiction
{{< /multiplechoice >}}

{{< multiplechoice
  question="Classify the equation $4(7d + 18) = 13(3d - 2) - 11d$ as a conditional equation, an identity, or a contradiction."
  hint="Distribute and combine like terms on each side, then subtract the matching variable term from both sides. Both sides have the same coefficient on the variable term but different constants ($72 \ne -26$)."
  answer="contradiction"
>}}
conditional equation
identity
contradiction
{{< /multiplechoice >}}

| Type of equation | What happens when you solve it? | Solution |
| :--- | :--- | :--- |
| Conditional Equation | True for one or more values of the variables and false for all other values | One or more values |
| Identity | True for any value of the variable | All real numbers |
| Contradiction | False for all values of the variable | No solution |

## Key terms

**conditional equation** — an equation that is true for one or more values
of the variable and false for all other values. **identity** — an equation
that is true for any value of the variable; its solution is all real
numbers. **contradiction** — an equation that is false for all values of the
variable; it has no solution.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 2.4: Use a General Strategy to Solve Linear Equations](https://openstax.org/books/elementary-algebra-2e/pages/2-4-use-a-general-strategy-to-solve-linear-equations) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked-example step tables as markdown tables; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback — including flipping the identity/contradiction classification Try Its into requests for the specific numerical statement each equation reduces to, since a word answer like "identity" can't be graded by the math checker.</small>
