---
title: Solve Systems of Nonlinear Equations
description: >-
  Solve systems of nonlinear equations by graphing, substitution, and
  elimination, and use nonlinear systems in applications.
source_section: "11.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve a system of nonlinear equations using graphing
- Solve a system of nonlinear equations using substitution
- Solve a system of nonlinear equations using elimination
- Use a system of nonlinear equations to solve applications
{{< /callout >}}

## Solve a System of Nonlinear Equations Using Graphing

We learned how to solve systems of linear equations with two variables by
graphing, substitution and elimination. We will be using these same methods as
we look at nonlinear systems of equations with two equations and two
variables. A **system of nonlinear equations** is a system where at least one
of the equations is not linear.

For example, each of the following systems is a system of nonlinear equations.

$$
\left\{\begin{array}{l}x^2+y^2=9\\x^2-y=9\end{array}\right.
\qquad
\left\{\begin{array}{l}9x^2+y^2=9\\y=3x-3\end{array}\right.
\qquad
\left\{\begin{array}{l}x+y=4\\y=x^2+2\end{array}\right.
$$

{{< callout type="info" >}}
### System of Nonlinear Equations

A **system of nonlinear equations** is a system where at least one of the
equations is not linear.
{{< /callout >}}

Just as with systems of linear equations, a solution of a nonlinear system is
an ordered pair that makes both equations true. In a nonlinear system, there
may be more than one solution. We will see this as we solve a system of
nonlinear equations by graphing.

When we solved systems of linear equations, the solution of the system was the
point of intersection of the two lines. With systems of nonlinear equations,
the graphs may be circles, parabolas or hyperbolas and there may be several
points of intersection, and so several solutions. Once you identify the
graphs, visualize the different ways the graphs could intersect and so how
many solutions there might be.

To solve systems of nonlinear equations by graphing, we use basically the same
steps as with systems of linear equations modified slightly for nonlinear
equations. The steps are listed below for reference.

{{< callout type="info" >}}
### How To: Solve a system of nonlinear equations by graphing

1. Identify the graph of each equation. Sketch the possible options for
   intersection.
2. Graph the first equation.
3. Graph the second equation on the same rectangular coordinate system.
4. Determine whether the graphs intersect.
5. Identify the points of intersection.
6. Check that each ordered pair is a solution to both original equations.
{{< /callout >}}

### Example 11.33

Solve the system by graphing:

$$
\left\{\begin{array}{l}x-y=-2\\y=x^2\end{array}\right.
$$

**Solution.** The first equation is a line and the second is a parabola. A
parabola and a line can intersect in zero, one, or two points:

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: an upward-opening parabola and a rising line that passes below and to the right of it without touching it.","xMin":-3,"xMax":4,"yMin":-3,"yMax":5,"unit":16,"grid":false,"tickLabels":false,"quadratics":[{"a":1}],"lines":[{"slope":1,"intercept":-2}]}
{{< /apfigure >}}

*0 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: an upward-opening parabola and a falling line that touches it at exactly one marked point.","xMin":-3,"xMax":3,"yMin":-3,"yMax":5,"unit":16,"grid":false,"tickLabels":false,"quadratics":[{"a":1}],"lines":[{"slope":-1,"intercept":-0.25}],"points":[{"at":[-0.5,0.25]}]}
{{< /apfigure >}}

*1 solution*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: an upward-opening parabola and a rising line that crosses it at two marked points.","xMin":-3,"xMax":4,"yMin":-3,"yMax":7,"unit":16,"grid":false,"tickLabels":false,"quadratics":[{"a":1}],"lines":[{"slope":1,"intercept":2}],"points":[{"at":[-1,1]},{"at":[2,4]}]}
{{< /apfigure >}}

*2 solutions*

Write the line in slope-intercept form, $y=x+2$, and graph it with the
parabola $y=x^2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y = x² and the line x − y = −2, which is y = x + 2, on a grid from −5 to 5 on both axes. The line crosses the parabola at the two marked points (−1, 1) and (2, 4).","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"tickLabels":true,"tickStep":4,"quadratics":[{"a":1}],"lines":[{"slope":1,"intercept":2,"label":"x − y = −2","labelAt":0.12,"labelSide":"left"}],"points":[{"at":[-1,1],"label":"(−1, 1)"},{"at":[2,4],"label":"(2, 4)"}],"texts":[{"at":[-4.4,3.5],"text":"y = x²"}]}
{{< /apfigure >}}

The points of intersection appear to be $(2,4)$ and $(-1,1)$.

Check $(2,4)$:

$$
\begin{array}{rcl}
2-4&=&-2\ \checkmark\\[4pt]
4&=&2^2\ \checkmark
\end{array}
$$

Check $(-1,1)$:

$$
\begin{array}{rcl}
-1-1&=&-2\ \checkmark\\[4pt]
1&=&(-1)^2\ \checkmark
\end{array}
$$

The solutions are $(2,4)$ and $(-1,1)$.

{{< fillin
  question="Solve the system by graphing: $\left\{\begin{array}{l}x+y=4\\y=x^2+2\end{array}\right.$. Enter both ordered-pair solutions."
  answer="(-2,6),(1,3)"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$(-2,6),(1,3)$"
  hint="Write the line in slope-intercept form, graph it with the parabola on the same grid, and read off where they cross; then check each point in both equations."
>}}

To identify the graph of each equation, keep in mind the characteristics of
the $x^2$ and $y^2$ terms of each conic.

### Example 11.34

Solve the system by graphing:

$$
\left\{\begin{array}{l}y=-1\\(x-2)^2+(y+3)^2=4\end{array}\right.
$$

**Solution.** The first graph is a line and the second is a circle. A circle
and a line can intersect in zero, one, or two points:

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a circle and a rising line that passes below and to the right of it without touching it.","xMin":-3,"xMax":5,"yMin":-5,"yMax":3,"unit":16,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":2}],"lines":[{"slope":1,"intercept":-3.6}]}
{{< /apfigure >}}

*0 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a circle and a vertical line that touches its left side at exactly one marked point.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":16,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":2}],"lines":[{"x":-2}],"points":[{"at":[-2,0]}]}
{{< /apfigure >}}

*1 solution*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a circle and a rising line that passes through it, crossing it at two marked points.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":16,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":2}],"lines":[{"slope":1,"intercept":-1}],"points":[{"at":[1.8229,0.8229]},{"at":[-0.8229,-1.8229]}]}
{{< /apfigure >}}

*2 solutions*

Graph the circle, with center $(2,-3)$ and radius 2, and the line $y=-1$,
which is horizontal.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The circle with center (2, −3) and radius 2 and the horizontal line y = −1, on a grid from −6 to 6 on both axes. The line touches the top of the circle at the one marked point (2, −1).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":26,"tickLabels":true,"tickStep":2,"circles":[{"at":[2,-3],"r":2}],"lines":[{"y":-1,"label":"y = −1"}],"points":[{"at":[2,-1],"label":"(2, −1)"}],"texts":[{"at":[4.3,-4.6],"text":"(x − 2)² + (y + 3)² = 4"}]}
{{< /apfigure >}}

The line touches the circle at one point, which appears to be $(2,-1)$.
Checking gives

$$
(2-2)^2+(-1+3)^2=4
\quad\text{and}\quad
-1=-1.
$$

The solution is $(2,-1)$.

{{< fillin
  question="Solve the system by graphing: $\left\{\begin{array}{l}x=-6\\(x+3)^2+(y-1)^2=9\end{array}\right.$. Enter the solution as an ordered pair."
  answer="(-6,1)"
  answerForm="decimal"
  answerDisplay="$(-6,1)$"
  hint="Read the circle's center and radius from its standard form, graph it with the vertical line, and find where they meet; then check the point in both equations."
>}}

## Solve a System of Nonlinear Equations Using Substitution

The graphing method works well when the points of intersection are integers
and so easy to read off the graph. But more often it is difficult to read the
coordinates of the points of intersection. The substitution method is an
algebraic method that will work well in many situations. It works especially
well when it is easy to solve one of the equations for one of the variables.

The substitution method is very similar to the substitution method that we
used for systems of linear equations. The steps are listed below for
reference.

{{< callout type="info" >}}
### How To: Solve a system of nonlinear equations by substitution

1. Identify the graph of each equation. Sketch the possible options for
   intersection.
2. Solve one of the equations for either variable.
3. Substitute the expression from Step 2 into the other equation.
4. Solve the resulting equation.
5. Substitute each solution in Step 4 into one of the original equations to
   find the other variable.
6. Write each solution as an ordered pair.
7. Check that each ordered pair is a solution to both original equations.
{{< /callout >}}

### Example 11.35

Solve the system by using substitution:

$$
\left\{\begin{array}{l}9x^2+y^2=9\\y=3x-3\end{array}\right.
$$

**Solution.** The first graph is an ellipse and the second is a line. An
ellipse and a line can intersect in zero, one, or two points:

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a tall ellipse and a rising line that passes below and to the right of it without touching it.","xMin":-3,"xMax":4,"yMin":-4,"yMax":3,"unit":16,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"rx":1,"ry":2}],"lines":[{"slope":1,"intercept":-2.6}]}
{{< /apfigure >}}

*0 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a tall ellipse and a vertical line that touches its left side at exactly one marked point.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":16,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"rx":1,"ry":2}],"lines":[{"x":-1}],"points":[{"at":[-1,0]}]}
{{< /apfigure >}}

*1 solution*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a tall ellipse and a rising line that passes through it, crossing it at two marked points.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"unit":16,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"rx":1,"ry":2}],"lines":[{"slope":2,"intercept":-1}],"points":[{"at":[0.9114,0.8229]},{"at":[-0.4114,-1.8229]}]}
{{< /apfigure >}}

*2 solutions*

The second equation is already solved for $y$. Substitute $3x-3$ for $y$ in the
first equation.

$$
\begin{aligned}
9x^2+(3x-3)^2&=9\\
9x^2+9x^2-18x+9&=9\\
18x^2-18x&=0\\
18x(x-1)&=0,
\end{aligned}
$$

so $x=0$ or $x=1$. Substitute into $y=3x-3$:

$$
x=0\Longrightarrow y=-3,
\qquad
x=1\Longrightarrow y=0.
$$

The ordered pairs are $(0,-3)$ and $(1,0)$. Substitution in both original
equations verifies both solutions. The graph shows the line crossing the
ellipse at these two points.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The ellipse 9x² + y² = 9, centered at the origin with vertices (0, 3) and (0, −3) and co-vertices (1, 0) and (−1, 0), and the line y = 3x − 3, on a grid from −5 to 5 on the x-axis (numbered every 2 units) and −6 to 5 on the y-axis. The line crosses the ellipse at the two marked points (0, −3) and (1, 0).","xMin":-5,"xMax":5,"yMin":-6,"yMax":5,"unit":22,"tickLabels":"x","tickStep":2,"circles":[{"at":[0,0],"rx":1,"ry":3}],"lines":[{"slope":3,"intercept":-3,"label":"y = 3x − 3"}],"points":[{"at":[0,-3],"label":"(0, −3)"},{"at":[1,0],"label":"(1, 0)"}],"texts":[{"at":[-1.2,-1.75],"text":"9x² + y² = 9","anchor":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="Solve the system by using substitution: $\left\{\begin{array}{l}4x^2+y^2=4\\y=x+2\end{array}\right.$. Enter both ordered-pair solutions."
  answer="(-\frac{4}{5},\frac{6}{5}),(0,2)"
  answerForm="lowest-terms"
  answerMode="unordered"
  answerDisplay="$\left(-\tfrac{4}{5},\tfrac{6}{5}\right),(0,2)$"
  hint="The second equation is already solved for $y$: substitute it into the first, solve the quadratic for $x$, and find $y$ for each value."
>}}

So far, each system of nonlinear equations has had at least one solution. The
next example will show another option.

### Example 11.36

Solve the system by using substitution:

$$
\left\{\begin{array}{l}x^2-y=0\\y=x-2\end{array}\right.
$$

**Solution.** The first graph is a parabola and the second is a line. Since
$y=x-2$, substitute $x-2$ for $y$ in the first equation:

$$
x^2-(x-2)=0
\quad\Longrightarrow\quad
x^2-x+2=0.
$$

This does not factor easily, so check the discriminant:

$$
b^2-4ac=(-1)^2-4(1)(2)=-7.
$$

The discriminant is negative, so there is no real solution. The system has no
solution, and the graph agrees: the line never meets the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola x² − y = 0, which is y = x², and the line y = x − 2, on a grid from −5 to 5 on both axes. The line passes below and to the right of the parabola and never meets it.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"tickLabels":true,"tickStep":4,"quadratics":[{"a":1}],"lines":[{"slope":1,"intercept":-2,"label":"y = x − 2"}],"texts":[{"at":[-4.4,3.5],"text":"y = x²"}]}
{{< /apfigure >}}

{{< fillin
  question="Solve the system by using substitution: $\left\{\begin{array}{l}x^2-y=0\\y=2x-3\end{array}\right.$. How many real solutions does the system have?"
  answer="0"
  answerForm="decimal"
  answerDisplay="$0$ (no solution)"
  hint="After substitution, inspect the discriminant."
>}}

## Solve a System of Nonlinear Equations Using Elimination

When we studied systems of linear equations, we used the method of elimination
to solve the system. We can also use elimination to solve systems of nonlinear
equations. It works well when the equations have both variables squared. When
using elimination, we try to make the coefficients of one variable to be
opposites, so when we add the equations together, that variable is eliminated.

The elimination method is very similar to the elimination method that we used
for systems of linear equations. The steps are listed for reference.

{{< callout type="info" >}}
### How To: Solve a system of equations by elimination

1. Identify the graph of each equation. Sketch the possible options for
   intersection.
2. Write both equations in standard form.
3. Make the coefficients of one variable opposites. Decide which variable
   you will eliminate. Multiply one or both equations so that the
   coefficients of that variable are opposites.
4. Add the equations resulting from Step 3 to eliminate one variable.
5. Solve for the remaining variable.
6. Substitute each solution from Step 5 into one of the original equations.
   Then solve for the other variable.
7. Write each solution as an ordered pair.
8. Check that each ordered pair is a solution to both original equations.
{{< /callout >}}

### Example 11.37

Solve the system by elimination:

$$
\left\{\begin{array}{l}x^2+y^2=4\\x^2-y=4\end{array}\right.
$$

**Solution.** The graphs are a circle and a parabola. A circle and a parabola
can intersect in zero, one, two, three, or four points:

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a circle and an upward-opening parabola whose vertex lies above the circle, so they do not meet.","xMin":-3,"xMax":3,"yMin":-3,"yMax":6,"unit":14,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":2}],"quadratics":[{"a":1,"c":3}]}
{{< /apfigure >}}

*0 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a circle and an upward-opening parabola whose vertex touches the top of the circle at one marked point.","xMin":-3,"xMax":3,"yMin":-3,"yMax":6,"unit":14,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":2}],"quadratics":[{"a":1,"c":2}],"points":[{"at":[0,2]}]}
{{< /apfigure >}}

*1 solution*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a circle and an upward-opening parabola whose vertex lies inside the circle, crossing it at two marked points.","xMin":-3,"xMax":3,"yMin":-3,"yMax":6,"unit":14,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":2}],"quadratics":[{"a":1,"c":-1}],"points":[{"at":[1.5175,1.3028]},{"at":[-1.5175,1.3028]}]}
{{< /apfigure >}}

*2 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a circle and an upward-opening parabola whose vertex touches the bottom of the circle, meeting it at three marked points.","xMin":-3,"xMax":3,"yMin":-3,"yMax":6,"unit":14,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":2}],"quadratics":[{"a":1,"c":-2}],"points":[{"at":[0,-2]},{"at":[1.7321,1]},{"at":[-1.7321,1]}]}
{{< /apfigure >}}

*3 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a circle and an upward-opening parabola whose vertex lies below the circle, crossing it at four marked points.","xMin":-3,"xMax":3,"yMin":-3,"yMax":6,"unit":14,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":2}],"quadratics":[{"a":1,"c":-3}],"points":[{"at":[1.9021,0.618]},{"at":[-1.9021,0.618]},{"at":[1.1756,-1.618]},{"at":[-1.1756,-1.618]}]}
{{< /apfigure >}}

*4 solutions*

Both equations are in standard form. Multiply the second equation by $-1$ and add:

$$
\begin{array}{rcl}
x^2+y^2&=&4\\
-x^2+y&=&-4\\ \hline
y^2+y&=&0.
\end{array}
$$

Thus $y(y+1)=0$, so $y=0$ or $y=-1$. Substitute into $x^2-y=4$:

$$
\begin{aligned}
y=0&:\quad x^2=4,\quad x=\pm2,\\
y=-1&:\quad x^2=3,\quad x=\pm\sqrt3.
\end{aligned}
$$

The solutions are $(-2,0)$, $(2,0)$, $(\sqrt3,-1)$, and
$(-\sqrt3,-1)$. We leave the checks for each of the four solutions to you.
The graph shows the circle and the parabola meeting at these four points.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The circle x² + y² = 4, centered at the origin with radius 2, and the parabola x² − y = 4, which is y = x² − 4 with vertex (0, −4), on a grid from −5 to 5 on both axes, numbered at ±3. They meet at the four marked points (−2, 0), (2, 0), (−√3, −1), and (√3, −1).","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":30,"tickLabels":true,"tickStep":3,"circles":[{"at":[0,0],"r":2}],"quadratics":[{"a":1,"c":-4}],"points":[{"at":[-2,0],"label":"(−2, 0)"},{"at":[2,0],"label":"(2, 0)"},{"at":[1.7321,-1],"label":"(√3, −1)"},{"at":[-1.7321,-1],"label":"(−√3, −1)"}]}
{{< /apfigure >}}

{{< fillin
  question="Solve the system by elimination: $\left\{\begin{array}{l}x^2+y^2=9\\x^2-y=9\end{array}\right.$. Enter all four ordered-pair solutions in exact form."
  answer="(-3,0),(3,0),(-2\sqrt{2},-1),(2\sqrt{2},-1)"
  answerForm="exact simplified-radical"
  answerMode="unordered"
  answerDisplay="$(-3,0),(3,0),(-2\sqrt{2},-1),(2\sqrt{2},-1)$"
  hint="Multiply the second equation by $-1$ and add to eliminate $x^2$; solve for $y$, then substitute each $y$-value back to find $x$, simplifying any radical."
>}}

A circle and a hyperbola can also intersect in zero, one, two, three, or four
points:

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a hyperbola opening left and right, and a small circle above its center, between the branches, touching neither branch.","xMin":-4,"xMax":4,"yMin":-3,"yMax":3,"unit":14,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":1,"b":1}],"circles":[{"at":[0,1.8],"r":0.7}]}
{{< /apfigure >}}

*0 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a hyperbola opening left and right, and a small circle inside the right branch that touches the branch at its vertex, one marked point.","xMin":-4,"xMax":4,"yMin":-3,"yMax":3,"unit":14,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":1,"b":1}],"circles":[{"at":[2,0],"r":1}],"points":[{"at":[1,0]}]}
{{< /apfigure >}}

*1 solution*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a hyperbola opening left and right, and a small circle that crosses the right branch at two marked points.","xMin":-4,"xMax":4,"yMin":-3,"yMax":3,"unit":14,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":1,"b":1}],"circles":[{"at":[1.5,0],"r":1}],"points":[{"at":[1.4114,0.9961]},{"at":[1.4114,-0.9961]}]}
{{< /apfigure >}}

*2 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a hyperbola opening left and right, and a circle that crosses the left branch at two marked points and touches the right branch at its vertex, three marked points in all.","xMin":-4,"xMax":4,"yMin":-3,"yMax":3,"unit":14,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":1,"b":1}],"circles":[{"at":[-1,0],"r":2}],"points":[{"at":[1,0]},{"at":[-2,1.7321]},{"at":[-2,-1.7321]}]}
{{< /apfigure >}}

*3 solutions*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Sketch: a hyperbola opening left and right, and a circle centered between the branches that crosses each branch twice, four marked points in all.","xMin":-4,"xMax":4,"yMin":-3,"yMax":3,"unit":14,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":1,"b":1}],"circles":[{"at":[0,0],"r":2}],"points":[{"at":[1.5811,1.2247]},{"at":[1.5811,-1.2247]},{"at":[-1.5811,1.2247]},{"at":[-1.5811,-1.2247]}]}
{{< /apfigure >}}

*4 solutions*

### Example 11.38

Solve the system by elimination:

$$
\left\{\begin{array}{l}x^2+y^2=7\\x^2-y^2=1\end{array}\right.
$$

**Solution.** The graphs are a circle and a hyperbola. Both equations are in
standard form. The coefficients of $y^2$ are opposite, so add the equations:

$$
2x^2=8,\qquad x^2=4,\qquad x=\pm2.
$$

Substitute $x=2$ and $x=-2$ into either original equation:

$$
4+y^2=7,\qquad y^2=3,\qquad y=\pm\sqrt3.
$$

The solutions are $(-2,\sqrt3)$, $(-2,-\sqrt3)$, $(2,\sqrt3)$, and
$(2,-\sqrt3)$. We leave the checks for each of the four solutions to you.
The graph shows the circle and the hyperbola meeting at these four points.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The circle x² + y² = 7, centered at the origin with radius √7, and the hyperbola x² − y² = 1, with vertices (−1, 0) and (1, 0), on a grid from −5 to 5 on both axes, numbered at ±3. They meet at the four marked points (2, √3), (2, −√3), (−2, √3), and (−2, −√3).","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":26,"tickLabels":true,"tickStep":3,"circles":[{"at":[0,0],"r":2.6458}],"hyperbolas":[{"at":[0,0],"a":1,"b":1}],"points":[{"at":[2,1.7321],"label":"(2, √3)","labelSide":"e"},{"at":[2,-1.7321],"label":"(2, −√3)","labelSide":"e"},{"at":[-2,1.7321],"label":"(−2, √3)","labelSide":"w"},{"at":[-2,-1.7321],"label":"(−2, −√3)","labelSide":"w"}]}
{{< /apfigure >}}

{{< fillin
  question="Solve the system by elimination: $\left\{\begin{array}{l}x^2+y^2=25\\y^2-x^2=7\end{array}\right.$. Enter all four ordered-pair solutions, separated by commas."
  answer="(-3,-4),(-3,4),(3,-4),(3,4)"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$(-3,-4),(-3,4),(3,-4),(3,4)$"
  hint="Add the equations to eliminate $x^2$, solve for $y$, then substitute each $y$-value back to find $x$."
>}}

## Use a System of Nonlinear Equations to Solve Applications

Systems of nonlinear equations can be used to model and solve many
applications. We will look at an everyday geometric situation as our example.

### Example 11.39

The difference of the squares of two numbers is 15. The sum of the numbers is
5. Find the numbers.

**Solution.** Let $x$ be the first number and $y$ the second number. Translate
the information into a system:

$$
\left\{\begin{array}{l}x^2-y^2=15\\x+y=5\end{array}\right.
$$

Solve the second equation for $x$, $x=5-y$, and substitute:

$$
\begin{aligned}
(5-y)^2-y^2&=15\\
25-10y+y^2-y^2&=15\\
25-10y&=15\\
-10y&=-10\\
y&=1.
\end{aligned}
$$

Then $x+1=5$, so $x=4$. The numbers are 1 and 4.

{{< fillin
  question="The difference of the squares of two numbers is $-20$. The sum of the numbers is $10$. Find the numbers. Enter the two numbers, separated by a comma."
  answer="4,6"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$4$ and $6$"
  hint="Write one equation for each sentence, solve the linear one for one variable, and substitute into the other."
>}}

### Example 11.40

Myra purchased a small 25-inch TV for her kitchen. The size of a TV is
measured on the diagonal of the screen. The screen also has an area of 300
square inches. What are the length and width of the TV screen?

**Solution.** Let $x$ be the width of the rectangle and $y$ its length. Draw
a diagram to help visualize the situation.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A rectangle with its left side labeled x, its bottom side labeled y, and a diagonal from the top-left corner to the bottom-right corner labeled 25 inches.","polygons":[{"points":[[0,0],[6,0],[6,3],[0,3]],"fill":true,"edgeLabels":["y",null,null,"x"]}],"segments":[{"from":[0,3],"to":[6,0],"label":"25 in."}]}
{{< /apfigure >}}

The diagonal of the right triangle is 25 inches, and the area is 300 square
inches:

$$
\left\{\begin{array}{l}x^2+y^2=625\\xy=300\end{array}\right.
$$

Solve the second equation for $x$, $x=\frac{300}{y}$, and substitute:

$$
\begin{aligned}
\left(\frac{300}{y}\right)^2+y^2&=625\\
\frac{90{,}000}{y^2}+y^2&=625\\
90{,}000+y^4&=625y^2\\
y^4-625y^2+90{,}000&=0\\
(y^2-225)(y^2-400)&=0.
\end{aligned}
$$

Thus $y=\pm15$ or $y=\pm20$. Since $y$ is a side of the rectangle, discard
the negative values. If the length is 15 inches, the width is 20 inches. If
the length is 20 inches, the width is 15 inches.

{{< fillin
  question="Edgar purchased a small 20-inch TV for his garage. The size of a TV is measured on the diagonal of the screen. The screen also has an area of $192$ square inches. What are the length and width of the TV screen? Enter the two side lengths in inches, separated by a comma."
  answer="12,16"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$12$ inches and $16$ inches"
  hint="Let $x$ and $y$ be the sides: write one equation from the diagonal and the Pythagorean Theorem and one from the area, then solve by substitution."
>}}

## Key terms

A **system of nonlinear equations** is a system where at least
one of the equations is not linear.

## Practice

### Solve a System of Nonlinear Equations Using Graphing

{{< fillin
  question="Solve the system $\left\{\begin{array}{l}y=6x-4\\y=2x^2\end{array}\right.$ by graphing. Enter both ordered-pair solutions."
  answer="(1,2),(2,8)"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$(1,2),(2,8)$"
  hint="Substitute $6x-4$ for $y$ in $y=2x^2$ and solve the resulting quadratic for $x$."
>}}

{{< multiplechoice
  question="Solve the system $\left\{\begin{array}{l}y=x-1\\y=x^2+1\end{array}\right.$ by graphing. Does the system have a real-number solution?"
  answer="No"
  hint="Substitute $x-1$ for $y$ in $y=x^2+1$ and check the discriminant of the resulting quadratic."
>}}
No
Yes
{{< /multiplechoice >}}

### Solve a System of Nonlinear Equations Using Substitution

{{< fillin
  question="Solve $\left\{\begin{array}{l}9x^2+4y^2=36\\x=2\end{array}\right.$ using substitution. Enter the solution as an ordered pair."
  answer="(2,0)"
  answerForm="decimal"
  answerDisplay="$(2,0)$"
  hint="Substitute $x=2$ into the ellipse equation and solve for $y$."
>}}

{{< fillin
  question="Solve $\left\{\begin{array}{l}x^2+y^2=169\\x=12\end{array}\right.$ using substitution. Enter both solutions."
  answer="(12,-5),(12,5)"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$(12,-5),(12,5)$"
  hint="Substitute $x=12$ into the circle equation and solve for $y$, keeping both signs of the square root."
>}}

{{< multiplechoice
  question="Solve $\left\{\begin{array}{l}2y^2-x=0\\y=x+1\end{array}\right.$ using substitution. Does the system have a real-number solution?"
  answer="No"
  hint="Substitute $x=y-1$ into $2y^2-x=0$ and check the discriminant of the resulting quadratic in $y$."
>}}
No
Yes
{{< /multiplechoice >}}

### Solve a System of Nonlinear Equations Using Elimination

{{< fillin
  question="Solve $\left\{\begin{array}{l}x^2+y^2=16\\x^2-y^2=16\end{array}\right.$ using elimination. Enter both solutions."
  answer="(-4,0),(4,0)"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$(-4,0),(4,0)$"
  hint="Add the equations to eliminate $y^2$, solve for $x$, and then find $y$."
>}}

{{< fillin
  question="Solve $\left\{\begin{array}{l}x^2-y^2=3\\2x^2+y^2=6\end{array}\right.$ using elimination. Enter both solutions in exact form."
  answer="(-\sqrt3,0),(\sqrt3,0)"
  answerForm="exact simplified-radical"
  answerMode="unordered"
  answerDisplay="$(-\sqrt3,0),(\sqrt3,0)$"
  hint="Add the equations to eliminate $y^2$, solve for $x^2$, and then find $y$."
>}}

### Use a System of Nonlinear Equations to Solve Applications

{{< fillin
  question="The sum of the squares of two numbers is $113$. The difference of the numbers is $1$. Find the numbers. Enter the two positive numbers, separated by a comma."
  answer="8,7"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$8$ and $7$"
  hint="Write one equation for each sentence, solve the linear one for one variable, and substitute into the other."
>}}

{{< multiplechoice
  question="Donnette's TV has a $50$-inch diagonal screen with area $1{,}200$ square inches, and her entertainment center's TV insert is $38$ inches by $27$ inches. Will the TV screen fit in the insert?"
  answer="No"
  hint="Write a system from the diagonal and the area, solve it for the screen's length and width, then compare each dimension with the insert's."
>}}
No
Yes
{{< /multiplechoice >}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 11.5](https://openstax.org/books/intermediate-algebra-2e/pages/11-5-solve-systems-of-nonlinear-equations) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: omitted readiness quizzes, self-checks, media links, and the Key Concepts list (it repeats the How To steps); set the step-by-step equation images as text; redrew the Example 11.33 and 11.34 graphs with their intersection points marked and labeled, the rectangle diagram of Example 11.40, and the sketches of the ways two graphs can intersect (the parabola-and-line sketch once, in Example 11.33, not again in Example 11.36); added graphs of the systems in Examples 11.35–11.38, which the source solves algebraically without graphing; wrote the source sentence "There are also four options when we consider a circle and a hyperbola" as zero, one, two, three, or four intersection points, the five cases its own figure draws; converted selected Try It problems to interactive questions; and adapted selected end-of-section exercises into an interactive Practice block.</small>
