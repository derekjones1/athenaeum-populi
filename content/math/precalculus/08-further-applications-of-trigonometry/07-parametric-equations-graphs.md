---
title: "Parametric Equations: Graphs"
description: >-
  Sketching a plane curve from a table of $t$, $x(t)$, $y(t)$ values with its
  orientation, comparing a parametric plot against its eliminated rectangular
  equation, and modeling projectile motion with parametric equations —
  adapted from OpenStax Precalculus 2e, Section 8.7.
source_section: "8.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph plane curves described by parametric equations by plotting points
- Graph parametric equations
{{< /callout >}}

While not every fan (or team manager) appreciates it, baseball and many other sports have become dependent on analytics, which involve complex data recording and quantitative evaluation used to understand and predict behavior. The earliest influence of analytics was mostly statistical; more recently, physics and other sciences have come into play. Foremost among these is the focus on launch angle and exit velocity, which when at certain values can almost guarantee a home run. On the other hand, emphasis on launch angle and focusing on home runs rather than overall hitting results in far more outs. Consider the following situation: it is the bottom of the ninth inning, with two outs and two players on base. The home team is losing by two runs. The batter swings and hits the baseball at 140 feet per second and at an angle of approximately $45^\circ$ to the horizontal. How far will the ball travel? Will it clear the fence for a game-winning home run? The outcome may depend partly on other factors (for example, the wind), but mathematicians can model the path of a projectile and predict approximately how far it will travel using **parametric equations**. In this section, we'll discuss parametric equations and some common applications, such as projectile motion problems.

### Graphing Parametric Equations by Plotting Points

In lieu of a graphing calculator or a computer graphing program, plotting points to represent the graph of an equation is the standard method. As long as we are careful in calculating the values, point-plotting is highly dependable.

{{< callout type="info" >}}
  **How to:** given a pair of parametric equations, sketch a graph by plotting points.

  1. Construct a table with three columns: $t$, $x(t)$, and $y(t)$.
  2. Evaluate $x$ and $y$ for values of $t$ over the interval for which the functions are defined.
  3. Plot the resulting pairs $(x,y)$.
{{< /callout >}}

**Example.** Sketch the graph of the parametric equations $x(t)=t^2+1$, $y(t)=2+t$.

**Solution.** Construct a table of values for $t$, $x(t)$, and $y(t)$, and plot the points in a plane.

| $t$ | $x(t)=t^2+1$ | $y(t)=2+t$ |
| :--- | ---: | ---: |
| $-5$ | $26$ | $-3$ |
| $-4$ | $17$ | $-2$ |
| $-3$ | $10$ | $-1$ |
| $-2$ | $5$ | $0$ |
| $-1$ | $2$ | $1$ |
| $0$ | $1$ | $2$ |
| $1$ | $2$ | $3$ |
| $2$ | $5$ | $4$ |
| $3$ | $10$ | $5$ |
| $4$ | $17$ | $6$ |
| $5$ | $26$ | $7$ |

The graph is a **parabola** with vertex at the point $(1,2)$, opening to the right. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The plane curve x(t)=t squared plus 1, y(t)=2+t: a parabola opening to the right with vertex at (1,2), marked at the table points (10,-1), (5,0), (2,1), (1,2), (2,3), (5,4), (10,5) for t from -3 to 3 and running on past them to the edge of the grid, with an arrowhead on the lower branch pointing toward the vertex and arrowheads on the upper branch pointing away from it, all in the direction of increasing t.","xMin":0,"xMax":11,"yMin":-2,"yMax":6,"grid":true,"tickLabels":true,"unit":45,"quadratics":[{"a":1,"b":-4,"c":5,"sideways":true,"from":-1.1623,"to":0.4,"arrows":"end"},{"a":1,"b":-4,"c":5,"sideways":true,"from":0.4,"to":3.6,"arrows":"end"},{"a":1,"b":-4,"c":5,"sideways":true,"from":3.6,"to":5.1623,"arrows":"end"}],"points":[{"at":[10,-1],"label":"t = -3, (10, -1)"},{"at":[5,0],"label":"t = -2, (5, 0)"},{"at":[2,1],"label":"t = -1, (2, 1)"},{"at":[1,2],"label":"t = 0, (1, 2)"},{"at":[2,3],"label":"t = 1, (2, 3)"},{"at":[5,4],"label":"t = 2, (5, 4)"},{"at":[10,5],"label":"t = 3, (10, 5)"}]}
{{< /apfigure >}}

**Analysis.** As values for $t$ progress in a positive direction from $0$ to $5$, the plotted points trace out the top half of the parabola. As values of $t$ become negative, they trace out the lower half of the parabola. There are no restrictions on the domain. The arrows indicate direction according to increasing values of $t$. The graph does not represent a function, as it will fail the vertical line test. The graph is drawn in two parts: the positive values for $t$, and the negative values for $t$.

{{< multiplechoice
  question="Sketch the graph of the parametric equations $x=\sqrt t$, $y=2t+3$, $0\le t\le3$."
  mode="graph"
  answerIndex="0"
  hint="Eliminate the parameter: solve $x=\sqrt t$ for $t$ and substitute into $y=2t+3$. Then use the sign of $\sqrt t$ and the points at $t=0$ and $t=3$ to see which part of that curve is traced, and in which direction."
>}}
{"ariaLabel":"The right half of an upward-opening parabola with vertex at (0,3), running from (0,3) to about (1.73,9), with an arrow pointing away from the vertex.","xMin":-2.2,"xMax":2.2,"yMin":-3,"yMax":10,"grid":true,"tickLabels":true,"unit":40,"quadratics":[{"a":2,"c":3,"from":0,"to":1.7321,"arrows":"end"}]}
===OPT===
{"ariaLabel":"A full upward-opening parabola with vertex at (0,3), both branches drawn from about (-1.73,9) to (1.73,9), with an arrow pointing away from the vertex on the right branch.","xMin":-2.2,"xMax":2.2,"yMin":-3,"yMax":10,"grid":true,"tickLabels":true,"unit":40,"quadratics":[{"a":2,"c":3,"from":-1.7321,"to":1.7321,"arrows":"end"}]}
===OPT===
{"ariaLabel":"The right half of a downward-opening parabola with vertex at (0,3), running from (0,3) to about (1.73,-3), with an arrow pointing away from the vertex.","xMin":-2.2,"xMax":2.2,"yMin":-4,"yMax":4,"grid":true,"tickLabels":true,"unit":40,"quadratics":[{"a":-2,"c":3,"from":0,"to":1.7321,"arrows":"end"}]}
{{< /multiplechoice >}}

**Example.** Construct a table of values for the given parametric equations and sketch the graph:

$$
\begin{array}{l}
x=2\cos t \\[4pt]
y=4\sin t
\end{array}
$$

**Solution.** Construct a table like the one below using angle measure in radians as inputs for $t$, and evaluating $x$ and $y$. Using angles with known sine and cosine values for $t$ makes calculations easier.

| $t$ | $x=2\cos t$ | $y=4\sin t$ |
| :--- | ---: | ---: |
| $0$ | $2$ | $0$ |
| $\tfrac{\pi}{6}$ | $\sqrt3$ | $2$ |
| $\tfrac{\pi}{3}$ | $1$ | $2\sqrt3$ |
| $\tfrac{\pi}{2}$ | $0$ | $4$ |
| $\tfrac{2\pi}{3}$ | $-1$ | $2\sqrt3$ |
| $\tfrac{5\pi}{6}$ | $-\sqrt3$ | $2$ |
| $\pi$ | $-2$ | $0$ |
| $\tfrac{7\pi}{6}$ | $-\sqrt3$ | $-2$ |
| $\tfrac{4\pi}{3}$ | $-1$ | $-2\sqrt3$ |
| $\tfrac{3\pi}{2}$ | $0$ | $-4$ |
| $\tfrac{5\pi}{3}$ | $1$ | $-2\sqrt3$ |
| $\tfrac{11\pi}{6}$ | $\sqrt3$ | $-2$ |
| $2\pi$ | $2$ | $0$ |

The figure below shows the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An ellipse taller than it is wide, traced by x=2cos t, y=4sin t, marked at (2,0) for t=0, (0,4) for t=pi/2, (-1.73,2) for t=5pi/6, and (1.73,-2) for t=11pi/6, with an arrow indicating a counterclockwise direction of travel.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"grid":true,"tickLabels":true,"unit":40,"circles":[{"at":[0,0],"rx":2,"ry":4}],"points":[{"at":[2,0],"label":"t = 0, (2, 0)"},{"at":[0,4],"label":"t = π/2, (0, 4)"},{"at":[-1.7321,2],"label":"t = 5π/6, (−√3, 2)"},{"at":[1.7321,-2],"label":"t = 11π/6, (√3, −2)"}],"segments":[{"from":[1.9328,1.0283],"to":[1.8095,1.7038],"arrows":"end"},{"from":[-1.9328,-1.0283],"to":[-1.8095,-1.7038],"arrows":"end"}]}
{{< /apfigure >}}

By the symmetry shown in the values of $x$ and $y$, we see that the parametric equations represent an **ellipse**. The ellipse is mapped in a counterclockwise direction as shown by the arrows indicating increasing $t$ values.

**Analysis.** We have seen that parametric equations can be graphed by plotting points. However, a graphing calculator will save some time and reveal nuances in a graph that may be too tedious to discover using only hand calculations.

Make sure to change the mode on the calculator to parametric (PAR). To confirm, the $Y=$ window should show

$$
\begin{array}{l}
X_{1T}= \\[4pt]
Y_{1T}=
\end{array}
$$

instead of $Y_1=$.

{{< multiplechoice
  question="Graph the parametric equations: $x=5\cos t$, $y=3\sin t$."
  mode="graph"
  answerIndex="1"
  hint="Make a table for $t=0$, $\tfrac{\pi}{2}$, $\pi$, and $\tfrac{3\pi}{2}$ to find where the curve crosses each axis, then plot the points in order of increasing $t$."
>}}
{"ariaLabel":"A circle of radius 5 centered at the origin, with an arrow indicating a counterclockwise direction of travel starting from (5,0).","xMin":-6.5,"xMax":6.5,"yMin":-6.5,"yMax":6.5,"grid":true,"tickLabels":true,"unit":30,"circles":[{"at":[0,0],"rx":5,"ry":5}],"segments":[{"from":[4.8446,1.237],"to":[4.5022,2.1748],"arrows":"end"}]}
===OPT===
{"ariaLabel":"An ellipse wider than it is tall, semi-axis 5 along the x-axis and 3 along the y-axis, centered at the origin, with an arrow indicating a counterclockwise direction of travel starting from (5,0).","xMin":-6.5,"xMax":6.5,"yMin":-6.5,"yMax":6.5,"grid":true,"tickLabels":true,"unit":30,"circles":[{"at":[0,0],"rx":5,"ry":3}],"segments":[{"from":[4.964,0.3591],"to":[4.5654,1.2233],"arrows":"end"}]}
===OPT===
{"ariaLabel":"An ellipse taller than it is wide, semi-axis 3 along the x-axis and 5 along the y-axis, centered at the origin, with an arrow indicating a counterclockwise direction of travel starting from (3,0).","xMin":-6.5,"xMax":6.5,"yMin":-6.5,"yMax":6.5,"grid":true,"tickLabels":true,"unit":30,"circles":[{"at":[0,0],"rx":3,"ry":5}],"segments":[{"from":[2.8992,1.2854],"to":[2.7269,2.0844],"arrows":"end"}]}
{{< /multiplechoice >}}

**Example.** Graph the parametric equations $x=5\cos t$ and $y=2\sin t$. First, construct the graph using data points generated from the **parametric form**. Then graph the **rectangular form** of the equation. Compare the two graphs.

**Solution.** Construct a table of values like the one below.

| $t$ | $x=5\cos t$ | $y=2\sin t$ |
| :--- | ---: | ---: |
| $0$ | $x=5\cos(0)=5$ | $y=2\sin(0)=0$ |
| $1$ | $x=5\cos(1)\approx2.7$ | $y=2\sin(1)\approx1.7$ |
| $2$ | $x=5\cos(2)\approx-2.1$ | $y=2\sin(2)\approx1.8$ |
| $3$ | $x=5\cos(3)\approx-4.95$ | $y=2\sin(3)\approx0.28$ |
| $4$ | $x=5\cos(4)\approx-3.3$ | $y=2\sin(4)\approx-1.5$ |
| $5$ | $x=5\cos(5)\approx1.4$ | $y=2\sin(5)\approx-1.9$ |
| $-1$ | $x=5\cos(-1)\approx2.7$ | $y=2\sin(-1)\approx-1.7$ |
| $-2$ | $x=5\cos(-2)\approx-2.1$ | $y=2\sin(-2)\approx-1.8$ |
| $-3$ | $x=5\cos(-3)\approx-4.95$ | $y=2\sin(-3)\approx-0.28$ |
| $-4$ | $x=5\cos(-4)\approx-3.3$ | $y=2\sin(-4)\approx1.5$ |
| $-5$ | $x=5\cos(-5)\approx1.4$ | $y=2\sin(-5)\approx1.9$ |

Plot the $(x,y)$ values from the table. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An ellipse wider than it is tall, plotted from the parametric table, marked at (5,0) for t=0, (-2.1,1.8) for t=2, and (-2.1,-1.8) for t=-2, with an arrow indicating a counterclockwise direction of travel.","xMin":-6.5,"xMax":6.5,"yMin":-3.2,"yMax":3.2,"grid":true,"tickLabels":true,"unit":30,"circles":[{"at":[0,0],"rx":5,"ry":2}],"points":[{"at":[5,0],"label":"t = 0"},{"at":[-2.1,1.8],"label":"t = 2"},{"at":[-2.1,-1.8],"label":"t = -2"}],"segments":[{"from":[4.5654,0.8155],"to":[4.1823,1.096],"arrows":"end"},{"from":[-4.5654,-0.8155],"to":[-4.1823,-1.096],"arrows":"end"}]}
{{< /apfigure >}}

*(a) Plotted from the parametric table of values.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same ellipse wider than it is tall, plotted directly from the rectangular equation x squared over 25 plus y squared over 4 equals 1.","xMin":-6.5,"xMax":6.5,"yMin":-3.2,"yMax":3.2,"grid":true,"tickLabels":true,"unit":30,"circles":[{"at":[0,0],"rx":5,"ry":2}]}
{{< /apfigure >}}

*(b) Plotted from the rectangular equation $\tfrac{x^2}{25}+\tfrac{y^2}{4}=1$.*

Next, translate the parametric equations to rectangular form. To do this, we solve for $t$ in either $x(t)$ or $y(t)$, and then substitute the expression for $t$ in the other equation. The result will be a function $y(x)$ if solving for $t$ as a function of $x$, or $x(y)$ if solving for $t$ as a function of $y$.

$$
\begin{array}{lrcl}
& x &=& 5\cos t \\[4pt]
\text{Solve for}\ \cos t. & \tfrac{x}{5} &=& \cos t \\[4pt]
& y &=& 2\sin t \\[4pt]
\text{Solve for}\ \sin t. & \tfrac{y}{2} &=& \sin t
\end{array}
$$

Then, use the **Pythagorean Theorem**.

$$
\begin{array}{lrcl}
& \cos^2t+\sin^2t &=& 1 \\[4pt]
& \left(\tfrac{x}{5}\right)^2+\left(\tfrac{y}{2}\right)^2 &=& 1 \\[4pt]
& \tfrac{x^2}{25}+\tfrac{y^2}{4} &=& 1
\end{array}
$$

**Analysis.** In the figure below, the data from the parametric equations and the rectangular equation are plotted together. The parametric equations are plotted as a solid curve; the graph for the rectangular equation is drawn on top of the parametric plot in a dashed style. Clearly, both forms produce the same graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The two overlaid ellipses coincide exactly: a solid ellipse traced from the parametric equations lies directly under a dashed ellipse traced from the rectangular equation, wider than it is tall.","xMin":-6.5,"xMax":6.5,"yMin":-3.2,"yMax":3.2,"grid":true,"tickLabels":true,"unit":30,"circles":[{"at":[0,0],"rx":5,"ry":2},{"at":[0,0],"rx":5,"ry":2,"dashed":true}],"segments":[{"from":[4.5654,0.8155],"to":[4.1823,1.096],"arrows":"end"},{"from":[-4.5654,-0.8155],"to":[-4.1823,-1.096],"arrows":"end"}]}
{{< /apfigure >}}

*(c) The parametric plot (solid) and the rectangular plot (dashed) coincide exactly.*

**Example.** Graph the parametric equations $x=t+1$ and $y=\sqrt t$, $t\ge0$, and the rectangular equivalent $y=\sqrt{x-1}$ on the same coordinate system.

**Solution.** Construct a table of values for the parametric equations, as we did in the previous example, and graph $y=\sqrt t$, $t\ge0$ on the same grid, as in the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve rising from (1,0) to about (9,2.83), plotted twice: a solid curve from the parametric equations and a dashed curve from the rectangular equation y equals the square root of x minus 1, exactly overlapping, with an arrow pointing in the direction of increasing t.","xMin":0,"xMax":9,"yMin":-2,"yMax":4,"grid":true,"tickLabels":true,"unit":45,"curves":[{"kind":"sqrt","a":1,"h":1,"arrows":"end"},{"kind":"sqrt","a":1,"h":1,"dashed":true,"arrows":false}]}
{{< /apfigure >}}

**Analysis.** With the domain on $t$ restricted, we only plot positive values of $t$. The parametric data is graphed as a solid curve and the graph of the rectangular equation is dashed on top of it. Once again, we see that the two forms overlap.

{{< multiplechoice
  question="Sketch the graph of the parametric equations $x=2\cos\theta$ and $y=4\sin\theta$, along with the rectangular equation, on the same grid."
  mode="graph"
  answerIndex="2"
  hint="Solve each equation for $\cos\theta$ and $\sin\theta$, substitute into $\cos^2\theta+\sin^2\theta=1$, and graph the equation you get on the same grid as the parametric curve."
>}}
{"ariaLabel":"A tall solid ellipse, semi-axis 2 along the x-axis and 4 along the y-axis, with an arrow indicating a counterclockwise direction of travel, and a dashed wide ellipse, semi-axis 4 along the x-axis and 2 along the y-axis, drawn over it, so the two curves cross instead of coinciding.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"grid":true,"tickLabels":true,"unit":40,"circles":[{"at":[0,0],"rx":2,"ry":4},{"at":[0,0],"rx":4,"ry":2,"dashed":true}],"segments":[{"from":[1.9775,0.5978],"to":[1.8787,1.3716],"arrows":"end"}]}
===OPT===
{"ariaLabel":"A tall solid ellipse, semi-axis 2 along the x-axis and 4 along the y-axis, with an arrow indicating a counterclockwise direction of travel, and a dashed straight line through (2,0) and (0,4) drawn over it, so the two graphs meet only at those two points.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"grid":true,"tickLabels":true,"unit":40,"lines":[{"through":[[2,0],[0,4]],"dashed":true,"arrows":false}],"circles":[{"at":[0,0],"rx":2,"ry":4}],"segments":[{"from":[1.9775,0.5978],"to":[1.8787,1.3716],"arrows":"end"}]}
===OPT===
{"ariaLabel":"A tall ellipse traced twice, exactly coinciding: a solid curve from the parametric equations directly under a dashed curve from the rectangular equation.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"grid":true,"tickLabels":true,"unit":40,"circles":[{"at":[0,0],"rx":2,"ry":4},{"at":[0,0],"rx":2,"ry":4,"dashed":true}],"segments":[{"from":[1.9775,0.5978],"to":[1.8787,1.3716],"arrows":"end"}]}
{{< /multiplechoice >}}

### Applications of Parametric Equations

Many of the advantages of parametric equations become obvious when applied to solving real-world problems. Although rectangular equations in $x$ and $y$ give an overall picture of an object's path, they do not reveal the position of an object at a specific time. Parametric equations, however, illustrate how the values of $x$ and $y$ change depending on $t$, as the location of a moving object at a particular time.

A common application of parametric equations is solving problems involving projectile motion. In this type of motion, an object is propelled forward in an upward direction forming an angle of $\theta$ to the horizontal, with an initial speed of $v_0$, and at a height $h$ above the horizontal.

The path of an object propelled at an inclination of $\theta$ to the horizontal, with initial speed $v_0$, and at a height $h$ above the horizontal, is given by

$$
\begin{array}{l}
x=(v_0\cos\theta)t \\[4pt]
y=-\tfrac12gt^2+(v_0\sin\theta)t+h
\end{array}
$$

where $g$ accounts for the effects of **gravity** and $h$ is the initial height of the object. Depending on the units involved in the problem, use $g=32\text{ ft/s}^2$ or $g=9.8\text{ m/s}^2$. The equation for $x$ gives horizontal distance, and the equation for $y$ gives the vertical distance.

{{< callout type="info" >}}
  **How to:** given a projectile motion problem, use parametric equations to solve.

  1. The horizontal distance is given by $x=(v_0\cos\theta)t$. Substitute the initial speed of the object for $v_0$.
  2. The expression $\cos\theta$ indicates the angle at which the object is propelled. Substitute that angle in degrees for $\cos\theta$.
  3. The vertical distance is given by the formula $y=-\tfrac12gt^2+(v_0\sin\theta)t+h$. The term $-\tfrac12gt^2$ represents the effect of gravity. Depending on units involved, use $g=32\text{ ft/s}^2$ or $g=9.8\text{ m/s}^2$. Again, substitute the initial speed for $v_0$, and the height at which the object was propelled for $h$.
  4. Proceed by calculating each term to solve for $t$.
{{< /callout >}}

**Example.** Solve the problem presented at the beginning of this section. Does the batter hit the game-winning home run? Assume that the ball is hit with an initial velocity of $140$ feet per second at an angle of $45^\circ$ to the horizontal, making contact $3$ feet above the ground.

ⓐ Find the parametric equations to model the path of the baseball.
ⓑ Where is the ball after $2$ seconds?
ⓒ How long is the ball in the air?
ⓓ Is it a home run?

**Solution.** ⓐ Use the formulas to set up the equations. The horizontal position is found using the parametric equation for $x$. Thus,

$$
\begin{array}{lrcl}
& x &=& (v_0\cos\theta)t \\[4pt]
& x &=& (140\cos(45^\circ))t
\end{array}
$$

The vertical position is found using the parametric equation for $y$. Thus,

$$
\begin{array}{lrcl}
& y &=& -16t^2+(v_0\sin\theta)t+h \\[4pt]
& y &=& -16t^2+(140\sin(45^\circ))t+3
\end{array}
$$

ⓑ Substitute $2$ into the equations to find the horizontal and vertical positions of the ball.

$$
\begin{array}{lrcl}
& x &=& (140\cos(45^\circ))(2) \\[4pt]
& x &\approx& 198\ \text{feet}
\end{array}
$$

$$
\begin{array}{lrcl}
& y &=& -16(2)^2+(140\sin(45^\circ))(2)+3 \\[4pt]
& y &\approx& 137\ \text{feet}
\end{array}
$$

After $2$ seconds, the ball is $198$ feet away from the batter's box and $137$ feet above the ground.

ⓒ To calculate how long the ball is in the air, we have to find out when it will hit the ground, or when $y=0$. Thus,

$$
\begin{array}{lrcl}
& y &=& -16t^2+(140\sin(45^\circ))t+3 \\[4pt]
\text{Set}\ y(t)=0\ \text{and solve the quadratic.} & 0 &=& -16t^2+(140\sin(45^\circ))t+3 \\[4pt]
& t &\approx& 6.2173
\end{array}
$$

When $t\approx6.2173$ seconds, the ball has hit the ground. (The quadratic equation can be solved in various ways, but this problem was solved using a computer math program.)

ⓓ We cannot confirm that the hit was a home run without considering the size of the outfield, which varies from field to field. However, for simplicity's sake, let's assume that the outfield wall is $400$ feet from home plate in the deepest part of the park. Let's also assume that the wall is $10$ feet high. In order to determine whether the ball clears the wall, we need to calculate how high the ball is when $x=400$ feet. So we will set $x=400$, solve for $t$, and input $t$ into $y$.

$$
\begin{array}{lrcl}
& x &=& (140\cos(45^\circ))t \\[4pt]
& 400 &=& (140\cos(45^\circ))t \\[4pt]
& t &\approx& 4.04
\end{array}
$$

$$
\begin{array}{lrcl}
& y &=& -16(4.04)^2+(140\sin(45^\circ))(4.04)+3 \\[4pt]
& y &\approx& 141.8
\end{array}
$$

The ball is $141.8$ feet in the air when it soars out of the ballpark. It was indeed a home run. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The trajectory of the baseball, a parabolic arc starting 3 feet above the hitter's position at the origin, rising to a peak of about 156 feet near 306 feet out, then falling back to the ground at about 615 feet, with arrowheads along the arc in the direction of travel; a short vertical mark at 400 feet rises to 10 feet, showing the outfield wall, which the trajectory clears well above.","xMin":0,"xMax":650,"yMin":-90,"yMax":310,"grid":true,"tickLabels":true,"xTickStep":100,"yTickStep":100,"unit":0.85,"polylines":[{"through":[[0.0,3.0],[12.37,15.12],[24.75,26.75],[37.12,37.87],[49.5,48.5],[61.87,58.62],[74.25,68.25],[86.62,77.37],[98.99,85.99],[111.37,94.12],[123.74,101.74],[136.12,108.87],[148.49,115.49]],"arrows":"end"},{"through":[[148.49,115.49],[160.68,121.53],[172.86,127.08],[185.04,132.14],[197.23,136.72],[209.41,140.81],[221.6,144.43],[233.78,147.55],[245.96,150.19],[258.15,152.35],[270.33,154.02],[282.52,155.21],[294.7,155.91],[306.88,156.12],[319.07,155.86],[331.25,155.1],[343.44,153.87],[355.62,152.15],[367.8,149.94],[379.99,147.25],[392.17,144.07],[404.36,140.41],[416.54,136.27],[428.72,131.64],[440.91,126.52],[453.09,120.92],[465.28,114.84]],"arrows":"end"},{"through":[[465.28,114.84],[477.79,108.08],[490.31,100.81],[502.83,93.03],[515.35,84.74],[527.86,75.94],[540.38,66.63],[552.9,56.8],[565.42,46.46],[577.93,35.62],[590.45,24.26],[602.97,12.38],[615.49,0]]}],"segments":[{"from":[397.6,0],"to":[397.6,10]},{"from":[398.4,0],"to":[398.4,10]},{"from":[399.2,0],"to":[399.2,10]},{"from":[400,0],"to":[400,10]},{"from":[400.8,0],"to":[400.8,10]},{"from":[401.6,0],"to":[401.6,10]},{"from":[402.4,0],"to":[402.4,10]},{"from":[48,-52],"to":[5,-5],"arrows":"end"}],"texts":[{"at":[52,-66],"text":"Position of hitter","anchor":"start"},{"at":[400,26],"text":"Outfield wall"},{"at":[175,175],"text":"Trajectory of ball"}]}
{{< /apfigure >}}

## Key concepts

- When there is a third variable, a third parameter on which $x$ and $y$ depend, parametric equations can be used.
- To graph parametric equations by plotting points, make a table with three columns labeled $t$, $x(t)$, and $y(t)$. Choose values for $t$ in increasing order. Plot the last two columns for $x$ and $y$.
- When graphing a parametric curve by plotting points, note the associated $t$-values and show arrows on the graph indicating the orientation of the curve.
- Parametric equations allow the direction or the orientation of the curve to be shown on the graph. Equations that are not functions can be graphed and used in many applications involving motion.
- Projectile motion depends on two parametric equations: $x=(v_0\cos\theta)t$ and $y=-16t^2+(v_0\sin\theta)t+h$. Initial velocity is symbolized as $v_0$. $\theta$ represents the initial angle of the object when thrown, and $h$ represents the height at which the object is propelled.

## Practice

### Graph plane curves described by parametric equations by plotting points

{{< multiplechoice
  question="Graph the set of parametric equations by making a table of values for $t=-3,-2,-1,0,1,2$, and include the orientation: $x(t)=t-1$, $y(t)=t^2$."
  mode="graph"
  answerIndex="1"
  hint="Notice $x=t-1$ increases the whole time $t$ does, so the curve is traced left to right; eliminate $t$ to see which way the parabola opens."
>}}
{"ariaLabel":"A downward-opening parabola with vertex at (-1,0), running from about (-4,-9) to (1,-4), with an arrow pointing to the right.","xMin":-5,"xMax":3,"yMin":-10,"yMax":2,"grid":true,"tickLabels":true,"unit":33,"quadratics":[{"a":-1,"b":-2,"c":-1,"from":-4,"to":1,"arrows":"end"}]}
===OPT===
{"ariaLabel":"An upward-opening parabola with vertex at (-1,0), running from about (-4,9) to (1,4), with an arrow pointing to the right.","xMin":-5,"xMax":3,"yMin":-1,"yMax":10,"grid":true,"tickLabels":true,"unit":33,"quadratics":[{"a":1,"b":2,"c":1,"from":-4,"to":1,"arrows":"end"}]}
===OPT===
{"ariaLabel":"An upward-opening parabola with vertex at (1,0), running from about (-2,9) to (3,4), with an arrow pointing to the right.","xMin":-3,"xMax":5,"yMin":-1,"yMax":10,"grid":true,"tickLabels":true,"unit":33,"quadratics":[{"a":1,"b":-2,"c":1,"from":-2,"to":3,"arrows":"end"}]}
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the set of parametric equations by making a table of values, and include the orientation: $x(t)=2\sin t$, $y(t)=4\cos t$."
  mode="graph"
  answerIndex="0"
  hint="Evaluate $x$ and $y$ at $t=0$, $\tfrac{\pi}{6}$, and $\tfrac{\pi}{2}$: the first point is where the curve starts, the next shows which way it first moves, and the table shows where it crosses each axis."
>}}
{"ariaLabel":"A tall ellipse, semi-axis 2 along the x-axis and 4 along the y-axis, centered at the origin, with an arrow on the right side of the curve pointing downward.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":true,"tickLabels":true,"unit":35,"circles":[{"at":[0,0],"rx":2,"ry":4}],"segments":[{"from":[1.5667,2.4864],"to":[1.8255,1.6339],"arrows":"end"}]}
===OPT===
{"ariaLabel":"A wide ellipse, semi-axis 4 along the x-axis and 2 along the y-axis, centered at the origin, with an arrow on the upper right of the curve pointing up and to the left.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":true,"tickLabels":true,"unit":35,"circles":[{"at":[0,0],"rx":4,"ry":2}],"segments":[{"from":[3.7575,0.6858],"to":[3.1843,1.2104],"arrows":"end"}]}
===OPT===
{"ariaLabel":"A tall ellipse, semi-axis 2 along the x-axis and 4 along the y-axis, centered at the origin, with an arrow on the right side of the curve pointing upward.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":true,"tickLabels":true,"unit":35,"circles":[{"at":[0,0],"rx":2,"ry":4}],"segments":[{"from":[1.8255,1.6339],"to":[1.5667,2.4864],"arrows":"end"}]}
{{< /multiplechoice >}}

{{< multiplechoice
  question="Sketch the curve and include the orientation: $x(t)=-\sqrt t$, $y(t)=t$."
  mode="graph"
  answerIndex="0"
  hint="Eliminate $t$ by substituting $y$ for $t$ in $x=-\sqrt t$, use the sign of $-\sqrt t$ to see which half of that graph appears, and compare the points at $t=0$ and $t=4$ for the direction."
>}}
{"ariaLabel":"The left half of an upward-opening parabola with vertex at the origin, running from (0,0) to (-2,4), with an arrow at (-2,4) pointing away from the vertex.","xMin":-3,"xMax":3,"yMin":-1,"yMax":5,"grid":true,"tickLabels":true,"unit":55,"quadratics":[{"a":1,"from":-2,"to":0,"arrows":"start"}]}
===OPT===
{"ariaLabel":"The right half of an upward-opening parabola with vertex at the origin, running from (0,0) to (2,4), with an arrow at (2,4) pointing away from the vertex.","xMin":-3,"xMax":3,"yMin":-1,"yMax":5,"grid":true,"tickLabels":true,"unit":55,"quadratics":[{"a":1,"from":0,"to":2,"arrows":"end"}]}
===OPT===
{"ariaLabel":"The left half of a downward-opening parabola with vertex at the origin, running from (0,0) to (-2,-4), with an arrow at (-2,-4) pointing away from the vertex.","xMin":-3,"xMax":3,"yMin":-5,"yMax":1,"grid":true,"tickLabels":true,"unit":55,"quadratics":[{"a":-1,"from":-2,"to":0,"arrows":"start"}]}
{{< /multiplechoice >}}

### Graph parametric equations

{{< fillin
  question="Eliminate the parameter to write the Cartesian equation of $x(t)=-2-2t$, $y(t)=3+t$ in slope-intercept form."
  answer="y=-\tfrac{1}{2}x+2"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-\tfrac12x+2$"
  hint="Solve $y=3+t$ for $t$, substitute into $x=-2-2t$, then solve the result for $y$."
>}}

{{< fillin
  question="Eliminate the parameter to write the Cartesian equation of $x=2\cos t$, $y=-\sin t$. Write it in standard form, with $1$ on the right side."
  answer="\tfrac{x^2}{4}+y^2=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{4}+y^2=1$"
  hint="Solve each equation for $\cos t$ and $\sin t$, then substitute into $\cos^2t+\sin^2t=1$."
>}}

{{< fillin
  question="Write the parametric equations of a circle with center $(0,0)$, radius $5$, and a counterclockwise orientation, starting at $(5,0)$ when $t=0$ and making one full turn as $t$ runs from $0$ to $2\pi$. Enter $x(t)$ first, then $y(t)$, separated by a comma."
  answer="5\cos t,5\sin t"
  answerDisplay="$x(t)=5\cos t$, $y(t)=5\sin t$"
  hint="Start from the unit-circle coordinates of the point at angle $t$ and scale them by the radius; check that $t=0$ gives the starting point and that $t=\tfrac{\pi}{2}$ lands above the center."
>}}

{{< fillin
  question="A dart is thrown upward from the ground with an initial velocity of $64$ ft/s at an angle of elevation of $52^\circ$. Neglecting air resistance, when will the dart hit the ground? Round to the nearest tenth of a second."
  answer="3.2"
  answerForm="decimal"
  answerDisplay="$3.2$ seconds"
  hint="Write $y(t)$ from the projectile model with $v_0=64$, $\theta=52^\circ$, and $h=0$, set it equal to $0$, and keep the positive solution."
>}}

{{< fillin
  question="A dart is thrown upward from the ground with an initial velocity of $64$ ft/s at an angle of elevation of $52^\circ$. Neglecting air resistance, at what time will the dart reach its maximum height? Round to the nearest tenth of a second."
  answer="1.6"
  answerForm="decimal"
  answerDisplay="$1.6$ seconds"
  hint="Write $y(t)$ from the projectile model with $h=0$; it is a downward parabola in $t$, so its highest point is at the vertex, $t=-\tfrac{b}{2a}$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 8.7: Parametric Equations: Graphs](https://openstax.org/books/precalculus-2e/pages/8-7-parametric-equations-graphs) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative photo of a baseball batter (Figure 1), which carries no mathematics beyond the credit line, and the "Graphing Parametric Equations on the TI-84" media resource box, an external video link with no mathematical content of its own. Recreated every instructional figure as an accessible spec-first SVG: the two-branch parabola of Example 1 (drawn from the exact sideways parabola $x=(y-2)^2+1$, with the source's own $t$-labels, run on past the table points to the edge of the grid as in the source, and orientation arrowheads placed on the exact curve); the two ellipses of Examples 2 and 3 (drawn from the exact `rx`/`ry` primitive rather than sampled points, with the source's labeled points in Example 2, three table points marked in Example 3, and short orientation arrows drawn between two exact points of each ellipse); the parametric/rectangular overlay pairs of Examples 3 and 4 (a solid curve for the parametric plot and a dashed curve of the identical primitive for the rectangular plot, reproducing the source's solid-blue/dashed-red overlay convention in one color); and the baseball trajectory of Example 5 (sampled from the exact solved formula $x(t)=(140\cos45^\circ)t$, $y(t)=-16t^2+(140\sin45^\circ)t+3$ over $t\in[0,6.2173]$, with orientation arrowheads along the arc, the outfield wall, and the hitter/wall/trajectory labels from the source figure, the hitter's label keeping a leader arrow and the other two set as plain text labels; the source's drawing lands near 570 feet, while the recreation lands at the computed 615 feet, and the axes keep the page's $x$ and $y$ letters for the source's distance and height titles). Every retained Try It became a real interactive component. Because the grader has no primitive that judges a drawn curve, each "sketch/graph the curve" Try It became a `multiplechoice` in graph mode, with distractors that vary the drawn shape, semi-axis lengths, domain branch, orientation, or overlay agreement (never only a marked point); the overlay Try It's distractors draw the rectangular graph a learner gets by swapping the denominators or by not squaring, so each differs visibly from the coinciding pair and options ordered so the page does not use one answer position throughout. Adapted eight selected end-of-section exercises into a closing Practice block, one group per objective: three "graph by making a table"/"sketch the curve" items became graph-mode `multiplechoice` questions for the same reason the Try Its did; a fourth graph-by-table item ($x(t)=-2-2t$, $y(t)=3+t$, whose printed answer is the graph of a negative-slope line) was recast as an eliminate-the-parameter `fillin` asking for that line's slope-intercept equation, since the drawn answer is exactly the line the equation names; and four items whose skill survives as a value — eliminating the parameter to a Cartesian equation (asked in standard form, with $1$ on the right side), constructing a circle parametrization (pinned by its starting point $(5,0)$ at $t=0$ and one full turn as $t$ runs from $0$ to $2\pi$ in place of printing $x(t)=5\cos t$ in the question, which gave away half the answer), and two applied timing questions about a thrown dart — became `fillin` questions, each independently re-derived (including by running the arithmetic in Node) rather than read off the source key. The two dart questions restate the shared scenario from the source's introductory sentence, since each interactive component must stand alone. Every polar/degree angle in an applied formula (e.g. $140\cos45^\circ$) is graded by the engine's exact treatment of $^\circ$, so no `answerForm` token was needed on the numeric applied answers beyond `decimal`.</small>
