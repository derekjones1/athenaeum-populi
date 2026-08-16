---
title: Dividing Polynomials
description: >-
  Dividing polynomials with long division and with synthetic division, the
  Division Algorithm, and using polynomial division to solve area and volume
  problems — adapted from OpenStax Precalculus 2e, Section 3.5.
source_section: "3.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use long division to divide polynomials
- Use synthetic division to divide polynomials
{{< /callout >}}

The exterior of the Lincoln Memorial in Washington, D.C., is a large
rectangular solid with length 61.5 meters (m), width 40 m, and height 30 m.
We can easily find the volume using elementary geometry.

$$
\begin{array}{lrcl}
& V &=& l\cdot w\cdot h \\[4pt]
& &=& 61.5\cdot40\cdot30 \\[4pt]
& &=& 73{,}800
\end{array}
$$

So the volume is 73,800 cubic meters ($\text{m}^3$). Suppose we knew the
volume, length, and width. We could divide to find the height.

$$
\begin{array}{lrcl}
& h &=& \tfrac{V}{l\cdot w} \\[4pt]
& &=& \tfrac{73{,}800}{61.5\cdot40} \\[4pt]
& &=& 30
\end{array}
$$

As we can confirm from the dimensions above, the height is 30 m. We can use
similar methods to find any of the missing dimensions, and we can use the
same method if any or all of the measurements contain variable expressions.
For example, suppose the volume of a rectangular solid is given by the
polynomial $3x^4-3x^3-33x^2+54x$. The length of the solid is given by $3x$;
the width is given by $x-2$. To find the height of the solid, we can use
polynomial division, which is the focus of this section.

## Using long division to divide polynomials

We are familiar with the long division algorithm for ordinary arithmetic. We
begin by dividing into the digits of the dividend that have the greatest
place value. We divide, multiply, subtract, include the digit in the next
place-value position, and repeat. For example, let's divide $178$ by $3$
using long division.

$$
\begin{array}{r}
\phantom{3\,\overline{\smash{)}\,}}\phantom{1}59 \\[-1pt]
3\,\overline{\smash{)}\,178} \\[-1pt]
\phantom{3\,\overline{\smash{)}\,}}\underline{-15}\phantom{8} \\[-1pt]
\phantom{3\,\overline{\smash{)}\,}}\phantom{-}28 \\[-1pt]
\phantom{3\,\overline{\smash{)}\,}}\underline{-27} \\[-1pt]
\phantom{3\,\overline{\smash{)}\,}}\phantom{-2}1
\end{array}
$$

Another way to look at the solution is as a sum of parts. This should look
familiar, since it is the same method used to check division in elementary
arithmetic.

$$
\begin{array}{lrcl}
& \text{dividend} &=& (\text{divisor}\cdot\text{quotient})+\text{remainder} \\[4pt]
& 178 &=& (3\cdot59)+1 \\[4pt]
& &=& 177+1 \\[4pt]
& &=& 178
\end{array}
$$

We call this the Division Algorithm, and we will discuss it more formally
after looking at an example.

Division of polynomials that contain more than one term has similarities to
long division of whole numbers. We can write a polynomial dividend as the
product of the divisor and the quotient added to the remainder. The terms of
the polynomial division correspond to the digits (and place values) of the
whole-number division. This method allows us to divide two polynomials. For
example, if we were to divide $2x^3-3x^2+4x+5$ by $x+2$ using the long
division algorithm, it would look like this:

$$
\begin{array}{r}
2x^2-7x+18\phantom{{}+5}\phantom{)} \\[3pt]
x+2\,\overline{\smash{)}\,2x^3-3x^2+4x+5}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}2x^3+4x^2\mathrlap{)}}\phantom{{}+4x+5}\phantom{)} \\[3pt]
-7x^2+4x\phantom{{}+5}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-7x^2-14x}\mathrlap{)}}\phantom{{}+5}\phantom{)} \\[3pt]
18x+5\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}18x+36\mathrlap{)}}\phantom{)} \\[3pt]
-31\phantom{)}
\end{array}
$$

We have found

$$\frac{2x^3-3x^2+4x+5}{x+2}=2x^2-7x+18-\frac{31}{x+2}$$

or

$$2x^3-3x^2+4x+5=(x+2)(2x^2-7x+18)-31.$$

We can identify the dividend, the divisor, the quotient, and the remainder:

- the dividend is $2x^3-3x^2+4x+5$
- the divisor is $x+2$
- the quotient is $2x^2-7x+18$
- the remainder is $-31$

Writing the result in this manner illustrates the Division Algorithm.

{{< callout type="info" >}}
  **The Division Algorithm.** The Division Algorithm states that, given a
  polynomial dividend $f(x)$ and a non-zero polynomial divisor $d(x)$ where
  the degree of $d(x)$ is less than or equal to the degree of $f(x)$, there
  exist unique polynomials $q(x)$ and $r(x)$ such that

  $$f(x)=d(x)q(x)+r(x)$$

  where $q(x)$ is the quotient and $r(x)$ is the remainder. The remainder is
  either equal to zero or has degree strictly less than $d(x)$. If $r(x)=0$,
  then $d(x)$ divides evenly into $f(x)$, and both $d(x)$ and $q(x)$ are
  factors of $f(x)$.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a polynomial and a binomial, use long division to divide
  the polynomial by the binomial.

  1. Set up the division problem.
  2. Determine the first term of the quotient by dividing the leading term of
     the dividend by the leading term of the divisor.
  3. Multiply the answer by the divisor and write it below the like terms of
     the dividend.
  4. Subtract the bottom binomial from the top binomial.
  5. Bring down the next term of the dividend.
  6. Repeat steps 2–5 until reaching the last term of the dividend.
  7. If the remainder is non-zero, express it as a fraction using the divisor
     as the denominator.
{{< /callout >}}

**Example.** Divide $5x^2+3x-2$ by $x+1$.

**Solution.**

$$
\begin{array}{r}
5x-2\phantom{{}-2}\phantom{)} \\[2pt]
x+1\,\overline{\smash{)}\,5x^2+3x-2}\phantom{)} \\[2pt]
\underline{-\left(5x^2+5x\right)}\phantom{{}-2} \\[2pt]
-2x-2\phantom{)} \\[2pt]
\underline{-\left(-2x-2\right)} \\[2pt]
0\phantom{)}
\end{array}
$$

The quotient is $5x-2$. The remainder is $0$. We write the result as

$$\frac{5x^2+3x-2}{x+1}=5x-2$$

or

$$5x^2+3x-2=(x+1)(5x-2).$$

**Analysis.** This division problem had a remainder of $0$. This tells us
that the dividend is divided evenly by the divisor, and that the divisor is
a factor of the dividend.

**Example.** Divide $6x^3+11x^2-31x+15$ by $3x-2$.

**Solution.**

$$
\begin{array}{r}
2x^2+5x-7\phantom{{}+15}\phantom{)} \\[3pt]
3x-2\,\overline{\smash{)}\,6x^3+11x^2-31x+15}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}6x^3-4x^2\mathrlap{)}}\phantom{{}-31x+15}\phantom{)} \\[3pt]
15x^2-31x\phantom{{}+15}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}15x^2-10x\mathrlap{)}}\phantom{{}+15}\phantom{)} \\[3pt]
-21x+15\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-21x+14}\mathrlap{)}}\phantom{)} \\[3pt]
1\phantom{)}
\end{array}
$$

There is a remainder of $1$. We can express the result as

$$\frac{6x^3+11x^2-31x+15}{3x-2}=2x^2+5x-7+\frac{1}{3x-2}.$$

**Analysis.** We can check our work by using the Division Algorithm to
rewrite the solution, then multiplying.

$$(3x-2)(2x^2+5x-7)+1=6x^3+11x^2-31x+15$$

Notice, as we write our result,

- the dividend is $6x^3+11x^2-31x+15$
- the divisor is $3x-2$
- the quotient is $2x^2+5x-7$
- the remainder is $1$

{{< fillin
  question="Divide $16x^3-12x^2+20x-3$ by $4x+5$."
  answer="4x^2-8x+15-\frac{78}{4x+5}"
  answerForm="expanded"
  answerDisplay="$4x^2-8x+15-\tfrac{78}{4x+5}$"
  hint="Divide the leading terms to get each quotient term, multiply that term by the whole divisor, subtract, and bring down the next term; write any final nonzero remainder over the divisor."
>}}

## Using synthetic division to divide polynomials

Long division of polynomials can involve many steps and be quite cumbersome.
**Synthetic division** is a shorthand method of dividing polynomials for the
special case of dividing by a linear factor whose leading coefficient is
$1$.

To illustrate the process, recall the example at the beginning of this
subsection: dividing $2x^3-3x^2+4x+5$ by $x+2$ using the long division
algorithm. The final form of the process looked like this:

$$
\begin{array}{r}
2x^2-7x+18\phantom{{}+5}\phantom{)} \\[3pt]
x+2\,\overline{\smash{)}\,2x^3-3x^2+4x+5}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}2x^3+4x^2\mathrlap{)}}\phantom{{}+4x+5}\phantom{)} \\[3pt]
-7x^2+4x\phantom{{}+5}\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}{-7x^2-14x}\mathrlap{)}}\phantom{{}+5}\phantom{)} \\[3pt]
18x+5\phantom{)} \\[3pt]
\underline{\mathllap{-\,(}18x+36\mathrlap{)}}\phantom{)} \\[3pt]
-31\phantom{)}
\end{array}
$$

There is a lot of repetition in that tableau. If we don't write the
variables but instead line up their coefficients in columns under the
division sign, and also eliminate the partial products, we already have a
simpler version of the entire problem.

$$
\begin{array}{r}
2\,\overline{\smash{)}\,2\quad{-3}\quad\ \,4\quad\ \,5\,} \\[3pt]
\phantom{2\,\overline{\smash{)}\,}}\underline{{-2}\quad{-4}}\phantom{\quad\ \,4\quad\ \,5\,} \\[3pt]
\phantom{2\,\overline{\smash{)}\,2\quad{-3}\quad\ \,}}\underline{{-7}\quad14}\phantom{\quad\ \,5\,} \\[3pt]
\phantom{2\,\overline{\smash{)}\,2\quad{-3}\quad\ \,4\quad\ \,}}\underline{18\quad{-36}} \\[3pt]
\phantom{2\,\overline{\smash{)}\,2\quad{-3}\quad\ \,4\quad\ \,5\,}}{-31}
\end{array}
$$

Synthetic division carries this simplification a few steps further: collapse
the table by moving each of the rows up to fill any vacant spot. Also,
instead of dividing by $2$ — as we would in division of whole numbers — then
multiplying and subtracting the middle product, we change the sign of the
"divisor" to $-2$ and multiply and add. The process starts by bringing down
the leading coefficient, then multiplying it by the "divisor" and adding,
repeating this process column by column until there are no entries left. The
bottom row holds the coefficients of the quotient, and its last entry is the
remainder:

$$
\begin{array}{r|rrrr}
-2 & 2 & -3 & 4 & 5 \\
   &   & -4 & 14 & -36 \\
\hline
   & 2 & -7 & 18 & -31
\end{array}
$$

The quotient is $2x^2-7x+18$ and the remainder is $-31$ — the same result
the long-division tableau gave above.

{{< callout type="info" >}}
  **Synthetic division.** Synthetic division is a shortcut that can be used
  when the divisor is a binomial in the form $x-k$. In synthetic division,
  only the coefficients are used in the division process.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given two polynomials, use synthetic division to divide.

  1. Write $k$ for the divisor.
  2. Write the coefficients of the dividend.
  3. Bring the lead coefficient down.
  4. Multiply the lead coefficient by $k$. Write the product in the next
     column.
  5. Add the terms of the second column.
  6. Multiply the result by $k$. Write the product in the next column.
  7. Repeat steps 5 and 6 for the remaining columns.
  8. Use the bottom numbers to write the quotient. The number in the last
     column is the remainder. The next number from the right has degree $0$,
     the next number has degree $1$, and so on.
{{< /callout >}}

**Example.** Use synthetic division to divide $5x^2-3x-36$ by $x-3$.

**Solution.** Begin by setting up the synthetic division. Write $k=3$ and
the coefficients.

$$
\begin{array}{r|rrr}
3 & 5 & -3 & -36
\end{array}
$$

Bring down the lead coefficient. Multiply the lead coefficient by $k$.

$$
\begin{array}{r|rrr}
3 & 5 & -3 & -36 \\
  &   & 15 &  \\
\hline
  & 5 &  &
\end{array}
$$

Continue by adding the numbers in the second column. Multiply the resulting
number by $k$. Write the result in the next column. Then add the numbers in
the third column.

$$
\begin{array}{r|rrr}
3 & 5 & -3 & -36 \\
  &   & 15 & 36 \\
\hline
  & 5 & 12 & 0
\end{array}
$$

The result is $5x+12$. The remainder is $0$. So $x-3$ is a factor of the
original polynomial.

**Analysis.** Just as with long division, we can check our work by
multiplying the quotient by the divisor and adding the remainder.

$$(x-3)(5x+12)+0=5x^2-3x-36$$

**Example.** Use synthetic division to divide $4x^3+10x^2-6x-20$ by $x+2$.

**Solution.** The binomial divisor is $x+2$, so $k=-2$. Add each column,
multiply the result by $-2$, and repeat until the last column is reached.

$$
\begin{array}{r|rrrr}
-2 & 4 & 10 & -6 & -20 \\
   &   & -8 & -4 & 20 \\
\hline
   & 4 & 2 & -10 & 0
\end{array}
$$

The result is $4x^2+2x-10$. The remainder is $0$. Thus, $x+2$ is a factor of
$4x^3+10x^2-6x-20$.

**Analysis.** The graph of the polynomial function
$f(x)=4x^3+10x^2-6x-20$ below shows a zero at $x=k=-2$. This confirms that
$x+2$ is a factor of $4x^3+10x^2-6x-20$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 4x cubed plus 10x squared minus 6x minus 20, on a grid with x from negative 5 to 5 and y from negative 22 to 14. The curve crosses the x-axis at x equals negative 2, dips to a local minimum near x equals 1, then rises steeply to the right.","xMin":-5,"xMax":5,"yMin":-22,"yMax":14,"xUnit":22,"yUnit":11,"grid":true,"xGridStep":1,"yGridStep":2,"tickLabels":true,"xTickStep":1,"yTickStep":4,"polynomials":[{"coeffs":[-20,-6,10,4],"arrows":true}],"points":[{"at":[-2,0],"label":"x = -2"}]}
{{< /apfigure >}}

**Example.** Use synthetic division to divide $-9x^4+10x^3+7x^2-6$ by $x-1$.

**Solution.** Notice there is no $x$-term, so we will use a zero as the
coefficient for that term.

$$
\begin{array}{r|rrrrr}
1 & -9 & 10 & 7 & 0 & -6 \\
  &    & -9 & 1 & 8 & 8 \\
\hline
  & -9 & 1 & 8 & 8 & 2
\end{array}
$$

The result is $-9x^3+x^2+8x+8+\tfrac{2}{x-1}$.

{{< fillin
  question="Use synthetic division to divide $3x^4+18x^3-3x+40$ by $x+7$."
  answer="3x^3-3x^2+21x-150+\frac{1{,}090}{x+7}"
  answerForm="expanded"
  answerDisplay="$3x^3-3x^2+21x-150+\tfrac{1{,}090}{x+7}$"
  hint="Write $k=-7$, insert a zero coefficient for the missing $x^2$ term, and bring the coefficients through the synthetic-division rows."
>}}

## Using polynomial division to solve application problems

Polynomial division can be used to solve a variety of application problems
involving expressions for area and volume. We looked at an application at
the beginning of this section. Now we will solve that problem.

**Example.** The volume of a rectangular solid is given by the polynomial
$3x^4-3x^3-33x^2+54x$. The length of the solid is given by $3x$ and the
width is given by $x-2$. Find the height of the solid.

**Solution.** There are a few ways to approach this problem. We need to
divide the expression for the volume of the solid by the expressions for the
length and width. Let us create a sketch.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An oblique sketch of a rectangular box representing the rectangular solid. Its bottom front edge is labeled Length 3x, its bottom edge receding into the page is labeled Width x - 2, and its right vertical edge is labeled Height.","unit":40,"padding":110,"polygons":[{"points":[[0,0],[6,0],[6,1.8],[0,1.8]],"edgeLabels":["Length 3x",null,null,null]}],"segments":[{"from":[0,1.8],"to":[1.6,2.55]},{"from":[1.6,2.55],"to":[7.6,2.55]},{"from":[7.6,2.55],"to":[6,1.8]},{"from":[7.6,2.55],"to":[7.6,0.75],"label":"Height"},{"from":[7.6,0.75],"to":[6,0],"label":"Width x - 2"},{"from":[0,0],"to":[1.6,0.75],"dashed":true},{"from":[1.6,0.75],"to":[1.6,2.55],"dashed":true},{"from":[1.6,0.75],"to":[7.6,0.75],"dashed":true}]}
{{< /apfigure >}}

We can now write an equation by substituting the known values into the
formula for the volume of a rectangular solid.

$$
\begin{array}{lrcl}
& V &=& l\cdot w\cdot h \\[4pt]
& 3x^4-3x^3-33x^2+54x &=& 3x\cdot(x-2)\cdot h
\end{array}
$$

To solve for $h$, first divide both sides by $3x$.

$$
\begin{array}{lrcl}
& \tfrac{3x\cdot(x-2)\cdot h}{3x} &=& \tfrac{3x^4-3x^3-33x^2+54x}{3x} \\[6pt]
& (x-2)h &=& x^3-x^2-11x+18
\end{array}
$$

Now solve for $h$ using synthetic division.

$$h=\frac{x^3-x^2-11x+18}{x-2}$$

$$
\begin{array}{r|rrrr}
2 & 1 & -1 & -11 & 18 \\
  &   & 2 & 2 & -18 \\
\hline
  & 1 & 1 & -9 & 0
\end{array}
$$

The quotient is $x^2+x-9$ and the remainder is $0$. The height of the solid
is $x^2+x-9$.

{{< fillin
  question="The area of a rectangle is given by $3x^3+14x^2-23x+6$. The width of the rectangle is given by $x+6$. Find an expression for the length of the rectangle."
  answer="3x^2-4x+1"
  answerForm="expanded"
  answerDisplay="$3x^2-4x+1$"
  hint="Length equals area divided by width; use synthetic division with $k=-6$."
>}}

## Key equations

| Division Algorithm | $f(x)=d(x)q(x)+r(x)$, where $q(x)\neq0$ |
| :--- | :--- |

## Key concepts

- Polynomial long division can be used to divide a polynomial by any
  polynomial with equal or lower degree.
- The Division Algorithm tells us that a polynomial dividend can be written
  as the product of the divisor and the quotient added to the remainder.
- Synthetic division is a shortcut that can be used to divide a polynomial
  by a binomial in the form $x-k$.
- Polynomial division can be used to solve application problems, including
  area and volume.

## Key terms

**Division Algorithm** — given a polynomial dividend $f(x)$ and a non-zero
polynomial divisor $d(x)$ where the degree of $d(x)$ is less than or equal
to the degree of $f(x)$, there exist unique polynomials $q(x)$ and $r(x)$
such that $f(x)=d(x)q(x)+r(x)$; $q(x)$ is the quotient and $r(x)$ is the
remainder, and the remainder is either equal to zero or has degree strictly
less than $d(x)$.
**synthetic division** — a shortcut method that can be used to divide a
polynomial by a binomial of the form $x-k$.

## Practice

### Use long division to divide polynomials

{{< fillin
  question="Use long division to divide $3x^2+23x+14$ by $x+7$. What is the quotient?"
  answer="3x+2"
  answerForm="expanded"
  answerDisplay="$3x+2$"
  hint="Divide the leading terms to start the quotient, multiply that term by the whole divisor, subtract, and bring down the next term."
>}}

{{< fillin
  question="Now give the remainder from dividing $3x^2+23x+14$ by $x+7$."
  answer="0"
  hint="Subtract the last product from the last partial dividend; a zero remainder means the divisor is a factor."
>}}

{{< fillin
  question="Use long division to divide $2x^2-3x+2$ by $x+2$. What is the quotient?"
  answer="2x-7"
  answerForm="expanded"
  answerDisplay="$2x-7$"
  hint="Divide the leading terms to start the quotient, multiply that term by the whole divisor, subtract, and bring down the next term."
>}}

{{< fillin
  question="Now give the remainder from dividing $2x^2-3x+2$ by $x+2$."
  answer="16"
  hint="Subtract the last product from the last partial dividend to find what is left over."
>}}

### Use synthetic division to divide polynomials

{{< fillin
  question="Use synthetic division to find the quotient when $2x^3-6x^2-7x+6$ is divided by $x-4$."
  answer="2x^2+2x+1+\frac{10}{x-4}"
  answerForm="expanded"
  answerDisplay="$2x^2+2x+1+\tfrac{10}{x-4}$"
  hint="Use $k=4$; bring down the leading coefficient, then repeatedly multiply by $4$ and add down each column."
>}}

{{< fillin
  question="Use synthetic division to find the quotient when $x^3-21x^2+147x-343$ is divided by $x-7$."
  answer="x^2-14x+49"
  answerForm="expanded"
  answerDisplay="$x^2-14x+49$"
  hint="Use $k=7$; bring down the leading coefficient, then repeatedly multiply by $7$ and add down each column."
>}}

{{< multiplechoice
  question="Is $x-2$ a factor of $3x^4-6x^3-5x+10$?"
  answer="yes"
  hint="Use synthetic division with $k=2$ (insert a zero coefficient for the missing $x^2$ term) and check whether the remainder is zero."
>}}
yes
no
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.5: Dividing Polynomials](https://openstax.org/books/precalculus-2e/pages/3-5-dividing-polynomials) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative Lincoln Memorial photograph, which carries no mathematics; recreated every long-division and synthetic-division tableau as an accessible KaTeX array with `\phantom` spacing rather than as an image, staging each one exactly as the source's image sequence does — the full long-division tableau, then the same work with the variables dropped, then the collapsed, sign-flipped synthetic-division grid bridging the two methods; and Example 3's three partial grids (set up, bring down the lead coefficient, then complete the remaining columns), each paired with the source's own narration; recreated the zero-confirming graph in Example 4's Analysis as an accessible SVG plotted directly from $f(x)=4x^3+10x^2-6x-20$, and omitted its inset close-up detail as decorative; recreated the labelled rectangular-solid sketch in the application example as an accessible SVG figure, an oblique box with its length, width, and height edges labelled to match the source; omitted the media links; converted the "Try It" problems into interactive fill-in exercises with instant feedback, each carrying an `expanded` answer form because "Divide $A$ by $B$" is otherwise satisfied by retyping the printed quotient $\tfrac{A}{B}$; and adapted five selected end-of-section exercises — two "specify the quotient and the remainder" long-division items, each split into paired quotient/remainder prompts, two "find the quotient" synthetic-division items, and a synthetic-division factor check — into seven interactive components in a closing Practice block, one group per objective.</small>
