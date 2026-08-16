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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 4x cubed plus 10x squared minus 6x minus 20, on a grid with x from negative 5 to 5 and y from negative 22 to 14. The curve crosses the x-axis at x equals negative 2, dips to a local minimum near x equals 1, then rises steeply to the right.","xMin":-5,"xMax":5,"yMin":-22,"yMax":14,"xUnit":22,"yUnit":11,"grid":true,"xGridStep":1,"yGridStep":2,"tickLabels":true,"xTickStep":1,"yTickStep":4,"polynomials":[{"coeffs":[-20,-6,10,4],"arrows":true}],"points":[{"at":[-2,0],"label":"x = -2","labelSide":"s"}]}'>
<svg role="img" aria-label="The graph of f of x equals 4x cubed plus 10x squared minus 6x minus 20, on a grid with x from negative 5 to 5 and y from negative 22 to 14. The curve crosses the x-axis at x equals negative 2, dips to a local minimum near x equals 1, then rises steeply to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 448" width="272" height="448" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="422" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="422" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="422" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="92" y1="422" x2="92" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="422" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="422" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="422" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="422" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="422" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="422" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="422" x2="246" y2="422" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="400" x2="246" y2="400" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="378" x2="246" y2="378" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="356" x2="246" y2="356" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="334" x2="246" y2="334" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="312" x2="246" y2="312" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="246" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="246" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="246" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="246" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="246" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="246" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="246" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="246" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="246" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="246" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="246" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="180" x2="248" y2="180" stroke="currentColor" stroke-width="1"/>
  <line x1="136" y1="24" x2="136" y2="424" stroke="currentColor" stroke-width="1"/>
  <polygon points="258,180 248,185 248,175" fill="currentColor"/>
  <polygon points="136,14 141,24 131,24" fill="currentColor"/>
  <polygon points="14,180 24,175 24,185" fill="currentColor"/>
  <polygon points="136,434 131,424 141,424" fill="currentColor"/>
  <text x="256" y="172" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="144" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="177" x2="26" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="195" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="48" y1="177" x2="48" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="195" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="70" y1="177" x2="70" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="70" y="195" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="92" y1="177" x2="92" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="195" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="114" y1="177" x2="114" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="114" y="195" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="158" y1="177" x2="158" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="158" y="195" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="180" y1="177" x2="180" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="195" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="202" y1="177" x2="202" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="202" y="195" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="177" x2="224" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="195" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="177" x2="246" y2="183" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="195" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="133" y1="400" x2="139" y2="400" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="404" font-size="11" fill="currentColor" text-anchor="end">−20</text>
  <line x1="133" y1="356" x2="139" y2="356" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="360" font-size="11" fill="currentColor" text-anchor="end">−16</text>
  <line x1="133" y1="312" x2="139" y2="312" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="316" font-size="11" fill="currentColor" text-anchor="end">−12</text>
  <line x1="133" y1="268" x2="139" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="272" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="133" y1="224" x2="139" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="228" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="133" y1="136" x2="139" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="140" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="133" y1="92" x2="139" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="96" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="133" y1="48" x2="139" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="52" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <polyline points="69.4,413.6 69.5,410.6 69.8,405.3 70,400 70.3,394.8 70.5,389.6 70.8,384.6 71,379.6 71.3,374.7 71.5,369.8 71.8,365 72,360.3 72.3,355.7 72.5,351.1 72.8,346.6 73,342.2 73.3,337.8 73.5,333.6 73.8,329.3 74,325.2 74.3,321.1 74.5,317.1 74.8,313.1 75,309.3 75.3,305.4 75.5,301.7 75.8,298 76,294.4 76.3,290.8 76.5,287.3 76.8,283.9 77,280.5 77.3,277.2 77.5,274 77.8,270.8 78,267.7 78.3,264.6 78.5,261.7 78.8,258.7 79,255.9 79.3,253 79.5,250.3 79.8,247.6 80,245 80.3,242.4 80.5,239.9 80.8,237.4 81,235 81.3,232.7 81.5,230.4 81.8,228.1 82,226 82.3,223.8 82.5,221.8 82.8,219.7 83,217.8 83.3,215.9 83.5,214 83.8,212.2 84,210.5 84.3,208.8 84.5,207.1 84.8,205.5 85,204 85.3,202.5 85.5,201.1 85.8,199.7 86,198.3 86.3,197.1 86.5,195.8 86.8,194.6 87,193.5 87.3,192.4 87.5,191.3 87.8,190.3 88,189.4 88.3,188.4 88.5,187.6 88.8,186.8 89,186 89.3,185.2 89.5,184.6 89.8,183.9 90,183.3 90.3,182.7 90.5,182.2 90.8,181.8 91,181.3 91.3,180.9 91.5,180.6 91.8,180.3 92,180 92.3,179.8 92.5,179.6 92.8,179.4 93,179.3 93.3,179.2 93.5,179.2 93.8,179.2 94,179.2 94.3,179.3 94.5,179.4 94.8,179.6 95,179.8 95.3,180 95.5,180.2 95.8,180.5 96,180.8 96.3,181.2 96.5,181.6 96.8,182 97,182.4 97.3,182.9 97.5,183.4 97.8,184 98,184.6 98.3,185.2 98.5,185.8 98.8,186.5 99,187.2 99.3,187.9 99.5,188.7 99.8,189.4 100,190.2 100.3,191.1 100.5,192 100.8,192.8 101,193.8 101.3,194.7 101.5,195.7 101.8,196.7 102,197.7 102.3,198.7 102.5,199.8 102.8,200.9 103,202 103.3,203.1 103.5,204.3 103.8,205.5 104,206.7 104.3,207.9 104.5,209.1 104.8,210.4 105,211.7 105.3,213 105.5,214.3 105.8,215.7 106,217 106.3,218.4 106.5,219.8 106.8,221.2 107,222.6 107.3,224.1 107.5,225.6 107.8,227 108,228.5 108.3,230 108.5,231.6 108.8,233.1 109,234.7 109.3,236.2 109.5,237.8 109.8,239.4 110,241 110.3,242.6 110.5,244.2 110.8,245.9 111,247.5 111.3,249.2 111.5,250.8 111.8,252.5 112,254.2 112.3,255.9 112.5,257.6 112.8,259.3 113,261 113.3,262.8 113.5,264.5 113.8,266.3 114,268 114.3,269.8 114.5,271.5 114.8,273.3 115,275 115.3,276.8 115.5,278.6 115.8,280.4 116,282.1 116.3,283.9 116.5,285.7 116.8,287.5 117,289.3 117.3,291.1 117.5,292.9 117.8,294.7 118,296.5 118.3,298.3 118.5,300 118.8,301.8 119,303.6 119.3,305.4 119.5,307.2 119.8,309 120,310.7 120.3,312.5 120.5,314.3 120.8,316.1 121,317.8 121.2,319.6 121.5,321.3 121.8,323.1 122,324.8 122.3,326.5 122.5,328.2 122.8,330 123,331.7 123.3,333.4 123.5,335.1 123.8,336.7 124,338.4 124.3,340.1 124.5,341.7 124.8,343.4 125,345 125.3,346.6 125.5,348.2 125.8,349.8 126,351.4 126.3,353 126.5,354.5 126.7,356.1 127,357.6 127.3,359.1 127.5,360.6 127.8,362.1 128,363.6 128.3,365 128.5,366.5 128.8,367.9 129,369.3 129.3,370.7 129.5,372 129.8,373.4 130,374.7 130.3,376 130.5,377.3 130.8,378.6 131,379.8 131.3,381.1 131.5,382.3 131.8,383.5 132,384.6 132.3,385.8 132.5,386.9 132.8,388 133,389.1 133.3,390.1 133.5,391.1 133.8,392.1 134,393.1 134.3,394.1 134.5,395 134.8,395.9 135,396.8 135.3,397.6 135.5,398.4 135.8,399.2 136,400 136.3,400.7 136.5,401.4 136.8,402.1 137,402.8 137.3,403.4 137.5,404 137.8,404.5 138,405.1 138.3,405.6 138.5,406 138.8,406.4 139,406.8 139.3,407.2 139.5,407.5 139.8,407.8 140,408.1 140.3,408.3 140.5,408.5 140.8,408.7 141,408.8 141.3,408.9 141.5,408.9 141.8,409 142,408.9 142.3,408.9 142.5,408.8 142.8,408.6 143,408.4 143.3,408.2 143.5,408 143.8,407.7 144,407.3 144.3,407 144.5,406.5 144.8,406.1 145,405.6 145.3,405 145.5,404.4 145.8,403.8 146,403.1 146.3,402.4 146.5,401.7 146.8,400.9 147,400 147.3,399.1 147.5,398.2 147.8,397.2 148,396.1 148.3,395 148.5,393.9 148.8,392.7 149,391.5 149.3,390.2 149.5,388.9 149.8,387.5 150,386.1 150.3,384.6 150.5,383.1 150.8,381.5 151,379.9 151.3,378.2 151.5,376.5 151.8,374.7 152,372.9 152.3,371 152.5,369.1 152.8,367.1 153,365 153.3,362.9 153.5,360.8 153.8,358.5 154,356.3 154.3,353.9 154.5,351.6 154.8,349.1 155,346.6 155.3,344.1 155.5,341.4 155.8,338.8 156,336 156.3,333.2 156.5,330.4 156.8,327.5 157,324.5 157.3,321.5 157.5,318.4 157.8,315.2 158,312 158.3,308.7 158.5,305.4 158.8,302 159,298.5 159.3,295 159.5,291.4 159.8,287.7 160,284 160.3,280.2 160.5,276.3 160.8,272.4 161,268.4 161.3,264.3 161.5,260.2 161.8,256 162,251.7 162.3,247.4 162.5,243 162.8,238.5 163,234 163.3,229.4 163.5,224.7 163.8,219.9 164,215.1 164.3,210.2 164.5,205.2 164.8,200.2 165,195.1 165.3,189.9 165.5,184.6 165.8,179.3 166,173.9 166.3,168.4 166.5,162.8 166.8,157.2 167,151.5 167.3,145.7 167.5,139.8 167.8,133.9 168,127.9 168.3,121.8 168.5,115.6 168.8,109.3 169,103 169.3,96.6 169.5,90.1 169.8,83.5 170,76.9 170.3,70.1 170.5,63.3 170.8,56.4 171,49.4 171.3,42.4 171.5,36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="69,421.6 64.5,411.4 74.4,411.8" fill="currentColor"/>
  <polygon points="171.8,28 176.4,38.1 166.4,37.8" fill="currentColor"/>
  <circle cx="92" cy="180" r="4" fill="currentColor"/>
  <text x="92" y="203" font-size="13" fill="currentColor" text-anchor="middle">x = −2</text>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"figure","ariaLabel":"An oblique sketch of a rectangular box representing the rectangular solid. Its bottom front edge is labeled Length 3x, its bottom edge receding into the page is labeled Width x - 2, and its right vertical edge is labeled Height.","unit":40,"padding":110,"polygons":[{"points":[[0,0],[6,0],[6,1.8],[0,1.8]],"edgeLabels":["Length 3x",null,null,null]}],"segments":[{"from":[0,1.8],"to":[1.6,2.55]},{"from":[1.6,2.55],"to":[7.6,2.55]},{"from":[7.6,2.55],"to":[6,1.8]},{"from":[7.6,2.55],"to":[7.6,0.75],"label":"Height","labelSide":"left"},{"from":[7.6,0.75],"to":[6,0],"label":"Width x - 2","labelSide":"left"},{"from":[0,0],"to":[1.6,0.75],"dashed":true},{"from":[1.6,0.75],"to":[1.6,2.55],"dashed":true},{"from":[1.6,0.75],"to":[7.6,0.75],"dashed":true}]}'>
<svg role="img" aria-label="An oblique sketch of a rectangular box representing the rectangular solid. Its bottom front edge is labeled Length 3x, its bottom edge receding into the page is labeled Width x - 2, and its right vertical edge is labeled Height." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524 322" width="524" height="322" font-family="Helvetica, Arial, sans-serif">
  <line x1="110" y1="212" x2="350" y2="212" stroke="currentColor" stroke-width="1.5"/>
  <text x="230" y="234" text-anchor="middle" font-size="13" fill="currentColor">Length 3x</text>
  <line x1="350" y1="212" x2="350" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="350" y1="140" x2="110" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="110" y1="140" x2="110" y2="212" stroke="currentColor" stroke-width="1.5"/>
  <line x1="110" y1="140" x2="174" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <line x1="174" y1="110" x2="414" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <line x1="414" y1="110" x2="350" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="414" y1="110" x2="414" y2="182" stroke="currentColor" stroke-width="1.5"/>
  <text x="426" y="150" text-anchor="start" font-size="13" fill="currentColor">Height</text>
  <line x1="414" y1="182" x2="350" y2="212" stroke="currentColor" stroke-width="1.5"/>
  <text x="387.1" y="217.9" text-anchor="start" font-size="13" fill="currentColor">Width x − 2</text>
  <line x1="110" y1="212" x2="174" y2="182" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="174" y1="182" x2="174" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="174" y1="182" x2="414" y2="182" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
</svg>
</div>

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
