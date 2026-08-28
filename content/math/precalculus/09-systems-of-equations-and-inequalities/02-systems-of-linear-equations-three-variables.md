---
title: "Systems of Linear Equations: Three Variables"
description: >-
  Solving 3×3 linear systems by elimination and Gaussian elimination with
  back-substitution, verifying ordered-triple solutions, identifying
  inconsistent systems, expressing the general solution of a dependent
  system, and setting up a three-variable investment problem — adapted from
  OpenStax Precalculus 2e, Section 9.2.
source_section: "9.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve systems of three equations in three variables
- Identify inconsistent systems of equations containing three variables
- Express the solution of a system of dependent equations containing three variables
{{< /callout >}}

Jordi received an inheritance of \$12,000 that he divided into three parts and invested in three ways: in a money-market fund paying 3% annual interest; in municipal bonds paying 4% annual interest; and in mutual funds paying 7% annual interest. Jordi invested \$4,000 more in mutual funds than in municipal bonds. He earned \$670 in interest the first year. How much did Jordi invest in each type of fund?

Understanding the correct approach to setting up problems such as this one makes finding a solution a matter of following a pattern. We will solve this and similar problems involving three equations and three variables in this section. Doing so uses similar techniques as those used to solve systems of two equations in two variables. However, finding solutions to systems of three equations requires a bit more organization and a touch of visualization.

### Solving Systems of Three Equations in Three Variables

In order to solve systems of equations in three variables, known as three-by-three systems, the primary tool we will be using is called **Gaussian elimination**, named after the prolific German mathematician Karl Friedrich Gauss. While there is no definitive order in which operations are to be performed, there are specific guidelines as to what type of moves can be made. We may number the equations to keep track of the steps we apply. The goal is to eliminate one variable at a time to achieve **upper triangular form**, the ideal form for a three-by-three system because it allows for straightforward back-substitution to find a solution $(x,y,z)$, which we call an **ordered triple**. A system in upper triangular form looks like the following:

$$
\begin{array}{l}
Ax + By + Cz = D \\
\phantom{Ax + B}Ey + Fz = G \\
\phantom{Ax + By + C}Hz = K
\end{array}
$$

The third equation can be solved for $z$, and then we back-substitute to find $y$ and $x$. To write the system in upper triangular form, we can perform the following operations:

1. Interchange the order of any two equations.
2. Multiply both sides of an equation by a nonzero constant.
3. Add a nonzero multiple of one equation to another equation.

The solution set to a three-by-three system is an ordered triple $\{(x,y,z)\}$. Graphically, the ordered triple defines the point that is the intersection of three planes in space. You can visualize such an intersection by imagining any corner in a rectangular room. A corner is defined by three planes: two adjoining walls and the floor (or ceiling). Any point where two walls and the floor meet represents the intersection of three planes.

{{< callout type="info" >}}
  **Number of Possible Solutions.**

  - Systems that have a single solution are those which, after elimination, result in a solution set consisting of an ordered triple $\{(x,y,z)\}$. Graphically, the ordered triple defines a point that is the intersection of three planes in space.
  - Systems that have an infinite number of solutions are those which, after elimination, result in an expression that is always true, such as $0=0$. Graphically, an infinite number of solutions represents a line or coincident plane that serves as the intersection of three planes in space.
  - Systems that have no solution are those that, after elimination, result in a statement that is a contradiction, such as $3=0$. Graphically, a system with no solution is represented by three planes with no point in common.
{{< /callout >}}

The figures below illustrate the possible solution scenarios. Three planes intersecting at a single point represent a system with a single solution — the marked point is the one ordered triple satisfying all three equations:

{{< apfigure kind="figure" >}}
{"ariaLabel":"Three planes drawn as translucent parallelograms — one horizontal, one vertical seen edge-on, and one facing the reader — overlapping at the center, with a single point marked where all three meet.","unit":52,"polygons":[{"points":[[-2.467,-0.378],[1.333,-0.378],[2.467,0.378],[-1.333,0.378]],"fill":true},{"points":[[-0.567,-1.628],[0.567,-0.872],[0.567,1.628],[-0.567,0.872]],"fill":true},{"points":[[-1.9,-1.25],[1.9,-1.25],[1.9,1.25],[-1.9,1.25]],"fill":true}],"points":[{"at":[0,0],"r":3.5}]}
{{< /apfigure >}}

Three planes intersecting in a line represent a system with infinitely many solutions — every point along the marked line satisfies all three equations:

{{< apfigure kind="figure" >}}
{"ariaLabel":"Three translucent planes, each containing the same vertical line, fanned at different angles around it; a vertical double-headed arrow runs along the shared line of intersection.","unit":48,"polygons":[{"points":[[-0.567,-1.878],[0.567,-1.122],[0.567,1.878],[-0.567,1.122]],"fill":true},{"points":[[-1.704,-1.836],[1.704,-1.164],[1.704,1.836],[-1.704,1.164]],"fill":true},{"points":[[-0.812,-1.108],[0.812,-1.892],[0.812,1.108],[-0.812,1.892]],"fill":true}],"segments":[{"from":[0,-2.1],"to":[0,2.1],"arrow":"both"}]}
{{< /apfigure >}}

A system with no solution can arrange its three planes three ways. The planes may intersect each other pairwise, with no point common to all three:

{{< apfigure kind="figure" >}}
{"ariaLabel":"Two slanted translucent bands crossing in an X and a horizontal band lower down crossing each of them; each pair of planes overlaps in its own region, but no region is common to all three.","unit":48,"polygons":[{"points":[[-2.3,-1.5],[-1.1,-1.5],[2.3,1.7],[1.1,1.7]],"fill":true},{"points":[[1.1,-1.5],[2.3,-1.5],[-1.1,1.7],[-2.3,1.7]],"fill":true},{"points":[[-2.7,-1.35],[2.7,-1.35],[2.7,-0.65],[-2.7,-0.65]],"fill":true}]}
{{< /apfigure >}}

Two of the planes may be parallel, each intersecting the third — but never each other:

{{< apfigure kind="figure" >}}
{"ariaLabel":"Two parallel horizontal translucent planes, one above the other, with a vertical plane passing through both.","unit":48,"polygons":[{"points":[[-2.467,-1.178],[1.333,-1.178],[2.467,-0.422],[-1.333,-0.422]],"fill":true},{"points":[[-2.467,0.422],[1.333,0.422],[2.467,1.178],[-1.333,1.178]],"fill":true},{"points":[[-0.567,-1.978],[0.567,-1.222],[0.567,1.978],[-0.567,1.222]],"fill":true}]}
{{< /apfigure >}}

Or all three planes may be parallel, sharing no point at all:

{{< apfigure kind="figure" >}}
{"ariaLabel":"Three parallel horizontal translucent planes stacked with equal gaps, none touching another.","unit":48,"polygons":[{"points":[[-2.467,-1.478],[1.333,-1.478],[2.467,-0.722],[-1.333,-0.722]],"fill":true},{"points":[[-2.467,-0.378],[1.333,-0.378],[2.467,0.378],[-1.333,0.378]],"fill":true},{"points":[[-2.467,0.722],[1.333,0.722],[2.467,1.478],[-1.333,1.478]],"fill":true}]}
{{< /apfigure >}}

**Example.** Determine whether the ordered triple $(3,-2,1)$ is a solution to the system.

$$
\begin{array}{l}
x + y + z = 2 \\
6x - 4y + 5z = 31 \\
5x + 2y + 2z = 13
\end{array}
$$

**Solution.** We will check each equation by substituting in the values of the ordered triple for $x$, $y$, and $z$.

$$
\begin{array}{lrcl}
& x+y+z &=& 2 \\[4pt]
& (3)+(-2)+(1) &=& 2 \quad\text{True}
\end{array}
$$

$$
\begin{array}{lrcl}
& 6x-4y+5z &=& 31 \\[4pt]
& 6(3)-4(-2)+5(1) &=& 31 \\[4pt]
& 18+8+5 &=& 31 \quad\text{True}
\end{array}
$$

$$
\begin{array}{lrcl}
& 5x+2y+2z &=& 13 \\[4pt]
& 5(3)+2(-2)+2(1) &=& 13 \\[4pt]
& 15-4+2 &=& 13 \quad\text{True}
\end{array}
$$

The ordered triple $(3,-2,1)$ is indeed a solution to the system.

{{< callout type="info" >}}
  **How To:** given a linear system of three equations, solve for three unknowns.

  1. Pick any pair of equations and solve for one variable.
  2. Pick another pair of equations and solve for the same variable.
  3. You have created a system of two equations in two unknowns. Solve the resulting two-by-two system.
  4. Back-substitute known variables into any one of the original equations and solve for the missing variable.
{{< /callout >}}

**Example.** Find a solution to the following system:

$$
\begin{array}{ll}
x-2y+3z=9 & (1) \\
-x+3y-z=-6 & (2) \\
2x-5y+5z=17 & (3)
\end{array}
$$

**Solution.** There will always be several choices as to where to begin, but the most obvious first step here is to eliminate $x$ by adding equations (1) and (2).

$$
\begin{array}{lrcl}
& x-2y+3z &=& 9 \quad(1) \\[4pt]
& -x+3y-z &=& -6 \quad(2) \\[4pt]
\text{Add the two equations.} & y+2z &=& 3 \quad(4)
\end{array}
$$

The second step is multiplying equation (1) by $-2$ and adding the result to equation (3). These two steps will eliminate the variable $x$.

$$
\begin{array}{lrcl}
& -2x+4y-6z &=& -18 \quad\text{(1) multiplied by }-2 \\[4pt]
& 2x-5y+5z &=& 17 \quad(3) \\[4pt]
\text{Add the two equations.} & -y-z &=& -1 \quad(5)
\end{array}
$$

In equations (4) and (5), we have created a new two-by-two system. We can solve for $z$ by adding the two equations.

$$
\begin{array}{lrcl}
& y+2z &=& 3 \quad(4) \\[4pt]
& -y-z &=& -1 \quad(5) \\[4pt]
\text{Add the two equations.} & z &=& 2 \quad(6)
\end{array}
$$

Choosing one equation from each new system, we obtain the upper triangular form:

$$
\begin{array}{ll}
x-2y+3z=9 & (1) \\
y+2z=3 & (4) \\
z=2 & (6)
\end{array}
$$

Next, we back-substitute $z=2$ into equation (4) and solve for $y$.

$$
\begin{array}{lrcl}
& y+2(2) &=& 3 \\[4pt]
& y+4 &=& 3 \\[4pt]
& y &=& -1
\end{array}
$$

Finally, we back-substitute $z=2$ and $y=-1$ into equation (1). This will yield the solution for $x$.

$$
\begin{array}{lrcl}
& x-2(-1)+3(2) &=& 9 \\[4pt]
& x+2+6 &=& 9 \\[4pt]
& x &=& 1
\end{array}
$$

The solution is the ordered triple $(1,-1,2)$. Graphically, the planes $x=1$, $y=-2$, and $z=2$ meet at exactly that point:

{{< apfigure kind="figure" >}}
{"ariaLabel":"Three translucent planes labeled x = 1, y = −2, and z = 2 — one horizontal, one vertical seen edge-on, and one facing the reader — meeting at a single marked point, with a leader line to the label (1, −1, 2).","unit":52,"polygons":[{"points":[[-2.467,-0.378],[1.333,-0.378],[2.467,0.378],[-1.333,0.378]],"fill":true},{"points":[[-0.567,-1.628],[0.567,-0.872],[0.567,1.628],[-0.567,0.872]],"fill":true},{"points":[[-1.9,-1.25],[1.9,-1.25],[1.9,1.25],[-1.9,1.25]],"fill":true}],"points":[{"at":[0,0],"r":3.5}],"segments":[{"from":[0.06,0.1],"to":[0.75,1.55]}],"texts":[{"at":[0.8,1.62],"text":"(1, −1, 2)","anchor":"start"},{"at":[0.62,-1.72],"text":"x = 1","anchor":"start"},{"at":[2.55,0.28],"text":"z = 2","anchor":"start"},{"at":[-1.6,-1.45],"text":"y = −2","anchor":"start"}]}
{{< /apfigure >}}

**Example.** In the problem posed at the beginning of the section, Jordi invested his inheritance of \$12,000 in three different funds: part in a money-market fund paying 3% interest annually; part in municipal bonds paying 4% annually; and the rest in mutual funds paying 7% annually. Jordi invested \$4,000 more in mutual funds than he invested in municipal bonds. The total interest earned in one year was \$670. How much did he invest in each type of fund?

**Solution.** To solve this problem, we use all of the information given and set up three equations. First, we assign a variable to each of the three investment amounts:

$$
\begin{array}{l}
x = \text{amount invested in money-market fund} \\
y = \text{amount invested in municipal bonds} \\
z = \text{amount invested in mutual funds}
\end{array}
$$

The first equation indicates that the sum of the three principal amounts is \$12,000.

$$x+y+z=12{,}000$$

We form the second equation according to the information that Jordi invested \$4,000 more in mutual funds than he invested in municipal bonds.

$$z=y+4{,}000$$

The third equation shows that the total amount of interest earned from each fund equals \$670.

$$0.03x+0.04y+0.07z=670$$

Then, we write the three equations as a system.

$$
\begin{array}{l}
x+y+z=12{,}000 \\
-y+z=4{,}000 \\
0.03x+0.04y+0.07z=670
\end{array}
$$

To make the calculations simpler, we can multiply the third equation by 100. Thus,

$$
\begin{array}{ll}
x+y+z=12{,}000 & (1) \\
-y+z=4{,}000 & (2) \\
3x+4y+7z=67{,}000 & (3)
\end{array}
$$

Step 1. Interchange equation (2) and equation (3) so that the two equations with three variables will line up.

$$
\begin{array}{l}
x+y+z=12{,}000 \\
3x+4y+7z=67{,}000 \\
-y+z=4{,}000
\end{array}
$$

Step 2. Multiply equation (1) by $-3$ and add to equation (2). Write the result as row 2.

$$
\begin{array}{l}
x+y+z=12{,}000 \\
y+4z=31{,}000 \\
-y+z=4{,}000
\end{array}
$$

Step 3. Add equation (2) to equation (3) and write the result as equation (3).

$$
\begin{array}{l}
x+y+z=12{,}000 \\
y+4z=31{,}000 \\
5z=35{,}000
\end{array}
$$

Step 4. Solve for $z$ in equation (3). Back-substitute that value in equation (2) and solve for $y$. Then, back-substitute the values for $z$ and $y$ into equation (1) and solve for $x$.

$$
\begin{array}{lrcl}
& 5z &=& 35{,}000 \\[4pt]
& z &=& 7{,}000
\end{array}
$$

$$
\begin{array}{lrcl}
& y+4(7{,}000) &=& 31{,}000 \\[4pt]
& y &=& 3{,}000
\end{array}
$$

$$
\begin{array}{lrcl}
& x+3{,}000+7{,}000 &=& 12{,}000 \\[4pt]
& x &=& 2{,}000
\end{array}
$$

Jordi invested \$2,000 in a money-market fund, \$3,000 in municipal bonds, and \$7,000 in mutual funds.

{{< fillin
  question="Solve the system of equations in three variables, as an ordered triple $(x,y,z)$. $\begin{cases}2x+y-2z=-1\\3x-3y-z=5\\x-2y+3z=6\end{cases}$"
  answer="(1,-1,1)"
  answerDisplay="$(1,-1,1)$"
  hint="Eliminate x from a pair of equations, then eliminate x again from a different pair, to get a two-by-two system in y and z."
>}}

### Identifying Inconsistent Systems of Equations Containing Three Variables

Just as with systems of equations in two variables, we may come across an **inconsistent system** of equations in three variables, which means that it does not have a solution that satisfies all three equations. The equations could represent three parallel planes, two parallel planes and one intersecting plane, or three planes that intersect the other two but not at the same location. The process of elimination will result in a false statement, such as $3=7$ or some other contradiction.

**Example.** Solve the following system.

$$
\begin{array}{ll}
x-3y+z=4 & (1) \\
-x+2y-5z=3 & (2) \\
5x-13y+13z=8 & (3)
\end{array}
$$

**Solution.** Looking at the coefficients of $x$, we can see that we can eliminate $x$ by adding equation (1) to equation (2).

$$
\begin{array}{lrcl}
& x-3y+z &=& 4 \quad(1) \\[4pt]
& -x+2y-5z &=& 3 \quad(2) \\[4pt]
\text{Add the two equations.} & -y-4z &=& 7 \quad(4)
\end{array}
$$

Next, we multiply equation (1) by $-5$ and add it to equation (3).

$$
\begin{array}{lrcl}
& -5x+15y-5z &=& -20 \quad\text{(1) multiplied by }-5 \\[4pt]
& 5x-13y+13z &=& 8 \quad(3) \\[4pt]
\text{Add the two equations.} & 2y+8z &=& -12 \quad(5)
\end{array}
$$

Then, we multiply equation (4) by 2 and add it to equation (5).

$$
\begin{array}{lrcl}
& -2y-8z &=& 14 \quad\text{(4) multiplied by }2 \\[4pt]
& 2y+8z &=& -12 \quad(5) \\[4pt]
\text{Add the two equations.} & 0 &=& 2
\end{array}
$$

The final equation $0=2$ is a contradiction, so we conclude that the system of equations in inconsistent and, therefore, has no solution.

**Analysis.** In this system, each plane intersects the other two, but not at the same location. Therefore, the system is inconsistent.

{{< multiplechoice
  question="Solve the system of three equations in three variables. $\begin{cases}x+y+z=2\\y-3z=1\\2x+y+5z=0\end{cases}$ How many solutions does the system have?"
  answer="no solution — the system is inconsistent"
  hint="Eliminate x using equations (1) and (3), then compare the resulting two-variable equation with equation (2)."
>}}
no solution — the system is inconsistent
one solution — the system is independent
infinitely many solutions — the system is dependent
{{< /multiplechoice >}}

### Expressing the Solution of a System of Dependent Equations Containing Three Variables

We know from working with systems of equations in two variables that a **dependent system** of equations has an infinite number of solutions. The same is true for dependent systems of equations in three variables. An infinite number of solutions can result from several situations. The three planes could be the same, so that a solution to one equation will be the solution to the other two equations. All three equations could be different but they intersect on a line, which has infinite solutions. Or two of the equations could be the same and intersect the third on a line.

**Example.** Find the solution to the given system of three equations in three variables.

$$
\begin{array}{ll}
2x+y-3z=0 & (1) \\
4x+2y-6z=0 & (2) \\
x-y+z=0 & (3)
\end{array}
$$

**Solution.** First, we can multiply equation (1) by $-2$ and add it to equation (2).

$$
\begin{array}{lrcl}
& -4x-2y+6z &=& 0 \quad\text{equation (1) multiplied by }-2 \\[4pt]
& 4x+2y-6z &=& 0 \quad(2) \\[4pt]
\text{Add the two equations.} & 0 &=& 0
\end{array}
$$

We do not need to proceed any further. The result we get is an identity, $0=0$, which tells us that this system has an infinite number of solutions. There are other ways to begin to solve this system, such as multiplying equation (3) by $-2$, and adding it to equation (1). We then perform the same steps as above and find the same result, $0=0$.

When a system is dependent, we can find general expressions for the solutions. Adding equations (1) and (3), we have

$$
\begin{array}{lrcl}
& 2x+y-3z &=& 0 \\[4pt]
& x-y+z &=& 0 \\[4pt]
\text{Add the two equations.} & 3x-2z &=& 0
\end{array}
$$

We then solve the resulting equation for $z$.

$$
\begin{array}{lrcl}
& 3x-2z &=& 0 \\[4pt]
& z &=& \tfrac{3}{2}x
\end{array}
$$

We back-substitute the expression for $z$ into one of the equations and solve for $y$.

$$
\begin{array}{lrcl}
& 2x+y-3\left(\tfrac{3}{2}x\right) &=& 0 \\[4pt]
& 2x+y-\tfrac{9}{2}x &=& 0 \\[4pt]
& y &=& \tfrac{9}{2}x-2x \\[4pt]
& y &=& \tfrac{5}{2}x
\end{array}
$$

So the general solution is $\left(x,\tfrac{5}{2}x,\tfrac{3}{2}x\right)$. In this solution, $x$ can be any real number. The values of $y$ and $z$ are dependent on the value selected for $x$.

**Analysis.** Two of the planes are the same and they intersect the third plane on a line. The solution set is infinite, as all points along the intersection line will satisfy all three equations.

{{< apfigure kind="figure" >}}
{"ariaLabel":"Two translucent bands crossing in an X shape: one band, rising to the upper right, is labeled x − y + z = 0; the other, falling to the lower right, carries both labels −4x − 2y + 6z = 0 and 4x + 2y − 6z = 0, since those two equations describe the same plane. The bands overlap in a diamond where the two distinct planes intersect.","unit":46,"polygons":[{"points":[[-2.3,-1.6],[-0.9,-1.6],[2.3,1.6],[0.9,1.6]],"fill":true},{"points":[[0.9,-1.6],[2.3,-1.6],[-0.9,1.6],[-2.3,1.6]],"fill":true}],"texts":[{"at":[2.45,1.45],"text":"x − y + z = 0","anchor":"start"},{"at":[2.45,-1.2],"text":"−4x − 2y + 6z = 0","anchor":"start"},{"at":[2.45,-1.65],"text":"4x + 2y − 6z = 0","anchor":"start"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Does the generic solution to a dependent system always have to be written in terms of $x$?*

  No, you can write the generic solution in terms of any of the variables, but it is common to write it in terms of $x$ and if needed $x$ and $y$.
{{< /callout >}}

{{< fillin
  question="Solve the following system, expressing the general solution as an ordered triple $(x,y,z)$ in terms of $x$. $\begin{cases}x+y+z=7\\3x-2y-z=4\\x+6y+5z=24\end{cases}$"
  answer="(x,4x-11,-5x+18)"
  answerDisplay="$(x,4x-11,-5x+18)$"
  hint="Add equations to eliminate z first, then eliminate it again from a different pair to get two equations relating x and y alone."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and
practice with systems of equations in three variables.
{{< /callout >}}

## Key concepts

- A solution set is an ordered triple $\{(x,y,z)\}$ that represents the intersection of three planes in space.
- A system of three equations in three variables can be solved by using a series of steps that forces a variable to be eliminated. The steps include interchanging the order of equations, multiplying both sides of an equation by a nonzero constant, and adding a nonzero multiple of one equation to another equation.
- Systems of three equations in three variables are useful for solving many different types of real-world problems.
- A system of equations in three variables is inconsistent if no solution exists. After performing elimination operations, the result is a contradiction.
- Systems of equations in three variables that are inconsistent could result from three parallel planes, two parallel planes and one intersecting plane, or three planes that intersect the other two but not at the same location.
- A system of equations in three variables is dependent if it has an infinite number of solutions. After performing elimination operations, the result is an identity.
- Systems of equations in three variables that are dependent could result from three identical planes, three planes intersecting at a line, or two identical planes that intersect the third on a line.

## Practice

### Solve systems of three equations in three variables

{{< multiplechoice
  question="Determine whether the ordered triple $(3,-3,-5)$ is a solution to the given system. $\begin{cases}6x-y+3z=6\\3x+5y+2z=0\\x+y=0\end{cases}$"
  answer="not a solution"
  hint="Substitute x=3, y=-3, z=-5 into all three equations; if any one fails, the triple is not a solution."
>}}
a solution
not a solution
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the ordered triple $(4,4,-1)$ is a solution to the given system. $\begin{cases}x-y=0\\x-z=5\\x-y+z=-1\end{cases}$"
  answer="a solution"
  hint="Substitute x=4, y=4, z=-1 into all three equations and check that each one is true."
>}}
a solution
not a solution
{{< /multiplechoice >}}

{{< fillin
  question="Solve the system by elimination, as an ordered triple $(x,y,z)$. $\begin{cases}3x-4y+2z=-15\\2x+4y+z=16\\2x+3y+5z=20\end{cases}$"
  answer="(-1,4,2)"
  answerDisplay="$(-1,4,2)$"
  hint="Add the first two equations to eliminate y, then combine a different pair of equations to eliminate y again."
>}}

{{< fillin
  question="Solve the system by Gaussian elimination, as an ordered triple $(x,y,z)$. $\begin{cases}2x-y+3z=17\\-5x+4y-2z=-46\\2y+5z=-7\end{cases}$"
  answer="(4,-6,1)"
  answerDisplay="$(4,-6,1)$"
  hint="The third equation already has x eliminated; eliminate x from the first two equations to get a second equation in y and z."
>}}

### Identify inconsistent systems of equations containing three variables

{{< multiplechoice
  question="Solve the system by any method. $\begin{cases}x+y+z=14\\2y+3z=-14\\-16y-24z=-112\end{cases}$ How many solutions does the system have?"
  answer="no solution"
  hint="Compare the second equation to the third by multiplying the second equation by -8."
>}}
no solution
one solution
infinitely many solutions
{{< /multiplechoice >}}

{{< multiplechoice
  question="True or false: if the ordered triple $(0,0,0)$ does not satisfy every equation of $\begin{cases}2x+3y-6z=1\\-4x-6y+12z=-2\\x+2y+5z=10\end{cases}$, then the system has no solution."
  answer="False"
  hint="A triple failing to check is not a solution itself, but the system could still have one solution, no solution, or infinitely many — try solving the system instead of testing a single guess."
>}}
True
False
{{< /multiplechoice >}}

### Express the solution of a system of dependent equations containing three variables

{{< fillin
  question="Solve the system, expressing the general solution as an ordered triple $(x,y,z)$ in terms of $x$. $\begin{cases}2x+3y-6z=1\\-4x-6y+12z=-2\\x+2y+5z=10\end{cases}$"
  answer="(x,(65-16x)/27,(x+28)/27)"
  answerDisplay="$\left(x,\tfrac{65-16x}{27},\tfrac{x+28}{27}\right)$"
  hint="Notice the second equation is -2 times the first, so it contributes no new information; use the first and third equations to solve for y and z in terms of x."
>}}

{{< multiplechoice
  question="Three coworkers work for the same employer. Their jobs are warehouse manager, office manager, and truck driver. The sum of the annual salaries of the warehouse manager and office manager is \$82,000. The office manager makes \$4,000 more than the truck driver annually. The annual salaries of the warehouse manager and the truck driver total \$78,000. Setting up a system of three equations in three variables for the three salaries, how many solutions does the system have?"
  answer="infinitely many solutions — the system is dependent, so more information is needed"
  hint="Write the three salary equations and check whether one of them can be obtained by combining the other two."
>}}
no solution
exactly one solution
infinitely many solutions — the system is dependent, so more information is needed
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 9.2: Systems of Linear Equations: Three Variables](https://openstax.org/books/precalculus-2e/pages/9-2-systems-of-linear-equations-three-variables) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the section's `coreq-skills` block, an Intermediate Algebra-flavored duplicate of this same material (its own learning objectives, worked example, and two "Practice Makes Perfect" exercise sets) that is not part of the printed Precalculus 2e page — the printed section opens directly with the coin-photo figure and the Jordi word problem, confirmed against the rendered PDF; omitted that opening coin photograph, which carries no mathematics; recreated the source's four schematic 3D plane-intersection illustrations (the "Number of Possible Solutions" overview pair, drawn here as five single-panel figures, and the individual figures attached to Examples 2 and 5) as accessible inline figures: each plane is a translucent parallelogram whose corners are computed from the plane's own 3D rectangle under a fixed oblique projection (or drawn as a flat band where the source itself uses flat band art), with overlapping fills reading darker exactly where planes cross, and the marked point, intersection line, and equation labels matching the source panels; the source's color coding is rendered monochrome, matching every other figure in this book. Kept the "Media" callout's introductory sentence but omitted its two external video links, matching house precedent elsewhere in this book. Converted the three "Try It" checks into interactive components: a fill-in keyed to the ordered-triple solution for the elimination Try It, a multiple choice (no solution / one solution / infinitely many solutions) for the inconsistent-system Try It, since a solution count is categorical and cannot be graded as a math expression, and a fill-in keyed to the general solution in terms of $x$ for the dependent-system Try It. Adapted eight selected end-of-section exercises, independently re-derived and checked by substituting each solution into all three printed equations (by running the arithmetic), into the closing Practice block, one group per objective: two solution-verification items (Algebraic #7 and #9) and two elimination items (Algebraic #11 and #17) for the first objective; the no-solution elimination item (Algebraic #23) and a true/false item built from the printed counterexample system in Verbal #3 for the second objective; and the dependent Gaussian-elimination item (Algebraic #19) for the third objective. The Real-World Applications salary word problem (#57) is genuinely a dependent 3×3 system — the office-manager/truck-driver relation combines with the other two equations to leave the sum of warehouse-manager and office-manager salaries as the only independent constraint tying all three variables, matching the source's own "infinitely many solutions; we need more information" key. It is posed as a multiple choice about the number of solutions because that categorical statement is the source's own printed key — the source does not print a parameterized general solution for it, unlike Algebraic #19, whose printed solution supports the general-solution fill-in.</small>
