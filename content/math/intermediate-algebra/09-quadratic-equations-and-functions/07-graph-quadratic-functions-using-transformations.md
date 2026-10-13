---
title: Graph Quadratic Functions Using Transformations
description: >-
  Graphing quadratic functions with vertical and horizontal shifts, stretches
  and compressions, completing the square, and finding a function from its graph.
source_section: "9.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph quadratic equations of the form $f(x)=x^2+k$
- Graph quadratic functions of the form $f(x)=(x-h)^2$
- Graph quadratic functions of the form $f(x)=ax^2$
- Graph quadratic functions using transformations
- Find a quadratic function from its graph
{{< /callout >}}

## Graph Quadratic Functions of the Form $f(x)=x^2+k$

In the last section, we learned how to graph quadratic functions using their
properties. Another method involves starting with the basic graph of
$f(x)=x^2$ and “moving” it according to information given in the function
equation. We call this graphing quadratic functions using transformations.

In the first example, we will graph the quadratic function $f(x)=x^2$ by
plotting points. Then we will see what effect adding a constant, $k$, to the
equation will have on the graph of the new function $f(x)=x^2+k$.

**Example 9.53.** Graph $f(x)=x^2$, $g(x)=x^2+2$, and $h(x)=x^2-2$ on the same
rectangular coordinate system. Describe what effect adding a constant to the
function has on the basic parabola.

**Solution.**

Plotting points will help us see the effect of the constants on the basic
$f(x)=x^2$ graph. We fill in the chart for all three functions.

| $x$ | $f(x)=x^2$ | $(x,f(x))$ | $g(x)=x^2+2$ | $(x,g(x))$ | $h(x)=x^2-2$ | $(x,h(x))$ |
|---:|---:|:---|---:|:---|---:|:---|
| $-3$ | $9$ | $(-3,9)$ | $9+2$ | $(-3,11)$ | $9-2$ | $(-3,7)$ |
| $-2$ | $4$ | $(-2,4)$ | $4+2$ | $(-2,6)$ | $4-2$ | $(-2,2)$ |
| $-1$ | $1$ | $(-1,1)$ | $1+2$ | $(-1,3)$ | $1-2$ | $(-1,-1)$ |
| $0$ | $0$ | $(0,0)$ | $0+2$ | $(0,2)$ | $0-2$ | $(0,-2)$ |
| $1$ | $1$ | $(1,1)$ | $1+2$ | $(1,3)$ | $1-2$ | $(1,-1)$ |
| $2$ | $4$ | $(2,4)$ | $4+2$ | $(2,6)$ | $4-2$ | $(2,2)$ |
| $3$ | $9$ | $(3,9)$ | $9+2$ | $(3,11)$ | $9-2$ | $(3,7)$ |

The $g(x)$ values are two more than the $f(x)$ values. Also, the $h(x)$
values are two less than the $f(x)$ values. Now we will graph all three
functions on the same rectangular coordinate system.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three upward-opening parabolas with vertices at (0, 0), (0, 2), and (0, −2), showing vertical shifts: f(x) = x², g(x) = x² + 2, and h(x) = x² − 2; axes numbered every 1 unit.","xMin":-4,"xMax":4,"yMin":-3,"yMax":8,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1},{"a":1,"c":2},{"a":1,"c":-2}]}
{{< /apfigure >}}

The graph of $g(x)=x^2+2$ is the same as the graph of $f(x)=x^2$ but shifted
up 2 units.

The graph of $h(x)=x^2-2$ is the same as the graph of $f(x)=x^2$ but shifted
down 2 units.

{{< multiplechoice
  question="Graph $f(x)=x^2$, $g(x)=x^2+1$, and $h(x)=x^2-1$ on the same rectangular coordinate system. What effect does the constant have on the basic parabola?"
  answer="$g$ shifts up 1 unit and $h$ shifts down 1 unit."
  hint="Compare each constant term with zero."
>}}
$g$ shifts right 1 unit and $h$ shifts left 1 unit.
$g$ shifts up 1 unit and $h$ shifts down 1 unit.
$g$ shifts down 1 unit and $h$ shifts up 1 unit.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph $f(x)=x^2$, $g(x)=x^2+6$, and $h(x)=x^2-6$ on the same rectangular coordinate system. What effect does the constant have on the basic parabola?"
  answer="$g$ shifts up 6 units and $h$ shifts down 6 units."
  hint="Compare the values of $g$ and $h$ with the values of $f$ at the same $x$."
>}}
$g$ shifts up 6 units and $h$ shifts down 6 units.
$g$ shifts down 6 units and $h$ shifts up 6 units.
$g$ shifts right 6 units and $h$ shifts left 6 units.
{{< /multiplechoice >}}

The last example shows us that to graph a quadratic function of the form
$f(x)=x^2+k$, we take the basic parabola graph of $f(x)=x^2$ and vertically
shift it up $(k>0)$ or shift it down $(k<0)$.

This transformation is called a vertical shift.

{{< callout type="info" >}}
**Graph a Quadratic Function of the Form $f(x)=x^2+k$ Using a Vertical Shift.**

The graph of $f(x)=x^2+k$ shifts the graph of $f(x)=x^2$ vertically $k$ units.

- If $k>0$, shift the parabola vertically up $k$ units.
- If $k<0$, shift the parabola vertically down $|k|$ units.
{{< /callout >}}

Now that we have seen the effect of the constant, $k$, it is easy to graph
functions of the form $f(x)=x^2+k$. We just start with the basic parabola of
$f(x)=x^2$ and then shift it up or down.

It may be helpful to practice sketching $f(x)=x^2$ quickly. We know the values
and can sketch the graph from there.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The basic parabola f of x equals x squared, with plotted points (−4, 16), (−3, 9), (−2, 4), (−1, 1), (0, 0), (1, 1), (2, 4), (3, 9), and (4, 16); axes numbered every 1 unit.","xMin":-5,"xMax":5,"yMin":-2,"yMax":20,"unit":20,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1}],"points":[{"at":[-4,16],"label":"(−4, 16)"},{"at":[-3,9],"label":"(−3, 9)"},{"at":[-2,4],"label":"(−2, 4)"},{"at":[-1,1],"label":"(−1, 1)"},{"at":[0,0],"label":"(0, 0)","labelSide":"se","labelNudge":[0,14]},{"at":[1,1],"label":"(1, 1)"},{"at":[2,4],"label":"(2, 4)"},{"at":[3,9],"label":"(3, 9)"},{"at":[4,16],"label":"(4, 16)"}]}
{{< /apfigure >}}

Once we know this parabola, it will be easy to apply the transformations. The
next example will require a vertical shift.

**Example 9.54.** Graph $f(x)=x^2-3$ using a vertical shift.

**Solution.**

We first draw the graph of $f(x)=x^2$ on the grid. Determine $k$.

$$
\begin{array}{rcl}
f(x)&=&x^2+k\\[4pt]
f(x)&=&x^2-3
\end{array}
\qquad k=-3.
$$

Shift the graph $f(x)=x^2$ down 3.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola f of x equals x squared and its vertical shift down 3 units, f(x) = x² − 3, with its vertex (0, −3) marked; axes numbered every 1 unit.","xMin":-5,"xMax":5,"yMin":-4,"yMax":8,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1},{"a":1,"c":-3}],"points":[{"at":[0,-3],"label":"(0, −3)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=x^2-5$ using a vertical shift."
  answerDisplay="$f(x)=x^2-5$"
  ariaLabel="A blank coordinate grid from negative 6 to 6 on the x-axis and negative 7 to 8 on the y-axis."
  hint="Start with the vertex of $y=x^2$ and shift it vertically."
>}}
{"answer":{"quadratic":{"a":1,"b":0,"c":-5},"plotPoints":3},"grid":{"xMin":-6,"xMax":6,"yMin":-7,"yMax":8}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=x^2+7$ using a vertical shift."
  answerDisplay="$f(x)=x^2+7$"
  ariaLabel="A blank coordinate grid from negative 4 to 4 on the x-axis and 0 to 12 on the y-axis."
  hint="Start with the vertex of $y=x^2$ and shift it vertically."
>}}
{"answer":{"quadratic":{"a":1,"b":0,"c":7},"plotPoints":3},"grid":{"xMin":-4,"xMax":4,"yMin":0,"yMax":12}}
{{< /graphplot >}}

## Graph Quadratic Functions of the Form $f(x)=(x-h)^2$

In the first example, we graphed the quadratic function $f(x)=x^2$ by plotting
points and then saw the effect of adding a constant $k$ to the function had on
the resulting graph of the new function $f(x)=x^2+k$.

We will now explore the effect of subtracting a constant, $h$, from $x$ has on
the resulting graph of the new function $f(x)=(x-h)^2$.

**Example 9.55.** Graph $f(x)=x^2$, $g(x)=(x-1)^2$, and $h(x)=(x+1)^2$ on the
same rectangular coordinate system. Describe what effect adding a constant to
the function has on the basic parabola.

**Solution.**

Plotting points will help us see the effect of the constants on the basic
$f(x)=x^2$ graph. We fill in the chart for all three functions.

| $x$ | $f(x)=x^2$ | $(x,f(x))$ | $g(x)=(x-1)^2$ | $(x,g(x))$ | $h(x)=(x+1)^2$ | $(x,h(x))$ |
|---:|---:|:---|---:|:---|---:|:---|
| $-3$ | $9$ | $(-3,9)$ | $16$ | $(-3,16)$ | $4$ | $(-3,4)$ |
| $-2$ | $4$ | $(-2,4)$ | $9$ | $(-2,9)$ | $1$ | $(-2,1)$ |
| $-1$ | $1$ | $(-1,1)$ | $4$ | $(-1,4)$ | $0$ | $(-1,0)$ |
| $0$ | $0$ | $(0,0)$ | $1$ | $(0,1)$ | $1$ | $(0,1)$ |
| $1$ | $1$ | $(1,1)$ | $0$ | $(1,0)$ | $4$ | $(1,4)$ |
| $2$ | $4$ | $(2,4)$ | $1$ | $(2,1)$ | $9$ | $(2,9)$ |
| $3$ | $9$ | $(3,9)$ | $4$ | $(3,4)$ | $16$ | $(3,16)$ |

The $g(x)$ values and the $h(x)$ values share the common numbers 0, 1, 4, 9,
and 16, but are shifted.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three upward-opening parabolas with vertices at (0, 0), (1, 0), and (−1, 0), showing horizontal shifts: f(x) = x², g(x) = (x − 1)², and h(x) = (x + 1)²; axes numbered every 1 unit.","xMin":-5,"xMax":5,"yMin":-4,"yMax":8,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1},{"a":1,"b":-2,"c":1},{"a":1,"b":2,"c":1}]}
{{< /apfigure >}}

The graph of $g(x)=(x-1)^2$ is the same as the graph of $f(x)=x^2$ but shifted
right 1 unit.

The graph of $h(x)=(x+1)^2$ is the same as the graph of $f(x)=x^2$ but shifted
left 1 unit.

{{< multiplechoice
  question="Graph $f(x)=x^2$, $g(x)=(x+2)^2$, and $h(x)=(x-2)^2$ on the same rectangular coordinate system. Describe the shifts."
  answer="$g$ shifts left 2 units and $h$ shifts right 2 units."
  hint="Write each function as $(x-h)^2$."
>}}
$g$ shifts up 2 units and $h$ shifts down 2 units.
$g$ shifts right 2 units and $h$ shifts left 2 units.
$g$ shifts left 2 units and $h$ shifts right 2 units.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph $f(x)=x^2$, $g(x)=x^2+5$, and $h(x)=x^2-5$ on the same rectangular coordinate system and describe the effect of the constant."
  answer="$g$ shifts up 5 units and $h$ shifts down 5 units."
  hint="Compare the values of $g$ and $h$ with the values of $f$ at the same $x$."
>}}
$g$ shifts left 5 units and $h$ shifts right 5 units.
$g$ shifts right 5 units and $h$ shifts left 5 units.
$g$ shifts up 5 units and $h$ shifts down 5 units.
{{< /multiplechoice >}}

The last example shows us that to graph a quadratic function of the form
$f(x)=(x-h)^2$, we take the basic parabola graph of $f(x)=x^2$ and shift it
left $(h<0)$ or shift it right $(h>0)$.

This transformation is called a horizontal shift.

{{< callout type="info" >}}
**Graph a Quadratic Function of the Form $f(x)=(x-h)^2$ Using a Horizontal Shift.**

The graph of $f(x)=(x-h)^2$ shifts the graph of $f(x)=x^2$ horizontally $h$
units.

- If $h>0$, shift the parabola horizontally right $h$ units.
- If $h<0$, shift the parabola horizontally left $|h|$ units.
{{< /callout >}}

Now that we have seen the effect of the constant, $h$, it is easy to graph
functions of the form $f(x)=(x-h)^2$. We just start with the basic parabola of
$f(x)=x^2$ and then shift it left or right.

The next example will require a horizontal shift.

**Example 9.56.** Graph $f(x)=(x-5)^2$ using a horizontal shift.

**Solution.**

We first draw the graph of $f(x)=x^2$ on the grid. Determine $h$.

$$
\begin{array}{rcl}
f(x)&=&(x-h)^2\\[4pt]
f(x)&=&(x-5)^2
\end{array}
\qquad h=5.
$$

Shift the graph $f(x)=x^2$ to the right 5 units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabola x squared, vertex (0, 0), and its horizontal shift right 5 units, f(x) = (x − 5)², vertex (5, 0); axes numbered every 1 unit.","xMin":-5,"xMax":10,"yMin":-4,"yMax":12,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1},{"a":1,"b":-10,"c":25}],"points":[{"at":[0,0],"label":"(0, 0)","labelSide":"se","labelNudge":[0,14]},{"at":[5,0],"label":"(5, 0)","labelSide":"se","labelNudge":[0,14]}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=(x-4)^2$ using a horizontal shift."
  answerDisplay="$f(x)=(x-4)^2$"
  ariaLabel="A blank coordinate grid from 0 to 8 on the x-axis and negative 2 to 8 on the y-axis."
  hint="Compare $(x-4)^2$ with $(x-h)^2$ to find the horizontal shift."
>}}
{"answer":{"quadratic":{"a":1,"b":-8,"c":16},"plotPoints":3},"grid":{"xMin":0,"xMax":8,"yMin":-2,"yMax":8}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=(x+6)^2$ using a horizontal shift."
  answerDisplay="$f(x)=(x+6)^2$"
  ariaLabel="A blank coordinate grid from negative 10 to negative 2 on the x-axis and negative 2 to 8 on the y-axis."
  hint="Match the function to the form $(x-h)^2$ to find the horizontal shift."
>}}
{"answer":{"quadratic":{"a":1,"b":12,"c":36},"plotPoints":3},"grid":{"xMin":-10,"xMax":-2,"yMin":-2,"yMax":8}}
{{< /graphplot >}}

Now that we know the effect of the constants $h$ and $k$, we will graph a
quadratic function of the form $f(x)=(x-h)^2+k$ by first drawing the basic
parabola and then making a horizontal shift followed by a vertical shift. We
could do the vertical shift followed by the horizontal shift, but most students
prefer the horizontal shift followed by the vertical.

**Example 9.57.** Graph $f(x)=(x+1)^2-2$ using transformations.

**Solution.**

This function will involve two transformations and we need a plan. Let’s first
identify the constants $h$, $k$.

$$
\begin{array}{rcl}
f(x)&=&(x-h)^2+k\\[4pt]
f(x)&=&(x-(-1))^2+(-2)
\end{array}
\qquad h=-1,\quad k=-2.
$$

The $h$ constant gives us a horizontal shift and the $k$ gives us a vertical
shift. We first draw the graph of $f(x)=x^2$ on the grid. To graph
$f(x)=(x+1)^2$, shift the graph $f(x)=x^2$ to the left 1 unit. To graph
$f(x)=(x+1)^2-2$, shift the graph $f(x)=(x+1)^2$ down 2 units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Successive transformations from x squared, left 1 unit, then down 2 units, to f(x) = (x + 1)² − 2 with vertex (−1, −2) marked; axes numbered every 1 unit.","xMin":-5,"xMax":5,"yMin":-4,"yMax":7,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1},{"a":1,"b":2,"c":1},{"a":1,"b":2,"c":-1}],"points":[{"at":[-1,-2],"label":"vertex (−1, −2)"}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=(x+2)^2-3$ using transformations."
  answerDisplay="$f(x)=(x+2)^2-3$"
  ariaLabel="A blank coordinate grid from negative 6 to 2 on the x-axis and negative 5 to 5 on the y-axis."
  hint="Identify $h$ and $k$ in $(x-h)^2+k$; shift $y=x^2$ horizontally first, then vertically."
>}}
{"answer":{"quadratic":{"a":1,"b":4,"c":1},"plotPoints":3},"grid":{"xMin":-6,"xMax":2,"yMin":-5,"yMax":5}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=(x-3)^2+1$ using transformations."
  answerDisplay="$f(x)=(x-3)^2+1$"
  ariaLabel="A blank coordinate grid from negative 1 to 7 on the x-axis and negative 1 to 9 on the y-axis."
  hint="Identify $h$ and $k$ in $(x-h)^2+k$; shift $y=x^2$ horizontally first, then vertically."
>}}
{"answer":{"quadratic":{"a":1,"b":-6,"c":10},"plotPoints":3},"grid":{"xMin":-1,"xMax":7,"yMin":-1,"yMax":9}}
{{< /graphplot >}}

## Graph Quadratic Functions of the Form $f(x)=ax^2$

So far we graphed the quadratic function $f(x)=x^2$ and then saw the effect of
including a constant $h$ or $k$ in the equation had on the resulting graph of
the new function. We will now explore the effect of the coefficient $a$ on the
resulting graph of the new function $f(x)=ax^2$.

Let’s look at the quadratic functions $f(x)=x^2$, $g(x)=2x^2$, and
$h(x)=\tfrac12x^2$.

| $x$ | $f(x)=x^2$ | $(x,f(x))$ | $g(x)=2x^2$ | $(x,g(x))$ | $h(x)=\tfrac12x^2$ | $(x,h(x))$ |
|---:|---:|:---|---:|:---|---:|:---|
| $-2$ | $4$ | $(-2,4)$ | $2\cdot4$ | $(-2,8)$ | $\tfrac12\cdot4$ | $(-2,2)$ |
| $-1$ | $1$ | $(-1,1)$ | $2\cdot1$ | $(-1,2)$ | $\tfrac12\cdot1$ | $(-1,\tfrac12)$ |
| $0$ | $0$ | $(0,0)$ | $2\cdot0$ | $(0,0)$ | $\tfrac12\cdot0$ | $(0,0)$ |
| $1$ | $1$ | $(1,1)$ | $2\cdot1$ | $(1,2)$ | $\tfrac12\cdot1$ | $(1,\tfrac12)$ |
| $2$ | $4$ | $(2,4)$ | $2\cdot4$ | $(2,8)$ | $\tfrac12\cdot4$ | $(2,2)$ |

If we graph these functions, we can see the effect of the constant $a$,
assuming $a>0$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Three parabolas with the same vertex (0, 0): y equals x squared, y equals 2x squared, and y equals one half x squared; axes numbered every 1 unit.","xMin":-5,"xMax":5,"yMin":-2,"yMax":10,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1},{"a":2},{"a":0.5}]}
{{< /apfigure >}}

The graph of the function $g(x)=2x^2$ is “skinnier” than the graph of
$f(x)=x^2$.

The graph of the function $h(x)=\tfrac12x^2$ is “wider” than the graph of
$f(x)=x^2$.

To graph a function with constant $a$ it is easiest to choose a few points on
$f(x)=x^2$ and multiply the $y$-values by $a$.

{{< callout type="info" >}}
**Graph of a Quadratic Function of the Form $f(x)=ax^2$.**

The coefficient $a$ in the function $f(x)=ax^2$ affects the graph of
$f(x)=x^2$ by stretching or compressing it.

- If $0<|a|<1$, the graph of $f(x)=ax^2$ will be “wider” than the graph of $f(x)=x^2$.
- If $|a|>1$, the graph of $f(x)=ax^2$ will be “skinnier” than the graph of $f(x)=x^2$.
{{< /callout >}}

**Example 9.58.** Graph $f(x)=3x^2$.

**Solution.**

We will graph the functions $f(x)=x^2$ and $g(x)=3x^2$ on the same grid. We
will choose a few points on $f(x)=x^2$ and then multiply the $y$-values by 3
to get the points for $g(x)=3x^2$.

| $x$ | $(x,f(x))$ for $f(x)=x^2$ | $(x,g(x))$ for $g(x)=3x^2$ |
|---:|:---|:---|
| $-2$ | $(-2,4)$ | $(-2,12)$ |
| $-1$ | $(-1,1)$ | $(-1,3)$ |
| $0$ | $(0,0)$ | $(0,0)$ |
| $1$ | $(1,1)$ | $(1,3)$ |
| $2$ | $(2,4)$ | $(2,12)$ |

{{< apfigure kind="graph" >}}
{"ariaLabel":"The parabolas y equals x squared and y equals 3x squared with corresponding plotted points: (−2, 4), (−1, 1), (0, 0), (1, 1), and (2, 4) on the first, and (−2, 12), (−1, 3), (1, 3), and (2, 12) on the second; axes numbered every 1 unit.","xMin":-5,"xMax":5,"yMin":-2,"yMax":14,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1},{"a":3}],"points":[{"at":[-2,4],"label":"(−2, 4)","labelSide":"w"},{"at":[-2,12],"label":"(−2, 12)","labelSide":"w","labelNudge":[-44,0]},{"at":[-1,1],"label":"(−1, 1)","labelSide":"w"},{"at":[-1,3],"label":"(−1, 3)","labelSide":"w","labelNudge":[-16,0]},{"at":[0,0],"label":"(0, 0)","labelSide":"se","labelNudge":[0,14]},{"at":[1,1],"label":"(1, 1)","labelSide":"e"},{"at":[1,3],"label":"(1, 3)","labelSide":"e","labelNudge":[16,0]},{"at":[2,4],"label":"(2, 4)","labelSide":"e"},{"at":[2,12],"label":"(2, 12)","labelSide":"e","labelNudge":[44,0]}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which graph shows $f(x)=-3x^2$?"
  mode="graph"
  answerIndex="2"
  hint="The sign of $a$ sets which way the parabola opens; compare $|a|$ with $1$ to judge its width."
>}}
{"ariaLabel": "An upward-opening parabola with vertex (0, -3).", "xMin": -3, "xMax": 3, "yMin": -8, "yMax": 8, "tickLabels": true, "quadratics": [{"a": 1, "b": 0, "c": -3}]}
===OPT===
{"ariaLabel": "A narrow upward-opening parabola with vertex (0, 0).", "xMin": -3, "xMax": 3, "yMin": -8, "yMax": 8, "tickLabels": true, "quadratics": [{"a": 3, "b": 0, "c": 0}]}
===OPT===
{"ariaLabel": "A narrow downward-opening parabola with vertex (0, 0).", "xMin": -3, "xMax": 3, "yMin": -8, "yMax": 8, "tickLabels": true, "quadratics": [{"a": -3, "b": 0, "c": 0}]}
===OPT===
{"ariaLabel": "A downward-opening parabola with vertex (0, 0).", "xMin": -3, "xMax": 3, "yMin": -8, "yMax": 8, "tickLabels": true, "quadratics": [{"a": -1, "b": 0, "c": 0}]}
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph $f(x)=2x^2$. Compared with $f(x)=x^2$, which description is correct?"
  answer="It opens upward and is skinnier."
  hint="Use the sign and absolute value of $a=2$."
>}}
It opens downward and is skinnier.
It opens upward and is skinnier.
It opens upward and is wider.
{{< /multiplechoice >}}

## Graph Quadratic Functions Using Transformations

We have learned how the constants $a$, $h$, and $k$ in the functions
$f(x)=x^2+k$, $f(x)=(x-h)^2$, and $f(x)=ax^2$ affect their graphs. We can now
put this together and graph quadratic functions $f(x)=ax^2+bx+c$ by first
putting them into the form $f(x)=a(x-h)^2+k$ by completing the square. This
form is sometimes known as the vertex form or standard form.

We must be careful to both add and subtract the number to the SAME side of the
function to complete the square. We cannot add the number to both sides as we
did when we completed the square with quadratic equations.

| Quadratic equation | Quadratic function |
|:---|:---|
| $\begin{aligned}x^2+8x+6&=0\\x^2+8x&=-6\\x^2+8x+16&=-6+16\\(x+4)^2&=10\end{aligned}$ | $\begin{aligned}f(x)&=x^2+8x+6\\f(x)&=x^2+8x+16+6-16\\f(x)&=(x+4)^2-10\end{aligned}$ |

When we complete the square in a function with a coefficient of $x^2$ that is
not one, we have to factor that coefficient from just the $x$-terms. We do not
factor it from the constant term. It is often helpful to move the constant term
a bit to the right to make it easier to focus only on the $x$-terms.

Once we get the constant we want to complete the square, we must remember to
multiply it by that coefficient before we then subtract it.

**Example 9.59.** Rewrite $f(x)=-3x^2-6x-1$ in the
$f(x)=a(x-h)^2+k$ form by completing the square.

**Solution.**

$$
\begin{array}{lrcl}
&f(x)&=&-3x^2-6x-1\\[4pt]
\text{Separate the }x\text{ terms from the constant.}&f(x)&=&-3x^2-6x\quad-1\\[4pt]
\text{Factor the coefficient of }x^2,\ -3.&f(x)&=&-3(x^2+2x)-1\\[4pt]
\text{Prepare to complete the square.}&f(x)&=&-3(x^2+2x\phantom{{}+1})-1\\[4pt]
\text{Take half of 2 and then square it.}&&&(\tfrac12\cdot2)^2=1\\[4pt]
\text{Add 1 inside; this adds }-3,\text{ so add 3 outside.}&f(x)&=&-3(x^2+2x+1)-1+3\\[4pt]
\text{Rewrite the trinomial as a square.}&f(x)&=&-3(x+1)^2+2
\end{array}
$$

The function is now in the $f(x)=a(x-h)^2+k$ form.

{{< fillin
  question="Rewrite $f(x)=-4x^2-8x+1$ in the $f(x)=a(x-h)^2+k$ form by completing the square."
  answer="-4(x+1)^2+5"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=-4(x+1)^2+5$"
  hint="Factor $-4$ from the $x$-terms before completing the square."
>}}

{{< fillin
  question="Rewrite $f(x)=2x^2-8x+3$ in the $f(x)=a(x-h)^2+k$ form by completing the square."
  answer="2(x-2)^2-5"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=2(x-2)^2-5$"
  hint="Factor 2 from the $x$-terms, then complete the square."
>}}

Once we put the function into the $f(x)=(x-h)^2+k$ form, we can then use the
transformations as we did in the last few problems. The next example will show
us how to do this.

**Example 9.60.** Graph $f(x)=x^2+6x+5$ by using transformations.

**Solution.**

**Step 1.** Rewrite the function in $f(x)=a(x-h)^2+k$ vertex form by
completing the square.

$$
\begin{array}{lrcl}
&f(x)&=&x^2+6x+5\\[4pt]
\text{Separate the }x\text{ terms from the constant.}&f(x)&=&x^2+6x\quad+5\\[4pt]
\text{Take half of 6 and then square it.}&&&(\tfrac12\cdot6)^2=9\\[4pt]
\text{Add and subtract 9.}&f(x)&=&x^2+6x+9+5-9\\[4pt]
\text{Rewrite the trinomial as a square.}&f(x)&=&(x+3)^2-4
\end{array}
$$

**Step 2.** Graph the function using transformations.

Looking at the $h$, $k$ values, we see the graph will take the graph of
$f(x)=x^2$ and shift it to the left 3 units and down 4 units.

We first draw the graph of $f(x)=x^2$ on the grid. To graph $f(x)=(x+3)^2$,
shift the graph $f(x)=x^2$ to the left 3 units. To graph
$f(x)=(x+3)^2-4$, shift the graph $f(x)=(x+3)^2$ down 4 units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Successive transformations from x squared, left 3 units, then down 4 units, to f(x) = (x + 3)² − 4 with vertex (−3, −4) marked; axes numbered every 1 unit.","xMin":-7,"xMax":5,"yMin":-6,"yMax":6,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1},{"a":1,"b":6,"c":9},{"a":1,"b":6,"c":5}],"points":[{"at":[-3,-4],"label":"vertex (−3, −4)"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph $f(x)=x^2+2x-3$ by using transformations. First enter the function in vertex form."
  answer="(x+1)^2-4"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=(x+1)^2-4$"
  hint="Complete the square on $x^2+2x$."
>}}

{{< fillin
  question="Graph $f(x)=x^2-8x+12$ by using transformations. First enter the function in vertex form."
  answer="(x-4)^2-4"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=(x-4)^2-4$"
  hint="Complete the square on $x^2-8x$."
>}}

We list the steps to take to graph a quadratic function using transformations
here.

{{< callout type="info" >}}
**How To: Graph a quadratic function using transformations.**

1. Rewrite the function in $f(x)=a(x-h)^2+k$ form by completing the square.
2. Graph the function using transformations.
{{< /callout >}}

**Example 9.61.** Graph $f(x)=-2x^2-4x+2$ by using transformations.

**Solution.**

**Step 1.** Rewrite the function in $f(x)=a(x-h)^2+k$ vertex form by
completing the square.

$$
\begin{array}{lrcl}
&f(x)&=&-2x^2-4x+2\\[4pt]
\text{Separate the }x\text{ terms from the constant.}&f(x)&=&-2x^2-4x\quad+2\\[4pt]
\text{Factor }-2\text{ from the }x\text{-terms.}&f(x)&=&-2(x^2+2x)+2\\[4pt]
\text{Take half of 2 and then square it.}&&&(\tfrac12\cdot2)^2=1\\[4pt]
\text{Add 1 inside; this adds }-2,\text{ so add 2 outside.}&f(x)&=&-2(x^2+2x+1)+2+2\\[4pt]
\text{Rewrite the trinomial as a square.}&f(x)&=&-2(x+1)^2+4
\end{array}
$$

**Step 2.** Graph the function using transformations.

We first draw the graph of $f(x)=x^2$ on the grid. To graph $f(x)=-2x^2$,
multiply the $y$-values in the parabola of $f(x)=x^2$ by $-2$. To graph
$f(x)=-2(x+1)^2$, shift the graph $f(x)=-2x^2$ to the left 1 unit. To graph
$f(x)=-2(x+1)^2+4$, shift the graph $f(x)=-2(x+1)^2$ up 4 units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Successive transformations from x squared to negative 2x squared, then left 1 unit, then up 4 units.","xMin":-5,"xMax":5,"yMin":-6,"yMax":7,"unit":24,"tickLabels":true,"quadratics":[{"a":1},{"a":-2},{"a":-2,"b":-4,"c":-2},{"a":-2,"b":-4,"c":2}],"points":[{"at":[-1,4],"label":"vertex (−1, 4)","labelSide":"w","labelNudge":[-16,0]}]}
{{< /apfigure >}}

{{< graphplot
  question="Graph $f(x)=-3x^2+12x-4$ by using transformations."
  answerDisplay="$f(x)=-3x^2+12x-4=-3(x-2)^2+8$"
  ariaLabel="A blank coordinate grid from negative 3 to 7 on the x-axis and negative 5 to 10 on the y-axis."
  hint="Complete the square to locate the vertex, then use the coefficient to choose another point."
>}}
{"answer":{"quadratic":{"a":-3,"b":12,"c":-4},"plotPoints":3},"grid":{"xMin":-3,"xMax":7,"yMin":-5,"yMax":10}}
{{< /graphplot >}}

{{< fillin
  question="Graph $f(x)=-2x^2+12x-9$ by using transformations. First enter the function in vertex form."
  answer="-2(x-3)^2+9"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=-2(x-3)^2+9$"
  hint="Factor $-2$ from the $x$-terms, then complete the square."
>}}

Now that we have completed the square to put a quadratic function into
$f(x)=a(x-h)^2+k$ form, we can also use this technique to graph the function
using its properties as in the previous section.

If we look back at the last few examples, we see that the vertex is related to
the constants $h$ and $k$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two parabolas on one grid: f(x) = (x + 3)² − 4 opens upward with vertex (−3, −4), and f(x) = −2(x + 1)² + 4 opens downward with vertex (−1, 4); axes numbered every 1 unit.","xMin":-9,"xMax":5,"yMin":-6,"yMax":7,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":6,"c":5},{"a":-2,"b":-4,"c":2}],"points":[{"at":[-3,-4],"label":"(−3, −4)"},{"at":[-1,4],"label":"(−1, 4)"}],"texts":[{"at":[0.7,5.7],"text":"f(x) = (x + 3)² − 4","anchor":"start"},{"at":[1.6,-3.3],"text":"f(x) = −2(x + 1)² + 4","anchor":"start"}]}
{{< /apfigure >}}

In each case, the vertex is $(h,k)$. Also the axis of symmetry is the line
$x=h$.

We rewrite our steps for graphing a quadratic function using properties for
when the function is in $f(x)=a(x-h)^2+k$ form.

{{< callout type="info" >}}
**How To: Graph a quadratic function in the form $f(x)=a(x-h)^2+k$ using properties.**

1. Rewrite the function in $f(x)=a(x-h)^2+k$ form.
2. Determine whether the parabola opens upward, $a>0$, or downward, $a<0$.
3. Find the axis of symmetry, $x=h$.
4. Find the vertex, $(h,k)$.
5. Find the $y$-intercept. Find the point symmetric to the $y$-intercept across the axis of symmetry.
6. Find the $x$-intercepts.
7. Graph the parabola.
{{< /callout >}}

**Example 9.62.** (a) Rewrite $f(x)=2x^2+4x+5$ in
$f(x)=a(x-h)^2+k$ form and (b) graph the function using properties.

**Solution.**

Rewrite the function in $f(x)=a(x-h)^2+k$ form by completing the square.

$$
\begin{array}{rcl}
f(x)&=&2x^2+4x+5\\[4pt]
f(x)&=&2(x^2+2x)+5\\[4pt]
f(x)&=&2(x^2+2x+1)+5-2\\[4pt]
f(x)&=&2(x+1)^2+3
\end{array}
$$

Identify the constants $a=2$, $h=-1$, $k=3$. Since $a=2$, the parabola opens
upward. The axis of symmetry is $x=-1$. The vertex is $(-1,3)$.

Find the $y$-intercept by finding $f(0)$.

$$
f(0)=2\cdot0^2+4\cdot0+5=5,
$$

so the $y$-intercept is $(0,5)$. The point symmetric to $(0,5)$ across the
axis of symmetry is $(-2,5)$. The discriminant is negative, so there are no
$x$-intercepts. Graph the parabola.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The upward-opening parabola 2x squared plus 4x plus 5, with vertex (−1, 3), y-intercept (0, 5), and symmetric point (−2, 5); axes numbered every 1 unit.","xMin":-6,"xMax":6,"yMin":-2,"yMax":10,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":2,"b":4,"c":5}],"points":[{"at":[-1,3],"label":"(−1, 3)"},{"at":[0,5],"label":"(0, 5)"},{"at":[-2,5],"label":"(−2, 5)"}]}
{{< /apfigure >}}

{{< fillin
  question="Rewrite $f(x)=3x^2-6x+5$ in $f(x)=a(x-h)^2+k$ form and graph the function using properties. Enter the vertex form."
  answer="3(x-1)^2+2"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=3(x-1)^2+2$"
  hint="Factor 3 from the $x$-terms before completing the square."
>}}

{{< fillin
  question="Rewrite $f(x)=-2x^2+8x-7$ in $f(x)=a(x-h)^2+k$ form and graph the function using properties. Enter the vertex form."
  answer="-2(x-2)^2+1"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=-2(x-2)^2+1$"
  hint="Factor $-2$ from the $x$-terms before completing the square."
>}}

## Find a Quadratic Function from Its Graph

So far we have started with a function and then found its graph.

Now we are going to reverse the process. Starting with the graph, we will find
the function.

**Example 9.63.** Determine the quadratic function whose graph is shown.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with vertex (−2, −1) and y-intercept (0, 7); axes numbered every 1 unit.","xMin":-8,"xMax":4,"yMin":-3,"yMax":10,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":2,"b":8,"c":7}],"points":[{"at":[-2,-1],"label":"(−2, −1)"},{"at":[0,7],"label":"(0, 7)"}]}
{{< /apfigure >}}

**Solution.**

Since it is quadratic, we start with the $f(x)=a(x-h)^2+k$ form.

The vertex, $(h,k)$, is $(-2,-1)$ so $h=-2$ and $k=-1$. To find $a$, we use
the $y$-intercept, $(0,7)$. So $f(0)=7$.

$$
\begin{array}{rcl}
7&=&a(0+2)^2-1\\[4pt]
7&=&4a-1\\[4pt]
8&=&4a\\[4pt]
2&=&a
\end{array}
$$

Write the function and substitute in $h=-2$, $k=-1$, and $a=2$.

$$
f(x)=2(x+2)^2-1.
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with vertex (3, −4) and y-intercept (0, 5); axes numbered every 1 unit.","xMin":-4,"xMax":8,"yMin":-6,"yMax":7,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":-6,"c":5}],"points":[{"at":[3,-4],"label":"(3, −4)"},{"at":[0,5],"label":"(0, 5)"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the quadratic function in $f(x)=a(x-h)^2+k$ form whose graph has vertex $(3,-4)$ and passes through $(0,5)$."
  answer="(x-3)^2-4"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=(x-3)^2-4$"
  hint="Substitute the vertex first, then use $(0,5)$ to solve for $a$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An upward-opening parabola with vertex (−3, −1) and y-intercept (0, 8); axes numbered every 1 unit.","xMin":-8,"xMax":4,"yMin":-3,"yMax":10,"unit":24,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":6,"c":8}],"points":[{"at":[-3,-1],"label":"(−3, −1)"},{"at":[0,8],"label":"(0, 8)"}]}
{{< /apfigure >}}

{{< fillin
  question="Determine the quadratic function whose graph has vertex $(-3,-1)$ and passes through $(0,8)$."
  answer="(x+3)^2-1"
  answerDisplay="$f(x)=(x+3)^2-1$"
  hint="Substitute the vertex first, then use $(0,8)$ to solve for $a$."
>}}

## Key terms

A **vertical shift** moves a graph up or down. A
**horizontal shift** moves a graph left or right. The form
$f(x)=a(x-h)^2+k$ is called the **vertex form** or **standard form** of a
quadratic function.

## Practice

### Graph quadratic equations of the form $f(x)=x^2+k$

{{< graphplot
  question="Graph $f(x)=x^2+3$ using a vertical shift."
  answerDisplay="$f(x)=x^2+3$"
  ariaLabel="A blank coordinate grid from negative 5 to 5 on the x-axis and negative 2 to 12 on the y-axis."
  hint="Start with the vertex of $y=x^2$ and shift it vertically."
>}}
{"answer":{"quadratic":{"a":1,"b":0,"c":3},"plotPoints":3},"grid":{"xMin":-5,"xMax":5,"yMin":-2,"yMax":12}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $h(x)=x^2-4$ using a vertical shift."
  answerDisplay="$h(x)=x^2-4$"
  ariaLabel="A blank coordinate grid from negative 6 to 6 on the x-axis and negative 6 to 8 on the y-axis."
  hint="Start with the vertex of $y=x^2$ and shift it vertically."
>}}
{"answer":{"quadratic":{"a":1,"b":0,"c":-4},"plotPoints":3},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":8}}
{{< /graphplot >}}

{{< fillin
  question="For the graph of $f(x)=x^2-7$, find the vertex as an ordered pair."
  answer="(0,-7)"
  answerForm="decimal"
  answerDisplay="$(0,-7)$"
  hint="A vertical shift moves the vertex of $y=x^2$ straight up or down."
>}}

### Graph quadratic functions of the form $f(x)=(x-h)^2$

{{< graphplot
  question="Graph $f(x)=(x-2)^2$ using a horizontal shift."
  answerDisplay="$f(x)=(x-2)^2=x^2-4x+4$"
  ariaLabel="A blank coordinate grid from negative 2 to 6 on the x-axis and negative 2 to 10 on the y-axis."
  hint="Start with the vertex of $y=x^2$ and shift it horizontally."
>}}
{"answer":{"quadratic":{"a":1,"b":-4,"c":4},"plotPoints":3},"grid":{"xMin":-2,"xMax":6,"yMin":-2,"yMax":10}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=(x-5)^2$ using a horizontal shift."
  answerDisplay="$f(x)=(x-5)^2=x^2-10x+25$"
  ariaLabel="A blank coordinate grid from 0 to 10 on the x-axis and negative 2 to 12 on the y-axis."
  hint="Start with the vertex of $y=x^2$ and shift it horizontally."
>}}
{"answer":{"quadratic":{"a":1,"b":-10,"c":25},"plotPoints":3},"grid":{"xMin":0,"xMax":10,"yMin":-2,"yMax":12}}
{{< /graphplot >}}

{{< fillin
  question="For the graph of $f(x)=(x+5)^2$, find the axis of symmetry."
  answer="x=-5"
  answerForm="decimal"
  answerDisplay="$x=-5$"
  hint="The axis of symmetry passes through the vertex; a horizontal shift moves it left or right with $h$."
>}}

### Graph quadratic functions of the form $f(x)=ax^2$

{{< graphplot
  question="Graph $f(x)=-2x^2$."
  answerDisplay="$f(x)=-2x^2$"
  ariaLabel="A blank coordinate grid from negative 4 to 4 on the x-axis and negative 10 to 2 on the y-axis."
  hint="Choose a few points on $y=x^2$ and multiply the $y$-values by $-2$."
>}}
{"answer":{"quadratic":{"a":-2,"b":0,"c":0},"plotPoints":3},"grid":{"xMin":-4,"xMax":4,"yMin":-10,"yMax":2}}
{{< /graphplot >}}

{{< graphplot
  question="Graph $f(x)=\tfrac12x^2$."
  answerDisplay="$f(x)=\tfrac12x^2$"
  ariaLabel="A blank coordinate grid from negative 6 to 6 on the x-axis and negative 2 to 8 on the y-axis."
  hint="Choose a few points on $y=x^2$ and multiply the $y$-values by $\tfrac12$."
>}}
{"answer":{"quadratic":{"a":0.5,"b":0,"c":0},"plotPoints":3},"grid":{"xMin":-6,"xMax":6,"yMin":-2,"yMax":8}}
{{< /graphplot >}}

{{< multiplechoice
  question="Compared to the graph of $f(x)=x^2$, is the graph of $f(x)=\tfrac14x^2$ wider or skinnier?"
  answer="wider"
  hint="Compare $|a|$ to $1$."
>}}
wider
skinnier
{{< /multiplechoice >}}

### Graph quadratic functions using transformations

{{< graphplot
  question="Graph $f(x)=x^2+4x+3$ using transformations."
  answerDisplay="$f(x)=x^2+4x+3=(x+2)^2-1$"
  ariaLabel="A blank coordinate grid from negative 6 to 4 on the x-axis and negative 3 to 9 on the y-axis."
  hint="Complete the square to locate the vertex, then use the coefficient to choose another point."
>}}
{"answer":{"quadratic":{"a":1,"b":4,"c":3},"plotPoints":3},"grid":{"xMin":-6,"xMax":4,"yMin":-3,"yMax":9}}
{{< /graphplot >}}

{{< fillin
  question="Rewrite $f(x)=-x^2+8x-16$ in $f(x)=a(x-h)^2+k$ form by completing the square."
  answer="-(x-4)^2"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=-(x-4)^2$"
  hint="Factor out $-1$ first, then complete the square inside the parentheses."
>}}

{{< fillin
  question="For $f(x)=x^2-6x+15$, complete the square and find the vertex as an ordered pair."
  answer="(3,6)"
  answerForm="decimal"
  answerDisplay="$(3,6)$"
  hint="Complete the square to write the function as $a(x-h)^2+k$; the vertex is $(h,k)$."
>}}

### Find a quadratic function from its graph

{{< fillin
  question="A parabola has vertex $(-1,-5)$ and $y$-intercept $(0,-4)$. Write its equation in $f(x)=a(x-h)^2+k$ form."
  answer="(x+1)^2-5"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=(x+1)^2-5$"
  hint="Substitute the vertex for $h$ and $k$, then use the $y$-intercept to solve for $a$."
>}}

{{< fillin
  question="A parabola has vertex $(1,-3)$ and $y$-intercept $(0,-1)$. Write its equation in $f(x)=a(x-h)^2+k$ form."
  answer="2(x-1)^2-3"
  answerForm="vertex-form no-like-terms"
  answerDisplay="$f(x)=2(x-1)^2-3$"
  hint="Substitute the vertex for $h$ and $k$, then use the $y$-intercept to solve for $a$."
>}}

<small>
Adapted from [Intermediate Algebra 2e, Section 9.7](https://openstax.org/books/intermediate-algebra-2e/pages/9-7-graph-quadratic-functions-using-transformations) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [OpenStax](https://openstax.org/). Changes: recreated the source graphs as accessible inline graphics, drawing each multi-panel transformation sequence and the two vertex-form examples on one grid, and the worked solutions as typeset steps; omitted the Be Prepared quiz, media links, Key Concepts summary, matching and writing exercises, Self Check checklist, and unselected end-of-section exercises; condensed the section vocabulary into a Key terms paragraph; corrected the sentence after the horizontal-shift Try Its to shift left for $h<0$ and right for $h>0$, which the source reverses; converted the Try Its into interactive exercises with instant feedback, posing each graph-and-describe Try It as a choice among descriptions of the shifts, the $f(x)=-3x^2$ Try It as a choice among graphs, the $f(x)=2x^2$ Try It as a choice among descriptions, the graph-by-transformations Try Its for $f(x)=x^2+2x-3$, $f(x)=x^2-8x+12$, and $f(x)=-2x^2+12x-9$ and the graph-using-properties Try Its as their vertex form, and stating in each find-the-function Try It the vertex and point its graph shows; keyed the $g(x)=x^2+5$, $h(x)=x^2-5$ Try It as shifts up and down 5 units, where the source solution describes $(x+5)^2$ and $(x-5)^2$ shifted left and right; and adapted selected end-of-section exercises into an interactive Practice block, asking for the vertex or axis of symmetry of three graphing exercises, whether the graph of $f(x)=\tfrac14x^2$ is wider or skinnier, and only the vertex form of $f(x)=-x^2+8x-16$, and stating the vertex and $y$-intercept of each find-the-function exercise in place of its graph.
</small>
