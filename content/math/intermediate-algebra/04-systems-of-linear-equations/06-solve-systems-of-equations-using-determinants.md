---
title: Solve Systems of Equations Using Determinants
description: >-
  Evaluating the determinant of a 2 × 2 and a 3 × 3 matrix, using Cramer's
  Rule to solve systems of two and three equations, recognizing inconsistent
  and dependent systems from the value of the determinants, and testing
  whether three points are collinear — adapted from OpenStax Intermediate
  Algebra 2e, Section 4.6.
source_section: "4.6"
weight: 6
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** evaluate the
  determinant of a $2 \times 2$ matrix, evaluate the determinant of a
  $3 \times 3$ matrix, use Cramer's Rule to solve systems of equations, and
  solve applications using determinants.
{{< /callout >}}

In this section we will learn of another method to solve systems of linear
equations called Cramer's Rule. Before we can begin to use the rule, we need
to learn some new definitions and notation.

## Evaluate the determinant of a 2 × 2 matrix

If a matrix has the same number of rows and columns, we call it a **square
matrix**. Each square matrix has a real number associated with it called its
**determinant**. To find the determinant of the square matrix
$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, we first write it as
$\begin{vmatrix} a & b \\ c & d \end{vmatrix}$. To get the real number value
of the determinant we subtract the products of the diagonals, as shown.

{{< callout type="info" >}}
  **Determinant.** The determinant of any square matrix
  $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, where $a$, $b$, $c$, and $d$
  are real numbers, is
  $$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad-bc.$$
{{< /callout >}}

**Example.** Evaluate the determinant of (a) $\begin{vmatrix} 4 & -2 \\ 3 & -1 \end{vmatrix}$
(b) $\begin{vmatrix} -3 & -4 \\ -2 & 0 \end{vmatrix}$.

(a) We subtract the products of the diagonals:

$$\begin{vmatrix} 4 & -2 \\ 3 & -1 \end{vmatrix} = 4(-1)-3(-2) = -4+6 = 2.$$

(b)

$$\begin{vmatrix} -3 & -4 \\ -2 & 0 \end{vmatrix} = -3(0)-(-2)(-4) = 0-8 = -8.$$

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix} 5 & -3 \\ 2 & -4 \end{vmatrix}$."
  answer="-14"
  hint="Subtract the product of the diagonals going the other way from the product of the main diagonal: $5(-4) - 2(-3)$."
>}}

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix} -1 & 3 \\ -2 & 4 \end{vmatrix}$."
  answer="2"
  hint="Subtract the products of the diagonals: $(-1)(4) - (-2)(3)$."
>}}

## Evaluate the determinant of a 3 × 3 matrix

To evaluate the determinant of a $3 \times 3$ matrix, we have to be able to
evaluate the **minor of an entry** in the determinant. The minor of an entry
is the $2 \times 2$ determinant found by eliminating the row and column in
the $3 \times 3$ determinant that contains the entry.

{{< callout type="info" >}}
  **Minor of an entry in a $3 \times 3$ determinant.** The minor of an entry
  in a $3 \times 3$ determinant is the $2 \times 2$ determinant found by
  eliminating the row and column in the $3 \times 3$ determinant that
  contains the entry.
{{< /callout >}}

To find the minor of entry $a_1$ in
$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$,
we eliminate the row and column that contain it — the first row and first
column — and write the $2 \times 2$ determinant that remains:
$$\text{minor of } a_1 = \begin{vmatrix} b_2 & c_2 \\ b_3 & c_3 \end{vmatrix}.$$

To find the minor of entry $b_2$, we eliminate the row and column that
contain it — the second row and second column — and write the $2 \times 2$
determinant that remains:
$$\text{minor of } b_2 = \begin{vmatrix} a_1 & c_1 \\ a_3 & c_3 \end{vmatrix}.$$

**Example.** For the determinant
$\begin{vmatrix} 4 & -2 & 3 \\ 1 & 0 & -3 \\ -2 & -4 & 2 \end{vmatrix}$, find
and then evaluate the minor of (a) $a_1$ (b) $b_3$ (c) $c_2$.

(a) We eliminate the row and column that contain $a_1$ (the first row and
first column):

$$\text{minor of } a_1 = \begin{vmatrix} 0 & -3 \\ -4 & 2 \end{vmatrix} = 0(2)-(-4)(-3) = 0-12 = -12.$$

(b) We eliminate the row and column that contain $b_3$ (the third row and
second column):

$$\text{minor of } b_3 = \begin{vmatrix} 4 & 3 \\ 1 & -3 \end{vmatrix} = 4(-3)-1(3) = -12-3 = -15.$$

(c) We eliminate the row and column that contain $c_2$ (the second row and
third column):

$$\text{minor of } c_2 = \begin{vmatrix} 4 & -2 \\ -2 & -4 \end{vmatrix} = 4(-4)-(-2)(-2) = -16-4 = -20.$$

{{< fillin
  question="For the determinant $\begin{vmatrix} 1 & -1 & 4 \\ 0 & 2 & -1 \\ -2 & -3 & 3 \end{vmatrix}$, find and evaluate the minor of $a_1$."
  answer="3"
  hint="Eliminate the first row and first column, then evaluate the $2\times 2$ determinant that remains."
>}}

{{< fillin
  question="For the determinant $\begin{vmatrix} -2 & -1 & 0 \\ 3 & 0 & -1 \\ -1 & -2 & 3 \end{vmatrix}$, find and evaluate the minor of $b_3$."
  answer="2"
  hint="Eliminate the third row and second column, then evaluate the $2\times 2$ determinant that remains."
>}}

We are now ready to evaluate a $3 \times 3$ determinant. To do this we
**expand by minors**, which allows us to evaluate the $3 \times 3$
determinant using $2 \times 2$ determinants — which we already know how to
evaluate! To evaluate a $3 \times 3$ determinant by expanding by minors along
the first row, we use the following pattern.

{{< callout type="info" >}}
  **Expanding by minors along the first row to evaluate a $3 \times 3$
  determinant.** To evaluate a $3 \times 3$ determinant by expanding by
  minors along the first row, the following pattern is used.
  $$
  \begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}
  = a_1 \begin{vmatrix} b_2 & c_2 \\ b_3 & c_3 \end{vmatrix}
  - b_1 \begin{vmatrix} a_2 & c_2 \\ a_3 & c_3 \end{vmatrix}
  + c_1 \begin{vmatrix} a_2 & b_2 \\ a_3 & b_3 \end{vmatrix}
  $$
{{< /callout >}}

**Example.** Evaluate the determinant
$\begin{vmatrix} 2 & -3 & -1 \\ 3 & 2 & 0 \\ -1 & -1 & -2 \end{vmatrix}$ by
expanding by minors along the first row.

$$\begin{vmatrix} 2 & -3 & -1 \\ 3 & 2 & 0 \\ -1 & -1 & -2 \end{vmatrix} = 2\begin{vmatrix} 2 & 0 \\ -1 & -2 \end{vmatrix} - (-3)\begin{vmatrix} 3 & 0 \\ -1 & -2 \end{vmatrix} + (-1)\begin{vmatrix} 3 & 2 \\ -1 & -1 \end{vmatrix}$$
$$= 2(-4-0)+3(-6-0)-1(-3-(-2)) = 2(-4)+3(-6)-1(-1) = -8-18+1 = -25.$$

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix} 3 & -2 & 4 \\ 0 & -1 & -2 \\ 2 & 3 & -1 \end{vmatrix}$ by expanding by minors along the first row."
  answer="37"
  hint="$a_1 \begin{vmatrix} b_2 & c_2 \\ b_3 & c_3 \end{vmatrix} - b_1\begin{vmatrix} a_2 & c_2 \\ a_3 & c_3 \end{vmatrix} + c_1\begin{vmatrix} a_2 & b_2 \\ a_3 & b_3 \end{vmatrix}$"
>}}

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix} 3 & -2 & -2 \\ 2 & -1 & 4 \\ -1 & 0 & -3 \end{vmatrix}$ by expanding by minors along the first row."
  answer="7"
  hint="$a_1 \begin{vmatrix} b_2 & c_2 \\ b_3 & c_3 \end{vmatrix} - b_1\begin{vmatrix} a_2 & c_2 \\ a_3 & c_3 \end{vmatrix} + c_1\begin{vmatrix} a_2 & b_2 \\ a_3 & b_3 \end{vmatrix}$"
>}}

To evaluate a $3 \times 3$ determinant we can expand by minors using any row
or column. Choosing a row or column other than the first row sometimes makes
the work easier. When we expand by any row or column, we must be careful
about the sign of the terms in the expansion. To determine the sign of the
terms, we use the following sign pattern chart.

{{< callout type="info" >}}
  **Sign pattern.** When expanding by minors using a row or column, the sign
  of the terms in the expansion follows this pattern.
  $$\begin{vmatrix} + & - & + \\ - & + & - \\ + & - & + \end{vmatrix}$$
{{< /callout >}}

Since we can expand by any row or column, how do we decide which one to use?
Usually we try to pick a row or column that will make our calculation
easier. If the determinant contains a $0$, using the row or column that
contains the $0$ will make the calculations easier.

**Example.** Evaluate the determinant
$\begin{vmatrix} 4 & -1 & -3 \\ 3 & 0 & 2 \\ 5 & -4 & -3 \end{vmatrix}$ by
expanding by minors.

To expand by minors, we look for a row or column that will make our
calculations easier. Since $0$ is in the second row and second column,
expanding by either of those is a good choice. Since the second row has
fewer negatives than the second column, we will expand by the second row —
watching the $-\,+\,-$ signs for that row:

$$\begin{vmatrix} 4 & -1 & -3 \\ 3 & 0 & 2 \\ 5 & -4 & -3 \end{vmatrix} = -3\begin{vmatrix} -1 & -3 \\ -4 & -3 \end{vmatrix} + 0\begin{vmatrix} 4 & -3 \\ 5 & -3 \end{vmatrix} - 2\begin{vmatrix} 4 & -1 \\ 5 & -4 \end{vmatrix}$$
$$= -3(3-12)+0(-12-(-15))-2(-16-(-5)) = -3(-9)+0(3)-2(-11) = 27+0+22 = 49.$$

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix} 2 & -1 & -3 \\ 0 & 3 & -4 \\ 3 & -4 & -3 \end{vmatrix}$ by expanding by minors."
  answer="-11"
  hint="Pick a row or column that makes the arithmetic easier, and watch the $+\,-\,+$ sign pattern."
>}}

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix} -2 & -1 & -3 \\ -1 & 2 & 2 \\ 4 & -4 & 0 \end{vmatrix}$ by expanding by minors."
  answer="-12"
  hint="Pick a row or column that makes the arithmetic easier, and watch the $+\,-\,+$ sign pattern."
>}}

## Use Cramer's Rule to solve systems of equations

Cramer's Rule is a method of solving systems of equations using
determinants. It can be derived by solving the general form of the systems
of equations by elimination. Here we will demonstrate the rule for both
systems of two equations with two variables and for systems of three
equations with three variables.

Let's start with the systems of two equations with two variables.

{{< callout type="info" >}}
  **Cramer's Rule for solving a system of two equations.** For the system of
  equations $\left\{\begin{array}{l} a_1x+b_1y=k_1 \\ a_2x+b_2y=k_2 \end{array}\right.$,
  the solution $(x,y)$ can be determined by
  $$x=\tfrac{D_x}{D} \quad \text{and} \quad y=\tfrac{D_y}{D}$$
  where
  $$D=\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} \quad\text{(coefficients of the variables)}$$
  $$D_x=\begin{vmatrix} k_1 & b_1 \\ k_2 & b_2 \end{vmatrix} \quad\text{(replace the } x \text{ coefficients with the constants)}$$
  $$D_y=\begin{vmatrix} a_1 & k_1 \\ a_2 & k_2 \end{vmatrix} \quad\text{(replace the } y \text{ coefficients with the constants)}$$
{{< /callout >}}

**Example.** Solve using Cramer's Rule: $\left\{\begin{array}{l} 2x+y=-4 \\ 3x-2y=-6 \end{array}\right.$

Evaluate the determinant $D$, using the coefficients of the variables:

$$D = \begin{vmatrix} 2 & 1 \\ 3 & -2 \end{vmatrix} = -4-3 = -7.$$

Evaluate the determinant $D_x$. Replace the coefficients of $x$, $2$ and
$3$, with the constants, $-4$ and $-6$:

$$D_x = \begin{vmatrix} -4 & 1 \\ -6 & -2 \end{vmatrix} = 8-(-6) = 14.$$

Evaluate the determinant $D_y$. Replace the coefficients of $y$, $1$ and
$-2$, with the constants, $-4$ and $-6$:

$$D_y = \begin{vmatrix} 2 & -4 \\ 3 & -6 \end{vmatrix} = -12-(-12) = 0.$$

Substitute in the values of $D$, $D_x$, and $D_y$ to find $x$ and $y$:

$$x=\frac{D_x}{D}=\frac{14}{-7}=-2 \qquad \text{and} \qquad y=\frac{D_y}{D}=\frac{0}{-7}=0.$$

The solution is the ordered pair $(-2,0)$. Substituting $x=-2,\ y=0$ into
both original equations confirms $(-2,0)$ is the solution to the system.

{{< callout type="info" >}}
  **Solve a system of two equations using Cramer's Rule.**

  1. Evaluate the determinant $D$, using the coefficients of the variables.
  2. Evaluate the determinant $D_x$. Use the constants in place of the $x$
     coefficients.
  3. Evaluate the determinant $D_y$. Use the constants in place of the $y$
     coefficients.
  4. Find $x$ and $y$: $x=\tfrac{D_x}{D},\ y=\tfrac{D_y}{D}$.
  5. Write the solution as an ordered pair.
  6. Check that the ordered pair is a solution to both original equations.
{{< /callout >}}

{{< fillin
  question="Solve using Cramer's Rule: $\left\{\begin{array}{l} 3x+y=-3 \\ 2x+3y=6 \end{array}\right.$ Enter the solution as an ordered pair."
  answer="(-15/7, 24/7)"
  hint="Evaluate $D=\begin{vmatrix}3&1\\2&3\end{vmatrix}$, $D_x=\begin{vmatrix}-3&1\\6&3\end{vmatrix}$, and $D_y=\begin{vmatrix}3&-3\\2&6\end{vmatrix}$, then form $x=\tfrac{D_x}{D}$ and $y=\tfrac{D_y}{D}$."
>}}

{{< fillin
  question="Solve using Cramer's Rule: $\left\{\begin{array}{l} -x+y=2 \\ 2x+y=-4 \end{array}\right.$ Enter the solution as an ordered pair."
  answer="(-2, 0)"
  hint="Evaluate $D=\begin{vmatrix}-1&1\\2&1\end{vmatrix}$, $D_x=\begin{vmatrix}2&1\\-4&1\end{vmatrix}$, and $D_y=\begin{vmatrix}-1&2\\2&-4\end{vmatrix}$, then form $x=\tfrac{D_x}{D}$ and $y=\tfrac{D_y}{D}$."
>}}

To solve a system of three equations with three variables with Cramer's
Rule, we basically do what we did for a system of two equations. However, we
now have to solve for three variables to get the solution. The determinants
are also going to be $3 \times 3$ which will make our work more interesting!

{{< callout type="info" >}}
  **Cramer's Rule for solving a system of three equations.** For the system
  of equations
  $\left\{\begin{array}{l} a_1x+b_1y+c_1z=k_1 \\ a_2x+b_2y+c_2z=k_2 \\ a_3x+b_3y+c_3z=k_3 \end{array}\right.$,
  the solution $(x,y,z)$ can be determined by
  $$x=\tfrac{D_x}{D},\ y=\tfrac{D_y}{D},\ \text{and } z=\tfrac{D_z}{D}$$
  where
  $$D=\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} \quad\text{(coefficients of the variables)}$$
  $$D_x=\begin{vmatrix} k_1 & b_1 & c_1 \\ k_2 & b_2 & c_2 \\ k_3 & b_3 & c_3 \end{vmatrix} \quad\text{(replace the } x \text{ coefficients with the constants)}$$
  $$D_y=\begin{vmatrix} a_1 & k_1 & c_1 \\ a_2 & k_2 & c_2 \\ a_3 & k_3 & c_3 \end{vmatrix} \quad\text{(replace the } y \text{ coefficients with the constants)}$$
  $$D_z=\begin{vmatrix} a_1 & b_1 & k_1 \\ a_2 & b_2 & k_2 \\ a_3 & b_3 & k_3 \end{vmatrix} \quad\text{(replace the } z \text{ coefficients with the constants)}$$
{{< /callout >}}

**Example.** Solve the system of equations using Cramer's Rule:
$\left\{\begin{array}{l} 3x-5y+4z=5 \\ 5x+2y+z=0 \\ 2x+3y-2z=3 \end{array}\right.$

Evaluate the determinant $D$, using the coefficients of the variables, by
expanding by minors using column $1$:

$$D = \begin{vmatrix} 3 & -5 & 4 \\ 5 & 2 & 1 \\ 2 & 3 & -2 \end{vmatrix} = 3\begin{vmatrix} 2 & 1 \\ 3 & -2 \end{vmatrix} - 5\begin{vmatrix} -5 & 4 \\ 3 & -2 \end{vmatrix} + 2\begin{vmatrix} -5 & 4 \\ 2 & 1 \end{vmatrix}$$
$$D = 3(-4-3)-5(10-12)+2(-5-8) = 3(-7)-5(-2)+2(-13) = -21+10-26 = -37.$$

Evaluate the determinant $D_x$. Use the constants to replace the
coefficients of $x$, then expand by minors using column $1$:

$$D_x = \begin{vmatrix} 5 & -5 & 4 \\ 0 & 2 & 1 \\ 3 & 3 & -2 \end{vmatrix} = 5\begin{vmatrix} 2 & 1 \\ 3 & -2 \end{vmatrix} - 0\begin{vmatrix} -5 & 4 \\ 3 & -2 \end{vmatrix} + 3\begin{vmatrix} -5 & 4 \\ 2 & 1 \end{vmatrix}$$
$$D_x = 5(-4-3)-0(10-12)+3(-5-8) = 5(-7)-0+3(-13) = -35-0-39 = -74.$$

Evaluate the determinant $D_y$. Use the constants to replace the
coefficients of $y$, then expand by minors using column $2$:

$$D_y = \begin{vmatrix} 3 & 5 & 4 \\ 5 & 0 & 1 \\ 2 & 3 & -2 \end{vmatrix} = -5\begin{vmatrix} 5 & 1 \\ 2 & -2 \end{vmatrix} + 0\begin{vmatrix} 5 & 4 \\ 3 & -2 \end{vmatrix} - 3\begin{vmatrix} 3 & 4 \\ 5 & 1 \end{vmatrix}$$
$$D_y = -5(-10-2)+0(-10-12)-3(3-20) = -5(-12)+0(-22)-3(-17) = 60+0+51 = 111.$$

Evaluate the determinant $D_z$. Use the constants to replace the
coefficients of $z$, then expand by minors using column $3$:

$$D_z = \begin{vmatrix} 3 & -5 & 5 \\ 5 & 2 & 0 \\ 2 & 3 & 3 \end{vmatrix} = 5\begin{vmatrix} 5 & 2 \\ 2 & 3 \end{vmatrix} - 0\begin{vmatrix} 3 & -5 \\ 2 & 3 \end{vmatrix} + 3\begin{vmatrix} 3 & -5 \\ 5 & 2 \end{vmatrix}$$
$$D_z = 5(15-4)-0(9-(-10))+3(6-(-25)) = 5(11)-0+3(31) = 55-0+93 = 148.$$

Find $x$, $y$, and $z$, then write the solution as an ordered triple:

$$x=\frac{D_x}{D}=\frac{-74}{-37}=2, \qquad y=\frac{D_y}{D}=\frac{111}{-37}=-3, \qquad z=\frac{D_z}{D}=\frac{148}{-37}=-4.$$

The solution is $(2,-3,-4)$. We leave the check, that this ordered triple is
a solution to all three original equations, to you.

{{< fillin
  question="Solve the system of equations using Cramer's Rule: $\left\{\begin{array}{l} 3x+8y+2z=-5 \\ 2x+5y-3z=0 \\ x+2y-2z=-1 \end{array}\right.$ Enter the solution as an ordered triple."
  answer="(-9, 3, -1)"
  hint="Evaluate $D$ using the coefficients of $x, y, z$, then $D_x$, $D_y$, $D_z$ by replacing one column of coefficients at a time with the constants $-5, 0, -1$."
>}}

{{< fillin
  question="Solve the system of equations using Cramer's Rule: $\left\{\begin{array}{l} 3x+y-6z=-3 \\ 2x+6y+3z=0 \\ 3x+2y-3z=-6 \end{array}\right.$ Enter the solution as an ordered triple."
  answer="(-6, 3, -2)"
  hint="Evaluate $D$ using the coefficients of $x, y, z$, then $D_x$, $D_y$, $D_z$ by replacing one column of coefficients at a time with the constants $-3, 0, -6$."
>}}

Cramer's Rule does not work when the value of the determinant $D$ is $0$, as
this would mean we would be dividing by $0$. But when $D=0$, the system is
either inconsistent or dependent.

When the value of $D=0$ and $D_x$, $D_y$, and $D_z$ are all zero, the system
is consistent and dependent and there are infinitely many solutions.

When the value of $D=0$ and $D_x$, $D_y$, and $D_z$ are not all zero, the
system is inconsistent and there is no solution.

{{< callout type="info" >}}
  **Dependent and inconsistent systems of equations.** For any system of
  equations, where the value of the determinant $D=0$,

  | Value of determinants | Type of system | Solution |
  | :--- | :--- | :--- |
  | $D=0$ and $D_x, D_y,$ and $D_z$ are all zero | consistent and dependent | infinitely many solutions |
  | $D=0$ and $D_x, D_y,$ and $D_z$ are not all zero | inconsistent | no solution |
{{< /callout >}}

In the next example, we will use the values of the determinants to find the
solution of the system.

**Example.** Solve the system of equations using Cramer's Rule:
$\left\{\begin{array}{l} x+3y=4 \\ -2x-6y=3 \end{array}\right.$

Evaluate the determinant $D$, using the coefficients of the variables:

$$D = \begin{vmatrix} 1 & 3 \\ -2 & -6 \end{vmatrix} = -6-(-6) = 0.$$

We cannot use Cramer's Rule to solve this system. But by looking at the
value of the determinants $D_x$ and $D_y$, we can determine whether the
system is dependent or inconsistent.

$$D_x = \begin{vmatrix} 4 & 3 \\ 3 & -6 \end{vmatrix} = -24-9 = -33.$$

Since all the determinants are not zero, the system is inconsistent. There
is no solution.

{{< multiplechoice
  question="Use Cramer's Rule to solve $\left\{\begin{array}{l} 4x-3y=8 \\ 8x-6y=14 \end{array}\right.$"
  hint="Evaluate $D$ first. If $D=0$, check whether $D_x$ or $D_y$ is nonzero."
  answer="no solution"
>}}
no solution
infinitely many solutions
(2, 0)
(-2, 0)
{{< /multiplechoice >}}

{{< multiplechoice
  question="Use Cramer's Rule to solve $\left\{\begin{array}{l} x=-3y+4 \\ 2x+6y=8 \end{array}\right.$"
  hint="Rewrite the first equation as $x+3y=4$, then evaluate $D$, $D_x$, and $D_y$."
  answer="infinitely many solutions"
>}}
no solution
infinitely many solutions
(4, 0)
(0, 4)
{{< /multiplechoice >}}

## Solve applications using determinants

An interesting application of determinants allows us to test if points are
collinear. Three points $(x_1,y_1)$, $(x_2,y_2)$ and $(x_3,y_3)$ are
collinear if and only if the determinant below is zero.

{{< callout type="info" >}}
  **Test for collinear points.** Three points $(x_1,y_1)$, $(x_2,y_2)$ and
  $(x_3,y_3)$ are collinear if and only if
  $$\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} = 0.$$
{{< /callout >}}

We will use this property in the next example.

**Example.** Determine whether the points $(5,-5)$, $(4,-3)$, and $(3,-1)$
are collinear.

Substitute the values into the determinant, then evaluate it by expanding by
minors using column $3$:

$$\begin{vmatrix} 5 & -5 & 1 \\ 4 & -3 & 1 \\ 3 & -1 & 1 \end{vmatrix} = 1\begin{vmatrix} 4 & -3 \\ 3 & -1 \end{vmatrix} - 1\begin{vmatrix} 5 & -5 \\ 3 & -1 \end{vmatrix} + 1\begin{vmatrix} 5 & -5 \\ 4 & -3 \end{vmatrix}$$
$$= 1(-4-(-9))-1(-5-(-15))+1(-15-(-20)) = 1(5)-1(10)+1(5) = 0.$$

The value of the determinant is $0$, so the points are collinear.

{{< multiplechoice
  question="Determine whether the points $(3,-2)$, $(5,-3)$, and $(1,-1)$ are collinear."
  hint="Form the $3\times 3$ determinant with the coordinates and a column of $1\text{s}$; it is zero exactly when the points are collinear."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the points $(-4,-1)$, $(-6,2)$, and $(-2,-4)$ are collinear."
  hint="Form the $3\times 3$ determinant with the coordinates and a column of $1\text{s}$; it is zero exactly when the points are collinear."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Key terms

**square matrix** — a matrix that has the same number of rows and columns.
**determinant** — a real number associated with a square matrix; for
$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, its value is
$\begin{vmatrix} a & b \\ c & d \end{vmatrix}=ad-bc$. **minor of an entry** —
in a $3\times 3$ determinant, the $2\times 2$ determinant found by
eliminating the row and column that contain the entry. **Cramer's Rule** — a
method of solving a system of equations using the determinant of the
coefficient matrix, $D$, and the determinants $D_x$, $D_y$ (and $D_z$)
formed by replacing one column of coefficients with the constants;
$x=\tfrac{D_x}{D}$, and so on. **collinear points** — points that lie on the
same line; three points are collinear if and only if the $3\times 3$
determinant formed from their coordinates and a column of $1\text{s}$ is
zero.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.6: Solve Systems of Equations Using Determinants](https://openstax.org/books/intermediate-algebra-2e/pages/4-6-solve-systems-of-equations-using-determinants) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: represented determinants and the sign-pattern chart with KaTeX vmatrix notation instead of the source's crossed-out row/column diagrams, and its step tables as single display equality chains; recreated the Dependent and Inconsistent Systems table as a markdown table; omitted the Be Prepared quiz, Media links, self-check, and section exercises; and converted the source Try Its into interactive exercises with instant feedback, reducing multi-part items to a single part each.</small>
