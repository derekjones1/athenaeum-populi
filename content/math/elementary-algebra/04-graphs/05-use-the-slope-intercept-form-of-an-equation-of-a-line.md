---
title: Use the Slope-Intercept Form of an Equation of a Line
description: >-
  Recognizing the relation between a line's graph and its slope-intercept
  equation $y = mx + b$, identifying slope and $y$-intercept from an equation,
  graphing a line from its slope and intercept, choosing the most convenient
  graphing method, and using slopes to identify parallel and perpendicular
  lines — adapted from OpenStax Elementary Algebra 2e, Section 4.5.
source_section: "4.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Recognize the relation between the graph and the slope-intercept form of an equation of a line
- Identify the slope and $y$-intercept from an equation of a line
- Graph a line using its slope and intercept
- Choose the most convenient method to graph a line
- Graph and interpret applications of slope-intercept
- Use slopes to identify parallel lines
- Use slopes to identify perpendicular lines
{{< /callout >}}

## Recognize the relation between the graph and the slope-intercept form of an equation of a line

We have graphed linear equations by plotting points, using intercepts, recognizing
horizontal and vertical lines, and using the point-slope method. Once we see how an
equation in slope-intercept form and its graph are related, we'll have one more method
we can use to graph lines.

Earlier we graphed the line of the equation $y = \tfrac{1}{2}x + 3$ by plotting points.
Let's find the slope of this line the way we did in the previous section — using two
points from the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line y = one half x plus 3 on a grid from negative 6 to 6 on both axes, passing through the marked points (0, 3), (2, 4), and (4, 5). A dashed run of 2 goes right from (2, 4) to (4, 4), and a dashed rise of 1 goes up from there to (4, 5).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"slope":0.5,"intercept":3,"label":"y = ½x + 3","labelAt":0.2}],"points":[{"at":[0,3],"label":"(0, 3)","labelSide":"se"},{"at":[2,4],"label":"(2, 4)","labelSide":"n"},{"at":[4,5],"label":"(4, 5)","labelSide":"nw"}],"segments":[{"from":[2,4],"to":[4,4],"dashed":true,"label":"Run = 2","labelSide":"s"},{"from":[4,4],"to":[4,5],"dashed":true,"label":"Rise = 1","labelSide":"e"}]}
{{< /apfigure >}}

The rise is $1$ and the run is $2$. Substituting into the slope formula:

$$m = \frac{\text{rise}}{\text{run}} = \frac{1}{2}$$

What is the $y$-intercept of the line? The $y$-intercept is where the line crosses the
$y$-axis, so the $y$-intercept is $(0, 3)$. The equation of this line is
$y = \tfrac{1}{2}x + 3$. Notice that the line has slope $m = \tfrac{1}{2}$ and
$y$-intercept $(0, 3)$.

When a linear equation is solved for $y$, the coefficient of the $x$ term is the slope
and the constant term is the $y$-coordinate of the $y$-intercept. We say that the
equation $y = \tfrac{1}{2}x + 3$ is in **slope-intercept form**.

{{< callout type="info" >}}
  **Slope-intercept form of an equation of a line.** The slope-intercept form of an
  equation of a line with slope $m$ and $y$-intercept $(0, b)$ is
  $$y = mx + b$$
  Sometimes the slope-intercept form is called the "$y$-form."
{{< /callout >}}

**Example.** Use the graph to find the slope and $y$-intercept of the line
$y = 2x + 1$, and compare these values to the equation $y = mx + b$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The line y = 2x + 1 on a grid from negative 4 to 4 on both axes, passing through the marked points (0, 1) and (1, 3).","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"tickLabels":true,"lines":[{"slope":2,"intercept":1}],"points":[{"at":[0,1],"label":"(0, 1)","labelSide":"e"},{"at":[1,3],"label":"(1, 3)","labelSide":"e"}]}
{{< /apfigure >}}

To find the slope of the line, we choose two points on the line, $(0, 1)$ and
$(1, 3)$. The rise is $2$ and the run is $1$, so:

$$m = \frac{\text{rise}}{\text{run}} = \frac{2}{1} = 2$$

The $y$-intercept is the point $(0, 1)$. We found slope $m = 2$ and $y$-intercept
$(0, 1)$, matching the equation $y = 2x + 1$: the slope is the same as the
coefficient of $x$, and the $y$-coordinate of the $y$-intercept is the same as the
constant term.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line on a grid from negative 6 to 6 on both axes, rising from lower left to upper right and passing through the points (0, −1) and (6, 3).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"through":[[0,-1],[6,3]]}]}
{{< /apfigure >}}

{{< fillin
  question="Use the graph above to find the slope and $y$-intercept of the line $y = \tfrac{2}{3}x - 1$. What is the slope? Enter it as a fraction."
  answer="\frac{2}{3}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{2}{3}$"
  hint="Find two points where the line crosses grid corners, then count the rise and the run from one to the other."
>}}

## Identify the slope and $y$-intercept from an equation of a line

When we are given an equation in slope-intercept form, we can use the $y$-intercept as
a point, and then count out the slope from there. Let's practice finding the values of
the slope and $y$-intercept from the equation of a line.

**Example.** Identify the slope and $y$-intercept of the line with equation
$y = -3x + 5$.

We compare the equation to the slope-intercept form $y = mx + b$: the slope is
$m = -3$, and the $y$-intercept is $(0, 5)$.

{{< fillin
  question="Identify the slope of the line $y = \tfrac{2}{5}x - 1$. Enter it as a fraction."
  answer="\frac{2}{5}"
  answerForm="fraction lowest-terms"
  answerDisplay="$\tfrac{2}{5}$"
  hint="Compare the equation to y = mx + b — the slope is the coefficient of x."
>}}

When an equation of a line is not given in slope-intercept form, our first step will
be to solve the equation for $y$.

**Example.** Identify the slope and $y$-intercept of the line with equation
$x + 2y = 6$.

This equation is not in slope-intercept form. To compare it to the slope-intercept
form, we first solve the equation for $y$:

$$
\begin{aligned}
x + 2y &= 6 \\[4pt]
2y &= -x + 6 \\[4pt]
\frac{2y}{2} &= \frac{-x + 6}{2} \\[4pt]
y &= -\tfrac{1}{2}x + 3
\end{aligned}
$$

Now the equation is in slope-intercept form $y = mx + b$, so we can identify the
slope, $m = -\tfrac{1}{2}$, and the $y$-intercept, $(0, 3)$.

{{< fillin
  question="Identify the slope of the line $x + 4y = 8$. Enter it as a fraction."
  answer="-\frac{1}{4}"
  answerForm="fraction lowest-terms"
  answerDisplay="$-\tfrac{1}{4}$"
  hint="Subtract x from both sides, then divide every term by 4 to solve for y."
>}}

## Graph a line using its slope and intercept

Now that we know how to find the slope and $y$-intercept of a line from its equation,
we can graph the line by plotting the $y$-intercept and then using the slope to find
another point.

{{< callout type="info" >}}
  **Graph a line using its slope and $y$-intercept.**

  1. Find the slope-intercept form of the equation of the line.
  2. Identify the slope and $y$-intercept.
  3. Plot the $y$-intercept.
  4. Use the slope formula $m = \tfrac{\text{rise}}{\text{run}}$ to identify the
     rise and the run.
  5. Starting at the $y$-intercept, count out the rise and run to mark the second
     point.
  6. Connect the two points with a line.
{{< /callout >}}

**Example.** Graph the line of the equation $y = 4x - 2$ using its slope and
$y$-intercept.

The equation is already in slope-intercept form: $y = mx + b$, so $m = 4$ and the
$y$-intercept is $(0, -2)$. We plot $(0, -2)$. The slope is $m = 4 = \tfrac{4}{1}$, so
the rise is $4$ and the run is $1$. Starting at $(0, -2)$, we count up $4$ and right
$1$ to mark the second point, $(1, 2)$, then connect the two points with a line.

To check our work, we can find another point on the line and make sure it is a
solution of the equation. Counting up $4$ and right $1$ once more, from $(1, 2)$, gives
the point $(2, 6)$. Substituting it into $y = 4x - 2$: $6 \stackrel{?}{=} 4(2) - 2$, so
$6 = 6$. ✓

{{< multiplechoice
  question="Which graph shows $y = -x - 3$?"
  mode="graph"
  answerIndex="2"
  hint="Find where the line crosses the $y$-axis first, then check whether it rises or falls — a negative slope falls from left to right."
>}}
{"ariaLabel":"A line rising from lower left to upper right, crossing the y-axis three units below the origin.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":1,"intercept":-3}]}
===OPT===
{"ariaLabel":"A steep line falling from upper left to lower right, crossing the y-axis one unit below the origin.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":-3,"intercept":-1}]}
===OPT===
{"ariaLabel":"A line falling from upper left to lower right, crossing the y-axis three units below the origin.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":-1,"intercept":-3}]}
{{< /multiplechoice >}}

## Choose the most convenient method to graph a line

Now that we have seen several methods to graph lines, how do we know which method to
use for a given equation? While we could plot points, use the slope-intercept form, or
find the intercepts for *any* equation, recognizing the most convenient way to graph a
certain type of equation makes our work easier. Generally, plotting points is not the
most efficient way to graph a line.

Here are six equations and the method used to graph each of them:

| Equation | Method |
| :--- | :--- |
| $x = 2$ | Vertical line |
| $y = 4$ | Horizontal line |
| $-x + 2y = 6$ | Intercepts |
| $4x - 3y = 12$ | Intercepts |
| $y = 4x - 2$ | Slope-intercept |
| $y = -x + 4$ | Slope-intercept |

Equations with just one variable have graphs that are vertical or horizontal lines. If
both $x$ and $y$ are on the same side of the equation — of the form $Ax + By = C$ — we
substitute $y = 0$ to find the $x$-intercept and $x = 0$ to find the $y$-intercept, and
then find a third point. Equations already written in slope-intercept form are graphed
fastest by identifying the slope and $y$-intercept directly.

{{< callout type="info" >}}
  **Strategy for choosing the most convenient method to graph a line.** Consider the
  form of the equation.

  - If it only has one variable, it is a vertical or horizontal line.
    - $x = a$ is a vertical line passing through the $x$-axis at $a$.
    - $y = b$ is a horizontal line passing through the $y$-axis at $b$.
  - If $y$ is isolated on one side of the equation, in the form $y = mx + b$, graph
    by using the slope and $y$-intercept.
  - If the equation is of the form $Ax + By = C$, find the intercepts — the $x$- and
    $y$-intercepts, and a third point, then graph.
{{< /callout >}}

**Example.** Determine the most convenient method to graph each line: (a) $y = -6$
(b) $5x - 3y = 15$ (c) $x = 7$ (d) $y = \tfrac{2}{5}x - 1$.

(a) This equation has only one variable, $y$. Its graph is a horizontal line crossing
the $y$-axis at $-6$.

(b) This equation is of the form $Ax + By = C$. The easiest way to graph it will be to
find the intercepts and one more point.

(c) There is only one variable, $x$. The graph is a vertical line crossing the
$x$-axis at $7$.

(d) Since this equation is in $y = mx + b$ form, it will be easiest to graph this
line by using the slope and $y$-intercept.

{{< multiplechoice
  question="Which method is most convenient for graphing the line $y = \tfrac{1}{5}x - 4$?"
  hint="Look at which variables the equation has and which side each is on, then match that form to the strategy above."
  answer="slope-intercept"
>}}
vertical line
horizontal line
slope-intercept
intercepts
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which method is most convenient for graphing the line $4x - 3y = -1$?"
  hint="Look at which variables the equation has and which side each is on, then match that form to the strategy above."
  answer="intercepts"
>}}
intercepts
vertical line
slope-intercept
horizontal line
{{< /multiplechoice >}}

## Graph and interpret applications of slope-intercept

Many real-world applications are modeled by linear equations. Usually when a linear
equation models a real-world situation, different letters are used for the variables
instead of $x$ and $y$ — the variable names remind us of what quantities are being
measured.

**Example.** The equation $F = \tfrac{9}{5}C + 32$ is used to convert temperatures,
$C$, on the Celsius scale to temperatures, $F$, on the Fahrenheit scale.

(a) Find the Fahrenheit temperature for a Celsius temperature of $0$.

(b) Find the Fahrenheit temperature for a Celsius temperature of $20$.

(c) Interpret the slope and $F$-intercept of the equation.

(d) Graph the equation.

(a) Find $F$ when $C = 0$: $F = \tfrac{9}{5}(0) + 32 = 32$.

(b) Find $F$ when $C = 20$: $F = \tfrac{9}{5}(20) + 32 = 36 + 32 = 68$.

(c) Even though this equation uses $F$ and $C$, it is still in slope-intercept form.
Comparing $F = mC + b$ to $F = \tfrac{9}{5}C + 32$: the slope, $\tfrac{9}{5}$, means
that the Fahrenheit temperature increases $9$ degrees when the Celsius temperature
increases $5$ degrees. The $F$-intercept means that when the temperature is $0^\circ$ on
the Celsius scale, it is $32^\circ$ on the Fahrenheit scale.

(d) To graph the equation we start at the $F$-intercept $(0, 32)$, then count out the
rise of $9$ and the run of $5$ to get a second point.

**Example.** Stella has a home business selling gourmet pizzas. The equation
$C = 4p + 25$ models the relation between her weekly cost, $C$, in dollars, and the
number of pizzas, $p$, that she sells.

(a) Find Stella's cost for a week when she sells no pizzas: $C = 4(0) + 25 = 25$. Her
fixed cost is $\text{\textdollar}25$ when she sells no pizzas.

(b) Find the cost for a week when she sells $15$ pizzas: $C = 4(15) + 25 = 85$. Her
costs are $\text{\textdollar}85$ when she sells $15$ pizzas.

(c) Interpret the slope and $C$-intercept: comparing $C = mp + b$ to $C = 4p + 25$, the
slope, $4$, means that the cost increases by $\text{\textdollar}4$ for each pizza
Stella sells. The $C$-intercept means that even when Stella sells no pizzas, her costs
for the week are $\text{\textdollar}25$.

(d) To graph the equation, start at the $C$-intercept $(0, 25)$, then count out the
rise of $4$ and the run of $1$ to get a second point.

{{< fillin
  question="Sam drives a delivery van. The equation $C = 0.5m + 60$ models the relation between his weekly cost, $C$, in dollars, and the number of miles, $m$, that he drives. Find Sam's cost for a week when he drives $250$ miles. Enter the amount in dollars."
  answer="185"
  answerForm="decimal"
  answerDisplay="\$185"
  hint="Substitute $m = 250$ into $C = 0.5m + 60$ and simplify."
>}}

## Use slopes to identify parallel lines

The slope of a line indicates how steep the line is and whether it rises or falls as
we read it from left to right. Two lines that have the same slope are called
**parallel lines**. Parallel lines never intersect.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two parallel lines on a grid from negative 8 to 8 on both axes. One passes through (−5, 1), (0, 3), and (5, 5); the other passes through (−5, −4), (0, −2), and (5, 0).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"lines":[{"slope":0.4,"intercept":3},{"slope":0.4,"intercept":-2}]}
{{< /apfigure >}}

Verify that both lines have the same slope, $m = \tfrac{2}{5}$, and different
$y$-intercepts.

We say this more formally in terms of the rectangular coordinate system: two lines
that have the same slope and different $y$-intercepts are called parallel lines.

{{< callout type="info" >}}
  **Parallel lines.** Parallel lines are lines in the same plane that do not
  intersect.

  - Parallel lines have the same slope and different $y$-intercepts.
  - If $m_1$ and $m_2$ are the slopes of two parallel lines, then $m_1 = m_2$.
  - Parallel vertical lines have different $x$-intercepts.
{{< /callout >}}

What about vertical lines? The slope of a vertical line is undefined, so vertical
lines don't fit the definition above. We say that vertical lines with different
$x$-intercepts are parallel.

Since parallel lines have the same slope and different $y$-intercepts, we can look at
the slope-intercept form of the equations of two lines and decide whether the lines
are parallel — without graphing them.

**Example.** Use slopes and $y$-intercepts to determine if the lines $3x - 2y = 6$ and
$y = \tfrac{3}{2}x + 1$ are parallel.

We solve the first equation for $y$:

$$
\begin{aligned}
3x - 2y &= 6 \\[4pt]
-2y &= -3x + 6 \\[4pt]
\frac{-2y}{-2} &= \frac{-3x + 6}{-2} \\[4pt]
y &= \tfrac{3}{2}x - 3
\end{aligned}
$$

The second equation, $y = \tfrac{3}{2}x + 1$, is already in slope-intercept form. Both
lines have slope $m = \tfrac{3}{2}$. The first line has $y$-intercept $(0, -3)$ and the
second has $y$-intercept $(0, 1)$. The lines have the same slope and different
$y$-intercepts, so they are parallel.

**Example.** Use slopes and $y$-intercepts to determine if the lines $y = -4$ and
$y = 3$ are parallel.

Since there is no $x$-term, we write each as $y = 0x - 4$ and $y = 0x + 3$. Both lines
have slope $m = 0$; the $y$-intercepts are $(0, -4)$ and $(0, 3)$. The lines have the
same slope and different $y$-intercepts, so they are parallel. (You may recognize
these right away as horizontal lines, which are always parallel to each other unless
they are the same line.)

**Example.** Use slopes and $y$-intercepts to determine if the lines $x = -2$ and
$x = -5$ are parallel.

Since there is no $y$, these equations cannot be put in slope-intercept form. But we
recognize them as equations of vertical lines, with $x$-intercepts $-2$ and $-5$.
Since their $x$-intercepts are different, the vertical lines are parallel.

**Example.** Use slopes and $y$-intercepts to determine if the lines $y = 2x - 3$ and
$-6x + 3y = -9$ are parallel.

The first equation is already in slope-intercept form: $y = 2x - 3$. We solve the
second equation for $y$:

$$
\begin{aligned}
-6x + 3y &= -9 \\[4pt]
3y &= 6x - 9 \\[4pt]
\frac{3y}{3} &= \frac{6x - 9}{3} \\[4pt]
y &= 2x - 3
\end{aligned}
$$

The lines have the same slope, but they also have the same $y$-intercept, $(0, -3)$.
Their equations represent the same line — they are not parallel; they are the same
line.

{{< multiplechoice
  question="Use slopes and y-intercepts to determine whether the lines $y = -\tfrac{1}{2}x - 1$ and $x + 2y = 2$ are parallel, perpendicular, or neither."
  hint="Solve the second equation for y and compare its slope and y-intercept to the first equation's."
  answer="parallel"
>}}
parallel
perpendicular
neither
{{< /multiplechoice >}}

{{< multiplechoice
  question="Use slopes and y-intercepts to determine whether the lines $y = 8$ and $y = -6$ are parallel, perpendicular, or neither."
  hint="Write each equation in the form $y = mx + b$ (with $0x$ where there is no $x$-term), then compare the slopes and the $y$-intercepts."
  answer="parallel"
>}}
parallel
neither
perpendicular
{{< /multiplechoice >}}

## Use slopes to identify perpendicular lines

Let's look at the lines whose equations are $y = \tfrac{1}{4}x - 1$ and
$y = -4x + 2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two lines on a grid from negative 8 to 8 on both axes, crossing at a right angle. The line y = −4x + 2 falls steeply through (0, 2) and (1, −2); the line y = one fourth x minus 1 rises gently through (0, −1) and (4, 0).","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"lines":[{"slope":-4,"intercept":2,"label":"y = −4x + 2","labelAt":0.1},{"slope":0.25,"intercept":-1,"label":"y = ¼x − 1","labelAt":0.2}]}
{{< /apfigure >}}

These lines lie in the same plane and intersect in right angles. We call these lines
**perpendicular**.

As we read from left to right, the line $y = \tfrac{1}{4}x - 1$ rises, so its slope is
positive. The line $y = -4x + 2$ drops from left to right, so it has a negative slope.
Does it make sense that the slopes of two perpendicular lines have opposite signs?

The slope of the first line, $m_1 = \tfrac{1}{4}$, and the slope of the second line,
$m_2 = -4$, are **negative reciprocals** of each other. If we multiply them, their
product is $-1$:

$$m_1 \cdot m_2 = \frac{1}{4}(-4) = -1$$

This is always true for perpendicular lines.

{{< callout type="info" >}}
  **Perpendicular lines.** Perpendicular lines are lines in the same plane that form
  a right angle.

  If $m_1$ and $m_2$ are the slopes of two perpendicular lines, then
  $$m_1 \cdot m_2 = -1 \qquad \text{and} \qquad m_1 = \frac{-1}{m_2}$$
  Vertical lines and horizontal lines are always perpendicular to each other.
{{< /callout >}}

We find the slope-intercept form of each equation, and then check whether the
product of the slopes is $-1$. Perpendicular lines may have the same $y$-intercepts.

**Example.** Use slopes to determine if the lines $y = -5x - 4$ and $x - 5y = 5$ are
perpendicular.

The first equation is already in slope-intercept form: $m_1 = -5$. We solve the
second equation for $y$:

$$
\begin{aligned}
x - 5y &= 5 \\[4pt]
-5y &= -x + 5 \\[4pt]
\frac{-5y}{-5} &= \frac{-x + 5}{-5} \\[4pt]
y &= \tfrac{1}{5}x - 1
\end{aligned}
$$

so $m_2 = \tfrac{1}{5}$. The slopes are negative reciprocals of each other, so the
lines are perpendicular. We check: $m_1 \cdot m_2 = -5 \left(\tfrac{1}{5}\right) = -1$. ✓

**Example.** Use slopes to determine if the lines $7x + 2y = 3$ and $2x + 7y = 5$ are
perpendicular.

Solving both equations for $y$: $y = -\tfrac{7}{2}x + \tfrac{3}{2}$ gives
$m_1 = -\tfrac{7}{2}$, and $y = -\tfrac{2}{7}x + \tfrac{5}{7}$ gives $m_2 = -\tfrac{2}{7}$.
The slopes are reciprocals of each other, but they have the same sign. Since they are
not negative reciprocals, the lines are not perpendicular.

{{< multiplechoice
  question="Use slopes to determine whether the lines $y = -3x + 2$ and $x - 3y = 4$ are parallel, perpendicular, or neither."
  hint="Solve the second equation for y, then multiply the two slopes together and see whether the product is −1."
  answer="perpendicular"
>}}
neither
perpendicular
parallel
{{< /multiplechoice >}}

{{< multiplechoice
  question="Use slopes to determine whether the lines $5x + 4y = 1$ and $4x + 5y = 3$ are parallel, perpendicular, or neither."
  hint="Solve both equations for $y$. Compare the slopes: parallel lines have equal slopes, and perpendicular lines have slopes whose product is $-1$."
  answer="neither"
>}}
neither
parallel
perpendicular
{{< /multiplechoice >}}

## Key terms

**slope-intercept form** — the form $y = mx + b$ of an equation of a line, where $m$
is the slope and $(0, b)$ is the $y$-intercept. **parallel lines** — lines in the same
plane that do not intersect; they have the same slope and different $y$-intercepts (or,
for vertical lines, different $x$-intercepts). **perpendicular lines** — lines in the
same plane that form a right angle; the product of their slopes is $-1$, so their
slopes are negative reciprocals of each other.

## Practice

### Recognize the relation between the graph and the slope-intercept form of an equation of a line

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A coordinate grid with both axes numbered from negative six to six, showing the line y = 4x - 2 through (0, -2) and (1, 2).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":4,"intercept":-2}]}'>
<svg role="img" aria-label="A coordinate grid with both axes numbered from negative six to six, showing the line y = 4x - 2 through (0, -2) and (1, 2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="266" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="266" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="266" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="266" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="143" x2="46" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="143" x2="86" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="143" x2="126" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="143" x2="166" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="143" x2="186" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="143" x2="206" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="143" x2="246" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="126" x2="149" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="130" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="126.9" y1="262.3" x2="185.1" y2="29.7" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="187.5,20 189.9,30.9 180.2,28.5" fill="currentColor"/>
  <polygon points="124.5,272 122.1,261.1 131.8,263.5" fill="currentColor"/>
</svg>
</div>

{{< multiplechoice
  question="Use the graph above to find the slope and $y$-intercept of the line $y = 4x - 2$. Which statement is correct?"
  answer="The slope is $4$ and the $y$-intercept is $(0, -2)$."
  hint="Pick two points where the line crosses grid corners and count the rise and the run between them; then read where the line crosses the $y$-axis."
>}}
The slope is $-4$ and the $y$-intercept is $(0, 2)$.
The slope is $4$ and the $y$-intercept is $(0, -2)$.
The slope is $2$ and the $y$-intercept is $(0, 4)$.
{{< /multiplechoice >}}

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A coordinate grid with both axes numbered from negative six to six, showing the line y = -3x + 1 through (0, 1) and (1, -2).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":-3,"intercept":1}]}'>
<svg role="img" aria-label="A coordinate grid with both axes numbered from negative six to six, showing the line y = -3x + 1 through (0, 1) and (1, -2)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="266" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="266" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="266" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="266" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="143" x2="46" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="143" x2="86" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="143" x2="126" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="143" x2="166" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="143" x2="186" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="143" x2="206" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="143" x2="246" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="126" x2="149" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="130" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="113.8" y1="29.5" x2="191.5" y2="262.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="194.7,272 186.8,264.1 196.2,260.9" fill="currentColor"/>
  <polygon points="110.7,20 118.6,27.9 109.1,31.1" fill="currentColor"/>
</svg>
</div>

{{< multiplechoice
  question="Use the graph above to find the slope and $y$-intercept of the line $y = -3x + 1$. Which statement is correct?"
  answer="The slope is $-3$ and the $y$-intercept is $(0, 1)$."
  hint="Pick two points where the line crosses grid corners and count the rise and the run between them; then read where the line crosses the $y$-axis."
>}}
The slope is $-1$ and the $y$-intercept is $(0, 3)$.
The slope is $3$ and the $y$-intercept is $(0, -1)$.
The slope is $-3$ and the $y$-intercept is $(0, 1)$.
{{< /multiplechoice >}}

### Identify the slope and $y$-intercept from an equation of a line

{{< fillin
  question="Identify the slope of the line $y = -9x + 7$."
  answer="-9"
  answerForm="decimal"
  answerDisplay="$-9$"
  hint="Compare the equation with $y = mx + b$; the coefficient of $x$ is $m$."
>}}

{{< fillin
  question="Identify the $y$-intercept of the line $y = -9x + 7$. Give the intercept as an ordered pair."
  answer="(0,7)"
  answerForm="decimal"
  answerDisplay="$(0, 7)$"
  hint="In $y = mx + b$, the line crosses the $y$-axis at $(0, b)$."
>}}

Now repeat the identification directly from a second equation in slope-intercept form.

{{< fillin
  question="Identify the slope of the line $y = 4x - 10$."
  answer="4"
  answerForm="decimal"
  answerDisplay="$4$"
  hint="Compare the equation with $y = mx + b$; the coefficient of $x$ is the slope."
>}}

{{< fillin
  question="Identify the $y$-intercept of the line $y = 4x - 10$. Give the intercept as an ordered pair."
  answer="(0,-10)"
  answerForm="decimal"
  answerDisplay="$(0, -10)$"
  hint="Read the constant term as $b$, then write the intercept in the form $(0, b)$."
>}}

### Graph a line using its slope and intercept

{{< graphplot
  question="Graph the line $y = x + 4$ using its slope and $y$-intercept by placing three points on it."
  answerDisplay="$y = x + 4$"
  ariaLabel="A blank coordinate grid from negative ten to ten on both axes."
  hint="Plot the $y$-intercept first, then write the slope as $\tfrac{\text{rise}}{\text{run}}$ and count it out from there to mark the next point."
>}}
{"answer":{"slope":1,"intercept":4,"plotPoints":3},"grid":{"xMin":-10,"xMax":10,"yMin":-10,"yMax":10}}
{{< /graphplot >}}

{{< graphplot
  question="Graph the line $y = 2x - 3$ using its slope and $y$-intercept by placing three points on it."
  answerDisplay="$y = 2x - 3$"
  ariaLabel="A blank coordinate grid from negative ten to ten on both axes."
  hint="Plot the $y$-intercept first, then write the slope as $\tfrac{\text{rise}}{\text{run}}$ and count it out from there to mark the next point."
>}}
{"answer":{"slope":2,"intercept":-3,"plotPoints":3},"grid":{"xMin":-10,"xMax":10,"yMin":-10,"yMax":10}}
{{< /graphplot >}}

### Choose the most convenient method to graph a line

{{< multiplechoice
  question="Identify the most convenient method to graph the line $y = 4$."
  answer="Recognize it as a horizontal line."
  hint="Count the variables in the equation, then use the strategy for choosing the most convenient method."
>}}
Recognize it as a horizontal line.
Recognize it as a vertical line.
Use the slope-intercept form.
Use the intercepts.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Identify the most convenient method to graph the line $x = -3$."
  answer="Recognize it as a vertical line."
  hint="Count the variables in the equation, then use the strategy for choosing the most convenient method."
>}}
Recognize it as a vertical line.
Use the slope-intercept form.
Recognize it as a horizontal line.
Use the intercepts.
{{< /multiplechoice >}}

### Graph and interpret applications of slope-intercept

Janelle is planning to rent a car while on vacation. The equation
$C = 0.32m + 15$ models the relation between the cost per day, $C$, in dollars,
and the number of miles, $m$, she drives in one day.

{{< fillin
  question="Find the cost if Janelle drives the car $0$ miles one day. Enter the amount in dollars."
  answer="15"
  answerForm="decimal"
  answerDisplay="\$15"
  hint="Substitute $m = 0$ into $C = 0.32m + 15$."
>}}

{{< fillin
  question="Find the cost on a day when Janelle drives the car $400$ miles. Enter the amount in dollars."
  answer="143"
  answerForm="decimal"
  answerDisplay="\$143"
  hint="Substitute $m = 400$ into $C = 0.32m + 15$ and simplify."
>}}

Now interpret the equation and graph it.

{{< multiplechoice
  question="Interpret the slope and $C$-intercept of $C = 0.32m + 15$."
  answer="The cost increases by \$0.32 when the miles driven increase by $1$; at $0$ miles, the cost is \$15."
  hint="Compare the equation with $y = mx + b$, then read each part in the units of the problem, as in the Stella example."
>}}
The cost increases by \$15 when the miles driven increase by $1$; at $0$ miles, the cost is \$0.32.
The cost increases by \$0.32 when the miles driven increase by $15$; at $0$ miles, the cost is \$1.
The cost increases by \$0.32 when the miles driven increase by $1$; at $0$ miles, the cost is \$15.
{{< /multiplechoice >}}

{{< graphplot
  question="Graph the equation $C = 0.32m + 15$ by placing three points on the line."
  answerDisplay="$C = 0.32m + 15$"
  ariaLabel="A blank coordinate grid with miles m from negative one to five hundred on the horizontal axis and cost C from negative one to one hundred eighty dollars on the vertical axis."
  hint="Plot the points you found for $0$ miles and $400$ miles, then substitute one more number of miles to find a third point."
>}}
{"answer":{"slope":0.32,"intercept":15,"plotPoints":3},"grid":{"xMin":-1,"xMax":500,"yMin":-1,"yMax":180}}
{{< /graphplot >}}

### Use slopes to identify parallel lines

{{< multiplechoice
  question="Use slopes and $y$-intercepts to determine whether the lines $y = \tfrac{2}{3}x - 1$ and $2x - 3y = -2$ are parallel."
  answer="parallel"
  hint="Solve the second equation for $y$, then compare both slopes and $y$-intercepts."
>}}
not parallel
parallel
{{< /multiplechoice >}}

{{< multiplechoice
  question="Use slopes and $y$-intercepts to determine whether the lines $6x - 3y = 9$ and $2x - y = 3$ are parallel."
  answer="not parallel"
  hint="Solve both equations for $y$ and check whether they have the same slope but different $y$-intercepts."
>}}
parallel
not parallel
{{< /multiplechoice >}}

### Use slopes to identify perpendicular lines

{{< multiplechoice
  question="Use slopes to determine whether the lines $x - 4y = 8$ and $4x + y = 2$ are perpendicular."
  answer="perpendicular"
  hint="Solve each equation for $y$ and multiply the slopes; perpendicular slopes have product $-1$."
>}}
not perpendicular
perpendicular
{{< /multiplechoice >}}

{{< multiplechoice
  question="Use slopes to determine whether the lines $3x - 4y = 8$ and $4x - 3y = 6$ are perpendicular."
  answer="not perpendicular"
  hint="Solve each equation for $y$ and check whether the slopes are negative reciprocals."
>}}
perpendicular
not perpendicular
{{< /multiplechoice >}}


---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.5: Use the Slope-Intercept Form of an Equation of a Line](https://openstax.org/books/elementary-algebra-2e/pages/4-5-use-the-slope-intercept-form-of-an-equation-of-a-line) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the rise-and-run, parallel-lines, and perpendicular-lines graphs, the graphs for the first worked example and the first Try It, and two exercise graphs as accessible graphics; condensed the worked examples and tables; omitted the Be Prepared quiz, Media links, Self Check checklist, and remaining end-of-section exercises; converted the practice problems ("Try Its") into interactive exercises with instant feedback, asking for one part of each multi-part Try It; and adapted selected end-of-section exercises, including graphing exercises, into the section-final interactive Practice block.</small>
