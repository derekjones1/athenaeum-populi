---
title: Solve Rational Inequalities
description: >-
  Solving rational inequalities with zero partition numbers and sign analysis,
  and applying rational-function inequalities to average-cost problems.
source_section: "7.6"
weight: 6
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve rational
  inequalities, and solve an inequality with rational functions.
{{< /callout >}}

## Solve rational inequalities

We learned to solve linear inequalities after learning to solve linear
equations. The techniques were very much the same, with one major exception:
when we multiplied or divided by a negative number, the inequality sign
reversed. Having just learned to solve rational equations, we are now ready to
solve rational inequalities.

{{< callout type="info" >}}
  **Rational inequality.** A **rational inequality** is an inequality that
  contains a rational expression.
{{< /callout >}}

Inequalities such as
$\tfrac{3}{2x}>1$, $\tfrac{2x}{x-3}<4$,
$\tfrac{2x-3}{x-6}\ge x$, and
$\tfrac{1}{4}-\tfrac{2}{x^2}\le\tfrac{3}{x}$ are rational inequalities.
When solving them, we must remember to reverse the inequality if multiplying
or dividing by a negative number. We must also exclude every value that makes
the rational expression undefined.

If an inequality gives $x>3$, there are many solutions. The number $3$ is a
**zero partition number**, and we decide which side to shade.

<div class="ap-figure">
<svg role="img" aria-label="A number line shaded to the right of an open parenthesis at three." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="239.2" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−5</text>
  <line x1="54.4" y1="39" x2="54.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">−4</text>
  <line x1="80.8" y1="39" x2="80.8" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="80.8" y="70" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="107.2" y1="39" x2="107.2" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="107.2" y="70" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="133.6" y1="39" x2="133.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="133.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="186.4" y1="39" x2="186.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="186.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="212.8" y1="39" x2="212.8" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="212.8" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="239.2" y1="39" x2="239.2" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="239.2" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="265.6" y1="39" x2="265.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <text x="239.2" y="52" text-anchor="middle" font-size="22" fontWeight="600" fill="currentColor">(</text>
  <text x="239.2" y="16" text-anchor="middle" font-size="14" fill="currentColor">x &gt; 3</text>
</svg>
</div>

To solve a rational inequality, first write it with only one quotient on the
left and zero on the right. Next determine the zero partition numbers that
divide the number line into intervals.

{{< callout type="info" >}}
  **Zero partition number.** A **zero partition number** is a number that
  makes the rational expression zero or undefined.
{{< /callout >}}

Evaluate the factors of the numerator and denominator to find the sign of the
quotient in every interval. This identifies the intervals containing all
solutions. Write the result in interval notation, carefully deciding whether
each endpoint is included.

**Example.** Solve and write the solution in interval notation:

$$\tfrac{x-1}{x+3}\ge0.$$

The inequality already has one quotient on the left and zero on the right.
The numerator is zero at $x=1$, and the expression is undefined at $x=-3$.
Thus the zero partition numbers are $-3$ and $1$, producing the intervals
$(-\infty,-3)$, $(-3,1)$, and $(1,\infty)$.

Test one number in each interval:

| Interval | Test value | Sign of $x-1$ | Sign of $x+3$ | Sign of quotient |
| :---: | :---: | :---: | :---: | :---: |
| $(-\infty,-3)$ | $-4$ | negative | negative | positive |
| $(-3,1)$ | $0$ | negative | positive | negative |
| $(1,\infty)$ | $2$ | positive | positive | positive |

We need the quotient to be greater than or equal to zero, so
$(-\infty,-3)$ and $(1,\infty)$ contain solutions. The value $-3$ makes the
denominator zero and must be excluded. The value $1$ makes the expression
zero and is included. The solution is

$$(-\infty,-3)\cup[1,\infty).$$

The two rays of the solution are shown separately:

<div class="ap-figure">
<svg role="img" aria-label="A number line shaded left from an open parenthesis at negative three." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="133.6" y1="45" x2="16" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−7</text>
  <line x1="54.4" y1="39" x2="54.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">−6</text>
  <line x1="80.8" y1="39" x2="80.8" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="80.8" y="70" text-anchor="middle" font-size="12" fill="currentColor">−5</text>
  <line x1="107.2" y1="39" x2="107.2" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="107.2" y="70" text-anchor="middle" font-size="12" fill="currentColor">−4</text>
  <line x1="133.6" y1="39" x2="133.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="133.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="186.4" y1="39" x2="186.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="186.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="212.8" y1="39" x2="212.8" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="212.8" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="239.2" y1="39" x2="239.2" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="239.2" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="265.6" y1="39" x2="265.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <text x="133.6" y="52" text-anchor="middle" font-size="22" fontWeight="600" fill="currentColor">)</text>
  <text x="133.6" y="16" text-anchor="middle" font-size="14" fill="currentColor">(−∞, −3)</text>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="A number line shaded right from a closed bracket at one." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="133.6" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="54.4" y1="39" x2="54.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="80.8" y1="39" x2="80.8" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="80.8" y="70" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="107.2" y1="39" x2="107.2" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="107.2" y="70" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="133.6" y1="39" x2="133.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="133.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="160" y1="39" x2="160" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="70" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="186.4" y1="39" x2="186.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="186.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="212.8" y1="39" x2="212.8" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="212.8" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="239.2" y1="39" x2="239.2" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="239.2" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="265.6" y1="39" x2="265.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <text x="133.6" y="52" text-anchor="middle" font-size="22" fontWeight="600" fill="currentColor">[</text>
  <text x="133.6" y="16" text-anchor="middle" font-size="14" fill="currentColor">[1, ∞)</text>
</svg>
</div>

{{< fillin
  question="Solve $\tfrac{x-2}{x+4}\ge0$. Enter the solution in interval notation."
  answer="(-\infty,-4) \cup [2,\infty)"
  answerDisplay="$(-\infty,-4)\cup[2,\infty)$"
  hint="The zero partition numbers are $-4$ and $2$. Test one point in each interval."
>}}

{{< fillin
  question="Solve $\tfrac{x+2}{x-4}\ge0$. Enter the solution in interval notation."
  answer="(-\infty,-2] \cup (4,\infty)"
  answerDisplay="$(-\infty,-2]\cup(4,\infty)$"
  hint="The numerator is zero at $-2$; the denominator is zero at $4$."
>}}

{{< callout type="info" >}}
  **Solve a rational inequality.**

  1. Write the inequality as one quotient on the left and zero on the right.
  2. Determine the zero partition numbers—the points where the rational
     expression will be zero or undefined.
  3. Use the zero partition numbers to divide the number line into intervals.
  4. Test a value in each interval. Above the number line, show the sign of
     each factor of the numerator and denominator. Below it, show the sign of
     the quotient.
  5. Determine the intervals where the inequality is correct, and write the
     solution in interval notation.
{{< /callout >}}

The next example first requires putting the rational inequality into the
correct form.

**Example.** Solve and write the solution in interval notation:

$$\tfrac{4x}{x-6}<1.$$

Subtract $1$, rewrite it with the LCD, and simplify:

$$
\begin{array}{lrcl}
\text{Subtract 1.} & \tfrac{4x}{x-6}-1 &<& 0 \\[10pt]
\text{Rewrite 1 using the LCD.} & \tfrac{4x}{x-6}-\tfrac{x-6}{x-6} &<& 0 \\[10pt]
\text{Combine the numerators.} & \tfrac{4x-(x-6)}{x-6} &<& 0 \\[10pt]
\text{Simplify and factor.} & \tfrac{3(x+2)}{x-6} &<& 0
\end{array}
$$

The zero partition numbers are $-2$ and $6$.

| Interval | Sign of $x+2$ | Sign of $x-6$ | Sign of quotient |
| :---: | :---: | :---: | :---: |
| $(-\infty,-2)$ | negative | negative | positive |
| $(-2,6)$ | positive | negative | negative |
| $(6,\infty)$ | positive | positive | positive |

The quotient must be negative, so the solution is $(-2,6)$. Because the
inequality is strict, neither endpoint is included.

{{< fillin
  question="Solve $\tfrac{3x}{x-3}<1$. Enter the solution in interval notation."
  answer="(-\tfrac{3}{2},3)"
  answerDisplay="$(-\tfrac{3}{2},3)$"
  hint="Subtract $1$, combine into one quotient, and find its zero partition numbers."
>}}

{{< fillin
  question="Solve $\tfrac{3x}{x-4}<2$. Enter the solution in interval notation."
  answer="(-8,4)"
  answerDisplay="$(-8,4)$"
  hint="Write the inequality with zero on the right before testing intervals."
>}}

In the next example, the numerator is always positive, so the sign of the
rational expression depends on the sign of the denominator.

**Example.** Solve and write the solution in interval notation:

$$\tfrac{5}{x^2-2x-15}>0.$$

Factor the denominator:

$$\tfrac{5}{(x+3)(x-5)}>0.$$

The numerator cannot be zero. The denominator is zero at $x=-3$ and $x=5$,
so these are the zero partition numbers.

| Interval | Sign of $x+3$ | Sign of $x-5$ | Sign of quotient |
| :---: | :---: | :---: | :---: |
| $(-\infty,-3)$ | negative | negative | positive |
| $(-3,5)$ | positive | negative | negative |
| $(5,\infty)$ | positive | positive | positive |

The strict inequality requires positive values, and neither undefined
endpoint can be included. The solution is

$$(-\infty,-3)\cup(5,\infty).$$

{{< fillin
  question="Solve $\tfrac{1}{x^2+2x-8}>0$. Enter the solution in interval notation."
  answer="(-\infty,-4) \cup (2,\infty)"
  answerDisplay="$(-\infty,-4)\cup(2,\infty)$"
  hint="Factor the denominator as $(x+4)(x-2)$."
>}}

{{< fillin
  question="Solve $\tfrac{3}{x^2+x-12}>0$. Enter the solution in interval notation."
  answer="(-\infty,-4) \cup (3,\infty)"
  answerDisplay="$(-\infty,-4)\cup(3,\infty)$"
  hint="Factor the denominator, then test the three intervals."
>}}

The next example requires some work to get it into the needed form.

**Example.** Solve and write the solution in interval notation:

$$\tfrac{1}{3}-\tfrac{2}{x^2}<\tfrac{5}{3x}.$$

Subtract $\tfrac{5}{3x}$ and use the LCD $3x^2$:

$$
\begin{array}{lrcl}
\text{Get zero on the right.} & \tfrac{1}{3}-\tfrac{2}{x^2}-\tfrac{5}{3x} &<& 0 \\[10pt]
\text{Write over the LCD.} & \tfrac{x^2-6-5x}{3x^2} &<& 0 \\[10pt]
\text{Factor the numerator.} & \tfrac{(x-6)(x+1)}{3x^2} &<& 0
\end{array}
$$

The zero partition numbers are $-1$, $0$, and $6$. The factor $x^2$ is
positive on both sides of $0$, but $x=0$ is excluded because it makes the
denominator zero.

| Interval | Sign of $x-6$ | Sign of $x+1$ | Sign of $x^2$ | Quotient |
| :---: | :---: | :---: | :---: | :---: |
| $(-\infty,-1)$ | negative | negative | positive | positive |
| $(-1,0)$ | negative | positive | positive | negative |
| $(0,6)$ | negative | positive | positive | negative |
| $(6,\infty)$ | positive | positive | positive | positive |

The solution is

$$(-1,0)\cup(0,6).$$

{{< fillin
  question="Solve $\tfrac{1}{2}+\tfrac{4}{x^2}<\tfrac{3}{x}$. Enter the solution in interval notation."
  answer="(2,4)"
  answerDisplay="$(2,4)$"
  hint="Move all terms left, use the LCD $2x^2$, and factor the numerator."
>}}

{{< fillin
  question="Solve $\tfrac{1}{3}+\tfrac{6}{x^2}<\tfrac{3}{x}$. Enter the solution in interval notation."
  answer="(3,6)"
  answerDisplay="$(3,6)$"
  hint="Combine the expressions over $3x^2$, then factor and test intervals."
>}}

## Solve an inequality with rational functions

When working with rational functions, it is sometimes useful to know when the
function is greater than or less than a particular value. This leads to a
rational inequality.

**Example.** Given $R(x)=\tfrac{x+3}{x-5}$, find the values of $x$ that make
the function less than or equal to $0$.

Substitute the rational expression for $R(x)$:

$$\tfrac{x+3}{x-5}\le0,\qquad x\ne5.$$

The zero partition numbers are $-3$ and $5$.

| Interval | Sign of $x+3$ | Sign of $x-5$ | Sign of quotient |
| :---: | :---: | :---: | :---: |
| $(-\infty,-3)$ | negative | negative | positive |
| $(-3,5)$ | positive | negative | negative |
| $(5,\infty)$ | positive | positive | positive |

Because the quotient may equal zero, $-3$ is included. The value $5$ is
undefined and excluded. The solution is $[-3,5)$.

{{< fillin
  question="Given $R(x)=\tfrac{x-2}{x+4}$, find the values of $x$ that make $R(x)\le0$. Enter interval notation."
  answer="(-4,2]"
  answerDisplay="$(-4,2]$"
  hint="The zero partition numbers are $-4$ and $2$."
>}}

{{< fillin
  question="Given $R(x)=\tfrac{x+1}{x-4}$, find the values of $x$ that make $R(x)\le0$. Enter interval notation."
  answer="[-1,4)"
  answerDisplay="$[-1,4)$"
  hint="Include the zero of the numerator, but exclude the zero of the denominator."
>}}

In economics, $C(x)$ represents the cost of producing $x$ units of a
commodity. The average cost per unit is found by dividing $C(x)$ by the
number of items:

$$c(x)=\tfrac{C(x)}{x}.$$

**Example.** The function $C(x)=10x+3000$ represents the cost to produce
$x$ items. Find (a) the average cost function $c(x)$ and (b) how many items
should be produced so that the average cost is less than \$40.

For part (a), divide the cost function by $x$:

$$c(x)=\tfrac{C(x)}{x}=\tfrac{10x+3000}{x}.$$

For part (b), solve

$$\tfrac{10x+3000}{x}<40,\qquad x\ne0.$$

Write the left side as one quotient:

$$
\begin{array}{lrcl}
\text{Subtract 40.} & \tfrac{10x+3000}{x}-40 &<& 0 \\[10pt]
\text{Combine over }x. & \tfrac{10x+3000-40x}{x} &<& 0 \\[10pt]
\text{Factor.} & \tfrac{-30(x-100)}{x} &<& 0
\end{array}
$$

The zero partition numbers are $0$ and $100$. Since the number of items must
be positive, the inequality is satisfied when $x>100$. More than 100 items
must be produced to keep the average cost below \$40 per item.

{{< fillin
  question="If $C(x)=20x+6000$, find the average cost function $c(x)$."
  answer="\tfrac{20x+6000}{x}"
  answerDisplay="$\tfrac{20x+6000}{x}$"
  hint="Average cost equals total cost divided by the number of items."
>}}

{{< fillin
  question="If $C(x)=20x+6000$, how many items must be produced so that the average cost is less than \$60? Enter the least whole-number quantity that works."
  answer="151"
  answerDisplay="151 items"
  hint="Solve $\tfrac{20x+6000}{x}<60$ for positive $x$, then choose the least whole number."
>}}

{{< fillin
  question="If $C(x)=5x+900$, find the average cost function $c(x)$."
  answer="\tfrac{5x+900}{x}"
  answerDisplay="$\tfrac{5x+900}{x}$"
  hint="Divide $C(x)$ by $x$."
>}}

{{< fillin
  question="If $C(x)=5x+900$, how many items must be produced so that the average cost is less than \$20? Enter the least whole-number quantity that works."
  answer="61"
  answerDisplay="61 items"
  hint="Solve $\tfrac{5x+900}{x}<20$ for positive $x$, then choose the least whole number."
>}}

**Key terms.** A **rational inequality** is an inequality that contains a
rational expression. A **zero partition number** is a number that makes the
rational expression zero or undefined.

<small>Adapted from [OpenStax Intermediate Algebra 2e, Section 7.6](https://openstax.org/books/intermediate-algebra-2e/pages/7-6-solve-rational-inequalities), by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted examples, sign analyses, number lines, and Try It exercises for interactive web use and accessibility.</small>
