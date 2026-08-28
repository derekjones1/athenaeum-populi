---
title: Solving Systems with Cramer's Rule
description: >-
  Evaluating $2\times2$ and $3\times3$ determinants, using Cramer's Rule to
  solve systems of two and three linear equations, recognizing inconsistent
  and dependent systems from the value of the determinants, and applying the
  properties of determinants — adapted from OpenStax Precalculus 2e, Section
  9.8.
source_section: "9.8"
weight: 8
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Evaluate $2\times2$ determinants
- Use Cramer's Rule to solve a system of equations in two variables
- Evaluate $3\times3$ determinants
- Use Cramer's Rule to solve a system of three equations in three variables
- Know the properties of determinants
{{< /callout >}}

We have learned how to solve systems of equations in two variables and three variables, and by multiple methods: substitution, addition, Gaussian elimination, using the inverse of a matrix, and graphing. Some of these methods are easier to apply than others and are more appropriate in certain situations. In this section, we will study two more strategies for solving systems of equations.

### Evaluating the Determinant of a $2\times2$ Matrix

A determinant is a real number that can be very useful in mathematics because it has multiple applications, such as calculating area, volume, and other quantities. Here, we will use determinants to reveal whether a matrix is invertible by using the entries of a **square matrix** to determine whether there is a solution to the system of equations. Perhaps one of the more interesting applications, however, is their use in cryptography. Secure signals or messages are sometimes sent encoded in a matrix. The data can only be decrypted with an **invertible matrix** and the determinant. For our purposes, we focus on the determinant as an indication of the invertibility of the matrix. Calculating the determinant of a matrix involves following the specific patterns that are outlined in this section.

{{< callout type="info" >}}
  **Find the Determinant of a $2\times2$ Matrix.** The **determinant** of a $2\times2$ matrix, given

  $$A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$$

  is defined as

  $$\det(A)=\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$$

  Notice the change in notation. There are several ways to indicate the determinant, including $\det(A)$ and replacing the brackets in a matrix with straight lines, $\lvert A\rvert$.
{{< /callout >}}

{{< apfigure kind="figure" >}}
{"ariaLabel":"A mnemonic diagram for the determinant of a 2 by 2 matrix with entries a, b in the top row and c, d in the bottom row: a solid arrow runs from a down to d labeled the product ad, and a dashed arrow runs from c up to b labeled the product minus c b.","unit":80,"texts":[{"at":[0,1],"text":"a","dx":-16,"dy":-8},{"at":[1,1],"text":"b","dx":16,"dy":-8},{"at":[0,0],"text":"c","dx":-16,"dy":12},{"at":[1,0],"text":"d","dx":16,"dy":12},{"at":[0.5,1.28],"text":"ad"},{"at":[0.5,-0.32],"text":"−cb"}],"segments":[{"from":[0,1],"to":[1,0],"arrow":true},{"from":[0,0],"to":[1,1],"arrow":true,"dashed":true}]}
{{< /apfigure >}}

**Example.** Find the determinant of the given matrix.

$$A=\begin{bmatrix}5&2\\-6&3\end{bmatrix}$$

**Solution.**

$$\det(A)=\begin{vmatrix}5&2\\-6&3\end{vmatrix}=5(3)-(-6)(2)=27$$

### Using Cramer's Rule to Solve a System of Two Equations in Two Variables

We will now introduce a final method for solving systems of equations that uses determinants. Known as **Cramer's Rule**, this technique dates back to the middle of the 18th century and is named for its innovator, the Swiss mathematician Gabriel Cramer (1704–1752), who introduced it in 1750 in *Introduction à l'Analyse des lignes Courbes algébriques*. Cramer's Rule is a viable and efficient method for finding solutions to systems with an arbitrary number of unknowns, provided that we have the same number of equations as unknowns.

Cramer's Rule will give us the unique solution to a system of equations, if it exists. However, if the system has no solution or an infinite number of solutions, this will be indicated by a determinant of zero. To find out if the system is inconsistent or dependent, another method, such as elimination, will have to be used.

To understand Cramer's Rule, let's look closely at how we solve systems of linear equations using basic row operations. Consider a system of two equations in two variables.

$$
\begin{array}{lrcl}
& a_1x+b_1y &=& c_1 \\[4pt]
& a_2x+b_2y &=& c_2
\end{array}
$$

We eliminate one variable using row operations and solve for the other. Say that we wish to solve for $x$. If equation (2) is multiplied by the opposite of the coefficient of $y$ in equation (1), equation (1) is multiplied by the coefficient of $y$ in equation (2), and we add the two equations, the variable $y$ will be eliminated.

$$
\begin{array}{lrcl}
\text{Multiply }R_1\text{ by }b_2. & b_2a_1x+b_2b_1y &=& b_2c_1 \\[4pt]
\text{Multiply }R_2\text{ by }-b_1. & -b_1a_2x-b_1b_2y &=& -b_1c_2 \\[4pt]
\text{Add.} & b_2a_1x-b_1a_2x &=& b_2c_1-b_1c_2
\end{array}
$$

Now, solve for $x$.

$$
\begin{array}{lrcl}
& b_2a_1x-b_1a_2x &=& b_2c_1-b_1c_2 \\[4pt]
& x(b_2a_1-b_1a_2) &=& b_2c_1-b_1c_2
\end{array}
$$

$$x=\tfrac{b_2c_1-b_1c_2}{b_2a_1-b_1a_2}=\tfrac{\begin{vmatrix}c_1&b_1\\c_2&b_2\end{vmatrix}}{\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}}$$

Similarly, to solve for $y$, we will eliminate $x$.

$$
\begin{array}{lrcl}
\text{Multiply }R_1\text{ by }a_2. & a_2a_1x+a_2b_1y &=& a_2c_1 \\[4pt]
\text{Multiply }R_2\text{ by }-a_1. & -a_1a_2x-a_1b_2y &=& -a_1c_2 \\[4pt]
\text{Add.} & a_2b_1y-a_1b_2y &=& a_2c_1-a_1c_2
\end{array}
$$

Solving for $y$ gives

$$
\begin{array}{lrcl}
& a_2b_1y-a_1b_2y &=& a_2c_1-a_1c_2 \\[4pt]
& y(a_2b_1-a_1b_2) &=& a_2c_1-a_1c_2
\end{array}
$$

$$y=\tfrac{a_2c_1-a_1c_2}{a_2b_1-a_1b_2}=\tfrac{a_1c_2-a_2c_1}{a_1b_2-a_2b_1}=\tfrac{\begin{vmatrix}a_1&c_1\\a_2&c_2\end{vmatrix}}{\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}}$$

Notice that the denominator for both $x$ and $y$ is the determinant of the coefficient matrix.

We can use these formulas to solve for $x$ and $y$, but Cramer's Rule also introduces new notation:

- $D$: determinant of the coefficient matrix
- $D_x$: determinant of the numerator in the solution of $x$, $x=\tfrac{D_x}{D}$
- $D_y$: determinant of the numerator in the solution of $y$, $y=\tfrac{D_y}{D}$

The key to Cramer's Rule is replacing the variable column of interest with the constant column and calculating the determinants. We can then express $x$ and $y$ as a quotient of two determinants.

{{< callout type="info" >}}
  **Cramer's Rule for $2\times2$ Systems.** Cramer's Rule is a method that uses determinants to solve systems of equations that have the same number of equations as variables.

  Consider a system of two linear equations in two variables.

  $$
  \begin{array}{lrcl}
  & a_1x+b_1y &=& c_1 \\[4pt]
  & a_2x+b_2y &=& c_2
  \end{array}
  $$

  The solution using Cramer's Rule is given as

  $$x=\tfrac{D_x}{D}=\tfrac{\begin{vmatrix}c_1&b_1\\c_2&b_2\end{vmatrix}}{\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}},\ D\ne0;\qquad y=\tfrac{D_y}{D}=\tfrac{\begin{vmatrix}a_1&c_1\\a_2&c_2\end{vmatrix}}{\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}},\ D\ne0$$

  If we are solving for $x$, the $x$ column is replaced with the constant column. If we are solving for $y$, the $y$ column is replaced with the constant column.
{{< /callout >}}

**Example.** Solve the following $2\times2$ system using Cramer's Rule.

$$\begin{cases}12x+3y=15\\2x-3y=13\end{cases}$$

**Solution.** Solve for $x$.

$$x=\tfrac{D_x}{D}=\tfrac{\begin{vmatrix}15&3\\13&-3\end{vmatrix}}{\begin{vmatrix}12&3\\2&-3\end{vmatrix}}=\tfrac{-45-39}{-36-6}=\tfrac{-84}{-42}=2$$

Solve for $y$.

$$y=\tfrac{D_y}{D}=\tfrac{\begin{vmatrix}12&15\\2&13\end{vmatrix}}{\begin{vmatrix}12&3\\2&-3\end{vmatrix}}=\tfrac{156-30}{-36-6}=-\tfrac{126}{42}=-3$$

The solution is $(2,-3)$.

{{< fillin
  question="Use Cramer's Rule to solve the $2\times2$ system of equations. $\begin{cases}x+2y=-11\\-2x+y=-13\end{cases}$ Enter the solution as an ordered pair $(x,y)$."
  answer="(3,-7)"
  answerDisplay="$(3,-7)$"
  hint="Evaluate $D=\begin{vmatrix}1&2\\-2&1\end{vmatrix}$, $D_x=\begin{vmatrix}-11&2\\-13&1\end{vmatrix}$, and $D_y=\begin{vmatrix}1&-11\\-2&-13\end{vmatrix}$, then form $x=D_x/D$ and $y=D_y/D$."
>}}

### Evaluating the Determinant of a $3\times3$ Matrix

Finding the determinant of a $2\times2$ matrix is straightforward, but finding the determinant of a $3\times3$ matrix is more complicated. One method is to augment the $3\times3$ matrix with a repetition of the first two columns, giving a $3\times5$ matrix. Then we calculate the sum of the products of entries **down** each of the three diagonals (upper left to lower right), and subtract the products of entries **up** each of the three diagonals (lower left to upper right). This is more easily understood with a visual and an example.

Find the **determinant** of the $3\times3$ matrix.

$$A=\begin{bmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{bmatrix}$$

1. Augment $A$ with the first two columns.

   $$\det(A)=\begin{vmatrix}a_1&b_1&c_1&a_1&b_1\\a_2&b_2&c_2&a_2&b_2\\a_3&b_3&c_3&a_3&b_3\end{vmatrix}$$
2. From upper left to lower right: Multiply the entries down the first diagonal. Add the result to the product of entries down the second diagonal. Add this result to the product of the entries down the third diagonal.
3. From lower left to upper right: Subtract the product of entries up the first diagonal. From this result subtract the product of entries up the second diagonal. From this result, subtract the product of entries up the third diagonal.

{{< apfigure kind="figure" >}}
{"ariaLabel":"The 3-by-5 augmented determinant array, entries a1 through b3, between two vertical bars. Three solid diagonal arrows run down from the upper left through a1-b2-c3, b1-c2-a3, and c1-a2-b3 — the products that are added — and three dashed diagonal arrows run up from the lower left through a3-b2-c1, b3-c2-a1, and c3-a2-b1 — the products that are subtracted. Every arrow passes behind the entries it crosses.","unit":44,"texts":[{"at":[0,2],"text":"a₁","anchor":"middle"},{"at":[1,2],"text":"b₁","anchor":"middle"},{"at":[2,2],"text":"c₁","anchor":"middle"},{"at":[3,2],"text":"a₁","anchor":"middle"},{"at":[4,2],"text":"b₁","anchor":"middle"},{"at":[0,1],"text":"a₂","anchor":"middle"},{"at":[1,1],"text":"b₂","anchor":"middle"},{"at":[2,1],"text":"c₂","anchor":"middle"},{"at":[3,1],"text":"a₂","anchor":"middle"},{"at":[4,1],"text":"b₂","anchor":"middle"},{"at":[0,0],"text":"a₃","anchor":"middle"},{"at":[1,0],"text":"b₃","anchor":"middle"},{"at":[2,0],"text":"c₃","anchor":"middle"},{"at":[3,0],"text":"a₃","anchor":"middle"},{"at":[4,0],"text":"b₃","anchor":"middle"},{"at":[-1.7,1],"text":"det(A) =","anchor":"end"}],"segments":[{"from":[-0.55,-0.5],"to":[-0.55,2.6]},{"from":[4.55,-0.5],"to":[4.55,2.6]},{"from":[-0.35,2.45],"to":[2.35,-0.45],"gapTexts":true,"arrow":true},{"from":[0.65,2.45],"to":[3.35,-0.45],"gapTexts":true,"arrow":true},{"from":[1.65,2.45],"to":[4.35,-0.45],"gapTexts":true,"arrow":true},{"from":[-0.35,-0.45],"to":[2.35,2.45],"gapTexts":true,"arrow":true,"dashed":true},{"from":[0.65,-0.45],"to":[3.35,2.45],"gapTexts":true,"arrow":true,"dashed":true},{"from":[1.65,-0.45],"to":[4.35,2.45],"gapTexts":true,"arrow":true,"dashed":true}]}
{{< /apfigure >}}

The algebra is as follows:

$$\lvert A\rvert=a_1b_2c_3+b_1c_2a_3+c_1a_2b_3-a_3b_2c_1-b_3c_2a_1-c_3a_2b_1$$

**Example.** Find the determinant of the $3\times3$ matrix given

$$A=\begin{bmatrix}0&2&1\\3&-1&1\\4&0&1\end{bmatrix}$$

**Solution.** Augment the matrix with the first two columns and then follow the formula. Thus,

$$\lvert A\rvert=\begin{vmatrix}0&2&1&0&2\\3&-1&1&3&-1\\4&0&1&4&0\end{vmatrix}$$

$$
\begin{array}{lrcl}
& \lvert A\rvert &=& 0(-1)(1)+2(1)(4)+1(3)(0)-4(-1)(1)-0(1)(0)-1(3)(2) \\[4pt]
& &=& 0+8+0+4-0-6 \\[4pt]
& &=& 6
\end{array}
$$

{{< fillin
  question="Find the determinant of the $3\times3$ matrix. $\det(A)=\begin{vmatrix}1&-3&7\\1&1&1\\1&-2&3\end{vmatrix}$"
  answer="-10"
  answerDisplay="$-10$"
  hint="Augment the matrix with its first two columns, then add the three down-diagonal products and subtract the three up-diagonal products."
>}}

{{< callout type="info" >}}
  **Q&A.** *Can we use the same method to find the determinant of a larger matrix?*

  No, this method only works for $2\times2$ and $3\times3$ matrices. For larger matrices it is best to use a graphing utility or computer software.
{{< /callout >}}

### Using Cramer's Rule to Solve a System of Three Equations in Three Variables

Now that we can find the **determinant** of a $3\times3$ matrix, we can apply **Cramer's Rule** to solve a **system of three equations in three variables**. Cramer's Rule is straightforward, following a pattern consistent with Cramer's Rule for $2\times2$ matrices. As the order of the matrix increases to $3\times3$, however, there are many more calculations required.

When we calculate the determinant to be zero, Cramer's Rule gives no indication as to whether the system has no solution or an infinite number of solutions. To find out, we have to perform elimination on the system.

Consider a $3\times3$ system of equations.

$$
\begin{array}{lrcl}
& a_1x+b_1y+c_1z &=& d_1 \\[4pt]
& a_2x+b_2y+c_2z &=& d_2 \\[4pt]
& a_3x+b_3y+c_3z &=& d_3
\end{array}
$$

$$x=\tfrac{D_x}{D},\quad y=\tfrac{D_y}{D},\quad z=\tfrac{D_z}{D},\quad D\ne0$$

where

$$D=\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix},\quad D_x=\begin{vmatrix}d_1&b_1&c_1\\d_2&b_2&c_2\\d_3&b_3&c_3\end{vmatrix},\quad D_y=\begin{vmatrix}a_1&d_1&c_1\\a_2&d_2&c_2\\a_3&d_3&c_3\end{vmatrix},\quad D_z=\begin{vmatrix}a_1&b_1&d_1\\a_2&b_2&d_2\\a_3&b_3&d_3\end{vmatrix}$$

If we are writing the determinant $D_x$, we replace the $x$ column with the constant column. If we are writing the determinant $D_y$, we replace the $y$ column with the constant column. If we are writing the determinant $D_z$, we replace the $z$ column with the constant column. Always check the answer.

**Example.** Find the solution to the given $3\times3$ system using Cramer's Rule.

$$\begin{cases}x+y-z=6\\3x-2y+z=-5\\x+3y-2z=14\end{cases}$$

**Solution.** Use Cramer's Rule.

$$D=\begin{vmatrix}1&1&-1\\3&-2&1\\1&3&-2\end{vmatrix},\quad D_x=\begin{vmatrix}6&1&-1\\-5&-2&1\\14&3&-2\end{vmatrix},\quad D_y=\begin{vmatrix}1&6&-1\\3&-5&1\\1&14&-2\end{vmatrix},\quad D_z=\begin{vmatrix}1&1&6\\3&-2&-5\\1&3&14\end{vmatrix}$$

Then,

$$
\begin{array}{lrcl}
& x &=& \tfrac{D_x}{D}=\tfrac{-3}{-3}=1 \\[4pt]
& y &=& \tfrac{D_y}{D}=\tfrac{-9}{-3}=3 \\[4pt]
& z &=& \tfrac{D_z}{D}=\tfrac{6}{-3}=-2
\end{array}
$$

The solution is $(1,3,-2)$.

{{< fillin
  question="Use Cramer's Rule to solve the $3\times3$ system of equations. $\begin{cases}x-3y+7z=13\\x+y+z=1\\x-2y+3z=4\end{cases}$ Enter the solution as an ordered triple $(x,y,z)$."
  answer="(-2,3/5,12/5)"
  answerDisplay="$\left(-2,\tfrac{3}{5},\tfrac{12}{5}\right)$"
  hint="Evaluate $D$ using the coefficients of $x,y,z$, then $D_x$, $D_y$, $D_z$ by replacing one column of coefficients at a time with the constants $13,1,4$."
>}}

**Example.** Solve the system of equations using Cramer's Rule.

$$\begin{cases}3x-2y=4 & (1)\\6x-4y=0 & (2)\end{cases}$$

**Solution.** We begin by finding the determinants $D$, $D_x$, and $D_y$.

$$D=\begin{vmatrix}3&-2\\6&-4\end{vmatrix}=3(-4)-6(-2)=0$$

We know that a determinant of zero means that either the system has no solution or it has an infinite number of solutions. To see which one, we use the process of elimination. Our goal is to eliminate one of the variables.

- Multiply equation (1) by $-2$.
- Add the result to equation (2).

$$
\begin{array}{lrcl}
& -6x+4y &=& -8 \\[4pt]
& 6x-4y &=& 0 \\[4pt]
\text{Add.} & 0 &=& -8
\end{array}
$$

We obtain the equation $0=-8$, which is false. Therefore, the system has no solution. Graphing the system reveals two parallel lines.

{{< apfigure kind="graph" >}}
{"ariaLabel":"Two parallel lines on the xy-plane: y = 3/2 x, passing through the origin, and y = 3/2 x − 2, with a y-intercept of −2; both lines have the same slope and never intersect.","xMin":-6,"xMax":6,"yMin":-6,"yMax":6,"tickLabels":true,"lines":[{"slope":1.5,"intercept":0,"label":"y = 3/2 x"},{"slope":1.5,"intercept":-2,"label":"y = 3/2 x − 2"}]}
{{< /apfigure >}}

**Example.** Solve the system with an infinite number of solutions.

$$\begin{cases}x-2y+3z=0 & (1)\\3x+y-2z=0 & (2)\\2x-4y+6z=0 & (3)\end{cases}$$

**Solution.** Let's find the determinant first. Set up a matrix augmented by the first two columns.

$$\begin{vmatrix}1&-2&3&1&-2\\3&1&-2&3&1\\2&-4&6&2&-4\end{vmatrix}$$

Then,

$$1(1)(6)+(-2)(-2)(2)+3(3)(-4)-2(1)(3)-(-4)(-2)(1)-6(3)(-2)=0$$

As the determinant equals zero, there is either no solution or an infinite number of solutions. We have to perform elimination to find out.

- Multiply equation (1) by $-2$ and add the result to equation (3):

$$
\begin{array}{lrcl}
& -2x+4y-6z &=& 0 \\[4pt]
& 2x-4y+6z &=& 0 \\[4pt]
\text{Add.} & 0 &=& 0
\end{array}
$$

- Obtaining an answer of $0=0$, a statement that is always true, means that the system has an infinite number of solutions. Graphing the system, we can see that two of the planes are the same and they both intersect the third plane on a line.

{{< apfigure kind="figure" >}}
{"ariaLabel":"Two translucent bands crossing in an X shape: one band carries both labels x − 2y + 3z = 0 and 2x − 4y + 6z = 0, since those two equations describe the same plane; the other band is labeled 3x + y − 2z = 0. A horizontal double-headed arrow spans the diamond where the bands overlap, marking the line of intersection along which every solution lies.","unit":46,"polygons":[{"points":[[-2.3,-1.6],[-0.9,-1.6],[2.3,1.6],[0.9,1.6]],"fill":true},{"points":[[0.9,-1.6],[2.3,-1.6],[-0.9,1.6],[-2.3,1.6]],"fill":true}],"segments":[{"from":[-1.05,0],"to":[1.05,0],"arrow":"both"}],"texts":[{"at":[2.45,1.45],"text":"3x + y − 2z = 0","anchor":"start"},{"at":[2.45,-1.2],"text":"x − 2y + 3z = 0","anchor":"start"},{"at":[2.45,-1.65],"text":"2x − 4y + 6z = 0","anchor":"start"}]}
{{< /apfigure >}}

*(Source note: the source's own version of this figure labels the second plane $3x+y+2z=0$, the sign-flipped spelling of the equation its example states as $3x+y-2z=0$ — a figure-label slip recorded in this book's errata; the label above matches the example's printed system.)*

### Understanding Properties of Determinants

There are many **properties of determinants**. Listed here are some properties that may be helpful in calculating the determinant of a matrix.

{{< callout type="info" >}}
  **Properties of Determinants.**

  - If the matrix is in upper triangular form, the determinant equals the product of entries down the main diagonal.
  - When two rows are interchanged, the determinant changes sign.
  - If either two rows or two columns are identical, the determinant equals zero.
  - If a matrix contains either a row of zeros or a column of zeros, the determinant equals zero.
  - The determinant of an inverse matrix $A^{-1}$ is the reciprocal of the determinant of the matrix $A$.
  - If any row or column is multiplied by a constant, the determinant is multiplied by the same factor.
{{< /callout >}}

**Example.** Illustrate each of the properties of determinants.

**Solution.** Property 1 states that if the matrix is in upper triangular form, the determinant is the product of the entries down the main diagonal.

$$A=\begin{bmatrix}1&2&3\\0&2&1\\0&0&-1\end{bmatrix}$$

Augment $A$ with the first two columns.

$$A=\begin{vmatrix}1&2&3&1&2\\0&2&1&0&2\\0&0&-1&0&0\end{vmatrix}$$

Then

$$
\begin{array}{lrcl}
& \det(A) &=& 1(2)(-1)+2(1)(0)+3(0)(0)-0(2)(3)-0(1)(1)+1(0)(2) \\[4pt]
& &=& -2
\end{array}
$$

Property 2 states that interchanging rows changes the sign. Given

$$A=\begin{bmatrix}-1&5\\4&-3\end{bmatrix},\ \det(A)=(-1)(-3)-(4)(5)=3-20=-17$$

$$B=\begin{bmatrix}4&-3\\-1&5\end{bmatrix},\ \det(B)=(4)(5)-(-1)(-3)=20-3=17$$

Property 3 states that if two rows or two columns are identical, the determinant equals zero.

$$A=\begin{bmatrix}1&2&2\\2&2&2\\-1&2&2\end{bmatrix}\ \Rightarrow\ \begin{vmatrix}1&2&2&1&2\\2&2&2&2&2\\-1&2&2&-1&2\end{vmatrix}$$

$$
\begin{array}{lrcl}
& \det(A) &=& 1(2)(2)+2(2)(-1)+2(2)(2)+1(2)(2)-2(2)(1)-2(2)(2) \\[4pt]
& &=& 4-4+8+4-4-8=0
\end{array}
$$

Property 4 states that if a row or column equals zero, the determinant equals zero. Thus,

$$A=\begin{bmatrix}1&2\\0&0\end{bmatrix},\ \det(A)=1(0)-2(0)=0$$

Property 5 states that the determinant of an inverse matrix $A^{-1}$ is the reciprocal of the determinant $A$. Thus,

$$A=\begin{bmatrix}1&2\\3&4\end{bmatrix},\ \det(A)=1(4)-3(2)=-2$$

$$A^{-1}=\begin{bmatrix}-2&1\\\tfrac{3}{2}&-\tfrac{1}{2}\end{bmatrix},\ \det(A^{-1})=-2\left(-\tfrac{1}{2}\right)-\left(\tfrac{3}{2}\right)(1)=-\tfrac{1}{2}$$

Property 6 states that if any row or column of a matrix is multiplied by a constant, the determinant is multiplied by the same factor. Thus,

$$A=\begin{bmatrix}1&2\\3&4\end{bmatrix},\ \det(A)=1(4)-2(3)=-2$$

$$B=\begin{bmatrix}2(1)&2(2)\\3&4\end{bmatrix},\ \det(B)=2(4)-3(4)=-4$$

**Example.** Find the solution to the given $3\times3$ system.

$$\begin{cases}2x+4y+4z=2 & (1)\\3x+7y+7z=-5 & (2)\\x+2y+2z=4 & (3)\end{cases}$$

**Solution.** Using **Cramer's Rule**, we have

$$D=\begin{vmatrix}2&4&4\\3&7&7\\1&2&2\end{vmatrix}$$

Notice that the second and third columns are identical. According to Property 3, the determinant will be zero, so there is either no solution or an infinite number of solutions. We have to perform elimination to find out.

- Multiply equation (3) by $-2$ and add the result to equation (1).

$$
\begin{array}{lrcl}
& -2x-4y-4z &=& -8 \\[4pt]
& 2x+4y+4z &=& 2 \\[4pt]
\text{Add.} & 0 &=& -6
\end{array}
$$

Obtaining a statement that is a contradiction means that the system has no solution.

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and
practice with Cramer's Rule.
{{< /callout >}}

## Key concepts

- The determinant for $\begin{bmatrix}a&b\\c&d\end{bmatrix}$ is $ad-bc$.
- Cramer's Rule replaces a variable column with the constant column. Solutions are $x=\tfrac{D_x}{D}$, $y=\tfrac{D_y}{D}$.
- To find the determinant of a $3\times3$ matrix, augment with the first two columns. Add the three diagonal entries (upper left to lower right) and subtract the three diagonal entries (lower left to upper right).
- To solve a system of three equations in three variables using Cramer's Rule, replace a variable column with the constant column for each desired solution: $x=\tfrac{D_x}{D}$, $y=\tfrac{D_y}{D}$, $z=\tfrac{D_z}{D}$.
- Cramer's Rule is also useful for finding the solution of a system of equations with no solution or infinite solutions.
- Certain properties of determinants are useful for solving problems. For example: if the matrix is in upper triangular form, the determinant equals the product of entries down the main diagonal; when two rows are interchanged, the determinant changes sign; if either two rows or two columns are identical, the determinant equals zero; if a matrix contains either a row of zeros or a column of zeros, the determinant equals zero; the determinant of an inverse matrix $A^{-1}$ is the reciprocal of the determinant of the matrix $A$; and if any row or column is multiplied by a constant, the determinant is multiplied by the same factor.

## Practice

### Evaluate $2\times2$ determinants

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix}2&-5\\-1&6\end{vmatrix}$."
  answer="7"
  answerDisplay="$7$"
  hint="Subtract the product of the diagonals going the other way from the product of the main diagonal: $2(6)-(-1)(-5)$."
>}}

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix}1&0\\3&-4\end{vmatrix}$."
  answer="-4"
  answerDisplay="$-4$"
  hint="Subtract the products of the diagonals: $1(-4)-3(0)$."
>}}

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix}10&0.2\\5&0.1\end{vmatrix}$."
  answer="0"
  answerDisplay="$0$"
  hint="Subtract the products of the diagonals: $10(0.1)-5(0.2)$."
>}}

### Use Cramer's Rule to solve a system of equations in two variables

{{< fillin
  question="Solve the system of linear equations using Cramer's Rule. $\begin{cases}2x-3y=-1\\4x+5y=9\end{cases}$ Enter the solution as an ordered pair $(x,y)$."
  answer="(1,1)"
  answerDisplay="$(1,1)$"
  hint="Evaluate $D=\begin{vmatrix}2&-3\\4&5\end{vmatrix}$, $D_x=\begin{vmatrix}-1&-3\\9&5\end{vmatrix}$, and $D_y=\begin{vmatrix}2&-1\\4&9\end{vmatrix}$, then form $x=D_x/D$ and $y=D_y/D$."
>}}

{{< fillin
  question="Solve the system of linear equations using Cramer's Rule. $\begin{cases}6x-3y=2\\-8x+9y=-1\end{cases}$ Enter the solution as an ordered pair $(x,y)$."
  answer="(1/2,1/3)"
  answerDisplay="$\left(\tfrac{1}{2},\tfrac{1}{3}\right)$"
  hint="Evaluate $D=\begin{vmatrix}6&-3\\-8&9\end{vmatrix}$, $D_x=\begin{vmatrix}2&-3\\-1&9\end{vmatrix}$, and $D_y=\begin{vmatrix}6&2\\-8&-1\end{vmatrix}$, then form $x=D_x/D$ and $y=D_y/D$."
>}}

{{< fillin
  question="Solve the system of linear equations using Cramer's Rule. $\begin{cases}4x+3y=23\\2x-y=-1\end{cases}$ Enter the solution as an ordered pair $(x,y)$."
  answer="(2,5)"
  answerDisplay="$(2,5)$"
  hint="Evaluate $D=\begin{vmatrix}4&3\\2&-1\end{vmatrix}$, $D_x=\begin{vmatrix}23&3\\-1&-1\end{vmatrix}$, and $D_y=\begin{vmatrix}4&23\\2&-1\end{vmatrix}$, then form $x=D_x/D$ and $y=D_y/D$."
>}}

### Evaluate $3\times3$ determinants

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix}-1&0&0\\0&1&0\\0&0&-3\end{vmatrix}$."
  answer="3"
  answerDisplay="$3$"
  hint="The matrix is diagonal, so the determinant is just the product of the entries on the main diagonal."
>}}

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix}-2&1&4\\-4&2&-8\\2&-8&-3\end{vmatrix}$."
  answer="224"
  answerDisplay="$224$"
  hint="Augment the matrix with its first two columns, then add the three down-diagonal products and subtract the three up-diagonal products."
>}}

{{< fillin
  question="Evaluate the determinant $\begin{vmatrix}5&1&-1\\2&3&1\\3&-6&-3\end{vmatrix}$."
  answer="15"
  answerDisplay="$15$"
  hint="Augment the matrix with its first two columns, then add the three down-diagonal products and subtract the three up-diagonal products."
>}}

### Use Cramer's Rule to solve a system of three equations in three variables

{{< fillin
  question="Solve the system of linear equations using Cramer's Rule. $\begin{cases}x+2y-4z=-1\\7x+3y+5z=26\\-2x-6y+7z=-6\end{cases}$ Enter the solution as an ordered triple $(x,y,z)$."
  answer="(1,3,2)"
  answerDisplay="$(1,3,2)$"
  hint="Evaluate $D$ using the coefficients of $x,y,z$, then $D_x,D_y,D_z$ by replacing one column at a time with the constants $-1,26,-6$."
>}}

{{< fillin
  question="Solve the system of linear equations using Cramer's Rule. $\begin{cases}4x+5y-z=-7\\-2x-9y+2z=8\\5y+7z=21\end{cases}$ Enter the solution as an ordered triple $(x,y,z)$."
  answer="(-1,0,3)"
  answerDisplay="$(-1,0,3)$"
  hint="Evaluate $D$ using the coefficients of $x,y,z$ (the third equation has no $x$-term), then $D_x,D_y,D_z$ by replacing one column at a time with the constants $-7,8,21$."
>}}

{{< multiplechoice
  question="Solve the system using Cramer's Rule: $\begin{cases}4x-6y+8z=10\\-2x+3y-4z=-5\\x+y+z=1\end{cases}$ How many solutions does the system have?"
  answer="infinitely many solutions"
  hint="Evaluate $D$ first; since $D=0$ here, use elimination on the system to decide between no solution and infinitely many."
>}}
infinitely many solutions
no solution
$(1,1,1)$
exactly one solution
{{< /multiplechoice >}}

### Know the properties of determinants

{{< multiplechoice
  question="Which statement correctly explains why the determinant of a square matrix can always be evaluated?"
  answer="A determinant is only a sum of products of the matrix's own entries, so it can always be computed — even when the result turns out to be $0$."
  hint="Think about what the diagonal expansion actually does to the matrix's entries — it never requires dividing or testing them first."
>}}
Because every square matrix has a nonzero determinant.
A determinant is only a sum of products of the matrix's own entries, so it can always be computed — even when the result turns out to be $0$.
Because a square matrix is always invertible.
Because the determinant is defined only when every entry of the matrix is nonzero.
{{< /multiplechoice >}}

{{< multiplechoice
  question="If the determinant of a matrix is $0$, what does this mean for the matrix's inverse?"
  answer="The inverse does not exist."
  hint="Recall which quantity you would be dividing by to compute the inverse's entries."
>}}
The inverse equals the identity matrix.
The inverse equals the zero matrix.
The inverse equals the matrix itself.
The inverse does not exist.
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 9.8: Solving Systems with Cramer's Rule](https://openstax.org/books/precalculus-2e/pages/9-8-solving-systems-with-cramers-rule) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Objective 1" review of using Cramer's Rule to solve a $2\times2$ system, keyed to Intermediate Algebra 4.6.3, complete with its own worked example and two "Practice Makes Perfect" exercise sets) — confirmed against the rendered PDF, page 987 (true PDF index 997), where exercise 61 of the previous section's Real-World Applications runs directly into the "9.8 Solving Systems with Cramer's Rule" heading with no corequisite-skills material between them; the same prepended-block pattern is already logged in this book's errata for §§4.3–4.8 and §§9.1–9.7, and this section joins that list. Kept the "Media" callout's introductory sentence but omitted its two external video links, matching house precedent elsewhere in this book. Recreated the $2\times2$ crossing-arrow mnemonic that illustrates $\det(A)=ad-bc$ (an uncaptioned inline diagram in the source, not one of its two numbered figures) as an accessible spec-first figure, and independently recomputed the source's own Figure 1 (two parallel lines, $y=\tfrac32x$ and $y=\tfrac32x-2$) from the printed system rather than tracing the source art. Recreated the source's two remaining diagrams as accessible spec-first figures: the Sarrus'-rule mnemonic for a $3\times3$ determinant (an uncaptioned inline diagram immediately following the augment-with-two-columns list) draws the three down-diagonal products as solid arrows and the three up-diagonal products as dashed arrows, each stroke passing behind the matrix-entry labels it crosses via the figure engine's gap-behind-text routing (added for this diagram); and the dependent-system plane diagram beside Example 6 (the source's Figure 2) draws the coincident pair and the distinct plane as two translucent crossing bands with a double-headed arrow along their line of intersection, monochrome like every figure in this book. That figure's green-plane label is printed in the source as $3x+y+2z=0$, the sign-flipped spelling of the equation the example itself states — a source defect recorded in this book's errata — so the recreation labels the plane $3x+y-2z=0$ to match the example's printed system, with a visible Source note beside it. **The symbol $D$ is reserved by the grading engine**, so every determinant-value, Cramer's-rule, and properties-of-determinants question here keys a bare number or an ordered pair/triple — never a string containing $D$, $D_x$, $D_y$, or $D_z$ — while the prose and worked examples keep the source's own $D$/$D_x$/$D_y$/$D_z$ notation throughout, since KaTeX renders it and only submitted answers are restricted. Every retained Try It's system is inlined directly into the `question` string as $\begin{cases}\ldots\end{cases}$, and every solution is keyed as an ordered pair or triple with the format stated in the question; fraction-valued tuple members are keyed with a plain slash (e.g. `(1/2,1/3)`), matching this chapter's own §9.2 precedent, since the grader parses a bare slash between tuple members without the misreading that a juxtaposed factor would cause. The two "how many solutions" categorical outcomes (Example 6's infinite-solutions system and the matching Practice item) are posed as `multiplechoice`, never a `\text{…}` fill-in, following this chapter's own §9.1–§9.2 convention. The two Verbal exercises with a printed solution that is an explanation rather than a value ("explain why we can always evaluate the determinant of a square matrix" and "explain what it means in terms of an inverse for a matrix to have a $0$ determinant") are recast as `multiplechoice` items over the source's own printed explanations, since a free-form justification cannot be graded as a math expression; the Verbal exercise asking for a numeric answer with no printed solution in the Answer Key (explain the effect of swapping rows and scaling both on a $2\times2$ determinant of $3$) was not used, since its answer is not visibly present in the source key. Fourteen selected end-of-section exercises were adapted into interactive Practice components, one group per objective, every one independently re-derived (including by running the arithmetic in Node) rather than read off the source key.</small>
