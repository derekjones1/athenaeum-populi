---
title: Graphs of Linear Inequalities
description: >-
  Verifying solutions to a linear inequality in two variables, recognizing
  the relation between the solutions of an inequality and its graph, and
  graphing linear inequalities — adapted from OpenStax Elementary Algebra
  2e, Section 4.7.
source_section: "4.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Verify solutions to an inequality in two variables
- Recognize the relation between the solutions of an inequality and its graph
- Graph linear inequalities
{{< /callout >}}

We have learned how to solve inequalities in one variable. Now we look at
inequalities in two variables, which have many applications. If you ran a
business, for example, you would want your revenue to be greater than your
costs — so that your business would make a profit.

## Verify solutions to an inequality in two variables

{{< callout type="info" >}}
  **Linear inequality.** A **linear inequality** is an inequality that can be
  written in one of the following forms:
  $$Ax + By > C \qquad Ax + By \geq C \qquad Ax + By < C \qquad Ax + By \leq C$$
  where $A$ and $B$ are not both zero.
{{< /callout >}}

An inequality in one variable, like $x > 3$, has many solutions — any number
greater than $3$ — shown on the number line by shading to the right of $3$
with a parenthesis at $3$. Similarly, an inequality in two variables has
many solutions: any ordered pair $(x, y)$ that makes the inequality true when
substituted in is a **solution of the inequality**.

{{< callout type="info" >}}
  **Solution of a linear inequality.** An ordered pair $(x, y)$ is a
  **solution of a linear inequality** if the inequality is true when we
  substitute the values of $x$ and $y$.
{{< /callout >}}

**Example.** Determine whether each ordered pair is a solution to the
inequality $y > x + 4$: (a) $(0, 0)$ (b) $(1, 6)$ (c) $(2, 6)$
(d) $(-5, -15)$ (e) $(-8, 12)$.

(a) Substituting $x = 0, y = 0$: is $0 > 0 + 4$? Since $0 \not> 4$, $(0, 0)$
is not a solution.

(b) Substituting $x = 1, y = 6$: is $6 > 1 + 4$? Since $6 > 5$ is true,
$(1, 6)$ is a solution.

(c) Substituting $x = 2, y = 6$: is $6 > 2 + 4$? Since $6 \not> 6$, $(2, 6)$
is not a solution.

(d) Substituting $x = -5, y = -15$: is $-15 > -5 + 4$? Since
$-15 \not> -1$, $(-5, -15)$ is not a solution.

(e) Substituting $x = -8, y = 12$: is $12 > -8 + 4$? Since $12 > -4$ is
true, $(-8, 12)$ is a solution.

{{< multiplechoice
  question="Is the ordered pair $(4, 9)$ a solution to the inequality $y > x - 3$?"
  hint="Substitute $x = 4$ and $y = 9$ into $y > x - 3$ and check whether the resulting statement is true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the ordered pair $(-2, 1)$ a solution to the inequality $y > x - 3$?"
  hint="Substitute $x = -2$ and $y = 1$ into $y > x - 3$ and check whether the resulting statement is true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Recognize the relation between the solutions of an inequality and its graph

Just as the point $x = 3$ separates the number line into the numbers less
than $3$ and the numbers greater than $3$, a line $y = x + 4$ separates the
plane into two regions. On one side of the line are the points with
$y < x + 4$; on the other side are the points with $y > x + 4$. We call the
line $y = x + 4$ a **boundary line**.

{{< callout type="info" >}}
  **Boundary line.** The line with equation $Ax + By = C$ is the
  **boundary line** that separates the region where $Ax + By > C$ from the
  region where $Ax + By < C$.
{{< /callout >}}

For an inequality in one variable, the endpoint is shown with a parenthesis
(not included) or a bracket (included). Similarly, for an inequality in two
variables, the boundary line is drawn solid or dashed to show whether it is
included in the solution.

{{< callout type="info" >}}
  **Boundary lines for linear inequalities**

  | Inequality | Boundary line |
  | :--- | :--- |
  | $Ax + By < C$ or $Ax + By > C$ | not included — dashed |
  | $Ax + By \leq C$ or $Ax + By \geq C$ | included — solid |
{{< /callout >}}

Points on one side of the boundary line $y = x + 4$ are solutions to
$y > x + 4$, and points on the other side are solutions to $y < x + 4$.
Any point on the boundary line itself, where $y = x + 4$, is not a solution
to $y > x + 4$, so the boundary line is not part of the solution — we draw
it dashed. The shaded region shows the solutions to $y > x + 4$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes. The dashed boundary line y equals x plus 4 passes through (negative 4, 0) and (0, 4). The region above and to the left of the line is shaded and labeled y greater than x plus 4; the region below and to the right is labeled y less than x plus 4.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":1,"intercept":4},"side":[-6,4],"dashed":true}],"texts":[{"at":[-5,6],"text":"y > x + 4"},{"at":[4,-3],"text":"y < x + 4"}]}
{{< /apfigure >}}

**Example.** The boundary line shown is $y = 2x - 1$, drawn as a solid line.
Write the inequality shown by the graph.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes. The solid boundary line y equals 2x minus 1 passes through (0, negative 1) and (2, 3). The region above and to the left of the line, which contains (0, 0), is shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":2,"intercept":-1},"side":[0,0]}]}
{{< /apfigure >}}

We test the point $(0, 0)$: is $0 > 2(0) - 1$, or is $0 < 2(0) - 1$?
Since $0 > -1$ is true, $(0, 0)$ is on the side of the line where
$y > 2x - 1$ — the shaded side. Since the boundary line is solid, the
inequality includes the equal sign, so the graph shows $y \geq 2x - 1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes. The solid boundary line y equals negative 2x plus 3 passes through (0, 3) and (2, negative 1). The region above and to the right of the line is shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-2,"intercept":3},"side":[4,4]}]}
{{< /apfigure >}}

{{< fillin
  question="Write the inequality shown by the graph with the boundary line $y = -2x + 3$. Enter it solved for $y$, as the boundary line is written."
  answer="y\geq-2x+3"
  answerForm="solved:y"
  answerDisplay="$y \geq -2x + 3$"
  hint="Test a point that is not on the line, such as $(0, 0)$, to see which inequality describes the shaded side; then use the line's style — solid or dashed — to decide whether the equal sign is included."
>}}

## Graph linear inequalities

Now we put this together to graph linear inequalities.

{{< callout type="info" >}}
  **Graph a linear inequality.**

  1. Identify and graph the boundary line.
     - If the inequality is $\leq$ or $\geq$, the boundary line is solid.
     - If the inequality is $<$ or $>$, the boundary line is dashed.
  2. Test a point that is not on the boundary line. Is it a solution of the
     inequality?
  3. Shade in one side of the boundary line.
     - If the test point is a solution, shade in the side that includes the
       point.
     - If the test point is not a solution, shade in the opposite side.
{{< /callout >}}

**Example.** Graph the linear inequality $y \geq \tfrac{3}{4}x - 2$.

We graph the boundary line $y = \tfrac{3}{4}x - 2$. Since the inequality is
$\geq$, we draw a solid line. We test $(0, 0)$: is
$0 \geq \tfrac{3}{4}(0) - 2$? Since $0 \geq -2$ is true, $(0, 0)$ is a
solution, so we shade the side of the boundary line that includes $(0, 0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 6 to 6 on both axes. The solid boundary line y equals three-fourths x minus 2 passes through (0, negative 2) and (4, 1). The region above and to the left of the line, which contains (0, 0), is shaded.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0.75,"intercept":-2},"side":[0,0]}]}
{{< /apfigure >}}

**Example.** Graph the linear inequality $x - 2y < 5$.

We graph the boundary line $x - 2y = 5$, drawn dashed since the inequality is
$<$. Testing $(0, 0)$: is $0 - 2(0) < 5$? Since $0 < 5$ is true, we shade the
side that includes $(0, 0)$.

If the boundary line passes through the origin, $(0, 0)$ cannot be used as a
test point — choose any other point not on the line instead.

**Example.** Graph the linear inequality $y \leq -4x$.

The boundary line $y = -4x$ is in slope-intercept form with $m = -4$ and
$b = 0$; since it passes through the origin, we choose a different test
point, such as $(1, 0)$. The inequality is $\leq$, so we draw a solid line.
Testing $(1, 0)$: is $0 \leq -4(1)$? Since $0 \not\leq -4$, $(1, 0)$ is not a
solution, so we shade the side of the boundary line that does *not* include
$(1, 0)$.

{{< fillin
  question="To graph the linear inequality $y > -3x$, test the point $(1, 0)$: substitute it into the inequality, simplify each side to a single number, and enter the resulting statement (a true statement means the point is a solution)."
  answer="0>-3"
  answerForm="decimal"
  answerDisplay="$0 > -3$, true"
  hint="Replace $x$ and $y$ with the point's coordinates, multiply on the right side, and keep the inequality symbol as it is."
>}}

Some linear inequalities have only one variable — an $x$ but no $y$, or a $y$
but no $x$. As with equations, the boundary line is then either a vertical
line, $x = a$, or a horizontal line, $y = b$.

**Example.** Graph the linear inequality $y > 3$.

The boundary line $y = 3$ is horizontal, drawn dashed since the inequality is
$>$. Testing $(0, 0)$: is $0 > 3$? Since this is false, $(0, 0)$ is not a
solution, so we shade the side that does not include $(0, 0)$ — the region
above the line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 8 to 8 on both axes. The dashed horizontal boundary line y equals 3 is drawn, and the region above the line is shaded.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":0,"intercept":3},"side":[0,5],"dashed":true,"label":"y = 3"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Graph the linear inequality $y \le -1$. Is the boundary line solid or dashed?"
  answer="solid"
  hint="Decide whether the inequality symbol includes equality, then use the boundary-line table above."
>}}
dashed
solid
{{< /multiplechoice >}}

## Key terms

**linear inequality** — an inequality that can be written as $Ax + By > C$,
$Ax + By \geq C$, $Ax + By < C$, or $Ax + By \leq C$, where $A$ and $B$ are
not both zero. **solution of a linear inequality** — an ordered pair
$(x, y)$ that makes the inequality true when substituted in. **boundary
line** — the line $Ax + By = C$ that separates the plane into the region
where $Ax + By > C$ and the region where $Ax + By < C$; drawn dashed when
strict ($<$ or $>$) and solid when the inequality includes equality
($\leq$ or $\geq$).

## Practice

### Verify solutions to an inequality in two variables

{{< multiplechoice
  question="Determine whether $(0,0)$ is a solution to the inequality $y>x-3$."
  answer="yes"
  hint="Substitute $x=0$ and $y=0$, then decide whether the resulting inequality is true."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether $(2,1)$ is a solution to the inequality $y>x-3$."
  answer="yes"
  hint="Substitute $x=2$ and $y=1$, then decide whether the resulting inequality is true."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether $(-1,-5)$ is a solution to the inequality $y>x-3$."
  answer="no"
  hint="Substitute $x=-1$ and $y=-5$, then compare $-5$ with $-1-3$."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether $(-6,-3)$ is a solution to the inequality $y>x-3$."
  answer="yes"
  hint="Substitute $x=-6$ and $y=-3$, then decide whether the resulting inequality is true."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether $(1,0)$ is a solution to the inequality $y>x-3$."
  answer="yes"
  hint="Substitute $x=1$ and $y=0$, then decide whether the resulting inequality is true."
>}}
yes
no
{{< /multiplechoice >}}

### Recognize the relation between the solutions of an inequality and its graph

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 10 to 10 on both axes. A solid boundary line y equals negative one-third x minus 2 is drawn, and the region below the line is shaded.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"gridStep":2,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-0.3333333333333333,"intercept":-2},"side":[0,-5],"dashed":false,"label":"y = -x/3 - 2"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the inequality shown by the graph with the boundary line $y=-\tfrac{1}{3}x-2$. Enter it solved for $y$, as the boundary line is written."
  answer="y\leq-\frac{1}{3}x-2"
  answerForm="solved:y"
  answerDisplay="$y\leq-\tfrac{1}{3}x-2$"
  hint="Test a point in the shaded region to choose the inequality direction, then use the line's style — solid or dashed — to decide whether the equal sign is included."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A coordinate grid from negative 10 to 10 on both axes. A solid boundary line x plus y equals 3 is drawn, and the region above the line is shaded.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"gridStep":2,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-1,"intercept":3},"side":[0,5],"dashed":false,"label":"x + y = 3"}]}
{{< /apfigure >}}

{{< fillin
  question="Write the inequality shown by the shaded region in the graph with the boundary line $x+y=3$. Keep $x+y$ on the left side, as the boundary line is written."
  answer="x+y\geq3"
  answerForm="line-standard-form"
  answerDisplay="$x+y\geq3$"
  hint="Test a point in the shaded region to choose the inequality direction, then use the line's style — solid or dashed — to decide whether the equal sign is included."
>}}

### Graph linear inequalities

{{< multiplechoice
  question="Graph the linear inequality $y<\tfrac{3}{5}x+2$. Which description matches the graph?"
  answer="a dashed boundary line with the region below the line shaded"
  hint="Decide solid or dashed from the inequality symbol, then test $(0,0)$ in $y<\tfrac{3}{5}x+2$ and find which side of the line the point lies on."
>}}
a solid boundary line with the region above the line shaded
a dashed boundary line with the region below the line shaded
a dashed boundary line with the region above the line shaded
a solid boundary line with the region below the line shaded
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the linear inequality $4x+2y\geq-8$. Which description matches the graph?"
  answer="a solid boundary line with the side containing the origin shaded"
  hint="Decide solid or dashed from the inequality symbol, then test $(0,0)$ in $4x+2y\geq-8$ to choose the shaded side."
>}}
a dashed boundary line with the side containing the origin shaded
a solid boundary line with the side not containing the origin shaded
a dashed boundary line with the side not containing the origin shaded
a solid boundary line with the side containing the origin shaded
{{< /multiplechoice >}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.7: Graphs of Linear Inequalities](https://openstax.org/books/elementary-algebra-2e/pages/4-7-graphs-of-linear-inequalities) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the boundary-line and shaded-region figures as accessible graphs; condensed the worked examples; omitted the Be Prepared quiz, Media links, Self Check checklist, and unselected Section Exercises; converted the practice problems ("Try Its") into interactive exercises with instant feedback, asking about one step of the graph (the test-point statement, the boundary line's style) where a Try It asks for a whole graph; and adapted selected end-of-section exercises into the section-final interactive Practice block, using categorical graph descriptions where the interactive graph component cannot represent shaded half-planes.</small>
