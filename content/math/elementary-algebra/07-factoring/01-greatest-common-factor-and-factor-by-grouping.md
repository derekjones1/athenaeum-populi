---
title: Greatest Common Factor and Factor by Grouping
description: >-
  Finding the greatest common factor of two or more expressions, factoring the
  GCF from a polynomial, and factoring a four-term polynomial by grouping —
  adapted from OpenStax Elementary Algebra 2e, Section 7.1.
source_section: "7.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find the greatest common
  factor of two or more expressions, factor the greatest common factor from a
  polynomial, and factor by grouping.
{{< /callout >}}

## Find the greatest common factor of two or more expressions

Earlier we multiplied factors together to get a product. Now we will be
reversing this process; we will start with a product and then break it down
into its factors. Splitting a product into factors is called **factoring**.

$$
\begin{array}{lrcl}
\text{factors} & 8 \cdot 7 &=& 56 \quad \text{product} \\[4pt]
\text{factors} & 2x(x + 3) &=& 2x^2 + 6x \quad \text{product}
\end{array}
$$

We have learned how to factor numbers to find the least common multiple (LCM)
of two or more numbers. Now we will factor expressions and find the **greatest
common factor** of two or more expressions. The method we use is similar to
what we used to find the LCM.

{{< callout type="info" >}}
  **Greatest common factor.** The greatest common factor (GCF) of two or more
  expressions is the largest expression that is a factor of all the
  expressions.
{{< /callout >}}

First we'll find the GCF of two numbers.

**Example.** Find the GCF of $54$ and $36$.

Factor each coefficient into primes, and line up the common factors in
columns. We circle the $2$, $3$, and $3$ that are shared by both numbers:

$$
\begin{array}{rcl}
54 &=& 2 \cdot \phantom{2 \cdot {}} 3 \cdot 3 \cdot 3 \\
36 &=& 2 \cdot 2 \cdot 3 \cdot 3
\end{array}
$$

Bring down the common factors that both share — one $2$, and two $3\text{s}$ —
then multiply:

$$\text{GCF} = 2 \cdot 3 \cdot 3 = 18$$

The GCF of $54$ and $36$ is $18$. Notice that, because the GCF is a factor of
both numbers, $54$ and $36$ can be written as multiples of $18$:

$$54 = 18 \cdot 3 \qquad 36 = 18 \cdot 2$$

{{< fillin
  question="Find the GCF of 48 and 80."
  answer="16"
  hint="Factor each number into primes, line up the shared primes in columns, and multiply the common ones."
>}}

{{< fillin
  question="Find the GCF of 18 and 40."
  answer="2"
  hint="Factor $18 = 2 \cdot 3 \cdot 3$ and $40 = 2 \cdot 2 \cdot 2 \cdot 5$; only one prime is shared."
>}}

We summarize the steps we use to find the GCF below.

{{< callout type="info" >}}
  **Find the greatest common factor (GCF) of two expressions.**

  1. Factor each coefficient into primes. Write all variables with exponents in
     expanded form.
  2. List all factors — matching common factors in a column. In each column,
     circle the common factors.
  3. Bring down the common factors that all expressions share.
  4. Multiply the factors.
{{< /callout >}}

In the first example, the GCF was a constant. In the next two examples, we
will get variables in the greatest common factor.

**Example.** Find the greatest common factor of $27x^3$ and $18x^4$.

Factor each coefficient into primes and write the variables with exponents in
expanded form. Circle the common factors in each column, then bring them down:

$$
\begin{array}{rcl}
27x^3 &=& 3 \cdot 3 \cdot 3 \cdot x \cdot x \cdot x \\
18x^4 &=& 2 \cdot 3 \cdot 3 \cdot x \cdot x \cdot x \cdot x
\end{array}
$$

The shared factors are two $3\text{s}$ and three $x\text{s}$, so:

$$\text{GCF} = 3 \cdot 3 \cdot x \cdot x \cdot x = 9x^3$$

The GCF of $27x^3$ and $18x^4$ is $9x^3$.

{{< fillin
  question="Find the GCF of $12x^2$ and $18x^3$."
  answer="6x^2"
  answerDisplay="$6x^2$"
  hint="The GCF of the coefficients $12$ and $18$ is $6$; for the variable, take the smaller power of $x$."
>}}

{{< fillin
  question="Find the GCF of $16y^2$ and $24y^3$."
  answer="8y^2"
  answerDisplay="$8y^2$"
  hint="Find the GCF of $16$ and $24$, then take the smaller power of $y$."
>}}

**Example.** Find the GCF of $4x^2 y$ and $6xy^3$.

Factor each coefficient into primes and expand the variables. The shared
factors are one $2$, one $x$, and one $y$:

$$
\begin{array}{rcl}
4x^2 y &=& 2 \cdot 2 \cdot x \cdot x \cdot y \\
6xy^3 &=& 2 \cdot 3 \cdot x \cdot y \cdot y \cdot y
\end{array}
$$

$$\text{GCF} = 2 \cdot x \cdot y = 2xy$$

The GCF of $4x^2 y$ and $6xy^3$ is $2xy$.

{{< fillin
  question="Find the GCF of $6ab^4$ and $8a^2 b$."
  answer="2ab"
  answerDisplay="$2ab$"
  hint="The GCF of $6$ and $8$ is $2$; for each variable take the smaller power that appears in both."
>}}

{{< fillin
  question="Find the GCF of $9m^5 n^2$ and $12m^3 n$."
  answer="3m^3 n"
  answerDisplay="$3m^3 n$"
  hint="The GCF of $9$ and $12$ is $3$; take the smaller power of $m$ and of $n$."
>}}

We can also find the greatest common factor of more than two expressions.

**Example.** Find the GCF of $21x^3$, $9x^2$, and $15x$.

Factor each coefficient into primes and expand the variables. Every term
shares one $3$ and one $x$:

$$
\begin{array}{rcl}
21x^3 &=& 3 \cdot 7 \cdot x \cdot x \cdot x \\
9x^2 &=& 3 \cdot 3 \cdot x \cdot x \\
15x &=& 3 \cdot 5 \cdot x
\end{array}
$$

$$\text{GCF} = 3 \cdot x = 3x$$

The GCF of $21x^3$, $9x^2$, and $15x$ is $3x$.

{{< fillin
  question="Find the greatest common factor of $25m^4$, $35m^3$, and $20m^2$."
  answer="5m^2"
  answerDisplay="$5m^2$"
  hint="Find the GCF of $25$, $35$, and $20$, then take the smallest power of $m$ that appears in every term."
>}}

{{< fillin
  question="Find the greatest common factor of $14x^3$, $70x^2$, and $105x$."
  answer="7x"
  answerDisplay="$7x$"
  hint="The GCF of $14$, $70$, and $105$ is $7$; the smallest power of $x$ is $x^1$."
>}}

## Factor the greatest common factor from a polynomial

Just like in arithmetic, where it is sometimes useful to represent a number in
factored form (for example, $12$ as $2 \cdot 6$ or $3 \cdot 4$), in algebra it
can be useful to represent a polynomial in factored form. One way to do this
is by finding the GCF of all the terms. Remember, we multiply a polynomial by
a monomial using the Distributive Property:

$$
\begin{array}{lrcl}
\text{factors} & 2(x + 7) && \\[4pt]
& 2 \cdot x + 2 \cdot 7 &=& 2x + 14 \quad \text{product}
\end{array}
$$

Now we will start with a product, like $2x + 14$, and end with its factors,
$2(x + 7)$. To do this we apply the Distributive Property "in reverse."

{{< callout type="info" >}}
  **Distributive Property.** If $a$, $b$, $c$ are real numbers, then

  $$a(b + c) = ab + ac \qquad \text{and} \qquad ab + ac = a(b + c)$$

  The form on the left is used to multiply. The form on the right is used to
  factor.
{{< /callout >}}

So how do you use the Distributive Property to factor a polynomial? You just
find the GCF of all the terms and write the polynomial as a product!

**Example.** Factor $4x + 12$.

First find the GCF of all the terms. Since $4x = 2 \cdot 2 \cdot x$ and
$12 = 2 \cdot 2 \cdot 3$, the GCF is $2 \cdot 2 = 4$. Rewrite each term as a
product using the GCF, then use the "reverse" Distributive Property to factor:

$$
\begin{array}{rcl}
4x + 12 &=& 4 \cdot x + 4 \cdot 3 \\
&=& 4(x + 3)
\end{array}
$$

Check by multiplying: $4(x + 3) = 4 \cdot x + 4 \cdot 3 = 4x + 12$. ✓

{{< fillin
  question="Factor: $6a + 24$."
  answer="6(a + 4)"
  answerDisplay="$6(a + 4)$"
  hint="The GCF of $6a$ and $24$ is $6$; write each term as $6$ times something."
>}}

{{< fillin
  question="Factor: $2b + 14$."
  answer="2(b + 7)"
  answerDisplay="$2(b + 7)$"
  hint="The GCF of $2b$ and $14$ is $2$."
>}}

{{< callout type="info" >}}
  **Factor the greatest common factor from a polynomial.**

  1. Find the GCF of all the terms of the polynomial.
  2. Rewrite each term as a product using the GCF.
  3. Use the "reverse" Distributive Property to factor the expression.
  4. Check by multiplying the factors.
{{< /callout >}}

We use "factor" as both a noun and a verb. As a *noun*, $7$ is a **factor** of
$14$. As a *verb*, we **factor** $3$ from $3a + 3$.

**Example.** Factor $5a + 5$.

The GCF of $5a$ and $5$ is $5$. Rewrite each term as a product using the GCF,
then factor:

$$
\begin{array}{rcl}
5a + 5 &=& 5 \cdot a + 5 \cdot 1 \\
&=& 5(a + 1)
\end{array}
$$

Check by multiplying: $5(a + 1) = 5 \cdot a + 5 \cdot 1 = 5a + 5$. ✓

{{< fillin
  question="Factor: $14x + 14$."
  answer="14(x + 1)"
  answerDisplay="$14(x + 1)$"
  hint="The GCF of $14x$ and $14$ is $14$; remember $14 = 14 \cdot 1$."
>}}

{{< fillin
  question="Factor: $12p + 12$."
  answer="12(p + 1)"
  answerDisplay="$12(p + 1)$"
  hint="The GCF of $12p$ and $12$ is $12$."
>}}

The expressions in the next example have several factors in common. Remember to
write the GCF as the product of all the common factors.

**Example.** Factor $12x - 60$.

Since $12x = 2 \cdot 2 \cdot 3 \cdot x$ and $60 = 2 \cdot 2 \cdot 3 \cdot 5$,
the GCF is $2 \cdot 2 \cdot 3 = 12$. Rewrite each term and factor:

$$
\begin{array}{rcl}
12x - 60 &=& 12 \cdot x - 12 \cdot 5 \\
&=& 12(x - 5)
\end{array}
$$

Check by multiplying: $12(x - 5) = 12 \cdot x - 12 \cdot 5 = 12x - 60$. ✓

{{< fillin
  question="Factor: $18u - 36$."
  answer="18(u - 2)"
  answerDisplay="$18(u - 2)$"
  hint="The GCF of $18u$ and $36$ is $18$; note $36 = 18 \cdot 2$."
>}}

{{< fillin
  question="Factor: $30y - 60$."
  answer="30(y - 2)"
  answerDisplay="$30(y - 2)$"
  hint="The GCF of $30y$ and $60$ is $30$."
>}}

Now we'll factor the greatest common factor from a trinomial. We start by
finding the GCF of all three terms.

**Example.** Factor $4y^2 + 24y + 28$.

Find the GCF of all three terms. Since $4y^2 = 2 \cdot 2 \cdot y \cdot y$,
$24y = 2 \cdot 2 \cdot 2 \cdot 3 \cdot y$, and $28 = 2 \cdot 2 \cdot 7$, the GCF
is $2 \cdot 2 = 4$. Rewrite each term as a product using the GCF, then factor:

$$
\begin{array}{rcl}
4y^2 + 24y + 28 &=& 4 \cdot y^2 + 4 \cdot 6y + 4 \cdot 7 \\
&=& 4(y^2 + 6y + 7)
\end{array}
$$

Check by multiplying: $4(y^2 + 6y + 7) = 4y^2 + 24y + 28$. ✓

{{< fillin
  question="Factor: $5x^2 - 25x + 15$."
  answer="5(x^2 - 5x + 3)"
  answerDisplay="$5(x^2 - 5x + 3)$"
  hint="The GCF of $5x^2$, $25x$, and $15$ is $5$; divide each term by $5$."
>}}

{{< fillin
  question="Factor: $3y^2 - 12y + 27$."
  answer="3(y^2 - 4y + 9)"
  answerDisplay="$3(y^2 - 4y + 9)$"
  hint="The GCF of the three terms is $3$; divide each term by $3$."
>}}

**Example.** Factor $5x^3 - 25x^2$.

The GCF of $5x^3$ and $25x^2$ is $5x^2$. Rewrite each term and factor:

$$
\begin{array}{rcl}
5x^3 - 25x^2 &=& 5x^2 \cdot x - 5x^2 \cdot 5 \\
&=& 5x^2(x - 5)
\end{array}
$$

Check by multiplying: $5x^2(x - 5) = 5x^2 \cdot x - 5x^2 \cdot 5 = 5x^3 - 25x^2$. ✓

{{< fillin
  question="Factor: $2x^3 + 12x^2$."
  answer="2x^2(x + 6)"
  answerDisplay="$2x^2(x + 6)$"
  hint="The GCF of $2x^3$ and $12x^2$ is $2x^2$; take the smaller power of $x$."
>}}

{{< fillin
  question="Factor: $6y^3 - 15y^2$."
  answer="3y^2(2y - 5)"
  answerDisplay="$3y^2(2y - 5)$"
  hint="The GCF of $6y^3$ and $15y^2$ is $3y^2$."
>}}

**Example.** Factor $21x^3 - 9x^2 + 15x$.

In a previous example we found the GCF of $21x^3$, $9x^2$, and $15x$ to be
$3x$. Rewrite each term using the GCF, then factor:

$$
\begin{array}{rcl}
21x^3 - 9x^2 + 15x &=& 3x \cdot 7x^2 - 3x \cdot 3x + 3x \cdot 5 \\
&=& 3x(7x^2 - 3x + 5)
\end{array}
$$

Check by multiplying: $3x(7x^2 - 3x + 5) = 21x^3 - 9x^2 + 15x$. ✓

{{< fillin
  question="Factor: $20x^3 - 10x^2 + 14x$."
  answer="2x(10x^2 - 5x + 7)"
  answerDisplay="$2x(10x^2 - 5x + 7)$"
  hint="The GCF of the three terms is $2x$; divide each term by $2x$."
>}}

{{< fillin
  question="Factor: $24y^3 - 12y^2 - 20y$."
  answer="4y(6y^2 - 3y - 5)"
  answerDisplay="$4y(6y^2 - 3y - 5)$"
  hint="The GCF of $24y^3$, $12y^2$, and $20y$ is $4y$."
>}}

**Example.** Factor $8m^3 - 12m^2 n + 20mn^2$.

Since $8m^3 = 2 \cdot 2 \cdot 2 \cdot m \cdot m \cdot m$,
$12m^2 n = 2 \cdot 2 \cdot 3 \cdot m \cdot m \cdot n$, and
$20mn^2 = 2 \cdot 2 \cdot 5 \cdot m \cdot n \cdot n$, the GCF is
$2 \cdot 2 \cdot m = 4m$. Rewrite each term and factor:

$$
\begin{array}{rcl}
8m^3 - 12m^2 n + 20mn^2 &=& 4m \cdot 2m^2 - 4m \cdot 3mn + 4m \cdot 5n^2 \\
&=& 4m(2m^2 - 3mn + 5n^2)
\end{array}
$$

Check by multiplying: $4m(2m^2 - 3mn + 5n^2) = 8m^3 - 12m^2 n + 20mn^2$. ✓

{{< fillin
  question="Factor: $9xy^2 + 6x^2 y^2 + 21y^3$."
  answer="3y^2(3x + 2x^2 + 7y)"
  answerDisplay="$3y^2(3x + 2x^2 + 7y)$"
  hint="The GCF of the three terms is $3y^2$; divide each term by $3y^2$."
>}}

{{< fillin
  question="Factor: $3p^3 - 6p^2 q + 9pq^3$."
  answer="3p(p^2 - 2pq + 3q^3)"
  answerDisplay="$3p(p^2 - 2pq + 3q^3)$"
  hint="The GCF of the three terms is $3p$; divide each term by $3p$."
>}}

When the leading coefficient is negative, we factor the negative out as part of
the GCF.

**Example.** Factor $-8y - 24$.

When the leading coefficient is negative, the GCF will be negative. Ignoring
the signs of the terms, the GCF of $8y$ and $24$ is $8$. Since the expression
$-8y - 24$ has a negative leading coefficient, we use $-8$ as the GCF. Rewrite
each term and factor:

$$
\begin{array}{rcl}
-8y - 24 &=& -8 \cdot y + (-8) \cdot 3 \\
&=& -8(y + 3)
\end{array}
$$

Check by multiplying: $-8(y + 3) = -8 \cdot y + (-8) \cdot 3 = -8y - 24$. ✓

{{< fillin
  question="Factor: $-16z - 64$."
  answer="-16(z + 4)"
  answerDisplay="$-16(z + 4)$"
  hint="The leading coefficient is negative, so use $-16$ as the GCF; watch the sign on the second term."
>}}

{{< fillin
  question="Factor: $-9y - 27$."
  answer="-9(y + 3)"
  answerDisplay="$-9(y + 3)$"
  hint="Use $-9$ as the GCF; factoring $-9$ from $-27$ leaves $+3$."
>}}

**Example.** Factor $-6a^2 + 36a$.

The leading coefficient is negative, so the GCF is negative, $-6a$. Rewrite
each term using the GCF, then factor:

$$
\begin{array}{rcl}
-6a^2 + 36a &=& -6a \cdot a + (-6a)(-6) \\
&=& -6a(a - 6)
\end{array}
$$

Check by multiplying: $-6a(a - 6) = -6a \cdot a + (-6a)(-6) = -6a^2 + 36a$. ✓

{{< fillin
  question="Factor: $-4b^2 + 16b$."
  answer="-4b(b - 4)"
  answerDisplay="$-4b(b - 4)$"
  hint="Use $-4b$ as the GCF; factoring $-4b$ from $+16b$ leaves $-4$."
>}}

{{< fillin
  question="Factor: $-7a^2 + 21a$."
  answer="-7a(a - 3)"
  answerDisplay="$-7a(a - 3)$"
  hint="Use $-7a$ as the GCF; watch the sign on the second term."
>}}

The greatest common factor doesn't have to be a monomial — it can be a
binomial too.

**Example.** Factor $5q(q + 7) - 6(q + 7)$.

The GCF here is the binomial $q + 7$. Factor it out from each term:

$$5q(q + 7) - 6(q + 7) = (q + 7)(5q - 6)$$

Check on your own by multiplying.

{{< fillin
  question="Factor: $4m(m + 3) - 7(m + 3)$."
  answer="(m + 3)(4m - 7)"
  answerDisplay="$(m + 3)(4m - 7)$"
  hint="The common factor is the binomial $m + 3$; pull it out, and what remains from each term forms the other factor."
>}}

{{< fillin
  question="Factor: $8n(n - 4) + 5(n - 4)$."
  answer="(n - 4)(8n + 5)"
  answerDisplay="$(n - 4)(8n + 5)$"
  hint="The common factor is the binomial $n - 4$; the leftover pieces $8n$ and $+5$ form the other factor."
>}}

## Factor by grouping

When there is no common factor of all the terms of a polynomial, look for a
common factor in just some of the terms. When there are four terms, a good way
to start is by separating the polynomial into two parts with two terms in each
part. Then look for the GCF in each part. If the polynomial can be factored,
you will find a common factor emerges from both parts.

(Not all polynomials can be factored. Just like some numbers are prime, some
polynomials are prime.)

**Example.** Factor $xy + 3y + 2x + 6$.

There is no greatest common factor of all four terms, so let's separate the
first two terms from the second two terms. Factor the GCF from each group: from
$xy + 3y$ we factor $y$, and from $2x + 6$ we factor $2$:

$$
\begin{array}{rcl}
xy + 3y + 2x + 6 &=& y(x + 3) + 2(x + 3) \\
&=& (x + 3)(y + 2)
\end{array}
$$

Notice that each term now has a common factor of $(x + 3)$, so we factor it
out. Check by multiplying: $(x + 3)(y + 2) = xy + 2x + 3y + 6$. ✓

{{< fillin
  question="Factor: $xy + 8y + 3x + 24$."
  answer="(x + 8)(y + 3)"
  answerDisplay="$(x + 8)(y + 3)$"
  hint="Group the first two terms and the last two: factor $y$ from $xy + 8y$ and $3$ from $3x + 24$; a common binomial should appear."
>}}

{{< fillin
  question="Factor: $ab + 7b + 8a + 56$."
  answer="(a + 7)(b + 8)"
  answerDisplay="$(a + 7)(b + 8)$"
  hint="Factor $b$ from $ab + 7b$ and $8$ from $8a + 56$; the two groups should share a binomial factor."
>}}

{{< callout type="info" >}}
  **Factor by grouping.**

  1. Group terms with common factors.
  2. Factor out the common factor in each group.
  3. Factor the common factor from the expression.
  4. Check by multiplying the factors.
{{< /callout >}}

**Example.** Factor $x^2 + 3x - 2x - 6$.

There is no GCF in all four terms. Separate the polynomial into two parts:
$x^2 + 3x$ and $-2x - 6$. Factor the GCF from both parts, being careful with
the signs when factoring the GCF from the last two terms:

$$
\begin{array}{rcl}
x^2 + 3x - 2x - 6 &=& x(x + 3) - 2(x + 3) \\
&=& (x + 3)(x - 2)
\end{array}
$$

Check on your own by multiplying.

{{< fillin
  question="Factor: $x^2 + 2x - 5x - 10$."
  answer="(x - 5)(x + 2)"
  answerDisplay="$(x - 5)(x + 2)$"
  hint="Factor $x$ from $x^2 + 2x$ and $-5$ from $-5x - 10$; watch the sign, and a common binomial appears."
>}}

{{< fillin
  question="Factor: $y^2 + 4y - 7y - 28$."
  answer="(y + 4)(y - 7)"
  answerDisplay="$(y + 4)(y - 7)$"
  hint="Factor $y$ from $y^2 + 4y$ and $-7$ from $-7y - 28$; the two groups share a binomial factor."
>}}

## Key terms

**factoring** — splitting a product into the factors that multiply to give it.
**greatest common factor (GCF)** — the largest expression that is a factor of
each of two or more given expressions. **factor by grouping** — a method for
factoring a four-term polynomial by grouping terms with common factors,
factoring the GCF from each group, and then factoring out the common binomial.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 7.1: Greatest Common Factor and Factor by Grouping](https://openstax.org/books/elementary-algebra-2e/pages/7-1-greatest-common-factor-and-factor-by-grouping) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the GCF prime-factorization tables and worked factoring examples as prose with display equality chains, and stated each GCF as a bring-down product; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
