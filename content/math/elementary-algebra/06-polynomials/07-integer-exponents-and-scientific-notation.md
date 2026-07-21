---
title: Integer Exponents and Scientific Notation
description: >-
  Using the definition of a negative exponent, simplifying expressions with
  integer exponents, converting between decimal notation and scientific
  notation, and multiplying and dividing using scientific notation — adapted
  from OpenStax Elementary Algebra 2e, Section 6.7.
source_section: "6.7"
weight: 7
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use the definition of a
  negative exponent; simplify expressions with integer exponents; convert from
  decimal notation to scientific notation; convert scientific notation to
  decimal form; and multiply and divide using scientific notation.
{{< /callout >}}

## Use the Definition of a Negative Exponent

We saw earlier in this chapter that the Quotient Property for Exponents has
two forms depending on whether the exponent is larger in the numerator or the
denominator.

{{< callout type="info" >}}
  **Quotient Property for Exponents.** If $a$ is a real number, $a \neq 0$,
  and $m$ and $n$ are whole numbers, then

  $$\frac{a^m}{a^n} = a^{m-n},\ m > n \qquad \text{and} \qquad \frac{a^m}{a^n} = \frac{1}{a^{n-m}},\ n > m$$
{{< /callout >}}

What if we just subtract exponents regardless of which is larger? Let's
consider $\tfrac{x^2}{x^5}$. We subtract the exponent in the denominator from
the exponent in the numerator:

$$\frac{x^2}{x^5} = x^{2-5} = x^{-3}$$

We can also simplify $\tfrac{x^2}{x^5}$ by dividing out common factors:

$$\frac{x^2}{x^5} = \frac{x \cdot x}{x \cdot x \cdot x \cdot x \cdot x} = \frac{1}{x^3}$$

This implies that $x^{-3} = \tfrac{1}{x^3}$, and it leads us to the definition
of a **negative exponent**.

{{< callout type="info" >}}
  **Negative Exponent.** If $n$ is an integer and $a \neq 0$, then

  $$a^{-n} = \frac{1}{a^n}$$
{{< /callout >}}

The negative exponent tells us we can rewrite the expression by taking the
reciprocal of the base and then changing the sign of the exponent.

Any expression that has negative exponents is not considered to be in simplest
form. We will use the definition of a negative exponent and other properties
of exponents to write an expression with only positive exponents. For example,
if after simplifying an expression we end up with the expression $x^{-3}$, we
will take one more step and write $\tfrac{1}{x^3}$. The answer is considered to
be in simplest form when it has only positive exponents.

**Example.** Simplify: (a) $4^{-2}$ (b) $10^{-3}$.

(a) Use the definition of a negative exponent, $a^{-n} = \tfrac{1}{a^n}$:
$4^{-2} = \tfrac{1}{4^2} = \tfrac{1}{16}$.

(b) Use the definition of a negative exponent:
$10^{-3} = \tfrac{1}{10^3} = \tfrac{1}{1000}$.

{{< fillin
  question="Simplify: $2^{-3}$."
  answer="\frac{1}{8}"
  answerDisplay="$\tfrac{1}{8}$"
  hint="A negative exponent means take the reciprocal: $2^{-3} = 1/2^3$."
>}}

{{< fillin
  question="Simplify: $3^{-2}$."
  answer="\frac{1}{9}"
  answerDisplay="$\tfrac{1}{9}$"
  hint="A negative exponent means take the reciprocal: $3^{-2} = 1/3^2$."
>}}

When we raised a fraction whose numerator is one and whose denominator is an
integer to a negative exponent, we found:

$$\frac{1}{a^{-n}} = \frac{1}{\tfrac{1}{a^n}} = 1 \cdot \frac{a^n}{1} = a^n$$

This leads to the **Property of Negative Exponents**.

{{< callout type="info" >}}
  **Property of Negative Exponents.** If $n$ is an integer and $a \neq 0$,
  then

  $$\frac{1}{a^{-n}} = a^n$$
{{< /callout >}}

**Example.** Simplify: (a) $\tfrac{1}{y^{-4}}$ (b) $\tfrac{1}{3^{-2}}$.

(a) Use the Property of Negative Exponents, $\tfrac{1}{a^{-n}} = a^n$:
$\tfrac{1}{y^{-4}} = y^4$.

(b) Use the Property of Negative Exponents, then simplify:
$\tfrac{1}{3^{-2}} = 3^2 = 9$.

{{< fillin
  question="Simplify: $\tfrac{1}{p^{-8}}$. Write the answer as a power of p."
  answer="p^8"
  answerDisplay="$p^8$"
  hint="Use the Property of Negative Exponents: $\tfrac{1}{a^{-n}} = a^n$."
>}}

{{< fillin
  question="Simplify: $\tfrac{1}{4^{-3}}$."
  answer="64"
  answerDisplay="64"
  hint="$\tfrac{1}{4^{-3}} = 4^3$. Then compute $4 \cdot 4 \cdot 4$."
>}}

Suppose now we have a fraction raised to a negative exponent. Using the
definition of a negative exponent, we can show that taking the reciprocal of
the base and changing the sign of the exponent works here too. For example,
$\left(\tfrac{3}{4}\right)^{-2} = \left(\tfrac{4}{3}\right)^2$. This leads us to
the **Quotient to a Negative Exponent Property**.

{{< callout type="info" >}}
  **Quotient to a Negative Exponent Property.** If $a$ and $b$ are real
  numbers, $a \neq 0$, $b \neq 0$, and $n$ is an integer, then

  $$\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$$
{{< /callout >}}

**Example.** Simplify: (a) $\left(\tfrac{5}{7}\right)^{-2}$
(b) $\left(-\tfrac{2x}{y}\right)^{-3}$.

(a) Use the Quotient to a Negative Exponent Property — take the reciprocal of
the fraction and change the sign of the exponent, then simplify:

$$\left(\frac{5}{7}\right)^{-2} = \left(\frac{7}{5}\right)^2 = \frac{49}{25}$$

(b) Take the reciprocal of the fraction and change the sign of the exponent,
then simplify:

$$\left(-\frac{2x}{y}\right)^{-3} = \left(-\frac{y}{2x}\right)^3 = -\frac{y^3}{8x^3}$$

{{< fillin
  question="Simplify: $\tfrac{2}{3}^{-4}$."
  answer="\frac{81}{16}"
  answerDisplay="$\tfrac{81}{16}$"
  hint="Take the reciprocal and change the sign of the exponent: $\tfrac{3}{2}^4$."
>}}

{{< fillin
  question="Simplify: $\tfrac{3}{5}^{-3}$."
  answer="\frac{125}{27}"
  answerDisplay="$\tfrac{125}{27}$"
  hint="Take the reciprocal and change the sign of the exponent: $\tfrac{5}{3}^3$."
>}}

When simplifying an expression with exponents, we must be careful to correctly
identify the base.

**Example.** Simplify: (a) $(-3)^{-2}$ (b) $-3^{-2}$
(c) $\left(-\tfrac{1}{3}\right)^{-2}$ (d) $-\left(\tfrac{1}{3}\right)^{-2}$.

(a) Here the exponent applies to the base $-3$. Take the reciprocal of the
base and change the sign of the exponent:
$(-3)^{-2} = \tfrac{1}{(-3)^2} = \tfrac{1}{9}$.

(b) The expression $-3^{-2}$ means "find the opposite of $3^{-2}$." Rewrite as
a product with $-1$, then apply the negative exponent:
$-3^{-2} = -1 \cdot 3^{-2} = -1 \cdot \tfrac{1}{3^2} = -\tfrac{1}{9}$.

(c) Here the exponent applies to the base $-\tfrac{1}{3}$. Take the reciprocal
of the base and change the sign of the exponent:
$\left(-\tfrac{1}{3}\right)^{-2} = \left(-\tfrac{3}{1}\right)^2 = 9$.

(d) The expression $-\left(\tfrac{1}{3}\right)^{-2}$ means "find the opposite
of $\left(\tfrac{1}{3}\right)^{-2}$":
$-\left(\tfrac{1}{3}\right)^{-2} = -1 \cdot \left(\tfrac{3}{1}\right)^2 = -9$.

{{< fillin
  question="Simplify: $(-5)^{-2}$."
  answer="\frac{1}{25}"
  answerDisplay="$\tfrac{1}{25}$"
  hint="The base is -5. Take the reciprocal and change the sign of the exponent: $1/(-5)^2$."
>}}

{{< fillin
  question="Simplify: $-5^{-2}$."
  answer="-\frac{1}{25}"
  answerDisplay="$-\tfrac{1}{25}$"
  hint="This means the opposite of $5^{-2}$, so first find $1/5^2$, then take the opposite."
>}}

We must be careful to follow the Order of Operations. In the next example,
parts (a) and (b) look similar, but the results are different.

**Example.** Simplify: (a) $4 \cdot 2^{-1}$ (b) $(4 \cdot 2)^{-1}$.

(a) Do exponents before multiplication. Use $a^{-n} = \tfrac{1}{a^n}$, then
simplify:
$4 \cdot 2^{-1} = 4 \cdot \tfrac{1}{2^1} = 2$.

(b) Simplify inside the parentheses first, then apply the negative exponent:
$(4 \cdot 2)^{-1} = (8)^{-1} = \tfrac{1}{8^1} = \tfrac{1}{8}$.

{{< fillin
  question="Simplify: $6 \cdot 3^{-1}$."
  answer="2"
  answerDisplay="2"
  hint="Apply the exponent before multiplying: $6 \cdot \tfrac{1}{3}$."
>}}

{{< fillin
  question="Simplify: $(6 \cdot 3)^{-1}$."
  answer="\frac{1}{18}"
  answerDisplay="$\tfrac{1}{18}$"
  hint="Simplify inside the parentheses first $(6 \cdot 3 = 18)$, then apply the negative exponent."
>}}

When a variable is raised to a negative exponent, we apply the definition the
same way we did with numbers. We will assume all variables are non-zero.

**Example.** Simplify: (a) $x^{-6}$ (b) $\left(u^4\right)^{-3}$.

(a) Use the definition of a negative exponent, $a^{-n} = \tfrac{1}{a^n}$:
$x^{-6} = \tfrac{1}{x^6}$.

(b) Use the definition of a negative exponent, then simplify:
$\left(u^4\right)^{-3} = \tfrac{1}{\left(u^4\right)^3} = \tfrac{1}{u^{12}}$.

{{< fillin
  question="Simplify: $y^{-7}$. Write the answer with a positive exponent."
  answer="\frac{1}{y^7}"
  answerDisplay="$1/y^7$"
  hint="Use the definition of a negative exponent: $y^{-7} = 1/y^7$."
>}}

{{< fillin
  question="Simplify: $(z^3)^{-5}$. Write the answer with a positive exponent."
  answer="\frac{1}{z^{15}}"
  answerDisplay="$1/z^{15}$"
  hint="First multiply the exponents $(3 \cdot 5 = 15)$, then apply the negative exponent."
>}}

When there is a product and an exponent, we have to be careful to apply the
exponent to the correct quantity. According to the Order of Operations, we
simplify expressions in parentheses before applying exponents.

**Example.** Simplify: (a) $5y^{-1}$ (b) $(5y)^{-1}$ (c) $(-5y)^{-1}$.

(a) Notice the exponent applies to just the base $y$. Take the reciprocal of
$y$ and change the sign of the exponent:
$5y^{-1} = 5 \cdot \tfrac{1}{y^1} = \tfrac{5}{y}$.

(b) Here the parentheses make the exponent apply to the base $5y$. Take the
reciprocal of $5y$ and change the sign of the exponent:
$(5y)^{-1} = \tfrac{1}{(5y)^1} = \tfrac{1}{5y}$.

(c) The base here is $-5y$. Take the reciprocal of $-5y$ and change the sign of
the exponent, then simplify:
$(-5y)^{-1} = \tfrac{1}{(-5y)^1} = \tfrac{1}{-5y} = -\tfrac{1}{5y}$.

{{< fillin
  question="Simplify: $8p^{-1}$. Write the answer with a positive exponent."
  answer="\frac{8}{p}"
  answerDisplay="$\tfrac{8}{p}$"
  hint="The exponent applies only to p, so $8p^{-1} = 8 \cdot \tfrac{1}{p}$."
>}}

{{< fillin
  question="Simplify: $(8p)^{-1}$. Write the answer with a positive exponent."
  answer="\frac{1}{8p}"
  answerDisplay="$\tfrac{1}{8p}$"
  hint="The parentheses make the exponent apply to the whole base 8p, so $(8p)^{-1} = \tfrac{1}{8p}$."
>}}

With negative exponents, the Quotient Rule needs only one form
$\tfrac{a^m}{a^n} = a^{m-n}$, for $a \neq 0$. When the exponent in the
denominator is larger than the exponent in the numerator, the exponent of the
quotient will be negative.

## Simplify Expressions with Integer Exponents

All of the exponent properties we developed earlier in the chapter with whole
number exponents apply to integer exponents, too. We restate them here for
reference.

{{< callout type="info" >}}
  **Summary of Exponent Properties.** If $a$ and $b$ are real numbers, and $m$
  and $n$ are integers, then

  - **Product Property:** $a^m \cdot a^n = a^{m+n}$
  - **Power Property:** $\left(a^m\right)^n = a^{m \cdot n}$
  - **Product to a Power:** $(ab)^m = a^m b^m$
  - **Quotient Property:** $\tfrac{a^m}{a^n} = a^{m-n},\ a \neq 0$
  - **Zero Exponent Property:** $a^0 = 1,\ a \neq 0$
  - **Quotient to a Power Property:** $\left(\tfrac{a}{b}\right)^m = \tfrac{a^m}{b^m},\ b \neq 0$
  - **Property of Negative Exponents:** $a^{-n} = \tfrac{1}{a^n}$ and $\tfrac{1}{a^{-n}} = a^n$
  - **Quotient to a Negative Exponent:** $\left(\tfrac{a}{b}\right)^{-n} = \left(\tfrac{b}{a}\right)^n$
{{< /callout >}}

**Example.** Simplify: (a) $x^{-4} \cdot x^6$ (b) $y^{-6} \cdot y^4$
(c) $z^{-5} \cdot z^{-3}$.

(a) Use the Product Property, $a^m \cdot a^n = a^{m+n}$:
$x^{-4} \cdot x^6 = x^{-4+6} = x^2$.

(b) The bases are the same, so add the exponents:
$y^{-6} \cdot y^4 = y^{-6+4} = y^{-2} = \tfrac{1}{y^2}$.

(c) Add the exponents, then apply the definition of a negative exponent:
$z^{-5} \cdot z^{-3} = z^{-5-3} = z^{-8} = \tfrac{1}{z^8}$.

{{< fillin
  question="Simplify: $x^{-3} \cdot x^7$. Write the answer as a power of x."
  answer="x^4"
  answerDisplay="$x^4$"
  hint="The bases are the same, so add the exponents: $-3 + 7$."
>}}

{{< fillin
  question="Simplify: $y^{-7} \cdot y^2$. Write the answer with a positive exponent."
  answer="\frac{1}{y^5}"
  answerDisplay="$1/y^5$"
  hint="Add the exponents $(-7 + 2 = -5)$, then apply the definition of a negative exponent."
>}}

In the next two examples, we'll start by using the Commutative Property to
group the same variables together. This makes it easier to identify the like
bases before using the Product Property.

**Example.** Simplify: $\left(m^4 n^{-3}\right)\left(m^{-5} n^{-2}\right)$.

Use the Commutative Property to get like bases together, add the exponents for
each base, then take reciprocals and change the signs of the exponents:

$$
\left(m^4 n^{-3}\right)\left(m^{-5} n^{-2}\right) = m^4 m^{-5} \cdot n^{-2} n^{-3} = m^{-1} \cdot n^{-5} = \frac{1}{m^1} \cdot \frac{1}{n^5} = \frac{1}{mn^5}
$$

{{< fillin
  question="Simplify: $(p^6 q^{-2})(p^{-9} q^{-1})$. Write the answer with positive exponents."
  answer="\frac{1}{p^3 q^3}"
  answerDisplay="$\tfrac{1}{p^3 q^3}$"
  hint="Group like bases and add exponents: $p^{6-9} = p^{-3}$ and $q^{-2-1} = q^{-3}$, then apply the definition of a negative exponent."
>}}

{{< fillin
  question="Simplify: $(r^5 s^{-3})(r^{-7} s^{-5})$. Write the answer with positive exponents."
  answer="\frac{1}{r^2 s^8}"
  answerDisplay="$\tfrac{1}{r^2 s^8}$"
  hint="Group like bases and add exponents: $r^{5-7} = r^{-2}$ and $s^{-3-5} = s^{-8}$, then apply the definition of a negative exponent."
>}}

In the next two examples, we'll use the Power Property and the Product to a
Power Property.

**Example.** Simplify: $\left(6k^3\right)^{-2}$.

Use the Product to a Power Property, then the Power Property, then the
definition of a negative exponent, then simplify:

$$
\left(6k^3\right)^{-2} = (6)^{-2}\left(k^3\right)^{-2} = 6^{-2} k^{-6} = \frac{1}{6^2} \cdot \frac{1}{k^6} = \frac{1}{36k^6}
$$

{{< fillin
  question="Simplify: $(-4x^4)^{-2}$. Write the answer with positive exponents."
  answer="\frac{1}{16x^8}"
  answerDisplay="$\tfrac{1}{16x^8}$"
  hint="Raise each factor to the -2 power: $(-4)^{-2} = \tfrac{1}{16}$ and $(x^4)^{-2} = x^{-8}$."
>}}

**Example.** Simplify: $\left(5x^{-3}\right)^2$.

Use the Product to a Power Property, simplify $5^2$ and multiply the exponents
of $x$ using the Power Property, then rewrite $x^{-6}$ with the definition of a
negative exponent:

$$
\left(5x^{-3}\right)^2 = 5^2\left(x^{-3}\right)^2 = 25 \cdot x^{-6} = 25 \cdot \frac{1}{x^6} = \frac{25}{x^6}
$$

{{< fillin
  question="Simplify: $(8a^{-4})^2$. Write the answer with positive exponents."
  answer="\frac{64}{a^8}"
  answerDisplay="$64/a^8$"
  hint="Square each factor: $8^2 = 64$ and $(a^{-4})^2 = a^{-8} = 1/a^8$."
>}}

To simplify a fraction, we use the Quotient Property and subtract the
exponents.

**Example.** Simplify: $\tfrac{r^5}{r^{-4}}$.

Use the Quotient Property, $\tfrac{a^m}{a^n} = a^{m-n}$, then simplify:

$$\frac{r^5}{r^{-4}} = r^{5-(-4)} = r^9$$

{{< fillin
  question="Simplify: $x^8 / x^{-3}$. Write the answer as a power of x."
  answer="x^{11}"
  answerDisplay="$x^{11}$"
  hint="Subtract the exponents: 8 - (-3)."
>}}

{{< fillin
  question="Simplify: $y^8 / y^{-6}$. Write the answer as a power of y."
  answer="y^{14}"
  answerDisplay="$y^{14}$"
  hint="Subtract the exponents: 8 - (-6)."
>}}

## Convert from Decimal Notation to Scientific Notation

Remember working with place value for whole numbers and decimals? Our number
system is based on powers of $10$. Consider the numbers $4{,}000$ and $0.004$.
We know that $4{,}000$ means $4 \times 1{,}000$ and $0.004$ means
$4 \times \tfrac{1}{1{,}000}$. If we write the $1{,}000$ as a power of ten in
exponential form, we can rewrite these numbers this way:

$$4{,}000 = 4 \times 1{,}000 = 4 \times 10^3$$
$$0.004 = 4 \times \frac{1}{1{,}000} = 4 \times \frac{1}{10^3} = 4 \times 10^{-3}$$

When a number is written as a product of two numbers, where the first factor
is a number greater than or equal to one but less than ten, and the second
factor is a power of $10$ written in exponential form, it is said to be in
**scientific notation**.

{{< callout type="info" >}}
  **Scientific Notation.** A number is expressed in scientific notation when
  it is of the form

  $$a \times 10^n \text{ where } 1 \le |a| < 10 \text{ and } n \text{ is an integer.}$$
{{< /callout >}}

It is customary in scientific notation to use $\times$ as the multiplication
sign, even though we avoid using this sign elsewhere in algebra.

If we look at what happened to the decimal point, we can see a method to
easily convert from decimal notation to scientific notation. In $4{,}000$, the
decimal was moved $3$ places to the left; in $0.004$, it was moved $3$ places
to the right. In both cases, the decimal was moved $3$ places to get the first
factor between $1$ and $10$. The power of $10$ is positive when the number is
larger than $1$, and negative when the number is between $0$ and $1$.

{{< callout type="info" >}}
  **Convert from decimal notation to scientific notation.**

  1. Move the decimal point so that the first factor is greater than or equal
     to $1$ but less than $10$.
  2. Count the number of decimal places, $n$, that the decimal point was
     moved.
  3. Write the number as a product with a power of $10$. If the original
     number is greater than $1$, the power of $10$ will be $10^n$; if it is
     between $0$ and $1$, the power of $10$ will be $10^{-n}$.
  4. Check.
{{< /callout >}}

**Example.** Write in scientific notation: $37{,}000$.

Move the decimal point after the $3$ so the first factor, $3.7$, is between
$1$ and $10$. The decimal point was moved $4$ places to the left. Since
$37{,}000$ is greater than $1$, the power of $10$ will have exponent $4$:

$$37{,}000 = 3.7 \times 10^4$$

Check: $10^4$ is $10{,}000$, and $10{,}000$ times $3.7$ is $37{,}000$. ✓

{{< fillin
  question="Write in scientific notation: 96,000."
  answer="9.6 \times 10^{4}"
  answerDisplay="$9.6 \times 10^4$"
  hint="Move the decimal after the 9 to get 9.6, then count the places moved (4). The number is greater than 1, so the exponent is positive."
>}}

{{< fillin
  question="Write in scientific notation: 48,300."
  answer="4.83 \times 10^{4}"
  answerDisplay="$4.83 \times 10^4$"
  hint="Move the decimal after the 4 to get 4.83, then count the places moved (4). The number is greater than 1, so the exponent is positive."
>}}

**Example.** Write in scientific notation: $0.0052$.

The original number, $0.0052$, is between $0$ and $1$, so we will have a
negative power of $10$. Move the decimal point to get $5.2$, a number between
$1$ and $10$. The decimal point was moved $3$ places to the right:

$$0.0052 = 5.2 \times 10^{-3}$$

Check: $5.2 \times 10^{-3} = 5.2 \times \tfrac{1}{1000} = 5.2 \times 0.001 = 0.0052$. ✓

{{< fillin
  question="Write in scientific notation: 0.0078."
  answer="7.8 \times 10^{-3}"
  answerDisplay="$7.8 \times 10^{-3}$"
  hint="Move the decimal to get 7.8, then count the places moved (3). The number is between 0 and 1, so the exponent is negative."
>}}

{{< fillin
  question="Write in scientific notation: 0.0129."
  answer="1.29 \times 10^{-2}"
  answerDisplay="$1.29 \times 10^{-2}$"
  hint="Move the decimal to get 1.29, then count the places moved (2). The number is between 0 and 1, so the exponent is negative."
>}}

## Convert Scientific Notation to Decimal Form

How can we convert from scientific notation to decimal form? Let's look at two
numbers written in scientific notation and see.

$$9.12 \times 10^4 = 9.12 \times 10{,}000 = 91{,}200$$
$$9.12 \times 10^{-4} = 9.12 \times 0.0001 = 0.000912$$

If we look at the location of the decimal point, we can see an easy method to
convert a number from scientific notation to decimal form. When the exponent
was positive, the decimal moved $4$ places to the right; when the exponent was
negative, the decimal moved $4$ places to the left.

{{< callout type="info" >}}
  **Convert scientific notation to decimal form.**

  1. Determine the exponent, $n$, on the factor $10$.
  2. Move the decimal $n$ places, adding zeros if needed. If the exponent is
     positive, move the decimal point $n$ places to the right; if the exponent
     is negative, move the decimal point $|n|$ places to the left.
  3. Check.
{{< /callout >}}

**Example.** Convert to decimal form: $6.2 \times 10^3$.

The exponent is $3$, and it is positive, so move the decimal point $3$ places
to the right. We need to add $2$ zeros as placeholders:

$$6.2 \times 10^3 = 6{,}200$$

Check: $10^3$ is $1000$, and $1000$ times $6.2$ will be $6{,}200$. ✓

{{< fillin
  question="Convert to decimal form: $1.3 \times 10^3$."
  answer="1300"
  answerDisplay="1,300"
  hint="The exponent is 3, so move the decimal 3 places to the right, adding zeros as placeholders."
>}}

{{< fillin
  question="Convert to decimal form: $9.25 \times 10^4$."
  answer="92500"
  answerDisplay="92,500"
  hint="The exponent is 4, so move the decimal 4 places to the right, adding zeros as placeholders."
>}}

**Example.** Convert to decimal form: $8.9 \times 10^{-2}$.

The exponent is $-2$. Since it is negative, move the decimal point $2$ places
to the left, adding zeros as needed for placeholders:

$$8.9 \times 10^{-2} = 0.089$$

{{< fillin
  question="Convert to decimal form: $1.2 \times 10^{-4}$."
  answer="0.00012"
  answerDisplay="0.00012"
  hint="The exponent is -4, so move the decimal 4 places to the left, adding zeros as placeholders."
>}}

{{< fillin
  question="Convert to decimal form: $7.5 \times 10^{-2}$."
  answer="0.075"
  answerDisplay="0.075"
  hint="The exponent is -2, so move the decimal 2 places to the left, adding a zero as a placeholder."
>}}

## Multiply and Divide Using Scientific Notation

Astronomers use very large numbers to describe distances in the universe and
ages of stars and planets. Chemists use very small numbers to describe the
size of an atom or the charge on an electron. When scientists perform
calculations with very large or very small numbers, they use scientific
notation. Scientific notation provides a way for the calculations to be done
without writing a lot of zeros. We will see how the Properties of Exponents are
used to multiply and divide numbers in scientific notation.

**Example.** Multiply. Write answers in decimal form:
$\left(4 \times 10^5\right)\left(2 \times 10^{-7}\right)$.

Use the Commutative Property to rearrange the factors, multiply, then change
to decimal form:

$$
\left(4 \times 10^5\right)\left(2 \times 10^{-7}\right) = 4 \cdot 2 \cdot 10^5 \cdot 10^{-7} = 8 \times 10^{-2} = 0.08
$$

{{< fillin
  question="Multiply $(3 \times 10^6)(2 \times 10^{-8})$. Write the answer in decimal form."
  answer="0.06"
  answerDisplay="0.06"
  hint="Multiply the first factors $(3 \cdot 2 = 6)$ and add the exponents on $10 (6 + -8 = -2)$, then convert $6 \times 10^{-2}$ to decimal form."
>}}

{{< fillin
  question="Multiply $(3 \times 10^{-2})(3 \times 10^{-1})$. Write the answer in decimal form."
  answer="0.009"
  answerDisplay="0.009"
  hint="Multiply the first factors $(3 \cdot 3 = 9)$ and add the exponents on $10 (-2 + -1 = -3)$, then convert $9 \times 10^{-3}$ to decimal form."
>}}

**Example.** Divide. Write answers in decimal form:
$\tfrac{9 \times 10^3}{3 \times 10^{-2}}$.

Separate the factors, rewriting as the product of two fractions, divide, then
change to decimal form:

$$
\frac{9 \times 10^3}{3 \times 10^{-2}} = \frac{9}{3} \times \frac{10^3}{10^{-2}} = 3 \times 10^5 = 300{,}000
$$

{{< fillin
  question="Divide $\tfrac{8 \times 10^4}{2 \times 10^{-1}}$. Write the answer in decimal form."
  answer="400000"
  answerDisplay="400,000"
  hint="Divide the first factors $(\tfrac{8}{2} = 4)$ and subtract the exponents on $10 (4 - -1 = 5)$, then convert $4 \times 10^5$ to decimal form."
>}}

{{< fillin
  question="Divide $\tfrac{8 \times 10^2}{4 \times 10^{-2}}$. Write the answer in decimal form."
  answer="20000"
  answerDisplay="20,000"
  hint="Divide the first factors $(\tfrac{8}{4} = 2)$ and subtract the exponents on $10 (2 - -2 = 4)$, then convert $2 \times 10^4$ to decimal form."
>}}

## Key terms

**negative exponent** — for $a \neq 0$, $a^{-n} = \tfrac{1}{a^n}$; a negative
exponent means take the reciprocal of the base and change the sign of the
exponent. **Property of Negative Exponents** — $\tfrac{1}{a^{-n}} = a^n$.
**Quotient to a Negative Exponent Property** —
$\left(\tfrac{a}{b}\right)^{-n} = \left(\tfrac{b}{a}\right)^n$. **scientific
notation** — a number written in the form $a \times 10^n$, where
$1 \le |a| < 10$ and $n$ is an integer; the power of $10$ is positive for
numbers larger than $1$ and negative for numbers between $0$ and $1$.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 6.7: Integer Exponents and Scientific Notation](https://openstax.org/books/elementary-algebra-2e/pages/6-7-integer-exponents-and-scientific-notation) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: recast the worked-example step tables as prose and typeset equations; omitted the Be Prepared quiz, Self Check checklist, media links, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
