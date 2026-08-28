---
title: Matrices and Matrix Operations
description: >-
  Matrix dimensions and entry notation, adding and subtracting matrices,
  finding scalar multiples of a matrix, and multiplying two matrices —
  including a real-world equipment-cost application — adapted from OpenStax
  Precalculus 2e, Section 9.5.
source_section: "9.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the sum and difference of two matrices
- Find scalar multiples of a matrix
- Find the product of two matrices
{{< /callout >}}

Two club soccer teams, the Wildcats and the Mud Cats, are hoping to obtain new equipment for an upcoming season. The table below shows the needs of both teams.

| | Wildcats | Mud Cats |
| --- | --- | --- |
| **Goals** | 6 | 10 |
| **Balls** | 30 | 24 |
| **Jerseys** | 14 | 20 |

A goal costs \$300; a ball costs \$10; and a jersey costs \$30. How can we find the total cost for the equipment needed for each team? In this section, we discover a method in which the data in the soccer equipment table can be displayed and used for calculating other information. Then, we will be able to calculate the cost of the equipment.

### Finding the Sum and Difference of Two Matrices

To solve a problem like the one described for the soccer teams, we can use a **matrix**, which is a rectangular array of numbers. A **row** in a matrix is a set of numbers that are aligned horizontally. A **column** in a matrix is a set of numbers that are aligned vertically. Each number is an **entry**, sometimes called an element, of the matrix. Matrices (plural) are enclosed in brackets or parentheses, and are usually named with capital letters. For example, three matrices named $A$, $B$, and $C$ are shown below.

$$A=\begin{bmatrix}1&2\\3&4\end{bmatrix},\quad B=\begin{bmatrix}1&2&7\\0&-5&6\\7&8&2\end{bmatrix},\quad C=\begin{bmatrix}-1&3\\0&2\\3&1\end{bmatrix}$$

### Describing Matrices

A matrix is often referred to by its size or dimensions: $m\times n$ indicating $m$ rows and $n$ columns. Matrix entries are defined first by row and then by column. For example, to locate the entry in matrix $A$ identified as $a_{ij}$, we look for the entry in row $i$, column $j$. In matrix $A$, shown below, the entry in row 2, column 3 is $a_{23}$.

$$A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix}$$

A **square matrix** is a matrix with dimensions $n\times n$, meaning that it has the same number of rows as columns. The $3\times3$ matrix above is an example of a square matrix.

A **row matrix** is a matrix consisting of one row with dimensions $1\times n$.

$$\begin{bmatrix}a_{11}&a_{12}&a_{13}\end{bmatrix}$$

A **column matrix** is a matrix consisting of one column with dimensions $m\times1$.

$$\begin{bmatrix}a_{11}\\a_{21}\\a_{31}\end{bmatrix}$$

A matrix may be used to represent a system of equations. In these cases, the numbers represent the coefficients of the variables in the system. Matrices often make solving systems of equations easier because they are not encumbered with variables. We will investigate this idea further in the next section, but first we will look at basic **matrix operations**.

{{< callout type="info" >}}
  **Matrices.** A matrix is a rectangular array of numbers that is usually named by a capital letter: $A$, $B$, $C$, and so on. Each entry in a matrix is referred to as $a_{ij}$, such that $i$ represents the row and $j$ represents the column. Matrices are often referred to by their dimensions: $m\times n$ indicating $m$ rows and $n$ columns.
{{< /callout >}}

**Example.** Given matrix $A$ below: (a) What are the dimensions of matrix $A$? (b) What are the entries at $a_{31}$ and $a_{22}$?

$$A=\begin{bmatrix}2&1&0\\2&4&7\\3&1&-2\end{bmatrix}$$

**Solution.** (a) The dimensions are $3\times3$ because there are three rows and three columns. (b) Entry $a_{31}$ is the number at row 3, column 1, which is $3$. The entry $a_{22}$ is the number at row 2, column 2, which is $4$. Remember, the row comes first, then the column.

### Adding and Subtracting Matrices

We use matrices to list data or to represent systems. Because the entries are numbers, we can perform operations on matrices. We add or subtract matrices by adding or subtracting corresponding entries.

In order to do this, the entries must correspond. Therefore, addition and subtraction of matrices is only possible when the matrices have the same dimensions. We can add or subtract a $3\times3$ matrix and another $3\times3$ matrix, but we cannot add or subtract a $2\times3$ matrix and a $3\times3$ matrix because some entries in one matrix will not have a corresponding entry in the other matrix.

{{< callout type="info" >}}
  **Adding and Subtracting Matrices.** Given matrices $A$ and $B$ of like dimensions, addition and subtraction of $A$ and $B$ will produce matrix $C$ or matrix $D$ of the same dimension.

  $$A+B=C\ \text{such that}\ a_{ij}+b_{ij}=c_{ij}$$

  $$A-B=D\ \text{such that}\ a_{ij}-b_{ij}=d_{ij}$$

  Matrix addition is commutative.

  $$A+B=B+A$$

  It is also associative.

  $$(A+B)+C=A+(B+C)$$
{{< /callout >}}

**Example.** Find the sum of $A$ and $B$, given

$$A=\begin{bmatrix}a&b\\c&d\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}e&f\\g&h\end{bmatrix}$$

**Solution.** Add corresponding entries.

$$A+B=\begin{bmatrix}a&b\\c&d\end{bmatrix}+\begin{bmatrix}e&f\\g&h\end{bmatrix}$$

$$A+B=\begin{bmatrix}a+e&b+f\\c+g&d+h\end{bmatrix}$$

**Example.** Find the sum of $A$ and $B$.

$$A=\begin{bmatrix}4&1\\3&2\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}5&9\\0&7\end{bmatrix}$$

**Solution.** Add corresponding entries. Add the entry in row 1, column 1, $a_{11}$, of matrix $A$ to the entry in row 1, column 1, $b_{11}$, of $B$. Continue the pattern until all entries have been added.

$$A+B=\begin{bmatrix}4&1\\3&2\end{bmatrix}+\begin{bmatrix}5&9\\0&7\end{bmatrix}$$

$$A+B=\begin{bmatrix}4+5&1+9\\3+0&2+7\end{bmatrix}=\begin{bmatrix}9&10\\3&9\end{bmatrix}$$

**Example.** Find the difference of $A$ and $B$.

$$A=\begin{bmatrix}-2&3\\0&1\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}8&1\\5&4\end{bmatrix}$$

**Solution.** We subtract the corresponding entries of each matrix.

$$A-B=\begin{bmatrix}-2&3\\0&1\end{bmatrix}-\begin{bmatrix}8&1\\5&4\end{bmatrix}$$

$$A-B=\begin{bmatrix}-2-8&3-1\\0-5&1-4\end{bmatrix}=\begin{bmatrix}-10&2\\-5&-3\end{bmatrix}$$

**Example.** Given $A$ and $B$: (a) find the sum. (b) find the difference.

$$A=\begin{bmatrix}2&-10&-2\\14&12&10\\4&-2&2\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}6&10&-2\\0&-12&-4\\-5&2&-2\end{bmatrix}$$

**Solution.** (a) Add the corresponding entries.

$$A+B=\begin{bmatrix}2&-10&-2\\14&12&10\\4&-2&2\end{bmatrix}+\begin{bmatrix}6&10&-2\\0&-12&-4\\-5&2&-2\end{bmatrix}$$

$$A+B=\begin{bmatrix}2+6&-10+10&-2-2\\14+0&12-12&10-4\\4-5&-2+2&2-2\end{bmatrix}=\begin{bmatrix}8&0&-4\\14&0&6\\-1&0&0\end{bmatrix}$$

(b) Subtract the corresponding entries.

$$A-B=\begin{bmatrix}2&-10&-2\\14&12&10\\4&-2&2\end{bmatrix}-\begin{bmatrix}6&10&-2\\0&-12&-4\\-5&2&-2\end{bmatrix}$$

$$A-B=\begin{bmatrix}2-6&-10-10&-2+2\\14-0&12+12&10+4\\4+5&-2-2&2+2\end{bmatrix}=\begin{bmatrix}-4&-20&0\\14&24&14\\9&-4&4\end{bmatrix}$$

{{< fillin
  question="Add matrix $A=\begin{bmatrix}2&6\\1&0\\1&-3\end{bmatrix}$ and matrix $B=\begin{bmatrix}3&-2\\1&5\\-4&3\end{bmatrix}$. Enter the second row of the sum $A+B$ as a comma-separated list of two numbers, left to right."
  answer="2, 5"
  hint="Add the entries in row 2: $1+1$ and $0+5$."
>}}

### Finding Scalar Multiples of a Matrix

Besides adding and subtracting whole matrices, there are many situations in which we need to multiply a matrix by a constant called a scalar. Recall that a **scalar** is a real number quantity that has magnitude, but not direction. For example, time, temperature, and distance are scalar quantities. The process of **scalar multiplication** involves multiplying each entry in a matrix by a scalar. A **scalar multiple** is any entry of a matrix that results from scalar multiplication.

Consider a real-world scenario in which a university needs to add to its inventory of computers, computer tables, and chairs in two of the campus labs due to increased enrollment. They estimate that 15% more equipment is needed in both labs. The school's current inventory is displayed in the table below.

| | Lab A | Lab B |
| --- | --- | --- |
| **Computers** | 15 | 27 |
| **Computer Tables** | 16 | 34 |
| **Chairs** | 16 | 34 |

Converting the data to a matrix, we have

$$C_{2013}=\begin{bmatrix}15&27\\16&34\\16&34\end{bmatrix}$$

To calculate how much computer equipment will be needed, we multiply all entries in matrix $C$ by $0.15$.

$$(0.15)C_{2013}=\begin{bmatrix}(0.15)15&(0.15)27\\(0.15)16&(0.15)34\\(0.15)16&(0.15)34\end{bmatrix}=\begin{bmatrix}2.25&4.05\\2.4&5.1\\2.4&5.1\end{bmatrix}$$

We must round up to the next integer, so the amount of new equipment needed is

$$\begin{bmatrix}3&5\\3&6\\3&6\end{bmatrix}$$

Adding the two matrices as shown below, we see the new inventory amounts.

$$\begin{bmatrix}15&27\\16&34\\16&34\end{bmatrix}+\begin{bmatrix}3&5\\3&6\\3&6\end{bmatrix}=\begin{bmatrix}18&32\\19&40\\19&40\end{bmatrix}$$

This means

$$C_{2014}=\begin{bmatrix}18&32\\19&40\\19&40\end{bmatrix}$$

Thus, Lab A will have 18 computers, 19 computer tables, and 19 chairs; Lab B will have 32 computers, 40 computer tables, and 40 chairs.

{{< callout type="info" >}}
  **Scalar Multiplication.** Scalar multiplication involves finding the product of a constant by each entry in the matrix. Given

  $$A=\begin{bmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{bmatrix}$$

  the scalar multiple $cA$ is

  $$cA=c\begin{bmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{bmatrix}=\begin{bmatrix}ca_{11}&ca_{12}\\ca_{21}&ca_{22}\end{bmatrix}$$

  Scalar multiplication is distributive. For the matrices $A$, $B$, and $C$ with scalars $a$ and $b$,

  $$
  \begin{array}{lrcl}
  & a(A+B) &=& aA+aB \\[4pt]
  & (a+b)A &=& aA+bA
  \end{array}
  $$
{{< /callout >}}

**Example.** Multiply matrix $A$ by the scalar $3$.

$$A=\begin{bmatrix}8&1\\5&4\end{bmatrix}$$

**Solution.** Multiply each entry in $A$ by the scalar $3$.

$$3A=3\begin{bmatrix}8&1\\5&4\end{bmatrix}=\begin{bmatrix}3\cdot8&3\cdot1\\3\cdot5&3\cdot4\end{bmatrix}=\begin{bmatrix}24&3\\15&12\end{bmatrix}$$

{{< fillin
  question="Given matrix $B=\begin{bmatrix}4&1\\3&2\end{bmatrix}$, find $-2B$. Enter the second row of $-2B$ as a comma-separated list of two numbers, left to right."
  answer="-6, -4"
  hint="Multiply every entry of row 2 by $-2$: $-2(3)$ and $-2(2)$."
>}}

**Example.** Find the sum $3A+2B$.

$$A=\begin{bmatrix}1&-2&0\\0&-1&2\\4&3&-6\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}-1&2&1\\0&-3&2\\0&1&-4\end{bmatrix}$$

**Solution.** First, find $3A$, then $2B$.

$$3A=\begin{bmatrix}3\cdot1&3(-2)&3\cdot0\\3\cdot0&3(-1)&3\cdot2\\3\cdot4&3\cdot3&3(-6)\end{bmatrix}=\begin{bmatrix}3&-6&0\\0&-3&6\\12&9&-18\end{bmatrix}$$

$$2B=\begin{bmatrix}2(-1)&2\cdot2&2\cdot1\\2\cdot0&2(-3)&2\cdot2\\2\cdot0&2\cdot1&2(-4)\end{bmatrix}=\begin{bmatrix}-2&4&2\\0&-6&4\\0&2&-8\end{bmatrix}$$

Now, add $3A+2B$.

$$3A+2B=\begin{bmatrix}3&-6&0\\0&-3&6\\12&9&-18\end{bmatrix}+\begin{bmatrix}-2&4&2\\0&-6&4\\0&2&-8\end{bmatrix}$$

$$3A+2B=\begin{bmatrix}3-2&-6+4&0+2\\0+0&-3-6&6+4\\12+0&9+2&-18-8\end{bmatrix}=\begin{bmatrix}1&-2&2\\0&-9&10\\12&11&-26\end{bmatrix}$$

### Finding the Product of Two Matrices

In addition to multiplying a matrix by a scalar, we can multiply two matrices. Finding the **product of two matrices** is only possible when the inner dimensions are the same, meaning that the number of columns of the first matrix is equal to the number of rows of the second matrix. If $A$ is an $m\times r$ matrix and $B$ is an $r\times n$ matrix, then the product matrix $AB$ is an $m\times n$ matrix. If the inner dimensions do not match, the product is not defined.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A schematic showing matrix A, with dimensions 2 by 3, multiplied by matrix B, with dimensions 3 by 3, with a brace under the matching inner dimensions labeled same.","unit":34,"texts":[{"at":[0,2],"text":"A"},{"at":[1.1,2],"text":"·"},{"at":[2.6,2],"text":"B"},{"at":[0,1],"text":"2×3"},{"at":[2.6,1],"text":"3×3"}],"segments":[{"from":[0.4,0.55],"to":[3.2,0.55],"label":"same","arrows":false}]}
{{< /apfigure >}}

In this example, the product $AB$ is possible because the number of columns in $A$ (three) is the same as the number of rows in $B$ (three): the inner dimensions match.

We multiply entries of $A$ with entries of $B$ according to a specific pattern as outlined below. The process of **matrix multiplication** becomes clearer when working a problem with real numbers.

To obtain the entries in row $i$ of $AB$, we multiply the entries in row $i$ of $A$ by column $j$ in $B$ and add. For example, given matrices $A$ and $B$, where the dimensions of $A$ are $2\times3$ and the dimensions of $B$ are $3\times3$, the product of $AB$ will be a $2\times3$ matrix.

$$A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}b_{11}&b_{12}&b_{13}\\b_{21}&b_{22}&b_{23}\\b_{31}&b_{32}&b_{33}\end{bmatrix}$$

Multiply and add as follows to obtain the first entry of the product matrix $AB$.

- To obtain the entry in row 1, column 1 of $AB$, multiply the first row in $A$ by the first column in $B$, and add.

  $$\begin{bmatrix}a_{11}&a_{12}&a_{13}\end{bmatrix}\begin{bmatrix}b_{11}\\b_{21}\\b_{31}\end{bmatrix}=a_{11}\cdot b_{11}+a_{12}\cdot b_{21}+a_{13}\cdot b_{31}$$

- To obtain the entry in row 1, column 2 of $AB$, multiply the first row of $A$ by the second column in $B$, and add.

  $$\begin{bmatrix}a_{11}&a_{12}&a_{13}\end{bmatrix}\begin{bmatrix}b_{12}\\b_{22}\\b_{32}\end{bmatrix}=a_{11}\cdot b_{12}+a_{12}\cdot b_{22}+a_{13}\cdot b_{32}$$

- To obtain the entry in row 1, column 3 of $AB$, multiply the first row of $A$ by the third column in $B$, and add.

  $$\begin{bmatrix}a_{11}&a_{12}&a_{13}\end{bmatrix}\begin{bmatrix}b_{13}\\b_{23}\\b_{33}\end{bmatrix}=a_{11}\cdot b_{13}+a_{12}\cdot b_{23}+a_{13}\cdot b_{33}$$

We proceed the same way to obtain the second row of $AB$: row 2 of $A$ times column 1 of $B$; row 2 of $A$ times column 2 of $B$; row 2 of $A$ times column 3 of $B$. When complete, the product matrix will be

$$AB=\begin{bmatrix}a_{11}\cdot b_{11}+a_{12}\cdot b_{21}+a_{13}\cdot b_{31}&a_{11}\cdot b_{12}+a_{12}\cdot b_{22}+a_{13}\cdot b_{32}&a_{11}\cdot b_{13}+a_{12}\cdot b_{23}+a_{13}\cdot b_{33}\\a_{21}\cdot b_{11}+a_{22}\cdot b_{21}+a_{23}\cdot b_{31}&a_{21}\cdot b_{12}+a_{22}\cdot b_{22}+a_{23}\cdot b_{32}&a_{21}\cdot b_{13}+a_{22}\cdot b_{23}+a_{23}\cdot b_{33}\end{bmatrix}$$

{{< callout type="info" >}}
  **Properties of Matrix Multiplication.** For the matrices $A$, $B$, and $C$ the following properties hold.

  - Matrix multiplication is associative: $(AB)C=A(BC)$.
  - Matrix multiplication is distributive: $C(A+B)=CA+CB$, and $(A+B)C=AC+BC$.

  Note that matrix multiplication is not commutative.
{{< /callout >}}

**Example.** Multiply matrix $A$ and matrix $B$.

$$A=\begin{bmatrix}1&2\\3&4\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}5&6\\7&8\end{bmatrix}$$

**Solution.** First, we check the dimensions of the matrices. Matrix $A$ has dimensions $2\times2$ and matrix $B$ has dimensions $2\times2$. The inner dimensions are the same so we can perform the multiplication. The product will have the dimensions $2\times2$.

$$AB=\begin{bmatrix}1&2\\3&4\end{bmatrix}\cdot\begin{bmatrix}5&6\\7&8\end{bmatrix}$$

$$AB=\begin{bmatrix}1(5)+2(7)&1(6)+2(8)\\3(5)+4(7)&3(6)+4(8)\end{bmatrix}=\begin{bmatrix}19&22\\43&50\end{bmatrix}$$

**Example.** Given $A$ and $B$: (a) find $AB$. (b) find $BA$.

$$A=\begin{bmatrix}-1&2&3\\4&0&5\end{bmatrix}\quad\text{and}\quad B=\begin{bmatrix}5&-1\\-4&0\\2&3\end{bmatrix}$$

**Solution.** (a) As the dimensions of $A$ are $2\times3$ and the dimensions of $B$ are $3\times2$, these matrices can be multiplied together because the number of columns in $A$ matches the number of rows in $B$. The resulting product will be a $2\times2$ matrix, the number of rows in $A$ by the number of columns in $B$.

$$AB=\begin{bmatrix}-1&2&3\\4&0&5\end{bmatrix}\begin{bmatrix}5&-1\\-4&0\\2&3\end{bmatrix}$$

$$AB=\begin{bmatrix}-1(5)+2(-4)+3(2)&-1(-1)+2(0)+3(3)\\4(5)+0(-4)+5(2)&4(-1)+0(0)+5(3)\end{bmatrix}=\begin{bmatrix}-7&10\\30&11\end{bmatrix}$$

(b) The dimensions of $B$ are $3\times2$ and the dimensions of $A$ are $2\times3$. The inner dimensions match so the product is defined and will be a $3\times3$ matrix.

$$BA=\begin{bmatrix}5&-1\\-4&0\\2&3\end{bmatrix}\begin{bmatrix}-1&2&3\\4&0&5\end{bmatrix}$$

$$BA=\begin{bmatrix}5(-1)+(-1)(4)&5(2)+(-1)(0)&5(3)+(-1)(5)\\-4(-1)+0(4)&-4(2)+0(0)&-4(3)+0(5)\\2(-1)+3(4)&2(2)+3(0)&2(3)+3(5)\end{bmatrix}=\begin{bmatrix}-9&10&10\\4&-8&-12\\10&4&21\end{bmatrix}$$

**Analysis.** Notice that the products $AB$ and $BA$ are not equal.

$$AB=\begin{bmatrix}-7&10\\30&11\end{bmatrix}\ne\begin{bmatrix}-9&10&10\\4&-8&-12\\10&4&21\end{bmatrix}=BA$$

This illustrates the fact that matrix multiplication is not commutative.

{{< callout type="info" >}}
  **Q&A.** *Is it possible for $AB$ to be defined but not $BA$?*

  Yes, consider a matrix $A$ with dimension $3\times4$ and matrix $B$ with dimension $4\times2$. For the product $AB$ the inner dimensions are $4$ and the product is defined, but for the product $BA$ the inner dimensions are $2$ and $3$, so the product is undefined.
{{< /callout >}}

**Example.** Let's return to the problem presented at the opening of this section. We have the equipment-needs table above, representing the equipment needs of two soccer teams. We are also given the prices of the equipment, as shown in the table below.

| Item | Price |
| --- | --- |
| **Goal** | \$300 |
| **Ball** | \$10 |
| **Jersey** | \$30 |

We will convert the data to matrices. Thus, the equipment need matrix is written as

$$E=\begin{bmatrix}6&10\\30&24\\14&20\end{bmatrix}$$

The cost matrix is written as

$$C=\begin{bmatrix}300&10&30\end{bmatrix}$$

**Solution.** We perform matrix multiplication to obtain costs for the equipment.

$$CE=\begin{bmatrix}300&10&30\end{bmatrix}\begin{bmatrix}6&10\\30&24\\14&20\end{bmatrix}$$

$$CE=\begin{bmatrix}300(6)+10(30)+30(14)&300(10)+10(24)+30(20)\end{bmatrix}=\begin{bmatrix}2{,}520&3{,}840\end{bmatrix}$$

The total cost for equipment for the Wildcats is \$2,520, and the total cost for equipment for the Mud Cats is \$3,840.

{{< callout type="info" >}}
  **How To:** given a matrix operation, evaluate using a calculator.

  1. Save each matrix as a matrix variable $[A]$, $[B]$, $[C]$, ...
  2. Enter the operation into the calculator, calling up each matrix variable as needed.
  3. If the operation is defined, the calculator will present the solution matrix; if the operation is undefined, it will display an error message.
{{< /callout >}}

**Example.** Find $AB-C$ given

$$A=\begin{bmatrix}-15&25&32\\41&-7&-28\\10&34&-2\end{bmatrix},\ B=\begin{bmatrix}45&21&-37\\-24&52&19\\6&-48&-31\end{bmatrix},\ \text{and}\ C=\begin{bmatrix}-100&-89&-98\\25&-56&74\\-67&42&-75\end{bmatrix}$$

**Solution.** On the matrix page of the calculator, we enter matrix $A$ above as the matrix variable $[A]$, matrix $B$ above as the matrix variable $[B]$, and matrix $C$ above as the matrix variable $[C]$.

On the home screen of the calculator, we type in the problem and call up each matrix variable as needed.

$$[A][B]-[C]$$

The calculator gives us the following matrix.

$$\begin{bmatrix}-983&-462&136\\1{,}820&1{,}897&-856\\-311&2{,}032&413\end{bmatrix}$$

## Key concepts

- A matrix is a rectangular array of numbers. Entries are arranged in rows and columns.
- The dimensions of a matrix refer to the number of rows and the number of columns. A $3\times2$ matrix has three rows and two columns.
- We add and subtract matrices of equal dimensions by adding and subtracting corresponding entries of each matrix.
- Scalar multiplication involves multiplying each entry in a matrix by a constant.
- Scalar multiplication is often required before addition or subtraction can occur.
- Multiplying matrices is possible when inner dimensions are the same — the number of columns in the first matrix must match the number of rows in the second.
- The product of two matrices, $A$ and $B$, is obtained by multiplying each entry in row 1 of $A$ by each entry in column 1 of $B$; then multiply each entry of row 1 of $A$ by each entry in column 2 of $B$, and so on.
- Many real-world problems can often be solved using matrices.
- We can use a calculator to perform matrix operations after saving each matrix as a matrix variable.

## Practice

### Find the sum and difference of two matrices

{{< fillin
  question="Given $C=\begin{bmatrix}1&5\\8&92\\12&6\end{bmatrix}$ and $D=\begin{bmatrix}10&14\\7&2\\5&61\end{bmatrix}$, find $C+D$. Enter the second row of the sum as a comma-separated list of two numbers, left to right."
  answer="15, 94"
  hint="Add the entries in row 2: $8+7$ and $92+2$."
>}}

{{< fillin
  question="Given $B=\begin{bmatrix}2&14\\22&6\end{bmatrix}$ and $E=\begin{bmatrix}6&12\\14&5\end{bmatrix}$, find $B-E$. Enter the first row of the difference as a comma-separated list of two numbers, left to right."
  answer="-4, 2"
  hint="Subtract the entries in row 1: $2-6$ and $14-12$."
>}}

{{< multiplechoice
  question="Given $D=\begin{bmatrix}10&14\\7&2\\5&61\end{bmatrix}$ and $B=\begin{bmatrix}2&14\\22&6\end{bmatrix}$, is $D-B$ defined?"
  answer="No — $D$ is $3\times2$ and $B$ is $2\times2$, so their dimensions do not match."
  hint="Subtraction requires both matrices to have the same number of rows and the same number of columns."
>}}
Yes — every matrix subtraction is defined.
No — $D$ is $3\times2$ and $B$ is $2\times2$, so their dimensions do not match.
Yes — $D-B=\begin{bmatrix}8&0\\-15&-4\\5&61\end{bmatrix}$
No — matrix subtraction is only defined between square matrices.
{{< /multiplechoice >}}

### Find scalar multiples of a matrix

{{< fillin
  question="Given $B=\begin{bmatrix}3&9\\21&12\\0&64\end{bmatrix}$, find $3B$. Enter the third row of $3B$ as a comma-separated list of two numbers, left to right."
  answer="0, 192"
  hint="Multiply every entry of row 3 by $3$: $3(0)$ and $3(64)$."
>}}

{{< fillin
  question="Given $C=\begin{bmatrix}16&3&7&18\\90&5&3&29\end{bmatrix}$, find $-4C$. Enter the first row of $-4C$ as a comma-separated list of four numbers, left to right."
  answer="-64, -12, -28, -72"
  hint="Multiply every entry of row 1 by $-4$."
>}}

{{< fillin
  question="Given $D=\begin{bmatrix}18&12&13\\8&14&6\\7&4&21\end{bmatrix}$, find $100D$. Enter the second row of $100D$ as a comma-separated list of three numbers, left to right."
  answer="800, 1400, 600"
  hint="Multiply every entry of row 2 by $100$."
>}}

### Find the product of two matrices

{{< fillin
  question="Given $B=\begin{bmatrix}3&6&4\\-8&0&12\end{bmatrix}$ and $C=\begin{bmatrix}4&10\\-2&6\\5&9\end{bmatrix}$, find $BC$. Enter the first row of the product as a comma-separated list of two numbers, left to right."
  answer="20, 102"
  hint="Multiply row 1 of $B$ by each column of $C$: $3(4)+6(-2)+4(5)$ and $3(10)+6(6)+4(9)$."
>}}

{{< fillin
  question="Given $B=\begin{bmatrix}3&6&4\\-8&0&12\end{bmatrix}$ and $D=\begin{bmatrix}2&-3&12\\9&3&1\\0&8&-10\end{bmatrix}$, find $BD$. Enter the second row of the product as a comma-separated list of three numbers, left to right."
  answer="-16, 120, -216"
  hint="Multiply row 2 of $B$ by each column of $D$: $-8(2)+0(9)+12(0)$, $-8(-3)+0(3)+12(8)$, and $-8(12)+0(1)+12(-10)$."
>}}

{{< multiplechoice
  question="Given $C=\begin{bmatrix}4&10\\-2&6\\5&9\end{bmatrix}$ and $B=\begin{bmatrix}3&6&4\\-8&0&12\end{bmatrix}$, which matrix is the product $CB$?"
  answer="$\begin{bmatrix}-68&24&136\\-54&-12&64\\-57&30&128\end{bmatrix}$"
  hint="Multiply each row of $C$ by each column of $B$ and add all three products in each entry — a common slip is stopping after the first product."
>}}
$\begin{bmatrix}-68&-54&-57\\24&-12&30\\136&64&128\end{bmatrix}$
$\begin{bmatrix}12&24&16\\-6&-12&-8\\15&30&20\end{bmatrix}$
$\begin{bmatrix}-68&24&136\\-54&-12&64\\-57&30&128\end{bmatrix}$
$\begin{bmatrix}-68&24&136\\54&12&-64\\-57&30&128\end{bmatrix}$
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 9.5: Matrices and Matrix Operations](https://openstax.org/books/precalculus-2e/pages/9-5-matrices-and-matrix-operations) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own "Objective 1"/"Objective 2" review of writing an augmented matrix and adding/subtracting/scalar-multiplying matrices, keyed to Intermediate Algebra 4.5) — confirmed against the printed PDF, page 947 runs straight from the previous section's exercises into "Two club soccer teams..."; the same prepended-block pattern is already logged in this book's errata for §§4.3–4.8, and this section joins that list. Omitted the decorative soccer-action photograph (Figure 1, a stock action shot credited "SD Dirk," Flickr) and the "Access these online resources" media links. The equipment-needs table is printed twice in the source (once at the section opener, once again as "Table 3" inside the real-world Example) with identical data; this page shows it once and Example 10 refers back to "the table above." Recreated the inner-dimensions schematic ("$A\cdot B$", labeled $2\times3$ and $3\times3$ with a brace reading "same") as an accessible spec-first figure instead of the source's raster image. **The grader cannot take a matrix-shaped answer** (the MathLive matrix-entry path is menu-only and untested for learners), so — following house precedent from Intermediate Algebra 4.5 — every retained Try It and every Practice item whose source answer is a full matrix is either re-posed as a row-entry fill-in ("enter the second row… as a comma-separated list") or, where recognizing a whole computed matrix is itself the point, a multiple choice among full matrices (KaTeX renders `bmatrix` fine in option bodies; only submitted answers are restricted). The "is $D-B$ defined?" item is likewise multiple choice, since a dimension-mismatch verdict is categorical, not a number. Nine selected end-of-section exercises were adapted into interactive Practice components, three per objective, every one independently re-derived (including by running the arithmetic in Node) rather than read off the source key.</small>
