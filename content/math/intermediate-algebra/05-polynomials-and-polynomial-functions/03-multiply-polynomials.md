---
title: Multiply Polynomials
description: >-
  Multiplying monomials, a polynomial by a monomial, a binomial by a binomial
  (FOIL), a polynomial by a polynomial, special products, and polynomial
  functions — adapted from OpenStax Intermediate Algebra 2e, Section 5.3.
source_section: "5.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** multiply monomials,
  multiply a polynomial by a monomial, multiply a binomial by a binomial,
  multiply a polynomial by a polynomial, multiply special products, and
  multiply polynomial functions.
{{< /callout >}}

## Multiply monomials

We are ready to perform operations on polynomials. Since monomials are
algebraic expressions, we can use the properties of exponents to multiply
monomials.

**Example.** Multiply: (a) $\left(3x^2\right)\left(-4x^3\right)$ and
(b) $\left(\tfrac{5}{6}x^3y\right)\left(12xy^2\right)$.

For part (a):

$$
\begin{array}{lrcl}
\text{Use the Commutative Property to rearrange the terms.} & \left(3x^2\right)\left(-4x^3\right) &=& 3\cdot(-4)\cdot x^2\cdot x^3 \\[4pt]
\text{Multiply.} & &=& -12x^5
\end{array}
$$

For part (b):

$$
\begin{array}{lrcl}
\text{Use the Commutative Property to rearrange the terms.} & \left(\tfrac{5}{6}x^3y\right)\left(12xy^2\right) &=& \tfrac{5}{6}\cdot 12\cdot x^3\cdot x\cdot y\cdot y^2 \\[4pt]
\text{Multiply.} & &=& 10x^4y^3
\end{array}
$$

{{< fillin
  question="Multiply: $\left(5y^7\right)\left(-7y^4\right)$"
  answer="-35y^{11}"
  answerDisplay="$-35y^{11}$"
>}}

{{< fillin
  question="Multiply: $\left(\tfrac{2}{5}a^4b^3\right)\left(15ab^3\right)$"
  answer="6a^5b^6"
  answerDisplay="$6a^5b^6$"
>}}

## Multiply a polynomial by a monomial

Multiplying a polynomial by a monomial is really just applying the
Distributive Property.

**Example.** Multiply: (a) $-2y\left(4y^2+3y-5\right)$ and
(b) $3x^3y\left(x^2-8xy+y^2\right)$.

For part (a):

$$
\begin{array}{lrcl}
\text{Distribute.} & -2y\left(4y^2+3y-5\right) &=& -2y\cdot 4y^2+(-2y)\cdot 3y-(-2y)\cdot 5 \\[4pt]
\text{Multiply.} & &=& -8y^3-6y^2+10y
\end{array}
$$

For part (b):

$$
\begin{array}{lrcl}
\text{Distribute.} & 3x^3y\left(x^2-8xy+y^2\right) &=& 3x^3y\cdot x^2+\left(3x^3y\right)(-8xy)+\left(3x^3y\right)\cdot y^2 \\[4pt]
\text{Multiply.} & &=& 3x^5y-24x^4y^2+3x^3y^3
\end{array}
$$

{{< fillin
  question="Multiply: $-3y\left(5y^2+8y-7\right)$"
  answer="-15y^3-24y^2+21y"
  answerDisplay="$-15y^3-24y^2+21y$"
>}}

{{< fillin
  question="Multiply: $4x^2\left(2x^2-3x+5\right)$"
  answer="8x^4-12x^3+20x^2"
  answerDisplay="$8x^4-12x^3+20x^2$"
>}}

## Multiply a binomial by a binomial

Just as there are different ways to represent multiplication of numbers,
there are several methods that can be used to multiply a binomial times a
binomial. We will start by using the Distributive Property.

**Example.** Multiply $(y+5)(y+8)$.

$$
\begin{array}{lrcl}
\text{Distribute } (y+8). & (y+5)(y+8) &=& y(y+8)+5(y+8) \\[4pt]
\text{Distribute again.} & &=& y^2+8y+5y+40 \\[4pt]
\text{Combine like terms.} & &=& y^2+13y+40
\end{array}
$$

{{< fillin
  question="Multiply: $(x+8)(x+9)$"
  answer="x^2+17x+72"
  answerDisplay="$x^2+17x+72$"
>}}

{{< fillin
  question="Multiply: $(3c+4)(5c-2)$"
  answer="15c^2+14c-8"
  answerDisplay="$15c^2+14c-8$"
>}}

### The FOIL method

If you multiply binomials often enough you may notice a pattern. Notice that
the first term in the result is the product of the *first* terms in each
binomial. The second and third terms are the product of multiplying the two
*outer* terms and then the two *inner* terms. And the last term results from
multiplying the two *last* terms.

We abbreviate "First, Outer, Inner, Last" as **FOIL**. Using FOIL as another
method of multiplying binomials ensures we find all four products. For
example, multiplying $(x+3)(x+7)$:

$$
\begin{array}{lrcl}
\text{First, Outer, Inner, Last.} & (x+3)(x+7) &=& x^2+7x+3x+21 \\[4pt]
\text{Combine like terms.} & &=& x^2+10x+21
\end{array}
$$

The FOIL method only applies to multiplying two binomials, not other
polynomials!

{{< callout type="info" >}}
  **Use the FOIL method to multiply two binomials.** For $(a+b)(c+d)$:
  Step 1. Multiply the *First* terms $a\cdot c$. Step 2. Multiply the *Outer*
  terms $a\cdot d$. Step 3. Multiply the *Inner* terms $b\cdot c$. Step 4.
  Multiply the *Last* terms $b\cdot d$. Step 5. Combine like terms, when
  possible.
{{< /callout >}}

**Example.** Multiply using FOIL: (a) $(y-7)(y+4)$ and (b) $(4x+3)(2x-5)$.

For part (a):

$$
\begin{array}{lrcl}
\text{Multiply First, Outer, Inner, Last.} & (y-7)(y+4) &=& y^2+4y-7y-28 \\[4pt]
\text{Combine like terms.} & &=& y^2-3y-28
\end{array}
$$

For part (b):

$$
\begin{array}{lrcl}
\text{Multiply First, Outer, Inner, Last.} & (4x+3)(2x-5) &=& 8x^2-20x+6x-15 \\[4pt]
\text{Combine like terms.} & &=& 8x^2-14x-15
\end{array}
$$

{{< fillin
  question="Multiply using FOIL: $(x-7)(x+5)$"
  answer="x^2-2x-35"
  answerDisplay="$x^2-2x-35$"
>}}

{{< fillin
  question="Multiply using FOIL: $(3x+7)(5x-2)$"
  answer="15x^2+29x-14"
  answerDisplay="$15x^2+29x-14$"
>}}

The final products in the last example were trinomials because we could
combine the two middle terms. This is not always the case.

**Example.** Multiply: (a) $\left(n^2+4\right)(n-1)$ and (b) $(3pq+5)(6pq-11)$.

For part (a):

$$
\begin{array}{lrcl}
\text{Multiply First, Outer, Inner, Last.} & \left(n^2+4\right)(n-1) &=& n^3-n^2+4n-4 \\[4pt]
\text{Combine like terms — there are none.} & &=& n^3-n^2+4n-4
\end{array}
$$

For part (b):

$$
\begin{array}{lrcl}
\text{Multiply First, Outer, Inner, Last.} & (3pq+5)(6pq-11) &=& 18p^2q^2-33pq+30pq-55 \\[4pt]
\text{Combine like terms.} & &=& 18p^2q^2-3pq-55
\end{array}
$$

{{< fillin
  question="Multiply: $\left(x^2+6\right)(x-8)$"
  answer="x^3-8x^2+6x-48"
  answerDisplay="$x^3-8x^2+6x-48$"
>}}

{{< fillin
  question="Multiply: $(2ab+5)(4ab-4)$"
  answer="8a^2b^2+12ab-20"
  answerDisplay="$8a^2b^2+12ab-20$"
>}}

### The Vertical Method

The FOIL method is usually the quickest method for multiplying two
binomials, but it *only* works for binomials. Another method that works for
all polynomials is the **Vertical Method**. It is very much like the method
you use to multiply whole numbers, lining up partial products in columns and
adding.

**Example.** Multiply using the Vertical Method: $(3y-1)(2y-6)$.

It does not matter which binomial goes on the top. Multiply $3y-1$ by $-6$,
then multiply $3y-1$ by $2y$, and add like terms:

$$
\begin{array}{r}
3y-1 \\
\times\phantom{0}2y-6 \\
\hline
-18y+6 \\
6y^2-\phantom{0}2y\phantom{{}+6} \\
\hline
6y^2-20y+6
\end{array}
$$

Notice the partial products are the same as the terms in the FOIL method.

{{< fillin
  question="Multiply using the Vertical Method: $(5m-7)(3m-6)$"
  answer="15m^2-51m+42"
  answerDisplay="$15m^2-51m+42$"
>}}

{{< fillin
  question="Multiply using the Vertical Method: $(6b-5)(7b-3)$"
  answer="42b^2-53b+15"
  answerDisplay="$42b^2-53b+15$"
>}}

{{< callout type="info" >}}
  **Multiplying two binomials.** To multiply binomials, use the: Distributive
  Property, FOIL Method, or Vertical Method.
{{< /callout >}}

## Multiply a polynomial by a polynomial

We have multiplied monomials by monomials, monomials by polynomials, and
binomials by binomials. Now we are ready to multiply a polynomial by a
polynomial. Remember, FOIL will not work in this case, but we can use either
the Distributive Property or the Vertical Method.

**Example.** Multiply $(b+3)\left(2b^2-5b+8\right)$ using the Distributive
Property.

$$
\begin{array}{lrcl}
\text{Distribute.} & (b+3)\left(2b^2-5b+8\right) &=& b\left(2b^2-5b+8\right)+3\left(2b^2-5b+8\right) \\[4pt]
\text{Multiply.} & &=& 2b^3-5b^2+8b+6b^2-15b+24 \\[4pt]
\text{Combine like terms.} & &=& 2b^3+b^2-7b+24
\end{array}
$$

Using the Vertical Method, it is easier to put the polynomial with fewer
terms on the bottom because we get fewer partial products that way:

$$
\begin{array}{r}
2b^2-\phantom{0}5b+8 \\
\times\phantom{2b^2-{}}b+3 \\
\hline
6b^2-15b+24 \\
2b^3-\phantom{0}5b^2+\phantom{0}8b\phantom{{}+24} \\
\hline
2b^3+\phantom{0}b^2-\phantom{0}7b+24
\end{array}
$$

{{< fillin
  question="Multiply $(y-3)\left(y^2-5y+2\right)$."
  answer="y^3-8y^2+17y-6"
  answerDisplay="$y^3-8y^2+17y-6$"
>}}

{{< fillin
  question="Multiply $(x+4)\left(2x^2-3x+5\right)$."
  answer="2x^3+5x^2-7x+20"
  answerDisplay="$2x^3+5x^2-7x+20$"
>}}

{{< callout type="info" >}}
  **Multiplying a polynomial by a polynomial.** To multiply a trinomial by a
  binomial, use the: Distributive Property or Vertical Method.
{{< /callout >}}

## Multiply special products

Mathematicians like to look for patterns that will make their work easier. A
good example of this is squaring binomials. While you can always get the
product by writing the binomial twice and multiplying them, there is less
work to do if you learn to use a pattern.

Look at these results, where each squared binomial produces a trinomial:

$$
\begin{array}{l}
(x+9)^2=(x+9)(x+9)=x^2+9x+9x+81=x^2+18x+81 \\[4pt]
(y-7)^2=(y-7)(y-7)=y^2-7y-7y+49=y^2-14y+49 \\[4pt]
(2x+3)^2=(2x+3)(2x+3)=4x^2+6x+6x+9=4x^2+12x+9
\end{array}
$$

The first term is the square of the first term of the binomial, the last
term is the square of the last term, and the middle term is double the
product of the two terms. This gives the **Binomial Squares Pattern**.

{{< callout type="info" >}}
  **Binomial Squares Pattern.** If $a$ and $b$ are real numbers,
  $$(a+b)^2=a^2+2ab+b^2 \qquad (a-b)^2=a^2-2ab+b^2.$$
  To square a binomial, square the first term, square the last term, and
  double their product.
{{< /callout >}}

**Example.** Multiply: (a) $(x+5)^2$ and (b) $(2x-3y)^2$.

For part (a), using $(a+b)^2=a^2+2ab+b^2$:

$$
\begin{array}{lrcl}
\text{Use the pattern.} & (x+5)^2 &=& x^2+2\cdot x\cdot 5+5^2 \\[4pt]
\text{Simplify.} & &=& x^2+10x+25
\end{array}
$$

For part (b), using $(a-b)^2=a^2-2ab+b^2$:

$$
\begin{array}{lrcl}
\text{Use the pattern.} & (2x-3y)^2 &=& (2x)^2-2\cdot 2x\cdot 3y+(3y)^2 \\[4pt]
\text{Simplify.} & &=& 4x^2-12xy+9y^2
\end{array}
$$

{{< fillin
  question="Multiply: $(x+9)^2$"
  answer="x^2+18x+81"
  answerDisplay="$x^2+18x+81$"
>}}

{{< fillin
  question="Multiply: $(2c-d)^2$"
  answer="4c^2-4cd+d^2"
  answerDisplay="$4c^2-4cd+d^2$"
>}}

We just saw a pattern for squaring binomials. Similarly, there is a pattern
for another product of binomials. A pair of binomials that each have the same
first term and the same last term, but one is a sum and one is a difference,
is called a **conjugate pair** and is of the form $(a-b),\ (a+b)$.

{{< callout type="info" >}}
  **Conjugate pair.** A conjugate pair is two binomials of the form
  $(a-b),\ (a+b)$. The pair of binomials each have the same first term and
  the same last term, but one binomial is a sum and the other is a
  difference.
{{< /callout >}}

There is a nice pattern for finding the product of conjugates. Notice the two
middle terms you get from FOIL combine to $0$ in every case, leaving a
product of the form $a^2-b^2$, called a **difference of squares**.

{{< callout type="info" >}}
  **Product of Conjugates Pattern.** If $a$ and $b$ are real numbers,
  $$(a-b)(a+b)=a^2-b^2.$$
  The product is called a difference of squares. To multiply conjugates,
  square the first term, square the last term, and write it as a difference
  of squares.
{{< /callout >}}

**Example.** Multiply using the product of conjugates pattern: (a)
$(2x+5)(2x-5)$ and (b) $(5m-9n)(5m+9n)$.

For part (a):

$$
\begin{array}{lrcl}
\text{Use the pattern.} & (2x+5)(2x-5) &=& (2x)^2-5^2 \\[4pt]
\text{Simplify.} & &=& 4x^2-25
\end{array}
$$

For part (b):

$$
\begin{array}{lrcl}
\text{Use the pattern.} & (5m-9n)(5m+9n) &=& (5m)^2-(9n)^2 \\[4pt]
\text{Simplify.} & &=& 25m^2-81n^2
\end{array}
$$

{{< fillin
  question="Multiply: $(6x+5)(6x-5)$"
  answer="36x^2-25"
  answerDisplay="$36x^2-25$"
>}}

{{< fillin
  question="Multiply: $(4p-7q)(4p+7q)$"
  answer="16p^2-49q^2"
  answerDisplay="$16p^2-49q^2$"
>}}

The special product patterns look similar, so it is important to recognize
when to use each. Squaring a binomial gives a **trinomial** whose middle term
is double the product of the terms; multiplying conjugates gives a
**binomial** — a difference of squares with no middle term.

**Example.** Choose the appropriate pattern and use it to find the product:
(a) $(2x-3)(2x+3)$, (b) $(8x-5)^2$, (c) $(6m+7)^2$, and (d) $(5x-6)(6x+5)$.

For part (a), these are conjugates, so it fits the Product of Conjugates
pattern:

$$
\begin{array}{lrcl}
\text{Use the pattern.} & (2x-3)(2x+3) &=& (2x)^2-3^2 \\[4pt]
\text{Simplify.} & &=& 4x^2-9
\end{array}
$$

For part (b), we square a binomial, so it fits the Binomial Squares pattern:

$$
\begin{array}{lrcl}
\text{Use the pattern.} & (8x-5)^2 &=& (8x)^2-2\cdot 8x\cdot 5+5^2 \\[4pt]
\text{Simplify.} & &=& 64x^2-80x+25
\end{array}
$$

For part (c), again a binomial square:

$$
\begin{array}{lrcl}
\text{Use the pattern.} & (6m+7)^2 &=& (6m)^2+2\cdot 6m\cdot 7+7^2 \\[4pt]
\text{Simplify.} & &=& 36m^2+84m+49
\end{array}
$$

For part (d), this product does not fit the patterns, so we use FOIL:

$$
\begin{array}{lrcl}
\text{Use FOIL.} & (5x-6)(6x+5) &=& 30x^2+25x-36x-30 \\[4pt]
\text{Simplify.} & &=& 30x^2-11x-30
\end{array}
$$

{{< fillin
  question="Choose the appropriate pattern and find the product: $(9b-2)(2b+9)$"
  answer="18b^2+77b-18"
  answerDisplay="$18b^2+77b-18$"
>}}

{{< fillin
  question="Choose the appropriate pattern and find the product: $(9p-4)^2$"
  answer="81p^2-72p+16"
  answerDisplay="$81p^2-72p+16$"
>}}

{{< fillin
  question="Choose the appropriate pattern and find the product: $(7y+1)^2$"
  answer="49y^2+14y+1"
  answerDisplay="$49y^2+14y+1$"
>}}

{{< fillin
  question="Choose the appropriate pattern and find the product: $(4r-3)(4r+3)$"
  answer="16r^2-9"
  answerDisplay="$16r^2-9$"
>}}

## Multiply polynomial functions

Just as polynomials can be multiplied, polynomial functions can also be
multiplied.

{{< callout type="info" >}}
  **Multiplication of Polynomial Functions.** For functions $f(x)$ and
  $g(x)$, $(f\cdot g)(x)=f(x)\cdot g(x)$.
{{< /callout >}}

**Example.** For functions $f(x)=x+2$ and $g(x)=x^2-3x-4$, find (a)
$(f\cdot g)(x)$ and (b) $(f\cdot g)(2)$.

For part (a):

$$
\begin{array}{lrcl}
\text{Substitute for } f(x) \text{ and } g(x). & (f\cdot g)(x) &=& (x+2)\left(x^2-3x-4\right) \\[4pt]
\text{Multiply the polynomials.} & &=& x\left(x^2-3x-4\right)+2\left(x^2-3x-4\right) \\[4pt]
\text{Distribute.} & &=& x^3-3x^2-4x+2x^2-6x-8 \\[4pt]
\text{Combine like terms.} & &=& x^3-x^2-10x-8
\end{array}
$$

For part (b), we found $(f\cdot g)(x)$ above, so we substitute $x=2$:

$$
\begin{array}{lrcl}
\text{Substitute } x=2. & (f\cdot g)(2) &=& 2^3-2^2-10\cdot 2-8 \\[4pt]
\text{Simplify.} & &=& 8-4-20-8 \\[4pt]
& &=& -24
\end{array}
$$

{{< fillin
  question="For $f(x)=x-5$ and $g(x)=x^2-2x+3$, find $(f\cdot g)(x)$."
  answer="x^3-7x^2+13x-15"
  answerDisplay="$x^3-7x^2+13x-15$"
>}}

{{< fillin
  question="For $f(x)=x-5$ and $g(x)=x^2-2x+3$, find $(f\cdot g)(2)$."
  answer="-9"
  answerDisplay="$-9$"
>}}

## Key terms

**FOIL** — a method for multiplying two binomials by adding the products of
the First, Outer, Inner, and Last terms. **Vertical Method** — a method for
multiplying polynomials that lines up partial products in columns, like whole
number multiplication. **conjugate pair** — two binomials of the form
$(a-b),\ (a+b)$ with the same first and last terms, one a sum and one a
difference. **binomial squares pattern** — $(a+b)^2=a^2+2ab+b^2$ and
$(a-b)^2=a^2-2ab+b^2$. **product of conjugates pattern** —
$(a-b)(a+b)=a^2-b^2$. **difference of squares** — a binomial of the form
$a^2-b^2$, the product of a conjugate pair.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 5.3: Multiply Polynomials](https://openstax.org/books/intermediate-algebra-2e/pages/5-3-multiply-polynomials) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: omitted the Be Prepared quiz, media links, and end-of-section exercises; recreated the FOIL and Vertical Method worked examples as aligned equation blocks; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
