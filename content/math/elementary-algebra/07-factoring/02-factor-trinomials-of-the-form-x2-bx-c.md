---
title: Factor Trinomials of the Form $x^2+bx+c$
description: >-
  Reversing FOIL to factor trinomials of the form x²+bx+c by finding two numbers
  whose product is c and whose sum is b, including trinomials with a negative
  last term, two negative terms, prime trinomials, and trinomials in two
  variables — adapted from OpenStax Elementary Algebra 2e, Section 7.2.
source_section: "7.2"
weight: 2
linkTitle: "Factor Trinomials of the Form x²+bx+c"
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** factor trinomials of the
  form $x^2+bx+c$, and factor trinomials of the form $x^2+bxy+cy^2$.
{{< /callout >}}

## Factor Trinomials of the Form $x^2+bx+c$

You have already learned how to multiply binomials using FOIL. Now you'll need
to "undo" this multiplication — to start with the product and end up with the
factors. Let's look at an example of multiplying binomials to refresh your
memory.

$$
\begin{array}{rcl}
(x+2)(x+3) & & \text{factors} \\
x^2 + 3x + 2x + 6 & & \\
x^2 + 5x + 6 & & \text{product}
\end{array}
$$

To factor the trinomial means to start with the product, $x^2+5x+6$, and end
with the factors, $(x+2)(x+3)$. You need to think about where each of the terms
in the trinomial came from.

The *first term* came from multiplying the first term in each binomial. So to
get $x^2$ in the product, each binomial must start with an $x$.

$$
\begin{array}{c}
x^2 + 5x + 6 \\
(x\ \ \ )(x\ \ \ )
\end{array}
$$

The *last term* in the trinomial came from multiplying the last terms in each
binomial. So the last terms must multiply to $6$. What two numbers multiply to
$6$? The factors of $6$ could be $1$ and $6$, or $2$ and $3$. How do you know
which pair to use?

Consider the *middle term.* It came from adding the outer and inner terms. So
the numbers that must have a product of $6$ will need a sum of $5$. We'll test
both possibilities in the table below.

| Factors of $6$ | Sum of factors |
| :---: | :---: |
| $1, 6$ | $1+6=7$ |
| $2, 3$ | $2+3=5$ |

We see that $2$ and $3$ are the numbers that multiply to $6$ and add to $5$. So
we have the factors of $x^2+5x+6$. They are $(x+2)(x+3)$.

$$
\begin{array}{rcl}
x^2 + 5x + 6 & & \text{product} \\
(x+2)(x+3) & & \text{factors}
\end{array}
$$

You should check this by multiplying.

Looking back, we started with $x^2+5x+6$, which is of the form $x^2+bx+c$, where
$b=5$ and $c=6$. We factored it into two binomials of the form $(x+m)$ and
$(x+n)$. To get the correct factors, we found two numbers $m$ and $n$ whose
product is $c$ and sum is $b$.

**Example.** Factor: $x^2+7x+12$.

$$
\begin{array}{lrcl}
\text{Write the factors as two binomials with first terms } x. & & & (x\ \ \ )(x\ \ \ ) \\[4pt]
\text{Find two numbers } m \text{ and } n \text{ that multiply to } 12 \text{ and add to } 7. & & & \\[4pt]
\text{Use } 3 \text{ and } 4 \text{ as the last terms.} & & & (x+3)(x+4)
\end{array}
$$

Find two numbers that multiply to $12$ and add to $7$:

| Factors of $12$ | Sum of factors |
| :---: | :---: |
| $1, 12$ | $1+12=13$ |
| $2, 6$ | $2+6=8$ |
| $3, 4$ | $3+4=7$ |

Check by multiplying the factors:

$$
\begin{array}{rcl}
(x+3)(x+4) & & \\
x^2 + 4x + 3x + 12 & & \\
x^2 + 7x + 12 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $x^2 + 6x + 8$."
  answer="(x+2)(x+4)"
  answerDisplay="$(x+2)(x+4)$"
  hint="Find two numbers that multiply to $8$ and add to $6$."
>}}

{{< fillin
  question="Factor: $y^2 + 8y + 15$."
  answer="(y+3)(y+5)"
  answerDisplay="$(y+3)(y+5)$"
  hint="Find two numbers that multiply to $15$ and add to $8$."
>}}

{{< callout type="info" >}}
  **Factor trinomials of the form $x^2+bx+c$.**

  1. Write the factors as two binomials with first terms $x$: $(x\ \ )(x\ \ )$.
  2. Find two numbers $m$ and $n$ that
     - multiply to $c$, $m \cdot n = c$
     - add to $b$, $m + n = b$.
  3. Use $m$ and $n$ as the last terms of the factors: $(x+m)(x+n)$.
  4. Check by multiplying the factors.
{{< /callout >}}

**Example.** Factor: $u^2+11u+24$.

Notice that the variable is $u$, so the factors will have first terms $u$. Find
two numbers that multiply to $24$ and add to $11$:

| Factors of $24$ | Sum of factors |
| :---: | :---: |
| $1, 24$ | $1+24=25$ |
| $2, 12$ | $2+12=14$ |
| $3, 8$ | $3+8=11$ |
| $4, 6$ | $4+6=10$ |

Use $3$ and $8$ as the last terms of the binomials: $(u+3)(u+8)$. Check by
multiplying:

$$
\begin{array}{rcl}
(u+3)(u+8) & & \\
u^2 + 8u + 3u + 24 & & \\
u^2 + 11u + 24 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $q^2 + 10q + 24$."
  answer="(q+4)(q+6)"
  answerDisplay="$(q+4)(q+6)$"
  hint="Find two numbers that multiply to $24$ and add to $10$."
>}}

{{< fillin
  question="Factor: $t^2 + 14t + 24$."
  answer="(t+2)(t+12)"
  answerDisplay="$(t+2)(t+12)$"
  hint="Find two numbers that multiply to $24$ and add to $14$."
>}}

**Example.** Factor: $y^2+17y+60$.

Write the factors as two binomials with first terms $y$, then find two numbers
that multiply to $60$ and add to $17$:

| Factors of $60$ | Sum of factors |
| :---: | :---: |
| $1, 60$ | $1+60=61$ |
| $2, 30$ | $2+30=32$ |
| $3, 20$ | $3+20=23$ |
| $4, 15$ | $4+15=19$ |
| $5, 12$ | $5+12=17$ |
| $6, 10$ | $6+10=16$ |

Use $5$ and $12$ as the last terms: $(y+5)(y+12)$. Check by multiplying:

$$
\begin{array}{rcl}
(y+5)(y+12) & & \\
y^2 + 12y + 5y + 60 & & \\
y^2 + 17y + 60 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $x^2 + 19x + 60$."
  answer="(x+4)(x+15)"
  answerDisplay="$(x+4)(x+15)$"
  hint="Find two numbers that multiply to $60$ and add to $19$."
>}}

{{< fillin
  question="Factor: $v^2 + 23v + 60$."
  answer="(v+3)(v+20)"
  answerDisplay="$(v+3)(v+20)$"
  hint="Find two numbers that multiply to $60$ and add to $23$."
>}}

### Factor trinomials with $b$ negative, $c$ positive

In the examples so far, all terms in the trinomial were positive. What happens
when there are negative terms? Well, it depends which term is negative. Let's
look first at trinomials with only the middle term negative.

Remember: to get a negative sum and a positive product, the numbers must both
be negative.

**Example.** Factor: $t^2-11t+28$.

With the positive last term, $28$, and the negative middle term, $-11t$, we
need two negative factors. Find two numbers that multiply to $28$ and add to
$-11$:

| Factors of $28$ | Sum of factors |
| :---: | :---: |
| $-1, -28$ | $-1+(-28)=-29$ |
| $-2, -14$ | $-2+(-14)=-16$ |
| $-4, -7$ | $-4+(-7)=-11$ |

Use $-4$ and $-7$ as the last terms of the binomials: $(t-4)(t-7)$. Check by
multiplying:

$$
\begin{array}{rcl}
(t-4)(t-7) & & \\
t^2 - 7t - 4t + 28 & & \\
t^2 - 11t + 28 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $u^2 - 9u + 18$."
  answer="(u-3)(u-6)"
  answerDisplay="$(u-3)(u-6)$"
  hint="The last term is positive and the middle term is negative, so both numbers are negative. They multiply to $18$ and add to $-9$."
>}}

{{< fillin
  question="Factor: $y^2 - 16y + 63$."
  answer="(y-7)(y-9)"
  answerDisplay="$(y-7)(y-9)$"
  hint="Both numbers are negative: they multiply to $63$ and add to $-16$."
>}}

### Factor trinomials with $c$ negative

Now, what if the last term in the trinomial is negative? Think about FOIL. The
last term is the product of the last terms in the two binomials. A negative
product results from multiplying two numbers with opposite signs. You have to
be very careful to choose factors to make sure you get the correct sign for the
middle term, too.

Remember: to get a negative product, the numbers must have different signs.

**Example.** Factor: $z^2+4z-5$.

To get a negative last term, multiply one positive and one negative. We need
factors of $-5$ that add to positive $4$:

| Factors of $-5$ | Sum of factors |
| :---: | :---: |
| $1, -5$ | $1+(-5)=-4$ |
| $-1, 5$ | $-1+5=4$ |

Notice we listed both $1, -5$ and $-1, 5$ to make sure we got the sign of the
middle term correct. Use $-1$ and $5$ as the last terms: $(z-1)(z+5)$. Check by
multiplying:

$$
\begin{array}{rcl}
(z-1)(z+5) & & \\
z^2 + 5z - 1z - 5 & & \\
z^2 + 4z - 5 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $h^2 + 4h - 12$."
  answer="(h-2)(h+6)"
  answerDisplay="$(h-2)(h+6)$"
  hint="The last term is negative, so the two numbers have different signs. They multiply to $-12$ and add to $4$."
>}}

{{< fillin
  question="Factor: $k^2 + k - 20$."
  answer="(k-4)(k+5)"
  answerDisplay="$(k-4)(k+5)$"
  hint="The two numbers have different signs; they multiply to $-20$ and add to $1$."
>}}

Let's make a minor change to the last trinomial and see what effect it has on
the factors.

**Example.** Factor: $z^2-4z-5$.

This time, we need factors of $-5$ that add to $-4$:

| Factors of $-5$ | Sum of factors |
| :---: | :---: |
| $1, -5$ | $1+(-5)=-4$ |
| $-1, 5$ | $-1+5=4$ |

Use $1$ and $-5$ as the last terms of the binomials: $(z+1)(z-5)$. Check by
multiplying:

$$
\begin{array}{rcl}
(z+1)(z-5) & & \\
z^2 - 5z + 1z - 5 & & \\
z^2 - 4z - 5 & & \checkmark
\end{array}
$$

Notice that the factors of $z^2-4z-5$ are very similar to the factors of
$z^2+4z-5$. It is very important to make sure you choose the factor pair that
results in the correct sign of the middle term.

{{< fillin
  question="Factor: $x^2 - 4x - 12$."
  answer="(x+2)(x-6)"
  answerDisplay="$(x+2)(x-6)$"
  hint="The two numbers have different signs; they multiply to $-12$ and add to $-4$."
>}}

{{< fillin
  question="Factor: $y^2 - y - 20$."
  answer="(y+4)(y-5)"
  answerDisplay="$(y+4)(y-5)$"
  hint="The two numbers have different signs; they multiply to $-20$ and add to $-1$."
>}}

**Example.** Factor: $q^2-2q-15$.

The factors will be two binomials with first terms $q$. You can use $3, -5$ as
the last terms of the binomials, giving $(q+3)(q-5)$.

| Factors of $-15$ | Sum of factors |
| :---: | :---: |
| $1, -15$ | $1+(-15)=-14$ |
| $-1, 15$ | $-1+15=14$ |
| $3, -5$ | $3+(-5)=-2$ |
| $-3, 5$ | $-3+5=2$ |

Check by multiplying:

$$
\begin{array}{rcl}
(q+3)(q-5) & & \\
q^2 - 5q + 3q - 15 & & \\
q^2 - 2q - 15 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $r^2 - 3r - 40$."
  answer="(r+5)(r-8)"
  answerDisplay="$(r+5)(r-8)$"
  hint="The two numbers have different signs; they multiply to $-40$ and add to $-3$."
>}}

{{< fillin
  question="Factor: $s^2 - 3s - 10$."
  answer="(s+2)(s-5)"
  answerDisplay="$(s+2)(s-5)$"
  hint="The two numbers have different signs; they multiply to $-10$ and add to $-3$."
>}}

### When a trinomial is prime

Some trinomials are prime. The only way to be certain a trinomial is prime is
to list all the possibilities and show that none of them work.

**Example.** Factor: $y^2-6y+15$.

The factors will be two binomials with first terms $y$. Since the last term,
$15$, is positive and the middle term is negative, we look for two negative
factors of $15$:

| Factors of $15$ | Sum of factors |
| :---: | :---: |
| $-1, -15$ | $-1+(-15)=-16$ |
| $-3, -5$ | $-3+(-5)=-8$ |

As shown in the table, none of the factors add to $-6$; therefore, the
expression is **prime.**

{{< callout type="info" >}}
  A trinomial answer of "Prime" cannot be typed into the answer box, so the two
  drills below both factor. Reason through $m^2+4m+18$ and $n^2-10n+12$ on
  paper: list the factor pairs of the last term and confirm that none of them
  sum to the middle coefficient — both are prime.
{{< /callout >}}

### Putting it together

**Example.** Factor: $2x+x^2-48$.

First we put the terms in decreasing degree order: $x^2+2x-48$. The factors
will be two binomials with first terms $x$. Since the last term is negative, we
need factors with different signs that add to $2$:

| Factors of $-48$ | Sum of factors |
| :---: | :---: |
| $-1, 48$ | $-1+48=47$ |
| $-2, 24$ | $-2+24=22$ |
| $-3, 16$ | $-3+16=13$ |
| $-4, 12$ | $-4+12=8$ |
| $-6, 8$ | $-6+8=2$ |

Use $-6, 8$ as the last terms of the binomials: $(x-6)(x+8)$. Check by
multiplying:

$$
\begin{array}{rcl}
(x-6)(x+8) & & \\
x^2 - 6x + 8x - 48 & & \\
x^2 + 2x - 48 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $9m + m^2 + 18$. Write the trinomial in decreasing degree order first."
  answer="(m+3)(m+6)"
  answerDisplay="$(m+3)(m+6)$"
  hint="Rewrite as $m^2 + 9m + 18$, then find two numbers that multiply to $18$ and add to $9$."
>}}

{{< fillin
  question="Factor: $-7n + 12 + n^2$. Write the trinomial in decreasing degree order first."
  answer="(n-3)(n-4)"
  answerDisplay="$(n-3)(n-4)$"
  hint="Rewrite as $n^2 - 7n + 12$. Both numbers are negative: they multiply to $12$ and add to $-7$."
>}}

Let's summarize the method we just developed to factor trinomials of the form
$x^2+bx+c$.

{{< callout type="info" >}}
  **Factor trinomials.** When we factor a trinomial, we look at the signs of
  its terms first to determine the signs of the binomial factors.

  $$
  \begin{array}{c}
  x^2 + bx + c \\
  (x+m)(x+n)
  \end{array}
  $$

  When $c$ is **positive**, $m$ and $n$ have the **same** sign, which matches
  the sign of $b$:

  $$
  \begin{array}{lcl}
  b \text{ positive} & \quad & b \text{ negative} \\
  x^2 + 5x + 6 & & x^2 - 6x + 8 \\
  (x+2)(x+3) & & (x-4)(x-2)
  \end{array}
  $$

  When $c$ is **negative**, $m$ and $n$ have **opposite** signs. The sign of
  the one with the larger absolute value matches the sign of $b$:

  $$
  \begin{array}{lcl}
  x^2 + x - 12 & \quad & x^2 - 2x - 15 \\
  (x+4)(x-3) & & (x-5)(x+3)
  \end{array}
  $$
{{< /callout >}}

## Factor Trinomials of the Form $x^2+bxy+cy^2$

Sometimes you'll need to factor trinomials of the form $x^2+bxy+cy^2$ with two
variables, such as $x^2+12xy+36y^2$. The first term, $x^2$, is the product of
the first terms of the binomial factors, $x \cdot x$. The $y^2$ in the last
term means that the second terms of the binomial factors must each contain $y$.
To get the coefficients $b$ and $c$, you use the same process summarized in the
previous objective.

**Example.** Factor: $x^2+12xy+36y^2$.

Note that the first terms are $x$ and the last terms contain $y$:
$(x\ \_\ y)(x\ \_\ y)$. Find the numbers that multiply to $36$ and add to $12$:

| Factors of $36$ | Sum of factors |
| :---: | :---: |
| $1, 36$ | $1+36=37$ |
| $2, 18$ | $2+18=20$ |
| $3, 12$ | $3+12=15$ |
| $4, 9$ | $4+9=13$ |
| $6, 6$ | $6+6=12$ |

Use $6$ and $6$ as the coefficients of the last terms: $(x+6y)(x+6y)$. Check by
multiplying:

$$
\begin{array}{rcl}
(x+6y)(x+6y) & & \\
x^2 + 6xy + 6xy + 36y^2 & & \\
x^2 + 12xy + 36y^2 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $u^2 + 11uv + 28v^2$."
  answer="(u+4v)(u+7v)"
  answerDisplay="$(u+4v)(u+7v)$"
  hint="The first terms are $u$ and the last terms contain $v$. Find two numbers that multiply to $28$ and add to $11$."
>}}

{{< fillin
  question="Factor: $x^2 + 13xy + 42y^2$."
  answer="(x+6y)(x+7y)"
  answerDisplay="$(x+6y)(x+7y)$"
  hint="Find two numbers that multiply to $42$ and add to $13$; each last term carries a $y$."
>}}

**Example.** Factor: $r^2-8rs-9s^2$.

We need $r$ in the first term of each binomial and $s$ in the second term. The
last term of the trinomial is negative, so the factors must have opposite
signs. Find the numbers that multiply to $-9$ and add to $-8$:

| Factors of $-9$ | Sum of factors |
| :---: | :---: |
| $1, -9$ | $1+(-9)=-8$ |
| $-1, 9$ | $-1+9=8$ |
| $3, -3$ | $3+(-3)=0$ |

Use $1, -9$ as coefficients of the last terms: $(r+s)(r-9s)$. Check by
multiplying:

$$
\begin{array}{rcl}
(r-9s)(r+s) & & \\
r^2 + rs - 9rs - 9s^2 & & \\
r^2 - 8rs - 9s^2 & & \checkmark
\end{array}
$$

{{< fillin
  question="Factor: $a^2 - 11ab + 10b^2$."
  answer="(a-b)(a-10b)"
  answerDisplay="$(a-b)(a-10b)$"
  hint="The last term is positive and the middle term is negative, so both numbers are negative. They multiply to $10$ and add to $-11$; each last term carries a $b$."
>}}

{{< fillin
  question="Factor: $m^2 - 13mn + 12n^2$."
  answer="(m-n)(m-12n)"
  answerDisplay="$(m-n)(m-12n)$"
  hint="Both numbers are negative: they multiply to $12$ and add to $-13$; each last term carries an $n$."
>}}

**Example.** Factor: $u^2-9uv-12v^2$.

We need $u$ in the first term of each binomial and $v$ in the second term. The
last term is negative, so the factors must have opposite signs. Find the
numbers that multiply to $-12$ and add to $-9$:

| Factors of $-12$ | Sum of factors |
| :---: | :---: |
| $1, -12$ | $1+(-12)=-11$ |
| $-1, 12$ | $-1+12=11$ |
| $2, -6$ | $2+(-6)=-4$ |
| $-2, 6$ | $-2+6=4$ |
| $3, -4$ | $3+(-4)=-1$ |
| $-3, 4$ | $-3+4=1$ |

Note there are no factor pairs that give us $-9$ as a sum. The trinomial is
**prime.**

{{< callout type="info" >}}
  As before, a "Prime" answer can't be typed into the box. Two source problems,
  $x^2-7xy-10y^2$ and $p^2+15pq+20q^2$, are both prime — verify on paper that no
  factor pair of the last coefficient sums to the middle one ($-10$ never sums
  to $-7$; $20$ never sums to $15$). The drill below is a closely related
  trinomial that *does* factor.
{{< /callout >}}

{{< fillin
  question="Factor: $x^2 - 3xy - 10y^2$."
  answer="(x+2y)(x-5y)"
  answerDisplay="$(x+2y)(x-5y)$"
  hint="The last term is negative, so the two numbers have different signs. They multiply to $-10$ and add to $-3$; each last term carries a $y$."
>}}

## Key terms

**factor a trinomial** — to write a trinomial $x^2+bx+c$ as a product of two
binomials $(x+m)(x+n)$, where $m$ and $n$ multiply to $c$ and add to $b$.
**prime trinomial** — a trinomial that cannot be written as a product of two
binomials with integer coefficients (no factor pair of $c$ adds to $b$).

---

<small>This section is adapted from [Elementary Algebra 2e, Section 7.2: Factor Trinomials of the Form $x^2+bx+c$](https://openstax.org/books/elementary-algebra-2e/pages/7-2-factor-trinomials-of-the-form-x-2-bx-c) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked-example step tables as typeset display arrays and the factor-pair searches as markdown tables; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback, replacing the two prime-trinomial "Try Its" (which cannot be typed into the answer box) with factorable drills plus a note to reason the prime cases through by hand.</small>
