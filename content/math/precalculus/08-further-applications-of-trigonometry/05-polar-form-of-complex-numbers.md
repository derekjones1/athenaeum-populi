---
title: Polar Form of Complex Numbers
description: >-
  Plotting complex numbers and their absolute value, converting between
  rectangular and polar (trigonometric) form, and using De Moivre's Theorem
  to find products, quotients, powers, and roots of complex numbers in polar
  form — adapted from OpenStax Precalculus 2e, Section 8.5.
source_section: "8.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Plot complex numbers in the complex plane
- Find the absolute value of a complex number
- Write complex numbers in polar form
- Convert a complex number from polar to rectangular form
- Find products of complex numbers in polar form
- Find quotients of complex numbers in polar form
- Find powers of complex numbers in polar form
- Find roots of complex numbers in polar form
{{< /callout >}}

"God made the integers; all else is the work of man." This rather famous quote by nineteenth-century German mathematician Leopold Kronecker sets the stage for this section on the polar form of a complex number. Complex numbers were invented by people and represent over a thousand years of continuous investigation and struggle by mathematicians such as Pythagoras, Descartes, De Moivre, Euler, Gauss, and others. Complex numbers answered questions that for centuries had puzzled the greatest minds in science.

We first encountered complex numbers in our earlier work with quadratic equations. In this section, we will focus on the mechanics of working with complex numbers: translation of complex numbers from polar form to rectangular form and vice versa, interpretation of complex numbers in the scheme of applications, and application of De Moivre's Theorem.

### Plotting Complex Numbers in the Complex Plane

Plotting a **complex number** $a+bi$ is similar to plotting a real number, except that the horizontal axis represents the real part of the number, $a$, and the vertical axis represents the imaginary part of the number, $bi$.

{{< callout type="info" >}}
  **How to:** given a complex number $a+bi$, plot it in the complex plane.

  1. Label the horizontal axis as the real axis and the vertical axis as the imaginary axis.
  2. Plot the point in the complex plane by moving $a$ units in the horizontal direction and $b$ units in the vertical direction.
{{< /callout >}}

**Example.** Plot the complex number $2-3i$ in the complex plane.

**Solution.** From the origin, move two units in the positive horizontal direction and three units in the negative vertical direction. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The point 2 minus 3i plotted in the complex plane at 2 on the real axis and -3 on the imaginary axis.","xMin":-2,"xMax":6,"yMin":-5,"yMax":4,"tickLabels":true,"xLabel":"Real","yLabel":"Imaginary","unit":40,"points":[{"at":[2,-3],"label":"2 − 3i"}]}
{{< /apfigure >}}

{{< graphplot
  question="Plot the point $1+5i$ in the complex plane."
  answerDisplay="$(1,5)$"
  ariaLabel="A blank complex plane from -7 to 7 on both axes, labeled Real and Imaginary."
  hint="Move $1$ unit in the positive real direction and $5$ units in the positive imaginary direction."
>}}
{"answer": {"points": [[1,5]]}, "grid": {"xLabel": "Real", "yLabel": "Imaginary"}}
{{< /graphplot >}}

### Finding the Absolute Value of a Complex Number

The first step toward working with a complex number in polar form is to find the absolute value. The absolute value of a complex number is the same as its **magnitude**, or $|z|$. It measures the distance from the origin to a point in the plane. For example, the graph of $z=2+4i$ below shows $|z|$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The point 2 plus 4i plotted in the complex plane, with a segment from the origin to the point labeled the magnitude |z|, which equals the square root of 2 squared plus 4 squared, equals the square root of 20, equals 2 root 5.","xMin":-3,"xMax":7,"yMin":-2,"yMax":8,"tickLabels":true,"xLabel":"Real","yLabel":"Imaginary","unit":40,"points":[{"at":[2,4],"label":"2 + 4i"}],"segments":[{"from":[0,0],"to":[2,4],"label":"|z|"}],"texts":[{"at":[3.6,5.6],"text":"|z| = √(2² + 4²) = √20 = 2√5"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Absolute Value of a Complex Number.** Given $z=x+yi$, a complex number, the absolute value of $z$ is defined as

  $$|z|=\sqrt{x^2+y^2}$$

  It is the distance from the origin to the point $(x,y)$.

  Notice that the absolute value of a real number gives the distance of the number from $0$, while the absolute value of a complex number gives the distance of the number from the origin, $(0,0)$.
{{< /callout >}}

**Example.** Find the absolute value of $z=\sqrt5-i$.

**Solution.** Using the formula, we have

$$
\begin{array}{lrcl}
& |z| &=& \sqrt{x^2+y^2} \\[4pt]
& |z| &=& \sqrt{(\sqrt5)^2+(-1)^2} \\[4pt]
& |z| &=& \sqrt{5+1} \\[4pt]
& |z| &=& \sqrt6
\end{array}
$$

See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The point z equals the square root of 5 minus i plotted in the complex plane, with a segment from the origin to the point labeled the magnitude |z|.","xMin":-2,"xMax":6,"yMin":-4,"yMax":3,"tickLabels":true,"xLabel":"Real","yLabel":"Imaginary","unit":50,"points":[{"at":[2.236,-1],"label":"z = (√5 − i)"}],"segments":[{"from":[0,0],"to":[2.236,-1],"label":"|z|"}]}
{{< /apfigure >}}

{{< fillin
  question="Find the absolute value of the complex number $z=12-5i$."
  answer="13"
  answerDisplay="$13$"
  hint="Use $|z|=\sqrt{x^2+y^2}$ with $x=12$ and $y=-5$."
>}}

**Example.** Given $z=3-4i$, find $|z|$.

**Solution.** Using the formula, we have

$$
\begin{array}{lrcl}
& |z| &=& \sqrt{x^2+y^2} \\[4pt]
& |z| &=& \sqrt{(3)^2+(-4)^2} \\[4pt]
& |z| &=& \sqrt{9+16} \\[4pt]
& |z| &=& \sqrt{25} \\[4pt]
& |z| &=& 5
\end{array}
$$

The absolute value of $z$ is $5$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The point z equals 3 minus 4i plotted in the complex plane, with a segment from the origin to the point labeled |z| equals 5.","xMin":-2,"xMax":5,"yMin":-5,"yMax":2,"tickLabels":true,"xLabel":"Real","yLabel":"Imaginary","unit":60,"points":[{"at":[3,-4],"label":"(3 − 4i)"}],"segments":[{"from":[0,0],"to":[3,-4],"label":"|z| = 5"}]}
{{< /apfigure >}}

{{< fillin
  question="Given $z=1-7i$, find $|z|$."
  answer="5\sqrt2"
  answerForm="exact-radical"
  answerDisplay="$5\sqrt2$"
  hint="Use $|z|=\sqrt{x^2+y^2}$, then pull the largest perfect-square factor out from under the radical."
>}}

### Writing Complex Numbers in Polar Form

The **polar form of a complex number** expresses a number in terms of an angle $\theta$ and its distance from the origin $r$. Given a complex number in **rectangular form** expressed as $z=x+yi$, we use the same conversion formulas as we do to write the number in trigonometric form:

$$
\begin{array}{lrcl}
& x &=& r\cos\theta \\[4pt]
& y &=& r\sin\theta \\[4pt]
& r &=& \sqrt{x^2+y^2}
\end{array}
$$

We review these relationships in the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A general point x+yi plotted in the complex plane, forming a right triangle with legs x and y and hypotenuse r from the origin; the angle theta is marked at the origin between the real axis and r, and an arc of radius r shows the point lies on the circle through it.","xMin":-2,"xMax":6,"yMin":-1,"yMax":6,"grid":false,"tickLabels":false,"unit":55,"xLabel":"Real","yLabel":"Imaginary","points":[{"at":[3,4],"label":"x + yi"}],"segments":[{"from":[0,0],"to":[3,0],"label":"x"},{"from":[3,0],"to":[3,4],"label":"y"},{"from":[0,0],"to":[3,4],"label":"r"}],"circles":[{"at":[0,0],"r":0.6,"from":0,"to":53.13},{"at":[0,0],"r":5,"from":-15,"to":110}],"texts":[{"at":[0.85,0.35],"text":"θ"}]}
{{< /apfigure >}}

We use the term **modulus** to represent the absolute value of a complex number, or the distance from the origin to the point $(x,y)$. The modulus, then, is the same as $r$, the radius in polar form. We use $\theta$ to indicate the angle of direction (just as with polar coordinates). Substituting, we have

$$
\begin{array}{lrcl}
& z &=& x+yi \\[4pt]
& z &=& r\cos\theta+(r\sin\theta)i \\[4pt]
& z &=& r(\cos\theta+i\sin\theta)
\end{array}
$$

{{< callout type="info" >}}
  **Polar Form of a Complex Number.** Writing a complex number in polar form involves the following conversion formulas:

  $$
  \begin{array}{lrcl}
  & x &=& r\cos\theta \\[4pt]
  & y &=& r\sin\theta \\[4pt]
  & r &=& \sqrt{x^2+y^2}
  \end{array}
  $$

  Making a direct substitution, we have

  $$
  \begin{array}{lrcl}
  & z &=& x+yi \\[4pt]
  & z &=& (r\cos\theta)+i(r\sin\theta) \\[4pt]
  & z &=& r(\cos\theta+i\sin\theta)
  \end{array}
  $$

  where $r$ is the **modulus** and $\theta$ is the **argument**. We often use the abbreviation $r\,\text{cis}\,\theta$ to represent $r(\cos\theta+i\sin\theta)$.
{{< /callout >}}

**Example.** Express the complex number $4i$ using polar coordinates.

**Solution.** On the complex plane, the number $z=4i$ is the same as $z=0+4i$. Writing it in polar form, we have to calculate $r$ first.

$$
\begin{array}{lrcl}
& r &=& \sqrt{x^2+y^2} \\[4pt]
& r &=& \sqrt{0^2+4^2} \\[4pt]
& r &=& \sqrt{16} \\[4pt]
& r &=& 4
\end{array}
$$

Next, we look at $x$. If $x=r\cos\theta$, and $x=0$, then $\theta=\tfrac{\pi}{2}$. In polar coordinates, the complex number $z=0+4i$ can be written as $z=4\left(\cos\tfrac{\pi}{2}+i\sin\tfrac{\pi}{2}\right)$ or $4\,\text{cis}\left(\tfrac{\pi}{2}\right)$. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The point z equals 4i plotted on the imaginary axis at (0,4), with a small arc from the real axis to the point marking the angle pi over 2.","xMin":-3,"xMax":3,"yMin":-1,"yMax":5,"tickLabels":true,"xLabel":"Real","yLabel":"Imaginary","unit":55,"points":[{"at":[0,4],"label":"z = 4i"}],"circles":[{"at":[0,0],"r":1,"from":0,"to":90}],"texts":[{"at":[0.7,0.9],"text":"π/2"}]}
{{< /apfigure >}}

{{< fillin
  question="Express $z=3i$ as $r\,\text{cis}\,\theta$ in polar form. First find $r$."
  answer="3"
  answerDisplay="$r=3$"
  hint="On the imaginary axis, $r=|z|$ — no distance formula is needed."
>}}

{{< fillin
  question="Now find $\theta$, with $0\le\theta<2\pi$."
  answer="\pi/2"
  answerForm="radians"
  answerDisplay="$\theta=\tfrac{\pi}{2}$"
  hint="The point $3i$ lies straight up the imaginary axis from the origin."
>}}

**Example.** Find the polar form of $-4+4i$.

**Solution.** First, find the value of $r$.

$$
\begin{array}{lrcl}
& r &=& \sqrt{x^2+y^2} \\[4pt]
& r &=& \sqrt{(-4)^2+4^2} \\[4pt]
& r &=& \sqrt{32} \\[4pt]
& r &=& 4\sqrt2
\end{array}
$$

Find the angle $\theta$ using the formula:

$$
\begin{array}{lrcl}
& \cos\theta &=& \tfrac{x}{r} \\[4pt]
& \cos\theta &=& \tfrac{-4}{4\sqrt2} \\[4pt]
& \cos\theta &=& -\tfrac{1}{\sqrt2} \\[4pt]
& \theta &=& \cos^{-1}\left(-\tfrac{1}{\sqrt2}\right)=\tfrac{3\pi}{4}
\end{array}
$$

Thus, the solution is $4\sqrt2\,\text{cis}\left(\tfrac{3\pi}{4}\right)$.

{{< fillin
  question="Write $z=\sqrt3+i$ in polar form. First find $r$."
  answer="2"
  answerDisplay="$r=2$"
  hint="Use $r=\sqrt{x^2+y^2}$ with $x=\sqrt3$ and $y=1$."
>}}

{{< fillin
  question="Now find $\theta$, with $0\le\theta<2\pi$."
  answer="\pi/6"
  answerForm="radians"
  answerDisplay="$\theta=\tfrac{\pi}{6}$"
  hint="Use $\cos\theta=\tfrac{x}{r}$; the point lies in the first quadrant."
>}}

### Converting a Complex Number from Polar to Rectangular Form

Converting a complex number from polar form to rectangular form is a matter of evaluating what is given and using the distributive property. In other words, given $z=r(\cos\theta+i\sin\theta)$, first evaluate the trigonometric functions $\cos\theta$ and $\sin\theta$. Then, multiply through by $r$.

**Example.** Convert the polar form of the given complex number to rectangular form: $z=12\left(\cos\tfrac{\pi}{6}+i\sin\tfrac{\pi}{6}\right)$.

**Solution.** We begin by evaluating the trigonometric expressions.

$$\cos\tfrac{\pi}{6}=\tfrac{\sqrt3}{2}\quad\text{and}\quad\sin\tfrac{\pi}{6}=\tfrac12$$

After substitution, the complex number is

$$z=12\left(\tfrac{\sqrt3}{2}+\tfrac12 i\right)$$

We apply the distributive property:

$$
\begin{array}{lrcl}
& z &=& 12\left(\tfrac{\sqrt3}{2}+\tfrac12 i\right) \\[4pt]
& &=& (12)\tfrac{\sqrt3}{2}+(12)\tfrac12 i \\[4pt]
& &=& 6\sqrt3+6i
\end{array}
$$

The rectangular form of the given point in complex form is $6\sqrt3+6i$.

**Example.** Find the rectangular form of the complex number given $r=13$ and $\tan\theta=\tfrac{5}{12}$. Assume the number is in the first quadrant.

**Solution.** If $\tan\theta=\tfrac{5}{12}$, and $\tan\theta=\tfrac{y}{x}$, we first confirm $r=\sqrt{x^2+y^2}=\sqrt{12^2+5^2}=13$. We then find $\cos\theta=\tfrac{x}{r}$ and $\sin\theta=\tfrac{y}{r}$.

$$
\begin{array}{lrcl}
& z &=& 13(\cos\theta+i\sin\theta) \\[4pt]
& &=& 13\left(\tfrac{12}{13}+\tfrac{5}{13}i\right) \\[4pt]
& &=& 12+5i
\end{array}
$$

The rectangular form of the given number in complex form is $12+5i$.

{{< fillin
  question="Convert the complex number to rectangular form: $z=4\left(\cos\tfrac{11\pi}{6}+i\sin\tfrac{11\pi}{6}\right)$."
  answer="2\sqrt3-2i"
  answerForm="evaluated-trig"
  answerDisplay="$2\sqrt3-2i$"
  hint="Evaluate $\cos\tfrac{11\pi}{6}$ and $\sin\tfrac{11\pi}{6}$ first, then multiply each by $4$."
>}}

### Finding Products of Complex Numbers in Polar Form

Now that we can convert complex numbers to polar form we will learn how to perform operations on complex numbers in polar form. For the rest of this section, we will work with formulas developed by French mathematician Abraham De Moivre (1667–1754). These formulas have made working with products, quotients, powers, and roots of complex numbers much simpler than they appear. The rules are based on multiplying the moduli and adding the arguments.

{{< callout type="info" >}}
  **Products of Complex Numbers in Polar Form.** If $z_1=r_1(\cos\theta_1+i\sin\theta_1)$ and $z_2=r_2(\cos\theta_2+i\sin\theta_2)$, then the product of these numbers is given as:

  $$
  \begin{array}{lrcl}
  & z_1z_2 &=& r_1r_2[\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)] \\[4pt]
  & z_1z_2 &=& r_1r_2\,\text{cis}(\theta_1+\theta_2)
  \end{array}
  $$

  Notice that the product calls for multiplying the moduli and adding the angles.
{{< /callout >}}

**Example.** Find the product $z_1z_2$, given $z_1=4(\cos(80^\circ)+i\sin(80^\circ))$ and $z_2=2(\cos(145^\circ)+i\sin(145^\circ))$.

**Solution.** Follow the formula.

$$
\begin{array}{lrcl}
& z_1z_2 &=& 4\cdot2[\cos(80^\circ+145^\circ)+i\sin(80^\circ+145^\circ)] \\[4pt]
& z_1z_2 &=& 8[\cos(225^\circ)+i\sin(225^\circ)] \\[4pt]
& z_1z_2 &=& 8\left[\cos\left(\tfrac{5\pi}{4}\right)+i\sin\left(\tfrac{5\pi}{4}\right)\right] \\[4pt]
& z_1z_2 &=& 8\left[-\tfrac{\sqrt2}{2}+i\left(-\tfrac{\sqrt2}{2}\right)\right] \\[4pt]
& z_1z_2 &=& -4\sqrt2-4i\sqrt2
\end{array}
$$

### Finding Quotients of Complex Numbers in Polar Form

The quotient of two complex numbers in polar form is the quotient of the two moduli and the difference of the two arguments.

{{< callout type="info" >}}
  **Quotients of Complex Numbers in Polar Form.** If $z_1=r_1(\cos\theta_1+i\sin\theta_1)$ and $z_2=r_2(\cos\theta_2+i\sin\theta_2)$, then the quotient of these numbers is

  $$
  \begin{array}{lrcl}
  & \tfrac{z_1}{z_2} &=& \tfrac{r_1}{r_2}[\cos(\theta_1-\theta_2)+i\sin(\theta_1-\theta_2)],\ z_2\ne0 \\[4pt]
  & \tfrac{z_1}{z_2} &=& \tfrac{r_1}{r_2}\,\text{cis}(\theta_1-\theta_2),\ z_2\ne0
  \end{array}
  $$

  Notice that the moduli are divided, and the angles are subtracted.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given two complex numbers in polar form, find the quotient.

  1. Divide $\tfrac{r_1}{r_2}$.
  2. Find $\theta_1-\theta_2$.
  3. Substitute the results into the formula: $z=r(\cos\theta+i\sin\theta)$. Replace $r$ with $\tfrac{r_1}{r_2}$, and replace $\theta$ with $\theta_1-\theta_2$.
  4. Calculate the new trigonometric expressions and multiply through by $r$.
{{< /callout >}}

**Example.** Find the quotient of $z_1=2(\cos(213^\circ)+i\sin(213^\circ))$ and $z_2=4(\cos(33^\circ)+i\sin(33^\circ))$.

**Solution.** Using the formula, we have

$$
\begin{array}{lrcl}
& \tfrac{z_1}{z_2} &=& \tfrac24[\cos(213^\circ-33^\circ)+i\sin(213^\circ-33^\circ)] \\[4pt]
& \tfrac{z_1}{z_2} &=& \tfrac12[\cos(180^\circ)+i\sin(180^\circ)] \\[4pt]
& \tfrac{z_1}{z_2} &=& \tfrac12[-1+0i] \\[4pt]
& \tfrac{z_1}{z_2} &=& -\tfrac12+0i \\[4pt]
& \tfrac{z_1}{z_2} &=& -\tfrac12
\end{array}
$$

{{< fillin
  question="Find the product $z_1z_2$ of $z_1=2\sqrt3(\cos(150^\circ)+i\sin(150^\circ))$ and $z_2=2(\cos(30^\circ)+i\sin(30^\circ))$."
  answer="-4\sqrt3"
  answerDisplay="$-4\sqrt3$"
  hint="Multiply the moduli and add the angles, then evaluate the resulting trigonometric expressions."
>}}

{{< fillin
  question="Find the quotient $\tfrac{z_1}{z_2}$ of the same two numbers, $z_1=2\sqrt3(\cos(150^\circ)+i\sin(150^\circ))$ and $z_2=2(\cos(30^\circ)+i\sin(30^\circ))$."
  answer="-\tfrac{\sqrt3}{2}+\tfrac32 i"
  answerDisplay="$-\tfrac{\sqrt3}{2}+\tfrac32 i$"
  hint="Divide the moduli and subtract the angles, then evaluate the resulting trigonometric expressions."
>}}

### Finding Powers of Complex Numbers in Polar Form

Finding powers of complex numbers is greatly simplified using **De Moivre's Theorem**. It states that, for a positive integer $n$, $z^n$ is found by raising the modulus to the $n$th power and multiplying the argument by $n$. It is the standard method used in modern mathematics.

{{< callout type="info" >}}
  **De Moivre's Theorem.** If $z=r(\cos\theta+i\sin\theta)$ is a complex number, then

  $$
  \begin{array}{lrcl}
  & z^n &=& r^n[\cos(n\theta)+i\sin(n\theta)] \\[4pt]
  & z^n &=& r^n\,\text{cis}(n\theta)
  \end{array}
  $$

  where $n$ is a positive integer.
{{< /callout >}}

**Example.** Evaluate the expression $(1+i)^5$ using De Moivre's Theorem.

**Solution.** Since De Moivre's Theorem applies to complex numbers written in polar form, we must first write $(1+i)$ in polar form. Let us find $r$.

$$
\begin{array}{lrcl}
& r &=& \sqrt{x^2+y^2} \\[4pt]
& r &=& \sqrt{(1)^2+(1)^2} \\[4pt]
& r &=& \sqrt2
\end{array}
$$

Then we find $\theta$. Using the formula $\tan\theta=\tfrac{y}{x}$ gives

$$
\begin{array}{lrcl}
& \tan\theta &=& \tfrac11 \\[4pt]
& \tan\theta &=& 1 \\[4pt]
& \theta &=& \tfrac{\pi}{4}
\end{array}
$$

Use De Moivre's Theorem to evaluate the expression.

$$
\begin{array}{lrcl}
& (a+bi)^n &=& r^n[\cos(n\theta)+i\sin(n\theta)] \\[4pt]
& (1+i)^5 &=& (\sqrt2)^5\left[\cos\left(5\cdot\tfrac{\pi}{4}\right)+i\sin\left(5\cdot\tfrac{\pi}{4}\right)\right] \\[4pt]
& (1+i)^5 &=& 4\sqrt2\left[\cos\left(\tfrac{5\pi}{4}\right)+i\sin\left(\tfrac{5\pi}{4}\right)\right] \\[4pt]
& (1+i)^5 &=& 4\sqrt2\left[-\tfrac{\sqrt2}{2}+i\left(-\tfrac{\sqrt2}{2}\right)\right] \\[4pt]
& (1+i)^5 &=& -4-4i
\end{array}
$$

### Finding Roots of Complex Numbers in Polar Form

To find the $n$th root of a complex number in polar form, we use the $n$th Root Theorem or De Moivre's Theorem and raise the complex number to a power with a rational exponent. There are several ways to represent a formula for finding $n$th roots of complex numbers in polar form.

{{< callout type="info" >}}
  **The nth Root Theorem.** To find the $n$th root of a complex number in polar form, use the formula given as

  $$z^{\tfrac1n}=r^{\tfrac1n}\left[\cos\left(\tfrac{\theta}{n}+\tfrac{2k\pi}{n}\right)+i\sin\left(\tfrac{\theta}{n}+\tfrac{2k\pi}{n}\right)\right]$$

  where $k=0,1,2,3,\dots,n-1$. We add $\tfrac{2k\pi}{n}$ to $\tfrac{\theta}{n}$ in order to obtain the periodic roots.
{{< /callout >}}

**Example.** Evaluate the cube roots of $z=8\left(\cos\left(\tfrac{2\pi}{3}\right)+i\sin\left(\tfrac{2\pi}{3}\right)\right)$.

**Solution.** We have

$$
\begin{array}{lrcl}
& z^{\tfrac13} &=& 8^{\tfrac13}\left[\cos\left(\tfrac{\tfrac{2\pi}{3}}{3}+\tfrac{2k\pi}{3}\right)+i\sin\left(\tfrac{\tfrac{2\pi}{3}}{3}+\tfrac{2k\pi}{3}\right)\right] \\[4pt]
& z^{\tfrac13} &=& 2\left[\cos\left(\tfrac{2\pi}{9}+\tfrac{2k\pi}{3}\right)+i\sin\left(\tfrac{2\pi}{9}+\tfrac{2k\pi}{3}\right)\right]
\end{array}
$$

There will be three roots: $k=0,1,2$. When $k=0$, we have

$$z^{\tfrac13}=2\left(\cos\left(\tfrac{2\pi}{9}\right)+i\sin\left(\tfrac{2\pi}{9}\right)\right)$$

When $k=1$, we have

$$
\begin{array}{lrcl}
& z^{\tfrac13} &=& 2\left[\cos\left(\tfrac{2\pi}{9}+\tfrac{6\pi}{9}\right)+i\sin\left(\tfrac{2\pi}{9}+\tfrac{6\pi}{9}\right)\right] \\[4pt]
& z^{\tfrac13} &=& 2\left(\cos\left(\tfrac{8\pi}{9}\right)+i\sin\left(\tfrac{8\pi}{9}\right)\right)
\end{array}
$$

When $k=2$, we have

$$
\begin{array}{lrcl}
& z^{\tfrac13} &=& 2\left[\cos\left(\tfrac{2\pi}{9}+\tfrac{12\pi}{9}\right)+i\sin\left(\tfrac{2\pi}{9}+\tfrac{12\pi}{9}\right)\right] \\[4pt]
& z^{\tfrac13} &=& 2\left(\cos\left(\tfrac{14\pi}{9}\right)+i\sin\left(\tfrac{14\pi}{9}\right)\right)
\end{array}
$$

**Analysis.** Remember to find the common denominator to simplify fractions in situations like this one. For $k=1$, the angle simplification is

$$
\begin{array}{lrcl}
& \tfrac{\tfrac{2\pi}{3}}{3}+\tfrac{2(1)\pi}{3} &=& \tfrac{2\pi}{3}\left(\tfrac13\right)+\tfrac{2(1)\pi}{3}\left(\tfrac33\right) \\[4pt]
& &=& \tfrac{2\pi}{9}+\tfrac{6\pi}{9} \\[4pt]
& &=& \tfrac{8\pi}{9}
\end{array}
$$

{{< fillin
  question="Find the four fourth roots of $16(\cos(120^\circ)+i\sin(120^\circ))$, each written in the form $r(\cos\theta+i\sin\theta)$ in degrees with $0^\circ\le\theta<360^\circ$, separated by commas."
  answer="2(\cos30^\circ+i\sin30^\circ),2(\cos120^\circ+i\sin120^\circ),2(\cos210^\circ+i\sin210^\circ),2(\cos300^\circ+i\sin300^\circ)"
  answerMode="unordered"
  answerDisplay="$2(\cos30^\circ+i\sin30^\circ)$, $2(\cos120^\circ+i\sin120^\circ)$, $2(\cos210^\circ+i\sin210^\circ)$, $2(\cos300^\circ+i\sin300^\circ)$"
  hint="Take the fourth root of $16$ for $r$, divide $120^\circ$ by $4$ for the first angle, then add $90^\circ$ (that is, $\tfrac{360^\circ}{4}$) repeatedly for the rest."
>}}

## Key concepts

- Complex numbers in the form $a+bi$ are plotted in the complex plane similar to the way rectangular coordinates are plotted in the rectangular plane. Label the $x$-axis as the real axis and the $y$-axis as the imaginary axis.
- The absolute value of a complex number is the same as its magnitude. It is the distance from the origin to the point: $|z|=\sqrt{a^2+b^2}$.
- To write complex numbers in polar form, we use the formulas $x=r\cos\theta$, $y=r\sin\theta$, and $r=\sqrt{x^2+y^2}$. Then, $z=r(\cos\theta+i\sin\theta)$.
- To convert from polar form to rectangular form, first evaluate the trigonometric functions. Then, multiply through by $r$.
- To find the product of two complex numbers, multiply the two moduli and add the two angles. Evaluate the trigonometric functions, and multiply using the distributive property.
- To find the quotient of two complex numbers in polar form, find the quotient of the two moduli and the difference of the two angles.
- To find the power of a complex number $z^n$, raise $r$ to the power $n$, and multiply $\theta$ by $n$.
- Finding the roots of a complex number is the same as raising a complex number to a power, but using a rational exponent.

## Practice

### Plot complex numbers in the complex plane

{{< graphplot
  question="Plot the complex number $-3-3i$ in the complex plane."
  answerDisplay="$(-3,-3)$"
  ariaLabel="A blank complex plane from -7 to 7 on both axes, labeled Real and Imaginary."
  hint="Move $3$ units in the negative real direction and $3$ units in the negative imaginary direction."
>}}
{"answer": {"points": [[-3,-3]]}, "grid": {"xLabel": "Real", "yLabel": "Imaginary"}}
{{< /graphplot >}}

{{< graphplot
  question="Plot the complex number $2i$ in the complex plane."
  answerDisplay="$(0,2)$"
  ariaLabel="A blank complex plane from -7 to 7 on both axes, labeled Real and Imaginary."
  hint="The real part is $0$, so the point lies on the imaginary axis, $2$ units up."
>}}
{"answer": {"points": [[0,2]]}, "grid": {"xLabel": "Real", "yLabel": "Imaginary"}}
{{< /graphplot >}}

{{< multiplechoice
  question="Which graph shows the complex number $6-2i$ plotted in the complex plane?"
  mode="graph"
  answerIndex="1"
  hint="The real part is the horizontal coordinate and the imaginary part the vertical one: $6-2i$ sits $6$ units to the right of the origin and $2$ units down."
>}}
{"ariaLabel":"A point plotted at negative 6 on the real axis and 2 on the imaginary axis.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"xTickStep":2,"yTickStep":2,"xLabel":"Real","yLabel":"Imaginary","points":[{"at":[-6,2]}]}
===OPT===
{"ariaLabel":"A point plotted at 6 on the real axis and negative 2 on the imaginary axis.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"xTickStep":2,"yTickStep":2,"xLabel":"Real","yLabel":"Imaginary","points":[{"at":[6,-2]}]}
===OPT===
{"ariaLabel":"A point plotted at negative 2 on the real axis and 6 on the imaginary axis.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"xTickStep":2,"yTickStep":2,"xLabel":"Real","yLabel":"Imaginary","points":[{"at":[-2,6]}]}
===OPT===
{"ariaLabel":"A point plotted at 6 on the real axis and 2 on the imaginary axis.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"tickLabels":true,"xTickStep":2,"yTickStep":2,"xLabel":"Real","yLabel":"Imaginary","points":[{"at":[6,2]}]}
{{< /multiplechoice >}}

### Find the absolute value of a complex number

{{< fillin
  question="Find the absolute value of $-7+i$."
  answer="5\sqrt2"
  answerForm="exact-radical"
  answerDisplay="$5\sqrt2$"
  hint="Use $|z|=\sqrt{x^2+y^2}$, then pull the largest perfect-square factor out from under the radical."
>}}

{{< fillin
  question="Find the absolute value of $\sqrt2-6i$."
  answer="\sqrt{38}"
  answerForm="exact-radical"
  answerDisplay="$\sqrt{38}$"
  hint="Use $|z|=\sqrt{x^2+y^2}$; $38$ has no perfect-square factor, so the radical is already simplified."
>}}

### Write complex numbers in polar form

{{< fillin
  question="Write $8-4i$ in polar form $r(\cos\theta+i\sin\theta)$. First find $r$."
  answer="4\sqrt5"
  answerForm="exact-radical"
  answerDisplay="$r=4\sqrt5$"
  hint="Use $r=\sqrt{x^2+y^2}$ with $x=8$ and $y=-4$."
>}}

{{< fillin
  question="Now find $\theta$, in degrees rounded to the nearest tenth, with $0^\circ\le\theta<360^\circ$."
  answer="333.4^\circ"
  answerForm="degrees"
  answerDisplay="$\theta\approx333.4^\circ$"
  hint="The point $8-4i$ lies in the fourth quadrant, so subtract the reference angle $\tan^{-1}\left(\tfrac48\right)$ from $360^\circ$."
>}}

### Convert a complex number from polar to rectangular form

{{< fillin
  question="Convert the complex number to rectangular form: $z=7\,\text{cis}\left(\tfrac{\pi}{6}\right)$."
  answer="\tfrac{7\sqrt3}{2}+\tfrac72 i"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{7\sqrt3}{2}+\tfrac72 i$"
  hint="Evaluate $\cos\tfrac{\pi}{6}$ and $\sin\tfrac{\pi}{6}$ first, then multiply each by $7$."
>}}

{{< fillin
  question="Convert the complex number to rectangular form: $z=4\,\text{cis}\left(\tfrac{7\pi}{6}\right)$."
  answer="-2\sqrt3-2i"
  answerForm="evaluated-trig"
  answerDisplay="$-2\sqrt3-2i$"
  hint="Evaluate $\cos\tfrac{7\pi}{6}$ and $\sin\tfrac{7\pi}{6}$ first, then multiply each by $4$."
>}}

### Find products of complex numbers in polar form

{{< fillin
  question="Find $z_1z_2$ in polar form $r(\cos\theta+i\sin\theta)$, given $z_1=2\sqrt3(\cos(116^\circ)+i\sin(116^\circ))$ and $z_2=2(\cos(82^\circ)+i\sin(82^\circ))$."
  answer="4\sqrt3(\cos198^\circ+i\sin198^\circ)"
  answerDisplay="$4\sqrt3(\cos198^\circ+i\sin198^\circ)$"
  hint="Multiply the moduli and add the angles."
>}}

{{< fillin
  question="Find $z_1z_2$ in polar form $r(\cos\theta+i\sin\theta)$, given $z_1=3(\cos(120^\circ)+i\sin(120^\circ))$ and $z_2=\tfrac14(\cos(60^\circ)+i\sin(60^\circ))$."
  answer="\tfrac34(\cos180^\circ+i\sin180^\circ)"
  answerDisplay="$\tfrac34(\cos180^\circ+i\sin180^\circ)$"
  hint="Multiply the moduli and add the angles."
>}}

### Find quotients of complex numbers in polar form

{{< fillin
  question="Find $\tfrac{z_1}{z_2}$ in polar form $r(\cos\theta+i\sin\theta)$, given $z_1=21(\cos(135^\circ)+i\sin(135^\circ))$ and $z_2=3(\cos(65^\circ)+i\sin(65^\circ))$."
  answer="7(\cos70^\circ+i\sin70^\circ)"
  answerDisplay="$7(\cos70^\circ+i\sin70^\circ)$"
  hint="Divide the moduli and subtract the angles."
>}}

{{< fillin
  question="Find $\tfrac{z_1}{z_2}$ in polar form $r(\cos\theta+i\sin\theta)$, given $z_1=5\sqrt2(\cos\pi+i\sin\pi)$ and $z_2=\sqrt2\left(\cos\tfrac{2\pi}{3}+i\sin\tfrac{2\pi}{3}\right)$."
  answer="5\left(\cos\tfrac{\pi}{3}+i\sin\tfrac{\pi}{3}\right)"
  answerDisplay="$5\left(\cos\tfrac{\pi}{3}+i\sin\tfrac{\pi}{3}\right)$"
  hint="Divide the moduli and subtract the angles."
>}}

### Find powers of complex numbers in polar form

{{< fillin
  question="Find $z^3$ in polar form $r(\cos\theta+i\sin\theta)$, when $z=5(\cos(45^\circ)+i\sin(45^\circ))$."
  answer="125(\cos135^\circ+i\sin135^\circ)"
  answerDisplay="$125(\cos135^\circ+i\sin135^\circ)$"
  hint="Raise the modulus to the third power and multiply the angle by $3$."
>}}

{{< fillin
  question="Find $z^2$ in polar form $r(\cos\theta+i\sin\theta)$, when $z=3(\cos(120^\circ)+i\sin(120^\circ))$."
  answer="9(\cos240^\circ+i\sin240^\circ)"
  answerDisplay="$9(\cos240^\circ+i\sin240^\circ)$"
  hint="Raise the modulus to the second power and multiply the angle by $2$."
>}}

### Find roots of complex numbers in polar form

{{< fillin
  question="Evaluate the cube roots of $z=27(\cos(240^\circ)+i\sin(240^\circ))$, each written in the form $r(\cos\theta+i\sin\theta)$ in degrees with $0^\circ\le\theta<360^\circ$, separated by commas."
  answer="3(\cos80^\circ+i\sin80^\circ),3(\cos200^\circ+i\sin200^\circ),3(\cos320^\circ+i\sin320^\circ)"
  answerMode="unordered"
  answerDisplay="$3(\cos80^\circ+i\sin80^\circ)$, $3(\cos200^\circ+i\sin200^\circ)$, $3(\cos320^\circ+i\sin320^\circ)$"
  hint="Take the cube root of $27$ for $r$, divide $240^\circ$ by $3$ for the first angle, then add $120^\circ$ (that is, $\tfrac{360^\circ}{3}$) repeatedly for the rest."
>}}

{{< fillin
  question="Evaluate the square roots of $z=8\left(\cos\tfrac{7\pi}{4}+i\sin\tfrac{7\pi}{4}\right)$, each written in the form $r(\cos\theta+i\sin\theta)$, separated by a comma."
  answer="2\sqrt2\left(\cos\tfrac{7\pi}{8}+i\sin\tfrac{7\pi}{8}\right),2\sqrt2\left(\cos\tfrac{15\pi}{8}+i\sin\tfrac{15\pi}{8}\right)"
  answerMode="unordered"
  answerDisplay="$2\sqrt2\left(\cos\tfrac{7\pi}{8}+i\sin\tfrac{7\pi}{8}\right)$, $2\sqrt2\left(\cos\tfrac{15\pi}{8}+i\sin\tfrac{15\pi}{8}\right)$"
  hint="Take the square root of $8$ for $r$, divide $\tfrac{7\pi}{4}$ by $2$ for the first angle, then add $\pi$ (that is, $\tfrac{2\pi}{2}$) for the second."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 8.5: Polar Form of Complex Numbers](https://openstax.org/books/precalculus-2e/pages/8-5-polar-form-of-complex-numbers) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: reworded the introduction's cross-book reference to an earlier "Complex Numbers" section (which lives in a different OpenStax title outside this site's corpus) as a generic mention of prior work with quadratic equations; recreated all six instructional figures as accessible spec-first SVGs — the plotted points for $2-3i$, $\sqrt5-i$, and $3-4i$, each with the magnitude segment and label the source draws; the $2+4i$ magnitude illustration, including its printed radical computation as figure text; the generic $x,y,r,\theta$ right-triangle diagram reviewing the conversion formulas (its large sweeping arc, decorative in the source, is drawn as a plain circular arc through the point, since the engine's figure primitives do not draw arrowheads on a circle); and the polar-coordinate plot of $4i$ with its $\tfrac{\pi}{2}$ angle arc. Omitted the "Access these online resources" media callout linking to two external non-corpus practice sites. Every retained Try It became a real `fillin` or `graphplot` component. The complex-plane plotting Try It and two Graphical-set Practice items became `graphplot` components graded on the placed point, since the engine's points answer form now covers a single plotted point, not just a table of several. "Convert to polar form" Try Its (Try It 4, Try It 5) and the matching Practice item are split into two `fillin` components each — one for $r$, one for $\theta$: for the exact-angle items a keyed full trigonometric-form answer is retype-passable (the engine evaluates $\cos$ and $\sin$ on comparison, so a learner's rectangular-form retype of the printed subject grades against a polar-form key as correct with no token able to refuse it, measured against the pinned grader), and the rounded-angle Practice item keeps the same split for parallel structure and so its $\theta$ part can carry the degree-form check. Because the grader does not parse the $\text{cis}$ abbreviation this section introduces, every product, quotient, power, and root question names the expected $r(\cos\theta+i\sin\theta)$ shape explicitly. Every polar-form product, quotient, power, and root answer is instead directly fillable, since nothing in a "find the product/quotient/power/root" prompt is itself value-equal to the computed result; these are keyed in the same $r(\cos\theta+i\sin\theta)$ shape the source's own Answer Key prints, and were replayed against several learner-plausible alternate spellings (the fully distributed trig form, and the evaluated $a+bi$ form for every angle with an exact closed form) with no wrongly rejected spelling found. Root sets use `answerMode="unordered"` comma lists of polar-form roots. Adapted fifteen selected end-of-section exercises — two complex-plane plots, two absolute-value, one polar-form conversion split into its two components, two polar-to-rectangular conversions, two products, two quotients, two powers, and two root evaluations — into a closing Practice block, one group per objective, every item independently re-derived (including by running the arithmetic in Node) rather than read off the source key.</small>
