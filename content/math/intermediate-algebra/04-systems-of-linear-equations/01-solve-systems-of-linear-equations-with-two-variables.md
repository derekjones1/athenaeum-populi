---
title: Solve Systems of Linear Equations with Two Variables
description: >-
  Determining whether an ordered pair is a solution of a system of equations,
  solving a system of two linear equations by graphing, by substitution, and
  by elimination, and choosing the most convenient method — adapted from
  OpenStax Intermediate Algebra 2e, Section 4.1.
source_section: "4.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Determine whether an ordered pair is a solution of a system of equations
- Solve a system of linear equations by graphing
- Solve a system of equations by substitution
- Solve a system of equations by elimination
- Choose the most convenient method to solve a system of linear equations
{{< /callout >}}

## Determine whether an ordered pair is a solution of a system of equations

Earlier, we learned how to solve linear equations with one variable. Now we
will work with two or more linear equations grouped together, which is known
as a **system of linear equations**.

{{< callout type="info" >}}
  **System of linear equations.** When two or more linear equations are
  grouped together, they form a system of linear equations.
{{< /callout >}}

An example of a system of two linear equations is shown below. A brace shows
that the two equations are grouped together to form a system:

$$\left\{\begin{array}{l} 2x + y = 7 \\ x - 2y = 6 \end{array}\right.$$

A linear equation in two variables, such as $2x+y=7$, has an infinite number
of solutions — its graph is a line, and every point on the line is a
solution to the equation. To solve a system of two linear equations, we want
to find the values of the variables that are solutions to *both* equations.
In other words, we are looking for the ordered pairs $(x,y)$ that make both
equations true. These are called the **solutions of a system of equations**.

{{< callout type="info" >}}
  **Solutions of a system of equations.** The solutions of a system of
  equations are the values of the variables that make *all* the equations
  true. A solution of a system of two linear equations is represented by an
  ordered pair $(x,y)$.
{{< /callout >}}

To determine if an ordered pair is a solution to a system of two equations,
we substitute the values of the variables into each equation. If the ordered
pair makes both equations true, it is a solution to the system.

**Example.** Determine whether the ordered pair is a solution to the system
$\left\{\begin{array}{l} x-y=-1 \\ 2x-y=-5 \end{array}\right.$: (a)
$(-2,-1)$ (b) $(-4,-3)$.

(a) Substitute $x=-2$ and $y=-1$ into both equations.

$$
\begin{array}{lrcl}
x-y=-1: & -2-(-1) &\overset{?}{=}& -1 \\[4pt]
& -1 &=& -1\ \checkmark \\[4pt]
2x-y=-5: & 2(-2)-(-1) &\overset{?}{=}& -5 \\[4pt]
& -3 &\neq& -5
\end{array}
$$

$(-2,-1)$ makes the first equation true but not the second, so it does not
make *both* equations true — it is not a solution to the system.

(b) Substitute $x=-4$ and $y=-3$ into both equations.

$$
\begin{array}{lrcl}
x-y=-1: & -4-(-3) &\overset{?}{=}& -1 \\[4pt]
& -1 &=& -1\ \checkmark \\[4pt]
2x-y=-5: & 2(-4)-(-3) &\overset{?}{=}& -5 \\[4pt]
& -5 &=& -5\ \checkmark
\end{array}
$$

$(-4,-3)$ makes both equations true, so it *is* a solution to the system.

{{< multiplechoice
  question="Is $(0,0)$ a solution to the system $\{3x+y=0,\ x+2y=-5\}$?"
  hint="Substitute x=0 and y=0 into both equations and check whether each one is true."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-2,2)$ a solution to the system $\{x-3y=-8,\ -3x-y=4\}$?"
  hint="Substitute x=-2 and y=2 into both equations and check whether each one is true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Solve a system of linear equations by graphing

The graph of a linear equation is a line, and every point on that line is a
solution to the equation. For a system of two equations, we graph *two*
lines on the same coordinate plane. Then we can see all the points that are
solutions to each equation — and by finding what the two lines have in
common, we find the solution to the system.

Most linear equations in one variable have one solution, but some, called
contradictions, have no solutions, and for others, called identities, all
numbers are solutions. Similarly, when we solve a system of two linear
equations represented by a graph of two lines in the same plane, there are
three possible cases.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A grid from −8 to 8 horizontally and −8 to 10 vertically, numbered every 2 units, showing a line falling steeply through (0, 7) and a line rising gently through (0, −3), crossing at the marked point (4, −1).","xMin":-8,"xMax":8,"yMin":-8,"yMax":10,"unit":20,"tickLabels":true,"tickStep":2,"lines":[{"slope":-2,"intercept":7},{"slope":0.5,"intercept":-3}],"points":[{"at":[4,-1]}]}
{{< /apfigure >}}

**The lines intersect.** Intersecting lines have one point in common. There is one solution to this system.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A grid from −8 to 8 on both axes, numbered every 2 units, showing two parallel lines rising at the same rate, one through (0, 3) and the other through (0, −2), never crossing.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":20,"tickLabels":true,"tickStep":2,"lines":[{"slope":0.4,"intercept":3},{"slope":0.4,"intercept":-2}]}
{{< /apfigure >}}

**The lines are parallel.** Parallel lines have no points in common. There is no solution to this system.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A grid from −8 to 8 on both axes, numbered every 2 units, showing a single line rising steeply through (0, −3); both equations of the system graph as this one line.","xMin":-8,"xMax":8,"yMin":-8,"yMax":8,"unit":20,"tickLabels":true,"tickStep":2,"lines":[{"slope":2,"intercept":-3}]}
{{< /apfigure >}}

**Both equations give the same line.** Because we have only one line, there are infinitely many solutions.

Each time we demonstrate a new method, we will use it on the same system of
linear equations, $\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6 \end{array}\right.$.
At the end of the section you will decide which method was the most
convenient way to solve this system.

**Example. How to solve a system of equations by graphing.** Solve the
system by graphing: $\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6 \end{array}\right.$.

To graph the first line, write $2x+y=7$ in slope–intercept form:
$y=-2x+7$, so $m=-2$ and $b=7$. To graph the second line, use its
intercepts: $x-2y=6$ passes through $(0,-3)$ and $(6,0)$. Graph both lines
on the same rectangular coordinate system, then look for where they cross.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A grid from −7 to 7 on both axes, numbered every 2 units, showing the line 2x + y = 7 through (0, 7) and the line x − 2y = 6 through (0, −3) and (6, 0), crossing at the point (4, −1).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":2,"lines":[{"slope":-2,"intercept":7,"label":"2x + y = 7"},{"slope":0.5,"intercept":-3,"label":"x − 2y = 6"}],"points":[{"at":[4,-1],"label":"(4, −1)","labelSide":"se","labelNudge":[4,0]}]}
{{< /apfigure >}}

The lines intersect at $(4,-1)$. Since the lines intersect, we identify the
point of intersection and check that it is a solution to both equations.

$$
\begin{array}{lrcl}
2x+y=7: & 2(4)+(-1) &\overset{?}{=}& 7 \\[4pt]
& 7 &=& 7\ \checkmark \\[4pt]
x-2y=6: & 4-2(-1) &\overset{?}{=}& 6 \\[4pt]
& 6 &=& 6\ \checkmark
\end{array}
$$

The solution to the system is $(4,-1)$.

{{< graphplot
  question="Solve the system by graphing: $\{x-3y=-3,\ x+y=5\}$."
  answerDisplay="The lines $x-3y=-3$ and $x+y=5$, which cross at $(3,2)$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
  hint="For each equation, find two points on its line — its intercepts, or its slope and $y$-intercept after solving for $y$ — and draw the line through them."
>}}
{"answer":{"system":[{"slope":0.3333333333333333,"intercept":1},{"slope":-1,"intercept":5}]},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":6}}
{{< /graphplot >}}

{{< callout type="info" >}}
  **Solve a system of linear equations by graphing.**

  1. Graph the first equation.
  2. Graph the second equation on the same rectangular coordinate system.
  3. Determine whether the lines intersect, are parallel, or are the same
     line.
  4. Identify the solution to the system.
     - If the lines intersect, identify the point of intersection. Check
       that it is a solution to both equations. This is the solution to the
       system.
     - If the lines are parallel, the system has no solution.
     - If the lines are the same, the system has an infinite number of
       solutions.
  5. Check the solution in both equations.
{{< /callout >}}

In the next example, we will first rewrite both equations in
slope–intercept form, since that makes them quick to graph.

**Example.** Solve the system by graphing: $\left\{\begin{array}{l}
3x+y=-1 \\ 2x+y=0 \end{array}\right.$.

We solve both equations for $y$ so we can graph them using their slopes and
$y$-intercepts.

$$
\begin{array}{lrcl}
\text{Solve the first equation for }y. & 3x+y &=& -1 \\[4pt]
\text{Simplify.} & y &=& -3x-1 \\[4pt]
\text{Solve the second equation for }y. & 2x+y &=& 0 \\[4pt]
\text{Simplify.} & y &=& -2x
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"A grid from −7 to 7 on both axes, numbered every unit, showing the line y = −3x − 1 through (0, −1) and the line y = −2x through the origin, crossing at the point (−1, 2).","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":-3,"intercept":-1},{"slope":-2,"intercept":0}],"points":[{"at":[-1,2],"label":"(−1, 2)","labelSide":"w"}],"texts":[{"at":[2.2,-8.3],"text":"y = −3x − 1","anchor":"end"},{"at":[3.4,-8.3],"text":"y = −2x"}]}
{{< /apfigure >}}

The lines intersect at $(-1,2)$. Check the solution in both equations:

$$
\begin{array}{lrcl}
3x+y=-1: & 3(-1)+2 &\overset{?}{=}& -1 \\[4pt]
& -1 &=& -1\ \checkmark \\[4pt]
2x+y=0: & 2(-1)+2 &\overset{?}{=}& 0 \\[4pt]
& 0 &=& 0\ \checkmark
\end{array}
$$

The solution is $(-1,2)$.

In all the systems of linear equations so far, the lines intersected and
the solution was one point. In the next two examples we'll look at a system
that has no solution and at a system that has an infinite number of
solutions.

**Example.** Solve the system by graphing: $\left\{\begin{array}{l}
y=\tfrac{1}{2}x-3 \\ x-2y=4 \end{array}\right.$.

The first equation is already solved for $y$: $m=\tfrac{1}{2}$, $b=-3$. To
graph the second equation, solve it for $y$ as well: $x-2y=4$ becomes
$y=\tfrac{1}{2}x-2$, so $m=\tfrac{1}{2}$, $b=-2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A grid from −7 to 7 on both axes, numbered every unit, showing the parallel lines y = ½x − 3 through (0, −3) and x − 2y = 4 through (0, −2) and (4, 0), which never intersect.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":0.5,"intercept":-3,"label":"y = ½x − 3"},{"slope":0.5,"intercept":-2,"label":"x − 2y = 4"}]}
{{< /apfigure >}}

The lines are parallel. Since no point is on both lines, there is no
ordered pair that makes both equations true. There is no solution to this
system.

{{< multiplechoice
  question="Solve the system by graphing: $\{y=-\tfrac{1}{4}x+2,\ x+4y=-8\}$. How many solutions does the system have?"
  hint="Solve the second equation for y and compare its slope and y-intercept to the first equation."
  answer="no solution"
>}}
one solution
infinitely many solutions
no solution
{{< /multiplechoice >}}

Sometimes the equations in a system represent the same line. Since every
point on the line makes both equations true, there are infinitely many
ordered pairs that make both equations true — there are infinitely many
solutions to the system.

**Example.** Solve the system by graphing: $\left\{\begin{array}{l} y=2x-3
\\ -6x+3y=-9 \end{array}\right.$.

The first equation is already solved for $y$: $m=2$, $b=-3$. If you write
the second equation in slope–intercept form, you'll find it has the same
slope and same $y$-intercept.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A grid from −7 to 7 on both axes, numbered every unit, showing a single line through (0, −3) and (2, 1), since y = 2x − 3 and −6x + 3y = −9 graph as the same line.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":20,"tickLabels":true,"tickStep":1,"lines":[{"slope":2,"intercept":-3,"label":"y = 2x − 3"}]}
{{< /apfigure >}}

The lines are the same! Since every point on the line makes both equations
true, there are infinitely many ordered pairs that make both equations
true. There are infinitely many solutions to this system.

{{< multiplechoice
  question="Solve the system by graphing: $\{y=-3x-6,\ 6x+2y=-12\}$. How many solutions does the system have?"
  hint="Solve the second equation for y — if it matches the first equation exactly, the lines are coincident."
  answer="infinitely many solutions"
>}}
one solution
infinitely many solutions
no solution
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **Coincident lines.** Coincident lines have the same slope and the same
  $y$-intercept.
{{< /callout >}}

The systems in the first two graphing examples each had two intersecting
lines, so each had one solution. In the last example, the equations gave
coincident lines, so the system had infinitely many solutions. The systems
in those three examples had at least one solution. A system of equations
that has at least one solution is called a *consistent* system. A system
with parallel lines, like the system $y=\tfrac{1}{2}x-3$, $x-2y=4$, has no
solution — we call a system like this *inconsistent*.

{{< callout type="info" >}}
  **Consistent and inconsistent systems.** A **consistent system** of
  equations is a system of equations with at least one solution. An
  **inconsistent system** of equations is a system of equations with no
  solution.
{{< /callout >}}

We also categorize the equations in a system as *independent* or
*dependent*. If two equations are independent, they each have their own set
of solutions — intersecting lines and parallel lines are both independent.
If two equations are dependent, all the solutions of one equation are also
solutions of the other equation; when we graph two dependent equations, we
get coincident lines.

{{< callout type="info" >}}
  **Independent and dependent equations.** Two equations are **independent**
  if they each have their own set of solutions. Two equations are
  **dependent** if all the solutions of one equation are also solutions of
  the other equation.
{{< /callout >}}

| Lines | Intersecting | Parallel | Coincident |
| :--- | :---: | :---: | :---: |
| Number of solutions | $1$ point | No solution | Infinitely many |
| Consistent/inconsistent | Consistent | Inconsistent | Consistent |
| Dependent/independent | Independent | Independent | Dependent |

We can tell which case we're in *without graphing*, just by comparing the
slopes and intercepts of the two lines. Write each equation in
slope–intercept form and compare.

**Example.** Without graphing, determine the number of solutions and then
classify the system of equations: (a) $\left\{\begin{array}{l} y=3x-1 \\
6x-2y=12 \end{array}\right.$ (b) $\left\{\begin{array}{l} 2x+y=-3 \\
x-5y=5 \end{array}\right.$.

(a) The first equation is already in slope–intercept form. Write the second
equation in slope–intercept form too:

$$
\begin{array}{lrcl}
\text{The first equation is already in this form.} & y &=& 3x-1 \\[4pt]
\text{Write the second equation in slope–intercept form.} & 6x-2y &=& 12 \\[4pt]
& -2y &=& -6x+12 \\[4pt]
& y &=& 3x-6
\end{array}
$$

Since the slopes are the same ($m=3$) and the $y$-intercepts are different
($-1$ and $-6$), the lines are parallel. A system of equations whose graphs
are parallel lines has no solution and is inconsistent and independent.

(b) Write both equations in slope–intercept form:

$$
\begin{array}{lrcl}
\text{Solve the first equation for }y. & 2x+y &=& -3 \\[4pt]
& y &=& -2x-3 \\[4pt]
\text{Solve the second equation for }y. & x-5y &=& 5 \\[4pt]
& -5y &=& -x+5 \\[4pt]
& y &=& \tfrac{1}{5}x-1
\end{array}
$$

Since the slopes are different, the lines intersect. A system of equations
whose graphs intersect has one solution and is consistent and independent.

{{< fillin
  question="For the system $\{y=-2x-4,\ 4x+2y=9\}$, solve the second equation for $y$. What is the slope of its line?"
  answer="-2"
  answerForm="decimal"
  hint="Subtract 4x from both sides, then divide every term by 2."
>}}

{{< multiplechoice
  question="Without graphing, determine the number of solutions of the system $\{y=-2x-4,\ 4x+2y=9\}$."
  hint="Write both equations in slope-intercept form and compare their slopes and y-intercepts."
  answer="no solution"
>}}
no solution
one solution
infinitely many solutions
{{< /multiplechoice >}}

Solving systems of linear equations by graphing is a good way to visualize
the types of solutions that may result. However, there are many cases where
solving a system by graphing is inconvenient or imprecise. If the graphs
extend beyond a small grid, graphing the lines may be cumbersome. And if the
solutions to the system are not integers, it can be hard to read their
values precisely from a graph.

## Solve a system of equations by substitution

We will now solve systems of linear equations by the substitution method.
We will use the same system we used first for graphing.

$$\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6 \end{array}\right.$$

We will first solve one of the equations for either $x$ or $y$. We can
choose either equation and solve for either variable — but we'll try to
make a choice that will keep the work easy. Then we substitute that
expression into the other equation. The result is an equation with just one
variable — and we know how to solve those! After we find the value of one
variable, we substitute that value into one of the original equations and
solve for the other variable. Finally, we check our solution and make sure
it makes both equations true.

**Example. How to solve a system of equations by substitution.** Solve the
system by substitution: $\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6
\end{array}\right.$.

| Step | What to do | Result |
| :--- | :--- | :--- |
| 1. Solve one of the equations for either variable. | We'll solve the first equation for $y$. | $2x+y=7$ becomes $y=7-2x$ |
| 2. Substitute the expression from Step 1 into the other equation. | Replace $y$ in the second equation with $7-2x$. | $x-2(7-2x)=6$ |
| 3. Solve the resulting equation. | Now we have an equation with just one variable. | $x-14+4x=6$, so $5x=20$, so $x=4$ |
| 4. Substitute the solution from Step 3 into one of the original equations to find the other variable. | We'll use the first equation and replace $x$ with $4$. | $2(4)+y=7$, so $8+y=7$, so $y=-1$ |
| 5. Write the solution as an ordered pair. | The ordered pair is $(x,y)$. | $(4,-1)$ |
| 6. Check that the ordered pair is a solution to both original equations. | Substitute $(4,-1)$ into both equations. | $\begin{aligned} 2(4)+(-1) &\overset{?}{=} 7, \text{ so } 7=7\ \checkmark \\ 4-2(-1) &\overset{?}{=} 6, \text{ so } 6=6\ \checkmark \end{aligned}$ |

Both equations are true, so $(4,-1)$ is the solution to the system.

{{< fillin
  question="Solve the system by substitution: $\{-2x+y=-11,\ x+3y=9\}$. Enter the solution as an ordered pair."
  answer="(6,1)"
  answerForm="decimal"
  answerDisplay="$(6,1)$"
  hint="Solve the first equation for y, then substitute that expression for y in the second equation."
>}}

{{< callout type="info" >}}
  **Solve a system of equations by substitution.**

  1. Solve one of the equations for either variable.
  2. Substitute the expression from Step 1 into the other equation.
  3. Solve the resulting equation.
  4. Substitute the solution in Step 3 into one of the original equations to
     find the other variable.
  5. Write the solution as an ordered pair.
  6. Check that the ordered pair is a solution to both original equations.
{{< /callout >}}

Be very careful with the signs in the next example.

**Example.** Solve the system by substitution: $\left\{\begin{array}{l}
4x+2y=4 \\ 6x-y=8 \end{array}\right.$.

We need to solve one equation for one variable. We'll solve the first
equation for $y$.

$$
\begin{array}{lrcl}
\text{Solve the first equation for }y. & 4x+2y &=& 4 \\[4pt]
& 2y &=& -4x+4 \\[4pt]
& y &=& -2x+2 \\[4pt]
\text{Substitute }-2x+2\text{ for }y\text{ in the second equation.} & 6x-(-2x+2) &=& 8 \\[4pt]
\text{Solve the equation for }x. & 6x+2x-2 &=& 8 \\[4pt]
& 8x &=& 10 \\[4pt]
& x &=& \tfrac{5}{4}
\end{array}
$$

Substitute $x=\tfrac{5}{4}$ into $4x+2y=4$ to find $y$:

$$
\begin{array}{lrcl}
& 4\left(\tfrac{5}{4}\right)+2y &=& 4 \\[10pt]
& 5+2y &=& 4 \\[4pt]
& 2y &=& -1 \\[4pt]
& y &=& -\tfrac{1}{2}
\end{array}
$$

The ordered pair is $\left(\tfrac{5}{4},-\tfrac{1}{2}\right)$. Check this
pair in both original equations:

$$
\begin{array}{lrcl}
4x+2y=4: & 4\left(\tfrac{5}{4}\right)+2\left(-\tfrac{1}{2}\right) &\overset{?}{=}& 4 \\[10pt]
& 5-1 &\overset{?}{=}& 4 \\[4pt]
& 4 &=& 4\ \checkmark \\[10pt]
6x-y=8: & 6\left(\tfrac{5}{4}\right)-\left(-\tfrac{1}{2}\right) &\overset{?}{=}& 8 \\[10pt]
& \tfrac{15}{2}+\tfrac{1}{2} &\overset{?}{=}& 8 \\[10pt]
& 8 &=& 8\ \checkmark
\end{array}
$$

Both check out, so the solution is $\left(\tfrac{5}{4},-\tfrac{1}{2}\right)$.

{{< fillin
  question="Solve the system by substitution: $\{x-4y=-4,\ -3x+4y=0\}$. Enter the solution as an ordered pair."
  answer="(2,\frac{3}{2})"
  answerForm="lowest-terms"
  answerDisplay="$(2,\tfrac{3}{2})$"
  hint="Solve the first equation for x, since its coefficient is already 1, then substitute into the second equation."
>}}

## Solve a system of equations by elimination

We have solved systems of linear equations by graphing and by substitution.
Graphing works well when the coefficients are small and the solution has
integer values. Substitution works well when one equation is already solved
for a variable, or can easily be solved for one.

The third method for solving systems of linear equations is called
**elimination**. It is based on the Addition Property of Equality, which
says that when you add the same quantity to both sides of an equation, you
still have equality. We extend that idea: for any expressions $a,b,c,d$, if
$a=b$ and $c=d$, then $a+c=b+d$.

To solve a system of equations by elimination, we start with both equations
in standard form. Then we decide which variable will be easiest to
eliminate. We want the coefficients of that variable to be opposites, so
that adding the equations eliminates it. Notice how that works when we add
these two equations together:

$$
\begin{array}{rcl}
3x+y &=& 5 \\
2x-y &=& 0 \\ \hline
5x &=& 5
\end{array}
$$

The $y$'s add to zero, and we're left with one equation in one variable.

Let's try another one:

$$\left\{\begin{array}{l} x+4y=2 \\ 2x+5y=-2 \end{array}\right.$$

This time we don't see a variable that can be immediately eliminated if we
add the equations. But if we multiply the first equation by $-2$, we will
make the coefficients of $x$ opposite. We must multiply every term on both
sides of the equation by $-2$:

$$
\begin{array}{rcl}
-2(x+4y) &=& -2(2) \\
2x+5y &=& -2
\end{array}
$$

Then rewrite the system of equations:

$$
\begin{array}{rcl}
-2x-8y &=& -4 \\
2x+5y &=& -2
\end{array}
$$

Now the coefficients of the $x$ terms are opposites, so $x$ will be
eliminated when we add these two equations:

$$
\begin{array}{rcl}
-2x-8y &=& -4 \\
2x+5y &=& -2 \\ \hline
-3y &=& -6
\end{array}
$$

Once we have an equation with just one variable, we solve it, substitute
that value into one of the original equations, and solve for the remaining
variable — and, as always, check the answer in *both* original equations.

**Example. How to solve a system of equations by elimination.** Solve the
system by elimination: $\left\{\begin{array}{l} 2x+y=7 \\ x-2y=6
\end{array}\right.$.

| Step | What to do | Result |
| :--- | :--- | :--- |
| 1. Write both equations in standard form. If any coefficients are fractions, clear them. | Both equations are already in standard form, with no fractions. | |
| 2. Make the coefficients of one variable opposites. Decide which variable to eliminate, then multiply one or both equations so its coefficients become opposites. | We can eliminate $y$ by multiplying the first equation by $2$. | $\begin{aligned} 2(2x+y) &= 2(7) \\ 4x+2y &= 14 \end{aligned}$ |
| 3. Add the equations resulting from Step 2 to eliminate one variable. | Add the $x$'s, $y$'s, and constants. | $\begin{array}{rcl} 4x+2y &=& 14 \\ x-2y &=& 6 \\ \hline 5x &=& 20 \end{array}$ |
| 4. Solve for the remaining variable. | Divide both sides by $5$. | $x=4$ |
| 5. Substitute the solution from Step 4 into one of the original equations, then solve for the other variable. | Substitute $x=4$ into $x-2y=6$. | $\begin{aligned} 4-2y &= 6 \\ y &= -1 \end{aligned}$ |
| 6. Write the solution as an ordered pair. | | $(4,-1)$ |
| 7. Check that the ordered pair is a solution to **both** original equations. | Substitute $(4,-1)$ into both equations. | $\begin{aligned} 2(4)+(-1) &\overset{?}{=} 7, \text{ so } 7=7\ \checkmark \\ 4-2(-1) &\overset{?}{=} 6, \text{ so } 6=6\ \checkmark \end{aligned}$ |

{{< fillin
  question="Solve the system by elimination: $\{3x+y=5,\ 2x-3y=7\}$. Enter the solution as an ordered pair."
  answer="(2,-1)"
  answerForm="decimal"
  answerDisplay="$(2,-1)$"
  hint="The y-coefficients (1 and -3) aren't opposites yet — multiply the first equation by 3 first."
>}}

{{< callout type="info" >}}
  **Solve a system of equations by elimination.**

  1. Write both equations in standard form. If any coefficients are
     fractions, clear them.
  2. Make the coefficients of one variable opposites.
     - Decide which variable you will eliminate.
     - Multiply one or both equations so that the coefficients of that
       variable are opposites.
  3. Add the equations resulting from Step 2 to eliminate one variable.
  4. Solve for the remaining variable.
  5. Substitute the solution from Step 4 into one of the original
     equations. Then solve for the other variable.
  6. Write the solution as an ordered pair.
  7. Check that the ordered pair is a solution to **both** original
     equations.
{{< /callout >}}

**Example.** Solve the system by elimination: $\left\{\begin{array}{l}
4x-3y=9 \\ 7x+2y=-6 \end{array}\right.$.

Neither variable can be eliminated by multiplying just one equation. To
make the $y$-coefficients opposite, multiply the first equation by $2$ and
the second by $3$:

$$
\left\{\begin{array}{l} 2(4x-3y)=2(9) \\ 3(7x+2y)=3(-6) \end{array}\right.
\quad\Longrightarrow\quad
\left\{\begin{array}{l} 8x-6y=18 \\ 21x+6y=-18 \end{array}\right.
$$

Adding these equations eliminates $y$:

$$
\begin{array}{rcl}
8x-6y &=& 18 \\
21x+6y &=& -18 \\ \hline
29x &=& 0
\end{array}
$$

So $x=0$. Substituting $x=0$ into $7x+2y=-6$ gives $2y=-6$, so $y=-3$. The
solution is $(0,-3)$.

{{< fillin
  question="Solve the system by elimination: $\{3x-4y=-9,\ 5x+3y=14\}$. Enter the solution as an ordered pair."
  answer="(1,3)"
  answerForm="decimal"
  answerDisplay="$(1,3)$"
  hint="Multiply the first equation by 3 and the second by 4 so the y-coefficients become opposites."
>}}

When a system has fractions, clear them first by multiplying each equation
by its LCD — then eliminate as usual.

**Example.** Solve the system by elimination: $\left\{\begin{array}{l}
x+\tfrac{1}{2}y=6 \\ \tfrac{3}{2}x+\tfrac{2}{3}y=\tfrac{17}{2}
\end{array}\right.$.

To clear the fractions, multiply each equation by its LCD:

$$
\left\{\begin{array}{l} 2\left(x+\tfrac{1}{2}y\right)=2(6) \\
6\left(\tfrac{3}{2}x+\tfrac{2}{3}y\right)=6\left(\tfrac{17}{2}\right)
\end{array}\right.
\quad\Longrightarrow\quad
\left\{\begin{array}{l} 2x+y=12 \\ 9x+4y=51 \end{array}\right.
$$

To eliminate $y$, multiply the first equation by $-4$:

$$
\begin{array}{rcl}
-8x-4y &=& -48 \\
9x+4y &=& 51 \\ \hline
x &=& 3
\end{array}
$$

Substitute $x=3$ into $x+\tfrac{1}{2}y=6$ to find $y$:
$3+\tfrac{1}{2}y=6$, so $\tfrac{1}{2}y=3$, and $y=6$. The ordered pair is
$(3,6)$. Check it in both original equations — both are true, so the
solution is $(3,6)$.

{{< fillin
  question="Solve the system by elimination: $\{\tfrac{1}{3}x-\tfrac{1}{2}y=1,\ \tfrac{3}{4}x-y=\tfrac{5}{2}\}$. Enter the solution as an ordered pair."
  answer="(6,2)"
  answerForm="decimal"
  answerDisplay="$(6,2)$"
  hint="Multiply the first equation by 6 and the second by 4 to clear the fractions first."
>}}

Not every system has exactly one solution. Recall from graphing that two
equations describing the same line have infinitely many solutions (a
consistent, dependent system), and two equations describing parallel lines
have no solution at all (an inconsistent system). Elimination reveals both
cases too: if the equation at the end of elimination is a true statement,
the system is consistent but dependent and has infinitely many solutions;
if it's a false statement, the system is inconsistent and has no solution.

**Example.** Solve the system by elimination: $\left\{\begin{array}{l}
3x+4y=12 \\ y=3-\tfrac{3}{4}x \end{array}\right.$.

Write the second equation in standard form: $\tfrac{3}{4}x+y=3$;
multiplying by $4$ clears the fraction: $3x+4y=12$ — the very same equation
as the first! Multiplying this equation by $-1$ and adding it to the first
equation gives $0=0$, a true statement. The system is consistent but
dependent: the two equations describe the same (coincident) line, so the
system has infinitely many solutions.

{{< multiplechoice
  question="Solve the system by elimination: $\{5x-3y=15,\ y=-5+\tfrac{5}{3}x\}$. How many solutions does the system have?"
  hint="Rewrite the second equation in standard form and compare it to the first equation."
  answer="infinitely many solutions"
>}}
infinitely many solutions
exactly one solution
no solution
{{< /multiplechoice >}}

## Choose the most convenient method to solve a system of linear equations

When you solve a system of linear equations in an application, you will not
be told which method to use. You will need to make that decision yourself,
so it helps to recognize which method is easiest for a given system.

| Graphing | Substitution | Elimination |
| :--- | :--- | :--- |
| Use when you need a picture of the situation. | Use when one equation is already solved for one variable, or can easily be solved for one. | Use when the equations are already in standard form. |

**Example.** For each system of linear equations, decide whether it would
be more convenient to solve it by substitution or elimination: (a)
$\left\{\begin{array}{l} 3x+8y=40 \\ 7x-4y=-32 \end{array}\right.$ (b)
$\left\{\begin{array}{l} 5x+6y=12 \\ y=\tfrac{2}{3}x-1 \end{array}\right.$.

(a) Since both equations are already in standard form, using elimination
will be most convenient.

(b) Since one equation is already solved for $y$, using substitution will
be most convenient.

{{< multiplechoice
  question="Would it be more convenient to solve the system $\{4x-5y=-32,\ 3x+2y=-1\}$ by substitution or by elimination?"
  hint="Look at the form each equation is written in, then recall when each method is most convenient."
  answer="elimination"
>}}
elimination
substitution
{{< /multiplechoice >}}

{{< multiplechoice
  question="Would it be more convenient to solve the system $\{x=2y-1,\ 3x-5y=-7\}$ by substitution or by elimination?"
  hint="Look at the form each equation is written in, then recall when each method is most convenient."
  answer="substitution"
>}}
substitution
elimination
{{< /multiplechoice >}}

## Key terms

**system of linear equations** — two or more linear equations grouped
together. **solution of a system of equations** — an ordered pair $(x,y)$
that makes all the equations in the system true. **coincident lines** —
lines with the same slope and the same $y$-intercept; they graph as a
single line. **consistent system** — a system of equations with at least
one solution. **inconsistent system** — a system of equations with no
solution. **independent equations** — two equations that each have
their own set of solutions (intersecting or parallel lines). **dependent equations** — two
equations whose solutions are identical (coincident lines). **substitution
method** — solving one equation of a system for a variable, then replacing
that variable with the resulting expression in the other equation.
**elimination method** — adding two equations (after multiplying by
constants if necessary) so that one variable cancels out.

## Practice

### Determine whether an ordered pair is a solution of a system of equations

{{< multiplechoice
  question="Is $(3,1)$ a solution to the system $\{2x-6y=0,\ 3x-4y=5\}$?"
  hint="Substitute x=3 and y=1 into both equations and check whether each one is true."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-3,4)$ a solution to the system $\{2x-6y=0,\ 3x-4y=5\}$?"
  hint="Substitute x=-3 and y=4 into both equations and check whether each one is true."
  answer="no"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(\tfrac{8}{7},\tfrac{6}{7})$ a solution to the system $\{x+y=2,\ y=\tfrac{3}{4}x\}$?"
  hint="Substitute x=8/7 and y=6/7 into both equations and check whether each one is true."
  answer="yes"
>}}
no
yes
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(1,\tfrac{3}{4})$ a solution to the system $\{x+y=2,\ y=\tfrac{3}{4}x\}$?"
  hint="Substitute x=1 and y=3/4 into both equations and check whether each one is true."
  answer="no"
>}}
no
yes
{{< /multiplechoice >}}

### Solve a system of linear equations by graphing

{{< graphplot
  question="Solve the system by graphing: $\{3x+y=-3,\ 2x+3y=5\}$."
  answerDisplay="The lines $3x+y=-3$ and $2x+3y=5$, which cross at $(-2,3)$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
  hint="For each equation, find two points on its line — its intercepts, or its slope and $y$-intercept after solving for $y$ — and draw the line through them."
>}}
{"answer":{"system":[{"slope":-3,"intercept":-3},{"slope":-0.6666666666666666,"intercept":1.6666666666666667}]},"grid":{"xMin":-6,"xMax":6,"yMin":-6,"yMax":6}}
{{< /graphplot >}}

{{< multiplechoice
  question="Which graph shows the solution of the system $\{y=x+2,\ y=-2x+2\}$?"
  mode="graph"
  answerIndex="1"
  hint="Both equations are already solved for $y$ — graph each line from its slope and $y$-intercept, then find where the two lines cross."
>}}
{"ariaLabel":"A gently rising line and a steeply falling line, crossing each other on the y-axis below the origin.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":1,"intercept":-2},{"slope":-2,"intercept":-2}],"points":[{"at":[0,-2]}]}
===OPT===
{"ariaLabel":"A gently rising line and a steeply falling line, crossing each other on the y-axis above the origin.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":1,"intercept":2},{"slope":-2,"intercept":2}],"points":[{"at":[0,2]}]}
===OPT===
{"ariaLabel":"Two parallel lines rising at the same rate, one meeting the y-axis above the origin and the other below it, never crossing.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":1,"intercept":2},{"slope":1,"intercept":-2}]}
===OPT===
{"ariaLabel":"Two lines that both rise to the right, one more steeply than the other, crossing each other on the y-axis above the origin.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"unit":22,"tickLabels":true,"tickStep":1,"lines":[{"slope":1,"intercept":2},{"slope":2,"intercept":2}],"points":[{"at":[0,2]}]}
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve the system by graphing: $\{-2x+4y=4,\ y=\tfrac{1}{2}x\}$. How many solutions does the system have?"
  hint="Write the first equation in slope-intercept form and compare its slope and y-intercept to the second equation."
  answer="no solution"
>}}
no solution
one solution
infinitely many solutions
{{< /multiplechoice >}}

### Solve a system of equations by substitution

{{< fillin
  question="Solve the system by substitution: $\{2x+y=-2,\ 3x-y=7\}$. Enter the solution as an ordered pair."
  answer="(1,-4)"
  answerForm="decimal"
  answerDisplay="$(1,-4)$"
  hint="Solve the first equation for y, then substitute that expression for y in the second equation."
>}}

{{< fillin
  question="Solve the system by substitution: $\{x-3y=-9,\ 2x+5y=4\}$. Enter the solution as an ordered pair."
  answer="(-3,2)"
  answerForm="decimal"
  answerDisplay="$(-3,2)$"
  hint="Solve the first equation for x, then substitute that expression for x in the second equation."
>}}

{{< multiplechoice
  question="Solve the system by substitution: $\{y=-\tfrac{2}{3}x+5,\ 2x+3y=11\}$. How many solutions does the system have?"
  hint="Substitute the expression for y into the second equation and see what kind of equation results."
  answer="no solution"
>}}
no solution
infinitely many solutions
one solution
{{< /multiplechoice >}}

### Solve a system of equations by elimination

{{< fillin
  question="Solve the system by elimination: $\{6x-5y=-1,\ 2x+y=13\}$. Enter the solution as an ordered pair."
  answer="(4,5)"
  answerForm="decimal"
  answerDisplay="$(4,5)$"
  hint="Multiply the second equation by 5 so the y-coefficients become opposites, then add the equations."
>}}

{{< fillin
  question="Solve the system by elimination: $\{5x-3y=-1,\ 2x-y=2\}$. Enter the solution as an ordered pair."
  answer="(7,12)"
  answerForm="decimal"
  answerDisplay="$(7,12)$"
  hint="Multiply the second equation by -3 so the y-coefficients become opposites, then add the equations."
>}}

{{< multiplechoice
  question="Solve the system by elimination: $\{x-4y=-1,\ -3x+12y=3\}$. How many solutions does the system have?"
  hint="Multiply the first equation by 3 and add it to the second equation — see what kind of statement results."
  answer="infinitely many solutions"
>}}
one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

### Choose the most convenient method to solve a system of linear equations

{{< multiplechoice
  question="Would it be more convenient to solve the system $\{y=7x-5,\ 3x-2y=16\}$ by substitution or by elimination?"
  hint="Look at the form each equation is written in, then recall when each method is most convenient."
  answer="substitution"
>}}
elimination
substitution
{{< /multiplechoice >}}

{{< multiplechoice
  question="Would it be more convenient to solve the system $\{12x-5y=-42,\ 3x+7y=-15\}$ by substitution or by elimination?"
  hint="Look at the form each equation is written in, then recall when each method is most convenient."
  answer="elimination"
>}}
substitution
elimination
{{< /multiplechoice >}}

{{< multiplechoice
  question="Would it be more convenient to solve the system $\{14x-15y=-30,\ 7x+2y=10\}$ by substitution or by elimination?"
  hint="Look at the form each equation is written in, then recall when each method is most convenient."
  answer="elimination"
>}}
substitution
elimination
{{< /multiplechoice >}}

{{< multiplechoice
  question="Would it be more convenient to solve the system $\{x=9y-11,\ 2x-7y=-27\}$ by substitution or by elimination?"
  hint="Look at the form each equation is written in, then recall when each method is most convenient."
  answer="substitution"
>}}
substitution
elimination
{{< /multiplechoice >}}

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.1: Solve Systems of Linear Equations with Two Variables](https://openstax.org/books/intermediate-algebra-2e/pages/4-1-solve-systems-of-linear-equations-with-two-variables) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: redrew the coordinate-plane figures (the intersecting/parallel/coincident overview and the four worked graphing examples) as accessible graphs on the source's numbered grids (the intersecting-lines panel runs to 10 on the y-axis so the steep line clears the tick numbers), adding equation labels to the worked-example graphs; recast the multi-step "How To" examples as step tables and equation-alignment arrays; omitted the Be Prepared quiz and Self Check checklist; adapted selected end-of-section exercises with answers confirmed in the Answer Key into an interactive section-final Practice block covering all five objectives; added independent and dependent equations and the substitution and elimination methods to the key terms; converted the Try Its into interactive exercises with instant feedback — reducing (a)/(b) sub-parts to a single representative exercise, turning ordered-pair-check, classification, and choose-the-method questions into multiple choice, since a yes/no or word answer of that kind cannot be graded as a math expression, and splitting the first classify-without-graphing Try It into a fill-in for the second line's slope and a multiple choice for the number of solutions; and posed one end-of-section graphing exercise as a choose-the-graph multiple choice.</small>
