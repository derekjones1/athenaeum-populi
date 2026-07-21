---
title: Polynomial Equations
description: >-
  Using the Zero Product Property and factoring to solve polynomial equations,
  finding values and zeros of polynomial functions, and solving applications
  modeled by polynomial equations — adapted from OpenStax Intermediate Algebra
  2e, Section 6.5.
source_section: "6.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use the Zero Product
  Property, solve quadratic equations by factoring, solve equations with
  polynomial functions, and solve applications modeled by polynomial
  equations.
{{< /callout >}}

We have spent considerable time learning how to factor polynomials. We will
now look at polynomial equations and solve them using factoring, if possible.

A **polynomial equation** is an equation that contains a polynomial
expression. The **degree of the polynomial equation** is the degree of the
polynomial.

{{< callout type="info" >}}
  **Polynomial equation.** A **polynomial equation** is an equation that
  contains a polynomial expression. The **degree of the polynomial equation**
  is the degree of the polynomial.
{{< /callout >}}

We have already solved polynomial equations of degree one. Polynomial
equations of degree one are linear equations of the form $ax+b=c$.

We are now going to solve polynomial equations of degree two. A polynomial
equation of degree two is called a **quadratic equation**. Some examples are

$$
\begin{array}{l}
x^2+5x+6=0 \\[4pt]
3y^2+4y=10 \\[4pt]
64u^2-81=0 \\[4pt]
n(n+1)=42
\end{array}
$$

The last equation does not appear to have the variable squared, but
simplifying the left side gives $n^2+n$.

The general form of a quadratic equation is $ax^2+bx+c=0$, where $a\ne0$.
If $a=0$, the squared term disappears and the equation is not quadratic.

{{< callout type="info" >}}
  **Quadratic equation.** An equation of the form $ax^2+bx+c=0$ is called a
  **quadratic equation**, where $a$, $b$, and $c$ are real numbers and
  $a\ne0$.
{{< /callout >}}

To solve quadratic equations we need methods different from the ones used for
linear equations. We will use factoring here and study several other methods
in a later chapter.

## Use the Zero Product Property

The **Zero Product Property** says that if the product of two quantities is
zero, then at least one of the quantities is zero. The only way to get a
product equal to zero is to multiply by zero.

{{< callout type="info" >}}
  **Zero Product Property.** If $a\cdot b=0$, then either $a=0$ or $b=0$, or
  both.
{{< /callout >}}

**Example.** Solve $(5n-2)(6n-1)=0$.

Set each factor equal to zero, then solve the two linear equations:

$$
\begin{array}{rclcrcl}
5n-2&=&0 && 6n-1&=&0 \\[4pt]
5n&=&2 && 6n&=&1 \\[4pt]
n&=&\tfrac{2}{5} && n&=&\tfrac{1}{6}
\end{array}
$$

Check each solution separately in the original equation:

$$
\begin{array}{rcl}
(5\cdot\tfrac{2}{5}-2)(6\cdot\tfrac{2}{5}-1)&=&0 \\[10pt]
(2-2)(\tfrac{12}{5}-1)&=&0 \\[10pt]
0&=&0\ \checkmark
\end{array}
$$

$$
\begin{array}{rcl}
(5\cdot\tfrac{1}{6}-2)(6\cdot\tfrac{1}{6}-1)&=&0 \\[10pt]
(\tfrac{5}{6}-\tfrac{12}{6})(1-1)&=&0 \\[10pt]
0&=&0\ \checkmark
\end{array}
$$

The solutions are $n=\tfrac{2}{5}$ and $n=\tfrac{1}{6}$.

{{< fillin
  question="Solve $(3m-2)(2m+1)=0$. Enter the two solutions separated by commas."
  answer="-\frac{1}{2}, \frac{2}{3}"
  answerDisplay="$-\tfrac{1}{2}, \tfrac{2}{3}$"
  hint="Use the Zero Product Property: set each factor equal to zero and solve both linear equations."
>}}

{{< fillin
  question="Solve $(4p+3)(4p-3)=0$. Enter the two solutions separated by commas."
  answer="-\frac{3}{4}, \frac{3}{4}"
  answerDisplay="$-\tfrac{3}{4}, \tfrac{3}{4}$"
  hint="Set $4p+3=0$ and $4p-3=0$, then solve."
>}}

{{< callout type="info" >}}
  **Use the Zero Product Property.**

  1. Set each factor equal to zero.
  2. Solve the linear equations.
  3. Check.
{{< /callout >}}

## Solve quadratic equations by factoring

The Zero Product Property works well for solving quadratic equations. The
quadratic equation must be factored, with zero isolated on one side. We first
write the equation in standard form, $ax^2+bx+c=0$, and then factor the
expression on the left.

**Example.** Solve $2y^2=13y+45$.

$$
\begin{array}{lrcl}
\text{Write the equation in standard form.} & 2y^2-13y-45&=&0 \\[4pt]
\text{Factor the quadratic expression.} & (2y+5)(y-9)&=&0 \\[4pt]
\text{Set each factor equal to zero.} & 2y+5&=&0 \quad\text{or}\quad y-9=0 \\[4pt]
\text{Solve.} & y&=&-\tfrac{5}{2} \quad\text{or}\quad y=9
\end{array}
$$

Substituting each solution into the original equation verifies both answers.

{{< fillin
  question="Solve $3c^2=10c-8$. Enter the two solutions separated by commas."
  answer="\frac{4}{3}, 2"
  answerDisplay="$\tfrac{4}{3}, 2$"
  hint="Write the equation in standard form, factor the trinomial, and use the Zero Product Property."
>}}

{{< fillin
  question="Solve $2d^2-5d=3$. Enter the two solutions separated by commas."
  answer="-\frac{1}{2}, 3"
  answerDisplay="$-\tfrac{1}{2}, 3$"
  hint="Move 3 to the left, then factor $2d^2-5d-3$."
>}}

{{< callout type="info" >}}
  **Solve a quadratic equation by factoring.**

  1. Write the quadratic equation in standard form, $ax^2+bx+c=0$.
  2. Factor the quadratic expression.
  3. Use the Zero Product Property.
  4. Solve the linear equations.
  5. Check each solution separately in the original equation.
{{< /callout >}}

Before we factor, we must make sure the quadratic equation is in standard
form. Solving quadratic equations by factoring uses all the factoring
techniques learned in this chapter.

**Example.** Solve $169x^2=49$.

$$
\begin{array}{lrcl}
\text{Write the equation in standard form.} & 169x^2-49&=&0 \\[4pt]
\text{Factor the difference of squares.} & (13x-7)(13x+7)&=&0 \\[4pt]
\text{Use the Zero Product Property.} & 13x-7&=&0 \quad\text{or}\quad 13x+7=0 \\[4pt]
\text{Solve.} & x&=&\tfrac{7}{13} \quad\text{or}\quad x=-\tfrac{7}{13}
\end{array}
$$

The check is left to you.

{{< fillin
  question="Solve $25p^2=49$. Enter the two solutions separated by commas."
  answer="-\frac{7}{5}, \frac{7}{5}"
  answerDisplay="$-\tfrac{7}{5}, \tfrac{7}{5}$"
  hint="Move 49 to the left and factor the difference of squares."
>}}

{{< fillin
  question="Solve $36x^2=121$. Enter the two solutions separated by commas."
  answer="-\frac{11}{6}, \frac{11}{6}"
  answerDisplay="$-\tfrac{11}{6}, \tfrac{11}{6}$"
  hint="Write $36x^2-121=0$ and factor the difference of squares."
>}}

In the next example, the left side is factored but the right side is not
zero. To use the Zero Product Property, one side must be zero. We multiply
the factors and then write the equation in standard form.

**Example.** Solve $(3x-8)(x-1)=3x$.

$$
\begin{array}{lrcl}
\text{Multiply the binomials.} & 3x^2-11x+8&=&3x \\[4pt]
\text{Write in standard form.} & 3x^2-14x+8&=&0 \\[4pt]
\text{Factor the trinomial.} & (3x-2)(x-4)&=&0 \\[4pt]
\text{Use the Zero Product Property.} & 3x-2&=&0 \quad\text{or}\quad x-4=0 \\[4pt]
\text{Solve.} & x&=&\tfrac{2}{3} \quad\text{or}\quad x=4
\end{array}
$$

The check is left to you.

{{< fillin
  question="Solve $(2m+1)(m+3)=12m$. Enter the two solutions separated by commas."
  answer="1, \frac{3}{2}"
  answerDisplay="$1, \tfrac{3}{2}$"
  hint="Multiply the binomials, put the equation in standard form, and factor."
>}}

{{< fillin
  question="Solve $(k+1)(k-1)=8$. Enter the two solutions separated by commas."
  answer="-3, 3"
  answerDisplay="$-3, 3$"
  hint="Expand the left side and move 8 to the left before factoring."
>}}

When a quadratic equation factors into three factors, the first factor may
be a nonzero constant. Such a factor cannot equal zero.

**Example.** Solve $3x^2=12x+63$.

$$
\begin{array}{lrcl}
\text{Write in standard form.} & 3x^2-12x-63&=&0 \\[4pt]
\text{Factor the GCF.} & 3(x^2-4x-21)&=&0 \\[4pt]
\text{Factor the trinomial.} & 3(x-7)(x+3)&=&0 \\[4pt]
\text{Use the Zero Product Property.} & x-7&=&0 \quad\text{or}\quad x+3=0 \\[4pt]
\text{Solve.} & x&=&7 \quad\text{or}\quad x=-3
\end{array}
$$

The constant factor $3$ is not zero and produces no solution.

{{< fillin
  question="Solve $18a^2-30=-33a$. Enter the two solutions separated by commas."
  answer="-\frac{5}{2}, \frac{2}{3}"
  answerDisplay="$-\tfrac{5}{2}, \tfrac{2}{3}$"
  hint="Move every term to the left, factor the GCF, then factor the trinomial."
>}}

{{< fillin
  question="Solve $123b=-6-60b^2$. Enter the two solutions separated by commas."
  answer="-2, -\frac{1}{20}"
  answerDisplay="$-2, -\tfrac{1}{20}$"
  hint="Write the equation in standard form and first factor out the GCF."
>}}

The Zero Product Property also applies to a product of three or more factors.
If the product is zero, at least one factor must be zero. We can therefore
solve some equations of degree greater than two in the same way.

**Example.** Solve $9m^3+100m=60m^2$.

$$
\begin{array}{lrcl}
\text{Bring all terms to one side.} & 9m^3-60m^2+100m&=&0 \\[4pt]
\text{Factor the GCF.} & m(9m^2-60m+100)&=&0 \\[4pt]
\text{Factor the trinomial.} & m(3m-10)(3m-10)&=&0 \\[4pt]
\text{Use the Zero Product Property.} & m&=&0 \quad\text{or}\quad 3m-10=0 \\[4pt]
\text{Solve.} & m&=&0 \quad\text{or}\quad m=\tfrac{10}{3}
\end{array}
$$

{{< fillin
  question="Solve $8x^3=24x^2-18x$. Enter the distinct solutions separated by commas."
  answer="0, \frac{3}{2}"
  answerDisplay="$0, \tfrac{3}{2}$"
  hint="Put zero on one side, factor the GCF, and recognize the remaining perfect-square trinomial."
>}}

{{< fillin
  question="Solve $16y^2=32y^3+2y$. Enter the distinct solutions separated by commas."
  answer="0, \frac{1}{4}"
  answerDisplay="$0, \tfrac{1}{4}$"
  hint="Move all terms to one side, factor out $2y$, and factor the remaining trinomial."
>}}

## Solve equations with polynomial functions

As our study of polynomial functions continues, it will often be important to
know when a function has a certain value or which points lie on its graph. The
Zero Product Property will help us find these answers.

**Example.** For $f(x)=x^2+2x-2$:

(a) Find $x$ when $f(x)=6$.

Substitute $6$ for $f(x)$, put the quadratic in standard form, and factor:

$$
\begin{array}{lrcl}
\text{Substitute.} & 6&=&x^2+2x-2 \\[4pt]
\text{Write in standard form.} & x^2+2x-8&=&0 \\[4pt]
\text{Factor.} & (x+4)(x-2)&=&0 \\[4pt]
\text{Solve.} & x&=&-4 \quad\text{or}\quad x=2
\end{array}
$$

(b) Find two points on the graph of the function.

Since $f(-4)=6$ and $f(2)=6$, the points $(-4,6)$ and $(2,6)$ lie on the
graph.

{{< fillin
  question="For $f(x)=x^2-2x-8$, find $x$ when $f(x)=7$. Enter the two values separated by commas."
  answer="-3, 5"
  answerDisplay="$-3, 5$"
  hint="Set $x^2-2x-8=7$, put the equation in standard form, and factor."
>}}

{{< fillin
  question="For $f(x)=x^2-8x+3$, find $x$ when $f(x)=-4$. Enter the two values separated by commas."
  answer="1, 7"
  answerDisplay="$1, 7$"
  hint="Set $x^2-8x+3=-4$, move all terms to one side, and factor."
>}}

The Zero Product Property also helps us determine where a function is zero.
A value of $x$ where the function is zero is called a **zero of the
function**.

{{< callout type="info" >}}
  **Zero of a function.** For any function $f$, if $f(x)=0$, then $x$ is a
  **zero of the function**.
{{< /callout >}}

When $f(x)=0$, the point $(x,0)$ lies on the graph. This point is an
$x$-intercept. We find the $y$-intercept by setting $x=0$.

**Example.** For $f(x)=3x^2+10x-8$, find (a) the zeros of the function, (b)
the $x$-intercepts, and (c) the $y$-intercept.

To find the zeros, solve $f(x)=0$:

$$
\begin{array}{lrcl}
\text{Substitute 0 for }f(x). & 0&=&3x^2+10x-8 \\[4pt]
\text{Factor.} & (x+4)(3x-2)&=&0 \\[4pt]
\text{Solve.} & x&=&-4 \quad\text{or}\quad x=\tfrac{2}{3}
\end{array}
$$

Thus the zeros are $-4$ and $\tfrac{2}{3}$, and the $x$-intercepts are
$(-4,0)$ and $(\tfrac{2}{3},0)$. For the $y$-intercept, find $f(0)$:

$$f(0)=3\cdot0^2+10\cdot0-8=-8.$$

The $y$-intercept is $(0,-8)$.

{{< fillin
  question="For $f(x)=2x^2-7x+5$, find the zeros of the function. Enter the two values separated by commas."
  answer="1, \frac{5}{2}"
  answerDisplay="$1, \tfrac{5}{2}$"
  hint="Set $f(x)=0$, factor the trinomial, and solve each factor."
>}}

{{< fillin
  question="For $f(x)=6x^2+13x-15$, find the zeros of the function. Enter the two values separated by commas."
  answer="-3, \frac{5}{6}"
  answerDisplay="$-3, \tfrac{5}{6}$"
  hint="Set the function equal to zero and factor $(3x-?)(2x+?)$."
>}}

## Solve applications modeled by polynomial equations

The problem-solving strategy used earlier for applications that translate to
linear equations works just as well for applications that translate to
polynomial equations.

{{< callout type="info" >}}
  **Use a problem-solving strategy to solve word problems.**

  1. **Read** the problem. Make sure all words and ideas are understood.
  2. **Identify** what you are looking for.
  3. **Name** what you are looking for. Choose a variable to represent it.
  4. **Translate** into an equation. Restate the problem in one sentence with
     the important information, then translate that sentence.
  5. **Solve** the equation using appropriate algebraic techniques.
  6. **Check** the answer in the problem and make sure it makes sense.
  7. **Answer** the question with a complete sentence.
{{< /callout >}}

### Consecutive integer applications

**Example.** The product of two consecutive odd integers is $323$. Find the
integers.

Let $n$ be the first odd integer. Then $n+2$ is the next consecutive odd
integer. Translate and solve:

$$
\begin{array}{lrcl}
\text{Translate.} & n(n+2)&=&323 \\[4pt]
\text{Write in standard form.} & n^2+2n-323&=&0 \\[4pt]
\text{Factor.} & (n-17)(n+19)&=&0 \\[4pt]
\text{Solve.} & n&=&17 \quad\text{or}\quad n=-19
\end{array}
$$

If $n=17$, the next integer is $19$. If $n=-19$, the next integer is $-17$.
Both pairs check because $17\cdot19=323$ and $(-19)(-17)=323$. The
consecutive odd integers are $17,19$ and $-19,-17$.

{{< fillin
  question="The product of two consecutive odd integers is 255. Enter all four integers in increasing order, separated by commas."
  answer="-17, -15, 15, 17"
  answerDisplay="$-17, -15, 15, 17$"
  hint="Let $n$ be the first odd integer and $n+2$ the next. Solve $n(n+2)=255$."
>}}

{{< fillin
  question="The product of two consecutive odd integers is 483. Enter all four integers in increasing order, separated by commas."
  answer="-23, -21, 21, 23"
  answerDisplay="$-23, -21, 21, 23$"
  hint="Let the integers be $n$ and $n+2$, then solve the resulting quadratic equation."
>}}

The product of two positive integers and the product of two negative integers
both give positive results. In some applications, however, negative solutions
from the algebra are not realistic for the situation.

### Rectangle applications

**Example.** A rectangular bedroom has an area of $117$ square feet. The
length is four feet more than the width. Find the dimensions.

Let $w$ be the width, so $w+4$ is the length.

<div class="ap-figure">
<svg role="img" aria-label="A rectangle with width w and length w plus 4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282 192" width="282" height="192" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="156" x2="246" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="141" y="178" text-anchor="middle" font-size="13" fill="currentColor">w + 4</text>
  <line x1="246" y1="156" x2="246" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="258" y="100" text-anchor="start" font-size="13" fill="currentColor">w</text>
  <line x1="246" y1="36" x2="36" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="141" y="22" text-anchor="middle" font-size="13" fill="currentColor">w + 4</text>
  <line x1="36" y1="36" x2="36" y2="156" stroke="currentColor" stroke-width="1.5"/>
  <text x="24" y="100" text-anchor="end" font-size="13" fill="currentColor">w</text>
</svg>
</div>

Using $A=l\cdot w$ gives

$$
\begin{array}{lrcl}
\text{Translate.} & 117&=&(w+4)w \\[4pt]
\text{Write in standard form.} & 0&=&w^2+4w-117 \\[4pt]
\text{Factor.} & 0&=&(w+13)(w-9) \\[4pt]
\text{Solve.} & w&=&-13 \quad\text{or}\quad w=9
\end{array}
$$

A width cannot be negative, so $w=9$. The length is $9+4=13$. The bedroom
is $9$ feet wide and $13$ feet long, and $9\cdot13=117$.

{{< fillin
  question="A rectangular sign has area 30 square feet. Its length is one foot more than its width. Enter the width and length, separated by a comma."
  answer="5, 6"
  answerDisplay="$5, 6$"
  hint="Let the width be $w$ and the length $w+1$. Solve $w(w+1)=30$ and reject a negative dimension."
>}}

{{< fillin
  question="A rectangular patio has area 180 square feet. Its width is three feet less than its length. Enter the width and length, separated by a comma."
  answer="12, 15"
  answerDisplay="$12, 15$"
  hint="Let the length be $l$ and the width $l-3$. Solve $l(l-3)=180$."
>}}

### Right-triangle applications

The Pythagorean Theorem, $a^2+b^2=c^2$, gives the relation between the legs
and hypotenuse of a right triangle.

**Example.** A boat's sail is in the shape of a right triangle. The
hypotenuse is $17$ feet. One side is $7$ feet less than the other. Find the
side lengths.

Let $x$ be one leg and $x-7$ the other leg.

<div class="ap-figure">
<svg role="img" aria-label="A right triangle with legs x and x minus 7 and hypotenuse 17." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185 312" width="185" height="312" font-family="Helvetica, Arial, sans-serif">
  <line x1="36" y1="276" x2="36" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="24" y="160" text-anchor="end" font-size="13" fill="currentColor">x</text>
  <line x1="36" y1="36" x2="148.5" y2="276" stroke="currentColor" stroke-width="1.5"/>
  <text x="103.1" y="148.9" text-anchor="start" font-size="13" fill="currentColor">17</text>
  <line x1="148.5" y1="276" x2="36" y2="276" stroke="currentColor" stroke-width="1.5"/>
  <text x="92.3" y="298" text-anchor="middle" font-size="13" fill="currentColor">x − 7</text>
  <path d="M 36 266 L 46 266 L 46 276" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

$$
\begin{array}{lrcl}
\text{Use the Pythagorean Theorem.} & x^2+(x-7)^2&=&17^2 \\[4pt]
\text{Simplify.} & 2x^2-14x-240&=&0 \\[4pt]
\text{Factor the GCF and trinomial.} & 2(x-15)(x+8)&=&0 \\[4pt]
\text{Solve.} & x&=&15 \quad\text{or}\quad x=-8
\end{array}
$$

The negative length is impossible, so $x=15$ and $x-7=8$. The sides of the
sail are $8$, $15$, and $17$ feet. The check is
$15^2+8^2=225+64=289=17^2$.

{{< fillin
  question="A right-triangle deck has one side 7 feet longer than the other and hypotenuse 13 feet. Enter the two leg lengths, separated by a comma."
  answer="5, 12"
  answerDisplay="$5, 12$"
  hint="Let one leg be $x$ and the other $x+7$. Use $x^2+(x+7)^2=13^2$."
>}}

{{< fillin
  question="A right-triangle meditation garden has one leg 7 feet and a hypotenuse one foot longer than the other leg. Enter the other leg and hypotenuse, separated by a comma."
  answer="24, 25"
  answerDisplay="$24, 25$"
  hint="Let the other leg be $x$ and the hypotenuse $x+1$. Use the Pythagorean Theorem."
>}}

### Projectile applications

**Example.** Dennis throws a rubber-band ball upward from the top of an
$80$-foot building. Its height is modeled by
$h(t)=-16t^2+64t+80$. Find (a) when the ball hits the ground, (b) when it is
$80$ feet above the ground, and (c) its height at $t=2$ seconds.

(a) The zeros tell us when the ball hits the ground:

$$
\begin{array}{lrcl}
\text{Set }h(t)=0. & -16t^2+64t+80&=&0 \\[4pt]
\text{Factor.} & -16(t-5)(t+1)&=&0 \\[4pt]
\text{Solve.} & t&=&5 \quad\text{or}\quad t=-1
\end{array}
$$

Time cannot be negative, so the ball hits the ground after $5$ seconds.

(b) Set $h(t)=80$:

$$
\begin{array}{lrcl}
\text{Substitute.} & -16t^2+64t+80&=&80 \\[4pt]
\text{Subtract 80 and factor.} & -16t(t-4)&=&0 \\[4pt]
\text{Solve.} & t&=&0 \quad\text{or}\quad t=4
\end{array}
$$

The ball is $80$ feet high when Dennis releases it and again after $4$
seconds.

(c) Find the height after $2$ seconds:

$$h(2)=-16(2)^2+64\cdot2+80=144.$$

After $2$ seconds, the ball is at $144$ feet.

{{< fillin
  question="A rock's height is $h(t)=-16t^2+48t+160$. How many seconds after release does it hit the ocean?"
  answer="5"
  answerDisplay="$5$ seconds"
  hint="Set $h(t)=0$, factor, and discard the negative time."
>}}

{{< fillin
  question="For the rock with $h(t)=-16t^2+48t+160$, find its height at $t=1.5$ seconds."
  answer="196"
  answerDisplay="$196$ feet"
  hint="Substitute $1.5$ for $t$ in the height function and simplify."
>}}

{{< fillin
  question="A penny's height is $h(t)=-16t^2+32t+128$. How many seconds after release does it hit the ocean?"
  answer="4"
  answerDisplay="$4$ seconds"
  hint="Set the height equal to zero, factor, and reject the negative solution."
>}}

{{< fillin
  question="For the penny with $h(t)=-16t^2+32t+128$, find its height at $t=1$ second."
  answer="144"
  answerDisplay="$144$ feet"
  hint="Substitute $t=1$ into the height function."
>}}

## Key terms

**polynomial equation** — an equation that contains a polynomial expression.
**degree of the polynomial equation** — the degree of the polynomial in the
equation. **quadratic equation** — a polynomial equation of degree two.
**Zero Product Property** — if a product is zero, then at least one of its
factors is zero. **zero of a function** — a value of $x$ for which $f(x)=0$.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 6.5: Polynomial Equations](https://openstax.org/books/intermediate-algebra-2e/pages/6-5-polynomial-equations) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked-example tables as accessible aligned math, omitted the Be Prepared quiz, media links, and end-of-section exercises, recreated geometric figures accessibly, and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
