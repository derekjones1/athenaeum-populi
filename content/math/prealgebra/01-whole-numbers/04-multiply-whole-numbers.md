---
title: Multiply Whole Numbers
description: >-
  Multiplication notation, modeling multiplication with counters, the
  properties of multiplication, multiplying multi-digit numbers, translating
  word phrases, and applications including area — adapted from OpenStax
  Prealgebra 2e, Section 1.4.
source_section: "1.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use multiplication
  notation, model multiplication of whole numbers, multiply whole numbers,
  translate word phrases to math notation, and multiply whole numbers in
  applications.
{{< /callout >}}

## Use multiplication notation

Suppose you were asked to count a pile of pennies arranged in $3$ rows with
$8$ pennies in each row. Would you count them individually, or would you
count a row and add that number $3$ times?

$$8 + 8 + 8$$

Multiplication is a way to represent repeated addition. Instead of adding
$8$ three times, we can write a multiplication expression:

$$3 \times 8$$

We call each number being multiplied a **factor**, and the result is the
**product**. We read $3 \times 8$ as *three times eight*, and the result as
*the product of three and eight*.

Several symbols represent multiplication: the times sign, a centered dot,
and parentheses.

| Operation      | Notation                    | Expression                        | Read as           | Result                       |
| :------------- | :-------------------------- | :-------------------------------- | :---------------- | :--------------------------- |
| Multiplication | $\times$, $\cdot$, $(\ )$   | $3 \times 8$, $3 \cdot 8$, $3(8)$ | three times eight | the product of $3$ and $8$   |

**Example.** Translate from math notation to words: (a) $7 \times 6$
(b) $12 \cdot 14$ (c) $6(13)$.

(a) *Seven times six*; the result is the product of seven and six.
(b) *Twelve times fourteen*; the result is the product of twelve and
fourteen. (c) *Six times thirteen*; the result is the product of six and
thirteen.

## Model multiplication of whole numbers

There are many ways to model multiplication. Instead of base-10 blocks, here
we use **counters** — any objects used for counting. To model $3 \times 8$,
start with a row of $8$ counters, then make $3$ rows of $8$:

<svg viewBox="0 0 340 110" role="img" aria-label="Three rows of eight circles each, modeling 3 times 8 equals 24 counters in all." style={{ maxWidth: 340, width: '100%', display: 'block', margin: '1.5rem auto' }}>
  {[0, 1, 2].map((r) =>
    [0, 1, 2, 3, 4, 5, 6, 7].map((c) => (
      <circle key={`${r}-${c}`} cx={25 + c * 42} cy={20 + r * 35} r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
    ))
  )}
</svg>

Counting the counters, there are $24$ in all, so $3 \times 8 = 24$. If you
look at the rows sideways, you'll see $8$ rows of $3$ counters — the product
is the same either way. We'll return to that idea shortly.

{{< fillin
  question="A model shows 4 rows of counters with 6 counters in each row. How many counters are there in all?"
  answer="24"
  hint="The model represents the product $4 \times 6$ — add 6 four times if you're unsure."
>}}

## Multiply whole numbers

To multiply without models, you need to know the one-digit multiplication
facts fluently — make sure you do before proceeding, and memorize any you're
unsure of.

Multiplying by zero and by one follow simple patterns.

**Multiplication Property of Zero:** the product of any number and $0$ is
$0$.

$$a \cdot 0 = 0 \qquad 0 \cdot a = 0$$

**Identity Property of Multiplication:** the product of any number and $1$
is the number; $1$ is called the **multiplicative identity**.

$$1 \cdot a = a \qquad a \cdot 1 = a$$

For example, $0 \cdot 11 = 0$, $(42)0 = 0$, $(11)1 = 11$, and
$1 \cdot 42 = 42$.

Just as with addition, the order of the factors does not matter:
$4 \cdot 7 = 28$ and $7 \cdot 4 = 28$; $8 \cdot 9 = 72$ and $9 \cdot 8 = 72$.
This is the **Commutative Property of Multiplication**: changing the order
of the factors does not change their product.

$$a \cdot b = b \cdot a$$

{{< fillin
  question="Find the product: $0 \cdot 19$."
  answer="0"
  hint="What does the Multiplication Property of Zero say about any number times zero?"
>}}

To multiply numbers with more than one digit, write the numbers vertically
in columns, as with addition and subtraction. To multiply $27$ by $3$: first
multiply $3 \times 7 = 21$ — write the $1$ in the ones place of the product
and *carry* the $2$ tens by writing $2$ above the tens place. Then multiply
$3 \times 2 = 6$ and add the carried $2$: $6 + 2 = 8$. The product is $81$.

To multiply two whole numbers:

1. Write the numbers so each place value lines up vertically (with different
   numbers of digits, put the smaller number on the bottom).
2. Multiply the digits in each place value, working right to left, starting
   with the ones place of the bottom number. If a product in a place value is
   more than $9$, carry to the next place value. Write the partial products,
   lining up the digits in the place values with the numbers above. Repeat
   for the tens place of the bottom number, the hundreds place, and so on,
   inserting a zero as a placeholder with each additional partial product.
3. Add the partial products.

**Example.** Multiply $62(87)$. Multiplying $7$ by $62$ gives the first
partial product, $434$ ($7 \cdot 2 = 14$, write the $4$ and carry the $1$;
$7 \cdot 6 = 42$, plus the carried $1$ is $43$). Next multiply the $8$ —
which is $8$ tens — by $62$: write a $0$ placeholder in the ones place, then
$8 \cdot 2 = 16$ and $8 \cdot 6 = 48$ plus the carry gives the second partial
product, $4{,}960$. Adding the partial products, $434 + 4{,}960 = 5{,}394$,
so $62(87) = 5{,}394$.

**Example.** Multiply $(354)(438)$. There are three partial products — from
the $8$ ones, the $3$ tens, and the $4$ hundreds:
$2{,}832 + 10{,}620 + 141{,}600 = 155{,}052$.

When a factor ends in zeros, a pattern appears: $47 \cdot 10 = 470$ and
$47 \cdot 100 = 4{,}700$. Since $10$ has one zero, we put one zero after
$47$; since $100$ has two zeros, we put two. If we multiplied $47$ times
$10{,}000$, which has four zeros, the product would be $470{,}000$.

When there are three or more factors, multiply the first two, then multiply
their product by the next factor. To find $8 \cdot 3 \cdot 2$, first
multiply $8 \cdot 3 = 24$, then multiply $24 \cdot 2 = 48$.

{{< fillin
  question="Multiply: $64 \cdot 8$."
  answer="512"
  hint="8 times 4 is 32 — write the 2, carry the 3, and remember to add it after multiplying 8 by 6."
>}}

{{< fillin
  question="Multiply: $75 \cdot 100$."
  answer="7500"
  answerDisplay="7,500"
  hint="100 has two zeros — what does the pattern for multiplying by powers of ten say to do with them?"
>}}

{{< fillin
  question="Multiply: $(265)(483)$."
  answer="127995"
  answerDisplay="127,995"
  hint="Write $265 \times 483$ vertically and add the three partial products — from the 3 ones, the 8 tens, and the 4 hundreds."
>}}

## Translate word phrases to math notation

Earlier we translated math notation into words; now we reverse the process.
Some of the words that indicate multiplication:

| Word phrase | Example                      | Expression                                    |
| :---------- | :--------------------------- | :-------------------------------------------- |
| times       | $3$ times $8$                | $3 \times 8$, $3 \cdot 8$, $(3)(8)$, $3(8)$   |
| product     | the product of $3$ and $8$   | as above                                      |
| twice       | twice $4$                    | $2 \cdot 4$                                   |

**Example.** Translate and simplify: the product of $12$ and $27$. The word
*product* tells us to multiply: $12 \cdot 27$, which is $324$.

**Example.** Translate and simplify: twice two hundred eleven. The word
*twice* tells us to multiply by $2$: $2(211)$, which is $422$.

{{< fillin
  question="Translate and simplify: the product of 13 and 28."
  answer="364"
  hint="Product means multiply. Write $13 \times 28$ vertically and add the two partial products."
>}}

## Multiply whole numbers in applications

We use the same strategy as before: determine what we are looking for, write
a phrase that gives the information to find it, translate to math notation,
simplify, and answer with a complete sentence.

**Example.** Humberto bought $4$ sheets of stamps. Each sheet had $20$
stamps. How many stamps did Humberto buy? The total is *the product of $4$
and $20$*, which is $4 \cdot 20 = 80$. Humberto bought $80$ stamps.

**Example.** When Rena cooks rice, she uses twice as much water as rice. How
much water does she need for $4$ cups of rice? *Twice as much as $4$ cups*
translates to $2 \cdot 4 = 8$. Rena needs $8$ cups of water.

**Example.** Van is planning a patio with $8$ rows of tiles and $14$ tiles
in each row. How many tiles does he need? *The product of $8$ and $14$* is
$8 \cdot 14 = 112$. Van needs $112$ tiles.

If we want to know the size of a wall to be painted or a floor to be
carpeted, we find its **area** — a measure of the amount of surface covered
by a shape, measured in square units such as square inches, square feet, or
square centimeters. For a rectangle, the area is the product of the length
and the width. A rug $2$ feet by $3$ feet is made of $6$ squares that are
each $1$ square foot, so its area is $2 \cdot 3 = 6$ square feet.

**Example.** Jen's kitchen ceiling is a rectangle $9$ feet long by $12$ feet
wide. Its area is *the product of $9$ and $12$*: $9 \cdot 12 = 108$. The
area of the ceiling is $108$ square feet.

{{< fillin
  question="Valia donated water for her son's baseball game: 6 cases of water bottles with 24 bottles in each case. How many bottles did Valia donate?"
  answer="144"
  hint="The total is the product of the number of cases and the bottles per case."
>}}

{{< fillin
  question="Zoila bought a rectangular rug 8 feet long by 5 feet wide. What is the area of the rug in square feet?"
  answer="40"
  hint="The area of a rectangle is the product of its length and its width."
>}}

## Key terms

**factor** — a number being multiplied. **product** — the result of
multiplying numbers. **multiplicative identity** — the number $1$; the
product of any number and $1$ is the number. **Multiplication Property of
Zero** — the product of any number and $0$ is $0$. **Commutative Property of
Multiplication** — changing the order of the factors does not change their
product. **partial product** — the product of one digit of a factor and the
other factor, written when multiplying multi-digit numbers. **area** — a
measure of the surface covered by a shape, in square units; for a rectangle,
the product of length and width.

---

<small>This section is adapted from [Prealgebra 2e, Section 1.4: Multiply Whole Numbers](https://openstax.org/books/prealgebra-2e/pages/1-4-multiply-whole-numbers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: condensed prose, redrew the counters model as an accessible inline graphic and summarized the multiplication-facts table and worked columns in prose, and converted practice problems ("Try Its") into interactive exercises with instant feedback.</small>
