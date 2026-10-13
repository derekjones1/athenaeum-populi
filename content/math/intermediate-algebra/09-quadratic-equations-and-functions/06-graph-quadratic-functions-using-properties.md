---
title: Graph Quadratic Functions Using Properties
description: >-
  Recognizing and graphing quadratic functions by using their orientation,
  axis of symmetry, vertex, and intercepts, and solving maximum and minimum applications.
source_section: "9.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Recognize the graph of a quadratic function
- Find the axis of symmetry and vertex of a parabola
- Find the intercepts of a parabola
- Graph quadratic functions using properties
- Solve maximum and minimum applications
{{< /callout >}}

## Recognize the Graph of a Quadratic Function

Previously we very briefly looked at the function $f(x)=x^2$, which we called
the square function. It was one of the first non-linear functions we looked at.
Now we will graph functions of the form $f(x)=ax^2+bx+c$ if $a\ne0$. We call
this kind of function a quadratic function.

{{< callout type="info" >}}
**Quadratic Function.** A **quadratic function**, where $a$, $b$, and $c$ are
real numbers and $a\ne0$, is a function of the form

$$
f(x)=ax^2+bx+c.
$$
{{< /callout >}}

We graphed the quadratic function $f(x)=x^2$ by plotting points.

| $x$ | $f(x)=x^2$ | $(x,f(x))$ |
|---:|---:|:---|
| $-3$ | $9$ | $(-3,9)$ |
| $-2$ | $4$ | $(-2,4)$ |
| $-1$ | $1$ | $(-1,1)$ |
| $0$ | $0$ | $(0,0)$ |
| $1$ | $1$ | $(1,1)$ |
| $2$ | $4$ | $(2,4)$ |
| $3$ | $9$ | $(3,9)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared, with the points (0, 0), (1, 1), (−1, 1), (2, 4), and (−2, 4) plotted, on a grid with both axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1}],"points":[{"at":[0,0]},{"at":[1,1]},{"at":[-1,1]},{"at":[2,4]},{"at":[-2,4]}]}
{{< /apfigure >}}

Every quadratic function has a graph that looks like this. We call this figure
a **parabola**.

Let's practice graphing a parabola by plotting a few points.

**Example.** Graph $f(x)=x^2-1$.

**Solution.**

We will graph the function by plotting points. Choose integer values for $x$,
substitute them into the equation and simplify to find $f(x)$. Record the
values of the ordered pairs in the chart.

| $x$ | $f(x)=x^2-1$ |
|---:|---:|
| $0$ | $-1$ |
| $1$ | $0$ |
| $-1$ | $0$ |
| $2$ | $3$ |
| $-2$ | $3$ |

Plot the points, and then connect them with a smooth curve. The result will be
the graph of the function $f(x)=x^2-1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared minus 1, with the points (−2, 3), (−1, 0), (0, −1), (1, 0), and (2, 3) plotted, on a grid with both axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"c":-1}],"points":[{"at":[-2,3]},{"at":[-1,0]},{"at":[0,-1]},{"at":[1,0]},{"at":[2,3]}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=-x^2$."
  answerDisplay="$f(x)=-x^2$"
  ariaLabel="A blank coordinate grid from −5 to 5 on the x-axis and −10 to 10 on the y-axis."
  hint="Make a table of values for a few integer values of $x$, plot the points, and connect them with a smooth curve."
>}}
{"answer":{"quadratic":{"a":-1,"b":0,"c":0},"plotPoints":3},"grid":{"xMin":-5,"xMax":5,"yMin":-10,"yMax":10}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=x^2+1$."
  answerDisplay="$f(x)=x^2+1$"
  ariaLabel="A blank coordinate grid from −5 to 5 on the x-axis and −2 to 10 on the y-axis."
  hint="Make a table of values for a few integer values of $x$, plot the points, and connect them with a smooth curve."
>}}
{"answer":{"quadratic":{"a":1,"b":0,"c":1},"plotPoints":3},"grid":{"xMin":-5,"xMax":5,"yMin":-2,"yMax":10}}
{{< /graphplot >}}

All graphs of quadratic functions of the form $f(x)=ax^2+bx+c$ are parabolas
that open upward or downward.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y equals x squared plus 4x plus 3 opens upward and has vertex (−2, −1), on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"b":4,"c":3}],"texts":[{"at":[0,12],"text":"y = x² + 4x + 3; a > 0; opens upward","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y equals negative x squared plus 4x plus 3 opens downward and has vertex (2, 7), on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-1,"b":4,"c":3}],"texts":[{"at":[0,12],"text":"y = −x² + 4x + 3; a < 0; opens downward","anchor":"middle"}]}
{{< /apfigure >}}

Notice that the only difference in the two functions is the negative sign
before the quadratic term ($x^2$ in the equation of the graph). When the
quadratic term is positive, the parabola opens upward, and when the quadratic
term is negative, the parabola opens downward.

{{< callout type="info" >}}
**Parabola Orientation.** For the graph of the quadratic function
$f(x)=ax^2+bx+c$, if

- $a>0$, the parabola opens upward.
- $a<0$, the parabola opens downward.
{{< /callout >}}

**Example.** Determine whether each parabola opens upward or downward:

(a) $f(x)=-3x^2+2x-4$  
(b) $f(x)=6x^2+7x-9$.

**Solution.**

(a) In $f(x)=-3x^2+2x-4$, $a=-3$. Since $a$ is negative, the parabola
will open downward.

(b) In $f(x)=6x^2+7x-9$, $a=6$. Since $a$ is positive, the parabola
will open upward.

{{< multiplechoice
  question="Determine whether the graph of $f(x)=2x^2+5x-2$ is a parabola that opens upward or downward."
  answer="upward"
  hint="Look at the sign of the coefficient of $x^2$."
>}}
upward
downward
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the graph of $f(x)=-3x^2-4x+7$ is a parabola that opens upward or downward."
  answer="downward"
  hint="Look at the sign of the coefficient of $x^2$."
>}}
upward
downward
{{< /multiplechoice >}}

## Find the Axis of Symmetry and Vertex of a Parabola

Look again at the preceding two parabolas. Do you see that we could fold each
parabola in half and then one side would lie on top of the other? The "fold
line" is a line of symmetry. We call it the **axis of symmetry** of the
parabola.

We show the same two graphs again with the axis of symmetry.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared plus 4x plus 3 with the dashed axis of symmetry x equals −2 through its vertex (−2, −1), on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"b":4,"c":3}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"texts":[{"at":[0,12],"text":"y = x² + 4x + 3; axis of symmetry x = −2","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The downward-opening parabola y equals negative x squared plus 4x plus 3 with the dashed axis of symmetry x equals 2 through its vertex (2, 7), on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-1,"b":4,"c":3}],"lines":[{"x":2,"dashed":true,"arrows":false}],"texts":[{"at":[0,12],"text":"y = −x² + 4x + 3; axis of symmetry x = 2","anchor":"middle"}]}
{{< /apfigure >}}

The equation of the axis of symmetry can be derived by using the Quadratic
Formula. We will omit the derivation here and proceed directly to using the
result. The equation of the axis of symmetry of the graph of
$f(x)=ax^2+bx+c$ is

$$
x=-\tfrac{b}{2a}.
$$

For $f(x)=x^2+4x+3$,

$$
x=-\tfrac{4}{2(1)}=-2.
$$

For $f(x)=-x^2+4x+3$,

$$
x=-\tfrac{4}{2(-1)}=2.
$$

Notice that these are the equations of the dashed lines on the graphs.

The point on the parabola that is the **lowest** (parabola opens up), or the
**highest** (parabola opens down), lies on the axis of symmetry. This point is
called the **vertex** of the parabola.

We can easily find the coordinates of the vertex, because we know it is on the
axis of symmetry. This means its $x$-coordinate is $-\tfrac{b}{2a}$. To find
the $y$-coordinate of the vertex we substitute the value of the $x$-coordinate
into the quadratic function.

For $f(x)=x^2+4x+3$, the axis of symmetry is $x=-2$, and

$$
f(-2)=(-2)^2+4(-2)+3=-1.
$$

The vertex is $(-2,-1)$.

For $f(x)=-x^2+4x+3$, the axis of symmetry is $x=2$, and

$$
f(2)=-(2)^2+4(2)+3=7.
$$

The vertex is $(2,7)$.

{{< callout type="info" >}}
**Axis of Symmetry and Vertex of a Parabola.** The graph of the function
$f(x)=ax^2+bx+c$ is a parabola where:

- the axis of symmetry is the vertical line $x=-\tfrac{b}{2a}$.
- the vertex is a point on the axis of symmetry, so its $x$-coordinate is
  $-\tfrac{b}{2a}$.
- the $y$-coordinate of the vertex is found by substituting
  $x=-\tfrac{b}{2a}$ into the quadratic equation.
{{< /callout >}}

**Example.** For the graph of $f(x)=3x^2-6x+2$ find:

(a) the axis of symmetry  
(b) the vertex.

**Solution.**

(a) The axis of symmetry is the vertical line $x=-\tfrac{b}{2a}$.

$$
x=-\tfrac{-6}{2\cdot3}=1.
$$

The axis of symmetry is the line $x=1$.

(b) The vertex is a point on the line of symmetry, so its $x$-coordinate
will be $x=1$. Find $f(1)$.

$$
f(1)=3(1)^2-6(1)+2=-1.
$$

The vertex is $(1,-1)$.

{{< fillin
  question="For the graph of $f(x)=2x^2-8x+1$, find the axis of symmetry."
  answer="x=2"
  answerForm="decimal"
  answerDisplay="$x=2$"
  hint="Use $x=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="For the graph of $f(x)=2x^2-8x+1$, find the vertex as an ordered pair."
  answer="(2,-7)"
  answerForm="decimal"
  answerDisplay="$(2,-7)$"
  hint="Substitute the x-coordinate from the axis of symmetry into the function."
>}}

{{< fillin
  question="For the graph of $f(x)=2x^2-4x-3$, find the axis of symmetry."
  answer="x=1"
  answerForm="decimal"
  answerDisplay="$x=1$"
  hint="Use $x=-\tfrac{b}{2a}$."
>}}

## Find the Intercepts of a Parabola

When we graphed linear equations, we often used the $x$- and $y$-intercepts to
help us graph the lines. Finding the coordinates of the intercepts will help
us to graph parabolas, too.

Remember, at the $y$-intercept the value of $x$ is zero. So to find the
$y$-intercept, we substitute $x=0$ into the function.

For both $f(x)=x^2+4x+3$ and $f(x)=-x^2+4x+3$,

$$
f(0)=3,
$$

so the $y$-intercept is $(0,3)$.

An $x$-intercept results when the value of $f(x)$ is zero. To find an
$x$-intercept, we let $f(x)=0$. In other words, we will need to solve the
equation $0=ax^2+bx+c$ for $x$. Solving quadratic equations like this is
exactly what we have done earlier in this chapter!

For $f(x)=x^2+4x+3$,

$$
\begin{array}{rcl}
0&=&x^2+4x+3 \\[4pt]
0&=&(x+1)(x+3) \\[4pt]
x+1=0 && x+3=0 \\[4pt]
x=-1 && x=-3
\end{array}
$$

The $x$-intercepts are $(-1,0)$ and $(-3,0)$.

For $f(x)=-x^2+4x+3$, the quadratic does not factor, so we use the Quadratic
Formula.

$$
\begin{array}{rcl}
x&=&\tfrac{-4\pm\sqrt{4^2-4(-1)(3)}}{2(-1)} \\[10pt]
&=&\tfrac{-4\pm\sqrt{28}}{-2} \\[10pt]
&=&\tfrac{-4\pm2\sqrt7}{-2} \\[10pt]
&=&2\pm\sqrt7
\end{array}
$$

The $x$-intercepts are $(2+\sqrt7,0)$ and $(2-\sqrt7,0)$. We will use the
decimal approximations of the $x$-intercepts so that we can locate these
points on the graph:

$$
(2+\sqrt7,0)\approx(4.6,0),\qquad
(2-\sqrt7,0)\approx(-0.6,0).
$$

Do these results agree with our graphs?

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared plus 4x plus 3, showing y-intercept (0, 3), x-intercepts (−3, 0) and (−1, 0), and axis of symmetry x equals −2, on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"b":4,"c":3}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[0,3]},{"at":[-3,0]},{"at":[-1,0]}],"texts":[{"at":[0,12],"text":"y = x² + 4x + 3","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The downward-opening parabola y equals negative x squared plus 4x plus 3, showing y-intercept (0, 3), approximate x-intercepts (−0.6, 0) and (4.6, 0), and axis of symmetry x equals 2, on a grid with both axes numbered every 2 units.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-1,"b":4,"c":3}],"lines":[{"x":2,"dashed":true,"arrows":false}],"points":[{"at":[0,3]},{"at":[-0.6458,0]},{"at":[4.6458,0]}],"texts":[{"at":[0,12],"text":"y = −x² + 4x + 3","anchor":"middle"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**Find the Intercepts of a Parabola.** To find the intercepts of a parabola
whose function is $f(x)=ax^2+bx+c$:

| $y$-intercept | $x$-intercepts |
|:---|:---|
| Let $x=0$ and solve for $f(x)$. | Let $f(x)=0$ and solve for $x$. |
{{< /callout >}}

**Example.** Find the intercepts of the parabola whose function is
$f(x)=x^2-2x-8$.

**Solution.**

To solve for the $y$-intercept, let $x=0$ and solve for $f(x)$.

$$
f(0)=0^2-2(0)-8=-8.
$$

When $x=0$, then $f(0)=-8$. The $y$-intercept is the point $(0,-8)$.

To find the $x$-intercepts, let $f(x)=0$ and solve for $x$.

$$
\begin{array}{rcl}
0&=&x^2-2x-8 \\[4pt]
0&=&(x-4)(x+2) \\[4pt]
0=x-4 && 0=x+2 \\[4pt]
x=4 && x=-2
\end{array}
$$

The $x$-intercepts are the points $(4,0)$ and $(-2,0)$.

{{< fillin
  question="Find the intercepts of the parabola $f(x)=x^2+2x-8$. Enter them as ordered pairs: the y-intercept first, then the two x-intercepts with the smaller x-value first, separated by commas."
  answer="(0,-8),(-4,0),(2,0)"
  answerForm="decimal"
  answerDisplay="$(0,-8),\ (-4,0),\ (2,0)$"
  hint="Set $x=0$ for the y-intercept. Set $f(x)=0$ and factor for the x-intercepts."
>}}

{{< fillin
  question="Find the intercepts of the parabola $f(x)=x^2-4x-12$. Enter them as ordered pairs: the y-intercept first, then the two x-intercepts with the smaller x-value first, separated by commas."
  answer="(0,-12),(-2,0),(6,0)"
  answerForm="decimal"
  answerDisplay="$(0,-12),\ (-2,0),\ (6,0)$"
  hint="Set $x=0$ for the y-intercept. Set $f(x)=0$ and factor for the x-intercepts."
>}}

In this chapter, we have been solving quadratic equations of the form
$ax^2+bx+c=0$. We solved for $x$ and the results were the solutions to the
equation.

We are now looking at quadratic functions of the form $f(x)=ax^2+bx+c$. The
graphs of these functions are parabolas. The $x$-intercepts of the parabolas
occur where $f(x)=0$.

For example, the quadratic equation

$$
x^2-2x-15=0
$$

has solutions $x=5$ and $x=-3$. The quadratic function
$f(x)=x^2-2x-15$ has $x$-intercepts $(5,0)$ and $(-3,0)$. The solutions of
the quadratic function are the $x$ values of the $x$-intercepts.

Earlier, we saw that quadratic equations have 2, 1, or 0 solutions. The
graphs below show examples of parabolas for these three cases. Since the
solutions of the functions give the $x$-intercepts of the graphs, the number
of $x$-intercepts is the same as the number of solutions.

Previously, we used the discriminant to determine the number of solutions of
a quadratic function of the form $ax^2+bx+c=0$. Now we can use the
discriminant to tell us how many $x$-intercepts there are on the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola crossing the x-axis twice, representing a positive discriminant and two real solutions.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"quadratics":[{"a":1,"c":-2}],"texts":[{"at":[0,5.6],"text":"b² − 4ac > 0: two x‑intercepts","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening parabola touching the x-axis only at its vertex, representing a zero discriminant and one real solution.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"quadratics":[{"a":-1,"b":1,"c":-0.25}],"texts":[{"at":[0,5.6],"text":"b² − 4ac = 0: one x‑intercept","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola entirely above the x-axis, representing a negative discriminant and no real solution.","xMin":-3,"xMax":3,"yMin":-4,"yMax":4,"unit":24,"grid":false,"tickLabels":false,"quadratics":[{"a":1,"c":1}],"texts":[{"at":[0,5.6],"text":"b² − 4ac < 0: no x‑intercept","anchor":"middle"}]}
{{< /apfigure >}}

Before you find the values of the $x$-intercepts, you may want to evaluate the
discriminant so you know how many solutions to expect.

**Example.** Find the intercepts of the parabola for the function
$f(x)=5x^2+x+4$.

**Solution.**

To find the $y$-intercept, let $x=0$ and solve for $f(x)$.

$$
f(0)=5(0)^2+0+4=4.
$$

The $y$-intercept is the point $(0,4)$.

To find the $x$-intercepts, let $f(x)=0$ and solve for $x$. Find the value of
the discriminant to predict the number of solutions, which is also the number
of $x$-intercepts.

$$
b^2-4ac=1^2-4(5)(4)=-79.
$$

Since the value of the discriminant is negative, there is no real solution to
the equation. There are no $x$-intercepts.

{{< fillin
  question="Find the y-intercept of the parabola $f(x)=3x^2+4x+4$. Enter it as an ordered pair."
  answer="(0,4)"
  answerForm="decimal"
  answerDisplay="$(0,4)$"
  hint="Set $x=0$ and evaluate the function."
>}}

{{< multiplechoice
  question="How many x-intercepts does $f(x)=3x^2+4x+4$ have?"
  answer="none"
  hint="Evaluate $b^2-4ac$."
>}}
one
none
two
{{< /multiplechoice >}}

{{< fillin
  question="Find the intercepts of $f(x)=x^2-4x-5$. Enter them as ordered pairs: the y-intercept first, then the two x-intercepts with the smaller x-value first, separated by commas."
  answer="(0,-5),(-1,0),(5,0)"
  answerForm="decimal"
  answerDisplay="$(0,-5),\ (-1,0),\ (5,0)$"
  hint="Set $x=0$ for the y-intercept, and solve $f(x)=0$ for the x-intercepts."
>}}

## Graph Quadratic Functions Using Properties

Now we have all the pieces we need in order to graph a quadratic function. We
just need to put them together. In the next example we will see how to do this.

**Example. How to Graph a Quadratic Function Using Properties.** Graph
$f(x)=x^2-6x+8$ by using its properties.

**Solution.**

**Step 1. Determine whether the parabola opens upward or downward.** Since
$a=1$ is positive, the parabola opens upward.

**Step 2. Find the axis of symmetry.**

$$
x=-\tfrac{-6}{2(1)}=3.
$$

The axis of symmetry is the line $x=3$.

**Step 3. Find the vertex.** The vertex is on the axis of symmetry. Substitute
$x=3$ into the function.

$$
f(3)=3^2-6(3)+8=-1.
$$

The vertex is $(3,-1)$.

**Step 4. Find the $y$-intercept. Find the point symmetric to the
$y$-intercept across the axis of symmetry.**

$$
f(0)=0^2-6(0)+8=8.
$$

The $y$-intercept is $(0,8)$. The $y$-intercept is 3 units left of the axis
of symmetry, $x=3$. A point 3 units to the right of the axis of symmetry has
$x=6$. The point symmetric to the $y$-intercept is $(6,8)$.

**Step 5. Find the $x$-intercepts. Find additional points if needed.**

$$
\begin{array}{rcl}
0&=&x^2-6x+8 \\[4pt]
0&=&(x-2)(x-4) \\[4pt]
x&=&2\quad\text{or}\quad x=4
\end{array}
$$

The $x$-intercepts are $(2,0)$ and $(4,0)$.

**Step 6. Graph the parabola.** We graph the vertex, intercepts, and the point
symmetric to the $y$-intercept. We connect these five points to sketch the
parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared minus 6x plus 8, with vertex (3, −1), x-intercepts (2, 0) and (4, 0), y-intercept (0, 8), symmetric point (6, 8), and dashed axis of symmetry x equals 3, on a grid with both axes numbered every 1 unit.","xMin":-1,"xMax":8,"yMin":-2,"yMax":9,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":-6,"c":8}],"lines":[{"x":3,"dashed":true,"arrows":false}],"points":[{"at":[3,-1]},{"at":[2,0]},{"at":[4,0]},{"at":[0,8]},{"at":[6,8]}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=x^2+2x-8$ by using its properties."
  answerDisplay="$f(x)=x^2+2x-8$, vertex $(-1,-9)$"
  ariaLabel="A blank coordinate grid from −6 to 4 on the x-axis and −10 to 8 on the y-axis."
  hint="Find the axis of symmetry with $x=-\tfrac{b}{2a}$ to locate the vertex, then use the intercepts to place two more points."
>}}
{"answer":{"quadratic":{"a":1,"b":2,"c":-8},"plotPoints":3},"grid":{"xMin":-6,"xMax":4,"yMin":-10,"yMax":8}}
{{< /graphplot >}}

{{< multiplechoice
  question="Which graph shows $f(x)=x^2-8x+12$ graphed by using its properties?"
  mode="graph"
  answerIndex="2"
  hint="Find the axis of symmetry and vertex first, then check which way the parabola opens and where it crosses the x-axis."
>}}
{"ariaLabel": "An upward-opening parabola with vertex (5, -4), crossing the x-axis at (3, 0) and (7, 0).", "xMin": -2, "xMax": 10, "yMin": -6, "yMax": 14, "tickLabels": true, "quadratics": [{"a": 1, "b": -10, "c": 21}]}
===OPT===
{"ariaLabel": "A downward-opening parabola with vertex (4, -4).", "xMin": -2, "xMax": 10, "yMin": -6, "yMax": 14, "tickLabels": true, "quadratics": [{"a": -1, "b": 8, "c": -20}]}
===OPT===
{"ariaLabel": "An upward-opening parabola with vertex (4, -4), crossing the x-axis at (2, 0) and (6, 0).", "xMin": -2, "xMax": 10, "yMin": -6, "yMax": 14, "tickLabels": true, "quadratics": [{"a": 1, "b": -8, "c": 12}]}
===OPT===
{"ariaLabel": "A narrower upward-opening parabola with vertex (4, -4), crossing the x-axis at (3, 0) and (5, 0).", "xMin": -2, "xMax": 10, "yMin": -6, "yMax": 14, "tickLabels": true, "quadratics": [{"a": 4, "b": -32, "c": 60}]}
{{< /multiplechoice >}}

We list the steps to take in order to graph a quadratic function here.

{{< callout type="info" >}}
**To graph a quadratic function using properties:**

1. Determine whether the parabola opens upward or downward.
2. Find the equation of the axis of symmetry.
3. Find the vertex.
4. Find the $y$-intercept. Find the point symmetric to the $y$-intercept
   across the axis of symmetry.
5. Find the $x$-intercepts. Find additional points if needed.
6. Graph the parabola.
{{< /callout >}}

We were able to find the $x$-intercepts in the last example by factoring. We
find the $x$-intercepts in the next example by factoring, too.

**Example.** Graph $f(x)=-x^2+6x-9$ by using its properties.

**Solution.**

Since $a=-1$, the parabola opens downward.

To find the equation of the axis of symmetry, use
$x=-\tfrac{b}{2a}$.

$$
x=-\tfrac{6}{2(-1)}=3.
$$

The axis of symmetry is $x=3$. The vertex is on the line $x=3$.

$$
f(3)=-(3)^2+6(3)-9=0.
$$

The vertex is $(3,0)$.

The $y$-intercept occurs when $x=0$.

$$
f(0)=-(0)^2+6(0)-9=-9.
$$

The $y$-intercept is $(0,-9)$. The point $(0,-9)$ is three units to the left
of the line of symmetry. The point three units to the right of the line of
symmetry is $(6,-9)$.

The $x$-intercept occurs when $f(x)=0$.

$$
\begin{array}{rcl}
0&=&-x^2+6x-9 \\[4pt]
0&=&-(x^2-6x+9) \\[4pt]
0&=&-(x-3)^2 \\[4pt]
x&=&3
\end{array}
$$

Connect the points to graph the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The downward-opening parabola y equals negative x squared plus 6x minus 9, with vertex and sole x-intercept (3, 0), y-intercept (0, −9), symmetric point (6, −9), and dashed axis of symmetry x equals 3, on a grid with both axes numbered every 1 unit.","xMin":-4,"xMax":10,"yMin":-10,"yMax":4,"tickLabels":true,"tickStep":1,"quadratics":[{"a":-1,"b":6,"c":-9}],"lines":[{"x":3,"dashed":true,"arrows":false}],"points":[{"at":[3,0]},{"at":[0,-9]},{"at":[6,-9]}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=-3x^2+12x-12$ by using its properties."
  answerDisplay="$f(x)=-3x^2+12x-12$"
  ariaLabel="A blank coordinate grid from −2 to 6 on the x-axis and −14 to 2 on the y-axis."
  hint="Find the vertex using the axis of symmetry $x=-\tfrac{b}{2a}$, then plot two more points on the parabola."
>}}
{"answer": {"quadratic": {"a": -3, "b": 12, "c": -12}, "plotPoints": 3}, "grid": {"xMin": -2, "xMax": 6, "yMin": -14, "yMax": 2}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=4x^2+24x+36$ by using its properties."
  answerDisplay="$f(x)=4x^2+24x+36$"
  ariaLabel="A blank coordinate grid from −6 to 0 on the x-axis and −2 to 17 on the y-axis."
  hint="Find the vertex using the axis of symmetry $x=-\tfrac{b}{2a}$, then plot two more points on the parabola."
>}}
{"answer": {"quadratic": {"a": 4, "b": 24, "c": 36}, "plotPoints": 3}, "grid": {"xMin": -6, "xMax": 0, "yMin": -2, "yMax": 17}}
{{< /graphplot >}}

For the graph of $f(x)=-x^2+6x-9$, the vertex and the $x$-intercept were the
same point. Remember how the discriminant determines the number of solutions
of a quadratic equation? The discriminant of the equation
$0=-x^2+6x-9$ is 0, so there is only one solution. That means there is only
one $x$-intercept, and it is the vertex of the parabola.

How many $x$-intercepts would you expect to see on the graph of
$f(x)=x^2+4x+5$?

**Example.** Graph $f(x)=x^2+4x+5$ by using its properties.

**Solution.**

Since $a=1$, the parabola opens upward.

$$
x=-\tfrac{4}{2(1)}=-2.
$$

The equation of the axis of symmetry is $x=-2$. The vertex is on the line
$x=-2$.

$$
f(-2)=(-2)^2+4(-2)+5=1.
$$

The vertex is $(-2,1)$.

The $y$-intercept occurs when $x=0$.

$$
f(0)=5.
$$

The $y$-intercept is $(0,5)$. The point $(-4,5)$ is two units to the left of
the line of symmetry. The point two units to the right of the line of
symmetry is $(0,5)$. The point symmetric to the $y$-intercept is $(-4,5)$.

The $x$-intercept occurs when $f(x)=0$. Test the discriminant:

$$
b^2-4ac=4^2-4(1)(5)=-4.
$$

Since the value of the discriminant is negative, there is no real solution
and so no $x$-intercept.

Connect the points to graph the parabola. You may want to choose two more
points for greater accuracy.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared plus 4x plus 5, with vertex (−2, 1), y-intercept (0, 5), symmetric point (−4, 5), no x-intercepts, and dashed axis of symmetry x equals −2, on a grid with both axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":4,"c":5}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[-2,1]},{"at":[0,5]},{"at":[-4,5]}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=x^2-2x+3$ by using its properties."
  answerDisplay="$f(x)=x^2-2x+3$"
  ariaLabel="A blank coordinate grid from −4 to 6 on the x-axis and −2 to 12 on the y-axis."
  hint="Find the vertex using the axis of symmetry $x=-\tfrac{b}{2a}$, then plot two more points on the parabola."
>}}
{"answer": {"quadratic": {"a": 1, "b": -2, "c": 3}, "plotPoints": 3}, "grid": {"xMin": -4, "xMax": 6, "yMin": -2, "yMax": 12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=-3x^2-6x-4$ by using its properties."
  answerDisplay="$f(x)=-3x^2-6x-4$"
  ariaLabel="A blank coordinate grid from −4 to 2 on the x-axis and −14 to 2 on the y-axis."
  hint="Find the vertex using the axis of symmetry $x=-\tfrac{b}{2a}$, then plot two more points on the parabola."
>}}
{"answer": {"quadratic": {"a": -3, "b": -6, "c": -4}, "plotPoints": 3}, "grid": {"xMin": -4, "xMax": 2, "yMin": -14, "yMax": 2}}
{{< /graphplot >}}

Finding the $y$-intercept by finding $f(0)$ is easy, isn't it? Sometimes we
need to use the Quadratic Formula to find the $x$-intercepts.

**Example.** Graph $f(x)=2x^2-4x-3$ by using its properties.

**Solution.**

Since $a=2$, the parabola opens upward.

$$
x=-\tfrac{-4}{2(2)}=1.
$$

The equation of the axis of symmetry is $x=1$.

$$
f(1)=2(1)^2-4(1)-3=-5.
$$

The vertex is $(1,-5)$.

The $y$-intercept occurs when $x=0$.

$$
f(0)=-3.
$$

The $y$-intercept is $(0,-3)$. The point $(0,-3)$ is one unit to the left of
the line of symmetry. The point one unit to the right of the line of symmetry
is $(2,-3)$.

The $x$-intercept occurs when $y=0$. Find $f(x)=0$ and use the Quadratic
Formula.

$$
\begin{array}{rcl}
x&=&\tfrac{-(-4)\pm\sqrt{(-4)^2-4(2)(-3)}}{2(2)} \\[10pt]
&=&\tfrac{4\pm\sqrt{40}}{4} \\[10pt]
&=&\tfrac{2\pm\sqrt{10}}{2}
\end{array}
$$

The approximate values are $x\approx2.6$ and $x\approx-0.6$. The approximate
values of the $x$-intercepts are $(2.6,0)$ and $(-0.6,0)$. Graph the parabola
using the points found.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals 2x squared minus 4x minus 3, with vertex (1, −5), y-intercept (0, −3), symmetric point (2, −3), crossing the x-axis near −0.6 and 2.6, and dashed axis of symmetry x equals 1, on a grid with both axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"quadratics":[{"a":2,"b":-4,"c":-3}],"lines":[{"x":1,"dashed":true,"arrows":false}],"points":[{"at":[1,-5]},{"at":[0,-3]},{"at":[2,-3]}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=5x^2+10x+3$ by using its properties."
  answerDisplay="$f(x)=5x^2+10x+3$"
  ariaLabel="A blank coordinate grid from −4 to 2 on the x-axis and −4 to 19 on the y-axis."
  hint="Find the vertex using the axis of symmetry $x=-\tfrac{b}{2a}$, then plot two more points on the parabola."
>}}
{"answer": {"quadratic": {"a": 5, "b": 10, "c": 3}, "plotPoints": 3}, "grid": {"xMin": -4, "xMax": 2, "yMin": -4, "yMax": 19}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=-3x^2-6x+5$ by using its properties."
  answerDisplay="$f(x)=-3x^2-6x+5$"
  ariaLabel="A blank coordinate grid from −5 to 3 on the x-axis and −6 to 10 on the y-axis."
  hint="Find the vertex using the axis of symmetry $x=-\tfrac{b}{2a}$, then plot two more points on the parabola."
>}}
{"answer": {"quadratic": {"a": -3, "b": -6, "c": 5}, "plotPoints": 3}, "grid": {"xMin": -5, "xMax": 3, "yMin": -6, "yMax": 10}}
{{< /graphplot >}}

## Solve Maximum and Minimum Applications

Knowing that the vertex of a parabola is the lowest or highest point of the
parabola gives us an easy way to determine the minimum or maximum value of a
quadratic function. The $y$-coordinate of the vertex is the minimum value of a
parabola that opens upward. It is the maximum value of a parabola that opens
downward.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola whose lowest point, the vertex, is marked minimum.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"tickLabels":false,"quadratics":[{"a":1,"c":-3}],"points":[{"at":[0,-3],"label":"minimum"}],"texts":[{"at":[0,5.4],"text":"The vertex gives the minimum","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening parabola whose highest point, the vertex, is marked maximum.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"tickLabels":false,"quadratics":[{"a":-1,"b":1,"c":2}],"points":[{"at":[0.5,2.25],"label":"maximum"}],"texts":[{"at":[0,5.4],"text":"The vertex gives the maximum","anchor":"middle"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**Minimum or Maximum Values of a Quadratic Function.** The $y$-coordinate of
the vertex of the graph of a quadratic function is the

- minimum value of the quadratic equation if the parabola opens upward.
- maximum value of the quadratic equation if the parabola opens downward.
{{< /callout >}}

**Example.** Find the minimum or maximum value of the quadratic function
$f(x)=x^2+2x-8$.

**Solution.**

Since $a$ is positive, the parabola opens upward. The quadratic equation has
a minimum.

$$
x=-\tfrac{2}{2(1)}=-1.
$$

The equation of the axis of symmetry is $x=-1$. The vertex is on the line
$x=-1$.

$$
f(-1)=(-1)^2+2(-1)-8=-9.
$$

The vertex is $(-1,-9)$. Since the parabola has a minimum, the $y$-coordinate
of the vertex is the minimum $y$-value of the quadratic equation. The minimum
value of the quadratic is $-9$ and it occurs when $x=-1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola y equals x squared plus 2x minus 8, with minimum vertex (−1, −9), crossing the x-axis at −4 and 2, and dashed axis of symmetry x equals −1, on a grid with both axes numbered every 1 unit.","xMin":-5,"xMax":5,"yMin":-10,"yMax":2,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":2,"c":-8}],"lines":[{"x":-1,"dashed":true,"arrows":false}],"points":[{"at":[-1,-9]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the maximum or minimum value of $y=x^2-6x+15$."
  answer="6"
  answerForm="decimal"
  answerDisplay="The minimum value is $6$."
  hint="Find the vertex; its y-coordinate is the maximum or minimum value."
>}}

{{< fillin
  question="Find the maximum or minimum value of $f(x)=-4x^2+16x-11$."
  answer="5"
  answerForm="decimal"
  answerDisplay="The maximum value is $5$."
  hint="Find the vertex; its y-coordinate is the maximum or minimum value."
>}}

We have used the formula

$$
h(t)=-16t^2+v_0t+h_0
$$

to calculate the height in feet, $h$, of an object shot upwards into the air
with initial velocity, $v_0$, after $t$ seconds.

This formula is a quadratic function, so its graph is a parabola. By solving
for the coordinates of the vertex $(t,h)$, we can find how long it will take
the object to reach its maximum height. Then we can calculate the maximum
height.

**Example.** The quadratic function $h(t)=-16t^2+176t+4$ models the height of
a volleyball hit straight upwards with velocity 176 feet per second from a
height of 4 feet.

(a) How many seconds will it take the volleyball to reach its maximum height?  
(b) Find the maximum height of the volleyball.

**Solution.**

Since $a$ is negative, the parabola opens downward. The quadratic function has
a maximum.

(a) Find the equation of the axis of symmetry.

$$
t=-\tfrac{176}{2(-16)}=5.5.
$$

The equation of the axis of symmetry is $t=5.5$. The maximum occurs when
$t=5.5$ seconds.

(b) Find $h(5.5)$.

$$
h(5.5)=-16(5.5)^2+176(5.5)+4=488.
$$

The vertex is $(5.5,488)$. Since the parabola has a maximum, the $h$-coordinate
of the vertex is the maximum value of the quadratic function. The maximum
value of the quadratic is 488 feet and it occurs when $t=5.5$ seconds. After
5.5 seconds, the volleyball will reach its maximum height of 488 feet.

{{< fillin
  question="The quadratic function $h(t)=-16t^2+128t+32$ gives the height of a stone thrown upward from a height of 32 feet at 128 ft/sec. How long, in seconds, will it take the stone to reach its maximum height? Round to the nearest tenth."
  answer="4"
  answerForm="decimal"
  answerDisplay="$4.0$ seconds"
  hint="The time coordinate of the vertex is $t=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="For $h(t)=-16t^2+128t+32$, what is the maximum height, in feet? Round to the nearest tenth."
  answer="288"
  answerForm="decimal"
  answerDisplay="$288.0$ feet"
  hint="Evaluate the height function at the time when the stone reaches its maximum."
>}}

{{< fillin
  question="A toy rocket's path is $h(t)=-16t^2+208t$. How many seconds after launch will the rocket reach its maximum height? Round to the nearest tenth."
  answer="6.5"
  answerForm="decimal"
  answerDisplay="$6.5$ seconds"
  hint="The time coordinate of the vertex is $t=-\tfrac{b}{2a}$."
>}}

## Key terms

A **quadratic function** is a function of the form
$f(x)=ax^2+bx+c$, where $a\ne0$. Its graph is a **parabola**. The vertical
line through the vertex is the **axis of symmetry**. The **vertex** is the
lowest point of a parabola that opens upward or the highest point of a
parabola that opens downward.

## Practice

### Recognize the Graph of a Quadratic Function

{{< multiplechoice
  question="Determine whether the graph of $f(x)=-2x^2-6x-7$ is a parabola that opens upward or downward."
  answer="downward"
  hint="Look at the sign of the coefficient of $x^2$."
>}}
upward
downward
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the graph of $f(x)=6x^2+2x+3$ is a parabola that opens upward or downward."
  answer="upward"
  hint="Look at the sign of the coefficient of $x^2$."
>}}
upward
downward
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the graph of $f(x)=-3x^2+5x-1$ is a parabola that opens upward or downward."
  answer="downward"
  hint="Look at the sign of the coefficient of $x^2$."
>}}
downward
upward
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the graph of $f(x)=2x^2-4x+5$ is a parabola that opens upward or downward."
  answer="upward"
  hint="Look at the sign of the coefficient of $x^2$."
>}}
downward
upward
{{< /multiplechoice >}}

### Find the Axis of Symmetry and Vertex of a Parabola

{{< fillin
  question="For the graph of $f(x)=x^2+8x-1$, find the axis of symmetry."
  answer="x=-4"
  answerForm="decimal"
  answerDisplay="$x=-4$"
  hint="Use $x=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="For the graph of $f(x)=x^2+8x-1$, find the vertex as an ordered pair."
  answer="(-4,-17)"
  answerForm="decimal"
  answerDisplay="$(-4,-17)$"
  hint="Substitute the axis-of-symmetry value into the function."
>}}

{{< fillin
  question="For the graph of $f(x)=-x^2+2x+5$, find the axis of symmetry."
  answer="x=1"
  answerForm="decimal"
  answerDisplay="$x=1$"
  hint="Use $x=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="For the graph of $f(x)=-x^2+2x+5$, find the vertex as an ordered pair."
  answer="(1,6)"
  answerForm="decimal"
  answerDisplay="$(1,6)$"
  hint="Substitute the axis-of-symmetry value into the function."
>}}

### Find the Intercepts of a Parabola

{{< fillin
  question="Find the y-intercept of the parabola $f(x)=x^2+7x+6$. Enter it as an ordered pair."
  answer="(0,6)"
  answerForm="decimal"
  answerDisplay="$(0,6)$"
  hint="Set $x=0$ and evaluate the function."
>}}

{{< fillin
  question="Find the x-intercepts of the parabola $f(x)=x^2+7x+6$. Enter them as ordered pairs, the intercept with the smaller x-value first, separated by a comma."
  answer="(-6,0),(-1,0)"
  answerForm="decimal"
  answerDisplay="$(-6,0),\ (-1,0)$"
  hint="Set $f(x)=0$ and factor."
>}}

{{< fillin
  question="Find the y-intercept of the parabola $f(x)=-x^2+8x-19$. Enter it as an ordered pair."
  answer="(0,-19)"
  answerForm="decimal"
  answerDisplay="$(0,-19)$"
  hint="Set $x=0$ and evaluate the function."
>}}

{{< multiplechoice
  question="How many x-intercepts does the parabola $f(x)=-x^2+8x-19$ have?"
  answer="none"
  hint="Evaluate the discriminant $b^2-4ac$."
>}}
one
two
none
{{< /multiplechoice >}}

### Graph Quadratic Functions Using Properties

{{< graphplot
  question="Graph $f(x)=x^2+6x+5$ by using its properties."
  answerDisplay="$f(x)=x^2+6x+5$"
  ariaLabel="A blank coordinate grid from −8 to 2 on the x-axis and −6 to 8 on the y-axis."
  hint="Find the vertex and axis of symmetry first, then plot the intercepts."
>}}
{"answer":{"quadratic":{"a":1,"b":6,"c":5},"plotPoints":3},"grid":{"xMin":-8,"xMax":2,"yMin":-6,"yMax":8}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=-x^2+2x-7$ by using its properties."
  answerDisplay="$f(x)=-x^2+2x-7$"
  ariaLabel="A blank coordinate grid from −4 to 6 on the x-axis and −12 to 2 on the y-axis."
  hint="Find the vertex with $x=-\tfrac{b}{2a}$ and check the discriminant before looking for x-intercepts; then plot the y-intercept and its symmetric point."
>}}
{"answer":{"quadratic":{"a":-1,"b":2,"c":-7},"plotPoints":3},"grid":{"xMin":-4,"xMax":6,"yMin":-12,"yMax":2}}
{{< /graphplot >}}

### Solve Maximum and Minimum Applications

{{< fillin
  question="The quadratic function $h(t)=-16t^2+168t+45$ gives the height of an arrow shot upward from a platform 45 feet high at 168 ft/sec. How long, in seconds, will it take the arrow to reach its maximum height? Round to the nearest tenth."
  answer="5.3"
  answerForm="decimal"
  answerDisplay="$5.3$ seconds"
  hint="The time coordinate of the vertex is $t=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="For $h(t)=-16t^2+168t+45$, what is the maximum height, in feet? Round to the nearest tenth."
  answer="486"
  answerForm="decimal"
  answerDisplay="$486.0$ feet"
  hint="Evaluate the height function at the time found for the vertex."
>}}

{{< fillin
  question="A retailer selling pairs of boots for $x$ dollars each can sell $70-x$ pairs a week. The revenue function is $R(x)=-x^2+70x$. Find the selling price, in dollars, that gives the maximum weekly revenue."
  answer="35"
  answerForm="decimal"
  answerDisplay="\$35"
  hint="Maximize $R(x)=-x^2+70x$ by finding the x-coordinate of the vertex."
>}}

{{< fillin
  question="For $R(x)=-x^2+70x$, what is the maximum weekly revenue, in dollars?"
  answer="1225"
  answerForm="decimal"
  answerDisplay="\$1,225"
  hint="Evaluate $R(x)$ at the selling price that maximizes revenue."
>}}

<small>
Adapted from [Intermediate Algebra 2e, Section 9.6](https://openstax.org/books/intermediate-algebra-2e/pages/9-6-graph-quadratic-functions-using-properties) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: recreated the source graphs as accessible inline graphics and the worked solutions as typeset steps; omitted the Be Prepared quiz, media links, Key Concepts summary, writing exercises, Self Check checklist, and unselected end-of-section exercises; condensed the section vocabulary into a Key terms paragraph; converted selected practice problems ("Try Its") into interactive exercises with instant feedback, posing the $f(x)=x^2-8x+12$ graphing Try It as a choice among graphs, the $f(x)=3x^2+4x+4$ intercepts Try It as its $y$-intercept and a count of $x$-intercepts, and asking only the axis of symmetry of the $f(x)=2x^2-4x-3$ Try It and only the time of the toy-rocket Try It; adapted selected end-of-section exercises into an interactive Practice block, asking the boots exercise for the maximum weekly revenue where the source, whose sales estimate is weekly, says "per day"; and corrected the approximate $x$-intercept $\tfrac{2+\sqrt{10}}{2}$ of the $f(x)=2x^2-4x-3$ example, which the source rounds to $2.5$, to $2.6$.
</small>
