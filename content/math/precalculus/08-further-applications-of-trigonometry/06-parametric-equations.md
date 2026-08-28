---
title: Parametric Equations
description: >-
  Parameterizing a curve, eliminating the parameter for polynomial,
  exponential, logarithmic, and trigonometric relationships to find a
  rectangular equation, and finding parametric equations for curves defined
  by rectangular equations — adapted from OpenStax Precalculus 2e, Section
  8.6.
source_section: "8.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Parameterize a curve
- Eliminate the parameter
- Find a rectangular equation for a curve defined parametrically
- Find parametric equations for curves defined by rectangular equations
{{< /callout >}}

Consider the path a moon follows as it orbits a planet, which simultaneously rotates around the sun. At any moment, the moon is located at a particular spot relative to the planet. But how do we write and solve the equation for the position of the moon when the distance from the planet, the speed of the moon's orbit around the planet, and the speed of rotation around the sun are all unknowns? We can solve only for one variable at a time.

In this section, we will consider sets of equations given by $x(t)$ and $y(t)$ where $t$ is the independent variable of time. We can use these parametric equations in a number of applications when we are looking for not only a particular position but also the direction of the movement. As we trace out successive values of $t,$ the orientation of the curve becomes clear. This is one of the primary advantages of using **parametric equations**: we are able to trace the movement of an object along a path according to time. We begin this section with a look at the basic components of parametric equations and what it means to parameterize a curve. Then we will learn how to eliminate the parameter, translate the equations of a curve defined parametrically into rectangular equations, and find the parametric equations for curves defined by rectangular equations.

### Parameterizing a Curve

When an object moves along a curve—or **curvilinear path**—in a given direction and in a given amount of time, the position of the object in the plane is given by the $x$-coordinate and the $y$-coordinate. However, both $x$ and $y$ vary over time and so are functions of time. For this reason, we add another variable, the **parameter**, upon which both $x$ and $y$ are dependent functions. In the example in the section opener, the parameter is time, $t$. The $x$ position of the moon at time, $t,$ is represented as the function $x(t),$ and the $y$ position of the moon at time, $t,$ is represented as the function $y(t)$. Together, $x(t)$ and $y(t)$ are called parametric equations, and generate an ordered pair $(x(t),\ y(t))$. Parametric equations primarily describe motion and direction.

When we parameterize a curve, we are translating a single equation in two variables, such as $x$ and $y,$ into an equivalent pair of equations in three variables, $x,y,$ and $t$. One of the reasons we parameterize a curve is because the parametric equations yield more information: specifically, the direction of the object's motion over time.

When we graph parametric equations, we can observe the individual behaviors of $x$ and of $y$. There are a number of shapes that cannot be represented in the form $y=f(x),$ meaning that they are not functions. For example, consider the graph of a circle, given as $r^2=x^2+y^2$. Solving for $y$ gives $y=\pm\sqrt{r^2-x^2},$ or two equations: $y_1=\sqrt{r^2-x^2}$ and $y_2=-\sqrt{r^2-x^2}$. If we graph $y_1$ and $y_2$ together, the graph will not pass the vertical line test, as shown below. Thus, the equation for the graph of a circle is not a function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A circle of radius 2 centered at the origin, with a dashed vertical line at x = 1 crossing the circle twice, illustrating the vertical line test on the circle r squared equals x squared plus y squared.","xMin":-3.5,"xMax":3.5,"yMin":-3.5,"yMax":3.5,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":1,"unit":45,"circles":[{"at":[0,0],"r":2}],"lines":[{"x":1,"dashed":true,"arrows":true}],"texts":[{"at":[1.3,3.1],"text":"Vertical line test on circle"},{"at":[1.3,2.7],"text":"r² = x² + y²"}]}
{{< /apfigure >}}

However, if we were to graph each equation on its own, each one would pass the vertical line test and therefore would represent a function. In some instances, the concept of breaking up the equation for a circle into two functions is similar to the concept of creating parametric equations, as we use two functions to produce a non-function. This will become clearer as we move forward.

{{< callout type="info" >}}
  **Parametric Equations.** Suppose $t$ is a number on an interval, $I$. The set of ordered pairs, $(x(t),\ y(t)),$ where $x=f(t)$ and $y=g(t),$ forms a plane curve based on the parameter $t$. The equations $x=f(t)$ and $y=g(t)$ are the parametric equations.
{{< /callout >}}

**Example.** Parameterize the curve $y=x^2-1$ letting $x(t)=t$. Graph both equations.

**Solution.** If $x(t)=t,$ then to find $y(t)$ we replace the variable $x$ with the expression given in $x(t)$. In other words, $y(t)=t^2-1$. Make a table of values similar to the one below, and sketch the graph.

| $t$ | $x(t)$ | $y(t)$ |
| :--- | ---: | ---: |
| $-4$ | $-4$ | $y(-4)=(-4)^2-1=15$ |
| $-3$ | $-3$ | $y(-3)=(-3)^2-1=8$ |
| $-2$ | $-2$ | $y(-2)=(-2)^2-1=3$ |
| $-1$ | $-1$ | $y(-1)=(-1)^2-1=0$ |
| $0$ | $0$ | $y(0)=(0)^2-1=-1$ |
| $1$ | $1$ | $y(1)=(1)^2-1=0$ |
| $2$ | $2$ | $y(2)=(2)^2-1=3$ |
| $3$ | $3$ | $y(3)=(3)^2-1=8$ |
| $4$ | $4$ | $y(4)=(4)^2-1=15$ |

It may be helpful to use the **TRACE** feature of a graphing calculator to see how the points are generated as $t$ increases.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parametric curve x(t) = t, y(t) = t squared minus 1, a parabola opening upward with vertex at (0,-1), with arrows showing the curve moving down toward the vertex on the left branch and up away from the vertex on the right branch as t increases.","xMin":-4.5,"xMax":4.5,"yMin":-2,"yMax":16,"tickLabels":true,"yTickStep":3,"unit":30,"polylines":[{"through":[[-4,15],[-3.8,13.44],[-3.6,11.96],[-3.4,10.56],[-3.2,9.24],[-3,8],[-2.8,6.84],[-2.6,5.76],[-2.4,4.76],[-2.2,3.84],[-2,3],[-1.8,2.24],[-1.6,1.56],[-1.4,0.96],[-1.2,0.44],[-1,0],[-0.8,-0.36],[-0.6,-0.64],[-0.4,-0.84],[-0.2,-0.96],[0,-1],[0.2,-0.96],[0.4,-0.84],[0.6,-0.64],[0.8,-0.36],[1,0],[1.2,0.44],[1.4,0.96],[1.6,1.56],[1.8,2.24],[2,3],[2.2,3.84],[2.4,4.76],[2.6,5.76],[2.8,6.84],[3,8],[3.2,9.24],[3.4,10.56],[3.6,11.96],[3.8,13.44],[4,15]]}],"segments":[{"from":[-3.0288,8.1726],"to":[-2.9712,7.8274],"arrows":"end"},{"from":[2.9712,7.8274],"to":[3.0288,8.1726],"arrows":"end"}],"texts":[{"at":[-3,13],"text":"y(t) = t² − 1"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The rectangular curve y = x squared minus 1, the same parabola redrawn with no parameter and no orientation arrows.","xMin":-4.5,"xMax":4.5,"yMin":-2,"yMax":16,"tickLabels":true,"yTickStep":3,"unit":30,"quadratics":[{"a":1,"c":-1,"arrows":false}],"texts":[{"at":[-3,13],"text":"y = x² − 1"}]}
{{< /apfigure >}}

**Analysis.** The arrows indicate the direction in which the curve is generated. Notice the curve is identical to the curve of $y=x^2-1$.

{{< fillin
  question="Construct a table of $t$, $x(t)$, and $y(t)$ for the parametric equations $x(t)=t-3$, $y(t)=2t+4$ on $-1\le t\le2$, using integer values of $t$. Give the ordered pairs $(x,y)$ in order of increasing $t$, separated by commas."
  answer="(-4,2),(-3,4),(-2,6),(-1,8)"
  answerDisplay="$(-4,2),(-3,4),(-2,6),(-1,8)$"
  hint="Evaluate $x(t)$ and $y(t)$ at $t=-1,0,1,2$."
>}}

**Example.** Find a pair of parametric equations that models the graph of $y=1-x^2,$ using the parameter $x(t)=t$. Plot some points and sketch the graph.

**Solution.** If $x(t)=t$ and we substitute $t$ for $x$ into the $y$ equation, then $y(t)=1-t^2$. Our pair of parametric equations is

$$
\begin{array}{lrcl}
& x(t) &=& t \\[4pt]
& y(t) &=& 1-t^2
\end{array}
$$

To graph the equations, first we construct a table of values like the one below. We can choose values around $t=0,$ from $t=-3$ to $t=3$. The values in the $x(t)$ column will be the same as those in the $t$ column because $x(t)=t$. Calculate values for the column $y(t)$.

| $t$ | $x(t)=t$ | $y(t)=1-t^2$ |
| :--- | ---: | ---: |
| $-3$ | $-3$ | $y(-3)=1-(-3)^2=-8$ |
| $-2$ | $-2$ | $y(-2)=1-(-2)^2=-3$ |
| $-1$ | $-1$ | $y(-1)=1-(-1)^2=0$ |
| $0$ | $0$ | $y(0)=1-0=1$ |
| $1$ | $1$ | $y(1)=1-(1)^2=0$ |
| $2$ | $2$ | $y(2)=1-(2)^2=-3$ |
| $3$ | $3$ | $y(3)=1-(3)^2=-8$ |

The graph of $y=1-t^2$ is a parabola facing downward, as shown below. We have mapped the curve over the interval $[-3,3],$ shown as a solid line with arrows indicating the orientation of the curve according to $t$. Orientation refers to the path traced along the curve in terms of increasing values of $t$. As this parabola is symmetric with respect to the line $x=0,$ the values of $x$ are reflected across the $y$-axis.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parametric curve x(t) = t, y(t) = 1 minus t squared for t from -3 to 3, a parabola opening downward with vertex at (0,1), with arrows showing the curve moving up toward the vertex on the left branch and down away from the vertex on the right branch as t increases.","xMin":-5.5,"xMax":5.5,"yMin":-10.5,"yMax":2.5,"tickLabels":true,"yTickStep":2,"unit":30,"polylines":[{"through":[[-3,-8],[-2.85,-7.1225],[-2.7,-6.29],[-2.55,-5.5025],[-2.4,-4.76],[-2.25,-4.0625],[-2.1,-3.41],[-1.95,-2.8025],[-1.8,-2.24],[-1.65,-1.7225],[-1.5,-1.25],[-1.35,-0.8225],[-1.2,-0.44],[-1.05,-0.1025],[-0.9,0.19],[-0.75,0.4375],[-0.6,0.64],[-0.45,0.7975],[-0.3,0.91],[-0.15,0.9775],[0,1],[0.15,0.9775],[0.3,0.91],[0.45,0.7975],[0.6,0.64],[0.75,0.4375],[0.9,0.19],[1.05,-0.1025],[1.2,-0.44],[1.35,-0.8225],[1.5,-1.25],[1.65,-1.7225],[1.8,-2.24],[1.95,-2.8025],[2.1,-3.41],[2.25,-4.0625],[2.4,-4.76],[2.55,-5.5025],[2.7,-6.29],[2.85,-7.1225],[3,-8]]}],"segments":[{"from":[-2.0424,-3.1698],"to":[-1.9576,-2.8302],"arrows":"end"},{"from":[1.9576,-2.8302],"to":[2.0424,-3.1698],"arrows":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="Parameterize the curve given by $x=y^3-2y$, using $y(t)=t$. What is $x(t)$?"
  answer="t^3-2t"
  answerDisplay="$x(t)=t^3-2t$"
  hint="Replace every $y$ in the rectangular equation with $t$."
>}}

**Example.** Use the Pythagorean Theorem, and the properties of right triangles to model an equation that fits the problem.

An object travels at a steady rate along a straight path $(-5,\ 3)$ to $(3,\ -1)$ in the same plane in four seconds. The coordinates are measured in meters. Find parametric equations for the position of the object.

**Solution.** The parametric equations are simple linear expressions, but we need to view this problem in a step-by-step fashion. The $x$-value of the object starts at $-5$ meters and goes to 3 meters. This means the distance $x$ has changed by 8 meters in 4 seconds, which is a rate of $\tfrac{\text{8 m}}{4\text{ s}},$ or $2\text{ m}/\text{s}$. We can write the $x$-coordinate as a linear function with respect to time as $x(t)=2t-5$. In the linear function template $y=mx+b,\ 2t=mx$ and $-5=b$.

Similarly, the $y$-value of the object starts at 3 and goes to $-1,$ which is a change in the distance $y$ of $-4$ meters in 4 seconds, which is a rate of $\tfrac{-4\text{ m}}{4\text{ s}},$ or $-1\text{ m}/\text{s}$. We can also write the $y$-coordinate as the linear function $y(t)=-t+3$. Together, these are the parametric equations for the position of the object, where $x$ and $y$ are expressed in meters and $t$ represents time:

$$
\begin{array}{lrcl}
& x(t) &=& 2t-5 \\[4pt]
& y(t) &=& -t+3
\end{array}
$$

Using these equations, we can build a table of values for $t,x,$ and $y$. In this example, we limited values of $t$ to non-negative numbers. In general, any value of $t$ can be used.

| $t$ | $x(t)=2t-5$ | $y(t)=-t+3$ |
| :--- | ---: | ---: |
| $0$ | $x=2(0)-5=-5$ | $y=-(0)+3=3$ |
| $1$ | $x=2(1)-5=-3$ | $y=-(1)+3=2$ |
| $2$ | $x=2(2)-5=-1$ | $y=-(2)+3=1$ |
| $3$ | $x=2(3)-5=1$ | $y=-(3)+3=0$ |
| $4$ | $x=2(4)-5=3$ | $y=-(4)+3=-1$ |

From this table, we can create three graphs.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph of x versus t, the horizontal position over time, a line rising through (0,-5) with slope 2.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"unit":25,"xLabel":"t","yLabel":"x","lines":[{"slope":2,"intercept":-5}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph of y versus t, the vertical position over time, a line falling through (0,3) with slope -1.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"unit":25,"xLabel":"t","yLabel":"y","lines":[{"slope":-1,"intercept":3}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A graph of y versus x, the position of the object in the plane, a line from (-5,3) through the points marked t = 1 and t = 3 to (3,-1), with an arrow showing motion down and to the right as t increases.","xMin":-6,"xMax":5,"yMin":-6,"yMax":6,"tickLabels":true,"unit":30,"polylines":[{"through":[[-5,3],[3,-1]],"arrows":"end"}],"points":[{"at":[-3,2],"label":"t = 1"},{"at":[1,0],"label":"t = 3"}]}
{{< /apfigure >}}

**Analysis.** Again, we see that, when the parameter represents time, we can indicate the movement of the object along the path with arrows.

### Eliminating the Parameter

In many cases, we may have a pair of parametric equations but find that it is simpler to draw a curve if the equation involves only two variables, such as $x$ and $y$. Eliminating the parameter is a method that may make graphing some curves easier. However, if we are concerned with the mapping of the equation according to time, then it will be necessary to indicate the orientation of the curve as well. There are various methods for eliminating the parameter $t$ from a set of parametric equations; not every method works for every type of equation. Here we will review the methods for the most common types of equations.

### Eliminating the Parameter from Polynomial, Exponential, and Logarithmic Equations

For polynomial, exponential, or logarithmic equations expressed as two parametric equations, we choose the equation that is most easily manipulated and solve for $t$. We substitute the resulting expression for $t$ into the second equation. This gives one equation in $x$ and $y$.

**Example.** Given $x(t)=t^2+1$ and $y(t)=2+t,$ eliminate the parameter, and write the parametric equations as a Cartesian equation.

**Solution.** We will begin with the equation for $y$ because the linear equation is easier to solve for $t$.

$$
\begin{array}{lrcl}
& y &=& 2+t \\[4pt]
& y-2 &=& t
\end{array}
$$

Next, substitute $y-2$ for $t$ in $x(t)$.

$$
\begin{array}{lrcl}
& x &=& t^2+1 \\[4pt]
\text{Substitute the expression for }t\text{ into }x. & x &=& (y-2)^2+1 \\[4pt]
& x &=& y^2-4y+4+1 \\[4pt]
& x &=& y^2-4y+5
\end{array}
$$

The Cartesian form is $x=y^2-4y+5$.

**Analysis.** This is an equation for a parabola in which, in rectangular terms, $x$ is dependent on $y$. From the curve's vertex at $(1,2),$ the graph sweeps out to the right. In this section, we consider sets of equations given by the functions $x(t)$ and $y(t),$ where $t$ is the independent variable of time. Notice, both $x$ and $y$ are functions of time; so in general $y$ is not a function of $x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The sideways parabola x equals (y minus 2) squared plus 1, vertex at (1,2), opening to the right, with arrows on both branches pointing left toward the vertex on the lower branch and right away from the vertex on the upper branch, showing the direction of increasing t.","xMin":-2.5,"xMax":14,"yMin":-2.5,"yMax":6.5,"tickLabels":true,"unit":40,"polylines":[{"through":[[13.25,-1.5],[12.0556,-1.325],[10.9225,-1.15],[9.8506,-0.975],[8.84,-0.8],[7.8906,-0.625],[7.0025,-0.45],[6.1756,-0.275],[5.41,-0.1],[4.7056,0.075],[4.0625,0.25],[3.4806,0.425],[2.96,0.6],[2.5006,0.775],[2.1025,0.95],[1.7656,1.125],[1.49,1.3],[1.2756,1.475],[1.1225,1.65],[1.0306,1.825],[1,2],[1.0306,2.175],[1.1225,2.35],[1.2756,2.525],[1.49,2.7],[1.7656,2.875],[2.1025,3.05],[2.5006,3.225],[2.96,3.4],[3.4806,3.575],[4.0625,3.75],[4.7056,3.925],[5.41,4.1],[6.1756,4.275],[7.0025,4.45],[7.8906,4.625],[8.84,4.8],[9.8506,4.975],[10.9225,5.15],[12.0556,5.325],[13.25,5.5]]}],"segments":[{"from":[5.2425,-0.0606],"to":[4.7575,0.0606],"arrows":"end"},{"from":[9.7534,4.9589],"to":[10.2466,5.0411],"arrows":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="Given the equations below, with $t\ge0$, eliminate the parameter and write as a rectangular equation for $y$ as a function of $x$: $x(t)=2t^2+6$, $y(t)=5-t$."
  answer="5-\sqrt{\tfrac{1}{2}x-3}"
  answerDisplay="$y=5-\sqrt{\tfrac{1}{2}x-3}$"
  hint="Solve $x=2t^2+6$ for $t$, keeping the branch $t=5-y\ge0$ that matches $y=5-t$, then substitute into $y=5-t$."
>}}

**Example.** Eliminate the parameter and write as a Cartesian equation: $x(t)=e^{-t}$ and $y(t)=3e^t$.

**Solution.** Isolate $e^t$.

$$
\begin{array}{lrcl}
& x &=& e^{-t} \\[4pt]
& e^t &=& \tfrac1x
\end{array}
$$

Substitute the expression into $y(t)$.

$$
\begin{array}{lrcl}
& y &=& 3e^t \\[4pt]
& y &=& 3\left(\tfrac1x\right) \\[4pt]
& y &=& \tfrac3x
\end{array}
$$

The Cartesian form is $y=\tfrac3x$.

**Analysis.** The graph of the parametric equation is shown below (a). The domain is restricted to $t>0$. The Cartesian equation, $y=\tfrac3x,$ is shown below (b) and has only one restriction on the domain, $x\ne0$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"(a) The parametric curve x(t) = e to the minus t, y(t) = 3e to the t, a branch of a hyperbola in the first quadrant, with arrows showing motion up and to the left as t increases.","xMin":-1,"xMax":6,"yMin":-1,"yMax":6.5,"tickLabels":true,"unit":45,"polylines":[{"through":[[5.4739,0.5481],[5.1552,0.5819],[4.855,0.6179],[4.5722,0.6561],[4.306,0.6967],[4.0552,0.7398],[3.819,0.7855],[3.5966,0.8341],[3.3872,0.8857],[3.1899,0.9405],[3.0042,0.9986],[2.8292,1.0604],[2.6645,1.1259],[2.5093,1.1956],[2.3632,1.2695],[2.2255,1.348],[2.0959,1.4313],[1.9739,1.5199],[1.8589,1.6138],[1.7507,1.7136],[1.6487,1.8196],[1.5527,1.9321],[1.4623,2.0516],[1.3771,2.1784],[1.2969,2.3132],[1.2214,2.4562],[1.1503,2.6081],[1.0833,2.7693],[1.0202,2.9406],[0.9608,3.1224],[0.9048,3.3155],[0.8521,3.5205],[0.8025,3.7382],[0.7558,3.9694],[0.7118,4.2148],[0.6703,4.4755],[0.6313,4.7522],[0.5945,5.0461],[0.5599,5.3581],[0.5273,5.6894],[0.4966,6.0413]]}],"segments":[{"from":[2.9962,0.9908],"to":[2.4403,1.2165],"arrows":"end"},{"from":[0.7148,4.1788],"to":[0.6259,4.7722],"arrows":"end"}],"texts":[{"at":[3,5],"text":"x(t) = e⁻ᵗ"},{"at":[3,4.4],"text":"y(t) = 3eᵗ"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"(b) The Cartesian curve y equals 3 over x, a hyperbola with branches in the first and third quadrants.","xMin":-6.5,"xMax":6.5,"yMin":-6.5,"yMax":6.5,"tickLabels":true,"unit":25,"rationals":[{"num":[3],"den":[0,1]}],"texts":[{"at":[3.5,5.5],"text":"y = 3/x"}]}
{{< /apfigure >}}

**Example.** Eliminate the parameter and write as a Cartesian equation: $x(t)=\sqrt t+2$ and $y(t)=\log(t)$.

**Solution.** Solve the first equation for $t$.

$$
\begin{array}{lrcl}
& x &=& \sqrt t+2 \\[4pt]
& x-2 &=& \sqrt t \\[4pt]
\text{Square both sides.} & (x-2)^2 &=& t
\end{array}
$$

Then, substitute the expression for $t$ into the $y$ equation.

$$
\begin{array}{lrcl}
& y &=& \log(t) \\[4pt]
& y &=& \log(x-2)^2
\end{array}
$$

The Cartesian form is $y=\log(x-2)^2$.

**Analysis.** To be sure that the parametric equations are equivalent to the Cartesian equation, check the domains. The parametric equations restrict the domain on $x=\sqrt t+2$ to $t>0$; we restrict the domain on $x$ to $x>2$. The domain for the parametric equation $y=\log(t)$ is restricted to $t>0$; we limit the domain on $y=\log(x-2)^2$ to $x>2$.

{{< fillin
  question="Eliminate the parameter and write $y$ as a function of $x$: $x(t)=t^2$, $y(t)=\ln t$, $t>0$."
  answer="\ln\sqrt{x}"
  answerDisplay="$y=\ln\sqrt{x}$"
  hint="Solve $x=t^2$ for $t$ (using $t>0$), then substitute into $y=\ln t$."
>}}

### Eliminating the Parameter from Trigonometric Equations

Eliminating the parameter from trigonometric equations is a straightforward substitution. We can use a few of the familiar trigonometric identities and the Pythagorean Theorem.

First, we use the identities:

$$
\begin{array}{lrcl}
& x(t) &=& a\cos t \\[4pt]
& y(t) &=& b\sin t
\end{array}
$$

Solving for $\cos t$ and $\sin t,$ we have

$$
\begin{array}{lrcl}
& \tfrac xa &=& \cos t \\[4pt]
& \tfrac yb &=& \sin t
\end{array}
$$

Then, use the Pythagorean Theorem:

$$\cos^2t+\sin^2t=1$$

Substituting gives

$$\cos^2t+\sin^2t=\left(\tfrac xa\right)^2+\left(\tfrac yb\right)^2=1$$

**Example.** Eliminate the parameter from the given pair of trigonometric equations where $0\le t\le2\pi$ and sketch the graph.

$$
\begin{array}{lrcl}
& x(t) &=& 4\cos t \\[4pt]
& y(t) &=& 3\sin t
\end{array}
$$

**Solution.** Solving for $\cos t$ and $\sin t,$ we have

$$
\begin{array}{lrcl}
& x &=& 4\cos t \\[4pt]
& \tfrac x4 &=& \cos t \\[4pt]
& y &=& 3\sin t \\[4pt]
& \tfrac y3 &=& \sin t
\end{array}
$$

Next, use the Pythagorean identity and make the substitutions.

$$
\begin{array}{lrcl}
& \cos^2t+\sin^2t &=& 1 \\[4pt]
& \left(\tfrac x4\right)^2+\left(\tfrac y3\right)^2 &=& 1 \\[4pt]
& \tfrac{x^2}{16}+\tfrac{y^2}{9} &=& 1
\end{array}
$$

The graph for the equation is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The ellipse x squared over 16 plus y squared over 9 equals 1, centered at the origin, with the points marked t = 0 at (4,0) and t = pi over 2 at (0,3), and arrows showing counterclockwise motion as t increases.","xMin":-5,"xMax":5.5,"yMin":-4.5,"yMax":4.5,"tickLabels":true,"unit":40,"circles":[{"at":[0,0],"rx":4,"ry":3}],"segments":[{"from":[3.0684,1.9413],"to":[2.5884,2.3013],"arrows":"end"},{"from":[-3.0684,-1.9413],"to":[-2.5884,-2.3013],"arrows":"end"}],"points":[{"at":[4,0],"label":"t = 0"},{"at":[0,3],"label":"t = π/2"}]}
{{< /apfigure >}}

**Analysis.** Applying the general equations for conic sections, we can identify $\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$ as an ellipse centered at $(0,0)$. Notice that when $t=0$ the coordinates are $(4,0),$ and when $t=\tfrac{\pi}{2}$ the coordinates are $(0,3)$. This shows the orientation of the curve with increasing values of $t$.

{{< fillin
  question="Eliminate the parameter from the given pair of parametric equations and write as a Cartesian equation: $x(t)=2\cos t$, $y(t)=3\sin t$."
  answer="\tfrac{x^2}{4}+\tfrac{y^2}{9}=1"
  answerDisplay="$\tfrac{x^2}{4}+\tfrac{y^2}{9}=1$"
  hint="Solve for $\cos t$ and $\sin t$, then apply the Pythagorean identity $\cos^2t+\sin^2t=1$."
>}}

### Finding Cartesian Equations from Curves Defined Parametrically

When we are given a set of parametric equations and need to find an equivalent Cartesian equation, we are essentially "eliminating the parameter." However, there are various methods we can use to rewrite a set of parametric equations as a Cartesian equation. The simplest method is to set one equation equal to the parameter, such as $x(t)=t$. In this case, $y(t)$ can be any expression. For example, consider the following pair of equations.

$$
\begin{array}{lrcl}
& x(t) &=& t \\[4pt]
& y(t) &=& t^2-3
\end{array}
$$

Rewriting this set of parametric equations is a matter of substituting $x$ for $t$. Thus, the Cartesian equation is $y=x^2-3$.

**Example.** Use two different methods to find the Cartesian equation equivalent to the given set of parametric equations.

$$
\begin{array}{lrcl}
& x(t) &=& 3t-2 \\[4pt]
& y(t) &=& t+1
\end{array}
$$

**Solution.** **Method 1.** First, let's solve the $x$ equation for $t$. Then we can substitute the result into the $y$ equation.

$$
\begin{array}{lrcl}
& x &=& 3t-2 \\[4pt]
& x+2 &=& 3t \\[4pt]
& \tfrac{x+2}{3} &=& t
\end{array}
$$

Now substitute the expression for $t$ into the $y$ equation.

$$
\begin{array}{lrcl}
& y &=& t+1 \\[4pt]
& y &=& \left(\tfrac{x+2}{3}\right)+1 \\[4pt]
& y &=& \tfrac x3+\tfrac23+1 \\[4pt]
& y &=& \tfrac13x+\tfrac53
\end{array}
$$

**Method 2.** Solve the $y$ equation for $t$ and substitute this expression in the $x$ equation.

$$
\begin{array}{lrcl}
& y &=& t+1 \\[4pt]
& y-1 &=& t
\end{array}
$$

Make the substitution and then solve for $y$.

$$
\begin{array}{lrcl}
& x &=& 3(y-1)-2 \\[4pt]
& x &=& 3y-3-2 \\[4pt]
& x &=& 3y-5 \\[4pt]
& x+5 &=& 3y \\[4pt]
& \tfrac{x+5}{3} &=& y \\[4pt]
& y &=& \tfrac13x+\tfrac53
\end{array}
$$

{{< fillin
  question="Write the given parametric equations as a Cartesian equation: $x(t)=t^3$, $y(t)=t^6$."
  answer="x^2"
  answerDisplay="$y=x^2$"
  hint="Notice $y(t)=\left(t^3\right)^2$, so substitute $x$ for $t^3$."
>}}

### Finding Parametric Equations for Curves Defined by Rectangular Equations

Although we have just shown that there is only one way to interpret a set of parametric equations as a rectangular equation, there are multiple ways to interpret a rectangular equation as a set of parametric equations. Any strategy we may use to find the parametric equations is valid if it produces equivalency. In other words, if we choose an expression to represent $x,$ and then substitute it into the $y$ equation, and it produces the same graph over the same domain as the rectangular equation, then the set of parametric equations is valid. If the domain becomes restricted in the set of parametric equations, and the function does not allow the same values for $x$ as the domain of the rectangular equation, then the graphs will be different.

**Example.** Find a set of equivalent parametric equations for $y=(x+3)^2+1$.

**Solution.** An obvious choice would be to let $x(t)=t$. Then $y(t)=(t+3)^2+1$. But let's try something more interesting. What if we let $x=t+3$? Then we have

$$
\begin{array}{lrcl}
& y &=& (x+3)^2+1 \\[4pt]
& y &=& ((t+3)+3)^2+1 \\[4pt]
& y &=& (t+6)^2+1
\end{array}
$$

The set of parametric equations is

$$
\begin{array}{lrcl}
& x(t) &=& t+3 \\[4pt]
& y(t) &=& (t+6)^2+1
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"(a) The parametric parabola x(t) = t + 3, y(t) = (t + 6) squared plus 1, vertex at (-3,1), with arrows showing motion down and to the right toward the vertex on the left branch and up and to the right away from it on the right branch as t increases.","xMin":-6.5,"xMax":1,"yMin":-1,"yMax":7.5,"tickLabels":true,"unit":40,"polylines":[{"through":[[-5.4,6.76],[-5.28,6.1984],[-5.16,5.6656],[-5.04,5.1616],[-4.92,4.6864],[-4.8,4.24],[-4.68,3.8224],[-4.56,3.4336],[-4.44,3.0736],[-4.32,2.7424],[-4.2,2.44],[-4.08,2.1664],[-3.96,1.9216],[-3.84,1.7056],[-3.72,1.5184],[-3.6,1.36],[-3.48,1.2304],[-3.36,1.1296],[-3.24,1.0576],[-3.12,1.0144],[-3,1],[-2.88,1.0144],[-2.76,1.0576],[-2.64,1.1296],[-2.52,1.2304],[-2.4,1.36],[-2.28,1.5184],[-2.16,1.7056],[-2.04,1.9216],[-1.92,2.1664],[-1.8,2.44],[-1.68,2.7424],[-1.56,3.0736],[-1.44,3.4336],[-1.32,3.8224],[-1.2,4.24],[-1.08,4.6864],[-0.96,5.1616],[-0.84,5.6656],[-0.72,6.1984],[-0.6,6.76]]}],"segments":[{"from":[-4.6265,3.6295],"to":[-4.3735,2.8705],"arrows":"end"},{"from":[-1.6265,2.8705],"to":[-1.3735,3.6295],"arrows":"end"}],"texts":[{"at":[-4.5,6.8],"text":"x(t) = t + 3"},{"at":[-4.5,6.2],"text":"y(t) = (t + 6)² + 1"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"(b) The rectangular parabola y = (x + 3) squared plus 1, the same curve with no parameter and no orientation arrows.","xMin":-6.5,"xMax":1,"yMin":-1,"yMax":7.5,"tickLabels":true,"unit":40,"quadratics":[{"a":1,"b":6,"c":10,"arrows":false}],"texts":[{"at":[-4.5,6.8],"text":"y = (x + 3)² + 1"}]}
{{< /apfigure >}}

## Key concepts

- Parameterizing a curve involves translating a rectangular equation in two variables, $x$ and $y,$ into two equations in three variables, $x,$ $y,$ and $t$. Often, more information is obtained from a set of parametric equations.
- Sometimes equations are simpler to graph when written in rectangular form. By eliminating $t,$ an equation in $x$ and $y$ is the result.
- To eliminate $t,$ solve one of the equations for $t,$ and substitute the expression into the second equation.
- Finding the rectangular equation for a curve defined parametrically is basically the same as eliminating the parameter. Solve for $t$ in one of the equations, and substitute the expression into the second equation.
- There are an infinite number of ways to choose a set of parametric equations for a curve defined as a rectangular equation.
- Find an expression for $x$ such that the domain of the set of parametric equations remains the same as the original rectangular equation.

## Key terms

**parameter** — a variable, often representing time, upon which $x$ and $y$ are both dependent.

## Practice

### Parameterize a curve

{{< fillin
  question="Parameterize the line from $(-1,0)$ to $(3,-2)$ so that the line is at $(-1,0)$ at $t=0$ and at $(3,-2)$ at $t=1$. Give $x(t)$ then $y(t)$, separated by a comma."
  answer="-1+4t,-2t"
  answerDisplay="$x(t)=-1+4t$, $y(t)=-2t$"
  hint="At $t=0$ the point is $(-1,0)$ and at $t=1$ it is $(3,-2)$; write each coordinate as a linear function of $t$ that matches both values."
>}}

{{< fillin
  question="Parameterize the line from $(4,1)$ to $(6,-2)$ so that the line is at $(4,1)$ at $t=0$ and at $(6,-2)$ at $t=1$. Give $x(t)$ then $y(t)$, separated by a comma."
  answer="4+2t,1-3t"
  answerDisplay="$x(t)=4+2t$, $y(t)=1-3t$"
  hint="At $t=0$ the point is $(4,1)$ and at $t=1$ it is $(6,-2)$; write each coordinate as a linear function of $t$ that matches both values."
>}}

### Eliminate the parameter

{{< fillin
  question="Eliminate the parameter to write $y$ as a function of $x$: $x(t)=2t+1$, $y(t)=3\sqrt t$."
  answer="3\sqrt{\tfrac{x-1}{2}}"
  answerDisplay="$y=3\sqrt{\tfrac{x-1}{2}}$"
  hint="Solve $x=2t+1$ for $t$, then substitute into $y=3\sqrt t$."
>}}

{{< fillin
  question="Eliminate the parameter to write $x$ as a function of $y$: $x(t)=4\log(t)$, $y(t)=3+2t$."
  answer="4\log\left(\tfrac{y-3}{2}\right)"
  answerDisplay="$x=4\log\left(\tfrac{y-3}{2}\right)$"
  hint="Solve $y=3+2t$ for $t$, then substitute into $x=4\log(t)$."
>}}

{{< fillin
  question="Eliminate the parameter to write a Cartesian equation: $x(t)=4\cos t$, $y(t)=5\sin t$."
  answer="\tfrac{x^2}{16}+\tfrac{y^2}{25}=1"
  answerDisplay="$\tfrac{x^2}{16}+\tfrac{y^2}{25}=1$"
  hint="Solve for $\cos t$ and $\sin t$, then apply the Pythagorean identity $\cos^2t+\sin^2t=1$."
>}}

### Find a rectangular equation for a curve defined parametrically

{{< fillin
  question="Rewrite the parametric equations as a Cartesian equation by building an $x$-$y$ table: $x(t)=4-t$, $y(t)=3t+2$."
  answer="-3x+14"
  answerDisplay="$y=-3x+14$"
  hint="Solve $x=4-t$ for $t$, then substitute into $y=3t+2$."
>}}

{{< fillin
  question="Rewrite the parametric equations as a Cartesian equation by building an $x$-$y$ table: $x(t)=4t-1$, $y(t)=4t+2$."
  answer="x+3"
  answerDisplay="$y=x+3$"
  hint="Both $x(t)$ and $y(t)$ share the same $4t$ term; subtract the two equations to eliminate $t$."
>}}

### Find parametric equations for curves defined by rectangular equations

{{< fillin
  question="Find parametric equations for $y=2\sin x+1$, letting $x(t)=t$. What is $y(t)$?"
  answer="2\sin t+1"
  answerDisplay="$y(t)=2\sin t+1$"
  hint="Replace every $x$ in the rectangular equation with $t$."
>}}

{{< fillin
  question="Find parametric equations for $x=\sqrt y+2y$, letting $y(t)=t$. What is $x(t)$?"
  answer="\sqrt t+2t"
  answerDisplay="$x(t)=\sqrt t+2t$"
  hint="Replace every $y$ in the rectangular equation with $t$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 8.6: Parametric Equations](https://openstax.org/books/precalculus-2e/pages/8-6-parametric-equations) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative chapter-opening illustration of a planet's circular orbit around the sun (Figure 1), which carries no mathematical content, and reworded the sentence that pointed at it. Recreated all thirteen instructional figures as accessible spec-first SVGs sampled or fitted from their exact formulas (never traced) — the vertical-line-test circle of radius 2 with its dashed test line; the parametric parabola $y(t)=t^2-1$ and its rectangular twin $y=x^2-1$ (Example 1's two-panel Figure 3, split into two single-panel figures); the downward parabola $y(t)=1-t^2$; the three-panel Figure 5 for the motion example (x-vs-t, y-vs-t, and the plane path with $t=1$ and $t=3$ marked), split into three single-panel figures; the sideways parabola $x=(y-2)^2+1$; the exponential-to-hyperbola pair of Figure 7 (split into two panels); the ellipse $\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$ with $t=0$ and $t=\tfrac{\pi}{2}$ marked; and the parametric/rectangular parabola pair of Figure 9 (split into two panels). Every orientation-arrow direction was computed from the tangent of consecutive samples of the exact parametric formula, never estimated from the printed page. Omitted the "Access these online resources" media links. Every retained Try It became a real `fillin` component. The Try It after Example 2 ("Parameterize the curve given by $x=y^3-2y$") states its printed problem's own answer key's construction "using $y(t)=t$" explicitly in the question, since the printed problem leaves the choice of parametrization open while only the key pins one — an infinite-answer hazard the chapter brief flags; both Practice items in the "find parametric equations for curves defined by rectangular equations" group are similarly pinned to the exact construction their own source keys use. The Try It asking to eliminate the parameter from $x(t)=2t^2+6$, $y(t)=5-t$ adds "with $t\ge0$" to its question: the source states no restriction, but its parametrization is two-to-one in $t$, so without the restriction $y$ is not a function of $x$ at all and the source-keyed branch $y=5-\sqrt{\tfrac12x-3}$ would mark the equally valid other branch wrong (see the errata log). Adapted nine selected end-of-section exercises — two "parameterize the line from…to…" items, three "eliminate the parameter" items (one polynomial/radical, one logarithmic, one trigonometric), two "rewrite by building an $x$-$y$ table" items, and two "parameterize by setting $x(t)=t$ or $y(t)=t$" items — into a closing Practice block, one group per objective, every answer independently re-derived by substitution (verified by running the arithmetic in Node) rather than read off the source key, and every fillin replayed against the real grader together with a retype of its printed parametric subject to confirm no retype hazard.</small>
