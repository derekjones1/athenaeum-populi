---
title: Graph Linear Inequalities in Two Variables
description: >-
  Verifying solutions to inequalities in two variables, relating solutions
  to their graphs, graphing linear inequalities, and solving applications —
  adapted from OpenStax Intermediate Algebra 2e, Section 3.4.
source_section: "3.4"
weight: 4
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** verify solutions to an
  inequality in two variables, recognize the relation between the solutions
  of an inequality and its graph, graph linear inequalities in two variables,
  and solve applications using linear inequalities in two variables.
{{< /callout >}}

## Verify solutions to an inequality in two variables

Previously we learned to solve inequalities with only one variable. We will
now learn about inequalities containing two variables. In particular we will
look at **linear inequalities** in two variables which are very similar to
linear equations in two variables.

Linear inequalities in two variables have many applications. If you ran a
business, for example, you would want your revenue to be greater than your
costs—so that your business made a profit.

{{< callout type="info" >}}
  **Linear inequality.** A **linear inequality** is an inequality that can be
  written in one of the following forms:

  $$Ax + By > C \qquad Ax + By \geq C \qquad Ax + By < C \qquad Ax + By \leq C$$

  where $A$ and $B$ are not both zero.
{{< /callout >}}

Recall that an inequality with one variable had many solutions. For example,
the solution to the inequality $x > 3$ is any number greater than $3$. We
showed this on the number line by shading in the number line to the right of
$3$, and putting an open parenthesis at $3$.

<div class="ap-figure">
<svg role="img" aria-label="A number line showing x greater than 3, with an open parenthesis at 3 and shading to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 76" width="320" height="76" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 23 L 16 30 L 24 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 23 L 304 30 L 296 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="239.2" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="24" x2="28" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="55" text-anchor="middle" font-size="12" fill="currentColor">−5</text>
  <line x1="54.4" y1="24" x2="54.4" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="54.4" y="55" text-anchor="middle" font-size="12" fill="currentColor">−4</text>
  <line x1="80.8" y1="24" x2="80.8" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="80.8" y="55" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="107.2" y1="24" x2="107.2" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="107.2" y="55" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="133.6" y1="24" x2="133.6" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="133.6" y="55" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="160" y1="24" x2="160" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="55" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="186.4" y1="24" x2="186.4" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="186.4" y="55" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="212.8" y1="24" x2="212.8" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="212.8" y="55" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="239.2" y1="24" x2="239.2" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="239.2" y="55" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="265.6" y1="24" x2="265.6" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.6" y="55" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="292" y1="24" x2="292" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="55" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <text x="239.2" y="37" text-anchor="middle" font-size="22" fontWeight="600" fill="currentColor">(</text>
</svg>
</div>

Similarly, linear inequalities in two variables have many solutions. Any
ordered pair $(x,y)$ that makes an inequality true when we substitute in the
values is a **solution to a linear inequality**.

{{< callout type="info" >}}
  **Solution to a linear inequality.** An ordered pair $(x,y)$ is a
  **solution to a linear inequality** if the inequality is true when we
  substitute the values of $x$ and $y$.
{{< /callout >}}

**Example.** Determine whether each ordered pair is a solution to the
inequality $y > x + 4$: (a) $(0,0)$ (b) $(1,6)$ (c) $(2,6)$
(d) $(-5,-15)$ (e) $(-8,12)$.

(a) Substitute $0$ for $x$ and $0$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & 0 &\overset{?}{>}& 0+4 \\[4pt]
\text{Simplify.} & 0 &\not>& 4
\end{array}
$$

So, $(0,0)$ is not a solution to $y > x+4$.

(b) Substitute $1$ for $x$ and $6$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & 6 &\overset{?}{>}& 1+4 \\[4pt]
\text{Simplify.} & 6 &>& 5
\end{array}
$$

So, $(1,6)$ is a solution to $y > x+4$.

(c) Substitute $2$ for $x$ and $6$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & 6 &\overset{?}{>}& 2+4 \\[4pt]
\text{Simplify.} & 6 &\not>& 6
\end{array}
$$

So, $(2,6)$ is not a solution to $y > x+4$.

(d) Substitute $-5$ for $x$ and $-15$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & -15 &\overset{?}{>}& -5+4 \\[4pt]
\text{Simplify.} & -15 &\not>& -1
\end{array}
$$

So, $(-5,-15)$ is not a solution to $y > x+4$.

(e) Substitute $-8$ for $x$ and $12$ for $y$.

$$
\begin{array}{lrcl}
& y &>& x+4 \\[4pt]
\text{Substitute.} & 12 &\overset{?}{>}& -8+4 \\[4pt]
\text{Simplify.} & 12 &>& -4
\end{array}
$$

So, $(-8,12)$ is a solution to $y > x+4$.

For the inequality $y > x-3$, determine whether each ordered pair is a
solution.

{{< multiplechoice
  question="Is $(0,0)$ a solution to $y > x-3$?"
  hint="Substitute $x=0$ and $y=0$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(4,9)$ a solution to $y > x-3$?"
  hint="Substitute $x=4$ and $y=9$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-2,1)$ a solution to $y > x-3$?"
  hint="Substitute $x=-2$ and $y=1$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-5,-3)$ a solution to $y > x-3$?"
  hint="Substitute $x=-5$ and $y=-3$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(5,1)$ a solution to $y > x-3$?"
  hint="Substitute $x=5$ and $y=1$."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

For the inequality $y < x+1$, determine whether each ordered pair is a
solution.

{{< multiplechoice
  question="Is $(0,0)$ a solution to $y < x+1$?"
  hint="Substitute $x=0$ and $y=0$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(8,6)$ a solution to $y < x+1$?"
  hint="Substitute $x=8$ and $y=6$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-2,-1)$ a solution to $y < x+1$?"
  hint="Substitute $x=-2$ and $y=-1$."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(3,4)$ a solution to $y < x+1$?"
  hint="Substitute $x=3$ and $y=4$."
  answer="no"
>}}
yes
no
{{< /multiplechoice >}}

{{< multiplechoice
  question="Is $(-1,-4)$ a solution to $y < x+1$?"
  hint="Substitute $x=-1$ and $y=-4$."
  answer="yes"
>}}
yes
no
{{< /multiplechoice >}}

## Recognize the relation between the solutions of an inequality and its graph

Now, we will look at how the solutions of an inequality relate to its graph.

Let's think about the number line shown previously again. The point $x=3$
separated that number line into two parts. On one side of $3$ are all the
numbers less than $3$. On the other side of $3$ all the numbers are greater
than $3$.

Similarly, the line $y=x+4$ separates the plane into two regions. On one side
of the line are points with $y<x+4$. On the other side of the line are the
points with $y>x+4$. We call the line $y=x+4$ a **boundary line**.

{{< callout type="info" >}}
  **Boundary line.** The line with equation $Ax+By=C$ is the **boundary
  line** that separates the region where $Ax+By>C$ from the region where
  $Ax+By<C$.
{{< /callout >}}

For an inequality in one variable, the endpoint is shown with a parenthesis
or a bracket depending on whether or not it is included in the solution.
Similarly, for an inequality in two variables, the boundary line is shown
with a solid or dashed line to show whether or not the line is included in
the solution.

| Inequality | Boundary line | Inclusion |
| :--- | :--- | :--- |
| $Ax+By<C$ or $Ax+By>C$ | $Ax+By=C$ | Boundary line is not included in solution. **Boundary line is dashed.** |
| $Ax+By\leq C$ or $Ax+By\geq C$ | $Ax+By=C$ | Boundary line is included in solution. **Boundary line is solid.** |

Now, let's take a look at what we found in the preceding example. We'll start
by graphing the line $y=x+4$, and then we'll plot the five points we tested.

<div class="ap-figure">
<svg role="img" aria-label="The line y equals x plus 4 with the tested points (0,0), (1,6), (2,6), (-5,-15), and (-8,12)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436 436" width="436" height="436" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="410" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="38" y1="410" x2="38" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="410" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="410" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="410" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="410" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="410" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="410" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="410" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="410" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="410" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="410" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="410" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="410" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="410" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="410" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="410" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="410" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="254" y1="410" x2="254" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="410" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="410" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="410" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="302" y1="410" x2="302" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="410" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="410" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="338" y1="410" x2="338" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="350" y1="410" x2="350" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="362" y1="410" x2="362" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="374" y1="410" x2="374" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="386" y1="410" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="398" y1="410" x2="398" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="410" y1="410" x2="410" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="410" x2="410" y2="410" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="398" x2="410" y2="398" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="386" x2="410" y2="386" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="374" x2="410" y2="374" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="362" x2="410" y2="362" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="350" x2="410" y2="350" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="338" x2="410" y2="338" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="410" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="410" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="302" x2="410" y2="302" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="410" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="410" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="410" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="254" x2="410" y2="254" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="410" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="410" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="410" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="410" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="410" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="410" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="410" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="410" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="410" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="410" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="410" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="410" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="410" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="410" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="410" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="410" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="410" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="410" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="218" x2="412" y2="218" stroke="currentColor" stroke-width="1"/>
  <line x1="218" y1="24" x2="218" y2="412" stroke="currentColor" stroke-width="1"/>
  <polygon points="422,218 412,223 412,213" fill="currentColor"/>
  <polygon points="218,14 223,24 213,24" fill="currentColor"/>
  <polygon points="14,218 24,213 24,223" fill="currentColor"/>
  <polygon points="218,422 213,412 223,412" fill="currentColor"/>
  <text x="420" y="210" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="226" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="215" x2="26" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="233" font-size="11" fill="currentColor" text-anchor="middle">−16</text>
  <line x1="50" y1="215" x2="50" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="233" font-size="11" fill="currentColor" text-anchor="middle">−14</text>
  <line x1="74" y1="215" x2="74" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="233" font-size="11" fill="currentColor" text-anchor="middle">−12</text>
  <line x1="98" y1="215" x2="98" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="233" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="122" y1="215" x2="122" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="233" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="146" y1="215" x2="146" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="233" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="170" y1="215" x2="170" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="233" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="194" y1="215" x2="194" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="233" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="242" y1="215" x2="242" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="233" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="215" x2="266" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="233" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="290" y1="215" x2="290" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="233" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="314" y1="215" x2="314" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="233" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="338" y1="215" x2="338" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="338" y="233" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="362" y1="215" x2="362" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="362" y="233" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="386" y1="215" x2="386" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="386" y="233" font-size="11" fill="currentColor" text-anchor="middle">14</text>
  <line x1="410" y1="215" x2="410" y2="221" stroke="currentColor" stroke-width="1"/>
  <text x="410" y="233" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="215" y1="410" x2="221" y2="410" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="414" font-size="11" fill="currentColor" text-anchor="end">−16</text>
  <line x1="215" y1="386" x2="221" y2="386" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="390" font-size="11" fill="currentColor" text-anchor="end">−14</text>
  <line x1="215" y1="362" x2="221" y2="362" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="366" font-size="11" fill="currentColor" text-anchor="end">−12</text>
  <line x1="215" y1="338" x2="221" y2="338" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="342" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="215" y1="314" x2="221" y2="314" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="318" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="215" y1="290" x2="221" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="294" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="215" y1="266" x2="221" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="215" y1="242" x2="221" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="246" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="215" y1="194" x2="221" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="198" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="215" y1="170" x2="221" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="215" y1="146" x2="221" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="150" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="215" y1="122" x2="221" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="126" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="215" y1="98" x2="221" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="102" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="215" y1="74" x2="221" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="78" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="215" y1="50" x2="221" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="54" font-size="11" fill="currentColor" text-anchor="end">14</text>
  <line x1="215" y1="26" x2="221" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="30" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="27.1" y1="360.9" x2="360.9" y2="27.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="368,20 364.5,30.6 357.4,23.5" fill="currentColor"/>
  <polygon points="20,368 23.5,357.4 30.6,364.5" fill="currentColor"/>
  <circle cx="218" cy="218" r="4" fill="currentColor"/>
  <circle cx="230" cy="146" r="4" fill="currentColor"/>
  <circle cx="242" cy="146" r="4" fill="currentColor"/>
  <circle cx="158" cy="398" r="4" fill="currentColor"/>
  <circle cx="122" cy="74" r="4" fill="currentColor"/>
  <text x="229.2" y="238.2" font-size="13" fill="currentColor" text-anchor="start">(0, 0)</text>
  <text x="241.2" y="166.2" font-size="13" fill="currentColor" text-anchor="start">(1, 6)</text>
  <text x="230.8" y="134.8" font-size="13" fill="currentColor" text-anchor="end">(2, 6)</text>
  <text x="172" y="402" font-size="13" fill="currentColor" text-anchor="start">(−5, −15)</text>
  <text x="136" y="78" font-size="13" fill="currentColor" text-anchor="start">(−8, 12)</text>
</svg>
</div>

Some of the points were solutions to $y>x+4$ and some were not. The points
$(1,6)$ and $(-8,12)$ are solutions. Notice that they are both on the same
side of the boundary line $y=x+4$.

The two points $(0,0)$ and $(-5,-15)$ are on the other side of the boundary
line, and they are not solutions to $y>x+4$. For those two points,
$y<x+4$.

What about the point $(2,6)$? Because $6=2+4$, the point is a solution to
the equation $y=x+4$, but not a solution to the inequality $y>x+4$. So the
point $(2,6)$ is on the boundary line.

Let's take another point above the boundary line and test whether or not it
is a solution to $y>x+4$. The point $(0,10)$ clearly looks to be above the
boundary line. Is it a solution to the inequality?

$$
\begin{array}{rcl}
y &>& x+4 \\[4pt]
10 &\overset{?}{>}& 0+4 \\[4pt]
10 &>& 4
\end{array}
$$

So, $(0,10)$ is a solution to $y>x+4$. Any point you choose above the
boundary line is a solution to the inequality. All points above the boundary
line are solutions. Similarly, all points below the boundary line are not
solutions to $y>x+4$.

The line $y=x+4$ divides the plane into two regions. The shaded side shows
the solutions to $y>x+4$. The points on the boundary line, those where
$y=x+4$, are not solutions, so the line itself is not part of the solution.
We show that by making the line dashed, not solid.

<div class="ap-figure">
<svg role="img" aria-label="A dashed boundary line y equals x plus 4 with the region above and to the left shaded to show y greater than x plus 4." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 266,26 26,266" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="27.1" y1="264.9" x2="264.9" y2="27.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="272,20 268.5,30.6 261.4,23.5" fill="currentColor"/>
  <polygon points="20,272 23.5,261.4 30.6,268.5" fill="currentColor"/>
</svg>
</div>

**Example.** The boundary line shown in this graph is $y=2x-1$. Write the
inequality shown by the graph. The boundary line is solid, and the side
containing $(0,0)$ is shaded.

<div class="ap-figure">
<svg role="img" aria-label="A solid boundary line y equals 2x minus 1, with the region to the left of and above the line, including the origin, shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 276,26 116,346 26,346" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="117.5" y1="343.1" x2="274.5" y2="28.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="279,20 279,31.2 270.1,26.7" fill="currentColor"/>
  <polygon points="113,352 113,340.8 121.9,345.3" fill="currentColor"/>
</svg>
</div>

The line $y=2x-1$ is the boundary line. On one side of the line are the
points with $y>2x-1$ and on the other side are the points with $y<2x-1$.
Let's test the point $(0,0)$ and see which inequality describes its position
relative to the boundary line.

At $(0,0)$, which inequality is true: $y>2x-1$ or $y<2x-1$?

$$
\begin{array}{rcl}
0 &\overset{?}{>}& 2\cdot0-1 \\[4pt]
0 &>& -1 \quad \text{True}
\end{array}
\qquad
\begin{array}{rcl}
0 &\overset{?}{<}& 2\cdot0-1 \\[4pt]
0 &\not<& -1 \quad \text{False}
\end{array}
$$

Since $y>2x-1$ is true, the side of the line with $(0,0)$ is the solution.
The shaded region shows the solution of $y>2x-1$. Since the boundary line is
graphed with a solid line, the inequality includes the equal sign. The graph
shows the inequality $y\geq2x-1$.

We could use any point as a test point, provided it is not on the line. We
chose $(0,0)$ because it's the easiest to evaluate. You may want to pick a
point on the other side of the boundary line and check that $y<2x-1$.

{{< fillin
  question="Write the inequality shown by a solid boundary line $y=-2x+3$ with the region to the right of the line shaded."
  answer="y\geq-2x+3"
  answerDisplay="$y\geq-2x+3$"
  hint="The shaded region contains $(4,0)$. Test it, and remember that a solid line includes equality."
>}}

{{< fillin
  question="Write the inequality shown by a solid boundary line $y=\tfrac{1}{2}x-4$ with the region below the line shaded."
  answer="y\leq\frac{1}{2}x-4"
  answerDisplay="$y\leq\tfrac{1}{2}x-4$"
  hint="Below the line means the y-values are less than those on the line; a solid line includes equality."
>}}

**Example.** The boundary line shown in this graph is $2x+3y=6$. Write the
inequality shown by the graph. The boundary line is dashed, and the side
containing $(0,0)$ is shaded.

<div class="ap-figure">
<svg role="img" aria-label="A dashed boundary line 2x plus 3y equals 6, with the region below the line, including the origin, shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,39.3 346,252.7 346,346 26,346" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="28.3" y1="40.9" x2="343.7" y2="251.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,256.7 340.9,255.3 346.5,247" fill="currentColor"/>
  <polygon points="20,35.3 31.1,36.7 25.5,45" fill="currentColor"/>
</svg>
</div>

The line $2x+3y=6$ is the boundary line. On one side are the points with
$2x+3y>6$ and on the other side are the points with $2x+3y<6$. Let's test
the point $(0,0)$ and see which inequality describes its side.

$$
\begin{array}{rcl}
2(0)+3(0) &\overset{?}{>}& 6 \\[4pt]
0 &\not>& 6 \quad \text{False}
\end{array}
\qquad
\begin{array}{rcl}
2(0)+3(0) &\overset{?}{<}& 6 \\[4pt]
0 &<& 6 \quad \text{True}
\end{array}
$$

So the side with $(0,0)$ is the side where $2x+3y<6$. You may want to pick
a point on the other side and check that $2x+3y>6$. Since the boundary line
is dashed, the inequality does not include an equal sign. The shaded region
shows the solution to $2x+3y<6$.

{{< fillin
  question="Write the inequality shown by a solid boundary line $x-4y=8$ with the region above the line shaded."
  answer="x-4y\leq8"
  answerDisplay="$x-4y\leq8$"
  hint="Test $(0,0)$, which lies in the shaded region, and include equality because the line is solid."
>}}

{{< fillin
  question="Write the inequality shown by a solid boundary line $3x-y=6$ with the region to the right of the line shaded."
  answer="3x-y\geq6"
  answerDisplay="$3x-y\geq6$"
  hint="Test a point such as $(4,0)$ in the shaded region, and include equality because the line is solid."
>}}

## Graph linear inequalities in two variables

Now that we know what the graph of a linear inequality looks like and how it
relates to a boundary equation we can use this knowledge to graph a given
linear inequality.

**Example.** Graph the linear inequality $y\geq\tfrac{3}{4}x-2$.

**Step 1. Identify and graph the boundary line.** Replace the inequality sign
with an equal sign to find the boundary line. Graph the boundary line
$y=\tfrac{3}{4}x-2$. The inequality sign is $\geq$, so we draw a solid line.

**Step 2. Test a point that is not on the boundary line. Is it a solution of
the inequality?** We'll test $(0,0)$.

$$0 \overset{?}{\geq} \tfrac{3}{4}(0)-2$$

Since $0\geq-2$, $(0,0)$ is a solution.

**Step 3. Shade in one side of the boundary line.** The test point $(0,0)$ is
a solution to $y\geq\tfrac{3}{4}x-2$, so we shade in that side. All points in
the shaded region and on the boundary line represent the solutions.

<div class="ap-figure">
<svg role="img" aria-label="A solid boundary line y equals three-fourths x minus 2, with the region containing the origin shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="266" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="266" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="266" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="266" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="266" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 266,26 266,96 39.3,266 26,266" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="186" y1="143" x2="186" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="39.3" y1="266" x2="264" y2="97.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="272,91.5 267,101.5 261,93.5" fill="currentColor"/>
  <polygon points="31.3,272 36.3,262 42.3,270" fill="currentColor"/>
</svg>
</div>

{{< callout type="info" >}}
  **Graph a linear inequality in two variables.**

  1. Identify and graph the boundary line.
     - If the inequality is $\leq$ or $\geq$, the boundary line is solid.
     - If the inequality is $<$ or $>$, the boundary line is dashed.
  2. Test a point that is not on the boundary line. Is it a solution of the
     inequality?
  3. Shade in one side of the boundary line.
     - If the test point is a solution, shade in the side that includes the
       point.
     - If the test point is not a solution, shade in the opposite side.
{{< /callout >}}

{{< multiplechoice
  question="For $y\geq\tfrac{5}{2}x-4$, which graph is correct?"
  hint="The equal sign determines the boundary style. Then test $(0,0)$."
  mode="graph"
  answerIndex="0"
>}}
<svg role="img" aria-label="A solid boundary line through (0, negative 4) rising steeply to the right, with the region above it, containing (0, 0), shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="39" y1="208" x2="39" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="208" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="65" y1="208" x2="65" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="208" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="91" y1="208" x2="91" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="208" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="208" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="143" y1="208" x2="143" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="208" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="169" y1="208" x2="169" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="208" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="195" y1="208" x2="195" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="208" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="208" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="195" x2="208" y2="195" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="208" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="169" x2="208" y2="169" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="208" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="143" x2="208" y2="143" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="208" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="208" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="91" x2="208" y2="91" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="208" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="65" x2="208" y2="65" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="208" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="39" x2="208" y2="39" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 174.2,26 101.4,208 26,208" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="117" x2="210" y2="117" stroke="currentColor" stroke-width="1"/>
  <line x1="117" y1="24" x2="117" y2="210" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,117 210,122 210,112" fill="currentColor"/>
  <polygon points="117,14 122,24 112,24" fill="currentColor"/>
  <polygon points="14,117 24,112 24,122" fill="currentColor"/>
  <polygon points="117,220 112,210 122,210" fill="currentColor"/>
  <text x="218" y="109" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="125" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="39" y1="114" x2="39" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="39" y="132" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="65" y1="114" x2="65" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="132" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="91" y1="114" x2="91" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="91" y="132" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="143" y1="114" x2="143" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="143" y="132" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="169" y1="114" x2="169" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="169" y="132" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="195" y1="114" x2="195" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="132" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="114" y1="195" x2="120" y2="195" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="199" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="114" y1="169" x2="120" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="173" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="114" y1="143" x2="120" y2="143" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="147" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="114" y1="91" x2="120" y2="91" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="95" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="114" y1="65" x2="120" y2="65" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="69" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="114" y1="39" x2="120" y2="39" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="43" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="102.7" y1="204.7" x2="172.9" y2="29.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176.6,20 177.5,31.1 168.2,27.4" fill="currentColor"/>
  <polygon points="99,214 98.1,202.9 107.4,206.6" fill="currentColor"/>
</svg>
===OPT===
<svg role="img" aria-label="A dashed boundary line through (0, negative 4) rising steeply to the right, with the region above it, containing (0, 0), shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="39" y1="208" x2="39" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="208" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="65" y1="208" x2="65" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="208" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="91" y1="208" x2="91" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="208" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="208" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="143" y1="208" x2="143" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="208" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="169" y1="208" x2="169" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="208" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="195" y1="208" x2="195" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="208" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="208" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="195" x2="208" y2="195" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="208" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="169" x2="208" y2="169" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="208" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="143" x2="208" y2="143" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="208" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="208" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="91" x2="208" y2="91" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="208" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="65" x2="208" y2="65" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="208" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="39" x2="208" y2="39" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 174.2,26 101.4,208 26,208" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="117" x2="210" y2="117" stroke="currentColor" stroke-width="1"/>
  <line x1="117" y1="24" x2="117" y2="210" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,117 210,122 210,112" fill="currentColor"/>
  <polygon points="117,14 122,24 112,24" fill="currentColor"/>
  <polygon points="14,117 24,112 24,122" fill="currentColor"/>
  <polygon points="117,220 112,210 122,210" fill="currentColor"/>
  <text x="218" y="109" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="125" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="39" y1="114" x2="39" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="39" y="132" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="65" y1="114" x2="65" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="132" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="91" y1="114" x2="91" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="91" y="132" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="143" y1="114" x2="143" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="143" y="132" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="169" y1="114" x2="169" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="169" y="132" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="195" y1="114" x2="195" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="132" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="114" y1="195" x2="120" y2="195" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="199" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="114" y1="169" x2="120" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="173" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="114" y1="143" x2="120" y2="143" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="147" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="114" y1="91" x2="120" y2="91" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="95" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="114" y1="65" x2="120" y2="65" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="69" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="114" y1="39" x2="120" y2="39" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="43" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="102.7" y1="204.7" x2="172.9" y2="29.3" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="176.6,20 177.5,31.1 168.2,27.4" fill="currentColor"/>
  <polygon points="99,214 98.1,202.9 107.4,206.6" fill="currentColor"/>
</svg>
===OPT===
<svg role="img" aria-label="A solid boundary line through (0, negative 4) rising steeply to the right, with the region below it, not containing (0, 0), shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="39" y1="208" x2="39" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="208" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="65" y1="208" x2="65" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="208" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="91" y1="208" x2="91" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="208" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="208" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="143" y1="208" x2="143" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="208" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="169" y1="208" x2="169" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="208" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="195" y1="208" x2="195" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="208" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="208" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="195" x2="208" y2="195" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="208" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="169" x2="208" y2="169" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="208" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="143" x2="208" y2="143" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="208" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="208" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="91" x2="208" y2="91" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="208" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="65" x2="208" y2="65" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="208" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="39" x2="208" y2="39" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="174.2,26 208,26 208,208 101.4,208" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="117" x2="210" y2="117" stroke="currentColor" stroke-width="1"/>
  <line x1="117" y1="24" x2="117" y2="210" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,117 210,122 210,112" fill="currentColor"/>
  <polygon points="117,14 122,24 112,24" fill="currentColor"/>
  <polygon points="14,117 24,112 24,122" fill="currentColor"/>
  <polygon points="117,220 112,210 122,210" fill="currentColor"/>
  <text x="218" y="109" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="125" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="39" y1="114" x2="39" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="39" y="132" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="65" y1="114" x2="65" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="132" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="91" y1="114" x2="91" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="91" y="132" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="143" y1="114" x2="143" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="143" y="132" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="169" y1="114" x2="169" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="169" y="132" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="195" y1="114" x2="195" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="132" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="114" y1="195" x2="120" y2="195" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="199" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="114" y1="169" x2="120" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="173" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="114" y1="143" x2="120" y2="143" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="147" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="114" y1="91" x2="120" y2="91" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="95" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="114" y1="65" x2="120" y2="65" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="69" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="114" y1="39" x2="120" y2="39" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="43" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="102.7" y1="204.7" x2="172.9" y2="29.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176.6,20 177.5,31.1 168.2,27.4" fill="currentColor"/>
  <polygon points="99,214 98.1,202.9 107.4,206.6" fill="currentColor"/>
</svg>
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y<\tfrac{2}{3}x-5$, which graph is correct?"
  hint="The strict inequality determines the boundary style. Then test $(0,0)$."
  mode="graph"
  answerIndex="1"
>}}
<svg role="img" aria-label="A dashed boundary line through (0, negative 5) rising gently to the right, with the region above it, containing (0, 0), shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="39" y1="208" x2="39" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="208" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="65" y1="208" x2="65" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="208" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="91" y1="208" x2="91" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="208" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="208" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="143" y1="208" x2="143" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="208" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="169" y1="208" x2="169" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="208" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="195" y1="208" x2="195" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="208" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="208" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="195" x2="208" y2="195" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="208" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="169" x2="208" y2="169" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="208" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="143" x2="208" y2="143" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="208" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="208" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="91" x2="208" y2="91" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="208" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="65" x2="208" y2="65" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="208" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="39" x2="208" y2="39" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 208,26 208,121.3 78,208 26,208" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="117" x2="210" y2="117" stroke="currentColor" stroke-width="1"/>
  <line x1="117" y1="24" x2="117" y2="210" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,117 210,122 210,112" fill="currentColor"/>
  <polygon points="117,14 122,24 112,24" fill="currentColor"/>
  <polygon points="14,117 24,112 24,122" fill="currentColor"/>
  <polygon points="117,220 112,210 122,210" fill="currentColor"/>
  <text x="218" y="109" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="125" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="39" y1="114" x2="39" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="39" y="132" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="65" y1="114" x2="65" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="132" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="91" y1="114" x2="91" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="91" y="132" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="143" y1="114" x2="143" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="143" y="132" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="169" y1="114" x2="169" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="169" y="132" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="195" y1="114" x2="195" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="132" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="114" y1="195" x2="120" y2="195" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="199" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="114" y1="169" x2="120" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="173" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="114" y1="143" x2="120" y2="143" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="147" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="114" y1="91" x2="120" y2="91" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="95" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="114" y1="65" x2="120" y2="65" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="69" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="114" y1="39" x2="120" y2="39" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="43" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="77.3" y1="208.5" x2="205.7" y2="122.9" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="214,117.3 208.5,127 202.9,118.7" fill="currentColor"/>
  <polygon points="69,214 74.5,204.3 80.1,212.6" fill="currentColor"/>
</svg>
===OPT===
<svg role="img" aria-label="A dashed boundary line through (0, negative 5) rising gently to the right, with the region below it, not containing (0, 0), shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="39" y1="208" x2="39" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="208" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="65" y1="208" x2="65" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="208" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="91" y1="208" x2="91" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="208" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="208" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="143" y1="208" x2="143" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="208" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="169" y1="208" x2="169" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="208" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="195" y1="208" x2="195" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="208" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="208" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="195" x2="208" y2="195" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="208" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="169" x2="208" y2="169" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="208" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="143" x2="208" y2="143" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="208" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="208" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="91" x2="208" y2="91" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="208" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="65" x2="208" y2="65" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="208" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="39" x2="208" y2="39" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="208,121.3 208,208 78,208" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="117" x2="210" y2="117" stroke="currentColor" stroke-width="1"/>
  <line x1="117" y1="24" x2="117" y2="210" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,117 210,122 210,112" fill="currentColor"/>
  <polygon points="117,14 122,24 112,24" fill="currentColor"/>
  <polygon points="14,117 24,112 24,122" fill="currentColor"/>
  <polygon points="117,220 112,210 122,210" fill="currentColor"/>
  <text x="218" y="109" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="125" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="39" y1="114" x2="39" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="39" y="132" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="65" y1="114" x2="65" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="132" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="91" y1="114" x2="91" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="91" y="132" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="143" y1="114" x2="143" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="143" y="132" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="169" y1="114" x2="169" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="169" y="132" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="195" y1="114" x2="195" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="132" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="114" y1="195" x2="120" y2="195" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="199" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="114" y1="169" x2="120" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="173" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="114" y1="143" x2="120" y2="143" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="147" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="114" y1="91" x2="120" y2="91" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="95" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="114" y1="65" x2="120" y2="65" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="69" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="114" y1="39" x2="120" y2="39" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="43" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="77.3" y1="208.5" x2="205.7" y2="122.9" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="214,117.3 208.5,127 202.9,118.7" fill="currentColor"/>
  <polygon points="69,214 74.5,204.3 80.1,212.6" fill="currentColor"/>
</svg>
===OPT===
<svg role="img" aria-label="A solid boundary line through (0, negative 5) rising gently to the right, with the region below it, not containing (0, 0), shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 234" width="234" height="234" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="208" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="39" y1="208" x2="39" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="208" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="65" y1="208" x2="65" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="208" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="91" y1="208" x2="91" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="208" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="130" y1="208" x2="130" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="143" y1="208" x2="143" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="208" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="169" y1="208" x2="169" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="208" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="195" y1="208" x2="195" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="208" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="208" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="195" x2="208" y2="195" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="208" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="169" x2="208" y2="169" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="208" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="143" x2="208" y2="143" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="130" x2="208" y2="130" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="208" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="91" x2="208" y2="91" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="208" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="65" x2="208" y2="65" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="208" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="39" x2="208" y2="39" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="208,121.3 208,208 78,208" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="117" x2="210" y2="117" stroke="currentColor" stroke-width="1"/>
  <line x1="117" y1="24" x2="117" y2="210" stroke="currentColor" stroke-width="1"/>
  <polygon points="220,117 210,122 210,112" fill="currentColor"/>
  <polygon points="117,14 122,24 112,24" fill="currentColor"/>
  <polygon points="14,117 24,112 24,122" fill="currentColor"/>
  <polygon points="117,220 112,210 122,210" fill="currentColor"/>
  <text x="218" y="109" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="125" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="39" y1="114" x2="39" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="39" y="132" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="65" y1="114" x2="65" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="132" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="91" y1="114" x2="91" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="91" y="132" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="143" y1="114" x2="143" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="143" y="132" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="169" y1="114" x2="169" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="169" y="132" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="195" y1="114" x2="195" y2="120" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="132" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="114" y1="195" x2="120" y2="195" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="199" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="114" y1="169" x2="120" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="173" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="114" y1="143" x2="120" y2="143" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="147" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="114" y1="91" x2="120" y2="91" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="95" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="114" y1="65" x2="120" y2="65" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="69" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="114" y1="39" x2="120" y2="39" stroke="currentColor" stroke-width="1"/>
  <text x="111" y="43" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="77.3" y1="208.5" x2="205.7" y2="122.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="214,117.3 208.5,127 202.9,118.7" fill="currentColor"/>
  <polygon points="69,214 74.5,204.3 80.1,212.6" fill="currentColor"/>
</svg>
{{< /multiplechoice >}}

**Example.** Graph the linear inequality $x-2y<5$.

First, we graph the boundary line $x-2y=5$. The inequality is $<$ so we
draw a dashed line.

<div class="ap-figure">
<svg role="img" aria-label="The dashed boundary line x minus 2y equals 5 before shading." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="28.9" y1="314.5" x2="343.1" y2="157.5" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,153 345.3,161.9 340.8,153" fill="currentColor"/>
  <polygon points="20,319 26.7,310.1 31.2,319" fill="currentColor"/>
</svg>
</div>

Then, we test a point. We'll use $(0,0)$ again because it is easy to evaluate
and it is not on the boundary line.

$$
\begin{array}{rcl}
0-2(0) &\overset{?}{<}& 5 \\[4pt]
0-0 &<& 5 \\[4pt]
0 &<& 5
\end{array}
$$

The point $(0,0)$ is a solution of $x-2y<5$, so we shade in that side of
the boundary line. All points in the shaded region, but not those on the
boundary line, represent the solutions.

<div class="ap-figure">
<svg role="img" aria-label="A dashed boundary line x minus 2y equals 5, with the region containing the origin shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 346,26 346,156 26,316" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="28.9" y1="314.5" x2="343.1" y2="157.5" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,153 345.3,161.9 340.8,153" fill="currentColor"/>
  <polygon points="20,319 26.7,310.1 31.2,319" fill="currentColor"/>
  <circle cx="186" cy="186" r="4" fill="currentColor"/>
</svg>
</div>

{{< multiplechoice
  question="For $2x-3y<6$, which graph is correct?"
  hint="Test $(0,0)$ and use the strict inequality to choose the boundary style."
  answer="a dashed boundary line with the region containing (0,0) shaded"
>}}
a dashed boundary line with the region containing (0,0) shaded
a dashed boundary line with the region not containing (0,0) shaded
a solid boundary line with the region containing (0,0) shaded
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $2x-y>3$, which graph is correct?"
  hint="Test $(0,0)$ and use the strict inequality to choose the boundary style."
  answer="a dashed boundary line with the region not containing (0,0) shaded"
>}}
a dashed boundary line with the region containing (0,0) shaded
a dashed boundary line with the region not containing (0,0) shaded
a solid boundary line with the region not containing (0,0) shaded
{{< /multiplechoice >}}

What if the boundary line goes through the origin? Then, we won't be able to
use $(0,0)$ as a test point. No problem—we'll just choose some other point
that is not on the boundary line.

**Example.** Graph the linear inequality $y\leq-4x$.

First, we graph the boundary line $y=-4x$. It is in slope-intercept form,
with $m=-4$ and $b=0$. The inequality is $\leq$ so we draw a solid line.

Now we need a test point. We can see that the point $(1,0)$ is not on the
boundary line. Is $(1,0)$ a solution of $y\leq-4x$?

$$0 \overset{?}{\leq} -4(1) \qquad 0 \not\leq -4$$

The point $(1,0)$ is not a solution, so we shade in the opposite side of the
boundary line. All points in the shaded region and on the boundary line
represent the solutions.

<div class="ap-figure">
<svg role="img" aria-label="A solid boundary line y equals negative 4x, with the region opposite the test point (1,0) shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 146,26 226,346 26,346" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="146.9" y1="29.7" x2="225.1" y2="342.3" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="227.5,352 220.2,343.5 229.9,341.1" fill="currentColor"/>
  <polygon points="144.5,20 151.8,28.5 142.1,30.9" fill="currentColor"/>
  <circle cx="206" cy="186" r="4" fill="currentColor"/>
</svg>
</div>

{{< multiplechoice
  question="For $y>-3x$, which graph is correct?"
  hint="Because the line goes through the origin, test $(1,0)$."
  answer="a dashed boundary line with the region containing (1,0) shaded"
>}}
a dashed boundary line with the region containing (1,0) shaded
a dashed boundary line with the region not containing (1,0) shaded
a solid boundary line with the region containing (1,0) shaded
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y\geq-2x$, which graph is correct?"
  hint="Because the line goes through the origin, test $(1,0)$."
  answer="a solid boundary line with the region containing (1,0) shaded"
>}}
a solid boundary line with the region containing (1,0) shaded
a solid boundary line with the region not containing (1,0) shaded
a dashed boundary line with the region containing (1,0) shaded
{{< /multiplechoice >}}

Some linear inequalities have only one variable. They may have an $x$ but no
$y$, or a $y$ but no $x$. In these cases, the boundary line will be either a
vertical or a horizontal line. Recall that $x=a$ is a vertical line and
$y=b$ is a horizontal line.

**Example.** Graph the linear inequality $y>3$.

First, we graph the boundary line $y=3$. It is a horizontal line. The
inequality is $>$ so we draw a dashed line. We test the point $(0,0)$.
Since $0\not>3$, $(0,0)$ is not a solution. So we shade the side that does
not include $(0,0)$.

<div class="ap-figure">
<svg role="img" aria-label="A dashed horizontal boundary line y equals 3, with the region above the line shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372" width="372" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="346" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="346" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="346" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="346" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="346" y1="346" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="346" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="346" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="346" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="346" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="346" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="346" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="346" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="346" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="346" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="346" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="346" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="346" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="346" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="346" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="346" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="346" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,26 346,26 346,126 26,126" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="24" y1="186" x2="348" y2="186" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="358,186 348,191 348,181" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,186 24,181 24,191" fill="currentColor"/>
  <polygon points="186,358 181,348 191,348" fill="currentColor"/>
  <text x="356" y="178" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="183" x2="26" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="201" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="183" x2="66" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="201" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="183" x2="106" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="201" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="183" x2="146" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="201" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="183" x2="226" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="201" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="183" x2="266" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="201" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="306" y1="183" x2="306" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="201" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="346" y1="183" x2="346" y2="189" stroke="currentColor" stroke-width="1"/>
  <text x="346" y="201" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="183" y1="346" x2="189" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="350" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="183" y1="306" x2="189" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="310" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="146" x2="189" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="150" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="30" y1="126" x2="342" y2="126" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polygon points="352,126 342,131 342,121" fill="currentColor"/>
  <polygon points="20,126 30,121 30,131" fill="currentColor"/>
</svg>
</div>

All points in the shaded region, but not those on the boundary line,
represent the solutions to $y>3$.

{{< multiplechoice
  question="For $y<5$, which graph is correct?"
  hint="A strict inequality has a dashed boundary; y-values less than 5 lie below it."
  answer="a dashed horizontal boundary line with the region below shaded"
>}}
a dashed horizontal boundary line with the region below shaded
a solid horizontal boundary line with the region below shaded
a dashed horizontal boundary line with the region above shaded
{{< /multiplechoice >}}

{{< multiplechoice
  question="For $y\leq-1$, which graph is correct?"
  hint="An inequality including equality has a solid boundary; smaller y-values lie below it."
  answer="a solid horizontal boundary line with the region below shaded"
>}}
a solid horizontal boundary line with the region below shaded
a dashed horizontal boundary line with the region below shaded
a solid horizontal boundary line with the region above shaded
{{< /multiplechoice >}}

## Solve applications using linear inequalities in two variables

Many fields use linear inequalities to model a problem. While our examples
may be about simple situations, they give us an opportunity to build our
skills and to get a feel for how they might be used.

**Example.** Hilaria works two part time jobs in order to earn enough money
to meet her obligations of at least \$240 a week. Her job in food service
pays \$10 an hour and her tutoring job on campus pays \$15 an hour. How many
hours does Hilaria need to work at each job to earn at least \$240?

(a) Let $x$ be the number of hours she works at the job in food service and
let $y$ be the number of hours she works tutoring. Write an inequality that
would model this situation.

We let $x$ be the number of hours she works at the job in food service and
let $y$ be the number of hours she works tutoring. She earns \$10 per hour
at the job in food service and \$15 an hour tutoring. At each job, the number
of hours multiplied by the hourly wage will give the amount earned at that
job. The amount earned at the food service job plus the amount earned
tutoring is at least \$240:

$$10x+15y\geq240$$

(b) Graph the inequality. To graph it, we put it in slope-intercept form.

$$
\begin{array}{rcl}
10x+15y &\geq& 240 \\[4pt]
15y &\geq& -10x+240 \\[4pt]
y &\geq& -\tfrac{2}{3}x+16
\end{array}
$$

<div class="ap-figure">
<svg role="img" aria-label="A first-quadrant graph of 10x plus 15y greater than or equal to 240, with a solid boundary through (0,16) and (24,0), and the region above the line shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 412" width="412" height="412" font-family="Helvetica, Arial, sans-serif">
  <line x1="38" y1="386" x2="38" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="386" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="386" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="386" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="386" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="386" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="386" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="386" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="386" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="386" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="386" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="386" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="386" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="386" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="386" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="386" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="386" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="386" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="254" y1="386" x2="254" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="386" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="386" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="386" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="302" y1="386" x2="302" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="386" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="386" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="338" y1="386" x2="338" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="350" y1="386" x2="350" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="362" y1="386" x2="362" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="374" y1="386" x2="374" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="386" y1="386" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="374" x2="386" y2="374" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="362" x2="386" y2="362" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="350" x2="386" y2="350" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="338" x2="386" y2="338" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="386" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="386" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="302" x2="386" y2="302" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="386" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="386" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="386" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="254" x2="386" y2="254" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="386" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="386" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="386" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="386" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="386" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="386" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="386" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="386" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="386" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="386" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="386" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="386" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="386" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="386" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="386" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="386" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="386" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="386" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,194 26,26 386,26 386,386 314,386" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="26" y1="386" x2="388" y2="386" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="386" stroke="currentColor" stroke-width="1"/>
  <polygon points="398,386 388,391 388,381" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="396" y="378" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="50" y1="383" x2="50" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="401" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="74" y1="383" x2="74" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="401" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="98" y1="383" x2="98" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="401" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="122" y1="383" x2="122" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="401" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="146" y1="383" x2="146" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="401" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="170" y1="383" x2="170" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="401" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="194" y1="383" x2="194" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="401" font-size="11" fill="currentColor" text-anchor="middle">14</text>
  <line x1="218" y1="383" x2="218" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="401" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="242" y1="383" x2="242" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="401" font-size="11" fill="currentColor" text-anchor="middle">18</text>
  <line x1="266" y1="383" x2="266" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="401" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="290" y1="383" x2="290" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="401" font-size="11" fill="currentColor" text-anchor="middle">22</text>
  <line x1="314" y1="383" x2="314" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="401" font-size="11" fill="currentColor" text-anchor="middle">24</text>
  <line x1="338" y1="383" x2="338" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="338" y="401" font-size="11" fill="currentColor" text-anchor="middle">26</text>
  <line x1="362" y1="383" x2="362" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="362" y="401" font-size="11" fill="currentColor" text-anchor="middle">28</text>
  <line x1="386" y1="383" x2="386" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="386" y="401" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="23" y1="362" x2="29" y2="362" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="366" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="23" y1="338" x2="29" y2="338" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="342" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="23" y1="314" x2="29" y2="314" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="318" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="23" y1="290" x2="29" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="294" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="23" y1="266" x2="29" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="270" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="242" x2="29" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="246" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="23" y1="218" x2="29" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="222" font-size="11" fill="currentColor" text-anchor="end">14</text>
  <line x1="23" y1="194" x2="29" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="198" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="23" y1="170" x2="29" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="174" font-size="11" fill="currentColor" text-anchor="end">18</text>
  <line x1="23" y1="146" x2="29" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="150" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="122" x2="29" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="126" font-size="11" fill="currentColor" text-anchor="end">22</text>
  <line x1="23" y1="98" x2="29" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="102" font-size="11" fill="currentColor" text-anchor="end">24</text>
  <line x1="23" y1="74" x2="29" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="78" font-size="11" fill="currentColor" text-anchor="end">26</text>
  <line x1="23" y1="50" x2="29" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="54" font-size="11" fill="currentColor" text-anchor="end">28</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="28.3" y1="195.5" x2="314.7" y2="386.5" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="323,392 311.9,390.6 317.5,382.3" fill="currentColor"/>
  <polygon points="20,190 31.1,191.4 25.5,199.7" fill="currentColor"/>
</svg>
</div>

(c) From the graph, we see that the ordered pairs $(15,10)$, $(0,16)$,
$(24,0)$ represent three of infinitely many solutions. Check the values in
the inequality.

$$
\begin{array}{rcl}
10(15)+15(10) &=& 300\geq240 \\[4pt]
10(0)+15(16) &=& 240\geq240 \\[4pt]
10(24)+15(0) &=& 240\geq240
\end{array}
$$

For Hilaria, it means that to earn at least \$240, she can work 15 hours
tutoring and 10 hours at her fast-food job, earn all her money tutoring for
16 hours, or earn all her money while working 24 hours at the job in food
service.

Hugh works two part time jobs. One at a grocery store that pays \$10 an hour
and the other is babysitting for \$13 hour. Between the two jobs, Hugh wants
to earn at least \$260 a week. How many hours does Hugh need to work at each
job to earn at least \$260?

{{< fillin
  question="Let $x$ be the number of hours Hugh works at the grocery store and let $y$ be the number of hours he works babysitting. Write an inequality that would model this situation."
  answer="10x+13y\geq260"
  answerDisplay="$10x+13y\geq260$"
  hint="Add the earnings from the two jobs and use the phrase 'at least' to choose the inequality symbol."
>}}

<div class="ap-figure">
<svg role="img" aria-label="A first-quadrant graph of 10x plus 13y greater than or equal to 260, with the region above the solid boundary line shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 412" width="412" height="412" font-family="Helvetica, Arial, sans-serif">
  <line x1="38" y1="386" x2="38" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="386" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="386" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="386" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="386" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="386" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="386" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="386" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="386" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="386" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="386" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="386" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="386" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="386" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="386" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="386" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="386" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="386" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="254" y1="386" x2="254" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="386" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="386" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="386" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="302" y1="386" x2="302" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="386" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="386" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="338" y1="386" x2="338" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="350" y1="386" x2="350" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="362" y1="386" x2="362" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="374" y1="386" x2="374" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="386" y1="386" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="374" x2="386" y2="374" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="362" x2="386" y2="362" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="350" x2="386" y2="350" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="338" x2="386" y2="338" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="386" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="386" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="302" x2="386" y2="302" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="386" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="386" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="386" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="254" x2="386" y2="254" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="386" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="386" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="386" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="386" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="386" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="386" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="386" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="386" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="386" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="386" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="386" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="386" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="386" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="386" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="386" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="386" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="386" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="386" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,146 26,26 386,26 386,386 338,386" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="26" y1="386" x2="388" y2="386" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="386" stroke="currentColor" stroke-width="1"/>
  <polygon points="398,386 388,391 388,381" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="396" y="378" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="50" y1="383" x2="50" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="401" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="74" y1="383" x2="74" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="401" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="98" y1="383" x2="98" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="401" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="122" y1="383" x2="122" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="401" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="146" y1="383" x2="146" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="401" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="170" y1="383" x2="170" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="401" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="194" y1="383" x2="194" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="401" font-size="11" fill="currentColor" text-anchor="middle">14</text>
  <line x1="218" y1="383" x2="218" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="401" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="242" y1="383" x2="242" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="401" font-size="11" fill="currentColor" text-anchor="middle">18</text>
  <line x1="266" y1="383" x2="266" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="401" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="290" y1="383" x2="290" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="401" font-size="11" fill="currentColor" text-anchor="middle">22</text>
  <line x1="314" y1="383" x2="314" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="401" font-size="11" fill="currentColor" text-anchor="middle">24</text>
  <line x1="338" y1="383" x2="338" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="338" y="401" font-size="11" fill="currentColor" text-anchor="middle">26</text>
  <line x1="362" y1="383" x2="362" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="362" y="401" font-size="11" fill="currentColor" text-anchor="middle">28</text>
  <line x1="386" y1="383" x2="386" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="386" y="401" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="23" y1="362" x2="29" y2="362" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="366" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="23" y1="338" x2="29" y2="338" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="342" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="23" y1="314" x2="29" y2="314" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="318" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="23" y1="290" x2="29" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="294" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="23" y1="266" x2="29" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="270" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="242" x2="29" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="246" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="23" y1="218" x2="29" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="222" font-size="11" fill="currentColor" text-anchor="end">14</text>
  <line x1="23" y1="194" x2="29" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="198" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="23" y1="170" x2="29" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="174" font-size="11" fill="currentColor" text-anchor="end">18</text>
  <line x1="23" y1="146" x2="29" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="150" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="122" x2="29" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="126" font-size="11" fill="currentColor" text-anchor="end">22</text>
  <line x1="23" y1="98" x2="29" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="102" font-size="11" fill="currentColor" text-anchor="end">24</text>
  <line x1="23" y1="74" x2="29" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="78" font-size="11" fill="currentColor" text-anchor="end">26</text>
  <line x1="23" y1="50" x2="29" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="54" font-size="11" fill="currentColor" text-anchor="end">28</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="27.9" y1="147.5" x2="337.9" y2="385.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="345.8,392 334.8,389.9 340.9,381.9" fill="currentColor"/>
  <polygon points="20,141.4 31,143.5 24.9,151.4" fill="currentColor"/>
</svg>
</div>

Three ordered pairs that are solutions are $(0,20)$, $(13,10)$, and
$(26,0)$. They mean Hugh can earn at least \$260 by babysitting 20 hours,
working 13 hours at each job, or working 26 hours at the grocery store.

Veronica works two part time jobs in order to earn enough money to meet her
obligations of at least \$280 a week. Her job at the day spa pays \$10 an hour
and her administrative assistant job on campus pays \$17.50 an hour. How many
hours does Veronica need to work at each job to earn at least \$280?

{{< fillin
  question="Let $x$ be the number of hours Veronica works at the day spa and let $y$ be the number of hours she works as administrative assistant. Write an inequality that would model this situation."
  answer="10x+17.5y\geq280"
  answerDisplay="$10x+17.5y\geq280$"
  hint="Add the earnings from the two jobs and use the phrase 'at least' to choose the inequality symbol."
>}}

<div class="ap-figure">
<svg role="img" aria-label="A first-quadrant graph of 10x plus 17.5y greater than or equal to 280, with the region above the solid boundary line shaded." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 412" width="412" height="412" font-family="Helvetica, Arial, sans-serif">
  <line x1="38" y1="386" x2="38" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="386" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="386" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="386" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="386" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="386" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="386" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="386" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="386" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="386" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="386" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="386" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="386" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="386" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="386" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="386" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="386" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="386" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="254" y1="386" x2="254" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="386" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="386" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="386" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="302" y1="386" x2="302" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="386" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="386" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="338" y1="386" x2="338" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="350" y1="386" x2="350" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="362" y1="386" x2="362" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="374" y1="386" x2="374" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="386" y1="386" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="374" x2="386" y2="374" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="362" x2="386" y2="362" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="350" x2="386" y2="350" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="338" x2="386" y2="338" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="386" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="386" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="302" x2="386" y2="302" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="290" x2="386" y2="290" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="386" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="386" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="254" x2="386" y2="254" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="386" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="230" x2="386" y2="230" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="386" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="386" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="386" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="386" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="386" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="386" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="386" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="386" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="386" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="386" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="386" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="386" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="386" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="386" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="386" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="386" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <polygon points="26,194 26,26 386,26 386,386 362,386" fill="currentColor" opacity="0.12" stroke="none"/>
  <line x1="26" y1="386" x2="388" y2="386" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="386" stroke="currentColor" stroke-width="1"/>
  <polygon points="398,386 388,391 388,381" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="396" y="378" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="50" y1="383" x2="50" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="401" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="74" y1="383" x2="74" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="401" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="98" y1="383" x2="98" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="401" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="122" y1="383" x2="122" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="401" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="146" y1="383" x2="146" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="401" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="170" y1="383" x2="170" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="401" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="194" y1="383" x2="194" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="401" font-size="11" fill="currentColor" text-anchor="middle">14</text>
  <line x1="218" y1="383" x2="218" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="401" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="242" y1="383" x2="242" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="401" font-size="11" fill="currentColor" text-anchor="middle">18</text>
  <line x1="266" y1="383" x2="266" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="401" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="290" y1="383" x2="290" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="401" font-size="11" fill="currentColor" text-anchor="middle">22</text>
  <line x1="314" y1="383" x2="314" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="401" font-size="11" fill="currentColor" text-anchor="middle">24</text>
  <line x1="338" y1="383" x2="338" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="338" y="401" font-size="11" fill="currentColor" text-anchor="middle">26</text>
  <line x1="362" y1="383" x2="362" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="362" y="401" font-size="11" fill="currentColor" text-anchor="middle">28</text>
  <line x1="386" y1="383" x2="386" y2="389" stroke="currentColor" stroke-width="1"/>
  <text x="386" y="401" font-size="11" fill="currentColor" text-anchor="middle">30</text>
  <line x1="23" y1="362" x2="29" y2="362" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="366" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="23" y1="338" x2="29" y2="338" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="342" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="23" y1="314" x2="29" y2="314" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="318" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="23" y1="290" x2="29" y2="290" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="294" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="23" y1="266" x2="29" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="270" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="242" x2="29" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="246" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="23" y1="218" x2="29" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="222" font-size="11" fill="currentColor" text-anchor="end">14</text>
  <line x1="23" y1="194" x2="29" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="198" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="23" y1="170" x2="29" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="174" font-size="11" fill="currentColor" text-anchor="end">18</text>
  <line x1="23" y1="146" x2="29" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="150" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="122" x2="29" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="126" font-size="11" fill="currentColor" text-anchor="end">22</text>
  <line x1="23" y1="98" x2="29" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="102" font-size="11" fill="currentColor" text-anchor="end">24</text>
  <line x1="23" y1="74" x2="29" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="78" font-size="11" fill="currentColor" text-anchor="end">26</text>
  <line x1="23" y1="50" x2="29" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="54" font-size="11" fill="currentColor" text-anchor="end">28</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="28.7" y1="195.5" x2="363.8" y2="387" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="372.5,392 361.3,391.4 366.3,382.7" fill="currentColor"/>
  <polygon points="20,190.6 31.2,191.2 26.2,199.9" fill="currentColor"/>
</svg>
</div>

Three ordered pairs that are solutions are $(0,16)$, $(14,8)$, and $(28,0)$.
They mean Veronica can earn at least \$280 by working 16 hours as an
administrative assistant, working 14 hours at the day spa and 8 hours as an
administrative assistant, or working 28 hours at the day spa.

## Key terms

**linear inequality** — an inequality that can be written as $Ax+By>C$,
$Ax+By\geq C$, $Ax+By<C$, or $Ax+By\leq C$, where $A$ and $B$ are not both
zero. **solution to a linear inequality** — an ordered pair $(x,y)$ that
makes the inequality true when the values are substituted. **boundary line**
— the line $Ax+By=C$ that separates the region where $Ax+By>C$ from the
region where $Ax+By<C$.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 3.4: Graph Linear Inequalities in Two Variables](https://openstax.org/books/intermediate-algebra-2e/pages/3-4-graph-linear-inequalities-in-two-variables) by Lynn Marecek, MaryAnne Anthony-Smith, and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated number-line and coordinate-plane figures as accessible interactive graphics; omitted the Be Prepared quiz, Media link, Self Check, and Section Exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
