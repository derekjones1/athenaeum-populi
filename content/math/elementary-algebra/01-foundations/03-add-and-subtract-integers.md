---
title: Add and Subtract Integers
description: >-
  Using negatives and opposites, simplifying expressions with absolute
  value, and adding and subtracting integers with a positive/negative
  counters model — adapted from OpenStax Elementary Algebra 2e, Section 1.3.
source_section: "1.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use negatives and
  opposites of integers, simplify expressions with absolute value, add
  integers, and subtract integers.
{{< /callout >}}

## Use Negatives and Opposites of Integers

Our work so far has only included the counting numbers and the whole
numbers. But if you have ever experienced a temperature below zero or
accidentally overdrawn your checking account, you are already familiar with
negative numbers. **Negative numbers** are numbers less than $0$. The
negative numbers are to the left of zero on the number line.

<svg viewBox="0 0 460 90" role="img" aria-label="A number line from -4 to 4, with an arrow above 0 marking zero. The numbers to the left of zero are labeled negative numbers; the numbers to the right are labeled positive numbers." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="30" x2="440" y2="30" stroke="currentColor" strokeWidth="1.5" />
  <path d="M20 30 L28 25 L28 35 Z" fill="currentColor" />
  <path d="M440 30 L432 25 L432 35 Z" fill="currentColor" />
  {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n) => (
    <g key={n}>
      <line x1={230 + n * 46} y1="24" x2={230 + n * 46} y2="36" stroke="currentColor" strokeWidth="1.5" />
      <text x={230 + n * 46} y="54" textAnchor="middle" fontSize="15" fill="currentColor">{n}</text>
    </g>
  ))}
  <path d="M230 14 L230 22" stroke="currentColor" strokeWidth="1.5" markerEnd="none" />
  <path d="M230 22 L226 12 M230 22 L234 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
  <text x="230" y="8" textAnchor="middle" fontSize="12" fill="currentColor">zero</text>
  <text x="112" y="75" textAnchor="middle" fontSize="13" fill="currentColor">Negative numbers</text>
  <text x="348" y="75" textAnchor="middle" fontSize="13" fill="currentColor">Positive numbers</text>
</svg>

The arrows on the ends of the number line indicate that the numbers keep
going forever. There is no biggest positive number, and there is no
smallest negative number.

Is zero a positive or a negative number? Numbers larger than zero are
positive, and numbers smaller than zero are negative. Zero is neither
positive nor negative.

Consider how numbers are ordered on the number line. Going from left to
right, the numbers increase in value. Going from right to left, the numbers
decrease in value.

<svg viewBox="0 0 460 100" role="img" aria-label="A number line from -4 to 4. A red arrow labeled smaller points left below the line; a blue arrow labeled larger points right above the line, starting at -1." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="40" x2="440" y2="40" stroke="currentColor" strokeWidth="1.5" />
  <path d="M20 40 L28 35 L28 45 Z" fill="currentColor" />
  <path d="M440 40 L432 35 L432 45 Z" fill="currentColor" />
  {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n) => (
    <g key={n}>
      <line x1={230 + n * 46} y1="34" x2={230 + n * 46} y2="46" stroke="currentColor" strokeWidth="1.5" />
      <text x={230 + n * 46} y="64" textAnchor="middle" fontSize="15" fill="currentColor">{n}</text>
    </g>
  ))}
  <line x1="184" y1="20" x2="430" y2="20" stroke="#2b8fd6" strokeWidth="2" />
  <path d="M430 20 L420 15 L420 25 Z" fill="#2b8fd6" />
  <text x="307" y="12" textAnchor="middle" fontSize="13" fill="#2b8fd6">larger</text>
  <line x1="184" y1="80" x2="30" y2="80" stroke="#d6522b" strokeWidth="2" />
  <path d="M30 80 L40 75 L40 85 Z" fill="#d6522b" />
  <text x="107" y="94" textAnchor="middle" fontSize="13" fill="#d6522b">smaller</text>
</svg>

Remember that we use the notation $a < b$ (read "$a$ is less than $b$") when
$a$ is to the left of $b$ on the number line, and $a > b$ (read "$a$ is
greater than $b$") when $a$ is to the right of $b$ on the number line.

Now we need to extend the number line to include negative numbers, too. The
numbers marked by points on this extended line are called the **integers**.
The integers are the numbers $\dots -3, -2, -1, 0, 1, 2, 3 \dots$

{{< callout type="info" >}}
  **Integers.** The whole numbers and their opposites are called the
  integers. The integers are the numbers $\dots -3, -2, -1, 0, 1, 2, 3\dots$
{{< /callout >}}

**Example.** Order each of the following pairs of numbers, using $<$ or $>$:
(a) $14 \_\_\_ 6$ (b) $-1 \_\_\_ 9$ (c) $-1 \_\_\_ -4$ (d) $2 \_\_\_ -20$.

It may be helpful to refer to a number line.

(a) $14$ is to the right of $6$ on the number line, so $14 > 6$.

(b) $-1$ is to the left of $9$ on the number line, so $-1 < 9$.

(c) $-1$ is to the right of $-4$ on the number line, so $-1 > -4$.

(d) $2$ is to the right of $-20$ on the number line, so $2 > -20$.

{{< multiplechoice
  question="Order the pair using < or >:  $15 \_\_\_ 7$"
  hint="On the number line $15$ is to the right of $7$, and numbers increase to the right."
  answer="$>$"
>}}
$<$
$>$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Order the pair using < or >:  $-2 \_\_\_ 5$"
  hint="Every negative number is to the left of every positive number on the number line."
  answer="$<$"
>}}
$<$
$>$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Order the pair using < or >:  $-3 \_\_\_ -7$"
  hint="$-3$ sits to the right of $-7$, since it is closer to zero going in the positive direction."
  answer="$>$"
>}}
$<$
$>$
{{< /multiplechoice >}}

{{< fillin
  question="Order the following pair of numbers, using < or >, and enter the full inequality: $9 \_\_\_ -21$."
  answer="9>-21"
  hint="Every positive number is to the right of every negative number on the number line."
>}}

You may have noticed that, on the number line, the negative numbers are a
mirror image of the positive numbers, with zero in the middle. Because the
numbers $2$ and $-2$ are the same distance from zero, they are called
**opposites**. The opposite of $2$ is $-2$, and the opposite of $-2$ is $2$.

{{< callout type="info" >}}
  **Opposite.** The opposite of a number is the number that is the same
  distance from zero on the number line, but on the opposite side of zero.
{{< /callout >}}

<svg viewBox="0 0 460 80" role="img" aria-label="A number line from -4 to 4. Two braces of equal length 3 span from 0 to -3 and from 0 to 3, illustrating that the opposite of 3 is -3." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="45" x2="440" y2="45" stroke="currentColor" strokeWidth="1.5" />
  <path d="M20 45 L28 40 L28 50 Z" fill="currentColor" />
  <path d="M440 45 L432 40 L432 50 Z" fill="currentColor" />
  {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((n) => (
    <g key={n}>
      <line x1={230 + n * 46} y1="39" x2={230 + n * 46} y2="51" stroke="currentColor" strokeWidth="1.5" />
      <text x={230 + n * 46} y="69" textAnchor="middle" fontSize="15" fill="currentColor">{n}</text>
    </g>
  ))}
  <path d="M92 25 Q 161 12 230 25" stroke="currentColor" strokeWidth="1.5" fill="none" />
  <text x="161" y="10" textAnchor="middle" fontSize="13" fill="currentColor">3</text>
  <path d="M230 25 Q 299 12 368 25" stroke="currentColor" strokeWidth="1.5" fill="none" />
  <text x="299" y="10" textAnchor="middle" fontSize="13" fill="currentColor">3</text>
</svg>

Sometimes in algebra the same symbol has different meanings. Just like some
words in English, the specific meaning becomes clear by looking at how it is
used. You have seen the symbol "$-$" used in three different ways:

| Expression | Meaning |
| :---: | :--- |
| $10 - 4$ | Between two numbers, it indicates the operation of *subtraction*. We read $10 - 4$ as "10 minus 4." |
| $-8$ | In front of a number, it indicates a *negative* number. We read $-8$ as "negative eight." |
| $-x$ | In front of a variable, it indicates the *opposite*. We read $-x$ as "the opposite of $x$." |
| $-(-2)$ | Here there are two "$-$" signs. The one in the parentheses tells us the number is negative two. The one outside the parentheses tells us to take the *opposite* of $-2$. We read $-(-2)$ as "the opposite of negative two." |

**Opposite notation.** $-a$ means the opposite of the number $a$. The
notation $-a$ is read as "the opposite of $a$."

**Example.** Find: (a) the opposite of $7$ (b) the opposite of $-10$
(c) $-(-6)$.

(a) $-7$ is the same distance from $0$ as $7$, but on the opposite side of
$0$. The opposite of $7$ is $-7$.

(b) $10$ is the same distance from $0$ as $-10$, but on the opposite side of
$0$. The opposite of $-10$ is $10$.

(c) $-(-6)$ is the opposite of $-6$, which is $6$.

{{< fillin
  question="Find the opposite of $-3$."
  answer="3"
  hint="The opposite of a number is the same distance from zero, but on the other side."
>}}

{{< fillin
  question="Simplify: $-(-1)$."
  answer="1"
  hint="The outer negative sign takes the opposite of what's inside the parentheses."
>}}

When evaluating the opposite of a variable, we must be careful. Without
knowing whether the variable represents a positive or negative number, we
don't know whether $-x$ is positive or negative.

**Example.** Evaluate (a) $-x$, when $x = 8$ (b) $-x$, when $x = -8$.

(a) To evaluate when $x = 8$ means to substitute $8$ for $x$, then write
the opposite: $-x = -(8) = -8$.

(b) To evaluate when $x = -8$ means to substitute $-8$ for $x$, then write
the opposite: $-x = -(-8) = 8$.

{{< fillin
  question="Evaluate $-n$, when $n = 4$."
  answer="-4"
  hint="Substitute $4$ for $n$, then take the opposite of the result."
>}}

{{< fillin
  question="Evaluate $-n$, when $n = -4$."
  answer="4"
  hint="Substitute $-4$ for $n$. The opposite of a negative number is positive."
>}}

## Simplify Expressions with Absolute Value

We saw that numbers such as $2$ and $-2$ are opposites because they are the
same distance from $0$ on the number line. They are both two units from $0$.
The distance between $0$ and any number on the number line is called the
**absolute value** of that number.

{{< callout type="info" >}}
  **Absolute value.** The absolute value of a number is its distance from
  $0$ on the number line. The absolute value of a number $n$ is written as
  $|n|$.
{{< /callout >}}

For example, $-5$ is $5$ units away from $0$, so $|-5| = 5$. And $5$ is $5$
units away from $0$, so $|5| = 5$.

<svg viewBox="0 0 460 100" role="img" aria-label="A number line from -5 to 5. A brace spans from -5 to 0 labeled 5 units, and another brace spans from 0 to 5 labeled 5 units, illustrating that both -5 and 5 are 5 units from zero." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="55" x2="440" y2="55" stroke="currentColor" strokeWidth="1.5" />
  <path d="M20 55 L28 50 L28 60 Z" fill="currentColor" />
  <path d="M440 55 L432 50 L432 60 Z" fill="currentColor" />
  {[-5, 0, 5].map((n) => (
    <g key={n}>
      <line x1={230 + n * 37} y1="49" x2={230 + n * 37} y2="61" stroke="currentColor" strokeWidth="1.5" />
      <text x={230 + n * 37} y="79" textAnchor="middle" fontSize="15" fill="currentColor">{n}</text>
    </g>
  ))}
  <path d="M60 35 Q 145 22 230 35" stroke="#d6522b" strokeWidth="1.5" fill="none" />
  <text x="145" y="20" textAnchor="middle" fontSize="12" fill="#d6522b">5 units</text>
  <path d="M230 35 Q 315 22 400 35" stroke="#2b8fd6" strokeWidth="1.5" fill="none" />
  <text x="315" y="20" textAnchor="middle" fontSize="12" fill="#2b8fd6">5 units</text>
</svg>

The absolute value of a number is never negative (because distance cannot
be negative). The only number with absolute value equal to zero is the
number zero itself, because the distance from $0$ to $0$ on the number line
is zero units.

{{< callout type="info" >}}
  **Property of absolute value.** $|n| \geq 0$ for all numbers. Absolute
  values are always greater than or equal to zero!
{{< /callout >}}

**Example.** Simplify: (a) $|3|$ (b) $|-44|$ (c) $|0|$.

The absolute value of a number is the distance between the number and zero.
Distance is never negative, so absolute value is never negative.

(a) $|3| = 3$

(b) $|-44| = 44$

(c) $|0| = 0$

{{< fillin
  question="Simplify: $|-28|$."
  answer="28"
  hint="Absolute value is the distance from zero, and distance is always non-negative."
>}}

{{< fillin
  question="Simplify: $|47|$."
  answer="47"
  hint="The absolute value of a positive number is the number itself."
>}}

In the next example, we'll order expressions with absolute values. Remember,
positive numbers are always greater than negative numbers.

**Example.** Fill in $<, >,$ or $=$ for each of the following pairs of
numbers: (a) $|-5| \_\_\_ -|-5|$ (b) $8 \_\_\_ -|-8|$ (c) $-9 \_\_\_ -|-9|$
(d) $-(-16) \_\_\_ -|-16|$.

(a) Simplify each side: $|-5| = 5$ and $-|-5| = -5$. Since $5 > -5$,
$|-5| > -|-5|$.

(b) Simplify: $8$ stays $8$, and $-|-8| = -8$. Since $8 > -8$,
$8 > -|-8|$.

(c) Simplify: $-9$ stays $-9$, and $-|-9| = -9$. Since $-9 = -9$,
$-9 = -|-9|$.

(d) Simplify: $-(-16) = 16$, and $-|-16| = -16$. Since $16 > -16$,
$-(-16) > -|-16|$.

{{< fillin
  question="Fill in <, >, or = for the following pair of numbers, entering the full comparison: $-8 \_\_\_ |-8|$."
  answer="-8<|-8|"
  hint="$|-8|$ simplifies to $8$ first. Compare $-8$ with $8$."
>}}

{{< fillin
  question="Fill in <, >, or = for the following pair of numbers, entering the full comparison: $-1 \_\_\_ |-1|$."
  answer="-1<|-1|"
  hint="Simplify the absolute value on the right before comparing."
>}}

We now add absolute value bars to our list of grouping symbols. When we use
the order of operations, first we simplify inside the absolute value bars as
much as possible, then we take the absolute value of the resulting number.

| Grouping symbol | Marks |
| :--- | :--- |
| Parentheses | $( \ )$ |
| Brackets | $[\ ]$ |
| Braces | $\{\ \}$ |
| Absolute value | $\vert\ \vert$ |

In the next example, we simplify the expressions inside absolute value bars
first, just as we do with parentheses.

**Example.** Simplify: $24 - |19 - 3(6-2)|$.

$$
\begin{array}{ll}
& 24 - |19 - 3(6-2)| \\
\text{Work inside parentheses first: subtract 2 from 6.} & 24 - |19 - 3(4)| \\
\text{Multiply } 3(4). & 24 - |19 - 12| \\
\text{Subtract inside the absolute value bars.} & 24 - |7| \\
\text{Take the absolute value.} & 24 - 7 \\
\text{Subtract.} & 17
\end{array}
$$

{{< fillin
  question="Simplify: $19 - |11 - 4(3-1)|$."
  answer="16"
  hint="Work inside the parentheses first, then the absolute value bars, then subtract left to right."
>}}

Next we evaluate absolute value expressions with a variable.

**Example.** Evaluate: (a) $|x|$ when $x = -35$ (b) $-|y|$ when $y = -20$
(c) $-|u|$ when $u = 12$ (d) $-|p|$ when $p = -14$.

(a) Substitute $-35$ for $x$, then take the absolute value:
$|x| = |-35| = 35$.

(b) Substitute $-20$ for $y$. Simplify inside the bars first, then negate:
$-|y| = -|-20| = -(20) = -20$.

(c) Substitute $12$ for $u$, take the absolute value, then negate:
$-|u| = -|12| = -12$.

(d) Substitute $-14$ for $p$, simplify inside the bars, then negate:
$-|p| = -|-14| = -14$.

{{< fillin
  question="Evaluate: $|x|$ when $x = -17$."
  answer="17"
  hint="Substitute $-17$ for $x$, then take the absolute value of the result."
>}}

{{< fillin
  question="Evaluate: $-|m|$ when $m = 22$."
  answer="-22"
  hint="Take the absolute value of $22$ first, then apply the outer negative sign."
>}}

## Add Integers

Most students are comfortable with the addition and subtraction facts for
positive numbers. But doing addition or subtraction with both positive and
negative numbers may be more challenging.

We can model addition and subtraction of integers with positive and
negative counters. One color (blue) represents positive counters; the other
color (red) represents negative counters. If we have one positive counter
and one negative counter, the value of the pair is zero — they form a
**neutral pair**.

<svg viewBox="0 0 220 90" role="img" aria-label="One blue counter above one red counter, both circled together, labeled 1 + (-1) = 0. Together they form a neutral pair with value zero." style={{ maxWidth: 220, display: 'block', margin: '1.5rem auto' }}>
  <ellipse cx="45" cy="45" rx="34" ry="38" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <circle cx="45" cy="27" r="16" fill="#bfe3f0" stroke="currentColor" strokeWidth="1.5" />
  <circle cx="45" cy="63" r="16" fill="#f0c4b0" stroke="currentColor" strokeWidth="1.5" />
  <text x="120" y="50" fontSize="16" fill="currentColor">1 + (-1) = 0</text>
</svg>

We use the counters to model the four addition facts using the numbers $5$,
$-5$, $3$, and $-3$: $5+3$, $-5+(-3)$, $-5+3$, and $5+(-3)$.

To add $5 + 3$, we start with $5$ positive counters, then add $3$ more
positive counters, giving $8$ positives. Likewise, to add $-5 + (-3)$, we
start with $5$ negative counters, then add $3$ more negative counters,
giving $8$ negatives.

<svg viewBox="0 0 460 120" role="img" aria-label="Left: 8 blue counters in a row labeled 8 positives, 5 + 3 = 8. Right: 8 red counters in a row labeled 8 negatives, -5 + (-3) = -8." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  {[...Array(8)].map((_, i) => (
    <circle key={i} cx={26 + i * 24} cy="30" r="11" fill="#bfe3f0" stroke="currentColor" strokeWidth="1.2" />
  ))}
  <text x="112" y="58" textAnchor="middle" fontSize="13" fill="currentColor">8 positives</text>
  <text x="112" y="76" textAnchor="middle" fontSize="13" fill="currentColor">5 + 3 = 8</text>
  {[...Array(8)].map((_, i) => (
    <circle key={i} cx={266 + i * 24} cy="30" r="11" fill="#f0c4b0" stroke="currentColor" strokeWidth="1.2" />
  ))}
  <text x="360" y="58" textAnchor="middle" fontSize="13" fill="currentColor">8 negatives</text>
  <text x="360" y="76" textAnchor="middle" fontSize="13" fill="currentColor">-5 + (-3) = -8</text>
</svg>

In each case, when the signs were the same, the counters were all the same
color, and so we added them.

{{< fillin
  question="Add: $2 + 4$."
  answer="6"
  hint="Both numbers are positive, so combine the counters — just add."
>}}

{{< fillin
  question="Add: $-2 + (-4)$."
  answer="-6"
  hint="Both numbers are negative, so the counters are all the same color — add, and the sum is negative."
>}}

So what happens when the signs are different? Let's add $-5 + 3$. We start
with $5$ negative counters, then add $3$ positive counters. Three of the
negatives pair up with the three positives to form neutral pairs, which we
remove. That leaves $2$ negatives, so $-5 + 3 = -2$. Notice there were more
negatives than positives, so the result was negative.

Now add the last combination, $5 + (-3)$. Start with $5$ positive counters,
then add $3$ negative counters. Three neutral pairs form and are removed,
leaving $2$ positives, so $5 + (-3) = 2$.

<svg viewBox="0 0 460 135" role="img" aria-label="Left: -5 + 3. Five red counters and three blue counters; three red-blue pairs are circled as neutral pairs and removed, leaving 2 red counters. More negatives, so the sum is negative. Right: 5 + (-3). Five blue counters and three red counters; three pairs are circled and removed, leaving 2 blue counters. More positives, so the sum is positive." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <text x="108" y="14" textAnchor="middle" fontSize="13" fill="currentColor">-5 + 3</text>
  {[...Array(3)].map((_, i) => (
    <g key={i}>
      <ellipse cx={34 + i * 44} cy="55" rx="19" ry="30" fill="none" stroke="#b03060" strokeWidth="1.3" />
      <circle cx={34 + i * 44} cy="40" r="10" fill="#f0c4b0" stroke="currentColor" strokeWidth="1" />
      <circle cx={34 + i * 44} cy="70" r="10" fill="#bfe3f0" stroke="currentColor" strokeWidth="1" />
    </g>
  ))}
  <circle cx="166" cy="40" r="10" fill="#f0c4b0" stroke="currentColor" strokeWidth="1" />
  <circle cx="192" cy="40" r="10" fill="#f0c4b0" stroke="currentColor" strokeWidth="1" />
  <text x="108" y="105" textAnchor="middle" fontSize="12" fill="currentColor">more negatives — sum is negative</text>
  <text x="108" y="123" textAnchor="middle" fontSize="13" fill="currentColor">-5 + 3 = -2</text>

  <text x="356" y="14" textAnchor="middle" fontSize="13" fill="currentColor">5 + (-3)</text>
  {[...Array(3)].map((_, i) => (
    <g key={i}>
      <ellipse cx={282 + i * 44} cy="55" rx="19" ry="30" fill="none" stroke="#b03060" strokeWidth="1.3" />
      <circle cx={282 + i * 44} cy="40" r="10" fill="#bfe3f0" stroke="currentColor" strokeWidth="1" />
      <circle cx={282 + i * 44} cy="70" r="10" fill="#f0c4b0" stroke="currentColor" strokeWidth="1" />
    </g>
  ))}
  <circle cx="414" cy="40" r="10" fill="#bfe3f0" stroke="currentColor" strokeWidth="1" />
  <circle cx="440" cy="40" r="10" fill="#bfe3f0" stroke="currentColor" strokeWidth="1" />
  <text x="356" y="105" textAnchor="middle" fontSize="12" fill="currentColor">more positives — sum is positive</text>
  <text x="356" y="123" textAnchor="middle" fontSize="13" fill="currentColor">5 + (-3) = 2</text>
</svg>

{{< fillin
  question="Add: $-2 + 4$."
  answer="2"
  hint="There are more positive counters than negative ones after the neutral pairs are removed."
>}}

{{< fillin
  question="Add: $2 + (-4)$."
  answer="-2"
  hint="There are more negative counters than positive ones after the neutral pairs are removed."
>}}

Now that we have added small positive and negative integers with a model,
we can visualize the model in our minds to simplify problems with any
numbers. When you need to add numbers such as $37 + (-53)$, you really
don't want to count out 37 blue counters and 53 red counters. Picture 37
blue counters with 53 red counters lined up underneath. Since there would be
more red (negative) counters than blue (positive) counters, the sum would be
*negative*. How many more red counters would there be? Because
$53 - 37 = 16$, there are 16 more red counters. Therefore, the sum of
$37 + (-53)$ is $-16$.

$$37 + (-53) = -16$$

Let's try another one. We'll add $-74 + (-27)$. Imagine 74 red counters and
27 more red counters, so we'd have 101 red counters. This means the sum is
$-101$.

$$-74 + (-27) = -101$$

{{< callout type="info" >}}
  **Addition of positive and negative integers.**

  $5 + 3$ and $-5 + (-3)$: both positive or both negative — the counters
  would be all the same color, so add them, and the sum has that same sign.

  $-5 + 3$ and $5 + (-3)$: signs different — some counters make neutral
  pairs; subtract to see how many are left over, and the sum takes the sign
  of whichever count was larger.
{{< /callout >}}

**Example.** Simplify: (a) $19 + (-47)$ (b) $-14 + (-36)$.

(a) Since the signs are different, we subtract $19$ from $47$. The answer
will be negative because there are more negatives than positives:
$19 + (-47) = -28$.

(b) Since the signs are the same, we add. The answer is negative because
there are only negatives: $-14 + (-36) = -50$.

{{< fillin
  question="Simplify: $-31 + (-19)$."
  answer="-50"
  hint="Both numbers are negative — add their absolute values and keep the negative sign."
>}}

{{< fillin
  question="Simplify: $15 + (-32)$."
  answer="-17"
  hint="Signs differ — subtract the smaller absolute value from the larger, then take the sign of the number farther from zero."
>}}

The techniques used up to now extend to more complicated problems, like the
ones we've seen before. Remember to follow the order of operations!

**Example.** Simplify: $-5 + 3(-2 + 7)$.

$$
\begin{array}{ll}
& -5 + 3(-2+7) \\
\text{Simplify inside the parentheses.} & -5 + 3(5) \\
\text{Multiply.} & -5 + 15 \\
\text{Add left to right.} & 10
\end{array}
$$

{{< fillin
  question="Simplify: $-2 + 5(-4+7)$."
  answer="13"
  hint="Simplify inside the parentheses first, then multiply, then add."
>}}

{{< fillin
  question="Simplify: $-4 + 2(-3+5)$."
  answer="0"
  hint="Simplify inside the parentheses first, then multiply, then add."
>}}

## Subtract Integers

We continue to use counters to model subtraction. Remember, the blue
counters represent positive numbers and the red counters represent negative
numbers. Perhaps when you were younger, you read "$5 - 3$" as "5 take away
3." When you use counters, you can think of subtraction the same way!

To subtract $5-3$, restate the problem as "5 take away 3": start with $5$
positive counters, take away $3$ positive counters, and $2$ positives are
left. The difference of $5$ and $3$ is $2$.

To subtract $-5-(-3)$, restate it as "$-5$ take away $-3$": start with $5$
negative counters, take away $3$ negative counters, and $2$ negatives are
left. The difference of $-5$ and $-3$ is $-2$.

<svg viewBox="0 0 460 130" role="img" aria-label="Left: 5-3=2. Five blue counters, three circled and crossed out with an arrow labeled take away, leaving 2 positives. Right: -5-(-3)=-2. Five red counters, three circled and crossed out with an arrow labeled take away, leaving 2 negatives." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <text x="112" y="16" textAnchor="middle" fontSize="13" fill="currentColor">5 - 3 = 2</text>
  {[...Array(5)].map((_, i) => (
    <circle key={i} cx={30 + i * 26} cy="45" r="11" fill="#bfe3f0" stroke="currentColor" strokeWidth="1.2" />
  ))}
  <ellipse cx="56" cy="45" rx="41" ry="18" fill="none" stroke="#b03060" strokeWidth="1.3" />
  <path d="M97 68 Q 56 88 15 68" stroke="#b03060" strokeWidth="1.3" fill="none" markerEnd="url(#arrow1)" />
  <path d="M20 63 L14 68 L22 72" stroke="#b03060" strokeWidth="1.3" fill="none" />
  <text x="112" y="105" textAnchor="middle" fontSize="12" fill="currentColor">2 positives left</text>

  <text x="360" y="16" textAnchor="middle" fontSize="13" fill="currentColor">-5 - (-3) = -2</text>
  {[...Array(5)].map((_, i) => (
    <circle key={i} cx={278 + i * 26} cy="45" r="11" fill="#f0c4b0" stroke="currentColor" strokeWidth="1.2" />
  ))}
  <ellipse cx="304" cy="45" rx="41" ry="18" fill="none" stroke="#b03060" strokeWidth="1.3" />
  <path d="M345 68 Q 304 88 263 68" stroke="#b03060" strokeWidth="1.3" fill="none" />
  <path d="M268 63 L262 68 L270 72" stroke="#b03060" strokeWidth="1.3" fill="none" />
  <text x="360" y="105" textAnchor="middle" fontSize="12" fill="currentColor">2 negatives left</text>
</svg>

Notice that these two examples are much alike: in the first, we subtract $3$
positives from $5$ positives and end up with $2$ positives. In the second,
we subtract $3$ negatives from $5$ negatives and end up with $2$ negatives.
Each example used counters of only one color, and the "take away" model of
subtraction was easy to apply.

{{< fillin
  question="Subtract: $6 - 4$."
  answer="2"
  hint="Take $4$ positive counters away from $6$ positive counters."
>}}

{{< fillin
  question="Subtract: $-6 - (-4)$."
  answer="-2"
  hint="Take $4$ negative counters away from $6$ negative counters."
>}}

What happens when we have to subtract one positive and one negative number?
We'll need to use both blue and red counters, as well as some neutral pairs.
Adding a neutral pair does not change the value — it's like changing
quarters to nickels, the value is the same, but it looks different.

To subtract $-5-3$, restate it as "$-5$ take away $3$." We start with $5$
negatives. We need to take away $3$ positives, but we don't have any
positives to take away. Since a neutral pair has value zero, we can add
neutral pairs without changing the value. We add $3$ neutral pairs to the
$5$ negatives, giving us $3$ positives to take away. Removing them leaves
$8$ negatives: $-5 - 3 = -8$.

For the fourth case, $5-(-3)$, restate it as "$5$ take away $-3$." We start
with $5$ positives. We need to take away $3$ negatives, but there are no
negatives to take away, so we add $3$ neutral pairs, giving us $3$ negatives
to take away. Removing them leaves $8$ positives: $5-(-3) = 8$.

<svg viewBox="0 0 460 170" role="img" aria-label="Left: -5-3=-8. Five red counters plus 3 neutral pairs added; the 3 blue counters from the pairs are circled and removed, leaving 8 red counters. Right: 5-(-3)=8. Five blue counters plus 3 neutral pairs added; the 3 red counters from the pairs are circled and removed, leaving 8 blue counters." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <text x="112" y="14" textAnchor="middle" fontSize="13" fill="currentColor">-5 - 3 = -8</text>
  {[...Array(5)].map((_, i) => (
    <circle key={i} cx={26 + i * 22} cy="40" r="10" fill="#f0c4b0" stroke="currentColor" strokeWidth="1.1" />
  ))}
  {[...Array(3)].map((_, i) => (
    <g key={i}>
      <ellipse cx={148 + i * 24} cy="55" rx="10" ry="30" fill="none" stroke="#b03060" strokeWidth="1.2" />
      <circle cx={148 + i * 24} cy="40" r="10" fill="#f0c4b0" stroke="currentColor" strokeWidth="1.1" />
      <circle cx={148 + i * 24} cy="70" r="10" fill="#bfe3f0" stroke="currentColor" strokeWidth="1.1" />
    </g>
  ))}
  <text x="112" y="110" textAnchor="middle" fontSize="12" fill="currentColor">removing the 3 positives leaves</text>
  <text x="112" y="128" textAnchor="middle" fontSize="12" fill="currentColor">8 negatives</text>

  <text x="360" y="14" textAnchor="middle" fontSize="13" fill="currentColor">5 - (-3) = 8</text>
  {[...Array(5)].map((_, i) => (
    <circle key={i} cx={274 + i * 22} cy="40" r="10" fill="#bfe3f0" stroke="currentColor" strokeWidth="1.1" />
  ))}
  {[...Array(3)].map((_, i) => (
    <g key={i}>
      <ellipse cx={396 + i * 24} cy="55" rx="10" ry="30" fill="none" stroke="#b03060" strokeWidth="1.2" />
      <circle cx={396 + i * 24} cy="40" r="10" fill="#bfe3f0" stroke="currentColor" strokeWidth="1.1" />
      <circle cx={396 + i * 24} cy="70" r="10" fill="#f0c4b0" stroke="currentColor" strokeWidth="1.1" />
    </g>
  ))}
  <text x="360" y="110" textAnchor="middle" fontSize="12" fill="currentColor">removing the 3 negatives leaves</text>
  <text x="360" y="128" textAnchor="middle" fontSize="12" fill="currentColor">8 positives</text>
</svg>

**Example.** Subtract: (a) $-3-1$ (b) $3-(-1)$.

(a) We need $1$ more negative than we have, so add a neutral pair, then
take $1$ positive away from that added pair: $-3-1 = -4$.

(b) We need $1$ more positive than we have, so add a neutral pair, then
take $1$ negative away from that added pair: $3-(-1) = 4$.

{{< fillin
  question="Subtract: $-6 - 4$."
  answer="-10"
  hint="Restate as $-6$ take away $4$. You'll need to add neutral pairs to have enough positives to remove."
>}}

{{< fillin
  question="Subtract: $6 - (-4)$."
  answer="10"
  hint="Restate as $6$ take away $-4$. You'll need to add neutral pairs to have enough negatives to remove."
>}}

Have you noticed that *subtraction of signed numbers can be done by adding
the opposite*? In the last example, $-3-1$ is the same as $-3+(-1)$, and
$3-(-1)$ is the same as $3+1$. You will often see this idea, the
**subtraction property**, written as follows:

{{< callout type="info" >}}
  **Subtraction property.** $a - b = a + (-b)$. Subtracting a number is the
  same as adding its opposite.
{{< /callout >}}

Look at $6-4$ and $6+(-4)$: both give $2$. Of course, when you have a
subtraction problem with only positive numbers, like $6-4$, you just do the
subtraction — you already knew how to subtract $6-4$ long ago. But *knowing*
that $6-4$ gives the same answer as $6+(-4)$ helps when you are subtracting
negative numbers.

**Example.** Simplify: (a) $13-8$ and $13+(-8)$ (b) $-17-9$ and $-17+(-9)$.

(a) $13 - 8 = 5$ and $13 + (-8) = 5$ — the same.

(b) $-17-9 = -26$ and $-17+(-9)=-26$ — the same.

{{< fillin
  question="Simplify: $-11 - 7$."
  answer="-18"
  hint="This is the same as $-11 + (-7)$ — add the absolute values and keep the negative sign."
>}}

{{< fillin
  question="Simplify: $15 - 7$."
  answer="8"
  hint="Both numbers are positive, so subtract as usual."
>}}

Now look at what happens when we subtract a negative: $8-(-5)$ gives the
same result as $8+5$, namely $13$. *Subtracting a negative number is like
adding a positive!* You will often see this written as
$a - (-b) = a + b$.

**Example.** Simplify: (a) $9-(-15)$ and $9+15$ (b) $-7-(-4)$ and $-7+4$.

(a) $9-(-15) = 24$ and $9+15 = 24$ — the same.

(b) $-7-(-4) = -3$ and $-7+4=-3$ — the same.

{{< fillin
  question="Simplify: $-5 - (-1)$."
  answer="-4"
  hint="Subtracting a negative is the same as adding its positive opposite: $-5 + 1$."
>}}

{{< fillin
  question="Simplify: $4 - (-19)$."
  answer="23"
  hint="Subtracting a negative is the same as adding a positive: $4 + 19$."
>}}

Let's look again at the results of subtracting the different combinations
of $5$, $-5$, $3$, and $-3$.

{{< callout type="info" >}}
  **Subtraction of integers.**

  $5 - 3 = 2$: 5 positives take away 3 positives leaves 2 positives.
  $-5 - (-3) = -2$: 5 negatives take away 3 negatives leaves 2 negatives.
  When there would be enough counters of the color to take away, subtract.

  $-5 - 3 = -8$: 5 negatives, wanting to take away 3 positives, need
  neutral pairs. $5 - (-3) = 8$: 5 positives, wanting to take away 3
  negatives, need neutral pairs. When there would not be enough counters of
  the color to take away, add neutral pairs first.
{{< /callout >}}

What happens when there are more than two integers? We just use the order
of operations as usual.

**Example.** Simplify: $7-(-4-3)-9$.

$$
\begin{array}{ll}
& 7-(-4-3)-9 \\
\text{Simplify inside the parentheses first.} & 7-(-7)-9 \\
\text{Subtract left to right.} & 14 - 9 \\
\text{Subtract.} & 5
\end{array}
$$

{{< fillin
  question="Simplify: $8 - (-3-1) - 9$."
  answer="3"
  hint="Simplify inside the parentheses first, then subtract left to right."
>}}

{{< fillin
  question="Simplify: $12 - (-9-6) - 14$."
  answer="13"
  hint="Simplify inside the parentheses first, then subtract left to right."
>}}

## Key terms

**negative numbers** — numbers less than $0$; they lie to the left of zero
on the number line. **integers** — the whole numbers and their opposites:
$\dots -3, -2, -1, 0, 1, 2, 3 \dots$. **opposite** — the number that is the
same distance from zero on the number line, but on the opposite side.
**absolute value** — the distance between a number and $0$ on the number
line, written $|n|$; always greater than or equal to zero. **neutral pair**
— one positive counter and one negative counter together, with combined
value zero. **subtraction property** — $a - b = a + (-b)$; subtracting a
number is the same as adding its opposite.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 1.3: Add and Subtract Integers](https://openstax.org/books/elementary-algebra-2e/pages/1-3-add-and-subtract-integers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the number-line and positive/negative-counters figures as accessible inline graphics, and the grouping-symbols list as a table; omitted the Manipulative Mathematics callouts, media links, Self Check checklist, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
