---
title: Solve Systems of Equations with Three Variables
description: >-
  Determining whether an ordered triple is a solution of a system of three
  linear equations with three variables, solving such systems by extending
  the elimination method (including the inconsistent and dependent cases),
  and solving applications — adapted from OpenStax Intermediate Algebra 2e,
  Section 4.4.
source_section: "4.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** determine whether an
  ordered triple is a solution of a system of three linear equations with
  three variables, solve a system of linear equations with three variables,
  and solve applications using systems of linear equations with three
  variables.
{{< /callout >}}

## Determine Whether an Ordered Triple Is a Solution of a System of Three Linear Equations with Three Variables

So far we have worked with systems of two equations and two variables. Now
we will extend that work to systems of three equations with three
variables. But first let's review what we already know about equations and
systems involving up to two variables.

The graph of a linear equation $ax+by=c$ is a line. Each point on the line —
an ordered pair $(x,y)$ — is a solution to the equation. For a system of
two equations with two variables, we graph two lines. The points the lines
have in common form the solution to the system. When we solve a system of
two linear equations, there are three possible cases: the lines intersect
in exactly one point (a **consistent, independent** system), the lines are
parallel and never meet (an **inconsistent** system, no solution), or the
two equations describe the same line, so every point on it is a solution
(a **consistent, dependent** system, infinitely many solutions).

Similarly, for a linear equation with three variables $ax+by+cz=d$, every
solution to the equation is an ordered triple, $(x,y,z)$, that makes the
equation true.

{{< callout type="info" >}}
  **Linear equation in three variables.** A linear equation with three
  variables, where $a$, $b$, $c$, and $d$ are real numbers and $a$, $b$, and
  $c$ are not all $0$, is of the form
  $$ax+by+cz=d.$$
  Every solution to the equation is an ordered triple, $(x,y,z)$, that makes
  the equation true.
{{< /callout >}}

All the points that are solutions to one such equation form a **plane** in
three-dimensional space, and solving a system of three linear equations
means finding what the three planes have in common. Just as with two
variables, there are three possible cases:

- **One solution.** The three planes intersect at a single point. This is a
  consistent system with independent equations.
- **No solution.** The planes have no point in common — for example, they
  may be parallel, or two may be parallel while the third cuts across both,
  or each pair of planes may intersect in a different line so that no point
  lies on all three. This is an **inconsistent** system.
- **Infinitely many solutions.** The planes intersect along a common line
  (or are all the same plane), so every point on that line — or plane — is
  a solution. This is a **consistent** system with **dependent** equations.

To solve a system of three linear equations, we want to find the values of
the variables that are solutions to all three equations. In other words, we
are looking for the ordered triple $(x,y,z)$ that makes all three equations
true. These are called the **solutions of the system of three linear
equations with three variables**.

{{< callout type="info" >}}
  **Solutions of a system of linear equations with three variables.**
  Solutions of a system of equations are the values of the variables that
  make all the equations true. A solution is represented by an **ordered
  triple** $(x,y,z)$.
{{< /callout >}}

To determine if an ordered triple is a solution to a system of three
equations, we substitute the values of the variables into each equation.
If the ordered triple makes all three equations true, it is a solution to
the system.

**Example.** Determine whether the ordered triple is a solution to the
system:
$$\left\{\begin{array}{l} x-y+z=2 \\ 2x-y-z=-6 \\ 2x+2y+z=-3 \end{array}\right.$$
(a) $(-2,-1,3)$ (b) $(-4,-3,4)$

(a) We substitute $x=-2$, $y=-1$, and $z=3$ into all three equations:

$$
\begin{array}{rcl}
-2-(-1)+3 &\overset{?}{=}& 2, \text{ so } 2=2\ \checkmark \\
2(-2)-(-1)-3 &\overset{?}{=}& -6, \text{ so } -6=-6\ \checkmark \\
2(-2)+2(-1)+3 &\overset{?}{=}& -3, \text{ so } -3=-3\ \checkmark
\end{array}
$$

$(-2,-1,3)$ makes all three equations true, so it is a solution.

(b) We substitute $x=-4$, $y=-3$, and $z=4$ into all three equations:

$$
\begin{array}{rcl}
-4-(-3)+4 &\overset{?}{=}& 2, \text{ so } 3\neq 2 \\
2(-4)-(-3)-4 &\overset{?}{=}& -6, \text{ so } -9\neq -6 \\
2(-4)+2(-3)+4 &\overset{?}{=}& -3, \text{ so } -10\neq -3
\end{array}
$$

$(-4,-3,4)$ does not make all three equations true, so it is not a
solution.

{{< multiplechoice
  question="Which ordered triple is a solution to the system $\left\{\begin{array}{l} 3x+y+z=2 \\ x+2y+z=-3 \\ 3x+y+2z=4 \end{array}\right.$?"
  hint="Substitute each triple into all three equations; the solution must make every equation true."
  answer="$(1,-3,2)$"
>}}
$(1,-3,2)$
$(4,-1,-5)$
{{< /multiplechoice >}}

## Solve a System of Linear Equations with Three Variables

To solve a system of linear equations with three variables, we basically
use the same techniques we used with systems that had two variables. We
start with two pairs of equations, and in each pair we eliminate the same
variable. This gives us a system of equations with only two variables — and
then we know how to solve that system!

Next, we use the values of the two variables we just found to go back to
an original equation and find the third variable. We write our answer as
an ordered triple and then check our results.

**Example.** Solve the system by elimination:
$$\left\{\begin{array}{l} x-2y+z=3 \\ 2x+y+z=4 \\ 3x+4y+3z=-1 \end{array}\right.$$

| Step | What to do | Result |
| :--- | :--- | :--- |
| 1. Write the equations in standard form. If any coefficients are fractions, clear them. | The equations are already in standard form, with no fractions. We label them (1), (2), and (3). | $\left\{\begin{array}{l} x-2y+z=3 \\ 2x+y+z=4 \\ 3x+4y+3z=-1 \end{array}\right.$ |
| 2. Eliminate the same variable from two equations. Decide which variable you will eliminate; work with a pair of equations, multiplying one or both so the coefficients of that variable are opposites, then add. | We eliminate the $y$'s from equations (1) and (2) by multiplying equation (2) by $2$, then adding the result to equation (1). This gives a new equation in $x$ and $z$ only — call it (4). | $\begin{aligned} x-2y+z &= 3 \\ 4x+2y+2z &= 8 \\ 5x+3z &= 11 \end{aligned}$ |
| 3. Repeat Step 2 using two other equations and eliminate the same variable. | We again eliminate $y$, this time from equations (1) and (3), by multiplying equation (1) by $2$, then adding. This gives equation (5). | $\begin{aligned} 2x-4y+2z &= 6 \\ 3x+4y+3z &= -1 \\ 5x+5z &= 5 \end{aligned}$ |
| 4. The two new equations form a system of two equations with two variables. Solve this system. | Equations (4) and (5) involve only $x$ and $z$. Multiplying (5) by $-1$ and adding it to (4) eliminates $x$. | $\begin{aligned} 5x+3z &= 11 \\ -5x-5z &= -5 \\ -2z &= 6 \end{aligned}$ so $z=-3$. Substituting into (4): $5x+3(-3)=11$, so $x=4$. |
| 5. Use the values of the two variables found in Step 4 to find the third variable. | Substitute $x=4$ and $z=-3$ into original equation (2) to find $y$. | $\begin{aligned} 2x+y+z &= 4 \\ 2(4)+y+(-3) &= 4 \\ y &= -1 \end{aligned}$ |
| 6. Write the solution as an ordered triple. | | $(4,-1,-3)$ |
| 7. Check that the ordered triple is a solution to **all three** original equations. | Substitute $(4,-1,-3)$ into each of the three original equations. | We'll leave the checks to you — each equation should come out true. |

{{< callout type="info" >}}
  **Solve a system of linear equations with three variables.**

  1. **Write the equations in standard form.** If any coefficients are
     fractions, clear them.
  2. **Eliminate the same variable from two equations.**
     - Decide which variable you will eliminate.
     - Work with a pair of equations to eliminate the chosen variable.
     - Multiply one or both equations so that the coefficients of that
       variable are opposites.
     - Add the equations to eliminate one variable.
  3. **Repeat Step 2** using two other equations and eliminate the same
     variable as in Step 2.
  4. The two new equations form a system of two equations with two
     variables. **Solve this system.**
  5. Use the values of the two variables found in Step 4 to **find the
     third variable.**
  6. **Write the solution as an ordered triple.**
  7. **Check** that the ordered triple is a solution to **all three**
     original equations.
{{< /callout >}}

{{< fillin
  question="Solve the system by elimination: $\left\{\begin{array}{l} 3x+y-z=2 \\ 2x-3y-2z=1 \\ 4x-y-3z=0 \end{array}\right.$ Enter the solution as an ordered triple $(x,y,z)$."
  answer="(2,-1,3)"
  answerDisplay="$(2,-1,3)$"
  hint="Add equations (1) and (3) to eliminate y directly, giving an equation in x and z. Separately, add 3 times equation (1) to equation (2) to get a second equation in x and z."
>}}

The system is easier to solve when each equation is already missing one of
the variables.

**Example.** Solve the system by elimination:
$$\left\{\begin{array}{l} 3x-4z=0 \\ 3y+2z=-3 \\ 2x+3y=-5 \end{array}\right.$$

Label the equations (1), (2), (3). Equation (1) is missing $y$, equation
(2) is missing $x$, and equation (3) is missing $z$. We can eliminate $z$
from (1) and (2) by multiplying (2) by $2$ and adding it to (1):

$$
\begin{array}{rcl}
3x-4z &=& 0 \\
6y+4z &=& -6 \\
3x+6y &=& -6
\end{array}
$$

Call this new equation (4). Now equations (3) and (4) both involve only $x$
and $y$:
$$\left\{\begin{array}{l} 2x+3y=-5 \\ 3x+6y=-6 \end{array}\right.$$
Multiplying (3) by $-2$ and adding it to (4) eliminates $y$:

$$
\begin{array}{rcl}
-4x-6y &=& 10 \\
3x+6y &=& -6 \\
-x &=& 4
\end{array}
$$

So $x=-4$. Substitute into (3) to find $y$:

$$
\begin{array}{lrcl}
& 2x+3y &=& -5 \\[4pt]
\text{Substitute }x=-4. & 2(-4)+3y &=& -5 \\[4pt]
& -8+3y &=& -5 \\[4pt]
& 3y &=& 3 \\[4pt]
& y &=& 1
\end{array}
$$

Substitute $x=-4$ into (1) to find $z$:

$$
\begin{array}{lrcl}
& 3x-4z &=& 0 \\[4pt]
\text{Substitute }x=-4. & 3(-4)-4z &=& 0 \\[4pt]
& -12-4z &=& 0 \\[4pt]
& z &=& -3
\end{array}
$$

The solution is $(-4,1,-3)$. Check that it makes all three original
equations true:

$$
\begin{array}{rcl}
3(-4)-4(-3) &\overset{?}{=}& 0, \text{ so } 0=0\ \checkmark \\
3(1)+2(-3) &\overset{?}{=}& -3, \text{ so } -3=-3\ \checkmark \\
2(-4)+3(1) &\overset{?}{=}& -5, \text{ so } -5=-5\ \checkmark
\end{array}
$$

{{< fillin
  question="Solve the system by elimination: $\left\{\begin{array}{l} 3x-4z=-1 \\ 2y+3z=2 \\ 2x+3y=6 \end{array}\right.$ Enter the solution as an ordered triple $(x,y,z)$."
  answer="(-3,4,-2)"
  answerDisplay="$(-3,4,-2)$"
  hint="Each equation is missing one variable. Eliminate z from the first two equations to get an equation in x and y, then combine that with the third equation."
>}}

When we solve a system and end up with no variables and a **false**
statement, the system has no solution. It is **inconsistent**.

**Example.** Solve the system of equations:
$$\left\{\begin{array}{l} x+2y-3z=-1 \\ x-3y+z=1 \\ 2x-y-2z=2 \end{array}\right.$$

Label the equations (1), (2), (3). Use (1) and (2) to eliminate $z$:
multiplying (2) by $3$ and adding it to (1) gives

$$
\begin{array}{rcl}
x+2y-3z &=& -1 \\
3x-9y+3z &=& 3 \\
4x-7y &=& 2
\end{array}
$$

— call this (4). Use (2) and (3) to eliminate $z$ again: multiplying (2) by
$2$ and adding it to (3) gives

$$
\begin{array}{rcl}
2x-6y+2z &=& 2 \\
2x-y-2z &=& 2 \\
4x-7y &=& 4
\end{array}
$$

— call this (5). Equations (4) and (5) have the same left side but
different constants. Multiplying (5) by $-1$ and adding it to (4):

$$
\begin{array}{rcl}
4x-7y &=& 2 \\
-4x+7y &=& -4 \\
0 &=& -2
\end{array}
$$

This is a false statement, so there is no solution. We are left with a
false statement, which tells us the system is inconsistent.

{{< multiplechoice
  question="Solve the system of equations: $\left\{\begin{array}{l} x+2y+6z=5 \\ -x+y-2z=3 \\ x-4y-2z=1 \end{array}\right.$ How many solutions does the system have?"
  hint="Add the first two equations to eliminate x, getting one equation in y and z. Then subtract the first equation from the third to eliminate x again, getting a second equation in y and z. Compare the two."
  answer="no solution"
>}}
exactly one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

When we solve a system and end up with no variables but a **true**
statement, the system has infinitely many solutions. It is **consistent**
with **dependent** equations, and the solution shows how two of the
variables depend on the third.

**Example.** Solve the system of equations:
$$\left\{\begin{array}{l} x+2y-z=1 \\ 2x+7y+4z=11 \\ x+3y+z=4 \end{array}\right.$$

Label the equations (1), (2), (3). Use (1) and (3) to eliminate $x$:
multiplying (1) by $-1$ and adding it to (3) gives

$$
\begin{array}{rcl}
-x-2y+z &=& -1 \\
x+3y+z &=& 4 \\
y+2z &=& 3
\end{array}
$$

— call this (4). Use (1) and (2) to eliminate $x$ again: multiplying (1) by
$-2$ and adding it to (2) gives

$$
\begin{array}{rcl}
-2x-4y+2z &=& -2 \\
2x+7y+4z &=& 11 \\
3y+6z &=& 9
\end{array}
$$

— call this (5). Use (4) and (5) to eliminate $y$: multiplying (4) by $-3$
and adding it to (5) gives

$$
\begin{array}{rcl}
-3y-6z &=& -9 \\
3y+6z &=& 9 \\
0 &=& 0
\end{array}
$$

The true statement $0=0$ tells us the system is consistent with dependent
equations — there are infinitely many solutions. Solve equation (4) for
$y$:
$$y+2z=3 \quad\Longrightarrow\quad y=-2z+3.$$

Substitute $y=-2z+3$ into equation (1) to solve for $x$ in terms of $z$:

$$
\begin{array}{lrcl}
& x+2y-z &=& 1 \\[4pt]
\text{Substitute }y=-2z+3. & x+2(-2z+3)-z &=& 1 \\[4pt]
& x-4z+6-z &=& 1 \\[4pt]
& x-5z+6 &=& 1 \\[4pt]
& x &=& 5z-5
\end{array}
$$

The solutions are all ordered triples of the form $(5z-5,\,-2z+3,\,z)$,
where $z$ is any real number.

{{< multiplechoice
  question="Solve the system of equations: $\left\{\begin{array}{l} x+y-z=0 \\ 2x+4y-2z=6 \\ 3x+6y-3z=9 \end{array}\right.$ How many solutions does the system have?"
  hint="Compare the second and third equations — one is a constant multiple of the other, so the three planes reduce to only two independent equations."
  answer="infinitely many solutions"
>}}
exactly one solution
no solution
infinitely many solutions
{{< /multiplechoice >}}

## Solve Applications Using Systems of Linear Equations with Three Variables

Applications that are modeled by systems of equations can be solved using
the same techniques we used to solve the systems above. Many applications
are just extensions to three variables of the types we have solved earlier.

**Example.** The community college theater department sold three kinds of
tickets to its latest play production. The adult tickets sold for
\$15, the student tickets for \$10, and the child tickets for \$8. The
theater department was thrilled to have sold 250 tickets and brought in
\$2,825 in one night. The number of student tickets sold is twice the
number of adult tickets sold. How many of each type did the department
sell?

We organize the information in a chart:

| Type | Number | Value | Total value |
| :--- | :---: | :---: | :---: |
| adult | $x$ | $15$ | $15x$ |
| student | $y$ | $10$ | $10y$ |
| child | $z$ | $8$ | $8z$ |
| | $250$ | | $2825$ |

"The number of student tickets sold is twice the number of adult tickets
sold" translates to $y=2x$, or in standard form, $2x-y=0$. Write the system
of equations:

$$\left\{\begin{array}{l} x+y+z=250 \\ 15x+10y+8z=2825 \\ 2x-y=0 \end{array}\right.$$

Label the equations (1), (2), (3). Use (1) and (2) to eliminate $z$:
multiplying (1) by $-8$ and adding it to (2) gives

$$
\begin{array}{rcl}
-8x-8y-8z &=& -2000 \\
15x+10y+8z &=& 2825 \\
7x+2y &=& 825
\end{array}
$$

— call this (4). Use (3) and (4) to eliminate $y$: multiplying (3) by $2$
and adding it to (4) gives

$$
\begin{array}{rcl}
4x-2y &=& 0 \\
7x+2y &=& 825 \\
11x &=& 825
\end{array}
$$

So $x=75$ — the department sold $75$ adult tickets. Substitute into (3) to
find $y$:

$$
\begin{array}{lrcl}
& 2x-y &=& 0 \\[4pt]
\text{Substitute }x=75. & 2(75)-y &=& 0 \\[4pt]
& y &=& 150
\end{array}
$$

So $150$ student tickets were sold. Substitute $x=75$ and $y=150$ into (1)
to find $z$:

$$
\begin{array}{lrcl}
& x+y+z &=& 250 \\[4pt]
\text{Substitute the values.} & 75+150+z &=& 250 \\[4pt]
& z &=& 25
\end{array}
$$

The theater department sold $75$ adult tickets, $150$ student tickets, and
$25$ child tickets.

{{< fillin
  question="The community college fine arts department sold three kinds of tickets to its latest dance presentation. The adult tickets sold for \$20, the student tickets for \$12, and the child tickets for \$10. The department sold 350 tickets and brought in \$4,650 in one night. The number of child tickets sold was the same as the number of adult tickets sold. How many student tickets did the department sell?"
  answer="200"
  hint="Let x, y, and z be the numbers of adult, student, and child tickets sold. Then x+y+z=350, 20x+12y+10z=4650, and z=x. Substitute z=x to reduce the system to two variables."
>}}

## Key terms

**linear equation in three variables** — an equation of the form
$ax+by+cz=d$, whose graph is a plane in three-dimensional space.
**ordered triple** — a solution $(x,y,z)$ to an equation or system of
equations in three variables. **solutions of a system of linear equations
with three variables** — the ordered triples that make all three equations
true; geometrically, the points common to all three planes. **consistent
system** — a system with at least one solution. **inconsistent system** — a
system with no solution; eliminating variables leaves a false statement
like $0=-2$. **dependent equations** — equations whose graphs share a
common line (or are the same plane), so the system has infinitely many
solutions; eliminating variables leaves a true statement like $0=0$.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.4: Solve Systems of Equations with Three Variables](https://openstax.org/books/intermediate-algebra-2e/pages/4-4-solve-systems-of-equations-with-three-variables) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: described the three-plane geometric cases (one solution, no solution, infinitely many solutions) in prose instead of recreating the 3D plane diagrams; recast the seven-step worked example as a markdown table; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback — including turning the no-solution and infinite-solutions Try Its into multiple-choice questions about the number of solutions, since a word answer can't be graded by the math checker.</small>
