---
title: Factor Trinomials of the Form $ax^2+bx+c$
description: >-
  A preliminary strategy for factoring polynomials completely, then factoring
  trinomials of the form ax² + bx + c by trial and error and by the "ac" method
  — adapted from OpenStax Elementary Algebra 2e, Section 7.3.
source_section: "7.3"
weight: 3
linkTitle: "Factor Trinomials of the Form ax²+bx+c"
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** recognize a preliminary
  strategy to factor polynomials completely, factor trinomials of the form
  $ax^2+bx+c$ using trial and error, and factor trinomials of the form
  $ax^2+bx+c$ using the "ac" method.
{{< /callout >}}

## Recognize a preliminary strategy for factoring

Let's summarize where we are so far with factoring polynomials. In the first
two sections of this chapter, we used three methods of factoring: factoring
the GCF, factoring by grouping, and factoring a trinomial by "undoing" FOIL.
More methods will follow as you continue in this chapter, as well as later in
your studies of algebra.

How will you know when to use each factoring method? It will help to organize
the factoring methods into a strategy that can guide you to the correct
method.

As you start to factor a polynomial, always ask first, "Is there a greatest
common factor?" If there is, factor it first.

The next thing to consider is the type of polynomial. How many terms does it
have? Is it a binomial? A trinomial? Or does it have more than three terms?

- If it is a trinomial where the leading coefficient is one, $x^2+bx+c$, use
  the "undo FOIL" method.
- If it has more than three terms, try the grouping method. This is the only
  method to use for polynomials of more than three terms.

Some polynomials cannot be factored. They are called "prime."

{{< callout type="info" >}}
  **Choose a strategy to factor polynomials completely.**

  1. Is there a greatest common factor? Factor it out.
  2. Is the polynomial a binomial, trinomial, or are there more than three
     terms?
     - If it is a binomial, right now we have no method to factor it.
     - If it is a trinomial of the form $x^2+bx+c$: Undo FOIL,
       $(x\ \ )(x\ \ )$.
     - If it has more than three terms: Use the grouping method.
  3. Check by multiplying the factors.
{{< /callout >}}

Use the preliminary strategy to completely factor a polynomial. A polynomial
is factored completely if, other than monomials, all of its factors are
prime.

**Example.** Identify the best method to use to factor each polynomial:
(a) $6y^2-72$, (b) $r^2-10r-24$, (c) $p^2+5p+pq+5q$.

For (a), we first ask if there is a greatest common factor. Yes, it is $6$:

$$6y^2-72 = 6\left(y^2-12\right)$$

Inside the parentheses is a binomial, and we have no method to factor
binomials yet.

For (b), there is no common factor. It is a trinomial with leading coefficient
$1$, so we "undo" FOIL.

For (c), there is no common factor. It has more than three terms, so we factor
using grouping.

{{< multiplechoice
  question="Identify the best method to use to factor $y^2+10y+21$."
  hint="Ask first about a GCF, then count the terms and check the leading coefficient."
  answer="Trinomial with leading coefficient 1, so undo FOIL"
>}}
Factor out a GCF, then a binomial with no further method
Trinomial with leading coefficient 1, so undo FOIL
More than three terms, so factor using grouping
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the best method to use to factor $ab+a+4b+4$."
  hint="Count the terms first: how many are there?"
  answer="More than three terms, so factor using grouping"
>}}
Trinomial with leading coefficient 1, so undo FOIL
More than three terms, so factor using grouping
A binomial with no method to factor yet
{{< /multiplechoice >}}

## Factor trinomials of the form $ax^2+bx+c$ with a GCF

Now that we have organized what we've covered so far, we are ready to factor
trinomials whose leading coefficient is not $1$, trinomials of the form
$ax^2+bx+c$.

Remember to always check for a GCF first! Sometimes, after you factor the GCF,
the leading coefficient of the trinomial becomes $1$ and you can factor it by
the methods in the last section. Let's do a few examples to see how this
works. Watch out for the signs in the next two examples.

**Example.** Factor completely: $2n^2-8n-42$.

Use the preliminary strategy. The GCF is $2$, so factor it out:

$$2n^2-8n-42 = 2\left(n^2-4n-21\right)$$

Inside the parentheses is a trinomial whose leading coefficient is $1$, so
undo FOIL. We look for two numbers that multiply to $-21$ and add to $-4$:
those are $3$ and $-7$.

$$
\begin{array}{lrcl}
\text{Factor the trinomial.} & & & 2(n+3)(n-7) \\
\end{array}
$$

Check by multiplying:

$$
\begin{array}{rcl}
2(n+3)(n-7) &=& 2\left(n^2-7n+3n-21\right) \\
&=& 2\left(n^2-4n-21\right) \\
&=& 2n^2-8n-42\ \checkmark
\end{array}
$$

{{< fillin
  question="Factor completely: $4m^2-4m-8$."
  answer="4(m+1)(m-2)"
  answerDisplay="$4(m+1)(m-2)$"
  hint="Factor out the GCF of $4$ first, then undo FOIL on the trinomial $m^2-m-2$."
>}}

{{< fillin
  question="Factor completely: $5k^2-15k-50$."
  answer="5(k+2)(k-5)"
  answerDisplay="$5(k+2)(k-5)$"
  hint="Factor out the GCF of $5$ first, then undo FOIL on $k^2-3k-10$."
>}}

**Example.** Factor completely: $4y^2-36y+56$.

The GCF is $4$, so factor it out:

$$4y^2-36y+56 = 4\left(y^2-9y+14\right)$$

Inside the parentheses is a trinomial with leading coefficient $1$, so undo
FOIL. We need two numbers that multiply to $14$ and add to $-9$. Since the
last term is positive and the middle term is negative, both factors must be
negative: $-2$ and $-7$.

$$
\begin{array}{lrcl}
\text{Factor the trinomial.} & & & 4(y-2)(y-7)
\end{array}
$$

{{< fillin
  question="Factor completely: $3r^2-9r+6$."
  answer="3(r-1)(r-2)"
  answerDisplay="$3(r-1)(r-2)$"
  hint="Factor out the GCF of $3$, then find two negative numbers that multiply to $2$ and add to $-3$."
>}}

{{< fillin
  question="Factor completely: $2t^2-10t+12$."
  answer="2(t-2)(t-3)"
  answerDisplay="$2(t-2)(t-3)$"
  hint="Factor out the GCF of $2$, then find two negative numbers that multiply to $6$ and add to $-5$."
>}}

In the next example the GCF will include a variable.

**Example.** Factor completely: $4u^3+16u^2-20u$.

The GCF is $4u$, so factor it out:

$$4u^3+16u^2-20u = 4u\left(u^2+4u-5\right)$$

Inside the parentheses is a trinomial with leading coefficient $1$, so undo
FOIL. We need two numbers that multiply to $-5$ and add to $4$: those are $-1$
and $5$.

$$
\begin{array}{lrcl}
\text{Factor the trinomial.} & & & 4u(u-1)(u+5)
\end{array}
$$

{{< fillin
  question="Factor completely: $5x^3+15x^2-20x$."
  answer="5x(x-1)(x+4)"
  answerDisplay="$5x(x-1)(x+4)$"
  hint="Factor out the GCF of $5x$, then undo FOIL on $x^2+3x-4$."
>}}

{{< fillin
  question="Factor completely: $6y^3+18y^2-60y$."
  answer="6y(y-2)(y+5)"
  answerDisplay="$6y(y-2)(y+5)$"
  hint="Factor out the GCF of $6y$, then undo FOIL on $y^2+3y-10$."
>}}

## Factor trinomials using trial and error

What happens when the leading coefficient is not $1$ and there is no GCF?
There are several methods that can be used to factor these trinomials. First
we will use the **trial and error** method.

Let's factor the trinomial $3x^2+5x+2$. From our earlier work we expect this
will factor into two binomials:

$$3x^2+5x+2 = (\ \ )(\ \ )$$

We know the first terms of the binomial factors will multiply to give us
$3x^2$. The only factors of $3x^2$ are $1x,\ 3x$. We can place them in the
binomials as $(x\ \ )(3x\ \ )$.

We know the last terms of the binomials will multiply to $2$. Since this
trinomial has all positive terms, we only need to consider positive factors.
The only factors of $2$ are $1$ and $2$, but it will make a difference whether
we write $1,\ 2$ or $2,\ 1$. So we consider both cases:

$$(x+1)(3x+2) \qquad\text{or}\qquad (x+2)(3x+1)$$

To decide which is correct, we multiply the inner and outer terms and add
them. Since the middle term of the trinomial is $5x$, the factors in the first
case work: the outer term $2x$ plus the inner term $3x$ gives $5x$. Let's FOIL
to check:

$$
\begin{array}{rcl}
(x+1)(3x+2) &=& 3x^2+2x+3x+2 \\
&=& 3x^2+5x+2\ \checkmark
\end{array}
$$

Our result is $3x^2+5x+2 = (x+1)(3x+2)$.

**Example.** Factor completely using trial and error: $3y^2+22y+7$.

The trinomial is already in descending order. The only factor pair of the
first term $3y^2$ is $1y,\ 3y$, so we put them in the binomials:
$(y\ \ )(3y\ \ )$. The only factor pair of the last term $7$ is $1,\ 7$. We
test the possible combinations until the correct product is found:

| Possible factors | Product |
| :--- | :--- |
| $(y+1)(3y+7)$ | $3y^2+10y+7$ |
| $(y+7)(3y+1)$ | $3y^2+22y+7$ |

The correct factors are those whose product is the original trinomial:

$$3y^2+22y+7 = (y+7)(3y+1)$$

{{< callout type="info" >}}
  **Factor trinomials of the form $ax^2+bx+c$ using trial and error.**

  1. Write the trinomial in descending order of degrees.
  2. Find all the factor pairs of the first term.
  3. Find all the factor pairs of the third term.
  4. Test all the possible combinations of the factors until the correct
     product is found.
  5. Check by multiplying.
{{< /callout >}}

{{< fillin
  question="Factor completely: $2a^2+5a+3$."
  answer="(a+1)(2a+3)"
  answerDisplay="$(a+1)(2a+3)$"
  hint="The first term factors as $a,\ 2a$ and the last term $3$ factors as $1,\ 3$. Test the combinations until the middle term is $5a$."
>}}

{{< fillin
  question="Factor completely: $4b^2+5b+1$."
  answer="(b+1)(4b+1)"
  answerDisplay="$(b+1)(4b+1)$"
  hint="The first term factors as $b,\ 4b$ and the last term $1$ factors as $1,\ 1$. Test the combinations until the middle term is $5b$."
>}}

When the middle term is negative and the last term is positive, the signs in
the binomials must both be negative.

**Example.** Factor completely using trial and error: $6b^2-13b+5$.

The trinomial is already in descending order. The first term $6b^2$ has factor
pairs $1b,\ 6b$ and $2b,\ 3b$. Since the last term $5$ is positive, its
factors must both be positive or both be negative; the coefficient of the
middle term is negative, so we use the negative factors of $5$, namely
$-1,\ -5$. Consider all the combinations:

| Possible factors | Product |
| :--- | :--- |
| $(b-1)(6b-5)$ | $6b^2-11b+5$ |
| $(b-5)(6b-1)$ | $6b^2-31b+5$ |
| $(2b-1)(3b-5)$ | $6b^2-13b+5$ |
| $(2b-5)(3b-1)$ | $6b^2-17b+5$ |

The correct factors are those whose product is the original trinomial:

$$6b^2-13b+5 = (2b-1)(3b-5)$$

{{< fillin
  question="Factor completely: $8x^2-14x+3$."
  answer="(2x-3)(4x-1)"
  answerDisplay="$(2x-3)(4x-1)$"
  hint="The middle term is negative and the last term is positive, so both binomials use minus signs."
>}}

{{< fillin
  question="Factor completely: $10y^2-37y+7$."
  answer="(2y-7)(5y-1)"
  answerDisplay="$(2y-7)(5y-1)$"
  hint="Both binomial signs are negative. Try the factor pair $2y,\ 5y$ for the first term."
>}}

When we factor an expression, we always look for a greatest common factor
first. If the expression does not have a greatest common factor, there cannot
be one in its factors either. This may help us eliminate some of the possible
factor combinations.

**Example.** Factor completely using trial and error: $14x^2-47x-7$.

The trinomial is already in descending order. The first term $14x^2$ has
factor pairs $1x,\ 14x$ and $2x,\ 7x$. Since the last term $-7$ is negative,
one factor must be positive and one negative: $1,\ -7$ or $-1,\ 7$ (and their
reverse orders). Because the original trinomial has no common factor, neither
binomial factor may contain a common factor — that rules out several
combinations. The one whose product is the original trinomial is:

$$14x^2-47x-7 = (2x-7)(7x+1)$$

{{< fillin
  question="Factor completely: $8a^2-3a-5$."
  answer="(a-1)(8a+5)"
  answerDisplay="$(a-1)(8a+5)$"
  hint="The last term is negative, so one binomial has a plus sign and the other a minus sign. Try $a,\ 8a$ for the first term."
>}}

{{< fillin
  question="Factor completely: $6b^2-b-15$."
  answer="(2b+3)(3b-5)"
  answerDisplay="$(2b+3)(3b-5)$"
  hint="The last term is negative, so the binomials take opposite signs. Try the first-term pair $2b,\ 3b$."
>}}

**Example.** Factor completely using trial and error: $18n^2-37n+15$.

The first term $18n^2$ has factor pairs $1n,\ 18n$; $2n,\ 9n$; and $3n,\ 6n$.
The last term $15$ is positive and the middle term is negative, so we use the
negative factors of $15$. Testing the combinations, the one whose product is
the original trinomial is:

$$18n^2-37n+15 = (2n-3)(9n-5)$$

{{< fillin
  question="Factor completely: $18x^2-3x-10$."
  answer="(3x+2)(6x-5)"
  answerDisplay="$(3x+2)(6x-5)$"
  hint="The last term is negative, so the binomials take opposite signs. Try the first-term pair $3x,\ 6x$."
>}}

{{< fillin
  question="Factor completely: $30y^2-53y-21$."
  answer="(3y+1)(10y-21)"
  answerDisplay="$(3y+1)(10y-21)$"
  hint="The last term is negative, so the binomials take opposite signs. Try the first-term pair $3y,\ 10y$."
>}}

Don't forget to look for a GCF first.

**Example.** Factor completely using trial and error: $10y^4+55y^3+60y^2$.

Notice the greatest common factor, and factor it first:

$$10y^4+55y^3+60y^2 = 5y^2\left(2y^2+11y+12\right)$$

Now factor the trinomial $2y^2+11y+12$ by trial and error. The correct factors
are those whose product is the trinomial; remember to include the factor
$5y^2$:

$$10y^4+55y^3+60y^2 = 5y^2(y+4)(2y+3)$$

{{< fillin
  question="Factor completely: $15n^3-85n^2+100n$."
  answer="5n(n-4)(3n-5)"
  answerDisplay="$5n(n-4)(3n-5)$"
  hint="Factor out the GCF of $5n$ first, then factor $3n^2-17n+20$ by trial and error."
>}}

{{< fillin
  question="Factor completely: $56q^3+320q^2-96q$."
  answer="8q(q+6)(7q-2)"
  answerDisplay="$8q(q+6)(7q-2)$"
  hint="Factor out the GCF of $8q$ first, then factor $7q^2+40q-12$ by trial and error."
>}}

## Factor trinomials using the "ac" method

Another way to factor trinomials of the form $ax^2+bx+c$ is the **"ac"
method**. (The "ac" method is sometimes called the grouping method.) The "ac"
method is actually an extension of the methods you used in the last section to
factor trinomials with leading coefficient one. This method is very
structured (that is, step-by-step), and it always works!

**Example.** Factor using the "ac" method: $6x^2+7x+2$.

There is no greatest common factor. Find the product $ac$:

$$a \cdot c = 6 \cdot 2 = 12$$

Find two numbers $m$ and $n$ that multiply to $ac=12$ and add to $b=7$. Both
factors must be positive: $3$ and $4$, since $3 \cdot 4 = 12$ and $3+4=7$.

Split the middle term $7x$ as $3x+4x$:

$$6x^2+7x+2 = 6x^2+3x+4x+2$$

Factor by grouping:

$$
\begin{array}{rcl}
6x^2+3x+4x+2 &=& 3x(2x+1)+2(2x+1) \\
&=& (2x+1)(3x+2)
\end{array}
$$

Check by multiplying:

$$
\begin{array}{rcl}
(2x+1)(3x+2) &=& 6x^2+4x+3x+2 \\
&=& 6x^2+7x+2\ \checkmark
\end{array}
$$

{{< callout type="info" >}}
  **Factor trinomials of the form $ax^2+bx+c$ using the "ac" method.**

  1. Factor any GCF.
  2. Find the product $ac$.
  3. Find two numbers $m$ and $n$ that: multiply to $ac$ ($m \cdot n = a
     \cdot c$) and add to $b$ ($m + n = b$).
  4. Split the middle term using $m$ and $n$:
     $ax^2+bx+c = ax^2+mx+nx+c$.
  5. Factor by grouping.
  6. Check by multiplying the factors.
{{< /callout >}}

{{< fillin
  question="Factor completely using the ac method: $6x^2+13x+2$."
  answer="(x+2)(6x+1)"
  answerDisplay="$(x+2)(6x+1)$"
  hint="Here $ac=12$. Find two numbers that multiply to $12$ and add to $13$, then split the middle term and group."
>}}

{{< fillin
  question="Factor completely using the ac method: $4y^2+8y+3$."
  answer="(2y+1)(2y+3)"
  answerDisplay="$(2y+1)(2y+3)$"
  hint="Here $ac=12$. Find two numbers that multiply to $12$ and add to $8$, then split the middle term and group."
>}}

When the third term of the trinomial is negative, the factors of the third
term will have opposite signs.

**Example.** Factor using the "ac" method: $8u^2-17u-21$.

There is no greatest common factor. Find the product $ac$:

$$a \cdot c = 8(-21) = -168$$

Find two numbers that multiply to $-168$ and add to $-17$. The larger factor
must be negative: $7$ and $-24$, since $7(-24)=-168$ and $7+(-24)=-17$.

Split the middle term $-17u$ as $7u-24u$:

$$8u^2-17u-21 = 8u^2+7u-24u-21$$

Factor by grouping:

$$
\begin{array}{rcl}
8u^2+7u-24u-21 &=& u(8u+7)-3(8u+7) \\
&=& (8u+7)(u-3)
\end{array}
$$

{{< fillin
  question="Factor completely using the ac method: $20h^2+13h-15$."
  answer="(4h+5)(5h-3)"
  answerDisplay="$(4h+5)(5h-3)$"
  hint="Here $ac=-300$. Find two numbers that multiply to $-300$ and add to $13$, then split the middle term and group."
>}}

{{< fillin
  question="Factor completely using the ac method: $6g^2+19g-20$."
  answer="(g+4)(6g-5)"
  answerDisplay="$(g+4)(6g-5)$"
  hint="Here $ac=-120$. Find two numbers that multiply to $-120$ and add to $19$, then split the middle term and group."
>}}

**Example.** Factor using the "ac" method: $2x^2+6x+5$.

There is no greatest common factor. Find the product $ac$:

$$a \cdot c = 2(5) = 10$$

We need two numbers that multiply to $10$ and add to $6$:

| Factors of $10$ | Sum of factors |
| :--- | :--- |
| $1,\ 10$ | $1+10 = 11$ |
| $2,\ 5$ | $2+5 = 7$ |

There are no factors that multiply to $10$ and add to $6$. The polynomial is
**prime** — it cannot be factored.

{{< multiplechoice
  question="Factor completely: $10t^2+19t-15$."
  hint="Here $ac=-150$. Are there two numbers that multiply to $-150$ and add to $19$? If so, it factors; if not, it is prime."
  answer="$(2t+5)(5t-3)$"
>}}
$(2t+5)(5t-3)$
$(5t-3)(2t+5)$ is the only form; it is prime
It is prime
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $3u^2+8u+5$ factorable, and if so into what?"
  hint="Here $ac=15$. Look for two numbers that multiply to $15$ and add to $8$."
  answer="$(u+1)(3u+5)$"
>}}
$(u+1)(3u+5)$
$(3u+1)(u+5)$
It is prime
{{< /multiplechoice >}}

Don't forget to look for a common factor!

**Example.** Factor completely: $10y^2-55y+70$.

The GCF is $5$. Factor it out, being careful to keep the factor of $5$ all the
way through the solution:

$$10y^2-55y+70 = 5\left(2y^2-11y+14\right)$$

The trinomial inside the parentheses has a leading coefficient that is not
$1$. Factor it (by trial and error or the "ac" method) to get:

$$10y^2-55y+70 = 5(y-2)(2y-7)$$

{{< fillin
  question="Factor completely: $16x^2-32x+12$."
  answer="4(2x-3)(2x-1)"
  answerDisplay="$4(2x-3)(2x-1)$"
  hint="Factor out the GCF of $4$ first, then factor $4x^2-8x+3$."
>}}

{{< fillin
  question="Factor completely: $18w^2-39w+18$."
  answer="3(3w-2)(2w-3)"
  answerDisplay="$3(3w-2)(2w-3)$"
  hint="Factor out the GCF of $3$ first, then factor $6w^2-13w+6$."
>}}

## Key terms

**trial and error** — a method of factoring $ax^2+bx+c$ by listing the factor
pairs of the first and last terms, then testing the possible binomial
combinations until the product matches the trinomial. **"ac" method** — a
structured method of factoring $ax^2+bx+c$ by finding two numbers that
multiply to $ac$ and add to $b$, splitting the middle term with them, and
factoring by grouping. **prime polynomial** — a polynomial that cannot be
factored (other than monomial factors).

---

<small>This section is adapted from [Elementary Algebra 2e, Section 7.3: Factor Trinomials of the Form ax²+bx+c](https://openstax.org/books/elementary-algebra-2e/pages/7-3-factor-trinomials-of-the-form-ax-2-bx-c) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked-example step tables as prose with typeset display arrays and the trial-and-error "possible factors" work as markdown tables; described the factoring-strategy flowchart in prose; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
