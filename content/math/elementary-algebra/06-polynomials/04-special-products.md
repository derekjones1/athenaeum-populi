---
title: Special Products
description: >-
  Squaring a binomial with the Binomial Squares Pattern, multiplying
  conjugate pairs with the Product of Conjugates Pattern, and recognizing
  which special product pattern applies — adapted from OpenStax Elementary
  Algebra 2e, Section 6.4.
source_section: "6.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** square a binomial
  using the Binomial Squares Pattern, multiply conjugates using the Product
  of Conjugates Pattern, and recognize and use the appropriate special
  product pattern.
{{< /callout >}}

## Square a Binomial Using the Binomial Squares Pattern

Mathematicians like to look for patterns that will make their work easier. A
good example of this is squaring binomials. While you can always get the
product by writing the binomial twice and multiplying with the methods of
the last section, there is less work to do if you learn to use a pattern.

Let's start by looking at $(x+9)^2$. This means to multiply $(x+9)$ by
itself, so $(x+9)^2 = (x+9)(x+9)$. Using FOIL and combining like terms:

$$(x+9)(x+9) = x^2 + 9x + 9x + 81 = x^2 + 18x + 81$$

Here's another one. Squaring $(y-7)$ means multiplying $(y-7)$ by itself:

$$(y-7)(y-7) = y^2 - 7y - 7y + 49 = y^2 - 14y + 49$$

And one more, $(2x+3)^2$:

$$(2x+3)(2x+3) = 4x^2 + 6x + 6x + 9 = 4x^2 + 12x + 9$$

Look at these results. Do you see any patterns? In each example we squared a
binomial and the result was a trinomial:

$$(a+b)^2 = \underline{\phantom{aa}} + \underline{\phantom{aa}} + \underline{\phantom{aa}}$$

Now look at the **first term** in each result. Where did it come from? The
first term is the product of the first terms of each binomial, and since the
binomials are identical, it is just the square of the first term. To get the
first term of the product, **square the first term**.

The **last term** is the product of the last terms, which is the square of
the last term. To get the last term of the product, **square the last
term**.

Finally, look at the **middle term**. Notice it came from adding the "outer"
and the "inner" terms — which are both the same! So the middle term is
double the product of the two terms of the binomial. To get the middle term
of the product, **multiply the terms and double their product**.

Putting it all together gives the pattern.

{{< callout type="info" >}}
  **Binomial Squares Pattern.** If $a$ and $b$ are real numbers,

$$
\begin{array}{rcl}
(a+b)^2 &=& a^2 + 2ab + b^2 \\
(a-b)^2 &=& a^2 - 2ab + b^2
\end{array}
$$

  To square a binomial:

  - square the first term,
  - square the last term,
  - double their product.
{{< /callout >}}

A number example helps verify the pattern. Squaring $(10+4)$ with the
pattern gives $10^2 + 2 \cdot 10 \cdot 4 + 4^2 = 100 + 80 + 16 = 196$. Using
the order of operations instead, $(10+4)^2 = (14)^2 = 196$. The pattern
works!

**Example.** Multiply: $(x+5)^2$.

Here $a$ is $x$ and $b$ is $5$. Square the first term, square the last term,
and double their product:

$$(x+5)^2 = x^2 + 2 \cdot x \cdot 5 + 5^2 = x^2 + 10x + 25$$

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(x + 9)^2$"
  answer="x^2 + 18x + 81"
  hint="Square the first term to get $x^2$, square the last term to get 81, and double their product for the middle term: $2 \cdot x \cdot 9$."
>}}

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(y + 11)^2$"
  answer="y^2 + 22y + 121"
  hint="Square y, square 11, and double the product $2 \cdot y \cdot 11$ for the middle term."
>}}

**Example.** Multiply: $(y-3)^2$.

Because the binomial is a difference, we use $(a-b)^2 = a^2 - 2ab + b^2$.
Here $a$ is $y$ and $b$ is $3$:

$$(y-3)^2 = y^2 - 2 \cdot y \cdot 3 + 3^2 = y^2 - 6y + 9$$

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(x - 9)^2$"
  answer="x^2 - 18x + 81"
  hint="This is a difference, so the middle term is subtracted: $-2 \cdot x \cdot 9$."
>}}

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(p - 13)^2$"
  answer="p^2 - 26p + 169"
  hint="Square p, square 13, and subtract twice their product for the middle term."
>}}

**Example.** Multiply: $(4x+6)^2$.

Use the pattern with $a = 4x$ and $b = 6$:

$$(4x+6)^2 = (4x)^2 + 2 \cdot 4x \cdot 6 + 6^2 = 16x^2 + 48x + 36$$

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(6x + 3)^2$"
  answer="36x^2 + 36x + 9"
  hint="The first term is $(6x)^2 = 36x^2$. The middle term is $2 \cdot 6x \cdot 3$."
>}}

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(4x + 9)^2$"
  answer="16x^2 + 72x + 81"
  hint="Square 4x to get $16x^2$, then double the product $2 \cdot 4x \cdot 9$ for the middle term."
>}}

**Example.** Multiply: $(2x-3y)^2$.

Now both terms carry variables. Use the pattern with $a = 2x$ and $b = 3y$:

$$(2x-3y)^2 = (2x)^2 - 2 \cdot 2x \cdot 3y + (3y)^2 = 4x^2 - 12xy + 9y^2$$

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(2c - d)^2$"
  answer="4c^2 - 4cd + d^2"
  hint="Here $a = 2c$ and $b = d$. Square each term and subtract twice their product $2 \cdot 2c \cdot d$."
>}}

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(4x - 5y)^2$"
  answer="16x^2 - 40xy + 25y^2"
  hint="Square 4x and 5y, then subtract the middle term $2 \cdot 4x \cdot 5y$."
>}}

**Example.** Multiply: $\left(4u^3 + 1\right)^2$.

The pattern still applies when the first term has an exponent. With
$a = 4u^3$ and $b = 1$:

$$\left(4u^3 + 1\right)^2 = \left(4u^3\right)^2 + 2 \cdot 4u^3 \cdot 1 + 1^2 = 16u^6 + 8u^3 + 1$$

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(2x^2 + 1)^2$"
  answer="4x^4 + 4x^2 + 1"
  hint="Square $2x^2$ to get 4x^4 (multiply exponents), then double the product $2 \cdot 2x^2 \cdot 1$."
>}}

{{< fillin
  question="Multiply using the Binomial Squares Pattern: $(3y^3 + 2)^2$"
  answer="9y^6 + 12y^3 + 4"
  hint="Square $3y^3$ to get $9y^6$, square 2 to get 4, and the middle term is $2 \cdot 3y^3 \cdot 2$."
>}}

## Multiply Conjugates Using the Product of Conjugates Pattern

We just saw a pattern for squaring binomials that we can use to make
multiplying some binomials easier. Similarly, there is a pattern for another
product of binomials. But before we get to it, we need to introduce some
vocabulary.

Look at these pairs of binomials:

$$(x-9)(x+9) \qquad (y-8)(y+8) \qquad (2x-5)(2x+5)$$

Notice that the first terms are the same in each pair, and the last terms
are the same in each pair. Notice too that each pair has one sum and one
difference. A pair of binomials that each have the same first term and the
same last term, but one is a sum and one is a difference, has a special
name. It is called a **conjugate pair** and is of the form $(a-b)$,
$(a+b)$.

{{< callout type="info" >}}
  **Conjugate Pair.** A **conjugate pair** is two binomials of the form

$$(a-b), \quad (a+b).$$

  The pair of binomials each have the same first term and the same last
  term, but one binomial is a sum and the other is a difference.
{{< /callout >}}

There is a nice pattern for finding the product of conjugates. Let's look
for it by using FOIL to multiply some conjugate pairs:

$$
\begin{array}{rcl}
(x-9)(x+9) &=& x^2 + 9x - 9x - 81 = x^2 - 81 \\
(y-8)(y+8) &=& y^2 + 8y - 8y - 64 = y^2 - 64 \\
(2x-5)(2x+5) &=& 4x^2 + 10x - 10x - 25 = 4x^2 - 25
\end{array}
$$

Each **first term** is the product of the first terms of the binomials, and
since they are identical it is the square of the first term. To get the
first term, **square the first term**. The **last term** came from
multiplying the last terms, the square of the last term. To get the last
term, **square the last term**.

What do you observe about the products? The product of the two binomials is
also a binomial! Why is there no middle term? Notice the two middle terms
you get from FOIL combine to $0$ in every case, the result of one addition
and one subtraction. The product of conjugates is always of the form
$a^2 - b^2$. This is called a **difference of squares**.

{{< callout type="info" >}}
  **Product of Conjugates Pattern.** If $a$ and $b$ are real numbers,

$$(a-b)(a+b) = a^2 - b^2.$$

  The product is called a **difference of squares**. To multiply
  conjugates, square the first term, square the last term, and write the
  product as a difference of squares.
{{< /callout >}}

Let's test this pattern with a numerical example. The product
$(10-2)(10+2)$ is a product of conjugates, so the result is a difference of
squares: $10^2 - 2^2 = 100 - 4 = 96$. Using the order of operations,
$(10-2)(10+2) = (8)(12) = 96$. The result is the same!

**Example.** Multiply: $(x-8)(x+8)$.

First, recognize this as a product of conjugates. The binomials have the
same first term and the same last term, and one is a sum and the other is a
difference. Square the first term, square the last term, and write the
product as a difference of squares:

$$(x-8)(x+8) = x^2 - 8^2 = x^2 - 64$$

{{< fillin
  question="Multiply using the Product of Conjugates Pattern: $(x - 5)(x + 5)$"
  answer="x^2 - 25"
  hint="Square the first term x and square the last term 5, then write the difference of squares."
>}}

{{< fillin
  question="Multiply using the Product of Conjugates Pattern: $(w - 3)(w + 3)$"
  answer="w^2 - 9"
  hint="Square w and square 3, then subtract: a difference of squares has no middle term."
>}}

**Example.** Multiply: $(2x+5)(2x-5)$.

Are the binomials conjugates? Yes — so it is the product of conjugates.
Square the first term $2x$ and the last term $5$:

$$(2x+5)(2x-5) = (2x)^2 - 5^2 = 4x^2 - 25$$

{{< fillin
  question="Multiply using the Product of Conjugates Pattern: $(6x + 5)(6x - 5)$"
  answer="36x^2 - 25"
  hint="Square 6x to get $36x^2$ and square 5 to get 25."
>}}

{{< fillin
  question="Multiply using the Product of Conjugates Pattern: $(2x + 7)(2x - 7)$"
  answer="4x^2 - 49"
  hint="Square 2x and square 7, then write the difference of squares."
>}}

The binomials in the next example may look backwards — the variable is in
the second term. But the two binomials are still conjugates, so we use the
same pattern to multiply them.

**Example.** Find the product: $(3+5x)(3-5x)$.

It is the product of conjugates. Square the first term $3$ and the last term
$5x$:

$$(3+5x)(3-5x) = 3^2 - (5x)^2 = 9 - 25x^2$$

{{< fillin
  question="Find the product using the Product of Conjugates Pattern: $(7 + 4x)(7 - 4x)$"
  answer="49 - 16x^2"
  hint="Square 7 to get 49 and square 4x to get $16x^2$, then write the difference."
>}}

{{< fillin
  question="Find the product using the Product of Conjugates Pattern: $(9 - 2y)(9 + 2y)$"
  answer="81 - 4y^2"
  hint="Square 9 to get 81 and square 2y to get $4y^2$."
>}}

Now we'll multiply conjugates that have two variables.

**Example.** Find the product: $(5m-9n)(5m+9n)$.

This fits the pattern. Square the first term $5m$ and the last term $9n$:

$$(5m-9n)(5m+9n) = (5m)^2 - (9n)^2 = 25m^2 - 81n^2$$

{{< fillin
  question="Find the product using the Product of Conjugates Pattern: $(4p - 7q)(4p + 7q)$"
  answer="16p^2 - 49q^2"
  hint="Square 4p to get $16p^2$ and square 7q to get $49q^2$."
>}}

{{< fillin
  question="Find the product using the Product of Conjugates Pattern: $(3x - y)(3x + y)$"
  answer="9x^2 - y^2"
  hint="Square 3x to get $9x^2$ and square y to get $y^2$."
>}}

**Example.** Find the product: $(cd-8)(cd+8)$.

This fits the pattern with first term $cd$ and last term $8$:

$$(cd-8)(cd+8) = (cd)^2 - 8^2 = c^2d^2 - 64$$

{{< fillin
  question="Find the product using the Product of Conjugates Pattern: $(xy - 6)(xy + 6)$"
  answer="x^2 y^2 - 36"
  hint="Square xy to get $x^2 y^2$ and square 6 to get 36."
>}}

{{< fillin
  question="Find the product using the Product of Conjugates Pattern: $(ab - 9)(ab + 9)$"
  answer="a^2 b^2 - 81"
  hint="Square ab to get $a^2 b^2$ and square 9 to get 81."
>}}

**Example.** Find the product: $\left(6u^2 - 11v^5\right)\left(6u^2 + 11v^5\right)$.

This fits the pattern with first term $6u^2$ and last term $11v^5$:

$$\left(6u^2 - 11v^5\right)\left(6u^2 + 11v^5\right) = \left(6u^2\right)^2 - \left(11v^5\right)^2 = 36u^4 - 121v^{10}$$

{{< fillin
  question="Find the product using the Product of Conjugates Pattern: $(3x^2 - 4y^3)(3x^2 + 4y^3)$"
  answer="9x^4 - 16y^6"
  hint="Square $3x^2$ to get $9x^4$ and square $4y^3$ to get 16y^6 (multiply exponents by 2)."
>}}

{{< fillin
  question="Find the product using the Product of Conjugates Pattern: $(2m^2 - 5n^3)(2m^2 + 5n^3)$"
  answer="4m^4 - 25n^6"
  hint="Square $2m^2$ to get $4m^4$ and square $5n^3$ to get $25n^6$."
>}}

## Recognize and Use the Appropriate Special Product Pattern

We just developed special product patterns for Binomial Squares and for the
Product of Conjugates. The products look similar, so it is important to
recognize when it is appropriate to use each of these patterns and to notice
how they differ.

| | Binomial Squares | Product of Conjugates |
| :--- | :--- | :--- |
| Pattern | $(a+b)^2 = a^2 + 2ab + b^2$; $(a-b)^2 = a^2 - 2ab + b^2$ | $(a-b)(a+b) = a^2 - b^2$ |
| What you're doing | Squaring a binomial | Multiplying conjugates |
| The product is a | trinomial | binomial |
| Inner and outer FOIL terms are | the same | opposites |
| Middle term | double the product of the terms | none |

**Example.** Choose the appropriate pattern and use it to find each product.

(a) $(2x-3)(2x+3)$ — these are conjugates. They have the same first terms
and the same last terms, and one binomial is a sum and the other is a
difference. It fits the Product of Conjugates pattern:

$$(2x-3)(2x+3) = (2x)^2 - 3^2 = 4x^2 - 9$$

(b) $(8x-5)^2$ — we are asked to square a binomial. It fits the Binomial
Squares pattern:

$$(8x-5)^2 = (8x)^2 - 2 \cdot 8x \cdot 5 + 5^2 = 64x^2 - 80x + 25$$

(c) $(6m+7)^2$ — again we square a binomial, so we use the Binomial Squares
pattern:

$$(6m+7)^2 = (6m)^2 + 2 \cdot 6m \cdot 7 + 7^2 = 36m^2 + 84m + 49$$

(d) $(5x-6)(6x+5)$ — this product does not fit either pattern (the
binomials are not identical and are not conjugates), so we use FOIL:

$$(5x-6)(6x+5) = 30x^2 + 25x - 36x - 30 = 30x^2 - 11x - 30$$

{{< fillin
  question="Choose the appropriate pattern and find the product: $(9b - 2)(2b + 9)$"
  answer="18b^2 + 77b - 18"
  hint="These binomials are neither identical nor conjugates, so use FOIL."
>}}

{{< fillin
  question="Choose the appropriate pattern and find the product: $(9p - 4)^2$"
  answer="81p^2 - 72p + 16"
  hint="This is a binomial square: square 9p, square 4, and subtract twice their product $2 \cdot 9p \cdot 4$."
>}}

{{< fillin
  question="Choose the appropriate pattern and find the product: $(7y + 1)^2$"
  answer="49y^2 + 14y + 1"
  hint="This is a binomial square: square 7y, square 1, and add twice their product $2 \cdot 7y \cdot 1$."
>}}

{{< fillin
  question="Choose the appropriate pattern and find the product: $(4r - 3)(4r + 3)$"
  answer="16r^2 - 9"
  hint="These are conjugates: square the first term 4r and the last term 3, then write the difference of squares."
>}}

## Key terms

**conjugate pair** — two binomials of the form $(a-b)$, $(a+b)$ that have
the same first term and the same last term, but one is a sum and the other a
difference. **difference of squares** — a binomial of the form $a^2 - b^2$;
it is the product of a conjugate pair. **Binomial Squares Pattern** —
$(a+b)^2 = a^2 + 2ab + b^2$ and $(a-b)^2 = a^2 - 2ab + b^2$. **Product of
Conjugates Pattern** — $(a-b)(a+b) = a^2 - b^2$.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 6.4: Special Products](https://openstax.org/books/elementary-algebra-2e/pages/6-4-special-products) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the pattern-derivation walkthroughs and worked-example step tables as typeset display equations and a comparison table; kept the Binomial Squares, Conjugate Pair, and Product of Conjugates patterns as callouts; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
