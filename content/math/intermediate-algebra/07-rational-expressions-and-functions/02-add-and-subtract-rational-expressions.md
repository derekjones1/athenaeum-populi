---
title: Add and Subtract Rational Expressions
description: >-
  Add and subtract rational expressions with common, opposite, and unlike
  denominators; find least common denominators; and combine rational functions.
source_section: "7.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** add and subtract rational
  expressions with a common denominator; add and subtract rational expressions
  whose denominators are opposites; find the least common denominator of
  rational expressions; add and subtract rational expressions with unlike
  denominators; and add and subtract rational functions.
{{< /callout >}}

## Add and subtract rational expressions with a common denominator

What is the first step you take when you add numerical fractions? You check if
they have a common denominator. If they do, you add the numerators and place the
sum over the common denominator. If they do not have a common denominator, you
find one before you add.

It is the same with rational expressions. To add rational expressions, they
must have a common denominator. When the denominators are the same, you add the
numerators and place the sum over the common denominator.

{{< callout type="info" >}}
  **Rational expression addition and subtraction.** If $p$, $q$, and $r$ are
  polynomials where $r \ne 0$, then

  $$\frac{p}{r}+\frac{q}{r}=\frac{p+q}{r} \quad\text{and}\quad \frac{p}{r}-\frac{q}{r}=\frac{p-q}{r}.$$
{{< /callout >}}

To add or subtract rational expressions with a common denominator, add or
subtract the numerators and place the result over the common denominator. We
always simplify rational expressions. Be sure to factor, if possible, after you
subtract the numerators so you can identify any common factors. Remember, too,
we do not allow values that would make the denominator zero.

**Example.** Add:

$$\frac{11x+28}{x+4}+\frac{x^2}{x+4}.$$

Since the denominator is $x+4$, we must exclude $x=-4$.

$$
\begin{array}{lrcl}
\text{Add the numerators over the common denominator.} &&& \tfrac{11x+28+x^2}{x+4} \\[10pt]
\text{Write the degrees in descending order.} &&& \tfrac{x^2+11x+28}{x+4} \\[10pt]
\text{Factor the numerator.} &&& \tfrac{(x+4)(x+7)}{x+4} \\[10pt]
\text{Remove common factors and simplify.} &&& x+7
\end{array}
$$

The expression simplifies to $x+7$, but the original expression had a
denominator of $x+4$, so $x\ne -4$.

{{< fillin
  question="Simplify $\tfrac{9x+14}{x+7}+\tfrac{x^2}{x+7}$."
  answer="x+2"
  hint="Add the numerators over the common denominator, then factor the numerator."
>}}

{{< fillin
  question="Simplify $\tfrac{x^2+8x}{x+5}+\tfrac{15}{x+5}$."
  answer="x+3"
  hint="Combine the numerators, then factor $x^2+8x+15$."
>}}

To subtract rational expressions, they must also have a common denominator.
When the denominators are the same, you subtract the numerators and place the
difference over the common denominator. Be careful of the signs when you
subtract a binomial or trinomial.

**Example.** Subtract:

$$\frac{5x^2-7x+3}{x^2-3x-18}-\frac{4x^2+x-9}{x^2-3x-18}.$$

$$
\begin{array}{lrcl}
\text{Subtract the numerators.} &&& \tfrac{5x^2-7x+3-(4x^2+x-9)}{x^2-3x-18} \\[10pt]
\text{Distribute the subtraction sign.} &&& \tfrac{5x^2-7x+3-4x^2-x+9}{x^2-3x-18} \\[10pt]
\text{Combine like terms.} &&& \tfrac{x^2-8x+12}{x^2-3x-18} \\[10pt]
\text{Factor the numerator and denominator.} &&& \tfrac{(x-2)(x-6)}{(x+3)(x-6)} \\[10pt]
\text{Remove common factors.} &&& \tfrac{x-2}{x+3}
\end{array}
$$

{{< fillin
  question="Subtract $\tfrac{4x^2-11x+8}{x^2-3x+2}-\tfrac{3x^2+x-3}{x^2-3x+2}$."
  answer="\frac{x-11}{x-2}"
  answerDisplay="$\tfrac{x-11}{x-2}$"
  hint="Subtract the entire second numerator, combine like terms, and factor both numerator and denominator."
>}}

{{< fillin
  question="Subtract $\tfrac{6x^2-x+20}{x^2-81}-\tfrac{5x^2+11x-7}{x^2-81}$."
  answer="\frac{x-3}{x+9}"
  answerDisplay="$\tfrac{x-3}{x+9}$"
  hint="Distribute the subtraction sign, combine like terms, then factor."
>}}

## Add and subtract rational expressions whose denominators are opposites

When the denominators of two rational expressions are opposites, it is easy to
get a common denominator. We just have to multiply one of the fractions by
$\tfrac{-1}{-1}$. For example,

$$
\begin{array}{lrcl}
\text{Multiply the second fraction by }\tfrac{-1}{-1}. & \tfrac{7}{d}+\tfrac{5}{-d} &=& \tfrac{7}{d}+\tfrac{(-1)5}{(-1)(-d)} \\[10pt]
\text{The denominators are the same.} &&& \tfrac{7}{d}+\tfrac{-5}{d} \\[10pt]
\text{Simplify.} &&& \tfrac{2}{d}
\end{array}
$$

Be careful with the signs as you work with opposites when the fractions are
being subtracted.

**Example.** Subtract:

$$\frac{m^2-6m}{m^2-1}-\frac{3m+2}{1-m^2}.$$

$$
\begin{array}{lrcl}
\text{Multiply the second fraction by }\tfrac{-1}{-1}. &&& \tfrac{m^2-6m}{m^2-1}-\tfrac{-1(3m+2)}{-1(1-m^2)} \\[10pt]
\text{Simplify the second fraction.} &&& \tfrac{m^2-6m}{m^2-1}-\tfrac{-3m-2}{m^2-1} \\[10pt]
\text{Subtract the numerators and distribute.} &&& \tfrac{m^2-6m+3m+2}{m^2-1} \\[10pt]
\text{Combine like terms.} &&& \tfrac{m^2-3m+2}{m^2-1} \\[10pt]
\text{Factor and remove common factors.} &&& \tfrac{(m-1)(m-2)}{(m-1)(m+1)}=\tfrac{m-2}{m+1}
\end{array}
$$

{{< fillin
  question="Subtract $\tfrac{y^2-5y}{y^2-4}-\tfrac{6y-6}{4-y^2}$."
  answer="\frac{y+3}{y+2}"
  answerDisplay="$\tfrac{y+3}{y+2}$"
  hint="The denominators are opposites. Multiply the second rational expression by $\tfrac{-1}{-1}$ before subtracting."
>}}

{{< fillin
  question="Subtract $\tfrac{2n^2+8n-1}{n^2-1}-\tfrac{n^2-7n-1}{1-n^2}$."
  answer="\frac{3n-2}{n-1}"
  answerDisplay="$\tfrac{3n-2}{n-1}$"
  hint="Rewrite the second denominator as $n^2-1$ by multiplying its fraction by $\tfrac{-1}{-1}$."
>}}

## Find the least common denominator of rational expressions

When we add or subtract rational expressions with unlike denominators, we need
common denominators. Recall the numerical example $\tfrac{7}{12}+\tfrac{5}{18}$.
We factor $12$ and $18$ into primes, line up common primes in columns, and use
one prime from each column. Thus the LCD is $2\cdot2\cdot3\cdot3=36$, and
$\tfrac{7}{12}=\tfrac{21}{36}$ while $\tfrac{5}{18}=\tfrac{10}{36}$. We do
the same thing for rational expressions, but leave the LCD in factored form.

{{< callout type="info" >}}
  **Find the least common denominator of rational expressions.**

  1. Factor each denominator completely.
  2. List the factors of each denominator. Match factors vertically when possible.
  3. Bring down the columns by including all factors, but do not include common factors twice.
  4. Write the LCD as the product of the factors.
{{< /callout >}}

Remember, we always exclude values that would make the denominator zero.

**Example.** (a) Find the LCD for $\tfrac{8}{x^2-2x-3}$ and
$\tfrac{3x}{x^2+4x+3}$. (b) Rewrite them as equivalent rational expressions
with the lowest common denominator.

Factor the denominators and line up common factors:

$$
\begin{array}{rcl}
x^2-2x-3 &=& (x+1)(x-3) \\[4pt]
x^2+4x+3 &=& (x+1)(x+3) \\[4pt]
\text{LCD} &=& (x+1)(x-3)(x+3).
\end{array}
$$

Each expression needs its missing LCD factor:

$$
\frac{8}{(x+1)(x-3)}=\frac{8(x+3)}{(x+1)(x-3)(x+3)},
\quad
\frac{3x}{(x+1)(x+3)}=\frac{3x(x-3)}{(x+1)(x+3)(x-3)}.
$$

After simplifying the numerators, the equivalent expressions are
$\tfrac{8x+24}{(x+1)(x-3)(x+3)}$ and
$\tfrac{3x^2-9x}{(x+1)(x+3)(x-3)}$.

{{< fillin
  question="Find the LCD for $\tfrac{2}{x^2-x-12}$ and $\tfrac{1}{x^2-16}$."
  answer="(x-4)(x+3)(x+4)"
  hint="Factor both denominators completely and include each distinct factor the greatest number of times it occurs."
>}}

The equivalent expressions are

$$\frac{2x+8}{(x-4)(x+3)(x+4)}\quad\text{and}\quad\frac{x+3}{(x-4)(x+3)(x+4)}.$$

{{< fillin
  question="Find the LCD for $\tfrac{3x}{x^2-3x-10}$ and $\tfrac{5}{x^2+3x+2}$."
  answer="(x+2)(x-5)(x+1)"
  hint="Factor both quadratic denominators, match their common factor, and include it only once."
>}}

The equivalent expressions are

$$\frac{3x^2+3x}{(x+2)(x-5)(x+1)}\quad\text{and}\quad\frac{5x-25}{(x+2)(x-5)(x+1)}.$$

## Add and subtract rational expressions with unlike denominators

Now we have all the steps we need to add or subtract rational expressions with
unlike denominators.

**Example.** Add $\tfrac{3}{x-3}+\tfrac{2}{x-2}$.

The expressions do not have a common denominator. The LCD is $(x-3)(x-2)$.
Rewrite each expression with the LCD, keeping the denominators factored:

$$
\frac{3(x-2)}{(x-3)(x-2)}+\frac{2(x-3)}{(x-2)(x-3)}
=\frac{3x-6+2x-6}{(x-3)(x-2)}
=\frac{5x-12}{(x-3)(x-2)}.
$$

Because $5x-12$ cannot be factored, the answer is simplified.

{{< fillin
  question="Add $\tfrac{2}{x-2}+\tfrac{5}{x+3}$."
  answer="\frac{7x-4}{(x-2)(x+3)}"
  answerDisplay="$\tfrac{7x-4}{(x-2)(x+3)}$"
  hint="The LCD is $(x-2)(x+3)$. Multiply each numerator by the factor missing from its denominator."
>}}

{{< fillin
  question="Add $\tfrac{4}{m+3}+\tfrac{3}{m+4}$."
  answer="\frac{7m+25}{(m+3)(m+4)}"
  answerDisplay="$\tfrac{7m+25}{(m+3)(m+4)}$"
  hint="Use $(m+3)(m+4)$ as the LCD, rewrite both fractions, and combine the numerators."
>}}

{{< callout type="info" >}}
  **Add or subtract rational expressions.**

  1. Determine if the expressions have a common denominator.
     - If yes, go to step 2.
     - If no, rewrite each rational expression with the LCD: find the LCD, then rewrite each expression as an equivalent rational expression with the LCD.
  2. Add or subtract the rational expressions.
  3. Simplify, if possible.
{{< /callout >}}

Avoid the temptation to simplify too soon. Keep the denominators factored and
simplify only after you have combined the numerators.

**Example.** Add:

$$\frac{8}{x^2-2x-3}+\frac{3x}{x^2+4x+3}.$$

The denominators factor as $(x+1)(x-3)$ and $(x+1)(x+3)$, so the LCD is
$(x+1)(x-3)(x+3)$.

$$
\begin{aligned}
\frac{8}{x^2-2x-3}+\frac{3x}{x^2+4x+3}
&=\frac{8(x+3)}{(x+1)(x-3)(x+3)}+\frac{3x(x-3)}{(x+1)(x+3)(x-3)} \\
&=\frac{8x+24+3x^2-9x}{(x+1)(x-3)(x+3)} \\
&=\frac{3x^2-x+24}{(x+1)(x-3)(x+3)}.
\end{aligned}
$$

The numerator is prime, so there are no common factors.

{{< fillin
  question="Add $\tfrac{1}{m^2-m-2}+\tfrac{5m}{m^2+3m+2}$."
  answer="\frac{5m^2-9m+2}{(m+1)(m-2)(m+2)}"
  answerDisplay="$\tfrac{5m^2-9m+2}{(m+1)(m-2)(m+2)}$"
  hint="Factor both denominators. Their common factor is $m+1$."
>}}

{{< fillin
  question="Add $\tfrac{2n}{n^2-3n-10}+\tfrac{6}{n^2+5n+6}$."
  answer="\frac{2n^2+12n-30}{(n+2)(n-5)(n+3)}"
  answerDisplay="$\tfrac{2n^2+12n-30}{(n+2)(n-5)(n+3)}$"
  hint="Factor both denominators, find the LCD, and multiply each numerator by its missing factor."
>}}

The process we use to subtract rational expressions with different
denominators is the same as for addition. We just have to be very careful of
the signs when subtracting the numerators.

**Example.** Subtract $\tfrac{8y}{y^2-16}-\tfrac{4}{y-4}$.

The denominators factor as $(y-4)(y+4)$ and $y-4$, so the LCD is
$(y-4)(y+4)$.

$$
\begin{aligned}
\frac{8y}{y^2-16}-\frac{4}{y-4}
&=\frac{8y}{(y-4)(y+4)}-\frac{4(y+4)}{(y-4)(y+4)} \\
&=\frac{8y-4y-16}{(y-4)(y+4)} \\
&=\frac{4(y-4)}{(y-4)(y+4)} \\
&=\frac{4}{y+4}.
\end{aligned}
$$

{{< fillin
  question="Subtract $\tfrac{2x}{x^2-4}-\tfrac{1}{x+2}$."
  answer="\frac{1}{x-2}"
  answerDisplay="$\tfrac{1}{x-2}$"
  hint="Factor $x^2-4$, rewrite the second fraction with the LCD, and subtract."
>}}

{{< fillin
  question="Subtract $\tfrac{3}{z+3}-\tfrac{6z}{z^2-9}$."
  answer="-\frac{3}{z-3}"
  answerDisplay="$-\tfrac{3}{z-3}$"
  hint="Factor $z^2-9=(z-3)(z+3)$ and rewrite the first fraction with the LCD."
>}}

There are lots of negative signs in the next example. Be extra careful.

**Example.** Subtract:

$$\frac{-3n-9}{n^2+n-6}-\frac{n+3}{2-n}.$$

Factor $n^2+n-6=(n-2)(n+3)$. Since $n-2$ and $2-n$ are opposites,
multiply the second rational expression by $\tfrac{-1}{-1}$. Then

$$
\begin{aligned}
\frac{-3n-9}{(n-2)(n+3)}-\frac{n+3}{2-n}
&=\frac{-3n-9}{(n-2)(n+3)}+\frac{n+3}{n-2} \\
&=\frac{-3n-9}{(n-2)(n+3)}+\frac{(n+3)(n+3)}{(n-2)(n+3)} \\
&=\frac{-3n-9+n^2+6n+9}{(n-2)(n+3)} \\
&=\frac{n^2+3n}{(n-2)(n+3)} \\
&=\frac{n(n+3)}{(n-2)(n+3)}=\frac{n}{n-2}.
\end{aligned}
$$

{{< fillin
  question="Subtract $\tfrac{3x-1}{x^2-5x-6}-\tfrac{2}{6-x}$."
  answer="\frac{5x+1}{(x-6)(x+1)}"
  answerDisplay="$\tfrac{5x+1}{(x-6)(x+1)}$"
  hint="Factor the quadratic. Notice that $6-x$ is the opposite of $x-6$."
>}}

{{< fillin
  question="Subtract $\tfrac{-2y-2}{y^2+2y-8}-\tfrac{y-1}{2-y}$."
  answer="\frac{y+3}{y+4}"
  answerDisplay="$\tfrac{y+3}{y+4}$"
  hint="Factor $y^2+2y-8$ and rewrite the denominator $2-y$ using its opposite."
>}}

Things can get very messy when both fractions must be multiplied by a binomial
to get the common denominator.

**Example.** Subtract:

$$\frac{4}{a^2+6a+5}-\frac{3}{a^2+7a+10}.$$

Factor the denominators as $(a+1)(a+5)$ and $(a+2)(a+5)$. The LCD is
$(a+1)(a+5)(a+2)$.

$$
\begin{aligned}
\frac{4}{(a+1)(a+5)}-\frac{3}{(a+2)(a+5)}
&=\frac{4(a+2)}{(a+1)(a+5)(a+2)}-\frac{3(a+1)}{(a+2)(a+5)(a+1)} \\
&=\frac{4a+8-(3a+3)}{(a+1)(a+5)(a+2)} \\
&=\frac{a+5}{(a+1)(a+5)(a+2)} \\
&=\frac{1}{(a+1)(a+2)}.
\end{aligned}
$$

{{< fillin
  question="Subtract $\tfrac{3}{b^2-4b-5}-\tfrac{2}{b^2-6b+5}$."
  answer="\frac{1}{(b+1)(b-1)}"
  answerDisplay="$\tfrac{1}{(b+1)(b-1)}$"
  hint="Factor both denominators. They share the factor $b-5$."
>}}

{{< fillin
  question="Subtract $\tfrac{4}{x^2-4}-\tfrac{3}{x^2-x-2}$."
  answer="\frac{1}{(x+2)(x+1)}"
  answerDisplay="$\tfrac{1}{(x+2)(x+1)}$"
  hint="Factor both denominators and use the LCD $(x-2)(x+2)(x+1)$."
>}}

We follow the same steps as before to find the LCD when we have more than two
rational expressions. Start by factoring all three denominators.

**Example.** Simplify:

$$\frac{2u}{u-1}+\frac{1}{u}-\frac{2u-1}{u^2-u}.$$

The LCD of $u-1$, $u$, and $u(u-1)$ is $u(u-1)$.

$$
\begin{aligned}
\frac{2u}{u-1}+\frac{1}{u}-\frac{2u-1}{u(u-1)}
&=\frac{2u^2}{u(u-1)}+\frac{u-1}{u(u-1)}-\frac{2u-1}{u(u-1)} \\
&=\frac{2u^2+u-1-2u+1}{u(u-1)} \\
&=\frac{2u^2-u}{u(u-1)} \\
&=\frac{u(2u-1)}{u(u-1)}=\frac{2u-1}{u-1}.
\end{aligned}
$$

{{< fillin
  question="Simplify $\tfrac{v}{v+1}+\tfrac{3}{v-1}-\tfrac{6}{v^2-1}$."
  answer="\frac{v+3}{v+1}"
  answerDisplay="$\tfrac{v+3}{v+1}$"
  hint="Factor $v^2-1$; it is the LCD of all three denominators."
>}}

{{< fillin
  question="Simplify $\tfrac{3w}{w+2}+\tfrac{2}{w+7}-\tfrac{17w+4}{w^2+9w+14}$."
  answer="\frac{3w}{w+7}"
  answerDisplay="$\tfrac{3w}{w+7}$"
  hint="Factor the quadratic denominator as $(w+2)(w+7)$, rewrite all three expressions with that LCD, and combine."
>}}

## Add and subtract rational functions

To add or subtract rational functions, we use the same techniques we used to
add or subtract polynomial functions.

**Example.** Find $R(x)=f(x)-g(x)$ where
$f(x)=\tfrac{x+5}{x-2}$ and $g(x)=\tfrac{5x+18}{x^2-4}$.

Substitute the functions and factor $x^2-4=(x-2)(x+2)$. The LCD is
$(x-2)(x+2)$.

$$
\begin{aligned}
R(x)&=\frac{x+5}{x-2}-\frac{5x+18}{(x-2)(x+2)} \\
&=\frac{(x+5)(x+2)-(5x+18)}{(x-2)(x+2)} \\
&=\frac{x^2+7x+10-5x-18}{(x-2)(x+2)} \\
&=\frac{x^2+2x-8}{(x-2)(x+2)} \\
&=\frac{(x+4)(x-2)}{(x-2)(x+2)}=\frac{x+4}{x+2}.
\end{aligned}
$$

{{< fillin
  question="Find $R(x)=f(x)-g(x)$ where $f(x)=\tfrac{x+1}{x+3}$ and $g(x)=\tfrac{x+17}{x^2-x-12}$."
  answer="\frac{x-7}{x-4}"
  answerDisplay="$\tfrac{x-7}{x-4}$"
  hint="Factor $x^2-x-12=(x+3)(x-4)$, then subtract with the common denominator."
>}}

{{< fillin
  question="Find $R(x)=f(x)+g(x)$ where $f(x)=\tfrac{x-4}{x+3}$ and $g(x)=\tfrac{4x+6}{x^2-9}$."
  answer="\frac{x^2-3x+18}{(x+3)(x-3)}"
  answerDisplay="$\tfrac{x^2-3x+18}{(x+3)(x-3)}$"
  hint="Factor $x^2-9=(x+3)(x-3)$ and rewrite $f(x)$ with that denominator before adding."
>}}

## Key terms

**least common denominator (LCD)** — the smallest expression that is a
multiple of every denominator in a collection of rational expressions.
**rational expression addition and subtraction** — with a common denominator,
add or subtract the numerators and place the result over that denominator.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 7.2: Add and Subtract Rational Expressions](https://openstax.org/books/intermediate-algebra-2e/pages/7-2-add-and-subtract-rational-expressions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted worked-example steps as accessible typeset mathematics; omitted the Be Prepared quiz, media link, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
