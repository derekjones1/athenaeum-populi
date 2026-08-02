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
**By the end of this section, you will be able to:**

- Determine whether an integer is a solution of an equation
- Solve equations with integers using the Addition and Subtraction Properties of Equality
- Model the Division Property of Equality
- Solve equations using the Division Property of Equality
- Translate word sentences to equations and solve
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

<svg viewBox="0 0 260 110" role="img" aria-label="Two identical envelopes on the left, each holding an unknown number of counters, balanced against six loose counters on the right. The equation is 2x = 6." style="max-width: 260px; display: block; margin: 1.5rem auto">
  <rect x="10" y="10" width="240" height="80" fill="none" stroke="currentColor" stroke-width="1.5" />
  <line x1="130" y1="10" x2="130" y2="90" stroke="currentColor" stroke-width="1.5" />
  <rect x="25" y="20" width="80" height="26" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <path d="M25,20 L65,38 L105,20" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <rect x="25" y="54" width="80" height="26" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <path d="M25,54 L65,72 L105,54" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <circle cx="160" cy="32" r="9" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="190" cy="25" r="9" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="220" cy="38" r="9" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="160" cy="62" r="9" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="195" cy="68" r="9" fill="none" stroke="#8a9a2b" stroke-width="1.5" />
  <text x="65" y="105" text-anchor="middle" font-size="14" fill="currentColor">2x</text>
  <text x="130" y="105" text-anchor="middle" font-size="14" fill="currentColor">=</text>
  <text x="195" y="105" text-anchor="middle" font-size="14" fill="currentColor">6</text>
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

## Practice

### Determine whether an integer is a solution of an equation

{{< multiplechoice
  question="Is $x = -2$ a solution of $4x - 2 = 6$?"
  answer="no"
  hint="Substitute $-2$ for $x$ and simplify $4(-2) - 2$, then compare that value with $6$."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $x = -1$ a solution of $4x - 2 = 6$?"
  answer="no"
  hint="Multiply before you subtract: find $4(-1) - 2$ and check whether it equals $6$."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $x = 2$ a solution of $4x - 2 = 6$?"
  answer="yes"
  hint="Substitute $2$ for $x$. If $4(2) - 2$ gives exactly $6$, the equation is true and the number is a solution."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $a = 6$ a solution of $9a + 27 = -63$?"
  answer="no"
  hint="A positive value of $a$ makes $9a$ positive, so the left side cannot be negative here."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $a = -6$ a solution of $9a + 27 = -63$?"
  answer="no"
  hint="Simplify $9(-6) + 27$. Adding a positive to a negative moves the result toward zero."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $a = -10$ a solution of $9a + 27 = -63$?"
  answer="yes"
  hint="Substitute $-10$ for $a$, multiply first, then add $27$ and compare the result with $-63$."
>}}
yes
no
{{< /multiplechoice >}}

### Solve equations with integers using the Addition and Subtraction Properties of Equality

{{< fillin
  question="Solve: $n + 12 = 5$"
  answer="-7"
  hint="Subtract $12$ from each side. Check that your value plus $12$ gives $5$."
>}}

{{< fillin
  question="Solve: $u - 3 = -7$"
  answer="-4"
  hint="Add $3$ to each side to undo the subtraction. Check that your value minus $3$ gives $-7$."
>}}

{{< fillin
  question="Solve: $x + (-2) = -18$"
  answer="-16"
  hint="Adding $-2$ is the same as subtracting $2$, so add $2$ to each side. Check by adding $-2$ back."
>}}

{{< fillin
  question="Solve: $r - (-5) = -9$"
  answer="-14"
  hint="Subtracting $-5$ is the same as adding $5$, so subtract $5$ from each side. Check that $r - (-5)$ gives $-9$."
>}}

### Model the Division Property of Equality

<svg viewBox="0 0 260 150" role="img" aria-label="Three identical envelopes stacked on the left side of a divided box, each holding an unknown number of counters, and six loose counters arranged in two columns of three on the right side." style="max-width: 260px; width: 100%; display: block; margin: 1.5rem auto">
  <rect x="10" y="10" width="240" height="115" fill="none" stroke="currentColor" stroke-width="1.5" />
  <line x1="130" y1="10" x2="130" y2="125" stroke="currentColor" stroke-width="1.5" />
  <rect x="25" y="20" width="80" height="26" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <path d="M25,20 L65,38 L105,20" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <rect x="25" y="55" width="80" height="26" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <path d="M25,55 L65,73 L105,55" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <rect x="25" y="90" width="80" height="26" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <path d="M25,90 L65,108 L105,90" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <circle cx="170" cy="32" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="210" cy="32" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="170" cy="67" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="210" cy="67" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="170" cy="102" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="210" cy="102" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" />
  <text x="65" y="142" text-anchor="middle" font-size="14" fill="currentColor">envelopes</text>
  <text x="190" y="142" text-anchor="middle" font-size="14" fill="currentColor">counters</text>
</svg>

{{< fillin
  question="Write the equation modeled by the envelopes and counters above, using $x$ for the number of counters in one envelope, then solve it. Enter the value of $x$."
  answer="2"
  answerDisplay="$3x = 6$, so $x = 2$"
  hint="Three envelopes balance six counters, so the equation is $3x = 6$. Divide both sides by $3$; check that $3(2) = 6$."
>}}

<svg viewBox="0 0 260 160" role="img" aria-label="Two identical envelopes on the left side of a divided box, each holding an unknown number of counters, and eight loose counters arranged in two columns of four on the right side." style="max-width: 260px; width: 100%; display: block; margin: 1.5rem auto">
  <rect x="10" y="10" width="240" height="125" fill="none" stroke="currentColor" stroke-width="1.5" />
  <line x1="130" y1="10" x2="130" y2="135" stroke="currentColor" stroke-width="1.5" />
  <rect x="25" y="42" width="80" height="26" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <path d="M25,42 L65,60 L105,42" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <rect x="25" y="82" width="80" height="26" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <path d="M25,82 L65,100 L105,82" fill="none" stroke="#2b7fb8" stroke-width="1.5" />
  <circle cx="170" cy="32" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="210" cy="32" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="170" cy="62" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="210" cy="62" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="170" cy="92" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="210" cy="92" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="170" cy="122" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" /><circle cx="210" cy="122" r="10" fill="none" stroke="#8a9a2b" stroke-width="1.5" />
  <text x="65" y="152" text-anchor="middle" font-size="14" fill="currentColor">envelopes</text>
  <text x="190" y="152" text-anchor="middle" font-size="14" fill="currentColor">counters</text>
</svg>

{{< fillin
  question="Write the equation modeled by the envelopes and counters above, using $x$ for the number of counters in one envelope, then solve it. Enter the value of $x$."
  answer="4"
  answerDisplay="$2x = 8$, so $x = 4$"
  hint="Two envelopes balance eight counters, so the equation is $2x = 8$. Separate the counters into $2$ equal groups; check that $2(4) = 8$."
>}}

{{< fillin
  question="A package of 51 cookies has $3$ equal rows of cookies. Find the number of cookies in each row, $c$, by solving the equation $3c = 51$."
  answer="17"
  hint="Three equal rows share the $51$ cookies the way three envelopes share the counters — divide both sides by $3$, then check that $3(17) = 51$."
>}}

### Solve equations using the Division Property of Equality

{{< fillin
  question="Solve: $-7c = 56$"
  answer="-8"
  hint="Divide each side by $-7$. A negative divided into a positive gives a negative; check that $-7$ times your value is $56$."
>}}

{{< fillin
  question="Solve: $-120 = 10q$"
  answer="-12"
  hint="The variable is on the right, which changes nothing — divide both sides by $10$. Check that $10$ times your value is $-120$."
>}}

{{< fillin
  question="Solve: $24x = 480$"
  answer="20"
  hint="Divide each side by $24$. Check by multiplying: $24$ times your value should give $480$."
>}}

{{< fillin
  question="Solve: $-3z = 0$"
  answer="0"
  hint="Divide each side by $-3$. Zero divided by any nonzero number is zero; check that $-3(0) = 0$."
>}}

### Translate word sentences to equations and solve

{{< fillin
  question="Translate and solve: the sum of eight and $p$ is $-3$."
  answer="-11"
  answerDisplay="$8 + p = -3$, so $p = -11$"
  hint="'The sum of eight and $p$' is $8 + p$. Subtract $8$ from both sides, then check that $8 + p$ gives $-3$."
>}}

{{< fillin
  question="Translate and solve: the product of $-15$ and $f$ is $75$."
  answer="-5"
  answerDisplay="$-15f = 75$, so $f = -5$"
  hint="'Product' means multiply, so the equation is $-15f = 75$. Divide both sides by $-15$ and check the sign."
>}}

{{< fillin
  question="Translate and solve: $-6$ plus $c$ is equal to $4$."
  answer="10"
  answerDisplay="$-6 + c = 4$, so $c = 10$"
  hint="'Plus' means add, so the equation is $-6 + c = 4$. Add $6$ to both sides, then check that $-6 + c$ gives $4$."
>}}

{{< fillin
  question="Translate and solve: nine less than $m$ is $-4$."
  answer="5"
  answerDisplay="$m - 9 = -4$, so $m = 5$"
  hint="'Less than' reverses the order — nine less than $m$ is $m - 9$. Add $9$ to both sides and check."
>}}

## Key terms

**solution** — a value of a variable that makes an equation's statement
true. **Subtraction/Addition Property of Equality** — adding or
subtracting the same quantity from both sides of an equation preserves
equality. **Division Property of Equality** — dividing both sides of an
equation by the same nonzero number preserves equality.

---

<small>This section is adapted from [Prealgebra 2e, Section 3.5: Solve Equations Using Integers; The Division Property of Equality](https://openstax.org/books/prealgebra-2e/pages/3-5-solve-equations-using-integers-the-division-property-of-equality) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the envelopes-and-counters models as accessible inline graphics; condensed prose; omitted the Be Prepared quiz, Manipulative Mathematics callout, and media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and adapted selected end-of-section exercises into the interactive Practice block, with each multipart exercise expanded into one question per part.</small>
