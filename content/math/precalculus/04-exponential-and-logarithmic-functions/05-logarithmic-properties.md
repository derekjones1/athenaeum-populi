---
title: Logarithmic Properties
description: >-
  Deriving the product, quotient, and power rules for logarithms, using them
  together to expand or condense a logarithmic expression, and using the
  change-of-base formula to evaluate a logarithm with a calculator — adapted
  from OpenStax Precalculus 2e, Section 4.5.
source_section: "4.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use the product rule for logarithms
- Use the quotient rule for logarithms
- Use the power rule for logarithms
- Expand logarithmic expressions
- Condense logarithmic expressions
- Use the change-of-base formula for logarithms
{{< /callout >}}

In chemistry, **pH** is used as a measure of the acidity or alkalinity of a substance. The pH scale runs from 0 to 14. Substances with a pH less than 7 are considered acidic, and substances with a pH greater than 7 are said to be basic. Our bodies, for instance, must maintain a pH close to 7.35 in order for enzymes to work properly. To get a feel for what is acidic and what is basic, consider the following pH levels of some common substances:

- Battery acid: 0.8
- Stomach acid: 2.7
- Orange juice: 3.3
- Pure water: 7 (at 25° C)
- Human blood: 7.35
- Fresh coconut: 7.8
- Sodium hydroxide (lye): 14

To determine whether a solution is acidic or basic, we find its pH, which is a measure of the number of active positive hydrogen ions in the solution. The pH is defined by the following formula, where $[H^+]$ is the concentration of hydrogen ion in the solution.

$$\text{pH}=-\log\left([H^+]\right)=\log\left(\tfrac{1}{[H^+]}\right)$$

The equivalence of $-\log\left([H^+]\right)$ and $\log\left(\tfrac{1}{[H^+]}\right)$ is one of the logarithm properties we will examine in this section.

## Using the Product Rule for Logarithms

Recall that the logarithmic and exponential functions "undo" each other. This means that logarithms have similar properties to exponents. Some important properties of logarithms are given here. First, the following properties are easy to prove.

$$
\begin{array}{l}
\log_b 1=0 \\[4pt]
\log_b b=1
\end{array}
$$

For example, $\log_5 1=0$ since $5^0=1$. And $\log_5 5=1$ since $5^1=5$.

Next, we have the inverse property.

$$
\begin{array}{l}
\log_b(b^x)=x \\[4pt]
b^{\log_b x}=x,\ x>0
\end{array}
$$

For example, to evaluate $\log(100)$, we can rewrite the logarithm as $\log_{10}(10^2)$, and then apply the inverse property $\log_b(b^x)=x$ to get $\log_{10}(10^2)=2$.

To evaluate $e^{\ln(7)}$, we can rewrite the logarithm as $e^{\log_e 7}$, and then apply the inverse property $b^{\log_b x}=x$ to get $e^{\log_e 7}=7$.

Finally, we have the **one-to-one** property.

$$\log_b M=\log_b N\ \text{if and only if}\ M=N$$

We can use the one-to-one property to solve the equation $\log_3(3x)=\log_3(2x+5)$ for $x$. Since the bases are the same, we can apply the one-to-one property by setting the arguments equal and solving for $x$:

$$
\begin{array}{lrcl}
\text{Set the arguments equal.} & 3x &=& 2x+5 \\[4pt]
\text{Subtract }2x. & x &=& 5
\end{array}
$$

But what about the equation $\log_3(3x)+\log_3(2x+5)=2$? The one-to-one property does not help us in this instance. Before we can solve an equation like this, we need a method for combining terms on the left side of the equation.

Recall that we use the **product rule of exponents** to combine the product of powers by adding exponents: $x^a x^b=x^{a+b}$. We have a similar property for logarithms, called the **product rule for logarithms**, which says that the logarithm of a product is equal to a sum of logarithms. Because logs are exponents, and we multiply like bases, we can add the exponents. We will use the inverse property to derive the product rule below.

Given any real number $x$ and positive real numbers $M,N,$ and $b$, where $b\ne1$, we will show

$$\log_b(MN)=\log_b(M)+\log_b(N)$$

Let $m=\log_b M$ and $n=\log_b N$. In exponential form, these equations are $b^m=M$ and $b^n=N$. It follows that

$$
\begin{array}{lrcl}
\text{Substitute for }M\text{ and }N. & \log_b(MN) &=& \log_b(b^m b^n) \\[4pt]
\text{Apply the product rule for exponents.} & &=& \log_b(b^{m+n}) \\[4pt]
\text{Apply the inverse property of logs.} & &=& m+n \\[4pt]
\text{Substitute for }m\text{ and }n. & &=& \log_b(M)+\log_b(N)
\end{array}
$$

Note that repeated applications of the product rule for logarithms allow us to simplify the logarithm of the product of any number of factors. For example, consider $\log_b(wxyz)$. Using the product rule for logarithms, we can rewrite this logarithm of a product as the sum of logarithms of its factors:

$$\log_b(wxyz)=\log_b w+\log_b x+\log_b y+\log_b z$$

{{< callout type="info" >}}
  **The Product Rule for Logarithms.** The **product rule for logarithms** can
  be used to simplify a logarithm of a product by rewriting it as a sum of
  individual logarithms.

  $$\log_b(MN)=\log_b(M)+\log_b(N)\quad\text{for }b>0$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the logarithm of a product, use the product rule of
  logarithms to write an equivalent sum of logarithms.

  1. Factor the argument completely, expressing each whole number factor as a
     product of primes.
  2. Write the equivalent expression by summing the logarithms of each
     factor.
{{< /callout >}}

**Example.** Expand $\log_3(30x(3x+4))$.

**Solution.** We begin by factoring the argument completely, expressing $30$ as a product of primes.

$$\log_3(30x(3x+4))=\log_3(2\cdot3\cdot5\cdot x\cdot(3x+4))$$

Next we write the equivalent equation by summing the logarithms of each factor.

$$\log_3(30x(3x+4))=\log_3(2)+\log_3(3)+\log_3(5)+\log_3(x)+\log_3(3x+4)$$

{{< fillin
  question="Expand $\log_b(8k)$."
  answer="3\log_b(2)+\log_b(k)"
  answerForm="expanded-logarithms"
  answerDisplay="$3\log_b(2)+\log_b(k)$"
  hint="Write $8$ as $2^3$, then apply the product and power rules."
>}}

## Using the Quotient Rule for Logarithms

For quotients, we have a similar rule for logarithms. Recall that we use the **quotient rule of exponents** to combine the quotient of exponents by subtracting: $\tfrac{x^a}{x^b}=x^{a-b}$. The **quotient rule for logarithms** says that the logarithm of a quotient is equal to a difference of logarithms. Just as with the product rule, we can use the inverse property to derive the quotient rule.

Given any real number $x$ and positive real numbers $M,N,$ and $b$, where $b\ne1$, we will show

$$\log_b\left(\tfrac{M}{N}\right)=\log_b(M)-\log_b(N)$$

Let $m=\log_b M$ and $n=\log_b N$. In exponential form, these equations are $b^m=M$ and $b^n=N$. It follows that

$$
\begin{array}{lrcl}
\text{Substitute for }M\text{ and }N. & \log_b\left(\tfrac{M}{N}\right) &=& \log_b\left(\tfrac{b^m}{b^n}\right) \\[4pt]
\text{Apply the quotient rule for exponents.} & &=& \log_b(b^{m-n}) \\[4pt]
\text{Apply the inverse property of logs.} & &=& m-n \\[4pt]
\text{Substitute for }m\text{ and }n. & &=& \log_b(M)-\log_b(N)
\end{array}
$$

For example, to expand $\log\left(\tfrac{2x^2+6x}{3x+9}\right)$, we must first express the quotient in lowest terms. Factoring and canceling we get,

$$
\begin{array}{lrcl}
\text{Factor the numerator and denominator.} & \log\left(\tfrac{2x^2+6x}{3x+9}\right) &=& \log\left(\tfrac{2x(x+3)}{3(x+3)}\right) \\[4pt]
\text{Cancel the common factors.} & &=& \log\left(\tfrac{2x}{3}\right)
\end{array}
$$

Next we apply the quotient rule by subtracting the logarithm of the denominator from the logarithm of the numerator. Then we apply the product rule.

$$
\begin{array}{lrcl}
& \log\left(\tfrac{2x}{3}\right) &=& \log(2x)-\log(3) \\[4pt]
& &=& \log(2)+\log(x)-\log(3)
\end{array}
$$

{{< callout type="info" >}}
  **The Quotient Rule for Logarithms.** The **quotient rule for logarithms**
  can be used to simplify a logarithm or a quotient by rewriting it as the
  difference of individual logarithms.

  $$\log_b\left(\tfrac{M}{N}\right)=\log_b M-\log_b N$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the logarithm of a quotient, use the quotient rule of
  logarithms to write an equivalent difference of logarithms.

  1. Express the argument in lowest terms by factoring the numerator and
     denominator and canceling common terms.
  2. Write the equivalent expression by subtracting the logarithm of the
     denominator from the logarithm of the numerator.
  3. Check to see that each term is fully expanded. If not, apply the product
     rule for logarithms to expand completely.
{{< /callout >}}

**Example.** Expand $\log_2\left(\tfrac{15x(x-1)}{(3x+4)(2-x)}\right)$.

**Solution.** First we note that the quotient is factored and in lowest terms, so we apply the quotient rule.

$$\log_2\left(\tfrac{15x(x-1)}{(3x+4)(2-x)}\right)=\log_2(15x(x-1))-\log_2((3x+4)(2-x))$$

Notice that the resulting terms are logarithms of products. To expand completely, we apply the product rule, noting that the prime factors of the factor $15$ are $3$ and $5$.

$$
\begin{array}{lrcl}
& \log_2(15x(x-1))-\log_2((3x+4)(2-x)) &=& [\log_2(3)+\log_2(5)+\log_2(x)+\log_2(x-1)]-[\log_2(3x+4)+\log_2(2-x)] \\[4pt]
& &=& \log_2(3)+\log_2(5)+\log_2(x)+\log_2(x-1)-\log_2(3x+4)-\log_2(2-x)
\end{array}
$$

**Analysis.** There are exceptions to consider in this and later examples. First, because denominators must never be zero, this expression is not defined for $x=-\tfrac{4}{3}$ and $x=2$. Also, since the argument of a logarithm must be positive, we note as we observe the expanded logarithm, that $x>0$, $x>1$, $x>-\tfrac{4}{3}$, and $x<2$. Combining these conditions is beyond the scope of this section, and we will not consider them here or in subsequent exercises.

{{< multiplechoice
  question="Expand $\log_3\left(\tfrac{7x^2+21x}{7x(x-1)(x-2)}\right)$."
  answer="$\log_3(x+3)-\log_3(x-1)-\log_3(x-2)$"
  hint="Factor and cancel first — the numerator is $7x(x+3)$ — then apply the quotient rule to the remaining fraction, and the product rule to its denominator."
>}}
$\log_3(x+3)+\log_3(x-1)+\log_3(x-2)$
$\log_3(x+3)-\log_3(x-1)-\log_3(x-2)$
$\log_3(x+3)-\log_3(x-1)+\log_3(x-2)$
$\log_3\left(\tfrac{x+3}{(x-1)(x-2)}\right)$
{{< /multiplechoice >}}

## Using the Power Rule for Logarithms

We've explored the product rule and the quotient rule, but how can we take the logarithm of a power, such as $x^2$? One method is as follows:

$$
\begin{array}{lrcl}
& \log_b(x^2) &=& \log_b(x\cdot x) \\[4pt]
& &=& \log_b x+\log_b x \\[4pt]
& &=& 2\log_b x
\end{array}
$$

Notice that we used the product rule for logarithms to find a solution for the example above. By doing so, we have derived the **power rule for logarithms**, which says that the log of a power is equal to the exponent times the log of the base. Keep in mind that, although the input to a logarithm may not be written as a power, we may be able to change it to a power. For example,

$$100=10^2\qquad \sqrt3=3^{\tfrac{1}{2}}\qquad \tfrac{1}{e}=e^{-1}$$

{{< callout type="info" >}}
  **The Power Rule for Logarithms.** The **power rule for logarithms** can be
  used to simplify the logarithm of a power by rewriting it as the product of
  the exponent times the logarithm of the base.

  $$\log_b(M^n)=n\log_b M$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the logarithm of a power, use the power rule of
  logarithms to write an equivalent product of a factor and a logarithm.

  1. Express the argument as a power, if needed.
  2. Write the equivalent expression by multiplying the exponent times the
     logarithm of the base.
{{< /callout >}}

**Example.** Expand $\log_2 x^5$.

**Solution.** The argument is already written as a power, so we identify the exponent, $5$, and the base, $x$, and rewrite the equivalent expression by multiplying the exponent times the logarithm of the base.

$$\log_2(x^5)=5\log_2 x$$

**Example.** Expand $\log_3(25)$ using the power rule for logs.

**Solution.** Expressing the argument as a power, we get $\log_3(25)=\log_3(5^2)$.

Next we identify the exponent, $2$, and the base, $5$, and rewrite the equivalent expression by multiplying the exponent times the logarithm of the base.

$$\log_3(5^2)=2\log_3(5)$$

**Example.** Rewrite $4\ln(x)$ using the power rule for logs to a single logarithm with a leading coefficient of $1$.

**Solution.** Because the logarithm of a power is the product of the exponent times the logarithm of the base, it follows that the product of a number and a logarithm can be written as a power. For the expression $4\ln(x)$, we identify the factor, $4$, as the exponent and the argument, $x$, as the base, and rewrite the product as a logarithm of a power: $4\ln(x)=\ln(x^4)$.

{{< multiplechoice
  question="Expand $\ln x^2$."
  answer="$2\ln(x)$"
  hint="The power rule turns the exponent into a coefficient in front of the logarithm."
>}}
$2\ln(x)$
$\ln(2x)$
$(\ln x)^2$
$\ln(x)+2$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Expand $\ln\left(\tfrac{1}{x^2}\right)$."
  answer="$-2\ln(x)$"
  hint="Rewrite $\tfrac{1}{x^2}$ as $x^{-2}$ first, then apply the power rule."
>}}
$2\ln(x)$
$\ln(x)-2$
$-2\ln(x)$
$-\ln(2x)$
{{< /multiplechoice >}}

{{< fillin
  question="Rewrite $2\log_3(4)$ using the power rule for logs to a single logarithm with a leading coefficient of $1$."
  answer="\log_3(16)"
  answerForm="single-logarithm"
  answerDisplay="$\log_3(16)$"
  hint="The coefficient becomes the exponent on the argument: $2\log_3(4)=\log_3(4^2)$."
>}}

## Expanding Logarithmic Expressions

Taken together, the product rule, quotient rule, and power rule are often called "laws of logs." Sometimes we apply more than one rule in order to simplify an expression. For example:

$$
\begin{array}{lrcl}
& \log_b\left(\tfrac{6x}{y}\right) &=& \log_b(6x)-\log_b y \\[4pt]
& &=& \log_b 6+\log_b x-\log_b y
\end{array}
$$

We can use the power rule to expand logarithmic expressions involving negative and fractional exponents. Here is an alternate proof of the quotient rule for logarithms using the fact that a reciprocal is a negative power:

$$
\begin{array}{lrcl}
& \log_b\left(\tfrac{A}{C}\right) &=& \log_b(AC^{-1}) \\[4pt]
& &=& \log_b(A)+\log_b(C^{-1}) \\[4pt]
& &=& \log_b A+(-1)\log_b C \\[4pt]
& &=& \log_b A-\log_b C
\end{array}
$$

We can also apply the product rule to express a sum or difference of logarithms as the logarithm of a product.

With practice, we can look at a logarithmic expression and expand it mentally, writing the final answer. Remember, however, that we can only do this with products, quotients, powers, and roots—never with addition or subtraction inside the argument of the logarithm.

**Example.** Rewrite $\ln\left(\tfrac{x^4y}{7}\right)$ as a sum or difference of logs.

**Solution.** First, because we have a quotient of two expressions, we can use the quotient rule:

$$\ln\left(\tfrac{x^4y}{7}\right)=\ln(x^4y)-\ln(7)$$

Then seeing the product in the first term, we use the product rule:

$$\ln(x^4y)-\ln(7)=\ln(x^4)+\ln(y)-\ln(7)$$

Finally, we use the power rule on the first term:

$$\ln(x^4)+\ln(y)-\ln(7)=4\ln(x)+\ln(y)-\ln(7)$$

{{< fillin
  question="Expand $\log\left(\tfrac{x^2y^3}{z^4}\right)$."
  answer="2\log(x)+3\log(y)-4\log(z)"
  answerForm="expanded-logarithms"
  answerDisplay="$2\log(x)+3\log(y)-4\log(z)$"
  hint="Apply the quotient rule, then the product rule, then the power rule to each factor."
>}}

**Example.** Expand $\log(\sqrt{x})$.

**Solution.**

$$
\begin{array}{lrcl}
& \log(\sqrt{x}) &=& \log\left(x^{\tfrac12}\right) \\[4pt]
& &=& \tfrac{1}{2}\log x
\end{array}
$$

{{< multiplechoice
  question="Expand $\ln\left(\sqrt[3]{x^2}\right)$."
  answer="$\tfrac{2}{3}\ln(x)$"
  hint="Rewrite the cube root as the exponent $\tfrac13$ on $x^2$, then apply the power rule."
>}}
$\tfrac{2}{3}\ln(x)$
$\tfrac{3}{2}\ln(x)$
$2\ln(x)$
$\ln\left(\tfrac{2x}{3}\right)$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **Q&A.** *Can we expand $\ln(x^2+y^2)$?*

  No. There is no way to expand the logarithm of a sum or difference inside
  the argument of the logarithm.
{{< /callout >}}

**Example.** Expand $\log_6\left(\tfrac{64x^3(4x+1)}{2x-1}\right)$.

**Solution.** We can expand by applying the Product and Quotient Rules.

$$
\begin{array}{lrcl}
\text{Apply the Quotient Rule.} & \log_6\left(\tfrac{64x^3(4x+1)}{2x-1}\right) &=& \log_6 64+\log_6 x^3+\log_6(4x+1)-\log_6(2x-1) \\[4pt]
\text{Simplify by writing }64\text{ as }2^6. & &=& \log_6 2^6+\log_6 x^3+\log_6(4x+1)-\log_6(2x-1) \\[4pt]
\text{Apply the Power Rule.} & &=& 6\log_6 2+3\log_6 x+\log_6(4x+1)-\log_6(2x-1)
\end{array}
$$

{{< multiplechoice
  question="Expand $\ln\left(\tfrac{\sqrt{(x-1)(2x+1)^2}}{x^2-9}\right)$."
  answer="$\tfrac12\ln(x-1)+\ln(2x+1)-\ln(x+3)-\ln(x-3)$"
  hint="Factor $x^2-9$ as $(x-3)(x+3)$, then apply the quotient rule, the product rule, and the power rule (on the square root) in turn."
>}}
$\ln(x-1)+\ln(2x+1)-\ln(x+3)-\ln(x-3)$
$\tfrac12\ln(x-1)+\ln(2x+1)-\ln(x+3)-\ln(x-3)$
$\tfrac12\ln(x-1)+\ln(2x+1)+\ln(x+3)+\ln(x-3)$
$\tfrac12\ln(x-1)+\ln(2x+1)-\ln(x^2-9)$
{{< /multiplechoice >}}

## Condensing Logarithmic Expressions

We can use the rules of logarithms we just learned to condense sums, differences, and products with the same base as a single logarithm. It is important to remember that the logarithms must have the same base to be combined. We will learn later how to change the base of any logarithm before condensing.

{{< callout type="info" >}}
  **How to:** given a sum, difference, or product of logarithms with the same
  base, write an equivalent expression as a single logarithm.

  1. Apply the power property first. Identify terms that are products of
     factors and a logarithm, and rewrite each as the logarithm of a power.
  2. Next apply the product property. Rewrite sums of logarithms as the
     logarithm of a product.
  3. Apply the quotient property last. Rewrite differences of logarithms as
     the logarithm of a quotient.
{{< /callout >}}

**Example.** Write $\log_3(5)+\log_3(8)-\log_3(2)$ as a single logarithm.

**Solution.** Using the product and quotient rules

$$\log_3(5)+\log_3(8)=\log_3(5\cdot8)=\log_3(40)$$

This reduces our original expression to

$$\log_3(40)-\log_3(2)$$

Then, using the quotient rule

$$\log_3(40)-\log_3(2)=\log_3\left(\tfrac{40}{2}\right)=\log_3(20)$$

{{< fillin
  question="Condense $\log(3)-\log(4)+\log(5)-\log(6)$ to a single logarithm."
  answer="\log\left(\frac{5}{8}\right)"
  answerForm="single-logarithm"
  answerDisplay="$\log\left(\tfrac{5}{8}\right)$"
  hint="Combine the added terms with the product rule and the subtracted terms with the quotient rule, then reduce the fraction."
>}}

**Example.** Condense $\log_2(x^2)+\tfrac12\log_2(x-1)-3\log_2((x+3)^2)$.

**Solution.** We apply the power rule first:

$$\log_2(x^2)+\tfrac12\log_2(x-1)-3\log_2((x+3)^2)=\log_2(x^2)+\log_2(\sqrt{x-1})-\log_2((x+3)^6)$$

Next we apply the product rule to the sum:

$$\log_2(x^2)+\log_2(\sqrt{x-1})-\log_2((x+3)^6)=\log_2(x^2\sqrt{x-1})-\log_2((x+3)^6)$$

Finally, we apply the quotient rule to the difference:

$$\log_2(x^2\sqrt{x-1})-\log_2((x+3)^6)=\log_2\tfrac{x^2\sqrt{x-1}}{(x+3)^6}$$

{{< fillin
  question="Rewrite $\log(5)+0.5\log(x)-\log(7x-1)+3\log(x-1)$ as a single logarithm."
  answer="\log\left(\frac{5(x-1)^3\sqrt{x}}{7x-1}\right)"
  answerForm="single-logarithm"
  answerDisplay="$\log\left(\tfrac{5(x-1)^3\sqrt{x}}{7x-1}\right)$"
  hint="Apply the power rule to each term first, then combine with the product and quotient rules."
>}}

**Example.** Rewrite $2\log x-4\log(x+5)+\tfrac1x\log(3x+5)$ as a single logarithm.

**Solution.** We apply the power rule first:

$$2\log x-4\log(x+5)+\tfrac1x\log(3x+5)=\log(x^2)-\log(x+5)^4+\log\!\left((3x+5)^{x^{-1}}\right)$$

Next we rearrange and apply the product rule to the sum:

$$
\begin{array}{lrcl}
& \log(x^2)-\log(x+5)^4+\log\!\left((3x+5)^{x^{-1}}\right) &=& \log(x^2)+\log\!\left((3x+5)^{x^{-1}}\right)-\log(x+5)^4 \\[4pt]
& &=& \log\!\left(x^2(3x+5)^{x^{-1}}\right)-\log(x+5)^4
\end{array}
$$

Finally, we apply the quotient rule to the difference:

$$\log\!\left(x^2(3x+5)^{x^{-1}}\right)-\log(x+5)^4=\log\tfrac{x^2(3x+5)^{x^{-1}}}{(x+5)^4}$$

{{< fillin
  question="Condense $4\left(3\log(x)+\log(x+5)-\log(2x+3)\right)$ to a single logarithm."
  answer="\log\left(\frac{x^{12}(x+5)^4}{(2x+3)^4}\right)"
  answerForm="single-logarithm"
  answerDisplay="$\log\left(\tfrac{x^{12}(x+5)^4}{(2x+3)^4}\right)$"
  hint="Distribute the $4$ first, then apply the power, product, and quotient rules."
>}}

**Example.** Recall that, in chemistry, $\text{pH}=-\log[H^+]$. If the concentration of hydrogen ions in a liquid is doubled, what is the effect on pH?

**Solution.** Suppose $C$ is the original concentration of hydrogen ions, and $P$ is the original pH of the liquid. Then $P=-\log(C)$. If the concentration is doubled, the new concentration is $2C$. Then the pH of the new liquid is

$$\text{pH}=-\log(2C)$$

Using the product rule of logs

$$\text{pH}=-\log(2C)=-(\log(2)+\log(C))=-\log(2)-\log(C)$$

Since $P=-\log(C)$, the new pH is

$$\text{pH}=P-\log(2)\approx P-0.301$$

When the concentration of hydrogen ions is doubled, the pH decreases by about $0.301$.

{{< fillin
  question="How does the pH change when the concentration of positive hydrogen ions is decreased by half? Enter the size of the change, in pH units, rounded to three decimal places."
  answer="0.301"
  answerForm="decimal"
  answerDisplay="increases by about $0.301$"
  hint="Write the new pH as $-\log\left(\tfrac{C}{2}\right)$ and apply the quotient rule; the pH increases by $\log(2)$."
>}}

## Using the Change-of-Base Formula for Logarithms

Most calculators can evaluate only common and natural logs. In order to evaluate logarithms with a base other than 10 or $e$, we use the **change-of-base formula** to rewrite the logarithm as the quotient of logarithms of any other base; when using a calculator, we would change them to common or natural logs.

To derive the change-of-base formula, we use the **one-to-one** property and **power rule for logarithms**.

Given any positive real numbers $M,b,$ and $n$, where $n\ne1$ and $b\ne1$, we show

$$\log_b M=\tfrac{\log_n M}{\log_n b}$$

Let $y=\log_b M$. By exponentiating both sides with base $b$, we arrive at an exponential form, namely $b^y=M$. It follows that

$$
\begin{array}{lrcl}
\text{Apply the one-to-one property.} & \log_n(b^y) &=& \log_n M \\[4pt]
\text{Apply the power rule for logarithms.} & y\log_n b &=& \log_n M \\[4pt]
\text{Isolate }y. & y &=& \tfrac{\log_n M}{\log_n b} \\[4pt]
\text{Substitute for }y. & \log_b M &=& \tfrac{\log_n M}{\log_n b}
\end{array}
$$

For example, to evaluate $\log_5 36$ using a calculator, we must first rewrite the expression as a quotient of common or natural logs. We will use the common log.

$$
\begin{array}{lrcl}
\text{Apply the change of base formula using base 10.} & \log_5 36 &=& \tfrac{\log(36)}{\log(5)} \\[4pt]
\text{Use a calculator to evaluate to 4 decimal places.} & &\approx& 2.2266
\end{array}
$$

{{< callout type="info" >}}
  **The Change-of-Base Formula.** The **change-of-base formula** can be used
  to evaluate a logarithm with any base.

  For any positive real numbers $M,b,$ and $n$, where $n\ne1$ and $b\ne1$,

  $$\log_b M=\tfrac{\log_n M}{\log_n b}.$$

  It follows that the change-of-base formula can be used to rewrite a
  logarithm with any base as the quotient of common or natural logs.

  $$\log_b M=\tfrac{\ln M}{\ln b}\qquad\text{and}\qquad\log_b M=\tfrac{\log M}{\log b}$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a logarithm with the form $\log_b M$, use the
  change-of-base formula to rewrite it as a quotient of logs with any
  positive base $n$, where $n\ne1$.

  1. Determine the new base $n$, remembering that the common log, $\log(x)$,
     has base 10, and the natural log, $\ln(x)$, has base $e$.
  2. Rewrite the log as a quotient using the change-of-base formula.
     - The numerator of the quotient will be a logarithm with base $n$ and
       argument $M$.
     - The denominator of the quotient will be a logarithm with base $n$ and
       argument $b$.
{{< /callout >}}

**Example.** Change $\log_5 3$ to a quotient of natural logarithms.

**Solution.** Because we will be expressing $\log_5 3$ as a quotient of natural logarithms, the new base, $n=e$.

We rewrite the log as a quotient using the change-of-base formula. The numerator of the quotient will be the natural log with argument 3. The denominator of the quotient will be the natural log with argument 5.

$$
\begin{array}{lrcl}
& \log_b M &=& \tfrac{\ln M}{\ln b} \\[4pt]
& \log_5 3 &=& \tfrac{\ln 3}{\ln 5}
\end{array}
$$

{{< fillin
  question="Change $\log_{0.5}(8)$ to a quotient of natural logarithms."
  answer="\frac{\ln(8)}{\ln(0.5)}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{\ln(8)}{\ln(0.5)}$"
  hint="Use the change-of-base formula with $n=e$: numerator $\ln$ of the argument, denominator $\ln$ of the original base $0.5$."
>}}

{{< callout type="info" >}}
  **Q&A.** *Can we change common logarithms to natural logarithms?*

  Yes. Remember that $\log 9$ means $\log_{10}9$. So, $\log 9=\tfrac{\ln 9}{\ln 10}$.
{{< /callout >}}

**Example.** Evaluate $\log_2(10)$ using the change-of-base formula with a calculator.

**Solution.** According to the change-of-base formula, we can rewrite the log base 2 as a logarithm of any other base. Since our calculators can evaluate the natural log, we might choose to use the natural logarithm, which is the log base $e$.

$$
\begin{array}{lrcl}
\text{Apply the change of base formula using base }e. & \log_2 10 &=& \tfrac{\ln 10}{\ln 2} \\[4pt]
\text{Use a calculator to evaluate to 4 decimal places.} & &\approx& 3.3219
\end{array}
$$

{{< fillin
  question="Evaluate $\log_5(100)$ using the change-of-base formula. Round to three decimal places."
  answer="2.861"
  answerForm="decimal"
  answerDisplay="$2.861$"
  hint="Compute $\tfrac{\ln(100)}{\ln(5)}$ on a calculator, then round."
>}}

## Key equations

| The Product Rule for Logarithms | $\log_b(MN)=\log_b(M)+\log_b(N)$ |
| :--- | :--- |
| The Quotient Rule for Logarithms | $\log_b\left(\tfrac{M}{N}\right)=\log_b M-\log_b N$ |
| The Power Rule for Logarithms | $\log_b(M^n)=n\log_b M$ |
| The Change-of-Base Formula | $\log_b M=\tfrac{\log_n M}{\log_n b}\quad n>0,\ n\ne1,\ b\ne1$ |

## Key concepts

- We can use the product rule of logarithms to rewrite the log of a product as a sum of logarithms.
- We can use the quotient rule of logarithms to rewrite the log of a quotient as a difference of logarithms.
- We can use the power rule for logarithms to rewrite the log of a power as the product of the exponent and the log of its base.
- We can use the product rule, the quotient rule, and the power rule together to combine or expand a logarithm with a complex input.
- The rules of logarithms can also be used to condense sums, differences, and products with the same base as a single logarithm.
- We can convert a logarithm with any base to a quotient of logarithms with any other base using the change-of-base formula.
- The change-of-base formula is often used to rewrite a logarithm with a base other than 10 and $e$ as the quotient of natural or common logs. That way a calculator can be used to evaluate.

## Practice

### Use the product rule for logarithms

{{< fillin
  question="Expand $\log_b(7x\cdot2y)$."
  answer="\log_b(2)+\log_b(7)+\log_b(x)+\log_b(y)"
  answerForm="expanded-logarithms"
  answerDisplay="$\log_b(2)+\log_b(7)+\log_b(x)+\log_b(y)$"
  hint="Multiply the factors first (giving $14xy$), then apply the product rule to each prime and variable factor."
>}}

{{< fillin
  question="Condense $\ln(7)+\ln(x)+\ln(y)$ to a single logarithm."
  answer="\ln(7xy)"
  answerForm="single-logarithm"
  answerDisplay="$\ln(7xy)$"
  hint="Apply the product rule: a sum of logs with the same base is the log of the product."
>}}

### Use the quotient rule for logarithms

{{< fillin
  question="Expand $\log_b\left(\tfrac{13}{17}\right)$."
  answer="\log_b(13)-\log_b(17)"
  answerForm="expanded-logarithms"
  answerDisplay="$\log_b(13)-\log_b(17)$"
  hint="Apply the quotient rule: the log of a quotient is the difference of the logs."
>}}

{{< fillin
  question="Condense $\log_b(28)-\log_b(7)$ to a single logarithm."
  answer="\log_b(4)"
  answerForm="single-logarithm"
  answerDisplay="$\log_b(4)$"
  hint="Apply the quotient rule, then simplify $28\div7$."
>}}

### Use the power rule for logarithms

{{< multiplechoice
  question="Expand $\ln\left(\tfrac{1}{4^k}\right)$ as much as possible."
  answer="$-k\ln(4)$"
  hint="Rewrite $\tfrac{1}{4^k}$ as $4^{-k}$, then apply the power rule."
>}}
$k\ln(4)$
$-k\ln(4)$
$\ln(4)-k$
$-\ln(4k)$
{{< /multiplechoice >}}

{{< fillin
  question="Use the Power Rule to rewrite $-\log_b\left(\tfrac17\right)$ as a single logarithm with a leading coefficient of $1$."
  answer="\log_b(7)"
  answerForm="expanded-logarithms"
  answerDisplay="$\log_b(7)$"
  hint="Rewrite $\tfrac17$ as $7^{-1}$ and apply the power rule; the two negative signs cancel."
>}}

### Expand logarithmic expressions

{{< fillin
  question="Expand $\log\left(\tfrac{x^{15}y^{13}}{z^{19}}\right)$ as much as possible."
  answer="15\log(x)+13\log(y)-19\log(z)"
  answerForm="expanded-logarithms"
  answerDisplay="$15\log(x)+13\log(y)-19\log(z)$"
  hint="Apply the quotient rule first, then the product rule, then the power rule to each factor."
>}}

{{< fillin
  question="Expand $\log\left(\sqrt{x^3y^{-4}}\right)$ as much as possible."
  answer="\frac{3}{2}\log(x)-2\log(y)"
  answerForm="expanded-logarithms"
  answerDisplay="$\tfrac32\log(x)-2\log(y)$"
  hint="Rewrite the square root as an exponent of $\tfrac12$, then apply the power rule to each factor inside."
>}}

{{< fillin
  question="Expand $\log\left(x^2y^3\sqrt[3]{x^2y^5}\right)$ as much as possible."
  answer="\frac{8}{3}\log(x)+\frac{14}{3}\log(y)"
  answerForm="expanded-logarithms"
  answerDisplay="$\tfrac83\log(x)+\tfrac{14}{3}\log(y)$"
  hint="Rewrite the cube root as an exponent of $\tfrac13$, combine the like factors of $x$ and of $y$, then apply the product and power rules."
>}}

### Condense logarithmic expressions

{{< fillin
  question="Condense $\ln(6x^9)-\ln(3x^2)$ to a single logarithm."
  answer="\ln(2x^7)"
  answerForm="single-logarithm"
  answerDisplay="$\ln(2x^7)$"
  hint="Apply the quotient rule, then simplify the resulting fraction $\tfrac{6x^9}{3x^2}$."
>}}

{{< fillin
  question="Condense $\log(x)-\tfrac12\log(y)+3\log(z)$ to a single logarithm."
  answer="\log\left(\frac{xz^3}{\sqrt{y}}\right)"
  answerForm="single-logarithm"
  answerDisplay="$\log\left(\tfrac{xz^3}{\sqrt{y}}\right)$"
  hint="Apply the power rule to each term first, then the product and quotient rules."
>}}

### Use the change-of-base formula for logarithms

{{< fillin
  question="Rewrite $\log_7(15)$ as an equivalent ratio of logs using base $e$."
  answer="\frac{\ln(15)}{\ln(7)}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{\ln(15)}{\ln(7)}$"
  hint="Use the change-of-base formula with $n=e$: the numerator is $\ln$ of the argument, the denominator is $\ln$ of the original base."
>}}

{{< fillin
  question="Use the change-of-base formula to evaluate $\log_3(22)$ as a quotient of natural logs, rounded to five decimal places."
  answer="2.81359"
  answerForm="decimal"
  answerDisplay="$2.81359$"
  hint="Compute $\tfrac{\ln(22)}{\ln(3)}$ on a calculator."
>}}

{{< fillin
  question="Use the change-of-base formula to evaluate $\log_6(5.38)$ as a quotient of natural logs, rounded to five decimal places."
  answer="0.93913"
  answerForm="decimal"
  answerDisplay="$0.93913$"
  hint="Compute $\tfrac{\ln(5.38)}{\ln(6)}$ on a calculator."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 4.5: Logarithmic Properties](https://openstax.org/books/precalculus-2e/pages/4-5-logarithmic-properties) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the pinned CNXML's "coreq-skills" block, a prerequisite/corequisite review section carrying its own "Learning Objectives" (exponent-property and logarithm-property review keyed to Intermediate Algebra sections 5.2.1 and 10.4.1) that precedes the real section content in the source file but is not part of the printed textbook — the rendered PDF (pages 470–471) runs directly from the end of Section 4.4 to this section's own six-item Learning Objectives list and its pH introduction, with no exponent-review material printed anywhere on those pages; omitted the decorative photograph of litmus paper testing hydrochloric acid, which carries no mathematics; converted every source Try It into a real interactive component; five Try Its (the quotient-rule expansion of $\log_3\left(\tfrac{7x^2+21x}{7x(x-1)(x-2)}\right)$; the power-rule expansions of $\ln x^2$ and $\ln\left(\tfrac{1}{x^2}\right)$; the root expansion $\ln\left(\sqrt[3]{x^2}\right)$; and the complex expansion $\ln\left(\tfrac{\sqrt{(x-1)(2x+1)^2}}{x^2-9}\right)$) and one end-of-section exercise (expanding $\ln\left(\tfrac{1}{4^k}\right)$) became multiple-choice questions rather than fill-ins, because their fully-expanded answers either keep an irreducible binomial inside a logarithm's argument (the `expanded-logarithms` answer form accepts only a single number or variable there) or are written with $\ln$, which the pinned answer-form checker's `expanded-logarithms` predicate does not scan for at all, so a fill-in declaring that form would silently accept the unexpanded printed expression retyped back; verified independently that this is a grader limitation, not a content issue, before adapting each one; the pH-decrease-by-half Try It and the evaluate-$\log_5(100)$ Try It ask for a rounded decimal rather than an exact log expression, matching the pinned solution's own three-decimal rounding; and adapted fourteen selected end-of-section exercises — two product-rule, two quotient-rule, two power-rule, three general expansions, two general condensations, and three change-of-base evaluations — into interactive components in a closing Practice block, one group per objective. The Practice item rewriting $-\log_b\left(\tfrac17\right)$ is worded "use the Power Rule to rewrite… as a single logarithm" rather than the source's "condense to a single logarithm," and declares `expanded-logarithms` rather than `single-logarithm`: the printed prompt is itself already a single logarithm (negated), so `single-logarithm` — which accepts a leading unary minus as part of "the term IS the logarithm" — would accept it retyped verbatim; `expanded-logarithms`'s single-atomic-argument requirement correctly rejects the un-simplified $\tfrac17$ argument while accepting the simplified $\log_b(7)$. The two "quotient of logs" change-of-base items ($\log_{0.5}(8)$ and $\log_7(15)$) declare `single-fraction` rather than the seemingly natural `exact-log`: `exact-log`'s own grammar admits a bare, unconverted logarithm as a zero-integer-coefficient case, so it would accept the printed logarithm retyped back without the required change-of-base conversion; `single-fraction` correctly requires the one-quotient shape the conversion produces.</small>
