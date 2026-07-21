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
  **By the end of this section, you will be able to:** model addition of
  integers, simplify expressions with integers, evaluate variable
  expressions with integers, and translate word phrases and applications
  to expressions with integers.
{{< /callout >}}

## Model addition of integers

Most people are comfortable with addition and subtraction facts for
positive numbers, but adding or subtracting when negative numbers are
involved can feel less automatic. One way to make it concrete is to model
addition and subtraction with two-color counters: a blue counter
represents a positive $1$, and a red counter represents a negative $1$.

If we have one positive counter and one negative counter, their values
add to zero — together they form a **neutral pair**.

<svg viewBox="0 0 260 90" role="img" aria-label="One blue positive counter and one red negative counter, circled together, showing that 1 + (-1) = 0." style={{ maxWidth: 260, display: 'block', margin: '1.5rem auto' }}>
  <circle cx="60" cy="27" r="16" fill="none" stroke="#2b7fb8" strokeWidth="2.5" />
  <circle cx="60" cy="63" r="16" fill="none" stroke="#c0392b" strokeWidth="2.5" />
  <ellipse cx="60" cy="45" rx="26" ry="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="130" y="50" fontSize="16" fill="currentColor">1 + (−1) = 0</text>
</svg>

We'll model four addition facts using $5$, $-5$, $3$, and $-3$:
$5+3$, $-5+(-3)$, $-5+3$, and $5+(-3)$.

**Example.** Model $5 + 3$.

Start with $5$ positives. Add $3$ more positives. Count the total: $8$
positives. So $5 + 3 = 8$.

<svg viewBox="0 0 340 60" role="img" aria-label="Five blue positive counters, plus three more blue positive counters, totaling eight positive counters." style={{ maxWidth: 340, display: 'block', margin: '1.5rem auto' }}>
  {[0,1,2,3,4].map(i => <circle key={i} cx={20+i*30} cy="30" r="13" fill="none" stroke="#2b7fb8" strokeWidth="2" />)}
  {[0,1,2].map(i => <circle key={i} cx={190+i*30} cy="30" r="13" fill="none" stroke="#2b7fb8" strokeWidth="2" />)}
</svg>

{{< fillin
  question="Model the expression, then simplify: $2 + 4$"
  answer="6"
  hint="Both addends are positive, so combine $2$ positives with $4$ more positives."
>}}

**Example.** Model $-5 + (-3)$.

Start with $5$ negatives. Add $3$ more negatives. Count the total: $8$
negatives. So $-5 + (-3) = -8$.

<svg viewBox="0 0 340 60" role="img" aria-label="Five red negative counters, plus three more red negative counters, totaling eight negative counters." style={{ maxWidth: 340, display: 'block', margin: '1.5rem auto' }}>
  {[0,1,2,3,4].map(i => <circle key={i} cx={20+i*30} cy="30" r="13" fill="none" stroke="#c0392b" strokeWidth="2" />)}
  {[0,1,2].map(i => <circle key={i} cx={190+i*30} cy="30" r="13" fill="none" stroke="#c0392b" strokeWidth="2" />)}
</svg>

{{< fillin
  question="Model the expression, then simplify: $-2 + (-4)$"
  answer="-6"
  hint="Both addends are negative, so combine $2$ negatives with $4$ more negatives."
>}}

Example 3.14 and Example 3.15 both add two numbers with the *same*
sign — both positive, or both negative — and in each case the counters
are all the same color, so we simply add. Now let's see what happens
when the signs are different.

**Example.** Model $-5 + 3$.

Start with $5$ negatives. Add $3$ positives. Each positive pairs with a
negative to form a neutral pair, which we remove. Two negatives are left
over, so $-5 + 3 = -2$. Notice there were more negatives than positives,
so the result is negative.

<svg viewBox="0 0 340 100" role="img" aria-label="Five red negative counters and three blue positive counters. Three neutral pairs are removed, leaving two negative counters." style={{ maxWidth: 340, display: 'block', margin: '1.5rem auto' }}>
  {[0,1,2].map(i => (
    <g key={i}>
      <ellipse cx={20+i*40} cy="45" rx="17" ry="35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,2" />
      <circle cx={20+i*40} cy="30" r="13" fill="none" stroke="#c0392b" strokeWidth="2" />
      <circle cx={20+i*40} cy="60" r="13" fill="none" stroke="#2b7fb8" strokeWidth="2" />
    </g>
  ))}
  <circle cx="160" cy="30" r="13" fill="none" stroke="#c0392b" strokeWidth="2" />
  <circle cx="200" cy="30" r="13" fill="none" stroke="#c0392b" strokeWidth="2" />
</svg>

{{< fillin
  question="Model the expression, then simplify: $2 + (-4)$"
  answer="-2"
  hint="Pair up the $2$ positives with $2$ of the $4$ negatives as neutral pairs, then count what's left."
>}}

**Example.** Model $5 + (-3)$.

Start with $5$ positives. Add $3$ negatives. Three neutral pairs form
and are removed, leaving $2$ positives. So $5 + (-3) = 2$.

<svg viewBox="0 0 340 100" role="img" aria-label="Five blue positive counters and three red negative counters. Three neutral pairs are removed, leaving two positive counters." style={{ maxWidth: 340, display: 'block', margin: '1.5rem auto' }}>
  {[0,1,2].map(i => (
    <g key={i}>
      <ellipse cx={20+i*40} cy="45" rx="17" ry="35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,2" />
      <circle cx={20+i*40} cy="30" r="13" fill="none" stroke="#2b7fb8" strokeWidth="2" />
      <circle cx={20+i*40} cy="60" r="13" fill="none" stroke="#c0392b" strokeWidth="2" />
    </g>
  ))}
  <circle cx="160" cy="30" r="13" fill="none" stroke="#2b7fb8" strokeWidth="2" />
  <circle cx="200" cy="30" r="13" fill="none" stroke="#2b7fb8" strokeWidth="2" />
</svg>

{{< fillin
  question="Model the expression, then simplify: $(-2) + 4$"
  answer="2"
  hint="Pair up $2$ of the positives with the $2$ negatives as neutral pairs, then count what's left."
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
  hint="Signs are different — subtract $15$ from $32$, and keep the sign of the number with the larger absolute value ($-32$)."
>}}

{{< fillin
  question="Simplify: $-19 + 76$"
  answer="57"
  hint="Signs are different — subtract $19$ from $76$, and keep the sign of the number with the larger absolute value ($76$)."
>}}

**Example.** Simplify $-14 + (-36)$. The signs are the same, so add; the
result is negative because both are negative: $-14 + (-36) = -50$.

{{< fillin
  question="Simplify: $-31 + (-19)$"
  answer="-50"
  hint="Both negative, so add the absolute values and keep the negative sign."
>}}

These techniques extend to more complicated expressions — remember to
follow the order of operations.

**Example.** Simplify $-5 + 3(-2+7)$. Simplify inside the parentheses
first: $-5 + 3(5)$. Multiply: $-5 + 15$. Add left to right: $10$.

{{< fillin
  question="Simplify: $-2 + 5(-4 + 7)$"
  answer="13"
  hint="Simplify inside the parentheses first ($-4 + 7 = 3$), then multiply, then add."
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
  hint="Substitute $-3$ for $x$, then add."
>}}

{{< fillin
  question="Evaluate $x + 5$ when $x = -17$."
  answer="-12"
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
  hint="Substitute $-8$ for $n$, then add."
>}}

{{< fillin
  question="When $n = -8$, evaluate: $-n + 2$"
  answer="10"
  hint="Substitute $-8$ for $n$: $-n$ becomes $-(-8)$, which is $8$. Then add $2$."
>}}

Expressions with two variables work the same way — substitute both
values, then follow the order of operations.

**Example.** Evaluate $3a + b$ when $a = 12$ and $b = -30$. Substitute:
$3(12) + (-30)$. Multiply: $36 + (-30)$. Add: $6$.

{{< fillin
  question="Evaluate the expression: $a + 2b$ when $a = -19$ and $b = 14$."
  answer="9"
  hint="Substitute $-19$ for $a$ and $14$ for $b$, then simplify: $-19 + 2(14)$."
>}}

**Example.** Evaluate $(x+y)^2$ when $x = -18$ and $y = 24$. Substitute:
$(-18+24)^2$. Add inside the parentheses: $(6)^2$. Simplify: $36$.

{{< fillin
  question="Evaluate: $(x + y)^2$ when $x = -15$ and $y = 29$."
  answer="196"
  hint="Add inside the parentheses first ($-15 + 29 = 14$), then square the result."
>}}

## Translate word phrases and applications to expressions with integers

All our earlier work translating word phrases to algebra also applies to
expressions with both positive and negative numbers. Remember that *the
sum* and *increased by* both indicate addition.

**Example.** Translate and simplify: the sum of $-9$ and $5$.
Translate: $-9 + 5$. Simplify: $-4$.

{{< fillin
  question="Translate and simplify: the sum of $-7$ and $4$"
  answer="-3"
  hint="'Sum' means add: $-7 + 4$."
>}}

{{< fillin
  question="Translate and simplify: the sum of $-8$ and $-6$"
  answer="-14"
  hint="'Sum' means add: $-8 + (-6)$."
>}}

**Example.** Translate and simplify: the sum of $8$ and $-12$, increased
by $3$. Translate: $[8+(-12)]+3$. Simplify: $-4+3$. Add: $-1$.

{{< fillin
  question="Translate and simplify: the sum of $9$ and $-16$, increased by $4$"
  answer="-3"
  hint="Translate as $[9 + (-16)] + 4$, then simplify left to right."
>}}

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
  hint="Start at -10 and add the 14-degree warm-up: $-10 + 14$."
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
  hint="Start at 20, then apply each play in order: $20 - 9 + 7 - 4$."
>}}

## Key terms

**neutral pair** — a positive counter and a negative counter together,
whose value is $0$. **same signs rule** — to add two integers with the
same sign, add their absolute values and keep the common sign.
**different signs rule** — to add two integers with different signs,
subtract the smaller absolute value from the larger, and keep the sign
of the number with the larger absolute value.

---

<small>This section is adapted from [Prealgebra 2e, Section 3.2: Add Integers](https://openstax.org/books/prealgebra-2e/pages/3-2-add-integers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the two-color-counter models as accessible inline graphics and the same-signs/different-signs summary as a table; condensed prose; omitted the Be Prepared quiz, Manipulative Mathematics callout, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
