---
title: Introduction to Integers
description: >-
  Locating positive and negative numbers on the number line, ordering
  integers, finding opposites, simplifying expressions with absolute value,
  and translating word phrases into expressions with integers — adapted from
  OpenStax Prealgebra 2e, Section 3.1.
source_section: "3.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** locate positive and
  negative numbers on the number line, order positive and negative numbers,
  find opposites, simplify expressions with absolute value, and translate
  word phrases into expressions with integers.
{{< /callout >}}

At over $29{,}000$ feet, Mount Everest stands as the tallest peak on land.
Describing the drastic change in elevation that climbers experience, and
the change in temperature as they climb, requires numbers that extend both
above and below zero. In this chapter, we describe these kinds of numbers
and the operations using them.

## Locate positive and negative numbers on the number line

Have you ever experienced a temperature below zero? A **negative number**
is a number that is less than $0$. Very cold temperatures are measured in
degrees below zero. For example, $-1°\text{F}$ (read "negative one degree
Fahrenheit") is $1$ degree below $0$. A minus sign is shown before a number
to indicate that it is negative.

Temperatures are not the only negative numbers. A bank overdraft is
another example: if a person writes a check for more than is in the
account, the balance is negative. Elevations, too, can be negative — the
elevation at sea level is $0$ feet, elevations above sea level are
positive, and elevations below sea level are negative. The elevation of
the Dead Sea, which borders Israel and Jordan, is about $1{,}302$ feet
below sea level, so its elevation is $-1{,}302$ feet. Depths below the
ocean surface are described the same way: a submarine at a depth of $500$
feet is at position $-500$ feet.

Both positive and negative numbers can be shown on a number line. The
counting numbers ($1, 2, 3, \dots$) are all positive; we could write a
plus sign before a positive number, such as $+2$, but it's customary to
omit it — if a number has no sign, it is assumed positive. To include
negative numbers, we extend the number line to the left of zero, marking
off intervals the same width as those on the positive side, and label
them $-1, -2, -3,$ and so on:

<svg viewBox="0 0 460 70" role="img" aria-label="A number line from -4 to 4 with zero in the middle. Negative numbers are labeled to the left of zero; positive numbers to the right." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="35" x2="440" y2="35" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-intro)" markerStart="url(#arrow-intro-start)" />
  <defs>
    <marker id="arrow-intro" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor" /></marker>
    <marker id="arrow-intro-start" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M8,0 L0,4 L8,8 Z" fill="currentColor" /></marker>
  </defs>
  {[-4,-3,-2,-1,0,1,2,3,4].map((n,i) => (
    <g key={n}>
      <line x1={20+i*50} y1="28" x2={20+i*50} y2="42" stroke="currentColor" strokeWidth="1.5" />
      <text x={20+i*50} y="60" textAnchor="middle" fontSize="15" fill="currentColor">{n}</text>
    </g>
  ))}
</svg>

The arrows at either end of the line show that the number line extends
forever in each direction: there is no greatest positive number, and no
smallest negative number.

**Example.** Plot the numbers $3$, $-3$, and $-2$ on a number line.

To plot $3$, start at $0$ and count three units to the right. To plot
$-3$, start at $0$ and count three units to the left. To plot $-2$, start
at $0$ and count two units to the left.

<svg viewBox="0 0 460 60" role="img" aria-label="A number line from -4 to 4 with points plotted at 3, -3, and -2." style={{ maxWidth: 460, display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="30" x2="440" y2="30" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-ex1)" markerStart="url(#arrow-ex1-start)" />
  <defs>
    <marker id="arrow-ex1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="currentColor" /></marker>
    <marker id="arrow-ex1-start" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M8,0 L0,4 L8,8 Z" fill="currentColor" /></marker>
  </defs>
  {[-4,-3,-2,-1,0,1,2,3,4].map((n,i) => (
    <g key={n}>
      <line x1={20+i*50} y1="23" x2={20+i*50} y2="37" stroke="currentColor" strokeWidth="1.5" />
      <text x={20+i*50} y="55" textAnchor="middle" fontSize="15" fill="currentColor">{n}</text>
    </g>
  ))}
  <circle cx={20+7*50} cy="30" r="5" fill="currentColor" />
  <circle cx={20+1*50} cy="30" r="5" fill="currentColor" />
  <circle cx={20+2*50} cy="30" r="5" fill="currentColor" />
</svg>

{{< fillin
  question="Plot the number $-1$ on a number line: how many units, and in which direction from $0$, do you count? Enter the number of units (just the digit, no sign)."
  answer="1"
  hint="The number $-1$ is $1$ unit to the left of $0$."
>}}

## Order positive and negative numbers

We can use the number line to compare and order positive and negative
numbers. Going from left to right, numbers increase in value; going from
right to left, numbers decrease. Just as with positive numbers, we use
$a < b$ ("$a$ is less than $b$") when $a$ is to the left of $b$ on the
number line, and $a > b$ ("$a$ is greater than $b$") when $a$ is to the
right of $b$.

For example, $-2$ is to the left of $1$ on the number line, so
$-2 < 1$ — and equivalently, $1 > -2$. Likewise, $-1$ is to the right of
$-3$, so $-1 > -3$, and $-3 < -1$.

**Example.** Order each pair using $<$ or $>$: (a) $14 \_\_ 6$,
(b) $-1 \_\_ 9$, (c) $-1 \_\_ -4$, (d) $2 \_\_ -20$.

Plot both numbers of each pair on a number line, then compare their
positions: (a) $14$ is to the right of $6$, so $14 > 6$; (b) $-1$ is to
the left of $9$, so $-1 < 9$; (c) $-1$ is to the right of $-4$, so
$-1 > -4$; (d) $2$ is to the right of $-20$, so $2 > -20$.

{{< fillin
  question="Fill in < or > to make a true statement: $-3 \_\_ -7$. Enter the full inequality, e.g. $2 > 1$."
  answer="-3>-7"
  hint="Plot both on a number line — the number farther right is greater."
>}}

{{< fillin
  question="Fill in < or > to make a true statement: $5 \_\_ -17$. Enter the full inequality, e.g. $2 > 1$."
  answer="5>-17"
  hint="Every positive number is to the right of every negative number on the number line."
>}}

## Find opposites

On the number line, the negative numbers are a mirror image of the
positive numbers with zero in the middle. Because $2$ and $-2$ are the
same distance from zero, they are called **opposites**. The opposite of
$2$ is $-2$, and the opposite of $-2$ is $2$.

{{< callout type="info" >}}
  **Opposite.** The opposite of a number is the number that is the same
  distance from zero on the number line, but on the opposite side of
  zero.
{{< /callout >}}

The symbol "$-$" is used in three different ways, and its meaning
depends on how it's used:

| Symbol | Meaning |
| :--- | :--- |
| $10 - 4$ | Between two numbers: the operation of *subtraction*. Read $10-4$ as "$10$ minus $4$." |
| $-8$ | In front of a number: a *negative number*. Read $-8$ as "negative eight." |
| $-x$ | In front of a variable: the *opposite* of the variable. Read $-x$ as "the opposite of $x$." |
| $-(-2)$ | Two signs together: the sign in the parentheses makes the number negative, and the sign outside takes the opposite. Read $-(-2)$ as "the opposite of $-2$." |

{{< callout type="info" >}}
  **Opposite notation.** $-a$ means the opposite of the number $a$. The
  notation $-a$ is read "the opposite of $a$."
{{< /callout >}}

**Example.** Simplify $-(-6)$. The opposite of $-6$ is $6$, so
$-(-6) = 6$.

{{< fillin
  question="Simplify: $-(-1)$"
  answer="1"
  hint="The opposite of a negative number is its positive counterpart."
>}}

The set of counting numbers, their opposites, and $0$ is the set of
**integers**.

{{< callout type="info" >}}
  **Integers.** Integers are counting numbers, their opposites, and zero:

  $$\dots, -3, -2, -1, 0, 1, 2, 3, \dots$$
{{< /callout >}}

We must be careful with signs when evaluating the opposite of a variable.

**Example.** Evaluate $-x$: (a) when $x = 8$; (b) when $x = -8$.

(a) Substitute $8$ for $x$: $-x = -(8) = -8$.
(b) Substitute $-8$ for $x$: $-x = -(-8) = 8$.

{{< fillin
  question="Evaluate $-n$ when $n = 4$."
  answer="-4"
  hint="Substitute $4$ for $n$, then take the opposite."
>}}

{{< fillin
  question="Evaluate $-n$ when $n = -4$."
  answer="4"
  hint="Substitute $-4$ for $n$: $-n$ becomes $-(-4)$. The opposite of a negative is positive."
>}}

## Simplify expressions with absolute value

Numbers such as $5$ and $-5$ are opposites because they are the same
distance from $0$ on the number line — they are both five units from
$0$. The distance between $0$ and a number on the number line is called
the **absolute value** of that number. Because distance is never
negative, the absolute value of any number is never negative.

The symbol for absolute value is two vertical bars around a number:
the absolute value of $5$ is written $|5|$, and the absolute value of
$-5$ is written $|-5|$. Since both are five units from $0$,
$|5| = 5$ and $|-5| = 5$.

{{< callout type="info" >}}
  **Absolute value.** The absolute value of a number is its distance
  from $0$ on the number line. The absolute value of a number $n$ is
  written $|n|$, and $|n| \ge 0$ for all numbers.
{{< /callout >}}

**Example.** Simplify: (a) $|3|$, (b) $|-44|$, (c) $|0|$.

(a) $3$ is $3$ units from zero, so $|3| = 3$.
(b) $-44$ is $44$ units from zero, so $|-44| = 44$.
(c) $0$ is already at zero, so $|0| = 0$.

{{< fillin
  question="Simplify: $|12|$"
  answer="12"
  hint="How many units is $12$ from zero?"
>}}

{{< fillin
  question="Simplify: $-|-28|$"
  answer="-28"
  hint="First take the absolute value of $-28$ (a positive result), then apply the negative sign in front."
>}}

Absolute value bars act like grouping symbols. First simplify inside the
bars as much as possible; then take the absolute value; then continue
with any operations outside the bars.

**Example.** Simplify $|9-3|$ and $4|-2|$.

For $|9-3|$: simplify inside the bars first, $|9-3| = |6|$, then take
the absolute value: $6$.

For $4|-2|$: take the absolute value first, $|-2| = 2$, then multiply:
$4 \cdot 2 = 8$.

{{< fillin
  question="Simplify: $|12 - 9|$"
  answer="3"
  hint="Simplify inside the absolute value bars first, then take the absolute value."
>}}

{{< fillin
  question="Simplify: $3|-6|$"
  answer="18"
  hint="Take the absolute value of $-6$ first, then multiply by $3$."
>}}

**Example.** Simplify $24 - |19 - 3(6-2)|$.

Follow the order of operations, treating the absolute value bars like
grouping symbols. Simplify the innermost parentheses first:
$24 - |19 - 3(4)|$. Multiply: $24 - |19-12|$. Subtract inside the bars:
$24 - |7|$. Take the absolute value: $24 - 7$. Subtract: $17$.

{{< fillin
  question="Simplify: $19 - |11 - 4(3 - 1)|$"
  answer="16"
  hint="Innermost parentheses first ($3 - 1 = 2$), then multiply ($4 \cdot 2 = 8$), then subtract inside the bars ($11 - 8 = 3$), then take the absolute value and subtract from $19$."
>}}

## Translate word phrases into expressions with integers

Now we can translate word phrases into expressions with integers. Look
for words that indicate a negative sign — *negative* and *opposite* both
signal one.

**Example.** Translate each phrase into an expression with integers:
(a) the opposite of positive fourteen; (b) the opposite of $-11$;
(c) negative sixteen; (d) two minus negative seven.

(a) $-14$; (b) $-(-11) = 11$; (c) $-16$; (d) $2 - (-7)$.

{{< fillin
  question="Translate into an expression with integers: the opposite of negative nineteen. Give the simplified value."
  answer="19"
  hint="The opposite of a negative number is $-(-19)$, which simplifies to a positive number."
>}}

{{< fillin
  question="Translate into an expression with integers: negative eight minus negative five. Give the simplified value."
  answer="-3"
  hint="Write it as $-8 - (-5)$, then simplify — subtracting a negative is the same as adding its opposite."
>}}

Negative numbers describe many real-world situations. Look for key
phrases, then look for words that indicate a negative sign, and don't
forget to include units of measurement.

**Example.** Translate into an expression with integers: (a) the
temperature is $12$ degrees Fahrenheit below zero; (b) the football team
had a gain of $3$ yards; (c) the elevation of the Dead Sea is $1{,}302$
feet below sea level; (d) a checking account is overdrawn by $\text{\textdollar}40$.

(a) *Below zero* signals a negative number: $-12°\text{F}$. (b) *Gain*
signals a positive number: $3$ yards. (c) *Below sea level* signals a
negative number: $-1{,}302$ feet. (d) *Overdrawn* signals a negative
number: $-\text{\textdollar}40$.

{{< fillin
  question="Translate into an expression with integers: the football team had a gain of 5 yards."
  answer="5"
  hint="'Gain' signals a positive number."
>}}

{{< fillin
  question="Translate into an expression with integers: the scuba diver was 30 feet below the surface of the water. Give the number of feet as a signed integer."
  answer="-30"
  hint="'Below the surface' signals a negative number."
>}}

## Key terms

**negative number** — a number that is less than $0$. **opposite** — the
number that is the same distance from zero on the number line, but on
the opposite side of zero. **integers** — counting numbers, their
opposites, and zero. **absolute value** — the distance of a number from
$0$ on the number line, written $|n|$.

---

<small>This section is adapted from [Prealgebra 2e, Section 3.1: Introduction to Integers](https://openstax.org/books/prealgebra-2e/pages/3-1-introduction-to-integers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the number-line figures as accessible inline graphics; condensed prose; omitted the Be Prepared quiz, Manipulative Mathematics callout, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
