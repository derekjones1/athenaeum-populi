---
title: Multiply Square Roots
description: >-
  Multiplying square roots with the Product Property, multiplying radicals that
  carry coefficients and simplifying after, and using polynomial multiplication
  — the distributive property, FOIL, and the special products for binomial
  squares and conjugates — to multiply expressions with square roots. Adapted
  from OpenStax Elementary Algebra 2e, Section 9.4.
source_section: "9.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** multiply square roots,
  and use polynomial multiplication to multiply square roots.
{{< /callout >}}

## Multiply square roots

We have used the Product Property of Square Roots to simplify square roots by
removing perfect square factors. The Product Property of Square Roots says

$$\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$$

We can use the Product Property of Square Roots "in reverse" to multiply square
roots:

$$\sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$$

Remember, we assume all variables are greater than or equal to zero. We will
rewrite the Product Property of Square Roots so we see both ways together.

{{< callout type="info" >}}
  **Product Property of Square Roots.** If $a$, $b$ are nonnegative real
  numbers, then

  $$\sqrt{ab} = \sqrt{a} \cdot \sqrt{b} \quad\text{and}\quad \sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$$
{{< /callout >}}

So we can multiply $\sqrt{3} \cdot \sqrt{5}$ this way:

$$\sqrt{3} \cdot \sqrt{5} = \sqrt{3 \cdot 5} = \sqrt{15}$$

Sometimes the product gives us a perfect square:

$$\sqrt{2} \cdot \sqrt{8} = \sqrt{2 \cdot 8} = \sqrt{16} = 4$$

Even when the product is not a perfect square, we must look for perfect-square
factors and simplify the radical whenever possible.

Multiplying radicals with coefficients is much like multiplying variables with
coefficients. To multiply $4x \cdot 3y$ we multiply the coefficients together
and then the variables. The result is $12xy$. Keep this in mind as you do these
examples.

{{< callout type="info" >}}
  **Coefficients of square roots.** If $m$, $n$, $a$, $b$ are nonnegative real
  numbers, then

  $$m\sqrt{a} \cdot n\sqrt{b} = mn\sqrt{ab}$$
{{< /callout >}}

**Example.** Simplify: (a) $\sqrt{2} \cdot \sqrt{6}$ and (b) $\left(4\sqrt{3}\right)\left(2\sqrt{12}\right)$.

(a) Multiply using the Product Property, then simplify the radical:

$$
\begin{array}{lrcl}
\text{Multiply using the Product Property.} & \sqrt{2} \cdot \sqrt{6} &=& \sqrt{12} \\[4pt]
\text{Simplify the radical.} && & \sqrt{4} \cdot \sqrt{3} \\[4pt]
\text{Simplify.} && & 2\sqrt{3}
\end{array}
$$

(b) Multiply the coefficients and multiply the radicals, then simplify:

$$
\begin{array}{lrcl}
\text{Multiply using the Product Property.} & \left(4\sqrt{3}\right)\left(2\sqrt{12}\right) &=& 8\sqrt{36} \\[4pt]
\text{Simplify the radical.} && & 8 \cdot 6 \\[4pt]
\text{Simplify.} && & 48
\end{array}
$$

Notice that in (b) we multiplied the coefficients and multiplied the radicals.
Also, we did not simplify $\sqrt{12}$. We waited to get the product and then
simplified.

{{< fillin
  question="Simplify: $\sqrt{3} \cdot \sqrt{6}$."
  answer="3\sqrt{2}"
  answerDisplay="$3\sqrt{2}$"
  hint="Multiply under one radical: $\sqrt{3 \cdot 6} = \sqrt{18}$, then remove the perfect-square factor."
>}}

{{< fillin
  question="Simplify: $\left(6\sqrt{3}\right)\left(5\sqrt{6}\right)$."
  answer="90\sqrt{2}"
  answerDisplay="$90\sqrt{2}$"
  hint="Multiply the coefficients ($6 \cdot 5$) and the radicals ($\sqrt{3} \cdot \sqrt{6} = \sqrt{18}$), then simplify $\sqrt{18}$."
>}}

When we have to multiply square roots, we first find the product and then
remove any perfect square factors.

**Example.** Simplify: $\left(6\sqrt{2}\right)\left(3\sqrt{10}\right)$.

Multiply the coefficients and the radicals, then simplify:

$$
\begin{array}{lrcl}
\text{Multiply using the Product Property.} & \left(6\sqrt{2}\right)\left(3\sqrt{10}\right) &=& 18\sqrt{20} \\[4pt]
\text{Simplify the radical.} && & 18\sqrt{4} \cdot \sqrt{5} \\[4pt]
\text{Simplify.} && & 18 \cdot 2 \cdot \sqrt{5} \\[4pt]
&&& 36\sqrt{5}
\end{array}
$$

**Example.** Simplify: (a) $\left(\sqrt{8x^3}\right)\left(\sqrt{3x}\right)$ and (b) $\left(\sqrt{20y^2}\right)\left(\sqrt{5y^3}\right)$.

(a) Multiply, then simplify the radical:

$$
\begin{array}{lrcl}
\text{Multiply using the Product Property.} & \left(\sqrt{8x^3}\right)\left(\sqrt{3x}\right) &=& \sqrt{24x^4} \\[4pt]
\text{Simplify the radical.} && & \sqrt{4x^4} \cdot \sqrt{6} \\[4pt]
\text{Simplify.} && & 2x^2\sqrt{6}
\end{array}
$$

(b) Multiply, then simplify the radical:

$$
\begin{array}{lrcl}
\text{Multiply using the Product Property.} & \left(\sqrt{20y^2}\right)\left(\sqrt{5y^3}\right) &=& \sqrt{100y^5} \\[4pt]
\text{Simplify the radical.} && & 10y^2\sqrt{y}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(\sqrt{6x^5}\right)\left(\sqrt{2x}\right)$."
  answer="2x^3\sqrt{3}"
  answerDisplay="$2x^3\sqrt{3}$"
  hint="Multiply under one radical to get $\sqrt{12x^6}$, then pull out the perfect-square factor $4x^6$."
>}}

**Example.** Simplify: $\left(10\sqrt{6p^3}\right)\left(3\sqrt{18p}\right)$.

Multiply the coefficients and the radicals, then simplify:

$$
\begin{array}{lrcl}
\text{Multiply.} & \left(10\sqrt{6p^3}\right)\left(3\sqrt{18p}\right) &=& 30\sqrt{108p^4} \\[4pt]
\text{Simplify the radical.} && & 30\sqrt{36p^4} \cdot \sqrt{3} \\[4pt]
&&& 30 \cdot 6p^2 \cdot \sqrt{3} \\[4pt]
&&& 180p^2\sqrt{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(6\sqrt{2x^2}\right)\left(8\sqrt{45x^4}\right)$."
  answer="144x^3\sqrt{10}"
  answerDisplay="$144x^3\sqrt{10}$"
  hint="Multiply coefficients ($6 \cdot 8 = 48$) and radicals ($\sqrt{2x^2} \cdot \sqrt{45x^4} = \sqrt{90x^6}$), then simplify: $\sqrt{90x^6} = 3x^3\sqrt{10}$."
>}}

When we multiply two like square roots, it is the same as squaring a single
square root.

**Example.** Simplify: (a) $\left(\sqrt{2}\right)^2$ and (b) $\left(-\sqrt{11}\right)^2$.

(a) Rewrite as a product, multiply, and simplify:

$$
\begin{array}{lrcl}
\text{Rewrite as a product.} & \left(\sqrt{2}\right)^2 &=& \left(\sqrt{2}\right)\left(\sqrt{2}\right) \\[4pt]
\text{Multiply.} && & \sqrt{4} \\[4pt]
\text{Simplify.} && & 2
\end{array}
$$

(b) Rewrite as a product, multiply, and simplify:

$$
\begin{array}{lrcl}
\text{Rewrite as a product.} & \left(-\sqrt{11}\right)^2 &=& \left(-\sqrt{11}\right)\left(-\sqrt{11}\right) \\[4pt]
\text{Multiply.} && & \sqrt{121} \\[4pt]
\text{Simplify.} && & 11
\end{array}
$$

The results of the previous example lead us to this property.

{{< callout type="info" >}}
  **Squaring a square root.** If $a$ is a nonnegative real number, then

  $$\left(\sqrt{a}\right)^2 = a$$
{{< /callout >}}

By realizing that squaring and taking a square root are "opposite" operations,
we can simplify $\left(\sqrt{2}\right)^2$ and get $2$ right away.

**Example.** Simplify: (a) $\left(2\sqrt{3}\right)\left(8\sqrt{3}\right)$ and (b) $\left(3\sqrt{6}\right)^2$.

(a) Multiply, using $\left(\sqrt{3}\right)^2 = 3$:

$$
\begin{array}{lrcl}
\text{Multiply. Remember, } \left(\sqrt{3}\right)^2 = 3. & \left(2\sqrt{3}\right)\left(8\sqrt{3}\right) &=& 16 \cdot 3 \\[4pt]
\text{Simplify.} && & 48
\end{array}
$$

(b) Square the coefficient and the radical:

$$
\begin{array}{lrcl}
\text{Multiply.} & \left(3\sqrt{6}\right)^2 &=& 9 \cdot 6 \\[4pt]
\text{Simplify.} && & 54
\end{array}
$$

{{< fillin
  question="Simplify: $\left(6\sqrt{11}\right)\left(5\sqrt{11}\right)$."
  answer="330"
  hint="Multiply the coefficients, then use $\left(\sqrt{11}\right)^2 = 11$."
>}}

## Use polynomial multiplication to multiply square roots

In the next few examples, we will use the Distributive Property to multiply
expressions with square roots. We will first distribute and then simplify the
square roots when possible.

**Example.** Simplify: (a) $3\left(5 - \sqrt{2}\right)$ and (b) $\sqrt{2}\left(4 - \sqrt{10}\right)$.

(a) Distribute:

$$
\begin{array}{lrcl}
\text{Distribute.} & 3\left(5 - \sqrt{2}\right) &=& 15 - 3\sqrt{2}
\end{array}
$$

(b) Distribute, then simplify the radical:

$$
\begin{array}{lrcl}
\text{Distribute.} & \sqrt{2}\left(4 - \sqrt{10}\right) &=& 4\sqrt{2} - \sqrt{20} \\[4pt]
\text{Simplify.} && & 4\sqrt{2} - 2\sqrt{5}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{3}\left(2 - \sqrt{18}\right)$."
  answer="2\sqrt{3} - 3\sqrt{6}"
  answerDisplay="$2\sqrt{3} - 3\sqrt{6}$"
  hint="Distribute the $\sqrt{3}$: the second term is $\sqrt{3} \cdot \sqrt{18} = \sqrt{54}$, which simplifies to $3\sqrt{6}$."
>}}

**Example.** Simplify: (a) $\sqrt{5}\left(7 + 2\sqrt{5}\right)$ and (b) $\sqrt{6}\left(\sqrt{2} + \sqrt{18}\right)$.

(a) Distribute, using $\left(\sqrt{5}\right)^2 = 5$, then simplify:

$$
\begin{array}{lrcl}
\text{Multiply.} & \sqrt{5}\left(7 + 2\sqrt{5}\right) &=& 7\sqrt{5} + 2 \cdot 5 \\[4pt]
\text{Simplify.} && & 7\sqrt{5} + 10 \\[4pt]
&&& 10 + 7\sqrt{5}
\end{array}
$$

(b) Distribute, simplify each radical, then combine like radicals:

$$
\begin{array}{lrcl}
\text{Multiply.} & \sqrt{6}\left(\sqrt{2} + \sqrt{18}\right) &=& \sqrt{12} + \sqrt{108} \\[4pt]
\text{Simplify.} && & \sqrt{4} \cdot \sqrt{3} + \sqrt{36} \cdot \sqrt{3} \\[4pt]
&&& 2\sqrt{3} + 6\sqrt{3} \\[4pt]
\text{Combine like radicals.} && & 8\sqrt{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\sqrt{6}\left(1 + 3\sqrt{6}\right)$."
  answer="\sqrt{6} + 18"
  answerDisplay="$\sqrt{6} + 18$"
  hint="Distribute: the second term is $3 \cdot \sqrt{6} \cdot \sqrt{6} = 3 \cdot 6$."
>}}

When we worked with polynomials, we multiplied binomials by binomials.
Remember, this gave us four products before we combined any like terms. To be
sure to get all four products, we organized our work — usually by the FOIL
method.

**Example.** Simplify: $\left(2 + \sqrt{3}\right)\left(4 - \sqrt{3}\right)$.

Multiply the four products with FOIL, then combine like terms:

$$
\begin{array}{lrcl}
\text{Multiply.} & \left(2 + \sqrt{3}\right)\left(4 - \sqrt{3}\right) &=& 8 - 2\sqrt{3} + 4\sqrt{3} - 3 \\[4pt]
\text{Combine like terms.} && & 5 + 2\sqrt{3}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(1 + \sqrt{6}\right)\left(3 - \sqrt{6}\right)$."
  answer="-3 + 2\sqrt{6}"
  answerDisplay="$-3 + 2\sqrt{6}$"
  hint="FOIL gives $3 - \sqrt{6} + 3\sqrt{6} - 6$; then combine the constant terms and the radical terms."
>}}

**Example.** Simplify: $\left(3 - 2\sqrt{7}\right)\left(4 - 2\sqrt{7}\right)$.

Multiply the four products with FOIL, remembering $\sqrt{7} \cdot \sqrt{7} = 7$,
then combine like terms:

$$
\begin{array}{lrcl}
\text{Multiply.} & \left(3 - 2\sqrt{7}\right)\left(4 - 2\sqrt{7}\right) &=& 12 - 6\sqrt{7} - 8\sqrt{7} + 4 \cdot 7 \\[4pt]
\text{Simplify.} && & 12 - 6\sqrt{7} - 8\sqrt{7} + 28 \\[4pt]
\text{Combine like terms.} && & 40 - 14\sqrt{7}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(6 - 3\sqrt{7}\right)\left(3 + 4\sqrt{7}\right)$."
  answer="-66 + 15\sqrt{7}"
  answerDisplay="$-66 + 15\sqrt{7}$"
  hint="FOIL gives $18 + 24\sqrt{7} - 9\sqrt{7} - 12 \cdot 7$; combine the constants and the radical terms."
>}}

**Example.** Simplify: $\left(3\sqrt{2} - \sqrt{5}\right)\left(\sqrt{2} + 4\sqrt{5}\right)$.

Multiply the four products with FOIL, then combine like terms:

$$
\begin{array}{lrcl}
\text{Multiply.} & \left(3\sqrt{2} - \sqrt{5}\right)\left(\sqrt{2} + 4\sqrt{5}\right) &=& 3 \cdot 2 + 12\sqrt{10} - \sqrt{10} - 4 \cdot 5 \\[4pt]
\text{Simplify.} && & 6 + 12\sqrt{10} - \sqrt{10} - 20 \\[4pt]
\text{Combine like terms.} && & -14 + 11\sqrt{10}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(5\sqrt{3} - \sqrt{7}\right)\left(\sqrt{3} + 2\sqrt{7}\right)$."
  answer="1 + 9\sqrt{21}"
  answerDisplay="$1 + 9\sqrt{21}$"
  hint="FOIL gives $5 \cdot 3 + 10\sqrt{21} - \sqrt{21} - 2 \cdot 7$; combine the constants ($15 - 14$) and the $\sqrt{21}$ terms."
>}}

**Example.** Simplify: $\left(4 - 2\sqrt{x}\right)\left(1 + 3\sqrt{x}\right)$.

Multiply the four products with FOIL, remembering $\sqrt{x} \cdot \sqrt{x} = x$,
then combine like terms:

$$
\begin{array}{lrcl}
\text{Multiply.} & \left(4 - 2\sqrt{x}\right)\left(1 + 3\sqrt{x}\right) &=& 4 + 12\sqrt{x} - 2\sqrt{x} - 6x \\[4pt]
\text{Combine like terms.} && & 4 + 10\sqrt{x} - 6x
\end{array}
$$

Note that some special products made our work easier when we multiplied
binomials earlier. This is true when we multiply square roots, too. The special
product formulas we used are shown below.

{{< callout type="info" >}}
  **Special product formulas.**

  Binomial Squares:

  $$
  \begin{array}{rcl}
  (a + b)^2 &=& a^2 + 2ab + b^2 \\[4pt]
  (a - b)^2 &=& a^2 - 2ab + b^2
  \end{array}
  $$

  Product of Conjugates:

  $$(a - b)(a + b) = a^2 - b^2$$
{{< /callout >}}

We will use the special product formulas in the next few examples. We will
start with the Binomial Squares formula.

**Example.** Simplify: (a) $\left(2 + \sqrt{3}\right)^2$ and (b) $\left(4 - 2\sqrt{5}\right)^2$.

Be sure to include the $2ab$ term when squaring a binomial.

(a) Use the binomial square pattern $(a + b)^2 = a^2 + 2ab + b^2$:

$$
\begin{array}{lrcl}
\text{Multiply using the pattern.} & \left(2 + \sqrt{3}\right)^2 &=& 2^2 + 2 \cdot 2 \cdot \sqrt{3} + \left(\sqrt{3}\right)^2 \\[4pt]
\text{Simplify.} && & 4 + 4\sqrt{3} + 3 \\[4pt]
\text{Combine like terms.} && & 7 + 4\sqrt{3}
\end{array}
$$

(b) Use the binomial square pattern $(a - b)^2 = a^2 - 2ab + b^2$:

$$
\begin{array}{lrcl}
\text{Multiply using the pattern.} & \left(4 - 2\sqrt{5}\right)^2 &=& 4^2 - 2 \cdot 4 \cdot 2\sqrt{5} + \left(2\sqrt{5}\right)^2 \\[4pt]
\text{Simplify.} && & 16 - 16\sqrt{5} + 4 \cdot 5 \\[4pt]
&&& 16 - 16\sqrt{5} + 20 \\[4pt]
\text{Combine like terms.} && & 36 - 16\sqrt{5}
\end{array}
$$

{{< fillin
  question="Simplify: $\left(6 - \sqrt{5}\right)^2$."
  answer="41 - 12\sqrt{5}"
  answerDisplay="$41 - 12\sqrt{5}$"
  hint="Use $(a - b)^2 = a^2 - 2ab + b^2$ with $a = 6$, $b = \sqrt{5}$; the middle term is $2 \cdot 6 \cdot \sqrt{5}$ and $\left(\sqrt{5}\right)^2 = 5$."
>}}

**Example.** Simplify: $\left(1 + 3\sqrt{x}\right)^2$.

Use the binomial square pattern $(a + b)^2 = a^2 + 2ab + b^2$:

$$
\begin{array}{lrcl}
\text{Multiply using the pattern.} & \left(1 + 3\sqrt{x}\right)^2 &=& 1^2 + 2 \cdot 1 \cdot 3\sqrt{x} + \left(3\sqrt{x}\right)^2 \\[4pt]
\text{Simplify.} && & 1 + 6\sqrt{x} + 9x
\end{array}
$$

{{< fillin
  question="Simplify: $\left(2 + 5\sqrt{m}\right)^2$."
  answer="4 + 20\sqrt{m} + 25m"
  answerDisplay="$4 + 20\sqrt{m} + 25m$"
  hint="Use $(a + b)^2 = a^2 + 2ab + b^2$ with $a = 2$, $b = 5\sqrt{m}$; note $\left(5\sqrt{m}\right)^2 = 25m$."
>}}

In the next two examples, we will find the product of conjugates.

**Example.** Simplify: $\left(4 - \sqrt{2}\right)\left(4 + \sqrt{2}\right)$.

Use the product-of-conjugates pattern $(a - b)(a + b) = a^2 - b^2$:

$$
\begin{array}{lrcl}
\text{Multiply using the pattern.} & \left(4 - \sqrt{2}\right)\left(4 + \sqrt{2}\right) &=& 4^2 - \left(\sqrt{2}\right)^2 \\[4pt]
\text{Simplify.} && & 16 - 2 \\[4pt]
&&& 14
\end{array}
$$

**Example.** Simplify: $\left(5 - 2\sqrt{3}\right)\left(5 + 2\sqrt{3}\right)$.

Use the product-of-conjugates pattern $(a - b)(a + b) = a^2 - b^2$:

$$
\begin{array}{lrcl}
\text{Multiply using the pattern.} & \left(5 - 2\sqrt{3}\right)\left(5 + 2\sqrt{3}\right) &=& 5^2 - \left(2\sqrt{3}\right)^2 \\[4pt]
\text{Simplify.} && & 25 - 4 \cdot 3 \\[4pt]
&&& 13
\end{array}
$$

Notice that the product of conjugates always gives a result with no radical —
the middle terms of the FOIL cancel and the outer squares leave a rational
number. This idea, expressed by $\left(\sqrt{a} + \sqrt{b}\right)\left(\sqrt{a} - \sqrt{b}\right) = a - b$,
becomes very useful in the next section when we divide square roots.

{{< fillin
  question="Simplify: $\left(3 - 2\sqrt{5}\right)\left(3 + 2\sqrt{5}\right)$."
  answer="-11"
  hint="Use $(a - b)(a + b) = a^2 - b^2$: compute $3^2 - \left(2\sqrt{5}\right)^2 = 9 - 4 \cdot 5$."
>}}

## Key terms

**Product Property of Square Roots** — for nonnegative $a$ and $b$,
$\sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$; used "in reverse" to multiply two square
roots into one. **squaring a square root** — for nonnegative $a$,
$\left(\sqrt{a}\right)^2 = a$, since squaring undoes a square root. **conjugates**
— a pair of binomials that differ only in the sign between their terms, such as
$a + \sqrt{b}$ and $a - \sqrt{b}$; their product $a^2 - b$ contains no radical.

---

<small>This section is adapted from [Elementary Algebra 2e, 9.4 Multiply Square Roots](https://openstax.org/books/elementary-algebra-2e/pages/9-4-multiply-square-roots) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked "How To" step tables as display equality chains with left-hand explanations; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
