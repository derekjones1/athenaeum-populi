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
with an open circle at $3$. Similarly, an inequality in two variables has
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
  question="Is the ordered pair $(-2, -1)$ a solution to the inequality $y > x - 3$?"
  hint="Substitute $x = -2$ and $y = -1$ into $y > x - 3$ and check whether the resulting statement is true."
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

<div class="ap-figure">
<svg role="img" aria-label="A dashed boundary line y equals x plus 4, with the region above and to the left of the line shaded to show the solutions to y greater than x plus 4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 252" width="332" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="226" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="226" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="226" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="226" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="226" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="226" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 186,26 26,186" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="126" x2="308" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,126 308,131 308,121" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="166,238 161,228 171,228" fill="currentColor"/>
  <text x="316" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="27.1" y1="184.9" x2="184.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="192,20 188.5,30.6 181.4,23.5" fill="currentColor"/>
  <polygon points="20,192 23.5,181.4 30.6,188.5" fill="currentColor"/>
  <text x="76" y="62" font-size="13" fill="currentColor" text-anchor="middle">y &gt; x + 4</text>
  <text x="216" y="176" font-size="13" fill="currentColor" text-anchor="middle">y &lt; x + 4</text>
</svg>
</div>

**Example.** The boundary line shown is $y = 2x - 1$, drawn as a solid line.
Write the inequality shown by the graph.

We test the point $(0, 0)$: is $0 > 2(0) - 1$, or is $0 < 2(0) - 1$?
Since $0 > -1$ is true, $(0, 0)$ is on the side of the line where
$y > 2x - 1$. Since the boundary line is solid, the inequality includes the
equal sign, so the graph shows $y \geq 2x - 1$.

{{< fillin
  question="A dashed boundary line $y = -2x + 3$ is graphed, and the region below and to the left of the line is shaded (this region contains the point $(0, 0)$). Write the complete inequality shown by the graph, solved for y."
  answer="y<-2x+3"
  answerDisplay="$y < -2x + 3$"
  hint="Test the point $(0, 0)$ in both $y > -2x + 3$ and $y < -2x + 3$ to see which is true, then use > or < depending on whether the line is dashed or solid."
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

<div class="ap-figure">
<svg role="img" aria-label="A solid boundary line y equals three-fourths x minus 2, with the region above and to the left of the line shaded, including the point (0, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 252" width="332" height="252" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="226" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="226" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="226" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="226" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="226" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="226" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="226" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="226" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="226" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="226" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="226" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="226" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="226" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="306" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 306,26 306,61 86,226 26,226" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="126" x2="308" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="228" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,126 308,131 308,121" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="166,238 161,228 171,228" fill="currentColor"/>
  <text x="316" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="86" y1="226" x2="304" y2="62.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="312,56.5 307,66.5 301,58.5" fill="currentColor"/>
  <polygon points="78,232 83,222 89,230" fill="currentColor"/>
</svg>
</div>

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
  question="Graph the linear inequality $y > -3x$ by testing the point $(1, 0)$. Is $(1, 0)$ a solution?"
  answer="0>-3"
  answerDisplay="$0 > -3$, true"
  hint="Substitute $x = 1$, $y = 0$ into $y > -3x$ and simplify."
>}}

Some linear inequalities have only one variable — an $x$ but no $y$, or a $y$
but no $x$. As with equations, the boundary line is then either a vertical
line, $x = a$, or a horizontal line, $y = b$.

**Example.** Graph the linear inequality $y > 3$.

The boundary line $y = 3$ is horizontal, drawn dashed since the inequality is
$>$. Testing $(0, 0)$: is $0 > 3$? Since this is false, $(0, 0)$ is not a
solution, so we shade the side that does not include $(0, 0)$ — the region
above the line.

<div class="ap-figure">
<svg role="img" aria-label="A dashed horizontal boundary line y equals 3, with the region above the line shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 232" width="332" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="206" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="206" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="206" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="206" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="206" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="206" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="206" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="206" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="206" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="206" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="206" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="206" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="206" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="306" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 306,26 306,86 26,86" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="146" x2="308" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="166" y1="24" x2="166" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,146 308,151 308,141" fill="currentColor"/>
  <polygon points="166,14 171,24 161,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="166,218 161,208 171,208" fill="currentColor"/>
  <text x="316" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="30" y1="86" x2="302" y2="86" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="312,86 302,91 302,81" fill="currentColor"/>
  <polygon points="20,86 30,81 30,91" fill="currentColor"/>
  <text x="268.2" y="106" font-size="13" fill="currentColor" text-anchor="middle">y = 3</text>
</svg>
</div>

{{< multiplechoice
  question="Graph the linear inequality $y \le -1$. Is the boundary line solid or dashed?"
  answer="solid"
  hint="The inequality symbol is $\le$, which includes equality, so the boundary line is solid."
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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A coordinate grid from negative 10 to 10 on both axes. A solid boundary line y equals negative one-third x minus 2 is drawn, and the region below the line is shaded.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"gridStep":2,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-0.3333333333333333,"intercept":-2},"side":[0,-5],"dashed":false,"label":"y = -x/3 - 2"}]}'>
<svg role="img" aria-label="A coordinate grid from negative 10 to 10 on both axes. A solid boundary line y equals negative one-third x minus 2 is drawn, and the region below the line is shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 332" width="332" height="332" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="306" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="54" y1="306" x2="54" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="82" y1="306" x2="82" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="110" y1="306" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="138" y1="306" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="194" y1="306" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="222" y1="306" x2="222" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="250" y1="306" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="278" y1="306" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="306" y1="306" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="306" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="278" x2="306" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="250" x2="306" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="222" x2="306" y2="222" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="194" x2="306" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="138" x2="306" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="110" x2="306" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="82" x2="306" y2="82" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="54" x2="306" y2="54" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,147.3 306,240.7 306,306 26,306" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="166" x2="308" y2="166" stroke="currentColor" stroke-width="1"/><line x1="166" y1="24" x2="166" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,166 308,171 308,161" fill="currentColor"/><polygon points="166,14 171,24 161,24" fill="currentColor"/><polygon points="14,166 24,161 24,171" fill="currentColor"/><polygon points="166,318 161,308 171,308" fill="currentColor"/>
  <text x="316" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text><text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="163" x2="26" y2="169" stroke="currentColor" stroke-width="1"/><text x="26" y="181" font-size="11" fill="currentColor" text-anchor="middle">−10</text><line x1="54" y1="163" x2="54" y2="169" stroke="currentColor" stroke-width="1"/><text x="54" y="181" font-size="11" fill="currentColor" text-anchor="middle">−8</text><line x1="82" y1="163" x2="82" y2="169" stroke="currentColor" stroke-width="1"/><text x="82" y="181" font-size="11" fill="currentColor" text-anchor="middle">−6</text><line x1="110" y1="163" x2="110" y2="169" stroke="currentColor" stroke-width="1"/><text x="110" y="181" font-size="11" fill="currentColor" text-anchor="middle">−4</text><line x1="138" y1="163" x2="138" y2="169" stroke="currentColor" stroke-width="1"/><text x="138" y="181" font-size="11" fill="currentColor" text-anchor="middle">−2</text><line x1="194" y1="163" x2="194" y2="169" stroke="currentColor" stroke-width="1"/><text x="194" y="181" font-size="11" fill="currentColor" text-anchor="middle">2</text><line x1="222" y1="163" x2="222" y2="169" stroke="currentColor" stroke-width="1"/><text x="222" y="181" font-size="11" fill="currentColor" text-anchor="middle">4</text><line x1="250" y1="163" x2="250" y2="169" stroke="currentColor" stroke-width="1"/><text x="250" y="181" font-size="11" fill="currentColor" text-anchor="middle">6</text><line x1="278" y1="163" x2="278" y2="169" stroke="currentColor" stroke-width="1"/><text x="278" y="181" font-size="11" fill="currentColor" text-anchor="middle">8</text><line x1="306" y1="163" x2="306" y2="169" stroke="currentColor" stroke-width="1"/><text x="306" y="181" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="163" y1="306" x2="169" y2="306" stroke="currentColor" stroke-width="1"/><text x="160" y="310" font-size="11" fill="currentColor" text-anchor="end">−10</text><line x1="163" y1="278" x2="169" y2="278" stroke="currentColor" stroke-width="1"/><text x="160" y="282" font-size="11" fill="currentColor" text-anchor="end">−8</text><line x1="163" y1="250" x2="169" y2="250" stroke="currentColor" stroke-width="1"/><text x="160" y="254" font-size="11" fill="currentColor" text-anchor="end">−6</text><line x1="163" y1="222" x2="169" y2="222" stroke="currentColor" stroke-width="1"/><text x="160" y="226" font-size="11" fill="currentColor" text-anchor="end">−4</text><line x1="163" y1="194" x2="169" y2="194" stroke="currentColor" stroke-width="1"/><text x="160" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text><line x1="163" y1="138" x2="169" y2="138" stroke="currentColor" stroke-width="1"/><text x="160" y="142" font-size="11" fill="currentColor" text-anchor="end">2</text><line x1="163" y1="110" x2="169" y2="110" stroke="currentColor" stroke-width="1"/><text x="160" y="114" font-size="11" fill="currentColor" text-anchor="end">4</text><line x1="163" y1="82" x2="169" y2="82" stroke="currentColor" stroke-width="1"/><text x="160" y="86" font-size="11" fill="currentColor" text-anchor="end">6</text><line x1="163" y1="54" x2="169" y2="54" stroke="currentColor" stroke-width="1"/><text x="160" y="58" font-size="11" fill="currentColor" text-anchor="end">8</text><line x1="163" y1="26" x2="169" y2="26" stroke="currentColor" stroke-width="1"/><text x="160" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="29.5" y1="148.5" x2="302.5" y2="239.5" stroke="currentColor" stroke-width="1.8"/><polygon points="312,242.7 300.9,244.2 304.1,234.8" fill="currentColor"/><polygon points="20,145.3 31.1,143.8 27.9,153.2" fill="currentColor"/><text x="196" y="224.9" font-size="13" fill="currentColor" text-anchor="end">y = −x/3 − 2</text>
</svg>
</div>

{{< fillin
  question="Write the inequality shown by the graph with the boundary line $y=-\tfrac{1}{3}x-2$."
  answer="y\leq-\frac{1}{3}x-2"
  answerDisplay="$y\leq-\tfrac{1}{3}x-2$"
  hint="The solid boundary includes equality, and the shaded region is below the line."
>}}

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A coordinate grid from negative 10 to 10 on both axes. A solid boundary line x plus y equals 3 is drawn, and the region above the line is shaded.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":14,"gridStep":2,"tickLabels":true,"tickStep":2,"regions":[{"line":{"slope":-1,"intercept":3},"side":[0,5],"dashed":false,"label":"x + y = 3"}]}'>
<svg role="img" aria-label="A coordinate grid from negative 10 to 10 on both axes. A solid boundary line x plus y equals 3 is drawn, and the region above the line is shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 332" width="332" height="332" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="306" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="54" y1="306" x2="54" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="82" y1="306" x2="82" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="110" y1="306" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="138" y1="306" x2="138" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="194" y1="306" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="222" y1="306" x2="222" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="250" y1="306" x2="250" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="278" y1="306" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="306" y1="306" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="306" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="278" x2="306" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="250" x2="306" y2="250" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="222" x2="306" y2="222" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="194" x2="306" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="138" x2="306" y2="138" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="110" x2="306" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="82" x2="306" y2="82" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="54" x2="306" y2="54" stroke="currentColor" stroke-width="0.4" opacity="0.2"/><line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="68,26 306,26 306,264" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="166" x2="308" y2="166" stroke="currentColor" stroke-width="1"/><line x1="166" y1="24" x2="166" y2="308" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,166 308,171 308,161" fill="currentColor"/><polygon points="166,14 171,24 161,24" fill="currentColor"/><polygon points="14,166 24,161 24,171" fill="currentColor"/><polygon points="166,318 161,308 171,308" fill="currentColor"/>
  <text x="316" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text><text x="174" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="163" x2="26" y2="169" stroke="currentColor" stroke-width="1"/><text x="26" y="181" font-size="11" fill="currentColor" text-anchor="middle">−10</text><line x1="54" y1="163" x2="54" y2="169" stroke="currentColor" stroke-width="1"/><text x="54" y="181" font-size="11" fill="currentColor" text-anchor="middle">−8</text><line x1="82" y1="163" x2="82" y2="169" stroke="currentColor" stroke-width="1"/><text x="82" y="181" font-size="11" fill="currentColor" text-anchor="middle">−6</text><line x1="110" y1="163" x2="110" y2="169" stroke="currentColor" stroke-width="1"/><text x="110" y="181" font-size="11" fill="currentColor" text-anchor="middle">−4</text><line x1="138" y1="163" x2="138" y2="169" stroke="currentColor" stroke-width="1"/><text x="138" y="181" font-size="11" fill="currentColor" text-anchor="middle">−2</text><line x1="194" y1="163" x2="194" y2="169" stroke="currentColor" stroke-width="1"/><text x="194" y="181" font-size="11" fill="currentColor" text-anchor="middle">2</text><line x1="222" y1="163" x2="222" y2="169" stroke="currentColor" stroke-width="1"/><text x="222" y="181" font-size="11" fill="currentColor" text-anchor="middle">4</text><line x1="250" y1="163" x2="250" y2="169" stroke="currentColor" stroke-width="1"/><text x="250" y="181" font-size="11" fill="currentColor" text-anchor="middle">6</text><line x1="278" y1="163" x2="278" y2="169" stroke="currentColor" stroke-width="1"/><text x="278" y="181" font-size="11" fill="currentColor" text-anchor="middle">8</text><line x1="306" y1="163" x2="306" y2="169" stroke="currentColor" stroke-width="1"/><text x="306" y="181" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="163" y1="306" x2="169" y2="306" stroke="currentColor" stroke-width="1"/><text x="160" y="310" font-size="11" fill="currentColor" text-anchor="end">−10</text><line x1="163" y1="278" x2="169" y2="278" stroke="currentColor" stroke-width="1"/><text x="160" y="282" font-size="11" fill="currentColor" text-anchor="end">−8</text><line x1="163" y1="250" x2="169" y2="250" stroke="currentColor" stroke-width="1"/><text x="160" y="254" font-size="11" fill="currentColor" text-anchor="end">−6</text><line x1="163" y1="222" x2="169" y2="222" stroke="currentColor" stroke-width="1"/><text x="160" y="226" font-size="11" fill="currentColor" text-anchor="end">−4</text><line x1="163" y1="194" x2="169" y2="194" stroke="currentColor" stroke-width="1"/><text x="160" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text><line x1="163" y1="138" x2="169" y2="138" stroke="currentColor" stroke-width="1"/><text x="160" y="142" font-size="11" fill="currentColor" text-anchor="end">2</text><line x1="163" y1="110" x2="169" y2="110" stroke="currentColor" stroke-width="1"/><text x="160" y="114" font-size="11" fill="currentColor" text-anchor="end">4</text><line x1="163" y1="82" x2="169" y2="82" stroke="currentColor" stroke-width="1"/><text x="160" y="86" font-size="11" fill="currentColor" text-anchor="end">6</text><line x1="163" y1="54" x2="169" y2="54" stroke="currentColor" stroke-width="1"/><text x="160" y="58" font-size="11" fill="currentColor" text-anchor="end">8</text><line x1="163" y1="26" x2="169" y2="26" stroke="currentColor" stroke-width="1"/><text x="160" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="69.1" y1="27.1" x2="304.9" y2="262.9" stroke="currentColor" stroke-width="1.8"/><polygon points="312,270 301.4,266.5 308.5,259.4" fill="currentColor"/><polygon points="62,20 72.6,23.5 65.5,30.6" fill="currentColor"/><text x="245.7" y="230.3" font-size="13" fill="currentColor" text-anchor="end">x + y = 3</text>
</svg>
</div>

{{< fillin
  question="Write the inequality shown by the shaded region in the graph with the boundary line $x+y=3$."
  answer="x+y\geq3"
  answerDisplay="$x+y\geq3$"
  hint="The solid boundary includes equality. Test a point in the shaded region, such as $(0,5)$, to choose the inequality direction."
>}}

### Graph linear inequalities

{{< multiplechoice
  question="Graph the linear inequality $y<\tfrac{3}{5}x+2$. Which description matches the graph?"
  answer="a dashed boundary line with the region below the line shaded"
  hint="A strict inequality uses a dashed boundary; a test point below the boundary satisfies $y<\tfrac{3}{5}x+2$."
>}}
a solid boundary line with the region above the line shaded
a dashed boundary line with the region below the line shaded
a dashed boundary line with the region above the line shaded
a solid boundary line with the region below the line shaded
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the linear inequality $4x+2y\geq-8$. Which description matches the graph?"
  answer="a solid boundary line with the side containing the origin shaded"
  hint="Equality is included, so the boundary is solid. Test $(0,0)$ in $4x+2y\geq-8$ to choose the shaded side."
>}}
a dashed boundary line with the side containing the origin shaded
a solid boundary line with the side not containing the origin shaded
a dashed boundary line with the side not containing the origin shaded
a solid boundary line with the side containing the origin shaded
{{< /multiplechoice >}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.7: Graphs of Linear Inequalities](https://openstax.org/books/elementary-algebra-2e/pages/4-7-graphs-of-linear-inequalities) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the boundary-line and shaded-region figures as accessible inline SVGs; condensed the worked examples; omitted the Be Prepared quiz, Media links, Self Check checklist, and unselected Section Exercises; converted the practice problems ("Try Its") into interactive exercises with instant feedback; and adapted selected end-of-section exercises into the section-final interactive Practice block, using categorical graph descriptions where the interactive graph component cannot represent shaded half-planes.</small>
