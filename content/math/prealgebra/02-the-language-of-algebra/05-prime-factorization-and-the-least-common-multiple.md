---
title: Prime Factorization and the Least Common Multiple
description: >-
  Finding the prime factorization of a composite number using the factor tree
  and ladder methods, and finding the least common multiple of two numbers by
  listing multiples and by using prime factors — adapted from OpenStax
  Prealgebra 2e, Section 2.5.
source_section: "2.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find the prime
  factorization of a composite number, and find the least common multiple
  (LCM) of two numbers.
{{< /callout >}}

## Find the prime factorization of a composite number

In the previous section, we found the factors of a number. Prime numbers have
only two factors, the number $1$ and the prime number itself. Composite
numbers have more than two factors, and every composite number can be written
as a unique product of primes. This is called the **prime factorization** of
a number. When we write the prime factorization of a number, we are rewriting
the number as a product of primes. Finding the prime factorization of a
composite number will help you later in this course.

{{< callout type="info" >}}
  **Prime factorization.** The prime factorization of a number is the
  product of prime numbers that equals the number.
{{< /callout >}}

You may want to refer to the following list of prime numbers less than $50$
as you work through this section:

$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$$

### Prime factorization using the factor tree method

One way to find the prime factorization of a number is to make a **factor
tree**. We start by writing the number, and then writing it as the product of
two factors. We write the factors below the number and connect them to the
number with a small line segment — a "branch" of the factor tree.

If a factor is prime, we circle it (like a bud on a tree), and do not factor
that "branch" any further. If a factor is not prime, we repeat this process,
writing it as the product of two factors and adding new branches to the tree.

We continue until all the branches end with a prime. When the factor tree is
complete, the circled primes give us the prime factorization.

For example, let's find the prime factorization of $36$. We can start with
any factor pair, such as $12$ and $3$. We write $12$ and $3$ below $36$ with
branches connecting them.

<svg viewBox="0 0 240 110" role="img" aria-label="A factor tree. 36 branches into 12 and 3. The 3 is circled because it is prime." style={{ maxWidth: 240, display: 'block', margin: '1.5rem auto' }}>
  <text x="120" y="25" textAnchor="middle" fontSize="16" fill="currentColor">36</text>
  <line x1="110" y1="32" x2="72" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <line x1="130" y1="32" x2="168" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <text x="66" y="80" textAnchor="middle" fontSize="16" fill="currentColor">12</text>
  <text x="174" y="80" textAnchor="middle" fontSize="16" fill="currentColor">3</text>
  <circle cx="174" cy="74" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
</svg>

The factor $3$ is prime, so we circle it. The factor $12$ is composite, so we
need to find its factors. Let's use $3$ and $4$. We write these factors on
the tree under the $12$.

<svg viewBox="0 0 240 160" role="img" aria-label="The factor tree grows. 36 branches into 12 and 3; the 3 is circled. 12 branches into 3 and 4; the new 3 is circled." style={{ maxWidth: 240, display: 'block', margin: '1.5rem auto' }}>
  <text x="120" y="25" textAnchor="middle" fontSize="16" fill="currentColor">36</text>
  <line x1="110" y1="32" x2="72" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <line x1="130" y1="32" x2="168" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <text x="66" y="80" textAnchor="middle" fontSize="16" fill="currentColor">12</text>
  <text x="174" y="80" textAnchor="middle" fontSize="16" fill="currentColor">3</text>
  <circle cx="174" cy="74" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <line x1="56" y1="87" x2="30" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <line x1="76" y1="87" x2="102" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <text x="26" y="132" textAnchor="middle" fontSize="16" fill="currentColor">3</text>
  <circle cx="26" cy="126" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="106" y="132" textAnchor="middle" fontSize="16" fill="currentColor">4</text>
</svg>

The factor $3$ is prime, so we circle it. The factor $4$ is composite, and it
factors into $2 \cdot 2$. We write these factors under the $4$. Since $2$ is
prime, we circle both $2\text{s}$.

<svg viewBox="0 0 240 210" role="img" aria-label="The completed factor tree. 36 branches into 12 and 3; the 3 is circled. 12 branches into 3 and 4; the 3 is circled. 4 branches into 2 and 2; both 2s are circled. Every branch now ends in a circled prime." style={{ maxWidth: 240, display: 'block', margin: '1.5rem auto' }}>
  <text x="120" y="25" textAnchor="middle" fontSize="16" fill="currentColor">36</text>
  <line x1="110" y1="32" x2="72" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <line x1="130" y1="32" x2="168" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <text x="66" y="80" textAnchor="middle" fontSize="16" fill="currentColor">12</text>
  <text x="174" y="80" textAnchor="middle" fontSize="16" fill="currentColor">3</text>
  <circle cx="174" cy="74" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <line x1="56" y1="87" x2="30" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <line x1="76" y1="87" x2="102" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <text x="26" y="132" textAnchor="middle" fontSize="16" fill="currentColor">3</text>
  <circle cx="26" cy="126" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="106" y="132" textAnchor="middle" fontSize="16" fill="currentColor">4</text>
  <line x1="98" y1="139" x2="76" y2="162" stroke="currentColor" strokeWidth="1.5" />
  <line x1="114" y1="139" x2="136" y2="162" stroke="currentColor" strokeWidth="1.5" />
  <text x="72" y="182" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="72" cy="176" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="140" y="182" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="140" cy="176" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
</svg>

The prime factorization is the product of the circled primes. We generally
write the prime factorization in order from least to greatest:

$$2 \cdot 2 \cdot 3 \cdot 3$$

In cases like this, where some of the prime factors are repeated, we can
write the prime factorization in exponential form:

$$2 \cdot 2 \cdot 3 \cdot 3 = 2^2 \cdot 3^2$$

Note that we could have started our factor tree with any factor pair of
$36$. We chose $12$ and $3$, but the result would have been the same if we
had started with $2$ and $18$, $4$ and $9$, or $6$ and $6$.

{{< callout type="info" >}}
  **Find the prime factorization of a composite number using the tree
  method.**

  1. Find any factor pair of the given number, and use these numbers to
     create two branches.
  2. If a factor is prime, that branch is complete. Circle the prime.
  3. If a factor is not prime, write it as the product of a factor pair, and
     continue the process.
  4. Write the composite number as the product of all the circled primes.
{{< /callout >}}

**Example.** Find the prime factorization of $48$ using the factor tree
method.

We can start our tree using any factor pair of $48$. Let's use $2$ and $24$.
We circle the $2$ because it is prime, and so that branch is complete.

<svg viewBox="0 0 240 110" role="img" aria-label="A factor tree. 48 branches into 2 and 24. The 2 is circled because it is prime." style={{ maxWidth: 240, display: 'block', margin: '1.5rem auto' }}>
  <text x="120" y="25" textAnchor="middle" fontSize="16" fill="currentColor">48</text>
  <line x1="110" y1="32" x2="72" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <line x1="130" y1="32" x2="168" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <text x="66" y="80" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="66" cy="74" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="174" y="80" textAnchor="middle" fontSize="16" fill="currentColor">24</text>
</svg>

Now we will factor $24$. Let's use $4$ and $6$.

<svg viewBox="0 0 290 160" role="img" aria-label="The factor tree grows. 48 branches into 2 and 24; the 2 is circled. 24 branches into 4 and 6; neither is prime." style={{ maxWidth: 290, display: 'block', margin: '1.5rem auto' }}>
  <text x="140" y="25" textAnchor="middle" fontSize="16" fill="currentColor">48</text>
  <line x1="130" y1="32" x2="86" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <line x1="150" y1="32" x2="194" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <text x="80" y="80" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="80" cy="74" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="200" y="80" textAnchor="middle" fontSize="16" fill="currentColor">24</text>
  <line x1="190" y1="87" x2="167" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <line x1="210" y1="87" x2="233" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <text x="163" y="132" textAnchor="middle" fontSize="16" fill="currentColor">4</text>
  <text x="237" y="132" textAnchor="middle" fontSize="16" fill="currentColor">6</text>
</svg>

Neither factor is prime, so we do not circle either. We factor the $4$,
using $2$ and $2$. We factor the $6$, using $2$ and $3$. We circle the
$2\text{s}$ and the $3$ since they are prime. Now all of the branches end in
a prime.

<svg viewBox="0 0 340 210" role="img" aria-label="The completed factor tree. 48 branches into 2 and 24; the 2 is circled. 24 branches into 4 and 6. 4 branches into 2 and 2, both circled. 6 branches into 2 and 3, both circled. Every branch ends in a circled prime." style={{ maxWidth: 340, display: 'block', margin: '1.5rem auto' }}>
  <text x="160" y="25" textAnchor="middle" fontSize="16" fill="currentColor">48</text>
  <line x1="150" y1="32" x2="106" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <line x1="170" y1="32" x2="214" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <text x="100" y="80" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="100" cy="74" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="220" y="80" textAnchor="middle" fontSize="16" fill="currentColor">24</text>
  <line x1="205" y1="87" x2="177" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <line x1="230" y1="87" x2="258" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <text x="170" y="132" textAnchor="middle" fontSize="16" fill="currentColor">4</text>
  <text x="264" y="132" textAnchor="middle" fontSize="16" fill="currentColor">6</text>
  <line x1="160" y1="139" x2="142" y2="162" stroke="currentColor" strokeWidth="1.5" />
  <line x1="180" y1="139" x2="198" y2="162" stroke="currentColor" strokeWidth="1.5" />
  <text x="138" y="182" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="138" cy="176" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="202" y="182" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="202" cy="176" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <line x1="254" y1="139" x2="236" y2="162" stroke="currentColor" strokeWidth="1.5" />
  <line x1="274" y1="139" x2="292" y2="162" stroke="currentColor" strokeWidth="1.5" />
  <text x="232" y="182" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="232" cy="176" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="296" y="182" textAnchor="middle" fontSize="16" fill="currentColor">3</text>
  <circle cx="296" cy="176" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
</svg>

We write the product of the circled numbers, then write it in exponential
form:

$$48 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 3 = 2^4 \cdot 3$$

Check this on your own by multiplying all the factors together. The result
should be $48$.

{{< fillin
  question="Find the prime factorization of 80 using the factor tree method. Enter the answer in exponential form, e.g. $2^3 \cdot 5$."
  answer="2^4 \cdot 5"
  answerDisplay="$2^4 \cdot 5$"
  hint="Start with a factor pair like $8$ and $10$, then keep factoring any composite branch until every branch ends in a prime."
>}}

{{< fillin
  question="Find the prime factorization of 60 using the factor tree method. Enter the answer in exponential form, e.g. $2^3 \cdot 5$."
  answer="2^2 \cdot 3 \cdot 5"
  answerDisplay="$2^2 \cdot 3 \cdot 5$"
  hint="Try the factor pair $6$ and $10$, then keep factoring any composite branch until every branch ends in a prime."
>}}

**Example.** Find the prime factorization of $84$ using the factor tree
method.

We start with the factor pair $4$ and $21$. Neither factor is prime, so we
factor them further.

<svg viewBox="0 0 240 110" role="img" aria-label="A factor tree. 84 branches into 4 and 21. Neither factor is prime, so neither is circled." style={{ maxWidth: 240, display: 'block', margin: '1.5rem auto' }}>
  <text x="120" y="25" textAnchor="middle" fontSize="16" fill="currentColor">84</text>
  <line x1="110" y1="32" x2="72" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <line x1="130" y1="32" x2="168" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <text x="66" y="80" textAnchor="middle" fontSize="16" fill="currentColor">4</text>
  <text x="174" y="80" textAnchor="middle" fontSize="16" fill="currentColor">21</text>
</svg>

Now the factors are all prime, so we circle them: the $4$ factors into $2$
and $2$, and the $21$ factors into $3$ and $7$.

<svg viewBox="0 0 260 160" role="img" aria-label="The completed factor tree. 84 branches into 4 and 21. 4 branches into 2 and 2, both circled. 21 branches into 3 and 7, both circled. Every branch ends in a circled prime." style={{ maxWidth: 260, display: 'block', margin: '1.5rem auto' }}>
  <text x="130" y="25" textAnchor="middle" fontSize="16" fill="currentColor">84</text>
  <line x1="120" y1="32" x2="80" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <line x1="140" y1="32" x2="180" y2="60" stroke="currentColor" strokeWidth="1.5" />
  <text x="74" y="80" textAnchor="middle" fontSize="16" fill="currentColor">4</text>
  <text x="186" y="80" textAnchor="middle" fontSize="16" fill="currentColor">21</text>
  <line x1="66" y1="87" x2="44" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <line x1="82" y1="87" x2="104" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <text x="40" y="132" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="40" cy="126" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="108" y="132" textAnchor="middle" fontSize="16" fill="currentColor">2</text>
  <circle cx="108" cy="126" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <line x1="178" y1="87" x2="156" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <line x1="194" y1="87" x2="216" y2="112" stroke="currentColor" strokeWidth="1.5" />
  <text x="152" y="132" textAnchor="middle" fontSize="16" fill="currentColor">3</text>
  <circle cx="152" cy="126" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <text x="220" y="132" textAnchor="middle" fontSize="16" fill="currentColor">7</text>
  <circle cx="220" cy="126" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
</svg>

Then we write $84$ as the product of all circled primes:

$$84 = 2 \cdot 2 \cdot 3 \cdot 7 = 2^2 \cdot 3 \cdot 7$$

{{< fillin
  question="Find the prime factorization of 126 using the factor tree method. Enter the answer in exponential form, e.g. $2^2 \cdot 3$."
  answer="2 \cdot 3^2 \cdot 7"
  answerDisplay="$2 \cdot 3^2 \cdot 7$"
  hint="Try the factor pair $2$ and $63$, then keep factoring the composite branch ($63 = 9 \times 7$) until every branch ends in a prime."
>}}

{{< fillin
  question="Find the prime factorization of 294 using the factor tree method. Enter the answer in exponential form, e.g. $2 \cdot 3^2$."
  answer="2 \cdot 3 \cdot 7^2"
  answerDisplay="$2 \cdot 3 \cdot 7^2$"
  hint="294 is even, so start by dividing off a factor of $2$. The remaining factor is $147 = 3 \times 49$."
>}}

### Prime factorization using the ladder method

The **ladder method** is another way to find the prime factors of a
composite number. It leads to the same result as the factor tree method.
Some people prefer the ladder method to the factor tree method, and vice
versa.

To begin building the "ladder," divide the given number by its smallest
prime factor. For example, to start the ladder for $36$, we divide $36$ by
$2$, the smallest prime factor of $36$.

$$\begin{array}{r} 18 \\ 2\,\overline{\smash{)}\,36} \end{array}$$

To add a "step" to the ladder, we continue dividing by the same prime until
it no longer divides evenly.

$$\begin{array}{r} 9 \\ 2\,\overline{\smash{)}\,18} \\ 2\,\overline{\smash{)}\,36} \end{array}$$

Then we divide by the next prime; so we divide $9$ by $3$.

$$\begin{array}{r} 3 \\ 3\,\overline{\smash{)}\,9} \\ 2\,\overline{\smash{)}\,18} \\ 2\,\overline{\smash{)}\,36} \end{array}$$

We continue dividing up the ladder in this way until the quotient is prime.
Since the quotient, $3$, is prime, we stop here. Do you see why the ladder
method is sometimes called *stacked division*?

The prime factorization is the product of all the primes on the sides and
top of the ladder:

$$36 = 2 \cdot 2 \cdot 3 \cdot 3 = 2^2 \cdot 3^2$$

Notice that the result is the same as we obtained with the factor tree
method.

{{< callout type="info" >}}
  **Find the prime factorization of a composite number using the ladder
  method.**

  1. Divide the number by the smallest prime.
  2. Continue dividing by that prime until it no longer divides evenly.
  3. Divide by the next prime until it no longer divides evenly.
  4. Continue until the quotient is a prime.
  5. Write the composite number as the product of all the primes on the
     sides and top of the ladder.
{{< /callout >}}

**Example.** Find the prime factorization of $120$ using the ladder method.

Divide the number by the smallest prime, which is $2$:

$$\begin{array}{r} 60 \\ 2\,\overline{\smash{)}\,120} \end{array}$$

Continue dividing by $2$ until it no longer divides evenly:

$$\begin{array}{r} 15 \\ 2\,\overline{\smash{)}\,30} \\ 2\,\overline{\smash{)}\,60} \\ 2\,\overline{\smash{)}\,120} \end{array}$$

Divide by the next prime, $3$:

$$\begin{array}{r} 5 \\ 3\,\overline{\smash{)}\,15} \\ 2\,\overline{\smash{)}\,30} \\ 2\,\overline{\smash{)}\,60} \\ 2\,\overline{\smash{)}\,120} \end{array}$$

The quotient, $5$, is prime, so the ladder is complete. Write the prime
factorization of $120$:

$$120 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 5 = 2^3 \cdot 3 \cdot 5$$

Check this yourself by multiplying the factors. The result should be $120$.

{{< fillin
  question="Find the prime factorization of 80 using the ladder method. Enter the answer in exponential form, e.g. $2^3 \cdot 5$."
  answer="2^4 \cdot 5"
  answerDisplay="$2^4 \cdot 5$"
  hint="Divide 80 by $2$ repeatedly until it no longer divides evenly, then check whether the quotient is prime."
>}}

{{< fillin
  question="Find the prime factorization of 60 using the ladder method. Enter the answer in exponential form, e.g. $2^3 \cdot 5$."
  answer="2^2 \cdot 3 \cdot 5"
  answerDisplay="$2^2 \cdot 3 \cdot 5$"
  hint="Divide by $2$ until it no longer divides evenly, then move to the next prime."
>}}

**Example.** Find the prime factorization of $48$ using the ladder method.

Divide the number by the smallest prime, $2$:

$$\begin{array}{r} 24 \\ 2\,\overline{\smash{)}\,48} \end{array}$$

Continue dividing by $2$ until it no longer divides evenly:

$$\begin{array}{r} 3 \\ 2\,\overline{\smash{)}\,6} \\ 2\,\overline{\smash{)}\,12} \\ 2\,\overline{\smash{)}\,24} \\ 2\,\overline{\smash{)}\,48} \end{array}$$

The quotient, $3$, is prime, so the ladder is complete. Write the prime
factorization of $48$:

$$48 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 3 = 2^4 \cdot 3$$

This matches the factor tree result from the earlier example — the method
you use doesn't change the answer.

{{< fillin
  question="Find the prime factorization of 126 using the ladder method. Enter the answer in exponential form, e.g. $2^2 \cdot 3$."
  answer="2 \cdot 3^2 \cdot 7"
  answerDisplay="$2 \cdot 3^2 \cdot 7$"
  hint="Divide by $2$ once, then by $3$ until it no longer divides evenly, then check whether the quotient is prime."
>}}

{{< fillin
  question="Find the prime factorization of 294 using the ladder method. Enter the answer in exponential form, e.g. $2 \cdot 3^2$."
  answer="2 \cdot 3 \cdot 7^2"
  answerDisplay="$2 \cdot 3 \cdot 7^2$"
  hint="Divide by $2$ once, then by $3$ once, then check whether the remaining quotient is prime."
>}}

## Find the least common multiple (LCM) of two numbers

One of the reasons we look at multiples and primes is to use these
techniques to find the least common multiple of two numbers. This will be
useful when we add and subtract fractions with different denominators.

### Listing multiples method

A common multiple of two numbers is a number that is a multiple of both
numbers. Suppose we want to find common multiples of $10$ and $25$. We can
list the first several multiples of each number. Then we look for multiples
that are common to both lists — these are the common multiples.

$$10\colon\ 10, 20, 30, 40, \mathbf{50}, 60, 70, 80, 90, \mathbf{100}, 110, \dots$$
$$25\colon\ 25, \mathbf{50}, 75, \mathbf{100}, 125, \dots$$

We see that $50$ and $100$ appear in both lists. They are common multiples
of $10$ and $25$. We would find more common multiples if we continued the
list of multiples for each.

The smallest number that is a multiple of two numbers is called the **least
common multiple (LCM)**. So the least common multiple of $10$ and $25$ is
$50$.

{{< callout type="info" >}}
  **Find the least common multiple (LCM) of two numbers by listing
  multiples.**

  1. List the first several multiples of each number.
  2. Look for multiples common to both lists. If there are no common
     multiples in the lists, write out additional multiples for each number.
  3. Look for the smallest number that is common to both lists.
  4. This number is the LCM.
{{< /callout >}}

**Example.** Find the LCM of $15$ and $20$ by listing multiples.

List the first several multiples of $15$ and of $20$, and identify the first
common multiple:

$$15\colon\ 15, 30, 45, \mathbf{60}, 75, 90, 105, 120$$
$$20\colon\ 20, 40, \mathbf{60}, 80, 100, 120, 140, 160$$

The smallest number to appear on both lists is $60$, so $60$ is the least
common multiple of $15$ and $20$:

$$\text{LCM}(15, 20) = 60$$

Notice that $120$ is on both lists, too. It is a common multiple, but it is
not the *least* common multiple.

{{< fillin
  question="Find the LCM of 9 and 12 by listing multiples."
  answer="36"
  hint="List multiples of 9 and of 12 until a number appears in both lists."
>}}

{{< fillin
  question="Find the LCM of 18 and 24 by listing multiples."
  answer="72"
  hint="List multiples of 18 and of 24 until the smallest common one appears."
>}}

### Prime factors method

Another way to find the least common multiple of two numbers is to use their
prime factors. We'll use this method to find the LCM of $12$ and $18$.

We start by finding the prime factorization of each number:

$$12 = 2 \cdot 2 \cdot 3 \qquad\qquad 18 = 2 \cdot 3 \cdot 3$$

Then we write each number as a product of primes, matching primes vertically
when possible — one column per prime, with a gap where a number is missing
that prime. Now we bring down the primes in each column. The LCM is the
product of these factors.

| | $2$ | $2$ | $3$ | $3$ |
| :--- | :---: | :---: | :---: | :---: |
| $12 =$ | $2$ | $2$ | $3$ | |
| $18 =$ | $2$ | | $3$ | $3$ |
| $\text{LCM} =$ | $2$ | $2$ | $3$ | $3$ |

$$\text{LCM}(12, 18) = 2 \cdot 2 \cdot 3 \cdot 3 = 36$$

Notice that the prime factors of $12$ and the prime factors of $18$ are
included in the LCM. By matching up the common primes, each common prime
factor is used only once. This ensures that $36$ is the *least* common
multiple.

{{< callout type="info" >}}
  **Find the LCM using the prime factors method.**

  1. Find the prime factorization of each number.
  2. Write each number as a product of primes, matching primes vertically
     when possible.
  3. Bring down the primes in each column.
  4. Multiply the factors to get the LCM.
{{< /callout >}}

**Example.** Find the LCM of $15$ and $18$ using the prime factors method.

Write each number as a product of primes, matching primes vertically when
possible, then bring down the primes in each column:

| | $2$ | $3$ | $3$ | $5$ |
| :--- | :---: | :---: | :---: | :---: |
| $15 =$ | | $3$ | | $5$ |
| $18 =$ | $2$ | $3$ | $3$ | |
| $\text{LCM} =$ | $2$ | $3$ | $3$ | $5$ |

Multiply the factors to get the LCM:

$$\text{LCM}(15, 18) = 2 \cdot 3 \cdot 3 \cdot 5 = 90$$

The LCM of $15$ and $18$ is $90$.

{{< fillin
  question="Find the LCM of 15 and 20 using the prime factors method."
  answer="60"
  hint="$15 = 3 \cdot 5$ and $20 = 2 \cdot 2 \cdot 5$. Match the common $5$ in one column, then bring down every column."
>}}

{{< fillin
  question="Find the LCM of 15 and 35 using the prime factors method."
  answer="105"
  hint="$15 = 3 \cdot 5$ and $35 = 5 \cdot 7$. Match the common $5$ in one column, then bring down every column."
>}}

**Example.** Find the LCM of $50$ and $100$ using the prime factors method.

Write the prime factorization of each number, matching primes vertically
when possible, then bring down the primes in each column:

| | $2$ | $2$ | $5$ | $5$ |
| :--- | :---: | :---: | :---: | :---: |
| $50 =$ | $2$ | | $5$ | $5$ |
| $100 =$ | $2$ | $2$ | $5$ | $5$ |
| $\text{LCM} =$ | $2$ | $2$ | $5$ | $5$ |

Multiply the factors to get the LCM:

$$\text{LCM}(50, 100) = 2 \cdot 2 \cdot 5 \cdot 5 = 100$$

The LCM of $50$ and $100$ is $100$.

{{< fillin
  question="Find the LCM of 55 and 88 using the prime factors method."
  answer="440"
  hint="$55 = 5 \cdot 11$ and $88 = 2 \cdot 2 \cdot 2 \cdot 11$. Match the common $11$ in one column, then bring down every column."
>}}

{{< fillin
  question="Find the LCM of 60 and 72 using the prime factors method."
  answer="360"
  hint="$60 = 2 \cdot 2 \cdot 3 \cdot 5$ and $72 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3$. Match the common primes column by column, then bring every column down."
>}}

## Key terms

**prime factorization** — the product of prime numbers that equals a given
number. **factor tree** — a diagram that finds a prime factorization by
repeatedly factoring composite branches until every branch ends in a prime.
**ladder method** — a way to find a prime factorization by repeatedly
dividing by the smallest prime that fits (also called stacked division).
**least common multiple (LCM)** — the smallest number that is a multiple of
two given numbers.

---

<small>This section is adapted from [Prealgebra 2e, Section 2.5: Prime Factorization and the Least Common Multiple](https://openstax.org/books/prealgebra-2e/pages/2-5-prime-factorization-and-the-least-common-multiple) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the factor-tree diagrams as accessible inline graphics, the ladder (stacked division) diagrams as typeset math, and the prime-factor column alignments as tables; omitted the Be Prepared quiz, Manipulative Mathematics callout, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
