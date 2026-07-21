---
title: Add and Subtract Polynomials
description: >-
  Identifying polynomials, monomials, binomials, and trinomials; finding the
  degree of a polynomial; adding and subtracting monomials and polynomials;
  and evaluating a polynomial for a given value — adapted from OpenStax
  Prealgebra 2e, Section 10.1.
source_section: "10.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** identify polynomials,
  monomials, binomials, and trinomials; determine the degree of polynomials;
  add and subtract monomials; add and subtract polynomials; and evaluate a
  polynomial for a given value.
{{< /callout >}}

## Identify polynomials, monomials, binomials, and trinomials

You learned earlier that a term is a constant, or the product of a constant
and one or more variables. The constant is called a **coefficient**. When a
term is of the form $ax^m$, where $a$ is a constant and $m$ is a whole
number, it is called a **monomial**. A monomial, or a sum and/or difference
of monomials, is called a **polynomial**.

{{< callout type="info" >}}
  **Polynomials.**

  - **polynomial** — a monomial, or two or more monomials, combined by
    addition or subtraction
  - **monomial** — a polynomial with exactly one term
  - **binomial** — a polynomial with exactly two terms
  - **trinomial** — a polynomial with exactly three terms
{{< /callout >}}

Notice the roots of these words: *poly-* means many, *mono-* means one,
*bi-* means two, and *tri-* means three. Here are some examples:

| | Example 1 | Example 2 | Example 3 |
| :--- | :---: | :---: | :---: |
| Polynomial | $b + 1$ | $4y^2 - 7y + 2$ | $5x^5 - 4x^4 + x^3 + 8x^2 - 9x + 1$ |
| Monomial | $5$ | $4b^2$ | $-9x^3$ |
| Binomial | $3a - 7$ | $y^2 - 9$ | $17x^3 + 14x^2$ |
| Trinomial | $x^2 - 5x + 6$ | $4y^2 - 7y + 2$ | $5a^4 - 3a^3 + a$ |

Notice that every monomial, binomial, and trinomial is also a polynomial —
they are special members of the polynomial family, and so they have special
names. We use the words "monomial," "binomial," and "trinomial" when
referring to these special polynomials, and just call all the rest
"polynomials."

**Example.** Determine whether each polynomial is a monomial, binomial,
trinomial, or other polynomial: (a) $8x^2 - 7x - 9$ (b) $-5a^4$ (c)
$x^4 - 7x^3 - 6x^2 + 5x + 2$ (d) $11 - 4y^3$ (e) $n$

| | Polynomial | Number of terms | Type |
| :--- | :---: | :---: | :---: |
| (a) | $8x^2 - 7x - 9$ | 3 | Trinomial |
| (b) | $-5a^4$ | 1 | Monomial |
| (c) | $x^4 - 7x^3 - 6x^2 + 5x + 2$ | 5 | Polynomial |
| (d) | $11 - 4y^3$ | 2 | Binomial |
| (e) | $n$ | 1 | Monomial |

{{< fillin
  question="Classify $2x^3 - 4x^2 - x - 8$ as a monomial, binomial, trinomial, or other polynomial. Enter the number of terms it has."
  answer="4"
  hint="Count the terms separated by addition or subtraction signs."
>}}

{{< fillin
  question="Classify $9x^3 - 5x^2 - x$ as a monomial, binomial, trinomial, or other polynomial. Enter the number of terms it has."
  answer="3"
  hint="Count the terms separated by addition or subtraction signs."
>}}

## Determine the degree of polynomials

In this section, we will work with polynomials that have only one variable
in each term. The degree of a polynomial and the degree of its terms are
determined by the exponents of the variable.

{{< callout type="info" >}}
  **Degree of a polynomial.**

  - The **degree of a term** is the exponent of its variable.
  - The degree of a constant is $0$.
  - The degree of a polynomial is the highest degree of all its terms.
{{< /callout >}}

A monomial that has no variable, just a constant, is a special case — the
degree of a constant is $0$ because it has no variable. Remember: any base
written without an exponent has an implied exponent of $1$.

Let's see how this works, starting with monomials and progressing to
polynomials with more terms.

| | Example 1 | Example 2 | Example 3 | Example 4 |
| :--- | :---: | :---: | :---: | :---: |
| Monomial | $5$ | $4b^2$ | $-9x^3$ | $-18$ |
| Degree | $0$ | $2$ | $3$ | $0$ |
| Binomial | $b+1$ | $3a-7$ | $y^2-9$ | $17x^3+14x^2$ |
| Degree | $1$ | $1$ | $2$ | $3$ |
| Trinomial | $x^2-5x+6$ | $4y^2-7y+2$ | $5a^4-3a^3+a$ | $x^4+2x^2-5$ |
| Degree | $2$ | $2$ | $4$ | $4$ |

**Example.** Find the degree of the following polynomials: (a) $4x$ (b)
$3x^3 - 5x + 7$ (c) $-11$ (d) $-6x^2 + 9x - 3$ (e) $8x + 2$

(a) The exponent of $x$ is one ($x = x^1$), so the degree is $1$.
(b) The highest degree of all the terms is $3$, so the degree is $3$.
(c) The degree of a constant is $0$, so the degree is $0$.
(d) The highest degree of all the terms is $2$, so the degree is $2$.
(e) The highest degree of all the terms is $1$, so the degree is $1$.

{{< fillin
  question="Find the degree of the polynomial $3x^4 + 4x^2 - 8$."
  answer="4"
  hint="The degree of a polynomial is the highest exponent among all its terms."
>}}

{{< fillin
  question="Find the degree of the polynomial $y^5 - 5y^3 + y$."
  answer="5"
  hint="The degree of a polynomial is the highest exponent among all its terms."
>}}

Working with polynomials is easier when you list the terms in descending
order of degree. When a polynomial is written this way, it is said to be in
**standard form**. Get in the habit of writing the term with the highest
degree first.

## Add and subtract monomials

You already know how to simplify expressions by combining like terms. Adding
and subtracting monomials is the same as combining like terms — like terms
must have the same variable raised to the same exponent. Recall that when we
combine like terms, only the coefficients are combined, never the exponents.

**Example.** Add: $17x^2 + 6x^2$.

$$17x^2 + 6x^2$$

Combine like terms:

$$23x^2$$

{{< fillin
  question="Add: $12x^2 + 5x^2$."
  answer="17x^2"
  answerDisplay="$17x^2$"
  hint="Only the coefficients combine — the exponent on $x$ stays the same."
>}}

**Example.** Subtract: $11n - (-8n)$.

$$11n - (-8n)$$

Combine like terms:

$$19n$$

{{< fillin
  question="Subtract: $9n - (-5n)$."
  answer="14n"
  hint="Subtracting a negative is the same as adding its opposite."
>}}

**Example.** Simplify: $a^2 + 4b^2 - 7a^2$.

$$a^2 + 4b^2 - 7a^2$$

Combine like terms:

$$-6a^2 + 4b^2$$

Remember, $-6a^2$ and $4b^2$ are not like terms — the variables are not the
same, so this expression cannot be simplified any further.

{{< fillin
  question="Add: $3x^2 + 3y^2 - 5x^2$."
  answer="-2x^2 + 3y^2"
  answerDisplay="$-2x^2 + 3y^2$"
  hint="Combine only the $x^2$ terms with each other; the $y^2$ term has no like term to join."
>}}

## Add and subtract polynomials

Adding and subtracting polynomials can be thought of as just adding and
subtracting like terms. Look for like terms — those with the same variables
raised to the same exponent. The Commutative Property allows us to rearrange
the terms to put like terms together. It may also be helpful to underline,
circle, or box like terms.

**Example.** Find the sum: $(4x^2 - 5x + 1) + (3x^2 - 8x - 9)$.

Identify like terms:

$$4x^2 - 5x + 1 + 3x^2 - 8x - 9$$

Rearrange to get the like terms together:

$$4x^2 + 3x^2 - 5x - 8x + 1 - 9$$

Combine like terms:

$$7x^2 - 13x - 8$$

{{< fillin
  question="Find the sum: $(3x^2 - 2x + 8) + (x^2 - 6x + 2)$."
  answer="4x^2 - 8x + 10"
  answerDisplay="$4x^2 - 8x + 10$"
  hint="Rearrange so like terms are together, then combine each group of like terms."
>}}

{{< fillin
  question="Find the sum: $(7y^2 + 4y - 6) + (4y^2 + 5y + 1)$."
  answer="11y^2 + 9y - 5"
  answerDisplay="$11y^2 + 9y - 5$"
  hint="Rearrange so like terms are together, then combine each group of like terms."
>}}

Parentheses are grouping symbols. When we add polynomials, we can rewrite
the expression without parentheses and then combine like terms. But when we
*subtract* polynomials, we must be very careful with the signs.

**Example.** Find the difference: $(7u^2 - 5u + 3) - (4u^2 - 2)$.

Distribute and identify like terms:

$$7u^2 - 5u + 3 - 4u^2 + 2$$

Rearrange the terms:

$$7u^2 - 4u^2 - 5u + 3 + 2$$

Combine like terms:

$$3u^2 - 5u + 5$$

{{< fillin
  question="Find the difference: $(6y^2 + 3y - 1) - (3y^2 - 4)$."
  answer="3y^2 + 3y + 3"
  answerDisplay="$3y^2 + 3y + 3$"
  hint="Distribute the minus sign across every term of the second polynomial first, then combine like terms."
>}}

{{< fillin
  question="Find the difference: $(8u^2 - 7u - 2) - (5u^2 - 6u - 4)$."
  answer="3u^2 - u + 2"
  answerDisplay="$3u^2 - u + 2$"
  hint="Distribute the minus sign across every term of the second polynomial first, then combine like terms."
>}}

**Example.** Subtract $(m^2 - 3m + 8)$ from $(9m^2 - 7m + 4)$.

Distribute and identify like terms:

$$9m^2 - 7m + 4 - m^2 + 3m - 8$$

Rearrange the terms:

$$9m^2 - m^2 - 7m + 3m + 4 - 8$$

Combine like terms:

$$8m^2 - 4m - 4$$

{{< fillin
  question="Subtract $(4n^2 - 7n - 3)$ from $(8n^2 + 5n - 3)$."
  answer="4n^2 + 12n"
  answerDisplay="$4n^2 + 12n$"
  hint="Write it as $(8n^2 + 5n - 3) - (4n^2 - 7n - 3)$, distribute the minus sign, then combine like terms."
>}}

{{< fillin
  question="Subtract $(a^2 - 4a - 9)$ from $(6a^2 + 4a - 1)$."
  answer="5a^2 + 8a + 8"
  answerDisplay="$5a^2 + 8a + 8$"
  hint="Write it as $(6a^2 + 4a - 1) - (a^2 - 4a - 9)$, distribute the minus sign, then combine like terms."
>}}

## Evaluate a polynomial for a given value

Since polynomials are expressions, we follow the same procedures to evaluate
a polynomial as we do for any expression: substitute the given value for the
variable into the polynomial, and then simplify.

**Example.** Evaluate $3x^2 - 9x + 7$ when (a) $x = 3$ (b) $x = -1$.

(a) Substitute $3$ for $x$:

$$3(3)^2 - 9(3) + 7$$

Simplify the expression with the exponent:

$$3 \cdot 9 - 9(3) + 7$$

Multiply:

$$27 - 27 + 7$$

Simplify:

$$7$$

(b) Substitute $-1$ for $x$:

$$3(-1)^2 - 9(-1) + 7$$

Simplify the expression with the exponent:

$$3 \cdot 1 - 9(-1) + 7$$

Multiply:

$$3 + 9 + 7$$

Simplify:

$$19$$

{{< fillin
  question="Evaluate $2x^2 + 4x - 3$ when $x = 2$."
  answer="13"
  hint="Substitute $2$ for $x$, simplify the exponent first, then multiply and add."
>}}

{{< fillin
  question="Evaluate $2x^2 + 4x - 3$ when $x = -3$."
  answer="3"
  hint="Substitute $-3$ for $x$, simplify the exponent first, then multiply and add."
>}}

**Example.** The polynomial $-16t^2 + 300$ gives the height, in feet, of an
object $t$ seconds after it is dropped from a $300$-foot-tall bridge. Find
the height after $t = 3$ seconds.

Substitute $3$ for $t$:

$$-16(3)^2 + 300$$

Simplify the expression with the exponent:

$$-16 \cdot 9 + 300$$

Multiply:

$$-144 + 300$$

Simplify:

$$156$$

The height of the object is $156$ feet after $t = 3$ seconds.

{{< fillin
  question="The polynomial $-8t^2 + 24t + 4$ gives the height, in feet, of a ball $t$ seconds after it is tossed into the air from an initial height of 4 feet. Find the height after $t = 3$ seconds."
  answer="4"
  hint="Substitute $3$ for $t$ into $-8t^2 + 24t + 4$, simplify the exponent first, then multiply and add."
>}}

{{< fillin
  question="The polynomial $-8t^2 + 24t + 4$ gives the height, in feet, of a ball $t$ seconds after it is tossed into the air from an initial height of 4 feet. Find the height after $t = 2$ seconds."
  answer="20"
  hint="Substitute $2$ for $t$ into $-8t^2 + 24t + 4$, simplify the exponent first, then multiply and add."
>}}

## Key terms

**polynomial** — a monomial, or two or more monomials, combined by addition
or subtraction. **monomial** — a polynomial with exactly one term.
**binomial** — a polynomial with exactly two terms. **trinomial** — a
polynomial with exactly three terms. **degree of a term** — the exponent of
its variable (the degree of a constant is $0$). **degree of a polynomial** —
the highest degree of all its terms. **standard form** — a polynomial
written with its terms in descending order of degree.

---

<small>This section is adapted from [Prealgebra 2e, Section 10.1: Add and Subtract Polynomials](https://openstax.org/books/prealgebra-2e/pages/10-1-add-and-subtract-polynomials) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: recreated the polynomial-classification and degree tables as markdown tables; omitted the Be Prepared quiz, Media callout, Self Check checklist, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
