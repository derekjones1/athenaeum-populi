---
title: Integer Exponents and Scientific Notation
description: >-
  Defining and simplifying negative and integer exponents, and converting
  numbers between decimal notation and scientific notation, including
  multiplying and dividing numbers written in scientific notation — adapted
  from OpenStax Prealgebra 2e, Section 10.5.
source_section: "10.5"
weight: 5
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** use the definition of
  a negative exponent, simplify expressions with integer exponents, convert
  from decimal notation to scientific notation, convert scientific notation
  to decimal form, and multiply and divide using scientific notation.
{{< /callout >}}

## Use the Definition of a Negative Exponent

The Quotient Property of Exponents had two forms depending on whether the
exponent in the numerator or denominator was larger:

{{< callout type="info" >}}
  **Quotient Property of Exponents.** If $a$ is a real number, $a \neq 0$,
  and $m, n$ are whole numbers, then

  $$\frac{a^m}{a^n} = a^{m-n}, \quad m > n \qquad\text{and}\qquad \frac{a^m}{a^n} = \frac{1}{a^{n-m}}, \quad n > m$$
{{< /callout >}}

What if we just subtract exponents, regardless of which is larger? Let's
consider $\tfrac{x^2}{x^5}$. We subtract the exponent in the denominator from
the exponent in the numerator:

$$\frac{x^2}{x^5} = x^{2-5} = x^{-3}$$

We can also simplify $\tfrac{x^2}{x^5}$ by dividing out common factors:

$$\frac{x \cdot x}{x \cdot x \cdot x \cdot x \cdot x} = \frac{1}{x^3}$$

This implies that $x^{-3} = \tfrac{1}{x^3}$, and it leads us to the
definition of a **negative exponent**.

{{< callout type="info" >}}
  **Negative Exponent.** If $n$ is a positive integer and $a \neq 0$, then

  $$a^{-n} = \frac{1}{a^n}$$
{{< /callout >}}

The negative exponent tells us to re-write the expression by taking the
reciprocal of the base and then changing the sign of the exponent. Any
expression that has negative exponents is not considered to be in simplest
form. We will use the definition of a negative exponent and other properties
of exponents to write an expression with only positive exponents.

**Example.** Simplify: (a) $4^{-2}$ (b) $10^{-3}$.

(a) Use the definition of a negative exponent, $a^{-n} = \tfrac{1}{a^n}$:

$$4^{-2} = \frac{1}{4^2} = \frac{1}{16}$$

(b) Use the same definition:

$$10^{-3} = \frac{1}{10^3} = \frac{1}{1000}$$

{{< fillin
  question="Simplify: $2^{-3}$."
  answer="\frac{1}{8}"
  answerDisplay="$\tfrac{1}{8}$"
  hint="Use $a^{-n} = \tfrac{1}{a^n}$: take the reciprocal of the base and drop the negative sign from the exponent."
>}}

{{< fillin
  question="Simplify: $10^{-2}$."
  answer="\frac{1}{100}"
  answerDisplay="$\tfrac{1}{100}$"
  hint="Use $a^{-n} = \tfrac{1}{a^n}$: take the reciprocal of the base and drop the negative sign from the exponent."
>}}

When simplifying any expression with exponents, we must be careful to
correctly identify the base that is raised to each exponent.

**Example.** Simplify: (a) $(-3)^{-2}$ (b) $-3^{-2}$. The negative in the
exponent does not affect the sign of the base.

(a) The exponent applies to the base, $-3$:

$$(-3)^{-2} = \frac{1}{(-3)^2} = \frac{1}{9}$$

(b) The expression $-3^{-2}$ means "find the opposite of $3^{-2}$." The
exponent applies only to the base, $3$. Rewrite as a product with $-1$:

$$-3^{-2} = -1 \cdot 3^{-2} = -1 \cdot \frac{1}{3^2} = -\frac{1}{9}$$

{{< fillin
  question="Simplify: $(-5)^{-2}$."
  answer="\frac{1}{25}"
  answerDisplay="$\tfrac{1}{25}$"
  hint="The exponent applies to the whole base, $-5$, so square $-5$ first and then take the reciprocal."
>}}

{{< fillin
  question="Simplify: $-5^{-2}$."
  answer="-\frac{1}{25}"
  answerDisplay="$-\tfrac{1}{25}$"
  hint="Without parentheses the exponent applies only to $5$, not to the negative sign. Rewrite as $-1$ times $5^{-2}$."
>}}

We must be careful to follow the order of operations. In the next example,
parts (a) and (b) look similar, but we get different results.

**Example.** Simplify: (a) $4 \cdot 2^{-1}$ (b) $(4 \cdot 2)^{-1}$. Remember
to always follow the order of operations.

(a) Do exponents before multiplication:

$$4 \cdot 2^{-1} = 4 \cdot \frac{1}{2^1} = 2$$

(b) Simplify inside the parentheses first:

$$(4 \cdot 2)^{-1} = (8)^{-1} = \frac{1}{8^1} = \frac{1}{8}$$

{{< fillin
  question="Simplify: $6 \cdot 3^{-1}$."
  answer="2"
  hint="Order of operations puts exponents before multiplication: simplify $3^{-1}$ first, then multiply by $6$."
>}}

{{< fillin
  question="Simplify: $(6 \cdot 3)^{-1}$."
  answer="\frac{1}{18}"
  answerDisplay="$\tfrac{1}{18}$"
  hint="The parentheses mean the exponent applies to the whole product. Multiply $6$ by $3$ first, then take the reciprocal."
>}}

When a variable is raised to a negative exponent, we apply the definition
the same way we did with numbers.

**Example.** Simplify: $x^{-6}$.

Use the definition of a negative exponent, $a^{-n} = \tfrac{1}{a^n}$:

$$x^{-6} = \frac{1}{x^6}$$

{{< fillin
  question="Simplify: $y^{-7}$."
  answer="\frac{1}{y^7}"
  answerDisplay="$\tfrac{1}{y^7}$"
  hint="Take the reciprocal of $y$ and change the sign of the exponent."
>}}

When there is a product and an exponent, we have to be careful to apply the
exponent to the correct quantity. According to the order of operations,
expressions in parentheses are simplified before exponents are applied.

**Example.** Simplify: (a) $5y^{-1}$ (b) $(5y)^{-1}$ (c) $(-5y)^{-1}$.

(a) Notice the exponent applies to just the base $y$. Take the reciprocal of
$y$ and change the sign of the exponent:

$$5y^{-1} = 5 \cdot \frac{1}{y^1} = \frac{5}{y}$$

(b) Here the parentheses make the exponent apply to the base $5y$. Take the
reciprocal of $5y$ and change the sign of the exponent:

$$(5y)^{-1} = \frac{1}{(5y)^1} = \frac{1}{5y}$$

(c) The base is $-5y$. Take the reciprocal of $-5y$ and change the sign of
the exponent, then use $\tfrac{a}{-b} = -\tfrac{a}{b}$:

$$(-5y)^{-1} = \frac{1}{(-5y)^1} = \frac{1}{-5y} = -\frac{1}{5y}$$

{{< fillin
  question="Simplify: $8p^{-1}$."
  answer="\frac{8}{p}"
  answerDisplay="$\tfrac{8}{p}$"
  hint="The exponent applies to just $p$. Take the reciprocal of $p$ and change the sign of its exponent."
>}}

{{< fillin
  question="Simplify: $(8p)^{-1}$."
  answer="\frac{1}{8p}"
  answerDisplay="$\tfrac{1}{8p}$"
  hint="The parentheses make the exponent apply to the whole product $8p$."
>}}

{{< fillin
  question="Simplify: $(-8p)^{-1}$."
  answer="-\frac{1}{8p}"
  answerDisplay="$-\tfrac{1}{8p}$"
  hint="The base is $-8p$. Take the reciprocal of $-8p$, then rewrite the resulting negative denominator as a leading negative sign."
>}}

Now that we have defined negative exponents, the Quotient Property of
Exponents needs only one form, $\tfrac{a^m}{a^n} = a^{m-n}$, where $a \neq 0$
and $m$ and $n$ are integers. When the exponent in the denominator is larger
than the exponent in the numerator, the exponent of the quotient will be
negative. If the result gives us a negative exponent, we rewrite it using
the definition of negative exponents, $a^{-n} = \tfrac{1}{a^n}$.

## Simplify Expressions with Integer Exponents

All the exponent properties developed earlier in this chapter with whole
number exponents apply to integer exponents, too. We restate them here for
reference.

{{< callout type="info" >}}
  **Summary of Exponent Properties.** If $a, b$ are real numbers and
  $m, n$ are integers, then

  $$\text{Product Property} \qquad a^m \cdot a^n = a^{m+n}$$

  $$\text{Power Property} \qquad (a^m)^n = a^{m \cdot n}$$

  $$\text{Product to a Power Property} \qquad (ab)^m = a^m b^m$$

  $$\text{Quotient Property} \qquad \frac{a^m}{a^n} = a^{m-n}, \quad a \neq 0$$

  $$\text{Zero Exponent Property} \qquad a^0 = 1, \quad a \neq 0$$

  $$\text{Quotient to a Power Property} \qquad \left(\frac{a}{b}\right)^m = \frac{a^m}{b^m}, \quad b \neq 0$$

  $$\text{Definition of Negative Exponent} \qquad a^{-n} = \frac{1}{a^n}$$
{{< /callout >}}

**Example.** Simplify: (a) $x^{-4} \cdot x^6$ (b) $y^{-6} \cdot y^4$
(c) $z^{-5} \cdot z^{-3}$.

(a) Use the Product Property, $a^m \cdot a^n = a^{m+n}$:

$$x^{-4} \cdot x^6 = x^{-4+6} = x^2$$

(b) The bases are the same, so add the exponents:

$$y^{-6} \cdot y^4 = y^{-6+4} = y^{-2} = \frac{1}{y^2}$$

(c) The bases are the same, so add the exponents:

$$z^{-5} \cdot z^{-3} = z^{-5-3} = z^{-8} = \frac{1}{z^8}$$

{{< fillin
  question="Simplify: $x^{-3} \cdot x^7$."
  answer="x^4"
  hint="Add the exponents, since the bases are the same: $-3 + 7$."
>}}

{{< fillin
  question="Simplify: $y^{-7} \cdot y^2$."
  answer="\frac{1}{y^5}"
  answerDisplay="$\tfrac{1}{y^5}$"
  hint="Add the exponents first ($-7 + 2$), then rewrite the negative exponent as a reciprocal."
>}}

In the next two examples, we start by using the Commutative Property to
group the same variables together. This makes it easier to identify the
like bases before using the Product Property of Exponents.

**Example.** Simplify: $(m^4 n^{-3})(m^{-5} n^{-2})$.

Use the Commutative Property to get like bases together, then add the
exponents for each base:

$$(m^4 n^{-3})(m^{-5} n^{-2}) = m^4 m^{-5} \cdot n^{-3} n^{-2} = m^{-1} \cdot n^{-5} = \frac{1}{m^1} \cdot \frac{1}{n^5} = \frac{1}{mn^5}$$

{{< fillin
  question="Simplify: $(p^6 q^{-2})(p^{-9} q^{-1})$."
  answer="\frac{1}{p^3 q^3}"
  answerDisplay="$\tfrac{1}{p^3 q^3}$"
  hint="Group the like bases together and add exponents: $p^{6-9}$ and $q^{-2-1}$. Then rewrite both negative exponents as reciprocals."
>}}

If the monomials have numerical coefficients, we multiply the coefficients,
just as we did earlier in the chapter.

**Example.** Simplify: $(2x^{-6} y^8)(-5x^5 y^{-3})$.

Rewrite with the like bases together, multiply the coefficients, add the
exponents for each base, and rewrite with only positive exponents:

$$(2x^{-6} y^8)(-5x^5 y^{-3}) = 2(-5) \cdot (x^{-6} x^5) \cdot (y^8 y^{-3}) = -10 \cdot x^{-1} \cdot y^5 = -10 \cdot \frac{1}{x^1} \cdot y^5 = \frac{-10y^5}{x}$$

{{< fillin
  question="Simplify: $(3u^{-5} v^7)(-4u^4 v^{-2})$."
  answer="-\frac{12 v^5}{u}"
  answerDisplay="$-\tfrac{12v^5}{u}$"
  hint="Multiply the coefficients ($3$ times $-4$), then add exponents for $u$ ($-5+4$) and for $v$ ($7-2$). Rewrite the negative exponent on $u$ as a reciprocal."
>}}

In the next two examples, we use the Power Property and the Product to a
Power Property.

**Example.** Simplify: $(k^3)^{-2}$.

Use the Power Property, $(a^m)^n = a^{m \cdot n}$, then rewrite with a
positive exponent:

$$(k^3)^{-2} = k^{3(-2)} = k^{-6} = \frac{1}{k^6}$$

{{< fillin
  question="Simplify: $(x^4)^{-1}$."
  answer="\frac{1}{x^4}"
  answerDisplay="$\tfrac{1}{x^4}$"
  hint="Multiply the exponents, $4$ times $-1$, then rewrite the negative exponent as a reciprocal."
>}}

**Example.** Simplify: $(5x^{-3})^2$.

Use the Product to a Power Property, $(ab)^m = a^m b^m$, then simplify $5^2$
and multiply the exponents of $x$ using the Power Property, and finally
rewrite $x^{-6}$ using the definition of a negative exponent:

$$(5x^{-3})^2 = 5^2 (x^{-3})^2 = 25 x^{-6} = 25 \cdot \frac{1}{x^6} = \frac{25}{x^6}$$

{{< fillin
  question="Simplify: $(8a^{-4})^2$."
  answer="\frac{64}{a^8}"
  answerDisplay="$\tfrac{64}{a^8}$"
  hint="Raise the coefficient and the variable factor separately to the power of $2$, then rewrite the negative exponent on $a$ as a reciprocal."
>}}

To simplify a fraction, we use the Quotient Property.

**Example.** Simplify: $\tfrac{r^5}{r^{-4}}$.

Use the Quotient Property, $\tfrac{a^m}{a^n} = a^{m-n}$, being careful to
subtract $5 - (-4)$:

$$\frac{r^5}{r^{-4}} = r^{5-(-4)} = r^9$$

{{< fillin
  question="Simplify: $\tfrac{x^8}{x^{-3}}$."
  answer="x^{11}"
  hint="Subtract the exponents, numerator minus denominator: $8 - (-3)$."
>}}

## Convert from Decimal Notation to Scientific Notation

Our number system is based on powers of $10$. We use tens, hundreds,
thousands, and so on. Our decimal numbers are also based on powers of
ten — tenths, hundredths, thousandths, and so on.

Consider the numbers $4000$ and $0.004$. We know that $4000$ means
$4 \times 1000$ and $0.004$ means $4 \times \tfrac{1}{1000}$. If we write the
$1000$ as a power of ten in exponential form, we can rewrite these numbers
this way:

$$4000 = 4 \times 1000 = 4 \times 10^3 \qquad\qquad 0.004 = 4 \times \frac{1}{1000} = 4 \times 10^{-3}$$

When a number is written as a product of two numbers, where the first
factor is a number greater than or equal to one but less than $10$, and the
second factor is a power of $10$ written in exponential form, it is said to
be in *scientific notation*.

{{< callout type="info" >}}
  **Scientific Notation.** A number is expressed in scientific notation when
  it is of the form

  $$a \times 10^n$$

  where $a \geq 1$ and $a < 10$ and $n$ is an integer.
{{< /callout >}}

It is customary in scientific notation to use $\times$ as the
multiplication sign, even though we avoid using this sign elsewhere in
algebra. Scientific notation is a useful way of writing very large or very
small numbers. It is used often in the sciences to make calculations
easier.

If we look at what happened to the decimal point, we can see a method to
easily convert from decimal notation to scientific notation. Moving the
decimal point three places to the left in $4000$, and three places to the
right in $0.004$, gets the first factor, $4$, by itself in both cases:

$$4000. = 4 \times 10^3 \qquad\qquad 0.004 = 4 \times 10^{-3}$$

In both cases, the decimal was moved three places to get the first factor by
itself.

- The power of $10$ is positive when the number is larger than $1$:
  $4000 = 4 \times 10^3$.
- The power of $10$ is negative when the number is between $0$ and $1$:
  $0.004 = 4 \times 10^{-3}$.

{{< callout type="info" >}}
  **Convert from decimal notation to scientific notation.**

  1. Move the decimal point so that the first factor is greater than or
     equal to $1$ but less than $10$.
  2. Count the number of decimal places, $n$, that the decimal point was
     moved.
  3. Write the number as a product with a power of $10$. If the original
     number is greater than $1$, the power of $10$ will be $10^n$; if the
     original number is between $0$ and $1$, the power of $10$ will be
     $10^{-n}$.
  4. Check.
{{< /callout >}}

**Example.** Write $37{,}000$ in scientific notation.

Move the decimal point so that the first factor is greater than or equal to
$1$ but less than $10$; count that the decimal point moved $4$ places; then
write the number as a product with a power of $10$:

$$37{,}000 = 3.7 \times 10^4$$

Check: $10^4$ is $10{,}000$, and $10{,}000$ times $3.7$ is $37{,}000$. ✓

{{< fillin
  question="Write in scientific notation: 96,000."
  answer="9.6 \times 10^{4}"
  answerDisplay="$9.6 \times 10^4$"
  hint="Move the decimal point left until only one nonzero digit is in front of it, and count how many places it moved."
>}}

**Example.** Write $0.0052$ in scientific notation.

Move the decimal point to get $5.2$, a number between $1$ and $10$; count
that the point moved $3$ places; then write as a product with a power of
$10$. Since the original number is between $0$ and $1$, the exponent is
negative:

$$0.0052 = 5.2 \times 10^{-3}$$

Check: $5.2 \times 10^{-3} = 5.2 \times \tfrac{1}{1000} = 5.2 \times 0.001 = 0.0052$. ✓

{{< fillin
  question="Write in scientific notation: 0.0078."
  answer="7.8 \times 10^{-3}"
  answerDisplay="$7.8 \times 10^{-3}$"
  hint="Move the decimal point right until only one nonzero digit is in front of it. Since the original number is between $0$ and $1$, the power of $10$ is negative."
>}}

## Convert Scientific Notation to Decimal Form

To convert scientific notation to decimal form, look at two numbers written
in scientific notation and see what happens to the decimal point:

$$9.12 \times 10^4 = 91{,}200 \qquad\qquad 9.12 \times 10^{-4} = 0.000912$$

In both cases the decimal point moved $4$ places. When the exponent was
positive, the decimal moved to the right. When the exponent was negative,
the decimal moved to the left.

{{< callout type="info" >}}
  **Convert scientific notation to decimal form.**

  1. Determine the exponent, $n$, on the factor $10$.
  2. Move the decimal $n$ places, adding zeros if needed — to the right if
     the exponent is positive, to the left if the exponent is negative.
  3. Check.
{{< /callout >}}

**Example.** Convert to decimal form: $6.2 \times 10^3$.

The exponent is $3$, so move the decimal point $3$ places to the right,
adding zeros if needed:

$$6.2 \times 10^3 = 6{,}200$$

Check: $10^3$ is $1000$, and $1000$ times $6.2$ is $6{,}200$. ✓

{{< fillin
  question="Convert to decimal form: $1.3 \times 10^3$."
  answer="1300"
  answerDisplay="1,300"
  hint="The exponent is positive $3$, so move the decimal point three places to the right, adding zeros as needed."
>}}

**Example.** Convert to decimal form: $8.9 \times 10^{-2}$.

The exponent is $-2$, so move the decimal point $2$ places to the left,
adding zeros as needed for placeholders:

$$8.9 \times 10^{-2} = 0.089$$

{{< fillin
  question="Convert to decimal form: $1.2 \times 10^{-4}$."
  answer="0.00012"
  hint="The exponent is negative $4$, so move the decimal point four places to the left, adding zeros as placeholders."
>}}

## Multiply and Divide Using Scientific Notation

We use the Properties of Exponents to multiply and divide numbers written in
scientific notation.

**Example.** Multiply. Write the answer in decimal form:
$(4 \times 10^5)(2 \times 10^{-7})$.

Use the Commutative Property to rearrange the factors, multiply $4$ by $2$
and use the Product Property to multiply $10^5$ by $10^{-7}$, then change to
decimal form by moving the decimal two places left:

$$(4 \times 10^5)(2 \times 10^{-7}) = 4 \cdot 2 \cdot 10^5 \cdot 10^{-7} = 8 \times 10^{-2} = 0.08$$

{{< fillin
  question="Multiply. Write the answer in decimal form: $(3 \times 10^6)(2 \times 10^{-8})$."
  answer="0.06"
  hint="Multiply the coefficients ($3$ times $2$) and add the exponents on $10$ ($6 + (-8)$), then move the decimal point to write the result in decimal form."
>}}

**Example.** Divide. Write the answer in decimal form:
$\tfrac{9 \times 10^3}{3 \times 10^{-2}}$.

Separate the factors, divide $9$ by $3$ and use the Quotient Property to
divide $10^3$ by $10^{-2}$, then change to decimal form by moving the
decimal five places right:

$$\frac{9 \times 10^3}{3 \times 10^{-2}} = \frac{9}{3} \times \frac{10^3}{10^{-2}} = 3 \times 10^5 = 300{,}000$$

{{< fillin
  question="Divide. Write the answer in decimal form: $\tfrac{8 \times 10^4}{2 \times 10^{-1}}$."
  answer="400000"
  answerDisplay="400,000"
  hint="Divide the coefficients ($8$ by $2$) and subtract the exponents on $10$ ($4 - (-1)$), then convert the result to decimal form."
>}}

## Key terms

**negative exponent** — for a positive integer $n$ and $a \neq 0$,
$a^{-n} = \tfrac{1}{a^n}$; the exponent tells us to take the reciprocal of
the base and change the sign of the exponent. **scientific notation** — a
number written as $a \times 10^n$, where $1 \le a < 10$ and $n$ is an
integer, used to conveniently express very large or very small numbers.

---

<small>This section is adapted from [Prealgebra 2e, Section 10.5: Integer Exponents and Scientific Notation](https://openstax.org/books/prealgebra-2e/pages/10-5-integer-exponents-and-scientific-notation) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/prealgebra-2e). Changes: omitted the Be Prepared quiz, Media links, Self Check checklist, and end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
