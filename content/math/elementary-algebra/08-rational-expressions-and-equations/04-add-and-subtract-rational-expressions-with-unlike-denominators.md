---
title: Add and Subtract Rational Expressions with Unlike Denominators
description: >-
  Finding the least common denominator of rational expressions, rewriting them
  as equivalent fractions with that denominator, and then adding and subtracting
  rational expressions with unlike denominators — adapted from OpenStax
  Elementary Algebra 2e, Section 8.4.
source_section: "8.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the least common denominator of rational expressions
- Find equivalent rational expressions
- Add rational expressions with different denominators
- Subtract rational expressions with different denominators
{{< /callout >}}

## Find the least common denominator of rational expressions

When we add or subtract rational expressions with unlike denominators, we first
need to get a common denominator. Reviewing how we did this with numerical
fractions tells us exactly what to do with rational expressions.

Look at the numerical example $\tfrac{7}{12} + \tfrac{5}{18}$. Because the
denominators are not the same, the first step is to find the least common
denominator (LCD) — the least common multiple of the denominators, the smallest
number we can use as a common denominator.

To find the LCD of $12$ and $18$, we factor each number into primes, lining up
any common primes in columns. Then we "bring down" one prime from each column
and multiply the factors:

$$
\begin{array}{rcl}
12 &=& 2 \cdot 2 \cdot 3 \\
18 &=& 2 \cdot 3 \cdot 3 \\[4pt]
\text{LCD} &=& 2 \cdot 2 \cdot 3 \cdot 3 \\
\text{LCD} &=& 36
\end{array}
$$

We do the same thing for rational expressions. However, we leave the LCD in
factored form.

{{< callout type="info" >}}
  **How to find the least common denominator of rational expressions.**

  1. Factor each expression completely.
  2. List the factors of each expression. Match factors vertically when
     possible.
  3. Bring down the columns.
  4. Multiply the factors.
{{< /callout >}}

Remember, we always exclude values that would make a denominator zero.

**Example.** Find the LCD for $\tfrac{8}{x^2 - 2x - 3}$ and
$\tfrac{3x}{x^2 + 4x + 3}$.

Factor each denominator completely, lining up common factors. Then bring down
the columns and multiply:

$$
\begin{array}{rcl}
x^2 - 2x - 3 &=& (x + 1)(x - 3) \\
x^2 + 4x + 3 &=& (x + 1)(x + 3) \\[4pt]
\text{LCD} &=& (x + 1)(x - 3)(x + 3)
\end{array}
$$

The LCD is $(x + 1)(x - 3)(x + 3)$.

{{< fillin
  question="Find the LCD for $\tfrac{2}{x^2 - x - 12}$ and $\tfrac{1}{x^2 - 16}$. Leave your answer in factored form."
  answer="(x-4)(x+4)(x+3)"
  answerForm="factored-completely"
  answerDisplay="$(x - 4)(x + 4)(x + 3)$"
  hint="Factor each denominator completely, line up the factors they share in columns, bring down one factor from each column, and multiply."
>}}

## Find equivalent rational expressions

When we add numerical fractions, once we find the LCD we rewrite each fraction
as an equivalent fraction with the LCD:

$$
\frac{7}{12} + \frac{5}{18}
= \frac{7 \cdot 3}{12 \cdot 3} + \frac{5 \cdot 2}{18 \cdot 2}
= \frac{21}{36} + \frac{10}{36}
$$

We do the same thing for rational expressions. To rewrite one with a new
denominator, we multiply its numerator and denominator by whatever "missing"
factors the LCD supplies.

**Example.** Rewrite $\tfrac{8}{x^2 - 2x - 3}$ and $\tfrac{3x}{x^2 + 4x + 3}$ as
equivalent rational expressions with denominator $(x + 1)(x - 3)(x + 3)$.

Factor each denominator, then multiply the numerator and denominator by the
factor the LCD supplies that is missing from that denominator. Finally simplify
each numerator:

$$
\begin{array}{rcl}
\tfrac{8}{x^2 - 2x - 3}
&=& \tfrac{8}{(x + 1)(x - 3)} = \tfrac{8(x + 3)}{(x + 1)(x - 3)(x + 3)}
= \tfrac{8x + 24}{(x + 1)(x - 3)(x + 3)} \\[8pt]
\tfrac{3x}{x^2 + 4x + 3}
&=& \tfrac{3x}{(x + 1)(x + 3)} = \tfrac{3x(x - 3)}{(x + 1)(x + 3)(x - 3)}
= \tfrac{3x^2 - 9x}{(x + 1)(x - 3)(x + 3)}
\end{array}
$$

{{< fillin
  question="Rewrite $\tfrac{x}{x^2 + 8x + 15}$ as an equivalent rational expression with denominator $(x + 3)(x + 5)(x + 6)$. Enter the new numerator, multiplied out."
  answer="x^2+6x"
  answerForm="expanded distributed no-like-terms"
  answerDisplay="$x^2 + 6x$ (from $x(x + 6)$)"
  hint="Factor the denominator, find the factor of the new denominator that it is missing, multiply the numerator by that factor, and multiply out."
>}}

## Add rational expressions with different denominators

Now we have all the steps we need to add rational expressions with different
denominators.

{{< callout type="info" >}}
  **How to add rational expressions.**

  1. Determine if the expressions have a common denominator. If not, find the
     LCD and rewrite each rational expression as an equivalent rational
     expression with the LCD.
  2. Add the rational expressions.
  3. Simplify, if possible.
{{< /callout >}}

We start by adding expressions whose denominators are monomials.

**Example.** Add $\tfrac{5}{12x^2 y} + \tfrac{4}{21xy^2}$.

The denominators are not the same, so find the LCD. Factor each denominator,
line up common factors, and multiply:

$$
\begin{array}{rcl}
12x^2 y &=& 2 \cdot 2 \cdot 3 \cdot x \cdot x \cdot y \\
21xy^2 &=& 3 \cdot 7 \cdot x \cdot y \cdot y \\[4pt]
\text{LCD} &=& 2 \cdot 2 \cdot 3 \cdot 7 \cdot x \cdot x \cdot y \cdot y = 84x^2 y^2
\end{array}
$$

Rewrite each rational expression with the LCD, then add the numerators over the
common denominator:

$$
\begin{array}{rcl}
\tfrac{5}{12x^2 y} + \tfrac{4}{21xy^2}
&=& \tfrac{5 \cdot 7y}{12x^2 y \cdot 7y} + \tfrac{4 \cdot 4x}{21xy^2 \cdot 4x} \\[6pt]
&=& \tfrac{35y}{84x^2 y^2} + \tfrac{16x}{84x^2 y^2} \\[6pt]
&=& \tfrac{16x + 35y}{84x^2 y^2}
\end{array}
$$

There are no factors common to the numerator and denominator, so the fraction
cannot be simplified.

Now we are ready to tackle polynomial denominators.

**Example.** Add $\tfrac{3}{x - 3} + \tfrac{2}{x - 2}$.

The expressions do not have a common denominator. The denominators $x - 3$ and
$x - 2$ are already prime, so the LCD is $(x - 3)(x - 2)$. Rewrite each
expression with the LCD — keep the denominators factored — then add the
numerators and simplify:

$$
\begin{array}{rcl}
\tfrac{3}{x - 3} + \tfrac{2}{x - 2}
&=& \tfrac{3(x - 2)}{(x - 3)(x - 2)} + \tfrac{2(x - 3)}{(x - 2)(x - 3)} \\[6pt]
&=& \tfrac{3x - 6}{(x - 3)(x - 2)} + \tfrac{2x - 6}{(x - 3)(x - 2)} \\[6pt]
&=& \tfrac{3x - 6 + 2x - 6}{(x - 3)(x - 2)} \\[6pt]
&=& \tfrac{5x - 12}{(x - 3)(x - 2)}
\end{array}
$$

Because $5x - 12$ cannot be factored, the answer is simplified.

{{< fillin
  question="Add: $\tfrac{2}{x - 2} + \tfrac{5}{x + 3}$."
  answer="\frac{7x-4}{(x+3)(x-2)}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$\tfrac{7x - 4}{(x + 3)(x - 2)}$"
  hint="Find the LCD of the two denominators, rewrite each fraction as an equivalent one over the LCD, add the numerators, and check for common factors."
>}}

The next example has polynomial denominators that factor. Factor first, find the
LCD, and be careful when a numerator does not simplify.

**Example.** Add $\tfrac{8}{x^2 - 2x - 3} + \tfrac{3x}{x^2 + 4x + 3}$.

Factor each denominator: $x^2 - 2x - 3 = (x + 1)(x - 3)$ and
$x^2 + 4x + 3 = (x + 1)(x + 3)$, so the LCD is $(x + 1)(x - 3)(x + 3)$. Rewrite
each expression with the LCD, add the numerators, and simplify:

$$
\begin{array}{rcl}
\tfrac{8}{x^2 - 2x - 3} + \tfrac{3x}{x^2 + 4x + 3}
&=& \tfrac{8(x + 3)}{(x + 1)(x - 3)(x + 3)} + \tfrac{3x(x - 3)}{(x + 1)(x + 3)(x - 3)} \\[6pt]
&=& \tfrac{8x + 24}{(x + 1)(x - 3)(x + 3)} + \tfrac{3x^2 - 9x}{(x + 1)(x + 3)(x - 3)} \\[6pt]
&=& \tfrac{3x^2 - x + 24}{(x + 1)(x - 3)(x + 3)}
\end{array}
$$

The numerator $3x^2 - x + 24$ is prime, so there are no common factors and the
answer is simplified.

## Subtract rational expressions with different denominators

The process we use to subtract rational expressions with different denominators
is the same as for addition. We just have to be very careful of the signs when
subtracting the numerators.

{{< callout type="info" >}}
  **How to add or subtract rational expressions.**

  1. Determine if the expressions have a common denominator. If not, find the
     LCD and rewrite each rational expression as an equivalent rational
     expression with the LCD.
  2. Add or subtract the rational expressions.
  3. Simplify, if possible.
{{< /callout >}}

**Example.** Subtract $\tfrac{x}{x - 3} - \tfrac{x - 2}{x + 3}$.

The denominators $x - 3$ and $x + 3$ are prime, so the LCD is
$(x - 3)(x + 3)$. Rewrite each expression with the LCD, then subtract the
numerators — distributing the sign carefully — and simplify:

$$
\begin{array}{rcl}
\tfrac{x}{x - 3} - \tfrac{x - 2}{x + 3}
&=& \tfrac{x(x + 3)}{(x - 3)(x + 3)} - \tfrac{(x - 2)(x - 3)}{(x + 3)(x - 3)} \\[6pt]
&=& \tfrac{x^2 + 3x}{(x - 3)(x + 3)} - \tfrac{x^2 - 5x + 6}{(x - 3)(x + 3)} \\[6pt]
&=& \tfrac{x^2 + 3x - (x^2 - 5x + 6)}{(x - 3)(x + 3)} \\[6pt]
&=& \tfrac{x^2 + 3x - x^2 + 5x - 6}{(x - 3)(x + 3)} \\[6pt]
&=& \tfrac{8x - 6}{(x - 3)(x + 3)} = \tfrac{2(4x - 3)}{(x - 3)(x + 3)}
\end{array}
$$

The numerator and denominator have no factors in common, so the answer is
simplified.

The next example has a denominator that factors, letting the final fraction
simplify.

**Example.** Subtract $\tfrac{8y}{y^2 - 16} - \tfrac{4}{y - 4}$.

Factor $y^2 - 16 = (y - 4)(y + 4)$, so the LCD is $(y - 4)(y + 4)$. Rewrite the
second fraction with the LCD, subtract the numerators, then factor and remove
the common factor:

$$
\begin{array}{rcl}
\tfrac{8y}{y^2 - 16} - \tfrac{4}{y - 4}
&=& \tfrac{8y}{(y - 4)(y + 4)} - \tfrac{4(y + 4)}{(y - 4)(y + 4)} \\[6pt]
&=& \tfrac{8y - (4y + 16)}{(y - 4)(y + 4)} \\[6pt]
&=& \tfrac{4y - 16}{(y - 4)(y + 4)} \\[6pt]
&=& \tfrac{4(y - 4)}{(y - 4)(y + 4)} \\[6pt]
&=& \tfrac{4}{y + 4}
\end{array}
$$

When one expression is not in fraction form, we can write it as a fraction with
denominator $1$.

**Example.** Subtract $\tfrac{5c + 4}{c - 2} - 3$.

Write $3$ as $\tfrac{3}{1}$ so there are two rational expressions. The LCD of
$c - 2$ and $1$ is $c - 2$; rewrite $\tfrac{3}{1}$ with that denominator,
subtract, and check for common factors:

$$
\begin{array}{rcl}
\tfrac{5c + 4}{c - 2} - 3
&=& \tfrac{5c + 4}{c - 2} - \tfrac{3(c - 2)}{c - 2} \\[6pt]
&=& \tfrac{5c + 4 - (3c - 6)}{c - 2} \\[6pt]
&=& \tfrac{2c + 10}{c - 2} = \tfrac{2(c + 5)}{c - 2}
\end{array}
$$

There are no common factors, so the rational expression is simplified.

{{< fillin
  question="Subtract: $\tfrac{2x}{x^2 - 4} - \tfrac{1}{x + 2}$."
  answer="\frac{1}{x-2}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$\tfrac{1}{x - 2}$"
  hint="Factor the first denominator to find the LCD, rewrite the second fraction over it, and subtract the whole second numerator in parentheses. Then factor the numerator and remove any common factors."
>}}

## Key terms

**least common denominator (LCD)** — the least common multiple of the
denominators of two or more rational expressions; found by factoring each
denominator completely and multiplying together each factor the greatest number
of times it appears in any one denominator. **equivalent rational expression** —
a rational expression rewritten with a new denominator by multiplying its
numerator and denominator by the same nonzero factor, so its value is unchanged.

## Practice

### Find the least common denominator of rational expressions

{{< fillin
  question="Find the LCD for $\tfrac{5}{x^2 - 2x - 8}$ and $\tfrac{2x}{x^2 - x - 12}$. Leave your answer in factored form."
  answer="(x-4)(x+2)(x+3)"
  answerForm="factored-completely"
  answerDisplay="$(x - 4)(x + 2)(x + 3)$"
  hint="Factor each denominator completely, line up the factors they share in columns, bring down one factor from each column, and multiply."
>}}

{{< fillin
  question="Find the LCD for $\tfrac{4}{b^2 + 6b + 9}$ and $\tfrac{2b}{b^2 - 2b - 15}$. Leave your answer in factored form."
  answer="(b+3)(b+3)(b-5)"
  answerForm="factored-completely"
  answerDisplay="$(b + 3)(b + 3)(b - 5)$"
  hint="Factor each denominator completely and list every factor, repeats included. Line up shared factors in columns, bring down each column, and multiply."
>}}

### Find equivalent rational expressions

{{< fillin
  question="Rewrite $\tfrac{9}{z^2 + 2z - 8}$ with the LCD $(z - 2)(z + 4)(z + 2)$. Enter the new numerator, multiplied out."
  answer="9z+18"
  answerForm="expanded distributed no-like-terms"
  answerDisplay="$9z + 18$ (from $9(z + 2)$)"
  hint="Factor the denominator, find the factor of the LCD that it is missing, multiply the numerator by that factor, and multiply out."
>}}

{{< fillin
  question="Rewrite $\tfrac{4z}{z^2 - 4}$ with the LCD $(z - 2)(z + 4)(z + 2)$. Enter the new numerator, multiplied out."
  answer="4z^2+16z"
  answerForm="expanded distributed no-like-terms"
  answerDisplay="$4z^2 + 16z$ (from $4z(z + 4)$)"
  hint="Factor the denominator, find the factor of the LCD that it is missing, multiply the numerator by that factor, and multiply out."
>}}

### Add rational expressions with different denominators

{{< fillin
  question="Add: $\tfrac{7}{10x^2 y} + \tfrac{4}{15xy^2}$."
  answer="\frac{21y+8x}{30x^2y^2}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$\tfrac{21y + 8x}{30x^2 y^2}$"
  hint="Factor each monomial denominator into primes and variables to find the LCD, rewrite each fraction over it, and add the numerators."
>}}

{{< fillin
  question="Add: $\tfrac{3}{r + 4} + \tfrac{2}{r - 5}$."
  answer="\frac{5r-7}{(r+4)(r-5)}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$\tfrac{5r - 7}{(r + 4)(r - 5)}$"
  hint="Find the LCD of the two denominators, rewrite each fraction as an equivalent one over the LCD, add the numerators, and check for common factors."
>}}

{{< fillin
  question="Add: $\tfrac{3}{n^2 + 3n - 18} + \tfrac{4n}{n^2 + 8n + 12}$."
  answer="\frac{4n^2-9n+6}{(n-3)(n+6)(n+2)}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$\tfrac{4n^2 - 9n + 6}{(n - 3)(n + 6)(n + 2)}$"
  hint="Factor both denominators to find the LCD, rewrite each fraction over it, add the numerators, and check whether the numerator factors."
>}}

### Subtract rational expressions with different denominators

{{< fillin
  question="Subtract: $\tfrac{t}{t - 6} - \tfrac{t - 2}{t + 6}$."
  answer="\frac{2(7t-6)}{(t-6)(t+6)}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$\tfrac{2(7t - 6)}{(t - 6)(t + 6)}$"
  hint="Find the LCD, rewrite each fraction over it, and subtract the whole second numerator in parentheses so the sign reaches every term. Then factor the numerator to check for common factors."
>}}

{{< fillin
  question="Subtract: $\tfrac{6c}{c^2 - 25} - \tfrac{3}{c + 5}$."
  answer="\frac{3}{c-5}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$\tfrac{3}{c - 5}$"
  hint="Factor the first denominator to find the LCD, rewrite the second fraction over it, and subtract. Then factor the numerator and remove any common factors."
>}}

{{< fillin
  question="Subtract: $\tfrac{5v - 2}{v + 3} - 4$."
  answer="\frac{v-14}{v+3}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$\tfrac{v - 14}{v + 3}$"
  hint="Write the whole number as a fraction with denominator $1$ and rewrite it over the LCD. Then subtract the numerators, distributing the sign, and check for common factors."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.4: Add and Subtract Rational Expressions with Unlike Denominators](https://openstax.org/books/elementary-algebra-2e/pages/8-4-add-and-subtract-rational-expressions-with-unlike-denominators) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked examples as prose with display equality chains, condensed the numerical warm-ups and the "How To" procedures, and merged the subtract and add-or-subtract procedure boxes into one; omitted the Be Prepared quiz, three worked examples (adding $\tfrac{2a}{2ab+b^2}+\tfrac{3a}{4a^2-b^2}$, subtracting $\tfrac{-3n-9}{n^2+n-6}-\tfrac{n+3}{2-n}$, and simplifying the three-term $\tfrac{2u}{u-1}+\tfrac{1}{u}-\tfrac{2u-1}{u^2-u}$), the Key Concepts summary (its procedures appear as callouts in the body), the Self Check checklist, media links, and unselected end-of-section exercises; added a Key terms list; converted the practice problems ("Try Its") into interactive exercises with instant feedback; adapted selected end-of-section exercises into the interactive Practice block; posed each equivalent-expression exercise one fraction at a time, asking for its new numerator multiplied out; and asked for the LCDs in factored form.</small>
