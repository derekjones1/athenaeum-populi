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
  **By the end of this section, you will be able to:** verify solutions to
  an inequality in two variables, recognize the relation between the
  solutions of an inequality and its graph, and graph linear inequalities.
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
  question="A dashed boundary line $y = -2x + 3$ is graphed, and the region above and to the left of the line is shaded (this region contains the point $(0, 0)$). Write the complete inequality shown by the graph, solved for y."
  answer="y>-2x+3"
  answerDisplay="$y > -2x + 3$"
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

{{< fillin
  question="Graph the linear inequality $y <= -1$. Is the boundary line solid or dashed? Answer 1 for solid, 0 for dashed."
  answer="1"
  hint="The inequality symbol is <=, which includes equality, so the boundary line is solid."
>}}

## Key terms

**linear inequality** — an inequality that can be written as $Ax + By > C$,
$Ax + By \geq C$, $Ax + By < C$, or $Ax + By \leq C$, where $A$ and $B$ are
not both zero. **solution of a linear inequality** — an ordered pair
$(x, y)$ that makes the inequality true when substituted in. **boundary
line** — the line $Ax + By = C$ that separates the plane into the region
where $Ax + By > C$ and the region where $Ax + By < C$; drawn dashed when
strict ($<$ or $>$) and solid when the inequality includes equality
($\leq$ or $\geq$).

---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.7: Graphs of Linear Inequalities](https://openstax.org/books/elementary-algebra-2e/pages/4-7-graphs-of-linear-inequalities) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the boundary-line and shaded-region figures as accessible inline SVGs; condensed the worked examples; omitted the Be Prepared quiz, Media links, Self Check checklist, and Section Exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
