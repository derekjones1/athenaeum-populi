---
title: Exponential and Logarithmic Models
description: >-
  Modeling exponential growth and decay, applying Newton's Law of Cooling and
  logistic-growth models, choosing an appropriate model for data, and
  expressing an exponential model in base $e$ — adapted from OpenStax
  Precalculus 2e, Section 4.7.
source_section: "4.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Model exponential growth and decay
- Use Newton's Law of Cooling
- Use logistic-growth models
- Choose an appropriate model for data
- Express an exponential model in base $e$
{{< /callout >}}

We have already explored some basic applications of exponential and
logarithmic functions. In this section, we explore some important
applications in more depth, including radioactive isotopes and Newton's Law
of Cooling.

## Modeling Exponential Growth and Decay

In real-world applications, we need to model the behavior of a function. In
mathematical modeling, we choose a familiar general function with properties
that suggest that it will model the real-world phenomenon we wish to
analyze. In the case of rapid growth, we may choose the exponential growth
function:

$$y=A_0e^{kt}$$

where $A_0$ is equal to the value at time zero, $e$ is Euler's constant, and
$k$ is a positive constant that determines the rate (percentage) of growth.
We may use the exponential growth function in applications involving
**doubling time**, the time it takes for a quantity to double. Such
phenomena as wildlife populations, financial investments, biological
samples, and natural resources may exhibit growth based on a doubling time.
In some applications, however, as we will see when we discuss the logistic
equation, the logistic model sometimes fits the data better than the
exponential model.

On the other hand, if a quantity is falling rapidly toward zero, without
ever reaching zero, then we should probably choose the **exponential decay**
model. Again, we have the form $y=A_0e^{kt}$ where $A_0$ is the starting
value, and $e$ is Euler's constant. Now $k$ is a negative constant that
determines the rate of decay. We may use the exponential decay model when we
are calculating **half-life**, or the time it takes for a substance to
exponentially decay to half of its original quantity. We use half-life in
applications involving radioactive isotopes.

In our choice of a function to serve as a mathematical model, we often use
data points gathered by careful observation and measurement to construct
points on a graph and hope we can recognize the shape of the graph.
Exponential growth and decay graphs have a distinctive shape, as we can see
below. It is important to remember that, although parts of each of the two
graphs seem to lie on the $x$-axis, they are really a tiny distance above
the $x$-axis.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 2e^(3x), an exponential growth curve with a horizontal asymptote at y = 0, passing through (0, 2), with labeled points at (-1/3, 2/e) and (1/3, 2e).","xMin":-3,"xMax":3,"yMin":-1,"yMax":6,"unit":26,"tickLabels":true,"curves":[{"kind":"exp","a":2,"b":20.0855}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[0,2],"label":"(0, 2)"},{"at":[-0.3333,0.7358],"label":"(-1/3, 2/e)"},{"at":[0.3333,5.4366],"label":"(1/3, 2e)"}],"texts":[{"at":[0.55,5.7],"text":"y = 2e³ˣ"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 3e^(-2x), an exponential decay curve with a horizontal asymptote at y = 0, passing through (0, 3), with labeled points at (-1/2, 3e) and (1/2, 3/e).","xMin":-3,"xMax":3,"yMin":-1,"yMax":9,"unit":22,"tickLabels":true,"curves":[{"kind":"exp","a":3,"b":0.135335}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[0,3],"label":"(0, 3)"},{"at":[-0.5,8.1548],"label":"(-1/2, 3e)"},{"at":[0.5,1.1036],"label":"(1/2, 3/e)"}],"texts":[{"at":[-2.9,4],"text":"y = 3e⁻²ˣ"}]}
{{< /apfigure >}}

Exponential growth and decay often involve very large or very small numbers.
To describe these numbers, we often use orders of magnitude. The **order of
magnitude** is the power of ten, when the number is expressed in scientific
notation, with one digit to the left of the decimal. For example, the
distance to the nearest star, Proxima Centauri, measured in kilometers, is
$40{,}113{,}497{,}200{,}000$ kilometers. Expressed in scientific notation,
this is $4.01134972\times10^{13}$. So, we could describe this number as
having order of magnitude $10^{13}$.

{{< callout type="info" >}}
  **Characteristics of the Exponential Function, $y=A_0e^{kt}$.** An
  exponential function with the form $y=A_0e^{kt}$ has the following
  characteristics:

  - one-to-one function
  - horizontal asymptote: $y=0$
  - domain: $(-\infty,\infty)$
  - range: $(0,\infty)$
  - $x$-intercept: none
  - $y$-intercept: $(0,A_0)$
  - increasing if $k>0$ (see below)
  - decreasing if $k<0$ (see below)
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A generic exponential growth curve y = A0 e^(kt) with k greater than 0, showing a horizontal asymptote at y = 0, the y-intercept at (0, A0), and labeled points (1/k, A0e) and (-1/k, A0/e).","xMin":-2.5,"xMax":2.5,"yMin":-1,"yMax":6,"unit":45,"xLabel":"t","yLabel":"y","curves":[{"kind":"exp","a":2,"b":2.71828}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[0,2],"label":"(0, A0)"},{"at":[1,5.4366],"label":"(1/k, A0e)"},{"at":[-1,0.7358],"label":"(-1/k, A0/e)"}],"texts":[{"at":[-2.3,5.6],"text":"y = A0eᵏᵗ, k > 0"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A generic exponential decay curve y = A0 e^(kt) with k less than 0, showing a horizontal asymptote at y = 0, the y-intercept at (0, A0), and labeled points (-1/k, A0e) and (1/k, A0/e).","xMin":-2.5,"xMax":2.5,"yMin":-1,"yMax":6,"unit":45,"xLabel":"t","yLabel":"y","curves":[{"kind":"exp","a":2,"b":0.367879}],"lines":[{"y":0,"dashed":true,"arrows":false}],"points":[{"at":[0,2],"label":"(0, A0)"},{"at":[-1,5.4366],"label":"(-1/k, A0e)"},{"at":[1,0.7358],"label":"(1/k, A0/e)"}],"texts":[{"at":[0.85,5.6],"text":"y = A0eᵏᵗ, k < 0"}]}
{{< /apfigure >}}

**Example.** A population of bacteria doubles every hour. If the culture
started with 10 bacteria, graph the population as a function of time.

**Solution.** When an amount grows at a fixed percent per unit time, the
growth is exponential. To find $A_0$ we use the fact that $A_0$ is the
amount at time zero, so $A_0=10$. To find $k$, use the fact that after one
hour $(t=1)$ the population doubles from $10$ to $20$. The formula is
derived as follows

$$
\begin{array}{lrcl}
& 20 &=& 10e^{k\cdot1} \\[4pt]
\text{Divide by 10.} & 2 &=& e^{k} \\[4pt]
\text{Take the natural logarithm.} & \ln2 &=& k
\end{array}
$$

so $k=\ln(2)$. Thus the equation we want to graph is
$y=10e^{(\ln2)t}=10\left(e^{\ln2}\right)^t=10\cdot2^t$. The graph is shown
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 10e^((ln 2)t), equivalently y = 10·2^t, starting at (0, 10) and rising rapidly to the right.","xMin":0,"xMax":5,"yMin":0,"yMax":200,"unit":34,"tickLabels":true,"yTickStep":20,"curves":[{"kind":"exp","a":10,"b":2,"from":0}],"texts":[{"at":[0.3,175],"text":"y = 10·2ᵗ"}]}
{{< /apfigure >}}

**Analysis.** The population of bacteria after ten hours is $10{,}240$. We
could describe this amount is being of the order of magnitude $10^4$. The
population of bacteria after twenty hours is $10{,}485{,}760$ which is of
the order of magnitude $10^7$, so we could say that the population has
increased by three orders of magnitude in ten hours.

## Half-Life

We now turn to exponential decay. One of the common terms associated with
exponential decay, as stated above, is **half-life**, the length of time it
takes an exponentially decaying quantity to decrease to half its original
amount. Every radioactive isotope has a half-life, and the process
describing the exponential decay of an isotope is called radioactive decay.

To find the half-life of a function describing exponential decay, solve the
following equation:

$$\tfrac12A_0=A_0e^{kt}$$

We find that the half-life depends only on the constant $k$ and not on the
starting quantity $A_0$.

The formula is derived as follows

$$
\begin{array}{lrcl}
& \tfrac12A_0 &=& A_0e^{kt} \\[4pt]
\text{Divide by }A_0. & \tfrac12 &=& e^{kt} \\[4pt]
\text{Take the natural log.} & \ln\!\left(\tfrac12\right) &=& kt \\[4pt]
\text{Apply laws of logarithms.} & -\ln(2) &=& kt \\[4pt]
\text{Divide by }k. & -\tfrac{\ln(2)}{k} &=& t
\end{array}
$$

Since $t$, the time, is positive, $k$ must, as expected, be negative. This
gives us the half-life formula

$$t=-\tfrac{\ln(2)}{k}$$

{{< callout type="info" >}}
  **How to: given the half-life, find the decay rate.**

  1. Write $A=A_0e^{kt}$.
  2. Replace $A$ by $\tfrac12A_0$ and replace $t$ by the given half-life.
  3. Solve to find $k$. Express $k$ as an exact value (do not round).

  **Note.** It is also possible to find the decay rate using
  $k=-\tfrac{\ln(2)}{t}$.
{{< /callout >}}

**Example.** The half-life of carbon-14 is $5{,}730$ years. Express the
amount of carbon-14 remaining as a function of time, $t$.

**Solution.** This formula is derived as follows.

$$
\begin{array}{lrcl}
\text{The continuous growth formula.} & A &=& A_0e^{kt} \\[4pt]
\text{Substitute the half-life for }t\text{ and }0.5A_0\text{ for }f(t). & 0.5A_0 &=& A_0e^{k\cdot5{,}730} \\[4pt]
\text{Divide by }A_0. & 0.5 &=& e^{5{,}730k} \\[4pt]
\text{Take the natural log of both sides.} & \ln(0.5) &=& 5{,}730k \\[4pt]
\text{Divide by the coefficient of }k. & k &=& \tfrac{\ln(0.5)}{5{,}730} \\[4pt]
\text{Substitute for }k\text{ in the continuous growth formula.} & A &=& A_0e^{\left(\tfrac{\ln(0.5)}{5{,}730}\right)t}
\end{array}
$$

The function that describes this continuous decay is
$f(t)=A_0e^{\left(\tfrac{\ln(0.5)}{5{,}730}\right)t}$. We observe that the
coefficient of $t$, $\tfrac{\ln(0.5)}{5{,}730}\approx-1.2097\times10^{-4}$, is
negative, as expected in the case of exponential decay.

{{< fillin
  question="The half-life of plutonium-244 is 80,000,000 years. Find a function that gives the amount of plutonium-244 remaining as a function of time, measured in years."
  answer="A_0e^{-8.7\times10^{-9}t}"
  answerDisplay="$f(t)=A_0e^{-8.7\times10^{-9}t}$"
  hint="Substitute the half-life for $t$ and $0.5A_0$ for $A$ in $A=A_0e^{kt}$, then solve for $k$."
>}}

## Radiocarbon Dating

The formula for radioactive decay is important in radiocarbon dating, which
is used to calculate the approximate date a plant or animal died. Radiocarbon
dating was discovered in 1949 by Willard Libby, who won a Nobel Prize for
his discovery. It compares the difference between the ratio of two isotopes
of carbon in an organic artifact or fossil to the ratio of those two
isotopes in the air. It is believed to be accurate to within about 1% error
for plants or animals that died within the last $60{,}000$ years.

Carbon-14 is a radioactive isotope of carbon that has a half-life of
$5{,}730$ years. It occurs in small quantities in the carbon dioxide in the
air we breathe. Most of the carbon on Earth is carbon-12, which has an
atomic weight of 12 and is not radioactive. Scientists have determined the
ratio of carbon-14 to carbon-12 in the air for the last $60{,}000$ years,
using tree rings and other organic samples of known dates — although the
ratio has changed slightly over the centuries.

As long as a plant or animal is alive, the ratio of the two isotopes of
carbon in its body is close to the ratio in the atmosphere. When it dies,
the carbon-14 in its body decays and is not replaced. By comparing the ratio
of carbon-14 to carbon-12 in a decaying sample to the known ratio in the
atmosphere, the date the plant or animal died can be approximated.

Since the half-life of carbon-14 is $5{,}730$ years, the formula for the
amount of carbon-14 remaining after $t$ years is

$$A\approx A_0e^{\left(\tfrac{\ln(0.5)}{5{,}730}\right)t}$$

where

- $A$ is the amount of carbon-14 remaining
- $A_0$ is the amount of carbon-14 when the plant or animal began decaying

This formula is derived as follows:

$$
\begin{array}{lrcl}
\text{The continuous growth formula.} & A &=& A_0e^{kt} \\[4pt]
\text{Substitute the half-life for }t\text{ and }0.5A_0\text{ for }f(t). & 0.5A_0 &=& A_0e^{k\cdot5{,}730} \\[4pt]
\text{Divide by }A_0. & 0.5 &=& e^{5{,}730k} \\[4pt]
\text{Take the natural log of both sides.} & \ln(0.5) &=& 5{,}730k \\[4pt]
\text{Divide by the coefficient of }k. & k &=& \tfrac{\ln(0.5)}{5{,}730} \\[4pt]
\text{Substitute for }k\text{ in the continuous growth formula.} & A &=& A_0e^{\left(\tfrac{\ln(0.5)}{5{,}730}\right)t}
\end{array}
$$

To find the age of an object, we solve this equation for $t$:

$$t=\tfrac{\ln\left(\tfrac{A}{A_0}\right)}{-0.000121}$$

Out of necessity, we neglect here the many details that a scientist takes
into consideration when doing carbon-14 dating, and we only look at the
basic formula. The ratio of carbon-14 to carbon-12 in the atmosphere is
approximately $0.0000000001\%$. Let $r$ be the ratio of carbon-14 to
carbon-12 in the organic artifact or fossil to be dated, determined by a
method called liquid scintillation. From the equation
$A\approx A_0e^{-0.000121t}$ we know the ratio of the percentage of
carbon-14 in the object we are dating to the initial amount of carbon-14 in
the object when it was formed is
$r=\tfrac{A}{A_0}\approx e^{-0.000121t}$. We solve this equation for $t$, to
get

$$t=\tfrac{\ln(r)}{-0.000121}$$

{{< callout type="info" >}}
  **How to: given the percentage of carbon-14 in an object, determine its
  age.**

  1. Express the given percentage of carbon-14 as an equivalent decimal, $k$.
  2. Substitute for $k$ in the equation $t=\tfrac{\ln(r)}{-0.000121}$ and
     solve for the age, $t$.
{{< /callout >}}

**Example.** A bone fragment is found that contains 20% of its original
carbon-14. To the nearest year, how old is the bone?

**Solution.** We substitute $20\%=0.20$ for $r$ in the equation and solve
for $t$:

$$
\begin{array}{lrcl}
\text{Use the general form of the equation.} & t &=& \tfrac{\ln(r)}{-0.000121} \\[4pt]
\text{Substitute for }r. & &=& \tfrac{\ln(0.20)}{-0.000121} \\[4pt]
\text{Round to the nearest year.} & &\approx& 13{,}301
\end{array}
$$

The bone fragment is about $13{,}301$ years old.

**Analysis.** The instruments that measure the percentage of carbon-14 are
extremely sensitive and, as we mention above, a scientist will need to do
much more work than we did in order to be satisfied. Even so, carbon dating
is only accurate to about 1%, so this age should be given as $13{,}301$
years $\pm$ 1%, or $13{,}301$ years $\pm$ 133 years.

{{< multiplechoice
  question="Cesium-137 has a half-life of about 30 years. If we begin with 200 mg of cesium-137, will it take more or less than 230 years until only 1 milligram remains?"
  answer="less than 230 years"
  hint="Solve $\tfrac{1}{200}=e^{kt}$ with $k=-\tfrac{\ln(2)}{30}$, and compare the result with 230."
>}}
less than 230 years
more than 230 years
{{< /multiplechoice >}}

{{< fillin
  question="To four decimal places, exactly how many years will it take the cesium-137 in that same scenario to decay from 200 mg to 1 milligram?"
  answer="229.3157"
  answerForm="decimal"
  answerDisplay="$229.3157$ years"
  hint="Solve $\tfrac{1}{200}=e^{kt}$ for $t$, where $k=-\tfrac{\ln(2)}{30}$."
>}}

## Calculating Doubling Time

For decaying quantities, we determined how long it took for half of a
substance to decay. For growing quantities, we might want to find out how
long it takes for a quantity to double. As we mentioned above, the time it
takes for a quantity to double is called the doubling time.

Given the basic exponential growth equation $A=A_0e^{kt}$, doubling time can
be found by solving for when the original quantity has doubled, that is, by
solving $2A_0=A_0e^{kt}$.

The formula is derived as follows:

$$
\begin{array}{lrcl}
& 2A_0 &=& A_0e^{kt} \\[4pt]
\text{Divide by }A_0. & 2 &=& e^{kt} \\[4pt]
\text{Take the natural logarithm.} & \ln2 &=& kt \\[4pt]
\text{Divide by the coefficient of }t. & t &=& \tfrac{\ln2}{k}
\end{array}
$$

Thus the doubling time is

$$t=\tfrac{\ln2}{k}$$

**Example.** According to Moore's Law, the doubling time for the number of
transistors that can be put on a computer chip is approximately two years.
Give a function that describes this behavior.

**Solution.** The formula is derived as follows:

$$
\begin{array}{lrcl}
\text{The doubling time formula.} & t &=& \tfrac{\ln2}{k} \\[4pt]
\text{Use a doubling time of two years.} & 2 &=& \tfrac{\ln2}{k} \\[4pt]
\text{Multiply by }k\text{ and divide by 2.} & k &=& \tfrac{\ln2}{2} \\[4pt]
\text{Substitute }k\text{ into the continuous growth formula.} & A &=& A_0e^{\tfrac{\ln2}{2}t}
\end{array}
$$

The function is $A_0e^{\tfrac{\ln2}{2}t}$.

{{< fillin
  question="Recent data suggests that, as of 2013, the rate of growth predicted by Moore's Law no longer holds. Growth has slowed to a doubling time of approximately three years. Find the new function that takes that longer doubling time into account."
  answer="A_0e^{\frac{\ln2}{3}t}"
  answerDisplay="$f(t)=A_0e^{\tfrac{\ln2}{3}t}$"
  hint="Use the doubling time formula $t=\tfrac{\ln2}{k}$ with $t=3$, solve for $k$, then substitute into the continuous growth formula."
>}}

## Using Newton's Law of Cooling

Exponential decay can also be applied to temperature. When a hot object is
left in surrounding air that is at a lower temperature, the object's
temperature will decrease exponentially, leveling off as it approaches the
surrounding air temperature. On a graph of the temperature function, the
leveling off will correspond to a horizontal asymptote at the temperature of
the surrounding air. Unless the room temperature is zero, this will
correspond to a vertical shift of the generic exponential decay function.
This translation leads to **Newton's Law of Cooling**, the scientific
formula for temperature as a function of time as an object's temperature is
equalized with the ambient temperature

$$T(t)=Ae^{kt}+T_s$$

This formula is derived as follows:

$$
\begin{array}{lrcl}
& T(t) &=& Ab^{ct}+T_s \\[4pt]
\text{Laws of logarithms.} & T(t) &=& Ae^{\ln\left(b^{ct}\right)}+T_s \\[4pt]
\text{Laws of logarithms.} & T(t) &=& Ae^{ct\ln b}+T_s \\[4pt]
\text{Rename the constant }c\ln b\text{, calling it }k. & T(t) &=& Ae^{kt}+T_s
\end{array}
$$

{{< callout type="info" >}}
  **Newton's Law of Cooling.** The temperature of an object, $T$, in
  surrounding air with temperature $T_s$ will behave according to the
  formula

  $$T(t)=Ae^{kt}+T_s$$

  where

  - $t$ is time
  - $A$ is the difference between the initial temperature of the object and
    the surroundings
  - $k$ is a constant, the continuous rate of cooling of the object
{{< /callout >}}

{{< callout type="info" >}}
  **How to: given a set of conditions, apply Newton's Law of Cooling.**

  1. Set $T_s$ equal to the $y$-coordinate of the horizontal asymptote
     (usually the ambient temperature).
  2. Substitute the given values into the continuous growth formula
     $T(t)=Ae^{kt}+T_s$ to find the parameters $A$ and $k$.
  3. Substitute in the desired time to find the temperature or the desired
     temperature to find the time.
{{< /callout >}}

**Example.** A cheesecake is taken out of the oven with an ideal internal
temperature of $165\degree$F, and is placed into a $35\degree$F
refrigerator. After 10 minutes, the cheesecake has cooled to $150\degree$F.
If we must wait until the cheesecake has cooled to $70\degree$F before we
eat it, how long will we have to wait?

**Solution.** Because the surrounding air temperature in the refrigerator is
35 degrees, the cheesecake's temperature will decay exponentially toward
35, following the equation

$$T(t)=Ae^{kt}+35$$

We know the initial temperature was 165, so $T(0)=165$.

$$
\begin{array}{lrcl}
\text{Substitute }(0,165). & 165 &=& Ae^{k\cdot0}+35 \\[4pt]
\text{Solve for }A. & A &=& 130
\end{array}
$$

We were given another data point, $T(10)=150$, which we can use to solve
for $k$.

$$
\begin{array}{lrcl}
\text{Substitute }(10,150). & 150 &=& 130e^{k\cdot10}+35 \\[4pt]
\text{Subtract 35.} & 115 &=& 130e^{k\cdot10} \\[4pt]
\text{Divide by 130.} & \tfrac{115}{130} &=& e^{10k} \\[4pt]
\text{Take the natural log of both sides.} & \ln\!\left(\tfrac{115}{130}\right) &=& 10k \\[4pt]
\text{Divide by the coefficient of }k. & k &=& \tfrac{\ln\left(\tfrac{115}{130}\right)}{10}\approx-0.0123
\end{array}
$$

This gives us the equation for the cooling of the cheesecake:
$T(t)=130e^{-0.0123t}+35$.

Now we can solve for the time it will take for the temperature to cool to
70 degrees.

$$
\begin{array}{lrcl}
\text{Substitute in 70 for }T(t). & 70 &=& 130e^{-0.0123t}+35 \\[4pt]
\text{Subtract 35.} & 35 &=& 130e^{-0.0123t} \\[4pt]
\text{Divide by 130.} & \tfrac{35}{130} &=& e^{-0.0123t} \\[4pt]
\text{Take the natural log of both sides.} & \ln\!\left(\tfrac{35}{130}\right) &=& -0.0123t \\[4pt]
\text{Divide by the coefficient of }t. & t &=& \tfrac{\ln\left(\tfrac{35}{130}\right)}{-0.0123}\approx106.68
\end{array}
$$

It will take about 107 minutes, or one hour and 47 minutes, for the
cheesecake to cool to $70\degree$F.

{{< fillin
  question="A pitcher of water at 40 degrees Fahrenheit is placed into a 70 degree room. One hour later, the temperature has risen to 45 degrees. To three decimal places, how long will it take, in hours, for the temperature to rise to 60 degrees?"
  answer="6.026"
  answerForm="decimal"
  answerDisplay="$6.026$ hours"
  hint="Set $T_s=70$ and $A=40-70=-30$, use $T(1)=45$ to find $k$, then solve $T(t)=60$ for $t$."
>}}

## Using Logistic Growth Models

Exponential growth cannot continue forever. Exponential models, while they
may be useful in the short term, tend to fall apart the longer they
continue. Consider an aspiring writer who writes a single line on day one
and plans to double the number of lines she writes each day for a month. By
the end of the month, she must write over 17 billion lines, or
one-half-billion pages. It is impractical, if not impossible, for anyone to
write that much in such a short period of time. Eventually, an exponential
model must begin to approach some limiting value, and then the growth is
forced to slow. For this reason, it is often better to use a model with an
upper bound instead of an exponential growth model, though the exponential
growth model is still useful over a short term, before approaching the
limiting value.

The **logistic growth model** is approximately exponential at first, but it
has a reduced rate of growth as the output approaches the model's upper
bound, called the **carrying capacity**. For constants $a$, $b$, and $c$,
the logistic growth of a population over time $t$ is represented by the
model

$$f(t)=\tfrac{c}{1+ae^{-bt}}$$

The graph below shows how the growth rate changes over time. The graph
increases from left to right, but the growth rate only increases until it
reaches its point of maximum growth rate, at which point the rate of
increase decreases.

{{< apfigure kind="graph" >}}
{"ariaLabel": "A generic logistic growth curve f(t) = c/(1+ae^(-bt)), S-shaped, rising from an initial value near t = 0, through a point of maximum growth, and leveling off toward a horizontal carrying-capacity asymptote at y = c.", "xMin": -3, "xMax": 13, "yMin": 0, "yMax": 11, "unit": 32, "xLabel": "t", "yLabel": "f(t)", "lines": [{"y": 10, "dashed": true, "arrows": false}], "points": [{"at": [0, 1], "label": "(0, c/(1+a))"}, {"at": [3.66, 5], "label": "(ln(a)/b, c/2)"}], "texts": [{"at": [6.3, 10.4], "text": "Carrying capacity"}, {"at": [6.6, 4.4], "text": "Point of maximum growth", "anchor": "start"}, {"at": [-0.4, 2.2], "text": "Initial value", "anchor": "end"}], "curves": [{"kind": "logistic", "c": 10, "a": 9, "b": 0.6}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Logistic Growth.** The logistic growth model is

  $$f(t)=\tfrac{c}{1+ae^{-bt}}$$

  where

  - $\tfrac{c}{1+a}$ is the initial value
  - $c$ is the **carrying capacity**, or **limiting value**
  - $b$ is a constant determined by the rate of growth
{{< /callout >}}

**Example.** An influenza epidemic spreads through a population rapidly, at
a rate that depends on two factors: The more people who have the flu, the
more rapidly it spreads, and also the more uninfected people there are, the
more rapidly it spreads. These two factors make the logistic model a good
one to study the spread of communicable diseases. And, clearly, there is a
maximum value for the number of people infected: the entire population.

For example, at time $t=0$ there is one person in a community of 1,000
people who has the flu. So, in that community, at most 1,000 people can have
the flu. Researchers find that for this particular strain of the flu, the
logistic growth constant is $b=0.6030$. Estimate the number of people in
this community who will have had this flu after ten days. Predict how many
people in this community will have had this flu after a long period of time
has passed.

**Solution.** We substitute the given data into the logistic growth model

$$f(t)=\tfrac{c}{1+ae^{-bt}}$$

Because at most 1,000 people, the entire population of the community, can
get the flu, we know the limiting value is $c=1000$. To find $a$, we use the
formula that the number of cases at time $t=0$ is $\tfrac{c}{1+a}=1$, from
which it follows that $a=999$. This model predicts that, after ten days, the
number of people who have had the flu is
$f(t)=\tfrac{1000}{1+999e^{-0.6030x}}\approx293.8$. Because the actual
number must be a whole number (a person has either had the flu or not) we
round to 294. In the long term, the number of people who will contract the
flu is the limiting value, $c=1000$.

**Analysis.** Remember that, because we are dealing with a virus, we cannot
predict with certainty the number of people infected. The model only
approximates the number of people infected and will not give us exact or
actual values.

The graph below gives a good picture of how this model fits the data.

{{< apfigure kind="graph" >}}
{"ariaLabel": "The graph of f(t) = 1000/(1+999e^(-0.6030t)), an S-shaped logistic curve rising from 1 case on day 0, through 20 cases on day 5 and 294 cases on day 10, leveling off near a horizontal asymptote at 1000 cases by about day 21.", "xMin": 0, "xMax": 26, "yMin": 0, "yMax": 1100, "unit": 15, "yUnit": 0.5, "tickLabels": true, "yTickStep": 100, "xTickStep": 2, "xLabel": "Days", "yLabel": "Cases", "lines": [{"y": 1000, "dashed": true, "arrows": false, "label": "y = 1000"}], "points": [{"at": [0, 1], "label": "1 case of flu on day 0", "labelSide": "nw"}, {"at": [5, 20], "label": "20 cases on day 5"}, {"at": [10, 293.85], "label": "294 cases on day 10"}, {"at": [21, 996.85], "label": "1000 cases on day 21"}], "curves": [{"kind": "logistic", "c": 1000, "a": 999, "b": 0.603}]}
{{< /apfigure >}}

{{< fillin
  question="Using that same flu model, estimate the number of cases of flu on day 15."
  answer="895"
  answerDisplay="895 cases"
  hint="Evaluate $f(15)=\tfrac{1000}{1+999e^{-0.6030\cdot15}}$ and round to the nearest whole number."
>}}

## Choosing an Appropriate Model for Data

Now that we have discussed various mathematical models, we need to learn how
to choose the appropriate model for the raw data we have. Many factors
influence the choice of a mathematical model, among which are experience,
scientific laws, and patterns in the data itself. Not all data can be
described by elementary functions. Sometimes, a function is chosen that
approximates the data over a given interval. For instance, suppose data
were gathered on the number of homes bought in the United States from the
years 1960 to 2013. After plotting these data in a scatter plot, we notice
that the shape of the data from the years 2000 to 2013 follow a logarithmic
curve. We could restrict the interval from 2000 to 2010, apply regression
analysis using a logarithmic model, and use it to predict the number of home
buyers for the year 2015.

Three kinds of functions that are often useful in mathematical models are
linear functions, exponential functions, and logarithmic functions. If the
data lies on a straight line, or seems to lie approximately along a straight
line, a linear model may be best. If the data is non-linear, we often
consider an exponential or logarithmic model, though other models, such as
quadratic models, may also be considered.

In choosing between an exponential model and a logarithmic model, we look at
the way the data curves. This is called the concavity. If we draw a line
between two data points, and all (or most) of the data between those two
points lies above that line, we say the curve is concave down. We can think
of it as a bowl that bends downward and therefore cannot hold water. If all
(or most) of the data between those two points lies below the line, we say
the curve is concave up. In this case, we can think of a bowl that bends
upward and can therefore hold water. An exponential curve, whether rising or
falling, whether representing growth or decay, is always concave up away
from its horizontal asymptote. A logarithmic curve is always concave away
from its vertical asymptote. In the case of positive data, which is the
most common case, an exponential curve is always concave up, and a
logarithmic curve always concave down.

A logistic curve changes concavity. It starts out concave up and then
changes to concave down beyond a certain point, called a point of
inflection.

After using the graph to help us choose a type of function to use as a
model, we substitute points, and solve to find the parameters. We reduce
round-off error by choosing points as far apart as possible.

**Example.** Does a linear, exponential, logarithmic, or logistic model best
fit the values listed below? Find the model, and use a graph to check your
choice.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $y$ | $0$ | $1.386$ | $2.197$ | $2.773$ | $3.219$ | $3.584$ | $3.892$ | $4.159$ | $4.394$ |

**Solution.** First, plot the data on a graph as below. For the purpose of
graphing, round the data to two decimal places.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of the nine data points from the table, curving upward but leveling off, suggesting a logarithmic model.","xMin":0,"xMax":10,"yMin":0,"yMax":5.5,"unit":30,"tickLabels":true,"yTickStep":0.5,"points":[{"at":[1,0]},{"at":[2,1.386]},{"at":[3,2.197]},{"at":[4,2.773]},{"at":[5,3.219]},{"at":[6,3.584]},{"at":[7,3.892]},{"at":[8,4.159]},{"at":[9,4.394]}]}
{{< /apfigure >}}

Clearly, the points do not lie on a straight line, so we reject a linear
model. If we draw a line between any two of the points, most or all of the
points between those two points lie above the line, so the graph is concave
down, suggesting a logarithmic model. We can try $y=a\ln(bx)$. Plugging in
the first point, $(1,0)$, gives $0=a\ln b$. We reject the case that $a=0$
(if it were, all outputs would be 0), so we know $\ln(b)=0$. Thus $b=1$ and
$y=a\ln(x)$. Next we can use the point $(9,4.394)$ to solve for $a$:

$$
\begin{array}{lrcl}
& y &=& a\ln(x) \\[4pt]
& 4.394 &=& a\ln(9) \\[4pt]
& a &=& \tfrac{4.394}{\ln(9)}
\end{array}
$$

Because $a=\tfrac{4.394}{\ln(9)}\approx2$, an appropriate model for the data
is $y=2\ln(x)$.

To check the accuracy of the model, we graph the function together with the
given points below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = 2 ln(x), an increasing, concave-down logarithmic curve with a vertical asymptote at x = 0, passing closely through the nine data points from the table.","xMin":0,"xMax":10,"yMin":0,"yMax":5.5,"unit":30,"tickLabels":true,"yTickStep":0.5,"curves":[{"kind":"log","a":2,"from":0.02}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0"}],"points":[{"at":[1,0]},{"at":[2,1.386]},{"at":[3,2.197]},{"at":[4,2.773]},{"at":[5,3.219]},{"at":[6,3.584]},{"at":[7,3.892]},{"at":[8,4.159]},{"at":[9,4.394]}]}
{{< /apfigure >}}

We can conclude that the model is a good fit to the data.

Compare to the graph of $y=\ln\left(x^2\right)$ shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y = ln(x squared), for x greater than 0, appearing identical to the graph of y = 2 ln(x) and passing through the same nine data points.","xMin":0,"xMax":10,"yMin":0,"yMax":5.5,"unit":30,"tickLabels":true,"yTickStep":0.5,"curves":[{"kind":"log","a":2,"from":0.02}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0"}],"points":[{"at":[1,0]},{"at":[2,1.386]},{"at":[3,2.197]},{"at":[4,2.773]},{"at":[5,3.219]},{"at":[6,3.584]},{"at":[7,3.892]},{"at":[8,4.159]},{"at":[9,4.394]}]}
{{< /apfigure >}}

The graphs appear to be identical when $x>0$. A quick check confirms this
conclusion: $y=\ln\left(x^2\right)=2\ln(x)$ for $x>0$.

However, if $x<0$, the graph of $y=\ln\left(x^2\right)$ includes an "extra"
branch, as shown below. This occurs because, while $y=2\ln(x)$ cannot have
negative values in the domain (as such values would force the argument to
be negative), the function $y=\ln\left(x^2\right)$ can have negative domain
values.

{{< apfigure kind="graph" >}}
{"ariaLabel": "The graph of y = ln(x squared), symmetric about the y-axis with a vertical asymptote at x = 0: two branches, each rising from near the asymptote and curving upward and outward as x moves away from 0 in either direction.", "xMin": -10, "xMax": 10, "yMin": -3, "yMax": 6, "unit": 16, "tickLabels": true, "xTickStep": 2, "yTickStep": 2, "curves": [{"kind": "log", "a": 2, "from": 0.333, "to": 10}, {"kind": "log", "a": 2, "reflect": true, "from": -10, "to": -0.333}], "lines": [{"x": 0, "dashed": true, "arrows": false, "label": "x = 0"}]}
{{< /apfigure >}}

{{< fillin
  question="Does a linear, exponential, or logarithmic model best fit the data in the table below? Find the model."
  answer="2e^{0.5x}"
  answerDisplay="$y=2e^{0.5x}$"
  hint="Check whether consecutive $y$-values share a common ratio; if so, the model is exponential, $y=ab^x$."
>}}

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $y$ | $3.297$ | $5.437$ | $8.963$ | $14.778$ | $24.365$ | $40.172$ | $66.231$ | $109.196$ | $180.034$ |

## Expressing an Exponential Model in Base $e$

While powers and logarithms of any base can be used in modeling, the two
most common bases are $10$ and $e$. In science and mathematics, the base $e$
is often preferred. We can use laws of exponents and laws of logarithms to
change any base to base $e$.

{{< callout type="info" >}}
  **How to: given a model with the form $y=ab^x$, change it to the form
  $y=A_0e^{kx}$.**

  1. Rewrite $y=ab^x$ as $y=ae^{\ln\left(b^x\right)}$.
  2. Use the power rule of logarithms to rewrite $y$ as
     $y=ae^{x\ln(b)}=ae^{\ln(b)x}$.
  3. Note that $a=A_0$ and $k=\ln(b)$ in the equation $y=A_0e^{kx}$.
{{< /callout >}}

**Example.** Change the function $y=2.5(3.1)^x$ so that this same function
is written in the form $y=A_0e^{kx}$.

**Solution.** The formula is derived as follows

$$
\begin{array}{lrcl}
& y &=& 2.5(3.1)^x \\[4pt]
\text{Insert exponential and its inverse.} & &=& 2.5e^{\ln\left(3.1^x\right)} \\[4pt]
\text{Laws of logs.} & &=& 2.5e^{x\ln3.1} \\[4pt]
\text{Commutative law of multiplication.} & &=& 2.5e^{(\ln3.1)x}
\end{array}
$$

{{< fillin
  question="Change the function $y=3(0.5)^x$ to one having $e$ as the base."
  answer="3e^{(\ln0.5)x}"
  answerForm="base-e"
  answerDisplay="$y=3e^{(\ln0.5)x}$"
  hint="Rewrite $0.5^x$ as $e^{\ln\left(0.5^x\right)}$, then apply the power rule of logarithms."
>}}

## Key equations

| Half-life formula | If $A=A_0e^{kt}$, $k<0$, the half-life is $t=-\tfrac{\ln(2)}{k}$. |
| :--- | :--- |
| Carbon-14 dating | $t=\tfrac{\ln\left(\tfrac{A}{A_0}\right)}{-0.000121}$; $A_0$ is the amount of carbon-14 when the plant or animal died, $A$ is the amount of carbon-14 remaining today, and $t$ is the age of the fossil in years |
| Doubling time formula | If $A=A_0e^{kt}$, $k>0$, the doubling time is $t=\tfrac{\ln2}{k}$ |
| Newton's Law of Cooling | $T(t)=Ae^{kt}+T_s$, where $T_s$ is the ambient temperature, $A=T(0)-T_s$, and $k$ is the continuous rate of cooling |

## Key concepts

- The basic exponential function is $f(x)=ab^x$. If $b>1$, we have
  exponential growth; if $0<b<1$, we have exponential decay.
- We can also write this formula in terms of continuous growth as
  $A=A_0e^{kx}$, where $A_0$ is the starting value. If $A_0$ is positive,
  then we have exponential growth when $k>0$ and exponential decay when
  $k<0$.
- In general, we solve problems involving exponential growth or decay in two
  steps. First, we set up a model and use the model to find the parameters.
  Then we use the formula with these parameters to predict growth and decay.
- We can find the age, $t$, of an organic artifact by measuring the amount,
  $k$, of carbon-14 remaining in the artifact and using the formula
  $t=\tfrac{\ln(k)}{-0.000121}$ to solve for $t$.
- Given a substance's doubling time or half-time, we can find a function
  that represents its exponential growth or decay.
- We can use Newton's Law of Cooling to find how long it will take for a
  cooling object to reach a desired temperature, or to find what temperature
  an object will be after a given time.
- We can use logistic growth functions to model real-world situations where
  the rate of growth changes over time, such as population growth, spread of
  disease, and spread of rumors.
- We can use real-world data gathered over time to observe trends. Knowledge
  of linear, exponential, logarithmic, and logistic graphs help us to
  develop models that best fit our data.
- Any exponential function with the form $y=ab^x$ can be rewritten as an
  equivalent exponential function with the form $y=A_0e^{kx}$ where
  $k=\ln b$.

## Practice

### Model exponential growth and decay

{{< multiplechoice
  question="With what kind of exponential model would half-life be associated?"
  answer="exponential decay"
  hint="Half-life measures how long it takes an amount to fall to half its original value."
>}}
exponential growth
exponential decay
{{< /multiplechoice >}}

{{< fillin
  question="The half-life of Erbium-165 is 10.4 hours. What is the hourly decay rate? Express the decimal result to four decimal places."
  answer="-0.0666"
  answerForm="decimal"
  answerDisplay="$-0.0666$"
  hint="Solve $\tfrac12=e^{k\cdot10.4}$ for $k$ using $k=-\tfrac{\ln(2)}{10.4}$."
>}}

{{< fillin
  question="For that same Erbium-165 half-life, express the hourly decay rate as a percentage, to two decimal places."
  answer="-6.66\%"
  answerForm="percent"
  answerDisplay="$-6.66\%$"
  hint="Convert the decimal decay rate you just found to a percentage."
>}}

{{< fillin
  question="A research student is working with a culture of bacteria that doubles in size every twenty minutes. The initial population count was 1350 bacteria. Rounding to five decimal places, write an exponential equation, in minutes, representing this situation."
  answer="1350e^{0.03466t}"
  answerDisplay="$f(t)=1350e^{0.03466t}$"
  hint="Use the doubling-time formula $t=\tfrac{\ln2}{k}$ with a doubling time of 20 minutes to solve for $k$."
>}}

{{< fillin
  question="To the nearest whole number, what is that same bacteria population's size after 3 hours?"
  answer="691200"
  answerForm="decimal"
  answerDisplay="$691{,}200$"
  hint="Evaluate the equation at $t=180$ minutes."
>}}

{{< fillin
  question="A tumor is injected with 0.5 grams of Iodine-125, which has a decay rate of 1.15% per day. To the nearest day, how long will it take for half of the Iodine-125 to decay?"
  answer="60"
  answerForm="decimal"
  answerDisplay="60 days"
  hint="Solve $\tfrac12=e^{kt}$ for $t$ with $k=-0.0115$."
>}}

### Use Newton's Law of Cooling

{{< fillin
  question="A turkey is taken out of the oven with an internal temperature of 165°F and is allowed to cool in a 75°F room. After half an hour, the internal temperature of the turkey is 145°F. Write a formula, T(t), that models this situation, with t in minutes."
  answer="90e^{-0.008377t}+75"
  answerDisplay="$T(t)=90e^{-0.008377t}+75$"
  hint="Set $T_s=75$ and $A=165-75=90$, then use $T(30)=145$ to solve for $k$."
>}}

{{< fillin
  question="Using that same turkey's cooling model, to the nearest minute, how long will it take the turkey to cool to 110°F?"
  answer="113"
  answerDisplay="113 minutes"
  hint="Solve $T(t)=110$ for $t$ using $T(t)=90e^{-0.008377t}+75$."
>}}

{{< fillin
  question="A pot of warm soup with an internal temperature of 100° Fahrenheit was taken off the stove to cool in a 69° F room. After fifteen minutes, the internal temperature of the soup was 95° F. To the nearest minute, how long will it take the soup to cool to 80° F?"
  answer="88"
  answerDisplay="88 minutes"
  hint="Set $T_s=69$ and $A=100-69=31$, use $T(15)=95$ to find $k$, then solve $T(t)=80$ for $t$."
>}}

### Use logistic-growth models

{{< fillin
  question="The population of a fish farm in $t$ years is modeled by the equation $P(t)=\tfrac{1000}{1+9e^{-0.6t}}$. To the nearest tenth, what is the doubling time for the fish population?"
  answer="1.4"
  answerForm="decimal"
  answerDisplay="1.4 years"
  hint="Find $P(0)$, then solve $P(t)=2P(0)$ for $t$."
>}}

{{< fillin
  question="Using that same fish population model, to the nearest tenth, how long will it take for the population to reach 900?"
  answer="7.3"
  answerForm="decimal"
  answerDisplay="7.3 years"
  hint="Solve $\tfrac{1000}{1+9e^{-0.6t}}=900$ for $t$."
>}}

A different logistic growth model is given by $f(x)=\tfrac{150}{1+8e^{-2x}}$.

{{< fillin
  question="For that model, find the carrying capacity."
  answer="150"
  hint="The carrying capacity is the constant $c$ in $f(x)=\tfrac{c}{1+ae^{-bx}}$ — the value the population approaches as $x$ grows without bound, not an evaluated point."
>}}

{{< fillin
  question="The equation $p(t)=\tfrac{500}{1+49e^{-0.7t}}$ models the number of people in a town who have heard a rumor after $t$ days. To the nearest whole number, how many people will have heard the rumor after 3 days?"
  answer="71"
  answerForm="decimal"
  answerDisplay="71 people"
  hint="Evaluate $p(3)$ and round to the nearest whole number."
>}}

### Choose an appropriate model for data

{{< multiplechoice
  question="A graphing calculator scatter plot of the data below rises steeply at first, then levels off, always increasing. Does the data best fit a linear, exponential, or logarithmic model?"
  answer="logarithmic"
  hint="Check whether the curve is concave down, always rising but by smaller and smaller amounts."
>}}
linear
exponential
logarithmic
{{< /multiplechoice >}}

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | $2$ | $4.079$ | $5.296$ | $6.159$ | $6.828$ | $7.375$ | $7.838$ | $8.238$ | $8.592$ | $8.908$ |

{{< multiplechoice
  question="Determine whether the data from the table below could best be represented as a function that is linear, exponential, or logarithmic."
  answer="exponential"
  hint="Check whether consecutive $f(x)$-values share a common ratio."
>}}
linear
exponential
logarithmic
{{< /multiplechoice >}}

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | $0.694$ | $0.833$ | $1$ | $1.2$ | $1.44$ | $1.728$ | $2.074$ | $2.488$ |

{{< fillin
  question="Write a formula for a model that represents that same data."
  answer="1.2^x"
  answerDisplay="$f(x)=1.2^x$"
  hint="Since the $f(x)$-values share a common ratio, the model is exponential; use $f(0)$ for the leading coefficient and the common ratio for the base."
>}}

### Express an exponential model in base $e$

{{< fillin
  question="A doctor prescribes 125 milligrams of a therapeutic drug that decays by about 30% each hour. Write the continuous hourly rate $k$ in the exponential model $A=125e^{kt}$, to four decimal places."
  answer="-0.3567"
  answerForm="decimal"
  answerDisplay="$k\approx-0.3567$"
  hint="A 30% hourly decay means each hour multiplies the amount by 0.70, so $e^{k}=0.70$."
>}}

{{< fillin
  question="Using that same drug model, find the amount of the drug that would remain in the patient's system after 3 hours. Round to the nearest milligram."
  answer="43"
  answerDisplay="43 mg"
  hint="Evaluate $A=125e^{-0.3567\cdot3}$."
>}}

{{< fillin
  question="To prove the identity $b^x=e^{x\ln(b)}$ for positive $b\ne1$, start from $y=b^x$ and take the natural logarithm of both sides: $\ln(y)=$ ____."
  answer="x\ln(b)"
  answerDisplay="$x\ln(b)$"
  hint="Apply the power rule of logarithms to $\ln\left(b^x\right)$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 4.7: Exponential and Logarithmic Models](https://openstax.org/books/precalculus-2e/pages/4-7-exponential-and-logarithmic-models) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: excluded a "coreq-skills" block present in the pinned CNXML module (a corequisite-course skills review covering compound interest, exponential growth/decay applications, decibel levels, and the Richter scale, with its own short exercise set) that does not appear in the printed Precalculus 2e text — pages 494–495 of the source PDF confirm the printed section runs directly from the chapter introduction into "Modeling Exponential Growth and Decay," with no corequisite-skills material between them; omitted the decorative nuclear-reactor photograph, which carries no mathematics; omitted the section's five Media links to external graphing-calculator resources; recreated every graph as an accessible inline SVG — the labeled-points growth curve $y=2e^{3x}$ and decay curve $y=3e^{-2x}$; the generic growth/decay panels of $y=A_0e^{kt}$ (drawn with concrete $A_0=2$, $k=\pm1$ so the curves are plottable, keeping the source's own symbolic point labels, which name the high point and low point of each panel rather than literal coordinates); the bacteria-growth curve $y=10e^{(\ln2)t}$, labeled by its equivalent simplified form $y=10\cdot2^t$; the generic logistic S-curve with its carrying-capacity asymptote, initial-value point, and point-of-maximum-growth point; the flu-epidemic logistic curve $f(t)=\tfrac{1000}{1+999e^{-0.6030t}}$ with its four data-point annotations; the nine-point scatter plot of Table 1; the logarithmic curve $y=2\ln(x)$ and the identical-looking $y=\ln(x^2)$ over $x>0$, each overlaid with the same nine data points; and the full two-branch graph of $y=\ln(x^2)$ showing the extra branch for $x<0$. The generic logistic S-curve, the flu-epidemic logistic curve, and the left-hand ($x<0$) branch of $y=\ln(x^2)$ are each drawn from their exact closed-form equation by an analytic primitive: this authoring pass added a `logistic` curve kind and a `reflect` option on the `log` curve to `graph-core.mjs`, which previously had neither, so all three had to be hand-sampled as dense point lists. Presented the compound-model comparison table (Try It data) and Table 1/Table 2 data as Markdown tables; renamed the rumor model's population function from the source's $N(t)$ to $p(t)$, since $N$ is reserved by this project's compute engine for numeric evaluation; converted the "Try It" practice problems into interactive exercises with instant feedback — a fill-in for the plutonium-244 half-life function, a multiple-choice plus fill-in for the cesium-137 comparison (splitting the source's combined "which, and what is the exact value" answer into a categorical choice and a decimal value), a fill-in for the three-year Moore's-Law doubling function, a fill-in for the pitcher-of-water cooling time, a fill-in for the day-15 flu estimate, a fill-in for the data-table exponential model, and a fill-in for the base-$e$ conversion of $y=3(0.5)^x$; and adapted eighteen selected end-of-section exercises with an answer present in the CNXML solution key — a half-life verbal identification, the Erbium-165 hourly decay rate (split into its decimal and percentage parts), the twenty-minute bacteria-doubling model and its three-hour population, the Iodine-125 half-life, the turkey and soup Newton's-Law-of-Cooling problems, the fish-farm logistic doubling time and time-to-900, a separate logistic carrying-capacity identification, the town-rumor logistic evaluation, two Technology-section model-classification tables, and the drug-decay base-$e$ conversion together with its three-hour evaluation and the general $b^x=e^{x\ln(b)}$ identity — into nineteen interactive components in a closing Practice block, one group per objective.</small>
