---
title: Find the Equation of a Line
description: >-
  Finding equations of lines from a slope and y-intercept, a slope and a
  point, or two points, and finding equations of parallel and perpendicular
  lines — adapted from OpenStax Intermediate Algebra 2e, Section 3.3.
source_section: "3.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find an equation of the line given the slope and $y$-intercept
- Find an equation of the line given the slope and a point
- Find an equation of the line given two points
- Find an equation of a line parallel to a given line
- Find an equation of a line perpendicular to a given line
{{< /callout >}}

How do online companies know that “you may also like” a particular item based
on something you just ordered? How can economists know how a rise in the
minimum wage will affect the unemployment rate? How do medical researchers
create drugs to target cancer cells? How can traffic engineers predict the
effect on your commuting time of an increase or decrease in gas prices? It’s
all mathematics.

The physical sciences, social sciences, and the business world are full of
situations that can be modeled with linear equations relating two variables.
To create a mathematical model of a linear relation between two variables, we
must be able to find the equation of the line. In this section, we will look at
several ways to write the equation of a line. The specific method we use will
be determined by what information we are given.

## Find an equation of the line given the slope and y-intercept

We can easily determine the slope and intercept of a line if the equation is
written in slope-intercept form, $y = mx + b$. Now we will do the reverse—we
will start with the slope and $y$-intercept and use them to find the equation
of the line.

**Example.** Find the equation of a line with slope $-9$ and $y$-intercept
$(0,-4)$.

Since we are given the slope and $y$-intercept of the line, we can substitute
the needed values into the slope-intercept form, $y=mx+b$.

$$
\begin{array}{lrcl}
\text{Name the slope.} & m &=& -9 \\[4pt]
\text{Name the }y\text{-intercept.} & (0,b) &=& (0,-4) \\[4pt]
\text{Substitute the values into }y=mx+b. & y &=& -9x+(-4) \\[4pt]
&&=& -9x-4
\end{array}
$$

{{< fillin
  question="Find the equation of a line with slope $\tfrac{2}{5}$ and $y$-intercept $(0,4)$. Write the equation in slope-intercept form."
  answer="y = \frac{2}{5}x + 4"
  answerForm="slope-intercept-form"
  answerDisplay="$y = \tfrac{2}{5}x + 4$"
  hint="Read $m$ from the slope and $b$ from the $y$-intercept $(0,b)$, then substitute both into $y=mx+b$."
>}}

{{< fillin
  question="Find the equation of a line with slope $-1$ and $y$-intercept $(0,-3)$. Write the equation in slope-intercept form."
  answer="y = -x - 3"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-x-3$"
  hint="Read $m$ from the slope and $b$ from the $y$-intercept $(0,b)$, then substitute both into $y=mx+b$."
>}}

Sometimes, the slope and intercept need to be determined from the graph.

**Example.** Find the equation of the line shown in the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −8 to 8, showing a line rising from lower left to upper right that crosses the y-axis at (0, −4) and passes through the marked point (3, −2).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"lines":[{"through":[[0,-4],[3,-2]]}],"points":[{"at":[3,-2]}]}
{{< /apfigure >}}

We need to find the slope and $y$-intercept of the line from the graph so we
can substitute the needed values into the slope-intercept form, $y=mx+b$.
To find the slope, we choose two points on the graph. The $y$-intercept is
$(0,-4)$ and the graph passes through $(3,-2)$.

$$
\begin{array}{lrcl}
\text{Find the slope, by counting the rise and run.} & m &=& \tfrac{\text{rise}}{\text{run}} \\[4pt]
&&=& \tfrac{2}{3} \\[4pt]
\text{Find the }y\text{-intercept.} & (0,b) &=& (0,-4) \\[4pt]
\text{Substitute the values into }y=mx+b. & y &=& \tfrac{2}{3}x-4
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −8 to 8, showing a line rising from lower left to upper right through the points (0, 1) and (5, 4), with (5, 4) marked.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,1],[5,4]]}],"points":[{"at":[5,4]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the equation of the line shown in the graph immediately above. Write the equation in slope-intercept form."
  answer="y = \frac{3}{5}x + 1"
  answerForm="slope-intercept-form"
  answerDisplay="$y=\tfrac{3}{5}x+1$"
  hint="Read the $y$-intercept, then use the marked point to count the rise and run."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −8 to 8, showing a line rising from lower left to upper right through the points (0, −5) and (3, −1), with (3, −1) marked.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":1,"lines":[{"through":[[0,-5],[3,-1]]}],"points":[{"at":[3,-1]}]}
{{< /apfigure >}}

{{< fillin
  question="Find the equation of the line shown in the graph immediately above. Write the equation in slope-intercept form."
  answer="y = \frac{4}{3}x - 5"
  answerForm="slope-intercept-form"
  answerDisplay="$y=\tfrac{4}{3}x-5$"
  hint="Read the $y$-intercept, then use the marked point to count the rise and run."
>}}

## Find an equation of the line given the slope and a point

Finding an equation of a line using the slope-intercept form of the equation
works well when you are given the slope and $y$-intercept or when you read
them off a graph. But what happens when you have another point instead of the
$y$-intercept?

We are going to use the slope formula to derive another form of an equation
of the line. Suppose we have a line that has slope $m$ and that contains some
specific point $(x_1,y_1)$ and some other point, which we will just call
$(x,y)$. We can write the slope of this line and then change it to a different
form.

$$
\begin{array}{lrcl}
& m &=& \tfrac{y-y_1}{x-x_1} \\[10pt]
\text{Multiply both sides of the equation by }x-x_1. & m(x-x_1) &=& \left(\tfrac{y-y_1}{x-x_1}\right)(x-x_1) \\[10pt]
\text{Simplify.} & m(x-x_1) &=& y-y_1 \\[4pt]
\text{Rewrite the equation with the }y\text{ terms on the left.} & y-y_1 &=& m(x-x_1)
\end{array}
$$

This format is called the **point-slope form** of an equation of a line.

{{< callout type="info" >}}
  **Point-slope form of an equation of a line.** The point-slope form of an
  equation of a line with slope $m$ and containing the point $(x_1,y_1)$ is
  $y-y_1=m(x-x_1)$.
{{< /callout >}}

We can use the point-slope form of an equation to find an equation of a line
when we know the slope and at least one point. Then, we will rewrite the
equation in slope-intercept form. Most applications of linear equations use
the slope-intercept form.

**Example.** Find an equation of a line with slope $m=-\tfrac{1}{3}$ that
contains the point $(6,-4)$. Write the equation in slope-intercept form.

$$
\begin{array}{lrcl}
\text{Identify the slope.} & m &=& -\tfrac{1}{3} \\[4pt]
\text{Identify the point.} & (x_1,y_1) &=& (6,-4) \\[4pt]
\text{Substitute the values into the point-slope form.} & y-(-4) &=& -\tfrac{1}{3}(x-6) \\[10pt]
\text{Simplify.} & y+4 &=& -\tfrac{1}{3}x+2 \\[10pt]
\text{Write the equation in slope-intercept form.} & y &=& -\tfrac{1}{3}x-2
\end{array}
$$

{{< fillin
  question="Find the equation of a line with slope $m=-\tfrac{2}{5}$ and containing the point $(10,-5)$. Write the equation in slope-intercept form."
  answer="y = -\frac{2}{5}x - 1"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-\tfrac{2}{5}x-1$"
  hint="Substitute the slope and point into $y-y_1=m(x-x_1)$, then solve for $y$."
>}}

{{< fillin
  question="Find the equation of a line with slope $m=-\tfrac{3}{4}$ and containing the point $(4,-7)$. Write the equation in slope-intercept form."
  answer="y = -\frac{3}{4}x - 4"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-\tfrac{3}{4}x-4$"
  hint="Substitute the slope and point into $y-y_1=m(x-x_1)$, then solve for $y$."
>}}

We list the steps for easy reference.

{{< callout type="info" >}}
  **To find an equation of a line given the slope and a point.**

  1. Identify the slope.
  2. Identify the point.
  3. Substitute the values into the point-slope form, $y-y_1=m(x-x_1)$.
  4. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a horizontal line that contains the point
$(-2,-6)$. Write the equation in slope-intercept form.

Every horizontal line has slope $0$. We can substitute the slope and point
into the point-slope form, $y-y_1=m(x-x_1)$.

$$
\begin{array}{lrcl}
\text{Identify the slope.} & m &=& 0 \\[4pt]
\text{Identify the point.} & (x_1,y_1) &=& (-2,-6) \\[4pt]
\text{Substitute the values.} & y-(-6) &=& 0(x-(-2)) \\[4pt]
\text{Simplify.} & y+6 &=& 0 \\[4pt]
& y &=& -6
\end{array}
$$

It is in $y$-form, but could be written $y=0x-6$. Did we end up with the
form of a horizontal line, $y=b$?

{{< fillin
  question="Find the equation of a horizontal line containing the point $(-3,8)$. Write the equation in slope-intercept form."
  answer="y=8"
  answerForm="slope-intercept-form"
  hint="A horizontal line has slope $0$. Substitute that slope and the point into $y-y_1=m(x-x_1)$, then solve for $y$."
>}}

{{< fillin
  question="Find the equation of a horizontal line containing the point $(-1,4)$. Write the equation in slope-intercept form."
  answer="y=4"
  answerForm="slope-intercept-form"
  hint="A horizontal line has slope $0$. Substitute that slope and the point into $y-y_1=m(x-x_1)$, then solve for $y$."
>}}

## Find an equation of the line given two points

When real-world data is collected, a linear model can be created from two
data points. In the next example we’ll see how to find an equation of a line
when just two points are given.

So far, we have two options for finding an equation of a line:
slope-intercept or point-slope. When we start with two points, it makes more
sense to use the point-slope form.

But then we need the slope. Can we find the slope with just two points? Yes.
Then, once we have the slope, we can use it and one of the given points to
find the equation.

**Example.** Find an equation of a line that contains the points $(-3,-1)$
and $(2,-2)$. Write the equation in slope-intercept form.

$$
\begin{array}{lrcl}
\text{Find the slope using the given points.} & m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[10pt]
&&=& \tfrac{-2-(-1)}{2-(-3)} \\[10pt]
&&=& -\tfrac{1}{5} \\[10pt]
\text{Choose either point.} & (x_1,y_1) &=& (2,-2) \\[4pt]
\text{Substitute into the point-slope form.} & y-(-2) &=& -\tfrac{1}{5}(x-2) \\[10pt]
\text{Simplify.} & y+2 &=& -\tfrac{1}{5}x+\tfrac{2}{5} \\[10pt]
\text{Write in slope-intercept form.} & y &=& -\tfrac{1}{5}x-\tfrac{8}{5}
\end{array}
$$

{{< fillin
  question="Find the equation of a line containing the points $(-2,-4)$ and $(1,-3)$. Write the equation in slope-intercept form, or as $x=a$ if the line is vertical."
  answer="y = \frac{1}{3}x - \frac{10}{3}"
  answerForm="slope-intercept-form"
  answerDisplay="$y=\tfrac{1}{3}x-\tfrac{10}{3}$"
  hint="First use the two points to find the slope, then use either point in point-slope form."
>}}

{{< fillin
  question="Find the equation of a line containing the points $(-4,-3)$ and $(1,-5)$. Write the equation in slope-intercept form, or as $x=a$ if the line is vertical."
  answer="y = -\frac{2}{5}x - \frac{23}{5}"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-\tfrac{2}{5}x-\tfrac{23}{5}$"
  hint="First use the two points to find the slope, then use either point in point-slope form."
>}}

The steps are summarized here.

{{< callout type="info" >}}
  **To find an equation of a line given two points.**

  1. Find the slope using the given points, $m=\tfrac{y_2-y_1}{x_2-x_1}$.
  2. Choose one point.
  3. Substitute the values into the point-slope form: $y-y_1=m(x-x_1)$.
  4. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a line that contains the points $(-3,5)$
and $(-3,4)$. Write the equation in slope-intercept form.

Again, the first step will be to find the slope.

$$
\begin{array}{lrcl}
\text{Find the slope through }(-3,5)\text{ and }(-3,4). & m &=& \tfrac{y_2-y_1}{x_2-x_1} \\[10pt]
&&=& \tfrac{4-5}{-3-(-3)} \\[10pt]
&&=& \tfrac{-1}{0}
\end{array}
$$

The slope is undefined. This tells us it is a vertical line. Both of our
points have an $x$-coordinate of $-3$. So our equation of the line is
$x=-3$. Since there is no $y$, we cannot write it in slope-intercept form.

You may want to sketch a graph using the two given points. Does your graph
agree with our conclusion that this is a vertical line?

{{< fillin
  question="Find the equation of a line containing the points $(5,1)$ and $(5,-4)$. Write the equation in slope-intercept form, or as $x=a$ if the line is vertical."
  answer="x=5"
  answerForm="slope-intercept-form"
  hint="Compute the slope from the two points first; its value tells you what kind of line passes through them."
>}}

{{< fillin
  question="Find the equation of a line containing the points $(-4,4)$ and $(-4,3)$. Write the equation in slope-intercept form, or as $x=a$ if the line is vertical."
  answer="x=-4"
  answerForm="slope-intercept-form"
  hint="Compute the slope from the two points first; its value tells you what kind of line passes through them."
>}}

We have seen that we can use either the slope-intercept form or the
point-slope form to find an equation of a line. Which form we use will depend
on the information we are given.

| If given | Use | Form |
| :--- | :--- | :--- |
| Slope and $y$-intercept | slope-intercept | $y=mx+b$ |
| Slope and a point | point-slope | $y-y_1=m(x-x_1)$ |
| Two points | point-slope | $y-y_1=m(x-x_1)$ |

## Find an equation of a line parallel to a given line

Suppose we need to find an equation of a line that passes through a specific
point and is parallel to a given line. We can use the fact that parallel
lines have the same slope. So we will have a point and the slope—just what we
need to use the point-slope equation.

First, let’s look at this graphically. This graph shows $y=2x-3$. We want to
graph a line parallel to this line and passing through the point $(-2,1)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −6 to 6, showing the line y = 2x − 3 and the marked point (−2, 1), which is not on the line.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":-3}],"points":[{"at":[-2,1]}]}
{{< /apfigure >}}

We know that parallel lines have the same slope. So the second line will
have the same slope as $y=2x-3$. That slope is $m_{\parallel}=2$. We’ll use
the notation $m_{\parallel}$ to represent the slope of a line parallel to a
line with slope $m$. (Notice that the subscript $\parallel$ looks like two
parallel lines.)

The second line will pass through $(-2,1)$ and have $m=2$. To graph the line,
we start at $(-2,1)$ and count out the rise and run. With $m=2$ (or
$m=\tfrac{2}{1}$), we count out the rise $2$ and the run $1$. We draw the
line, as shown in the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with the x-axis numbered from −6 to 6 and the y-axis from −6 to 7, showing the line y = 2x − 3 and a second line parallel to it through the marked points (−2, 1) and (−1, 3).","xMin":-6,"xMax":6,"yMin":-6,"yMax":7,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":-3},{"through":[[-2,1],[-1,3]]}],"points":[{"at":[-2,1]},{"at":[-1,3]}]}
{{< /apfigure >}}

Do the lines appear parallel? Does the second line pass through $(-2,1)$?
We were asked to graph the line; now let’s see how to do this algebraically.
We can use either the slope-intercept form or the point-slope form to find an
equation of a line. Here we know one point and can find the slope. So we will
use the point-slope form.

**Example.** Find an equation of a line parallel to $y=2x-3$ that contains
the point $(-2,1)$. Write the equation in slope-intercept form.

$$
\begin{array}{lrcl}
\text{Find the slope of the given line.} & m &=& 2 \\[4pt]
\text{Find the slope of the parallel line.} & m_{\parallel} &=& 2 \\[4pt]
\text{Identify the point.} & (x_1,y_1) &=& (-2,1) \\[4pt]
\text{Substitute into the point-slope form.} & y-1 &=& 2(x-(-2)) \\[4pt]
\text{Simplify.} & y-1 &=& 2(x+2) \\[4pt]
&&=& 2x+4 \\[4pt]
\text{Write in slope-intercept form.} & y &=& 2x+5
\end{array}
$$

Look at the graph with the parallel lines shown previously. Does this
equation make sense? What is the $y$-intercept of the line? What is the
slope?

{{< fillin
  question="Find an equation of a line parallel to $y=3x+1$ that contains the point $(4,2)$. Write the equation in slope-intercept form."
  answer="y=3x-10"
  answerForm="slope-intercept-form"
  hint="A parallel line has the same slope. Use that slope and the given point in point-slope form."
>}}

{{< fillin
  question="Find an equation of a line parallel to $y=\tfrac{1}{2}x-3$ that contains the point $(6,4)$. Write the equation in slope-intercept form."
  answer="y = \frac{1}{2}x + 1"
  answerForm="slope-intercept-form"
  answerDisplay="$y=\tfrac{1}{2}x+1$"
  hint="A parallel line has the same slope. Use that slope and the given point in point-slope form."
>}}

{{< callout type="info" >}}
  **Find an equation of a line parallel to a given line.**

  1. Find the slope of the given line.
  2. Find the slope of the parallel line.
  3. Identify the point.
  4. Substitute the values into the point-slope form: $y-y_1=m(x-x_1)$.
  5. Write the equation in slope-intercept form.
{{< /callout >}}

## Find an equation of a line perpendicular to a given line

Now, let’s consider perpendicular lines. Suppose we need to find a line
passing through a specific point and which is perpendicular to a given line.
We can use the fact that perpendicular lines have slopes that are negative
reciprocals. We will again use the point-slope equation, like we did with
parallel lines.

This graph shows $y=2x-3$. Now, we want to graph a line perpendicular to this
line and passing through $(-2,1)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −6 to 6, showing the line y = 2x − 3 and the marked point (−2, 1), which is not on the line.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":-3}],"points":[{"at":[-2,1]}]}
{{< /apfigure >}}

We know that perpendicular lines have slopes that are negative reciprocals.
We’ll use the notation $m_{\perp}$ to
represent the slope of a line perpendicular to a line with slope $m$.
(Notice that the subscript $\perp$ looks like the right angles made by two
perpendicular lines.)

$$
\begin{array}{rcl}
y &=& 2x-3 \\[4pt]
m &=& 2 \\[4pt]
m_{\perp} &=& -\tfrac{1}{2}
\end{array}
$$

We now know the perpendicular line will pass through $(-2,1)$ with
$m_{\perp}=-\tfrac{1}{2}$. To graph the line, we will start at $(-2,1)$ and
count out the rise $-1$ and the run $2$. Then we draw the line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid with both axes numbered from −6 to 6, showing the line y = 2x − 3 and a second line perpendicular to it through the marked points (−2, 1) and (0, 0), with a dashed right triangle from (−2, 1) down to (−2, 0) and across to (0, 0).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":-3},{"through":[[-2,1],[0,0]]}],"slopeTriangles":[{"from":[-2,1],"to":[0,0]}],"points":[{"at":[-2,1]},{"at":[0,0]}]}
{{< /apfigure >}}

Do the lines appear perpendicular? Does the second line pass through
$(-2,1)$? We were asked to graph the line; now, let’s see how to do this
algebraically.

We can use either the slope-intercept form or the point-slope form to find an
equation of a line. In this example we know one point, and can find the
slope, so we will use the point-slope form.

**Example.** Find an equation of a line perpendicular to $y=2x-3$ that
contains the point $(-2,1)$. Write the equation in slope-intercept form.

$$
\begin{array}{lrcl}
\text{Find the slope of the given line.} & m &=& 2 \\[4pt]
\text{Find the slope of the perpendicular line.} & m_{\perp} &=& -\tfrac{1}{2} \\[10pt]
\text{Identify the point.} & (x_1,y_1) &=& (-2,1) \\[4pt]
\text{Substitute into the point-slope form.} & y-1 &=& -\tfrac{1}{2}(x-(-2)) \\[10pt]
\text{Simplify.} & y-1 &=& -\tfrac{1}{2}(x+2) \\[10pt]
&&=& -\tfrac{1}{2}x-1 \\[10pt]
\text{Write in slope-intercept form.} & y &=& -\tfrac{1}{2}x
\end{array}
$$

{{< fillin
  question="Find an equation of a line perpendicular to $y=3x+1$ that contains the point $(4,2)$. Write the equation in slope-intercept form."
  answer="y = -\frac{1}{3}x + \frac{10}{3}"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-\tfrac{1}{3}x+\tfrac{10}{3}$"
  hint="The perpendicular slope is the negative reciprocal of $3$. Use it with the point in point-slope form."
>}}

{{< fillin
  question="Find an equation of a line perpendicular to $y=\tfrac{1}{2}x-3$ that contains the point $(6,4)$. Write the equation in slope-intercept form."
  answer="y=-2x+16"
  answerForm="slope-intercept-form"
  hint="The perpendicular slope is the negative reciprocal of $\tfrac{1}{2}$. Use it with the point in point-slope form."
>}}

{{< callout type="info" >}}
  **Find an equation of a line perpendicular to a given line.**

  1. Find the slope of the given line.
  2. Find the slope of the perpendicular line.
  3. Identify the point.
  4. Substitute the values into the point-slope form, $y-y_1=m(x-x_1)$.
  5. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a line perpendicular to $x=5$ that contains
the point $(3,-2)$. Write the equation in slope-intercept form.

Again, since we know one point, the point-slope option seems more promising
than the slope-intercept option. We need the slope to use this form, and we
know the new line will be perpendicular to $x=5$. This line is vertical, so
its perpendicular will be horizontal. This tells us $m_{\perp}=0$.

$$
\begin{array}{lrcl}
\text{Identify the point.} & (x_1,y_1) &=& (3,-2) \\[4pt]
\text{Identify the slope of the perpendicular line.} & m_{\perp} &=& 0 \\[4pt]
\text{Substitute the values.} & y-(-2) &=& 0(x-3) \\[4pt]
\text{Simplify.} & y+2 &=& 0 \\[4pt]
& y &=& -2
\end{array}
$$

Sketch the graph of both lines. On your graph, do the lines appear to be
perpendicular?

{{< fillin
  question="Find an equation of a line that is perpendicular to $x=4$ and contains the point $(4,-5)$. Write the equation in slope-intercept form, or as $x=a$ if the line is vertical."
  answer="y=-5"
  answerForm="slope-intercept-form"
  hint="Decide what kind of line the given line is and what kind of line meets it at a right angle, then use the given point."
>}}

{{< fillin
  question="Find an equation of a line that is perpendicular to $x=2$ and contains the point $(2,-1)$. Write the equation in slope-intercept form, or as $x=a$ if the line is vertical."
  answer="y=-1"
  answerForm="slope-intercept-form"
  hint="Decide what kind of line the given line is and what kind of line meets it at a right angle, then use the given point."
>}}

In the preceding example, we used the point-slope form to find the equation.
We could have looked at this in a different way. We want to find a line that
is perpendicular to $x=5$ that contains the point $(3,-2)$. The first graph
shows us the line $x=5$ and the point $(3,-2)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −8 to 8 on both axes, the x-axis numbered by twos and the y-axis by fours, showing the vertical line x = 5 and the marked point (3, −2).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"xTickStep":2,"yTickStep":4,"lines":[{"x":5}],"points":[{"at":[3,-2]}]}
{{< /apfigure >}}

We know every line perpendicular to a vertical line is horizontal, so we
will sketch the horizontal line through $(3,-2)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from −8 to 8 on both axes, the x-axis numbered by twos and the y-axis by fours, showing the vertical line x = 5 and a horizontal line through the marked points (−2, −2), (0, −2), (3, −2), and (6, −2).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"xTickStep":2,"yTickStep":4,"lines":[{"x":5},{"y":-2}],"points":[{"at":[-2,-2]},{"at":[0,-2]},{"at":[3,-2]},{"at":[6,-2]}]}
{{< /apfigure >}}

Do the lines appear perpendicular? If we look at a few points on this
horizontal line, we notice they all have $y$-coordinates of $-2$. So, the
equation of the line perpendicular to the vertical line $x=5$ is $y=-2$.

**Example.** Find an equation of a line that is perpendicular to $y=-3$ that
contains the point $(-3,5)$. Write the equation in slope-intercept form.

The line $y=-3$ is a horizontal line. Any line perpendicular to it must be
vertical, in the form $x=a$. Since the perpendicular line is vertical and
passes through $(-3,5)$, every point on it has an $x$-coordinate of $-3$.
The equation of the perpendicular line is $x=-3$. You may want to sketch the
lines. Do they appear perpendicular?

{{< fillin
  question="Find an equation of a line that is perpendicular to $y=1$ and contains the point $(-5,1)$. Write the equation in slope-intercept form, or as $x=a$ if the line is vertical."
  answer="x=-5"
  answerForm="slope-intercept-form"
  hint="Decide what kind of line the given line is and what kind of line meets it at a right angle, then use the given point."
>}}

{{< fillin
  question="Find an equation of a line that is perpendicular to $y=-5$ and contains the point $(-4,-5)$. Write the equation in slope-intercept form, or as $x=a$ if the line is vertical."
  answer="x=-4"
  answerForm="slope-intercept-form"
  hint="Decide what kind of line the given line is and what kind of line meets it at a right angle, then use the given point."
>}}

## Key terms

**point-slope form** — the form $y-y_1=m(x-x_1)$ of an equation of a line
with slope $m$ containing the point $(x_1,y_1)$. **parallel lines** — lines
in the same plane that do not intersect and have the same slope.
**perpendicular lines** — lines that intersect at a right angle and whose
slopes are negative reciprocals.

## Practice

### Find an equation of the line given the slope and $y$-intercept

{{< fillin
  question="Find the equation of a line with slope $3$ and $y$-intercept $(0,5)$. Write the equation in slope-intercept form."
  answer="y = 3x + 5"
  answerForm="slope-intercept-form"
  answerDisplay="$y=3x+5$"
  hint="Read $m$ from the slope and $b$ from the $y$-intercept $(0,b)$, then substitute both into $y=mx+b$."
>}}

{{< fillin
  question="Find the equation of a line with slope $\tfrac{1}{5}$ and $y$-intercept $(0,-5)$. Write the equation in slope-intercept form."
  answer="y = \frac{1}{5}x - 5"
  answerForm="slope-intercept-form"
  answerDisplay="$y=\tfrac{1}{5}x-5$"
  hint="Read $m$ from the slope and $b$ from the $y$-intercept $(0,b)$, then substitute both into $y=mx+b$."
>}}

### Find an equation of the line given the slope and a point

{{< fillin
  question="Find the equation of a line with slope $m=\tfrac{5}{8}$ and containing the point $(8,3)$. Write the equation in slope-intercept form."
  answer="y = \frac{5}{8}x - 2"
  answerForm="slope-intercept-form"
  answerDisplay="$y=\tfrac{5}{8}x-2$"
  hint="Substitute the slope and point into $y-y_1=m(x-x_1)$, then solve for $y$."
>}}

{{< fillin
  question="Find the equation of a line with slope $m=-\tfrac{3}{5}$ and containing the point $(10,-5)$. Write the equation in slope-intercept form."
  answer="y = -\frac{3}{5}x + 1"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-\tfrac{3}{5}x+1$"
  hint="Substitute the slope and point into $y-y_1=m(x-x_1)$, then solve for $y$."
>}}

### Find an equation of the line given two points

{{< fillin
  question="Find the equation of a line containing the points $(2,6)$ and $(5,3)$. Write the equation in slope-intercept form."
  answer="y = -x + 8"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-x+8$"
  hint="First use the two points to find the slope, then use either point in point-slope form."
>}}

{{< fillin
  question="Find the equation of a line containing the points $(-3,-4)$ and $(5,-2)$. Write the equation in slope-intercept form."
  answer="y = \frac{1}{4}x - \frac{13}{4}"
  answerForm="slope-intercept-form"
  answerDisplay="$y=\tfrac{1}{4}x-\tfrac{13}{4}$"
  hint="First use the two points to find the slope, then use either point in point-slope form."
>}}

### Find an equation of a line parallel to a given line

{{< fillin
  question="Find an equation of a line parallel to $y=4x+2$ that contains the point $(1,2)$. Write the equation in slope-intercept form."
  answer="y = 4x - 2"
  answerForm="slope-intercept-form"
  answerDisplay="$y=4x-2$"
  hint="A parallel line has the same slope. Use that slope and the given point in point-slope form."
>}}

{{< fillin
  question="Find an equation of a line parallel to the line $y=5$ that contains the point $(2,-2)$. Write the equation in slope-intercept form."
  answer="y = -2"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-2$"
  hint="Find the slope of the given line first. A parallel line has that same slope; use it with the given point in point-slope form."
>}}

### Find an equation of a line perpendicular to a given line

{{< fillin
  question="Find an equation of a line perpendicular to the line $2x-3y=8$ that contains the point $(4,-1)$. Write the equation in slope-intercept form."
  answer="y = -\frac{3}{2}x + 5"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-\tfrac{3}{2}x+5$"
  hint="First solve the given line for $y$ to find its slope. The perpendicular slope is the negative reciprocal of that slope; use it with the point in point-slope form."
>}}

{{< fillin
  question="Find an equation of a line perpendicular to $y=\tfrac{3}{4}x-2$ that contains the point $(-3,4)$. Write the equation in slope-intercept form."
  answer="y = -\frac{4}{3}x"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-\tfrac{4}{3}x$"
  hint="The perpendicular slope is the negative reciprocal of $\tfrac{3}{4}$. Use it with the point in point-slope form."
>}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 3.3: Find the Equation of a Line](https://openstax.org/books/intermediate-algebra-2e/pages/3-3-find-the-equation-of-a-line) by Lynn Marecek, Andrea Honeycutt Mathis, and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the coordinate-plane figures as accessible graphs; omitted the Be Prepared quiz and media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback; added "Write the equation in slope-intercept form" to the exercises whose answer takes that form, with "or as $x=a$ if the line is vertical" where the line could be vertical; dropped a doubled "the" from the paragraph introducing point-slope form; and adapted selected end-of-section exercises into a section-final interactive practice block.</small>
