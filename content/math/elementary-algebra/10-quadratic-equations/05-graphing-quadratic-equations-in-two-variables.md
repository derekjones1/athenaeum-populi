---
title: Graphing Quadratic Equations in Two Variables
description: >-
  Recognizing and graphing parabolas, finding their axes of symmetry,
  vertices, and intercepts, and solving maximum and minimum applications.
source_section: "10.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Recognize the graph of a quadratic equation in two variables
- Find the axis of symmetry and vertex of a parabola
- Find the intercepts of a parabola
- Graph quadratic equations in two variables
- Solve maximum and minimum applications
{{< /callout >}}

## Recognize the graph of a quadratic equation in two variables

We have graphed equations of the form $Ax+By=C$. We called equations like
this linear equations because their graphs are straight lines.

Now, we will graph equations of the form $y=ax^2+bx+c$. We call this kind of
equation a quadratic equation in two variables.

{{< callout type="info" >}}
  **Quadratic equation in two variables.** A **quadratic equation in two
  variables**, where $a$, $b$, and $c$ are real numbers and $a\ne0$, is an
  equation of the form

  $$y=ax^2+bx+c$$
{{< /callout >}}

Just like we started graphing linear equations by plotting points, we will do
the same for quadratic equations.

Let's look first at graphing the quadratic equation $y=x^2$. We will choose
integer values of $x$ between $-2$ and $2$ and find their $y$ values.

| $x$ | $y=x^2$ |
| ---: | ---: |
| $0$ | $0$ |
| $1$ | $1$ |
| $-1$ | $1$ |
| $2$ | $4$ |
| $-2$ | $4$ |

Notice when we let $x=1$ and $x=-1$, we got the same value for $y$.

$$
\begin{array}{rcl} y&=&x^2 \\[4pt] y&=&1^2 \\[4pt] y&=&1 \end{array}
\qquad\text{and}\qquad
\begin{array}{rcl} y&=&x^2 \\[4pt] y&=&(-1)^2 \\[4pt] y&=&1 \end{array}
$$

The same thing happened when we let $x=2$ and $x=-2$.

Now, we will plot the points to show the graph of $y=x^2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared, with the points (0, 0), (1, 1), (−1, 1), (2, 4), and (−2, 4) plotted, on a grid with both axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1}],"points":[{"at":[0,0]},{"at":[1,1]},{"at":[-1,1]},{"at":[2,4]},{"at":[-2,4]}]}
{{< /apfigure >}}

The graph is not a line. This figure is called a **parabola**. Every
quadratic equation has a graph that looks like this.

**Example 10.43.** Graph $y=x^2-1$.

We will graph the equation by plotting points. Choose integer values for
$x$, substitute them into the equation and solve for $y$.

| $x$ | $y=x^2-1$ |
| ---: | ---: |
| $0$ | $-1$ |
| $1$ | $0$ |
| $-1$ | $0$ |
| $2$ | $3$ |
| $-2$ | $3$ |

Record the values of the ordered pairs in the chart. Plot the points, and
then connect them with a smooth curve.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared minus 1, with the points (−2, 3), (−1, 0), (0, −1), (1, 0), and (2, 3) plotted, on a grid with both axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"c":-1}],"points":[{"at":[-2,3]},{"at":[-1,0]},{"at":[0,-1]},{"at":[1,0]},{"at":[2,3]}]}
{{< /apfigure >}}

The result is the graph of $y=x^2-1$.

{{< multiplechoice
  question="Which graph shows $y=-x^2$?"
  mode="graph"
  answerIndex="2"
  hint="Substitute $x=-2,-1,0,1,2$ and check the sign of each $y$-value, then check where the curve turns."
>}}
{"ariaLabel":"A parabola opening upward with its lowest point at the origin.","xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1}]}
===OPT===
{"ariaLabel":"A parabola opening downward with its highest point one unit below the origin.","xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":-1,"c":-1}]}
===OPT===
{"ariaLabel":"A parabola opening downward with its highest point at the origin.","xMin":-4,"xMax":4,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":-1}]}
{{< /multiplechoice >}}

How do the equations $y=x^2$ and $y=x^2-1$ differ? What is the difference
between their graphs? How are their graphs the same?

All parabolas of the form $y=ax^2+bx+c$ open upwards or downwards. Compare
the two graphs below.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem">

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y equals x squared plus 4x plus 3 opens upward and has vertex (−2, −1), on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"b":4,"c":3}],"texts":[{"at":[0,12],"text":"y = x² + 4x + 3; a > 0; opens upward","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y equals negative x squared plus 4x plus 3 opens downward and has vertex (2, 7), on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-1,"b":4,"c":3}],"texts":[{"at":[0,12],"text":"y = −x² + 4x + 3; a < 0; opens downward","anchor":"middle"}]}
{{< /apfigure >}}

</div>

Notice that the only difference in the two equations is the negative sign
before the $x^2$ in the equation of the second graph. When the $x^2$ term is
positive, the parabola opens upward, and when the $x^2$ term is negative,
the parabola opens downward.

{{< callout type="info" >}}
  **Parabola orientation.** For the quadratic equation $y=ax^2+bx+c$, if:

  - $a>0$, the parabola opens upward.
  - $a<0$, the parabola opens downward.
{{< /callout >}}

**Example 10.44.** Determine whether each parabola opens upward or downward:
(a) $y=-3x^2+2x-4$; (b) $y=6x^2+7x-9$.

(a) Find the value of $a$. Since $a=-3$ is negative, the parabola will open
downward.

(b) Find the value of $a$. Since $a=6$ is positive, the parabola will open
upward.

{{< multiplechoice
  question="Determine whether the parabola $y=-2x^2-2x-3$ opens upward or downward."
  hint="Find the value and sign of $a$, the coefficient of $x^2$."
  answer="Downward"
>}}
Upward
Downward
{{< /multiplechoice >}}

## Find the axis of symmetry and vertex of a parabola

Look again at the two parabolas $y=x^2+4x+3$ and $y=-x^2+4x+3$. Do you see
that we could fold each parabola in half and that one side would lie on top
of the other? The "fold line" is a line of symmetry. We call it the **axis
of symmetry** of the parabola.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem">

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared plus 4x plus 3 with the dashed axis of symmetry x equals −2 through its vertex (−2, −1), on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"b":4,"c":3}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"texts":[{"at":[0,12],"text":"y = x² + 4x + 3; axis of symmetry x = −2","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The downward-opening parabola y equals negative x squared plus 4x plus 3 with the dashed axis of symmetry x equals 2 through its vertex (2, 7), on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-1,"b":4,"c":3}],"lines":[{"x":2,"dashed":true,"arrows":false}],"texts":[{"at":[0,12],"text":"y = −x² + 4x + 3; axis of symmetry x = 2","anchor":"middle"}]}
{{< /apfigure >}}

</div>

The equation of the axis of symmetry can be derived by using the Quadratic
Formula. We will omit the derivation here and proceed directly to using the
result. The equation of the axis of symmetry of the graph of
$y=ax^2+bx+c$ is

$$x=-\frac{b}{2a}.$$

So, to find the equation of symmetry of each of the parabolas we graphed
above, we will substitute into the formula $x=-\tfrac{b}{2a}$.

$$
\begin{array}{rcl}x&=&-\tfrac{4}{2\cdot1}\\[4pt]x&=&-2\end{array}
\qquad\text{and}\qquad
\begin{array}{rcl}x&=&-\tfrac{4}{2(-1)}\\[4pt]x&=&2\end{array}
$$

The point on the parabola that is on the axis of symmetry is the lowest or
highest point on the parabola, depending on whether the parabola opens
upwards or downwards. This point is called the **vertex** of the parabola.

We can easily find the coordinates of the vertex, because we know it is on
the axis of symmetry. This means its $x$-coordinate is $-\tfrac{b}{2a}$. To
find the $y$-coordinate of the vertex, we substitute the value of the
$x$-coordinate into the quadratic equation.

For $y=x^2+4x+3$, the axis is $x=-2$ and
$y=(-2)^2+4(-2)+3=-1$, so the vertex is $(-2,-1)$. For
$y=-x^2+4x+3$, the axis is $x=2$ and $y=-(2)^2+4(2)+3=7$, so the vertex is
$(2,7)$.

{{< callout type="info" >}}
  **Axis of symmetry and vertex of a parabola.** For a parabola with equation
  $y=ax^2+bx+c$:

  - The axis of symmetry is the line $x=-\tfrac{b}{2a}$.
  - The vertex is on the axis of symmetry, so its $x$-coordinate is
    $-\tfrac{b}{2a}$.

  To find the $y$-coordinate of the vertex, substitute
  $x=-\tfrac{b}{2a}$ into the quadratic equation.
{{< /callout >}}

**Example 10.45.** For the parabola $y=3x^2-6x+2$ find: (a) the axis of
symmetry and (b) the vertex.

(a) The axis of symmetry is the line $x=-\tfrac{b}{2a}$.

$$
\begin{array}{lrcl}
\text{Substitute the values of }a,b\text{ into the equation.}&x&=&-\tfrac{-6}{2\cdot3}\\[10pt]
\text{Simplify.}&x&=&1
\end{array}
$$

The axis of symmetry is the line $x=1$.

(b) The vertex is on the line of symmetry, so its $x$-coordinate will be
$x=1$. Substitute $x=1$ into the equation and solve for $y$.

$$
\begin{array}{lrcl}
&y&=&3x^2-6x+2\\[4pt]
\text{Substitute.}&y&=&3(1)^2-6(1)+2\\[4pt]
\text{Simplify.}&y&=&3\cdot1-6+2\\[4pt]
\text{This is the }y\text{-coordinate.}&y&=&-1
\end{array}
$$

The vertex is $(1,-1)$.

{{< fillin
  question="For the parabola $y=2x^2-8x+1$, find the $x$-coordinate of the axis of symmetry."
  answer="2"
  answerForm="decimal"
  hint="Use $x=-\tfrac{b}{2a}$ with $a=2$ and $b=-8$."
>}}

## Find the intercepts of a parabola

When we graphed linear equations, we often used the $x$- and $y$-intercepts
to help us graph the lines. Finding the coordinates of the intercepts will
help us to graph parabolas, too.

Remember, at the **y-intercept** the value of $x$ is zero. So, to find the
$y$-intercept, we substitute $x=0$ into the equation. Both
$y=x^2+4x+3$ and $y=-x^2+4x+3$ have $y$-intercept $(0,3)$.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem">

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared plus 4x plus 3, showing y-intercept (0, 3), x-intercepts (−3, 0) and (−1, 0), and axis of symmetry x equals −2, on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"b":4,"c":3}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[0,3]},{"at":[-3,0]},{"at":[-1,0]}],"texts":[{"at":[0,12],"text":"y = x² + 4x + 3","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The downward-opening parabola y equals negative x squared plus 4x plus 3, showing y-intercept (0, 3), approximate x-intercepts (−0.6, 0) and (4.6, 0), and axis of symmetry x equals 2, on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-1,"b":4,"c":3}],"lines":[{"x":2,"dashed":true,"arrows":false}],"points":[{"at":[0,3]},{"at":[-0.6458,0]},{"at":[4.6458,0]}],"texts":[{"at":[0,12],"text":"y = −x² + 4x + 3","anchor":"middle"}]}
{{< /apfigure >}}

</div>

At an **x-intercept**, the value of $y$ is zero. To find an $x$-intercept,
we substitute $y=0$ into the equation. In other words, we will need to solve
$0=ax^2+bx+c$ for $x$.

But solving quadratic equations like this is exactly what we have done
earlier in this chapter.

First, we will find the $x$-intercepts of $y=x^2+4x+3$.

$$
\begin{array}{lrcl}
\text{Let }y=0.&0&=&x^2+4x+3\\[4pt]
\text{Factor.}&0&=&(x+1)(x+3)\\[4pt]
\text{Use the zero product property.}&&&x+1=0,\ x+3=0\\[4pt]
\text{Solve.}&&&x=-1,\ x=-3
\end{array}
$$

The $x$-intercepts are $(-1,0)$ and $(-3,0)$.

Now, we will find the $x$-intercepts of $y=-x^2+4x+3$.

$$
\begin{array}{lrcl}
\text{Let }y=0.&0&=&-x^2+4x+3\\[4pt]
\text{Use the Quadratic Formula.}&x&=&\tfrac{-4\pm\sqrt{4^2-4(-1)(3)}}{2(-1)}\\[10pt]
\text{Simplify.}&x&=&2\pm\sqrt7
\end{array}
$$

The $x$-intercepts are $(2+\sqrt7,0)$ and $(2-\sqrt7,0)$, approximately
$(4.6,0)$ and $(-0.6,0)$.

{{< callout type="info" >}}
  **Find the intercepts of a parabola.** For $y=ax^2+bx+c$:

  - **y-intercept:** Let $x=0$ and solve for $y$.
  - **x-intercepts:** Let $y=0$ and solve for $x$.
{{< /callout >}}

**Example 10.46.** Find the intercepts of $y=x^2-2x-8$.

To find the $y$-intercept, let $x=0$ and solve for $y$:
$y=0^2-2\cdot0-8=-8$. The $y$-intercept is $(0,-8)$.

To find the $x$-intercept, let $y=0$ and solve for $x$.

$$
\begin{array}{lrcl}
&0&=&x^2-2x-8\\[4pt]
\text{Solve by factoring.}&0&=&(x-4)(x+2)\\[4pt]
&&&0=x-4\quad 0=x+2\\[4pt]
&&&4=x\quad {-2}=x
\end{array}
$$

The $x$-intercepts are $(4,0)$ and $(-2,0)$.

{{< fillin
  question="Find the $x$-intercepts of $y=x^2+2x-8$. Enter the $x$-values separated by commas from least to greatest."
  answer="-4,2"
  answerForm="decimal"
  answerDisplay="$-4,2$"
  hint="Let $y=0$ and factor $x^2+2x-8$."
>}}

In this chapter, we have been solving quadratic equations of the form
$ax^2+bx+c=0$. We solved for $x$ and the results were the solutions to the
equation.

We are now looking at quadratic equations in two variables of the form
$y=ax^2+bx+c$. The graphs of these equations are parabolas. The
$x$-intercepts of the parabolas occur where $y=0$.

The solutions of the quadratic equation are the $x$ values of the
$x$-intercepts.

Earlier, we saw that quadratic equations have 2, 1, or 0 solutions. The
graphs below show parabolas for these three cases. Since the
solutions of the equations give the $x$-intercepts of the graphs, the number
of $x$-intercepts is the same as the number of solutions.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem">

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola crossing the x-axis twice, representing a positive discriminant and two real solutions.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"quadratics":[{"a":1,"c":-2}],"texts":[{"at":[0,5.6],"text":"b² − 4ac > 0: two x‑intercepts","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening parabola touching the x-axis only at its vertex, representing a zero discriminant and one real solution.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"quadratics":[{"a":-1,"b":1,"c":-0.25}],"texts":[{"at":[0,5.6],"text":"b² − 4ac = 0: one x‑intercept","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola entirely above the x-axis, representing a negative discriminant and no real solution.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"quadratics":[{"a":1,"c":1}],"texts":[{"at":[0,5.6],"text":"b² − 4ac < 0: no x‑intercept","anchor":"middle"}]}
{{< /apfigure >}}

</div>

Previously, we used the discriminant to determine the number of solutions of
a quadratic equation of the form $ax^2+bx+c=0$. Now, we can use the
discriminant to tell us how many $x$-intercepts there are on the graph.

| Discriminant | Solutions | Graph |
| --- | --- | --- |
| $b^2-4ac>0$ | Two solutions | Two $x$-intercepts |
| $b^2-4ac=0$ | One solution | One $x$-intercept |
| $b^2-4ac<0$ | No real solution | No $x$-intercept |

Before you start solving the quadratic equation to find the values of the
$x$-intercepts, you may want to evaluate the discriminant so you know how
many solutions to expect.

**Example 10.47.** Find the intercepts of $y=5x^2+x+4$.

To find the $y$-intercept, let $x=0$ and solve for $y$.

$$y=5\cdot0^2+0+4=4.$$

When $x=0$, then $y=4$. The $y$-intercept is the point $(0,4)$.

To find the $x$-intercept, let $y=0$ and solve for $x$. Find the value of the
discriminant to predict the number of solutions and so $x$-intercepts.

$$b^2-4ac=1^2-4\cdot5\cdot4=1-80=-79.$$

Since the value of the discriminant is negative, there is no real solution
to the equation. There are no $x$-intercepts.

**Example 10.48.** Find the intercepts of $y=4x^2-12x+9$.

To find the $y$-intercept, let $x=0$ and solve for $y$.

$$y=4\cdot0^2-12\cdot0+9=9.$$

When $x=0$, then $y=9$. The $y$-intercept is the point $(0,9)$.

To find the $x$-intercept, let $y=0$ and solve for $x$. Find the value of the
discriminant to predict the number of solutions and so $x$-intercepts.

$$b^2-4ac=(-12)^2-4\cdot4\cdot9=144-144=0.$$

Since the value of the discriminant is 0, there is only one real solution to
the equation. Therefore, there is only one $x$-intercept.

$$
\begin{array}{lrcl}
\text{Factor the perfect square trinomial.}&0&=&(2x-3)^2\\[4pt]
\text{Use the Zero Product Property.}&0&=&2x-3\\[4pt]
\text{Solve for }x.&3&=&2x\\[4pt]
&x&=&\tfrac32
\end{array}
$$

When $y=0$, then $\tfrac32=x$. The $x$-intercept is the point
$(\tfrac32,0)$.

## Graph quadratic equations in two variables

Now, we have all the pieces we need in order to graph a quadratic equation
in two variables. We just need to put them together.

**Example 10.49. How To Graph a Quadratic Equation in Two Variables.** Graph
$y=x^2-6x+8$.

**Step 1.** Write the quadratic equation with $y$ on one side. This equation
has $y$ on one side.

$$y=x^2-6x+8\qquad a=1,\ b=-6,\ c=8$$

**Step 2.** Determine whether the parabola opens upward or downward. Look at
$a$ in the equation. Since $a$ is positive, the parabola opens upward.

**Step 3.** Find the axis of symmetry.

$$
\begin{array}{rcl}
x&=&-\tfrac{b}{2a}\\[10pt]
x&=&-\tfrac{-6}{2\cdot1}\\[10pt]
x&=&3
\end{array}
$$

The axis of symmetry is the line $x=3$.

**Step 4.** Find the vertex. The vertex is on the axis of symmetry.
Substitute $x=3$ into the equation and solve for $y$.

$$
\begin{array}{rcl}
y&=&x^2-6x+8\\[4pt]
y&=&(3)^2-6(3)+8\\[4pt]
y&=&-1
\end{array}
$$

The vertex is $(3,-1)$.

**Step 5.** Find the $y$-intercept. Find the point symmetric to the
$y$-intercept across the axis of symmetry. We substitute $x=0$ into the
equation.

$$
\begin{array}{rcl}
y&=&x^2-6x+8\\[4pt]
y&=&(0)^2-6(0)+8\\[4pt]
y&=&8
\end{array}
$$

The $y$-intercept is $(0,8)$. We use the axis of symmetry to find a point
symmetric to the $y$-intercept. The $y$-intercept is 3 units left of the
axis of symmetry, $x=3$. A point 3 units to the right of the axis of
symmetry has $x=6$. The point is $(6,8)$.

**Step 6.** Find the $x$-intercepts. We substitute $y=0$ into the equation.
We can solve this quadratic equation by factoring.

$$
\begin{array}{rcl}
0&=&x^2-6x+8\\[4pt]
0&=&(x-2)(x-4)\\[4pt]
x&=&2\text{ or }x=4
\end{array}
$$

The $x$-intercepts are $(2,0)$ and $(4,0)$.

**Step 7.** Graph the parabola. We graph the vertex, intercepts, and the
point symmetric to the $y$-intercept. We connect these 5 points to sketch
the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared minus 6x plus 8, with vertex (3, −1), x-intercepts (2, 0) and (4, 0), y-intercept (0, 8), symmetric point (6, 8), and dashed axis of symmetry x equals 3, on a grid with both axes numbered every 1 unit.","xMin":-1,"xMax":8,"yMin":-2,"yMax":9,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":-6,"c":8}],"lines":[{"x":3,"dashed":true,"arrows":false}],"points":[{"at":[3,-1]},{"at":[2,0]},{"at":[4,0]},{"at":[0,8]},{"at":[6,8]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Graph a quadratic equation in two variables.**

  1. Write the quadratic equation with $y$ on one side.
  2. Determine whether the parabola opens upward or downward.
  3. Find the axis of symmetry.
  4. Find the vertex.
  5. Find the $y$-intercept. Find the point symmetric to the $y$-intercept
     across the axis of symmetry.
  6. Find the $x$-intercepts.
  7. Graph the parabola.
{{< /callout >}}

**Example 10.50.** Graph $y=-x^2+6x-9$.

The equation has $y$ on one side. Since $a$ is $-1$, the parabola opens
downward. To find the axis of symmetry, find $x=-\tfrac{b}{2a}$.

$$x=-\frac{6}{2(-1)}=3.$$

The axis of symmetry is $x=3$. The vertex is on the line $x=3$. Find $y$
when $x=3$.

$$y=-3^2+6\cdot3-9=-9+18-9=0.$$

The vertex is $(3,0)$. The $y$-intercept occurs when $x=0$. Substitute
$x=0$. Simplify.

$$y=-0^2+6\cdot0-9=-9.$$

The $y$-intercept is $(0,-9)$. The point $(0,-9)$ is three units to the left
of the line of symmetry. The point three units to the right of the line of
symmetry is $(6,-9)$. Point symmetric to the $y$-intercept is $(6,-9)$.

$$
\begin{array}{lrcl}
\text{Substitute }y=0.&0&=&-x^2+6x-9\\[4pt]
\text{Factor the GCF.}&0&=&-(x^2-6x+9)\\[4pt]
\text{Factor the trinomial.}&0&=&-(x-3)^2\\[4pt]
\text{Solve for }x.&x&=&3
\end{array}
$$

Connect the points to graph the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The downward-opening parabola y equals negative x squared plus 6x minus 9, with vertex and sole x-intercept (3, 0), y-intercept (0, −9), symmetric point (6, −9), and dashed axis of symmetry x equals 3, on a grid with both axes numbered every 1 unit.","xMin":-4,"xMax":10,"yMin":-10,"yMax":4,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":-1,"b":6,"c":-9}],"lines":[{"x":3,"dashed":true,"arrows":false}],"points":[{"at":[3,0]},{"at":[0,-9]},{"at":[6,-9]}]}
{{< /apfigure >}}

For the graph of $y=-x^2+6x-9$, the vertex and the $x$-intercept were the
same point. Remember how the discriminant determines the number of solutions
of a quadratic equation? The discriminant of the equation
$0=-x^2+6x-9$ is 0, so there is only one solution. That means there is only
one $x$-intercept, and it is the vertex of the parabola.

How many $x$-intercepts would you expect to see on the graph of
$y=x^2+4x+5$?

**Example 10.51.** Graph $y=x^2+4x+5$.

The equation has $y$ on one side. Since $a$ is 1, the parabola opens upward.
To find the axis of symmetry, find $x=-\tfrac{b}{2a}$.

$$x=-\frac{4}{2(1)}=-2.$$

The axis of symmetry is $x=-2$. The vertex is on the line $x=-2$. Find $y$
when $x=-2$.

$$y=(-2)^2+4(-2)+5=4-8+5=1.$$

The vertex is $(-2,1)$. The $y$-intercept occurs when $x=0$. Substitute
$x=0$. Simplify.

$$y=(0)^2+4(0)+5=5.$$

The $y$-intercept is $(0,5)$. The point $(0,5)$ is two units to the right of
the line of symmetry. The point two units to the left of the line of
symmetry is $(-4,5)$. Point symmetric to the $y$-intercept is $(-4,5)$.

The $x$-intercept occurs when $y=0$. Substitute $y=0$. Test the
discriminant.

$$b^2-4ac=4^2-4\cdot1\cdot5=16-20=-4.$$

Since the value of the discriminant is negative, there is no solution and
so no $x$-intercept. Connect the points to graph the parabola. You may want
to choose two more points for greater accuracy.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared plus 4x plus 5, with vertex (−2, 1), y-intercept (0, 5), symmetric point (−4, 5), no x-intercepts, and dashed axis of symmetry x equals −2, on a grid with both axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":4,"c":5}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[-2,1]},{"at":[0,5]},{"at":[-4,5]}]}
{{< /apfigure >}}

**Example 10.52.** Graph $y=2x^2-4x-3$.

The equation has $y$ on one side. Since $a$ is 2, the parabola opens upward.
To find the axis of symmetry, find $x=-\tfrac{b}{2a}$.

$$x=-\frac{-4}{2\cdot2}=1.$$

The axis of symmetry is $x=1$. The vertex is on the line $x=1$. Find $y$
when $x=1$.

$$y=2(1)^2-4(1)-3=2-4-3=-5.$$

The vertex is $(1,-5)$. The $y$-intercept occurs when $x=0$. Substitute
$x=0$. Simplify.

$$y=2\cdot0^2-4\cdot0-3=-3.$$

The $y$-intercept is $(0,-3)$. The point $(0,-3)$ is one unit to the left of
the line of symmetry. The point one unit to the right of the line of
symmetry is $(2,-3)$. Point symmetric to the $y$-intercept is $(2,-3)$.

The $x$-intercept occurs when $y=0$. Substitute $y=0$. Use the Quadratic
Formula.

$$
\begin{array}{lrcl}
\text{Use the Quadratic Formula.}&x&=&\tfrac{-(-4)\pm\sqrt{(-4)^2-4\cdot2\cdot(-3)}}{2\cdot2}\\[10pt]
\text{Simplify.}&x&=&\tfrac{4\pm\sqrt{16+24}}4\\[10pt]
\text{Simplify inside the radical.}&x&=&\tfrac{4\pm\sqrt{40}}4\\[10pt]
\text{Simplify the radical.}&x&=&\tfrac{4\pm2\sqrt{10}}4\\[10pt]
\text{Factor the GCF.}&x&=&\tfrac{2(2\pm\sqrt{10})}4\\[10pt]
\text{Remove common factors.}&x&=&\tfrac{2\pm\sqrt{10}}2
\end{array}
$$

Write as two equations:
$x=\tfrac{2+\sqrt{10}}2$, $x=\tfrac{2-\sqrt{10}}2$. Approximate the values:
$x\approx2.6$, $x\approx-0.6$. The approximate values of the $x$-intercepts
are $(2.6,0)$ and $(-0.6,0)$. Graph the parabola using the points found.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals 2x squared minus 4x minus 3, with vertex (1, −5), y-intercept (0, −3), symmetric point (2, −3), approximate x-intercepts (−0.6, 0) and (2.6, 0), and dashed axis of symmetry x equals 1, on a grid with both axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":2,"b":-4,"c":-3}],"lines":[{"x":1,"dashed":true,"arrows":false}],"points":[{"at":[1,-5]},{"at":[0,-3]},{"at":[2,-3]}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $y=5x^2+10x+3$."
  answerDisplay="$y=5x^2+10x+3$"
  ariaLabel="A blank coordinate grid from −7 to 7 on the x-axis and −7 to 20 on the y-axis."
  hint="Find $x=-\tfrac{b}{2a}$, substitute, and inspect the sign of $a$."
>}}
{"answer": {"quadratic": {"a": 5, "b": 10, "c": 3}, "plotPoints": 3}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 20}}
{{< /graphplot >}}

## Solve maximum and minimum applications

Knowing that the vertex of a parabola is the lowest or highest point of the
parabola gives us an easy way to determine the minimum or maximum value of a
quadratic equation. The $y$-coordinate of the vertex is the minimum $y$-value
of a parabola that opens upward. It is the maximum $y$-value of a parabola
that opens downward.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 0.5rem">

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola whose lowest point, the vertex, is marked minimum.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"tickLabels":false,"quadratics":[{"a":1,"c":-3}],"points":[{"at":[0,-3],"label":"minimum"}],"texts":[{"at":[0,5.4],"text":"The vertex gives the minimum","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening parabola whose highest point, the vertex, is marked maximum.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"tickLabels":false,"quadratics":[{"a":-1,"b":1,"c":2}],"points":[{"at":[0.5,2.25],"label":"maximum"}],"texts":[{"at":[0,5.4],"text":"The vertex gives the maximum","anchor":"middle"}]}
{{< /apfigure >}}

</div>

{{< callout type="info" >}}
  **Minimum or maximum values of a quadratic equation.** The
  **y-coordinate of the vertex** of the graph of a quadratic equation is the

  - minimum value of the quadratic equation if the parabola opens upward.
  - maximum value of the quadratic equation if the parabola opens downward.
{{< /callout >}}

**Example 10.53.** Find the minimum value of $y=x^2+2x-8$.

Since $a$ is positive, the parabola opens upward. The quadratic equation has
a minimum. Find the axis of symmetry.

$$x=-\frac{2}{2\cdot1}=-1.$$

The axis of symmetry is $x=-1$. The vertex is on the line $x=-1$. Find $y$
when $x=-1$.

$$y=(-1)^2+2(-1)-8=1-2-8=-9.$$

The vertex is $(-1,-9)$. Since the parabola has a minimum, the $y$-coordinate
of the vertex is the minimum $y$-value of the quadratic equation. The
minimum value of the quadratic is $-9$ and it occurs when $x=-1$. Show the
graph to verify the result.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared plus 2x minus 8, with minimum vertex (−1, −9) and dashed axis of symmetry x equals −1, on a grid with both axes numbered every 1 unit.","xMin":-5,"xMax":5,"yMin":-10,"yMax":2,"unit":22,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":2,"c":-8}],"lines":[{"x":-1,"dashed":true,"arrows":false}],"points":[{"at":[-1,-9]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the minimum value of $y=x^2-8x+12$."
  answer="-4"
  answerForm="decimal"
  hint="Find the vertex using $x=-\tfrac{b}{2a}$, then substitute."
>}}

We have used the formula

$$h=-16t^2+v_0t+h_0$$

to calculate the height in feet, $h$, of an object shot upwards into the air
with initial velocity, $v_0$, after $t$ seconds.

This formula is a quadratic equation in the variable $t$, so its graph is a
parabola. By solving for the coordinates of the vertex, we can find how long
it will take the object to reach its maximum height. Then, we can calculate
the maximum height.

**Example 10.54.** The quadratic equation $h=-16t^2+v_0t+h_0$ models the
height of a volleyball hit straight upwards with velocity 176 feet per
second from a height of 4 feet.

(a) How many seconds will it take the volleyball to reach its maximum
height? (b) Find the maximum height of the volleyball.

Here $h=-16t^2+176t+4$. Since $a$ is negative, the parabola opens downward.
The quadratic equation has a maximum.

(a) Find the axis of symmetry.

$$t=-\frac{b}{2a}=-\frac{176}{2(-16)}=5.5.$$

The axis of symmetry is $t=5.5$. The vertex is on the line $t=5.5$. The
maximum occurs when $t=5.5$ seconds.

(b) Find $h$ when $t=5.5$.

$$h=-16(5.5)^2+176(5.5)+4.$$

Use a calculator to simplify: $h=488$. The vertex is $(5.5,488)$. Since the
parabola has a maximum, the $h$-coordinate of the vertex is the maximum
$y$-value of the quadratic equation. The maximum value of the quadratic is
488 feet and it occurs when $t=5.5$ seconds.

{{< fillin
  question="The quadratic equation $h=-16t^2+128t+32$ is used to find the height of a stone thrown upward from a height of 32 feet at a rate of 128 ft/sec. How many seconds will it take the stone to reach its maximum height?"
  answer="4"
  answerForm="decimal"
  hint="Use $t=-\tfrac{b}{2a}$ with $a=-16$ and $b=128$."
>}}

## Key terms

**quadratic equation in two variables** — an equation of the form
$y=ax^2+bx+c$, where $a$, $b$, and $c$ are real numbers and $a\ne0$.
**parabola** — the graph of a quadratic equation in two variables. **axis of
symmetry** — the vertical line passing through the middle of the parabola.
**vertex** — the point on the parabola that is on the axis of symmetry; it
is the lowest or highest point on the parabola. **x-intercepts of a
parabola** — the points where $y=0$. **y-intercept of a parabola** — the
point where $x=0$.

## Practice

### Recognize the graph of a quadratic equation in two variables

{{< multiplechoice
  question="Determine whether the parabola $y=-2x^2-6x-7$ opens upward or downward."
  answer="downward"
  hint="Find the sign of $a$, the coefficient of $x^2$."
>}}
downward
upward
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the parabola $y=4x^2+x-4$ opens upward or downward."
  answer="upward"
  hint="Find the sign of $a$, the coefficient of $x^2$."
>}}
upward
downward
{{< /multiplechoice >}}

### Find the axis of symmetry and vertex of a parabola

{{< fillin
  question="For the parabola $y=x^2+8x-1$, find the $x$-coordinate of the axis of symmetry."
  answer="-4"
  answerForm="decimal"
  hint="Use $x=-\tfrac{b}{2a}$ with $a=1$ and $b=8$."
>}}

{{< fillin
  question="Find the vertex of $y=x^2+8x-1$. Enter your answer as an ordered pair, for example $(2,-3)$."
  answer="(-4,-17)"
  answerForm="decimal"
  hint="Substitute the axis of symmetry's $x$-value into the equation to find $y$."
>}}

{{< fillin
  question="For the parabola $y=-x^2+2x+5$, find the $x$-coordinate of the axis of symmetry."
  answer="1"
  answerForm="decimal"
  hint="Use $x=-\tfrac{b}{2a}$ with $a=-1$ and $b=2$."
>}}

{{< fillin
  question="Find the vertex of $y=-x^2+2x+5$. Enter your answer as an ordered pair, for example $(2,-3)$."
  answer="(1,6)"
  answerForm="decimal"
  hint="Substitute the axis of symmetry's $x$-value into the equation to find $y$."
>}}

### Find the intercepts of a parabola

{{< fillin
  question="Find the $y$-intercept of the parabola $y=x^2+7x+6$. Give your answer as an ordered pair."
  answer="(0,6)"
  answerForm="decimal"
  hint="Let $x=0$ and evaluate $y$."
>}}

{{< fillin
  question="Find the $x$-intercept of the parabola $y=x^2+7x+6$ that has the smaller $x$-value. Give your answer as an ordered pair."
  answer="(-6,0)"
  answerForm="decimal"
  hint="Let $y=0$ and factor $x^2+7x+6$ to find both roots."
>}}

{{< fillin
  question="Find the $y$-intercept of the parabola $y=-x^2+8x-19$. Give your answer as an ordered pair."
  answer="(0,-19)"
  answerForm="decimal"
  hint="Let $x=0$ and evaluate $y$."
>}}

{{< multiplechoice
  question="How many $x$-intercepts does the parabola $y=-x^2+8x-19$ have?"
  answer="zero"
  hint="Evaluate the discriminant $b^2-4ac$ and check whether it is positive, zero, or negative."
>}}
two
one
zero
{{< /multiplechoice >}}

{{< fillin
  question="Find the $x$-intercept of the parabola $y=4x^2-20x+25$. Give your answer as an ordered pair."
  answer="(\frac{5}{2},0)"
  answerForm="lowest-terms"
  answerDisplay="$(\tfrac{5}{2},0)$"
  hint="Let $y=0$, check whether the trinomial is a perfect square, and use the Zero Product Property."
>}}

### Graph quadratic equations in two variables

{{< graphplot
  question="Graph $y=x^2+6x+5$ using its intercepts, vertex, and axis of symmetry."
  answerDisplay="$y=x^2+6x+5$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="Find the vertex and axis of symmetry first, then plot the $x$- and $y$-intercepts."
>}}
{"answer": {"quadratic": {"a": 1, "b": 6, "c": 5}, "plotPoints": 3}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{< /graphplot >}}

{{< fillin
  question="What is the vertex of $y=x^2+6x+5$? Enter your answer as an ordered pair, for example $(2,-3)$."
  answer="(-3,-4)"
  answerForm="decimal"
  hint="Find the axis of symmetry $x=-\tfrac{b}{2a}$, then substitute to find $y$."
>}}

{{< graphplot
  question="Graph $y=-x^2-4x+2$ using its intercepts, vertex, and axis of symmetry."
  answerDisplay="$y=-x^2-4x+2$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="Check the sign of $a$, find the axis of symmetry and the vertex, then use the $y$-intercept and its symmetric point."
>}}
{"answer": {"quadratic": {"a": -1, "b": -4, "c": 2}, "plotPoints": 3}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{< /graphplot >}}

### Solve maximum and minimum applications

{{< fillin
  question="Find the minimum value of $y=2x^2+x-1$."
  answer="-\frac{9}{8}"
  answerForm="lowest-terms"
  answerDisplay="$-\tfrac{9}{8}$"
  hint="Find the vertex's $y$-coordinate using $x=-\tfrac{b}{2a}$, then substitute."
>}}

{{< fillin
  question="Find the maximum value of $y=-9x^2+16$."
  answer="16"
  answerForm="decimal"
  hint="Find the axis of symmetry $x=-\tfrac{b}{2a}$, then substitute it into the equation."
>}}

{{< fillin
  question="An arrow is shot vertically upward from a platform 45 feet high at a rate of 168 feet per second, modeled by $h=-16t^2+168t+45$. How many seconds will it take the arrow to reach its maximum height? Round to the nearest tenth of a second."
  answer="5.3"
  answerForm="decimal"
  hint="Find $t=-\tfrac{b}{2a}$ with $a=-16$ and $b=168$."
>}}

{{< fillin
  question="For the arrow in the previous exercise, find its maximum height, in feet. Round to the nearest tenth of a foot."
  answer="486"
  answerForm="decimal"
  hint="Substitute the unrounded time $t=-\tfrac{b}{2a}$ into $h=-16t^2+168t+45$."
>}}

{{< fillin
  question="A computer store owner charges $x$ dollars for a certain computer and can sell $40-x$ computers each week, giving revenue modeled by $R=-x^2+40x$. Find the selling price, in dollars, that will give the maximum revenue."
  answer="20"
  answerForm="decimal"
  answerDisplay="\$20"
  hint="Find the axis of symmetry $x=-\tfrac{b}{2a}$ of the revenue model."
>}}

{{< fillin
  question="For the revenue model in the previous exercise, find the maximum revenue, in dollars."
  answer="400"
  answerForm="decimal"
  answerDisplay="\$400"
  hint="Substitute the selling price back into $R=-x^2+40x$."
>}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 10.5: Graphing Quadratic Equations in Two Variables](https://openstax.org/books/elementary-algebra-2e/pages/10-5-graphing-quadratic-equations-in-two-variables) by Lynn Marecek and MaryAnne Anthony-Smith, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the source parabola graphs as accessible inline graphics, recast source data tables as markdown tables; omitted the Be Prepared quiz, Self Check checklist, media links, and unselected end-of-section exercises; adapted selected end-of-section exercises into the section-final interactive Practice block; converted the practice problems ("Try Its") into interactive exercises with instant feedback; corrected the discriminant line of the $y=4x^2-12x+9$ example, which the source prints as $2^2-4\cdot4\cdot9$, to $(-12)^2-4\cdot4\cdot9$; and corrected the approximate $x$-intercept $\tfrac{2+\sqrt{10}}{2}$ of the $y=2x^2-4x-3$ example, which the source rounds to $2.5$, to $2.6$.</small>
