---
title: General Strategy for Factoring Polynomials
description: >-
  A step-by-step strategy for choosing the right factoring method — factor out
  the GCF first, then recognize a binomial, trinomial, or more-than-three-term
  polynomial and apply the matching pattern — to factor any polynomial
  completely, adapted from OpenStax Elementary Algebra 2e, Section 7.5.
source_section: "7.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** recognize and use the
  appropriate method to factor a polynomial completely.
{{< /callout >}}

## Recognize and use the appropriate method to factor a polynomial completely

You have now become acquainted with all the methods of factoring that you
will need in this course. The strategy below summarizes all the factoring
methods we have covered and outlines the order in which to try them when
factoring a polynomial.

{{< callout type="info" >}}
  **General strategy for factoring polynomials.**

  Always begin at the top and work down.

  1. **Is there a greatest common factor?** Factor it out first.
  2. **Now look at what is left in the parentheses. Is it a binomial, a
     trinomial, or does it have more than three terms?**
     - **If it is a binomial:**
       - **Is it a sum?** A *sum of squares* does not factor. A *sum of
         cubes* factors with the sum-of-cubes pattern
         $a^3 + b^3 = (a + b)\left(a^2 - ab + b^2\right)$.
       - **Is it a difference?** A *difference of squares* factors as a
         product of conjugates,
         $a^2 - b^2 = (a - b)(a + b)$. A *difference of cubes* uses the
         difference-of-cubes pattern
         $a^3 - b^3 = (a - b)\left(a^2 + ab + b^2\right)$.
     - **If it is a trinomial:**
       - If it is of the form $x^2 + bx + c$, undo FOIL to write it as
         $(x\ \ )(x\ \ )$.
       - If it is of the form $ax^2 + bx + c$ and both $a$ and $c$ are
         perfect squares, check whether it fits the perfect-square-trinomial
         pattern $a^2 \pm 2ab + b^2 = (a \pm b)^2$. Otherwise use trial and
         error or the "ac" method.
     - **If it has more than three terms:** use the grouping method.
  3. **Check.** Is it factored completely? Do the factors multiply back to the
     original polynomial?
{{< /callout >}}

Remember, a polynomial is completely factored if, other than monomials, its
factors are prime!

**Example.** Factor completely: $4x^5 + 12x^4$.

There is a GCF of $4x^4$. Factor it out. What remains in the parentheses is
a binomial. It is a sum, but neither a sum of squares nor a sum of cubes, so
it does not factor further.

$$
\begin{array}{lrcl}
\text{Factor out the GCF } 4x^4. & 4x^5 + 12x^4 &=& 4x^4(x + 3)
\end{array}
$$

Check by multiplying: $4x^4 \cdot x + 4x^4 \cdot 3 = 4x^5 + 12x^4$ ✓, and the
binomial $x + 3$ is prime, so the polynomial is factored completely.

{{< fillin
  question="Factor completely: $3a^4 + 18a^3$."
  answer="3a^3(a + 6)"
  answerDisplay="$3a^3(a + 6)$"
  hint="Factor out the greatest common factor. The largest power of $a$ common to both terms is $a^3$, and the numeric GCF of $3$ and $18$ is $3$."
>}}

{{< fillin
  question="Factor completely: $x^3 + 36x$."
  answer="x(x^2 + 36)"
  answerDisplay="$x(x^2 + 36)$"
  hint="Factor out the GCF of $x$. What is left is a sum of squares — and sums of squares do not factor, so you are done."
>}}

**Example.** Factor completely: $12x^2 - 11x + 2$.

There is no GCF. What is left is a trinomial of the form $ax^2 + bx + c$.
Since $a = 12$ is not a perfect square, it is not a perfect-square trinomial,
so we use trial and error (the "ac" method also works).

$$
\begin{array}{lrcl}
\text{Undo FOIL.} & 12x^2 - 11x + 2 &=& (3x - 2)(4x - 1)
\end{array}
$$

Check by multiplying:
$(3x - 2)(4x - 1) = 12x^2 - 3x - 8x + 2 = 12x^2 - 11x + 2$ ✓.

{{< fillin
  question="Factor completely: $10a^2 - 17a + 6$."
  answer="(5a - 6)(2a - 1)"
  answerDisplay="$(5a - 6)(2a - 1)$"
  hint="There is no GCF. This is a trinomial with $a = 10$ (not a perfect square), so use trial and error or the ac method. The factors of the outer coefficients multiply to $10$ and $6$."
>}}

{{< fillin
  question="Factor completely: $4p^2 - 16p + 12$."
  answer="4(p - 1)(p - 3)"
  answerDisplay="$4(p - 1)(p - 3)$"
  hint="Factor out the GCF of $4$ first. What remains, $p^2 - 4p + 3$, is a trinomial of the form $x^2 + bx + c$ — undo FOIL to find two numbers that multiply to $3$ and add to $-4$."
>}}

**Example.** Factor completely: $g^3 + 25g$.

There is a GCF of $g$. Factor it out. What remains is the binomial
$g^2 + 25$, a sum of squares — and sums of squares are prime, so it does not
factor further.

$$
\begin{array}{lrcl}
\text{Factor out the GCF } g. & g^3 + 25g &=& g\left(g^2 + 25\right)
\end{array}
$$

Check: $g \cdot g^2 + g \cdot 25 = g^3 + 25g$ ✓.

{{< fillin
  question="Factor completely: $27y^2 + 48$."
  answer="3(9y^2 + 16)"
  answerDisplay="$3(9y^2 + 16)$"
  hint="Factor out the GCF of $3$. What is left is a sum of squares, which is prime — so you are finished."
>}}

**Example.** Factor completely: $12y^2 - 75$.

There is a GCF of $3$. Factor it out. What remains, $4y^2 - 25$, is a
difference of squares — $(2y)^2 - (5)^2$ — so we write it as a product of
conjugates.

$$
\begin{array}{lrcl}
\text{Factor out the GCF } 3. & 12y^2 - 75 &=& 3\left(4y^2 - 25\right) \\[4pt]
\text{Write as conjugates.} & &=& 3(2y - 5)(2y + 5)
\end{array}
$$

Neither remaining binomial is a difference of squares, so the polynomial is
factored completely.

{{< fillin
  question="Factor completely: $16x^3 - 36x$."
  answer="4x(2x - 3)(2x + 3)"
  answerDisplay="$4x(2x - 3)(2x + 3)$"
  hint="Factor out the GCF of $4x$ first. What remains, $4x^2 - 9$, is a difference of squares $(2x)^2 - (3)^2$; write it as a product of conjugates."
>}}

**Example.** Factor completely: $4a^2 - 12ab + 9b^2$.

There is no GCF. It is a trinomial in which the first term $4a^2 = (2a)^2$
and the last term $9b^2 = (3b)^2$ are both perfect squares, and the middle
term is $-2 \cdot 2a \cdot 3b = -12ab$, so it fits the perfect-square-trinomial
pattern.

$$
\begin{array}{lrcl}
\text{Write it as a square.} & 4a^2 - 12ab + 9b^2 &=& (2a - 3b)^2
\end{array}
$$

Check: $(2a - 3b)^2 = (2a)^2 - 2 \cdot 2a \cdot 3b + (3b)^2 =
4a^2 - 12ab + 9b^2$ ✓.

{{< fillin
  question="Factor completely: $4x^2 + 20xy + 25y^2$."
  answer="(2x + 5y)^2"
  answerDisplay="$(2x + 5y)^2$"
  hint="The first term $4x^2 = (2x)^2$ and the last term $25y^2 = (5y)^2$ are both perfect squares, and the middle term is $2 \cdot 2x \cdot 5y$ — so this fits the pattern $a^2 + 2ab + b^2 = (a + b)^2$."
>}}

**Example.** Factor completely: $6y^2 - 18y - 60$.

There is a GCF of $6$. Factor it out. What remains, $y^2 - 3y - 10$, is a
trinomial with leading coefficient $1$, so we undo FOIL.

$$
\begin{array}{lrcl}
\text{Factor out the GCF } 6. & 6y^2 - 18y - 60 &=& 6\left(y^2 - 3y - 10\right) \\[4pt]
\text{Undo FOIL.} & &=& 6(y + 2)(y - 5)
\end{array}
$$

Check by multiplying:
$6(y + 2)(y - 5) = 6\left(y^2 - 3y - 10\right) = 6y^2 - 18y - 60$ ✓.

{{< fillin
  question="Factor completely: $8y^2 + 16y - 24$."
  answer="8(y - 1)(y + 3)"
  answerDisplay="$8(y - 1)(y + 3)$"
  hint="Factor out the GCF of $8$ first. What remains, $y^2 + 2y - 3$, is a trinomial with leading coefficient $1$ — find two numbers that multiply to $-3$ and add to $2$."
>}}

**Example.** Factor completely: $24x^3 + 81$.

There is a GCF of $3$. Factor it out. What remains, $8x^3 + 27$, is a binomial
that is a *sum of cubes*: $(2x)^3 + (3)^3$. Apply the sum-of-cubes pattern
$a^3 + b^3 = (a + b)\left(a^2 - ab + b^2\right)$ with $a = 2x$ and $b = 3$.

$$
\begin{array}{lrcl}
\text{Factor out the GCF } 3. & 24x^3 + 81 &=& 3\left(8x^3 + 27\right) \\[4pt]
\text{Use the sum-of-cubes pattern.} & &=& 3(2x + 3)\left(4x^2 - 6x + 9\right)
\end{array}
$$

{{< fillin
  question="Factor completely: $250m^3 + 432$."
  answer="2(5m + 6)(25m^2 - 30m + 36)"
  answerDisplay="$2(5m + 6)(25m^2 - 30m + 36)$"
  hint="Factor out the GCF of $2$ first. What remains, $125m^3 + 216$, is a sum of cubes $(5m)^3 + (6)^3$; apply $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$."
>}}

**Example.** Factor completely: $2x^4 - 32$.

There is a GCF of $2$. Factor it out. What remains, $x^4 - 16$, is a
difference of squares — $\left(x^2\right)^2 - (4)^2$. The first resulting
binomial, $x^2 - 4$, is *again* a difference of squares, so factor it once
more. The binomial $x^2 + 4$ is a sum of squares and does not factor.

$$
\begin{array}{lrcl}
\text{Factor out the GCF } 2. & 2x^4 - 32 &=& 2\left(x^4 - 16\right) \\[4pt]
\text{Product of conjugates.} & &=& 2\left(x^2 - 4\right)\left(x^2 + 4\right) \\[4pt]
\text{Factor again.} & &=& 2(x - 2)(x + 2)\left(x^2 + 4\right)
\end{array}
$$

None of the remaining binomials is a difference of squares, so the polynomial
is factored completely.

{{< fillin
  question="Factor completely: $4a^4 - 64$."
  answer="4(a^2 + 4)(a - 2)(a + 2)"
  answerDisplay="$4(a^2 + 4)(a - 2)(a + 2)$"
  hint="Factor out the GCF of $4$ first. What remains, $a^4 - 16$, is a difference of squares; the factor $a^2 - 4$ is a difference of squares again, but $a^2 + 4$ is a sum of squares and stays as is."
>}}

**Example.** Factor completely: $3x^2 + 6bx - 3ax - 6ab$.

There is a GCF of $3$. Factor it out. What remains,
$x^2 + 2bx - ax - 2ab$, has *more than three terms*, so use grouping.

$$
\begin{array}{lrcl}
\text{Factor out the GCF } 3. & 3x^2 + 6bx - 3ax - 6ab
  &=& 3\left(x^2 + 2bx - ax - 2ab\right) \\[4pt]
\text{Group and factor each pair.} & &=& 3[\,x(x + 2b) - a(x + 2b)\,] \\[4pt]
\text{Factor out } (x + 2b). & &=& 3(x + 2b)(x - a)
\end{array}
$$

Check by multiplying:
$3(x + 2b)(x - a) = 3\left(x^2 - ax + 2bx - 2ab\right)
= 3x^2 - 3ax + 6bx - 6ab$ ✓.

{{< fillin
  question="Factor completely: $6x^2 - 12xc + 6bx - 12bc$."
  answer="6(x + b)(x - 2c)"
  answerDisplay="$6(x + b)(x - 2c)$"
  hint="Factor out the GCF of $6$ first. What remains has four terms, so use grouping: $x^2 - 2xc + bx - 2bc = x(x - 2c) + b(x - 2c)$."
>}}

## Key terms

**greatest common factor (GCF)** — the largest monomial that divides every
term of a polynomial; always factor it out first. **difference of squares** —
a binomial $a^2 - b^2$, which factors as the product of conjugates
$(a - b)(a + b)$. **sum of squares** — a binomial $a^2 + b^2$, which is prime
(does not factor). **sum and difference of cubes** — the patterns
$a^3 + b^3 = (a + b)\left(a^2 - ab + b^2\right)$ and
$a^3 - b^3 = (a - b)\left(a^2 + ab + b^2\right)$. **perfect-square trinomial**
— a trinomial $a^2 \pm 2ab + b^2$, which factors as $(a \pm b)^2$.
**grouping** — a method for factoring a polynomial with more than three terms
by pairing terms that share a common factor. **factored completely** — a
polynomial written so that, other than monomials, all of its factors are
prime.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 7.5: General Strategy for Factoring Polynomials](https://openstax.org/books/elementary-algebra-2e/pages/7-5-general-strategy-for-factoring-polynomials) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the "General Strategy for Factoring Polynomials" figure (Figure 7.3) as an accessible nested decision list and merged it with the How-To steps; recast the worked examples as prose with `{lrcl}` step tables and inline checks; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
