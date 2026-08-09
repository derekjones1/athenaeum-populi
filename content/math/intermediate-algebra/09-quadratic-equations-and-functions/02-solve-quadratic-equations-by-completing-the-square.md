---
title: Solve Quadratic Equations by Completing the Square
description: >-
  Complete the square of a binomial expression and solve quadratic equations
  by completing the square.
source_section: "9.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Complete the square of a binomial expression
- Solve quadratic equations of the form $x^2+bx+c=0$ by completing the square
- Solve quadratic equations of the form $ax^2+bx+c=0$ by completing the square
{{< /callout >}}

So far we have solved quadratic equations by factoring and using the Square
Root Property. In this section, we will solve quadratic equations by a process
called **completing the square**, which is important for our work on conics
later.

## Complete the square of a binomial expression

In the last section, we were able to use the Square Root Property to solve the
equation $(y-7)^2=12$ because the left side was a perfect square.

$$
\begin{array}{rcl}
(y-7)^2 &=& 12 \\[4pt]
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
algebra to make a perfect square? Let's look at two examples to help us
recognize the patterns.

$$
\begin{array}{cc}
(x+9)^2 & (y-7)^2 \\
(x+9)(x+9) & (y-7)(y-7) \\
x^2+9x+9x+81 & y^2-7y-7y+49 \\
x^2+18x+81 & y^2-14y+49
\end{array}
$$

We restate the patterns here for reference.

{{< callout type="info" >}}
  **Binomial Squares Pattern.** If $a$ and $b$ are real numbers,

  $$(a+b)^2=a^2+2ab+b^2$$

  $$(a-b)^2=a^2-2ab+b^2.$$
{{< /callout >}}

We can use this pattern to "make" a perfect square.

We will start with the expression $x^2+6x$. Since there is a plus sign between
the two terms, we will use the $(a+b)^2$ pattern,
$a^2+2ab+b^2=(a+b)^2$.

We ultimately need to find the last term of this trinomial that will make it a
perfect square trinomial. To do that, we will need to find $b$. But first we
start with determining $a$. Notice that the first term of $x^2+6x$ is a
square, $x^2$. This tells us that $a=x$.

What number, $b$, when multiplied with $2x$ gives $6x$? It would have to be 3,
which is $\tfrac{1}{2}(6)$. So $b=3$.

Now to complete the perfect square trinomial, we will find the last term by
squaring $b$, which is $3^2=9$.

$$x^2+6x+9$$

We can now factor.

$$(x+3)^2$$

So we found that adding 9 to $x^2+6x$ "completes the square," and we write it
as $(x+3)^2$.

{{< callout type="info" >}}
  **Complete a square of $x^2+bx$.**

  1. Identify $b$, the coefficient of $x$.
  2. Find $\left(\tfrac{1}{2}b\right)^2$, the number to complete the square.
  3. Add the $\left(\tfrac{1}{2}b\right)^2$ to $x^2+bx$.
  4. Factor the perfect square trinomial, writing it as a binomial squared.
{{< /callout >}}

**Example.** Complete the square to make a perfect square trinomial. Then write
the result as a binomial squared.

(a) $x^2-26x$ &emsp; (b) $y^2-9y$ &emsp; (c) $n^2+\tfrac{1}{2}n$

For (a), the coefficient of $x$ is $-26$.

$$
\begin{array}{lrcl}
\text{Find }\left(\tfrac{1}{2}b\right)^2. &&&
\left(\tfrac{1}{2}(-26)\right)^2=(-13)^2=169 \\[10pt]
\text{Add 169 to the binomial to complete the square.} &&& x^2-26x+169 \\[4pt]
\text{Factor the perfect square trinomial.} &&& (x-13)^2
\end{array}
$$

For (b), the coefficient of $y$ is $-9$.

$$
\begin{array}{lrcl}
\text{Find }\left(\tfrac{1}{2}b\right)^2. &&&
\left(\tfrac{1}{2}(-9)\right)^2=\left(-\tfrac{9}{2}\right)^2=\tfrac{81}{4} \\[10pt]
\text{Add }\tfrac{81}{4}\text{ to the binomial to complete the square.} &&&
y^2-9y+\tfrac{81}{4} \\[10pt]
\text{Factor the perfect square trinomial.} &&& \left(y-\tfrac{9}{2}\right)^2
\end{array}
$$

For (c), the coefficient of $n$ is $\tfrac{1}{2}$.

$$
\begin{array}{lrcl}
\text{Find }\left(\tfrac{1}{2}b\right)^2. &&&
\left(\tfrac{1}{2}\cdot\tfrac{1}{2}\right)^2=\left(\tfrac{1}{4}\right)^2=\tfrac{1}{16} \\[10pt]
\text{Add }\tfrac{1}{16}\text{ to the binomial to complete the square.} &&&
n^2+\tfrac{1}{2}n+\tfrac{1}{16} \\[10pt]
\text{Rewrite as a binomial square.} &&& \left(n+\tfrac{1}{4}\right)^2
\end{array}
$$

{{< fillin
  question="Complete the square for $a^2-20a$. Enter the resulting binomial squared."
  answer="(a-10)^2"
  answerDisplay="$(a-10)^2$"
  hint="Take half of the coefficient of $a$, square it, and factor the resulting perfect square trinomial."
>}}

{{< fillin
  question="Complete the square for $m^2-5m$. Enter the resulting binomial squared."
  answer="(m-\frac{5}{2})^2"
  answerDisplay="$(m-\tfrac{5}{2})^2$"
  hint="Take half of $-5$, square it, and factor the resulting perfect square trinomial."
>}}

{{< fillin
  question="Complete the square for $p^2+\tfrac{1}{4}p$. Enter the resulting binomial squared."
  answer="(p+\frac{1}{8})^2"
  answerDisplay="$(p+\tfrac{1}{8})^2$"
  hint="Take half of $\tfrac{1}{4}$, square it, and factor the resulting perfect square trinomial."
>}}

## Solve quadratic equations of the form $x^2+bx+c=0$ by completing the square

In solving equations, we must always do the same thing to both sides of the
equation. This is true, of course, when we solve a quadratic equation by
completing the square too. When we add a term to one side of the equation to
make a perfect square trinomial, we must also add the same term to the other
side of the equation.

For example, if we start with the equation $x^2+6x=40$, and we want to complete
the square on the left, we will add 9 to both sides of the equation.

$$
\begin{array}{lrcl}
&&& x^2+6x=40 \\[4pt]
&&& x^2+6x+\_\_=40+\_\_ \\[4pt]
\text{Add 9 to both sides to complete the square.} & x^2+6x+9 &=& 40+9 \\[4pt]
&&& (x+3)^2=49
\end{array}
$$

Now the equation is in the form to solve using the Square Root Property!
Completing the square is a way to transform an equation into the form we need
to be able to use the Square Root Property.

**Example. How to solve a quadratic equation of the form $x^2+bx+c=0$ by
completing the square.** Solve by completing the square: $x^2+8x=48$.

$$
\begin{array}{lrcl}
\text{The variable terms are already isolated.} & x^2+8x &=& 48 \\[4pt]
\text{Take half of 8 and square it. Add 16 to both sides.} &
x^2+8x+16 &=& 48+16 \\[4pt]
\text{Factor the perfect square trinomial and add on the right.} &
(x+4)^2 &=& 64 \\[4pt]
\text{Use the Square Root Property.} & x+4 &=& \pm\sqrt{64} \\[4pt]
\text{Simplify the radical.} & x+4 &=& \pm8 \\[4pt]
\text{Solve the two resulting equations.} & x &=& 4,\ -12
\end{array}
$$

Check the solutions in the original equation.

$$
\begin{array}{rclrcl}
(4)^2+8(4) &\overset{?}{=}& 48 &
(-12)^2+8(-12) &\overset{?}{=}& 48 \\[4pt]
16+32 &\overset{?}{=}& 48 &
144-96 &\overset{?}{=}& 48 \\[4pt]
48 &=& 48\ \checkmark & 48 &=& 48\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve by completing the square: $x^2+4x=5$. Enter both solutions, separated by commas."
  answer="-5,1"
  answerMode="unordered"
  answerDisplay="$x=-5,\ x=1$"
  hint="Add 4 to both sides so the left side becomes $(x+2)^2$."
>}}

{{< fillin
  question="Solve by completing the square: $y^2-10y=-9$. Enter both solutions, separated by commas."
  answer="1,9"
  answerMode="unordered"
  answerDisplay="$y=1,\ y=9$"
  hint="Add 25 to both sides so the left side becomes $(y-5)^2$."
>}}

The steps to solve a quadratic equation by completing the square are listed
here.

{{< callout type="info" >}}
  **Solve a quadratic equation of the form $x^2+bx+c=0$ by completing the
  square.**

  1. Isolate the variable terms on one side and the constant terms on the other.
  2. Find $\left(\tfrac{1}{2}\cdot b\right)^2$, the number needed to complete the square. Add it to both sides of the equation.
  3. Factor the perfect square trinomial, writing it as a binomial squared on the left and simplify by adding the terms on the right.
  4. Use the Square Root Property.
  5. Simplify the radical and then solve the two resulting equations.
  6. Check the solutions.
{{< /callout >}}

When we solve an equation by completing the square, the answers will not
always be integers.

**Example.** Solve by completing the square: $x^2+4x=-21$.

$$
\begin{array}{lrcl}
\text{The variable terms are on the left side. Take half of 4 and square it.} &
x^2+4x+\left(\tfrac{1}{2}(4)\right)^2 &=& -21 \\[10pt]
\left(\tfrac{1}{2}(4)\right)^2=4.\ \text{Add 4 to both sides.} &
x^2+4x+4 &=& -21+4 \\[4pt]
\text{Factor the perfect square trinomial.} & (x+2)^2 &=& -17 \\[4pt]
\text{Use the Square Root Property.} & x+2 &=& \pm\sqrt{-17} \\[4pt]
\text{Simplify using complex numbers.} & x+2 &=& \pm\sqrt{17}i \\[4pt]
\text{Subtract 2 from each side.} & x &=& -2\pm\sqrt{17}i
\end{array}
$$

The two solutions are $x=-2+\sqrt{17}i$ and $x=-2-\sqrt{17}i$. We leave the
check to you.

{{< fillin
  question="Solve by completing the square: $y^2-10y=-35$. Enter both solutions, separated by commas."
  answer="5+\sqrt{10}i,5-\sqrt{10}i"
  answerMode="unordered"
  answerDisplay="$y=5+\sqrt{10}i,\ y=5-\sqrt{10}i$"
  hint="Add 25 to both sides, then use $\sqrt{-10}=\sqrt{10}i$."
>}}

{{< fillin
  question="Solve by completing the square: $z^2+8z=-19$. Enter both solutions, separated by commas."
  answer="-4+\sqrt{3}i,-4-\sqrt{3}i"
  answerMode="unordered"
  answerDisplay="$z=-4+\sqrt{3}i,\ z=-4-\sqrt{3}i$"
  hint="Add 16 to both sides, then use the Square Root Property."
>}}

In the previous example, our solutions were complex numbers. In the next
example, the solutions will be irrational numbers.

**Example.** Solve by completing the square: $y^2-18y=-6$.

$$
\begin{array}{lrcl}
\text{The variable terms are on the left. Take half of }-18\text{ and square it.} &
y^2-18y+\left(\tfrac{1}{2}(-18)\right)^2 &=& -6 \\[10pt]
\left(\tfrac{1}{2}(-18)\right)^2=81.\ \text{Add 81 to both sides.} &
y^2-18y+81 &=& -6+81 \\[4pt]
\text{Factor the perfect square trinomial.} & (y-9)^2 &=& 75 \\[4pt]
\text{Use the Square Root Property.} & y-9 &=& \pm\sqrt{75} \\[4pt]
\text{Simplify the radical.} & y-9 &=& \pm5\sqrt{3} \\[4pt]
\text{Solve for }y. & y &=& 9\pm5\sqrt{3}
\end{array}
$$

Check:

$$
\begin{array}{rcl}
(9+5\sqrt{3})^2-18(9+5\sqrt{3}) &\overset{?}{=}& -6 \\[4pt]
81+90\sqrt{3}+75-162-90\sqrt{3} &\overset{?}{=}& -6 \\[4pt]
-6 &=& -6\ \checkmark
\end{array}
$$

$$
\begin{array}{rcl}
(9-5\sqrt{3})^2-18(9-5\sqrt{3}) &\overset{?}{=}& -6 \\[4pt]
81-90\sqrt{3}+75-162+90\sqrt{3} &\overset{?}{=}& -6 \\[4pt]
-6 &=& -6\ \checkmark
\end{array}
$$

Another way to check this would be to use a calculator. Evaluate $y^2-18y$
for both of the solutions. The answer should be $-6$.

{{< fillin
  question="Solve by completing the square: $x^2-16x=-16$. Enter both solutions, separated by commas."
  answer="8+4\sqrt{3},8-4\sqrt{3}"
  answerMode="unordered"
  answerDisplay="$x=8+4\sqrt{3},\ x=8-4\sqrt{3}$"
  hint="Add 64 to both sides and simplify the radical."
>}}

{{< fillin
  question="Solve by completing the square: $y^2+8y=11$. Enter both solutions, separated by commas."
  answer="-4+3\sqrt{3},-4-3\sqrt{3}"
  answerMode="unordered"
  answerDisplay="$y=-4+3\sqrt{3},\ y=-4-3\sqrt{3}$"
  hint="Add 16 to both sides and simplify $\sqrt{27}$."
>}}

We will start the next example by isolating the variable terms on the left side
of the equation.

**Example.** Solve by completing the square: $x^2+10x+4=15$.

$$
\begin{array}{lrcl}
&&& x^2+10x+4=15 \\[4pt]
\text{Subtract 4 to get the constant terms on the right side.} &
x^2+10x &=& 11 \\[4pt]
\text{Take half of 10 and square it.} &&
\left(\tfrac{1}{2}(10)\right)^2=25 \\[10pt]
\text{Add 25 to both sides.} & x^2+10x+25 &=& 11+25 \\[4pt]
\text{Factor the perfect square trinomial.} & (x+5)^2 &=& 36 \\[4pt]
\text{Use the Square Root Property.} & x+5 &=& \pm\sqrt{36} \\[4pt]
\text{Simplify the radical.} & x+5 &=& \pm6 \\[4pt]
\text{Solve for }x. & x &=& -5\pm6 \\[4pt]
\text{Solve the equations.} & x &=& 1,\ -11
\end{array}
$$

Check:

$$
\begin{array}{rclrcl}
(1)^2+10(1)+4 &\overset{?}{=}& 15 &
(-11)^2+10(-11)+4 &\overset{?}{=}& 15 \\[4pt]
1+10+4 &\overset{?}{=}& 15 &
121-110+4 &\overset{?}{=}& 15 \\[4pt]
15 &=& 15\ \checkmark & 15 &=& 15\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve by completing the square: $a^2+4a+9=30$. Enter both solutions, separated by commas."
  answer="-7,3"
  answerMode="unordered"
  answerDisplay="$a=-7,\ a=3$"
  hint="First isolate $a^2+4a$, then complete the square."
>}}

{{< fillin
  question="Solve by completing the square: $b^2+8b-4=16$. Enter both solutions, separated by commas."
  answer="-10,2"
  answerMode="unordered"
  answerDisplay="$b=-10,\ b=2$"
  hint="First isolate $b^2+8b$, then add 16 to both sides."
>}}

To solve the next equation, we must first collect all the variable terms on the
left side of the equation. Then we proceed as we did in the previous examples.

**Example.** Solve by completing the square: $n^2=3n+11$.

$$
\begin{array}{lrcl}
&&& n^2=3n+11 \\[4pt]
\text{Subtract }3n\text{ to get the variable terms on the left side.} &
n^2-3n &=& 11 \\[4pt]
\text{Take half of }-3\text{ and square it.} &&
\left(\tfrac{1}{2}(-3)\right)^2=\tfrac{9}{4} \\[10pt]
\text{Add }\tfrac{9}{4}\text{ to both sides.} &
n^2-3n+\tfrac{9}{4} &=& 11+\tfrac{9}{4} \\[10pt]
\text{Factor the perfect square trinomial.} &
\left(n-\tfrac{3}{2}\right)^2 &=& \tfrac{44}{4}+\tfrac{9}{4} \\[10pt]
\text{Add the fractions on the right side.} &
\left(n-\tfrac{3}{2}\right)^2 &=& \tfrac{53}{4} \\[10pt]
\text{Use the Square Root Property.} &
n-\tfrac{3}{2} &=& \pm\sqrt{\tfrac{53}{4}} \\[10pt]
\text{Simplify the radical.} &
n-\tfrac{3}{2} &=& \pm\tfrac{\sqrt{53}}{2} \\[10pt]
\text{Solve for }n. & n &=& \tfrac{3}{2}\pm\tfrac{\sqrt{53}}{2}
\end{array}
$$

The two solutions are
$n=\tfrac{3}{2}+\tfrac{\sqrt{53}}{2}$ and
$n=\tfrac{3}{2}-\tfrac{\sqrt{53}}{2}$. We leave the check for you!

{{< fillin
  question="Solve by completing the square: $p^2=5p+9$. Enter both solutions, separated by commas."
  answer="\frac{5+\sqrt{61}}{2},\frac{5-\sqrt{61}}{2}"
  answerMode="unordered"
  answerDisplay="$p=\tfrac{5+\sqrt{61}}{2},\ p=\tfrac{5-\sqrt{61}}{2}$"
  hint="Rewrite as $p^2-5p=9$, then add $\tfrac{25}{4}$ to both sides."
>}}

{{< fillin
  question="Solve by completing the square: $q^2=7q-3$. Enter both solutions, separated by commas."
  answer="\frac{7+\sqrt{37}}{2},\frac{7-\sqrt{37}}{2}"
  answerMode="unordered"
  answerDisplay="$q=\tfrac{7+\sqrt{37}}{2},\ q=\tfrac{7-\sqrt{37}}{2}$"
  hint="Rewrite as $q^2-7q=-3$, then add $\tfrac{49}{4}$ to both sides."
>}}

Notice that the left side of the next equation is in factored form. But the
right side is not zero. So, we cannot use the Zero Product Property since it
says "If $a\cdot b=0$, then $a=0$ or $b=0$." Instead, we multiply the factors
and then put the equation into standard form to continue by completing the
square.

**Example.** Solve by completing the square: $(x-3)(x+5)=9$.

$$
\begin{array}{lrcl}
&&& (x-3)(x+5)=9 \\[4pt]
\text{Multiply the binomials on the left.} & x^2+2x-15 &=& 9 \\[4pt]
\text{Add 15 to isolate the constant terms on the right.} &
x^2+2x &=& 24 \\[4pt]
\text{Take half of 2 and square it.} &&
\left(\tfrac{1}{2}(2)\right)^2=1 \\[10pt]
\text{Add 1 to both sides.} & x^2+2x+1 &=& 24+1 \\[4pt]
\text{Factor the perfect square trinomial.} & (x+1)^2 &=& 25 \\[4pt]
\text{Use the Square Root Property.} & x+1 &=& \pm\sqrt{25} \\[4pt]
\text{Solve for }x. & x &=& -1\pm5 \\[4pt]
\text{Simplify.} & x &=& 4,\ -6
\end{array}
$$

We leave the check for you!

{{< fillin
  question="Solve by completing the square: $(c-2)(c+8)=11$. Enter both solutions, separated by commas."
  answer="-9,3"
  answerMode="unordered"
  answerDisplay="$c=-9,\ c=3$"
  hint="Multiply the binomials, isolate the variable terms, and complete the square."
>}}

{{< fillin
  question="Solve by completing the square: $(d-7)(d+3)=56$. Enter both solutions, separated by commas."
  answer="-7,11"
  answerMode="unordered"
  answerDisplay="$d=-7,\ d=11$"
  hint="Multiply the binomials, isolate the variable terms, and complete the square."
>}}

## Solve quadratic equations of the form $ax^2+bx+c=0$ by completing the square

The process of completing the square works best when the coefficient of $x^2$
is 1, so the left side of the equation is of the form $x^2+bx+c$. If the $x^2$
term has a coefficient other than 1, we take some preliminary steps to make
the coefficient equal to 1.

Sometimes, the coefficient can be factored from all three terms of the
trinomial. This will be our strategy in the next example.

**Example.** Solve by completing the square: $3x^2-12x-15=0$.

To complete the square, we need the coefficient of $x^2$ to be one. If we
factor out the coefficient of $x^2$ as a common factor, we can continue with
solving the equation by completing the square.

$$
\begin{array}{lrcl}
&&& 3x^2-12x-15=0 \\[4pt]
\text{Factor out the greatest common factor.} & 3(x^2-4x-5) &=& 0 \\[4pt]
\text{Divide both sides by 3.} & \tfrac{3(x^2-4x-5)}{3} &=& \tfrac{0}{3} \\[10pt]
\text{Simplify.} & x^2-4x-5 &=& 0 \\[4pt]
\text{Add 5 to get the constant terms on the right side.} & x^2-4x &=& 5 \\[4pt]
\text{Take half of }-4\text{ and square it.} &&
\left(\tfrac{1}{2}(-4)\right)^2=4 \\[10pt]
\text{Add 4 to both sides.} & x^2-4x+4 &=& 5+4 \\[4pt]
\text{Factor the perfect square trinomial.} & (x-2)^2 &=& 9 \\[4pt]
\text{Use the Square Root Property.} & x-2 &=& \pm\sqrt{9} \\[4pt]
\text{Solve for }x. & x &=& 2\pm3 \\[4pt]
\text{Simplify.} & x &=& 5,\ -1
\end{array}
$$

Check:

$$
\begin{array}{rclrcl}
3(5)^2-12(5)-15 &\overset{?}{=}& 0 &
3(-1)^2-12(-1)-15 &\overset{?}{=}& 0 \\[4pt]
75-60-15 &\overset{?}{=}& 0 &
3+12-15 &\overset{?}{=}& 0 \\[4pt]
0 &=& 0\ \checkmark & 0 &=& 0\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve by completing the square: $2m^2+16m+14=0$. Enter both solutions, separated by commas."
  answer="-7,-1"
  answerMode="unordered"
  answerDisplay="$m=-7,\ m=-1$"
  hint="First divide the equation by 2, then complete the square."
>}}

{{< fillin
  question="Solve by completing the square: $4n^2-24n-56=8$. Enter both solutions, separated by commas."
  answer="-2,8"
  answerMode="unordered"
  answerDisplay="$n=-2,\ n=8$"
  hint="Move the constant term, divide by 4, and complete the square."
>}}

To complete the square, the coefficient of the $x^2$ must be 1. When the
leading coefficient is not a factor of all the terms, we will divide both
sides of the equation by the leading coefficient! This will give us a
fraction for the second coefficient. We have already seen how to complete the
square with fractions in this section.

**Example.** Solve by completing the square: $2x^2-3x=20$.

To complete the square we need the coefficient of $x^2$ to be one. We will
divide both sides of the equation by the coefficient of $x^2$. Then we can
continue with solving the equation by completing the square.

$$
\begin{array}{lrcl}
&&& 2x^2-3x=20 \\[4pt]
\text{Divide both sides by 2.} & \tfrac{2x^2-3x}{2} &=& \tfrac{20}{2} \\[10pt]
\text{Simplify.} & x^2-\tfrac{3}{2}x &=& 10 \\[10pt]
\text{Take half of }-\tfrac{3}{2}\text{ and square it.} &&
\left(\tfrac{1}{2}\left(-\tfrac{3}{2}\right)\right)^2=\tfrac{9}{16} \\[10pt]
\text{Add }\tfrac{9}{16}\text{ to both sides.} &
x^2-\tfrac{3}{2}x+\tfrac{9}{16} &=& 10+\tfrac{9}{16} \\[10pt]
\text{Factor the perfect square trinomial.} &
\left(x-\tfrac{3}{4}\right)^2 &=& \tfrac{160}{16}+\tfrac{9}{16} \\[10pt]
\text{Add the fractions on the right side.} &
\left(x-\tfrac{3}{4}\right)^2 &=& \tfrac{169}{16} \\[10pt]
\text{Use the Square Root Property.} &
x-\tfrac{3}{4} &=& \pm\sqrt{\tfrac{169}{16}} \\[10pt]
\text{Simplify the radical.} & x-\tfrac{3}{4} &=& \pm\tfrac{13}{4} \\[10pt]
\text{Solve for }x. & x &=& \tfrac{3}{4}\pm\tfrac{13}{4} \\[10pt]
\text{Simplify.} & x &=& 4,\ -\tfrac{5}{2}
\end{array}
$$

We leave the check for you!

{{< fillin
  question="Solve by completing the square: $3r^2-2r=21$. Enter both solutions, separated by commas."
  answer="-\frac{7}{3},3"
  answerMode="unordered"
  answerDisplay="$r=-\tfrac{7}{3},\ r=3$"
  hint="Divide both sides by 3, then complete the square."
>}}

{{< fillin
  question="Solve by completing the square: $4t^2+2t=20$. Enter both solutions, separated by commas."
  answer="-\frac{5}{2},2"
  answerMode="unordered"
  answerDisplay="$t=-\tfrac{5}{2},\ t=2$"
  hint="Divide both sides by 4, then complete the square."
>}}

Now that we have seen that the coefficient of $x^2$ must be 1 for us to
complete the square, we update our procedure for solving a quadratic equation
by completing the square to include equations of the form $ax^2+bx+c=0$.

{{< callout type="info" >}}
  **Solve a quadratic equation of the form $ax^2+bx+c=0$ by completing the
  square.**

  1. Divide by $a$ to make the coefficient of the $x^2$ term 1.
  2. Isolate the variable terms on one side and the constant terms on the other.
  3. Find $\left(\tfrac{1}{2}\cdot b\right)^2$, the number needed to complete the square. Add it to both sides of the equation.
  4. Factor the perfect square trinomial, writing it as a binomial squared on the left and simplify by adding the terms on the right.
  5. Use the Square Root Property.
  6. Simplify the radical and then solve the two resulting equations.
  7. Check the solutions.
{{< /callout >}}

**Example.** Solve by completing the square: $3x^2+2x=4$.

Again, our first step will be to make the coefficient of $x^2$ one. By
dividing both sides of the equation by the coefficient of $x^2$, we can then
continue with solving the equation by completing the square.

$$
\begin{array}{lrcl}
&&& 3x^2+2x=4 \\[4pt]
\text{Divide both sides by 3.} & \tfrac{3x^2+2x}{3} &=& \tfrac{4}{3} \\[10pt]
\text{Simplify.} & x^2+\tfrac{2}{3}x &=& \tfrac{4}{3} \\[10pt]
\text{Take half of }\tfrac{2}{3}\text{ and square it.} &&
\left(\tfrac{1}{2}\cdot\tfrac{2}{3}\right)^2=\tfrac{1}{9} \\[10pt]
\text{Add }\tfrac{1}{9}\text{ to both sides.} &
x^2+\tfrac{2}{3}x+\tfrac{1}{9} &=& \tfrac{4}{3}+\tfrac{1}{9} \\[10pt]
\text{Factor the perfect square trinomial.} &
\left(x+\tfrac{1}{3}\right)^2 &=& \tfrac{12}{9}+\tfrac{1}{9} \\[10pt]
\text{Use the Square Root Property.} &
x+\tfrac{1}{3} &=& \pm\sqrt{\tfrac{13}{9}} \\[10pt]
\text{Simplify the radical.} & x+\tfrac{1}{3} &=& \pm\tfrac{\sqrt{13}}{3} \\[10pt]
\text{Solve for }x. & x &=& -\tfrac{1}{3}\pm\tfrac{\sqrt{13}}{3}
\end{array}
$$

The two solutions are
$x=-\tfrac{1}{3}+\tfrac{\sqrt{13}}{3}$ and
$x=-\tfrac{1}{3}-\tfrac{\sqrt{13}}{3}$. We leave the check for you!

{{< fillin
  question="Solve by completing the square: $4x^2+3x=2$. Enter both solutions, separated by commas."
  answer="\frac{-3+\sqrt{41}}{8},\frac{-3-\sqrt{41}}{8}"
  answerMode="unordered"
  answerDisplay="$x=\tfrac{-3+\sqrt{41}}{8},\ x=\tfrac{-3-\sqrt{41}}{8}$"
  hint="Divide by 4, complete the square, and simplify the resulting radical."
>}}

{{< fillin
  question="Solve by completing the square: $3y^2-10y=-5$. Enter both solutions, separated by commas."
  answer="\frac{5}{3}+\frac{\sqrt{10}}{3},\frac{5}{3}-\frac{\sqrt{10}}{3}"
  answerMode="unordered"
  answerDisplay="$y=\tfrac{5}{3}+\tfrac{\sqrt{10}}{3},\ y=\tfrac{5}{3}-\tfrac{\sqrt{10}}{3}$"
  hint="Divide by 3, complete the square, and simplify the radical."
>}}

## Key terms

**completing the square** — a process used to make a perfect square trinomial,
which transforms a quadratic equation into a form that can be solved using the
Square Root Property.

## Practice

### Complete the square of a binomial expression

{{< fillin
  question="Complete the square for $m^2-24m$ to make a perfect square trinomial, then factor it as a binomial squared."
  answer="(m-12)^2"
  answerForm="factored"
  answerDisplay="$(m-12)^2$"
  hint="Take half of $-24$ and square it to find the term that completes the square."
>}}

{{< fillin
  question="Complete the square for $x^2-11x$ to make a perfect square trinomial, then factor it as a binomial squared."
  answer="(x-\frac{11}{2})^2"
  answerForm="factored"
  answerDisplay="$(x-\tfrac{11}{2})^2$"
  hint="Halving an odd coefficient gives a fraction — square that fraction to complete the square."
>}}

{{< fillin
  question="Complete the square for $p^2-\tfrac{1}{3}p$ to make a perfect square trinomial, then factor it as a binomial squared."
  answer="(p-\frac{1}{6})^2"
  answerForm="factored"
  answerDisplay="$(p-\tfrac{1}{6})^2$"
  hint="Halve the fractional coefficient of $p$, then square the result to complete the square."
>}}

### Solve quadratic equations of the form $x^2+bx+c=0$ by completing the square

{{< fillin
  question="Solve by completing the square: $u^2+2u=3$. Enter both solutions, separated by a comma."
  answer="-3,1"
  answerMode="unordered"
  answerDisplay="$u=-3,\ u=1$"
  hint="Add 1 to both sides so the left side becomes $(u+1)^2$."
>}}

{{< fillin
  question="Solve by completing the square: $r^2+6r=-11$. Enter both solutions, separated by a comma."
  answer="-3+\sqrt{2}i,-3-\sqrt{2}i"
  answerMode="unordered"
  answerDisplay="$r=-3+\sqrt{2}i,\ r=-3-\sqrt{2}i$"
  hint="Add 9 to both sides, then use $\sqrt{-2}=\sqrt{2}i$."
>}}

### Solve quadratic equations of the form $ax^2+bx+c=0$ by completing the square

{{< fillin
  question="Solve by completing the square: $3m^2+30m-27=6$. Enter both solutions, separated by a comma."
  answer="-11,1"
  answerMode="unordered"
  answerDisplay="$m=-11,\ m=1$"
  hint="Move the constant term, divide by 3, and complete the square."
>}}

{{< fillin
  question="Solve by completing the square: $2c^2+c=6$. Enter both solutions, separated by a comma."
  answer="-2,\frac{3}{2}"
  answerMode="unordered"
  answerDisplay="$c=-2,\ c=\tfrac{3}{2}$"
  hint="Divide both sides by 2, then complete the square."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 9.2: Solve Quadratic Equations by Completing the Square](https://openstax.org/books/intermediate-algebra-2e/pages/9-2-solve-quadratic-equations-by-completing-the-square) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted worked-example steps as accessible typeset mathematics; omitted the Be Prepared quiz and media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and adapted selected end-of-section exercises into an interactive Practice block.</small>
