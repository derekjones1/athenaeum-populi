---
title: Solve Equations with Square Roots
description: >-
  Solving radical equations by isolating the radical and squaring both sides,
  checking for extraneous solutions, and using square-root formulas in
  applications such as areas, falling objects, and skid marks — adapted from
  OpenStax Elementary Algebra 2e, Section 9.6.
source_section: "9.6"
weight: 6
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** solve radical equations,
  and use square roots in applications.
{{< /callout >}}

In this section we solve equations that have the variable in the radicand of a
square root. Equations of this type are called **radical equations**.

{{< callout type="info" >}}
  **Radical equation.** An equation in which the variable is in the radicand of
  a square root is called a **radical equation**.
{{< /callout >}}

## Solve Radical Equations

As usual, whatever we do to one side of an equation we must do to the other.
Since squaring a quantity and taking a square root are "opposite" operations,
we square both sides to remove the radical sign and free the variable inside.

But remember that $\sqrt{a}$ means the **principal** (nonnegative) square root,
so $\sqrt{a} \ge 0$ always. When we square both sides we may get an algebraic
solution that would make $\sqrt{a}$ negative. That value is **not** a solution
of the original radical equation — it is an **extraneous solution**, exactly as
we saw with rational equations. Because squaring can introduce these, we must
check *every* algebraic solution in the original equation.

**Example.** For the equation $\sqrt{x+2} = x$, is $x = 2$ a solution? Is
$x = -1$?

Substitute each value into the original equation.

$$
\begin{array}{rcl}
\sqrt{2+2} &\overset{?}{=}& 2 \\[4pt]
\sqrt{4} &\overset{?}{=}& 2 \\[4pt]
2 &=& 2 \; \checkmark
\end{array}
$$

So $x = 2$ is a solution. Now test $x = -1$.

$$
\begin{array}{rcl}
\sqrt{-1+2} &\overset{?}{=}& -1 \\[4pt]
\sqrt{1} &\overset{?}{=}& -1 \\[4pt]
1 &\ne& -1
\end{array}
$$

So $x = -1$ is **not** a solution — it is an extraneous solution to the
equation.

Now we see how to *solve* a radical equation. Our strategy uses the relation
between taking a square root and squaring: for $a \ge 0$, $\left(\sqrt{a}\right)^2 = a$.

**Example.** Solve: $\sqrt{2x-1} = 7$.

$$
\begin{array}{lrcl}
& \sqrt{2x-1} &=& 7 \\[4pt]
\text{The radical is already isolated. Square both sides.} & \left(\sqrt{2x-1}\right)^2 &=& (7)^2 \\[4pt]
\text{Solve the new equation.} & 2x-1 &=& 49 \\[4pt]
& 2x &=& 50 \\[4pt]
& x &=& 25
\end{array}
$$

Check $x = 25$ in the original equation.

$$
\begin{array}{rcl}
\sqrt{2(25)-1} &\overset{?}{=}& 7 \\[4pt]
\sqrt{49} &\overset{?}{=}& 7 \\[4pt]
7 &=& 7 \; \checkmark
\end{array}
$$

The solution is $x = 25$.

{{< callout type="info" >}}
  **Solve a radical equation.**

  1. Isolate the radical on one side of the equation.
  2. Square both sides of the equation.
  3. Solve the new equation.
  4. Check the answer.
{{< /callout >}}

{{< fillin
  question="Solve: $\sqrt{3x-5} = 5$. (Enter the value of $x$.)"
  answer="10"
  hint="The radical is already isolated. Square both sides to get $3x - 5 = 25$, then solve for $x$."
>}}

When the radical is not alone, isolate it first, then square.

**Example.** Solve: $\sqrt{5n-4} - 9 = 0$.

$$
\begin{array}{lrcl}
& \sqrt{5n-4} - 9 &=& 0 \\[4pt]
\text{Add } 9 \text{ to both sides to isolate the radical.} & \sqrt{5n-4} &=& 9 \\[4pt]
\text{Square both sides.} & \left(\sqrt{5n-4}\right)^2 &=& (9)^2 \\[4pt]
\text{Solve the new equation.} & 5n-4 &=& 81 \\[4pt]
& 5n &=& 85 \\[4pt]
& n &=& 17
\end{array}
$$

Checking $n = 17$ gives $\sqrt{81} - 9 = 9 - 9 = 0$, so $0 = 0\ \checkmark$.
The solution is $n = 17$.

{{< fillin
  question="Solve: $\sqrt{3m+2} - 5 = 0$. (Enter the value of $m$.)"
  answer="\frac{23}{3}"
  answerDisplay="$m = \tfrac{23}{3}$"
  hint="Add $5$ to isolate the radical, giving $\sqrt{3m+2} = 5$. Square both sides, then solve $3m + 2 = 25$."
>}}

### When there is no solution

When we use a radical sign, we mean the principal (nonnegative) root. **If an
isolated radical equals a negative number, the equation has no solution.**

**Example.** Solve: $\sqrt{9k-2} + 1 = 0$.

$$
\begin{array}{lrcl}
& \sqrt{9k-2} + 1 &=& 0 \\[4pt]
\text{Subtract } 1 \text{ from both sides to isolate the radical.} & \sqrt{9k-2} &=& -1
\end{array}
$$

Since a principal square root can never equal a negative number, the equation
has **no solution**.

{{< multiplechoice
  question="Solve: $\sqrt{2r-3} + 5 = 0$. After isolating the radical, you get $\sqrt{2r-3} = -5$. Which is correct?"
  hint="A principal square root is never negative. What does an isolated radical equal to a negative number tell you?"
  answer="No solution"
>}}
$r = 14$
$r = -11$
No solution
$r = 11$
{{< /multiplechoice >}}

### A binomial on one side

If one side of the equation is a binomial after squaring, use the binomial
squares formulas — and don't forget the middle term:

$$
(a+b)^2 = a^2 + 2ab + b^2 \qquad (a-b)^2 = a^2 - 2ab + b^2
$$

**Example.** Solve: $\sqrt{p-1} + 1 = p$.

Isolate the radical, then square. The right side is a binomial, so squaring it
gives three terms.

$$
\begin{array}{lrcl}
& \sqrt{p-1} + 1 &=& p \\[4pt]
\text{Subtract } 1 \text{ to isolate the radical.} & \sqrt{p-1} &=& p - 1 \\[4pt]
\text{Square both sides.} & \left(\sqrt{p-1}\right)^2 &=& (p-1)^2 \\[4pt]
\text{Simplify — a quadratic. Get zero on one side.} & 0 &=& p^2 - 3p + 2 \\[4pt]
\text{Factor.} & 0 &=& (p-1)(p-2) \\[4pt]
\text{Zero product property.} & p = 1 &\text{or}& p = 2
\end{array}
$$

Both check: for $p = 1$, $\sqrt{0} + 1 = 1\ \checkmark$; for $p = 2$,
$\sqrt{1} + 1 = 2\ \checkmark$. The solutions are $p = 1$ and $p = 2$.

Squaring a binomial can also *introduce* an extraneous solution, so the check
step is essential.

**Example (extraneous root discarded).** Solve: $\sqrt{r+4} - r + 2 = 0$.

$$
\begin{array}{lrcl}
& \sqrt{r+4} - r + 2 &=& 0 \\[4pt]
\text{Isolate the radical.} & \sqrt{r+4} &=& r - 2 \\[4pt]
\text{Square both sides.} & \left(\sqrt{r+4}\right)^2 &=& (r-2)^2 \\[4pt]
\text{Simplify — a quadratic. Get zero on one side.} & 0 &=& r^2 - 5r \\[4pt]
\text{Factor.} & 0 &=& r(r-5) \\[4pt]
\text{Zero product property.} & r = 0 &\text{or}& r = 5
\end{array}
$$

Checking $r = 5$ gives $\sqrt{9} - 5 + 2 = 3 - 3 = 0\ \checkmark$. But checking
$r = 0$ gives $\sqrt{4} + 2 = 4 \ne 0$, so $r = 0$ is an **extraneous
solution**. The only solution is $r = 5$.

{{< fillin
  question="Solve: $\sqrt{m+9} - m + 3 = 0$. It has two algebraic solutions but only one checks. (Enter the valid value of $m$.)"
  answer="7"
  hint="Isolate the radical: $\sqrt{m+9} = m - 3$. Square both sides to get $m + 9 = m^2 - 6m + 9$, so $0 = m^2 - 7m$. Factor, then check each of $m = 0$ and $m = 7$ — only one satisfies the original."
>}}

### A coefficient in front of the radical

When a coefficient multiplies the radical, isolate the whole radical term
first; squaring then squares the coefficient too.

**Example.** Solve: $3\sqrt{3x-5} - 8 = 4$.

$$
\begin{array}{lrcl}
& 3\sqrt{3x-5} - 8 &=& 4 \\[4pt]
\text{Isolate the radical term.} & 3\sqrt{3x-5} &=& 12 \\[4pt]
\text{Square both sides — the coefficient squares too.} & \left(3\sqrt{3x-5}\right)^2 &=& (12)^2 \\[4pt]
\text{Simplify.} & 9(3x-5) &=& 144 \\[4pt]
\text{Distribute, then solve.} & 27x - 45 &=& 144 \\[4pt]
& 27x &=& 189 \\[4pt]
& x &=& 7
\end{array}
$$

Checking $x = 7$ gives $3\sqrt{16} - 8 = 3(4) - 8 = 4\ \checkmark$. The solution
is $x = 7$.

{{< fillin
  question="Solve: $2\sqrt{4a+2} - 16 = 16$. (Enter the value of $a$.)"
  answer="\frac{127}{2}"
  answerDisplay="$a = \tfrac{127}{2}$"
  hint="Isolate the radical term: $2\sqrt{4a+2} = 32$, so $\sqrt{4a+2} = 16$. Square both sides to get $4a + 2 = 256$, then solve."
>}}

### A radical on each side

When there is a radical on each side and both are isolated, square both sides
directly.

**Example.** Solve: $\sqrt{4z-3} = \sqrt{3z+2}$.

Both radicals are isolated, so square both sides. The squares undo the
radicals, leaving a linear equation.

$$
\begin{array}{lrcl}
& \sqrt{4z-3} &=& \sqrt{3z+2} \\[4pt]
\text{Square both sides.} & \left(\sqrt{4z-3}\right)^2 &=& \left(\sqrt{3z+2}\right)^2 \\[4pt]
\text{Solve the new equation.} & 4z-3 &=& 3z+2 \\[4pt]
& z-3 &=& 2 \\[4pt]
& z &=& 5
\end{array}
$$

Checking $z = 5$ gives $\sqrt{17} = \sqrt{17}\ \checkmark$. The solution is
$z = 5$.

### Squaring twice

Sometimes, after squaring both sides, a radical still remains. When that
happens, repeat the procedure: isolate the remaining radical and square again.

**Example.** Solve: $\sqrt{m} + 1 = \sqrt{m+9}$.

$$
\begin{array}{lrcl}
& \sqrt{m} + 1 &=& \sqrt{m+9} \\[4pt]
\text{Square both sides — be careful with the binomial.} & \left(\sqrt{m}+1\right)^2 &=& \left(\sqrt{m+9}\right)^2 \\[4pt]
\text{Simplify. A radical still remains.} & m + 2\sqrt{m} + 1 &=& m + 9 \\[4pt]
\text{Isolate the remaining radical.} & 2\sqrt{m} &=& 8 \\[4pt]
\text{Square both sides again.} & \left(2\sqrt{m}\right)^2 &=& (8)^2 \\[4pt]
\text{Solve.} & 4m &=& 64 \\[4pt]
& m &=& 16
\end{array}
$$

Checking $m = 16$ gives $\sqrt{16} + 1 = 5 = \sqrt{25}\ \checkmark$. The solution
is $m = 16$.

{{< fillin
  question="Solve: $\sqrt{x} + 2 = \sqrt{x+16}$. (Enter the value of $x$.)"
  answer="9"
  hint="Square both sides to get $x + 4\sqrt{x} + 4 = x + 16$. Isolate the remaining radical: $4\sqrt{x} = 12$, so $\sqrt{x} = 3$. Square again to find $x$."
>}}

## Use Square Roots in Applications

Formulas that include square roots appear across many disciplines. We solve
these applications with the same plan we used for geometry problems: read,
identify, name, translate to a formula, solve, check, and answer with a
sentence.

### Area of a square

A square is a rectangle whose length and width are equal, so a square with
side $s$ has area $A = s^2$. Solving that formula for the side gives a square
root:

$$
s = \sqrt{A}
$$

**Example.** Mike and Lychelle want to make a square patio with an area of
$200$ square feet. Use $s = \sqrt{A}$ to find the length of each side, rounded
to the nearest tenth of a foot.

Substitute $A = 200$:

$$
s = \sqrt{200} = 14.14213\ldots \approx 14.1
$$

Check: $14.1^2 = 198.81 \approx 200\ \checkmark$ (close, since we rounded). Each
side of the patio should be about $14.1$ feet.

{{< fillin
  question="Katie wants a square lawn with an area of $370$ square feet. Use $s = \sqrt{A}$ to find the side length, rounded to the nearest tenth of a foot."
  answer="19.2"
  hint="Substitute $A = 370$ and evaluate $\sqrt{370}$, then round to one decimal place."
>}}

### Falling objects

Another application involves gravity.

{{< callout type="info" >}}
  **Falling objects.** On Earth, if an object is dropped from a height of $h$
  feet, the time in seconds it takes to reach the ground is
  $$t = \frac{\sqrt{h}}{4}.$$
{{< /callout >}}

**Example.** Christy dropped her sunglasses from a bridge $400$ feet above a
river. Use $t = \tfrac{\sqrt{h}}{4}$ to find how many seconds it took them to
reach the river.

Substitute $h = 400$:

$$
t = \frac{\sqrt{400}}{4} = \frac{20}{4} = 5
$$

Check: $\tfrac{\sqrt{400}}{4} = \tfrac{20}{4} = 5\ \checkmark$. It took $5$
seconds for the sunglasses to reach the water.

{{< fillin
  question="A helicopter dropped a rescue package from a height of $1{,}296$ feet. Use $t = \tfrac{\sqrt{h}}{4}$ to find the number of seconds it took the package to reach the ground."
  answer="9"
  hint="Substitute $h = 1296$. Since $\sqrt{1296} = 36$, compute $\tfrac{36}{4}$."
>}}

### Skid marks and speed

Police officers measure the length of skid marks to estimate how fast a car
was going before braking.

{{< callout type="info" >}}
  **Skid marks and speed of a car.** If the length of the skid marks is $d$
  feet, then the speed $s$ of the car in miles per hour before braking is
  $$s = \sqrt{24d}.$$
{{< /callout >}}

**Example.** After a car accident, the skid marks for one car measured $190$
feet. Use $s = \sqrt{24d}$ to find the speed of the car before braking, rounded
to the nearest tenth.

Substitute $d = 190$:

$$
s = \sqrt{24(190)} = \sqrt{4560} = 67.52777\ldots \approx 67.5
$$

Is $67.5$ mph a reasonable speed? Yes. The speed of the car was approximately
$67.5$ miles per hour.

{{< fillin
  question="The skid marks of a car measured $76$ feet. Use $s = \sqrt{24d}$ to find the speed of the car before braking, rounded to the nearest tenth of a mile per hour."
  answer="42.7"
  hint="Substitute $d = 76$ and evaluate $\sqrt{24 \cdot 76} = \sqrt{1824}$, then round to one decimal place."
>}}

## Key terms

**radical equation** — an equation in which the variable is in the radicand of
a square root. **principal square root** — the nonnegative square root of a
number; $\sqrt{a} \ge 0$ always. **extraneous solution** — an algebraic
solution obtained by squaring that does not satisfy the original radical
equation (it would make a principal square root negative); it must be
discarded, which is why every solution of a radical equation must be checked.

---

<small>This section is adapted from [Elementary Algebra 2e, 9.6 Solve Equations with Square Roots](https://openstax.org/books/elementary-algebra-2e/pages/9-6-solve-equations-with-square-roots) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked examples into aligned step tables and prose, recast the "How To" procedures as callouts, folded the no-solution and discarded-root cases into subsections, and summarized the seven-step application solutions; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
