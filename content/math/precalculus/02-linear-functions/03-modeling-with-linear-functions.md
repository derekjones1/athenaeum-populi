---
title: Modeling with Linear Functions
description: >-
  Building linear models from verbal descriptions, from a given intercept, and
  from a pair of input and output values; drawing diagrams to model distance;
  and building systems of linear models — adapted from OpenStax Precalculus 2e,
  Section 2.3.
source_section: "2.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Identify steps for modeling and solving
- Build linear models from verbal descriptions
- Build systems of linear models
{{< /callout >}}

Elan is a college student who plans to spend a summer in Seattle. Elan has
saved \$3,500 for the trip and anticipates spending \$400 each week on rent,
food, and activities. How can we write a linear model to represent the
situation? What would be the $x$-intercept, and what can Elan learn from it?
To answer these and related questions, we can create a model using a linear
function. Models such as this one can be extremely useful for analyzing
relationships and making predictions based on those relationships. In this
section, we will explore examples of **linear function** models.

## Identifying steps to model and solve problems

When **modeling** scenarios with linear functions and solving problems
involving quantities with a **constant rate of change**, we typically follow
the same problem strategies that we would use for any type of function. Let's
briefly review them:

1. Identify changing quantities, and then define descriptive variables to
   represent those quantities. When appropriate, sketch a picture or define a
   coordinate system.
2. Carefully read the problem to identify important information. Look for
   information that provides values for the variables or values for parts of
   the functional model, such as slope and initial value.
3. Carefully read the problem to determine what we are trying to find,
   identify, solve, or interpret.
4. Identify a solution pathway from the provided information to what we are
   trying to find. Often this will involve checking and tracking units,
   building a table, or even finding a formula for the function being used to
   model the problem.
5. When needed, write a formula for the function.
6. Solve or evaluate the function using the formula.
7. Reflect on whether your answer is reasonable for the given situation and
   whether it makes sense mathematically.
8. Clearly convey your result using appropriate units, and answer in full
   sentences when necessary.

## Building linear models

Now let's take a look at the student in Seattle. In Elan's situation, there
are two changing quantities: time and money. The amount of money they have
remaining while on vacation depends on how long they stay. We can use this
information to define our variables, including units.

- Output: $M$, money remaining, in dollars
- Input: $t$, time, in weeks

So, the amount of money remaining depends on the number of weeks: $M(t)$.

We can also identify the initial value and the rate of change.

- Initial Value: They saved \$3,500, so 3,500 is the initial value for $M$.
- Rate of Change: They anticipate spending \$400 each week, so −\$400 per week
  is the rate of change, or slope.

Notice that the unit of dollars per week matches the unit of our output
variable divided by our input variable. Also, because the slope is negative,
the linear function is decreasing. This should make sense because they are
spending money each week.

The **rate of change** is constant, so we can start with the **linear model**
$M(t)=mt+b$. Then we can substitute the intercept and slope provided.

$$
\begin{array}{lrcl}
& M(t) &=& mt+b \\[4pt]
\text{Substitute }m=-400\text{ and }b=3{,}500. & M(t) &=& -400t+3{,}500
\end{array}
$$

To find the $x$-intercept, we set the output to zero, and solve for the input.

$$
\begin{array}{lrcl}
& 0 &=& -400t+3{,}500 \\[4pt]
& t &=& \tfrac{3{,}500}{400} \\[4pt]
& &=& 8.75
\end{array}
$$

The $x$-intercept is 8.75 weeks. Because this represents the input value when
the output will be zero, we could say that Elan will have no money left after
8.75 weeks.

When modeling any real-life scenario with functions, there is typically a
limited domain over which that model will be valid—almost no trend continues
indefinitely. Here the domain refers to the number of weeks. In this case, it
doesn't make sense to talk about input values less than zero. A negative input
value could refer to a number of weeks before Elan saved \$3,500, but the
scenario discussed poses the question once they saved \$3,500 because this is
when the trip and subsequent spending starts. It is also likely that this
model is not valid after the $x$-intercept, unless Elan will use a credit card
and go into debt. The domain represents the set of input values, so the
reasonable domain for this function is $0\le t\le 8.75$.

In the above example, we were given a written description of the situation. We
followed the steps of modeling a problem to analyze the information. However,
the information provided may not always be the same. Sometimes we might be
provided with an intercept. Other times we might be provided with an output
value. We must be careful to analyze the information we are given, and use it
appropriately to build a linear model.

### Using a given intercept to build a model

Some real-world problems provide the $y$-intercept, which is the constant or
initial value. Once the $y$-intercept is known, the $x$-intercept can be
calculated. Suppose, for example, that Hannah plans to pay off a no-interest
loan from her parents. Her loan balance is \$1,000. She plans to pay \$250 per
month until her balance is \$0. The $y$-intercept is the initial amount of her
debt, or \$1,000. The rate of change, or slope, is −\$250 per month. We can
then use the slope-intercept form and the given information to develop a
linear model.

$$
\begin{array}{lrcl}
& f(x) &=& mx+b \\[4pt]
& &=& -250x+1{,}000
\end{array}
$$

Now we can set the function equal to 0, and solve for $x$ to find the
$x$-intercept.

$$
\begin{array}{lrcl}
& 0 &=& -250x+1{,}000 \\[4pt]
& 1{,}000 &=& 250x \\[4pt]
& 4 &=& x \\[4pt]
& x &=& 4
\end{array}
$$

The $x$-intercept is the number of months it takes her to reach a balance of
\$0. The $x$-intercept is 4 months, so it will take Hannah four months to pay
off her loan.

### Using a given input and output to build a model

Many real-world applications are not as direct as the ones we just considered.
Instead they require us to identify some aspect of a linear function. We might
sometimes instead be asked to evaluate the linear model at a given input or set
the equation of the linear model equal to a specified output.

{{< callout type="info" >}}
  **How to:** given a word problem that includes two pairs of input and output
  values, use the linear function to solve a problem.

  1. Identify the input and output values.
  2. Convert the data to two coordinate pairs.
  3. Find the slope.
  4. Write the linear model.
  5. Use the model to make a prediction by evaluating the function at a given
     $x$-value.
  6. Use the model to identify an $x$-value that results in a given $y$-value.
  7. Answer the question posed.
{{< /callout >}}

**Example.** A town's population has been growing linearly. In 2004 the
population was 6,200. By 2009 the population had grown to 8,100. Assume this
trend continues. Predict the population in 2013, and identify the year in
which the population will reach 15,000.

**Solution.** The two changing quantities are the population size and time.
While we could use the actual year value as the input quantity, doing so tends
to lead to very cumbersome equations because the $y$-intercept would
correspond to the year 0, more than 2000 years ago!

To make computation a little nicer, we will define our input as the number of
years since 2004:

- Input: $t$, years since 2004
- Output: $P(t)$, the town's population

To predict the population in 2013 $(t=9)$, we would first need an equation for
the population. Likewise, to find when the population would reach 15,000, we
would need to solve for the input that would provide an output of 15,000. To
write an equation, we need the initial value and the rate of change, or slope.

To determine the rate of change, we will use the change in output per change
in input.

$$m=\frac{\text{change in output}}{\text{change in input}}$$

The problem gives us two input-output pairs. Converting them to match our
defined variables, the year 2004 would correspond to $t=0$, giving the point
$(0,6{,}200)$. Notice that through our clever choice of variable definition,
we have "given" ourselves the $y$-intercept of the function. The year 2009
would correspond to $t=5$, giving the point $(5,8{,}100)$.

The two coordinate pairs are $(0,6{,}200)$ and $(5,8{,}100)$. Recall that we
encountered examples in which we were provided two points earlier in the
chapter. We can use these values to calculate the slope.

$$
\begin{array}{lrcl}
& m &=& \tfrac{8{,}100-6{,}200}{5-0} \\[4pt]
& &=& \tfrac{1{,}900}{5} \\[4pt]
& &=& 380\ \text{people per year}
\end{array}
$$

We already know the $y$-intercept of the line, so we can immediately write the
equation:

$$P(t)=380t+6{,}200$$

To predict the population in 2013, we evaluate our function at $t=9$.

$$
\begin{array}{lrcl}
& P(9) &=& 380(9)+6{,}200 \\[4pt]
& &=& 9{,}620
\end{array}
$$

If the trend continues, our model predicts a population of 9,620 in 2013.

To find when the population will reach 15,000, we can set $P(t)=15{,}000$ and
solve for $t$.

$$
\begin{array}{lrcl}
& 15{,}000 &=& 380t+6{,}200 \\[4pt]
& 8{,}800 &=& 380t \\[4pt]
& t &\approx& 23.158
\end{array}
$$

Our model predicts the population will reach 15,000 in a little more than 23
years after 2004, or somewhere around the year 2027.

{{< fillin
  question="A company sells doughnuts. They incur a fixed cost of \$25,000 for rent, insurance, and other expenses, and it costs \$0.25 to produce each doughnut. Write a linear model for the cost $C$, in dollars, as a function of $x$, the number of doughnuts produced. Enter the expression for $C(x)$."
  answer="0.25x+25000"
  answerDisplay="$C(x)=0.25x+25{,}000$"
  hint="The fixed cost never changes, so it is the initial value; the cost per doughnut is the rate of change."
>}}

{{< multiplechoice
  question="Find and interpret the $y$-intercept of that doughnut cost model."
  answer="$(0,25{,}000)$ — if the company does not produce a single doughnut, they still incur a cost of 25,000 dollars."
  hint="The $y$-intercept is the output when the input is zero, so set $x=0$."
>}}
$(0,25{,}000)$ — if the company does not produce a single doughnut, they still incur a cost of 25,000 dollars.
$(0,0.25)$ — each additional doughnut adds 25 cents to the cost.
$(25{,}000,0)$ — the cost falls to zero once 25,000 doughnuts are produced.
$(0,25{,}000.25)$ — the cost of producing the very first doughnut.
{{< /multiplechoice >}}

{{< fillin
  question="A city's population has been growing linearly. In 2008, the population was 28,200. By 2012, the population was 36,800. Assume this trend continues. Identify the year in which the population will reach 54,000."
  answer="2020"
  answerDisplay="the year 2020"
  hint="Let $t$ be years since 2008, find the slope from the two given points, then solve $P(t)=54{,}000$ for $t$."
>}}

### Using a diagram to model a problem

It is useful for many real-world applications to draw a picture to gain a
sense of how the variables representing the input and output may be used to
answer a question. To draw the picture, first consider what the problem is
asking for. Then, determine the input and the output. The diagram should
relate the variables. Often, geometrical shapes or figures are drawn.
Distances are often traced out. If a right triangle is sketched, the
Pythagorean Theorem relates the sides. If a rectangle is sketched, labeling
width and height is helpful.

**Example.** Anna and Emanuel start at the same intersection. Anna walks east
at 4 miles per hour while Emanuel walks south at 3 miles per hour. They are
communicating with a two-way radio that has a range of 2 miles. How long after
they start walking will they fall out of radio contact?

**Solution.** In essence, we can partially answer this question by saying they
will fall out of radio contact when they are 2 miles apart, which leads us to
ask a new question:

"How long will it take them to be 2 miles apart?"

In this problem, our changing quantities are time and position, but ultimately
we need to know how long will it take for them to be 2 miles apart. We can see
that time will be our input variable, so we'll define our input and output
variables.

- Input: $t$, time in hours
- Output: $A(t)$, distance in miles, and $E(t)$, distance in miles

Because it is not obvious how to define our output variable, we'll start by
drawing a picture such as the one below.

<div class="ap-figure" data-spec='{"type":"figure","ariaLabel":"A right triangle diagram. From the starting intersection at the top left corner, a horizontal arrow points east to Anna and is labelled Anna walking east, 4 miles per hour. A vertical arrow points south from the same intersection to Emanuel and is labelled Emanuel walking south, 3 miles per hour. A dashed line joins Emanuel to Anna and is labelled Distance between them.","unit":50,"padding":46,"segments":[{"from":[0,3],"to":[4,3],"arrow":true},{"from":[0,3],"to":[0,0],"arrow":true},{"from":[0,0],"to":[4,3],"dashed":true}],"texts":[{"at":[2,3],"text":"Anna walking east, 4 miles/hour","anchor":"middle","dy":-12},{"at":[2.78,0.36],"text":"Distance between them","anchor":"middle"},{"at":[0,0],"text":"Emanuel walking south,","dx":10,"dy":18},{"at":[0,0],"text":"3 miles/hour","dx":10,"dy":33}]}'>
<svg role="img" aria-label="A right triangle diagram. From the starting intersection at the top left corner, a horizontal arrow points east to Anna and is labelled Anna walking east, 4 miles per hour. A vertical arrow points south from the same intersection to Emanuel and is labelled Emanuel walking south, 3 miles per hour. A dashed line joins Emanuel to Anna and is labelled Distance between them." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 242" width="292" height="242" font-family="Helvetica, Arial, sans-serif">
  <line x1="46" y1="46" x2="240" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="246,46 238,50 238,42" fill="currentColor"/>
  <line x1="46" y1="46" x2="46" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="46,196 42,188 50,188" fill="currentColor"/>
  <line x1="46" y1="196" x2="246" y2="46" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="146" y="34" font-size="13" fill="currentColor" text-anchor="middle">Anna walking east, 4 miles/hour</text>
  <text x="185" y="178" font-size="13" fill="currentColor" text-anchor="middle">Distance between them</text>
  <text x="56" y="214" font-size="13" fill="currentColor">Emanuel walking south,</text>
  <text x="56" y="229" font-size="13" fill="currentColor">3 miles/hour</text>
</svg>
</div>

Initial Value: They both start at the same intersection so when $t=0$, the
distance traveled by each person should also be 0. Thus the initial value for
each is 0.

Rate of Change: Anna is walking 4 miles per hour and Emanuel is walking 3
miles per hour, which are both rates of change. The slope for $A$ is 4 and the
slope for $E$ is 3.

Using those values, we can write formulas for the distance each person has
walked.

$$
\begin{array}{lrcl}
& A(t) &=& 4t \\[4pt]
& E(t) &=& 3t
\end{array}
$$

For this problem, the distances from the starting point are important. To
notate these, we can define a coordinate system, identifying the "starting
point" at the intersection where they both started. Then we can use the
variable, $A$, which we introduced above, to represent Anna's position, and
define it to be a measurement from the starting point in the eastward
direction. Likewise, can use the variable, $E$, to represent Emanuel's
position, measured from the starting point in the southward direction. Note
that in defining the coordinate system, we specified both the starting point
of the measurement and the direction of measure.

We can then define a third variable, $D$, to be the measurement of the
distance between Anna and Emanuel. Showing the variables on the diagram is
often helpful, as we can see below.

Recall that we need to know how long it takes for $D$, the distance between
them, to equal 2 miles. Notice that for any given input $t$, the outputs
$A(t)$, $E(t)$, and $D(t)$ represent distances.

<div class="ap-figure" data-spec='{"type":"figure","ariaLabel":"The same right triangle with its sides named. The horizontal side from the intersection east to Anna is A, the vertical side from the intersection south to Emanuel is E, and the dashed side joining Emanuel to Anna is D. A small square marks the right angle at the intersection.","unit":50,"padding":34,"segments":[{"from":[0,3],"to":[4,3],"arrow":true,"label":"A"},{"from":[0,3],"to":[0,0],"arrow":true,"labelSide":"right","label":"E"},{"from":[0,0],"to":[4,3],"dashed":true,"label":"D"}],"rightAngles":[{"at":[0,3],"dirs":[[1,0],[0,-1]]}]}'>
<svg role="img" aria-label="The same right triangle with its sides named. The horizontal side from the intersection east to Anna is A, the vertical side from the intersection south to Emanuel is E, and the dashed side joining Emanuel to Anna is D. A small square marks the right angle at the intersection." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 218" width="268" height="218" font-family="Helvetica, Arial, sans-serif">
  <line x1="34" y1="34" x2="228" y2="34" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="234,34 226,38 226,30" fill="currentColor"/>
  <text x="134" y="20" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <line x1="34" y1="34" x2="34" y2="178" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="34,184 30,176 38,176" fill="currentColor"/>
  <text x="22" y="113" text-anchor="end" font-size="13" fill="currentColor">E</text>
  <line x1="34" y1="184" x2="234" y2="34" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="126.8" y="97.4" text-anchor="end" font-size="13" fill="currentColor">D</text>
  <path d="M 44 34 L 44 44 L 34 44" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

The diagram shows us that we can use the Pythagorean Theorem because we have
drawn a right angle.

Using the Pythagorean Theorem, we get:

$$
\begin{array}{lrcl}
& D(t)^2 &=& A(t)^2+E(t)^2 \\[4pt]
& &=& (4t)^2+(3t)^2 \\[4pt]
& &=& 16t^2+9t^2 \\[4pt]
& &=& 25t^2 \\[4pt]
\text{Solve for }D(t)\text{ using the square root.} & D(t) &=& \pm\sqrt{25t^2} \\[4pt]
& &=& \pm 5\lvert t\rvert
\end{array}
$$

In this scenario we are considering only positive values of $t$, so our
distance $D(t)$ will always be positive. We can simplify this answer to
$D(t)=5t$. This means that the distance between Anna and Emanuel is also a
linear function. Because $D$ is a linear function, we can now answer the
question of when the distance between them will reach 2 miles. We will set the
output $D(t)=2$ and solve for $t$.

$$
\begin{array}{lrcl}
& D(t) &=& 2 \\[4pt]
& 5t &=& 2 \\[4pt]
& t &=& \tfrac{2}{5}=0.4
\end{array}
$$

They will fall out of radio contact in 0.4 hours, or 24 minutes.

{{< callout type="info" >}}
  **Q&A.** *Should I draw diagrams when given information based on a geometric
  shape?*

  Yes. Sketch the figure and label the quantities and unknowns on the sketch.
{{< /callout >}}

**Example.** There is a straight road leading from the town of Westborough to
Agritown 30 miles east and 10 miles north. Partway down this road, it
junctions with a second road, perpendicular to the first, leading to the town
of Eastborough. If the town of Eastborough is located 20 miles directly east
of the town of Westborough, how far is the road junction from Westborough?

**Solution.** It might help here to draw a picture of the situation. It would
then be helpful to introduce a coordinate system. While we could place the
origin anywhere, placing it at Westborough seems convenient. This puts
Agritown at coordinates $(30,10)$, and Eastborough at $(20,0)$.

<div class="ap-figure" data-spec='{"type":"figure","ariaLabel":"A coordinate diagram. The origin, labelled Westborough, is at (0, 0). Eastborough is the marked point (20, 0) on the horizontal axis, 20 miles east of Westborough. Agritown is the marked point (30, 10). A straight road runs from Westborough to Agritown, and a second road runs from Eastborough to meet it at a right angle.","unit":9,"padding":40,"segments":[{"from":[0,0],"to":[34,0],"arrow":true},{"from":[0,0],"to":[0,13],"arrow":true},{"from":[0,0],"to":[30,10]},{"from":[20,0],"to":[18,6]}],"points":[{"at":[0,0]},{"at":[20,0]},{"at":[30,10]}],"rightAngles":[{"at":[18,6],"dirs":[[12,4],[2,-6]]}],"texts":[{"at":[30,10],"text":"Agritown","anchor":"end","dx":-6,"dy":-8},{"at":[30,10],"text":"(30, 10)","dx":8,"dy":4},{"at":[0,0],"text":"(0, 0)","anchor":"end","dx":-4,"dy":-4},{"at":[0,0],"text":"Westborough","anchor":"middle","dy":16},{"at":[20,0],"text":"(20, 0)","dx":4,"dy":-6},{"at":[20,0],"text":"Eastborough","anchor":"middle","dy":16},{"at":[10,0],"text":"20 miles","anchor":"middle","dy":16}]}'>
<svg role="img" aria-label="A coordinate diagram. The origin, labelled Westborough, is at (0, 0). Eastborough is the marked point (20, 0) on the horizontal axis, 20 miles east of Westborough. Agritown is the marked point (30, 10). A straight road runs from Westborough to Agritown, and a second road runs from Eastborough to meet it at a right angle." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386 197" width="386" height="197" font-family="Helvetica, Arial, sans-serif">
  <line x1="40" y1="157" x2="340" y2="157" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="346,157 338,161 338,153" fill="currentColor"/>
  <line x1="40" y1="157" x2="40" y2="46" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="40,40 44,48 36,48" fill="currentColor"/>
  <line x1="40" y1="157" x2="310" y2="67" stroke="currentColor" stroke-width="1.5"/>
  <line x1="220" y1="157" x2="202" y2="103" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 211.5 99.8 L 214.6 109.3 L 205.2 112.5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="40" cy="157" r="2.5" fill="currentColor"/>
  <circle cx="220" cy="157" r="2.5" fill="currentColor"/>
  <circle cx="310" cy="67" r="2.5" fill="currentColor"/>
  <text x="304" y="59" font-size="13" fill="currentColor" text-anchor="end">Agritown</text>
  <text x="318" y="71" font-size="13" fill="currentColor">(30, 10)</text>
  <text x="36" y="153" font-size="13" fill="currentColor" text-anchor="end">(0, 0)</text>
  <text x="40" y="173" font-size="13" fill="currentColor" text-anchor="middle">Westborough</text>
  <text x="224" y="151" font-size="13" fill="currentColor">(20, 0)</text>
  <text x="220" y="173" font-size="13" fill="currentColor" text-anchor="middle">Eastborough</text>
  <text x="130" y="173" font-size="13" fill="currentColor" text-anchor="middle">20 miles</text>
</svg>
</div>

Using this point along with the origin, we can find the slope of the line from
Westborough to Agritown:

$$m=\frac{10-0}{30-0}=\frac{1}{3}$$

The equation of the road from Westborough to Agritown would be

$$W(x)=\tfrac{1}{3}x$$

From this, we can determine the perpendicular road to Eastborough will have
slope $m=-3$. Because the town of Eastborough is at the point $(20,0)$, we can
find the equation:

$$
\begin{array}{lrcl}
& E(x) &=& -3x+b \\[4pt]
\text{Substitute in }(20,0). & 0 &=& -3(20)+b \\[4pt]
& b &=& 60 \\[4pt]
& E(x) &=& -3x+60
\end{array}
$$

We can now find the coordinates of the junction of the roads by finding the
intersection of these lines. Setting them equal,

$$
\begin{array}{lrcl}
& \tfrac{1}{3}x &=& -3x+60 \\[4pt]
& \tfrac{10}{3}x &=& 60 \\[4pt]
& 10x &=& 180 \\[4pt]
\text{Substituting this back into }W(x)\text{,} & x &=& 18 \\[4pt]
& y &=& W(18) \\[4pt]
& &=& \tfrac{1}{3}(18) \\[4pt]
& &=& 6
\end{array}
$$

The roads intersect at the point $(18,6)$. Using the distance formula, we can
now find the distance from Westborough to the junction.

$$
\begin{array}{lrcl}
& \text{distance} &=& \sqrt{(x_2-x_1)^2+(y_2-y_1)^2} \\[4pt]
& &=& \sqrt{(18-0)^2+(6-0)^2} \\[4pt]
& &\approx& 18.974\ \text{miles}
\end{array}
$$

*Analysis.* One nice use of linear models is to take advantage of the fact
that the graphs of these functions are lines. This means real-world
applications discussing maps need linear functions to model the distances
between reference points.

{{< fillin
  question="There is a straight road leading from the town of Timpson to Ashburn 60 miles east and 12 miles north. Partway down the road, it junctions with a second road, perpendicular to the first, leading to the town of Garrison. If the town of Garrison is located 22 miles directly east of the town of Timpson, how far is the road junction from Timpson? Round to the nearest hundredth of a mile."
  answer="21.57"
  answerDisplay="about $21.57$ miles"
  hint="Put Timpson at the origin and Ashburn at $(60,12)$; the road to Garrison is the perpendicular line through $(22,0)$, so find where the two lines meet and use the distance formula."
>}}

## Building systems of linear models

Real-world situations including two or more linear functions may be modeled
with a **system of linear equations**. Remember, when solving a system of
linear equations, we are looking for points the two lines have in common.
Typically, there are three types of answers possible, as shown below.

**(a) Exactly one solution**

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Two lines on a coordinate plane, f rising and g falling. They cross at a single point above the horizontal axis and to the right of the vertical axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"lines":[{"slope":2,"intercept":1,"label":"f"},{"slope":-2,"intercept":3,"label":"g"}]}'>
<svg role="img" aria-label="Two lines on a coordinate plane, f rising and g falling. They cross at a single point above the horizontal axis and to the right of the vertical axis." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="66.5" y1="231.1" x2="167.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="172,20 172,31.2 163.1,26.7" fill="currentColor"/>
  <polygon points="62,240 62,228.8 70.9,233.3" fill="currentColor"/>
  <line x1="118.5" y1="28.9" x2="219.5" y2="231.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="224,240 215.1,233.3 224,228.8" fill="currentColor"/>
  <polygon points="114,20 122.9,26.7 114,31.2" fill="currentColor"/>
  <text x="162.1" y="79.6" font-size="13" fill="currentColor" text-anchor="start">f</text>
  <text x="185.5" y="202.8" font-size="13" fill="currentColor" text-anchor="end">g</text>
</svg>
</div>

**(b) Infinitely many solutions**

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A single line on a coordinate plane. The graphs of f and g coincide, so the two functions share every point of the line.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"lines":[{"slope":2,"intercept":0,"label":"f = g"}]}'>
<svg role="img" aria-label="A single line on a coordinate plane. The graphs of f and g coincide, so the two functions share every point of the line." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="79.5" y1="231.1" x2="180.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="185,20 185,31.2 176.1,26.7" fill="currentColor"/>
  <polygon points="75,240 75,228.8 83.9,233.3" fill="currentColor"/>
  <text x="175.1" y="79.6" font-size="13" fill="currentColor" text-anchor="start">f = g</text>
</svg>
</div>

**(c) No solutions**

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"Two parallel lines on a coordinate plane, g above f. They have the same slope and never meet.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"grid":false,"lines":[{"slope":2,"intercept":2,"label":"g"},{"slope":2,"intercept":-2,"label":"f"}]}'>
<svg role="img" aria-label="Two parallel lines on a coordinate plane, g above f. They have the same slope and never meet." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="53.5" y1="231.1" x2="154.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="159,20 159,31.2 150.1,26.7" fill="currentColor"/>
  <polygon points="49,240 49,228.8 57.9,233.3" fill="currentColor"/>
  <line x1="105.5" y1="231.1" x2="206.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="211,20 211,31.2 202.1,26.7" fill="currentColor"/>
  <polygon points="101,240 101,228.8 109.9,233.3" fill="currentColor"/>
  <text x="149.1" y="79.6" font-size="13" fill="currentColor" text-anchor="start">g</text>
  <text x="201.1" y="79.6" font-size="13" fill="currentColor" text-anchor="start">f</text>
</svg>
</div>

{{< callout type="info" >}}
  **How to:** given a situation that represents a system of linear equations,
  write the system of equations and identify the solution.

  1. Identify the input and output of each linear model.
  2. Identify the slope and $y$-intercept of each linear model.
  3. Find the solution by setting the two linear functions equal to one
     another and solving for $x$, or find the point of intersection on a
     graph.
{{< /callout >}}

**Example.** Jamal is choosing between two truck-rental companies. The first,
Keep on Trucking, Inc., charges an up-front fee of \$20, then 59 cents a mile.
The second, Move It Your Way, charges an up-front fee of \$16, then 63 cents a
mile. When will Keep on Trucking, Inc. be the better choice for Jamal?

<small>Rates retrieved Aug 2, 2010 from budgettruck.com and uhaul.com.</small>

**Solution.** The two important quantities in this problem are the cost and
the number of miles driven. Because we have two companies to consider, we will
define two functions.

| Input | $d$, distance driven in miles |
| :--- | :--- |
| Outputs | $K(d)$: cost, in dollars, for renting from Keep on Trucking. $M(d)$: cost, in dollars, for renting from Move It Your Way. |
| Initial Value | Up-front fee: $K(0)=20$ and $M(0)=16$ |
| Rate of Change | \$0.59 per mile for $K$ and \$0.63 per mile for $M$ |

A linear function is of the form $f(x)=mx+b$. Using the rates of change and
initial charges, we can write the equations

$$
\begin{array}{lrcl}
& K(d) &=& 0.59d+20 \\[4pt]
& M(d) &=& 0.63d+16
\end{array}
$$

Using these equations, we can determine when Keep on Trucking, Inc., will be
the better choice. Because all we have to make that decision from is the
costs, we are looking for when Keep on Trucking, Inc. will cost less, or when
$K(d)<M(d)$. The solution pathway will lead us to find the equations for the
two functions, find the intersection, and then see where the $K(d)$ function
is smaller.

{{< callout type="info" >}}
  **Source note.** OpenStax names the other company here — "we are looking for
  when Move It Your Way, will cost less, or when $K(d)<M(d)$." Since $K$ is
  Keep on Trucking, the inequality $K(d)<M(d)$ is the condition for *Keep on
  Trucking* to cost less, which is also what the question asks and what the
  example concludes. This page names Keep on Trucking, Inc.; the mathematics
  is unchanged.
{{< /callout >}}

These graphs are sketched below, with $M(d)$ drawn dashed.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A graph of two cost lines against distance driven. The horizontal axis d runs from 0 to 170 miles and the vertical axis, in dollars, runs from 0 to 130. The line K of d equals 0.59d plus 20 starts at 20 dollars, and the line M of d equals 0.63d plus 16 starts at 16 dollars and is steeper. They cross at the marked point (100, 80), after which M lies above K.","xMin":0,"xMax":170,"yMin":0,"yMax":130,"xUnit":3,"yUnit":2.2,"gridStep":10,"tickLabels":true,"tickStep":10,"xLabel":"d","yLabel":"dollars","segments":[{"from":[0,20],"to":[165,117.35],"arrows":"end"},{"from":[0,16],"to":[165,119.95],"arrows":"end","dashed":true}],"points":[{"at":[100,80]}],"texts":[{"at":[35,68],"text":"K(d) = 0.59d + 20"},{"at":[60,42],"text":"M(d) = 0.63d + 16"},{"at":[100,80],"text":"(100, 80)","dx":8,"dy":16}]}'>
<svg role="img" aria-label="A graph of two cost lines against distance driven. The horizontal axis d runs from 0 to 170 miles and the vertical axis, in dollars, runs from 0 to 130. The line K of d equals 0.59d plus 20 starts at 20 dollars, and the line M of d equals 0.63d plus 16 starts at 16 dollars and is steeper. They cross at the marked point (100, 80), after which M lies above K." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562 338" width="562" height="338" font-family="Helvetica, Arial, sans-serif">
  <line x1="56" y1="312" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="312" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="312" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="312" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="312" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="312" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="312" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="312" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="312" x2="296" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="312" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="356" y1="312" x2="356" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="386" y1="312" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="416" y1="312" x2="416" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="446" y1="312" x2="446" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="476" y1="312" x2="476" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="506" y1="312" x2="506" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="536" y1="312" x2="536" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="536" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="268" x2="536" y2="268" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="536" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="536" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="536" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="536" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="536" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="536" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="114" x2="536" y2="114" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="536" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="536" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="536" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="536" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="312" x2="538" y2="312" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="312" stroke="currentColor" stroke-width="1"/>
  <polygon points="548,312 538,317 538,307" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="546" y="304" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">d</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">dollars</text>
  <line x1="56" y1="309" x2="56" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="327" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="86" y1="309" x2="86" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="327" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="116" y1="309" x2="116" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="327" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="146" y1="309" x2="146" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="327" font-size="11" fill="currentColor" text-anchor="middle">40</text>
  <line x1="176" y1="309" x2="176" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="327" font-size="11" fill="currentColor" text-anchor="middle">50</text>
  <line x1="206" y1="309" x2="206" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="327" font-size="11" fill="currentColor" text-anchor="middle">60</text>
  <line x1="236" y1="309" x2="236" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="327" font-size="11" fill="currentColor" text-anchor="middle">70</text>
  <line x1="266" y1="309" x2="266" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="327" font-size="11" fill="currentColor" text-anchor="middle">80</text>
  <line x1="296" y1="309" x2="296" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="327" font-size="11" fill="currentColor" text-anchor="middle">90</text>
  <line x1="326" y1="309" x2="326" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="326" y="327" font-size="11" fill="currentColor" text-anchor="middle">100</text>
  <line x1="356" y1="309" x2="356" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="356" y="327" font-size="11" fill="currentColor" text-anchor="middle">110</text>
  <line x1="386" y1="309" x2="386" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="386" y="327" font-size="11" fill="currentColor" text-anchor="middle">120</text>
  <line x1="416" y1="309" x2="416" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="416" y="327" font-size="11" fill="currentColor" text-anchor="middle">130</text>
  <line x1="446" y1="309" x2="446" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="446" y="327" font-size="11" fill="currentColor" text-anchor="middle">140</text>
  <line x1="476" y1="309" x2="476" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="476" y="327" font-size="11" fill="currentColor" text-anchor="middle">150</text>
  <line x1="506" y1="309" x2="506" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="506" y="327" font-size="11" fill="currentColor" text-anchor="middle">160</text>
  <line x1="536" y1="309" x2="536" y2="315" stroke="currentColor" stroke-width="1"/>
  <text x="536" y="327" font-size="11" fill="currentColor" text-anchor="middle">170</text>
  <line x1="23" y1="290" x2="29" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="294" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="268" x2="29" y2="268" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="272" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="246" x2="29" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="250" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="224" x2="29" y2="224" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="228" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="202" x2="29" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="206" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="180" x2="29" y2="180" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="184" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <line x1="23" y1="158" x2="29" y2="158" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="162" font-size="11" fill="currentColor" text-anchor="end">70</text>
  <line x1="23" y1="136" x2="29" y2="136" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="140" font-size="11" fill="currentColor" text-anchor="end">80</text>
  <line x1="23" y1="114" x2="29" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="118" font-size="11" fill="currentColor" text-anchor="end">90</text>
  <line x1="23" y1="92" x2="29" y2="92" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="96" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="23" y1="70" x2="29" y2="70" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="74" font-size="11" fill="currentColor" text-anchor="end">110</text>
  <line x1="23" y1="48" x2="29" y2="48" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="52" font-size="11" fill="currentColor" text-anchor="end">120</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">130</text>
  <line x1="26" y1="268" x2="511.8" y2="57.8" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="521,53.8 513.8,62.4 509.8,53.2" fill="currentColor"/>
  <line x1="26" y1="276.8" x2="511.9" y2="52.3" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/>
  <polygon points="521,48.1 514,56.8 509.8,47.8" fill="currentColor"/>
  <circle cx="326" cy="136" r="4" fill="currentColor"/>
  <text x="131" y="162.4" font-size="13" fill="currentColor">K(d) = 0.59d + 20</text>
  <text x="206" y="219.6" font-size="13" fill="currentColor">M(d) = 0.63d + 16</text>
  <text x="334" y="152" font-size="13" fill="currentColor">(100, 80)</text>
</svg>
</div>

To find the intersection, we set the equations equal and solve:

$$
\begin{array}{lrcl}
& K(d) &=& M(d) \\[4pt]
& 0.59d+20 &=& 0.63d+16 \\[4pt]
& 4 &=& 0.04d \\[4pt]
& 100 &=& d \\[4pt]
& d &=& 100
\end{array}
$$

This tells us that the cost from the two companies will be the same if 100
miles are driven. Either by looking at the graph, or noting that $K(d)$ is
growing at a slower rate, we can conclude that Keep on Trucking, Inc. will be
the cheaper price when more than 100 miles are driven, that is $d>100$.

## Key concepts

- We can use the same problem strategies that we would use for any type of
  function.
- When modeling and solving a problem, identify the variables and look for key
  values, including the slope and $y$-intercept.
- Draw a diagram, where appropriate.
- Check for reasonableness of the answer.
- Linear models may be built by identifying or calculating the slope and using
  the $y$-intercept.
- The $x$-intercept may be found by setting $y=0$, which is setting the
  expression $mx+b$ equal to 0.
- The point of intersection of a system of linear equations is the point where
  the $x$- and $y$-values are the same.
- A graph of the system may be used to identify the points where one line
  falls below (or above) the other line.

## Key terms

**linear function** — a function with a constant rate of change that is a
polynomial of degree 1, and whose graph is a straight line.
**$x$-intercept** — the point on the graph of a linear function when the
output value is 0; the point at which the graph crosses the horizontal axis.
**$y$-intercept** — the value of a function when the input value is zero; also
known as initial value.

## Practice

### Identify steps for modeling and solving

{{< multiplechoice
  question="Explain how to find the input variable in a word problem that uses a linear function."
  answer="Determine the independent variable — the variable upon which the output depends."
  hint="Think about which quantity drives the model and which quantity responds to it."
>}}
Determine the independent variable — the variable upon which the output depends.
Determine the dependent variable, since it changes as time passes.
Identify whichever quantity in the problem is measured in dollars.
Find the $y$-intercept and use it as the input variable.
{{< /multiplechoice >}}

{{< multiplechoice
  question="Explain how to interpret the initial value in a word problem that uses a linear function."
  answer="Find the output when the input is equal to zero."
  hint="The initial value is an output, so think about what input produces it."
>}}
Find the output when the input is equal to zero.
Find the input when the output is equal to zero.
Find the output when the input is at its largest value.
Find the slope of the line through any two data points.
{{< /multiplechoice >}}

### Build linear models from verbal descriptions

{{< fillin
  question="The weight of a newborn is 7.5 pounds. The baby gained one-half pound a month for its first year. Write the linear function that models the baby's weight $W$ as a function of its age in months, $t$. Enter the expression for $W(t)$."
  answer="0.5t+7.5"
  answerDisplay="$W(t)=0.5t+7.5$"
  hint="The birth weight is the initial value; the monthly gain is the rate of change."
>}}

{{< fillin
  question="Using that baby-weight model, at what age, in months, did the baby weigh 10.4 pounds?"
  answer="5.8"
  answerDisplay="$5.8$ months"
  hint="Set $W(t)=10.4$ and solve for $t$."
>}}

{{< fillin
  question="The number of people afflicted with the common cold in the winter months steadily decreased by 205 each year from 2005 until 2010. In 2005, 12,025 people were afflicted. Write the linear function that models the number of people afflicted, $C$, as a function of $t$, the number of years since 2005. Enter the expression for $C(t)$."
  answer="12025-205t"
  answerDisplay="$C(t)=12{,}025-205t$"
  hint="The 2005 count is the initial value; a steady yearly decrease is a negative rate of change."
>}}

{{< fillin
  question="Using that common-cold model, in what year will the number of people afflicted reach 0?"
  answer="2064"
  answerDisplay="the year 2064"
  hint="Set $C(t)=0$, solve for $t$, then add the result to 2005 and round to the nearest year."
>}}

{{< fillin
  question="The Federal Helium Reserve held about 16 billion cubic feet of helium in 2010 and is being depleted by about 2.1 billion cubic feet each year. Write a linear equation for the remaining reserves $R$, in billion cubic feet, in terms of $t$, the number of years since 2010. Enter the expression for $R(t)$."
  answer="16-2.1t"
  answerDisplay="$R(t)=16-2.1t$"
  hint="16 billion cubic feet is the initial value; the yearly depletion is a negative rate of change."
>}}

{{< fillin
  question="Using that helium-reserve model, if the rate of depletion doesn't change, what will the reserves be in 2015? Give your answer in billion cubic feet."
  answer="5.5"
  answerDisplay="$5.5$ billion cubic feet"
  hint="2015 corresponds to $t=5$; evaluate $R(5)$."
>}}

{{< fillin
  question="Using that same helium-reserve model, if the rate of depletion doesn't change, in what year will the Federal Helium Reserve be depleted?"
  answer="2017"
  answerDisplay="the year 2017"
  hint="Set $R(t)=0$, solve for $t$, then add the result to 2010."
>}}

The table below gives the median home value in Mississippi and Hawaii (adjusted for inflation) in 1950 and 2000. Assume the values changed linearly over that period.

| Year | Mississippi | Hawaii |
| :--- | :--- | :--- |
| 1950 | \$25,200 | \$74,400 |
| 2000 | \$71,400 | \$272,700 |

{{< multiplechoice
  question="Based on the table, in which state have home values increased at a higher rate?"
  answer="Hawaii"
  hint="Compute the rate of change (slope) for each state and compare the two."
>}}
Mississippi
Hawaii
{{< /multiplechoice >}}

### Build systems of linear models

{{< multiplechoice
  question="You are choosing between two prepaid cell phone plans. The first charges 26 cents per minute. The second charges a monthly fee of \$19.95 plus 11 cents per minute. For what number of minutes used per month is the second plan preferable?"
  answer="More than 133 minutes"
  hint="Set the two monthly costs equal to find the break-even number of minutes, then decide which side of it favors the second plan."
>}}
More than 133 minutes
Fewer than 133 minutes
Exactly 133 minutes
More than 181 minutes
{{< /multiplechoice >}}

{{< multiplechoice
  question="When hired at a new job selling jewelry, you are given two pay options. Option A: base salary of \$17,000 a year with a commission of 12% of your sales. Option B: base salary of \$20,000 a year with a commission of 5% of your sales. How much jewelry would you need to sell for Option A to produce a larger income?"
  answer="More than \$42,857.14 worth of jewelry"
  hint="Set the two income expressions equal to find the break-even sales amount, then decide which side favors Option A's higher commission rate."
>}}
More than \$42,857.14 worth of jewelry
Fewer than \$42,857.14 worth of jewelry
Exactly \$42,857.14 worth of jewelry
More than \$60,000 worth of jewelry
{{< /multiplechoice >}}

{{< multiplechoice
  question="When hired at a new job selling electronics, you are given two pay options. Option A: base salary of \$20,000 a year with a commission of 12% of your sales. Option B: base salary of \$26,000 a year with a commission of 3% of your sales. How much electronics would you need to sell for Option A to produce a larger income?"
  answer="More than \$66,666.67 worth of electronics"
  hint="Set the two income expressions equal to find the break-even sales amount, then decide which side favors Option A's higher commission rate."
>}}
More than \$66,666.67 worth of electronics
Fewer than \$66,666.67 worth of electronics
Exactly \$66,666.67 worth of electronics
More than \$86,666.67 worth of electronics
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 2.3: Modeling with Linear Functions](https://openstax.org/books/precalculus-2e/pages/2-3-modeling-with-linear-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every figure as an accessible inline SVG generated from explicit geometry — the Anna-and-Emanuel diagrams are drawn as a true 3-4-5 right triangle without the source's stock illustrations of the two walkers, the Westborough map is drawn from the coordinates the text names, the three system-outcome panels are drawn from the analytic lines $f(x)=2x+1$ and $g(x)=-2x+3$, $f(x)=g(x)=2x$, and $g(x)=2x+2$ and $f(x)=2x-2$, and the truck-rental graph is drawn from $K(d)=0.59d+20$ and $M(d)=0.63d+16$ with $M$ dashed, since the figures are monochrome and the source distinguishes the two lines by colour; replaced the source's colour-coded substitution graphic for $M(t)=mt+b$ with the equivalent substitution step, and labelled the truck-rental cost axis "dollars" rather than "\$"; presented the truck-rental input/output summary as a Markdown table; omitted the opening photograph of Seattle, which is a credit photo rather than instructional art, along with the media links; adapted selected end-of-section exercises from the Verbal, Algebraic, Numeric, and Real-World Applications subsections into the section-final Practice block, leaving out the Graphical subsection's two profit-graph exercises because their source figures are not reproduced on this page; and converted the practice problems ("Try Its") into interactive exercises with instant feedback, using multiple choice for the $y$-intercept interpretation, which is a verbal judgement that cannot be graded as free-response math, and omitting the population-in-2014 evaluation so the practice set stays within three questions — the question retained for that model asks for the year the population reaches 54,000, which requires the same model plus solving for the input. Three notes on the source: the table in the truck-rental example labels the second rate $P(d)$, though every other line of the example, including the figure, calls that function $M(d)$, so this page writes $M$; the sentence introducing that figure says "with $K(d)$ in blue", while the figure itself draws $K$ in orange and $M$ in blue, so this page identifies the two lines by their labels instead; and the sentence setting up that comparison names the wrong rental company for the inequality $K(d)<M(d)$, which this page corrects inline, quoting the source wording and the reason in a source note beside it.</small>
