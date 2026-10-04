---
title: Hyperbolas
description: >-
  Graph hyperbolas centered at the origin and at any point, and identify
  conic sections from their equations.
source_section: "11.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph a hyperbola with center at $(0,0)$
- Graph a hyperbola with center at $(h,k)$
- Identify conic sections by their equations
{{< /callout >}}

## Graph a Hyperbola with Center at $(0,0)$

The last conic section we will look at is called a **hyperbola**. We will see
that the equation of a hyperbola looks the same as the equation of an ellipse,
except it is a difference rather than a sum. While the equations of an ellipse
and a hyperbola are very similar, their graphs are very different.

We define a hyperbola as all points in a plane where the difference of their
distances from two fixed points is constant. Each of the fixed points is
called a **focus** of the hyperbola.

{{< callout type="info" >}}
### Hyperbola

A **hyperbola** is all points in a plane where the difference of their
distances from two fixed points is constant. Each of the fixed points is
called a **focus** of the hyperbola.
{{< /callout >}}

The line through the foci is called the **transverse axis**. The two points
where the transverse axis intersects the hyperbola are each a **vertex** of
the hyperbola. The midpoint of the segment joining the foci is called the
**center** of the hyperbola. The line perpendicular to the transverse axis
that passes through the center is called the **conjugate axis**. Each piece
of the graph is called a **branch** of the hyperbola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A hyperbola centered at the origin whose two branches open left and right. The center is at the origin. The x-axis is labeled the transverse axis: a vertex sits where each branch crosses it, and a focus sits on it farther out, beyond each vertex. The y-axis is labeled the conjugate axis.","xMin":-8,"xMax":8,"yMin":-7,"yMax":7,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":3,"b":4}],"points":[{"at":[0,0],"label":"Center","labelSide":"se"},{"at":[3,0],"label":"Vertex","labelSide":"nw"},{"at":[-3,0],"label":"Vertex","labelSide":"ne"},{"at":[5,0],"label":"Focus","labelSide":"n"},{"at":[-5,0],"label":"Focus","labelSide":"n"}],"texts":[{"at":[4.3,-1.4],"text":"Transverse axis"},{"at":[0.35,6.2],"text":"Conjugate axis"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A hyperbola centered at the origin whose two branches open up and down. The center is at the origin. The y-axis is labeled the transverse axis: a vertex sits where each branch crosses it, and a focus sits on it farther out, beyond each vertex. The x-axis is labeled the conjugate axis.","xMin":-8,"xMax":8,"yMin":-7,"yMax":7,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":3,"b":4,"vertical":true}],"points":[{"at":[0,0],"label":"Center","labelSide":"se"},{"at":[0,3],"label":"Vertex","labelSide":"se"},{"at":[0,-3],"label":"Vertex","labelSide":"ne"},{"at":[0,5],"label":"Focus","labelSide":"e"},{"at":[0,-5],"label":"Focus","labelSide":"e"}],"texts":[{"at":[-0.4,6.3],"text":"Transverse axis","anchor":"end"},{"at":[3.8,-1.2],"text":"Conjugate axis"}]}
{{< /apfigure >}}

Again our goal is to connect the geometry of a conic with algebra. Placing the
hyperbola on a rectangular coordinate system gives us that opportunity.
Place the hyperbola so the foci $(-c,0)$ and $(c,0)$ are on the $x$-axis and
the center is the origin.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A hyperbola centered at the origin with branches opening left and right, and its two foci, (−c, 0) and (c, 0), each labeled Focus, on the x-axis outside the vertices. From a point (x, y) on the right branch, a segment labeled d₁ runs to the focus (−c, 0) and a segment labeled d₂ runs to the focus (c, 0).","xMin":-8,"xMax":8,"yMin":-7,"yMax":7,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":3,"b":4}],"segments":[{"from":[-5,0],"to":[4.5,4.4721],"label":"d₁","labelSide":"nw"},{"from":[4.5,4.4721],"to":[5,0],"label":"d₂","labelSide":"e"}],"points":[{"at":[0,0]},{"at":[3,0]},{"at":[-3,0]},{"at":[-5,0],"label":"(−c, 0)","labelSide":"s"},{"at":[5,0],"label":"(c, 0)","labelSide":"s"},{"at":[4.5,4.4721],"label":"(x, y)"}],"texts":[{"at":[-5.3,0.55],"text":"Focus","anchor":"end"},{"at":[5.3,0.55],"text":"Focus"}]}
{{< /apfigure >}}

The definition states the difference of the distance from the foci to a point
$(x,y)$ is constant. So $|d_1-d_2|$ is a constant that we will call $2a$, so
$|d_1-d_2|=2a$. We will use the distance formula to lead us to an algebraic
formula for a hyperbola.

Use the distance formula to find $d_1,d_2$:

$$
\left|\sqrt{(x-(-c))^2+(y-0)^2}-\sqrt{(x-c)^2+(y-0)^2}\right|=2a.
$$

Eliminate the radicals. To simplify the equation of the hyperbola, let
$c^2-a^2=b^2$. So, the equation of a hyperbola centered at the origin in
standard form is

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1.
$$

To graph the hyperbola, it will be helpful to know about the intercepts. We
will find the $x$-intercepts and $y$-intercepts using the formula.

| $x$-intercepts | $y$-intercepts |
|:--|:--|
| Let $y=0$. Then $\frac{x^2}{a^2}-\frac{0^2}{b^2}=1$, so $x^2=a^2$ and $x=\pm a$. The $x$-intercepts are $(a,0)$ and $(-a,0)$. | Let $x=0$. Then $\frac{0^2}{a^2}-\frac{y^2}{b^2}=1$, so $y^2=-b^2$ and $y=\pm\sqrt{-b^2}$. There are no $y$-intercepts. |

The $a,b$ values in the equation also help us find the **asymptotes** of the
hyperbola. The asymptotes are intersecting straight lines that the branches
of the graph approach but never intersect as the $x,y$ values get larger and
larger.

To find the asymptotes, we sketch a rectangle whose sides intersect the
$x$-axis at the vertices $(-a,0),(a,0)$ and intersect the $y$-axis at
$(0,-b),(0,b)$. The lines containing the diagonals of this rectangle are the
asymptotes of the hyperbola. The rectangle and asymptotes are not part of the
hyperbola, but they help us graph the hyperbola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A hyperbola centered at the origin, with the center marked, and branches opening left and right through the vertices (−a, 0) and (a, 0). A dashed central rectangle has sides through the vertices on the x-axis and through (0, b) and (0, −b) on the y-axis. The two dashed lines through the rectangle's diagonals are the asymptotes, y = (b/a)x and y = −(b/a)x, and each branch bends toward them.","xMin":-8,"xMax":8,"yMin":-6,"yMax":6,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":4,"b":3}],"segments":[{"from":[-4,3],"to":[4,3],"dashed":true},{"from":[4,3],"to":[4,-3],"dashed":true},{"from":[4,-3],"to":[-4,-3],"dashed":true},{"from":[-4,-3],"to":[-4,3],"dashed":true}],"lines":[{"through":[[0,0],[4,3]],"dashed":true,"label":"y = (b/a)x","arrows":false},{"through":[[0,0],[4,-3]],"dashed":true,"label":"y = −(b/a)x","arrows":false}],"points":[{"at":[0,0]},{"at":[-4,0],"label":"(−a, 0)"},{"at":[4,0],"label":"(a, 0)"},{"at":[0,3],"label":"(0, b)"},{"at":[0,-3],"label":"(0, −b)"}]}
{{< /apfigure >}}

The asymptotes pass through the origin and we can evaluate their slope using
the rectangle we sketched. They have equations
$y=\frac{b}{a}x$ and $y=-\frac{b}{a}x$.

There are two equations for hyperbolas, depending whether the transverse axis
is vertical or horizontal. We can tell whether the transverse axis is
horizontal by looking at the equation. When the equation is in standard form,
if the $x^2$-term is positive, the transverse axis is horizontal. When the
equation is in standard form, if the $y^2$-term is positive, the transverse
axis is vertical.

The second equation could be derived similarly to what we have done. We will
summarize the results here.

{{< callout type="info" >}}
### Standard Form of the Equation of a Hyperbola with Center $(0,0)$

The standard form of the equation of a hyperbola with center $(0,0)$ is

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1
\quad\text{or}\quad
\frac{y^2}{a^2}-\frac{x^2}{b^2}=1.
$$

Unlike the equation of an ellipse, the denominator of $x^2$ is not always
$a^2$ and the denominator of $y^2$ is not always $b^2$.

When the $x^2$-term is positive, the transverse axis is on the $x$-axis. When
the $y^2$-term is positive, the transverse axis is on the $y$-axis.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A hyperbola centered at the origin, with the center marked, and branches opening up and down through the vertices (0, a) and (0, −a). A dashed central rectangle has sides through the vertices on the y-axis and through (−b, 0) and (b, 0) on the x-axis. The two dashed lines through the rectangle's diagonals are the asymptotes, and each branch bends toward them.","xMin":-6,"xMax":6,"yMin":-8,"yMax":8,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":4,"b":3,"vertical":true}],"segments":[{"from":[-3,4],"to":[3,4],"dashed":true},{"from":[3,4],"to":[3,-4],"dashed":true},{"from":[3,-4],"to":[-3,-4],"dashed":true},{"from":[-3,-4],"to":[-3,4],"dashed":true}],"lines":[{"through":[[0,0],[3,4]],"dashed":true,"arrows":false},{"through":[[0,0],[3,-4]],"dashed":true,"arrows":false}],"points":[{"at":[0,0]},{"at":[0,4],"label":"(0, a)"},{"at":[0,-4],"label":"(0, −a)"},{"at":[-3,0],"label":"(−b, 0)"},{"at":[3,0],"label":"(b, 0)"}]}
{{< /apfigure >}}

| Property | $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | $\frac{y^2}{a^2}-\frac{x^2}{b^2}=1$ |
|:--|:--|:--|
| Orientation | Transverse axis on the $x$-axis. Opens left and right. | Transverse axis on the $y$-axis. Opens up and down. |
| Vertices | $(-a,0),(a,0)$ | $(0,-a),(0,a)$ |
| $x$-intercepts | $(-a,0),(a,0)$ | none |
| $y$-intercepts | none | $(0,-a),(0,a)$ |
| Rectangle | Use $(\pm a,0),(0,\pm b)$ | Use $(0,\pm a),(\pm b,0)$ |
| Asymptotes | $y=\frac{b}{a}x,\ y=-\frac{b}{a}x$ | $y=\frac{a}{b}x,\ y=-\frac{a}{b}x$ |

We will use these properties to graph hyperbolas.

### Example 11.27

**How to graph a hyperbola with center $(0,0)$.** Graph

$$
\frac{x^2}{25}-\frac{y^2}{4}=1.
$$

**Solution.**

1. The equation is in standard form.
2. Since the $x^2$-term is positive, the transverse axis is horizontal.
3. Since $a^2=25$, then $a=\pm5$. The vertices are on the $x$-axis:
   $(-5,0),(5,0)$.
4. Since $a=\pm5$, the rectangle will intersect the $x$-axis at the
   vertices. Since $b=\pm2$, the rectangle will intersect the $y$-axis at
   $(0,-2)$ and $(0,2)$.
5. The asymptotes have the equations
   $y=\frac{2}{5}x$ and $y=-\frac{2}{5}x$.
6. Start at each vertex and use the asymptotes as a guide to draw the two
   branches.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of x²/25 − y²/4 = 1 on a grid from −10 to 10. A dashed rectangle centered at the origin passes through the vertices (−5, 0) and (5, 0) on the x-axis and through (0, 2) and (0, −2) on the y-axis. Dashed asymptotes y = (2/5)x and y = −(2/5)x run through its diagonals. The two branches start at the vertices and open left and right, approaching the asymptotes.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":16,"tickLabels":true,"tickStep":2,"hyperbolas":[{"at":[0,0],"a":5,"b":2}],"segments":[{"from":[-5,2],"to":[5,2],"dashed":true},{"from":[5,2],"to":[5,-2],"dashed":true},{"from":[5,-2],"to":[-5,-2],"dashed":true},{"from":[-5,-2],"to":[-5,2],"dashed":true}],"lines":[{"through":[[0,0],[1,0.4]],"dashed":true,"arrows":false},{"through":[[0,0],[1,-0.4]],"dashed":true,"arrows":false}],"points":[{"at":[-5,0],"label":"(−5, 0)"},{"at":[5,0],"label":"(5, 0)"},{"at":[0,2],"label":"(0, 2)"},{"at":[0,-2],"label":"(0, −2)"}]}
{{< /apfigure >}}

{{< fillin
  question="For the hyperbola $\frac{x^2}{16}-\frac{y^2}{4}=1$, enter the positive $x$-coordinate of a vertex."
  answer="4"
  answerForm="decimal"
  answerDisplay="$4$"
  hint="Read $a^2$ from the denominator of the positive term; the vertices are $(\pm a,0)$."
>}}

{{< fillin
  question="For the hyperbola $\frac{x^2}{9}-\frac{y^2}{16}=1$, enter the positive $x$-coordinate of a vertex."
  answer="3"
  answerForm="decimal"
  answerDisplay="$3$"
  hint="Read $a^2$ from the denominator of the positive term; the vertices are $(\pm a,0)$."
>}}

We summarize the steps for reference.

{{< callout type="info" >}}
### How To: Graph a hyperbola centered at $(0,0)$

1. Write the equation in standard form.
2. Determine whether the transverse axis is horizontal or vertical.
3. Find the vertices.
4. Sketch the rectangle centered at the origin intersecting one axis at
   $\pm a$ and the other at $\pm b$.
5. Sketch the asymptotes—the lines through the diagonals of the rectangle.
6. Draw the two branches of the hyperbola.
{{< /callout >}}

Sometimes the equation for a hyperbola needs to be first placed in standard
form before we graph it.

### Example 11.28

Graph $4y^2-16x^2=64$.

**Solution.** To write the equation in standard form, divide each term by 64
to make the equation equal to 1.

$$
\begin{aligned}
4y^2-16x^2&=64\\
\frac{4y^2}{64}-\frac{16x^2}{64}&=\frac{64}{64}\\
\frac{y^2}{16}-\frac{x^2}{4}&=1.
\end{aligned}
$$

Since the $y^2$-term is positive, the transverse axis is vertical. Since
$a^2=16$, then $a=\pm4$. The vertices are on the $y$-axis,
$(0,-4),(0,4)$. Since $b^2=4$, then $b=\pm2$.

Sketch the rectangle intersecting the $x$-axis at $(-2,0),(2,0)$ and the
$y$-axis at the vertices. Sketch the asymptotes through the diagonals of the
rectangle. Draw the two branches of the hyperbola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y²/16 − x²/4 = 1 on a grid from −10 to 10. A dashed rectangle centered at the origin passes through the vertices (0, 4) and (0, −4) on the y-axis and through (−2, 0) and (2, 0) on the x-axis. Dashed asymptotes run through its diagonals. The two branches start at the vertices and open up and down, approaching the asymptotes.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":16,"tickLabels":true,"tickStep":2,"hyperbolas":[{"at":[0,0],"a":4,"b":2,"vertical":true}],"segments":[{"from":[-2,4],"to":[2,4],"dashed":true},{"from":[2,4],"to":[2,-4],"dashed":true},{"from":[2,-4],"to":[-2,-4],"dashed":true},{"from":[-2,-4],"to":[-2,4],"dashed":true}],"lines":[{"through":[[0,0],[1,2.0]],"dashed":true,"arrows":false},{"through":[[0,0],[1,-2.0]],"dashed":true,"arrows":false}],"points":[{"at":[0,4]},{"at":[0,-4]}]}
{{< /apfigure >}}

{{< fillin
  question="Write $4y^2-25x^2=100$ in standard form."
  answer="\frac{y^2}{25}-\frac{x^2}{4}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\frac{y^2}{25}-\frac{x^2}{4}=1$"
  hint="Divide every term by the constant on the right side so that side becomes $1$."
>}}

{{< fillin
  question="Write $25y^2-9x^2=225$ in standard form."
  answer="\frac{y^2}{9}-\frac{x^2}{25}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\frac{y^2}{9}-\frac{x^2}{25}=1$"
  hint="Divide every term by the constant on the right side so that side becomes $1$."
>}}

## Graph a Hyperbola with Center at $(h,k)$

Hyperbolas are not always centered at the origin. When a hyperbola is centered
at $(h,k)$, the equations change a bit as reflected in the table.

| Property | $\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1$ | $\frac{(y-k)^2}{a^2}-\frac{(x-h)^2}{b^2}=1$ |
|:--|:--|:--|
| Orientation | Transverse axis is horizontal. Opens left and right. | Transverse axis is vertical. Opens up and down. |
| Center | $(h,k)$ | $(h,k)$ |
| Vertices | $a$ units to the left and right of the center | $a$ units above and below the center |
| Rectangle | Use $a$ units left/right of center and $b$ units above/below the center | Use $a$ units above/below the center and $b$ units left/right of center |

### Example 11.29

**How to graph a hyperbola with center $(h,k)$.** Graph

$$
\frac{(x-1)^2}{9}-\frac{(y-2)^2}{16}=1.
$$

**Solution.**

1. The equation is in standard form.
2. Since the $x^2$-term is positive, the hyperbola opens left and right. The
   transverse axis is horizontal.
3. Here $h=1$, $k=2$, $a^2=9$, and $b^2=16$. The center is $(1,2)$,
   $a=3$, and $b=4$.
4. Mark the center $(1,2)$. Sketch the rectangle that goes through the points
   3 units to the left/right of the center and 4 units above and below the
   center.
5. Sketch the diagonals. Mark the vertices, which are on the rectangle 3
   units to the left and right of the center.
6. Start at each vertex and use the asymptotes as a guide.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of (x − 1)²/9 − (y − 2)²/16 = 1 on a grid from −10 to 10. The center (1, 2) is marked. A dashed rectangle around it reaches 3 units left and right of the center and 4 units above and below it, and dashed asymptotes run through its diagonals. The branches start at the vertices (−2, 2) and (4, 2) and open left and right, approaching the asymptotes.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":16,"tickLabels":true,"tickStep":2,"hyperbolas":[{"at":[1,2],"a":3,"b":4}],"segments":[{"from":[-2,6],"to":[4,6],"dashed":true},{"from":[4,6],"to":[4,-2],"dashed":true},{"from":[4,-2],"to":[-2,-2],"dashed":true},{"from":[-2,-2],"to":[-2,6],"dashed":true}],"lines":[{"through":[[1,2],[2,3.333333333333333]],"dashed":true,"arrows":false},{"through":[[1,2],[2,0.6666666666666667]],"dashed":true,"arrows":false}],"points":[{"at":[1,2],"label":"(1, 2)","labelSide":"ne"},{"at":[-2,2],"label":"(−2, 2)"},{"at":[4,2],"label":"(4, 2)"}],"texts":[{"at":[1.3,3.55],"text":"center"}]}
{{< /apfigure >}}

{{< fillin
  question="For $\frac{(x-3)^2}{25}-\frac{(y-1)^2}{9}=1$, enter the center as an ordered pair."
  answer="(3,1)"
  answerForm="decimal"
  answerDisplay="$(3,1)$"
  hint="Compare $x-h$ and $y-k$ with the standard form."
>}}

{{< fillin
  question="For $\frac{(x-2)^2}{4}-\frac{(y-2)^2}{9}=1$, enter the center as an ordered pair."
  answer="(2,2)"
  answerForm="decimal"
  answerDisplay="$(2,2)$"
  hint="Compare $x-h$ and $y-k$ with the standard form."
>}}

We summarize the steps for easy reference.

{{< callout type="info" >}}
### How To: Graph a hyperbola not centered at the origin, with center $(h,k)$

1. Write the equation in standard form.
2. Determine whether the transverse axis is horizontal or vertical.
3. Find the center and $a,b$.
4. Sketch the rectangle centered at $(h,k)$ using $a,b$.
5. Sketch the asymptotes—the lines through the diagonals of the rectangle.
   Mark the vertices.
6. Draw the two branches of the hyperbola.
{{< /callout >}}

Be careful as you identify the center. The standard equation has $x-h$ and
$y-k$ with the center as $(h,k)$.

### Example 11.30

Graph

$$
\frac{(y+2)^2}{9}-\frac{(x+1)^2}{4}=1.
$$

**Solution.** Since the $y^2$-term is positive, the hyperbola opens up and
down. Rewrite $y+2=y-(-2)$ and $x+1=x-(-1)$. The center is $(-1,-2)$.
Also, $a=3$ and $b=2$.

Sketch the rectangle that goes through the points 3 units above and below the
center and 2 units to the left/right of the center. Sketch the asymptotes—the
lines through the diagonals of the rectangle. Mark the vertices. Graph the
branches.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of (y + 2)²/9 − (x + 1)²/4 = 1 on a grid from −10 to 10. The center (−1, −2) is marked. A dashed rectangle around it reaches 3 units above and below the center and 2 units left and right of it, and dashed asymptotes run through its diagonals. The branches start at the vertices (−1, 1) and (−1, −5) and open up and down, approaching the asymptotes.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":22,"tickLabels":true,"tickStep":4,"hyperbolas":[{"at":[-1,-2],"a":3,"b":2,"vertical":true}],"segments":[{"from":[-3,1],"to":[1,1],"dashed":true},{"from":[1,1],"to":[1,-5],"dashed":true},{"from":[1,-5],"to":[-3,-5],"dashed":true},{"from":[-3,-5],"to":[-3,1],"dashed":true}],"lines":[{"through":[[-1,-2],[0,-0.5]],"dashed":true,"arrows":false},{"through":[[-1,-2],[0,-3.5]],"dashed":true,"arrows":false}],"points":[{"at":[-1,-2]},{"at":[-1,1]},{"at":[-1,-5]}],"texts":[{"at":[-1.5,-0.7],"text":"center","anchor":"middle"},{"at":[-1.5,-1.3],"text":"(−1, −2)","anchor":"middle"}]}
{{< /apfigure >}}

{{< fillin
  question="For $\frac{(y+3)^2}{16}-\frac{(x+2)^2}{9}=1$, enter the center as an ordered pair."
  answer="(-2,-3)"
  answerForm="decimal"
  answerDisplay="$(-2,-3)$"
  hint="Rewrite each addition as subtraction of a negative number."
>}}

{{< fillin
  question="For $\frac{(y+2)^2}{9}-\frac{(x+2)^2}{9}=1$, enter the center as an ordered pair."
  answer="(-2,-2)"
  answerForm="decimal"
  answerDisplay="$(-2,-2)$"
  hint="Rewrite each addition as subtraction of a negative number."
>}}

Again, sometimes we have to put the equation in standard form as our first
step.

### Example 11.31

Write the equation in standard form and graph
$4x^2-9y^2-24x-36y-36=0$.

**Solution.** To get to standard form, complete the squares.

$$
\begin{aligned}
4x^2-9y^2-24x-36y-36&=0\\
4(x^2-6x)-9(y^2+4y)&=36\\
4(x^2-6x+9)-9(y^2+4y+4)&=36+36-36\\
4(x-3)^2-9(y+2)^2&=36.
\end{aligned}
$$

Divide each term by 36 to get the constant to be 1.

$$
\frac{(x-3)^2}{9}-\frac{(y+2)^2}{4}=1.
$$

Since the $x^2$-term is positive, the hyperbola opens left and right. The
center is $(3,-2)$, $a=3$, and $b=2$.

Sketch the rectangle that goes through the points 3 units to the left/right of
the center and 2 units above and below the center. Sketch the asymptotes—the
lines through the diagonals of the rectangle. Mark the vertices. Graph the
branches.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of (x − 3)²/9 − (y + 2)²/4 = 1 on a grid from −8 to 12 on the x-axis and −10 to 10 on the y-axis. The center (3, −2) is marked. A dashed rectangle around it reaches 3 units left and right of the center and 2 units above and below it, and dashed asymptotes run through its diagonals. The branches start at the vertices (0, −2) and (6, −2) and open left and right, approaching the asymptotes.","xMin":-8,"xMax":12,"yMin":-10,"yMax":10,"unit":16,"tickLabels":true,"tickStep":2,"hyperbolas":[{"at":[3,-2],"a":3,"b":2}],"segments":[{"from":[0,0],"to":[6,0],"dashed":true},{"from":[6,0],"to":[6,-4],"dashed":true},{"from":[6,-4],"to":[0,-4],"dashed":true},{"from":[0,-4],"to":[0,0],"dashed":true}],"lines":[{"through":[[3,-2],[4,-1.3333333333333335]],"dashed":true,"arrows":false},{"through":[[3,-2],[4,-2.6666666666666665]],"dashed":true,"arrows":false}],"points":[{"at":[3,-2],"label":"center (3, −2)","labelSide":"s"},{"at":[0,-2]},{"at":[6,-2]}]}
{{< /apfigure >}}

{{< fillin
  question="Write $9x^2-16y^2+18x+64y-199=0$ in standard form."
  answer="\frac{(x+1)^2}{16}-\frac{(y-2)^2}{9}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\frac{(x+1)^2}{16}-\frac{(y-2)^2}{9}=1$"
  hint="Group the variable terms, complete both squares, and make the constant $1$."
>}}

{{< fillin
  question="Write $16x^2-25y^2+96x-50y-281=0$ in standard form."
  answer="\frac{(x+3)^2}{25}-\frac{(y+1)^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\frac{(x+3)^2}{25}-\frac{(y+1)^2}{16}=1$"
  hint="Group the variable terms, complete both squares, and make the constant $1$."
>}}

## Identify Conic Sections by their Equations

Now that we have completed our study of the conic sections, we will take a
look at the different equations and recognize some ways to identify a conic
by its equation. When we are given an equation to graph, it is helpful to
identify the conic so we know what next steps to take.

To identify a conic from its equation, it is easier if we put the variable
terms on one side of the equation and the constants on the other.

| Conic | Characteristics of $x^2$- and $y^2$-terms | Example |
|:--|:--|:--|
| Parabola | Either $x^2$ OR $y^2$. Only one variable is squared. | $x=3y^2-2y+1$ |
| Circle | $x^2$- and $y^2$-terms have the same coefficients | $x^2+y^2=49$ |
| Ellipse | $x^2$- and $y^2$-terms have the same sign, different coefficients | $4x^2+25y^2=100$ |
| Hyperbola | $x^2$- and $y^2$-terms have different signs, different coefficients | $25y^2-4x^2=100$ |

### Example 11.32

Identify the graph of each equation as a circle, parabola, ellipse, or
hyperbola.

(a) $9x^2+4y^2+56y+160=0$

The $x^2$- and $y^2$-terms have the same sign and different coefficients:
**ellipse**.

(b) $9x^2-16y^2+18x+64y-199=0$

The $x^2$- and $y^2$-terms have different signs and different coefficients:
**hyperbola**.

(c) $x^2+y^2-6x-8y=0$

The $x^2$- and $y^2$-terms have the same coefficients: **circle**.

(d) $y=-2x^2-4x-5$

Only one variable, $x$, is squared: **parabola**.

{{< multiplechoice
  question="Identify the graph of $16x^2+9y^2=144$."
  answer="ellipse"
  hint="Check which variables are squared, then compare the signs and coefficients of the squared terms with the table above."
>}}
ellipse
parabola
circle
hyperbola
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the graph of $16y^2-9x^2=144$."
  answer="hyperbola"
  hint="Check which variables are squared, then compare the signs and coefficients of the squared terms with the table above."
>}}
ellipse
parabola
hyperbola
circle
{{< /multiplechoice >}}

## Key terms

A **hyperbola** is the set of all points in a plane for which
the difference of the distances from two fixed points, the **foci**, is
constant. The line through the foci is the **transverse axis**; the two points
where it meets the hyperbola are the **vertices**; the midpoint of the segment
joining the foci is the **center**; the line through the center perpendicular
to the transverse axis is the **conjugate axis**; each piece of the graph is a
**branch**; and the branches approach the **asymptotes**.

## Practice

### Graph a hyperbola with center at $(0,0)$

{{< multiplechoice
  question="For the hyperbola $\frac{x^2}{9}-\frac{y^2}{4}=1$, is the transverse axis horizontal or vertical?"
  answer="horizontal"
  hint="The transverse axis lies along the axis of the variable whose term is positive."
>}}
horizontal
vertical
{{< /multiplechoice >}}

{{< fillin
  question="For the hyperbola $\frac{y^2}{25}-\frac{x^2}{4}=1$, enter the positive $y$-coordinate of a vertex."
  answer="5"
  answerForm="decimal"
  answerDisplay="$5$"
  hint="Since the $y^2$-term is positive, the vertices are $(0,\pm a)$; read $a^2$ from that term's denominator."
>}}

{{< graphplot
  question="For the hyperbola $4y^2-9x^2=36$, graph both asymptotes."
  answerDisplay="$y = \frac{3}{2}x,\ y = -\frac{3}{2}x$"
  ariaLabel="A blank grid from −6 to 6 on both axes."
  hint="Divide every term by the constant to reach standard form; when the $y^2$-term is positive, the asymptotes are $y=\pm\frac{a}{b}x$."
>}}
{"answer": {"asymptotes": [{"slope": 1.5, "intercept": 0}, {"slope": -1.5, "intercept": 0}]}, "grid": {"xMin": -6, "xMax": 6, "yMin": -6, "yMax": 6}}
{{< /graphplot >}}

### Graph a hyperbola with center at $(h,k)$

{{< fillin
  question="For the hyperbola $\frac{(x-1)^2}{16}-\frac{(y-3)^2}{4}=1$, enter the center as an ordered pair."
  answer="(1,3)"
  answerForm="decimal"
  answerDisplay="$(1,3)$"
  hint="Compare $x-h$ and $y-k$ with the standard form; the center is $(h,k)$."
>}}

{{< fillin
  question="For the hyperbola $\frac{(y-4)^2}{16}-\frac{(x+1)^2}{25}=1$, enter the vertex with the larger $y$-coordinate as an ordered pair."
  answer="(-1,8)"
  answerForm="decimal"
  answerDisplay="$(-1,8)$"
  hint="Find the center $(h,k)$ and $a$; since the $y^2$-term is positive, the vertices are $a$ units above and below the center."
>}}

{{< multiplechoice
  question="For the hyperbola $\frac{(x-3)^2}{25}-\frac{(y+2)^2}{9}=1$, is the transverse axis horizontal or vertical?"
  answer="horizontal"
  hint="In standard form, the transverse axis lies along the direction of the variable whose squared term is positive."
>}}
horizontal
vertical
{{< /multiplechoice >}}

{{< multiplechoice
  question="Write $y^2-x^2-4y+2x-6=0$ in standard form."
  answer="$\tfrac{(y-2)^2}{9}-\tfrac{(x-1)^2}{9}=1$"
  hint="Group the variable terms and complete both squares — watch the sign when you factor $-1$ out of the $x$-terms — then divide through so the right side is $1$."
>}}
$\tfrac{(y-2)^2}{9}-\tfrac{(x-1)^2}{9}=1$
$\tfrac{(y+2)^2}{9}-\tfrac{(x+1)^2}{9}=1$
$\tfrac{(y-2)^2}{9}+\tfrac{(x-1)^2}{9}=1$
$\tfrac{(x-1)^2}{9}-\tfrac{(y-2)^2}{9}=1$
{{< /multiplechoice >}}

### Identify conic sections by their equations

{{< multiplechoice
  question="Identify the graph of $x=-2y^2-12y-16$."
  answer="parabola"
  hint="Check which variables are squared, then compare with the table in the last section of the lesson."
>}}
parabola
hyperbola
circle
ellipse
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the graph of $x^2+y^2=9$."
  answer="circle"
  hint="Check which variables are squared, then compare with the table in the last section of the lesson."
>}}
circle
ellipse
parabola
hyperbola
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the graph of $16x^2-4y^2+64x-24y-36=0$."
  answer="hyperbola"
  hint="Check which variables are squared, then compare with the table in the last section of the lesson."
>}}
hyperbola
circle
ellipse
parabola
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the graph of $16x^2+36y^2=576$."
  answer="ellipse"
  hint="Check which variables are squared, then compare with the table in the last section of the lesson."
>}}
parabola
circle
ellipse
hyperbola
{{< /multiplechoice >}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 11.4](https://openstax.org/books/intermediate-algebra-2e/pages/11-4-hyperbolas) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: omitted readiness quizzes, the cone figure, Key Concepts summary, writing exercises, self-checks, and media links; recreated the definition figures and each worked example's graph as accessible graphs; wrote "hyperbola" where the derivation twice says "ellipse"; corrected $b=4$ to $b=2$ in the last centered-at-$(h,k)$ example, whose rectangle reaches 2 units above and below the center; converted selected Try It problems to interactive questions; condensed the section vocabulary into a Key terms paragraph; and adapted selected end-of-section exercises into an interactive Practice block.</small>
