---
title: "Systems of Linear Equations: Two Variables"
description: >-
  Solving systems of two linear equations by graphing, substitution, and
  addition; identifying inconsistent and dependent systems; and using systems
  to model cost, revenue, and break-even applications — adapted from OpenStax
  Precalculus 2e, Section 9.1.
source_section: "9.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve systems of equations by graphing
- Solve systems of equations by substitution
- Solve systems of equations by addition
- Identify inconsistent systems of equations containing two variables
- Express the solution of a system of dependent equations containing two variables
{{< /callout >}}

A skateboard manufacturer introduces a new line of boards. The manufacturer tracks its costs, which is the amount it spends to produce the boards, and its revenue, which is the amount it earns through sales of its boards. How can the company determine if it is making a profit with its new line? How many skateboards must be produced and sold before a profit is possible? In this section, we will consider linear equations with two variables to answer these and similar questions.

### Introduction to Systems of Equations

In order to investigate situations such as that of the skateboard manufacturer, we need to recognize that we are dealing with more than one variable and likely more than one equation. A **system of linear equations** consists of two or more linear equations made up of two or more variables such that all equations in the system are considered simultaneously. To find the unique solution to a system of linear equations, we must find a numerical value for each variable in the system that will satisfy all equations in the system at the same time. Some linear systems may not have a solution and others may have an infinite number of solutions. In order for a linear system to have a unique solution, there must be at least as many equations as there are variables. Even so, this does not guarantee a unique solution.

In this section, we will look at systems of linear equations in two variables, which consist of two equations that contain two different variables. For example, consider the following system of linear equations in two variables.

$$\begin{cases}2x+y=15\\3x-y=5\end{cases}$$

The *solution* to a system of linear equations in two variables is any ordered pair that satisfies each equation independently. In this example, the ordered pair $(4,7)$ is the solution to the system of linear equations. We can verify the solution by substituting the values into each equation to see if the ordered pair satisfies both equations. Shortly we will investigate methods of finding such a solution if it exists.

$$
\begin{array}{lrcl}
& 2(4)+(7) &=& 15 \quad\text{True} \\[4pt]
& 3(4)-(7) &=& 5 \quad\text{True}
\end{array}
$$

In addition to considering the number of equations and variables, we can categorize systems of linear equations by the number of solutions. A **consistent system** of equations has at least one solution. A consistent system is considered to be an *independent system* if it has a single solution, such as the example we just explored. The two lines have different slopes and intersect at one point in the plane. A consistent system is considered to be a *dependent system* if the equations have the same slope and the same $y$-intercepts. In other words, the lines coincide so the equations represent the same line. Every point on the line represents a coordinate pair that satisfies the system. Thus, there are an infinite number of solutions.

Another type of system of linear equations is an *inconsistent system*, which is one in which the equations represent two parallel lines. The lines have the same slope and different $y$-intercepts. There are no points common to both lines; hence, there is no solution to the system.

{{< callout type="info" >}}
  **Types of Linear Systems.** There are three types of systems of linear equations in two variables, and three types of solutions.

  - An **independent system** has exactly one solution pair $(x,y)$. The point where the two lines intersect is the only solution.
  - An **inconsistent system** has no solution. Notice that the two lines are parallel and will never intersect.
  - A **dependent system** has infinitely many solutions. The lines are coincident. They are the same line, so every coordinate pair on the line is a solution to both equations.
{{< /callout >}}

The figures below compare graphical representations of each type of system.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two lines with different slopes crossing at a single point, one falling from upper left to lower right and one rising from lower left to upper right, intersecting at (7/5, -11/5).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"slope":-2,"intercept":0.6},{"slope":1.5,"intercept":-4.3}],"points":[{"at":[1.4,-2.2],"label":"(7/5, -11/5)"}]}
{{< /apfigure >}}

*Independent system.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two parallel lines with the same steep positive slope and different y-intercepts, never crossing.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"slope":3,"intercept":1},{"slope":3,"intercept":-2}]}
{{< /apfigure >}}

*Inconsistent system.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A single line through the points (1, 2) and (-1, -2), since the two equations of the system graph as the same line.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"slope":2,"intercept":0}],"points":[{"at":[1,2],"label":"(1, 2)"},{"at":[-1,-2],"label":"(-1, -2)"}]}
{{< /apfigure >}}

*Dependent system.*

{{< callout type="info" >}}
  **How To:** given a system of linear equations and an ordered pair, determine whether the ordered pair is a solution.

  1. Substitute the ordered pair into each equation in the system.
  2. Determine whether true statements result from the substitution in both equations; if so, the ordered pair is a solution.
{{< /callout >}}

**Example.** Determine whether the ordered pair $(5,1)$ is a solution to the given system of equations.

$$\begin{cases}x+3y=8\\2x-9=y\end{cases}$$

**Solution.** Substitute the ordered pair $(5,1)$ into both equations.

$$
\begin{array}{lrcl}
& (5)+3(1) &=& 8 \quad\text{True} \\[4pt]
& 2(5)-9 &=& (1) \quad\text{True}
\end{array}
$$

The ordered pair $(5,1)$ satisfies both equations, so it is the solution to the system.

**Analysis.** We can see the solution clearly by plotting the graph of each equation. Since the solution is an ordered pair that satisfies both equations, it is a point on both of the lines and thus the point of intersection of the two lines.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two lines, x + 3y = 8 and 2x - 9 = y, crossing at (5, 1).","xMin":-2,"xMax":10,"yMin":-5,"yMax":5,"tickLabels":true,"lines":[{"slope":-0.3333333333333333,"intercept":2.6666666666666665,"label":"x + 3y = 8"},{"slope":2,"intercept":-9,"label":"2x - 9 = y"}],"points":[{"at":[5,1],"label":"(5, 1)"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Determine whether the ordered pair $(8,5)$ is a solution to the following system. $\begin{cases}5x-4y=20\\2x+1=3y\end{cases}$"
  answer="not a solution"
  hint="Substitute x=8, y=5 into both equations; if either one fails, the pair is not a solution to the system."
>}}
a solution
not a solution
{{< /multiplechoice >}}

### Solving Systems of Equations by Graphing

There are multiple methods of solving systems of linear equations. For a system of linear equations in two variables, we can determine both the type of system and the solution by graphing the system of equations on the same set of axes.

**Example.** Solve the following system of equations by graphing. Identify the type of system.

$$\begin{cases}2x+y=-8\\x-y=-1\end{cases}$$

**Solution.** Solve the first equation for $y$.

$$
\begin{array}{lrcl}
& 2x+y &=& -8 \\[4pt]
& y &=& -2x-8
\end{array}
$$

Solve the second equation for $y$.

$$
\begin{array}{lrcl}
& x-y &=& -1 \\[4pt]
& y &=& x+1
\end{array}
$$

Graph both equations on the same set of axes, as below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two lines, y = x + 1 and y = -2x - 8, crossing at (-3, -2).","xMin":-6,"xMax":6,"yMin":-10,"yMax":10,"tickLabels":true,"lines":[{"slope":1,"intercept":1,"label":"y = x + 1"},{"slope":-2,"intercept":-8,"label":"y = -2x - 8"}],"points":[{"at":[-3,-2],"label":"(-3, -2)"}]}
{{< /apfigure >}}

The lines appear to intersect at the point $(-3,-2)$. We can check to make sure that this is the solution to the system by substituting the ordered pair into both equations.

$$
\begin{array}{lrcl}
& 2(-3)+(-2) &=& -8 \quad\text{True} \\[4pt]
& (-3)-(-2) &=& -1 \quad\text{True}
\end{array}
$$

The solution to the system is the ordered pair $(-3,-2)$, so the system is independent.

{{< graphplot
  question="Solve the following system of equations by graphing. $\begin{cases}2x-5y=-25\\-4x+5y=35\end{cases}$"
  answerDisplay="$(-5,3)$"
  ariaLabel="A blank coordinate grid from -10 to 10 on both axes."
  hint="Solve each equation for y: 2x-5y=-25 becomes y=0.4x+5, and -4x+5y=35 becomes y=0.8x+7. Use each line's slope and y-intercept to place two points on it."
>}}
{"answer": {"system": [{"slope": 0.4, "intercept": 5}, {"slope": 0.8, "intercept": 7}]}, "grid": {"xMin": -10, "xMax": 10, "yMin": -10, "yMax": 10}}
{{< /graphplot >}}

{{< callout type="info" >}}
  **Q&A.** *Can graphing be used if the system is inconsistent or dependent?*

  Yes, in both cases we can still graph the system to determine the type of system and solution. If the two lines are parallel, the system has no solution and is inconsistent. If the two lines are identical, the system has infinite solutions and is a dependent system.
{{< /callout >}}

### Solving Systems of Equations by Substitution

Solving a linear system in two variables by graphing works well when the solution consists of integer values, but if our solution contains decimals or fractions, it is not the most precise method. We will consider two more methods of solving a system of linear equations that are more precise than graphing. One such method is solving a system of equations by the **substitution method**, in which we solve one of the equations for one variable and then substitute the result into the second equation to solve for the second variable. Recall that we can solve for only one variable at a time, which is the reason the substitution method is both valuable and practical.

{{< callout type="info" >}}
  **How To:** given a system of two equations in two variables, solve using the substitution method.

  1. Solve one of the two equations for one of the variables in terms of the other.
  2. Substitute the expression for this variable into the second equation, then solve for the remaining variable.
  3. Substitute that solution into either of the original equations to find the value of the first variable. If possible, write the solution as an ordered pair.
  4. Check the solution in both equations.
{{< /callout >}}

**Example.** Solve the following system of equations by substitution.

$$\begin{cases}-x+y=-5\\2x-5y=1\end{cases}$$

**Solution.** First, we will solve the first equation for $y$.

$$
\begin{array}{lrcl}
& -x+y &=& -5 \\[4pt]
& y &=& x-5
\end{array}
$$

Now we can substitute the expression $x-5$ for $y$ in the second equation.

$$
\begin{array}{lrcl}
& 2x-5y &=& 1 \\[4pt]
& 2x-5(x-5) &=& 1 \\[4pt]
& 2x-5x+25 &=& 1 \\[4pt]
& -3x &=& -24 \\[4pt]
& x &=& 8
\end{array}
$$

Now, we substitute $x=8$ into the first equation and solve for $y$.

$$
\begin{array}{lrcl}
& -(8)+y &=& -5 \\[4pt]
& y &=& 3
\end{array}
$$

Our solution is $(8,3)$. Check the solution by substituting $(8,3)$ into both equations.

$$
\begin{array}{lrcl}
& -x+y &=& -5 \\[4pt]
& -(8)+(3) &=& -5 \quad\text{True} \\[4pt]
& 2x-5y &=& 1 \\[4pt]
& 2(8)-5(3) &=& 1 \quad\text{True}
\end{array}
$$

{{< fillin
  question="Solve the following system of equations by substitution, as an ordered pair $(x,y)$. $\begin{cases}x=y+3\\4=3x-2y\end{cases}$"
  answer="(-2,-5)"
  answerDisplay="$(-2,-5)$"
  hint="Substitute y+3 for x in the second equation, then solve for y."
>}}

{{< callout type="info" >}}
  **Q&A.** *Can the substitution method be used to solve any linear system in two variables?*

  Yes, but the method works best if one of the equations contains a coefficient of $1$ or $-1$ so that we do not have to deal with fractions.
{{< /callout >}}

### Solving Systems of Equations in Two Variables by the Addition Method

A third method of solving systems of linear equations is the **addition method**. In this method, we add two terms with the same variable, but opposite coefficients, so that the sum is zero. Of course, not all systems are set up with the two terms of one variable having opposite coefficients. Often we must adjust one or both of the equations by multiplication so that one variable will be eliminated by addition.

{{< callout type="info" >}}
  **How To:** given a system of equations, solve using the addition method.

  1. Write both equations with $x$- and $y$-variables on the left side of the equal sign and constants on the right.
  2. Write one equation above the other, lining up corresponding variables. If one of the variables in the top equation has the opposite coefficient of the same variable in the bottom equation, add the equations together, eliminating one variable. If not, use multiplication by a nonzero number so that one of the variables in the top equation has the opposite coefficient of the same variable in the bottom equation, then add the equations to eliminate the variable.
  3. Solve the resulting equation for the remaining variable.
  4. Substitute that value into one of the original equations and solve for the second variable.
  5. Check the solution by substituting the values into the other equation.
{{< /callout >}}

**Example.** Solve the given system of equations by addition.

$$\begin{cases}x+2y=-1\\-x+y=3\end{cases}$$

**Solution.** Both equations are already set equal to a constant. Notice that the coefficient of $x$ in the second equation, $-1$, is the opposite of the coefficient of $x$ in the first equation, $1$. We can add the two equations to eliminate $x$ without needing to multiply by a constant.

$$
\begin{array}{lrcl}
& x+2y &=& -1 \\[4pt]
& -x+y &=& 3 \\[4pt]
\text{Add the two equations.} & 3y &=& 2
\end{array}
$$

Now that we have eliminated $x$, we can solve the resulting equation for $y$.

$$
\begin{array}{lrcl}
& 3y &=& 2 \\[4pt]
& y &=& \tfrac{2}{3}
\end{array}
$$

Then, we substitute this value for $y$ into one of the original equations and solve for $x$.

$$
\begin{array}{lrcl}
& -x+y &=& 3 \\[4pt]
& -x+\tfrac{2}{3} &=& 3 \\[4pt]
& -x &=& 3-\tfrac{2}{3} \\[4pt]
& -x &=& \tfrac{7}{3} \\[4pt]
& x &=& -\tfrac{7}{3}
\end{array}
$$

The solution to this system is $\left(-\tfrac{7}{3},\tfrac{2}{3}\right)$.

Check the solution in the first equation.

$$
\begin{array}{lrcl}
& x+2y &=& -1 \\[4pt]
& \left(-\tfrac{7}{3}\right)+2\left(\tfrac{2}{3}\right) &=& -\tfrac{7}{3}+\tfrac{4}{3} \\[4pt]
& &=& -\tfrac{3}{3} \\[4pt]
& &=& -1 \quad\text{True}
\end{array}
$$

**Analysis.** We gain an important perspective on systems of equations by looking at the graphical representation. The figure below shows that the equations intersect at the solution. We do not need to ask whether there may be a second solution because observing the graph confirms that the system has exactly one solution.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two lines, x + 2y = -1 and -x + y = 3, crossing at (-7/3, 2/3).","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"slope":-0.5,"intercept":-0.5,"label":"x + 2y = -1"},{"slope":1,"intercept":3,"label":"-x + y = 3"}],"points":[{"at":[-2.3333333333333335,0.6666666666666666],"label":"(-7/3, 2/3)"}]}
{{< /apfigure >}}

**Example.** Solve the given system of equations by the addition method.

$$\begin{cases}3x+5y=-11\\x-2y=11\end{cases}$$

**Solution.** Adding these equations as presented will not eliminate a variable. However, we see that the first equation has $3x$ in it and the second equation has $x$. So if we multiply the second equation by $-3$, the $x$-terms will add to zero.

$$
\begin{array}{lrcl}
\text{Multiply both sides by }-3. & -3(x-2y) &=& -3(11) \\[4pt]
\text{Use the distributive property.} & -3x+6y &=& -33
\end{array}
$$

Now, let's add them.

$$
\begin{array}{lrcl}
& 3x+5y &=& -11 \\[4pt]
& -3x+6y &=& -33 \\[4pt]
\text{Add the two equations.} & 11y &=& -44 \\[4pt]
& y &=& -4
\end{array}
$$

For the last step, we substitute $y=-4$ into one of the original equations and solve for $x$.

$$
\begin{array}{lrcl}
& 3x+5y &=& -11 \\[4pt]
& 3x+5(-4) &=& -11 \\[4pt]
& 3x-20 &=& -11 \\[4pt]
& 3x &=& 9 \\[4pt]
& x &=& 3
\end{array}
$$

Our solution is the ordered pair $(3,-4)$. Check the solution in the original second equation.

$$
\begin{array}{lrcl}
& x-2y &=& 11 \\[4pt]
& (3)-2(-4) &=& 3+8 \\[4pt]
& &=& 11 \quad\text{True}
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two lines, 3x + 5y = -11 and x - 2y = 11, crossing at (3, -4).","xMin":-1,"xMax":6,"yMin":-6,"yMax":1,"tickLabels":true,"lines":[{"slope":-0.6,"intercept":-2.2,"label":"3x + 5y = -11"},{"slope":0.5,"intercept":-5.5,"label":"x - 2y = 11"}],"points":[{"at":[3,-4],"label":"(3, -4)"}]}
{{< /apfigure >}}

{{< fillin
  question="Solve the system of equations by addition, as an ordered pair $(x,y)$. $\begin{cases}2x-7y=2\\3x+y=-20\end{cases}$"
  answer="(-6,-2)"
  answerDisplay="$(-6,-2)$"
  hint="Multiply the second equation by 7 so the y-terms add to zero, then add the two equations."
>}}

**Example.** Solve the given system of equations in two variables by addition.

$$\begin{cases}2x+3y=-16\\5x-10y=30\end{cases}$$

**Solution.** One equation has $2x$ and the other has $5x$. The least common multiple is $10x$ so we will have to multiply both equations by a constant in order to eliminate one variable. Let's eliminate $x$ by multiplying the first equation by $-5$ and the second equation by $2$.

$$
\begin{array}{lrcl}
& -5(2x+3y) &=& -5(-16) \\[4pt]
& -10x-15y &=& 80 \\[4pt]
& 2(5x-10y) &=& 2(30) \\[4pt]
& 10x-20y &=& 60
\end{array}
$$

Then, we add the two equations together.

$$
\begin{array}{lrcl}
& -10x-15y &=& 80 \\[4pt]
& 10x-20y &=& 60 \\[4pt]
\text{Add the two equations.} & -35y &=& 140 \\[4pt]
& y &=& -4
\end{array}
$$

Substitute $y=-4$ into the original first equation.

$$
\begin{array}{lrcl}
& 2x+3(-4) &=& -16 \\[4pt]
& 2x-12 &=& -16 \\[4pt]
& 2x &=& -4 \\[4pt]
& x &=& -2
\end{array}
$$

The solution is $(-2,-4)$. Check it in the other equation.

$$
\begin{array}{lrcl}
& 5x-10y &=& 30 \\[4pt]
& 5(-2)-10(-4) &=& 30 \\[4pt]
& -10+40 &=& 30 \\[4pt]
& 30 &=& 30 \quad\text{True}
\end{array}
$$

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two lines, 2x + 3y = -16 and 5x - 10y = 30, crossing at (-2, -4).","xMin":-6,"xMax":6,"yMin":-7,"yMax":5,"tickLabels":true,"lines":[{"slope":-0.6666666666666666,"intercept":-5.333333333333333,"label":"2x + 3y = -16"},{"slope":0.5,"intercept":-3,"label":"5x - 10y = 30"}],"points":[{"at":[-2,-4],"label":"(-2, -4)"}]}
{{< /apfigure >}}

**Example.** Solve the given system of equations in two variables by addition.

$$\begin{cases}\tfrac{x}{3}+\tfrac{y}{6}=3\\\tfrac{x}{2}-\tfrac{y}{4}=1\end{cases}$$

**Solution.** First clear each equation of fractions by multiplying both sides of the equation by the least common denominator.

$$
\begin{array}{lrcl}
& 6\left(\tfrac{x}{3}+\tfrac{y}{6}\right) &=& 6(3) \\[4pt]
& 2x+y &=& 18 \\[4pt]
& 4\left(\tfrac{x}{2}-\tfrac{y}{4}\right) &=& 4(1) \\[4pt]
& 2x-y &=& 4
\end{array}
$$

Now multiply the second equation by $-1$ so that we can eliminate the $x$-variable.

$$
\begin{array}{lrcl}
& -1(2x-y) &=& -1(4) \\[4pt]
& -2x+y &=& -4
\end{array}
$$

Add the two equations to eliminate the $x$-variable and solve the resulting equation.

$$
\begin{array}{lrcl}
& 2x+y &=& 18 \\[4pt]
& -2x+y &=& -4 \\[4pt]
\text{Add the two equations.} & 2y &=& 14 \\[4pt]
& y &=& 7
\end{array}
$$

Substitute $y=7$ into the first equation.

$$
\begin{array}{lrcl}
& 2x+(7) &=& 18 \\[4pt]
& 2x &=& 11 \\[4pt]
& x &=& \tfrac{11}{2} \\[4pt]
& &=& 5.5
\end{array}
$$

The solution is $\left(\tfrac{11}{2},7\right)$. Check it in the other equation.

$$
\begin{array}{lrcl}
& \tfrac{x}{2}-\tfrac{y}{4} &=& 1 \\[4pt]
& \tfrac{11/2}{2}-\tfrac{7}{4} &=& 1 \\[4pt]
& \tfrac{11}{4}-\tfrac{7}{4} &=& 1 \\[4pt]
& \tfrac{4}{4} &=& 1 \quad\text{True}
\end{array}
$$

{{< fillin
  question="Solve the system of equations by addition, as an ordered pair $(x,y)$. $\begin{cases}2x+3y=8\\3x+5y=10\end{cases}$"
  answer="(10,-4)"
  answerDisplay="$(10,-4)$"
  hint="Multiply the first equation by 5 and the second by -3, then add to eliminate y."
>}}

### Identifying Inconsistent Systems of Equations Containing Two Variables

Now that we have several methods for solving systems of equations, we can use the methods to identify inconsistent systems. Recall that an inconsistent system consists of parallel lines that have the same slope but different $y$-intercepts. They will never intersect. When searching for a solution to an inconsistent system, we will come up with a false statement, such as $12=0$.

**Example.** Solve the following system of equations.

$$\begin{cases}x=9-2y\\x+2y=13\end{cases}$$

**Solution.** We can approach this problem in two ways. Because one equation is already solved for $x$, the most obvious step is to use substitution.

$$
\begin{array}{lrcl}
& x+2y &=& 13 \\[4pt]
& (9-2y)+2y &=& 13 \\[4pt]
& 9+0y &=& 13 \\[4pt]
& 9 &=& 13
\end{array}
$$

Clearly, this statement is a contradiction because $9\ne13$. Therefore, the system has no solution.

The second approach would be to first manipulate the equations so that they are both in slope-intercept form. We manipulate the first equation as follows.

$$
\begin{array}{lrcl}
& x &=& 9-2y \\[4pt]
& 2y &=& -x+9 \\[4pt]
& y &=& -\tfrac{1}{2}x+\tfrac{9}{2}
\end{array}
$$

We then convert the second equation expressed to slope-intercept form.

$$
\begin{array}{lrcl}
& x+2y &=& 13 \\[4pt]
& 2y &=& -x+13 \\[4pt]
& y &=& -\tfrac{1}{2}x+\tfrac{13}{2}
\end{array}
$$

Comparing the equations, we see that they have the same slope but different $y$-intercepts. Therefore, the lines are parallel and do not intersect.

**Analysis.** Writing the equations in slope-intercept form confirms that the system is inconsistent because all lines will intersect eventually unless they are parallel. Parallel lines will never intersect; thus, the two lines have no points in common. The graphs of the equations in this example are shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two parallel lines with slope -1/2 and different y-intercepts, never crossing.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"tickLabels":true,"xTickStep":2,"yTickStep":2,"lines":[{"slope":-0.5,"intercept":4.5,"label":"y = -x/2 + 9/2"},{"slope":-0.5,"intercept":6.5,"label":"y = -x/2 + 13/2"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Solve the following system of equations in two variables. $\begin{cases}2y-2x=2\\2y-2x=6\end{cases}$"
  answer="no solution — the system is inconsistent"
  hint="Solve each equation for y and compare slopes and y-intercepts."
>}}
no solution — the system is inconsistent
infinitely many solutions — the system is dependent
one solution — the system is independent
{{< /multiplechoice >}}

### Expressing the Solution of a System of Dependent Equations Containing Two Variables

Recall that a dependent system of equations in two variables is a system in which the two equations represent the same line. Dependent systems have an infinite number of solutions because all of the points on one line are also on the other line. After using substitution or addition, the resulting equation will be an identity, such as $0=0$.

**Example.** Find a solution to the system of equations using the addition method.

$$\begin{cases}x+3y=2\\3x+9y=6\end{cases}$$

**Solution.** With the addition method, we want to eliminate one of the variables by adding the equations. In this case, let's focus on eliminating $x$. If we multiply both sides of the first equation by $-3$, then we will be able to eliminate the $x$-variable.

$$
\begin{array}{lrcl}
& x+3y &=& 2 \\[4pt]
& (-3)(x+3y) &=& (-3)(2) \\[4pt]
& -3x-9y &=& -6
\end{array}
$$

Now add the equations.

$$
\begin{array}{lrcl}
& -3x-9y &=& -6 \\[4pt]
& 3x+9y &=& 6 \\[4pt]
\text{Add the two equations.} & 0 &=& 0
\end{array}
$$

We can see that there will be an infinite number of solutions that satisfy both equations.

**Analysis.** If we rewrote both equations in the slope-intercept form, we might know what the solution would look like before adding. Let's look at what happens when we convert the system to slope-intercept form.

$$
\begin{array}{lrcl}
& x+3y &=& 2 \\[4pt]
& 3y &=& -x+2 \\[4pt]
& y &=& -\tfrac{1}{3}x+\tfrac{2}{3} \\[4pt]
& 3x+9y &=& 6 \\[4pt]
& 9y &=& -3x+6 \\[4pt]
& y &=& -\tfrac{3}{9}x+\tfrac{6}{9} \\[4pt]
& y &=& -\tfrac{1}{3}x+\tfrac{2}{3}
\end{array}
$$

Notice the results are the same. The general solution to the system is $\left(x,-\tfrac{1}{3}x+\tfrac{2}{3}\right)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A single line through the points (2, 0) and (-4, 2), since the two equations graph as the same line.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"tickLabels":true,"lines":[{"slope":-0.3333333333333333,"intercept":0.6666666666666666}],"texts":[{"at":[-4.6,2.5],"text":"x + 3y = 2"},{"at":[1.2,-1.7],"text":"3x + 9y = 6"}]}
{{< /apfigure >}}

{{< fillin
  question="Solve the following system of equations in two variables. Express the general solution as an ordered pair $(x,y)$ in terms of $x$. $\begin{cases}y-2x=5\\-3y+6x=-15\end{cases}$"
  answer="(x,2x+5)"
  answerDisplay="$(x,2x+5)$"
  hint="Solve the first equation for y in terms of x, then check that the second equation is a multiple of the first."
>}}

### Using Systems of Equations to Investigate Profits

Using what we have learned about systems of equations, we can return to the skateboard manufacturing problem at the beginning of the section. The skateboard manufacturer's **revenue function** is the function used to calculate the amount of money that comes into the business. It can be represented by the equation $R=xp$, where $x=$ quantity and $p=$ price.

The **cost function** is the function used to calculate the costs of doing business. It includes fixed costs, such as rent and salaries, and variable costs, such as utilities. The cost function and revenue function are shown together below, with quantity in hundreds of units on the $x$-axis and cost or revenue in hundreds of dollars on the $y$-axis.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A cost line and a steeper revenue line crossing at the break-even point (7, 33), quantity in hundreds of units on the horizontal axis and money in hundreds of dollars on the vertical axis.","xMin":0,"xMax":20,"yMin":-10,"yMax":70,"tickLabels":true,"xLabel":"Quantity (hundreds of units)","yLabel":"Money (hundreds of dollars)","lines":[{"slope":1.8571428571428572,"intercept":20,"label":"Cost"},{"slope":4.714285714285714,"intercept":0,"label":"Revenue"}],"points":[{"at":[7,33],"label":"(7, 33)"}]}
{{< /apfigure >}}

The point at which the two lines intersect is called the **break-even point**. We can see from the graph that if 700 units are produced, the cost is \$3,300 and the revenue is also \$3,300. In other words, the company breaks even if they produce and sell 700 units. They neither make money nor lose money.

The shaded region to the right of the break-even point represents quantities for which the company makes a profit. The shaded region to the left represents quantities for which the company suffers a loss. The **profit function** is the revenue function minus the cost function, written as $P(x)=R(x)-C(x)$. Clearly, knowing the quantity for which the cost equals the revenue is of great importance to businesses.

**Example.** Given the cost function $C(x)=0.85x+35{,}000$ and the revenue function $R(x)=1.55x$, find the break-even point and the profit function.

**Solution.** Write the system of equations using $y$ to replace function notation.

$$\begin{cases}y=0.85x+35{,}000\\y=1.55x\end{cases}$$

Substitute the expression $0.85x+35{,}000$ from the first equation into the second equation and solve for $x$.

$$
\begin{array}{lrcl}
& 0.85x+35{,}000 &=& 1.55x \\[4pt]
& 35{,}000 &=& 0.7x \\[4pt]
& 50{,}000 &=& x
\end{array}
$$

Then, we substitute $x=50{,}000$ into either the cost function or the revenue function.

$$1.55(50{,}000)=77{,}500$$

The break-even point is $(50{,}000,77{,}500)$.

The profit function is found using the formula $P(x)=R(x)-C(x)$.

$$
\begin{array}{lrcl}
& P(x) &=& 1.55x-(0.85x+35{,}000) \\[4pt]
& &=& 0.7x-35{,}000
\end{array}
$$

The profit function is $P(x)=0.7x-35{,}000$.

**Analysis.** The cost to produce 50,000 units is \$77,500, and the revenue from the sales of 50,000 units is also \$77,500. To make a profit, the business must produce and sell more than 50,000 units.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A cost line and a revenue line crossing at the break-even point (50,000, 77,500), quantity in units on the horizontal axis and dollars on the vertical axis.","xMin":0,"xMax":100000,"yMin":0,"yMax":100000,"xUnit":0.006,"yUnit":0.006,"margin":40,"grid":false,"tickLabels":true,"xTickStep":20000,"yTickStep":20000,"xLabel":"Quantity","yLabel":"Dollars","lines":[{"slope":0.85,"intercept":35000,"label":"Cost"},{"slope":1.55,"intercept":0,"label":"Revenue"}],"points":[{"at":[50000,77500],"label":"(50,000, 77,500)"}]}
{{< /apfigure >}}

We see from the graph below that the profit function has a negative value until $x=50{,}000$, when the graph crosses the $x$-axis. Then, the graph emerges into positive $y$-values and continues on this path as the profit function is a straight line. This illustrates that the break-even point for businesses occurs when the profit function is $0$. The area to the left of the break-even point represents operating at a loss.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The profit line P(x) = 0.7x - 35,000, crossing the horizontal axis at the break-even point (50,000, 0).","xMin":-20000,"xMax":120000,"yMin":-40000,"yMax":60000,"xUnit":0.0045,"yUnit":0.0045,"margin":40,"grid":false,"tickLabels":true,"xTickStep":20000,"yTickStep":20000,"xLabel":"Quantity","yLabel":"Dollars profit","lines":[{"slope":0.7,"intercept":-35000,"label":"Profit"}],"points":[{"at":[50000,0],"label":"(50,000, 0)"}]}
{{< /apfigure >}}

**Example.** The cost of a ticket to the circus is \$25.00 for children and \$50.00 for adults. On a certain day, attendance at the circus is 2,000 and the total gate revenue is \$70,000. How many children and how many adults bought tickets?

**Solution.** Let $c=$ the number of children and $a=$ the number of adults in attendance.

The total number of people is 2,000. We can use this to write an equation for the number of people at the circus that day.

$$c+a=2{,}000$$

The revenue from all children can be found by multiplying \$25.00 by the number of children, $25c$. The revenue from all adults can be found by multiplying \$50.00 by the number of adults, $50a$. The total revenue is \$70,000. We can use this to write an equation for the revenue.

$$25c+50a=70{,}000$$

We now have a system of linear equations in two variables.

$$\begin{cases}c+a=2{,}000\\25c+50a=70{,}000\end{cases}$$

In the first equation, the coefficient of both variables is $1$. We can quickly solve the first equation for either $c$ or $a$. We will solve for $a$.

$$
\begin{array}{lrcl}
& c+a &=& 2{,}000 \\[4pt]
& a &=& 2{,}000-c
\end{array}
$$

Substitute the expression $2{,}000-c$ in the second equation for $a$ and solve for $c$.

$$
\begin{array}{lrcl}
& 25c+50(2{,}000-c) &=& 70{,}000 \\[4pt]
& 25c+100{,}000-50c &=& 70{,}000 \\[4pt]
& -25c &=& -30{,}000 \\[4pt]
& c &=& 1{,}200
\end{array}
$$

Substitute $c=1{,}200$ into the first equation to solve for $a$.

$$
\begin{array}{lrcl}
& 1{,}200+a &=& 2{,}000 \\[4pt]
& a &=& 800
\end{array}
$$

We find that 1,200 children and 800 adults bought tickets to the circus that day.

{{< fillin
  question="Meal tickets at the circus cost \$4.00 for children and \$12.00 for adults. If 1,650 meal tickets were bought for a total of \$14,200, how many children bought meal tickets?"
  answer="700"
  answerDisplay="700 children"
  hint="Let c be the number of children and a the number of adults; solve the system c+a=1,650 and 4c+12a=14,200."
>}}

{{< fillin
  question="Using that same circus meal-ticket data, how many adults bought meal tickets?"
  answer="950"
  answerDisplay="950 adults"
  hint="Substitute the number of children you just found into c+a=1,650 and solve for a."
>}}

## Key concepts

- A system of linear equations consists of two or more equations made up of two or more variables such that all equations in the system are considered simultaneously.
- The solution to a system of linear equations in two variables is any ordered pair that satisfies each equation independently.
- Systems of equations are classified as independent with one solution, dependent with an infinite number of solutions, or inconsistent with no solution.
- One method of solving a system of linear equations in two variables is by graphing. In this method, we graph the equations on the same set of axes.
- Another method of solving a system of linear equations is by substitution. In this method, we solve for one variable in one equation and substitute the result into the second equation.
- A third method of solving a system of linear equations is by addition, in which we can eliminate a variable by adding opposite coefficients of corresponding variables.
- It is often necessary to multiply one or both equations by a constant to facilitate elimination of a variable when adding the two equations together.
- Either method of solving a system of equations results in a false statement for inconsistent systems because they are made up of parallel lines that never intersect.
- The solution to a system of dependent equations will always be true because both equations describe the same line.
- Systems of equations can be used to solve real-world problems that involve more than one variable, such as those relating to revenue, cost, and profit.

## Practice

### Solve systems of equations by graphing

{{< multiplechoice
  question="Graph the system $\begin{cases}3x-y=0.6\\x-2y=1.3\end{cases}$. Is it consistent with one solution, inconsistent with no solution, or dependent with infinitely many solutions?"
  answer="consistent with one solution"
  hint="Compare the slopes of the two lines in slope-intercept form; if they differ, the lines cross exactly once."
>}}
consistent with one solution
inconsistent with no solution
dependent with infinitely many solutions
{{< /multiplechoice >}}

{{< multiplechoice
  question="Graph the system $\begin{cases}3x-2y=5\\-9x+6y=-15\end{cases}$. Is it consistent with one solution, inconsistent with no solution, or dependent with infinitely many solutions?"
  answer="dependent with infinitely many solutions"
  hint="Divide the second equation by -3 and compare it with the first equation."
>}}
consistent with one solution
inconsistent with no solution
dependent with infinitely many solutions
{{< /multiplechoice >}}

### Solve systems of equations by substitution

{{< fillin
  question="Solve the system by substitution, as an ordered pair $(x,y)$. $\begin{cases}x+3y=5\\2x+3y=4\end{cases}$"
  answer="(-1,2)"
  answerDisplay="$(-1,2)$"
  hint="Subtract the first equation from the second to eliminate y, then solve for x."
>}}

{{< fillin
  question="Solve the system by substitution, as an ordered pair $(x,y)$. $\begin{cases}4x+2y=-10\\3x+9y=0\end{cases}$"
  answer="(-3,1)"
  answerDisplay="$(-3,1)$"
  hint="Solve the second equation for x in terms of y, then substitute into the first equation."
>}}

### Solve systems of equations by addition

{{< fillin
  question="Solve the system by addition, as an ordered pair $(x,y)$. $\begin{cases}-2x+5y=-42\\7x+2y=30\end{cases}$"
  answer="(6,-6)"
  answerDisplay="$(6,-6)$"
  hint="Multiply the first equation by 7 and the second by 2, then subtract to eliminate x."
>}}

{{< fillin
  question="Solve the system by addition, as an ordered pair $(x,y)$. $\begin{cases}5x-y=-2.6\\-4x-6y=1.4\end{cases}$"
  answer="(-1/2,1/10)"
  answerDisplay="$\left(-\tfrac{1}{2},\tfrac{1}{10}\right)$"
  hint="Multiply the first equation by -6 and add it to the second equation to eliminate y."
>}}

{{< fillin
  question="An investor invests a total of \$1.1 million into two land investments, Swan Peak and Riverside Community. On Swan Peak, her return was a 110% increase on the money invested; on Riverside, she earned 50% over what she invested. If her total profit was \$1 million, how many dollars did she invest in each? Enter the Swan Peak amount, then the Riverside amount, separated by a comma."
  answer="750000,350000"
  answerDisplay="Swan Peak: \$750,000; Riverside: \$350,000"
  hint="Let s and r be the two investments; solve the system s+r=1,100,000 and 1.1s+0.5r=1,000,000 by addition."
>}}

### Identify inconsistent systems of equations containing two variables

{{< multiplechoice
  question="Solve the system by any method. $\begin{cases}3x+5y=9\\30x+50y=-90\end{cases}$ How many solutions does the system have?"
  answer="no solution"
  hint="Multiply the first equation by 10 and compare it to the second equation."
>}}
no solution
one solution
infinitely many solutions
{{< /multiplechoice >}}

{{< multiplechoice
  question="Solve the system by addition. $\begin{cases}-x+2y=-1\\5x-10y=6\end{cases}$ How many solutions does the system have?"
  answer="no solution"
  hint="Multiply the first equation by 5 and compare it to the second equation."
>}}
no solution
one solution
infinitely many solutions
{{< /multiplechoice >}}

### Express the solution of a system of dependent equations containing two variables

{{< fillin
  question="Solve the system by addition. Express the general solution as an ordered pair $(x,y)$ in terms of $x$. $\begin{cases}-0.2x+0.4y=0.6\\x-2y=-3\end{cases}$"
  answer="(x,(x+3)/2)"
  answerDisplay="$\left(x,\tfrac{x+3}{2}\right)$"
  hint="Solve the second equation for y in terms of x, then confirm the first equation is a multiple of the second."
>}}

{{< fillin
  question="Solve the system by addition. Express the general solution as an ordered pair $(x,y)$ in terms of $x$. $\begin{cases}\tfrac{7}{3}x-\tfrac{1}{6}y=2\\-\tfrac{21}{6}x+\tfrac{3}{12}y=-3\end{cases}$"
  answer="(x,2(7x-6))"
  answerDisplay="$(x,2(7x-6))$"
  hint="Solve the first equation for y in terms of x, then confirm the second equation is a multiple of the first."
>}}

{{< multiplechoice
  question="Admission into an amusement park for 4 children and 2 adults is \$116.90. For 6 children and 3 adults, the admission is \$175.35. Assuming a different price for children and adults, how many solutions does this system have for the two ticket prices?"
  answer="infinitely many solutions — the system is dependent, so more information is needed"
  hint="Write the two equations and check whether one is a multiple of the other."
>}}
infinitely many solutions — the system is dependent, so more information is needed
exactly one solution
no solution
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 9.1: Systems of Linear Equations: Two Variables](https://openstax.org/books/precalculus-2e/pages/9-1-systems-of-linear-equations-two-variables) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every coordinate-plane figure as an accessible inline graph generated from its exact equations — the three-panel independent/inconsistent/dependent overview (the independent panel's crossing lines were fitted to pass exactly through the printed point $(7/5,-11/5)$, and the inconsistent panel's parallel lines and the dependent panel's coincident line were fitted to the printed slopes and labeled points, since the source draws these three panels schematically with no equations given); the ordered-pair-solution graph $x+3y=8$ and $2x-9=y$; the graphing-method example $y=x+1$ and $y=-2x-8$; the three addition-method examples' graphs; the inconsistent-system graph $y=-\tfrac12x+\tfrac92$ and $y=-\tfrac12x+\tfrac{13}{2}$; the dependent-system graph, labeled with both coincident equations; and the cost/revenue and profit graphs of the break-even discussion (the introductory schematic break-even figure and Example 10's cost/revenue and profit graphs) — omitting the source's shaded profit/loss wedge between the two lines, which the figure engine cannot render for a region bounded by two intersecting lines rather than a single boundary line, and disclosing that omission here; omitted the section's opening skateboarder photograph, which carries no mathematics; converted the Try Its into interactive exercises with instant feedback — a multiple choice for the ordered-pair-solution check, a graphing exercise for the graphing-method Try It, fill-ins with ordered-pair answers for the substitution- and addition-method Try Its, a multiple choice for the inconsistent-system Try It (recast from a "how many solutions" prose answer into named categorical options, since a solution count cannot be graded as a math expression), a fill-in keyed to the general-solution ordered pair for the dependent-system Try It, and two consecutive fill-ins (children, then adults) for the circus-meal-tickets Try It, split so that neither three-digit count is misread as a digit-grouped six-digit number; and adapted thirteen selected end-of-section exercises with answers confirmed in the Answer Key — two graphical-classification items, two substitution items, three addition items (including the Swan Peak/Riverside land-investment word problem as a two-amount comma list — the grader reads a digit-grouped spelling such as 750,000, 350,000 at the keyed member count), two inconsistent-system items, and three dependent-system items (including the amusement-park ticket-price word problem) — into interactive components in a closing Practice block, one group per objective.</small>
