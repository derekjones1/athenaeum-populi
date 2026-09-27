---
title: Find Multiples and Factors
description: >-
  Identifying multiples of numbers, using common divisibility tests, finding
  all the factors of a number, and identifying prime and composite numbers —
  adapted from OpenStax Prealgebra 2e, Section 2.4.
source_section: "2.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Identify multiples of numbers
- Use common divisibility tests
- Find all the factors of a number
- Identify prime and composite numbers
{{< /callout >}}

## Identify multiples of numbers

If you count shoes in pairs — $2, 4, 6, 8, 10, 12$ — each number in that list
is a **multiple** of $2$: the product of a counting number and $2$
($1 \cdot 2, 2 \cdot 2, 3 \cdot 2, \dots$).

{{< callout type="info" >}}
  **Multiple of a number.** A number is a multiple of $n$ if it is the
  product of a counting number and $n$.
{{< /callout >}}

Some multiples are easy to spot from a number's last digit:

- A number is a multiple of $2$ if its last digit is $0, 2, 4, 6,$ or $8$.
- A number is a multiple of $5$ if its last digit is $5$ or $0$.
- A number is a multiple of $10$ if its last digit is $0$.

**Example.** Is $3{,}714$ a multiple of $2$? Its last digit is $4$, one of
$0, 2, 4, 6, 8$ — yes.

**Example.** Is $880$ a multiple of $5$? Its last digit is $0$ — yes.

{{< multiplechoice
  question="Is $21{,}493$ a multiple of $2$?"
  answer="no"
  hint="Check the last digit: is it $0$, $2$, $4$, $6$, or $8$?"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $2{,}690$ a multiple of $5$?"
  answer="yes"
  hint="Check the last digit: is it $5$ or $0$?"
>}}
no
yes
{{< /multiplechoice >}}

The pattern for multiples of $3$ is different — it isn't about the last
digit, but the **sum of the digits**: if the sum of a number's digits is
itself a multiple of $3$, the number is a multiple of $3$.

**Example.** Is $645$ a multiple of $3$? Sum the digits: $6 + 4 + 5 = 15$,
and $15$ is a multiple of $3$ — yes. Check: $645 \div 3 = 215$.

**Example.** Is $10{,}519$ a multiple of $3$? Sum the digits:
$1 + 0 + 5 + 1 + 9 = 16$, not a multiple of $3$ — no. Dividing confirms it:
$10{,}519 \div 3 = 3{,}506\ \text{R}1$, not a whole number.

{{< multiplechoice
  question="Is $3{,}742$ a multiple of $3$?"
  answer="no"
  hint="Sum the digits: $3 + 7 + 4 + 2$. Is that sum a multiple of $3$?"
>}}
yes
no
{{< /multiplechoice >}}

## Use common divisibility tests

If a number $m$ is a multiple of $n$, we also say $m$ is **divisible** by
$n$ — multiplication and division are inverse operations, so the multiple
patterns above double as divisibility tests.

| A number is divisible by | if |
| :--- | :--- |
| $2$ | the last digit is $0, 2, 4, 6,$ or $8$ |
| $3$ | the sum of the digits is divisible by $3$ |
| $5$ | the last digit is $5$ or $0$ |
| $6$ | it is divisible by both $2$ and $3$ |
| $10$ | the last digit is $0$ |

**Example.** Is $1{,}290$ divisible by $2, 3, 5,$ and $10$?

- By $2$: last digit $0$ — yes ($1{,}290 \div 2 = 645$).
- By $3$: $1 + 2 + 9 + 0 = 12$, divisible by $3$ — yes ($1{,}290 \div 3 = 430$).
- By $5$: last digit $0$ — yes ($1{,}290 \div 5 = 258$).
- By $10$: last digit $0$ — yes ($1{,}290 \div 10 = 129$).

So $1{,}290$ is divisible by all four.

**Example.** Is $5{,}625$ divisible by $2, 3, 5,$ and $10$?

- By $2$: last digit $5$ — no.
- By $3$: $5 + 6 + 2 + 5 = 18$, divisible by $3$ — yes.
- By $5$: last digit $5$ — yes.
- By $10$: last digit $5$, not $0$ — no.

So $5{,}625$ is divisible by $3$ and $5$, but not $2$ or $10$.

{{< multiplechoice
  question="Which of $2$, $3$, $5$, and $10$ divide $6{,}240$ evenly?"
  answer="2, 3, 5, and 10"
  hint="Use the last digit for $2$, $5$, and $10$, and the sum of the digits for $3$."
>}}
2, 5, and 10
2, 3, 5, and 10
2, 3, and 10
3 and 5
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which of $2$, $3$, $5$, and $10$ divide $7{,}248$ evenly?"
  answer="2 and 3"
  hint="Use the last digit for $2$, $5$, and $10$, and the sum of the digits for $3$."
>}}
2 only
2 and 3
2, 3, and 5
3 and 5
{{< /multiplechoice >}}

## Find all the factors of a number

If $72$ is the product of $8$ and $9$, we can also say $8$ and $9$ are
**factors** of $72$, and that we have *factored* $72$: $8 \cdot 9 = 72$.

{{< callout type="info" >}}
  **Factors.** In the expression $a \cdot b$, both $a$ and $b$ are called
  factors. If $a \cdot b = m$ and both $a$ and $b$ are integers, then $a$ and
  $b$ are factors of $m$, and $m$ is the product of $a$ and $b$.
{{< /callout >}}

We can find every factor of a counting number by dividing it by each counting
number in turn, starting at $1$, stopping once the quotient becomes smaller
than the divisor (past that point the same factor pairs would just repeat in
reverse order).

{{< callout type="info" >}}
  **Find all the factors of a counting number.**

  1. Divide the number by each counting number, in order, until the quotient
     is smaller than the divisor. If the quotient is a counting number, the
     divisor and quotient are a pair of factors; if not, the divisor is not a
     factor.
  2. List all the factor pairs.
  3. Write all the factors in order from smallest to largest.
{{< /callout >}}

**Example.** Find all the factors of $72$.

| Dividend | Divisor | Quotient | Factors |
| ---: | ---: | ---: | :--- |
| $72$ | $1$ | $72$ | $1, 72$ |
| $72$ | $2$ | $36$ | $2, 36$ |
| $72$ | $3$ | $24$ | $3, 24$ |
| $72$ | $4$ | $18$ | $4, 18$ |
| $72$ | $5$ | $14.4$ | — |
| $72$ | $6$ | $12$ | $6, 12$ |
| $72$ | $7$ | $\approx 10.29$ | — |
| $72$ | $8$ | $9$ | $8, 9$ |

The next divisor, $9$, gives quotient $8$ — smaller than the divisor, so we
stop. All the factors of $72$, smallest to largest:

$$1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72$$

{{< fillin
  question="List all the factors of 96, separated by commas, from smallest to largest."
  answer="1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96"
  answerForm="decimal"
  answerDisplay="1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96"
  hint="Divide 96 by each counting number starting at 1, and stop once the quotient is smaller than the divisor."
>}}

## Identify prime and composite numbers

Some numbers, like $72$, have many factors. Others, like $7$, have only two:
$1$ and the number itself.

{{< callout type="info" >}}
  **Prime and composite numbers.** A **prime number** is a counting number
  greater than $1$ whose only factors are $1$ and itself. A **composite
  number** is a counting number that is not prime. (The number $1$ is
  neither prime nor composite — its only factor is itself.)
{{< /callout >}}

The prime numbers less than $20$ are $2, 3, 5, 7, 11, 13, 17,$ and $19$. To
test whether a larger number is prime, check whether any prime number divides
it, testing primes in order and stopping once the quotient drops below the
divisor.

{{< callout type="info" >}}
  **Determine if a number is prime.**

  1. Test each prime, in order, to see if it is a factor of the number.
  2. Start with $2$; stop when the quotient is smaller than the divisor, or
     when a prime factor is found.
  3. If a prime factor was found, the number is composite. If none were
     found, the number is prime.
{{< /callout >}}

**Example.** Is $83$ prime or composite? Testing primes in order: not
divisible by $2$ (last digit isn't even), not by $3$ ($8+3=11$, not a
multiple of $3$), not by $5$ (last digit isn't $5$ or $0$), not by $7$
($83 \div 7 \approx 11.857$), not by $11$ ($83 \div 11 \approx 7.545$, and
now the quotient is smaller than the divisor, so we stop). No prime factors
were found, so $83$ is **prime**.

**Example.** Is $77$ prime or composite? Not divisible by $2$, $3$, or $5$ —
but $77 \div 7 = 11$, a whole number. Since $7$ is a prime factor, $77$ is
**composite**.

{{< multiplechoice
  question="Is 91 prime or composite?"
  answer="composite"
  hint="Test the primes $2$, $3$, $5$, $7$, … in order, and stop when one divides 91 or the quotient drops below the divisor."
>}}
prime
composite
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is 137 prime or composite?"
  answer="prime"
  hint="Test the primes $2$, $3$, $5$, $7$, … in order, and stop when one divides 137 or the quotient drops below the divisor."
>}}
prime
composite
{{< /multiplechoice >}}

## Key terms

**multiple of a number** — the product of a counting number and a given
number. **divisible** — $m$ is divisible by $n$ if $m$ is a multiple of $n$.
**factors** — in $a \cdot b = m$, both $a$ and $b$ are factors of $m$.
**prime number** — a counting number greater than $1$ whose only factors are
$1$ and itself. **composite number** — a counting number that is not prime.

## Practice

### Identify multiples of numbers

{{< fillin
  question="List all the multiples of $6$ that are less than 50, separated by commas."
  answer="6,12,18,24,30,36,42,48"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="6, 12, 18, 24, 30, 36, 42, 48"
  hint="Multiply $6$ by $1, 2, 3, \dots$ in turn and stop before the product reaches 50."
>}}

{{< fillin
  question="List all the multiples of $8$ that are less than 50, separated by commas."
  answer="8,16,24,32,40,48"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="8, 16, 24, 32, 40, 48"
  hint="Count by eights from $8$ and stop at the last count below 50."
>}}

{{< fillin
  question="List all the multiples of $10$ that are less than 50, separated by commas."
  answer="10,20,30,40"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="10, 20, 30, 40"
  hint="Every multiple of $10$ ends in $0$; note that 50 itself is not less than 50."
>}}

### Use common divisibility tests

{{< multiplechoice
  question="Determine which of $2$, $3$, $4$, $5$, $6$, and $10$ divide 75 evenly."
  answer="3 and 5"
  hint="Apply each test in the divisibility table to 75. The table has no test for $4$ — divide to check that one."
>}}
5 only
3 and 5
3, 5, and 6
2, 3, and 5
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine which of $2$, $3$, $4$, $5$, $6$, and $10$ divide 350 evenly."
  answer="2, 5, and 10"
  hint="Use the last digit for $2$, $5$, and $10$, the sum of the digits for $3$, and both of those tests for $6$; divide by $4$ to test that one."
>}}
2, 3, 5, and 10
5 and 10
2, 5, and 10
2, 5, 6, and 10
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine which of $2$, $3$, $4$, $5$, $6$, and $10$ divide 900 evenly."
  answer="2, 3, 4, 5, 6, and 10"
  hint="Check the last digit for $2$, $5$, and $10$; sum the digits for $3$; a number divisible by both $2$ and $3$ is divisible by $6$. The table has no test for $4$ — divide to check it."
>}}
2, 4, 5, and 10
2, 3, 4, 5, 6, and 10
2, 3, 4, 6, and 10
2, 3, 5, 6, and 10
{{< /multiplechoice >}}

### Find all the factors of a number

{{< fillin
  question="Find all the factors of 36. Enter them separated by commas."
  answer="1,2,3,4,6,9,12,18,36"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="1, 2, 3, 4, 6, 9, 12, 18, 36"
  hint="Divide 36 by $1, 2, 3, \dots$ in turn, recording each factor pair, and stop once the quotient is smaller than the divisor."
>}}

{{< fillin
  question="Find all the factors of 60. Enter them separated by commas."
  answer="1,2,3,4,5,6,10,12,15,20,30,60"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60"
  hint="Divide 60 by $1, 2, 3, \dots$ in turn, recording each factor pair, and stop once the quotient is smaller than the divisor."
>}}

{{< fillin
  question="Find all the factors of 144. Enter them separated by commas."
  answer="1,2,3,4,6,8,9,12,16,18,24,36,48,72,144"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="1, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 36, 48, 72, 144"
  hint="Divide 144 by $1, 2, 3, \dots$ in turn, recording each factor pair, and stop once the quotient is no larger than the divisor. A factor paired with itself is listed once."
>}}

### Identify prime and composite numbers

{{< multiplechoice
  question="Is 43 prime or composite?"
  answer="prime"
  hint="Test the primes $2$, $3$, $5$, $7$, … in order, and stop when one divides 43 or the quotient drops below the divisor."
>}}
composite
prime
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is 39 prime or composite?"
  answer="composite"
  hint="Test the primes $2$, $3$, $5$, … in order; the sum of the digits tells you whether $3$ divides the number."
>}}
prime
composite
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is 71 prime or composite?"
  answer="prime"
  hint="Test the primes $2$, $3$, $5$, $7$, … in order, and stop when one divides 71 or the quotient drops below the divisor."
>}}
prime
composite
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is 209 prime or composite?"
  answer="composite"
  hint="Test the primes $2$, $3$, $5$, $7$, … in order, and stop when one divides 209 or the quotient drops below the divisor."
>}}
prime
composite
{{< /multiplechoice >}}

---

<small>This section is adapted from [Prealgebra 2e, Section 2.4: Find Multiples and Factors](https://openstax.org/books/prealgebra-2e/pages/2-4-find-multiples-and-factors) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: condensed prose, omitted the multiples charts and the table of factors of 2 through 20, recreated the divisibility tests and the factors-of-72 division table as accessible Markdown tables, added a Key terms list, converted practice problems ("Try Its") into interactive exercises with instant feedback (each two-part multiples Try It asking one part), and adapted selected end-of-section exercises into the interactive Practice block.</small>
