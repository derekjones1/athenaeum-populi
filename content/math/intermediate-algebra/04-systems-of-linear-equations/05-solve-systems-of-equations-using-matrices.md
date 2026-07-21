---
title: Solve Systems of Equations Using Matrices
description: >-
  Writing the augmented matrix for a system of equations, performing row
  operations on a matrix, and solving 2x2 and 3x3 systems — including
  inconsistent and dependent systems — using row-echelon form — adapted from
  OpenStax Intermediate Algebra 2e, Section 4.5.
source_section: "4.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** write the augmented
  matrix for a system of equations, use row operations on a matrix, and solve
  systems of equations using matrices.
{{< /callout >}}

## Write the augmented matrix for a system of equations

Solving a system of equations can be a tedious operation where a simple
mistake can wreak havoc on finding the solution. An alternative method which
uses the basic procedures of elimination but with notation that is simpler is
available. The method involves using a **matrix**. A matrix is a rectangular
array of numbers arranged in rows and columns.

{{< callout type="info" >}}
  **Matrix.** A matrix is a rectangular array of numbers arranged in rows and
  columns. A matrix with $m$ rows and $n$ columns has order $m \times n$.
{{< /callout >}}

The matrix on the left below has $2$ rows and $3$ columns, so it has order
$2 \times 3$ — we say it is a $2$ by $3$ matrix. The matrix on the right has
$3$ rows and $4$ columns, so it is a $3$ by $4$ matrix.

$$\begin{bmatrix}-3 & -2 & 2\\ -1 & 4 & 5\end{bmatrix} \qquad \begin{bmatrix}2&-5&3&-1\\-4&0&2&-2\\0&-2&-4&1\end{bmatrix}$$

Each number in the matrix is called an **element**, or entry, of the matrix.

We will use a matrix to represent a system of linear equations. We write each
equation in standard form, and the coefficients of the variables and the
constant of each equation become a row in the matrix. Each column then holds
the coefficients of one of the variables in the system, or the constants. A
vertical line replaces the equal signs. We call the resulting matrix the
**augmented matrix** for the system of equations. For the system
$\begin{cases}3x-y=-3\\2x+3y=6\end{cases}$, the augmented matrix is

$$\left[\begin{array}{cc|c}3 & -1 & -3\\2 & 3 & 6\end{array}\right].$$

The first column is made up of all the coefficients of $x$, the second column
is all the coefficients of $y$, and the column to the right of the vertical
line is all the constants.

**Example.** Write each system of linear equations as an augmented matrix:
(a) $\begin{cases}5x-3y=-1\\y=2x-2\end{cases}$
(b) $\begin{cases}6x-5y+2z=3\\2x+y-4z=5\\3x-3y+z=-1\end{cases}$

(a) The second equation is not in standard form. We rewrite it in standard
form first:

$$
\begin{array}{rcl}
y &=& 2x-2 \\
-2x+y &=& -2
\end{array}
$$

We replace the second equation with its standard form. In the augmented
matrix, the first equation gives us the first row and the second equation
gives us the second row; the vertical line replaces the equal signs.

$$\left[\begin{array}{cc|c}5 & -3 & -1\\2 & -1 & 2\end{array}\right]$$

(b) All three equations are already in standard form. In the augmented
matrix, the first equation gives us the first row, the second equation gives
us the second row, and the third equation gives us the third row.

$$\left[\begin{array}{ccc|c}6 & -5 & 2 & 3\\2 & 1 & -4 & 5\\3 & -3 & 1 & -1\end{array}\right]$$

{{< fillin
  question="Write the system $\begin{cases}3x+8y=-3\\2x=-5y-3\end{cases}$ as an augmented matrix (rewrite the second equation in standard form first). Enter the second row of the matrix as a comma-separated list of three numbers."
  answer="2, 5, -3"
  hint="$2x=-5y-3$ in standard form is $2x+5y=-3$."
>}}

It is important as we solve systems of equations using matrices to be able to
go back and forth between the system and the matrix. The next example asks us
to take the information in the matrix and write the system of equations.

**Example.** Write the system of equations that corresponds to the augmented
matrix:

$$\left[\begin{array}{ccc|c}4 & -3 & 3 & -1\\1 & 2 & -1 & 2\\-2 & -1 & 3 & -4\end{array}\right]$$

Each row corresponds to an equation, and each entry is a coefficient of a
variable or the constant. The vertical line replaces the equal sign. Since
this matrix is $4$ columns wide, we know it translates into a system of three
equations with three variables:

$$
\begin{array}{l}
4x-3y+3z=-1\\
x+2y-z=2\\
-2x-y+3z=-4
\end{array}
$$

{{< fillin
  question="The augmented matrix $\left[\begin{array}{ccc|c}1 & 1 & 1 & 4\\2 & 3 & -1 & 8\\1 & 1 & -1 & 3\end{array}\right]$ corresponds to a system of equations. Enter the coefficients of $x$, $y$, and $z$ in the second equation, as a comma-separated list of three numbers."
  answer="2, 3, -1"
  hint="Row 2 of the matrix is the second equation: the first three entries are the coefficients of $x$, $y$, and $z$."
>}}

## Use row operations on a matrix

Once a system of equations is in its augmented matrix form, we perform
operations on the rows that lead us to the solution.

To solve by elimination, it doesn't matter which order we place the equations
in the system — similarly, in the matrix we can interchange the rows. When we
solve by elimination, we often multiply one of the equations by a constant.
Since each row represents an equation, and we can multiply each side of an
equation by a constant, we can likewise multiply each entry in a row by any
real number except $0$. In elimination, we often add a multiple of one row to
another row — in the matrix we can replace a row with its sum with a multiple
of another row.

{{< callout type="info" >}}
  **Row operations.** In a matrix, the following operations can be performed
  on any row, and the resulting matrix will be equivalent to the original
  matrix.

  1. Interchange any two rows.
  2. Multiply a row by any real number except $0$.
  3. Add a nonzero multiple of one row to another row.
{{< /callout >}}

Performing these operations is easy to do, but all the arithmetic can result
in a mistake. If we use a system to record the row operation at each step, it
is much easier to go back and check our work. We use capital letters with
subscripts to represent each row, and show the operation to the left of the
new matrix.

To show interchanging rows $1$ and $2$:

$$\left[\begin{array}{cc|c}5 & -3 & -1\\2 & -1 & 2\end{array}\right] \xrightarrow{\ R_1\leftrightarrow R_2\ } \left[\begin{array}{cc|c}2 & -1 & 2\\5 & -3 & -1\end{array}\right]$$

To multiply row $2$ by $-3$:

$$\left[\begin{array}{cc|c}5 & -3 & -1\\2 & -1 & 2\end{array}\right] \xrightarrow{\ -3R_2\ } \left[\begin{array}{cc|c}5 & -3 & -1\\-6 & 3 & -6\end{array}\right]$$

To multiply row $2$ by $-3$ and add it to row $1$:

$$\left[\begin{array}{cc|c}5 & -3 & -1\\2 & -1 & 2\end{array}\right] \xrightarrow{\ -3R_2+R_1\ } \left[\begin{array}{cc|c}-1 & 0 & -7\\2 & -1 & 2\end{array}\right]$$

**Example.** Perform the indicated operations on the augmented matrix

$$\left[\begin{array}{ccc|c}6 & -5 & 2 & 3\\2 & 1 & -4 & 5\\3 & -3 & 1 & -1\end{array}\right]:$$

(a) Interchange rows $2$ and $3$. (b) Multiply row $2$ by $5$. (c) Multiply
row $3$ by $-2$ and add it to row $1$.

(a) We interchange rows $2$ and $3$:

$$\left[\begin{array}{ccc|c}6 & -5 & 2 & 3\\3 & -3 & 1 & -1\\2 & 1 & -4 & 5\end{array}\right]$$

(b) We multiply row $2$ by $5$:

$$\left[\begin{array}{ccc|c}6 & -5 & 2 & 3\\10 & 5 & -20 & 25\\3 & -3 & 1 & -1\end{array}\right]$$

(c) We multiply row $3$ by $-2$ and add it to row $1$:

$$\left[\begin{array}{ccc|c}0 & 1 & 0 & 5\\2 & 1 & -4 & 5\\3 & -3 & 1 & -1\end{array}\right]$$

{{< fillin
  question="Starting from the matrix $\left[\begin{array}{ccc|c}2 & -3 & -2 & -4\\4 & 1 & -3 & 2\\5 & 0 & 4 & -1\end{array}\right]$, multiply row 1 by 2. Enter the new row 1 as a comma-separated list of four numbers."
  answer="4, -6, -4, -8"
  hint="Multiply every entry of row 1, including the entry after the bar, by 2."
>}}

Now that we have practiced the row operations, we look at an augmented matrix
and figure out what operation to use to reach a goal — exactly what we do
when we eliminate a variable by elimination. We decide what number to
multiply a row by so that a variable is eliminated when we add the rows
together.

**Example.** Perform the row operation that will get the first entry in row
$2$ to be zero in the augmented matrix
$\left[\begin{array}{cc|c}1 & -1 & 2\\4 & -8 & 0\end{array}\right]$.

To make the $4$ a $0$, we multiply row $1$ by $-4$ and add it to row $2$:

$$\left[\begin{array}{cc|c}1 & -1 & 2\\4 & -8 & 0\end{array}\right] \xrightarrow{\ -4R_1+R_2\ } \left[\begin{array}{cc|c}1 & -1 & 2\\0 & -4 & -8\end{array}\right]$$

{{< fillin
  question="Perform the row operation that will get the first entry of row 2 to be zero in the augmented matrix $\left[\begin{array}{cc|c}1 & -1 & 3\\-2 & -3 & 2\end{array}\right]$. Enter the resulting row 2 as a comma-separated list of three numbers."
  answer="0, -5, 8"
  hint="Multiply row 1 by 2 and add it to row 2."
>}}

## Solve systems of equations using matrices

To solve a system of equations using matrices, we transform the augmented
matrix into a matrix in **row-echelon form** using row operations.

{{< callout type="info" >}}
  **Row-echelon form.** For a consistent and independent system of equations,
  its augmented matrix is in row-echelon form when, to the left of the
  vertical line, each entry on the diagonal is a $1$ and all entries below
  the diagonal are zeros.
{{< /callout >}}

Once we get the augmented matrix into row-echelon form, we can write the
equivalent system of equations and read the value of at least one variable.
We then substitute this value into another equation to continue solving for
the other variables.

**Example. How to solve a system of equations using a matrix.** Solve the
system of equations using a matrix: $\begin{cases}3x+4y=5\\x+2y=1\end{cases}$.

Write the augmented matrix for the system of equations:

$$\left[\begin{array}{cc|c}3 & 4 & 5\\1 & 2 & 1\end{array}\right]$$

Interchange the rows, so a $1$ is in row $1$, column $1$:

$$\left[\begin{array}{cc|c}1 & 2 & 1\\3 & 4 & 5\end{array}\right]$$

Multiply row $1$ by $-3$ and add it to row $2$, to get a zero in column $1$
below the $1$:

$$\left[\begin{array}{cc|c}1 & 2 & 1\\0 & -2 & 2\end{array}\right]$$

Multiply row $2$ by $-\tfrac{1}{2}$, to get the entry in row $2$, column $2$
to be $1$:

$$\left[\begin{array}{cc|c}1 & 2 & 1\\0 & 1 & -1\end{array}\right]$$

The matrix is now in row-echelon form. Write the corresponding system of
equations:

$$\begin{cases}x+2y=1\\y=-1\end{cases}$$

Use substitution to find the remaining variable. Substitute $y=-1$ into
$x+2y=1$:

$$
\begin{array}{lrcl}
& x+2(-1) &=& 1 \\[4pt]
& x-2 &=& 1 \\[4pt]
& x &=& 3
\end{array}
$$

Write the solution as an ordered pair: $(3,-1)$. Checking that this ordered
pair makes both original equations true is left to you.

{{< fillin
  question="Solve the system of equations using a matrix: $\begin{cases}2x+y=7\\x-2y=6\end{cases}$. Enter the solution as an ordered pair."
  answer="(4,-1)"
  answerDisplay="$(4,-1)$"
  hint="Get a zero below the leading $1$ in column $1$, put a $1$ in row 2 column 2, then use substitution."
>}}

{{< callout type="info" >}}
  **Solve a system of equations using matrices.**

  1. Write the augmented matrix for the system of equations.
  2. Using row operations, get the entry in row 1, column 1 to be $1$.
  3. Using row operations, get zeros in column 1 below the $1$.
  4. Using row operations, get the entry in row 2, column 2 to be $1$.
  5. Continue the process until the matrix is in row-echelon form.
  6. Write the corresponding system of equations.
  7. Use substitution to find the remaining variables.
  8. Write the solution as an ordered pair or triple.
  9. Check that the solution makes the original equations true.
{{< /callout >}}

We use the same procedure when the system of equations has three equations.

**Example.** Solve the system of equations using a matrix:
$\begin{cases}3x+8y+2z=-5\\2x+5y-3z=0\\x+2y-2z=-1\end{cases}$.

Write the augmented matrix for the equations:

$$\left[\begin{array}{ccc|c}3 & 8 & 2 & -5\\2 & 5 & -3 & 0\\1 & 2 & -2 & -1\end{array}\right]$$

Interchange rows $1$ and $3$, to get the entry in row 1, column 1 to be $1$:

$$\left[\begin{array}{ccc|c}1 & 2 & -2 & -1\\2 & 5 & -3 & 0\\3 & 8 & 2 & -5\end{array}\right]$$

Multiply row $1$ by $-2$ and add it to row $2$, to get a zero in column $1$:

$$\left[\begin{array}{ccc|c}1 & 2 & -2 & -1\\0 & 1 & 1 & 2\\3 & 8 & 2 & -5\end{array}\right]$$

Multiply row $1$ by $-3$ and add it to row $3$, to get another zero in
column $1$. The entry in row 2, column 2 is already $1$:

$$\left[\begin{array}{ccc|c}1 & 2 & -2 & -1\\0 & 1 & 1 & 2\\0 & 2 & 8 & -2\end{array}\right]$$

Multiply row $2$ by $-2$ and add it to row $3$:

$$\left[\begin{array}{ccc|c}1 & 2 & -2 & -1\\0 & 1 & 1 & 2\\0 & 0 & 6 & -6\end{array}\right]$$

Multiply row $3$ by $\tfrac{1}{6}$, so the matrix is in row-echelon form:

$$\left[\begin{array}{ccc|c}1 & 2 & -2 & -1\\0 & 1 & 1 & 2\\0 & 0 & 1 & -1\end{array}\right]$$

Write the corresponding system of equations:

$$\begin{cases}x+2y-2z=-1\\y+z=2\\z=-1\end{cases}$$

Use substitution to find the remaining variables. From $y+z=2$ with $z=-1$,
we get $y=3$. Substituting $y=3$ and $z=-1$ into $x+2y-2z=-1$:

$$
\begin{array}{lrcl}
& x+2(3)-2(-1) &=& -1 \\[4pt]
& x+6+2 &=& -1 \\[4pt]
& x &=& -9
\end{array}
$$

Write the solution as an ordered triple: $(-9,3,-1)$. Checking that this
triple makes all three original equations true is left to you.

{{< fillin
  question="Solve the system of equations using a matrix: $\begin{cases}2x-5y+3z=8\\3x-y+4z=7\\x+3y+2z=-3\end{cases}$. Enter the solution as an ordered triple."
  answer="(6,-1,-3)"
  answerDisplay="$(6,-1,-3)$"
  hint="Get row-echelon form, then use substitution starting from the last row."
>}}

So far our work with matrices has only been with systems that are consistent
and independent, which means they have exactly one solution. Let's now look
at what happens when we use a matrix for a dependent or inconsistent system.

**Example.** Solve the system of equations using a matrix:
$\begin{cases}x+y+3z=0\\x+3y+5z=0\\2x+4z=1\end{cases}$.

Write the augmented matrix for the equations:

$$\left[\begin{array}{ccc|c}1 & 1 & 3 & 0\\1 & 3 & 5 & 0\\2 & 0 & 4 & 1\end{array}\right]$$

The entry in row $1$, column $1$ is already $1$. Using row operations, get
zeros in column $1$ below the $1$:

$$\left[\begin{array}{ccc|c}1 & 1 & 3 & 0\\0 & 2 & 2 & 0\\0 & -2 & -2 & 1\end{array}\right]$$

Multiply row $2$ by $\tfrac{1}{2}$, so the entry in row 2, column 2 is $1$:

$$\left[\begin{array}{ccc|c}1 & 1 & 3 & 0\\0 & 1 & 1 & 0\\0 & -2 & -2 & 1\end{array}\right]$$

Multiply row $2$ by $2$ and add it to row $3$:

$$\left[\begin{array}{ccc|c}1 & 1 & 3 & 0\\0 & 1 & 1 & 0\\0 & 0 & 0 & 1\end{array}\right]$$

At this point we have all zeros to the left of the vertical line in row $3$.
Write the corresponding system of equations:

$$\begin{cases}x+y+3z=0\\y+z=0\\0=1\end{cases}$$

Since $0\neq 1$, we have a false statement. Just as when we solved a system
using other methods, this tells us we have an **inconsistent system** — there
is no solution.

{{< multiplechoice
  question="Solve the system of equations using a matrix: $\begin{cases}x-2y+2z=1\\-2x+y-z=2\\x-y+z=5\end{cases}$. What do you find?"
  hint="Row-reduce the augmented matrix; two of the rows lead to contradictory equations for $y$ and $z$."
  answer="no solution — the system is inconsistent"
>}}
no solution — the system is inconsistent
infinitely many solutions — the system is dependent
the unique solution $(2,1,4)$
the unique solution $(-3,-4,-1)$
{{< /multiplechoice >}}

The last system was inconsistent and so had no solution. The next example is
dependent and has infinitely many solutions.

**Example.** Solve the system of equations using a matrix:
$\begin{cases}x-2y+3z=1\\x+y-3z=7\\3x-4y+5z=7\end{cases}$.

Write the augmented matrix for the equations:

$$\left[\begin{array}{ccc|c}1 & -2 & 3 & 1\\1 & 1 & -3 & 7\\3 & -4 & 5 & 7\end{array}\right]$$

The entry in row $1$, column $1$ is already $1$. Using row operations, get
zeros in column $1$ below the $1$:

$$\left[\begin{array}{ccc|c}1 & -2 & 3 & 1\\0 & 3 & -6 & 6\\0 & 2 & -4 & 4\end{array}\right]$$

Multiply row $2$ by $\tfrac{1}{3}$, so the entry in row 2, column 2 is $1$:

$$\left[\begin{array}{ccc|c}1 & -2 & 3 & 1\\0 & 1 & -2 & 2\\0 & 2 & -4 & 4\end{array}\right]$$

Multiply row $2$ by $-2$ and add it to row $3$:

$$\left[\begin{array}{ccc|c}1 & -2 & 3 & 1\\0 & 1 & -2 & 2\\0 & 0 & 0 & 0\end{array}\right]$$

At this point we have all zeros in the bottom row. Write the corresponding
system of equations:

$$\begin{cases}x-2y+3z=1\\y-2z=2\\0=0\end{cases}$$

Since $0=0$, we have a true statement. Just as when we solved by
substitution, this tells us we have a **dependent system** — there are
infinitely many solutions.

Solve for $y$ in terms of $z$ in the second equation: $y-2z=2$, so
$y=2z+2$. Substitute this into the first equation to solve for $x$ in terms
of $z$:

$$
\begin{array}{lrcl}
& x-2y+3z &=& 1 \\[4pt]
& x-2(2z+2)+3z &=& 1 \\[4pt]
& x-4z-4+3z &=& 1 \\[4pt]
& x-z-4 &=& 1 \\[4pt]
& x &=& z+5
\end{array}
$$

The system has infinitely many solutions, one for every value of $z$:

$$(z+5,\ 2z+2,\ z)$$

{{< multiplechoice
  question="Solve the system of equations using a matrix: $\begin{cases}x+y-z=0\\2x+4y-2z=6\\3x+6y-3z=9\end{cases}$. What do you find?"
  hint="Row-reduce the augmented matrix; the bottom row reduces to all zeros."
  answer="infinitely many solutions — the system is dependent"
>}}
infinitely many solutions — the system is dependent
no solution — the system is inconsistent
the unique solution $(1,1,2)$
the unique solution $(0,0,0)$
{{< /multiplechoice >}}

## Key terms

**matrix** — a rectangular array of numbers arranged in rows and columns; a
matrix with $m$ rows and $n$ columns has order $m \times n$. **augmented
matrix** — the matrix formed from a system of linear equations, where each
row holds the coefficients of a system's equation and the constants, with a
vertical line in place of the equal signs. **row operations** —
interchanging two rows, multiplying a row by a nonzero real number, or adding
a nonzero multiple of one row to another row; each produces an equivalent
matrix. **row-echelon form** — an augmented matrix in which, to the left of
the vertical line, each entry on the diagonal is $1$ and all entries below
the diagonal are $0$. **inconsistent system** — a system whose row-echelon
form leads to a false statement (such as $0=1$); it has no solution.
**dependent system** — a system whose row-echelon form leads to a true
statement (such as $0=0$); it has infinitely many solutions.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 4.5: Solve Systems of Equations Using Matrices](https://openstax.org/books/intermediate-algebra-2e/pages/4-5-solve-systems-of-equations-using-matrices) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: represented matrices and augmented matrices with typeset KaTeX arrays instead of the source's labeled screenshots; omitted the Be Prepared quiz, the decorative "order for getting 1's and 0's" color-box graphic (redundant with the adjacent How To step list), the Media box, and Self Check; corrected an arithmetic slip in the source's final stated numeric solution for the dependent-system example — the row-reduction work shown (both here and in the source) derives the general solution $(z+5,\ 2z+2,\ z)$, which is what we report, rather than the specific triple the source printed, which does not actually satisfy the system; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
