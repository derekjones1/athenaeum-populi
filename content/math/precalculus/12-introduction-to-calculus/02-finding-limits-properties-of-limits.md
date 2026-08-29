---
title: "Finding Limits: Properties of Limits"
description: >-
  Evaluating limits algebraically with the properties of limits for sums,
  differences, products, polynomials, powers, roots, and quotients —
  including factoring, finding a least common denominator, and rationalizing
  with a conjugate — adapted from OpenStax Precalculus 2e, Section 12.2.
source_section: "12.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the limit of a sum, a difference, and a product
- Find the limit of a polynomial
- Find the limit of a power or a root
- Find the limit of a quotient
{{< /callout >}}

Consider the rational function

$$f(x)=\frac{x^2-6x-7}{x-7}$$

The function can be factored as follows:

$$f(x)=\frac{(x-7)(x+1)}{x-7},\text{ which gives us }f(x)=x+1,\ x\ne7.$$

Does this mean the function $f$ is the same as the function $g(x)=x+1$?

The answer is no. Function $f$ does not have $x=7$ in its domain, but $g$ does. Graphically, we observe there is a hole in the graph of $f(x)$ at $x=7$, as shown below, and no such hole in the graph of $g(x)$, as shown after it.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line of slope 1 through the point (0, 1), continuing through the plotted grid, drawn with an open circle at the point (7, 8) where the function is undefined.","xMin":-2,"xMax":12,"yMin":-2,"yMax":12,"unit":24,"gridStep":1,"tickStep":2,"tickLabels":true,"lines":[{"slope":1,"intercept":1}],"points":[{"at":[7,8],"open":true}]}
{{< /apfigure >}}

*The graph of function $f$ contains a break at $x=7$ and is therefore not continuous at $x=7$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line of slope 1 through the point (0, 1), continuing through the plotted grid with no gaps.","xMin":-2,"xMax":12,"yMin":-2,"yMax":12,"unit":24,"gridStep":1,"tickStep":2,"tickLabels":true,"lines":[{"slope":1,"intercept":1}]}
{{< /apfigure >}}

*The graph of function $g$ is continuous.*

So, do these two different functions also have different limits as $x$ approaches 7?

Not necessarily. Remember, in determining a **limit** of a function as $x$ approaches $a$, what matters is whether the output approaches a real number as we get close to $x=a$. The existence of a limit does not depend on what happens when $x$ equals $a$.

Look again at the two graphs above. Notice that in both graphs, as $x$ approaches 7, the output values approach 8. This means

$$\lim\limits_{x\to7}f(x)=\lim\limits_{x\to7}g(x).$$

Remember that when determining a limit, the concern is what occurs near $x=a$, not at $x=a$. In this section, we will use a variety of methods, such as rewriting functions by factoring, to evaluate the limit. These methods will give us formal verification for what we formerly accomplished by intuition.

### Finding the Limit of a Sum, a Difference, and a Product

Graphing a function or exploring a table of values to determine a limit can be cumbersome and time-consuming. When possible, it is more efficient to use the **properties of limits**, which is a collection of theorems for finding limits.

Knowing the properties of limits allows us to compute limits directly. We can add, subtract, multiply, and divide the limits of functions as if we were performing the operations on the functions themselves to find the limit of the result. Similarly, we can find the limit of a function raised to a power by raising the limit to that power. We can also find the limit of the root of a function by taking the root of the limit. Using these operations on limits, we can find the limits of more complex functions by finding the limits of their simpler component functions.

{{< callout type="info" >}}
  **Properties of Limits.** Let $a$, $k$, $A$, and $B$ represent real numbers, and $f$ and $g$ be functions, such that $\lim_{x\to a}f(x)=A$ and $\lim_{x\to a}g(x)=B$. For limits that exist and are finite, the properties of limits are summarized below.

  | Property | Formula |
  | :--- | :--- |
  | Constant, $k$ | $\lim_{x\to a}k=k$ |
  | Constant times a function | $\lim_{x\to a}[k\cdot f(x)]=k\lim_{x\to a}f(x)=kA$ |
  | Sum of functions | $\lim_{x\to a}[f(x)+g(x)]=\lim_{x\to a}f(x)+\lim_{x\to a}g(x)=A+B$ |
  | Difference of functions | $\lim_{x\to a}[f(x)-g(x)]=\lim_{x\to a}f(x)-\lim_{x\to a}g(x)=A-B$ |
  | Product of functions | $\lim_{x\to a}[f(x)\cdot g(x)]=\lim_{x\to a}f(x)\cdot\lim_{x\to a}g(x)=A\cdot B$ |
  | Quotient of functions | $\lim_{x\to a}\tfrac{f(x)}{g(x)}=\tfrac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}=\tfrac{A}{B},\ B\ne0$ |
  | Function raised to an exponent | $\lim_{x\to a}[f(x)]^n=[\lim_{x\to a}f(x)]^n=A^n$, where $n$ is a positive integer |
  | $n$th root of a function, where $n$ is a positive integer | $\lim_{x\to a}\sqrt[n]{f(x)}=\sqrt[n]{\lim_{x\to a}[f(x)]}=\sqrt[n]{A}$ |
  | Polynomial function | $\lim_{x\to a}p(x)=p(a)$ |
{{< /callout >}}

**Example.** Evaluate $\lim_{x\to3}(2x+5)$.

**Solution.**

$$
\begin{array}{ll}
\lim\limits_{x\to3}(2x+5)=\lim\limits_{x\to3}(2x)+\lim\limits_{x\to3}(5) & \text{Sum of functions property} \\
=2\lim\limits_{x\to3}(x)+\lim\limits_{x\to3}(5) & \text{Constant times a function property} \\
=2(3)+5 & \text{Evaluate} \\
=11 &
\end{array}
$$

{{< fillin
  question="Evaluate the following limit: $\lim_{x\to-12}(-2x+2)$."
  answer="26"
  answerForm="decimal"
  answerDisplay="$26$"
  hint="Split the limit into a sum, pull the constant $-2$ out of the first term, then evaluate each piece at $x=-12$."
>}}

### Finding the Limit of a Polynomial

Not all functions or their limits involve simple addition, subtraction, or multiplication. Some may include polynomials. Recall that a polynomial is an expression consisting of the sum of two or more terms, each of which consists of a constant and a variable raised to a nonnegative integral power. To find the limit of a polynomial function, we can find the limits of the individual terms of the function, and then add them together. Also, the limit of a polynomial function as $x$ approaches $a$ is equivalent to simply evaluating the function for $a$.

{{< callout type="info" >}}
  **How To: Given a function containing a polynomial, find its limit.**

  1. Use the properties of limits to break up the polynomial into individual terms.
  2. Find the limits of the individual terms.
  3. Add the limits together.
  4. Alternatively, evaluate the function for $a$.
{{< /callout >}}

**Example.** Evaluate $\lim_{x\to3}(5x^2)$.

**Solution.**

$$
\begin{array}{ll}
\lim\limits_{x\to3}(5x^2)=5\lim\limits_{x\to3}(x^2) & \text{Constant times a function property} \\
=5(3^2) & \text{Function raised to an exponent property} \\
=45 &
\end{array}
$$

{{< fillin
  question="Evaluate $\lim_{x\to4}(x^3-5)$."
  answer="59"
  answerForm="decimal"
  answerDisplay="$59$"
  hint="Break the limit into two terms, apply the exponent property to the cubic term, then evaluate at $x=4$."
>}}

**Example.** Evaluate $\lim_{x\to5}(2x^3-3x+1)$.

**Solution.**

$$
\begin{array}{ll}
\lim\limits_{x\to5}(2x^3-3x+1)=\lim\limits_{x\to5}(2x^3)-\lim\limits_{x\to5}(3x)+\lim\limits_{x\to5}(1) & \text{Sum of functions} \\
=2\lim\limits_{x\to5}(x^3)-3\lim\limits_{x\to5}(x)+\lim\limits_{x\to5}(1) & \text{Constant times a function} \\
=2(5^3)-3(5)+1 & \text{Function raised to an exponent} \\
=236 & \text{Evaluate}
\end{array}
$$

{{< fillin
  question="Evaluate the following limit: $\lim_{x\to-1}(x^4-4x^3+5)$."
  answer="10"
  answerForm="decimal"
  answerDisplay="$10$"
  hint="Split the polynomial into its three terms and evaluate each at $x=-1$, then add."
>}}

### Finding the Limit of a Power or a Root

When a limit includes a power or a root, we need another property to help us evaluate it. The square of the limit of a function equals the limit of the square of the function; the same goes for higher powers. Likewise, the square root of the limit of a function equals the limit of the square root of the function; the same holds true for higher roots.

**Example.** Evaluate $\lim_{x\to2}(3x+1)^5$.

**Solution.** We will take the limit of the function as $x$ approaches 2 and raise the result to the 5th power.

$$
\begin{array}{ll}
\lim\limits_{x\to2}(3x+1)^5=\left(\lim\limits_{x\to2}(3x+1)\right)^5 & \\
=(3(2)+1)^5 & \\
=7^5 & \\
=16{,}807 &
\end{array}
$$

{{< fillin
  question="Evaluate the following limit: $\lim_{x\to-4}(10x+36)^3$."
  answer="-64"
  answerForm="decimal"
  answerDisplay="$-64$"
  hint="Take the limit of the base at $x=-4$ first, then raise that number to the third power."
>}}

{{< callout type="info" >}}
  **Q&A.** *If we can't directly apply the properties of a limit, for example in $\lim_{x\to2}\left(\tfrac{x^2+6x+8}{x-2}\right)$, can we still determine the limit of the function as $x$ approaches $a$?*

  Yes. Some functions may be algebraically rearranged so that one can evaluate the limit of a simplified equivalent form of the function.
{{< /callout >}}

### Finding the Limit of a Quotient

Finding the limit of a function expressed as a quotient can be more complicated. We often need to rewrite the function algebraically before applying the properties of a limit. If the denominator evaluates to 0 when we apply the properties of a limit directly, we must rewrite the quotient in a different form. One approach is to write the quotient in factored form and simplify.

{{< callout type="info" >}}
  **How To: Given the limit of a function in quotient form, use factoring to evaluate it.**

  1. Factor the numerator and denominator completely.
  2. Simplify by dividing any factors common to the numerator and denominator.
  3. Evaluate the resulting limit, remembering to use the correct domain.
{{< /callout >}}

**Example.** Evaluate $\lim_{x\to2}\left(\tfrac{x^2-6x+8}{x-2}\right)$.

**Solution.** Factor where possible, and simplify.

$$
\begin{array}{ll}
\lim\limits_{x\to2}\left(\tfrac{x^2-6x+8}{x-2}\right)=\lim\limits_{x\to2}\left(\tfrac{(x-2)(x-4)}{x-2}\right) & \text{Factor the numerator} \\
=\lim\limits_{x\to2}(x-4) & \text{Cancel the common factors} \\
=2-4=-2 &
\end{array}
$$

**Analysis.** When the limit of a rational function cannot be evaluated directly, factored forms of the numerator and denominator may simplify to a result that can be evaluated. Notice, the function $f(x)=\tfrac{x^2-6x+8}{x-2}$ is equivalent to the function $f(x)=x-4,\ x\ne2$. Notice that the limit exists even though the function is not defined at $x=2$.

{{< fillin
  question="Evaluate the following limit: $\lim_{x\to7}\left(\tfrac{x^2-11x+28}{7-x}\right)$."
  answer="-3"
  answerForm="decimal"
  answerDisplay="$-3$"
  hint="Factor the numerator as $(x-4)(x-7)$ and rewrite $7-x$ as $-(x-7)$ before canceling."
>}}

**Example.** Evaluate $\lim_{x\to5}\left(\tfrac{\tfrac1x-\tfrac15}{x-5}\right)$.

**Solution.** Find the LCD for the denominators of the two terms in the numerator, and convert both fractions to have the LCD as their denominator.

$$
\begin{array}{ll}
\lim\limits_{x\to5}\left(\tfrac{\tfrac1x-\tfrac15}{x-5}\right)=\lim\limits_{x\to5}\left(\tfrac{5x\left(\tfrac1x-\tfrac15\right)}{5x(x-5)}\right) & \text{Multiply the numerator and denominator by the LCD} \\
=\lim\limits_{x\to5}\left(\tfrac{5x\left(\tfrac1x\right)-5x\left(\tfrac15\right)}{5x(x-5)}\right) & \text{Apply the distributive property} \\
=\lim\limits_{x\to5}\left(\tfrac{5-x}{5x(x-5)}\right) & \text{Simplify} \\
=\lim\limits_{x\to5}\left(\tfrac{-1(x-5)}{5x(x-5)}\right) & \text{Factor the numerator} \\
=\lim\limits_{x\to5}\left(-\tfrac{1}{5x}\right) & \text{Cancel the common factor} \\
=-\tfrac{1}{5(5)} & \text{Evaluate for } x=5 \\
=-\tfrac{1}{25} &
\end{array}
$$

**Analysis.** When determining the limit of a rational function that has terms added or subtracted in either the numerator or denominator, the first step is to find the common denominator of the added or subtracted terms; then, convert both terms to have that denominator, or simplify the rational function by multiplying numerator and denominator by the least common denominator. Then check to see if the resulting numerator and denominator have any common factors.

{{< fillin
  question="Evaluate $\lim_{x\to-5}\left(\tfrac{\tfrac15+\tfrac1x}{10+2x}\right)$. Enter the answer as a fraction."
  answer="-\frac{1}{50}"
  answerForm="fraction"
  answerDisplay="$-\tfrac{1}{50}$"
  hint="Combine the numerator over the LCD $5x$, factor $10+2x$ as $2(x+5)$, and cancel the common factor of $x+5$."
>}}

{{< callout type="info" >}}
  **How To: Given a limit of a function containing a root, use a conjugate to evaluate.**

  1. If the quotient as given is not in indeterminate ($\tfrac00$) form, evaluate directly.
  2. Otherwise, rewrite the sum (or difference) of two quotients as a single quotient, using the least common denominator (LCD).
  3. If the numerator includes a root, rationalize the numerator; multiply the numerator and denominator by the conjugate of the numerator. Recall that $a\pm\sqrt{b}$ are conjugates.
  4. Simplify.
  5. Evaluate the resulting limit.
{{< /callout >}}

**Example.** Evaluate $\lim_{x\to0}\left(\tfrac{\sqrt{25-x}-5}{x}\right)$.

**Solution.**

$$
\begin{array}{ll}
\lim\limits_{x\to0}\left(\tfrac{\sqrt{25-x}-5}{x}\right)=\lim\limits_{x\to0}\left(\tfrac{\sqrt{25-x}-5}{x}\cdot\tfrac{\sqrt{25-x}+5}{\sqrt{25-x}+5}\right) & \text{Multiply the numerator and denominator by the conjugate} \\
=\lim\limits_{x\to0}\left(\tfrac{(25-x)-25}{x(\sqrt{25-x}+5)}\right) & \text{Multiply: }(\sqrt{25-x}-5)(\sqrt{25-x}+5)=(25-x)-25 \\
=\lim\limits_{x\to0}\left(\tfrac{-x}{x(\sqrt{25-x}+5)}\right) & \text{Combine like terms} \\
=\lim\limits_{x\to0}\left(\tfrac{-1}{\sqrt{25-x}+5}\right) & \text{Simplify }\tfrac{-x}{x}=-1 \\
=\tfrac{-1}{\sqrt{25-0}+5} & \text{Evaluate} \\
=\tfrac{-1}{5+5}=-\tfrac{1}{10} &
\end{array}
$$

**Analysis.** When determining a limit of a function with a root as one of two terms where we cannot evaluate directly, think about multiplying the numerator and denominator by the conjugate of the terms.

{{< fillin
  question="Evaluate the following limit: $\lim_{h\to0}\left(\tfrac{\sqrt{16-h}-4}{h}\right)$. Enter the answer as a fraction."
  answer="-\frac{1}{8}"
  answerForm="fraction"
  answerDisplay="$-\tfrac{1}{8}$"
  hint="Multiply numerator and denominator by the conjugate $\sqrt{16-h}+4$, then simplify before letting $h\to0$."
>}}

**Example.** Evaluate $\lim_{x\to4}\left(\tfrac{4-x}{\sqrt{x}-2}\right)$.

**Solution.**

$$
\begin{array}{ll}
\lim\limits_{x\to4}\left(\tfrac{4-x}{\sqrt{x}-2}\right)=\lim\limits_{x\to4}\left(\tfrac{(2+\sqrt{x})(2-\sqrt{x})}{\sqrt{x}-2}\right) & \text{Factor} \\
=\lim\limits_{x\to4}\left(\tfrac{(2+\sqrt{x})(2-\sqrt{x})}{-(2-\sqrt{x})}\right) & \text{Factor }-1\text{ out of the denominator; simplify} \\
=\lim\limits_{x\to4}-(2+\sqrt{x}) & \text{Evaluate} \\
=-(2+\sqrt4) & \\
=-4 &
\end{array}
$$

**Analysis.** Multiplying by a conjugate would expand the numerator; look instead for factors in the numerator. Four is a perfect square so that the numerator is in the form $a^2-b^2$ and may be factored as $(a+b)(a-b)$.

{{< fillin
  question="Evaluate the following limit: $\lim_{x\to3}\left(\tfrac{x-3}{\sqrt{x}-\sqrt{3}}\right)$."
  answer="2\sqrt{3}"
  answerForm="exact-radical"
  answerDisplay="$2\sqrt{3}$"
  hint="Multiply numerator and denominator by $\sqrt{x}+\sqrt{3}$ so the denominator becomes $x-3$, then cancel."
>}}

{{< callout type="info" >}}
  **How To: Given a quotient with absolute values, evaluate its limit.**

  1. Try factoring or finding the LCD.
  2. If the limit cannot be found, choose several values close to and on either side of the input where the function is undefined.
  3. Use the numeric evidence to estimate the limits on both sides.
{{< /callout >}}

**Example.** Evaluate $\lim_{x\to7}\tfrac{|x-7|}{x-7}$.

**Solution.** The function is undefined at $x=7$, so we will try values close to 7 from the left and the right.

Left-hand limit: $\tfrac{|6.9-7|}{6.9-7}=\tfrac{|6.99-7|}{6.99-7}=\tfrac{|6.999-7|}{6.999-7}=-1$

Right-hand limit: $\tfrac{|7.1-7|}{7.1-7}=\tfrac{|7.01-7|}{7.01-7}=\tfrac{|7.001-7|}{7.001-7}=1$

Since the left- and right-hand limits are not equal, there is no limit.

{{< multiplechoice
  question="Evaluate $\lim_{x\to6^+}\tfrac{6-x}{|x-6|}$ (the right-hand limit as $x$ approaches $6$)."
  answer="-1"
  hint="For $x$ slightly greater than $6$, $x-6>0$, so $|x-6|=x-6$; simplify the resulting quotient."
>}}
1
-1
0
does not exist
{{< /multiplechoice >}}

{{< callout type="info" >}}
**Media.** Access the following online resource for additional instruction and practice with properties of limits.
{{< /callout >}}

## Key concepts

- The properties of limits can be used to perform operations on the limits of functions rather than the functions themselves.
- The limit of a polynomial function can be found by finding the sum of the limits of the individual terms.
- The limit of a function that has been raised to a power equals the same power of the limit of the function. Another method is direct substitution.
- The limit of the root of a function equals the corresponding root of the limit of the function.
- One way to find the limit of a function expressed as a quotient is to write the quotient in factored form and simplify.
- Another method of finding the limit of a complex fraction is to find the LCD.
- A limit containing a function containing a root may be evaluated using a conjugate.
- The limits of some functions expressed as quotients can be found by factoring.
- One way to evaluate the limit of a quotient containing absolute values is by using numeric evidence. Setting it up piecewise can also be useful.

## Practice

### Find the limit of a sum, a difference, and a product

{{< fillin
  question="For the limit $\lim_{x\to3}(2x+5)=11$, worked out using the Sum of functions and Constant times a function properties, identify $a$."
  answer="3"
  answerForm="decimal"
  answerDisplay="$a=3$"
  hint="$a$ is the value $x$ approaches, printed under the $\lim$."
>}}

{{< fillin
  question="For the limit $\lim_{x\to3}(2x+5)=11$, identify $f(x)$."
  answer="2x+5"
  answerDisplay="$f(x)=2x+5$"
  hint="$f(x)$ is the expression inside the limit, before any property is applied."
>}}

{{< fillin
  question="For the limit $\lim_{x\to3}(2x+5)=11$, identify $L$, the value of the limit."
  answer="11"
  answerForm="decimal"
  answerDisplay="$L=11$"
  hint="$L$ is the number the limit evaluates to."
>}}

{{< multiplechoice
  question="What does it mean to say the limit of $f(x)$, as $x$ approaches $c$, is undefined?"
  answer="The output values increase or decrease without bound as $x$ approaches $c$, or the left-hand and right-hand limits are not equal"
  hint="Think of the two separate ways a limit can fail to settle on one finite number."
>}}
$f(c)$ does not exist
The function is discontinuous at every point near $c$
The output values increase or decrease without bound as $x$ approaches $c$, or the left-hand and right-hand limits are not equal
$x=c$ is not in the domain of $f$
{{< /multiplechoice >}}

### Find the limit of a polynomial

{{< multiplechoice
  question="Give an example of a type of function $f$ whose limit, as $x$ approaches $a$, is $f(a)$."
  answer="A polynomial function"
  hint="Which family of functions can always be evaluated by direct substitution?"
>}}
A rational function whose denominator is zero at $x=a$
A function with a jump discontinuity at $x=a$
A piecewise function with two different branch formulas
A polynomial function
{{< /multiplechoice >}}

{{< fillin
  question="Let $f(x)=\begin{cases} 2x^2+2x+1, & x\le0 \\ x-3, & x>0 \end{cases}$. Find $\lim_{x\to0^+}f(x)$."
  answer="-3"
  answerForm="decimal"
  answerDisplay="$-3$"
  hint="For $x>0$, $f(x)=x-3$; evaluate this polynomial branch at $x=0$."
>}}

{{< multiplechoice
  question="For $f(x)=\begin{cases} 2x^2+2x+1, & x\le0 \\ x-3, & x>0 \end{cases}$, what is $\lim_{x\to0}f(x)$?"
  answer="The limit does not exist because the left-hand and right-hand limits are not equal"
  hint="Evaluate each polynomial branch at $x=0$ and compare the two one-sided limits."
>}}
The limit equals $f(0)$
The limit does not exist because the left-hand and right-hand limits are not equal
The limit does not exist because the function is unbounded near $x=0$
The limit exists and equals the value of the $x>0$ branch at $x=0$
{{< /multiplechoice >}}

### Find the limit of a power or a root

{{< fillin
  question="Given $\lim_{x\to c}f(x)=3$ and $\lim_{x\to c}g(x)=5$, evaluate $\lim_{x\to c}\left[2f(x)+\sqrt{g(x)}\right]$."
  answer="6+\sqrt{5}"
  answerForm="exact"
  answerDisplay="$6+\sqrt{5}$"
  hint="Apply the constant-multiple and sum properties to $2f(x)$, and the root property to $\sqrt{g(x)}$, then substitute the given limits."
>}}

{{< fillin
  question="For the limit $\lim_{x\to2}(3x+1)^5=16{,}807$, identify $a$."
  answer="2"
  answerForm="decimal"
  answerDisplay="$a=2$"
  hint="$a$ is the value $x$ approaches, printed under the $\lim$."
>}}

{{< fillin
  question="For the limit $\lim_{x\to2}(3x+1)^5=16{,}807$, identify $f(x)$, the function whose limit is being taken."
  answer="(3x+1)^5"
  answerDisplay="$f(x)=(3x+1)^5$"
  hint="$f(x)$ is the entire expression inside the limit, including the power."
>}}

{{< fillin
  question="For the limit $\lim_{x\to2}(3x+1)^5=16{,}807$, identify $L$, the value of the limit."
  answer="16807"
  answerForm="decimal"
  answerDisplay="$16{,}807$"
  hint="$L$ is the number the limit evaluates to."
>}}

### Find the limit of a quotient

{{< fillin
  question="Evaluate: $\lim_{x\to3}\left(\tfrac{x^2-9}{x-3}\right)$."
  answer="6"
  answerForm="decimal"
  answerDisplay="$6$"
  hint="Factor the numerator as a difference of squares and cancel the common factor of $x-3$."
>}}

{{< fillin
  question="Evaluate: $\lim_{x\to\frac32}\left(\tfrac{6x^2-17x+12}{2x-3}\right)$. Enter the answer as a fraction."
  answer="\frac{1}{2}"
  answerForm="fraction"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Factor the numerator so that $2x-3$ is one of its factors, then cancel and evaluate."
>}}

{{< multiplechoice
  question="Evaluate: $\lim_{x\to3}\left(\tfrac{x^2+2x-3}{x-3}\right)$."
  answer="The limit does not exist because the expression is unbounded as $x$ approaches $3$"
  hint="Check whether the numerator is zero at $x=3$ before trying to cancel anything with the denominator."
>}}
The limit equals $12$
The limit does not exist because the left-hand and right-hand limits are not equal but both finite
The limit equals $0$
The limit does not exist because the expression is unbounded as $x$ approaches $3$
{{< /multiplechoice >}}

{{< fillin
  question="For $f(x)=x^2+4x-100$, find the average rate of change $\tfrac{f(x+h)-f(x)}{h}$."
  answer="2x+h+4"
  answerForm="polynomial"
  answerDisplay="$2x+h+4$"
  hint="Expand $f(x+h)$, subtract $f(x)$, then divide every term by $h$."
>}}

{{< fillin
  question="For $f(x)=\tfrac1x$, find the average rate of change $\tfrac{f(x+h)-f(x)}{h}$."
  answer="\frac{-1}{x(x+h)}"
  answerForm="reduced-fraction"
  answerDisplay="$\tfrac{-1}{x(x+h)}$"
  hint="Combine $\tfrac{1}{x+h}-\tfrac1x$ over the common denominator $x(x+h)$ before dividing by $h$."
>}}

{{< multiplechoice
  question="For $f(x)=\sqrt{x}$, find the average rate of change $\tfrac{f(x+h)-f(x)}{h}$."
  answer="$\tfrac{1}{\sqrt{x+h}+\sqrt{x}}$"
  hint="Multiply the numerator $\sqrt{x+h}-\sqrt{x}$ by its conjugate over itself, then simplify before dividing by $h$."
>}}
$\tfrac{1}{\sqrt{x+h}+\sqrt{x}}$
$\tfrac{-1}{\sqrt{x+h}+\sqrt{x}}$
$\tfrac{1}{2\sqrt{x}}$
$\sqrt{x+h}-\sqrt{x}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which equation could be represented by the graph below?"
  answer="$f(x)=\tfrac{x^2+5x+6}{x+3}$"
  hint="The graph is the line $y=x+2$ with a hole at $x=-3$; a rational function whose numerator and denominator share the factor $x+3$ is undefined exactly there."
>}}
$f(x)=\tfrac{x^2+x-6}{x-2}$
$f(x)=x+2$
$f(x)=\tfrac{x^2+5x+6}{x+3}$
$f(x)=\tfrac{x^2+5x+6}{x+2}$
{{< /multiplechoice >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line rising left to right through the plotted grid, drawn with an open circle at the point (−3, −1) where the function is undefined.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":40,"gridStep":1,"tickStep":1,"tickLabels":true,"lines":[{"slope":1,"intercept":2}],"points":[{"at":[-3,-1],"open":true}]}
{{< /apfigure >}}

For the following exercise, refer to the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A straight ray starting at a filled point at the origin and rising to the right through the first quadrant with slope one half, drawn only for x greater than or equal to 0, ending in an arrow.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":32,"gridStep":1,"tickStep":1,"tickLabels":true,"segments":[{"from":[0,0],"to":[3.6,1.8],"arrows":"end"}],"points":[{"at":[0,0]}]}
{{< /apfigure >}}

{{< multiplechoice
  question="What is the left-hand limit of the function graphed above as $x$ approaches 0?"
  answer="Does not exist; the function has no values for $x<0$"
  hint="Look at how far left the graph is actually drawn."
>}}
Does not exist; the function has no values for $x<0$
$0$
$1$
Does not exist because the left- and right-hand limits disagree
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 12.2: Finding Limits: Properties of Limits](https://openstax.org/books/precalculus-2e/pages/12-2-finding-limits-properties-of-limits) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated Figures 1 and 2 (the hole in $f(x)=\tfrac{x^2-6x-7}{x-7}$ at $x=7$ and the continuous line $g(x)=x+1$) as accessible spec-first SVGs, each an exact line with slope $1$ and intercept $1$, checked against the rendered PDF, page 1188 (true PDF index 1198). The pinned CNXML's `<solution>` for Example 6 ("Evaluating the Limit of a Quotient by Finding the LCD") is a single JPEG image of the worked steps rather than transcribable text or MathML, so its seven-row step table was transcribed instead from the rendered PDF, page 1192 (true PDF index 1202), and independently re-derived; the numeric result, $-\tfrac{1}{25}$, matches both the image and the independent derivation. Omitted the "Media" callout's one external video link, matching house precedent elsewhere in this book. Every "evaluate the limit" fill-in declares an `answerForm` (`decimal` for an integer or terminating-decimal result, `fraction` for a fraction result with "enter the answer as a fraction" stated in the question, `exact-radical` for a bare radical result) because the grading engine evaluates a retyped `\lim` expression rather than merely comparing it to the printed span — confirmed by replaying each printed limit span against its own key — and a limit whose value is "does not exist" is a `multiplechoice` throughout, since MathLive cannot type words and the engine cannot grade text. One-sided limits (the Try It following Example 9, and the Practice item reading the section's third recreated graph) are asked in words rather than with the unparseable $\lim_{x\to a^+}$ notation, per this book's established convention. The two Verbal exercises with solutions (on what an undefined limit means, and on which function type satisfies $\lim_{x\to a}f(x)=f(a)$) were adapted into multiple-choice questions for the "sum, difference, and product" and "polynomial" objective groups, since the Algebraic exercise set turned out, on inspection, to contain no plain sum/difference/product or pure-polynomial limit beyond what the worked examples already cover — every numbered Algebraic exercise with a solution is a rational-function quotient. The "sum, difference, and product" and "power or root" groups are filled out with an "identify $a$, $f(x)$, and $L$" notation-reading triple of fill-ins apiece, drawn from Examples 1 and 4 of this section — the fallback this book's authoring playbook names for a thin objective group with no dedicated source exercise. The "polynomial" objective's group repurposes Algebraic exercises 37 and 39 (the piecewise function's right-hand and two-sided limits at $x=0$), whose branches are themselves polynomials evaluated by direct substitution. Thirteen selected end-of-section Algebraic, Graphical, and Verbal exercises with a printed official answer were adapted into interactive Practice components across the four objective groups; the two Graphical exercises without a solution in the Answer Key (exercise 54, "find an equation represented by" the removable-discontinuity graph at $(2,3)$, and exercise 56, the same graph's right-hand limit) were independently derivable but omitted per this book's exercise-selection rule, which uses only items whose answer is visibly present in the source. The Practice item for $f(x)=\sqrt{x}$'s average rate of change is a multiple choice, since every declared `answerForm` fails open on the retyped difference-quotient span — confirmed by replay — and its correct option, $\tfrac{1}{\sqrt{x+h}+\sqrt{x}}$, corrects a sign error in the pinned CNXML's own printed key, $\tfrac{-1}{\sqrt{x+h}+\sqrt{x}}$ (the difference quotient of $\sqrt{x}$ rationalizes to $\tfrac{h}{h(\sqrt{x+h}+\sqrt{x})}$, which is positive); the distractor options include the source's own printed (incorrect) sign. The Graphical exercise "find an equation that could be represented by" the graph with a hole at $(-3,-1)$ is a multiple choice rather than a fill-in, because the grading engine proves a rational function equal to its reduced form — $x+2$, and even a quotient whose removable hole sits at a different $x$, grade equal to the keyed $\tfrac{x^2+5x+6}{x+3}$ — so no fill-in could distinguish the answer from a function without the hole.</small>
