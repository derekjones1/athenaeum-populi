---
title: Conic Sections in Polar Coordinates
description: >-
  Identifying a conic from its polar equation by eccentricity, graphing the
  polar equations of ellipses, parabolas, and hyperbolas by plotting key
  points, and writing the polar equation of a conic from its focus,
  eccentricity, and directrix — adapted from OpenStax Precalculus 2e, Section
  10.5.
source_section: "10.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Identify a conic in polar form
- Graph the polar equations of conics
- Define conics in terms of a focus and a directrix
{{< /callout >}}

Most of us are familiar with orbital motion, such as the motion of a planet around the sun or an electron around an atomic nucleus. Within the planetary system, orbits of planets, asteroids, and comets around a larger celestial body are often elliptical. Comets, however, may take on a parabolic or hyperbolic orbit instead. And, in reality, the characteristics of the planets' orbits may vary over time. Each orbit is tied to the location of the celestial body being orbited and the distance and direction of the planet or other object from that body. As a result, we tend to use polar coordinates to represent these orbits.

In an elliptical orbit, the **periapsis** is the point at which the two objects are closest, and the **apoapsis** is the point at which they are farthest apart. Generally, the velocity of the orbiting body tends to increase as it approaches the periapsis and decrease as it approaches the apoapsis. Some objects reach an escape velocity, which results in an infinite orbit. These bodies exhibit either a parabolic or a hyperbolic orbit about a body; the orbiting body breaks free of the celestial body's gravitational pull and fires off into space. Each of these orbits can be modeled by a conic section in the polar coordinate system.

### Identifying a Conic in Polar Form

Any conic may be determined by three characteristics: a single **focus**, a fixed line called the **directrix**, and the ratio of the distances of each to a point on the graph. Consider the parabola shown below, whose focus is at the pole.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola with its focus F at the pole, opening to the right, with a vertical dashed directrix to the left of the pole. A point P(r, θ) on the upper part of the curve is joined to the focus by a segment of length r, which makes an angle θ with the polar axis, and to the directrix by a horizontal segment that meets it at a right angle at the point D. A tick mark on each segment shows the two have the same length, since the eccentricity of a parabola is 1.","xMin":-4,"xMax":6,"yMin":-5,"yMax":5,"grid":false,"tickLabels":false,"unit":40,"polylines":[{"through":[[3.5161,4.2502],[3.2,4.0988],[2.9123,3.9559],[2.6496,3.8208],[2.4091,3.6928],[2.1885,3.5713],[1.9855,3.4557],[1.7985,3.3457],[1.6257,3.2408],[1.4658,3.1406],[1.3176,3.0447],[1.1799,2.9529],[1.0518,2.8648],[0.9324,2.7802],[0.821,2.6989],[0.7169,2.6206],[0.6195,2.5452],[0.5282,2.4724],[0.4426,2.4022],[0.3622,2.3343],[0.2866,2.2686],[0.2154,2.2049],[0.1484,2.1432],[0.0851,2.0834],[0.0255,2.0253],[-0.0309,1.9688],[-0.0842,1.9139],[-0.1347,1.8605],[-0.1824,1.8084],[-0.2277,1.7577],[-0.2705,1.7082],[-0.3112,1.6598],[-0.3498,1.6126],[-0.3865,1.5665],[-0.4213,1.5214],[-0.4545,1.4772],[-0.4859,1.434],[-0.5159,1.3916],[-0.5444,1.35],[-0.5715,1.3093],[-0.5973,1.2692],[-0.6218,1.2299],[-0.6452,1.1913],[-0.6675,1.1533],[-0.6887,1.1159],[-0.7089,1.0791],[-0.7281,1.0429],[-0.7464,1.0072],[-0.7638,0.972],[-0.7804,0.9373],[-0.7961,0.903],[-0.8111,0.8692],[-0.8254,0.8358],[-0.8389,0.8028],[-0.8517,0.7701],[-0.8639,0.7378],[-0.8754,0.7059],[-0.8863,0.6742],[-0.8967,0.6429],[-0.9064,0.6118],[-0.9156,0.5811],[-0.9242,0.5505],[-0.9323,0.5202],[-0.9399,0.4901],[-0.947,0.4603],[-0.9536,0.4306],[-0.9598,0.4011],[-0.9654,0.3718],[-0.9707,0.3426],[-0.9754,0.3135],[-0.9797,0.2846],[-0.9836,0.2559],[-0.9871,0.2272],[-0.9901,0.1986],[-0.9928,0.1701],[-0.995,0.1416],[-0.9968,0.1132],[-0.9982,0.0849],[-0.9992,0.0566],[-0.9998,0.0283],[-1,0],[-0.9998,-0.0283],[-0.9992,-0.0566],[-0.9982,-0.0849],[-0.9968,-0.1132],[-0.995,-0.1416],[-0.9928,-0.1701],[-0.9901,-0.1986],[-0.9871,-0.2272],[-0.9836,-0.2559],[-0.9797,-0.2846],[-0.9754,-0.3135],[-0.9707,-0.3426],[-0.9654,-0.3718],[-0.9598,-0.4011],[-0.9536,-0.4306],[-0.947,-0.4603],[-0.9399,-0.4901],[-0.9323,-0.5202],[-0.9242,-0.5505],[-0.9156,-0.5811],[-0.9064,-0.6118],[-0.8967,-0.6429],[-0.8863,-0.6742],[-0.8754,-0.7059],[-0.8639,-0.7378],[-0.8517,-0.7701],[-0.8389,-0.8028],[-0.8254,-0.8358],[-0.8111,-0.8692],[-0.7961,-0.903],[-0.7804,-0.9373],[-0.7638,-0.972],[-0.7464,-1.0072],[-0.7281,-1.0429],[-0.7089,-1.0791],[-0.6887,-1.1159],[-0.6675,-1.1533],[-0.6452,-1.1913],[-0.6218,-1.2299],[-0.5973,-1.2692],[-0.5715,-1.3093],[-0.5444,-1.35],[-0.5159,-1.3916],[-0.4859,-1.434],[-0.4545,-1.4772],[-0.4213,-1.5214],[-0.3865,-1.5665],[-0.3498,-1.6126],[-0.3112,-1.6598],[-0.2705,-1.7082],[-0.2277,-1.7577],[-0.1824,-1.8084],[-0.1347,-1.8605],[-0.0842,-1.9139],[-0.0309,-1.9688],[0.0255,-2.0253],[0.0851,-2.0834],[0.1484,-2.1432],[0.2154,-2.2049],[0.2866,-2.2686],[0.3622,-2.3343],[0.4426,-2.4022],[0.5282,-2.4724],[0.6195,-2.5452],[0.7169,-2.6206],[0.821,-2.6989],[0.9324,-2.7802],[1.0518,-2.8648],[1.1799,-2.9529],[1.3176,-3.0447],[1.4658,-3.1406],[1.6257,-3.2408],[1.7985,-3.3457],[1.9855,-3.4557],[2.1885,-3.5713],[2.4091,-3.6928],[2.6496,-3.8208],[2.9123,-3.9559],[3.2,-4.0988],[3.5161,-4.2502]]}],"lines":[{"x":-2,"dashed":true}],"segments":[{"from":[0,0],"to":[1.0396,2.8563]},{"from":[1.0396,2.8563],"to":[-2,2.8563]},{"from":[0.3789,1.4795],"to":[0.6608,1.3769]},{"from":[-0.4802,2.7063],"to":[-0.4802,3.0063]},{"from":[-2,3.1063],"to":[-1.75,3.1063]},{"from":[-1.75,3.1063],"to":[-1.75,2.8563]}],"circles":[{"at":[0,0],"r":0.8,"from":0,"to":70}],"points":[{"at":[0,0]},{"at":[1.0396,2.8563],"label":"P(r, θ)","labelSide":"e","labelNudge":[6,-4]},{"at":[-2,2.8563],"label":"D","labelSide":"w"}],"texts":[{"at":[0.95,0.35],"text":"θ"},{"at":[0.25,-0.55],"text":"F, focus at the pole","anchor":"start"},{"at":[-2.15,-4.3],"text":"Directrix","anchor":"end"},{"at":[4.6,-0.5],"text":"Polar axis","anchor":"middle"},{"at":[3.4,-3.4],"text":"r = 2/(1 − cos θ)","anchor":"start"},{"at":[0.62,0.95],"text":"r","anchor":"start"}]}
{{< /apfigure >}}

In The Parabola, we learned how a parabola is defined by the focus (a fixed point) and the directrix (a fixed line). In this section, we will learn how to define any conic in the polar coordinate system in terms of a fixed point, the focus at the pole, and a line, the directrix, which is perpendicular to the polar axis.

If $F$ is a fixed point, the focus, and $D$ is a fixed line, the directrix, then we can let $e$ be a fixed positive number, called the **eccentricity**, which we can define as the ratio of the distances from a point on the graph to the focus and the point on the graph to the directrix. Then the set of all points $P$ such that $e=\tfrac{PF}{PD}$ is a conic. In other words, we can define a conic as the set of all points $P$ with the property that the ratio of the distance from $P$ to $F$ to the distance from $P$ to $D$ is equal to the constant $e$.

For a conic with eccentricity $e$,

- if $0\le e<1$, the conic is an ellipse
- if $e=1$, the conic is a parabola
- if $e>1$, the conic is a hyperbola

With this definition, we may now define a conic in terms of the directrix, $x=\pm p$, the eccentricity $e$, and the angle $\theta$. Thus, each conic may be written as a **polar equation**, an equation written in terms of $r$ and $\theta$.

{{< callout type="info" >}}
  **The Polar Equation for a Conic.** For a conic with a focus at the origin, if the directrix is $x=\pm p$, where $p$ is a positive real number, and the **eccentricity** is a positive real number $e$, the conic has a polar equation

  $$r=\tfrac{ep}{1\pm e\cos\theta}$$

  For a conic with a focus at the origin, if the directrix is $y=\pm p$, where $p$ is a positive real number, and the eccentricity is a positive real number $e$, the conic has a polar equation

  $$r=\tfrac{ep}{1\pm e\sin\theta}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How To:** given the polar equation for a conic, identify the type of conic, the directrix, and the eccentricity.

  1. Multiply the numerator and denominator by the reciprocal of the constant in the denominator to rewrite the equation in standard form.
  2. Identify the eccentricity $e$ as the coefficient of the trigonometric function in the denominator.
  3. Compare $e$ with $1$ to determine the shape of the conic.
  4. Determine the directrix as $x=p$ if cosine is in the denominator and $y=p$ if sine is in the denominator. Set $ep$ equal to the numerator in standard form to solve for $x$ or $y$.
{{< /callout >}}

**Example.** For each of the following equations, identify the conic with focus at the origin, the directrix, and the eccentricity.

a. $r=\tfrac{6}{3+2\sin\theta}$
b. $r=\tfrac{12}{4+5\cos\theta}$
c. $r=\tfrac{7}{2-2\sin\theta}$

**Solution.** For each of the three conics, we will rewrite the equation in standard form. Standard form has a $1$ as the constant in the denominator. Therefore, in all three parts, the first step will be to multiply the numerator and denominator by the reciprocal of the constant of the original equation, $\tfrac1c$, where $c$ is that constant.

a. Multiply the numerator and denominator by $\tfrac13$.

   $$r=\tfrac{6}{3+2\sin\theta}\cdot\tfrac{\left(\tfrac13\right)}{\left(\tfrac13\right)}=\tfrac{6\left(\tfrac13\right)}{3\left(\tfrac13\right)+2\left(\tfrac13\right)\sin\theta}=\tfrac{2}{1+\tfrac23\sin\theta}$$

   Because $\sin\theta$ is in the denominator, the directrix is $y=p$. Comparing to standard form, note that $e=\tfrac23$. Therefore, from the numerator,

   $$
   \begin{array}{lrcl}
   & 2 &=& ep \\[4pt]
   & 2 &=& \tfrac23p \\[4pt]
   & \left(\tfrac32\right)2 &=& \left(\tfrac32\right)\tfrac23p \\[4pt]
   & 3 &=& p
   \end{array}
   $$

   Since $e<1$, the conic is an **ellipse**. The eccentricity is $e=\tfrac23$ and the directrix is $y=3$.

b. Multiply the numerator and denominator by $\tfrac14$.

   $$r=\tfrac{12}{4+5\cos\theta}\cdot\tfrac{\left(\tfrac14\right)}{\left(\tfrac14\right)}=\tfrac{12\left(\tfrac14\right)}{4\left(\tfrac14\right)+5\left(\tfrac14\right)\cos\theta}=\tfrac{3}{1+\tfrac54\cos\theta}$$

   Because $\cos\theta$ is in the denominator, the directrix is $x=p$. Comparing to standard form, $e=\tfrac54$. Therefore, from the numerator,

   $$
   \begin{array}{lrcl}
   & 3 &=& ep \\[4pt]
   & 3 &=& \tfrac54p \\[4pt]
   & \left(\tfrac45\right)3 &=& \left(\tfrac45\right)\tfrac54p \\[4pt]
   & \tfrac{12}{5} &=& p
   \end{array}
   $$

   Since $e>1$, the conic is a **hyperbola**. The eccentricity is $e=\tfrac54$ and the directrix is $x=\tfrac{12}{5}=2.4$.

c. Multiply the numerator and denominator by $\tfrac12$.

   $$r=\tfrac{7}{2-2\sin\theta}\cdot\tfrac{\left(\tfrac12\right)}{\left(\tfrac12\right)}=\tfrac{7\left(\tfrac12\right)}{2\left(\tfrac12\right)-2\left(\tfrac12\right)\sin\theta}=\tfrac{\tfrac72}{1-\sin\theta}$$

   Because sine is in the denominator, the directrix is $y=-p$. Comparing to standard form, $e=1$. Therefore, from the numerator,

   $$
   \begin{array}{lrcl}
   & \tfrac72 &=& ep \\[4pt]
   & \tfrac72 &=& (1)p \\[4pt]
   & \tfrac72 &=& p
   \end{array}
   $$

   Because $e=1$, the conic is a **parabola**. The eccentricity is $e=1$ and the directrix is $y=-\tfrac72=-3.5$.

{{< multiplechoice
  question="Identify the conic with focus at the origin for $r=\tfrac{2}{3-\cos\theta}$."
  mode="text"
  answer="ellipse"
  hint="Multiply the numerator and denominator by $\tfrac13$ to put the denominator's constant at 1, then compare the coefficient of $\cos\theta$ — the eccentricity — with 1."
>}}
parabola
ellipse
hyperbola
{{< /multiplechoice >}}

{{< fillin
  question="Find the eccentricity $e$ of the conic $r=\tfrac{2}{3-\cos\theta}$."
  answer="\frac{1}{3}"
  answerForm="lowest-terms"
  answerDisplay="$\tfrac13$"
  hint="Divide the numerator and denominator by 3; $e$ is the coefficient of $\cos\theta$ in standard form."
>}}

{{< fillin
  question="Find the directrix, as an equation, of the conic $r=\tfrac{2}{3-\cos\theta}$."
  answer="x=-2"
  answerForm="solved:x decimal"
  answerDisplay="$x=-2$"
  hint="In standard form, set $ep$ equal to the numerator and solve for $p$. Cosine in the denominator means the directrix is a vertical line $x=\pm p$, and the sign in the denominator tells you which side of the pole it is on."
>}}

### Graphing the Polar Equations of Conics

When graphing in Cartesian coordinates, each conic section has a unique equation. This is not the case when graphing in polar coordinates. We must use the eccentricity of a conic section to determine which type of curve to graph, and then determine its specific characteristics. The first step is to rewrite the conic in standard form as we have done in the previous example. In other words, we need to rewrite the equation so that the denominator begins with $1$. This enables us to determine $e$ and, therefore, the shape of the curve. The next step is to substitute values for $\theta$ and solve for $r$ to plot a few key points. Setting $\theta$ equal to $0,\tfrac{\pi}{2},\pi,$ and $\tfrac{3\pi}{2}$ provides the vertices so we can create a rough sketch of the graph.

**Example.** Graph $r=\tfrac{5}{3+3\cos\theta}$.

**Solution.** First, we rewrite the conic in standard form by multiplying the numerator and denominator by the reciprocal of $3$, which is $\tfrac13$.

$$r=\tfrac{5}{3+3\cos\theta}=\tfrac{5\left(\tfrac13\right)}{3\left(\tfrac13\right)+3\left(\tfrac13\right)\cos\theta}=\tfrac{\tfrac53}{1+\cos\theta}$$

Because $e=1$, we will graph a **parabola** with a focus at the origin. The function has a $\cos\theta$, and there is an addition sign in the denominator, so the directrix is $x=p$.

$$
\begin{array}{lrcl}
& \tfrac53 &=& ep \\[4pt]
& \tfrac53 &=& (1)p \\[4pt]
& \tfrac53 &=& p
\end{array}
$$

The directrix is $x=\tfrac53$.

Plotting a few key points as in the table below will enable us to see the vertices. See the figure below.

| | A | B | C | D |
| :--- | :--- | :--- | :--- | :--- |
| $\theta$ | $0$ | $\tfrac{\pi}{2}$ | $\pi$ | $\tfrac{3\pi}{2}$ |
| $r=\tfrac{5}{3+3\cos\theta}$ | $\tfrac56\approx0.83$ | $\tfrac53\approx1.67$ | undefined | $\tfrac53\approx1.67$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of five concentric circles at radii 1 through 5, with diagonal spokes, and a parabola with focus F at the pole and directrix x = 5/3, opening to the left. The vertex A is on the polar axis at (5/6, 0). The curve crosses the vertical axis through the pole at B, above, and D, below, each at distance 5/3 from the pole.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":36,"grid":false,"tickLabels":"x","circles":[{"at":[0,0],"r":1,"faint":true},{"at":[0,0],"r":2,"faint":true},{"at":[0,0],"r":3,"faint":true},{"at":[0,0],"r":4,"faint":true},{"at":[0,0],"r":5,"faint":true}],"segments":[{"from":[0,0],"to":[3.5355,3.5355],"faint":true},{"from":[0,0],"to":[-3.5355,3.5355],"faint":true},{"from":[0,0],"to":[-3.5355,-3.5355],"faint":true},{"from":[0,0],"to":[3.5355,-3.5355],"faint":true}],"quadratics":[{"a":-0.3,"c":0.8333,"sideways":true}],"points":[{"at":[0,0],"label":"F","labelSide":"nw"},{"at":[0.8333,0],"label":"A","labelSide":"ne"},{"at":[0,1.6667],"label":"B","labelSide":"ne"},{"at":[0,-1.6667],"label":"D","labelSide":"se"}],"lines":[{"x":1.6667,"dashed":true,"label":"x = 5/3"}]}
{{< /apfigure >}}

**Analysis.** We can check our result with a graphing utility. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same parabola, opening to the left, on a polar grid of five concentric circles with diagonal spokes, unlabeled, as a graphing utility draws it, confirming the hand sketch.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":36,"grid":false,"tickLabels":"x","circles":[{"at":[0,0],"r":1,"faint":true},{"at":[0,0],"r":2,"faint":true},{"at":[0,0],"r":3,"faint":true},{"at":[0,0],"r":4,"faint":true},{"at":[0,0],"r":5,"faint":true}],"segments":[{"from":[0,0],"to":[3.5355,3.5355],"faint":true},{"from":[0,0],"to":[-3.5355,3.5355],"faint":true},{"from":[0,0],"to":[-3.5355,-3.5355],"faint":true},{"from":[0,0],"to":[3.5355,-3.5355],"faint":true}],"quadratics":[{"a":-0.3,"c":0.8333,"sideways":true}]}
{{< /apfigure >}}

**Example.** Graph $r=\tfrac{8}{2-3\sin\theta}$.

**Solution.** First, we rewrite the conic in standard form by multiplying the numerator and denominator by the reciprocal of $2$, which is $\tfrac12$.

$$r=\tfrac{8}{2-3\sin\theta}=\tfrac{8\left(\tfrac12\right)}{2\left(\tfrac12\right)-3\left(\tfrac12\right)\sin\theta}=\tfrac{4}{1-\tfrac32\sin\theta}$$

Because $e=\tfrac32,e>1$, so we will graph a **hyperbola** with a focus at the origin. The function has a $\sin\theta$ term and there is a subtraction sign in the denominator, so the directrix is $y=-p$.

$$
\begin{array}{lrcl}
& 4 &=& ep \\[4pt]
& 4 &=& \left(\tfrac32\right)p \\[4pt]
& 4\left(\tfrac23\right) &=& p \\[4pt]
& \tfrac83 &=& p
\end{array}
$$

The directrix is $y=-\tfrac83$.

Plotting a few key points as in the table below will enable us to see the vertices. See the figure below.

| | A | B | C | D |
| :--- | :--- | :--- | :--- | :--- |
| $\theta$ | $0$ | $\tfrac{\pi}{2}$ | $\pi$ | $\tfrac{3\pi}{2}$ |
| $r=\tfrac{8}{2-3\sin\theta}$ | $4$ | $-8$ | $4$ | $\tfrac85=1.6$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of four concentric circles at radii 2 through 8, with diagonal spokes, and a hyperbola with focus F at the pole and directrix y = -8/3, opening up and down. The near branch has vertex D at (0, -1.6) and passes through A at (4, 0) and C at (-4, 0). The far branch has vertex B at (0, -8), below the directrix.","xMin":-9,"xMax":9,"yMin":-9,"yMax":9,"unit":22,"grid":false,"tickLabels":"x","xTickStep":2,"circles":[{"at":[0,0],"r":2,"faint":true},{"at":[0,0],"r":4,"faint":true},{"at":[0,0],"r":6,"faint":true},{"at":[0,0],"r":8,"faint":true}],"segments":[{"from":[0,0],"to":[5.6569,5.6569],"faint":true},{"from":[0,0],"to":[-5.6569,5.6569],"faint":true},{"from":[0,0],"to":[-5.6569,-5.6569],"faint":true},{"from":[0,0],"to":[5.6569,-5.6569],"faint":true}],"hyperbolas":[{"at":[0,-4.8],"a":3.2,"b":3.5777,"vertical":true}],"points":[{"at":[0,0],"label":"F","labelSide":"ne"},{"at":[4,0],"label":"A","labelSide":"nw"},{"at":[-4,0],"label":"C","labelSide":"ne"},{"at":[0,-1.6],"label":"D","labelSide":"se","labelNudge":[0,-9]},{"at":[0,-8],"label":"B","labelSide":"se"}],"lines":[{"y":-2.6667,"dashed":true,"label":"y = −8/3"}]}
{{< /apfigure >}}

**Example.** Graph $r=\tfrac{10}{5-4\cos\theta}$.

**Solution.** First, we rewrite the conic in standard form by multiplying the numerator and denominator by the reciprocal of $5$, which is $\tfrac15$.

$$r=\tfrac{10}{5-4\cos\theta}=\tfrac{10\left(\tfrac15\right)}{5\left(\tfrac15\right)-4\left(\tfrac15\right)\cos\theta}=\tfrac{2}{1-\tfrac45\cos\theta}$$

Because $e=\tfrac45,e<1$, so we will graph an **ellipse** with a focus at the origin. The function has a $\cos\theta$, and there is a subtraction sign in the denominator, so the directrix is $x=-p$.

$$
\begin{array}{lrcl}
& 2 &=& ep \\[4pt]
& 2 &=& \left(\tfrac45\right)p \\[4pt]
& 2\left(\tfrac54\right) &=& p \\[4pt]
& \tfrac52 &=& p
\end{array}
$$

The directrix is $x=-\tfrac52$.

Plotting a few key points as in the table below will enable us to see the vertices. See the figure below.

| | A | B | C | D |
| :--- | :--- | :--- | :--- | :--- |
| $\theta$ | $0$ | $\tfrac{\pi}{2}$ | $\pi$ | $\tfrac{3\pi}{2}$ |
| $r=\tfrac{10}{5-4\cos\theta}$ | $10$ | $2$ | $\tfrac{10}{9}\approx1.1$ | $2$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"A polar grid of five concentric circles at radii 2 through 10, with diagonal spokes, and an ellipse with focus F at the pole and directrix x = -5/2. The vertices are A at (10, 0), far to the right, and C at (-10/9, 0), just left of the pole. The ellipse crosses the vertical axis through the pole at B, above, and D, below, each at distance 2 from the pole.","xMin":-11,"xMax":11,"yMin":-11,"yMax":11,"unit":20,"grid":false,"tickLabels":"x","xTickStep":4,"circles":[{"at":[0,0],"r":2,"faint":true},{"at":[0,0],"r":4,"faint":true},{"at":[0,0],"r":6,"faint":true},{"at":[0,0],"r":8,"faint":true},{"at":[0,0],"r":10,"faint":true},{"at":[4.4444,0],"rx":5.5556,"ry":3.3333}],"segments":[{"from":[0,0],"to":[7.0711,7.0711],"faint":true},{"from":[0,0],"to":[-7.0711,7.0711],"faint":true},{"from":[0,0],"to":[-7.0711,-7.0711],"faint":true},{"from":[0,0],"to":[7.0711,-7.0711],"faint":true}],"points":[{"at":[0,0],"label":"F","labelSide":"ne"},{"at":[10,0],"label":"A","labelSide":"se"},{"at":[-1.1111,0],"label":"C","labelSide":"nw","labelNudge":[4,0]},{"at":[0,2],"label":"B","labelSide":"nw"},{"at":[0,-2],"label":"D","labelSide":"sw"}],"lines":[{"x":-2.5,"dashed":true,"label":"x = −5/2"}]}
{{< /apfigure >}}

**Analysis.** We can check our result using a graphing utility. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same ellipse, extending mostly to the right of the pole, on a polar grid of five concentric circles with diagonal spokes, unlabeled, as a graphing utility draws it, confirming the hand sketch.","xMin":-11,"xMax":11,"yMin":-11,"yMax":11,"unit":20,"grid":false,"tickLabels":"x","xTickStep":4,"circles":[{"at":[0,0],"r":2,"faint":true},{"at":[0,0],"r":4,"faint":true},{"at":[0,0],"r":6,"faint":true},{"at":[0,0],"r":8,"faint":true},{"at":[0,0],"r":10,"faint":true},{"at":[4.4444,0],"rx":5.5556,"ry":3.3333}],"segments":[{"from":[0,0],"to":[7.0711,7.0711],"faint":true},{"from":[0,0],"to":[-7.0711,7.0711],"faint":true},{"from":[0,0],"to":[-7.0711,-7.0711],"faint":true},{"from":[0,0],"to":[7.0711,-7.0711],"faint":true}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which graph shows $r=\tfrac{2}{4-\cos\theta}$?"
  mode="graph"
  answerIndex="0"
  hint="Rewrite the equation in standard form to read off $e$ and name the conic; the trigonometric function and the sign in the denominator place the directrix. Then evaluate $r$ at $\theta=0$ and $\theta=\pi$ to locate the vertices."
>}}
{"ariaLabel":"An ellipse with focus at the pole, extending from about (0.67, 0) on the right to about (−0.4, 0) on the left, crossing the vertical axis at about (0, 0.5) and (0, −0.5), with a vertical dashed directrix at x = −2 far to the left.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"tickLabels":true,"polylines":[{"through":[[0.6667,0],[0.6661,0.0233],[0.6645,0.0465],[0.6618,0.0696],[0.658,0.0925],[0.6532,0.1152],[0.6474,0.1376],[0.6405,0.1597],[0.6327,0.1814],[0.6239,0.2027],[0.6141,0.2235],[0.6035,0.2438],[0.592,0.2636],[0.5796,0.2827],[0.5665,0.3012],[0.5527,0.3191],[0.5381,0.3362],[0.5229,0.3527],[0.5071,0.3684],[0.4907,0.3834],[0.4738,0.3975],[0.4564,0.4109],[0.4385,0.4235],[0.4203,0.4353],[0.4018,0.4462],[0.3829,0.4564],[0.3638,0.4657],[0.3445,0.4742],[0.325,0.4819],[0.3054,0.4888],[0.2857,0.4949],[0.2659,0.5002],[0.2462,0.5047],[0.2264,0.5085],[0.2067,0.5115],[0.187,0.5138],[0.1674,0.5153],[0.148,0.5162],[0.1287,0.5164],[0.1097,0.5159],[0.0908,0.5148],[0.0721,0.513],[0.0537,0.5106],[0.0355,0.5076],[0.0176,0.5041],[0,0.5],[-0.0173,0.4954],[-0.0343,0.4902],[-0.0509,0.4846],[-0.0672,0.4785],[-0.0832,0.4719],[-0.0988,0.4649],[-0.1141,0.4575],[-0.1289,0.4496],[-0.1434,0.4414],[-0.1575,0.4328],[-0.1713,0.4239],[-0.1846,0.4146],[-0.1975,0.405],[-0.2101,0.3951],[-0.2222,0.3849],[-0.234,0.3744],[-0.2453,0.3637],[-0.2562,0.3527],[-0.2668,0.3415],[-0.2769,0.33],[-0.2866,0.3183],[-0.2959,0.3065],[-0.3048,0.2944],[-0.3134,0.2821],[-0.3215,0.2697],[-0.3292,0.2572],[-0.3365,0.2445],[-0.3434,0.2316],[-0.3499,0.2186],[-0.3559,0.2055],[-0.3616,0.1923],[-0.3669,0.179],[-0.3718,0.1656],[-0.3764,0.1521],[-0.3805,0.1385],[-0.3842,0.1248],[-0.3875,0.1111],[-0.3904,0.0973],[-0.393,0.0835],[-0.3951,0.0697],[-0.3969,0.0558],[-0.3982,0.0419],[-0.3992,0.0279],[-0.3998,0.014],[-0.4,0],[-0.3998,-0.014],[-0.3992,-0.0279],[-0.3982,-0.0419],[-0.3969,-0.0558],[-0.3951,-0.0697],[-0.393,-0.0835],[-0.3904,-0.0973],[-0.3875,-0.1111],[-0.3842,-0.1248],[-0.3805,-0.1385],[-0.3764,-0.1521],[-0.3718,-0.1656],[-0.3669,-0.179],[-0.3616,-0.1923],[-0.3559,-0.2055],[-0.3499,-0.2186],[-0.3434,-0.2316],[-0.3365,-0.2445],[-0.3292,-0.2572],[-0.3215,-0.2697],[-0.3134,-0.2821],[-0.3048,-0.2944],[-0.2959,-0.3065],[-0.2866,-0.3183],[-0.2769,-0.33],[-0.2668,-0.3415],[-0.2562,-0.3527],[-0.2453,-0.3637],[-0.234,-0.3744],[-0.2222,-0.3849],[-0.2101,-0.3951],[-0.1975,-0.405],[-0.1846,-0.4146],[-0.1713,-0.4239],[-0.1575,-0.4328],[-0.1434,-0.4414],[-0.1289,-0.4496],[-0.1141,-0.4575],[-0.0988,-0.4649],[-0.0832,-0.4719],[-0.0672,-0.4785],[-0.0509,-0.4846],[-0.0343,-0.4902],[-0.0173,-0.4954],[0,-0.5],[0.0176,-0.5041],[0.0355,-0.5076],[0.0537,-0.5106],[0.0721,-0.513],[0.0908,-0.5148],[0.1097,-0.5159],[0.1287,-0.5164],[0.148,-0.5162],[0.1674,-0.5153],[0.187,-0.5138],[0.2067,-0.5115],[0.2264,-0.5085],[0.2462,-0.5047],[0.2659,-0.5002],[0.2857,-0.4949],[0.3054,-0.4888],[0.325,-0.4819],[0.3445,-0.4742],[0.3638,-0.4657],[0.3829,-0.4564],[0.4018,-0.4462],[0.4203,-0.4353],[0.4385,-0.4235],[0.4564,-0.4109],[0.4738,-0.3975],[0.4907,-0.3834],[0.5071,-0.3684],[0.5229,-0.3527],[0.5381,-0.3362],[0.5527,-0.3191],[0.5665,-0.3012],[0.5796,-0.2827],[0.592,-0.2636],[0.6035,-0.2438],[0.6141,-0.2235],[0.6239,-0.2027],[0.6327,-0.1814],[0.6405,-0.1597],[0.6474,-0.1376],[0.6532,-0.1152],[0.658,-0.0925],[0.6618,-0.0696],[0.6645,-0.0465],[0.6661,-0.0233],[0.6667,0]]}],"points":[{"at":[0,0]}],"lines":[{"x":-2,"dashed":true,"label":"x = −2"}],"unit":48}
===OPT===
{"ariaLabel":"An ellipse with focus at the pole, extending from about (0, 0.67) above to about (0, −0.4) below, crossing the horizontal axis at about (0.5, 0) and (−0.5, 0), with a horizontal dashed directrix at y = −2 far below.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"tickLabels":true,"polylines":[{"through":[[0.5,0],[0.5041,0.0176],[0.5076,0.0355],[0.5106,0.0537],[0.513,0.0721],[0.5148,0.0908],[0.5159,0.1097],[0.5164,0.1287],[0.5162,0.148],[0.5153,0.1674],[0.5138,0.187],[0.5115,0.2067],[0.5085,0.2264],[0.5047,0.2462],[0.5002,0.2659],[0.4949,0.2857],[0.4888,0.3054],[0.4819,0.325],[0.4742,0.3445],[0.4657,0.3638],[0.4564,0.3829],[0.4462,0.4018],[0.4353,0.4203],[0.4235,0.4385],[0.4109,0.4564],[0.3975,0.4738],[0.3834,0.4907],[0.3684,0.5071],[0.3527,0.5229],[0.3362,0.5381],[0.3191,0.5527],[0.3012,0.5665],[0.2827,0.5796],[0.2636,0.592],[0.2438,0.6035],[0.2235,0.6141],[0.2027,0.6239],[0.1814,0.6327],[0.1597,0.6405],[0.1376,0.6474],[0.1152,0.6532],[0.0925,0.658],[0.0696,0.6618],[0.0465,0.6645],[0.0233,0.6661],[0,0.6667],[-0.0233,0.6661],[-0.0465,0.6645],[-0.0696,0.6618],[-0.0925,0.658],[-0.1152,0.6532],[-0.1376,0.6474],[-0.1597,0.6405],[-0.1814,0.6327],[-0.2027,0.6239],[-0.2235,0.6141],[-0.2438,0.6035],[-0.2636,0.592],[-0.2827,0.5796],[-0.3012,0.5665],[-0.3191,0.5527],[-0.3362,0.5381],[-0.3527,0.5229],[-0.3684,0.5071],[-0.3834,0.4907],[-0.3975,0.4738],[-0.4109,0.4564],[-0.4235,0.4385],[-0.4353,0.4203],[-0.4462,0.4018],[-0.4564,0.3829],[-0.4657,0.3638],[-0.4742,0.3445],[-0.4819,0.325],[-0.4888,0.3054],[-0.4949,0.2857],[-0.5002,0.2659],[-0.5047,0.2462],[-0.5085,0.2264],[-0.5115,0.2067],[-0.5138,0.187],[-0.5153,0.1674],[-0.5162,0.148],[-0.5164,0.1287],[-0.5159,0.1097],[-0.5148,0.0908],[-0.513,0.0721],[-0.5106,0.0537],[-0.5076,0.0355],[-0.5041,0.0176],[-0.5,0],[-0.4954,-0.0173],[-0.4902,-0.0343],[-0.4846,-0.0509],[-0.4785,-0.0672],[-0.4719,-0.0832],[-0.4649,-0.0988],[-0.4575,-0.1141],[-0.4496,-0.1289],[-0.4414,-0.1434],[-0.4328,-0.1575],[-0.4239,-0.1713],[-0.4146,-0.1846],[-0.405,-0.1975],[-0.3951,-0.2101],[-0.3849,-0.2222],[-0.3744,-0.234],[-0.3637,-0.2453],[-0.3527,-0.2562],[-0.3415,-0.2668],[-0.33,-0.2769],[-0.3183,-0.2866],[-0.3065,-0.2959],[-0.2944,-0.3048],[-0.2821,-0.3134],[-0.2697,-0.3215],[-0.2572,-0.3292],[-0.2445,-0.3365],[-0.2316,-0.3434],[-0.2186,-0.3499],[-0.2055,-0.3559],[-0.1923,-0.3616],[-0.179,-0.3669],[-0.1656,-0.3718],[-0.1521,-0.3764],[-0.1385,-0.3805],[-0.1248,-0.3842],[-0.1111,-0.3875],[-0.0973,-0.3904],[-0.0835,-0.393],[-0.0697,-0.3951],[-0.0558,-0.3969],[-0.0419,-0.3982],[-0.0279,-0.3992],[-0.014,-0.3998],[0,-0.4],[0.014,-0.3998],[0.0279,-0.3992],[0.0419,-0.3982],[0.0558,-0.3969],[0.0697,-0.3951],[0.0835,-0.393],[0.0973,-0.3904],[0.1111,-0.3875],[0.1248,-0.3842],[0.1385,-0.3805],[0.1521,-0.3764],[0.1656,-0.3718],[0.179,-0.3669],[0.1923,-0.3616],[0.2055,-0.3559],[0.2186,-0.3499],[0.2316,-0.3434],[0.2445,-0.3365],[0.2572,-0.3292],[0.2697,-0.3215],[0.2821,-0.3134],[0.2944,-0.3048],[0.3065,-0.2959],[0.3183,-0.2866],[0.33,-0.2769],[0.3415,-0.2668],[0.3527,-0.2562],[0.3637,-0.2453],[0.3744,-0.234],[0.3849,-0.2222],[0.3951,-0.2101],[0.405,-0.1975],[0.4146,-0.1846],[0.4239,-0.1713],[0.4328,-0.1575],[0.4414,-0.1434],[0.4496,-0.1289],[0.4575,-0.1141],[0.4649,-0.0988],[0.4719,-0.0832],[0.4785,-0.0672],[0.4846,-0.0509],[0.4902,-0.0343],[0.4954,-0.0173],[0.5,0]]}],"points":[{"at":[0,0]}],"lines":[{"y":-2,"dashed":true,"label":"y = −2"}],"unit":48}
===OPT===
{"ariaLabel":"An ellipse with focus at the pole, extending from about (0.4, 0) on the right to about (−0.67, 0) on the left, crossing the vertical axis at about (0, 0.5) and (0, −0.5), with a vertical dashed directrix at x = 2 far to the right.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"tickLabels":true,"polylines":[{"through":[[0.4,0],[0.3998,0.014],[0.3992,0.0279],[0.3982,0.0419],[0.3969,0.0558],[0.3951,0.0697],[0.393,0.0835],[0.3904,0.0973],[0.3875,0.1111],[0.3842,0.1248],[0.3805,0.1385],[0.3764,0.1521],[0.3718,0.1656],[0.3669,0.179],[0.3616,0.1923],[0.3559,0.2055],[0.3499,0.2186],[0.3434,0.2316],[0.3365,0.2445],[0.3292,0.2572],[0.3215,0.2697],[0.3134,0.2821],[0.3048,0.2944],[0.2959,0.3065],[0.2866,0.3183],[0.2769,0.33],[0.2668,0.3415],[0.2562,0.3527],[0.2453,0.3637],[0.234,0.3744],[0.2222,0.3849],[0.2101,0.3951],[0.1975,0.405],[0.1846,0.4146],[0.1713,0.4239],[0.1575,0.4328],[0.1434,0.4414],[0.1289,0.4496],[0.1141,0.4575],[0.0988,0.4649],[0.0832,0.4719],[0.0672,0.4785],[0.0509,0.4846],[0.0343,0.4902],[0.0173,0.4954],[0,0.5],[-0.0176,0.5041],[-0.0355,0.5076],[-0.0537,0.5106],[-0.0721,0.513],[-0.0908,0.5148],[-0.1097,0.5159],[-0.1287,0.5164],[-0.148,0.5162],[-0.1674,0.5153],[-0.187,0.5138],[-0.2067,0.5115],[-0.2264,0.5085],[-0.2462,0.5047],[-0.2659,0.5002],[-0.2857,0.4949],[-0.3054,0.4888],[-0.325,0.4819],[-0.3445,0.4742],[-0.3638,0.4657],[-0.3829,0.4564],[-0.4018,0.4462],[-0.4203,0.4353],[-0.4385,0.4235],[-0.4564,0.4109],[-0.4738,0.3975],[-0.4907,0.3834],[-0.5071,0.3684],[-0.5229,0.3527],[-0.5381,0.3362],[-0.5527,0.3191],[-0.5665,0.3012],[-0.5796,0.2827],[-0.592,0.2636],[-0.6035,0.2438],[-0.6141,0.2235],[-0.6239,0.2027],[-0.6327,0.1814],[-0.6405,0.1597],[-0.6474,0.1376],[-0.6532,0.1152],[-0.658,0.0925],[-0.6618,0.0696],[-0.6645,0.0465],[-0.6661,0.0233],[-0.6667,0],[-0.6661,-0.0233],[-0.6645,-0.0465],[-0.6618,-0.0696],[-0.658,-0.0925],[-0.6532,-0.1152],[-0.6474,-0.1376],[-0.6405,-0.1597],[-0.6327,-0.1814],[-0.6239,-0.2027],[-0.6141,-0.2235],[-0.6035,-0.2438],[-0.592,-0.2636],[-0.5796,-0.2827],[-0.5665,-0.3012],[-0.5527,-0.3191],[-0.5381,-0.3362],[-0.5229,-0.3527],[-0.5071,-0.3684],[-0.4907,-0.3834],[-0.4738,-0.3975],[-0.4564,-0.4109],[-0.4385,-0.4235],[-0.4203,-0.4353],[-0.4018,-0.4462],[-0.3829,-0.4564],[-0.3638,-0.4657],[-0.3445,-0.4742],[-0.325,-0.4819],[-0.3054,-0.4888],[-0.2857,-0.4949],[-0.2659,-0.5002],[-0.2462,-0.5047],[-0.2264,-0.5085],[-0.2067,-0.5115],[-0.187,-0.5138],[-0.1674,-0.5153],[-0.148,-0.5162],[-0.1287,-0.5164],[-0.1097,-0.5159],[-0.0908,-0.5148],[-0.0721,-0.513],[-0.0537,-0.5106],[-0.0355,-0.5076],[-0.0176,-0.5041],[0,-0.5],[0.0173,-0.4954],[0.0343,-0.4902],[0.0509,-0.4846],[0.0672,-0.4785],[0.0832,-0.4719],[0.0988,-0.4649],[0.1141,-0.4575],[0.1289,-0.4496],[0.1434,-0.4414],[0.1575,-0.4328],[0.1713,-0.4239],[0.1846,-0.4146],[0.1975,-0.405],[0.2101,-0.3951],[0.2222,-0.3849],[0.234,-0.3744],[0.2453,-0.3637],[0.2562,-0.3527],[0.2668,-0.3415],[0.2769,-0.33],[0.2866,-0.3183],[0.2959,-0.3065],[0.3048,-0.2944],[0.3134,-0.2821],[0.3215,-0.2697],[0.3292,-0.2572],[0.3365,-0.2445],[0.3434,-0.2316],[0.3499,-0.2186],[0.3559,-0.2055],[0.3616,-0.1923],[0.3669,-0.179],[0.3718,-0.1656],[0.3764,-0.1521],[0.3805,-0.1385],[0.3842,-0.1248],[0.3875,-0.1111],[0.3904,-0.0973],[0.393,-0.0835],[0.3951,-0.0697],[0.3969,-0.0558],[0.3982,-0.0419],[0.3992,-0.0279],[0.3998,-0.014],[0.4,0]]}],"points":[{"at":[0,0]}],"lines":[{"x":2,"dashed":true,"label":"x = 2"}],"unit":48}
===OPT===
{"ariaLabel":"An ellipse with focus at the pole, extending from about (2, 0) on the right to about (−0.29, 0) on the left, crossing the vertical axis at about (0, 0.5) and (0, −0.5), with a vertical dashed directrix at x = −2/3, to the left of the ellipse.","xMin":-3,"xMax":3,"yMin":-3,"yMax":3,"tickLabels":true,"polylines":[{"through":[[2,0],[1.9951,0.0697],[1.9807,0.1385],[1.9569,0.2057],[1.9244,0.2705],[1.8838,0.3322],[1.8359,0.3902],[1.7818,0.4443],[1.7224,0.4939],[1.6586,0.5389],[1.5915,0.5792],[1.5219,0.6149],[1.4508,0.6459],[1.3789,0.6725],[1.307,0.6949],[1.2355,0.7133],[1.165,0.728],[1.096,0.7392],[1.0287,0.7474],[0.9634,0.7527],[0.9002,0.7554],[0.8394,0.7558],[0.7811,0.7543],[0.7251,0.7509],[0.6716,0.7459],[0.6206,0.7396],[0.5719,0.732],[0.5256,0.7234],[0.4816,0.7139],[0.4397,0.7037],[0.4,0.6928],[0.3623,0.6814],[0.3265,0.6695],[0.2926,0.6573],[0.2605,0.6447],[0.23,0.632],[0.2011,0.619],[0.1737,0.6059],[0.1478,0.5927],[0.1232,0.5794],[0.0998,0.5661],[0.0777,0.5528],[0.0567,0.5396],[0.0368,0.5263],[0.0179,0.5131],[0,0.5],[-0.017,0.4869],[-0.0331,0.474],[-0.0485,0.4611],[-0.063,0.4483],[-0.0768,0.4357],[-0.0899,0.4231],[-0.1024,0.4106],[-0.1142,0.3983],[-0.1254,0.3861],[-0.1361,0.3739],[-0.1462,0.3619],[-0.1558,0.35],[-0.165,0.3382],[-0.1736,0.3265],[-0.1818,0.3149],[-0.1896,0.3034],[-0.197,0.292],[-0.204,0.2807],[-0.2106,0.2695],[-0.2169,0.2584],[-0.2228,0.2474],[-0.2284,0.2365],[-0.2336,0.2256],[-0.2386,0.2148],[-0.2433,0.2041],[-0.2476,0.1935],[-0.2518,0.1829],[-0.2556,0.1724],[-0.2592,0.162],[-0.2625,0.1516],[-0.2656,0.1412],[-0.2684,0.1309],[-0.2711,0.1207],[-0.2734,0.1105],[-0.2756,0.1003],[-0.2776,0.0902],[-0.2793,0.0801],[-0.2808,0.07],[-0.2821,0.06],[-0.2832,0.0499],[-0.2841,0.0399],[-0.2848,0.0299],[-0.2853,0.02],[-0.2856,0.01],[-0.2857,0],[-0.2856,-0.01],[-0.2853,-0.02],[-0.2848,-0.0299],[-0.2841,-0.0399],[-0.2832,-0.0499],[-0.2821,-0.06],[-0.2808,-0.07],[-0.2793,-0.0801],[-0.2776,-0.0902],[-0.2756,-0.1003],[-0.2734,-0.1105],[-0.2711,-0.1207],[-0.2684,-0.1309],[-0.2656,-0.1412],[-0.2625,-0.1516],[-0.2592,-0.162],[-0.2556,-0.1724],[-0.2518,-0.1829],[-0.2476,-0.1935],[-0.2433,-0.2041],[-0.2386,-0.2148],[-0.2336,-0.2256],[-0.2284,-0.2365],[-0.2228,-0.2474],[-0.2169,-0.2584],[-0.2106,-0.2695],[-0.204,-0.2807],[-0.197,-0.292],[-0.1896,-0.3034],[-0.1818,-0.3149],[-0.1736,-0.3265],[-0.165,-0.3382],[-0.1558,-0.35],[-0.1462,-0.3619],[-0.1361,-0.3739],[-0.1254,-0.3861],[-0.1142,-0.3983],[-0.1024,-0.4106],[-0.0899,-0.4231],[-0.0768,-0.4357],[-0.063,-0.4483],[-0.0485,-0.4611],[-0.0331,-0.474],[-0.017,-0.4869],[0,-0.5],[0.0179,-0.5131],[0.0368,-0.5263],[0.0567,-0.5396],[0.0777,-0.5528],[0.0998,-0.5661],[0.1232,-0.5794],[0.1478,-0.5927],[0.1737,-0.6059],[0.2011,-0.619],[0.23,-0.632],[0.2605,-0.6447],[0.2926,-0.6573],[0.3265,-0.6695],[0.3623,-0.6814],[0.4,-0.6928],[0.4397,-0.7037],[0.4816,-0.7139],[0.5256,-0.7234],[0.5719,-0.732],[0.6206,-0.7396],[0.6716,-0.7459],[0.7251,-0.7509],[0.7811,-0.7543],[0.8394,-0.7558],[0.9002,-0.7554],[0.9634,-0.7527],[1.0287,-0.7474],[1.096,-0.7392],[1.165,-0.728],[1.2355,-0.7133],[1.307,-0.6949],[1.3789,-0.6725],[1.4508,-0.6459],[1.5219,-0.6149],[1.5915,-0.5792],[1.6586,-0.5389],[1.7224,-0.4939],[1.7818,-0.4443],[1.8359,-0.3902],[1.8838,-0.3322],[1.9244,-0.2705],[1.9569,-0.2057],[1.9807,-0.1385],[1.9951,-0.0697],[2,0]]}],"points":[{"at":[0,0]}],"lines":[{"x":-0.6667,"dashed":true,"label":"x = −2/3"}],"unit":48}
{{< /multiplechoice >}}

### Defining Conics in Terms of a Focus and a Directrix

So far we have been using polar equations of conics to describe and graph the curve. Now we will work in reverse; we will use information about the origin, eccentricity, and directrix to determine the polar equation.

{{< callout type="info" >}}
  **How To:** given the focus, eccentricity, and directrix of a conic, determine the polar equation.

  1. Determine whether the directrix is horizontal or vertical. If the directrix is given in terms of $y$, we use the general polar form in terms of sine. If the directrix is given in terms of $x$, we use the general polar form in terms of cosine.
  2. Determine the sign in the denominator. If $p<0$, use subtraction. If $p>0$, use addition.
  3. Write the coefficient of the trigonometric function as the given eccentricity.
  4. Write the absolute value of $p$ in the numerator, and simplify the equation.
{{< /callout >}}

**Example.** Find the polar form of the conic given a focus at the origin, $e=3$, and directrix $y=-2$.

**Solution.** The directrix is $y=-p$, so we know the trigonometric function in the denominator is sine.

Because $y=-2,-2<0$, so we know there is a subtraction sign in the denominator. We use the standard form of

$$r=\tfrac{ep}{1-e\sin\theta}$$

and $e=3$ and $\lvert -2\rvert=2=p$.

Therefore,

$$
\begin{array}{lrcl}
& r &=& \tfrac{(3)(2)}{1-3\sin\theta} \\[4pt]
& r &=& \tfrac{6}{1-3\sin\theta}
\end{array}
$$

**Example.** Find the polar form of a conic given a focus at the origin, $e=\tfrac35$, and directrix $x=4$.

**Solution.** Because the directrix is $x=p$, we know the function in the denominator is cosine. Because $x=4,4>0$, so we know there is an addition sign in the denominator. We use the standard form of

$$r=\tfrac{ep}{1+e\cos\theta}$$

and $e=\tfrac35$ and $|4|=4=p$.

Therefore,

$$
\begin{array}{lrcl}
& r &=& \tfrac{\left(\tfrac35\right)(4)}{1+\tfrac35\cos\theta} \\[10pt]
& r &=& \tfrac{\tfrac{12}{5}}{1+\tfrac35\cos\theta} \\[10pt]
& r &=& \tfrac{\tfrac{12}{5}}{1\left(\tfrac55\right)+\tfrac35\cos\theta} \\[10pt]
& r &=& \tfrac{\tfrac{12}{5}}{\tfrac55+\tfrac35\cos\theta} \\[10pt]
& r &=& \tfrac{12}{5}\cdot\tfrac{5}{5+3\cos\theta} \\[10pt]
& r &=& \tfrac{12}{5+3\cos\theta}
\end{array}
$$

{{< fillin
  question="Find the polar form of the conic given a focus at the origin, $e=1$, and directrix $x=-1$."
  answer="r=\frac{1}{1-\cos\theta}"
  answerForm="solved:r no-like-terms"
  answerDisplay="$r=\tfrac{1}{1-\cos\theta}$"
  hint="Follow the How To above: the variable in the directrix picks sine or cosine, the sign of its constant picks the sign in the denominator, $e$ is the coefficient of the trigonometric function, and the numerator is $e$ times the directrix's distance from the pole."
>}}

**Example.** Convert the conic $r=\tfrac{1}{5-5\sin\theta}$ to rectangular form.

**Solution.** We will rearrange the formula to use the identities $r=\sqrt{x^2+y^2},x=r\cos\theta,$ and $y=r\sin\theta$.

$$
\begin{array}{lrcl}
& r &=& \tfrac{1}{5-5\sin\theta} \\[4pt]
\text{Eliminate the fraction.} & r(5-5\sin\theta) &=& 1 \\[4pt]
\text{Distribute.} & 5r-5r\sin\theta &=& 1 \\[4pt]
\text{Isolate }5r. & 5r &=& 1+5r\sin\theta \\[4pt]
\text{Square both sides.} & 25r^2 &=& (1+5r\sin\theta)^2 \\[4pt]
\text{Substitute }r=\sqrt{x^2+y^2}\text{ and }y=r\sin\theta. & 25(x^2+y^2) &=& (1+5y)^2 \\[4pt]
\text{Distribute and use FOIL.} & 25x^2+25y^2 &=& 1+10y+25y^2 \\[4pt]
\text{Rearrange terms and set equal to 1.} & 25x^2-10y &=& 1
\end{array}
$$

{{< fillin
  question="Convert the conic $r=\tfrac{2}{1+2\cos\theta}$ to rectangular form."
  answer="4-8x+3x^2-y^2=0"
  answerForm="expanded no-like-terms"
  answerDisplay="$4-8x+3x^2-y^2=0$"
  hint="Work as in the example above: clear the fraction and distribute, replace $r\cos\theta$ with $x$, isolate the term in $r$, square both sides, replace $r^2$ with $x^2+y^2$, and collect every term on one side."
>}}

{{< callout type="info" >}}
  **Media.** Access these online resources for additional instruction and practice with conics in polar coordinates.

  - Polar Equations of Conic Sections
  - Graphing Polar Equations of Conics - 1
  - Graphing Polar Equations of Conics - 2
{{< /callout >}}

## Key concepts

- Any conic may be determined by a single focus, the corresponding eccentricity, and the directrix. We can also define a conic in terms of a fixed point, the focus at the pole, and a line, the directrix, which is perpendicular to the polar axis.
- A conic is the set of all points $e=\tfrac{PF}{PD}$, where eccentricity $e$ is a positive real number. Each conic may be written in terms of its polar equation.
- The polar equations of conics can be graphed.
- Conics can be defined in terms of a focus, a directrix, and eccentricity.
- We can use the identities $r=\sqrt{x^2+y^2},x=r\cos\theta,$ and $y=r\sin\theta$ to convert the equation for a conic from polar to rectangular form.

## Practice

### Identify a conic in polar form

{{< multiplechoice
  question="Identify the conic with focus at the origin for $r(7+8\cos\theta)=7$."
  mode="text"
  answer="hyperbola"
  hint="Solve for $r$, then divide the numerator and denominator by 7 to put the denominator's constant at 1, and compare the coefficient of $\cos\theta$ — the eccentricity — with 1."
>}}
ellipse
parabola
hyperbola
{{< /multiplechoice >}}

{{< fillin
  question="Find the eccentricity $e$ of the conic $r=\tfrac{4}{7+2\cos\theta}$."
  answer="\frac{2}{7}"
  answerForm="lowest-terms"
  answerDisplay="$\tfrac27$"
  hint="Multiply the numerator and denominator by $\tfrac17$ to put the equation in standard form; $e$ is the coefficient of $\cos\theta$."
>}}

{{< fillin
  question="Find the directrix, as an equation, of the conic $r=\tfrac{5}{1+2\sin\theta}$."
  answer="y=\frac{5}{2}"
  answerForm="solved:y lowest-terms"
  answerDisplay="$y=\tfrac52$"
  hint="The equation is already in standard form: read $e$ off the denominator, set $ep$ equal to the numerator, and solve for $p$. Sine in the denominator means a horizontal directrix $y=\pm p$, and the sign in the denominator tells you which side of the pole it is on."
>}}

### Graph the polar equations of conics

{{< fillin
  question="The conic $r(1+\cos\theta)=5$ is a parabola with focus at the origin. Give its vertex as an ordered pair $(x,y)$."
  answer="\left(\frac{5}{2},0\right)"
  answerForm="lowest-terms"
  answerDisplay="$\left(\tfrac52,0\right)$"
  hint="Set $\theta=0$ in $r=\tfrac{5}{1+\cos\theta}$ and solve for $r$; the vertex lies on the polar axis."
>}}

{{< fillin
  question="The conic $r(3-2\sin\theta)=6$ is an ellipse with focus at the origin. Give both vertices, as ordered pairs $(x,y)$ separated by a comma."
  answer="\left(0,6\right),\left(0,-\frac{6}{5}\right)"
  answerMode="unordered"
  answerForm="lowest-terms"
  answerDisplay="$(0,6)$ and $\left(0,-\tfrac65\right)$"
  hint="Solve for $r$. The vertices lie on the vertical axis through the pole, so evaluate $r$ at $\theta=\tfrac{\pi}{2}$ and $\theta=\tfrac{3\pi}{2}$, then write each point in $(x,y)$ form."
>}}

{{< multiplechoice
  question="Which graph shows $r=\tfrac{8}{4-5\cos\theta}$?"
  mode="graph"
  answerIndex="1"
  hint="Rewrite the equation in standard form to read off $e$ and name the conic; the trigonometric function and the sign in the denominator place the directrix. Then evaluate $r$ at $\theta=0$ and $\theta=\pi$ to locate the vertices."
>}}
{"ariaLabel":"A hyperbola opening left and right, with a focus at the pole, vertices at (8/9, 0) and (8, 0), and a vertical dashed directrix at x = 1.6, between the two vertices.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"tickLabels":true,"unit":16,"tickStep":2,"hyperbolas":[{"at":[4.4444,0],"a":3.5556,"b":2.6667}],"points":[{"at":[0,0]}],"lines":[{"x":1.6,"dashed":true,"label":"x = 1.6"}]}
===OPT===
{"ariaLabel":"A hyperbola opening left and right, with a focus at the pole, vertices at (-8/9, 0) and (-8, 0), and a vertical dashed directrix at x = -1.6, between the two vertices.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"tickLabels":true,"unit":16,"tickStep":2,"hyperbolas":[{"at":[-4.4444,0],"a":3.5556,"b":2.6667}],"points":[{"at":[0,0]}],"lines":[{"x":-1.6,"dashed":true,"label":"x = −1.6"}]}
===OPT===
{"ariaLabel":"A hyperbola opening left and right, with a focus at the pole, vertices at (-8/9, 0) and (-8, 0), and a vertical dashed directrix at x = 1.6, to the right of the pole.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"tickLabels":true,"unit":16,"tickStep":2,"hyperbolas":[{"at":[-4.4444,0],"a":3.5556,"b":2.6667}],"points":[{"at":[0,0]}],"lines":[{"x":1.6,"dashed":true,"label":"x = 1.6"}]}
===OPT===
{"ariaLabel":"A hyperbola opening up and down, with a focus at the pole, vertices at (0, -8/9) and (0, -8), and a horizontal dashed directrix at y = -1.6, between the two vertices.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"tickLabels":true,"unit":16,"tickStep":2,"hyperbolas":[{"at":[0,-4.4444],"a":3.5556,"b":2.6667,"vertical":true}],"points":[{"at":[0,0]}],"lines":[{"y":-1.6,"dashed":true,"label":"y = −1.6"}]}
{{< /multiplechoice >}}

### Define conics in terms of a focus and a directrix

{{< fillin
  question="Find the polar equation of the conic with focus at the origin, directrix $x=1$, and eccentricity $e=1$."
  answer="r=\frac{1}{1+\cos\theta}"
  answerForm="solved:r no-like-terms"
  answerDisplay="$r=\tfrac{1}{1+\cos\theta}$"
  hint="The variable in the directrix picks sine or cosine, the sign of its constant picks the sign in the denominator, $e$ is the coefficient of the trigonometric function, and the numerator is $e$ times the directrix's distance from the pole."
>}}

{{< fillin
  question="Find the polar equation of the conic with focus at the origin, directrix $y=4$, and eccentricity $e=\tfrac32$. Clear the fraction from the denominator, so that every number in the equation is a whole number."
  answer="r=\frac{12}{2+3\sin\theta}"
  answerForm="solved:r no-like-terms"
  answerDisplay="$r=\tfrac{12}{2+3\sin\theta}$"
  hint="Build $r=\tfrac{ep}{1\pm e\sin\theta}$ or its cosine twin from the directrix as in the examples, then multiply the numerator and denominator by the denominator of $e$."
>}}

{{< fillin
  question="Convert the polar equation $r(2-\cos\theta)=1$ to rectangular form."
  answer="3x^2+4y^2-2x-1=0"
  answerForm="expanded no-like-terms"
  answerDisplay="$3x^2+4y^2-2x-1=0$"
  hint="Distribute, replace $r\cos\theta$ with $x$, isolate the term in $r$, square both sides, replace $r^2$ with $x^2+y^2$, and collect every term on one side."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 10.5: Conic Sections in Polar Coordinates](https://openstax.org/books/precalculus-2e/pages/10-5-conic-sections-in-polar-coordinates) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: this module (unlike m49438–m49441 earlier in the chapter) carries no `coreq-skills` prelude, and its own Section Exercises are followed by the chapter's Review Exercises and Practice Test appended in the same file; those chapter-level exercises were not transcribed and no Practice item was drawn from them. Omitted the credit photograph of the solar system (NASA Blueshift, Flickr), keeping the two paragraphs that introduce it. Kept the Media callout's introductory sentence and its three video titles but omitted the external links, matching house precedent elsewhere in this book. Where the source twice calls the focus "the focus $P(r,\theta)$ at the pole" (the introduction and the first Key Concepts bullet), the page writes "the focus at the pole": $P(r,\theta)$ is the point on the conic, not the focus (a source defect). Recreated all six instructional figures as accessible spec-first SVGs: the introductory focus/directrix/angle schematic, on plain axes as in the source, drawn as the exact parabola $r=\tfrac{2}{1-\cos\theta}$ (focus at the pole, directrix $x=-2$, a point $P$ at $\theta=70^\circ$ with its equal distances to the focus and to the directrix marked) — the source labels its figure $x=2+y^2$ while placing the focus at the pole, which that parabola's focus $(\tfrac94,0)$ is not, so the local figure and the sentence introducing it name no equation other than the polar one it actually plots (a source defect); and the three worked-example graphs (a parabola, a hyperbola, and an ellipse) and the two "Analysis" graphing-utility check figures (bare re-renders of the same two curves, unlabeled, matching the source's own unlabeled check art), each on a faint polar grid of concentric circles and diagonal spokes as in the source (the hyperbola's and ellipse's grids carry fewer rings than the source's), with the curve drawn from its exact rectangular equation — the parabola $x=\tfrac56-\tfrac{3}{10}y^2$, the hyperbola $\tfrac{(y+4.8)^2}{3.2^2}-\tfrac{x^2}{12.8}=1$, the ellipse centered at $\left(\tfrac{40}{9},0\right)$ with semi-axes $\tfrac{50}{9}$ and $\tfrac{10}{3}$ — clipped at the edge of the window; the worked-example graphs place points A–D at the printed table's $\theta=0,\tfrac{\pi}{2},\pi,\tfrac{3\pi}{2}$ values. **The grader proves two polar equations of the same conic equal**, so the "find the polar equation" answers declare `solved:r no-like-terms`, which refuses the equation left unsolved for $r$, a written coefficient of 1, unfinished numeral work, and a fraction left unreduced or uncleared; they are keyed in the fraction-cleared whole-number form the source prints, and the one whose eccentricity is a fraction ($e=\tfrac32$) says so in its question. Every "identify the conic" ask is a `multiplechoice` over ellipse/parabola/hyperbola; eccentricity is keyed as a bare number or fraction, never the letter $e$; a directrix is keyed as an equation ($x=-2$, $y=\tfrac52$) with the question saying "as an equation." The module's second in-page Try It ("Graph $r=\tfrac{2}{4-\cos\theta}$", solution a figure only) is a graph-mode multiple choice over four spec-first options that vary orientation, mirror sign, and eccentricity — following the 9.3 precedent — since the grader cannot take a drawn curve as a submitted answer; the section's other in-page Try Its keep their source form (identify/eccentricity/directrix fill-ins and multiple choice, or a polar-to-rectangular fill-in). Both polar-to-rectangular fill-ins (the Try It and a Practice item) declare `expanded no-like-terms`, so the rectangular equation must be expanded with like terms collected on one side, as the source's answers are; a half-converted equation such as $x^2+y^2=(2-2x)^2$ is told to finish. In the closing Practice block, three end-of-section "graph the conic" exercises (Algebraic #39, #41, and #35 in this book's local numbering, for the vertex, both-vertices, and graph-recognition items respectively; #41 rather than #33, $r=\tfrac{10}{5-4\sin\theta}$, whose vertex radii $10$ and $\tfrac{10}{9}$ are the ones the ellipse example's table prints) are likewise adapted into a computed fill-in on the vertex or vertices the sketch needs, or a graph-recognition multiple choice, each appearing once (not duplicated with the in-page set). Nine selected end-of-section Algebraic exercises were adapted into the interactive components of the closing Practice block, one Practice group per objective, every one independently re-derived — including by running the arithmetic in Node — rather than read off the source key. One source defect (Algebraic #55: directrix $x=-3,e=\tfrac13$) prints a key, $r=\tfrac{3}{3-3\cos\theta}$, that simplifies to $e=1$ and contradicts its own stated eccentricity of $\tfrac13$; the correctly derived $r=\tfrac{3}{3-\cos\theta}$ was independently verified but the exercise itself was not used on this page, since equivalent, unaffected exercises (#47, #51) were available.</small>
