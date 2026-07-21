---
title: Add Whole Numbers
description: >-
  Addition notation, modeling addition with base-10 blocks, the addition
  facts, and the standard column algorithm with carrying — adapted from
  OpenStax Prealgebra 2e, Section 1.2.
source_section: "1.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use addition
  notation, model addition of whole numbers, add whole numbers without
  models, add multi-digit whole numbers using the standard column
  algorithm, carrying when needed, translate word phrases to math
  notation, and add whole numbers in applications.
{{< /callout >}}

## Use addition notation

A college student works a part-time job. Last week she worked $3$ hours on
Monday and $4$ hours on Friday. To find the total number of hours she
worked, add $3$ and $4$:

$$3 + 4$$

We read this as *three plus four*, and the result is the **sum** of three
and four. The numbers $3$ and $4$ are called the **addends**. A math
statement that combines numbers and operations, like $3 + 4$, is called an
**expression**.

| Operation | Symbol | Expression | Read as        | Result             |
| :-------- | :----: | :--------: | :-------------- | :------------------ |
| Addition  | $+$    | $3 + 4$    | three plus four | the sum of 3 and 4 |

## Model addition of whole numbers

Addition is really just counting. Base-10 blocks make this visible: a small
block represents $1$, and a rod of ten blocks represents $10$.

**Example.** Model the addition $3 + 4$.

Both addends are less than $10$, so ones blocks work: $3$ blocks plus $4$
blocks, counted together, give $7$ blocks in all. A math sentence showing
two equal expressions is called an **equation**, so this models the
equation $3 + 4 = 7$.

**Example.** Model the addition $5 + 8$.

$5$ blocks plus $8$ blocks gives $13$ blocks — more than $10$. Exchange $10$
of the ones blocks for $1$ tens rod, leaving $1$ ten and $3$ ones: $1$ ten
and $3$ ones is $13$, so $5 + 8 = 13$.

Now model a sum where both addends already have two digits.

**Example.** Model the addition $17 + 26$.

$17$ is $1$ ten and $7$ ones; $26$ is $2$ tens and $6$ ones. Combined, that's
$3$ tens and $13$ ones. Exchange $10$ of those ones for another ten, leaving
$4$ tens and $3$ ones — that is, $40 + 3 = 43$. So $17 + 26 = 43$.

<svg viewBox="0 0 560 130" role="img" aria-label="Two groups of base-10 blocks being combined. The left group shows 17 as one tens rod and seven ones blocks, plus 26 as two tens rods and six ones blocks. The right group shows the combined result: four tens rods and three ones blocks, after exchanging ten of the thirteen ones blocks for one more tens rod, giving the sum 43." style={{ maxWidth: 560, width: '100%', display: 'block', margin: '1.5rem auto' }}>
  <text x="10" y="20" fontSize="14" fill="currentColor">17 + 26 =</text>
  {[0, 1, 2].map((i) => (
    <rect key={`t1-${i}`} x={10 + i * 14} y="30" width="10" height="60" fill="none" stroke="currentColor" strokeWidth="1.2" />
  ))}
  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
    <rect key={`o1-${i}`} x={70 + i * 14} y="80" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
  ))}
  <text x="230" y="60" fontSize="16" fill="currentColor">=</text>
  <text x="260" y="20" fontSize="14" fill="currentColor">43</text>
  {[0, 1, 2, 3].map((i) => (
    <rect key={`t2-${i}`} x={260 + i * 14} y="30" width="10" height="60" fill="none" stroke="currentColor" strokeWidth="1.2" />
  ))}
  {[0, 1, 2].map((i) => (
    <rect key={`o2-${i}`} x={330 + i * 14} y="80" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
  ))}
</svg>

{{< fillin
  question="Base-10 blocks model 15 as 1 tens rod and 5 ones, combined with 27 as 2 tens rods and 7 ones. What is $15 + 27$?"
  answer="42"
  hint="Combine the tens and ones separately first: 3 tens and 12 ones. Then exchange 10 of the ones for 1 more ten."
>}}

## Add whole numbers without models

Before adding larger numbers without blocks, know the one-digit addition
facts cold — every sum of two digits from $0$ through $9$. Two patterns
make them easier to learn.

The sum of any number and zero is the number itself:

$$a + 0 = a \qquad 0 + a = a$$

This is the **Identity Property of Addition**; zero is called the
*additive identity*.

Reversing the order of the addends never changes the sum — $2 + 3 = 5$ and
$3 + 2 = 5$; $8 + 9 = 17$ and $9 + 8 = 17$. This is the **Commutative
Property of Addition**:

$$a + b = b + a$$

{{< fillin
  question="Using the Commutative Property of Addition, if $8 + 7 = 15$, what is $7 + 8$?"
  answer="15"
  hint="Changing the order of the addends does not change the sum."
>}}

## Add whole numbers with the column algorithm

To add numbers with more than one digit, write them vertically so each
place value lines up in its own column, then add column by column starting
from the ones place.

**Example.** Add $28 + 61$.

$$
\begin{array}{r}
28 \\
+61 \\
\hline
89
\end{array}
$$

Add the ones ($8 + 1 = 9$), then the tens ($2 + 6 = 8$). Neither column sums
to $10$ or more, so no carrying is needed.

But what happens when a column's sum is $10$ or more? Going back to the
base-10 blocks, adding $17 + 26$: the ones columns give $7 + 6 = 13$ ones —
more than $10$, so exchange $10$ of them for $1$ ten. Without the blocks,
that exchange is written as a small carried $1$ above the tens column.

{{< callout type="info" >}}
  **Carrying** is regrouping written as arithmetic: exchanging $10$ ones for
  $1$ ten, or $10$ tens for $1$ hundred, and so on — the same idea as
  exchanging blocks, one column at a time.
{{< /callout >}}

**How to add whole numbers:**

1. Write the numbers so each place value lines up vertically.
2. Add the digits in each place value, working from right to left starting
   with the ones place. If a column's sum is $10$ or more, write the ones
   digit of that sum and carry the rest to the next place value.
3. Continue adding each place value from right to left, carrying whenever a
   column sums to $10$ or more.

**Example.** Add $43 + 69$.

Add the ones: $3 + 9 = 12$. Write $2$ in the ones place and carry $1$ ten.
Add the tens: $1 + 4 + 6 = 11$.

$$
\begin{array}{r}
{}^{1} \\
43 \\
+69 \\
\hline
112
\end{array}
$$

$43 + 69 = 112$.

**Example.** Add $324 + 586$.

Add the ones: $4 + 6 = 10$ — write $0$, carry $1$. Add the tens:
$1 + 2 + 8 = 11$ — write $1$, carry $1$. Add the hundreds: $1 + 3 + 5 = 9$.

$$
\begin{array}{r}
{}^{1}{}^{1} \\
324 \\
+586 \\
\hline
910
\end{array}
$$

$324 + 586 = 910$.

**Example.** Add $1{,}683 + 479$.

Add the ones: $3 + 9 = 12$ — write $2$, carry $1$. Add the tens:
$1 + 8 + 7 = 16$ — write $6$, carry $1$. Add the hundreds:
$1 + 6 + 4 = 11$ — write $1$, carry $1$. Add the thousands: $1 + 1 = 2$.

$$
\begin{array}{r}
{}^{1}{}^{1}{}^{1} \\
1{,}683 \\
+479 \\
\hline
2{,}162
\end{array}
$$

$1{,}683 + 479 = 2{,}162$.

When addends have different numbers of digits, line up the ones places
first and let the shorter number's blank columns act as zeros — never line
up the leftmost digits.

{{< fillin
  question="Add: $456 + 376$"
  answer="832"
  hint="Add the ones ($6 + 6 = 12$, write 2 carry 1), then the tens ($1 + 5 + 7 = 13$, write 3 carry 1), then the hundreds."
>}}

{{< fillin
  question="Add: $4{,}597 + 685$"
  answer="5282"
  answerDisplay="5,282"
  hint="Line up by place value: 4,597 has a thousands digit; 685 does not, so treat its thousands place as 0. Add right to left, carrying as needed."
>}}

More than two numbers can be added the same way — add straight down each
column, carrying whenever a column's total reaches $10$ or more.

{{< fillin
  question="Add: $213 + 145 + 322$"
  answer="680"
  hint="Add the ones column first ($3 + 5 + 2$), then the tens, then the hundreds — carry if any column sums to 10 or more."
>}}

## Translate word phrases to math notation

Earlier, addition notation was translated into words. Now reverse the
process: translate word phrases into math notation.

| Words          | Example              | Expression |
| :------------- | :-------------------- | :--------- |
| plus           | $5$ plus $3$           | $5 + 3$    |
| sum            | the sum of $9$ and $2$ | $9 + 2$    |
| increased by   | $8$ increased by $6$   | $8 + 6$    |
| more than      | $4$ more than $11$     | $11 + 4$   |
| total of       | the total of $7$ and $5$ | $7 + 5$ |
| added to       | $10$ added to $16$     | $16 + 10$  |

**Example.** Translate and simplify: *the sum of $15$ and $32$*.

The word *sum* tells us to add; *of $15$ and $32$* tells us the addends.

$$\text{the sum of } 15 \text{ and } 32 \;\to\; 15 + 32 = 47$$

The sum of $15$ and $32$ is $47$.

**Example.** Translate and simplify: *$37$ increased by $26$*.

The words *increased by* tell us to add, and the numbers given are the
addends.

$$37 \text{ increased by } 26 \;\to\; 37 + 26 = 63$$

So $37$ increased by $26$ is $63$.

{{< fillin
  question="Translate and simplify: the sum of 18 and 45."
  answer="63"
  hint="'Sum' means add the two numbers named: $18 + 45$."
>}}

{{< fillin
  question="Translate and simplify: 29 increased by 34."
  answer="63"
  hint="'Increased by' means add: $29 + 34$."
>}}

## Add whole numbers in applications

Word problems follow a simple plan: read the problem to see what's being
asked, write a word phrase for the information needed, translate that
phrase into math notation, simplify, and then write a sentence answering
the question — with units.

**Example.** Hao earned test grades of $87, 95, 80, 92,$ and $78$ on the
five tests of the semester. What is the total number of points he earned?

We want the total number of points on the tests — the sum of the grades.

$$87 + 95 + 80 + 92 + 78 = 432$$

Hao earned a total of $432$ points.

Some application problems involve shapes. The **perimeter** of a figure is
the distance around it — the sum of the lengths of its sides.

**Example.** A rectangular patio has sides of length $14$ feet, $9$ feet,
$14$ feet, and $9$ feet. Find the perimeter.

We want the perimeter — the sum of the sides.

$$14 + 9 + 14 + 9 = 46$$

The perimeter of the patio is $46$ feet.

{{< fillin
  question="Mark rode his bicycle 18 miles on Monday, 25 miles on Wednesday, 12 miles on Friday, 34 miles on Saturday, and 21 miles on Sunday. What is the total number of miles he rode last week?"
  answer="110"
  hint="Add all five distances: the sum of the miles is the total miles."
>}}

{{< fillin
  question="A garden shaped like a rectangle has sides of length 22 feet, 15 feet, 22 feet, and 15 feet. Find its perimeter, in feet."
  answer="74"
  hint="Perimeter is the sum of the lengths of all the sides: $22 + 15 + 22 + 15$."
>}}

## Key terms

**sum** — the result of addition. **addend** — one of the numbers being
added. **expression** — a math statement that combines numbers and
operations. **equation** — a math sentence stating that two expressions are
equal. **Identity Property of Addition** — the sum of any number and $0$ is
that number ($a + 0 = a$). **Commutative Property of Addition** — changing
the order of the addends does not change the sum ($a + b = b + a$).
**carrying** — regrouping $10$ units in one place value as $1$ unit in the
next place value to the left, written as a small digit above the column.
**perimeter** — the distance around a geometric figure; the sum of the
lengths of its sides.

---

<small>This section is adapted from [Prealgebra 2e, Section 1.2: Add Whole Numbers](https://openstax.org/books/prealgebra-2e/pages/1-2-add-whole-numbers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: condensed prose, omitted the addition facts table (0–9) as redundant with earlier material, redrew the base-10 block figure as an inline SVG and the column-addition figures as aligned math blocks, used new example numbers for the word-phrase and applications examples, and converted "Try It" practice problems into interactive exercises with instant feedback.</small>
