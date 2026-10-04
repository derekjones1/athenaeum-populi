---
title: Graphing Systems of Linear Inequalities
description: >-
  Determining whether an ordered pair is a solution of a system of linear
  inequalities, solving systems of linear inequalities by graphing —
  including systems with no solution — and solving applications of systems
  of inequalities — adapted from OpenStax Intermediate Algebra 2e,
  Section 4.7.
source_section: "4.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Determine whether an ordered pair is a solution of a system of linear inequalities
- Solve a system of linear inequalities by graphing
- Solve applications of systems of inequalities
{{< /callout >}}

## Determine whether an ordered pair is a solution of a system of linear inequalities

The definition of a system of linear inequalities is very similar to the
definition of a system of linear equations.

{{< callout type="info" >}}
  **System of linear inequalities.** Two or more linear inequalities grouped
  together form a **system of linear inequalities**.
{{< /callout >}}

A system of linear inequalities looks like a system of linear equations, but
it has inequalities instead of equations. A system of two linear
inequalities is shown here:

$$
\left\{\begin{array}{l} x+4y\geq10 \\ 3x-2y<12 \end{array}\right.
$$

To solve a system of linear inequalities, we will find values of the
variables that are solutions to both inequalities. We solve the system by
using the graphs of each inequality and show the solution as a graph. We
will find the region on the plane that contains all ordered pairs $(x,y)$
that make both inequalities true.

{{< callout type="info" >}}
  **Solutions of a system of linear inequalities.** Solutions of a system of
  linear inequalities are the values of the variables that make all the
  inequalities true. The solution of a system of linear inequalities is
  shown as a shaded region in the $x,y$ coordinate system that includes all
  the points whose ordered pairs make the inequalities true.
{{< /callout >}}

To determine if an ordered pair is a solution to a system of two
inequalities, we substitute the values of the variables into each
inequality. If the ordered pair makes both inequalities true, it is a
solution to the system.

**Example.** Determine whether the ordered pair is a solution to the system
$\left\{\begin{array}{l} x+4y\geq10 \\ 3x-2y<12 \end{array}\right.$:
(a) $(-2,4)$ (b) $(3,1)$.

(a) Is the ordered pair $(-2,4)$ a solution? We substitute $x=-2$ and $y=4$
into both inequalities.

$$
\begin{array}{rcl}
x+4y &\geq& 10 \\[4pt]
-2+4(4) &\overset{?}{\geq}& 10 \\[4pt]
14 &\geq& 10\ \text{true}
\end{array}
\qquad
\begin{array}{rcl}
3x-2y &<& 12 \\[4pt]
3(-2)-2(4) &\overset{?}{<}& 12 \\[4pt]
-14 &<& 12\ \text{true}
\end{array}
$$

$(-2,4)$ made both inequalities true. Therefore $(-2,4)$ is a solution to
this system.

(b) Is the ordered pair $(3,1)$ a solution? We substitute $x=3$ and $y=1$
into both inequalities.

$$
\begin{array}{rcl}
x+4y &\geq& 10 \\[4pt]
3+4(1) &\overset{?}{\geq}& 10 \\[4pt]
7 &\geq& 10\ \text{false}
\end{array}
\qquad
\begin{array}{rcl}
3x-2y &<& 12 \\[4pt]
3(3)-2(1) &\overset{?}{<}& 12 \\[4pt]
7 &<& 12\ \text{true}
\end{array}
$$

$(3,1)$ made one inequality true, but the other one false. Therefore
$(3,1)$ is not a solution to this system.

For the system $\left\{\begin{array}{l} y>4x-2 \\ 4x-y<20 \end{array}\right.$,
determine whether each ordered pair is a solution.

{{< multiplechoice
  question="Is the ordered pair $(-2,1)$ a solution to the system $\left\{\begin{array}{l} y>4x-2 \\ 4x-y<20 \end{array}\right.$?"
  hint="Substitute $x=-2$ and $y=1$ into each inequality; the pair is a solution only if it makes both inequalities true."
  answer="yes"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the ordered pair $(4,-1)$ a solution to the system $\left\{\begin{array}{l} y>4x-2 \\ 4x-y<20 \end{array}\right.$?"
  hint="Substitute $x=4$ and $y=-1$ into each inequality; the pair is a solution only if it makes both inequalities true."
  answer="no"
>}}
no
yes
{{< /multiplechoice >}}

## Solve a system of linear inequalities by graphing

The solution to a single linear inequality is the region on one side of the
boundary line that contains all the points that make the inequality true.
The solution to a system of two linear inequalities is a region that
contains the solutions to both inequalities. To find this region, we will
graph each inequality separately and then locate the region where they are
both true. The solution is always shown as a graph.

**Example. How to solve a system of linear inequalities by graphing.** Solve
the system by graphing:
$\left\{\begin{array}{l} y\geq2x-1 \\ y<x+1 \end{array}\right.$.

**Step 1. Graph the first inequality.** We graph the boundary line
$y=2x-1$. It is a solid line because the inequality sign is $\geq$. We
choose $(0,0)$ as a test point. Since $0\geq2(0)-1$ is true, $(0,0)$ is a
solution, so we shade in the side of the boundary line that contains
$(0,0)$.

**Step 2. On the same grid, graph the second inequality.** We graph the
boundary line $y=x+1$. It is a dashed line because the inequality sign is
$<$. Testing $(0,0)$ again: since $0<0+1$ is true, we shade in the side of
this boundary line that also contains $(0,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units. The solid boundary line y equals 2x minus 1 has the region above and to the left of it shaded, and the dashed boundary line y equals x plus 1 has the region below and to the right of it shaded. The lines cross at (2, 3), and the region shaded twice, darkest, lies below and to the left of that point, between the two lines.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":2,"intercept":-1},"side":[0,0]},{"line":{"slope":1,"intercept":1},"side":[0,0],"dashed":true}]}
{{< /apfigure >}}

**Step 3. The solution is the region where the shading overlaps.** The point
where the boundary lines intersect, $(2,3)$, is not included in the
solution, since it is not a solution to $y<x+1$. The solution is the region
shaded twice, which appears as the darkest region in the graph.

**Step 4. Check by choosing a test point.** We'll use $(-1,-1)$.

{{< fillin
  question="Check the point $(-1,-1)$ in the system $\left\{\begin{array}{l} y\geq2x-1 \\ y<x+1 \end{array}\right.$: substitute it into $y\geq2x-1$ and simplify the right side."
  answer="-3"
  answerForm="decimal"
  answerDisplay="$-3$, so $-1\geq-3$ is true"
  hint="Replace $x$ with the point's $x$-coordinate in the right side, multiply, then subtract."
>}}

{{< callout type="info" >}}
  **Solve a system of linear inequalities by graphing.**

  1. Graph the first inequality.
     - Graph the boundary line.
     - Shade in the side of the boundary line where the inequality is true.
  2. On the same grid, graph the second inequality.
     - Graph the boundary line.
     - Shade in the side of that boundary line where the inequality is
       true.
  3. The solution is the region where the shading overlaps.
  4. Check by choosing a test point.
{{< /callout >}}

**Example.** Solve the system by graphing:
$\left\{\begin{array}{l} x-y>3 \\ y<-\tfrac{1}{5}x+4 \end{array}\right.$.

Graph $x-y>3$ by graphing $x-y=3$ and testing a point. The intercepts are
$x=3$ and $y=-3$, and the boundary line will be dashed. We test $(0,0)$,
which makes the inequality false, so we shade the side that does not
contain $(0,0)$.

Graph $y<-\tfrac{1}{5}x+4$ by graphing $y=-\tfrac{1}{5}x+4$ using the slope
$m=-\tfrac{1}{5}$ and $y$-intercept $b=4$. The boundary line will be dashed.
We test $(0,0)$, which makes the inequality true, so we shade the side that
contains $(0,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units. The dashed boundary line x minus y equals 3, through (3, 0) and (0, negative 3), has the region below and to the right of it shaded, and the dashed boundary line y equals negative one-fifth x plus 4, through (0, 4), has the region below it shaded. The region shaded twice, darkest, lies to the right of the first line and below the second.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":1,"intercept":-3},"side":[4,-4],"dashed":true},{"line":{"slope":-0.2,"intercept":4},"side":[0,0],"dashed":true}]}
{{< /apfigure >}}

The point where the two lines intersect is not included in the solution,
since both boundary lines are dashed. The solution is the area shaded
twice — which appears as the darkest shaded region.

**Example.** Solve the system by graphing:
$\left\{\begin{array}{l} x-2y<5 \\ y>-4 \end{array}\right.$.

Graph $x-2y<5$ by graphing $x-2y=5$ and testing a point. The intercepts are
$x=5$ and $y=-2.5$, and the boundary line will be dashed. We test $(0,0)$,
which makes the inequality true, so we shade the side that contains
$(0,0)$.

Graph $y>-4$ by graphing $y=-4$ and recognizing that it is a horizontal
line through $y=-4$. The boundary line will be dashed. We test $(0,0)$,
which makes the inequality true, so we shade the side that contains
$(0,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units. The dashed boundary line x minus 2y equals 5, through (5, 0) and (0, negative 2.5), has the region above and to the left of it shaded, and the dashed horizontal boundary line y equals negative 4 has the region above it shaded. The region shaded twice, darkest, lies above both lines and contains the origin.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0.5,"intercept":-2.5},"side":[0,0],"dashed":true},{"line":{"slope":0,"intercept":-4},"side":[0,0],"dashed":true}]}
{{< /apfigure >}}

The point $(0,0)$ is in the solution, as we already found it to be a
solution of each inequality. The point of intersection of the two lines is
not included, since both boundary lines are dashed. The solution is the
area shaded twice — which appears as the darkest shaded region.

Systems of linear inequalities where the boundary lines are parallel might
have no solution. We'll see this in the next example.

**Example.** Solve the system by graphing:
$\left\{\begin{array}{l} 4x+3y\geq12 \\ y<-\tfrac{4}{3}x+1 \end{array}\right.$.

Graph $4x+3y\geq12$ by graphing $4x+3y=12$ and testing a point. The
intercepts are $x=3$ and $y=4$, and the boundary line will be solid. We
test $(0,0)$, which makes the inequality false, so we shade the side that
does not contain $(0,0)$.

Graph $y<-\tfrac{4}{3}x+1$ by graphing $y=-\tfrac{4}{3}x+1$ using the slope
$m=-\tfrac{4}{3}$ and $y$-intercept $b=1$. The boundary line will be dashed.
We test $(0,0)$, which makes the inequality true, so we shade the side that
contains $(0,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes, numbered every 2 units. The solid boundary line 4x plus 3y equals 12, through (3, 0) and (0, 4), has the region above and to the right of it shaded, and the parallel dashed boundary line y equals negative four-thirds x plus 1, through (0, 1), has the region below and to the left of it shaded. No region is shaded twice: the strip between the two lines is unshaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-1.3333333333333333,"intercept":4},"side":[4,4]},{"line":{"slope":-1.3333333333333333,"intercept":1},"side":[0,0],"dashed":true}]}
{{< /apfigure >}}

There is no point in both shaded regions, so this system has **no
solution**.

{{< multiplechoice
  question="Does the system $\left\{\begin{array}{l} 3x-2y\geq12 \\ y\geq\tfrac{3}{2}x+1 \end{array}\right.$ have a solution?"
  hint="Solve the first inequality for $y$, compare the two boundary lines, and decide which side of each line is shaded."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

Some systems of linear inequalities where the boundary lines are parallel
will have a solution. We'll see this in the next example.

**Example.** Solve the system by graphing:
$\left\{\begin{array}{l} y>\tfrac{1}{2}x-4 \\ x-2y<-4 \end{array}\right.$.

Graph $y>\tfrac{1}{2}x-4$ by graphing $y=\tfrac{1}{2}x-4$ using the slope
$m=\tfrac{1}{2}$ and the intercept $b=-4$. The boundary line will be
dashed. We test $(0,0)$, which makes the inequality true, so we shade the
side that contains $(0,0)$.

Graph $x-2y<-4$ by graphing $x-2y=-4$ and testing a point. The intercepts
are $x=-4$ and $y=2$, and the boundary line will be dashed. We choose a
test point in the solution and verify that it is a solution to both
inequalities. We test $(0,0)$, which makes the inequality false, so we
shade the side that does not contain $(0,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 12 to 12 on both axes, numbered every 2 units. The dashed boundary line y equals one-half x minus 4, through (0, negative 4) and (8, 0), has the region above it shaded, and the parallel dashed boundary line x minus 2y equals negative 4, through (negative 4, 0) and (0, 2), has the region above it shaded. The region shaded twice, darkest, lies above the higher line.","xMin":-12,"xMax":12,"yMin":-12,"yMax":12,"unit":14,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0.5,"intercept":-4},"side":[0,0],"dashed":true},{"line":{"slope":0.5,"intercept":2},"side":[0,4],"dashed":true}]}
{{< /apfigure >}}

No point on the boundary lines is included in the solution, since both
lines are dashed. The solution is the region that is shaded twice, which is
also the solution to $x-2y<-4$ alone.

{{< graphplot
  question="Graph the boundary lines of the system $\left\{\begin{array}{l} y\geq3x+1 \\ -3x+y\geq-4 \end{array}\right.$."
  answerDisplay="$y=3x+1$ and $y=3x-4$"
  ariaLabel="A blank grid from −7 to 7 on both axes."
  hint="Replace each inequality sign with $=$, solve each equation for $y$, and plot points from the slope and $y$-intercept."
>}}
{"answer":{"system":[{"slope":3,"intercept":1},{"slope":3,"intercept":-4}]},"grid":{"xMin":-7,"xMax":7,"yMin":-7,"yMax":7}}
{{< /graphplot >}}

{{< multiplechoice
  question="Which graph shows the solution of the system $\left\{\begin{array}{l} y\geq3x+1 \\ -3x+y\geq-4 \end{array}\right.$?"
  hint="Choose each boundary line's style from its inequality symbol, test $(0,0)$ in each inequality, and keep only the points that satisfy both."
  mode="graph"
  answerIndex="2"
>}}
{"ariaLabel":"Two parallel solid lines rising steeply to the right, one through (0, 1) and one through (0, −4), with the region above the line through (0, −4) shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"lines":[{"slope":3,"intercept":1}],"regions":[{"line":{"slope":3,"intercept":-4},"side":[-3,3]}]}
===OPT===
{"ariaLabel":"Two parallel dashed lines rising steeply to the right, one through (0, 1) and one through (0, −4), with the region above the line through (0, 1) shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"lines":[{"slope":3,"intercept":-4,"dashed":true}],"regions":[{"line":{"slope":3,"intercept":1},"side":[-3,3],"dashed":true}]}
===OPT===
{"ariaLabel":"Two parallel solid lines rising steeply to the right, one through (0, 1) and one through (0, −4), with the region above the line through (0, 1) shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"lines":[{"slope":3,"intercept":-4}],"regions":[{"line":{"slope":3,"intercept":1},"side":[-3,3]}]}
===OPT===
{"ariaLabel":"Two parallel solid lines rising steeply to the right, one through (0, 1) and one through (0, −4), with the region below the line through (0, −4) shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"lines":[{"slope":3,"intercept":1}],"regions":[{"line":{"slope":3,"intercept":-4},"side":[3,-3]}]}
{{< /multiplechoice >}}

## Solve applications of systems of inequalities

The first thing we'll need to do to solve applications of systems of
inequalities is to translate each condition into an inequality. Then we
graph the system, as we did above, to see the region that contains all the
solutions. Many situations will be realistic only if both variables are
positive, so we add inequalities to the system as additional requirements.

**Example.** Christy sells photographs at a booth at a street fair. At the
start of the day, she wants to display at least 25 photos. Each small photo
she displays costs her \$4 and each large photo costs her \$10, and she
doesn't want to spend more than \$200 on photos to display.

(a) Write a system of inequalities to model this situation.

Let $x=$ the number of small photos and $y=$ the number of large photos.
She wants to have at least 25 photos, so the number of small plus the
number of large should be at least 25: $x+y\geq25$. Each small photo costs
\$4 and each large photo costs \$10, and the total must be no more than
\$200: $4x+10y\leq200$. The number of small and the number of large photos
must each be greater than or equal to zero: $x\geq0$, $y\geq0$. We have the
system of inequalities:

$$
\left\{\begin{array}{l} x+y\geq25 \\ 4x+10y\leq200 \\ x\geq0 \\ y\geq0 \end{array}\right.
$$

(b) Graph the system. Since $x\geq0$ and $y\geq0$, all solutions will be in
the first quadrant, so our graph shows only Quadrant I. To graph
$x+y\geq25$, graph $x+y=25$ as a solid line; testing $(0,0)$ makes the
inequality false, so we shade the side that does not contain $(0,0)$. To
graph $4x+10y\leq200$, graph $4x+10y=200$ as a solid line; testing $(0,0)$
makes the inequality true, so we shade the side that contains $(0,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A first-quadrant grid with x, the number of small photos, from 0 to 55 and y, the number of large photos, from 0 to 30, numbered every 5 units. The solid boundary line x plus y equals 25 runs from (0, 25) to (25, 0) with the region above it shaded, and the solid boundary line 4x plus 10y equals 200 runs from (0, 20) to (50, 0) with the region below it shaded. The lines cross at about (8.3, 16.7), and the region shaded twice, darkest, is the triangle bounded by the two lines and the x-axis from (25, 0) to (50, 0).","xMin":0,"xMax":55,"yMin":0,"yMax":30,"unit":6,"gridStep":5,"tickLabels":true,"tickStep":5,"regions":[{"line":{"slope":-1,"intercept":25,"arrows":false},"side":[40,25]},{"line":{"slope":-0.4,"intercept":20,"arrows":false},"side":[5,5]}]}
{{< /apfigure >}}

The solution of the system is the region of the graph that is shaded the
darkest. The boundary line sections that border the darkly shaded section
are included in the solution, as are the points on the $x$-axis from
$(25,0)$ to $(50,0)$.

(c) Could she display 10 small and 20 large photos? We look at the graph to
see whether the point $(10,20)$ is in the solution region. It is not, so
Christy would not display 10 small and 20 large photos.

(d) Could she display 20 small and 10 large photos? We look at the graph to
see whether the point $(20,10)$ is in the solution region. It is, so
Christy could choose to display 20 small and 10 large photos.

When we use variables other than $x$ and $y$ to define an unknown
quantity, we must change the names of the axes of the graph as well.

**Example.** Omar needs to eat at least 800 calories before going to his
team practice. All he wants is hamburgers and cookies, and he doesn't want
to spend more than \$5. At the hamburger restaurant near his college, each
hamburger has 240 calories and costs \$1.40. Each cookie has 160 calories
and costs \$0.50.

(a) Write a system of inequalities to model this situation.

Let $h=$ the number of hamburgers and $c=$ the number of cookies. The
calories from the hamburgers, at 240 calories each, plus the calories from
the cookies, at 160 calories each, must be at least 800: $240h+160c\geq800$.
The amount spent on hamburgers, at \$1.40 each, plus the amount spent on
cookies, at \$0.50 each, must be no more than \$5.00: $1.40h+0.50c\leq5$.
The number of hamburgers and the number of cookies must each be greater
than or equal to zero: $h\geq0$, $c\geq0$. We have the system of
inequalities:

$$
\left\{\begin{array}{l} 240h+160c\geq800 \\ 1.40h+0.50c\leq5 \\ h\geq0 \\ c\geq0 \end{array}\right.
$$

(b) Graph the system. Since $h\geq0$ and $c\geq0$, our graph shows only
Quadrant I. To graph $240h+160c\geq800$, graph $240h+160c=800$ as a solid
line; testing $(0,0)$ makes the inequality false, so we shade the side that
does not contain $(0,0)$. To graph $1.40h+0.50c\leq5$, graph
$1.40h+0.50c=5$ as a solid line; testing $(0,0)$ makes the inequality true,
so we shade the side that contains $(0,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A first-quadrant grid with h, the number of hamburgers, on the horizontal axis and c, the number of cookies, on the vertical axis, each from 0 to 5 and numbered every unit. The solid boundary line 240h plus 160c equals 800 runs from (0, 5) to about (3.3, 0) with the region above it shaded, and the solid boundary line 1.40h plus 0.50c equals 5 runs from about (1.8, 5) at the top of the grid to about (3.6, 0) with the region below it shaded. The region shaded twice, darkest, is the strip between the two lines.","xMin":0,"xMax":5,"yMin":0,"yMax":5,"unit":40,"tickLabels":true,"tickStep":1,"xLabel":"h","yLabel":"c","regions":[{"line":{"slope":-1.5,"intercept":5,"arrows":false},"side":[4,4]},{"line":{"slope":-2.8,"intercept":10,"arrows":false},"side":[0.5,0.5]}]}
{{< /apfigure >}}

The solution of the system is the region of the graph that is shaded the
darkest.

(c) Could he eat 3 hamburgers and 1 cookie? We look at the graph to see
whether the point $(3,1)$ is in the solution region. It is, so Omar might
choose to eat 3 hamburgers and 1 cookie.

(d) Could he eat 2 hamburgers and 4 cookies? We look at the graph to see
whether the point $(2,4)$ is in the solution region. It is, so Omar might
choose to eat 2 hamburgers and 4 cookies.

Tenison needs to eat at least an extra 1,000 calories a day to prepare for
running a marathon. He has only \$25 to spend on the extra food he needs
and will spend it on \$0.75 donuts, which have 360 calories each, and \$2
energy drinks, which have 110 calories each.

{{< fillin
  question="Let $d$ be the number of donuts and $e$ be the number of energy drinks Tenison buys. Write an inequality that models needing at least 1,000 extra calories, given each donut has 360 calories and each energy drink has 110 calories."
  answer="360d+110e\geq1000" answerForm="decimal"
  answerDisplay="$360d+110e\geq1000$"
  hint="Multiply calories per item by the number of items, add the two, and use 'at least' to choose the inequality symbol."
>}}

{{< multiplechoice
  question="Can Tenison buy 8 donuts and 4 energy drinks and satisfy his caloric needs?"
  hint="Substitute $d=8$ and $e=4$ into your calorie inequality and check whether it is true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Key terms

**system of linear inequalities** — two or more linear inequalities grouped
together. **solutions of a system of linear inequalities** — the values of
the variables that make all the inequalities in the system true, shown as a
shaded region in the $x,y$ coordinate system that includes all the points
whose ordered pairs make the inequalities true.

## Practice

### Determine whether an ordered pair is a solution of a system of linear inequalities

{{< multiplechoice
  question="Is $(5,-2)$ a solution to the system $\left\{\begin{array}{l} 4x-y<10 \\ -2x+2y>-8 \end{array}\right.$?"
  hint="Substitute $x=5$ and $y=-2$ into each inequality; the pair is a solution only if it makes both inequalities true."
  answer="no"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-1,3)$ a solution to the system $\left\{\begin{array}{l} 4x-y<10 \\ -2x+2y>-8 \end{array}\right.$?"
  hint="Substitute $x=-1$ and $y=3$ into each inequality; the pair is a solution only if it makes both inequalities true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-4,-1)$ a solution to the system $\left\{\begin{array}{l} y<\tfrac{3}{2}x+3 \\ \tfrac{3}{4}x-2y<5 \end{array}\right.$?"
  hint="Substitute $x=-4$ and $y=-1$ into each inequality; the pair is a solution only if it makes both inequalities true."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(8,3)$ a solution to the system $\left\{\begin{array}{l} y<\tfrac{3}{2}x+3 \\ \tfrac{3}{4}x-2y<5 \end{array}\right.$?"
  hint="Substitute $x=8$ and $y=3$ into each inequality; the pair is a solution only if it makes both inequalities true."
  answer="yes"
>}}
no
yes
{{< /multiplechoice >}}

### Solve a system of linear inequalities by graphing

{{< multiplechoice
  question="Does the system $\left\{\begin{array}{l} x-3y\geq6 \\ y>\tfrac{1}{3}x+1 \end{array}\right.$ have a solution?"
  hint="Solve each inequality for $y$ and compare the boundary lines' slopes; then decide which side of each line is shaded and look for points shaded for both."
  answer="no"
>}}
no
yes
{{< /multiplechoice >}}

{{< fillin
  question="For the system $\left\{\begin{array}{l} y<-2x+2 \\ y\geq-x-1 \end{array}\right.$, find the intersection point of the two boundary lines $y=-2x+2$ and $y=-x-1$."
  answer="(3,-4)"
  answerForm="decimal"
  answerDisplay="$(3,-4)$"
  hint="Set $-2x+2=-x-1$ and solve for $x$, then substitute back to find $y$."
>}}

{{< multiplechoice
  question="Is the point $(-5,2)$ in the solution region of the system $\left\{\begin{array}{l} 2x+y>-6 \\ -x+2y\geq-4 \end{array}\right.$?"
  hint="Substitute $x=-5$ and $y=2$ into each inequality; the point is in the solution region only if it makes both inequalities true."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

### Solve applications of systems of inequalities

Jake doesn't want to spend more than \$50 on bags of fertilizer and peat moss for his garden. Fertilizer costs \$2 a bag and peat moss costs \$5 a bag, and his van can hold at most 20 bags.

{{< fillin
  question="If $f$ is the number of bags of fertilizer and $p$ is the number of bags of peat moss, write an inequality that models Jake's budget: fertilizer costs \$2 a bag, peat moss costs \$5 a bag, and he doesn't want to spend more than \$50."
  answer="2f+5p\leq50" answerForm="decimal"
  answerDisplay="$2f+5p\leq50$"
  hint="Multiply each price by its number of bags, add them, and use 'not more than' to choose $\leq$."
>}}

{{< multiplechoice
  question="Can Jake buy 15 bags of fertilizer and 4 bags of peat moss?"
  hint="Write the van-capacity inequality too, then substitute $f=15$ and $p=4$ into both inequalities; he can buy them only if both are true."
  answer="yes"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Can Jake buy 10 bags of fertilizer and 10 bags of peat moss?"
  hint="Substitute $f=10$ and $p=10$ into the budget and van-capacity inequalities; he can buy them only if both are true."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

Mark is increasing his exercise routine by running and walking at least 4 miles each day. His goal is to burn a minimum of 1,500 calories from this exercise. Walking burns 270 calories per mile and running burns 650 calories per mile.

{{< fillin
  question="If $w$ is the number of miles Mark walks and $r$ is the number of miles he runs, write an inequality that models his calorie goal: walking burns 270 calories per mile, running burns 650 calories per mile, and he wants a minimum of 1,500 calories burned."
  answer="270w+650r\geq1500" answerForm="decimal"
  answerDisplay="$270w+650r\geq1500$"
  hint="Multiply each rate by its number of miles, add them, and use 'a minimum of' to choose $\geq$."
>}}

{{< multiplechoice
  question="Could Mark meet his goal by walking 3 miles and running 1 mile?"
  hint="Write the distance inequality too, then substitute $w=3$ and $r=1$ into both inequalities; he meets his goal only if both are true."
  answer="no"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Could Mark meet his goal by walking 2 miles and running 2 miles?"
  hint="Substitute $w=2$ and $r=2$ into the distance and calorie inequalities; he meets his goal only if both are true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.7: Graphing Systems of Linear Inequalities](https://openstax.org/books/intermediate-algebra-2e/pages/4-7-graphing-systems-of-linear-inequalities) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the coordinate-plane figures as accessible graphs with numbered axes, showing each worked example's two shading steps on one graph and drawing the photo-display and hamburger-and-cookie graphs in Quadrant I with boundary segments ending at the axes; wrote the worked examples' step tables as prose; omitted the Be Prepared quiz, the Media links, the Key Concepts summary (it repeats the how-to box), the writing exercises, and the Self Check; converted selected practice problems ("Try Its") into interactive exercises with instant feedback, turning the how-to example's test-point check into one, asking whether one parallel-line system has a solution, asking for another system's boundary lines and then its solution graph, and asking parts (a) and (c) of the donut-and-energy-drink problem, part (a) for the calorie inequality alone; wrote the Key terms list from the module's glossary and definition boxes; and adapted selected end-of-section exercises into an interactive Practice block, asking for the boundary lines' intersection point in one graphing exercise and whether the point $(-5,2)$ lies in the solution region of another, asking parts (a), (c), and (d) of each application exercise, part (a) for one of its inequalities, and giving running's rate in Mark's exercise as 650 calories per mile, where the source omits "per mile". Corrections: the photo-display example includes the points on the $x$-axis from $(25,0)$ to $(50,0)$, where the source prints $(55,0)$ ($4x+10y=200$ meets the $x$-axis at $x=50$); the hamburger-and-cookie example checks the point $(3,1)$ for 3 hamburgers and 1 cookie, where the source checks $(3,2)$, a point outside the solution region; and its calorie condition reads "at least 800", where the source writes "more that 800".</small>
