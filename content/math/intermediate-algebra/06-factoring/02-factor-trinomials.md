---
title: Factor Trinomials
description: >-
  Factoring trinomials with leading coefficient one, by trial and error, by
  the ac method, and by substitution — adapted from OpenStax Intermediate
  Algebra 2e, Section 6.2.
source_section: "6.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** factor trinomials of
  the form $x^2+bx+c$; factor trinomials of the form $ax^2+bx+c$ using trial
  and error; factor trinomials of the form $ax^2+bx+c$ using the “ac” method;
  and factor using substitution.
{{< /callout >}}

## Factor trinomials of the form $x^2+bx+c$

You have already learned how to multiply binomials using FOIL. Now you'll
need to “undo” this multiplication. To factor the trinomial means to start
with the product, and end with the factors.

$$
\begin{array}{rcl}
(x+m)(x+n)&=&x^2+mx+nx+mn\\[4pt]
&=&x^2+(m+n)x+mn
\end{array}
$$

This tells us that to factor a trinomial of the form $x^2+bx+c$, we need two
factors $(x+m)$ and $(x+n)$ where $m$ and $n$ multiply to $c$ and add to $b$.

**Example.** Factor $x^2+11x+24$.

Write two sets of parentheses and put $x$ as the first term. The factor
pairs of $24$ have sums $1+24=25$, $2+12=14$, $3+8=11$, and $4+6=10$.
Use $3$ and $8$ as the last terms.

$$x^2+11x+24=(x+3)(x+8)$$

$$
\begin{array}{rcl}
(x+3)(x+8)&=&x^2+8x+3x+24\\[4pt]
&=&x^2+11x+24\ \checkmark
\end{array}
$$

{{< fillin
  question="Factor $q^2+10q+24$."
  answer="(q+4)(q+6)"
  hint="Find two numbers that multiply to $24$ and add to $10$."
>}}

{{< fillin
  question="Factor $t^2+14t+24$."
  answer="(t+2)(t+12)"
  hint="Find two numbers that multiply to $24$ and add to $14$."
>}}

{{< callout type="info" >}}
  **Factor trinomials of the form $x^2+bx+c$.**

  1. Write the factors as two binomials with first terms $x$.
  2. Find $m,n$ that multiply to $c$ and add to $b$.
  3. Use $m,n$ as the last terms of the factors.
  4. Check by multiplying the factors.
{{< /callout >}}

In the first example, all terms were positive. With only the middle term
negative, a positive product and negative sum require two negative numbers.

**Example.** Factor $y^2-11y+28$.

The negative factor pairs of $28$ have sums $-1+(-28)=-29$,
$-2+(-14)=-16$, and $-4+(-7)=-11$. Therefore

$$y^2-11y+28=(y-4)(y-7).$$

{{< fillin
  question="Factor $u^2-9u+18$."
  answer="(u-3)(u-6)"
  hint="Use two negative numbers that multiply to $18$ and add to $-9$."
>}}

{{< fillin
  question="Factor $y^2-16y+63$."
  answer="(y-7)(y-9)"
  hint="Use two negative numbers that multiply to $63$ and add to $-16$."
>}}

If the last term is negative, its factors have opposite signs. Choose them
carefully to get the correct sign for the middle term. Terms must be written
in descending order.

**Example.** Factor $2x+x^2-48$.

First reorder it as $x^2+2x-48$. The factor-pair sums include
$-1+48=47$, $-2+24=22$, $-3+16=13$, $-4+12=8$, and $-6+8=2$.

$$2x+x^2-48=(x-6)(x+8).$$

{{< fillin
  question="Factor $9m+m^2+18$."
  answer="(m+3)(m+6)"
  hint="First write the trinomial in descending order."
>}}

{{< fillin
  question="Factor $-7n+12+n^2$."
  answer="(n-3)(n-4)"
  hint="First write the trinomial in descending order."
>}}

Trinomials may have two variables. The $y^2$ in the last term means the
second terms of the binomial factors must each contain $y$.

**Example.** Factor $r^2-8rs-9s^2$.

The factor-pair sums for $-9$ are $8,-8,0$. Use $1,-9$:

$$r^2-8rs-9s^2=(r+s)(r-9s).$$

{{< fillin
  question="Factor $a^2-11ab+10b^2$."
  answer="(a-b)(a-10b)"
  hint="Find coefficients that multiply to $10$ and add to $-11$."
>}}

{{< fillin
  question="Factor $m^2-13mn+12n^2$."
  answer="(m-n)(m-12n)"
  hint="Find coefficients that multiply to $12$ and add to $-13$."
>}}

Some trinomials are prime. The only way to be certain is to list all
possibilities and show none work.

**Example.** Factor $u^2-9uv-12v^2$.

The factor-pair sums for $-12$ are $-11,11,-4,4,-1,1$. None is $-9$, so
the trinomial is prime.

{{< multiplechoice
  question="Factor $x^2-7xy-10y^2$."
  answer="prime"
>}}
prime
$(x-5y)(x-2y)$
$(x+5y)(x-2y)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Factor $p^2+15pq+20q^2$."
  answer="prime"
>}}
prime
$(p+5q)(p+4q)$
$(p+10q)(p+2q)$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **Strategy.** When $c$ is positive, $m,n$ have the same sign: positive
  when $b$ is positive and negative when $b$ is negative. When $c$ is
  negative, they have opposite signs, and the sign of the number with larger
  absolute value matches the sign of $b$.
{{< /callout >}}

## Factor trinomials of the form $ax^2+bx+c$ using trial and error

Remember to always check for a GCF first. Sometimes, after factoring the
GCF, the leading coefficient becomes $1$.

**Example.** Factor completely: $4x^3+16x^2-20x$.

$$4x^3+16x^2-20x=4x(x^2+4x-5)=4x(x-1)(x+5).$$

{{< fillin
  question="Factor completely: $5x^3+15x^2-20x$."
  answer="5x(x-1)(x+4)"
  hint="Factor out $5x$ first."
>}}

{{< fillin
  question="Factor completely: $6y^3+18y^2-60y$."
  answer="6y(y-2)(y+5)"
  hint="Factor out $6y$ first."
>}}

When there is no GCF, test factor pairs. For $3x^2+5x+2$, test $x,3x$ and
both orders of $1,2$. Inner and outer products show

$$3x^2+5x+2=(x+1)(3x+2).$$

**Example.** Factor $3y^2+22y+7$ using trial and error.

There is no GCF. Test the sole factor pairs $y,3y$ and $1,7$:

| Possible factors | Product |
| :--- | :--- |
| $(y+1)(3y+7)$ | $3y^2+10y+7$ |
| $(y+7)(3y+1)$ | $3y^2+22y+7$ |

Thus $3y^2+22y+7=(y+7)(3y+1)$.

{{< fillin
  question="Factor completely using trial and error: $2a^2+5a+3$."
  answer="(a+1)(2a+3)"
  hint="Test factor pairs of $2a^2$ and $3$."
>}}

{{< fillin
  question="Factor completely using trial and error: $4b^2+5b+1$."
  answer="(b+1)(4b+1)"
  hint="Test factor pairs of $4b^2$ and $1$."
>}}

{{< callout type="info" >}}
  **Factor using trial and error.**

  1. Write in descending order.
  2. Factor any GCF.
  3. Find all factor pairs of the first term.
  4. Find all factor pairs of the third term.
  5. Test combinations until the correct product is found.
  6. Check by multiplying.
{{< /callout >}}

When the middle term is negative and the last term positive, both binomial
signs must be negative.

**Example.** Factor $6b^2-13b+5$ using trial and error.

Testing $b,6b$ and $2b,3b$ with negative factors of $5$ gives

| Possible factors | Product |
| :--- | :--- |
| $(b-1)(6b-5)$ | $6b^2-11b+5$ |
| $(b-5)(6b-1)$ | $6b^2-31b+5$ |
| $(2b-1)(3b-5)$ | $6b^2-13b+5$ |
| $(2b-5)(3b-1)$ | $6b^2-17b+5$ |

So $6b^2-13b+5=(2b-1)(3b-5)$.

{{< fillin
  question="Factor completely using trial and error: $8x^2-14x+3$."
  answer="(2x-3)(4x-1)"
  hint="Test factor pairs of $8$ and $3$ with negative signs."
>}}

{{< fillin
  question="Factor completely using trial and error: $10y^2-37y+7$."
  answer="(2y-7)(5y-1)"
  hint="Test factor pairs of $10$ and $7$ with negative signs."
>}}

If an expression has no GCF, neither factor can have a common factor. This
eliminates some combinations.

**Example.** Factor $18x^2-37xy+15y^2$ using trial and error.

Test $x,18x$, $2x,9x$, and $3x,6x$ with $-y,-15y$ and $-3y,-5y$,
eliminating binomials with common factors. The correct product is

$$18x^2-37xy+15y^2=(2x-3y)(9x-5y).$$

{{< fillin
  question="Factor completely using trial and error: $18x^2-3xy-10y^2$."
  answer="(3x+2y)(6x-5y)"
  hint="Use opposite signs and eliminate binomials with common factors."
>}}

{{< fillin
  question="Factor completely using trial and error: $30x^2-53xy-21y^2$."
  answer="(3x+y)(10x-21y)"
  hint="Use opposite signs and eliminate binomials with common factors."
>}}

If the leading coefficient is negative, so is the GCF.

**Example.** Factor $-10y^4-55y^3-60y^2$.

$$-10y^4-55y^3-60y^2=-5y^2(2y^2+11y+12)=-5y^2(y+4)(2y+3).$$

{{< fillin
  question="Factor completely: $15n^3-85n^2+100n$."
  answer="5n(n-4)(3n-5)"
  hint="Factor out $5n$ first."
>}}

{{< fillin
  question="Factor completely: $56q^3+320q^2-96q$."
  answer="8q(q+6)(7q-2)"
  hint="Factor out $8q$ first."
>}}

## Factor trinomials of the form $ax^2+bx+c$ using the “ac” method

The “ac” method, sometimes called the grouping method, extends the preceding
method. It is very structured and always works.

**Example.** Factor $6x^2+7x+2$ using the “ac” method.

There is no GCF. Since $ac=12$, use $3,4$, which multiply to $12$ and add
to $7$. Split the middle term and factor by grouping:

$$
\begin{array}{rcl}
6x^2+7x+2&=&6x^2+3x+4x+2\\[4pt]
&=&3x(2x+1)+2(2x+1)\\[4pt]
&=&(2x+1)(3x+2)
\end{array}
$$

{{< fillin
  question="Factor using the ac method: $6x^2+13x+2$."
  answer="(x+2)(6x+1)"
  hint="Find numbers that multiply to $12$ and add to $13$."
>}}

{{< fillin
  question="Factor using the ac method: $4y^2+8y+3$."
  answer="(2y+1)(2y+3)"
  hint="Find numbers that multiply to $12$ and add to $8$."
>}}

{{< callout type="info" >}}
  **Factor using the “ac” method.** Factor any GCF; find $ac$; find $m,n$
  that multiply to $ac$ and add to $b$; split the middle term using $m,n$;
  factor by grouping; and check by multiplying.
{{< /callout >}}

**Example.** Factor $10y^2-55y+70$ using the “ac” method.

Factor out $5$. Inside, $ac=28$ and $-4,-7$ multiply to $28$ and add to
$-11$.

$$
\begin{array}{rcl}
10y^2-55y+70&=&5(2y^2-11y+14)\\[4pt]
&=&5(2y^2-7y-4y+14)\\[4pt]
&=&5(y-2)(2y-7)
\end{array}
$$

{{< fillin
  question="Factor using the ac method: $16x^2-32x+12$."
  answer="4(2x-3)(2x-1)"
  hint="Factor out $4$ first."
>}}

{{< fillin
  question="Factor using the ac method: $18w^2-39w+18$."
  answer="3(3w-2)(2w-3)"
  hint="Factor out $3$ first."
>}}

## Factor using substitution

Sometimes a trinomial does not appear to be in $ax^2+bx+c$ form. A
thoughtful substitution can make it fit. It is standard to use $u$. Look for
a middle-term variable whose square is the variable part of the first term.

**Example.** Factor $x^4-4x^2-5$ by substitution.

Let $u=x^2$:

$$x^4-4x^2-5=u^2-4u-5=(u+1)(u-5)=(x^2+1)(x^2-5).$$

{{< fillin
  question="Factor by substitution: $h^4+4h^2-12$."
  answer="(h^2-2)(h^2+6)"
  hint="Let $u=h^2$."
>}}

{{< fillin
  question="Factor by substitution: $y^4-y^2-20$."
  answer="(y^2+4)(y^2-5)"
  hint="Let $u=y^2$."
>}}

Sometimes the expression to substitute is not a monomial.

**Example.** Factor $(x-2)^2+7(x-2)+12$ by substitution.

Let $u=x-2$:

$$
\begin{array}{rcl}
(x-2)^2+7(x-2)+12&=&u^2+7u+12\\[4pt]
&=&(u+3)(u+4)\\[4pt]
&=&(x+1)(x+2)
\end{array}
$$

This could also be factored by multiplying out and combining like terms,
but most students prefer substitution.

{{< fillin
  question="Factor by substitution: $(x-5)^2+6(x-5)+8$."
  answer="(x-3)(x-1)"
  hint="Let $u=x-5$."
>}}

{{< fillin
  question="Factor by substitution: $(y-4)^2+8(y-4)+15$."
  answer="(y-1)(y+1)"
  hint="Let $u=y-4$."
>}}

## Key terms

**trial and error** — testing possible factor pairs until their product is
the original trinomial. **ac method** — finding two numbers whose product is
$ac$ and sum is $b$, splitting the middle term, and factoring by grouping.
**factoring by substitution** — replacing a repeated expression with a
variable to make a familiar factorable form. **prime trinomial** — a
trinomial that cannot be factored over the integers.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 6.2: Factor Trinomials](https://openstax.org/books/intermediate-algebra-2e/pages/6-2-factor-trinomials) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted worked-example tables and factoring diagrams as accessible math and tables, omitted the Be Prepared quiz, media link, and end-of-section exercises, and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
