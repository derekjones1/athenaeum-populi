---
title: Slope of a Line
description: >-
  Finding and using slope, graphing lines from slope and intercept, choosing a
  graphing method, interpreting applications, and identifying parallel and
  perpendicular lines — adapted from OpenStax Intermediate Algebra 2e, Section 3.2.
source_section: "3.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the slope of a line
- Graph a line given a point and the slope
- Graph a line using its slope and intercept
- Choose the most convenient method to graph a line
- Graph and interpret applications of slope-intercept
- Use slopes to identify parallel and perpendicular lines
{{< /callout >}}

## Find the slope of a line

When you graph linear equations, you may notice that some lines tilt up as
they go from left to right and some lines tilt down. Some lines are very steep
and some lines are flatter.

In mathematics, the measure of the steepness of a line is called the **slope**
of the line. The concept of slope has many applications in the real world. In
construction, the pitch of a roof, the slant of the plumbing pipes, and the
steepness of the stairs are all applications of slope, and as you ski or jog
down a hill, you definitely experience slope.

We can assign a numerical value to the slope of a line by finding the ratio of
the rise and run. The **rise** is the amount the vertical distance changes
while the **run** measures the horizontal change. Slope is a rate of change.

{{< callout type="info" >}}
  **Slope of a line.** The slope of a line is
  $m = \tfrac{\text{rise}}{\text{run}}$. The rise measures the vertical change
  and the run measures the horizontal change.
{{< /callout >}}

To find the slope of a line, we locate two points on the line whose
coordinates are integers. Then we sketch a right triangle where the two
points are vertices and one side is horizontal and one side is vertical. We
measure the distance along the vertical and horizontal sides of the triangle.
The vertical distance is called the rise and the horizontal distance is
called the run.

{{< callout type="info" >}}
  **Find the slope of a line from its graph using
  $m = \tfrac{\text{rise}}{\text{run}}$.**

  1. Locate two points on the line whose coordinates are integers.
  2. Starting with one point, sketch a right triangle, going from the first
     point to the second point.
  3. Count the rise and the run on the legs of the triangle.
  4. Take the ratio of rise to run to find the slope:
     $m = \tfrac{\text{rise}}{\text{run}}$.
{{< /callout >}}

**Example.** Find the slope of the line shown.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −2 to 10 and y from −2 to 8. A decreasing line through (0, 5) and (3, 3), with a downward rise of 2 and a run of 3 marked between the points.","xMin":-2,"xMax":10,"yMin":-2,"yMax":8,"unit":28,"tickLabels":true,"tickStep":2,"lines":[{"through":[[0,5],[3,3]]}],"points":[{"at":[0,5],"label":"(0, 5)","labelSide":"ne"},{"at":[3,3],"label":"(3, 3)","labelSide":"ne"}],"slopeTriangles":[{"from":[0,5],"to":[3,3]}],"texts":[{"at":[-0.2,4.4],"text":"rise = −2","anchor":"end"},{"at":[1.5,2.55],"text":"run = 3","anchor":"middle"}]}
{{< /apfigure >}}

Locate two points on the graph whose coordinates are integers: $(0,5)$ and
$(3,3)$. Starting at $(0,5)$, sketch a right triangle to $(3,3)$. Count the
rise—since it goes down, it is negative. The rise is $-2$. Count the run. The
run is $3$. Use the slope formula and substitute the values:

$$
\begin{array}{lrcl}
\text{Use the slope formula.} & m &=& \tfrac{\text{rise}}{\text{run}} \\[4pt]
\text{Substitute the values.} & m &=& \tfrac{-2}{3} \\[4pt]
\text{Simplify.} & m &=& -\tfrac{2}{3}
\end{array}
$$

The slope of the line is $-\tfrac{2}{3}$. So $y$ decreases by $2$ units as
$x$ increases by $3$ units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −4 to 4 and y from −6 to 1. A line falls from left to right through the points (0, −2) and (3, −6).","xMin":-4,"xMax":4,"yMin":-6,"yMax":1,"unit":28,"tickLabels":true,"lines":[{"through":[[0,-2],[3,-6]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the slope of the line shown above, as a fraction."
  answer="-\frac{4}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{4}{3}$"
  hint="Locate two points on the line with integer coordinates, sketch a right triangle from the left point to the right one, and count the rise and the run."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −3 to 6 and y from −3 to 3. A line falls from left to right through the points (0, 1) and (5, −2).","xMin":-3,"xMax":6,"yMin":-3,"yMax":3,"unit":28,"tickLabels":true,"lines":[{"through":[[0,1],[5,-2]]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the slope of the line shown above, as a fraction."
  answer="-\frac{3}{5}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{3}{5}$"
  hint="Locate two points on the line with integer coordinates, sketch a right triangle from the left point to the right one, and count the rise and the run."
>}}

How do we find the slope of horizontal and vertical lines? Between two points
of the horizontal line $y=4$ that are $3$ units apart, the rise is $0$ and the
run is $3$, so $m=\tfrac{0}{3}=0$. Between two points of the vertical line
$x=3$ that are $2$ units apart, the rise is $2$ and the run is $0$. Its slope
is undefined since division by zero is undefined.

{{< callout type="info" >}}
  **Slope of a horizontal and vertical line.** The slope of a horizontal
  line, $y=b$, is $0$. The slope of a vertical line, $x=a$, is undefined.
{{< /callout >}}

**Example.** Find the slope of each line: (a) $x=8$ (b) $y=-5$.

(a) $x=8$ is a vertical line. Its slope is undefined.

(b) $y=-5$ is a horizontal line. It has slope $0$.

{{< multiplechoice
  question="Find the slope of the line $x=-4$."
  hint="Decide whether the line is horizontal or vertical, then think about its rise and its run."
  answer="undefined"
>}}
$-4$
$1$
undefined
$0$
{{< /multiplechoice >}}

{{< fillin
  question="Find the slope of the line $y=7$."
  answer="0"
  answerForm="decimal"
  hint="Decide whether the line is horizontal or vertical, then think about its rise and its run."
>}}

Sometimes we'll need to find the slope of a line between two points when we
don't have a graph to count out the rise and the run. We could plot the
points on grid paper, then count out the rise and the run, but there is a way
to find the slope without graphing.

We use $(x_1,y_1)$ to identify the first point and $(x_2,y_2)$ to identify
the second point. The rise can be found by subtracting the $y$-coordinates,
and the run can be found by subtracting the $x$-coordinates.

{{< callout type="info" >}}
  **Slope of a line between two points.** The slope of the line between two
  points $(x_1,y_1)$ and $(x_2,y_2)$ is
  $$m=\frac{y_2-y_1}{x_2-x_1}.$$
  The slope is $y$ of the second point minus $y$ of the first point, over $x$
  of the second point minus $x$ of the first point.
{{< /callout >}}

**Example.** Use the slope formula to find the slope of the line through the
points $(-2,-3)$ and $(-7,4)$.

We'll call $(-2,-3)$ point #1 and $(-7,4)$ point #2. Use the slope formula,
substitute the values, and simplify:

$$
\begin{array}{lrcl}
\text{Use the slope formula.} & m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[10pt]
\text{Substitute the values.} & m &=& \tfrac{4-(-3)}{-7-(-2)} \\[10pt]
\text{Simplify.} & m &=& \tfrac{7}{-5} \\[10pt]
&&=& -\tfrac{7}{5}
\end{array}
$$

{{< fillin
  question="Use the slope formula to find the slope of the line through the points $(-3,4)$ and $(2,-1)$."
  answer="-1"
  answerForm="decimal"
  hint="Substitute the coordinates into $m=\tfrac{y_2-y_1}{x_2-x_1}$."
>}}

{{< fillin
  question="Use the slope formula to find the slope of the line through the points $(-2,6)$ and $(-3,-4)$."
  answer="10"
  answerForm="decimal"
  hint="Keep the subtraction order the same in numerator and denominator."
>}}

## Graph a line given a point and the slope

Up to now, in this chapter, we have graphed lines by plotting points, by
using intercepts, and by recognizing horizontal and vertical lines. We can
also graph a line when we know one point and the slope of the line. We will
start by plotting the point and then use the definition of slope to draw the
graph of the line.

**Example. How to graph a line given a point and the slope.** Graph the line
passing through the point $(1,-1)$ whose slope is $m=\tfrac{3}{4}$.

Plot $(1,-1)$. Identify the rise and run:
$m=\tfrac{3}{4}$, so rise $=3$ and run $=4$. Start at $(1,-1)$ and count up
$3$ units and right $4$ units. Connect the two points with a line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −2 to 6 and y from −3 to 4. A line through (1, −1) and (5, 2), with a rise of 3 and a run of 4 marked.","xMin":-2,"xMax":6,"yMin":-3,"yMax":4,"unit":32,"tickLabels":true,"lines":[{"through":[[1,-1],[5,2]]}],"points":[{"at":[1,-1],"label":"(1, −1)","labelSide":"se"},{"at":[5,2],"label":"(5, 2)","labelSide":"se"}],"slopeTriangles":[{"from":[1,-1],"to":[5,2]}],"texts":[{"at":[0.8,0.5],"text":"3","anchor":"end"},{"at":[3,2.2],"text":"4","anchor":"middle"}]}
{{< /apfigure >}}

You can check your work by finding a third point. Since the slope is
$m=\tfrac{3}{4}$, it can also be written as $m=\tfrac{-3}{-4}$ (negative
divided by negative is positive!). Go back to $(1,-1)$ and count out the
rise, $-3$, and the run, $-4$.

{{< graphplot
  question="Graph the line through $(2,-2)$ with slope $m=\tfrac{4}{3}$."
  answerDisplay="$y=\tfrac{4}{3}x-\tfrac{14}{3}$"
  ariaLabel="A blank grid from −7 to 11 on the x-axis and −8 to 10 on the y-axis."
  hint="Plot the given point, read the rise and the run from the slope, and count them out from the point to mark a second point; repeat for a third."
>}}
{"answer": {"slope": 1.3333333333333333, "intercept": -4.666666666666667, "plotPoints": 3}, "grid": {"xMin": -7, "xMax": 11, "yMin": -8, "yMax": 10}}
{{< /graphplot >}}

{{< callout type="info" >}}
  **Graph a line given a point and the slope.**

  1. Plot the given point.
  2. Use $m=\tfrac{\text{rise}}{\text{run}}$ to identify the rise and the run.
  3. Starting at the given point, count out the rise and run to mark the
     second point.
  4. Connect the points with a line.
{{< /callout >}}

{{< multiplechoice
  question="Which graph shows the line through $(-2,3)$ with slope $m=\tfrac{1}{4}$?"
  mode="graph"
  answerIndex="1"
  hint="Plot $(-2,3)$, count out the rise and the run the slope gives, and look for the line that passes through the point you reach."
>}}
{"ariaLabel":"A line marked at (−2, 3) that rises steeply from left to right, also passing through (−3, −1).","xMin":-8,"xMax":4,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"slope":4,"intercept":11}],"points":[{"at":[-2,3]}]}
===OPT===
{"ariaLabel":"A line marked at (−2, 3) that rises gently from left to right, also passing through (2, 4).","xMin":-8,"xMax":4,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"slope":0.25,"intercept":3.5}],"points":[{"at":[-2,3]}]}
===OPT===
{"ariaLabel":"A line marked at (−2, 3) that falls gently from left to right, also passing through (2, 2).","xMin":-8,"xMax":4,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"tickStep":2,"lines":[{"slope":-0.25,"intercept":2.5}],"points":[{"at":[-2,3]}]}
{{< /multiplechoice >}}

## Graph a line using its slope and intercept

We have graphed linear equations by plotting points, using intercepts,
recognizing horizontal and vertical lines, and using one point and the slope
of the line. Once we see how an equation in slope-intercept form and its
graph are related, we'll have one more method we can use to graph lines.

Let's look at the graph of $y=\tfrac{1}{2}x+3$ and find its slope and
$y$-intercept.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −7 to 8 and y from −4 to 10. The line y equals one-half x plus 3 through (0, 3), (2, 4), and (4, 5), with rise 1 and run 2 marked.","xMin":-7,"xMax":8,"yMin":-4,"yMax":10,"tickLabels":true,"tickStep":2,"lines":[{"slope":0.5,"intercept":3,"label":"y = ½x + 3","labelAt":0.9}],"points":[{"at":[0,3],"label":"(0, 3)","labelSide":"se"},{"at":[2,4],"label":"(2, 4)","labelSide":"se"},{"at":[4,5],"label":"(4, 5)","labelSide":"se"}],"slopeTriangles":[{"from":[2,4],"to":[4,5]}],"texts":[{"at":[1.75,4.3],"text":"1","anchor":"end"},{"at":[3,5.25],"text":"2","anchor":"middle"}]}
{{< /apfigure >}}

The dashed lines in the graph show us the rise is $1$ and the run is $2$.
Substituting into the slope formula gives $m=\tfrac{1}{2}$. The
$y$-intercept is $(0,3)$.

When a linear equation is solved for $y$, the coefficient of the $x$ term is
the slope and the constant term is the $y$-coordinate of the $y$-intercept.
We say that $y=\tfrac{1}{2}x+3$ is in slope-intercept form. Sometimes the
slope-intercept form is called the "$y$-form."

{{< callout type="info" >}}
  **Slope-intercept form of an equation of a line.** The slope-intercept form
  of an equation of a line with slope $m$ and $y$-intercept $(0,b)$ is
  $$y=mx+b.$$
{{< /callout >}}

**Example.** Identify the slope and $y$-intercept of the line from each
equation: (a) $y=-\tfrac{4}{7}x-2$ (b) $x+3y=9$.

(a) Compare $y=-\tfrac{4}{7}x-2$ to $y=mx+b$. The slope is
$m=-\tfrac{4}{7}$ and the $y$-intercept is $(0,-2)$.

(b) When an equation of a line is not given in slope-intercept form, our
first step will be to solve the equation for $y$:

$$
\begin{array}{lrcl}
\text{Solve for }y. & x+3y &=& 9 \\[4pt]
\text{Subtract }x\text{ from each side.} & 3y &=& -x+9 \\[10pt]
\text{Divide both sides by }3. & \tfrac{3y}{3} &=& \tfrac{-x+9}{3} \\[10pt]
\text{Simplify.} & y &=& -\tfrac{1}{3}x+3
\end{array}
$$

The slope is $m=-\tfrac{1}{3}$ and the $y$-intercept is $(0,3)$.

{{< fillin
  question="Identify the slope of the line $x+4y=8$, as a fraction."
  answer="-\frac{1}{4}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{1}{4}$"
  hint="Solve the equation for $y$."
>}}

**Example.** Graph $y=-x+4$ using its slope and $y$-intercept.

The equation is in slope-intercept form. Identify $m=-1$ and the
$y$-intercept $(0,4)$. Plot the $y$-intercept. Write
$m=\tfrac{-1}{1}$, so the rise is $-1$ and the run is $1$. Count out the
rise and run to mark the second point. Draw the line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −6 to 6 on both axes. The line y equals negative x plus 4 through the y-intercept (0, 4) and the point (1, 3).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":2,"lines":[{"slope":-1,"intercept":4}],"points":[{"at":[0,4],"label":"(0, 4)"},{"at":[1,3],"label":"(1, 3)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $y=-x-3$ using its slope and $y$-intercept."
  answerDisplay="$y=-x-3$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="Read the slope and the $y$-intercept from the equation; plot the intercept, then count out the rise and the run to place two more points."
>}}
{"answer": {"slope": -1, "intercept": -3, "plotPoints": 3}, "grid": {}}
{{< /graphplot >}}

## Choose the most convenient method to graph a line

Now that we have seen several methods we can use to graph lines, how do we
know which method to use for a given equation? While we could plot points,
use the slope-intercept form, or find the intercepts for any equation, if we
recognize the most convenient way to graph a certain type of equation, our
work will be easier. Generally, plotting points is not the most efficient way
to graph a line.

| Equation | Method |
| :--- | :--- |
| $x=2$ | Vertical line |
| $y=-1$ | Horizontal line |
| $-x+2y=6$ | Intercepts |
| $4x-3y=12$ | Intercepts |
| $y=-x+4$ | Slope-intercept |

{{< callout type="info" >}}
  **Strategy for choosing the most convenient method to graph a line.**
  Consider the form of the equation.

  - If it only has one variable, it is a vertical or horizontal line.
    - $x=a$ is a vertical line passing through the $x$-axis at $a$.
    - $y=b$ is a horizontal line passing through the $y$-axis at $b$.
  - If $y$ is isolated on one side of the equation, in the form $y=mx+b$,
    graph by using the slope and $y$-intercept.
    - Identify the slope and $y$-intercept and then graph.
  - If the equation is of the form $Ax+By=C$, find the intercepts.
    - Find the $x$- and $y$-intercepts, a third point, and then graph.
{{< /callout >}}

**Example.** Determine the most convenient method to graph each line:
(a) $y=5$ (b) $4x-5y=20$ (c) $x=-3$ (d) $y=-\tfrac{5}{9}x+8$.

(a) This equation has only one variable, $y$. Its graph is a horizontal line
crossing the $y$-axis at $5$.

(b) This equation is of the form $Ax+By=C$. The easiest way to graph it will
be to find the intercepts and one more point.

(c) There is only one variable, $x$. The graph is a vertical line crossing
the $x$-axis at $-3$.

(d) Since this equation is in $y=mx+b$ form, it will be easiest to graph this
line by using the slope and $y$-intercept.

{{< multiplechoice
  question="What is the most convenient method to graph $4x-3y=-1$?"
  hint="Count the variables and check whether $y$ is isolated, then apply the strategy above."
  answer="intercepts"
>}}
intercepts
vertical line
horizontal line
slope-intercept
{{< /multiplechoice >}}

## Graph and interpret applications of slope-intercept

Many real-world applications are modeled by linear equations. We will take a
look at a few applications here so you can see how equations written in
slope-intercept form relate to real world situations. Usually, when a linear
equation models uses real-world data, different letters are used for the
variables, instead of using only $x$ and $y$. The variable names remind us of
what quantities are being measured. Also, we often will need to extend the
axes in our rectangular coordinate system to bigger positive and negative
numbers to accommodate the data in the application.

**Example.** The equation $F=\tfrac{9}{5}C+32$ is used to convert
temperatures, $C$, on the Celsius scale to temperatures, $F$, on the
Fahrenheit scale.

(a) Find the Fahrenheit temperature for a Celsius temperature of $0$.

$$F=\tfrac{9}{5}(0)+32=32$$

(b) Find the Fahrenheit temperature for a Celsius temperature of $20$.

$$F=\tfrac{9}{5}(20)+32=36+32=68$$

(c) Interpret the slope and $F$-intercept of the equation. Even though this
equation uses $F$ and $C$, it is still in slope-intercept form. The slope,
$\tfrac{9}{5}$, means that the temperature Fahrenheit ($F$) increases $9$
degrees when the temperature Celsius ($C$) increases $5$ degrees. The
$F$-intercept means that when the temperature is $0^\circ$ on the Celsius scale,
it is $32^\circ$ on the Fahrenheit scale.

(d) Graph the equation. Start at the $F$-intercept $(0,32)$, and then count
out the rise of $9$ and the run of $5$ to get a second point.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A Fahrenheit versus Celsius grid with C from −40 to 40 and F from −40 to 70. The line F equals nine-fifths C plus 32 through (0, 32) and (5, 41).","xMin":-40,"xMax":40,"yMin":-40,"yMax":70,"unit":4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"tickStep":20,"xLabel":"C","yLabel":"F","lines":[{"slope":1.8,"intercept":32}],"points":[{"at":[0,32],"label":"(0, 32)"},{"at":[5,41],"label":"(5, 41)"}]}
{{< /apfigure >}}

{{< fillin
  question="The equation $h=2s+50$ is used to estimate a woman's height in inches, $h$, based on her shoe size, $s$. Estimate the height, in inches, of a woman with shoe size $8$."
  answer="66"
  answerForm="decimal"
  answerDisplay="$66$ inches"
  hint="Substitute $s=8$ into the equation."
>}}

The cost of running some types of business has two components—a **fixed
cost** and a **variable cost**. The fixed cost is always the same regardless
of how many units are produced. The variable cost depends on the number of
units produced. It is for the material and labor needed to produce each item.

**Example.** Sam drives a delivery van. The equation $C=0.5m+60$ models the
relation between his weekly cost, $C$, in dollars and the number of miles,
$m$, that he drives.

(a) Find Sam's cost for a week when he drives $0$ miles:
$C=0.5(0)+60=60$. Sam's costs are \$60 when he drives $0$ miles.

(b) Find the cost for a week when he drives $250$ miles:
$C=0.5(250)+60=185$. Sam's costs are \$185 when he drives $250$ miles.

(c) Interpret the slope and $C$-intercept. The slope, $0.5$, means that the
weekly cost, $C$, increases by \$0.50 when the number of miles driven, $m$,
increases by $1$. The $C$-intercept means that when the number of miles
driven is $0$, the weekly cost is \$60.

(d) Graph the equation. Start at the $C$-intercept $(0,60)$. To count out
the slope $m=0.5$, rewrite it as an equivalent fraction:
$m=0.5=\tfrac{0.5}{1}=\tfrac{50}{100}$. Go up $50$ from the intercept of
$60$ and then right $100$. The second point is $(100,110)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A grid with m from 0 to 350 miles and C from 0 to 350 dollars. Sam's weekly cost C equals 0.5m plus 60, starting at (0, 60) and passing through (100, 110).","xMin":0,"xMax":350,"yMin":0,"yMax":350,"unit":1.2,"xGridStep":25,"yGridStep":25,"tickLabels":true,"tickStep":50,"xLabel":"m","yLabel":"C","segments":[{"from":[0,60],"to":[350,235],"arrows":"end"}],"points":[{"at":[0,60],"label":"(0, 60)"},{"at":[100,110],"label":"(100, 110)"}]}
{{< /apfigure >}}

{{< fillin
  question="Stella has a home business selling gourmet pizzas. The equation $C=4p+25$ models the relation between her weekly cost, $C$, in dollars and the number of pizzas, $p$, that she sells. Find the cost, in dollars, for a week when she sells $15$ pizzas."
  answer="85"
  answerForm="decimal"
  answerDisplay="\$85"
  hint="Substitute $p=15$ into $C=4p+25$."
>}}

## Use slopes to identify parallel and perpendicular lines

Two lines that have the same slope are called **parallel lines**. Parallel
lines have the same steepness and never intersect. Two lines that have the
same slope and different $y$-intercepts are called parallel lines.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −5 to 10 on both axes. Two parallel lines, one through (0, 3) and (5, 5) and the other through (0, −2) and (5, 0).","xMin":-5,"xMax":10,"yMin":-5,"yMax":10,"tickLabels":true,"tickStep":5,"lines":[{"slope":0.4,"intercept":3},{"slope":0.4,"intercept":-2}],"points":[{"at":[0,3],"label":"(0, 3)"},{"at":[5,5],"label":"(5, 5)"},{"at":[0,-2],"label":"(0, −2)"},{"at":[5,0],"label":"(5, 0)"}]}
{{< /apfigure >}}

Verify that both lines have the same slope, $m=\tfrac{2}{5}$, and different
$y$-intercepts.

What about vertical lines? The slope of a vertical line is undefined, so
vertical lines don't fit in the definition above. We say that vertical lines
that have different $x$-intercepts are parallel.

{{< callout type="info" >}}
  **Parallel lines.** Parallel lines are lines in the same plane that do not
  intersect.

  - Parallel lines have the same slope and different $y$-intercepts.
  - If $m_1$ and $m_2$ are the slopes of two parallel lines then $m_1=m_2$.
  - Parallel vertical lines have different $x$-intercepts.
{{< /callout >}}

**Example.** Use slopes and $y$-intercepts to determine if the lines are
parallel: (a) $3x-2y=6$ and $y=\tfrac{3}{2}x+1$ (b) $y=2x-3$ and
$-6x+3y=-9$.

(a) Solve the first equation for $y$:

$$3x-2y=6,\quad -2y=-3x+6,\quad y=\frac{3}{2}x-3.$$

The second line is already $y=\tfrac{3}{2}x+1$. The lines have the same
slope and different $y$-intercepts and so they are parallel.

(b) Solving $-6x+3y=-9$ gives $y=2x-3$. The lines have the same slope, but
they also have the same $y$-intercepts. Their equations represent the same
line and we say the lines are coincident. They are not parallel; they are the
same line.

**Example.** Use slopes and $y$-intercepts to determine if the lines are
parallel: (a) $y=-4$ and $y=3$ (b) $x=-2$ and $x=-5$.

(a) These are horizontal lines and so their slopes are both $0$. Their
$y$-intercepts are $(0,-4)$ and $(0,3)$. The lines have the same slope and
different $y$-intercepts and so they are parallel.

(b) These are vertical lines and their slopes are undefined. They cross the
$x$-axis at $x=-2$ and $x=-5$. The lines are vertical and have different
$x$-intercepts and so they are parallel.

{{< multiplechoice
  question="Are the lines $y=8$ and $y=-6$ parallel?"
  hint="Identify what kind of lines these are, then compare their slopes and their $y$-intercepts."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

The lines $y=\tfrac{1}{4}x-1$ and $y=-4x+2$ lie in the same plane and
intersect in right angles. We call these lines perpendicular. Their slopes
are negative reciprocals of each other, and their product is $-1$:

$$m_1\cdot m_2=\frac{1}{4}(-4)=-1.$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with x from −6 to 10 and y from −8 to 8. The perpendicular lines y equals one-fourth x minus 1 and y equals negative 4x plus 2.","xMin":-6,"xMax":10,"yMin":-8,"yMax":8,"unit":24,"tickLabels":true,"tickStep":5,"lines":[{"slope":0.25,"intercept":-1,"label":"y = ¼x − 1"},{"slope":-4,"intercept":2,"label":"y = −4x + 2"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Perpendicular lines.** Perpendicular lines are lines in the same plane
  that form a right angle.

  - If $m_1$ and $m_2$ are the slopes of two perpendicular lines, then their
    slopes are negative reciprocals, $m_1=-\tfrac{1}{m_2}$, and the product
    of their slopes is $-1$, $m_1\cdot m_2=-1$.
  - A vertical line and a horizontal line are always perpendicular to each
    other.
{{< /callout >}}

**Example.** Use slopes to determine if the lines are perpendicular:
(a) $y=-5x-4$ and $x-5y=5$ (b) $7x+2y=3$ and $2x+7y=5$.

(a) The first equation is in slope-intercept form. Solve the second equation
for $y$: $x-5y=5$, $-5y=-x+5$, $y=\tfrac{1}{5}x-1$. The slopes are
$m_1=-5$ and $m_2=\tfrac{1}{5}$. They are negative reciprocals, so the
lines are perpendicular. Since $-5(\tfrac{1}{5})=-1$, it checks.

(b) Solve the equations for $y$:
$y=-\tfrac{7}{2}x+\tfrac{3}{2}$ and
$y=-\tfrac{2}{7}x+\tfrac{5}{7}$. The slopes are reciprocals of each other,
but they have the same sign. Since they are not negative reciprocals, the
lines are not perpendicular.

{{< multiplechoice
  question="Are $y=-3x+2$ and $x-3y=4$ perpendicular?"
  hint="Solve the second equation for $y$, then multiply the two slopes."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Key terms

**slope** — the measure of the steepness of a line; the ratio of rise to run.
**slope formula** — $m=\tfrac{y_2-y_1}{x_2-x_1}$, used to find the slope
between two points. **slope-intercept form** — $y=mx+b$, where $m$ is the
slope and $(0,b)$ is the $y$-intercept. **fixed cost** — a business cost that
does not change with the number of units produced. **variable cost** — a
business cost that changes with the number of units produced. **parallel
lines** — lines in the same plane that do not intersect. **perpendicular
lines** — lines in the same plane that form a right angle.

## Practice

### Find the slope of a line

{{< fillin
  question="Find the slope of the line $y=3$."
  answer="0"
  answerForm="decimal"
  hint="Decide whether the line is horizontal or vertical, then think about its rise and its run."
>}}

{{< multiplechoice
  question="Find the slope of the line $x=-5$."
  hint="Decide whether the line is horizontal or vertical, then think about its rise and its run."
  answer="undefined"
>}}
$0$
$-5$
$1$
undefined
{{< /multiplechoice >}}

{{< fillin
  question="Use the slope formula to find the slope of the line through $(2,5)$ and $(4,0)$, as a fraction."
  answer="-\frac{5}{2}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{5}{2}$"
  hint="Substitute the coordinates into $m=\tfrac{y_2-y_1}{x_2-x_1}$."
>}}

### Graph a line given a point and the slope

{{< graphplot
  question="Graph the line with $y$-intercept $3$ and slope $m=-\tfrac{2}{5}$."
  answerDisplay="$y=-\tfrac{2}{5}x+3$"
  ariaLabel="A blank grid from −14 to 14 on both axes."
  hint="Plot the point the $y$-intercept names, read the rise and the run from the slope, and count them out to mark a second point; count again for a third."
>}}
{"answer": {"slope": -0.4, "intercept": 3, "plotPoints": 3}, "grid": {"xMin": -14, "xMax": 14, "yMin": -14, "yMax": 14}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the line through $(-4,2)$ with slope $m=4$."
  answerDisplay="$y=4x+18$"
  ariaLabel="A blank grid from −6 to 1 on the x-axis and −2 to 20 on the y-axis."
  hint="Plot the given point, write the slope as a fraction to read the rise and the run, and count them out to mark a second point; repeat for a third."
>}}
{"answer": {"slope": 4, "intercept": 18, "plotPoints": 3}, "grid": {"xMin": -6, "xMax": 1, "yMin": -2, "yMax": 20, "xUnit": 40, "yUnit": 12}}
{{< /graphplot >}}

### Graph a line using its slope and intercept

{{< fillin
  question="Identify the slope of the line $3x+y=5$."
  answer="-3"
  answerForm="decimal"
  hint="Solve the equation for $y$."
>}}

{{< fillin
  question="Find the $y$-intercept of the line $6x+4y=12$. Enter it as an ordered pair."
  answer="(0,3)"
  answerForm="decimal"
  answerDisplay="$(0,3)$"
  hint="Solve the equation for $y$ to write it in slope-intercept form."
>}}

{{< graphplot
  question="Graph the line $y=3x-1$ using its slope and $y$-intercept."
  answerDisplay="$y=3x-1$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="Read the slope and the $y$-intercept from the equation; plot the intercept, then count out the rise and the run twice to mark two more points."
>}}
{"answer": {"slope": 3, "intercept": -1, "plotPoints": 3}, "grid": {}}
{{< /graphplot >}}

### Choose the most convenient method to graph a line

{{< multiplechoice
  question="What is the most convenient method to graph $x=2$?"
  hint="Count the variables and check whether $y$ is isolated, then apply the strategy for choosing a method."
  answer="vertical line"
>}}
slope-intercept
intercepts
vertical line
horizontal line
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is the most convenient method to graph $y=-3x+4$?"
  hint="Count the variables and check whether $y$ is isolated, then apply the strategy for choosing a method."
  answer="slope-intercept"
>}}
horizontal line
slope-intercept
vertical line
intercepts
{{< /multiplechoice >}}

{{< multiplechoice
  question="What is the most convenient method to graph $x-y=1$?"
  hint="Count the variables and check whether $y$ is isolated, then apply the strategy for choosing a method."
  answer="intercepts"
>}}
slope-intercept
intercepts
vertical line
horizontal line
{{< /multiplechoice >}}

### Graph and interpret applications of slope-intercept

{{< fillin
  question="The equation $P=31+1.75w$ models Tuyet's monthly water bill payment, $P$, in dollars, for $w$ units of water used. Find Tuyet's payment for a month when she uses $0$ units of water."
  answer="31"
  answerForm="decimal"
  answerDisplay="\$31"
  hint="Substitute $w=0$ into the equation."
>}}

{{< fillin
  question="Using $P=31+1.75w$, find Tuyet's payment, in dollars, for a month when she uses $12$ units of water."
  answer="52"
  answerForm="decimal"
  answerDisplay="\$52"
  hint="Substitute $w=12$ into the equation."
>}}

{{< multiplechoice
  question="In $P=31+1.75w$, what does the constant term $31$ represent?"
  hint="The constant term is the $P$-intercept; think about what an intercept means in this model."
  answer="the payment when no water is used"
>}}
the payment when 12 units are used
the payment when no water is used
the cost per unit of water used
the maximum possible payment
{{< /multiplechoice >}}

{{< graphplot
  question="Graph the equation $P=31+1.75w$."
  answerDisplay="$P=31+1.75w$"
  ariaLabel="A blank grid for P versus w, from 0 to 20 on the w-axis and 0 to 70 on the P-axis."
  hint="Plot the $P$-intercept, then write the slope as a fraction with a whole-number rise and run and count it out from there."
>}}
{"answer": {"slope": 1.75, "intercept": 31, "plotPoints": 3}, "grid": {"xMin": 0, "xMax": 20, "yMin": 0, "yMax": 70, "xUnit": 18, "yUnit": 5, "yGridStep": 5, "yTickStep": 10, "xLabel": "w", "yLabel": "P"}}
{{< /graphplot >}}

### Use slopes to identify parallel and perpendicular lines

{{< multiplechoice
  question="Are the lines $y=\tfrac{3}{4}x-3$ and $3x-4y=-2$ parallel, perpendicular, or neither?"
  hint="Solve the second equation for $y$ and compare the slopes."
  answer="parallel"
>}}
neither
parallel
perpendicular
{{< /multiplechoice >}}

{{< multiplechoice
  question="Are the lines $4x-2y=5$ and $3x+6y=8$ parallel, perpendicular, or neither?"
  hint="Solve each equation for $y$ and compare the slopes."
  answer="perpendicular"
>}}
perpendicular
neither
parallel
{{< /multiplechoice >}}

{{< multiplechoice
  question="Are the lines $3x-6y=12$ and $6x-3y=3$ parallel, perpendicular, or neither?"
  hint="Solve each equation for $y$ and compare the slopes."
  answer="neither"
>}}
parallel
perpendicular
neither
{{< /multiplechoice >}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 3.2: Slope of a Line](https://openstax.org/books/intermediate-algebra-2e/pages/3-2-slope-of-a-line) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated coordinate-plane figures as accessible graphs, restating the horizontal- and vertical-line slope demonstrations in prose; omitted the Be Prepared quiz, Media links, and self-check; converted the source Try Its into interactive exercises with instant feedback, asking for one part of each multi-part Try It and posing the second point-and-slope graphing Try It as a choice among three graphs; adapted selected end-of-section exercises into a section-final interactive practice block, posing the interpretation part of the water-bill exercise as a multiple choice; and dropped a stray period from the source's "applications of slope. and".</small>
