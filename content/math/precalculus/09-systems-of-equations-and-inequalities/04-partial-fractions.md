---
title: Partial Fractions
description: >-
  Decomposing a rational expression into a sum of simpler partial fractions
  over nonrepeated linear, repeated linear, nonrepeated irreducible quadratic,
  and repeated irreducible quadratic factors of the denominator — adapted
  from OpenStax Precalculus 2e, Section 9.4.
source_section: "9.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Decompose $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has only nonrepeated linear factors.
- Decompose $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has repeated linear factors.
- Decompose $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has a nonrepeated irreducible quadratic factor.
- Decompose $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has a repeated irreducible quadratic factor.
{{< /callout >}}

Earlier in this chapter, we studied systems of two equations in two variables, systems of three equations in three variables, and nonlinear systems. Here we introduce another way that systems of equations can be utilized—the decomposition of rational expressions.

Fractions can be complicated; adding a variable in the denominator makes them even more so. The methods studied in this section will help simplify the concept of a rational expression.

### Decomposing $\tfrac{P(x)}{Q(x)}$ Where $Q(x)$ Has Only Nonrepeated Linear Factors

Recall the algebra regarding adding and subtracting rational expressions. These operations depend on finding a common denominator so that we can write the sum or difference as a single, simplified rational expression. In this section, we will look at partial fraction decomposition, which is the undoing of the procedure to add or subtract rational expressions. In other words, it is a return from the single simplified rational expression to the original expressions, called the **partial fraction**.

For example, suppose we add the following fractions:

$$\tfrac{2}{x-3}+\tfrac{-1}{x+2}$$

We would first need to find a common denominator, $(x+2)(x-3)$.

Next, we would write each expression with this common denominator and find the sum of the terms.

$$
\begin{array}{lrcl}
& \tfrac{2}{x-3}\left(\tfrac{x+2}{x+2}\right)+\tfrac{-1}{x+2}\left(\tfrac{x-3}{x-3}\right) &=& \tfrac{2x+4-x+3}{(x+2)(x-3)} \\[4pt]
& &=& \tfrac{x+7}{x^2-x-6}
\end{array}
$$

Partial fraction decomposition is the reverse of this procedure. We would start with the solution and rewrite (decompose) it as the sum of two fractions:

$$\tfrac{x+7}{x^2-x-6}=\tfrac{2}{x-3}+\tfrac{-1}{x+2}$$

The left side is the simplified sum; the right side is its partial fraction decomposition.

We will investigate rational expressions with linear factors and quadratic factors in the denominator where the degree of the numerator is less than the degree of the denominator. Regardless of the type of expression we are decomposing, the first and most important thing to do is factor the denominator.

When the denominator of the simplified expression contains distinct linear factors, it is likely that each of the original rational expressions, which were added or subtracted, had one of the linear factors as the denominator. In other words, using the example above, the factors of $x^2-x-6$ are $(x-3)(x+2)$, the denominators of the decomposed rational expression. So we will rewrite the simplified form as the sum of individual fractions and use a variable for each numerator. Then, we will solve for each numerator using one of several methods available for partial fraction decomposition.

{{< callout type="info" >}}
  **Partial fraction decomposition with nonrepeated linear factors.** The partial fraction decomposition of $\tfrac{P(x)}{Q(x)}$ when $Q(x)$ has nonrepeated linear factors and the degree of $P(x)$ is less than the degree of $Q(x)$ is

  $$\tfrac{P(x)}{Q(x)}=\tfrac{A_1}{a_1x+b_1}+\tfrac{A_2}{a_2x+b_2}+\tfrac{A_3}{a_3x+b_3}+\cdots+\tfrac{A_n}{a_nx+b_n}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a rational expression with distinct linear factors in the denominator, decompose it.

  1. Use a variable for the original numerators, usually $A$, $B$, or $C$, depending on the number of factors, placing each variable over a single factor. For the purpose of this definition, use $A_n$ for each numerator: $\tfrac{P(x)}{Q(x)}=\tfrac{A_1}{a_1x+b_1}+\tfrac{A_2}{a_2x+b_2}+\cdots+\tfrac{A_n}{a_nx+b_n}$.
  2. Multiply both sides of the equation by the common denominator to eliminate fractions.
  3. Expand the right side of the equation and collect like terms.
  4. Set coefficients of like terms from the left side of the equation equal to those on the right side to create a system of equations to solve for the numerators.
{{< /callout >}}

**Example.** Decompose the given rational expression with distinct linear factors: $\tfrac{3x}{(x+2)(x-1)}$.

**Solution.** We will separate the denominator factors and give each numerator a symbolic label, like $A$, $B$, or $C$.

$$\tfrac{3x}{(x+2)(x-1)}=\tfrac{A}{x+2}+\tfrac{B}{x-1}$$

Multiply both sides of the equation by the common denominator to eliminate the fractions:

$$(x+2)(x-1)\left[\tfrac{3x}{(x+2)(x-1)}\right]=(x+2)(x-1)\left[\tfrac{A}{x+2}\right]+(x+2)(x-1)\left[\tfrac{B}{x-1}\right]$$

The resulting equation is

$$3x=A(x-1)+B(x+2)$$

Expand the right side of the equation and collect like terms.

$$
\begin{array}{lrcl}
& 3x &=& Ax-A+Bx+2B \\[4pt]
& 3x &=& (A+B)x-A+2B
\end{array}
$$

Set up a system of equations associating corresponding coefficients.

$$
\begin{array}{lrcl}
& 3 &=& A+B \\[4pt]
& 0 &=& -A+2B
\end{array}
$$

Add the two equations and solve for $B$.

$$
\begin{array}{lrcl}
& 3 &=& 3B \\[4pt]
& 1 &=& B
\end{array}
$$

Substitute $B=1$ into one of the original equations in the system.

$$
\begin{array}{lrcl}
& 3 &=& A+1 \\[4pt]
& 2 &=& A
\end{array}
$$

Thus, the partial fraction decomposition is

$$\tfrac{3x}{(x+2)(x-1)}=\tfrac{2}{x+2}+\tfrac{1}{x-1}$$

Another method to use to solve for $A$ or $B$ is by considering the equation that resulted from eliminating the fractions and substituting a value for $x$ that will make either the $A$- or $B$-term equal $0$. If we let $x=1$, the $A$-term becomes $0$ and we can simply solve for $B$.

$$
\begin{array}{lrcl}
& 3x &=& A(x-1)+B(x+2) \\[4pt]
& 3(1) &=& A[(1)-1]+B[(1)+2] \\[4pt]
& 3 &=& 0+3B \\[4pt]
& 1 &=& B
\end{array}
$$

Next, either substitute $B=1$ into the equation and solve for $A$, or make the $B$-term $0$ by substituting $x=-2$ into the equation.

$$
\begin{array}{lrcl}
& 3x &=& A(x-1)+B(x+2) \\[4pt]
& 3(-2) &=& A[(-2)-1]+B[(-2)+2] \\[4pt]
& -6 &=& -3A+0 \\[4pt]
& 2 &=& A
\end{array}
$$

We obtain the same values for $A$ and $B$ using either method, so the decompositions are the same using either method.

$$\tfrac{3x}{(x+2)(x-1)}=\tfrac{2}{x+2}+\tfrac{1}{x-1}$$

Although this method is not seen very often in textbooks, we present it here as an alternative that may make some partial fraction decompositions easier. It is known as the **Heaviside method**, named after Charles Heaviside, a pioneer in the study of electronics.

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{x}{(x-3)(x-2)}$."
  answer="\frac{3}{x-3}-\frac{2}{x-2}"
  answerForm="expanded"
  answerDisplay="$\tfrac{3}{x-3}-\tfrac{2}{x-2}$"
  hint="Write $\tfrac{A}{x-3}+\tfrac{B}{x-2}$, clear denominators to get $x=A(x-2)+B(x-3)$, then substitute $x=3$ and $x=2$ to solve for $A$ and $B$ directly."
>}}

### Decomposing $\tfrac{P(x)}{Q(x)}$ Where $Q(x)$ Has Repeated Linear Factors

Some fractions we may come across are special cases that we can decompose into partial fractions with repeated linear factors. We must remember that we account for repeated factors by writing each factor in increasing powers.

{{< callout type="info" >}}
  **Partial fraction decomposition with repeated linear factors.** The partial fraction decomposition of $\tfrac{P(x)}{Q(x)}$, when $Q(x)$ has a repeated linear factor occurring $n$ times and the degree of $P(x)$ is less than the degree of $Q(x)$, is

  $$\tfrac{P(x)}{Q(x)}=\tfrac{A_1}{ax+b}+\tfrac{A_2}{(ax+b)^2}+\tfrac{A_3}{(ax+b)^3}+\cdots+\tfrac{A_n}{(ax+b)^n}$$

  Write the denominator powers in increasing order.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a rational expression with repeated linear factors, decompose it.

  1. Use a variable like $A$, $B$, or $C$ for the numerators and account for increasing powers of the denominators: $\tfrac{P(x)}{Q(x)}=\tfrac{A_1}{ax+b}+\tfrac{A_2}{(ax+b)^2}+\cdots+\tfrac{A_n}{(ax+b)^n}$.
  2. Multiply both sides of the equation by the common denominator to eliminate fractions.
  3. Expand the right side of the equation and collect like terms.
  4. Set coefficients of like terms from the left side of the equation equal to those on the right side to create a system of equations to solve for the numerators.
{{< /callout >}}

**Example.** Decompose the given rational expression with repeated linear factors: $\tfrac{-x^2+2x+4}{x^3-4x^2+4x}$.

**Solution.** The denominator factors are $x(x-2)^2$. To allow for the repeated factor of $(x-2)$, the decomposition will include three denominators: $x$, $(x-2)$, and $(x-2)^2$. Thus,

$$\tfrac{-x^2+2x+4}{x^3-4x^2+4x}=\tfrac{A}{x}+\tfrac{B}{x-2}+\tfrac{C}{(x-2)^2}$$

Next, we multiply both sides by the common denominator.

$$
\begin{array}{lrcl}
& x(x-2)^2\left[\tfrac{-x^2+2x+4}{x(x-2)^2}\right] &=& \left[\tfrac{A}{x}+\tfrac{B}{x-2}+\tfrac{C}{(x-2)^2}\right]x(x-2)^2 \\[4pt]
& -x^2+2x+4 &=& A(x-2)^2+Bx(x-2)+Cx
\end{array}
$$

On the right side of the equation, we expand and collect like terms.

$$
\begin{array}{lrcl}
& -x^2+2x+4 &=& A(x^2-4x+4)+B(x^2-2x)+Cx \\[4pt]
& &=& Ax^2-4Ax+4A+Bx^2-2Bx+Cx \\[4pt]
& &=& (A+B)x^2+(-4A-2B+C)x+4A
\end{array}
$$

Next, we compare the coefficients of both sides. This gives the system of equations in three variables:

$$
\begin{array}{lrcl}
& A+B &=& -1 \\[4pt]
& -4A-2B+C &=& 2 \\[4pt]
& 4A &=& 4
\end{array}
$$

Solving for $A$, we have $A=1$. Substitute $A=1$ into the first equation.

$$
\begin{array}{lrcl}
& 1+B &=& -1 \\[4pt]
& B &=& -2
\end{array}
$$

Then, to solve for $C$, substitute the values for $A$ and $B$ into the second equation.

$$
\begin{array}{lrcl}
& -4(1)-2(-2)+C &=& 2 \\[4pt]
& -4+4+C &=& 2 \\[4pt]
& C &=& 2
\end{array}
$$

Thus,

$$\tfrac{-x^2+2x+4}{x^3-4x^2+4x}=\tfrac{1}{x}-\tfrac{2}{x-2}+\tfrac{2}{(x-2)^2}$$

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{6x-11}{(x-1)^2}$."
  answer="\frac{6}{x-1}-\frac{5}{(x-1)^2}"
  answerForm="expanded"
  answerDisplay="$\tfrac{6}{x-1}-\tfrac{5}{(x-1)^2}$"
  hint="Write $\tfrac{A}{x-1}+\tfrac{B}{(x-1)^2}$, clear denominators to get $6x-11=A(x-1)+B$, then substitute $x=1$ to find $B$ and compare coefficients of $x$ to find $A$."
>}}

### Decomposing $\tfrac{P(x)}{Q(x)}$, Where $Q(x)$ Has a Nonrepeated Irreducible Quadratic Factor

So far, we have performed partial fraction decomposition with expressions that have had linear factors in the denominator, and we applied numerators $A$, $B$, or $C$ representing constants. Now we will look at an example where one of the factors in the denominator is a quadratic expression that does not factor. This is referred to as an irreducible quadratic factor. In cases like this, we use a linear numerator such as $Ax+B$, $Bx+C$, etc.

{{< callout type="info" >}}
  **Partial fraction decomposition with a nonrepeated irreducible quadratic factor.** The partial fraction decomposition of $\tfrac{P(x)}{Q(x)}$ such that $Q(x)$ has a nonrepeated irreducible quadratic factor and the degree of $P(x)$ is less than the degree of $Q(x)$ is written as

  $$\tfrac{P(x)}{Q(x)}=\tfrac{A_1x+B_1}{a_1x^2+b_1x+c_1}+\tfrac{A_2x+B_2}{a_2x^2+b_2x+c_2}+\cdots+\tfrac{A_nx+B_n}{a_nx^2+b_nx+c_n}$$

  The decomposition may contain more rational expressions if there are linear factors. Each linear factor will have a different constant numerator: $A$, $B$, $C$, and so on.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a rational expression where the factors of the denominator are distinct, irreducible quadratic factors, decompose it.

  1. Use variables such as $A$, $B$, or $C$ for the constant numerators over linear factors, and linear expressions such as $A_1x+B_1$, $A_2x+B_2$, etc., for the numerators of each quadratic factor in the denominator.
  2. Multiply both sides of the equation by the common denominator to eliminate fractions.
  3. Expand the right side of the equation and collect like terms.
  4. Set coefficients of like terms from the left side of the equation equal to those on the right side to create a system of equations to solve for the numerators.
{{< /callout >}}

**Example.** Find a partial fraction decomposition of $\tfrac{8x^2+12x-20}{(x+3)(x^2+x+2)}$.

**Solution.** We have one linear factor and one irreducible quadratic factor in the denominator, so one numerator will be a constant and the other numerator will be a linear expression. Thus,

$$\tfrac{8x^2+12x-20}{(x+3)(x^2+x+2)}=\tfrac{A}{x+3}+\tfrac{Bx+C}{x^2+x+2}$$

We follow the same steps as in previous problems. First, clear the fractions by multiplying both sides of the equation by the common denominator.

$$8x^2+12x-20=A(x^2+x+2)+(Bx+C)(x+3)$$

Notice we could easily solve for $A$ by choosing a value for $x$ that will make the $Bx+C$ term equal $0$. Let $x=-3$ and substitute it into the equation.

$$
\begin{array}{lrcl}
& 8(-3)^2+12(-3)-20 &=& A((-3)^2+(-3)+2)+(B(-3)+C)((-3)+3) \\[4pt]
& 16 &=& 8A \\[4pt]
& A &=& 2
\end{array}
$$

Now that we know the value of $A$, substitute it back into the equation. Then expand the right side and collect like terms.

$$
\begin{array}{lrcl}
& 8x^2+12x-20 &=& 2(x^2+x+2)+(Bx+C)(x+3) \\[4pt]
& 8x^2+12x-20 &=& 2x^2+2x+4+Bx^2+3Bx+Cx+3C \\[4pt]
& 8x^2+12x-20 &=& (2+B)x^2+(2+3B+C)x+(4+3C)
\end{array}
$$

Setting the coefficients of terms on the right side equal to the coefficients of terms on the left side gives the system of equations.

$$
\begin{array}{lrcl}
& 2+B &=& 8 \\[4pt]
& 2+3B+C &=& 12 \\[4pt]
& 4+3C &=& -20
\end{array}
$$

Solve for $B$ using the first equation and solve for $C$ using the third equation.

$$
\begin{array}{lrcl}
& B &=& 6 \\[4pt]
& 3C &=& -24 \\[4pt]
& C &=& -8
\end{array}
$$

Thus, the partial fraction decomposition of the expression is

$$\tfrac{8x^2+12x-20}{(x+3)(x^2+x+2)}=\tfrac{2}{x+3}+\tfrac{6x-8}{x^2+x+2}$$

{{< callout type="info" >}}
  **Q&A.** *Could we have just set up a system of equations to solve the previous example?*

  Yes, we could have solved it by setting up a system of equations without solving for $A$ first. The expansion on the right would be:

  $$8x^2+12x-20=(A+B)x^2+(A+3B+C)x+(2A+3C)$$

  So the system of equations would be:

  $$
  \begin{array}{lrcl}
  & A+B &=& 8 \\[4pt]
  & A+3B+C &=& 12 \\[4pt]
  & 2A+3C &=& -20
  \end{array}
  $$
{{< /callout >}}

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{5x^2-6x+7}{(x-1)(x^2+1)}$."
  answer="\frac{3}{x-1}+\frac{2x-4}{x^2+1}"
  answerForm="expanded"
  answerDisplay="$\tfrac{3}{x-1}+\tfrac{2x-4}{x^2+1}$"
  hint="Write $\tfrac{A}{x-1}+\tfrac{Bx+C}{x^2+1}$, substitute $x=1$ into the cleared equation to find $A$ directly, then expand and compare coefficients for $B$ and $C$."
>}}

### Decomposing $\tfrac{P(x)}{Q(x)}$ When $Q(x)$ Has a Repeated Irreducible Quadratic Factor

Now that we can decompose a simplified rational expression with an irreducible quadratic factor, we will learn how to do partial fraction decomposition when the simplified rational expression has repeated irreducible quadratic factors. The decomposition will consist of partial fractions with linear numerators over each irreducible quadratic factor represented in increasing powers.

{{< callout type="info" >}}
  **Partial fraction decomposition with a repeated irreducible quadratic factor.** The partial fraction decomposition of $\tfrac{P(x)}{Q(x)}$, when $Q(x)$ has a repeated irreducible quadratic factor and the degree of $P(x)$ is less than the degree of $Q(x)$, is

  $$\tfrac{P(x)}{(ax^2+bx+c)^n}=\tfrac{A_1x+B_1}{ax^2+bx+c}+\tfrac{A_2x+B_2}{(ax^2+bx+c)^2}+\tfrac{A_3x+B_3}{(ax^2+bx+c)^3}+\cdots+\tfrac{A_nx+B_n}{(ax^2+bx+c)^n}$$

  Write the denominators in increasing powers.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a rational expression that has a repeated irreducible quadratic factor, decompose it.

  1. Use variables like $A$, $B$, or $C$ for the constant numerators over linear factors, and linear expressions such as $A_1x+B_1$, $A_2x+B_2$, etc., for the numerators of each quadratic factor in the denominator, written in increasing powers.
  2. Multiply both sides of the equation by the common denominator to eliminate fractions.
  3. Expand the right side of the equation and collect like terms.
  4. Set coefficients of like terms from the left side of the equation equal to those on the right side to create a system of equations to solve for the numerators.
{{< /callout >}}

**Example.** Decompose the given expression that has a repeated irreducible factor in the denominator: $\tfrac{x^4+x^3+x^2-x+1}{x(x^2+1)^2}$.

**Solution.** The factors of the denominator are $x$, $(x^2+1)$, and $(x^2+1)^2$. Recall that, when a factor in the denominator is a quadratic that includes at least two terms, the numerator must be of the linear form $Ax+B$. So, we begin the decomposition.

$$\tfrac{x^4+x^3+x^2-x+1}{x(x^2+1)^2}=\tfrac{A}{x}+\tfrac{Bx+C}{x^2+1}+\tfrac{Dx+E}{(x^2+1)^2}$$

We eliminate the denominators by multiplying each term by $x(x^2+1)^2$. Thus,

$$x^4+x^3+x^2-x+1=A(x^2+1)^2+(Bx+C)(x)(x^2+1)+(Dx+E)(x)$$

Expand the right side.

$$
\begin{array}{lrcl}
& x^4+x^3+x^2-x+1 &=& A(x^4+2x^2+1)+Bx^4+Bx^2+Cx^3+Cx+Dx^2+Ex \\[4pt]
& &=& Ax^4+2Ax^2+A+Bx^4+Bx^2+Cx^3+Cx+Dx^2+Ex
\end{array}
$$

Now we collect like terms.

$$x^4+x^3+x^2-x+1=(A+B)x^4+(C)x^3+(2A+B+D)x^2+(C+E)x+A$$

Set up the system of equations matching corresponding coefficients on each side of the equal sign.

$$
\begin{array}{lrcl}
& A+B &=& 1 \\[4pt]
& C &=& 1 \\[4pt]
& 2A+B+D &=& 1 \\[4pt]
& C+E &=& -1 \\[4pt]
& A &=& 1
\end{array}
$$

We can use substitution from this point. Substitute $A=1$ into the first equation.

$$
\begin{array}{lrcl}
& 1+B &=& 1 \\[4pt]
& B &=& 0
\end{array}
$$

Substitute $A=1$ and $B=0$ into the third equation.

$$
\begin{array}{lrcl}
& 2(1)+0+D &=& 1 \\[4pt]
& D &=& -1
\end{array}
$$

Substitute $C=1$ into the fourth equation.

$$
\begin{array}{lrcl}
& 1+E &=& -1 \\[4pt]
& E &=& -2
\end{array}
$$

Now we have solved for all of the unknowns on the right side of the equal sign: $A=1$, $B=0$, $C=1$, $D=-1$, and $E=-2$. We can write the decomposition as follows:

$$\tfrac{x^4+x^3+x^2-x+1}{x(x^2+1)^2}=\tfrac{1}{x}+\tfrac{1}{x^2+1}-\tfrac{x+2}{(x^2+1)^2}$$

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{x^3-4x^2+9x-5}{(x^2-2x+3)^2}$."
  answer="\frac{x-2}{x^2-2x+3}+\frac{2x+1}{(x^2-2x+3)^2}"
  answerForm="expanded"
  answerDisplay="$\tfrac{x-2}{x^2-2x+3}+\tfrac{2x+1}{(x^2-2x+3)^2}$"
  hint="Write $\tfrac{Ax+B}{x^2-2x+3}+\tfrac{Cx+D}{(x^2-2x+3)^2}$, clear denominators, expand, and compare coefficients of like powers of $x$."
>}}

## Key equations

| the partial fraction decomposition, nonrepeated linear factors | $\tfrac{P(x)}{Q(x)}=\tfrac{A_1}{a_1x+b_1}+\tfrac{A_2}{a_2x+b_2}+\tfrac{A_3}{a_3x+b_3}+\cdots+\tfrac{A_n}{a_nx+b_n}$ |
| :--- | :--- |
| the partial fraction decomposition, repeated linear factors | $\tfrac{P(x)}{Q(x)}=\tfrac{A_1}{ax+b}+\tfrac{A_2}{(ax+b)^2}+\tfrac{A_3}{(ax+b)^3}+\cdots+\tfrac{A_n}{(ax+b)^n}$ |
| the partial fraction decomposition, nonrepeated irreducible quadratic factors | $\tfrac{P(x)}{Q(x)}=\tfrac{A_1x+B_1}{a_1x^2+b_1x+c_1}+\tfrac{A_2x+B_2}{a_2x^2+b_2x+c_2}+\cdots+\tfrac{A_nx+B_n}{a_nx^2+b_nx+c_n}$ |
| the partial fraction decomposition, repeated irreducible quadratic factors | $\tfrac{P(x)}{(ax^2+bx+c)^n}=\tfrac{A_1x+B_1}{ax^2+bx+c}+\tfrac{A_2x+B_2}{(ax^2+bx+c)^2}+\cdots+\tfrac{A_nx+B_n}{(ax^2+bx+c)^n}$ |

## Key concepts

- Decompose $\tfrac{P(x)}{Q(x)}$ by writing the partial fractions as $\tfrac{A}{a_1x+b_1}+\tfrac{B}{a_2x+b_2}$. Solve by clearing the fractions, expanding the right side, collecting like terms, and setting corresponding coefficients equal to each other, then setting up and solving a system of equations.
- The decomposition of $\tfrac{P(x)}{Q(x)}$ with repeated linear factors must account for the factors of the denominator in increasing powers.
- The decomposition of $\tfrac{P(x)}{Q(x)}$ with a nonrepeated irreducible quadratic factor needs a linear numerator over the quadratic factor, as in $\tfrac{A}{x}+\tfrac{Bx+C}{ax^2+bx+c}$.
- In the decomposition of $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has a repeated irreducible quadratic factor, powers of the denominator factors must be represented in increasing powers, as in $\tfrac{Ax+B}{ax^2+bx+c}+\tfrac{A_2x+B_2}{(ax^2+bx+c)^2}+\cdots+\tfrac{A_nx+B_n}{(ax^2+bx+c)^n}$.

## Practice

### Decompose $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has only nonrepeated linear factors

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{3x-79}{x^2-5x-24}$."
  answer="\frac{8}{x+3}-\frac{5}{x-8}"
  answerForm="expanded"
  answerDisplay="$\tfrac{8}{x+3}-\tfrac{5}{x-8}$"
  hint="Factor the denominator as $(x+3)(x-8)$, write $\tfrac{A}{x+3}+\tfrac{B}{x-8}$, then substitute $x=-3$ and $x=8$ into the cleared equation to solve for $A$ and $B$."
>}}

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{5x}{x^2-9}$."
  answer="\frac{5}{2(x+3)}+\frac{5}{2(x-3)}"
  answerForm="expanded"
  answerDisplay="$\tfrac{5}{2(x+3)}+\tfrac{5}{2(x-3)}$"
  hint="Factor the denominator as $(x+3)(x-3)$, write $\tfrac{A}{x+3}+\tfrac{B}{x-3}$, then substitute $x=-3$ and $x=3$ into the cleared equation to solve for $A$ and $B$."
>}}

### Decompose $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has repeated linear factors

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{x}{(x-2)^2}$."
  answer="\frac{1}{x-2}+\frac{2}{(x-2)^2}"
  answerForm="expanded"
  answerDisplay="$\tfrac{1}{x-2}+\tfrac{2}{(x-2)^2}$"
  hint="Write $\tfrac{A}{x-2}+\tfrac{B}{(x-2)^2}$, clear denominators to get $x=A(x-2)+B$, then substitute $x=2$ to find $B$ and compare coefficients of $x$ to find $A$."
>}}

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{-24x-27}{(4x+5)^2}$."
  answer="-\frac{6}{4x+5}+\frac{3}{(4x+5)^2}"
  answerForm="expanded"
  answerDisplay="$-\tfrac{6}{4x+5}+\tfrac{3}{(4x+5)^2}$"
  hint="Write $\tfrac{A}{4x+5}+\tfrac{B}{(4x+5)^2}$, clear denominators to get $-24x-27=A(4x+5)+B$, then substitute $x=-\tfrac{5}{4}$ to find $B$ and compare coefficients of $x$ to find $A$."
>}}

### Decompose $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has a nonrepeated irreducible quadratic factor

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{4x^2+6x+11}{(x+2)(x^2+x+3)}$."
  answer="\frac{x+1}{x^2+x+3}+\frac{3}{x+2}"
  answerForm="expanded"
  answerDisplay="$\tfrac{x+1}{x^2+x+3}+\tfrac{3}{x+2}$"
  hint="Write $\tfrac{A}{x+2}+\tfrac{Bx+C}{x^2+x+3}$, substitute $x=-2$ into the cleared equation to find $A$ directly, then expand and compare coefficients for $B$ and $C$."
>}}

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{4x^2+5x+3}{x^3-1}$."
  answer="\frac{1}{x^2+x+1}+\frac{4}{x-1}"
  answerForm="expanded"
  answerDisplay="$\tfrac{1}{x^2+x+1}+\tfrac{4}{x-1}$"
  hint="Factor $x^3-1$ as $(x-1)(x^2+x+1)$, write $\tfrac{A}{x-1}+\tfrac{Bx+C}{x^2+x+1}$, substitute $x=1$ to find $A$ directly, then compare coefficients for $B$ and $C$."
>}}

### Decompose $\tfrac{P(x)}{Q(x)}$, where $Q(x)$ has a repeated irreducible quadratic factor

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{x^3+6x^2+5x+9}{(x^2+1)^2}$."
  answer="\frac{x+6}{x^2+1}+\frac{4x+3}{(x^2+1)^2}"
  answerForm="expanded"
  answerDisplay="$\tfrac{x+6}{x^2+1}+\tfrac{4x+3}{(x^2+1)^2}$"
  hint="Write $\tfrac{Ax+B}{x^2+1}+\tfrac{Cx+D}{(x^2+1)^2}$, clear denominators, expand, and compare coefficients of like powers of $x$."
>}}

{{< fillin
  question="Find the partial fraction decomposition of $\tfrac{x^2+25}{(x^2+3x+25)^2}$."
  answer="\frac{1}{x^2+3x+25}-\frac{3x}{(x^2+3x+25)^2}"
  answerForm="expanded"
  answerDisplay="$\tfrac{1}{x^2+3x+25}-\tfrac{3x}{(x^2+3x+25)^2}$"
  hint="Write $\tfrac{Ax+B}{x^2+3x+25}+\tfrac{Cx+D}{(x^2+3x+25)^2}$, clear denominators, expand, and compare coefficients of like powers of $x$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 9.4: Partial Fractions](https://openstax.org/books/precalculus-2e/pages/9-4-partial-fractions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: the pinned CNXML module (m49432) opens with a nested "coreq-skills" section — a least-common-denominator refresher (IA 7.2.3) and a solving-by-elimination refresher (IA 4.1.4), each with its own worked example and fill-in-the-blank practice table, plus an LCD-addition walkthrough and an unworked A/(x+4)+B/(x+6) teaser table — that is absent from the printed Precalculus 2e book entirely (page 937/PDF index 947 goes directly from the section's Learning Objectives to "Earlier in this chapter, we studied systems…"); that whole block belongs to a different collection sharing this module (compare the chapter's Review Exercises/Practice Test convention) and is omitted here as out of scope for this section, the same way section 9.8's appended chapter-level material is. Omitted the section's three Media links to external partial-fraction tutorials, which carry no transcribable mathematics. Every source "Try It" became a real graded fillin. **The grader proves a partial-fraction decomposition equal to the single rational expression it decomposes** — retyping the printed $\tfrac{3x}{(x+2)(x-1)}$ grades `correct` against a keyed $\tfrac{2}{x+2}+\tfrac{1}{x-1}$ with no restriction declared — so every decomposition fillin here (all four Try Its and all eight Practice items) declares `answerForm="expanded"`; this was confirmed directly against the real grader for every item shipped, both the key self-grading `correct` under the declared form and a retype of the item's own printed rational expression grading `form` rather than `correct`. Eight end-of-section exercises were adapted into interactive Practice components, two per objective, one group per objective in objectives order; every decomposition was independently re-derived (verified by clearing denominators and comparing coefficients by hand, then cross-checked by evaluating both sides as exact rational-number identities at more than a dozen sample points in Node, run rather than estimated) rather than read off the source Answer Key. Two candidate exercises from the "repeated irreducible quadratic factor" exercise group were passed over for a different item from the same group instead: the printed denominators $(x+2)^2$ and $(x^2-x)^2$ factor into **repeated linear**, not irreducible-quadratic, factors, so despite each carrying a correct printed Answer Key solution they do not illustrate the objective their exercise group is filed under; the two Practice items drawn from that group instead have genuinely irreducible quadratic denominators.</small>
