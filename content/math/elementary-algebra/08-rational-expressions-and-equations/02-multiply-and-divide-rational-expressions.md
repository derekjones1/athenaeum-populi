---
title: Multiply and Divide Rational Expressions
description: >-
  Multiplying rational expressions by multiplying numerators and denominators
  and dividing out common factors, and dividing rational expressions by
  multiplying by the reciprocal of the divisor — adapted from OpenStax
  Elementary Algebra 2e, Section 8.2.
source_section: "8.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** multiply rational
  expressions, and divide rational expressions.
{{< /callout >}}

## Multiply rational expressions

To multiply rational expressions, we do just what we did with numerical
fractions. We multiply the numerators and multiply the denominators. Then, if
there are any common factors, we remove them to simplify the result.

{{< callout type="info" >}}
  **Multiplication of rational expressions.** If $p$, $q$, $r$, $s$ are
  polynomials where $q \neq 0$ and $s \neq 0$, then

  $$\tfrac{p}{q} \cdot \tfrac{r}{s} = \tfrac{pr}{qs}$$

  To multiply rational expressions, multiply the numerators and multiply the
  denominators.
{{< /callout >}}

We'll do the first example with numerical fractions to remind us of how we
multiplied fractions without variables.

**Example.** Multiply $\tfrac{10}{28} \cdot \tfrac{8}{15}$.

Multiply the numerators and denominators, look for common factors, and then
remove them:

$$
\begin{array}{lrcl}
\text{Multiply the numerators and denominators.} & \tfrac{10}{28} \cdot \tfrac{8}{15} &=& \tfrac{10 \cdot 8}{28 \cdot 15} \\[10pt]
\text{Factor and remove common factors.} && & \tfrac{2 \cdot 5 \cdot 2 \cdot 4}{7 \cdot 4 \cdot 3 \cdot 5} \\[10pt]
\text{Simplify.} && & \tfrac{4}{21}
\end{array}
$$

{{< fillin
  question="Multiply: $\tfrac{6}{10} \cdot \tfrac{15}{12}$."
  answer="\tfrac{3}{4}"
  answerDisplay="$\tfrac{3}{4}$"
  hint="Multiply the numerators and the denominators, then divide out common factors."
>}}

Throughout this chapter, we assume that all numerical values that would make a
denominator zero are excluded. We will not write the restrictions for each
rational expression, but keep in mind that the denominator can never be zero.

**Example.** Multiply $\tfrac{2x}{3y^2} \cdot \tfrac{6xy^3}{x^2 y}$.

Multiply the numerators and denominators, factor completely, and then remove
common factors:

$$
\begin{array}{lrcl}
\text{Multiply.} & \tfrac{2x}{3y^2} \cdot \tfrac{6xy^3}{x^2 y} &=& \tfrac{2x \cdot 6xy^3}{3y^2 \cdot x^2 y} \\[10pt]
\text{Factor and remove common factors.} && & \tfrac{2 \cdot x \cdot 2 \cdot 3 \cdot x \cdot y \cdot y \cdot y}{3 \cdot y \cdot y \cdot x \cdot x \cdot y} \\[10pt]
\text{Simplify.} && & 4
\end{array}
$$

{{< fillin
  question="Multiply: $\tfrac{3pq}{q^2} \cdot \tfrac{5p^2 q}{6pq}$."
  answer="\tfrac{5p^2}{2q}"
  answerDisplay="$\tfrac{5p^2}{2q}$"
  hint="Multiply numerators and denominators, then divide out the common factors of the coefficients and the variables."
>}}

For rational expressions with polynomial numerators and denominators, the same
steps apply — the key is to factor everything completely first, so the common
factors are visible.

**Example.** Multiply $\tfrac{2x}{x^2 - 7x + 12} \cdot \tfrac{x^2 - 9}{6x^2}$.

Factor the numerator and denominator of each fraction completely. Multiply the
numerators and denominators (writing the monomials first is helpful), then
divide out the common factors, leaving the denominator in factored form:

$$
\begin{array}{lrcl}
\text{Factor completely.} &&& \tfrac{2x}{(x - 3)(x - 4)} \cdot \tfrac{(x - 3)(x + 3)}{6x^2} \\[10pt]
\text{Multiply.} && & \tfrac{2x(x - 3)(x + 3)}{6x^2(x - 3)(x - 4)} \\[10pt]
\text{Divide out common factors.} && & \tfrac{x + 3}{3x(x - 4)}
\end{array}
$$

{{< callout type="info" >}}
  **Multiply a rational expression.**

  1. Factor each numerator and denominator completely.
  2. Multiply the numerators and denominators.
  3. Simplify by dividing out common factors.
{{< /callout >}}

**Example.** Multiply $\tfrac{n^2 - 7n}{n^2 + 2n + 1} \cdot \tfrac{n + 1}{2n}$.

Factor each numerator and denominator, multiply, and then remove common
factors:

$$
\begin{array}{lrcl}
\text{Factor.} &&& \tfrac{n(n - 7)}{(n + 1)(n + 1)} \cdot \tfrac{n + 1}{2n} \\[10pt]
\text{Multiply.} && & \tfrac{n(n - 7)(n + 1)}{(n + 1)(n + 1)2n} \\[10pt]
\text{Simplify.} && & \tfrac{n - 7}{2(n + 1)}
\end{array}
$$

{{< fillin
  question="Multiply: $\tfrac{5x}{x^2 + 5x + 6} \cdot \tfrac{x^2 - 4}{10x}$."
  answer="\tfrac{x - 2}{2(x + 3)}"
  answerDisplay="$\tfrac{x - 2}{2(x + 3)}$"
  hint="Factor each part: $x^2 + 5x + 6 = (x + 2)(x + 3)$ and $x^2 - 4 = (x - 2)(x + 2)$. Then divide out the common factors."
>}}

When one of the factors is the opposite of a factor in the other fraction, a
factor of $-1$ appears. Remember that $a - b = -(b - a)$, so $\tfrac{4 - x}{x - 4}
= -1$.

**Example.** Multiply $\tfrac{16 - 4x}{2x - 12} \cdot \tfrac{x^2 - 5x - 6}{x^2 - 16}$.

Factor each numerator and denominator, multiply, and remove common factors.
Because $4 - x$ and $x - 4$ are opposites, they divide to $-1$:

$$
\begin{array}{lrcl}
\text{Factor.} &&& \tfrac{4(4 - x)}{2(x - 6)} \cdot \tfrac{(x - 6)(x + 1)}{(x - 4)(x + 4)} \\[10pt]
\text{Multiply.} && & \tfrac{4(4 - x)(x - 6)(x + 1)}{2(x - 6)(x - 4)(x + 4)} \\[10pt]
\text{Simplify (opposites divide to } -1\text{).} && & -\tfrac{2(x + 1)}{x + 4}
\end{array}
$$

{{< fillin
  question="Multiply: $\tfrac{12x - 6x^2}{x^2 + 8x} \cdot \tfrac{x^2 + 11x + 24}{x^2 - 4}$. (A factor of $-1$ appears from opposite binomials.)"
  answer="-\tfrac{6(x + 3)}{x + 2}"
  answerDisplay="$-\tfrac{6(x + 3)}{x + 2}$"
  hint="Factor $12x - 6x^2 = 6x(2 - x)$; the $2 - x$ and $x - 2$ are opposites, so they divide to $-1$."
>}}

## Divide rational expressions

To divide rational expressions we multiply the first fraction by the
**reciprocal** of the second, just like we did for numerical fractions. The
reciprocal of $\tfrac{a}{b}$ is $\tfrac{b}{a}$ — we simply put the numerator in
the denominator and the denominator in the numerator. We "flip" the fraction.

{{< callout type="info" >}}
  **Division of rational expressions.** If $p$, $q$, $r$, $s$ are polynomials
  where $q \neq 0$, $r \neq 0$, $s \neq 0$, then

  $$\tfrac{p}{q} \div \tfrac{r}{s} = \tfrac{p}{q} \cdot \tfrac{s}{r}$$

  To divide rational expressions, multiply the first fraction by the reciprocal
  of the second.
{{< /callout >}}

**Example.** Divide $\tfrac{x + 9}{6 - x} \div \tfrac{x^2 - 81}{x - 6}$.

Rewrite the division as multiplication by the reciprocal of the second
fraction, factor completely, multiply, and simplify. Remember that opposites
divide to $-1$:

$$
\begin{array}{lrcl}
\text{Multiply by the reciprocal.} &&& \tfrac{x + 9}{6 - x} \cdot \tfrac{x - 6}{x^2 - 81} \\[10pt]
\text{Factor.} && & \tfrac{x + 9}{6 - x} \cdot \tfrac{x - 6}{(x - 9)(x + 9)} \\[10pt]
\text{Multiply.} && & \tfrac{(x + 9)(x - 6)}{(6 - x)(x - 9)(x + 9)} \\[10pt]
\text{Simplify (opposites divide to } -1\text{).} && & -\tfrac{1}{x - 9}
\end{array}
$$

{{< callout type="info" >}}
  **Divide rational expressions.**

  1. Rewrite the division as the product of the first rational expression and
     the reciprocal of the second.
  2. Factor the numerators and denominators completely.
  3. Multiply the numerators and denominators together.
  4. Simplify by dividing out common factors.
{{< /callout >}}

**Example.** Divide $\tfrac{3n^2}{n^2 - 4n} \div \tfrac{9n^2 - 45n}{n^2 - 7n + 10}$.

Rewrite as multiplication by the reciprocal, factor everything, and then divide
out common factors:

$$
\begin{array}{lrcl}
\text{Multiply by the reciprocal.} &&& \tfrac{3n^2}{n^2 - 4n} \cdot \tfrac{n^2 - 7n + 10}{9n^2 - 45n} \\[10pt]
\text{Factor and multiply.} && & \tfrac{3 \cdot n \cdot n \cdot (n - 5)(n - 2)}{n(n - 4) \cdot 3 \cdot 3 \cdot n \cdot (n - 5)} \\[10pt]
\text{Simplify.} && & \tfrac{n - 2}{3(n - 4)}
\end{array}
$$

{{< fillin
  question="Divide: $\tfrac{c + 3}{5 - c} \div \tfrac{c^2 - 9}{c - 5}$. (A factor of $-1$ appears from opposite binomials.)"
  answer="-\tfrac{1}{c - 3}"
  answerDisplay="$-\tfrac{1}{c - 3}$"
  hint="Multiply by the reciprocal $\tfrac{c - 5}{c^2 - 9}$; factor $c^2 - 9 = (c - 3)(c + 3)$. The $5 - c$ and $c - 5$ are opposites."
>}}

{{< fillin
  question="Divide: $\tfrac{2m^2}{m^2 - 8m} \div \tfrac{8m^2 + 24m}{m^2 + m - 6}$."
  answer="\tfrac{m - 2}{4(m - 8)}"
  answerDisplay="$\tfrac{m - 2}{4(m - 8)}$"
  hint="Multiply by the reciprocal, then factor: $m^2 - 8m = m(m - 8)$, $8m^2 + 24m = 8m(m + 3)$, $m^2 + m - 6 = (m + 3)(m - 2)$."
>}}

Sometimes we divide a rational expression by a polynomial. Remember that a
fraction bar means division, and any polynomial can be written as a fraction
over $1$. To divide a fraction by a whole number, we first write the whole
number as a fraction so we can find its reciprocal — for example, $\tfrac{3}{5}
\div 4 = \tfrac{3}{5} \div \tfrac{4}{1} = \tfrac{3}{5} \cdot \tfrac{1}{4}$.

**Example.** Divide $\tfrac{a^2 - b^2}{3ab} \div (a^2 + 2ab + b^2)$.

Write the second expression as a fraction over $1$, multiply by its reciprocal,
factor, and simplify:

$$
\begin{array}{lrcl}
\text{Write as a fraction over } 1. &&& \tfrac{a^2 - b^2}{3ab} \div \tfrac{a^2 + 2ab + b^2}{1} \\[10pt]
\text{Multiply by the reciprocal.} && & \tfrac{a^2 - b^2}{3ab} \cdot \tfrac{1}{a^2 + 2ab + b^2} \\[10pt]
\text{Factor and multiply.} && & \tfrac{(a - b)(a + b) \cdot 1}{3ab \cdot (a + b)(a + b)} \\[10pt]
\text{Simplify.} && & \tfrac{a - b}{3ab(a + b)}
\end{array}
$$

{{< fillin
  question="Divide: $\tfrac{2x^2 - 14x - 16}{4} \div (x^2 + 2x + 1)$."
  answer="\tfrac{x - 8}{2(x + 1)}"
  answerDisplay="$\tfrac{x - 8}{2(x + 1)}$"
  hint="Write the polynomial over $1$ and multiply by its reciprocal. Factor $2x^2 - 14x - 16 = 2(x - 8)(x + 1)$ and $x^2 + 2x + 1 = (x + 1)^2$."
>}}

A complex fraction is another way of writing division of two fractions — the
fraction bar means "divide the top by the bottom."

**Example.** Divide the complex fraction

$$\cfrac{\frac{6x^2 - 7x + 2}{4x - 8}}{\frac{2x^2 - 7x + 3}{x^2 - 5x + 6}}.$$

Rewrite the complex fraction with a division sign, then as the product of the
first fraction and the reciprocal of the second. Factor everything and divide
out common factors:

$$
\begin{array}{lrcl}
\text{Rewrite as division.} &&& \tfrac{6x^2 - 7x + 2}{4x - 8} \div \tfrac{2x^2 - 7x + 3}{x^2 - 5x + 6} \\[10pt]
\text{Multiply by the reciprocal.} && & \tfrac{6x^2 - 7x + 2}{4x - 8} \cdot \tfrac{x^2 - 5x + 6}{2x^2 - 7x + 3} \\[10pt]
\text{Factor and multiply.} && & \tfrac{(2x - 1)(3x - 2)(x - 2)(x - 3)}{4(x - 2)(2x - 1)(x - 3)} \\[10pt]
\text{Simplify.} && & \tfrac{3x - 2}{4}
\end{array}
$$

If we have more than two rational expressions to work with, we follow the same
procedure: rewrite any division as multiplication by the reciprocal, then
factor and multiply.

**Example.** Perform the indicated operations: $\tfrac{3x - 6}{4x - 4} \cdot
\tfrac{x^2 + 2x - 3}{x^2 - 3x - 10} \div \tfrac{2x + 12}{8x + 16}$.

Rewrite the division as multiplication by the reciprocal, factor completely,
multiply, and divide out common factors:

$$
\begin{array}{lrcl}
\text{Multiply by the reciprocal.} &&& \tfrac{3x - 6}{4x - 4} \cdot \tfrac{x^2 + 2x - 3}{x^2 - 3x - 10} \cdot \tfrac{8x + 16}{2x + 12} \\[10pt]
\text{Factor and multiply.} && & \tfrac{3 \cdot 8(x - 2)(x + 3)(x - 1)(x + 2)}{4 \cdot 2(x - 1)(x + 2)(x - 5)(x + 6)} \\[10pt]
\text{Simplify.} && & \tfrac{3(x - 2)(x + 3)}{(x - 5)(x + 6)}
\end{array}
$$

{{< fillin
  question="Perform the indicated operations: $\tfrac{4m + 4}{3m - 15} \cdot \tfrac{m^2 - 3m - 10}{m^2 - 4m - 32} \div \tfrac{12m - 36}{6m - 48}$."
  answer="\tfrac{2(m + 1)(m + 2)}{3(m + 4)(m - 3)}"
  answerDisplay="$\tfrac{2(m + 1)(m + 2)}{3(m + 4)(m - 3)}$"
  hint="Rewrite the division as multiplication by the reciprocal $\tfrac{6m - 48}{12m - 36}$, then factor every part completely before dividing out common factors."
>}}

## Key terms

**rational expression** — a fraction whose numerator and denominator are
polynomials. **reciprocal** — the fraction obtained by interchanging the
numerator and denominator; the reciprocal of $\tfrac{a}{b}$ is $\tfrac{b}{a}$.
**complex fraction** — a fraction in which the numerator, the denominator, or
both contain a fraction; a complex fraction represents the division of its top
by its bottom.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.2: Multiply and Divide Rational Expressions](https://openstax.org/books/elementary-algebra-2e/pages/8-2-multiply-and-divide-rational-expressions) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked "How To" step tables as display equality chains with left-hand explanations, and stated each simplification as a divide-out of common factors; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
