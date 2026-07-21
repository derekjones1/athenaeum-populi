---
title: General Strategy for Factoring Polynomials
description: >-
  Recognizing and using the appropriate method to factor a polynomial completely — adapted from OpenStax Intermediate Algebra 2e, Section 6.4.
source_section: "6.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** recognize and use the appropriate method to factor a polynomial completely.
{{< /callout >}}

## Recognize and use the appropriate method to factor a polynomial completely

You have now become acquainted with all the methods of factoring that you will need in this course. The following chart summarizes all the factoring methods we have covered, and outlines a strategy you should use when factoring polynomials.

| Form after factoring out the GCF | Method |
| :--- | :--- |
| Binomial: difference of squares | $a^2-b^2=(a-b)(a+b)$ |
| Binomial: sum of squares | Sums of squares do not factor. |
| Binomial: sum of cubes | $a^3+b^3=(a+b)(a^2-ab+b^2)$ |
| Binomial: difference of cubes | $a^3-b^3=(a-b)(a^2+ab+b^2)$ |
| Trinomial: $x^2+bx+c$ | $(x\phantom{{}+{}})(x\phantom{{}+{}})$ |
| Trinomial: $ax^2+bx+c$ | If $a$ and $c$ are squares, check the trinomial-square pattern; otherwise use trial and error or the “$ac$” method. |
| More than three terms | Use grouping. |

{{< callout type="info" >}}
  **Use a general strategy for factoring polynomials.**

  1. Is there a greatest common factor? Factor it out.
  2. Is the polynomial a binomial, trinomial, or are there more than three terms?
     - For a binomial, decide whether it is a sum or difference and whether it involves squares or cubes. Sums of squares do not factor. Use the sum or difference of cubes pattern for cubes, and factor a difference of squares as a product of conjugates.
     - For $x^2+bx+c$, “undo” FOIL. For $ax^2+bx+c$, check the trinomial-square pattern when $a$ and $c$ are squares; otherwise use trial and error or the “$ac$” method.
     - For more than three terms, use grouping.
  3. Check. Is it factored completely? Do the factors multiply back to the original polynomial?
{{< /callout >}}

Remember, a polynomial is completely factored if, other than monomials, its factors are prime!

**Example.** Factor completely: $7x^3-21x^2-70x$.

First factor out the GCF, $7x$. The expression in parentheses is a trinomial with leading coefficient $1$, so “undo” FOIL. Neither resulting binomial can be factored further.

$$
\begin{array}{lrcl}
\text{Factor out the GCF.} & 7x^3-21x^2-70x &=& 7x(x^2-3x-10) \\[4pt]
\text{“Undo” FOIL.} &&=& 7x(x+2)(x-5)
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
7x(x+2)(x-5) &=& 7x(x^2-5x+2x-10) \\[4pt]
&=& 7x(x^2-3x-10) \\[4pt]
&=& 7x^3-21x^2-70x \checkmark
\end{array}
$$

{{< fillin
  question="Factor completely: $8y^3+16y^2-24y$."
  answer="8y(y-1)(y+3)"
  answerDisplay="$8y(y-1)(y+3)$"
  hint="First factor out the GCF $8y$, then factor the remaining trinomial."
>}}

{{< fillin
  question="Factor completely: $5y^3-15y^2-270y$."
  answer="5y(y-9)(y+6)"
  answerDisplay="$5y(y-9)(y+6)$"
  hint="First factor out the GCF $5y$, then factor the remaining trinomial."
>}}

Be careful when you are asked to factor a binomial as there are several options!

**Example.** Factor completely: $24y^2-150$.

First factor out the GCF, $6$. The remaining binomial is a difference of squares, so write it as a product of conjugates. Neither binomial can be factored further.

$$
\begin{array}{lrcl}
\text{Factor out the GCF.} & 24y^2-150 &=& 6(4y^2-25) \\[4pt]
\text{Write as a product of conjugates.} &&=& 6(2y-5)(2y+5)
\end{array}
$$

**Check:** $6(2y-5)(2y+5)=6(4y^2-25)=24y^2-150\checkmark$.

{{< fillin
  question="Factor completely: $16x^3-36x$."
  answer="4x(2x-3)(2x+3)"
  answerDisplay="$4x(2x-3)(2x+3)$"
  hint="Factor out the GCF, then recognize a difference of squares."
>}}

{{< fillin
  question="Factor completely: $27y^2-48$."
  answer="3(3y-4)(3y+4)"
  answerDisplay="$3(3y-4)(3y+4)$"
  hint="Factor out the GCF $3$, then recognize a difference of squares."
>}}

The next example can be factored using several methods. Recognizing the trinomial-squares pattern will make your work easier.

**Example.** Factor completely: $4a^2-12ab+9b^2$.

There is no GCF. The trinomial has $a\ne1$, but the first and last terms are perfect squares. It fits the pattern $a^2-2ab+b^2$.

$$4a^2-12ab+9b^2=(2a)^2-2(2a)(3b)+(3b)^2=(2a-3b)^2$$

The binomial cannot be factored. Check by multiplying:

$$
(2a-3b)^2=(2a)^2-2(2a)(3b)+(3b)^2=4a^2-12ab+9b^2\checkmark
$$

{{< fillin
  question="Factor completely: $4x^2+20xy+25y^2$."
  answer="(2x+5y)^2"
  answerDisplay="$(2x+5y)^2$"
  hint="Check whether the trinomial fits the pattern $a^2+2ab+b^2$."
>}}

{{< fillin
  question="Factor completely: $9x^2-24xy+16y^2$."
  answer="(3x-4y)^2"
  answerDisplay="$(3x-4y)^2$"
  hint="Check whether the trinomial fits the pattern $a^2-2ab+b^2$."
>}}

Remember, sums of squares do not factor, but sums of cubes do!

**Example.** Factor completely: $12x^3y^2+75xy^2$.

Factor out the GCF, $3xy^2$. The remaining binomial is a sum of squares, which is prime.

$$12x^3y^2+75xy^2=3xy^2(4x^2+25)$$

**Check:** $3xy^2(4x^2+25)=12x^3y^2+75xy^2\checkmark$.

{{< fillin
  question="Factor completely: $50x^3y+72xy$."
  answer="2xy(25x^2+36)"
  answerDisplay="$2xy(25x^2+36)$"
  hint="Factor out the GCF. The remaining binomial is a sum of squares."
>}}

{{< fillin
  question="Factor completely: $27xy^3+48xy$."
  answer="3xy(9y^2+16)"
  answerDisplay="$3xy(9y^2+16)$"
  hint="Factor out the GCF. The remaining binomial is a sum of squares."
>}}

When using the sum or difference of cubes pattern, be careful with the signs.

**Example.** Factor completely: $24x^3+81y^3$.

Factor out the GCF, $3$. The remaining binomial is a sum of cubes. Apply the sum of cubes pattern.

$$
\begin{array}{lrcl}
\text{Factor out the GCF.} & 24x^3+81y^3 &=& 3(8x^3+27y^3) \\[4pt]
\text{Recognize a sum of cubes.} &&=& 3\big((2x)^3+(3y)^3\big) \\[4pt]
\text{Use the sum of cubes pattern.} &&=& 3(2x+3y)(4x^2-6xy+9y^2)
\end{array}
$$

The expression is factored completely. Check by multiplying.

{{< fillin
  question="Factor completely: $250m^3+432n^3$."
  answer="2(5m+6n)(25m^2-30mn+36n^2)"
  hint="Factor out the GCF $2$, then use the sum of cubes pattern."
>}}

{{< fillin
  question="Factor completely: $2p^3+54q^3$."
  answer="2(p+3q)(p^2-3pq+9q^2)"
  hint="Factor out the GCF $2$, then use the sum of cubes pattern."
>}}

**Example.** Factor completely: $3x^5y-48xy$.

Factor out the GCF, $3xy$. The remaining binomial is a difference of squares. After factoring it as a product of conjugates, the first binomial is again a difference of squares.

$$
\begin{array}{lrcl}
\text{Factor out the GCF.} & 3x^5y-48xy &=& 3xy(x^4-16) \\[4pt]
\text{Factor the difference of squares.} &&=& 3xy(x^2-4)(x^2+4) \\[4pt]
\text{Factor the difference of squares again.} &&=& 3xy(x-2)(x+2)(x^2+4)
\end{array}
$$

The expression is factored completely. Check by multiplying.

{{< fillin
  question="Factor completely: $4a^5b-64ab$."
  answer="4ab(a^2+4)(a-2)(a+2)"
  answerDisplay="$4ab(a^2+4)(a-2)(a+2)$"
  hint="Factor out the GCF, then factor a difference of squares twice."
>}}

{{< fillin
  question="Factor completely: $7xy^5-7xy$."
  answer="7xy(y^2+1)(y-1)(y+1)"
  answerDisplay="$7xy(y^2+1)(y-1)(y+1)$"
  hint="Factor out the GCF, then factor a difference of squares twice."
>}}

**Example.** Factor completely: $4x^2+8bx-4ax-8ab$.

Factor out the GCF, $4$. There are four terms, so use grouping.

$$
\begin{array}{lrcl}
\text{Factor out the GCF.} & 4x^2+8bx-4ax-8ab &=& 4(x^2+2bx-ax-2ab) \\[4pt]
\text{Group and factor.} &&=& 4\big[x(x+2b)-a(x+2b)\big] \\[4pt]
\text{Factor the common binomial.} &&=& 4(x+2b)(x-a)
\end{array}
$$

**Check:** $4(x+2b)(x-a)=4(x^2-ax+2bx-2ab)=4x^2+8bx-4ax-8ab\checkmark$.

{{< fillin
  question="Factor completely: $6x^2-12xc+6bx-12bc$."
  answer="6(x+b)(x-2c)"
  answerDisplay="$6(x+b)(x-2c)$"
  hint="Factor out the GCF $6$, then use grouping."
>}}

{{< fillin
  question="Factor completely: $16x^2+24xy-4x-6y$."
  answer="2(4x-1)(2x+3y)"
  answerDisplay="$2(4x-1)(2x+3y)$"
  hint="Factor out the GCF $2$, then use grouping."
>}}

Taking out the complete GCF in the first step will always make your work easier.

**Example.** Factor completely: $40x^2y+44xy-24y$.

Factor out the GCF, $4y$, then factor the trinomial with $a\ne1$.

$$
\begin{array}{lrcl}
\text{Factor out the GCF.} & 40x^2y+44xy-24y &=& 4y(10x^2+11x-6) \\[4pt]
\text{Factor the trinomial.} &&=& 4y(5x-2)(2x+3)
\end{array}
$$

**Check:** $4y(5x-2)(2x+3)=4y(10x^2+11x-6)=40x^2y+44xy-24y\checkmark$.

{{< fillin
  question="Factor completely: $4p^2q-16pq+12q$."
  answer="4q(p-3)(p-1)"
  answerDisplay="$4q(p-3)(p-1)$"
  hint="Factor out the complete GCF $4q$, then factor the trinomial."
>}}

{{< fillin
  question="Factor completely: $6pq^2-9pq-6p$."
  answer="3p(2q+1)(q-2)"
  answerDisplay="$3p(2q+1)(q-2)$"
  hint="Factor out the complete GCF $3p$, then factor the trinomial."
>}}

When we have factored a polynomial with four terms, most often we separated it into two groups of two terms. Remember that we can also separate it into a trinomial and then one term.

**Example.** Factor completely: $9x^2-12xy+4y^2-49$.

There is no GCF. With more than three terms, use grouping. The last two terms have no GCF, so group the first three terms. They form a perfect-square trinomial, and the resulting binomial is a difference of squares.

$$
\begin{array}{lrcl}
\text{Write the trinomial as a square.} & 9x^2-12xy+4y^2-49 &=& (3x-2y)^2-49 \\[4pt]
\text{Write as a difference of squares.} &&=& (3x-2y)^2-7^2 \\[4pt]
\text{Write as a product of conjugates.} &&=& (3x-2y-7)(3x-2y+7)
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
(3x-2y-7)(3x-2y+7) &=& 9x^2-6xy-21x-6xy+4y^2+14y+21x-14y-49 \\[4pt]
&=& 9x^2-12xy+4y^2-49 \checkmark
\end{array}
$$

{{< fillin
  question="Factor completely: $4x^2-12xy+9y^2-25$."
  answer="(2x-3y-5)(2x-3y+5)"
  answerDisplay="$(2x-3y-5)(2x-3y+5)$"
  hint="Group the first three terms as a perfect-square trinomial, then factor a difference of squares."
>}}

{{< fillin
  question="Factor completely: $16x^2-24xy+9y^2-64$."
  answer="(4x-3y-8)(4x-3y+8)"
  answerDisplay="$(4x-3y-8)(4x-3y+8)$"
  hint="Group the first three terms as a perfect-square trinomial, then factor a difference of squares."
>}}

## Key terms

**completely factored** — written as a product whose nonmonomial factors are prime. **general factoring strategy** — first factor out the GCF, then choose a method according to the number of terms and applicable special patterns, and finally check the factorization. **product of conjugates** — the factorization $(a-b)(a+b)$ of a difference of squares.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 6.4: General Strategy for Factoring Polynomials](https://openstax.org/books/intermediate-algebra-2e/pages/6-4-general-strategy-for-factoring-polynomials) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recast the factoring-method chart as an accessible table, reformatted the worked-example tables as aligned math, omitted the end-of-section exercises, and converted the practice problems (“Try Its”) into interactive exercises with instant feedback.</small>
