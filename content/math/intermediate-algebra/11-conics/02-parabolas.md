---
title: Parabolas
description: >-
  Graph vertical and horizontal parabolas and solve applications with parabolas.
source_section: "11.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph vertical parabolas
- Graph horizontal parabolas
- Solve applications with parabolas
{{< /callout >}}

## Graph Vertical Parabolas

The next conic section we will look at is a parabola. We define a parabola as all points in a plane that are the same distance from a fixed point and a fixed line. The fixed point is called the focus, and the fixed line is called the directrix of the parabola.

*A plane intersects one nappe of a double cone to form a parabola.*

{{< callout type="info" >}}
**Parabola.** A parabola is all points in a plane that are the same distance from a fixed point and a fixed line. The fixed point is called the focus, and the fixed line is called the directrix of the parabola.
{{< /callout >}}

*A parabola opens upward. A dashed vertical axis of symmetry passes through its vertex and focus. Every point on the parabola is the same distance from the focus as it is from the directrix.*

Previously, we learned to graph vertical parabolas from the general form or the standard form using properties. Those methods will also work here. We will summarize the properties here.

| Vertical parabolas | General form | Standard form |
| --- | --- | --- |
| Equation | $y=ax^2+bx+c$ | $y=a(x-h)^2+k$ |
| Orientation | $a>0$: up; $a<0$: down | $a>0$: up; $a<0$: down |
| Axis of symmetry | $x=-\tfrac{b}{2a}$ | $x=h$ |
| Vertex | Substitute $x=-\tfrac{b}{2a}$ and solve for $y$ | $(h,k)$ |
| $y$-intercept | Let $x=0$ | Let $x=0$ |
| $x$-intercepts | Let $y=0$ | Let $y=0$ |

The graphs show what the parabolas look like when they open up or down. Their position in relation to the $x$- or $y$-axis is merely an example.

*Two vertical parabolas have axis $x=h$ and vertex $(h,k)$. When $a>0$ the parabola opens up; when $a<0$ it opens down.*

To graph a parabola from these forms, we used the following steps.

{{< callout type="info" >}}
**How To: Graph vertical parabolas $y=ax^2+bx+c$ using properties.**

1. Determine whether the parabola opens upward or downward.
2. Find the axis of symmetry.
3. Find the vertex.
4. Find the $y$-intercept. Find the point symmetric to the $y$-intercept across the axis of symmetry.
5. Find the $x$-intercepts.
6. Graph the parabola.
{{< /callout >}}

The next example reviews the method of graphing a parabola from the general form of its equation.

**Example 11.12.** Graph $y=-x^2+6x-8$ by using properties.

**Solution.**

Since $a=-1$, the parabola opens downward.

To find the axis of symmetry, find $x=-\tfrac{b}{2a}$.

$$
x=-\tfrac{6}{2(-1)}=3
$$

The axis of symmetry is $x=3$.

The vertex is on the line $x=3$. Let $x=3$.

$$
y=-3^2+6\cdot3-8=-9+18-8=1
$$

The vertex is $(3,1)$.

The $y$-intercept occurs when $x=0$.

$$
y=-0^2+6\cdot0-8=-8
$$

The $y$-intercept is $(0,-8)$. The point $(0,-8)$ is three units to the left of the line of symmetry. The point three units to the right of the line of symmetry is $(6,-8)$.

The $x$-intercepts occur when $y=0$.

$$
\begin{aligned}
0&=-x^2+6x-8\\
0&=-(x^2-6x+8)\\
0&=-(x-4)(x-2)
\end{aligned}
$$

So $x=4$ or $x=2$. The $x$-intercepts are $(4,0)$ and $(2,0)$. Graph the parabola through these points, with vertex $(3,1)$ and axis of symmetry $x=3$.

{{< multiplechoice
  question="Which graph correctly shows $y=-x^2+5x-6$ graphed by using its properties?"
  mode="graph"
  answerIndex="0"
  hint="Find the axis of symmetry with $x=-\tfrac{b}{2a}$ to locate the vertex, then check which way the parabola opens."
>}}
{"ariaLabel":"A downward-opening parabola that rises only just above the x-axis, crossing it at two points close together, with its vertex marked at the peak.","xMin":-1,"xMax":6,"yMin":-4,"yMax":3,"tickLabels":true,"quadratics":[{"a":-1,"b":5,"c":-6}],"points":[{"at":[2.5,0.25],"label":"vertex"},{"at":[2,0]},{"at":[3,0]}]}
===OPT===
{"ariaLabel":"An upward-opening parabola that dips only just below the x-axis, crossing it at two points close together, with its vertex marked at the lowest point.","xMin":-1,"xMax":6,"yMin":-4,"yMax":3,"tickLabels":true,"quadratics":[{"a":1,"b":-5,"c":6}],"points":[{"at":[2.5,-0.25],"label":"vertex"},{"at":[2,0]},{"at":[3,0]}]}
===OPT===
{"ariaLabel":"A downward-opening parabola that rises well above the x-axis, crossing it at two points further apart, with its vertex marked at the peak.","xMin":-1,"xMax":6,"yMin":-4,"yMax":3,"tickLabels":true,"quadratics":[{"a":-1,"b":5,"c":-4}],"points":[{"at":[2.5,2.25],"label":"vertex"},{"at":[1,0]},{"at":[4,0]}]}
{{< /multiplechoice >}}

{{< graphplot
  question="Graph $y=-x^2+8x-12$ by using properties."
  answerDisplay="$y=-x^2+8x-12$"
  ariaLabel="A blank coordinate grid from −1 to 9 on the x-axis and −6 to 5 on the y-axis."
  hint="Factor to find the x-intercepts."
>}}
{"answer": {"quadratic": {"a": -1, "b": 8, "c": -12}, "plotPoints": 3}, "grid": {"xMin": -1, "xMax": 9, "yMin": -6, "yMax": 5}}
{{< /graphplot >}}

The next example reviews the method of graphing a parabola from the standard form of its equation, $y=a(x-h)^2+k$.

**Example 11.13.** Write $y=3x^2-6x+5$ in standard form and then use properties of standard form to graph the equation.

**Solution.** Rewrite the function in $y=a(x-h)^2+k$ form by completing the square.

$$
\begin{aligned}
y&=3x^2-6x+5\\
 &=3(x^2-2x)+5\\
 &=3(x^2-2x+1)+5-3\\
 &=3(x-1)^2+2
\end{aligned}
$$

Identify the constants $a=3$, $h=1$, $k=2$. Since $a=3$, the parabola opens upward. The axis of symmetry is $x=h$, so the axis of symmetry is $x=1$. The vertex is $(h,k)$, so the vertex is $(1,2)$.

Find the $y$-intercept by substituting $x=0$:

$$
y=3(0-1)^2+2=5.
$$

The $y$-intercept is $(0,5)$. The point symmetric to $(0,5)$ across the axis of symmetry is $(2,5)$.

Find the $x$-intercepts.

$$
\begin{aligned}
0&=3(x-1)^2+2\\
-2&=3(x-1)^2\\
-\tfrac{2}{3}&=(x-1)^2
\end{aligned}
$$

The square root of a negative number tells us the solutions are complex numbers. So there are no $x$-intercepts. Graph the parabola with vertex $(1,2)$ through $(0,5)$ and $(2,5)$.

{{< fillin
  question="ⓐ Write $y=2x^2+4x+5$ in standard form and ⓑ use properties of standard form to graph the equation."
  answer="2(x+1)^2+3"
  answerForm="vertex-form"
  answerDisplay="$y=2(x+1)^2+3$; vertex $(-1,3)$, axis $x=-1$, opens upward."
  hint="Factor 2 from the quadratic and linear terms, then complete the square."
>}}

{{< fillin
  question="ⓐ Write $y=-2x^2+8x-7$ in standard form and ⓑ use properties of standard form to graph the equation."
  answer="-2(x-2)^2+1"
  answerForm="vertex-form"
  answerDisplay="$y=-2(x-2)^2+1$; vertex $(2,1)$, axis $x=2$, opens downward."
  hint="Factor $-2$ from the quadratic and linear terms, then complete the square."
>}}

## Graph Horizontal Parabolas

Our work so far has only dealt with parabolas that open up or down. We are now going to look at horizontal parabolas. These parabolas open either to the left or to the right. If we interchange the $x$ and $y$ in our previous equations for parabolas, we get the equations for the parabolas that open to the left or to the right.

| Horizontal parabolas | General form | Standard form |
| --- | --- | --- |
| Equation | $x=ay^2+by+c$ | $x=a(y-k)^2+h$ |
| Orientation | $a>0$: right; $a<0$: left | $a>0$: right; $a<0$: left |
| Axis of symmetry | $y=-\tfrac{b}{2a}$ | $y=k$ |
| Vertex | Substitute $y=-\tfrac{b}{2a}$ and solve for $x$ | $(h,k)$ |
| $y$-intercepts | Let $x=0$ | Let $x=0$ |
| $x$-intercept | Let $y=0$ | Let $y=0$ |

*Two horizontal parabolas have axis of symmetry $y=k$ and vertex $(h,k)$. When $a>0$ the parabola opens to the right; when $a<0$ it opens to the left.*

Looking at these parabolas, do their graphs represent a function? Since both graphs would fail the vertical line test, they do not represent a function.

To graph a parabola that opens to the left or to the right is basically the same as what we did for parabolas that open up or down, with the reversal of the $x$ and $y$ variables.

{{< callout type="info" >}}
**How To: Graph horizontal parabolas $x=ay^2+by+c$ using properties.**

1. Determine whether the parabola opens to the left or to the right.
2. Find the axis of symmetry.
3. Find the vertex.
4. Find the $x$-intercept. Find the point symmetric to the $x$-intercept across the axis of symmetry.
5. Find the $y$-intercepts.
6. Graph the parabola.
{{< /callout >}}

**Example 11.14.** Graph $x=2y^2$ by using properties.

**Solution.** Since $a=2$, the parabola opens to the right. To find the axis of symmetry, find $y=-\tfrac{b}{2a}=-\tfrac{0}{2(2)}=0$. The axis of symmetry is $y=0$. The vertex is on the line $y=0$. Let $y=0$: $x=2(0)^2=0$. The vertex is $(0,0)$.

Since the vertex is $(0,0)$, both the $x$- and $y$-intercepts are the point $(0,0)$. To graph the parabola we need more points. In this case it is easiest to choose values of $y$. When $y=1$, $x=2$; when $y=2$, $x=8$. We also plot the points symmetric to $(2,1)$ and $(8,2)$ across the $y$-axis, the points $(2,-1)$ and $(8,-2)$. Graph the parabola.

{{< graphplot
  question="Graph $x=y^2$ by using properties, plotting the points at $y=-2,-1,0,1,2$."
  answerDisplay="The points $(0,0)$, $(1,1)$, $(1,-1)$, $(4,2)$, and $(4,-2)$"
  ariaLabel="A blank coordinate grid running from −2 to 6 horizontally and from −4 to 4 vertically."
  hint="Choose convenient positive and negative values of y."
>}}
{"answer": {"points": [[0, 0], [1, 1], [1, -1], [4, 2], [4, -2]]}, "grid": {"xMin": -2, "xMax": 6, "yMin": -4, "yMax": 4}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x=-y^2$ by using properties, plotting the points at $y=-2,-1,0,1,2$."
  answerDisplay="The points $(0,0)$, $(-1,1)$, $(-1,-1)$, $(-4,2)$, and $(-4,-2)$"
  ariaLabel="A blank coordinate grid running from −6 to 2 horizontally and from −4 to 4 vertically."
  hint="The sign of a determines whether the horizontal parabola opens left or right."
>}}
{"answer": {"points": [[0, 0], [-1, 1], [-1, -1], [-4, 2], [-4, -2]]}, "grid": {"xMin": -6, "xMax": 2, "yMin": -4, "yMax": 4}}
{{< /graphplot >}}

In the next example, the vertex is not the origin.

**Example 11.15.** Graph $x=-y^2+2y+8$ by using properties.

**Solution.** Since $a=-1$, the parabola opens to the left. To find the axis of symmetry,

$$
y=-\tfrac{b}{2a}=-\tfrac{2}{2(-1)}=1.
$$

The axis of symmetry is $y=1$. The vertex is on the line $y=1$. Let $y=1$: $x=-1^2+2(1)+8=9$. The vertex is $(9,1)$.

The $x$-intercept occurs when $y=0$: $x=8$, so the $x$-intercept is $(8,0)$. The point $(8,0)$ is one unit below the line of symmetry. The symmetric point one unit above the line of symmetry is $(8,2)$.

The $y$-intercepts occur when $x=0$.

$$
0=-y^2+2y+8=-(y-4)(y+2),
$$

so $y=4$ or $y=-2$. The $y$-intercepts are $(0,4)$ and $(0,-2)$. Connect the points to graph the parabola.

{{< graphplot
  question="Graph $x=-y^2-4y+12$ by using properties, plotting the vertex, the x-intercept and its mirror image across the axis of symmetry, and both y-intercepts."
  answerDisplay="The points $(16,-2)$, $(12,0)$, $(12,-4)$, $(0,2)$, and $(0,-6)$"
  ariaLabel="A blank coordinate grid running from −2 to 18 horizontally and from −8 to 4 vertically."
  hint="First find $y=-\tfrac{b}{2a}$."
>}}
{"answer": {"points": [[16, -2], [12, 0], [12, -4], [0, 2], [0, -6]]}, "grid": {"xMin": -2, "xMax": 18, "yMin": -8, "yMax": 4}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x=-y^2+2y-3$ by using properties, plotting the vertex, the x-intercept and its mirror image across the axis of symmetry, and the points at $y=-1$ and $y=3$."
  answerDisplay="The points $(-2,1)$, $(-3,0)$, $(-3,2)$, $(-6,-1)$, and $(-6,3)$"
  ariaLabel="A blank coordinate grid running from −8 to 2 horizontally and from −4 to 6 vertically."
  hint="Complete the square or find the axis of symmetry first."
>}}
{"answer": {"points": [[-2, 1], [-3, 0], [-3, 2], [-6, -1], [-6, 3]]}, "grid": {"xMin": -8, "xMax": 2, "yMin": -4, "yMax": 6}}
{{< /graphplot >}}

In the table, we see the relationship between the equation in standard form and the properties of the parabola. The How To box lists the steps for graphing a parabola in the standard form $x=a(y-k)^2+h$. We will use this procedure in the next example.

**Example 11.16.** Graph $x=2(y-2)^2+1$ using properties.

**Solution.** Identify the constants $a=2$, $h=1$, $k=2$. Since $a=2$, the parabola opens to the right. The axis of symmetry is $y=k$, so it is $y=2$. The vertex is $(h,k)$, so it is $(1,2)$.

Find the $x$-intercept by substituting $y=0$:

$$
x=2(0-2)^2+1=9.
$$

The $x$-intercept is $(9,0)$. The point symmetric to $(9,0)$ across the axis of symmetry is $(9,4)$.

Find the $y$-intercepts. Let $x=0$:

$$
0=2(y-2)^2+1,\qquad -1=2(y-2)^2.
$$

A square cannot be negative, so there is no real solution. So there are no $y$-intercepts. Graph the parabola.

{{< graphplot
  question="Graph $x=3(y-1)^2+2$ using properties, plotting the vertex and the x-intercept with its mirror image across the axis of symmetry."
  answerDisplay="The points $(2,1)$, $(5,0)$, and $(5,2)$"
  ariaLabel="A blank coordinate grid running from −1 to 8 horizontally and from −3 to 5 vertically."
  hint="Compare with $x=a(y-k)^2+h$ to find the vertex, then let $y=0$ for the x-intercept and reflect it across the axis of symmetry."
>}}
{"answer": {"points": [[2, 1], [5, 0], [5, 2]]}, "grid": {"xMin": -1, "xMax": 8, "yMin": -3, "yMax": 5}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x=2(y-3)^2+2$ using properties, plotting the vertex and the points at $y=2$ and $y=4$."
  answerDisplay="The points $(2,3)$, $(4,2)$, and $(4,4)$"
  ariaLabel="A blank coordinate grid running from −1 to 8 horizontally and from −1 to 7 vertically."
  hint="Compare with $x=a(y-k)^2+h$ to find the vertex, then evaluate at $y=2$ and $y=4$."
>}}
{"answer": {"points": [[2, 3], [4, 2], [4, 4]]}, "grid": {"xMin": -1, "xMax": 8, "yMin": -1, "yMax": 7}}
{{< /graphplot >}}

In the next example, we notice the $a$ is negative and so the parabola opens to the left.

**Example 11.17.** Graph $x=-4(y+1)^2+4$ using properties.

**Solution.** Identify the constants $a=-4$, $h=4$, $k=-1$. Since $a=-4$, the parabola opens to the left. The axis of symmetry is $y=k$, so it is $y=-1$. The vertex is $(h,k)$, so it is $(4,-1)$.

Find the $x$-intercept by substituting $y=0$: $x=-4(0+1)^2+4=0$. The $x$-intercept is $(0,0)$. The point symmetric to $(0,0)$ across the axis of symmetry is $(0,-2)$.

Find the $y$-intercepts. Let $x=0$:

$$
\begin{aligned}
0&=-4(y+1)^2+4\\
-4&=-4(y+1)^2\\
1&=(y+1)^2\\
y+1&=\pm1.
\end{aligned}
$$

Thus $y=0$ or $y=-2$. The $y$-intercepts are $(0,0)$ and $(0,-2)$. Graph the parabola.

{{< graphplot
  question="Graph $x=-4(y+2)^2+4$ using properties, plotting the vertex and both y-intercepts."
  answerDisplay="The points $(4,-2)$, $(0,-1)$, and $(0,-3)$"
  ariaLabel="A blank coordinate grid running from −2 to 6 horizontally and from −6 to 2 vertically."
  hint="Compare with $x=a(y-k)^2+h$ to find the vertex, then let $x=0$ for the y-intercepts."
>}}
{"answer": {"points": [[4, -2], [0, -1], [0, -3]]}, "grid": {"xMin": -2, "xMax": 6, "yMin": -6, "yMax": 2}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $x=-2(y+3)^2+2$ using properties, plotting the vertex and both y-intercepts."
  answerDisplay="The points $(2,-3)$, $(0,-2)$, and $(0,-4)$"
  ariaLabel="A blank coordinate grid running from −4 to 4 horizontally and from −7 to 1 vertically."
  hint="Compare with $x=a(y-k)^2+h$ to find the vertex, then let $x=0$ for the y-intercepts."
>}}
{"answer": {"points": [[2, -3], [0, -2], [0, -4]]}, "grid": {"xMin": -4, "xMax": 4, "yMin": -7, "yMax": 1}}
{{< /graphplot >}}

The next example requires that we first put the equation in standard form and then use the properties.

**Example 11.18.** Write $x=2y^2+12y+17$ in standard form and then use the properties of the standard form to graph the equation.

**Solution.** Rewrite the function in $x=a(y-k)^2+h$ form by completing the square.

$$
\begin{aligned}
x&=2y^2+12y+17\\
 &=2(y^2+6y)+17\\
 &=2(y^2+6y+9)+17-18\\
 &=2(y+3)^2-1.
\end{aligned}
$$

Identify the constants $a=2$, $h=-1$, $k=-3$. Since $a=2$, the parabola opens to the right. The axis of symmetry is $y=-3$. The vertex is $(-1,-3)$.

Find the $x$-intercept by substituting $y=0$: $x=2(0+3)^2-1=17$. The $x$-intercept is $(17,0)$. The point symmetric to $(17,0)$ across the axis of symmetry is $(17,-6)$.

Find the $y$-intercepts. Let $x=0$:

$$
0=2(y+3)^2-1,\quad \tfrac{1}{2}=(y+3)^2,\quad y=-3\pm\tfrac{\sqrt2}{2}.
$$

The $y$-intercepts are $\left(0,-3+\tfrac{\sqrt2}{2}\right)$ and $\left(0,-3-\tfrac{\sqrt2}{2}\right)$. Graph the parabola.

{{< fillin
  question="ⓐ Write $x=3y^2+6y+7$ in standard form and ⓑ use properties of the standard form to graph the equation."
  answer="3(y+1)^2+4"
  answerForm="vertex-form"
  answerDisplay="$x=3(y+1)^2+4$; vertex $(4,-1)$, axis $y=-1$, opens right."
  hint="Factor 3 from the quadratic and linear terms, then complete the square."
>}}

{{< fillin
  question="ⓐ Write $x=-4y^2-16y-12$ in standard form and ⓑ use properties of the standard form to graph the equation."
  answer="-4(y+2)^2+4"
  answerForm="vertex-form"
  answerDisplay="$x=-4(y+2)^2+4$; vertex $(4,-2)$, axis $y=-2$, opens left."
  hint="Factor $-4$ from the quadratic and linear terms, then complete the square."
>}}

## Solve Applications with Parabolas

Many architectural designs incorporate parabolas. It is not uncommon for bridges to be constructed using parabolas as we will see in the next example.

**Example 11.19.** Find the equation of the parabolic arch formed in the foundation of the bridge shown. Write the equation in standard form.

*The parabolic arch is 10 feet high and 20 feet wide at the base.*

**Solution.**

We will first set up a coordinate system and draw the parabola. The graph will give us the information we need to write the equation of the graph in the standard form $y=a(x-h)^2+k$.

Let the lower left side of the bridge be the origin of the coordinate grid at the point $(0,0)$. Since the base is 20 feet wide the point $(20,0)$ represents the lower right side. The bridge is 10 feet high at the highest point. The highest point is the vertex of the parabola so the $y$-coordinate of the vertex will be 10. Since the bridge is symmetric, the vertex must fall halfway between the leftmost point, $(0,0)$, and the rightmost point, $(20,0)$. From this we know that the $x$-coordinate of the vertex will also be 10.

Identify the vertex, $(h,k)=(10,10)$. Substitute the values into the standard form:

$$
y=a(x-10)^2+10.
$$

The value of $a$ is still unknown. To find the value of $a$ use one of the other points on the parabola. Substitute $(0,0)$ into the equation.

$$
\begin{aligned}
0&=a(0-10)^2+10\\
-10&=100a\\
a&=-\tfrac{1}{10}.
\end{aligned}
$$

Substitute the value for $a$ into the equation:

$$
y=-\tfrac{1}{10}(x-10)^2+10.
$$

{{< fillin
  question="Find the equation of the parabolic arch formed in the foundation of the bridge shown. The arch is 20 feet high and 40 feet wide at the base. Write the equation in standard form, placing the lower-left point at the origin."
  answer="-\frac{1}{20}(x-20)^2+20"
  answerForm="vertex-form"
  answerDisplay="$y=-\tfrac{1}{20}(x-20)^2+20$"
  hint="The vertex is halfway across the 40-foot base and 20 feet high."
>}}

{{< fillin
  question="Find the equation of the parabolic arch formed in the foundation of the bridge shown. The arch is 5 feet high and 10 feet wide at the base. Write the equation in standard form, placing the lower-left point at the origin."
  answer="-\frac{1}{5}(x-5)^2+5"
  answerForm="vertex-form"
  answerDisplay="$y=-\tfrac{1}{5}(x-5)^2+5$"
  hint="The vertex is halfway across the 10-foot base and 5 feet high."
>}}

## Key terms

A **parabola** is all points in a plane that are the same
distance from a fixed point and a fixed line. The fixed point is the
**focus**, and the fixed line is the **directrix**.

## Practice

### Graph vertical parabolas

{{< multiplechoice
  question="Determine whether the parabola $y=-x^2+4x-3$ opens upward or downward."
  answer="downward"
  hint="Look at the sign of the coefficient of $x^2$."
>}}
upward
downward
{{< /multiplechoice >}}

{{< fillin
  question="Find the axis of symmetry of the parabola $y=-x^2+4x-3$."
  answer="x=2"
  answerDisplay="$x=2$"
  hint="Use $x=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="Find the vertex of the parabola $y=-x^2+4x-3$, as an ordered pair."
  answer="(2,1)"
  answerDisplay="$(2,1)$"
  hint="Substitute the axis-of-symmetry value back into the equation to find $y$."
>}}

{{< fillin
  question="Find the x-intercepts of the parabola $y=-x^2+4x-3$. Enter the intercept with the smaller x-value first, separated by a comma."
  answer="(1,0),(3,0)"
  answerDisplay="$(1,0),\ (3,0)$"
  hint="Set $y=0$ and factor the quadratic."
>}}

{{< multiplechoice
  question="Write $y=-x^2+2x-4$ in standard form."
  answer="$y=-(x-1)^2-3$"
  hint="Factor $-1$ from the quadratic and linear terms, then complete the square — and remember that the $+1$ you add inside the parentheses is really $-1$ once the factor is distributed back."
>}}
$y=-(x-1)^2-3$
$y=-(x+1)^2-3$
$y=-(x-1)^2-5$
$y=(x-1)^2-3$
{{< /multiplechoice >}}

{{< fillin
  question="What is the vertex of the parabola $y=-x^2+2x-4$?"
  answer="(1,-3)"
  answerDisplay="$(1,-3)$"
  hint="Write the equation in standard form $y=a(x-h)^2+k$, then read off $(h,k)$."
>}}

### Graph horizontal parabolas

{{< multiplechoice
  question="Determine whether the parabola $x=-y^2-2y+3$ opens to the left or to the right."
  answer="left"
  hint="Look at the sign of the coefficient of $y^2$."
>}}
right
left
{{< /multiplechoice >}}

{{< fillin
  question="Find the axis of symmetry of the parabola $x=-y^2-2y+3$."
  answer="y=-1"
  answerDisplay="$y=-1$"
  hint="Use $y=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="Find the vertex of the parabola $x=-y^2-2y+3$, as an ordered pair."
  answer="(4,-1)"
  answerDisplay="$(4,-1)$"
  hint="Substitute the axis-of-symmetry value back into the equation to find $x$."
>}}

{{< fillin
  question="Find the y-intercepts of the parabola $x=-y^2-2y+3$. Enter the intercept with the smaller y-value first, separated by a comma."
  answer="(0,-3),(0,1)"
  answerDisplay="$(0,-3),\ (0,1)$"
  hint="Set $x=0$ and factor the quadratic."
>}}

{{< multiplechoice
  question="Write $x=y^2+4y-5$ in standard form."
  answer="$x=(y+2)^2-9$"
  hint="Complete the square on the $y$-terms: add $4$ inside the parentheses and subtract it from the constant."
>}}
$x=(y+2)^2+9$
$x=(y+2)^2-1$
$x=(y-2)^2-9$
$x=(y+2)^2-9$
{{< /multiplechoice >}}

{{< fillin
  question="What is the vertex of the parabola $x=y^2+4y-5$?"
  answer="(-9,-2)"
  answerDisplay="$(-9,-2)$"
  hint="Write the equation in standard form $x=a(y-k)^2+h$, then read off $(h,k)$."
>}}

### Solve applications with parabolas

{{< fillin
  question="Find the equation of the parabolic arch formed in the foundation of a bridge that is 15 feet high and 30 feet wide at the base. Write the equation in standard form, placing the lower-left point at the origin."
  answer="-\frac{1}{15}(x-15)^2+15"
  answerForm="vertex-form"
  answerDisplay="$y=-\tfrac{1}{15}(x-15)^2+15$"
  hint="The vertex is halfway across the 30-foot base and 15 feet high."
>}}

{{< fillin
  question="Find the equation of the parabolic arch formed in the foundation of a bridge that is 90 feet high and 60 feet wide at the base. Write the equation in standard form, placing the lower-left point at the origin."
  answer="-\frac{1}{10}(x-30)^2+90"
  answerForm="vertex-form"
  answerDisplay="$y=-\tfrac{1}{10}(x-30)^2+90$"
  hint="The vertex is halfway across the 60-foot base and 90 feet high."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 11.2](https://openstax.org/books/intermediate-algebra-2e/pages/11-2-parabolas) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: omitted readiness quizzes, self-checks, media links, and complex source figures; converted Try It problems to interactive questions, described source figures in words, and adapted selected end-of-section exercises into an interactive Practice block.</small>
