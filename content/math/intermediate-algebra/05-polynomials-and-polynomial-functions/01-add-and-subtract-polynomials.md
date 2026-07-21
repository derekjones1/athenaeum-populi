---
title: Add and Subtract Polynomials
description: >-
  Determining the degree of polynomials, adding and subtracting polynomials,
  evaluating a polynomial function for a given value, and adding and
  subtracting polynomial functions — adapted from OpenStax Intermediate
  Algebra 2e, Section 5.1.
source_section: "5.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** determine the degree
  of polynomials, add and subtract polynomials, evaluate a polynomial
  function for a given value, and add and subtract polynomial functions.
{{< /callout >}}

## Determine the degree of polynomials

We have learned that a *term* is a constant or the product of a constant and
one or more variables. A **monomial** is an algebraic expression with one
term. When it is of the form $ax^m$, where $a$ is a constant and $m$ is a
whole number, it is called a monomial in one variable. Some examples of
monomials in one variable are $2x$, $5y$, $17z$, and $4y^2$. Monomials can
also have more than one variable, such as $5abc$ and $-4a^2b^3c^2$.

{{< callout type="info" >}}
  **Monomial.** A monomial is an algebraic expression with one term. A
  monomial in one variable is a term of the form $ax^m$, where $a$ is a
  constant and $m$ is a whole number.
{{< /callout >}}

A monomial, or two or more monomials combined by addition or subtraction, is
a **polynomial**. Some polynomials have special names, based on the number of
terms. A monomial is a polynomial with exactly one term. A **binomial** has
exactly two terms, and a **trinomial** has exactly three terms. There are no
special names for polynomials with more than three terms.

{{< callout type="info" >}}
  **Polynomials.** polynomial — a monomial, or two or more algebraic terms
  combined by addition or subtraction, is a polynomial. monomial — a
  polynomial with exactly one term is called a monomial. binomial — a
  polynomial with exactly two terms is called a binomial. trinomial — a
  polynomial with exactly three terms is called a trinomial.
{{< /callout >}}

Here are some examples of polynomials.

| | | | | |
| :--- | :---: | :---: | :---: | :---: |
| Polynomial | $y+1$ | $4a^2-7ab+2b^2$ | $4x^4+x^3+8x^2-9x+1$ | |
| Monomial | $14$ | $8y^2$ | $-9x^3y^5$ | $-13a^3b^2c$ |
| Binomial | $a+7b$ | $4x^2-y^2$ | $y^2-16$ | $3p^3q-9p^2q$ |
| Trinomial | $x^2-7x+12$ | $9m^2+2mn-8n^2$ | $6k^4-k^3+8k$ | $z^4+3z^2-1$ |

Notice that every monomial, binomial, and trinomial is also a polynomial.
They are just special members of the "family" of polynomials, and so they
have special names. We use the words *monomial*, *binomial*, and *trinomial*
when referring to these special polynomials, and just call all the rest
*polynomials*.

The **degree of a polynomial** and the degree of its terms are determined by
the exponents of the variable. A monomial that has no variable, just a
constant, is a special case. The **degree of a constant** is $0$.

{{< callout type="info" >}}
  **Degree of a polynomial.** The degree of a term is the sum of the
  exponents of its variables. The degree of a constant is $0$. The degree of
  a polynomial is the highest degree of all its terms.
{{< /callout >}}

Let's start by looking at a monomial. The monomial $8ab^2$ has two variables,
$a$ and $b$. To find the degree, we need to find the sum of the exponents.
The variable $a$ doesn't have an exponent written, but remember that means
the exponent is $1$. The exponent of $b$ is $2$. The sum of the exponents,
$1+2$, is $3$, so the degree is $3$.

Here are some additional examples.

| | | | | |
| :--- | :---: | :---: | :---: | :---: |
| **Monomials** | $14$ | $8ab^2$ | $-9x^3y^5$ | $-13a$ |
| Degree | $0$ | $3$ | $8$ | $1$ |
| **Binomial** | $h+7$ | $7b^2-3b$ | $x^3y^2-25$ | $4n^3-8n^2$ |
| Degree of each term | $1,0$ | $2,1$ | $4,0$ | $3,2$ |
| Degree of polynomial | $1$ | $2$ | $4$ | $3$ |
| **Trinomial** | $x^2-12x+27$ | $9a^2+6ab+b^2$ | $6m^4-m^3n^2+8mn^5$ | $z^4+3z^2-1$ |
| Degree of each term | $2,1,0$ | $2,2,2$ | $4,5,6$ | $4,2,0$ |
| Degree of polynomial | $2$ | $2$ | $6$ | $4$ |
| **Polynomial** | $y-1$ | $3y^2-2y-5$ | $4x^4+x^3+8x^2-9x+1$ | |
| Degree of each term | $1,0$ | $2,1,0$ | $4,3,2,1,0$ | |
| Degree of polynomial | $1$ | $2$ | $4$ | |

Working with polynomials is easier when you list the terms in descending
order of degrees. When a polynomial is written this way, it is said to be in
**standard form of a polynomial**. Get in the habit of writing the term with
the highest degree first.

**Example.** Determine whether each polynomial is a monomial, binomial,
trinomial, or other polynomial. Then find the degree of each polynomial:
(a) $7y^2-5y+3$ (b) $-2a^4b^2$ (c) $3x^5-4x^3-6x^2+x-8$ (d) $2y-8xy^3$
(e) $15$.

| | Polynomial | Number of terms | Type | Degree of terms | Degree of polynomial |
| :---: | :---: | :---: | :---: | :---: | :---: |
| (a) | $7y^2-5y+3$ | $3$ | Trinomial | $2,1,0$ | $2$ |
| (b) | $-2a^4b^2$ | $1$ | Monomial | $6$ | $6$ |
| (c) | $3x^5-4x^3-6x^2+x-8$ | $5$ | Polynomial | $5,3,2,1,0$ | $5$ |
| (d) | $2y-8xy^3$ | $2$ | Binomial | $1,4$ | $4$ |
| (e) | $15$ | $1$ | Monomial | $0$ | $0$ |

{{< fillin
  question="Determine whether $8y^3-7y^2-y-3$ is a monomial, binomial, trinomial, or other polynomial, then find its degree. Enter just the degree as a number."
  answer="3"
  hint="It has four terms, so it's a polynomial (no special name). The degree is the highest exponent among its terms."
>}}

{{< fillin
  question="Determine the degree of the monomial $-3x^6y^3z$. Enter just the degree as a number."
  answer="10"
  hint="The degree of a monomial in several variables is the sum of all its exponents: $6+3+1$."
>}}

## Add and subtract polynomials

We have learned how to simplify expressions by combining like terms.
Remember, like terms must have the same variables with the same exponent.
Since monomials are terms, adding and subtracting monomials is the same as
combining like terms. If the monomials are like terms, we just combine them
by adding or subtracting the coefficients.

**Example.** Add or subtract: (a) $25y^2+15y^2$ (b) $16pq^3-(-7pq^3)$.

(a)

$$
\begin{array}{lrcl}
&&& 25y^2+15y^2 \\[4pt]
\text{Combine like terms.} &&& 40y^2
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& 16pq^3-(-7pq^3) \\[4pt]
\text{Combine like terms.} &&& 23pq^3
\end{array}
$$

{{< fillin
  question="Add or subtract: $12q^2+9q^2$."
  answer="21q^2"
  answerDisplay="$21q^2$"
  hint="These are like terms — add the coefficients."
>}}

{{< fillin
  question="Add or subtract: $8mn^3-(-5mn^3)$."
  answer="13mn^3"
  answerDisplay="$13mn^3$"
  hint="Subtracting a negative is the same as adding: $8+5$."
>}}

Remember that like terms must have the same variables with the same
exponents.

**Example.** Simplify: (a) $a^2+7b^2-6a^2$ (b) $u^2v+5u^2-3v^2$.

(a)

$$
\begin{array}{lrcl}
&&& a^2+7b^2-6a^2 \\[4pt]
\text{Combine like terms.} &&& -5a^2+7b^2
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
&&& u^2v+5u^2-3v^2 \\[4pt]
\text{There are no like terms to combine.} \\[4pt]
\text{In this case, the polynomial is unchanged.} &&& u^2v+5u^2-3v^2
\end{array}
$$

{{< fillin
  question="Simplify: $8y^2+3z^2-3y^2$."
  answer="5y^2 + 3z^2"
  answerDisplay="$5y^2+3z^2$"
  hint="Only the $y^2$ terms are like terms."
>}}

We can think of adding and subtracting polynomials as just adding and
subtracting a series of monomials. Look for the like terms — those with the
same variables and the same exponent. The Commutative Property allows us to
rearrange the terms to put like terms together.

**Example.** Find the sum: $(7y^2-2y+9)+(4y^2-8y-7)$.

$$
\begin{array}{lrcl}
\text{Identify like terms.} &&& (7y^2-2y+9)+(4y^2-8y-7) \\[4pt]
\text{Rewrite without the parentheses, rearranging} \\[4pt]
\text{to get the like terms together.} &&& 7y^2+4y^2-2y-8y+9-7 \\[4pt]
\text{Combine like terms.} &&& 11y^2-10y+2
\end{array}
$$

{{< fillin
  question="Find the sum: $(7x^2-4x+5)+(x^2-7x+3)$."
  answer="8x^2 - 11x + 8"
  answerDisplay="$8x^2-11x+8$"
  hint="Group the like terms — the $x^2$ terms, the $x$ terms, and the constants — then combine each group."
>}}

Be careful with the signs as you distribute while subtracting the
polynomials in the next example.

**Example.** Find the difference: $(9w^2-7w+5)-(2w^2-4)$.

$$
\begin{array}{lrcl}
&&& (9w^2-7w+5)-(2w^2-4) \\[4pt]
\text{Distribute and identify like terms.} &&& 9w^2-7w+5-2w^2+4 \\[4pt]
\text{Rearrange the terms.} &&& 9w^2-2w^2-7w+5+4 \\[4pt]
\text{Combine like terms.} &&& 7w^2-7w+9
\end{array}
$$

To subtract $a$ from $b$, we write it as $b-a$, placing the $b$ first.

{{< fillin
  question="Find the difference: $(8x^2+3x-19)-(7x^2-14)$."
  answer="x^2 + 3x - 5"
  answerDisplay="$x^2+3x-5$"
  hint="Distribute the subtraction across the second polynomial, then combine like terms."
>}}

**Example.** Subtract $(p^2+10pq-2q^2)$ from $(p^2+q^2)$.

$$
\begin{array}{lrcl}
&&& (p^2+q^2)-(p^2+10pq-2q^2) \\[4pt]
\text{Distribute.} &&& p^2+q^2-p^2-10pq+2q^2 \\[4pt]
\text{Rearrange the terms, to put like terms together.} &&& p^2-p^2-10pq+q^2+2q^2 \\[4pt]
\text{Combine like terms.} &&& -10pq+3q^2
\end{array}
$$

{{< fillin
  question="Subtract $(a^2+5ab-6b^2)$ from $(a^2+b^2)$."
  answer="-5ab + 7b^2"
  answerDisplay="$-5ab+7b^2$"
  hint="Subtract $X$ from $Y$ means $Y-X$. Distribute the subtraction, then combine like terms."
>}}

When we add and subtract more than two polynomials, the process is the same.

**Example.** Simplify: $(a^3-a^2b)-(ab^2+b^3)+(a^2b+ab^2)$.

$$
\begin{array}{lrcl}
&&& (a^3-a^2b)-(ab^2+b^3)+(a^2b+ab^2) \\[4pt]
\text{Distribute.} &&& a^3-a^2b-ab^2-b^3+a^2b+ab^2 \\[4pt]
\text{Rewrite without the parentheses, rearranging} \\[4pt]
\text{to get the like terms together.} &&& a^3-a^2b+a^2b-ab^2+ab^2-b^3 \\[4pt]
\text{Combine like terms.} &&& a^3-b^3
\end{array}
$$

{{< fillin
  question="Simplify: $(x^3-x^2y)-(xy^2+y^3)+(x^2y+xy^2)$."
  answer="x^3 - y^3"
  answerDisplay="$x^3-y^3$"
  hint="Distribute across all the parentheses first, then group and combine like terms — most of them cancel."
>}}

## Evaluate a polynomial function for a given value

A **polynomial function** is a function defined by a polynomial. For
example, $f(x)=x^2+5x+6$ and $g(x)=3x-4$ are polynomial functions, because
$x^2+5x+6$ and $3x-4$ are polynomials.

{{< callout type="info" >}}
  **Polynomial function.** A polynomial function is a function whose range
  values are defined by a polynomial.
{{< /callout >}}

In [Graphs and Functions](/math/intermediate-algebra/03-graphs-and-functions),
where we first introduced functions, we learned that evaluating a function
means finding the value of $f(x)$ for a given value of $x$. To evaluate a
polynomial function, we substitute the given value for the variable and then
simplify using the order of operations.

**Example.** For the function $f(x)=5x^2-8x+4$, find: (a) $f(4)$
(b) $f(-2)$ (c) $f(0)$.

(a)

$$
\begin{array}{lrcl}
& f(x) &=& 5x^2-8x+4 \\[4pt]
\text{To find } f(4)\text{, substitute } 4 \text{ for } x. & f(4) &=& 5(4)^2-8(4)+4 \\[4pt]
\text{Simplify the exponents.} & f(4) &=& 5\cdot 16-8(4)+4 \\[4pt]
\text{Multiply.} & f(4) &=& 80-32+4 \\[4pt]
\text{Simplify.} & f(4) &=& 52
\end{array}
$$

(b)

$$
\begin{array}{lrcl}
& f(x) &=& 5x^2-8x+4 \\[4pt]
\text{To find } f(-2)\text{, substitute } -2 \text{ for } x. & f(-2) &=& 5(-2)^2-8(-2)+4 \\[4pt]
\text{Simplify the exponents.} & f(-2) &=& 5\cdot 4-8(-2)+4 \\[4pt]
\text{Multiply.} & f(-2) &=& 20+16+4 \\[4pt]
\text{Simplify.} & f(-2) &=& 40
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
& f(x) &=& 5x^2-8x+4 \\[4pt]
\text{To find } f(0)\text{, substitute } 0 \text{ for } x. & f(0) &=& 5(0)^2-8(0)+4 \\[4pt]
\text{Simplify the exponents.} & f(0) &=& 5\cdot 0-8(0)+4 \\[4pt]
\text{Multiply.} & f(0) &=& 0+0+4 \\[4pt]
\text{Simplify.} & f(0) &=& 4
\end{array}
$$

{{< fillin
  question="For the function $f(x)=3x^2+2x-15$, find $f(3)$."
  answer="18"
  hint="Substitute $3$ for $x$: $f(3)=3(3)^2+2(3)-15$."
>}}

{{< fillin
  question="For the function $f(x)=3x^2+2x-15$, find $f(-5)$."
  answer="50"
  hint="Substitute $-5$ for $x$: $f(-5)=3(-5)^2+2(-5)-15$."
>}}

The polynomial functions similar to the one in the next example are used in
many fields to determine the height of an object at some time after it is
projected into the air. The polynomial in the next function is used
specifically for dropping something from $250$ ft.

**Example.** The polynomial function $h(t)=-16t^2+250$ gives the height of a
ball $t$ seconds after it is dropped from a $250$-foot tall building. Find
the height after $t=2$ seconds.

$$
\begin{array}{lrcl}
& h(t) &=& -16t^2+250 \\[4pt]
\text{To find } h(2)\text{, substitute } 2 \text{ for } t. & h(2) &=& -16(2)^2+250 \\[4pt]
\text{Simplify.} & h(2) &=& -16\cdot 4+250 \\[4pt]
\text{Simplify.} & h(2) &=& -64+250 \\[4pt]
\text{Simplify.} & h(2) &=& 186
\end{array}
$$

After $2$ seconds, the height of the ball is $186$ feet.

{{< fillin
  question="The polynomial function $h(t)=-16t^2+150$ gives the height of a stone $t$ seconds after it is dropped from a 150-foot tall cliff. Find the height after $t=0$ seconds (the initial height of the object)."
  answer="150"
  hint="Substitute $0$ for $t$: only the constant term survives."
>}}

{{< fillin
  question="The polynomial function $h(t)=-16t^2+175$ gives the height of a ball $t$ seconds after it is dropped from a 175-foot tall bridge. Find the height after $t=3$ seconds."
  answer="31"
  hint="Substitute $3$ for $t$: $h(3)=-16(3)^2+175$."
>}}

## Add and subtract polynomial functions

Just as polynomials can be added and subtracted, polynomial functions can
also be added and subtracted.

{{< callout type="info" >}}
  **Addition and subtraction of polynomial functions.** For functions $f(x)$
  and $g(x)$,

  $$(f+g)(x)=f(x)+g(x)$$

  $$(f-g)(x)=f(x)-g(x)$$
{{< /callout >}}

**Example.** For functions $f(x)=3x^2-5x+7$ and $g(x)=x^2-4x-3$, find:
(a) $(f+g)(x)$ (b) $(f+g)(3)$ (c) $(f-g)(x)$ (d) $(f-g)(-2)$.

(a)

$$
\begin{array}{lrcl}
& (f+g)(x) &=& f(x)+g(x) \\[4pt]
\text{Substitute } f(x)=3x^2-5x+7 \text{ and } g(x)=x^2-4x-3. & (f+g)(x) &=& (3x^2-5x+7)+(x^2-4x-3) \\[4pt]
\text{Rewrite without the parentheses.} & (f+g)(x) &=& 3x^2-5x+7+x^2-4x-3 \\[4pt]
\text{Put like terms together.} & (f+g)(x) &=& 3x^2+x^2-5x-4x+7-3 \\[4pt]
\text{Combine like terms.} & (f+g)(x) &=& 4x^2-9x+4
\end{array}
$$

(b) In part (a) we found $(f+g)(x)$ and now are asked to find $(f+g)(3)$.

$$
\begin{array}{lrcl}
& (f+g)(x) &=& 4x^2-9x+4 \\[4pt]
\text{To find } (f+g)(3)\text{, substitute } x=3. & (f+g)(3) &=& 4(3)^2-9\cdot 3+4 \\[4pt]
& (f+g)(3) &=& 4\cdot 9-9\cdot 3+4 \\[4pt]
& (f+g)(3) &=& 36-27+4=13
\end{array}
$$

Notice that we could have found $(f+g)(3)$ by first finding the values of
$f(3)$ and $g(3)$ separately and then adding the results.

$$
\begin{array}{lrcl}
\text{Find } f(3). & f(x) &=& 3x^2-5x+7 \\[4pt]
& f(3) &=& 3(3)^2-5(3)+7 \\[4pt]
& f(3) &=& 19 \\[4pt]
\text{Find } g(3). & g(x) &=& x^2-4x-3 \\[4pt]
& g(3) &=& 3^2-4(3)-3 \\[4pt]
& g(3) &=& -6 \\[4pt]
\text{Find } (f+g)(3). & (f+g)(x) &=& f(x)+g(x) \\[4pt]
\text{Substitute } f(3)=19 \text{ and } g(3)=-6. & (f+g)(3) &=& 19+(-6) \\[4pt]
& (f+g)(3) &=& 13
\end{array}
$$

(c)

$$
\begin{array}{lrcl}
& (f-g)(x) &=& f(x)-g(x) \\[4pt]
\text{Substitute } f(x)=3x^2-5x+7 \text{ and } g(x)=x^2-4x-3. & (f-g)(x) &=& (3x^2-5x+7)-(x^2-4x-3) \\[4pt]
\text{Rewrite without the parentheses.} & (f-g)(x) &=& 3x^2-5x+7-x^2+4x+3 \\[4pt]
\text{Put like terms together.} & (f-g)(x) &=& 3x^2-x^2-5x+4x+7+3 \\[4pt]
\text{Combine like terms.} & (f-g)(x) &=& 2x^2-x+10
\end{array}
$$

(d)

$$
\begin{array}{lrcl}
& (f-g)(x) &=& 2x^2-x+10 \\[4pt]
\text{To find } (f-g)(-2)\text{, substitute } x=-2. & (f-g)(-2) &=& 2(-2)^2-(-2)+10 \\[4pt]
& (f-g)(-2) &=& 2\cdot 4-(-2)+10 \\[4pt]
& (f-g)(-2) &=& 8+2+10=20
\end{array}
$$

{{< fillin
  question="For functions $f(x)=2x^2-4x+3$ and $g(x)=x^2-2x-6$, find $(f+g)(x)$."
  answer="3x^2 - 6x - 3"
  answerDisplay="$3x^2-6x-3$"
  hint="Add the two polynomials and combine like terms."
>}}

{{< fillin
  question="For functions $f(x)=2x^2-4x+3$ and $g(x)=x^2-2x-6$, find $(f-g)(-2)$."
  answer="17"
  hint="First find $(f-g)(x)$ by distributing the subtraction and combining like terms, then substitute $x=-2$."
>}}

## Key terms

**monomial** — an algebraic expression with one term, of the form $ax^m$ in
one variable. **polynomial** — a monomial, or two or more terms combined by
addition or subtraction. **binomial** — a polynomial with exactly two terms.
**trinomial** — a polynomial with exactly three terms. **degree of a term** —
the sum of the exponents of its variables. **degree of a polynomial** — the
highest degree of all its terms. **standard form of a polynomial** — a
polynomial written with terms in descending order of degree. **polynomial
function** — a function whose range values are defined by a polynomial.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 5.1: Add and Subtract Polynomials](https://openstax.org/books/intermediate-algebra-2e/pages/5-1-add-and-subtract-polynomials) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: omitted the Be Prepared quiz, media links, and end-of-section exercises; recreated the polynomial-classification tables as markdown tables; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
