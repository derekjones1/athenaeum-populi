---
title: Subtract Whole Numbers
description: >-
  Subtraction notation, modeling subtraction with base-10 blocks, subtracting
  with borrowing, translating word phrases, and applications — adapted from
  OpenStax Prealgebra 2e, Section 1.3.
source_section: "1.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use subtraction
  notation, model subtraction of whole numbers, subtract whole numbers,
  translate word phrases to math notation, and subtract whole numbers in
  applications.
{{< /callout >}}

## Use subtraction notation

Suppose there are seven bananas in a bowl. Elana uses three of them to make a
smoothie. How many bananas are left in the bowl? To answer the question, we
subtract three from seven. When we subtract, we take one number away from
another to find the **difference**. The notation we use to subtract $3$ from
$7$ is

$$7 - 3$$

We read $7 - 3$ as *seven minus three*, and the result is *the difference of
seven and three*.

| Operation   | Notation | Expression | Read as           | Result                        |
| :---------- | :------: | :--------: | :---------------- | :---------------------------- |
| Subtraction | $-$      | $7 - 3$    | seven minus three | the difference of $7$ and $3$ |

**Example.** Translate from math notation to words: (a) $8 - 1$ (b) $26 - 14$.

(a) We read this as *eight minus one*. The result is *the difference of eight
and one*. (b) We read this as *twenty-six minus fourteen*. The result is *the
difference of twenty-six and fourteen*.

## Model subtraction of whole numbers

A model can help us visualize the process of subtraction, much as it did with
addition. Again we use base-10 blocks: a block represents $1$ and a rod
represents $10$. Let's model the expression we just considered, $7 - 3$. We
start with $7$ ones blocks, circle $3$ of them to show we are taking them
away, and count what remains:

<svg viewBox="0 0 560 60" role="img" aria-label="Seven small squares in a row. The first three are circled to show they are taken away, leaving four squares." style={{ maxWidth: 420, width: '100%', display: 'block', margin: '1.5rem auto' }}>
  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
    <rect key={n} x={20 + n * 75} y="15" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
  ))}
  <ellipse cx="110" cy="30" rx="105" ry="26" fill="none" stroke="var(--ap-error, #b42318)" strokeWidth="1.5" />
</svg>

There are $4$ ones blocks left. We have shown that $7 - 3 = 4$.

What about a subtraction like $13 - 8$? Model $13$ with $1$ tens rod and $3$
ones blocks. There are not $8$ ones to take away — so exchange the tens rod
for $10$ ones. Now there are $13$ ones, and we can take $8$ of them away,
leaving $5$: so $13 - 8 = 5$.

The same idea works with larger numbers. To model $43 - 26$, start with $4$
tens and $3$ ones. To take away $26$ — that is, $2$ tens and $6$ ones — we
cannot take $6$ ones from $3$ ones, so we exchange $1$ ten for $10$ ones,
giving $3$ tens and $13$ ones. Taking away $2$ tens and $6$ ones leaves $1$
ten and $7$ ones: $43 - 26 = 17$.

{{< fillin
  question="To model $12 - 7$, you exchange the 1 tens rod for 10 ones, making 12 ones. How many ones blocks remain after you take 7 away?"
  answer="5"
  hint="Start with 12 ones and take away 7 of them."
>}}

## Subtract whole numbers

Addition and subtraction are **inverse operations** — addition undoes
subtraction, and subtraction undoes addition. We know $7 - 3 = 4$ because
$4 + 3 = 7$. Knowing the addition facts helps with subtraction, and it also
lets us *check* a subtraction by adding:

$$
\begin{aligned}
7 - 3 = 4 \quad &\text{because} \quad 4 + 3 = 7 \\
13 - 8 = 5 \quad &\text{because} \quad 5 + 8 = 13 \\
43 - 26 = 17 \quad &\text{because} \quad 17 + 26 = 43
\end{aligned}
$$

To subtract numbers with more than one digit, write the numbers vertically in
columns, just as with addition — align the digits by place value, then
subtract each column starting with the ones and working left.

To find the difference of whole numbers:

1. Write the numbers so each place value lines up vertically.
2. Subtract the digits in each place value. Work from right to left, starting
   with the ones place. If the digit on top is less than the digit below,
   borrow as needed.
3. Continue subtracting each place value from right to left, borrowing if
   needed.
4. Check by adding.

When we modeled $43 - 26$, we exchanged $1$ ten for $10$ ones. Doing this
without the model is called **borrowing**: we borrow $1$ from the tens place
and add $10$ to the ones place.

**Example.** Subtract $43 - 26$. Line up the place values. We cannot subtract
$6$ from $3$, so borrow $1$ ten: the $4$ tens become $3$ tens and the $3$
ones become $13$ ones. Subtract the ones, $13 - 6 = 7$, then the tens,
$3 - 2 = 1$. The difference is $17$. Check: $17 + 26 = 43$. ✓

**Example.** Subtract $207 - 64$. Subtract the ones: $7 - 4 = 3$. For the
tens, we cannot subtract $6$ from $0$, so borrow $1$ hundred, making $10$
tens: $10 - 6 = 4$. In the hundreds, $1 - 0 = 1$. The difference is $143$.
Check: $143 + 64 = 207$. ✓

**Example.** Subtract $910 - 586$. We cannot subtract $6$ from $0$, so borrow
$1$ ten to get $10$ ones: $10 - 6 = 4$. Now the tens place holds $0$, and we
cannot subtract $8$ from $0$ — borrow $1$ hundred to get $10$ tens:
$10 - 8 = 2$. Finally the hundreds: $8 - 5 = 3$. The difference is $324$.
Check: $324 + 586 = 910$. ✓

Borrowing can happen in every column. In $2{,}162 - 479$, each of the ones,
tens, and hundreds requires a borrow: $12 - 9 = 3$, $15 - 7 = 8$,
$10 - 4 = 6$, and the thousands give $1 - 0 = 1$, so
$2{,}162 - 479 = 1{,}683$. Check: $1{,}683 + 479 = 2{,}162$. ✓

{{< fillin
  question="Subtract: $93 - 58$."
  answer="35"
  hint="Borrow 1 ten so the ones place becomes $13 - 8$. Check your result by adding it to 58."
>}}

{{< fillin
  question="Subtract: $4{,}585 - 697$."
  answer="3888"
  answerDisplay="3,888"
  hint="You will need to borrow in the ones, tens, and hundreds places. Check: your answer plus 697 should be 4,585."
>}}

## Translate word phrases to math notation

As with addition, word phrases can tell us to operate on two numbers using
subtraction. Look for key words that indicate subtraction:

| Word phrase     | Example                       | Expression |
| :-------------- | :---------------------------- | :--------: |
| minus           | $5$ minus $1$                 | $5 - 1$    |
| difference      | the difference of $9$ and $4$ | $9 - 4$    |
| decreased by    | $7$ decreased by $3$          | $7 - 3$    |
| less than       | $5$ less than $8$             | $8 - 5$    |
| subtracted from | $1$ subtracted from $6$       | $6 - 1$    |

Watch the order carefully. With *difference*, the numbers stay in the same
order as the phrase: the difference of $13$ and $8$ translates to $13 - 8$,
which is $5$. But *subtract from* and *less than* reverse the order: subtract
$24$ from $43$ means take $24$ away from $43$, so it translates to $43 - 24$,
which is $19$.

{{< fillin
  question="Translate and simplify: the difference of 14 and 9."
  answer="5"
  hint="Difference means subtract, keeping the numbers in the same order as the phrase."
>}}

{{< fillin
  question="Translate and simplify: 18 less than 67."
  answer="49"
  hint="Less than reverses the order: start from 67 and take 18 away."
>}}

## Subtract whole numbers in applications

To solve applications with subtraction, we use the same plan as with
addition. First, determine what we are asked to find. Then write a phrase
that gives the information to find it, translate the phrase into math
notation, simplify, and finally answer the question with a complete sentence
using the appropriate units.

**Example.** The temperature in Chicago one morning was $73$ degrees
Fahrenheit. A cold front arrived, and by noon the temperature was $27$
degrees Fahrenheit. What was the difference between the morning and noon
temperatures?

We are asked to find the difference between the two temperatures. The phrase
is *the difference of $73$ and $27$*, which translates to $73 - 27$.
Subtracting (borrow $1$ ten: $13 - 7 = 6$, then $6 - 2 = 4$) gives $46$. The
difference in temperatures was $46$ degrees Fahrenheit.

**Example.** A washing machine is on sale for \$399. Its regular price is
\$588. What is the difference between the regular price and the sale price?

The phrase is *the difference between $588$ and $399$*, which translates to
$588 - 399$. Subtracting gives $189$, so the difference between the regular
price and the sale price is \$189.

{{< fillin
  question="The high temperature in Boston one day was 77 degrees Fahrenheit and the low was 58 degrees Fahrenheit. What was the difference, in degrees, between the high and low temperatures?"
  answer="19"
  hint="Write the phrase: the difference of 77 and 58. Translate it to subtraction and simplify."
>}}

## Key terms

**difference** — the result of subtracting one number from another.
**inverse operations** — operations that undo each other; addition and
subtraction are inverse operations, which is why a subtraction can be checked
by adding. **borrowing** — exchanging $1$ from the place to the left for
$10$ in the current place so a column can be subtracted.

---

<small>This section is adapted from [Prealgebra 2e, Section 1.3: Subtract Whole Numbers](https://openstax.org/books/prealgebra-2e/pages/1-3-subtract-whole-numbers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: condensed prose, redrew the base-10 block model as an accessible inline graphic and described the remaining models in prose, and converted practice problems ("Try Its") into interactive exercises with instant feedback.</small>
