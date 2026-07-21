---
title: "Solve Equations Using Integers; The Division Property of Equality"
description: >-
  Determining whether an integer is a solution of an equation, solving
  equations with integers using the Addition and Subtraction Properties of
  Equality, modeling and applying the Division Property of Equality, and
  translating word sentences into equations and solving them — adapted
  from OpenStax Prealgebra 2e, Section 3.5.
source_section: "3.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** determine whether
  an integer is a solution of an equation, solve equations with integers
  using the Addition and Subtraction Properties of Equality, model the
  Division Property of Equality, solve equations using the Division
  Property of Equality, and translate word sentences to equations and
  solve.
{{< /callout >}}

## Determine whether a number is a solution of an equation

A **solution** of an equation is a value of the variable that makes a
true statement when substituted into the equation. Now that we've worked
with integers, we can find integer solutions to equations. The steps are
the same whether the solution turns out to be a whole number or an
integer.

{{< callout type="info" >}}
  **Determine whether a number is a solution to an equation.**

  1. Substitute the number for the variable in the equation.
  2. Simplify the expressions on both sides of the equation.
  3. Determine whether the resulting equation is true. If it is true, the
     number is a solution. If it is not true, the number is not a
     solution.
{{< /callout >}}

**Example.** Determine whether each of the following is a solution of
$2x - 5 = -13$: (a) $x=4$, (b) $x=-4$, (c) $x=-9$.

(a) Substitute $4$ for $x$: $2(4)-5 = 8-5 = 3 \ne -13$. Since $x=4$
does not result in a true equation, $4$ is *not* a solution.
(b) Substitute $-4$ for $x$: $2(-4)-5 = -8-5 = -13$. Since this is true,
$-4$ *is* a solution.
(c) Substitute $-9$ for $x$: $2(-9)-5 = -18-5 = -23 \ne -13$. Since this
is not true, $-9$ is *not* a solution.

{{< fillin
  question="Substitute $x = -3$ into the left side of $2x - 8 = -14$ and simplify. What value do you get?"
  answer="-14"
  hint="Compute $2(-3) - 8$, then compare it to $-14$ to see whether $x = -3$ is a solution."
>}}

## Solve equations with integers using the Addition and Subtraction Properties of Equality

We can use the same properties of equality we used with whole numbers to
solve equations with integers: when you add or subtract the same
quantity from both sides of an equation, you still have equality.

{{< callout type="info" >}}
  **Properties of equality.** For any numbers $a$, $b$, $c$: **Subtraction
  Property of Equality** — if $a=b$ then $a-c = b-c$. **Addition Property
  of Equality** — if $a=b$ then $a+c = b+c$.
{{< /callout >}}

**Example.** Solve $y + 9 = 5$. Subtract $9$ from each side to undo the
addition: $y+9-9 = 5-9$. Simplify: $y = -4$. Check by substituting $-4$
into the original equation: $-4+9 = 5$, and $5=5$ ✓.

{{< fillin
  question="Solve: $y + 11 = 7$"
  answer="-4"
  hint="Subtract $11$ from each side to undo the addition."
>}}

**Example.** Solve $a - 6 = -8$. Add $6$ to each side to undo the
subtraction: $a-6+6 = -8+6$. Simplify: $a = -2$. Check:
$-2-6 = -8$ ✓.

{{< fillin
  question="Solve: $a - 2 = -8$"
  answer="-6"
  hint="Add $2$ to each side to undo the subtraction."
>}}

## Model the Division Property of Equality

All of the equations solved so far have had the form $x+a=b$ or
$x-a=b$, where isolating the variable meant adding or subtracting a
constant. Now let's see how to solve equations that involve
*multiplication* — where the variable is multiplied by a number.

Picture two identical envelopes, each containing the same unknown number
of counters, sitting next to $6$ loose counters — the left side of the
scale must equal the right side, but the counters in the envelopes are
"hidden." To find how many are in each envelope, separate the $6$
counters into $2$ equal groups: $6 \div 2 = 3$ counters in each envelope.

<svg viewBox="0 0 260 110" role="img" aria-label="Two identical envelopes on the left, each holding an unknown number of counters, balanced against six loose counters on the right. The equation is 2x = 6." style={{ maxWidth: 260, display: 'block', margin: '1.5rem auto' }}>
  <rect x="10" y="10" width="240" height="80" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <line x1="130" y1="10" x2="130" y2="90" stroke="currentColor" strokeWidth="1.5" />
  <rect x="25" y="20" width="80" height="26" fill="none" stroke="#2b7fb8" strokeWidth="1.5" />
  <path d="M25,20 L65,38 L105,20" fill="none" stroke="#2b7fb8" strokeWidth="1.5" />
  <rect x="25" y="54" width="80" height="26" fill="none" stroke="#2b7fb8" strokeWidth="1.5" />
  <path d="M25,54 L65,72 L105,54" fill="none" stroke="#2b7fb8" strokeWidth="1.5" />
  {[[160,32],[190,25],[220,38],[160,62],[195,68]].map(([cx,cy],i) => (
    <circle key={i} cx={cx} cy={cy} r="9" fill="none" stroke="#8a9a2b" strokeWidth="1.5" />
  ))}
  <text x="65" y="105" textAnchor="middle" fontSize="14" fill="currentColor">2x</text>
  <text x="130" y="105" textAnchor="middle" fontSize="14" fill="currentColor">=</text>
  <text x="195" y="105" textAnchor="middle" fontSize="14" fill="currentColor">6</text>
</svg>

The equation modeling this is $2x = 6$. We divide both sides of the
equation by $2$, the same way we split the counters into groups:

$$\frac{2x}{2} = \frac{6}{2} \qquad x = 3$$

Does this check? $2 \cdot 3 = 6$ ✓ — three counters in each of two
envelopes does equal six.

A second example: three identical envelopes balanced against $12$
counters models $3x=12$. Separating the $12$ counters into $3$ groups
gives $4$ counters per envelope, since $12 \div 3 = 4$:

$$\frac{3x}{3} = \frac{12}{3} \qquad x = 4$$

Check: $3 \cdot 4 = 12$ ✓.

{{< fillin
  question="Four identical envelopes are balanced against $8$ loose counters. Write the equation this models (using $x$ for the unknown count per envelope), then solve for $x$. Enter the value of $x$."
  answer="2"
  hint="The equation is $4x = 8$. Divide both sides by $4$."
>}}

## Solve equations using the Division Property of Equality

These examples lead to the **Division Property of Equality**: when you
divide both sides of an equation by any nonzero number, you still have
equality.

{{< callout type="info" >}}
  **Division Property of Equality.** For any numbers $a$, $b$, $c$, with
  $c \ne 0$: if $a=b$ then $\tfrac{a}{c} = \tfrac{b}{c}$.
{{< /callout >}}

**Example.** Solve $7x = -49$. To isolate $x$, undo the multiplication
by dividing each side by $7$: $\tfrac{7x}{7} = \tfrac{-49}{7}$. Simplify:
$x=-7$. Check: $7(-7) = -49$ ✓.

{{< fillin
  question="Solve: $8a = 56$"
  answer="7"
  hint="Divide each side by $8$ to undo the multiplication."
>}}

**Example.** Solve $-3y = 63$. Divide each side by $-3$:
$\tfrac{-3y}{-3} = \tfrac{63}{-3}$. Simplify: $y=-21$. Check:
$-3(-21) = 63$ ✓.

{{< fillin
  question="Solve: $-8p = 96$"
  answer="-12"
  hint="Divide each side by $-8$ to undo the multiplication."
>}}

## Translate word sentences to equations and solve

Now we'll translate word sentences into equations with a variable, then
solve them.

**Example.** Translate and solve: five more than $x$ is equal to $-3$.
Translate: $x+5=-3$. Subtract $5$ from both sides: $x+5-5 = -3-5$.
Simplify: $x=-8$. Check: $-8+5 = -3$ ✓.

{{< fillin
  question="Translate and solve: seven more than $x$ is equal to $-2$."
  answer="-9"
  hint="Translate as $x + 7 = -2$, then subtract $7$ from both sides."
>}}

**Example.** Translate and solve: the difference of $n$ and $6$ is
$-10$. Translate: $n-6=-10$. Add $6$ to each side: $n-6+6 = -10+6$.
Simplify: $n=-4$. Check: $-4-6=-10$ ✓.

{{< fillin
  question="Translate and solve: the difference of $p$ and $2$ is $-4$."
  answer="-2"
  hint="Translate as $p - 2 = -4$, then add $2$ to both sides."
>}}

**Example.** Translate and solve: the number $108$ is the product of
$-9$ and $y$. Translate: $108 = -9y$. Divide by $-9$:
$\tfrac{108}{-9} = \tfrac{-9y}{-9}$. Simplify: $-12=y$. Check:
$108 = -9(-12)$ ✓.

{{< fillin
  question="Translate and solve: the number $132$ is the product of $-12$ and $y$."
  answer="-11"
  hint="Translate as $132 = -12y$, then divide both sides by $-12$."
>}}

## Key terms

**solution** — a value of a variable that makes an equation's statement
true. **Subtraction/Addition Property of Equality** — adding or
subtracting the same quantity from both sides of an equation preserves
equality. **Division Property of Equality** — dividing both sides of an
equation by the same nonzero number preserves equality.

---

<small>This section is adapted from [Prealgebra 2e, Section 3.5: Solve Equations Using Integers; The Division Property of Equality](https://openstax.org/books/prealgebra-2e/pages/3-5-solve-equations-using-integers-the-division-property-of-equality) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the envelopes-and-counters model as an accessible inline graphic; condensed prose; omitted the Be Prepared quiz, Manipulative Mathematics callout, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
