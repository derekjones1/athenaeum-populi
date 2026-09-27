---
title: Introduction to Whole Numbers
description: >-
  Place value with whole numbers, naming and rounding whole numbers,
  multiples and divisibility tests, and prime factorization and the least
  common multiple — adapted from OpenStax Elementary Algebra 2e, Section 1.1.
source_section: "1.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use place value with whole numbers
- Identify multiples and apply divisibility tests
- Find prime factorizations and least common multiples
{{< /callout >}}

## Use place value with whole numbers

The most basic numbers used in algebra are the numbers we use to count
objects in our world: $1, 2, 3, 4$, and so on. These are called the
**counting numbers**. Counting numbers are also called *natural numbers*. If
we add zero to the counting numbers, we get the set of **whole numbers**.

Counting numbers: $1, 2, 3, \dots$

Whole numbers: $0, 1, 2, 3, \dots$

The notation "$\dots$" is called *ellipsis* and means "and so on," or that
the pattern continues endlessly.

We can visualize counting numbers and whole numbers on a **number line**,
which gets larger from left to right and smaller from right to left:

<svg viewBox="0 0 560 90" role="img" aria-label="A number line from 0 to 6, marked at every whole number. Above it, an arrow labeled smaller runs left from 3 toward 0, and an arrow labeled larger runs right from just past 3 to 6." style="max-width: 560px; width: 100%; display: block; margin: 1.5rem auto">
  <text x="140" y="16" text-anchor="middle" font-size="14" fill="currentColor">smaller</text>
  <line x1="270" y1="20" x2="60" y2="20" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowLeft)" />
  <text x="440" y="16" text-anchor="middle" font-size="14" fill="currentColor">larger</text>
  <line x1="310" y1="20" x2="520" y2="20" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowRight)" />
  <defs>
    <marker id="arrowLeft" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
    </marker>
    <marker id="arrowRight" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
    </marker>
  </defs>
  <line x1="40" y1="55" x2="540" y2="55" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrowRight)" />
  <g>
      <line x1="40" y1="48" x2="40" y2="62" stroke="currentColor" stroke-width="1.5" />
      <text x="40" y="80" text-anchor="middle" font-size="14" fill="currentColor">0</text>
    </g><g>
      <line x1="120" y1="48" x2="120" y2="62" stroke="currentColor" stroke-width="1.5" />
      <text x="120" y="80" text-anchor="middle" font-size="14" fill="currentColor">1</text>
    </g><g>
      <line x1="200" y1="48" x2="200" y2="62" stroke="currentColor" stroke-width="1.5" />
      <text x="200" y="80" text-anchor="middle" font-size="14" fill="currentColor">2</text>
    </g><g>
      <line x1="280" y1="48" x2="280" y2="62" stroke="currentColor" stroke-width="1.5" />
      <text x="280" y="80" text-anchor="middle" font-size="14" fill="currentColor">3</text>
    </g><g>
      <line x1="360" y1="48" x2="360" y2="62" stroke="currentColor" stroke-width="1.5" />
      <text x="360" y="80" text-anchor="middle" font-size="14" fill="currentColor">4</text>
    </g><g>
      <line x1="440" y1="48" x2="440" y2="62" stroke="currentColor" stroke-width="1.5" />
      <text x="440" y="80" text-anchor="middle" font-size="14" fill="currentColor">5</text>
    </g><g>
      <line x1="520" y1="48" x2="520" y2="62" stroke="currentColor" stroke-width="1.5" />
      <text x="520" y="80" text-anchor="middle" font-size="14" fill="currentColor">6</text>
    </g>
</svg>

While this number line shows only the whole numbers $0$ through $6$, the
numbers keep going without end.

Our number system is called a place value system, because the value of a
digit depends on its position in a number. The place values are separated
into groups of three, which are called *periods*. The periods are *ones,
thousands, millions, billions, trillions*, and so on. In a written number,
commas separate the periods.

Each period has a hundreds, a tens, and a ones place: in the thousands
period these are the hundred-thousands, ten-thousands, and thousands places.
The table below shows the place values for the number $5{,}278{,}194$, one
period to a row:

| Period | Hundreds | Tens | Ones |
| :--- | :---: | :---: | :---: |
| Trillions | | | |
| Billions | | | |
| Millions | | | $5$ |
| Thousands | $2$ | $7$ | $8$ |
| Ones | $1$ | $9$ | $4$ |

The digit $5$ is in the millions place. The digit $2$ is in the
hundred-thousands place. The digit $7$ is in the ten-thousands place. The
digit $8$ is in the thousands place. The digit $1$ is in the hundreds place.
The digit $9$ is in the tens place. The digit $4$ is in the ones place.

**Example.** In the number $63{,}407{,}218$, find the place value of each
digit: (a) $7$ (b) $0$ (c) $1$ (d) $6$ (e) $3$

Placing the number in the place value chart:

| Ten-millions | Millions | Hundred-thousands | Ten-thousands | Thousands | Hundreds | Tens | Ones |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $6$ | $3$ | $4$ | $0$ | $7$ | $2$ | $1$ | $8$ |

(a) The $7$ is in the thousands place. (b) The $0$ is in the
ten-thousands place. (c) The $1$ is in the tens place. (d) The $6$ is in the
ten-millions place. (e) The $3$ is in the millions place.

{{< multiplechoice
  question="In the number $27{,}493{,}615$, what is the place value of the digit $4$?"
  answer="hundred thousands"
  hint="Write the number in a place value chart, filling the places from the ones place on the right, and read off the column the digit lands in."
>}}
ten thousands
hundred thousands
millions
thousands
{{< /multiplechoice >}}

{{< multiplechoice
  question="In the number $27{,}493{,}615$, what is the place value of the digit $7$?"
  answer="millions"
  hint="Split the number into periods of three digits from the right, then find which period the digit sits in and which place it holds within that period."
>}}
ten millions
hundred thousands
millions
billions
{{< /multiplechoice >}}

When you write a check, you write out the number in words as well as in
digits. To write a number in words, write the number in each period,
followed by the name of the period, without the *s* at the end. Start at the
left, where the periods have the largest value. The ones period is not
named. The commas separate the periods, so wherever there is a comma in the
number, put a comma between the words. For example, $74{,}218{,}369$ is
written as *seventy-four million, two hundred eighteen thousand, three
hundred sixty-nine*.

{{< callout type="info" >}}
  **Name a whole number in words.**

  1. Start at the left and name the number in each period, followed by the
     period name.
  2. Put commas in the number to separate the periods.
  3. Do not name the ones period.
{{< /callout >}}

**Example.** Name the number $8{,}165{,}432{,}098{,}710$ using words.

Naming the number in each period, followed by the period name: $8$ is
*eight trillion*, $165$ is *one hundred sixty-five billion*, $432$ is *four
hundred thirty-two million*, $098$ is *ninety-eight thousand*, and $710$ is
*seven hundred ten*. Putting the commas in to separate the periods, we get:
eight trillion, one hundred sixty-five billion, four hundred thirty-two
million, ninety-eight thousand, seven hundred ten.

We can also reverse the process, writing the digits from the name of a
number. To do this, we first look for the clue words that indicate the
periods. It helps to draw a blank for each place in a period and then fill
in the blanks with the digits, separating the periods with commas.

{{< callout type="info" >}}
  **Write a whole number using digits.**

  1. Identify the words that indicate periods. (Remember, the ones period is
     never named.)
  2. Draw blanks to indicate the number of places needed in each period.
     Separate the periods by commas.
  3. Name the number in each period and place the digits in the correct
     place value position.
{{< /callout >}}

**Example.** Write *nine billion, two hundred forty-six million,
seventy-three thousand, one hundred eighty-nine* as a whole number using
digits.

Identifying the words that indicate periods, then drawing blanks for the
number of places needed in each period (billions, millions, thousands,
ones): the billions period needs only one place here (nine), the millions
period needs three places ($246$), the thousands period needs three places
($073$), and the ones period needs three places ($189$). The number is
$9{,}246{,}073{,}189$.

{{< fillin
  question="Write the number two billion, four hundred sixty-six million, seven hundred fourteen thousand, fifty-one as a whole number using digits."
  answer="2466714051"
  answerForm="decimal"
  answerDisplay="2,466,714,051"
  hint="Draw a blank for each period — billions, millions, thousands, ones — and fill each one from the words, keeping every period except the first at three digits."
>}}

In 2013, the U.S. Census Bureau estimated the population of the state of
New York as $19{,}651{,}127$. We could say the population of New York was
approximately $20$ million. In many cases, you don't need the exact value;
an approximate number is good enough.

The process of approximating a number is called **rounding**. Numbers are
rounded to a specific place value, depending on how much accuracy is
needed. Saying that the population of New York is approximately $20$
million means that we rounded to the millions place.

{{< callout type="info" >}}
  **Round whole numbers.**

  1. Locate the given place value and mark it with an arrow. All digits to
     the left of the arrow do not change.
  2. Underline the digit to the right of the given place value.
  3. Is this digit greater than or equal to $5$?
     - Yes—add $1$ to the digit in the given place value.
     - No—do **not** change the digit in the given place value.
  4. Replace all digits to the right of the given place value with zeros.
{{< /callout >}}

**Example.** Round $23{,}658$ to the nearest hundred.

The hundreds place in $23{,}658$ holds the $6$. The digit to its right is
$5$, which is greater than or equal to $5$, so we add $1$ to the $6$,
making it $7$, and replace the remaining digits with zeros. So $23{,}658$
rounds to $23{,}700$.

**Example.** Round $103{,}978$ to the nearest (a) hundred (b) thousand
(c) ten thousand.

(a) The hundreds place holds the $9$. The digit to its right is $7$, which
is greater than or equal to $5$, so we add $1$ to the $9$ (which carries),
giving $103{,}978$ rounded to the nearest hundred as $104{,}000$.

(b) The thousands place holds the $3$. The digit to its right is $9$, which
is greater than or equal to $5$, so we add $1$ to the $3$, giving $4$.
Replacing the rest with zeros, $103{,}978$ rounded to the nearest thousand
is $104{,}000$.

(c) The ten-thousands place holds the $0$. The digit to its right is $3$,
which is less than $5$, so we leave the $0$ as is. Replacing the rest with
zeros, $103{,}978$ rounded to the nearest ten thousand is $100{,}000$.

{{< fillin
  question="Round 206,981 to the nearest ten thousand."
  answer="210000"
  answerForm="decimal"
  answerDisplay="210,000"
  hint="Locate the ten-thousands place, then look at the digit just to its right to decide whether to round up or leave it."
>}}

{{< fillin
  question="Round 784,951 to the nearest thousand."
  answer="785000"
  answerForm="decimal"
  answerDisplay="785,000"
  hint="Locate the thousands place, then look at the digit just to its right to decide whether to round up or leave it."
>}}

In algebra, we use a letter of the alphabet to represent a number whose
value may change or is unknown. Commonly used symbols are $a, b, c, m, n,
x$, and $y$.

## Identify multiples and apply divisibility tests

The numbers $2, 4, 6, 8, 10$, and $12$ are called **multiples** of $2$. A
multiple of $2$ can be written as the product of $2$ and a counting number:

$$\begin{array}{cccccc} 2, & 4, & 6, & 8, & 10, & 12, \dots \\[4pt] 2 \cdot 1, & 2 \cdot 2, & 2 \cdot 3, & 2 \cdot 4, & 2 \cdot 5, & 2 \cdot 6 \end{array}$$

Similarly, a multiple of $3$ would be the product of a counting number and
$3$:

$$\begin{array}{cccccc} 3, & 6, & 9, & 12, & 15, & 18, \dots \\[4pt] 3 \cdot 1, & 3 \cdot 2, & 3 \cdot 3, & 3 \cdot 4, & 3 \cdot 5, & 3 \cdot 6 \end{array}$$

We could find the multiples of any number by continuing this process. The
table below shows the multiples of $2$ through $10$ for the first $12$
counting numbers.

| Counting number | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Multiples of $2$** | $2$ | $4$ | $6$ | $8$ | $10$ | $12$ | $14$ | $16$ | $18$ | $20$ | $22$ | $24$ |
| **Multiples of $3$** | $3$ | $6$ | $9$ | $12$ | $15$ | $18$ | $21$ | $24$ | $27$ | $30$ | $33$ | $36$ |
| **Multiples of $4$** | $4$ | $8$ | $12$ | $16$ | $20$ | $24$ | $28$ | $32$ | $36$ | $40$ | $44$ | $48$ |
| **Multiples of $5$** | $5$ | $10$ | $15$ | $20$ | $25$ | $30$ | $35$ | $40$ | $45$ | $50$ | $55$ | $60$ |
| **Multiples of $6$** | $6$ | $12$ | $18$ | $24$ | $30$ | $36$ | $42$ | $48$ | $54$ | $60$ | $66$ | $72$ |
| **Multiples of $7$** | $7$ | $14$ | $21$ | $28$ | $35$ | $42$ | $49$ | $56$ | $63$ | $70$ | $77$ | $84$ |
| **Multiples of $8$** | $8$ | $16$ | $24$ | $32$ | $40$ | $48$ | $56$ | $64$ | $72$ | $80$ | $88$ | $96$ |
| **Multiples of $9$** | $9$ | $18$ | $27$ | $36$ | $45$ | $54$ | $63$ | $72$ | $81$ | $90$ | $99$ | $108$ |
| **Multiples of $10$** | $10$ | $20$ | $30$ | $40$ | $50$ | $60$ | $70$ | $80$ | $90$ | $100$ | $110$ | $120$ |

{{< callout type="info" >}}
  **Multiple of a number.** A number is a **multiple** of $n$ if it is the
  product of a counting number and $n$.
{{< /callout >}}

Another way to say that $15$ is a multiple of $3$ is to say that $15$ is
**divisible** by $3$. That means that when we divide $15$ by $3$, we get a
counting number. In fact, $15 \div 3$ is $5$, so $15$ is $5 \cdot 3$.

{{< callout type="info" >}}
  **Divisible by a number.** If a number $m$ is a multiple of $n$, then $m$
  is **divisible** by $n$.
{{< /callout >}}

Look at the multiples of $5$ in the table: they all end in $5$ or $0$.
Numbers with a last digit of $5$ or $0$ are divisible by $5$. Looking for
other patterns in the table's multiples of the numbers $2$ through $10$, we
can discover the following
divisibility tests:

{{< callout type="info" >}}
  **Divisibility tests.** A number is divisible by:
  - $2$ if the last digit is $0, 2, 4, 6$, or $8$.
  - $3$ if the sum of the digits is divisible by $3$.
  - $5$ if the last digit is $5$ or $0$.
  - $6$ if it is divisible by both $2$ and $3$.
  - $10$ if it ends with $0$.
{{< /callout >}}

**Example.** Is $5{,}625$ divisible by $2$? By $3$? By $5$? By $6$? By
$10$?

Is $5{,}625$ divisible by $2$? It does not end in $0, 2, 4, 6$, or $8$, so
$5{,}625$ is not divisible by $2$.

Is $5{,}625$ divisible by $3$? The sum of the digits is $5 + 6 + 2 + 5 =
18$, and $18$ is divisible by $3$, so $5{,}625$ is divisible by $3$.

Is $5{,}625$ divisible by $5$ or $10$? The last digit is $5$, so $5{,}625$
is divisible by $5$ but not by $10$.

Is $5{,}625$ divisible by $6$? It is not divisible by both $2$ and $3$
(it fails $2$), so $5{,}625$ is not divisible by $6$.

{{< multiplechoice
  question="Determine whether $4{,}962$ is divisible by $2$, by $3$, by $5$, by $6$, and by $10$. Which choice lists every one of these numbers that $4{,}962$ is divisible by?"
  answer="divisible by 2, 3, and 6"
  hint="Apply each test in turn: the last digit settles $2$, $5$, and $10$; the sum of the digits settles $3$; and $6$ needs both $2$ and $3$."
>}}
divisible by 2 only
divisible by 2 and 3
divisible by 2, 3, and 6
divisible by 2, 3, 6, and 10
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether $3{,}765$ is divisible by $2$, by $3$, by $5$, by $6$, and by $10$. Which choice lists every one of these numbers that $3{,}765$ is divisible by?"
  answer="divisible by 3 and 5"
  hint="Apply each test in turn: the last digit settles $2$, $5$, and $10$; the sum of the digits settles $3$; and $6$ needs both $2$ and $3$."
>}}
divisible by 5 only
divisible by 3 and 5
divisible by 3, 5, and 6
divisible by 5 and 10
{{< /multiplechoice >}}

## Find prime factorizations and least common multiples

In mathematics, there are often several ways to talk about the same ideas.
So far, we've seen that if $m$ is a multiple of $n$, we can say that $m$ is
divisible by $n$. For example, since $72$ is a multiple of $8$, we say $72$
is divisible by $8$. Since $72$ is a multiple of $9$, we say $72$ is
divisible by $9$. We can express this still another way.

Since $8 \cdot 9 = 72$, we say that $8$ and $9$ are **factors** of $72$.
When we write $72 = 8 \cdot 9$, we say we have factored $72$.

Other ways to factor $72$ are $1 \cdot 72$, $2 \cdot 36$, $3 \cdot 24$, $4
\cdot 18$, and $6 \cdot 12$. Seventy-two has many factors: $1, 2, 3, 4, 6,
8, 9, 12, 18, 24, 36$, and $72$.

{{< callout type="info" >}}
  **Factors.** In the expression $a \cdot b$, both $a$ and $b$ are called
  **factors**. If $a \cdot b = m$ and both $a$ and $b$ are integers, then
  $a$ and $b$ are **factors** of $m$.
{{< /callout >}}

Some numbers, like $72$, have many factors. Other numbers have only two
factors.

{{< callout type="info" >}}
  **Prime number and composite number.** A **prime number** is a counting
  number greater than $1$, whose only factors are $1$ and itself. A
  **composite number** is a counting number that is not prime. A composite
  number has factors other than $1$ and itself.
{{< /callout >}}

The counting numbers from $2$ to $19$, with their factors, show which are
prime and which are composite:

| Number | Factors | Prime or composite? |
| :---: | :---: | :---: |
| $2$ | $1, 2$ | Prime |
| $3$ | $1, 3$ | Prime |
| $4$ | $1, 2, 4$ | Composite |
| $5$ | $1, 5$ | Prime |
| $6$ | $1, 2, 3, 6$ | Composite |
| $7$ | $1, 7$ | Prime |
| $8$ | $1, 2, 4, 8$ | Composite |
| $9$ | $1, 3, 9$ | Composite |
| $10$ | $1, 2, 5, 10$ | Composite |
| $11$ | $1, 11$ | Prime |
| $12$ | $1, 2, 3, 4, 6, 12$ | Composite |
| $13$ | $1, 13$ | Prime |
| $14$ | $1, 2, 7, 14$ | Composite |
| $15$ | $1, 3, 5, 15$ | Composite |
| $16$ | $1, 2, 4, 8, 16$ | Composite |
| $17$ | $1, 17$ | Prime |
| $18$ | $1, 2, 3, 6, 9, 18$ | Composite |
| $19$ | $1, 19$ | Prime |

The **prime numbers** less than $20$ are $2, 3, 5, 7, 11, 13, 17$, and
$19$. Notice that the only even prime number is $2$.

A composite number can be written as a unique product of primes. This is
called the **prime factorization** of the number. Finding the prime
factorization of a composite number will be useful later in this course.

{{< callout type="info" >}}
  **Prime factorization.** The **prime factorization** of a number is the
  product of prime numbers that equals the number. These prime numbers are
  called the prime factors.
{{< /callout >}}

To find the prime factorization of a composite number, find any two
factors of the number and use them to create two branches. If a factor is
prime, that branch is complete — circle that prime. If the factor is not
prime, find two factors of it and continue the process. Once all the
branches have circled primes at the end, the factorization is complete. The
composite number can now be written as a product of prime numbers.

{{< callout type="info" >}}
  **Find the prime factorization of a composite number using the tree
  method.**

  1. Find two factors whose product is the given number. Use these numbers
     to create two branches.
  2. If a factor is prime, that branch is complete. Circle the prime.
  3. If a factor is not prime, write it as the product of two factors and
     continue the process.
  4. Write the composite number as the product of all the circled primes.
{{< /callout >}}

**Example.** Factor $48$.

We start by finding two factors whose product is $48$ — say $2$ and $24$.
Since $2$ is prime, that branch is complete. $24$ is not prime, so we break
it into $4$ and $6$. Neither is prime, so we break $4$ into $2$ and $2$, and
$6$ into $2$ and $3$. All of these are prime, so we circle them:

<svg viewBox="0 0 420 220" role="img" aria-label="A factor tree for 48. 48 branches into 2 (circled, prime) and 24. 24 branches into 4 and 6. 4 branches into 2 and 2, both circled. 6 branches into 2 and 3, both circled. Every branch ends in a circled prime." style="max-width: 420px; display: block; margin: 1.5rem auto">
  <text x="200" y="20" text-anchor="middle" font-size="16" fill="currentColor">48</text>
  <line x1="190" y1="27" x2="124" y2="52" stroke="currentColor" stroke-width="1.5" />
  <line x1="210" y1="27" x2="285" y2="64" stroke="currentColor" stroke-width="1.5" />
  <text x="110" y="75" text-anchor="middle" font-size="16" fill="currentColor">2</text>
  <circle cx="110" cy="69" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="295" y="75" text-anchor="middle" font-size="16" fill="currentColor">24</text>
  <line x1="285" y1="82" x2="240" y2="116" stroke="currentColor" stroke-width="1.5" />
  <line x1="305" y1="82" x2="350" y2="116" stroke="currentColor" stroke-width="1.5" />
  <text x="235" y="130" text-anchor="middle" font-size="16" fill="currentColor">4</text>
  <text x="355" y="130" text-anchor="middle" font-size="16" fill="currentColor">6</text>
  <line x1="227" y1="137" x2="208" y2="160" stroke="currentColor" stroke-width="1.5" />
  <line x1="243" y1="137" x2="262" y2="160" stroke="currentColor" stroke-width="1.5" />
  <text x="205" y="183" text-anchor="middle" font-size="16" fill="currentColor">2</text>
  <circle cx="205" cy="177" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="265" y="183" text-anchor="middle" font-size="16" fill="currentColor">2</text>
  <circle cx="265" cy="177" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
  <line x1="347" y1="137" x2="328" y2="160" stroke="currentColor" stroke-width="1.5" />
  <line x1="363" y1="137" x2="382" y2="160" stroke="currentColor" stroke-width="1.5" />
  <text x="325" y="183" text-anchor="middle" font-size="16" fill="currentColor">2</text>
  <circle cx="325" cy="177" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="385" y="183" text-anchor="middle" font-size="16" fill="currentColor">3</text>
  <circle cx="385" cy="177" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
</svg>

We say $2 \cdot 2 \cdot 2 \cdot 2 \cdot 3$ is the prime factorization of
$48$. We generally write the primes in ascending order. Be sure to multiply
the factors to verify your answer!

$$48 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 3$$

If we first factored $48$ in a different way — for example, as $6 \cdot
8$ — the result would still be the same.

{{< fillin
  question="Find the prime factorization of $80$ using the factor tree method. Enter it as a product of primes, such as $2 \cdot 2 \cdot 11$."
  answer="2 \cdot 2 \cdot 2 \cdot 2 \cdot 5"
  answerForm="prime-product"
  answerDisplay="$2 \cdot 2 \cdot 2 \cdot 2 \cdot 5$"
  hint="Start with a factor pair like $8$ and $10$, then keep factoring any composite branch until every branch ends in a prime."
>}}

{{< fillin
  question="Find the prime factorization of $60$ using the factor tree method. Enter it as a product of primes, such as $2 \cdot 2 \cdot 11$."
  answer="2 \cdot 2 \cdot 3 \cdot 5"
  answerForm="prime-product"
  answerDisplay="$2 \cdot 2 \cdot 3 \cdot 5$"
  hint="Try the factor pair $6$ and $10$, then keep factoring any composite branch until every branch ends in a prime."
>}}

**Example.** Find the prime factorization of $252$.

We find two factors of $252$ that are not prime — $12$ and $21$ — and
break each into two more factors. Continuing until all branches end in a
prime:

<svg viewBox="0 0 340 200" role="img" aria-label="A factor tree for 252. 252 branches into 12 and 21. 12 branches into 2 (circled) and 6; 6 branches into 2 and 3, both circled. 21 branches into 3 (circled) and 7 (circled)." style="max-width: 340px; display: block; margin: 1.5rem auto">
  <text x="170" y="20" text-anchor="middle" font-size="16" fill="currentColor">252</text>
  <line x1="156" y1="27" x2="100" y2="55" stroke="currentColor" stroke-width="1.5" />
  <line x1="184" y1="27" x2="240" y2="55" stroke="currentColor" stroke-width="1.5" />
  <text x="93" y="75" text-anchor="middle" font-size="16" fill="currentColor">12</text>
  <text x="247" y="75" text-anchor="middle" font-size="16" fill="currentColor">21</text>
  <line x1="83" y1="82" x2="58" y2="108" stroke="currentColor" stroke-width="1.5" />
  <line x1="99" y1="82" x2="124" y2="108" stroke="currentColor" stroke-width="1.5" />
  <text x="52" y="128" text-anchor="middle" font-size="16" fill="currentColor">2</text>
  <circle cx="52" cy="122" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="130" y="128" text-anchor="middle" font-size="16" fill="currentColor">6</text>
  <line x1="122" y1="135" x2="100" y2="160" stroke="currentColor" stroke-width="1.5" />
  <line x1="138" y1="135" x2="160" y2="160" stroke="currentColor" stroke-width="1.5" />
  <text x="94" y="180" text-anchor="middle" font-size="16" fill="currentColor">2</text>
  <circle cx="94" cy="174" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="166" y="180" text-anchor="middle" font-size="16" fill="currentColor">3</text>
  <circle cx="166" cy="174" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
  <line x1="237" y1="82" x2="215" y2="108" stroke="currentColor" stroke-width="1.5" />
  <line x1="253" y1="82" x2="275" y2="108" stroke="currentColor" stroke-width="1.5" />
  <text x="209" y="128" text-anchor="middle" font-size="16" fill="currentColor">3</text>
  <circle cx="209" cy="122" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
  <text x="281" y="128" text-anchor="middle" font-size="16" fill="currentColor">7</text>
  <circle cx="281" cy="122" r="13" fill="none" stroke="currentColor" stroke-width="1.5" />
</svg>

Writing $252$ as the product of all the circled primes:

$$252 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 7$$

{{< fillin
  question="Find the prime factorization of $126$. Enter it as a product of primes, such as $2 \cdot 2 \cdot 11$."
  answer="2 \cdot 3 \cdot 3 \cdot 7"
  answerForm="prime-product"
  answerDisplay="$2 \cdot 3 \cdot 3 \cdot 7$"
  hint="$126$ is even, so start with the factor pair $2$ and $63$, then keep factoring any composite branch until every branch ends in a prime."
>}}

{{< fillin
  question="Find the prime factorization of $294$. Enter it as a product of primes, such as $2 \cdot 2 \cdot 11$."
  answer="2 \cdot 3 \cdot 7 \cdot 7"
  answerForm="prime-product"
  answerDisplay="$2 \cdot 3 \cdot 7 \cdot 7$"
  hint="$294$ is even, so start with the factor pair $2$ and $147$, then keep factoring any composite branch until every branch ends in a prime."
>}}

One of the reasons we look at multiples and primes is to use these
techniques to find the **least common multiple** of two numbers. This will
be useful when we add and subtract fractions with different denominators.
Two methods are used most often to find the least common multiple, and we
will look at both of them.

The first method is the Listing Multiples Method. To find the least common
multiple of $12$ and $18$, we list the first few multiples of each:

$$12\colon\ 12, 24, \mathbf{36}, 48, 60, \mathbf{72}, 84, 96, \mathbf{108}, \dots$$
$$18\colon\ 18, \mathbf{36}, 54, \mathbf{72}, 90, \mathbf{108}, \dots$$

Notice that some numbers appear in both lists. They are the **common
multiples** of $12$ and $18$: $36, 72$, and $108$. Since $36$ is the
smallest of the common multiples, we call it the *least common multiple*.
We often use the abbreviation LCM.

{{< callout type="info" >}}
  **Least common multiple.** The **least common multiple (LCM)** of two
  numbers is the smallest number that is a multiple of both numbers.
{{< /callout >}}

{{< callout type="info" >}}
  **Find the least common multiple by listing multiples.**

  1. List several multiples of each number.
  2. Look for the smallest number that appears on both lists.
  3. This number is the LCM.
{{< /callout >}}

**Example.** Find the least common multiple of $15$ and $20$ by listing
multiples.

Listing the first few multiples of $15$ and of $20$:

$$15\colon\ 15, 30, 45, \mathbf{60}, 75, 90, 105, 120$$
$$20\colon\ 20, 40, \mathbf{60}, 80, 100, 120, 140, 160$$

The smallest number to appear on both lists is $60$, so $60$ is the least
common multiple of $15$ and $20$:

$$\text{LCM}(15, 20) = 60$$

Notice that $120$ is on both lists, too. It is a common multiple, but it is
not the *least* common multiple.

{{< fillin
  question="Find the LCM of $9$ and $12$ by listing multiples."
  answer="36"
  answerForm="decimal"
  hint="List multiples of $9$ and of $12$ until a number appears in both lists."
>}}

{{< fillin
  question="Find the LCM of $18$ and $24$ by listing multiples."
  answer="72"
  answerForm="decimal"
  hint="List multiples of $18$ and of $24$ until the smallest common one appears."
>}}

Our second method to find the least common multiple of two numbers is to
use the Prime Factors Method. Let's find the LCM of $12$ and $18$ again,
this time using their prime factors.

{{< callout type="info" >}}
  **Find the least common multiple using the prime factors method.**

  1. Write each number as a product of primes.
  2. List the primes of each number. Match primes vertically when possible.
  3. Bring down the columns.
  4. Multiply the factors.
{{< /callout >}}

**Example.** Find the LCM of $12$ and $18$ using the prime factors method.

Writing each number as a product of primes and matching primes vertically
when possible, then bringing down the columns:

| | $2$ | $2$ | $3$ | $3$ |
| :--- | :---: | :---: | :---: | :---: |
| $12 =$ | $2$ | $2$ | $3$ | |
| $18 =$ | $2$ | | $3$ | $3$ |
| $\text{LCM} =$ | $2$ | $2$ | $3$ | $3$ |

Multiplying the factors: $\text{LCM}(12, 18) = 2 \cdot 2 \cdot 3 \cdot 3 =
36$.

Notice that the prime factors of $12$ ($2 \cdot 2 \cdot 3$) and the prime
factors of $18$ ($2 \cdot 3 \cdot 3$) are included in the LCM ($2 \cdot 2
\cdot 3 \cdot 3$). By matching up the common primes, each common prime
factor is used only once. This ensures that $36$ is the *least* common
multiple.

**Example.** Find the LCM of $24$ and $36$ using the prime factors method.

Finding the primes of $24$ and $36$ and matching primes vertically when
possible:

| | $2$ | $2$ | $2$ | $3$ | $3$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $24 =$ | $2$ | $2$ | $2$ | $3$ | |
| $36 =$ | $2$ | $2$ | | $3$ | $3$ |
| $\text{LCM} =$ | $2$ | $2$ | $2$ | $3$ | $3$ |

Multiplying the factors: $\text{LCM}(24, 36) = 2 \cdot 2 \cdot 2 \cdot 3
\cdot 3 = 72$. The LCM of $24$ and $36$ is $72$.

{{< fillin
  question="Find the LCM of $21$ and $28$ using the prime factors method."
  answer="84"
  answerForm="decimal"
  hint="Write each number as a product of primes, line up any prime they share in one column, then bring down every column and multiply."
>}}

{{< fillin
  question="Find the LCM of $24$ and $32$ using the prime factors method."
  answer="96"
  answerForm="decimal"
  hint="Write each number as a product of primes and match as many factors of $2$ as the two numbers share, one column each; then bring down every column and multiply."
>}}

## Key terms

**counting numbers** — the numbers $1, 2, 3, \dots$, also called natural
numbers. **whole numbers** — the counting numbers together with $0$.
**rounding** — approximating a number to a specific place value.
**multiple of a number** — a number is a multiple of $n$ if it is the
product of a counting number and $n$. **divisible** — $m$ is divisible by $n$ if $m$ is a
multiple of $n$. **factors** — numbers whose product is a given number.
**prime number** — a counting number greater than $1$ whose only factors
are $1$ and itself. **composite number** — a counting number that is not
prime. **prime factorization** — the product of prime numbers that equals
a given number. **least common multiple (LCM)** — the smallest number that
is a multiple of two given numbers.

## Practice

### Use place value with whole numbers

{{< multiplechoice
  question="Name the number $1{,}078$ using words."
  answer="one thousand, seventy-eight"
  hint="Split the number into its periods — thousands, then ones — and name each period before combining them."
>}}
one thousand, seventy-eight
one hundred seventy-eight
one thousand, eighty-seven
ten thousand, seventy-eight
{{< /multiplechoice >}}

{{< fillin
  question="Write the number eleven million, forty-four thousand, one hundred sixty-seven as a whole number using digits."
  answer="11044167"
  answerForm="decimal"
  answerDisplay="11,044,167"
  hint="Draw a blank for each period — millions, thousands, ones — and fill each one from the words, keeping every period except the first at three digits."
>}}

### Identify multiples and apply divisibility tests

{{< multiplechoice
  question="Use the divisibility tests to determine whether $84$ is divisible by $2$, $3$, $5$, $6$, and $10$. Which choice lists every one of these numbers that $84$ is divisible by?"
  answer="divisible by 2, 3, and 6"
  hint="Apply each test in turn: the last digit settles $2$, $5$, and $10$; the sum of the digits settles $3$; and $6$ needs both $2$ and $3$."
>}}
divisible by 3 and 6
divisible by 2 and 3
divisible by 2, 3, and 6
divisible by 2, 3, 5, and 6
{{< /multiplechoice >}}

{{< multiplechoice
  question="Use the divisibility tests to determine whether $22{,}335$ is divisible by $2$, $3$, $5$, $6$, and $10$. Which choice lists every one of these numbers that $22{,}335$ is divisible by?"
  answer="divisible by 3 and 5"
  hint="Apply each test in turn: the last digit settles $2$, $5$, and $10$; the sum of the digits settles $3$; and $6$ needs both $2$ and $3$."
>}}
divisible by 3 and 5
divisible by 5 only
divisible by 3, 5, and 6
divisible by 2, 3, and 5
{{< /multiplechoice >}}

### Find prime factorizations and least common multiples

{{< fillin
  question="Find the prime factorization of $86$. Enter it as a product of primes, e.g. $2 \cdot 3 \cdot 7$."
  answer="2 \cdot 43"
  answerForm="prime-product"
  answerDisplay="$2 \cdot 43$"
  hint="$86$ is even, so divide out the smallest prime first, then check whether the remaining factor is prime."
>}}

{{< fillin
  question="Find the LCM of $12$ and $16$ by listing multiples."
  answer="48"
  answerForm="decimal"
  hint="List multiples of $12$ and of $16$ until the smallest common one appears."
>}}

{{< fillin
  question="Find the LCM of $55$ and $88$ using the prime factors method."
  answer="440"
  answerForm="decimal"
  hint="Write each number as a product of primes, line up any prime they share in one column, then bring down every column and multiply."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 1.1: Introduction to Whole Numbers](https://openstax.org/books/elementary-algebra-2e/pages/1-1-introduction-to-whole-numbers) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the number line, place-value charts, table of multiples, factor-tree diagrams, and prime-factor column alignments as tables and accessible inline graphics, and the step-by-step solution tables as prose; listed $24$ among the factors of $72$, which the source's list omits; omitted the Be Prepared quiz, Manipulative Mathematics callouts, media links, and Self Check checklist; converted selected practice problems ("Try Its") into interactive exercises with instant feedback, asking two parts of the place-value Try It and one part of each three-part rounding Try It; and adapted selected end-of-section exercises into an interactive Practice block.</small>
