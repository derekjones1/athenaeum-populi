---
title: Exponential Functions
description: >-
  Evaluating exponential functions, finding the equation of an exponential
  function from two points or a graph, applying the compound-interest
  formula, and evaluating exponential functions with base $e$ — adapted from
  OpenStax Precalculus 2e, Section 4.1.
source_section: "4.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Evaluate exponential functions
- Find the equation of an exponential function
- Use compound interest formulas
- Evaluate exponential functions with base $e$
{{< /callout >}}

India is the second most populous country in the world with a population of
about $1.39$ billion people in 2021. The population is growing at a rate of
about $1.2\%$ each year. If this rate continues, the population of India will
exceed China's population by the year $2027$. When populations grow rapidly,
we often say that the growth is "exponential," meaning that something is
growing very rapidly. To a mathematician, however, the term *exponential
growth* has a very specific meaning. In this section, we will take a look at
*exponential functions*, which model this kind of rapid growth.

## Identifying exponential functions

When exploring linear growth, we observed a constant rate of change—a
constant number by which the output increased for each unit increase in
input. For example, in the equation $f(x)=3x+4$, the slope tells us the
output increases by 3 each time the input increases by 1. The scenario in the
India population example is different because we have a *percent* change per
unit time (rather than a constant change) in the number of people.

### Defining an exponential function

A study found that the percent of the population who are vegans in the United
States doubled from 2009 to 2011. In 2011, $2.5\%$ of the population was
vegan, adhering to a diet that does not include any animal products—no meat,
poultry, fish, dairy, or eggs. If this rate continues, vegans will make up
$10\%$ of the U.S. population in 2015, $40\%$ in 2019, and $80\%$ in 2021.

What exactly does it mean to *grow exponentially*? What does the word
*double* have in common with *percent increase*? People toss these words
around errantly. Are these words used correctly? The words certainly appear
frequently in the media.

- *Percent change* refers to a *change* based on a *percent* of the original
  amount.
- *Exponential growth* refers to an *increase* based on a constant
  multiplicative rate of change over equal increments of time, that is, a
  *percent* increase of the original amount over time.
- **Exponential decay** refers to a *decrease* based on a constant
  multiplicative rate of change over equal increments of time, that is, a
  *percent* decrease of the original amount over time.

For us to gain a clear understanding of exponential growth, let us contrast
exponential growth with linear growth. We will construct two functions. The
first function is exponential. We will start with an input of 0, and
increase each input by 1. We will double the corresponding consecutive
outputs. The second function is linear. We will start with an input of 0,
and increase each input by 1. We will add 2 to the corresponding consecutive
outputs. See the table below.

| $x$ | $f(x)=2^x$ | $g(x)=2x$ |
| :--- | ---: | ---: |
| $0$ | $1$ | $0$ |
| $1$ | $2$ | $2$ |
| $2$ | $4$ | $4$ |
| $3$ | $8$ | $6$ |
| $4$ | $16$ | $8$ |
| $5$ | $32$ | $10$ |
| $6$ | $64$ | $12$ |

From the table we can infer that for these two functions, exponential growth
dwarfs linear growth.

- *Exponential growth* refers to the original value from the range
  increasing by the *same percentage* over equal increments found in the
  domain.
- *Linear growth* refers to the original value from the range increasing by
  the *same amount* over equal increments found in the domain.

Apparently, the difference between "the same percentage" and "the same
amount" is quite significant. For exponential growth, over equal increments,
the constant multiplicative rate of change resulted in doubling the output
whenever the input increased by one. For linear growth, the constant
additive rate of change over equal increments resulted in adding 2 to the
output whenever the input was increased by one.

The general form of the exponential function is $f(x)=ab^x$, where $a$ is
any nonzero number, $b$ is a positive real number not equal to 1.

- If $b>1$, the function grows at a rate proportional to its size.
- If $0<b<1$, the function decays at a rate proportional to its size.

Let's look at the function $f(x)=2^x$ from our example. We will create a
table to determine the corresponding outputs over an interval in the domain
from $-3$ to $3$.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)=2^x$ | $2^{-3}=\tfrac{1}{8}$ | $2^{-2}=\tfrac{1}{4}$ | $2^{-1}=\tfrac{1}{2}$ | $2^0=1$ | $2^1=2$ | $2^2=4$ | $2^3=8$ |

Let us examine the graph of $f$ by plotting the ordered pairs we observe on
the table, and then make a few observations.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 2 to the x, an increasing curve through the plotted points (-3, 1/8), (-2, 1/4), (-1, 1/2), (0, 1), (1, 2), (2, 4), and (3, 8), with a dashed horizontal asymptote at y = 0.","xMin":-6,"xMax":5,"yMin":-3,"yMax":9,"unit":28,"tickLabels":true,"curves":[{"kind":"exp","a":1,"b":2}],"lines":[{"y":0,"dashed":true,"arrows":false,"label":"y = 0"}],"points":[{"at":[-3,0.125],"label":"(-3, 1/8)"},{"at":[-2,0.25],"label":"(-2, 1/4)"},{"at":[-1,0.5],"label":"(-1, 1/2)","labelNudge":[0,-6]},{"at":[0,1],"label":"(0, 1)"},{"at":[1,2],"label":"(1, 2)"},{"at":[2,4],"label":"(2, 4)"},{"at":[3,8],"label":"(3, 8)"}],"texts":[{"at":[3.3,8.7],"text":"f(x) = 2ˣ","anchor":"start"}]}
{{< /apfigure >}}

Let's define the behavior of the graph of the exponential function $f(x)=2^x$
and highlight some its key characteristics.

- the domain is $(-\infty,\infty)$,
- the range is $(0,\infty)$,
- as $x\to\infty$, $f(x)\to\infty$,
- as $x\to-\infty$, $f(x)\to0$,
- $f(x)$ is always increasing,
- the graph of $f(x)$ will never touch the $x$-axis because base two raised
  to any exponent never has the result of zero.
- $y=0$ is the horizontal asymptote.
- the $y$-intercept is 1.

{{< callout type="info" >}}
  **Exponential function.** For any real number $x$, an exponential function
  is a function with the form

  $$f(x)=ab^x$$

  where

  - $a$ is a non-zero real number called the initial value and
  - $b$ is any positive real number such that $b\ne1$.
  - The domain of $f$ is all real numbers.
  - The range of $f$ is all positive real numbers if $a>0$.
  - The range of $f$ is all negative real numbers if $a<0$.
  - The $y$-intercept is $(0,a)$, and the horizontal asymptote is $y=0$.
{{< /callout >}}

**Example.** Which of the following equations are *not* exponential
functions?

- $f(x)=4^{3(x-2)}$
- $g(x)=x^3$
- $h(x)=\left(\tfrac{1}{3}\right)^x$
- $j(x)=(-2)^x$

**Solution.** By definition, an exponential function has a constant as a base
and an independent variable as an exponent. Thus, $g(x)=x^3$ does not
represent an exponential function because the base is an independent
variable. In fact, $g(x)=x^3$ is a power function.

Recall that the base $b$ of an exponential function is always a positive
constant, and $b\ne1$. Thus, $j(x)=(-2)^x$ does not represent an exponential
function because the base, $-2$, is less than $0$.

{{< multiplechoice
  question="Which of these functions represents an exponential function: $f(x)=2x^2-3x+1$ or $g(x)=0.875^x$?"
  answer="g(x)=0.875^x"
  hint="An exponential function has a constant base and a variable exponent; $f$ has the variable in the base instead."
>}}
f(x)=2x^2-3x+1
g(x)=0.875^x
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which of these functions represents an exponential function: $h(x)=1.75x+2$ or $j(x)=1095.6^{-2x}$?"
  answer="j(x)=1095.6^{-2x}"
  hint="An exponential function has a positive constant base other than $1$ raised to a variable exponent; $h$ has the variable in the base of a linear term instead."
>}}
h(x)=1.75x+2
j(x)=1095.6^{-2x}
{{< /multiplechoice >}}

## Evaluating exponential functions

Recall that the base of an exponential function must be a positive real
number other than $1$. Why do we limit the base $b$ to positive values? To
ensure that the outputs will be real numbers. Observe what happens if the
base is not positive:

- Let $b=-9$ and $x=\tfrac{1}{2}$. Then
  $f(x)=f\!\left(\tfrac{1}{2}\right)=(-9)^{\tfrac{1}{2}}=\sqrt{-9}$, which is
  not a real number.

Why do we limit the base to positive values other than $1$? Because base $1$
results in the constant function. Observe what happens if the base is $1$:

- Let $b=1$. Then $f(x)=1^x=1$ for any value of $x$.

To evaluate an exponential function with the form $f(x)=b^x$, we simply
substitute $x$ with the given value, and calculate the resulting power. For
example:

Let $f(x)=2^x$. What is $f(3)$?

$$
\begin{array}{lrcl}
& f(x) &=& 2^x \\[4pt]
& f(3) &=& 2^3 \\[4pt]
& &=& 8
\end{array}
$$

To evaluate an exponential function with a form other than the basic form, it
is important to follow the order of operations. For example:

Let $f(x)=30(2)^x$. What is $f(3)$?

$$
\begin{array}{lrcl}
& f(x) &=& 30(2)^x \\[4pt]
& f(3) &=& 30(2)^3 \\[4pt]
& &=& 30(8) \\[4pt]
& &=& 240
\end{array}
$$

Note that if the order of operations were not followed, the result would be
incorrect:

$$f(3)=30(2)^3\ne60^3=216{,}000$$

**Example.** Let $f(x)=5(3)^{x+1}$. Evaluate $f(2)$ without using a
calculator.

**Solution.** Follow the order of operations. Be sure to pay attention to the
parentheses.

$$
\begin{array}{lrcl}
& f(x) &=& 5(3)^{x+1} \\[4pt]
& f(2) &=& 5(3)^{2+1} \\[4pt]
& &=& 5(3)^3 \\[4pt]
& &=& 5(27) \\[4pt]
& &=& 135
\end{array}
$$

{{< fillin
  question="Let $f(x)=8(1.2)^{x-5}$. Evaluate $f(3)$ using a calculator. Round to four decimal places."
  answer="5.5556"
  answerForm="decimal"
  answerDisplay="$5.5556$"
  hint="Substitute $x=3$, so $f(3)=8(1.2)^{-2}$."
>}}

## Defining exponential growth

Because the output of exponential functions increases very rapidly, the term
"exponential growth" is often used in everyday language to describe anything
that grows or increases rapidly. However, exponential growth can be defined
more precisely in a mathematical sense. If the growth rate is proportional to
the amount present, the function models exponential growth.

{{< callout type="info" >}}
  **Exponential growth.** A function that models exponential growth grows by
  a rate proportional to the amount present. For any real number $x$ and any
  positive real numbers $a$ and $b$ such that $b\ne1$, an exponential growth
  function has the form

  $$f(x)=ab^x$$

  where

  - $a$ is the initial or starting value of the function.
  - $b$ is the growth factor or growth multiplier per unit $x$.
{{< /callout >}}

In more general terms, we have an *exponential function*, in which a
constant base is raised to a variable exponent. To differentiate between
linear and exponential functions, let's consider two companies, A and B.
Company A has 100 stores and expands by opening 50 new stores a year, so its
growth can be represented by the function $A(x)=100+50x$. Company B has 100
stores and expands by increasing the number of stores by $50\%$ each year, so
its growth can be represented by the function $B(x)=100(1+0.5)^x$.

A few years of growth for these companies are illustrated in the table
below.

| Year, $x$ | Stores, Company A | Stores, Company B |
| :--- | :--- | :--- |
| $0$ | $100+50(0)=100$ | $100(1+0.5)^0=100$ |
| $1$ | $100+50(1)=150$ | $100(1+0.5)^1=150$ |
| $2$ | $100+50(2)=200$ | $100(1+0.5)^2=225$ |
| $3$ | $100+50(3)=250$ | $100(1+0.5)^3=337.5$ |
| $x$ | $A(x)=100+50x$ | $B(x)=100(1+0.5)^x$ |

The graphs comparing the number of stores for each company over a five-year
period are shown below. We can see that, with exponential growth, the number
of stores increases much more rapidly than with linear growth.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line for Company A, A of x equals 100 plus 50x, and a steeper curve for Company B, B of x equals 100 times 1.5 to the x, both starting at (0, 100) and increasing over 5 years; the exponential curve overtakes the line after year 1.","xMin":0,"xMax":5,"yMin":0,"yMax":500,"xUnit":60,"yUnit":0.6,"margin":40,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":25,"xLabel":"Years","yLabel":"Number of Stores","lines":[{"slope":50,"intercept":100,"label":"A(x) = 100 + 50x"}],"curves":[{"kind":"exp","a":100,"b":1.5}],"texts":[{"at":[0.6,470],"text":"B(x) = 100(1.5)ˣ"}]}
{{< /apfigure >}}

Notice that the domain for both functions is $[0,\infty)$, and the range for
both functions is $[100,\infty)$. After year 1, Company B always has more
stores than Company A.

Now we will turn our attention to the function representing the number of
stores for Company B, $B(x)=100(1+0.5)^x$. In this exponential function, 100
represents the initial number of stores, 0.50 represents the growth rate, and
$1+0.5=1.5$ represents the growth factor. Generalizing further, we can write
this function as $B(x)=100(1.5)^x$, where 100 is the initial value, 1.5 is
called the *base*, and $x$ is called the *exponent*.

**Example.** At the beginning of this section, we learned that the population
of India was about $1.25$ billion in the year 2013, with an annual growth
rate of about $1.2\%$. This situation is represented by the growth function
$P(t)=1.25(1.012)^t$, where $t$ is the number of years since 2013. To the
nearest thousandth, what will the population of India be in 2031?

**Solution.** To estimate the population in 2031, we evaluate the model for
$t=18$, because 2031 is 18 years after 2013. Rounding to the nearest
thousandth,

$$P(18)=1.25(1.012)^{18}\approx1.549$$

There will be about 1.549 billion people in India in the year 2031.

{{< fillin
  question="The population of China was about $1.39$ billion in the year 2013, with an annual growth rate of about $0.6\%$. This situation is represented by the growth function $P(t)=1.39(1.006)^t$, where $t$ is the number of years since 2013. To the nearest thousandth, what will the population of China be for the year 2031?"
  answer="1.548"
  answerForm="decimal"
  answerDisplay="$1.548$ billion"
  hint="Evaluate the model at $t=18$, since 2031 is 18 years after 2013."
>}}

{{< fillin
  question="By about how many billion people will India's population (about $1.549$ billion) exceed China's population (about $1.548$ billion) in 2031, to the nearest thousandth?"
  answer="0.001"
  answerForm="decimal"
  answerDisplay="$0.001$ billion, or about 1 million people"
  hint="Subtract China's projected 2031 population from India's."
>}}

## Finding equations of exponential functions

In the previous examples, we were given an exponential function, which we
then evaluated for a given input. Sometimes we are given information about
an exponential function without knowing the function explicitly. We must use
the information to first write the form of the function, then determine the
constants $a$ and $b$, and evaluate the function.

{{< callout type="info" >}}
  **How to:** given two data points, write an exponential model.

  1. If one of the data points has the form $(0,a)$, then $a$ is the initial
     value. Using $a$, substitute the second point into the equation
     $f(x)=a(b)^x$, and solve for $b$.
  2. If neither of the data points have the form $(0,a)$, substitute both
     points into two equations with the form $f(x)=a(b)^x$. Solve the
     resulting system of two equations in two unknowns to find $a$ and $b$.
  3. Using the $a$ and $b$ found in the steps above, write the exponential
     function in the form $f(x)=a(b)^x$.
{{< /callout >}}

**Example.** In 2006, 80 deer were introduced into a wildlife refuge. By
2012, the population had grown to 180 deer. The population was growing
exponentially. Write an exponential function $N(t)$ representing the
population $(N)$ of deer over time $t$.

**Solution.** We let our independent variable $t$ be the number of years
after 2006. Thus, the information given in the problem can be written as
input-output pairs: $(0,80)$ and $(6,180)$. Notice that by choosing our input
variable to be measured as years after 2006, we have given ourselves the
initial value for the function, $a=80$. We can now substitute the second
point into the equation $N(t)=80b^t$ to find $b$:

$$
\begin{array}{lrcl}
& N(t) &=& 80b^t \\[4pt]
\text{Substitute using point } (6,180). & 180 &=& 80b^6 \\[4pt]
\text{Divide and write in lowest terms.} & \tfrac{9}{4} &=& b^6 \\[4pt]
\text{Isolate } b \text{ using properties of exponents.} & b &=& \left(\tfrac{9}{4}\right)^{\tfrac{1}{6}} \\[4pt]
\text{Round to 4 decimal places.} & b &\approx& 1.1447
\end{array}
$$

**Note.** Unless otherwise stated, do not round any intermediate
calculations. Then round the final answer to four places for the remainder
of this section.

The exponential model for the population of deer is $N(t)=80(1.1447)^t$.
(Note that this exponential function models short-term growth. As the inputs
gets large, the output will get increasingly larger, so much so that the
model may not be useful in the long term.)

We can graph our model to observe the population growth of deer in the
refuge over time. Notice that the graph below passes through the initial
points given in the problem, $(0,80)$ and $(6,180)$. We can also see that the
domain for the function is $[0,\infty)$, and the range for the function is
$[80,\infty)$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of N of t equals 80 times 1.1447 to the t, an increasing curve through the plotted points (0, 80) and (6, 180), the deer population over time, t years after 2006.","xMin":0,"xMax":10,"yMin":0,"yMax":320,"xUnit":35,"yUnit":0.9,"margin":40,"grid":false,"tickLabels":true,"xTickStep":1,"yTickStep":20,"xLabel":"Years","yLabel":"Deer Population, N(t)","curves":[{"kind":"exp","a":80,"b":1.1447}],"points":[{"at":[0,80],"label":"(0, 80)"},{"at":[6,180],"label":"(6, 180)"}]}
{{< /apfigure >}}

{{< fillin
  question="A wolf population is growing exponentially. In 2011, 129 wolves were counted. By 2013, the population had reached 236 wolves. What two points, in the form $(t,\text{population})$ with $t$ measured in years after 2011, can be used to derive an exponential equation modeling this situation? Enter both, in order of increasing $t$, separated by a comma."
  answer="(0,129),(2,236)"
  answerDisplay="$(0,129)$ and $(2,236)$"
  hint="Let $t$ be years after 2011; the first count gives the initial value, and the second count comes two years later."
>}}

{{< fillin
  question="Using those two points, write the equation representing the wolf population $w$ over time $t$, with $b$ rounded to four decimal places."
  answer="129(1.3526)^t"
  answerDisplay="$w(t)=129(1.3526)^t$"
  hint="With $a=129$ from the initial point, substitute the second point into $w(t)=129b^t$ and solve for $b$."
>}}

**Example.** Find an exponential function that passes through the points
$(-2,6)$ and $(2,1)$.

**Solution.** Because we don't have the initial value, we substitute both
points into an equation of the form $f(x)=ab^x$, and then solve the system
for $a$ and $b$.

- Substituting $(-2,6)$ gives $6=ab^{-2}$
- Substituting $(2,1)$ gives $1=ab^2$

Use the first equation to solve for $a$ in terms of $b$:

$$
\begin{array}{lrcl}
& 6 &=& ab^{-2} \\[4pt]
\text{Divide.} & \tfrac{6}{b^{-2}} &=& a \\[4pt]
\text{Use properties of exponents to rewrite the denominator.} & a &=& 6b^2
\end{array}
$$

Substitute $a$ in the second equation, and solve for $b$:

$$
\begin{array}{lrcl}
& 1 &=& ab^2 \\[4pt]
\text{Substitute } a. & 1 &=& 6b^2b^2=6b^4 \\[4pt]
\text{Use properties of exponents to isolate } b. & b &=& \left(\tfrac{1}{6}\right)^{\tfrac{1}{4}} \\[4pt]
\text{Round 4 decimal places.} & b &\approx& 0.6389
\end{array}
$$

Use the value of $b$ in the first equation to solve for the value of $a$:

$$a=6b^2\approx6(0.6389)^2\approx2.4492$$

Thus, the equation is $f(x)=2.4492(0.6389)^x$.

We can graph our model to check our work. Notice that the graph below passes
through the initial points given in the problem, $(-2,6)$ and $(2,1)$. The
graph is an example of an exponential decay function.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 2.4492 times 0.6389 to the x, a decreasing curve through the plotted points (-2, 6) and (2, 1), modeling exponential decay.","xMin":-3,"xMax":5,"yMin":0,"yMax":10,"unit":30,"tickLabels":true,"yLabel":"f(x)","curves":[{"kind":"exp","a":2.4492,"b":0.6389}],"points":[{"at":[-2,6],"label":"(-2, 6)"},{"at":[2,1],"label":"(2, 1)"}]}
{{< /apfigure >}}

{{< fillin
  question="Given the two points $(1,3)$ and $(2,4.5)$, find the equation of the exponential function that passes through these points."
  answer="2(1.5)^x"
  answerDisplay="$f(x)=2(1.5)^x$"
  hint="Substitute both points into $f(x)=ab^x$ and divide the two equations to eliminate $a$ and solve for $b$ first."
>}}

{{< callout type="info" >}}
  **Q&A.** Do two points always determine a unique exponential function?

  Yes, provided the two points are either both above the $x$-axis or both
  below the $x$-axis and have different $x$-coordinates. But keep in mind
  that we also need to know that the graph is, in fact, an exponential
  function. Not every graph that looks exponential really is exponential. We
  need to know the graph is based on a model that shows the same percent
  growth with each unit increase in $x$, which in many real world cases
  involves time.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the graph of an exponential function, write its
  equation.

  1. First, identify two points on the graph. Choose the $y$-intercept as
     one of the two points whenever possible. Try to choose points that are
     as far apart as possible to reduce round-off error.
  2. If one of the data points is the $y$-intercept $(0,a)$, then $a$ is the
     initial value. Using $a$, substitute the second point into the equation
     $f(x)=a(b)^x$, and solve for $b$.
  3. If neither of the data points have the form $(0,a)$, substitute both
     points into two equations with the form $f(x)=a(b)^x$. Solve the
     resulting system of two equations in two unknowns to find $a$ and $b$.
  4. Write the exponential function, $f(x)=a(b)^x$.
{{< /callout >}}

**Example.** Find an equation for the exponential function graphed below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An increasing exponential curve with y-intercept at (0, 3), passing through (2, 12).","xMin":-3.5,"xMax":3.5,"yMin":-3,"yMax":21,"unit":16,"tickLabels":true,"xTickStep":1,"yTickStep":3,"yLabel":"f(x)","curves":[{"kind":"exp","a":3,"b":2}]}
{{< /apfigure >}}

**Solution.** We can choose the $y$-intercept of the graph, $(0,3)$, as our
first point. This gives us the initial value, $a=3$. Next, choose a point on
the curve some distance away from $(0,3)$ that has integer coordinates. One
such point is $(2,12)$.

$$
\begin{array}{lrcl}
\text{Write the general form of an exponential equation.} & y &=& ab^x \\[4pt]
\text{Substitute the initial value 3 for } a. & y &=& 3b^x \\[4pt]
\text{Substitute in 12 for } y \text{ and 2 for } x. & 12 &=& 3b^2 \\[4pt]
\text{Divide by 3.} & 4 &=& b^2 \\[4pt]
\text{Take the square root.} & b &=& \pm2
\end{array}
$$

Because we restrict ourselves to positive values of $b$, we will use $b=2$.
Substitute $a$ and $b$ into the standard form to yield the equation
$f(x)=3(2)^x$.

{{< fillin
  question="Find an equation for the exponential function graphed below."
  answer="\sqrt{2}(\sqrt{2})^x"
  answerDisplay="$f(x)=\sqrt{2}(\sqrt{2})^x$"
  hint="Use the marked $y$-intercept, $(0,\sqrt{2})$, as the initial value $a$, then substitute another point on the curve to solve for $b$."
>}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"An increasing exponential curve with y-intercept at (0, the square root of 2), approximately (0, 1.41).","xMin":-5,"xMax":5,"yMin":-1,"yMax":4,"unit":34,"tickLabels":true,"yLabel":"f(x)","curves":[{"kind":"exp","a":1.4142135623730951,"b":1.4142135623730951}],"points":[{"at":[0,1.4142135623730951],"label":"(0, √2)"}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How to:** given two points on the curve of an exponential function, use
  a graphing calculator to find the equation.

  1. Press **[STAT]**.
  2. Clear any existing entries in columns **L1** or **L2**.
  3. In **L1**, enter the $x$-coordinates given.
  4. In **L2**, enter the corresponding $y$-coordinates.
  5. Press **[STAT]** again. Cursor right to **CALC**, scroll down to
     **ExpReg (Exponential Regression)**, and press **[ENTER]**.
  6. The screen displays the values of $a$ and $b$ in the exponential
     equation $y=a\cdot b^x$.
{{< /callout >}}

**Example.** Use a graphing calculator to find the exponential equation that
includes the points $(2,24.8)$ and $(5,198.4)$.

**Solution.** Follow the guidelines above. First press **[STAT]**, **[EDIT]**,
**[1: Edit…]**, and clear the lists **L1** and **L2**. Next, in the **L1**
column, enter the $x$-coordinates, 2 and 5. Do the same in the **L2** column
for the $y$-coordinates, 24.8 and 198.4.

Now press **[STAT]**, **[CALC]**, **[0: ExpReg]** and press **[ENTER]**. The
values $a=6.2$ and $b=2$ will be displayed. The exponential equation is
$y=6.2\cdot2^x$.

{{< fillin
  question="Find the growth factor $b$ of the exponential function that passes through the points $(3,75.98)$ and $(6,481.07)$, rounded to two decimal places."
  answer="1.85"
  answerForm="decimal"
  answerDisplay="$b\approx1.85$ (the full model is $y\approx12(1.85)^x$)"
  hint="Divide the two equations $ab^6=481.07$ and $ab^3=75.98$ to eliminate $a$, then take a cube root."
>}}

## Applying the compound-interest formula

Savings instruments in which earnings are continually reinvested, such as
mutual funds and retirement accounts, use **compound interest**. The term
*compounding* refers to interest earned not only on the original value, but
on the accumulated value of the account.

The **annual percentage rate (APR)** of an account, also called the
**nominal rate**, is the yearly interest rate earned by an investment
account. The term *nominal* is used when the compounding occurs a number of
times other than once per year. In fact, when interest is compounded more
than once a year, the effective interest rate ends up being *greater* than
the nominal rate! This is a powerful tool for investing.

We can calculate the compound interest using the compound interest formula,
which is an exponential function of the variables time $t$, principal $P$,
APR $r$, and number of compounding periods in a year $n$:

$$A(t)=P\left(1+\tfrac{r}{n}\right)^{nt}$$

For example, observe the table below, which shows the result of investing
\$1{,}000 at $10\%$ for one year. Notice how the value of the account
increases as the compounding frequency increases.

| Frequency | Value after 1 year |
| :--- | ---: |
| Annually | \$1{,}100 |
| Semiannually | \$1{,}102.50 |
| Quarterly | \$1{,}103.81 |
| Monthly | \$1{,}104.71 |
| Daily | \$1{,}105.16 |

{{< callout type="info" >}}
  **The compound interest formula.** Compound interest can be calculated
  using the formula

  $$A(t)=P\left(1+\tfrac{r}{n}\right)^{nt}$$

  where

  - $A(t)$ is the account value,
  - $t$ is measured in years,
  - $P$ is the starting amount of the account, often called the principal,
    or more generally present value,
  - $r$ is the annual percentage rate (APR) expressed as a decimal, and
  - $n$ is the number of compounding periods in one year.
{{< /callout >}}

**Example.** If we invest \$3{,}000 in an investment account paying $3\%$
interest compounded quarterly, how much will the account be worth in 10
years?

**Solution.** Because we are starting with \$3{,}000, $P=3{,}000$. Our interest
rate is $3\%$, so $r=0.03$. Because we are compounding quarterly, we are
compounding 4 times per year, so $n=4$. We want to know the value of the
account in 10 years, so we are looking for $A(10)$, the value when $t=10$.

$$
\begin{array}{lrcl}
\text{Use the compound interest formula.} & A(t) &=& P\left(1+\tfrac{r}{n}\right)^{nt} \\[4pt]
\text{Substitute using given values.} & A(10) &=& 3{,}000\left(1+\tfrac{0.03}{4}\right)^{4\cdot10} \\[4pt]
\text{Round to two decimal places.} & &\approx& \$4{,}045.05
\end{array}
$$

The account will be worth about \$4{,}045.05 in 10 years.

{{< fillin
  question="An initial investment of \$100{,}000 at $12\%$ interest is compounded weekly (use 52 weeks in a year). What will the investment be worth in 30 years, rounded to the nearest cent?"
  answer="3644675.88"
  answerForm="decimal"
  answerDisplay="\$3{,}644{,}675.88"
  hint="Use $A(t)=P\left(1+\tfrac{r}{n}\right)^{nt}$ with $P=100{,}000$, $r=0.12$, $n=52$, and $t=30$."
>}}

**Example.** A 529 Plan is a college-savings plan that allows relatives to
invest money to pay for a child's future college tuition; the account grows
tax-free. Lily wants to set up a 529 account for her new granddaughter and
wants the account to grow to \$40{,}000 over 18 years. She believes the
account will earn $6\%$ compounded semi-annually (twice a year). To the
nearest dollar, how much will Lily need to invest in the account now?

**Solution.** The nominal interest rate is $6\%$, so $r=0.06$. Interest is
compounded twice a year, so $n=2$.

We want to find the initial investment, $P$, needed so that the value of the
account will be worth \$40{,}000 in 18 years. Substitute the given values
into the compound interest formula, and solve for $P$.

$$
\begin{array}{lrcl}
\text{Use the compound interest formula.} & A(t) &=& P\left(1+\tfrac{r}{n}\right)^{nt} \\[4pt]
\text{Substitute using given values } A,r,n,\text{ and } t. & 40{,}000 &=& P\left(1+\tfrac{0.06}{2}\right)^{2(18)} \\[4pt]
\text{Simplify.} & 40{,}000 &=& P(1.03)^{36} \\[4pt]
\text{Isolate } P. & \tfrac{40{,}000}{(1.03)^{36}} &=& P \\[4pt]
\text{Divide and round to the nearest dollar.} & P &\approx& \$13{,}801
\end{array}
$$

Lily will need to invest \$13{,}801 to have \$40{,}000 in 18 years.

{{< fillin
  question="Refer to the previous example: Lily wants her 529 account to grow to \$40{,}000 over 18 years, earning $6\%$ interest. To the nearest dollar, how much would Lily need to invest if the account is compounded quarterly instead of semi-annually?"
  answer="13693"
  answerForm="decimal"
  answerDisplay="\$13{,}693"
  hint="Use $n=4$ in the compound interest formula and solve for $P$ the same way as the example."
>}}

## Evaluating functions with base $e$

As we saw earlier, the amount earned on an account increases as the
compounding frequency increases. The table below shows that the increase
from annual to semi-annual compounding is larger than the increase from
monthly to daily compounding. This might lead us to ask whether this pattern
will continue.

Examine the value of \$1 invested at $100\%$ interest for 1 year, compounded
at various frequencies, listed below.

| Frequency | $A(n)=\left(1+\tfrac{1}{n}\right)^n$ | Value |
| :--- | :--- | ---: |
| Annually | $\left(1+\tfrac{1}{1}\right)^1$ | \$2 |
| Semiannually | $\left(1+\tfrac{1}{2}\right)^2$ | \$2.25 |
| Quarterly | $\left(1+\tfrac{1}{4}\right)^4$ | \$2.441406 |
| Monthly | $\left(1+\tfrac{1}{12}\right)^{12}$ | \$2.613035 |
| Daily | $\left(1+\tfrac{1}{365}\right)^{365}$ | \$2.714567 |
| Hourly | $\left(1+\tfrac{1}{8{,}760}\right)^{8{,}760}$ | \$2.718127 |
| Once per minute | $\left(1+\tfrac{1}{525{,}600}\right)^{525{,}600}$ | \$2.718279 |
| Once per second | $\left(1+\tfrac{1}{31{,}536{,}000}\right)^{31{,}536{,}000}$ | \$2.718282 |

These values appear to be approaching a limit as $n$ increases without
bound. In fact, as $n$ gets larger and larger, the expression
$\left(1+\tfrac{1}{n}\right)^n$ approaches a number used so frequently in
mathematics that it has its own name: the letter $e$. This value is an
irrational number, which means that its decimal expansion goes on forever
without repeating. Its approximation to six decimal places is shown below.

{{< callout type="info" >}}
  **The number $e$.** The letter $e$ represents the irrational number

  $$\left(1+\tfrac{1}{n}\right)^n,\text{ as } n\text{ increases without bound}$$

  The letter $e$ is used as a base for many real-world exponential models. To
  work with base $e$, we use the approximation, $e\approx2.718282$. The
  constant was named by the Swiss mathematician Leonhard Euler
  (1707–1783) who first investigated and discovered many of its properties.
{{< /callout >}}

**Example.** Calculate $e^{3.14}$. Round to five decimal places.

**Solution.** On a calculator, press the button labeled $\left[e^x\right]$.
The window shows $\left[e^{\wedge}(\ \right]$. Type $3.14$ and then close
parenthesis, $\left[)\right]$. Press [ENTER]. Rounding to 5 decimal places,
$e^{3.14}\approx23.10387$. Caution: Many scientific calculators have an
"Exp" button, which is used to enter numbers in scientific notation. It is
not used to find powers of $e$.

{{< fillin
  question="Use a calculator to find $e^{-0.5}$. Round to five decimal places."
  answer="0.60653"
  answerForm="decimal"
  answerDisplay="$0.60653$"
  hint="Look for the calculator key labeled $e^x$, not the scientific-notation \"Exp\" key."
>}}

### Investigating continuous growth

So far we have worked with rational bases for exponential functions. For
most real-world phenomena, however, $e$ is used as the base for exponential
functions. Exponential models that use $e$ as the base are called
*continuous growth or decay models*. We see these models in finance,
computer science, and most of the sciences, such as physics, toxicology, and
fluid dynamics.

{{< callout type="info" >}}
  **The continuous growth/decay formula.** For all real numbers $t$, and all
  positive numbers $a$ and $r$, continuous growth or decay is represented by
  the formula

  $$A(t)=ae^{rt}$$

  where

  - $a$ is the initial value,
  - $r$ is the continuous growth rate per unit time,
  - and $t$ is the elapsed time.

  If $r>0$, then the formula represents continuous growth. If $r<0$, then the
  formula represents continuous decay.

  For business applications, the continuous growth formula is called the
  continuous compounding formula and takes the form

  $$A(t)=Pe^{rt}$$

  where

  - $P$ is the principal or the initial invested,
  - $r$ is the growth or interest rate per unit time,
  - and $t$ is the period or term of the investment.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given the initial value, rate of growth or decay, and time
  $t$, solve a continuous growth or decay function.

  1. Use the information in the problem to determine $a$, the initial value
     of the function.
  2. Use the information in the problem to determine the growth rate $r$.
     1. If the problem refers to continuous growth, then $r>0$.
     2. If the problem refers to continuous decay, then $r<0$.
  3. Use the information in the problem to determine the time $t$.
  4. Substitute the given information into the continuous growth formula and
     solve for $A(t)$.
{{< /callout >}}

**Example.** A person invested \$1{,}000 in an account earning a nominal
$10\%$ per year compounded continuously. How much was in the account at the
end of one year?

**Solution.** Since the account is growing in value, this is a continuous
compounding problem with growth rate $r=0.10$. The initial investment was
\$1{,}000, so $P=1000$. We use the continuous compounding formula to find the
value after $t=1$ year:

$$
\begin{array}{lrcl}
\text{Use the continuous compounding formula.} & A(t) &=& Pe^{rt} \\[4pt]
\text{Substitute known values for } P,r,\text{ and } t. & &=& 1000(e)^{0.1} \\[4pt]
\text{Use a calculator to approximate.} & &\approx& 1105.17
\end{array}
$$

The account is worth \$1{,}105.17 after one year.

{{< fillin
  question="A person invests \$100{,}000 at a nominal $12\%$ interest per year compounded continuously. What will be the value of the investment in 30 years, rounded to the nearest cent?"
  answer="3659823.44"
  answerForm="decimal"
  answerDisplay="\$3{,}659{,}823.44"
  hint="Use $A(t)=Pe^{rt}$ with $P=100{,}000$, $r=0.12$, and $t=30$."
>}}

**Example.** Radon-222 decays at a continuous rate of $17.3\%$ per day. How
much will 100 mg of Radon-222 decay to in 3 days?

**Solution.** Since the substance is decaying, the rate, $17.3\%$, is
negative. So, $r=-0.173$. The initial amount of radon-222 was 100 mg, so
$a=100$. We use the continuous decay formula to find the value after $t=3$
days:

$$
\begin{array}{lrcl}
\text{Use the continuous growth formula.} & A(t) &=& ae^{rt} \\[4pt]
\text{Substitute known values for } a,r,\text{ and } t. & &=& 100e^{-0.173(3)} \\[4pt]
\text{Use a calculator to approximate.} & &\approx& 59.5115
\end{array}
$$

So 59.5115 mg of radon-222 will remain.

{{< fillin
  question="Using the same decay rate as the radon-222 example, how much of the original 100 mg will remain after 1 year (365 days)? Enter your answer in scientific notation, rounded to two decimal places in the coefficient."
  answer="3.77\times10^{-26}"
  answerForm="scientific-notation"
  answerDisplay="$3.77\times10^{-26}$ mg"
  hint="Evaluate $A(365)=100e^{-0.173(365)}$; the result is so close to zero it must be written in scientific notation."
>}}

## Key equations

| definition of the exponential function | $f(x)=b^x,\text{ where }b>0,b\ne1$ |
| :--- | :--- |
| definition of exponential growth | $f(x)=ab^x,\text{ where }a>0,b>0,b\ne1$ |
| compound interest formula | $A(t)=P\left(1+\tfrac{r}{n}\right)^{nt}$ |
| continuous growth formula | $A(t)=ae^{rt}$ |

## Key concepts

- An exponential function is defined as a function with a positive constant
  other than $1$ raised to a variable exponent.
- A function is evaluated by solving at a specific value.
- An exponential model can be found when the growth rate and initial value
  are known.
- An exponential model can be found when the two data points from the model
  are known.
- An exponential model can be found using two data points from the graph of
  the model.
- An exponential model can be found using two data points from the graph and
  a calculator.
- The value of an account at any time $t$ can be calculated using the
  compound interest formula when the principal, annual interest rate, and
  compounding periods are known.
- The initial investment of an account can be found using the compound
  interest formula when the value of the account, annual interest rate,
  compounding periods, and life span of the account are known.
- The number $e$ is a mathematical constant often used as the base of real
  world exponential growth and decay models. Its decimal approximation is
  $e\approx2.718282$.
- Scientific and graphing calculators have the key $\left[e^x\right]$ or
  $\left[\exp(x)\right]$ for calculating powers of $e$.
- Continuous growth or decay models are exponential models that use $e$ as
  the base. Continuous growth and decay models can be found when the initial
  value and growth or decay rate are known.

## Practice

### Evaluate exponential functions

{{< multiplechoice
  question="A population of bacteria decreases by a factor of $\tfrac{1}{8}$ every 24 hours. Does this represent exponential growth, exponential decay, or neither?"
  answer="exponential decay"
  hint="The population decreases by a proportional rate each period, not by a constant amount."
>}}
exponential growth
exponential decay
neither, this is linear
{{< /multiplechoice >}}

{{< multiplechoice
  question="For each training session, a personal trainer charges his clients \$5 less than the previous training session. Does this represent exponential growth, exponential decay, or neither?"
  answer="neither, this is linear"
  hint="The charge decreases by a constant dollar amount each session, not by a percent of the previous charge."
>}}
exponential growth
exponential decay
neither, this is linear
{{< /multiplechoice >}}

{{< fillin
  question="Let $f(x)=-4^{2x+3}$. Find $f(-1)$."
  answer="-4"
  hint="Substitute $x=-1$ into the exponent first: $2(-1)+3=1$, so $f(-1)=-4^1$."
>}}

### Find the equation of an exponential function

{{< fillin
  question="Find the formula for an exponential function that passes through the two points $(0,2000)$ and $(2,20)$."
  answer="2000(0.1)^x"
  answerDisplay="$f(x)=2000(0.1)^x$"
  hint="Since $(0,2000)$ is the $y$-intercept, $a=2000$; substitute the second point to solve for $b$."
>}}

{{< fillin
  question="Use a calculator to find the equation of an exponential function that includes the points $(0,3)$ and $(3,375)$."
  answer="3\cdot5^x"
  answerDisplay="$y=3\cdot5^x$"
  hint="Since $(0,3)$ is the $y$-intercept, $a=3$; substitute the second point to solve for $b^3$."
>}}

{{< fillin
  question="Use a calculator to find the equation of an exponential function that includes the points $(20,29.495)$ and $(150,730.89)$, rounding $a$ to the nearest whole number and $b$ to three decimal places."
  answer="18\cdot1.025^x"
  answerDisplay="$y\approx18\cdot1.025^x$"
  hint="Divide the two equations $ab^{150}=730.89$ and $ab^{20}=29.495$ to eliminate $a$, then take the appropriate root of $b^{130}$."
>}}

### Use compound interest formulas

{{< fillin
  question="An account is opened with an initial deposit of \$6{,}500 and earns $3.6\%$ interest compounded semi-annually. What will the account be worth in 20 years, rounded to the nearest cent?"
  answer="13268.58"
  answerForm="decimal"
  answerDisplay="\$13{,}268.58"
  hint="Use $A(t)=P\left(1+\tfrac{r}{n}\right)^{nt}$ with $P=6{,}500$, $r=0.036$, $n=2$, and $t=20$."
>}}

{{< fillin
  question="An account compounded semi-annually starts with an initial deposit of \$9{,}000 and is worth \$13{,}373.53 after 10 years. What is the interest rate, as a percent?"
  answer="4"
  answerForm="decimal"
  answerDisplay="$4\%$"
  hint="Substitute into $A(t)=P\left(1+\tfrac{r}{n}\right)^{nt}$ with $n=2$, $t=10$, and solve for $r$."
>}}

{{< fillin
  question="Jaylen wants to save \$54{,}000 for a down payment on a home. How much will he need to invest in an account with $8.2\%$ APR, compounding daily, in order to reach his goal in 5 years? Round to the nearest cent."
  answer="35838.76"
  answerForm="decimal"
  answerDisplay="\$35{,}838.76"
  hint="Solve $A(t)=P\left(1+\tfrac{r}{n}\right)^{nt}$ for $P$ with $A=54{,}000$, $r=0.082$, $n=365$, and $t=5$."
>}}

### Evaluate exponential functions with base $e$

{{< multiplechoice
  question="Does $y=3{,}742(e)^{0.75t}$ represent continuous growth, continuous decay, or neither?"
  answer="continuous growth"
  hint="Compare the exponent's coefficient of $t$, the continuous rate $r$, to zero."
>}}
continuous growth
continuous decay
neither
{{< /multiplechoice >}}

{{< fillin
  question="Let $f(x)=-2e^{x-1}$. Find $f(-1)$, rounded to four decimal places."
  answer="-0.2707"
  answerForm="decimal"
  answerDisplay="$-0.2707$"
  hint="Substitute $x=-1$ so the exponent is $-1-1=-2$, then evaluate $-2e^{-2}$."
>}}

{{< fillin
  question="Let $f(x)=1.2e^{2x}-0.3$. Find $f(3)$, rounded to four decimal places."
  answer="483.8146"
  answerForm="decimal"
  answerDisplay="$483.8146$"
  hint="Substitute $x=3$ so the exponent is $2(3)=6$, then evaluate $1.2e^6-0.3$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 4.1: Exponential Functions](https://openstax.org/books/precalculus-2e/pages/4-1-exponential-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every graph as an accessible inline SVG generated from its exact equation — the labeled-points curve $f(x)=2^x$ with its $y=0$ asymptote; the Company A/B comparison of $A(x)=100+50x$ against $B(x)=100(1.5)^x$; the deer-population curve $N(t)=80(1.1447)^t$; the decay curve $f(x)=2.4492(0.6389)^x$ of the "initial value not known" example; the graph-reading example's $f(x)=3(2)^x$; and the Try It graph-reading curve $f(x)=\sqrt{2}(\sqrt{2})^x$; presented every value-versus-frequency comparison (the \$1{,}000-at-10\% table, the \$1-at-100\% table, and the store-count and interest tables) as Markdown tables; omitted the two decorative chapter-opener/definition photographs (the linear/quadratic/exponential-function illustration and the E. coli micrograph), which carry no mathematics; omitted the section's two Media links to external graphing-calculator resources; excluded a "coreq-skills" block present in the pinned CNXML module (a corequisite-course skills review covering evaluating and graphing exponential functions with its own short exercise set) that does not appear in the printed Precalculus 2e text — pages 397–426 of the source PDF confirm the printed section runs directly from the chapter introduction into "Identifying Exponential Functions," with no corequisite-skills material between them; converted the "Try It" practice problems into interactive exercises with instant feedback — two multiple-choice questions (replacing one four-option "which of these represent exponential functions" prompt with two correct answers, since a single-answer multiple-choice component can only test one designated answer at a time) and a fill-in for the definition Try It, a fill-in for the order-of-operations evaluation, two fill-ins for the India/China population comparison, two fill-ins for the wolf-population model (renaming the population function from the source's $N$ to $w$, since $N$ is reserved by this project's compute engine for numeric evaluation), a fill-in each for the two-point and known-graph equation-writing Try Its, a fill-in asking for just the growth factor $b$ (rather than the full calculator-derived equation) for the graphing-calculator Try It, a fill-in each for the two compound-interest Try Its, a fill-in for the power-of-$e$ Try It, a fill-in each for the two continuous growth/decay Try Its (the radon-222 one declaring `scientific-notation`, since its value is far too small to write as a plain decimal), and adapted eight selected end-of-section exercises — two growth/decay-versus-linear identifications, an exponential evaluation, three find-the-equation problems, two compound-interest applications, a continuous-growth identification, and two base-$e$ evaluations — into eleven interactive components in a closing Practice block, one group per objective. The second "Finding Equations of Exponential Functions" example is reproduced exactly as the source prints it, including its $a=6b^2\approx6(0.6389)^2\approx2.4492$ step, which substitutes the already-rounded $b$ and so sits in tension with the section's own "do not round any intermediate calculations" note; the unrounded value would be $a=6b^2=\sqrt6\approx2.4495$. That tension is the source's, and this page does not silently resolve it.</small>
