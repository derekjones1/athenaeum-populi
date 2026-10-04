---
title: Ellipses
description: >-
  Graph ellipses centered at the origin and at any point, find their
  equations, and solve applications involving elliptical orbits.
source_section: "11.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph an ellipse with center at the origin
- Find the equation of an ellipse with center at the origin
- Graph an ellipse with center not at the origin
- Solve application with ellipses
{{< /callout >}}

## Graph an Ellipse with Center at the Origin

The next conic section we will look at is an **ellipse**. We define an ellipse
as all points in a plane where the sum of the distances from two fixed points
is constant. Each of the given points is called a **focus** of the ellipse.

{{< callout type="info" >}}
### Ellipse

An **ellipse** is all points in a plane where the sum of the distances from two
fixed points is constant. Each of the fixed points is called a **focus** of the
ellipse.
{{< /callout >}}

We can draw an ellipse by taking some fixed length of flexible string and
attaching the ends to two thumbtacks. We use a pen to pull the string taut and
rotate it around the two thumbtacks. The figure that results is an ellipse.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An ellipse drawn by the string method. The two ends of a string are tacked down at two fixed points inside the curve, labelled F₁ and F₂, and a pen pulls the string taut: two straight segments run from the pen's point on the ellipse to F₁ and to F₂. Moving the pen around the tacks with the string taut traces the ellipse.","unit":40,"polygons":[{"points":[[4.0,0.0],[3.996,0.105],[3.985,0.209],[3.966,0.313],[3.939,0.417],[3.905,0.519],[3.864,0.621],[3.815,0.722],[3.759,0.821],[3.696,0.918],[3.625,1.014],[3.548,1.108],[3.464,1.2],[3.374,1.29],[3.277,1.377],[3.173,1.461],[3.064,1.543],[2.949,1.621],[2.828,1.697],[2.702,1.769],[2.571,1.839],[2.435,1.904],[2.294,1.966],[2.149,2.024],[2.0,2.078],[1.847,2.129],[1.69,2.175],[1.531,2.217],[1.368,2.255],[1.203,2.289],[1.035,2.318],[0.866,2.343],[0.695,2.364],[0.522,2.379],[0.349,2.391],[0.174,2.398],[0.0,2.4],[-0.174,2.398],[-0.349,2.391],[-0.522,2.379],[-0.695,2.364],[-0.866,2.343],[-1.035,2.318],[-1.203,2.289],[-1.368,2.255],[-1.531,2.217],[-1.69,2.175],[-1.847,2.129],[-2.0,2.078],[-2.149,2.024],[-2.294,1.966],[-2.435,1.904],[-2.571,1.839],[-2.702,1.769],[-2.828,1.697],[-2.949,1.621],[-3.064,1.543],[-3.173,1.461],[-3.277,1.377],[-3.374,1.29],[-3.464,1.2],[-3.548,1.108],[-3.625,1.014],[-3.696,0.918],[-3.759,0.821],[-3.815,0.722],[-3.864,0.621],[-3.905,0.519],[-3.939,0.417],[-3.966,0.313],[-3.985,0.209],[-3.996,0.105],[-4.0,0.0],[-3.996,-0.105],[-3.985,-0.209],[-3.966,-0.313],[-3.939,-0.417],[-3.905,-0.519],[-3.864,-0.621],[-3.815,-0.722],[-3.759,-0.821],[-3.696,-0.918],[-3.625,-1.014],[-3.548,-1.108],[-3.464,-1.2],[-3.374,-1.29],[-3.277,-1.377],[-3.173,-1.461],[-3.064,-1.543],[-2.949,-1.621],[-2.828,-1.697],[-2.702,-1.769],[-2.571,-1.839],[-2.435,-1.904],[-2.294,-1.966],[-2.149,-2.024],[-2.0,-2.078],[-1.847,-2.129],[-1.69,-2.175],[-1.531,-2.217],[-1.368,-2.255],[-1.203,-2.289],[-1.035,-2.318],[-0.866,-2.343],[-0.695,-2.364],[-0.522,-2.379],[-0.349,-2.391],[-0.174,-2.398],[-0.0,-2.4],[0.174,-2.398],[0.349,-2.391],[0.522,-2.379],[0.695,-2.364],[0.866,-2.343],[1.035,-2.318],[1.203,-2.289],[1.368,-2.255],[1.531,-2.217],[1.69,-2.175],[1.847,-2.129],[2.0,-2.078],[2.149,-2.024],[2.294,-1.966],[2.435,-1.904],[2.571,-1.839],[2.702,-1.769],[2.828,-1.697],[2.949,-1.621],[3.064,-1.543],[3.173,-1.461],[3.277,-1.377],[3.374,-1.29],[3.464,-1.2],[3.548,-1.108],[3.625,-1.014],[3.696,-0.918],[3.759,-0.821],[3.815,-0.722],[3.864,-0.621],[3.905,-0.519],[3.939,-0.417],[3.966,-0.313],[3.985,-0.209],[3.996,-0.105]]}],"points":[{"at":[3.2,0]},{"at":[-3.2,0]},{"at":[-3.277,-1.377]}],"segments":[{"from":[3.2,0],"to":[-3.277,-1.377]},{"from":[-3.2,0],"to":[-3.277,-1.377]}],"texts":[{"at":[3.2,0.3],"text":"F₁","anchor":"middle"},{"at":[-3.2,0.3],"text":"F₂","anchor":"middle"},{"at":[-3.577,-1.927],"text":"pen","anchor":"end"}]}
{{< /apfigure >}}

A line drawn through the foci intersects the ellipse in two points. Each point
is called a **vertex** of the ellipse. The segment connecting the vertices is
called the **major axis**. The midpoint of the segment is called the
**center** of the ellipse. A segment perpendicular to the major axis that
passes through the center and intersects the ellipse in two points is called
the **minor axis**.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An ellipse that is wider than it is tall. A dashed horizontal segment, the major axis, runs from a vertex at the left end of the ellipse through two foci to a vertex at the right end. A shorter dashed vertical segment, the minor axis, crosses it at the center, the midpoint of the major axis, and meets the ellipse at its top and bottom.","unit":28,"polygons":[{"points":[[5.0,0.0],[4.995,0.131],[4.981,0.261],[4.957,0.392],[4.924,0.521],[4.881,0.649],[4.83,0.776],[4.769,0.902],[4.698,1.026],[4.619,1.148],[4.532,1.268],[4.435,1.385],[4.33,1.5],[4.217,1.612],[4.096,1.721],[3.967,1.826],[3.83,1.928],[3.686,2.027],[3.536,2.121],[3.378,2.212],[3.214,2.298],[3.044,2.38],[2.868,2.457],[2.686,2.53],[2.5,2.598],[2.309,2.661],[2.113,2.719],[1.913,2.772],[1.71,2.819],[1.504,2.861],[1.294,2.898],[1.082,2.929],[0.868,2.954],[0.653,2.974],[0.436,2.989],[0.218,2.997],[0.0,3.0],[-0.218,2.997],[-0.436,2.989],[-0.653,2.974],[-0.868,2.954],[-1.082,2.929],[-1.294,2.898],[-1.504,2.861],[-1.71,2.819],[-1.913,2.772],[-2.113,2.719],[-2.309,2.661],[-2.5,2.598],[-2.686,2.53],[-2.868,2.457],[-3.044,2.38],[-3.214,2.298],[-3.378,2.212],[-3.536,2.121],[-3.686,2.027],[-3.83,1.928],[-3.967,1.826],[-4.096,1.721],[-4.217,1.612],[-4.33,1.5],[-4.435,1.385],[-4.532,1.268],[-4.619,1.148],[-4.698,1.026],[-4.769,0.902],[-4.83,0.776],[-4.881,0.649],[-4.924,0.521],[-4.957,0.392],[-4.981,0.261],[-4.995,0.131],[-5.0,0.0],[-4.995,-0.131],[-4.981,-0.261],[-4.957,-0.392],[-4.924,-0.521],[-4.881,-0.649],[-4.83,-0.776],[-4.769,-0.902],[-4.698,-1.026],[-4.619,-1.148],[-4.532,-1.268],[-4.435,-1.385],[-4.33,-1.5],[-4.217,-1.612],[-4.096,-1.721],[-3.967,-1.826],[-3.83,-1.928],[-3.686,-2.027],[-3.536,-2.121],[-3.378,-2.212],[-3.214,-2.298],[-3.044,-2.38],[-2.868,-2.457],[-2.686,-2.53],[-2.5,-2.598],[-2.309,-2.661],[-2.113,-2.719],[-1.913,-2.772],[-1.71,-2.819],[-1.504,-2.861],[-1.294,-2.898],[-1.082,-2.929],[-0.868,-2.954],[-0.653,-2.974],[-0.436,-2.989],[-0.218,-2.997],[-0.0,-3.0],[0.218,-2.997],[0.436,-2.989],[0.653,-2.974],[0.868,-2.954],[1.082,-2.929],[1.294,-2.898],[1.504,-2.861],[1.71,-2.819],[1.913,-2.772],[2.113,-2.719],[2.309,-2.661],[2.5,-2.598],[2.686,-2.53],[2.868,-2.457],[3.044,-2.38],[3.214,-2.298],[3.378,-2.212],[3.536,-2.121],[3.686,-2.027],[3.83,-1.928],[3.967,-1.826],[4.096,-1.721],[4.217,-1.612],[4.33,-1.5],[4.435,-1.385],[4.532,-1.268],[4.619,-1.148],[4.698,-1.026],[4.769,-0.902],[4.83,-0.776],[4.881,-0.649],[4.924,-0.521],[4.957,-0.392],[4.981,-0.261],[4.995,-0.131]]}],"segments":[{"from":[-5,0],"to":[5,0],"dashed":true},{"from":[0,-3],"to":[0,3],"dashed":true}],"points":[{"at":[-5,0]},{"at":[5,0]},{"at":[-4,0]},{"at":[4,0]},{"at":[0,0]}],"texts":[{"at":[-5.2,0],"text":"Vertex","anchor":"end","dy":4},{"at":[5.2,0],"text":"Vertex","anchor":"start","dy":4},{"at":[-4,-0.75],"text":"Focus","anchor":"middle"},{"at":[4,-0.75],"text":"Focus","anchor":"middle"},{"at":[0.2,-0.75],"text":"Center","anchor":"start"},{"at":[-2,0.3],"text":"major axis","anchor":"middle"},{"at":[0.2,1.6],"text":"minor axis","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"An ellipse that is taller than it is wide. A dashed vertical segment, the major axis, runs from a vertex at the top of the ellipse through two foci to a vertex at the bottom. A shorter dashed horizontal segment, the minor axis, crosses it at the center, the midpoint of the major axis, and meets the ellipse at its left and right sides.","unit":28,"polygons":[{"points":[[3.0,0.0],[2.997,0.218],[2.989,0.436],[2.974,0.653],[2.954,0.868],[2.929,1.082],[2.898,1.294],[2.861,1.504],[2.819,1.71],[2.772,1.913],[2.719,2.113],[2.661,2.309],[2.598,2.5],[2.53,2.686],[2.457,2.868],[2.38,3.044],[2.298,3.214],[2.212,3.378],[2.121,3.536],[2.027,3.686],[1.928,3.83],[1.826,3.967],[1.721,4.096],[1.612,4.217],[1.5,4.33],[1.385,4.435],[1.268,4.532],[1.148,4.619],[1.026,4.698],[0.902,4.769],[0.776,4.83],[0.649,4.881],[0.521,4.924],[0.392,4.957],[0.261,4.981],[0.131,4.995],[0.0,5.0],[-0.131,4.995],[-0.261,4.981],[-0.392,4.957],[-0.521,4.924],[-0.649,4.881],[-0.776,4.83],[-0.902,4.769],[-1.026,4.698],[-1.148,4.619],[-1.268,4.532],[-1.385,4.435],[-1.5,4.33],[-1.612,4.217],[-1.721,4.096],[-1.826,3.967],[-1.928,3.83],[-2.027,3.686],[-2.121,3.536],[-2.212,3.378],[-2.298,3.214],[-2.38,3.044],[-2.457,2.868],[-2.53,2.686],[-2.598,2.5],[-2.661,2.309],[-2.719,2.113],[-2.772,1.913],[-2.819,1.71],[-2.861,1.504],[-2.898,1.294],[-2.929,1.082],[-2.954,0.868],[-2.974,0.653],[-2.989,0.436],[-2.997,0.218],[-3.0,0.0],[-2.997,-0.218],[-2.989,-0.436],[-2.974,-0.653],[-2.954,-0.868],[-2.929,-1.082],[-2.898,-1.294],[-2.861,-1.504],[-2.819,-1.71],[-2.772,-1.913],[-2.719,-2.113],[-2.661,-2.309],[-2.598,-2.5],[-2.53,-2.686],[-2.457,-2.868],[-2.38,-3.044],[-2.298,-3.214],[-2.212,-3.378],[-2.121,-3.536],[-2.027,-3.686],[-1.928,-3.83],[-1.826,-3.967],[-1.721,-4.096],[-1.612,-4.217],[-1.5,-4.33],[-1.385,-4.435],[-1.268,-4.532],[-1.148,-4.619],[-1.026,-4.698],[-0.902,-4.769],[-0.776,-4.83],[-0.649,-4.881],[-0.521,-4.924],[-0.392,-4.957],[-0.261,-4.981],[-0.131,-4.995],[-0.0,-5.0],[0.131,-4.995],[0.261,-4.981],[0.392,-4.957],[0.521,-4.924],[0.649,-4.881],[0.776,-4.83],[0.902,-4.769],[1.026,-4.698],[1.148,-4.619],[1.268,-4.532],[1.385,-4.435],[1.5,-4.33],[1.612,-4.217],[1.721,-4.096],[1.826,-3.967],[1.928,-3.83],[2.027,-3.686],[2.121,-3.536],[2.212,-3.378],[2.298,-3.214],[2.38,-3.044],[2.457,-2.868],[2.53,-2.686],[2.598,-2.5],[2.661,-2.309],[2.719,-2.113],[2.772,-1.913],[2.819,-1.71],[2.861,-1.504],[2.898,-1.294],[2.929,-1.082],[2.954,-0.868],[2.974,-0.653],[2.989,-0.436],[2.997,-0.218]]}],"segments":[{"from":[0,-5],"to":[0,5],"dashed":true},{"from":[-3,0],"to":[3,0],"dashed":true}],"points":[{"at":[0,5]},{"at":[0,-5]},{"at":[0,4]},{"at":[0,-4]},{"at":[0,0]}],"texts":[{"at":[0,5.3],"text":"Vertex","anchor":"middle"},{"at":[0,-5.8],"text":"Vertex","anchor":"middle"},{"at":[0.25,4],"text":"Focus","anchor":"start","dy":4},{"at":[0.25,-4],"text":"Focus","anchor":"start","dy":4},{"at":[0.2,-0.75],"text":"Center","anchor":"start"},{"at":[-0.25,2],"text":"major axis","anchor":"end"},{"at":[1.5,0.3],"text":"minor axis","anchor":"middle"}]}
{{< /apfigure >}}

We mentioned earlier that our goal is to connect the geometry of a conic with
algebra. Placing the ellipse on a rectangular coordinate system gives us that
opportunity. In the figure below, we place the ellipse so the foci $(-c,0),(c,0)$ are on the
$x$-axis and the center is the origin.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An ellipse centered at the origin with foci (−c, 0) and (c, 0) on the x-axis. A point (x, y) on the ellipse is joined to (−c, 0) by a segment labelled d₁ and to (c, 0) by a segment labelled d₂.","xMin":-7,"xMax":7,"yMin":-4,"yMax":4,"unit":26,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"rx":5,"ry":3}],"points":[{"at":[-4,0],"label":"(−c, 0)"},{"at":[4,0],"label":"(c, 0)"},{"at":[2.868,2.457],"label":"(x, y)"}],"segments":[{"from":[-4,0],"to":[2.868,2.457],"label":"d₁","labelSide":"nw"},{"from":[4,0],"to":[2.868,2.457],"label":"d₂"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An ellipse centered at the origin with vertices (−a, 0) and (a, 0), foci (−c, 0) and (c, 0), and the point (0, b) where it crosses the positive y-axis. A right triangle joins the origin, (c, 0) and (0, b): its horizontal leg is labelled c, its vertical leg b, and its hypotenuse, from (c, 0) to (0, b), a. Beside it: a² = b² + c².","xMin":-7,"xMax":7,"yMin":-4,"yMax":4,"unit":30,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"rx":5,"ry":3}],"points":[{"at":[-5,0],"label":"(−a, 0)"},{"at":[-4,0],"label":"(−c, 0)"},{"at":[4,0],"label":"(c, 0)"},{"at":[5,0],"label":"(a, 0)"},{"at":[0,3],"label":"(0, b)"}],"segments":[{"from":[0,0],"to":[4,0]},{"from":[4,0],"to":[0,3],"label":"a"},{"from":[0,3],"to":[0,0],"label":"b"}],"texts":[{"at":[2,-0.55],"text":"c","anchor":"middle"},{"at":[3.6,-3.4],"text":"a² = b² + c²","anchor":"start"}]}
{{< /apfigure >}}

The definition states the sum of the distance from the foci to a point $(x,y)$
is constant. So $d_1+d_2$ is a constant that we will call $2a$, so
$d_1+d_2=2a$. We will use the distance formula to lead us to an algebraic
formula for an ellipse.

Use the distance formula to find $d_1,d_2$:

$$
\sqrt{(x-(-c))^2+(y-0)^2}+\sqrt{(x-c)^2+(y-0)^2}=2a.
$$

After eliminating radicals and simplifying, we get

$$
\frac{x^2}{a^2}+\frac{y^2}{a^2-c^2}=1.
$$

To simplify the equation of the ellipse, we let $a^2-c^2=b^2$. So, the
equation of an ellipse centered at the origin in standard form is

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

To graph the ellipse, it will be helpful to know the intercepts. We will find
the $x$-intercepts and $y$-intercepts using the formula.

| $y$-intercepts | $x$-intercepts |
|:--|:--|
| Let $x=0$. Then $\tfrac{0^2}{a^2}+\tfrac{y^2}{b^2}=1$, so $y^2=b^2$ and $y=\pm b$. The $y$-intercepts are $(0,b)$ and $(0,-b)$. | Let $y=0$. Then $\tfrac{x^2}{a^2}+\tfrac{0^2}{b^2}=1$, so $x^2=a^2$ and $x=\pm a$. The $x$-intercepts are $(a,0)$ and $(-a,0)$. |

{{< callout type="info" >}}
### Standard Form of the Equation of an Ellipse with Center $(0,0)$

The standard form of the equation of an ellipse with center $(0,0)$ is

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

The $x$-intercepts are $(a,0)$ and $(-a,0)$.

The $y$-intercepts are $(0,b)$ and $(0,-b)$.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An ellipse centered at the origin that is wider than it is tall, its major axis on the x-axis. It crosses the x-axis at (−a, 0) and (a, 0) and the y-axis at (0, b) and (0, −b).","xMin":-7,"xMax":7,"yMin":-5,"yMax":5,"unit":22,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"rx":5,"ry":3}],"points":[{"at":[-5,0],"label":"(−a, 0)"},{"at":[5,0],"label":"(a, 0)"},{"at":[0,3],"label":"(0, b)"},{"at":[0,-3],"label":"(0, −b)"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An ellipse centered at the origin that is taller than it is wide, its major axis on the y-axis. It crosses the x-axis at (−a, 0) and (a, 0) and the y-axis at (0, b) and (0, −b).","xMin":-5,"xMax":5,"yMin":-7,"yMax":7,"unit":22,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"rx":3,"ry":5}],"points":[{"at":[-3,0],"label":"(−a, 0)"},{"at":[3,0],"label":"(a, 0)"},{"at":[0,5],"label":"(0, b)"},{"at":[0,-5],"label":"(0, −b)"}]}
{{< /apfigure >}}

Notice that when the major axis is horizontal, the value of $a$ will be
greater than the value of $b$ and when the major axis is vertical, the value
of $b$ will be greater than the value of $a$. We will use this information to
graph an ellipse that is centered at the origin.

| Ellipse with center $(0,0)$ | $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$, $a>b$ | $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$, $b>a$ |
|:--|:--|:--|
| Major axis | on the $x$-axis | on the $y$-axis |
| $x$-intercepts | $(-a,0),(a,0)$ | $(-a,0),(a,0)$ |
| $y$-intercepts | $(0,-b),(0,b)$ | $(0,-b),(0,b)$ |

### Example 11.20

**How to Graph an Ellipse with Center $(0,0)$.** Graph

$$
\frac{x^2}{4}+\frac{y^2}{9}=1.
$$

**Solution.**

1. The equation is in standard form.
2. Since $9>4$ and $9$ is in the $y^2$-term, the major axis is vertical.
3. The endpoints will be the $y$-intercepts. Since $b^2=9$, then
   $b=\pm3$. The endpoints of the major axis are $(0,3),(0,-3)$.
4. The endpoints will be the $x$-intercepts. Since $a^2=4$, then
   $a=\pm2$. The endpoints of the minor axis are $(2,0),(-2,0)$.
5. Sketch the ellipse through the four intercepts.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The ellipse x²/4 + y²/9 = 1, taller than it is wide, centered at the origin. It passes through (0, 3) and (0, −3), the endpoints of the major axis, and (2, 0) and (−2, 0), the endpoints of the minor axis, on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"circles":[{"at":[0,0],"rx":2,"ry":3}],"points":[{"at":[-2,0],"label":"(−2, 0)"},{"at":[2,0],"label":"(2, 0)"},{"at":[0,3],"label":"(0, 3)"},{"at":[0,-3],"label":"(0, −3)"}],"tickStep":2}
{{< /apfigure >}}

{{< fillin
  question="For $\tfrac{x^2}{4}+\tfrac{y^2}{16}=1$, enter the positive $y$-coordinate of a vertex."
  answer="4"
  answerForm="decimal"
  answerDisplay="$4$"
  hint="The larger denominator is under $y^2$."
>}}

We summarize the steps for reference.

{{< callout type="info" >}}
### How To: Graph an Ellipse with Center $(0,0)$

1. Write the equation in standard form.
2. Determine whether the major axis is horizontal or vertical.
3. Find the endpoints of the major axis.
4. Find the endpoints of the minor axis.
5. Sketch the ellipse.
{{< /callout >}}

Sometimes our equation will first need to be put in standard form.

### Example 11.21

Graph $x^2+4y^2=16$.

**Solution.** We recognize this as the equation of an ellipse since both the
$x$ and $y$ terms are squared and have different coefficients.

To get the equation in standard form, divide both sides by 16 so that the
equation is equal to 1.

$$
\begin{aligned}
x^2+4y^2&=16\\
\frac{x^2}{16}+\frac{4y^2}{16}&=\frac{16}{16}\\
\frac{x^2}{16}+\frac{y^2}{4}&=1.
\end{aligned}
$$

The equation is in standard form. The ellipse is centered at the origin, so
the center is $(0,0)$. Since $16>4$ and 16 is in the $x^2$-term, the major
axis is horizontal.

Since $a^2=16$, $a=\pm4$, and since $b^2=4$, $b=\pm2$. The vertices are
$(4,0),(-4,0)$. The endpoints of the minor axis are $(0,2),(0,-2)$. Sketch
the ellipse.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The ellipse x²/16 + y²/4 = 1, wider than it is tall, centered at the origin. It passes through the vertices (−4, 0) and (4, 0) and the minor-axis endpoints (0, 2) and (0, −2), on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"circles":[{"at":[0,0],"rx":4,"ry":2}],"points":[{"at":[-4,0],"label":"(−4, 0)"},{"at":[4,0],"label":"(4, 0)"},{"at":[0,2],"label":"(0, 2)"},{"at":[0,-2],"label":"(0, −2)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write $9x^2+16y^2=144$ in standard form."
  answer="\frac{x^2}{16}+\frac{y^2}{9}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$"
  hint="Divide every term by $144$."
>}}

{{< fillin
  question="Write $16x^2+25y^2=400$ in standard form."
  answer="\frac{x^2}{25}+\frac{y^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{25}+\tfrac{y^2}{16}=1$"
  hint="Divide every term by $400$."
>}}

## Find the Equation of an Ellipse with Center at the Origin

If we are given the graph of an ellipse, we can find the equation of the
ellipse.

### Example 11.22

Find the equation of the ellipse centered at $(0,0)$, with vertices
$(-4,0),(4,0)$ and endpoints of the minor axis $(0,3),(0,-3)$, as shown.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An ellipse centered at (0, 0), wider than it is tall, passing through (−4, 0) and (4, 0) on the x-axis and (0, 3) and (0, −3) on the y-axis, on a grid from −5 to 5 on both axes.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"circles":[{"at":[0,0],"rx":4,"ry":3}],"points":[{"at":[-4,0],"label":"(−4, 0)"},{"at":[4,0],"label":"(4, 0)"},{"at":[0,3],"label":"(0, 3)"},{"at":[0,-3],"label":"(0, −3)"},{"at":[0,0],"label":"(0, 0)"}]}
{{< /apfigure >}}

**Solution.** We recognize this as an ellipse that is centered at the origin:

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

Since the major axis is horizontal and the distance from the center to the
vertex is 4, we know $a=4$ and so $a^2=16$:

$$
\frac{x^2}{16}+\frac{y^2}{b^2}=1.
$$

The minor axis is vertical and the distance from the center to the ellipse is
3, so we know $b=3$ and $b^2=9$:

$$
\frac{x^2}{16}+\frac{y^2}{9}=1.
$$

{{< fillin
  question="Find the equation of the ellipse centered at $(0,0)$ with $x$-intercepts $(-2,0),(2,0)$ and $y$-intercepts $(0,-5),(0,5)$."
  answer="\frac{x^2}{4}+\frac{y^2}{25}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{4}+\tfrac{y^2}{25}=1$"
  hint="Square each distance from the center for its denominator."
>}}

{{< fillin
  question="Find the equation of the ellipse centered at $(0,0)$ with $x$-intercepts $(-3,0),(3,0)$ and $y$-intercepts $(0,-2),(0,2)$."
  answer="\frac{x^2}{9}+\frac{y^2}{4}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{9}+\tfrac{y^2}{4}=1$"
  hint="Square each distance from the center for its denominator."
>}}

## Graph an Ellipse with Center Not at the Origin

The ellipses we have looked at so far have all been centered at the origin. We
will now look at ellipses whose center is $(h,k)$.

The equation is
$\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1$ and when $a>b$, the major axis
is horizontal so the distance from the center to the vertex is $a$. When
$b>a$, the major axis is vertical so the distance from the center to the
vertex is $b$.

{{< callout type="info" >}}
### Standard Form of the Equation of an Ellipse Not Centered at the Origin, with Center $(h,k)$

The standard form of the equation of an ellipse with center $(h,k)$ is

$$
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1.
$$

When $a>b$, the major axis is horizontal so the distance from the center to
the vertex is $a$.

When $b>a$, the major axis is vertical so the distance from the center to the
vertex is $b$.
{{< /callout >}}

### Example 11.23

Graph

$$
\frac{(x-3)^2}{9}+\frac{(y-1)^2}{4}=1.
$$

**Solution.** The equation is in standard form. The ellipse is centered at
$(h,k)$, so the center is $(3,1)$. Since $9>4$ and 9 is in the $x^2$-term,
the major axis is horizontal.

Since $a^2=9$, $a=\pm3$, and since $b^2=4$, $b=\pm2$. The distance from the
center to the vertices is 3. The distance from the center to the endpoints of
the minor axis is 2. The vertices are $(0,1),(6,1)$ and the endpoints of the
minor axis are $(3,3),(3,-1)$. Sketch the ellipse.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The ellipse (x − 3)²/9 + (y − 1)²/4 = 1, wider than it is tall, with center (3, 1). It passes through the vertices (0, 1) and (6, 1) and the minor-axis endpoints (3, 3) and (3, −1), on a grid from −4 to 8 on both axes.","xMin":-4,"xMax":8,"yMin":-4,"yMax":8,"unit":24,"tickLabels":true,"circles":[{"at":[3,1],"rx":3,"ry":2}],"points":[{"at":[0,1],"label":"(0, 1)"},{"at":[6,1],"label":"(6, 1)"},{"at":[3,3],"label":"(3, 3)"},{"at":[3,-1],"label":"(3, −1)"},{"at":[3,1],"label":"(3, 1)"}]}
{{< /apfigure >}}

{{< fillin
  question="For $\tfrac{(x+3)^2}{4}+\tfrac{(y-5)^2}{16}=1$, enter the distance from the center to a vertex."
  answer="4"
  answerForm="decimal"
  answerDisplay="$4$"
  hint="The major axis corresponds to the larger denominator."
>}}

{{< fillin
  question="For $\tfrac{(x-1)^2}{25}+\tfrac{(y+3)^2}{16}=1$, enter both vertices, separated by a comma."
  answer="(-4,-3),(6,-3)"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$(-4,-3)$ and $(6,-3)$"
  hint="Find the center, then move the distance to a vertex both ways along the major axis."
>}}

If we look at the equations
$\tfrac{x^2}{9}+\tfrac{y^2}{4}=1$ and
$\tfrac{(x-3)^2}{9}+\tfrac{(y-1)^2}{4}=1$, we see that they are both
ellipses with $a=3$ and $b=2$. So they will have the same size and shape.
They are different in that they do not have the same center.

Notice that we could have graphed
$\tfrac{(x-3)^2}{9}+\tfrac{(y-1)^2}{4}=1$ by translations. We moved the
original ellipse to the right 3 units and then up 1 unit.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two ellipses of the same size and shape, each 6 units wide and 4 units tall. The dashed one, x²/9 + y²/4 = 1, has center (0, 0). The solid one, (x − 3)²/9 + (y − 1)²/4 = 1, has center (3, 1). Arrows from (0, 0) run 3 units right, marked +3, and then 1 unit up, marked +1, to (3, 1).","xMin":-4,"xMax":7,"yMin":-3,"yMax":4,"unit":30,"tickLabels":true,"circles":[{"at":[0,0],"rx":3,"ry":2,"dashed":true},{"at":[3,1],"rx":3,"ry":2}],"points":[{"at":[0,0],"label":"(0, 0)","labelSide":"nw"},{"at":[3,1],"label":"(3, 1)","labelSide":"n"}],"segments":[{"from":[0,0],"to":[3,0],"arrows":"end"},{"from":[3,0.2],"to":[3,0.78],"arrows":"end"}],"texts":[{"at":[1.5,0.25],"text":"+3","anchor":"middle"},{"at":[3.2,0.3],"text":"+1","anchor":"start"}]}
{{< /apfigure >}}

In the next example we will use the translation method to graph the ellipse.

### Example 11.24

Graph

$$
\frac{(x+4)^2}{16}+\frac{(y-6)^2}{9}=1
$$

by translation.

**Solution.** This ellipse will have the same size and shape as
$\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$, whose center is $(0,0)$. We graph this
ellipse first.

Since $16>9$, the major axis is horizontal. Since $a^2=16$, $a=\pm4$, and
since $b^2=9$, $b=\pm3$. The vertices are $(4,0),(-4,0)$. The endpoints of
the minor axis are $(0,3),(0,-3)$. Sketch the ellipse.

The original equation is in standard form,

$$
\frac{(x-(-4))^2}{16}+\frac{(y-6)^2}{9}=1.
$$

The ellipse is centered at $(h,k)$, so the center is $(-4,6)$. We translate
the graph of $\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$ four units to the left and
then up 6 units. Verify that the center is $(-4,6)$. The new ellipse is the
ellipse whose equation is

$$
\frac{(x+4)^2}{16}+\frac{(y-6)^2}{9}=1.
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two ellipses of the same size and shape, each 8 units wide and 6 units tall. The dashed one, x²/16 + y²/9 = 1, is centered at the origin. Arrows run from (0, 0) 4 units left to (−4, 0) and then 6 units up to (−4, 6), the center of the solid ellipse (x + 4)²/16 + (y − 6)²/9 = 1, which passes through (−8, 6), (0, 6), (−4, 9) and (−4, 3). The grid runs from −10 to 5 on the x-axis and −5 to 10 on the y-axis.","xMin":-10,"xMax":5,"yMin":-5,"yMax":10,"unit":22,"tickLabels":true,"circles":[{"at":[0,0],"rx":4,"ry":3,"dashed":true},{"at":[-4,6],"rx":4,"ry":3}],"points":[{"at":[-4,6],"label":"(−4, 6)"},{"at":[-8,6],"label":"(−8, 6)"},{"at":[0,6],"label":"(0, 6)"},{"at":[-4,9],"label":"(−4, 9)"},{"at":[-4,3],"label":"(−4, 3)"},{"at":[0,0]}],"segments":[{"from":[0,0],"to":[-4,0],"arrows":"end"},{"from":[-4,0.3],"to":[-4,5.7],"arrows":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="For $\tfrac{(x-5)^2}{9}+\tfrac{(y+4)^2}{4}=1$, enter the center as an ordered pair."
  answer="(5,-4)"
  answerForm="decimal"
  answerDisplay="$(5,-4)$"
  hint="Write each binomial in the form $x-h$ or $y-k$; the center is $(h,k)$."
>}}

{{< fillin
  question="The ellipse $\tfrac{(x+6)^2}{16}+\tfrac{(y+2)^2}{25}=1$ is the graph of $\tfrac{x^2}{16}+\tfrac{y^2}{25}=1$ translated. Enter both of its vertices, separated by a comma."
  answer="(-6,3),(-6,-7)"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$(-6,3)$ and $(-6,-7)$"
  hint="Translate each vertex of the ellipse centered at the origin by the shift that moves $(0,0)$ to the center $(h,k)$."
>}}

When an equation has both an $x^2$ and a $y^2$ with different coefficients,
we verify that it is an ellipse by putting it in standard form. We will then
be able to graph the equation.

### Example 11.25

Write the equation

$$
x^2+4y^2-4x+24y+24=0
$$

in standard form and graph.

**Solution.** We put the equation in standard form by completing the squares
in both $x$ and $y$.

$$
\begin{aligned}
x^2+4y^2-4x+24y+24&=0\\
(x^2-4x+\underline{\phantom{4}})+
  (4y^2+24y+\underline{\phantom{36}})&=-24\\
(x^2-4x+\underline{\phantom{4}})+
  4(y^2+6y+\underline{\phantom{9}})&=-24\\
(x^2-4x+4)+4(y^2+6y+9)&=-24+4+36\\
(x-2)^2+4(y+3)^2&=16\\
\frac{(x-2)^2}{16}+\frac{4(y+3)^2}{16}&=\frac{16}{16}\\
\frac{(x-2)^2}{16}+\frac{(y+3)^2}{4}&=1.
\end{aligned}
$$

The equation is in standard form. The ellipse is centered at $(h,k)$, so the
center is $(2,-3)$. Since $16>4$ and 16 is in the $x^2$-term, the major axis
is horizontal. Since $a^2=16$, $a=\pm4$, and since $b^2=4$, $b=\pm2$. The
distance from the center to the vertices is 4. The distance from the center
to the endpoints of the minor axis is 2. The vertices are $(-2,-3),(6,-3)$
and the endpoints of the minor axis are $(2,-1),(2,-5)$. Sketch the ellipse.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The ellipse (x − 2)²/16 + (y + 3)²/4 = 1, wider than it is tall, with center (2, −3). It passes through the vertices (−2, −3) and (6, −3) and the minor-axis endpoints (2, −1) and (2, −5), on a grid from −4 to 8 on the x-axis and −8 to 4 on the y-axis.","xMin":-4,"xMax":8,"yMin":-8,"yMax":4,"unit":24,"tickLabels":true,"circles":[{"at":[2,-3],"rx":4,"ry":2}],"points":[{"at":[-2,-3],"label":"(−2, −3)"},{"at":[6,-3],"label":"(6, −3)"},{"at":[2,-1],"label":"(2, −1)"},{"at":[2,-5],"label":"(2, −5)"},{"at":[2,-3],"label":"(2, −3)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write $6x^2+4y^2+12x-32y+34=0$ in standard form."
  answer="\frac{(x+1)^2}{6}+\frac{(y-4)^2}{9}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x+1)^2}{6}+\tfrac{(y-4)^2}{9}=1$"
  hint="Group the $x$- and $y$-terms and complete both squares."
>}}

{{< fillin
  question="Write $4x^2+y^2-16x-6y+9=0$ in standard form."
  answer="\frac{(x-2)^2}{4}+\frac{(y-3)^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x-2)^2}{4}+\tfrac{(y-3)^2}{16}=1$"
  hint="Group the $x$- and $y$-terms and complete both squares."
>}}

## Solve Application with Ellipses

The orbits of the planets around the sun follow elliptical paths.

### Example 11.26

Pluto (a dwarf planet) moves in an elliptical orbit around the Sun. The
closest Pluto gets to the Sun is approximately 30 astronomical units (AU) and
the furthest is approximately 50 AU. The Sun is one of the foci of the
elliptical orbit. Letting the ellipse center at the origin and labeling the
axes in AU, the orbit has vertices $(-40,0),(40,0)$ and the Sun at $(10,0)$.
Use the graph to write an equation for the elliptical orbit of Pluto.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Pluto's elliptical orbit, centered at the origin, with vertices (−40, 0) and (40, 0) on the x-axis and the Sun at the focus (10, 0). An arrow from the Sun to (40, 0) is marked 30 AU, and an arrow from the Sun to (−40, 0) is marked 50 AU.","xMin":-50,"xMax":50,"yMin":-45,"yMax":45,"unit":3.4,"grid":false,"tickLabels":false,"circles":[{"at":[0,0],"rx":40,"ry":38.73}],"points":[{"at":[-40,0],"label":"(−40, 0)","labelSide":"sw"},{"at":[40,0],"label":"(40, 0)","labelSide":"se"},{"at":[10,0],"label":"Sun (10, 0)","labelSide":"se"}],"segments":[{"from":[10,0],"to":[38.5,0],"arrows":"end"},{"from":[10,0],"to":[-38.5,0],"arrows":"end"}],"texts":[{"at":[25,2.5],"text":"30 AU","anchor":"middle"},{"at":[-15,2.5],"text":"50 AU","anchor":"middle"}]}
{{< /apfigure >}}

**Solution.** We recognize this as an ellipse that is centered at the origin:

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1.
$$

Since the major axis is horizontal and the distance from the center to the
vertex is 40, we know $a=40$ and so $a^2=1600$:

$$
\frac{x^2}{1600}+\frac{y^2}{b^2}=1.
$$

The minor axis is vertical but the end points aren't given. To find $b$ we
will use the location of the Sun. Since the Sun is a focus of the ellipse at
the point $(10,0)$, we know $c=10$. Use this to solve for $b^2$:

$$
\begin{aligned}
b^2&=a^2-c^2\\
b^2&=40^2-10^2\\
b^2&=1600-100\\
b^2&=1500.
\end{aligned}
$$

Substitute $a^2$ and $b^2$ into the standard form of the ellipse:

$$
\frac{x^2}{1600}+\frac{y^2}{1500}=1.
$$

{{< fillin
  question="A planet moves in an elliptical orbit around its sun. The closest the planet gets to the sun is approximately 20 AU and the furthest is approximately 30 AU. The sun is one of the foci of the elliptical orbit. Letting the ellipse center at the origin and labeling the axes in AU, the orbit has vertices $(-25,0),(25,0)$ and the sun at $(5,0)$. Write an equation for the elliptical orbit of the planet."
  answer="\frac{x^2}{625}+\frac{y^2}{600}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{625}+\tfrac{y^2}{600}=1$"
  hint="Use $b^2=a^2-c^2$."
>}}

{{< fillin
  question="A planet moves in an elliptical orbit around its sun. The closest the planet gets to the sun is approximately 20 AU and the furthest is approximately 50 AU. The sun is one of the foci of the elliptical orbit. Letting the ellipse center at the origin and labeling the axes in AU, the orbit has vertices $(-35,0),(35,0)$ and the sun at $(15,0)$. Write an equation for the elliptical orbit of the planet."
  answer="\frac{x^2}{1225}+\frac{y^2}{1000}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{1225}+\tfrac{y^2}{1000}=1$"
  hint="Use $b^2=a^2-c^2$."
>}}

## Key terms

An **ellipse** is all points in a plane where the sum of the
distances from two fixed points is constant. Each fixed point is a **focus**.
A line through the foci meets the ellipse at two points, the **vertices**; the
segment connecting the vertices is the **major axis**, its midpoint is the
**center**, and the segment perpendicular to the major axis through the center,
with its endpoints on the ellipse, is the **minor axis**.

## Practice

### Graph an ellipse with center at the origin

{{< fillin
  question="For $\tfrac{x^2}{36}+\tfrac{y^2}{16}=1$, enter the positive $x$-coordinate of a vertex."
  answer="6"
  answerForm="decimal"
  answerDisplay="$6$"
  hint="The vertices lie on the axis whose term has the larger denominator."
>}}

{{< fillin
  question="For $\tfrac{x^2}{25}+\tfrac{y^2}{36}=1$, enter the positive $x$-coordinate of a minor-axis endpoint."
  answer="5"
  answerForm="decimal"
  answerDisplay="$5$"
  hint="The minor axis lies along the axis whose term has the smaller denominator."
>}}

{{< fillin
  question="For $4x^2+25y^2=100$, enter the positive $y$-coordinate of a minor-axis endpoint."
  answer="2"
  answerForm="decimal"
  answerDisplay="$2$"
  hint="Divide every term by $100$ to get standard form first."
>}}

### Find the equation of an ellipse with center at the origin

{{< fillin
  question="Find the equation of the ellipse centered at $(0,0)$ with vertices $(0,-5),(0,5)$ and minor-axis endpoints $(-3,0),(3,0)$."
  answer="\frac{x^2}{9}+\frac{y^2}{25}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{9}+\tfrac{y^2}{25}=1$"
  hint="Square each distance from the center for its denominator."
>}}

{{< fillin
  question="Find the equation of the ellipse centered at $(0,0)$ with vertices $(0,-4),(0,4)$ and minor-axis endpoints $(-3,0),(3,0)$."
  answer="\frac{x^2}{9}+\frac{y^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{9}+\tfrac{y^2}{16}=1$"
  hint="Square each distance from the center for its denominator."
>}}

### Graph an ellipse with center not at the origin

{{< fillin
  question="For $\tfrac{(x+1)^2}{4}+\tfrac{(y+6)^2}{25}=1$, enter the center as an ordered pair."
  answer="(-1,-6)"
  answerForm="decimal"
  answerDisplay="$(-1,-6)$"
  hint="Write each binomial in the form $x-h$ or $y-k$; the center is $(h,k)$."
>}}

{{< fillin
  question="The ellipse $\tfrac{(x-3)^2}{4}+\tfrac{(y-7)^2}{25}=1$ is the graph of $\tfrac{x^2}{4}+\tfrac{y^2}{25}=1$ translated. Enter both of its vertices, separated by a comma."
  answer="(3,2),(3,12)"
  answerForm="decimal"
  answerMode="unordered"
  answerDisplay="$(3,2)$ and $(3,12)$"
  hint="Translate each vertex of the ellipse centered at the origin by the shift that moves $(0,0)$ to the center $(h,k)$."
>}}

{{< fillin
  question="Write $25x^2+9y^2-100x-54y-44=0$ in standard form."
  answer="\frac{(x-2)^2}{9}+\frac{(y-3)^2}{25}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x-2)^2}{9}+\tfrac{(y-3)^2}{25}=1$"
  hint="Group the $x$- and $y$-terms, factor out each leading coefficient, complete both squares, then divide through so the right side is $1$."
>}}

{{< fillin
  question="For the ellipse $25x^2+9y^2-100x-54y-44=0$, enter the larger $y$-coordinate of a vertex."
  answer="8"
  answerForm="decimal"
  answerDisplay="$8$"
  hint="Use the standard form from the question above: move from the center along the major axis by the square root of the larger denominator."
>}}

### Solve application with ellipses

{{< fillin
  question="A planet moves in an elliptical orbit around its sun. The closest the planet gets to the sun is approximately 10 AU and the furthest is approximately 30 AU. The sun is one of the foci of the elliptical orbit. Letting the ellipse center at the origin and labeling the axes in AU, the orbit has vertices $(-20,0),(20,0)$ and the sun at $(10,0)$. Write an equation for the elliptical orbit of the planet."
  answer="\frac{x^2}{400}+\frac{y^2}{300}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{400}+\tfrac{y^2}{300}=1$"
  hint="Use $b^2=a^2-c^2$."
>}}

{{< fillin
  question="A comet moves in an elliptical orbit around a sun. The closest the comet gets to the sun is approximately 15 AU and the furthest is approximately 85 AU. The sun is one of the foci of the elliptical orbit. Letting the ellipse center at the origin and labeling the axes in AU, the orbit has vertices $(-50,0),(50,0)$ and the sun at $(35,0)$. Write an equation for the elliptical orbit of the comet."
  answer="\frac{x^2}{2500}+\frac{y^2}{1275}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{2{,}500}+\tfrac{y^2}{1{,}275}=1$"
  hint="Use $b^2=a^2-c^2$."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 11.3](https://openstax.org/books/intermediate-algebra-2e/pages/11-3-ellipses) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: omitted readiness quizzes, self-checks, media links, and the double-cone figure; redrew the string construction, the parts of an ellipse, the distance and right-triangle figures, the two orientations, each worked example's graph, the translation figure, and Pluto's orbit as accessible graphs (each translated ellipse's original drawn dashed); converted Try It problems to interactive questions that ask for a feature of the graph or the equation in standard form, described the Try It and exercise figures in words, and adapted selected end-of-section exercises into an interactive Practice block, where a graphing exercise asks for its vertices, center, or a minor-axis endpoint.</small>
