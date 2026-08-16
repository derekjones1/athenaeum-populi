---
title: Modeling Using Variation
description: >-
  Modeling direct variation, inverse variation, and joint variation as
  power-function relationships, finding a constant of variation from given
  values, and solving real-world variation problems — adapted from OpenStax
  Precalculus 2e, Section 3.9.
source_section: "3.9"
weight: 9
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve direct variation problems
- Solve inverse variation problems
- Solve problems involving joint variation
{{< /callout >}}

A pre-owned car dealer has just offered their best candidate, Nicole, a
position in sales. The position offers 16% commission on her sales. Her
earnings depend on the amount of her sales. For instance, if she sells a
vehicle for \$4,600, she will earn \$736. As she considers the offer, she
takes into account the typical price of the dealer's cars, the overall
market, and how many she can reasonably expect to sell. In this section, we
will look at relationships, such as this one, between earnings, sales, and
commission rate.

## Solving direct variation problems

In the example above, Nicole's earnings can be found by multiplying her
sales by her commission. The formula $e=0.16s$ tells us her earnings, $e$,
come from the product of 0.16, her commission, and the sale price of the
vehicle. If we create a table, we observe that as the sales price increases,
the earnings increase as well, which should be intuitive. See the table
below.

| $s$, sales prices | $e=0.16s$ | Interpretation |
| :--- | :--- | :--- |
| \$4,600 | $e=0.16(4{,}600)=736$ | A sale of a \$4,600 vehicle results in \$736 earnings. |
| \$9,200 | $e=0.16(9{,}200)=1{,}472$ | A sale of a \$9,200 vehicle results in \$1,472 earnings. |
| \$18,400 | $e=0.16(18{,}400)=2{,}944$ | A sale of a \$18,400 vehicle results in \$2,944 earnings. |

Notice that earnings are a multiple of sales. As sales increase, earnings
increase in a predictable way. Double the sales of the vehicle from \$4,600
to \$9,200, and we double the earnings from \$736 to \$1,472. As the input
increases, the output increases as a multiple of the input. A relationship
in which one quantity is a constant multiplied by another quantity is called
**direct variation**. Each variable in this type of relationship **varies
directly** with the other.

The figure below represents the data for Nicole's potential earnings. We say
that earnings vary directly with the sales price of the car. The formula
$y=kx^{n}$ is used for direct variation. The value $k$ is a nonzero constant
greater than zero and is called the **constant of variation**. In this case,
$k=0.16$ and $n=1$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of e equals 0.16 s, a ray starting at the origin and rising to the right through the marked points (4,600, 736), (9,200, 1,472), and (18,400, 2,944), with an arrowhead near the top right. The horizontal axis is s, Sales Price in Dollars, from 0 to 30,000, and the vertical axis is e, Earnings in dollars, from 0 to 5,000.","xMin":0,"xMax":30000,"yMin":0,"yMax":5000,"xUnit":0.0086,"yUnit":0.045,"grid":false,"xTickStep":6000,"yTickStep":1000,"tickLabels":true,"xLabel":"s","yLabel":"e","polynomials":[{"coeffs":[0,0.16],"from":0,"arrows":"end"}],"points":[{"at":[4600,736],"label":"(4,600, 736)"},{"at":[9200,1472],"label":"(9,200, 1,472)"},{"at":[18400,2944],"label":"(18,400, 2,944)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Direct variation.** If $x$ and $y$ are related by an equation of the
  form

  $$y=kx^{n}$$

  then we say that the relationship is direct variation and $y$ varies
  directly with the $n$th power of $x$. In direct variation relationships,
  there is a nonzero constant ratio $k=\tfrac{y}{x^{n}}$, where $k$ is called
  the constant of variation, which helps to define the relationship between
  the variables.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a description of a direct variation problem, solve for
  an unknown.

  1. Identify the input, $x$, and the output, $y$.
  2. Determine the constant of variation. You may need to divide $y$ by the
     specified power of $x$ to determine the constant of variation.
  3. Use the constant of variation to write an equation for the
     relationship.
  4. Substitute known values into the equation to find the unknown.
{{< /callout >}}

**Example.** The quantity $y$ varies directly with the cube of $x$. If
$y=25$ when $x=2$, find $y$ when $x$ is 6.

**Solution.** The general formula for direct variation with a cube is
$y=kx^{3}$. The constant can be found by dividing $y$ by the cube of $x$.

$$
\begin{array}{lrcl}
& k &=& \tfrac{y}{x^{3}} \\[4pt]
& &=& \tfrac{25}{2^{3}} \\[4pt]
& &=& \tfrac{25}{8}
\end{array}
$$

Now use the constant to write an equation that represents this relationship.

$$y=\tfrac{25}{8}x^{3}$$

Substitute $x=6$ and solve for $y$.

$$
\begin{array}{lrcl}
& y &=& \tfrac{25}{8}(6)^{3} \\[4pt]
& &=& 675
\end{array}
$$

**Analysis.** The graph of this equation is a simple cubic, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals twenty-five eighths x cubed, a curve starting at the origin and rising steeply to the right through the marked points (2, 25) and (6, 675), with an arrowhead near the top. The horizontal axis is x from 0 to 10, and the vertical axis is y from 0 to 800.","xMin":0,"xMax":10,"yMin":0,"yMax":800,"xUnit":24,"yUnit":0.3,"grid":false,"xTickStep":2,"yTickStep":200,"tickLabels":true,"xLabel":"x","yLabel":"y","polynomials":[{"coeffs":[0,0,0,3.125],"from":0,"arrows":"end"}],"points":[{"at":[2,25],"label":"(2, 25)"},{"at":[6,675],"label":"(6, 675)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Do the graphs of all direct variation equations look like the
  one above?*

  No. Direct variation equations are power functions—they may be linear,
  quadratic, cubic, quartic, radical, etc. But all of the graphs pass
  through $(0,0)$.
{{< /callout >}}

{{< fillin
  question="The quantity $y$ varies directly with the square of $x$. If $y=24$ when $x=3$, find $y$ when $x$ is 4."
  answer="\frac{128}{3}"
  answerDisplay="$y=\tfrac{128}{3}$"
  hint="Divide $y$ by the square of $x$ to find the constant $k$, then substitute $x=4$ into $y=kx^2$."
>}}

## Solving inverse variation problems

Water temperature in an ocean varies inversely to the water's depth. Between
the depths of 250 feet and 500 feet, the formula $T=\tfrac{14{,}000}{d}$
gives us the temperature in degrees Fahrenheit at a depth in feet below
Earth's surface. Consider the Atlantic Ocean, which covers 22% of Earth's
surface. At a certain location, at the depth of 500 feet, the temperature
may be 28°F.

If we create the table below, we observe that, as the depth increases, the
water temperature decreases.

| $d$, depth | $T=\tfrac{14{,}000}{d}$ | Interpretation |
| :--- | :--- | :--- |
| 500 ft | $\tfrac{14{,}000}{500}=28$ | At a depth of 500 ft, the water temperature is 28°F. |
| 350 ft | $\tfrac{14{,}000}{350}=40$ | At a depth of 350 ft, the water temperature is 40°F. |
| 250 ft | $\tfrac{14{,}000}{250}=56$ | At a depth of 250 ft, the water temperature is 56°F. |

We notice in the relationship between these variables that, as one quantity
increases, the other decreases. The two quantities are said to be
**inversely proportional** and each term **varies inversely** with the
other. Inversely proportional relationships are also called **inverse
variations**.

For our example, the figure below depicts the inverse variation. We say the
water temperature varies inversely with the depth of the water because, as
the depth increases, the temperature decreases. The formula $y=\tfrac{k}{x}$
for inverse variation in this case uses $k=14{,}000$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of T equals 14,000 over d, a curve falling from upper left to lower right through the marked points (250, 56), (350, 40), and (500, 28), with arrowheads at both ends. The horizontal axis is d, Depth in feet, from 0 to 600, and the vertical axis is T, Temperature in degrees Fahrenheit, from 0 to 60.","xMin":0,"xMax":600,"yMin":0,"yMax":60,"xUnit":0.4,"yUnit":4,"grid":false,"xTickStep":200,"yTickStep":10,"tickLabels":true,"xLabel":"d","yLabel":"T","curves":[{"kind":"reciprocal","a":14000}],"points":[{"at":[250,56],"label":"(250, 56)"},{"at":[350,40],"label":"(350, 40)"},{"at":[500,28],"label":"(500, 28)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Inverse variation.** If $x$ and $y$ are related by an equation of the
  form

  $$y=\tfrac{k}{x^{n}}$$

  where $k$ is a nonzero constant, then we say that $y$ varies inversely
  with the $n$th power of $x$. In inversely proportional relationships, or
  inverse variations, there is a constant multiple $k=x^{n}y$.
{{< /callout >}}

**Example.** A tourist plans to drive 100 miles. Find a formula for the time
the trip will take as a function of the speed the tourist drives.

**Solution.** Recall that multiplying speed by time gives distance. If we
let $t$ represent the drive time in hours, and $v$ represent the velocity
(speed or rate) at which the tourist drives, then $vt=\text{distance}$.
Because the distance is fixed at 100 miles, $vt=100$. Solving this
relationship for the time gives us our function.

$$
\begin{array}{lrcl}
& t(v) &=& \tfrac{100}{v} \\[4pt]
& &=& 100v^{-1}
\end{array}
$$

We can see that the constant of variation is 100 and, although we can write
the relationship using the negative exponent, it is more common to see it
written as a fraction.

{{< callout type="info" >}}
  **How to:** given a description of an indirect variation problem, solve
  for an unknown.

  1. Identify the input, $x$, and the output, $y$.
  2. Determine the constant of variation. You may need to multiply $y$ by
     the specified power of $x$ to determine the constant of variation.
  3. Use the constant of variation to write an equation for the
     relationship.
  4. Substitute known values into the equation to find the unknown.
{{< /callout >}}

**Example.** A quantity $y$ varies inversely with the cube of $x$. If
$y=25$ when $x=2$, find $y$ when $x$ is 6.

**Solution.** The general formula for inverse variation with a cube is
$y=\tfrac{k}{x^{3}}$. The constant can be found by multiplying $y$ by the
cube of $x$.

$$
\begin{array}{lrcl}
& k &=& x^{3}y \\[4pt]
& &=& 2^{3}\cdot25 \\[4pt]
& &=& 200
\end{array}
$$

Now we use the constant to write an equation that represents this
relationship.

$$
\begin{array}{lrcl}
& y &=& \tfrac{k}{x^{3}},k=200 \\[4pt]
& y &=& \tfrac{200}{x^{3}}
\end{array}
$$

Substitute $x=6$ and solve for $y$.

$$
\begin{array}{lrcl}
& y &=& \tfrac{200}{6^{3}} \\[4pt]
& &=& \tfrac{25}{27}
\end{array}
$$

**Analysis.** The graph of this equation is a rational function, as shown
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals 25 over x cubed, a curve falling steeply from the upper left through the marked points (2, 25) and (6, 25 over 27), leveling off near the horizontal axis, with arrowheads at both ends. The horizontal axis is x from 0 to 10, and the vertical axis is y from 0 to 30.","xMin":0,"xMax":10,"yMin":0,"yMax":30,"xUnit":24,"yUnit":8,"grid":false,"xTickStep":2,"yTickStep":5,"tickLabels":true,"xLabel":"x","yLabel":"y","rationals":[{"num":[25],"den":[0,0,0,1]}],"points":[{"at":[2,25],"label":"(2, 25)"},{"at":[6,0.9259259259259259],"label":"(6, 25/27)"}]}
{{< /apfigure >}}

{{< fillin
  question="A quantity $y$ varies inversely with the square of $x$. If $y=8$ when $x=3$, find $y$ when $x$ is 4."
  answer="\frac{9}{2}"
  answerDisplay="$y=\tfrac{9}{2}$"
  hint="Multiply $y$ by the square of $x$ to find the constant $k$, then substitute $x=4$ into $y=\tfrac{k}{x^2}$."
>}}

## Solving problems involving joint variation

Many situations are more complicated than a basic direct variation or
inverse variation model. One variable often depends on multiple other
variables. When a variable is dependent on the product or quotient of two or
more variables, this is called **joint variation**. For example, the cost of
busing students for each school trip varies with the number of students
attending and the distance from the school. The variable $c$, cost, varies
jointly with the number of students, $n$, and the distance, $d$.

{{< callout type="info" >}}
  **Joint variation.** Joint variation occurs when a variable varies
  directly or inversely with multiple variables.

  For instance, if $x$ varies directly with both $y$ and $z$, we have
  $x=kyz$. If $x$ varies directly with $y$ and inversely with $z$, we have
  $x=\tfrac{ky}{z}$. Notice that we only use one constant in a joint
  variation equation.
{{< /callout >}}

**Example.** A quantity $x$ varies directly with the square of $y$ and
inversely with the cube root of $z$. If $x=6$ when $y=2$ and $z=8$, find $x$
when $y=1$ and $z=27$.

**Solution.** Begin by writing an equation to show the relationship between
the variables.

$$x=\tfrac{ky^{2}}{\sqrt[3]{z}}$$

Substitute $x=6$, $y=2$, and $z=8$ to find the value of the constant $k$.

$$
\begin{array}{lrcl}
& 6 &=& \tfrac{k\cdot2^{2}}{\sqrt[3]{8}} \\[4pt]
& 6 &=& \tfrac{4k}{2} \\[4pt]
& 3 &=& k
\end{array}
$$

Now we can substitute the value of the constant into the equation for the
relationship.

$$x=\tfrac{3y^{2}}{\sqrt[3]{z}}$$

To find $x$ when $y=1$ and $z=27$, we will substitute values for $y$ and $z$
into our equation.

$$
\begin{array}{lrcl}
& x &=& \tfrac{3(1)^{2}}{\sqrt[3]{27}} \\[4pt]
& &=& 1
\end{array}
$$

{{< fillin
  question="$x$ varies directly with the square of $y$ and inversely with $z$. If $x=40$ when $y=4$ and $z=2$, find $x$ when $y=10$ and $z=25$."
  answer="20"
  answerDisplay="$x=20$"
  hint="Substitute the first triple of values into $x=\tfrac{ky^2}{z}$ to find $k$, then use that same $k$ with the second triple."
>}}

## Key equations

| Direct variation | $y=kx^{n}$, $k$ is a nonzero constant |
| :--- | :--- |
| Inverse variation | $y=\tfrac{k}{x^{n}}$, $k$ is a nonzero constant |

## Key concepts

- A relationship where one quantity is a constant multiplied by another
  quantity is called direct variation.
- Two variables that are directly proportional to one another will have a
  constant ratio.
- A relationship where one quantity is a constant divided by another
  quantity is called inverse variation.
- Two variables that are inversely proportional to one another will have a
  constant multiple.
- In many problems, a variable varies directly or inversely with multiple
  variables. We call this type of relationship joint variation.

## Key terms

**constant of variation** — the non-zero value $k$ that helps define the
relationship between variables in direct or inverse variation. **direct
variation** — the relationship between two variables that are a constant
multiple of each other; as one quantity increases, so does the other.
**inverse variation** — the relationship between two variables in which the
product of the variables is a constant. **inversely proportional** — a
relationship where one quantity is a constant divided by the other quantity;
as one quantity increases, the other decreases. **joint variation** — a
relationship where a variable varies directly or inversely with multiple
variables. **varies directly** — a relationship where one quantity is a
constant multiplied by the other quantity. **varies inversely** — a
relationship where one quantity is a constant divided by the other quantity.

## Practice

### Solve direct variation problems

{{< fillin
  question="$y$ varies directly as the square of $x$, and when $x=4$, $y=80$. Write the equation that relates $x$ and $y$."
  answer="y=5x^2"
  answerDisplay="$y=5x^{2}$"
  hint="Divide $y$ by the square of $x$ to find the constant of variation $k$, then write $y=kx^2$."
>}}

{{< fillin
  question="$y$ varies directly as the square of $x$. When $x=2$, $y=16$. Find $y$ when $x=8$."
  answer="256"
  hint="Find the constant $k$ from the first pair using $y=kx^2$, then substitute $x=8$."
>}}

{{< fillin
  question="The distance $s$ that an object falls varies directly with the square of the time, $t$, of the fall. If an object falls 16 feet in one second, how long for it to fall 144 feet?"
  answer="3"
  answerDisplay="3 seconds"
  hint="Find $k$ from the given fall using $s=kt^2$, then solve for $t$ when $s=144$."
>}}

### Solve inverse variation problems

{{< fillin
  question="$y$ varies inversely as the square of $x$, and when $x=3$, $y=2$. Write the equation that relates $x$ and $y$."
  answer="y=\frac{18}{x^2}"
  answerDisplay="$y=\tfrac{18}{x^{2}}$"
  hint="Multiply $y$ by the square of $x$ to find the constant of variation $k$, then write $y=\tfrac{k}{x^2}$."
>}}

{{< fillin
  question="$y$ varies inversely with the cube root of $x$. When $x=27$, $y=5$. Find $y$ when $x=125$."
  answer="3"
  hint="Find $k$ from the first pair using $y=\tfrac{k}{\sqrt[3]{x}}$, then substitute $x=125$."
>}}

{{< fillin
  question="The rate of vibration of a string under constant tension varies inversely with the length of the string. If a string is 24 inches long and vibrates 128 times per second, what is the length of a string that vibrates 64 times per second?"
  answer="48"
  answerDisplay="48 inches"
  hint="Find $k$ from (rate)(length)$=k$ using the 24-inch string, then solve for the length when the rate is 64."
>}}

### Solve problems involving joint variation

{{< fillin
  question="$y$ varies jointly as $x$, $z$, and $w$. When $x=1$, $z=2$, and $w=5$, $y=100$. Write the equation that relates the variables."
  answer="y=10xzw"
  hint="Divide $y$ by the product $xzw$ to find the constant of variation $k$."
>}}

{{< fillin
  question="$y$ varies jointly as $x$ and $z$ and inversely as $w$. When $x=3$, $z=5$, and $w=6$, $y=10$. Write the equation that relates the variables."
  answer="y=\frac{4xz}{w}"
  answerDisplay="$y=\tfrac{4xz}{w}$"
  hint="Solve $y=\tfrac{kxz}{w}$ for $k$ using the given values, then write the equation with that $k$."
>}}

{{< fillin
  question="The horsepower (hp) that a shaft can safely transmit varies jointly with its speed (in revolutions per minute) and the cube of the diameter. A shaft 3 inches in diameter can transmit 45 hp at 100 rpm. What must the diameter be, to the nearest hundredth of an inch, in order to transmit 60 hp at 150 rpm?"
  answer="2.88"
  answerDisplay="≈2.88 inches"
  hint="Find $k$ from $\text{hp}=k\cdot\text{rpm}\cdot d^3$ using the 3-inch shaft, then solve for $d$ with the second shaft's numbers."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.9: Modeling Using Variation](https://openstax.org/books/precalculus-2e/pages/3-9-modeling-using-variation) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated all four graphs as accessible inline SVGs generated from their exact equations — the direct-variation earnings ray $e=0.16s$ with its three labelled points, the cubic $y=\tfrac{25}{8}x^{3}$ with its two labelled points, the inverse-variation temperature curve $T=\tfrac{14{,}000}{d}$ with its three labelled points, and the rational curve $y=\tfrac{25}{x^{3}}$ with its two labelled points; presented the two data tables (sales price vs. earnings, depth vs. temperature) as Markdown tables; reworded the two in-text figure and table cross-references ("as shown in Figure N", "See Table N") as "shown below" and "the table below", since this page does not carry the source's figure and table numbering; omitted the italic emphasis on the printed Q&A answers, matching this book's house style, and reworded the Q&A's "look like Example 1" reference to "look like the one above" for the same reason; omitted the "Access these online resources" media links; converted the three "Try It" checks into interactive fill-ins with instant feedback; and adapted nine selected end-of-section exercises — three direct-variation items (one equation-writing, one numeric, one real-world falling-object problem), three inverse-variation items (one equation-writing, one numeric, one real-world string-vibration problem), and three joint-variation items (two equation-writing, one real-world shaft-horsepower problem rounded to the nearest hundredth of an inch, matching the source's own rounding) — into interactive components in a closing Practice block, one group per objective.</small>
