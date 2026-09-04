---
title: Graphs of Linear Functions
description: >-
  Graphing linear functions by plotting points, from the y-intercept and
  slope, and by transforming the identity function; x-intercepts; horizontal
  and vertical lines; parallel and perpendicular lines; and solving a system
  of linear equations from a graph — adapted from OpenStax Precalculus 2e,
  Section 2.2.
source_section: "2.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph linear functions
- Write the equation for a linear function from the graph of a line
- Determine whether the graphs of two lines are parallel or perpendicular given their equations
- Write the equation of a line parallel or perpendicular to a given line
- Solve a system of linear equations
{{< /callout >}}

Two competing telephone companies offer different payment plans. The two
plans charge the same rate per long distance minute, but charge a different
monthly flat fee. A consumer wants to determine whether the two plans will
ever cost the same amount for a given number of long distance minutes used.
The total cost of each payment plan can be represented by a linear function.
To solve the problem, we will need to compare the functions. In this section,
we will consider methods of comparing functions using graphs.

## Graphing linear functions

In *Linear Functions*, we saw that the graph of a linear function is a
straight line. We were also able to see the points of the function as well as
the initial value from a graph. By graphing two functions, then, we can more
easily compare their characteristics.

There are three basic methods of graphing linear functions. The first is by
plotting points and then drawing a line through the points. The second is by
using the $y$-intercept and slope. And the third is by using transformations
of the identity function $f(x)=x$.

## Graphing a function by plotting points

To find points of a function, we can choose input values, evaluate the
function at these input values, and calculate output values. The input values
and corresponding output values form coordinate pairs. We then plot the
coordinate pairs on a grid. In general, we should evaluate the function at a
minimum of two inputs in order to find at least two points on the graph. For
example, given the function $f(x)=2x$, we might use the input values 1 and 2.
Evaluating the function for an input value of 1 yields an output value of 2,
which is represented by the point $(1,2)$. Evaluating the function for an
input value of 2 yields an output value of 4, which is represented by the
point $(2,4)$. Choosing three points is often advisable because if all three
points do not fall on the same line, we know we made an error.

{{< callout type="info" >}}
  **How to:** given a linear function, graph by plotting points.

  1. Choose a minimum of two input values.
  2. Evaluate the function at each input value.
  3. Use the resulting output values to identify coordinate pairs.
  4. Plot the coordinate pairs on a grid.
  5. Draw a line through the points.
{{< /callout >}}

**Example.** Graph $f(x)=-\tfrac{2}{3}x+5$ by plotting points.

**Solution.** Begin by choosing input values. This function includes a
fraction with a denominator of 3, so let's choose multiples of 3 as input
values. We will choose 0, 3, and 6.

Evaluate the function at each input value, and use the output value to
identify coordinate pairs.

$$
\begin{array}{lrcl}
x=0 & f(0) &=& -\tfrac{2}{3}(0)+5=5\ \Rightarrow\ (0,5) \\[4pt]
x=3 & f(3) &=& -\tfrac{2}{3}(3)+5=3\ \Rightarrow\ (3,3) \\[4pt]
x=6 & f(6) &=& -\tfrac{2}{3}(6)+5=1\ \Rightarrow\ (6,1)
\end{array}
$$

Plot the coordinate pairs and draw a line through the points. The graph below
represents the function $f(x)=-\tfrac{2}{3}x+5$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals negative two thirds x plus 5, a line falling from left to right through the plotted points (0, 5), (3, 3), and (6, 1).","xMin":-4,"xMax":7,"yMin":-2,"yMax":7,"unit":24,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","lines":[{"through":[[0,5],[6,1]]}],"points":[{"at":[0,5]},{"at":[3,3]},{"at":[6,1]}],"texts":[{"at":[0,5],"text":"(0, 5)","dx":9,"dy":-6},{"at":[3,3],"text":"(3, 3)","dx":9,"dy":-6},{"at":[6,1],"text":"(6, 1)","dx":9,"dy":-6},{"at":[-1.9,6.15],"text":"f","italic":true}]}
{{< /apfigure >}}

The graph of the function is a line as expected for a linear
function. In addition, the graph has a downward slant, which indicates a
negative slope. This is also expected from the negative constant rate of
change in the equation for the function.

{{< graphplot
  question="Graph $f(x)=-\tfrac{3}{4}x+6$ by plotting points."
  answerDisplay="The line through $(0,6)$, $(4,3)$, and $(8,0)$"
  ariaLabel="A blank coordinate grid from −12 to 12 on both axes."
  hint="Choose multiples of 4 as input values so every output is a whole number: $f(0)=6$, $f(4)=3$, and $f(8)=0$."
>}}
{"answer":{"slope":-0.75,"intercept":6,"plotPoints":3},"grid":{"xMin":-12,"xMax":12,"yMin":-12,"yMax":12}}
{{< /graphplot >}}

## Graphing a function using the y-intercept and slope

Another way to graph linear functions is by using specific characteristics of
the function rather than plotting points. The first characteristic is its
$y$-intercept, which is the point at which the input value is zero. To find
the **$y$-intercept**, we can set $x=0$ in the equation.

The other characteristic of the linear function is its slope $m$, which is a
measure of its steepness. Recall that the slope is the rate of change of the
function. The slope of a function is equal to the ratio of the change in
outputs to the change in inputs. Another way to think about the slope is by
dividing the vertical difference, or rise, by the horizontal difference, or
run. We encountered both the $y$-intercept and the slope in *Linear
Functions*.

Let's consider the following function.

$$f(x)=\tfrac{1}{2}x+1$$

The slope is $\tfrac{1}{2}$. Because the slope is positive, we know the graph
will slant upward from left to right. The $y$-intercept is the point on the
graph when $x=0$. The graph crosses the $y$-axis at $(0,1)$. Now we know the
slope and the $y$-intercept. We can begin graphing by plotting the point
$(0,1)$. We know that the slope is rise over run,
$m=\tfrac{\text{rise}}{\text{run}}$. From our example, we have
$m=\tfrac{1}{2}$, which means that the rise is 1 and the run is 2. So
starting from our $y$-intercept $(0,1)$, we can rise 1 and then run 2, or run
2 and then rise 1. We repeat until we have a few points, and then we draw a
line through the points as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals one half x plus 1. The y-intercept (0, 1) is marked, and a dashed staircase runs right 2 and up 1 three times, from (0, 1) through (2, 2), (4, 3), and (6, 4).","xMin":-2,"xMax":7,"yMin":0,"yMax":5,"unit":30,"tickLabels":true,"lines":[{"through":[[0,1],[2,2]]}],"points":[{"at":[0,1]}],"segments":[{"from":[0,1],"to":[2,1],"dashed":true},{"from":[2,1],"to":[2,2],"dashed":true},{"from":[2,2],"to":[4,2],"dashed":true},{"from":[4,2],"to":[4,3],"dashed":true},{"from":[4,3],"to":[6,3],"dashed":true},{"from":[6,3],"to":[6,4],"dashed":true},{"from":[0.95,2.85],"to":[0.15,1.25],"arrows":"end"}],"texts":[{"at":[0,1],"text":"(0, 1)","anchor":"end","dx":-20,"dy":4},{"at":[1,3.05],"text":"y‑intercept"},{"at":[2.2,1.4],"text":"Rise = 1"},{"at":[1.15,0.45],"text":"Run = 2"},{"at":[4.5,4.2],"text":"f","italic":true}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Graphical interpretation of a linear function.** In the equation
  $f(x)=mx+b$:

  - $b$ is the $y$-intercept of the graph and indicates the point $(0,b)$ at
    which the graph crosses the $y$-axis.
  - $m$ is the slope of the line and indicates the vertical displacement
    (rise) and horizontal displacement (run) between each successive pair of
    points. Recall the formula for the slope:

  $$m=\frac{\text{change in output (rise)}}{\text{change in input (run)}}=\frac{\Delta y}{\Delta x}=\frac{y_2-y_1}{x_2-x_1}$$
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *Do all linear functions have $y$-intercepts?*

  Yes. All linear functions cross the $y$-axis and therefore have
  $y$-intercepts. (Note: a vertical line parallel to the $y$-axis does not
  have a $y$-intercept, but it is not a function.)
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the equation for a linear function, graph the function
  using the $y$-intercept and slope.

  1. Evaluate the function at an input value of zero to find the
     $y$-intercept.
  2. Identify the slope as the rate of change of the input value.
  3. Plot the point represented by the $y$-intercept.
  4. Use $\tfrac{\text{rise}}{\text{run}}$ to determine at least two more
     points on the line.
  5. Sketch the line that passes through the points.
{{< /callout >}}

**Example.** Graph $f(x)=-\tfrac{2}{3}x+5$ using the $y$-intercept and slope.

**Solution.** Evaluate the function at $x=0$ to find the $y$-intercept. The
output value when $x=0$ is 5, so the graph will cross the $y$-axis at
$(0,5)$.

According to the equation for the function, the slope of the line is
$-\tfrac{2}{3}$. This tells us that for each vertical decrease in the "rise"
of $-2$ units, the "run" increases by 3 units in the horizontal direction. We
can now graph the function by first plotting the $y$-intercept on the graph
below. From the initial value $(0,5)$ we move down 2 units and to the right 3
units. We can extend the line to the left and right by repeating, and then
draw a line through the points.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals negative two thirds x plus 5. Dashed arrows step down 2 and right 3 from (0, 5) to (3, 3) and again from (3, 3) to (6, 1).","xMin":-1,"xMax":7,"yMin":0,"yMax":6,"unit":30,"tickLabels":true,"xLabel":"x","yLabel":"f(x)","lines":[{"through":[[0,5],[6,1]]}],"points":[{"at":[0,5]},{"at":[3,3]},{"at":[6,1]}],"segments":[{"from":[0,5],"to":[0,3],"dashed":true,"arrows":"end"},{"from":[0,3],"to":[3,3],"dashed":true,"arrows":"end"},{"from":[3,3],"to":[3,1],"dashed":true,"arrows":"end"},{"from":[3,1],"to":[6,1],"dashed":true,"arrows":"end"}],"texts":[{"at":[1.6,4.35],"text":"f","italic":true}]}
{{< /apfigure >}}

The graph slants downward from left to right, which means it
has a negative slope as expected.

{{< fillin
  question="The line above continues to the left of the vertical axis. Find the point on it whose $x$-coordinate is $-3$ by evaluating $f(x)=-\tfrac{2}{3}x+5$, and enter that point's $y$-coordinate."
  answer="7"
  answerDisplay="$f(-3)=-\tfrac{2}{3}(-3)+5=2+5=7$, so the point is $(-3,7)$"
  hint="Substitute $x=-3$ into the rule; two negatives multiply to a positive, so $-\tfrac{2}{3}(-3)=2$."
>}}

## Graphing a function using transformations

Another option for graphing is to use **transformations** of the identity
function $f(x)=x$. A function may be transformed by a shift up, down, left,
or right. A function may also be transformed using a reflection, stretch, or
compression.

## Vertical stretch or compression

In the equation $f(x)=mx$, the $m$ is acting as the **vertical stretch** or
**compression** of the identity function. When $m$ is negative, there is also
a vertical reflection of the graph. Notice in the graph below that
multiplying the equation of $f(x)=x$ by $m$ stretches the graph of $f$ by a
factor of $m$ units if $m>1$ and compresses the graph of $f$ by a factor of
$m$ units if $0<m<1$. This means the larger the absolute value of $m$, the
steeper the slope.

The eight lines drawn are $f(x)=3x$, $f(x)=2x$, $f(x)=x$,
$f(x)=\tfrac{1}{2}x$, $f(x)=\tfrac{1}{3}x$, $f(x)=-\tfrac{1}{2}x$,
$f(x)=-x$, and $f(x)=-2x$; each is labelled by the expression that $f(x)$
equals, written with a slash for the fraction.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Eight lines through the origin: f of x equals 3x, 2x, x, x over 2, and x over 3 rise to the right with decreasing steepness, while f of x equals negative x over 2, negative x, and negative 2x fall to the right.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":26,"tickLabels":true,"lines":[{"through":[[0,0],[1,3]]},{"through":[[0,0],[1,2]]},{"through":[[0,0],[1,1]]},{"through":[[0,0],[2,1]]},{"through":[[0,0],[3,1]]},{"through":[[0,0],[2,-1]]},{"through":[[0,0],[1,-1]]},{"through":[[0,0],[1,-2]]}],"texts":[{"at":[1.95,5.3],"text":"3x"},{"at":[3.05,5.3],"text":"2x"},{"at":[5.15,5.5],"text":"x","anchor":"end"},{"at":[5.3,2.95],"text":"x/2","anchor":"end"},{"at":[5.4,1.25],"text":"x/3","anchor":"end"},{"at":[5.4,-2.05],"text":"-x/2","anchor":"end"},{"at":[5,-5.5],"text":"-x","anchor":"end"},{"at":[2.4,-5.5],"text":"-2x","anchor":"end"}]}
{{< /apfigure >}}

## Vertical shift

In $f(x)=mx+b$, the $b$ acts as the **vertical shift**, moving the graph up
and down without affecting the slope of the line. Notice in the graph below
that adding a value of $b$ to the equation of $f(x)=x$ shifts the graph of
$f$ a total of $b$ units up if $b$ is positive and $\lvert b\rvert$ units
down if $b$ is negative. The five lines are $f(x)=x+4$, $f(x)=x+2$,
$f(x)=x$, $f(x)=x-2$, and $f(x)=x-4$, each labelled by the expression that
$f(x)$ equals.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Five parallel lines of slope 1: f of x equals x plus 4, x plus 2, x, x minus 2, and x minus 4, crossing the vertical axis at 4, 2, 0, negative 2, and negative 4.","xMin":-11,"xMax":11,"yMin":-11,"yMax":11,"unit":20,"maxWidth":440,"gridStep":2,"tickLabels":true,"tickStep":2,"lines":[{"through":[[0,4],[1,5]]},{"through":[[0,2],[1,3]]},{"through":[[0,0],[1,1]]},{"through":[[0,-2],[1,-1]]},{"through":[[0,-4],[1,-3]]}],"texts":[{"at":[5.75,9],"text":"x+4"},{"at":[7.75,9],"text":"x+2"},{"at":[9.75,9],"text":"x"},{"at":[9.75,7],"text":"x-2"},{"at":[9.75,5],"text":"x-4"}]}
{{< /apfigure >}}

Using vertical stretches or compressions along with vertical shifts is
another way to look at identifying different types of linear functions.
Although this may not be the easiest way to graph this type of function, it
is still important to practice each method.

{{< callout type="info" >}}
  **How to:** given the equation of a linear function, use transformations to
  graph the linear function in the form $f(x)=mx+b$.

  1. Graph $f(x)=x$.
  2. Vertically stretch or compress the graph by a factor $m$.
  3. Shift the graph up or down $b$ units.
{{< /callout >}}

**Example.** Graph $f(x)=\tfrac{1}{2}x-3$ using transformations.

**Solution.** The equation for the function shows that $m=\tfrac{1}{2}$, so
the identity function is vertically compressed by $\tfrac{1}{2}$. The
equation for the function also shows that $b=-3$, so the identity function is
vertically shifted down 3 units. First, graph the identity function, and show
the vertical compression as below. The vertical arrows compare the two
outputs: $y=x$ reaches 4 at $x=4$, while $y=\tfrac{1}{2}x$ reaches only 2.5
at $x=5$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The identity line y equals x together with the shallower line y equals one half x. A vertical arrow rises from (4, 0) to (4, 4) on y equals x, and a second from (5, 0) to (5, 2.5) on y equals one half x.","xMin":-7,"xMax":7,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"lines":[{"through":[[0,0],[1,1]]},{"through":[[0,0],[2,1]]}],"segments":[{"from":[4,0],"to":[4,4],"arrows":"end"},{"from":[5,0],"to":[5,2.5],"arrows":"end"}],"texts":[{"at":[5.15,4.4],"text":"y = x"},{"at":[5.3,1.5],"text":"y = x/2"}]}
{{< /apfigure >}}

Then show the vertical shift.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line y equals one half x and, three units below it, the parallel line y equals one half x minus 3. A vertical arrow at x equals 3 runs from (3, 1.5) down to (3, negative 1.5).","xMin":-7,"xMax":7,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"lines":[{"through":[[0,0],[2,1]]},{"through":[[0,-3],[2,-2]]}],"segments":[{"from":[3,1.5],"to":[3,-1.5],"arrows":"end"}],"texts":[{"at":[4.7,3.6],"text":"y = x/2"},{"at":[4.7,1.2],"text":"y = x/2 - 3"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=4+2x$ using transformations."
  answerDisplay="Stretch $y=x$ by a factor of 2 to get $y=2x$, then shift up 4 units to reach $y=2x+4$."
  ariaLabel="A blank coordinate grid running from −10 to 10 on both axes."
  hint="The stretch factor is the coefficient of $x$ and the shift is the constant term; the finished line passes through $(0,4)$ and $(1,6)$."
>}}
{"answer":{"slope":2,"intercept":4,"plotPoints":3},"grid":{"xMin":-10,"xMax":10,"yMin":-10,"yMax":10}}
{{< /graphplot >}}

{{< callout type="info" >}}
  **Q&A.** *In the example above, could we have sketched the graph by
  reversing the order of the transformations?*

  No. The order of the transformations follows the order of operations. When
  the function is evaluated at a given input, the corresponding output is
  calculated by following the order of operations. This is why we performed
  the compression first. For example, following the order, let the input be
  2.

  $$
  \begin{array}{lrcl}
  & f(2) &=& \tfrac{1}{2}(2)-3 \\[4pt]
  & &=& 1-3 \\[4pt]
  & &=& -2
  \end{array}
  $$
{{< /callout >}}

## Writing the equation for a function from the graph of a line

Recall that in *Linear Functions*, we wrote the equation for a linear
function from a graph. Now we can extend what we know about graphing linear
functions to analyze graphs a little more closely. Begin by taking a look at
the graph below. We can see right away that the graph crosses the $y$-axis at
the point $(0,4)$, so this is the $y$-intercept.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of a line f rising steeply from lower left to upper right, crossing the vertical axis at 4 and the horizontal axis at negative 2.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":15,"gridStep":2,"tickLabels":true,"tickStep":2,"lines":[{"through":[[0,4],[1,6]]}],"texts":[{"at":[2.1,7.4],"text":"f","italic":true}]}
{{< /apfigure >}}

Then we can calculate the slope by finding the rise and run. We can choose
any two points, but let's look at the point $(-2,0)$. To get from this point
to the $y$-intercept, we must move up 4 units (rise) and to the right 2 units
(run). So the slope must be

$$m=\frac{\text{rise}}{\text{run}}=\frac{4}{2}=2$$

Substituting the slope and $y$-intercept into the slope-intercept form of a
line gives

$$y=2x+4$$

{{< callout type="info" >}}
  **How to:** given a graph of a linear function, find the equation to
  describe the function.

  1. Identify the $y$-intercept of an equation.
  2. Choose two points to determine the slope.
  3. Substitute the $y$-intercept and slope into the slope-intercept form of
     a line.
{{< /callout >}}

**Example.** Match each equation of the linear functions with one of the
lines in the graph below.

$$f(x)=2x+3 \qquad g(x)=2x-3 \qquad h(x)=-2x+3 \qquad j(x)=\tfrac{1}{2}x+3$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"Four lines labelled I, II, III, and IV. Lines I and II cross the vertical axis at 3; line I is steep and rising, line II rises gently. Line III rises steeply and crosses the vertical axis at negative 3. Line IV falls steeply and crosses the vertical axis at 3.","xMin":-7,"xMax":7,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"lines":[{"through":[[0,3],[1,5]]},{"through":[[0,3],[2,4]]},{"through":[[0,-3],[1,-1]]},{"through":[[0,3],[1,1]]}],"texts":[{"at":[1.45,5.45],"text":"I"},{"at":[3.4,5.35],"text":"II","anchor":"end"},{"at":[4.35,4.5],"text":"III"},{"at":[4.3,-4.4],"text":"IV"}]}
{{< /apfigure >}}

**Solution.** Analyze the information for each function.

- $f(x)=2x+3$ has a slope of 2 and a $y$-intercept of 3. It must pass through
  the point $(0,3)$ and slant upward from left to right. We can use two
  points to find the slope, or we can compare it with the other functions
  listed. Function $g$ has the same slope, but a different $y$-intercept.
  Lines I and III have the same slant because they have the same slope. Line
  III does not pass through $(0,3)$, so $f$ must be represented by Line I.
- $g(x)=2x-3$ also has a slope of 2, but a $y$-intercept of $-3$. It must
  pass through the point $(0,-3)$ and slant upward from left to right. It
  must be represented by Line III.
- $h(x)=-2x+3$ has a slope of $-2$ and a $y$-intercept of 3. This is the only
  function listed with a negative slope, so it must be represented by Line IV
  because it slants downward from left to right.
- $j(x)=\tfrac{1}{2}x+3$ has a slope of $\tfrac{1}{2}$ and a $y$-intercept of
  3. It must pass through the point $(0,3)$ and slant upward from left to
  right. Lines I and II pass through $(0,3)$, but the slope of $j$ is less
  than the slope of $f$, so the line for $j$ must be flatter. This function
  is represented by Line II.

Now we can re-label the lines as below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same four lines relabelled: h of x equals negative 2x plus 3, j of x equals one half x plus 3, f of x equals 2x plus 3, and g of x equals 2x minus 3.","xMin":-7,"xMax":7,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"lines":[{"through":[[0,3],[1,5]]},{"through":[[0,3],[2,4]]},{"through":[[0,-3],[1,-1]]},{"through":[[0,3],[1,1]]}],"texts":[{"at":[-6.6,4.5],"text":"h(x) = -2x + 3"},{"at":[-6.6,2.2],"text":"j(x) = x/2 + 3"},{"at":[3.2,2.2],"text":"g(x) = 2x - 3"},{"at":[-6.6,-2.4],"text":"f(x) = 2x + 3"}]}
{{< /apfigure >}}

## Finding the x-intercept of a line

So far, we have been finding the $y$-intercepts of a function: the point at
which the graph of the function crosses the $y$-axis. A function may also
have an **$x$-intercept**, which is the $x$-coordinate of the point where the
graph of the function crosses the $x$-axis. In other words, it is the input
value when the output value is zero.

To find the $x$-intercept, set a function $f(x)$ equal to zero and solve for
the value of $x$. For example, consider the function shown.

$$f(x)=3x-6$$

Set the function equal to 0 and solve for $x$.

$$
\begin{array}{lrcl}
& 0 &=& 3x-6 \\[4pt]
& 6 &=& 3x \\[4pt]
& 2 &=& x \\[4pt]
& x &=& 2
\end{array}
$$

The graph of the function crosses the $x$-axis at the point $(2,0)$.

{{< callout type="info" >}}
  **Q&A.** *Do all linear functions have $x$-intercepts?*

  No. However, linear functions of the form $y=c$, where $c$ is a nonzero
  real number, are the only examples of linear functions with no
  $x$-intercept. For example, $y=5$ is a horizontal line 5 units above the
  $x$-axis. This function has no $x$-intercepts, as shown below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The horizontal line y equals 5, drawn 5 units above the horizontal axis and never meeting it.","xMin":-3,"xMax":3,"yMin":-1,"yMax":8,"unit":30,"tickLabels":true,"lines":[{"y":5}],"texts":[{"at":[1.15,5.45],"text":"y = 5"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **The $x$-intercept.** The **$x$-intercept** of the function is the value
  of $x$ when $f(x)=0$. It can be solved by the equation $0=mx+b$.
{{< /callout >}}

**Example.** Find the $x$-intercept of $f(x)=\tfrac{1}{2}x-3$.

**Solution.** Set the function equal to zero to solve for $x$.

$$
\begin{array}{lrcl}
& 0 &=& \tfrac{1}{2}x-3 \\[4pt]
& 3 &=& \tfrac{1}{2}x \\[4pt]
& 6 &=& x \\[4pt]
& x &=& 6
\end{array}
$$

The graph crosses the $x$-axis at the point $(6,0)$.

A graph of the function is shown below. We can see that the
$x$-intercept is $(6,0)$ as we expected.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals one half x minus 3, a line crossing the vertical axis at negative 3 and the horizontal axis at 6.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":15,"gridStep":2,"tickLabels":true,"tickStep":2,"lines":[{"through":[[0,-3],[6,0]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the $x$-intercept of $f(x)=\tfrac{1}{4}x-4$. Enter its $x$-coordinate."
  answer="16"
  answerDisplay="$0=\tfrac{1}{4}x-4$ gives $x=16$, so the $x$-intercept is $(16,0)$"
  hint="Set the function equal to 0, then undo the subtraction and the multiplication by $\tfrac{1}{4}$."
>}}

## Describing horizontal and vertical lines

There are two special cases of lines on a graph—horizontal and vertical
lines. A **horizontal line** indicates a constant output, or $y$-value. In
the graph below, we see that the output has a value of 2 for every input
value. The change in outputs between any two points, therefore, is 0. In the
slope formula, the numerator is 0, so the slope is 0. If we use $m=0$ in the
equation $f(x)=mx+b$, the equation simplifies to $f(x)=b$. In other words,
the value of the function is a constant. This graph represents the function
$f(x)=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The horizontal line f of x equals 2, two units above the horizontal axis, extending in both directions.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"lines":[{"y":2}],"texts":[{"at":[3.3,2.5],"text":"f","italic":true}]}
{{< /apfigure >}}

| $x$ | $-4$ | $-2$ | 0 | 2 | 4 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $y$ | 2 | 2 | 2 | 2 | 2 |

A **vertical line** indicates a constant input, or $x$-value. We can see that
the input value for every point on the line below is 2, but the output value
varies. Because this input value is mapped to more than one output value, a
vertical line does not represent a function. Notice that between any two
points, the change in the input values is zero. In the slope formula, the
denominator will be zero, so the slope of a vertical line is undefined.

$$m=\frac{\text{change of output}}{\text{change of input}}=\frac{\text{nonzero real number}}{0}$$

Notice that a vertical line, such as the one below, has an $x$-intercept, but
no $y$-intercept unless it's the line $x=0$. This graph represents the line
$x=2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The vertical line x equals 2, two units right of the vertical axis, extending up and down.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"lines":[{"x":2}]}
{{< /apfigure >}}

| $x$ | 2 | 2 | 2 | 2 | 2 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $y$ | $-4$ | $-2$ | 0 | 2 | 4 |

{{< callout type="info" >}}
  **Horizontal and vertical lines.** Lines can be horizontal or vertical.

  A **horizontal line** is a line defined by an equation in the form
  $f(x)=b$.

  A **vertical line** is a line defined by an equation in the form $x=a$.
{{< /callout >}}

**Example.** Write the equation of the line graphed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal line labelled f drawn 4 units below the horizontal axis.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":15,"gridStep":2,"tickLabels":true,"tickStep":2,"lines":[{"y":-4}],"texts":[{"at":[3,-3.4],"text":"f","italic":true}]}
{{< /apfigure >}}

**Solution.** For any $x$-value, the $y$-value is $-4$, so the equation is
$y=-4$.

**Example.** Write the equation of the line graphed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical line drawn 7 units right of the vertical axis.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":15,"gridStep":2,"tickLabels":true,"tickStep":2,"lines":[{"x":7}]}
{{< /apfigure >}}

**Solution.** The constant $x$-value is 7, so the equation is $x=7$.

## Determining whether lines are parallel or perpendicular

The two lines below are **parallel lines**: they will never intersect. Notice
that they have exactly the same steepness, which means their slopes are
identical. The only difference between the two lines is the $y$-intercept. If
we shifted one line vertically toward the $y$-intercept of the other, they
would become the same line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two parallel lines of slope negative three halves: y equals negative three halves x plus 1 and y equals negative three halves x plus 7.","xMin":-4,"xMax":6,"yMin":-3,"yMax":8,"unit":24,"tickLabels":true,"lines":[{"through":[[0,1],[2,-2]]},{"through":[[0,7],[2,4]]}]}
{{< /apfigure >}}

We can determine from their equations whether two lines are parallel by
comparing their slopes. If the slopes are the same and the $y$-intercepts are
different, the lines are parallel. If the slopes are different, the lines are
not parallel.

$$
\begin{array}{ll}
\left.\begin{array}{l} f(x)=-2x+6 \\ f(x)=-2x-4 \end{array}\right\}\ \text{parallel} \qquad &
\left.\begin{array}{l} f(x)=3x+2 \\ f(x)=2x+2 \end{array}\right\}\ \text{not parallel}
\end{array}
$$

Unlike parallel lines, **perpendicular lines** do intersect. Their
intersection forms a right, or 90-degree, angle. The two lines below are
perpendicular.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two perpendicular lines crossing at (1, 0): a steep rising line of slope 5 and a shallow falling line of slope negative one fifth.","xMin":-4,"xMax":4,"yMin":-8,"yMax":4,"unit":24,"tickLabels":true,"lines":[{"through":[[1,0],[2,5]]},{"through":[[1,0],[-4,1]]}],"segments":[{"from":[0.5097,0.0981],"to":[0.6078,0.5884]},{"from":[0.6078,0.5884],"to":[1.0981,0.4903]}]}
{{< /apfigure >}}

Perpendicular lines do not have the same slope. The slopes of perpendicular
lines are different from one another in a specific way. The slope of one line
is the negative reciprocal of the slope of the other line. The product of a
number and its reciprocal is 1. So, if $m_1$ and $m_2$ are negative
reciprocals of one another, they can be multiplied together to yield $-1$.

$$m_1m_2=-1$$

To find the reciprocal of a number, divide 1 by the number. So the reciprocal
of 8 is $\tfrac{1}{8}$, and the reciprocal of $\tfrac{1}{8}$ is 8. To find
the negative reciprocal, first find the reciprocal and then change the sign.

As with parallel lines, we can determine whether two lines are perpendicular
by comparing their slopes, assuming that the lines are neither horizontal nor
vertical. The slope of each line below is the negative reciprocal of the
other, so the lines are perpendicular.

$$
\begin{array}{ll}
f(x)=\tfrac{1}{4}x+2 & \text{negative reciprocal of }\tfrac{1}{4}\text{ is }-4 \\[4pt]
f(x)=-4x+3 & \text{negative reciprocal of }-4\text{ is }\tfrac{1}{4}
\end{array}
$$

The product of the slopes is $-1$.

$$-4\left(\frac{1}{4}\right)=-1$$

{{< callout type="info" >}}
  **Parallel and perpendicular lines.**

  Two lines are **parallel lines** if they do not intersect. The slopes of
  the lines are the same.

  $$f(x)=m_1x+b_1\ \text{and}\ g(x)=m_2x+b_2\ \text{are parallel if}\ m_1=m_2.$$

  If and only if $b_1=b_2$ and $m_1=m_2$, we say the lines coincide.
  Coincident lines are the same line.

  Two lines are **perpendicular lines** if they intersect at right angles.

  $$f(x)=m_1x+b_1\ \text{and}\ g(x)=m_2x+b_2\ \text{are perpendicular if}\ m_1m_2=-1,\ \text{and so}\ m_2=-\frac{1}{m_1}.$$
{{< /callout >}}

**Example.** Given the functions below, identify the functions whose graphs
are a pair of parallel lines and a pair of perpendicular lines.

$$
\begin{array}{ll}
f(x)=2x+3 \qquad & h(x)=-2x+2 \\[4pt]
g(x)=\tfrac{1}{2}x-4 \qquad & j(x)=2x-6
\end{array}
$$

**Solution.** Parallel lines have the same slope. Because the functions
$f(x)=2x+3$ and $j(x)=2x-6$ each have a slope of 2, they represent parallel
lines. Perpendicular lines have negative reciprocal slopes. Because $-2$ and
$\tfrac{1}{2}$ are negative reciprocals, the equations $g(x)=\tfrac{1}{2}x-4$
and $h(x)=-2x+2$ represent perpendicular lines.

A graph of the lines is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Four lines: f of x equals 2x plus 3 and j of x equals 2x minus 6 are parallel, while g of x equals one half x minus 4 and h of x equals negative 2x plus 2 meet at right angles.","xMin":-12,"xMax":12,"yMin":-12,"yMax":12,"unit":13,"margin":42,"gridStep":2,"tickLabels":true,"tickStep":2,"lines":[{"through":[[0,3],[1,5]]},{"through":[[0,-6],[1,-4]]},{"through":[[0,-4],[2,-3]]},{"through":[[0,2],[1,0]]}],"texts":[{"at":[-12.4,13.3],"text":"h(x) = -2x + 2"},{"at":[1.2,13.3],"text":"f(x) = 2x + 3"},{"at":[-12.4,-13.4],"text":"g(x) = x/2 - 4"},{"at":[1.2,-13.4],"text":"j(x) = 2x - 6"}]}
{{< /apfigure >}}

The graph shows that the lines $f(x)=2x+3$ and $j(x)=2x-6$ are parallel, and
the lines $g(x)=\tfrac{1}{2}x-4$ and $h(x)=-2x+2$ are perpendicular.

## Writing the equation of a line parallel or perpendicular to a given line

If we know the equation of a line, we can use what we know about slope to
write the equation of a line that is either parallel or perpendicular to the
given line.

## Writing equations of parallel lines

Suppose for example, we are given the following equation.

$$f(x)=3x+1$$

We know that the slope of the line formed by the function is 3. We also know
that the $y$-intercept is $(0,1)$. Any other line with a slope of 3 will be
parallel to $f(x)$. So the lines formed by all of the following functions
will be parallel to $f(x)$.

$$
\begin{array}{l}
g(x)=3x+6 \\[4pt]
h(x)=3x+1 \\[4pt]
p(x)=3x+\tfrac{2}{3}
\end{array}
$$

Suppose then we want to write the equation of a line that is parallel to $f$
and passes through the point $(1,7)$. We already know that the slope is 3. We
just need to determine which value for $b$ will give the correct line. We can
begin with the point-slope form of an equation for a line, and then rewrite
it in the slope-intercept form.

$$
\begin{array}{lrcl}
& y-y_1 &=& m(x-x_1) \\[4pt]
& y-7 &=& 3(x-1) \\[4pt]
& y-7 &=& 3x-3 \\[4pt]
& y &=& 3x+4
\end{array}
$$

So $g(x)=3x+4$ is parallel to $f(x)=3x+1$ and passes through the point
$(1,7)$.

{{< callout type="info" >}}
  **How to:** given the equation of a function and a point through which its
  graph passes, write the equation of a line parallel to the given line that
  passes through the given point.

  1. Find the slope of the function.
  2. Substitute the given values into either the general point-slope equation
     or the slope-intercept equation for a line.
  3. Simplify.
{{< /callout >}}

**Example.** Find a line parallel to the graph of $f(x)=3x+6$ that passes
through the point $(3,0)$.

**Solution.** The slope of the given line is 3. If we choose the
slope-intercept form, we can substitute $m=3$, $x=3$, and $f(x)=0$ into the
slope-intercept form to find the $y$-intercept.

$$
\begin{array}{lrcl}
& g(x) &=& 3x+b \\[4pt]
& 0 &=& 3(3)+b \\[4pt]
& b &=& -9
\end{array}
$$

The line parallel to $f(x)$ that passes through $(3,0)$ is $g(x)=3x-9$.

We can confirm that the two lines are parallel by graphing
them. The graph below shows that the two lines will never intersect; a dashed
right-1, up-3 step on each line makes the shared slope of 3 visible.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two parallel lines of slope 3: y equals 3x plus 6 and y equals 3x minus 9. A dashed right-1, up-3 step is drawn on each.","xMin":-6,"xMax":6,"yMin":-5,"yMax":5,"unit":26,"tickLabels":true,"lines":[{"through":[[0,6],[1,9]]},{"through":[[3,0],[4,3]]}],"segments":[{"from":[-2,0],"to":[-1,0],"dashed":true},{"from":[-1,0],"to":[-1,3],"dashed":true,"arrows":"end"},{"from":[3,0],"to":[4,0],"dashed":true},{"from":[4,0],"to":[4,3],"dashed":true,"arrows":"end"}],"texts":[{"at":[-0.05,1.35],"text":"Up 3","anchor":"end"},{"at":[-1.5,-1.6],"text":"Right 1","anchor":"middle"},{"at":[4.3,1.2],"text":"Up 3"},{"at":[3.4,-1.6],"text":"Right 1"},{"at":[-5.9,-1.6],"text":"y = 3x + 6"},{"at":[2,-4.4],"text":"y = 3x - 9"}]}
{{< /apfigure >}}

## Writing equations of perpendicular lines

We can use a very similar process to write the equation for a line
perpendicular to a given line. Instead of using the same slope, however, we
use the negative reciprocal of the given slope. Suppose we are given the
following function:

$$f(x)=2x+4$$

The slope of the line is 2, and its negative reciprocal is $-\tfrac{1}{2}$.
Any function with a slope of $-\tfrac{1}{2}$ will be perpendicular to $f(x)$.
So the lines formed by all of the following functions will be perpendicular
to $f(x)$.

$$
\begin{array}{l}
g(x)=-\tfrac{1}{2}x+4 \\[4pt]
h(x)=-\tfrac{1}{2}x+2 \\[4pt]
p(x)=-\tfrac{1}{2}x-\tfrac{1}{2}
\end{array}
$$

As before, we can narrow down our choices for a particular perpendicular line
if we know that it passes through a given point. Suppose then we want to
write the equation of a line that is perpendicular to $f(x)$ and passes
through the point $(4,0)$. We already know that the slope is $-\tfrac{1}{2}$.
Now we can use the point to find the $y$-intercept by substituting the given
values into the slope-intercept form of a line and solving for $b$.

$$
\begin{array}{lrcl}
& g(x) &=& mx+b \\[4pt]
& 0 &=& -\tfrac{1}{2}(4)+b \\[4pt]
& 0 &=& -2+b \\[4pt]
& 2 &=& b \\[4pt]
& b &=& 2
\end{array}
$$

The equation for the function with a slope of $-\tfrac{1}{2}$ and a
$y$-intercept of 2 is

$$g(x)=-\tfrac{1}{2}x+2$$

So $g(x)=-\tfrac{1}{2}x+2$ is perpendicular to $f(x)=2x+4$ and passes through
the point $(4,0)$. Be aware that perpendicular lines may not look obviously
perpendicular on a graphing calculator unless we use the square zoom feature.

{{< callout type="info" >}}
  **Q&A.** *A horizontal line has a slope of zero and a vertical line has an
  undefined slope. These two lines are perpendicular, but the product of
  their slopes is not $-1$. Doesn't this fact contradict the definition of
  perpendicular lines?*

  No. For two perpendicular linear functions, the product of their slopes is
  $-1$. However, a vertical line is not a function, so the definition is not
  contradicted.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the equation of a function and a point through which its
  graph passes, write the equation of a line perpendicular to the given line.

  1. Find the slope of the function.
  2. Determine the negative reciprocal of the slope.
  3. Substitute the new slope and the values for $x$ and $y$ from the
     coordinate pair provided into $g(x)=mx+b$.
  4. Solve for $b$.
  5. Write the equation for the line.
{{< /callout >}}

**Example.** Find the equation of a line perpendicular to $f(x)=3x+3$ that
passes through the point $(3,0)$.

**Solution.** The original line has slope $m=3$, so the slope of the
perpendicular line will be its negative reciprocal, or $-\tfrac{1}{3}$. Using
this slope and the given point, we can find the equation for the line.

$$
\begin{array}{lrcl}
& g(x) &=& -\tfrac{1}{3}x+b \\[4pt]
& 0 &=& -\tfrac{1}{3}(3)+b \\[4pt]
& 1 &=& b \\[4pt]
& b &=& 1
\end{array}
$$

The line perpendicular to $f(x)$ that passes through $(3,0)$ is
$g(x)=-\tfrac{1}{3}x+1$.

A graph of the two lines is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The steep line f of x equals 3x plus 3 and the shallow falling line g of x equals negative one third x plus 1, meeting at right angles. The line g crosses the horizontal axis at 3.","xMin":-6,"xMax":6,"yMin":-4,"yMax":10,"unit":24,"tickLabels":true,"lines":[{"through":[[0,3],[1,6]]},{"through":[[0,1],[3,0]]}],"texts":[{"at":[-5.7,3.7],"text":"g(x) = -x/3 + 1"},{"at":[-5.9,-2.5],"text":"f(x) = 3x + 3"}]}
{{< /apfigure >}}

{{< fillin
  question="Given the function $h(x)=2x-4$, write an equation for the line passing through $(0,0)$ that is parallel to $h$. Enter the expression that $y$ equals."
  answer="2x"
  answerDisplay="$y=2x$"
  hint="Parallel lines share a slope, and a line through the origin has $y$-intercept 0."
>}}

{{< fillin
  question="Given the function $h(x)=2x-4$, write an equation for the line passing through $(0,0)$ that is perpendicular to $h$. Enter the expression that $y$ equals."
  answer="-\frac{1}{2}x"
  answerDisplay="$y=-\tfrac{1}{2}x$"
  hint="Use the negative reciprocal of 2 as the slope, and remember the line passes through the origin."
>}}

{{< callout type="info" >}}
  **How to:** given two points on a line and a third point, write the
  equation of the perpendicular line that passes through the point.

  1. Determine the slope of the line passing through the points.
  2. Find the negative reciprocal of the slope.
  3. Use the slope-intercept form or point-slope form to write the equation
     by substituting the known values.
  4. Simplify.
{{< /callout >}}

**Example.** A line passes through the points $(-2,6)$ and $(4,5)$. Find the
equation of a perpendicular line that passes through the point $(4,5)$.

**Solution.** From the two points of the given line, we can calculate the
slope of that line.

$$
\begin{array}{lrcl}
& m_1 &=& \tfrac{5-6}{4-(-2)} \\[4pt]
& &=& \tfrac{-1}{6} \\[4pt]
& &=& -\tfrac{1}{6}
\end{array}
$$

Find the negative reciprocal of the slope.

$$
\begin{array}{lrcl}
& m_2 &=& \tfrac{-1}{-\tfrac{1}{6}} \\[4pt]
& &=& -1\left(-\tfrac{6}{1}\right) \\[4pt]
& &=& 6
\end{array}
$$

We can then solve for the $y$-intercept of the line passing through the point
$(4,5)$.

$$
\begin{array}{lrcl}
& g(x) &=& 6x+b \\[4pt]
& 5 &=& 6(4)+b \\[4pt]
& 5 &=& 24+b \\[4pt]
& -19 &=& b \\[4pt]
& b &=& -19
\end{array}
$$

The equation for the line that is perpendicular to the line passing through
the two given points and also passes through point $(4,5)$ is

$$y=6x-19$$

{{< fillin
  question="A line passes through the points $(-2,-15)$ and $(2,-3)$. Find the equation of a perpendicular line that passes through the point $(6,4)$. Enter the expression that $y$ equals."
  answer="-\frac{1}{3}x+6"
  answerDisplay="$y=-\tfrac{1}{3}x+6$"
  hint="The slope through the two given points is $\tfrac{-3-(-15)}{2-(-2)}$; take its negative reciprocal, then substitute $(6,4)$ to find $b$."
>}}

## Solving a system of linear equations using a graph

A system of linear equations includes two or more linear equations. The
graphs of two lines will intersect at a single point if they are not
parallel. Two parallel lines can also intersect if they are coincident, which
means they are the same line and they intersect at every point. For two lines
that are not parallel, the single point of intersection will satisfy both
equations and therefore represent the solution to the system.

To find this point when the equations are given as functions, we can solve
for an input value so that $f(x)=g(x)$. In other words, we can set the
formulas for the lines equal to one another, and solve for the input that
satisfies the equation.

**Example.** Find the point of intersection of the lines $h(t)=3t-4$ and
$j(t)=5-t$.

**Solution.** Set $h(t)=j(t)$.

$$
\begin{array}{lrcl}
& 3t-4 &=& 5-t \\[4pt]
& 4t &=& 9 \\[4pt]
& t &=& \tfrac{9}{4}
\end{array}
$$

This tells us the lines intersect when the input is $\tfrac{9}{4}$.

We can then find the output value of the intersection point by evaluating
either function at this input.

$$
\begin{array}{lrcl}
& j\left(\tfrac{9}{4}\right) &=& 5-\tfrac{9}{4} \\[4pt]
& &=& \tfrac{11}{4}
\end{array}
$$

These lines intersect at the point $\left(\tfrac{9}{4},\tfrac{11}{4}\right)$.

Looking at the graph below, this result seems reasonable.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The rising line h of t equals 3t minus 4 and the falling line j of t equals 5 minus t crossing at the marked point (9 over 4, 11 over 4).","xMin":-2,"xMax":8,"yMin":-5,"yMax":7,"unit":24,"tickLabels":true,"xLabel":"t","yLabel":"y","lines":[{"through":[[0,-4],[1,-1]]},{"through":[[0,5],[5,0]]}],"points":[{"at":[2.25,2.75]}],"texts":[{"at":[2.25,2.75],"text":"(9/4, 11/4)","dx":10,"dy":-5},{"at":[1.35,5.9],"text":"h(t)","italic":true},{"at":[4.4,0.9],"text":"j(t)","italic":true}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *If we were asked to find the point of intersection of two
  distinct parallel lines, should something in the solution process alert us
  to the fact that there are no solutions?*

  Yes. After setting the two equations equal to one another, the result would
  be the contradiction "0 = nonzero real number."
{{< /callout >}}

Use the graph of $h(t)=3t-4$ and $j(t)=5-t$ above to answer the following
questions about $j$.

{{< fillin
  question="Find the $x$-intercept of $j(t)=5-t$. Enter its $t$-coordinate."
  answer="5"
  answerDisplay="$5-t=0$ gives $t=5$, so the intercept is $(5,0)$"
  hint="The graph crosses the horizontal axis where the output is 0."
>}}

{{< fillin
  question="Find the slope of $j(t)=5-t$."
  answer="-1"
  answerDisplay="$-1$"
  hint="Rewrite the rule in the form $mt+b$; the coefficient of $t$ is the slope."
>}}

{{< multiplechoice
  question="Which description transforms the identity toolkit function $f(x)=x$ into $j(t)=5-t$?"
  answer="A vertical flip over the horizontal axis, then a shift up 5 units"
  hint="Compare the slope of $j$ with the slope of the identity function, then compare their $y$-intercepts."
>}}
A shift up 5 units, with no reflection
A vertical flip over the horizontal axis, then a shift down 5 units
A vertical stretch by a factor of 5
A vertical flip over the horizontal axis, then a shift up 5 units
{{< /multiplechoice >}}

**Example.** A company sells sports helmets. The company incurs a one-time
fixed cost of \$250,000. Each helmet costs \$120 to produce, and sells for
\$140. Find the cost function $C$ to produce $x$ helmets, in dollars; the
revenue function $R$ from the sales of $x$ helmets, in dollars; and the
break-even point, the point of intersection of the two graphs $C$ and $R$.

**Solution.** The cost function is the sum of the fixed cost, \$250,000, and
the variable cost, \$120 per helmet.

$$C(x)=120x+250{,}000$$

The revenue function is the total revenue from the sale of $x$ helmets.

$$R(x)=140x$$

The break-even point is the point of intersection of the graph of the cost
and revenue functions. To find the $x$-coordinate of the coordinate pair of
the point of intersection, set the two equations equal, and solve for $x$.

$$
\begin{array}{lrcl}
& C(x) &=& R(x) \\[4pt]
& 250{,}000+120x &=& 140x \\[4pt]
& 250{,}000 &=& 20x \\[4pt]
& 12{,}500 &=& x \\[4pt]
& x &=& 12{,}500
\end{array}
$$

To find $y$, evaluate either the revenue or the cost function at 12,500.

$$
\begin{array}{lrcl}
& R(12{,}500) &=& 140(12{,}500) \\[4pt]
& &=& \$1{,}750{,}000
\end{array}
$$

The break-even point is $(12{,}500,\ 1{,}750{,}000)$.

This means if the company sells 12,500 helmets, they break
even; both the sales and cost incurred equaled 1.75 million dollars. See the
graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Cost and revenue for sports helmets. The cost line C starts at 250,000 dollars and the revenue line R starts at the origin; the steeper revenue line overtakes cost at the marked break-even point (12,500, 1,750,000). Left of that point the company loses money; right of it the company makes a profit.","xMin":0,"xMax":20000,"yMin":0,"yMax":2750000,"xUnit":0.022,"yUnit":0.00013,"margin":74,"maxWidth":500,"grid":false,"tickLabels":true,"xTickStep":20000,"yTickStep":1000000,"segments":[{"from":[0,250000],"to":[19500,2590000],"arrows":"end"},{"from":[0,0],"to":[19000,2660000],"arrows":"end"},{"from":[5500,1900000],"to":[5500,800000],"arrows":"end"},{"from":[15400,1420000],"to":[14100,2050000],"arrows":"end"}],"points":[{"at":[12500,1750000]}],"texts":[{"at":[0,0],"text":"0","anchor":"end","dx":-6,"dy":15},{"at":[12500,1750000],"text":"(12,500, 1,750,000)","anchor":"end","dx":-12,"dy":-6},{"at":[700,2150000],"text":"sales < cost"},{"at":[700,1990000],"text":"Company loses money"},{"at":[13000,1300000],"text":"cost < sales"},{"at":[13000,1140000],"text":"Company makes a profit"},{"at":[6300,1180000],"text":"C","italic":true},{"at":[7600,890000],"text":"R","italic":true}]}
{{< /apfigure >}}

## Key concepts

- Linear functions may be graphed by plotting points or by using the
  $y$-intercept and slope.
- Graphs of linear functions may be transformed by using shifts up, down,
  left, or right, as well as through stretches, compressions, and
  reflections.
- The $y$-intercept and slope of a line may be used to write the equation of
  a line.
- The $x$-intercept is the point at which the graph of a linear function
  crosses the $x$-axis.
- Horizontal lines are written in the form $f(x)=b$.
- Vertical lines are written in the form $x=b$.
- Parallel lines have the same slope.
- Perpendicular lines have negative reciprocal slopes, assuming neither is
  vertical.
- A line parallel to another line, passing through a given point, may be
  found by substituting the slope value of the line and the $x$- and
  $y$-values of the given point into the equation $f(x)=mx+b$, and using the
  $b$ that results. Similarly, the point-slope form of an equation can also
  be used.
- A line perpendicular to another line, passing through a given point, may be
  found in the same manner, with the exception of using the negative
  reciprocal slope.
- A system of linear equations may be solved by setting the two equations
  equal to one another and solving for $x$. The $y$-value may be found by
  evaluating either one of the original equations using this $x$-value.
- A system of linear equations may also be solved by finding the point of
  intersection on a graph.

## Key terms

**$x$-intercept** — the point on the graph of a linear function when the
output value is 0; the point at which the graph crosses the horizontal axis.
**horizontal line** — a line defined by $f(x)=b$, where $b$ is a real number.
The slope of a horizontal line is 0. **vertical line** — a line defined by
$x=a$, where $a$ is a real number. The slope of a vertical line is undefined.
**parallel lines** — two or more lines with the same slope. **perpendicular
lines** — two lines that intersect at right angles and have slopes that are
negative reciprocals of each other.

## Practice

### Graph linear functions

{{< graphplot
  question="Graph the line with $x$-intercept $(-2,0)$ and $y$-intercept $(0,4)$."
  answerDisplay="The line through $(-2,0)$ and $(0,4)$, i.e. $y=2x+4$"
  ariaLabel="A blank coordinate grid running from −8 to 8 on both axes."
  hint="Use the two intercepts to find the slope: $m=\tfrac{4-0}{0-(-2)}=2$; the $y$-intercept is $4$."
>}}
{"answer":{"slope":2,"intercept":4,"plotPoints":3},"grid":{"xMin":-8,"xMax":8,"yMin":-8,"yMax":8}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the line $x=-2$."
  answerDisplay="The vertical line through $(-2,0)$"
  ariaLabel="A blank coordinate grid running from −8 to 8 on both axes."
  hint="Every point on this line has $x$-coordinate $-2$, no matter its $y$-coordinate, so the line is vertical."
>}}
{"answer":{"x":-2,"plotPoints":3},"grid":{"xMin":-8,"xMax":8,"yMin":-8,"yMax":8}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the function $q(x)=3$."
  answerDisplay="The horizontal line through $(0,3)$"
  ariaLabel="A blank coordinate grid running from −8 to 8 on both axes."
  hint="The output is $3$ for every input, so the graph is a horizontal line."
>}}
{"answer":{"y":3,"plotPoints":3},"grid":{"xMin":-8,"xMax":8,"yMin":-8,"yMax":8}}
{{< /graphplot >}}

{{< multiplechoice
  question="Which graph shows the linear function $f(x)=3x+2$?"
  mode="graph"
  answerIndex="2"
  hint="Read the slope and the $y$-intercept from $f(x)=3x+2$: the line crosses the $y$-axis at $(0,2)$ and rises $3$ units for every $1$ unit to the right."
>}}
{"ariaLabel":"A line falling from left to right through (negative 1, 2), (0, negative 1), and (1, negative 4).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":-3,"intercept":-1}]}
===OPT===
{"ariaLabel":"A line rising from left to right through (negative 2, 0), (0, 2), and (2, 4).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":1,"intercept":2}]}
===OPT===
{"ariaLabel":"A line rising from left to right through (negative 1, negative 1), (0, 2), and (1, 5).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":3,"intercept":2}]}
===OPT===
{"ariaLabel":"A horizontal line through (0, 2).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"y":2}]}
{{< /multiplechoice >}}

### Write the equation for a linear function from the graph of a line

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal line on a coordinate grid running from -6 to 6 on both axes, crossing the vertical axis at 3.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":24,"tickLabels":true,"lines":[{"y":3}]}
{{< /apfigure >}}

{{< fillin
  question="Write the equation of the horizontal line shown in the graph above. Enter the expression that $y$ equals."
  answer="3"
  answerDisplay="$y=3$"
  hint="A horizontal line has equation $y=b$, where $b$ is its constant output value."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical line on a coordinate grid running from -6 to 6 on both axes, crossing the horizontal axis at negative 3.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":24,"tickLabels":true,"lines":[{"x":-3}]}
{{< /apfigure >}}

{{< fillin
  question="Write the equation of the vertical line shown in the graph above."
  answer="x=-3"
  hint="Every point on a vertical line shares the same $x$-coordinate; read it directly from the graph."
>}}

### Determine whether the graphs of two lines are parallel or perpendicular given their equations

{{< multiplechoice
  question="Are the lines $3y+x=12$ and $-y=8x+1$ parallel, perpendicular, or neither?"
  answer="neither"
  hint="Rewrite both equations in slope-intercept form and compare the slopes."
>}}
parallel
perpendicular
neither
{{< /multiplechoice >}}

{{< multiplechoice
  question="Are the lines $6x-9y=10$ and $3x+2y=1$ parallel, perpendicular, or neither?"
  answer="perpendicular"
  hint="Solve each equation for $y$, then multiply the two slopes together; a product of $-1$ means perpendicular."
>}}
parallel
neither
perpendicular
{{< /multiplechoice >}}

{{< multiplechoice
  question="Are the lines $y=\tfrac{3}{4}x+1$ and $-3x+4y=1$ parallel, perpendicular, or neither?"
  answer="parallel"
  hint="Rewrite the second equation in slope-intercept form and compare its slope with the first line's."
>}}
parallel
neither
perpendicular
{{< /multiplechoice >}}

### Write the equation of a line parallel or perpendicular to a given line

{{< fillin
  question="Write an equation for a line parallel to $g(x)=3x-1$ and passing through the point $(4,9)$. Enter the expression that $y$ equals."
  answer="3x-3"
  answerDisplay="$y=3x-3$"
  hint="Parallel lines share a slope; substitute $(4,9)$ into $y=3x+b$ to solve for $b$."
>}}

{{< fillin
  question="Write an equation for a line perpendicular to $p(t)=3t+4$ and passing through the point $(3,1)$. Enter the expression that $y$ equals."
  answer="-\tfrac{1}{3}t+2"
  answerDisplay="$y=-\tfrac{1}{3}t+2$"
  hint="Use the negative reciprocal of $3$ as the slope, then substitute $(3,1)$ to solve for the intercept."
>}}

{{< fillin
  question="Write an equation for a line perpendicular to $g(x)=-0.01x+2.01$ and passing through the point $(1,2)$. Enter the expression that $y$ equals."
  answer="100x-98"
  answerDisplay="$y=100x-98$"
  hint="The negative reciprocal of $-0.01$ is $100$; substitute $(1,2)$ into $y=100x+b$ to solve for $b$."
>}}

### Solve a system of linear equations

{{< fillin
  question="Find the point of intersection of the lines $f(x)=2x+5$ and $g(x)=-3x-5$. Enter your answer as an ordered pair."
  answer="(-2,1)"
  answerDisplay="$(-2,1)$"
  hint="Set $2x+5=-3x-5$ and solve for $x$, then evaluate either function at that $x$."
>}}

{{< fillin
  question="Find the point of intersection of the lines $2x=y-3$ and $y+4x=15$. Enter your answer as an ordered pair."
  answer="(2,7)"
  answerDisplay="$(2,7)$"
  hint="Solve the first equation for $y$, substitute into the second equation, and solve for $x$."
>}}

{{< fillin
  question="Find the point of intersection of the lines $5x+3y=-65$ and $x-y=-5$. Enter your answer as an ordered pair."
  answer="(-10,-5)"
  answerDisplay="$(-10,-5)$"
  hint="Solve the second equation for $x$ in terms of $y$, then substitute into the first equation."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 2.2: Graphs of Linear Functions](https://openstax.org/books/precalculus-2e/pages/2-2-graphs-of-linear-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated all twenty-three graphs as accessible inline SVGs generated from explicit formulas, matching the printed window, intercepts, slope triangles, and annotations of each; because these figures are monochrome, every line the source distinguishes only by colour is labelled with its own formula, written compactly ($x/2$ for $\tfrac{1}{2}x$) so that the eight stretch lines and the five shift lines still fit one grid, and the prose names each family in full; presented the horizontal-line and vertical-line coordinate tables as Markdown tables and the "change of output over change of input" annotation as a displayed fraction; omitted the media links; adapted fourteen selected end-of-section exercises, drawn from the Verbal, Algebraic, Graphical, Extensions, and Real-World Applications subsections, into the interactive exercises of the section-final Practice section below, recreating two of the source's graph-reading items as accessible figures generated from the same explicit formulas; and converted the in-page practice problems ("Try Its") into interactive exercises with instant feedback, using the graphing component where the source answer is itself a graph, multiple choice where the answer is a verbal transformation description, and a single requested coordinate where the source answer is an ordered pair. Two response-mode adaptations are worth naming: where the source asks for any point with a negative $x$-value, this page asks for the output at $x=-3$, one of the source's own listed answers, so that a single response can be graded; and of the six parts of the last Try It, this page keeps the $x$-intercept, the slope, and the transformation description, the three that are not already exercised elsewhere in the section. Two corrections to the source art are disclosed here: the Analysis figure for the perpendicular-line example is drawn with that example's own line $f(x)=3x+3$, where the printed figure is labelled $f(x)=3x+6$; and the break-even figure's left-hand annotation reads "sales &lt; cost" above "Company loses money", where the printed art reads "cost &lt; sales", which contradicts both the label beneath it and the figure's own alt text. Two further upstream defects were found and deliberately not propagated: the pinned CNXML's alt text for the parallel-lines figure gives its slopes as $-\tfrac{2}{3}$ while the printed geometry is $-\tfrac{3}{2}$, and its alt text for the write-the-equation figure describes a line through $(0,3)$ while both the printed figure and the surrounding prose give $y=2x+4$; in each case this page follows the printed figure and the prose.</small>
