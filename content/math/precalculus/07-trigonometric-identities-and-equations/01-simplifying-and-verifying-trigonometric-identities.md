---
title: Simplifying and Verifying Trigonometric Identities
description: >-
  Verifying trigonometric identities with the Pythagorean, even-odd,
  reciprocal, and quotient identities, and simplifying trigonometric
  expressions with algebraic techniques such as factoring, substitution, and
  the difference of squares — adapted from OpenStax Precalculus 2e, Section
  7.1.
source_section: "7.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Verify the fundamental trigonometric identities
- Simplify trigonometric expressions using algebra and the identities
{{< /callout >}}

In espionage movies, we see international spies with multiple passports, each claiming a different identity. However, we know that each of those passports represents the same person. The trigonometric identities act in a similar manner to multiple passports—there are many ways to represent the same trigonometric expression. Just as a spy will choose an Italian passport when traveling to Italy, we choose the identity that applies to the given scenario when solving a trigonometric equation.

In this section, we will begin an examination of the fundamental trigonometric identities, including how we can verify them and how we can use them to simplify trigonometric expressions.

## Verifying the Fundamental Trigonometric Identities

Identities enable us to simplify complicated expressions. They are the basic tools of trigonometry used in solving trigonometric equations, just as factoring, finding common denominators, and using special formulas are the basic tools of solving algebraic equations. In fact, we use algebraic techniques constantly to simplify trigonometric expressions. Basic properties and formulas of algebra, such as the difference of squares formula and the perfect squares formula, will simplify the work involved with trigonometric expressions and equations. We already know that all of the trigonometric functions are related because they all are defined in terms of the unit circle. Consequently, any trigonometric identity can be written in many ways.

To verify the trigonometric identities, we usually start with the more complicated side of the equation and essentially rewrite the expression until it has been transformed into the same expression as the other side of the equation. Sometimes we have to factor expressions, expand expressions, find common denominators, or use other algebraic strategies to obtain the desired result. In this first section, we will work with the fundamental identities: the **Pythagorean Identities**, the even-odd identities, the reciprocal identities, and the quotient identities.

We will begin with the **Pythagorean Identities**, shown below, which are equations involving trigonometric functions based on the properties of a right triangle. We have already seen and used the first of these identities, but now we will also use additional identities.

{{< callout type="info" >}}
  **Pythagorean Identities.**

  $$
  \begin{array}{l}
  \sin^2\theta+\cos^2\theta=1 \\
  1+\cot^2\theta=\csc^2\theta \\
  1+\tan^2\theta=\sec^2\theta
  \end{array}
  $$
{{< /callout >}}

The second and third identities can be obtained by manipulating the first. The identity $1+\cot^2\theta=\csc^2\theta$ is found by rewriting the left side of the equation in terms of sine and cosine.

Prove: $1+\cot^2\theta=\csc^2\theta$

$$
\begin{array}{lrcl}
\text{Rewrite the left side.} & 1+\cot^2\theta &=& 1+\tfrac{\cos^2\theta}{\sin^2\theta} \\[4pt]
\text{Write both terms with the common denominator.} & &=& \tfrac{\sin^2\theta}{\sin^2\theta}+\tfrac{\cos^2\theta}{\sin^2\theta} \\[4pt]
& &=& \tfrac{\sin^2\theta+\cos^2\theta}{\sin^2\theta} \\[4pt]
& &=& \tfrac{1}{\sin^2\theta} \\[4pt]
& &=& \csc^2\theta
\end{array}
$$

Similarly, $1+\tan^2\theta=\sec^2\theta$ can be obtained by rewriting the left side of this identity in terms of sine and cosine. This gives

$$
\begin{array}{lrcl}
\text{Rewrite left side.} & 1+\tan^2\theta &=& 1+\left(\tfrac{\sin\theta}{\cos\theta}\right)^2 \\[4pt]
\text{Write both terms with the common denominator.} & &=& \left(\tfrac{\cos\theta}{\cos\theta}\right)^2+\left(\tfrac{\sin\theta}{\cos\theta}\right)^2 \\[4pt]
& &=& \tfrac{\cos^2\theta+\sin^2\theta}{\cos^2\theta} \\[4pt]
& &=& \tfrac{1}{\cos^2\theta} \\[4pt]
& &=& \sec^2\theta
\end{array}
$$

The next set of fundamental identities is the set of **even-odd identities.** The **even-odd identities** relate the value of a trigonometric function at a given angle to the value of the function at the opposite angle and determine whether the identity is odd or even, shown below.

{{< callout type="info" >}}
  **Even-Odd Identities.**

  $$
  \begin{array}{l}
  \tan(-\theta)=-\tan\theta \\
  \cot(-\theta)=-\cot\theta \\
  \sin(-\theta)=-\sin\theta \\
  \csc(-\theta)=-\csc\theta \\
  \cos(-\theta)=\cos\theta \\
  \sec(-\theta)=\sec\theta
  \end{array}
  $$
{{< /callout >}}

Recall that an **odd function** is one in which $f(-x)=-f(x)$ for all $x$ in the domain of $f$. The **sine** function is an odd function because $\sin(-\theta)=-\sin\theta$. The graph of an odd function is symmetric about the origin. For example, consider corresponding inputs of $\tfrac{\pi}{2}$ and $-\tfrac{\pi}{2}$. The output of $\sin\left(\tfrac{\pi}{2}\right)$ is opposite the output of $\sin\left(-\tfrac{\pi}{2}\right)$. Thus,

$$
\begin{array}{l}
\sin\left(\tfrac{\pi}{2}\right)=1 \\
\text{and} \\
\sin\left(-\tfrac{\pi}{2}\right)=-\sin\left(\tfrac{\pi}{2}\right) \\
=-1
\end{array}
$$

This is shown in the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = sin θ from −2π to 2π, symmetric about the origin, with marked points (−π/2, −1) and (π/2, 1).","xMin":-6.9,"xMax":6.9,"yMin":-2.4,"yMax":2.3,"grid":false,"tickLabels":"y","yTickStep":1,"unit":34,"curves":[{"kind":"sine"}],"points":[{"at":[1.5707963267948966,1],"label":"(π/2, 1)"},{"at":[-1.5707963267948966,-1],"label":"(−π/2, −1)"}],"texts":[{"at":[-6.283185307179586,-1.6],"text":"−2π","anchor":"middle"},{"at":[-4.71238898038469,-1.6],"text":"−3π/2","anchor":"middle"},{"at":[-3.141592653589793,-1.6],"text":"−π","anchor":"middle"},{"at":[-1.5707963267948966,-1.6],"text":"−π/2","anchor":"middle"},{"at":[1.5707963267948966,-1.6],"text":"π/2","anchor":"middle"},{"at":[3.141592653589793,-1.6],"text":"π","anchor":"middle"},{"at":[4.71238898038469,-1.6],"text":"3π/2","anchor":"middle"},{"at":[6.283185307179586,-1.6],"text":"2π","anchor":"middle"}]}
{{< /apfigure >}}

*Graph of $y=\sin\theta$.*

Recall that an **even function** is one in which

$$f(-x)=f(x)\ \text{for all}\ x\ \text{in the domain of}\ f$$

The graph of an even function is symmetric about the **y-**axis. The cosine function is an even function because $\cos(-\theta)=\cos\theta$. For example, consider corresponding inputs $\tfrac{\pi}{4}$ and $-\tfrac{\pi}{4}$. The output of $\cos\left(\tfrac{\pi}{4}\right)$ is the same as the output of $\cos\left(-\tfrac{\pi}{4}\right)$. Thus,

$$
\begin{array}{l}
\cos\left(-\tfrac{\pi}{4}\right)=\cos\left(\tfrac{\pi}{4}\right) \\
\approx0.707
\end{array}
$$

See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = cos θ from −2π to 2π, symmetric about the y-axis, with marked points (−π/4, 0.707) and (π/4, 0.707).","xMin":-6.9,"xMax":6.9,"yMin":-2.1,"yMax":2.3,"grid":false,"tickLabels":"y","yTickStep":1,"unit":34,"curves":[{"kind":"cosine"}],"points":[{"at":[0.7853981633974483,0.7071],"label":"(π/4, 0.707)"},{"at":[-0.7853981633974483,0.7071],"label":"(−π/4, 0.707)"}],"texts":[{"at":[-6.283185307179586,-1.3],"text":"−2π","anchor":"middle"},{"at":[-4.71238898038469,-1.3],"text":"−3π/2","anchor":"middle"},{"at":[-3.141592653589793,-1.3],"text":"−π","anchor":"middle"},{"at":[-1.5707963267948966,-1.3],"text":"−π/2","anchor":"middle"},{"at":[1.5707963267948966,-1.3],"text":"π/2","anchor":"middle"},{"at":[3.141592653589793,-1.3],"text":"π","anchor":"middle"},{"at":[4.71238898038469,-1.3],"text":"3π/2","anchor":"middle"},{"at":[6.283185307179586,-1.3],"text":"2π","anchor":"middle"}]}
{{< /apfigure >}}

*Graph of $y=\cos\theta$.*

For all $\theta$ in the domain of the sine and cosine functions, respectively, we can state the following:

- Since $\sin(-\theta)=-\sin\theta$, sine is an odd function.
- Since, $\cos(-\theta)=\cos\theta$, cosine is an even function.

The other even-odd identities follow from the even and odd nature of the sine and cosine functions. For example, consider the tangent identity, $\tan(-\theta)=-\tan\theta$. We can interpret the tangent of a negative angle as $\tan(-\theta)=\tfrac{\sin(-\theta)}{\cos(-\theta)}=\tfrac{-\sin\theta}{\cos\theta}=-\tan\theta$. Tangent is therefore an odd function, which means that $\tan(-\theta)=-\tan(\theta)$ for all $\theta$ in the domain of the tangent function.

The cotangent identity, $\cot(-\theta)=-\cot\theta$, also follows from the sine and cosine identities. We can interpret the cotangent of a negative angle as $\cot(-\theta)=\tfrac{\cos(-\theta)}{\sin(-\theta)}=\tfrac{\cos\theta}{-\sin\theta}=-\cot\theta$. Cotangent is therefore an odd function, which means that $\cot(-\theta)=-\cot(\theta)$ for all $\theta$ in the domain of the cotangent function.

The **cosecant function** is the reciprocal of the sine function, which means that the cosecant of a negative angle will be interpreted as $\csc(-\theta)=\tfrac{1}{\sin(-\theta)}=\tfrac{1}{-\sin\theta}=-\csc\theta$. The cosecant function is therefore odd.

Finally, the secant function is the reciprocal of the cosine function, and the secant of a negative angle is interpreted as $\sec(-\theta)=\tfrac{1}{\cos(-\theta)}=\tfrac{1}{\cos\theta}=\sec\theta$. The secant function is therefore even.

To sum up, only two of the trigonometric functions, cosine and secant, are even. The other four functions are odd, verifying the even-odd identities.

The next set of fundamental identities is the set of **reciprocal identities**, which, as their name implies, relate trigonometric functions that are reciprocals of each other, shown below.

{{< callout type="info" >}}
  **Reciprocal Identities.**

  $$
  \begin{array}{l}
  \sin\theta=\tfrac{1}{\csc\theta} \\
  \csc\theta=\tfrac{1}{\sin\theta} \\
  \cos\theta=\tfrac{1}{\sec\theta} \\
  \sec\theta=\tfrac{1}{\cos\theta} \\
  \tan\theta=\tfrac{1}{\cot\theta} \\
  \cot\theta=\tfrac{1}{\tan\theta}
  \end{array}
  $$
{{< /callout >}}

The final set of identities is the set of **quotient identities**, which define relationships among certain trigonometric functions and can be very helpful in verifying other identities, shown below.

{{< callout type="info" >}}
  **Quotient Identities.**

  $$
  \begin{array}{l}
  \tan\theta=\tfrac{\sin\theta}{\cos\theta} \\
  \cot\theta=\tfrac{\cos\theta}{\sin\theta}
  \end{array}
  $$
{{< /callout >}}

The reciprocal and quotient identities are derived from the definitions of the basic trigonometric functions.

{{< callout type="info" >}}
  **Summarizing Trigonometric Identities.**

  The **Pythagorean Identities** are based on the properties of a right triangle.

  $$\cos^2\theta+\sin^2\theta=1$$

  $$1+\cot^2\theta=\csc^2\theta$$

  $$1+\tan^2\theta=\sec^2\theta$$

  The **even-odd identities** relate the value of a trigonometric function at a given angle to the value of the function at the opposite angle.

  $$\tan(-\theta)=-\tan\theta$$

  $$\cot(-\theta)=-\cot\theta$$

  $$\sin(-\theta)=-\sin\theta$$

  $$\csc(-\theta)=-\csc\theta$$

  $$\cos(-\theta)=\cos\theta$$

  $$\sec(-\theta)=\sec\theta$$

  The **reciprocal identities** define reciprocals of the trigonometric functions.

  $$\sin\theta=\tfrac{1}{\csc\theta}$$

  $$\cos\theta=\tfrac{1}{\sec\theta}$$

  $$\tan\theta=\tfrac{1}{\cot\theta}$$

  $$\csc\theta=\tfrac{1}{\sin\theta}$$

  $$\sec\theta=\tfrac{1}{\cos\theta}$$

  $$\cot\theta=\tfrac{1}{\tan\theta}$$

  The **quotient identities** define the relationship among the trigonometric functions.

  $$\tan\theta=\tfrac{\sin\theta}{\cos\theta}$$

  $$\cot\theta=\tfrac{\cos\theta}{\sin\theta}$$
{{< /callout >}}

**Example.** Graph both sides of the identity $\cot\theta=\tfrac{1}{\tan\theta}$. In other words, on the graphing calculator, graph $y=\cot\theta$ and $y=\tfrac{1}{\tan\theta}$.

**Solution.** See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graphs of y = cot θ and y = 1/tan θ from −2π to 2π, coinciding as a single curve — cotangent-shaped branches descending between dashed vertical asymptotes at each multiple of π.","xMin":-7.2,"xMax":7.2,"yMin":-12.5,"yMax":12.5,"grid":false,"tickLabels":"y","yTickStep":2,"unit":55,"curves":[{"kind":"cotangent"}],"lines":[{"x":0,"dashed":true,"arrows":false},{"x":3.141592653589793,"dashed":true,"arrows":false},{"x":-3.141592653589793,"dashed":true,"arrows":false},{"x":6.283185307179586,"dashed":true,"arrows":false},{"x":-6.283185307179586,"dashed":true,"arrows":false}],"texts":[{"at":[-6.283185307179586,-1.6],"text":"−2π","anchor":"middle"},{"at":[-4.71238898038469,-1.6],"text":"−3π/2","anchor":"middle"},{"at":[-3.141592653589793,-1.6],"text":"−π","anchor":"middle"},{"at":[-1.5707963267948966,-1.6],"text":"−π/2","anchor":"middle"},{"at":[1.5707963267948966,-1.6],"text":"π/2","anchor":"middle"},{"at":[3.141592653589793,-1.6],"text":"π","anchor":"middle"},{"at":[4.71238898038469,-1.6],"text":"3π/2","anchor":"middle"},{"at":[6.283185307179586,-1.6],"text":"2π","anchor":"middle"},{"at":[1.5707963267948966,8.5],"text":"y = cot θ","anchor":"middle"},{"at":[1.5707963267948966,7],"text":"y = 1/tan θ","anchor":"middle"}]}
{{< /apfigure >}}

**Analysis.** We see only one graph because both expressions generate the same image. One is on top of the other. This is a good way to confirm an identity verified with analytical means. If both expressions give the same graph, then they are most likely identities.

{{< callout type="info" >}}
  **How to:** given a trigonometric identity, verify that it is true.

  1. Work on one side of the equation. It is usually better to start with the more complex side, as it is easier to simplify than to build.
  2. Look for opportunities to factor expressions, square a binomial, or add fractions.
  3. Noting which functions are in the final expression, look for opportunities to use the identities and make the proper substitutions.
  4. If these steps do not yield the desired result, try converting all terms to sines and cosines.
{{< /callout >}}

**Example.** Verify $\tan\theta\cos\theta=\sin\theta$.

**Solution.** We will start on the left side, as it is the more complicated side:

$$
\begin{array}{lrcl}
& \tan\theta\cos\theta &=& \left(\tfrac{\sin\theta}{\cos\theta}\right)\cos\theta \\[4pt]
& &=& \left(\tfrac{\sin\theta}{\cancel{\cos\theta}}\right)\cancel{\cos\theta} \\[4pt]
& &=& \sin\theta
\end{array}
$$

**Analysis.** This identity was fairly simple to verify, as it only required writing $\tan\theta$ in terms of $\sin\theta$ and $\cos\theta$.

Evaluate each of the following, as in the example above.

{{< fillin
  question="Simplify $\csc\theta\cos\theta\tan\theta$ to a single number."
  answer="1"
  answerForm="evaluated-trig"
  answerDisplay="$1$"
  hint="Write $\csc\theta$ and $\tan\theta$ in terms of $\sin\theta$ and $\cos\theta$; the sines and cosines will cancel."
>}}

**Example.** Verify the following equivalency using the even-odd identities:

$$(1+\sin x)[1+\sin(-x)]=\cos^2x$$

**Solution.** Working on the left side of the equation, we have

$$
\begin{array}{lrcl}
\text{Since }\sin(-x)=-\sin x. & (1+\sin x)[1+\sin(-x)] &=& (1+\sin x)(1-\sin x) \\[4pt]
\text{Difference of squares} & &=& 1-\sin^2x \\[4pt]
\cos^2x=1-\sin^2x & &=& \cos^2x
\end{array}
$$

**Example.** Verify the identity $\tfrac{\sec^2\theta-1}{\sec^2\theta}=\sin^2\theta$.

**Solution.** As the left side is more complicated, let's begin there.

$$
\begin{array}{lrcl}
\sec^2\theta=\tan^2\theta+1 & \tfrac{\sec^2\theta-1}{\sec^2\theta} &=& \tfrac{(\tan^2\theta+1)-1}{\sec^2\theta} \\[4pt]
& &=& \tfrac{\tan^2\theta}{\sec^2\theta} \\[4pt]
& &=& \tan^2\theta\left(\tfrac{1}{\sec^2\theta}\right) \\[4pt]
\cos^2\theta=\tfrac{1}{\sec^2\theta} & &=& \tan^2\theta(\cos^2\theta) \\[4pt]
\tan^2\theta=\tfrac{\sin^2\theta}{\cos^2\theta} & &=& \left(\tfrac{\sin^2\theta}{\cos^2\theta}\right)(\cos^2\theta) \\[4pt]
& &=& \left(\tfrac{\sin^2\theta}{\cancel{\cos^2\theta}}\right)\cancel{\cos^2\theta} \\[4pt]
& &=& \sin^2\theta
\end{array}
$$

There is more than one way to verify an identity. Here is another possibility. Again, we can start with the left side.

$$
\begin{array}{lrcl}
& \tfrac{\sec^2\theta-1}{\sec^2\theta} &=& \tfrac{\sec^2\theta}{\sec^2\theta}-\tfrac{1}{\sec^2\theta} \\[4pt]
& &=& 1-\cos^2\theta \\[4pt]
& &=& \sin^2\theta
\end{array}
$$

**Analysis.** In the first method, we used the identity $\sec^2\theta=\tan^2\theta+1$ and continued to simplify. In the second method, we split the fraction, putting both terms in the numerator over the common denominator. This problem illustrates that there are multiple ways we can verify an identity. Employing some creativity can sometimes simplify a procedure. As long as the substitutions are correct, the answer will be the same.

{{< fillin
  question="Simplify $\tfrac{\cot\theta}{\csc\theta}$ to a single trigonometric function."
  answer="\cos\theta"
  answerForm="single-trig-function"
  answerDisplay="$\cos\theta$"
  hint="Rewrite $\cot\theta$ and $\csc\theta$ in terms of sine and cosine, then simplify the resulting fraction."
>}}

**Example.** Create an identity for the expression $2\tan\theta\sec\theta$ by rewriting strictly in terms of sine.

**Solution.** There are a number of ways to begin, but here we will use the quotient and reciprocal identities to rewrite the expression:

$$
\begin{array}{lrcl}
& 2\tan\theta\sec\theta &=& 2\left(\tfrac{\sin\theta}{\cos\theta}\right)\left(\tfrac{1}{\cos\theta}\right) \\[4pt]
& &=& \tfrac{2\sin\theta}{\cos^2\theta} \\[4pt]
\text{Substitute }1-\sin^2\theta\text{ for }\cos^2\theta. & &=& \tfrac{2\sin\theta}{1-\sin^2\theta}
\end{array}
$$

Thus,

$$2\tan\theta\sec\theta=\tfrac{2\sin\theta}{1-\sin^2\theta}$$

**Example.** Verify the identity:

$$\tfrac{\sin^2(-\theta)-\cos^2(-\theta)}{\sin(-\theta)-\cos(-\theta)}=\cos\theta-\sin\theta$$

**Solution.** Let's start with the left side and simplify:

$$
\begin{array}{lrcl}
& \tfrac{\sin^2(-\theta)-\cos^2(-\theta)}{\sin(-\theta)-\cos(-\theta)} &=& \tfrac{[\sin(-\theta)]^2-[\cos(-\theta)]^2}{\sin(-\theta)-\cos(-\theta)} \\[4pt]
\sin(-x)=-\sin x\text{ and }\cos(-x)=\cos x & &=& \tfrac{(-\sin\theta)^2-(\cos\theta)^2}{-\sin\theta-\cos\theta} \\[4pt]
\text{Difference of squares} & &=& \tfrac{(\sin\theta)^2-(\cos\theta)^2}{-\sin\theta-\cos\theta} \\[4pt]
& &=& \tfrac{(\sin\theta-\cos\theta)(\sin\theta+\cos\theta)}{-(\sin\theta+\cos\theta)} \\[4pt]
& &=& \tfrac{(\sin\theta-\cos\theta)\cancel{(\sin\theta+\cos\theta)}}{-\cancel{(\sin\theta+\cos\theta)}} \\[4pt]
& &=& \cos\theta-\sin\theta
\end{array}
$$

Which expression completes the identity's verification below?

{{< multiplechoice
  question="Which expression is the simplified form of $\tfrac{\sin^2\theta-1}{\tan\theta\sin\theta-\tan\theta}$?"
  answer="$\tfrac{\sin\theta+1}{\tan\theta}$"
  hint="Factor the numerator as a difference of squares and factor $\tan\theta$ out of the denominator; a common factor will cancel."
>}}
$\tfrac{\sin\theta+1}{\tan\theta}$
$\tfrac{\sin\theta-1}{\tan\theta}$
$\tfrac{1-\sin\theta}{\tan\theta}$
$\tfrac{\sin\theta+1}{\cot\theta}$
{{< /multiplechoice >}}

**Example.** Verify the identity: $(1-\cos^2x)(1+\cot^2x)=1$.

**Solution.** We will work on the left side of the equation.

$$
\begin{array}{lrcl}
& (1-\cos^2x)(1+\cot^2x) &=& (1-\cos^2x)\left(1+\tfrac{\cos^2x}{\sin^2x}\right) \\[4pt]
\text{Find the common denominator.} & &=& (1-\cos^2x)\left(\tfrac{\sin^2x}{\sin^2x}+\tfrac{\cos^2x}{\sin^2x}\right) \\[4pt]
& &=& (1-\cos^2x)\left(\tfrac{\sin^2x+\cos^2x}{\sin^2x}\right) \\[4pt]
& &=& (\sin^2x)\left(\tfrac{1}{\sin^2x}\right) \\[4pt]
& &=& 1
\end{array}
$$

## Using Algebra to Simplify Trigonometric Expressions

We have seen that algebra is very important in verifying trigonometric identities, but it is just as critical in simplifying trigonometric expressions before solving. Being familiar with the basic properties and formulas of algebra, such as the difference of squares formula, the perfect square formula, or substitution, will simplify the work involved with trigonometric expressions and equations.

For example, the equation $(\sin x+1)(\sin x-1)=0$ resembles the equation $(x+1)(x-1)=0$, which uses the factored form of the difference of squares. Using algebra makes finding a solution straightforward and familiar. We can set each factor equal to zero and solve. This is one example of recognizing algebraic patterns in trigonometric expressions or equations.

Another example is the difference of squares formula, $a^2-b^2=(a-b)(a+b)$, which is widely used in many areas other than mathematics, such as engineering, architecture, and physics. We can also create our own identities by continually expanding an expression and making the appropriate substitutions. Using algebraic properties and formulas makes many trigonometric equations easier to understand and solve.

**Example.** Write the following trigonometric expression as an algebraic expression: $2\cos^2\theta+\cos\theta-1$.

**Solution.** Notice that the pattern displayed has the same form as a standard quadratic expression, $ax^2+bx+c$. Letting $\cos\theta=x$, we can rewrite the expression as follows:

$$2x^2+x-1$$

This expression can be factored as $(2x-1)(x+1)$. If it were set equal to zero and we wanted to solve the equation, we would use the zero factor property and solve each factor for $x$. At this point, we would replace $x$ with $\cos\theta$ and solve for $\theta$.

**Example.** Rewrite the trigonometric expression: $4\cos^2\theta-1$.

**Solution.** Notice that both the coefficient and the trigonometric expression in the first term are squared, and the square of the number $1$ is $1$. This is the difference of squares. Thus,

$$
\begin{array}{lrcl}
& 4\cos^2\theta-1 &=& (2\cos\theta)^2-1 \\[4pt]
& &=& (2\cos\theta-1)(2\cos\theta+1)
\end{array}
$$

**Analysis.** If this expression were written in the form of an equation set equal to zero, we could solve each factor using the zero factor property. We could also use substitution like we did in the previous problem and let $\cos\theta=x$, rewrite the expression as $4x^2-1$, and factor $(2x-1)(2x+1)$. Then replace $x$ with $\cos\theta$ and solve for the angle.

{{< fillin
  question="Rewrite the trigonometric expression: $25-9\sin^2\theta$."
  answer="(5-3\sin\theta)(5+3\sin\theta)"
  answerForm="factored"
  answerDisplay="$(5-3\sin\theta)(5+3\sin\theta)$"
  hint="This is a difference of squares: $25=5^2$ and $9\sin^2\theta=(3\sin\theta)^2$."
>}}

**Example.** Simplify the expression by rewriting and using identities:

$$\csc^2\theta-\cot^2\theta$$

**Solution.** We can start with the Pythagorean identity.

$$1+\cot^2\theta=\csc^2\theta$$

Now we can simplify by substituting $1+\cot^2\theta$ for $\csc^2\theta$. We have

$$
\begin{array}{lrcl}
& \csc^2\theta-\cot^2\theta &=& 1+\cot^2\theta-\cot^2\theta \\[4pt]
& &=& 1
\end{array}
$$

{{< multiplechoice
  question="Use algebraic techniques to verify the identity: which expression equals $\tfrac{\cos\theta}{1+\sin\theta}$? (Hint: Multiply the numerator and denominator on the left side by $1-\sin\theta$.)"
  answer="$\tfrac{1-\sin\theta}{\cos\theta}$"
  hint="Multiply the numerator and denominator by $1-\sin\theta$, then use the Pythagorean identity to simplify $1-\sin^2\theta$."
>}}
$\tfrac{1-\sin\theta}{\cos\theta}$
$\tfrac{1+\sin\theta}{\cos\theta}$
$\tfrac{\sin\theta-1}{\cos\theta}$
$\tfrac{1-\sin\theta}{\sin\theta}$
{{< /multiplechoice >}}

## Key equations

| Pythagorean Identities | $\begin{array}{l} \sin^2\theta+\cos^2\theta=1 \\ 1+\cot^2\theta=\csc^2\theta \\ 1+\tan^2\theta=\sec^2\theta \end{array}$ |
| :--- | :--- |
| Even-odd identities | $\begin{array}{l} \tan(-\theta)=-\tan\theta \\ \cot(-\theta)=-\cot\theta \\ \sin(-\theta)=-\sin\theta \\ \csc(-\theta)=-\csc\theta \\ \cos(-\theta)=\cos\theta \\ \sec(-\theta)=\sec\theta \end{array}$ |
| Reciprocal identities | $\begin{array}{l} \sin\theta=\tfrac{1}{\csc\theta} \\ \cos\theta=\tfrac{1}{\sec\theta} \\ \tan\theta=\tfrac{1}{\cot\theta} \\ \csc\theta=\tfrac{1}{\sin\theta} \\ \sec\theta=\tfrac{1}{\cos\theta} \\ \cot\theta=\tfrac{1}{\tan\theta} \end{array}$ |
| Quotient identities | $\begin{array}{l} \tan\theta=\tfrac{\sin\theta}{\cos\theta} \\ \cot\theta=\tfrac{\cos\theta}{\sin\theta} \end{array}$ |

## Key concepts

- There are multiple ways to represent a trigonometric expression. Verifying the identities illustrates how expressions can be rewritten to simplify a problem.
- Graphing both sides of an identity will verify it. See Example 1.
- Simplifying one side of the equation to equal the other side is another method for verifying an identity. See Example 2 and Example 3.
- The approach to verifying an identity depends on the nature of the identity. It is often useful to begin on the more complex side of the equation. See Example 4.
- We can create an identity by simplifying an expression and then verifying it. See Example 5.
- Verifying an identity may involve algebra with the fundamental identities. See Example 6 and Example 7.
- Algebraic techniques can be used to simplify trigonometric expressions. We use algebraic techniques throughout this text, as they consist of the fundamental rules of mathematics. See Example 8, Example 9, and Example 10.

## Key terms

**even-odd identities** — set of equations involving trigonometric functions such that if $f(-x)=-f(x)$, the identity is odd, and if $f(-x)=f(x)$, the identity is even. **Pythagorean identities** — set of equations involving trigonometric functions based on the right triangle properties. **quotient identities** — pair of identities based on the fact that tangent is the ratio of sine and cosine, and cotangent is the ratio of cosine and sine. **reciprocal identities** — set of equations involving the reciprocals of basic trigonometric definitions.

## Practice

### Verify the fundamental trigonometric identities

{{< multiplechoice
  question="Determine whether the following statement is true or false: $\csc^2x(1+\sin^2x)=\cot^2x$."
  answer="False"
  hint="Expand the left side using $\csc^2x=1+\cot^2x$ and simplify $\csc^2x\sin^2x$ to a constant."
>}}
True
False
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the following statement is true or false: $\tfrac{\tan x}{\sec x}\sin(-x)=\cos^2x$."
  answer="False"
  hint="Simplify $\tfrac{\tan x}{\sec x}$ to $\sin x$ first, then apply the odd identity $\sin(-x)=-\sin x$."
>}}
True
False
{{< /multiplechoice >}}

{{< multiplechoice
  question="Determine whether the following statement is true or false: $3\sin^2\theta+4\cos^2\theta=3+\cos^2\theta$."
  answer="True"
  hint="Rewrite $4\cos^2\theta$ as $3\cos^2\theta+\cos^2\theta$, then apply the Pythagorean identity to the sine and the first cosine term."
>}}
True
False
{{< /multiplechoice >}}

### Simplify trigonometric expressions using algebra and the identities

{{< fillin
  question="Use the fundamental identities to fully simplify the expression: $\sin x\cos x\sec x$."
  answer="\sin x"
  answerForm="single-trig-function"
  answerDisplay="$\sin x$"
  hint="Replace $\sec x$ with $\tfrac{1}{\cos x}$ so it cancels with the factor of $\cos x$."
>}}

{{< fillin
  question="Use the fundamental identities to fully simplify the expression: $\tan x\sin x+\sec x\cos^2x$."
  answer="\sec x"
  answerForm="single-trig-function"
  answerDisplay="$\sec x$"
  hint="Write $\tan x$ and $\sec x$ in terms of sine and cosine, then combine the two terms over a common denominator of $\cos x$."
>}}

{{< fillin
  question="Simplify the first trigonometric expression by writing the simplified form in terms of the second: $\tfrac{\sec x+\csc x}{1+\tan x}$, in terms of $\sin x$."
  answer="\frac{1}{\sin x}"
  answerForm="single-trig-function"
  answerDisplay="$\tfrac{1}{\sin x}$"
  hint="Write $\sec x$, $\csc x$, and $\tan x$ in terms of sine and cosine; the numerator and denominator will share a factor of $\sin x+\cos x$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 7.1: Simplifying and Verifying Trigonometric Identities](https://openstax.org/books/precalculus-2e/pages/7-1-simplifying-and-verifying-trigonometric-identities) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative photograph of international passports (Figure 1), which illustrates only the section's opening analogy; recreated the three instructional figures as accessible spec-first SVGs built from exact coordinates — the graph of $y=\sin\theta$ and the graph of $y=\cos\theta$, each from $-2\pi$ to $2\pi$ with their marked symmetry points, and the overlaid graphs of $y=\cot\theta$ and $y=\tfrac{1}{\tan\theta}$ confirming the identity by coinciding as one curve, with dashed vertical asymptotes at every multiple of $\pi$. Converted the four boxed identity tables (Pythagorean, even-odd, reciprocal, quotient) and the closing "Summarizing Trigonometric Identities" recap into the book's callout convention. Every retained Try It became a real interactive component: the three whose left side simplifies to a single value, a single trigonometric function, or a factorable difference of squares became `fillin` components (`evaluated-trig`, `single-trig-function`, and `factored` respectively); the two verify-type Try Its whose simplified side still holds more than one trigonometric function (so no `answerForm` token can separate the printed subject from the key) became `multiplechoice` questions on the identity's load-bearing simplification step instead, per this chapter's proof-item policy. Struck-through cancellation steps shown in the printed derivations (Examples 2, 4, and 6) are rendered with `\cancel{}`. Omitted the "Access these online resources" media links. Adapted three true/false "prove or disprove" exercises (themselves ungradeable as free response) into `multiplechoice` True/False questions for the "verify the fundamental trigonometric identities" objective, and three "fully simplify"/"simplify in terms of" exercises into `single-trig-function` `fillin` questions for the "simplify trigonometric expressions" objective, into a closing Practice block, one group per objective.</small>
