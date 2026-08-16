---
title: Fitting Linear Models to Data
description: >-
  Drawing and interpreting scatter plots; finding a line of best fit by eye
  and by least squares regression; interpolation, extrapolation, and model
  breakdown; the correlation coefficient; and predicting with a regression
  line — adapted from OpenStax Precalculus 2e, Section 2.4.
source_section: "2.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Draw and interpret scatter plots
- Find the line of best fit
- Distinguish between linear and nonlinear relations
- Use a linear model to make predictions
{{< /callout >}}

A professor is attempting to identify trends among final exam scores. His
class has a mixture of students, so he wonders if there is any relationship
between age and final exam scores. One way for him to analyze the scores is
by creating a diagram that relates the age of each student to the exam score
received. In this section, we will examine one such diagram known as a
scatter plot.

## Drawing and interpreting scatter plots

A **scatter plot** is a graph of plotted points that may show a relationship
between two sets of data. If the relationship is from a **linear model**, or
a model that is nearly linear, the professor can draw conclusions using his
knowledge of linear functions. The graph below is a sample scatter plot of
age and final exam score variables.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot titled Final Exam Score versus Age. Age runs from 0 to 50 along the horizontal axis and final exam score from 0 to 100 along the vertical axis. Fourteen points lie between ages 18 and 46 with scores between 60 and 90, showing no rising or falling trend.","xMin":0,"xMax":50,"yMin":0,"yMax":100,"xUnit":5.4,"yUnit":2.2,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Final Exam Score vs. Age","xLabel":"Age","yLabel":"Score","points":[{"at":[18,84]},{"at":[20,79]},{"at":[21,84]},{"at":[22,67]},{"at":[28,81]},{"at":[30,90]},{"at":[31,66]},{"at":[33,63]},{"at":[35,64]},{"at":[39.5,60]},{"at":[40,77]},{"at":[41.5,82]},{"at":[43,78]},{"at":[45.5,77]}]}
{{< /apfigure >}}

Notice this scatter plot does **not** indicate a **linear relationship**. The
points do not appear to follow a trend. In other words, there does not appear
to be a relationship between the age of the student and the score on the
final exam.

**Example.** The table below shows the number of cricket chirps in 15
seconds, for several different air temperatures, in degrees Fahrenheit. Plot
this data, and determine whether the data appears to be linearly related.

| **Chirps** | 44 | 35 | 20.4 | 33 | 31 | 35 | 18.5 | 37 | 26 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **Temperature** | 80.5 | 70.5 | 57 | 66 | 68 | 72 | 52 | 73.5 | 53 |

**Solution.** Plotting this data, as depicted below, suggests that there may
be a trend. We can see from the trend in the data that the number of chirps
increases as the temperature increases. The trend appears to be roughly
linear, though certainly not perfectly so.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot titled Cricket Chirps versus Temperature. Chirps in 15 seconds run from 0 to 50 along the horizontal axis and temperature from 0 to 90 degrees Fahrenheit along the vertical axis. The nine plotted points rise from left to right in a roughly straight band.","xMin":0,"xMax":50,"yMin":0,"yMax":90,"xUnit":5.4,"yUnit":2.4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Cricket Chirps vs. Temperature","xLabel":"chirps","yLabel":"°F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]}]}
{{< /apfigure >}}

## Finding the line of best fit

Once we recognize a need for a linear function to model that data, the
natural follow-up question is "what is that linear function?" One way to
approximate our linear function is to sketch the line that seems to best fit
the data. Then we can extend the line until we can verify the $y$-intercept.
We can approximate the slope of the line by extending it until we can
estimate the $\tfrac{\text{rise}}{\text{run}}$.

**Example.** Find a linear function that fits the cricket-chirp data in the
table above by "eyeballing" a line that seems to fit.

**Solution.** On a graph, we could try sketching a line.

Using the starting and ending points of our hand drawn line, points
$(0,30)$ and $(50,90)$, this graph has a slope of

$$m=\tfrac{60}{50}=1.2$$

and a $y$-intercept at 30. This gives an equation of

$$T(c)=1.2c+30$$

where $c$ is the number of chirps in 15 seconds, and $T(c)$ is the
temperature in degrees Fahrenheit. The resulting equation is represented
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The cricket-chirp scatter plot with the hand-drawn line of best fit T of c equals 1.2c plus 30 drawn through it, rising from (0, 30) at the left edge to (50, 90) at the right edge.","xMin":0,"xMax":50,"yMin":0,"yMax":90,"xUnit":5.4,"yUnit":2.4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Cricket Chirps vs. Temperature","xLabel":"c, chirps","yLabel":"T(c), °F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]}],"lines":[{"slope":1.2,"intercept":30,"arrows":false}]}
{{< /apfigure >}}

*Analysis.* This linear equation can then be used to approximate answers to
various questions we might ask about the trend.

## Recognizing interpolation or extrapolation

While the data for most examples does not fall perfectly on the line, the
equation is our best guess as to how the relationship will behave outside of
the values for which we have data. We use a process known as
**interpolation** when we predict a value inside the domain and range of the
data. The process of **extrapolation** is used when we predict a value
outside the domain and range of the data.

The graph below compares the two processes for the cricket-chirp data
addressed in the previous example. We can see that interpolation would occur
if we used our model to predict temperature when the values for chirps are
between 18.5 and 44. Extrapolation would occur if we used our model to
predict temperature when the values for chirps are less than 18.5 or greater
than 44.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The cricket-chirp scatter plot and its line of best fit, with a dashed rectangle enclosing the data from 18.5 to 44 chirps and 52 to 80.5 degrees. The inside of the rectangle is labelled Interpolation and the region outside it is labelled Extrapolation.","xMin":0,"xMax":50,"yMin":0,"yMax":90,"xUnit":5.4,"yUnit":2.4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Cricket Chirps vs. Temperature","xLabel":"c, chirps","yLabel":"T(c), °F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]}],"lines":[{"slope":1.2,"intercept":30,"arrows":false}],"polylines":[{"through":[[18.5,52],[44,52],[44,80.5],[18.5,80.5],[18.5,52]],"dashed":true}],"texts":[{"at":[9,70],"text":"Extrapolation","anchor":"middle"},{"at":[31,57],"text":"Interpolation","anchor":"middle"}]}
{{< /apfigure >}}

*Interpolation occurs within the domain and range of the provided data
whereas extrapolation occurs outside.*

There is a difference between making predictions inside the domain and range
of values for which we have data and outside that domain and range.
Predicting a value outside of the domain and range has its limitations. When
our model no longer applies after a certain point, it is sometimes called
**model breakdown**. For example, predicting a cost function for a period of
two years may involve examining the data where the input is the time in years
and the output is the cost. But if we try to extrapolate a cost when $x=50$,
that is in 50 years, the model would not apply because we could not account
for factors fifty years in the future.

{{< callout type="info" >}}
  **Interpolation and extrapolation.** Different methods of making
  predictions are used to analyze data.

  - The method of **interpolation** involves predicting a value inside the
    domain and/or range of the data.
  - The method of **extrapolation** involves predicting a value outside the
    domain and/or range of the data.
  - **Model breakdown** occurs at the point when the model no longer applies.
{{< /callout >}}

**Example.** Use the cricket data from the table above to answer the
following questions.

- Would predicting the temperature when crickets are chirping 30 times in 15
  seconds be interpolation or extrapolation? Make the prediction, and discuss
  whether it is reasonable.
- Would predicting the number of chirps crickets will make at 40 degrees be
  interpolation or extrapolation? Make the prediction, and discuss whether it
  is reasonable.

**Solution.** The number of chirps in the data provided varied from 18.5 to
44. A prediction at 30 chirps per 15 seconds is inside the domain of our
data, so would be interpolation. Using our model:

$$
\begin{array}{lrcl}
& T(30) &=& 30+1.2(30) \\[4pt]
& &=& 66\ \text{degrees}
\end{array}
$$

Based on the data we have, this value seems reasonable.

The temperature values varied from 52 to 80.5. Predicting the number of
chirps at 40 degrees is extrapolation because 40 is outside the range of our
data. Using our model:

$$
\begin{array}{lrcl}
& 40 &=& 30+1.2c \\[4pt]
& 10 &=& 1.2c \\[4pt]
& c &\approx& 8.33
\end{array}
$$

We can compare the regions of interpolation and extrapolation using the graph
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The cricket-chirp scatter plot and its line of best fit, with the same dashed interpolation rectangle. Two predictions are marked on the line with dashed crosshairs: (30, 66) inside the rectangle and (8.33, 40) outside it to the left.","xMin":0,"xMax":50,"yMin":0,"yMax":90,"xUnit":5.4,"yUnit":2.4,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Cricket Chirps vs. Temperature","xLabel":"c, chirps","yLabel":"T(c), °F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]},{"at":[30,66]},{"at":[8.33,40]}],"lines":[{"slope":1.2,"intercept":30,"arrows":false}],"polylines":[{"through":[[18.5,52],[44,52],[44,80.5],[18.5,80.5],[18.5,52]],"dashed":true}],"guides":[[30,66],[8.33,40]],"texts":[{"at":[20,74],"text":"Interpolation"},{"at":[11.5,30],"text":"Extrapolation"}]}
{{< /apfigure >}}

*Analysis.* Our model predicts the crickets would chirp 8.33 times in 15
seconds. While this might be possible, we have no reason to believe our model
is valid outside the domain and range. In fact, generally crickets stop
chirping altogether below around 50 degrees.

{{< fillin
  question="According to the cricket data in the table above, what temperature, in degrees Fahrenheit, can we predict it is if we counted 20 chirps in 15 seconds?"
  answer="54"
  answerDisplay="$T(20)=1.2(20)+30=54$ degrees Fahrenheit"
  hint="Substitute $c=20$ into the eyeballed model $T(c)=1.2c+30$."
>}}

## Finding the line of best fit using a graphing utility

While eyeballing a line works reasonably well, there are statistical
techniques for fitting a line to data that minimize the differences between
the line and data values. (Technically, the method minimizes the sum of the
squared differences in the vertical direction between the line and the data
values.) One such technique is called **least squares regression** and can be
computed by many graphing calculators, spreadsheet software, statistical
software, and many web-based calculators. Least squares regression is one
means to determine the line that best fits the data, and here we will refer
to this method as linear regression.

{{< callout type="info" >}}
  **How to:** given data of input and corresponding outputs from a linear
  function, find the best fit line using linear regression.

  1. Enter the input in List 1 (**L1**).
  2. Enter the output in List 2 (**L2**).
  3. On a graphing utility, select Linear Regression (**LinReg**).
{{< /callout >}}

**Example.** Find the least squares regression line using the cricket-chirp
data in the table above.

**Solution.** Enter the input (chirps) in List 1 (L1), and enter the output
(temperature) in List 2 (L2).

| **L1** | 44 | 35 | 20.4 | 33 | 31 | 35 | 18.5 | 37 | 26 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **L2** | 80.5 | 70.5 | 57 | 66 | 68 | 72 | 52 | 73.5 | 53 |

On a graphing utility, select Linear Regression (LinReg). Using the cricket
chirp data from earlier, with technology we obtain the equation:

$$T(c)=30.281+1.143c$$

*Analysis.* Notice that this line is quite similar to the equation we
"eyeballed" but should fit the data better. Notice also that using this
equation would change our prediction for the temperature when hearing 30
chirps in 15 seconds from 66 degrees to:

$$
\begin{array}{lrcl}
& T(30) &=& 30.281+1.143(30) \\[4pt]
& &=& 64.571 \\[4pt]
& &\approx& 64.6\ \text{degrees}
\end{array}
$$

The graph of the scatter plot with the least squares regression line is shown
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The cricket-chirp scatter plot with the least squares regression line T of c equals 30.281 plus 1.143c drawn through it, rising from about (0, 30.3) to about (50, 87.4). Temperature is shown from 30 to 90 degrees Fahrenheit.","xMin":0,"xMax":50,"yMin":30,"yMax":90,"xUnit":5.4,"yUnit":3.2,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":10,"caption":"Number of Cricket Chirps vs. Temperature","xLabel":"c, chirps","yLabel":"T(c), °F","points":[{"at":[44,80.5]},{"at":[35,70.5]},{"at":[20.4,57]},{"at":[33,66]},{"at":[31,68]},{"at":[35,72]},{"at":[18.5,52]},{"at":[37,73.5]},{"at":[26,53]}],"lines":[{"slope":1.143,"intercept":30.281,"arrows":false}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Q&A.** *Will there ever be a case where two different lines will serve as
  the best fit for the data?*

  No. There is only one best fit line.
{{< /callout >}}

## Distinguishing between linear and non-linear models

As we saw above with the cricket-chirp model, some data exhibit strong linear
trends, but other data, like the final exam scores plotted by age, are
clearly nonlinear. Most calculators and computer software can also provide us
with the **correlation coefficient**, which is a measure of how closely the
line fits the data. Many graphing calculators require the user to turn a
"diagnostic on" selection to find the correlation coefficient, which
mathematicians label as $r$. The correlation coefficient provides an easy way
to get an idea of how close to a line the data falls.

We should compute the correlation coefficient only for data that follows a
linear pattern or to determine the degree to which a data set is linear. If
the data exhibits a nonlinear pattern, the correlation coefficient for a
linear regression is meaningless. To get a sense for the relationship between
the value of $r$ and the graph of the data, the plots below show data sets
with their correlation coefficients. Remember, for all plots, the horizontal
axis shows the input and the vertical axis shows the output.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of sixteen points lying exactly on a rising straight line, labelled r = 1.0.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 1.0","points":[{"at":[1,1.8]},{"at":[1.5,2.2]},{"at":[2,2.6]},{"at":[2.5,3]},{"at":[3,3.4]},{"at":[3.5,3.8]},{"at":[4,4.2]},{"at":[4.5,4.6]},{"at":[5,5]},{"at":[5.5,5.4]},{"at":[6,5.8]},{"at":[6.5,6.2]},{"at":[7,6.6]},{"at":[7.5,7]},{"at":[8,7.4]},{"at":[8.5,7.8]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of sixteen points scattered narrowly about a rising trend, labelled r = 0.8.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 0.8","points":[{"at":[1.5,3.4]},{"at":[2.4,2]},{"at":[3.3,4.9]},{"at":[4.3,4]},{"at":[5.2,6.6]},{"at":[6.1,4]},{"at":[7.1,6.9]},{"at":[8,5.9]},{"at":[8.9,8.8]},{"at":[1.9,1.5]},{"at":[3.8,4.6]},{"at":[5.7,7.1]},{"at":[7.5,5.9]},{"at":[2.9,4.6]},{"at":[4.7,3.4]},{"at":[6.6,6.4]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of sixteen points scattered widely about a faint rising trend, labelled r = 0.4.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 0.4","points":[{"at":[1.5,5]},{"at":[2.4,2.3]},{"at":[3.3,6.1]},{"at":[4.3,4]},{"at":[5.2,7.3]},{"at":[6.1,2.6]},{"at":[7.1,6.4]},{"at":[8,4.2]},{"at":[8.9,8]},{"at":[1.9,1.8]},{"at":[3.8,5.3]},{"at":[5.7,7.8]},{"at":[7.5,4.6]},{"at":[2.9,5.9]},{"at":[4.7,2.7]},{"at":[6.6,5.9]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of sixteen points spread over the grid with no rising or falling trend, labelled r = 0.0.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 0.0","points":[{"at":[1.5,6.3]},{"at":[2.4,3]},{"at":[3.3,6.8]},{"at":[4.3,4.2]},{"at":[5.2,7.4]},{"at":[6.1,2]},{"at":[7.1,5.8]},{"at":[8,3]},{"at":[8.9,6.8]},{"at":[1.9,2.6]},{"at":[3.8,5.8]},{"at":[5.7,7.8]},{"at":[7.5,3.6]},{"at":[2.9,6.8]},{"at":[4.7,2.6]},{"at":[6.6,5.4]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of sixteen points scattered widely about a faint falling trend, labelled r = −0.4.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = −0.4","points":[{"at":[1.5,7.4]},{"at":[2.4,4]},{"at":[3.3,7.2]},{"at":[4.3,4.5]},{"at":[5.2,7.2]},{"at":[6.1,1.8]},{"at":[7.1,5]},{"at":[8,2.1]},{"at":[8.9,5.3]},{"at":[1.9,3.9]},{"at":[3.8,6.1]},{"at":[5.7,7.3]},{"at":[7.5,2.9]},{"at":[2.9,7.4]},{"at":[4.7,2.9]},{"at":[6.6,4.8]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of sixteen points scattered narrowly about a falling trend, labelled r = −0.8.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = −0.8","points":[{"at":[1.5,8.2]},{"at":[2.4,5.6]},{"at":[3.3,7.2]},{"at":[4.3,5]},{"at":[5.2,6.3]},{"at":[6.1,2.4]},{"at":[7.1,4]},{"at":[8,1.7]},{"at":[8.9,3.4]},{"at":[1.9,5.7]},{"at":[3.8,6.3]},{"at":[5.7,6.2]},{"at":[7.5,2.4]},{"at":[2.9,7.6]},{"at":[4.7,3.8]},{"at":[6.6,4.1]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of sixteen points lying exactly on a falling straight line, labelled r = −1.0.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = −1.0","points":[{"at":[1,8.2]},{"at":[1.5,7.8]},{"at":[2,7.4]},{"at":[2.5,7]},{"at":[3,6.6]},{"at":[3.5,6.2]},{"at":[4,5.8]},{"at":[4.5,5.4]},{"at":[5,5]},{"at":[5.5,4.6]},{"at":[6,4.2]},{"at":[6.5,3.8]},{"at":[7,3.4]},{"at":[7.5,3]},{"at":[8,2.6]},{"at":[8.5,2.2]}]}
{{< /apfigure >}}

A correlation coefficient near 0 does not mean the two variables are
unrelated — it means they are not *linearly* related. The points below lie on
a perfectly definite curve, yet their correlation coefficient is exactly 0.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot of seventeen points forming a symmetric arch that rises to a peak in the middle and falls again, labelled r = 0.0.","xMin":0,"xMax":10,"yMin":0,"yMax":10,"unit":13,"margin":18,"grid":false,"caption":"r = 0.0","points":[{"at":[1,3.52]},{"at":[1.5,4.87]},{"at":[2,5.13]},{"at":[2.5,6.65]},{"at":[3,6.68]},{"at":[3.5,7.62]},{"at":[4,7.42]},{"at":[4.5,8.28]},{"at":[5,8]},{"at":[5.5,8.28]},{"at":[6,7.42]},{"at":[6.5,7.62]},{"at":[7,6.68]},{"at":[7.5,6.65]},{"at":[8,5.13]},{"at":[8.5,4.87]},{"at":[9,3.52]}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **Correlation coefficient.** The **correlation coefficient** is a value,
  $r$, between $-1$ and 1.

  - $r>0$ suggests a positive (increasing) relationship
  - $r<0$ suggests a negative (decreasing) relationship
  - The closer the value is to 0, the more scattered the data.
  - The closer the value is to 1 or $-1$, the less scattered the data is.
{{< /callout >}}

**Example.** Calculate the correlation coefficient for the cricket-chirp data
in the table above.

**Solution.** Because the data appear to follow a linear pattern, we can use
technology to calculate $r$. Enter the inputs and corresponding outputs and
select the Linear Regression. The calculator will also provide you with the
correlation coefficient, $r=0.9509$. This value is very close to 1, which
suggests a strong increasing linear relationship.

Note: for some calculators, the Diagnostics must be turned "on" in order to
get the correlation coefficient when linear regression is performed:
[2nd]>[0]>[alpha][$x^{-1}$], then scroll to **DIAGNOSTICSON**.

## Predicting with a regression line

Once we determine that a set of data is linear using the correlation
coefficient, we can use the regression line to make predictions. As we
learned above, a regression line is a line that is closest to the data in the
scatter plot, which means that only one such line is a best fit for the data.

**Example.** Gasoline consumption in the United States has been steadily
increasing. Consumption data from 1994 to 2004 is shown in the table below.
Determine whether the trend is linear, and if so, find a model for the data.
Use the model to predict the consumption in 2008.

| **Year** | '94 | '95 | '96 | '97 | '98 | '99 | '00 | '01 | '02 | '03 | '04 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **Consumption (billions of gallons)** | 113 | 116 | 118 | 119 | 123 | 125 | 126 | 128 | 131 | 133 | 136 |

The scatter plot of the data, including the least squares regression line, is
shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A scatter plot titled Gas Consumption versus Year. Years after 1994 run from 0 to 14 along the horizontal axis and consumption from 100 to 150 billion gallons along the vertical axis. Eleven points rise steadily from (0, 113) to (10, 136), and the least squares regression line C of t equals 113.318 plus 2.209t is drawn through them and continues to (14, 144.244).","xMin":0,"xMax":14,"yMin":100,"yMax":150,"xUnit":18,"yUnit":4,"xGridStep":1,"yGridStep":10,"tickLabels":true,"xTickStep":1,"yTickStep":10,"caption":"Gas Consumption vs. Year","xLabel":"t","yLabel":"C(t)","points":[{"at":[0,113]},{"at":[1,116]},{"at":[2,118]},{"at":[3,119]},{"at":[4,123]},{"at":[5,125]},{"at":[6,126]},{"at":[7,128]},{"at":[8,131]},{"at":[9,133]},{"at":[10,136]}],"lines":[{"slope":2.209,"intercept":113.318,"arrows":false}]}
{{< /apfigure >}}

**Solution.** We can introduce new input variable, $t$, representing years
since 1994.

The least squares regression equation is:

$$C(t)=113.318+2.209t$$

Using technology, the correlation coefficient was calculated to be 0.9965,
suggesting a very strong increasing linear trend.

Using this to predict consumption in 2008 $(t=14)$,

$$
\begin{array}{lrcl}
& C(14) &=& 113.318+2.209(14) \\[4pt]
& &=& 144.244
\end{array}
$$

The model predicts 144.244 billion gallons of gasoline consumption in 2008.

{{< fillin
  question="Use the model $C(t)=113.318+2.209t$ created above to predict the gas consumption in 2011, in billions of gallons."
  answer="150.871"
  answerDisplay="$C(17)=113.318+2.209(17)=150.871$ billion gallons"
  hint="2011 is 17 years after 1994, so evaluate the model at $t=17$."
>}}

{{< multiplechoice
  question="Is that 2011 prediction an interpolation or an extrapolation?"
  answer="Extrapolation"
  hint="Compare 2011 with the span of years the data actually covers."
>}}
Interpolation
Extrapolation
{{< /multiplechoice >}}

## Key concepts

- Scatter plots show the relationship between two sets of data.
- Scatter plots may represent linear or non-linear models.
- The line of best fit may be estimated or calculated, using a calculator or
  statistical software.
- Interpolation can be used to predict values inside the domain and range of
  the data, whereas extrapolation can be used to predict values outside the
  domain and range of the data.
- The correlation coefficient, $r$, indicates the degree of linear
  relationship between data.
- A regression line best fits the data.
- The least squares regression line is found by minimizing the squares of the
  distances of points from a line passing through the data and may be used to
  make predictions regarding either of the variables.

## Key terms

**correlation coefficient** — a value, $r$, between $-1$ and 1 that indicates
the degree of linear correlation of variables, or how closely a regression
line fits a data set. **extrapolation** — predicting a value outside the
domain and range of the data. **interpolation** — predicting a value inside
the domain and range of the data. **least squares regression** — a
statistical technique for fitting a line to data in a way that minimizes the
differences between the line and data values. **model breakdown** — when a
model no longer applies after a certain point.

## Practice

### Draw and interpret scatter plots

The table below gives paired $x$ and $y$ values.

| **$x$** | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| **$y$** | 46 | 50 | 59 | 75 | 100 | 136 |

{{< multiplechoice
  question="Using the table above, if you draw a scatter plot of this data, does it appear to be linearly related?"
  answer="Nonlinear"
  hint="Check whether the difference between consecutive $y$-values stays roughly constant as $x$ increases by 1 each time."
>}}
Linear
Nonlinear
{{< /multiplechoice >}}

The table below gives another set of paired $x$ and $y$ values.

| **$x$** | 1 | 3 | 5 | 7 | 9 | 11 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| **$y$** | 1 | 9 | 28 | 65 | 125 | 216 |

{{< multiplechoice
  question="Using the table above, if you draw a scatter plot of this data, does it appear to be linearly related?"
  answer="Nonlinear"
  hint="Compare how quickly $y$ grows between $x=1$ and $x=5$ with how quickly it grows between $x=7$ and $x=11$."
>}}
Linear
Nonlinear
{{< /multiplechoice >}}

### Find the line of best fit

The table below gives paired $x$ and $y$ values.

| **$x$** | 8 | 15 | 26 | 31 | 56 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **$y$** | 23 | 41 | 53 | 72 | 103 |

{{< fillin
  question="Using the table above, find the least-squares regression line for this data. Round the slope to three decimal places."
  answer="1.640"
  answerDisplay="$y=1.640x+13.800$"
  hint="Enter the five ordered pairs into a linear regression calculator and read off the slope $a$ in $y=ax+b$."
>}}

The table below gives another set of paired $x$ and $y$ values.

| **$x$** | 900 | 988 | 1,000 | 1,010 | 1,200 | 1,205 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| **$y$** | 70 | 80 | 82 | 84 | 105 | 108 |

{{< fillin
  question="Using the table above, find the least-squares regression line for this data. Round the $y$-intercept to three decimal places."
  answer="-38.841"
  answerDisplay="$y=0.121x-38.841$"
  hint="Enter the six ordered pairs into a linear regression calculator and read off the intercept $b$ in $y=ax+b$."
>}}

The profit of a company increased steadily over a ten-year span. The table
below gives the number of units sold, in hundreds, and the profit, in
thousands of dollars, for five recorded years.

| **Units sold (hundreds)** | 46 | 48 | 50 | 52 | 54 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **Profit (thousands of dollars)** | 250 | 305 | 350 | 390 | 410 |

{{< fillin
  question="Using the table above, find the slope of the least-squares regression line for the profit $y$ as a function of units sold $x$."
  answer="20.25"
  answerDisplay="$y=20.25x-671.50$"
  hint="Run a linear regression on the five ordered pairs and read off the slope $a$ in $y=ax+b$."
>}}

### Distinguish between linear and nonlinear relations

{{< multiplechoice
  question="As the absolute value of the correlation coefficient $\lvert r\rvert$ gets closer to $1$, what happens to the data?"
  answer="It clusters more tightly around a line"
  hint="Recall what $r=1$ and $r=-1$ each describe about a scatter plot."
>}}
It clusters more tightly around a line
It becomes more scattered
{{< /multiplechoice >}}

The U.S. import of wine, in hectoliters, for several years is given in the
table below.

| **Year** | 1992 | 1994 | 1996 | 1998 | 2000 | 2002 | 2004 | 2006 | 2008 | 2009 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **Imports (hectoliters)** | 2,665 | 2,688 | 3,565 | 4,129 | 4,584 | 5,655 | 6,549 | 7,950 | 8,487 | 9,462 |

{{< multiplechoice
  question="Using the table above, does this import data appear to follow a linear trend?"
  answer="Linear"
  hint="Check whether the correlation coefficient for this data, $r\approx0.985$, is close to $1$ or close to $0$."
>}}
Nonlinear
Linear
{{< /multiplechoice >}}

The table below gives paired $x$ and $y$ values.

| **$x$** | 21 | 25 | 30 | 31 | 40 | 50 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| **$y$** | 17 | 11 | 2 | -1 | -18 | -40 |

{{< multiplechoice
  question="The least-squares regression line for the table above has correlation coefficient $r=-0.998$. Does this data show a positive correlation or a negative correlation?"
  answer="Negative correlation"
  hint="Look at the sign of $r$."
>}}
Positive correlation
Negative correlation
{{< /multiplechoice >}}

### Use a linear model to make predictions

{{< fillin
  question="A regression relating a tree's diameter $x$, in inches, to its age $y$, in years, gives $y=ax+b$ with $a=6.301$, $b=-1.044$, and $r=0.970$. Use this model to predict the age, in years, of a tree with diameter $10$ inches."
  answer="61.966"
  answerDisplay="$y=6.301(10)-1.044=61.966$ years"
  hint="Substitute $x=10$ into $y=6.301x-1.044$."
>}}

The table below gives the temperature, in degrees Fahrenheit, and the time,
in seconds, for several trials.

| **Temperature (°F)** | 16 | 18 | 20 | 25 | 30 |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **Time (seconds)** | 46 | 50 | 54 | 55 | 62 |

{{< multiplechoice
  question="Using the table above, if we wanted to predict the time when the temperature reaches $28$ degrees Fahrenheit, would that prediction be an interpolation or an extrapolation?"
  answer="Interpolation"
  hint="Compare $28$ to the span of temperatures actually in the table, $16$ to $30$."
>}}
Interpolation
Extrapolation
{{< /multiplechoice >}}

{{< fillin
  question="For the linear function $f(x)=-2x-10$, what is $f(9)$?"
  answer="-28"
  answerDisplay="$f(9)=-2(9)-10=-28$"
  hint="Substitute $x=9$ into $f(x)=-2x-10$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 2.4: Fitting Linear Models to Data](https://openstax.org/books/precalculus-2e/pages/2-4-fitting-linear-models-to-data) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every scatter plot and fitted line as an accessible inline SVG plotted from the source's own numbers — the cricket-chirp, interpolation, and gasoline figures use the exact table values together with the stated equations $T(c)=1.2c+30$, $T(c)=30.281+1.143c$, and $C(t)=113.318+2.209t$, each of which was recomputed from the data and matched to the source's three-decimal rounding; the opening "Final Exam Score vs. Age" scatter has no published data table, so its fourteen points were measured off the source figure; replaced the source's twenty-one-panel Wikimedia correlation composite (credit: "DenisBoigelot") with eight panels built from explicit point sets whose correlation coefficients were computed exactly, covering the same values $r=1.0,\ 0.8,\ 0.4,\ 0.0,\ -0.4,\ -0.8,\ -1.0$ plus one nonlinear arch with $r=0$, and added the one sentence needed to introduce that arch; drew the interpolation region as a dashed rectangle and marked the two predictions with dashed crosshairs, because the source's red and blue highlighting cannot be carried by a single-colour accessible SVG; drew the vertical axes over their full range instead of reproducing the source's compressed axis breaks; presented the three data tables as Markdown tables; omitted the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice where the answer is the word "interpolation" or "extrapolation", which cannot be graded as free-response math; and adapted eleven selected end-of-section exercises into the section-final Practice block, again using multiple choice for the categorical judgments (linear/nonlinear, positive/negative correlation, interpolation/extrapolation) that free-response grading cannot check.</small>
