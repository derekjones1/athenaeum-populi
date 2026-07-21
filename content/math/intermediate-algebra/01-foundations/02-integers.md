---
title: Integers
description: >-
  Working with negative numbers, opposites, and absolute value; adding,
  subtracting, multiplying, and dividing integers; simplifying and evaluating
  expressions with integers; and translating phrases and solving applications —
  adapted from OpenStax Intermediate Algebra 2e, Section 1.2.
source_section: "1.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify expressions
  with absolute value, add and subtract integers, multiply and divide integers,
  simplify expressions with integers, evaluate variable expressions with
  integers, translate phrases to expressions with integers, and use integers in
  applications.
{{< /callout >}}

## Simplify expressions with absolute value

A **negative number** is a number less than $0$. The negative numbers are to
the left of zero on the number line. See the figure below.

<svg viewBox="0 0 440 90" role="img" aria-label="A number line from negative 4 to 4 with 0 in the middle. The numbers to the left of zero are labeled negative numbers; the numbers to the right of zero are labeled positive numbers; zero is labeled in the middle." style={{ maxWidth: 440, display: 'block', margin: '1.5rem auto' }}>
  <line x1="40" y1="35" x2="360" y2="35" stroke="currentColor" strokeWidth="1.5" />
  <polygon points="40,35 50,31 50,39" fill="currentColor" />
  <polygon points="360,35 350,31 350,39" fill="currentColor" />
  <g fill="currentColor" fontSize="13" textAnchor="middle">
    <line x1="80" y1="30" x2="80" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="80" y="55">-4</text>
    <line x1="115" y1="30" x2="115" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="115" y="55">-3</text>
    <line x1="150" y1="30" x2="150" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="150" y="55">-2</text>
    <line x1="185" y1="30" x2="185" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="185" y="55">-1</text>
    <line x1="220" y1="30" x2="220" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="220" y="55">0</text>
    <line x1="255" y1="30" x2="255" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="255" y="55">1</text>
    <line x1="290" y1="30" x2="290" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="290" y="55">2</text>
    <line x1="325" y1="30" x2="325" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="325" y="55">3</text>
    <line x1="350" y1="30" x2="350" y2="40" stroke="currentColor" strokeWidth="1.5" /><text x="350" y="55">4</text>
  </g>
  <g fill="currentColor" fontSize="11" textAnchor="middle">
    <text x="130" y="80">Negative numbers</text>
    <text x="220" y="80">Zero</text>
    <text x="310" y="80">Positive numbers</text>
  </g>
</svg>

You may have noticed that, on the number line, the negative numbers are a
mirror image of the positive numbers, with zero in the middle. Because the
numbers $2$ and $-2$ are the same distance from zero, each one is called the
**opposite** of the other. The opposite of $2$ is $-2$, and the opposite of
$-2$ is $2$.

{{< callout type="info" >}}
  **Opposite.** The opposite of a number is the number that is the same
  distance from zero on the number line but on the opposite side of zero.
{{< /callout >}}

The figure below illustrates the definition.

<svg viewBox="0 0 360 90" role="img" aria-label="A number line from negative 4 to 4. Points are marked at negative 3 and at 3. A bracket labeled 3 spans from negative 3 to 0, and another bracket labeled 3 spans from 0 to 3, showing that negative 3 and 3 are each three units from zero." style={{ maxWidth: 360, display: 'block', margin: '1.5rem auto' }}>
  <g fill="currentColor" fontSize="13" textAnchor="middle">
    <text x="128" y="20">3</text>
    <text x="272" y="20">3</text>
  </g>
  <path d="M95,28 v-4 h105 v4" fill="none" stroke="currentColor" strokeWidth="1.2" />
  <path d="M200,28 v-4 h105 v4" fill="none" stroke="currentColor" strokeWidth="1.2" />
  <line x1="20" y1="45" x2="340" y2="45" stroke="currentColor" strokeWidth="1.5" />
  <polygon points="20,45 30,41 30,49" fill="currentColor" />
  <polygon points="340,45 330,41 330,49" fill="currentColor" />
  <g fill="currentColor" fontSize="13" textAnchor="middle">
    <line x1="60" y1="40" x2="60" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="60" y="65">-4</text>
    <line x1="95" y1="40" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="95" y="65">-3</text>
    <line x1="130" y1="40" x2="130" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="130" y="65">-2</text>
    <line x1="165" y1="40" x2="165" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="165" y="65">-1</text>
    <line x1="200" y1="40" x2="200" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="200" y="65">0</text>
    <line x1="235" y1="40" x2="235" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="235" y="65">1</text>
    <line x1="270" y1="40" x2="270" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="270" y="65">2</text>
    <line x1="305" y1="40" x2="305" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="305" y="65">3</text>
    <line x1="330" y1="40" x2="330" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="330" y="65">4</text>
  </g>
  <circle cx="95" cy="45" r="3.5" fill="currentColor" />
  <circle cx="305" cy="45" r="3.5" fill="currentColor" />
</svg>

<p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.9em' }}>The opposite of $3$ is $-3$.</p>

{{< callout type="info" >}}
  **Opposite notation.**

  $$-a \text{ means the opposite of the number } a$$

  The notation $-a$ is read as "the opposite of $a$."
{{< /callout >}}

We saw that numbers such as $3$ and $-3$ are opposites because they are the
same distance from $0$ on the number line. They are both three units from $0$.
The distance between $0$ and any number on the number line is called the
**absolute value** of that number.

{{< callout type="info" >}}
  **Absolute value.** The absolute value of a number is its distance from $0$
  on the number line.

  The absolute value of a number $n$ is written as $|n|$ and $|n| \ge 0$ for
  all numbers.

  Absolute values are always greater than or equal to zero.
{{< /callout >}}

For example,

$$\begin{array}{l} -5 \text{ is } 5 \text{ units away from } 0, \text{ so } |-5| = 5. \\[4pt] 5 \text{ is } 5 \text{ units away from } 0, \text{ so } |5| = 5. \end{array}$$

The figure below illustrates this idea.

<svg viewBox="0 0 360 90" role="img" aria-label="A number line with points marked at negative 5 and 5. A bracket labeled 5 units spans from negative 5 to 0, and another bracket labeled 5 units spans from 0 to 5, showing that 5 and negative 5 are each five units from zero." style={{ maxWidth: 360, display: 'block', margin: '1.5rem auto' }}>
  <g fill="currentColor" fontSize="12" textAnchor="middle">
    <text x="110" y="20">5 units</text>
    <text x="250" y="20">5 units</text>
  </g>
  <path d="M50,28 v-4 h130 v4" fill="none" stroke="currentColor" strokeWidth="1.2" />
  <path d="M180,28 v-4 h130 v4" fill="none" stroke="currentColor" strokeWidth="1.2" />
  <line x1="20" y1="45" x2="340" y2="45" stroke="currentColor" strokeWidth="1.5" />
  <polygon points="20,45 30,41 30,49" fill="currentColor" />
  <polygon points="340,45 330,41 330,49" fill="currentColor" />
  <g fill="currentColor" fontSize="13" textAnchor="middle">
    <line x1="50" y1="40" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="50" y="65">-5</text>
    <line x1="180" y1="40" x2="180" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="180" y="65">0</text>
    <line x1="310" y1="40" x2="310" y2="50" stroke="currentColor" strokeWidth="1.5" /><text x="310" y="65">5</text>
  </g>
  <circle cx="50" cy="45" r="3.5" fill="currentColor" />
  <circle cx="310" cy="45" r="3.5" fill="currentColor" />
</svg>

The absolute value of a number is never negative because distance cannot be
negative. The only number with absolute value equal to zero is the number zero
itself, because the distance from $0$ to $0$ on the number line is zero units.

In the next example, we'll order expressions with absolute values.

**Example.** Fill in $<$, $>$, or $=$ for each of the following pairs of
numbers: (a) $|-5| \,\rule{1.5em}{0.4pt}\, -|-5|$; (b) $8 \,\rule{1.5em}{0.4pt}\, -|-8|$; (c) $-9 \,\rule{1.5em}{0.4pt}\, -|-9|$; (d) $-(-16) \,\rule{1.5em}{0.4pt}\, |-16|$.

(a) Simplify each side, then order:

$$\begin{array}{lrcl} & |-5| &\rule{1.5em}{0.4pt}& -|-5| \\[4pt] \text{Simplify.} & 5 &\rule{1.5em}{0.4pt}& -5 \\[4pt] \text{Order.} & 5 &>& -5 \\[4pt] & |-5| &>& -|-5| \end{array}$$

(b) Simplify each side, then order:

$$\begin{array}{lrcl} & 8 &\rule{1.5em}{0.4pt}& -|-8| \\[4pt] \text{Simplify.} & 8 &\rule{1.5em}{0.4pt}& -8 \\[4pt] \text{Order.} & 8 &>& -8 \\[4pt] & 8 &>& -|-8| \end{array}$$

(c) Simplify each side, then order:

$$\begin{array}{lrcl} & -9 &\rule{1.5em}{0.4pt}& -|-9| \\[4pt] \text{Simplify.} & -9 &\rule{1.5em}{0.4pt}& -9 \\[4pt] \text{Order.} & -9 &=& -9 \\[4pt] & -9 &=& -|-9| \end{array}$$

(d) Simplify each side, then order:

$$\begin{array}{lrcl} & -(-16) &\rule{1.5em}{0.4pt}& |-16| \\[4pt] \text{Simplify.} & 16 &\rule{1.5em}{0.4pt}& 16 \\[4pt] \text{Order.} & 16 &=& 16 \\[4pt] & -(-16) &=& |-16| \end{array}$$

{{< multiplechoice
  question="Fill in the blank with $<$, $>$, or $=$: $-9 \_\_\_ -|-9|$"
  hint="Simplify the right side: $-|-9| = -9$. Then compare the two values."
  answer="$=$"
>}}
$<$
$>$
$=$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Fill in the blank with $<$, $>$, or $=$: $2 \_\_\_ -|-2|$"
  hint="Simplify the right side: $-|-2| = -2$. Then compare $2$ with $-2$."
  answer="$>$"
>}}
$<$
$>$
$=$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Fill in the blank with $<$, $>$, or $=$: $-8 \_\_\_ -|-8|$"
  hint="Simplify the right side: $-|-8| = -8$. Then compare the two values."
  answer="$=$"
>}}
$<$
$>$
$=$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Fill in the blank with $<$, $>$, or $=$: $-(-9) \_\_\_ |-9|$"
  hint="Simplify both sides: $-(-9) = 9$ and $|-9| = 9$."
  answer="$=$"
>}}
$<$
$>$
$=$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Fill in the blank with $<$, $>$, or $=$: $7 \_\_\_ -|-7|$"
  hint="Simplify the right side: $-|-7| = -7$. Then compare $7$ with $-7$."
  answer="$>$"
>}}
$<$
$>$
$=$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Fill in the blank with $<$, $>$, or $=$: $-(-10) \_\_\_ |-10|$"
  hint="Simplify both sides: $-(-10) = 10$ and $|-10| = 10$."
  answer="$=$"
>}}
$<$
$>$
$=$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Fill in the blank with $<$, $>$, or $=$: $|-4| \_\_\_ -|-4|$"
  hint="Simplify each side: $|-4| = 4$ and $-|-4| = -4$. Then compare."
  answer="$>$"
>}}
$<$
$>$
$=$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Fill in the blank with $<$, $>$, or $=$: $-1 \_\_\_ |-1|$"
  hint="Simplify the right side: $|-1| = 1$. Then compare $-1$ with $1$."
  answer="$<$"
>}}
$<$
$>$
$=$
{{< /multiplechoice >}}

We now add absolute value bars to our list of grouping symbols. When we use
the order of operations, first we simplify inside the absolute value bars as
much as possible, then we take the absolute value of the resulting number.

{{< callout type="info" >}}
  **Grouping symbols.**

  $$\begin{array}{llll} \text{Parentheses} & (\ ) & \text{Braces} & \{\ \} \\[4pt] \text{Brackets} & [\ ] & \text{Absolute value} & |\ | \end{array}$$
{{< /callout >}}

In the next example, we simplify the expressions inside absolute value bars
first just as we do with parentheses.

**Example.** Simplify: $24 - |19 - 3(6 - 2)|$.

$$\begin{array}{lrcl} & && 24 - |19 - 3(6 - 2)| \\[4pt] \text{Work inside parentheses first: subtract } 2 \text{ from } 6. &&& 24 - |19 - 3(4)| \\[4pt] \text{Multiply } 3(4). &&& 24 - |19 - 12| \\[4pt] \text{Subtract inside the absolute value bars.} &&& 24 - |7| \\[4pt] \text{Take the absolute value.} &&& 24 - 7 \\[4pt] \text{Subtract.} &&& 17 \end{array}$$

{{< fillin
  question="Simplify: $19 - |11 - 4(3 - 1)|$."
  answer="16"
  hint="Work inside the parentheses first, then multiply, then subtract inside the bars, then take the absolute value."
>}}

{{< fillin
  question="Simplify: $9 - |8 - 4(7 - 5)|$."
  answer="9"
  hint="Work inside the parentheses first, then multiply. Inside the bars you should reach $|8 - 8| = 0$."
>}}

## Add and subtract integers

So far, we have only used the counting numbers and the whole numbers.

$$\begin{array}{ll} \text{Counting numbers} & 1, 2, 3 \ldots \\[4pt] \text{Whole numbers} & 0, 1, 2, 3 \ldots \end{array}$$

Our work with opposites gives us a way to define the **integers**. The whole
numbers and their opposites are called the integers. The integers are the
numbers $\ldots -3, -2, -1, 0, 1, 2, 3 \ldots$

{{< callout type="info" >}}
  **Integers.** The whole numbers and their opposites are called the
  **integers**.

  The integers are the numbers

  $$\ldots -3, -2, -1, 0, 1, 2, 3 \ldots$$
{{< /callout >}}

Most students are comfortable with the addition and subtraction facts for
positive numbers. But doing addition or subtraction with both positive and
negative numbers may be more challenging.

We will use two color counters to model addition and subtraction of negatives
so that you can visualize the procedures instead of memorizing the rules. We
let one color (blue) represent positive. The other color (red) will represent
the negatives.

If we have one positive counter and one negative counter, the value of the pair
is zero. They form a **neutral pair**. The value of this neutral pair is zero,
as shown by $1 + (-1) = 0$.

We will use the counters to show how to add the four combinations
$5 + 3$, $-5 + (-3)$, $-5 + 3$, and $5 + (-3)$.

The first example, $5 + 3$, adds $5$ positives and $3$ positives — both
positives. The second example, $-5 + (-3)$, adds $5$ negatives and $3$
negatives — both negatives. When the signs are the same, the counters are all
the same color, and so we add them. In each case we get $8$ — either $8$
positives or $8$ negatives:

$$\begin{array}{rcl} 5 + 3 &=& 8 \\[4pt] -5 + (-3) &=& -8 \end{array}$$

So what happens when the signs are different? Let's add $-5 + 3$ and
$5 + (-3)$. When we use counters to model addition of positive and negative
integers, it is easy to see whether there are more positive or more negative
counters. So we know whether the sum will be positive or negative:

$$\begin{array}{rcll} -5 + 3 &=& -2 & \text{(more negatives — the sum is negative)} \\[4pt] 5 + (-3) &=& 2 & \text{(more positives — the sum is positive)} \end{array}$$

**Example.** Add: (a) $-1 + (-4)$; (b) $-1 + 5$; (c) $1 + (-5)$.

(a) We model $1$ negative plus $4$ negatives, which is $5$ negatives:

$$-1 + (-4) = -5$$

(b) There are more positives, so the sum is positive:

$$-1 + 5 = 4$$

(c) There are more negatives, so the sum is negative:

$$1 + (-5) = -4$$

{{< fillin
  question="Add: $-2 + (-4)$."
  answer="-6"
  hint="Both signs are the same (both negative), so add and keep the negative sign."
>}}

{{< fillin
  question="Add: $-2 + 4$."
  answer="2"
  hint="The signs are different; there are more positives, so the sum is positive."
>}}

{{< fillin
  question="Add: $2 + (-4)$."
  answer="-2"
  hint="The signs are different; there are more negatives, so the sum is negative."
>}}

{{< fillin
  question="Add: $-2 + (-5)$."
  answer="-7"
  hint="Both signs are the same (both negative), so add and keep the negative sign."
>}}

{{< fillin
  question="Add: $-2 + 5$."
  answer="3"
  hint="The signs are different; there are more positives, so the sum is positive."
>}}

{{< fillin
  question="Add: $2 + (-5)$."
  answer="-3"
  hint="The signs are different; there are more negatives, so the sum is negative."
>}}

We will continue to use counters to model the subtraction. Perhaps when you
were younger, you read $5 - 3$ as "5 take away 3." When you use counters, you
can think of subtraction the same way!

We will use the counters to show how to subtract the four combinations
$5 - 3$, $-5 - (-3)$, $-5 - 3$, and $5 - (-3)$.

The first example, $5 - 3$, we subtract $3$ positives from $5$ positives and
end up with $2$ positives. In the second example, $-5 - (-3)$, we subtract $3$
negatives from $5$ negatives and end up with $2$ negatives. Each example used
counters of only one color, and the "take away" model of subtraction was easy
to apply:

$$\begin{array}{rcl} 5 - 3 &=& 2 \\[4pt] -5 - (-3) &=& -2 \end{array}$$

What happens when we have to subtract one positive and one negative number?
We'll need to use both blue and red counters as well as some neutral pairs. If
we don't have the number of counters needed to take away, we add neutral
pairs. Adding a neutral pair does not change the value. It is like changing
quarters to nickels — the value is the same, but it looks different.

Let's look at $-5 - 3$ and $5 - (-3)$. We model the first number, then add the
needed neutral pairs so that we can remove the number of counters modeled by
the second number. After we remove and count what is left:

$$\begin{array}{rcl} -5 - 3 &=& -8 \\[4pt] 5 - (-3) &=& 8 \end{array}$$

**Example.** Subtract: (a) $3 - 1$; (b) $-3 - (-1)$; (c) $-3 - 1$; (d)
$3 - (-1)$.

(a) Take $1$ positive from $3$ positives and get $2$ positives:

$$3 - 1 = 2$$

(b) Take $1$ negative from $3$ negatives and get $2$ negatives:

$$-3 - (-1) = -2$$

(c) Take $1$ positive from the one added neutral pair:

$$-3 - 1 = -4$$

(d) Take $1$ negative from the one added neutral pair:

$$3 - (-1) = 4$$

{{< fillin
  question="Subtract: $6 - 4$."
  answer="2"
  hint="Take 4 positives away from 6 positives."
>}}

{{< fillin
  question="Subtract: $-6 - (-4)$."
  answer="-2"
  hint="Take 4 negatives away from 6 negatives."
>}}

{{< fillin
  question="Subtract: $-6 - 4$."
  answer="-10"
  hint="Model 6 negatives, add 4 neutral pairs, then take away 4 positives."
>}}

{{< fillin
  question="Subtract: $6 - (-4)$."
  answer="10"
  hint="Model 6 positives, add 4 neutral pairs, then take away 4 negatives."
>}}

{{< fillin
  question="Subtract: $7 - 4$."
  answer="3"
  hint="Take 4 positives away from 7 positives."
>}}

{{< fillin
  question="Subtract: $-7 - (-4)$."
  answer="-3"
  hint="Take 4 negatives away from 7 negatives."
>}}

{{< fillin
  question="Subtract: $-7 - 4$."
  answer="-11"
  hint="Model 7 negatives, add 4 neutral pairs, then take away 4 positives."
>}}

{{< fillin
  question="Subtract: $7 - (-4)$."
  answer="11"
  hint="Model 7 positives, add 4 neutral pairs, then take away 4 negatives."
>}}

Have you noticed that *subtraction of signed numbers can be done by adding the
opposite*? In the last example, $-3 - 1$ is the same as $-3 + (-1)$ and
$3 - (-1)$ is the same as $3 + 1$. You will often see this idea, the
Subtraction Property, written as follows.

{{< callout type="info" >}}
  **Subtraction Property.**

  $$a - b = a + (-b)$$

  Subtracting a number is the same as adding its opposite.
{{< /callout >}}

**Example.** Simplify: (a) $13 - 8$ and $13 + (-8)$; (b) $-17 - 9$ and
$-17 + (-9)$; (c) $9 - (-15)$ and $9 + 15$; (d) $-7 - (-4)$ and $-7 + 4$.

(a) Subtract:

$$\begin{array}{rcl} 13 - 8 &=& 5 \\[4pt] 13 + (-8) &=& 5 \end{array}$$

(b) Subtract:

$$\begin{array}{rcl} -17 - 9 &=& -26 \\[4pt] -17 + (-9) &=& -26 \end{array}$$

(c) Subtract:

$$\begin{array}{rcl} 9 - (-15) &=& 24 \\[4pt] 9 + 15 &=& 24 \end{array}$$

(d) Subtract:

$$\begin{array}{rcl} -7 - (-4) &=& -3 \\[4pt] -7 + 4 &=& -3 \end{array}$$

{{< fillin
  question="Simplify: $21 - 13$ (which equals $21 + (-13)$)."
  answer="8"
  hint="Subtract, or add the opposite: $21 + (-13)$."
>}}

{{< fillin
  question="Simplify: $-11 - 7$ (which equals $-11 + (-7)$)."
  answer="-18"
  hint="Adding two negatives: $-11 + (-7)$."
>}}

{{< fillin
  question="Simplify: $6 - (-13)$ (which equals $6 + 13$)."
  answer="19"
  hint="Subtracting a negative is the same as adding its opposite: $6 + 13$."
>}}

{{< fillin
  question="Simplify: $15 - 7$ (which equals $15 + (-7)$)."
  answer="8"
  hint="Subtract, or add the opposite: $15 + (-7)$."
>}}

{{< fillin
  question="Simplify: $-14 - 8$ (which equals $-14 + (-8)$)."
  answer="-22"
  hint="Adding two negatives: $-14 + (-8)$."
>}}

{{< fillin
  question="Simplify: $4 - (-19)$ (which equals $4 + 19$)."
  answer="23"
  hint="Subtracting a negative is the same as adding its opposite: $4 + 19$."
>}}

{{< fillin
  question="Simplify: $-4 - (-7)$ (which equals $-4 + 7$)."
  answer="3"
  hint="Subtracting a negative is the same as adding its opposite: $-4 + 7$."
>}}

What happens when there are more than three integers? We just use the order of
operations as usual.

**Example.** Simplify: $7 - (-4 - 3) - 9$.

$$\begin{array}{lrcl} & && 7 - (-4 - 3) - 9 \\[4pt] \text{Simplify inside the parentheses first.} &&& 7 - (-7) - 9 \\[4pt] \text{Subtract left to right.} &&& 14 - 9 \\[4pt] \text{Subtract.} &&& 5 \end{array}$$

{{< fillin
  question="Simplify: $8 - (-3 - 1) - 9$."
  answer="3"
  hint="Simplify inside the parentheses first: $-3 - 1 = -4$. Then work left to right."
>}}

{{< fillin
  question="Simplify: $12 - (-9 - 6) - 14$."
  answer="13"
  hint="Simplify inside the parentheses first: $-9 - 6 = -15$. Then work left to right."
>}}

## Multiply and divide integers

Since multiplication is mathematical shorthand for repeated addition, our model
can easily be applied to show multiplication of integers. We remember that
$a \cdot b$ means **add $a$, $b$ times**.

Consider $5 \cdot 3$, which means add $5$ three times, giving $15$ positives, so
$5 \cdot 3 = 15$. Likewise $-5(3)$ means add $-5$ three times, giving $15$
negatives, so $-5(3) = -15$.

The next two products are more interesting. What does it mean to multiply $5$ by
$-3$? It means subtract $5$, three times. Looking at subtraction as "taking
away," it means to take away $5$, three times. But there is nothing to take
away, so we start by adding neutral pairs on the workspace. After taking away
$5$ positives three times, $15$ negatives are left, so $5(-3) = -15$.
Similarly, $(-5)(-3)$ means take away $-5$, three times; after adding neutral
pairs and taking away, $15$ positives are left, so $(-5)(-3) = 15$. In summary:

$$\begin{array}{ll} 5 \cdot 3 = 15 & -5(3) = -15 \\[4pt] 5(-3) = -15 & (-5)(-3) = 15 \end{array}$$

Notice that for multiplication of two signed numbers, when the signs are the
**same**, the product is **positive**, and when the signs are **different**,
the product is **negative**.

What about division? Division is the inverse operation of multiplication. So,
$15 \div 3 = 5$ because $5 \cdot 3 = 15$. In words, this expression says that
$15$ can be divided into $3$ groups of $5$ each because adding five three times
gives $15$. If you look at some examples of multiplying integers, you might
figure out the rules for dividing integers:

$$\begin{array}{lll} 5 \cdot 3 = 15 & \text{so} & 15 \div 3 = 5 \\[4pt] (-5)(-3) = 15 & \text{so} & 15 \div (-3) = -5 \\[4pt] -5(3) = -15 & \text{so} & -15 \div 3 = -5 \\[4pt] 5(-3) = -15 & \text{so} & -15 \div (-3) = 5 \end{array}$$

Division follows the same rules as multiplication with regard to signs.

{{< callout type="info" >}}
  **Multiplication and Division of Signed Numbers.**

  For multiplication and division of two signed numbers:

  | Same signs | Result |
  | :--- | :--- |
  | Two positives | Positive |
  | Two negatives | Positive |

  If the signs are the same, the result is positive.

  | Different signs | Result |
  | :--- | :--- |
  | Positive and negative | Negative |
  | Negative and positive | Negative |

  If the signs are different, the result is negative.
{{< /callout >}}

**Example.** Multiply or divide: (a) $-100 \div (-4)$; (b) $7 \cdot 6$; (c)
$4(-8)$; (d) $-27 \div 3$.

$$\begin{array}{lrcl} \text{(a) Divide, with signs that are the same the quotient is positive.} & -100 \div (-4) &=& 25 \\[4pt] \text{(b) Multiply, with same signs.} & 7 \cdot 6 &=& 42 \\[4pt] \text{(c) Multiply, with different signs.} & 4(-8) &=& -32 \\[4pt] \text{(d) Divide, with different signs, the quotient is negative.} & -27 \div 3 &=& -9 \end{array}$$

{{< fillin
  question="Simplify: $-115 \div (-5)$."
  answer="23"
  hint="Same signs, so the quotient is positive."
>}}

{{< fillin
  question="Simplify: $5 \cdot 12$."
  answer="60"
  hint="Same signs, so the product is positive."
>}}

{{< fillin
  question="Simplify: $9(-7)$."
  answer="-63"
  hint="Different signs, so the product is negative."
>}}

{{< fillin
  question="Simplify: $-63 \div 7$."
  answer="-9"
  hint="Different signs, so the quotient is negative."
>}}

{{< fillin
  question="Simplify: $-117 \div (-3)$."
  answer="39"
  hint="Same signs, so the quotient is positive."
>}}

{{< fillin
  question="Simplify: $3 \cdot 13$."
  answer="39"
  hint="Same signs, so the product is positive."
>}}

{{< fillin
  question="Simplify: $7(-4)$."
  answer="-28"
  hint="Different signs, so the product is negative."
>}}

{{< fillin
  question="Simplify: $-42 \div 6$."
  answer="-7"
  hint="Different signs, so the quotient is negative."
>}}

When we multiply a number by $1$, the result is the same number. Each time we
multiply a number by $-1$, we get its opposite!

{{< callout type="info" >}}
  **Multiplication by $-1$.**

  $$-1a = -a$$

  Multiplying a number by $-1$ gives its opposite.
{{< /callout >}}

## Simplify expressions with integers

What happens when there are more than two numbers in an expression? The order
of operations still applies when negatives are included. Remember Please Excuse
My Dear Aunt Sally?

Let's try some examples. We'll simplify expressions that use all four
operations with integers — addition, subtraction, multiplication, and division.
Remember to follow the order of operations.

**Example.** Simplify: (a) $(-2)^4$; (b) $-2^4$.

Notice the difference in parts (a) and (b). In part (a), the exponent means to
raise what is in the parentheses, the $-2$, to the $4^{\text{th}}$ power. In
part (b), the exponent means to raise just the $2$ to the $4^{\text{th}}$ power
and then take the opposite.

(a) Write in expanded form and multiply:

$$\begin{array}{lrcl} & (-2)^4 &=& (-2)(-2)(-2)(-2) \\[4pt] \text{Multiply.} && & 4(-2)(-2) \\[4pt] \text{Multiply.} & && -8(-2) \\[4pt] \text{Multiply.} & && 16 \end{array}$$

(b) Write in expanded form; we are asked to find the opposite of $2^4$:

$$\begin{array}{lrcl} & -2^4 &=& -(2 \cdot 2 \cdot 2 \cdot 2) \\[4pt] \text{Multiply.} & && -(4 \cdot 2 \cdot 2) \\[4pt] \text{Multiply.} & && -(8 \cdot 2) \\[4pt] \text{Multiply.} & && -16 \end{array}$$

{{< fillin
  question="Simplify: $(-3)^4$."
  answer="81"
  hint="The base in parentheses is $-3$; raise all of $-3$ to the fourth power."
>}}

{{< fillin
  question="Simplify: $-3^4$."
  answer="-81"
  hint="Only the $3$ is raised to the fourth power; then take the opposite."
>}}

{{< fillin
  question="Simplify: $(-7)^2$."
  answer="49"
  hint="The base in parentheses is $-7$; a negative squared is positive."
>}}

{{< fillin
  question="Simplify: $-7^2$."
  answer="-49"
  hint="Only the $7$ is squared; then take the opposite."
>}}

The last example showed us the difference between $(-2)^4$ and $-2^4$. This
distinction is important to prevent future errors. The next example reminds us
to multiply and divide in order left to right.

**Example.** Simplify: (a) $8(-9) \div (-2)^3$; (b) $-30 \div 2 + (-3)(-7)$.

(a) Simplify:

$$\begin{array}{lrcl} & && 8(-9) \div (-2)^3 \\[4pt] \text{Exponents first.} &&& 8(-9) \div (-8) \\[4pt] \text{Multiply.} &&& -72 \div (-8) \\[4pt] \text{Divide.} &&& 9 \end{array}$$

(b) Simplify:

$$\begin{array}{lrcl} & && -30 \div 2 + (-3)(-7) \\[4pt] \text{Multiply and divide left to right, so divide first.} &&& -15 + (-3)(-7) \\[4pt] \text{Multiply.} &&& -15 + 21 \\[4pt] \text{Add.} &&& 6 \end{array}$$

{{< fillin
  question="Simplify: $12(-9) \div (-3)^3$."
  answer="4"
  hint="Exponents first: $(-3)^3 = -27$. Then multiply and divide left to right."
>}}

{{< fillin
  question="Simplify: $-27 \div 3 + (-5)(-6)$."
  answer="21"
  hint="Divide and multiply before adding: $-9 + 30$."
>}}

{{< fillin
  question="Simplify: $18(-4) \div (-2)^3$."
  answer="9"
  hint="Exponents first: $(-2)^3 = -8$. Then multiply and divide left to right."
>}}

{{< fillin
  question="Simplify: $-32 \div 4 + (-2)(-7)$."
  answer="6"
  hint="Divide and multiply before adding: $-8 + 14$."
>}}

## Evaluate variable expressions with integers

Remember that to evaluate an expression means to substitute a number for the
variable in the expression. Now we can use negative numbers as well as positive
numbers.

**Example.** Evaluate $4x^2 - 2xy + 3y^2$ when $x = 2$, $y = -1$.

$$\begin{array}{lrcl} & && 4x^2 - 2xy + 3y^2 \\[4pt] \text{Substitute } x = 2, y = -1. \text{ Use parentheses.} &&& 4(2)^2 - 2(2)(-1) + 3(-1)^2 \\[4pt] \text{Simplify exponents.} &&& 4 \cdot 4 - 2(2)(-1) + 3 \cdot 1 \\[4pt] \text{Multiply.} &&& 16 - (-4) + 3 \\[4pt] \text{Subtract.} &&& 20 + 3 \\[4pt] \text{Add.} &&& 23 \end{array}$$

{{< fillin
  question="Evaluate $3x^2 - 2xy + 6y^2$ when $x = 1$, $y = -2$."
  answer="31"
  hint="Substitute with parentheses, simplify the exponents, then follow the order of operations."
>}}

{{< fillin
  question="Evaluate $4x^2 - xy + 5y^2$ when $x = -2$, $y = 3$."
  answer="67"
  hint="Substitute with parentheses, simplify the exponents, then follow the order of operations."
>}}

## Translate phrases to expressions with integers

Our earlier work translating English to algebra also applies to phrases that
include both positive and negative numbers.

**Example.** Translate and simplify: the sum of $8$ and $-12$, increased by
$3$.

$$\begin{array}{lrcl} \text{Translate.} & && [8 + (-12)] + 3 \\[4pt] \text{Simplify. Be careful not to confuse the brackets with an absolute value sign.} &&& (-4) + 3 \\[4pt] \text{Add.} & && -1 \end{array}$$

{{< fillin
  question="Translate and simplify the sum of $9$ and $-16$, increased by $4$."
  answer="-3"
  hint="Translate to $[9 + (-16)] + 4$, then simplify inside the brackets first."
>}}

{{< fillin
  question="Translate and simplify the sum of $-8$ and $-12$, increased by $7$."
  answer="-13"
  hint="Translate to $[-8 + (-12)] + 7$, then simplify inside the brackets first."
>}}

## Use integers in applications

We'll outline a plan to solve applications. It's hard to find something if we
don't know what we're looking for or what to call it! So when we solve an
application, we first need to determine what the problem is asking us to find.
Then we'll write a phrase that gives the information to find it. We'll translate
the phrase into an expression and then simplify the expression to get the
answer. Finally, we summarize the answer in a sentence to make sure it makes
sense.

**Example.** In the morning, the temperature in Kendallville, Indiana was $11$
degrees. By mid-afternoon, the temperature had dropped to $-9$ degrees. What
was the difference in the morning and afternoon temperatures?

| Step | | |
| :--- | :--- | :--- |
| Step 1. Read the problem. | | Make sure all the words and ideas are understood. |
| Step 2. Identify what we are asked to find. | | The difference of the morning and afternoon temperatures. |
| Step 3. Write a phrase that gives the information to find it. | | the difference of $11$ and $-9$ |
| Step 4. Translate the phrase to an expression. | | $11 - (-9)$ |
| Step 5. Simplify the expression. | | $20$ |
| Step 6. Answer the question with a complete sentence. | | The difference in temperatures was $20$ degrees. |

{{< fillin
  question="In the morning, the temperature in Anchorage, Alaska was $15$ degrees. By mid-afternoon the temperature had dropped to $30$ degrees below zero. What was the difference, in degrees, in the morning and afternoon temperatures? Enter just the number."
  answer="45"
  hint="Find the difference of $15$ and $-30$: translate to $15 - (-30)$."
>}}

{{< fillin
  question="The temperature in Denver was $-6$ degrees at lunchtime. By sunset the temperature had dropped to $-15$ degrees. What was the difference, in degrees, in the lunchtime and sunset temperatures? Enter just the number."
  answer="9"
  hint="Find the difference of $-6$ and $-15$: translate to $-6 - (-15)$."
>}}

{{< callout type="info" >}}
  **How to use integers in applications.**

  1. **Read** the problem. Make sure all the words and ideas are understood.
  2. **Identify** what we are asked to find.
  3. **Write a phrase** that gives the information to find it.
  4. **Translate** the phrase to an expression.
  5. **Simplify** the expression.
  6. **Answer** the question with a complete sentence.
{{< /callout >}}

## Key terms

**negative number** — a number less than $0$; on the number line, the negative
numbers lie to the left of zero. **opposite** — the number that is the same
distance from zero on the number line but on the opposite side of zero; the
opposite of $a$ is written $-a$. **absolute value** — the distance of a number
from $0$ on the number line, written $|n|$; it is always greater than or equal
to zero. **integers** — the whole numbers and their opposites:
$\ldots -3, -2, -1, 0, 1, 2, 3 \ldots$ **neutral pair** — a positive counter
paired with a negative counter, whose value is zero.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 1.2: Integers](https://openstax.org/books/intermediate-algebra-2e/pages/1-2-integers) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the number-line figures as accessible inline graphics, rendered the two-color-counter models and step tables as typeset math, and presented the multiplication/division sign rules as tables; omitted the Be Prepared note, media link, and end-of-section exercises; and converted the "Try It" practice problems into interactive exercises with instant feedback.</small>
