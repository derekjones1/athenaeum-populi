---
title: Introduction to Whole Numbers
description: >-
  Counting numbers and whole numbers, place value, naming and writing whole
  numbers, and rounding — adapted from OpenStax Prealgebra 2e, Section 1.1.
source_section: "1.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** identify counting
  numbers and whole numbers, model whole numbers, identify the place value of
  a digit, use place value to name and write whole numbers, and round whole
  numbers.
{{< /callout >}}

## Identify counting numbers and whole numbers

Learning algebra is similar to learning a language. You start with a basic
vocabulary and then add to it as you go along. You need to practice often
until the vocabulary becomes easy to you. The more you use the vocabulary,
the more familiar it becomes.

Algebra uses numbers and symbols to represent words and ideas. The most basic
numbers are those we use to count objects:

$$1, 2, 3, 4, 5, \dots$$

These are called the **counting numbers** (also called *natural numbers*).
The notation "$\dots$" is called an **ellipsis** — a way of showing "and so
on," or that the pattern continues endlessly.

The discovery of the number zero was a big step in the history of
mathematics. Including zero with the counting numbers gives a new set of
numbers, the **whole numbers**:

$$0, 1, 2, 3, 4, 5, \dots$$

Counting numbers and whole numbers can be visualized on a **number line**:

<svg viewBox="0 0 560 70" role="img" aria-label="A number line from 0 to 6 in increments of one. Numbers increase from left to right — larger to the right, smaller to the left." style={{ maxWidth: 560, width: '100%', display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="35" x2="540" y2="35" stroke="currentColor" strokeWidth="1.5" />
  <polygon points="540,35 530,30 530,40" fill="currentColor" />
  <polygon points="20,35 30,30 30,40" fill="currentColor" />
  {[0, 1, 2, 3, 4, 5, 6].map((n) => (
    <g key={n}>
      <line x1={60 + n * 73} y1="28" x2={60 + n * 73} y2="42" stroke="currentColor" strokeWidth="1.5" />
      <text x={60 + n * 73} y="62" textAnchor="middle" fontSize="15" fill="currentColor">{n}</text>
    </g>
  ))}
  <text x="530" y="18" textAnchor="end" fontSize="12" fill="currentColor">larger →</text>
  <text x="30" y="18" fontSize="12" fill="currentColor">← smaller</text>
</svg>

The numbers on the number line increase from left to right and decrease from
right to left. The point labeled $0$ is called the **origin**. The points are
equally spaced to the right of $0$ and labeled with the counting numbers.
When a number is paired with a point, it is called the **coordinate** of the
point.

**Example.** Which of the numbers $0, \tfrac{1}{4}, 3, 5.2, 15, 105$ are
(a) counting numbers, (b) whole numbers?

(a) The counting numbers start at $1$, so $0$ is not a counting number. The
counting numbers here are $3, 15,$ and $105$.

(b) The whole numbers are the counting numbers together with $0$, so the
whole numbers here are $0, 3, 15,$ and $105$.

The numbers $\tfrac{1}{4}$ and $5.2$ are neither counting numbers nor whole
numbers — they belong to families of numbers we will meet later.

{{< fillin
  question="What is the smallest whole number?"
  answer="0"
  hint="Whole numbers are the counting numbers plus one extra number — the one at the origin of the number line."
>}}

## Model whole numbers

Our number system is called a **place value system**, because the value of a
digit depends on its position — its *place* — in the number. The numbers
$537$ and $735$ use exactly the same digits, but they have different values
because the $7$ and the $5$ sit in different places.

Money gives a familiar model of place value. Suppose a wallet contains three
\$100 bills, seven \$10 bills, and four \$1 bills. Find the total value of
each kind of bill, then add:

$$\$300 + \$70 + \$4 = \$374$$

The three digits of $374$ — the $3$, the $7$, and the $4$ — come straight
from the three kinds of bills.

**Base-10 blocks** are another way to model place value: a single small block
represents $1$, a rod of ten blocks represents $10$, and a square of one
hundred blocks ($10$ rods) represents $100$. The number $138$, modeled with
$1$ hundreds square, $3$ tens rods, and $8$ ones blocks, is:

| Digit | Place value | Value | Total value |
| :---: | :---------- | ----: | ----------: |
| $1$   | hundreds    | $100$ | $100$       |
| $3$   | tens        | $10$  | $30$        |
| $8$   | ones        | $1$   | $+\ 8$      |
|       |             |       | $138$       |

**Example.** What number is modeled by $2$ hundreds squares, $1$ tens rod,
and $5$ ones blocks?

There are $2$ hundreds, which is $200$; there is $1$ ten, which is $10$; and
there are $5$ ones, which is $5$. In place value notation:

$$200 + 10 + 5 = 215$$

{{< fillin
  question="Base-10 blocks show 1 hundreds squares, 7 tens rods, and 6 ones blocks. What number is modeled?"
  answer="176"
  hint="Write it in place value notation: $100 + 70 + 6$."
>}}

## Identify the place value of a digit

A **place value chart** summarizes how each place in a number has a different
value. The place values are separated into groups of three, called
**periods**: *ones, thousands, millions, billions, trillions*, and so on. In
a written number, commas separate the periods. The value of each place is ten
times the value of the place to its right.

Here is the number $5{,}278{,}194$ in a place value chart:

|          | Millions | Hundred<br />thousands | Ten<br />thousands | Thousands | Hundreds | Tens | Ones |
| -------- | :------: | :--------------------: | :----------------: | :-------: | :------: | :--: | :--: |
| Digit    | $5$      | $2$                    | $7$                | $8$       | $1$      | $9$  | $4$  |

- The digit $5$ is in the millions place. Its value is $5{,}000{,}000$.
- The digit $2$ is in the hundred thousands place. Its value is $200{,}000$.
- The digit $7$ is in the ten thousands place. Its value is $70{,}000$.
- The digit $8$ is in the thousands place. Its value is $8{,}000$.
- The digit $1$ is in the hundreds place. Its value is $100$.
- The digit $9$ is in the tens place. Its value is $90$.
- The digit $4$ is in the ones place. Its value is $4$.

**Example.** In the number $63{,}407{,}218$, find the place value of each of
these digits:

- The $7$ is in the *thousands* place.
- The $0$ is in the *ten thousands* place.
- The $1$ is in the *tens* place.
- The $6$ is in the *ten millions* place.
- The $3$ is in the *millions* place.

{{< fillin
  question="In the number 27,493,615 — what is the value of the digit 4?"
  answer="400000"
  answerDisplay="400,000 — the 4 is in the hundred thousands place"
  hint="Write the number in a place value chart, starting from the ones place on the right: 5 ones, 1 ten, 6 hundreds, 3 thousands, 9 ten thousands, 4 …"
>}}

## Use place value to name whole numbers

When you write a check, you write out the number in words as well as in
digits. To name a whole number in words:

1. Starting at the digit on the left, name the number in each period,
   followed by the period name. Do not include the period name for the ones.
2. Use commas in the number to separate the periods.

So the number $37{,}519{,}248$ is named: *thirty-seven million, five hundred
nineteen thousand, two hundred forty-eight*. The millions period ($37$), the
thousands period ($519$), and the ones period ($248$) are each named in turn,
and the ones period's name is dropped.

Notice that the word *and* is not used when naming a whole number.

**Example.** Name the number $8{,}165{,}432{,}098{,}710$ in words.

| Period (left to right)        | In words                          |
| :---------------------------- | :-------------------------------- |
| $8$ — trillions               | eight trillion                    |
| $165$ — billions              | one hundred sixty-five billion    |
| $432$ — millions              | four hundred thirty-two million   |
| $098$ — thousands             | ninety-eight thousand             |
| $710$ — ones                  | seven hundred ten                 |

Putting it together: *eight trillion, one hundred sixty-five billion, four
hundred thirty-two million, ninety-eight thousand, seven hundred ten*.

## Use place value to write whole numbers

Now reverse the process, and write a number given in words as digits:

1. Identify the words that indicate periods. (Remember, the ones period is
   never named.)
2. Draw three blanks to indicate the number of places needed in each period,
   and separate the periods by commas.
3. Name the number in each period and place the digits in the correct place
   value position.

**Example.** Write *nine billion, two hundred forty-six million, seventy-three
thousand, one hundred eighty-nine* using digits.

The words *billion*, *million*, and *thousand* indicate the periods: $9$
billions, $246$ millions, $073$ thousands, $189$ ones — that is,
$9{,}246{,}073{,}189$.

Notice that a zero was needed as a place-holder in the hundred thousands
place ("seventy-three thousand" fills only two of the three places in the
thousands period). Every period after the first must have all three places
filled, using zeros as needed.

{{< fillin
  question="Write in standard form: fifty-three million, eight hundred nine thousand, fifty-one."
  answer="53809051"
  answerDisplay="53,809,051"
  hint="Three periods: millions 53, thousands 809, ones 051 — keep three places per period, padding with zeros."
>}}

## Round whole numbers

In 2013, the U.S. Census Bureau reported the population of New York State as
$19{,}651{,}127$ people. Often it is enough to say the population is
*approximately* $20$ million — close to the exact value, but not exact. The
process of approximating a number is called **rounding**.

The number line helps you see how rounding works. Suppose we want to round
$76$ to the nearest ten. Is $76$ closer to $70$ or to $80$?

<svg viewBox="0 0 560 70" role="img" aria-label="A number line from 70 to 80 in increments of one, with a dot marked at 76. The dot at 76 is closer to 80 than to 70." style={{ maxWidth: 560, width: '100%', display: 'block', margin: '1.5rem auto' }}>
  <line x1="20" y1="35" x2="540" y2="35" stroke="currentColor" strokeWidth="1.5" />
  {[70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80].map((n, i) => (
    <g key={n}>
      <line x1={40 + i * 48} y1="28" x2={40 + i * 48} y2="42" stroke="currentColor" strokeWidth="1.5" />
      <text x={40 + i * 48} y="62" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight={n === 70 || n === 80 ? 'bold' : 'normal'}>{n}</text>
    </g>
  ))}
  <circle cx={40 + 6 * 48} cy="35" r="6" fill="var(--ap-error, #b42318)" />
</svg>

$76$ is closer to $80$, so $76$ rounded to the nearest ten is $80$. Likewise
$72$ is closer to $70$, so $72$ rounded to the nearest ten is $70$.

What about $75$ — exactly midway between $70$ and $80$? So that everyone
rounds the same way in cases like this, mathematicians have agreed to round
to the higher number: $75$ rounded to the nearest ten is $80$.

More generally, to round a number to a specific place value:

1. Locate the given place value. All digits to the left of it stay the same
   (unless carrying changes them — see step 3).
2. Underline the digit to the *right* of the given place value.
3. Is that underlined digit greater than or equal to $5$?
   - **Yes** — add $1$ to the digit in the given place value. (If that digit
     is a $9$, it becomes $0$ and the $1$ carries to the next digit left.)
   - **No** — leave the digit in the given place value unchanged.
4. Replace all digits to the right of the given place value with zeros.

**Example.** Round $843$ to the nearest ten. The tens digit is $4$; the digit
to its right is $3$. Since $3 < 5$, the $4$ stays, and the $3$ becomes $0$:
$843$ rounds to $840$.

**Example.** Round $23{,}658$ to the nearest hundred. The hundreds digit is
$6$; the digit to its right is $5$. Since $5 \ge 5$, round up: the $6$
becomes $7$ and the digits to its right become zeros — $23{,}700$.

**Example.** Round $3{,}978$ to the nearest hundred. The hundreds digit is
$9$; the digit to its right is $7$, so we round up. The $9$ becomes $0$ and
the $1$ carries: $3{,}978$ rounds to $4{,}000$.

{{< fillin
  question="Round 157 to the nearest ten."
  answer="160"
  hint="The digit to the right of the tens place is 7. Is it 5 or more?"
>}}

{{< fillin
  question="Round 4,951 to the nearest hundred."
  answer="5000"
  answerDisplay="5,000"
  hint="The hundreds digit is 9 and the digit to its right is 5 — rounding up carries all the way over."
>}}

## Key terms

**counting numbers** — the numbers $1, 2, 3, \dots$ used to count objects;
also called natural numbers. **whole numbers** — the counting numbers
together with zero: $0, 1, 2, 3, \dots$ **origin** — the point labeled $0$ on
the number line. **coordinate** — the number paired with a point on the
number line. **place value system** — our number system, in which the value
of a digit depends on its position in the number. **period** — a group of
three place values, separated by commas in a written number. **rounding** —
the process of approximating a number to a given place value.

---

<small>This section is adapted from [Prealgebra 2e, Section 1.1: Introduction to Whole Numbers](https://openstax.org/books/prealgebra-2e/pages/1-1-introduction-to-whole-numbers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: condensed prose, redrew figures as accessible tables and inline graphics, and converted practice problems ("Try Its") into interactive exercises with instant feedback.</small>
