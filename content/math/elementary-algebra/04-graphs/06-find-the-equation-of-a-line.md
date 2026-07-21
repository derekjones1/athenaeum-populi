---
title: Find the Equation of a Line
description: >-
  Finding an equation of a line given the slope and y-intercept, given the
  slope and a point, given two points, and finding equations of lines
  parallel or perpendicular to a given line — adapted from OpenStax
  Elementary Algebra 2e, Section 4.6.
source_section: "4.6"
weight: 6
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** find an equation of
  the line given the slope and $y$-intercept, find an equation of the line
  given the slope and a point, find an equation of the line given two
  points, find an equation of a line parallel to a given line, and find an
  equation of a line perpendicular to a given line.
{{< /callout >}}

The physical sciences, social sciences, and the business world are full of
situations that can be modeled with linear equations relating two variables.
If data appears to form a straight line when graphed, an equation of that
line can be used to predict the value of one variable based on the value of
the other. To create a mathematical model of a linear relation between two
variables, we must be able to find the equation of the line. In this section
we look at several ways to write the equation of a line — the method we use
is determined by what information we are given.

## Find an equation of the line given the slope and $y$-intercept

If we already know the slope and $y$-intercept of a line, we can find its
equation by substituting the values directly into the slope-intercept form,
$y = mx + b$.

**Example.** Find an equation of a line with slope $-7$ and $y$-intercept
$(0, -1)$.

We substitute $m = -7$ and $b = -1$ into $y = mx + b$:

$$y = -7x + (-1) = -7x - 1$$

**Example.** Find the equation of the line shown, whose $y$-intercept is
$(0, -4)$ and which also passes through $(3, -2)$.

We find the slope by counting the rise and run between the two points:
$m = \tfrac{2}{3}$. Substituting $m = \tfrac{2}{3}$ and $b = -4$ into
$y = mx + b$:

$$y = \frac{2}{3}x - 4$$

{{< fillin
  question="Find an equation of a line with slope $\tfrac{2}{5}$ and y-intercept $(0, 4)$."
  answer="\frac{2}{5}x+4"
  answerDisplay="$y = \tfrac{2}{5}x + 4$"
  hint="Substitute the slope for m and the y-intercept's y-value for b into y = mx + b."
>}}

{{< fillin
  question="Find an equation of a line with slope -1 and y-intercept (0, -3)."
  answer="-x-3"
  answerDisplay="$y = -x - 3$"
  hint="Substitute the slope for m and the y-intercept's y-value for b into y = mx + b."
>}}

## Find an equation of the line given the slope and a point

The slope-intercept form works well when we know the slope and $y$-intercept.
But what if we know the slope and some other point that isn't the
$y$-intercept? We can derive another form of the equation by starting with the
slope formula for a line through a specific point $(x_1, y_1)$ and some other
point $(x, y)$:

$$m = \frac{y - y_1}{x - x_1}$$

Multiplying both sides by $x - x_1$ and simplifying gives $y - y_1 = m(x - x_1)$.

{{< callout type="info" >}}
  **Point-slope form of an equation of a line.** The point-slope form of an
  equation of a line with slope $m$ and containing the point $(x_1, y_1)$ is
  $$y - y_1 = m(x - x_1)$$
{{< /callout >}}

We can use the point-slope form to find an equation of a line when we are
given the slope and one point, then rewrite the equation in slope-intercept
form.

{{< callout type="info" >}}
  **Find an equation of a line given the slope and a point.**

  1. Identify the slope.
  2. Identify the point.
  3. Substitute the values into the point-slope form, $y - y_1 = m(x - x_1)$.
  4. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a line with slope $m = \tfrac{2}{5}$ that
contains the point $(10, 3)$. Write the equation in slope-intercept form.

Substituting $m = \tfrac{2}{5}$ and $(x_1, y_1) = (10, 3)$ into the point-slope
form:

$$
\begin{align}
y - y_1 &= m(x - x_1) \\
y - 3 &= \frac{2}{5}(x - 10) \\
y - 3 &= \frac{2}{5}x - 4 \\
y &= \frac{2}{5}x - 1
\end{align}
$$

**Example.** Find an equation of a horizontal line that contains the point
$(-1, 2)$. Write the equation in slope-intercept form.

Every horizontal line has slope $0$. Substituting $m = 0$ and
$(x_1, y_1) = (-1, 2)$:

$$
\begin{align}
y - y_1 &= m(x - x_1) \\
y - 2 &= 0(x - (-1)) \\
y - 2 &= 0 \\
y &= 2
\end{align}
$$

This is the equation of the horizontal line $y = 2$.

{{< fillin
  question="Find an equation of a line with slope $m = -\tfrac{1}{3}$ that contains the point $(6, -4)$. Write the equation in slope-intercept form."
  answer="-\frac{1}{3}x-2"
  answerDisplay="$y = -\tfrac{1}{3}x - 2$"
  hint="Substitute m and the point into $y - y_1 = m(x - x_1)$, then simplify and solve for y."
>}}

## Find an equation of the line given two points

When real-world data is collected, a linear model can often be created from
just two data points. We have two options so far for finding an equation of a
line: slope-intercept or point-slope. Since we will know two points rather
than the slope directly, it makes more sense to first find the slope from the
two points, then use the point-slope form.

{{< callout type="info" >}}
  **Find an equation of a line given two points.**

  1. Find the slope using the given points.
  2. Choose one point.
  3. Substitute the values into the point-slope form, $y - y_1 = m(x - x_1)$.
  4. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a line that contains the points $(5, 4)$ and
$(3, 6)$. Write the equation in slope-intercept form.

First we find the slope:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{6 - 4}{3 - 5} = \frac{2}{-2} = -1$$

Choosing the point $(5, 4)$ and substituting into the point-slope form:

$$
\begin{align}
y - y_1 &= m(x - x_1) \\
y - 4 &= -1(x - 5) \\
y - 4 &= -x + 5 \\
y &= -x + 9
\end{align}
$$

Using the other point, $(3, 6)$, gives the same equation.

**Example.** Find an equation of a line that contains the points $(-2, 4)$
and $(-2, -3)$. Write the equation in slope-intercept form.

Finding the slope:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{-3 - 4}{-2 - (-2)} = \frac{-7}{0}$$

The slope is undefined, telling us this is a vertical line. Both points have
$x$-coordinate $-2$, so the equation of the line is $x = -2$. Since there is
no $y$, we cannot write it in slope-intercept form.

{{< callout type="info" >}}
  **To write an equation of a line**

  | If given: | Use: | Form: |
  | :--- | :--- | :--- |
  | Slope and $y$-intercept | slope-intercept | $y = mx + b$ |
  | Slope and a point | point-slope | $y - y_1 = m(x - x_1)$ |
  | Two points | point-slope | $y - y_1 = m(x - x_1)$ |
{{< /callout >}}

{{< fillin
  question="Find an equation of a line that contains the points (3, 1) and (5, 6). Write the equation in slope-intercept form."
  answer="\frac{5}{2}x-\frac{13}{2}"
  answerDisplay="$y = \tfrac{5}{2}x - \tfrac{13}{2}$"
  hint="Find the slope from the two points first, then substitute one point into $y - y_1 = m(x - x_1)$ and solve for y."
>}}

## Find an equation of a line parallel to a given line

Suppose we need to find an equation of a line that passes through a specific
point and is parallel to a given line. Since parallel lines have the same
slope, we already have the slope we need — we just combine it with the given
point using the point-slope form. We write $m_\parallel$ for the slope of a
line parallel to a line with slope $m$.

{{< callout type="info" >}}
  **Find an equation of a line parallel to a given line.**

  1. Find the slope of the given line.
  2. Find the slope of the parallel line — parallel lines have the same
     slope.
  3. Identify the point.
  4. Substitute the values into the point-slope form, $y - y_1 = m(x - x_1)$.
  5. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a line parallel to $y = 2x - 3$ that
contains the point $(-2, 1)$. Write the equation in slope-intercept form.

The given line is in slope-intercept form with $m = 2$. Since parallel lines
have the same slope, $m_\parallel = 2$. Substituting $m = 2$ and
$(x_1, y_1) = (-2, 1)$ into the point-slope form:

$$
\begin{align}
y - y_1 &= m(x - x_1) \\
y - 1 &= 2(x - (-2)) \\
y - 1 &= 2x + 4 \\
y &= 2x + 5
\end{align}
$$

{{< fillin
  question="Find an equation of a line parallel to the line $y = 3x + 1$ that contains the point $(4, 2)$. Write the equation in slope-intercept form."
  answer="3x-10"
  answerDisplay="$y = 3x - 10$"
  hint="Parallel lines share the same slope. Substitute $m = 3$ and the point into $y - y_1 = m(x - x_1)$, then solve for y."
>}}

## Find an equation of a line perpendicular to a given line

Now consider finding a line through a specific point that is perpendicular
to a given line. Perpendicular lines have slopes that are negative
reciprocals of each other, so we again already have the slope we need. We
write $m_\perp$ for the slope of a line perpendicular to a line with slope
$m$.

{{< callout type="info" >}}
  **Find an equation of a line perpendicular to a given line.**

  1. Find the slope of the given line.
  2. Find the slope of the perpendicular line — perpendicular slopes are
     negative reciprocals of each other.
  3. Identify the point.
  4. Substitute the values into the point-slope form, $y - y_1 = m(x - x_1)$.
  5. Write the equation in slope-intercept form.
{{< /callout >}}

**Example.** Find an equation of a line perpendicular to $y = 2x - 3$ that
contains the point $(-2, 1)$. Write the equation in slope-intercept form.

The given line has $m = 2$, so the perpendicular slope is the negative
reciprocal, $m_\perp = -\tfrac{1}{2}$. Substituting $m = -\tfrac{1}{2}$ and
$(x_1, y_1) = (-2, 1)$:

$$
\begin{align}
y - y_1 &= m(x - x_1) \\
y - 1 &= -\frac{1}{2}(x - (-2)) \\
y - 1 &= -\frac{1}{2}x - 1 \\
y &= -\frac{1}{2}x
\end{align}
$$

**Example.** Find an equation of a line perpendicular to $x = 5$ that
contains the point $(3, -2)$. Write the equation in slope-intercept form.

The line $x = 5$ is vertical, so any line perpendicular to it must be
horizontal, with slope $0$. Substituting $m_\perp = 0$ and
$(x_1, y_1) = (3, -2)$:

$$
\begin{align}
y - y_1 &= m(x - x_1) \\
y - (-2) &= 0(x - 3) \\
y + 2 &= 0 \\
y &= -2
\end{align}
$$

**Example.** Find an equation of a line perpendicular to $y = -4$ that
contains the point $(-4, 2)$. Write the equation in slope-intercept form.

The line $y = -4$ is horizontal, so any line perpendicular to it must be
vertical, in the form $x = a$. Since the perpendicular line passes through
$(-4, 2)$, every point on it has $x$-coordinate $-4$. The equation of the
perpendicular line is $x = -4$.

{{< fillin
  question="Find an equation of a line perpendicular to the line $y = \tfrac{1}{2} x - 3$ that contains the point $(6, 4)$. Write the equation in slope-intercept form."
  answer="-2x+16"
  answerDisplay="$y = -2x + 16$"
  hint="The perpendicular slope is the negative reciprocal of $\tfrac{1}{2}$. Substitute that slope and the point into $y - y_1 = m(x - x_1)$, then solve for y."
>}}

{{< multiplechoice
  question="A line is perpendicular to $x = 4$. What form must its equation take?"
  hint="A line perpendicular to a vertical line is horizontal, and every horizontal line has slope 0."
  answer="$y = mx + b$ with $m = 0$"
>}}
$y = mx + b$ with $m = 0$
$x = a$
$y - y_1 = m(x - x_1)$ with $m$ undefined
it cannot be written as an equation
{{< /multiplechoice >}}

## Key terms

**point-slope form** — the form $y - y_1 = m(x - x_1)$ of an equation of a
line with slope $m$ that contains the point $(x_1, y_1)$; useful whenever the
slope and any one point (not necessarily the $y$-intercept) are known, or
when two points are known and the slope is found first.

---

<small>This section is adapted from [Elementary Algebra 2e, Section 4.6: Find the Equation of a Line](https://openstax.org/books/elementary-algebra-2e/pages/4-6-find-the-equation-of-a-line) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/elementary-algebra-2e). Changes: condensed the worked examples and tables; omitted the Be Prepared quiz, Media links, Self Check checklist, and Section Exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
