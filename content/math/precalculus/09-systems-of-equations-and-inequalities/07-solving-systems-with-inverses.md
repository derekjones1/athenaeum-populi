---
title: Solving Systems with Inverses
description: >-
  Finding the multiplicative inverse of $2\times2$ and $3\times3$ matrices —
  using the formula, matrix multiplication, and augmenting with the identity
  — then solving systems of linear equations by writing them as $AX=B$ and
  computing $X=A^{-1}B$, including a bond-investment application — adapted
  from OpenStax Precalculus 2e, Section 9.7.
source_section: "9.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the inverse of a matrix
- Solve a system of linear equations using an inverse matrix
{{< /callout >}}

Soriya plans to invest \$10,500 into two different bonds to spread out her risk. The first bond has an annual return of $10\%$, and the second bond has an annual return of $6\%$. In order to receive an $8.5\%$ return from the two bonds, how much should Soriya invest in each bond? What is the best method to solve this problem?

There are several ways we can solve this problem. As we have seen in previous sections, systems of equations and matrices are useful in solving real-world problems involving finance. After studying this section, we will have the tools to solve the bond problem using the inverse of a matrix.

### Finding the Inverse of a Matrix

We know that the multiplicative inverse of a real number $a$ is $a^{-1}$, and $aa^{-1}=a^{-1}a=\left(\tfrac{1}{a}\right)a=1$. For example, $2^{-1}=\tfrac{1}{2}$ and $\left(\tfrac{1}{2}\right)2=1$. The **multiplicative inverse of a matrix** is similar in concept, except that the product of matrix $A$ and its inverse $A^{-1}$ equals the **identity matrix**. The identity matrix is a square matrix containing ones down the main diagonal and zeros everywhere else. We identify identity matrices by $I_n$, where $n$ represents the dimension of the matrix. Observe the following equations.

$$I_2=\begin{bmatrix}1&0\\0&1\end{bmatrix}\qquad I_3=\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$$

The identity matrix acts as a $1$ in matrix algebra. For example, $AI=IA=A$.

A matrix that has a multiplicative inverse has the properties

$$
\begin{array}{lrcl}
& AA^{-1} &=& I \\[4pt]
& A^{-1}A &=& I
\end{array}
$$

A matrix that has a multiplicative inverse is called an **invertible matrix**. Only a square matrix may have a multiplicative inverse, as the reversibility, $AA^{-1}=A^{-1}A=I$, is a requirement. Not all square matrices have an inverse, but if $A$ is invertible, then $A^{-1}$ is unique. We will look at two methods for finding the inverse of a $2\times2$ matrix and a third method that can be used on both $2\times2$ and $3\times3$ matrices.

{{< callout type="info" >}}
  **The Identity Matrix and Multiplicative Inverse.** The **identity matrix**, $I_n$, is a square matrix containing ones down the main diagonal and zeros everywhere else.

  $$I_2=\begin{bmatrix}1&0\\0&1\end{bmatrix}\qquad I_3=\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$$

  If $A$ is an $n\times n$ matrix and $B$ is an $n\times n$ matrix such that $AB=BA=I_n$, then $B=A^{-1}$, the **multiplicative inverse of a matrix** $A$.
{{< /callout >}}

**Example.** Given matrix $A$, show that $AI=IA=A$.

$$A=\begin{bmatrix}3&4\\-2&5\end{bmatrix}$$

**Solution.** Use matrix multiplication to show that the product of $A$ and the identity is equal to the product of the identity and $A$.

$$AI=\begin{bmatrix}3&4\\-2&5\end{bmatrix}\begin{bmatrix}1&0\\0&1\end{bmatrix}=\begin{bmatrix}3\cdot1+4\cdot0&3\cdot0+4\cdot1\\-2\cdot1+5\cdot0&-2\cdot0+5\cdot1\end{bmatrix}=\begin{bmatrix}3&4\\-2&5\end{bmatrix}$$

$$IA=\begin{bmatrix}1&0\\0&1\end{bmatrix}\begin{bmatrix}3&4\\-2&5\end{bmatrix}=\begin{bmatrix}1\cdot3+0\cdot(-2)&1\cdot4+0\cdot5\\0\cdot3+1\cdot(-2)&0\cdot4+1\cdot5\end{bmatrix}=\begin{bmatrix}3&4\\-2&5\end{bmatrix}$$

{{< callout type="info" >}}
  **How To:** given two matrices, show that one is the multiplicative inverse of the other.

  1. Given matrix $A$ of order $n\times n$ and matrix $B$ of order $n\times n$, multiply $AB$.
  2. If $AB=I$, then find the product $BA$. If $BA=I$, then $B=A^{-1}$ and $A=B^{-1}$.
{{< /callout >}}

**Example.** Show that the given matrices are multiplicative inverses of each other.

$$A=\begin{bmatrix}1&5\\-2&-9\end{bmatrix},\quad B=\begin{bmatrix}-9&-5\\2&1\end{bmatrix}$$

**Solution.** Multiply $AB$ and $BA$. If both products equal the identity, then the two matrices are inverses of each other.

$$AB=\begin{bmatrix}1&5\\-2&-9\end{bmatrix}\begin{bmatrix}-9&-5\\2&1\end{bmatrix}=\begin{bmatrix}1(-9)+5(2)&1(-5)+5(1)\\-2(-9)-9(2)&-2(-5)-9(1)\end{bmatrix}=\begin{bmatrix}1&0\\0&1\end{bmatrix}$$

$$BA=\begin{bmatrix}-9&-5\\2&1\end{bmatrix}\begin{bmatrix}1&5\\-2&-9\end{bmatrix}=\begin{bmatrix}-9(1)-5(-2)&-9(5)-5(-9)\\2(1)+1(-2)&2(5)+1(-9)\end{bmatrix}=\begin{bmatrix}1&0\\0&1\end{bmatrix}$$

$A$ and $B$ are inverses of each other.

{{< multiplechoice
  question="Are $A=\begin{bmatrix}1&4\\-1&-3\end{bmatrix}$ and $B=\begin{bmatrix}-3&-4\\1&1\end{bmatrix}$ multiplicative inverses of each other?"
  answer="Yes — $AB=BA=I$."
  hint="Compute the product $AB$; if it equals the identity matrix, compute $BA$ too and check that it also equals the identity."
>}}
Yes — $AB=BA=I$.
No — $AB\neq I$.
{{< /multiplechoice >}}

### Finding the Multiplicative Inverse Using Matrix Multiplication

We can now determine whether two matrices are inverses, but how would we find the inverse of a given matrix? Since we know that the product of a matrix and its inverse is the identity matrix, we can find the inverse of a matrix by setting up an equation using **matrix multiplication**.

**Example.** Use matrix multiplication to find the inverse of the given matrix.

$$A=\begin{bmatrix}1&-2\\2&-3\end{bmatrix}$$

**Solution.** For this method, we multiply $A$ by a matrix containing unknown constants and set it equal to the identity.

$$\begin{bmatrix}1&-2\\2&-3\end{bmatrix}\begin{bmatrix}a&b\\c&d\end{bmatrix}=\begin{bmatrix}1&0\\0&1\end{bmatrix}$$

Find the product of the two matrices on the left side of the equal sign.

$$\begin{bmatrix}1&-2\\2&-3\end{bmatrix}\begin{bmatrix}a&b\\c&d\end{bmatrix}=\begin{bmatrix}1a-2c&1b-2d\\2a-3c&2b-3d\end{bmatrix}$$

Next, set up a system of equations with the entry in row 1, column 1 of the new matrix equal to the first entry of the identity, $1$. Set the entry in row 2, column 1 of the new matrix equal to the corresponding entry of the identity, which is $0$.

$$
\begin{array}{lrcl}
& 1a-2c &=& 1 \quad R_1 \\[4pt]
& 2a-3c &=& 0 \quad R_2
\end{array}
$$

Using row operations, multiply and add as follows: $(-2)R_1+R_2\to R_2$. Add the equations, and solve for $c$.

$$
\begin{array}{lrcl}
& 1a-2c &=& 1 \\[4pt]
& 0+1c &=& -2 \\[4pt]
& c &=& -2
\end{array}
$$

Back-substitute to solve for $a$.

$$
\begin{array}{lrcl}
& a-2(-2) &=& 1 \\[4pt]
& a+4 &=& 1 \\[4pt]
& a &=& -3
\end{array}
$$

Write another system of equations setting the entry in row 1, column 2 of the new matrix equal to the corresponding entry of the identity, $0$. Set the entry in row 2, column 2 equal to the corresponding entry of the identity.

$$
\begin{array}{lrcl}
& 1b-2d &=& 0 \quad R_1 \\[4pt]
& 2b-3d &=& 1 \quad R_2
\end{array}
$$

Using row operations, multiply and add as follows: $(-2)R_1+R_2\to R_2$. Add the two equations and solve for $d$.

$$
\begin{array}{lrcl}
& 1b-2d &=& 0 \\[4pt]
& 0+1d &=& 1 \\[4pt]
& d &=& 1
\end{array}
$$

Once more, back-substitute and solve for $b$.

$$
\begin{array}{lrcl}
& b-2(1) &=& 0 \\[4pt]
& b-2 &=& 0 \\[4pt]
& b &=& 2
\end{array}
$$

$$A^{-1}=\begin{bmatrix}-3&2\\-2&1\end{bmatrix}$$

### Finding the Multiplicative Inverse by Augmenting with the Identity

Another way to find the multiplicative inverse is by augmenting with the identity. When matrix $A$ is transformed into $I$, the augmented matrix $I$ transforms into $A^{-1}$.

For example, given

$$A=\begin{bmatrix}2&1\\5&3\end{bmatrix}$$

augment $A$ with the identity

$$\left[\begin{array}{cc|cc}2&1&1&0\\5&3&0&1\end{array}\right]$$

Perform row operations with the goal of turning $A$ into the identity.

1. Switch row 1 and row 2.

   $$\left[\begin{array}{cc|cc}5&3&0&1\\2&1&1&0\end{array}\right]$$

2. Multiply row 2 by $-2$ and add to row 1.

   $$\left[\begin{array}{cc|cc}1&1&-2&1\\2&1&1&0\end{array}\right]$$

3. Multiply row 1 by $-2$ and add to row 2.

   $$\left[\begin{array}{cc|cc}1&1&-2&1\\0&-1&5&-2\end{array}\right]$$

4. Add row 2 to row 1.

   $$\left[\begin{array}{cc|cc}1&0&3&-1\\0&-1&5&-2\end{array}\right]$$

5. Multiply row 2 by $-1$.

   $$\left[\begin{array}{cc|cc}1&0&3&-1\\0&1&-5&2\end{array}\right]$$

The matrix we have found is $A^{-1}$.

$$A^{-1}=\begin{bmatrix}3&-1\\-5&2\end{bmatrix}$$

### Finding the Multiplicative Inverse of $2\times2$ Matrices Using a Formula

When we need to find the multiplicative inverse of a $2\times2$ matrix, we can use a special formula instead of using matrix multiplication or augmenting with the identity.

If $A$ is a $2\times2$ matrix, such as

$$A=\begin{bmatrix}a&b\\c&d\end{bmatrix}$$

the multiplicative inverse of $A$ is given by the formula

$$A^{-1}=\tfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$$

where $ad-bc\neq0$. If $ad-bc=0$, then $A$ has no inverse.

**Example.** Use the formula to find the multiplicative inverse of

$$A=\begin{bmatrix}1&-2\\2&-3\end{bmatrix}$$

**Solution.** Using the formula, we have

$$A^{-1}=\tfrac{1}{(1)(-3)-(-2)(2)}\begin{bmatrix}-3&2\\-2&1\end{bmatrix}=\tfrac{1}{-3+4}\begin{bmatrix}-3&2\\-2&1\end{bmatrix}=\begin{bmatrix}-3&2\\-2&1\end{bmatrix}$$

**Analysis.** We can check that our formula works by using one of the other methods to calculate the inverse. Let's augment $A$ with the identity.

$$\left[\begin{array}{cc|cc}1&-2&1&0\\2&-3&0&1\end{array}\right]$$

Perform row operations with the goal of turning $A$ into the identity.

1. Multiply row 1 by $-2$ and add to row 2.

   $$\left[\begin{array}{cc|cc}1&-2&1&0\\0&1&-2&1\end{array}\right]$$

2. Multiply row 2 by $2$ and add to row 1.

   $$\left[\begin{array}{cc|cc}1&0&-3&2\\0&1&-2&1\end{array}\right]$$

So, we have verified our original solution.

$$A^{-1}=\begin{bmatrix}-3&2\\-2&1\end{bmatrix}$$

{{< fillin
  question="Use the formula to find the multiplicative inverse of $A=\begin{bmatrix}1&-1\\2&3\end{bmatrix}$, then verify your answer by augmenting with the identity matrix. Enter the second row of $A^{-1}$ as a comma-separated list of two numbers, left to right."
  answer="-2/5, 1/5"
  answerDisplay="$-\tfrac{2}{5}, \tfrac{1}{5}$"
  hint="Compute $ad-bc$ first, then apply $A^{-1}=\tfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$."
>}}

**Example.** Find the inverse, if it exists, of the given matrix.

$$A=\begin{bmatrix}3&6\\1&2\end{bmatrix}$$

**Solution.** We will use the method of augmenting with the identity.

$$\left[\begin{array}{cc|cc}3&6&1&0\\1&2&0&1\end{array}\right]$$

1. Switch row 1 and row 2.

   $$\left[\begin{array}{cc|cc}1&2&0&1\\3&6&1&0\end{array}\right]$$

2. Multiply row 1 by $-3$ and add it to row 2.

   $$\left[\begin{array}{cc|cc}1&2&0&1\\0&0&1&-3\end{array}\right]$$

3. There is nothing further we can do. The zeros in row 2 indicate that this matrix has no inverse. *(Source note: the pinned CNXML prints this step's two augmented matrices with an internal arithmetic inconsistency — its "switch row 1 and row 2" line shows row 1 becoming $\begin{bmatrix}1&3\end{bmatrix}$ rather than $\begin{bmatrix}1&2\end{bmatrix}$, and the matrices that follow do not reduce from either reading by the stated row operation. The two augmented matrices above are the correct row reduction of $A$; the conclusion — $\det A=3(2)-6(1)=0$, so $A$ has no inverse — is unaffected and matches the source's own final sentence.)*

### Finding the Multiplicative Inverse of $3\times3$ Matrices

Unfortunately, we do not have a formula similar to the one for a $2\times2$ matrix to find the inverse of a $3\times3$ matrix. Instead, we will augment the original matrix with the identity matrix and use row operations to obtain the inverse.

Given a $3\times3$ matrix

$$A=\begin{bmatrix}2&3&1\\3&3&1\\2&4&1\end{bmatrix}$$

augment $A$ with the identity matrix

$$\left[\begin{array}{ccc|ccc}2&3&1&1&0&0\\3&3&1&0&1&0\\2&4&1&0&0&1\end{array}\right]$$

To begin, we write the augmented matrix with the identity on the right and $A$ on the left. Performing elementary row operations so that the identity matrix appears on the left, we will obtain the inverse matrix on the right. We will find the inverse of this matrix in the next example.

{{< callout type="info" >}}
  **How To:** given a $3\times3$ matrix, find the inverse.

  1. Write the original matrix augmented with the identity matrix on the right.
  2. Use elementary row operations so that the identity appears on the left.
  3. What is obtained on the right is the inverse of the original matrix.
  4. Use matrix multiplication to show that $AA^{-1}=I$ and $A^{-1}A=I$.
{{< /callout >}}

**Example.** Given the $3\times3$ matrix $A$, find the inverse.

$$A=\begin{bmatrix}2&3&1\\3&3&1\\2&4&1\end{bmatrix}$$

**Solution.** Augment $A$ with the identity matrix, and then begin row operations until the identity matrix replaces $A$. The matrix on the right will be the inverse of $A$.

$$\left[\begin{array}{ccc|ccc}2&3&1&1&0&0\\3&3&1&0&1&0\\2&4&1&0&0&1\end{array}\right]\ \overline{\to}\ \left[\begin{array}{ccc|ccc}3&3&1&0&1&0\\2&3&1&1&0&0\\2&4&1&0&0&1\end{array}\right]$$

$$-R_2+R_1=R_1\ \to\ \left[\begin{array}{ccc|ccc}1&0&0&-1&1&0\\2&3&1&1&0&0\\2&4&1&0&0&1\end{array}\right]$$

$$-R_2+R_3=R_3\ \to\ \left[\begin{array}{ccc|ccc}1&0&0&-1&1&0\\2&3&1&1&0&0\\0&1&0&-1&0&1\end{array}\right]$$

$$R_3\leftrightarrow R_2\ \to\ \left[\begin{array}{ccc|ccc}1&0&0&-1&1&0\\0&1&0&-1&0&1\\2&3&1&1&0&0\end{array}\right]$$

$$-2R_1+R_3=R_3\ \to\ \left[\begin{array}{ccc|ccc}1&0&0&-1&1&0\\0&1&0&-1&0&1\\0&3&1&3&-2&0\end{array}\right]$$

$$-3R_2+R_3=R_3\ \to\ \left[\begin{array}{ccc|ccc}1&0&0&-1&1&0\\0&1&0&-1&0&1\\0&0&1&6&-2&-3\end{array}\right]$$

Thus,

$$A^{-1}=B=\begin{bmatrix}-1&1&0\\-1&0&1\\6&-2&-3\end{bmatrix}$$

**Analysis.** To prove that $B=A^{-1}$, let's multiply the two matrices together to see if the product equals the identity, if $AA^{-1}=I$ and $A^{-1}A=I$.

$$AA^{-1}=\begin{bmatrix}2&3&1\\3&3&1\\2&4&1\end{bmatrix}\begin{bmatrix}-1&1&0\\-1&0&1\\6&-2&-3\end{bmatrix}=\begin{bmatrix}2(-1)+3(-1)+1(6)&2(1)+3(0)+1(-2)&2(0)+3(1)+1(-3)\\3(-1)+3(-1)+1(6)&3(1)+3(0)+1(-2)&3(0)+3(1)+1(-3)\\2(-1)+4(-1)+1(6)&2(1)+4(0)+1(-2)&2(0)+4(1)+1(-3)\end{bmatrix}=\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$$

$$A^{-1}A=\begin{bmatrix}-1&1&0\\-1&0&1\\6&-2&-3\end{bmatrix}\begin{bmatrix}2&3&1\\3&3&1\\2&4&1\end{bmatrix}=\begin{bmatrix}-1(2)+1(3)+0(2)&-1(3)+1(3)+0(4)&-1(1)+1(1)+0(1)\\-1(2)+0(3)+1(2)&-1(3)+0(3)+1(4)&-1(1)+0(1)+1(1)\\6(2)+(-2)(3)+(-3)(2)&6(3)+(-2)(3)+(-3)(4)&6(1)+(-2)(1)+(-3)(1)\end{bmatrix}=\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$$

{{< fillin
  question="Find the multiplicative inverse of $A=\begin{bmatrix}2&-17&11\\-1&11&-7\\0&3&-2\end{bmatrix}$. Enter the first row of $A^{-1}$ as a comma-separated list of three numbers, left to right."
  answer="1, 1, 2"
  answerDisplay="$1,\ 1,\ 2$"
  hint="Augment $A$ with the identity matrix and use row operations until the identity appears on the left; the matrix that appears on the right is $A^{-1}$."
>}}

### Solving a System of Linear Equations Using the Inverse of a Matrix

Solving a system of linear equations using the inverse of a matrix requires the definition of two new matrices: $X$ is the matrix representing the variables of the system, and $B$ is the matrix representing the constants. Using matrix multiplication, we may define a system of equations with the same number of equations as variables as

$$AX=B$$

To solve a system of linear equations using an inverse matrix, let $A$ be the coefficient matrix, let $X$ be the variable matrix, and let $B$ be the constant matrix. Thus, we want to solve a system $AX=B$. For example, look at the following system of equations.

$$
\begin{array}{lrcl}
& a_1x+b_1y &=& c_1 \\[4pt]
& a_2x+b_2y &=& c_2
\end{array}
$$

From this system, the coefficient matrix is

$$A=\begin{bmatrix}a_1&b_1\\a_2&b_2\end{bmatrix}$$

The variable matrix is

$$X=\begin{bmatrix}x\\y\end{bmatrix}$$

And the constant matrix is

$$B=\begin{bmatrix}c_1\\c_2\end{bmatrix}$$

Then $AX=B$ looks like

$$\begin{bmatrix}a_1&b_1\\a_2&b_2\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}c_1\\c_2\end{bmatrix}$$

Recall the discussion earlier in this section regarding multiplying a real number by its inverse, $\left(2^{-1}\right)2=\left(\tfrac{1}{2}\right)2=1$. To solve a single linear equation $ax=b$ for $x$, we would simply multiply both sides of the equation by the multiplicative inverse (reciprocal) of $a$. Thus,

$$
\begin{array}{lrcl}
& ax &=& b \\[4pt]
& \left(\tfrac{1}{a}\right)ax &=& \left(\tfrac{1}{a}\right)b \\[4pt]
& \left(a^{-1}\right)ax &=& \left(a^{-1}\right)b \\[4pt]
& \left[\left(a^{-1}\right)a\right]x &=& \left(a^{-1}\right)b \\[4pt]
& 1x &=& \left(a^{-1}\right)b \\[4pt]
& x &=& \left(a^{-1}\right)b
\end{array}
$$

The only difference between solving a linear equation and a system of equations written in matrix form is that finding the inverse of a matrix is more complicated, and matrix multiplication is a longer process. However, the goal is the same — to isolate the variable.

We will investigate this idea in detail, but it is helpful to begin with a $2\times2$ system and then move on to a $3\times3$ system.

{{< callout type="info" >}}
  **Solving a System of Equations Using the Inverse of a Matrix.** Given a system of equations, write the coefficient matrix $A$, the variable matrix $X$, and the constant matrix $B$. Then

  $$AX=B$$

  Multiply both sides by the inverse of $A$ to obtain the solution.

  $$
  \begin{array}{lrcl}
  & \left(A^{-1}\right)AX &=& \left(A^{-1}\right)B \\[4pt]
  & \left[\left(A^{-1}\right)A\right]X &=& \left(A^{-1}\right)B \\[4pt]
  & IX &=& \left(A^{-1}\right)B \\[4pt]
  & X &=& \left(A^{-1}\right)B
  \end{array}
  $$
{{< /callout >}}

{{< callout type="info" >}}
  **Q&A.** *If the coefficient matrix does not have an inverse, does that mean the system has no solution?*

  No, if the coefficient matrix is not invertible, the system could be inconsistent and have no solution, or be dependent and have infinitely many solutions.
{{< /callout >}}

**Example.** Solve the given system of equations using the inverse of a matrix.

$$
\begin{array}{lrcl}
& 3x+8y &=& 5 \\[4pt]
& 4x+11y &=& 7
\end{array}
$$

**Solution.** Write the system in terms of a coefficient matrix, a variable matrix, and a constant matrix.

$$A=\begin{bmatrix}3&8\\4&11\end{bmatrix},\quad X=\begin{bmatrix}x\\y\end{bmatrix},\quad B=\begin{bmatrix}5\\7\end{bmatrix}$$

Then

$$\begin{bmatrix}3&8\\4&11\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}5\\7\end{bmatrix}$$

First, we need to calculate $A^{-1}$. Using the formula to calculate the inverse of a $2\times2$ matrix, we have:

$$A^{-1}=\tfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}=\tfrac{1}{3(11)-8(4)}\begin{bmatrix}11&-8\\-4&3\end{bmatrix}=\tfrac{1}{1}\begin{bmatrix}11&-8\\-4&3\end{bmatrix}$$

So,

$$A^{-1}=\begin{bmatrix}11&-8\\-4&3\end{bmatrix}$$

Now we are ready to solve. Multiply both sides of the equation by $A^{-1}$.

$$\left(A^{-1}\right)AX=\left(A^{-1}\right)B$$

$$\begin{bmatrix}11&-8\\-4&3\end{bmatrix}\begin{bmatrix}3&8\\4&11\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}11&-8\\-4&3\end{bmatrix}\begin{bmatrix}5\\7\end{bmatrix}$$

$$\begin{bmatrix}1&0\\0&1\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}11(5)+(-8)7\\-4(5)+3(7)\end{bmatrix}$$

$$\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}-1\\1\end{bmatrix}$$

The solution is $(-1,1)$.

{{< callout type="info" >}}
  **Q&A.** *Can we solve for $X$ by finding the product $BA^{-1}$?*

  No, recall that matrix multiplication is not commutative, so $A^{-1}B\neq BA^{-1}$. Consider our steps for solving the matrix equation.

  $$
  \begin{array}{lrcl}
  & \left(A^{-1}\right)AX &=& \left(A^{-1}\right)B \\[4pt]
  & \left[\left(A^{-1}\right)A\right]X &=& \left(A^{-1}\right)B \\[4pt]
  & IX &=& \left(A^{-1}\right)B \\[4pt]
  & X &=& \left(A^{-1}\right)B
  \end{array}
  $$

  Notice in the first step we multiplied both sides of the equation by $A^{-1}$, but the $A^{-1}$ was to the left of $A$ on the left side and to the left of $B$ on the right side. Because matrix multiplication is not commutative, order matters.
{{< /callout >}}

**Example.** Solve the following system using the inverse of a matrix.

$$
\begin{array}{lrcl}
& 5x+15y+56z &=& 35 \\[4pt]
& -4x-11y-41z &=& -26 \\[4pt]
& -x-3y-11z &=& -7
\end{array}
$$

**Solution.** Write the equation $AX=B$.

$$\begin{bmatrix}5&15&56\\-4&-11&-41\\-1&-3&-11\end{bmatrix}\begin{bmatrix}x\\y\\z\end{bmatrix}=\begin{bmatrix}35\\-26\\-7\end{bmatrix}$$

First, we will find the inverse of $A$ by augmenting with the identity.

$$\left[\begin{array}{ccc|ccc}5&15&56&1&0&0\\-4&-11&-41&0&1&0\\-1&-3&-11&0&0&1\end{array}\right]$$

Multiply row 1 by $\tfrac{1}{5}$.

$$\left[\begin{array}{ccc|ccc}1&3&\tfrac{56}{5}&\tfrac{1}{5}&0&0\\-4&-11&-41&0&1&0\\-1&-3&-11&0&0&1\end{array}\right]$$

Multiply row 1 by $4$ and add to row 2.

$$\left[\begin{array}{ccc|ccc}1&3&\tfrac{56}{5}&\tfrac{1}{5}&0&0\\0&1&\tfrac{19}{5}&\tfrac{4}{5}&1&0\\-1&-3&-11&0&0&1\end{array}\right]$$

Add row 1 to row 3.

$$\left[\begin{array}{ccc|ccc}1&3&\tfrac{56}{5}&\tfrac{1}{5}&0&0\\0&1&\tfrac{19}{5}&\tfrac{4}{5}&1&0\\0&0&\tfrac{1}{5}&\tfrac{1}{5}&0&1\end{array}\right]$$

Multiply row 2 by $-3$ and add to row 1.

$$\left[\begin{array}{ccc|ccc}1&0&-\tfrac{1}{5}&-\tfrac{11}{5}&-3&0\\0&1&\tfrac{19}{5}&\tfrac{4}{5}&1&0\\0&0&\tfrac{1}{5}&\tfrac{1}{5}&0&1\end{array}\right]$$

Multiply row 3 by $5$.

$$\left[\begin{array}{ccc|ccc}1&0&-\tfrac{1}{5}&-\tfrac{11}{5}&-3&0\\0&1&\tfrac{19}{5}&\tfrac{4}{5}&1&0\\0&0&1&1&0&5\end{array}\right]$$

Multiply row 3 by $\tfrac{1}{5}$ and add to row 1.

$$\left[\begin{array}{ccc|ccc}1&0&0&-2&-3&1\\0&1&\tfrac{19}{5}&\tfrac{4}{5}&1&0\\0&0&1&1&0&5\end{array}\right]$$

Multiply row 3 by $-\tfrac{19}{5}$ and add to row 2.

$$\left[\begin{array}{ccc|ccc}1&0&0&-2&-3&1\\0&1&0&-3&1&-19\\0&0&1&1&0&5\end{array}\right]$$

So,

$$A^{-1}=\begin{bmatrix}-2&-3&1\\-3&1&-19\\1&0&5\end{bmatrix}$$

Multiply both sides of the equation by $A^{-1}$. We want $A^{-1}AX=A^{-1}B$:

$$\begin{bmatrix}-2&-3&1\\-3&1&-19\\1&0&5\end{bmatrix}\begin{bmatrix}5&15&56\\-4&-11&-41\\-1&-3&-11\end{bmatrix}\begin{bmatrix}x\\y\\z\end{bmatrix}=\begin{bmatrix}-2&-3&1\\-3&1&-19\\1&0&5\end{bmatrix}\begin{bmatrix}35\\-26\\-7\end{bmatrix}$$

Thus,

$$A^{-1}B=\begin{bmatrix}-70+78-7\\-105-26+133\\35+0-35\end{bmatrix}=\begin{bmatrix}1\\2\\0\end{bmatrix}$$

The solution is $(1,2,0)$.

{{< fillin
  question="Solve the system $\begin{cases}2x-17y+11z=0\\-x+11y-7z=8\\3y-2z=-2\end{cases}$ using the inverse of the coefficient matrix. Enter the solution as an ordered triple $(x,y,z)$."
  answer="(4,38,58)"
  answerDisplay="$(4,38,58)$"
  hint="Write the system as $AX=B$, find $A^{-1}$ (the same coefficient matrix you inverted in the previous problem), then compute $X=A^{-1}B$."
>}}

{{< callout type="info" >}}
  **How To:** given a system of equations, solve with matrix inverses using a calculator.

  1. Save the coefficient matrix and the constant matrix as matrix variables $[A]$ and $[B]$.
  2. Enter the multiplication into the calculator, calling up each matrix variable as needed.
  3. If the coefficient matrix is invertible, the calculator will present the solution matrix; if the coefficient matrix is not invertible, the calculator will present an error message.
{{< /callout >}}

**Example.** Solve the system of equations with matrix inverses using a calculator

$$
\begin{array}{lrcl}
& 2x+3y+z &=& 32 \\[4pt]
& 3x+3y+z &=& -27 \\[4pt]
& 2x+4y+z &=& -2
\end{array}
$$

**Solution.** On the matrix page of the calculator, enter the coefficient matrix as the matrix variable $[A]$, and enter the constant matrix as the matrix variable $[B]$.

$$[A]=\begin{bmatrix}2&3&1\\3&3&1\\2&4&1\end{bmatrix},\quad [B]=\begin{bmatrix}32\\-27\\-2\end{bmatrix}$$

On the home screen of the calculator, type in the multiplication to solve for $X$, calling up each matrix variable as needed.

$$[A]^{-1}\times[B]$$

Evaluate the expression.

$$\begin{bmatrix}-59\\-34\\252\end{bmatrix}$$

## Key equations

| Identity matrix for a $2\times2$ matrix | $I_2=\begin{bmatrix}1&0\\0&1\end{bmatrix}$ |
| :--- | :--- |
| Identity matrix for a $3\times3$ matrix | $I_3=\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$ |
| Multiplicative inverse of a $2\times2$ matrix | $A^{-1}=\tfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$, where $ad-bc\neq0$ |

## Key concepts

- An identity matrix has the property $AI=IA=A$.
- An invertible matrix has the property $AA^{-1}=A^{-1}A=I$.
- Use matrix multiplication and the identity to find the inverse of a $2\times2$ matrix.
- The multiplicative inverse can be found using a formula.
- Another method of finding the inverse is by augmenting with the identity.
- We can augment a $3\times3$ matrix with the identity on the right and use row operations to turn the original matrix into the identity, and the matrix on the right becomes the inverse.
- Write the system of equations as $AX=B$, and multiply both sides by the inverse of $A$: $A^{-1}AX=A^{-1}B$.
- We can also use a calculator to solve a system of equations with matrix inverses.

## Practice

### Find the inverse of a matrix

{{< multiplechoice
  question="Can a $2\times2$ matrix with zeros on its diagonal have a multiplicative inverse?"
  answer="Yes — for example, $\begin{bmatrix}0&1\\1&0\end{bmatrix}$ has inverse $\begin{bmatrix}0&1\\1&0\end{bmatrix}$."
  hint="Test the formula $A^{-1}=\tfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$ on a specific matrix with $a=d=0$ — it does not force $ad-bc=0$ by itself."
>}}
Yes — for example, $\begin{bmatrix}0&1\\1&0\end{bmatrix}$ has inverse $\begin{bmatrix}0&1\\1&0\end{bmatrix}$.
No — a matrix with zeros on the diagonal never has an inverse.
{{< /multiplechoice >}}

{{< fillin
  question="Find the multiplicative inverse of $\begin{bmatrix}3&-2\\1&9\end{bmatrix}$, if it exists. Enter the first row of the inverse as a comma-separated list of two numbers, left to right."
  answer="9/29, 2/29"
  answerDisplay="$\tfrac{9}{29}, \tfrac{2}{29}$"
  hint="Compute $ad-bc$, then apply $A^{-1}=\tfrac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$."
>}}

{{< fillin
  question="Find the multiplicative inverse of $\begin{bmatrix}1&9&-3\\2&5&6\\4&-2&7\end{bmatrix}$, if it exists. Enter the first row of the inverse as a comma-separated list of three numbers, left to right."
  answer="47/209, -57/209, 69/209"
  answerDisplay="$\tfrac{47}{209}, -\tfrac{57}{209}, \tfrac{69}{209}$"
  hint="Augment the matrix with the identity and use row operations until the identity appears on the left; the matrix that appears on the right is the inverse."
>}}

### Solve a system of linear equations using an inverse matrix

{{< fillin
  question="Solve the system $\begin{cases}5x-6y=-61\\4x+3y=-2\end{cases}$ using the inverse of the coefficient matrix. Enter the solution as an ordered pair $(x,y)$."
  answer="(-5,6)"
  answerDisplay="$(-5,6)$"
  hint="Write the system as $AX=B$, find $A^{-1}$ with the $2\times2$ inverse formula, then compute $X=A^{-1}B$."
>}}

{{< fillin
  question="Solve the system $\begin{cases}-3x-4y=9\\12x+4y=-6\end{cases}$ using the inverse of the coefficient matrix. Enter the solution as an ordered pair $(x,y)$."
  answer="(1/3,-5/2)"
  answerDisplay="$\left(\tfrac{1}{3},-\tfrac{5}{2}\right)$"
  hint="Write the system as $AX=B$, find $A^{-1}$ with the $2\times2$ inverse formula, then compute $X=A^{-1}B$."
>}}

{{< fillin
  question="Solve the system $\begin{cases}6x-5y-z=31\\-x+2y+z=-6\\3x+3y+2z=13\end{cases}$ using the inverse of the coefficient matrix. Enter the solution as an ordered triple $(x,y,z)$."
  answer="(5,0,-1)"
  answerDisplay="$(5,0,-1)$"
  hint="Write the system as $AX=B$, find $A^{-1}$ by augmenting with the identity matrix, then compute $X=A^{-1}B$."
>}}

{{< fillin
  question="Solve the system $\begin{cases}3x-2y+5z=21\\5x+4y=37\\x-2y-5z=5\end{cases}$ using the inverse of the coefficient matrix. Enter the solution as an ordered triple $(x,y,z)$."
  answer="(7,1/2,1/5)"
  answerDisplay="$\left(7,\tfrac{1}{2},\tfrac{1}{5}\right)$"
  hint="Write the system as $AX=B$, find $A^{-1}$ by augmenting with the identity matrix, then compute $X=A^{-1}B$."
>}}

{{< fillin
  question="Three roommates shared a package of $12$ ice cream bars. Micah ate twice as many bars as Joe, and Albert ate three fewer bars than Micah. Letting $m$, $j$, and $a$ be the numbers of bars Micah, Joe, and Albert ate, solve the system $\begin{cases}m+j+a=12\\m-2j=0\\-m+a=-3\end{cases}$ using the inverse of the coefficient matrix. Enter the solution as an ordered triple $(m,j,a)$."
  answer="(6,3,3)"
  answerDisplay="$(6,3,3)$"
  hint="Write the system as $AX=B$ with $X=\begin{bmatrix}m\\j\\a\end{bmatrix}$, find $A^{-1}$, then compute $X=A^{-1}B$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 9.7: Solving Systems with Inverses](https://openstax.org/books/precalculus-2e/pages/9-7-solving-systems-with-inverses) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Objective 1"/"Objective 2" review of evaluating $2\times2$ and $3\times3$ determinants, keyed to Intermediate Algebra 4.6) — the same prepended-block pattern already logged in this book's errata for §§4.3–4.8 and §9.5; this section joins that list. Omitted the "Access these online resources" media links. **The grader cannot take a matrix-shaped answer** (the MathLive matrix-entry path is menu-only and untested for learners), so — following house precedent from Intermediate Algebra 4.5 and this book's §9.5 — every retained Try It and every Practice item whose source answer is a full matrix inverse is re-posed as a row-entry fill-in ("enter the first/second row… as a comma-separated list"), with each fraction entry keyed as the cofactor-over-determinant fraction a learner's own computation produces (entries are graded by value, so an equal reduced or unreduced spelling also passes, and the source's factored-scalar spelling, e.g. $\tfrac{1}{69}\begin{bmatrix}\cdots\end{bmatrix}$, is not required). Every "show that $A$ and $B$ are inverses of each other" ask became a Yes/No multiple choice, since verifying an equality is a categorical outcome, not a number; the diagonal-zeros verbal exercise became a multiple choice for the same reason, offering the source's own example matrix as the "yes" option. Every solved system's variables and equations are inlined directly into the `question` string as $\begin{cases}\ldots\end{cases}$, and every solution is keyed as an ordered pair or triple with the format stated in the question. Eight selected end-of-section exercises were adapted into interactive Practice components (one verbal, two inverse computations, five system solves including one real-world scenario), every one independently re-derived by computing exact-rational matrix inverses and products in Node rather than read off the source key. **One confirmed upstream defect.** The worked Example "Finding the Inverse of the Matrix, If It Exists" ($A=\begin{bmatrix}3&6\\1&2\end{bmatrix}$) prints its "switch row 1 and row 2" step and the augmented matrices that follow with an internal arithmetic inconsistency (row 1 becomes $\begin{bmatrix}1&3\end{bmatrix}$ rather than the correct swap $\begin{bmatrix}1&2\end{bmatrix}$, and neither printed matrix follows from the other by the stated row operation) — the augmented matrices shown on this page are the correct row reduction instead, with a visible source note beside the correction; the example's conclusion ("this matrix has no inverse," since $\det A=0$) is unaffected and is the source's own final sentence.</small>
