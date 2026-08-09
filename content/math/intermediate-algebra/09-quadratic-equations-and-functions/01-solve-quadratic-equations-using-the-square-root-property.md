---
title: Solve Quadratic Equations Using the Square Root Property
description: >-
  Solving quadratic equations of the forms ax² = k and a(x − h)² = k using
  the Square Root Property — adapted from OpenStax Intermediate Algebra 2e,
  Section 9.1.
source_section: "9.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve quadratic equations of the form $ax^2=k$ using the Square Root Property
- Solve quadratic equations of the form $a(x-h)^2=k$ using the Square Root Property
{{< /callout >}}

A quadratic equation is an equation of the form $ax^2+bx+c=0$, where
$a\ne0$. Quadratic equations differ from linear equations by including a
quadratic term with the variable raised to the second power of the form
$ax^2$. We use different methods to solve quadratic equations than linear
equations, because just adding, subtracting, multiplying, and dividing terms
will not isolate the variable.

We have seen that some quadratic equations can be solved by factoring. In this
chapter, we will learn three other methods to use in case a quadratic equation
cannot be factored.

## Solve Quadratic Equations of the form $ax^2=k$ using the Square Root Property

We have already solved some quadratic equations by factoring. Let’s review how
we used factoring to solve the quadratic equation $x^2=9$.

$$
\begin{array}{lrcl}
&&& x^2=9 \\[4pt]
\text{Put the equation in standard form.} & x^2-9 &=& 0 \\[4pt]
\text{Factor the difference of squares.} & (x-3)(x+3) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & x-3 &=& 0\quad\text{or}\quad x+3=0 \\[4pt]
\text{Solve each equation.} & x &=& 3\quad\text{or}\quad x=-3
\end{array}
$$

We can easily use factoring to find the solutions of similar equations, like
$x^2=16$ and $x^2=25$, because 16 and 25 are perfect squares. In each case,
we would get two solutions, $x=4$, $x=-4$ and $x=5$, $x=-5$. But what happens
when we have an equation like $x^2=7$? Since 7 is not a perfect square, we
cannot solve the equation by factoring.

Previously we learned that since 169 is the square of 13, we can also say that
13 is a *square root* of 169. Also, $(-13)^2=169$, so $-13$ is also a square
root of 169. Therefore, both 13 and $-13$ are square roots of 169. So, every
positive number has two square roots—one positive and one negative. We earlier
defined the square root of a number in this way:

$$\text{If }n^2=m,\text{ then }n\text{ is a square root of }m.$$

Since these equations are all of the form $x^2=k$, the square root definition
tells us the solutions are the two square roots of $k$. This leads to the
**Square Root Property**.

{{< callout type="info" >}}
  **Square Root Property.** If $x^2=k$, then

  $$x=\sqrt{k}\quad\text{or}\quad x=-\sqrt{k}\quad\text{or}\quad x=\pm\sqrt{k}.$$
{{< /callout >}}

Notice that the Square Root Property gives two solutions to an equation of the
form $x^2=k$, the principal square root of $k$ and its opposite. We could also
write the solution as $x=\pm\sqrt{k}$. We read this as $x$ equals positive or
negative the square root of $k$.

Now we will solve the equation $x^2=9$ again, this time using the Square Root
Property.

$$
\begin{array}{lrcl}
&&& x^2=9 \\[4pt]
\text{Use the Square Root Property.} & x &=& \pm\sqrt{9} \\[4pt]
&&& x=\pm3 \\[4pt]
&&& \text{So }x=3\text{ or }x=-3.
\end{array}
$$

What happens when the constant is not a perfect square? Let’s use the Square
Root Property to solve the equation $x^2=7$.

$$
\begin{array}{lrcl}
&&& x^2=7 \\[4pt]
\text{Use the Square Root Property.} & x &=& \sqrt{7},\quad x=-\sqrt{7}
\end{array}
$$

We cannot simplify $\sqrt{7}$, so we leave the answer as a radical.

**Example.** Solve $x^2-50=0$.

$$
\begin{array}{lrcl}
&&& x^2-50=0 \\[4pt]
\text{Isolate the quadratic term and make its coefficient one.} & x^2 &=& 50 \\[4pt]
\text{Use the Square Root Property. Remember to write the }\pm\text{ symbol.} & x &=& \pm\sqrt{50} \\[4pt]
\text{Simplify the radical.} & x &=& \pm\sqrt{25}\cdot\sqrt{2} \\[4pt]
&&& x=\pm5\sqrt{2} \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 5\sqrt{2},\quad x=-5\sqrt{2}
\end{array}
$$

Check the solutions:

$$
\begin{array}{rcl}
(5\sqrt{2})^2-50 &\overset{?}{=}& 0 \\[4pt]
25\cdot2-50 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-5\sqrt{2})^2-50 &\overset{?}{=}& 0 \\[4pt]
25\cdot2-50 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $x^2-48=0$. Enter both solutions, separated by a comma."
  answer="4\sqrt{3}, -4\sqrt{3}"
  answerMode="unordered"
  answerDisplay="$x=4\sqrt{3},\ x=-4\sqrt{3}$"
  hint="Isolate $x^2$, use the Square Root Property, and simplify $\sqrt{48}$."
>}}

{{< fillin
  question="Solve $y^2-27=0$. Enter both solutions, separated by a comma."
  answer="3\sqrt{3}, -3\sqrt{3}"
  answerMode="unordered"
  answerDisplay="$y=3\sqrt{3},\ y=-3\sqrt{3}$"
  hint="Isolate $y^2$, use the Square Root Property, and simplify the radical."
>}}

The steps to take to use the Square Root Property to solve a quadratic
equation are listed here.

{{< callout type="info" >}}
  **Solve a quadratic equation using the Square Root Property.**

  1. Isolate the quadratic term and make its coefficient one.
  2. Use the Square Root Property.
  3. Simplify the radical.
  4. Check the solutions.
{{< /callout >}}

In order to use the Square Root Property, the coefficient of the variable term
must equal one. In the next example, we must divide both sides of the equation
by the coefficient 3 before using the Square Root Property.

**Example.** Solve $3z^2=108$.

$$
\begin{array}{lrcl}
&&& 3z^2=108 \\[4pt]
\text{The quadratic term is isolated. Divide by 3 to make its coefficient 1.}
& \tfrac{3z^2}{3} &=& \tfrac{108}{3} \\[10pt]
\text{Simplify.} & z^2 &=& 36 \\[4pt]
\text{Use the Square Root Property.} & z &=& \pm\sqrt{36} \\[4pt]
\text{Simplify the radical.} & z &=& \pm6 \\[4pt]
\text{Rewrite to show two solutions.} & z &=& 6,\quad z=-6
\end{array}
$$

Check: $3(6)^2=108$ and $3(-6)^2=108$.

{{< fillin
  question="Solve $2x^2=98$. Enter both solutions, separated by a comma."
  answer="7, -7"
  answerMode="unordered"
  answerDisplay="$x=7,\ x=-7$"
  hint="Divide both sides by 2 before using the Square Root Property."
>}}

{{< fillin
  question="Solve $5m^2=80$. Enter both solutions, separated by a comma."
  answer="4, -4"
  answerMode="unordered"
  answerDisplay="$m=4,\ m=-4$"
  hint="Make the coefficient of $m^2$ equal to one, then take both square roots."
>}}

The Square Root Property states “If $x^2=k$.” What will happen if $k<0$?
This will be the case in the next example.

**Example.** Solve $x^2+72=0$.

$$
\begin{array}{lrcl}
&&& x^2+72=0 \\[4pt]
\text{Isolate the quadratic term.} & x^2 &=& -72 \\[4pt]
\text{Use the Square Root Property.} & x &=& \pm\sqrt{-72} \\[4pt]
\text{Simplify using complex numbers.} & x &=& \pm\sqrt{72}\,i \\[4pt]
\text{Simplify the radical.} & x &=& \pm6\sqrt{2}\,i \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 6\sqrt{2}\,i,\quad x=-6\sqrt{2}\,i
\end{array}
$$

Check the solutions:

$$
\begin{array}{rcl}
(6\sqrt{2}\,i)^2+72 &\overset{?}{=}& 0 \\[4pt]
6^2(\sqrt{2})^2i^2+72 &\overset{?}{=}& 0 \\[4pt]
36\cdot2\cdot(-1)+72 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-6\sqrt{2}\,i)^2+72 &\overset{?}{=}& 0 \\[4pt]
(-6)^2(\sqrt{2})^2i^2+72 &\overset{?}{=}& 0 \\[4pt]
36\cdot2\cdot(-1)+72 &\overset{?}{=}& 0 \\[4pt]
0&=&0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $c^2+12=0$. Enter both solutions, separated by a comma."
  answer="2\sqrt{3}i, -2\sqrt{3}i"
  answerMode="unordered"
  answerDisplay="$c=2\sqrt{3}\,i,\ c=-2\sqrt{3}\,i$"
  hint="After isolating $c^2$, use $\sqrt{-1}=i$ and simplify the radical."
>}}

{{< fillin
  question="Solve $q^2+24=0$. Enter both solutions, separated by a comma."
  answer="2\sqrt{6}i, -2\sqrt{6}i"
  answerMode="unordered"
  answerDisplay="$q=2\sqrt{6}\,i,\ q=-2\sqrt{6}\,i$"
  hint="The isolated quadratic term equals a negative number, so the solutions are complex."
>}}

Our method also works when fractions occur in the equation; we solve as any
equation with fractions. In the next example, we first isolate the quadratic
term, and then make the coefficient equal to one.

**Example.** Solve $\tfrac{2}{3}u^2+5=17$.

$$
\begin{array}{lrcl}
&&& \tfrac{2}{3}u^2+5=17 \\[10pt]
\text{Isolate the quadratic term.} & \tfrac{2}{3}u^2 &=& 12 \\[10pt]
\text{Multiply by }\tfrac{3}{2}\text{ to make the coefficient 1.}
& \tfrac{3}{2}\cdot\tfrac{2}{3}u^2 &=& \tfrac{3}{2}\cdot12 \\[10pt]
\text{Simplify.} & u^2 &=& 18 \\[4pt]
\text{Use the Square Root Property.} & u &=& \pm\sqrt{18} \\[4pt]
\text{Simplify the radical.} & u &=& \pm\sqrt{9}\cdot\sqrt{2} \\[4pt]
&&& u=\pm3\sqrt{2} \\[4pt]
\text{Rewrite to show two solutions.} & u &=& 3\sqrt{2},\quad u=-3\sqrt{2}
\end{array}
$$

Check: $\tfrac{2}{3}(3\sqrt{2})^2+5=17$ and
$\tfrac{2}{3}(-3\sqrt{2})^2+5=17$.

{{< fillin
  question="Solve $\tfrac{1}{2}x^2+4=24$. Enter both solutions, separated by a comma."
  answer="2\sqrt{10}, -2\sqrt{10}"
  answerMode="unordered"
  answerDisplay="$x=2\sqrt{10},\ x=-2\sqrt{10}$"
  hint="First subtract 4, then make the coefficient of $x^2$ equal to one."
>}}

{{< fillin
  question="Solve $\tfrac{3}{4}y^2-3=18$. Enter both solutions, separated by a comma."
  answer="2\sqrt{7}, -2\sqrt{7}"
  answerMode="unordered"
  answerDisplay="$y=2\sqrt{7},\ y=-2\sqrt{7}$"
  hint="Isolate the quadratic term, multiply by the reciprocal of its coefficient, and simplify."
>}}

The solutions to some equations may have fractions inside the radicals. When
this happens, we must rationalize the denominator.

**Example.** Solve $2x^2-8=41$.

$$
\begin{array}{lrcl}
&&& 2x^2-8=41 \\[4pt]
\text{Isolate the quadratic term.} & 2x^2 &=& 49 \\[4pt]
\text{Divide by 2 to make the coefficient 1.} & \tfrac{2x^2}{2} &=& \tfrac{49}{2} \\[10pt]
\text{Simplify.} & x^2 &=& \tfrac{49}{2} \\[10pt]
\text{Use the Square Root Property.} & x &=& \pm\sqrt{\tfrac{49}{2}} \\[10pt]
\text{Rewrite the radical as a fraction of square roots.} & x &=& \pm\tfrac{\sqrt{49}}{\sqrt{2}} \\[10pt]
\text{Rationalize the denominator.} & x &=& \pm\tfrac{\sqrt{49}\cdot\sqrt{2}}{\sqrt{2}\cdot\sqrt{2}} \\[10pt]
\text{Simplify.} & x &=& \pm\tfrac{7\sqrt{2}}{2} \\[10pt]
\text{Rewrite to show two solutions.} & x &=& \tfrac{7\sqrt{2}}{2},\quad x=-\tfrac{7\sqrt{2}}{2}
\end{array}
$$

Check: We leave the check for you.

{{< fillin
  question="Solve $5r^2-2=34$. Enter both solutions, separated by a comma."
  answer="\frac{6\sqrt{5}}{5}, -\frac{6\sqrt{5}}{5}"
  answerMode="unordered"
  answerDisplay="$r=\tfrac{6\sqrt{5}}{5},\ r=-\tfrac{6\sqrt{5}}{5}$"
  hint="Isolate $r^2$, take both square roots, and rationalize the denominator."
>}}

{{< fillin
  question="Solve $3t^2+6=70$. Enter both solutions, separated by a comma."
  answer="\frac{8\sqrt{3}}{3}, -\frac{8\sqrt{3}}{3}"
  answerMode="unordered"
  answerDisplay="$t=\tfrac{8\sqrt{3}}{3},\ t=-\tfrac{8\sqrt{3}}{3}$"
  hint="After isolating $t^2$, simplify the square root and rationalize the denominator."
>}}

## Solve Quadratic Equations of the form $a(x-h)^2=k$ using the Square Root Property

We can use the Square Root Property to solve an equation of the form
$a(x-h)^2=k$ as well. Notice that the quadratic term, $x$, in the original
form $ax^2=k$ is replaced with $(x-h)$.

$$ax^2=k\qquad a(x-h)^2=k$$

The first step, like before, is to isolate the term that has the variable
squared. In this case, a binomial is being squared. Once the binomial is
isolated, by dividing each side by the coefficient of $a$, then the Square
Root Property can be used on $(x-h)^2$.

**Example.** Solve $4(y-7)^2=48$.

$$
\begin{array}{lrcl}
&&& 4(y-7)^2=48 \\[4pt]
\text{Divide both sides by the coefficient 4.} & (y-7)^2 &=& 12 \\[4pt]
\text{Use the Square Root Property on the binomial.} & y-7 &=& \pm\sqrt{12} \\[4pt]
\text{Simplify the radical.} & y-7 &=& \pm2\sqrt{3} \\[4pt]
\text{Solve for }y. & y &=& 7\pm2\sqrt{3} \\[4pt]
\text{Rewrite to show two solutions.} & y &=& 7+2\sqrt{3},\quad y=7-2\sqrt{3}
\end{array}
$$

Check: $4(7+2\sqrt{3}-7)^2=48$ and
$4(7-2\sqrt{3}-7)^2=48$.

{{< fillin
  question="Solve $3(a-3)^2=54$. Enter both solutions, separated by a comma."
  answer="3+3\sqrt{2}, 3-3\sqrt{2}"
  answerMode="unordered"
  answerDisplay="$a=3+3\sqrt{2},\ a=3-3\sqrt{2}$"
  hint="Divide by 3, apply the Square Root Property to the binomial, and solve for $a$."
>}}

{{< fillin
  question="Solve $2(b+2)^2=80$. Enter both solutions, separated by a comma."
  answer="-2+2\sqrt{10}, -2-2\sqrt{10}"
  answerMode="unordered"
  answerDisplay="$b=-2+2\sqrt{10},\ b=-2-2\sqrt{10}$"
  hint="Isolate $(b+2)^2$, take both square roots, and then subtract 2."
>}}

Remember when we take the square root of a fraction, we can take the square
root of the numerator and denominator separately.

**Example.** Solve $(x-\tfrac{1}{3})^2=\tfrac{5}{9}$.

$$
\begin{array}{lrcl}
&&& (x-\tfrac{1}{3})^2=\tfrac{5}{9} \\[10pt]
\text{Use the Square Root Property.} & x-\tfrac{1}{3} &=& \pm\sqrt{\tfrac{5}{9}} \\[10pt]
\text{Rewrite the radical as a fraction of square roots.} & x-\tfrac{1}{3} &=& \pm\tfrac{\sqrt{5}}{\sqrt{9}} \\[10pt]
\text{Simplify the radical.} & x-\tfrac{1}{3} &=& \pm\tfrac{\sqrt{5}}{3} \\[10pt]
\text{Solve for }x. & x &=& \tfrac{1}{3}\pm\tfrac{\sqrt{5}}{3} \\[10pt]
\text{Rewrite to show two solutions.} & x &=& \tfrac{1}{3}+\tfrac{\sqrt{5}}{3},\quad x=\tfrac{1}{3}-\tfrac{\sqrt{5}}{3}
\end{array}
$$

Check: We leave the check for you.

{{< fillin
  question="Solve $(x-\tfrac{1}{2})^2=\tfrac{5}{4}$. Enter both solutions, separated by a comma."
  answer="\frac{1}{2}+\frac{\sqrt{5}}{2}, \frac{1}{2}-\frac{\sqrt{5}}{2}"
  answerMode="unordered"
  answerDisplay="$x=\tfrac{1}{2}+\tfrac{\sqrt{5}}{2},\ x=\tfrac{1}{2}-\tfrac{\sqrt{5}}{2}$"
  hint="Take the square roots of the numerator and denominator separately, then solve for $x$."
>}}

{{< fillin
  question="Solve $(y+\tfrac{3}{4})^2=\tfrac{7}{16}$. Enter both solutions, separated by a comma."
  answer="-\frac{3}{4}+\frac{\sqrt{7}}{4}, -\frac{3}{4}-\frac{\sqrt{7}}{4}"
  answerMode="unordered"
  answerDisplay="$y=-\tfrac{3}{4}+\tfrac{\sqrt{7}}{4},\ y=-\tfrac{3}{4}-\tfrac{\sqrt{7}}{4}$"
  hint="Apply the Square Root Property to the binomial, simplify the radical, and isolate $y$."
>}}

We will start the solution to the next example by isolating the binomial term.

**Example.** Solve $2(x-2)^2+3=57$.

$$
\begin{array}{lrcl}
&&& 2(x-2)^2+3=57 \\[4pt]
\text{Subtract 3 from both sides to isolate the binomial term.} & 2(x-2)^2 &=& 54 \\[4pt]
\text{Divide both sides by 2.} & (x-2)^2 &=& 27 \\[4pt]
\text{Use the Square Root Property.} & x-2 &=& \pm\sqrt{27} \\[4pt]
\text{Simplify the radical.} & x-2 &=& \pm3\sqrt{3} \\[4pt]
\text{Solve for }x. & x &=& 2\pm3\sqrt{3} \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 2+3\sqrt{3},\quad x=2-3\sqrt{3}
\end{array}
$$

Check: We leave the check for you.

{{< fillin
  question="Solve $5(a-5)^2+4=104$. Enter both solutions, separated by a comma."
  answer="5+2\sqrt{5}, 5-2\sqrt{5}"
  answerMode="unordered"
  answerDisplay="$a=5+2\sqrt{5},\ a=5-2\sqrt{5}$"
  hint="Isolate the squared binomial, make its coefficient one, and then apply the Square Root Property."
>}}

{{< fillin
  question="Solve $3(b+3)^2-8=88$. Enter both solutions, separated by a comma."
  answer="-3+4\sqrt{2}, -3-4\sqrt{2}"
  answerMode="unordered"
  answerDisplay="$b=-3+4\sqrt{2},\ b=-3-4\sqrt{2}$"
  hint="Add 8, divide by 3, and apply the Square Root Property to $b+3$."
>}}

Sometimes the solutions are complex numbers.

**Example.** Solve $(2x-3)^2=-12$.

$$
\begin{array}{lrcl}
&&& (2x-3)^2=-12 \\[4pt]
\text{Use the Square Root Property.} & 2x-3 &=& \pm\sqrt{-12} \\[4pt]
\text{Simplify the radical.} & 2x-3 &=& \pm2\sqrt{3}\,i \\[4pt]
\text{Add 3 to both sides.} & 2x &=& 3\pm2\sqrt{3}\,i \\[4pt]
\text{Divide both sides by 2.} & x &=& \tfrac{3\pm2\sqrt{3}\,i}{2} \\[10pt]
\text{Rewrite in standard form.} & x &=& \tfrac{3}{2}\pm\tfrac{2\sqrt{3}\,i}{2} \\[10pt]
\text{Simplify.} & x &=& \tfrac{3}{2}\pm\sqrt{3}\,i \\[10pt]
\text{Rewrite to show two solutions.} & x &=& \tfrac{3}{2}+\sqrt{3}\,i,\quad x=\tfrac{3}{2}-\sqrt{3}\,i
\end{array}
$$

Check: We leave the check for you.

{{< fillin
  question="Solve $(3r+4)^2=-8$. Enter both solutions, separated by a comma."
  answer="-\frac{4}{3}+\frac{2\sqrt{2}}{3}i, -\frac{4}{3}-\frac{2\sqrt{2}}{3}i"
  answerMode="unordered"
  answerDisplay="$r=-\tfrac{4}{3}+\tfrac{2\sqrt{2}}{3}i,\ r=-\tfrac{4}{3}-\tfrac{2\sqrt{2}}{3}i$"
  hint="Take both complex square roots, subtract 4, and divide by 3."
>}}

{{< fillin
  question="Solve $(2t-8)^2=-10$. Enter both solutions, separated by a comma."
  answer="4+\frac{\sqrt{10}}{2}i, 4-\frac{\sqrt{10}}{2}i"
  answerMode="unordered"
  answerDisplay="$t=4+\tfrac{\sqrt{10}}{2}i,\ t=4-\tfrac{\sqrt{10}}{2}i$"
  hint="Use $\sqrt{-10}=\sqrt{10}i$, then isolate $t$."
>}}

The left sides of the equations in the next two examples do not seem to be of
the form $a(x-h)^2$. But they are perfect square trinomials, so we will factor
to put them in the form we need.

**Example.** Solve $4n^2+4n+1=16$.

We notice the left side of the equation is a perfect square trinomial. We will
factor it first.

$$
\begin{array}{lrcl}
&&& 4n^2+4n+1=16 \\[4pt]
\text{Factor the perfect square trinomial.} & (2n+1)^2 &=& 16 \\[4pt]
\text{Use the Square Root Property.} & 2n+1 &=& \pm\sqrt{16} \\[4pt]
\text{Simplify the radical.} & 2n+1 &=& \pm4 \\[4pt]
\text{Solve for }n. & 2n &=& -1\pm4 \\[4pt]
\text{Divide each side by 2.} & n &=& \tfrac{-1\pm4}{2} \\[10pt]
\text{Rewrite to show two solutions.} & n &=& \tfrac{-1+4}{2},\quad n=\tfrac{-1-4}{2} \\[10pt]
\text{Simplify each equation.} & n &=& \tfrac{3}{2},\quad n=-\tfrac{5}{2}
\end{array}
$$

Check: $4(\tfrac{3}{2})^2+4(\tfrac{3}{2})+1=16$ and
$4(-\tfrac{5}{2})^2+4(-\tfrac{5}{2})+1=16$.

{{< fillin
  question="Solve $9m^2-12m+4=25$. Enter both solutions, separated by a comma."
  answer="\frac{7}{3}, -1"
  answerMode="unordered"
  answerDisplay="$m=\tfrac{7}{3},\ m=-1$"
  hint="Factor the left side as a perfect square trinomial, then use the Square Root Property."
>}}

{{< fillin
  question="Solve $16n^2+40n+25=4$. Enter both solutions, separated by a comma."
  answer="-\frac{3}{4}, -\frac{7}{4}"
  answerMode="unordered"
  answerDisplay="$n=-\tfrac{3}{4},\ n=-\tfrac{7}{4}$"
  hint="Recognize the perfect square trinomial on the left before taking square roots."
>}}

## Key terms

The **Square Root Property** states that if $x^2=k$, then
$x=\sqrt{k}$ or $x=-\sqrt{k}$, which can be written $x=\pm\sqrt{k}$.

## Practice

### Solve quadratic equations of the form $ax^2=k$ using the Square Root Property

{{< fillin
  question="Solve $r^2-24=0$. Enter both solutions, separated by a comma."
  answer="2\sqrt{6}, -2\sqrt{6}"
  answerMode="unordered"
  answerDisplay="$r=2\sqrt{6},\ r=-2\sqrt{6}$"
  hint="Isolate $r^2$, apply the Square Root Property, and simplify $\sqrt{24}$."
>}}

{{< fillin
  question="Solve $x^2+25=0$. Enter both solutions, separated by a comma."
  answer="5i, -5i"
  answerMode="unordered"
  answerDisplay="$x=5i,\ x=-5i$"
  hint="Isolate $x^2$; since it equals a negative number, use $\sqrt{-1}=i$."
>}}

{{< fillin
  question="Solve $7p^2+10=26$. Enter both solutions, separated by a comma."
  answer="\frac{4\sqrt{7}}{7}, -\frac{4\sqrt{7}}{7}"
  answerMode="unordered"
  answerDisplay="$p=\tfrac{4\sqrt{7}}{7},\ p=-\tfrac{4\sqrt{7}}{7}$"
  hint="Isolate $p^2$, apply the Square Root Property, and rationalize the denominator."
>}}

### Solve quadratic equations of the form $a(x-h)^2=k$ using the Square Root Property

{{< fillin
  question="Solve $(m-6)^2=20$. Enter both solutions, separated by a comma."
  answer="6+2\sqrt{5}, 6-2\sqrt{5}"
  answerMode="unordered"
  answerDisplay="$m=6+2\sqrt{5},\ m=6-2\sqrt{5}$"
  hint="Apply the Square Root Property to the binomial, simplify $\sqrt{20}$, and add 6."
>}}

{{< fillin
  question="Solve $(5c+1)^2=-27$. Enter both solutions, separated by a comma."
  answer="-\frac{1}{5}+\frac{3\sqrt{3}}{5}i, -\frac{1}{5}-\frac{3\sqrt{3}}{5}i"
  answerMode="unordered"
  answerDisplay="$c=-\tfrac{1}{5}+\tfrac{3\sqrt{3}}{5}i,\ c=-\tfrac{1}{5}-\tfrac{3\sqrt{3}}{5}i$"
  hint="Apply the Square Root Property to the binomial, simplify using $i$, and solve for $c$."
>}}

<small>
This page adapts [OpenStax *Intermediate Algebra 2e*, Section 9.1](https://openstax.org/books/intermediate-algebra-2e/pages/9-1-solve-quadratic-equations-using-the-square-root-property), by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/books/intermediate-algebra-2e/pages/9-1-solve-quadratic-equations-using-the-square-root-property). Changes: adapted the source for web presentation and converted the Try It exercises to interactive questions; omitted the Be Prepared questions and media links; and adapted selected end-of-section exercises into an interactive Practice block.
</small>
