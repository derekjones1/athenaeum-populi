---
title: Solve Equations in Quadratic Form
description: >-
  Solving equations in quadratic form by identifying a substitution, solving
  the resulting quadratic equation, and substituting back.
source_section: "9.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve equations in quadratic form
{{< /callout >}}

## Solve Equations in Quadratic Form

Sometimes when we factored trinomials, the trinomial did not appear to be in
the $ax^2+bx+c$ form. So we factored by substitution allowing us to make it fit
the $ax^2+bx+c$ form. We used the standard $u$ for the substitution.

To factor the expression $x^4-4x^2-5$, we noticed the variable part of the
middle term is $x^2$ and its square, $x^4$, is the variable part of the first
term. (We know $(x^2)^2=x^4$.) So we let $u=x^2$ and factored.

$$
\begin{array}{lrcl}
&&& x^4-4x^2-5 \\[4pt]
\text{Let }u=x^2\text{ and substitute.} &&& u^2-4u-5 \\[4pt]
\text{Factor the trinomial.} &&& (u+1)(u-5) \\[4pt]
\text{Replace }u\text{ with }x^2. &&& (x^2+1)(x^2-5)
\end{array}
$$

Similarly, sometimes an equation is not in the $ax^2+bx+c=0$ form but looks
much like a quadratic equation. Then, we can often make a thoughtful
substitution that will allow us to make it fit the $ax^2+bx+c=0$ form. If we
can make it fit the form, we can then use all of our methods to solve quadratic
equations.

Notice that in the quadratic equation $ax^2+bx+c=0$, the middle term has a
variable, $x$, and its square, $x^2$, is the variable part of the first term.
Look for this relationship as you try to find a substitution.

Again, we will use the standard $u$ to make a substitution that will put the
equation in quadratic form. If the substitution gives us an equation of the
form $ax^2+bx+c=0$, we say the original equation was in **quadratic form**.

The next example shows the steps for solving an equation in quadratic form.

**Example.** Solve $6x^4-7x^2+2=0$.

**Solution.**

Since $(x^2)^2=x^4$, we let $u=x^2$.

$$
\begin{array}{lrcl}
&&& 6x^4-7x^2+2=0 \\[4pt]
\text{Rewrite to prepare for the substitution.} &&& 6(x^2)^2-7x^2+2=0 \\[4pt]
\text{Substitute }u=x^2. & 6u^2-7u+2 &=& 0 \\[4pt]
\text{Factor.} & (2u-1)(3u-2) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & 2u-1=0 && \text{or}\quad 3u-2=0 \\[4pt]
&&& 2u=1\quad\text{or}\quad 3u=2 \\[4pt]
\text{Solve for }u. & u=\tfrac{1}{2} && \text{or}\quad u=\tfrac{2}{3} \\[10pt]
\text{Replace }u\text{ with }x^2. & x^2=\tfrac{1}{2} && \text{or}\quad x^2=\tfrac{2}{3} \\[10pt]
\text{Use the Square Root Property.} & x=\pm\sqrt{\tfrac{1}{2}} && \text{or}\quad x=\pm\sqrt{\tfrac{2}{3}} \\[10pt]
\text{Simplify.} & x=\pm\tfrac{\sqrt{2}}{2} && \text{or}\quad x=\pm\tfrac{\sqrt{6}}{3}
\end{array}
$$

There are four solutions:

$$
x=\tfrac{\sqrt{2}}{2},\quad x=-\tfrac{\sqrt{2}}{2},\quad
x=\tfrac{\sqrt{6}}{3},\quad x=-\tfrac{\sqrt{6}}{3}.
$$

Check all four solutions. We will show one check here.

$$
\begin{array}{rcl}
6x^4-7x^2+2 &\overset{?}{=}& 0 \\[4pt]
6\left(\tfrac{\sqrt{2}}{2}\right)^4
-7\left(\tfrac{\sqrt{2}}{2}\right)^2+2 &\overset{?}{=}& 0 \\[10pt]
6\left(\tfrac{4}{16}\right)-7\left(\tfrac{2}{4}\right)+2
&\overset{?}{=}& 0 \\[10pt]
\tfrac{3}{2}-\tfrac{7}{2}+\tfrac{4}{2} &\overset{?}{=}& 0 \\[10pt]
0&=&0\ \checkmark
\end{array}
$$

We leave the other checks to you.

{{< fillin
  question="Solve $x^4-6x^2+8=0$. Enter all four solutions, separated by commas."
  answer="\sqrt{2}, -\sqrt{2}, 2, -2"
  answerMode="unordered"
  answerDisplay="$x=\sqrt{2},\ x=-\sqrt{2},\ x=2,\ x=-2$"
  hint="Let $u=x^2$, solve the resulting quadratic equation, and then use the Square Root Property."
>}}

{{< fillin
  question="Solve $x^4-11x^2+28=0$. Enter all four solutions, separated by commas."
  answer="\sqrt{7}, -\sqrt{7}, 2, -2"
  answerMode="unordered"
  answerDisplay="$x=\sqrt{7},\ x=-\sqrt{7},\ x=2,\ x=-2$"
  hint="Use $u=x^2$. After solving for $u$, substitute $x^2$ back for $u$."
>}}

We summarize the steps to solve an equation in quadratic form.

{{< callout type="info" >}}
  **Solve equations in quadratic form.**

  1. Identify a substitution that will put the equation in quadratic form.
  2. Rewrite the equation with the substitution to put it in quadratic form.
  3. Solve the quadratic equation for $u$.
  4. Substitute the original variable back into the results, using the substitution.
  5. Solve for the original variable.
  6. Check the solutions.
{{< /callout >}}

In the next example, the binomial in the middle term, $(x-2)$, is squared in
the first term. If we let $u=x-2$ and substitute, our trinomial will be in
$ax^2+bx+c$ form.

**Example.** Solve $(x-2)^2+7(x-2)+12=0$.

**Solution.**

$$
\begin{array}{lrcl}
&&& (x-2)^2+7(x-2)+12=0 \\[4pt]
\text{Prepare for the substitution.} &&& (x-2)^2+7(x-2)+12=0 \\[4pt]
\text{Let }u=x-2\text{ and substitute.} & u^2+7u+12 &=& 0 \\[4pt]
\text{Solve by factoring.} & (u+3)(u+4) &=& 0 \\[4pt]
&&& u+3=0,\quad u+4=0 \\[4pt]
&&& u=-3,\quad u=-4 \\[4pt]
\text{Replace }u\text{ with }x-2. &&& x-2=-3,\quad x-2=-4 \\[4pt]
\text{Solve for }x. &&& x=-1,\quad x=-2
\end{array}
$$

Check:

$$
\begin{array}{rcl}
(-1-2)^2+7(-1-2)+12 &\overset{?}{=}& 0 \\[4pt]
(-3)^2+7(-3)+12 &\overset{?}{=}& 0 \\[4pt]
9-21+12 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-2-2)^2+7(-2-2)+12 &\overset{?}{=}& 0 \\[4pt]
(-4)^2+7(-4)+12 &\overset{?}{=}& 0 \\[4pt]
16-28+12 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $(x-5)^2+6(x-5)+8=0$. Enter both solutions, separated by a comma."
  answer="3, 1"
  answerMode="unordered"
  answerDisplay="$x=3,\ x=1$"
  hint="Let $u=x-5$, solve the quadratic equation in $u$, and then substitute back."
>}}

{{< fillin
  question="Solve $(y-4)^2+8(y-4)+15=0$. Enter both solutions, separated by a comma."
  answer="-1, 1"
  answerMode="unordered"
  answerDisplay="$y=-1,\ y=1$"
  hint="Use $u=y-4$, factor the resulting trinomial, and then solve for $y$."
>}}

In the next example, we notice that $(\sqrt{x})^2=x$. Also, remember that when
we square both sides of an equation, we may introduce extraneous roots. Be sure
to check your answers!

**Example.** Solve $x-3\sqrt{x}+2=0$.

**Solution.**

The $\sqrt{x}$ in the middle term is squared in the first term,
$(\sqrt{x})^2=x$. If we let $u=\sqrt{x}$ and substitute, our trinomial will be
in $ax^2+bx+c=0$ form.

$$
\begin{array}{lrcl}
&&& x-3\sqrt{x}+2=0 \\[4pt]
\text{Rewrite the trinomial to prepare for the substitution.}
&&& (\sqrt{x})^2-3\sqrt{x}+2=0 \\[4pt]
\text{Let }u=\sqrt{x}\text{ and substitute.} & u^2-3u+2 &=& 0 \\[4pt]
\text{Solve by factoring.} & (u-2)(u-1) &=& 0 \\[4pt]
&&& u-2=0,\quad u-1=0 \\[4pt]
&&& u=2,\quad u=1 \\[4pt]
\text{Replace }u\text{ with }\sqrt{x}. &&& \sqrt{x}=2,\quad\sqrt{x}=1 \\[4pt]
\text{Solve for }x\text{ by squaring both sides.} &&& x=4,\quad x=1
\end{array}
$$

Check:

$$
\begin{array}{rcl}
4-3\sqrt{4}+2 &\overset{?}{=}& 0 \\[4pt]
4-6+2 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
1-3\sqrt{1}+2 &\overset{?}{=}& 0 \\[4pt]
1-3+2 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $x-7\sqrt{x}+12=0$. Enter both solutions, separated by a comma."
  answer="9, 16"
  answerMode="unordered"
  answerDisplay="$x=9,\ x=16$"
  hint="Let $u=\sqrt{x}$. After solving for $u$, square to solve for $x$ and check both answers."
>}}

{{< fillin
  question="Solve $x-6\sqrt{x}+8=0$. Enter both solutions, separated by a comma."
  answer="4, 16"
  answerMode="unordered"
  answerDisplay="$x=4,\ x=16$"
  hint="Rewrite $x$ as $(\sqrt{x})^2$ and use $u=\sqrt{x}$."
>}}

Substitutions for rational exponents can also help us solve an equation in
quadratic form. Think of the properties of exponents as you begin the next
example.

**Example.** Solve $x^{\tfrac{2}{3}}-2x^{\tfrac{1}{3}}-24=0$.

**Solution.**

The $x^{\tfrac{1}{3}}$ in the middle term is squared in the first term,
$(x^{\tfrac{1}{3}})^2=x^{\tfrac{2}{3}}$. If we let
$u=x^{\tfrac{1}{3}}$ and substitute, our trinomial will be in
$ax^2+bx+c=0$ form.

$$
\begin{array}{lrcl}
&&& x^{\tfrac{2}{3}}-2x^{\tfrac{1}{3}}-24=0 \\[10pt]
\text{Rewrite the trinomial to prepare for the substitution.}
&&& (x^{\tfrac{1}{3}})^2-2x^{\tfrac{1}{3}}-24=0 \\[10pt]
\text{Let }u=x^{\tfrac{1}{3}}\text{ and substitute.} & u^2-2u-24 &=& 0 \\[4pt]
\text{Solve by factoring.} & (u-6)(u+4) &=& 0 \\[4pt]
&&& u-6=0,\quad u+4=0 \\[4pt]
&&& u=6,\quad u=-4 \\[4pt]
\text{Replace }u\text{ with }x^{\tfrac{1}{3}}.
&&& x^{\tfrac{1}{3}}=6,\quad x^{\tfrac{1}{3}}=-4 \\[10pt]
\text{Solve for }x\text{ by cubing both sides.}
&&& (x^{\tfrac{1}{3}})^3=6^3,\quad (x^{\tfrac{1}{3}})^3=(-4)^3 \\[10pt]
&&& x=216,\quad x=-64
\end{array}
$$

Check:

$$
\begin{array}{rcl}
216^{\tfrac{2}{3}}-2(216)^{\tfrac{1}{3}}-24 &\overset{?}{=}& 0 \\[10pt]
36-12-24 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-64)^{\tfrac{2}{3}}-2(-64)^{\tfrac{1}{3}}-24 &\overset{?}{=}& 0 \\[10pt]
16+8-24 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $x^{\tfrac{2}{3}}-5x^{\tfrac{1}{3}}-14=0$. Enter both solutions, separated by a comma."
  answer="-8, 343"
  answerMode="unordered"
  answerDisplay="$x=-8,\ x=343$"
  hint="Let $u=x^{\tfrac{1}{3}}$, then cube the resulting values of $x^{\tfrac{1}{3}}$."
>}}

{{< fillin
  question="Solve $x^{\tfrac{1}{2}}-8x^{\tfrac{1}{4}}+15=0$. Enter both solutions, separated by a comma."
  answer="81, 625"
  answerMode="unordered"
  answerDisplay="$x=81,\ x=625$"
  hint="Let $u=x^{\tfrac{1}{4}}$ and use $(x^{\tfrac{1}{4}})^2=x^{\tfrac{1}{2}}$."
>}}

In the next example, we need to keep in mind the definition of a negative
exponent as well as the properties of exponents.

**Example.** Solve $3x^{-2}-7x^{-1}+2=0$.

**Solution.**

The $x^{-1}$ in the middle term is squared in the first term,
$(x^{-1})^2=x^{-2}$. If we let $u=x^{-1}$ and substitute, our trinomial will
be in $ax^2+bx+c=0$ form.

$$
\begin{array}{lrcl}
&&& 3x^{-2}-7x^{-1}+2=0 \\[4pt]
\text{Rewrite the trinomial to prepare for the substitution.}
&&& 3(x^{-1})^2-7(x^{-1})+2=0 \\[4pt]
\text{Let }u=x^{-1}\text{ and substitute.} & 3u^2-7u+2 &=& 0 \\[4pt]
\text{Solve by factoring.} & (3u-1)(u-2) &=& 0 \\[4pt]
&&& 3u-1=0,\quad u-2=0 \\[4pt]
&&& u=\tfrac{1}{3},\quad u=2 \\[10pt]
\text{Replace }u\text{ with }x^{-1}.
&&& x^{-1}=\tfrac{1}{3},\quad x^{-1}=2 \\[10pt]
\text{Solve for }x\text{ by taking the reciprocal since }x^{-1}=\tfrac{1}{x}.
&&& x=3,\quad x=\tfrac{1}{2}
\end{array}
$$

Check:

$$
\begin{array}{rcl}
3(3)^{-2}-7(3)^{-1}+2 &\overset{?}{=}& 0 \\[4pt]
3\left(\tfrac{1}{9}\right)-7\left(\tfrac{1}{3}\right)+2
&\overset{?}{=}& 0 \\[10pt]
\tfrac{1}{3}-\tfrac{7}{3}+\tfrac{6}{3} &\overset{?}{=}& 0 \\[10pt]
0&=&0\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
3\left(\tfrac{1}{2}\right)^{-2}-7\left(\tfrac{1}{2}\right)^{-1}+2
&\overset{?}{=}& 0 \\[10pt]
3(4)-7(2)+2 &\overset{?}{=}& 0 \\[4pt]
12-14+2 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $8x^{-2}-10x^{-1}+3=0$. Enter both solutions, separated by a comma."
  answer="\frac{4}{3}, 2"
  answerMode="unordered"
  answerDisplay="$x=\tfrac{4}{3},\ x=2$"
  hint="Let $u=x^{-1}$. After solving for $u$, take reciprocals to find $x$."
>}}

{{< fillin
  question="Solve $6x^{-2}-23x^{-1}+20=0$. Enter both solutions, separated by a comma."
  answer="\frac{2}{5}, \frac{3}{4}"
  answerMode="unordered"
  answerDisplay="$x=\tfrac{2}{5},\ x=\tfrac{3}{4}$"
  hint="Use $u=x^{-1}$, factor the quadratic equation in $u$, and then take reciprocals."
>}}

**Key terms.** An equation is in **quadratic form** when a substitution can
rewrite it in the form $au^2+bu+c=0$, where $a\ne0$.

<small>
Adapted from [*Intermediate Algebra 2e*, Section 9.4](https://openstax.org/books/intermediate-algebra-2e/pages/9-4-solve-equations-in-quadratic-form) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/). Changes: adapted the source to interactive web format and converted Try It exercises to auto-graded questions.
</small>
