---
title: Factor Special Products
description: >-
  Recognizing and factoring perfect square trinomials, differences of squares,
  and sums and differences of cubes by reversing the special-product patterns —
  adapted from OpenStax Elementary Algebra 2e, Section 7.4.
source_section: "7.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** factor perfect square
  trinomials, factor differences of squares, and factor sums and differences
  of cubes.
{{< /callout >}}

The strategy for factoring we developed in the last section will guide you as
you factor most binomials, trinomials, and polynomials with more than three
terms. We have seen that some binomials and trinomials result from special
products — squaring binomials and multiplying conjugates. If you learn to
recognize these kinds of polynomials, you can use the special products
patterns to factor them much more quickly.

## Factor perfect square trinomials

Some trinomials are perfect squares. They result from multiplying a binomial
times itself. You can square a binomial by using FOIL, but using the Binomial
Squares pattern you saw in a previous chapter saves you a step. Let's review
by squaring a binomial using FOIL:

$$(3x+4)(3x+4) = 9x^2 + 12x + 12x + 16 = 9x^2 + 24x + 16$$

The first term is the square of the first term of the binomial and the last
term is the square of the last term. The middle term is twice the product of
the two terms of the binomial:

$$(3x)^2 + 2(3x \cdot 4) + 4^2 = 9x^2 + 24x + 16$$

The trinomial $9x^2 + 24x + 16$ is called a **perfect square trinomial**. It
is the square of the binomial $3x + 4$.

When you square a binomial, the product is a perfect square trinomial. In this
chapter you are learning to factor — now you will start with a perfect square
trinomial and factor it into its prime factors. You could factor this
trinomial using the methods of the last section, since it is of the form
$ax^2 + bx + c$. But if you recognize that the first and last terms are
squares and the trinomial fits the **perfect square trinomials pattern**, you
will save yourself a lot of work. Here is the pattern — the reverse of the
Binomial Squares pattern.

{{< callout type="info" >}}
  **Perfect Square Trinomials Pattern.** If $a$ and $b$ are real numbers,

$$
\begin{array}{rcl}
a^2 + 2ab + b^2 &=& (a+b)^2 \\
a^2 - 2ab + b^2 &=& (a-b)^2
\end{array}
$$
{{< /callout >}}

To make use of this pattern, you have to recognize that a given trinomial fits
it. Check first to see if the leading coefficient is a perfect square, $a^2$.
Next check that the last term is a perfect square, $b^2$. Then check the
middle term — is it twice the product, $2ab$? If everything checks, you can
easily write the factors.

**Example.** Factor: $9x^2 + 12x + 4$.

Does the trinomial fit the perfect square trinomials pattern, $a^2 + 2ab +
b^2$? The first term $9x^2$ is a perfect square, $(3x)^2$, and the last term
$4$ is a perfect square, $(2)^2$. The middle term $12x$ is twice the product
of $3x$ and $2$, so it matches $2ab$. Write it as the square of a binomial:

$$9x^2 + 12x + 4 = (3x)^2 + 2 \cdot 3x \cdot 2 + 2^2 = (3x+2)^2$$

Check by multiplying: $(3x+2)^2 = (3x)^2 + 2 \cdot 3x \cdot 2 + 2^2 = 9x^2 +
12x + 4$. ✓

{{< fillin
  question="Factor: $4x^2 + 12x + 9$"
  answer="(2x + 3)^2"
  answerDisplay="$(2x + 3)^2$"
  hint="The first term is $(2x)^2$ and the last term is $3^2$. Check that the middle term is $2 \cdot 2x \cdot 3$."
>}}

{{< fillin
  question="Factor: $9y^2 + 24y + 16$"
  answer="(3y + 4)^2"
  answerDisplay="$(3y + 4)^2$"
  hint="The first term is $(3y)^2$ and the last term is $4^2$; write it as the square of $3y + 4$."
>}}

The sign of the middle term determines which pattern we will use. When the
middle term is negative, we use the pattern $a^2 - 2ab + b^2$, which factors
to $(a-b)^2$. The steps are summarized here.

{{< callout type="info" >}}
  **Factor perfect square trinomials.**

  1. Does the trinomial fit the pattern $a^2 + 2ab + b^2$ or $a^2 - 2ab +
     b^2$?
     - Is the first term a perfect square? Write it as a square, $(a)^2$.
     - Is the last term a perfect square? Write it as a square, $(b)^2$.
     - Check the middle term. Is it $2ab$?
  2. Write the square of the binomial: $(a+b)^2$ or $(a-b)^2$.
  3. Check by multiplying.
{{< /callout >}}

**Example.** Factor: $81y^2 - 72y + 16$.

The first and last terms are squares. The middle term is negative, so the
binomial square would be $(a-b)^2$. Write the first term as $(9y)^2$ and the
last term as $(4)^2$; the middle term $72y$ is $2 \cdot 9y \cdot 4$, so the
pattern matches:

$$81y^2 - 72y + 16 = (9y)^2 - 2 \cdot 9y \cdot 4 + 4^2 = (9y-4)^2$$

{{< fillin
  question="Factor: $64y^2 - 80y + 25$"
  answer="(8y - 5)^2"
  answerDisplay="$(8y - 5)^2$"
  hint="The middle term is negative, so the factor is $(a-b)^2$. The first term is $(8y)^2$ and the last is $5^2$."
>}}

{{< fillin
  question="Factor: $16z^2 - 72z + 81$"
  answer="(4z - 9)^2"
  answerDisplay="$(4z - 9)^2$"
  hint="Write the first term as $(4z)^2$ and the last as $9^2$; the negative middle term gives $(4z - 9)^2$."
>}}

The next example is a perfect square trinomial with two variables.

**Example.** Factor: $36x^2 + 84xy + 49y^2$.

Test each term to verify the pattern. The first term is $(6x)^2$ and the last
term is $(7y)^2$; the middle term $84xy$ is $2 \cdot 6x \cdot 7y$. It fits, so
we write the square of the binomial:

$$36x^2 + 84xy + 49y^2 = (6x)^2 + 2 \cdot 6x \cdot 7y + (7y)^2 = (6x+7y)^2$$

{{< fillin
  question="Factor: $49x^2 + 84xy + 36y^2$"
  answer="(7x + 6y)^2"
  answerDisplay="$(7x + 6y)^2$"
  hint="The first term is $(7x)^2$ and the last is $(6y)^2$. Check that the middle term is $2 \cdot 7x \cdot 6y$."
>}}

{{< fillin
  question="Factor: $64m^2 + 112mn + 49n^2$"
  answer="(8m + 7n)^2"
  answerDisplay="$(8m + 7n)^2$"
  hint="Write the first term as $(8m)^2$ and the last as $(7n)^2$; the middle term is $2 \cdot 8m \cdot 7n$."
>}}

Remember the very first step in our strategy for factoring polynomials — ask
"is there a greatest common factor?" and, if there is, factor the GCF out
before going any further. Perfect square trinomials may have a GCF in all
three terms and it should be factored out first. Sometimes, once the GCF has
been factored, you will recognize a perfect square trinomial.

**Example.** Factor: $36x^2y - 48xy + 16y$.

There is a GCF of $4y$, so factor it out first:

$$36x^2y - 48xy + 16y = 4y\!\left(9x^2 - 12x + 4\right)$$

The trinomial in parentheses is a perfect square: $9x^2 = (3x)^2$, $4 = 2^2$,
and $12x = 2 \cdot 3x \cdot 2$. Factor it, keeping the factor $4y$:

$$4y\!\left(9x^2 - 12x + 4\right) = 4y(3x-2)^2$$

{{< fillin
  question="Factor completely: $8x^2y - 24xy + 18y$"
  answer="2y{(2x - 3)}^2"
  answerDisplay="$2y(2x - 3)^2$"
  hint="First factor out the GCF $2y$. The remaining trinomial $4x^2 - 12x + 9$ is a perfect square."
>}}

{{< fillin
  question="Factor completely: $27p^2q + 90pq + 75q$"
  answer="3q{(3p + 5)}^2"
  answerDisplay="$3q(3p + 5)^2$"
  hint="First factor out the GCF $3q$. The remaining trinomial $9p^2 + 30p + 25$ is a perfect square."
>}}

## Factor differences of squares

The other special product you saw in the previous chapter was the Product of
Conjugates pattern. You used this to multiply two binomials that were
conjugates, for example:

$$(3x-4)(3x+4) = 9x^2 - 16$$

When you multiply conjugate binomials, the middle terms of the product add to
$0$. All you have left is a binomial, the difference of squares. Multiplying
conjugates is the only way to get a binomial from the product of two
binomials.

{{< callout type="info" >}}
  **Difference of Squares Pattern.** If $a$ and $b$ are real numbers,

$$a^2 - b^2 = (a-b)(a+b).$$

  The first and last terms are squares and they are subtracted; the factors
  are a pair of conjugates.
{{< /callout >}}

To factor, we use the product pattern "in reverse" to factor the difference of
squares. Remember, "difference" refers to subtraction. So, to use this pattern
you must make sure you have a binomial in which two squares are being
subtracted.

{{< callout type="info" >}}
  **Factor differences of squares.**

  1. Does the binomial fit the pattern $a^2 - b^2$?
     - Is this a difference?
     - Are the first and last terms perfect squares?
  2. Write them as squares, $(a)^2 - (b)^2$.
  3. Write the product of conjugates, $(a-b)(a+b)$.
  4. Check by multiplying.
{{< /callout >}}

**Example.** Factor: $x^2 - 4$.

Does the binomial fit the pattern? It is a difference, and both terms are
perfect squares: $x^2 = (x)^2$ and $4 = 2^2$. Write them as squares, then
write the product of conjugates:

$$x^2 - 4 = (x)^2 - (2)^2 = (x-2)(x+2)$$

Check by multiplying: $(x-2)(x+2) = x^2 - 4$. ✓

{{< fillin
  question="Factor: $h^2 - 81$"
  answer="(h - 9)(h + 9)"
  answerDisplay="$(h - 9)(h + 9)$"
  hint="Write the terms as squares: $h^2 - 9^2$. The factors are the conjugate pair $(h-9)(h+9)$."
>}}

{{< fillin
  question="Factor: $k^2 - 121$"
  answer="(k - 11)(k + 11)"
  answerDisplay="$(k - 11)(k + 11)$"
  hint="$121 = 11^2$, so this is $k^2 - 11^2$, a difference of squares."
>}}

It is important to remember that *sums of squares do not factor into a product
of binomials.* There are no binomial factors that multiply together to get a
sum of squares. After removing any GCF, the expression $a^2 + b^2$ is prime!

**Example.** Factor: $64y^2 - 1$.

This is a difference, and both terms are perfect squares — don't forget that
$1$ is a perfect square. Write $64y^2$ as $(8y)^2$ and $1$ as $1^2$, then
factor as the product of conjugates:

$$64y^2 - 1 = (8y)^2 - 1^2 = (8y-1)(8y+1)$$

{{< fillin
  question="Factor: $m^2 - 1$"
  answer="(m - 1)(m + 1)"
  answerDisplay="$(m - 1)(m + 1)$"
  hint="Both $m^2$ and $1$ are perfect squares, so this is $m^2 - 1^2$."
>}}

{{< fillin
  question="Factor: $81y^2 - 1$"
  answer="(9y - 1)(9y + 1)"
  answerDisplay="$(9y - 1)(9y + 1)$"
  hint="Write $81y^2$ as $(9y)^2$ and $1$ as $1^2$, then use the difference of squares pattern."
>}}

**Example.** Factor: $121x^2 - 49y^2$.

Is this a difference of squares? Yes — $121x^2 = (11x)^2$ and $49y^2 =
(7y)^2$. Factor as the product of conjugates:

$$121x^2 - 49y^2 = (11x)^2 - (7y)^2 = (11x-7y)(11x+7y)$$

{{< fillin
  question="Factor: $196m^2 - 25n^2$"
  answer="(14m - 5n)(14m + 5n)"
  answerDisplay="$(14m - 5n)(14m + 5n)$"
  hint="$196m^2 = (14m)^2$ and $25n^2 = (5n)^2$; the factors are the conjugate pair."
>}}

{{< fillin
  question="Factor: $144p^2 - 9q^2$"
  answer="(12p - 3q)(12p + 3q)"
  answerDisplay="$(12p - 3q)(12p + 3q)$"
  hint="Write $144p^2$ as $(12p)^2$ and $9q^2$ as $(3q)^2$, then write the product of conjugates."
>}}

The binomial in the next example may look "backwards," but it is still the
difference of squares.

**Example.** Factor: $100 - h^2$.

Is this a difference of squares? Yes — $100 = 10^2$ and $h^2 = (h)^2$. Factor
as the product of conjugates:

$$100 - h^2 = (10)^2 - (h)^2 = (10-h)(10+h)$$

Be careful not to rewrite the original expression as $h^2 - 100$.

{{< fillin
  question="Factor: $144 - x^2$"
  answer="(12 - x)(12 + x)"
  answerDisplay="$(12 - x)(12 + x)$"
  hint="Write $144$ as $12^2$ and keep the order: $12^2 - x^2 = (12-x)(12+x)$."
>}}

{{< fillin
  question="Factor: $169 - p^2$"
  answer="(13 - p)(13 + p)"
  answerDisplay="$(13 - p)(13 + p)$"
  hint="$169 = 13^2$, so this is $13^2 - p^2$, a difference of squares."
>}}

To completely factor the binomial in the next example, we factor a difference
of squares twice!

**Example.** Factor: $x^4 - y^4$.

Is this a difference of squares? Yes — $x^4 = (x^2)^2$ and $y^4 = (y^2)^2$.
Factor it as the product of conjugates. Notice the first binomial is *also* a
difference of squares! The last factor, the sum of squares, cannot be
factored:

$$x^4 - y^4 = \left(x^2\right)^2 - \left(y^2\right)^2 = \left(x^2-y^2\right)\!\left(x^2+y^2\right) = (x-y)(x+y)\!\left(x^2+y^2\right)$$

{{< fillin
  question="Factor completely: $a^4 - b^4$"
  answer="(a - b)(a + b)(a^2 + b^2)"
  answerDisplay="$(a - b)(a + b)(a^2 + b^2)$"
  hint="First factor $a^4 - b^4 = (a^2 - b^2)(a^2 + b^2)$, then factor the difference of squares $a^2 - b^2$ again. The sum of squares stays."
>}}

{{< fillin
  question="Factor completely: $x^4 - 16$"
  answer="(x - 2)(x + 2)(x^2 + 4)"
  answerDisplay="$(x - 2)(x + 2)(x^2 + 4)$"
  hint="Write $16$ as $4^2$: $x^4 - 16 = (x^2 - 4)(x^2 + 4)$, then factor $x^2 - 4$ again."
>}}

As always, you should look for a common factor first whenever you have an
expression to factor. Sometimes a common factor may "disguise" the difference
of squares and you won't recognize the perfect squares until you factor the
GCF.

**Example.** Factor: $8x^2y - 98y$.

Is there a GCF? Yes, $2y$ — factor it out. The binomial that remains is a
difference of squares. Factor it as a product of conjugates:

$$8x^2y - 98y = 2y\!\left(4x^2 - 49\right) = 2y\!\left((2x)^2 - (7)^2\right) = 2y(2x-7)(2x+7)$$

{{< fillin
  question="Factor completely: $7xy^2 - 175x$"
  answer="7x(y - 5)(y + 5)"
  answerDisplay="$7x(y - 5)(y + 5)$"
  hint="Factor out the GCF $7x$ first; the remaining $y^2 - 25$ is a difference of squares."
>}}

{{< fillin
  question="Factor completely: $45a^2b - 80b$"
  answer="5b(3a - 4)(3a + 4)"
  answerDisplay="$5b(3a - 4)(3a + 4)$"
  hint="Factor out the GCF $5b$ first; the remaining $9a^2 - 16$ is a difference of squares."
>}}

Remember, a sum of squares does not factor. After removing the GCF, if what
remains is a sum of squares, it is prime.

**Example.** Factor: $6x^2 + 96$.

Is there a GCF? Yes, $6$ — factor it out:

$$6x^2 + 96 = 6\!\left(x^2 + 16\right)$$

Is the binomial in parentheses a difference of squares? No — it is a sum of
squares. Sums of squares do not factor, so $x^2 + 16$ is prime and $6(x^2+16)$
is the complete factorization.

{{< fillin
  question="Factor completely: $8a^2 + 200$"
  answer="8(a^2 + 25)"
  answerDisplay="$8(a^2 + 25)$"
  hint="Factor out the GCF $8$. What remains, $a^2 + 25$, is a sum of squares — it is prime."
>}}

{{< fillin
  question="Factor completely: $36y^2 + 81$"
  answer="9(4y^2 + 9)"
  answerDisplay="$9(4y^2 + 9)$"
  hint="Factor out the GCF $9$. What remains, $4y^2 + 9$, is a sum of squares — it does not factor."
>}}

## Factor sums and differences of cubes

There is another special pattern for factoring, one that we did not use when
we multiplied polynomials. This is the pattern for the sum and difference of
cubes. We can check these formulas by multiplication; for the sum of cubes,
distributing $(a+b)$ over $\left(a^2 - ab + b^2\right)$ gives
$a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3 = a^3 + b^3$.

{{< callout type="info" >}}
  **Sum and Difference of Cubes Pattern.**

$$
\begin{array}{rcl}
a^3 + b^3 &=& (a+b)\!\left(a^2 - ab + b^2\right) \\
a^3 - b^3 &=& (a-b)\!\left(a^2 + ab + b^2\right)
\end{array}
$$
{{< /callout >}}

The two patterns look very similar. But notice the signs in the factors. The
sign of the binomial factor matches the sign in the original binomial. And the
sign of the middle term of the trinomial factor is the *opposite* of the sign
in the original binomial. The trinomial factor in the sum and difference of
cubes pattern cannot be factored.

It can be very helpful if you learn to recognize the cubes of the integers
from $1$ to $10$, just like you have learned to recognize squares:

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $n^3$ | $1$ | $8$ | $27$ | $64$ | $125$ | $216$ | $343$ | $512$ | $729$ | $1000$ |

{{< callout type="info" >}}
  **Factor the sum or difference of cubes.**

  1. Does the binomial fit the sum or difference of cubes pattern?
     - Is it a sum or difference?
     - Are the first and last terms perfect cubes?
  2. Write them as cubes.
  3. Use either the sum or difference of cubes pattern.
  4. Simplify inside the parentheses.
  5. Check by multiplying the factors.
{{< /callout >}}

**Example.** Factor: $x^3 + 64$.

Does the binomial fit the pattern? It is a sum, and both terms are perfect
cubes: $x^3 = (x)^3$ and $64 = 4^3$. Write the terms as cubes, use the sum of
cubes pattern, and simplify inside the parentheses:

$$x^3 + 64 = x^3 + 4^3 = (x+4)\!\left(x^2 - 4x + 4^2\right) = (x+4)\!\left(x^2 - 4x + 16\right)$$

{{< fillin
  question="Factor: $x^3 + 27$"
  answer="(x + 3)(x^2 - 3x + 9)"
  answerDisplay="$(x + 3)(x^2 - 3x + 9)$"
  hint="$27 = 3^3$. Use the sum of cubes pattern with $a = x$ and $b = 3$; the middle term of the trinomial is $-ab$."
>}}

{{< fillin
  question="Factor: $y^3 + 8$"
  answer="(y + 2)(y^2 - 2y + 4)"
  answerDisplay="$(y + 2)(y^2 - 2y + 4)$"
  hint="$8 = 2^3$. Use the sum of cubes pattern with $a = y$ and $b = 2$."
>}}

Be careful to use the correct signs in the factors of the sum and difference
of cubes.

**Example.** Factor: $x^3 - 1000$.

This binomial is a difference. The first and last terms are perfect cubes:
$x^3 = (x)^3$ and $1000 = 10^3$. Use the difference of cubes pattern and
simplify:

$$x^3 - 1000 = x^3 - 10^3 = (x-10)\!\left(x^2 + 10x + 10^2\right) = (x-10)\!\left(x^2 + 10x + 100\right)$$

{{< fillin
  question="Factor: $u^3 - 125$"
  answer="(u - 5)(u^2 + 5u + 25)"
  answerDisplay="$(u - 5)(u^2 + 5u + 25)$"
  hint="$125 = 5^3$. Use the difference of cubes pattern with $a = u$ and $b = 5$; the middle term of the trinomial is $+ab$."
>}}

{{< fillin
  question="Factor: $v^3 - 343$"
  answer="(v - 7)(v^2 + 7v + 49)"
  answerDisplay="$(v - 7)(v^2 + 7v + 49)$"
  hint="$343 = 7^3$. Use the difference of cubes pattern with $a = v$ and $b = 7$."
>}}

**Example.** Factor: $512 - 125p^3$.

This binomial is a difference. The first and last terms are perfect cubes:
$512 = 8^3$ and $125p^3 = (5p)^3$. Use the difference of cubes pattern and
simplify:

$$512 - 125p^3 = 8^3 - (5p)^3 = (8-5p)\!\left(8^2 + 8 \cdot 5p + (5p)^2\right) = (8-5p)\!\left(64 + 40p + 25p^2\right)$$

{{< fillin
  question="Factor: $64 - 27x^3$"
  answer="(4 - 3x)(16 + 12x + 9x^2)"
  answerDisplay="$(4 - 3x)(16 + 12x + 9x^2)$"
  hint="$64 = 4^3$ and $27x^3 = (3x)^3$. Use the difference of cubes pattern with $a = 4$ and $b = 3x$."
>}}

{{< fillin
  question="Factor: $27 - 8y^3$"
  answer="(3 - 2y)(9 + 6y + 4y^2)"
  answerDisplay="$(3 - 2y)(9 + 6y + 4y^2)$"
  hint="$27 = 3^3$ and $8y^3 = (2y)^3$. Use the difference of cubes pattern with $a = 3$ and $b = 2y$."
>}}

**Example.** Factor: $27u^3 - 125v^3$.

This binomial is a difference. Both terms are perfect cubes: $27u^3 =
(3u)^3$ and $125v^3 = (5v)^3$. Use the difference of cubes pattern and
simplify:

$$27u^3 - 125v^3 = (3u)^3 - (5v)^3 = (3u-5v)\!\left((3u)^2 + 3u \cdot 5v + (5v)^2\right) = (3u-5v)\!\left(9u^2 + 15uv + 25v^2\right)$$

{{< fillin
  question="Factor: $8x^3 - 27y^3$"
  answer="(2x - 3y)(4x^2 + 6xy + 9y^2)"
  answerDisplay="$(2x - 3y)(4x^2 + 6xy + 9y^2)$"
  hint="$8x^3 = (2x)^3$ and $27y^3 = (3y)^3$. Use the difference of cubes pattern with $a = 2x$ and $b = 3y$."
>}}

{{< fillin
  question="Factor: $1000m^3 - 125n^3$"
  answer="125(2m - n)(4m^2 + 2mn + n^2)"
  answerDisplay="$125(2m - n)(4m^2 + 2mn + n^2)$"
  hint="Factor out the GCF $125$ first, leaving $8m^3 - n^3$, then apply the difference of cubes pattern with $a = 2m$ and $b = n$."
>}}

In the next example, we first factor out the GCF. Then we can recognize the
sum of cubes.

**Example.** Factor: $5m^3 + 40n^3$.

Factor the common factor $5$ first. The binomial that remains is a sum, and
its terms are perfect cubes: $m^3 = (m)^3$ and $8n^3 = (2n)^3$. Use the sum of
cubes pattern and simplify:

$$5m^3 + 40n^3 = 5\!\left(m^3 + 8n^3\right) = 5(m+2n)\!\left(m^2 - m \cdot 2n + (2n)^2\right) = 5(m+2n)\!\left(m^2 - 2mn + 4n^2\right)$$

{{< fillin
  question="Factor completely: $500p^3 + 4q^3$"
  answer="4(5p + q)(25p^2 - 5pq + q^2)"
  answerDisplay="$4(5p + q)(25p^2 - 5pq + q^2)$"
  hint="Factor out the GCF $4$ first, leaving $125p^3 + q^3$, then apply the sum of cubes pattern with $a = 5p$ and $b = q$."
>}}

{{< fillin
  question="Factor completely: $432c^3 + 686d^3$"
  answer="2(6c + 7d)(36c^2 - 42cd + 49d^2)"
  answerDisplay="$2(6c + 7d)(36c^2 - 42cd + 49d^2)$"
  hint="Factor out the GCF $2$ first, leaving $216c^3 + 343d^3$, then apply the sum of cubes pattern with $a = 6c$ and $b = 7d$."
>}}

## Key terms

**perfect square trinomial** — a trinomial of the form $a^2 + 2ab + b^2$ or
$a^2 - 2ab + b^2$; it factors to $(a+b)^2$ or $(a-b)^2$. **difference of
squares** — a binomial of the form $a^2 - b^2$; it factors to the conjugate
pair $(a-b)(a+b)$. **sum of squares** — a binomial of the form $a^2 + b^2$; it
does not factor and is prime. **sum of cubes** — $a^3 + b^3 = (a+b)(a^2 - ab +
b^2)$. **difference of cubes** — $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 7.4: Factor Special Products](https://openstax.org/books/elementary-algebra-2e/pages/7-4-factor-special-products) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the pattern-derivation walkthroughs and worked-example step tables as typeset display equations, kept the Perfect Square Trinomials, Difference of Squares, and Sum and Difference of Cubes patterns and How To procedures as callouts, recreated the cubes reference table as a markdown table; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
