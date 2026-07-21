---
title: Simplify Rational Expressions
description: >-
  Determining the values for which a rational expression is undefined,
  evaluating rational expressions, simplifying rational expressions by dividing
  out common factors, and simplifying rational expressions with opposite factors
  — adapted from OpenStax Elementary Algebra 2e, Section 8.1.
source_section: "8.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** determine the values for
  which a rational expression is undefined, evaluate rational expressions,
  simplify rational expressions, and simplify rational expressions with opposite
  factors.
{{< /callout >}}

In Chapter 1, we reviewed the properties of fractions and their operations. We
introduced rational numbers, which are just fractions where the numerators and
denominators are integers, and the denominator is not zero. In this chapter, we
will work with fractions whose numerators and denominators are polynomials. We
call these **rational expressions**.

{{< callout type="info" >}}
  **Rational expression.** A rational expression is an expression of the form
  $\tfrac{p(x)}{q(x)}$, where $p$ and $q$ are polynomials and $q \neq 0$.
{{< /callout >}}

Remember, division by $0$ is undefined. Here are some examples of rational
expressions:

$$-\frac{13}{42} \qquad \frac{7y}{8z} \qquad \frac{5x+2}{x^2-7} \qquad \frac{4x^2+3x-1}{2x-8}$$

Notice that the first rational expression, $-\tfrac{13}{42}$, is just a
fraction. Since a constant is a polynomial with degree zero, the ratio of two
constants is a rational expression, provided the denominator is not zero. We
will perform the same operations with rational expressions that we do with
fractions — simplify, add, subtract, multiply, divide, and use them in
applications.

## Determine the values for which a rational expression is undefined

When we work with a numerical fraction, it is easy to avoid dividing by zero,
because we can see the number in the denominator. In order to avoid dividing by
zero in a rational expression, we must not allow values of the variable that
will make the denominator be zero.

If the denominator is zero, the rational expression is undefined. The numerator
of a rational expression may be $0$ — but not the denominator. So before we
begin any operation with a rational expression, we examine it first to find the
values that would make the denominator zero.

{{< callout type="info" >}}
  **Determine the values for which a rational expression is undefined.**

  1. Set the denominator equal to zero.
  2. Solve the equation in the set of reals, if possible.
{{< /callout >}}

**Example.** Determine the values for which each rational expression is
undefined: (a) $\tfrac{9y}{x}$, (b) $\tfrac{4b-3}{2b+5}$, (c)
$\tfrac{x+4}{x^2+5x+6}$.

The expression will be undefined when the denominator is zero.

(a) Set the denominator equal to zero and solve for the variable:

$$x = 0$$

So $\tfrac{9y}{x}$ is undefined for $x = 0$.

(b) Set the denominator equal to zero and solve:

$$
\begin{array}{rcl}
2b + 5 &=& 0 \\
2b &=& -5 \\
b &=& -\tfrac{5}{2}
\end{array}
$$

So $\tfrac{4b-3}{2b+5}$ is undefined for $b = -\tfrac{5}{2}$.

(c) Set the denominator equal to zero, factor, and solve:

$$
\begin{array}{rcl}
x^2 + 5x + 6 &=& 0 \\
(x+2)(x+3) &=& 0 \\
x = -2 \ \text{or}\ x &=& -3
\end{array}
$$

So $\tfrac{x+4}{x^2+5x+6}$ is undefined for $x = -2$ or $x = -3$. Saying that
this rational expression is undefined for $x = -2$ or $x = -3$ is similar to
writing the phrase "void where prohibited" in contest rules.

{{< fillin
  question="Determine the value for which $\frac{3y}{x}$ is undefined."
  answer="0"
  hint="Set the denominator equal to zero and solve for $x$."
>}}

{{< fillin
  question="Determine the value for which $\frac{8n-5}{3n+1}$ is undefined. Enter the value of $n$."
  answer="-\frac{1}{3}"
  answerDisplay="$n = -\frac{1}{3}$"
  hint="Set $3n + 1 = 0$ and solve for $n$."
>}}

{{< fillin
  question="Determine the values for which $\frac{a+10}{a^2+4a+3}$ is undefined. Enter the values of $a$ from least to greatest, separated by commas."
  answer="-3, -1"
  answerDisplay="$a = -3,\ a = -1$"
  hint="Factor $a^2 + 4a + 3 = (a+1)(a+3)$, set it equal to zero, and solve."
>}}

## Evaluate rational expressions

To evaluate a rational expression, we substitute values of the variables into
the expression and simplify, just as we have for many other expressions in this
book.

**Example.** Evaluate $\tfrac{2x+3}{3x-5}$ for each value: (a) $x = 0$, (b)
$x = 2$, (c) $x = -3$.

(a) Substitute $0$ for $x$ and simplify:

$$\frac{2(0)+3}{3(0)-5} = -\frac{3}{5}$$

(b) Substitute $2$ for $x$ and simplify:

$$\frac{2(2)+3}{3(2)-5} = \frac{4+3}{6-5} = \frac{7}{1} = 7$$

(c) Substitute $-3$ for $x$ and simplify:

$$\frac{2(-3)+3}{3(-3)-5} = \frac{-6+3}{-9-5} = \frac{-3}{-14} = \frac{3}{14}$$

{{< fillin
  question="Evaluate $\frac{5x-1}{2x+1}$ for $x = 1$."
  answer="\frac{4}{3}"
  answerDisplay="$\frac{4}{3}$"
  hint="Substitute $1$ for $x$ in both the numerator and the denominator, then simplify."
>}}

{{< fillin
  question="Evaluate $\frac{5x-1}{2x+1}$ for $x = 0$."
  answer="-1"
  hint="Substitute $0$ for $x$: the numerator becomes $-1$ and the denominator becomes $1$."
>}}

Remember that a fraction is simplified when it has no common factors, other
than $1$, in its numerator and denominator. When we evaluate a rational
expression, we make sure to simplify the resulting fraction.

**Example.** Evaluate $\tfrac{x^2+8x+7}{x^2-4}$ for each value: (a) $x = 0$,
(b) $x = 2$, (c) $x = -1$.

(a) Substitute $0$ for $x$ and simplify:

$$\frac{(0)^2+8(0)+7}{(0)^2-4} = \frac{7}{-4} = -\frac{7}{4}$$

(b) Substitute $2$ for $x$ and simplify:

$$\frac{(2)^2+8(2)+7}{(2)^2-4} = \frac{4+16+7}{4-4} = \frac{27}{0}$$

This rational expression is undefined for $x = 2$.

(c) Substitute $-1$ for $x$ and simplify:

$$\frac{(-1)^2+8(-1)+7}{(-1)^2-4} = \frac{1-8+7}{1-4} = \frac{-7+7}{-3} = \frac{0}{-3} = 0$$

{{< fillin
  question="Evaluate $\frac{y^2+1}{2y-3}$ for $y = 1$. Give a fraction."
  answer="-2"
  hint="Substitute $1$ for $y$: the numerator is $2$ and the denominator is $-1$."
>}}

{{< fillin
  question="Evaluate $\frac{a^2+2ab+b^2}{3ab^2}$ for $a = 1$ and $b = 2$."
  answer="\frac{3}{4}"
  answerDisplay="$\frac{3}{4}$"
  hint="The numerator is $1 + 4 + 4 = 9$ and the denominator is $3(1)(4) = 12$; simplify $\frac{9}{12}$."
>}}

## Simplify rational expressions

Just like a fraction is considered simplified if there are no common factors,
other than $1$, in its numerator and denominator, a rational expression is
*simplified* if it has no common factors, other than $1$, in its numerator and
denominator.

{{< callout type="info" >}}
  **Simplified rational expression.** A rational expression is considered
  simplified if there are no common factors in its numerator and denominator.
{{< /callout >}}

For example, $\tfrac{2}{3}$ is simplified because there are no common factors of
$2$ and $3$, but $\tfrac{2x}{3x}$ is not simplified because $x$ is a common
factor of $2x$ and $3x$.

We use the **Equivalent Fractions Property** to simplify numerical fractions.
We restate it here, as we will also use it to simplify rational expressions.

{{< callout type="info" >}}
  **Equivalent Fractions Property.** If $a$, $b$, and $c$ are numbers where
  $b \neq 0$, $c \neq 0$, then

  $$\frac{a}{b} = \frac{a \cdot c}{b \cdot c} \qquad \text{and} \qquad \frac{a \cdot c}{b \cdot c} = \frac{a}{b}$$
{{< /callout >}}

Notice that the values that would make the denominators zero are specifically
disallowed. Every time we write a rational expression, we should make a similar
statement disallowing values that would make a denominator zero. However, to
let us focus on the work at hand, we will omit writing it in the examples.
Throughout this chapter we assume that all values that would make a denominator
zero are excluded.

Let's start by reviewing how we simplify numerical fractions.

**Example.** Simplify $-\tfrac{36}{63}$.

Rewrite the numerator and denominator showing the common factors, then simplify
using the Equivalent Fractions Property:

$$-\frac{36}{63} = -\frac{4 \cdot 9}{7 \cdot 9} = -\frac{4}{7}$$

The fraction $-\tfrac{4}{7}$ is simplified because there are no more common
factors.

**Example.** Simplify $\tfrac{3xy}{18x^2y^2}$ (with $x \neq 0$ and
$y \neq 0$).

Rewrite the numerator and denominator showing the common factors, then simplify:

$$\frac{3xy}{18x^2y^2} = \frac{1 \cdot 3xy}{6xy \cdot 3xy} = \frac{1}{6xy}$$

These are the same steps we took when we divided monomials.

To simplify rational expressions, we first write the numerator and denominator
in factored form. Then we remove the common factors using the Equivalent
Fractions Property.

Be very careful as you remove common factors. **Factors are multiplied to make a
product. You can remove a factor from a product. You cannot remove a term from a
sum.**

$$\frac{2 \cdot 3 \cdot 7}{3 \cdot 5 \cdot 7} = \frac{2}{5} \qquad\qquad \frac{3x(x-9)}{5(x-9)} = \frac{3x}{5} \qquad\qquad \frac{x+5}{x} \ \text{— no common factors}$$

In the first two, we removed a common factor from a product. But while there is
an $x$ in both the numerator and denominator of $\tfrac{x+5}{x}$, the $x$ in the
numerator is a *term* of a sum, so it cannot be removed. Removing the $x$'s
there would be like cancelling the $2$'s in the fraction $\tfrac{2+5}{2}$!

{{< callout type="info" >}}
  **Simplify a rational expression.**

  1. Factor the numerator and denominator completely.
  2. Simplify by dividing out common factors.
{{< /callout >}}

Usually, we leave the simplified rational expression in factored form. This way
it is easy to check that we have removed all the common factors.

**Example.** Simplify $\tfrac{2x+8}{5x+20}$.

Factor the numerator and denominator completely, then divide out the common
factor $x + 4$:

$$\frac{2x+8}{5x+20} = \frac{2(x+4)}{5(x+4)} = \frac{2}{5}$$

{{< fillin
  question="Simplify: $\frac{3x-6}{2x-4}$."
  answer="\frac{3}{2}"
  answerDisplay="$\frac{3}{2}$"
  hint="Factor $2$ from the numerator and $2$ from the denominator; the binomial $x - 2$ divides out."
>}}

**Example.** Simplify $\tfrac{x^2+5x+6}{x^2+8x+12}$.

Factor the numerator and denominator, then remove the common factor $x + 2$:

$$\frac{x^2+5x+6}{x^2+8x+12} = \frac{(x+2)(x+3)}{(x+2)(x+6)} = \frac{x+3}{x+6}$$

{{< fillin
  question="Simplify: $\frac{x^2-x-2}{x^2-3x+2}$."
  answer="\frac{x+1}{x-1}"
  answerDisplay="$\frac{x+1}{x-1}$"
  hint="Factor both: $(x-2)(x+1)$ over $(x-2)(x-1)$; the common factor $x - 2$ divides out."
>}}

**Example.** Simplify $\tfrac{y^2+y-42}{y^2-36}$.

Factor the numerator and denominator (the denominator is a difference of
squares), then remove the common factor $y - 6$:

$$\frac{y^2+y-42}{y^2-36} = \frac{(y+7)(y-6)}{(y+6)(y-6)} = \frac{y+7}{y+6}$$

{{< fillin
  question="Simplify: $\frac{x^2+x-6}{x^2-4}$."
  answer="\frac{x+3}{x+2}"
  answerDisplay="$\frac{x+3}{x+2}$"
  hint="Factor $(x+3)(x-2)$ over $(x+2)(x-2)$; the common factor $x - 2$ divides out."
>}}

**Example.** Simplify $\tfrac{p^3-2p^2+2p-4}{p^2-7p+10}$.

Factor the numerator by grouping and the denominator into a product of
binomials, then remove the common factor $p - 2$:

$$\frac{p^3-2p^2+2p-4}{p^2-7p+10} = \frac{p^2(p-2)+2(p-2)}{(p-5)(p-2)} = \frac{(p^2+2)(p-2)}{(p-5)(p-2)} = \frac{p^2+2}{p-5}$$

{{< fillin
  question="Simplify: $\frac{p^3-p^2+2p-2}{p^2+4p-5}$."
  answer="\frac{p^2+2}{p+5}"
  answerDisplay="$\frac{p^2+2}{p+5}$"
  hint="Factor the numerator by grouping into $(p^2+2)(p-1)$ and the denominator into $(p+5)(p-1)$."
>}}

When the numerator and denominator share a greatest common factor, factor it
out first.

**Example.** Simplify $\tfrac{2n^2-14n}{4n^2-16n-48}$.

Factor the numerator and denominator, first factoring out the GCF, then remove
the common factor $2$:

$$\frac{2n^2-14n}{4n^2-16n-48} = \frac{2n(n-7)}{4(n-6)(n+2)} = \frac{n(n-7)}{2(n-6)(n+2)}$$

{{< fillin
  question="Simplify: $\frac{2n^2-10n}{4n^2-16n-20}$."
  answer="\frac{n}{2(n+1)}"
  answerDisplay="$\frac{n}{2(n+1)}$"
  hint="Factor out the GCFs: $2n(n-5)$ over $4(n-5)(n+1)$, then divide out the common $n-5$ and the factor $2$."
>}}

**Example.** Simplify $\tfrac{m^3+8}{m^2-4}$.

Factor the numerator using the sum of cubes and the denominator using the
difference of squares, then remove the common factor $m + 2$:

$$\frac{m^3+8}{m^2-4} = \frac{(m+2)(m^2-2m+4)}{(m+2)(m-2)} = \frac{m^2-2m+4}{m-2}$$

{{< fillin
  question="Simplify: $\frac{x^3+8}{x^2-4}$."
  answer="\frac{x^2-2x+4}{x-2}"
  answerDisplay="$\frac{x^2-2x+4}{x-2}$"
  hint="Use the sum of cubes on the numerator and the difference of squares on the denominator; the common factor $x + 2$ divides out."
>}}

## Simplify rational expressions with opposite factors

Now we will see how to simplify a rational expression whose numerator and
denominator have **opposite factors**. Let's start with a numerical fraction,
say $\tfrac{7}{-7}$. We know this fraction simplifies to $-1$. We also recognize
that the numerator and denominator are opposites.

Recall that the opposite of $a$ is $-a$, and that $-a = -1 \cdot a$. So the
fraction $\tfrac{a}{-a}$, whose numerator and denominator are opposites,
simplifies like this:

$$\frac{a}{-a} = \frac{1 \cdot a}{-1 \cdot a} = \frac{1}{-1} = -1$$

In the same way, we can simplify $\tfrac{x-3}{-(x-3)} = -1$. But the opposite of
$x - 3$ can also be written differently: $-(x-3) = -x + 3 = 3 - x$. This means
the fraction $\tfrac{x-3}{3-x}$ also simplifies to $-1$. In general, the
opposite of $a - b$ is $b - a$.

{{< callout type="info" >}}
  **Opposites in a rational expression.** The opposite of $a - b$ is $b - a$.

  $$\frac{a-b}{b-a} = -1 \qquad a \neq b$$

  An expression and its opposite divide to $-1$.
{{< /callout >}}

**Example.** Simplify $\tfrac{x-8}{8-x}$.

Recognize that $x - 8$ and $8 - x$ are opposites, so the expression divides to:

$$\frac{x-8}{8-x} = -1$$

{{< fillin
  question="Simplify: $\frac{y-2}{2-y}$."
  answer="-1"
  hint="The numerator $y - 2$ and the denominator $2 - y$ are opposites."
>}}

Remember, the first step in simplifying a rational expression is to factor the
numerator and denominator completely.

**Example.** Simplify $\tfrac{14-2x}{x^2-49}$.

Factor the numerator and denominator. Recognize that $7 - x$ and $x - 7$ are
opposites, so $\tfrac{7-x}{x-7} = -1$:

$$\frac{14-2x}{x^2-49} = \frac{2(7-x)}{(x+7)(x-7)} = -\frac{2}{x+7}$$

The factor $\tfrac{7-x}{x-7}$ divides to $-1$, leaving $-\tfrac{2}{x+7}$.

{{< fillin
  question="Simplify: $\frac{10-2y}{y^2-25}$."
  answer="-\frac{2}{y+5}"
  answerDisplay="$-\frac{2}{y+5}$"
  hint="Factor: $\frac{2(5-y)}{(y+5)(y-5)}$; the opposites $5 - y$ and $y - 5$ divide to $-1$."
>}}

**Example.** Simplify $\tfrac{x^2-4x-32}{64-x^2}$.

Factor the numerator and denominator, recognize the opposite factors $x - 8$ and
$8 - x$, and simplify:

$$\frac{x^2-4x-32}{64-x^2} = \frac{(x-8)(x+4)}{(8-x)(8+x)} = -\frac{x+4}{x+8}$$

The factor $\tfrac{x-8}{8-x}$ divides to $-1$, leaving $-\tfrac{x+4}{x+8}$.

{{< fillin
  question="Simplify: $\frac{x^2-4x-5}{25-x^2}$."
  answer="-\frac{x+1}{x+5}"
  answerDisplay="$-\frac{x+1}{x+5}$"
  hint="Factor $\frac{(x-5)(x+1)}{(5-x)(5+x)}$; the opposites $x - 5$ and $5 - x$ divide to $-1$."
>}}

## Key terms

**rational expression** — an expression of the form $\tfrac{p(x)}{q(x)}$, where
$p$ and $q$ are polynomials and $q \neq 0$. **undefined** — a rational
expression is undefined for any value of the variable that makes its denominator
zero. **simplified rational expression** — a rational expression that has no
common factors, other than $1$, in its numerator and denominator. **opposites**
— two expressions such as $a - b$ and $b - a$; a factor and its opposite divide
to $-1$.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 8.1: Simplify Rational Expressions](https://openstax.org/books/elementary-algebra-2e/pages/8-1-simplify-rational-expressions) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the two-column worked examples as prose with display equality chains; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
