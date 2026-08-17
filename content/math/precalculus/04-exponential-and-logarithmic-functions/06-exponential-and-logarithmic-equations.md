---
title: Exponential and Logarithmic Equations
description: >-
  Solving exponential equations by matching bases or taking logarithms,
  solving logarithmic equations with the definition of a logarithm or the
  one-to-one property, checking for extraneous solutions, and applying both
  skills to compound-interest, half-life, and population-growth problems —
  adapted from OpenStax Precalculus 2e, Section 4.6.
source_section: "4.6"
weight: 6
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use like bases to solve exponential equations
- Use logarithms to solve exponential equations
- Use the definition of a logarithm to solve logarithmic equations
- Use the one-to-one property of logarithms to solve logarithmic equations
- Solve applied problems involving exponential and logarithmic equations
{{< /callout >}}

In 1859, an Australian landowner named Thomas Austin released 24 rabbits
into the wild for hunting. Because Australia had few predators and ample
food, the rabbit population exploded. In fewer than ten years, the rabbit
population numbered in the millions.

Uncontrolled population growth, as in the wild rabbits in Australia, can be
modeled with exponential functions. Equations resulting from those
exponential functions can be solved to analyze and make predictions about
exponential growth. In this section, we will learn techniques for solving
exponential functions.

## Using Like Bases to Solve Exponential Equations

The first technique involves two functions with like bases. Recall that the
one-to-one property of exponential functions tells us that, for any real
numbers $b$, $S$, and $T$, where $b>0$, $b\ne1$, $b^S=b^T$ if and only if
$S=T$.

In other words, when an **exponential equation** has the same base on each
side, the exponents must be equal. This also applies when the exponents are
algebraic expressions. Therefore, we can solve many exponential equations by
using the rules of exponents to rewrite each side as a power with the same
base. Then, we use the fact that exponential functions are one-to-one to set
the exponents equal to one another, and solve for the unknown.

For example, consider the equation $3^{4x-7}=\tfrac{3^{2x}}{3}$. To solve
for $x$, we use the division property of exponents to rewrite the right
side so that both sides have the common base, $3$. Then we apply the
one-to-one property of exponents by setting the exponents equal to one
another and solving for $x$:

$$
\begin{array}{lrcl}
& 3^{4x-7} &=& \tfrac{3^{2x}}{3} \\[4pt]
\text{Rewrite 3 as } 3^{1}. & 3^{4x-7} &=& \tfrac{3^{2x}}{3^{1}} \\[4pt]
\text{Use the division property of exponents.} & 3^{4x-7} &=& 3^{2x-1} \\[4pt]
\text{Apply the one-to-one property of exponents.} & 4x-7 &=& 2x-1 \\[4pt]
\text{Subtract } 2x \text{ and add 7 to both sides.} & 2x &=& 6 \\[4pt]
\text{Divide by 2.} & x &=& 3
\end{array}
$$

{{< callout type="info" >}}
**Using the One-to-One Property of Exponential Functions to Solve
Exponential Equations.** For any algebraic expressions $S$ and $T$, and any
positive real number $b\ne1$,

$$b^S=b^T\ \text{if and only if}\ S=T$$
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given an exponential equation with the form $b^S=b^T$, where $S$
and $T$ are algebraic expressions with an unknown, solve for the unknown.

1. Use the rules of exponents to simplify, if necessary, so that the
   resulting equation has the form $b^S=b^T$.
2. Use the one-to-one property to set the exponents equal.
3. Solve the resulting equation, $S=T$, for the unknown.
{{< /callout >}}

**Example.** Solve $2^{x-1}=2^{2x-4}$.

**Solution.**

$$
\begin{array}{lrcl}
\text{The common base is 2.} & 2^{x-1} &=& 2^{2x-4} \\[4pt]
\text{By the one-to-one property the exponents must be equal.} & x-1 &=& 2x-4 \\[4pt]
\text{Solve for } x. & x &=& 3
\end{array}
$$

{{< fillin
  question="Solve $5^{2x}=5^{3x+2}$."
  answer="-2"
  answerDisplay="$x=-2$"
  hint="The bases already match, so set the exponents equal: $2x=3x+2$."
>}}

## Rewriting Equations So All Powers Have the Same Base

Sometimes the **common base** for an exponential equation is not explicitly
shown. In these cases, we simply rewrite the terms in the equation as
powers with a common base, and solve using the one-to-one property.

For example, consider the equation $256=4^{x-5}$. We can rewrite both sides
of this equation as a power of $2$. Then we apply the rules of exponents,
along with the one-to-one property, to solve for $x$:

$$
\begin{array}{lrcl}
& 256 &=& 4^{x-5} \\[4pt]
\text{Rewrite each side as a power with base 2.} & 2^{8} &=& (2^{2})^{x-5} \\[4pt]
\text{Use the one-to-one property of exponents.} & 2^{8} &=& 2^{2x-10} \\[4pt]
\text{Apply the one-to-one property of exponents.} & 8 &=& 2x-10 \\[4pt]
\text{Add 10 to both sides.} & 18 &=& 2x \\[4pt]
\text{Divide by 2.} & x &=& 9
\end{array}
$$

{{< callout type="info" >}}
**How to:** given an exponential equation with unlike bases, use the
one-to-one property to solve it.

1. Rewrite each side in the equation as a power with a common base.
2. Use the rules of exponents to simplify, if necessary, so that the
   resulting equation has the form $b^S=b^T$.
3. Use the one-to-one property to set the exponents equal.
4. Solve the resulting equation, $S=T$, for the unknown.
{{< /callout >}}

**Example.** Solve $8^{x+2}=16^{x+1}$.

**Solution.**

$$
\begin{array}{lrcl}
& 8^{x+2} &=& 16^{x+1} \\[4pt]
\text{Write 8 and 16 as powers of 2.} & (2^{3})^{x+2} &=& (2^{4})^{x+1} \\[4pt]
\text{To take a power of a power, multiply exponents.} & 2^{3x+6} &=& 2^{4x+4} \\[4pt]
\text{Use the one-to-one property to set the exponents equal.} & 3x+6 &=& 4x+4 \\[4pt]
\text{Solve for } x. & x &=& 2
\end{array}
$$

{{< fillin
  question="Solve $5^{2x}=25^{3x+2}$."
  answer="-1"
  answerDisplay="$x=-1$"
  hint="Rewrite $25$ as $5^2$, then set the exponents equal: $2x=2(3x+2)$."
>}}

**Example.** Solve $2^{5x}=\sqrt2$.

**Solution.**

$$
\begin{array}{lrcl}
\text{Write the square root of 2 as a power of 2.} & 2^{5x} &=& 2^{1/2} \\[4pt]
\text{Use the one-to-one property.} & 5x &=& \tfrac{1}{2} \\[4pt]
\text{Solve for } x. & x &=& \tfrac{1}{10}
\end{array}
$$

{{< fillin
  question="Solve $5^x=\sqrt5$."
  answer="1/2"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Write $\sqrt5$ as $5^{1/2}$, then set the exponents equal."
>}}

{{< callout type="info" >}}
**Q&A.** *Do all exponential equations have a solution? If not, how can we
tell if there is a solution during the problem-solving process?*

No. Recall that the range of an exponential function is always positive.
While solving the equation, we may obtain an expression that is undefined.
{{< /callout >}}

**Example.** Solve $3^{x+1}=-2$.

**Solution.** This equation has no solution. There is no real value of $x$
that will make the equation a true statement because any power of a
positive number is positive.

**Analysis.** The graph below shows that the two graphs do not cross, so
the left side is never equal to the right side. Thus, the equation has no
solution.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve y = 3 to the power (x + 1), rising steeply and staying above the x-axis for every x, together with the horizontal line y = -2. The two graphs never cross.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"tickLabels":true,"curves":[{"kind":"exp","a":1,"h":-1,"k":0,"b":3}],"lines":[{"y":-2}],"texts":[{"at":[1,4.6],"text":"y = 3ˣ⁺¹","anchor":"start"},{"at":[2.2,-1.5],"text":"y = -2","anchor":"start"},{"at":[-4.8,-3.4],"text":"They do not","anchor":"start"},{"at":[-4.8,-4.3],"text":"cross.","anchor":"start"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Solve $2^x=-100$."
  answer="No real solution exists, because a positive base raised to any power is always positive."
  hint="Every power of a positive base is positive, so it can never equal a negative number."
>}}
No real solution exists, because a positive base raised to any power is always positive.
x = -\log_2(100)
x = \log_2(100)
{{< /multiplechoice >}}

## Solving Exponential Equations Using Logarithms

Sometimes the terms of an exponential equation cannot be rewritten with a
common base. In these cases, we solve by taking the logarithm of each side.
Recall, since $\log(a)=\log(b)$ is equivalent to $a=b$, we may apply
logarithms with the same base on both sides of an exponential equation.

{{< callout type="info" >}}
**How to:** given an exponential equation in which a common base cannot be
found, solve for the unknown.

1. Apply the logarithm of both sides of the equation.
   1. If one of the terms in the equation has base 10, use the common
      logarithm.
   2. If none of the terms in the equation has base 10, use the natural
      logarithm.
2. Use the rules of logarithms to solve for the unknown.
{{< /callout >}}

**Example.** Solve $5^{x+2}=4^x$.

**Solution.**

$$
\begin{array}{lrcl}
& 5^{x+2} &=& 4^x \\[4pt]
\text{There is no easy way to get the powers to have the same base.} & \ln5^{x+2} &=& \ln4^x \\[4pt]
\text{Take ln of both sides.} & (x+2)\ln5 &=& x\ln4 \\[4pt]
\text{Use laws of logs.} & x\ln5+2\ln5 &=& x\ln4 \\[4pt]
\text{Use the distributive law.} & x\ln5-x\ln4 &=& -2\ln5 \\[4pt]
\text{Get terms with } x \text{ on one side, terms without } x \text{ on the other.} & x(\ln5-\ln4) &=& -2\ln5 \\[4pt]
\text{Factor out an } x \text{ on the left-hand side.} & x\ln\!\left(\tfrac{5}{4}\right) &=& \ln\!\left(\tfrac{1}{25}\right) \\[4pt]
\text{Use the laws of logs.} & x &=& \tfrac{\ln(1/25)}{\ln(5/4)} \\[4pt]
\text{Divide by the coefficient of } x. &&&
\end{array}
$$

{{< fillin
  question="Solve $2^x=3^{x+1}$ for $x$. Round to four decimal places."
  answer="-2.7095"
  answerForm="decimal"
  answerDisplay="$x\approx-2.7095$"
  hint="Take $\ln$ of both sides, distribute, then collect the $x$-terms on one side: $x\ln2-x\ln3=\ln3$."
>}}

{{< callout type="info" >}}
**Q&A.** *Is there any way to solve $2^x=3^x$?*

Yes. The solution is $0$.
{{< /callout >}}

## Equations Containing *e*

One common type of exponential equations are those with base $e$. This
constant occurs again and again in nature, in mathematics, in science, in
engineering, and in finance. When we have an equation with a base $e$ on
either side, we can use the **natural logarithm** to solve it.

{{< callout type="info" >}}
**How to:** given an equation of the form $y=Ae^{kt}$, solve for $t$.

1. Divide both sides of the equation by $A$.
2. Apply the natural logarithm of both sides of the equation.
3. Divide both sides of the equation by $k$.
{{< /callout >}}

**Example.** Solve $100=20e^{2t}$.

**Solution.**

$$
\begin{array}{lrcl}
& 100 &=& 20e^{2t} \\[4pt]
\text{Divide by the coefficient of the power.} & 5 &=& e^{2t} \\[4pt]
\text{Take ln of both sides. Use the fact that } \ln(x) \text{ and } e^x \text{ are inverse functions.} & \ln5 &=& 2t \\[4pt]
\text{Divide by the coefficient of } t. & t &=& \tfrac{\ln5}{2}
\end{array}
$$

**Analysis.** Using laws of logs, we can also write this answer in the form
$t=\ln\sqrt5$. If we want a decimal approximation of the answer, we use a
calculator.

{{< fillin
  question="Solve $3e^{0.5t}=11$ for $t$. Round to four decimal places."
  answer="2.5986"
  answerForm="decimal"
  answerDisplay="$t\approx2.5986$"
  hint="Divide by the coefficient of the power to isolate $e^{0.5t}$, then take $\ln$ of both sides."
>}}

{{< callout type="info" >}}
**Q&A.** *Does every equation of the form $y=Ae^{kt}$ have a solution?*

No. There is a solution when $k\ne0$, and when $y$ and $A$ are either both
$0$ or neither $0$, and they have the same sign. An example of an equation
with this form that has no solution is $2=-3e^t$.
{{< /callout >}}

**Example.** Solve $4e^{2x}+5=12$.

**Solution.**

$$
\begin{array}{lrcl}
& 4e^{2x}+5 &=& 12 \\[4pt]
\text{Combine like terms.} & 4e^{2x} &=& 7 \\[4pt]
\text{Divide by the coefficient of the power.} & e^{2x} &=& \tfrac{7}{4} \\[4pt]
\text{Take ln of both sides.} & 2x &=& \ln\!\left(\tfrac{7}{4}\right) \\[4pt]
\text{Solve for } x. & x &=& \tfrac{1}{2}\ln\!\left(\tfrac{7}{4}\right)
\end{array}
$$

{{< fillin
  question="Solve $3+e^{2t}=7e^{2t}$ for $t$. Enter the exact answer."
  answer="-\frac{1}{2}\ln 2"
  answerForm="exact-log"
  answerDisplay="$t=-\tfrac{1}{2}\ln2$"
  hint="Collect the $e^{2t}$ terms first: $3=6e^{2t}$, so $e^{2t}=\tfrac{1}{2}$."
>}}

## Extraneous Solutions

Sometimes the methods used to solve an equation introduce an **extraneous
solution**, which is a solution that is correct algebraically but does not
satisfy the conditions of the original equation. One such situation arises
in solving when the logarithm is taken on both sides of the equation. In
such cases, remember that the argument of the logarithm must be positive.
If the number we are evaluating in a logarithm function is negative, there
is no output.

**Example.** Solve $e^{2x}-e^x=56$.

**Solution.**

$$
\begin{array}{lrcl}
& e^{2x}-e^{x} &=& 56 \\[4pt]
\text{Get one side of the equation equal to zero.} & e^{2x}-e^{x}-56 &=& 0 \\[4pt]
\text{Factor by the FOIL method.} & (e^{x}+7)(e^{x}-8) &=& 0 \\[4pt]
\text{If a product is zero, then one factor must be zero.} & e^{x}+7=0 & \text{or} & e^{x}-8=0 \\[4pt]
\text{Isolate the exponentials.} & e^{x}=-7 & \text{or} & e^{x}=8 \\[4pt]
\text{Reject the equation in which the power equals a negative number.} & e^{x} &=& 8 \\[4pt]
\text{Solve the equation in which the power equals a positive number.} & x &=& \ln8
\end{array}
$$

**Analysis.** When we plan to use factoring to solve a problem, we always
get zero on one side of the equation, because zero has the unique property
that when a product is zero, one or both of the factors must be zero. We
reject the equation $e^x=-7$ because a positive number never equals a
negative number. The solution $\ln(-7)$ is not a real number, and in the
real number system this solution is rejected as an extraneous solution.

{{< fillin
  question="Solve $e^{2x}=e^x+2$. Enter the exact answer."
  answer="\ln 2"
  answerForm="exact-log"
  answerDisplay="$x=\ln2$"
  hint="Get zero on one side and factor as a quadratic in $e^x$: $(e^x-2)(e^x+1)=0$, then reject the negative root."
>}}

{{< callout type="info" >}}
**Q&A.** *Does every logarithmic equation have a solution?*

No. Keep in mind that we can only apply the logarithm to a positive number.
Always check for extraneous solutions.
{{< /callout >}}

## Using the Definition of a Logarithm to Solve Logarithmic Equations

We have already seen that every **logarithmic equation** $\log_b(x)=y$ is
equivalent to the exponential equation $b^y=x$. We can use this fact, along
with the rules of logarithms, to solve logarithmic equations where the
argument is an algebraic expression.

For example, consider the equation $\log_2(2)+\log_2(3x-5)=3$. To solve
this equation, we can use rules of logarithms to rewrite the left side in
compact form and then apply the definition of logs to solve for $x$:

$$
\begin{array}{lrcl}
& \log_2(2)+\log_2(3x-5) &=& 3 \\[4pt]
\text{Apply the product rule of logarithms.} & \log_2\bigl(2(3x-5)\bigr) &=& 3 \\[4pt]
\text{Distribute.} & \log_2(6x-10) &=& 3 \\[4pt]
\text{Apply the definition of a logarithm.} & 2^{3} &=& 6x-10 \\[4pt]
\text{Calculate } 2^3. & 8 &=& 6x-10 \\[4pt]
\text{Add 10 to both sides.} & 18 &=& 6x \\[4pt]
\text{Divide by 6.} & x &=& 3
\end{array}
$$

{{< callout type="info" >}}
**Using the Definition of a Logarithm to Solve Logarithmic Equations.** For
any algebraic expression $S$ and real numbers $b$ and $c$, where $b>0$,
$b\ne1$,

$$\log_b(S)=c\ \text{if and only if}\ b^c=S$$
{{< /callout >}}

**Example.** Solve $2\ln x+3=7$.

**Solution.**

$$
\begin{array}{lrcl}
& 2\ln x+3 &=& 7 \\[4pt]
\text{Subtract 3.} & 2\ln x &=& 4 \\[4pt]
\text{Divide by 2.} & \ln x &=& 2 \\[4pt]
\text{Rewrite in exponential form.} & x &=& e^{2}
\end{array}
$$

{{< fillin
  question="Solve $6+\ln x=10$."
  answer="e^{4}"
  answerDisplay="$x=e^4$"
  hint="Isolate $\ln x$, then rewrite in exponential form."
>}}

**Example.** Solve $2\ln(6x)=7$.

**Solution.**

$$
\begin{array}{lrcl}
& 2\ln(6x) &=& 7 \\[4pt]
\text{Divide by 2.} & \ln(6x) &=& \tfrac{7}{2} \\[4pt]
\text{Use the definition of ln.} & 6x &=& e^{7/2} \\[4pt]
\text{Divide by 6.} & x &=& \tfrac{1}{6}e^{7/2}
\end{array}
$$

{{< fillin
  question="Solve $2\ln(x+1)=10$."
  answer="e^{5}-1"
  answerDisplay="$x=e^5-1$"
  hint="Divide by 2 to isolate $\ln(x+1)$, then rewrite in exponential form."
>}}

**Example.** Solve $\ln x=3$.

**Solution.**

$$
\begin{array}{lrcl}
\text{Use the definition of the natural logarithm.} & x &=& e^{3}
\end{array}
$$

The graph below represents the equation. On the graph, the $x$-coordinate
of the point at which the two graphs intersect is close to $20$. In other
words, $e^3\approx20$. A calculator gives a better approximation:
$e^3\approx20.0855$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve y = ln(x), rising slowly from the y-axis, and the horizontal line y = 3. The two graphs cross at approximately (20.0855, 3).","xMin":-3,"xMax":29,"yMin":-3,"yMax":4.5,"xTickStep":4,"yTickStep":1,"tickLabels":true,"curves":[{"kind":"log","a":1,"h":0,"k":0,"b":2.718281828459045}],"lines":[{"y":3}],"points":[{"at":[20.0855,3],"label":"(e³, 3) ≈ (20.0855, 3)"}],"texts":[{"at":[22,3.8],"text":"y = ln(x)","anchor":"start"}]}
{{< /apfigure >}}

{{< fillin
  question="Use a graphing calculator to estimate the approximate solution to the logarithmic equation $2^x=1000$, to 2 decimal places."
  answer="9.97"
  answerForm="decimal"
  answerDisplay="$x\approx9.97$"
  hint="Graph $y=2^x$ and $y=1000$ and read the $x$-coordinate where they cross, or compute $\tfrac{\ln1000}{\ln2}$."
>}}

## Using the One-to-One Property of Logarithms to Solve Logarithmic Equations

As with exponential equations, we can use the one-to-one property to solve
logarithmic equations. The one-to-one property of logarithmic functions
tells us that, for any real numbers $x>0$, $S>0$, $T>0$ and any positive
real number $b$, where $b\ne1$,

$$\log_bS=\log_bT\ \text{if and only if}\ S=T$$

For example, if $\log_2(x-1)=\log_2(8)$, then $x-1=8$.

So, if $x-1=8$, then we can solve for $x$, and we get $x=9$. To check, we
can substitute $x=9$ into the original equation:
$\log_2(9-1)=\log_2(8)=3$. In other words, when a logarithmic equation has
the same base on each side, the arguments must be equal. This also applies
when the arguments are algebraic expressions. Therefore, when given an
equation with logs of the same base on each side, we can use rules of
logarithms to rewrite each side as a single logarithm. Then we use the fact
that logarithmic functions are one-to-one to set the arguments equal to one
another and solve for the unknown.

For example, consider the equation $\log(3x-2)-\log(2)=\log(x+4)$. To solve
this equation, we can use the rules of logarithms to rewrite the left side
as a single logarithm, and then apply the one-to-one property to solve for
$x$:

$$
\begin{array}{lrcl}
& \log(3x-2)-\log(2) &=& \log(x+4) \\[4pt]
\text{Apply the quotient rule of logarithms.} & \log\!\left(\tfrac{3x-2}{2}\right) &=& \log(x+4) \\[4pt]
\text{Apply the one-to-one property of a logarithm.} & \tfrac{3x-2}{2} &=& x+4 \\[4pt]
\text{Multiply both sides of the equation by 2.} & 3x-2 &=& 2x+8 \\[4pt]
\text{Subtract } 2x \text{ and add 2.} & x &=& 10
\end{array}
$$

To check the result, substitute $x=10$ into
$\log(3x-2)-\log(2)=\log(x+4)$.

$$
\begin{array}{lrcl}
& \log(3(10)-2)-\log(2) &=& \log((10)+4) \\[4pt]
& \log(28)-\log(2) &=& \log(14) \\[4pt]
\text{The solution checks.} & \log\!\left(\tfrac{28}{2}\right) &=& \log(14)
\end{array}
$$

{{< callout type="info" >}}
**Using the One-to-One Property of Logarithms to Solve Logarithmic
Equations.** For any algebraic expressions $S$ and $T$ and any positive
real number $b$, where $b\ne1$,

$$\log_bS=\log_bT\ \text{if and only if}\ S=T$$

Note, when solving an equation involving logarithms, always check to see if
the answer is correct or if it is an extraneous solution.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given an equation containing logarithms, solve it using the
one-to-one property.

1. Use the rules of logarithms to combine like terms, if necessary, so
   that the resulting equation has the form $\log_bS=\log_bT$.
2. Use the one-to-one property to set the arguments equal.
3. Solve the resulting equation, $S=T$, for the unknown.
{{< /callout >}}

**Example.** Solve $\ln(x^2)=\ln(2x+3)$.

**Solution.**

$$
\begin{array}{lrcl}
& \ln(x^{2}) &=& \ln(2x+3) \\[4pt]
\text{Use the one-to-one property of the logarithm.} & x^{2} &=& 2x+3 \\[4pt]
\text{Get zero on one side before factoring.} & x^{2}-2x-3 &=& 0 \\[4pt]
\text{Factor using FOIL.} & (x-3)(x+1) &=& 0 \\[4pt]
\text{If a product is zero, one of the factors must be zero.} & x-3=0 & \text{or} & x+1=0 \\[4pt]
\text{Solve for } x. & x=3 & \text{or} & x=-1
\end{array}
$$

**Analysis.** There are two solutions: $3$ or $-1$. The solution $-1$ is
negative, but it checks when substituted into the original equation
because the argument of the logarithm functions is still positive.

{{< fillin
  question="Solve $\ln(x^2)=\ln1$. Enter both solutions, separated by a comma."
  answer="1,-1"
  answerMode="unordered"
  answerDisplay="$x=1$ or $x=-1$"
  hint="Use the one-to-one property to get $x^2=1$, then check both roots against the original equation's domain."
>}}

## Solving Applied Problems Using Exponential and Logarithmic Equations

In previous sections, we learned the properties and rules for both
exponential and logarithmic functions. We have seen that any exponential
function can be written as a logarithmic function and vice versa. We have
used exponents to solve logarithmic equations and logarithms to solve
exponential equations. We are now ready to combine our skills to solve
equations that model real-world situations, whether the unknown is in an
exponent or in the argument of a logarithm.

One such application is in science, in calculating the time it takes for
half of the unstable material in a sample of a radioactive substance to
decay, called its **half-life**. The table below lists the half-life for
several of the more common radioactive substances.

| Substance | Use | Half-life |
| :--- | :--- | ---: |
| gallium-67 | nuclear medicine | 80 hours |
| cobalt-60 | manufacturing | 5.3 years |
| technetium-99m | nuclear medicine | 6 hours |
| americium-241 | construction | 432 years |
| carbon-14 | archeological dating | 5,730 years |
| uranium-235 | atomic power | 703,800,000 years |

We can see how widely the half-lives for these substances vary. Knowing
the half-life of a substance allows us to calculate the amount remaining
after a specified time. We can use the formula for radioactive decay:

$$
\begin{array}{lrcl}
& A(t) &=& A_0e^{\tfrac{\ln(0.5)}{T}t} \\[4pt]
& A(t) &=& A_0e^{\ln(0.5)\tfrac{t}{T}} \\[4pt]
& A(t) &=& A_0\bigl(e^{\ln(0.5)}\bigr)^{t/T} \\[4pt]
& A(t) &=& A_0\left(\tfrac{1}{2}\right)^{t/T}
\end{array}
$$

where

- $A_0$ is the amount initially present
- $T$ is the half-life of the substance
- $t$ is the time period over which the substance is studied
- $A(t)$ is the amount of the substance present after time $t$

**Example.** How long will it take for ten percent of a 1000-gram sample of
uranium-235 to decay?

**Solution.**

$$
\begin{array}{lrcl}
& y &=& 1000e^{\tfrac{\ln(0.5)}{703{,}800{,}000}t} \\[4pt]
\text{After 10\% decays, 900 grams are left.} & 900 &=& 1000e^{\tfrac{\ln(0.5)}{703{,}800{,}000}t} \\[4pt]
\text{Divide by 1000.} & 0.9 &=& e^{\tfrac{\ln(0.5)}{703{,}800{,}000}t} \\[4pt]
\text{Take ln of both sides.} & \ln(0.9) &=& \ln\!\left(e^{\tfrac{\ln(0.5)}{703{,}800{,}000}t}\right) \\[4pt]
\ln(e^M)=M & \ln(0.9) &=& \tfrac{\ln(0.5)}{703{,}800{,}000}t \\[4pt]
\text{Solve for } t. & t &=& 703{,}800{,}000\times\tfrac{\ln(0.9)}{\ln(0.5)}\ \text{years} \\[4pt]
& t &\approx& 106{,}979{,}777\ \text{years}
\end{array}
$$

**Analysis.** Ten percent of 1000 grams is 100 grams. If 100 grams decay,
the amount of uranium-235 remaining is 900 grams.

{{< fillin
  question="How long will it take before twenty percent of our 1000-gram sample of uranium-235 has decayed? Round to the nearest year."
  answer="226572993"
  answerForm="decimal"
  answerDisplay="$t\approx226{,}572{,}993$ years"
  hint="Use the same decay formula with $80\%$ remaining: $t=703{,}800{,}000\times\tfrac{\ln(0.8)}{\ln(0.5)}$."
>}}

## Key equations

| One-to-one property for exponential functions | For any algebraic expressions $S$ and $T$, and any positive real number $b\ne1$, $b^S=b^T$ if and only if $S=T$ |
| :--- | :--- |
| Definition of a logarithm | For any algebraic expression $S$ and positive real numbers $b$ and $c$, where $b\ne1$, $\log_b(S)=c$ if and only if $b^c=S$ |
| One-to-one property for logarithmic functions | For any algebraic expressions $S$ and $T$ and any positive real number $b$, where $b\ne1$, $\log_bS=\log_bT$ if and only if $S=T$ |

## Key concepts

- We can solve many exponential equations by using the rules of exponents
  to rewrite each side as a power with the same base, then use the fact
  that exponential functions are one-to-one to set the exponents equal to
  one another and solve for the unknown.
- When an exponential equation has bases that are explicitly shown as
  being equal, set the exponents equal to one another and solve for the
  unknown.
- When an exponential equation has bases that are not explicitly shown as
  being equal, rewrite each side of the equation as powers of the same
  base, then set the exponents equal to one another and solve for the
  unknown.
- When an exponential equation cannot be rewritten with a common base,
  solve by taking the logarithm of each side.
- We can solve exponential equations with base $e$ by applying the natural
  logarithm of both sides, because exponential and logarithmic functions
  are inverses of each other.
- After solving an exponential equation, check each solution in the
  original equation to find and eliminate any extraneous solutions.
- When given an equation of the form $\log_b(S)=c$, where $S$ is an
  algebraic expression, we can use the definition of a logarithm to
  rewrite the equation as the equivalent exponential equation $b^c=S$, and
  solve for the unknown.
- We can also use graphing to solve equations of the form $\log_b(S)=c$:
  we graph both $y=\log_b(S)$ and $y=c$ on the same coordinate plane and
  identify the solution as the $x$-value of the intersecting point.
- When given an equation of the form $\log_bS=\log_bT$, where $S$ and $T$
  are algebraic expressions, we can use the one-to-one property of
  logarithms to solve the equation $S=T$ for the unknown.
- Combining the skills learned in this and previous sections, we can solve
  equations that model real-world situations, whether the unknown is in an
  exponent or in the argument of a logarithm.

## Practice

### Use like bases to solve exponential equations

{{< fillin
  question="Solve $64\cdot4^{3x}=16$."
  answer="-1/3"
  answerDisplay="$x=-\tfrac{1}{3}$"
  hint="Write every term as a power of $2$, then set the exponents equal."
>}}

{{< fillin
  question="Solve $2^{-3n}\cdot\tfrac{1}{4}=2^{n+2}$."
  answer="-1"
  answerDisplay="$n=-1$"
  hint="Write $\tfrac{1}{4}$ as $2^{-2}$ and combine the exponents on the left before setting exponents equal."
>}}

{{< fillin
  question="Solve $\tfrac{36^{3b}}{36^{2b}}=216^{2-b}$."
  answer="6/5"
  answerDisplay="$b=\tfrac{6}{5}$"
  hint="Write $36$ and $216$ as powers of $6$, then set the exponents equal."
>}}

### Use logarithms to solve exponential equations

{{< fillin
  question="Solve $e^{-3k}+6=44$. Enter the exact answer."
  answer="-\frac{\ln 38}{3}"
  answerForm="exact-log"
  answerDisplay="$k=-\tfrac{\ln38}{3}$"
  hint="Isolate the exponential first: $e^{-3k}=38$, then take $\ln$ of both sides."
>}}

{{< fillin
  question="Solve $e^{2x}-e^x-132=0$. Enter the exact answer."
  answer="\ln 12"
  answerForm="exact-log"
  answerDisplay="$x=\ln12$"
  hint="Factor as a quadratic in $e^x$: $(e^x-12)(e^x+11)=0$, then reject the negative root."
>}}

{{< fillin
  question="Solve $e^{2x}-e^x-6=0$. Enter the exact answer."
  answer="\ln 3"
  answerForm="exact-log"
  answerDisplay="$x=\ln3$"
  hint="Factor as a quadratic in $e^x$: $(e^x-3)(e^x+2)=0$, then reject the negative root."
>}}

{{< fillin
  question="Solve $7e^{3x-5}+7.9=47$. Round to four decimal places."
  answer="2.2401"
  answerForm="decimal"
  answerDisplay="$x\approx2.2401$"
  hint="Isolate the exponential, $e^{3x-5}=\tfrac{47-7.9}{7}$, then take $\ln$ of both sides."
>}}

### Use the definition of a logarithm to solve logarithmic equations

{{< fillin
  question="Use the definition of a logarithm to rewrite $\log\left(\tfrac{1}{100}\right)=-2$ as an exponential equation."
  answer="10^{-2}=\frac{1}{100}"
  answerForm="exponential-form"
  answerDisplay="$10^{-2}=\tfrac{1}{100}$"
  hint="A statement $\log_b(S)=c$ is equivalent to $b^c=S$."
>}}

{{< fillin
  question="Solve $5\log_7 n=10$."
  answer="49"
  answerDisplay="$n=49$"
  hint="Divide by 5 to isolate $\log_7 n$, then rewrite in exponential form."
>}}

{{< fillin
  question="Solve $4+\log_2(9k)=2$."
  answer="1/36"
  answerDisplay="$k=\tfrac{1}{36}$"
  hint="Isolate $\log_2(9k)$ first, then rewrite in exponential form."
>}}

{{< fillin
  question="Solve $10-4\ln(9-8x)=6$."
  answer="(9-e)/8"
  answerDisplay="$x=\tfrac{9-e}{8}$"
  hint="Isolate $\ln(9-8x)$ first, then rewrite in exponential form and solve for $x$."
>}}

### Use the one-to-one property of logarithms to solve logarithmic equations

{{< fillin
  question="Solve $\ln(x^2-10)+\ln(9)=\ln(10)$. Enter both solutions, separated by a comma."
  answer="10/3,-10/3"
  answerMode="unordered"
  answerDisplay="$x=\pm\tfrac{10}{3}$"
  hint="Combine the left side into one logarithm, apply the one-to-one property to get $9(x^2-10)=10$, then check both roots against the domain $x^2-10>0$."
>}}

{{< fillin
  question="Solve $\ln(x)+\ln(x-3)=\ln(7x)$."
  answer="10"
  answerDisplay="$x=10$"
  hint="Combine the left side into one logarithm, apply the one-to-one property, and reject any root that fails the domain $x>3$."
>}}

{{< multiplechoice
  question="Solve $\log_{11}(-2x^2-7x)=\log_{11}(x-2)$."
  answer="No solution"
  hint="Set the arguments equal and solve the resulting quadratic, then check each root against the domain $x-2>0$."
>}}
No solution
x = -2+\sqrt5
x = -2-\sqrt5
{{< /multiplechoice >}}

{{< fillin
  question="Solve $\log_9(3-x)=\log_9(4x-8)$."
  answer="11/5"
  answerDisplay="$x=\tfrac{11}{5}$"
  hint="Set the arguments equal, $3-x=4x-8$, then check the root against both domain conditions $3-x>0$ and $4x-8>0$."
>}}

### Solve applied problems involving exponential and logarithmic equations

{{< fillin
  question="An account with an initial deposit of \$6{,}500 earns $7.25\%$ annual interest, compounded continuously. How much will the account be worth after 20 years? Round to the nearest cent."
  answer="27710.24"
  answerForm="decimal"
  answerDisplay="\$27{,}710.24"
  hint="Use $A=Pe^{rt}$ with $P=6{,}500$, $r=0.0725$, and $t=20$."
>}}

{{< fillin
  question="The population of a small town is modeled by the equation $P=1650e^{0.5t}$, where $t$ is measured in years. In approximately how many years will the town's population reach $20{,}000$? Round to the nearest year."
  answer="5"
  answerDisplay="about 5 years"
  hint="Solve $20{,}000=1650e^{0.5t}$ for $t$ by isolating the exponential and taking $\ln$ of both sides."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 4.6: Exponential and Logarithmic Equations](https://openstax.org/books/precalculus-2e/pages/4-6-exponential-and-logarithmic-equations) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the corequisite-skills review subsection (module m49366's "Objective 1"/"Objective 2" intermediate-algebra refresher, with its own separate Learning Objectives and Practice Makes Perfect sets) that precedes this section's actual content in the pinned module, since it duplicates intermediate-algebra material outside this section's own five learning objectives; omitted the decorative photograph of wild rabbits in Australia, which carries no mathematics; recreated the "they do not cross" graph of $y=3^{x+1}$ and $y=-2$ and the graph of $y=\ln x$ and $y=3$ crossing near $(e^3,3)$ as accessible generated figures from their exact equations; converted the practice problems ("Try Its") into interactive exercises with instant feedback, a multiple choice for each "no solution" case ($2^x=-100$; $\log_{11}(-2x^2-7x)=\log_{11}(x-2)$), and a fillin with `answerMode="unordered"` for each of the two-solution cases ($\ln(x^2)=\ln1$; $\ln(x^2-10)+\ln(9)=\ln(10)$); adapted two Try Its ($2^x=3^{x+1}$ and $3e^{0.5t}=11$) from an exact-quotient-of-logarithms response, which the grader's exact-log form cannot represent because both logarithms' arguments are themselves fractions, into a "round to four decimal places" decimal response instead; and adapted fourteen selected end-of-section exercises — three like-base equations, three logarithm-based exponential equations (two exact, one decimal), four solved with the definition of a logarithm (one converted to exponential form), four solved with the one-to-one property of logarithms (including both no-solution and two-solution cases), and two applied problems (continuous compounding, exponential population growth) — into fourteen interactive components in a closing Practice block, one group per objective. The pinned CNXML's own accessibility `summary` attribute on the half-life table (module m49366, table `Table_04_06_001`) states carbon-14's half-life as "5,715 years," while the table's own visible cell — and the printed PDF — both give "5,730 years" (the commonly cited value); this page follows the visible table and the PDF rather than the inconsistent summary text.</small>
