---
title: Complex Numbers
description: >-
  Expressing square roots of negative numbers as multiples of $i$, plotting
  complex numbers on the complex plane, and adding, subtracting, multiplying,
  and dividing complex numbers — adapted from OpenStax Precalculus 2e, Section
  3.1.
source_section: "3.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Express square roots of negative numbers as multiples of $i$
- Plot complex numbers on the complex plane
- Add and subtract complex numbers
- Multiply and divide complex numbers
{{< /callout >}}

The study of mathematics continuously builds upon itself. Negative integers,
for example, fill a void left by the set of positive integers. The set of
rational numbers, in turn, fills a void left by the set of integers. The set
of real numbers fills a void left by the set of rational numbers. Not
surprisingly, the set of real numbers has voids as well. For example, we
still have no solution to equations such as

$$x^2+4=0$$

Our best guesses might be $+2$ or $-2$. But if we test $+2$ in this equation,
it does not work. If we test $-2$, it does not work. If we want to have a
solution for this equation, we will have to go farther than we have so far.
After all, to this point we have described the square root of a negative
number as undefined. Fortunately, there is another system of numbers that
provides solutions to problems such as these. In this section, we will
explore this number system and how to work within it.

## Expressing square roots of negative numbers as multiples of $i$

We know how to find the square root of any positive real number. In a
similar way, we can find the square root of a negative number. The
difference is that the root is not real. If the value in the radicand is
negative, the root is said to be an **imaginary number**. The imaginary
number $i$ is defined as the square root of negative 1.

$$\sqrt{-1}=i$$

So, using properties of radicals,

$$i^2=\left(\sqrt{-1}\right)^2=-1$$

We can write the square root of any negative number as a multiple of $i$.
Consider the square root of $-25$.

$$
\begin{array}{lrcl}
& \sqrt{-25} &=& \sqrt{25\cdot(-1)} \\[4pt]
& &=& \sqrt{25}\sqrt{-1} \\[4pt]
& &=& 5i
\end{array}
$$

We use $5i$ and not $-5i$ because the principal root of $25$ is the positive
root.

A **complex number** is the sum of a real number and an imaginary number. A
complex number is expressed in standard form when written $a+bi$, where $a$
is the real part and $bi$ is the imaginary part. For example, $5+2i$ is a
complex number, in which $5$ is the real part and $2i$ is the imaginary
part. So, too, is $3+4\sqrt{3}i$.

Imaginary numbers are distinguished from real numbers because a squared
imaginary number produces a negative real number. Recall that when a
positive real number is squared, the result is a positive real number, and
when a negative real number is squared, again, the result is a positive real
number. Complex numbers are a combination of real and imaginary numbers.

{{< callout type="info" >}}
**Imaginary and complex numbers.** A **complex number** is a number of the
form $a+bi$ where

- $a$ is the real part of the complex number.
- $bi$ is the imaginary part of the complex number.

If $b=0$, then $a+bi$ is a real number. If $a=0$ and $b$ is not equal to
$0$, the complex number is called an **imaginary number**. An imaginary
number is an even root of a negative number.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given an imaginary number, express it in standard form.

1. Write $\sqrt{-a}$ as $\sqrt{a}\sqrt{-1}$.
2. Express $\sqrt{-1}$ as $i$.
3. Write $\sqrt{a}\cdot i$ in simplest form.
{{< /callout >}}

**Example.** Express $\sqrt{-9}$ in standard form.

**Solution.**

$$\sqrt{-9}=\sqrt{9}\sqrt{-1}=3i$$

In standard form, this is $0+3i$.

{{< fillin
  question="Express $\sqrt{-24}$ in standard form."
  answer="0+2\sqrt{6}i"
  answerForm="simplified-radical"
  answerDisplay="$0+2\sqrt{6}i$"
  hint="Split $\sqrt{-24}$ into $\sqrt{24}\sqrt{-1}$, pull out the perfect-square factor of $24$, then rewrite $\sqrt{-1}$ as $i$."
>}}

## Plotting a complex number on the complex plane

We cannot plot complex numbers on a number line as we might real numbers.
However, we can still represent them graphically. To represent a complex
number we need to address the two components of the number. We use the
**complex plane**, which is a coordinate system in which the horizontal axis
represents the real component and the vertical axis represents the
imaginary component. Complex numbers are the points on the plane, expressed
as ordered pairs $(a,b)$, where $a$ represents the coordinate for the
horizontal axis and $b$ represents the coordinate for the vertical axis.

Let's consider the number $-2+3i$. The real part of the complex number is
$-2$ and the imaginary part is $3i$. We plot the ordered pair $(-2,3)$ to
represent the complex number $-2+3i$ as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The complex plane from −5 to 5 on both axes. An arrow moves from the origin to (−2, 0) along the real axis, then up to the plotted point (−2, 3), labelled −2 + 3i.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"segments":[{"from":[0,0],"to":[-2,0],"arrows":"end"},{"from":[-2,0],"to":[-2,3],"arrows":"end"}],"points":[{"at":[-2,3],"label":"−2 + 3i","labelSide":"nw"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
**Complex plane.** In the **complex plane**, the horizontal axis is the real
axis, and the vertical axis is the imaginary axis, as shown below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A bare complex plane with the horizontal axis labelled real and the vertical axis labelled imaginary, no grid or numbers shown.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":20,"grid":false,"xLabel":"real","yLabel":"imaginary"}
{{< /apfigure >}}

{{< callout type="info" >}}
**How to:** given a complex number, represent its components on the complex
plane.

1. Determine the real part and the imaginary part of the complex number.
2. Move along the horizontal axis to show the real part of the number.
3. Move parallel to the vertical axis to show the imaginary part of the
   number.
4. Plot the point.
{{< /callout >}}

**Example.** Plot the complex number $3-4i$ on the complex plane.

**Solution.** The real part of the complex number is $3$, and the imaginary
part is $-4i$. We plot the ordered pair $(3,-4)$ as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The complex plane from −5 to 5 on both axes. An arrow moves from the origin to (3, 0) along the real axis, then down to the plotted point (3, −4), labelled 3 − 4i.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":22,"tickLabels":true,"segments":[{"from":[0,0],"to":[3,0],"arrows":"end"},{"from":[3,0],"to":[3,-4],"arrows":"end"}],"points":[{"at":[3,-4],"label":"3 − 4i","labelSide":"se"}]}
{{< /apfigure >}}

{{< fillin
  question="Plot the complex number $-4-i$ on the complex plane by giving its ordered pair $(a,b)$."
  answer="(-4,-1)"
  answerDisplay="$(-4,-1)$"
  hint="The real part of $-4-i$ gives the first coordinate and the imaginary part gives the second."
>}}

## Adding and subtracting complex numbers

Just as with real numbers, we can perform arithmetic operations on complex
numbers. To add or subtract complex numbers, we combine the real parts and
combine the imaginary parts.

{{< callout type="info" >}}
**Complex numbers: addition and subtraction.** Adding complex numbers:

$$(a+bi)+(c+di)=(a+c)+(b+d)i$$

Subtracting complex numbers:

$$(a+bi)-(c+di)=(a-c)+(b-d)i$$
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given two complex numbers, find the sum or difference.

1. Identify the real and imaginary parts of each number.
2. Add or subtract the real parts.
3. Add or subtract the imaginary parts.
{{< /callout >}}

**Example.** Add $3-4i$ and $2+5i$.

**Solution.** We add the real parts and add the imaginary parts.

$$
\begin{array}{lrcl}
& (a+bi)+(c+di) &=& (a+c)+(b+d)i \\[4pt]
& (3-4i)+(2+5i) &=& (3+2)+(-4+5)i \\[4pt]
& &=& 5+i
\end{array}
$$

{{< fillin
  question="Subtract $2+5i$ from $3-4i$."
  answer="1-9i"
  answerForm="no-like-terms"
  answerDisplay="$1-9i$"
  hint="Write it as $(3-4i)-(2+5i)$, then combine the real parts and combine the imaginary parts separately."
>}}

## Multiplying complex numbers

Multiplying complex numbers is much like multiplying binomials. The major
difference is that we work with the real and imaginary parts separately.

### Multiplying a complex number by a real number

Let's begin by multiplying a complex number by a real number. We distribute
the real number just as we would with a binomial. So, for example,

$$3(6+2i)=(3\cdot6)+(3\cdot2i)=18+6i$$

{{< callout type="info" >}}
**How to:** given a complex number and a real number, multiply to find the
product.

1. Use the distributive property.
2. Simplify.
{{< /callout >}}

**Example.** Find the product $4(2+5i)$.

**Solution.** Distribute the 4.

$$
\begin{array}{lrcl}
& 4(2+5i) &=& (4\cdot2)+(4\cdot5i) \\[4pt]
& &=& 8+20i
\end{array}
$$

{{< fillin
  question="Find the product $-4(2+6i)$."
  answer="-8-24i"
  answerForm="distributed"
  answerDisplay="$-8-24i$"
  hint="Distribute the $-4$ to both the real part and the imaginary part."
>}}

### Multiplying complex numbers together

Now, let's multiply two complex numbers. We can use either the distributive
property or the FOIL method. Recall that FOIL is an acronym for multiplying
First, Outer, Inner, and Last terms together. Using either the distributive
property or the FOIL method, we get

$$(a+bi)(c+di)=ac+adi+bci+bdi^2$$

Because $i^2=-1$, we have

$$(a+bi)(c+di)=ac+adi+bci-bd$$

To simplify, we combine the real parts, and we combine the imaginary parts.

$$(a+bi)(c+di)=(ac-bd)+(ad+bc)i$$

{{< callout type="info" >}}
**How to:** given two complex numbers, multiply to find the product.

1. Use the distributive property or the FOIL method.
2. Simplify.
{{< /callout >}}

**Example.** Multiply $(4+3i)(2-5i)$.

**Solution.** Use $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$.

$$
\begin{array}{lrcl}
& (4+3i)(2-5i) &=& \left(4\cdot2-3\cdot(-5)\right)+\left(4\cdot(-5)+3\cdot2\right)i \\[4pt]
& &=& (8+15)+(-20+6)i \\[4pt]
& &=& 23-14i
\end{array}
$$

{{< fillin
  question="Multiply $(3-4i)(2+3i)$."
  answer="18+i"
  answerForm="expanded"
  answerDisplay="$18+i$"
  hint="Use the distributive property or FOIL, then remember that $i^2=-1$."
>}}

## Dividing complex numbers

Division of two complex numbers is more complicated than addition,
subtraction, and multiplication because we cannot divide by an imaginary
number, meaning that any fraction must have a real-number denominator. We
need to find a term by which we can multiply the numerator and the
denominator that will eliminate the imaginary portion of the denominator so
that we end up with a real number as the denominator. This term is called
the **complex conjugate** of the denominator, which is found by changing the
sign of the imaginary part of the complex number. In other words, the
complex conjugate of $a+bi$ is $a-bi$.

Note that complex conjugates have a reciprocal relationship: the complex
conjugate of $a+bi$ is $a-bi$, and the complex conjugate of $a-bi$ is
$a+bi$. Further, when a quadratic equation with real coefficients has
complex solutions, the solutions are always complex conjugates of one
another.

Suppose we want to divide $c+di$ by $a+bi$, where neither $a$ nor $b$ equals
zero. We first write the division as a fraction, then find the complex
conjugate of the denominator, and multiply.

$$\tfrac{c+di}{a+bi}\ \text{where}\ a\ne0\ \text{and}\ b\ne0$$

Multiply the numerator and denominator by the complex conjugate of the
denominator.

$$\tfrac{(c+di)}{(a+bi)}\cdot\tfrac{(a-bi)}{(a-bi)}=\tfrac{(c+di)(a-bi)}{(a+bi)(a-bi)}$$

Apply the distributive property.

$$\tfrac{ca-cbi+adi-bdi^2}{a^2-abi+abi-b^2i^2}$$

Simplify, remembering that $i^2=-1$.

$$
\begin{array}{lrcl}
& &=& \tfrac{ca-cbi+adi-bd(-1)}{a^2-abi+abi-b^2(-1)} \\[4pt]
& &=& \tfrac{(ca+bd)+(ad-cb)i}{a^2+b^2}
\end{array}
$$

{{< callout type="info" >}}
**The complex conjugate.** The **complex conjugate** of a complex number
$a+bi$ is $a-bi$. It is found by changing the sign of the imaginary part of
the complex number. The real part of the number is left unchanged.

- When a complex number is multiplied by its complex conjugate, the result
  is a real number.
- When a complex number is added to its complex conjugate, the result is a
  real number.
{{< /callout >}}

**Example.** Find the complex conjugate of each number.

(a) $2+i\sqrt{5}$

(b) $-\tfrac{1}{2}i$

**Solution.**

(a) The number is already in the form $a+bi$. The complex conjugate is
$a-bi$, or $2-i\sqrt{5}$.

(b) We can rewrite this number in the form $a+bi$ as $0-\tfrac{1}{2}i$. The
complex conjugate is $a-bi$, or $0+\tfrac{1}{2}i$. This can be written
simply as $\tfrac{1}{2}i$.

**Analysis.** Although we have seen that we can find the complex conjugate
of an imaginary number, in practice we generally find the complex conjugates
of only complex numbers with both a real and an imaginary component. To
obtain a real number from an imaginary number, we can simply multiply by
$i$.

{{< callout type="info" >}}
**How to:** given two complex numbers, divide one by the other.

1. Write the division problem as a fraction.
2. Determine the complex conjugate of the denominator.
3. Multiply the numerator and denominator of the fraction by the complex
   conjugate of the denominator.
4. Simplify.
{{< /callout >}}

**Example.** Divide $(2+5i)$ by $(4-i)$.

**Solution.** We begin by writing the problem as a fraction.

$$\tfrac{(2+5i)}{(4-i)}$$

Then we multiply the numerator and denominator by the complex conjugate of
the denominator.

$$\tfrac{(2+5i)}{(4-i)}\cdot\tfrac{(4+i)}{(4+i)}$$

To multiply two complex numbers, we expand the product as we would with
polynomials (the process commonly called FOIL).

$$
\begin{array}{lrcl}
& \tfrac{(2+5i)}{(4-i)}\cdot\tfrac{(4+i)}{(4+i)} &=& \tfrac{8+2i+20i+5i^2}{16+4i-4i-i^2} \\[4pt]
\text{Because}\ i^2=-1. & &=& \tfrac{8+2i+20i+5(-1)}{16+4i-4i-(-1)} \\[4pt]
& &=& \tfrac{3+22i}{17} \\[4pt]
\text{Separate real and imaginary parts.} & &=& \tfrac{3}{17}+\tfrac{22}{17}i
\end{array}
$$

Note that this expresses the quotient in standard form.

**Example.** Let $f(x)=x^2-5x+2$. Evaluate $f(3+i)$.

**Solution.** Substitute $x=3+i$ into the function $f(x)=x^2-5x+2$ and
simplify.

$$
\begin{array}{lrcl}
& f(3+i) &=& (3+i)^2-5(3+i)+2 \\[4pt]
\text{Multiply.} & &=& (3+6i+i^2)-(15+5i)+2 \\[4pt]
\text{Substitute}\ -1\ \text{for}\ i^2. & &=& 9+6i+(-1)-15-5i+2 \\[4pt]
\text{Combine like terms.} & &=& -5+i
\end{array}
$$

**Analysis.** We write $f(3+i)=-5+i$. Notice that the input is $3+i$ and the
output is $-5+i$.

{{< fillin
  question="Let $f(x)=2x^2-3x$. Evaluate $f(8-i)$."
  answer="102-29i"
  answerDisplay="$102-29i$"
  hint="Substitute $8-i$ for $x$, expand $(8-i)^2$, and combine the real and imaginary parts."
>}}

**Example.** Let $f(x)=\tfrac{2+x}{x+3}$. Evaluate $f(10i)$.

**Solution.** Substitute $x=10i$ and simplify.

$$
\begin{array}{lrcl}
& f(10i) &=& \tfrac{2+10i}{10i+3} \\[4pt]
\text{Rewrite the denominator in standard form.} & &=& \tfrac{2+10i}{3+10i} \\[4pt]
\text{Multiply by the complex conjugate of the denominator.} & &=& \tfrac{2+10i}{3+10i}\cdot\tfrac{3-10i}{3-10i} \\[4pt]
\text{Multiply using the distributive property.} & &=& \tfrac{6-20i+30i-100i^2}{9-30i+30i-100i^2} \\[4pt]
\text{Substitute}\ -1\ \text{for}\ i^2. & &=& \tfrac{6-20i+30i-100(-1)}{9-30i+30i-100(-1)} \\[4pt]
\text{Simplify.} & &=& \tfrac{106+10i}{109} \\[4pt]
\text{Separate the real and imaginary parts.} & &=& \tfrac{106}{109}+\tfrac{10}{109}i
\end{array}
$$

{{< fillin
  question="Let $f(x)=\tfrac{x+1}{x-4}$. Evaluate $f(-i)$."
  answer="-\frac{3}{17}+\frac{5}{17}i"
  answerDisplay="$-\tfrac{3}{17}+\tfrac{5}{17}i$"
  hint="Substitute $-i$ for $x$, then multiply the numerator and denominator by the complex conjugate of the denominator."
>}}

## Simplifying powers of $i$

The powers of $i$ are cyclic. Let's look at what happens when we raise $i$
to increasing powers.

$$
\begin{array}{lrcl}
& i^1 &=& i \\[4pt]
& i^2 &=& -1 \\[4pt]
& i^3 &=& i^2\cdot i=-1\cdot i=-i \\[4pt]
& i^4 &=& i^3\cdot i=-i\cdot i=-i^2=-(-1)=1 \\[4pt]
& i^5 &=& i^4\cdot i=1\cdot i=i
\end{array}
$$

We can see that when we get to the fifth power of $i$, it is equal to the
first power. As we continue to multiply $i$ by itself for increasing powers,
we will see a cycle of 4. Let's examine the next four powers of $i$.

$$
\begin{array}{lrcl}
& i^6 &=& i^5\cdot i=i\cdot i=i^2=-1 \\[4pt]
& i^7 &=& i^6\cdot i=i^2\cdot i=i^3=-i \\[4pt]
& i^8 &=& i^7\cdot i=i^3\cdot i=i^4=1 \\[4pt]
& i^9 &=& i^8\cdot i=i^4\cdot i=i^5=i
\end{array}
$$

**Example.** Evaluate $i^{35}$.

**Solution.** Since $i^4=1$, we can simplify the problem by factoring out as
many factors of $i^4$ as possible. To do so, first determine how many times
4 goes into 35: $35=4\cdot8+3$.

$$i^{35}=i^{4\cdot8+3}=i^{4\cdot8}\cdot i^3=\left(i^4\right)^8\cdot i^3=1^8\cdot i^3=i^3=-i$$

{{< callout type="info" >}}
**Q&A.** *Can we write $i^{35}$ in other helpful ways?*

As shown above, we reduced $i^{35}$ to $i^3$ by dividing the exponent by 4
and using the remainder to find the simplified form. But perhaps another
factorization of $i^{35}$ may be more useful. The table below shows some
other possible factorizations.

| | | | | |
|---|---|---|---|---|
| **Factorization of $i^{35}$** | $i^{34}\cdot i$ | $i^{33}\cdot i^2$ | $i^{31}\cdot i^4$ | $i^{19}\cdot i^{16}$ |
| **Reduced form** | $\left(i^2\right)^{17}\cdot i$ | $i^{33}\cdot(-1)$ | $i^{31}\cdot1$ | $i^{19}\cdot\left(i^4\right)^4$ |
| **Simplified form** | $(-1)^{17}\cdot i$ | $-i^{33}$ | $i^{31}$ | $i^{19}$ |

Each of these will eventually result in the answer we obtained above but may
require several more steps than our earlier method.
{{< /callout >}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and
practice with complex numbers.
{{< /callout >}}

## Key concepts

- The square root of any negative number can be written as a multiple of
  $i$.
- To plot a complex number, we use two number lines, crossed to form the
  complex plane. The horizontal axis is the real axis, and the vertical axis
  is the imaginary axis.
- Complex numbers can be added and subtracted by combining the real parts
  and combining the imaginary parts.
- Complex numbers can be multiplied and divided.
- To multiply complex numbers, distribute just as with polynomials.
- To divide complex numbers, multiply both the numerator and denominator by
  the complex conjugate of the denominator to eliminate the complex number
  from the denominator.
- The powers of $i$ are cyclic, repeating every fourth one.

## Practice

### Express square roots of negative numbers as multiples of $i$

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $\sqrt{-9}+3\sqrt{-16}$."
  answer="15i"
  answerForm="simplified-radical"
  answerDisplay="$15i$"
  hint="Rewrite each radical as a multiple of $i$ first, then combine."
>}}

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $\tfrac{2+\sqrt{-12}}{2}$."
  answer="1+\sqrt{3}i"
  answerForm="simplified-radical"
  answerDisplay="$1+\sqrt{3}i$"
  hint="Rewrite $\sqrt{-12}$ as $2i\sqrt{3}$, then divide every term in the numerator by $2$."
>}}

### Plot complex numbers on the complex plane

{{< fillin
  question="Give the ordered pair $(a,b)$ used to plot the complex number $1-2i$ on the complex plane."
  answer="(1,-2)"
  answerDisplay="$(1,-2)$"
  hint="The real part gives the first coordinate and the imaginary part gives the second."
>}}

{{< fillin
  question="Give the ordered pair $(a,b)$ used to plot the complex number $i$ on the complex plane."
  answer="(0,1)"
  answerDisplay="$(0,1)$"
  hint="Write $i$ in standard form $a+bi$ first: here $a=0$ and $b=1$."
>}}

### Add and subtract complex numbers

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $(3+2i)+(5-3i)$."
  answer="8-i"
  answerForm="no-like-terms"
  answerDisplay="$8-i$"
  hint="Add the real parts together and the imaginary parts together."
>}}

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $(-5+3i)-(6-i)$."
  answer="-11+4i"
  answerForm="no-like-terms"
  answerDisplay="$-11+4i$"
  hint="Distribute the subtraction across the second complex number, then combine the real and imaginary parts."
>}}

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $(-4+4i)-(-6+9i)$."
  answer="2-5i"
  answerForm="no-like-terms"
  answerDisplay="$2-5i$"
  hint="Distribute the subtraction across the second complex number, then combine the real and imaginary parts."
>}}

### Multiply and divide complex numbers

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $(5-2i)(3i)$."
  answer="6+15i"
  answerForm="expanded"
  answerDisplay="$6+15i$"
  hint="Distribute the $3i$ across both terms, then simplify using $i^2=-1$."
>}}

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $(-1+2i)(-2+3i)$."
  answer="-4-7i"
  answerForm="expanded"
  answerDisplay="$-4-7i$"
  hint="Use the distributive property or FOIL, then combine using $i^2=-1$."
>}}

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $(3+4i)(3-4i)$."
  answer="25"
  answerForm="distributed"
  answerDisplay="$25$"
  hint="These two factors are complex conjugates, so their product is real: use $(a+bi)(a-bi)=a^2+b^2$."
>}}

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $\tfrac{3+4i}{2-i}$."
  answer="\frac{2}{5}+\frac{11}{5}i"
  answerForm="expanded"
  answerDisplay="$\tfrac{2}{5}+\tfrac{11}{5}i$"
  hint="Multiply the numerator and denominator by the complex conjugate of the denominator, $2+i$, then separate the real and imaginary parts."
>}}

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $\tfrac{6+4i}{i}$."
  answer="4-6i"
  answerForm="expanded"
  answerDisplay="$4-6i$"
  hint="Multiply the numerator and denominator by $-i$, the complex conjugate of $i$, then simplify using $i^2=-1$."
>}}

{{< fillin
  question="If $f(x)=x^2+3x+5$, evaluate $f(2+i)$."
  answer="14+7i"
  answerDisplay="$14+7i$"
  hint="Substitute $2+i$ for $x$, expand $(2+i)^2$, and combine the real and imaginary parts."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.1: Complex Numbers](https://openstax.org/books/precalculus-2e/pages/3-1-complex-numbers) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated the section's three complex-plane figures as accessible inline SVG built from the exact plotted point — $-2+3i$, the bare real/imaginary axis pair, and $3-4i$ — each drawn as a horizontal move along the real axis followed by a vertical move to the labelled point, matching the source's two-arrow diagrams; omitted the decorative "$5+2i$ real part / imaginary part" callout artwork and the "$3(6+2i)$" distribution-arrows illustration, folding their content into the surrounding prose and a plain step equation instead; reconstructed the worked step-by-step for evaluating $f(3+i)$, where $f(x)=x^2-5x+2$, from the source's page image, since its CNXML solution is an image with no transcribed steps, and independently verified the result $-5+i$ by substitution; omitted the two "count the real and nonreal solutions from a graphed parabola" exercises, whose source art has no transcribable geometry; omitted the "Access these online resources" media links, keeping only the introductory sentence; converted the section's "Try It" checks into interactive components, including two complex-plane plotting checks rewritten as ordered-pair fill-ins (GraphPlot only grades a line, a system of two lines, or a quadratic, not a plotted point); and adapted 13 selected end-of-section exercises — two radical-to-$i$ simplifications, two complex-plane plotting conversions, three addition/subtraction simplifications, two multiplications, a product of complex conjugates, two divisions (one by a complex denominator, one by $i$) written in standard $a+bi$ form, and a polynomial evaluated at a complex input — into interactive components in a closing Practice block, one group per objective. Every complex-division answer in this section, in both the exposition and the Practice block, is authored in standard $a+bi$ form rather than as a single fraction over a complex denominator, because the pinned compute-engine build computes complex division incorrectly when the denominator itself is complex.</small>
