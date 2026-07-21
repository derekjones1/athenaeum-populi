---
title: Solve Quadratic Equations by Completing the Square
description: >-
  Completing the square to solve quadratic equations with leading coefficient
  1 and with other leading coefficients — adapted from OpenStax Elementary
  Algebra 2e, Section 10.2.
source_section: "10.2"
weight: 2
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** complete the square of
  a binomial expression, solve quadratic equations of the form
  $x^2+bx+c=0$ by completing the square, and solve quadratic equations of the
  form $ax^2+bx+c=0$ by completing the square.
{{< /callout >}}

So far, we have solved quadratic equations by factoring and using the Square
Root Property. In this section, we will solve quadratic equations by a process
called “completing the square.”

## Complete the Square of a Binomial Expression

In the last section, we were able to use the Square Root Property to solve the
equation $(y-7)^2=12$ because the left side was a perfect square.

$$
\begin{array}{rcl}
y-7 &=& \pm\sqrt{12} \\[4pt]
y-7 &=& \pm2\sqrt{3} \\[4pt]
y &=& 7\pm2\sqrt{3}
\end{array}
$$

We also solved an equation in which the left side was a perfect square
trinomial, but we had to rewrite it in the form $(x-k)^2$ in order to use the
Square Root Property.

$$
\begin{array}{rcl}
x^2-10x+25 &=& 18 \\[4pt]
(x-5)^2 &=& 18
\end{array}
$$

What happens if the variable is not part of a perfect square? Can we use
algebra to make a perfect square?

Let's study the binomial square pattern we have used many times. We will look
at two examples.

$$
\begin{array}{rcl}
(x+9)^2 &=& (x+9)(x+9) \\[4pt]
&=& x^2+9x+9x+81 \\[4pt]
&=& x^2+18x+81
\end{array}
$$

$$
\begin{array}{rcl}
(y-7)^2 &=& (y-7)(y-7) \\[4pt]
&=& y^2-7y-7y+49 \\[4pt]
&=& y^2-14y+49
\end{array}
$$

{{< callout type="info" >}}
  **Binomial Squares Pattern.** If $a,b$ are real numbers,

  $$(a+b)^2=a^2+2ab+b^2$$

  $$(a-b)^2=a^2-2ab+b^2$$
{{< /callout >}}

We can use this pattern to “make” a perfect square.

We will start with the expression $x^2+6x$. Since there is a plus sign between
the two terms, we will use the $(a+b)^2$ pattern.

Notice that the first term of $x^2+6x$ is a square, $x^2$. We now know
$a=x$.

What number can we add to $x^2+6x$ to make a perfect square trinomial?

The middle term of the Binomial Squares Pattern, $2ab$, is twice the product
of the two terms of the binomial. This means twice the product of $x$ and some
number is $6x$. So, two times some number must be six. The number we need is
$\tfrac{1}{2}\cdot6=3$. The second term in the binomial, $b$, must be $3$.

Now, we just square the second term of the binomial to get the last term of
the perfect square trinomial, so we square three to get the last term, nine.

$$x^2+6x+9$$

We can now factor to

$$(x+3)^2.$$

So, we found that adding nine to $x^2+6x$ “completes the square,” and we write
it as $(x+3)^2$.

{{< callout type="info" >}}
  **Complete a square.** To complete the square of $x^2+bx$:

  1. Identify $b$, the coefficient of $x$.
  2. Find $\left(\tfrac{1}{2}b\right)^2$, the number to complete the square.
  3. Add $\left(\tfrac{1}{2}b\right)^2$ to $x^2+bx$.
{{< /callout >}}

**Example 10.14.** Complete the square to make a perfect square trinomial.
Then, write the result as a binomial square: $x^2+14x$.

$$
\begin{array}{lrcl}
\text{The coefficient of }x\text{ is }14. &&& x^2+14x \\[4pt]
\text{Find }\left(\tfrac{1}{2}b\right)^2. &&&
\left(\tfrac{1}{2}\cdot14\right)^2=7^2=49 \\[10pt]
\text{Add }49\text{ to the binomial to complete the square.} &&&
x^2+14x+49 \\[4pt]
\text{Rewrite as a binomial square.} &&& (x+7)^2
\end{array}
$$

**Example 10.15.** Complete the square to make a perfect square trinomial.
Then, write the result as a binomial squared: $m^2-26m$.

$$
\begin{array}{lrcl}
\text{The coefficient of }m\text{ is }-26. &&& m^2-26m \\[4pt]
\text{Find }\left(\tfrac{1}{2}b\right)^2. &&&
\left(\tfrac{1}{2}\cdot(-26)\right)^2=(-13)^2=169 \\[10pt]
\text{Add }169\text{ to the binomial to complete the square.} &&&
m^2-26m+169 \\[4pt]
\text{Rewrite as a binomial square.} &&& (m-13)^2
\end{array}
$$

**Example 10.16.** Complete the square to make a perfect square trinomial.
Then, write the result as a binomial squared: $u^2-9u$.

$$
\begin{array}{lrcl}
\text{The coefficient of }u\text{ is }-9. &&& u^2-9u \\[4pt]
\text{Find }\left(\tfrac{1}{2}b\right)^2. &&&
\left(\tfrac{1}{2}\cdot(-9)\right)^2=\left(-\tfrac{9}{2}\right)^2=\tfrac{81}{4} \\[10pt]
\text{Add }\tfrac{81}{4}\text{ to the binomial to complete the square.} &&&
u^2-9u+\tfrac{81}{4} \\[10pt]
\text{Rewrite as a binomial square.} &&& \left(u-\tfrac{9}{2}\right)^2
\end{array}
$$

**Example 10.17.** Complete the square to make a perfect square trinomial.
Then, write the result as a binomial squared:
$p^2+\tfrac{1}{2}p$.

$$
\begin{array}{lrcl}
\text{The coefficient of }p\text{ is }\tfrac{1}{2}. &&&
p^2+\tfrac{1}{2}p \\[10pt]
\text{Find }\left(\tfrac{1}{2}b\right)^2. &&&
\left(\tfrac{1}{2}\cdot\tfrac{1}{2}\right)^2=
\left(\tfrac{1}{4}\right)^2=\tfrac{1}{16} \\[10pt]
\text{Add }\tfrac{1}{16}\text{ to the binomial to complete the square.} &&&
p^2+\tfrac{1}{2}p+\tfrac{1}{16} \\[10pt]
\text{Rewrite as a binomial square.} &&&
\left(p+\tfrac{1}{4}\right)^2
\end{array}
$$

{{< fillin
  question="Complete the square to make a perfect square trinomial. Enter the result as a binomial square: $a^2-20a$."
  answer="(a-10)^2"
  answerDisplay="$(a-10)^2$"
  hint="Find $\left(\tfrac{1}{2}b\right)^2$, add it to the binomial, and factor."
>}}

## Solve Quadratic Equations of the Form $x^2+bx+c=0$ by Completing the Square

In solving equations, we must always do the same thing to both sides of the
equation. This is true, of course, when we solve a quadratic equation by
completing the square, too. When we add a term to one side of the equation to
make a perfect square trinomial, we must also add the same term to the other
side of the equation.

For example, if we start with the equation $x^2+6x=40$ and we want to complete
the square on the left, we will add nine to both sides of the equation.

$$
\begin{array}{rcl}
x^2+6x &=& 40 \\[4pt]
x^2+6x+9 &=& 40+9
\end{array}
$$

Then, we factor on the left and simplify on the right.

$$(x+3)^2=49$$

Now the equation is in the form to solve using the Square Root Property.
Completing the square is a way to transform an equation into the form we need
to be able to use the Square Root Property.

**Example 10.18. How to Solve a Quadratic Equation of the Form
$x^2+bx+c=0$ by Completing the Square.** Solve $x^2+8x=48$ by completing the
square.

$$
\begin{array}{lrcl}
\text{The variable terms are on the left side.} & x^2+8x &=& 48 \\[4pt]
\text{Take half of }8\text{ and square it.} &
\left(\tfrac{1}{2}\cdot8\right)^2 &=& 16 \\[10pt]
\text{Add }16\text{ to both sides.} & x^2+8x+16 &=& 48+16 \\[4pt]
\text{Factor the perfect square trinomial as a binomial square.} &
(x+4)^2 &=& 64 \\[4pt]
\text{Use the Square Root Property.} & x+4 &=& \pm\sqrt{64} \\[4pt]
\text{Simplify the radical.} & x+4 &=& \pm8 \\[4pt]
\text{Solve the two resulting equations.} & x &=& 4,\ -12
\end{array}
$$

**Check the solutions.**

$$
\begin{array}{rcl}
(4)^2+8(4) &\overset{?}{=}& 48 \\[4pt]
16+32 &\overset{?}{=}& 48 \\[4pt]
48 &=& 48\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-12)^2+8(-12) &\overset{?}{=}& 48 \\[4pt]
144-96 &\overset{?}{=}& 48 \\[4pt]
48 &=& 48\ \checkmark
\end{array}
$$

{{< callout type="info" >}}
  **Solve a quadratic equation of the form $x^2+bx+c=0$ by completing the
  square.**

  1. Isolate the variable terms on one side and the constant terms on the
     other.
  2. Find $\left(\tfrac{1}{2}b\right)^2$, the number to complete the square.
     Add it to both sides of the equation.
  3. Factor the perfect square trinomial as a binomial square.
  4. Use the Square Root Property.
  5. Simplify the radical and then solve the two resulting equations.
  6. Check the solutions.
{{< /callout >}}

**Example 10.19.** Solve $y^2-6y=16$ by completing the square.

$$
\begin{array}{lrcl}
\text{The variable terms are on the left side.} & y^2-6y &=& 16 \\[4pt]
\text{Take half of }-6\text{ and square it.} &
\left(\tfrac{1}{2}\cdot(-6)\right)^2 &=& 9 \\[10pt]
\text{Add }9\text{ to both sides.} & y^2-6y+9 &=& 16+9 \\[4pt]
\text{Factor the perfect square trinomial as a binomial square.} &
(y-3)^2 &=& 25 \\[4pt]
\text{Use the Square Root Property.} & y-3 &=& \pm\sqrt{25} \\[4pt]
\text{Simplify the radical.} & y-3 &=& \pm5 \\[4pt]
\text{Solve for }y. & y &=& 3\pm5 \\[4pt]
\text{Rewrite to show two solutions.} & y &=& 3+5,\ 3-5 \\[4pt]
\text{Solve the equations.} & y &=& 8,\ -2
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
8^2-6\cdot8 &\overset{?}{=}& 16 \\[4pt]
64-48 &\overset{?}{=}& 16 \\[4pt]
16 &=& 16\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-2)^2-6(-2) &\overset{?}{=}& 16 \\[4pt]
4+12 &\overset{?}{=}& 16 \\[4pt]
16 &=& 16\ \checkmark
\end{array}
$$

**Example 10.20.** Solve $x^2+4x=-21$ by completing the square.

$$
\begin{array}{lrcl}
\text{The variable terms are on the left side.} & x^2+4x &=& -21 \\[4pt]
\text{Take half of }4\text{ and square it.} &
\left(\tfrac{1}{2}\cdot4\right)^2 &=& 4 \\[10pt]
\text{Add }4\text{ to both sides.} & x^2+4x+4 &=& -21+4 \\[4pt]
\text{Factor the perfect square trinomial as a binomial square.} &
(x+2)^2 &=& -17 \\[4pt]
\text{Use the Square Root Property.} & x+2 &=& \pm\sqrt{-17}
\end{array}
$$

We cannot take the square root of a negative number. There is no real
solution.

In the previous example, there was no real solution because $(x+k)^2$ was
equal to a negative number.

**Example 10.21.** Solve $p^2-18p=-6$ by completing the square.

$$
\begin{array}{lrcl}
\text{The variable terms are on the left side.} & p^2-18p &=& -6 \\[4pt]
\text{Take half of }-18\text{ and square it.} &
\left(\tfrac{1}{2}\cdot(-18)\right)^2 &=& 81 \\[10pt]
\text{Add }81\text{ to both sides.} & p^2-18p+81 &=& -6+81 \\[4pt]
\text{Factor the perfect square trinomial as a binomial square.} &
(p-9)^2 &=& 75 \\[4pt]
\text{Use the Square Root Property.} & p-9 &=& \pm\sqrt{75} \\[4pt]
\text{Simplify the radical.} & p-9 &=& \pm5\sqrt{3} \\[4pt]
\text{Solve for }p. & p &=& 9\pm5\sqrt{3} \\[4pt]
\text{Rewrite to show two solutions.} & p &=&
9+5\sqrt{3},\ 9-5\sqrt{3}
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
(9+5\sqrt{3})^2-18(9+5\sqrt{3}) &\overset{?}{=}& -6 \\[4pt]
81+90\sqrt{3}+75-162-90\sqrt{3} &\overset{?}{=}& -6 \\[4pt]
-6 &=& -6\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(9-5\sqrt{3})^2-18(9-5\sqrt{3}) &\overset{?}{=}& -6 \\[4pt]
81-90\sqrt{3}+75-162+90\sqrt{3} &\overset{?}{=}& -6 \\[4pt]
-6 &=& -6\ \checkmark
\end{array}
$$

Another way to check this would be to use a calculator. Evaluate $p^2-18p$
for both of the solutions. The answer should be $-6$.

{{< fillin
  question="Solve $y^2+8y=11$ by completing the square. Enter both solutions separated by commas, least to greatest."
  answer="-4-3\sqrt{3}, -4+3\sqrt{3}"
  answerDisplay="$-4-3\sqrt{3},\ -4+3\sqrt{3}$"
  hint="Add $16$ to both sides, factor the perfect square trinomial, and use the Square Root Property."
>}}

We will start the next example by isolating the variable terms on the left
side of the equation.

**Example 10.22.** Solve $x^2+10x+4=15$ by completing the square.

$$
\begin{array}{lrcl}
\text{The variable terms are on the left side.} & x^2+10x+4 &=& 15 \\[4pt]
\text{Subtract }4\text{ to get the constant terms on the right side.} &
x^2+10x &=& 11 \\[4pt]
\text{Take half of }10\text{ and square it.} &
\left(\tfrac{1}{2}\cdot10\right)^2 &=& 25 \\[10pt]
\text{Add }25\text{ to both sides.} & x^2+10x+25 &=& 11+25 \\[4pt]
\text{Factor the perfect square trinomial as a binomial square.} &
(x+5)^2 &=& 36 \\[4pt]
\text{Use the Square Root Property.} & x+5 &=& \pm\sqrt{36} \\[4pt]
\text{Simplify the radical.} & x+5 &=& \pm6 \\[4pt]
\text{Solve for }x. & x &=& -5\pm6 \\[4pt]
\text{Rewrite to show two equations.} & x &=& -5+6,\ -5-6 \\[4pt]
\text{Solve the equations.} & x &=& 1,\ -11
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
(1)^2+10(1)+4 &\overset{?}{=}& 15 \\[4pt]
1+10+4 &\overset{?}{=}& 15 \\[4pt]
15 &=& 15\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-11)^2+10(-11)+4 &\overset{?}{=}& 15 \\[4pt]
121-110+4 &\overset{?}{=}& 15 \\[4pt]
15 &=& 15\ \checkmark
\end{array}
$$

To solve the next equation, we must first collect all the variable terms to
the left side of the equation. Then, we proceed as we did in the previous
examples.

**Example 10.23.** Solve $n^2=3n+11$ by completing the square.

$$
\begin{array}{lrcl}
& n^2 &=& 3n+11 \\[4pt]
\text{Subtract }3n\text{ to get the variable terms on the left side.} &
n^2-3n &=& 11 \\[4pt]
\text{Take half of }-3\text{ and square it.} &
\left(\tfrac{1}{2}\cdot(-3)\right)^2 &=& \tfrac{9}{4} \\[10pt]
\text{Add }\tfrac{9}{4}\text{ to both sides.} &
n^2-3n+\tfrac{9}{4} &=& 11+\tfrac{9}{4} \\[10pt]
\text{Factor the perfect square trinomial as a binomial square.} &
\left(n-\tfrac{3}{2}\right)^2 &=& \tfrac{44}{4}+\tfrac{9}{4} \\[10pt]
\text{Add the fractions on the right side.} &
\left(n-\tfrac{3}{2}\right)^2 &=& \tfrac{53}{4} \\[10pt]
\text{Use the Square Root Property.} & n-\tfrac{3}{2} &=&
\pm\sqrt{\tfrac{53}{4}} \\[10pt]
\text{Simplify the radical.} & n-\tfrac{3}{2} &=&
\pm\tfrac{\sqrt{53}}{2} \\[10pt]
\text{Solve for }n. & n &=&
\tfrac{3}{2}\pm\tfrac{\sqrt{53}}{2} \\[10pt]
\text{Rewrite to show two equations.} & n &=&
\tfrac{3}{2}+\tfrac{\sqrt{53}}{2},\
\tfrac{3}{2}-\tfrac{\sqrt{53}}{2}
\end{array}
$$

Check. We leave the check for you!

Notice that the left side of the next equation is in factored form. But the
right side is not zero, so we cannot use the Zero Product Property. Instead,
we multiply the factors and then put the equation into the standard form to
solve by completing the square.

**Example 10.24.** Solve $(x-3)(x+5)=9$ by completing the square.

$$
\begin{array}{lrcl}
& (x-3)(x+5) &=& 9 \\[4pt]
\text{We multiply binomials on the left.} & x^2+2x-15 &=& 9 \\[4pt]
\text{Add }15\text{ to get the variable terms on the left side.} &
x^2+2x &=& 24 \\[4pt]
\text{Take half of }2\text{ and square it.} &
\left(\tfrac{1}{2}\cdot2\right)^2 &=& 1 \\[10pt]
\text{Add }1\text{ to both sides.} & x^2+2x+1 &=& 24+1 \\[4pt]
\text{Factor the perfect square trinomial as a binomial square.} &
(x+1)^2 &=& 25 \\[4pt]
\text{Use the Square Root Property.} & x+1 &=& \pm\sqrt{25} \\[4pt]
\text{Solve for }x. & x &=& -1\pm5 \\[4pt]
\text{Rewrite to show two solutions.} & x &=& -1+5,\ -1-5 \\[4pt]
\text{Simplify.} & x &=& 4,\ -6
\end{array}
$$

Check. We leave the check for you!

## Solve Quadratic Equations of the Form $ax^2+bx+c=0$ by Completing the Square

The process of completing the square works best when the leading coefficient
is one, so the left side of the equation is of the form $x^2+bx+c$. If the
$x^2$ term has a coefficient, we take some preliminary steps to make the
coefficient equal to one.

Sometimes the coefficient can be factored from all three terms of the
trinomial. This will be our strategy in the next example.

**Example 10.25.** Solve $3x^2-12x-15=0$ by completing the square.

To complete the square, we need the coefficient of $x^2$ to be one. If we
factor out the coefficient of $x^2$ as a common factor, we can continue with
solving the equation by completing the square.

$$
\begin{array}{lrcl}
& 3x^2-12x-15 &=& 0 \\[4pt]
\text{Factor out the greatest common factor.} & 3(x^2-4x-5) &=& 0 \\[4pt]
\text{Divide both sides by }3\text{ to isolate the trinomial.} &
\tfrac{3(x^2-4x-5)}{3} &=& \tfrac{0}{3} \\[10pt]
\text{Simplify.} & x^2-4x-5 &=& 0 \\[4pt]
\text{Subtract }5\text{ to get the constant terms on the right.} &
x^2-4x &=& 5 \\[4pt]
\text{Take half of }-4\text{ and square it.} &
\left(\tfrac{1}{2}\cdot(-4)\right)^2 &=& 4 \\[10pt]
\text{Add }4\text{ to both sides.} & x^2-4x+4 &=& 5+4 \\[4pt]
\text{Factor the perfect square trinomial as a binomial square.} &
(x-2)^2 &=& 9 \\[4pt]
\text{Use the Square Root Property.} & x-2 &=& \pm\sqrt{9} \\[4pt]
\text{Solve for }x. & x-2 &=& \pm3 \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 2+3,\ 2-3 \\[4pt]
\text{Simplify.} & x &=& 5,\ -1
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
3(5)^2-12(5)-15 &\overset{?}{=}& 0 \\[4pt]
75-60-15 &\overset{?}{=}& 0 \\[4pt]
0 &=& 0\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
3(-1)^2-12(-1)-15 &\overset{?}{=}& 0 \\[4pt]
3+12-15 &\overset{?}{=}& 0 \\[4pt]
0 &=& 0\ \checkmark
\end{array}
$$

To complete the square, the leading coefficient must be one. When the leading
coefficient is not a factor of all the terms, we will divide both sides of the
equation by the leading coefficient. This will give us a fraction for the
second coefficient. We have already seen how to complete the square with
fractions in this section.

**Example 10.26.** Solve $2x^2-3x=20$ by completing the square.

Again, our first step will be to make the coefficient of $x^2$ be one. By
dividing both sides of the equation by the coefficient of $x^2$, we can then
continue with solving the equation by completing the square.

$$
\begin{array}{lrcl}
& 2x^2-3x &=& 20 \\[4pt]
\text{Divide both sides by }2\text{ to get the coefficient of }x^2\text{ to be }1. &
\tfrac{2x^2-3x}{2} &=& \tfrac{20}{2} \\[10pt]
\text{Simplify.} & x^2-\tfrac{3}{2}x &=& 10 \\[10pt]
\text{Take half of }-\tfrac{3}{2}\text{ and square it.} &
\left(\tfrac{1}{2}\cdot-\tfrac{3}{2}\right)^2 &=& \tfrac{9}{16} \\[10pt]
\text{Add }\tfrac{9}{16}\text{ to both sides.} &
x^2-\tfrac{3}{2}x+\tfrac{9}{16} &=& 10+\tfrac{9}{16} \\[10pt]
\text{Factor the perfect square trinomial as a binomial square.} &
\left(x-\tfrac{3}{4}\right)^2 &=& \tfrac{160}{16}+\tfrac{9}{16} \\[10pt]
\text{Add the fractions on the right side.} &
\left(x-\tfrac{3}{4}\right)^2 &=& \tfrac{169}{16} \\[10pt]
\text{Use the Square Root Property.} & x-\tfrac{3}{4} &=&
\pm\sqrt{\tfrac{169}{16}} \\[10pt]
\text{Simplify the radical.} & x-\tfrac{3}{4} &=& \pm\tfrac{13}{4} \\[10pt]
\text{Solve for }x. & x &=& \tfrac{3}{4}\pm\tfrac{13}{4} \\[10pt]
\text{Rewrite to show two solutions.} & x &=&
\tfrac{3}{4}+\tfrac{13}{4},\ \tfrac{3}{4}-\tfrac{13}{4} \\[10pt]
\text{Simplify.} & x &=& 4,\ -\tfrac{5}{2}
\end{array}
$$

Check. We leave the check for you.

**Example 10.27.** Solve $3x^2+2x=4$ by completing the square.

Again, our first step will be to make the coefficient of $x^2$ be one. By
dividing both sides of the equation by the coefficient of $x^2$, we can then
continue with solving the equation by completing the square.

$$
\begin{array}{lrcl}
& 3x^2+2x &=& 4 \\[4pt]
\text{Divide both sides by }3\text{ to make the coefficient of }x^2\text{ equal }1. &
\tfrac{3x^2+2x}{3} &=& \tfrac{4}{3} \\[10pt]
\text{Simplify.} & x^2+\tfrac{2}{3}x &=& \tfrac{4}{3} \\[10pt]
\text{Take half of }\tfrac{2}{3}\text{ and square it.} &
\left(\tfrac{1}{2}\cdot\tfrac{2}{3}\right)^2 &=& \tfrac{1}{9} \\[10pt]
\text{Add }\tfrac{1}{9}\text{ to both sides.} &
x^2+\tfrac{2}{3}x+\tfrac{1}{9} &=& \tfrac{4}{3}+\tfrac{1}{9} \\[10pt]
\text{Factor the perfect square trinomial as a binomial square.} &
\left(x+\tfrac{1}{3}\right)^2 &=& \tfrac{12}{9}+\tfrac{1}{9} \\[10pt]
\text{Use the Square Root Property.} & x+\tfrac{1}{3} &=&
\pm\sqrt{\tfrac{13}{9}} \\[10pt]
\text{Simplify the radical.} & x+\tfrac{1}{3} &=&
\pm\tfrac{\sqrt{13}}{3} \\[10pt]
\text{Solve for }x. & x &=& -\tfrac{1}{3}\pm\tfrac{\sqrt{13}}{3} \\[10pt]
\text{Rewrite to show two solutions.} & x &=&
-\tfrac{1}{3}+\tfrac{\sqrt{13}}{3},\
-\tfrac{1}{3}-\tfrac{\sqrt{13}}{3}
\end{array}
$$

Check. We leave the check for you.

{{< fillin
  question="Solve $4x^2+3x=12$ by completing the square. Enter both solutions separated by commas, least to greatest."
  answer="(-3-\sqrt{201})/8, (-3+\sqrt{201})/8"
  answerDisplay="$\tfrac{-3-\sqrt{201}}{8},\ \tfrac{-3+\sqrt{201}}{8}$"
  hint="Divide both sides by $4$, complete the square, and use both signs from the Square Root Property."
>}}

## Key terms

**Binomial Squares Pattern** — $(a+b)^2=a^2+2ab+b^2$ and
$(a-b)^2=a^2-2ab+b^2$. **complete the square** — for an expression
$x^2+bx$, add $\left(\tfrac{1}{2}b\right)^2$ to make a perfect square
trinomial. **perfect square trinomial** — a trinomial of the form
$a^2+2ab+b^2$ or $a^2-2ab+b^2$; it factors to $(a+b)^2$ or $(a-b)^2$.
**Square Root Property** — if $x^2=k$ and $k\geq0$, then $x=\sqrt{k}$ or
$x=-\sqrt{k}$.

---

<small>This page is adapted from [Elementary Algebra 2e, Section 10.2](https://openstax.org/books/elementary-algebra-2e/pages/10-2-solve-quadratic-equations-by-completing-the-square) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: reformatted the source for accessible web presentation and converted selected Try It problems into interactive exercises; the source exercise set and media links are omitted.</small>
