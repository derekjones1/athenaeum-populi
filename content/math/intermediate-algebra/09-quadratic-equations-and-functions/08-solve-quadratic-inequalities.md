---
title: Solve Quadratic Inequalities
description: >-
  Solving quadratic inequalities graphically and algebraically, and writing
  their solutions in interval notation.
source_section: "9.8"
weight: 8
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve quadratic inequalities graphically
- Solve quadratic inequalities algebraically
{{< /callout >}}

We have learned how to solve linear inequalities and rational inequalities
previously. Some of the techniques we used to solve them were the same and
some were different.

We will now learn to solve inequalities that have a quadratic expression. We
will use some of the techniques from solving linear and rational inequalities
as well as quadratic equations.

We will solve quadratic inequalities two ways—both graphically and
algebraically.

## Solve Quadratic Inequalities Graphically

A quadratic equation is in standard form when written as
$ax^2+bx+c=0$. If we replace the equal sign with an inequality sign, we have a
**quadratic inequality** in standard form.

{{< callout type="info" >}}
  **Quadratic inequality.** A **quadratic inequality** is an inequality that
  contains a quadratic expression.

  The standard form of a quadratic inequality is written:

  $$
  \begin{array}{rcl}
  ax^2+bx+c&<&0 \\[4pt]
  ax^2+bx+c&>&0
  \end{array}
  \qquad
  \begin{array}{rcl}
  ax^2+bx+c&\le&0 \\[4pt]
  ax^2+bx+c&\ge&0
  \end{array}
  $$
{{< /callout >}}

The graph of a quadratic function $f(x)=ax^2+bx+c$ is a parabola. When we ask
when $ax^2+bx+c<0$, we are asking when $f(x)<0$. We want to know when the
parabola is below the $x$-axis.

When we ask when $ax^2+bx+c>0$, we are asking when $f(x)>0$. We want to know
when the parabola is above the $x$-axis.

For a parabola that opens upward and has two $x$-intercepts, $f(x)<0$ between
the intercepts and $f(x)>0$ outside the intercepts. For a parabola that opens
downward, $f(x)>0$ between the intercepts and $f(x)<0$ outside them.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola f(x) crossing the x-axis at two marked x-intercepts. To the left of the left intercept and to the right of the right intercept the parabola is above the x-axis, labeled f(x) > 0; between the intercepts it is below the x-axis, labeled f(x) < 0.","xMin":-4,"xMax":10,"yMin":-9,"yMax":9,"quadratics":[{"a":0.5,"b":-3,"c":-3.5}],"points":[{"at":[-1,0]},{"at":[7,0]}],"texts":[{"at":[-3.9,0.7],"text":"f(x) > 0"},{"at":[2,-1.3],"text":"f(x) < 0"},{"at":[7.7,0.7],"text":"f(x) > 0"},{"at":[9.2,5.5],"text":"f(x)"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening parabola f(x) crossing the x-axis at two marked x-intercepts. To the left of the left intercept and to the right of the right intercept the parabola is below the x-axis, labeled f(x) < 0; between the intercepts it is above the x-axis, labeled f(x) > 0.","xMin":-4,"xMax":10,"yMin":-9,"yMax":9,"quadratics":[{"a":-0.5,"b":3,"c":3.5}],"points":[{"at":[-1,0]},{"at":[7,0]}],"texts":[{"at":[-3.9,-1.3],"text":"f(x) < 0"},{"at":[2,0.7],"text":"f(x) > 0"},{"at":[7.7,-1.3],"text":"f(x) < 0"},{"at":[8.7,-5.5],"text":"f(x)"}]}
{{< /apfigure >}}

**Example. How to solve a quadratic inequality graphically.** Solve
$x^2-6x+8<0$ graphically. Write the solution in interval notation.

**Solution.**

Write the quadratic inequality in standard form.

$$
x^2-6x+8<0
$$

Graph the function $f(x)=x^2-6x+8$ using properties or transformations.
Look at $a$ in the equation.

$$
f(x)=x^2-6x+8,\qquad a=1,\ b=-6,\ c=8.
$$

Since $a$ is positive, the parabola opens upward.

The axis of symmetry is the line $x=-\tfrac{b}{2a}$.

$$
\begin{array}{rcl}
x&=&-\tfrac{-6}{2\cdot1}\\[10pt]
x&=&3
\end{array}
$$

The axis of symmetry is the line $x=3$.

The vertex is on the axis of symmetry. Substitute $x=3$ into the function.

$$
\begin{array}{rcl}
f(x)&=&x^2-6x+8\\[4pt]
f(3)&=&(3)^2-6(3)+8\\[4pt]
f(3)&=&-1
\end{array}
$$

The vertex is $(3,-1)$.

Find the $y$-intercept.

$$
\begin{array}{rcl}
f(x)&=&x^2-6x+8\\[4pt]
f(0)&=&(0)^2-6(0)+8\\[4pt]
f(0)&=&8
\end{array}
$$

The $y$-intercept is $(0,8)$. The point symmetric to the $y$-intercept is
$(6,8)$.

Find the $x$-intercepts by solving $f(x)=0$.

$$
\begin{array}{rcl}
0&=&x^2-6x+8\\[4pt]
0&=&(x-2)(x-4)\\[4pt]
x&=&2\quad\text{or}\quad x=4
\end{array}
$$

The $x$-intercepts are $(2,0)$ and $(4,0)$. The graph is an upward-opening
parabola with vertex $(3,-1)$, $x$-intercepts $(2,0)$ and $(4,0)$,
$y$-intercept $(0,8)$, and the symmetric point $(6,8)$. Graph the vertex,
intercepts, and the point symmetric to the $y$-intercept. Connect these five
points to sketch the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = x squared minus 6x plus 8 on a grid from −2 to 9 on the x-axis and −2 to 12 on the y-axis: an upward-opening parabola with its vertex (3, −1) on the dashed axis of symmetry x = 3, crossing the x-axis at (2, 0) and (4, 0), and passing through the y-intercept (0, 8) and its symmetric point (6, 8). The parabola is below the x-axis only between x = 2 and x = 4.","xMin":-2,"xMax":9,"yMin":-2,"yMax":12,"tickLabels":true,"quadratics":[{"a":1,"b":-6,"c":8,"from":-0.5,"to":6.5}],"lines":[{"x":3,"dashed":true,"arrows":false,"label":"x = 3"}],"points":[{"at":[3,-1],"label":"(3, −1)"},{"at":[2,0],"label":"(2, 0)"},{"at":[4,0],"label":"(4, 0)"},{"at":[0,8],"label":"(0, 8)"},{"at":[6,8],"label":"(6, 8)"}],"unit":24,"xTickStep":2,"yTickStep":4}
{{< /apfigure >}}

The inequality asks for the values of $x$ which make the function less than
zero. These are the values of $x$ that make the parabola below the $x$-axis.
We do not include the values 2 and 4, as the inequality is less than only.
The solution, in interval notation, is $(2,4)$.

{{< fillin
  question="Solve $x^2+2x-8<0$ graphically. Write the solution in interval notation."
  answer="(-4,2)"
  answerForm="decimal"
  answerDisplay="$(−4,2)$"
  hint="Graph $f(x)=x^2+2x-8$ from its vertex and $x$-intercepts, then read off where the parabola is below the $x$-axis."
>}}

{{< multiplechoice
  question="Which graph shows $y=x^2+2x-8$?"
  mode="graph"
  answerIndex="1"
  hint="Find the vertex and $x$-intercepts, then check which way the parabola opens."
>}}
{"ariaLabel":"A downward-opening parabola with vertex (−1, 9), crossing the x-axis at (−4, 0) and (2, 0).","xMin":-6,"xMax":6,"yMin":-10,"yMax":10,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-1,"b":-2,"c":8}]}
===OPT===
{"ariaLabel":"An upward-opening parabola with vertex (−1, −9), crossing the x-axis at (−4, 0) and (2, 0).","xMin":-6,"xMax":6,"yMin":-10,"yMax":10,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"b":2,"c":-8}]}
===OPT===
{"ariaLabel":"An upward-opening parabola with vertex (1, −9), crossing the x-axis at (−2, 0) and (4, 0).","xMin":-6,"xMax":6,"yMin":-10,"yMax":10,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"b":-2,"c":-8}]}
{{< /multiplechoice >}}

{{< fillin
  question="Solve $x^2-8x+12\ge0$ graphically. Write the solution in interval notation."
  answer="(-\infty,2]\cup[6,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,2]\cup[6,\infty)$"
  hint="Find the $x$-intercepts and include them because the inequality is greater than or equal to."
>}}

We list the steps to take to solve a quadratic inequality graphically.

{{< callout type="info" >}}
  **Solve a quadratic inequality graphically.**

  1. Write the quadratic inequality in standard form.
  2. Graph the function $f(x)=ax^2+bx+c$.
  3. Determine the solution from the graph.
{{< /callout >}}

In the last example, the parabola opened upward and in the next example, it
opens downward. In both cases, we are looking for the part of the parabola
that is below the $x$-axis but note how the position of the parabola affects
the solution.

**Example.** Solve $-x^2-8x-12\le0$ graphically. Write the solution in interval
notation.

**Solution.**

The quadratic inequality is in standard form:

$$
-x^2-8x-12\le0.
$$

Graph the function $f(x)=-x^2-8x-12$. The parabola opens downward.

Find the line of symmetry.

$$
\begin{array}{rcl}
x&=&-\tfrac{b}{2a}\\[10pt]
x&=&-\tfrac{-8}{2(-1)}\\[10pt]
x&=&-4
\end{array}
$$

Find the vertex.

$$
\begin{array}{rcl}
f(x)&=&-x^2-8x-12\\[4pt]
f(-4)&=&-(-4)^2-8(-4)-12\\[4pt]
f(-4)&=&-16+32-12\\[4pt]
f(-4)&=&4
\end{array}
$$

The vertex is $(-4,4)$.

Find the $x$-intercepts. Let $f(x)=0$.

$$
\begin{array}{rcl}
0&=&-x^2-8x-12\\[4pt]
0&=&-1(x+6)(x+2)\\[4pt]
x&=&-6\quad\text{or}\quad x=-2
\end{array}
$$

The $x$-intercepts are $(-6,0)$ and $(-2,0)$. The graph is a downward-opening
parabola with vertex $(-4,4)$ and $x$-intercepts $(-6,0)$ and $(-2,0)$.
Graph the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f(x) = negative x squared minus 8x minus 12 on a grid from −8 to 2 on the x-axis and −5 to 6 on the y-axis: a downward-opening parabola with its vertex (−4, 4) on the dashed axis of symmetry x = −4, crossing the x-axis at (−6, 0) and (−2, 0). The parabola is above the x-axis only between x = −6 and x = −2 and below it to the left of −6 and to the right of −2.","xMin":-8,"xMax":2,"yMin":-5,"yMax":6,"tickLabels":true,"quadratics":[{"a":-1,"b":-8,"c":-12}],"lines":[{"x":-4,"dashed":true,"arrows":false,"label":"x = −4"}],"points":[{"at":[-4,4],"label":"(−4, 4)"},{"at":[-6,0],"label":"(−6, 0)"},{"at":[-2,0],"label":"(−2, 0)"}],"unit":34}
{{< /apfigure >}}

Determine the solution from the graph. We include the $x$-intercepts as the
inequality is “less than or equal to.” The solution, in interval notation, is
$(-\infty,-6]\cup[-2,\infty)$.

{{< graphplot
  question="Graph $y=-x^2-6x-5$."
  answerDisplay="$y=-x^2-6x-5$"
  ariaLabel="A blank coordinate grid from −10 to 2 on the x-axis and −10 to 6 on the y-axis."
  hint="Find the vertex from the axis of symmetry, then plot it and two more points, such as the $x$-intercepts."
>}}
{"answer":{"quadratic":{"a":-1,"b":-6,"c":-5},"plotPoints":3},"grid":{"xMin":-10,"xMax":2,"yMin":-10,"yMax":6}}
{{< /graphplot >}}

{{< fillin
  question="Solve $-x^2-6x-5>0$ graphically. Write the solution in interval notation."
  answer="(-5,-1)"
  answerForm="decimal"
  answerDisplay="$(−5,−1)$"
  hint="Find the zeros, then read off where the parabola is above the $x$-axis."
>}}

{{< fillin
  question="Solve $-x^2+10x-16\le0$ graphically. Write the solution in interval notation."
  answer="(-\infty,2]\cup[8,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,2]\cup[8,\infty)$"
  hint="Find the zeros and include them, and use the sign of $a$ to see which way the parabola opens."
>}}

## Solve Quadratic Inequalities Algebraically

The algebraic method we will use is very similar to the method we used to
solve rational inequalities. We will find the zero partition numbers for the
inequality, which will be the solutions to the related quadratic equation.
Remember a polynomial expression can change signs only where the expression
is zero.

We will use the zero partition numbers to divide the number line into
intervals and then determine whether the quadratic expression will be positive
or negative in the interval. We then determine the solution for the
inequality.

**Example. How to solve quadratic inequalities algebraically.** Solve
$x^2-x-12\ge0$ algebraically. Write the solution in interval notation.

**Solution.**

Write the quadratic inequality in standard form.

$$
x^2-x-12\ge0
$$

Determine the critical points—the solutions to the related quadratic
equation. Change the inequality sign to an equal sign and then solve the
equation.

$$
\begin{array}{rcl}
x^2-x-12&=&0\\[4pt]
(x+3)(x-4)&=&0\\[4pt]
x&=&-3,\ 4
\end{array}
$$

Use $-3$ and 4 to divide the number line into intervals. Find the sign of the
quadratic expression in each interval by substituting a test point from that
interval.

| Interval | Test value | $x^2-x-12$ | Sign |
| :--- | :---: | :---: | :---: |
| $(-\infty,-3)$ | $x=-5$ | $(-5)^2-(-5)-12=18$ | $+$ |
| $(-3,4)$ | $x=0$ | $0^2-0-12=-12$ | $-$ |
| $(4,\infty)$ | $x=5$ | $5^2-5-12=8$ | $+$ |

Determine the intervals where the inequality is correct. The inequality is
positive in the first and last intervals and equals 0 at the points $-3$ and
4. The solution, in interval notation, is
$(-\infty,-3]\cup[4,\infty)$.

{{< fillin
  question="Solve $x^2+2x-8\ge0$ algebraically. Write the solution in interval notation."
  answer="(-\infty,-4]\cup[2,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,-4]\cup[2,\infty)$"
  hint="Use the zeros as partition numbers and test the three intervals."
>}}

{{< fillin
  question="Solve $x^2-2x-15\le0$ algebraically. Write the solution in interval notation."
  answer="[-3,5]"
  answerForm="decimal"
  answerDisplay="$[-3,5]$"
  hint="Factor the related quadratic equation, then test a value in each of the three intervals its zeros create."
>}}

In this example, since the expression $x^2-x-12$ factors nicely, we can also
find the sign in each interval much like we did when we solved rational
inequalities. We find the sign of each of the factors, and then the sign of
the product.

| Interval | $x+3$ | $x-4$ | $(x+3)(x-4)$ |
| :--- | :---: | :---: | :---: |
| $(-\infty,-3)$ | $-$ | $-$ | $+$ |
| $(-3,4)$ | $+$ | $-$ | $-$ |
| $(4,\infty)$ | $+$ | $+$ | $+$ |

The result is the same as we found using the other method.

We summarize the steps here.

{{< callout type="info" >}}
  **Solve a quadratic inequality algebraically.**

  1. Write the quadratic inequality in standard form.
  2. Determine the zero partition numbers—the solutions to the related quadratic equation.
  3. Use the zero partition numbers to divide the number line into intervals.
  4. Above the number line show the sign of each quadratic expression using test points from each interval substituted into the original inequality.
  5. Determine the intervals where the inequality is correct. Write the solution in interval notation.
{{< /callout >}}

**Example.** Solve $-x^2+6x-7\ge0$ algebraically. Write the solution in interval
notation.

**Solution.**

Write the quadratic inequality in standard form.

$$
-x^2+6x-7\ge0
$$

Multiply both sides of the inequality by $-1$. Remember to reverse the
inequality sign.

$$
x^2-6x+7\le0
$$

Determine the zero partition numbers by solving the related quadratic
equation.

$$
x^2-6x+7=0
$$

Write the Quadratic Formula, then substitute in the values of $a,b,c$.

$$
\begin{array}{rcl}
x&=&\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}\\[10pt]
x&=&\tfrac{-(-6)\pm\sqrt{(-6)^2-4\cdot1\cdot7}}{2\cdot1}\\[10pt]
x&=&\tfrac{6\pm\sqrt8}{2}\\[10pt]
x&=&\tfrac{6\pm2\sqrt2}{2}\\[10pt]
x&=&3\pm\sqrt2
\end{array}
$$

The zero partition numbers are $3-\sqrt2$ and $3+\sqrt2$, approximately 1.6
and 4.4. Use the zero partition numbers to divide the number line into
intervals. Test numbers from each interval in the original inequality.

| Interval | Test value | $-x^2+6x-7$ | Sign |
| :--- | :---: | :---: | :---: |
| $(-\infty,3-\sqrt2)$ | $x=0$ | $-(0)^2+6(0)-7=-7$ | $-$ |
| $(3-\sqrt2,3+\sqrt2)$ | $x=3$ | $-(3)^2+6(3)-7=2$ | $+$ |
| $(3+\sqrt2,\infty)$ | $x=5$ | $-(5)^2+6(5)-7=-2$ | $-$ |

The expression $-x^2+6x-7$ is nonnegative in the middle interval. The
solution is

$$
\left[3-\sqrt2,\ 3+\sqrt2\right].
$$

{{< fillin
  question="Solve $-x^2+2x+1\ge0$ algebraically. Write the solution in interval notation."
  answer="[1-\sqrt{2},1+\sqrt{2}]"
  answerForm="simplified-radical no-like-terms"
  answerDisplay="$[1-\sqrt2,1+\sqrt2]$"
  hint="Multiply by $-1$, reverse the inequality, and use the Quadratic Formula to find the partition numbers."
>}}

{{< fillin
  question="Solve $-x^2+8x-14<0$ algebraically. Write the solution in interval notation."
  answer="(-\infty,4-\sqrt{2})\cup(4+\sqrt{2},\infty)"
  answerForm="simplified-radical no-like-terms"
  answerDisplay="$(-\infty,4-\sqrt2)\cup(4+\sqrt2,\infty)$"
  hint="Use the Quadratic Formula to find the zero partition numbers, then test a value in each interval."
>}}

The solutions of the quadratic inequalities in each of the previous examples
were either an interval or the union of two intervals. This resulted from the
fact that, in each case we found two solutions to the corresponding quadratic
equation $ax^2+bx+c=0$. These two solutions then gave us either the two
$x$-intercepts for the graph or the two zero partition numbers to divide the
number line into intervals.

This correlates to our previous discussion of the number and type of solutions
to a quadratic equation using the discriminant.

For a quadratic equation of the form $ax^2+bx+c=0$, $a\ne0$:

| Discriminant | Number/type of solution | Typical graph |
| :--- | :--- | :--- |
| $b^2-4ac>0$ | 2 real solutions; 2 $x$-intercepts on graph | An upward- or downward-opening parabola crossing the $x$-axis twice |
| $b^2-4ac=0$ | 1 real solution; 1 $x$-intercept on graph | An upward- or downward-opening parabola tangent to the $x$-axis |
| $b^2-4ac<0$ | 2 complex solutions; no $x$-intercept | An upward-opening parabola wholly above, or downward-opening parabola wholly below, the $x$-axis |

The last row of the table shows us when the parabolas never intersect the
$x$-axis. Using the Quadratic Formula to solve the quadratic equation, the
radicand is a negative. We get two complex solutions.

In the next example, the quadratic inequality solutions will result from the
solution of the quadratic equation being complex.

**Example.** Solve, writing any solution in interval notation:

(a) $x^2-3x+4>0$  
(b) $x^2-3x+4\le0$

**Solution.**

(a) Write the quadratic inequality in standard form and determine the zero
partition numbers by solving the related quadratic equation.

$$
\begin{array}{rcl}
x^2-3x+4&>&0\\[4pt]
x^2-3x+4&=&0
\end{array}
$$

Use the Quadratic Formula.

$$
\begin{array}{rcl}
x&=&\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}\\[10pt]
x&=&\tfrac{-(-3)\pm\sqrt{(-3)^2-4\cdot1\cdot4}}{2\cdot1}\\[10pt]
x&=&\tfrac{3\pm\sqrt{-7}}{2}\\[10pt]
x&=&\tfrac{3\pm\sqrt7i}{2}
\end{array}
$$

The complex solutions tell us the parabola does not intersect the $x$-axis.
Also, the parabola opens upward. This tells us that the parabola is completely
above the $x$-axis.

We are to find the solution to $x^2-3x+4>0$. Since for all values of $x$ the
graph is above the $x$-axis, all values of $x$ make the inequality true. In
interval notation we write $(-\infty,\infty)$.

(b) Write the quadratic inequality in standard form and determine the zero
partition numbers by solving the related quadratic equation:

$$
x^2-3x+4\le0,\qquad x^2-3x+4=0.
$$

Since the corresponding quadratic equation is the same as in part (a), the
parabola will be the same. The parabola opens upward and is completely above
the $x$-axis—no part of it is below the $x$-axis.

We are to find the solution to $x^2-3x+4\le0$. Since for all values of $x$ the
graph is never below the $x$-axis, no values of $x$ make the inequality true.
There is no solution to the inequality.

{{< multiplechoice
  question="Solve $-x^2+2x-4\le0$ and write any solution in interval notation."
  answer="$(-\infty,\infty)$"
  hint="Compute the discriminant to see whether the parabola crosses the $x$-axis, and use the sign of $a$ to see which way it opens."
>}}
$(-\infty,\infty)$
no solution
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve $-x^2+2x-4\ge0$ and write any solution in interval notation."
  answer="no solution"
  hint="This is the same parabola as in the preceding question."
>}}
no solution
$(-\infty,\infty)$
{{< /multiplechoice >}}

## Key terms

A **quadratic inequality** is an inequality that contains a
quadratic expression. **Zero partition numbers** are the solutions of the
related quadratic equation; they divide the number line into intervals on
which the quadratic expression has a constant sign.

## Practice

### Solve quadratic inequalities graphically

{{< graphplot
  question="To solve $x^2+6x+5>0$ graphically, first graph $y=x^2+6x+5$."
  answerDisplay="$y=x^2+6x+5$"
  ariaLabel="A blank coordinate grid from −8 to 2 on the x-axis and −6 to 8 on the y-axis."
  hint="Find the vertex from the axis of symmetry, then plot it and two more points, such as the $x$-intercepts."
>}}
{"answer":{"quadratic":{"a":1,"b":6,"c":5},"plotPoints":3},"grid":{"xMin":-8,"xMax":2,"yMin":-6,"yMax":8}}
{{< /graphplot >}}

{{< fillin
  question="Solve $x^2+6x+5>0$ graphically. Write the solution in interval notation."
  answer="(-\infty,-5)\cup(-1,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,-5)\cup(-1,\infty)$"
  hint="Factor to find the $x$-intercepts, then read off where the parabola is above the $x$-axis."
>}}

{{< graphplot
  question="To solve $x^2+4x+3\le0$ graphically, first graph $y=x^2+4x+3$."
  answerDisplay="$y=x^2+4x+3$"
  ariaLabel="A blank coordinate grid from −6 to 2 on the x-axis and −4 to 8 on the y-axis."
  hint="Find the vertex from the axis of symmetry, then plot it and two more points, such as the $x$-intercepts."
>}}
{"answer":{"quadratic":{"a":1,"b":4,"c":3},"plotPoints":3},"grid":{"xMin":-6,"xMax":2,"yMin":-4,"yMax":8}}
{{< /graphplot >}}

{{< fillin
  question="Solve $x^2+4x+3\le0$ graphically. Write the solution in interval notation."
  answer="[-3,-1]"
  answerForm="decimal"
  answerDisplay="$[-3,-1]$"
  hint="Factor to find the $x$-intercepts, then read off where the parabola is on or below the $x$-axis."
>}}

### Solve quadratic inequalities algebraically

{{< fillin
  question="Solve $x^2+3x-4\ge0$ algebraically. Write the solution in interval notation."
  answer="(-\infty,-4]\cup[1,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,-4]\cup[1,\infty)$"
  hint="Factor to find the zero partition numbers, then test the three intervals they create."
>}}

{{< fillin
  question="Solve $x^2-4x+2\le0$ algebraically. Write the solution in interval notation."
  answer="[2-\sqrt{2},2+\sqrt{2}]"
  answerForm="simplified-radical no-like-terms"
  answerDisplay="$[2-\sqrt2,2+\sqrt2]$"
  hint="Use the Quadratic Formula to find the zero partition numbers, then test a value in each of the three intervals."
>}}

{{< multiplechoice
  question="Solve $x^2+3x+5>0$ and write any solution in interval notation."
  answer="$(-\infty,\infty)$"
  hint="Compute the discriminant to see whether the parabola crosses the $x$-axis, and use the sign of $a$ to see which way it opens."
>}}
$(-\infty,\infty)$
no solution
{{< /multiplechoice >}}

<small>
Adapted from [*Intermediate Algebra 2e*, Section 9.8](https://openstax.org/books/intermediate-algebra-2e/pages/9-8-solve-quadratic-inequalities) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/). Changes: adapted the source to interactive web format; recreated the source graphs as accessible graphics and its sign charts and discriminant table as tables; converted selected Try It exercises to auto-graded questions, posing the graphing part of the $x^2+2x-8<0$ Try It as a choice among graphs (asked after its interval part) and the graphing part of the $-x^2-6x-5>0$ Try It as a graph-it exercise; kept the correct answer $[1-\sqrt2,1+\sqrt2]$ for the $-x^2+2x+1\ge0$ Try It, where the source prints $[-1-\sqrt2,-1+\sqrt2]$; dropped a stray "$=0$" from the source's "the graph of $f(x)=ax^2+bx+c=0$ is a parabola" and wrote "intervals" where the first algebraic example says "quadrants"; omitted the Be Prepared quiz, Key Concepts summary, writing exercises, Self Check checklist, and unselected end-of-section exercises; condensed the section vocabulary into a Key terms paragraph; and adapted selected end-of-section exercises into an interactive Practice block, each selected graphical exercise as a graphing part and an interval part.
</small>
