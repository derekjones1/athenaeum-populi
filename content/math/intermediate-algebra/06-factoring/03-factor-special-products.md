---
title: Factor Special Products
description: >-
  Factoring perfect square trinomials, differences of squares, and sums and
  differences of cubes — adapted from OpenStax Intermediate Algebra 2e,
  Section 6.3.
source_section: "6.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** factor perfect square
  trinomials, factor differences of squares, and factor sums and differences
  of cubes.
{{< /callout >}}

We have seen that some binomials and trinomials result from special
products—squaring binomials and multiplying conjugates. If you learn to
recognize these kinds of polynomials, you can use the special products
patterns to factor them much more quickly.

## Factor perfect square trinomials

Some trinomials are perfect squares. They result from multiplying a binomial
times itself. We squared a binomial using the Binomial Squares pattern in a
previous chapter. For example,

$$
(3x+4)^2=(3x)^2+2(3x)(4)+4^2=9x^2+24x+16.
$$

The trinomial $9x^2+24x+16$ is called a **perfect square trinomial**. It is
the square of the binomial $3x+4$. In this chapter, you will start with a
perfect square trinomial and factor it into its prime factors.

You could factor this trinomial using the methods described in the last
section, since it is of the form $ax^2+bx+c$. But if you recognize that the
first and last terms are squares and the trinomial fits the perfect square
trinomials pattern, you will save yourself a lot of work. Here is the
pattern—the reverse of the binomial squares pattern.

{{< callout type="info" >}}
  **Perfect Square Trinomials Pattern.** If $a$ and $b$ are real numbers,

  $$a^2+2ab+b^2=(a+b)^2$$
  $$a^2-2ab+b^2=(a-b)^2$$
{{< /callout >}}

To make use of this pattern, you have to recognize that a given trinomial
fits it. Check first to see if the leading coefficient is a perfect square,
$a^2$. Next check to see if the last term is a perfect square, $b^2$. Then
check the middle term—is it the product, $2ab$? If everything checks, you can
easily write the factors.

### How to factor perfect square trinomials

**Example.** Factor $9x^2+12x+4$.

The first term is a perfect square, $(3x)^2$, and the last term is a perfect
square, $2^2$. The middle term is twice the product of $3x$ and $2$:

$$2(3x)(2)=12x.$$

The trinomial fits the pattern $a^2+2ab+b^2$, so

$$9x^2+12x+4=(3x+2)^2.$$

Check by multiplying:

$$
(3x+2)^2=(3x)^2+2(3x)(2)+2^2=9x^2+12x+4 checkmark
$$

{{< fillin
  question="Factor: $4x^2+12x+9$."
  answer="(2x+3)^2"
  answerDisplay="$(2x+3)^2$"
  hint="Write the first and last terms as squares, then check the middle term."
>}}

{{< fillin
  question="Factor: $9y^2+24y+16$."
  answer="(3y+4)^2"
  answerDisplay="$(3y+4)^2$"
  hint="The square roots of the first and last terms are $3y$ and $4$."
>}}

The sign of the middle term determines which pattern we will use. When the
middle term is negative, we use the pattern $a^2-2ab+b^2$, which factors to
$(a-b)^2$.

{{< callout type="info" >}}
  **Factor perfect square trinomials.**

  1. Does the trinomial fit the pattern $a^2+2ab+b^2$ or
     $a^2-2ab+b^2$? Write the first and last terms as squares and check
     whether the middle term is $2ab$.
  2. Write the square of the binomial, $(a+b)^2$ or $(a-b)^2$.
  3. Check by multiplying.
{{< /callout >}}

**Example.** Factor $81y^2-72y+16$.

The first and last terms are squares. The middle term is negative, so the
binomial square would be $(a-b)^2$.

$$
\begin{array}{lrcl}
\text{Write the squares.} & 81y^2-72y+16 &=& (9y)^2-72y+4^2 \\[4pt]
\text{Check the middle term.} & 2(9y)(4) &=& 72y \\[4pt]
\text{Factor.} & 81y^2-72y+16 &=& (9y-4)^2
\end{array}
$$

Check:

$$
(9y-4)^2=(9y)^2-2(9y)(4)+4^2=81y^2-72y+16 checkmark
$$

{{< fillin
  question="Factor: $64y^2-80y+25$."
  answer="(8y-5)^2"
  answerDisplay="$(8y-5)^2$"
  hint="The square roots of the first and last terms are $8y$ and $5$."
>}}

{{< fillin
  question="Factor: $16z^2-72z+81$."
  answer="(4z-9)^2"
  answerDisplay="$(4z-9)^2$"
  hint="Check that $72z=2(4z)(9)$."
>}}

The next example is a perfect square trinomial with two variables.

**Example.** Factor $36x^2+84xy+49y^2$.

Test each term to verify the pattern:

$$
36x^2+84xy+49y^2=(6x)^2+2(6x)(7y)+(7y)^2=(6x+7y)^2.
$$

Check by multiplying:

$$
(6x+7y)^2=(6x)^2+2(6x)(7y)+(7y)^2=36x^2+84xy+49y^2 checkmark
$$

{{< fillin
  question="Factor: $49x^2+84xy+36y^2$."
  answer="(7x+6y)^2"
  answerDisplay="$(7x+6y)^2$"
  hint="Write the first and last terms as squares."
>}}

{{< fillin
  question="Factor: $64m^2+112mn+49n^2$."
  answer="(8m+7n)^2"
  answerDisplay="$(8m+7n)^2$"
  hint="Check whether $112mn=2(8m)(7n)$."
>}}

Remember, the first step in factoring is to look for a greatest common
factor. Perfect square trinomials may have a GCF in all three terms and it
should be factored out first. Sometimes, once the GCF has been factored, you
will recognize a perfect square trinomial.

**Example.** Factor $100x^2y-80xy+16y$.

$$
\begin{array}{lrcl}
\text{Factor out the GCF }4y. & 100x^2y-80xy+16y &=& 4y(25x^2-20x+4) \\[4pt]
\text{Verify the pattern.} & 4y(25x^2-20x+4) &=& 4y[(5x)^2-2(5x)(2)+2^2] \\[4pt]
\text{Factor.} & 100x^2y-80xy+16y &=& 4y(5x-2)^2
\end{array}
$$

Remember: keep the factor $4y$ in the final product. Multiplying verifies
that $4y(5x-2)^2=100x^2y-80xy+16y$.

{{< fillin
  question="Factor completely: $8x^2y-24xy+18y$."
  answer="2y{(2x-3)}^2"
  answerDisplay="$2y(2x-3)^2$"
  hint="First factor out the GCF $2y$."
>}}

{{< fillin
  question="Factor completely: $27p^2q+90pq+75q$."
  answer="3q{(3p+5)}^2"
  answerDisplay="$3q(3p+5)^2$"
  hint="First factor out the GCF $3q$."
>}}

## Factor differences of squares

The other special product you saw in the previous chapter was the Product
of Conjugates pattern. You used this to multiply two binomials that were
conjugates. For example,

$$
(3x-4)(3x+4)=(3x)^2-4^2=9x^2-16.
$$

A difference of squares factors to a product of conjugates.

{{< callout type="info" >}}
  **Difference of Squares Pattern.** If $a$ and $b$ are real numbers,

  $$a^2-b^2=(a-b)(a+b).$$
{{< /callout >}}

Remember, “difference” refers to subtraction. So, to use this pattern you
must make sure you have a binomial in which two squares are being
subtracted.

### How to factor a binomial using the difference of squares

**Example.** Factor $64y^2-1$.

The binomial is a difference and both terms are perfect squares. Write them
as squares, then write the product of conjugates:

$$64y^2-1=(8y)^2-1^2=(8y-1)(8y+1).$$

Multiplying the conjugates gives $64y^2-1$, which checks the result.

{{< fillin
  question="Factor: $121m^2-1$."
  answer="(11m-1)(11m+1)"
  answerDisplay="$(11m-1)(11m+1)$"
  hint="Write the terms as $(11m)^2$ and $1^2$."
>}}

{{< fillin
  question="Factor: $81y^2-1$."
  answer="(9y-1)(9y+1)"
  answerDisplay="$(9y-1)(9y+1)$"
  hint="A difference of squares factors as a product of conjugates."
>}}

{{< callout type="info" >}}
  **Factor differences of squares.**

  1. Does the binomial fit the pattern $a^2-b^2$? It must be a difference,
     and the first and last terms must be perfect squares.
  2. Write them as squares, $(a)^2-(b)^2$.
  3. Write the product of conjugates, $(a-b)(a+b)$.
  4. Check by multiplying.
{{< /callout >}}

It is important to remember that *sums of squares do not factor into a
product of binomials*. There are no binomial factors that multiply together
to get a sum of squares. After removing any GCF, the expression $a^2+b^2$
is prime. The next example shows variables in both terms.

**Example.** Factor $144x^2-49y^2$.

$$144x^2-49y^2=(12x)^2-(7y)^2=(12x-7y)(12x+7y).$$

Check by multiplying the conjugates.

{{< fillin
  question="Factor: $196m^2-25n^2$."
  answer="(14m-5n)(14m+5n)"
  answerDisplay="$(14m-5n)(14m+5n)$"
  hint="The square roots are $14m$ and $5n$."
>}}

{{< fillin
  question="Factor: $121p^2-9q^2$."
  answer="(11p-3q)(11p+3q)"
  answerDisplay="$(11p-3q)(11p+3q)$"
  hint="Write each term as a square."
>}}

As always, you should look for a common factor first. Sometimes a common
factor may “disguise” the difference of squares and you won’t recognize the
perfect squares until you factor the GCF. Also, to completely factor the
binomial in the next example, we’ll factor a difference of squares twice!

**Example.** Factor $48x^4y^2-243y^2$.

$$
\begin{array}{lrcl}
\text{Factor out the GCF.} & 48x^4y^2-243y^2 &=& 3y^2(16x^4-81) \\[4pt]
\text{Factor a difference of squares.} & 3y^2(16x^4-81) &=& 3y^2(4x^2-9)(4x^2+9) \\[4pt]
\text{Factor the remaining difference.} &&=& 3y^2(2x-3)(2x+3)(4x^2+9)
\end{array}
$$

The last factor, the sum of squares, cannot be factored. Multiplication
checks that the result is $48x^4y^2-243y^2$.

{{< fillin
  question="Factor completely: $2x^4y^2-32y^2$."
  answer="2y^2(x-2)(x+2)(x^2+4)"
  answerDisplay="$2y^2(x-2)(x+2)(x^2+4)$"
  hint="Factor out $2y^2$, then factor a difference of squares twice."
>}}

{{< fillin
  question="Factor completely: $7a^4c^2-7b^4c^2$."
  answer="7c^2(a-b)(a+b)(a^2+b^2)"
  answerDisplay="$7c^2(a-b)(a+b)(a^2+b^2)$"
  hint="Factor out $7c^2$, then factor $a^4-b^4$ twice."
>}}

The next example has a polynomial with four terms. So far, when this
occurred we grouped the terms in twos and factored from there. Here we will
notice that the first three terms form a perfect square trinomial.

**Example.** Factor $x^2-6x+9-y^2$.

Factor the first three terms using the perfect square trinomial pattern,
then factor the resulting difference of squares:

$$x^2-6x+9-y^2=(x-3)^2-y^2=(x-3-y)(x-3+y).$$

You may want to rewrite the solution as $(x-y-3)(x+y-3)$.

{{< fillin
  question="Factor: $x^2-10x+25-y^2$."
  answer="(x-5-y)(x-5+y)"
  answerDisplay="$(x-5-y)(x-5+y)$"
  hint="The first three terms form $(x-5)^2$."
>}}

{{< fillin
  question="Factor: $x^2+6x+9-4y^2$."
  answer="(x+3-2y)(x+3+2y)"
  answerDisplay="$(x+3-2y)(x+3+2y)$"
  hint="Rewrite as $(x+3)^2-(2y)^2$."
>}}

## Factor sums and differences of cubes

There is another special pattern for factoring, one that we did not use
when we multiplied polynomials. This is the pattern for the sum and
difference of cubes. We will write these formulas first and then check them
by multiplication.

$$a^3+b^3=(a+b)(a^2-ab+b^2)$$

$$a^3-b^3=(a-b)(a^2+ab+b^2)$$

We’ll check the first pattern and leave the second to you. Distributing and
combining like terms gives

$$
(a+b)(a^2-ab+b^2)=a^3-a^2b+ab^2+a^2b-ab^2+b^3=a^3+b^3.
$$

{{< callout type="info" >}}
  **Sum and Difference of Cubes Pattern.**

  $$a^3+b^3=(a+b)(a^2-ab+b^2)$$
  $$a^3-b^3=(a-b)(a^2+ab+b^2)$$
{{< /callout >}}

The two patterns look very similar, don’t they? But notice the signs in the
factors. The sign of the binomial factor matches the sign in the original
binomial. And the sign of the middle term of the trinomial factor is the
opposite of the sign in the original binomial. If you recognize the pattern
of the signs, it may help you memorize the patterns. The trinomial factor in
the sum and difference of cubes pattern cannot be factored.

It will be very helpful if you learn to recognize the cubes of the integers
from 1 to 10, just like you have learned to recognize squares.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $n^3$ | 1 | 8 | 27 | 64 | 125 | 216 | 343 | 512 | 729 | 1000 |

### How to factor the sum or difference of cubes

**Example.** Factor $x^3+64$.

This is a sum, and both terms are perfect cubes. Write $64=4^3$ and use the
sum of cubes pattern:

$$x^3+64=x^3+4^3=(x+4)(x^2-4x+16).$$

The expression inside the parentheses is already simplified. Multiplying
the factors checks the result.

{{< fillin
  question="Factor: $x^3+27$."
  answer="(x+3)(x^2-3x+9)"
  answerDisplay="$(x+3)(x^2-3x+9)$"
  hint="Write $27$ as $3^3$ and use the sum of cubes pattern."
>}}

{{< fillin
  question="Factor: $y^3+8$."
  answer="(y+2)(y^2-2y+4)"
  answerDisplay="$(y+2)(y^2-2y+4)$"
  hint="Write $8$ as $2^3$."
>}}

{{< callout type="info" >}}
  **Factor the sum or difference of cubes.**

  1. Does the binomial fit the sum or difference of cubes pattern? It must
     be a sum or difference, and the first and last terms must be perfect
     cubes.
  2. Write the terms as cubes.
  3. Use either the sum or difference of cubes pattern.
  4. Simplify inside the parentheses.
  5. Check by multiplying the factors.
{{< /callout >}}

**Example.** Factor $27u^3-125v^3$.

This binomial is a difference. The first and last terms are perfect cubes:

$$
27u^3-125v^3=(3u)^3-(5v)^3=(3u-5v)(9u^2+15uv+25v^2).
$$

{{< fillin
  question="Factor: $8x^3-27y^3$."
  answer="(2x-3y) \cdot (4x^2+6xy+9y^2)"
  hint="Write the terms as $(2x)^3$ and $(3y)^3$."
>}}

{{< fillin
  question="Factor: $1000m^3-125n^3$."
  answer="125 \cdot (2m-n) \cdot (4m^2+2mn+n^2)"
  hint="First factor out the GCF $125$, leaving $8m^3-n^3$."
>}}

In the next example, we first factor out the GCF. Then we can recognize the
sum of cubes.

**Example.** Factor $6x^3y+48y^4$.

$$
\begin{array}{lrcl}
\text{Factor the common factor.} & 6x^3y+48y^4 &=& 6y(x^3+8y^3) \\[4pt]
\text{Write the terms as cubes.} &&=& 6y[x^3+(2y)^3] \\[4pt]
\text{Use the sum of cubes pattern.} &&=& 6y(x+2y)(x^2-2xy+4y^2)
\end{array}
$$

To check, you may find it easier to multiply the sum of cubes factors
first, then multiply that product by $6y$. We’ll leave the multiplication
for you.

{{< fillin
  question="Factor: $500p^3+4q^3$."
  answer="4 \cdot (5p+q) \cdot (25p^2-5pq+q^2)"
  hint="First factor out $4$; then recognize $(5p)^3+q^3$."
>}}

{{< fillin
  question="Factor: $432c^3+686d^3$."
  answer="2 \cdot (6c+7d) \cdot (36c^2-42cd+49d^2)"
  hint="First factor out $2$; the remaining terms are $(6c)^3$ and $(7d)^3$."
>}}

The first term in the next example is a binomial cubed.

**Example.** Factor $(x+5)^3-64x^3$.

This binomial is a difference. The first and last terms are perfect cubes:

$$
\begin{aligned}
(x+5)^3-64x^3
  &=(x+5)^3-(4x)^3 \\
  &=(x+5-4x)\bigl((x+5)^2+4x(x+5)+16x^2\bigr) \\
  &=(-3x+5)(21x^2+30x+25).
\end{aligned}
$$

We’ll leave the check by multiplying to you.

{{< fillin
  question="Factor: $(y+1)^3-27y^3$."
  answer="(-2y+1)(13y^2+5y+1)"
  answerDisplay="$(-2y+1)(13y^2+5y+1)$"
  hint="Use $a=y+1$ and $b=3y$ in the difference of cubes pattern."
>}}

{{< fillin
  question="Factor: $(n+3)^3-125n^3$."
  answer="(-4n+3)(31n^2+21n+9)"
  answerDisplay="$(-4n+3)(31n^2+21n+9)$"
  hint="Use $a=n+3$ and $b=5n$ in the difference of cubes pattern."
>}}

## Key terms

**perfect square trinomial** — a trinomial that is the square of a binomial.
**difference of squares** — a binomial of the form $a^2-b^2$, which factors
as a product of conjugates. **sum of cubes** — a binomial of the form
$a^3+b^3$. **difference of cubes** — a binomial of the form $a^3-b^3$.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 6.3: Factor Special Products](https://openstax.org/books/intermediate-algebra-2e/pages/6-3-factor-special-products) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked-example tables as accessible aligned math, omitted the Be Prepared quiz, media links, and end-of-section exercises, and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
