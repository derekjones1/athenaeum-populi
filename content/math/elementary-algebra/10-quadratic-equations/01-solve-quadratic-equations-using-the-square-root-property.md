---
title: Solve Quadratic Equations Using the Square Root Property
description: >-
  Solving quadratic equations of the forms ax² = k and a(x − h)² = k using
  the Square Root Property — adapted from OpenStax Elementary Algebra 2e,
  Section 10.1.
source_section: "10.1"
weight: 1
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve quadratic
  equations of the form $ax^2=k$ using the Square Root Property, and solve
  quadratic equations of the form $a(x-h)^2=k$ using the Square Root
  Property.
{{< /callout >}}

Quadratic equations are equations of the form $ax^2+bx+c=0$, where $a\ne0$.
They differ from linear equations by including a term with the variable raised
to the second power. We use different methods to solve quadratic equations
than linear equations, because just adding, subtracting, multiplying, and
dividing terms will not isolate the variable.

We have seen that some quadratic equations can be solved by factoring. In this
chapter, we will use three other methods to solve quadratic equations.

## Solve Quadratic Equations of the Form $ax^2=k$ Using the Square Root Property

We have already solved some quadratic equations by factoring. Let's review how
we used factoring to solve the quadratic equation $x^2=9$.

$$
\begin{array}{lrcl}
\text{Put the equation in standard form.} & x^2-9 &=& 0 \\[4pt]
\text{Factor the left side.} & (x-3)(x+3) &=& 0 \\[4pt]
\text{Use the Zero Product Property.} & x-3=0,\quad x+3 &=& 0 \\[4pt]
\text{Solve each equation.} & x=3,\quad x &=& -3 \\[4pt]
\text{Combine the two solutions into }\pm\text{ form.} & x &=& \pm3
\end{array}
$$

The solution is read “$x$ is equal to positive or negative three.”

We can easily use factoring to find the solutions of similar equations, like
$x^2=16$ and $x^2=25$, because $16$ and $25$ are perfect squares. But what
happens when we have an equation like $x^2=7$? Since $7$ is not a perfect
square, we cannot solve the equation by factoring.

These equations are all of the form $x^2=k$.

We defined the square root of a number in this way:

$$\text{If }n^2=m,\text{ then }n\text{ is a square root of }m.$$

This leads to the Square Root Property.

{{< callout type="info" >}}
  **Square Root Property.** If $x^2=k$, and $k\geq0$, then
  $x=\sqrt{k}$ or $x=-\sqrt{k}$.
{{< /callout >}}

Notice that the Square Root Property gives two solutions to an equation of the
form $x^2=k$: the principal square root of $k$ and its opposite. We could also
write the solution as $x=\pm\sqrt{k}$.

Now, we will solve the equation $x^2=9$ again, this time using the Square Root
Property.

$$
\begin{array}{lrcl}
\text{Use the Square Root Property.} & x &=& \pm\sqrt{9} \\[4pt]
\text{Simplify the radical.} & x &=& \pm3 \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 3,\ -3
\end{array}
$$

What happens when the constant is not a perfect square? Let's use the Square
Root Property to solve the equation $x^2=7$.

$$
\begin{array}{lrcl}
\text{Use the Square Root Property.} & x &=& \pm\sqrt{7} \\[4pt]
\text{Rewrite to show two solutions.} & x &=& \sqrt{7},\ -\sqrt{7}
\end{array}
$$

We cannot simplify $\sqrt{7}$, so we leave the answer as a radical.

**Example 10.1.** Solve $x^2=169$.

$$
\begin{array}{lrcl}
& x^2 &=& 169 \\[4pt]
\text{Use the Square Root Property.} & x &=& \pm\sqrt{169} \\[4pt]
\text{Simplify the radical.} & x &=& \pm13 \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 13,\ -13
\end{array}
$$

{{< fillin
  question="Solve $x^2=81$. Enter both solutions separated by commas, least to greatest."
  answer="-9, 9"
  answerDisplay="$-9,\ 9$"
  hint="Use the Square Root Property and remember both square roots."
>}}

**Example 10.2. How to Solve a Quadratic Equation of the Form $ax^2=k$ Using
the Square Root Property.** Solve $x^2-48=0$.

$$
\begin{array}{lrcl}
\text{Isolate the quadratic term and make its coefficient one.} & x^2-48 &=& 0 \\[4pt]
& x^2 &=& 48 \\[4pt]
\text{Use the Square Root Property.} & x &=& \pm\sqrt{48} \\[4pt]
\text{Simplify the radical.} & x &=& \pm\sqrt{16}\cdot\sqrt{3} \\[4pt]
& x &=& \pm4\sqrt{3} \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 4\sqrt{3},\ -4\sqrt{3}
\end{array}
$$

**Check.** Substitute $x=4\sqrt{3}$ and $x=-4\sqrt{3}$ into $x^2-48=0$.

$$
\begin{array}{rcl}
(4\sqrt{3})^2-48 &\overset{?}{=}& 0 \\[4pt]
16\cdot3-48 &\overset{?}{=}& 0 \\[4pt]
0 &=& 0\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-4\sqrt{3})^2-48 &\overset{?}{=}& 0 \\[4pt]
16\cdot3-48 &\overset{?}{=}& 0 \\[4pt]
0 &=& 0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $x^2-50=0$. Enter both solutions separated by commas, least to greatest."
  answer="-5\sqrt{2}, 5\sqrt{2}"
  answerDisplay="$-5\sqrt{2},\ 5\sqrt{2}$"
  hint="Isolate $x^2$, use the Square Root Property, and simplify the radical."
>}}

{{< callout type="info" >}}
  **Solve a quadratic equation using the Square Root Property.**

  1. Isolate the quadratic term and make its coefficient one.
  2. Use the Square Root Property.
  3. Simplify the radical.
  4. Check the solutions.
{{< /callout >}}

To use the Square Root Property, the coefficient of the variable term must
equal $1$. In the next example, we must divide both sides of the equation by
$5$ before using the Square Root Property.

**Example 10.3.** Solve $5m^2=80$.

$$
\begin{array}{lrcl}
\text{The quadratic term is isolated.} & 5m^2 &=& 80 \\[4pt]
\text{Divide by }5\text{ to make its coefficient }1. & \tfrac{5m^2}{5} &=& \tfrac{80}{5} \\[10pt]
\text{Simplify.} & m^2 &=& 16 \\[4pt]
\text{Use the Square Root Property.} & m &=& \pm\sqrt{16} \\[4pt]
\text{Simplify the radical.} & m &=& \pm4 \\[4pt]
\text{Rewrite to show two solutions.} & m &=& 4,\ -4
\end{array}
$$

**Check the solutions.**

$$
\begin{array}{rcl}
5(4)^2 &\overset{?}{=}& 80 \\[4pt]
5\cdot16 &\overset{?}{=}& 80 \\[4pt]
80 &=& 80\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
5(-4)^2 &\overset{?}{=}& 80 \\[4pt]
5\cdot16 &\overset{?}{=}& 80 \\[4pt]
80 &=& 80\ \checkmark
\end{array}
$$

The Square Root Property started by stating, “If $x^2=k$, and $k\geq0$.” What
will happen if $k<0$? This will be the case in the next example.

**Example 10.4.** Solve $q^2+24=0$.

$$
\begin{array}{lrcl}
& q^2+24 &=& 0 \\[4pt]
\text{Isolate the quadratic term.} & q^2 &=& -24 \\[4pt]
\text{Use the Square Root Property.} & q &=& \pm\sqrt{-24}
\end{array}
$$

The $\sqrt{-24}$ is not a real number. There is no real solution.

{{< multiplechoice
  question="Solve $d^2+81=0$."
  hint="Isolate $d^2$ and determine whether the square root is a real number."
  answer="No real solution"
>}}
No real solution
$d=9$ or $d=-9$
$d=81$ or $d=-81$
{{< /multiplechoice >}}

Remember, we first isolate the quadratic term and then make the coefficient
equal to one.

**Example 10.5.** Solve $\tfrac{2}{3}u^2+5=17$.

$$
\begin{array}{lrcl}
& \tfrac{2}{3}u^2+5 &=& 17 \\[10pt]
\text{Isolate the quadratic term.} & \tfrac{2}{3}u^2 &=& 12 \\[10pt]
\text{Multiply by }\tfrac{3}{2}\text{ to make the coefficient }1. &
\tfrac{3}{2}\cdot\tfrac{2}{3}u^2 &=& \tfrac{3}{2}\cdot12 \\[10pt]
\text{Simplify.} & u^2 &=& 18 \\[4pt]
\text{Use the Square Root Property.} & u &=& \pm\sqrt{18} \\[4pt]
\text{Simplify the radical.} & u &=& \pm\sqrt{9}\sqrt{2} \\[4pt]
\text{Simplify.} & u &=& \pm3\sqrt{2} \\[4pt]
\text{Rewrite to show two solutions.} & u &=& 3\sqrt{2},\ -3\sqrt{2}
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
\tfrac{2}{3}(3\sqrt{2})^2+5 &\overset{?}{=}& 17 \\[10pt]
\tfrac{2}{3}\cdot18+5 &\overset{?}{=}& 17 \\[10pt]
12+5 &\overset{?}{=}& 17 \\[4pt]
17 &=& 17\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
\tfrac{2}{3}(-3\sqrt{2})^2+5 &\overset{?}{=}& 17 \\[10pt]
\tfrac{2}{3}\cdot18+5 &\overset{?}{=}& 17 \\[10pt]
12+5 &\overset{?}{=}& 17 \\[4pt]
17 &=& 17\ \checkmark
\end{array}
$$

The solutions to some equations may have fractions inside the radicals. When
this happens, we must rationalize the denominator.

**Example 10.6.** Solve $2c^2-4=45$.

$$
\begin{array}{lrcl}
& 2c^2-4 &=& 45 \\[4pt]
\text{Isolate the quadratic term.} & 2c^2 &=& 49 \\[4pt]
\text{Divide by }2\text{ to make the coefficient }1. &
\tfrac{2c^2}{2} &=& \tfrac{49}{2} \\[10pt]
\text{Simplify.} & c^2 &=& \tfrac{49}{2} \\[10pt]
\text{Use the Square Root Property.} & c &=& \pm\sqrt{\tfrac{49}{2}} \\[10pt]
\text{Rewrite the radical as a fraction of square roots.} & c &=& \pm\tfrac{\sqrt{49}}{\sqrt{2}} \\[10pt]
\text{Simplify the radical.} & c &=& \pm\tfrac{7}{\sqrt{2}} \\[10pt]
\text{Rationalize the denominator.} & c &=& \pm\tfrac{7\sqrt{2}}{2} \\[10pt]
\text{Rewrite to show two solutions.} & c &=& \tfrac{7\sqrt{2}}{2},\ -\tfrac{7\sqrt{2}}{2}
\end{array}
$$

Check. We leave the check for you.

{{< fillin
  question="Solve $5r^2-2=34$. Enter both solutions separated by commas, least to greatest."
  answer="-\frac{6\sqrt{5}}{5}, \frac{6\sqrt{5}}{5}"
  answerDisplay="$-\tfrac{6\sqrt{5}}{5},\ \tfrac{6\sqrt{5}}{5}$"
  hint="Isolate $r^2$, use the Square Root Property, and rationalize the denominator."
>}}

## Solve Quadratic Equations of the Form $a(x-h)^2=k$ Using the Square Root Property

We can use the Square Root Property to solve an equation like
$(x-3)^2=16$, too. We will treat the whole binomial, $(x-3)$, as the
quadratic term.

**Example 10.7.** Solve $(x-3)^2=16$.

$$
\begin{array}{lrcl}
& (x-3)^2 &=& 16 \\[4pt]
\text{Use the Square Root Property.} & x-3 &=& \pm\sqrt{16} \\[4pt]
\text{Simplify.} & x-3 &=& \pm4 \\[4pt]
\text{Write as two equations.} & x-3 &=& 4,\ -4 \\[4pt]
\text{Solve.} & x &=& 7,\ -1
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
(7-3)^2 &\overset{?}{=}& 16 \\[4pt]
(4)^2 &\overset{?}{=}& 16 \\[4pt]
16 &=& 16\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(-1-3)^2 &\overset{?}{=}& 16 \\[4pt]
(-4)^2 &\overset{?}{=}& 16 \\[4pt]
16 &=& 16\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve $(q+5)^2=1$. Enter both solutions separated by commas, least to greatest."
  answer="-6, -4"
  answerDisplay="$-6,\ -4$"
  hint="Use the Square Root Property, write two equations, and solve."
>}}

**Example 10.8.** Solve $(y-7)^2=12$.

$$
\begin{array}{lrcl}
& (y-7)^2 &=& 12 \\[4pt]
\text{Use the Square Root Property.} & y-7 &=& \pm\sqrt{12} \\[4pt]
\text{Simplify the radical.} & y-7 &=& \pm2\sqrt{3} \\[4pt]
\text{Solve for }y. & y &=& 7\pm2\sqrt{3} \\[4pt]
\text{Rewrite to show two solutions.} & y &=& 7+2\sqrt{3},\ 7-2\sqrt{3}
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
(7+2\sqrt{3}-7)^2 &\overset{?}{=}& 12 \\[4pt]
(2\sqrt{3})^2 &\overset{?}{=}& 12 \\[4pt]
12 &=& 12\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
(7-2\sqrt{3}-7)^2 &\overset{?}{=}& 12 \\[4pt]
(-2\sqrt{3})^2 &\overset{?}{=}& 12 \\[4pt]
12 &=& 12\ \checkmark
\end{array}
$$

Remember, when we take the square root of a fraction, we can take the square
root of the numerator and denominator separately.

**Example 10.9.** Solve
$\left(x-\tfrac{1}{2}\right)^2=\tfrac{5}{4}$.

$$
\begin{array}{lrcl}
& \left(x-\tfrac{1}{2}\right)^2 &=& \tfrac{5}{4} \\[10pt]
\text{Use the Square Root Property.} & x-\tfrac{1}{2} &=& \pm\sqrt{\tfrac{5}{4}} \\[10pt]
\text{Rewrite the radical as a fraction of square roots.} &
x-\tfrac{1}{2} &=& \pm\tfrac{\sqrt{5}}{\sqrt{4}} \\[10pt]
\text{Simplify the radical.} & x-\tfrac{1}{2} &=& \pm\tfrac{\sqrt{5}}{2} \\[10pt]
\text{Solve for }x. & x &=& \tfrac{1}{2}\pm\tfrac{\sqrt{5}}{2} \\[10pt]
\text{Rewrite to show two solutions.} & x &=&
\tfrac{1}{2}+\tfrac{\sqrt{5}}{2},\ \tfrac{1}{2}-\tfrac{\sqrt{5}}{2}
\end{array}
$$

Check. We leave the check for you.

We will start the solution to the next example by isolating the binomial.

**Example 10.10.** Solve $(x-2)^2+3=30$.

$$
\begin{array}{lrcl}
& (x-2)^2+3 &=& 30 \\[4pt]
\text{Isolate the binomial term.} & (x-2)^2 &=& 27 \\[4pt]
\text{Use the Square Root Property.} & x-2 &=& \pm\sqrt{27} \\[4pt]
\text{Simplify the radical.} & x-2 &=& \pm3\sqrt{3} \\[4pt]
\text{Solve for }x. & x &=& 2\pm3\sqrt{3} \\[4pt]
\text{Rewrite to show two solutions.} & x &=& 2+3\sqrt{3},\ 2-3\sqrt{3}
\end{array}
$$

Check. We leave the check for you.

**Example 10.11.** Solve $(3v-7)^2=-12$.

$$
\begin{array}{lrcl}
& (3v-7)^2 &=& -12 \\[4pt]
\text{Use the Square Root Property.} & 3v-7 &=& \pm\sqrt{-12}
\end{array}
$$

The $\sqrt{-12}$ is not a real number. There is no real solution.

{{< multiplechoice
  question="Solve $(3r+4)^2=-8$."
  hint="Determine whether the square root of the right side is a real number."
  answer="No real solution"
>}}
No real solution
$r=-	frac{4}{3}$
$r=	frac{4}{3}$
{{< /multiplechoice >}}

The left sides of the equations in the next two examples do not seem to be of
the form $a(x-h)^2$. But they are perfect square trinomials, so we will factor
to put them in the form we need.

**Example 10.12.** Solve $p^2-10p+25=18$.

The left side of the equation is a perfect square trinomial. We will factor it
first.

$$
\begin{array}{lrcl}
& p^2-10p+25 &=& 18 \\[4pt]
\text{Factor the perfect square trinomial.} & (p-5)^2 &=& 18 \\[4pt]
\text{Use the Square Root Property.} & p-5 &=& \pm\sqrt{18} \\[4pt]
\text{Simplify the radical.} & p-5 &=& \pm3\sqrt{2} \\[4pt]
\text{Solve for }p. & p &=& 5\pm3\sqrt{2} \\[4pt]
\text{Rewrite to show two solutions.} & p &=& 5+3\sqrt{2},\ 5-3\sqrt{2}
\end{array}
$$

Check. We leave the check for you.

{{< fillin
  question="Solve $x^2-6x+9=12$. Enter both solutions separated by commas, least to greatest."
  answer="3-2\sqrt{3}, 3+2\sqrt{3}"
  answerDisplay="$3-2\sqrt{3},\ 3+2\sqrt{3}$"
  hint="Factor the perfect square trinomial, then use the Square Root Property."
>}}

**Example 10.13.** Solve $4n^2+4n+1=16$.

Again, we notice the left side of the equation is a perfect square trinomial.
We will factor it first.

$$
\begin{array}{lrcl}
& 4n^2+4n+1 &=& 16 \\[4pt]
\text{Factor the perfect square trinomial.} & (2n+1)^2 &=& 16 \\[4pt]
\text{Use the Square Root Property.} & 2n+1 &=& \pm\sqrt{16} \\[4pt]
\text{Simplify the radical.} & 2n+1 &=& \pm4 \\[4pt]
\text{Solve for }n. & 2n &=& -1\pm4 \\[4pt]
\text{Divide each side by }2. & n &=& \tfrac{-1\pm4}{2} \\[10pt]
\text{Rewrite to show two solutions.} & n &=& \tfrac{-1+4}{2},\ \tfrac{-1-4}{2} \\[10pt]
\text{Simplify each equation.} & n &=& \tfrac{3}{2},\ -\tfrac{5}{2}
\end{array}
$$

**Check.**

$$
\begin{array}{rcl}
4\left(\tfrac{3}{2}\right)^2+4\left(\tfrac{3}{2}\right)+1
&\overset{?}{=}& 16 \\[10pt]
9+6+1 &\overset{?}{=}& 16 \\[4pt]
16 &=& 16\ \checkmark
\end{array}
\qquad
\begin{array}{rcl}
4\left(-\tfrac{5}{2}\right)^2+4\left(-\tfrac{5}{2}\right)+1
&\overset{?}{=}& 16 \\[10pt]
25-10+1 &\overset{?}{=}& 16 \\[4pt]
16 &=& 16\ \checkmark
\end{array}
$$

## Key terms

**quadratic equation** — an equation of the form $ax^2+bx+c=0$ with
$a\ne0$. **Square Root Property** — if $x^2=k$ and $k\geq0$, then
$x=\sqrt{k}$ or $x=-\sqrt{k}$. **principal square root** — the nonnegative
square root of a number. **perfect square trinomial** — a trinomial of the
form $a^2+2ab+b^2$ or $a^2-2ab+b^2$; it factors to $(a+b)^2$ or $(a-b)^2$.

---

<small>This page is adapted from [Elementary Algebra 2e, Section 10.1](https://openstax.org/books/elementary-algebra-2e/pages/10-1-solve-quadratic-equations-using-the-square-root-property) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: reformatted the source for accessible web presentation and converted selected Try It problems into interactive exercises; the source exercise set and media links are omitted.</small>
