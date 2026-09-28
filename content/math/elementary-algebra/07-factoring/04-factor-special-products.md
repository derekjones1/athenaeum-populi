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
**By the end of this section, you will be able to:**

- Factor perfect square trinomials
- Factor differences of squares
- Factor sums and differences of cubes
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

$$
\begin{aligned}
(3x+4)(3x+4) &= 9x^2 + 12x + 12x + 16 \\
&= 9x^2 + 24x + 16
\end{aligned}
$$

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

$$
\begin{aligned}
9x^2 + 12x + 4 &= (3x)^2 + 2 \cdot 3x \cdot 2 + 2^2 \\
&= (3x+2)^2
\end{aligned}
$$

Check by multiplying: $(3x+2)^2 = (3x)^2 + 2 \cdot 3x \cdot 2 + 2^2 = 9x^2 +
12x + 4$. ✓

{{< fillin
  question="Factor: $4x^2 + 12x + 9$"
  answer="(2x + 3)^2"
  answerForm="factored-completely"
  answerDisplay="$(2x + 3)^2$"
  hint="Check that the first and last terms are perfect squares and that the middle term is twice the product of their square roots, then write the square of a binomial."
>}}

{{< fillin
  question="Factor: $9y^2 + 24y + 16$"
  answer="(3y + 4)^2"
  answerForm="factored-completely"
  answerDisplay="$(3y + 4)^2$"
  hint="Write the first and last terms as squares, check the middle term against $2ab$, and write the square of the binomial."
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

$$
\begin{aligned}
81y^2 - 72y + 16 &= (9y)^2 - 2 \cdot 9y \cdot 4 + 4^2 \\
&= (9y-4)^2
\end{aligned}
$$

{{< fillin
  question="Factor: $64y^2 - 80y + 25$"
  answer="(8y - 5)^2"
  answerForm="factored-completely"
  answerDisplay="$(8y - 5)^2$"
  hint="Check that the first and last terms are perfect squares and that the middle term is $2ab$; the sign of the middle term tells you which binomial-square pattern to use."
>}}

{{< fillin
  question="Factor: $16z^2 - 72z + 81$"
  answer="(4z - 9)^2"
  answerForm="factored-completely"
  answerDisplay="$(4z - 9)^2$"
  hint="Write the first and last terms as squares and check the middle term; use the pattern whose middle sign matches the trinomial's."
>}}

The next example is a perfect square trinomial with two variables.

**Example.** Factor: $36x^2 + 84xy + 49y^2$.

Test each term to verify the pattern. The first term is $(6x)^2$ and the last
term is $(7y)^2$; the middle term $84xy$ is $2 \cdot 6x \cdot 7y$. It fits, so
we write the square of the binomial:

$$
\begin{aligned}
36x^2 + 84xy + 49y^2 &= (6x)^2 + 2 \cdot 6x \cdot 7y + (7y)^2 \\
&= (6x+7y)^2
\end{aligned}
$$

{{< fillin
  question="Factor: $49x^2 + 84xy + 36y^2$"
  answer="(7x + 6y)^2"
  answerForm="factored-completely"
  answerDisplay="$(7x + 6y)^2$"
  hint="Test each term: are the first and last terms perfect squares, and is the middle term twice the product of their square roots? Then write the square of a binomial."
>}}

{{< fillin
  question="Factor: $64m^2 + 112mn + 49n^2$"
  answer="(8m + 7n)^2"
  answerForm="factored-completely"
  answerDisplay="$(8m + 7n)^2$"
  hint="Write the first and last terms as squares of monomials, check the middle term against $2ab$, and write the square of the binomial."
>}}

A trinomial whose first and last terms are perfect squares is not always a
perfect square trinomial: the middle term must check too.

**Example.** Factor: $9x^2 + 50x + 25$.

The first and last terms are perfect squares, $9x^2 = (3x)^2$ and
$25 = (5)^2$. Check the middle term: $2ab = 2(3x)(5) = 30x$, but the middle
term is $50x$. Since $30x \ne 50x$, this does not fit the pattern. Factor
using the "ac" method instead: $ac = 9 \cdot 25 = 225$, and $5 \cdot 45 = 225$
with $5 + 45 = 50$. Split the middle term and factor by grouping:

$$
\begin{aligned}
9x^2 + 50x + 25 &= 9x^2 + 5x + 45x + 25 \\
&= x(9x+5) + 5(9x+5) \\
&= (9x+5)(x+5)
\end{aligned}
$$

Check: $(9x+5)(x+5) = 9x^2 + 45x + 5x + 25 = 9x^2 + 50x + 25$. ✓

{{< fillin
  question="Factor: $16r^2 + 30rs + 9s^2$"
  answer="(8r + 3s)(2r + 3s)"
  answerForm="factored-completely"
  answerDisplay="$(8r + 3s)(2r + 3s)$"
  hint="Check whether the middle term is $2ab$; if it is not, factor with the \"ac\" method."
>}}

{{< fillin
  question="Factor: $9u^2 + 87u + 100$"
  answer="(3u + 4)(3u + 25)"
  answerForm="factored-completely"
  answerDisplay="$(3u + 4)(3u + 25)$"
  hint="Test the perfect square trinomial pattern first; if the middle term does not check, use the \"ac\" method."
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
  answerForm="factored-completely"
  answerDisplay="$2y(2x - 3)^2$"
  hint="Factor out the greatest common factor first, then check whether the trinomial that remains is a perfect square. Keep the common factor in the final product."
>}}

{{< fillin
  question="Factor completely: $27p^2q + 90pq + 75q$"
  answer="3q{(3p + 5)}^2"
  answerForm="factored-completely"
  answerDisplay="$3q(3p + 5)^2$"
  hint="Look for a greatest common factor before anything else, then factor the remaining trinomial with the perfect square trinomials pattern."
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
  answerForm="factored-completely"
  answerDisplay="$(h - 9)(h + 9)$"
  hint="Check that this is a difference of two perfect squares, write each term as a square, then write the product of conjugates."
>}}

{{< fillin
  question="Factor: $k^2 - 121$"
  answer="(k - 11)(k + 11)"
  answerForm="factored-completely"
  answerDisplay="$(k - 11)(k + 11)$"
  hint="Write both terms as squares, $a^2 - b^2$, and factor as the product of conjugates $(a-b)(a+b)$."
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
  answerForm="factored-completely"
  answerDisplay="$(m - 1)(m + 1)$"
  hint="Remember that $1$ is a perfect square. Write both terms as squares and use the difference of squares pattern."
>}}

{{< fillin
  question="Factor: $81y^2 - 1$"
  answer="(9y - 1)(9y + 1)"
  answerForm="factored-completely"
  answerDisplay="$(9y - 1)(9y + 1)$"
  hint="Write each term as the square of a monomial (don't forget that $1$ is a perfect square), then write the product of conjugates."
>}}

**Example.** Factor: $121x^2 - 49y^2$.

Is this a difference of squares? Yes — $121x^2 = (11x)^2$ and $49y^2 =
(7y)^2$. Factor as the product of conjugates:

$$
\begin{aligned}
121x^2 - 49y^2 &= (11x)^2 - (7y)^2 \\
&= (11x-7y)(11x+7y)
\end{aligned}
$$

{{< fillin
  question="Factor: $196m^2 - 25n^2$"
  answer="(14m - 5n)(14m + 5n)"
  answerForm="factored-completely"
  answerDisplay="$(14m - 5n)(14m + 5n)$"
  hint="Write each term as the square of a monomial, then write the product of conjugates."
>}}

{{< fillin
  question="Factor completely: $144p^2 - 9q^2$"
  answer="9(4p - q)(4p + q)"
  answerForm="factored-completely"
  answerDisplay="$9(4p - q)(4p + q)$"
  hint="Look for a greatest common factor first, then factor what remains as a difference of squares."
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
  answerForm="factored-completely"
  answerDisplay="$(12 - x)(12 + x)$"
  hint="Keep the terms in the order given: write each as a square, then write the product of conjugates."
>}}

{{< fillin
  question="Factor: $169 - p^2$"
  answer="(13 - p)(13 + p)"
  answerForm="factored-completely"
  answerDisplay="$(13 - p)(13 + p)$"
  hint="Do not rewrite the binomial in the other order; write both terms as squares and use the difference of squares pattern."
>}}

To completely factor the binomial in the next example, we factor a difference
of squares twice!

**Example.** Factor: $x^4 - y^4$.

Is this a difference of squares? Yes — $x^4 = (x^2)^2$ and $y^4 = (y^2)^2$.
Factor it as the product of conjugates. Notice the first binomial is *also* a
difference of squares! The last factor, the sum of squares, cannot be
factored:

$$
\begin{aligned}
x^4 - y^4 &= \left(x^2\right)^2 - \left(y^2\right)^2 \\
&= \left(x^2-y^2\right)\!\left(x^2+y^2\right) \\
&= (x-y)(x+y)\!\left(x^2+y^2\right)
\end{aligned}
$$

{{< fillin
  question="Factor completely: $a^4 - b^4$"
  answer="(a^2 + b^2)(a + b)(a - b)"
  answerForm="factored-completely"
  answerDisplay="$(a^2 + b^2)(a + b)(a - b)$"
  hint="Write each term as a square and factor as a product of conjugates, then check whether a factor is itself a difference of squares. A sum of squares does not factor."
>}}

{{< fillin
  question="Factor completely: $x^4 - 16$"
  answer="(x^2 + 4)(x + 2)(x - 2)"
  answerForm="factored-completely"
  answerDisplay="$(x^2 + 4)(x + 2)(x - 2)$"
  hint="Factor the difference of squares, then factor again any factor that is still a difference of squares; a sum of squares stays as it is."
>}}

As always, you should look for a common factor first whenever you have an
expression to factor. Sometimes a common factor may "disguise" the difference
of squares and you won't recognize the perfect squares until you factor the
GCF.

**Example.** Factor: $8x^2y - 98y$.

Is there a GCF? Yes, $2y$ — factor it out. The binomial that remains is a
difference of squares. Factor it as a product of conjugates:

$$
\begin{aligned}
8x^2y - 98y &= 2y\!\left(4x^2 - 49\right) \\
&= 2y\!\left((2x)^2 - (7)^2\right) \\
&= 2y(2x-7)(2x+7)
\end{aligned}
$$

{{< fillin
  question="Factor completely: $7xy^2 - 175x$"
  answer="7x(y - 5)(y + 5)"
  answerForm="factored-completely"
  answerDisplay="$7x(y - 5)(y + 5)$"
  hint="Factor out the greatest common factor first, then factor what remains as a difference of squares."
>}}

{{< fillin
  question="Factor completely: $45a^2b - 80b$"
  answer="5b(3a - 4)(3a + 4)"
  answerForm="factored-completely"
  answerDisplay="$5b(3a - 4)(3a + 4)$"
  hint="Look for a greatest common factor before anything else, then use the difference of squares pattern on what remains."
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
  answerForm="factored-completely"
  answerDisplay="$8(a^2 + 25)$"
  hint="Factor out the greatest common factor, then ask whether what remains is a difference of squares or a sum of squares."
>}}

{{< fillin
  question="Factor completely: $36y^2 + 81$"
  answer="9(4y^2 + 9)"
  answerForm="factored-completely"
  answerDisplay="$9(4y^2 + 9)$"
  hint="Factor out the greatest common factor first, then decide whether the binomial that remains can be factored further."
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

$$
\begin{aligned}
x^3 + 64 &= x^3 + 4^3 \\
&= (x+4)\!\left(x^2 - 4x + 4^2\right) \\
&= (x+4)\!\left(x^2 - 4x + 16\right)
\end{aligned}
$$

{{< fillin
  question="Factor: $x^3 + 27$"
  answer="(x + 3)(x^2 - 3x + 9)"
  answerForm="factored-completely"
  answerDisplay="$(x + 3)(x^2 - 3x + 9)$"
  hint="Write both terms as cubes and use the sum of cubes pattern, $a^3+b^3=(a+b)(a^2-ab+b^2)$; then simplify inside the parentheses."
>}}

{{< fillin
  question="Factor: $y^3 + 8$"
  answer="(y + 2)(y^2 - 2y + 4)"
  answerForm="factored-completely"
  answerDisplay="$(y + 2)(y^2 - 2y + 4)$"
  hint="Check that both terms are perfect cubes, write them as cubes, and apply the sum of cubes pattern."
>}}

Be careful to use the correct signs in the factors of the sum and difference
of cubes.

**Example.** Factor: $x^3 - 1000$.

This binomial is a difference. The first and last terms are perfect cubes:
$x^3 = (x)^3$ and $1000 = 10^3$. Use the difference of cubes pattern and
simplify:

$$
\begin{aligned}
x^3 - 1000 &= x^3 - 10^3 \\
&= (x-10)\!\left(x^2 + 10x + 10^2\right) \\
&= (x-10)\!\left(x^2 + 10x + 100\right)
\end{aligned}
$$

{{< fillin
  question="Factor: $u^3 - 125$"
  answer="(u - 5)(u^2 + 5u + 25)"
  answerForm="factored-completely"
  answerDisplay="$(u - 5)(u^2 + 5u + 25)$"
  hint="Write both terms as cubes and use the difference of cubes pattern, $a^3-b^3=(a-b)(a^2+ab+b^2)$; then simplify inside the parentheses."
>}}

{{< fillin
  question="Factor: $v^3 - 343$"
  answer="(v - 7)(v^2 + 7v + 49)"
  answerForm="factored-completely"
  answerDisplay="$(v - 7)(v^2 + 7v + 49)$"
  hint="Check that both terms are perfect cubes (the table of cubes helps), write them as cubes, and apply the difference of cubes pattern."
>}}

**Example.** Factor: $512 - 125p^3$.

This binomial is a difference. The first and last terms are perfect cubes:
$512 = 8^3$ and $125p^3 = (5p)^3$. Use the difference of cubes pattern and
simplify:

$$
\begin{aligned}
512 - 125p^3 &= 8^3 - (5p)^3 \\
&= (8-5p)\!\left(8^2 + 8 \cdot 5p + (5p)^2\right) \\
&= (8-5p)\!\left(64 + 40p + 25p^2\right)
\end{aligned}
$$

{{< fillin
  question="Factor: $64 - 27x^3$"
  answer="(4 - 3x)(16 + 12x + 9x^2)"
  answerForm="factored-completely"
  answerDisplay="$(4 - 3x)(16 + 12x + 9x^2)$"
  hint="Keep the terms in the order given: write each as a cube, then use the difference of cubes pattern and simplify inside the parentheses."
>}}

{{< fillin
  question="Factor: $27 - 8y^3$"
  answer="(3 - 2y)(9 + 6y + 4y^2)"
  answerForm="factored-completely"
  answerDisplay="$(3 - 2y)(9 + 6y + 4y^2)$"
  hint="Write the first and last terms as cubes in the order given, then apply the difference of cubes pattern."
>}}

**Example.** Factor: $27u^3 - 125v^3$.

This binomial is a difference. Both terms are perfect cubes: $27u^3 =
(3u)^3$ and $125v^3 = (5v)^3$. Use the difference of cubes pattern and
simplify:

$$
\begin{aligned}
&27u^3 - 125v^3 \\
&\quad= (3u)^3 - (5v)^3 \\
&\quad= (3u-5v)\!\left((3u)^2 + 3u \cdot 5v + (5v)^2\right) \\
&\quad= (3u-5v)\!\left(9u^2 + 15uv + 25v^2\right)
\end{aligned}
$$

{{< fillin
  question="Factor: $8x^3 - 27y^3$"
  answer="(2x - 3y)(4x^2 + 6xy + 9y^2)"
  answerForm="factored-completely"
  answerDisplay="$(2x - 3y)(4x^2 + 6xy + 9y^2)$"
  hint="Write each term as the cube of a monomial, then use the difference of cubes pattern and simplify inside the parentheses."
>}}

{{< fillin
  question="Factor completely: $1000m^3 - 125n^3$"
  answer="125(4m^2 + 2mn + n^2)(2m - n)"
  answerForm="factored-completely"
  answerDisplay="$125(4m^2 + 2mn + n^2)(2m - n)$"
  hint="Look for a greatest common factor first, then write what remains as a difference of cubes and apply the pattern."
>}}

In the next example, we first factor out the GCF. Then we can recognize the
sum of cubes.

**Example.** Factor: $5m^3 + 40n^3$.

Factor the common factor $5$ first. The binomial that remains is a sum, and
its terms are perfect cubes: $m^3 = (m)^3$ and $8n^3 = (2n)^3$. Use the sum of
cubes pattern and simplify:

$$
\begin{aligned}
5m^3 + 40n^3 &= 5\!\left(m^3 + 8n^3\right) \\
&= 5(m+2n)\!\left(m^2 - m \cdot 2n + (2n)^2\right) \\
&= 5(m+2n)\!\left(m^2 - 2mn + 4n^2\right)
\end{aligned}
$$

{{< fillin
  question="Factor completely: $500p^3 + 4q^3$"
  answer="4(5p + q)(25p^2 - 5pq + q^2)"
  answerForm="factored-completely"
  answerDisplay="$4(5p + q)(25p^2 - 5pq + q^2)$"
  hint="Factor out the greatest common factor first, then write what remains as a sum of cubes and apply the pattern."
>}}

{{< fillin
  question="Factor completely: $432c^3 + 686d^3$"
  answer="2(6c + 7d)(36c^2 - 42cd + 49d^2)"
  answerForm="factored-completely"
  answerDisplay="$2(6c + 7d)(36c^2 - 42cd + 49d^2)$"
  hint="Look for a greatest common factor before anything else, then write the remaining terms as cubes and use the sum of cubes pattern."
>}}

## Key terms

**perfect square trinomial** — a trinomial of the form $a^2 + 2ab + b^2$ or
$a^2 - 2ab + b^2$; it factors to $(a+b)^2$ or $(a-b)^2$. **difference of
squares** — a binomial of the form $a^2 - b^2$; it factors to the conjugate
pair $(a-b)(a+b)$. **sum of squares** — a binomial of the form $a^2 + b^2$; it
does not factor and is prime. **sum of cubes** — $a^3 + b^3 = (a+b)(a^2 - ab +
b^2)$. **difference of cubes** — $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$.

## Practice

### Factor perfect square trinomials

{{< fillin
  question="Factor: $16y^2 + 24y + 9$"
  answer="(4y + 3)^2"
  answerForm="factored-completely"
  answerDisplay="$(4y + 3)^2$"
  hint="Write the first and last terms as squares and test the middle term against $2ab$ before writing the square of a binomial."
>}}

{{< fillin
  question="Factor: $25n^2 - 120n + 144$"
  answer="(5n - 12)^2"
  answerForm="factored-completely"
  answerDisplay="$(5n - 12)^2$"
  hint="Test the first, last, and middle terms against the perfect square trinomials pattern; the middle term's sign picks which pattern."
>}}

{{< fillin
  question="Factor completely: $75u^3 - 30u^2v + 3uv^2$"
  answer="3u{(5u - v)}^2"
  answerForm="factored-completely"
  answerDisplay="$3u(5u - v)^2$"
  hint="Factor out the greatest common factor first, then check whether the trinomial that remains is a perfect square."
>}}

### Factor differences of squares

{{< fillin
  question="Factor: $x^2 - 16$"
  answer="(x - 4)(x + 4)"
  answerForm="factored-completely"
  answerDisplay="$(x - 4)(x + 4)$"
  hint="Write both terms as squares and factor as a product of conjugates."
>}}

{{< fillin
  question="Factor: $4 - 49x^2$"
  answer="(2 - 7x)(2 + 7x)"
  answerForm="factored-completely"
  answerDisplay="$(2 - 7x)(2 + 7x)$"
  hint="Keep the terms in the order given; write each as a square, then write the product of conjugates."
>}}

{{< fillin
  question="Factor completely: $16z^4 - 1$"
  answer="(2z - 1)(2z + 1)(4z^2 + 1)"
  answerForm="factored-completely"
  answerDisplay="$(2z - 1)(2z + 1)(4z^2 + 1)$"
  hint="Factor as a difference of squares, then look for a factor that is still a difference of squares. A sum of squares does not factor."
>}}

### Factor sums and differences of cubes

{{< fillin
  question="Factor: $x^3 + 125$"
  answer="(x + 5)(x^2 - 5x + 25)"
  answerForm="factored-completely"
  answerDisplay="$(x + 5)(x^2 - 5x + 25)$"
  hint="Write both terms as cubes, use the sum of cubes pattern, and simplify inside the parentheses."
>}}

{{< fillin
  question="Factor: $8 - 343t^3$"
  answer="(2 - 7t)(4 + 14t + 49t^2)"
  answerForm="factored-completely"
  answerDisplay="$(2 - 7t)(4 + 14t + 49t^2)$"
  hint="Write each term as a cube in the order given, then use the difference of cubes pattern."
>}}

{{< fillin
  question="Factor completely: $7k^3 + 56$"
  answer="7(k + 2)(k^2 - 2k + 4)"
  answerForm="factored-completely"
  answerDisplay="$7(k + 2)(k^2 - 2k + 4)$"
  hint="Factor out the greatest common factor first, then factor what remains with the matching cubes pattern."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 7.4: Factor Special Products](https://openstax.org/books/elementary-algebra-2e/pages/7-4-factor-special-products) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the pattern-derivation walkthroughs and worked-example step tables as typeset display equations, kept the Perfect Square Trinomials, Difference of Squares, and Sum and Difference of Cubes patterns and How To procedures as callouts, recreated the cubes reference table as a markdown table; replaced the Key Concepts summary and glossary with a Key terms list; omitted the Binomial Squares and Product of Conjugates pattern boxes, the invitation to factor $h^2-100$, the Be Prepared quiz, Self Check checklist, media links, and unselected end-of-section exercises; asked "Factor completely" where the source says "Factor" on the 15 exercises whose answer takes out a common factor or factors a difference of squares twice; adapted selected end-of-section exercises into the interactive Practice block; and converted the remaining practice problems ("Try Its") into interactive exercises with instant feedback.</small>
