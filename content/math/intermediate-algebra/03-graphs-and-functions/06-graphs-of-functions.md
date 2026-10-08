---
title: Graphs of Functions
description: >-
  Using the vertical line test, identifying graphs of basic functions, and
  reading domain, range, intercepts, and function values from graphs — adapted
  from OpenStax Intermediate Algebra 2e, Section 3.6.
source_section: "3.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use the vertical line test
- Identify graphs of basic functions
- Read information from a graph of a function
{{< /callout >}}

## Use the vertical line test

In the last section we learned how to determine if a relation is a function.
The relations we looked at were expressed as a set of ordered pairs, a mapping
or an equation. We will now look at how to tell if a graph is that of a
function.

An ordered pair $(x,y)$ is a solution of a linear equation, if the equation is
a true statement when the $x$- and $y$-values of the ordered pair are
substituted into the equation.

The graph of a linear equation is a straight line where every point on the
line is a solution of the equation and every solution of this equation is a
point on this line.

In the graph of the equation $y=2x-3$, for every $x$-value there is only one
$y$-value, as shown in the accompanying table.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line y = 2x − 3 on a grid from −10 to 10 on both axes, numbered every 2 units. The points (−2, −7), (−1, −5), (0, −3), (3, 3), and (4, 5) are marked on the line, and dashed arrows run straight up or down from x = −2, −1, 3, and 4 on the x-axis to the marked points, one point for each x-value.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"tickLabels":true,"tickStep":2,"lines":[{"slope":2,"intercept":-3,"label":"y = 2x − 3"}],"segments":[{"from":[-2,0],"to":[-2,-7],"dashed":true,"arrows":"end"},{"from":[-1,0],"to":[-1,-5],"dashed":true,"arrows":"end"},{"from":[3,0],"to":[3,3],"dashed":true,"arrows":"end"},{"from":[4,0],"to":[4,5],"dashed":true,"arrows":"end"}],"points":[{"at":[-2,-7]},{"at":[-1,-5]},{"at":[0,-3]},{"at":[3,3]},{"at":[4,5]}]}
{{< /apfigure >}}

| $x$ | $y$ | $(x,y)$ |
| ---: | ---: | :---: |
| $-2$ | $-7$ | $(-2,-7)$ |
| $-1$ | $-5$ | $(-1,-5)$ |
| $0$ | $-3$ | $(0,-3)$ |
| $3$ | $3$ | $(3,3)$ |
| $4$ | $5$ | $(4,5)$ |

A relation is a function if every element of the domain has exactly one value
in the range. So the relation defined by the equation $y=2x-3$ is a function.

If we look at the graph, each vertical dashed line only intersects the line at one
point. This makes sense as in a function, for every $x$-value there is only one
$y$-value.

If the vertical line hit the graph twice, the $x$-value would be mapped to two
$y$-values, and so the graph would not represent a function.

This leads us to the vertical line test. A set of points in a rectangular
coordinate system is the graph of a function if every vertical line intersects
the graph in at most one point. If any vertical line intersects the graph in
more than one point, the graph does not represent a function.

{{< callout type="info" >}}
  **Vertical Line Test.** A set of points in a rectangular coordinate system
  is the graph of a function if every vertical line intersects the graph in at
  most one point. If any vertical line intersects the graph in more than one
  point, the graph does not represent a function.
{{< /callout >}}

**Example 3.51.** Determine whether each graph is the graph of a function.

(a)

{{< apfigure kind="graph" >}}
{"ariaLabel":"A straight line falling from left to right through (0, 2) and (3, 0), on a grid from −6 to 6 on both axes. Dashed vertical lines at x = −5, x = −3, and x = 3 each cross it at exactly one point.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":2,"lines":[{"slope":-0.6666666666666666,"intercept":2}],"segments":[{"from":[-5,-5],"to":[-5,5],"dashed":true,"arrows":true},{"from":[-3,-5],"to":[-3,5],"dashed":true,"arrows":true},{"from":[3,-5],"to":[3,5],"dashed":true,"arrows":true}]}
{{< /apfigure >}}

Since any vertical line intersects the graph in at most one point, the graph is
the graph of a function.

(b)

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening to the right from its vertex (−1, 0), through (0, 1), (0, −1), (3, 2), and (3, −2), on a grid from −6 to 6 on both axes. Dashed vertical lines are drawn at x = −2, which misses the parabola, at x = −1, which meets it only at the vertex, and at x = 2, which crosses it at two points.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"c":-1,"sideways":true}],"segments":[{"from":[-2,-5],"to":[-2,5],"dashed":true,"arrows":true},{"from":[-1,-5],"to":[-1,5],"dashed":true,"arrows":true},{"from":[2,-5],"to":[2,5],"dashed":true,"arrows":true}]}
{{< /apfigure >}}

One of the vertical lines shown on the graph, intersects it in two points. This
graph does not represent a function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with vertex (0, −1), passing through (−1, 0) and (1, 0), on a grid from −6 to 6 on the x-axis and −2 to 10 on the y-axis.","xMin":-6,"xMax":6,"yMin":-2,"yMax":10,"unit":18,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1,"c":-1}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Determine whether it is the graph of a function."
  answer="yes"
  hint="Imagine a vertical line sliding across the graph, and count the points where it meets the graph at each position."
>}}
yes
no
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle centered at the origin with radius 2, passing through (2, 0), (0, 2), (−2, 0), and (0, −2), on a grid from −6 to 6 on both axes.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":3,"circles":[{"at":[0,0],"r":2}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Determine whether it is the graph of a function."
  answer="no"
  hint="Ask whether some vertical line meets the graph at more than one point."
>}}
no
yes
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A straight line rising from left to right through (0, −2) and (2, 0), on a grid from −6 to 6 on both axes.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"slope":1,"intercept":-2}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Determine whether it is the graph of a function."
  answer="yes"
  hint="Ask how many times each vertical line meets the graph."
>}}
yes
no
{{< /multiplechoice >}}

## Identify graphs of basic functions

We used the equation $y=2x-3$ and its graph as we developed the vertical line
test. We said that the relation defined by the equation $y=2x-3$ is a function.

We can write this as in function notation as $f(x)=2x-3$. It still means the
same thing. The graph of the function is the graph of all ordered pairs $(x,y)$
where $y=f(x)$. So we can write the ordered pairs as $(x,f(x))$. It looks
different but the graph will be the same.

Nothing has changed but the notation.

{{< callout type="info" >}}
  **Graph of a Function.** The graph of a function is the graph of all its
  ordered pairs, $(x,y)$ or using function notation, $(x,f(x))$ where
  $y=f(x)$.

  | Symbol | Meaning |
  | :---: | :--- |
  | $f$ | name of function |
  | $x$ | $x$-coordinate of the ordered pair |
  | $f(x)$ | $y$-coordinate of the ordered pair |
{{< /callout >}}

As we move forward in our study, it is helpful to be familiar with the graphs
of several basic functions and be able to identify them.

Through our earlier work, we are familiar with the graphs of linear equations.
The process we used to decide if $y=2x-3$ is a function would apply to all
linear equations. All non-vertical linear equations are functions. Vertical
lines are not functions as the $x$-value has infinitely many $y$-values.

We wrote linear equations in several forms, but it will be most helpful for us
here to use the slope-intercept form of the linear equation. The slope-intercept
form of a linear equation is $y=mx+b$. In function notation, this linear
function becomes $f(x)=mx+b$ where $m$ is the slope of the line and $b$ is the
$y$-intercept.

The domain is the set of all real numbers, and the range is also the set of all
real numbers.

{{< callout type="info" >}}
  **Linear Function.** For $f(x)=mx+b$, $m$ and $b$ are any real numbers,
  $m$ is the slope of the line, and $b$ is the $y$-intercept. The domain is
  $(-\infty,\infty)$ and the range is $(-\infty,\infty)$.
{{< /callout >}}

We will use the graphing techniques we used earlier, to graph the basic
functions.

**Example 3.52.** Graph: $f(x)=-2x-4$.

We recognize this as a linear function.

Find the slope and $y$-intercept.

$$
\begin{array}{rcl}
m&=&-2\\[4pt]
b&=&-4
\end{array}
$$

Graph using the slope intercept.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line f(x) = −2x − 4, falling from left to right through (−2, 0) and (0, −4), on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":16,"tickLabels":true,"tickStep":2,"lines":[{"slope":-2,"intercept":-4,"label":"f(x) = −2x − 4"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph: $f(x)=-3x-1$."
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  answerDisplay="$f(x)=-3x-1$"
  hint="Read the slope $m$ and the $y$-intercept $b$ from $f(x)=mx+b$, plot $(0,b)$, and then count the slope's rise over run to reach more points."
>}}
{"answer":{"slope":-3,"intercept":-1,"plotPoints":3},"grid":{}}
{{< /graphplot >}}

{{< graphplot
  question="Graph: $f(x)=-4x-5$."
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  answerDisplay="$f(x)=-4x-5$"
  hint="Write the function as $f(x)=mx+b$ to read its slope and $y$-intercept, plot the intercept, and use rise over run from there."
>}}
{"answer":{"slope":-4,"intercept":-5,"plotPoints":3},"grid":{}}
{{< /graphplot >}}

The next function whose graph we will look at is called the constant function
and its equation is of the form $f(x)=b$, where $b$ is any real number. If we
replace the $f(x)$ with $y$, we get $y=b$. We recognize this as the horizontal
line whose $y$-intercept is $b$. The graph of the function $f(x)=b$, is also the
horizontal line whose $y$-intercept is $b$.

Notice that for any real number we put in the function, the function value will
be $b$. This tells us the range has only one value, $b$.

{{< callout type="info" >}}
  **Constant Function.** For $f(x)=b$, $b$ is any real number and is the
  $y$-intercept. The domain is $(-\infty,\infty)$ and the range is $\{b\}$.
{{< /callout >}}

**Example 3.53.** Graph: $f(x)=4$.

We recognize this as a constant function. The graph will be a horizontal line
through $(0,4)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The horizontal line f(x) = 4 through (0, 4), on a grid from −7 to 7 on the x-axis and −1 to 11 on the y-axis.","xMin":-7,"xMax":7,"yMin":-1,"yMax":11,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"y":4,"label":"f(x) = 4"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph: $f(x)=-2$."
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  answerDisplay="$f(x)=-2$"
  hint="A constant function $f(x)=b$ graphs as a horizontal line through $(0,b)$."
>}}
{"answer":{"slope":0,"intercept":-2,"plotPoints":3},"grid":{}}
{{< /graphplot >}}

{{< graphplot
  question="Graph: $f(x)=3$."
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  answerDisplay="$f(x)=3$"
  hint="Every input gives the same output, so every point on the graph has that output as its $y$-coordinate."
>}}
{"answer":{"slope":0,"intercept":3,"plotPoints":3},"grid":{}}
{{< /graphplot >}}

The identity function, $f(x)=x$ is a special case of the linear function. If
we write it in linear function form, $f(x)=1x+0$, we see the slope is 1 and the
$y$-intercept is 0.

{{< callout type="info" >}}
  **Identity Function.** For $f(x)=x$, the slope is $1$ and the $y$-intercept
  is $0$. The domain is $(-\infty,\infty)$ and the range is
  $(-\infty,\infty)$.
{{< /callout >}}

The next function we will look at is not a linear function. So the graph will
not be a line. The only method we have to graph this function is point
plotting. Because this is an unfamiliar function, we make sure to choose
several positive and negative values as well as 0 for our $x$-values.

**Example 3.54.** Graph: $f(x)=x^2$.

We choose $x$-values. We substitute them in and then create a chart as shown.

| $x$ | $f(x)=x^2$ | $(x,f(x))$ |
| ---: | ---: | :---: |
| $-3$ | $9$ | $(-3,9)$ |
| $-2$ | $4$ | $(-2,4)$ |
| $-1$ | $1$ | $(-1,1)$ |
| $0$ | $0$ | $(0,0)$ |
| $1$ | $1$ | $(1,1)$ |
| $2$ | $4$ | $(2,4)$ |
| $3$ | $9$ | $(3,9)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola f(x) = x², opening upward from its vertex at the origin through (−3, 9), (−2, 4), (−1, 1), (1, 1), (2, 4), and (3, 9), on a grid from −6 to 6 on the x-axis and −2 to 10 on the y-axis.","xMin":-6,"xMax":6,"yMin":-2,"yMax":10,"unit":18,"tickLabels":true,"tickStep":2,"quadratics":[{"a":1}]}
{{< /apfigure >}}

{{< fillin
  question="Extend the table for $f(x)=x^2$ by one more row: find $f(-4)$."
  answer="16"
  answerForm="decimal"
  answerDisplay="$16$"
  hint="Substitute the input for $x$, keeping it in parentheses, and evaluate the square."
>}}

{{< graphplot
  question="Graph: $f(x)=-x^2$."
  ariaLabel="A blank coordinate grid from negative 7 to 7 on both axes."
  answerDisplay="$f(x)=-x^2$"
  hint="Make a table of values: for each $x$, square it first and then take the opposite of the square."
>}}
{"answer":{"quadratic":{"a":-1,"b":0,"c":0},"plotPoints":3},"grid":{}}
{{< /graphplot >}}

Looking at the result in Example 3.54, we can summarize the features of the
square function. We call this graph a parabola. As we consider the domain,
notice any real number can be used as an $x$-value. The domain is all real
numbers.

The range is not all real numbers. Notice the graph consists of values of $y$
never go below zero. This makes sense as the square of any number cannot be
negative. So, the range of the square function is all non-negative real
numbers.

{{< callout type="info" >}}
  **Square Function.** For $f(x)=x^2$, the domain is
  $(-\infty,\infty)$ and the range is $[0,\infty)$.
{{< /callout >}}

The next function we will look at is also not a linear function so the graph
will not be a line. Again we will use point plotting, and make sure to choose
several positive and negative values as well as 0 for our $x$-values.

**Example 3.55.** Graph: $f(x)=x^3$.

We choose $x$-values. We substitute them in and then create a chart.

| $x$ | $f(x)=x^3$ | $(x,f(x))$ |
| ---: | ---: | :---: |
| $-2$ | $-8$ | $(-2,-8)$ |
| $-1$ | $-1$ | $(-1,-1)$ |
| $0$ | $0$ | $(0,0)$ |
| $1$ | $1$ | $(1,1)$ |
| $2$ | $8$ | $(2,8)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve f(x) = x³, rising from lower left to upper right through (−2, −8), (−1, −1), the origin, (1, 1), and (2, 8), flattening as it passes through the origin, on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":16,"tickLabels":true,"tickStep":2,"cubics":[{"a":1}]}
{{< /apfigure >}}

{{< fillin
  question="Extend the table for $f(x)=x^3$ by one more row: find $f(-3)$."
  answer="-27"
  answerForm="decimal"
  answerDisplay="$-27$"
  hint="Substitute $-3$ for $x$; cubing a number means using it as a factor three times."
>}}

{{< multiplechoice
  question="Graph: $f(x)=-x^3$. Which graph shows it?"
  mode="graph"
  answerIndex="1"
  hint="Make a short table for $f(x)=-x^3$ with $x=-2,-1,0,1,2$, and look for the graph through those points."
>}}
{"ariaLabel":"A curve rising from lower left to upper right through (−2, −8), (−1, −1), the origin, (1, 1), and (2, 8).","xMin":-4,"xMax":4,"yMin":-8,"yMax":8,"unit":16,"xUnit":24,"tickLabels":true,"tickStep":2,"cubics":[{"a":1}]}
===OPT===
{"ariaLabel":"A curve falling from upper left to lower right through (−2, 8), (−1, 1), the origin, (1, −1), and (2, −8).","xMin":-4,"xMax":4,"yMin":-8,"yMax":8,"unit":16,"xUnit":24,"tickLabels":true,"tickStep":2,"cubics":[{"a":-1}]}
===OPT===
{"ariaLabel":"A downward-opening parabola with vertex at the origin, passing through (−2, −4), (−1, −1), (1, −1), and (2, −4).","xMin":-4,"xMax":4,"yMin":-8,"yMax":8,"unit":16,"xUnit":24,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-1}]}
{{< /multiplechoice >}}

Looking at the result in Example 3.55, we can summarize the features of the
cube function. As we consider the domain, notice any real number can be used as
an $x$-value. The domain is all real numbers.

The range is all real numbers. This makes sense as the cube of any non-zero
number can be positive or negative. So, the range of the cube function is all
real numbers.

{{< callout type="info" >}}
  **Cube Function.** For $f(x)=x^3$, the domain is
  $(-\infty,\infty)$ and the range is $(-\infty,\infty)$.
{{< /callout >}}

The next function we will look at does not square or cube the input values, but
rather takes the square root of those values.

Let's graph the function $f(x)=\sqrt{x}$ and then summarize the features of the
function. Remember, we can only take the square root of non-negative real
numbers, so our domain will be the non-negative real numbers.

**Example 3.56.** $f(x)=\sqrt{x}$.

We choose $x$-values. Since we will be taking the square root, we choose numbers
that are perfect squares, to make our work easier. We substitute them in and
then create a chart.

| $x$ | $f(x)=\sqrt{x}$ | $(x,f(x))$ |
| ---: | ---: | :---: |
| $0$ | $0$ | $(0,0)$ |
| $1$ | $1$ | $(1,1)$ |
| $4$ | $2$ | $(4,2)$ |
| $9$ | $3$ | $(9,3)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve f(x) = √x, starting at the origin and rising to the right ever more slowly through (1, 1), (4, 2), and (9, 3), on a grid from −1 to 10 on both axes.","xMin":-1,"xMax":10,"yMin":-1,"yMax":10,"unit":18,"tickLabels":true,"tickStep":2,"curves":[{"kind":"sqrt","from":0,"to":10,"arrows":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="Extend the table for $f(x)=\sqrt{x}$ by one more row: find $f(16)$."
  answer="4"
  answerForm="decimal"
  answerDisplay="$4$"
  hint="Find the non-negative number whose square is $16$."
>}}

{{< fillin
  question="To graph $f(x)=-\sqrt{x}$, start a table: find $f(9)$."
  answer="-3"
  answerForm="decimal"
  answerDisplay="$-3$"
  hint="Take the principal square root of $9$, and then its opposite."
>}}

{{< callout type="info" >}}
  **Square Root Function.** For $f(x)=\sqrt{x}$, the domain is
  $[0,\infty)$ and the range is $[0,\infty)$.
{{< /callout >}}

Our last basic function is the absolute value function, $f(x)=|x|$. Keep in
mind that the absolute value of a number is its distance from zero. Since we
never measure distance as a negative number, we will never get a negative
number in the range.

**Example 3.57.** Graph: $f(x)=|x|$.

We choose $x$-values. We substitute them in and then create a chart.

| $x$ | $f(x)=\lvert x\rvert$ | $(x,f(x))$ |
| ---: | ---: | :---: |
| $-3$ | $3$ | $(-3,3)$ |
| $-2$ | $2$ | $(-2,2)$ |
| $-1$ | $1$ | $(-1,1)$ |
| $0$ | $0$ | $(0,0)$ |
| $1$ | $1$ | $(1,1)$ |
| $2$ | $2$ | $(2,2)$ |
| $3$ | $3$ | $(3,3)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The V-shaped graph of f(x) = |x|, with its vertex at the origin and straight sides through (−3, 3), (−2, 2), (−1, 1), (1, 1), (2, 2), and (3, 3), on a grid from −4 to 4 on the x-axis and −1 to 6 on the y-axis.","xMin":-4,"xMax":4,"yMin":-1,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"polylines":[{"through":[[-4,4],[0,0],[4,4]],"arrows":true}]}
{{< /apfigure >}}

{{< fillin
  question="Extend the table for $f(x)=|x|$ by one more row: find $f(-5)$."
  answer="5"
  answerForm="decimal"
  answerDisplay="$5$"
  hint="The absolute value of a number is its distance from zero on the number line."
>}}

{{< fillin
  question="To graph $f(x)=-|x|$, start a table: find $f(-3)$."
  answer="-3"
  answerForm="decimal"
  answerDisplay="$-3$"
  hint="First find $\lvert -3\rvert$, and then take its opposite."
>}}

{{< callout type="info" >}}
  **Absolute Value Function.** For $f(x)=|x|$, the domain is
  $(-\infty,\infty)$ and the range is $[0,\infty)$.
{{< /callout >}}

## Read information from a graph of a function

In the sciences and business, data is often collected and then graphed. The
graph is analyzed, information is obtained from the graph and then often
predictions are made from the data.

We will start by reading the domain and range of a function from its graph.

Remember the domain is the set of all the $x$-values in the ordered pairs in
the function. To find the domain we look at the graph and find all the values
of $x$ that have a corresponding value on the graph. Follow the value $x$ up
or down vertically. If you hit the graph of the function then $x$ is in the
domain.

Remember the range is the set of all the $y$-values in the ordered pairs in the
function. To find the range we look at the graph and find all the values of $y$
that have a corresponding value on the graph. Follow the value $y$ left or
right horizontally. If you hit the graph of the function then $y$ is in the
range.

**Example 3.58.** Use the graph of the function to find its domain and range.
Write the domain and range in interval notation.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve with closed endpoints at (−3, −1) and (3, 1), on a grid from −6 to 6 on both axes. From (−3, −1) it rises through (−2, 0) and about (0, 2) to its highest point (1.5, 3), then falls to (3, 1). Dashed guides run from the endpoints and the highest point to both axes. A bar labeled domain below the graph spans x = −3 to x = 3, and a bar labeled range to its left spans y = −1 to y = 3.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":2,"polynomials":[{"coeffs":[2.0526077097505664,1.0039304610733182,-0.10592088687326762,-0.07451079197110942,-0.013571848492483428],"from":-3,"to":3,"arrows":false}],"points":[{"at":[-3,-1]},{"at":[1.5,3]},{"at":[3,1]}],"guides":[[-3,-1],[1.5,3],[3,1]],"segments":[{"from":[-3,-5],"to":[3,-5]},{"from":[-5,-1],"to":[-5,3]}],"texts":[{"at":[3.4,-5.2],"text":"domain"},{"at":[-5,3.35],"text":"range","anchor":"middle"}]}
{{< /apfigure >}}

To find the domain we look at the graph and find all the values of $x$ that
correspond to a point on the graph. The domain is marked by the bar labeled
domain below the graph. The domain is $[-3,3]$.

To find the range we look at the graph and find all the values of $y$ that
correspond to a point on the graph. The range is marked by the bar labeled
range to the left of the graph. The range is $[-1,3]$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve with closed endpoints at (−5, −4) and (1, 2), on a grid from −6 to 6 on both axes. From (−5, −4) it runs almost level, rises slowly to about (0, −3), then climbs steeply to (1, 2).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":2,"polynomials":[{"coeffs":[-3.030966502660925,1.9380669946781492,1.744260295210334,0.9302721574455117,0.325595255105929,0.07814286122542297,0.013023810204237159,0.0014884354519128177,0.00011163265889346132,4.961451506376058e-06,9.922903012752117e-08],"from":-5,"to":1,"arrows":false}],"points":[{"at":[-5,-4]},{"at":[1,2]}]}
{{< /apfigure >}}

{{< fillin
  question="Use the graph directly above to find the domain of the function. Write it in interval notation."
  answer="[-5,1]"
  answerForm="decimal"
  answerDisplay="$[-5,1]$"
  hint="Find the smallest and largest $x$-values the graph reaches; a closed endpoint takes a bracket."
>}}

{{< fillin
  question="Use the same graph to find the range of the function. Write it in interval notation."
  answer="[-4,2]"
  answerForm="decimal"
  answerDisplay="$[-4,2]$"
  hint="Find the lowest and highest $y$-values the graph reaches; a closed endpoint takes a bracket."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve with closed endpoints at (−2, 1) and (4, −5), on a grid from −6 to 6 on both axes. From (−2, 1) it rises to its highest point (0, 3), then falls to (4, −5).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":2,"quadratics":[{"a":-0.5,"c":3,"from":-2,"to":4,"arrows":false}],"points":[{"at":[-2,1]},{"at":[4,-5]}]}
{{< /apfigure >}}

{{< fillin
  question="Use the graph directly above to find the domain of the function. Write it in interval notation."
  answer="[-2,4]"
  answerForm="decimal"
  answerDisplay="$[-2,4]$"
  hint="Follow the graph from its left end to its right end and read the $x$-values there."
>}}

{{< fillin
  question="Use the same graph to find the range of the function. Write it in interval notation."
  answer="[-5,3]"
  answerForm="decimal"
  answerDisplay="$[-5,3]$"
  hint="Find the lowest and the highest points of the graph, which need not be its endpoints, and read their $y$-values."
>}}

We are now going to read information from the graph that you may see in future
math classes.

**Example 3.59.** Use the graph of the function to find the indicated values.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A wave on a grid from −2π to 2π on the x-axis, marked every π/2, and −3 to 3 on the y-axis. It crosses the x-axis at −2π, −π, 0, π, and 2π; its highest points, (−3π/2, 1) and (π/2, 1), and its lowest points, (−π/2, −1) and (3π/2, −1), are marked and labeled; arrows show it continues in both directions.","xMin":-6.3,"xMax":6.3,"yMin":-3,"yMax":3,"xUnit":25.5,"yUnit":24,"xGridStep":0.5,"tickLabels":true,"xTickFormat":"pi","xTickStep":0.5,"yTickStep":1,"curves":[{"kind":"sine","arrows":true}],"points":[{"at":[-4.712389,1],"label":"(−3π/2, 1)"},{"at":[1.570796,1],"label":"(π/2, 1)"},{"at":[-1.570796,-1],"label":"(−π/2, −1)"},{"at":[4.712389,-1],"label":"(3π/2, −1)"}]}
{{< /apfigure >}}

(a) Find: $f(0)$.

(b) Find: $f(\tfrac{3}{2}\pi)$.

(c) Find: $f(-\tfrac{1}{2}\pi)$.

(d) Find the values for $x$ when $f(x)=0$.

(e) Find the $x$-intercepts.

(f) Find the $y$-intercepts.

(g) Find the domain. Write it in interval notation.

(h) Find the range. Write it in interval notation.

**Solution.**

(a) When $x=0$, the function crosses the $y$-axis at 0. So, $f(0)=0$.

(b) When $x=\tfrac{3}{2}\pi$, the $y$-value of the function is $-1$. So,
$f(\tfrac{3}{2}\pi)=-1$.

(c) When $x=-\tfrac{1}{2}\pi$, the $y$-value of the function is $-1$. So,
$f(-\tfrac{1}{2}\pi)=-1$.

(d) The function is 0 at the points $(-2\pi,0),(-\pi,0),(0,0),(\pi,0),
(2\pi,0)$. The $x$-values when $f(x)=0$ are $-2\pi,-\pi,0,\pi,2\pi$.

(e) The $x$-intercepts occur when $y=0$. So the $x$-intercepts occur when
$f(x)=0$. The $x$-intercepts are $(-2\pi,0),(-\pi,0),(0,0),(\pi,0),(2\pi,0)$.

(f) The $y$-intercepts occur when $x=0$. So the $y$-intercepts occur at
$f(0)$. The $y$-intercept is $(0,0)$.

(g) This function has a value for all values of $x$. Therefore, the domain in
interval notation is $(-\infty,\infty)$.

(h) This function values, or $y$-values go from $-1$ to 1. Therefore, the
range, in interval notation, is $[-1,1]$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A wave on a grid from −2π to 2π on the x-axis, marked every π/2, and −3 to 3 on the y-axis. It crosses the x-axis at −2π, −π, 0, π, and 2π, rising as it leaves the origin to the right. Its highest points are at height 2 and its lowest points at height −2, and arrows show it continues in both directions.","xMin":-6.3,"xMax":6.3,"yMin":-3,"yMax":3,"xUnit":25.5,"yUnit":24,"xGridStep":0.5,"tickLabels":true,"xTickFormat":"pi","xTickStep":0.5,"yTickStep":2,"curves":[{"kind":"sine","a":2,"arrows":true}]}
{{< /apfigure >}}

{{< fillin
  question="Use the graph directly above to find $f(\tfrac{1}{2}\pi)$."
  answer="2"
  answerForm="decimal"
  answerDisplay="$2$"
  hint="Locate $\tfrac{1}{2}\pi$ on the $x$-axis, move vertically to the graph, and read the $y$-coordinate of the point you reach."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A wave on a grid from −2π to 2π on the x-axis, marked every π/2, and −3 to 3 on the y-axis. Starting at height 1 at the left edge, x = −2π, it falls through the x-axis at −3π/2 to its lowest value, −1, at −π, rises through −π/2 to a high point on the y-axis, falls through π/2 to −1 at π, and rises through 3π/2 to height 1 at 2π; arrows show it continues in both directions.","xMin":-6.3,"xMax":6.3,"yMin":-3,"yMax":3,"xUnit":25.5,"yUnit":24,"xGridStep":0.5,"tickLabels":true,"xTickFormat":"pi","xTickStep":0.5,"yTickStep":2,"curves":[{"kind":"cosine","arrows":true}]}
{{< /apfigure >}}

{{< fillin
  question="Use the graph directly above to find $f(0)$."
  answer="1"
  answerForm="decimal"
  answerDisplay="$1$"
  hint="Find the point where the graph meets the $y$-axis and read its $y$-coordinate."
>}}

## Key terms

The **vertical line test** determines whether a graph represents
a function; the **graph of a function** is the graph of all its ordered pairs
$(x,f(x))$; the basic functions in this section are the **linear function**,
**constant function**, **identity function**, **square function**, **cube
function**, **square root function**, and **absolute value function**.

## Practice

### Use the vertical line test

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle centered at the origin passing through (−3, 0), (3, 0), (0, −3), and (0, 3), on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":13,"gridStep":2,"tickLabels":true,"tickStep":4,"circles":[{"at":[0,0],"r":3}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Is it the graph of a function?"
  answer="no"
  hint="Picture vertical lines at several $x$-values and count how many times each one meets the graph."
>}}
yes
no
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with vertex (0, 2), passing through (−1, 3), (1, 3), (−2, 6), and (2, 6), on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":13,"gridStep":2,"tickLabels":true,"tickStep":4,"quadratics":[{"a":1,"c":2}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Is it the graph of a function?"
  answer="yes"
  hint="Ask whether any vertical line can meet this graph more than once."
>}}
no
yes
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening to the right from its vertex (−2, 0), passing through (−1, 1), (−1, −1), (2, 2), and (2, −2), on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":13,"gridStep":2,"tickLabels":true,"tickStep":4,"quadratics":[{"a":1,"c":-2,"sideways":true}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Is it the graph of a function?"
  answer="no"
  hint="Slide a vertical line across the graph from left to right and count its intersections at each position."
>}}
yes
no
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An S-shaped curve rising from lower left to upper right through (−1, −1), the origin, and (1, 1), flattening at the origin, on a grid from −8 to 8 on both axes.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":13,"gridStep":2,"tickLabels":true,"tickStep":4,"cubics":[{"a":1}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Use the graph directly above. Is it the graph of a function?"
  answer="yes"
  hint="Check whether any vertical line could cross this curve twice."
>}}
no
yes
{{< /multiplechoice >}}

### Identify graphs of basic functions

{{< fillin
  question="Find the domain of $f(x)=3x^2$. Write the answer in interval notation."
  answer="(-\infty,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,\infty)$"
  hint="Ask whether any real number cannot be substituted for $x$."
>}}

{{< fillin
  question="Find the range of $f(x)=3x^2$. Write the answer in interval notation."
  answer="[0,\infty)"
  answerForm="decimal"
  answerDisplay="$[0,\infty)$"
  hint="Find the smallest value $3x^2$ can take, then decide whether the outputs keep growing."
>}}

{{< fillin
  question="Find the domain of $f(x)=2\sqrt{x}$. Write the answer in interval notation."
  answer="[0,\infty)"
  answerForm="decimal"
  answerDisplay="$[0,\infty)$"
  hint="Decide which $x$-values can go under a square root."
>}}

{{< fillin
  question="Find the range of $f(x)=2\sqrt{x}$. Write the answer in interval notation."
  answer="[0,\infty)"
  answerForm="decimal"
  answerDisplay="$[0,\infty)$"
  hint="Find the smallest value $2\sqrt{x}$ can take, then decide whether the outputs keep growing."
>}}

{{< fillin
  question="Find the domain of $f(x)=|x|+1$. Write the answer in interval notation."
  answer="(-\infty,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,\infty)$"
  hint="Check whether every real number has an absolute value."
>}}

{{< fillin
  question="Find the range of $f(x)=|x|+1$. Write the answer in interval notation."
  answer="[1,\infty)"
  answerForm="decimal"
  answerDisplay="$[1,\infty)$"
  hint="Find the smallest value $|x|$ can take, add $1$, and decide whether the outputs keep growing."
>}}

### Read information from a graph of a function

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve starting at (2, 0) and rising to the right ever more slowly through (3, 1) and (6, 2), with an arrow at its right end, on a grid from −2 to 12 on the x-axis and −2 to 8 on the y-axis.","xMin":-2,"xMax":12,"yMin":-2,"yMax":8,"unit":16,"gridStep":2,"tickLabels":true,"tickStep":4,"curves":[{"kind":"sqrt","h":2,"from":2,"to":12,"arrows":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="Use the graph directly above to find the domain of the function. Write it in interval notation."
  answer="[2,\infty)"
  answerForm="decimal"
  answerDisplay="$[2,\infty)$"
  hint="Find the leftmost $x$-value on the graph, then check whether the graph stops on the right or continues past its arrow."
>}}

{{< fillin
  question="Use the same graph to find the range of the function. Write it in interval notation."
  answer="[0,\infty)"
  answerForm="decimal"
  answerDisplay="$[0,\infty)$"
  hint="Find the lowest $y$-value on the graph, then check whether the graph stops or keeps rising."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A V-shaped graph with its vertex at (0, 4), passing through (−2, 6) and (2, 6), with arrows at both upper ends, on a grid from −6 to 6 on the x-axis and −2 to 12 on the y-axis.","xMin":-6,"xMax":6,"yMin":-2,"yMax":12,"unit":16,"gridStep":2,"tickLabels":true,"tickStep":4,"polylines":[{"through":[[-6,10],[0,4],[6,10]],"arrows":true}]}
{{< /apfigure >}}

{{< fillin
  question="Use the graph directly above to find the domain of the function. Write it in interval notation."
  answer="(-\infty,\infty)"
  answerForm="decimal"
  answerDisplay="$(-\infty,\infty)$"
  hint="Check whether the graph stops on the left and on the right, or continues past its arrows."
>}}

{{< fillin
  question="Use the same graph to find the range of the function. Write it in interval notation."
  answer="[4,\infty)"
  answerForm="decimal"
  answerDisplay="$[4,\infty)$"
  hint="Find the lowest $y$-value on the graph, then check whether the graph keeps rising."
>}}

<small>Adapted from [*Intermediate Algebra 2e*, Section 3.6](https://openstax.org/books/intermediate-algebra-2e/pages/3-6-graphs-of-functions), by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/books/intermediate-algebra-2e/pages/3-6-graphs-of-functions). Changes: recreated the graphs as accessible figures with numbered axes, drawing the vertical test lines on both graphs of Example 3.51, the graph of Example 3.59 and of its Try Its (the $x$-axis marked in multiples of $\tfrac{1}{2}\pi$ along the lower edge, the $y$-axis cut to $-3$ to $3$), and every Try It and exercise graph the source prints, and marking the domain and range of Example 3.58 with labeled bars where the source highlights them in red and blue; stated each of the seven basic-function summary boxes (linear, constant, identity, square, cube, square root, absolute value) as a text callout without its small graph; omitted the Be Prepared quiz, the comparison figure for $f(x)=2x-3$, the media link, the Key Concepts summary, the writing exercises, and the Self Check; added a Key terms summary; converted the practice problems (“Try Its”) into interactive exercises with instant feedback, posing each linear and constant graphing Try It and the $f(x)=-x^2$ Try It as a graph-it-yourself exercise and the $f(x)=-x^3$ Try It as a choice among three graphs, asking for one function value on each other square, cube, square root, and absolute value Try It (a value beyond the worked example’s table where the Try It repeats the example’s function), asking for one part of each Try It after Example 3.59, and converting three of the four vertical-line-test Try It graphs; and adapted selected end-of-section exercises into a section-final interactive practice block.</small>
