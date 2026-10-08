---
title: Add Integers
description: >-
  Modeling addition of integers with color counters, simplifying integer
  sums, evaluating variable expressions with integers, and translating word
  phrases and applications into expressions with integers — adapted from
  OpenStax Prealgebra 2e, Section 3.2.
source_section: "3.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Model addition of integers
- Simplify expressions with integers
- Evaluate variable expressions with integers
- Translate word phrases to algebraic expressions
- Add integers in applications
{{< /callout >}}

## Model addition of integers

Most people are comfortable with addition and subtraction facts for
positive numbers, but adding or subtracting when negative numbers are
involved can feel less automatic. One way to make it concrete is to model
addition and subtraction with two-color counters: a blue counter
represents a positive $1$, and a red counter represents a negative $1$.

If we have one positive counter and one negative counter, their values
add to zero — together they form a **neutral pair**.

<svg data-pictorial viewBox="0 0 260 90" role="img" aria-label="One blue positive counter and one red negative counter, circled together, showing that 1 + (-1) = 0." style="max-width: 260px; display: block; margin: 1.5rem auto">
  <circle cx="60" cy="27" r="16" fill="none" stroke="#2b7fb8" stroke-width="2.5" />
  <circle cx="60" cy="63" r="16" fill="none" stroke="#c0392b" stroke-width="2.5" />
  <ellipse cx="60" cy="45" rx="26" ry="40" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="130" y="50" font-size="16" fill="currentColor">1 + (−1) = 0</text>
</svg>

We'll model four addition facts using $5$, $-5$, $3$, and $-3$:
$5+3$, $-5+(-3)$, $-5+3$, and $5+(-3)$.

**Example.** Model $5 + 3$.

Start with $5$ positives. Add $3$ more positives. Count the total: $8$
positives. So $5 + 3 = 8$.

<svg data-pictorial viewBox="0 0 340 60" role="img" aria-label="Five blue positive counters, plus three more blue positive counters, totaling eight positive counters." style="max-width: 340px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="50" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="80" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="110" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="140" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
  <circle cx="190" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="220" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="250" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
</svg>

{{< fillin
  question="Model the expression, then simplify: $2 + 4$"
  answer="6"
  answerForm="decimal"
  hint="Both addends are positive, so every counter is the same color: count them all."
>}}

**Example.** Model $-5 + (-3)$.

Start with $5$ negatives. Add $3$ more negatives. Count the total: $8$
negatives. So $-5 + (-3) = -8$.

<svg data-pictorial viewBox="0 0 340 60" role="img" aria-label="Five red negative counters, plus three more red negative counters, totaling eight negative counters." style="max-width: 340px; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="50" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="80" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="110" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="140" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
  <circle cx="190" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="220" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="250" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
</svg>

{{< fillin
  question="Model the expression, then simplify: $-2 + (-4)$"
  answer="-6"
  answerForm="decimal"
  hint="Both addends are negative, so every counter is the same color: count them all and keep the negative sign."
>}}

The last two examples both add two numbers with the *same*
sign — both positive, or both negative — and in each case the counters
are all the same color, so we simply add. Now let's see what happens
when the signs are different.

**Example.** Model $-5 + 3$.

Start with $5$ negatives. Add $3$ positives. Each positive pairs with a
negative to form a neutral pair, which we remove. Two negatives are left
over, so $-5 + 3 = -2$. Notice there were more negatives than positives,
so the result is negative.

<svg data-pictorial viewBox="0 0 340 100" role="img" aria-label="Five red negative counters and three blue positive counters. Three red-and-blue neutral pairs are circled with dashed outlines, and two red negative counters stand apart unpaired." style="max-width: 340px; display: block; margin: 1.5rem auto">
  <g>
      <ellipse cx="20" cy="45" rx="17" ry="35" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" />
      <circle cx="20" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
      <circle cx="20" cy="60" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
    </g><g>
      <ellipse cx="60" cy="45" rx="17" ry="35" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" />
      <circle cx="60" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
      <circle cx="60" cy="60" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
    </g><g>
      <ellipse cx="100" cy="45" rx="17" ry="35" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" />
      <circle cx="100" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
      <circle cx="100" cy="60" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
    </g>
  <circle cx="160" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
  <circle cx="200" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
</svg>

{{< fillin
  question="Model the expression, then simplify: $2 + (-4)$"
  answer="-2"
  answerForm="decimal"
  hint="Match each positive counter with a negative one to form neutral pairs, remove the pairs, and count the counters left over."
>}}

**Example.** Model $5 + (-3)$.

Start with $5$ positives. Add $3$ negatives. Three neutral pairs form
and are removed, leaving $2$ positives. So $5 + (-3) = 2$.

<svg data-pictorial viewBox="0 0 340 100" role="img" aria-label="Five blue positive counters and three red negative counters. Three blue-and-red neutral pairs are circled with dashed outlines, and two blue positive counters stand apart unpaired." style="max-width: 340px; display: block; margin: 1.5rem auto">
  <g>
      <ellipse cx="20" cy="45" rx="17" ry="35" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" />
      <circle cx="20" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
      <circle cx="20" cy="60" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
    </g><g>
      <ellipse cx="60" cy="45" rx="17" ry="35" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" />
      <circle cx="60" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
      <circle cx="60" cy="60" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
    </g><g>
      <ellipse cx="100" cy="45" rx="17" ry="35" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" />
      <circle cx="100" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
      <circle cx="100" cy="60" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
    </g>
  <circle cx="160" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
  <circle cx="200" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
</svg>

{{< fillin
  question="Model the expression, then simplify: $(-2) + 4$"
  answer="2"
  answerForm="decimal"
  hint="Match each negative counter with a positive one to form neutral pairs, remove the pairs, and count the counters left over."
>}}

## Simplify expressions with integers

Once you can picture the counter model in your mind, you can add any
integers without counting out piles of counters. For example, to add
$37 + (-53)$: picture $37$ blue counters with $53$ red counters lined up
underneath. Since there are more negatives than positives, the sum is
negative. Because $53 - 37 = 16$, there are $16$ more negatives left
over, so $37 + (-53) = -16$.

For two negatives, such as $-74 + (-27)$: imagine $74$ red counters and
$27$ more red counters, for $101$ red counters altogether, so
$-74 + (-27) = -101$.

| | Same signs | Different signs |
| :--- | :--- | :--- |
| Example | $5+3$ (both positive); $-5+(-3)$ (both negative) | $-5+3$ (more negatives); $5+(-3)$ (more positives) |
| Result | Sum has that sign — add the absolute values | Sum takes the sign of whichever has the larger absolute value |
| Method | The counters are all the same color, so add them. | Some counters would make neutral pairs; subtract to see how many are left. |

{{< callout type="info" >}}
  **Addition of positive and negative integers.** When the signs are the
  same, add the absolute values and keep the common sign. When the signs
  are different, subtract the smaller absolute value from the larger, and
  keep the sign of the number with the larger absolute value.
{{< /callout >}}

**Example.** Simplify $19 + (-47)$ and $-32 + 40$.

For $19 + (-47)$: the signs are different, so subtract $19$ from $47$;
the answer is negative because there are more negatives than positives:
$19 + (-47) = -28$.

For $-32 + 40$: the signs are different, so subtract $32$ from $40$; the
answer is positive because there are more positives than negatives:
$-32 + 40 = 8$.

{{< fillin
  question="Simplify: $15 + (-32)$"
  answer="-17"
  answerForm="decimal"
  hint="The signs are different: subtract the smaller absolute value from the larger, and keep the sign of the number with the larger absolute value."
>}}

{{< fillin
  question="Simplify: $-19 + 76$"
  answer="57"
  answerForm="decimal"
  hint="Compare the absolute values: the sum takes the sign of the addend farther from zero, and its size is the difference of the absolute values."
>}}

**Example.** Simplify $-14 + (-36)$. The signs are the same, so add; the
result is negative because both are negative: $-14 + (-36) = -50$.

{{< fillin
  question="Simplify: $-31 + (-19)$"
  answer="-50"
  answerForm="decimal"
  hint="Both negative, so add the absolute values and keep the negative sign."
>}}

These techniques extend to more complicated expressions — remember to
follow the order of operations.

**Example.** Simplify $-5 + 3(-2+7)$. Simplify inside the parentheses
first: $-5 + 3(5)$. Multiply: $-5 + 15$. Add left to right: $10$.

{{< fillin
  question="Simplify: $-2 + 5(-4 + 7)$"
  answer="13"
  answerForm="decimal"
  hint="Follow the order of operations: simplify inside the parentheses first, then multiply, then add."
>}}

## Evaluate variable expressions with integers

To evaluate an expression, substitute the given number for the variable
in the expression, then simplify.

**Example.** Evaluate $x + 7$ when (a) $x = -2$, (b) $x = -11$.

(a) Substitute $-2$ for $x$: $-2 + 7 = 5$.
(b) Substitute $-11$ for $x$: $-11 + 7 = -4$.

{{< fillin
  question="Evaluate $x + 5$ when $x = -3$."
  answer="2"
  answerForm="decimal"
  hint="Substitute $-3$ for $x$, then add."
>}}

{{< fillin
  question="Evaluate $x + 5$ when $x = -17$."
  answer="-12"
  answerForm="decimal"
  hint="Substitute $-17$ for $x$, then add."
>}}

Watch the signs carefully when a variable itself carries a minus sign in
front of it.

**Example.** When $n = -5$, evaluate (a) $n+1$, (b) $-n+1$.

(a) Substitute $-5$ for $n$: $-5 + 1 = -4$.
(b) Substitute $-5$ for $n$: $-n + 1 = -(-5) + 1 = 5 + 1 = 6$.

{{< fillin
  question="When $n = -8$, evaluate: $n + 2$"
  answer="-6"
  answerForm="decimal"
  hint="Substitute $-8$ for $n$, then add."
>}}

{{< fillin
  question="When $n = -8$, evaluate: $-n + 2$"
  answer="10"
  answerForm="decimal"
  hint="$-n$ means the opposite of $n$: substitute $-8$ for $n$, take its opposite, then add."
>}}

Expressions with two variables work the same way — substitute both
values, then follow the order of operations.

**Example.** Evaluate $3a + b$ when $a = 12$ and $b = -30$. Substitute:
$3(12) + (-30)$. Multiply: $36 + (-30)$. Add: $6$.

{{< fillin
  question="Evaluate the expression: $a + 2b$ when $a = -19$ and $b = 14$."
  answer="9"
  answerForm="decimal"
  hint="Substitute both values, then multiply before you add."
>}}

**Example.** Evaluate $(x+y)^2$ when $x = -18$ and $y = 24$. Substitute:
$(-18+24)^2$. Add inside the parentheses: $(6)^2$. Simplify: $36$.

{{< fillin
  question="Evaluate: $(x + y)^2$ when $x = -15$ and $y = 29$."
  answer="196"
  answerForm="decimal"
  hint="Substitute both values, add inside the parentheses first, then square the result."
>}}

## Translate word phrases to algebraic expressions

All our earlier work translating word phrases to algebra also applies to
expressions with both positive and negative numbers. Remember that *the
sum* and *increased by* both indicate addition.

**Example.** Translate and simplify: the sum of $-9$ and $5$.
Translate: $-9 + 5$. Simplify: $-4$.

{{< fillin
  question="Translate and simplify: the sum of $-7$ and $4$"
  answer="-3"
  answerForm="decimal"
  hint="'The sum of' means add the two numbers that follow, in the order they are named. Then simplify."
>}}

{{< fillin
  question="Translate and simplify: the sum of $-8$ and $-6$"
  answer="-14"
  answerForm="decimal"
  hint="'The sum of' means add the two numbers that follow; put a negative second addend in parentheses. Then simplify."
>}}

**Example.** Translate and simplify: the sum of $8$ and $-12$, increased
by $3$. Translate: $[8+(-12)]+3$. Simplify: $-4+3$. Add: $-1$.

{{< fillin
  question="Translate and simplify: the sum of $9$ and $-16$, increased by $4$"
  answer="-3"
  answerForm="decimal"
  hint="'Increased by' means add. Group the sum in brackets, simplify it, then add the last number."
>}}

## Add integers in applications

Positive and negative numbers show up often in everyday situations —
temperatures, banking, and sports, for example. Solving these
applications is easier with a plan: figure out what you're looking for,
write a phrase for it, translate the phrase into math notation, simplify,
and answer in a full sentence.

**Example.** The temperature in Buffalo, NY, one morning started at
$7$ degrees below zero Fahrenheit. By noon, it had warmed up $12$
degrees. What was the temperature at noon?

The temperature warmed up $12$ degrees from $7$ degrees below zero:
$-7 + 12 = 5$. The temperature at noon was $5$ degrees Fahrenheit.

{{< fillin
  question="The temperature in Chicago at 5 A.M. was 10 degrees below zero Celsius. Six hours later, it had warmed up 14 degrees Celsius. What is the temperature at 11 A.M. (in degrees Celsius)?"
  answer="4"
  answerForm="decimal"
  hint="Write a temperature below zero as a negative integer and a warm-up as a positive one, then add."
>}}

**Example.** A football team took possession of the ball on their
$42$-yard line. In the next three plays, they lost $6$ yards, gained
$4$ yards, and then lost $8$ yards. On what yard line was the ball at
the end of those three plays?

Start at $42$, then lose $6$, gain $4$, lose $8$: $42-6+4-8 = 32$. At the
end of the three plays, the ball is on the $32$-yard line.

{{< fillin
  question="The Bears took possession of the football on their 20-yard line. In the next three plays, they lost 9 yards, gained 7 yards, then lost 4 yards. On what yard line was the ball at the end of those three plays?"
  answer="14"
  answerForm="decimal"
  hint="Start at the first yard line, then subtract each loss and add each gain, in order."
>}}

## Key terms

**neutral pair** — a positive counter and a negative counter together,
whose value is $0$. **same signs rule** — to add two integers with the
same sign, add their absolute values and keep the common sign.
**different signs rule** — to add two integers with different signs,
subtract the smaller absolute value from the larger, and keep the sign
of the number with the larger absolute value.

## Practice

### Model addition of integers

<svg data-pictorial viewBox="0 0 360 60" role="img" aria-label="A row of blue positive counters, separated into a group of seven and a group of four." style="max-width: 360px; width: 100%; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="50" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="80" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="110" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="140" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="170" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="200" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
  <circle cx="250" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="280" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="310" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="340" cy="30" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
</svg>

{{< fillin
  question="The counters above model $7 + 4$. Simplify the expression."
  answer="11"
  answerForm="decimal"
  hint="All the counters are positive, so no neutral pairs form — just count the whole row."
>}}

<svg data-pictorial viewBox="0 0 300 60" role="img" aria-label="A row of red negative counters, separated into a group of six and a group of three." style="max-width: 300px; width: 100%; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="50" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="80" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="110" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="140" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="170" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
  <circle cx="220" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="250" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="280" cy="30" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
</svg>

{{< fillin
  question="The counters above model $-6 + (-3)$. Simplify the expression."
  answer="-9"
  answerForm="decimal"
  hint="Every counter is negative, so count them all and keep the negative sign."
>}}

<svg data-pictorial viewBox="0 0 220 90" role="img" aria-label="Two rows of counters: a top row of seven red negative counters and a bottom row of five blue positive counters." style="max-width: 220px; width: 100%; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="25" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="50" cy="25" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="80" cy="25" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="110" cy="25" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="140" cy="25" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="170" cy="25" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="200" cy="25" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
  <circle cx="20" cy="65" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="50" cy="65" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="80" cy="65" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="110" cy="65" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="140" cy="65" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
</svg>

{{< fillin
  question="The counters above model $-7 + 5$. Simplify the expression."
  answer="-2"
  answerForm="decimal"
  hint="Each column that holds one counter of each color is a neutral pair worth $0$. Remove those pairs and count the color that is left over."
>}}

<svg data-pictorial viewBox="0 0 250 90" role="img" aria-label="Two rows of counters: a top row of eight blue positive counters and a bottom row of seven red negative counters." style="max-width: 250px; width: 100%; display: block; margin: 1.5rem auto">
  <circle cx="20" cy="25" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="50" cy="25" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="80" cy="25" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="110" cy="25" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="140" cy="25" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="170" cy="25" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="200" cy="25" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" /><circle cx="230" cy="25" r="13" fill="none" stroke="#2b7fb8" stroke-width="2" />
  <circle cx="20" cy="65" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="50" cy="65" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="80" cy="65" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="110" cy="65" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="140" cy="65" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="170" cy="65" r="13" fill="none" stroke="#c0392b" stroke-width="2" /><circle cx="200" cy="65" r="13" fill="none" stroke="#c0392b" stroke-width="2" />
</svg>

{{< fillin
  question="The counters above model $8 + (-7)$. Simplify the expression."
  answer="1"
  answerForm="decimal"
  hint="Each column holding one blue and one red counter is a neutral pair worth $0$. Remove the pairs; the color left over gives the sign of the sum."
>}}

### Simplify expressions with integers

{{< fillin
  question="Simplify: $-21 + (-59)$"
  answer="-80"
  answerForm="decimal"
  hint="The signs are the same, so add the absolute values and keep the common sign."
>}}

{{< fillin
  question="Simplify: $-200 + 65$"
  answer="-135"
  answerForm="decimal"
  hint="The signs are different: subtract the smaller absolute value from the larger, and keep the sign of the number with the larger absolute value."
>}}

{{< fillin
  question="Simplify: $135 + (-110) + 83$"
  answer="108"
  answerForm="decimal"
  hint="Work left to right: add the first two integers, then add $83$ to that result."
>}}

{{< fillin
  question="Simplify: $19 + 2(-3 + 8)$"
  answer="29"
  answerForm="decimal"
  hint="Order of operations — simplify inside the parentheses first, then multiply, then add."
>}}

### Evaluate variable expressions with integers

{{< fillin
  question="When $a = -7$, evaluate: $a + 3$"
  answer="-4"
  answerForm="decimal"
  hint="Substitute $-7$ for $a$. The signs are different, so subtract and keep the sign of the larger absolute value."
>}}

{{< fillin
  question="When $a = -7$, evaluate: $-a + 3$"
  answer="10"
  answerForm="decimal"
  hint="$-a$ means the opposite of $a$: substitute $-7$ for $a$, take its opposite, then add."
>}}

{{< fillin
  question="Evaluate $m + n$ when $m = -15$ and $n = 7$."
  answer="-8"
  answerForm="decimal"
  hint="Substitute both values, then add integers with different signs."
>}}

{{< fillin
  question="Evaluate $(a + b)^2$ when $a = -7$ and $b = 15$."
  answer="64"
  answerForm="decimal"
  hint="Add inside the parentheses first, then square that single number."
>}}

{{< fillin
  question="Evaluate $(x + y)^2$ when $x = -3$ and $y = 14$."
  answer="121"
  answerForm="decimal"
  hint="Simplify the sum in the parentheses before applying the exponent — the exponent belongs to the whole quantity."
>}}

### Translate word phrases to algebraic expressions

{{< fillin
  question="Translate the phrase into an expression and simplify: the sum of $-14$ and $5$"
  answer="-9"
  answerForm="decimal"
  answerDisplay="$-14 + 5 = -9$"
  hint="'The sum of' means add, in the order the two numbers are named."
>}}

{{< fillin
  question="Translate the phrase into an expression and simplify: $-10$ added to $-15$"
  answer="-25"
  answerForm="decimal"
  answerDisplay="$-15 + (-10) = -25$"
  hint="'Added to' reverses the reading order: the number after 'added to' comes first. Both signs are the same, so add the absolute values."
>}}

{{< fillin
  question="Translate the phrase into an expression and simplify: $6$ more than the sum of $-1$ and $-12$"
  answer="-7"
  answerForm="decimal"
  answerDisplay="$[-1 + (-12)] + 6 = -7$"
  hint="Group the inner sum in brackets first, then add $6$ to it."
>}}

{{< fillin
  question="Translate the phrase into an expression and simplify: the sum of $10$ and $-19$, increased by $4$"
  answer="-5"
  answerForm="decimal"
  answerDisplay="$[10 + (-19)] + 4 = -5$"
  hint="'Increased by' means add. Simplify the bracketed sum, then add $4$."
>}}

### Add integers in applications

{{< fillin
  question="The temperature in St. Paul, Minnesota, was $-19$ degrees Fahrenheit at sunrise. By noon the temperature had risen $26$ degrees Fahrenheit. What was the temperature at noon, in degrees Fahrenheit?"
  answer="7"
  answerForm="decimal"
  hint="Write the sunrise temperature as an integer and the rise as a positive change, then add."
>}}

{{< fillin
  question="Lupe owes \$73 on her credit card. Then she charges \$45 more. Represent the new balance as an integer number of dollars."
  answer="-118"
  answerForm="decimal"
  answerDisplay="−\$118 (a balance of \$118 owed)"
  hint="Money owed is negative, and a new charge makes the debt larger. Both addends carry the same sign."
>}}

{{< fillin
  question="A football team lost $3$ yards on the first play. Then they lost $2$ yards, gained $1$ yard, and then lost $4$ yards. What was the change in overall yardage over the four plays, in yards?"
  answer="-8"
  answerForm="decimal"
  answerDisplay="$-8$ yards"
  hint="Write each loss as a negative integer and each gain as a positive one, then add all four."
>}}

{{< fillin
  question="The Rams took possession of the football on their own $35$-yard line. In the next three plays, they lost $12$ yards, gained $8$ yards, then lost $6$ yards. On what yard line was the ball at the end of those three plays?"
  answer="25"
  answerForm="decimal"
  answerDisplay="the $25$-yard line"
  hint="Start at $35$ and add the three signed changes in order."
>}}

{{< fillin
  question="A scuba diver swimming $8$ feet below the surface dove $17$ feet deeper; the pressure got to them and they rose five feet. How many feet below the surface are they now? Enter a positive number of feet."
  answer="20"
  answerForm="decimal"
  answerDisplay="$20$ feet below the surface"
  hint="Write depths below the surface as negative integers, a dive deeper as a negative change and a rise as a positive one, and add. The depth below the surface is the absolute value of the sum."
>}}

---

<small>This section is adapted from [Prealgebra 2e, Section 3.2: Add Integers](https://openstax.org/books/prealgebra-2e/pages/3-2-add-integers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the two-color-counter models as accessible inline graphics and the same-signs/different-signs summary as a table; stated the same-signs and different-signs rules in a callout and in the key terms; condensed prose; omitted the Be Prepared quiz, the four-part "Modeling Addition of Positive and Negative Integers" example and its Try Its, the Manipulative Mathematics callout, and media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, a two-part Try It as one question per part; named the unit or sign convention to enter in the application questions; and adapted selected end-of-section exercises into the interactive Practice block, with each multipart exercise expanded into one question per part and the counter-model answers redrawn as accessible inline graphics.</small>
