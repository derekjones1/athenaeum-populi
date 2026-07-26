---
title: Use the Properties of Logarithms
description: >-
  Using the properties of logarithms, expanding and condensing logarithmic expressions, and using the change-of-base formula.
source_section: "10.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**
- Use the properties of logarithms
- Use the Change of Base Formula
{{< /callout >}}

## Use the Properties of Logarithms

Now that we have learned about exponential and logarithmic functions, we can introduce some of the properties of logarithms. These will be very helpful as we continue to solve both exponential and logarithmic equations.

The first two properties derive from the definition of logarithms. Since ${a}^{0}=1,$ we can convert this to logarithmic form and get ${\text{log}}_{a}1=0.$ Also, since ${a}^{1}=a,$ we get ${\text{log}}_{a}a=1.$

{{< callout type="info" >}}
**Properties of Logarithms.**

$$
\log_a 1=0
\qquad\text{and}\qquad
\log_a a=1.
$$
{{< /callout >}}

In the next example we could evaluate the logarithm by converting to exponential form, as we have done previously, but recognizing and then applying the properties saves time.

**Example 10.28.** Evaluate using the properties of logarithms: ⓐ ${\text{log}}_{8}1$ and ⓑ ${\text{log}}_{6}6.$

**Solution.**

ⓐ

|  | ${\text{log}}_{8}1$ |
| --- | --- |
| Use the property, ${\text{log}}_{a}1=0$. | ${\text{log}}_{8}1=0$ |

ⓑ $\begin{array}{llllll} & & & {\text{log}}_{6}6 & & \\\text{Use the property,}{\text{log}}_{a}a=1. & & & 1 & & {\text{log}}_{6}6=1 \\\end{array}$

{{< fillin
  question="Evaluate $\log_{13}1$ and $\log_9 9$. Enter the results as an ordered pair."
  answer="(0,1)"
  answerDisplay="$\left(0,\ 1\right)$"
  hint="Use $\log_a1=0$ and $\log_a a=1$."
  placeholder="ordered pair"
>}}

{{< fillin
  question="Evaluate $\log_5 1$ and $\log_7 7$. Enter the results as an ordered pair."
  answer="(0,1)"
  answerDisplay="$\left(0,\ 1\right)$"
  hint="Apply the two basic logarithm properties."
  placeholder="ordered pair"
>}}

The next two properties can also be verified by converting them from exponential form to logarithmic form, or the reverse.

The exponential equation ${a}^{{\text{log}}_{a}x}=x$ converts to the logarithmic equation ${\text{log}}_{a}x={\text{log}}_{a}x,$ which is a true statement for positive values for x only.

The logarithmic equation ${\text{log}}_{a}{a}^{x}=x$ converts to the exponential equation ${a}^{x}={a}^{x},$ which is also a true statement.

These two properties are called inverse properties because, when we have the same base, raising to a power “undoes” the log and taking the log “undoes” raising to a power. These two properties show the composition of functions. Both ended up with the identity function which shows again that the exponential and logarithmic functions are inverse functions.

{{< callout type="info" >}}
**Inverse Properties of Logarithms.** For $a>0$, $x>0$, and $a\ne 1$,

$$
a^{\log_a x}=x
\qquad\text{and}\qquad
\log_a(a^x)=x.
$$
{{< /callout >}}

In the next example, apply the inverse properties of logarithms.

**Example 10.29.** Evaluate using the properties of logarithms: ⓐ ${4}^{{\text{log}}_{4}9}$ and ⓑ ${\text{log}}_{3}{3}^{5}.$

**Solution.**

ⓐ

|  | ${4}^{{\text{log}}_{4}9}$ |
| --- | --- |
| Use the property, ${a}^{{\text{log}}_{a}x}=x$. | ${4}^{{\text{log}}_{4}9}=9$ |

ⓑ

|  | ${\text{log}}_{3}{3}^{5}$ |
| --- | --- |
| Use the property, ${\text{log}}_{a}{a}^{x}=x$. | ${\text{log}}_{3}{3}^{5}=5$ |

{{< fillin
  question="Evaluate $5^{\log_5 15}$ and $\log_7(7^4)$. Enter the results as an ordered pair."
  answer="(15,4)"
  answerDisplay="$\left(15,\ 4\right)$"
  hint="Use the inverse properties $a^{\log_a x}=x$ and $\log_a(a^x)=x$."
  placeholder="ordered pair"
>}}

{{< fillin
  question="Evaluate $2^{\log_2 8}$ and $\log_2(2^{15})$. Enter the results as an ordered pair."
  answer="(8,15)"
  answerDisplay="$\left(8,\ 15\right)$"
  hint="Each logarithm and exponential has the same base, so the operations undo each other."
  placeholder="ordered pair"
>}}

There are three more properties of logarithms that will be useful in our work. We know exponential functions and logarithmic function are very interrelated. Our definition of logarithm shows us that a logarithm is the exponent of the equivalent exponential. The properties of exponents have related properties for exponents.

In the Product Property of Exponents, ${a}^{m}\cdot {a}^{n}={a}^{m+n},$ we see that to multiply the same base, we add the exponents. The Product Property of Logarithms, ${\text{log}}_{a}(M\cdot N)={\text{log}}_{a}M+{\text{log}}_{a}N$ tells us to take the log of a product, we add the log of the factors.

{{< callout type="info" >}}
**Product Property of Logarithms.** If $M>0,N>0\text{,}\text{a}>0$ and $\text{a}\ne 1,$ then,

$$
\log_a(M\cdot N)=\log_a M+\log_a N.
$$

The logarithm of a product is the sum of the logarithms.
{{< /callout >}}

We use this property to write the log of a product as a sum of the logs of each factor.

**Example 10.30.** Use the Product Property of Logarithms to write each logarithm as a sum of logarithms. Simplify, if possible: ⓐ ${\text{log}}_{3}7x$ and ⓑ ${\text{log}}_{4}64xy.$

**Solution.**

ⓐ

|  | ${\text{log}}_{3}7x$ |
| --- | --- |
| Use the Product Property, ${\text{log}}_{a}(M\cdot N)={\text{log}}_{a}M+{\text{log}}_{a}N$. | ${\text{log}}_{3}7+{\text{log}}_{3}x$ |
|  | ${\text{log}}_{3}7x={\text{log}}_{3}7+{\text{log}}_{3}x$ |

ⓑ

|  | ${\text{log}}_{4}64xy$ |
| --- | --- |
| Use the Product Property, ${\text{log}}_{a}(M\cdot N)={\text{log}}_{a}M+{\text{log}}_{a}N$. | ${\text{log}}_{4}64+{\text{log}}_{4}x+{\text{log}}_{4}y$ |
| Simplify by evaluating ${\text{log}}_{4}64$. | $3+{\text{log}}_{4}x+{\text{log}}_{4}y$ |
|  | ${\text{log}}_{4}64xy=3+{\text{log}}_{4}x+{\text{log}}_{4}y$ |

{{< fillin
  question="Expand $\log_3(3x)$ and $\log_2(8xy)$ using the Product Property. Enter the results as an ordered pair."
  answer="(1+\log_3 x,3+\log_2 x+\log_2 y)"
  answerDisplay="$\left(1+\log_3x,\ 3+\log_2x+\log_2y\right)$"
  hint="Split each product into a sum, then evaluate $\log_3 3$ and $\log_2 8$."
  placeholder="ordered pair"
>}}

{{< fillin
  question="Expand $\log_9(9x)$ and $\log_3(27xy)$ using the Product Property. Enter the results as an ordered pair."
  answer="(1+\log_9 x,3+\log_3 x+\log_3 y)"
  answerDisplay="$\left(1+\log_9x,\ 3+\log_3x+\log_3y\right)$"
  hint="Use the logarithm of a product, then simplify logarithms whose arguments are powers of the base."
  placeholder="ordered pair"
>}}

Similarly, in the Quotient Property of Exponents, $\tfrac{{a}^{m}}{{a}^{n}}={a}^{m-n},$ we see that to divide the same base, we subtract the exponents. The Quotient Property of Logarithms, ${\text{log}}_{a}\tfrac{M}{N}={\text{log}}_{a}M-{\text{log}}_{a}N$ tells us to take the log of a quotient, we subtract the log of the numerator and denominator.

{{< callout type="info" >}}
**Quotient Property of Logarithms.** If $M>0,N>0\text{,}\text{a}>0$ and $\text{a}\ne 1,$ then,

$$
\log_a\left(\tfrac{M}{N}\right)=\log_a M-\log_a N.
$$

The logarithm of a quotient is the difference of the logarithms.
{{< /callout >}}

Note that ${\text{log}}_{a}M-{\text{log}}_{a}N\ne {\text{log}}_{a}(M-N).$

We use this property to write the log of a quotient as a difference of the logs of each factor.

**Example 10.31.** Use the Quotient Property of Logarithms to write each logarithm as a difference of logarithms. Simplify, if possible.ⓐ ${\text{log}}_{5}\tfrac{5}{7}$ and ⓑ $\text{log}\tfrac{x}{100}$

**Solution.**

ⓐ

|  | ${\text{log}}_{5}\tfrac{5}{7}$ |
| --- | --- |
| Use the Quotient Property, ${\text{log}}_{a}\tfrac{M}{N}={\text{log}}_{a}M-{\text{log}}_{a}N$. | ${\text{log}}_{5}5-{\text{log}}_{5}7$ |
| Simplify. | $1-{\text{log}}_{5}7$ |
|  | ${\text{log}}_{5}\tfrac{5}{7}=1-{\text{log}}_{5}7$ |

ⓑ

|  | $\text{log}\tfrac{x}{100}$ |
| --- | --- |
| Use the Quotient Property, ${\text{log}}_{a}\tfrac{M}{N}={\text{log}}_{a}M-{\text{log}}_{a}N$. | $\text{log}x-\text{log}100$ |
| Simplify. | $\text{log}x-2$ |
|  | $\text{log}\tfrac{x}{100}=\text{log}x-2$ |

{{< fillin
  question="Expand $\log_4(\tfrac34)$ and $\log(\tfrac{x}{1000})$ using the Quotient Property. Enter the results as an ordered pair."
  answer="(\log_4 3-1,\log x-3)"
  answerDisplay="$\left(\log_4 3-1,\ \log x-3\right)$"
  hint="Write the logarithm of a quotient as a difference, then evaluate the denominator logarithms."
  placeholder="ordered pair"
>}}

{{< fillin
  question="Expand $\log_2(\tfrac54)$ and $\log(\tfrac{10}{y})$ using the Quotient Property. Enter the results as an ordered pair."
  answer="(\log_2 5-2,1-\log y)"
  answerDisplay="$\left(\log_2 5-2,\ 1-\log y\right)$"
  hint="Use $\log_a(\tfrac{M}{N})=\log_aM-\log_aN$."
  placeholder="ordered pair"
>}}

The third property of logarithms is related to the Power Property of Exponents, ${({a}^{m})}^{n}={a}^{m\cdot n},$ we see that to raise a power to a power, we multiply the exponents. The Power Property of Logarithms, ${\text{log}}_{a}{M}^{p}=p{\text{log}}_{a}M$ tells us to take the log of a number raised to a power, we multiply the power times the log of the number.

{{< callout type="info" >}}
**Power Property of Logarithms.** If $M>0,\text{a}>0,\text{a}\ne 1$ and $p$ is any real number then,

$$
\log_a(M^p)=p\log_a M.
$$

The log of a number raised to a power is the product of the power times the log of the number.
{{< /callout >}}

We use this property to write the log of a number raised to a power as the product of the power times the log of the number. We essentially take the exponent and throw it in front of the logarithm.

**Example 10.32.** Use the Power Property of Logarithms to write each logarithm as a product of logarithms. Simplify, if possible.ⓐ ${\text{log}}_{5}{4}^{3}$ and ⓑ $\text{log}{x}^{10}$

**Solution.**

ⓐ

|  | ${\text{log}}_{5}{4}^{3}$ |
| --- | --- |
| Use the Power Property, ${\text{log}}_{a}{M}^{p}=p{\text{log}}_{a}M$. | $3{\text{log}}_{5}4$ |
|  | ${\text{log}}_{5}{4}^{3}=3{\text{log}}_{5}4$ |

ⓑ

|  | $\text{log}{x}^{10}$ |
| --- | --- |
| Use the Power Property, ${\text{log}}_{a}{M}^{p}=p{\text{log}}_{a}M$. | $10\text{log}x$ |
|  | $\text{log}{x}^{10}=10\text{log}x$ |

{{< fillin
  question="Expand $\log_7(5^4)$ and $\log(x^{100})$ using the Power Property. Enter the results as an ordered pair."
  answer="(4\log_7 5,100\log x)"
  answerDisplay="$\left(4\log_7 5,\ 100\log x\right)$"
  hint="Move each exponent in front of its logarithm."
  placeholder="ordered pair"
>}}

{{< fillin
  question="Expand $\log_2(3^7)$ and $\log(x^{20})$ using the Power Property. Enter the results as an ordered pair."
  answer="(7\log_2 3,20\log x)"
  answerDisplay="$\left(7\log_2 3,\ 20\log x\right)$"
  hint="Use $\log_a(M^p)=p\log_aM$."
  placeholder="ordered pair"
>}}

We summarize the Properties of Logarithms here for easy reference. While the natural logarithms are a special case of these properties, it is often helpful to also show the natural logarithm version of each property.

{{< callout type="info" >}}
**Properties of Logarithms.** If $M>0,N>0,\text{a}>0,\text{a}\ne 1$ and $p$ is any real number then,

| Property | Base $a$ | Base $e$ |
| --- | --- | --- |
|  | ${\text{log}}_{a}1=0$ | $\text{ln}1=0$ |
|  | ${\text{log}}_{a}a=1$ | $\text{ln}e=1$ |
| Inverse Properties | $\begin{array}{llllll}{a}^{{\text{log}}_{a}x}=x \\{\text{log}}_{a}{a}^{x}=x \\\end{array}$ | $\begin{array}{llllll}{e}^{\text{ln}x}=x\ \\\text{ln}{e}^{x}=x \\\end{array}$ |
| Product Property of Logarithms | ${\text{log}}_{a}(M\cdot N)={\text{log}}_{a}M+{\text{log}}_{a}N$ | $\text{ln}(M\cdot N)=\text{ln}M+\text{ln}N$ |
| Quotient Property of Logarithms | ${\text{log}}_{a}\tfrac{M}{N}={\text{log}}_{a}M-{\text{log}}_{a}N$ | $\text{ln}\tfrac{M}{N}=\text{ln}M-\text{ln}N$ |
| Power Property of Logarithms | ${\text{log}}_{a}{M}^{p}=p{\text{log}}_{a}M$ | $\text{ln}{M}^{p}=p\text{ln}M$ |
{{< /callout >}}

Now that we have the properties we can use them to “expand” a logarithmic expression. This means to write the logarithm as a sum or difference and without any powers.

We generally apply the Product and Quotient Properties before we apply the Power Property.

**Example 10.33.** Use the Properties of Logarithms to expand the logarithm ${\text{log}}_{4}(2{x}^{3}{y}^{2})$. Simplify, if possible.

**Solution.**

|  | ${\text{log}}_{4}(2{x}^{3}{y}^{2})$ |
| --- | --- |
| Use the Product Property, ${\text{log}}_{a}(M\cdot N)={\text{log}}_{a}M+{\text{log}}_{a}N$. | ${\text{log}}_{4}2+{\text{log}}_{4}{x}^{3}+{\text{log}}_{4}{y}^{2}$ |
| Use the Power Property, ${\text{log}}_{a}{M}^{p}=p{\text{log}}_{a}M$, on the last two terms. | ${\text{log}}_{4}2+3{\text{log}}_{4}x+2{\text{log}}_{4}y$ |
| Simplify. | $\tfrac{1}{2}+3{\text{log}}_{4}x+2{\text{log}}_{4}y$ |
|  | ${\text{log}}_{4}(2{x}^{3}{y}^{2})=\tfrac{1}{2}+3{\text{log}}_{4}x+2{\text{log}}_{4}y$ |

{{< fillin
  question="Expand $\log_2(5x^4y^2)$ using the properties of logarithms."
  answer="\log_2 5+4\log_2 x+2\log_2 y"
  answerDisplay="$\log_2 5+4\log_2x+2\log_2y$"
  hint="Apply the Product Property first and the Power Property to each variable factor."
>}}

{{< fillin
  question="Expand $\log_3(7x^5y^3)$ using the properties of logarithms."
  answer="\log_3 7+5\log_3 x+3\log_3 y"
  answerDisplay="$\log_3 7+5\log_3x+3\log_3y$"
  hint="Split the product into a sum and move exponents in front."
>}}

When we have a radical in the logarithmic expression, it is helpful to first write its radicand as a rational exponent.

**Example 10.34.** Use the Properties of Logarithms to expand the logarithm ${\text{log}}_{2}\sqrt[4]{\tfrac{{x}^{3}}{3{y}^{2}z}}$. Simplify, if possible.

**Solution.**

|  | ${\text{log}}_{2}\sqrt[4]{\tfrac{{x}^{3}}{3{y}^{2}z}}$ |
| --- | --- |
| Rewrite the radical with a rational exponent. | ${\text{log}}_{2}{(\tfrac{{x}^{3}}{3{y}^{2}z})}^{\tfrac{1}{4}}$ |
| Use the Power Property, ${\text{log}}_{a}{M}^{p}=p{\text{log}}_{a}M$. | $\tfrac{1}{4}{\text{log}}_{2}(\tfrac{{x}^{3}}{3{y}^{2}z})$ |
| Use the Quotient Property, ${\text{log}}_{a}(\tfrac{M}{N})={\text{log}}_{a}M-{\text{log}}_{a}N$. | $\tfrac{1}{4}({\text{log}}_{2}({x}^{3})-{\text{log}}_{2}(3{y}^{2}z))$ |
| Use the Product Property, ${\text{log}}_{a}(M\cdot N)={\text{log}}_{a}M+{\text{log}}_{a}N$, in the second term. | $\tfrac{1}{4}({\text{log}}_{2}({x}^{3})-({\text{log}}_{2}3+{\text{log}}_{2}{y}^{2}+{\text{log}}_{2}z))$ |
| Use the Power Property, ${\text{log}}_{a}{M}^{p}=p{\text{log}}_{a}M$, inside the parentheses. | $\tfrac{1}{4}(3{\text{log}}_{2}x-({\text{log}}_{2}3+2{\text{log}}_{2}y+{\text{log}}_{2}z))$ |
| Simplify by distributing. | $\tfrac{1}{4}(3{\text{log}}_{2}x-{\text{log}}_{2}3-2{\text{log}}_{2}y-{\text{log}}_{2}z)$ |
|  | ${\text{log}}_{2}\sqrt[4]{\tfrac{{x}^{3}}{3{y}^{2}z}}=\tfrac{1}{4}(3{\text{log}}_{2}x-{\text{log}}_{2}3-2{\text{log}}_{2}y-{\text{log}}_{2}z)$ |

{{< fillin
  question="Expand $\log_4\sqrt[5]{\tfrac{x^4}{2y^3z^2}}$ using the properties of logarithms."
  answer="\frac{1}{5}(4\log_4 x-\frac{1}{2}-3\log_4 y-2\log_4 z)"
  answerDisplay="$\tfrac15\left(4\log_4x-\tfrac12-3\log_4y-2\log_4z\right)$"
  hint="Write the fifth root as a $\tfrac15$ power, then use the quotient, product, and power properties."
>}}

{{< fillin
  question="Expand $\log_3\sqrt[3]{\tfrac{x^2}{5yz}}$ using the properties of logarithms."
  answer="\frac{1}{3}(2\log_3 x-\log_3 5-\log_3 y-\log_3 z)"
  answerDisplay="$\tfrac13\left(2\log_3x-\log_3 5-\log_3y-\log_3z\right)$"
  hint="Move the cube-root exponent in front, then expand the quotient and denominator product."
>}}

The opposite of expanding a logarithm is to condense a sum or difference of logarithms that have the same base into a single logarithm. We again use the properties of logarithms to help us, but in reverse.

To condense logarithmic expressions with the same base into one logarithm, we start by using the Power Property to get the coefficients of the log terms to be one and then the Product and Quotient Properties as needed.

**Example 10.35.** Use the Properties of Logarithms to condense the logarithm ${\text{log}}_{4}3+{\text{log}}_{4}x-{\text{log}}_{4}y$. Simplify, if possible.

**Solution.**

| The log expressions all have the same base, 4. | ${\text{log}}_{4}3+{\text{log}}_{4}x-{\text{log}}_{4}y$ |
| --- | --- |
| The first two terms are added, so we use the Product Property, ${\text{log}}_{a}M+{\text{log}}_{a}N={\text{log}}_{a}(M\cdot N)$. | ${\text{log}}_{4}3x-{\text{log}}_{4}y$ |
| Since the logs are subtracted, we use the Quotient Property, ${\text{log}}_{a}M-{\text{log}}_{a}N={\text{log}}_{a}(\tfrac{M}{N})$. | ${\text{log}}_{4}\tfrac{3x}{y}$ |
|  | ${\text{log}}_{4}3+{\text{log}}_{4}x-{\text{log}}_{4}y={\text{log}}_{4}\tfrac{3x}{y}$ |

{{< fillin
  question="Condense $\log_2 5+\log_2x-\log_2y$ to one logarithm."
  answer="\log_2\frac{5x}{y}"
  answerDisplay="$\log_2\left(\tfrac{5x}{y}\right)$"
  hint="A sum of logarithms becomes a product; a difference becomes a quotient."
>}}

{{< fillin
  question="Condense $\log_3 6-\log_3x-\log_3y$ to one logarithm."
  answer="\log_3\frac{6}{xy}"
  answerDisplay="$\log_3\left(\tfrac{6}{xy}\right)$"
  hint="Combine the two subtracted logarithms into denominator factors."
>}}

**Example 10.36.** Use the Properties of Logarithms to condense the logarithm $2{\text{log}}_{3}x+4{\text{log}}_{3}(x+1)$. Simplify, if possible.

**Solution.**

| The log expressions have the same base, 3. | $2{\text{log}}_{3}x+4{\text{log}}_{3}(x+1)$ |
| --- | --- |
| Use the Power Property, ${\text{log}}_{a}(M^p)=p{\text{log}}_{a}M$. | ${\text{log}}_{3}{x}^{2}+{\text{log}}_{3}{(x+1)}^{4}$ |
| The terms are added, so we use the Product Property, ${\text{log}}_{a}M+{\text{log}}_{a}N={\text{log}}_{a}(M\cdot N)$. | ${\text{log}}_{3}{x}^{2}{(x+1)}^{4}$ |
|  | $2{\text{log}}_{3}x+4{\text{log}}_{3}(x+1)={\text{log}}_{3}{x}^{2}{(x+1)}^{4}$ |

{{< fillin
  question="Condense $3\log_2x+2\log_2(x-1)$ to one logarithm."
  answer="\log_2(x^3(x-1)^2)"
  answerDisplay="$\log_2\left(x^3(x-1)^2\right)$"
  hint="Use the Power Property in reverse, then combine the sum as a product."
>}}

{{< fillin
  question="Condense $2\log x+2\log(x+1)$ to one logarithm."
  answer="\log(x^2(x+1)^2)"
  answerDisplay="$\log\left(x^2(x+1)^2\right)$"
  hint="Move each coefficient to an exponent, then use the Product Property in reverse."
>}}

## Use the Change-of-Base Formula

To evaluate a logarithm with any other base, we can use the Change-of-Base Formula. We will show how this is derived.

The Change-of-Base Formula introduces a new base $b.$ This can be any base b we want where $b>0,b\ne 1.$ Because our calculators have keys for logarithms base 10 and base e, we will rewrite the Change-of-Base Formula with the new base as 10 or e.

{{< callout type="info" >}}
**Change-of-Base Formula.** For any logarithmic bases $a,b$ and $M>0,$

$$
\log_a M=\tfrac{\log_b M}{\log_b a}.
$$

In particular,

$$
\log_a M=\tfrac{\log M}{\log a}
\qquad\text{or}\qquad
\log_a M=\tfrac{\ln M}{\ln a}.
$$
{{< /callout >}}

When we use a calculator to find the logarithm value, we usually round to three decimal places. This gives us an approximate value and so we use the approximately equal symbol $(\approx)$.

**Example 10.37.** Rounding to three decimal places, approximate ${\text{log}}_{4}35.$

**Solution.**

|  | $\log_4 35$ |
| --- | --- |
| Use the Change-of-Base Formula. | $\log_a M=\tfrac{\log_b M}{\log_b a}$ |
| Identify $a=4$ and $M=35$. Choose 10 for $b$. | $\log_4 35=\tfrac{\log 35}{\log 4}$ |
| Enter $\tfrac{\log 35}{\log 4}$ using the calculator's base-10 log key. Round to three decimal places. | $\log_4 35\approx2.565$ |

{{< fillin
  question="Approximate $\log_3 42$ to three decimal places."
  answer="3.402"
  answerDisplay="$3.402$"
  hint="Use the change-of-base formula $\log_3 42=\tfrac{\log42}{\log3}$."
>}}

{{< fillin
  question="Approximate $\log_5 46$ to three decimal places."
  answer="2.379"
  answerDisplay="$2.379$"
  hint="Use $\log_5 46=\tfrac{\log46}{\log5}$ and round only at the end."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and practice with using the properties of logarithms.
{{< /callout >}}


---

<small>This section is adapted from [Intermediate Algebra 2e, Section 10.4: Use the Properties of Logarithms](https://openstax.org/books/intermediate-algebra-2e/pages/10-4-use-the-properties-of-logarithms) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: reformatted the worked solutions for the web; omitted the Be Prepared quiz, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
