---
title: "Systems of Nonlinear Equations and Inequalities: Two Variables"
description: >-
  Solving systems that mix a parabola, circle, or ellipse with a line or with
  each other by substitution and by elimination, then graphing a single
  nonlinear inequality and a system of nonlinear inequalities as a shaded
  feasible region — adapted from OpenStax Precalculus 2e, Section 9.3.
source_section: "9.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve a system of nonlinear equations using substitution
- Solve a system of nonlinear equations using elimination
- Graph a nonlinear inequality
- Graph a system of nonlinear inequalities
{{< /callout >}}

Halley's Comet orbits the sun about once every 75 years. Its path can be considered to be a very elongated ellipse. Other comets follow similar paths in space. These orbital paths can be studied using systems of equations. These systems, however, are different from the ones we considered in the previous section because the equations are not linear.

In this section, we will consider the intersection of a parabola and a line, a circle and a line, and a circle and an ellipse. The methods for solving systems of nonlinear equations are similar to those for linear equations.

### Solving a System of Nonlinear Equations Using Substitution

A **system of nonlinear equations** is a system of two or more equations in two or more variables containing at least one equation that is not linear. Recall that a linear equation can take the form $Ax+By+C=0$. Any equation that cannot be written in this form is nonlinear. The substitution method we used for linear systems is the same method we will use for nonlinear systems. We solve one equation for one variable and then substitute the result into the second equation to solve for another variable, and so on. There is, however, a variation in the possible outcomes.

#### Intersection of a Parabola and a Line

There are three possible types of solutions for a system of nonlinear equations involving a **parabola** and a line.

{{< callout type="info" >}}
  **Possible Types of Solutions for Points of Intersection of a Parabola and a Line.** The figures below illustrate possible solution sets for a system of equations involving a parabola and a line.

  - No solution. The line will never intersect the parabola.
  - One solution. The line is tangent to the parabola and intersects the parabola at exactly one point.
  - Two solutions. The line crosses on the inside of the parabola and intersects the parabola at two points.

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A parabola opening upward with its vertex below the x-axis, and a line rising from lower left to upper right that never touches the parabola.","xMin":-8,"xMax":8,"yMin":-8,"yMax":6,"tickLabels":true,"quadratics":[{"a":1,"c":-4}],"lines":[{"slope":2,"intercept":-6}]}
  {{< /apfigure >}}

  *(a) No solutions.*

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A parabola opening upward and a rising line that touches the parabola at exactly one point, its lowest point in the pictured window.","xMin":-2,"xMax":5,"yMin":-6,"yMax":1,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":1}],"lines":[{"slope":2,"intercept":-8}],"points":[{"at":[3,-2]}]}
  {{< /apfigure >}}

  *(b) One solution.*

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A parabola opening upward and a rising line that crosses through the inside of the parabola, meeting it at two points.","xMin":-3,"xMax":4,"yMin":-1,"yMax":6,"tickLabels":true,"quadratics":[{"a":1,"c":1}],"lines":[{"slope":1,"intercept":2}],"points":[{"at":[1.618,3.618]},{"at":[-0.618,1.382]}]}
  {{< /apfigure >}}

  *(c) Two solutions.*
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a system of equations containing a line and a parabola, find the solution.

  1. Solve the linear equation for one of the variables.
  2. Substitute the expression obtained in step one into the parabola equation.
  3. Solve for the remaining variable.
  4. Check your solutions in both equations.
{{< /callout >}}

**Example.** Solve the system of equations.

$$
\begin{array}{lrcl}
& x-y &=& -1 \\[4pt]
& y &=& x^2+1
\end{array}
$$

**Solution.** Solve the first equation for $x$ and then substitute the resulting expression into the second equation.

$$
\begin{array}{lrcl}
& x-y &=& -1 \\[4pt]
& x &=& y-1
\end{array}
$$

$$
\begin{array}{lrcl}
& y &=& x^2+1 \\[4pt]
& y &=& (y-1)^2+1
\end{array}
$$

Expand the equation and set it equal to zero.

$$
\begin{array}{lrcl}
& y &=& (y-1)^2+1 \\[4pt]
& &=& (y^2-2y+1)+1 \\[4pt]
& &=& y^2-2y+2 \\[4pt]
0 &=& y^2-3y+2 \\[4pt]
& &=& (y-2)(y-1)
\end{array}
$$

Solving for $y$ gives $y=2$ and $y=1$. Next, substitute each value for $y$ into the first equation to solve for $x$. Always substitute the value into the linear equation to check for extraneous solutions.

$$
\begin{array}{lrcl}
& x-y &=& -1 \\[4pt]
& x-(2) &=& -1 \\[4pt]
& x &=& 1
\end{array}
$$

$$
\begin{array}{lrcl}
& x-(1) &=& -1 \\[4pt]
& x &=& 0
\end{array}
$$

The solutions are $(1,2)$ and $(0,1)$, which can be verified by substituting these $(x,y)$ values into both of the original equations. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward and a rising line, intersecting at two points.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"quadratics":[{"a":1,"c":1}],"lines":[{"slope":1,"intercept":1,"label":"x − y = −1"}],"points":[{"at":[1,2],"label":"(1, 2)"},{"at":[0,1],"label":"(0, 1)"}],"texts":[{"at":[-4.6,5.7],"text":"y = x²+1"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Could we have substituted values for $y$ into the second equation to solve for $x$ in the example above?*

  Yes, but because $x$ is squared in the second equation this could give us extraneous solutions for $x$.

  For $y=1$:

  $$
  \begin{array}{lrcl}
  & y &=& x^2+1 \\[4pt]
  & 1 &=& x^2+1 \\[4pt]
  & x^2 &=& 0 \\[4pt]
  & x &=& \pm\sqrt0=0
  \end{array}
  $$

  This gives us the same value as in the solution.

  For $y=2$:

  $$
  \begin{array}{lrcl}
  & y &=& x^2+1 \\[4pt]
  & 2 &=& x^2+1 \\[4pt]
  & x^2 &=& 1 \\[4pt]
  & x &=& \pm\sqrt1=\pm1
  \end{array}
  $$

  Notice that $-1$ is an extraneous solution.
{{< /callout >}}

{{< fillin
  question="Solve the given system of equations by substitution. Enter both solutions as ordered pairs $(x,y)$, separated by a comma. $\begin{cases}3x-y=-2\\2x^2-y=0\end{cases}$"
  answer="\left(-\frac{1}{2},\frac{1}{2}\right),\left(2,8\right)"
  answerMode="unordered"
  answerDisplay="$\left(-\tfrac12,\tfrac12\right)$ and $(2,8)$"
  hint="Solve $3x-y=-2$ for $y$, substitute into $2x^2-y=0$, and solve the resulting quadratic in $x$."
>}}

#### Intersection of a Circle and a Line

Just as with a parabola and a line, there are three possible outcomes when solving a system of equations representing a circle and a line.

{{< callout type="info" >}}
  **Possible Types of Solutions for the Points of Intersection of a Circle and a Line.** The figures below illustrate possible solution sets for a system of equations involving a **circle** and a line.

  - No solution. The line does not intersect the circle.
  - One solution. The line is tangent to the circle and intersects the circle at exactly one point.
  - Two solutions. The line crosses the circle and intersects it at two points.

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"A circle with a diagonal line passing well to its side, never touching it.","circles":[{"at":[0,0],"r":2}],"segments":[{"from":[-3,1],"to":[-1,-3],"arrow":"both"}]}
  {{< /apfigure >}}

  *(a) No solutions.*

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"A circle with a diagonal line touching its edge at exactly one point.","circles":[{"at":[0,0],"r":2}],"segments":[{"from":[-3.5,-0.672],"to":[1,3.828],"arrow":"both"}],"points":[{"at":[-1.414,1.414]}]}
  {{< /apfigure >}}

  *(b) One solution.*

  {{< apfigure kind="figure" >}}
  {"ariaLabel":"A circle with a diagonal line passing through its interior, crossing the circle at two points.","circles":[{"at":[0,0],"r":2}],"segments":[{"from":[-2.5,-2],"to":[2.5,3],"arrow":"both"}]}
  {{< /apfigure >}}

  *(c) Two solutions.*
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given a system of equations containing a line and a circle, find the solution.

  1. Solve the linear equation for one of the variables.
  2. Substitute the expression obtained in step one into the equation for the circle.
  3. Solve for the remaining variable.
  4. Check your solutions in both equations.
{{< /callout >}}

**Example.** Find the intersection of the given circle and the given line by substitution.

$$
\begin{array}{lrcl}
& x^2+y^2 &=& 5 \\[4pt]
& y &=& 3x-5
\end{array}
$$

**Solution.** One of the equations has already been solved for $y$. We will substitute $y=3x-5$ into the equation for the circle.

$$
\begin{array}{lrcl}
& x^2+(3x-5)^2 &=& 5 \\[4pt]
& x^2+9x^2-30x+25 &=& 5 \\[4pt]
& 10x^2-30x+20 &=& 0
\end{array}
$$

Now, we factor and solve for $x$.

$$
\begin{array}{lrcl}
& 10(x^2-3x+2) &=& 0 \\[4pt]
& 10(x-2)(x-1) &=& 0 \\[4pt]
& x &=& 2 \\[4pt]
& x &=& 1
\end{array}
$$

Substitute the two $x$-values into the original linear equation to solve for $y$.

$$
\begin{array}{lrcl}
& y &=& 3(2)-5 \\[4pt]
& &=& 1
\end{array}
$$

$$
\begin{array}{lrcl}
& y &=& 3(1)-5 \\[4pt]
& &=& -2
\end{array}
$$

The line intersects the circle at $(2,1)$ and $(1,-2)$, which can be verified by substituting these $(x,y)$ values into both of the original equations. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle and a line intersecting at two points.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"tickLabels":true,"circles":[{"at":[0,0],"r":2.23606797749979}],"lines":[{"slope":3,"intercept":-5,"label":"y = 3x − 5"}],"points":[{"at":[2,1],"label":"(2, 1)"},{"at":[1,-2],"label":"(1, -2)"}],"texts":[{"at":[-2.7,2.4],"text":"x²+y²=5"}]}
{{< /apfigure >}}

{{< fillin
  question="Solve the system of nonlinear equations. Enter the solution as an ordered pair $(x,y)$. $\begin{cases}x^2+y^2=10\\x-3y=-10\end{cases}$"
  answer="\left(-1,3\right)"
  answerDisplay="$(-1,3)$"
  hint="Solve $x-3y=-10$ for $x$ and substitute into $x^2+y^2=10$; the resulting quadratic in $y$ has a repeated root."
>}}

### Solving a System of Nonlinear Equations Using Elimination

We have seen that substitution is often the preferred method when a system of equations includes a linear equation and a nonlinear equation. However, when both equations in the system have like variables of the second degree, solving them using elimination by addition is often easier than substitution. Generally, **elimination** is a far simpler method when the system involves only two equations in two variables (a two-by-two system), rather than a three-by-three system, as there are fewer steps. As an example, we will investigate the possible types of solutions when solving a system of equations representing a **circle** and an ellipse.

{{< callout type="info" >}}
  **Possible Types of Solutions for the Points of Intersection of a Circle and an Ellipse.** The figures below illustrate possible solution sets for a system of equations involving a circle and an **ellipse**.

  - No solution. The circle and ellipse do not intersect. One shape is inside the other or the circle and the ellipse are a distance away from the other.
  - One solution. The circle and ellipse are tangent to each other, and intersect at exactly one point.
  - Two solutions. The circle and the ellipse intersect at two points.
  - Three solutions. The circle and the ellipse intersect at three points.
  - Four solutions. The circle and the ellipse intersect at four points.

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A circle and a smaller ellipse positioned well apart, not touching.","xMin":-2.2,"xMax":2.2,"yMin":-3.5,"yMax":2,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":1.3},{"at":[0,-2.5],"rx":1.1,"ry":0.5}]}
  {{< /apfigure >}}

  *(a) No solution.*

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A circle and an ellipse just touching at a single point.","xMin":-2.2,"xMax":2.2,"yMin":-2.7,"yMax":1.8,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":1.5},{"at":[0,-2],"rx":1.3,"ry":0.5}]}
  {{< /apfigure >}}

  *(b) One solution.*

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A circle and a wider ellipse overlapping, crossing at two points.","xMin":-2,"xMax":3,"yMin":-2,"yMax":2,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":1.5},{"at":[0.8,0],"rx":1.8,"ry":0.6}]}
  {{< /apfigure >}}

  *(c) Two solutions.*

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A circle and a wide ellipse touching on one side and crossing on the other, meeting at three points total.","xMin":-2,"xMax":3,"yMin":-2.2,"yMax":2.2,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":1.5},{"at":[0.5,0],"rx":2,"ry":0.7}]}
  {{< /apfigure >}}

  *(d) Three solutions.*

  {{< apfigure kind="graph" >}}
  {"ariaLabel":"A circle and an ellipse overlapping broadly, crossing at four points.","xMin":-2,"xMax":3,"yMin":-2.2,"yMax":2.5,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"r":1.5},{"at":[0.5,0.2],"rx":2,"ry":1.0}]}
  {{< /apfigure >}}

  *(e) Four solutions.*
{{< /callout >}}

**Example.** Solve the system of nonlinear equations.

$$
\begin{array}{lrcl}
(1) & x^2+y^2 &=& 26 \\[4pt]
(2) & 3x^2+25y^2 &=& 100
\end{array}
$$

**Solution.** Let's begin by multiplying equation (1) by $-3$, and adding it to equation (2).

$$
\begin{array}{lrcl}
& -3x^2-3y^2 &=& -78 \\[4pt]
& 3x^2+25y^2 &=& 100 \\[4pt]
\hline
& 22y^2 &=& 22
\end{array}
$$

After we add the two equations together, we solve for $y$.

$$
\begin{array}{lrcl}
& y^2 &=& 1 \\[4pt]
& y &=& \pm\sqrt1=\pm1
\end{array}
$$

Substitute $y=\pm1$ into one of the equations and solve for $x$.

$$
\begin{array}{lrcl}
& x^2+(1)^2 &=& 26 \\[4pt]
& x^2+1 &=& 26 \\[4pt]
& x^2 &=& 25 \\[4pt]
& x &=& \pm\sqrt{25}=\pm5
\end{array}
$$

$$
\begin{array}{lrcl}
& x^2+(-1)^2 &=& 26 \\[4pt]
& x^2+1 &=& 26 \\[4pt]
& x^2 &=& 25=\pm5
\end{array}
$$

There are four solutions: $(5,1)$, $(-5,1)$, $(5,-1)$, and $(-5,-1)$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle and a horizontal ellipse intersecting at four points.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"circles":[{"at":[0,0],"r":5.0990195135927845},{"at":[0,0],"rx":5.773502691896258,"ry":2}],"points":[{"at":[5,1],"label":"(5, 1)"},{"at":[-5,1],"label":"(-5, 1)"},{"at":[5,-1],"label":"(5, -1)"},{"at":[-5,-1],"label":"(-5, -1)","labelSide":"sw"}]}
{{< /apfigure >}}

{{< fillin
  question="Find the solution set for the given system of nonlinear equations. Enter all four solutions as ordered pairs $(x,y)$, separated by commas. $\begin{cases}4x^2+y^2=13\\x^2+y^2=10\end{cases}$"
  answer="\left(1,3\right),\left(1,-3\right),\left(-1,3\right),\left(-1,-3\right)"
  answerMode="unordered"
  answerDisplay="$(1,3)$, $(1,-3)$, $(-1,3)$, and $(-1,-3)$"
  hint="Subtract $x^2+y^2=10$ from $4x^2+y^2=13$ to eliminate $y^2$, solve for $x$, then use either equation to find both values of $y$ for each $x$."
>}}

### Graphing a Nonlinear Inequality

All of the equations in the systems that we have encountered so far have involved equalities, but we may also encounter systems that involve inequalities. We have already learned to graph linear inequalities by graphing the corresponding equation, and then shading the region represented by the **inequality** symbol. Now, we will follow similar steps to graph a nonlinear inequality so that we can learn to solve systems of nonlinear inequalities. A **nonlinear inequality** is an inequality containing a nonlinear expression. Graphing a nonlinear inequality is much like graphing a linear inequality.

Recall that when the inequality is greater than, $y>a$, or less than, $y<a$, the graph is drawn with a dashed line. When the inequality is greater than or equal to, $y\ge a$, or less than or equal to, $y\le a$, the graph is drawn with a solid line. The graphs will create regions in the plane, and we will test each region for a solution. If one point in the region works, the whole region works. That is the region we shade. See the figures below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y=x²−4 drawn dashed, with the region above it shaded.","xMin":-3,"xMax":3,"yMin":-6,"yMax":6,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":-4},"side":[0,3],"dashed":true}]}
{{< /apfigure >}}

*(a) An example of $y>a$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y=x²−4 drawn solid, with the region above it shaded.","xMin":-3,"xMax":3,"yMin":-6,"yMax":6,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":-4},"side":[0,3],"dashed":false}]}
{{< /apfigure >}}

*(b) An example of $y\ge a$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y=x²−4 drawn dashed, with the region below it shaded.","xMin":-3,"xMax":3,"yMin":-6,"yMax":6,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":-4},"side":[0,-5.5],"dashed":true}]}
{{< /apfigure >}}

*(c) An example of $y<a$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y=x²−4 drawn solid, with the region below it shaded.","xMin":-3,"xMax":3,"yMin":-6,"yMax":6,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":-4},"side":[0,-5.5],"dashed":false}]}
{{< /apfigure >}}

*(d) An example of $y\le a$.*

{{< callout type="info" >}}
  **How To:** given an inequality bounded by a parabola, sketch a graph.

  1. Graph the parabola as if it were an equation. This is the boundary for the region that is the solution set.
  2. If the boundary is included in the region (the operator is $\le$ or $\ge$), the parabola is graphed as a solid line.
  3. If the boundary is not included in the region (the operator is $<$ or $>$), the parabola is graphed as a dashed line.
  4. Test a point in one of the regions to determine whether it satisfies the inequality statement. If the statement is true, the solution set is the region including the point. If the statement is false, the solution set is the region on the other side of the boundary line.
  5. Shade the region representing the solution set.
{{< /callout >}}

**Example.** Graph the inequality $y>x^2+1$.

**Solution.** First, graph the corresponding equation $y=x^2+1$. Since $y>x^2+1$ has a greater than symbol, we draw the graph with a dashed line. Then we choose points to test both inside and outside the parabola. Let's test the points $(0,2)$ and $(2,0)$. One point is clearly inside the parabola and the other point is clearly outside.

$$
\begin{array}{lrcl}
& 2 &>& (0)^2+1 \\[4pt]
& 2 &>& 1\quad\text{True}
\end{array}
$$

$$
\begin{array}{lrcl}
& 0 &>& (2)^2+1 \\[4pt]
& 0 &>& 5\quad\text{False}
\end{array}
$$

The graph is shown below. We can see that the solution set consists of all points inside the parabola, but not on the graph itself.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y=x²+1 drawn dashed, with the region above it shaded, and test points marked at (0, 2) inside the region and (2, 0) outside it.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":1},"side":[0,2],"dashed":true}],"points":[{"at":[0,2],"label":"(0, 2)"},{"at":[2,0],"label":"(2, 0)"}]}
{{< /apfigure >}}

### Graphing a System of Nonlinear Inequalities

Now that we have learned to graph nonlinear inequalities, we can learn how to graph systems of nonlinear inequalities. A **system of nonlinear inequalities** is a system of two or more inequalities in two or more variables containing at least one inequality that is not linear. Graphing a system of nonlinear inequalities is similar to graphing a system of linear inequalities. The difference is that our graph may result in more shaded regions that represent a solution than we find in a system of linear inequalities. The solution to a nonlinear system of inequalities is the region of the graph where the shaded regions of the graph of each inequality overlap, or where the regions intersect, called the **feasible region**.

{{< callout type="info" >}}
  **How To:** given a system of nonlinear inequalities, sketch a graph.

  1. Find the intersection points by solving the corresponding system of nonlinear equations.
  2. Graph the nonlinear equations.
  3. Find the shaded regions of each inequality.
  4. Identify the feasible region as the intersection of the shaded regions of each inequality or the set of points common to each inequality.
{{< /callout >}}

**Example.** Graph the given system of inequalities.

$$
\begin{array}{lrcl}
& x^2-y &\le& 0 \\[4pt]
& 2x^2+y &\le& 12
\end{array}
$$

**Solution.** These two equations are clearly parabolas. We can find the points of intersection by the elimination process: Add both equations and the variable $y$ will be eliminated. Then we solve for $x$.

$$
\begin{array}{lrcl}
& x^2-y &=& 0 \\[4pt]
& 2x^2+y &=& 12 \\[4pt]
\hline
& 3x^2 &=& 12 \\[4pt]
& x^2 &=& 4 \\[4pt]
& x &=& \pm2
\end{array}
$$

Substitute the $x$-values into one of the equations and solve for $y$.

$$
\begin{array}{lrcl}
& x^2-y &=& 0 \\[4pt]
& (2)^2-y &=& 0 \\[4pt]
& 4-y &=& 0 \\[4pt]
& y &=& 4
\end{array}
$$

$$
\begin{array}{lrcl}
& (-2)^2-y &=& 0 \\[4pt]
& 4-y &=& 0 \\[4pt]
& y &=& 4
\end{array}
$$

The two points of intersection are $(2,4)$ and $(-2,4)$. Notice that the equations can be rewritten as follows.

$$
\begin{array}{lrcl}
& x^2-y &\le& 0 \\[4pt]
& x^2 &\le& y \\[4pt]
& y &\ge& x^2
\end{array}
$$

$$
\begin{array}{lrcl}
& 2x^2+y &\le& 12 \\[4pt]
& y &\le& -2x^2+12
\end{array}
$$

Graph each inequality. See the figure below. The feasible region is the region between the two equations bounded by $2x^2+y\le12$ on the top and $x^2-y\le0$ on the bottom.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two parabolas, one opening upward and one opening downward, each drawn solid; the lens-shaped region between them, where both inequalities hold, is shaded darker than the rest of each shaded half-plane, and the two curves cross at two labeled points.","xMin":-12,"xMax":12,"yMin":-2,"yMax":14,"tickLabels":true,"xTickStep":2,"regions":[{"quadratic":{"a":1,"c":0},"side":[0,4],"dashed":false},{"quadratic":{"a":-2,"c":12},"side":[0,4],"dashed":false}],"points":[{"at":[-2,4],"label":"(-2, 4)"},{"at":[2,4],"label":"(2, 4)"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which graph shows the solution region of the system of inequalities $y\ge x^2-1$, $x-y\ge-1$?"
  mode="graph"
  answerIndex="0"
  hint="Rewrite the second inequality as $y\le x+1$; the boundaries are both included (solid), and the feasible region lies above the parabola and below the line."
>}}
{"ariaLabel":"An upward-opening parabola and a rising line, both drawn solid; the region above the parabola and the region below the line overlap between the two curves.","xMin":-4,"xMax":4,"yMin":-3,"yMax":5,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":-1},"side":[0,3],"dashed":false},{"line":{"slope":1,"intercept":1},"side":[0,-5],"dashed":false}]}
===OPT===
{"ariaLabel":"An upward-opening parabola and a rising line, both drawn dashed; the region above the parabola and the region below the line overlap between the two curves.","xMin":-4,"xMax":4,"yMin":-3,"yMax":5,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":-1},"side":[0,3],"dashed":true},{"line":{"slope":1,"intercept":1},"side":[0,-5],"dashed":true}]}
===OPT===
{"ariaLabel":"An upward-opening parabola and a rising line, both drawn solid; the region above the parabola and the region above the line are shaded.","xMin":-4,"xMax":4,"yMin":-3,"yMax":5,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":-1},"side":[0,3],"dashed":false},{"line":{"slope":1,"intercept":1},"side":[0,4],"dashed":false}]}
===OPT===
{"ariaLabel":"An upward-opening parabola and a rising line, both drawn solid; the region below the parabola and the region below the line are shaded.","xMin":-4,"xMax":4,"yMin":-3,"yMax":5,"tickLabels":true,"regions":[{"quadratic":{"a":1,"c":-1},"side":[0,-2],"dashed":false},{"line":{"slope":1,"intercept":1},"side":[0,-5],"dashed":false}]}
{{< /multiplechoice >}}

## Key concepts

- There are three possible types of solutions to a system of equations representing a line and a parabola: no solution, the line does not intersect the parabola; one solution, the line is tangent to the parabola; and two solutions, the line intersects the parabola in two points.
- There are three possible types of solutions to a system of equations representing a circle and a line: no solution, the line does not intersect the circle; one solution, the line is tangent to the circle; two solutions, the line intersects the circle in two points.
- There are five possible types of solutions to the system of nonlinear equations representing an ellipse and a circle: no solution, the circle and the ellipse do not intersect; one solution, the circle and the ellipse are tangent to each other; two solutions, the circle and the ellipse intersect in two points; three solutions, the circle and ellipse intersect in three places; four solutions, the circle and the ellipse intersect in four points.
- An inequality is graphed in much the same way as an equation, except for $>$ or $<$, we draw a dashed line and shade the region containing the solution set.
- Inequalities are solved the same way as equalities, but solutions to systems of inequalities must satisfy both inequalities.

## Practice

### Solve a system of nonlinear equations using substitution

{{< fillin
  question="Solve the system of nonlinear equations using substitution. Enter both solutions as ordered pairs $(x,y)$, separated by a comma. $\begin{cases}y=x-3\\x^2+y^2=9\end{cases}$"
  answer="\left(0,-3\right),\left(3,0\right)"
  answerMode="unordered"
  answerDisplay="$(0,-3)$ and $(3,0)$"
  hint="Substitute $y=x-3$ into the circle's equation and solve the resulting quadratic in $x$."
>}}

{{< fillin
  question="Solve the system of nonlinear equations using substitution. Enter both solutions as ordered pairs $(x,y)$, separated by a comma. $\begin{cases}y=-x\\x^2+y^2=9\end{cases}$"
  answer="\left(\frac{3\sqrt{2}}{2},-\frac{3\sqrt{2}}{2}\right),\left(-\frac{3\sqrt{2}}{2},\frac{3\sqrt{2}}{2}\right)"
  answerMode="unordered"
  answerDisplay="$\left(\tfrac{3\sqrt2}{2},-\tfrac{3\sqrt2}{2}\right)$ and $\left(-\tfrac{3\sqrt2}{2},\tfrac{3\sqrt2}{2}\right)$"
  hint="Substitute $y=-x$ into the circle's equation; solving $2x^2=9$ gives two opposite-signed values of $x$."
>}}

### Solve a system of nonlinear equations using elimination

{{< fillin
  question="Solve the system of nonlinear equations using elimination. Enter both solutions as ordered pairs $(x,y)$, separated by a comma. $\begin{cases}4x^2-9y^2=36\\4x^2+9y^2=36\end{cases}$"
  answer="\left(3,0\right),\left(-3,0\right)"
  answerMode="unordered"
  answerDisplay="$(3,0)$ and $(-3,0)$"
  hint="Add the two equations to eliminate $y^2$ entirely, then solve for $x$."
>}}

{{< fillin
  question="Solve the system of nonlinear equations using elimination. Enter both solutions as ordered pairs $(x,y)$, separated by a comma. $\begin{cases}2x^2+4y^2=4\\2x^2-4y^2=25x-10\end{cases}$"
  answer="\left(\frac{1}{4},-\frac{\sqrt{62}}{8}\right),\left(\frac{1}{4},\frac{\sqrt{62}}{8}\right)"
  answerMode="unordered"
  answerDisplay="$\left(\tfrac14,-\tfrac{\sqrt{62}}{8}\right)$ and $\left(\tfrac14,\tfrac{\sqrt{62}}{8}\right)$"
  hint="Add the two equations to eliminate $y^2$, solve the resulting quadratic in $x$ for both roots, then substitute each root back into the first equation for $y^2$ — one root will not produce a real $y$."
>}}

### Graph a nonlinear inequality

{{< fillin
  question="The boundary of the inequality $x^2+y<9$ is the parabola $y=9-x^2$. Give its vertex as an ordered pair $(x,y)$."
  answer="\left(0,9\right)"
  answerDisplay="$(0,9)$"
  hint="Write the boundary in vertex form $y=a(x-h)^2+k$; the vertex is $(h,k)$."
>}}

{{< multiplechoice
  question="Which graph shows the solution region of the inequality $x^2+y<9$?"
  mode="graph"
  answerIndex="1"
  hint="Rewrite the boundary as $y=9-x^2$, a downward-opening parabola; the strict inequality means the boundary is excluded (dashed), and $x^2+y<9$ means $y<9-x^2$, the region below the parabola."
>}}
{"ariaLabel":"A downward-opening parabola with vertex at (0, 9), drawn solid, with the region below it shaded.","xMin":-5,"xMax":5,"yMin":-6,"yMax":10,"tickLabels":true,"regions":[{"quadratic":{"a":-1,"c":9},"side":[0,-5],"dashed":false}]}
===OPT===
{"ariaLabel":"A downward-opening parabola with vertex at (0, 9), drawn dashed, with the region below it shaded.","xMin":-5,"xMax":5,"yMin":-6,"yMax":10,"tickLabels":true,"regions":[{"quadratic":{"a":-1,"c":9},"side":[0,-5],"dashed":true}]}
===OPT===
{"ariaLabel":"A downward-opening parabola with vertex at (0, 4), drawn dashed, with the region below it shaded.","xMin":-5,"xMax":5,"yMin":-6,"yMax":10,"tickLabels":true,"regions":[{"quadratic":{"a":-1,"c":4},"side":[0,-5],"dashed":true}]}
===OPT===
{"ariaLabel":"A downward-opening parabola with vertex at (0, 9), drawn dashed, with the region above it shaded.","xMin":-5,"xMax":5,"yMin":-6,"yMax":10,"tickLabels":true,"regions":[{"quadratic":{"a":-1,"c":9},"side":[0,15],"dashed":true}]}
{{< /multiplechoice >}}

### Graph a system of nonlinear inequalities

{{< fillin
  question="Graph the system of inequalities $x^2+y<1$, $y>2x$. Give both boundary intersection points as ordered pairs $(x,y)$, separated by a comma."
  answer="\left(\sqrt{2}-1,2\sqrt{2}-2\right),\left(-1-\sqrt{2},-2-2\sqrt{2}\right)"
  answerMode="unordered"
  answerDisplay="$\left(\sqrt2-1,2\sqrt2-2\right)$ and $\left(-1-\sqrt2,-2-2\sqrt2\right)$"
  hint="Set the boundaries equal: $1-x^2=2x$, solve the quadratic for $x$, then use $y=2x$ at each root."
>}}

{{< multiplechoice
  question="Which graph shows the solution region of the system of inequalities $x^2+y<1$, $y>2x$?"
  mode="graph"
  answerIndex="3"
  hint="Rewrite the first inequality as $y<1-x^2$; both boundaries are excluded (dashed), and the feasible region lies below the parabola and above the line."
>}}
{"ariaLabel":"A downward-opening parabola and a rising line through the origin, both drawn dashed; the region below the parabola and the region below the line are shaded.","xMin":-4,"xMax":3,"yMin":-6,"yMax":3,"tickLabels":true,"regions":[{"quadratic":{"a":-1,"c":1},"side":[0,0],"dashed":true},{"line":{"slope":2,"intercept":0},"side":[-1,-4],"dashed":true}]}
===OPT===
{"ariaLabel":"A downward-opening parabola and a rising line through the origin, both drawn dashed; the region above the parabola and the region above the line are shaded.","xMin":-4,"xMax":3,"yMin":-6,"yMax":3,"tickLabels":true,"regions":[{"quadratic":{"a":-1,"c":1},"side":[0,5],"dashed":true},{"line":{"slope":2,"intercept":0},"side":[-1,0],"dashed":true}]}
===OPT===
{"ariaLabel":"A downward-opening parabola and a rising line, both drawn solid instead of dashed, with the region below the parabola and the region above the line overlapping between the two curves.","xMin":-4,"xMax":3,"yMin":-6,"yMax":3,"tickLabels":true,"regions":[{"quadratic":{"a":-1,"c":1},"side":[0,0],"dashed":false},{"line":{"slope":2,"intercept":0},"side":[-1,0],"dashed":false}]}
===OPT===
{"ariaLabel":"A downward-opening parabola and a rising line, both drawn dashed; the region below the parabola and the region above the line overlap in a lens shape between the two curves.","xMin":-4,"xMax":3,"yMin":-6,"yMax":3,"tickLabels":true,"regions":[{"quadratic":{"a":-1,"c":1},"side":[0,0],"dashed":true},{"line":{"slope":2,"intercept":0},"side":[-1,0],"dashed":true}]}
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 9.3: Systems of Nonlinear Equations and Inequalities: Two Variables](https://openstax.org/books/precalculus-2e/pages/9-3-systems-of-nonlinear-equations-and-inequalities-two-variables) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: the module's opening "Coreq Skills" prelude (a corequisite review of graphing a parabola and a circle, tagged IA 11.2.1/IA 11.1.4 for a separate, non-precalculus course) is prerequisite remediation rather than Section 9.3 content and is omitted, following the same house convention already used for every other coreq-skills-bearing module in this book (e.g. Section 4.2); the section's own four learning objectives, from the module's abstract, are unaffected. Omitted the credit photograph of Halley's Comet, keeping the sentence that introduces it. Recreated every instructional figure as an accessible spec-first SVG: the parabola/line and circle/line "possible types of solutions" panels, each independently re-derived to produce the stated 0/1/2 intersection count rather than traced from the source art; the circle/ellipse "possible types of solutions" panels (0 through 4 intersections), each configuration's intersection count confirmed numerically before drawing, though rendered on visible (if unlabeled) axes since the figure engine's axis-free `figure` primitive has no ellipse; the four-panel parabola-inequality shading figure and both worked-example answer graphs, using the engine's new quadratic-boundary shaded-region capability; and every circle/line/ellipse intersection figure, plotted from the exact algebraic solution rather than the printed art. The two remaining circle-or-ellipse-boundary "types of solutions" figures (the circle/line and circle/ellipse panels) have no linear or quadratic boundary for the shading engine to fill, so — like every other bare-circle figure in this book — they are drawn as unshaded curves; this only affects the illustrative overview panels, never a graded exercise, since every graded shaded-region question in this section has a line or parabola boundary. **The grader cannot take `\langle a,b\rangle` or a picture as a submitted answer**, so a solution region is always posed as a `multiplechoice` recognition question over rendered graphs (never a fill-in), and a system's boundary intersection points are posed as a separate fill-in keyed as an unordered list of ordered pairs $(x,y)$ — verified working, including radical coordinates — with the question stating the expected count. Try It 4 ("graph $y\ge x^2-1$, $x-y\ge-1$") carries no printed answer in the source at all (a graph-only Try It); its intersection points and feasible region were independently derived and it was authored as a graph-recognition multiple choice, the only faithful graded form for a shaded-region ask. The lone "graph the inequality" and "graph the system of inequalities" end-of-section exercises with an answer key figure ($x^2+y<9$; and $x^2+y<1,\ y>2x$, whose key even prints the two boundary intersection points) were each split into two Practice components — a computed fill-in (a vertex, or the intersection points) plus a recognition multiple choice — since the printed exercise supports both asks and one source item cannot otherwise fill an objective's two-exercise minimum; the sibling "graph the inequality" exercise ($x^2+y^2<4$) carries no answer at all in the source and was not used. Two end-of-section exercises with a circle-and-hyperbola or ellipse-and-hyperbola boundary were not used for the same reason the overview panels go unshaded: the shading engine has no hyperbola-boundary region. Ten source exercises — the section's four Try Its and six end-of-section exercises, two of the latter split as just described — were adapted into twelve interactive components across the four in-page Try Its and the closing Practice block, one Practice group per objective, every one independently re-derived by computation (including by running the arithmetic in Node) rather than read off the source key.</small>
