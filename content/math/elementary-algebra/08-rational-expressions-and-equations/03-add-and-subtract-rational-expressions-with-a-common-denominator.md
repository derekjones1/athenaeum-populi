---
title: Add and Subtract Rational Expressions with a Common Denominator
description: >-
  Adding and subtracting rational expressions that share a common denominator,
  and handling expressions whose denominators are opposites — adapted from
  OpenStax Elementary Algebra 2e, Section 8.3.
source_section: "8.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** add rational expressions
  with a common denominator, subtract rational expressions with a common
  denominator, and add and subtract rational expressions whose denominators are
  opposites.
{{< /callout >}}

## Add rational expressions with a common denominator

What is the first step you take when you add numerical fractions? You check if
they have a common denominator. If they do, you add the numerators and place
the sum over the common denominator. If they do not, you find one before you
add.

It is the same with rational expressions. To add rational expressions, they
must have a common denominator. When the denominators are the same, you add the
numerators and place the sum over the common denominator.

{{< callout type="info" >}}
  **Rational Expression Addition.** If $p$, $q$, and $r$ are polynomials where
  $r \neq 0$, then

  $$\frac{p}{r} + \frac{q}{r} = \frac{p + q}{r}$$

  To add rational expressions with a common denominator, add the numerators and
  place the sum over the common denominator.
{{< /callout >}}

We will add two numerical fractions first, to remind us of how this is done.

**Example.** Add $\tfrac{5}{18} + \tfrac{7}{18}$.

The fractions have a common denominator, so add the numerators and place the
sum over the common denominator. Then factor and remove common factors to
simplify:

$$
\frac{5}{18} + \frac{7}{18} = \frac{5 + 7}{18} = \frac{12}{18}
= \frac{6 \cdot 2}{6 \cdot 3} = \frac{2}{3}
$$

Now we'll add rational expressions the same way.

**Example.** Add $\tfrac{3y}{4y - 3} + \tfrac{7}{4y - 3}$.

The fractions have a common denominator, so add the numerators and place the
sum over the common denominator:

$$\frac{3y}{4y - 3} + \frac{7}{4y - 3} = \frac{3y + 7}{4y - 3}$$

The numerator and denominator cannot be factored, so the fraction is
simplified.

Remember, we do not allow values that would make the denominator zero. What
value of $y$ should be excluded here? The value $y = \tfrac{3}{4}$, because it
makes $4y - 3$ equal to zero.

{{< fillin
  question="Add: $\tfrac{5x}{2x + 3} + \tfrac{2}{2x + 3}$."
  answer="\frac{5x+2}{2x+3}"
  answerDisplay="$\tfrac{5x + 2}{2x + 3}$"
  hint="The denominators match, so add the numerators $5x$ and $2$ over the common denominator $2x + 3$; the result does not factor."
>}}

When we add rational expressions, the sum often factors, letting us simplify.

**Example.** Add $\tfrac{7x + 12}{x + 3} + \tfrac{x^2}{x + 3}$.

The fractions have a common denominator, so add the numerators and place the
sum over the common denominator. Write the numerator in descending order,
factor it, then remove the common factor:

$$
\begin{array}{rcl}
\tfrac{7x + 12}{x + 3} + \tfrac{x^2}{x + 3}
&=& \tfrac{7x + 12 + x^2}{x + 3} \\[6pt]
&=& \tfrac{x^2 + 7x + 12}{x + 3} \\[6pt]
&=& \tfrac{(x + 3)(x + 4)}{x + 3} \\[6pt]
&=& x + 4
\end{array}
$$

## Subtract rational expressions with a common denominator

To subtract rational expressions, they must also have a common denominator.
When the denominators are the same, you subtract the numerators and place the
difference over the common denominator.

{{< callout type="info" >}}
  **Rational Expression Subtraction.** If $p$, $q$, and $r$ are polynomials
  where $r \neq 0$, then

  $$\frac{p}{r} - \frac{q}{r} = \frac{p - q}{r}$$

  To subtract rational expressions, subtract the numerators and place the
  difference over the common denominator.
{{< /callout >}}

We always simplify rational expressions. Be sure to factor, if possible, after
you subtract the numerators so you can identify any common factors.

**Example.** Subtract $\tfrac{n^2}{n - 10} - \tfrac{100}{n - 10}$.

The fractions have a common denominator, so subtract the numerators and place
the difference over the common denominator. Factor the numerator, then remove
the common factor:

$$
\begin{array}{rcl}
\tfrac{n^2}{n - 10} - \tfrac{100}{n - 10}
&=& \tfrac{n^2 - 100}{n - 10} \\[6pt]
&=& \tfrac{(n - 10)(n + 10)}{n - 10} \\[6pt]
&=& n + 10
\end{array}
$$

Be careful of the signs when you subtract a binomial!

**Example.** Subtract $\tfrac{y^2}{y - 6} - \tfrac{2y + 24}{y - 6}$.

Subtract the numerators over the common denominator. Because we are subtracting
a binomial, distribute the sign so both terms change. Then combine like terms,
factor, and remove the common factor:

$$
\begin{array}{rcl}
\tfrac{y^2}{y - 6} - \tfrac{2y + 24}{y - 6}
&=& \tfrac{y^2 - (2y + 24)}{y - 6} \\[6pt]
&=& \tfrac{y^2 - 2y - 24}{y - 6} \\[6pt]
&=& \tfrac{(y - 6)(y + 4)}{y - 6} \\[6pt]
&=& y + 4
\end{array}
$$

Notice how distributing the sign changed $-(2y + 24)$ into $-2y - 24$. Missing
that step is the most common mistake when subtracting rational expressions.

{{< fillin
  question="Subtract: $\tfrac{n^2}{n - 4} - \tfrac{n + 12}{n - 4}$."
  answer="n+3"
  answerDisplay="$n + 3$"
  hint="Distribute the subtraction sign: $n^2 - (n + 12) = n^2 - n - 12$. Factor the numerator and cancel the common factor with $n - 4$."
>}}

The numerators can be larger polynomials, but the process is the same:
subtract, distribute the sign, combine like terms, then factor and simplify.

**Example.** Subtract $\tfrac{5x^2 - 7x + 3}{x^2 - 3x - 18} - \tfrac{4x^2 + x - 9}{x^2 - 3x - 18}$.

Subtract the numerators over the common denominator, distribute the sign,
combine like terms, then factor and remove the common factor:

$$
\begin{array}{rcl}
\tfrac{5x^2 - 7x + 3}{x^2 - 3x - 18} - \tfrac{4x^2 + x - 9}{x^2 - 3x - 18}
&=& \tfrac{5x^2 - 7x + 3 - (4x^2 + x - 9)}{x^2 - 3x - 18} \\[6pt]
&=& \tfrac{5x^2 - 7x + 3 - 4x^2 - x + 9}{x^2 - 3x - 18} \\[6pt]
&=& \tfrac{x^2 - 8x + 12}{x^2 - 3x - 18} \\[6pt]
&=& \tfrac{(x - 2)(x - 6)}{(x + 3)(x - 6)} \\[6pt]
&=& \tfrac{x - 2}{x + 3}
\end{array}
$$

## Add and subtract rational expressions whose denominators are opposites

When the denominators of two rational expressions are opposites, it is easy to
get a common denominator. We just have to multiply one of the fractions by
$\tfrac{-1}{-1}$.

Let's see how this works with the numerical-looking example
$\tfrac{7}{d} + \tfrac{5}{-d}$. Multiply the second fraction by
$\tfrac{-1}{-1}$ so both denominators become $d$, then add:

$$
\frac{7}{d} + \frac{5}{-d}
= \frac{7}{d} + \frac{(-1)5}{(-1)(-d)}
= \frac{7}{d} + \frac{-5}{d}
= \frac{2}{d}
$$

**Example.** Add $\tfrac{4u - 1}{3u - 1} + \tfrac{u}{1 - 3u}$.

The denominators $3u - 1$ and $1 - 3u$ are opposites, so multiply the second
fraction by $\tfrac{-1}{-1}$. That turns its denominator into $3u - 1$; now the
denominators match, so add the numerators and simplify:

$$
\begin{array}{rcl}
\tfrac{4u - 1}{3u - 1} + \tfrac{u}{1 - 3u}
&=& \tfrac{4u - 1}{3u - 1} + \tfrac{(-1)u}{(-1)(1 - 3u)} \\[6pt]
&=& \tfrac{4u - 1}{3u - 1} + \tfrac{-u}{3u - 1} \\[6pt]
&=& \tfrac{4u - 1 - u}{3u - 1} \\[6pt]
&=& \tfrac{3u - 1}{3u - 1} \\[6pt]
&=& 1
\end{array}
$$

The same idea works for subtraction. Multiply the fraction with the opposite
denominator by $\tfrac{-1}{-1}$ first, and then subtract as usual — watching the
signs.

**Example.** Subtract $\tfrac{m^2 - 6m}{m^2 - 1} - \tfrac{3m + 2}{1 - m^2}$.

The denominators $m^2 - 1$ and $1 - m^2$ are opposites, so multiply the second
fraction by $\tfrac{-1}{-1}$. Then the denominators match; subtract the
numerators, distribute the sign, combine like terms, factor, and simplify:

$$
\begin{array}{rcl}
\tfrac{m^2 - 6m}{m^2 - 1} - \tfrac{3m + 2}{1 - m^2}
&=& \tfrac{m^2 - 6m}{m^2 - 1} - \tfrac{-(3m + 2)}{m^2 - 1} \\[6pt]
&=& \tfrac{m^2 - 6m}{m^2 - 1} - \tfrac{-3m - 2}{m^2 - 1} \\[6pt]
&=& \tfrac{m^2 - 6m - (-3m - 2)}{m^2 - 1} \\[6pt]
&=& \tfrac{m^2 - 6m + 3m + 2}{m^2 - 1} \\[6pt]
&=& \tfrac{m^2 - 3m + 2}{m^2 - 1} \\[6pt]
&=& \tfrac{(m - 1)(m - 2)}{(m - 1)(m + 1)} \\[6pt]
&=& \tfrac{m - 2}{m + 1}
\end{array}
$$

{{< fillin
  question="Subtract: $\tfrac{y^2 - 5y}{y^2 - 4} - \tfrac{6y - 6}{4 - y^2}$."
  answer="\frac{y+3}{y+2}"
  answerDisplay="$\tfrac{y + 3}{y + 2}$"
  hint="The denominators $y^2 - 4$ and $4 - y^2$ are opposites: multiply the second fraction by $\tfrac{-1}{-1}$ so both denominators are $y^2 - 4$, then subtract, factor, and simplify."
>}}

## Key terms

**common denominator** — a single denominator shared by two or more rational
expressions, allowing their numerators to be added or subtracted directly.
**opposite denominators** — denominators that are negatives of each other (such
as $3u - 1$ and $1 - 3u$); multiplying one fraction by $\tfrac{-1}{-1}$ turns
them into a common denominator.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.3: Add and Subtract Rational Expressions with a Common Denominator](https://openstax.org/books/elementary-algebra-2e/pages/8-3-add-and-subtract-rational-expressions-with-a-common-denominator) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked examples as prose with display equality chains, condensed the numerical warm-up into the addition rule, and folded the excluded-value discussion into the addition example; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
