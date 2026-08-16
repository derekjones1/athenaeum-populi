---
title: Absolute Value Functions
description: >-
  Absolute value as distance, graphing absolute value functions and their
  transformations, and solving absolute value equations and inequalities both
  algebraically and graphically — adapted from OpenStax Precalculus 2e,
  Section 1.6.
source_section: "1.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Graph an absolute value function
- Solve an absolute value equation
- Solve an absolute value inequality
{{< /callout >}}

Until the 1920s, the so-called spiral nebulae were believed to be clouds of
dust and gas in our own galaxy, some tens of thousands of light years away.
Then, astronomer Edwin Hubble proved that these objects are galaxies in their
own right, at distances of millions of light years. Today, astronomers can
detect galaxies that are billions of light years away. Distances in the
universe can be measured in all directions. As such, it is useful to consider
distance as an absolute value function. In this section, we will investigate
**absolute value functions**.

## Understanding absolute value

Recall that in its basic form $f(x)=\lvert x\rvert$, the absolute value
function, is one of our toolkit functions. The **absolute value** function is
commonly thought of as providing the distance the number is from zero on a
number line. Algebraically, for whatever the input value is, the output is the
value without regard to sign.

{{< callout type="info" >}}
  **Absolute value function.** The absolute value function can be defined as a
  piecewise function

  $$
  f(x)=\lvert x\rvert=\begin{cases}
  x & \text{if }\ x\ge 0 \\[4pt]
  -x & \text{if }\ x<0
  \end{cases}
  $$
{{< /callout >}}

**Example.** Describe all values $x$ within or including a distance of 4 from
the number 5.

**Solution.** We want the distance between $x$ and 5 to be less than or equal
to 4. We can draw a number line, such as the one below, to represent the
condition to be satisfied: four units in each direction from 5.

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from 0 to 10. Solid dots sit at 1, 5, and 9, and heavy stretches run from 1 to 5 and from 5 to 9 — four units each way from 5.","min":0,"max":10,"title":"4 units each way from 5","intervals":[{"from":1,"to":5},{"from":5,"to":9}]}
{{< /apfigure >}}

The distance from $x$ to 5 can be represented using the absolute value as
$\lvert x-5\rvert$. We want the values of $x$ that satisfy the condition
$\lvert x-5\rvert\le 4$.

Note that

$$
\begin{array}{lrcl}
& -4 &\le& x-5 \\[4pt]
& 1 &\le& x
\end{array}
\qquad
\begin{array}{lrcl}
& x-5 &\le& 4 \\[4pt]
& x &\le& 9
\end{array}
$$

So $\lvert x-5\rvert\le 4$ is equivalent to $1\le x\le 9$. However,
mathematicians generally prefer absolute value notation.

{{< multiplechoice
  question="Describe all values $x$ within a distance of 3 from the number 2."
  answer="$\lvert x-2\rvert\le 3$"
  hint="The distance between $x$ and 2 is $\lvert x-2\rvert$; \"within 3\" bounds that distance."
>}}
$\lvert x-3\rvert\le 2$
$\lvert x-2\rvert\ge 3$
$\lvert x-2\rvert\le 3$
$\lvert x+2\rvert\le 3$
{{< /multiplechoice >}}

**Example.** Electrical parts, such as resistors and capacitors, come with
specified values of their operating parameters: resistance, capacitance, etc.
However, due to imprecision in manufacturing, the actual values of these
parameters vary somewhat from piece to piece, even when they are supposed to
be the same. The best that manufacturers can do is to try to guarantee that
the variations will stay within a specified range, often $\pm 1\%$,
$\pm 5\%$, or $\pm 10\%$.

Suppose we have a resistor rated at 680 ohms, $\pm 5\%$. Use the absolute
value function to express the range of possible values of the actual
resistance.

**Solution.** 5% of 680 ohms is 34 ohms. The absolute value of the difference
between the actual and nominal resistance should not exceed the stated
variability, so, with the resistance $R$ in ohms,

$$\lvert R-680\rvert\le 34$$

{{< multiplechoice
  question="Students who score within 20 points of 80 will pass a test. Write this as a distance from 80 using absolute value notation, with $p$ for the passing score."
  answer="$\lvert p-80\rvert\le 20$"
  hint="Subtract the reference value inside the bars, and bound the result by the allowed spread."
>}}
$\lvert p-80\rvert\le 20$
$\lvert p-80\rvert\ge 20$
$\lvert p-20\rvert\le 80$
$\lvert p+80\rvert\le 20$
{{< /multiplechoice >}}

## Graphing an absolute value function

The most significant feature of the absolute value graph is the corner point
at which the graph changes direction. This point is shown at the **origin**
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals the absolute value of x: a V with its corner point at the origin, one arm rising to the left and one to the right.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-5,5],[0,0],[5,5]],"arrows":true}],"texts":[{"at":[1.6,5.2],"text":"y = |x|","anchor":"start"}]}
{{< /apfigure >}}

The next graph shows $y=2\lvert x-3\rvert+4$ drawn solid, with the toolkit
function $y=\lvert x\rvert$ dashed for comparison. The graph of
$y=\lvert x\rvert$ has been shifted right 3 units, vertically stretched by a
factor of 2, and shifted up 4 units. This means that the corner point is
located at $(3,4)$ for this transformed function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two V shapes on one grid. Drawn dashed, y = |x| has its corner at the origin. Drawn solid, y = 2|x − 3| + 4 has steeper arms and its corner marked at (3, 4).","xMin":-6,"xMax":7,"yMin":-1,"yMax":12,"xUnit":22,"yUnit":17,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polylines":[{"through":[[-6,6],[0,0],[6,6]],"dashed":true,"arrows":true},{"through":[[-0.5,11],[3,4],[6.5,11]],"arrows":true}],"points":[{"at":[3,4],"label":"(3, 4)","labelSide":"se"}],"texts":[{"at":[-5.6,7.4],"text":"y = |x|","anchor":"start"},{"at":[0.6,11.6],"text":"y = 2|x − 3| + 4","anchor":"start"}]}
{{< /apfigure >}}

**Example.** Write an equation for the function graphed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of an absolute value function: a V with its corner point at (3, −2), crossing the horizontal axis at 2 and 4 and reaching a height of 4 at x = 0.","xMin":-5,"xMax":5,"yMin":-4,"yMax":6,"unit":24,"tickLabels":true,"polylines":[{"through":[[-0.5,5],[3,-2],[4.5,1]],"arrows":true}]}
{{< /apfigure >}}

**Solution.** The basic absolute value function changes direction at the
origin, so this graph has been shifted to the right 3 units and down 2 units
from the basic toolkit function, putting its corner at $(3,-2)$.

We also notice that the graph appears vertically stretched, because the width
of the final graph on a horizontal line is not equal to 2 times the vertical
distance from the corner to this line, as it would be for an unstretched
absolute value function. Instead, the width is equal to 1 times the vertical
distance, as shown below, where the unstretched shape through the same corner
is dashed.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same V with its corner at (3, −2), drawn solid, together with the unstretched absolute value shape through the same corner, drawn dashed. Four units above the corner the dashed V is 8 units wide, a ratio of 2 to 1, while the solid V is only 4 units wide, a ratio of 1 to 1.","xMin":-5,"xMax":5,"yMin":-4,"yMax":6,"unit":24,"tickLabels":true,"polylines":[{"through":[[-0.5,5],[3,-2],[4.5,1]],"arrows":true},{"through":[[-4,5],[3,-2],[5,0]],"dashed":true,"arrows":true}],"points":[{"at":[3,-2],"label":"(3, −2)","labelSide":"se"}],"texts":[{"at":[-4.2,5.4],"text":"Ratio 2/1","anchor":"start"},{"at":[3.6,2.6],"text":"Ratio 1/1","anchor":"start"}]}
{{< /apfigure >}}

From this information we can write the equation

$$
\begin{array}{lrcl}
\text{treating the stretch as a vertical stretch, or} & f(x) &=& 2\lvert x-3\rvert-2, \\[4pt]
\text{treating the stretch as a horizontal compression.} & f(x) &=& \lvert 2(x-3)\rvert-2,
\end{array}
$$

Note that these equations are algebraically equivalent—the stretch for an
absolute value function can be written interchangeably as a vertical or
horizontal stretch or compression. Note also that if the vertical stretch
factor is negative, there is also a reflection about the $x$-axis.

{{< callout type="info" >}}
  **Q&A.** *If we couldn't observe the stretch of the function from the
  graphs, could we algebraically determine it?*

  Yes. If we are unable to determine the stretch based on the width of the
  graph, we can solve for the stretch factor by putting in a known pair of
  values for $x$ and $f(x)$.

  $$f(x)=a\lvert x-3\rvert-2$$

  Now substituting in the point $(1,2)$,

  $$
  \begin{array}{lrcl}
  & 2 &=& a\lvert 1-3\rvert-2 \\[4pt]
  & 4 &=& 2a \\[4pt]
  & a &=& 2
  \end{array}
  $$
{{< /callout >}}

{{< fillin
  question="Write the equation for the absolute value function that is horizontally shifted left 2 units, is vertically reflected, and vertically shifted up 3 units."
  answer="-|x+2|+3"
  answerDisplay="$f(x)=-\lvert x+2\rvert+3$"
  hint="Left 2 is an inside $+2$; the reflection is a minus sign outside; up 3 is a $+3$ outside."
>}}

{{< callout type="info" >}}
  **Q&A.** *Do the graphs of absolute value functions always intersect the
  vertical axis? The horizontal axis?*

  Yes, they always intersect the vertical axis. The graph of an absolute value
  function will intersect the vertical axis when the input is zero.

  No, they do not always intersect the horizontal axis. The graph may or may
  not intersect the horizontal axis, depending on how the graph has been
  shifted and reflected. It is possible for the absolute value function to
  intersect the horizontal axis at zero, one, or two points, as the three
  graphs below show.
{{< /callout >}}

(a) The absolute value function does not intersect the horizontal axis.

{{< apfigure kind="graph" >}}
{"ariaLabel":"(a) A V with its corner at (0, 2), entirely above the horizontal axis, so the graph never meets it.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-4,6],[0,2],[4,6]],"arrows":true}]}
{{< /apfigure >}}

(b) The absolute value function intersects the horizontal axis at one point.

{{< apfigure kind="graph" >}}
{"ariaLabel":"(b) A V with its corner exactly on the horizontal axis at (2, 0), so the graph meets the axis at one point.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-4,6],[2,0],[6,4]],"arrows":true}]}
{{< /apfigure >}}

(c) The absolute value function intersects the horizontal axis at two points.

{{< apfigure kind="graph" >}}
{"ariaLabel":"(c) An upside-down V with its peak at (1, 3), crossing the horizontal axis at −2 and at 4, so the graph meets the axis at two points.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"polylines":[{"through":[[-3,-1],[1,3],[5.5,-1.5]],"arrows":true}]}
{{< /apfigure >}}

## Solving an absolute value equation

Now that we can graph an absolute value function, we will learn how to solve
an absolute value equation. To solve an equation such as
$8=\lvert 2x-6\rvert$, we notice that the absolute value will be equal to 8 if
the quantity inside the absolute value is 8 or $-8$. This leads to two
different equations we can solve independently.

$$
\begin{array}{lrcl}
& 2x-6 &=& 8 \\[4pt]
& 2x &=& 14 \\[4pt]
& x &=& 7
\end{array}
\qquad\text{or}\qquad
\begin{array}{lrcl}
& 2x-6 &=& -8 \\[4pt]
& 2x &=& -2 \\[4pt]
& x &=& -1
\end{array}
$$

Knowing how to solve problems involving **absolute value functions** is
useful. For example, we may need to identify numbers or points on a line that
are at a specified distance from a given reference point.

An **absolute value equation** is an equation in which the unknown variable
appears in absolute value bars. For example,

$$
\begin{array}{lrcl}
& \lvert x\rvert &=& 4, \\[4pt]
& \lvert 2x-1\rvert &=& 3, \\[4pt]
& \lvert 5x+2\rvert-4 &=& 9
\end{array}
$$

{{< callout type="info" >}}
  **Solutions to absolute value equations.** For real numbers $A$ and $B$, an
  equation of the form $\lvert A\rvert=B$, with $B\ge 0$, will have solutions
  when $A=B$ or $A=-B$. If $B<0$, the equation $\lvert A\rvert=B$ has no
  solution.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the formula for an absolute value function, find the
  horizontal intercepts of its graph.

  1. Isolate the absolute value term.
  2. Use $\lvert A\rvert=B$ to write $A=B$ or $-A=B$, assuming $B>0$.
  3. Solve for $x$.
{{< /callout >}}

**Example.** For the function $f(x)=\lvert 4x+1\rvert-7$, find the values of
$x$ such that $f(x)=0$.

**Solution.**

| Step | Reason |
| :--- | :--- |
| $0=\lvert 4x+1\rvert-7$ | Substitute 0 for $f(x)$. |
| $7=\lvert 4x+1\rvert$ | Isolate the absolute value on one side of the equation. |
| $7=4x+1$ or $-7=4x+1$ | Break into two separate equations and solve. |
| $6=4x$ or $-8=4x$ | |
| $x=\tfrac{6}{4}=1.5$ or $x=\tfrac{-8}{4}=-2$ | |

The function outputs 0 when $x=1.5$ or $x=-2$, as the graph below confirms.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the absolute value of 4x plus 1, minus 7: a steep V with its corner at (−0.25, −7), crossing the horizontal axis at −2 and at 1.5.","xMin":-4,"xMax":4,"yMin":-8,"yMax":6,"xUnit":30,"yUnit":16,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polylines":[{"through":[[-3.5,6],[-0.25,-7],[3,6]],"arrows":true}],"points":[{"at":[-2,0]},{"at":[1.5,0]}]}
{{< /apfigure >}}

{{< fillin
  question="For the function $f(x)=\lvert 2x-1\rvert-3$, find the values of $x$ such that $f(x)=0$. Enter both solutions, separated by a comma."
  answer="-1,2"
  answerMode="unordered"
  answerDisplay="$x=-1$ or $x=2$"
  hint="Isolate the absolute value, then set the inside equal to $3$ and to $-3$."
>}}

{{< callout type="info" >}}
  **Q&A.** *Should we always expect two answers when solving
  $\lvert A\rvert=B$?*

  No. We may find one, two, or even no answers. For example, there is no
  solution to $2+\lvert 3x-5\rvert=1$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given an absolute value equation, solve it.

  1. Isolate the absolute value term.
  2. Use $\lvert A\rvert=B$ to write $A=B$ or $A=-B$.
  3. Solve for $x$.
{{< /callout >}}

**Example.** Solve $1=4\lvert x-2\rvert+2$.

**Solution.** Isolating the absolute value on one side of the equation gives
the following.

$$
\begin{array}{lrcl}
& 1 &=& 4\lvert x-2\rvert+2 \\[4pt]
& -1 &=& 4\lvert x-2\rvert \\[4pt]
& -\tfrac{1}{4} &=& \lvert x-2\rvert
\end{array}
$$

The absolute value always returns a nonnegative value, so it is impossible for
the absolute value to equal a negative value. At this point, we notice that
this equation has no solutions.

{{< callout type="info" >}}
  **Q&A.** *If $f(x)=1$ and $g(x)=4\lvert x-2\rvert+2$ were graphed on the
  same set of axes, would the graphs intersect?*

  No. The graphs of $f$ and $g$ would not intersect, as shown below. This
  confirms, graphically, that the equation $1=4\lvert x-2\rvert+2$ has no
  solution.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of g of x equals 4 times the absolute value of x minus 2, plus 2, a steep V with its corner at (2, 2), together with the horizontal line f of x equals 1. The V never dips to the line, so the two graphs do not intersect.","xMin":-1,"xMax":5,"yMin":-1,"yMax":12,"xUnit":40,"yUnit":18,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":2,"polylines":[{"through":[[-0.4,11.6],[2,2],[4.4,11.6]],"arrows":true}],"lines":[{"y":1,"label":"f(x) = 1","labelAt":0.72,"labelSide":"left","arrows":false}],"texts":[{"at":[2.7,8],"text":"g(x)","anchor":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="The graph of $f(x)=-\lvert x+2\rvert+3$ crosses the vertical axis at $(0,b)$. Find $b$."
  answer="1"
  hint="Evaluate the function at $x=0$."
>}}

{{< fillin
  question="Where does the graph of $f(x)=-\lvert x+2\rvert+3$ cross the horizontal axis? Enter both $x$-values, separated by a comma."
  answer="-5,1"
  answerMode="unordered"
  answerDisplay="$(-5,0)$ and $(1,0)$"
  hint="Set the function equal to zero and isolate the absolute value first."
>}}

## Solving an absolute value inequality

Absolute value equations may not always involve equalities. Instead, we may
need to solve an equation within a range of values. We would use an absolute
value inequality to solve such an equation. An **absolute value inequality**
is an equation of the form

$$\lvert A\rvert<B,\quad \lvert A\rvert\le B,\quad \lvert A\rvert>B,\quad\text{or}\quad \lvert A\rvert\ge B,$$

where an expression $A$ (and possibly but not usually $B$) depends on a
variable $x$. Solving the inequality means finding the set of all $x$ that
satisfy the inequality. Usually this set will be an interval or the union of
two intervals.

There are two basic approaches to solving absolute value inequalities:
graphical and algebraic. The advantage of the graphical approach is we can
read the solution by interpreting the graphs of two functions. The advantage
of the algebraic approach is it yields solutions that may be difficult to read
from the graph.

For example, we know that all numbers within 200 units of 0 may be expressed
as

$$\lvert x\rvert<200\quad\text{or}\quad -200<x<200$$

Suppose we want to know all possible returns on an investment if we could earn
some amount of money within \$200 of \$600. We can solve algebraically for the
set of values $x$ such that the distance between $x$ and 600 is less than 200.
We represent the distance between $x$ and 600 as $\lvert x-600\rvert$.

$$
\begin{array}{lrcl}
& \lvert x-600\rvert &<& 200 \\[4pt]
& -200<x-600 &<& 200 \\[4pt]
& -200+600<x-600+600 &<& 200+600 \\[4pt]
& 400<x &<& 800
\end{array}
$$

This means our returns would be between \$400 and \$800.

Sometimes an absolute value inequality problem will be presented to us in
terms of a shifted and/or stretched or compressed absolute value function,
where we must determine for which values of the input the function's output
will be negative or positive.

{{< callout type="info" >}}
  **How to:** given an absolute value inequality of the form
  $\lvert x-A\rvert\le B$ for real numbers $A$ and $B$ where $B$ is positive,
  solve the absolute value inequality algebraically.

  1. Find boundary points by solving $\lvert x-A\rvert=B$.
  2. Test intervals created by the boundary points to determine where
     $\lvert x-A\rvert\le B$.
  3. Write the interval or union of intervals satisfying the inequality in
     interval, inequality, or set-builder notation.
{{< /callout >}}

**Example.** Solve $\lvert x-5\rvert<4$.

**Solution.** With both approaches, we will need to know first where the
corresponding equality is true. In this case we first will find where
$\lvert x-5\rvert=4$. We do this because the absolute value is a function with
no breaks, so the only way the function values can switch from being less than
4 to being greater than 4 is by passing through where the values equal 4.
Solve $\lvert x-5\rvert=4$.

$$
\begin{array}{lrcl}
& x-5 &=& 4 \\[4pt]
& x &=& 9
\end{array}
\qquad\text{or}\qquad
\begin{array}{lrcl}
& x-5 &=& -4 \\[4pt]
& x &=& 1
\end{array}
$$

After determining that the absolute value is equal to 4 at $x=1$ and $x=9$, we
know the graph can change only from being less than 4 to greater than 4 at
these values. This divides the number line up into three intervals:

$$x<1,\quad 1<x<9,\quad\text{and}\quad x>9.$$

To determine when the function is less than 4, we could choose a value in each
interval and see if the output is less than or greater than 4.

| Interval | Test $x$ | $\lvert x-5\rvert$ | Less than or greater than 4? |
| :--- | ---: | :--- | :--- |
| $x<1$ | 0 | $\lvert 0-5\rvert=5$ | Greater than |
| $1<x<9$ | 6 | $\lvert 6-5\rvert=1$ | Less than |
| $x>9$ | 11 | $\lvert 11-5\rvert=6$ | Greater than |

Because $1<x<9$ is the only interval in which the output at the test value is
less than 4, we can conclude that the solution to $\lvert x-5\rvert<4$ is
$1<x<9$, or $(1,9)$.

To use a graph, we can sketch the function $f(x)=\lvert x-5\rvert$. To help us
see where the outputs are 4, the line $g(x)=4$ could also be sketched.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals the absolute value of x minus 5, a V with its corner at (5, 0), together with the horizontal line g of x equals 4. The two meet at x = 1 and x = 9, and the V lies below the line between them.","xMin":-1,"xMax":12,"yMin":-1,"yMax":8,"xUnit":26,"yUnit":26,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":1,"polylines":[{"through":[[-0.5,5.5],[5,0],[12,7]],"arrows":true}],"lines":[{"y":4,"label":"g(x) = 4","labelAt":0.45,"labelSide":"right","arrows":false}],"points":[{"at":[1,4]},{"at":[9,4]}]}
{{< /apfigure >}}

We can see the following:

- The output values of the absolute value are equal to 4 at $x=1$ and $x=9$.
- The graph of $f$ is below the graph of $g$ on $1<x<9$. This means the output
  values of $f(x)$ are less than the output values of $g(x)$.
- The absolute value is less than or equal to 4 between these two points, when
  $1<x<9$. In interval notation, this would be the interval $(1,9)$.

For absolute value inequalities,

$$
\begin{array}{lrcl}
& \lvert x-A\rvert &<& C, \\[4pt]
& -C<x-A &<& C,
\end{array}
\qquad
\begin{array}{lrcl}
& \lvert x-A\rvert &>& C, \\[4pt]
& x-A<-C\ \text{ or }\ x-A &>& C.
\end{array}
$$

The $<$ or $>$ symbol may be replaced by $\le$ or $\ge$.

So, for this example, we could use this alternative approach.

$$
\begin{array}{lrcl}
& \lvert x-5\rvert &<& 4 \\[4pt]
\text{Rewrite by removing the absolute value bars.} & -4<x-5 &<& 4 \\[4pt]
\text{Isolate the }x. & -4+5<x-5+5 &<& 4+5 \\[4pt]
& 1<x &<& 9
\end{array}
$$

{{< multiplechoice
  question="Solve $\lvert x+2\rvert\le 6$."
  answer="$-8\le x\le 4$"
  hint="Rewrite without the bars as $-6\le x+2\le 6$, then isolate $x$."
>}}
$-6\le x\le 6$
$x\le -8$ or $x\ge 4$
$-4\le x\le 8$
$-8\le x\le 4$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **How to:** given an absolute value function, solve for the set of inputs
  where the output is positive (or negative).

  1. Set the function equal to zero, and solve for the boundary points of the
     solution set.
  2. Use test points or a graph to determine where the function's output is
     positive or negative.
{{< /callout >}}

**Example.** Given the function
$f(x)=-\tfrac{1}{2}\lvert 4x-5\rvert+3$, determine the $x$-values for which
the function values are negative.

**Solution.** We are trying to determine where $f(x)<0$, which is when
$-\tfrac{1}{2}\lvert 4x-5\rvert+3<0$. We begin by isolating the absolute
value.

$$
\begin{array}{lrcl}
\text{Multiply both sides by }-2,\text{ and reverse the inequality.} & -\tfrac{1}{2}\lvert 4x-5\rvert &<& -3 \\[4pt]
& \lvert 4x-5\rvert &>& 6
\end{array}
$$

Next we solve for the equality $\lvert 4x-5\rvert=6$.

$$
\begin{array}{lrcl}
& 4x-5 &=& 6 \\[4pt]
& 4x &=& 11 \\[4pt]
& x &=& \tfrac{11}{4}
\end{array}
\qquad\text{or}\qquad
\begin{array}{lrcl}
& 4x-5 &=& -6 \\[4pt]
& 4x &=& -1 \\[4pt]
& x &=& -\tfrac{1}{4}
\end{array}
$$

Now, we can examine the graph of $f$ to observe where the output is negative.
We will observe where the branches are below the $x$-axis. Notice that it is
not even important exactly what the graph looks like, as long as we know that
it crosses the horizontal axis at $x=-\tfrac{1}{4}$ and $x=\tfrac{11}{4}$ and
that the graph has been reflected vertically.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals negative one half times the absolute value of 4x minus 5, plus 3: an upside-down V with its peak at (1.25, 3), crossing the horizontal axis at −0.25 and at 2.75. The branches fall below the axis to the left of −0.25 and to the right of 2.75.","xMin":-3,"xMax":5,"yMin":-5,"yMax":5,"xUnit":30,"yUnit":24,"xGridStep":1,"yGridStep":1,"tickLabels":true,"xTickStep":1,"yTickStep":1,"polylines":[{"through":[[-2.5,-4.5],[1.25,3],[3.75,-2]],"arrows":true}],"points":[{"at":[-0.25,0]},{"at":[2.75,0]}]}
{{< /apfigure >}}

We observe that the graph of the function is below the $x$-axis left of
$x=-\tfrac{1}{4}$ and right of $x=\tfrac{11}{4}$. This means the function
values are negative to the left of the first horizontal intercept at
$x=-\tfrac{1}{4}$, and negative to the right of the second intercept at
$x=\tfrac{11}{4}$. This gives us the solution to the inequality.

$$x<-\tfrac{1}{4}\quad\text{or}\quad x>\tfrac{11}{4}$$

In interval notation, this would be $(-\infty,-0.25)\cup(2.75,\infty)$.

{{< multiplechoice
  question="Solve $-2\lvert k-4\rvert\le -6$."
  answer="$(-\infty,1]\cup[7,\infty)$"
  hint="Divide by $-2$ and reverse the inequality, then read $\lvert k-4\rvert\ge 3$ as two separate conditions."
>}}
$(-\infty,-1]\cup[7,\infty)$
$[1,7]$
$(-\infty,3]\cup[5,\infty)$
$(-\infty,1]\cup[7,\infty)$
{{< /multiplechoice >}}

## Key concepts

- The absolute value function is commonly used to measure distances between
  points.
- Applied problems, such as ranges of possible values, can also be solved
  using the absolute value function.
- The graph of the absolute value function resembles a letter V. It has a
  corner point at which the graph changes direction.
- In an absolute value equation, an unknown variable is the input of an
  absolute value function.
- If the absolute value of an expression is set equal to a positive number,
  expect two solutions for the unknown variable.
- An absolute value equation may have one solution, two solutions, or no
  solutions.
- An absolute value inequality is similar to an absolute value equation but
  takes the form $\lvert A\rvert<B$, $\lvert A\rvert\le B$,
  $\lvert A\rvert>B$, or $\lvert A\rvert\ge B$. It can be solved by
  determining the boundaries of the solution set and then testing which
  segments are in the set.
- Absolute value inequalities can also be solved graphically.

## Key terms

**absolute value equation** — an equation of the form $\lvert A\rvert=B$, with
$B\ge 0$; it will have solutions when $A=B$ or $A=-B$. **absolute value
inequality** — a relationship in the form $\lvert A\rvert<B$,
$\lvert A\rvert\le B$, $\lvert A\rvert>B$, or $\lvert A\rvert\ge B$.

## Practice

### Graph an absolute value function

{{< fillin
  question="Find the $y$-intercept and both $x$-intercepts of $f(x)=2\lvert x+1\rvert-10$. Enter the $y$-intercept first, then the $x$-intercepts in increasing order of $x$, separated by commas."
  answer="(0,-8),(-6,0),(4,0)"
  hint="Evaluate $f(0)$ for the $y$-intercept; set $f(x)=0$ and split $\lvert x+1\rvert=5$ into two linear equations for the $x$-intercepts."
>}}

{{< multiplechoice
  question="Use a graphing utility to graph $f(x)=10\lvert x-2\rvert$ on the viewing window $[0,4]$. What is the corresponding range?"
  answer="$[0,20]$"
  hint="Evaluate $f$ at the window's endpoints and at the corner $x=2$ to find the least and greatest outputs."
>}}
$[0,20]$
$[-20,20]$
$[0,10]$
$[0,40]$
{{< /multiplechoice >}}

### Solve an absolute value equation

{{< fillin
  question="Solve $\lvert 6-x\rvert=5$. Enter both solutions, separated by a comma."
  answer="1,11"
  answerMode="unordered"
  answerDisplay="$x=1$ or $x=11$"
  hint="Split into $6-x=5$ and $6-x=-5$, then solve each for $x$."
>}}

{{< fillin
  question="Solve $\lvert 4x-2\rvert=11$. Enter both solutions, separated by a comma."
  answer="-\tfrac{9}{4},\tfrac{13}{4}"
  answerMode="unordered"
  answerDisplay="$x=-\tfrac{9}{4}$ or $x=\tfrac{13}{4}$"
  hint="Split into $4x-2=11$ and $4x-2=-11$, then solve each for $x$."
>}}

{{< multiplechoice
  question="Solve $\lvert 3x-2\rvert=-7$."
  answer="No solution"
  hint="The absolute value of an expression can never equal a negative number."
>}}
$x=3$
$x=3$ or $x=-\tfrac{5}{3}$
No solution
$x=-\tfrac{5}{3}$
{{< /multiplechoice >}}

### Solve an absolute value inequality

{{< multiplechoice
  question="Solve $\lvert 3x-4\rvert\le 8$."
  answer="$-\tfrac{4}{3}\le x\le 4$"
  hint="Rewrite without the bars as $-8\le 3x-4\le 8$, then isolate $x$."
>}}
$-\tfrac{4}{3}\le x\le 4$
$-\tfrac{4}{3}< x< 4$
$x\le -\tfrac{4}{3}$ or $x\ge 4$
$-4\le x\le \tfrac{4}{3}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve $\lvert 3x-5\rvert\ge 13$."
  answer="$(-\infty,-\tfrac{8}{3}]\cup[6,\infty)$"
  hint="Split into $3x-5\le -13$ or $3x-5\ge 13$, then isolate $x$ in each."
>}}
$[-\tfrac{8}{3},6]$
$(-\infty,-\tfrac{8}{3})\cup(6,\infty)$
$(-\infty,-\tfrac{8}{3}]\cup[6,\infty)$
$(-\infty,-6]\cup[\tfrac{8}{3},\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve $\left\lvert -2x-\tfrac{2}{3}(x+1)\right\rvert+3>-1$."
  answer="$(-\infty,\infty)$"
  hint="Isolate the absolute value to get $\left\lvert -2x-\tfrac{2}{3}(x+1)\right\rvert>-4$ — an absolute value is never negative, so this holds for every $x$ without expanding the expression inside."
>}}
$x=-4$
$(-\infty,\infty)$
$(-\infty,-4)\cup(4,\infty)$
No solution
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.6: Absolute Value Functions](https://openstax.org/books/precalculus-2e/pages/1-6-absolute-value-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph and number line as an accessible inline SVG generated from an explicit formula or point list, drawing the comparison curve dashed where the source distinguishes it by colour; condensed the source's multi-colour construction diagrams for $f(x)=2\lvert x-3\rvert-2$ — one showing the shift and one the width ratio — into a single annotated figure, because monochrome renderings of four overlapping annotated V shapes are unreadable, and likewise showed the four-stage transformation of $y=2\lvert x-3\rvert+4$ as the toolkit V against the finished V, with the intermediate stages described in the prose; presented the solution steps and the interval test as Markdown tables; omitted the opening Andromeda Galaxy photograph and the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is an inequality or an interval, which cannot be graded as free-response math; and adapted selected end-of-section exercises into the closing Practice block, again using multiple choice for interval- and inequality-valued answers for the same reason.</small>
