---
title: Quadratic Functions
description: >-
  Recognizing the characteristics of a parabola, relating its graph to the
  general and standard forms of a quadratic function, finding a quadratic
  function's minimum or maximum value, and solving area, revenue, and
  projectile problems that turn on that extreme value — adapted from OpenStax
  Precalculus 2e, Section 3.2.
source_section: "3.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Recognize characteristics of parabolas
- Understand how the graph of a parabola is related to its quadratic function
- Determine a quadratic function's minimum or maximum value
- Solve problems involving a quadratic function's minimum or maximum value
{{< /callout >}}

Curved antennas are commonly used to focus microwaves and radio waves to
transmit television and telephone signals, as well as satellite and
spacecraft communication. The cross-section of the antenna is in the shape of
a parabola, which can be described by a quadratic function.

In this section, we will investigate quadratic functions, which frequently
model problems involving area and projectile motion. Working with quadratic
functions can be less complex than working with higher degree functions, so
they provide a good opportunity for a detailed study of function behavior.

## Recognizing characteristics of parabolas

The graph of a quadratic function is a U-shaped curve called a **parabola**.
One important feature of the graph is that it has an extreme point, called
the **vertex**. If the parabola opens up, the vertex represents the lowest
point on the graph, or the **minimum value** of the quadratic function. If
the parabola opens down, the vertex represents the highest point on the
graph, or the **maximum value**. In either case, the vertex is a turning
point on the graph. The graph is also symmetric with a vertical line drawn
through the vertex, called the **axis of symmetry**. These features are
illustrated below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward with vertex at (1, -4). A dashed vertical line at x = 1 marks the axis of symmetry. The parabola crosses the x-axis at the x-intercepts (-1, 0) and (3, 0), and crosses the y-axis at the y-intercept (0, -3).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"quadratics":[{"a":1,"b":-2,"c":-3}],"lines":[{"x":1,"dashed":true,"arrows":false}],"points":[{"at":[-1,0]},{"at":[3,0]},{"at":[0,-3]},{"at":[1,-4],"label":"Vertex"}]}
{{< /apfigure >}}

The $y$-intercept is the point at which the parabola crosses the $y$-axis.
The $x$-intercepts are the points at which the parabola crosses the $x$-axis.
If they exist, the $x$-intercepts represent the **zeros**, or **roots**, of
the quadratic function, the values of $x$ at which $y=0$.

**Example.** Determine the vertex, axis of symmetry, zeros, and $y$-intercept
of the parabola shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward with vertex at (3, 1) and y-intercept at (0, 7). It does not cross the x-axis.","xMin":-4,"xMax":8,"yMin":-1,"yMax":10,"unit":20,"tickLabels":true,"xTickStep":2,"yTickStep":2,"quadratics":[{"a":0.6666666666666666,"b":-4,"c":7}],"points":[{"at":[3,1],"label":"(3, 1)"},{"at":[0,7],"label":"(0, 7)"}]}
{{< /apfigure >}}

**Solution.** The vertex is the turning point of the graph. We can see that
the vertex is at $(3,1)$. Because this parabola opens upward, the axis of
symmetry is the vertical line that intersects the parabola at the vertex. So
the axis of symmetry is $x=3$. This parabola does not cross the $x$-axis, so
it has no zeros. It crosses the $y$-axis at $(0,7)$, so this is the
$y$-intercept.

## Understanding how the graphs of parabolas are related to their quadratic functions

The **general form of a quadratic function** presents the function in the
form

$$f(x)=ax^2+bx+c$$

where $a$, $b$, and $c$ are real numbers and $a\ne0$. If $a>0$, the parabola
opens upward. If $a<0$, the parabola opens downward. We can use the general
form of a parabola to find the equation for the axis of symmetry.

The axis of symmetry is defined by $x=-\tfrac{b}{2a}$. If we use the
quadratic formula, $x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, to solve
$ax^2+bx+c=0$ for the $x$-intercepts, or zeros, we find the value of $x$
halfway between them is always $x=-\tfrac{b}{2a}$, the equation for the axis
of symmetry.

The graph below is the quadratic function written in general form as
$y=x^2+4x+3$. In this form, $a=1$, $b=4$, and $c=3$. Because $a>0$, the
parabola opens upward. The axis of symmetry is $x=-\tfrac{4}{2(1)}=-2$. This
also makes sense because we can see from the graph that the vertical line
$x=-2$ divides the graph in half. The vertex always occurs along the axis of
symmetry. For a parabola that opens upward, the vertex occurs at the lowest
point on the graph, in this instance, $(-2,-1)$. The $x$-intercepts, those
points where the parabola crosses the $x$-axis, occur at $(-3,0)$ and
$(-1,0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y = x squared + 4x + 3, opening upward with vertex at (-2, -1). A dashed vertical line at x = -2 marks the axis of symmetry. The x-intercepts are at (-3, 0) and (-1, 0).","xMin":-6,"xMax":6,"yMin":-4,"yMax":8,"unit":18,"tickLabels":true,"xTickStep":2,"yTickStep":2,"quadratics":[{"a":1,"b":4,"c":3}],"lines":[{"x":-2,"dashed":true,"arrows":false}],"points":[{"at":[-3,0]},{"at":[-1,0]},{"at":[-2,-1],"label":"Vertex","labelSide":"sw"}],"texts":[{"at":[1.3,7.4],"text":"y = x² + 4x + 3","anchor":"start"}]}
{{< /apfigure >}}

The **standard form of a quadratic function** presents the function in the
form

$$f(x)=a(x-h)^2+k$$

where $(h,k)$ is the vertex. Because the vertex appears in the standard form
of the quadratic function, this form is also known as the **vertex form of a
quadratic function**.

As with the general form, if $a>0$, the parabola opens upward and the vertex
is a minimum. If $a<0$, the parabola opens downward, and the vertex is a
maximum. The graph below is the quadratic function written in standard form
as $y=-3(x+2)^2+4$. Since $x-h=x+2$ in this example, $h=-2$. In this form,
$a=-3$, $h=-2$, and $k=4$. Because $a<0$, the parabola opens downward. The
vertex is at $(-2,4)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola y = -3(x+2) squared + 4, opening downward with vertex at (-2, 4).","xMin":-6,"xMax":6,"yMin":-9,"yMax":5,"unit":18,"tickLabels":true,"xTickStep":2,"yTickStep":2,"quadratics":[{"a":-3,"b":-12,"c":-8}],"points":[{"at":[-2,4],"label":"Vertex"}],"texts":[{"at":[0,4.35],"text":"y = -3(x + 2)² + 4","anchor":"start"}]}
{{< /apfigure >}}

The standard form is useful for determining how the graph is transformed from
the graph of $y=x^2$. The graph below is that basic function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals x squared, a parabola opening upward with vertex at the origin.","xMin":-4,"xMax":4,"yMin":-1,"yMax":10,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"b":0,"c":0}],"texts":[{"at":[0.9,8.3],"text":"y = x²","anchor":"start"}]}
{{< /apfigure >}}

If $k>0$, the graph shifts upward, whereas if $k<0$, the graph shifts
downward. Above, $k>0$, so the graph is shifted 4 units upward. If $h>0$, the
graph shifts toward the right and if $h<0$, the graph shifts to the left.
Above, $h<0$, so the graph is shifted 2 units to the left. The magnitude of
$a$ indicates the stretch of the graph. If $|a|>1$, the point associated with
a particular $x$-value shifts farther from the $x$-axis, so the graph appears
to become narrower, and there is a vertical stretch. But if $|a|<1$, the
point associated with a particular $x$-value shifts closer to the $x$-axis,
so the graph appears to become wider, but in fact there is a vertical
compression. Above, $|a|>1$, so the graph becomes narrower.

The standard form and the general form are equivalent methods of describing
the same function. We can see this by expanding out the general form and
setting it equal to the standard form.

$$
\begin{array}{lrcl}
& a(x-h)^2+k &=& ax^2+bx+c \\[4pt]
& ax^2-2ahx+(ah^2+k) &=& ax^2+bx+c
\end{array}
$$

For the linear terms to be equal, the coefficients must be equal.

$$-2ah=b,\ \text{so}\ h=-\tfrac{b}{2a}$$

This is the **axis of symmetry** we defined earlier. Setting the constant
terms equal:

$$
\begin{array}{lrcl}
& ah^2+k &=& c \\[4pt]
& k &=& c-ah^2 \\[4pt]
& &=& c-a\left(-\tfrac{b}{2a}\right)^2 \\[4pt]
& &=& c-\tfrac{b^2}{4a}
\end{array}
$$

In practice, though, it is usually easier to remember that $k$ is the output
value of the function when the input is $h$, so $f(h)=k$.

{{< callout type="info" >}}
**Forms of quadratic functions.** A quadratic function is a function of
degree two. The graph of a **quadratic function** is a parabola. The
**general form of a quadratic function** is $f(x)=ax^2+bx+c$ where $a$, $b$,
and $c$ are real numbers and $a\ne0$.

The **standard form of a quadratic function** is $f(x)=a(x-h)^2+k$.

The vertex $(h,k)$ is located at

$$h=-\tfrac{b}{2a},\quad k=f(h)=f\!\left(\tfrac{-b}{2a}\right)$$
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given a graph of a quadratic function, write the equation of the
function in general form.

1. Identify the horizontal shift of the parabola; this value is $h$. Identify
   the vertical shift of the parabola; this value is $k$.
2. Substitute the values of the horizontal and vertical shift for $h$ and $k$
   in the function $f(x)=a(x-h)^2+k$.
3. Substitute the values of any point, other than the vertex, on the graph of
   the parabola for $x$ and $f(x)$.
4. Solve for the stretch factor, $|a|$.
5. If the parabola opens up, $a>0$. If the parabola opens down, $a<0$ since
   this means the graph was reflected about the $x$-axis.
6. Expand and simplify to write in general form.
{{< /callout >}}

**Example.** Write an equation for the quadratic function $g$ shown below as
a transformation of $f(x)=x^2$, and then expand the formula, and simplify
terms to write the equation in general form.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward with vertex at (-2, -3), passing through the point (0, -1).","xMin":-7,"xMax":3,"yMin":-5,"yMax":5,"unit":20,"tickLabels":true,"quadratics":[{"a":0.5,"b":2,"c":-1}]}
{{< /apfigure >}}

**Solution.** We can see the graph of $g$ is the graph of $f(x)=x^2$ shifted
to the left 2 and down 3, giving a formula in the form
$g(x)=a(x+2)^2-3$.

Substituting the coordinates of a point on the curve, such as $(0,-1)$, we
can solve for the stretch factor.

$$
\begin{array}{lrcl}
& -1 &=& a(0+2)^2-3 \\[4pt]
& 2 &=& 4a \\[4pt]
& a &=& \tfrac{1}{2}
\end{array}
$$

In standard form, the algebraic model for this graph is
$g(x)=\tfrac{1}{2}(x+2)^2-3$.

To write this in general polynomial form, we can expand the formula and
simplify terms.

$$
\begin{array}{lrcl}
& g(x) &=& \tfrac{1}{2}(x+2)^2-3 \\[4pt]
& &=& \tfrac{1}{2}(x+2)(x+2)-3 \\[4pt]
& &=& \tfrac{1}{2}(x^2+4x+4)-3 \\[4pt]
& &=& \tfrac{1}{2}x^2+2x+2-3 \\[4pt]
& &=& \tfrac{1}{2}x^2+2x-1
\end{array}
$$

Notice that the horizontal and vertical shifts of the basic graph of the
quadratic function determine the location of the vertex of the parabola; the
vertex is unaffected by stretches and compressions.

**Analysis.** We can check our work using the table feature on a graphing
utility. First enter $\text{Y1}=\tfrac{1}{2}(x+2)^2-3$. Next, select
$\text{TBLSET}$, then use $\text{TblStart}=-6$ and $\Delta\text{Tbl}=2$, and
select $\text{TABLE}$.

| $x$ | $-6$ | $-4$ | $-2$ | $0$ | $2$ |
| :--- | ---: | ---: | ---: | ---: | ---: |
| $y$ | $5$ | $-1$ | $-3$ | $-1$ | $5$ |

The ordered pairs in the table correspond to points on the graph.

A coordinate grid can be superimposed over the quadratic path of a
basketball, with the shooter releasing the ball at the origin. Assume the
point $(-4,7)$ is the highest point of the basketball's trajectory, and that
the hoop sits 4 feet high at the horizontal position $x=-7.5$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola modeling a basketball's path, released at the origin and reaching its highest point at (-4, 7). At the hoop's horizontal position, x = -7.5, the curve's height is well below the marked hoop height of 4 feet.","xMin":-9,"xMax":1,"yMin":-1,"yMax":8,"unit":24,"tickLabels":true,"quadratics":[{"a":-0.4375,"b":-3.5,"c":0,"from":-8.3,"to":0.4}],"points":[{"at":[0,0],"label":"release"},{"at":[-4,7],"label":"(-4, 7)"},{"at":[-7.5,4],"label":"hoop, 4 ft","open":true}]}
{{< /apfigure >}}

{{< fillin
  question="Find an equation for the path of the basketball, in standard (vertex) form."
  answer="-\frac{7}{16}(x+4)^2+7"
  answerForm="vertex-form"
  answerDisplay="$h(x)=-\tfrac{7}{16}(x+4)^2+7$"
  hint="The vertex is the highest point, $(-4,7)$; substitute the origin for $x$ and $h(x)$ to solve for the stretch factor $a$."
>}}

{{< multiplechoice
  question="Using that equation, does the shooter make the basket?"
  answer="No, because the ball's height at the hoop, x = -7.5, is only about 1.64 feet"
  hint="Evaluate the equation at $x=-7.5$ and compare it with the hoop's height of 4 feet."
>}}
Yes, because the ball's height at the hoop, x = -7.5, is about 4 feet
No, because the ball's height at the hoop, x = -7.5, is only about 1.64 feet
Yes, because the vertex is higher than the hoop
No, because the ball never comes back down to the hoop's height
{{< /multiplechoice >}}

{{< callout type="info" >}}
**How to:** given a quadratic function in general form, find the vertex of
the parabola.

1. Identify $a$, $b$, and $c$.
2. Find $h$, the $x$-coordinate of the vertex, by substituting $a$ and $b$
   into $h=-\tfrac{b}{2a}$.
3. Find $k$, the $y$-coordinate of the vertex, by evaluating
   $k=f(h)=f\!\left(-\tfrac{b}{2a}\right)$.
{{< /callout >}}

**Example.** Find the vertex of the quadratic function $f(x)=2x^2-6x+7$.
Rewrite the quadratic in standard form (vertex form).

**Solution.** The horizontal coordinate of the vertex will be at

$$
\begin{array}{lrcl}
& h &=& -\tfrac{b}{2a} \\[4pt]
& &=& -\tfrac{-6}{2(2)} \\[4pt]
& &=& \tfrac{6}{4} \\[4pt]
& &=& \tfrac{3}{2}
\end{array}
$$

The vertical coordinate of the vertex will be at

$$
\begin{array}{lrcl}
& k &=& f(h) \\[4pt]
& &=& f\!\left(\tfrac{3}{2}\right) \\[4pt]
& &=& 2\left(\tfrac{3}{2}\right)^2-6\left(\tfrac{3}{2}\right)+7 \\[4pt]
& &=& \tfrac{5}{2}
\end{array}
$$

Rewriting into standard form, the stretch factor will be the same as the $a$
in the original quadratic.

$$
\begin{array}{lrcl}
& f(x) &=& ax^2+bx+c \\[4pt]
& f(x) &=& 2x^2-6x+7
\end{array}
$$

Using the vertex to determine the shifts,

$$f(x)=2\left(x-\tfrac{3}{2}\right)^2+\tfrac{5}{2}$$

**Analysis.** One reason we may want to identify the vertex of the parabola
is that this point will inform us where the maximum or minimum value of the
output occurs, $(k)$, and where it occurs, $(x)$.

{{< multiplechoice
  question="Which of these is $g(x)=13+x^2-6x$ written in general form?"
  answer="$g(x)=x^2-6x+13$"
  hint="General form lists the terms in descending order of degree."
>}}
$g(x)=x^2-6x+13$
$g(x)=13+x^2-6x$
$g(x)=-6x+x^2+13$
$g(x)=(x-3)^2+4$
{{< /multiplechoice >}}

{{< fillin
  question="Given the equation $g(x)=13+x^2-6x$, write the equation in standard (vertex) form."
  answer="(x-3)^2+4"
  answerForm="vertex-form"
  answerDisplay="$g(x)=(x-3)^2+4$"
  hint="Find $h=-\tfrac{b}{2a}$ and $k=g(h)$ from the general form $x^2-6x+13$, then substitute into $a(x-h)^2+k$."
>}}

## Finding the domain and range of a quadratic function

Any number can be the input value of a quadratic function. Therefore, the
domain of any quadratic function is all real numbers. Because parabolas have
a maximum or a minimum point, the range is restricted. Since the vertex of a
parabola will be either a maximum or a minimum, the range will consist of all
$y$-values greater than or equal to the $y$-coordinate at the turning point
or less than or equal to the $y$-coordinate at the turning point, depending
on whether the parabola opens up or down.

{{< callout type="info" >}}
**Domain and range of a quadratic function.** The domain of any **quadratic
function** is all real numbers.

The range of a quadratic function written in general form
$f(x)=ax^2+bx+c$ with a positive $a$ value is
$f(x)\ge f\!\left(-\tfrac{b}{2a}\right)$, or
$\left[f\!\left(-\tfrac{b}{2a}\right),\infty\right)$.

The range of a quadratic function written in general form with a negative $a$
value is $f(x)\le f\!\left(-\tfrac{b}{2a}\right)$, or
$\left(-\infty,f\!\left(-\tfrac{b}{2a}\right)\right]$.

The range of a quadratic function written in standard form
$f(x)=a(x-h)^2+k$ with a positive $a$ value is $f(x)\ge k$; the range of a
quadratic function written in standard form with a negative $a$ value is
$f(x)\le k$.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given a quadratic function, find the domain and range.

1. Identify the domain of any quadratic function as all real numbers.
2. Determine whether $a$ is positive or negative. If $a$ is positive, the
   parabola has a minimum. If $a$ is negative, the parabola has a maximum.
3. Determine the maximum or minimum value of the parabola, $k$.
4. If the parabola has a minimum, the range is given by $f(x)\ge k$, or
   $[k,\infty)$. If the parabola has a maximum, the range is given by
   $f(x)\le k$, or $(-\infty,k]$.
{{< /callout >}}

**Example.** Find the domain and range of $f(x)=-5x^2+9x-1$.

**Solution.** As with any quadratic function, the domain is all real numbers.

Because $a$ is negative, the parabola opens downward and has a maximum
value. We need to determine the maximum value. We can begin by finding the
$x$-value of the vertex.

$$
\begin{array}{lrcl}
& h &=& -\tfrac{b}{2a} \\[4pt]
& &=& -\tfrac{9}{2(-5)} \\[4pt]
& &=& \tfrac{9}{10}
\end{array}
$$

The maximum value is given by $f(h)$.

$$
\begin{array}{lrcl}
& f\!\left(\tfrac{9}{10}\right) &=& -5\left(\tfrac{9}{10}\right)^2+9\left(\tfrac{9}{10}\right)-1 \\[4pt]
& &=& \tfrac{61}{20}
\end{array}
$$

The range is $f(x)\le\tfrac{61}{20}$, or $\left(-\infty,\tfrac{61}{20}\right]$.

{{< fillin
  question="Find the range of $f(x)=2\left(x-\tfrac{4}{7}\right)^2+\tfrac{8}{11}$."
  answer="[\frac{8}{11},\infty)"
  answerDisplay="$\left[\tfrac{8}{11},\infty\right)$"
  hint="This is already in standard form; $a>0$, so the range is $f(x)\ge k$."
>}}


## Determining the maximum and minimum values of quadratic functions

The output of the quadratic function at the vertex is the maximum or minimum
value of the function, depending on the orientation of the **parabola**. We
can see the maximum and minimum values in the two graphs below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (a): the graph of f of x equals the quantity x minus 2, squared, plus 1. A parabola opening upward with a minimum value of 1, occurring at x = 2, at the point (2, 1).","xMin":-2,"xMax":6,"yMin":-2,"yMax":10,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":5}],"points":[{"at":[2,1],"label":"(2, 1)","labelSide":"e"}],"texts":[{"at":[2,8.4],"text":"f(x) = (x - 2)² + 1","anchor":"middle"},{"at":[2.55,-1.3],"text":"Minimum value of 1","anchor":"middle"},{"at":[2.55,-1.88],"text":"occurs at x = 2","anchor":"middle"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel (b): the graph of g of x equals negative the quantity x plus 3, squared, plus 4. A parabola opening downward with a maximum value of 4, occurring at x = -3, at the point (-3, 4).","xMin":-6,"xMax":2,"yMin":-6,"yMax":6,"unit":24,"tickLabels":true,"quadratics":[{"a":-1,"b":-6,"c":-5}],"points":[{"at":[-3,4],"label":"(-3, 4)"}],"texts":[{"at":[-5.55,-3.5],"text":"g(x) = -(x + 3)² + 4","anchor":"start"},{"at":[-3.2,5.55],"text":"Maximum value of 4","anchor":"middle"},{"at":[-3.2,4.95],"text":"occurs at x = -3","anchor":"middle"}]}
{{< /apfigure >}}

There are many real-world scenarios that involve finding the maximum or
minimum value of a quadratic function, such as applications involving area
and revenue.

**Example.** A backyard farmer wants to enclose a rectangular space for a new
garden within her fenced backyard. She has purchased 80 feet of wire fencing
to enclose three sides, and she will use a section of the backyard fence as
the fourth side.

1. Find a formula for the area enclosed by the fence if the sides of fencing
   perpendicular to the existing fence have length $L$.
2. What dimensions should she make her garden to maximize the enclosed area?

**Solution.** Let's use a diagram such as the one below to record the given
information. It is also helpful to introduce a temporary variable, $W$, to
represent the width of the garden and the length of the fence section
parallel to the backyard fence.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A rectangular backyard with a smaller rectangular garden set against its top edge, which is the existing fence. The garden's two vertical sides have length L and its bottom side has length W.","polygons":[{"points":[[0,0],[10,0],[10,7],[0,7]]},{"points":[[2,4],[7,4],[7,7],[2,7]],"edgeLabels":["W","L",null,null]}],"texts":[{"at":[4.5,5.3],"text":"Garden"},{"at":[5,1.5],"text":"Backyard"},{"at":[4.5,7.35],"text":"existing fence","fontSize":11}]}
{{< /apfigure >}}

1. We know we have only 80 feet of fence available, and $L+W+L=80$, or more
   simply, $2L+W=80$. This allows us to represent the width, $W$, in terms of
   $L$.

   $$W=80-2L$$

   Now we are ready to write an equation for the area the fence encloses. We
   know the area of a rectangle is length multiplied by width, so

   $$
   \begin{array}{rclcl}
   A &=& LW &=& L(80-2L) \\[4pt]
   A(L) &=& 80L-2L^2 &&
   \end{array}
   $$

   This formula represents the area of the fence in terms of the variable
   length $L$. The function, written in general form, is

   $$A(L)=-2L^2+80L$$

2. The quadratic has a negative leading coefficient, so the graph will open
   downward, and the vertex will be the maximum value for the area. In
   finding the vertex, we must be careful because the equation is not
   written in standard polynomial form with decreasing powers. This is why
   we rewrote the function in general form above. Since $a$ is the
   coefficient of the squared term, $a=-2$, $b=80$, and $c=0$.

   To find the vertex:

   $$
   \begin{array}{lrcl}
   & h &=& -\tfrac{80}{2(-2)} \\[4pt]
   & &=& 20
   \end{array}
   $$

   and

   $$
   \begin{array}{lrcl}
   & k &=& A(20) \\[4pt]
   & &=& 80(20)-2(20)^2 \\[4pt]
   & &=& 800
   \end{array}
   $$

   The maximum value of the function is an area of 800 square feet, which
   occurs when $L=20$ feet. When the shorter sides are 20 feet, there is 40
   feet of fencing left for the longer side. To maximize the area, she
   should enclose the garden so the two shorter sides have length 20 feet
   and the longer side parallel to the existing fence has length 40 feet.

**Analysis.** This problem also could be solved by graphing the quadratic
function. We can see where the maximum area occurs on the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of A of L equals -2L squared + 80L, a downward-opening parabola with vertex at (20, 800), the maximum enclosed area.","xMin":0,"xMax":50,"yMin":0,"yMax":1000,"xUnit":7,"yUnit":0.35,"margin":40,"grid":false,"tickLabels":true,"xTickStep":10,"yTickStep":100,"xLabel":"Length (L)","yLabel":"Area (A)","quadratics":[{"a":-2,"b":80,"c":0}],"points":[{"at":[20,800],"label":"(20, 800)","labelSide":"n"}],"texts":[{"at":[26.3,650],"text":"A","anchor":"start"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**How to:** given an application involving revenue, use a quadratic equation
to find the maximum.

1. Write a quadratic equation for revenue.
2. Find the vertex of the quadratic equation.
3. Determine the $y$-value of the vertex.
{{< /callout >}}

**Example.** The unit price of an item affects its supply and demand. That
is, if the unit price goes up, the demand for the item will usually
decrease. For example, a local newspaper currently has 84,000 subscribers at
a quarterly charge of \$30. Market research has suggested that if the owners
raise the price to \$32, they would lose 5,000 subscribers. Assuming that
subscriptions are linearly related to the price, what price should the
newspaper charge for a quarterly subscription to maximize their revenue?

**Solution.** Revenue is the amount of money a company brings in. In this
case, the revenue can be found by multiplying the price per subscription
times the number of subscribers, or quantity. We can introduce variables,
$p$ for price per subscription and $Q$ for quantity, giving us the equation
$\text{Revenue}=pQ$.

Because the number of subscribers changes with the price, we need to find a
relationship between the variables. We know that currently $p=30$ and
$Q=84{,}000$. We also know that if the price rises to \$32, the newspaper
would lose 5,000 subscribers, giving a second pair of values, $p=32$ and
$Q=79{,}000$. From this we can find a linear equation relating the two
quantities. The slope will be

$$
\begin{array}{lrcl}
& m &=& \tfrac{79{,}000-84{,}000}{32-30} \\[4pt]
& &=& \tfrac{-5{,}000}{2} \\[4pt]
& &=& -2{,}500
\end{array}
$$

This tells us the paper will lose 2,500 subscribers for each dollar they
raise the price. We can then solve for the $y$-intercept.

$$
\begin{array}{lrcl}
\text{Substitute in the point } Q=84{,}000 \text{ and } p=30. & Q &=& -2{,}500p+b \\[4pt]
\text{Solve for } b. & 84{,}000 &=& -2{,}500(30)+b \\[4pt]
& b &=& 159{,}000
\end{array}
$$

This gives us the linear equation $Q=-2{,}500p+159{,}000$ relating cost and
subscribers. We now return to our revenue equation.

$$
\begin{array}{lrcl}
& \text{Revenue} &=& pQ \\[4pt]
& \text{Revenue} &=& p(-2{,}500p+159{,}000) \\[4pt]
& \text{Revenue} &=& -2{,}500p^2+159{,}000p
\end{array}
$$

We now have a quadratic function for revenue as a function of the
subscription charge. To find the price that will maximize revenue for the
newspaper, we can find the vertex.

$$
\begin{array}{lrcl}
& h &=& -\tfrac{159{,}000}{2(-2{,}500)} \\[4pt]
& &=& 31.8
\end{array}
$$

The model tells us that the maximum revenue will occur if the newspaper
charges \$31.80 for a subscription. To find what the maximum revenue is, we
evaluate the revenue function.

$$
\begin{array}{lrcl}
& \text{maximum revenue} &=& -2{,}500(31.8)^2+159{,}000(31.8) \\[4pt]
& &=& 2{,}528{,}100
\end{array}
$$

**Analysis.** This could also be solved by graphing the quadratic, below. We
can see the maximum revenue on the graph of the quadratic function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of revenue, in thousands of dollars, as a function of subscription price p, a downward-opening parabola with vertex at (31.8, 2528.1), the maximum revenue.","xMin":0,"xMax":80,"yMin":0,"yMax":3000,"xUnit":4,"yUnit":0.11,"margin":40,"grid":false,"tickLabels":true,"xTickStep":10,"yTickStep":500,"xLabel":"Price (p)","yLabel":"Revenue ($1,000)","quadratics":[{"a":-2.5,"b":159,"c":0}],"points":[{"at":[31.8,2528.1],"label":"(31.80, 2528.1)","labelSide":"n"}]}
{{< /apfigure >}}

## Finding the x- and y-intercepts of a quadratic function

Much as we did in the application problems above, we also need to find
intercepts of quadratic equations for graphing parabolas. Recall that we
find the $y$-intercept of a quadratic by evaluating the function at an input
of zero, and we find the $x$-intercepts at locations where the output is
zero. Notice below that the number of $x$-intercepts can vary depending upon
the location of the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel showing no x-intercept: an upward-opening parabola entirely above the x-axis, with vertex at (1, 2).","xMin":-3,"xMax":5,"yMin":-3,"yMax":6,"unit":22,"tickLabels":true,"quadratics":[{"a":1,"b":-2,"c":3}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel showing one x-intercept: an upward-opening parabola tangent to the x-axis at its vertex, (1, 0).","xMin":-3,"xMax":5,"yMin":-3,"yMax":6,"unit":22,"tickLabels":true,"quadratics":[{"a":1,"b":-2,"c":1}],"points":[{"at":[1,0]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"Panel showing two x-intercepts: an upward-opening parabola with vertex at (1, -2), crossing the x-axis at approximately -0.41 and 2.41.","xMin":-3,"xMax":5,"yMin":-3,"yMax":6,"unit":22,"tickLabels":true,"quadratics":[{"a":1,"b":-2,"c":-1}],"points":[{"at":[-0.41,0]},{"at":[2.41,0]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**How to:** given a quadratic function $f(x)$, find the $y$- and
$x$-intercepts.

1. Evaluate $f(0)$ to find the $y$-intercept.
2. Solve the quadratic equation $f(x)=0$ to find the $x$-intercepts.
{{< /callout >}}

**Example.** Find the $y$- and $x$-intercepts of the quadratic
$f(x)=3x^2+5x-2$.

**Solution.** We find the $y$-intercept by evaluating $f(0)$.

$$
\begin{array}{lrcl}
& f(0) &=& 3(0)^2+5(0)-2 \\[4pt]
& &=& -2
\end{array}
$$

So the $y$-intercept is at $(0,-2)$.

For the $x$-intercepts, we find all solutions of $f(x)=0$.

$$0=3x^2+5x-2$$

In this case, the quadratic can be factored easily, providing the simplest
method for solution.

$$0=(3x-1)(x+2)$$

$$
\begin{array}{lrcl}
& 0 &=& 3x-1 \\[4pt]
& x &=& \tfrac{1}{3}
\end{array}
\qquad\text{or}\qquad
\begin{array}{lrcl}
& 0 &=& x+2 \\[4pt]
& x &=& -2
\end{array}
$$

So the $x$-intercepts are at $\left(\tfrac{1}{3},0\right)$ and $(-2,0)$.

**Analysis.** By graphing the function, we can confirm that the graph
crosses the $y$-axis at $(0,-2)$. We can also confirm that the graph crosses
the $x$-axis at $\left(\tfrac{1}{3},0\right)$ and $(-2,0)$. See the graph
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 3x squared + 5x - 2, an upward-opening parabola crossing the x-axis at (-2, 0) and (1/3, 0), and the y-axis at (0, -2).","xMin":-3,"xMax":3,"yMin":-5,"yMax":1,"unit":30,"tickLabels":true,"quadratics":[{"a":3,"b":5,"c":-2}],"points":[{"at":[-2,0],"label":"(-2, 0)"},{"at":[0.333333,0],"label":"(1/3, 0)"},{"at":[0,-2],"label":"(0, -2)","labelSide":"se"}],"texts":[{"at":[0.7,1.5],"text":"f(x) = 3x² + 5x - 2","anchor":"start"}]}
{{< /apfigure >}}

## Rewriting quadratics in standard form

In the example above, the quadratic was easily solved by factoring. However,
there are many quadratics that cannot be factored. We can solve these
quadratics by first rewriting them in standard form.

{{< callout type="info" >}}
**How to:** given a quadratic function, find the $x$-intercepts by rewriting
in standard form.

1. Substitute $a$ and $b$ into $h=-\tfrac{b}{2a}$.
2. Substitute $x=h$ into the general form of the quadratic function to find
   $k$.
3. Rewrite the quadratic in standard form using $h$ and $k$.
4. Solve for when the output of the function will be zero to find the
   $x$-intercepts.
{{< /callout >}}

**Example.** Find the $x$-intercepts of the quadratic function
$f(x)=2x^2+4x-4$.

**Solution.** We begin by solving for when the output will be zero.

$$0=2x^2+4x-4$$

Because the quadratic is not easily factorable in this case, we solve for
the intercepts by first rewriting the quadratic in standard form.

$$f(x)=a(x-h)^2+k$$

We know that $a=2$. Then we solve for $h$ and $k$.

$$
\begin{array}{lrcl}
& h &=& -\tfrac{b}{2a} \\[4pt]
& &=& -\tfrac{4}{2(2)} \\[4pt]
& &=& -1
\end{array}
\qquad\qquad
\begin{array}{lrcl}
& k &=& f(-1) \\[4pt]
& &=& 2(-1)^2+4(-1)-4 \\[4pt]
& &=& -6
\end{array}
$$

So now we can rewrite in standard form.

$$f(x)=2(x+1)^2-6$$

We can now solve for when the output will be zero.

$$
\begin{array}{lrcl}
& 0 &=& 2(x+1)^2-6 \\[4pt]
& 6 &=& 2(x+1)^2 \\[4pt]
& 3 &=& (x+1)^2 \\[4pt]
& x+1 &=& \pm\sqrt{3} \\[4pt]
& x &=& -1\pm\sqrt{3}
\end{array}
$$

The graph has $x$-intercepts at $(-1-\sqrt{3},0)$ and $(-1+\sqrt{3},0)$.

**Analysis.** We can check our work by graphing the given function on a
graphing utility and observing the $x$-intercepts, shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 2x squared + 4x - 4, an upward-opening parabola with vertex at (-1, -6), crossing the x-axis at approximately (-2.732, 0) and (0.732, 0).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":18,"tickLabels":true,"xTickStep":2,"yTickStep":2,"quadratics":[{"a":2,"b":4,"c":-4}],"points":[{"at":[-2.732,0],"label":"(-2.732, 0)"},{"at":[0.732,0],"label":"(0.732, 0)"}]}
{{< /apfigure >}}

{{< fillin
  question="Earlier, we found the standard and general form for the function $g(x)=13+x^2-6x$. Now find its y-intercept. Enter your answer as an ordered pair."
  answer="(0,13)"
  answerDisplay="$(0,13)$"
  hint="Evaluate $g(0)$."
>}}

{{< multiplechoice
  question="How many real x-intercepts does that same parabola, $g(x)=x^2-6x+13$, have?"
  answer="0"
  hint="Rewrite in standard form, $(x-3)^2+4$, and check the sign of the constant term $k$ against the direction the parabola opens."
>}}
0
1
2
{{< /multiplechoice >}}

**Example.** Solve $x^2+x+2=0$.

**Solution.** Let's begin by writing the quadratic formula:
$x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$.

When applying the **quadratic formula**, we identify the coefficients $a$,
$b$, and $c$. For the equation $x^2+x+2=0$, we have $a=1$, $b=1$, and $c=2$.
Substituting these values into the formula we have:

$$
\begin{array}{lrcl}
& x &=& \tfrac{-b\pm\sqrt{b^2-4ac}}{2a} \\[4pt]
& &=& \tfrac{-1\pm\sqrt{1^2-4\cdot1\cdot(2)}}{2\cdot1} \\[4pt]
& &=& \tfrac{-1\pm\sqrt{1-8}}{2} \\[4pt]
& &=& \tfrac{-1\pm\sqrt{-7}}{2} \\[4pt]
& &=& \tfrac{-1\pm i\sqrt{7}}{2}
\end{array}
$$

The solutions to the equation are $\tfrac{-1+i\sqrt{7}}{2}$ and
$\tfrac{-1-i\sqrt{7}}{2}$, or $-\tfrac{1}{2}+\tfrac{\sqrt{7}}{2}i$ and
$-\tfrac{1}{2}-\tfrac{\sqrt{7}}{2}i$.

**Example.** A ball is thrown upward from the top of a 40 foot high building
at a speed of 80 feet per second. The ball's height above ground can be
modeled by the equation $H(t)=-16t^2+80t+40$.

1. When does the ball reach the maximum height?
2. What is the maximum height of the ball?
3. When does the ball hit the ground?

**Solution.**

1. The ball reaches the maximum height at the vertex of the parabola.

   $$
   \begin{array}{lrcl}
   & h &=& -\tfrac{80}{2(-16)} \\[4pt]
   & &=& \tfrac{80}{32} \\[4pt]
   & &=& \tfrac{5}{2} \\[4pt]
   & &=& 2.5
   \end{array}
   $$

   The ball reaches a maximum height after 2.5 seconds.

2. To find the maximum height, find the $y$-coordinate of the vertex of the
   parabola.

   $$
   \begin{array}{lrcl}
   & k &=& H\!\left(-\tfrac{b}{2a}\right) \\[4pt]
   & &=& H(2.5) \\[4pt]
   & &=& -16(2.5)^2+80(2.5)+40 \\[4pt]
   & &=& 140
   \end{array}
   $$

   The ball reaches a maximum height of 140 feet.

3. To find when the ball hits the ground, we need to determine when the
   height is zero, $H(t)=0$.

   We use the quadratic formula.

   $$
   \begin{array}{lrcl}
   & t &=& \tfrac{-80\pm\sqrt{80^2-4(-16)(40)}}{2(-16)} \\[4pt]
   & &=& \tfrac{-80\pm\sqrt{8{,}960}}{-32}
   \end{array}
   $$

   Because the square root does not simplify nicely, we can use a
   calculator to approximate the values of the solutions.

   $$
   t=\tfrac{-80-\sqrt{8{,}960}}{-32}\approx5.458
   \qquad\text{or}\qquad
   t=\tfrac{-80+\sqrt{8{,}960}}{-32}\approx-0.458
   $$

   The second answer is outside the reasonable domain of our model, so we
   conclude the ball will hit the ground after about 5.458 seconds. See the
   graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of H of t equals -16t squared + 80t + 40, the height of the ball above the ground. An upward arrow marks the vertex at (2.5, 140), the maximum height, and the curve exits the grid at about t = 5.458, where the ball hits the ground.","xMin":0,"xMax":7,"yMin":0,"yMax":150,"xUnit":38,"yUnit":1.5,"tickLabels":true,"xTickStep":1,"yTickStep":50,"xLabel":"Time (s)","yLabel":"Height (ft)","quadratics":[{"a":-16,"b":80,"c":40,"from":0,"to":5.458,"arrows":"end"}],"points":[{"at":[2.5,140],"label":"(2.5, 140)","labelSide":"n"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Source note.** OpenStax's printed Figure 16 here (module m49337) labels
  the vertical axis "$t$" and plots the height values $50$, $100$, $150$ on
  it, and labels the horizontal axis "$H$" and plots the time values $1$
  through $6$ on it — the reverse of the function $H(t)$ it illustrates —
  and carries a stray "$(x$ from $-1$ to $6)$" annotation left over from a
  different window setting. Since $H(t)$ is height as a function of time,
  time belongs on the horizontal axis and height on the vertical axis. This
  page draws the axes the right way around, time on the horizontal axis and
  height on the vertical axis, and drops the stray annotation; the
  mathematics is unchanged.
{{< /callout >}}

{{< fillin
  question="A rock is thrown upward from the top of a 112-foot high cliff overlooking the ocean at a speed of 96 feet per second. The rock's height above the ocean can be modeled by $H(t)=-16t^2+96t+112$. When does the rock reach its maximum height, in seconds?"
  answer="3"
  answerDisplay="3 seconds"
  hint="The maximum height occurs at the vertex; find $h=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="What is the maximum height of that same rock, in feet?"
  answer="256"
  answerDisplay="256 feet"
  hint="Evaluate $H$ at the time you just found for the vertex."
>}}

{{< fillin
  question="When does that same rock hit the ocean, in seconds?"
  answer="7"
  answerDisplay="7 seconds"
  hint="Solve $H(t)=0$ with the quadratic formula, and keep only the positive solution."
>}}

## Key equations

| general form of a quadratic function | $f(x)=ax^2+bx+c$ |
| :--- | :--- |
| the quadratic formula | $x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$ |
| standard form of a quadratic function | $f(x)=a(x-h)^2+k$ |

## Key concepts

- A polynomial function of degree two is called a quadratic function.
- The graph of a quadratic function is a parabola. A parabola is a U-shaped
  curve that can open either up or down.
- The axis of symmetry is the vertical line passing through the vertex. The
  zeros, or $x$-intercepts, are the points at which the parabola crosses the
  $x$-axis. The $y$-intercept is the point at which the parabola crosses the
  $y$-axis.
- Quadratic functions are often written in general form. Standard or vertex
  form is useful to easily identify the vertex of a parabola. Either form can
  be written from a graph.
- The vertex can be found from an equation representing a quadratic function.
- The domain of a quadratic function is all real numbers. The range varies
  with the function.
- A quadratic function's minimum or maximum value is given by the
  $y$-value of the vertex.
- The minimum or maximum value of a quadratic function can be used to
  determine the range of the function and to solve many kinds of real-world
  problems, including problems involving area and revenue.
- Some quadratic equations must be solved by using the quadratic formula.
- The vertex and the intercepts can be identified and interpreted to solve
  real-world problems.


## Practice

### Recognize characteristics of parabolas

{{< graphplot
  question="Sketch the graph of $f(x)=x^2-2x$."
  answerDisplay="Vertex $(1,-1)$, opening upward through $(0,0)$ and $(2,0)$"
  ariaLabel="A blank grid from -7 to 7 on both axes."
  hint="Plot the vertex and one or two nearby points, then draw the U-shape through them."
>}}
{"answer": {"quadratic": {"a": 1, "b": -2, "c": 0}}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{< /graphplot >}}

{{< fillin
  question="What is the vertex of that same parabola, $f(x)=x^2-2x$? Enter your answer as an ordered pair."
  answer="(1,-1)"
  answerDisplay="$(1,-1)$"
  hint="Find $h=-\tfrac{b}{2a}$, then evaluate $f(h)$."
>}}

{{< fillin
  question="What is the axis of symmetry of that same parabola, $f(x)=x^2-2x$?"
  answer="x=1"
  answerDisplay="$x=1$"
  hint="The axis of symmetry is the vertical line through the vertex, $x=h$."
>}}

{{< fillin
  question="What is the vertex of $f(x)=x^2-5x-6$? Enter your answer as an ordered pair."
  answer="(5/2,-49/4)"
  answerDisplay="$\left(\tfrac{5}{2},-\tfrac{49}{4}\right)$"
  hint="Find $h=-\tfrac{b}{2a}$, then evaluate $f(h)$."
>}}

{{< fillin
  question="What is the axis of symmetry of that same parabola, $f(x)=x^2-5x-6$?"
  answer="x=5/2"
  answerDisplay="$x=\tfrac{5}{2}$"
  hint="The axis of symmetry is the vertical line through the vertex, $x=h$."
>}}

### Understand how the graph of a parabola is related to its quadratic function

{{< fillin
  question="Rewrite $g(x)=x^2+2x-3$ in standard (vertex) form."
  answer="(x+1)^2-4"
  answerForm="vertex-form"
  answerDisplay="$g(x)=(x+1)^2-4$"
  hint="Find $h=-\tfrac{b}{2a}$ and $k=g(h)$, then substitute into $a(x-h)^2+k$."
>}}

{{< fillin
  question="Rewrite $f(x)=3x^2-5x-1$ in standard (vertex) form."
  answer="3(x-5/6)^2-37/12"
  answerForm="vertex-form"
  answerDisplay="$f(x)=3\left(x-\tfrac{5}{6}\right)^2-\tfrac{37}{12}$"
  hint="Find $h=-\tfrac{b}{2a}$ and $k=f(h)$, then substitute into $a(x-h)^2+k$."
>}}

{{< fillin
  question="Write the general form of the equation for the parabola graphed below."
  answer="x^2-4x+1"
  answerForm="expanded"
  answerDisplay="$f(x)=x^2-4x+1$"
  hint="Read the vertex and one other point off the graph, then follow the same steps as writing an equation from a graph."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with vertex near (2, -3) and y-intercept at (0, 1).","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":1}]}
{{< /apfigure >}}

{{< fillin
  question="Write the general form of the equation for the parabola graphed below."
  answer="-2x^2+8x-1"
  answerForm="expanded"
  answerDisplay="$f(x)=-2x^2+8x-1$"
  hint="Read the vertex and one other point off the graph, then follow the same steps as writing an equation from a graph."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A downward-opening parabola with vertex near (2, 7) and y-intercept at (0, -1).","xMin":-5,"xMax":5,"yMin":-9,"yMax":9,"unit":20,"tickLabels":true,"quadratics":[{"a":-2,"b":8,"c":-1}]}
{{< /apfigure >}}

### Determine a quadratic function's minimum or maximum value

{{< fillin
  question="Find the minimum value of $f(x)=2x^2-10x+4$."
  answer="-17/2"
  answerDisplay="$-\tfrac{17}{2}$"
  hint="The minimum value occurs at the vertex; evaluate $f$ at $h=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="What is the axis of symmetry of that same parabola, $f(x)=2x^2-10x+4$?"
  answer="x=5/2"
  answerDisplay="$x=\tfrac{5}{2}$"
  hint="The axis of symmetry is $x=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="Find the minimum value of $f(x)=4x^2+x-1$."
  answer="-17/16"
  answerDisplay="$-\tfrac{17}{16}$"
  hint="The minimum value occurs at the vertex; evaluate $f$ at $h=-\tfrac{b}{2a}$."
>}}

{{< fillin
  question="Find the range of $f(x)=(x-3)^2+2$. Write your answer in interval notation."
  answer="[2,\infty)"
  answerDisplay="$[2,\infty)$"
  hint="This is already in standard form with $a>0$, so the range is $f(x)\ge k$."
>}}

### Solve problems involving a quadratic function's minimum or maximum value

A backyard farmer wants to enclose a rectangular corral using 200 feet of
fencing on all four sides.

{{< fillin
  question="What side length, in feet, produces the greatest enclosed area?"
  answer="50"
  answerDisplay="50 feet"
  hint="Let one side be $x$; the opposite side is also $x$ and the other pair is $100-x$ each, so maximize $A(x)=x(100-x)$."
>}}

{{< fillin
  question="Using that same 200 feet of fencing, what is the greatest enclosed area, in square feet?"
  answer="2500"
  answerDisplay="2,500 square feet"
  hint="Evaluate the area function at the side length you just found."
>}}

{{< fillin
  question="A soccer stadium holds 62,000 spectators. With a ticket price of \$11, average attendance has been 26,000. When the price dropped to \$9, average attendance rose to 31,000. Assuming attendance is linearly related to ticket price, what ticket price would maximize revenue?"
  answer="10.70"
  answerDisplay="\$10.70"
  hint="Find the linear attendance-vs-price relationship first, then maximize $\text{Revenue}=\text{price}\times\text{attendance}$."
>}}

{{< fillin
  question="A rocket is launched in the air. Its height, in meters above sea level, as a function of time, in seconds, is given by $h(t)=-4.9t^2+229t+234$. Find the maximum height the rocket attains, in meters, rounded to two decimal places."
  answer="2909.56"
  answerDisplay="2,909.56 meters"
  hint="The maximum height is the $y$-value of the vertex, $h\!\left(-\tfrac{b}{2a}\right)$."
>}}

{{< fillin
  question="Among all pairs of numbers whose difference is 12, find the pair with the smallest product. Enter both numbers, separated by a comma."
  answer="-6,6"
  answerMode="unordered"
  answerDisplay="$-6$ and $6$"
  hint="Let the numbers be $x$ and $x-12$; minimize the product $P(x)=x(x-12)$."
>}}

{{< fillin
  question="What is that smallest product?"
  answer="-36"
  answerDisplay="$-36$"
  hint="Evaluate the product function at the vertex you just found."
>}}


---

<small>This section is adapted from [Precalculus 2e, Section 3.2: Quadratic Functions](https://openstax.org/books/precalculus-2e/pages/3-2-quadratic-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible inline SVG generated from its exact equation — the labeled-features schematic parabola $y=x^2-2x-3$; the vertex/no-x-intercept parabola $y=\tfrac{2}{3}(x-3)^2+1$ of Example 1; the general-form parabola $y=x^2+4x+3$; the standard-form parabola $y=-3(x+2)^2+4$; the basic parabola $y=x^2$; the graph-transformation parabola $g(x)=\tfrac{1}{2}(x+2)^2-3$; the two minimum/maximum panels $f(x)=(x-2)^2+1$ and $g(x)=-(x+3)^2+4$; the area function $A(L)=-2L^2+80L$; the revenue function, scaled to thousands of dollars, $-2.5p^2+159p$; the three no/one/two-$x$-intercept panels; the $y$-/$x$-intercept parabola $f(x)=3x^2+5x-2$; the standard-form parabola $f(x)=2x^2+4x-4$ with its irrational intercepts; the corrected height-vs-time parabola $H(t)=-16t^2+80t+40$; and the two Practice graph-reading items $f(x)=x^2-4x+1$ and $f(x)=-2x^2+8x-1$; recreated the garden diagram as a labeled rectangle-in-rectangle figure; presented the table-feature check in Example 2 as a Markdown table; omitted the decorative satellite-dish photograph, which carries no mathematics, and reworded the opening sentence that pointed at it; omitted the section's four Media links to external graphing-calculator resources; converted the basketball Try It's photograph-with-grid-overlay into a recreated graph, stating in the question the release point, vertex, and the hoop's location and height that the source conveyed only through the image; converted the practice problems ("Try Its") into interactive exercises with instant feedback — a fillin plus multiple choice for the basketball path and shot outcome, a multiple choice among competing writings plus a fillin for the rewritten-in-standard-form Try It (its general-form half is a bare reordering of an already-expanded printed expression, so no `answerForm` token restricts term order and a retyped printed span would grade correct; a multiple choice among the general, standard, and mis-ordered forms grades the shape instead), a fillin for the domain-and-range Try It, a fillin plus multiple choice for the $y$-intercept and $x$-intercept count of the rewritten function, and three fillins for the falling-rock application; split each of the two "sketch a graph and give the vertex, axis of symmetry, and intercepts" Practice items into a graphing or fillin component per requested quantity; and adapted thirteen selected end-of-section exercises — two vertex/axis-of-symmetry rewrites, two graph-reading equations, two minimum-value/axis-of-symmetry evaluations, a range evaluation, and four real-world optimization problems (a four-sided corral, a ticket-revenue maximization, a rocket's maximum height, and a smallest-product pair) — into nineteen interactive components in a closing Practice block, one group per objective. One upstream figure defect is corrected here: the pinned CNXML's Figure 16 (module m49337) prints its vertical axis labeled "$t$" carrying the height values (50, 100, 150) and its horizontal axis labeled "$H$" carrying the time values (1 through 6), the reverse of the function $H(t)$ it illustrates, alongside a stray "$(x$ from $-1$ to $6)$" annotation left over from a different window setting; this page draws the corrected axes, time on the horizontal axis and height on the vertical axis, over the function's own domain, and carries a visible source note beside the corrected figure disclosing the correction in addition to this footer.</small>

