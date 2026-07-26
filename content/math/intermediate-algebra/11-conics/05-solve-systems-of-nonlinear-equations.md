---
title: Solve Systems of Nonlinear Equations
description: >-
  Solve systems of nonlinear equations by graphing, substitution, and
  elimination, and use nonlinear systems in applications.
source_section: "11.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve a system of nonlinear equations using graphing
- Solve a system of nonlinear equations using substitution
- Solve a system of nonlinear equations using elimination
- Use a system of nonlinear equations to solve applications
{{< /callout >}}

## Solve a System of Nonlinear Equations Using Graphing

We learned how to solve systems of linear equations with two variables by
graphing, substitution and elimination. We will be using these same methods as
we look at nonlinear systems of equations with two equations and two
variables. A **system of nonlinear equations** is a system where at least one
of the equations is not linear.

For example, each of the following systems is a system of nonlinear equations.

$$
\left\{\begin{array}{l}x^2+y^2=9\\x^2-y=9\end{array}\right.
\qquad
\left\{\begin{array}{l}9x^2+y^2=9\\y=3x-3\end{array}\right.
\qquad
\left\{\begin{array}{l}x+y=4\\y=x^2+2\end{array}\right.
$$

{{< callout type="info" >}}
### System of Nonlinear Equations

A **system of nonlinear equations** is a system where at least one of the
equations is not linear.
{{< /callout >}}

Just as with systems of linear equations, a solution of a nonlinear system is
an ordered pair that makes both equations true. In a nonlinear system, there
may be more than one solution. We will see this as we solve a system of
nonlinear equations by graphing.

When we solved systems of linear equations, the solution of the system was the
point of intersection of the two lines. With systems of nonlinear equations,
the graphs may be circles, parabolas or hyperbolas and there may be several
points of intersection, and so several solutions. Once you identify the
graphs, visualize the different ways the graphs could intersect and so how
many solutions there might be.

To solve systems of nonlinear equations by graphing, we use basically the same
steps as with systems of linear equations modified slightly for nonlinear
equations. The steps are listed below for reference.

{{< callout type="info" >}}
### How To: Solve a system of nonlinear equations by graphing

1. Identify the graph of each equation. Sketch the possible options for
   intersection.
2. Graph the first equation.
3. Graph the second equation on the same rectangular coordinate system.
4. Determine whether the graphs intersect.
5. Identify the points of intersection.
6. Check that each ordered pair is a solution to both original equations.
{{< /callout >}}

### Example 11.33

Solve the system by graphing:

$$
\left\{\begin{array}{l}x-y=-2\\y=x^2\end{array}\right.
$$

**Solution.** The first equation is a line and the second is a parabola. Write
the line in slope-intercept form, $y=x+2$, and graph it with $y=x^2$. The
points of intersection appear to be $(2,4)$ and $(-1,1)$.

Check $(2,4)$:

$$
\begin{array}{rcl}
2-4&=&-2\ \checkmark\\[4pt]
4&=&2^2\ \checkmark
\end{array}
$$

Check $(-1,1)$:

$$
\begin{array}{rcl}
-1-1&=&-2\ \checkmark\\[4pt]
1&=&(-1)^2\ \checkmark
\end{array}
$$

The solutions are $(2,4)$ and $(-1,1)$.

{{< fillin
  question="Solve the system $\left\{\begin{array}{l}x+y=4\\y=x^2+2\end{array}\right.$. Enter both ordered-pair solutions."
  answer="(-2,6),(1,3)"
  answerMode="unordered"
  answerDisplay="$\{(-2,6),(1,3)\}$"
  hint="Substitute $y=x^2+2$ into $x+y=4$, solve $x^2+x-2=0$, and find the corresponding $y$-value for each root."
>}}

To identify the graph of each equation, keep in mind the characteristics of
the $x^2$ and $y^2$ terms of each conic.

### Example 11.34

Solve the system by graphing:

$$
\left\{\begin{array}{l}y=-1\\(x-2)^2+(y+3)^2=4\end{array}\right.
$$

**Solution.** The first graph is a line. The second is a circle with center
$(2,-3)$ and radius 2. The line $y=-1$ is horizontal and touches the circle
at $(2,-1)$. Checking gives

$$
(2-2)^2+(-1+3)^2=4
\quad\text{and}\quad
-1=-1.
$$

The solution is $(2,-1)$.

{{< fillin
  question="Solve the system $\left\{\begin{array}{l}x=-6\\(x+3)^2+(y-1)^2=9\end{array}\right.$. Enter the solution as an ordered pair."
  answer="(-6,1)"
  answerDisplay="$(-6,1)$"
  hint="Substitute $x=-6$ into the circle equation."
>}}

## Solve a System of Nonlinear Equations Using Substitution

The graphing method works well when the points of intersection are integers
and so easy to read off the graph. But more often it is difficult to read the
coordinates of the points of intersection. The substitution method is an
algebraic method that will work well in many situations. It works especially
well when it is easy to solve one of the equations for one of the variables.

The substitution method is very similar to the substitution method that we
used for systems of linear equations. The steps are listed below for
reference.

{{< callout type="info" >}}
### How To: Solve a system of nonlinear equations by substitution

1. Identify the graph of each equation. Sketch the possible options for
   intersection.
2. Solve one of the equations for either variable.
3. Substitute the expression from Step 2 into the other equation.
4. Solve the resulting equation.
5. Substitute each solution in Step 4 into one of the original equations to
   find the other variable.
6. Write each solution as an ordered pair.
7. Check that each ordered pair is a solution to both original equations.
{{< /callout >}}

### Example 11.35

Solve the system by using substitution:

$$
\left\{\begin{array}{l}9x^2+y^2=9\\y=3x-3\end{array}\right.
$$

**Solution.** The first graph is an ellipse and the second is a line. The
second equation is already solved for $y$. Substitute $3x-3$ for $y$ in the
first equation.

$$
\begin{aligned}
9x^2+(3x-3)^2&=9\\
9x^2+9x^2-18x+9&=9\\
18x^2-18x&=0\\
18x(x-1)&=0,
\end{aligned}
$$

so $x=0$ or $x=1$. Substitute into $y=3x-3$:

$$
x=0\Longrightarrow y=-3,
\qquad
x=1\Longrightarrow y=0.
$$

The ordered pairs are $(0,-3)$ and $(1,0)$. Substitution in both original
equations verifies both solutions.

{{< fillin
  question="Solve $\left\{\begin{array}{l}4x^2+y^2=4\\y=x+2\end{array}\right.$. Enter the solution with the larger $x$-coordinate."
  answer="(0,2)"
  answerDisplay="$(0,2)$"
  hint="Substitute $x+2$ for $y$, then solve the quadratic."
>}}

So far, each system of nonlinear equations has had at least one solution. The
next example will show another option.

### Example 11.36

Solve the system by using substitution:

$$
\left\{\begin{array}{l}x^2-y=0\\y=x-2\end{array}\right.
$$

**Solution.** The first graph is a parabola and the second is a line. Since
$y=x-2$, substitute $x-2$ for $y$ in the first equation:

$$
x^2-(x-2)=0
\quad\Longrightarrow\quad
x^2-x+2=0.
$$

This does not factor easily, so check the discriminant:

$$
b^2-4ac=(-1)^2-4(1)(2)=-7.
$$

The discriminant is negative, so there is no real solution. The system has no
solution.

{{< fillin
  question="Solve $\left\{\begin{array}{l}x^2-y=0\\y=2x-3\end{array}\right.$. How many real solutions are there?"
  answer="0"
  answerDisplay="$0$"
  hint="After substitution, inspect the discriminant."
>}}

## Solve a System of Nonlinear Equations Using Elimination

When we studied systems of linear equations, we used the method of elimination
to solve the system. We can also use elimination to solve systems of nonlinear
equations. It works well when the equations have both variables squared. When
using elimination, we try to make the coefficients of one variable to be
opposites, so when we add the equations together, that variable is eliminated.

The elimination method is very similar to the elimination method that we used
for systems of linear equations. The steps are listed for reference.

{{< callout type="info" >}}
### How To: Solve a system of equations by elimination

1. Identify the graph of each equation. Sketch the possible options for
   intersection.
2. Write both equations in standard form.
3. Make the coefficients of one variable opposites. Decide which variable
   you will eliminate. Multiply one or both equations so that the
   coefficients of that variable are opposites.
4. Add the equations resulting from Step 3 to eliminate one variable.
5. Solve for the remaining variable.
6. Substitute each solution from Step 5 into one of the original equations.
   Then solve for the other variable.
7. Write each solution as an ordered pair.
8. Check that each ordered pair is a solution to both original equations.
{{< /callout >}}

### Example 11.37

Solve the system by elimination:

$$
\left\{\begin{array}{l}x^2+y^2=4\\x^2-y=4\end{array}\right.
$$

**Solution.** The graphs are a circle and a parabola. Both equations are in
standard form. Multiply the second equation by $-1$ and add:

$$
\begin{array}{rcl}
x^2+y^2&=&4\\
-x^2+y&=&-4\\ \hline
y^2+y&=&0.
\end{array}
$$

Thus $y(y+1)=0$, so $y=0$ or $y=-1$. Substitute into $x^2-y=4$:

$$
\begin{aligned}
y=0&:\quad x^2=4,\quad x=\pm2,\\
y=-1&:\quad x^2=3,\quad x=\pm\sqrt3.
\end{aligned}
$$

The solutions are $(-2,0)$, $(2,0)$, $(\sqrt3,-1)$, and
$(-\sqrt3,-1)$. We leave the checks for each of the four solutions to you.

{{< fillin
  question="For $\left\{\begin{array}{l}x^2+y^2=9\\x^2-y=9\end{array}\right.$, enter the $y$-coordinate shared by the solutions $(3,y)$ and $(-3,y)$."
  answer="0"
  answerDisplay="$0$"
  hint="Eliminate $x^2$ to obtain an equation in $y$."
>}}

There are also four options when we consider a circle and a hyperbola.

### Example 11.38

Solve the system by elimination:

$$
\left\{\begin{array}{l}x^2+y^2=7\\x^2-y^2=1\end{array}\right.
$$

**Solution.** The graphs are a circle and a hyperbola. Both equations are in
standard form. The coefficients of $y^2$ are opposite, so add the equations:

$$
2x^2=8,\qquad x^2=4,\qquad x=\pm2.
$$

Substitute $x=2$ and $x=-2$ into either original equation:

$$
4+y^2=7,\qquad y^2=3,\qquad y=\pm\sqrt3.
$$

The solutions are $(-2,\sqrt3)$, $(-2,-\sqrt3)$, $(2,\sqrt3)$, and
$(2,-\sqrt3)$. We leave the checks for each of the four solutions to you.

{{< fillin
  question="For $\left\{\begin{array}{l}x^2+y^2=25\\y^2-x^2=7\end{array}\right.$, enter the positive $y$-coordinate of a solution."
  answer="4"
  answerDisplay="$4$"
  hint="Add the equations to eliminate $x^2$."
>}}

## Use a System of Nonlinear Equations to Solve Applications

Systems of nonlinear equations can be used to model and solve many
applications. We will look at an everyday geometric situation as our example.

### Example 11.39

The difference of the squares of two numbers is 15. The sum of the numbers is
5. Find the numbers.

**Solution.** Let $x$ be the first number and $y$ the second number. Translate
the information into a system:

$$
\left\{\begin{array}{l}x^2-y^2=15\\x+y=5\end{array}\right.
$$

Solve the second equation for $x$, $x=5-y$, and substitute:

$$
\begin{aligned}
(5-y)^2-y^2&=15\\
25-10y+y^2-y^2&=15\\
25-10y&=15\\
-10y&=-10\\
y&=1.
\end{aligned}
$$

Then $x+1=5$, so $x=4$. The numbers are 1 and 4.

{{< fillin
  question="The difference of the squares of two numbers is $-20$. The sum of the numbers is $10$. Enter the smaller number."
  answer="4"
  answerDisplay="$4$"
  hint="Use $x^2-y^2=(x-y)(x+y)$."
>}}

### Example 11.40

Myra purchased a small 25-inch TV for her kitchen. The size of a TV is
measured on the diagonal of the screen. The screen also has an area of 300
square inches. What are the length and width of the TV screen?

**Solution.** Let $x$ be the width of the rectangle and $y$ its length. The
diagonal of the right triangle is 25 inches, and the area is 300 square
inches:

$$
\left\{\begin{array}{l}x^2+y^2=625\\xy=300\end{array}\right.
$$

Solve the second equation for $x$, $x=\frac{300}{y}$, and substitute:

$$
\begin{aligned}
\left(\frac{300}{y}\right)^2+y^2&=625\\
\frac{90{,}000}{y^2}+y^2&=625\\
90{,}000+y^4&=625y^2\\
y^4-625y^2+90{,}000&=0\\
(y^2-225)(y^2-400)&=0.
\end{aligned}
$$

Thus $y=\pm15$ or $y=\pm20$. Since $y$ is a side of the rectangle, discard
the negative values. If the length is 15 inches, the width is 20 inches. If
the length is 20 inches, the width is 15 inches.

{{< fillin
  question="Edgar purchased a small 20-inch TV. Its screen has an area of $192$ square inches. Enter the shorter side length."
  answer="12"
  answerDisplay="$12$ inches"
  hint="The side lengths have product $192$ and their squares sum to $20^2$."
>}}

**Key terms.** A **system of nonlinear equations** is a system where at least
one of the equations is not linear.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 11.5](https://openstax.org/books/intermediate-algebra-2e/pages/11-5-solve-systems-of-nonlinear-equations) by Lynn Marecek and Andrea Honeycutt Mathis, &copy; OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at OpenStax. Changes: omitted readiness quizzes, practice sets, self-checks, media links, and complex source figures; converted selected Try It problems to interactive questions and described graphing constructions in words.</small>
