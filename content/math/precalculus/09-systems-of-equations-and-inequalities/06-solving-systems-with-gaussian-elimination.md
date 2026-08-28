---
title: Solving Systems with Gaussian Elimination
description: >-
  Writing and reading augmented matrices, performing row operations, and
  using Gaussian elimination and back-substitution to solve 2×2 and 3×3
  linear systems, including finance applications — adapted from OpenStax
  Precalculus 2e, Section 9.6.
source_section: "9.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Write the augmented matrix of a system of equations
- Write the system of equations from an augmented matrix
- Perform row operations on a matrix
- Solve a system of linear equations using matrices
{{< /callout >}}

Carl Friedrich Gauss lived during the late 18th century and early 19th century, but he is still considered one of the most prolific mathematicians in history. His contributions to the science of mathematics and physics span fields such as algebra, number theory, analysis, differential geometry, astronomy, and optics, among others. His discoveries regarding matrix theory changed the way mathematicians have worked for the last two centuries.

We first encountered Gaussian elimination in Systems of Linear Equations: Two Variables. In this section, we will revisit this technique for solving systems, this time using matrices.

### Writing the Augmented Matrix of a System of Equations

A **matrix** can serve as a device for representing and solving a system of equations. To express a system in matrix form, we extract the coefficients of the variables and the constants, and these become the entries of the matrix. We use a vertical line to separate the coefficient entries from the constants, essentially replacing the equal signs. When a system is written in this form, we call it an **augmented matrix**.

For example, consider the following $2\times2$ system of equations.

$$\begin{array}{l}3x+4y=7\\4x-2y=5\end{array}$$

We can write this system as an augmented matrix:

$$\left[\begin{array}{cc|c}3&4&7\\4&-2&5\end{array}\right]$$

We can also write a matrix containing just the coefficients. This is called the **coefficient matrix**.

$$\begin{bmatrix}3&4\\4&-2\end{bmatrix}$$

A three-by-three **system of equations** such as

$$\begin{array}{l}3x-y-z=0\\x+y=5\\2x-3z=2\end{array}$$

has a coefficient matrix

$$\begin{bmatrix}3&-1&-1\\1&1&0\\2&0&-3\end{bmatrix}$$

and is represented by the augmented matrix

$$\left[\begin{array}{ccc|c}3&-1&-1&0\\1&1&0&5\\2&0&-3&2\end{array}\right]$$

Notice that the matrix is written so that the variables line up in their own columns: $x$-terms go in the first column, $y$-terms in the second column, and $z$-terms in the third column. It is very important that each equation is written in standard form $ax+by+cz=d$ so that the variables line up. When there is a missing variable term in an equation, the coefficient is $0$.

{{< callout type="info" >}}
  **Given a system of equations, write an augmented matrix.**

  1. Write the coefficients of the $x$-terms as the numbers down the first column.
  2. Write the coefficients of the $y$-terms as the numbers down the second column.
  3. If there are $z$-terms, write the coefficients as the numbers down the third column.
  4. Draw a vertical line and write the constants to the right of the line.
{{< /callout >}}

**Example.** Write the augmented matrix for the given system of equations.

$$\begin{array}{l}x+2y-z=3\\2x-y+2z=6\\x-3y+3z=4\end{array}$$

**Solution.** The augmented matrix displays the coefficients of the variables, and an additional column for the constants.

$$\left[\begin{array}{ccc|c}1&2&-1&3\\2&-1&2&6\\1&-3&3&4\end{array}\right]$$

{{< fillin
  question="Write the system $\begin{cases}4x-3y=11\\3x+2y=4\end{cases}$ as an augmented matrix. Enter row 2 of the matrix as a comma-separated list of three numbers."
  answer="3, 2, 4"
  hint="Row 2 holds the coefficients of $x$ and $y$ in the second equation, then its constant."
>}}

### Writing a System of Equations from an Augmented Matrix

We can use augmented matrices to help us solve systems of equations because they simplify operations when the systems are not encumbered by the variables. However, it is important to understand how to move back and forth between formats in order to make finding solutions smoother and more intuitive. Here, we will use the information in an augmented matrix to write the **system of equations** in standard form.

**Example.** Find the system of equations from the augmented matrix.

$$\left[\begin{array}{ccc|c}1&-3&-5&-2\\2&-5&-4&5\\-3&5&4&6\end{array}\right]$$

**Solution.** When the columns represent the variables $x$, $y$, and $z$,

$$\left[\begin{array}{ccc|c}1&-3&-5&-2\\2&-5&-4&5\\-3&5&4&6\end{array}\right]\to\begin{array}{l}x-3y-5z=-2\\2x-5y-4z=5\\-3x+5y+4z=6\end{array}$$

{{< fillin
  question="The augmented matrix $\left[\begin{array}{ccc|c}1&-1&1&5\\2&-1&3&1\\0&1&1&-9\end{array}\right]$ corresponds to a system of equations. Enter the coefficients of $x$, $y$, and $z$, and the constant, in the second equation, as a comma-separated list of four numbers."
  answer="2, -1, 3, 1"
  hint="Row 2 of the matrix is the second equation: the first three entries are the coefficients of $x$, $y$, and $z$, and the last entry is the constant."
>}}

### Performing Row Operations on a Matrix

Now that we can write systems of equations in augmented matrix form, we will examine the various **row operations** that can be performed on a matrix, such as addition, multiplication by a constant, and interchanging rows.

Performing row operations on a matrix is the method we use for solving a system of equations. In order to solve the system of equations, we want to convert the matrix to **row-echelon form**, in which there are ones down the **main diagonal** from the upper left corner to the lower right corner, and zeros in every position below the main diagonal, as shown.

$$\text{Row-echelon form:}\quad\left[\begin{array}{ccc}1&a&b\\0&1&d\\0&0&1\end{array}\right]$$

We use row operations corresponding to equation operations to obtain a new matrix that is **row-equivalent** in a simpler form. Here are the guidelines to obtaining row-echelon form.

1. In any nonzero row, the first nonzero number is a $1$. It is called a *leading* $1$.
2. Any all-zero rows are placed at the bottom of the matrix.
3. Any leading $1$ is below and to the right of a previous leading $1$.
4. Any column containing a leading $1$ has zeros in all other positions in the column.

To solve a system of equations we can perform the following row operations to convert the coefficient matrix to row-echelon form and do back-substitution to find the solution.

- Interchange rows. (Notation: $R_i\leftrightarrow R_j$)
- Multiply a row by a constant. (Notation: $cR_i$)
- Add the product of a row multiplied by a constant to another row. (Notation: $R_i+cR_j$)

Each of the row operations corresponds to the operations we have already learned to solve systems of equations in three variables. With these operations, there are some key moves that will quickly achieve the goal of writing a matrix in row-echelon form. To obtain a matrix in row-echelon form for finding solutions, we use Gaussian elimination, a method that uses row operations to obtain a $1$ as the first entry so that row $1$ can be used to convert the remaining rows.

{{< callout type="info" >}}
  **Gaussian Elimination.** The **Gaussian elimination** method refers to a strategy used to obtain the row-echelon form of a matrix. The goal is to write matrix $A$ with the number $1$ as the entry down the main diagonal and have all zeros below.

  $$A=\left[\begin{array}{ccc}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{array}\right]\xrightarrow{\ \text{After Gaussian elimination}\ }A=\left[\begin{array}{ccc}1&b_{12}&b_{13}\\0&1&b_{23}\\0&0&1\end{array}\right]$$

  The first step of the Gaussian strategy includes obtaining a $1$ as the first entry, so that row $1$ may be used to alter the rows below.
{{< /callout >}}

{{< callout type="info" >}}
  **Given an augmented matrix, perform row operations to achieve row-echelon form.**

  1. The first equation should have a leading coefficient of $1$. Interchange rows or multiply by a constant, if necessary.
  2. Use row operations to obtain zeros down the first column below the first entry of $1$.
  3. Use row operations to obtain a $1$ in row $2$, column $2$.
  4. Use row operations to obtain zeros down column $2$, below the entry of $1$.
  5. Use row operations to obtain a $1$ in row $3$, column $3$.
  6. Continue this process for all rows until there is a $1$ in every entry down the main diagonal and there are only zeros below.
  7. If any rows contain all zeros, place them at the bottom.
{{< /callout >}}

**Example.** Solve the given system by Gaussian elimination.

$$\begin{array}{l}2x+3y=6\\x-y=\tfrac12\end{array}$$

**Solution.** First, we write this as an augmented matrix.

$$\left[\begin{array}{cc|c}2&3&6\\1&-1&\tfrac12\end{array}\right]$$

We want a $1$ in row $1$, column $1$. This can be accomplished by interchanging row $1$ and row $2$.

$$\left[\begin{array}{cc|c}2&3&6\\1&-1&\tfrac12\end{array}\right]\xrightarrow{\ R_1\leftrightarrow R_2\ }\left[\begin{array}{cc|c}1&-1&\tfrac12\\2&3&6\end{array}\right]$$

We now have a $1$ as the first entry in row $1$, column $1$. Now let's obtain a $0$ in row $2$, column $1$. This can be accomplished by multiplying row $1$ by $-2$, and then adding the result to row $2$.

$$\left[\begin{array}{cc|c}1&-1&\tfrac12\\2&3&6\end{array}\right]\xrightarrow{\ -2R_1+R_2=R_2\ }\left[\begin{array}{cc|c}1&-1&\tfrac12\\0&5&5\end{array}\right]$$

We only have one more step, to multiply row $2$ by $\tfrac15$.

$$\left[\begin{array}{cc|c}1&-1&\tfrac12\\0&5&5\end{array}\right]\xrightarrow{\ \tfrac15R_2=R_2\ }\left[\begin{array}{cc|c}1&-1&\tfrac12\\0&1&1\end{array}\right]$$

Use back-substitution. The second row of the matrix represents $y=1$. Back-substitute $y=1$ into the first equation.

$$
\begin{array}{lrcl}
& x-(1) &=& \tfrac12 \\[4pt]
& x &=& \tfrac32
\end{array}
$$

The solution is the point $\left(\tfrac32,1\right)$.

{{< fillin
  question="Solve the given system by Gaussian elimination: $\begin{cases}4x+3y=11\\x-3y=-1\end{cases}$. Enter the solution as an ordered pair $(x,y)$."
  answer="(2,1)"
  answerDisplay="$(2,1)$"
  hint="Use row operations to get a leading $1$ in row 1, then a zero below it in column 1, then back-substitute."
>}}

**Example.** Use Gaussian elimination to solve the given $2\times2$ system of equations.

$$\begin{array}{l}2x+y=1\\4x+2y=6\end{array}$$

**Solution.** Write the system as an augmented matrix.

$$\left[\begin{array}{cc|c}2&1&1\\4&2&6\end{array}\right]$$

Obtain a $1$ in row $1$, column $1$. This can be accomplished by multiplying the first row by $\tfrac12$.

$$\left[\begin{array}{cc|c}2&1&1\\4&2&6\end{array}\right]\xrightarrow{\ \tfrac12R_1=R_1\ }\left[\begin{array}{cc|c}1&\tfrac12&\tfrac12\\4&2&6\end{array}\right]$$

Next, we want a $0$ in row $2$, column $1$. Multiply row $1$ by $-4$ and add row $1$ to row $2$.

$$\left[\begin{array}{cc|c}1&\tfrac12&\tfrac12\\4&2&6\end{array}\right]\xrightarrow{\ -4R_1+R_2=R_2\ }\left[\begin{array}{cc|c}1&\tfrac12&\tfrac12\\0&0&4\end{array}\right]$$

The second row represents the equation $0=4$. Therefore, the system is inconsistent and has no solution.

**Example.** Solve the system of equations.

$$\begin{array}{l}3x+4y=12\\6x+8y=24\end{array}$$

**Solution.** Perform row operations on the augmented matrix to try and achieve row-echelon form.

$$A=\left[\begin{array}{cc|c}3&4&12\\6&8&24\end{array}\right]$$

$$\left[\begin{array}{cc|c}3&4&12\\6&8&24\end{array}\right]\xrightarrow{\ -\tfrac12R_2+R_1=R_1\ }\left[\begin{array}{cc|c}0&0&0\\6&8&24\end{array}\right]\xrightarrow{\ R_1\leftrightarrow R_2\ }\left[\begin{array}{cc|c}6&8&24\\0&0&0\end{array}\right]$$

The matrix ends up with all zeros in the last row: $0y=0$. Thus, there are an infinite number of solutions and the system is classified as dependent. To find the generic solution, return to one of the original equations and solve for $y$.

$$
\begin{array}{lrcl}
& 3x+4y &=& 12 \\[4pt]
& 4y &=& 12-3x \\[4pt]
& y &=& 3-\tfrac34x
\end{array}
$$

So the solution to this system is $\left(x,3-\tfrac34x\right)$.

**Example.** Perform row operations on the given matrix to obtain row-echelon form.

$$\left[\begin{array}{ccc|c}1&-3&4&3\\2&-5&6&6\\-3&3&4&6\end{array}\right]$$

**Solution.** The first row already has a $1$ in row $1$, column $1$. The next step is to multiply row $1$ by $-2$ and add it to row $2$. Then replace row $2$ with the result.

$$\left[\begin{array}{ccc|c}1&-3&4&3\\2&-5&6&6\\-3&3&4&6\end{array}\right]\xrightarrow{\ -2R_1+R_2=R_2\ }\left[\begin{array}{ccc|c}1&-3&4&3\\0&1&-2&0\\-3&3&4&6\end{array}\right]$$

Next, obtain a zero in row $3$, column $1$.

$$\left[\begin{array}{ccc|c}1&-3&4&3\\0&1&-2&0\\-3&3&4&6\end{array}\right]\xrightarrow{\ 3R_1+R_3=R_3\ }\left[\begin{array}{ccc|c}1&-3&4&3\\0&1&-2&0\\0&-6&16&15\end{array}\right]$$

Next, obtain a zero in row $3$, column $2$.

$$\left[\begin{array}{ccc|c}1&-3&4&3\\0&1&-2&0\\0&-6&16&15\end{array}\right]\xrightarrow{\ 6R_2+R_3=R_3\ }\left[\begin{array}{ccc|c}1&-3&4&3\\0&1&-2&0\\0&0&4&15\end{array}\right]$$

The last step is to obtain a $1$ in row $3$, column $3$.

$$\left[\begin{array}{ccc|c}1&-3&4&3\\0&1&-2&0\\0&0&4&15\end{array}\right]\xrightarrow{\ \tfrac14R_3=R_3\ }\left[\begin{array}{ccc|c}1&-3&4&3\\0&1&-2&0\\0&0&1&\tfrac{15}{4}\end{array}\right]$$

{{< fillin
  question="Use row operations to write the system $\begin{cases}x-2y+3z=9\\-x+3y=-4\\2x-5y+5z=17\end{cases}$ in row-echelon form, then use back-substitution to solve it. Enter the solution as an ordered triple $(x,y,z)$."
  answer="(1,-1,2)"
  answerDisplay="$(1,-1,2)$"
  hint="Eliminate $x$ from equations 2 and 3 using row 1, obtain a leading $1$ in row 2, eliminate below it, then back-substitute starting from row 3."
>}}

### Solving a System of Linear Equations Using Matrices

We have seen how to write a system of equations with an augmented matrix, and then how to use row operations and back-substitution to obtain row-echelon form. Now, we will take row-echelon form a step farther to solve a $3$ by $3$ system of linear equations. The general idea is to eliminate all but one variable using row operations and then back-substitute to solve for the other variables.

**Example.** Solve the system of linear equations using matrices.

$$\begin{array}{l}x-y+z=8\\2x+3y-z=-2\\3x-2y-9z=9\end{array}$$

**Solution.** First, we write the augmented matrix.

$$\left[\begin{array}{ccc|c}1&-1&1&8\\2&3&-1&-2\\3&-2&-9&9\end{array}\right]$$

Next, we perform row operations to obtain row-echelon form.

$$\left[\begin{array}{ccc|c}1&-1&1&8\\2&3&-1&-2\\3&-2&-9&9\end{array}\right]\xrightarrow{\ -2R_1+R_2=R_2\ }\left[\begin{array}{ccc|c}1&-1&1&8\\0&5&-3&-18\\3&-2&-9&9\end{array}\right]\xrightarrow{\ -3R_1+R_3=R_3\ }\left[\begin{array}{ccc|c}1&-1&1&8\\0&5&-3&-18\\0&1&-12&-15\end{array}\right]$$

The easiest way to obtain a $1$ in row $2$, column $2$ is to interchange $R_2$ and $R_3$.

$$\left[\begin{array}{ccc|c}1&-1&1&8\\0&5&-3&-18\\0&1&-12&-15\end{array}\right]\xrightarrow{\ \text{Interchange }R_2\text{ and }R_3\ }\left[\begin{array}{ccc|c}1&-1&1&8\\0&1&-12&-15\\0&5&-3&-18\end{array}\right]$$

Then

$$\left[\begin{array}{ccc|c}1&-1&1&8\\0&1&-12&-15\\0&5&-3&-18\end{array}\right]\xrightarrow{\ -5R_2+R_3=R_3\ }\left[\begin{array}{ccc|c}1&-1&1&8\\0&1&-12&-15\\0&0&57&57\end{array}\right]\xrightarrow{\ \tfrac{1}{57}R_3=R_3\ }\left[\begin{array}{ccc|c}1&-1&1&8\\0&1&-12&-15\\0&0&1&1\end{array}\right]$$

The last matrix represents the equivalent system.

$$\begin{array}{l}x-y+z=8\\y-12z=-15\\z=1\end{array}$$

Using back-substitution, we obtain the solution as $(4,-3,1)$.

**Example.** Solve the following system of linear equations using matrices.

$$\begin{array}{l}-x-2y+z=-1\\2x+3y=2\\y-2z=0\end{array}$$

**Solution.** Write the augmented matrix.

$$\left[\begin{array}{ccc|c}-1&-2&1&-1\\2&3&0&2\\0&1&-2&0\end{array}\right]$$

First, multiply row $1$ by $-1$ to get a $1$ in row $1$, column $1$. Then, perform row operations to obtain row-echelon form.

$$\left[\begin{array}{ccc|c}-1&-2&1&-1\\2&3&0&2\\0&1&-2&0\end{array}\right]\xrightarrow{\ -R_1\ }\left[\begin{array}{ccc|c}1&2&-1&1\\2&3&0&2\\0&1&-2&0\end{array}\right]\xrightarrow{\ R_2\leftrightarrow R_3\ }\left[\begin{array}{ccc|c}1&2&-1&1\\0&1&-2&0\\2&3&0&2\end{array}\right]$$

$$\left[\begin{array}{ccc|c}1&2&-1&1\\0&1&-2&0\\2&3&0&2\end{array}\right]\xrightarrow{\ -2R_1+R_3=R_3\ }\left[\begin{array}{ccc|c}1&2&-1&1\\0&1&-2&0\\0&-1&2&0\end{array}\right]\xrightarrow{\ R_2+R_3=R_3\ }\left[\begin{array}{ccc|c}1&2&-1&1\\0&1&-2&0\\0&0&0&0\end{array}\right]$$

The last matrix represents the following system.

$$\begin{array}{l}x+2y-z=1\\y-2z=0\\0=0\end{array}$$

We see by the identity $0=0$ that this is a dependent system with an infinite number of solutions. We then find the generic solution. By solving the second equation for $y$ and substituting it into the first equation we can solve for $z$ in terms of $x$.

$$
\begin{array}{lrcl}
& x+2y-z &=& 1 \\[4pt]
& y &=& 2z \\[4pt]
& x+2(2z)-z &=& 1 \\[4pt]
& x+3z &=& 1 \\[4pt]
& z &=& \tfrac{1-x}{3}
\end{array}
$$

Now we substitute the expression for $z$ into the second equation to solve for $y$ in terms of $x$.

$$
\begin{array}{lrcl}
& y-2z &=& 0 \\[4pt]
& y-2\left(\tfrac{1-x}{3}\right) &=& 0 \\[4pt]
& y &=& \tfrac{2-2x}{3}
\end{array}
$$

The generic solution is $\left(x,\tfrac{2-2x}{3},\tfrac{1-x}{3}\right)$.

{{< fillin
  question="Solve the system using matrices: $\begin{cases}x+4y-z=4\\2x+5y+8z=15\\x+3y-3z=1\end{cases}$. Enter the solution as an ordered triple $(x,y,z)$."
  answer="(1,1,1)"
  answerDisplay="$(1,1,1)$"
  hint="Row-reduce the augmented matrix to row-echelon form, then back-substitute starting from the last row."
>}}

{{< callout type="info" >}}
  **Q&A.** *Can any system of linear equations be solved by Gaussian elimination?*

  Yes, a system of linear equations of any size can be solved by Gaussian elimination.
{{< /callout >}}

{{< callout type="info" >}}
  **Given a system of equations, solve with matrices using a calculator.**

  1. Save the augmented matrix as a matrix variable $[A]$, $[B]$, $[C]$, ....
  2. Use the **ref(** function in the calculator, calling up each matrix variable as needed.
{{< /callout >}}

**Example.** Solve the system of equations.

$$\begin{array}{l}5x+3y+9z=-1\\-2x+3y-z=-2\\-x-4y+5z=1\end{array}$$

**Solution.** Write the augmented matrix for the system of equations.

$$\left[\begin{array}{ccc|c}5&3&9&-1\\-2&3&-1&-2\\-1&-4&5&1\end{array}\right]$$

On the matrix page of the calculator, enter the augmented matrix above as the matrix variable $[A]$.

$$[A]=\left[\begin{array}{ccc|c}5&3&9&-1\\-2&3&-1&-2\\-1&-4&5&1\end{array}\right]$$

Use the **ref(** function in the calculator, calling up the matrix variable $[A]$.

$$\text{ref}([A])$$

Evaluate.

$$\left[\begin{array}{ccc|c}1&\tfrac35&\tfrac95&-\tfrac15\\0&1&\tfrac{13}{21}&-\tfrac47\\0&0&1&-\tfrac{24}{187}\end{array}\right]\to\begin{array}{l}x+\tfrac35y+\tfrac95z=-\tfrac15\\y+\tfrac{13}{21}z=-\tfrac47\\z=-\tfrac{24}{187}\end{array}$$

Using back-substitution, the solution is $\left(\tfrac{61}{187},-\tfrac{92}{187},-\tfrac{24}{187}\right)$.

**Example.** Carolyn invests a total of \$12,000 in two municipal bonds, one paying $10.5\%$ interest and the other paying $12\%$ interest. The annual interest earned on the two investments last year was \$1,335. How much was invested at each rate?

**Solution.** We have a system of two equations in two variables. Let $x=$ the amount invested at $10.5\%$ interest, and $y=$ the amount invested at $12\%$ interest.

$$\begin{array}{l}x+y=12{,}000\\0.105x+0.12y=1{,}335\end{array}$$

As a matrix, we have

$$\left[\begin{array}{cc|c}1&1&12{,}000\\0.105&0.12&1{,}335\end{array}\right]$$

Multiply row $1$ by $-0.105$ and add the result to row $2$.

$$\left[\begin{array}{cc|c}1&1&12{,}000\\0&0.015&75\end{array}\right]$$

Then,

$$
\begin{array}{lrcl}
& 0.015y &=& 75 \\[4pt]
& y &=& 5{,}000
\end{array}
$$

So $12{,}000-5{,}000=7{,}000$.

Thus, \$5,000 was invested at $12\%$ interest and \$7,000 at $10.5\%$ interest.

**Example.** Ava invests a total of \$10,000 in three accounts, one paying $5\%$ interest, another paying $8\%$ interest, and the third paying $9\%$ interest. The annual interest earned on the three investments last year was \$770. The amount invested at $9\%$ was twice the amount invested at $5\%$. How much was invested at each rate?

**Solution.** We have a system of three equations in three variables. Let $x$ be the amount invested at $5\%$ interest, let $y$ be the amount invested at $8\%$ interest, and let $z$ be the amount invested at $9\%$ interest. Thus,

$$\begin{array}{l}x+y+z=10{,}000\\0.05x+0.08y+0.09z=770\\2x-z=0\end{array}$$

As a matrix, we have

$$\left[\begin{array}{ccc|c}1&1&1&10{,}000\\0.05&0.08&0.09&770\\2&0&-1&0\end{array}\right]$$

Now, we perform Gaussian elimination to achieve row-echelon form.

$$\left[\begin{array}{ccc|c}1&1&1&10{,}000\\0.05&0.08&0.09&770\\2&0&-1&0\end{array}\right]\xrightarrow{\ -0.05R_1+R_2=R_2\ }\left[\begin{array}{ccc|c}1&1&1&10{,}000\\0&0.03&0.04&270\\2&0&-1&0\end{array}\right]\xrightarrow{\ -2R_1+R_3=R_3\ }\left[\begin{array}{ccc|c}1&1&1&10{,}000\\0&0.03&0.04&270\\0&-2&-3&-20{,}000\end{array}\right]$$

$$\left[\begin{array}{ccc|c}1&1&1&10{,}000\\0&0.03&0.04&270\\0&-2&-3&-20{,}000\end{array}\right]\xrightarrow{\ \tfrac{1}{0.03}R_2=R_2\ }\left[\begin{array}{ccc|c}1&1&1&10{,}000\\0&1&\tfrac43&9{,}000\\0&-2&-3&-20{,}000\end{array}\right]\xrightarrow{\ 2R_2+R_3=R_3\ }\left[\begin{array}{ccc|c}1&1&1&10{,}000\\0&1&\tfrac43&9{,}000\\0&0&-\tfrac13&-2{,}000\end{array}\right]$$

The third row tells us $-\tfrac13z=-2{,}000$; thus $z=6{,}000$.

The second row tells us $y+\tfrac43z=9{,}000$. Substituting $z=6{,}000$, we get

$$
\begin{array}{lrcl}
& y+\tfrac43(6{,}000) &=& 9{,}000 \\[4pt]
& y+8{,}000 &=& 9{,}000 \\[4pt]
& y &=& 1{,}000
\end{array}
$$

The first row tells us $x+y+z=10{,}000$. Substituting $y=1{,}000$ and $z=6{,}000$, we get

$$
\begin{array}{lrcl}
& x+1{,}000+6{,}000 &=& 10{,}000 \\[4pt]
& x &=& 3{,}000
\end{array}
$$

The answer is \$3,000 invested at $5\%$ interest, \$1,000 invested at $8\%$, and \$6,000 invested at $9\%$ interest.

{{< fillin
  question="A small shoe company took out a loan of \$1,500,000 to expand their inventory. Part of the money was borrowed at 7% interest, part was borrowed at 8% interest, and part was borrowed at 10% interest. The amount borrowed at 10% was four times the amount borrowed at 7%, and the annual interest on all three loans was \$130,500. Use matrices to find how much was borrowed at 7% interest. Enter your answer as a plain number, without a dollar sign or commas."
  answer="150000"
  hint="Let $x$, $y$, $z$ be the amounts at 7%, 8%, and 10%. Then $z=4x$, $x+y+z=1{,}500{,}000$, and $0.07x+0.08y+0.10z=130{,}500$."
>}}

{{< fillin
  question="A small shoe company took out a loan of \$1,500,000 to expand their inventory. Part of the money was borrowed at 7% interest, part was borrowed at 8% interest, and part was borrowed at 10% interest. The amount borrowed at 10% was four times the amount borrowed at 7%, and the annual interest on all three loans was \$130,500. Use matrices to find how much was borrowed at 8% interest. Enter your answer as a plain number, without a dollar sign or commas."
  answer="750000"
  hint="Once you have found the amount borrowed at 7% interest, the total of \$1,500,000 minus the 7% and 10% amounts gives the 8% amount."
>}}

{{< fillin
  question="A small shoe company took out a loan of \$1,500,000 to expand their inventory. Part of the money was borrowed at 7% interest, part was borrowed at 8% interest, and part was borrowed at 10% interest. The amount borrowed at 10% was four times the amount borrowed at 7%, and the annual interest on all three loans was \$130,500. Use matrices to find how much was borrowed at 10% interest. Enter your answer as a plain number, without a dollar sign or commas."
  answer="600000"
  hint="The amount borrowed at 10% is four times the amount borrowed at 7%."
>}}

## Key concepts

- An augmented matrix is one that contains the coefficients and constants of a system of equations. See Example 1.
- A matrix augmented with the constant column can be represented as the original system of equations. See Example 2.
- Row operations include multiplying a row by a constant, adding one row to another row, and interchanging rows.
- We can use Gaussian elimination to solve a system of equations. See Example 3, Example 4, and Example 5.
- Row operations are performed on matrices to obtain row-echelon form. See Example 6.
- To solve a system of equations, write it in augmented matrix form. Perform row operations to obtain row-echelon form. Back-substitute to find the solutions. See Example 7 and Example 8.
- A calculator can be used to solve systems of equations using matrices. See Example 9.
- Many real-world problems can be solved using augmented matrices. See Example 10 and Example 11.

## Practice

### Write the augmented matrix of a system of equations

{{< fillin
  question="Write the system $\begin{cases}16y=4\\9x-y=2\end{cases}$ as an augmented matrix. Enter row 1 of the matrix as a comma-separated list of three numbers."
  answer="0, 16, 4"
  hint="Equation 1 has no $x$-term, so its coefficient is $0$; list the coefficients of $x$ and $y$, then the constant."
>}}

{{< fillin
  question="Write the system $\begin{cases}x+5y+8z=19\\12x+3y=4\\3x+4y+9z=-7\end{cases}$ as an augmented matrix. Enter row 2 of the matrix as a comma-separated list of four numbers."
  answer="12, 3, 0, 4"
  hint="Equation 2 has no $z$-term, so its coefficient is $0$; list the coefficients of $x$, $y$, and $z$, then the constant."
>}}

### Write the system of equations from an augmented matrix

{{< fillin
  question="The augmented matrix $\left[\begin{array}{cc|c}-2&5&5\\6&-18&26\end{array}\right]$ corresponds to a system of two equations in $x$ and $y$. Enter the coefficients of $x$ and $y$, and the constant, in the second equation, as a comma-separated list of three numbers."
  answer="6, -18, 26"
  hint="Row 2 of the matrix is the second equation: the first two entries are the coefficients of $x$ and $y$, and the last entry is the constant."
>}}

{{< fillin
  question="The augmented matrix $\left[\begin{array}{ccc|c}3&2&0&3\\-1&-9&4&-1\\8&5&7&8\end{array}\right]$ corresponds to a system of three equations in $x$, $y$, and $z$. Enter the coefficients of $x$, $y$, and $z$, and the constant, in the third equation, as a comma-separated list of four numbers."
  answer="8, 5, 7, 8"
  hint="Row 3 of the matrix is the third equation: the first three entries are the coefficients of $x$, $y$, and $z$, and the last entry is the constant."
>}}

### Perform row operations on a matrix

{{< fillin
  question="Starting from the augmented matrix $\left[\begin{array}{cc|c}9&3&0\\1&-2&6\end{array}\right]$, interchange rows 1 and 2, then multiply the new row 1 by $-9$ and add the result to row 2. Enter the resulting row 2 as a comma-separated list of three numbers."
  answer="0, 21, -54"
  hint="After interchanging, row 1 is $[1,-2\mid6]$; multiply each of its entries by $-9$ and add the result to the matching entry of row 2."
>}}

{{< fillin
  question="Starting from the augmented matrix $\left[\begin{array}{cc|c}9&3&0\\1&-2&6\end{array}\right]$ (without interchanging rows), multiply row 1 by $\tfrac19$. Enter the resulting row 1 as a comma-separated list of three numbers."
  answer="1, 1/3, 0"
  hint="Divide every entry of row 1, including the entry after the bar, by $9$."
>}}

### Solve a system of linear equations using matrices

{{< multiplechoice
  question="If the row-echelon form of an augmented matrix has a row of all zero entries to the left of the vertical bar, how many solutions can the system have?"
  answer="No solution, or infinitely many solutions"
  hint="A zero row means an equation reduced to $0=0$ (dependent) or $0=$ a nonzero number (inconsistent) — never a single value for a variable."
>}}
Exactly one solution
No solution, or infinitely many solutions
Exactly two solutions
The system must be inconsistent
{{< /multiplechoice >}}

{{< fillin
  question="Solve the system by Gaussian elimination: $\begin{cases}2x-3y=-9\\5x+4y=58\end{cases}$. Enter the solution as an ordered pair $(x,y)$."
  answer="(6,7)"
  answerDisplay="$(6,7)$"
  hint="Eliminate one variable using row operations on the augmented matrix, then back-substitute."
>}}

{{< fillin
  question="The augmented matrix $\left[\begin{array}{ccc|c}1&0&0&31\\0&1&1&45\\0&0&1&87\end{array}\right]$ is already in row-echelon form for a system in $x$, $y$, and $z$. Use back-substitution to solve it. Enter the solution as an ordered triple $(x,y,z)$."
  answer="(31,-42,87)"
  answerDisplay="$(31,-42,87)$"
  hint="Row 3 gives $z$ directly; substitute into row 2 to find $y$, then into row 1 to find $x$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 9.6: Solving Systems with Gaussian Elimination](https://openstax.org/books/precalculus-2e/pages/9-6-solving-systems-with-gaussian-elimination) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Objective 1"/"Objective 2" review of row operations and solving with matrices, keyed to Intermediate Algebra 4.5, complete with its own Learning Objectives list and two "Practice Makes Perfect" exercise sets) — the printed PDF (pages 969–981, folios 959–971) runs straight from the chapter's Gaussian-elimination introduction into the Carl Friedrich Gauss portrait and biographical paragraph, with no corequisite-skills material before it; this joins the same prepended-block pattern already logged in this book's errata for §§4.3–4.8 and §9.5. Omitted the decorative portrait photograph of Carl Friedrich Gauss, which carries no mathematics, and the "Access these online resources" media links. **The grader cannot take a matrix-shaped answer** (the MathLive matrix-entry path is menu-only and untested for learners), so — following house precedent from Intermediate Algebra 4.5 and this book's own §9.5 — every retained Try It and Practice item whose source answer is a full augmented matrix is re-posed as a row-entry fill-in ("enter row N of the matrix as a comma-separated list of N numbers"). The Try It that asks to "write the system... in row-echelon form" (module id `ti_09_06_04`) could not be re-posed this way at all: row-echelon form is not unique, and independently re-deriving it by ordinary elimination (leaving row 1 as the pivot equation) produces a different, equally valid row-echelon matrix than the one the source's own solution prints — confirmed by checking that both matrices back-substitute to the same solution $(1,-1,2)$. Any single row asked for would therefore have more than one correct answer depending on the learner's chosen operations; this Try It is re-posed as "use row operations to write the system in row-echelon form, then use back-substitution to solve," graded on the resulting ordered triple, which is unique. The Verbal exercise asking whether there is "only one correct method" of row-reducing a given matrix (its own solution walks through two distinct valid operation sequences) is adapted into the "Perform row operations on a matrix" Practice group as two fill-ins, one per method the source's solution demonstrates, since neither method alone is more than half the source item and both are independently correct. The "can a matrix with an all-zero row have one solution" Verbal exercise is adapted into a `multiplechoice`, since its answer is a categorical fact about solvability, not a number. The shoe-company loan Try It's three-way dollar answer ($150,000/$750,000/$600,000, module id `ti_09_06_06`) is split into three plain-number fill-ins, each restating the full word problem, because the grader re-absorbs digit-grouping commas and a combined comma list of six-figure amounts is not reliably enterable. Every retained answer was independently re-derived from the printed system or word problem (by running the row reduction or the linear system in Node, not by reading the source key) before being checked against the CNXML solution; all matched. Eight selected end-of-section exercises with a solution present in the CNXML Answer Key were adapted into the closing Practice block's nine items, one or two per objective.</small>
