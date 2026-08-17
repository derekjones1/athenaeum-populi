---
title: Fitting Exponential Models to Data
description: >-
  Building exponential, logarithmic, and logistic models by regression on
  real-world data, reading the correlation coefficient as a goodness-of-fit
  measure, and using each model to interpolate and extrapolate predictions —
  adapted from OpenStax Precalculus 2e, Section 4.8.
source_section: "4.8"
weight: 8
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Build an exponential model from data
- Build a logarithmic model from data
- Build a logistic model from data
{{< /callout >}}

In previous sections of this chapter, we were either given a function
explicitly to graph or evaluate, or we were given a set of points that were
guaranteed to lie on the curve. Then we used algebra to find the equation
that fit the points exactly. In this section, we use a modeling technique
called *regression analysis* to find a curve that models data collected from
real-world observations. With regression analysis, we don't expect all the
points to lie perfectly on the curve. The idea is to find a model that best
fits the data. Then we use the model to make predictions about future
events.

Do not be confused by the word *model*. In mathematics, we often use the
terms *function*, *equation*, and *model* interchangeably, even though they
each have their own formal definition. The term *model* is typically used to
indicate that the equation or function approximates a real-world situation.

We will concentrate on three types of regression models in this section:
exponential, logarithmic, and logistic. Having already worked with each of
these functions gives us an advantage. Knowing their formal definitions, the
behavior of their graphs, and some of their real-world applications gives us
the opportunity to deepen our understanding. As each regression model is
presented, key features and definitions of its associated function are
included for review. Take a moment to rethink each of these functions,
reflect on the work we've done so far, and then explore the ways regression
is used to model real-world phenomena.

## Building an Exponential Model from Data

As we've learned, there are a multitude of situations that can be modeled by
exponential functions, such as investment growth, radioactive decay,
atmospheric pressure changes, and temperatures of a cooling object. What do
these phenomena have in common? For one thing, all the models either
increase or decrease as time moves forward. But that's not the whole story.
It's the *way* data increase or decrease that helps us determine whether it
is best modeled by an exponential equation. Knowing the behavior of
exponential functions in general allows us to recognize when to use
exponential regression, so let's review exponential growth and decay.

Recall that exponential functions have the form $y=ab^x$ or $y=A_0e^{kx}$.
When performing regression analysis, we use the form most commonly used on
graphing utilities, $y=ab^x$. Take a moment to reflect on the characteristics
we've already learned about the exponential function $y=ab^x$ (assume
$a>0$):

- $b$ must be greater than zero and not equal to one.
- The initial value of the model is $y=a$.
  - If $b>1$, the function models exponential growth. As $x$ increases, the
    outputs of the model increase slowly at first, but then increase more
    and more rapidly, without bound.
  - If $0<b<1$, the function models exponential decay. As $x$ increases, the
    outputs for the model decrease rapidly at first and then level off to
    become asymptotic to the $x$-axis. In other words, the outputs never
    become equal to or less than zero.

As part of the results, your calculator will display a number known as the
*correlation coefficient*, labeled by the variable $r$, or $r^2$. (You may
have to change the calculator's settings for these to be shown.) The values
are an indication of the "goodness of fit" of the regression equation to the
data. We more commonly use the value of $r^2$ instead of $r$, but the closer
either value is to 1, the better the regression equation approximates the
data.

{{< callout type="info" >}}
  **Exponential Regression.** *Exponential regression* is used to model
  situations in which growth begins slowly and then accelerates rapidly
  without bound, or where decay begins rapidly and then slows down to get
  closer and closer to zero. We use the command "ExpReg" on a graphing
  utility to fit an exponential function to a set of data points. This
  returns an equation of the form

  $$y=ab^x$$

  Note that:

  - $b$ must be non-negative.
  - when $b>1$, we have an exponential growth model.
  - when $0<b<1$, we have an exponential decay model.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a set of data, perform exponential regression using a
  graphing utility.

  1. Use the STAT then EDIT menu to enter given data.
     1. Clear any existing data from the lists.
     2. List the input values in the L1 column.
     3. List the output values in the L2 column.
  2. Graph and observe a scatter plot of the data using the STATPLOT
     feature.
     1. Use ZOOM [9] to adjust axes to fit the data.
     2. Verify the data follow an exponential pattern.
  3. Find the equation that models the data.
     1. Select "ExpReg" from the STAT then CALC menu.
     2. Use the values returned for $a$ and $b$ to record the model,
        $y=ab^x$.
  4. Graph the model in the same window as the scatterplot to verify it is a
     good fit for the data.
{{< /callout >}}

**Example.** In 2007, a university study was published investigating the
crash risk of alcohol impaired driving. Data from 2,871 crashes were used to
measure the association of a person's blood alcohol level (BAC) with the
risk of being in an accident. The table below shows results from the study.
The *relative risk* is a measure of how many times more likely a person is
to crash. So, for example, a person with a BAC of $0.09$ is $3.54$ times as
likely to crash as a person who has not been drinking alcohol.

| BAC | 0 | 0.01 | 0.03 | 0.05 | 0.07 | 0.09 | 0.11 | 0.13 | 0.15 | 0.17 | 0.19 | 0.21 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Relative Risk of Crashing | 1 | 1.03 | 1.06 | 1.38 | 2.09 | 3.54 | 6.41 | 12.6 | 22.1 | 39.05 | 65.32 | 99.78 |

1. Let $x$ represent the BAC level, and let $y$ represent the corresponding
   relative risk. Use exponential regression to fit a model to these data.
2. After 6 drinks, a person weighing 160 pounds will have a BAC of about
   $0.16$. How many times more likely is a person with this weight to crash
   if they drive after having a 6-pack of beer? Round to the nearest
   hundredth.

**Solution.**

1. Using the STAT then EDIT menu on a graphing utility, list the BAC values
   in L1 and the relative risk values in L2. Then use the STATPLOT feature
   to verify that the scatterplot follows the exponential pattern shown
   below:

   {{< apfigure kind="graph" >}}
   {"ariaLabel":"A scatter plot of blood alcohol level (BAC) from 0 to 0.21 against relative risk of crashing from 1 to about 100. The points hug the x-axis at low BAC values and rise sharply near the right edge, an exponential shape.","xMin":0,"xMax":0.22,"yMin":0,"yMax":110,"xUnit":1450,"yUnit":3,"grid":false,"xTickStep":0.02,"xTickGrouping":false,"yTickStep":10,"tickLabels":true,"xLabel":"x","yLabel":"y","points":[{"at":[0,1]},{"at":[0.01,1.03]},{"at":[0.03,1.06]},{"at":[0.05,1.38]},{"at":[0.07,2.09]},{"at":[0.09,3.54]},{"at":[0.11,6.41]},{"at":[0.13,12.6]},{"at":[0.15,22.1]},{"at":[0.17,39.05]},{"at":[0.19,65.32]},{"at":[0.21,99.78]}]}
   {{< /apfigure >}}

   Use the "ExpReg" command from the STAT then CALC menu to obtain the
   exponential model,

   $$y=0.58304829(2.20720213\text{E}10)^x$$

   Converting from scientific notation, we have:

   $$y=0.58304829(22{,}072{,}021{,}300)^x$$

   Notice that $r^2\approx0.97$ which indicates the model is a good fit to
   the data. To see this, graph the model in the same window as the
   scatterplot to verify it is a good fit, as shown below:

   {{< apfigure kind="graph" >}}
   {"ariaLabel":"The same scatter plot with the fitted exponential curve drawn through it, rising slowly at first and then sharply toward the upper right, passing close to nearly every plotted point.","xMin":0,"xMax":0.22,"yMin":0,"yMax":110,"xUnit":1450,"yUnit":3,"grid":false,"xTickStep":0.02,"xTickGrouping":false,"yTickStep":10,"tickLabels":true,"xLabel":"x","yLabel":"y","points":[{"at":[0,1]},{"at":[0.01,1.03]},{"at":[0.03,1.06]},{"at":[0.05,1.38]},{"at":[0.07,2.09]},{"at":[0.09,3.54]},{"at":[0.11,6.41]},{"at":[0.13,12.6]},{"at":[0.15,22.1]},{"at":[0.17,39.05]},{"at":[0.19,65.32]},{"at":[0.21,99.78]}],"curves":[{"kind":"exp","a":0.58304829,"b":22072021300}]}
   {{< /apfigure >}}

2. Use the model to estimate the risk associated with a BAC of $0.16$.
   Substitute $0.16$ for $x$ in the model and solve for $y$.

   $$
   \begin{array}{lrcl}
   & y &=& 0.58304829(22{,}072{,}021{,}300)^x \\[4pt]
   \text{Substitute }0.16\text{ for }x. & &=& 0.58304829(22{,}072{,}021{,}300)^{0.16} \\[4pt]
   \text{Round to the nearest hundredth.} & &\approx& 26.35
   \end{array}
   $$

   If a 160-pound person drives after having 6 drinks, they are about $26.35$
   times more likely to crash than if driving while sober.

The table below shows a recent graduate's credit card balance each month
after graduation.

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Debt ($) | 620.00 | 761.88 | 899.80 | 1,039.93 | 1,270.63 | 1,589.04 | 1,851.31 | 2,154.92 |

{{< fillin
  question="Use exponential regression to fit a model to that data, letting $x$ be the month number."
  answer="522.88585984(1.19645256)^x"
  answerDisplay="$y=522.88585984(1.19645256)^x$"
  hint="Enter the month in L1 and the debt in L2, then run ExpReg to find $a$ and $b$ for $y=ab^x$."
>}}

{{< fillin
  question="If spending continues at this rate, what will the graduate's credit card debt be one year (month 12) after graduating?"
  answer="4499.38"
  answerDisplay="\$4,499.38"
  hint="Evaluate the model you just found at $x=12$."
>}}

{{< callout type="info" >}}
  **Q&A.** *Is it reasonable to assume that an exponential regression model
  will represent a situation indefinitely?*

  *No. Remember that models are formed by real-world data gathered for
  regression. It is usually reasonable to make estimates within the
  interval of original observation (interpolation). However, when a model
  is used to make predictions, it is important to use reasoning skills to
  determine whether the model makes sense for inputs far beyond the
  original observation interval (extrapolation).*
{{< /callout >}}

## Building a Logarithmic Model from Data

Just as with exponential functions, there are many real-world applications
for logarithmic functions: intensity of sound, pH levels of solutions,
yields of chemical reactions, production of goods, and growth of infants. As
with exponential models, data modeled by logarithmic functions are either
always increasing or always decreasing as time moves forward. Again, it is
the *way* they increase or decrease that helps us determine whether a
logarithmic model is best.

Recall that logarithmic functions increase or decrease rapidly at first, but
then steadily slow as time moves on. By reflecting on the characteristics
we've already learned about this function, we can better analyze real world
situations that reflect this type of growth or decay. When performing
logarithmic regression analysis, we use the form of the logarithmic function
most commonly used on graphing utilities, $y=a+b\ln(x)$. For this function

- All input values, $x$, must be greater than zero.
- The point $(1,a)$ is on the graph of the model.
- If $b>0$, the model is increasing. Growth increases rapidly at first and
  then steadily slows over time.
- If $b<0$, the model is decreasing. Decay occurs rapidly at first and then
  steadily slows over time.

{{< callout type="info" >}}
  **Logarithmic Regression.** *Logarithmic regression* is used to model
  situations where growth or decay accelerates rapidly at first and then
  slows over time. We use the command "LnReg" on a graphing utility to fit
  a logarithmic function to a set of data points. This returns an equation
  of the form,

  $$y=a+b\ln(x)$$

  Note that

  - all input values, $x$, must be non-negative.
  - when $b>0$, the model is increasing.
  - when $b<0$, the model is decreasing.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a set of data, perform logarithmic regression using a
  graphing utility.

  1. Use the STAT then EDIT menu to enter given data.
     1. Clear any existing data from the lists.
     2. List the input values in the L1 column.
     3. List the output values in the L2 column.
  2. Graph and observe a scatter plot of the data using the STATPLOT
     feature.
     1. Use ZOOM [9] to adjust axes to fit the data.
     2. Verify the data follow a logarithmic pattern.
  3. Find the equation that models the data.
     1. Select "LnReg" from the STAT then CALC menu.
     2. Use the values returned for $a$ and $b$ to record the model,
        $y=a+b\ln(x)$.
  4. Graph the model in the same window as the scatterplot to verify it is a
     good fit for the data.
{{< /callout >}}

**Example.** Due to advances in medicine and higher standards of living,
life expectancy has been increasing in most developed countries since the
beginning of the 20th century.

The table below shows the average life expectancies, in years, of Americans
from 1900–2010.

| Year | 1900 | 1910 | 1920 | 1930 | 1940 | 1950 | 1960 | 1970 | 1980 | 1990 | 2000 | 2010 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Life Expectancy (Years) | 47.3 | 50.0 | 54.1 | 59.7 | 62.9 | 68.2 | 69.7 | 70.8 | 73.7 | 75.4 | 76.8 | 78.7 |

1. Let $x$ represent time in decades starting with $x=1$ for the year 1900,
   $x=2$ for the year 1910, and so on. Let $y$ represent the corresponding
   life expectancy. Use logarithmic regression to fit a model to these
   data.
2. Use the model to predict the average American life expectancy for the
   year 2030.

**Solution.**

1. Using the STAT then EDIT menu on a graphing utility, list the years
   using values 1–12 in L1 and the corresponding life expectancy in L2.
   Then use the STATPLOT feature to verify that the scatterplot follows a
   logarithmic pattern, as shown below:

   {{< apfigure kind="graph" >}}
   {"ariaLabel":"A scatter plot of decade number, 1 through 12, against life expectancy in years, rising quickly between decades 1 and 5 and then leveling off toward decade 12, a logarithmic shape.","xMin":0,"xMax":13,"yMin":40,"yMax":85,"xUnit":28,"yUnit":8,"grid":false,"xTickStep":1,"yTickStep":5,"tickLabels":true,"xLabel":"x","yLabel":"y","points":[{"at":[1,47.3]},{"at":[2,50.0]},{"at":[3,54.1]},{"at":[4,59.7]},{"at":[5,62.9]},{"at":[6,68.2]},{"at":[7,69.7]},{"at":[8,70.8]},{"at":[9,73.7]},{"at":[10,75.4]},{"at":[11,76.8]},{"at":[12,78.7]}]}
   {{< /apfigure >}}

   Use the "LnReg" command from the STAT then CALC menu to obtain the
   logarithmic model,

   $$y=42.52722583+13.85752327\ln(x)$$

   Next, graph the model in the same window as the scatterplot to verify it
   is a good fit, as shown below:

   {{< apfigure kind="graph" >}}
   {"ariaLabel":"The same scatter plot with the fitted logarithmic curve drawn through it, rising steeply near decade 1 and then leveling off gradually toward decade 12, passing close to nearly every plotted point.","xMin":0,"xMax":13,"yMin":40,"yMax":85,"xUnit":28,"yUnit":8,"grid":false,"xTickStep":1,"yTickStep":5,"tickLabels":true,"xLabel":"x","yLabel":"y","points":[{"at":[1,47.3]},{"at":[2,50.0]},{"at":[3,54.1]},{"at":[4,59.7]},{"at":[5,62.9]},{"at":[6,68.2]},{"at":[7,69.7]},{"at":[8,70.8]},{"at":[9,73.7]},{"at":[10,75.4]},{"at":[11,76.8]},{"at":[12,78.7]}],"curves":[{"kind":"log","a":13.85752327,"k":42.52722583}]}
   {{< /apfigure >}}

2. To predict the life expectancy of an American in the year 2030,
   substitute $x=14$ for the decade in the model and solve for $y$:

   $$
   \begin{array}{lrcl}
   & y &=& 42.52722583+13.85752327\ln(x) \\[4pt]
   \text{Substitute }14\text{ for }x. & &=& 42.52722583+13.85752327\ln(14) \\[4pt]
   \text{Round to the nearest tenth.} & &\approx& 79.1
   \end{array}
   $$

   If life expectancy continues to increase at this pace, the average life
   expectancy of an American will be $79.1$ by the year 2030.

Sales of a video game released in the year 2000 took off at first, but then
steadily slowed as time moved on. The table below shows the number of games
sold, in thousands, from the years 2000–2010.

| Year | 2000 | 2001 | 2002 | 2003 | 2004 | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Number Sold (Thousands) | 142 | 149 | 154 | 155 | 159 | 161 | 163 | 164 | 164 | 166 | 167 |

{{< fillin
  question="Let $x$ represent time in years starting with $x=1$ for the year 2000, and let $y$ represent the number of games sold in thousands. Use logarithmic regression to fit a model to that data."
  answer="141.91242949+10.45366573\ln(x)"
  answerDisplay="$y=141.91242949+10.45366573\ln(x)$"
  hint="Enter the year number in L1 and the thousands sold in L2, then run LnReg to find $a$ and $b$ for $y=a+b\ln(x)$."
>}}

{{< fillin
  question="If games continue to sell at this rate, how many games will sell in the year 2015 ($x=16$)? Round to the nearest thousand."
  answer="171000"
  answerDisplay="171,000 games"
  hint="Evaluate the model you just found at $x=16$, then round the result (in thousands) to the nearest whole thousand."
>}}

## Building a Logistic Model from Data

Like exponential and logarithmic growth, logistic growth increases over
time. One of the most notable differences with logistic growth models is
that, at a certain point, growth steadily slows and the function approaches
an upper bound, or *limiting value*. Because of this, logistic regression is
best for modeling phenomena where there are limits in expansion, such as
availability of living space or nutrients.

It is worth pointing out that logistic functions actually model
resource-limited exponential growth. There are many examples of this type
of growth in real-world situations, including population growth and spread
of disease, rumors, and even stains in fabric. When performing logistic
regression analysis, we use the form most commonly used on graphing
utilities:

$$y=\frac{c}{1+ae^{-bx}}$$

Recall that:

- $\tfrac{c}{1+a}$ is the initial value of the model.
- when $b>0$, the model increases rapidly at first until it reaches its
  point of maximum growth rate, $\left(\tfrac{\ln(a)}{b},\tfrac{c}{2}\right)$.
  At that point, growth steadily slows and the function becomes asymptotic
  to the upper bound $y=c$.
- $c$ is the limiting value, sometimes called the *carrying capacity*, of
  the model.

{{< callout type="info" >}}
  **Logistic Regression.** *Logistic regression* is used to model
  situations where growth accelerates rapidly at first and then steadily
  slows to an upper limit. We use the command "Logistic" on a graphing
  utility to fit a logistic function to a set of data points. This returns
  an equation of the form

  $$y=\frac{c}{1+ae^{-bx}}$$

  Note that

  - The initial value of the model is $\tfrac{c}{1+a}$.
  - Output values for the model grow closer and closer to $y=c$ as time
    increases.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a set of data, perform logistic regression using a
  graphing utility.

  1. Use the STAT then EDIT menu to enter given data.
     1. Clear any existing data from the lists.
     2. List the input values in the L1 column.
     3. List the output values in the L2 column.
  2. Graph and observe a scatter plot of the data using the STATPLOT
     feature.
     1. Use ZOOM [9] to adjust axes to fit the data.
     2. Verify the data follow a logistic pattern.
  3. Find the equation that models the data.
     1. Select "Logistic" from the STAT then CALC menu.
     2. Use the values returned for $a$, $b$, and $c$ to record the model,
        $y=\tfrac{c}{1+ae^{-bx}}$.
  4. Graph the model in the same window as the scatterplot to verify it is a
     good fit for the data.
{{< /callout >}}

**Example.** Mobile telephone service has increased rapidly in America
since the mid 1990s. Today, almost all residents have cellular service. The
table below shows the percentage of Americans with cellular service between
the years 1995 and 2012.

| Year | 1995 | 1996 | 1997 | 1998 | 1999 | 2000 | 2001 | 2002 | 2003 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Americans with Cellular Service (%) | 12.69 | 16.35 | 20.29 | 25.08 | 30.81 | 38.75 | 45.00 | 49.16 | 55.15 |

| Year | 2004 | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Americans with Cellular Service (%) | 62.852 | 68.63 | 76.64 | 82.47 | 85.68 | 89.14 | 91.86 | 95.28 | 98.17 |

1. Let $x$ represent time in years starting with $x=0$ for the year 1995.
   Let $y$ represent the corresponding percentage of residents with
   cellular service. Use logistic regression to fit a model to these data.
2. Use the model to calculate the percentage of Americans with cell service
   in the year 2013. Round to the nearest tenth of a percent.
3. Discuss the value returned for the upper limit, $c$. What does this tell
   you about the model? What would the limiting value be if the model were
   exact?

**Solution.**

1. Using the STAT then EDIT menu on a graphing utility, list the years
   using values 0–17 in L1 and the corresponding percentage in L2. Then use
   the STATPLOT feature to verify that the scatterplot follows a logistic
   pattern, as shown below:

   {{< apfigure kind="graph" >}}
   {"ariaLabel":"A scatter plot of years since 1995, 0 through 17, against the percentage of Americans with cellular service, rising slowly at first, then steeply through the middle years, then leveling off as it approaches 100 percent, an S-shaped pattern.","xMin":0,"xMax":20,"yMin":0,"yMax":110,"xUnit":18,"yUnit":3.2,"grid":false,"xTickStep":1,"xTickGrouping":false,"yTickStep":10,"tickLabels":true,"xLabel":"x","yLabel":"y","points":[{"at":[0,12.69]},{"at":[1,16.35]},{"at":[2,20.29]},{"at":[3,25.08]},{"at":[4,30.81]},{"at":[5,38.75]},{"at":[6,45.00]},{"at":[7,49.16]},{"at":[8,55.15]},{"at":[9,62.852]},{"at":[10,68.63]},{"at":[11,76.64]},{"at":[12,82.47]},{"at":[13,85.68]},{"at":[14,89.14]},{"at":[15,91.86]},{"at":[16,95.28]},{"at":[17,98.17]}]}
   {{< /apfigure >}}

   Use the "Logistic" command from the STAT then CALC menu to obtain the
   logistic model,

   $$y=\frac{105.7379526}{1+6.88328979e^{-0.2595440013x}}$$

   Next, graph the model in the same window as the scatterplot to verify it
   is a good fit, as shown below:

   {{< apfigure kind="graph" >}}
   {"ariaLabel": "The same scatter plot with the fitted logistic curve drawn through it, an S-shaped curve rising slowly at first, steeply through the middle years, and leveling off above the plotted points as it approaches its upper bound just past 100 percent.", "xMin": 0, "xMax": 20, "yMin": 0, "yMax": 110, "xUnit": 18, "yUnit": 3.2, "grid": false, "xTickStep": 1, "xTickGrouping": false, "yTickStep": 10, "tickLabels": true, "xLabel": "x", "yLabel": "y", "points": [{"at": [0, 12.69]}, {"at": [1, 16.35]}, {"at": [2, 20.29]}, {"at": [3, 25.08]}, {"at": [4, 30.81]}, {"at": [5, 38.75]}, {"at": [6, 45.0]}, {"at": [7, 49.16]}, {"at": [8, 55.15]}, {"at": [9, 62.852]}, {"at": [10, 68.63]}, {"at": [11, 76.64]}, {"at": [12, 82.47]}, {"at": [13, 85.68]}, {"at": [14, 89.14]}, {"at": [15, 91.86]}, {"at": [16, 95.28]}, {"at": [17, 98.17]}], "curves": [{"kind": "logistic", "c": 105.7379526, "a": 6.88328979, "b": 0.2595440013, "arrows": "end"}]}
   {{< /apfigure >}}

2. To approximate the percentage of Americans with cellular service in the
   year 2013, substitute $x=18$ for the year in the model and solve for
   $y$:

   $$
   \begin{array}{lrcl}
   & y &=& \tfrac{105.7379526}{1+6.88328979e^{-0.2595440013x}} \\[8pt]
   \text{Substitute }18\text{ for }x. & &=& \tfrac{105.7379526}{1+6.88328979e^{-0.2595440013(18)}} \\[8pt]
   \text{Round to the nearest tenth.} & &\approx& 99.3
   \end{array}
   $$

   According to the model, about $99.3\%$ of Americans had cellular service
   in 2013.

3. The model gives a limiting value of about $105$. This means that the
   maximum possible percentage of Americans with cellular service would be
   $105\%$, which is impossible. (How could over $100\%$ of a population
   have cellular service?) If the model were exact, the limiting value
   would be $c=100$ and the model's outputs would get very close to, but
   never actually reach $100\%$. After all, there will always be someone
   out there without cellular service!

The table below shows the population, in thousands, of harbor seals in the
Wadden Sea over the years 1997 to 2012.

| Year | 1997 | 1998 | 1999 | 2000 | 2001 | 2002 | 2003 | 2004 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Seal Population (Thousands) | 3.493 | 5.282 | 6.357 | 9.201 | 11.224 | 12.964 | 16.226 | 18.137 |

| Year | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Seal Population (Thousands) | 19.590 | 21.955 | 22.862 | 23.869 | 24.243 | 24.344 | 24.919 | 25.108 |

{{< fillin
  question="Let $x$ represent time in years starting with $x=0$ for the year 1997, and let $y$ represent the number of seals in thousands. Use logistic regression to fit a model to that data."
  answer="25.65665979/(1+6.113686306e^{-0.3852149008x})"
  answerDisplay="$y=\tfrac{25.65665979}{1+6.113686306e^{-0.3852149008x}}$"
  hint="Enter the year number in L1 and the population in L2, then run Logistic to find $a$, $b$, and $c$ for $y=\tfrac{c}{1+ae^{-bx}}$."
>}}

{{< fillin
  question="Use that model to predict the seal population for the year 2020 ($x=23$). The model gives the population in thousands, so enter the number of seals, to the nearest whole seal."
  answer="25634"
  answerDisplay="about 25,634 seals"
  hint="Substitute $x=23$ into the model you just found, then convert from thousands to a count."
>}}

{{< fillin
  question="To the nearest whole number, what is the limiting value of that model, as a number of seals?"
  answer="25657"
  answerDisplay="about 25,657 seals"
  hint="The limiting value is the constant $c$ in the numerator of the model."
>}}

## Key concepts

- Exponential regression is used to model situations where growth begins
  slowly and then accelerates rapidly without bound, or where decay begins
  rapidly and then slows down to get closer and closer to zero.
- We use the command "ExpReg" on a graphing utility to fit function of the
  form $y=ab^x$ to a set of data points.
- Logarithmic regression is used to model situations where growth or decay
  accelerates rapidly at first and then slows over time.
- We use the command "LnReg" on a graphing utility to fit a function of the
  form $y=a+b\ln(x)$ to a set of data points.
- Logistic regression is used to model situations where growth accelerates
  rapidly at first and then steadily slows as the function approaches an
  upper limit.
- We use the command "Logistic" on a graphing utility to fit a function of
  the form $y=\tfrac{c}{1+ae^{-bx}}$ to a set of data points.

## Practice

### Build an exponential model from data

The table below shows a set of data.

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | 1,125 | 1,495 | 2,310 | 3,294 | 4,650 | 6,361 |

{{< fillin
  question="Use the regression feature of a graphing calculator to find an exponential function of the form $f(x)=ab^x$ that best fits the data in the table above."
  answer="776.682(1.426)^x"
  answerDisplay="$f(x)=776.682(1.426)^x$"
  hint="Enter the $x$-values in L1 and the $f(x)$-values in L2, then run ExpReg."
>}}

The table below shows a different set of data.

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | 555 | 383 | 307 | 210 | 158 | 122 |

{{< fillin
  question="Exponential regression on the data above gives the model $f(x)=731.92(0.738)^x$. Write this model as an equivalent exponential equation with base $e$."
  answer="731.92e^{-0.3038x}"
  answerForm="base-e"
  answerDisplay="$f(x)=731.92e^{-0.3038x}$"
  hint="Write $0.738=e^{\ln(0.738)}$, so $0.738^x=e^{x\ln(0.738)}$."
>}}

### Build a logarithmic model from data

The table below shows a set of data.

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| $f(x)$ | 5.1 | 6.3 | 7.3 | 7.7 | 8.1 | 8.6 |

{{< fillin
  question="Use the LOGarithm option of the REGression feature to find a logarithmic function of the form $y=a+b\ln(x)$ that best fits the data in the table above."
  answer="5.063+1.934\ln(x)"
  answerDisplay="$y=5.063+1.934\ln(x)$"
  hint="Enter the $x$-values in L1 and the $f(x)$-values in L2, then run LnReg."
>}}

{{< fillin
  question="A logarithmic model is given by the equation $h(p)=67.682-5.792\ln(p)$. To the nearest hundredth, for what value of $p$ does $h(p)=62$?"
  answer="2.67"
  answerForm="decimal"
  hint="Isolate the logarithm, then exponentiate both sides."
>}}

{{< fillin
  question="Logarithmic regression on a different data table, $x=1$ through $8$ with $f(1)=7.5$ down to $f(8)=2.9$, gives the model $f(x)=7.544-2.268\ln(x)$. Use that model to find the value of $f(10)$, rounded to the nearest tenth."
  answer="2.3"
  answerForm="decimal"
  hint="Substitute $x=10$ into the model and evaluate."
>}}

### Build a logistic model from data

{{< fillin
  question="To the nearest whole number, what is the initial value of a population modeled by the logistic equation $P(t)=\tfrac{175}{1+6.995e^{-0.68t}}$?"
  answer="22"
  hint="The initial value is $P(0)$."
>}}

{{< fillin
  question="What is the carrying capacity of that same population model, $P(t)=\tfrac{175}{1+6.995e^{-0.68t}}$?"
  answer="175"
  hint="The carrying capacity is the constant in the numerator, the model's upper bound as $t\to\infty$."
>}}

{{< fillin
  question="What is the $y$-intercept on the graph of the logistic model $P(t)=\tfrac{90}{1+5e^{-0.42t}}$? Enter your answer as an ordered pair."
  answer="(0,15)"
  answerDisplay="$(0,15)$"
  hint="Evaluate $P(0)$."
>}}

The population $P$ of a koi pond over $x$ months is modeled by the function
$P(x)=\tfrac{68}{1+16e^{-0.28x}}$.

{{< fillin
  question="What was the initial population of koi in that pond?"
  answer="4"
  answerDisplay="4 koi"
  hint="The initial population is $P(0)$."
>}}

{{< fillin
  question="How many months will it take before there are 20 koi in that same pond? Round to the nearest tenth."
  answer="6.8"
  answerForm="decimal"
  hint="Set $P(x)=20$ and solve for $x$ by isolating the exponential term."
>}}

The population $P$ of an endangered species habitat for wolves is modeled by
the function $P(x)=\tfrac{558}{1+54.8e^{-0.462x}}$, where $x$ is given in
years.

{{< fillin
  question="How many wolves will that habitat have after 3 years? Round to the nearest whole number."
  answer="38"
  answerDisplay="about 38 wolves"
  hint="Evaluate the model at $x=3$."
>}}

{{< fillin
  question="Use the intersect feature to approximate the number of years it will take before the population of that habitat reaches half its carrying capacity. Round to the nearest tenth."
  answer="8.7"
  answerForm="decimal"
  hint="The carrying capacity is 558, so set the model equal to 279 and solve for $x$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 4.8: Fitting
Exponential Models to Data](https://openstax.org/books/precalculus-2e/pages/4-8-fitting-exponential-models-to-data)
by Jay Abramson and OpenStax, © OpenStax, licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access
the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e).
Changes: recreated every scatter plot and fitted-curve graph as an accessible
inline SVG built from its exact data and equation — the BAC/relative-risk
scatter and its exponential fit $y=0.58304829(22{,}072{,}021{,}300)^x$; the
life-expectancy scatter and its logarithmic fit
$y=42.52722583+13.85752327\ln(x)$; and the cellular-service scatter and its
logistic fit $y=\tfrac{105.7379526}{1+6.88328979e^{-0.2595440013x}}$, whose
curve has no closed-form primitive in this site's figure engine and is
therefore drawn as a dense polyline sampled directly from that exact
equation rather than any spline approximation. Every regression coefficient
printed on this page was independently re-derived — ordinary least squares
of $\ln y$ against $x$ for each exponential model, of $y$ against $\ln x$ for
each logarithmic model, and Nelder–Mead nonlinear least squares for each
logistic model — and matched the source's published values to the precision
shown. Omitted the section's one Media link to an external
graphing-calculator resource, which carries no transcribable mathematics.
Converted the three in-page Try Its (credit-card debt, video-game sales, and
harbor-seal population) into interactive fill-in components, each part of a
multipart Try It becoming its own component; converted eleven selected
end-of-section exercises — two exponential-model builds from data tables,
one logarithmic-model build plus two logarithmic evaluations, and six
logistic-model evaluations across three scenarios (a generic carrying-
capacity model, a koi pond, and a wolf habitat) — into interactive
fill-ins in a closing Practice block, one group per objective. Two exercises
whose end-of-section items depend on a graphing-calculator "intersect"
reading were given the underlying model directly in the question text so
each is answerable from the page alone. One upstream defect is corrected
here: the pinned CNXML's solution to the Table 9 logarithmic-regression
exercise (module m49368, exercise id `fs-id1650282`) prints its fitted model
as $y=5.063+1.934\log(x)$, but the section's own "LnReg" definition returns
$y=a+b\ln(x)$, and reproducing the regression independently on the printed
data confirms the natural logarithm, not the common logarithm — this page's
Practice block states the model with $\ln(x)$.</small>
