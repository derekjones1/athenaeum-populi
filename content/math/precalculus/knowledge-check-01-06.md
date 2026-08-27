---
title: 'Knowledge Check: Chapters 1–6'
description: >-
  A cumulative self-test covering functions, linear functions, polynomial and
  rational functions, exponential and logarithmic functions, trigonometric
  functions, and periodic functions — adapted from the chapter Review
  Exercises and Practice Tests of OpenStax Precalculus 2e and graded against
  the book's official Answer Key.
source_chapters: "1-6"
weight: 7
---

{{< callout type="info" >}}
  **Test yourself on Chapters 1–6.** Every question comes from the source
  textbook's chapter Review Exercises (with a few drawn from its Practice
  Tests), and every answer is graded against the book's official Answer
  Key. There are no hints — treat it like a test. Questions are grouped by
  the section they cover, so a miss tells you exactly which section to
  review.
{{< /callout >}}


## Chapter 1: Functions

### 1.1 Functions and Function Notation

{{< multiplechoice
  question="Does the relation $\{(a,b),(c,d),(e,d)\}$ represent a function?"
  answer="Yes"
>}}
Yes
No
{{< /multiplechoice >}}

{{< fillin
  question="For $f(x)=-2x^2+3x$, evaluate $f(-3)$."
  answer="-27"
>}}

### 1.2 Domain and Range

{{< multiplechoice
  question="Find the domain of $f(x)=\tfrac{x-3}{x^2-4x-12}$, in interval notation."
  answer="$(-\infty,-2)\cup(-2,6)\cup(6,\infty)$"
>}}
$(-\infty,-2)\cup(6,\infty)$
$(-2,6)$
$(-\infty,-2)\cup(-2,6)\cup(6,\infty)$
$(-\infty,6)\cup(6,\infty)$
{{< /multiplechoice >}}

### 1.3 Rates of Change and Behavior of Graphs

{{< apfigure kind="graph" >}}
{"ariaLabel":"A parabola opening upward with vertex at (2, −2), crossing the y-axis at (0, 2), falling from the upper left and rising to the upper right.","xMin":-2,"xMax":6,"yMin":-3,"yMax":7,"unit":36,"tickLabels":true,"tickStep":1,"quadratics":[{"a":1,"b":-4,"c":2}]}
{{< /apfigure >}}

{{< multiplechoice
  question="The graph above shows a function. On which interval is the function increasing?"
  answer="$(2,\infty)$"
>}}
$(-\infty,2)$
$(2,\infty)$
$(-\infty,\infty)$
$(-2,\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Using the same graph, on which interval is the function decreasing?"
  answer="$(-\infty,2)$"
>}}
$(2,\infty)$
$(-\infty,\infty)$
$(-2,\infty)$
$(-\infty,2)$
{{< /multiplechoice >}}

### 1.4 Composition of Functions

{{< fillin
  question="Find $(f\circ g)(x)$ for $f(x)=3x+2$ and $g(x)=5-6x$."
  answer="17-18x"
  answerForm="distributed"
  answerDisplay="$17-18x$"
>}}

{{< fillin
  question="Using the same functions, find $(g\circ f)(x)$."
  answer="-7-18x"
  answerForm="distributed"
  answerDisplay="$-7-18x$"
>}}

### 1.5 Transformation of Functions

{{< multiplechoice
  question="Is the function $f(x)=3x^4$ even, odd, or neither?"
  answer="even"
>}}
odd
neither
even
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is the function $h(x)=\tfrac{1}{x}+3x$ even, odd, or neither?"
  answer="odd"
>}}
odd
neither
even
{{< /multiplechoice >}}

### 1.6 Absolute Value Functions

{{< fillin
  question="Solve $\lvert x+4\rvert=18$. Enter both solutions, separated by a comma."
  answer="-22,14"
  answerMode="unordered"
  answerDisplay="$x=-22$ or $x=14$"
>}}

{{< multiplechoice
  question="Solve $\lvert 3x-2\rvert<7$, in interval notation."
  answer="$(-\tfrac{5}{3},3)$"
>}}
$(-\tfrac{5}{3},3)$
$x\le-\tfrac{5}{3}$ or $x\ge3$
$(-3,\tfrac{5}{3})$
$[-\tfrac{5}{3},3]$
{{< /multiplechoice >}}

### 1.7 Inverse Functions

{{< fillin
  question="Find $f^{-1}(x)$ for $f(x)=9+10x$."
  answer="\frac{x-9}{10}"
  answerDisplay="$f^{-1}(x)=\frac{x-9}{10}$"
>}}

{{< fillin
  question="If $f(5)=2$ for a one-to-one function $f$, find $f^{-1}(2)$."
  answer="5"
>}}

## Chapter 2: Linear Functions

### 2.1 Linear Functions

{{< multiplechoice
  question="Can the algebraic equation $2x+3y=7$ be written as a linear function?"
  answer="Yes"
>}}
No
Yes
{{< /multiplechoice >}}

{{< fillin
  question="Find a linear equation, in slope-intercept form, for the line that passes through $(7,5)$ and $(3,17)$."
  answer="y=-3x+26"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-3x+26$"
>}}

### 2.2 Graphs of Linear Functions

{{< multiplechoice
  question="Determine whether the lines given by $2x-6y=12$ and $-x+3y=1$ are parallel, perpendicular, or neither parallel nor perpendicular."
  answer="parallel"
>}}
neither
parallel
perpendicular
{{< /multiplechoice >}}

{{< fillin
  question="Write an equation, in slope-intercept form, for the line perpendicular to $f(x)=5x-1$ that passes through the point $(5,20)$."
  answer="y=-0.2x+21"
  answerForm="slope-intercept-form"
  answerDisplay="$y=-0.2x+21$"
>}}

{{< graphplot
  question="Graph the linear function $f(x)=2x-5$ by placing three points on the line."
  answerDisplay="The line through $(0,-5)$ and $(3,1)$, i.e. $y=2x-5$"
  ariaLabel="A blank coordinate grid from −7 to 7 on both axes."
>}}
{"answer": {"slope": 2, "intercept": -5, "plotPoints": 3}, "grid": {"xMin": -7, "xMax": 7, "yMin": -7, "yMax": 7}}
{{< /graphplot >}}

### 2.3 Modeling with Linear Functions

{{< fillin
  question="A town's population increases at a constant rate. In 2010 the population was 55,000. By 2012 the population had increased to 76,000. If this trend continues, predict the population in 2016."
  answer="118000"
  answerDisplay="118,000"
>}}

{{< fillin
  question="The median home value in the Pima Central subdivision (adjusted for inflation) was \$32,000 in 1970 and \$85,000 in 2010. Assume the value changed linearly over that period. If this trend continues, what would be the median home value in Pima Central in 2015, in dollars?"
  answer="91625"
  answerDisplay="\$91,625"
>}}

### 2.4 Fitting Linear Models to Data

The table below shows a city's population, by year, over a ten-year span. Assume the population changed linearly.

| **Year** | 1990 | 1995 | 2000 | 2005 | 2010 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **Population** | 5,600 | 5,950 | 6,300 | 6,600 | 6,900 |

{{< multiplechoice
  question="Using the table above, if we wanted to know when the population would reach 15,000, would that prediction involve interpolation or extrapolation?"
  answer="Extrapolation"
>}}
Extrapolation
Interpolation
{{< /multiplechoice >}}

## Chapter 3: Polynomial and Rational Functions

### 3.1 Complex Numbers

{{< fillin
  question="Perform the indicated operation and express the result as a simplified complex number: $(4+3i)+(-2-5i)$."
  answer="2-2i"
  answerForm="no-like-terms"
  answerDisplay="$2-2i$"
>}}

{{< fillin
  question="Solve $x^2-4x+5=0$ over the complex number system. Enter both solutions, separated by a comma."
  answer="2+i,2-i"
  answerMode="unordered"
  answerDisplay="$x=2+i$ or $x=2-i$"
>}}

### 3.2 Quadratic Functions

{{< fillin
  question="A rectangular plot of land is to be enclosed by fencing. One side is along a river and so needs no fence. If the total fencing available is 600 meters, find the length of the side parallel to the river that gives the plot maximum area."
  answer="300"
  answerDisplay="300 meters"
>}}

{{< fillin
  question="A rectangular plot of land is to be enclosed by fencing. One side is along a river and so needs no fence. If the total fencing available is 600 meters, find the width of the plot (the length of each side perpendicular to the river) that gives the plot maximum area."
  answer="150"
  answerDisplay="150 meters"
>}}

{{< graphplot
  question="Graph $f(x)=x^2-4x-5$ by placing three points on the parabola."
  answerDisplay="Vertex $(2,-9)$, opening upward through $(-1,0)$ and $(5,0)$"
  ariaLabel="A blank coordinate grid from −7 to 7 horizontally and −10 to 7 vertically."
>}}
{"answer": {"quadratic": {"a": 1, "b": -4, "c": -5}, "plotPoints": 3}, "grid": {"xMin": -7, "xMax": 7, "yMin": -10, "yMax": 7}}
{{< /graphplot >}}

### 3.3 Power Functions and Polynomial Functions

{{< fillin
  question="Identify the degree of the polynomial function $f(x)=4x^5-3x^3+2x-1$."
  answer="5"
>}}

{{< fillin
  question="Identify the leading coefficient of that same polynomial function, $f(x)=4x^5-3x^3+2x-1$."
  answer="4"
>}}

### 3.4 Graphs of Polynomial Functions

{{< fillin
  question="Find all zeros of $f(x)=(x+3)^2(2x-1)(x+1)^3$. Enter all of them, separated by commas."
  answer="-3,1/2,-1"
  answerMode="unordered"
  answerDisplay="$x=-3$, $x=\tfrac12$, or $x=-1$"
>}}

{{< fillin
  question="What is the multiplicity of the zero $x=-1$ for that same function, $f(x)=(x+3)^2(2x-1)(x+1)^3$?"
  answer="3"
>}}

### 3.5 Dividing Polynomials

{{< fillin
  question="Divide $x^3-2x^2+4x+4$ by $x-2$ using long division. Give the quotient."
  answer="x^2+4"
  answerForm="expanded"
  answerDisplay="$x^2+4$"
>}}

{{< fillin
  question="Give the remainder from that same division of $x^3-2x^2+4x+4$ by $x-2$."
  answer="12"
>}}

### 3.6 Zeros of Polynomial Functions

{{< fillin
  question="Use the Rational Zero Theorem to solve $2x^3-3x^2-18x-8=0$. Enter all solutions, separated by commas."
  answer="-2,4,-1/2"
  answerMode="unordered"
  answerDisplay="$x=-2$, $x=4$, or $x=-\tfrac12$"
>}}

{{< multiplechoice
  question="According to Descartes' Rule of Signs, which describes the possible numbers of positive and negative real zeros of $f(x)=x^3-3x^2-2x+4$?"
  answer="2 or 0 positive, 1 negative"
>}}
1 positive, 2 or 0 negative
2 or 0 positive, 1 negative
1 positive, 1 negative
3 or 1 positive, 0 negative
{{< /multiplechoice >}}

### 3.7 Rational Functions

{{< fillin
  question="Find the vertical asymptote of $f(x)=\tfrac{x+2}{x-5}$."
  answer="x=5"
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function, $f(x)=\tfrac{x+2}{x-5}$."
  answer="y=1"
>}}

{{< graphplot
  question="Find the vertical and horizontal asymptotes of $f(x)=\tfrac{3x^2-27}{x^2+x-2}$ and place them on the grid."
  answerDisplay="$x=1$, $x=-2$, and $y=3$"
  ariaLabel="A blank coordinate grid from −6 to 6 on both axes."
>}}
{"answer": {"asymptotes": [{"x": 1}, {"x": -2}, {"y": 3}]}, "grid": {"xMin": -6, "xMax": 6, "yMin": -6, "yMax": 6}}
{{< /graphplot >}}

### 3.8 Inverses and Radical Functions

{{< fillin
  question="Find the inverse of $f(x)=(x-2)^2$, given that its domain is restricted to $x\ge2$."
  answer="\sqrt{x}+2"
  answerDisplay="$f^{-1}(x)=\sqrt{x}+2$"
>}}

{{< fillin
  question="Find the inverse of $f(x)=\sqrt{4x+5}-3$."
  answer="\frac{(x+3)^2-5}{4}"
  answerDisplay="$f^{-1}(x)=\tfrac{(x+3)^2-5}{4},\ x\ge-3$"
>}}

### 3.9 Modeling Using Variation

{{< fillin
  question="$y$ varies directly as the square of $x$. If $x=3$ gives $y=36$, find $y$ when $x=4$."
  answer="64"
>}}

{{< fillin
  question="$y$ varies jointly as the cube of $x$ and as $z$. If $x=1$ and $z=2$ give $y=6$, find $y$ when $x=2$ and $z=3$."
  answer="72"
>}}

## Chapter 4: Exponential and Logarithmic Functions

### 4.1 Exponential Functions

{{< multiplechoice
  question="Determine whether the function $y=156(0.825)^t$ represents exponential growth, exponential decay, or neither."
  answer="exponential decay"
>}}
exponential growth
exponential decay
neither, this is linear
{{< /multiplechoice >}}

{{< fillin
  question="Find an exponential equation that passes through the points $(2,2.25)$ and $(5,60.75)$."
  answer="0.25(3)^x"
  answerDisplay="$y=0.25(3)^x$"
>}}

### 4.2 Graphs of Exponential Functions

{{< fillin
  question="What is the range of $f(x)=3.5(2)^x$? Write your answer in interval notation."
  answer="(0,\infty)"
  answerDisplay="$(0,\infty)$"
>}}

{{< fillin
  question="The graph of $f(x)=6.5^x$ is reflected about the $y$-axis and stretched vertically by a factor of $7$. What is the equation of the new function, $g(x)$?"
  answer="7(6.5)^{-x}"
  answerDisplay="$g(x)=7(6.5)^{-x}$"
>}}

### 4.3 Logarithmic Functions

{{< fillin
  question="Solve for $x$: $\log_{64}(x)=\tfrac{1}{3}$."
  answer="4"
>}}

{{< fillin
  question="Evaluate $\log(0.000001)$ without using a calculator."
  answer="-6"
  answerForm="evaluated-logarithm"
>}}

### 4.4 Graphs of Logarithmic Functions

{{< fillin
  question="What is the domain of $g(x)=\ln(4x+20)-17$? Write your answer in interval notation."
  answer="(-5,\infty)"
  answerDisplay="$(-5,\infty)$"
>}}

{{< fillin
  question="What is the vertical asymptote of that same function, $g(x)=\ln(4x+20)-17$?"
  answer="x=-5"
  answerDisplay="$x=-5$"
>}}

### 4.5 Logarithmic Properties

{{< fillin
  question="Rewrite $\log_8(x)+\log_8(5)+\log_8(y)+\log_8(13)$ in compact form."
  answer="\log_8(65xy)"
  answerForm="single-logarithm"
  answerDisplay="$\log_8(65xy)$"
>}}

{{< fillin
  question="Use properties of logarithms to expand $\ln\left(2b\sqrt{\tfrac{b+1}{b-1}}\right)$."
  answer="\ln(2)+\ln(b)+\frac{1}{2}\ln(b+1)-\frac{1}{2}\ln(b-1)"
  answerForm="expanded-logarithms"
  answerDisplay="$\ln(2)+\ln(b)+\tfrac{1}{2}\ln(b+1)-\tfrac{1}{2}\ln(b-1)$"
>}}

### 4.6 Exponential and Logarithmic Equations

{{< fillin
  question="Solve $\tfrac{125}{\left(\tfrac{1}{625}\right)^{-x-3}}=5^3$ for $x$."
  answer="-3"
>}}

{{< fillin
  question="Find the exact solution for $e^{2x}-e^x-110=0$."
  answer="\ln 11"
  answerForm="exact-log"
  answerDisplay="$x=\ln11$"
>}}

### 4.7 Exponential and Logarithmic Models

{{< fillin
  question="The equation $N(t)=\frac{1{,}200}{1+199e^{-0.625t}}$ models the number of people in a school who have heard a rumor after $t$ days. To the nearest tenth, how many days will it be before the rumor spreads to half its carrying capacity?"
  answer="8.5"
  answerForm="decimal"
  answerDisplay="$8.5$ days"
>}}

{{< fillin
  question="A doctor prescribes $300$ milligrams of a therapeutic drug that decays by about $17\%$ each hour. To the nearest hundredth of a milligram, how much of the drug will remain in the patient's system after $24$ hours?"
  answer="3.43"
  answerForm="decimal"
  answerDisplay="$3.43$ mg"
>}}

### 4.8 Fitting Exponential Models to Data

{{< multiplechoice
  question="A table of values for $f(x)$ includes $(1,3.05)$, $(2,4.42)$, $(3,6.4)$, $(4,9.28)$, $(5,13.46)$, $(6,19.52)$, $(7,28.3)$, $(8,41.04)$, $(9,59.5)$, and $(10,86.28)$. Does this data best fit a linear, logarithmic, or exponential model?"
  answer="exponential"
>}}
linear
logarithmic
exponential
{{< /multiplechoice >}}

{{< fillin
  question="The population of a culture of bacteria is modeled by the logistic equation $P(t)=\frac{14{,}250}{1+29e^{-0.62t}}$, where $t$ is in days. To the nearest tenth, how many days will it take the culture to reach $75\%$ of its carrying capacity?"
  answer="7.2"
  answerForm="decimal"
  answerDisplay="$7.2$ days"
>}}

## Chapter 5: Trigonometric Functions

### 5.1 Angles

{{< fillin
  question="Convert $-210^\circ$ to radians."
  answer="-7\pi/6"
  answerForm="radians"
  answerDisplay="$-\tfrac{7\pi}{6}$"
>}}

{{< fillin
  question="Find the length of an arc in a circle of radius 7 meters subtended by a central angle of $85^\circ$. Round your answer to three decimal places."
  answer="10.385"
  answerForm="decimal"
  answerDisplay="$10.385$ meters"
>}}

### 5.2 Unit Circle: Sine and Cosine Functions

{{< fillin
  question="Find the exact value of $\sin\left(\tfrac{\pi}{3}\right)$."
  answer="\sqrt3/2"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{\sqrt3}{2}$"
>}}

{{< fillin
  question="State the reference angle for $\tfrac{3\pi}{4}$."
  answer="\pi/4"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{4}$"
>}}

### 5.3 The Other Trigonometric Functions

{{< fillin
  question="Find the exact value of $\tan\left(\tfrac{\pi}{4}\right)$."
  answer="1"
  answerForm="evaluated-trig"
  answerDisplay="$1$"
>}}

{{< fillin
  question="Use reference angles to evaluate $\sec(315^\circ)$."
  answer="\sqrt2"
  answerForm="evaluated-trig"
  answerDisplay="$\sqrt2$"
>}}

### 5.4 Right Triangle Trigonometry

{{< fillin
  question="Fill in the missing angle, in degrees: $\cos\left(\tfrac{\pi}{2}\right)=\sin\left(\underline{\qquad}\right)$."
  answer="0^\circ"
  answerForm="degrees"
  answerDisplay="$0^\circ$"
>}}

{{< fillin
  question="A 15-ft ladder leans against a building so that the angle between the ground and the ladder is $70^\circ$. How high does the ladder reach up the side of the building? Round to four decimal places."
  answer="14.0954"
  answerForm="decimal"
  answerDisplay="$14.0954$ ft"
>}}

## Chapter 6: Periodic Functions

### 6.1 Graphs of the Sine and Cosine Functions

{{< fillin
  question="Find the period of $y=\sin\left(\tfrac{\pi}{6}x+\pi\right)-3$."
  answer="12"
  answerDisplay="$12$"
>}}

{{< fillin
  question="Determine the phase shift for $y=\sin\left(\tfrac{\pi}{6}x+\pi\right)-3$ as a signed value (positive = right, negative = left)."
  answer="-6"
  answerDisplay="$-6$"
>}}

### 6.2 Graphs of the Other Trigonometric Functions

{{< fillin
  question="What is the period of $g(x)=3\tan(6x+42)$?"
  answer="\pi/6"
  answerForm="radians"
  answerDisplay="$\tfrac{\pi}{6}$"
>}}

{{< fillin
  question="What is the horizontal shift of $g(x)=3\tan(6x+42)$?"
  answer="-7"
  answerDisplay="$-7$"
>}}

### 6.3 Inverse Trigonometric Functions

{{< fillin
  question="Find the exact value of $\cos^{-1}\left(\tfrac{\sqrt3}{2}\right)$."
  answer="\pi/6"
  answerForm="evaluated-trig radians"
  answerDisplay="$\tfrac{\pi}{6}$"
>}}

{{< fillin
  question="Find the exact value of $\tan\left(\cos^{-1}\left(\tfrac{5}{13}\right)\right)$."
  answer="12/5"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{12}{5}$"
>}}
