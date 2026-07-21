---
title: Add and Subtract Polynomials
description: >-
  Identifying monomials, binomials, and trinomials, finding the degree of a
  polynomial, adding and subtracting monomials and polynomials by combining
  like terms, and evaluating a polynomial for a given value — adapted from
  OpenStax Elementary Algebra 2e, Section 6.1.
source_section: "6.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** identify polynomials,
  monomials, binomials, and trinomials; determine the degree of polynomials;
  add and subtract monomials; add and subtract polynomials; and evaluate a
  polynomial for a given value.
{{< /callout >}}

## Identify polynomials, monomials, binomials, and trinomials

You have learned that a *term* is a constant or the product of a constant and
one or more variables. The constant is called a **coefficient**. When a term
is of the form $ax^m$, where $a$ is a constant and $m$ is a whole number, it
is called a **monomial**. Some examples of monomials are $8$, $-2x^2$, $4y^3$,
and $11z^7$.

{{< callout type="info" >}}
  **Monomial.** A monomial is a term of the form $ax^m$, where $a$ is a
  constant and $m$ is a positive whole number.
{{< /callout >}}

A monomial, or two or more monomials combined by addition or subtraction, is a
**polynomial**. Some polynomials have special names, based on the number of
terms:

- A **monomial** is a polynomial with exactly one term.
- A **binomial** is a polynomial with exactly two terms.
- A **trinomial** is a polynomial with exactly three terms.

There are no special names for polynomials with more than three terms. Here
are some examples of each kind:

| Type | Examples |
| :--- | :--- |
| Polynomial | $b + 1,\quad 4y^2 - 7y + 2,\quad 4x^4 + x^3 + 8x^2 - 9x + 1$ |
| Monomial | $14,\quad 8y^2,\quad -9x^3 y^5,\quad -13$ |
| Binomial | $a + 7,\quad 4b - 5,\quad y^2 - 16,\quad 3x^3 - 9x^2$ |
| Trinomial | $x^2 - 7x + 12,\quad 9y^2 + 2y - 8,\quad 6m^4 - m^3 + 8m,\quad z^4 + 3z^2 - 1$ |

Notice that every monomial, binomial, and trinomial is also a polynomial. They
are just special members of the "family" of polynomials, and so they have
special names.

**Example.** Determine whether each polynomial is a monomial, binomial,
trinomial, or other polynomial.

(a) $4y^2 - 8y - 6$ has three terms, so it is a **trinomial**.

(b) $-5a^4 b^2$ has one term, so it is a **monomial**.

(c) $2x^5 - 5x^3 - 9x^2 + 3x + 4$ has five terms, so it is a **polynomial**.

(d) $13 - 5m^3$ has two terms, so it is a **binomial**.

(e) $q$ has one term, so it is a **monomial**.

{{< multiplechoice
  question="How would you classify the polynomial $8y^3 - 7y^2 - y - 3$?"
  hint="Count the terms. One term is a monomial, two is a binomial, three is a trinomial, and four or more has no special name."
  answer="other polynomial"
>}}
monomial
binomial
trinomial
other polynomial
{{< /multiplechoice >}}

{{< multiplechoice
  question="How would you classify the polynomial $12m^3 - 5m^2 - 2m$?"
  hint="Count the terms: a trinomial has exactly three."
  answer="trinomial"
>}}
monomial
binomial
trinomial
other polynomial
{{< /multiplechoice >}}

## Determine the degree of polynomials

The degree of a polynomial and the degree of its terms are determined by the
exponents of the variable. A monomial that has no variable, just a constant,
is a special case: the degree of a constant is $0$ — it has no variable.

{{< callout type="info" >}}
  **Degree of a polynomial.**

  - The **degree of a term** is the sum of the exponents of its variables.
  - The **degree of a constant** is $0$.
  - The **degree of a polynomial** is the highest degree of all its terms.
{{< /callout >}}

For example, the monomial $-9x^4 y^6$ has degree $4 + 6 = 10$. In the binomial
$3n^3 - 9n$, the terms have degrees $3$ and $1$, so the polynomial has degree
$3$. In the trinomial $6m^4 - m^3 n^2 + 8mn^5$, the terms have degrees $4$,
$5$, and $6$, so the polynomial has degree $6$.

A polynomial is in **standard form** when its terms are written in descending
order of degrees. Get in the habit of writing the term with the highest degree
first.

**Example.** Find the degree of each polynomial.

(a) $10y$ — the exponent of $y$ is one, since $y = y^1$, so the degree is $1$.

(b) $4x^3 - 7x + 5$ — the highest degree of all the terms is $3$, so the
degree is $3$.

(c) $-15$ — the degree of a constant is $0$.

(d) $-8b^2 + 9b - 2$ — the highest degree of all the terms is $2$, so the
degree is $2$.

(e) $8xy^2 + 2y$ — the term $8xy^2$ has degree $1 + 2 = 3$, so the degree is
$3$.

{{< fillin
  question="Find the degree of the polynomial $10z^4 + 4z^2 - 5$."
  answer="4"
  hint="The degree of a polynomial is the highest degree among its terms; the term with the largest exponent is $10z^4$."
>}}

{{< fillin
  question="Find the degree of the polynomial $3x^2y - 4x$."
  answer="3"
  hint="The degree of a term with several variables is the sum of their exponents; $3x^2y$ has degree $2 + 1$."
>}}

## Add and subtract monomials

You have learned how to simplify expressions by combining like terms.
Remember, like terms must have the same variables with the same exponent.
Since monomials are terms, adding and subtracting monomials is the same as
combining like terms. If the monomials are like terms, we just combine them by
adding or subtracting the coefficient.

**Example.** Add: $25y^2 + 15y^2$.

The two terms are like terms, so we combine them by adding the coefficients:

$$25y^2 + 15y^2 = 40y^2$$

**Example.** Subtract: $16p - (-7p)$.

Subtracting a negative is the same as adding, so we combine like terms:

$$16p - (-7p) = 23p$$

**Example.** Simplify: $c^2 + 7d^2 - 6c^2$.

Only $c^2$ and $-6c^2$ are like terms. Combining them:

$$c^2 + 7d^2 - 6c^2 = -5c^2 + 7d^2$$

**Example.** Simplify: $u^2 v + 5u^2 - 3v^2$.

There are no like terms to combine, so the expression stays as it is:

$$u^2 v + 5u^2 - 3v^2$$

{{< fillin
  question="Add: $12q^2 + 9q^2$."
  answer="21q^2"
  answerDisplay="$21q^2$"
  hint="These are like terms; add the coefficients 12 and 9 and keep the $q^2$."
>}}

{{< fillin
  question="Subtract: $8m - (-5m)$."
  answer="13m"
  hint="Subtracting a negative is the same as adding, so combine $8m$ and $5m$."
>}}

{{< fillin
  question="Simplify: $8y^2 + 3z^2 - 3y^2$."
  answer="5y^2 + 3z^2"
  answerDisplay="$5y^2 + 3z^2$"
  hint="Only $8y^2$ and $-3y^2$ are like terms; the $z^2$ term has no partner to combine with."
>}}

## Add and subtract polynomials

We can think of adding and subtracting polynomials as just adding and
subtracting a series of monomials. Look for the like terms — those with the
same variables and the same exponent. The Commutative Property lets us
rearrange the terms to put like terms together.

**Example.** Find the sum: $\left(5y^2 - 3y + 15\right) + \left(3y^2 - 4y - 11\right)$.

Rearrange to group the like terms, then combine them:

$$
\begin{aligned}
&\left(5y^2 - 3y + 15\right) + \left(3y^2 - 4y - 11\right) \\
&= 5y^2 + 3y^2 - 3y - 4y + 15 - 11 \\
&= 8y^2 - 7y + 4
\end{aligned}
$$

**Example.** Find the difference: $\left(9w^2 - 7w + 5\right) - \left(2w^2 - 4\right)$.

Distribute the subtraction across the second polynomial, rearrange, and
combine like terms:

$$
\begin{aligned}
&\left(9w^2 - 7w + 5\right) - \left(2w^2 - 4\right) \\
&= 9w^2 - 7w + 5 - 2w^2 + 4 \\
&= 7w^2 - 7w + 9
\end{aligned}
$$

**Example.** Subtract $\left(c^2 - 4c + 7\right)$ from $\left(7c^2 - 5c + 3\right)$.

"Subtract $A$ from $B$" means $B - A$, so we set up the difference and
distribute:

$$
\begin{aligned}
&\left(7c^2 - 5c + 3\right) - \left(c^2 - 4c + 7\right) \\
&= 7c^2 - 5c + 3 - c^2 + 4c - 7 \\
&= 6c^2 - c - 4
\end{aligned}
$$

Polynomials in more than one variable work the same way — we just have to be
careful to combine only genuine like terms.

**Example.** Find the sum: $\left(u^2 - 6uv + 5v^2\right) + \left(3u^2 + 2uv\right)$.

$$
\begin{aligned}
&\left(u^2 - 6uv + 5v^2\right) + \left(3u^2 + 2uv\right) \\
&= u^2 + 3u^2 - 6uv + 2uv + 5v^2 \\
&= 4u^2 - 4uv + 5v^2
\end{aligned}
$$

**Example.** Find the difference: $\left(p^2 + q^2\right) - \left(p^2 + 10pq - 2q^2\right)$.

$$
\begin{aligned}
&\left(p^2 + q^2\right) - \left(p^2 + 10pq - 2q^2\right) \\
&= p^2 + q^2 - p^2 - 10pq + 2q^2 \\
&= -10pq + 3q^2
\end{aligned}
$$

{{< fillin
  question="Find the sum: $(7x^2 - 4x + 5) + (x^2 - 7x + 3)$."
  answer="8x^2 - 11x + 8"
  answerDisplay="$8x^2 - 11x + 8$"
  hint="Group like terms: combine the $x^2$ terms, the $x$ terms, and the constants separately."
>}}

{{< fillin
  question="Find the difference: $(8x^2 + 3x - 19) - (7x^2 - 14)$."
  answer="x^2 + 3x - 5"
  answerDisplay="$x^2 + 3x - 5$"
  hint="Distribute the minus sign across the second polynomial first: $-(7x^2 - 14)$ becomes $-7x^2 + 14$."
>}}

{{< fillin
  question="Subtract $(5z^2 - 6z - 2)$ from $(7z^2 + 6z - 4)$."
  answer="2z^2 + 12z - 2"
  answerDisplay="$2z^2 + 12z - 2$"
  hint="Subtract $A$ from $B$ means $B - A$, so compute $(7z^2 + 6z - 4) - (5z^2 - 6z - 2)$."
>}}

{{< fillin
  question="Find the sum: $(3x^2 - 4xy + 5y^2) + (2x^2 - xy)$."
  answer="5x^2 - 5xy + 5y^2"
  answerDisplay="$5x^2 - 5xy + 5y^2$"
  hint="Only combine genuine like terms; $xy$ and $-4xy$ are like terms, but there is only one $y^2$ term."
>}}

## Evaluate a polynomial for a given value

We have already learned how to evaluate expressions. Since polynomials are
expressions, we follow the same procedure: substitute the given value for the
variable and then simplify using the order of operations.

**Example.** Evaluate $5x^2 - 8x + 4$ when (a) $x = 4$, (b) $x = -2$, and
(c) $x = 0$.

(a) Substitute $4$ for $x$:

$$5(4)^2 - 8(4) + 4 = 5 \cdot 16 - 32 + 4 = 80 - 32 + 4 = 52$$

(b) Substitute $-2$ for $x$:

$$5(-2)^2 - 8(-2) + 4 = 5 \cdot 4 + 16 + 4 = 20 + 16 + 4 = 40$$

(c) Substitute $0$ for $x$:

$$5(0)^2 - 8(0) + 4 = 0 - 0 + 4 = 4$$

{{< fillin
  question="Evaluate $3x^2 + 2x - 15$ when $x = 3$."
  answer="18"
  hint="Substitute $3$ for $x$: $3(3)^2 + 2(3) - 15$, then simplify with the order of operations."
>}}

{{< fillin
  question="Evaluate $3x^2 + 2x - 15$ when $x = -5$."
  answer="50"
  hint="Substitute $-5$ for $x$: $3(-5)^2 + 2(-5) - 15$. Remember $(-5)^2 = 25$."
>}}

**Example.** The polynomial $-16t^2 + 250$ gives the height (in feet) of a
ball $t$ seconds after it is dropped from a $250$-foot tall building. Find the
height after $t = 2$ seconds.

Substitute $t = 2$ and simplify:

$$-16(2)^2 + 250 = -16 \cdot 4 + 250 = -64 + 250 = 186$$

After $2$ seconds the height of the ball is $186$ feet.

{{< fillin
  question="The polynomial $-16t^2 + 250$ gives the height in feet of a ball $t$ seconds after it is dropped from a 250-foot tall building. Find the height (in feet) after $t = 3$ seconds."
  answer="106"
  answerDisplay="106 feet"
  hint="Substitute $t = 3$: $-16(3)^2 + 250 = -16 \cdot 9 + 250$."
>}}

**Example.** The polynomial $6x^2 + 15xy$ gives the cost (in dollars) of
producing a rectangular container whose top and bottom are squares with side
$x$ feet and sides of height $y$ feet. Find the cost of producing a box with
$x = 4$ feet and $y = 6$ feet.

Substitute $x = 4$ and $y = 6$, then simplify:

$$6(4)^2 + 15(4)(6) = 6 \cdot 16 + 360 = 96 + 360 = 456$$

The cost of producing the box is $\text{\textdollar}456$.

{{< fillin
  question="The polynomial $6x^2 + 15xy$ gives the cost in dollars of producing a rectangular container whose top and bottom are squares with side $x$ feet and sides of height $y$ feet. Find the cost (in dollars) of producing a box with $x = 6$ feet and $y = 4$ feet."
  answer="576"
  answerDisplay="\$576"
  hint="Substitute $x = 6$ and $y = 4$: $6(6)^2 + 15(6)(4) = 216 + 360$."
>}}

## Key terms

**monomial** — a term of the form $ax^m$, where $a$ is a constant and $m$ is a
positive whole number. **polynomial** — a monomial, or two or more monomials
combined by addition or subtraction. **binomial** — a polynomial with exactly
two terms. **trinomial** — a polynomial with exactly three terms. **coefficient**
— the constant factor in a term. **degree of a term** — the sum of the
exponents of its variables. **degree of a polynomial** — the highest degree of
all its terms. **standard form** — a polynomial written with its terms in
descending order of degree.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 6.1: Add and Subtract Polynomials](https://openstax.org/books/elementary-algebra-2e/pages/6-1-add-and-subtract-polynomials) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the polynomial-classification and degree examples as prose with (a)/(b)/(c) enumerations and a summary table, and the worked add/subtract examples as display equality chains; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback — using multiple-choice for the "name the type of polynomial" Try Its, since a word answer can't be graded by the math checker.</small>
