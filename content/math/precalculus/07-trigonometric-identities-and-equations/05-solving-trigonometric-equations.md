---
title: Solving Trigonometric Equations
description: >-
  Solving linear, single-function, calculator-based, quadratic-form,
  identity-based, and multiple-angle trigonometric equations exactly, then
  applying right-triangle methods to real-world elevation problems — adapted
  from OpenStax Precalculus 2e, Section 7.5.
source_section: "7.5"
weight: 5
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Solve linear trigonometric equations in sine and cosine
- Solve equations involving a single trigonometric function
- Solve trigonometric equations using a calculator
- Solve trigonometric equations that are quadratic in form
- Solve trigonometric equations using fundamental identities
- Solve trigonometric equations with multiple angles
- Solve right triangle problems
{{< /callout >}}

Thales of Miletus (circa 625–547 BC) is known as the founder of geometry. The legend is that he calculated the height of the Great Pyramid of Giza in Egypt using the theory of *similar triangles*, which he developed by measuring the shadow of his staff. Based on proportions, this theory has applications in a number of areas, including fractal geometry, engineering, and architecture. Often, the angle of elevation and the angle of depression are found using similar triangles.

In earlier sections of this chapter, we looked at trigonometric identities. Identities are true for all values in the domain of the variable. In this section, we begin our study of trigonometric equations to study real-world scenarios such as finding the dimensions of the pyramids.

### Solving Linear Trigonometric Equations in Sine and Cosine

Trigonometric equations are, as the name implies, equations that involve trigonometric functions. Similar in many ways to solving polynomial equations or rational equations, only specific values of the variable will be solutions, if there are solutions at all. Often we will solve a trigonometric equation over a specified interval. However, just as often, we will be asked to find all possible solutions, and as trigonometric functions are periodic, solutions are repeated within each period. In other words, trigonometric equations may have an infinite number of solutions. Additionally, like rational equations, the domain of the function must be considered before we assume that any solution is valid. The **period** of both the sine function and the cosine function is $2\pi$. In other words, every $2\pi$ units, the $y$-values repeat. If we need to find all possible solutions, then we must add $2\pi k$, where $k$ is an integer, to the initial solution. Recall the rule that gives the format for stating all possible solutions for a function where the period is $2\pi$:

$$\sin\theta=\sin(\theta\pm2k\pi)$$

There are similar rules for indicating all possible solutions for the other trigonometric functions. Solving trigonometric equations requires the same techniques as solving algebraic equations. We read the equation from left to right, horizontally, like a sentence. We look for known patterns, factor, find common denominators, and substitute certain expressions with a variable to make solving a more straightforward process. However, with trigonometric equations, we also have the advantage of using the identities we developed in the previous sections.

**Example.** Find all possible exact solutions for the equation $\cos\theta=\tfrac12$.

**Solution.** From the unit circle, we know that

$$
\begin{array}{lrcl}
& \cos\theta &=& \tfrac12 \\[4pt]
& \theta &=& \tfrac{\pi}{3},\tfrac{5\pi}{3}
\end{array}
$$

These are the solutions in the interval $[0,2\pi]$. All possible solutions are given by

$$\tfrac{\pi}{3}\pm2k\pi\ \text{and}\ \tfrac{5\pi}{3}\pm2k\pi$$

where $k$ is an integer.

**Example.** Find all possible exact solutions for the equation $\sin t=\tfrac12$.

**Solution.** Solving for all possible values of $t$ means that solutions include angles beyond the period of $2\pi$. From the unit circle, we can see that the solutions are $\tfrac{\pi}{6}$ and $\tfrac{5\pi}{6}$. But the problem is asking for all possible values that solve the equation. Therefore, the answer is

$$\tfrac{\pi}{6}\pm2\pi k\ \text{and}\ \tfrac{5\pi}{6}\pm2\pi k$$

where $k$ is an integer.

{{< callout type="info" >}}
  **How to:** given a trigonometric equation, solve using algebra.

  1. Look for a pattern that suggests an algebraic property, such as the difference of squares or a factoring opportunity.
  2. Substitute the trigonometric expression with a single variable, such as $x$ or $u$.
  3. Solve the equation the same way an algebraic equation would be solved.
  4. Substitute the trigonometric expression back in for the variable in the resulting expressions.
  5. Solve for the angle.
{{< /callout >}}

**Example.** Solve the equation exactly: $2\cos\theta-3=-5,\ 0\le\theta<2\pi$.

**Solution.** Use algebraic techniques to solve the equation.

$$
\begin{array}{lrcl}
& 2\cos\theta-3 &=& -5 \\[4pt]
& 2\cos\theta &=& -2 \\[4pt]
& \cos\theta &=& -1 \\[4pt]
& \theta &=& \pi
\end{array}
$$

{{< fillin
  question="Solve exactly the following linear equation on the interval $[0,2\pi)$: $2\sin x+1=0$."
  answer="7\pi/6,11\pi/6"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$x=\tfrac{7\pi}{6}$ or $x=\tfrac{11\pi}{6}$"
  hint="Isolate $\sin x$, then find both angles in $[0,2\pi)$ with that sine value."
>}}

### Solving Equations Involving a Single Trigonometric Function

When we are given equations that involve only one of the six trigonometric functions, their solutions involve using algebraic techniques and the unit circle. We need to make several considerations when the equation involves trigonometric functions other than sine and cosine. Problems involving the reciprocals of the primary trigonometric functions need to be viewed from an algebraic perspective. In other words, we will write the reciprocal function, and solve for the angles using the function. Also, an equation involving the tangent function is slightly different from one containing a sine or cosine function. First, as we know, the period of tangent is $\pi$, not $2\pi$. Further, the domain of tangent is all real numbers with the exception of odd integer multiples of $\tfrac{\pi}{2}$, unless, of course, a problem places its own restrictions on the domain.

**Example.** Solve the problem exactly: $2\sin^2\theta-1=0,\ 0\le\theta<2\pi$.

**Solution.** As this problem is not easily factored, we will solve using the square root property. First, we use algebra to isolate $\sin\theta$. Then we will find the angles.

$$
\begin{array}{lrcl}
& 2\sin^2\theta-1 &=& 0 \\[4pt]
& 2\sin^2\theta &=& 1 \\[4pt]
& \sin^2\theta &=& \tfrac12 \\[4pt]
& \sqrt{\sin^2\theta} &=& \pm\sqrt{\tfrac12} \\[4pt]
& \sin\theta &=& \pm\tfrac{1}{\sqrt2}=\pm\tfrac{\sqrt2}{2} \\[4pt]
& \theta &=& \tfrac{\pi}{4},\tfrac{3\pi}{4},\tfrac{5\pi}{4},\tfrac{7\pi}{4}
\end{array}
$$

**Example.** Solve the following equation exactly: $\csc\theta=-2,\ 0\le\theta<4\pi$.

**Solution.** We want all values of $\theta$ for which $\csc\theta=-2$ over the interval $0\le\theta<4\pi$.

$$
\begin{array}{lrcl}
& \csc\theta &=& -2 \\[4pt]
& \tfrac{1}{\sin\theta} &=& -2 \\[4pt]
& \sin\theta &=& -\tfrac12 \\[4pt]
& \theta &=& \tfrac{7\pi}{6},\tfrac{11\pi}{6},\tfrac{19\pi}{6},\tfrac{23\pi}{6}
\end{array}
$$

**Analysis.** As $\sin\theta=-\tfrac12$, notice that all four solutions are in the third and fourth quadrants.

**Example.** Solve the equation exactly: $\tan\left(\theta-\tfrac{\pi}{2}\right)=1,\ 0\le\theta<2\pi$.

**Solution.** Recall that the tangent function has a period of $\pi$. On the interval $[0,\pi)$, and at the angle of $\tfrac{\pi}{4}$, the tangent has a value of $1$. However, the angle we want is $\left(\theta-\tfrac{\pi}{2}\right)$. Thus, if $\tan\left(\tfrac{\pi}{4}\right)=1$, then

$$
\begin{array}{lrcl}
& \theta-\tfrac{\pi}{2} &=& \tfrac{\pi}{4} \\[4pt]
& \theta &=& \tfrac{3\pi}{4}\pm k\pi
\end{array}
$$

Over the interval $[0,2\pi)$, we have two solutions:

$$\tfrac{3\pi}{4}\ \text{and}\ \tfrac{3\pi}{4}+\pi=\tfrac{7\pi}{4}$$

{{< fillin
  question="Find all solutions for $\tan x=\sqrt3$, using $k$ for any integer and the representative angle in $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$."
  answer="\pi/3+k\pi"
  answerForm="radians"
  answerDisplay="$x=\tfrac{\pi}{3}+k\pi$"
  hint="Tangent has period $\pi$: find the one solution in $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$, then add $k\pi$ for every integer $k$."
>}}

**Example.** Identify all exact solutions to the equation $2(\tan x+3)=5+\tan x,\ 0\le x<2\pi$.

**Solution.** We can solve this equation using only algebra. Isolate the expression $\tan x$ on the left side of the equals sign.

$$
\begin{array}{lrcl}
& 2(\tan x)+2(3) &=& 5+\tan x \\[4pt]
& 2\tan x+6 &=& 5+\tan x \\[4pt]
& 2\tan x-\tan x &=& 5-6 \\[4pt]
& \tan x &=& -1
\end{array}
$$

There are two angles on the unit circle that have a tangent value of $-1$: $\theta=\tfrac{3\pi}{4}$ and $\theta=\tfrac{7\pi}{4}$.

### Solve Trigonometric Equations Using a Calculator

Not all functions can be solved exactly using only the unit circle. When we must solve an equation involving an angle other than one of the special angles, we will need to use a calculator. Make sure it is set to the proper mode, either degrees or radians, depending on the criteria of the given problem.

**Example.** Use a calculator to solve the equation $\sin\theta=0.8$, where $\theta$ is in radians.

**Solution.** Make sure mode is set to radians. To find $\theta$, use the inverse sine function. On most calculators, you will need to push the 2ND button and then the SIN button to bring up the $\sin^{-1}$ function. What is shown on the screen is $\sin^{-1}($. The calculator is ready for the input within the parentheses. For this problem, we enter $\sin^{-1}(0.8)$, and press ENTER. Thus, to four decimal places,

$$\sin^{-1}(0.8)\approx0.9273$$

The solution is

$$0.9273\pm2\pi k$$

The angle measurement in degrees is

$$
\begin{array}{lrcl}
& \theta &\approx& 53.1^\circ \\[4pt]
& \theta &\approx& 180^\circ-53.1^\circ \\[4pt]
& &\approx& 126.9^\circ
\end{array}
$$

**Analysis.** Note that a calculator will only return an angle in quadrants I or IV for the sine function, since that is the range of the inverse sine. The other angle is obtained by using $\pi-\theta$.

**Example.** Use a calculator to solve the equation $\sec\theta=-4$, giving your answer in radians.

**Solution.** We can begin with some algebra.

$$
\begin{array}{lrcl}
& \sec\theta &=& -4 \\[4pt]
& \tfrac{1}{\cos\theta} &=& -4 \\[4pt]
& \cos\theta &=& -\tfrac14
\end{array}
$$

Check that the MODE is in radians. Now use the inverse cosine function.

$$
\begin{array}{lrcl}
& \cos^{-1}\left(-\tfrac14\right) &\approx& 1.8235 \\[4pt]
& \theta &\approx& 1.8235+2\pi k
\end{array}
$$

Since $\tfrac{\pi}{2}\approx1.57$ and $\pi\approx3.14$, $1.8235$ is between these two numbers, thus $\theta\approx1.8235$ is in quadrant II. Cosine is also negative in quadrant III. Note that a calculator will only return an angle in quadrants I or II for the cosine function, since that is the range of the inverse cosine, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"An angle theta of about 1.8235 radians in standard position, terminal side in quadrant II, with the reference angle of about 1.3181 radians marked between the terminal side and the negative x-axis; a second terminal side in quadrant III at about 4.4597 radians is the mirror image across the x-axis, at the same reference angle from the negative x-axis.","xMin":-2.1,"xMax":1.9,"yMin":-2,"yMax":1.9,"grid":false,"tickLabels":false,"unit":85,"segments":[{"from":[0,0],"to":[-0.325,1.259],"arrows":"end"},{"from":[0,0],"to":[-0.325,-1.259],"arrows":"end"}],"circles":[{"at":[0,0],"r":0.95,"from":0,"to":104.48},{"at":[0,0],"r":0.45,"from":104.48,"to":180},{"at":[0,0],"r":0.68,"from":180,"to":255.52}],"texts":[{"at":[0.55,1.4],"text":"θ ≈ 1.8235"},{"at":[-2.05,0.78],"text":"θ′ ≈ π − 1.8235 ≈ 1.3181"},{"at":[-2.05,-1.05],"text":"θ′ ≈ π + 1.3181 ≈ 4.4597"}]}
{{< /apfigure >}}

So, we also need to find the measure of the angle in quadrant III. In quadrant III, the reference angle is $\theta'\approx\pi-1.8235\approx1.3181$. The other solution in quadrant III is $\pi+1.3181\approx4.4597$.

The solutions are $1.8235\pm2\pi k$ and $4.4597\pm2\pi k$.

{{< fillin
  question="Solve $\cos\theta=-0.2$, giving each family of solutions to four decimal places, using $k$ for any integer and representative angles in $[0,2\pi)$."
  answer="1.7722+2k\pi,4.5110+2k\pi"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$\theta\approx1.7722+2k\pi$ or $\theta\approx4.5110+2k\pi$"
  hint="Use the inverse cosine for one representative angle in quadrant II; cosine is also negative in quadrant III, so subtract that angle from $2\pi$ for the second family, then add $2k\pi$ to each."
>}}

### Solving Trigonometric Equations in Quadratic Form

Solving a **quadratic equation** may be more complicated, but once again, we can use algebra as we would for any quadratic equation. Look at the pattern of the equation. Is there more than one trigonometric function in the equation, or is there only one? Which trigonometric function is squared? If there is only one function represented and one of the terms is squared, think about the standard form of a quadratic. Replace the trigonometric function with a variable such as $x$ or $u$. If substitution makes the equation look like a quadratic equation, then we can use the same methods for solving quadratics to solve the trigonometric equations.

**Example.** Solve the equation exactly: $\cos^2\theta+3\cos\theta-1=0,\ 0\le\theta<2\pi$.

**Solution.** We begin by using substitution and replacing $\cos\theta$ with $x$. It is not necessary to use substitution, but it may make the problem easier to solve visually. Let $\cos\theta=x$. We have

$$x^2+3x-1=0$$

The equation cannot be factored, so we will use the quadratic formula $x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$.

$$
\begin{array}{lrcl}
& x &=& \tfrac{-3\pm\sqrt{(3)^2-4(1)(-1)}}{2} \\[4pt]
& &=& \tfrac{-3\pm\sqrt{13}}{2}
\end{array}
$$

Replace $x$ with $\cos\theta$, and solve. Thus,

$$
\begin{array}{lrcl}
& \cos\theta &=& \tfrac{-3\pm\sqrt{13}}{2} \\[4pt]
& \theta &=& \cos^{-1}\left(\tfrac{-3+\sqrt{13}}{2}\right)
\end{array}
$$

Note that only the $+$ sign is used. This is because we get an error when we solve $\theta=\cos^{-1}\left(\tfrac{-3-\sqrt{13}}{2}\right)$ on a calculator, since the domain of the inverse cosine function is $[-1,1]$. However, there is a second solution:

$$
\begin{array}{lrcl}
& \cos^{-1}\left(\tfrac{-3+\sqrt{13}}{2}\right) \\[4pt]
& \approx1.26
\end{array}
$$

This terminal side of the angle lies in quadrant I. Since cosine is also positive in quadrant IV, the second solution is

$$
\begin{array}{lrcl}
& 2\pi-\cos^{-1}\left(\tfrac{-3+\sqrt{13}}{2}\right) \\[4pt]
& \approx5.02
\end{array}
$$

**Example.** Solve the equation exactly: $2\sin^2\theta-5\sin\theta+3=0,\ 0\le\theta\le2\pi$.

**Solution.** Using grouping, this quadratic can be factored. Either make the real substitution, $\sin\theta=u$, or imagine it, as we factor:

$$
\begin{array}{lrcl}
& 2\sin^2\theta-5\sin\theta+3 &=& 0 \\[4pt]
& (2\sin\theta-3)(\sin\theta-1) &=& 0
\end{array}
$$

Now set each factor equal to zero.

$$
\begin{array}{lrcl}
& 2\sin\theta-3 &=& 0 \\[4pt]
& 2\sin\theta &=& 3 \\[4pt]
& \sin\theta &=& \tfrac32
\end{array}
$$

$$
\begin{array}{lrcl}
& \sin\theta-1 &=& 0 \\[4pt]
& \sin\theta &=& 1
\end{array}
$$

Next solve for $\theta$: $\sin\theta\ne\tfrac32$, as the range of the sine function is $[-1,1]$. However, $\sin\theta=1$, giving the solution $\tfrac{\pi}{2}$.

**Analysis.** Make sure to check all solutions on the given domain as some factors have no solution.

{{< fillin
  question="Solve $\sin^2\theta=2\cos\theta+2$ on $[0,2\pi]$."
  answer="\pi"
  answerForm="radians"
  answerDisplay="$\theta=\pi$"
  hint="Replace $\sin^2\theta$ with $1-\cos^2\theta$ so the equation is entirely in terms of $\cos\theta$, then solve the resulting equation."
>}}

**Example.** Solve exactly:

$$2\sin^2\theta+\sin\theta=0;\ 0\le\theta<2\pi$$

**Solution.** This problem should appear familiar as it is similar to a quadratic. Let $\sin\theta=x$. The equation becomes $2x^2+x=0$. We begin by factoring:

$$
\begin{array}{lrcl}
& 2x^2+x &=& 0 \\[4pt]
& x(2x+1) &=& 0
\end{array}
$$

Set each factor equal to zero.

$$
\begin{array}{lrcl}
& x &=& 0 \\[4pt]
& (2x+1) &=& 0 \\[4pt]
& x &=& -\tfrac12
\end{array}
$$

Then, substitute back into the equation the original expression $\sin\theta$ for $x$. Thus,

$$
\begin{array}{lrcl}
& \sin\theta &=& 0 \\[4pt]
& \theta &=& 0,\pi
\end{array}
$$

$$
\begin{array}{lrcl}
& \sin\theta &=& -\tfrac12 \\[4pt]
& \theta &=& \tfrac{7\pi}{6},\tfrac{11\pi}{6}
\end{array}
$$

The solutions within the domain $0\le\theta<2\pi$ are $0,\pi,\tfrac{7\pi}{6},\tfrac{11\pi}{6}$.

If we prefer not to substitute, we can solve the equation by following the same pattern of factoring and setting each factor equal to zero.

$$
\begin{array}{lrcl}
& 2\sin^2\theta+\sin\theta &=& 0 \\[4pt]
& \sin\theta(2\sin\theta+1) &=& 0 \\[4pt]
& \sin\theta &=& 0 \\[4pt]
& \theta &=& 0,\pi
\end{array}
$$

$$
\begin{array}{lrcl}
& 2\sin\theta+1 &=& 0 \\[4pt]
& 2\sin\theta &=& -1 \\[4pt]
& \sin\theta &=& -\tfrac12 \\[4pt]
& \theta &=& \tfrac{7\pi}{6},\tfrac{11\pi}{6}
\end{array}
$$

**Analysis.** We can see the solutions on the graph below. On the interval $0\le\theta<2\pi$, the graph crosses the $x$-axis four times, at the solutions noted. Notice that trigonometric equations that are in quadratic form can yield up to four solutions instead of the expected two that are found with quadratic equations. In this example, each solution (angle) corresponding to a positive sine value will yield two angles that would result in that value.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of y equals 2 sine squared theta plus sine theta from negative pi over 6 to 13 pi over 6, a repeating wave rising from 0 at theta equals 0 to a peak of about 3 near theta equals pi over 2, back down through zero at theta equals pi, dipping to a shallow trough of about negative 0.13 before crossing zero at 7 pi over 6, rising to a smaller hump of about 1 near theta equals 3 pi over 2, crossing zero again at 11 pi over 6, dipping to a second shallow trough, then rising again past 2 pi.","xMin":-0.75,"xMax":7.05,"yMin":-2.9,"yMax":4.5,"grid":false,"tickLabels":"y","yTickStep":1,"unit":105,"polylines":[{"through":[[-0.5236,0],[-0.4625,-0.048],[-0.4014,-0.0854],[-0.3403,-0.111],[-0.2793,-0.1237],[-0.2182,-0.1227],[-0.1571,-0.1075],[-0.096,-0.0775],[-0.0349,-0.0325],[0.0262,0.0275],[0.0873,0.1023],[0.1484,0.1915],[0.2094,0.2944],[0.2705,0.4101],[0.3316,0.5376],[0.3927,0.6756],[0.4538,0.8227],[0.5149,0.9774],[0.576,1.1379],[0.637,1.3025],[0.6981,1.4691],[0.7592,1.636],[0.8203,1.8011],[0.8814,1.9624],[0.9425,2.118],[1.0036,2.266],[1.0647,2.4045],[1.1257,2.5319],[1.1868,2.6465],[1.2479,2.747],[1.309,2.832],[1.3701,2.9004],[1.4312,2.9515],[1.4923,2.9846],[1.5533,2.9992],[1.6144,2.9952],[1.6755,2.9727],[1.7366,2.9318],[1.7977,2.8732],[1.8588,2.7975],[1.9199,2.7057],[1.9809,2.5991],[2.042,2.4788],[2.1031,2.3464],[2.1642,2.2036],[2.2253,2.0522],[2.2864,1.8939],[2.3475,1.7307],[2.4086,1.5646],[2.4696,1.3976],[2.5307,1.2316],[2.5918,1.0685],[2.6529,0.9103],[2.714,0.7586],[2.7751,0.6152],[2.8362,0.4816],[2.8972,0.359],[2.9583,0.2487],[3.0194,0.1516],[3.0805,0.0685],[3.1416,0],[3.2027,-0.0536],[3.2638,-0.0922],[3.3249,-0.1158],[3.3859,-0.1249],[3.447,-0.1199],[3.5081,-0.1015],[3.5692,-0.0708],[3.6303,-0.0287],[3.6914,0.0235],[3.7525,0.0844],[3.8135,0.1525],[3.8746,0.2263],[3.9357,0.3042],[3.9968,0.3845],[4.0579,0.4655],[4.119,0.5456],[4.1801,0.6232],[4.2412,0.6968],[4.3022,0.7649],[4.3633,0.8264],[4.4244,0.8799],[4.4855,0.9244],[4.5466,0.9592],[4.6077,0.9836],[4.6688,0.9971],[4.7298,0.9995],[4.7909,0.9908],[4.852,0.971],[4.9131,0.9406],[4.9742,0.9001],[5.0353,0.8503],[5.0964,0.7922],[5.1574,0.7267],[5.2185,0.6553],[5.2796,0.5792],[5.3407,0.5],[5.4018,0.4192],[5.4629,0.3384],[5.524,0.2593],[5.5851,0.1836],[5.6461,0.1128],[5.7072,0.0486],[5.7683,-0.0075],[5.8294,-0.054],[5.8905,-0.0898],[5.9516,-0.1136],[6.0127,-0.1244],[6.0737,-0.1215],[6.1348,-0.1041],[6.1959,-0.072],[6.257,-0.0248],[6.3181,0.0373],[6.3792,0.1142],[6.4403,0.2054],[6.5014,0.3101],[6.5624,0.4276],[6.6235,0.5567],[6.6846,0.6961],[6.7457,0.8444],[6.8068,1]],"arrows":"end"}],"texts":[{"at":[-0.5236,-1.6],"text":"−π/6","anchor":"middle"},{"at":[-0.09,-0.4],"text":"0","anchor":"middle"},{"at":[0.5236,-0.85],"text":"π/6","anchor":"middle"},{"at":[1.0472,-0.4],"text":"π/3","anchor":"middle"},{"at":[1.5708,-0.85],"text":"π/2","anchor":"middle"},{"at":[2.0944,-0.4],"text":"2π/3","anchor":"middle"},{"at":[2.618,-0.85],"text":"5π/6","anchor":"middle"},{"at":[3.1416,-0.4],"text":"π","anchor":"middle"},{"at":[3.6652,-0.85],"text":"7π/6","anchor":"middle"},{"at":[4.1888,-0.4],"text":"4π/3","anchor":"middle"},{"at":[4.7124,-0.85],"text":"3π/2","anchor":"middle"},{"at":[5.236,-0.4],"text":"5π/3","anchor":"middle"},{"at":[5.7596,-0.85],"text":"11π/6","anchor":"middle"},{"at":[6.2832,-0.4],"text":"2π","anchor":"middle"},{"at":[6.8068,-0.85],"text":"13π/6","anchor":"middle"}]}
{{< /apfigure >}}

We can verify the solutions on the unit circle as well.

{{< fillin
  question="Solve the quadratic equation $2\cos^2\theta+\cos\theta=0$ on $[0,2\pi)$."
  answer="\pi/2,2\pi/3,4\pi/3,3\pi/2"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$\theta=\tfrac{\pi}{2},\tfrac{2\pi}{3},\tfrac{4\pi}{3},\tfrac{3\pi}{2}$"
  hint="Factor out $\cos\theta$, then set each resulting factor equal to zero and solve separately."
>}}

**Example.** Solve the equation quadratic in form exactly: $2\sin^2\theta-3\sin\theta+1=0,\ 0\le\theta<2\pi$.

**Solution.** We can factor using grouping. Solution values of $\theta$ can be found on the unit circle:

$$
\begin{array}{lrcl}
& (2\sin\theta-1)(\sin\theta-1) &=& 0 \\[4pt]
& 2\sin\theta-1 &=& 0 \\[4pt]
& \sin\theta &=& \tfrac12 \\[4pt]
& \theta &=& \tfrac{\pi}{6},\tfrac{5\pi}{6}
\end{array}
$$

$$
\begin{array}{lrcl}
& \sin\theta &=& 1 \\[4pt]
& \theta &=& \tfrac{\pi}{2}
\end{array}
$$

### Solving Trigonometric Equations Using Fundamental Identities

While algebra can be used to solve a number of trigonometric equations, we can also use the fundamental identities because they make solving equations simpler. Remember that the techniques we use for solving are not the same as those for verifying identities. The basic rules of algebra apply here, as opposed to rewriting one side of the identity to match the other side. In the next example, we use two identities to simplify the equation.

**Example.** Use identities to solve exactly the trigonometric equation over the interval $0\le x<2\pi$.

$$\cos x\cos(2x)+\sin x\sin(2x)=\tfrac{\sqrt3}{2}$$

**Solution.** Notice that the left side of the equation is the difference formula for cosine.

$$
\begin{array}{lrcl}
\text{Difference formula for cosine.} & \cos(x-2x) &=& \tfrac{\sqrt3}{2} \\[4pt]
\text{Use the negative angle identity.} & \cos(-x) &=& \tfrac{\sqrt3}{2} \\[4pt]
& \cos x &=& \tfrac{\sqrt3}{2}
\end{array}
$$

From the unit circle, we see that $\cos x=\tfrac{\sqrt3}{2}$ when $x=\tfrac{\pi}{6},\tfrac{11\pi}{6}$.

**Example.** Solve the equation exactly using a double-angle formula: $\cos(2\theta)=\cos\theta$.

**Solution.** We have three choices of expressions to substitute for the double-angle of cosine. As it is simpler to solve for one trigonometric function at a time, we will choose the double-angle identity involving only cosine:

$$
\begin{array}{lrcl}
& \cos(2\theta) &=& \cos\theta \\[4pt]
& 2\cos^2\theta-1 &=& \cos\theta \\[4pt]
& 2\cos^2\theta-\cos\theta-1 &=& 0 \\[4pt]
& (2\cos\theta+1)(\cos\theta-1) &=& 0
\end{array}
$$

$$
\begin{array}{lrcl}
& 2\cos\theta+1 &=& 0 \\[4pt]
& \cos\theta &=& -\tfrac12
\end{array}
$$

$$
\begin{array}{lrcl}
& \cos\theta-1 &=& 0 \\[4pt]
& \cos\theta &=& 1
\end{array}
$$

So, if $\cos\theta=-\tfrac12$, then $\theta=\tfrac{2\pi}{3}\pm2\pi k$ and $\theta=\tfrac{4\pi}{3}\pm2\pi k$; if $\cos\theta=1$, then $\theta=0\pm2\pi k$.

**Example.** Solve the equation exactly using an identity: $3\cos\theta+3=2\sin^2\theta,\ 0\le\theta<2\pi$.

**Solution.** If we rewrite the right side, we can write the equation in terms of cosine:

$$
\begin{array}{lrcl}
& 3\cos\theta+3 &=& 2\sin^2\theta \\[4pt]
& 3\cos\theta+3 &=& 2(1-\cos^2\theta) \\[4pt]
& 3\cos\theta+3 &=& 2-2\cos^2\theta \\[4pt]
& 2\cos^2\theta+3\cos\theta+1 &=& 0 \\[4pt]
& (2\cos\theta+1)(\cos\theta+1) &=& 0
\end{array}
$$

$$
\begin{array}{lrcl}
& 2\cos\theta+1 &=& 0 \\[4pt]
& \cos\theta &=& -\tfrac12 \\[4pt]
& \theta &=& \tfrac{2\pi}{3},\tfrac{4\pi}{3}
\end{array}
$$

$$
\begin{array}{lrcl}
& \cos\theta+1 &=& 0 \\[4pt]
& \cos\theta &=& -1 \\[4pt]
& \theta &=& \pi
\end{array}
$$

Our solutions are $\tfrac{2\pi}{3},\tfrac{4\pi}{3},\pi$.

### Solving Trigonometric Equations with Multiple Angles

Sometimes it is not possible to solve a trigonometric equation with identities that have a multiple angle, such as $\sin(2x)$ or $\cos(3x)$. When confronted with these equations, recall that $y=\sin(2x)$ is a horizontal compression by a factor of $2$ of the function $y=\sin x$. On an interval of $2\pi$, we can graph two periods of $y=\sin(2x)$, as opposed to one cycle of $y=\sin x$. This compression of the graph leads us to believe there may be twice as many $x$-intercepts or solutions to $\sin(2x)=0$ compared to $\sin x=0$. This information will help us solve the equation.

**Example.** Solve exactly: $\cos(2x)=\tfrac12$ on $[0,2\pi)$.

**Solution.** We can see that this equation is the standard equation with a multiple of an angle. If $\cos(\alpha)=\tfrac12$, we know $\alpha$ is in quadrants I and IV. While $\theta=\cos^{-1}\tfrac12$ will only yield solutions in quadrants I and II, we recognize that the solutions to the equation $\cos\theta=\tfrac12$ will be in quadrants I and IV.

Therefore, the possible angles are $\theta=\tfrac{\pi}{3}$ and $\theta=\tfrac{5\pi}{3}$. So, $2x=\tfrac{\pi}{3}$ or $2x=\tfrac{5\pi}{3}$, which means that $x=\tfrac{\pi}{6}$ or $x=\tfrac{5\pi}{6}$. Does this make sense? Yes, because $\cos\left(2\left(\tfrac{\pi}{6}\right)\right)=\cos\left(\tfrac{\pi}{3}\right)=\tfrac12$.

Are there any other possible answers? Let us return to our first step.

In quadrant I, $2x=\tfrac{\pi}{3}$, so $x=\tfrac{\pi}{6}$ as noted. Let us revolve around the circle again:

$$
\begin{array}{lrcl}
& 2x &=& \tfrac{\pi}{3}+2\pi \\[4pt]
& &=& \tfrac{\pi}{3}+\tfrac{6\pi}{3} \\[4pt]
& &=& \tfrac{7\pi}{3}
\end{array}
$$

so $x=\tfrac{7\pi}{6}$.

One more rotation yields

$$
\begin{array}{lrcl}
& 2x &=& \tfrac{\pi}{3}+4\pi \\[4pt]
& &=& \tfrac{\pi}{3}+\tfrac{12\pi}{3} \\[4pt]
& &=& \tfrac{13\pi}{3}
\end{array}
$$

$x=\tfrac{13\pi}{6}>2\pi$, so this value for $x$ is larger than $2\pi$, so it is not a solution on $[0,2\pi)$.

In quadrant IV, $2x=\tfrac{5\pi}{3}$, so $x=\tfrac{5\pi}{6}$ as noted. Let us revolve around the circle again:

$$
\begin{array}{lrcl}
& 2x &=& \tfrac{5\pi}{3}+2\pi \\[4pt]
& &=& \tfrac{5\pi}{3}+\tfrac{6\pi}{3} \\[4pt]
& &=& \tfrac{11\pi}{3}
\end{array}
$$

so $x=\tfrac{11\pi}{6}$.

One more rotation yields

$$
\begin{array}{lrcl}
& 2x &=& \tfrac{5\pi}{3}+4\pi \\[4pt]
& &=& \tfrac{5\pi}{3}+\tfrac{12\pi}{3} \\[4pt]
& &=& \tfrac{17\pi}{3}
\end{array}
$$

$x=\tfrac{17\pi}{6}>2\pi$, so this value for $x$ is larger than $2\pi$, so it is not a solution on $[0,2\pi)$.

Our solutions are $\tfrac{\pi}{6},\tfrac{5\pi}{6},\tfrac{7\pi}{6},\text{and}\ \tfrac{11\pi}{6}$. Note that whenever we solve a problem in the form of $\sin(nx)=c$, we must go around the unit circle $n$ times.

### Solving Right Triangle Problems

We can now use all of the methods we have learned to solve problems that involve applying the properties of right triangles and the Pythagorean Theorem. We begin with the familiar Pythagorean Theorem, $a^2+b^2=c^2$, and model an equation to fit a situation.

**Example.** Use the Pythagorean Theorem, and the properties of right triangles to model an equation that fits the problem.

One of the cables that anchors the center of the London Eye Ferris wheel to the ground must be replaced. The center of the Ferris wheel is $69.5$ meters above the ground, and the second anchor on the ground is $23$ meters from the base of the Ferris wheel. Approximately how long is the cable, and what is the angle of elevation (from ground up to the center of the Ferris wheel)? See the figure below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle representing the Ferris wheel cable: the second ground anchor is the bottom-left vertex, with angle theta; the base of the wheel's support is the bottom-right vertex, marked with a right angle; the vertical leg from there up to the wheel's center measures 69.5 meters and the horizontal leg measures 23 meters. A circle representing the Ferris wheel is centered at the top vertex.","unit":5,"polygons":[{"points":[[0,0],[23,0],[23,69.5]],"edgeLabels":["23","69.5",null],"vertexLabels":["θ",null,null],"rightAngles":[1]}],"circles":[{"at":[23,69.5],"r":15}]}
{{< /apfigure >}}

**Solution.** Using the information given, we can draw a right triangle. We can find the length of the cable with the Pythagorean Theorem.

$$
\begin{array}{lrcl}
& a^2+b^2 &=& c^2 \\[4pt]
& (23)^2+(69.5)^2 &\approx& 5{,}359 \\[4pt]
& \sqrt{5{,}359} &\approx& 73.2\ \text{m}
\end{array}
$$

The angle of elevation is $\theta$, formed by the second anchor on the ground and the cable reaching to the center of the wheel. We can use the tangent function to find its measure. Round to two decimal places.

$$
\begin{array}{lrcl}
& \tan\theta &=& \tfrac{69.5}{23} \\[4pt]
& \tan^{-1}\left(\tfrac{69.5}{23}\right) &\approx& 1.2522 \\[4pt]
& &\approx& 71.69^\circ
\end{array}
$$

The angle of elevation is approximately $71.7^\circ$, and the length of the cable is $73.2$ meters.

**Example.** Use the Pythagorean Theorem, and the properties of right triangles to model an equation that fits the problem.

OSHA safety regulations require that the base of a ladder be placed $1$ foot from the wall for every $4$ feet of ladder length. Find the angle that a ladder of any length forms with the ground and the height at which the ladder touches the wall.

**Solution.** For any length of ladder, the base needs to be a distance from the wall equal to one fourth of the ladder's length. Equivalently, if the base of the ladder is "$a$" feet from the wall, the length of the ladder will be $4a$ feet. See the figure below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A right triangle representing the ladder problem: angle theta at the bottom-left vertex between the ground and the ladder, a right angle at the bottom-right vertex, the horizontal base labeled a, the vertical wall side labeled b, and the hypotenuse (the ladder) labeled 4a.","unit":70,"polygons":[{"points":[[0,0],[2,0],[2,3]],"edgeLabels":["a","b","4a"],"vertexLabels":["θ",null,null],"rightAngles":[1]}]}
{{< /apfigure >}}

The side adjacent to $\theta$ is $a$ and the hypotenuse is $4a$. Thus,

$$
\begin{array}{lrcl}
& \cos\theta &=& \tfrac{a}{4a}=\tfrac14 \\[4pt]
& \cos^{-1}\left(\tfrac14\right) &\approx& 75.5^\circ
\end{array}
$$

The elevation of the ladder forms an angle of $75.5^\circ$ with the ground. The height at which the ladder touches the wall can be found using the Pythagorean Theorem:

$$
\begin{array}{lrcl}
& a^2+b^2 &=& (4a)^2 \\[4pt]
& b^2 &=& (4a)^2-a^2 \\[4pt]
& b^2 &=& 16a^2-a^2 \\[4pt]
& b^2 &=& 15a^2 \\[4pt]
& b &=& \sqrt{15}\,a
\end{array}
$$

Thus, the ladder touches the wall at $\sqrt{15}\,a$ feet from the ground.

## Key concepts

- When solving linear trigonometric equations, we can use algebraic techniques just as we do solving algebraic equations. Look for patterns, like the difference of squares, quadratic form, or an expression that lends itself well to substitution.
- Equations involving a single trigonometric function can be solved or verified using the unit circle.
- We can also solve trigonometric equations using a graphing calculator.
- Many equations appear quadratic in form. We can use substitution to make the equation appear simpler, and then use the same techniques we use solving an algebraic quadratic: factoring, the quadratic formula, etc.
- We can also use the identities to solve trigonometric equations.
- We can use substitution to solve a multiple-angle trigonometric equation, which is a compression of a standard trigonometric function. We will need to take the compression into account and verify that we have found all solutions on the given interval.
- Real-world scenarios can be modeled and solved using the Pythagorean Theorem and trigonometric functions.

## Practice

### Solve linear trigonometric equations in sine and cosine

{{< fillin
  question="Find all exact solutions on $[0,2\pi)$: $2\sin\theta=\sqrt3$."
  answer="\pi/3,2\pi/3"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$\theta=\tfrac{\pi}{3}$ or $\theta=\tfrac{2\pi}{3}$"
  hint="Isolate $\sin\theta$, then find both angles in $[0,2\pi)$ with that sine value."
>}}

{{< fillin
  question="Solve exactly on $[0,2\pi)$: $2\cos\theta=-\sqrt2$."
  answer="3\pi/4,5\pi/4"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$\theta=\tfrac{3\pi}{4}$ or $\theta=\tfrac{5\pi}{4}$"
  hint="Isolate $\cos\theta$; a negative cosine puts the solutions in quadrants II and III."
>}}

### Solve equations involving a single trigonometric function

{{< fillin
  question="Find all solutions exactly on $[0,2\pi)$: $4\sin^2x-2=0$."
  answer="\pi/4,3\pi/4,5\pi/4,7\pi/4"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$x=\tfrac{\pi}{4},\tfrac{3\pi}{4},\tfrac{5\pi}{4},\tfrac{7\pi}{4}$"
  hint="Solve for $\sin^2x$, then apply the square root property and keep both signs."
>}}

{{< fillin
  question="Solve exactly on $[0,2\pi)$: $\sec^2x=1$."
  answer="0,\pi"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$x=0$ or $x=\pi$"
  hint="Rewrite in terms of cosine: $\sec^2x=1$ means $\cos^2x=1$, so $\cos x=\pm1$."
>}}

### Solve trigonometric equations using a calculator

{{< fillin
  question="Use a calculator to find all solutions to $\sin x=0.27$, to four decimal places, using $k$ for any integer and representative angles in $[0,2\pi)$."
  answer="2k\pi+0.2734,2k\pi+2.8682"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$x=2k\pi+0.2734$ or $x=2k\pi+2.8682$"
  hint="Use the inverse sine for one representative angle, use $\pi$ minus that angle for the other family, then add $2k\pi$ to each."
>}}

{{< fillin
  question="Use a calculator to find all solutions to $\tan x=-0.34$, to four decimal places, using $k$ for any integer and the representative angle in $\left(-\tfrac{\pi}{2},\tfrac{\pi}{2}\right)$."
  answer="k\pi-0.3277"
  answerForm="radians"
  answerDisplay="$x=k\pi-0.3277$"
  hint="Use the inverse tangent for one representative angle, then add $k\pi$, since tangent repeats every $\pi$."
>}}

### Solve trigonometric equations that are quadratic in form

{{< fillin
  question="Find all exact solutions on $[0,2\pi)$: $\tan^2x-\sqrt3\tan x=0$."
  answer="0,\pi/3,\pi,4\pi/3"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$x=0,\tfrac{\pi}{3},\pi,\tfrac{4\pi}{3}$"
  hint="Factor out $\tan x$, then set each factor equal to zero and solve separately."
>}}

{{< multiplechoice
  question="Solve $\sin^2x-2\sin x-4=0$ on $[0,2\pi)$."
  answer="No real solution"
  hint="Solve the quadratic for $\sin x$ with the quadratic formula, then check whether either root lies in $[-1,1]$."
>}}
No real solution
$x=\tfrac{\pi}{2}$
$x=0,\pi$
$x=\tfrac{\pi}{2},\tfrac{3\pi}{2}$
{{< /multiplechoice >}}

### Solve trigonometric equations using fundamental identities

{{< fillin
  question="Find all exact solutions on $[0,2\pi)$: $\cos^3t=\cos t$."
  answer="0,\pi/2,\pi,3\pi/2"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$t=0,\tfrac{\pi}{2},\pi,\tfrac{3\pi}{2}$"
  hint="Move every term to one side and factor out $\cos t$; the remaining factor is a Pythagorean identity in disguise."
>}}

{{< fillin
  question="Find all exact solutions on $[0,2\pi)$: $12\sin^2t+\cos t-6=0$."
  answer="\cos^{-1}(3/4),\cos^{-1}(-2/3),2\pi-\cos^{-1}(-2/3),2\pi-\cos^{-1}(3/4)"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$t=\cos^{-1}\left(\tfrac34\right),\cos^{-1}\left(-\tfrac23\right),2\pi-\cos^{-1}\left(-\tfrac23\right),2\pi-\cos^{-1}\left(\tfrac34\right)$"
  hint="Replace $\sin^2t$ with $1-\cos^2t$ to get a quadratic in $\cos t$, then solve with the quadratic formula."
>}}

### Solve trigonometric equations with multiple angles

{{< fillin
  question="Find all exact solutions on $[0,2\pi)$: $2\sin(3\theta)=1$."
  answer="\pi/18,5\pi/18,13\pi/18,17\pi/18,25\pi/18,29\pi/18"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$\theta=\tfrac{\pi}{18},\tfrac{5\pi}{18},\tfrac{13\pi}{18},\tfrac{17\pi}{18},\tfrac{25\pi}{18},\tfrac{29\pi}{18}$"
  hint="Solve for $\sin(3\theta)$ first, list every angle for $3\theta$ across three full revolutions, then divide each by $3$."
>}}

{{< fillin
  question="Find all exact solutions on $[0,2\pi)$: $2\cos(3\theta)=-\sqrt2$."
  answer="3\pi/12,5\pi/12,11\pi/12,13\pi/12,19\pi/12,21\pi/12"
  answerMode="unordered"
  answerForm="radians"
  answerDisplay="$\theta=\tfrac{3\pi}{12},\tfrac{5\pi}{12},\tfrac{11\pi}{12},\tfrac{13\pi}{12},\tfrac{19\pi}{12},\tfrac{21\pi}{12}$"
  hint="Solve for $\cos(3\theta)$ first, list every angle for $3\theta$ across three full revolutions, then divide each by $3$."
>}}

### Solve right triangle problems

{{< fillin
  question="An airplane has only enough gas to fly to a city $200$ miles northeast of its current location. If the pilot knows that the city is $25$ miles north, how many degrees north of east should the airplane fly? Round to the nearest tenth of a degree."
  answer="7.2^\circ"
  answerForm="degrees"
  answerDisplay="$7.2^\circ$"
  hint="Sketch a right triangle: the $200$-mile flight is the hypotenuse and the $25$-mile northward distance is the leg opposite the desired angle from east."
>}}

{{< fillin
  question="If a loading ramp is placed next to a truck, at a height of $2$ feet, and the ramp is $20$ feet long, what angle does the ramp make with the ground? Round to the nearest tenth of a degree."
  answer="5.7^\circ"
  answerForm="degrees"
  answerDisplay="$5.7^\circ$"
  hint="The ramp is the hypotenuse and the height is the leg opposite the angle; use the inverse sine."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 7.5: Solving Trigonometric Equations](https://openstax.org/books/precalculus-2e/pages/7-5-solving-trigonometric-equations) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative photo of the Egyptian pyramids (Figure 1), which carries no mathematics beyond the credit line; recreated the four instructional figures as accessible spec-first SVGs — the reference-angle diagram accompanying the calculator secant example (two terminal rays in standard position with their arcs, sampled from the exact solved angles); the graph of $y=2\sin^2\theta+\sin\theta$ accompanying its Analysis, sampled as a dense polyline from the exact formula over $\left[-\tfrac{\pi}{6},\tfrac{13\pi}{6}\right]$ (never a freehand curve) with the source's own $\tfrac{\pi}{6}$-multiple tick labels; the Ferris wheel right triangle with the wheel drawn as a circle centered at the cable's top vertex; and the generic ladder right triangle. Three sentences that cited a "unit circle" figure appearing elsewhere in the chapter (a different module's figure, not this section's own) are reworded to refer to the unit circle generically rather than point at a specific figure number, since that figure is outside this page's scope. Every retained Try It became a real `fillin` component, each carrying the `answerForm` the printed subject demands to block a retype of the equation itself: `radians` on every interval-restricted list and general solution, with `answerMode="unordered"` on every list of two or more members (member order carries no meaning, and the engine grades a swapped order and an equation-wrapped restatement the same). Every general-solution question additionally names $k$ as the integer parameter, states the rounding its own printed key uses, and pins the representative angle's range, since the grader compares one keyed representative strictly — instructions the source's bare "find all solutions" wording leaves implicit. The Try It following Example 12 (a quadratic-in-form equation with no interval stated in the source, unlike every other equation in its subsection) is stated on $[0,2\pi)$ to match the domain its own printed answer key assumes and the domain used by the surrounding worked examples. Adapted fourteen selected end-of-section exercises — two linear, two single-function, two calculator/general-solution, two quadratic-form (one the "no real solution" case recast as a `multiplechoice`, since a categorical non-existence claim has no free-response answer), one identity-based quadratic-form, one pure-identity, two multiple-angle, and two right-triangle word problems — into a closing Practice block, one group per objective, every item independently re-derived (including by running the arithmetic in Node) rather than read off the source key.</small>
