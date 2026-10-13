---
title: Graphing Systems of Linear Inequalities
description: >-
  Determining whether an ordered pair is a solution of a system of linear
  inequalities and solving a system of linear inequalities by graphing the
  overlapping shaded regions — adapted from OpenStax Elementary Algebra 2e,
  Section 5.6.
source_section: "5.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Determine whether an ordered pair is a solution of a system of linear inequalities
- Solve a system of linear inequalities by graphing
- Solve applications of systems of inequalities
{{< /callout >}}

The definition of a system of linear inequalities is very similar to the
definition of a system of linear equations — but it has inequalities
instead of equations. To solve a system of linear inequalities, we find the
values of the variables that are solutions to *both* inequalities, and we
show that solution set as a shaded region on a graph.

## Determine Whether an Ordered Pair Is a Solution of a System of Linear Inequalities

{{< callout type="info" >}}
  **System of linear inequalities.** Two or more linear inequalities grouped
  together form a **system of linear inequalities**.
{{< /callout >}}

A system of two linear inequalities looks like this:

$$
\begin{cases} x + 4y \geq 10 \\ 3x - 2y < 12 \end{cases}
$$

{{< callout type="info" >}}
  **Solutions of a system of linear inequalities.** Solutions of a system of
  linear inequalities are the values of the variables that make all the
  inequalities true. The solution is shown as a shaded region in the
  $x$-$y$ coordinate system that includes all the points whose ordered pairs
  make the inequalities true.
{{< /callout >}}

To determine whether an ordered pair is a solution to a system of two
inequalities, we substitute the values of the variables into each
inequality. If the ordered pair makes both inequalities true, it is a
solution to the system.

**Example.** Determine whether each ordered pair is a solution to the
system $\begin{cases} x + 4y \geq 10 \\ 3x - 2y < 12 \end{cases}$:
(a) $(-2, 4)$ (b) $(3, 1)$.

(a) Substituting $x = -2, y = 4$ into both inequalities:

$$
-2 + 4(4) \geq 10 \qquad 3(-2) - 2(4) < 12
$$

$$
14 \geq 10 \ \text{true} \qquad {-14} < 12 \ \text{true}
$$

Both inequalities are true, so $(-2, 4)$ is a solution to the system.

(b) Substituting $x = 3, y = 1$:

$$
3 + 4(1) \geq 10 \qquad 3(3) - 2(1) < 12
$$

$$
7 \geq 10 \ \text{false} \qquad 7 < 12 \ \text{true}
$$

The ordered pair $(3, 1)$ makes one inequality true but the other false, so
it is *not* a solution to the system.

{{< multiplechoice
  question="Is the ordered pair $(3, -1)$ a solution to the system: $x - 5y > 10$ and $2x + 3y > -2$?"
  hint="Substitute $x = 3$, $y = -1$ into both inequalities. The pair is a solution only if both statements are true."
  answer="no"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the ordered pair $(6, -3)$ a solution to the system: $x - 5y > 10$ and $2x + 3y > -2$?"
  hint="Substitute $x = 6$, $y = -3$ into both inequalities. The pair is a solution only if both statements are true."
  answer="yes"
>}}
no
yes
{{< /multiplechoice >}}

## Solve a System of Linear Inequalities by Graphing

The solution to a single linear inequality is the region on one side of its
boundary line containing all the points that make the inequality true. The
solution to a system of two linear inequalities is a region containing the
solutions to *both* inequalities. To find it, we graph each inequality
separately on the same grid, then locate the region where the two shadings
overlap.

{{< callout type="info" >}}
  **Solve a system of linear inequalities by graphing.**

  1. Graph the first inequality: graph its boundary line, then shade in the
     side of the boundary line where the inequality is true.
  2. On the same grid, graph the second inequality: graph its boundary line,
     then shade in the side of that boundary line where the inequality is
     true.
  3. The solution is the region where the shading from both inequalities
     overlaps.
  4. Check by choosing a point in the overlapping region and verifying that
     it makes both inequalities true.
{{< /callout >}}

**Example.** Solve the system by graphing: $\begin{cases} y \geq 2x - 1 \\ y < x + 1 \end{cases}$

We graph the boundary line $y = 2x - 1$ as a solid line, since the
inequality is $\geq$. Testing $(0, 0)$: is $0 \geq 2(0) - 1$? Since
$0 \geq -1$ is true, we shade the side containing $(0, 0)$ — above and to
the left of the line.

On the same grid, we graph the boundary line $y = x + 1$ as a dashed line,
since the inequality is $<$. Testing $(0, 0)$ again: is $0 < 0 + 1$? Since
this is true, we shade the side containing $(0, 0)$ — below and to the
right of this line.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −7 to 7 on both axes, numbered every 1 unit. The boundary line y equals 2x minus 1 is solid, with the region above and to the left shaded (satisfying y greater than or equal to 2x minus 1). The boundary line y equals x plus 1 is dashed, with the region below and to the right shaded (satisfying y less than x plus 1). The two shadings overlap in a wedge-shaped region below and to the left of the point (2, 3), which is the solution to the system.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"tickStep":1,"regions":[{"line":{"slope":2,"intercept":-1},"side":[0,0]},{"line":{"slope":1,"intercept":1},"side":[0,0],"dashed":true}],"texts":[{"at":[-4.5,5],"text":"y ≥ 2x − 1","anchor":"middle"},{"at":[4,-4],"text":"y < x + 1","anchor":"middle"},{"at":[-3.5,-4.6],"text":"solution","anchor":"middle"}]}
{{< /apfigure >}}

The point where the two boundary lines cross, $(2, 3)$, is not itself part
of the solution, since it does not satisfy $y < x + 1$. The solution to the
system is the darker, doubly-shaded wedge below and to the left of that
crossing point.

We check by choosing a test point in that wedge, such as $(-1, -1)$:

{{< fillin
  question="The point $(-1, -1)$ lies in the doubly shaded wedge. Substitute it into $y < x + 1$, simplify the right side, and write the resulting inequality."
  answer="-1<0"
  answerForm="decimal"
  answerDisplay="$-1 < 0$, true"
  hint="Replace $x$ and $y$ with the point's coordinates, then add the two numbers on the right side."
>}}

Sometimes the boundary lines of a system are parallel. Depending on the
direction of the shading, a system like this may have no solution at all.

**Example.** Solve the system by graphing: $\begin{cases} 4x + 3y \geq 12 \\ y < -\tfrac{4}{3}x + 1 \end{cases}$

We graph the boundary line $4x + 3y = 12$ as a solid line (intercepts
$x = 3$, $y = 4$). Testing $(0, 0)$: is $4(0) + 3(0) \geq 12$? Since this
is false, we shade the side that does *not* contain $(0, 0)$.

We graph $y = -\tfrac{4}{3}x + 1$ as a dashed line — it has the same slope,
$-\tfrac{4}{3}$, so it is parallel to the first boundary line. Testing
$(0, 0)$: is $0 < 1$? Since this is true, we shade the side that *does*
contain $(0, 0)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Coordinate grid from −7 to 7 on both axes, numbered every 1 unit. The boundary line 4x plus 3y equals 12 is solid, with the region above and to the right shaded (satisfying 4x plus 3y greater than or equal to 12). The parallel boundary line y equals negative four-thirds x plus 1 is dashed, with the region below and to the left shaded (satisfying y less than negative four-thirds x plus 1). The two shaded regions never touch, so the system has no solution.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"tickStep":1,"regions":[{"line":{"slope":-1.3333333333333333,"intercept":4},"side":[5,5]},{"line":{"slope":-1.3333333333333333,"intercept":1},"side":[0,0],"dashed":true}],"texts":[{"at":[3.6,4.5],"text":"4x + 3y ≥ 12","anchor":"middle"},{"at":[-4,-3.6],"text":"y < −4/3 x + 1","anchor":"middle"}]}
{{< /apfigure >}}

There is no point in both shaded regions, so this system has **no
solution**.

{{< fillin
  question="The point $(3, 1)$ lies in the shaded region of $4x + 3y \geq 12$. Substitute it into $y < -\tfrac{4}{3}x + 1$, simplify the right side, and write the resulting inequality."
  answer="1<-3"
  answerForm="decimal"
  answerDisplay="$1 < -3$, false"
  hint="Multiply $-\tfrac{4}{3}$ by the $x$-coordinate, then add $1$."
>}}

## Solve Applications of Systems of Inequalities

To solve an application of a system of inequalities, we translate each
condition into an inequality, then graph the system to see the region that
contains all the solutions. Many realistic situations restrict both
variables to be positive, so the graph shows only Quadrant I.

**Example.** Christy sells photographs at a booth at a street fair. At the
start of the day, she wants to display at least 25 photos. Each small photo
she displays costs her \$4 and each large photo costs her \$10, and she
doesn't want to spend more than \$200 on photos to display.

(a) Write a system of inequalities to model this situation. Let $x$ be the
number of small photos and $y$ be the number of large photos. She wants at
least 25 photos total, so $x + y \geq 25$. The cost — \$4 per small photo
plus \$10 per large photo — must be no more than \$200, so
$4x + 10y \leq 200$:

$$
\begin{cases} x + y \geq 25 \\ 4x + 10y \leq 200 \end{cases}
$$

(b) Graph the system. We graph $x + y = 25$ as a solid line and shade the
side away from the origin (since $(0,0)$ fails $x + y \geq 25$). We graph
$4x + 10y = 200$ as a solid line and shade the side containing the origin
(since $(0,0)$ satisfies $4x + 10y \leq 200$). Because this is a real-world
situation, we only graph Quadrant I, where $x \geq 0$ and $y \geq 0$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Quadrant I only, x from 0 to 55 and y from 0 to 55, numbered every 10 units. The solid boundary line x plus y equals 25 runs from (0, 25) to (25, 0), with the region above and to the right shaded. The solid boundary line 4x plus 10y equals 200 runs from (0, 20) to (50, 0), with the region below and to the left shaded. The lines cross at about (8.3, 16.7). The two shadings overlap in the triangle with corners at that crossing point, (25, 0), and (50, 0), bounded by the two lines and the x-axis, which is the solution to the system.","xMin":0,"xMax":55,"yMin":0,"yMax":55,"unit":6,"gridStep":5,"tickLabels":true,"tickStep":10,"regions":[{"line":{"slope":-1,"intercept":25,"arrows":false},"side":[40,40]},{"line":{"slope":-0.4,"intercept":20,"arrows":false},"side":[1,1]}],"texts":[{"at":[31,31],"text":"x + y ≥ 25","anchor":"middle"},{"at":[1,2],"text":"4x + 10y ≤ 200","anchor":"start"}]}
{{< /apfigure >}}

The solution is the darker, doubly-shaded region bounded by the two lines
and the $x$-axis.

(c) Could she display 10 small and 20 large photos? Testing $(10, 20)$:
$10 + 20 = 30 \geq 25$ is true, but
$4(10) + 10(20) = 40 + 200 = 240 \leq 200$ is false. Since $(10, 20)$ is not
in the solution region, she could *not* display 10 small and 20 large
photos.

(d) Could she display 20 small and 10 large photos? Testing $(20, 10)$:
$20 + 10 = 30 \geq 25$ is true, and
$4(20) + 10(10) = 80 + 100 = 180 \leq 200$ is also true. Since $(20, 10)$ is
in the solution region, she *could* display 20 small and 10 large photos.

{{< multiplechoice
  question="For Christy's system $x + y \geq 25$ and $4x + 10y \leq 200$, could she display 15 small and 5 large photos?"
  hint="Substitute $x = 15$, $y = 5$ into both inequalities. She can display them only if both statements are true."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="For Christy's system $x + y \geq 25$ and $4x + 10y \leq 200$, could she display 3 large and 22 small photos?"
  hint="Let $x$ be the number of small photos and $y$ the number of large ones, and substitute into both inequalities. She can display them only if both statements are true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Key terms

**system of linear inequalities** — two or more linear inequalities grouped
together. **solutions of a system of linear inequalities** — the ordered
pairs $(x, y)$ that make every inequality in the system true, shown as a
shaded region in the $x$-$y$ coordinate system where the shadings of the
individual inequalities overlap.

## Practice

### Determine whether an ordered pair is a solution of a system of linear inequalities

{{< multiplechoice
  question="Is $(3,-3)$ a solution of the system $3x+y>5$ and $2x-y\leq 10$?"
  answer="yes"
  hint="Substitute $x=3$ and $y=-3$ into both inequalities. The pair is a solution only if both statements are true."
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(7,1)$ a solution of the system $3x+y>5$ and $2x-y\leq 10$?"
  answer="no"
  hint="Substitute $x=7$ and $y=1$ into both inequalities. The pair is a solution only if both statements are true."
>}}
no
yes
{{< /multiplechoice >}}

### Solve a system of linear inequalities by graphing

{{< multiplechoice
  question="Solve the system $2x+4y>4$ and $y\leq-\tfrac{1}{2}x-2$ by graphing. Which solution classification does the graph show?"
  answer="no solution"
  hint="Graph each boundary line, dashed for a strict inequality and solid for an inclusive one, shade each side with a test point, then check whether the shaded half-planes overlap."
>}}
a nonempty overlapping region
no solution
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve the system $-2x+6y<0$ and $6y>2x+4$ by graphing. Which solution classification does the graph show?"
  answer="no solution"
  hint="Graph each boundary line, dashed for a strict inequality and solid for an inclusive one, shade each side with a test point, then check whether the shaded half-planes overlap."
>}}
no solution
a nonempty overlapping region
{{< /multiplechoice >}}

### Solve applications of systems of inequalities

{{< multiplechoice
  question="Caitlyn sells portraits for \$15 and landscapes for \$10 at the county fair. She wants to sell at least 60 drawings and needs to sell at least \$800 worth to earn a profit. If $p$ is the number of portraits and $l$ is the number of landscapes, which system models this situation?"
  answer="$p+l\geq 60$ and $15p+10l\geq 800$"
  hint="Write one inequality for the number of drawings and one for their total dollar value, and choose each inequality symbol from the wording of its condition."
>}}
$p+l\geq 60$ and $15p+10l\geq 800$
$p+l\leq 60$ and $15p+10l\leq 800$
$p+l\geq 60$ and $15p+10l\leq 800$
{{< /multiplechoice >}}

{{< multiplechoice
  question="For Caitlyn's system $p+l\geq 60$ and $15p+10l\geq 800$, which description gives the graph of the solution?"
  answer="Both boundary lines are solid, and the region above both lines is shaded."
  hint="Decide solid or dashed from each inequality symbol, then solve each inequality for $l$ to see which side of its boundary to shade."
>}}
Both boundary lines are dashed, and the region above both lines is shaded.
Both boundary lines are solid, and the region above both lines is shaded.
Both boundary lines are solid, and the region below both lines is shaded.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Caitlyn wants to sell at least 60 drawings and at least \$800 worth of portraits and landscapes. Portraits sell for \$15 and landscapes for \$10. Will she make a profit if she sells 20 portraits and 35 landscapes?"
  answer="no"
  hint="Substitute $p=20$ and $l=35$ into both $p+l\geq 60$ and $15p+10l\geq 800$."
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Caitlyn wants to sell at least 60 drawings and at least \$800 worth of portraits and landscapes. Portraits sell for \$15 and landscapes for \$10. Will she make a profit if she sells 50 portraits and 20 landscapes?"
  answer="yes"
  hint="Substitute $p=50$ and $l=20$ into both $p+l\geq 60$ and $15p+10l\geq 800$."
>}}
no
yes
{{< /multiplechoice >}}

---

<small>This section is adapted from [Elementary Algebra 2e, Section 5.6: Graphing Systems of Linear Inequalities](https://openstax.org/books/elementary-algebra-2e/pages/5-6-graphing-systems-of-linear-inequalities) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recreated the overlapping shaded-region figures as accessible inline SVGs, drawing the photo-display graph in Quadrant I only, as the text describes; condensed the worked examples and omitted four of them (the $x-y>3$, $x-2y<5$, and $y>\tfrac{1}{2}x-4$ graphing examples and the hamburger-and-cookie application); gave the second parallel boundary line's slope as $-\tfrac{4}{3}$, where the source prints $\tfrac{4}{3}$, and said the origin satisfies $4x+10y\leq200$ in the photo-display graph, where the source says it does not; worked parts (c) and (d) of the photo-display example with the points its solution checks, 10 small and 20 large and 20 small and 10 large, and asked the problem statement's own questions (15 small and 5 large, 3 large and 22 small) as the two exercises after it; omitted the Be Prepared quiz, Media links, Key Concepts summary (it repeats the how-to box), Self Check checklist, and unselected Section Exercises; converted one practice problem ("Try It") into interactive exercises with instant feedback and added test-point checks on two worked examples' systems, the second using a new point, $(3,1)$; wrote the Key terms list from the module's glossary and definition boxes; and adapted selected end-of-section exercises into the interactive Practice block.</small>
