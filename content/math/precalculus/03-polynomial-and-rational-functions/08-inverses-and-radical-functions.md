---
title: Inverses and Radical Functions
description: >-
  Finding the inverse of a polynomial function by interchanging inputs and
  outputs, and restricting the domain of a function that is not one-to-one —
  including radical and rational functions — so that a valid inverse exists —
  adapted from OpenStax Precalculus 2e, Section 3.8.
source_section: "3.8"
weight: 8
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the inverse of a polynomial function
- Restrict the domain to find the inverse of a polynomial function
{{< /callout >}}

Park rangers and other trail managers may construct rock piles, stacks, or
other arrangements, usually called cairns, to mark trails or other
landmarks. (Rangers and environmental scientists discourage hikers from
doing the same, in order to avoid confusion and preserve the habitats of
plants and animals.) A cairn in the form of a mound of gravel is in the
shape of a cone with the height equal to twice the radius.

The volume is found using a formula from elementary geometry.

$$
\begin{array}{lrcl}
& V &=& \tfrac{1}{3}\pi r^2h \\[4pt]
& &=& \tfrac{1}{3}\pi r^2(2r) \\[4pt]
& &=& \tfrac{2}{3}\pi r^3
\end{array}
$$

We have written the volume $V$ in terms of the radius $r$. However, in some
cases, we may start out with the volume and want to find the radius. For
example: a customer purchases 100 cubic feet of gravel to construct a
cone-shaped mound with a height twice the radius. What are the radius and
height of the new cone? To answer this question, we use the formula

$$r=\sqrt[3]{\tfrac{3V}{2\pi}}$$

This function is the inverse of the formula for $V$ in terms of $r$.

In this section, we will explore the inverses of polynomial and rational
functions and, in particular, the radical functions we encounter in the
process.

## Finding the inverse of a polynomial function

Two functions $f$ and $g$ are inverse functions if for every coordinate
pair in $f$, $(a,b)$, there exists a corresponding coordinate pair in the
**inverse function**, $g$, $(b,a)$. In other words, the coordinate pairs of
the inverse functions have the input and output interchanged.

For a function to have an inverse, it must be **one-to-one**.

For example, suppose the Sustainability Club builds a water runoff
collector in the shape of a parabolic trough, shown below. We can use the
information in the figure to find the surface area of the water in the
trough as a function of the depth of the water.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A schematic diagram of an open trough whose ends are parabolas. The near end is the parabola y = x squared over 2, 12 inches across the top and 18 inches deep, with an 18-inch height arrow beside it, from the level of the vertex up to the top rim. The trough runs 3 feet back along its top edges to the far end, whose 12-inch top rim is labelled; a line along the bottom joins the two ends.","unit":7.5,"segments":[{"from":[-6.0,18.0],"to":[-5.8,16.82]},{"from":[-5.8,16.82],"to":[-5.6,15.68]},{"from":[-5.6,15.68],"to":[-5.4,14.58]},{"from":[-5.4,14.58],"to":[-5.2,13.52]},{"from":[-5.2,13.52],"to":[-5.0,12.5]},{"from":[-5.0,12.5],"to":[-4.8,11.52]},{"from":[-4.8,11.52],"to":[-4.6,10.58]},{"from":[-4.6,10.58],"to":[-4.4,9.68]},{"from":[-4.4,9.68],"to":[-4.2,8.82]},{"from":[-4.2,8.82],"to":[-4.0,8.0]},{"from":[-4.0,8.0],"to":[-3.8,7.22]},{"from":[-3.8,7.22],"to":[-3.6,6.48]},{"from":[-3.6,6.48],"to":[-3.4,5.78]},{"from":[-3.4,5.78],"to":[-3.2,5.12]},{"from":[-3.2,5.12],"to":[-3.0,4.5]},{"from":[-3.0,4.5],"to":[-2.8,3.92]},{"from":[-2.8,3.92],"to":[-2.6,3.38]},{"from":[-2.6,3.38],"to":[-2.4,2.88]},{"from":[-2.4,2.88],"to":[-2.2,2.42]},{"from":[-2.2,2.42],"to":[-2.0,2.0]},{"from":[-2.0,2.0],"to":[-1.8,1.62]},{"from":[-1.8,1.62],"to":[-1.6,1.28]},{"from":[-1.6,1.28],"to":[-1.4,0.98]},{"from":[-1.4,0.98],"to":[-1.2,0.72]},{"from":[-1.2,0.72],"to":[-1.0,0.5]},{"from":[-1.0,0.5],"to":[-0.8,0.32]},{"from":[-0.8,0.32],"to":[-0.6,0.18]},{"from":[-0.6,0.18],"to":[-0.4,0.08]},{"from":[-0.4,0.08],"to":[-0.2,0.02]},{"from":[-0.2,0.02],"to":[0.0,0.0]},{"from":[0.0,0.0],"to":[0.2,0.02]},{"from":[0.2,0.02],"to":[0.4,0.08]},{"from":[0.4,0.08],"to":[0.6,0.18]},{"from":[0.6,0.18],"to":[0.8,0.32]},{"from":[0.8,0.32],"to":[1.0,0.5]},{"from":[1.0,0.5],"to":[1.2,0.72]},{"from":[1.2,0.72],"to":[1.4,0.98]},{"from":[1.4,0.98],"to":[1.6,1.28]},{"from":[1.6,1.28],"to":[1.8,1.62]},{"from":[1.8,1.62],"to":[2.0,2.0]},{"from":[2.0,2.0],"to":[2.2,2.42]},{"from":[2.2,2.42],"to":[2.4,2.88]},{"from":[2.4,2.88],"to":[2.6,3.38]},{"from":[2.6,3.38],"to":[2.8,3.92]},{"from":[2.8,3.92],"to":[3.0,4.5]},{"from":[3.0,4.5],"to":[3.2,5.12]},{"from":[3.2,5.12],"to":[3.4,5.78]},{"from":[3.4,5.78],"to":[3.6,6.48]},{"from":[3.6,6.48],"to":[3.8,7.22]},{"from":[3.8,7.22],"to":[4.0,8.0]},{"from":[4.0,8.0],"to":[4.2,8.82]},{"from":[4.2,8.82],"to":[4.4,9.68]},{"from":[4.4,9.68],"to":[4.6,10.58]},{"from":[4.6,10.58],"to":[4.8,11.52]},{"from":[4.8,11.52],"to":[5.0,12.5]},{"from":[5.0,12.5],"to":[5.2,13.52]},{"from":[5.2,13.52],"to":[5.4,14.58]},{"from":[5.4,14.58],"to":[5.6,15.68]},{"from":[5.6,15.68],"to":[5.8,16.82]},{"from":[5.8,16.82],"to":[6.0,18.0]},{"from":[27.333,9.056],"to":[27.475,9.113]},{"from":[27.475,9.113],"to":[27.617,9.19]},{"from":[27.617,9.19],"to":[27.758,9.288]},{"from":[27.758,9.288],"to":[27.9,9.405]},{"from":[27.9,9.405],"to":[28.042,9.543]},{"from":[28.042,9.543],"to":[28.183,9.7]},{"from":[28.183,9.7],"to":[28.325,9.878]},{"from":[28.325,9.878],"to":[28.467,10.076]},{"from":[28.467,10.076],"to":[28.608,10.293]},{"from":[28.608,10.293],"to":[28.75,10.531]},{"from":[28.75,10.531],"to":[28.892,10.789]},{"from":[28.892,10.789],"to":[29.033,11.067]},{"from":[29.033,11.067],"to":[29.175,11.365]},{"from":[29.175,11.365],"to":[29.317,11.683]},{"from":[29.317,11.683],"to":[29.458,12.022]},{"from":[29.458,12.022],"to":[29.6,12.38]},{"from":[29.6,12.38],"to":[29.742,12.758]},{"from":[29.742,12.758],"to":[29.883,13.157]},{"from":[29.883,13.157],"to":[30.025,13.575]},{"from":[30.025,13.575],"to":[30.167,14.014]},{"from":[30.167,14.014],"to":[30.308,14.473]},{"from":[30.308,14.473],"to":[30.45,14.951]},{"from":[30.45,14.951],"to":[30.592,15.45]},{"from":[30.592,15.45],"to":[30.733,15.969]},{"from":[30.733,15.969],"to":[30.875,16.508]},{"from":[30.875,16.508],"to":[31.017,17.067]},{"from":[31.017,17.067],"to":[31.158,17.646]},{"from":[31.158,17.646],"to":[31.3,18.245]},{"from":[31.3,18.245],"to":[31.442,18.864]},{"from":[31.442,18.864],"to":[31.583,19.503]},{"from":[31.583,19.503],"to":[31.725,20.163]},{"from":[31.725,20.163],"to":[31.867,20.842]},{"from":[31.867,20.842],"to":[32.008,21.542]},{"from":[32.008,21.542],"to":[32.15,22.261]},{"from":[32.15,22.261],"to":[32.292,23.001]},{"from":[32.292,23.001],"to":[32.433,23.761]},{"from":[32.433,23.761],"to":[32.575,24.54]},{"from":[32.575,24.54],"to":[32.717,25.34]},{"from":[32.717,25.34],"to":[32.858,26.16]},{"from":[32.858,26.16],"to":[33.0,27.0]},{"from":[0.333,0.056],"to":[27.333,9.056]},{"from":[-6,18],"to":[6,18]},{"from":[21.0,27.0],"to":[33.0,27.0],"label":"12 in"},{"from":[-6,18],"to":[21.0,27.0],"label":"3 ft"},{"from":[6,18],"to":[33.0,27.0]},{"from":[-8,0],"to":[-8,18],"arrow":"both","label":"18 in"}]}
{{< /apfigure >}}

Because it will be helpful to have an equation for the parabolic
cross-sectional shape, we will impose a coordinate system at the cross
section, with $x$ measured horizontally and $y$ measured vertically, with
the origin at the vertex of the parabola. See the graph below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals one-half x squared, an upward parabola with vertex at the origin, with arrows at both ends leaving the top of the frame near x = -6.3 and x = 6.3. The x-axis runs from -8 to 8 and the y-axis from -2 to 20, both numbered every 2.","xMin":-8,"xMax":8,"yMin":-2,"yMax":20,"unit":19,"xGridStep":2,"yGridStep":2,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":0.5}]}
{{< /apfigure >}}

From this we find an equation for the parabolic shape. We placed the
origin at the vertex of the parabola, so we know the equation will have
form $y(x)=ax^2$. Our equation will need to pass through the point
$(6,18)$, from which we can solve for the stretch factor $a$.

$$
\begin{array}{lrcl}
& 18 &=& a\cdot6^2 \\[4pt]
& a &=& \tfrac{18}{36} \\[4pt]
& &=& \tfrac{1}{2}
\end{array}
$$

Our parabolic cross section has the equation

$$y(x)=\tfrac{1}{2}x^2$$

We are interested in the surface area of the water, so we must determine
the width at the top of the water as a function of the water depth. For
any depth $y$ the width will be given by $2x$, so we need to solve the
equation above for $x$ and find the inverse function. However, notice that
the original function is not one-to-one, and indeed, given any output
there are two inputs that produce the same output, one positive and one
negative.

To find an inverse, we can restrict our original function to a limited
domain on which it is one-to-one. In this case, it makes sense to restrict
ourselves to positive $x$ values. On this domain, we can find an inverse
by solving for the input variable:

$$
\begin{array}{lrcl}
& y &=& \tfrac{1}{2}x^2 \\[4pt]
& 2y &=& x^2 \\[4pt]
& x &=& \pm\sqrt{2y} \\[4pt]
\therefore & y &=& \pm\sqrt{2x}
\end{array}
$$

This is not a function as written. Since we are limiting ourselves to
positive $x$ values in the original function, we can eliminate the
negative solution, which gives us the inverse function we're looking for.

$$y=\sqrt{2x}$$

Because $x$ is the distance from the center of the parabola to either
side, the entire width of the water at the top will be $2x$. The trough is
3 feet (36 inches) long, so the surface area will then be:

$$
\begin{array}{rcl}
\text{Area} &=& l\cdot w \\[4pt]
&=& 36\cdot2x \\[4pt]
&=& 72x \\[4pt]
&=& 72\sqrt{2y}
\end{array}
$$

This example illustrates two important points:

- When finding the inverse of a quadratic, we have to limit ourselves to a
  domain on which the function is one-to-one.
- The inverse of a quadratic function is a square root function. Both are
  toolkit functions and different types of power functions.

Functions involving roots are often called **radical functions**. While it
is not possible to find an inverse of most polynomial functions, some
basic polynomials do have inverses. Such functions are called
**invertible functions**, and we use the notation $f^{-1}(x)$.

Warning: $f^{-1}(x)$ is not the same as the reciprocal of the function
$f(x)$. This use of "$-1$" is reserved to denote inverse functions. To
denote the reciprocal of a function $f(x)$, we would need to write
$(f(x))^{-1}=\tfrac{1}{f(x)}$.

An important relationship between inverse functions is that they "undo"
each other. If $f^{-1}$ is the inverse of a function $f$, then $f$ is the
inverse of the function $f^{-1}$. In other words, whatever the function
$f$ does to $x$, $f^{-1}$ undoes it — and vice versa. More formally, we
write

$$f^{-1}(f(x))=x,\ \text{for all }x\text{ in the domain of }f$$

and

$$f(f^{-1}(x))=x,\ \text{for all }x\text{ in the domain of }f^{-1}$$

{{< callout type="info" >}}
  **Verifying two functions are inverses of one another.** Two functions,
  $f$ and $g$, are inverses of one another if for all $x$ in the domain of
  $f$ and $g$.

  $$g(f(x))=f(g(x))=x$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a polynomial function, find the inverse of the
  function by restricting the domain in such a way that the new function
  is one-to-one.

  1. Replace $f(x)$ with $y$.
  2. Interchange $x$ and $y$.
  3. Solve for $y$, and rename the function $f^{-1}(x)$.
{{< /callout >}}

**Example.** Show that $f(x)=\tfrac{1}{x+1}$ and $f^{-1}(x)=\tfrac{1}{x}-1$
are inverses, for $x\ne0,-1$.

**Solution.** We must show that $f^{-1}(f(x))=x$ and $f(f^{-1}(x))=x$.

$$
\begin{array}{rcl}
f^{-1}(f(x)) &=& f^{-1}\left(\tfrac{1}{x+1}\right) \\[4pt]
&=& \cfrac{1}{\tfrac{1}{x+1}}-1 \\[4pt]
&=& (x+1)-1 \\[4pt]
&=& x
\end{array}
$$

$$
\begin{array}{rcl}
f(f^{-1}(x)) &=& f\left(\tfrac{1}{x}-1\right) \\[4pt]
&=& \cfrac{1}{\left(\tfrac{1}{x}-1\right)+1} \\[4pt]
&=& \cfrac{1}{\tfrac{1}{x}} \\[4pt]
&=& x
\end{array}
$$

Therefore, $f(x)=\tfrac{1}{x+1}$ and $f^{-1}(x)=\tfrac{1}{x}-1$ are
inverses.

{{< fillin
  question="To begin verifying that $f(x)=\tfrac{x+5}{3}$ and $f^{-1}(x)=3x-5$ are inverses, evaluate $f(1)$."
  answer="2"
  answerForm="decimal"
  answerDisplay="$f(1)=\tfrac{1+5}{3}=2$"
  hint="Substitute $x=1$ into $f(x)=\tfrac{x+5}{3}$."
>}}

{{< fillin
  question="Now evaluate $f^{-1}$ at that result."
  answer="1"
  answerForm="decimal"
  answerDisplay="$f^{-1}(2)=3(2)-5=1$, so $f^{-1}(f(1))=1$: $f^{-1}$ undoes $f$ at $x=1$, as it must if the two are inverses."
  hint="Substitute the value you just found into $f^{-1}(x)=3x-5$."
>}}

**Example.** Find the inverse of the function $f(x)=5x^3+1$.

**Solution.** This is a transformation of the basic cubic toolkit
function, and based on our knowledge of that function, we know it is
one-to-one. Solving for the inverse by solving for $x$.

$$
\begin{array}{lrcl}
& y &=& 5x^3+1 \\[4pt]
& x &=& 5y^3+1 \\[4pt]
& x-1 &=& 5y^3 \\[4pt]
& \tfrac{x-1}{5} &=& y^3 \\[4pt]
& f^{-1}(x) &=& \sqrt[3]{\tfrac{x-1}{5}}
\end{array}
$$

**Analysis.** Look at the graph of $f$ and $f^{-1}$ below. Notice that the
two graphs are symmetrical about the line $y=x$. This is always the case
when graphing a function and its inverse function.

Also, since the method involved interchanging $x$ and $y$, notice
corresponding points. If $(a,b)$ is on the graph of $f$, then $(b,a)$ is on
the graph of $f^{-1}$. Since $(0,1)$ is on the graph of $f$, then $(1,0)$
is on the graph of $f^{-1}$. Similarly, since $(1,6)$ is on the graph of
$f$, then $(6,1)$ is on the graph of $f^{-1}$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 5x cubed plus 1, rising steeply through (0, 1) and (1, 6), and its inverse, f inverse of x equals the cube root of the quantity x minus 1, divided by 5, passing through (1, 0) and (6, 1). A dashed line marks y = x, showing the two curves are mirror images across it.","xMin":-7,"xMax":7,"yMin":-7,"yMax":7,"unit":22,"xTickStep":2,"yTickStep":2,"tickLabels":true,"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"cubics":[{"a":5,"d":1}],"curves":[{"kind":"cbrt","a":0.5848035476425733,"h":1,"k":0}],"points":[{"at":[0,1],"label":"(0, 1)"},{"at":[1,6],"label":"(1, 6)"},{"at":[1,0],"label":"(1, 0)"},{"at":[6,1],"label":"(6, 1)"}],"texts":[{"at":[4.4,3.3],"text":"y = x","anchor":"start"},{"at":[1.5,4.4],"text":"f(x)","anchor":"start"},{"at":[3.4,1.25],"text":"f⁻¹(x)","anchor":"start"}]}
{{< /apfigure >}}

{{< fillin
  question="Find the inverse function of $f(x)=\sqrt[3]{x+4}$."
  answer="x^3-4"
  answerForm="expanded distributed no-like-terms"
  answerDisplay="$f^{-1}(x)=x^3-4$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ by cubing both sides."
>}}

## Restricting the domain to find the inverse of a polynomial function

So far, we have been able to find the inverse functions of **cubic
functions** without having to restrict their domains. However, as we know,
not all cubic polynomials are one-to-one. Some functions that are not
one-to-one may have their domain restricted so that they are one-to-one,
but only over that domain. The function over the restricted domain would
then have an **inverse function**. Since quadratic functions are not
one-to-one, we must restrict their domain in order to find their inverses.

{{< callout type="info" >}}
  **Restricting the domain.** If a function is not one-to-one, it cannot
  have an inverse. If we restrict the domain of the function so that it
  becomes one-to-one, thus creating a new function, this new function will
  have an inverse.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a polynomial function, restrict the domain of a
  function that is not one-to-one and then find the inverse.

  1. Restrict the domain by determining a domain on which the original
     function is one-to-one.
  2. Replace $f(x)$ with $y$.
  3. Interchange $x$ and $y$.
  4. Solve for $y$, and rename the function or pair of function
     $f^{-1}(x)$.
  5. Revise the formula for $f^{-1}(x)$ by ensuring that the outputs of
     the inverse function correspond to the restricted domain of the
     original function.
{{< /callout >}}

**Example.** Find the inverse function of $f$:

ⓐ $f(x)=(x-4)^2,\ x\ge4$

ⓑ $f(x)=(x-4)^2,\ x\le4$

**Solution.** The original function $f(x)=(x-4)^2$ is not one-to-one, but
the function is restricted to a domain of $x\ge4$ or $x\le4$ on which it
is one-to-one. See the graphs below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The right half of an upward parabola with vertex at (4, 0), the graph of f of x equals the quantity x minus 4, squared, restricted to x greater than or equal to 4. A closed dot marks the vertex, where the domain begins, and the curve rises to the right from it.","xMin":-10,"xMax":10,"yMin":-2,"yMax":10,"unit":16,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-8,"c":16,"from":4,"arrows":"end"}],"points":[{"at":[4,0]}],"texts":[{"at":[-9.6,8.6],"text":"f(x) = (x − 4)², x ≥ 4","anchor":"start"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The left half of an upward parabola with vertex at (4, 0), the graph of f of x equals the quantity x minus 4, squared, restricted to x less than or equal to 4. The curve descends from the upper left to a closed dot at the vertex, where the domain ends.","xMin":-10,"xMax":10,"yMin":-2,"yMax":10,"unit":16,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-8,"c":16,"to":4,"arrows":"start"}],"points":[{"at":[4,0]}],"texts":[{"at":[-9.6,8.6],"text":"f(x) = (x − 4)², x ≤ 4","anchor":"start"}]}
{{< /apfigure >}}

To find the inverse, start by replacing $f(x)$ with the simple variable
$y$.

$$
\begin{array}{lrcll}
& y &=& (x-4)^2 & \text{Interchange }x\text{ and }y. \\[4pt]
& x &=& (y-4)^2 & \text{Take the square root.} \\[4pt]
& \pm\sqrt{x} &=& y-4 & \text{Add 4 to both sides.} \\[4pt]
& 4\pm\sqrt{x} &=& y &
\end{array}
$$

This is not a function as written. We need to examine the restrictions on
the domain of the original function to determine the inverse. Since we
reversed the roles of $x$ and $y$ for the original $f(x)$, we looked at
the domain: the values $x$ could assume. When we reversed the roles of $x$
and $y$, this gave us the values $y$ could assume. For this function,
$x\ge4$, so for the inverse, we should have $y\ge4$, which is what our
inverse function gives.

ⓐ The domain of the original function was restricted to $x\ge4$, so the
outputs of the inverse need to be the same, $f(x)\ge4$, and we must use
the $+$ case:

$$f^{-1}(x)=4+\sqrt{x}$$

ⓑ The domain of the original function was restricted to $x\le4$, so the
outputs of the inverse need to be the same, $f(x)\le4$, and we must use
the $-$ case:

$$f^{-1}(x)=4-\sqrt{x}$$

**Analysis.** On the graphs below, we see the original function graphed on
the same set of axes as its inverse function. Notice that together the
graphs show symmetry about the line $y=x$. The coordinate pair $(4,0)$ is
on the graph of $f$ and the coordinate pair $(0,4)$ is on the graph of
$f^{-1}$. For any coordinate pair, if $(a,b)$ is on the graph of $f$, then
$(b,a)$ is on the graph of $f^{-1}$. Finally, observe that the graph of
$f$ intersects the graph of $f^{-1}$ on the line $y=x$. Points of
intersection for the graphs of $f$ and $f^{-1}$ will always lie on the
line $y=x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve labelled f, the right half of an upward parabola with vertex at (4, 0) restricted to x greater than or equal to 4, with the excluded left half of the parabola drawn dashed, together with its inverse, the curve labelled f inverse, equal to 4 plus the square root of x, rising from (0, 4). A dashed line marks y = x. The two curves are mirror images across it, and the points (4, 0) and (0, 4) are marked, (4, 0) labeled from below the x-axis by a short arrow.","xMin":-10,"xMax":10,"yMin":-4,"yMax":10,"unit":16,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-8,"c":16,"from":4,"arrows":"end"},{"a":1,"b":-8,"c":16,"to":4,"dashed":true,"arrows":"start"}],"curves":[{"kind":"sqrt","a":1,"h":0,"k":4}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"points":[{"at":[4,0]},{"at":[0,4],"label":"(0, 4)"}],"texts":[{"at":[5,9.3],"text":"f(x)","anchor":"start"},{"at":[8.3,5.6],"text":"f⁻¹(x)","anchor":"start"},{"at":[8.6,7.6],"text":"y = x","anchor":"start"},{"at":[5.2,-3.3],"text":"(4, 0)","anchor":"start"}],"segments":[{"from":[5.6,-2.4],"to":[4.35,-0.32],"arrows":"end"}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve labelled f, the left half of an upward parabola with vertex at (4, 0) restricted to x less than or equal to 4, with the excluded right half of the parabola drawn dashed, together with its inverse, the curve labelled f inverse, equal to 4 minus the square root of x, descending from (0, 4). A dashed line marks y = x. The two curves are mirror images across it, and the points (4, 0) and (0, 4) are marked, (4, 0) labeled from below the x-axis by a short arrow.","xMin":-10,"xMax":10,"yMin":-4,"yMax":10,"unit":16,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-8,"c":16,"to":4,"arrows":"start"},{"a":1,"b":-8,"c":16,"from":4,"dashed":true,"arrows":"end"}],"curves":[{"kind":"sqrt","a":-1,"h":0,"k":4}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"points":[{"at":[4,0]},{"at":[0,4],"label":"(0, 4)"}],"texts":[{"at":[1.4,9.0],"text":"f(x)","anchor":"start"},{"at":[6.5,2],"text":"f⁻¹(x)","anchor":"start"},{"at":[7.0,5.6],"text":"y = x","anchor":"start"},{"at":[5.2,-3.3],"text":"(4, 0)","anchor":"start"}],"segments":[{"from":[5.6,-2.4],"to":[4.35,-0.32],"arrows":"end"}]}
{{< /apfigure >}}

**Example.** Restrict the domain and then find the inverse of

$$f(x)=(x-2)^2-3.$$

**Solution.** We can see this is a parabola with vertex at $(2,-3)$ that
opens upward. Because the graph will be decreasing on one side of the
vertex and increasing on the other side, we can restrict this function to
a domain on which it will be one-to-one by limiting the domain to $x\ge2$.

To find the inverse, we will use the vertex form of the quadratic. We
start by replacing $f(x)$ with a simple variable, $y$, then solve for $x$.

$$
\begin{array}{lrcll}
& y &=& (x-2)^2-3 & \text{Interchange }x\text{ and }y. \\[4pt]
& x &=& (y-2)^2-3 & \text{Add 3 to both sides.} \\[4pt]
& x+3 &=& (y-2)^2 & \text{Take the square root.} \\[4pt]
& \pm\sqrt{x+3} &=& y-2 & \text{Add 2 to both sides.} \\[4pt]
& 2\pm\sqrt{x+3} &=& y & \text{Rename the function.} \\[4pt]
& f^{-1}(x) &=& 2\pm\sqrt{x+3} &
\end{array}
$$

Now we need to determine which case to use. Because we restricted our
original function to a domain of $x\ge2$, the outputs of the inverse
should be the same, telling us to utilize the $+$ case

$$f^{-1}(x)=2+\sqrt{x+3}$$

If the quadratic had not been given in vertex form, rewriting it into
vertex form would be the first step. This way we may easily observe the
coordinates of the vertex to help us restrict the domain.

**Analysis.** Notice that we arbitrarily decided to restrict the domain on
$x\ge2$. We could just have easily opted to restrict the domain on
$x\le2$, in which case $f^{-1}(x)=2-\sqrt{x+3}$. Observe the original
function graphed on the same set of axes as its inverse function below.
Notice that both graphs show symmetry about the line $y=x$. The coordinate
pair $(2,-3)$ is on the graph of $f$ and the coordinate pair $(-3,2)$ is
on the graph of $f^{-1}$. Observe from the graph of both functions on the
same set of axes that

$$\text{domain of }f=\text{range of }f^{-1}=[2,\infty)$$

and

$$\text{domain of }f^{-1}=\text{range of }f=[-3,\infty)$$

Finally, observe that the graph of $f$ intersects the graph of $f^{-1}$
along the line $y=x$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve labelled f, the right half of an upward parabola with vertex at (2, -3) restricted to x greater than or equal to 2, with the excluded left half of the parabola drawn dashed, together with its inverse, the curve labelled f inverse, equal to 2 plus the square root of the quantity x plus 3, rising from (-3, 2). A dashed line marks y = x. The two curves are mirror images across it, and the points (2, -3) and (-3, 2) are marked.","xMin":-10,"xMax":10,"yMin":-10,"yMax":10,"unit":15,"xTickStep":2,"yTickStep":2,"tickLabels":true,"quadratics":[{"a":1,"b":-4,"c":1,"from":2,"arrows":"end"},{"a":1,"b":-4,"c":1,"to":2,"dashed":true,"arrows":"start"}],"curves":[{"kind":"sqrt","a":1,"h":-3,"k":2}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"points":[{"at":[2,-3],"label":"(2, -3)"},{"at":[-3,2],"label":"(-3, 2)"}],"texts":[{"at":[3.6,9.3],"text":"f(x)","anchor":"start"},{"at":[6.6,4.0],"text":"f⁻¹(x)","anchor":"start"},{"at":[7.8,6.4],"text":"y = x","anchor":"start"}]}
{{< /apfigure >}}

{{< fillin
  question="Find the inverse of the function $f(x)=x^2+1$, on the domain $x\ge0$."
  answer="\sqrt{x-1}"
  answerForm="simplified-radical"
  answerDisplay="$f^{-1}(x)=\sqrt{x-1}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ — the domain $x\ge0$ tells you which sign to keep."
>}}

## Solving applications of radical functions

Notice that the functions from previous examples were all polynomials, and
their inverses were radical functions. If we want to find the **inverse of
a radical function**, we will need to restrict the domain of the answer
because the range of the original function is limited.

{{< callout type="info" >}}
  **How to:** given a radical function, find the inverse.

  1. Determine the range of the original function.
  2. Replace $f(x)$ with $y$, then solve for $x$.
  3. If necessary, restrict the domain of the inverse function to the
     range of the original function.
{{< /callout >}}

**Example.** Restrict the domain and then find the inverse of the
function $f(x)=\sqrt{x-4}$.

**Solution.** Note that the original function has range $f(x)\ge0$.
Replace $f(x)$ with $y$, then solve for $x$.

$$
\begin{array}{rcll}
y &=& \sqrt{x-4} & \text{Replace }f(x)\text{ with }y. \\[4pt]
x &=& \sqrt{y-4} & \text{Interchange }x\text{ and }y. \\[4pt]
x^2 &=& y-4 & \text{Square each side.} \\[4pt]
x^2+4 &=& y & \text{Add 4.} \\[4pt]
f^{-1}(x) &=& x^2+4 & \text{Rename the function }f^{-1}(x).
\end{array}
$$

Recall that the domain of this function must be limited to the range of
the original function.

$$f^{-1}(x)=x^2+4,\ x\ge0$$

**Analysis.** Notice below that the inverse is a reflection of the
original function over the line $y=x$. Because the original function has
only positive outputs, the inverse function has only positive inputs.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve labelled f, the square root of the quantity x minus 4, starting at (4, 0), together with its inverse, the curve labelled f inverse, equal to x squared plus 4, restricted to x greater than or equal to 0 and starting at (0, 4). Neither curve has an arrowhead at its starting endpoint, since each domain begins there. A dashed line marks y = x, and the two curves are mirror images across it.","xMin":-2,"xMax":14,"yMin":-2,"yMax":14,"unit":22,"xTickStep":2,"yTickStep":2,"tickLabels":true,"curves":[{"kind":"sqrt","a":1,"h":4,"k":0}],"quadratics":[{"a":1,"c":4,"from":0,"arrows":"end"}],"lines":[{"slope":1,"intercept":0,"dashed":true,"arrows":true}],"texts":[{"at":[9,3.6],"text":"f(x)","anchor":"start"},{"at":[3.5,12.6],"text":"f⁻¹(x)","anchor":"start"},{"at":[13.6,10.4],"text":"y = x","anchor":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="Restrict the domain and then find the inverse of the function $f(x)=\sqrt{2x+3}$. Enter the formula for $f^{-1}(x)$; its domain is the next question."
  answer="\frac{x^2-3}{2}"
  answerForm="no-like-terms"
  answerDisplay="$f^{-1}(x)=\tfrac{x^2-3}{2}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then square both sides and solve for $y$."
>}}

{{< fillin
  question="On what domain is that inverse defined? Enter it in interval notation."
  answer="[0,\infty)"
  answerForm="decimal"
  answerDisplay="$[0,\infty)$, so $f^{-1}(x)=\tfrac{x^2-3}{2},\ x\ge0$"
  hint="The domain of the inverse is the range of the original function."
>}}

Radical functions are common in physical models, as we saw in the section
opener. We now have enough tools to be able to solve the problem posed at
the start of the section.

**Example.** Park rangers construct a mound of gravel in the shape of a
cone with the height equal to twice the radius. The volume of the cone in
terms of the radius is given by

$$V=\tfrac{2}{3}\pi r^3$$

Find the inverse of the function $V=\tfrac{2}{3}\pi r^3$ that determines
the volume $V$ of a cone and is a function of the radius $r$. Then use the
inverse function to calculate the radius of such a mound of gravel
measuring 100 cubic feet. Use $\pi=3.14$.

**Solution.** Start with the given function for $V$. Notice that the
meaningful domain for the function is $r\ge0$ since negative radii would
not make sense in this context. Also note the range of the function
(hence, the domain of the inverse function) is $V\ge0$. Solve for $r$ in
terms of $V$, using the method outlined previously.

$$
\begin{array}{lrcll}
& V &=& \tfrac{2}{3}\pi r^3 & \\[4pt]
& r^3 &=& \tfrac{3V}{2\pi} & \text{Solve for }r^3. \\[4pt]
& r &=& \sqrt[3]{\tfrac{3V}{2\pi}} & \text{Solve for }r.
\end{array}
$$

This is the result stated in the section opener. Now evaluate this for
$V=100$ and $\pi=3.14$.

$$
\begin{array}{rcl}
r &=& \sqrt[3]{\tfrac{3V}{2\pi}} \\[4pt]
&=& \sqrt[3]{\tfrac{3\cdot100}{2\cdot3.14}} \\[4pt]
&\approx& \sqrt[3]{47.7707} \\[4pt]
&\approx& 3.63
\end{array}
$$

Therefore, the radius is about 3.63 ft.

## Determining the domain of a radical function composed with other functions

When radical functions are composed with other functions, determining
domain can become more complicated.

**Example.** Find the domain of the function
$f(x)=\sqrt{\tfrac{(x+2)(x-3)}{(x-1)}}$.

**Solution.** Because a square root is only defined when the quantity
under the radical is non-negative, we need to determine where
$\tfrac{(x+2)(x-3)}{(x-1)}\ge0$. The output of a rational function can
change signs (change from positive to negative or vice versa) at
$x$-intercepts and at vertical asymptotes. For this equation, the graph
could change signs at $x=-2$, $1$, and $3$.

To determine the intervals on which the rational expression is positive,
we could test some values in the expression or sketch a graph. While both
approaches work equally well, for this example we will use a graph, shown
below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the rational expression (x plus 2)(x minus 3) over (x minus 1), with x-intercepts at (-2, 0) and (3, 0) and a dashed vertical asymptote at x = 1. Left of x = -2 the curve is below the x-axis; it crosses at -2, rises through (0, 6), and climbs toward the asymptote. Right of the asymptote it rises from far below the x-axis and crosses at 3, staying above the axis after that. The two stretches above the x-axis, from -2 up to 1 and from 3 onward, are each marked Outputs are non-negative.","xMin":-7,"xMax":7,"yMin":-10,"yMax":10,"xUnit":24,"yUnit":17,"xTickStep":1,"yTickStep":2,"tickLabels":true,"rationals":[{"num":[-6,-1,1],"den":[-1,1],"to":0.3},{"num":[-6,-1,1],"den":[-1,1],"from":1.01}],"lines":[{"x":1,"dashed":true,"arrows":false}],"points":[{"at":[-2,0],"label":"(−2, 0)"},{"at":[3,0],"label":"(3, 0)"}],"texts":[{"at":[1.2,9.2],"text":"x = 1","anchor":"start"},{"at":[-6.8,7.6],"text":"Outputs are","anchor":"start"},{"at":[-6.8,6.4],"text":"non‐negative","anchor":"start"},{"at":[3.2,9.0],"text":"Outputs are","anchor":"start"},{"at":[3.2,7.8],"text":"non‐negative","anchor":"start"}],"segments":[{"from":[-4.6,5.8],"to":[-1.35,2.2],"arrows":"end"},{"from":[4.5,6.9],"to":[4.75,3.6],"arrows":"end"}]}
{{< /apfigure >}}

This function has two $x$-intercepts, both of which exhibit linear
behavior near the $x$-intercepts. There is one vertical asymptote,
corresponding to a linear factor; this behavior is similar to the basic
reciprocal toolkit function, and there is no horizontal asymptote because
the degree of the numerator is larger than the degree of the denominator.
There is a $y$-intercept at $(0,6)$.

From the $y$-intercept and $x$-intercept at $x=-2$, we can sketch the left
side of the graph. From the behavior at the asymptote, we can sketch the
right side of the graph.

From the graph, we can now tell on which intervals the outputs will be
non-negative, so that we can be sure that the original function $f(x)$
will be defined. $f(x)$ has domain $-2\le x<1$ or $x\ge3$, or in interval
notation, $[-2,1)\cup[3,\infty)$.

## Finding inverses of rational functions

As with finding inverses of quadratic functions, it is sometimes desirable
to find the **inverse of a rational function**, particularly of rational
functions that are the ratio of linear functions, such as in concentration
applications.

**Example.** The function $C=\tfrac{20+0.4n}{100+n}$ represents the
concentration $C$ of an acid solution after $n$ mL of 40% solution has
been added to 100 mL of a 20% solution. First, find the inverse of the
function; that is, find an expression for $n$ in terms of $C$. Then use
your result to determine how much of the 40% solution should be added so
that the final mixture is a 35% solution.

**Solution.** We first want the inverse of the function. We will solve
for $n$ in terms of $C$.

$$
\begin{array}{lrcl}
& C &=& \tfrac{20+0.4n}{100+n} \\[4pt]
& C(100+n) &=& 20+0.4n \\[4pt]
& 100C+Cn &=& 20+0.4n \\[4pt]
& 100C-20 &=& 0.4n-Cn \\[4pt]
& 100C-20 &=& (0.4-C)n \\[4pt]
& n &=& \tfrac{100C-20}{0.4-C}
\end{array}
$$

Now evaluate this function for $C=0.35$ (35%).

$$
\begin{array}{rcl}
n &=& \tfrac{100(0.35)-20}{0.4-0.35} \\[4pt]
&=& \tfrac{15}{0.05} \\[4pt]
&=& 300
\end{array}
$$

We can conclude that 300 mL of the 40% solution should be added.

{{< fillin
  question="Find the inverse of the function $f(x)=\tfrac{x+3}{x-2}$."
  answer="\frac{2x+3}{x-1}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$f^{-1}(x)=\tfrac{2x+3}{x-1}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then clear the fraction and collect all terms with $y$ on one side."
>}}

## Key concepts

- The inverse of a quadratic function is a square root function.
- If $f^{-1}$ is the inverse of a function $f$, then $f$ is the inverse of
  the function $f^{-1}$.
- While it is not possible to find an inverse of most polynomial
  functions, some basic polynomials are invertible.
- To find the inverse of certain functions, we must restrict the function
  to a domain on which it will be one-to-one.
- When finding the inverse of a radical function, we need a restriction on
  the domain of the answer.
- Inverse and radical functions can be used to solve application problems.

## Practice

### Find the inverse of a polynomial function

{{< fillin
  question="Find the inverse of the function $f(x)=x^3+5$."
  answer="\sqrt[3]{x-5}"
  answerForm="simplified-radical"
  answerDisplay="$f^{-1}(x)=\sqrt[3]{x-5}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ by taking a cube root."
>}}

{{< fillin
  question="Find the inverse of the function $f(x)=\tfrac{3x+4}{5-4x}$."
  answer="\frac{5x-4}{4x+3}"
  answerForm="single-fraction reduced-fraction"
  answerDisplay="$f^{-1}(x)=\tfrac{5x-4}{4x+3}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, clear the fraction, then collect the terms with $y$ on one side."
>}}

{{< fillin
  question="The volume, $V$, of a sphere in terms of its radius, $r$, is given by $V(r)=\tfrac{4}{3}\pi r^3$. Express $r$ as a function of $V$."
  answer="\sqrt[3]{\frac{3V}{4\pi}}"
  answerForm="simplified-radical"
  answerDisplay="$r(V)=\sqrt[3]{\tfrac{3V}{4\pi}}$"
  hint="Solve $V=\tfrac{4}{3}\pi r^3$ for $r$ by isolating $r^3$ and taking a cube root."
>}}

{{< fillin
  question="Using that same inverse, find the radius of a sphere with a volume of 200 cubic feet, in feet, rounded to the nearest hundredth."
  answer="3.63"
  answerForm="decimal"
  answerDisplay="$3.63$ feet"
  hint="Substitute $V=200$ into the formula you found for $r(V)$, then round."
>}}

### Restrict the domain to find the inverse of a polynomial function

{{< fillin
  question="Find the inverse of the function $f(x)=(x+1)^2-3$ on the domain $x\ge-1$."
  answer="\sqrt{x+3}-1"
  answerForm="simplified-radical no-like-terms"
  answerDisplay="$f^{-1}(x)=\sqrt{x+3}-1$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ — the domain $x\ge-1$ tells you which sign to keep."
>}}

{{< fillin
  question="Find the inverse of the function $f(x)=3x^2+5$ on the domain $x\le0$."
  answer="-\sqrt{\frac{x-5}{3}}"
  answerForm="simplified-radical"
  answerDisplay="$f^{-1}(x)=-\sqrt{\tfrac{x-5}{3}}$"
  hint="Replace $f(x)$ with $y$, interchange $x$ and $y$, then solve for $y$ — the domain $x\le0$ tells you which sign to keep."
>}}

{{< fillin
  question="The volume of a right circular cone, $V$, in terms of its radius, $r$, and its height, $h$, is given by $V=\tfrac{1}{3}\pi r^2h$. Express $r$ in terms of $V$ if the height of the cone is 12 inches (a radius is never negative)."
  answer="\sqrt{\frac{V}{4\pi}}"
  answerForm="radical"
  answerDisplay="$r(V)=\sqrt{\tfrac{V}{4\pi}}$"
  hint="Substitute the height into the volume formula and simplify, then solve for $r$, keeping only the non-negative root."
>}}

{{< fillin
  question="Using that same inverse, find the radius of a cone with volume 50 cubic inches, in inches, rounded to the nearest hundredth."
  answer="1.99"
  answerForm="decimal"
  answerDisplay="$1.99$ inches"
  hint="Substitute $V=50$ into the formula you found for $r(V)$, then round."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.8: Inverses
and Radical Functions](https://openstax.org/books/precalculus-2e/pages/3-8-inverses-and-radical-functions)
by Jay Abramson and OpenStax, © OpenStax, licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
Access the original for free at
[openstax.org](https://openstax.org/details/books/precalculus-2e).
Changes: recreated every figure as an accessible SVG generated from
its exact equation — the parabolic-trough setup diagram as a labelled
oblique schematic drawn from its own cross-sectional formula $y=\tfrac{1}{2}x^2$,
the standalone parabola $y=\tfrac{1}{2}x^2$, the cubic $f(x)=5x^3+1$ with
its cube-root inverse and the line $y=x$, the two half-parabola panels for
$f(x)=(x-4)^2$ restricted to $x\ge4$ and $x\le4$, the matching two panels
pairing each half with its square-root inverse, the quadratic
$f(x)=(x-2)^2-3$ restricted to $x\ge2$ with its inverse
$f^{-1}(x)=2+\sqrt{x+3}$, the radical $f(x)=\sqrt{x-4}$ with its
quadratic inverse, and the rational sign-analysis graph of
$\tfrac{(x+2)(x-3)}{(x-1)}$ (its non-negative stretches are marked by the
"Outputs are non-negative" labels' arrows alone, without the source's colored
arrows along the $x$-axis, since the figures are drawn in one color); omitted the decorative gravel-cone photograph,
which carries no mathematics; corrected the domain example's $y$-intercept
from the printed $(0,\sqrt6)$ to $(0,6)$, since the sentence describes the
graph of the rational expression, which crosses the $y$-axis at $6$ (the
radical $f$ itself has $f(0)=\sqrt6$); converted the five "Try It" checks into
interactive fill-in components, including rephrasing the two
verify-that-two-functions-are-inverses checks (Example 1's Try It) as a
numerical composition check, $f^{-1}(f(1))$, since a free-response box
cannot grade a written proof, and splitting the restrict-the-domain check for
$f(x)=\sqrt{2x+3}$ into the inverse's formula and its domain; and adapted six selected end-of-section
exercises — a cubic-function inverse and a rational-function inverse, two
quadratic inverses on a source-given restricted domain, and two real-world
cone/sphere volume-inverse problems, each split into a formula-then-evaluate
pair of prompts since it already asks for both a general inverse and a
numerical evaluation — into eight interactive components in a closing
Practice block, one group per objective.</small>
