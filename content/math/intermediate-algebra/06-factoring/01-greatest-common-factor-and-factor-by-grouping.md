---
title: Greatest Common Factor and Factor by Grouping
description: >-
  Finding the greatest common factor of expressions, factoring the greatest
  common factor from polynomials, and factoring four-term polynomials by
  grouping — adapted from OpenStax Intermediate Algebra 2e, Section 6.1.
source_section: "6.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find the greatest
  common factor of two or more expressions, factor the greatest common
  factor from a polynomial, and factor by grouping.
{{< /callout >}}

## Find the greatest common factor of two or more expressions

Earlier we multiplied factors together to get a product. Now we reverse this
process: we start with a product and break it down into its factors. Splitting
a product into factors is called **factoring**. For example,
$8 \cdot 7 = 56$ and $2x(x+3)=2x^2+6x$ show multiplication; reversing either
process finds the factors of the product.

We have already factored numbers to find the least common multiple of two or
more numbers. Now we factor expressions and find their greatest common factor.
The method is similar to the method used to find the LCM.

{{< callout type="info" >}}
  **Greatest common factor.** The **greatest common factor (GCF)** of two or
  more expressions is the largest expression that is a factor of all the
  expressions.
{{< /callout >}}

{{< callout type="info" >}}
  **Find the greatest common factor (GCF) of two or more expressions.**

  1. Factor each coefficient into primes. Write all variables with exponents
     in expanded form.
  2. List all factors, matching common factors in a column. In each column,
     identify the common factors.
  3. Bring down the common factors that all expressions share.
  4. Multiply the factors.
{{< /callout >}}

**Example.** Find the greatest common factor of $21x^3$, $9x^2$, and $15x$.

Factor each coefficient into primes and expand each power. The factors common
to all three expressions are $3$ and $x$:

$$
\begin{array}{rcl}
21x^3 &=& 3 \cdot 7 \cdot x \cdot x \cdot x \\[4pt]
9x^2 &=& 3 \cdot 3 \cdot x \cdot x \\[4pt]
15x &=& 3 \cdot 5 \cdot x
\end{array}
$$

Bring down and multiply the common factors:

$$\text{GCF}=3 \cdot x=3x.$$

Therefore, the GCF of $21x^3$, $9x^2$, and $15x$ is $3x$.

{{< fillin
  question="Find the greatest common factor of $25m^4$, $35m^3$, and $20m^2$."
  answer="5m^2"
  answerDisplay="$5m^2$"
  hint="Prime-factor the coefficients and expand the powers of $m$. Keep only the factors shared by all three expressions."
>}}

{{< fillin
  question="Find the greatest common factor of $14x^3$, $70x^2$, and $105x$."
  answer="7x"
  answerDisplay="$7x$"
  hint="The coefficient GCF is found from 14, 70, and 105. For the variable factor, use the smallest exponent shared by every term."
>}}

## Factor the greatest common factor from a polynomial

It is sometimes useful to represent a number as a product of factors. For
example, $12=2 \cdot 6=3 \cdot 4$. In algebra, it is also useful to represent
a polynomial in **factored form**. We can start with the polynomial
$3x^2+15x$ and end with its factors, $3x(x+5)$, by applying the Distributive
Property in reverse.

{{< callout type="info" >}}
  **Distributive Property.** If $a$, $b$, and $c$ are real numbers, then

  $$a(b+c)=ab+ac \quad\text{and}\quad ab+ac=a(b+c).$$

  The form on the left is used to multiply. The form on the right is used to
  factor.
{{< /callout >}}

To factor a polynomial, find the GCF of all its terms and write the polynomial
as a product.

**Example.** Use the Distributive Property to factor
$8m^3-12m^2n+20mn^2$.

First find the GCF. Factoring the coefficients and expanding the variables
shows that every term contains $4m$:

$$
\begin{array}{rcl}
8m^3 &=& 2 \cdot 2 \cdot 2 \cdot m \cdot m \cdot m \\[4pt]
12m^2n &=& 2 \cdot 2 \cdot 3 \cdot m \cdot m \cdot n \\[4pt]
20mn^2 &=& 2 \cdot 2 \cdot 5 \cdot m \cdot n \cdot n
\end{array}
$$

Rewrite each term as a product using $4m$, and then use the Distributive
Property in reverse:

$$
\begin{array}{lrcl}
\text{Rewrite each term.} & 8m^3-12m^2n+20mn^2
  &=& 4m \cdot 2m^2-4m \cdot 3mn+4m \cdot 5n^2 \\[4pt]
\text{Factor the GCF.} &&=& 4m(2m^2-3mn+5n^2)
\end{array}
$$

Multiplying the factors returns the original polynomial, so the factorization
checks.

{{< fillin
  question="Factor $9xy^2+6x^2y^2+21y^3$ by taking out the greatest common factor."
  answer="3y^2(3x+2x^2+7y)"
  answerDisplay="$3y^2(3x+2x^2+7y)$"
  hint="Find the coefficient GCF and the smallest power of each variable shared by all three terms."
>}}

{{< fillin
  question="Factor $3p^3-6p^2q+9pq^3$ by taking out the greatest common factor."
  answer="3p(p^2-2pq+3q^3)"
  hint="All three coefficients share 3, and each term contains at least one factor of $p$."
>}}

{{< callout type="info" >}}
  **Factor the greatest common factor from a polynomial.**

  1. Find the GCF of all the terms of the polynomial.
  2. Rewrite each term as a product using the GCF.
  3. Use the reverse Distributive Property to factor the expression.
  4. Check by multiplying the factors.
{{< /callout >}}

### Factor as a noun and a verb

We use *factor* as both a noun and a verb. In the statement “$7$ is a factor
of $14$,” *factor* is a noun. In the instruction “factor $3$ from $3a+3$,” it
is a verb.

**Example.** Factor $5x^3-25x^2$.

The GCF of $5x^3$ and $25x^2$ is $5x^2$. Rewrite each term using the GCF,
then factor:

$$
\begin{array}{lrcl}
\text{Rewrite each term.} & 5x^3-25x^2
  &=& 5x^2 \cdot x-5x^2 \cdot 5 \\[4pt]
\text{Factor the GCF.} &&=& 5x^2(x-5)
\end{array}
$$

**Check:** $5x^2(x-5)=5x^3-25x^2$.

{{< fillin
  question="Factor $2x^3+12x^2$ by taking out the greatest common factor."
  answer="2x^2(x+6)"
  answerDisplay="$2x^2(x+6)$"
  hint="Find the largest coefficient and variable factors shared by both terms."
>}}

{{< fillin
  question="Factor $6y^3-15y^2$ by taking out the greatest common factor."
  answer="3y^2(2y-5)"
  answerDisplay="$3y^2(2y-5)$"
  hint="The coefficient GCF is 3, and both terms contain $y^2$."
>}}

**Example.** Factor $8x^3y-10x^2y^2+12xy^3$.

The GCF of the three terms is $2xy$. Rewrite each term using the GCF and
factor:

$$
\begin{array}{lrcl}
\text{Rewrite each term.} & 8x^3y-10x^2y^2+12xy^3
  &=& 2xy \cdot 4x^2-2xy \cdot 5xy+2xy \cdot 6y^2 \\[4pt]
\text{Factor the GCF.} &&=& 2xy(4x^2-5xy+6y^2)
\end{array}
$$

**Check:** multiplying $2xy$ through the trinomial gives the original
polynomial.

{{< fillin
  question="Factor $15x^3y-3x^2y^2+6xy^3$ by taking out the greatest common factor."
  answer="3xy(5x^2-xy+2y^2)"
  hint="Every term shares 3, one factor of $x$, and one factor of $y$."
>}}

{{< fillin
  question="Factor $8a^3b+2a^2b^2-6ab^3$ by taking out the greatest common factor."
  answer="2ab(4a^2+ab-3b^2)"
  hint="Every term shares 2, one factor of $a$, and one factor of $b$."
>}}

When the leading coefficient is negative, factor the negative out as part of
the GCF.

**Example.** Factor $-4a^3+36a^2-8a$.

Because the leading coefficient is negative, use the negative GCF $-4a$:

$$
\begin{array}{lrcl}
\text{Rewrite each term.} & -4a^3+36a^2-8a
  &=& -4a \cdot a^2+(-4a)(-9a)+(-4a) \cdot 2 \\[4pt]
\text{Factor the GCF.} &&=& -4a(a^2-9a+2)
\end{array}
$$

**Check:** $-4a(a^2-9a+2)=-4a^3+36a^2-8a$.

{{< fillin
  question="Factor $-4b^3+16b^2-8b$ by taking out a negative greatest common factor."
  answer="-4b(b^2-4b+2)"
  answerDisplay="$-4b(b^2-4b+2)$"
  hint="Since the leading coefficient is negative, include the negative sign in the GCF."
>}}

{{< fillin
  question="Factor $-7a^3+21a^2-14a$ by taking out a negative greatest common factor."
  answer="-7a(a^2-3a+2)"
  answerDisplay="$-7a(a^2-3a+2)$"
  hint="Take out $-7a$, then determine the three terms that remain."
>}}

So far the greatest common factors have been monomials. A GCF can also be a
binomial.

**Example.** Factor $3y(y+7)-4(y+7)$.

The binomial $y+7$ is the common factor:

$$3y(y+7)-4(y+7)=(y+7)(3y-4).$$

Check by multiplying the factors.

{{< fillin
  question="Factor $4m(m+3)-7(m+3)$ by taking out the common binomial factor."
  answer="(m+3)(4m-7)"
  answerDisplay="$(m+3)(4m-7)$"
  hint="Treat the repeated binomial $(m+3)$ as one common factor."
>}}

{{< fillin
  question="Factor $8n(n-4)+5(n-4)$ by taking out the common binomial factor."
  answer="(n-4)(8n+5)"
  answerDisplay="$(n-4)(8n+5)$"
  hint="Treat the repeated binomial $(n-4)$ as one common factor."
>}}

## Factor by grouping

Sometimes there is no common factor of all the terms of a polynomial. When
there are four terms, separate the polynomial into two groups of two terms.
Then look for the GCF in each group. If the polynomial can be factored, a
common factor emerges from the two groups. Not all polynomials can be
factored; just as some numbers are prime, some polynomials are prime.

**Example.** Factor by grouping: $xy+3y+2x+6$.

There is no GCF of all four terms. Group the first two terms and the last two
terms, then factor the GCF from each group:

$$
\begin{array}{lrcl}
\text{Group the terms.} &&& (xy+3y)+(2x+6) \\[4pt]
\text{Factor each group.} &&& y(x+3)+2(x+3) \\[4pt]
\text{Factor the common binomial.} &&& (x+3)(y+2)
\end{array}
$$

**Check:** $(x+3)(y+2)=xy+2x+3y+6$, which is the original polynomial with
its middle terms reordered.

{{< fillin
  question="Factor by grouping: $xy+8y+3x+24$."
  answer="(x+8)(y+3)"
  answerDisplay="$(x+8)(y+3)$"
  hint="Group the first two terms and the last two terms, then factor each group."
>}}

{{< fillin
  question="Factor by grouping: $ab+7b+8a+56$."
  answer="(a+7)(b+8)"
  answerDisplay="$(a+7)(b+8)$"
  hint="Group the first two terms and the last two terms. Both groups should reveal the same binomial factor."
>}}

{{< callout type="info" >}}
  **Factor by grouping.**

  1. Group terms with common factors.
  2. Factor out the common factor in each group.
  3. Factor the common factor from the expression.
  4. Check by multiplying the factors.
{{< /callout >}}

**Example.** Factor each polynomial by grouping.

(a) $x^2+3x-2x-6$

There is no GCF in all four terms. Separate the polynomial into two groups.
Be careful with the signs when factoring the GCF from the last group:

$$
\begin{array}{lrcl}
\text{Group the terms.} &&& (x^2+3x)+(-2x-6) \\[4pt]
\text{Factor each group.} &&& x(x+3)-2(x+3) \\[4pt]
\text{Factor the common binomial.} &&& (x+3)(x-2)
\end{array}
$$

(b) $6x^2-3x-4x+2$

Again, group the terms, factor each group, and then factor out the common
binomial:

$$
\begin{array}{lrcl}
\text{Group the terms.} &&& (6x^2-3x)+(-4x+2) \\[4pt]
\text{Factor each group.} &&& 3x(2x-1)-2(2x-1) \\[4pt]
\text{Factor the common binomial.} &&& (2x-1)(3x-2)
\end{array}
$$

Check both results by multiplying their factors.

{{< fillin
  question="Factor by grouping: $x^2+2x-5x-10$."
  answer="(x-5)(x+2)"
  answerDisplay="$(x-5)(x+2)$"
  hint="Group the first two terms and the last two terms. Factor a negative number from the second group."
>}}

{{< fillin
  question="Factor by grouping: $20x^2-16x-15x+12$."
  answer="(5x-4)(4x-3)"
  answerDisplay="$(5x-4)(4x-3)$"
  hint="Group the first pair and the second pair; their common binomial factor is $5x-4$."
>}}

{{< fillin
  question="Factor by grouping: $y^2+4y-7y-28$."
  answer="(y+4)(y-7)"
  answerDisplay="$(y+4)(y-7)$"
  hint="Group the first two terms and the last two terms. Factor a negative number from the second group."
>}}

{{< fillin
  question="Factor by grouping: $42m^2-18m-35m+15$."
  answer="(7m-3)(6m-5)"
  answerDisplay="$(7m-3)(6m-5)$"
  hint="After grouping, factor $6m$ from the first group and $-5$ from the second."
>}}

## Key terms

**factoring** — splitting a product into its factors. **greatest common
factor (GCF)** — the largest expression that is a factor of every expression
in a given collection. **factored form** — an expression written as a product
of factors. **factor by grouping** — factor a four-term polynomial by grouping
terms, factoring each group, and then factoring the common binomial.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 6.1: Greatest Common Factor and Factor by Grouping](https://openstax.org/books/intermediate-algebra-2e/pages/6-1-greatest-common-factor-and-factor-by-grouping) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked-example tables as accessible aligned math, omitted the Be Prepared quiz, media links, and end-of-section exercises, and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
