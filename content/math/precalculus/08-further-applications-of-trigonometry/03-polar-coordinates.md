---
title: Polar Coordinates
description: >-
  Plotting points on a polar grid, converting points and equations between
  polar and rectangular coordinates, and identifying a polar equation's graph
  by converting it to rectangular form — adapted from OpenStax Precalculus
  2e, Section 8.3.
source_section: "8.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Plot points using polar coordinates
- Convert from polar coordinates to rectangular coordinates
- Convert from rectangular coordinates to polar coordinates
- Transform equations between polar and rectangular forms
- Identify and graph polar equations by converting to rectangular equations
{{< /callout >}}

Over $12$ kilometers from port, a sailboat encounters rough weather and is blown off course by a $16$-knot wind. How can the sailor indicate his location to the Coast Guard? In this section, we investigate a method of representing location that is different from a standard coordinate grid.

### Plotting Points Using Polar Coordinates

When we think about plotting points in the plane, we usually think of **rectangular coordinates** $(x,y)$ in the Cartesian coordinate plane. However, there are other ways of writing a coordinate pair and other types of grid systems. In this section, we introduce **polar coordinates**, which are points labeled $(r,\theta)$ and plotted on a polar grid. The polar grid is represented as a series of concentric circles radiating out from the **pole**, or the origin of the coordinate plane.

The **polar grid** is scaled as the unit circle with the positive $x$-axis now viewed as the **polar axis** and the origin as the pole. The first coordinate $r$ is the radius or length of the directed line segment from the pole. The angle $\theta$, measured in radians, indicates the direction of $r$. We move counterclockwise from the polar axis by an angle of $\theta$, and measure a directed line segment the length of $r$ in the direction of $\theta$. Even though we measure $\theta$ first and then $r$, the polar point is written with the $r$-coordinate first. For example, to plot the point $\left(2,\tfrac{\pi}{4}\right)$, we would move $\tfrac{\pi}{4}$ units in the counterclockwise direction and then a length of $2$ from the pole. This point is plotted on the grid below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of four concentric circles at radii 1, 2, 3, 4, with spokes along both diagonals through the origin, and the point (2, pi/4) plotted 2 units from the pole along the ray at angle pi/4 above the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[1.4142,1.4142],"label":"(2, π/4)"}]}
{{< /apfigure >}}

**Example.** Plot the point $\left(3,\tfrac{\pi}{2}\right)$ on the polar grid.

**Solution.** The angle $\tfrac{\pi}{2}$ is found by sweeping in a counterclockwise direction $90^\circ$ from the polar axis. The point is located at a length of $3$ units from the pole in the $\tfrac{\pi}{2}$ direction, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of four concentric circles at radii 1, 2, 3, 4, with spokes along both diagonals through the origin, and the point (3, pi/2) plotted 3 units from the pole straight up along the positive y-axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[0,3],"label":"(3, π/2)"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Plot the point $\left(2,\tfrac{\pi}{3}\right)$ in the polar grid."
  mode="graph"
  answerIndex="0"
  hint="Sweep $\tfrac{\pi}{3}$ (that is, $60^\circ$) counterclockwise from the polar axis, then mark a point $2$ units out from the pole along that ray."
>}}
{"ariaLabel":"A polar grid with a point plotted 2 units from the pole along the ray at angle pi/3 above the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[1,1.7321]}]}
===OPT===
{"ariaLabel":"A polar grid with a point plotted 3 units from the pole along the ray at angle pi/3 above the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[1.5,2.5981]}]}
===OPT===
{"ariaLabel":"A polar grid with a point plotted 2 units from the pole along the ray at angle pi/6 above the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[1.7321,1]}]}
===OPT===
{"ariaLabel":"A polar grid with a point plotted 2 units from the pole along the ray at angle pi/3 below the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[1,-1.7321]}]}
{{< /multiplechoice >}}

**Example.** Plot the point $\left(-2,\tfrac{\pi}{6}\right)$ on the polar grid.

**Solution.** We know that $\tfrac{\pi}{6}$ is located in the first quadrant. However, $r=-2$. We can approach plotting a point with a negative $r$ in two ways:

- Plot the point $\left(2,\tfrac{\pi}{6}\right)$ by moving $\tfrac{\pi}{6}$ in the counterclockwise direction and extending a directed line segment $2$ units into the first quadrant. Then retrace the directed line segment back through the pole, and continue $2$ units into the third quadrant;
- Move $\tfrac{\pi}{6}$ in the counterclockwise direction, and draw the directed line segment from the pole $2$ units in the negative direction, into the third quadrant.

The two constructions land on the same point, shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid showing the point (-2, pi/6): a short dashed guide runs from the pole along the ray at angle pi/6 above the polar axis, and a solid directed segment runs from the pole 2 units in the opposite direction, into the third quadrant, ending at the plotted point.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"segments":[{"from":[0,0],"to":[0.866,0.5],"dashed":true,"arrows":false},{"from":[0,0],"to":[-1.7321,-1],"arrows":"end"}],"points":[{"at":[-1.7321,-1]}],"texts":[{"at":[-1.16,-2.24],"text":"(-2, π/6)","anchor":"middle"}]}
{{< /apfigure >}}

Compare this to the graph of the polar coordinate $\left(2,\tfrac{\pi}{6}\right)$, shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid with the point (2, pi/6) plotted 2 units from the pole along the ray at angle pi/6 above the polar axis, in the first quadrant.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[1.7321,1]}],"texts":[{"at":[1.24,2.06],"text":"(2, π/6)","anchor":"middle"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Plot the points $\left(3,-\tfrac{\pi}{6}\right)$ and $\left(2,\tfrac{9\pi}{4}\right)$ on the same polar grid."
  mode="graph"
  answerIndex="2"
  hint="A negative angle sweeps clockwise from the polar axis. An angle past $2\pi$ has wrapped around at least one full revolution — find its coterminal angle in $[0,2\pi)$ before plotting."
>}}
{"ariaLabel":"A polar grid with one point plotted 3 units from the pole along the ray at angle pi/6 below the polar axis, and a second point plotted 2 units from the pole along the ray at angle pi/4 below the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[2.5981,-1.5]},{"at":[1.4142,-1.4142]}]}
===OPT===
{"ariaLabel":"A polar grid with one point plotted 3 units from the pole along the ray at angle pi/6 above the polar axis, and a second point plotted 2 units from the pole along the ray at angle pi/4 above the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[2.5981,1.5]},{"at":[1.4142,1.4142]}]}
===OPT===
{"ariaLabel":"A polar grid with one point plotted 3 units from the pole along the ray at angle pi/6 below the polar axis, and a second point plotted 2 units from the pole along the ray at angle pi/4 above the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[2.5981,-1.5]},{"at":[1.4142,1.4142]}]}
===OPT===
{"ariaLabel":"A polar grid with one point plotted 2 units from the pole along the ray at angle pi/6 below the polar axis, and a second point plotted 2 units from the pole along the ray at angle pi/4 above the polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[1.7321,-1]},{"at":[1.4142,1.4142]}]}
{{< /multiplechoice >}}

### Converting from Polar Coordinates to Rectangular Coordinates

When given a set of polar coordinates, we may need to convert them to rectangular coordinates. To do so, we can recall the relationships that exist among the variables $x$, $y$, $r$, and $\theta$.

$$\cos\theta=\tfrac{x}{r}\to x=r\cos\theta$$
$$\sin\theta=\tfrac{y}{r}\to y=r\sin\theta$$

Dropping a perpendicular from the point in the plane to the $x$-axis forms a right triangle, as illustrated below. An easy way to remember the equations above is to think of $\cos\theta$ as the adjacent side over the hypotenuse and $\sin\theta$ as the opposite side over the hypotenuse.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A right triangle in the coordinate plane: the hypotenuse r runs from the origin to a point labeled (x, y) or (r, theta); the angle theta is marked at the origin between the positive x-axis and the hypotenuse; a dashed vertical segment drops from the point to the x-axis, labeled y; the horizontal leg along the x-axis is labeled x, with a right angle marked where the dashed segment meets the axis.","xMin":-0.5,"xMax":4.5,"yMin":-0.5,"yMax":4,"grid":false,"tickLabels":false,"unit":55,"segments":[{"from":[0,0],"to":[2.571,3.064],"label":"r"},{"from":[2.571,0],"to":[2.571,3.064],"dashed":true,"label":"y"},{"from":[2.421,0],"to":[2.421,0.15],"arrows":false},{"from":[2.421,0.15],"to":[2.571,0.15],"arrows":false}],"points":[{"at":[2.571,3.064],"label":"(x, y) or (r, θ)","labelSide":"n"}],"circles":[{"at":[0,0],"r":0.7,"from":0,"to":50}],"texts":[{"at":[0.85,0.35],"text":"θ"},{"at":[1.2,-0.3],"text":"x"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Converting polar coordinates to rectangular coordinates.** To convert
  polar coordinates $(r,\theta)$ to rectangular coordinates $(x,y)$, let

  $$\cos\theta=\tfrac{x}{r}\to x=r\cos\theta$$
  $$\sin\theta=\tfrac{y}{r}\to y=r\sin\theta$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given polar coordinates, convert to rectangular coordinates.

  1. Given the polar coordinate $(r,\theta)$, write $x=r\cos\theta$ and $y=r\sin\theta$.
  2. Evaluate $\cos\theta$ and $\sin\theta$.
  3. Multiply $\cos\theta$ by $r$ to find the $x$-coordinate of the rectangular form.
  4. Multiply $\sin\theta$ by $r$ to find the $y$-coordinate of the rectangular form.
{{< /callout >}}

**Example.** Write the polar coordinates $\left(3,\tfrac{\pi}{2}\right)$ as rectangular coordinates.

**Solution.** Use the equivalent relationships.

$$
\begin{array}{lrcl}
& x &=& r\cos\theta \\[4pt]
& x &=& 3\cos\tfrac{\pi}{2}=0 \\[4pt]
& y &=& r\sin\theta \\[4pt]
& y &=& 3\sin\tfrac{\pi}{2}=3
\end{array}
$$

The rectangular coordinates are $(0,3)$. See below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid with the point (3, pi/2) plotted 3 units from the pole straight up along the positive y-axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[0,3],"label":"(3, π/2)"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A rectangular coordinate grid with the point (0, 3) plotted on the positive y-axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"tickLabels":true,"unit":48,"points":[{"at":[0,3],"label":"(0, 3)"}]}
{{< /apfigure >}}

**Example.** Write the polar coordinates $(-2,0)$ as rectangular coordinates.

**Solution.** Writing the polar coordinates as rectangular, we have

$$
\begin{array}{lrcl}
& x &=& r\cos\theta \\[4pt]
& x &=& -2\cos(0)=-2 \\[4pt]
& y &=& r\sin\theta \\[4pt]
& y &=& -2\sin(0)=0
\end{array}
$$

The rectangular coordinates are also $(-2,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid with the point (-2, 0) plotted 2 units from the pole along the negative polar axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[-2,0]}],"texts":[{"at":[-1.88,0.4],"text":"(-2, 0)"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A rectangular coordinate grid with the point (-2, 0) plotted on the negative x-axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"tickLabels":true,"unit":48,"points":[{"at":[-2,0],"label":"(-2, 0)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the polar coordinates $\left(-1,\tfrac{2\pi}{3}\right)$ as rectangular coordinates. Give exact values, as fractions and radicals."
  answer="(\frac{1}{2},-\frac{\sqrt{3}}{2})"
  answerForm="evaluated-trig simplified-radical"
  answerDisplay="$\left(\tfrac12,-\tfrac{\sqrt3}{2}\right)$"
  hint="Use $x=r\cos\theta$ and $y=r\sin\theta$ with $r=-1$."
>}}

### Converting from Rectangular Coordinates to Polar Coordinates

To convert rectangular coordinates to polar coordinates, we will use two other familiar relationships. With this conversion, however, we need to be aware that a set of rectangular coordinates will yield more than one polar point.

{{< callout type="info" >}}
  **Converting rectangular coordinates to polar coordinates.** Converting
  from rectangular coordinates to polar coordinates requires the use of one
  or more of the following relationships.

  $$\cos\theta=\tfrac{x}{r}\ \text{or}\ x=r\cos\theta$$
  $$\sin\theta=\tfrac{y}{r}\ \text{or}\ y=r\sin\theta$$
  $$r^2=x^2+y^2$$
  $$\tan\theta=\tfrac{y}{x}$$
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A right triangle in the coordinate plane: the hypotenuse r runs from the origin to a point labeled with both its rectangular and polar coordinates, (x, y) and (r, theta); angle theta is marked at the origin between the positive x-axis and the hypotenuse, the vertical leg is labeled y, the horizontal leg along the x-axis is labeled x, and a right angle is marked where the legs meet.","xMin":-0.5,"xMax":4.5,"yMin":-0.5,"yMax":4,"grid":false,"tickLabels":false,"unit":55,"segments":[{"from":[0,0],"to":[2.571,3.064],"label":"r"},{"from":[2.571,0],"to":[2.571,3.064],"label":"y"},{"from":[2.421,0],"to":[2.421,0.15],"arrows":false},{"from":[2.421,0.15],"to":[2.571,0.15],"arrows":false}],"circles":[{"at":[0,0],"r":0.7,"from":0,"to":50}],"texts":[{"at":[0.85,0.35],"text":"θ"},{"at":[1.2,-0.3],"text":"x"}],"points":[{"at":[2.571,3.064],"label":"(x, y), (r, θ)","labelSide":"n"}]}
{{< /apfigure >}}

**Example.** Convert the rectangular coordinates $(3,3)$ to polar coordinates.

**Solution.** We see that the original point $(3,3)$ is in the first quadrant. To find $\theta$, use the formula $\tan\theta=\tfrac{y}{x}$. This gives

$$
\begin{array}{lrcl}
& \tan\theta &=& \tfrac{3}{3} \\[4pt]
& \tan\theta &=& 1 \\[4pt]
& \theta &=& \tan^{-1}(1) \\[4pt]
& \theta &=& \tfrac{\pi}{4}
\end{array}
$$

To find $r$, we substitute the values for $x$ and $y$ into the formula $r=\sqrt{x^2+y^2}$. We know that $r$ must be positive, as $\tfrac{\pi}{4}$ is in the first quadrant. Thus

$$
\begin{array}{lrcl}
& r &=& \sqrt{3^2+3^2} \\[4pt]
& r &=& \sqrt{9+9} \\[4pt]
& r &=& \sqrt{18}=3\sqrt2
\end{array}
$$

So, $r=3\sqrt2$ and $\theta=\tfrac{\pi}{4}$, giving us the polar point $\left(3\sqrt2,\tfrac{\pi}{4}\right)$. See below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of five concentric circles at radii 1 through 5, with spokes along both diagonals through the origin, and the point (3 radical 2, pi/4) plotted about 4.24 units from the pole along the ray at angle pi/4 above the polar axis.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"grid":false,"tickLabels":true,"unit":40,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5}],"lines":[{"slope":1,"intercept":0,"arrows":false},{"slope":-1,"intercept":0,"arrows":false}],"points":[{"at":[3,3]}],"texts":[{"at":[3.4,4.56],"text":"(3√2, π/4)","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A rectangular coordinate grid with the point (3, 3) plotted in the first quadrant.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"tickLabels":true,"unit":48,"points":[{"at":[3,3],"label":"(3, 3)"}]}
{{< /apfigure >}}

**Analysis.** There are other sets of polar coordinates that will be the same as our first solution. For example, the points $\left(-3\sqrt2,\tfrac{5\pi}{4}\right)$ and $\left(3\sqrt2,-\tfrac{7\pi}{4}\right)$ will coincide with the original solution of $\left(3\sqrt2,\tfrac{\pi}{4}\right)$. The point $\left(-3\sqrt2,\tfrac{5\pi}{4}\right)$ indicates a move further counterclockwise by $\pi$, which is directly opposite $\tfrac{\pi}{4}$. The radius is expressed as $-3\sqrt2$. However, the angle $\tfrac{5\pi}{4}$ is located in the third quadrant and, as $r$ is negative, we extend the directed line segment in the opposite direction, into the first quadrant. This is the same point as $\left(3\sqrt2,\tfrac{\pi}{4}\right)$. The point $\left(3\sqrt2,-\tfrac{7\pi}{4}\right)$ is a move further clockwise by $-\tfrac{7\pi}{4}$, from $\tfrac{\pi}{4}$. The radius, $3\sqrt2$, is the same.

### Transforming Equations between Polar and Rectangular Forms

We can now convert coordinates between polar and rectangular form. Converting equations can be more difficult, but it can be beneficial to be able to convert between the two forms. Since there are a number of polar equations that cannot be expressed clearly in Cartesian form, and vice versa, we can use the same procedures we used to convert points between the coordinate systems. We can then use a graphing calculator to graph either the rectangular form or the polar form of the equation.

{{< callout type="info" >}}
  **How to:** given an equation in polar form, graph it using a graphing
  calculator.

  1. Change the MODE to POL, representing polar form.
  2. Press the Y= button to bring up a screen allowing the input of six equations: $r_1,r_2,\dots,r_6$.
  3. Enter the polar equation, set equal to $r$.
  4. Press GRAPH.
{{< /callout >}}

**Example.** Write the Cartesian equation $x^2+y^2=9$ in polar form.

**Solution.** The goal is to eliminate $x$ and $y$ from the equation and introduce $r$ and $\theta$. Ideally, we would write the equation $r$ as a function of $\theta$. To obtain the polar form, we will use the relationships between $(x,y)$ and $(r,\theta)$. Since $x=r\cos\theta$ and $y=r\sin\theta$, we can substitute and solve for $r$.

$$
\begin{array}{lrcl}
\text{ } & (r\cos\theta)^2+(r\sin\theta)^2 &=& 9 \\[4pt]
& r^2\cos^2\theta+r^2\sin^2\theta &=& 9 \\[4pt]
& r^2(\cos^2\theta+\sin^2\theta) &=& 9 \\[4pt]
\text{Substitute }\cos^2\theta+\sin^2\theta=1. & r^2(1) &=& 9 \\[4pt]
\text{Use the square root property.} & r &=& \pm3
\end{array}
$$

Thus, $x^2+y^2=9$, $r=3$, and $r=-3$ should generate the same graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle of radius 3 centered at the origin, drawn on a rectangular grid.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":3}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of dashed concentric circles at radii 1, 2, and 4 with dashed diagonal spokes, and a solid circle of radius 3 centered at the pole, labeled r equals 3.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1,"dashed":true},{"at":[0,0],"r":2,"dashed":true},{"at":[0,0],"r":4,"dashed":true},{"at":[0,0],"r":3}],"segments":[{"from":[0,0],"to":[2.828,2.828],"dashed":true,"arrows":false},{"from":[0,0],"to":[-2.828,2.828],"dashed":true,"arrows":false},{"from":[0,0],"to":[-2.828,-2.828],"dashed":true,"arrows":false},{"from":[0,0],"to":[2.828,-2.828],"dashed":true,"arrows":false}],"texts":[{"at":[0.65,3.35],"text":"r = 3","anchor":"middle"}]}
{{< /apfigure >}}

To graph a circle in rectangular form, we must first solve for $y$.

$$
\begin{array}{lrcl}
& x^2+y^2 &=& 9 \\[4pt]
& y^2 &=& 9-x^2 \\[4pt]
& y &=& \pm\sqrt{9-x^2}
\end{array}
$$

Note that this is two separate functions, since a circle fails the vertical line test. Therefore, we need to enter the positive and negative square roots into the calculator separately, as two equations in the form $Y_1=\sqrt{9-x^2}$ and $Y_2=-\sqrt{9-x^2}$. Press GRAPH.

**Example.** Rewrite the Cartesian equation $x^2+y^2=6y$ as a polar equation.

**Solution.** This equation appears similar to the previous example, but it requires different steps to convert the equation. We can still follow the same procedures we have already learned and make the following substitutions.

$$
\begin{array}{lrcl}
\text{Use }x^2+y^2=r^2. & r^2 &=& 6y \\[4pt]
\text{Substitute }y=r\sin\theta. & r^2 &=& 6r\sin\theta \\[4pt]
\text{Set equal to 0.} & r^2-6r\sin\theta &=& 0 \\[4pt]
\text{Factor and solve.} & r(r-6\sin\theta) &=& 0 \\[4pt]
\text{We reject }r=0\text{, as it only represents one point, }(0,0). & r &=& 0 \\[4pt]
& r &=& 6\sin\theta
\end{array}
$$

Therefore, the equations $x^2+y^2=6y$ and $r=6\sin\theta$ should give us the same graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle of radius 3 centered at (0, 3), passing through the origin, where it is tangent to the x-axis, drawn on a rectangular grid.","xMin":-4,"xMax":4,"yMin":-1,"yMax":7,"tickLabels":true,"unit":42,"circles":[{"at":[0,3],"r":3}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upper half of a polar grid: dashed semicircles at radii 1 through 6 and dashed spokes at angles pi/4 and 3pi/4, with a solid circle of radius 3 centered at (0, 3) traced through the pole, labeled r equals 6 sine theta.","xMin":-6,"xMax":6,"yMin":-1,"yMax":7,"grid":false,"tickLabels":true,"unit":36,"circles":[{"at":[0,0],"r":1,"from":0,"to":180,"dashed":true},{"at":[0,0],"r":2,"from":0,"to":180,"dashed":true},{"at":[0,0],"r":3,"from":0,"to":180,"dashed":true},{"at":[0,0],"r":4,"from":0,"to":180,"dashed":true},{"at":[0,0],"r":5,"from":0,"to":180,"dashed":true},{"at":[0,0],"r":6,"from":0,"to":180,"dashed":true},{"at":[0,3],"r":3}],"segments":[{"from":[0,0],"to":[4.243,4.243],"dashed":true,"arrows":false},{"from":[0,0],"to":[-4.243,4.243],"dashed":true,"arrows":false}],"texts":[{"at":[0.3,6.4],"text":"r = 6 sin θ"}]}
{{< /apfigure >}}

**Example.** Rewrite the Cartesian equation $y=3x+2$ as a polar equation.

**Solution.** We will use the relationships $x=r\cos\theta$ and $y=r\sin\theta$.

$$
\begin{array}{lrcl}
\text{ } & y &=& 3x+2 \\[4pt]
& r\sin\theta &=& 3r\cos\theta+2 \\[4pt]
& r\sin\theta-3r\cos\theta &=& 2 \\[4pt]
\text{Isolate }r. & r(\sin\theta-3\cos\theta) &=& 2 \\[4pt]
\text{Solve for }r. & r &=& \tfrac{2}{\sin\theta-3\cos\theta}
\end{array}
$$

{{< fillin
  question="Rewrite the Cartesian equation $y^2=3-x^2$ in polar form. Solve for $r$, taking $r>0$."
  answer="\sqrt{3}"
  answerForm="exact-radical"
  answerDisplay="$r=\sqrt3$"
  hint="Gather the squared terms on one side, replace $x^2+y^2$ with $r^2$, and solve for $r$."
>}}

### Identify and Graph Polar Equations by Converting to Rectangular Equations

We have learned how to convert rectangular coordinates to polar coordinates, and we have seen that the points are indeed the same. We have also transformed polar equations to rectangular equations and vice versa. Now we will demonstrate that their graphs, while drawn on different grids, are identical.

**Example.** Convert the polar equation $r=2\sec\theta$ to a rectangular equation, and draw its corresponding graph.

**Solution.** The conversion is

$$
\begin{array}{lrcl}
& r &=& 2\sec\theta \\[4pt]
& r &=& \tfrac{2}{\cos\theta} \\[4pt]
& r\cos\theta &=& 2 \\[4pt]
& x &=& 2
\end{array}
$$

Notice that the equation $r=2\sec\theta$ drawn on the polar grid is clearly the same as the vertical line $x=2$ drawn on the rectangular grid, below. Just as $x=c$ is the standard form for a vertical line in rectangular form, $r=c\sec\theta$ is the standard form for a vertical line in polar form.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical line at x equals 2, labeled x equals 2, drawn on a rectangular grid.","xMin":-2,"xMax":4,"yMin":-3,"yMax":5,"tickLabels":true,"unit":55,"lines":[{"x":2}],"texts":[{"at":[2.2,2.2],"text":"x = 2"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of dashed concentric circles at radii 1 through 4 with dashed diagonal spokes, and a solid vertical line at x equals 2, labeled r equals 2 secant theta.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"grid":false,"tickLabels":true,"unit":48,"circles":[{"at":[0,0],"r":1,"dashed":true},{"at":[0,0],"r":2,"dashed":true},{"at":[0,0],"r":3,"dashed":true},{"at":[0,0],"r":4,"dashed":true}],"segments":[{"from":[0,0],"to":[2.828,2.828],"dashed":true,"arrows":false},{"from":[0,0],"to":[-2.828,2.828],"dashed":true,"arrows":false},{"from":[0,0],"to":[-2.828,-2.828],"dashed":true,"arrows":false},{"from":[0,0],"to":[2.828,-2.828],"dashed":true,"arrows":false}],"lines":[{"x":2}],"texts":[{"at":[2.3,3.6],"text":"r = 2 sec θ"}]}
{{< /apfigure >}}

A similar discussion would demonstrate that the graph of the function $r=2\csc\theta$ will be the horizontal line $y=2$. In fact, $r=c\csc\theta$ is the standard form for a horizontal line in polar form, corresponding to the rectangular form $y=c$.

**Example.** Rewrite the polar equation $r=\tfrac{3}{1-2\cos\theta}$ as a Cartesian equation.

**Solution.** The goal is to eliminate $\theta$ and $r$, and introduce $x$ and $y$. We clear the fraction, and then use substitution. In order to replace $r$ with $x$ and $y$, we must use the expression $x^2+y^2=r^2$.

$$
\begin{array}{lrcl}
& r &=& \tfrac{3}{1-2\cos\theta} \\[4pt]
\text{Use }\cos\theta=\tfrac{x}{r}\text{ to eliminate }\theta. & r\left(1-2\left(\tfrac{x}{r}\right)\right) &=& 3 \\[4pt]
& r-2x &=& 3 \\[4pt]
\text{Isolate }r. & r &=& 3+2x \\[4pt]
\text{Square both sides.} & r^2 &=& (3+2x)^2 \\[4pt]
\text{Use }x^2+y^2=r^2. & x^2+y^2 &=& (3+2x)^2
\end{array}
$$

The Cartesian equation is $x^2+y^2=(3+2x)^2$. However, to graph it, especially using a graphing calculator or computer program, we want to isolate $y$.

$$
\begin{array}{lrcl}
& x^2+y^2 &=& (3+2x)^2 \\[4pt]
& y^2 &=& (3+2x)^2-x^2 \\[4pt]
& y &=& \pm\sqrt{(3+2x)^2-x^2}
\end{array}
$$

When our entire equation has been changed from $r$ and $\theta$ to $x$ and $y$, we can stop, unless asked to solve for $y$ or simplify.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A hyperbola opening left and right with vertices at (-3, 0) and (-1, 0) and center (-2, 0), labeled x squared plus y squared equals the square of 3 plus 2x, drawn on a rectangular grid.","xMin":-6,"xMax":2,"yMin":-6,"yMax":6,"tickLabels":true,"unit":38,"hyperbolas":[{"at":[-2,0],"a":1,"b":1.7321}],"texts":[{"at":[-2.9,5.6],"text":"x² + y² = (3 + 2x)²","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of dashed concentric circles at radii 1 through 6 with dashed diagonal spokes, and the same hyperbola drawn solid: two branches with vertices at (-3, 0) and (-1, 0), labeled r equals 3 over the quantity 1 minus 2 cosine theta.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":false,"tickLabels":true,"unit":32,"circles":[{"at":[0,0],"r":1,"dashed":true},{"at":[0,0],"r":2,"dashed":true},{"at":[0,0],"r":3,"dashed":true},{"at":[0,0],"r":4,"dashed":true},{"at":[0,0],"r":5,"dashed":true},{"at":[0,0],"r":6,"dashed":true}],"segments":[{"from":[0,0],"to":[4.243,4.243],"dashed":true,"arrows":false},{"from":[0,0],"to":[-4.243,4.243],"dashed":true,"arrows":false},{"from":[0,0],"to":[-4.243,-4.243],"dashed":true,"arrows":false},{"from":[0,0],"to":[4.243,-4.243],"dashed":true,"arrows":false}],"hyperbolas":[{"at":[-2,0],"a":1,"b":1.7321}],"texts":[{"at":[2,6.35],"text":"r = 3/(1 − 2 cos θ)"}]}
{{< /apfigure >}}

**Analysis.** In this example, the right side of the equation can be expanded and the equation simplified further, as shown above. However, the equation cannot be written as a single function in Cartesian form. We may wish to write the rectangular equation in the hyperbola's standard form. To do this, we can start with the initial equation.

$$
\begin{array}{lrcl}
& x^2+y^2 &=& (3+2x)^2 \\[4pt]
& x^2+y^2-(3+2x)^2 &=& 0 \\[4pt]
& x^2+y^2-(9+12x+4x^2) &=& 0 \\[4pt]
& x^2+y^2-9-12x-4x^2 &=& 0 \\[4pt]
& -3x^2-12x+y^2 &=& 9 \\[4pt]
\text{Multiply through by }{-1}. & 3x^2+12x-y^2 &=& -9 \\[4pt]
\text{Organize terms to complete the square for }x. & 3(x^2+4x+\ )-y^2 &=& -9 \\[4pt]
& 3(x^2+4x+4)-y^2 &=& -9+12 \\[4pt]
& 3(x+2)^2-y^2 &=& 3 \\[4pt]
& (x+2)^2-\tfrac{y^2}{3} &=& 1
\end{array}
$$

The "hour-glass" shape of the graph is called a **hyperbola**. Hyperbolas have many interesting geometric features and applications, which we investigate further in a later chapter.

{{< fillin
  question="Rewrite the polar equation $r=2\sin\theta$ in Cartesian form, in the standard form for a circle."
  answer="x^2+(y-1)^2=1"
  answerForm="circle-standard-form"
  answerDisplay="$x^2+(y-1)^2=1$"
  hint="Multiply both sides by $r$, use $r^2=x^2+y^2$ and $y=r\sin\theta$, then complete the square in $y$."
>}}

**Example.** Rewrite the polar equation $r=\sin(2\theta)$ in Cartesian form.

**Solution.**

$$
\begin{array}{lrcl}
& r &=& \sin(2\theta) \\[4pt]
\text{Use the double angle identity for sine.} & r &=& 2\sin\theta\cos\theta \\[4pt]
\text{Use }\cos\theta=\tfrac{x}{r}\text{ and }\sin\theta=\tfrac{y}{r}. & r &=& 2\left(\tfrac{x}{r}\right)\left(\tfrac{y}{r}\right) \\[4pt]
\text{Simplify.} & r &=& \tfrac{2xy}{r^2} \\[4pt]
\text{Multiply both sides by }r^2. & r^3 &=& 2xy \\[4pt]
\text{As }x^2+y^2=r^2,r=\sqrt{x^2+y^2}. & \left(\sqrt{x^2+y^2}\right)^3 &=& 2xy
\end{array}
$$

This equation can also be written as

$$(x^2+y^2)^{\tfrac32}=2xy\ \text{or}\ x^2+y^2=(2xy)^{\tfrac23}$$

## Key equations

| Conversion formulas | $\begin{array}{l} \cos\theta=\tfrac{x}{r}\to x=r\cos\theta \\ \sin\theta=\tfrac{y}{r}\to y=r\sin\theta \\ r^2=x^2+y^2 \\ \tan\theta=\tfrac{y}{x} \end{array}$ |
| :--- | :--- |

## Key concepts

- The polar grid is represented as a series of concentric circles radiating out from the pole, or origin.
- To plot a point in the form $(r,\theta)$, $\theta>0$, move in a counterclockwise direction from the polar axis by an angle of $\theta$, and then extend a directed line segment from the pole the length of $r$ in the direction of $\theta$. If $\theta$ is negative, move in a clockwise direction, and extend a directed line segment the length of $r$ in the direction of $\theta$.
- If $r$ is negative, extend the directed line segment in the opposite direction of $\theta$.
- To convert from polar coordinates to rectangular coordinates, use the formulas $x=r\cos\theta$ and $y=r\sin\theta$.
- To convert from rectangular coordinates to polar coordinates, use one or more of the formulas $\cos\theta=\tfrac{x}{r}$, $\sin\theta=\tfrac{y}{r}$, $\tan\theta=\tfrac{y}{x}$, and $r=\sqrt{x^2+y^2}$.
- Transforming equations between polar and rectangular forms means making the appropriate substitutions based on the available formulas, together with algebraic manipulations.
- Using the appropriate substitutions makes it possible to rewrite a polar equation as a rectangular equation, and then graph it in the rectangular plane.

## Practice

### Plot points using polar coordinates

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of five dashed concentric circles with dashed spokes every pi/6, its axes marked 0, pi/2, pi, and 3pi/2; one point is plotted on the third circle out from the pole, midway between the spokes at 2pi/3 and 5pi/6.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":false,"tickLabels":false,"unit":26,"xLabel":"","yLabel":"","circles":[{"at":[0,0],"r":1,"dashed":true},{"at":[0,0],"r":2,"dashed":true},{"at":[0,0],"r":3,"dashed":true},{"at":[0,0],"r":4,"dashed":true},{"at":[0,0],"r":5,"dashed":true}],"segments":[{"from":[0,0],"to":[4.33,2.5],"dashed":true,"arrows":false},{"from":[0,0],"to":[2.5,4.33],"dashed":true,"arrows":false},{"from":[0,0],"to":[-2.5,4.33],"dashed":true,"arrows":false},{"from":[0,0],"to":[-4.33,2.5],"dashed":true,"arrows":false},{"from":[0,0],"to":[-4.33,-2.5],"dashed":true,"arrows":false},{"from":[0,0],"to":[-2.5,-4.33],"dashed":true,"arrows":false},{"from":[0,0],"to":[2.5,-4.33],"dashed":true,"arrows":false},{"from":[0,0],"to":[4.33,-2.5],"dashed":true,"arrows":false}],"points":[{"at":[-2.121,2.121]}],"texts":[{"at":[7.0,0],"text":"0"},{"at":[0,6.9],"text":"π/2"},{"at":[-7.0,0],"text":"π"},{"at":[0,-7.2],"text":"3π/2"}]}
{{< /apfigure >}}

{{< fillin
  question="Give the polar coordinates of the point plotted above, with $r>0$ and $0\le\theta<2\pi$."
  answer="(3,\frac{3\pi}{4})"
  answerForm="radians single-term"
  answerDisplay="$\left(3,\tfrac{3\pi}{4}\right)$"
  hint="Count how many concentric circles out the point sits — that's $r$ — then read its angle counterclockwise from the polar axis, in radians. The spokes are drawn every $\tfrac{\pi}{6}$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of five dashed concentric circles with dashed spokes every pi/6, its axes marked 0, pi/2, pi, and 3pi/2; one point is plotted on the fifth circle out from the pole, on the axis marked pi.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"grid":false,"tickLabels":false,"unit":26,"xLabel":"","yLabel":"","circles":[{"at":[0,0],"r":1,"dashed":true},{"at":[0,0],"r":2,"dashed":true},{"at":[0,0],"r":3,"dashed":true},{"at":[0,0],"r":4,"dashed":true},{"at":[0,0],"r":5,"dashed":true}],"segments":[{"from":[0,0],"to":[4.33,2.5],"dashed":true,"arrows":false},{"from":[0,0],"to":[2.5,4.33],"dashed":true,"arrows":false},{"from":[0,0],"to":[-2.5,4.33],"dashed":true,"arrows":false},{"from":[0,0],"to":[-4.33,2.5],"dashed":true,"arrows":false},{"from":[0,0],"to":[-4.33,-2.5],"dashed":true,"arrows":false},{"from":[0,0],"to":[-2.5,-4.33],"dashed":true,"arrows":false},{"from":[0,0],"to":[2.5,-4.33],"dashed":true,"arrows":false},{"from":[0,0],"to":[4.33,-2.5],"dashed":true,"arrows":false}],"points":[{"at":[-5,0]}],"texts":[{"at":[7.0,0],"text":"0"},{"at":[0,6.9],"text":"π/2"},{"at":[-7.0,0],"text":"π"},{"at":[0,-7.2],"text":"3π/2"}]}
{{< /apfigure >}}

{{< fillin
  question="Give the polar coordinates of the point plotted above, with $r>0$ and $0\le\theta<2\pi$."
  answer="(5,\pi)"
  answerForm="radians single-term"
  answerDisplay="$(5,\pi)$"
  hint="Count how many concentric circles out the point sits — that's $r$ — then read its angle counterclockwise from the polar axis, in radians. The spokes are drawn every $\tfrac{\pi}{6}$."
>}}

### Convert from polar coordinates to rectangular coordinates

{{< fillin
  question="Convert the polar coordinates $(5,\pi)$ to Cartesian coordinates."
  answer="(-5,0)"
  answerForm="evaluated-trig decimal"
  answerDisplay="$(-5,0)$"
  hint="Use $x=r\cos\theta$ and $y=r\sin\theta$ with $r=5$, reading $\cos\pi$ and $\sin\pi$ off the unit circle."
>}}

{{< fillin
  question="Convert the polar coordinates $\left(-3,\tfrac{\pi}{6}\right)$ to Cartesian coordinates. Give exact values, as fractions and radicals."
  answer="(-\frac{3\sqrt{3}}{2},-\frac{3}{2})"
  answerForm="evaluated-trig simplified-radical"
  answerDisplay="$\left(-\tfrac{3\sqrt3}{2},-\tfrac32\right)$"
  hint="Use $x=r\cos\theta$ and $y=r\sin\theta$ with $r=-3$."
>}}

### Convert from rectangular coordinates to polar coordinates

{{< fillin
  question="Convert the Cartesian coordinates $(4,2)$ to polar coordinates with $r>0$, $0\le\theta<2\pi$. Round $\theta$ to the nearest thousandth."
  answer="(2\sqrt{5},0.464)"
  answerForm="evaluated-trig radians simplified-radical no-like-terms"
  answerDisplay="$(2\sqrt5,0.464)$"
  hint="Find $r$ with $r=\sqrt{x^2+y^2}$ and $\theta$ with $\tan\theta=\tfrac{y}{x}$, checking the quadrant the point is in."
>}}

{{< fillin
  question="Convert the Cartesian coordinates $(3,-5)$ to polar coordinates with $r>0$, $0\le\theta<2\pi$. Round $\theta$ to the nearest thousandth."
  answer="(\sqrt{34},5.253)"
  answerForm="evaluated-trig radians simplified-radical no-like-terms"
  answerDisplay="$(\sqrt{34},5.253)$"
  hint="Find $r$ with $r=\sqrt{x^2+y^2}$. For $\theta$, use $\tan\theta=\tfrac{y}{x}$, and if the calculator's inverse tangent returns a negative angle, add $2\pi$ to land in $[0,2\pi)$."
>}}

### Transform equations between polar and rectangular forms

{{< fillin
  question="Convert the Cartesian equation $y=4$ to a polar equation."
  answer="4\csc\theta"
  answerDisplay="$r=4\csc\theta$"
  hint="Substitute $y=r\sin\theta$ and solve for $r$."
>}}

{{< fillin
  question="Convert the Cartesian equation $x^2-y^2=3y$ to a polar equation."
  answer="\frac{3\sin\theta}{\cos(2\theta)}"
  answerDisplay="$r=\tfrac{3\sin\theta}{\cos(2\theta)}$"
  hint="Substitute $x=r\cos\theta$, $y=r\sin\theta$, and use the identity $\cos^2\theta-\sin^2\theta=\cos(2\theta)$."
>}}

### Identify and graph polar equations by converting to rectangular equations

{{< fillin
  question="Convert the polar equation $r=\tfrac{6}{\cos\theta+3\sin\theta}$ to a Cartesian equation."
  answer="x+3y=6"
  answerDisplay="$x+3y=6$"
  hint="Multiply both sides by the denominator, then substitute $x=r\cos\theta$ and $y=r\sin\theta$."
>}}

{{< multiplechoice
  question="Which conic section does the polar equation $r=\tfrac{6}{\cos\theta+3\sin\theta}$ represent?"
  answer="line"
  hint="Use the Cartesian equation from the item above, and look at the degree of each of its terms in $x$ and $y$."
>}}
circle
line
hyperbola
parabola
{{< /multiplechoice >}}

{{< fillin
  question="Convert the polar equation $r^2=4\sec\theta\csc\theta$ to a Cartesian equation."
  answer="xy=4"
  answerDisplay="$xy=4$"
  hint="Rewrite $\sec\theta$ and $\csc\theta$ in terms of cosine and sine, clear the fractions, then split $r^2$ so one factor of $r$ goes with the cosine and one with the sine."
>}}

{{< multiplechoice
  question="Which conic section does the polar equation $r^2=4\sec\theta\csc\theta$ represent?"
  answer="hyperbola"
  hint="Use the Cartesian equation from the item above, solve it for $y$, and recall the graph of $y=\tfrac{k}{x}$."
>}}
parabola
hyperbola
circle
line
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 8.3: Polar Coordinates](https://openstax.org/books/precalculus-2e/pages/8-3-polar-coordinates) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative sailboat illustration opening the section (Figure 1), an ornamental scene-setter with no mathematics beyond its printed compass labels, and reworded the two sentences that pointed at it into a self-contained opener. Recreated every instructional figure as an accessible spec-first SVG: the polar-grid recipe used throughout (concentric circles at each integer radius plus the two diagonal grid lines, matching the source's own grid) for every point-plotting figure, drawn dashed in the four equation-graph polar panels so the solid curve stands out from the grid as it does on the source's faint grid (the $r=6\sin\theta$ panel keeps only the upper half of the grid, as the source does); both panels of the negative-$r$ example (the point $\left(-2,\tfrac{\pi}{6}\right)$ with its directed segment, and the comparison point $\left(2,\tfrac{\pi}{6}\right)$); the generic $x,y,r,\theta$ right triangle used to introduce each conversion direction; a polar-grid-plus-rectangular-grid pair for every polar/rectangular point-equivalence example; the circle, line, and hyperbola equation-graph pairs, with the hyperbola's polar branches, the $r=6\sin\theta$ circle's polar trace, and the vertical line's polar trace each drawn from the exact solved equation (never freehand), the hyperbola's branches clipped at the edge of the window. The line and hyperbola pairs name their curves beside them, as the source prints them; the $r=3$ and $r=6\sin\theta$ polar panels, which the source leaves unnamed, name theirs too. Corrected the source's "Covert" to "Convert" in the $r=2\sec\theta$ example's prompt. Moved the step notes in the $r=\tfrac{3}{1-2\cos\theta}$, hyperbola standard-form, and $r=\sin(2\theta)$ step tables onto the row each step produces, as the page's other step tables do. Every retained "Try It" became a real `fillin` or `multiplechoice` component. The two "plot the point" Try Its (following Examples 1 and 2) became graph-mode multiple choice, since a polar answer cannot be graded by the interactive `graphplot` component (its snap lattice is rectangular, not polar). The remaining three Try Its (rectangular-coordinate, polar-form, and Cartesian-form conversions) became `fillin` components with the `answerForm` their printed subject needs: `exact-radical` on the "rewrite in polar form" Try It, which also asks for $r>0$, since its answer $r=\sqrt3$ has no decimal shape to fall back on, and `circle-standard-form` on the "rewrite in Cartesian form" Try It, since the source itself offers two equally correct forms and the standard-form one is the shape it prints last. Adapted ten selected end-of-section exercises into a closing Practice block, one group per objective: two "find the polar coordinates of the point" Graphical exercises, redrawn on the source's own exercise grid (five rings, spokes every $\tfrac{\pi}{6}$, axes marked $0$, $\tfrac{\pi}{2}$, $\pi$, $\tfrac{3\pi}{2}$, no radius numbers), each placed above its question and pinned to its representative with $r>0$, $0\le\theta<2\pi$; two Algebraic polar-to-rectangular and two rectangular-to-polar conversions, the latter pair also carrying `radians` since their answers name an angle; two plain equation transformations; and two "convert to Cartesian form and identify the conic" exercises, each split into its two natural asks — a `fillin` for the equation and a `multiplechoice` for the categorical conic name, since a conic name is never a gradable number; each multiple choice names the polar equation rather than printing the Cartesian answer of the fill-in above it. The rectangular-coordinate Try It and the second polar-to-rectangular exercise ask for exact values, as fractions and radicals. Every Practice item and Try It was independently re-derived (including by running the trigonometry and equation algebra in Node) rather than read off the source key.</small>
