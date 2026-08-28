---
title: "Polar Coordinates: Graphs"
description: >-
  Testing a polar equation for the three types of symmetry, finding the
  zeros and maximum |r| of a polar equation, and graphing circles,
  cardioids, limaçons, lemniscates, rose curves, and the Archimedean spiral
  by plotting points — adapted from OpenStax Precalculus 2e, Section 8.4.
source_section: "8.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Test polar equations for symmetry
- Graph polar equations by plotting points
{{< /callout >}}

The planets move through space in elliptical, periodic orbits about the sun. They are in constant motion, so fixing an exact position of any planet is valid only for a moment — we can fix only its *instantaneous* position. This is one application of polar coordinates, represented as $(r,\theta)$. We interpret $r$ as the distance from the center of the sun and $\theta$ as the planet’s angular bearing, or its direction from the center of the sun. In this section, we focus on the polar system and the graphs that are generated directly from polar coordinates.

### Testing Polar Equations for Symmetry

Just as a rectangular equation such as $y=x^2$ describes the relationship between $x$ and $y$ on a Cartesian grid, a **polar equation** describes a relationship between $r$ and $\theta$ on a polar grid. Recall that the coordinate pair $(r,\theta)$ indicates that we move counterclockwise from the polar axis (positive $x$-axis) by an angle of $\theta$, and extend a ray from the pole (origin) $r$ units in the direction of $\theta$. All points that satisfy the polar equation are on the graph.

Symmetry is a property that helps us recognize and plot the graph of any equation. If an equation has a graph that is symmetric with respect to an axis, it means that if we folded the graph in half over that axis, the portion of the graph on one side would coincide with the portion on the other side. By performing three tests, we can see how to apply the properties of symmetry to polar equations. Further, we use symmetry — in addition to plotting key points, zeros, and maximums of $r$ — to determine the graph of a polar equation.

In the first test, we consider symmetry with respect to the line $\theta=\tfrac{\pi}{2}$ ($y$-axis). We replace $(r,\theta)$ with $(-r,-\theta)$ to determine if the new equation is equivalent to the original equation. For example, suppose we are given the equation $r=2\sin\theta$.

$$
\begin{array}{lrcl}
& r &=& 2\sin\theta \\[4pt]
\text{Replace }(r,\theta)\text{ with }(-r,-\theta). & -r &=& 2\sin(-\theta) \\[4pt]
\text{Identity: }\sin(-\theta)=-\sin\theta. & -r &=& -2\sin\theta \\[4pt]
\text{Multiply both sides by }-1. & r &=& 2\sin\theta
\end{array}
$$

This equation exhibits symmetry with respect to the line $\theta=\tfrac{\pi}{2}$.

In the second test, we consider symmetry with respect to the polar axis ($x$-axis). We replace $(r,\theta)$ with $(r,-\theta)$ or $(-r,\pi-\theta)$ to determine equivalency between the tested equation and the original. For example, suppose we are given the equation $r=1-2\cos\theta$.

$$
\begin{array}{lrcl}
& r &=& 1-2\cos\theta \\[4pt]
\text{Replace }(r,\theta)\text{ with }(r,-\theta). & r &=& 1-2\cos(-\theta) \\[4pt]
\text{Even/odd identity.} & r &=& 1-2\cos\theta
\end{array}
$$

The graph of this equation exhibits symmetry with respect to the polar axis.

In the third test, we consider symmetry with respect to the pole (origin). We replace $(r,\theta)$ with $(-r,\theta)$ to determine if the tested equation is equivalent to the original equation. For example, suppose we are given the equation $r=2\sin(3\theta)$.

$$
\begin{array}{lrcl}
& r &=& 2\sin(3\theta) \\[4pt]
\text{Replace }r\text{ with }-r. & -r &=& 2\sin(3\theta)
\end{array}
$$

The equation has failed the symmetry test, but that does not mean that it is not symmetric with respect to the pole. Passing one or more of the symmetry tests verifies that symmetry will be exhibited in a graph. However, failing the symmetry tests does not necessarily indicate that a graph will not be symmetric about the line $\theta=\tfrac{\pi}{2}$, the polar axis, or the pole. In these instances, we can confirm that symmetry exists by plotting reflecting points across the apparent axis of symmetry or the pole. Testing for symmetry is a technique that simplifies the graphing of polar equations, but its application is not perfect.

{{< callout type="info" >}}
  **Symmetry tests.** A polar equation describes a curve on the polar grid. The graph of a polar equation can be evaluated for three types of symmetry, shown below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A ray from the pole at angle theta above the polar axis into quadrant I, with a dashed mirror ray at angle 180 minus theta into quadrant II, illustrating symmetry about the line theta = pi/2.","xMin":-2.1,"xMax":2.1,"yMin":-1.4,"yMax":2.1,"grid":false,"tickLabels":false,"unit":75,"segments":[{"from":[0,0],"to":[1.0927,1.3023],"arrows":"end"},{"from":[0,0],"to":[-1.0927,1.3023],"dashed":true,"arrows":"end"}],"circles":[{"at":[0,0],"r":0.5,"from":0,"to":50},{"at":[0,0],"r":0.5,"from":130,"to":180}],"texts":[{"at":[0.62,0.22],"text":"\u03b8"},{"at":[-0.62,0.22],"text":"\u03b8"}]}
{{< /apfigure >}}

*(a) A graph is symmetric with respect to the line $\theta=\tfrac{\pi}{2}$ ($y$-axis) if replacing $(r,\theta)$ with $(-r,-\theta)$ yields an equivalent equation.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A ray from the pole at angle theta above the polar axis into quadrant I, with a dashed mirror ray at angle negative theta into quadrant IV, illustrating symmetry about the polar axis.","xMin":-1.6,"xMax":1.6,"yMin":-1.6,"yMax":1.6,"grid":false,"tickLabels":false,"unit":75,"segments":[{"from":[0,0],"to":[1.0927,1.3023],"arrows":"end"},{"from":[0,0],"to":[1.0927,-1.3023],"dashed":true,"arrows":"end"}],"circles":[{"at":[0,0],"r":0.5,"from":0,"to":50},{"at":[0,0],"r":0.5,"from":-50,"to":0}],"texts":[{"at":[0.62,0.22],"text":"\u03b8"},{"at":[0.62,-0.22],"text":"\u03b8"}]}
{{< /apfigure >}}

*(b) A graph is symmetric with respect to the polar axis ($x$-axis) if replacing $(r,\theta)$ with $(r,-\theta)$ or $(-r,\pi-\theta)$ yields an equivalent equation.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A ray from the pole at angle theta above the polar axis into quadrant I, with a dashed mirror ray extending through the pole into quadrant III, illustrating symmetry about the pole.","xMin":-2.1,"xMax":2.1,"yMin":-1.9,"yMax":1.9,"grid":false,"tickLabels":false,"unit":68,"segments":[{"from":[0,0],"to":[1.0927,1.3023],"arrows":"end"},{"from":[0,0],"to":[-1.0927,-1.3023],"dashed":true,"arrows":"end"}],"circles":[{"at":[0,0],"r":0.5,"from":0,"to":50},{"at":[0,0],"r":0.5,"from":180,"to":230}],"texts":[{"at":[0.62,0.22],"text":"\u03b8"},{"at":[-0.62,-0.22],"text":"\u03b8"}]}
{{< /apfigure >}}

*(c) A graph is symmetric with respect to the pole (origin) if replacing $(r,\theta)$ with $(-r,\theta)$ yields an equivalent equation.*

{{< callout type="info" >}}
  **How to:** given a polar equation, test for symmetry.

  1. Substitute the appropriate combination of components for $(r,\theta)$: $(-r,-\theta)$ for $\theta=\tfrac{\pi}{2}$ symmetry; $(r,-\theta)$ for polar axis symmetry; and $(-r,\theta)$ for symmetry with respect to the pole.
  2. If the resulting equation is equivalent to the original in one or more of the tests, the graph produces the expected symmetry.
{{< /callout >}}

**Example.** Test the equation $r=2\sin\theta$ for symmetry.

**Solution.** Test for each of the three types of symmetry.

| Test | Work |
| :--- | :--- |
| Replacing $(r,\theta)$ with $(-r,-\theta)$ yields the same result. Thus, the graph is symmetric with respect to the line $\theta=\tfrac{\pi}{2}$. | $-r=2\sin(-\theta)$, so $-r=-2\sin\theta$ (even-odd identity), so $r=2\sin\theta$ (multiply by $-1$). Passed. |
| Replacing $\theta$ with $-\theta$ does not yield the same equation. Therefore, the graph fails the test and may or may not be symmetric with respect to the polar axis. | $r=2\sin(-\theta)$, so $r=-2\sin\theta$ (even-odd identity), and $-2\sin\theta\ne2\sin\theta$. Failed. |
| Replacing $r$ with $-r$ changes the equation and fails the test. The graph may or may not be symmetric with respect to the pole. | $-r=2\sin\theta$, so $r=-2\sin\theta\ne2\sin\theta$. Failed. |

**Analysis.** Using a graphing calculator, we can see that the equation $r=2\sin\theta$ is a circle centered at $(0,1)$ with radius $r=1$ and is indeed symmetric to the line $\theta=\tfrac{\pi}{2}$. We can also see that the graph is not symmetric with the polar axis or the pole. See below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A rectangular coordinate grid with a circle centered at (0, 1) with radius 1, the graph of r equals 2 sine theta, drawn on top of a faint polar grid.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"tickLabels":true,"unit":48,"circles":[{"at":[0,1],"r":1}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Test the equation for symmetry: $r=-2\cos\theta$. Which symmetries does its graph exhibit?"
  answer="the polar axis only"
  hint="Try $(r,-\theta)$ first — replacing $\theta$ with $-\theta$ leaves $\cos\theta$ unchanged."
>}}
the polar axis, the line $\theta=\tfrac{\pi}{2}$, and the pole
the pole only
the polar axis only
the line $\theta=\tfrac{\pi}{2}$ only
{{< /multiplechoice >}}

### Graphing Polar Equations by Plotting Points

To graph in the rectangular coordinate system we construct a table of $x$ and $y$ values. To graph in the polar coordinate system we construct a table of $\theta$ and $r$ values. We enter values of $\theta$ into a polar equation and calculate $r$. However, using the properties of symmetry and finding key values of $\theta$ and $r$ means fewer calculations will be needed.

#### Finding Zeros and Maxima

To find the zeros of a polar equation, we solve for the values of $\theta$ that result in $r=0$. Recall that, to find the zeros of polynomial functions, we set the equation equal to zero and then solve for $x$. We use the same process for polar equations. Set $r=0$, and solve for $\theta$.

For many of the forms we will encounter, the maximum value of a polar equation is found by substituting into the equation those values of $\theta$ that result in the maximum value of the trigonometric functions. Consider $r=5\cos\theta$; the maximum distance between the curve and the pole is $5$ units. The maximum value of the cosine function is $1$ when $\theta=0$, so our polar equation is $5\cos\theta$, and the value $\theta=0$ yields the maximum $\lvert r\rvert$.

Similarly, the maximum value of the sine function is $1$ when $\theta=\tfrac{\pi}{2}$, and if our polar equation is $r=5\sin\theta$, the value $\theta=\tfrac{\pi}{2}$ yields the maximum $\lvert r\rvert$. We may find additional information by calculating values of $r$ when $\theta=0$. These points would be polar axis intercepts, which may be helpful in drawing the graph and identifying the curve of a polar equation.

**Example.** Using the equation in the previous example, find the zeros and maximum $\lvert r\rvert$ and, if necessary, the polar axis intercepts of $r=2\sin\theta$.

**Solution.** To find the zeros, set $r$ equal to zero and solve for $\theta$.

$$
\begin{array}{lrcl}
& 2\sin\theta &=& 0 \\[4pt]
& \sin\theta &=& 0 \\[4pt]
& \theta &=& \sin^{-1}0 \\[4pt]
\text{where }n\text{ is an integer.} & \theta &=& n\pi
\end{array}
$$

Substitute any one of the $\theta$ values into the equation. We will use $0$.

$$
\begin{array}{lrcl}
& r &=& 2\sin(0) \\[4pt]
& r &=& 0
\end{array}
$$

The points $(0,0)$ and $(0,\pm n\pi)$ are the zeros of the equation. They all coincide, so only one point is visible on the graph. This point is also the only polar axis intercept.

To find the maximum value of the equation, look at the maximum value of the trigonometric function $\sin\theta$, which occurs when $\theta=\tfrac{\pi}{2}\pm2k\pi$, resulting in $\sin\left(\tfrac{\pi}{2}\right)=1$. Substitute $\tfrac{\pi}{2}$ for $\theta$.

$$
\begin{array}{lrcl}
& r &=& 2\sin\left(\tfrac{\pi}{2}\right) \\[4pt]
& r &=& 2(1) \\[4pt]
& r &=& 2
\end{array}
$$

**Analysis.** The point $\left(2,\tfrac{\pi}{2}\right)$ is the maximum value on the graph. Let’s plot a few more points to verify the graph of a circle. See below.

| $\theta$ | $r=2\sin\theta$ | $r$ |
| :--- | :--- | ---: |
| $0$ | $r=2\sin(0)=0$ | $0$ |
| $\tfrac{\pi}{6}$ | $r=2\sin\left(\tfrac{\pi}{6}\right)=1$ | $1$ |
| $\tfrac{\pi}{3}$ | $r=2\sin\left(\tfrac{\pi}{3}\right)\approx1.73$ | $1.73$ |
| $\tfrac{\pi}{2}$ | $r=2\sin\left(\tfrac{\pi}{2}\right)=2$ | $2$ |
| $\tfrac{2\pi}{3}$ | $r=2\sin\left(\tfrac{2\pi}{3}\right)\approx1.73$ | $1.73$ |
| $\tfrac{5\pi}{6}$ | $r=2\sin\left(\tfrac{5\pi}{6}\right)=1$ | $1$ |
| $\pi$ | $r=2\sin(\pi)=0$ | $0$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid with two concentric circles and the circle r equals 2 sine theta plotted, with points marked at (0,0), (1,pi/6), (1.73,pi/3), (2,pi/2), (1.73,2pi/3), (1,5pi/6), and (0,pi).","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":true,"unit":75,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2}],"segments":[{"from":[-2.4,-0.0],"to":[2.4,0.0],"arrows":false},{"from":[-2.0785,-1.2],"to":[2.0785,1.2],"arrows":false},{"from":[-1.2,-2.0785],"to":[1.2,2.0785],"arrows":false},{"from":[-0.0,-2.4],"to":[0.0,2.4],"arrows":false},{"from":[1.2,-2.0785],"to":[-1.2,2.0785],"arrows":false},{"from":[2.0785,-1.2],"to":[-2.0785,1.2],"arrows":false}],"polylines":[{"through":[[0,0],[0.0523,0.0014],[0.1045,0.0055],[0.1564,0.0123],[0.2079,0.0219],[0.2588,0.0341],[0.309,0.0489],[0.3584,0.0664],[0.4067,0.0865],[0.454,0.109],[0.5,0.134],[0.5446,0.1613],[0.5878,0.191],[0.6293,0.2229],[0.6691,0.2569],[0.7071,0.2929],[0.7431,0.3309],[0.7771,0.3707],[0.809,0.4122],[0.8387,0.4554],[0.866,0.5],[0.891,0.546],[0.9135,0.5933],[0.9336,0.6416],[0.9511,0.691],[0.9659,0.7412],[0.9781,0.7921],[0.9877,0.8436],[0.9945,0.8955],[0.9986,0.9477],[1,1],[0.9986,1.0523],[0.9945,1.1045],[0.9877,1.1564],[0.9781,1.2079],[0.9659,1.2588],[0.9511,1.309],[0.9336,1.3584],[0.9135,1.4067],[0.891,1.454],[0.866,1.5],[0.8387,1.5446],[0.809,1.5878],[0.7771,1.6293],[0.7431,1.6691],[0.7071,1.7071],[0.6691,1.7431],[0.6293,1.7771],[0.5878,1.809],[0.5446,1.8387],[0.5,1.866],[0.454,1.891],[0.4067,1.9135],[0.3584,1.9336],[0.309,1.9511],[0.2588,1.9659],[0.2079,1.9781],[0.1564,1.9877],[0.1045,1.9945],[0.0523,1.9986],[0,2],[-0.0523,1.9986],[-0.1045,1.9945],[-0.1564,1.9877],[-0.2079,1.9781],[-0.2588,1.9659],[-0.309,1.9511],[-0.3584,1.9336],[-0.4067,1.9135],[-0.454,1.891],[-0.5,1.866],[-0.5446,1.8387],[-0.5878,1.809],[-0.6293,1.7771],[-0.6691,1.7431],[-0.7071,1.7071],[-0.7431,1.6691],[-0.7771,1.6293],[-0.809,1.5878],[-0.8387,1.5446],[-0.866,1.5],[-0.891,1.454],[-0.9135,1.4067],[-0.9336,1.3584],[-0.9511,1.309],[-0.9659,1.2588],[-0.9781,1.2079],[-0.9877,1.1564],[-0.9945,1.1045],[-0.9986,1.0523],[-1,1],[-0.9986,0.9477],[-0.9945,0.8955],[-0.9877,0.8436],[-0.9781,0.7921],[-0.9659,0.7412],[-0.9511,0.691],[-0.9336,0.6416],[-0.9135,0.5933],[-0.891,0.546],[-0.866,0.5],[-0.8387,0.4554],[-0.809,0.4122],[-0.7771,0.3707],[-0.7431,0.3309],[-0.7071,0.2929],[-0.6691,0.2569],[-0.6293,0.2229],[-0.5878,0.191],[-0.5446,0.1613],[-0.5,0.134],[-0.454,0.109],[-0.4067,0.0865],[-0.3584,0.0664],[-0.309,0.0489],[-0.2588,0.0341],[-0.2079,0.0219],[-0.1564,0.0123],[-0.1045,0.0055],[-0.0523,0.0014],[0,0]]}],"points":[{"at":[0.0,0.0]},{"at":[0.866,0.5]},{"at":[0.866,1.5]},{"at":[0.0,2.0]},{"at":[-0.866,1.5]},{"at":[-0.866,0.5]},{"at":[-0.0,0.0]}]}
{{< /apfigure >}}


{{< fillin
  question="Without converting to Cartesian coordinates, test the equation $r=3\cos\theta$ for symmetry, then find the smallest nonnegative value of $\theta$ at which $r=0$."
  answer="\pi/2"
  answerForm="radians"
  answerDisplay="$\theta=\tfrac{\pi}{2}$"
  hint="Set $3\cos\theta=0$ and solve for the smallest nonnegative $\theta$."
>}}

{{< multiplechoice
  question="Which symmetries does the graph of $r=3\cos\theta$ exhibit?"
  answer="the polar axis only"
  hint="Try $(r,-\theta)$: cosine is even, so this substitution should be quick to check."
>}}
the pole only
the line $\theta=\tfrac{\pi}{2}$ only
the polar axis, the line $\theta=\tfrac{\pi}{2}$, and the pole
the polar axis only
{{< /multiplechoice >}}

{{< fillin
  question="Find the maximum value of $\lvert r\rvert$ for $r=3\cos\theta$, and the value of $\theta$ with $0\le\theta<2\pi$ at which it occurs. Enter your answer as an ordered pair $(r,\theta)$."
  answer="(3,0)"
  answerForm="radians"
  answerDisplay="$(3,0)$"
  hint="Cosine is largest when its argument is $0$."
>}}

#### Investigating Circles

Now we have seen the equation of a circle in the polar coordinate system. In the last two examples, the same equation was used to illustrate the properties of symmetry and demonstrate how to find the zeros, maximum values, and plotted points that produced the graphs. However, the circle is only one of many shapes in the set of polar curves.

There are five classic polar curves: **cardioids**, **limaçons**, **lemniscates**, **rose curves**, and **Archimedes’ spirals**. We briefly touch on the polar formulas for the circle before moving on to the classic curves and their variations.

{{< callout type="info" >}}
  **Formulas for the equation of a circle.** Some of the formulas that produce the graph of a circle in polar coordinates are given by $r=a\cos\theta$ and $r=a\sin\theta$, where $a$ is the diameter of the circle or the distance from the pole to the farthest point on the circumference. The radius is $\tfrac{\lvert a\rvert}{2}$, or one-half the diameter. For $r=a\cos\theta$, the center is $\left(\tfrac{a}{2},0\right)$. For $r=a\sin\theta$, the center is $\left(\tfrac{a}{2},\tfrac{\pi}{2}\right)$. The four graphs below show these circles.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A small circle tangent to the y-axis, opening to the right of the pole.","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":false,"unit":55,"polylines":[{"through":[[2,0],[1.9848,0.1736],[1.9397,0.342],[1.866,0.5],[1.766,0.6428],[1.6428,0.766],[1.5,0.866],[1.342,0.9397],[1.1736,0.9848],[1,1],[0.8264,0.9848],[0.658,0.9397],[0.5,0.866],[0.3572,0.766],[0.234,0.6428],[0.134,0.5],[0.0603,0.342],[0.0152,0.1736],[0,0],[0.0152,-0.1736],[0.0603,-0.342],[0.134,-0.5],[0.234,-0.6428],[0.3572,-0.766],[0.5,-0.866],[0.658,-0.9397],[0.8264,-0.9848],[1,-1],[1.1736,-0.9848],[1.342,-0.9397],[1.5,-0.866],[1.6428,-0.766],[1.766,-0.6428],[1.866,-0.5],[1.9397,-0.342],[1.9848,-0.1736],[2,0],[1.9848,0.1736],[1.9397,0.342],[1.866,0.5],[1.766,0.6428],[1.6428,0.766],[1.5,0.866],[1.342,0.9397],[1.1736,0.9848],[1,1],[0.8264,0.9848],[0.658,0.9397],[0.5,0.866],[0.3572,0.766],[0.234,0.6428],[0.134,0.5],[0.0603,0.342],[0.0152,0.1736],[0,0],[0.0152,-0.1736],[0.0603,-0.342],[0.134,-0.5],[0.234,-0.6428],[0.3572,-0.766],[0.5,-0.866],[0.658,-0.9397],[0.8264,-0.9848],[1,-1],[1.1736,-0.9848],[1.342,-0.9397],[1.5,-0.866],[1.6428,-0.766],[1.766,-0.6428],[1.866,-0.5],[1.9397,-0.342],[1.9848,-0.1736],[2,0]]}]}
{{< /apfigure >}}

*(a) $r=a\cos\theta$, $a>0$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A small circle tangent to the y-axis, opening to the left of the pole.","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":false,"unit":55,"polylines":[{"through":[[-2,0],[-1.9848,-0.1736],[-1.9397,-0.342],[-1.866,-0.5],[-1.766,-0.6428],[-1.6428,-0.766],[-1.5,-0.866],[-1.342,-0.9397],[-1.1736,-0.9848],[-1,-1],[-0.8264,-0.9848],[-0.658,-0.9397],[-0.5,-0.866],[-0.3572,-0.766],[-0.234,-0.6428],[-0.134,-0.5],[-0.0603,-0.342],[-0.0152,-0.1736],[0,0],[-0.0152,0.1736],[-0.0603,0.342],[-0.134,0.5],[-0.234,0.6428],[-0.3572,0.766],[-0.5,0.866],[-0.658,0.9397],[-0.8264,0.9848],[-1,1],[-1.1736,0.9848],[-1.342,0.9397],[-1.5,0.866],[-1.6428,0.766],[-1.766,0.6428],[-1.866,0.5],[-1.9397,0.342],[-1.9848,0.1736],[-2,0],[-1.9848,-0.1736],[-1.9397,-0.342],[-1.866,-0.5],[-1.766,-0.6428],[-1.6428,-0.766],[-1.5,-0.866],[-1.342,-0.9397],[-1.1736,-0.9848],[-1,-1],[-0.8264,-0.9848],[-0.658,-0.9397],[-0.5,-0.866],[-0.3572,-0.766],[-0.234,-0.6428],[-0.134,-0.5],[-0.0603,-0.342],[-0.0152,-0.1736],[0,0],[-0.0152,0.1736],[-0.0603,0.342],[-0.134,0.5],[-0.234,0.6428],[-0.3572,0.766],[-0.5,0.866],[-0.658,0.9397],[-0.8264,0.9848],[-1,1],[-1.1736,0.9848],[-1.342,0.9397],[-1.5,0.866],[-1.6428,0.766],[-1.766,0.6428],[-1.866,0.5],[-1.9397,0.342],[-1.9848,0.1736],[-2,0]]}]}
{{< /apfigure >}}

*(b) $r=a\cos\theta$, $a<0$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A small circle tangent to the x-axis, opening above the pole.","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":false,"unit":55,"polylines":[{"through":[[0,0],[0.1736,0.0152],[0.342,0.0603],[0.5,0.134],[0.6428,0.234],[0.766,0.3572],[0.866,0.5],[0.9397,0.658],[0.9848,0.8264],[1,1],[0.9848,1.1736],[0.9397,1.342],[0.866,1.5],[0.766,1.6428],[0.6428,1.766],[0.5,1.866],[0.342,1.9397],[0.1736,1.9848],[0,2],[-0.1736,1.9848],[-0.342,1.9397],[-0.5,1.866],[-0.6428,1.766],[-0.766,1.6428],[-0.866,1.5],[-0.9397,1.342],[-0.9848,1.1736],[-1,1],[-0.9848,0.8264],[-0.9397,0.658],[-0.866,0.5],[-0.766,0.3572],[-0.6428,0.234],[-0.5,0.134],[-0.342,0.0603],[-0.1736,0.0152],[0,0],[0.1736,0.0152],[0.342,0.0603],[0.5,0.134],[0.6428,0.234],[0.766,0.3572],[0.866,0.5],[0.9397,0.658],[0.9848,0.8264],[1,1],[0.9848,1.1736],[0.9397,1.342],[0.866,1.5],[0.766,1.6428],[0.6428,1.766],[0.5,1.866],[0.342,1.9397],[0.1736,1.9848],[0,2],[-0.1736,1.9848],[-0.342,1.9397],[-0.5,1.866],[-0.6428,1.766],[-0.766,1.6428],[-0.866,1.5],[-0.9397,1.342],[-0.9848,1.1736],[-1,1],[-0.9848,0.8264],[-0.9397,0.658],[-0.866,0.5],[-0.766,0.3572],[-0.6428,0.234],[-0.5,0.134],[-0.342,0.0603],[-0.1736,0.0152],[0,0]]}]}
{{< /apfigure >}}

*(c) $r=a\sin\theta$, $a>0$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A small circle tangent to the x-axis, opening below the pole.","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":false,"unit":55,"polylines":[{"through":[[0,0],[-0.1736,-0.0152],[-0.342,-0.0603],[-0.5,-0.134],[-0.6428,-0.234],[-0.766,-0.3572],[-0.866,-0.5],[-0.9397,-0.658],[-0.9848,-0.8264],[-1,-1],[-0.9848,-1.1736],[-0.9397,-1.342],[-0.866,-1.5],[-0.766,-1.6428],[-0.6428,-1.766],[-0.5,-1.866],[-0.342,-1.9397],[-0.1736,-1.9848],[0,-2],[0.1736,-1.9848],[0.342,-1.9397],[0.5,-1.866],[0.6428,-1.766],[0.766,-1.6428],[0.866,-1.5],[0.9397,-1.342],[0.9848,-1.1736],[1,-1],[0.9848,-0.8264],[0.9397,-0.658],[0.866,-0.5],[0.766,-0.3572],[0.6428,-0.234],[0.5,-0.134],[0.342,-0.0603],[0.1736,-0.0152],[0,0],[-0.1736,-0.0152],[-0.342,-0.0603],[-0.5,-0.134],[-0.6428,-0.234],[-0.766,-0.3572],[-0.866,-0.5],[-0.9397,-0.658],[-0.9848,-0.8264],[-1,-1],[-0.9848,-1.1736],[-0.9397,-1.342],[-0.866,-1.5],[-0.766,-1.6428],[-0.6428,-1.766],[-0.5,-1.866],[-0.342,-1.9397],[-0.1736,-1.9848],[0,-2],[0.1736,-1.9848],[0.342,-1.9397],[0.5,-1.866],[0.6428,-1.766],[0.766,-1.6428],[0.866,-1.5],[0.9397,-1.342],[0.9848,-1.1736],[1,-1],[0.9848,-0.8264],[0.9397,-0.658],[0.866,-0.5],[0.766,-0.3572],[0.6428,-0.234],[0.5,-0.134],[0.342,-0.0603],[0.1736,-0.0152],[0,0]]}]}
{{< /apfigure >}}

*(d) $r=a\sin\theta$, $a<0$.*

**Example.** Sketch the graph of $r=4\cos\theta$.

**Solution.** First, testing the equation for symmetry, we find that the graph is symmetric about the polar axis. Next, we find the zeros and maximum $\lvert r\rvert$ for $r=4\cos\theta$. First, set $r=0$ and solve for $\theta$. Thus, a zero occurs at $\theta=\tfrac{\pi}{2}\pm k\pi$. A key point to plot is $\left(0,\tfrac{\pi}{2}\right)$.

To find the maximum value of $r$, note that the maximum value of the cosine function is $1$ when $\theta=0\pm2k\pi$. Substitute $\theta=0$ into the equation:

$$
\begin{array}{lrcl}
& r &=& 4\cos\theta \\[4pt]
& r &=& 4\cos(0) \\[4pt]
& r &=& 4(1)=4
\end{array}
$$

The maximum value of the equation is $4$. A key point to plot is $(4,0)$.

As $r=4\cos\theta$ is symmetric with respect to the polar axis, we only need to calculate $r$-values for $\theta$ over the interval $[0,\pi]$. Points in the upper quadrant can then be reflected to the lower quadrant. Make a table of values similar to the one below.

| $\theta$ | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ | $\tfrac{2\pi}{3}$ | $\tfrac{3\pi}{4}$ | $\tfrac{5\pi}{6}$ | $\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $r$ | $4$ | $3.46$ | $2.83$ | $2$ | $0$ | $-2$ | $-2.83$ | $-3.46$ | $-4$ |
The graph is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of four concentric circles with the circle r equals 4 cosine theta plotted, centered on the positive polar axis, with points marked at (0,pi/2), (4,0), (2,pi/3), and (-2,2pi/3).","xMin":-4.6,"xMax":4.6,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":true,"unit":62,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"segments":[{"from":[-4.4,-0.0],"to":[4.4,0.0],"arrows":false},{"from":[-3.8105,-2.2],"to":[3.8105,2.2],"arrows":false},{"from":[-2.2,-3.8105],"to":[2.2,3.8105],"arrows":false},{"from":[-0.0,-4.4],"to":[0.0,4.4],"arrows":false},{"from":[2.2,-3.8105],"to":[-2.2,3.8105],"arrows":false},{"from":[3.8105,-2.2],"to":[-3.8105,2.2],"arrows":false}],"polylines":[{"through":[[4,0],[3.9829,0.2611],[3.9319,0.5176],[3.8478,0.7654],[3.7321,1],[3.5867,1.2175],[3.4142,1.4142],[3.2175,1.5867],[3,1.7321],[2.7654,1.8478],[2.5176,1.9319],[2.2611,1.9829],[2,2],[1.7389,1.9829],[1.4824,1.9319],[1.2346,1.8478],[1,1.7321],[0.7825,1.5867],[0.5858,1.4142],[0.4133,1.2175],[0.2679,1],[0.1522,0.7654],[0.0681,0.5176],[0.0171,0.2611],[0,0],[0.0171,-0.2611],[0.0681,-0.5176],[0.1522,-0.7654],[0.2679,-1],[0.4133,-1.2175],[0.5858,-1.4142],[0.7825,-1.5867],[1,-1.7321],[1.2346,-1.8478],[1.4824,-1.9319],[1.7389,-1.9829],[2,-2],[2.2611,-1.9829],[2.5176,-1.9319],[2.7654,-1.8478],[3,-1.7321],[3.2175,-1.5867],[3.4142,-1.4142],[3.5867,-1.2175],[3.7321,-1],[3.8478,-0.7654],[3.9319,-0.5176],[3.9829,-0.2611],[4,0],[3.9829,0.2611],[3.9319,0.5176],[3.8478,0.7654],[3.7321,1],[3.5867,1.2175],[3.4142,1.4142],[3.2175,1.5867],[3,1.7321],[2.7654,1.8478],[2.5176,1.9319],[2.2611,1.9829],[2,2],[1.7389,1.9829],[1.4824,1.9319],[1.2346,1.8478],[1,1.7321],[0.7825,1.5867],[0.5858,1.4142],[0.4133,1.2175],[0.2679,1],[0.1522,0.7654],[0.0681,0.5176],[0.0171,0.2611],[0,0],[0.0171,-0.2611],[0.0681,-0.5176],[0.1522,-0.7654],[0.2679,-1],[0.4133,-1.2175],[0.5858,-1.4142],[0.7825,-1.5867],[1,-1.7321],[1.2346,-1.8478],[1.4824,-1.9319],[1.7389,-1.9829],[2,-2],[2.2611,-1.9829],[2.5176,-1.9319],[2.7654,-1.8478],[3,-1.7321],[3.2175,-1.5867],[3.4142,-1.4142],[3.5867,-1.2175],[3.7321,-1],[3.8478,-0.7654],[3.9319,-0.5176],[3.9829,-0.2611],[4,0]]}],"points":[{"at":[0.0,0.0]},{"at":[4.0,0.0]},{"at":[1.0,1.7321]},{"at":[1.0,-1.7321]}]}
{{< /apfigure >}}


#### Investigating Cardioids

While translating from polar coordinates to Cartesian coordinates may seem simpler in some instances, graphing the classic curves is actually less complicated in the polar system. The next curve is called a **cardioid**, as it resembles a heart. This shape is often included with the family of curves called limaçons, but here we discuss the cardioid on its own.

{{< callout type="info" >}}
  **Formulas for a cardioid.** The formulas that produce the graphs of a cardioid are given by $r=a\pm b\cos\theta$ and $r=a\pm b\sin\theta$ where $a>0$, $b>0$, and $\tfrac{a}{b}=1$. The cardioid graph passes through the pole, as we can see below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A heart-shaped cardioid with its cusp at the pole, extending to the right.","xMin":-4.6,"xMax":4.6,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":false,"unit":34,"polylines":[{"through":[[4,0],[3.9872,0.2613],[3.9488,0.5199],[3.8855,0.7729],[3.7979,1.0176],[3.6872,1.2516],[3.5549,1.4725],[3.4025,1.6779],[3.2321,1.866],[3.0456,2.035],[2.8455,2.1834],[2.6342,2.3101],[2.4142,2.4142],[2.1882,2.4951],[1.9587,2.5526],[1.7285,2.5868],[1.5,2.5981],[1.2758,2.5871],[1.0583,2.5549],[0.8495,2.5026],[0.6516,2.4319],[0.4663,2.3443],[0.2951,2.2417],[0.1394,2.1262],[0,2],[-0.1223,1.8652],[-0.227,1.7241],[-0.3141,1.5789],[-0.3837,1.4319],[-0.4362,1.2851],[-0.4725,1.1407],[-0.4933,1.0004],[-0.5,0.866],[-0.4938,0.7391],[-0.4763,0.6208],[-0.4492,0.5122],[-0.4142,0.4142],[-0.3732,0.3272],[-0.3279,0.2516],[-0.2803,0.1873],[-0.2321,0.134],[-0.185,0.0912],[-0.1407,0.0583],[-0.1005,0.0341],[-0.0658,0.0176],[-0.0377,0.0075],[-0.017,0.0022],[-0.0043,0.0003],[0,0],[-0.0043,-0.0003],[-0.017,-0.0022],[-0.0377,-0.0075],[-0.0658,-0.0176],[-0.1005,-0.0341],[-0.1407,-0.0583],[-0.185,-0.0912],[-0.2321,-0.134],[-0.2803,-0.1873],[-0.3279,-0.2516],[-0.3732,-0.3272],[-0.4142,-0.4142],[-0.4492,-0.5122],[-0.4763,-0.6208],[-0.4938,-0.7391],[-0.5,-0.866],[-0.4933,-1.0004],[-0.4725,-1.1407],[-0.4362,-1.2851],[-0.3837,-1.4319],[-0.3141,-1.5789],[-0.227,-1.7241],[-0.1223,-1.8652],[0,-2],[0.1394,-2.1262],[0.2951,-2.2417],[0.4663,-2.3443],[0.6516,-2.4319],[0.8495,-2.5026],[1.0583,-2.5549],[1.2758,-2.5871],[1.5,-2.5981],[1.7285,-2.5868],[1.9587,-2.5526],[2.1882,-2.4951],[2.4142,-2.4142],[2.6342,-2.3101],[2.8455,-2.1834],[3.0456,-2.035],[3.2321,-1.866],[3.4025,-1.6779],[3.5549,-1.4725],[3.6872,-1.2516],[3.7979,-1.0176],[3.8855,-0.7729],[3.9488,-0.5199],[3.9872,-0.2613],[4,0]]}]}
{{< /apfigure >}}

*(a) $r=a+b\cos\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A heart-shaped cardioid with its cusp at the pole, extending to the left.","xMin":-4.6,"xMax":4.6,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":false,"unit":34,"polylines":[{"through":[[0,0],[0.0043,0.0003],[0.017,0.0022],[0.0377,0.0075],[0.0658,0.0176],[0.1005,0.0341],[0.1407,0.0583],[0.185,0.0912],[0.2321,0.134],[0.2803,0.1873],[0.3279,0.2516],[0.3732,0.3272],[0.4142,0.4142],[0.4492,0.5122],[0.4763,0.6208],[0.4938,0.7391],[0.5,0.866],[0.4933,1.0004],[0.4725,1.1407],[0.4362,1.2851],[0.3837,1.4319],[0.3141,1.5789],[0.227,1.7241],[0.1223,1.8652],[0,2],[-0.1394,2.1262],[-0.2951,2.2417],[-0.4663,2.3443],[-0.6516,2.4319],[-0.8495,2.5026],[-1.0583,2.5549],[-1.2758,2.5871],[-1.5,2.5981],[-1.7285,2.5868],[-1.9587,2.5526],[-2.1882,2.4951],[-2.4142,2.4142],[-2.6342,2.3101],[-2.8455,2.1834],[-3.0456,2.035],[-3.2321,1.866],[-3.4025,1.6779],[-3.5549,1.4725],[-3.6872,1.2516],[-3.7979,1.0176],[-3.8855,0.7729],[-3.9488,0.5199],[-3.9872,0.2613],[-4,0],[-3.9872,-0.2613],[-3.9488,-0.5199],[-3.8855,-0.7729],[-3.7979,-1.0176],[-3.6872,-1.2516],[-3.5549,-1.4725],[-3.4025,-1.6779],[-3.2321,-1.866],[-3.0456,-2.035],[-2.8455,-2.1834],[-2.6342,-2.3101],[-2.4142,-2.4142],[-2.1882,-2.4951],[-1.9587,-2.5526],[-1.7285,-2.5868],[-1.5,-2.5981],[-1.2758,-2.5871],[-1.0583,-2.5549],[-0.8495,-2.5026],[-0.6516,-2.4319],[-0.4663,-2.3443],[-0.2951,-2.2417],[-0.1394,-2.1262],[0,-2],[0.1223,-1.8652],[0.227,-1.7241],[0.3141,-1.5789],[0.3837,-1.4319],[0.4362,-1.2851],[0.4725,-1.1407],[0.4933,-1.0004],[0.5,-0.866],[0.4938,-0.7391],[0.4763,-0.6208],[0.4492,-0.5122],[0.4142,-0.4142],[0.3732,-0.3272],[0.3279,-0.2516],[0.2803,-0.1873],[0.2321,-0.134],[0.185,-0.0912],[0.1407,-0.0583],[0.1005,-0.0341],[0.0658,-0.0176],[0.0377,-0.0075],[0.017,-0.0022],[0.0043,-0.0003],[0,0]]}]}
{{< /apfigure >}}

*(b) $r=a-b\cos\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A heart-shaped cardioid with its cusp at the pole, extending upward.","xMin":-4.6,"xMax":4.6,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":false,"unit":34,"polylines":[{"through":[[2,0],[2.1262,0.1394],[2.2417,0.2951],[2.3443,0.4663],[2.4319,0.6516],[2.5026,0.8495],[2.5549,1.0583],[2.5871,1.2758],[2.5981,1.5],[2.5868,1.7285],[2.5526,1.9587],[2.4951,2.1882],[2.4142,2.4142],[2.3101,2.6342],[2.1834,2.8455],[2.035,3.0456],[1.866,3.2321],[1.6779,3.4025],[1.4725,3.5549],[1.2516,3.6872],[1.0176,3.7979],[0.7729,3.8855],[0.5199,3.9488],[0.2613,3.9872],[0,4],[-0.2613,3.9872],[-0.5199,3.9488],[-0.7729,3.8855],[-1.0176,3.7979],[-1.2516,3.6872],[-1.4725,3.5549],[-1.6779,3.4025],[-1.866,3.2321],[-2.035,3.0456],[-2.1834,2.8455],[-2.3101,2.6342],[-2.4142,2.4142],[-2.4951,2.1882],[-2.5526,1.9587],[-2.5868,1.7285],[-2.5981,1.5],[-2.5871,1.2758],[-2.5549,1.0583],[-2.5026,0.8495],[-2.4319,0.6516],[-2.3443,0.4663],[-2.2417,0.2951],[-2.1262,0.1394],[-2,0],[-1.8652,-0.1223],[-1.7241,-0.227],[-1.5789,-0.3141],[-1.4319,-0.3837],[-1.2851,-0.4362],[-1.1407,-0.4725],[-1.0004,-0.4933],[-0.866,-0.5],[-0.7391,-0.4938],[-0.6208,-0.4763],[-0.5122,-0.4492],[-0.4142,-0.4142],[-0.3272,-0.3732],[-0.2516,-0.3279],[-0.1873,-0.2803],[-0.134,-0.2321],[-0.0912,-0.185],[-0.0583,-0.1407],[-0.0341,-0.1005],[-0.0176,-0.0658],[-0.0075,-0.0377],[-0.0022,-0.017],[-0.0003,-0.0043],[0,0],[0.0003,-0.0043],[0.0022,-0.017],[0.0075,-0.0377],[0.0176,-0.0658],[0.0341,-0.1005],[0.0583,-0.1407],[0.0912,-0.185],[0.134,-0.2321],[0.1873,-0.2803],[0.2516,-0.3279],[0.3272,-0.3732],[0.4142,-0.4142],[0.5122,-0.4492],[0.6208,-0.4763],[0.7391,-0.4938],[0.866,-0.5],[1.0004,-0.4933],[1.1407,-0.4725],[1.2851,-0.4362],[1.4319,-0.3837],[1.5789,-0.3141],[1.7241,-0.227],[1.8652,-0.1223],[2,0]]}]}
{{< /apfigure >}}

*(c) $r=a+b\sin\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A heart-shaped cardioid with its cusp at the pole, extending downward.","xMin":-4.6,"xMax":4.6,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":false,"unit":34,"polylines":[{"through":[[2,0],[1.8652,0.1223],[1.7241,0.227],[1.5789,0.3141],[1.4319,0.3837],[1.2851,0.4362],[1.1407,0.4725],[1.0004,0.4933],[0.866,0.5],[0.7391,0.4938],[0.6208,0.4763],[0.5122,0.4492],[0.4142,0.4142],[0.3272,0.3732],[0.2516,0.3279],[0.1873,0.2803],[0.134,0.2321],[0.0912,0.185],[0.0583,0.1407],[0.0341,0.1005],[0.0176,0.0658],[0.0075,0.0377],[0.0022,0.017],[0.0003,0.0043],[0,0],[-0.0003,0.0043],[-0.0022,0.017],[-0.0075,0.0377],[-0.0176,0.0658],[-0.0341,0.1005],[-0.0583,0.1407],[-0.0912,0.185],[-0.134,0.2321],[-0.1873,0.2803],[-0.2516,0.3279],[-0.3272,0.3732],[-0.4142,0.4142],[-0.5122,0.4492],[-0.6208,0.4763],[-0.7391,0.4938],[-0.866,0.5],[-1.0004,0.4933],[-1.1407,0.4725],[-1.2851,0.4362],[-1.4319,0.3837],[-1.5789,0.3141],[-1.7241,0.227],[-1.8652,0.1223],[-2,0],[-2.1262,-0.1394],[-2.2417,-0.2951],[-2.3443,-0.4663],[-2.4319,-0.6516],[-2.5026,-0.8495],[-2.5549,-1.0583],[-2.5871,-1.2758],[-2.5981,-1.5],[-2.5868,-1.7285],[-2.5526,-1.9587],[-2.4951,-2.1882],[-2.4142,-2.4142],[-2.3101,-2.6342],[-2.1834,-2.8455],[-2.035,-3.0456],[-1.866,-3.2321],[-1.6779,-3.4025],[-1.4725,-3.5549],[-1.2516,-3.6872],[-1.0176,-3.7979],[-0.7729,-3.8855],[-0.5199,-3.9488],[-0.2613,-3.9872],[0,-4],[0.2613,-3.9872],[0.5199,-3.9488],[0.7729,-3.8855],[1.0176,-3.7979],[1.2516,-3.6872],[1.4725,-3.5549],[1.6779,-3.4025],[1.866,-3.2321],[2.035,-3.0456],[2.1834,-2.8455],[2.3101,-2.6342],[2.4142,-2.4142],[2.4951,-2.1882],[2.5526,-1.9587],[2.5868,-1.7285],[2.5981,-1.5],[2.5871,-1.2758],[2.5549,-1.0583],[2.5026,-0.8495],[2.4319,-0.6516],[2.3443,-0.4663],[2.2417,-0.2951],[2.1262,-0.1394],[2,0]]}]}
{{< /apfigure >}}

*(d) $r=a-b\sin\theta$.*

{{< callout type="info" >}}
  **How to:** given the polar equation of a cardioid, sketch its graph.

  1. Check the equation for the three types of symmetry.
  2. Find the zeros. Set $r=0$.
  3. Find the maximum value of the equation according to the maximum value of the trigonometric expression.
  4. Make a table of values for $r$ and $\theta$.
  5. Plot the points and sketch the graph.
{{< /callout >}}

**Example.** Sketch the graph of $r=2+2\cos\theta$.

**Solution.** First, testing the equation for symmetry, we find that the graph of this equation is symmetric about the polar axis. Next, we find the zeros and maximums. Setting $r=0$, we have $\theta=\pi+2k\pi$. The zero of the equation is located at $(0,\pi)$. The graph passes through this point.

The maximum value of $r=2+2\cos\theta$ occurs when $\cos\theta$ is a maximum, which is when $\cos\theta=1$ or when $\theta=0$. Substitute $\theta=0$ into the equation, and solve for $r$.

$$
\begin{array}{lrcl}
& r &=& 2+2\cos(0) \\[4pt]
& r &=& 2+2(1)=4
\end{array}
$$

The point $(4,0)$ is the maximum value on the graph.

We found that the polar equation is symmetric with respect to the polar axis, but as it extends to all four quadrants, we need to plot values over the interval $[0,\pi]$. The upper portion of the graph is then reflected over the polar axis. Next, we make a table of values, and then we plot the points and draw the graph.

| $\theta$ | $0$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{2}$ | $\tfrac{2\pi}{3}$ | $\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $r$ | $4$ | $3.41$ | $2$ | $1$ | $0$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of four concentric circles with the cardioid r equals 2 plus 2 cosine theta plotted, cusp at the pole opening toward the polar axis, with points marked at (0,pi), (4,0), (3.41,pi/4), (2,pi/2), and (1,2pi/3).","xMin":-4.6,"xMax":4.6,"yMin":-4.6,"yMax":4.6,"grid":false,"tickLabels":true,"unit":62,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4}],"segments":[{"from":[-4.4,-0.0],"to":[4.4,0.0],"arrows":false},{"from":[-3.8105,-2.2],"to":[3.8105,2.2],"arrows":false},{"from":[-2.2,-3.8105],"to":[2.2,3.8105],"arrows":false},{"from":[-0.0,-4.4],"to":[0.0,4.4],"arrows":false},{"from":[2.2,-3.8105],"to":[-2.2,3.8105],"arrows":false},{"from":[3.8105,-2.2],"to":[-3.8105,2.2],"arrows":false}],"polylines":[{"through":[[4,0],[3.9902,0.2282],[3.961,0.4545],[3.9126,0.6771],[3.8454,0.8942],[3.7602,1.1041],[3.6578,1.3051],[3.5392,1.4957],[3.4054,1.6743],[3.2579,1.8398],[3.0979,1.9909],[2.9271,2.1266],[2.7469,2.2461],[2.5591,2.3487],[2.3653,2.4339],[2.1674,2.5013],[1.9671,2.551],[1.7661,2.5828],[1.5661,2.5971],[1.3689,2.5943],[1.176,2.575],[0.9889,2.5399],[0.809,2.4899],[0.6377,2.426],[0.4761,2.3494],[0.3251,2.2614],[0.1858,2.1632],[0.0587,2.0563],[-0.0555,1.9421],[-0.1565,1.8221],[-0.2441,1.6979],[-0.3183,1.5709],[-0.3792,1.4426],[-0.4271,1.3143],[-0.4624,1.1876],[-0.4857,1.0635],[-0.4978,0.9434],[-0.4995,0.8283],[-0.4917,0.7191],[-0.4755,0.6167],[-0.452,0.5217],[-0.4224,0.4347],[-0.3879,0.356],[-0.3497,0.2859],[-0.309,0.2245],[-0.2671,0.1716],[-0.2251,0.1271],[-0.1841,0.0905],[-0.1453,0.0614],[-0.1095,0.0391],[-0.0777,0.0228],[-0.0506,0.0118],[-0.0289,0.005],[-0.013,0.0015],[-0.0033,0.0002],[0,0],[-0.0033,-0.0002],[-0.013,-0.0015],[-0.0289,-0.005],[-0.0506,-0.0118],[-0.0777,-0.0228],[-0.1095,-0.0391],[-0.1453,-0.0614],[-0.1841,-0.0905],[-0.2251,-0.1271],[-0.2671,-0.1716],[-0.309,-0.2245],[-0.3497,-0.2859],[-0.3879,-0.356],[-0.4224,-0.4347],[-0.452,-0.5217],[-0.4755,-0.6167],[-0.4917,-0.7191],[-0.4995,-0.8283],[-0.4978,-0.9434],[-0.4857,-1.0635],[-0.4624,-1.1876],[-0.4271,-1.3143],[-0.3792,-1.4426],[-0.3183,-1.5709],[-0.2441,-1.6979],[-0.1565,-1.8221],[-0.0555,-1.9421],[0.0587,-2.0563],[0.1858,-2.1632],[0.3251,-2.2614],[0.4761,-2.3494],[0.6377,-2.426],[0.809,-2.4899],[0.9889,-2.5399],[1.176,-2.575],[1.3689,-2.5943],[1.5661,-2.5971],[1.7661,-2.5828],[1.9671,-2.551],[2.1674,-2.5013],[2.3653,-2.4339],[2.5591,-2.3487],[2.7469,-2.2461],[2.9271,-2.1266],[3.0979,-1.9909],[3.2579,-1.8398],[3.4054,-1.6743],[3.5392,-1.4957],[3.6578,-1.3051],[3.7602,-1.1041],[3.8454,-0.8942],[3.9126,-0.6771],[3.961,-0.4545],[3.9902,-0.2282],[4,0]]}],"points":[{"at":[-0.0,0.0]},{"at":[4.0,0.0]},{"at":[2.4142,2.4142]},{"at":[0.0,2.0]},{"at":[-0.5,0.866]}]}
{{< /apfigure >}}


#### Investigating Limaçons

The word **limaçon** is Old French for “snail,” a name that describes the shape of the graph. As mentioned earlier, the cardioid is a member of the limaçon family, and we can see the similarities in the graphs. The other images in this category include the one-loop limaçon and the two-loop (or inner-loop) limaçon. **One-loop limaçons** are sometimes referred to as **dimpled limaçons** when $1<\tfrac{a}{b}<2$ and **convex limaçons** when $\tfrac{a}{b}\ge2$.

{{< callout type="info" >}}
  **Formulas for one-loop limaçons.** The formulas that produce the graph of a dimpled one-loop limaçon are given by $r=a\pm b\cos\theta$ and $r=a\pm b\sin\theta$ where $a>0$, $b>0$, and $1<\tfrac{a}{b}<2$. All four graphs are shown below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A one-loop limacon with a shallow dimple near the pole, extending to the right.","xMin":-5.6,"xMax":5.6,"yMin":-5.6,"yMax":5.6,"grid":false,"tickLabels":false,"unit":28,"polylines":[{"through":[[5,0],[4.985,0.3267],[4.9403,0.6504],[4.8662,0.968],[4.7638,1.2765],[4.6341,1.5731],[4.4787,1.8552],[4.2994,2.1202],[4.0981,2.366],[3.8771,2.5906],[3.6389,2.7922],[3.386,2.9695],[3.1213,3.1213],[2.8475,3.247],[2.5675,3.346],[2.284,3.4183],[2,3.4641],[1.7181,3.484],[1.4409,3.4787],[1.171,3.4496],[0.9104,3.3978],[0.6614,3.325],[0.4257,3.2332],[0.2048,3.1241],[0,3],[-0.1877,2.8631],[-0.3575,2.7155],[-0.5092,2.5597],[-0.6425,2.3978],[-0.7577,2.232],[-0.8552,2.0645],[-0.9356,1.8973],[-1,1.7321],[-1.0494,1.5705],[-1.0851,1.4141],[-1.1086,1.2641],[-1.1213,1.1213],[-1.125,0.9866],[-1.1212,0.8604],[-1.1117,0.7428],[-1.0981,0.634],[-1.0819,0.5335],[-1.0645,0.4409],[-1.0474,0.3556],[-1.0318,0.2765],[-1.0185,0.2026],[-1.0084,0.1328],[-1.0021,0.0657],[-1,0],[-1.0021,-0.0657],[-1.0084,-0.1328],[-1.0185,-0.2026],[-1.0318,-0.2765],[-1.0474,-0.3556],[-1.0645,-0.4409],[-1.0819,-0.5335],[-1.0981,-0.634],[-1.1117,-0.7428],[-1.1212,-0.8604],[-1.125,-0.9866],[-1.1213,-1.1213],[-1.1086,-1.2641],[-1.0851,-1.4141],[-1.0494,-1.5705],[-1,-1.7321],[-0.9356,-1.8973],[-0.8552,-2.0645],[-0.7577,-2.232],[-0.6425,-2.3978],[-0.5092,-2.5597],[-0.3575,-2.7155],[-0.1877,-2.8631],[0,-3],[0.2048,-3.1241],[0.4257,-3.2332],[0.6614,-3.325],[0.9104,-3.3978],[1.171,-3.4496],[1.4409,-3.4787],[1.7181,-3.484],[2,-3.4641],[2.284,-3.4183],[2.5675,-3.346],[2.8475,-3.247],[3.1213,-3.1213],[3.386,-2.9695],[3.6389,-2.7922],[3.8771,-2.5906],[4.0981,-2.366],[4.2994,-2.1202],[4.4787,-1.8552],[4.6341,-1.5731],[4.7638,-1.2765],[4.8662,-0.968],[4.9403,-0.6504],[4.985,-0.3267],[5,0]]}]}
{{< /apfigure >}}

*(a) $r=a+b\cos\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A one-loop limacon with a shallow dimple near the pole, extending to the left.","xMin":-5.6,"xMax":5.6,"yMin":-5.6,"yMax":5.6,"grid":false,"tickLabels":false,"unit":28,"polylines":[{"through":[[1,0],[1.0021,0.0657],[1.0084,0.1328],[1.0185,0.2026],[1.0318,0.2765],[1.0474,0.3556],[1.0645,0.4409],[1.0819,0.5335],[1.0981,0.634],[1.1117,0.7428],[1.1212,0.8604],[1.125,0.9866],[1.1213,1.1213],[1.1086,1.2641],[1.0851,1.4141],[1.0494,1.5705],[1,1.7321],[0.9356,1.8973],[0.8552,2.0645],[0.7577,2.232],[0.6425,2.3978],[0.5092,2.5597],[0.3575,2.7155],[0.1877,2.8631],[0,3],[-0.2048,3.1241],[-0.4257,3.2332],[-0.6614,3.325],[-0.9104,3.3978],[-1.171,3.4496],[-1.4409,3.4787],[-1.7181,3.484],[-2,3.4641],[-2.284,3.4183],[-2.5675,3.346],[-2.8475,3.247],[-3.1213,3.1213],[-3.386,2.9695],[-3.6389,2.7922],[-3.8771,2.5906],[-4.0981,2.366],[-4.2994,2.1202],[-4.4787,1.8552],[-4.6341,1.5731],[-4.7638,1.2765],[-4.8662,0.968],[-4.9403,0.6504],[-4.985,0.3267],[-5,0],[-4.985,-0.3267],[-4.9403,-0.6504],[-4.8662,-0.968],[-4.7638,-1.2765],[-4.6341,-1.5731],[-4.4787,-1.8552],[-4.2994,-2.1202],[-4.0981,-2.366],[-3.8771,-2.5906],[-3.6389,-2.7922],[-3.386,-2.9695],[-3.1213,-3.1213],[-2.8475,-3.247],[-2.5675,-3.346],[-2.284,-3.4183],[-2,-3.4641],[-1.7181,-3.484],[-1.4409,-3.4787],[-1.171,-3.4496],[-0.9104,-3.3978],[-0.6614,-3.325],[-0.4257,-3.2332],[-0.2048,-3.1241],[0,-3],[0.1877,-2.8631],[0.3575,-2.7155],[0.5092,-2.5597],[0.6425,-2.3978],[0.7577,-2.232],[0.8552,-2.0645],[0.9356,-1.8973],[1,-1.7321],[1.0494,-1.5705],[1.0851,-1.4141],[1.1086,-1.2641],[1.1213,-1.1213],[1.125,-0.9866],[1.1212,-0.8604],[1.1117,-0.7428],[1.0981,-0.634],[1.0819,-0.5335],[1.0645,-0.4409],[1.0474,-0.3556],[1.0318,-0.2765],[1.0185,-0.2026],[1.0084,-0.1328],[1.0021,-0.0657],[1,0]]}]}
{{< /apfigure >}}

*(b) $r=a-b\cos\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A one-loop limacon with a shallow dimple near the pole, extending upward.","xMin":-5.6,"xMax":5.6,"yMin":-5.6,"yMax":5.6,"grid":false,"tickLabels":false,"unit":28,"polylines":[{"through":[[3,0],[3.1241,0.2048],[3.2332,0.4257],[3.325,0.6614],[3.3978,0.9104],[3.4496,1.171],[3.4787,1.4409],[3.484,1.7181],[3.4641,2],[3.4183,2.284],[3.346,2.5675],[3.247,2.8475],[3.1213,3.1213],[2.9695,3.386],[2.7922,3.6389],[2.5906,3.8771],[2.366,4.0981],[2.1202,4.2994],[1.8552,4.4787],[1.5731,4.6341],[1.2765,4.7638],[0.968,4.8662],[0.6504,4.9403],[0.3267,4.985],[0,5],[-0.3267,4.985],[-0.6504,4.9403],[-0.968,4.8662],[-1.2765,4.7638],[-1.5731,4.6341],[-1.8552,4.4787],[-2.1202,4.2994],[-2.366,4.0981],[-2.5906,3.8771],[-2.7922,3.6389],[-2.9695,3.386],[-3.1213,3.1213],[-3.247,2.8475],[-3.346,2.5675],[-3.4183,2.284],[-3.4641,2],[-3.484,1.7181],[-3.4787,1.4409],[-3.4496,1.171],[-3.3978,0.9104],[-3.325,0.6614],[-3.2332,0.4257],[-3.1241,0.2048],[-3,0],[-2.8631,-0.1877],[-2.7155,-0.3575],[-2.5597,-0.5092],[-2.3978,-0.6425],[-2.232,-0.7577],[-2.0645,-0.8552],[-1.8973,-0.9356],[-1.7321,-1],[-1.5705,-1.0494],[-1.4141,-1.0851],[-1.2641,-1.1086],[-1.1213,-1.1213],[-0.9866,-1.125],[-0.8604,-1.1212],[-0.7428,-1.1117],[-0.634,-1.0981],[-0.5335,-1.0819],[-0.4409,-1.0645],[-0.3556,-1.0474],[-0.2765,-1.0318],[-0.2026,-1.0185],[-0.1328,-1.0084],[-0.0657,-1.0021],[0,-1],[0.0657,-1.0021],[0.1328,-1.0084],[0.2026,-1.0185],[0.2765,-1.0318],[0.3556,-1.0474],[0.4409,-1.0645],[0.5335,-1.0819],[0.634,-1.0981],[0.7428,-1.1117],[0.8604,-1.1212],[0.9866,-1.125],[1.1213,-1.1213],[1.2641,-1.1086],[1.4141,-1.0851],[1.5705,-1.0494],[1.7321,-1],[1.8973,-0.9356],[2.0645,-0.8552],[2.232,-0.7577],[2.3978,-0.6425],[2.5597,-0.5092],[2.7155,-0.3575],[2.8631,-0.1877],[3,0]]}]}
{{< /apfigure >}}

*(c) $r=a+b\sin\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A one-loop limacon with a shallow dimple near the pole, extending downward.","xMin":-5.6,"xMax":5.6,"yMin":-5.6,"yMax":5.6,"grid":false,"tickLabels":false,"unit":28,"polylines":[{"through":[[3,0],[2.8631,0.1877],[2.7155,0.3575],[2.5597,0.5092],[2.3978,0.6425],[2.232,0.7577],[2.0645,0.8552],[1.8973,0.9356],[1.7321,1],[1.5705,1.0494],[1.4141,1.0851],[1.2641,1.1086],[1.1213,1.1213],[0.9866,1.125],[0.8604,1.1212],[0.7428,1.1117],[0.634,1.0981],[0.5335,1.0819],[0.4409,1.0645],[0.3556,1.0474],[0.2765,1.0318],[0.2026,1.0185],[0.1328,1.0084],[0.0657,1.0021],[0,1],[-0.0657,1.0021],[-0.1328,1.0084],[-0.2026,1.0185],[-0.2765,1.0318],[-0.3556,1.0474],[-0.4409,1.0645],[-0.5335,1.0819],[-0.634,1.0981],[-0.7428,1.1117],[-0.8604,1.1212],[-0.9866,1.125],[-1.1213,1.1213],[-1.2641,1.1086],[-1.4141,1.0851],[-1.5705,1.0494],[-1.7321,1],[-1.8973,0.9356],[-2.0645,0.8552],[-2.232,0.7577],[-2.3978,0.6425],[-2.5597,0.5092],[-2.7155,0.3575],[-2.8631,0.1877],[-3,0],[-3.1241,-0.2048],[-3.2332,-0.4257],[-3.325,-0.6614],[-3.3978,-0.9104],[-3.4496,-1.171],[-3.4787,-1.4409],[-3.484,-1.7181],[-3.4641,-2],[-3.4183,-2.284],[-3.346,-2.5675],[-3.247,-2.8475],[-3.1213,-3.1213],[-2.9695,-3.386],[-2.7922,-3.6389],[-2.5906,-3.8771],[-2.366,-4.0981],[-2.1202,-4.2994],[-1.8552,-4.4787],[-1.5731,-4.6341],[-1.2765,-4.7638],[-0.968,-4.8662],[-0.6504,-4.9403],[-0.3267,-4.985],[0,-5],[0.3267,-4.985],[0.6504,-4.9403],[0.968,-4.8662],[1.2765,-4.7638],[1.5731,-4.6341],[1.8552,-4.4787],[2.1202,-4.2994],[2.366,-4.0981],[2.5906,-3.8771],[2.7922,-3.6389],[2.9695,-3.386],[3.1213,-3.1213],[3.247,-2.8475],[3.346,-2.5675],[3.4183,-2.284],[3.4641,-2],[3.484,-1.7181],[3.4787,-1.4409],[3.4496,-1.171],[3.3978,-0.9104],[3.325,-0.6614],[3.2332,-0.4257],[3.1241,-0.2048],[3,0]]}]}
{{< /apfigure >}}

*(d) $r=a-b\sin\theta$.*

{{< callout type="info" >}}
  **How to:** given a polar equation for a one-loop limaçon, sketch the graph.

  1. Test the equation for symmetry. Remember that failing a symmetry test does not mean that the shape will not exhibit symmetry. Often the symmetry may reveal itself when the points are plotted.
  2. Find the zeros.
  3. Find the maximum values according to the trigonometric expression.
  4. Make a table.
  5. Plot the points and sketch the graph.
{{< /callout >}}

**Example.** Graph the equation $r=4-3\sin\theta$.

**Solution.** First, testing the equation for symmetry, we find that it fails all three symmetry tests, meaning that the graph may or may not exhibit symmetry, so we cannot use symmetry to help us graph it. However, this equation has a graph that clearly displays symmetry with respect to the line $\theta=\tfrac{\pi}{2}$, yet it fails all three symmetry tests. A graphing calculator immediately illustrates the graph’s reflective quality.

Next, we find the zeros and maximum, and plot the reflecting points to verify any symmetry. Setting $r=0$ results in $\theta$ being undefined. What does this mean? How could $\theta$ be undefined? The angle $\theta$ is undefined for any value of $\sin\theta>1$. Therefore, $\theta$ is undefined because there is no value of $\theta$ for which $\sin\theta>1$. Consequently, the graph does not pass through the pole. Perhaps the graph does cross the polar axis, but not at the pole. We can investigate other intercepts by calculating $r$ when $\theta=0$.

$$
\begin{array}{lrcl}
& r(0) &=& 4-3\sin(0) \\[4pt]
& r &=& 4-3\cdot0=4
\end{array}
$$

So, there is at least one polar axis intercept at $(4,0)$.

Next, as the maximum value of the sine function is $1$ when $\theta=\tfrac{\pi}{2}$, we substitute $\theta=\tfrac{\pi}{2}$ into the equation and solve for $r$. Thus, $r=1$.

Make a table of the coordinates similar to the one below.

| $\theta$ | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ | $\tfrac{2\pi}{3}$ | $\tfrac{5\pi}{6}$ | $\pi$ | $\tfrac{7\pi}{6}$ | $\tfrac{4\pi}{3}$ | $\tfrac{3\pi}{2}$ | $\tfrac{5\pi}{3}$ | $\tfrac{11\pi}{6}$ | $2\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $r$ | $4$ | $2.5$ | $1.4$ | $1$ | $1.4$ | $2.5$ | $4$ | $5.5$ | $6.6$ | $7$ | $6.6$ | $5.5$ | $4$ |
The graph is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of seven concentric circles with the one-loop limacon r equals 4 minus 3 sine theta plotted, dimpled near the top and bulging toward the bottom, with points marked at (1,pi/2), (4,pi), (4,0), and (7,3pi/2).","xMin":-7.6,"xMax":7.6,"yMin":-7.6,"yMax":7.6,"grid":false,"tickLabels":false,"unit":40,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5},{"at":[0,0],"r":6},{"at":[0,0],"r":7}],"segments":[{"from":[-7.4,-0.0],"to":[7.4,0.0],"arrows":false},{"from":[-6.4086,-3.7],"to":[6.4086,3.7],"arrows":false},{"from":[-3.7,-6.4086],"to":[3.7,6.4086],"arrows":false},{"from":[-0.0,-7.4],"to":[0.0,7.4],"arrows":false},{"from":[3.7,-6.4086],"to":[-3.7,6.4086],"arrows":false},{"from":[6.4086,-3.7],"to":[-6.4086,3.7],"arrows":false}],"polylines":[{"through":[[4,0],[3.8506,0.1863],[3.6931,0.3581],[3.5291,0.5153],[3.3598,0.6578],[3.1867,0.7854],[3.011,0.8985],[2.834,0.9971],[2.6569,1.0818],[2.481,1.1529],[2.3073,1.211],[2.1369,1.2568],[1.9707,1.2911],[1.8095,1.3147],[1.654,1.3284],[1.505,1.3333],[1.3628,1.3303],[1.228,1.3204],[1.1008,1.3047],[0.9813,1.2842],[0.8697,1.26],[0.7659,1.2331],[0.6697,1.2044],[0.5809,1.175],[0.4991,1.1456],[0.4237,1.1173],[0.3544,1.0907],[0.2904,1.0665],[0.231,1.0455],[0.1756,1.0279],[0.1232,1.0144],[0.073,1.0052],[0.0242,1.0006],[-0.0242,1.0006],[-0.073,1.0052],[-0.1232,1.0144],[-0.1756,1.0279],[-0.231,1.0455],[-0.2904,1.0665],[-0.3544,1.0907],[-0.4237,1.1173],[-0.4991,1.1456],[-0.5809,1.175],[-0.6697,1.2044],[-0.7659,1.2331],[-0.8697,1.26],[-0.9813,1.2842],[-1.1008,1.3047],[-1.228,1.3204],[-1.3628,1.3303],[-1.505,1.3333],[-1.654,1.3284],[-1.8095,1.3147],[-1.9707,1.2911],[-2.1369,1.2568],[-2.3073,1.211],[-2.481,1.1529],[-2.6569,1.0818],[-2.834,0.9971],[-3.011,0.8985],[-3.1867,0.7854],[-3.3598,0.6578],[-3.5291,0.5153],[-3.6931,0.3581],[-3.8506,0.1863],[-4,0],[-4.1401,-0.2003],[-4.2695,-0.414],[-4.3869,-0.6406],[-4.4911,-0.8792],[-4.5809,-1.1291],[-4.655,-1.3891],[-4.7125,-1.6581],[-4.7525,-1.935],[-4.774,-2.2183],[-4.7763,-2.5068],[-4.7588,-2.7989],[-4.7211,-3.093],[-4.6627,-3.3876],[-4.5834,-3.6811],[-4.4831,-3.9717],[-4.362,-4.2578],[-4.2201,-4.5377],[-4.058,-4.8098],[-3.876,-5.0724],[-3.6748,-5.3238],[-3.4552,-5.5627],[-3.2181,-5.7873],[-2.9646,-5.9965],[-2.6959,-6.1887],[-2.4131,-6.3628],[-2.1177,-6.5178],[-1.8113,-6.6525],[-1.4952,-6.7661],[-1.1713,-6.8579],[-0.8411,-6.9272],[-0.5065,-6.9738],[-0.1691,-6.9971],[0.1691,-6.9971],[0.5065,-6.9738],[0.8411,-6.9272],[1.1713,-6.8579],[1.4952,-6.7661],[1.8113,-6.6525],[2.1177,-6.5178],[2.4131,-6.3628],[2.6959,-6.1887],[2.9646,-5.9965],[3.2181,-5.7873],[3.4552,-5.5627],[3.6748,-5.3238],[3.876,-5.0724],[4.058,-4.8098],[4.2201,-4.5377],[4.362,-4.2578],[4.4831,-3.9717],[4.5834,-3.6811],[4.6627,-3.3876],[4.7211,-3.093],[4.7588,-2.7989],[4.7763,-2.5068],[4.774,-2.2183],[4.7525,-1.935],[4.7125,-1.6581],[4.655,-1.3891],[4.5809,-1.1291],[4.4911,-0.8792],[4.3869,-0.6406],[4.2695,-0.414],[4.1401,-0.2003],[4,0]]}],"points":[{"at":[0.0,1.0]},{"at":[-4.0,0.0]},{"at":[4.0,0.0]},{"at":[-0.0,-7.0]}]}
{{< /apfigure >}}


**Analysis.** This is an example of a curve for which making a table of values is critical to producing an accurate graph. The symmetry tests fail; the zero is undefined. While it may be apparent that an equation involving $\sin\theta$ is likely symmetric with respect to the line $\theta=\tfrac{\pi}{2}$, evaluating more points helps to verify that the graph is correct.

{{< fillin
  question="Find the maximum value of $\lvert r\rvert$ for the one-loop limaçon $r=3-2\cos\theta$, and the value of $\theta$ with $0\le\theta<2\pi$ at which it occurs. Enter your answer as an ordered pair $(r,\theta)$."
  answer="(5,\pi)"
  answerForm="radians"
  answerDisplay="$(5,\pi)$"
  hint="Cosine is smallest, $-1$, when $\theta=\pi$."
>}}

{{< multiplechoice
  question="Which type of curve is $r=3-2\cos\theta$?"
  answer="one-loop limaçon"
  hint="Here $a=3$ and $b=2$, so $1<\tfrac{a}{b}<2$."
>}}
cardioid
one-loop limaçon
lemniscate
inner-loop limaçon
{{< /multiplechoice >}}

Another type of limaçon, the **inner-loop limaçon**, is named for the loop formed inside the general limaçon shape. It was discovered by the German artist Albrecht Dürer (1471–1528), who revealed a method for drawing the inner-loop limaçon in his 1525 book *Underweysung der Messing*. A century later, the father of mathematician Blaise Pascal, Étienne Pascal (1588–1651), rediscovered it.

{{< callout type="info" >}}
  **Formulas for inner-loop limaçons.** The formulas that generate the inner-loop limaçons are given by $r=a\pm b\cos\theta$ and $r=a\pm b\sin\theta$ where $a>0$, $b>0$, and $a<b$. The graph of the inner-loop limaçon passes through the pole twice: once for the outer loop, and once for the inner loop. See the graphs below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An inner-loop limacon with a small loop inside a larger loop, both crossing the pole, extending to the right.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[3,0],[2.9919,0.1711],[2.9675,0.3405],[2.9272,0.5066],[2.8714,0.6677],[2.8007,0.8224],[2.716,0.9691],[2.6181,1.1064],[2.508,1.2331],[2.3871,1.3481],[2.2567,1.4503],[2.118,1.5388],[1.9727,1.6131],[1.8223,1.6725],[1.6684,1.7167],[1.5125,1.7456],[1.3564,1.759],[1.2016,1.7573],[1.0497,1.7408],[0.9022,1.7099],[0.7606,1.6654],[0.6261,1.608],[0.5,1.5388],[0.3835,1.4589],[0.2775,1.3694],[0.1828,1.2716],[0.1002,1.1669],[0.0302,1.0567],[-0.0269,0.9425],[-0.0709,0.8258],[-0.1018,0.7081],[-0.1197,0.5908],[-0.125,0.4754],[-0.118,0.3633],[-0.0995,0.2557],[-0.0703,0.1539],[-0.0311,0.059],[0.0169,-0.0281],[0.0727,-0.1064],[0.1351,-0.1752],[0.2028,-0.2341],[0.2745,-0.2825],[0.3488,-0.3202],[0.4244,-0.3471],[0.5,-0.3633],[0.5742,-0.369],[0.6457,-0.3646],[0.7132,-0.3507],[0.7758,-0.3279],[0.8323,-0.297],[0.8818,-0.2589],[0.9234,-0.2147],[0.9565,-0.1655],[0.9805,-0.1125],[0.9951,-0.0569],[1,0],[0.9951,0.0569],[0.9805,0.1125],[0.9565,0.1655],[0.9234,0.2147],[0.8818,0.2589],[0.8323,0.297],[0.7758,0.3279],[0.7132,0.3507],[0.6457,0.3646],[0.5742,0.369],[0.5,0.3633],[0.4244,0.3471],[0.3488,0.3202],[0.2745,0.2825],[0.2028,0.2341],[0.1351,0.1752],[0.0727,0.1064],[0.0169,0.0281],[-0.0311,-0.059],[-0.0703,-0.1539],[-0.0995,-0.2557],[-0.118,-0.3633],[-0.125,-0.4754],[-0.1197,-0.5908],[-0.1018,-0.7081],[-0.0709,-0.8258],[-0.0269,-0.9425],[0.0302,-1.0567],[0.1002,-1.1669],[0.1828,-1.2716],[0.2775,-1.3694],[0.3835,-1.4589],[0.5,-1.5388],[0.6261,-1.608],[0.7606,-1.6654],[0.9022,-1.7099],[1.0497,-1.7408],[1.2016,-1.7573],[1.3564,-1.759],[1.5125,-1.7456],[1.6684,-1.7167],[1.8223,-1.6725],[1.9727,-1.6131],[2.118,-1.5388],[2.2567,-1.4503],[2.3871,-1.3481],[2.508,-1.2331],[2.6181,-1.1064],[2.716,-0.9691],[2.8007,-0.8224],[2.8714,-0.6677],[2.9272,-0.5066],[2.9675,-0.3405],[2.9919,-0.1711],[3,0]]}]}
{{< /apfigure >}}

*(a) $r=a+b\cos\theta$, $a<b$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"An inner-loop limacon with a small loop inside a larger loop, both crossing the pole, extending to the left.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[-1,0],[-0.9951,-0.0569],[-0.9805,-0.1125],[-0.9565,-0.1655],[-0.9234,-0.2147],[-0.8818,-0.2589],[-0.8323,-0.297],[-0.7758,-0.3279],[-0.7132,-0.3507],[-0.6457,-0.3646],[-0.5742,-0.369],[-0.5,-0.3633],[-0.4244,-0.3471],[-0.3488,-0.3202],[-0.2745,-0.2825],[-0.2028,-0.2341],[-0.1351,-0.1752],[-0.0727,-0.1064],[-0.0169,-0.0281],[0.0311,0.059],[0.0703,0.1539],[0.0995,0.2557],[0.118,0.3633],[0.125,0.4754],[0.1197,0.5908],[0.1018,0.7081],[0.0709,0.8258],[0.0269,0.9425],[-0.0302,1.0567],[-0.1002,1.1669],[-0.1828,1.2716],[-0.2775,1.3694],[-0.3835,1.4589],[-0.5,1.5388],[-0.6261,1.608],[-0.7606,1.6654],[-0.9022,1.7099],[-1.0497,1.7408],[-1.2016,1.7573],[-1.3564,1.759],[-1.5125,1.7456],[-1.6684,1.7167],[-1.8223,1.6725],[-1.9727,1.6131],[-2.118,1.5388],[-2.2567,1.4503],[-2.3871,1.3481],[-2.508,1.2331],[-2.6181,1.1064],[-2.716,0.9691],[-2.8007,0.8224],[-2.8714,0.6677],[-2.9272,0.5066],[-2.9675,0.3405],[-2.9919,0.1711],[-3,0],[-2.9919,-0.1711],[-2.9675,-0.3405],[-2.9272,-0.5066],[-2.8714,-0.6677],[-2.8007,-0.8224],[-2.716,-0.9691],[-2.6181,-1.1064],[-2.508,-1.2331],[-2.3871,-1.3481],[-2.2567,-1.4503],[-2.118,-1.5388],[-1.9727,-1.6131],[-1.8223,-1.6725],[-1.6684,-1.7167],[-1.5125,-1.7456],[-1.3564,-1.759],[-1.2016,-1.7573],[-1.0497,-1.7408],[-0.9022,-1.7099],[-0.7606,-1.6654],[-0.6261,-1.608],[-0.5,-1.5388],[-0.3835,-1.4589],[-0.2775,-1.3694],[-0.1828,-1.2716],[-0.1002,-1.1669],[-0.0302,-1.0567],[0.0269,-0.9425],[0.0709,-0.8258],[0.1018,-0.7081],[0.1197,-0.5908],[0.125,-0.4754],[0.118,-0.3633],[0.0995,-0.2557],[0.0703,-0.1539],[0.0311,-0.059],[-0.0169,0.0281],[-0.0727,0.1064],[-0.1351,0.1752],[-0.2028,0.2341],[-0.2745,0.2825],[-0.3488,0.3202],[-0.4244,0.3471],[-0.5,0.3633],[-0.5742,0.369],[-0.6457,0.3646],[-0.7132,0.3507],[-0.7758,0.3279],[-0.8323,0.297],[-0.8818,0.2589],[-0.9234,0.2147],[-0.9565,0.1655],[-0.9805,0.1125],[-0.9951,0.0569],[-1,0]]}]}
{{< /apfigure >}}

*(b) $r=a-b\cos\theta$, $a<b$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"An inner-loop limacon with a small loop inside a larger loop, both crossing the pole, extending upward.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[1,0],[1.1124,0.0636],[1.22,0.14],[1.3214,0.2287],[1.4152,0.3291],[1.5001,0.4405],[1.5749,0.5619],[1.6383,0.6923],[1.6893,0.8306],[1.7271,0.9753],[1.7509,1.1252],[1.7601,1.2788],[1.7542,1.4344],[1.7331,1.5906],[1.6965,1.7457],[1.6447,1.8981],[1.5778,2.0461],[1.4963,2.1883],[1.4008,2.323],[1.2921,2.4489],[1.1712,2.5645],[1.039,2.6686],[0.8968,2.7601],[0.746,2.8379],[0.5879,2.9012],[0.424,2.9493],[0.2561,2.9817],[0.0856,2.998],[-0.0856,2.998],[-0.2561,2.9817],[-0.424,2.9493],[-0.5879,2.9012],[-0.746,2.8379],[-0.8968,2.7601],[-1.039,2.6686],[-1.1712,2.5645],[-1.2921,2.4489],[-1.4008,2.323],[-1.4963,2.1883],[-1.5778,2.0461],[-1.6447,1.8981],[-1.6965,1.7457],[-1.7331,1.5906],[-1.7542,1.4344],[-1.7601,1.2788],[-1.7509,1.1252],[-1.7271,0.9753],[-1.6893,0.8306],[-1.6383,0.6923],[-1.5749,0.5619],[-1.5001,0.4405],[-1.4152,0.3291],[-1.3214,0.2287],[-1.22,0.14],[-1.1124,0.0636],[-1,0],[-0.8844,-0.0506],[-0.767,-0.088],[-0.6493,-0.1124],[-0.5328,-0.1239],[-0.4189,-0.123],[-0.3088,-0.1102],[-0.204,-0.0862],[-0.1055,-0.0519],[-0.0144,-0.0081],[0.0684,0.0439],[0.142,0.1032],[0.2059,0.1684],[0.2596,0.2383],[0.3027,0.3114],[0.335,0.3866],[0.3565,0.4623],[0.3674,0.5373],[0.368,0.6103],[0.3588,0.68],[0.3403,0.7452],[0.3134,0.8049],[0.2788,0.858],[0.2375,0.9036],[0.1907,0.941],[0.1394,0.9697],[0.0849,0.989],[0.0285,0.9988],[-0.0285,0.9988],[-0.0849,0.989],[-0.1394,0.9697],[-0.1907,0.941],[-0.2375,0.9036],[-0.2788,0.858],[-0.3134,0.8049],[-0.3403,0.7452],[-0.3588,0.68],[-0.368,0.6103],[-0.3674,0.5373],[-0.3565,0.4623],[-0.335,0.3866],[-0.3027,0.3114],[-0.2596,0.2383],[-0.2059,0.1684],[-0.142,0.1032],[-0.0684,0.0439],[0.0144,-0.0081],[0.1055,-0.0519],[0.204,-0.0862],[0.3088,-0.1102],[0.4189,-0.123],[0.5328,-0.1239],[0.6493,-0.1124],[0.767,-0.088],[0.8844,-0.0506],[1,0]]}]}
{{< /apfigure >}}

*(c) $r=a+b\sin\theta$, $a<b$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"An inner-loop limacon with a small loop inside a larger loop, both crossing the pole, extending downward.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[1,0],[0.8844,0.0506],[0.767,0.088],[0.6493,0.1124],[0.5328,0.1239],[0.4189,0.123],[0.3088,0.1102],[0.204,0.0862],[0.1055,0.0519],[0.0144,0.0081],[-0.0684,-0.0439],[-0.142,-0.1032],[-0.2059,-0.1684],[-0.2596,-0.2383],[-0.3027,-0.3114],[-0.335,-0.3866],[-0.3565,-0.4623],[-0.3674,-0.5373],[-0.368,-0.6103],[-0.3588,-0.68],[-0.3403,-0.7452],[-0.3134,-0.8049],[-0.2788,-0.858],[-0.2375,-0.9036],[-0.1907,-0.941],[-0.1394,-0.9697],[-0.0849,-0.989],[-0.0285,-0.9988],[0.0285,-0.9988],[0.0849,-0.989],[0.1394,-0.9697],[0.1907,-0.941],[0.2375,-0.9036],[0.2788,-0.858],[0.3134,-0.8049],[0.3403,-0.7452],[0.3588,-0.68],[0.368,-0.6103],[0.3674,-0.5373],[0.3565,-0.4623],[0.335,-0.3866],[0.3027,-0.3114],[0.2596,-0.2383],[0.2059,-0.1684],[0.142,-0.1032],[0.0684,-0.0439],[-0.0144,0.0081],[-0.1055,0.0519],[-0.204,0.0862],[-0.3088,0.1102],[-0.4189,0.123],[-0.5328,0.1239],[-0.6493,0.1124],[-0.767,0.088],[-0.8844,0.0506],[-1,0],[-1.1124,-0.0636],[-1.22,-0.14],[-1.3214,-0.2287],[-1.4152,-0.3291],[-1.5001,-0.4405],[-1.5749,-0.5619],[-1.6383,-0.6923],[-1.6893,-0.8306],[-1.7271,-0.9753],[-1.7509,-1.1252],[-1.7601,-1.2788],[-1.7542,-1.4344],[-1.7331,-1.5906],[-1.6965,-1.7457],[-1.6447,-1.8981],[-1.5778,-2.0461],[-1.4963,-2.1883],[-1.4008,-2.323],[-1.2921,-2.4489],[-1.1712,-2.5645],[-1.039,-2.6686],[-0.8968,-2.7601],[-0.746,-2.8379],[-0.5879,-2.9012],[-0.424,-2.9493],[-0.2561,-2.9817],[-0.0856,-2.998],[0.0856,-2.998],[0.2561,-2.9817],[0.424,-2.9493],[0.5879,-2.9012],[0.746,-2.8379],[0.8968,-2.7601],[1.039,-2.6686],[1.1712,-2.5645],[1.2921,-2.4489],[1.4008,-2.323],[1.4963,-2.1883],[1.5778,-2.0461],[1.6447,-1.8981],[1.6965,-1.7457],[1.7331,-1.5906],[1.7542,-1.4344],[1.7601,-1.2788],[1.7509,-1.1252],[1.7271,-0.9753],[1.6893,-0.8306],[1.6383,-0.6923],[1.5749,-0.5619],[1.5001,-0.4405],[1.4152,-0.3291],[1.3214,-0.2287],[1.22,-0.14],[1.1124,-0.0636],[1,0]]}]}
{{< /apfigure >}}

*(d) $r=a-b\sin\theta$, $a<b$.*

**Example.** Sketch the graph of $r=2+5\cos\theta$.

**Solution.** Testing for symmetry, we find that the graph of the equation is symmetric about the polar axis. Next, finding the zeros reveals that when $r=0$, $\theta=1.98$. The maximum $\lvert r\rvert$ is found when $\cos\theta=1$ or when $\theta=0$. Thus, the maximum is found at the point $(7,0)$.

Even though we have found symmetry, the zero, and the maximum, plotting more points helps to define the shape, and then a pattern emerges. See the table below.

| $\theta$ | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ | $\tfrac{2\pi}{3}$ | $\tfrac{5\pi}{6}$ | $\pi$ | $\tfrac{7\pi}{6}$ | $\tfrac{4\pi}{3}$ | $\tfrac{3\pi}{2}$ | $\tfrac{5\pi}{3}$ | $\tfrac{11\pi}{6}$ | $2\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $r$ | $7$ | $6.3$ | $4.5$ | $2$ | $-0.5$ | $-2.3$ | $-3$ | $-2.3$ | $-0.5$ | $2$ | $4.5$ | $6.3$ | $7$ |
As expected, the values begin to repeat after $\theta=\pi$. The graph is shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of seven concentric circles with the inner-loop limacon r equals 2 plus 5 cosine theta plotted, extending right with a small inner loop crossing the pole, with points marked at (7,0), (4.5,pi/3), (2,pi/2), and (-3,pi).","xMin":-7.6,"xMax":7.6,"yMin":-7.6,"yMax":7.6,"grid":false,"tickLabels":false,"unit":40,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5},{"at":[0,0],"r":6},{"at":[0,0],"r":7}],"segments":[{"from":[-7.4,-0.0],"to":[7.4,0.0],"arrows":false},{"from":[-6.4086,-3.7],"to":[6.4086,3.7],"arrows":false},{"from":[-3.7,-6.4086],"to":[3.7,6.4086],"arrows":false},{"from":[-0.0,-7.4],"to":[0.0,7.4],"arrows":false},{"from":[3.7,-6.4086],"to":[-3.7,6.4086],"arrows":false},{"from":[6.4086,-3.7],"to":[-6.4086,3.7],"arrows":false}],"polylines":[{"through":[[7,0],[6.986,0.3379],[6.9441,0.6733],[6.8746,1.0038],[6.7782,1.327],[6.6555,1.6404],[6.5077,1.9419],[6.3358,2.2293],[6.1413,2.5005],[5.9259,2.7536],[5.6911,2.9869],[5.4389,3.1988],[5.1714,3.388],[4.8906,3.5532],[4.5988,3.6935],[4.2984,3.808],[3.9916,3.8963],[3.6809,3.958],[3.3688,3.9929],[3.0576,4.0013],[2.7496,3.9835],[2.4473,3.94],[2.1529,3.8716],[1.8685,3.7793],[1.5962,3.6643],[1.3379,3.5278],[1.0955,3.3716],[0.8705,3.1972],[0.6644,3.0064],[0.4784,2.8012],[0.3137,2.5837],[0.1711,2.356],[0.0512,2.1202],[-0.0454,1.8786],[-0.1186,1.6335],[-0.1684,1.3871],[-0.195,1.1417],[-0.1988,0.8994],[-0.1803,0.6624],[-0.1406,0.4326],[-0.0805,0.2122],[-0.0013,0.0029],[0.0957,-0.1936],[0.2089,-0.3757],[0.3367,-0.5421],[0.4774,-0.6916],[0.6289,-0.823],[0.7894,-0.9357],[0.9569,-1.0289],[1.1292,-1.1022],[1.3043,-1.1555],[1.4801,-1.1887],[1.6545,-1.2021],[1.8255,-1.196],[1.991,-1.171],[2.1492,-1.128],[2.2984,-1.068],[2.4366,-0.9921],[2.5626,-0.9016],[2.6747,-0.7981],[2.7718,-0.6832],[2.8527,-0.5585],[2.9166,-0.4259],[2.9628,-0.2873],[2.9907,-0.1447],[3,0],[2.9907,0.1447],[2.9628,0.2873],[2.9166,0.4259],[2.8527,0.5585],[2.7718,0.6832],[2.6747,0.7981],[2.5626,0.9016],[2.4366,0.9921],[2.2984,1.068],[2.1492,1.128],[1.991,1.171],[1.8255,1.196],[1.6545,1.2021],[1.4801,1.1887],[1.3043,1.1555],[1.1292,1.1022],[0.9569,1.0289],[0.7894,0.9357],[0.6289,0.823],[0.4774,0.6916],[0.3367,0.5421],[0.2089,0.3757],[0.0957,0.1936],[-0.0013,-0.0029],[-0.0805,-0.2122],[-0.1406,-0.4326],[-0.1803,-0.6624],[-0.1988,-0.8994],[-0.195,-1.1417],[-0.1684,-1.3871],[-0.1186,-1.6335],[-0.0454,-1.8786],[0.0512,-2.1202],[0.1711,-2.356],[0.3137,-2.5837],[0.4784,-2.8012],[0.6644,-3.0064],[0.8705,-3.1972],[1.0955,-3.3716],[1.3379,-3.5278],[1.5962,-3.6643],[1.8685,-3.7793],[2.1529,-3.8716],[2.4473,-3.94],[2.7496,-3.9835],[3.0576,-4.0013],[3.3688,-3.9929],[3.6809,-3.958],[3.9916,-3.8963],[4.2984,-3.808],[4.5988,-3.6935],[4.8906,-3.5532],[5.1714,-3.388],[5.4389,-3.1988],[5.6911,-2.9869],[5.9259,-2.7536],[6.1413,-2.5005],[6.3358,-2.2293],[6.5077,-1.9419],[6.6555,-1.6404],[6.7782,-1.327],[6.8746,-1.0038],[6.9441,-0.6733],[6.986,-0.3379],[7,0]]}],"points":[{"at":[7.0,0.0]},{"at":[2.25,3.8971]},{"at":[0.0,2.0]},{"at":[3.0,-0.0]}]}
{{< /apfigure >}}


#### Investigating Lemniscates

The lemniscate is a polar curve resembling the infinity symbol $\infty$ or a figure eight. Centered at the pole, a lemniscate is symmetrical by definition.

{{< callout type="info" >}}
  **Formulas for lemniscates.** The formulas that generate the graph of a lemniscate are given by $r^2=a^2\cos2\theta$ and $r^2=a^2\sin2\theta$ where $a\ne0$. The formula $r^2=a^2\sin2\theta$ is symmetric with respect to the pole. The formula $r^2=a^2\cos2\theta$ is symmetric with respect to the pole, the line $\theta=\tfrac{\pi}{2}$, and the polar axis. See the graphs below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal figure-eight lemniscate centered at the pole, its two lobes along the polar axis.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[0,0],[0.4978,-0.4724],[0.7208,-0.649],[0.9023,-0.7706],[1.0631,-0.8609],[1.2108,-0.9291],[1.3492,-0.9802],[1.4801,-1.0172],[1.6046,-1.042],[1.7235,-1.0562],[1.8371,-1.0607],[1.9457,-1.0564],[2.0493,-1.0442],[2.1481,-1.0246],[2.2419,-0.9981],[2.3307,-0.9654],[2.4144,-0.9268],[2.493,-0.8828],[2.5663,-0.8338],[2.6342,-0.7803],[2.6967,-0.7226],[2.7536,-0.6611],[2.8047,-0.5962],[2.8501,-0.5282],[2.8896,-0.4577],[2.9232,-0.3848],[2.9508,-0.3101],[2.9723,-0.2339],[2.9877,-0.1566],[2.9969,-0.0785],[3,0],[2.9969,0.0785],[2.9877,0.1566],[2.9723,0.2339],[2.9508,0.3101],[2.9232,0.3848],[2.8896,0.4577],[2.8501,0.5282],[2.8047,0.5962],[2.7536,0.6611],[2.6967,0.7226],[2.6342,0.7803],[2.5663,0.8338],[2.493,0.8828],[2.4144,0.9268],[2.3307,0.9654],[2.2419,0.9981],[2.1481,1.0246],[2.0493,1.0442],[1.9457,1.0564],[1.8371,1.0607],[1.7235,1.0562],[1.6046,1.042],[1.4801,1.0172],[1.3492,0.9802],[1.2108,0.9291],[1.0631,0.8609],[0.9023,0.7706],[0.7208,0.649],[0.4978,0.4724],[0,0],[0,0],[-0.4978,-0.4724],[-0.7208,-0.649],[-0.9023,-0.7706],[-1.0631,-0.8609],[-1.2108,-0.9291],[-1.3492,-0.9802],[-1.4801,-1.0172],[-1.6046,-1.042],[-1.7235,-1.0562],[-1.8371,-1.0607],[-1.9457,-1.0564],[-2.0493,-1.0442],[-2.1481,-1.0246],[-2.2419,-0.9981],[-2.3307,-0.9654],[-2.4144,-0.9268],[-2.493,-0.8828],[-2.5663,-0.8338],[-2.6342,-0.7803],[-2.6967,-0.7226],[-2.7536,-0.6611],[-2.8047,-0.5962],[-2.8501,-0.5282],[-2.8896,-0.4577],[-2.9232,-0.3848],[-2.9508,-0.3101],[-2.9723,-0.2339],[-2.9877,-0.1566],[-2.9969,-0.0785],[-3,0],[-2.9969,0.0785],[-2.9877,0.1566],[-2.9723,0.2339],[-2.9508,0.3101],[-2.9232,0.3848],[-2.8896,0.4577],[-2.8501,0.5282],[-2.8047,0.5962],[-2.7536,0.6611],[-2.6967,0.7226],[-2.6342,0.7803],[-2.5663,0.8338],[-2.493,0.8828],[-2.4144,0.9268],[-2.3307,0.9654],[-2.2419,0.9981],[-2.1481,1.0246],[-2.0493,1.0442],[-1.9457,1.0564],[-1.8371,1.0607],[-1.7235,1.0562],[-1.6046,1.042],[-1.4801,1.0172],[-1.3492,0.9802],[-1.2108,0.9291],[-1.0631,0.8609],[-0.9023,0.7706],[-0.7208,0.649],[-0.4978,0.4724],[0,0]]}]}
{{< /apfigure >}}

*(a) $r^2=a^2\cos2\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical figure-eight lemniscate centered at the pole, its two lobes along the line theta = pi/2.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[0,0],[0.4724,0.4978],[0.649,0.7208],[0.7706,0.9023],[0.8609,1.0631],[0.9291,1.2108],[0.9802,1.3492],[1.0172,1.4801],[1.042,1.6046],[1.0562,1.7235],[1.0607,1.8371],[1.0564,1.9457],[1.0442,2.0493],[1.0246,2.1481],[0.9981,2.2419],[0.9654,2.3307],[0.9268,2.4144],[0.8828,2.493],[0.8338,2.5663],[0.7803,2.6342],[0.7226,2.6967],[0.6611,2.7536],[0.5962,2.8047],[0.5282,2.8501],[0.4577,2.8896],[0.3848,2.9232],[0.3101,2.9508],[0.2339,2.9723],[0.1566,2.9877],[0.0785,2.9969],[0,3],[-0.0785,2.9969],[-0.1566,2.9877],[-0.2339,2.9723],[-0.3101,2.9508],[-0.3848,2.9232],[-0.4577,2.8896],[-0.5282,2.8501],[-0.5962,2.8047],[-0.6611,2.7536],[-0.7226,2.6967],[-0.7803,2.6342],[-0.8338,2.5663],[-0.8828,2.493],[-0.9268,2.4144],[-0.9654,2.3307],[-0.9981,2.2419],[-1.0246,2.1481],[-1.0442,2.0493],[-1.0564,1.9457],[-1.0607,1.8371],[-1.0562,1.7235],[-1.042,1.6046],[-1.0172,1.4801],[-0.9802,1.3492],[-0.9291,1.2108],[-0.8609,1.0631],[-0.7706,0.9023],[-0.649,0.7208],[-0.4724,0.4978],[0,0],[0,0],[0.4724,-0.4978],[0.649,-0.7208],[0.7706,-0.9023],[0.8609,-1.0631],[0.9291,-1.2108],[0.9802,-1.3492],[1.0172,-1.4801],[1.042,-1.6046],[1.0562,-1.7235],[1.0607,-1.8371],[1.0564,-1.9457],[1.0442,-2.0493],[1.0246,-2.1481],[0.9981,-2.2419],[0.9654,-2.3307],[0.9268,-2.4144],[0.8828,-2.493],[0.8338,-2.5663],[0.7803,-2.6342],[0.7226,-2.6967],[0.6611,-2.7536],[0.5962,-2.8047],[0.5282,-2.8501],[0.4577,-2.8896],[0.3848,-2.9232],[0.3101,-2.9508],[0.2339,-2.9723],[0.1566,-2.9877],[0.0785,-2.9969],[0,-3],[-0.0785,-2.9969],[-0.1566,-2.9877],[-0.2339,-2.9723],[-0.3101,-2.9508],[-0.3848,-2.9232],[-0.4577,-2.8896],[-0.5282,-2.8501],[-0.5962,-2.8047],[-0.6611,-2.7536],[-0.7226,-2.6967],[-0.7803,-2.6342],[-0.8338,-2.5663],[-0.8828,-2.493],[-0.9268,-2.4144],[-0.9654,-2.3307],[-0.9981,-2.2419],[-1.0246,-2.1481],[-1.0442,-2.0493],[-1.0564,-1.9457],[-1.0607,-1.8371],[-1.0562,-1.7235],[-1.042,-1.6046],[-1.0172,-1.4801],[-0.9802,-1.3492],[-0.9291,-1.2108],[-0.8609,-1.0631],[-0.7706,-0.9023],[-0.649,-0.7208],[-0.4724,-0.4978],[0,0]]}]}
{{< /apfigure >}}

*(b) $r^2=-a^2\cos2\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A diagonal figure-eight lemniscate centered at the pole, its two lobes along the line y = x.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[0,0],[0.6861,0.018],[0.9686,0.0508],[1.1829,0.0931],[1.3604,0.143],[1.5132,0.1992],[1.6471,0.2609],[1.7658,0.3273],[1.8715,0.3978],[1.9655,0.4719],[2.049,0.549],[2.1228,0.6288],[2.1874,0.7107],[2.2434,0.7944],[2.291,0.8794],[2.3307,0.9654],[2.3626,1.0519],[2.387,1.1386],[2.4043,1.225],[2.4144,1.3109],[2.4178,1.3959],[2.4145,1.4796],[2.4048,1.5617],[2.3889,1.6418],[2.3669,1.7197],[2.3392,1.7949],[2.3058,1.8672],[2.2671,1.9363],[2.2233,2.0019],[2.1746,2.0636],[2.1213,2.1213],[2.0636,2.1746],[2.0019,2.2233],[1.9363,2.2671],[1.8672,2.3058],[1.7949,2.3392],[1.7197,2.3669],[1.6418,2.3889],[1.5617,2.4048],[1.4796,2.4145],[1.3959,2.4178],[1.3109,2.4144],[1.225,2.4043],[1.1386,2.387],[1.0519,2.3626],[0.9654,2.3307],[0.8794,2.291],[0.7944,2.2434],[0.7107,2.1874],[0.6288,2.1228],[0.549,2.049],[0.4719,1.9655],[0.3978,1.8715],[0.3273,1.7658],[0.2609,1.6471],[0.1992,1.5132],[0.143,1.3604],[0.0931,1.1829],[0.0508,0.9686],[0.018,0.6861],[0,0],[0,0],[-0.018,-0.6861],[-0.0508,-0.9686],[-0.0931,-1.1829],[-0.143,-1.3604],[-0.1992,-1.5132],[-0.2609,-1.6471],[-0.3273,-1.7658],[-0.3978,-1.8715],[-0.4719,-1.9655],[-0.549,-2.049],[-0.6288,-2.1228],[-0.7107,-2.1874],[-0.7944,-2.2434],[-0.8794,-2.291],[-0.9654,-2.3307],[-1.0519,-2.3626],[-1.1386,-2.387],[-1.225,-2.4043],[-1.3109,-2.4144],[-1.3959,-2.4178],[-1.4796,-2.4145],[-1.5617,-2.4048],[-1.6418,-2.3889],[-1.7197,-2.3669],[-1.7949,-2.3392],[-1.8672,-2.3058],[-1.9363,-2.2671],[-2.0019,-2.2233],[-2.0636,-2.1746],[-2.1213,-2.1213],[-2.1746,-2.0636],[-2.2233,-2.0019],[-2.2671,-1.9363],[-2.3058,-1.8672],[-2.3392,-1.7949],[-2.3669,-1.7197],[-2.3889,-1.6418],[-2.4048,-1.5617],[-2.4145,-1.4796],[-2.4178,-1.3959],[-2.4144,-1.3109],[-2.4043,-1.225],[-2.387,-1.1386],[-2.3626,-1.0519],[-2.3307,-0.9654],[-2.291,-0.8794],[-2.2434,-0.7944],[-2.1874,-0.7107],[-2.1228,-0.6288],[-2.049,-0.549],[-1.9655,-0.4719],[-1.8715,-0.3978],[-1.7658,-0.3273],[-1.6471,-0.2609],[-1.5132,-0.1992],[-1.3604,-0.143],[-1.1829,-0.0931],[-0.9686,-0.0508],[-0.6861,-0.018],[0,0]]}]}
{{< /apfigure >}}

*(c) $r^2=a^2\sin2\theta$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A diagonal figure-eight lemniscate centered at the pole, its two lobes along the line y = -x.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[0,0],[0.018,-0.6861],[0.0508,-0.9686],[0.0931,-1.1829],[0.143,-1.3604],[0.1992,-1.5132],[0.2609,-1.6471],[0.3273,-1.7658],[0.3978,-1.8715],[0.4719,-1.9655],[0.549,-2.049],[0.6288,-2.1228],[0.7107,-2.1874],[0.7944,-2.2434],[0.8794,-2.291],[0.9654,-2.3307],[1.0519,-2.3626],[1.1386,-2.387],[1.225,-2.4043],[1.3109,-2.4144],[1.3959,-2.4178],[1.4796,-2.4145],[1.5617,-2.4048],[1.6418,-2.3889],[1.7197,-2.3669],[1.7949,-2.3392],[1.8672,-2.3058],[1.9363,-2.2671],[2.0019,-2.2233],[2.0636,-2.1746],[2.1213,-2.1213],[2.1746,-2.0636],[2.2233,-2.0019],[2.2671,-1.9363],[2.3058,-1.8672],[2.3392,-1.7949],[2.3669,-1.7197],[2.3889,-1.6418],[2.4048,-1.5617],[2.4145,-1.4796],[2.4178,-1.3959],[2.4144,-1.3109],[2.4043,-1.225],[2.387,-1.1386],[2.3626,-1.0519],[2.3307,-0.9654],[2.291,-0.8794],[2.2434,-0.7944],[2.1874,-0.7107],[2.1228,-0.6288],[2.049,-0.549],[1.9655,-0.4719],[1.8715,-0.3978],[1.7658,-0.3273],[1.6471,-0.2609],[1.5132,-0.1992],[1.3604,-0.143],[1.1829,-0.0931],[0.9686,-0.0508],[0.6861,-0.018],[0,0],[0,0],[-0.6861,0.018],[-0.9686,0.0508],[-1.1829,0.0931],[-1.3604,0.143],[-1.5132,0.1992],[-1.6471,0.2609],[-1.7658,0.3273],[-1.8715,0.3978],[-1.9655,0.4719],[-2.049,0.549],[-2.1228,0.6288],[-2.1874,0.7107],[-2.2434,0.7944],[-2.291,0.8794],[-2.3307,0.9654],[-2.3626,1.0519],[-2.387,1.1386],[-2.4043,1.225],[-2.4144,1.3109],[-2.4178,1.3959],[-2.4145,1.4796],[-2.4048,1.5617],[-2.3889,1.6418],[-2.3669,1.7197],[-2.3392,1.7949],[-2.3058,1.8672],[-2.2671,1.9363],[-2.2233,2.0019],[-2.1746,2.0636],[-2.1213,2.1213],[-2.0636,2.1746],[-2.0019,2.2233],[-1.9363,2.2671],[-1.8672,2.3058],[-1.7949,2.3392],[-1.7197,2.3669],[-1.6418,2.3889],[-1.5617,2.4048],[-1.4796,2.4145],[-1.3959,2.4178],[-1.3109,2.4144],[-1.225,2.4043],[-1.1386,2.387],[-1.0519,2.3626],[-0.9654,2.3307],[-0.8794,2.291],[-0.7944,2.2434],[-0.7107,2.1874],[-0.6288,2.1228],[-0.549,2.049],[-0.4719,1.9655],[-0.3978,1.8715],[-0.3273,1.7658],[-0.2609,1.6471],[-0.1992,1.5132],[-0.143,1.3604],[-0.0931,1.1829],[-0.0508,0.9686],[-0.018,0.6861],[0,0]]}]}
{{< /apfigure >}}

*(d) $r^2=-a^2\sin2\theta$.*

**Example.** Sketch the graph of $r^2=4\cos2\theta$.

**Solution.** The equation exhibits symmetry with respect to the line $\theta=\tfrac{\pi}{2}$, the polar axis, and the pole.

Let’s find the zeros. It should be routine by now, but we approach this equation a little differently by making the substitution $u=2\theta$.

$$
\begin{array}{lrcl}
& 0 &=& 4\cos2\theta \\[4pt]
& 0 &=& 4\cos u \\[4pt]
& 0 &=& \cos u \\[4pt]
& \cos^{-1}0 &=& \tfrac{\pi}{2} \\[4pt]
& u &=& \tfrac{\pi}{2} \\[4pt]
\text{Substitute }2\theta\text{ back in for }u. & 2\theta &=& \tfrac{\pi}{2} \\[4pt]
& \theta &=& \tfrac{\pi}{4}
\end{array}
$$

So, the point $\left(0,\tfrac{\pi}{4}\right)$ is a zero of the equation.

Now let’s find the maximum value. Since the maximum of $\cos u=1$ when $u=0$, the maximum $\cos2\theta=1$ when $2\theta=0$. Thus,

$$
\begin{array}{lrcl}
& r^2 &=& 4\cos(0) \\[4pt]
& r^2 &=& 4(1)=4 \\[4pt]
& r &=& \pm\sqrt4=\pm2
\end{array}
$$

We have a maximum at $(2,0)$. Since this graph is symmetric with respect to the pole, the line $\theta=\tfrac{\pi}{2}$, and the polar axis, we only need to plot points in the first quadrant.

| $\theta$ | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ |
| :--- | ---: | ---: | ---: |
| $r$ | $\pm2$ | $\pm\sqrt2$ | $0$ |
Plot the points on the graph, shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of two concentric circles with the horizontal lemniscate r squared equals 4 cosine 2theta plotted, a figure-eight through the pole along the polar axis, with points marked at (2,0), (radical 2,pi/6), and (radical 2,7pi/6).","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":true,"unit":75,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2}],"segments":[{"from":[-2.4,-0.0],"to":[2.4,0.0],"arrows":false},{"from":[-2.0785,-1.2],"to":[2.0785,1.2],"arrows":false},{"from":[-1.2,-2.0785],"to":[1.2,2.0785],"arrows":false},{"from":[-0.0,-2.4],"to":[0.0,2.4],"arrows":false},{"from":[1.2,-2.0785],"to":[-1.2,2.0785],"arrows":false},{"from":[2.0785,-1.2],"to":[-2.0785,1.2],"arrows":false}],"polylines":[{"through":[[0,0],[0.2857,-0.2747],[0.4114,-0.3803],[0.5125,-0.4555],[0.6015,-0.5137],[0.6829,-0.5604],[0.7589,-0.5982],[0.8308,-0.6289],[0.8995,-0.6535],[0.9653,-0.6728],[1.0287,-0.6874],[1.0899,-0.6977],[1.149,-0.7041],[1.2061,-0.7069],[1.2614,-0.7064],[1.3147,-0.7027],[1.3662,-0.6961],[1.4159,-0.6868],[1.4637,-0.6748],[1.5097,-0.6603],[1.5538,-0.6436],[1.596,-0.6246],[1.6362,-0.6036],[1.6745,-0.5807],[1.7109,-0.5559],[1.7452,-0.5294],[1.7774,-0.5013],[1.8076,-0.4717],[1.8357,-0.4407],[1.8616,-0.4085],[1.8854,-0.375],[1.907,-0.3406],[1.9264,-0.3051],[1.9436,-0.2688],[1.9585,-0.2318],[1.9712,-0.1941],[1.9815,-0.1559],[1.9896,-0.1173],[1.9954,-0.0784],[1.9988,-0.0393],[2,0],[1.9988,0.0393],[1.9954,0.0784],[1.9896,0.1173],[1.9815,0.1559],[1.9712,0.1941],[1.9585,0.2318],[1.9436,0.2688],[1.9264,0.3051],[1.907,0.3406],[1.8854,0.375],[1.8616,0.4085],[1.8357,0.4407],[1.8076,0.4717],[1.7774,0.5013],[1.7452,0.5294],[1.7109,0.5559],[1.6745,0.5807],[1.6362,0.6036],[1.596,0.6246],[1.5538,0.6436],[1.5097,0.6603],[1.4637,0.6748],[1.4159,0.6868],[1.3662,0.6961],[1.3147,0.7027],[1.2614,0.7064],[1.2061,0.7069],[1.149,0.7041],[1.0899,0.6977],[1.0287,0.6874],[0.9653,0.6728],[0.8995,0.6535],[0.8308,0.6289],[0.7589,0.5982],[0.6829,0.5604],[0.6015,0.5137],[0.5125,0.4555],[0.4114,0.3803],[0.2857,0.2747],[0,0],[0,0],[-0.2857,-0.2747],[-0.4114,-0.3803],[-0.5125,-0.4555],[-0.6015,-0.5137],[-0.6829,-0.5604],[-0.7589,-0.5982],[-0.8308,-0.6289],[-0.8995,-0.6535],[-0.9653,-0.6728],[-1.0287,-0.6874],[-1.0899,-0.6977],[-1.149,-0.7041],[-1.2061,-0.7069],[-1.2614,-0.7064],[-1.3147,-0.7027],[-1.3662,-0.6961],[-1.4159,-0.6868],[-1.4637,-0.6748],[-1.5097,-0.6603],[-1.5538,-0.6436],[-1.596,-0.6246],[-1.6362,-0.6036],[-1.6745,-0.5807],[-1.7109,-0.5559],[-1.7452,-0.5294],[-1.7774,-0.5013],[-1.8076,-0.4717],[-1.8357,-0.4407],[-1.8616,-0.4085],[-1.8854,-0.375],[-1.907,-0.3406],[-1.9264,-0.3051],[-1.9436,-0.2688],[-1.9585,-0.2318],[-1.9712,-0.1941],[-1.9815,-0.1559],[-1.9896,-0.1173],[-1.9954,-0.0784],[-1.9988,-0.0393],[-2,0],[-1.9988,0.0393],[-1.9954,0.0784],[-1.9896,0.1173],[-1.9815,0.1559],[-1.9712,0.1941],[-1.9585,0.2318],[-1.9436,0.2688],[-1.9264,0.3051],[-1.907,0.3406],[-1.8854,0.375],[-1.8616,0.4085],[-1.8357,0.4407],[-1.8076,0.4717],[-1.7774,0.5013],[-1.7452,0.5294],[-1.7109,0.5559],[-1.6745,0.5807],[-1.6362,0.6036],[-1.596,0.6246],[-1.5538,0.6436],[-1.5097,0.6603],[-1.4637,0.6748],[-1.4159,0.6868],[-1.3662,0.6961],[-1.3147,0.7027],[-1.2614,0.7064],[-1.2061,0.7069],[-1.149,0.7041],[-1.0899,0.6977],[-1.0287,0.6874],[-0.9653,0.6728],[-0.8995,0.6535],[-0.8308,0.6289],[-0.7589,0.5982],[-0.6829,0.5604],[-0.6015,0.5137],[-0.5125,0.4555],[-0.4114,0.3803],[-0.2857,0.2747],[0,0]]}],"points":[{"at":[2.0,0.0],"label":"(2, 0)"},{"at":[1.2247,0.7071],"label":"(\u221a2, \u03c0/6)"},{"at":[-1.2247,-0.7071],"label":"(\u221a2, 7\u03c0/6)"}]}
{{< /apfigure >}}


**Analysis.** Making a substitution such as $u=2\theta$ is a common practice in mathematics because it can make calculations simpler. However, we must not forget to replace the substitution term with the original term at the end, and then solve for the unknown.

Some of the points on this graph may not show up using the Trace function on a graphing calculator, and the calculator table may show an error for these same points of $r$. This is because there are no real square roots for these values of $\theta$. In other words, the corresponding $r$-values of $\sqrt{4\cos(2\theta)}$ are complex numbers because there is a negative number under the radical.

#### Investigating Rose Curves

The next type of polar equation produces a petal-like shape called a rose curve. Although the graphs look complex, a simple polar equation generates the pattern.

{{< callout type="info" >}}
  **Rose curves.** The formulas that generate the graph of a rose curve are given by $r=a\cos n\theta$ and $r=a\sin n\theta$ where $a\ne0$. If $n$ is even, the curve has $2n$ petals. If $n$ is odd, the curve has $n$ petals. See the graphs below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A four-petal rose curve centered at the pole, one petal along each half-axis.","xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":false,"unit":42,"polylines":[{"through":[[3,0],[2.9825,0.1443],[2.9304,0.2841],[2.8446,0.4154],[2.7268,0.5338],[2.5792,0.6357],[2.4046,0.7176],[2.2064,0.7763],[1.9883,0.8095],[1.7544,0.8152],[1.509,0.792],[1.2567,0.7391],[1.0022,0.6566],[0.75,0.5449],[0.5047,0.4054],[0.2707,0.2398],[0.0519,0.0506],[-0.148,-0.1591],[-0.3257,-0.386],[-0.4785,-0.6262],[-0.6043,-0.8755],[-0.7015,-1.1294],[-0.7693,-1.3834],[-0.8073,-1.6328],[-0.8159,-1.8731],[-0.7963,-2.0996],[-0.75,-2.3083],[-0.6793,-2.4951],[-0.5871,-2.6565],[-0.4764,-2.7895],[-0.3511,-2.8916],[-0.215,-2.9607],[-0.0724,-2.9956],[0.0724,-2.9956],[0.215,-2.9607],[0.3511,-2.8916],[0.4764,-2.7895],[0.5871,-2.6565],[0.6793,-2.4951],[0.75,-2.3083],[0.7963,-2.0996],[0.8159,-1.8731],[0.8073,-1.6328],[0.7693,-1.3834],[0.7015,-1.1294],[0.6043,-0.8755],[0.4785,-0.6262],[0.3257,-0.386],[0.148,-0.1591],[-0.0519,0.0506],[-0.2707,0.2398],[-0.5047,0.4054],[-0.75,0.5449],[-1.0022,0.6566],[-1.2567,0.7391],[-1.509,0.792],[-1.7544,0.8152],[-1.9883,0.8095],[-2.2064,0.7763],[-2.4046,0.7176],[-2.5792,0.6357],[-2.7268,0.5338],[-2.8446,0.4154],[-2.9304,0.2841],[-2.9825,0.1443],[-3,0],[-2.9825,-0.1443],[-2.9304,-0.2841],[-2.8446,-0.4154],[-2.7268,-0.5338],[-2.5792,-0.6357],[-2.4046,-0.7176],[-2.2064,-0.7763],[-1.9883,-0.8095],[-1.7544,-0.8152],[-1.509,-0.792],[-1.2567,-0.7391],[-1.0022,-0.6566],[-0.75,-0.5449],[-0.5047,-0.4054],[-0.2707,-0.2398],[-0.0519,-0.0506],[0.148,0.1591],[0.3257,0.386],[0.4785,0.6262],[0.6043,0.8755],[0.7015,1.1294],[0.7693,1.3834],[0.8073,1.6328],[0.8159,1.8731],[0.7963,2.0996],[0.75,2.3083],[0.6793,2.4951],[0.5871,2.6565],[0.4764,2.7895],[0.3511,2.8916],[0.215,2.9607],[0.0724,2.9956],[-0.0724,2.9956],[-0.215,2.9607],[-0.3511,2.8916],[-0.4764,2.7895],[-0.5871,2.6565],[-0.6793,2.4951],[-0.75,2.3083],[-0.7963,2.0996],[-0.8159,1.8731],[-0.8073,1.6328],[-0.7693,1.3834],[-0.7015,1.1294],[-0.6043,0.8755],[-0.4785,0.6262],[-0.3257,0.386],[-0.148,0.1591],[0.0519,-0.0506],[0.2707,-0.2398],[0.5047,-0.4054],[0.75,-0.5449],[1.0022,-0.6566],[1.2567,-0.7391],[1.509,-0.792],[1.7544,-0.8152],[1.9883,-0.8095],[2.2064,-0.7763],[2.4046,-0.7176],[2.5792,-0.6357],[2.7268,-0.5338],[2.8446,-0.4154],[2.9304,-0.2841],[2.9825,-0.1443],[3,0]]}]}
{{< /apfigure >}}

*(a) $r=a\cos n\theta$, $n$ even.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A three-petal rose curve centered at the pole, equally spaced around it.","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":false,"unit":55,"polylines":[{"through":[[0,0],[0.1448,0.0035],[0.2886,0.014],[0.4304,0.0313],[0.5692,0.0552],[0.704,0.0855],[0.834,0.1218],[0.9581,0.1636],[1.0756,0.2106],[1.1857,0.262],[1.2877,0.3174],[1.3809,0.376],[1.4648,0.4371],[1.5388,0.5],[1.6026,0.5639],[1.6558,0.628],[1.6982,0.6914],[1.7296,0.7535],[1.75,0.8132],[1.7595,0.8699],[1.758,0.9227],[1.7459,0.9708],[1.7234,1.0136],[1.691,1.0504],[1.6491,1.0804],[1.5981,1.1031],[1.5388,1.118],[1.4718,1.1247],[1.3978,1.1227],[1.3176,1.1117],[1.232,1.0915],[1.1419,1.0619],[1.048,1.023],[0.9514,0.9747],[0.8529,0.9171],[0.7534,0.8504],[0.6538,0.775],[0.555,0.6911],[0.4579,0.5993],[0.3633,0.5],[0.2719,0.3939],[0.1845,0.2817],[0.1018,0.164],[0.0245,0.0417],[-0.047,-0.0844],[-0.112,-0.2135],[-0.1703,-0.3445],[-0.2214,-0.4765],[-0.2651,-0.6086],[-0.3012,-0.7398],[-0.3296,-0.869],[-0.3503,-0.9955],[-0.3633,-1.118],[-0.3688,-1.2358],[-0.367,-1.348],[-0.3583,-1.4535],[-0.3429,-1.5517],[-0.3214,-1.6418],[-0.2943,-1.723],[-0.2621,-1.7947],[-0.2254,-1.8564],[-0.185,-1.9075],[-0.1415,-1.9478],[-0.0956,-1.9767],[-0.0482,-1.9942],[0,-2],[0.0482,-1.9942],[0.0956,-1.9767],[0.1415,-1.9478],[0.185,-1.9075],[0.2254,-1.8564],[0.2621,-1.7947],[0.2943,-1.723],[0.3214,-1.6418],[0.3429,-1.5517],[0.3583,-1.4535],[0.367,-1.348],[0.3688,-1.2358],[0.3633,-1.118],[0.3503,-0.9955],[0.3296,-0.869],[0.3012,-0.7398],[0.2651,-0.6086],[0.2214,-0.4765],[0.1703,-0.3445],[0.112,-0.2135],[0.047,-0.0844],[-0.0245,0.0417],[-0.1018,0.164],[-0.1845,0.2817],[-0.2719,0.3939],[-0.3633,0.5],[-0.4579,0.5993],[-0.555,0.6911],[-0.6538,0.775],[-0.7534,0.8504],[-0.8529,0.9171],[-0.9514,0.9747],[-1.048,1.023],[-1.1419,1.0619],[-1.232,1.0915],[-1.3176,1.1117],[-1.3978,1.1227],[-1.4718,1.1247],[-1.5388,1.118],[-1.5981,1.1031],[-1.6491,1.0804],[-1.691,1.0504],[-1.7234,1.0136],[-1.7459,0.9708],[-1.758,0.9227],[-1.7595,0.8699],[-1.75,0.8132],[-1.7296,0.7535],[-1.6982,0.6914],[-1.6558,0.628],[-1.6026,0.5639],[-1.5388,0.5],[-1.4648,0.4371],[-1.3809,0.376],[-1.2877,0.3174],[-1.1857,0.262],[-1.0756,0.2106],[-0.9581,0.1636],[-0.834,0.1218],[-0.704,0.0855],[-0.5692,0.0552],[-0.4304,0.0313],[-0.2886,0.014],[-0.1448,0.0035],[0,0]]}]}
{{< /apfigure >}}

*(b) $r=a\sin n\theta$, $n$ odd.*

**Example.** Sketch the graph of $r=2\cos4\theta$.

**Solution.** Testing for symmetry, we find again that the symmetry tests do not tell the whole story. The graph is not only symmetric with respect to the polar axis, but also with respect to the line $\theta=\tfrac{\pi}{2}$ and the pole.

Now we find the zeros. First make the substitution $u=4\theta$.

$$
\begin{array}{lrcl}
& 0 &=& 2\cos4\theta \\[4pt]
& 0 &=& \cos4\theta \\[4pt]
& 0 &=& \cos u \\[4pt]
& \cos^{-1}0 &=& u \\[4pt]
& u &=& \tfrac{\pi}{2} \\[4pt]
& 4\theta &=& \tfrac{\pi}{2} \\[4pt]
& \theta &=& \tfrac{\pi}{8}
\end{array}
$$

The zero is $\theta=\tfrac{\pi}{8}$. The point $\left(0,\tfrac{\pi}{8}\right)$ is on the curve.

Next, we find the maximum $\lvert r\rvert$. We know that the maximum value of $\cos u=1$ when $\theta=0$. Thus,

$$
\begin{array}{lrcl}
& r &=& 2\cos(4\cdot0) \\[4pt]
& r &=& 2\cos(0) \\[4pt]
& r &=& 2(1)=2
\end{array}
$$

The point $(2,0)$ is on the curve. The graph of the rose curve has unique properties, which are revealed in the table below.

| $\theta$ | $0$ | $\tfrac{\pi}{8}$ | $\tfrac{\pi}{4}$ | $\tfrac{3\pi}{8}$ | $\tfrac{\pi}{2}$ | $\tfrac{5\pi}{8}$ | $\tfrac{3\pi}{4}$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $r$ | $2$ | $0$ | $-2$ | $0$ | $2$ | $0$ | $-2$ |
As $r=0$ when $\theta=\tfrac{\pi}{8}$, it makes sense to divide values in the table by $\tfrac{\pi}{8}$ units. A definite pattern emerges. Look at the range of $r$-values: $2,0,-2,0,2,0,-2$, and so on. This represents the development of the curve one petal at a time. Starting at $r=0$, each petal extends out a distance of $r=2$, and then turns back to zero $2n$ times for a total of eight petals. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of two concentric circles with the eight-petal rose curve r equals 2 cosine 4theta plotted, with points marked at (0,pi/8) and (2,0).","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":true,"unit":95,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2}],"segments":[{"from":[-2.4,-0.0],"to":[2.4,0.0],"arrows":false},{"from":[-2.0785,-1.2],"to":[2.0785,1.2],"arrows":false},{"from":[-1.2,-2.0785],"to":[1.2,2.0785],"arrows":false},{"from":[-0.0,-2.4],"to":[0.0,2.4],"arrows":false},{"from":[1.2,-2.0785],"to":[-1.2,2.0785],"arrows":false},{"from":[2.0785,-1.2],"to":[-2.0785,1.2],"arrows":false}],"polylines":[{"through":[[2,0],[1.9739,0.0776],[1.8962,0.1492],[1.7697,0.2095],[1.5981,0.2531],[1.387,0.2759],[1.1431,0.2744],[0.8739,0.2465],[0.5878,0.191],[0.2935,0.1083],[0,0],[-0.2841,-0.131],[-0.5507,-0.2806],[-0.7922,-0.4437],[-1.0023,-0.6142],[-1.1759,-0.7857],[-1.309,-0.9511],[-1.3994,-1.1032],[-1.4464,-1.2353],[-1.4506,-1.3409],[-1.4142,-1.4142],[-1.3409,-1.4506],[-1.2353,-1.4464],[-1.1032,-1.3994],[-0.9511,-1.309],[-0.7857,-1.1759],[-0.6142,-1.0023],[-0.4437,-0.7922],[-0.2806,-0.5507],[-0.131,-0.2841],[0,0],[0.1083,0.2935],[0.191,0.5878],[0.2465,0.8739],[0.2744,1.1431],[0.2759,1.387],[0.2531,1.5981],[0.2095,1.7697],[0.1492,1.8962],[0.0776,1.9739],[0,2],[-0.0776,1.9739],[-0.1492,1.8962],[-0.2095,1.7697],[-0.2531,1.5981],[-0.2759,1.387],[-0.2744,1.1431],[-0.2465,0.8739],[-0.191,0.5878],[-0.1083,0.2935],[0,0],[0.131,-0.2841],[0.2806,-0.5507],[0.4437,-0.7922],[0.6142,-1.0023],[0.7857,-1.1759],[0.9511,-1.309],[1.1032,-1.3994],[1.2353,-1.4464],[1.3409,-1.4506],[1.4142,-1.4142],[1.4506,-1.3409],[1.4464,-1.2353],[1.3994,-1.1032],[1.309,-0.9511],[1.1759,-0.7857],[1.0023,-0.6142],[0.7922,-0.4437],[0.5507,-0.2806],[0.2841,-0.131],[0,0],[-0.2935,0.1083],[-0.5878,0.191],[-0.8739,0.2465],[-1.1431,0.2744],[-1.387,0.2759],[-1.5981,0.2531],[-1.7697,0.2095],[-1.8962,0.1492],[-1.9739,0.0776],[-2,0],[-1.9739,-0.0776],[-1.8962,-0.1492],[-1.7697,-0.2095],[-1.5981,-0.2531],[-1.387,-0.2759],[-1.1431,-0.2744],[-0.8739,-0.2465],[-0.5878,-0.191],[-0.2935,-0.1083],[0,0],[0.2841,0.131],[0.5507,0.2806],[0.7922,0.4437],[1.0023,0.6142],[1.1759,0.7857],[1.309,0.9511],[1.3994,1.1032],[1.4464,1.2353],[1.4506,1.3409],[1.4142,1.4142],[1.3409,1.4506],[1.2353,1.4464],[1.1032,1.3994],[0.9511,1.309],[0.7857,1.1759],[0.6142,1.0023],[0.4437,0.7922],[0.2806,0.5507],[0.131,0.2841],[0,0],[-0.1083,-0.2935],[-0.191,-0.5878],[-0.2465,-0.8739],[-0.2744,-1.1431],[-0.2759,-1.387],[-0.2531,-1.5981],[-0.2095,-1.7697],[-0.1492,-1.8962],[-0.0776,-1.9739],[0,-2],[0.0776,-1.9739],[0.1492,-1.8962],[0.2095,-1.7697],[0.2531,-1.5981],[0.2759,-1.387],[0.2744,-1.1431],[0.2465,-0.8739],[0.191,-0.5878],[0.1083,-0.2935],[0,0],[-0.131,0.2841],[-0.2806,0.5507],[-0.4437,0.7922],[-0.6142,1.0023],[-0.7857,1.1759],[-0.9511,1.309],[-1.1032,1.3994],[-1.2353,1.4464],[-1.3409,1.4506],[-1.4142,1.4142],[-1.4506,1.3409],[-1.4464,1.2353],[-1.3994,1.1032],[-1.309,0.9511],[-1.1759,0.7857],[-1.0023,0.6142],[-0.7922,0.4437],[-0.5507,0.2806],[-0.2841,0.131],[0,0],[0.2935,-0.1083],[0.5878,-0.191],[0.8739,-0.2465],[1.1431,-0.2744],[1.387,-0.2759],[1.5981,-0.2531],[1.7697,-0.2095],[1.8962,-0.1492],[1.9739,-0.0776],[2,0]]}],"points":[{"at":[0.0,0.0]},{"at":[2.0,0.0]}]}
{{< /apfigure >}}


**Analysis.** When these curves are drawn, it is best to plot the points in order, as in the table. This allows us to see how the graph hits a maximum (the tip of a petal), loops back crossing the pole, hits the opposite maximum, and loops back to the pole. The action is continuous until all the petals are drawn.

{{< multiplechoice
  question="Sketch the graph of $r=4\sin(2\theta)$. What type of curve is it, and how many petals does it have?"
  answer="a rose curve with 4 petals"
  hint="Here $n=2$, which is even."
>}}
a lemniscate
an inner-loop limaçon
a rose curve with 2 petals
a rose curve with 4 petals
{{< /multiplechoice >}}

**Example.** Sketch the graph of $r=2\sin(5\theta)$.

**Solution.** The graph of the equation shows symmetry with respect to the line $\theta=\tfrac{\pi}{2}$. Next, find the zeros and maximum. We want to make the substitution $u=5\theta$.

$$
\begin{array}{lrcl}
& 0 &=& 2\sin(5\theta) \\[4pt]
& 0 &=& \sin u \\[4pt]
& \sin^{-1}0 &=& 0 \\[4pt]
& u &=& 0 \\[4pt]
& 5\theta &=& 0 \\[4pt]
& \theta &=& 0
\end{array}
$$

The maximum value is calculated at the angle where $\sin\theta$ is a maximum. Therefore,

$$
\begin{array}{lrcl}
& r &=& 2\sin\left(5\cdot\tfrac{\pi}{2}\right) \\[4pt]
& r &=& 2(1)=2
\end{array}
$$

Thus, the maximum value of the polar equation is $2$. This is the length of each petal. As the curve for $n$ odd yields the same number of petals as $n$, there are five petals on the graph. See below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of two concentric circles with the five-petal rose curve r equals 2 sine 5theta plotted, with a point marked at (2,pi/2).","xMin":-2.6,"xMax":2.6,"yMin":-2.6,"yMax":2.6,"grid":false,"tickLabels":true,"unit":75,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2}],"segments":[{"from":[-2.4,-0.0],"to":[2.4,0.0],"arrows":false},{"from":[-2.0785,-1.2],"to":[2.0785,1.2],"arrows":false},{"from":[-1.2,-2.0785],"to":[1.2,2.0785],"arrows":false},{"from":[-0.0,-2.4],"to":[0.0,2.4],"arrows":false},{"from":[1.2,-2.0785],"to":[-1.2,2.0785],"arrows":false},{"from":[2.0785,-1.2],"to":[-2.0785,1.2],"arrows":false}],"polylines":[{"through":[[0,0],[0.1427,0.002],[0.2845,0.0081],[0.4247,0.0182],[0.5625,0.0322],[0.6971,0.0499],[0.8278,0.0711],[0.9537,0.0957],[1.0742,0.1233],[1.1887,0.1536],[1.2964,0.1864],[1.3968,0.2212],[1.4894,0.2577],[1.5736,0.2955],[1.649,0.3341],[1.7152,0.3731],[1.772,0.4121],[1.819,0.4505],[1.8559,0.4878],[1.8828,0.5238],[1.8995,0.5577],[1.9059,0.5893],[1.9021,0.618],[1.8883,0.6435],[1.8645,0.6653],[1.8311,0.683],[1.7882,0.6962],[1.7363,0.7047],[1.6758,0.7082],[1.607,0.7063],[1.5305,0.6989],[1.4467,0.6858],[1.3564,0.6669],[1.2601,0.642],[1.1584,0.6112],[1.0519,0.5744],[0.9415,0.5317],[0.8278,0.4832],[0.7115,0.429],[0.5933,0.3694],[0.474,0.3046],[0.3543,0.2349],[0.235,0.1607],[0.1166,0.0822],[0,0],[-0.1142,-0.0855],[-0.2254,-0.1738],[-0.3329,-0.2644],[-0.4362,-0.3567],[-0.5347,-0.4501],[-0.6279,-0.5441],[-0.7153,-0.638],[-0.7966,-0.7311],[-0.8714,-0.823],[-0.9392,-0.9128],[-1,-1],[-1.0534,-1.0839],[-1.0993,-1.164],[-1.1377,-1.2396],[-1.1683,-1.3101],[-1.1914,-1.3749],[-1.2068,-1.4336],[-1.2147,-1.4856],[-1.2154,-1.5304],[-1.2089,-1.5677],[-1.1955,-1.597],[-1.1756,-1.618],[-1.1494,-1.6305],[-1.1174,-1.6341],[-1.0799,-1.6288],[-1.0375,-1.6144],[-0.9905,-1.5907],[-0.9395,-1.5579],[-0.8849,-1.516],[-0.8273,-1.465],[-0.7673,-1.4052],[-0.7054,-1.3368],[-0.642,-1.2601],[-0.5779,-1.1753],[-0.5134,-1.083],[-0.4492,-0.9836],[-0.3857,-0.8775],[-0.3234,-0.7653],[-0.2629,-0.6476],[-0.2044,-0.5251],[-0.1486,-0.3983],[-0.0956,-0.2681],[-0.046,-0.1351],[0,0],[0.0421,0.1363],[0.0802,0.2731],[0.1139,0.4096],[0.1432,0.545],[0.168,0.6784],[0.1882,0.8092],[0.2037,0.9366],[0.2147,1.0597],[0.2212,1.178],[0.2233,1.2905],[0.2212,1.3968],[0.2151,1.4961],[0.2052,1.5879],[0.1918,1.6715],[0.1752,1.7466],[0.1557,1.8126],[0.1337,1.8691],[0.1096,1.9159],[0.0837,1.9525],[0.0565,1.9788],[0.0285,1.9947],[0,2],[-0.0285,1.9947],[-0.0565,1.9788],[-0.0837,1.9525],[-0.1096,1.9159],[-0.1337,1.8691],[-0.1557,1.8126],[-0.1752,1.7466],[-0.1918,1.6715],[-0.2052,1.5879],[-0.2151,1.4961],[-0.2212,1.3968],[-0.2233,1.2905],[-0.2212,1.178],[-0.2147,1.0597],[-0.2037,0.9366],[-0.1882,0.8092],[-0.168,0.6784],[-0.1432,0.545],[-0.1139,0.4096],[-0.0802,0.2731],[-0.0421,0.1363],[0,0],[0.046,-0.1351],[0.0956,-0.2681],[0.1486,-0.3983],[0.2044,-0.5251],[0.2629,-0.6476],[0.3234,-0.7653],[0.3857,-0.8775],[0.4492,-0.9836],[0.5134,-1.083],[0.5779,-1.1753],[0.642,-1.2601],[0.7054,-1.3368],[0.7673,-1.4052],[0.8273,-1.465],[0.8849,-1.516],[0.9395,-1.5579],[0.9905,-1.5907],[1.0375,-1.6144],[1.0799,-1.6288],[1.1174,-1.6341],[1.1494,-1.6305],[1.1756,-1.618],[1.1955,-1.597],[1.2089,-1.5677],[1.2154,-1.5304],[1.2147,-1.4856],[1.2068,-1.4336],[1.1914,-1.3749],[1.1683,-1.3101],[1.1377,-1.2396],[1.0993,-1.164],[1.0534,-1.0839],[1,-1],[0.9392,-0.9128],[0.8714,-0.823],[0.7966,-0.7311],[0.7153,-0.638],[0.6279,-0.5441],[0.5347,-0.4501],[0.4362,-0.3567],[0.3329,-0.2644],[0.2254,-0.1738],[0.1142,-0.0855],[0,0],[-0.1166,0.0822],[-0.235,0.1607],[-0.3543,0.2349],[-0.474,0.3046],[-0.5933,0.3694],[-0.7115,0.429],[-0.8278,0.4832],[-0.9415,0.5317],[-1.0519,0.5744],[-1.1584,0.6112],[-1.2601,0.642],[-1.3564,0.6669],[-1.4467,0.6858],[-1.5305,0.6989],[-1.607,0.7063],[-1.6758,0.7082],[-1.7363,0.7047],[-1.7882,0.6962],[-1.8311,0.683],[-1.8645,0.6653],[-1.8883,0.6435],[-1.9021,0.618],[-1.9059,0.5893],[-1.8995,0.5577],[-1.8828,0.5238],[-1.8559,0.4878],[-1.819,0.4505],[-1.772,0.4121],[-1.7152,0.3731],[-1.649,0.3341],[-1.5736,0.2955],[-1.4894,0.2577],[-1.3968,0.2212],[-1.2964,0.1864],[-1.1887,0.1536],[-1.0742,0.1233],[-0.9537,0.0957],[-0.8278,0.0711],[-0.6971,0.0499],[-0.5625,0.0322],[-0.4247,0.0182],[-0.2845,0.0081],[-0.1427,0.002],[0,0]]}],"points":[{"at":[0.0,2.0],"label":"(2, \u03c0/2)"}]}
{{< /apfigure >}}


Create a table of values similar to the one below.

| $\theta$ | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ | $\tfrac{2\pi}{3}$ | $\tfrac{5\pi}{6}$ | $\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $r$ | $0$ | $1$ | $-1.73$ | $2$ | $-1.73$ | $1$ | $0$ |

{{< multiplechoice
  question="Sketch the graph of $r=3\cos(3\theta)$. Which graph below shows it?"
  mode="graph"
  answerIndex="0"
  hint="Here $n=3$, which is odd, so the rose has $n$ petals, each reaching out to $r=3$."
>}}
{"xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":true,"unit":42,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3}],"segments":[{"from":[-3.4,-0.0],"to":[3.4,0.0],"arrows":false},{"from":[-2.9445,-1.7],"to":[2.9445,1.7],"arrows":false},{"from":[-1.7,-2.9445],"to":[1.7,2.9445],"arrows":false},{"from":[-0.0,-3.4],"to":[0.0,3.4],"arrows":false},{"from":[1.7,-2.9445],"to":[-1.7,2.9445],"arrows":false},{"from":[2.9445,-1.7],"to":[-2.9445,1.7],"arrows":false}],"polylines":[{"through":[[3,0],[2.9934,0.0627],[2.9737,0.1246],[2.941,0.185],[2.8956,0.2431],[2.8375,0.2982],[2.7673,0.3496],[2.6854,0.3965],[2.5921,0.4384],[2.4881,0.4746],[2.374,0.5046],[2.2505,0.5278],[2.1182,0.5439],[1.978,0.5523],[1.8307,0.5527],[1.6771,0.5449],[1.5181,0.5286],[1.3546,0.5038],[1.1876,0.4702],[1.0181,0.428],[0.8469,0.3771],[0.6751,0.3177],[0.5035,0.2499],[0.3332,0.1742],[0.1651,0.0907],[0,0],[-0.1611,-0.0976],[-0.3175,-0.2015],[-0.4682,-0.3111],[-0.6126,-0.4258],[-0.75,-0.5449],[-0.8797,-0.6677],[-1.001,-0.7934],[-1.1136,-0.9212],[-1.2169,-1.0504],[-1.3104,-1.1799],[-1.394,-1.309],[-1.4673,-1.4369],[-1.5301,-1.5625],[-1.5824,-1.685],[-1.624,-1.8037],[-1.6551,-1.9175],[-1.6757,-2.0256],[-1.6861,-2.1273],[-1.6864,-2.2218],[-1.6771,-2.3083],[-1.6584,-2.3861],[-1.6308,-2.4545],[-1.5948,-2.513],[-1.551,-2.561],[-1.5,-2.5981],[-1.4424,-2.6237],[-1.3789,-2.6376],[-1.3103,-2.6395],[-1.2372,-2.6292],[-1.1605,-2.6065],[-1.0809,-2.5714],[-0.9993,-2.5239],[-0.9164,-2.464],[-0.833,-2.3921],[-0.75,-2.3083],[-0.6681,-2.2129],[-0.5881,-2.1063],[-0.5107,-1.9891],[-0.4367,-1.8617],[-0.3666,-1.7248],[-0.3012,-1.579],[-0.241,-1.425],[-0.1866,-1.2636],[-0.1384,-1.0957],[-0.0969,-0.922],[-0.0624,-0.7435],[-0.0353,-0.561],[-0.0157,-0.3757],[-0.0039,-0.1883],[0,0],[-0.0039,0.1883],[-0.0157,0.3757],[-0.0353,0.561],[-0.0624,0.7435],[-0.0969,0.922],[-0.1384,1.0957],[-0.1866,1.2636],[-0.241,1.425],[-0.3012,1.579],[-0.3666,1.7248],[-0.4367,1.8617],[-0.5107,1.9891],[-0.5881,2.1063],[-0.6681,2.2129],[-0.75,2.3083],[-0.833,2.3921],[-0.9164,2.464],[-0.9993,2.5239],[-1.0809,2.5714],[-1.1605,2.6065],[-1.2372,2.6292],[-1.3103,2.6395],[-1.3789,2.6376],[-1.4424,2.6237],[-1.5,2.5981],[-1.551,2.561],[-1.5948,2.513],[-1.6308,2.4545],[-1.6584,2.3861],[-1.6771,2.3083],[-1.6864,2.2218],[-1.6861,2.1273],[-1.6757,2.0256],[-1.6551,1.9175],[-1.624,1.8037],[-1.5824,1.685],[-1.5301,1.5625],[-1.4673,1.4369],[-1.394,1.309],[-1.3104,1.1799],[-1.2169,1.0504],[-1.1136,0.9212],[-1.001,0.7934],[-0.8797,0.6677],[-0.75,0.5449],[-0.6126,0.4258],[-0.4682,0.3111],[-0.3175,0.2015],[-0.1611,0.0976],[0,0],[0.1651,-0.0907],[0.3332,-0.1742],[0.5035,-0.2499],[0.6751,-0.3177],[0.8469,-0.3771],[1.0181,-0.428],[1.1876,-0.4702],[1.3546,-0.5038],[1.5181,-0.5286],[1.6771,-0.5449],[1.8307,-0.5527],[1.978,-0.5523],[2.1182,-0.5439],[2.2505,-0.5278],[2.374,-0.5046],[2.4881,-0.4746],[2.5921,-0.4384],[2.6854,-0.3965],[2.7673,-0.3496],[2.8375,-0.2982],[2.8956,-0.2431],[2.941,-0.185],[2.9737,-0.1246],[2.9934,-0.0627],[3,0]]}],"ariaLabel":"A three-petal rose curve on a polar grid, each petal reaching out to radius 3."}
===OPT===
{"xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":true,"unit":42,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3}],"segments":[{"from":[-3.4,-0.0],"to":[3.4,0.0],"arrows":false},{"from":[-2.9445,-1.7],"to":[2.9445,1.7],"arrows":false},{"from":[-1.7,-2.9445],"to":[1.7,2.9445],"arrows":false},{"from":[-0.0,-3.4],"to":[0.0,3.4],"arrows":false},{"from":[1.7,-2.9445],"to":[-1.7,2.9445],"arrows":false},{"from":[2.9445,-1.7],"to":[-2.9445,1.7],"arrows":false}],"polylines":[{"through":[[3,0],[2.9869,0.1252],[2.9476,0.2475],[2.8828,0.3642],[2.7935,0.4725],[2.6807,0.5698],[2.5463,0.6538],[2.3921,0.7222],[2.2203,0.7732],[2.0333,0.8051],[1.8338,0.8165],[1.6246,0.8065],[1.4086,0.7744],[1.1889,0.72],[0.9683,0.6433],[0.75,0.5449],[0.5369,0.4255],[0.3318,0.2864],[0.1373,0.1289],[-0.044,-0.0449],[-0.2098,-0.233],[-0.3583,-0.4331],[-0.4878,-0.6426],[-0.5968,-0.8587],[-0.6844,-1.0785],[-0.75,-1.299],[-0.7932,-1.5173],[-0.8142,-1.7303],[-0.8134,-1.935],[-0.7916,-2.1286],[-0.75,-2.3083],[-0.6901,-2.4716],[-0.6136,-2.6161],[-0.5227,-2.7399],[-0.4195,-2.8411],[-0.3067,-2.9184],[-0.1869,-2.9705],[-0.0628,-2.9967],[0.0628,-2.9967],[0.1869,-2.9705],[0.3067,-2.9184],[0.4195,-2.8411],[0.5227,-2.7399],[0.6136,-2.6161],[0.6901,-2.4716],[0.75,-2.3083],[0.7916,-2.1286],[0.8134,-1.935],[0.8142,-1.7303],[0.7932,-1.5173],[0.75,-1.299],[0.6844,-1.0785],[0.5968,-0.8587],[0.4878,-0.6426],[0.3583,-0.4331],[0.2098,-0.233],[0.044,-0.0449],[-0.1373,0.1289],[-0.3318,0.2864],[-0.5369,0.4255],[-0.75,0.5449],[-0.9683,0.6433],[-1.1889,0.72],[-1.4086,0.7744],[-1.6246,0.8065],[-1.8338,0.8165],[-2.0333,0.8051],[-2.2203,0.7732],[-2.3921,0.7222],[-2.5463,0.6538],[-2.6807,0.5698],[-2.7935,0.4725],[-2.8828,0.3642],[-2.9476,0.2475],[-2.9869,0.1252],[-3,0],[-2.9869,-0.1252],[-2.9476,-0.2475],[-2.8828,-0.3642],[-2.7935,-0.4725],[-2.6807,-0.5698],[-2.5463,-0.6538],[-2.3921,-0.7222],[-2.2203,-0.7732],[-2.0333,-0.8051],[-1.8338,-0.8165],[-1.6246,-0.8065],[-1.4086,-0.7744],[-1.1889,-0.72],[-0.9683,-0.6433],[-0.75,-0.5449],[-0.5369,-0.4255],[-0.3318,-0.2864],[-0.1373,-0.1289],[0.044,0.0449],[0.2098,0.233],[0.3583,0.4331],[0.4878,0.6426],[0.5968,0.8587],[0.6844,1.0785],[0.75,1.299],[0.7932,1.5173],[0.8142,1.7303],[0.8134,1.935],[0.7916,2.1286],[0.75,2.3083],[0.6901,2.4716],[0.6136,2.6161],[0.5227,2.7399],[0.4195,2.8411],[0.3067,2.9184],[0.1869,2.9705],[0.0628,2.9967],[-0.0628,2.9967],[-0.1869,2.9705],[-0.3067,2.9184],[-0.4195,2.8411],[-0.5227,2.7399],[-0.6136,2.6161],[-0.6901,2.4716],[-0.75,2.3083],[-0.7916,2.1286],[-0.8134,1.935],[-0.8142,1.7303],[-0.7932,1.5173],[-0.75,1.299],[-0.6844,1.0785],[-0.5968,0.8587],[-0.4878,0.6426],[-0.3583,0.4331],[-0.2098,0.233],[-0.044,0.0449],[0.1373,-0.1289],[0.3318,-0.2864],[0.5369,-0.4255],[0.75,-0.5449],[0.9683,-0.6433],[1.1889,-0.72],[1.4086,-0.7744],[1.6246,-0.8065],[1.8338,-0.8165],[2.0333,-0.8051],[2.2203,-0.7732],[2.3921,-0.7222],[2.5463,-0.6538],[2.6807,-0.5698],[2.7935,-0.4725],[2.8828,-0.3642],[2.9476,-0.2475],[2.9869,-0.1252],[3,0]]}],"ariaLabel":"A four-petal rose curve on a polar grid, each petal reaching out to radius 3."}
===OPT===
{"xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":true,"unit":42,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3}],"segments":[{"from":[-3.4,-0.0],"to":[3.4,0.0],"arrows":false},{"from":[-2.9445,-1.7],"to":[2.9445,1.7],"arrows":false},{"from":[-1.7,-2.9445],"to":[1.7,2.9445],"arrows":false},{"from":[-0.0,-3.4],"to":[0.0,3.4],"arrows":false},{"from":[1.7,-2.9445],"to":[-1.7,2.9445],"arrows":false},{"from":[2.9445,-1.7],"to":[-2.9445,1.7],"arrows":false}],"polylines":[{"through":[[0,0],[0.1883,0.0039],[0.3757,0.0157],[0.561,0.0353],[0.7435,0.0624],[0.922,0.0969],[1.0957,0.1384],[1.2636,0.1866],[1.425,0.241],[1.579,0.3012],[1.7248,0.3666],[1.8617,0.4367],[1.9891,0.5107],[2.1063,0.5881],[2.2129,0.6681],[2.3083,0.75],[2.3921,0.833],[2.464,0.9164],[2.5239,0.9993],[2.5714,1.0809],[2.6065,1.1605],[2.6292,1.2372],[2.6395,1.3103],[2.6376,1.3789],[2.6237,1.4424],[2.5981,1.5],[2.561,1.551],[2.513,1.5948],[2.4545,1.6308],[2.3861,1.6584],[2.3083,1.6771],[2.2218,1.6864],[2.1273,1.6861],[2.0256,1.6757],[1.9175,1.6551],[1.8037,1.624],[1.685,1.5824],[1.5625,1.5301],[1.4369,1.4673],[1.309,1.394],[1.1799,1.3104],[1.0504,1.2169],[0.9212,1.1136],[0.7934,1.001],[0.6677,0.8797],[0.5449,0.75],[0.4258,0.6126],[0.3111,0.4682],[0.2015,0.3175],[0.0976,0.1611],[0,0],[-0.0907,-0.1651],[-0.1742,-0.3332],[-0.2499,-0.5035],[-0.3177,-0.6751],[-0.3771,-0.8469],[-0.428,-1.0181],[-0.4702,-1.1876],[-0.5038,-1.3546],[-0.5286,-1.5181],[-0.5449,-1.6771],[-0.5527,-1.8307],[-0.5523,-1.978],[-0.5439,-2.1182],[-0.5278,-2.2505],[-0.5046,-2.374],[-0.4746,-2.4881],[-0.4384,-2.5921],[-0.3965,-2.6854],[-0.3496,-2.7673],[-0.2982,-2.8375],[-0.2431,-2.8956],[-0.185,-2.941],[-0.1246,-2.9737],[-0.0627,-2.9934],[0,-3],[0.0627,-2.9934],[0.1246,-2.9737],[0.185,-2.941],[0.2431,-2.8956],[0.2982,-2.8375],[0.3496,-2.7673],[0.3965,-2.6854],[0.4384,-2.5921],[0.4746,-2.4881],[0.5046,-2.374],[0.5278,-2.2505],[0.5439,-2.1182],[0.5523,-1.978],[0.5527,-1.8307],[0.5449,-1.6771],[0.5286,-1.5181],[0.5038,-1.3546],[0.4702,-1.1876],[0.428,-1.0181],[0.3771,-0.8469],[0.3177,-0.6751],[0.2499,-0.5035],[0.1742,-0.3332],[0.0907,-0.1651],[0,0],[-0.0976,0.1611],[-0.2015,0.3175],[-0.3111,0.4682],[-0.4258,0.6126],[-0.5449,0.75],[-0.6677,0.8797],[-0.7934,1.001],[-0.9212,1.1136],[-1.0504,1.2169],[-1.1799,1.3104],[-1.309,1.394],[-1.4369,1.4673],[-1.5625,1.5301],[-1.685,1.5824],[-1.8037,1.624],[-1.9175,1.6551],[-2.0256,1.6757],[-2.1273,1.6861],[-2.2218,1.6864],[-2.3083,1.6771],[-2.3861,1.6584],[-2.4545,1.6308],[-2.513,1.5948],[-2.561,1.551],[-2.5981,1.5],[-2.6237,1.4424],[-2.6376,1.3789],[-2.6395,1.3103],[-2.6292,1.2372],[-2.6065,1.1605],[-2.5714,1.0809],[-2.5239,0.9993],[-2.464,0.9164],[-2.3921,0.833],[-2.3083,0.75],[-2.2129,0.6681],[-2.1063,0.5881],[-1.9891,0.5107],[-1.8617,0.4367],[-1.7248,0.3666],[-1.579,0.3012],[-1.425,0.241],[-1.2636,0.1866],[-1.0957,0.1384],[-0.922,0.0969],[-0.7435,0.0624],[-0.561,0.0353],[-0.3757,0.0157],[-0.1883,0.0039],[0,0]]}],"ariaLabel":"A three-petal rose curve on a polar grid, rotated from the first, each petal reaching out to radius 3."}
===OPT===
{"xMin":-3.6,"xMax":3.6,"yMin":-3.6,"yMax":3.6,"grid":false,"tickLabels":true,"unit":42,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3}],"segments":[{"from":[-3.4,-0.0],"to":[3.4,0.0],"arrows":false},{"from":[-2.9445,-1.7],"to":[2.9445,1.7],"arrows":false},{"from":[-1.7,-2.9445],"to":[1.7,2.9445],"arrows":false},{"from":[-0.0,-3.4],"to":[0.0,3.4],"arrows":false},{"from":[1.7,-2.9445],"to":[-1.7,2.9445],"arrows":false},{"from":[2.9445,-1.7],"to":[-2.9445,1.7],"arrows":false}],"polylines":[{"through":[[2,0],[1.9956,0.0418],[1.9825,0.0831],[1.9607,0.1234],[1.9304,0.1621],[1.8917,0.1988],[1.8449,0.2331],[1.7902,0.2644],[1.7281,0.2923],[1.6587,0.3164],[1.5827,0.3364],[1.5003,0.3519],[1.4121,0.3626],[1.3187,0.3682],[1.2204,0.3685],[1.118,0.3633],[1.012,0.3524],[0.9031,0.3359],[0.7918,0.3135],[0.6787,0.2853],[0.5646,0.2514],[0.45,0.2118],[0.3357,0.1666],[0.2221,0.1161],[0.11,0.0605],[0,0],[-0.1074,-0.0651],[-0.2116,-0.1343],[-0.3121,-0.2074],[-0.4084,-0.2839],[-0.5,-0.3633],[-0.5864,-0.4451],[-0.6674,-0.5289],[-0.7424,-0.6142],[-0.8112,-0.7002],[-0.8736,-0.7866],[-0.9293,-0.8727],[-0.9782,-0.9579],[-1.0201,-1.0417],[-1.0549,-1.1234],[-1.0827,-1.2024],[-1.1034,-1.2783],[-1.1172,-1.3504],[-1.1241,-1.4182],[-1.1243,-1.4812],[-1.118,-1.5388],[-1.1056,-1.5907],[-1.0872,-1.6363],[-1.0632,-1.6753],[-1.034,-1.7074],[-1,-1.7321],[-0.9616,-1.7492],[-0.9193,-1.7584],[-0.8735,-1.7597],[-0.8248,-1.7528],[-0.7737,-1.7377],[-0.7206,-1.7143],[-0.6662,-1.6826],[-0.6109,-1.6427],[-0.5553,-1.5947],[-0.5,-1.5388],[-0.4454,-1.4753],[-0.3921,-1.4042],[-0.3405,-1.3261],[-0.2911,-1.2412],[-0.2444,-1.1499],[-0.2008,-1.0527],[-0.1607,-0.95],[-0.1244,-0.8424],[-0.0923,-0.7304],[-0.0646,-0.6146],[-0.0416,-0.4956],[-0.0235,-0.374],[-0.0105,-0.2504],[-0.0026,-0.1256],[0,0],[-0.0026,0.1256],[-0.0105,0.2504],[-0.0235,0.374],[-0.0416,0.4956],[-0.0646,0.6146],[-0.0923,0.7304],[-0.1244,0.8424],[-0.1607,0.95],[-0.2008,1.0527],[-0.2444,1.1499],[-0.2911,1.2412],[-0.3405,1.3261],[-0.3921,1.4042],[-0.4454,1.4753],[-0.5,1.5388],[-0.5553,1.5947],[-0.6109,1.6427],[-0.6662,1.6826],[-0.7206,1.7143],[-0.7737,1.7377],[-0.8248,1.7528],[-0.8735,1.7597],[-0.9193,1.7584],[-0.9616,1.7492],[-1,1.7321],[-1.034,1.7074],[-1.0632,1.6753],[-1.0872,1.6363],[-1.1056,1.5907],[-1.118,1.5388],[-1.1243,1.4812],[-1.1241,1.4182],[-1.1172,1.3504],[-1.1034,1.2783],[-1.0827,1.2024],[-1.0549,1.1234],[-1.0201,1.0417],[-0.9782,0.9579],[-0.9293,0.8727],[-0.8736,0.7866],[-0.8112,0.7002],[-0.7424,0.6142],[-0.6674,0.5289],[-0.5864,0.4451],[-0.5,0.3633],[-0.4084,0.2839],[-0.3121,0.2074],[-0.2116,0.1343],[-0.1074,0.0651],[0,0],[0.11,-0.0605],[0.2221,-0.1161],[0.3357,-0.1666],[0.45,-0.2118],[0.5646,-0.2514],[0.6787,-0.2853],[0.7918,-0.3135],[0.9031,-0.3359],[1.012,-0.3524],[1.118,-0.3633],[1.2204,-0.3685],[1.3187,-0.3682],[1.4121,-0.3626],[1.5003,-0.3519],[1.5827,-0.3364],[1.6587,-0.3164],[1.7281,-0.2923],[1.7902,-0.2644],[1.8449,-0.2331],[1.8917,-0.1988],[1.9304,-0.1621],[1.9607,-0.1234],[1.9825,-0.0831],[1.9956,-0.0418],[2,0]]}],"ariaLabel":"A three-petal rose curve on a polar grid, each petal reaching out to radius 2."}
{{< /multiplechoice >}}

#### Investigating the Archimedes’ Spiral

The final polar equation we discuss is the Archimedes’ spiral, named for its discoverer, the Greek mathematician Archimedes (c. 287 BCE–c. 212 BCE), who is credited with numerous discoveries in the fields of geometry and mechanics.

{{< callout type="info" >}}
  **Archimedes’ spiral.** The formula that generates the graph of the Archimedes’ spiral is given by $r=\theta$ for $\theta\ge0$. As $\theta$ increases, $r$ increases at a constant rate in an ever-widening, never-ending, spiraling path. See the graphs below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An Archimedean spiral over the interval 0 to 2 pi, making one turn as it winds outward from the pole.","xMin":-7.2,"xMax":7.2,"yMin":-7.2,"yMax":7.2,"grid":false,"tickLabels":false,"unit":24,"polylines":[{"through":[[0,0],[0.057,0.0033],[0.1135,0.013],[0.1688,0.0292],[0.2225,0.0517],[0.274,0.0805],[0.3228,0.1152],[0.3683,0.1556],[0.4101,0.2016],[0.4476,0.2528],[0.4805,0.3088],[0.5083,0.3693],[0.5306,0.4339],[0.5471,0.5021],[0.5573,0.5735],[0.5611,0.6475],[0.5581,0.7237],[0.5481,0.8016],[0.5309,0.8805],[0.5065,0.9599],[0.4746,1.0392],[0.4352,1.1178],[0.3883,1.1951],[0.334,1.2706],[0.2722,1.3436],[0.2032,1.4135],[0.1271,1.4797],[0.044,1.5416],[-0.0457,1.5987],[-0.1418,1.6504],[-0.2439,1.6962],[-0.3516,1.7354],[-0.4647,1.7678],[-0.5825,1.7927],[-0.7046,1.8098],[-0.8305,1.8185],[-0.9596,1.8187],[-1.0914,1.8098],[-1.2252,1.7917],[-1.3603,1.7641],[-1.4962,1.7267],[-1.6322,1.6795],[-1.7675,1.6222],[-1.9014,1.5548],[-2.0333,1.4773],[-2.1624,1.3897],[-2.2879,1.292],[-2.4092,1.1845],[-2.5255,1.0673],[-2.6361,0.9406],[-2.7403,0.8046],[-2.8374,0.6598],[-2.9267,0.5065],[-3.0076,0.3451],[-3.0794,0.1761],[-3.1416,0],[-3.1935,-0.1826],[-3.2346,-0.3711],[-3.2644,-0.5649],[-3.2825,-0.7633],[-3.2884,-0.9656],[-3.2817,-1.1709],[-3.2621,-1.3786],[-3.2293,-1.5878],[-3.1832,-1.7976],[-3.1234,-2.0073],[-3.0499,-2.2159],[-2.9627,-2.4226],[-2.8616,-2.6264],[-2.7468,-2.8264],[-2.6184,-3.0218],[-2.4765,-3.2116],[-2.3213,-3.3949],[-2.1532,-3.5708],[-1.9725,-3.7384],[-1.7796,-3.8969],[-1.575,-4.0453],[-1.3591,-4.183],[-1.1326,-4.309],[-0.8961,-4.4226],[-0.6503,-4.5231],[-0.3959,-4.6097],[-0.1338,-4.6819],[0.1354,-4.739],[0.4106,-4.7805],[0.691,-4.8058],[0.9755,-4.8145],[1.2633,-4.8062],[1.5533,-4.7805],[1.8444,-4.7373],[2.1356,-4.6762],[2.4257,-4.5972],[2.7137,-4.5001],[2.9984,-4.385],[3.2787,-4.2519],[3.5535,-4.101],[3.8217,-3.9324],[4.082,-3.7464],[4.3334,-3.5434],[4.5749,-3.3238],[4.8052,-3.0881],[5.0234,-2.8369],[5.2284,-2.5707],[5.4193,-2.2902],[5.595,-1.9963],[5.7546,-1.6897],[5.8974,-1.3714],[6.0223,-1.0422],[6.1287,-0.7032],[6.2159,-0.3554],[6.2832,0]]}]}
{{< /apfigure >}}

*(a) $r=\theta$, $[0,2\pi]$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"An Archimedean spiral over the interval 0 to 4 pi, making two turns as it winds outward from the pole, reaching about twice as far from the pole as the one-turn spiral.","xMin":-13.5,"xMax":13.5,"yMin":-13.5,"yMax":13.5,"grid":false,"tickLabels":false,"unit":13,"polylines":[{"through":[[0,0],[0.057,0.0033],[0.1135,0.013],[0.1688,0.0292],[0.2225,0.0517],[0.274,0.0805],[0.3228,0.1152],[0.3683,0.1556],[0.4101,0.2016],[0.4476,0.2528],[0.4805,0.3088],[0.5083,0.3693],[0.5306,0.4339],[0.5471,0.5021],[0.5573,0.5735],[0.5611,0.6475],[0.5581,0.7237],[0.5481,0.8016],[0.5309,0.8805],[0.5065,0.9599],[0.4746,1.0392],[0.4352,1.1178],[0.3883,1.1951],[0.334,1.2706],[0.2722,1.3436],[0.2032,1.4135],[0.1271,1.4797],[0.044,1.5416],[-0.0457,1.5987],[-0.1418,1.6504],[-0.2439,1.6962],[-0.3516,1.7354],[-0.4647,1.7678],[-0.5825,1.7927],[-0.7046,1.8098],[-0.8305,1.8185],[-0.9596,1.8187],[-1.0914,1.8098],[-1.2252,1.7917],[-1.3603,1.7641],[-1.4962,1.7267],[-1.6322,1.6795],[-1.7675,1.6222],[-1.9014,1.5548],[-2.0333,1.4773],[-2.1624,1.3897],[-2.2879,1.292],[-2.4092,1.1845],[-2.5255,1.0673],[-2.6361,0.9406],[-2.7403,0.8046],[-2.8374,0.6598],[-2.9267,0.5065],[-3.0076,0.3451],[-3.0794,0.1761],[-3.1416,0],[-3.1935,-0.1826],[-3.2346,-0.3711],[-3.2644,-0.5649],[-3.2825,-0.7633],[-3.2884,-0.9656],[-3.2817,-1.1709],[-3.2621,-1.3786],[-3.2293,-1.5878],[-3.1832,-1.7976],[-3.1234,-2.0073],[-3.0499,-2.2159],[-2.9627,-2.4226],[-2.8616,-2.6264],[-2.7468,-2.8264],[-2.6184,-3.0218],[-2.4765,-3.2116],[-2.3213,-3.3949],[-2.1532,-3.5708],[-1.9725,-3.7384],[-1.7796,-3.8969],[-1.575,-4.0453],[-1.3591,-4.183],[-1.1326,-4.309],[-0.8961,-4.4226],[-0.6503,-4.5231],[-0.3959,-4.6097],[-0.1338,-4.6819],[0.1354,-4.739],[0.4106,-4.7805],[0.691,-4.8058],[0.9755,-4.8145],[1.2633,-4.8062],[1.5533,-4.7805],[1.8444,-4.7373],[2.1356,-4.6762],[2.4257,-4.5972],[2.7137,-4.5001],[2.9984,-4.385],[3.2787,-4.2519],[3.5535,-4.101],[3.8217,-3.9324],[4.082,-3.7464],[4.3334,-3.5434],[4.5749,-3.3238],[4.8052,-3.0881],[5.0234,-2.8369],[5.2284,-2.5707],[5.4193,-2.2902],[5.595,-1.9963],[5.7546,-1.6897],[5.8974,-1.3714],[6.0223,-1.0422],[6.1287,-0.7032],[6.2159,-0.3554],[6.2832,0],[6.33,0.362],[6.3557,0.7293],[6.36,1.1006],[6.3424,1.4749],[6.3027,1.8506],[6.2406,2.2266],[6.1559,2.6015],[6.0486,2.9739],[5.9187,3.3424],[5.7663,3.7058],[5.5915,4.0625],[5.3947,4.4112],[5.1762,4.7506],[4.9363,5.0793],[4.6757,5.396],[4.3949,5.6994],[4.0946,5.9882],[3.7756,6.2611],[3.4386,6.5169],[3.0847,6.7545],[2.7148,6.9729],[2.3299,7.1708],[1.9313,7.3474],[1.52,7.5016],[1.0974,7.6327],[0.6648,7.7398],[0.2235,7.8222],[-0.2251,7.8793],[-0.6794,7.9105],[-1.1381,7.9154],[-1.5994,7.8935],[-2.062,7.8445],[-2.5241,7.7684],[-2.9842,7.6648],[-3.4406,7.5339],[-3.8918,7.3757],[-4.336,7.1904],[-4.7717,6.9783],[-5.1971,6.7398],[-5.6108,6.4752],[-6.0112,6.1853],[-6.3965,5.8707],[-6.7655,5.5321],[-7.1165,5.1704],[-7.4481,4.7866],[-7.759,4.3817],[-8.0477,3.9568],[-8.3131,3.5131],[-8.5539,3.052],[-8.769,2.5748],[-8.9573,2.0829],[-9.1179,1.5779],[-9.2498,1.0613],[-9.3524,0.5348],[-9.4248,0],[-9.4664,-0.5413],[-9.4768,-1.0874],[-9.4556,-1.6364],[-9.4024,-2.1864],[-9.317,-2.7357],[-9.1995,-3.2824],[-9.0497,-3.8244],[-8.8679,-4.36],[-8.6542,-4.8873],[-8.4092,-5.4042],[-8.1331,-5.9091],[-7.8267,-6.3999],[-7.4907,-6.8749],[-7.1258,-7.3323],[-6.733,-7.7703],[-6.3133,-8.1872],[-5.8678,-8.5815],[-5.3979,-8.9514],[-4.9047,-9.2954],[-4.3898,-9.6122],[-3.8546,-9.9004],[-3.3007,-10.1586],[-2.7299,-10.3857],[-2.1439,-10.5806],[-1.5445,-10.7423],[-0.9336,-10.8699],[-0.3132,-10.9625],[0.3148,-11.0196],[0.9483,-11.0406],[1.5852,-11.025],[2.2233,-10.9725],[2.8606,-10.8829],[3.4949,-10.7562],[4.124,-10.5924],[4.7457,-10.3916],[5.3579,-10.1543],[5.9583,-9.8807],[6.5449,-9.5716],[7.1155,-9.2276],[7.6681,-8.8495],[8.2007,-8.4383],[8.7111,-7.995],[9.1975,-7.5208],[9.6581,-7.017],[10.091,-6.4851],[10.4945,-5.9265],[10.867,-5.3429],[11.2069,-4.7361],[11.5128,-4.1078],[11.7833,-3.4599],[12.0173,-2.7945],[12.2135,-2.1136],[12.371,-1.4194],[12.4888,-0.7141],[12.5664,0]]}]}
{{< /apfigure >}}

*(b) $r=\theta$, $[0,4\pi]$.*

{{< callout type="info" >}}
  **How to:** given an Archimedes’ spiral over $[0,2\pi]$, sketch the graph.

  1. Make a table of values for $r$ and $\theta$ over the given domain.
  2. Plot the points and sketch the graph.
{{< /callout >}}

**Example.** Sketch the graph of $r=\theta$ over $[0,2\pi]$.

**Solution.** As $r$ is equal to $\theta$, the plot of the Archimedes’ spiral begins at the pole at the point $(0,0)$. While the graph hints of symmetry, there is no formal symmetry with regard to passing the symmetry tests. Further, there is no maximum value, unless the domain is restricted.

Create a table such as the one below.

| $\theta$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{2}$ | $\pi$ | $\tfrac{3\pi}{2}$ | $\tfrac{7\pi}{4}$ | $2\pi$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| $r$ | $0.785$ | $1.57$ | $3.14$ | $4.71$ | $5.50$ | $6.28$ |
Notice that the $r$-values are just the decimal form of the angle measured in radians. We can see them on the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of six concentric circles with the Archimedean spiral r equals theta over 0 to 2pi plotted, starting at the pole and spiraling counterclockwise outward, with points marked at (pi/4,pi/4), (pi/2,pi/2), (pi,pi), (7pi/4,7pi/4), and (2pi,2pi).","xMin":-6.8,"xMax":6.8,"yMin":-6.8,"yMax":6.8,"grid":false,"tickLabels":true,"unit":40,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5},{"at":[0,0],"r":6}],"segments":[{"from":[-6.4,-0.0],"to":[6.4,0.0],"arrows":false},{"from":[-5.5426,-3.2],"to":[5.5426,3.2],"arrows":false},{"from":[-3.2,-5.5426],"to":[3.2,5.5426],"arrows":false},{"from":[-0.0,-6.4],"to":[0.0,6.4],"arrows":false},{"from":[3.2,-5.5426],"to":[-3.2,5.5426],"arrows":false},{"from":[5.5426,-3.2],"to":[-5.5426,3.2],"arrows":false}],"polylines":[{"through":[[0,0],[0.057,0.0033],[0.1135,0.013],[0.1688,0.0292],[0.2225,0.0517],[0.274,0.0805],[0.3228,0.1152],[0.3683,0.1556],[0.4101,0.2016],[0.4476,0.2528],[0.4805,0.3088],[0.5083,0.3693],[0.5306,0.4339],[0.5471,0.5021],[0.5573,0.5735],[0.5611,0.6475],[0.5581,0.7237],[0.5481,0.8016],[0.5309,0.8805],[0.5065,0.9599],[0.4746,1.0392],[0.4352,1.1178],[0.3883,1.1951],[0.334,1.2706],[0.2722,1.3436],[0.2032,1.4135],[0.1271,1.4797],[0.044,1.5416],[-0.0457,1.5987],[-0.1418,1.6504],[-0.2439,1.6962],[-0.3516,1.7354],[-0.4647,1.7678],[-0.5825,1.7927],[-0.7046,1.8098],[-0.8305,1.8185],[-0.9596,1.8187],[-1.0914,1.8098],[-1.2252,1.7917],[-1.3603,1.7641],[-1.4962,1.7267],[-1.6322,1.6795],[-1.7675,1.6222],[-1.9014,1.5548],[-2.0333,1.4773],[-2.1624,1.3897],[-2.2879,1.292],[-2.4092,1.1845],[-2.5255,1.0673],[-2.6361,0.9406],[-2.7403,0.8046],[-2.8374,0.6598],[-2.9267,0.5065],[-3.0076,0.3451],[-3.0794,0.1761],[-3.1416,0],[-3.1935,-0.1826],[-3.2346,-0.3711],[-3.2644,-0.5649],[-3.2825,-0.7633],[-3.2884,-0.9656],[-3.2817,-1.1709],[-3.2621,-1.3786],[-3.2293,-1.5878],[-3.1832,-1.7976],[-3.1234,-2.0073],[-3.0499,-2.2159],[-2.9627,-2.4226],[-2.8616,-2.6264],[-2.7468,-2.8264],[-2.6184,-3.0218],[-2.4765,-3.2116],[-2.3213,-3.3949],[-2.1532,-3.5708],[-1.9725,-3.7384],[-1.7796,-3.8969],[-1.575,-4.0453],[-1.3591,-4.183],[-1.1326,-4.309],[-0.8961,-4.4226],[-0.6503,-4.5231],[-0.3959,-4.6097],[-0.1338,-4.6819],[0.1354,-4.739],[0.4106,-4.7805],[0.691,-4.8058],[0.9755,-4.8145],[1.2633,-4.8062],[1.5533,-4.7805],[1.8444,-4.7373],[2.1356,-4.6762],[2.4257,-4.5972],[2.7137,-4.5001],[2.9984,-4.385],[3.2787,-4.2519],[3.5535,-4.101],[3.8217,-3.9324],[4.082,-3.7464],[4.3334,-3.5434],[4.5749,-3.3238],[4.8052,-3.0881],[5.0234,-2.8369],[5.2284,-2.5707],[5.4193,-2.2902],[5.595,-1.9963],[5.7546,-1.6897],[5.8974,-1.3714],[6.0223,-1.0422],[6.1287,-0.7032],[6.2159,-0.3554],[6.2832,0]]}],"points":[{"at":[0.5554,0.5554]},{"at":[0.0,1.5708]},{"at":[-3.1416,0.0]},{"at":[3.8875,-3.8875]},{"at":[6.2832,-0.0]}]}
{{< /apfigure >}}


**Analysis.** The domain of this polar curve is $[0,2\pi]$. In general, however, the domain of this function is $(-\infty,\infty)$. Graphing the equation of the Archimedes’ spiral is rather simple, although the image makes it seem like it would be complex.

{{< fillin
  question="Sketch the graph of $r=-\theta$ over the interval $[0,4\pi]$, shown below. What is the value of $r$ when $\theta=4\pi$?"
  answer="-4\pi"
  answerDisplay="$r=-4\pi$"
  hint="Substitute $\theta=4\pi$ directly into $r=-\theta$."
>}}

{{< apfigure kind="graph" >}}
{"xMin":-13.5,"xMax":13.5,"yMin":-13.5,"yMax":13.5,"grid":false,"tickLabels":false,"unit":13,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5},{"at":[0,0],"r":6},{"at":[0,0],"r":7},{"at":[0,0],"r":8},{"at":[0,0],"r":9},{"at":[0,0],"r":10},{"at":[0,0],"r":11},{"at":[0,0],"r":12},{"at":[0,0],"r":13}],"segments":[{"from":[-13.4,-0.0],"to":[13.4,0.0],"arrows":false},{"from":[-11.6047,-6.7],"to":[11.6047,6.7],"arrows":false},{"from":[-6.7,-11.6047],"to":[6.7,11.6047],"arrows":false},{"from":[-0.0,-13.4],"to":[0.0,13.4],"arrows":false},{"from":[6.7,-11.6047],"to":[-6.7,11.6047],"arrows":false},{"from":[11.6047,-6.7],"to":[-11.6047,6.7],"arrows":false}],"polylines":[{"through":[[0,0],[-0.057,-0.0033],[-0.1135,-0.013],[-0.1688,-0.0292],[-0.2225,-0.0517],[-0.274,-0.0805],[-0.3228,-0.1152],[-0.3683,-0.1556],[-0.4101,-0.2016],[-0.4476,-0.2528],[-0.4805,-0.3088],[-0.5083,-0.3693],[-0.5306,-0.4339],[-0.5471,-0.5021],[-0.5573,-0.5735],[-0.5611,-0.6475],[-0.5581,-0.7237],[-0.5481,-0.8016],[-0.5309,-0.8805],[-0.5065,-0.9599],[-0.4746,-1.0392],[-0.4352,-1.1178],[-0.3883,-1.1951],[-0.334,-1.2706],[-0.2722,-1.3436],[-0.2032,-1.4135],[-0.1271,-1.4797],[-0.044,-1.5416],[0.0457,-1.5987],[0.1418,-1.6504],[0.2439,-1.6962],[0.3516,-1.7354],[0.4647,-1.7678],[0.5825,-1.7927],[0.7046,-1.8098],[0.8305,-1.8185],[0.9596,-1.8187],[1.0914,-1.8098],[1.2252,-1.7917],[1.3603,-1.7641],[1.4962,-1.7267],[1.6322,-1.6795],[1.7675,-1.6222],[1.9014,-1.5548],[2.0333,-1.4773],[2.1624,-1.3897],[2.2879,-1.292],[2.4092,-1.1845],[2.5255,-1.0673],[2.6361,-0.9406],[2.7403,-0.8046],[2.8374,-0.6598],[2.9267,-0.5065],[3.0076,-0.3451],[3.0794,-0.1761],[3.1416,0],[3.1935,0.1826],[3.2346,0.3711],[3.2644,0.5649],[3.2825,0.7633],[3.2884,0.9656],[3.2817,1.1709],[3.2621,1.3786],[3.2293,1.5878],[3.1832,1.7976],[3.1234,2.0073],[3.0499,2.2159],[2.9627,2.4226],[2.8616,2.6264],[2.7468,2.8264],[2.6184,3.0218],[2.4765,3.2116],[2.3213,3.3949],[2.1532,3.5708],[1.9725,3.7384],[1.7796,3.8969],[1.575,4.0453],[1.3591,4.183],[1.1326,4.309],[0.8961,4.4226],[0.6503,4.5231],[0.3959,4.6097],[0.1338,4.6819],[-0.1354,4.739],[-0.4106,4.7805],[-0.691,4.8058],[-0.9755,4.8145],[-1.2633,4.8062],[-1.5533,4.7805],[-1.8444,4.7373],[-2.1356,4.6762],[-2.4257,4.5972],[-2.7137,4.5001],[-2.9984,4.385],[-3.2787,4.2519],[-3.5535,4.101],[-3.8217,3.9324],[-4.082,3.7464],[-4.3334,3.5434],[-4.5749,3.3238],[-4.8052,3.0881],[-5.0234,2.8369],[-5.2284,2.5707],[-5.4193,2.2902],[-5.595,1.9963],[-5.7546,1.6897],[-5.8974,1.3714],[-6.0223,1.0422],[-6.1287,0.7032],[-6.2159,0.3554],[-6.2832,0],[-6.33,-0.362],[-6.3557,-0.7293],[-6.36,-1.1006],[-6.3424,-1.4749],[-6.3027,-1.8506],[-6.2406,-2.2266],[-6.1559,-2.6015],[-6.0486,-2.9739],[-5.9187,-3.3424],[-5.7663,-3.7058],[-5.5915,-4.0625],[-5.3947,-4.4112],[-5.1762,-4.7506],[-4.9363,-5.0793],[-4.6757,-5.396],[-4.3949,-5.6994],[-4.0946,-5.9882],[-3.7756,-6.2611],[-3.4386,-6.5169],[-3.0847,-6.7545],[-2.7148,-6.9729],[-2.3299,-7.1708],[-1.9313,-7.3474],[-1.52,-7.5016],[-1.0974,-7.6327],[-0.6648,-7.7398],[-0.2235,-7.8222],[0.2251,-7.8793],[0.6794,-7.9105],[1.1381,-7.9154],[1.5994,-7.8935],[2.062,-7.8445],[2.5241,-7.7684],[2.9842,-7.6648],[3.4406,-7.5339],[3.8918,-7.3757],[4.336,-7.1904],[4.7717,-6.9783],[5.1971,-6.7398],[5.6108,-6.4752],[6.0112,-6.1853],[6.3965,-5.8707],[6.7655,-5.5321],[7.1165,-5.1704],[7.4481,-4.7866],[7.759,-4.3817],[8.0477,-3.9568],[8.3131,-3.5131],[8.5539,-3.052],[8.769,-2.5748],[8.9573,-2.0829],[9.1179,-1.5779],[9.2498,-1.0613],[9.3524,-0.5348],[9.4248,0],[9.4664,0.5413],[9.4768,1.0874],[9.4556,1.6364],[9.4024,2.1864],[9.317,2.7357],[9.1995,3.2824],[9.0497,3.8244],[8.8679,4.36],[8.6542,4.8873],[8.4092,5.4042],[8.1331,5.9091],[7.8267,6.3999],[7.4907,6.8749],[7.1258,7.3323],[6.733,7.7703],[6.3133,8.1872],[5.8678,8.5815],[5.3979,8.9514],[4.9047,9.2954],[4.3898,9.6122],[3.8546,9.9004],[3.3007,10.1586],[2.7299,10.3857],[2.1439,10.5806],[1.5445,10.7423],[0.9336,10.8699],[0.3132,10.9625],[-0.3148,11.0196],[-0.9483,11.0406],[-1.5852,11.025],[-2.2233,10.9725],[-2.8606,10.8829],[-3.4949,10.7562],[-4.124,10.5924],[-4.7457,10.3916],[-5.3579,10.1543],[-5.9583,9.8807],[-6.5449,9.5716],[-7.1155,9.2276],[-7.6681,8.8495],[-8.2007,8.4383],[-8.7111,7.995],[-9.1975,7.5208],[-9.6581,7.017],[-10.091,6.4851],[-10.4945,5.9265],[-10.867,5.3429],[-11.2069,4.7361],[-11.5128,4.1078],[-11.7833,3.4599],[-12.0173,2.7945],[-12.2135,2.1136],[-12.371,1.4194],[-12.4888,0.7141],[-12.5664,0]]}],"ariaLabel":"A polar grid of thirteen concentric circles with the spiral r equals negative theta plotted over 0 to 4 pi, winding outward through two full turns."}
{{< /apfigure >}}


### Summary of Curves

We have explored a number of seemingly complex polar curves in this section. Each was drawn and sketched above; the table below collects their formulas and conditions in one place.

| Curve | Formulas | Conditions |
| :--- | :--- | :--- |
| Circle | $r=a\sin\theta$ or $r=a\cos\theta$ | — |
| Cardioid | $r=a\pm b\cos\theta$ or $r=a\pm b\sin\theta$ | $a>0$, $b>0$, $\tfrac{a}{b}=1$ |
| One-loop limaçon | $r=a\pm b\cos\theta$ or $r=a\pm b\sin\theta$ | $a>0$, $b>0$, $1<\tfrac{a}{b}<2$ |
| Inner-loop limaçon | $r=a\pm b\cos\theta$ or $r=a\pm b\sin\theta$ | $a>0$, $b>0$, $a<b$ |
| Lemniscate | $r^2=a^2\cos2\theta$ or $r^2=a^2\sin2\theta$ | $a\ne0$ |
| Rose curve | $r=a\cos n\theta$ or $r=a\sin n\theta$ | $a\ne0$; $n$ even gives $2n$ petals, $n$ odd gives $n$ petals |
| Archimedes’ spiral | $r=\theta$ | $\theta\ge0$ |

## Key concepts

- It is easier to graph polar equations if we can test the equations for symmetry with respect to the line $\theta=\tfrac{\pi}{2}$, the polar axis, or the pole.
- There are three symmetry tests that indicate whether the graph of a polar equation will exhibit symmetry. If an equation fails a symmetry test, the graph may or may not exhibit symmetry.
- Polar equations may be graphed by making a table of values for $\theta$ and $r$.
- The maximum value of a polar equation is found by substituting the value of $\theta$ that leads to the maximum value of the trigonometric expression.
- The zeros of a polar equation are found by setting $r=0$ and solving for $\theta$.
- Some formulas that produce the graph of a circle in polar coordinates are given by $r=a\cos\theta$ and $r=a\sin\theta$.
- The formulas that produce the graphs of a cardioid are given by $r=a\pm b\cos\theta$ and $r=a\pm b\sin\theta$, for $a>0$, $b>0$, and $\tfrac{a}{b}=1$.
- The formulas that produce the graphs of a one-loop limaçon are given by $r=a\pm b\cos\theta$ and $r=a\pm b\sin\theta$ for $1<\tfrac{a}{b}<2$.
- The formulas that produce the graphs of an inner-loop limaçon are given by $r=a\pm b\cos\theta$ and $r=a\pm b\sin\theta$ for $a>0$, $b>0$, and $a<b$.
- The formulas that produce the graphs of a lemniscate are given by $r^2=a^2\cos2\theta$ and $r^2=a^2\sin2\theta$, where $a\ne0$.
- The formulas that produce the graphs of rose curves are given by $r=a\cos n\theta$ and $r=a\sin n\theta$, where $a\ne0$; if $n$ is even, there are $2n$ petals, and if $n$ is odd, there are $n$ petals.
- The formula that produces the graph of an Archimedes’ spiral is given by $r=\theta$, $\theta\ge0$.

## Practice

### Test polar equations for symmetry

{{< multiplechoice
  question="Test the equation $r=3-3\cos\theta$ for symmetry. Which symmetries does its graph exhibit?"
  answer="the polar axis only"
  hint="Try $(r,-\theta)$ first: cosine is even, so replacing $\theta$ with $-\theta$ should leave the equation unchanged."
>}}
the pole only
the polar axis, the line $\theta=\tfrac{\pi}{2}$, and the pole
the line $\theta=\tfrac{\pi}{2}$ only
the polar axis only
{{< /multiplechoice >}}

{{< multiplechoice
  question="Test the equation $r=3\sin(2\theta)$ for symmetry. Which symmetries does its graph exhibit?"
  answer="the polar axis, the line $\theta=\tfrac{\pi}{2}$, and the pole"
  hint="Try the alternate polar-axis substitution $(-r,\pi-\theta)$, and the alternate pole substitution $(r,\theta+\pi)$, alongside the standard tests."
>}}
the polar axis, the line $\theta=\tfrac{\pi}{2}$, and the pole
the pole only
none of the three
the line $\theta=\tfrac{\pi}{2}$ only
{{< /multiplechoice >}}

{{< multiplechoice
  question="Test the equation $r=2\theta$ for symmetry. Which symmetries does its graph exhibit?"
  answer="the line $\theta=\tfrac{\pi}{2}$ only"
  hint="Try $(-r,-\theta)$ first."
>}}
the polar axis only
the line $\theta=\tfrac{\pi}{2}$ only
the pole only
the polar axis, the line $\theta=\tfrac{\pi}{2}$, and the pole
{{< /multiplechoice >}}

### Graph polar equations by plotting points

{{< multiplechoice
  question="Graph the polar equation $r=4\sin\theta$. What is the name of the shape?"
  answer="circle"
  hint="This has the form $r=a\sin\theta$."
>}}
cardioid
circle
rose curve
lemniscate
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the polar equation $r=2-2\cos\theta$. What is the name of the shape?"
  answer="cardioid"
  hint="Here $a=2$ and $b=2$, so $\tfrac{a}{b}=1$."
>}}
circle
one-loop limaçon
Archimedes’ spiral
cardioid
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the polar equation $r=1+3\sin\theta$. What is the name of the shape?"
  answer="inner-loop limaçon"
  hint="Here $a=1$ and $b=3$, so $a<b$."
>}}
cardioid
inner-loop limaçon
one-loop limaçon
lemniscate
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the polar equation $r^2=10\cos(2\theta)$. What is the name of the shape?"
  answer="lemniscate"
  hint="This has the form $r^2=a^2\cos2\theta$."
>}}
circle
inner-loop limaçon
rose curve
lemniscate
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the polar equation $r=3\cos(2\theta)$. What is the name of the shape?"
  answer="rose curve"
  hint="This has the form $r=a\cos n\theta$."
>}}
rose curve
Archimedes’ spiral
cardioid
lemniscate
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the polar equation $r=-\theta$. What is the name of the shape?"
  answer="Archimedes’ spiral"
  hint="This has the form $r=\pm\theta$."
>}}
Archimedes’ spiral
one-loop limaçon
rose curve
lemniscate
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which graph below shows $r=7+4\sin\theta$?"
  mode="graph"
  answerIndex="2"
  hint="Here $a=7$ and $b=4$, so $1<\tfrac{a}{b}<2$ — a one-loop limaçon extending in the direction of $+\sin\theta$, which is upward."
>}}
{"ariaLabel":"A one-loop limacon on a polar grid, extending to the right with a shallow dimple near the pole.","xMin":-11.6,"xMax":11.6,"yMin":-11.6,"yMax":11.6,"grid":false,"tickLabels":false,"unit":17,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5},{"at":[0,0],"r":6},{"at":[0,0],"r":7},{"at":[0,0],"r":8},{"at":[0,0],"r":9},{"at":[0,0],"r":10},{"at":[0,0],"r":11}],"segments":[{"from":[-11.4,-0.0],"to":[11.4,0.0],"arrows":false},{"from":[-9.8727,-5.7],"to":[9.8727,5.7],"arrows":false},{"from":[-5.7,-9.8727],"to":[5.7,9.8727],"arrows":false},{"from":[-0.0,-11.4],"to":[0.0,11.4],"arrows":false},{"from":[5.7,-9.8727],"to":[-5.7,9.8727],"arrows":false},{"from":[9.8727,-5.7],"to":[-9.8727,5.7],"arrows":false}],"polylines":[{"through":[[11.0,0.0],[10.9825,0.5312],[10.9301,1.0599],[10.843,1.5833],[10.7219,2.0991],[10.5675,2.6047],[10.3807,3.0976],[10.1625,3.5757],[9.9144,4.0367],[9.6378,4.4784],[9.3343,4.899],[9.0058,5.2967],[8.654,5.6697],[8.2812,6.0166],[7.8893,6.3362],[7.4806,6.6273],[7.0575,6.889],[6.6222,7.1206],[6.1772,7.3217],[5.7247,7.4918],[5.2672,7.6309],[4.8071,7.7391],[4.3466,7.8167],[3.888,7.8641],[3.4335,7.8821],[2.9852,7.8714],[2.5451,7.833],[2.115,7.768],[1.6967,7.6779],[1.2919,7.5639],[0.9019,7.4276],[0.528,7.2706],[0.1715,7.0946],[-0.1668,6.9013],[-0.4861,6.6926],[-0.7856,6.4703],[-1.0651,6.2363],[-1.3242,5.9923],[-1.5629,5.7402],[-1.7812,5.4818],[-1.9793,5.2189],[-2.1576,4.953],[-2.3167,4.6858],[-2.4572,4.4188],[-2.5799,4.1534],[-2.6857,3.8909],[-2.7756,3.6323],[-2.8506,3.3788],[-2.912,3.1311],[-2.9609,2.8902],[-2.9985,2.6564],[-3.0262,2.4304],[-3.0451,2.2124],[-3.0566,2.0025],[-3.0618,1.8008],[-3.0621,1.6071],[-3.0584,1.4212],[-3.052,1.2426],[-3.0438,1.071],[-3.0348,0.9056],[-3.0257,0.7458],[-3.0172,0.5907],[-3.0101,0.4395],[-3.0046,0.2913],[-3.0012,0.1452],[-3.0,0.0],[-3.0012,-0.1452],[-3.0046,-0.2913],[-3.0101,-0.4395],[-3.0172,-0.5907],[-3.0257,-0.7458],[-3.0348,-0.9056],[-3.0438,-1.071],[-3.052,-1.2426],[-3.0584,-1.4212],[-3.0621,-1.6071],[-3.0618,-1.8008],[-3.0566,-2.0025],[-3.0451,-2.2124],[-3.0262,-2.4304],[-2.9985,-2.6564],[-2.9609,-2.8902],[-2.912,-3.1311],[-2.8506,-3.3788],[-2.7756,-3.6323],[-2.6857,-3.8909],[-2.5799,-4.1534],[-2.4572,-4.4188],[-2.3167,-4.6858],[-2.1576,-4.953],[-1.9793,-5.2189],[-1.7812,-5.4818],[-1.5629,-5.7402],[-1.3242,-5.9923],[-1.0651,-6.2363],[-0.7856,-6.4703],[-0.4861,-6.6926],[-0.1668,-6.9013],[0.1715,-7.0946],[0.528,-7.2706],[0.9019,-7.4276],[1.2919,-7.5639],[1.6967,-7.6779],[2.115,-7.768],[2.5451,-7.833],[2.9852,-7.8714],[3.4335,-7.8821],[3.888,-7.8641],[4.3466,-7.8167],[4.8071,-7.7391],[5.2672,-7.6309],[5.7247,-7.4918],[6.1772,-7.3217],[6.6222,-7.1206],[7.0575,-6.889],[7.4806,-6.6273],[7.8893,-6.3362],[8.2812,-6.0166],[8.654,-5.6697],[9.0058,-5.2967],[9.3343,-4.899],[9.6378,-4.4784],[9.9144,-4.0367],[10.1625,-3.5757],[10.3807,-3.0976],[10.5675,-2.6047],[10.7219,-2.0991],[10.843,-1.5833],[10.9301,-1.0599],[10.9825,-0.5312],[11.0,-0.0]]}]}
===OPT===
{"ariaLabel":"A one-loop limacon on a polar grid, extending downward with a shallow dimple near the pole.","xMin":-11.6,"xMax":11.6,"yMin":-11.6,"yMax":11.6,"grid":false,"tickLabels":false,"unit":17,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5},{"at":[0,0],"r":6},{"at":[0,0],"r":7},{"at":[0,0],"r":8},{"at":[0,0],"r":9},{"at":[0,0],"r":10},{"at":[0,0],"r":11}],"segments":[{"from":[-11.4,-0.0],"to":[11.4,0.0],"arrows":false},{"from":[-9.8727,-5.7],"to":[9.8727,5.7],"arrows":false},{"from":[-5.7,-9.8727],"to":[5.7,9.8727],"arrows":false},{"from":[-0.0,-11.4],"to":[0.0,11.4],"arrows":false},{"from":[5.7,-9.8727],"to":[-5.7,9.8727],"arrows":false},{"from":[9.8727,-5.7],"to":[-9.8727,5.7],"arrows":false}],"polylines":[{"through":[[7.0,0.0],[6.7988,0.3289],[6.5831,0.6383],[6.3547,0.9279],[6.1154,1.1972],[5.8671,1.4461],[5.6117,1.6746],[5.3508,1.8827],[5.0862,2.0709],[4.8195,2.2395],[4.5522,2.3892],[4.2859,2.5207],[4.0217,2.6348],[3.761,2.7325],[3.5048,2.8149],[3.2542,2.8829],[3.0098,2.9379],[2.7724,2.981],[2.5424,3.0135],[2.3204,3.0366],[2.1064,3.0517],[1.9006,3.0599],[1.7029,3.0625],[1.5132,3.0607],[1.331,3.0555],[1.156,3.0481],[0.9875,3.0394],[0.825,3.0302],[0.6677,3.0213],[0.5147,3.0135],[0.3651,3.0071],[0.2181,3.0026],[0.0725,3.0003],[-0.0725,3.0003],[-0.2181,3.0026],[-0.3651,3.0071],[-0.5147,3.0135],[-0.6677,3.0213],[-0.825,3.0302],[-0.9875,3.0394],[-1.156,3.0481],[-1.331,3.0555],[-1.5132,3.0607],[-1.7029,3.0625],[-1.9006,3.0599],[-2.1064,3.0517],[-2.3204,3.0366],[-2.5424,3.0135],[-2.7724,2.981],[-3.0098,2.9379],[-3.2542,2.8829],[-3.5048,2.8149],[-3.761,2.7325],[-4.0217,2.6348],[-4.2859,2.5207],[-4.5522,2.3892],[-4.8195,2.2395],[-5.0862,2.0709],[-5.3508,1.8827],[-5.6117,1.6746],[-5.8671,1.4461],[-6.1154,1.1972],[-6.3547,0.9279],[-6.5831,0.6383],[-6.7988,0.3289],[-7.0,0.0],[-7.1849,-0.3475],[-7.3516,-0.7129],[-7.4984,-1.0949],[-7.6238,-1.4925],[-7.726,-1.9043],[-7.8037,-2.3287],[-7.8556,-2.764],[-7.8802,-3.2085],[-7.8768,-3.6601],[-7.8442,-4.1169],[-7.7817,-4.5768],[-7.6889,-5.0374],[-7.5652,-5.4965],[-7.4106,-5.9517],[-7.225,-6.4008],[-7.0086,-6.8413],[-6.7619,-7.2708],[-6.4853,-7.6869],[-6.1799,-8.0875],[-5.8465,-8.4701],[-5.4863,-8.8327],[-5.1008,-9.1731],[-4.6915,-9.4893],[-4.2601,-9.7796],[-3.8085,-10.0421],[-3.3387,-10.2754],[-2.8529,-10.4781],[-2.3533,-10.6488],[-1.8423,-10.7867],[-1.3224,-10.8908],[-0.796,-10.9606],[-0.2658,-10.9956],[0.2658,-10.9956],[0.796,-10.9606],[1.3224,-10.8908],[1.8423,-10.7867],[2.3533,-10.6488],[2.8529,-10.4781],[3.3387,-10.2754],[3.8085,-10.0421],[4.2601,-9.7796],[4.6915,-9.4893],[5.1008,-9.1731],[5.4863,-8.8327],[5.8465,-8.4701],[6.1799,-8.0875],[6.4853,-7.6869],[6.7619,-7.2708],[7.0086,-6.8413],[7.225,-6.4008],[7.4106,-5.9517],[7.5652,-5.4965],[7.6889,-5.0374],[7.7817,-4.5768],[7.8442,-4.1169],[7.8768,-3.6601],[7.8802,-3.2085],[7.8556,-2.764],[7.8037,-2.3287],[7.726,-1.9043],[7.6238,-1.4925],[7.4984,-1.0949],[7.3516,-0.7129],[7.1849,-0.3475],[7.0,-0.0]]}]}
===OPT===
{"ariaLabel":"A one-loop limacon on a polar grid, extending upward with a shallow dimple near the pole.","xMin":-11.6,"xMax":11.6,"yMin":-11.6,"yMax":11.6,"grid":false,"tickLabels":false,"unit":17,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5},{"at":[0,0],"r":6},{"at":[0,0],"r":7},{"at":[0,0],"r":8},{"at":[0,0],"r":9},{"at":[0,0],"r":10},{"at":[0,0],"r":11}],"segments":[{"from":[-11.4,-0.0],"to":[11.4,0.0],"arrows":false},{"from":[-9.8727,-5.7],"to":[9.8727,5.7],"arrows":false},{"from":[-5.7,-9.8727],"to":[5.7,9.8727],"arrows":false},{"from":[-0.0,-11.4],"to":[0.0,11.4],"arrows":false},{"from":[5.7,-9.8727],"to":[-5.7,9.8727],"arrows":false},{"from":[9.8727,-5.7],"to":[-9.8727,5.7],"arrows":false}],"polylines":[{"through":[[7.0,0.0],[7.1849,0.3475],[7.3516,0.7129],[7.4984,1.0949],[7.6238,1.4925],[7.726,1.9043],[7.8037,2.3287],[7.8556,2.764],[7.8802,3.2085],[7.8768,3.6601],[7.8442,4.1169],[7.7817,4.5768],[7.6889,5.0374],[7.5652,5.4965],[7.4106,5.9517],[7.225,6.4008],[7.0086,6.8413],[6.7619,7.2708],[6.4853,7.6869],[6.1799,8.0875],[5.8465,8.4701],[5.4863,8.8327],[5.1008,9.1731],[4.6915,9.4893],[4.2601,9.7796],[3.8085,10.0421],[3.3387,10.2754],[2.8529,10.4781],[2.3533,10.6488],[1.8423,10.7867],[1.3224,10.8908],[0.796,10.9606],[0.2658,10.9956],[-0.2658,10.9956],[-0.796,10.9606],[-1.3224,10.8908],[-1.8423,10.7867],[-2.3533,10.6488],[-2.8529,10.4781],[-3.3387,10.2754],[-3.8085,10.0421],[-4.2601,9.7796],[-4.6915,9.4893],[-5.1008,9.1731],[-5.4863,8.8327],[-5.8465,8.4701],[-6.1799,8.0875],[-6.4853,7.6869],[-6.7619,7.2708],[-7.0086,6.8413],[-7.225,6.4008],[-7.4106,5.9517],[-7.5652,5.4965],[-7.6889,5.0374],[-7.7817,4.5768],[-7.8442,4.1169],[-7.8768,3.6601],[-7.8802,3.2085],[-7.8556,2.764],[-7.8037,2.3287],[-7.726,1.9043],[-7.6238,1.4925],[-7.4984,1.0949],[-7.3516,0.7129],[-7.1849,0.3475],[-7.0,0.0],[-6.7988,-0.3289],[-6.5831,-0.6383],[-6.3547,-0.9279],[-6.1154,-1.1972],[-5.8671,-1.4461],[-5.6117,-1.6746],[-5.3508,-1.8827],[-5.0862,-2.0709],[-4.8195,-2.2395],[-4.5522,-2.3892],[-4.2859,-2.5207],[-4.0217,-2.6348],[-3.761,-2.7325],[-3.5048,-2.8149],[-3.2542,-2.8829],[-3.0098,-2.9379],[-2.7724,-2.981],[-2.5424,-3.0135],[-2.3204,-3.0366],[-2.1064,-3.0517],[-1.9006,-3.0599],[-1.7029,-3.0625],[-1.5132,-3.0607],[-1.331,-3.0555],[-1.156,-3.0481],[-0.9875,-3.0394],[-0.825,-3.0302],[-0.6677,-3.0213],[-0.5147,-3.0135],[-0.3651,-3.0071],[-0.2181,-3.0026],[-0.0725,-3.0003],[0.0725,-3.0003],[0.2181,-3.0026],[0.3651,-3.0071],[0.5147,-3.0135],[0.6677,-3.0213],[0.825,-3.0302],[0.9875,-3.0394],[1.156,-3.0481],[1.331,-3.0555],[1.5132,-3.0607],[1.7029,-3.0625],[1.9006,-3.0599],[2.1064,-3.0517],[2.3204,-3.0366],[2.5424,-3.0135],[2.7724,-2.981],[3.0098,-2.9379],[3.2542,-2.8829],[3.5048,-2.8149],[3.761,-2.7325],[4.0217,-2.6348],[4.2859,-2.5207],[4.5522,-2.3892],[4.8195,-2.2395],[5.0862,-2.0709],[5.3508,-1.8827],[5.6117,-1.6746],[5.8671,-1.4461],[6.1154,-1.1972],[6.3547,-0.9279],[6.5831,-0.6383],[6.7988,-0.3289],[7.0,-0.0]]}]}
===OPT===
{"ariaLabel":"An inner-loop limacon on a polar grid, extending upward with a small loop crossing the pole.","xMin":-16.6,"xMax":16.6,"yMin":-16.6,"yMax":16.6,"grid":false,"tickLabels":false,"unit":12,"circles":[{"at":[0,0],"r":1},{"at":[0,0],"r":2},{"at":[0,0],"r":3},{"at":[0,0],"r":4},{"at":[0,0],"r":5},{"at":[0,0],"r":6},{"at":[0,0],"r":7},{"at":[0,0],"r":8},{"at":[0,0],"r":9},{"at":[0,0],"r":10},{"at":[0,0],"r":11},{"at":[0,0],"r":12},{"at":[0,0],"r":13},{"at":[0,0],"r":14},{"at":[0,0],"r":15},{"at":[0,0],"r":16}],"segments":[{"from":[-16.4,-0.0],"to":[16.4,0.0],"arrows":false},{"from":[-14.2028,-8.2],"to":[14.2028,8.2],"arrows":false},{"from":[-8.2,-14.2028],"to":[8.2,14.2028],"arrows":false},{"from":[-0.0,-16.4],"to":[0.0,16.4],"arrows":false},{"from":[8.2,-14.2028],"to":[-8.2,14.2028],"arrows":false},{"from":[14.2028,-8.2],"to":[-14.2028,8.2],"arrows":false}],"polylines":[{"through":[[7.0,0.0],[7.4261,0.3592],[7.8319,0.7594],[8.2133,1.1993],[8.5665,1.6771],[8.8878,2.1907],[9.1738,2.7375],[9.421,3.3148],[9.6265,3.9195],[9.7875,4.548],[9.9016,5.1968],[9.9666,5.8618],[9.9809,6.5389],[9.9429,7.2239],[9.8517,7.9123],[9.7068,8.5994],[9.5079,9.2808],[9.2553,9.9518],[8.9497,10.6078],[8.5921,11.2442],[8.184,11.8566],[7.7274,12.4406],[7.2245,12.9922],[6.6779,13.5072],[6.0908,13.9821],[5.4663,14.4134],[4.8082,14.798],[4.1203,15.133],[3.4068,15.416],[2.6721,15.645],[1.9207,15.8182],[1.1572,15.9344],[0.3866,15.9927],[-0.3866,15.9927],[-1.1572,15.9344],[-1.9207,15.8182],[-2.6721,15.645],[-3.4068,15.416],[-4.1203,15.133],[-4.8082,14.798],[-5.4663,14.4134],[-6.0908,13.9821],[-6.6779,13.5072],[-7.2245,12.9922],[-7.7274,12.4406],[-8.184,11.8566],[-8.5921,11.2442],[-8.9497,10.6078],[-9.2553,9.9518],[-9.5079,9.2808],[-9.7068,8.5994],[-9.8517,7.9123],[-9.9429,7.2239],[-9.9809,6.5389],[-9.9666,5.8618],[-9.9016,5.1968],[-9.7875,4.548],[-9.6265,3.9195],[-9.421,3.3148],[-9.1738,2.7375],[-8.8878,2.1907],[-8.5665,1.6771],[-8.2133,1.1993],[-7.8319,0.7594],[-7.4261,0.3592],[-7.0,0.0],[-6.5575,-0.3172],[-6.1028,-0.5918],[-5.6398,-0.8235],[-5.1727,-1.0127],[-4.7053,-1.1598],[-4.2417,-1.2657],[-3.7853,-1.3319],[-3.3399,-1.3599],[-2.9087,-1.3516],[-2.4948,-1.3094],[-2.1009,-1.2356],[-1.7297,-1.1332],[-1.3834,-1.0051],[-1.0637,-0.8543],[-0.7724,-0.6843],[-0.5105,-0.4983],[-0.2789,-0.2999],[-0.0781,-0.0926],[0.0918,0.1201],[0.2311,0.3348],[0.3404,0.5481],[0.4207,0.7566],[0.4733,0.9572],[0.4997,1.147],[0.5018,1.3232],[0.4819,1.4832],[0.4424,1.6247],[0.3858,1.7458],[0.3151,1.8448],[0.2332,1.9203],[0.1432,1.9712],[0.0483,1.9968],[-0.0483,1.9968],[-0.1432,1.9712],[-0.2332,1.9203],[-0.3151,1.8448],[-0.3858,1.7458],[-0.4424,1.6247],[-0.4819,1.4832],[-0.5018,1.3232],[-0.4997,1.147],[-0.4733,0.9572],[-0.4207,0.7566],[-0.3404,0.5481],[-0.2311,0.3348],[-0.0918,0.1201],[0.0781,-0.0926],[0.2789,-0.2999],[0.5105,-0.4983],[0.7724,-0.6843],[1.0637,-0.8543],[1.3834,-1.0051],[1.7297,-1.1332],[2.1009,-1.2356],[2.4948,-1.3094],[2.9087,-1.3516],[3.3399,-1.3599],[3.7853,-1.3319],[4.2417,-1.2657],[4.7053,-1.1598],[5.1727,-1.0127],[5.6398,-0.8235],[6.1028,-0.5918],[6.5575,-0.3172],[7.0,-0.0]]}]}
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 8.4: Polar Coordinates: Graphs](https://openstax.org/books/precalculus-2e/pages/8-4-polar-coordinates-graphs) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative solar-system illustration opening the section (Figure 1), a credit photograph with no mathematics beyond its printed planet labels, and reworded the sentence that pointed at it into a self-contained opener. Recreated every instructional figure as an accessible spec-first SVG: the three-panel symmetry-test diagram (a ray into Quadrant I and its mirror image under each of the three substitutions, with the shared angle marked on both rays); the polar-grid-with-marked-points recipe for every worked example (Examples 1–3 and 5–8’s circle, one-loop limaçon, inner-loop limaçon, lemniscate, and both rose curves) and for Example 1’s own rectangular-grid circle; and, for every one of the seven “Formulas for …” boxes, all four (or two, for the rose-curve and spiral boxes, which the source itself shows as two panels) orientation panels the source prints, each sampled from its own printed formula with a representative $a,b$ (or $n$) chosen to differ from the worked example immediately below it so the two figures are not identical. Every curve — circles, cardioids, limaçons, the lemniscate, both rose curves, and the spiral, in every figure on the page — is a `polylines` trace sampled directly from its exact polar formula with `node`, never a smoothed approximation; a lemniscate branch is sampled only over the $\theta$-interval where the radicand is non-negative, tracing both the $+\sqrt{\ }$ and $-\sqrt{\ }$ branches to draw both lobes. The one figure not recreated is the two-panel “Summary of Curves” recap (Figures 20–21): every shape and formula it collects was already drawn in full, with its own points and table, earlier on this page, so the summary is represented as a reference table of formulas and conditions instead of eight more panels of curves already shown. Every retained “Try It” became a real interactive component. The first (test $r=-2\cos\theta$ for symmetry) and the rose-curve Try It after Example 8 (sketch $r=4\sin(2\theta)$) became `multiplechoice` questions on which symmetries or curve family the equation exhibits, since a set of symmetries or a curve name is categorical, never a number. The Try It after Example 2, which bundles a symmetry test with a zero and a maximum for $r=3\cos\theta$, was split into three components — a `multiplechoice` for the symmetry, and two `fillin`s (the zero, asked as the $\theta$-value alone to avoid the pole’s any-angle ambiguity at $r=0$; the maximum, asked as the ordered pair the source itself prints) — since the source bundles three separate results into one prompt. The Try It after Example 5 (sketch $r=3-2\cos\theta$) became a `fillin` for the maximum $\lvert r\rvert$ plus a `multiplechoice` naming the curve family, both independently derived and checked against the source’s printed answer image (a one-loop limaçon extending left); the Try It after Example 9 (sketch $r=3\cos(3\theta)$) became a graph-mode `multiplechoice` recognition question, since the source’s own answer is a rendered graph. The Try It after Example 10 (sketch $r=-\theta$ over $[0,4\pi]$) became a `fillin` asking for $r$ at $\theta=4\pi$, presented beside a recreation of the source’s answer figure. Adapted ten selected end-of-section exercises into a closing Practice block, one group per objective: three symmetry-test exercises (Graphical #7, #9, #11, whose printed answers are “polar axis only,” “all three,” and “$\theta=\tfrac{\pi}{2}$ only” respectively — the polar-axis and pole passes for #9 use the source’s own alternate substitutions $(-r,\pi-\theta)$ and the equivalent $(r,\theta+\pi)$, since the primary substitutions alone do not reduce to the original equation) as `multiplechoice` questions with the symmetry set as the option text; six curve-identification exercises (Graphical #17, #19, #27, #33, #37, #41, spanning all seven named families) as `multiplechoice` questions naming the shape; and Graphical #23 ($r=7+4\sin\theta$, printed answer “one-loop/dimpled limaçon”) as a graph-mode `multiplechoice` — the section’s one recognition-by-graph question, per the corpus convention, with distractors varying the sign (opens downward), the axis (opens right), and the family ($a<b$, an inner-loop limaçon) rather than only the marked point. Every Practice item, Try It, and worked example was independently re-derived — including by running every symmetry substitution, zero, and maximum in Node — rather than read off the source key; the polar-grid points plotted on every recreated figure were computed the same way, never estimated from the printed image.</small>
