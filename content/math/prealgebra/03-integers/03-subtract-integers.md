---
title: Subtract Integers
description: >-
  Modeling subtraction of integers with color counters, the Subtraction
  Property, simplifying integer expressions, evaluating variable
  expressions, and translating word phrases and applications into
  expressions with integers — adapted from OpenStax Prealgebra 2e,
  Section 3.3.
source_section: "3.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** model subtraction
  of integers, simplify expressions with integers, evaluate variable
  expressions with integers, translate word phrases to algebraic
  expressions, and subtract integers in applications.
{{< /callout >}}

## Model subtraction of integers

We continue to use two-color counters to model subtraction: a blue
counter represents a positive $1$ and a red counter represents a negative
$1$. Just as before, read $5 - 3$ as "five take away three," and use the
counters the same way.

We'll model four subtraction facts using $5$ and $3$: $5-3$, $-5-(-3)$,
$-5-3$, and $5-(-3)$.

**Example.** Model $5 - 3$. Start with $5$ positives. Take away $3$
positives. There are $2$ positives left, so $5 - 3 = 2$.

<svg viewBox="0 0 220 70" role="img" aria-label="Five blue positive counters with three circled in red and removed, leaving two positives." style={{ maxWidth: 220, display: 'block', margin: '1.5rem auto' }}>
  <ellipse cx="52" cy="35" rx="50" ry="22" fill="none" stroke="#c0392b" strokeWidth="1.5" />
  {[0,1,2].map(i => <circle key={i} cx={20+i*32} cy="35" r="13" fill="none" stroke="#2b7fb8" strokeWidth="2" />)}
  {[0,1].map(i => <circle key={i} cx={148+i*32} cy="35" r="13" fill="none" stroke="#2b7fb8" strokeWidth="2" />)}
</svg>

{{< fillin
  question="Model the expression, then simplify: $6 - 4$"
  answer="2"
  hint="Start with $6$ positives and take away $4$ positives."
>}}

**Example.** Model $-5 - (-3)$. Start with $5$ negatives. Take away $3$
negatives. There are $2$ negatives left, so $-5 - (-3) = -2$.

Notice that these two examples are alike: in the first, we subtracted
$3$ positives from $5$ positives to get $2$ positives; in the second, we
subtracted $3$ negatives from $5$ negatives to get $2$ negatives. Each
example used counters of only one color, and the "take away" model of
subtraction was easy to apply.

{{< fillin
  question="Model the expression, then simplify: $-6 - (-4)$"
  answer="-2"
  hint="Start with $6$ negatives and take away $4$ negatives."
>}}

Now let's see what happens when we subtract one positive and one
negative number. We'll need both positive and negative counters, and
sometimes some neutral pairs too — remember, adding a neutral pair
doesn't change the value.

**Example.** Model $-5 - 3$. Start with $5$ negatives. We need to take
away $3$ positives, but there are no positives to take away — so we add
$3$ neutral pairs (which doesn't change the value), giving us $3$
positives to remove. Taking those away leaves the original $5$ negatives
plus $3$ more negatives from the neutral pairs: $8$ negatives. So
$-5 - 3 = -8$.

{{< fillin
  question="Model the expression, then simplify: $-6 - 4$"
  answer="-10"
  hint="Start with $6$ negatives. There are no positives to take away, so add $4$ neutral pairs, then remove the $4$ positives — leaving the original negatives plus $4$ more."
>}}

**Example.** Model $5 - (-3)$. Start with $5$ positives. We need to take
away $3$ negatives, but there are none — so add $3$ neutral pairs, then
remove the $3$ negatives. That leaves the original $5$ positives plus
$3$ more positives from the neutral pairs: $8$ positives. So
$5 - (-3) = 8$.

{{< fillin
  question="Model the expression, then simplify: $7 - (-4)$"
  answer="11"
  hint="Start with $7$ positives. Add $4$ neutral pairs to get $4$ negatives to remove — that leaves $7 + 4$ positives."
>}}

## Simplify expressions with integers

Do you see a pattern? Let's think through two more subtractions without
actually using counters.

To subtract $-23 - 7$: start with $23$ negative counters. We need to
subtract $7$ positives, but there are none, so add $7$ neutral pairs and
take away the $7$ positives. What's left is the original $23$ negatives
plus $7$ more negatives from the neutral pair — $30$ negatives:
$-23 - 7 = -30$. Notice that to subtract $7$, we added $7$ negatives.

To subtract $30 - (-12)$: start with $30$ positives. We need to subtract
$12$ negatives, but there are none, so add $12$ neutral pairs and take
away the $12$ negatives. What's left is the original $30$ positives plus
$12$ more positives — $42$ positives: $30 - (-12) = 42$. Notice that to
subtract $-12$, we added $12$.

While we may not always use counters, especially with large numbers,
practicing with them first gives a concrete way to visualize subtraction
without them. Subtraction of signed numbers can also be done by *adding
the opposite* — this is the **Subtraction Property**:

{{< callout type="info" >}}
  **Subtraction Property.** $a - b = a + (-b)$. Subtracting a number is
  the same as adding its opposite.
{{< /callout >}}

Compare $6 - 4$ and $6 + (-4)$: both give $2$. When a subtraction problem
has only positive numbers, like $6-4$, we just subtract as usual — but
knowing that $6-4$ gives the same answer as $6+(-4)$ helps once negative
numbers are involved.

**Example.** Simplify (a) $13 - 8$ and $13 + (-8)$; (b) $-17 - 9$ and
$-17 + (-9)$.

(a) $13 - 8 = 5$ and $13 + (-8) = 5$ — subtracting $8$ from $13$ is the
same as adding $-8$ to $13$.
(b) $-17 - 9 = -26$ and $-17 + (-9) = -26$ — subtracting $9$ from $-17$
is the same as adding $-9$ to $-17$.

{{< fillin
  question="Simplify: $21 - 13$"
  answer="8"
  hint="Subtracting $13$ from $21$ gives the same result as adding $-13$ to $21$."
>}}

Now look at what happens when we subtract a *negative*: $8 - (-5)$ gives
the same result as $8 + 5$ — both are $13$. Subtracting a negative
number is like adding a positive.

**Example.** Simplify (a) $9 - (-15)$ and $9 + 15$; (b) $-7 - (-4)$ and
$-7 + 4$.

(a) $9 - (-15) = 24$ and $9 + 15 = 24$ — subtracting $-15$ from $9$ is
the same as adding $15$ to $9$.
(b) $-7 - (-4) = -3$ and $-7 + 4 = -3$ — subtracting $-4$ from $-7$ is
the same as adding $4$ to $-7$.

{{< fillin
  question="Simplify: $6 - (-13)$"
  answer="19"
  hint="Subtracting $-13$ is the same as adding $13$."
>}}

{{< fillin
  question="Simplify: $-5 - (-1)$"
  answer="-4"
  hint="Subtracting $-1$ is the same as adding $1$."
>}}

Here's a summary of the pattern, based on the results from the earlier
examples:

| | Enough counters of that color already | Not enough — need neutral pairs |
| :--- | :--- | :--- |
| $5-3=2$ (want to take away $3$ positives, have $5$) | Subtract directly. | — |
| $-5-(-3)=-2$ (want to take away $3$ negatives, have $5$) | Subtract directly. | — |
| $-5-3=-8$ (5 negatives, want to subtract 3 positives) | — | Add neutral pairs, then take away. |
| $5-(-3)=8$ (5 positives, want to subtract 3 negatives) | — | Add neutral pairs, then take away. |

{{< callout type="info" >}}
  **Subtraction of integers.** When there are enough counters of the
  needed color to take away, subtract directly. When there are not
  enough, add neutral pairs until there are, then take away.
{{< /callout >}}

**Example.** Simplify $-74 - (-58)$. This takes $58$ negatives away
from $74$ negatives: $-74 - (-58) = -16$.

{{< fillin
  question="Simplify: $-67 - (-38)$"
  answer="-29"
  hint="This takes $38$ negatives away from $67$ negatives."
>}}

These techniques extend to more complicated expressions — follow the
order of operations.

**Example.** Simplify $7 - (-4-3) - 9$. Simplify inside the parentheses
first: $7 - (-7) - 9$. Subtract from left to right: $14 - 9$. Subtract:
$5$.

{{< fillin
  question="Simplify: $8 - (-3 - 1) - 9$"
  answer="3"
  hint="Simplify inside the parentheses first ($-3 - 1 = -4$), then subtract left to right."
>}}

**Example.** Simplify $3 \cdot 7 - 4 \cdot 7 - 5 \cdot 8$. Multiply first:
$21 - 28 - 40$. Subtract from left to right: $-7-40$. Subtract: $-47$.

{{< fillin
  question="Simplify: $6 \cdot 2 - 9 \cdot 1 - 8 \cdot 9$"
  answer="-69"
  hint="Multiply first ($12$, $9$, and $72$), then subtract left to right."
>}}

## Evaluate variable expressions with integers

Now let's practice evaluating expressions that involve subtracting
negative numbers as well as positive numbers.

**Example.** Evaluate $x - 4$ when (a) $x=3$, (b) $x=-6$.

(a) Substitute $3$ for $x$: $3-4 = -1$.
(b) Substitute $-6$ for $x$: $-6-4 = -10$.

{{< fillin
  question="Evaluate each expression: $y - 7$ when $y = 5$."
  answer="-2"
  hint="Substitute $5$ for $y$, then subtract."
>}}

{{< fillin
  question="Evaluate each expression: $y - 7$ when $y = -8$."
  answer="-15"
  hint="Substitute $-8$ for $y$, then subtract."
>}}

**Example.** Evaluate $20 - z$ when (a) $z=12$, (b) $z=-12$.

(a) Substitute $12$ for $z$: $20-12 = 8$.
(b) Substitute $-12$ for $z$: $20-(-12) = 32$.

{{< fillin
  question="Evaluate each expression: $17 - k$ when $k = 19$."
  answer="-2"
  hint="Substitute $19$ for $k$, then subtract."
>}}

{{< fillin
  question="Evaluate each expression: $17 - k$ when $k = -19$."
  answer="36"
  hint="Substitute $-19$ for $k$: $17 - (-19)$, which is the same as adding $19$."
>}}

## Translate word phrases to algebraic expressions

The expression $a - b$ can be read several ways: "$a$ minus $b$," "the
difference of $a$ and $b$," "subtract $b$ from $a$," "$b$ subtracted
from $a$," or "$b$ less than $a$." Be careful to get $a$ and $b$ in the
right order — the number subtracted always comes second.

**Example.** Translate and simplify: (a) the difference of $13$ and
$-21$; (b) subtract $24$ from $-19$.

(a) *Difference* means subtraction, in the order given: $13-(-21) = 34$.
(b) *Subtract 24 from -19* means take $24$ away from $-19$:
$-19-24 = -43$.

{{< fillin
  question="Translate and simplify: the difference of $14$ and $-23$"
  answer="37"
  hint="'Difference' means subtract, in the order given: $14 - (-23)$."
>}}

{{< fillin
  question="Translate and simplify: subtract $21$ from $-17$"
  answer="-38"
  hint="This means take $21$ away from $-17$: $-17 - 21$."
>}}

## Subtract integers in applications

To solve an application problem: identify what you're asked to find,
write a phrase for it, translate the phrase into an expression, simplify,
and answer with a complete sentence.

**Example.** In the morning, the temperature in Urbana, Illinois was
$11$ degrees Fahrenheit. By mid-afternoon, the temperature had dropped
to $-9$ degrees Fahrenheit. What was the difference between the morning
and afternoon temperatures?

The difference of $11$ and $-9$: $11 - (-9) = 20$. The difference in
temperature was $20$ degrees Fahrenheit.

{{< fillin
  question="In the morning, the temperature in Anchorage, Alaska was 15 degrees Fahrenheit. By mid-afternoon the temperature had dropped to 30 degrees below zero. What was the difference between the morning and afternoon temperatures (in degrees)?"
  answer="45"
  hint="Find the difference of $15$ and $-30$: $15 - (-30)$."
>}}

Geography gives another application, comparing elevations above and
below sea level.

**Example.** Dinesh hiked from Mt. Whitney, the highest point in
California at $14{,}497$ feet above sea level, to Death Valley, the
lowest point at $282$ feet below sea level. What is the difference in
elevation between them?

Elevation of Mt. Whitney minus elevation of Death Valley:
$14{,}497 - (-282) = 14{,}779$. The difference in elevation is
$14{,}779$ feet.

{{< fillin
  question="One day, John hiked to the 10,023-foot summit of Haleakala volcano in Hawaii. The next day, while scuba diving, he dove to a cave 80 feet below sea level. What is the difference between the elevation of the summit and the depth of the cave (in feet)?"
  answer="10103"
  answerDisplay="10,103"
  hint="Subtract the cave's elevation ($-80$) from the summit's elevation ($10{,}023$): $10{,}023 - (-80)$."
>}}

Checking accounts with overdraft protection combine both positive and
negative numbers naturally.

**Example.** Leslie has $\text{\textdollar}25$ in her checking account and writes a
check for $\text{\textdollar}8$. (a) What is the balance after she writes the check?
(b) She writes a second check for $\text{\textdollar}20$ — what is the new balance?
(c) Leslie's friend told her that she had lost a check for $\text{\textdollar}10$ that
Leslie had given her — what is the balance now?

(a) $\text{\textdollar}25 - \text{\textdollar}8 = \text{\textdollar}17$. (b) $\text{\textdollar}17 - \text{\textdollar}20 = -\text{\textdollar}3$, so she is overdrawn
by $\text{\textdollar}3$. (c) The lost check means that $\text{\textdollar}10$ was never actually
withdrawn, so it's added back: $-\text{\textdollar}3 + \text{\textdollar}10 = \text{\textdollar}7$. The balance is now
$\text{\textdollar}7$.

{{< fillin
  question="Araceli has \$75 in her checking account and writes a check for \$27. What is the balance after she writes the check?"
  answer="48"
  answerDisplay="\$48"
  hint="Subtract the check amount from the starting balance: $75 - 27$."
>}}

## Key terms

**Subtraction Property** — $a - b = a + (-b)$: subtracting a number is
the same as adding its opposite.

---

<small>This section is adapted from [Prealgebra 2e, Section 3.3: Subtract Integers](https://openstax.org/books/prealgebra-2e/pages/3-3-subtract-integers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the two-color-counter models as accessible inline graphics and the subtraction-pattern summary as a table; condensed prose; omitted the Be Prepared quiz, Manipulative Mathematics and Links to Literacy callouts, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
