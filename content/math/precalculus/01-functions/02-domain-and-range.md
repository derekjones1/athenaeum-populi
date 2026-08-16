---
title: Domain and Range
description: >-
  Finding the domain of a function from its equation, describing sets with
  inequality, set-builder, and interval notation, reading domain and range
  from a graph, the domains and ranges of the toolkit functions, and graphing
  piecewise-defined functions — adapted from OpenStax Precalculus 2e,
  Section 1.2.
source_section: "1.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Find the domain of a function defined by an equation
- Graph piecewise-defined functions
{{< /callout >}}

Horror and thriller movies are both popular and, very often, extremely
profitable. When big-budget actors, shooting locations, and special effects
are included, however, studios count on even more viewership to be
successful. Consider five major thriller/horror entries from the early
2000s—*I am Legend*, *Hannibal*, *The Ring*, *The Grudge*, and *The
Conjuring*. The two graphs below show the amount, in dollars, each of those
movies grossed when they were released as well as the ticket sales for horror
movies in general by year. Notice that we can use the data to create a
function of the amount each movie earned or the total ticket sales for all
horror movies by year. In creating various functions using the data, we can
identify different independent and dependent variables, and we can analyze
the data and the functions to determine the **domain** and range. In this
section, we will investigate methods for determining the domain and range of
functions such as these.

<div class="ap-figure">
<svg role="img" aria-label="A bar graph titled “Top-Five Grossing Horror Movies for years 2000 to 2013.” The vertical axis is inflation-adjusted gross in millions of dollars, from 0 to 350. I am Legend (2007) grossed about 291, Hannibal (2001) about 228, The Ring (2002) about 176, The Grudge (2004) about 141, and The Conjuring (2013) about 139." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 369" width="394" height="369" font-family="Helvetica, Arial, sans-serif">
  <text x="227" y="18" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">Top-Five Grossing Horror Movies</text>
  <text x="227" y="36" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">for years 2000–2013</text>
  <line x1="74" y1="310.0" x2="380" y2="310.0" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="69" y1="310.0" x2="74" y2="310.0" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="314.0" font-size="11" fill="currentColor" text-anchor="end">0</text>
  <line x1="74" y1="272.9" x2="380" y2="272.9" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="69" y1="272.9" x2="74" y2="272.9" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="276.9" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="74" y1="235.7" x2="380" y2="235.7" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="69" y1="235.7" x2="74" y2="235.7" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="239.7" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <line x1="74" y1="198.6" x2="380" y2="198.6" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="69" y1="198.6" x2="74" y2="198.6" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="202.6" font-size="11" fill="currentColor" text-anchor="end">150</text>
  <line x1="74" y1="161.4" x2="380" y2="161.4" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="69" y1="161.4" x2="74" y2="161.4" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="165.4" font-size="11" fill="currentColor" text-anchor="end">200</text>
  <line x1="74" y1="124.3" x2="380" y2="124.3" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="69" y1="124.3" x2="74" y2="124.3" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="128.3" font-size="11" fill="currentColor" text-anchor="end">250</text>
  <line x1="74" y1="87.1" x2="380" y2="87.1" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="69" y1="87.1" x2="74" y2="87.1" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="91.1" font-size="11" fill="currentColor" text-anchor="end">300</text>
  <line x1="74" y1="50.0" x2="380" y2="50.0" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="69" y1="50.0" x2="74" y2="50.0" stroke="currentColor" stroke-width="1"/>
  <text x="65" y="54.0" font-size="11" fill="currentColor" text-anchor="end">350</text>
  <line x1="74" y1="50" x2="74" y2="310" stroke="currentColor" stroke-width="1"/>
  <line x1="74" y1="310" x2="380" y2="310" stroke="currentColor" stroke-width="1"/>
  <rect x="100" y="93.8" width="30" height="216.2" fill="currentColor" opacity="0.75"/>
  <text x="115" y="325" font-size="11" fill="currentColor" text-anchor="middle">I am</text>
  <text x="115" y="339" font-size="11" fill="currentColor" text-anchor="middle">Legend</text>
  <text x="115" y="353" font-size="11" fill="currentColor" text-anchor="middle">(2007)</text>
  <rect x="156" y="140.6" width="30" height="169.4" fill="currentColor" opacity="0.75"/>
  <text x="171" y="325" font-size="11" fill="currentColor" text-anchor="middle">Hannibal</text>
  <text x="171" y="339" font-size="11" fill="currentColor" text-anchor="middle">(2001)</text>
  <rect x="212" y="179.3" width="30" height="130.7" fill="currentColor" opacity="0.75"/>
  <text x="227" y="325" font-size="11" fill="currentColor" text-anchor="middle">The</text>
  <text x="227" y="339" font-size="11" fill="currentColor" text-anchor="middle">Ring</text>
  <text x="227" y="353" font-size="11" fill="currentColor" text-anchor="middle">(2002)</text>
  <rect x="268" y="205.3" width="30" height="104.7" fill="currentColor" opacity="0.75"/>
  <text x="283" y="325" font-size="11" fill="currentColor" text-anchor="middle">The</text>
  <text x="283" y="339" font-size="11" fill="currentColor" text-anchor="middle">Grudge</text>
  <text x="283" y="353" font-size="11" fill="currentColor" text-anchor="middle">(2004)</text>
  <rect x="324" y="206.7" width="30" height="103.3" fill="currentColor" opacity="0.75"/>
  <text x="339" y="325" font-size="11" fill="currentColor" text-anchor="middle">The</text>
  <text x="339" y="339" font-size="11" fill="currentColor" text-anchor="middle">Conjuring</text>
  <text x="339" y="353" font-size="11" fill="currentColor" text-anchor="middle">(2013)</text>
  <text x="18" y="180" font-size="12" font-weight="600" fill="currentColor" text-anchor="middle" transform="rotate(-90 18 180)">Inflation-adjusted Gross,</text>
  <text x="33" y="180" font-size="12" font-weight="600" fill="currentColor" text-anchor="middle" transform="rotate(-90 33 180)">in Millions of Dollars</text>
</svg>
</div>

<div class="ap-figure">
<svg role="img" aria-label="A bar graph titled “Market Share of Horror Movies, by Year.” The vertical axis runs from 0% to 8%. Market share is about 4.3% in 2000, 4.6% in 2001, 3.2% in 2002, 4.7% in 2003, 5.0% in 2004, 5.6% in 2005, 5.9% in 2006, 7.0% in 2007, 2.8% in 2008, 5.4% in 2009, 4.6% in 2010, 3.9% in 2011, 2.6% in 2012, and 4.1% in 2013." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 372" width="430" height="372" font-family="Helvetica, Arial, sans-serif">
  <text x="229" y="18" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">Market Share of Horror Movies,</text>
  <text x="229" y="36" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">by Year</text>
  <line x1="42" y1="310.0" x2="416" y2="310.0" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="310.0" x2="42" y2="310.0" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="314.0" font-size="11" fill="currentColor" text-anchor="end">0%</text>
  <line x1="42" y1="277.5" x2="416" y2="277.5" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="277.5" x2="42" y2="277.5" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="281.5" font-size="11" fill="currentColor" text-anchor="end">1%</text>
  <line x1="42" y1="245.0" x2="416" y2="245.0" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="245.0" x2="42" y2="245.0" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="249.0" font-size="11" fill="currentColor" text-anchor="end">2%</text>
  <line x1="42" y1="212.5" x2="416" y2="212.5" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="212.5" x2="42" y2="212.5" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="216.5" font-size="11" fill="currentColor" text-anchor="end">3%</text>
  <line x1="42" y1="180.0" x2="416" y2="180.0" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="180.0" x2="42" y2="180.0" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="184.0" font-size="11" fill="currentColor" text-anchor="end">4%</text>
  <line x1="42" y1="147.5" x2="416" y2="147.5" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="147.5" x2="42" y2="147.5" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="151.5" font-size="11" fill="currentColor" text-anchor="end">5%</text>
  <line x1="42" y1="115.0" x2="416" y2="115.0" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="115.0" x2="42" y2="115.0" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="119.0" font-size="11" fill="currentColor" text-anchor="end">6%</text>
  <line x1="42" y1="82.5" x2="416" y2="82.5" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="82.5" x2="42" y2="82.5" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="86.5" font-size="11" fill="currentColor" text-anchor="end">7%</text>
  <line x1="42" y1="50.0" x2="416" y2="50.0" stroke="currentColor" stroke-width="0.4" opacity="0.25"/>
  <line x1="37" y1="50.0" x2="42" y2="50.0" stroke="currentColor" stroke-width="1"/>
  <text x="33" y="54.0" font-size="11" fill="currentColor" text-anchor="end">8%</text>
  <line x1="42" y1="50" x2="42" y2="310" stroke="currentColor" stroke-width="1"/>
  <line x1="42" y1="310" x2="416" y2="310" stroke="currentColor" stroke-width="1"/>
  <rect x="52" y="170.3" width="16" height="139.8" fill="currentColor" opacity="0.75"/>
  <text x="60" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 60 322)">2000</text>
  <rect x="78" y="160.5" width="16" height="149.5" fill="currentColor" opacity="0.75"/>
  <text x="86" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 86 322)">2001</text>
  <rect x="104" y="206.0" width="16" height="104.0" fill="currentColor" opacity="0.75"/>
  <text x="112" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 112 322)">2002</text>
  <rect x="130" y="157.3" width="16" height="152.8" fill="currentColor" opacity="0.75"/>
  <text x="138" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 138 322)">2003</text>
  <rect x="156" y="147.5" width="16" height="162.5" fill="currentColor" opacity="0.75"/>
  <text x="164" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 164 322)">2004</text>
  <rect x="182" y="128.0" width="16" height="182.0" fill="currentColor" opacity="0.75"/>
  <text x="190" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 190 322)">2005</text>
  <rect x="208" y="118.3" width="16" height="191.8" fill="currentColor" opacity="0.75"/>
  <text x="216" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 216 322)">2006</text>
  <rect x="234" y="82.5" width="16" height="227.5" fill="currentColor" opacity="0.75"/>
  <text x="242" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 242 322)">2007</text>
  <rect x="260" y="219.0" width="16" height="91.0" fill="currentColor" opacity="0.75"/>
  <text x="268" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 268 322)">2008</text>
  <rect x="286" y="134.5" width="16" height="175.5" fill="currentColor" opacity="0.75"/>
  <text x="294" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 294 322)">2009</text>
  <rect x="312" y="160.5" width="16" height="149.5" fill="currentColor" opacity="0.75"/>
  <text x="320" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 320 322)">2010</text>
  <rect x="338" y="183.3" width="16" height="126.8" fill="currentColor" opacity="0.75"/>
  <text x="346" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 346 322)">2011</text>
  <rect x="364" y="225.5" width="16" height="84.5" fill="currentColor" opacity="0.75"/>
  <text x="372" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 372 322)">2012</text>
  <rect x="390" y="176.8" width="16" height="133.3" fill="currentColor" opacity="0.75"/>
  <text x="398" y="322" font-size="11" fill="currentColor" text-anchor="end" transform="rotate(-45 398 322)">2013</text>
</svg>
</div>

<small>Based on data compiled by www.the-numbers.com.</small>

## Finding the domain of a function defined by an equation

In *Functions and Function Notation*, we were introduced to the concepts of
**domain and range**. In this section, we will practice determining domains
and ranges for specific functions. Keep in mind that, in determining domains
and ranges, we need to consider what is physically possible or meaningful in
real-world examples, such as tickets sales and year in the horror movie
example above. We also need to consider what is mathematically permitted. For
example, we cannot include any input value that leads us to take an even root
of a negative number if the domain and range consist of real numbers. Or in a
function expressed as a formula, we cannot include any input value in the
domain that would lead us to divide by 0.

We can visualize the domain as a "holding area" that contains "raw materials"
for a "function machine" and the range as another "holding area" for the
machine's products.

<div class="ap-figure">
<svg role="img" aria-label="A diagram of how a function relates two sets. A left oval labelled Domain holds a, b, and c; a right oval labelled Range holds x, y, and z. An arrow runs from the left oval into a funnel labelled Function machine, and a second arrow runs from the funnel to the right oval." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 208" width="360" height="208" font-family="Helvetica, Arial, sans-serif">
  <text x="70" y="34" font-size="13" fill="currentColor" text-anchor="middle">Domain</text>
  <text x="290" y="34" font-size="13" fill="currentColor" text-anchor="middle">Range</text>
  <text x="180" y="60" font-size="13" fill="currentColor" text-anchor="middle">Function</text>
  <text x="180" y="76" font-size="13" fill="currentColor" text-anchor="middle">machine</text>
  <ellipse cx="70" cy="126" rx="48" ry="58" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="290" cy="126" rx="48" ry="58" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="103" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">a</text>
  <text x="70" y="131" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">b</text>
  <text x="70" y="159" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">c</text>
  <text x="290" y="103" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">x</text>
  <text x="290" y="131" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">y</text>
  <text x="290" y="159" font-size="13" fill="currentColor" text-anchor="middle" font-style="italic">z</text>
  <polygon points="158,100 202,100 187,124 187,146 173,146 173,124" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="82" y1="126" x2="141" y2="122" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="147,122 138.8,125.5 139.4,117.5" fill="currentColor"/>
  <line x1="199" y1="132" x2="256" y2="128" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="262,128 253.8,131.5 254.4,123.5" fill="currentColor"/>
</svg>
</div>

We can write the **domain and range** in **interval notation**, which uses
values within brackets to describe a set of numbers. In interval notation, we
use a square bracket [ when the set includes the endpoint and a parenthesis (
to indicate that the endpoint is either not included or the interval is
unbounded. For example, if a person has \$100 to spend, they would need to
express the interval that is more than 0 and less than or equal to 100 and
write $(0,100]$. We will discuss interval notation in greater detail later.

Let's turn our attention to finding the domain of a function whose equation
is provided. Oftentimes, finding the domain of such functions involves
remembering three different forms. First, if the function has no denominator
or an odd root, consider whether the domain could be all real numbers.
Second, if there is a denominator in the function's equation, exclude values
in the domain that force the denominator to be zero. Third, if there is an
even root, consider excluding values that would make the radicand negative.

Before we begin, let us review the conventions of interval notation:

- The smallest term from the interval is written first.
- The largest term in the interval is written second, following a comma.
- Parentheses, ( or ), are used to signify that an endpoint is not included,
  called exclusive.
- Brackets, [ or ], are used to indicate that an endpoint is included, called
  inclusive.

The table below summarizes interval notation.

| Inequality | Interval notation | Description |
| :--- | :--- | :--- |
| $x>a$ | $(a,\infty)$ | $x$ is greater than $a$ |
| $x<a$ | $(-\infty,a)$ | $x$ is less than $a$ |
| $x\ge a$ | $[a,\infty)$ | $x$ is greater than or equal to $a$ |
| $x\le a$ | $(-\infty,a]$ | $x$ is less than or equal to $a$ |
| $a<x<b$ | $(a,b)$ | $x$ is strictly between $a$ and $b$ |
| $a\le x<b$ | $[a,b)$ | $x$ is between $a$ and $b$, to include $a$ |
| $a<x\le b$ | $(a,b]$ | $x$ is between $a$ and $b$, to include $b$ |
| $a\le x\le b$ | $[a,b]$ | $x$ is between $a$ and $b$, to include $a$ and $b$ |

**Example.** Find the **domain** of the following function:
$\{(2,10),(3,10),(4,20),(5,30),(6,40)\}$.

**Solution.** First identify the input values. The input value is the first
coordinate in an **ordered pair**. There are no restrictions, as the ordered
pairs are simply listed. The domain is the set of the first coordinates of
the ordered pairs.

$$\{2,3,4,5,6\}$$

{{< multiplechoice
  question="Find the domain of the function $\{(-5,4),(0,0),(5,-4),(10,-8),(15,-12)\}$."
  answer="$\{-5,0,5,10,15\}$"
  hint="The domain collects the first coordinate of every ordered pair."
>}}
$\{-5,0,5,10,15\}$
$\{-12,-8,-4,0,4\}$
$\{4,0,-4,-8,-12\}$
$\{-5,-12\}$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **How to:** given a function written in equation form, find the domain.

  1. Identify the input values.
  2. Identify any restrictions on the input and exclude those values from the
     domain.
  3. Write the domain in interval form, if possible.
{{< /callout >}}

**Example.** Find the domain of the function $f(x)=x^2-1$.

**Solution.** The input value, shown by the variable $x$ in the equation, is
squared and then the result is lowered by one. Any real number may be squared
and then be lowered by one, so there are no restrictions on the domain of
this function. The domain is the set of real numbers.

In interval form, the domain of $f$ is $(-\infty,\infty)$.

{{< multiplechoice
  question="Find the domain of the function $f(x)=5-x+x^3$."
  answer="$(-\infty,\infty)$"
  hint="Nothing here is a denominator or an even root, so ask whether any real number could fail."
>}}
$(-\infty,5]$
$(-\infty,0)\cup(0,\infty)$
$[0,\infty)$
$(-\infty,\infty)$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **How to:** given a function written in an equation form that includes a
  fraction, find the domain.

  1. Identify the input values.
  2. Identify any restrictions on the input. If there is a denominator in the
     function's formula, set the denominator equal to zero and solve for $x$.
     If the function's formula contains an even root, set the radicand greater
     than or equal to 0, and then solve.
  3. Write the domain in interval form, making sure to exclude any restricted
     values from the domain.
{{< /callout >}}

**Example.** Find the **domain** of the function $f(x)=\tfrac{x+1}{2-x}$.

**Solution.** When there is a denominator, we want to include only values of
the input that do not force the denominator to be zero. So, we will set the
denominator equal to 0 and solve for $x$.

$$
\begin{array}{lrcl}
& 2-x &=& 0 \\[4pt]
& -x &=& -2 \\[4pt]
& x &=& 2
\end{array}
$$

Now, we will exclude 2 from the domain. The answers are all real numbers
where $x<2$ or $x>2$. We can use a symbol known as the union, $\cup$, to
combine the two sets. In interval notation, we write the solution:
$(-\infty,2)\cup(2,\infty)$.

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from −3 to 3 with an open circle at 2. A heavy line runs left from 2 to the arrow and right from 2 to the arrow, showing every real number except 2.","min":-3,"max":3,"intervals":[{"to":2,"toType":"open"},{"from":2,"fromType":"open"}]}
{{< /apfigure >}}

In interval form, the domain of $f$ is $(-\infty,2)\cup(2,\infty)$.

{{< multiplechoice
  question="Find the domain of the function $f(x)=\tfrac{1+4x}{2x-1}$."
  answer="$(-\infty,\tfrac{1}{2})\cup(\tfrac{1}{2},\infty)$"
  hint="Set the denominator equal to zero; that input is the one value to exclude."
>}}
$(-\infty,-\tfrac{1}{2})\cup(-\tfrac{1}{2},\infty)$
$[\tfrac{1}{2},\infty)$
$(-\infty,\tfrac{1}{2})\cup(\tfrac{1}{2},\infty)$
$(-\infty,2)\cup(2,\infty)$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **How to:** given a function written in equation form including an even
  root, find the domain.

  1. Identify the input values.
  2. Since there is an even root, exclude any real numbers that result in a
     negative number in the radicand. Set the radicand greater than or equal
     to zero and solve for $x$.
  3. The solution(s) are the domain of the function. If possible, write the
     answer in interval form.
{{< /callout >}}

**Example.** Find the **domain** of the function $f(x)=\sqrt{7-x}$.

**Solution.** When there is an even root in the formula, we exclude any real
numbers that result in a negative number in the radicand.

Set the radicand greater than or equal to zero and solve for $x$.

$$
\begin{array}{lrcl}
& 7-x &\ge& 0 \\[4pt]
& -x &\ge& -7 \\[4pt]
& x &\le& 7
\end{array}
$$

Now, we will exclude any number greater than 7 from the domain. The answers
are all real numbers less than or equal to $7$, or $(-\infty,7]$.

{{< multiplechoice
  question="Find the domain of the function $f(x)=\sqrt{5+2x}$."
  answer="$[-\tfrac{5}{2},\infty)$"
  hint="Set the radicand greater than or equal to zero and solve the inequality."
>}}
$(-\infty,\infty)$
$[-\tfrac{5}{2},\infty)$
$(-\infty,-\tfrac{5}{2}]$
$[\tfrac{5}{2},\infty)$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **Q&A.** *Can there be functions in which the domain and range do not
  intersect at all?*

  Yes. For example, the function $f(x)=-\tfrac{1}{\sqrt{x}}$ has the set of
  all positive real numbers as its domain but the set of all negative real
  numbers as its range. As a more extreme example, a function's inputs and
  outputs can be completely different categories (for example, names of
  weekdays as inputs and numbers as outputs, as on an attendance chart); in
  such cases the domain and range have no elements in common.
{{< /callout >}}

## Using notations to specify domain and range

In the previous examples, we used inequalities and lists to describe the
domain of functions. We can also use inequalities, or other statements that
might define sets of values or data, to describe the behavior of the variable
in **set-builder notation**. For example, $\{x\mid 10\le x<30\}$ describes
the behavior of $x$ in set-builder notation. The braces $\{\}$ are read as
"the set of," and the vertical bar $\mid$ is read as "such that," so we would
read $\{x\mid 10\le x<30\}$ as "the set of $x$-values such that 10 is less
than or equal to $x$, and $x$ is less than 30."

The table below compares inequality notation, set-builder notation, and
interval notation for one family of sets, and the number lines that follow
graph the same six sets.

| Inequality notation | Set-builder notation | Interval notation |
| :--- | :--- | :--- |
| $5<h\le 10$ | $\{h\mid 5<h\le 10\}$ | $(5,10]$ |
| $5\le h<10$ | $\{h\mid 5\le h<10\}$ | $[5,10)$ |
| $5<h<10$ | $\{h\mid 5<h<10\}$ | $(5,10)$ |
| $h<10$ | $\{h\mid h<10\}$ | $(-\infty,10)$ |
| $h\ge 10$ | $\{h\mid h\ge 10\}$ | $[10,\infty)$ |
| All real numbers | $\mathbb{R}$ | $(-\infty,\infty)$ |

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from 4 to 11 with an open circle at 5 and a solid dot at 10, and a heavy line between them.","min":4,"max":11,"title":"5 < h ≤ 10","intervals":[{"from":5,"fromType":"open","to":10,"toType":"closed"}]}
{{< /apfigure >}}

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from 4 to 11 with a solid dot at 5 and an open circle at 10, and a heavy line between them.","min":4,"max":11,"title":"5 ≤ h < 10","intervals":[{"from":5,"fromType":"closed","to":10,"toType":"open"}]}
{{< /apfigure >}}

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from 4 to 11 with open circles at 5 and at 10 and a heavy line between them.","min":4,"max":11,"title":"5 < h < 10","intervals":[{"from":5,"fromType":"open","to":10,"toType":"open"}]}
{{< /apfigure >}}

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from 4 to 11 with an open circle at 10 and a heavy line running left from 10 to the arrow.","min":4,"max":11,"title":"h < 10","intervals":[{"to":10,"toType":"open"}]}
{{< /apfigure >}}

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from 4 to 11 with a solid dot at 10 and a heavy line running right from 10 to the arrow.","min":4,"max":11,"title":"h ≥ 10","intervals":[{"from":10,"fromType":"closed"}]}
{{< /apfigure >}}

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from 4 to 11 covered by a heavy line from arrow to arrow, showing all real numbers.","min":4,"max":11,"title":"All real numbers","intervals":[{}]}
{{< /apfigure >}}

To combine two intervals using inequality notation or set-builder notation,
we use the word "or." As we saw in earlier examples, we use the union symbol,
$\cup$, to combine two unconnected intervals. For example, the union of the
sets $\{2,3,5\}$ and $\{4,6\}$ is the set $\{2,3,4,5,6\}$. It is the set of
all elements that belong to one *or* the other (or both) of the original two
sets. For sets with a finite number of elements like these, the elements do
not have to be listed in ascending order of numerical value. If the original
two sets have some elements in common, those elements should be listed only
once in the union set. For sets of real numbers on intervals, another example
of a union is

$$\{x\mid \lvert x\rvert\ge 3\}=(-\infty,-3]\cup[3,\infty)$$

{{< callout type="info" >}}
  **Set-builder notation and interval notation.**

  **Set-builder notation** is a method of specifying a set of elements that
  satisfy a certain condition. It takes the form
  $\{x\mid \text{statement about }x\}$ which is read as, "the set of all $x$
  such that the statement about $x$ is true." For example,

  $$\{x\mid 4<x\le 12\}$$

  **Interval notation** is a way of describing sets that include all real
  numbers between a lower limit that may or may not be included and an upper
  limit that may or may not be included. The endpoint values are listed
  between brackets or parentheses. A square bracket indicates inclusion in
  the set, and a parenthesis indicates exclusion from the set. For example,

  $$(4,12]$$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a line graph, describe the set of values using interval
  notation.

  1. Identify the intervals to be included in the set by determining where
     the heavy line overlays the real line.
  2. At the left end of each interval, use [ with each end value to be
     included in the set (solid dot) or ( for each excluded end value (open
     dot).
  3. At the right end of each interval, use ] with each end value to be
     included in the set (filled dot) or ) for each excluded end value (open
     dot).
  4. Use the union symbol $\cup$ to combine all intervals into one set.
{{< /callout >}}

**Example.** Describe the intervals of values shown in the number line below
using inequality notation, set-builder notation, and interval notation.

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from −2 to 7. A heavy line joins solid dots at 1 and 3, and a second heavy line runs from an open circle at 5 to the right arrow.","min":-2,"max":7,"intervals":[{"from":1,"to":3},{"from":5,"fromType":"open"}]}
{{< /apfigure >}}

**Solution.** To describe the values, $x$, included in the intervals shown,
we would say, "$x$ is a real number greater than or equal to 1 and less than
or equal to 3, or a real number greater than 5."

| Inequality | $1\le x\le 3\ \text{ or }\ x>5$ |
| :--- | :--- |
| Set-builder notation | $\{x\mid 1\le x\le 3\ \text{ or }\ x>5\}$ |
| Interval notation | $[1,3]\cup(5,\infty)$ |

Remember that, when writing or reading interval notation, using a square
bracket means the boundary is included in the set. Using a parenthesis means
the boundary is not included in the set.

{{< apfigure kind="numberline" >}}
{"ariaLabel":"A number line from −5 to 5. A heavy line runs from the left arrow to a solid dot at −2, and a second heavy line runs from a solid dot at −1 to an open circle at 3.","min":-5,"max":5,"intervals":[{"to":-2,"toType":"closed"},{"from":-1,"fromType":"closed","to":3,"toType":"open"}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Which words describe the set graphed on the number line above?"
  answer="values that are less than or equal to $-2$, or values that are greater than or equal to $-1$ and less than 3"
  hint="Read each heavy stretch separately, then check whether each endpoint dot is solid or hollow."
>}}
values that are greater than or equal to $-2$ and less than 3
values that are less than $-2$, or values that are greater than $-1$ and less than or equal to 3
values that are between $-2$ and $-1$, or values that are greater than 3
values that are less than or equal to $-2$, or values that are greater than or equal to $-1$ and less than 3
{{< /multiplechoice >}}

{{< multiplechoice
  question="Write the same set in interval notation."
  answer="$(-\infty,-2]\cup[-1,3)$"
  hint="A solid dot takes a bracket and a hollow dot takes a parenthesis; join the two pieces with $\cup$."
>}}
$[-2,-1]\cup(3,\infty)$
$(-\infty,-2]\cup[-1,3)$
$(-\infty,-2]\cup[-1,3]$
$(-\infty,-2)\cup(-1,3]$
{{< /multiplechoice >}}

## Finding domain and range from graphs

Another way to identify the domain and range of functions is by using graphs.
Because the domain refers to the set of possible input values, the domain of
a graph consists of all the input values shown on the $x$-axis. The range is
the set of possible output values, which are shown on the $y$-axis. Keep in
mind that if the graph continues beyond the portion of the graph we can see,
the domain and range may be greater than the visible values.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A curve beginning at a solid point at (−5, 5), falling to a low point near (−0.7, −2), rising to a high point near (2.2, −0.8), then falling steeply off the bottom of the grid near x = 4.9. A horizontal arrow labelled Domain runs right from x = −5, and a vertical arrow labelled Range runs down from y = 5.","xMin":-6,"xMax":6,"yMin":-9,"yMax":7,"unit":20,"tickLabels":true,"polynomials":[{"coeffs":[-1.9302,0.438,0.2517,-0.0762,-0.0107],"from":-5,"arrows":"end"}],"points":[{"at":[-5,5]},{"at":[-5,6]},{"at":[5,5]}],"segments":[{"from":[-5,6],"to":[5.7,6],"arrows":"end"},{"from":[5,5],"to":[5,-8.7],"arrows":"end"}],"texts":[{"at":[2,6],"text":"Domain","dy":-9,"anchor":"middle"},{"at":[5,2],"text":"Range","dx":-9,"anchor":"end"}]}
{{< /apfigure >}}

We can observe that the graph extends horizontally from $-5$ to the right
without bound, so the domain is $[-5,\infty)$. The vertical extent of the
graph is all range values $5$ and below, so the range is $(-\infty,5]$. Note
that the domain and range are always written from smaller to larger values,
or from left to right for domain, and from the bottom of the graph to the top
of the graph for range.

**Example.** Find the domain and range of the function $f$ whose graph is
shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f from an open circle at (−3, 0), falling to a low point at (−2, −4), rising to a high point at (0, 0), then falling to a solid point at (1, −4).","xMin":-4,"xMax":2,"yMin":-6,"yMax":2,"unit":24,"tickLabels":true,"cubics":[{"a":-1,"b":-3,"c":0,"d":0,"from":-3,"to":1,"arrows":false}],"points":[{"at":[-3,0],"open":true},{"at":[1,-4]}],"texts":[{"at":[0.4,-2.4],"text":"f","italic":true}]}
{{< /apfigure >}}

**Solution.** We can observe that the horizontal extent of the graph is $-3$
to 1, so the domain of $f$ is $(-3,1]$.

The vertical extent of the graph is 0 to $-4$, so the range is $[-4,0]$. The
graph below marks both.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The same graph of f with its extent marked: a horizontal segment at height 1 from an open circle above x = −3 to a solid dot above x = 1 shows the domain, and a vertical segment at x = 1.6 from a solid dot at height 0 down to a solid dot at height −4 shows the range.","xMin":-4,"xMax":3,"yMin":-6,"yMax":2,"unit":24,"tickLabels":true,"cubics":[{"a":-1,"b":-3,"c":0,"d":0,"from":-3,"to":1,"arrows":false}],"points":[{"at":[-3,0],"open":true},{"at":[1,-4]},{"at":[-3,1],"open":true},{"at":[1,1]},{"at":[1.8,0]},{"at":[1.8,-4]}],"segments":[{"from":[-3,1],"to":[1,1]},{"from":[1.8,0],"to":[1.8,-4]}],"texts":[{"at":[-1.6,1],"text":"Domain","dy":-10,"anchor":"middle"},{"at":[2,-2],"text":"Range","dx":4}]}
{{< /apfigure >}}

**Example.** Find the domain and range of the function $f$ whose graph is
shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line graph titled Alaska Crude Oil Production. The horizontal axis is the year from 1973 to 2008 and the vertical axis is thousand barrels per day from 0 to 2,200. Production sits near 200 through 1976, climbs steeply to about 1,600 by 1980, drifts up to a peak of about 2,010 in 1988, then declines steadily to about 680 in 2008.","xMin":1973,"xMax":2008,"yMin":0,"yMax":2200,"xUnit":8,"yUnit":0.1,"margin":46,"xGridStep":5,"yGridStep":200,"tickLabels":true,"xTickStep":5,"yTickStep":400,"xTickGrouping":false,"xLabel":"t","yLabel":"b","maxWidth":360,"polylines":[{"through":[[1973,215],[1974,195],[1975,190],[1976,180],[1977,465],[1978,1230],[1979,1400],[1980,1610],[1981,1610],[1982,1690],[1983,1710],[1984,1720],[1985,1830],[1986,1870],[1987,1960],[1988,2010],[1989,1870],[1990,1780],[1991,1800],[1992,1710],[1993,1590],[1994,1580],[1995,1490],[1996,1400],[1997,1300],[1998,1180],[1999,1050],[2000,970],[2001,980],[2002,980],[2003,940],[2004,880],[2005,830],[2006,740],[2007,720],[2008,680]]}]}
{{< /apfigure >}}

<small>Alaska crude oil production. (credit: modification of work by the U.S.
Energy Information Administration)</small>

**Solution.** The input quantity along the horizontal axis is "years," which
we represent with the variable $t$ for time. The output quantity is
"thousands of barrels of oil per day," which we represent with the variable
$b$ for barrels. The graph may continue to the left and right beyond what is
viewed, but based on the portion of the graph that is visible, we can
determine the domain as $1973\le t\le 2008$ and the range as approximately
$180\le b\le 2010$.

In interval notation, the domain is $[1973,2008]$, and the range is about
$[180,2010]$. For the domain and the range, we approximate the smallest and
largest values since they do not fall exactly on the grid lines.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A line graph titled World Population Increase. The horizontal axis is the year from 1950 to 2002 and the vertical axis is millions of people from 0 to 100. The curve rises from about 47 million in 1950 to about 75 million by 1966, levels off near 74 to 76 million through the mid-1970s, rises to a peak of about 89 million in 1985, then eases back to about 76 million by 2002.","xMin":1950,"xMax":2002,"yMin":0,"yMax":100,"xUnit":5.4,"yUnit":2.2,"margin":34,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":20,"xTickGrouping":false,"xLabel":"t","yLabel":"P","maxWidth":360,"smoothCurves":[{"freeform":true,"through":[[1950,47],[1955,53],[1960,56],[1963,63],[1966,74],[1970,76],[1975,74],[1980,81],[1985,89],[1990,84],[1995,80],[2002,76]]}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Using the World Population Increase graph above, identify the domain using interval notation."
  answer="$[1950,2002]$"
  hint="The domain is the horizontal extent of the graph, read off the year axis."
>}}
$[0,100]$
$[47,89]$
$[1950,2002]$
$[1950,2000]$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Using the same graph, identify the range using interval notation, in people."
  answer="$[47{,}000{,}000,\,89{,}000{,}000]$"
  hint="The range is the vertical extent; remember the axis is labeled in millions of people."
>}}
$[47{,}000{,}000,\,89{,}000{,}000]$
$[47,89]$
$[1950,2002]$
$[0,100{,}000{,}000]$
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **Q&A.** *Can a function's domain and range be the same?*

  Yes. For example, the domain and range of the cube root function are both
  the set of all real numbers.
{{< /callout >}}

## Finding domains and ranges of the toolkit functions

We will now return to our set of toolkit functions to determine the domain
and range of each.

**Constant function** — $f(x)=c$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the constant function f of x equals c: a horizontal line, drawn here above the x-axis, extending with arrows in both directions.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","lines":[{"y":2,"label":"f(x) = c","labelSide":"left","labelAt":0.7}]}
{{< /apfigure >}}

For the constant function $f(x)=c$, the domain consists of all real numbers;
there are no restrictions on the input. The only output value is the constant
$c$, so the range is the set $\{c\}$ that contains this single element. In
interval notation, this is written as $[c,c]$, the interval that both begins
and ends with $c$. Domain: $(-\infty,\infty)$. Range: $[c,c]$.

**Identity function** — $f(x)=x$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the identity function f of x equals x: a straight line through the origin rising at 45 degrees.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","lines":[{"slope":1,"intercept":0}]}
{{< /apfigure >}}

For the identity function $f(x)=x$, there is no restriction on $x$. Both the
domain and range are the set of all real numbers. Domain:
$(-\infty,\infty)$. Range: $(-\infty,\infty)$.

**Absolute value function** — $f(x)=\lvert x\rvert$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the absolute value function f of x equals the absolute value of x: a V shape with its corner at the origin, rising to the left and to the right.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","polylines":[{"through":[[-4,4],[0,0],[4,4]],"arrows":true}]}
{{< /apfigure >}}

For the absolute value function $f(x)=\lvert x\rvert$, there is no
restriction on $x$. However, because absolute value is defined as a distance
from 0, the output can only be greater than or equal to 0. Domain:
$(-\infty,\infty)$. Range: $[0,\infty)$.

**Quadratic function** — $f(x)=x^2$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the quadratic function f of x equals x squared: an upward-opening parabola with its vertex at the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","quadratics":[{"a":1}]}
{{< /apfigure >}}

For the quadratic function $f(x)=x^2$, the domain is all real numbers since
the horizontal extent of the graph is the whole real number line. Because the
graph does not include any negative values for the range, the range is only
nonnegative real numbers. Domain: $(-\infty,\infty)$. Range: $[0,\infty)$.

**Cubic function** — $f(x)=x^3$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the cubic function f of x equals x cubed: an S-shaped curve through the origin, falling to the lower left and rising to the upper right.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","cubics":[{"a":1}]}
{{< /apfigure >}}

For the cubic function $f(x)=x^3$, the domain is all real numbers because the
horizontal extent of the graph is the whole real number line. The same
applies to the vertical extent of the graph, so the domain and range include
all real numbers. Domain: $(-\infty,\infty)$. Range: $(-\infty,\infty)$.

**Reciprocal function** — $f(x)=\tfrac{1}{x}$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the reciprocal function f of x equals 1 over x: two branches approaching but never touching the axes, one in the upper right and one in the lower left.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","curves":[{"kind":"reciprocal"}]}
{{< /apfigure >}}

For the reciprocal function $f(x)=\tfrac{1}{x}$, we cannot divide by 0, so we
must exclude 0 from the domain. Further, 1 divided by any value can never be
0, so the range also will not include 0. In set-builder notation, we could
also write $\{x\mid x\ne 0\}$, the set of all real numbers that are not zero.
Domain: $(-\infty,0)\cup(0,\infty)$. Range: $(-\infty,0)\cup(0,\infty)$.

**Reciprocal squared function** — $f(x)=\tfrac{1}{x^2}$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the reciprocal squared function f of x equals 1 over x squared: two branches, both above the horizontal axis, approaching but never touching the axes.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","curves":[{"kind":"reciprocal-squared"}]}
{{< /apfigure >}}

For the reciprocal squared function $f(x)=\tfrac{1}{x^2}$, we cannot divide
by $0$, so we must exclude $0$ from the domain. There is also no $x$ that can
give an output of 0, so 0 is excluded from the range as well. Note that the
output of this function is always positive due to the square in the
denominator, so the range includes only positive numbers. Domain:
$(-\infty,0)\cup(0,\infty)$. Range: $(0,\infty)$.

**Square root function** — $f(x)=\sqrt{x}$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the square root function f of x equals the square root of x: a curve starting at the origin and rising to the right, flattening as it goes.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","curves":[{"kind":"sqrt"}]}
{{< /apfigure >}}

For the square root function $f(x)=\sqrt{x}$, we cannot take the square root
of a negative real number, so the domain must be 0 or greater. The range also
excludes negative numbers because the square root of a positive number $x$ is
defined to be positive, even though the square of the negative number
$-\sqrt{x}$ also gives us $x$. Domain: $[0,\infty)$. Range: $[0,\infty)$.

**Cube root function** — $f(x)=\sqrt[3]{x}$

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of the cube root function f of x equals the cube root of x: a curve through the origin rising to the right and falling to the left, steep near the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","curves":[{"kind":"cbrt"}]}
{{< /apfigure >}}

For the cube root function $f(x)=\sqrt[3]{x}$, the domain and range include
all real numbers. Note that there is no problem taking a cube root, or any
odd-integer root, of a negative number, and the resulting output is negative
(it is an odd function). Domain: $(-\infty,\infty)$. Range:
$(-\infty,\infty)$.

{{< callout type="info" >}}
  **How to:** given the formula for a function, determine the domain and
  range.

  1. Exclude from the domain any input values that result in division by
     zero.
  2. Exclude from the domain any input values that have nonreal (or
     undefined) number outputs.
  3. Use the valid input values to determine the range of the output values.
  4. Look at the function graph and table values to confirm the actual
     function behavior.
{{< /callout >}}

**Example.** Find the domain and range of $f(x)=2x^3-x$.

**Solution.** There are no restrictions on the domain, as any real number may
be cubed and then subtracted from the result.

The domain is $(-\infty,\infty)$ and the range is also $(-\infty,\infty)$.

**Example.** Find the domain and range of $f(x)=\tfrac{2}{x+1}$.

**Solution.** We cannot evaluate the function at $-1$ because division by
zero is undefined. The domain is $(-\infty,-1)\cup(-1,\infty)$. Because the
function is never zero, we exclude 0 from the range. The range is
$(-\infty,0)\cup(0,\infty)$.

**Example.** Find the domain and range of $f(x)=2\sqrt{x+4}$.

**Solution.** We cannot take the square root of a negative number, so the
value inside the radical must be nonnegative.

$$x+4\ge 0\ \text{ when }\ x\ge -4$$

The domain of $f(x)$ is $[-4,\infty)$.

We then find the range. We know that $f(-4)=0$, and the function value
increases as $x$ increases without any upper limit. We conclude that the
range of $f$ is $[0,\infty)$.

The graph below represents the function $f$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 2 times the square root of x plus 4. It begins at a solid point at (−4, 0) and rises to the right, passing near (0, 4) and continuing with an arrow.","xMin":-5,"xMax":5,"yMin":-1,"yMax":6,"unit":24,"tickLabels":true,"curves":[{"kind":"sqrt","a":2,"h":-4,"arrows":"end"}],"points":[{"at":[-4,0]}],"texts":[{"at":[-2.4,3.1],"text":"f","italic":true}]}
{{< /apfigure >}}

{{< multiplechoice
  question="Find the domain of $f(x)=-\sqrt{2-x}$."
  answer="$(-\infty,2]$"
  hint="The radicand must be nonnegative: solve $2-x\ge 0$."
>}}
$(-\infty,\infty)$
$[2,\infty)$
$(-\infty,2]$
$(-\infty,-2]$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Find the range of $f(x)=-\sqrt{2-x}$."
  answer="$(-\infty,0]$"
  hint="A square root is never negative, so think about what the leading minus sign does to every output."
>}}
$(-\infty,\infty)$
$[0,\infty)$
$(-\infty,0]$
$(-\infty,2]$
{{< /multiplechoice >}}

## Graphing piecewise-defined functions

Sometimes, we come across a function that requires more than one formula in
order to obtain the given output. For example, in the toolkit functions, we
introduced the absolute value function $f(x)=\lvert x\rvert$. With a domain
of all real numbers and a range of values greater than or equal to 0,
**absolute value** can be defined as the **magnitude**, or **modulus**, of a
real number value regardless of sign. It is the distance from 0 on the number
line. All of these definitions require the output to be greater than or equal
to 0.

If we input 0, or a positive value, the output is the same as the input.

$$f(x)=x\ \text{ if }\ x\ge 0$$

If we input a negative value, the output is the opposite of the input.

$$f(x)=-x\ \text{ if }\ x<0$$

Because this requires two different processes or pieces, the absolute value
function is an example of a piecewise function. A **piecewise function** is a
function in which more than one formula is used to define the output over
different pieces of the domain.

We use piecewise functions to describe situations in which a rule or
relationship changes as the input value crosses certain "boundaries." For
example, we often encounter situations in business for which the cost per
piece of a certain item is discounted once the number ordered exceeds a
certain value. Tax brackets are another real-world example of piecewise
functions. For example, consider a simple tax system in which incomes up to
\$10,000 are taxed at 10%, and any additional income is taxed at 20%. Writing
a total income of $S$ dollars, the tax is $0.1S$ dollars if
$S\le 10{,}000$ and $1{,}000+0.2(S-10{,}000)$ dollars if $S>10{,}000$.

{{< callout type="info" >}}
  **Piecewise function.** A piecewise function is a function in which more
  than one formula is used to define the output. Each formula has its own
  domain, and the domain of the function is the union of all these smaller
  domains. We notate this idea like this:

  $$
  f(x)=\begin{cases}
  \text{formula 1} & \text{if }x\text{ is in domain 1} \\[4pt]
  \text{formula 2} & \text{if }x\text{ is in domain 2} \\[4pt]
  \text{formula 3} & \text{if }x\text{ is in domain 3}
  \end{cases}
  $$

  In piecewise notation, the absolute value function is

  $$
  \lvert x\rvert=\begin{cases}
  x & \text{if }x\ge 0 \\[4pt]
  -x & \text{if }x<0
  \end{cases}
  $$
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a piecewise function, write the formula and identify the
  domain for each interval.

  1. Identify the intervals for which different rules apply.
  2. Determine formulas that describe how to calculate an output from an
     input in each interval.
  3. Use braces and if-statements to write the function.
{{< /callout >}}

**Example.** A museum charges \$5 per person for a guided tour with a group
of 1 to 9 people or a fixed \$50 fee for a group of 10 or more people. Write
a **function** relating the number of people, $n$, to the cost, $C$. Since
one cannot have fractions of a person, this is really a discrete function.
However, for this exercise we will treat it as a continuous function.

**Solution.** Two different formulas will be needed. For $n$-values under 10,
$C=5n$. For values of $n$ that are 10 or greater, $C=50$.

$$
C(n)=\begin{cases}
5n & \text{if }\ 0<n<10 \\[4pt]
50 & \text{if }\ n\ge 10
\end{cases}
$$

The function is represented below. The graph is a diagonal line from $n=0$ to
$n=10$ and a constant after that. In this example, the two formulas agree at
the meeting point where $n=10$, but not all piecewise functions have this
property.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of C of n. A straight segment rises from the origin to (10, 50), then a horizontal ray continues right at height 50 with an arrow.","xMin":0,"xMax":22,"yMin":0,"yMax":60,"xUnit":13,"yUnit":4,"xGridStep":5,"yGridStep":10,"tickLabels":true,"xLabel":"n","yLabel":"C(n)","polylines":[{"through":[[0,0],[10,50],[21,50]],"arrows":"end"}],"texts":[{"at":[7,50],"text":"C(n)","dy":16,"anchor":"middle"}]}
{{< /apfigure >}}

**Example.** A cell phone company uses the function below to determine the
cost, $C$, in dollars for $g$ gigabytes of data transfer.

$$
C(g)=\begin{cases}
25 & \text{if }\ 0<g<2 \\[4pt]
25+10(g-2) & \text{if }\ g\ge 2
\end{cases}
$$

Find the cost of using 1.5 gigabytes of data and the cost of using 4
gigabytes of data.

**Solution.** To find the cost of using 1.5 gigabytes of data, $C(1.5)$, we
first look to see which part of the domain our input falls in. Because 1.5 is
less than 2, we use the first formula.

$$C(1.5)=\$25$$

To find the cost of using 4 gigabytes of data, $C(4)$, we see that our input
of 4 is greater than 2, so we use the second formula.

$$C(4)=25+10(4-2)=\$45$$

The function is represented below. We can see where the function changes from
a constant to a shifted and stretched identity at $g=2$. We plot the graphs
for the different formulas on a common set of axes, making sure each formula
is applied on its proper domain.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of C of g. A horizontal segment runs at height 25 from g = 0 to g = 2, then a straight line rises to (4, 45) and continues with an arrow.","xMin":0,"xMax":4.5,"yMin":0,"yMax":60,"xUnit":62,"yUnit":4,"xGridStep":0.5,"yGridStep":10,"tickLabels":true,"xLabel":"g","yLabel":"C(g)","polylines":[{"through":[[0,25],[2,25],[4.4,49]],"arrows":"end"}],"texts":[{"at":[2.2,34],"text":"C(g)","anchor":"end","dx":-4}]}
{{< /apfigure >}}

{{< callout type="info" >}}
  **How to:** given a piecewise function, sketch a graph.

  1. Indicate on the $x$-axis the boundaries defined by the intervals on each
     piece of the domain.
  2. For each piece of the domain, graph on that interval using the
     corresponding equation pertaining to that piece. Do not graph two
     functions over one interval because it would violate the criteria of a
     function.
{{< /callout >}}

**Example.** Sketch a graph of the function.

$$
f(x)=\begin{cases}
x^2 & \text{if }\ x\le 1 \\[4pt]
3 & \text{if }\ 1<x\le 2 \\[4pt]
x & \text{if }\ x>2
\end{cases}
$$

**Solution.** Each of the component functions is from our library of toolkit
functions, so we know their shapes. We can imagine graphing each function and
then limiting the graph to the indicated domain. At the endpoints of the
domain, we draw open circles to indicate where the endpoint is not included
because of a less-than or greater-than inequality; we draw a closed circle
where the endpoint is included because of a less-than-or-equal-to or
greater-than-or-equal-to inequality.

The three figures below show the three components of the piecewise function
graphed on separate coordinate systems: (a) $f(x)=x^2$ if $x\le 1$;
(b) $f(x)=3$ if $1<x\le 2$; (c) $f(x)=x$ if $x>2$.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x squared for x at most 1: the left half of a parabola falling from the top of the grid to the origin and rising to a solid point at (1, 1).","xMin":-4,"xMax":4,"yMin":-2,"yMax":5,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"to":1,"arrows":"start"}],"points":[{"at":[1,1]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals 3 for x greater than 1 and at most 2: a horizontal segment at height 3 from an open circle at (1, 3) to a solid point at (2, 3).","xMin":-4,"xMax":4,"yMin":-2,"yMax":5,"unit":24,"tickLabels":true,"segments":[{"from":[1,3],"to":[2,3]}],"points":[{"at":[1,3],"open":true},{"at":[2,3]}]}
{{< /apfigure >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"The graph of f of x equals x for x greater than 2: a straight line from an open circle at (2, 2) rising to the right with an arrow.","xMin":-4,"xMax":4,"yMin":-2,"yMax":5,"unit":24,"tickLabels":true,"polylines":[{"through":[[2,2],[4,4]],"arrows":"end"}],"points":[{"at":[2,2],"open":true}]}
{{< /apfigure >}}

Now that we have sketched each piece individually, we combine them in the
same coordinate plane.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The three pieces on one grid: the parabola y = x squared down to the origin and up to a solid point at (1, 1); a horizontal segment at height 3 from an open circle at (1, 3) to a solid point at (2, 3); and a line from an open circle at (2, 2) rising to the right with an arrow.","xMin":-4,"xMax":4,"yMin":-2,"yMax":5,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"to":1,"arrows":"start"}],"segments":[{"from":[1,3],"to":[2,3]}],"polylines":[{"through":[[2,2],[4,4]],"arrows":"end"}],"points":[{"at":[1,1]},{"at":[1,3],"open":true},{"at":[2,3]},{"at":[2,2],"open":true}]}
{{< /apfigure >}}

Note that the graph does pass the vertical line test even at $x=1$ and $x=2$
because the points $(1,3)$ and $(2,2)$ are not part of the graph of the
function, though $(1,1)$ and $(2,3)$ are.

{{< multiplechoice
  mode="graph"
  question="Which graph shows the piecewise function $f(x)=x^3$ if $x<-1$, $f(x)=-2$ if $-1<x<4$, and $f(x)=\sqrt{x}$ if $x>4$?"
  answerIndex="1"
  hint="Check where each piece starts and stops: the square-root piece only exists past $x=4$, and the middle piece sits at height $-2$."
>}}
{"ariaLabel":"A cubic curve rising from the lower left to an open circle at (−1, −1); a horizontal segment at height −2 between open circles at (−1, −2) and (4, −2); and a square-root curve starting at the origin and rising to the right, crossing the horizontal segment.","xMin":-3,"xMax":10,"yMin":-4,"yMax":4,"unit":22,"tickLabels":true,"tickStep":2,"yTickStep":4,"cubics":[{"a":1,"to":-1,"arrows":"start"}],"curves":[{"kind":"sqrt"}],"segments":[{"from":[-1,-2],"to":[4,-2]}],"points":[{"at":[-1,-1],"open":true},{"at":[-1,-2],"open":true},{"at":[4,-2],"open":true},{"at":[0,0]}]}
===OPT===
{"ariaLabel":"A cubic curve rising from the lower left to an open circle at (−1, −1); a horizontal segment at height −2 between open circles at (−1, −2) and (4, −2); and a square-root curve from an open circle at (4, 2) rising slowly to the right.","xMin":-3,"xMax":10,"yMin":-4,"yMax":4,"unit":22,"tickLabels":true,"tickStep":2,"yTickStep":4,"cubics":[{"a":1,"to":-1,"arrows":"start"}],"curves":[{"kind":"sqrt","from":4}],"segments":[{"from":[-1,-2],"to":[4,-2]}],"points":[{"at":[-1,-1],"open":true},{"at":[-1,-2],"open":true},{"at":[4,-2],"open":true},{"at":[4,2],"open":true}]}
===OPT===
{"ariaLabel":"A cubic curve rising from the lower left to an open circle at (−1, −1); a horizontal segment at height 2 between open circles at (−1, 2) and (4, 2); and a square-root curve from an open circle at (4, 2) rising slowly to the right.","xMin":-3,"xMax":10,"yMin":-4,"yMax":4,"unit":22,"tickLabels":true,"tickStep":2,"yTickStep":4,"cubics":[{"a":1,"to":-1,"arrows":"start"}],"curves":[{"kind":"sqrt","from":4}],"segments":[{"from":[-1,2],"to":[4,2]}],"points":[{"at":[-1,-1],"open":true},{"at":[-1,2],"open":true},{"at":[4,2],"open":true}]}
{{< /multiplechoice >}}

{{< callout type="info" >}}
  **Q&A.** *Can more than one formula from a piecewise function be applied to
  a value in the domain?*

  No. Each value corresponds to one equation in a piecewise formula.
{{< /callout >}}

## Key concepts

- The domain of a function includes all real input values that would not
  cause us to attempt an undefined mathematical operation, such as dividing
  by zero or taking the square root of a negative number.
- The domain of a function can be determined by listing the input values of a
  set of ordered pairs.
- The domain of a function can also be determined by identifying the input
  values of a function written as an equation.
- Interval values represented on a number line can be described using
  inequality notation, set-builder notation, and interval notation.
- For many functions, the domain and range can be determined from a graph.
- An understanding of toolkit functions can be used to find the domain and
  range of related functions.
- A piecewise function is described by more than one formula.
- A piecewise function can be graphed using each algebraic formula on its
  assigned subdomain.

## Key terms

**interval notation** — a method of describing a set that includes all
numbers between a lower limit and an upper limit; the lower and upper values
are listed between brackets or parentheses, a square bracket indicating
inclusion in the set, and a parenthesis indicating exclusion. **piecewise
function** — a function in which more than one formula is used to define the
output. **set-builder notation** — a method of describing a set by a rule
that all of its members obey; it takes the form $\{x\mid \text{statement
about }x\}$.

## Practice

### Find the domain of a function defined by an equation

{{< multiplechoice
  question="Find the domain of the function $f(x)=5-2x^2$."
  answer="$(-\infty,\infty)$"
  hint="There is no denominator or even root here, so ask whether any real number could fail."
>}}
$(-\infty,5]$
$[0,\infty)$
$(-\infty,0)\cup(0,\infty)$
$(-\infty,\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Find the domain of the function $f(x)=3-\sqrt{6-2x}$."
  answer="$(-\infty,3]$"
  hint="Set the radicand greater than or equal to zero and solve for $x$."
>}}
$[3,\infty)$
$(-\infty,6]$
$(-\infty,3]$
$(-\infty,3)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Find the domain of the function $f(x)=\tfrac{3x+1}{4x+2}$."
  answer="$(-\infty,-\tfrac{1}{2})\cup(-\tfrac{1}{2},\infty)$"
  hint="Set the denominator equal to zero; that input is the one value to exclude."
>}}
$(-\infty,-\tfrac{1}{3})\cup(-\tfrac{1}{3},\infty)$
$(-\infty,-\tfrac{1}{2})\cup(-\tfrac{1}{2},\infty)$
$(-\infty,\infty)$
$[-\tfrac{1}{2},\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Find the domain of the function $f(x)=\tfrac{2x+1}{\sqrt{5-x}}$."
  answer="$(-\infty,5)$"
  hint="The radicand sits under a denominator, so it must be strictly positive, not just nonnegative."
>}}
$(5,\infty)$
$(-\infty,5)$
$(-\infty,5]$
$(-\infty,-\tfrac{1}{2})\cup(-\tfrac{1}{2},\infty)$
{{< /multiplechoice >}}

### Graph piecewise-defined functions

{{< fillin
  question="A piecewise function is defined by $f(x)=\begin{cases}5x & \text{if }x<0\\[4pt]3 & \text{if }0\le x\le3\\[4pt]x^2 & \text{if }x>3\end{cases}$. Find $f(-1)$."
  answer="-5"
  hint="Since $-1<0$, use the first piece, $5x$."
>}}

{{< fillin
  question="For the same piecewise function, find $f(0)$."
  answer="3"
  hint="Since $0\le 0\le 3$, use the middle piece, which is constant."
>}}

{{< fillin
  question="For the same piecewise function, find $f(2)$."
  answer="3"
  hint="Since $0\le 2\le 3$, the input still falls in the middle piece."
>}}

{{< fillin
  question="For the same piecewise function, find $f(4)$."
  answer="16"
  hint="Since $4>3$, use the third piece, $x^2$."
>}}

{{< multiplechoice
  mode="graph"
  question="Which graph shows the piecewise function $f(x)=2x-1$ if $x<1$ and $f(x)=1+x$ if $x\ge 1$?"
  answerIndex="0"
  hint="Check which endpoint is open and which is closed at $x=1$: the first piece excludes $x=1$, the second includes it."
>}}
{"ariaLabel":"The graph of a piecewise function: a line of slope 2 rising to an open circle at (1, 1), and a separate line of slope 1 starting at a solid point at (1, 2) and continuing to the right.","xMin":-3,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[-1,2],"to":1,"arrows":"start"},{"coeffs":[1,1],"from":1,"arrows":"end"}],"points":[{"at":[1,1],"open":true},{"at":[1,2]}]}
===OPT===
{"ariaLabel":"The graph of a piecewise function: a line of slope 2 rising to a solid point at (1, 1), and a separate line of slope 1 starting at an open circle at (1, 2) and continuing to the right.","xMin":-3,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[-1,2],"to":1,"arrows":"start"},{"coeffs":[1,1],"from":1,"arrows":"end"}],"points":[{"at":[1,1]},{"at":[1,2],"open":true}]}
===OPT===
{"ariaLabel":"The graph of a piecewise function: a line of slope 2 rising to an open circle at (1, 1), and a separate line of slope negative 1 starting at a solid point at (1, 2) and falling to the right.","xMin":-3,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[-1,2],"to":1,"arrows":"start"},{"coeffs":[3,-1],"from":1,"arrows":"end"}],"points":[{"at":[1,1],"open":true},{"at":[1,2]}]}
===OPT===
{"ariaLabel":"The graph of a piecewise function: a line of slope 2 rising to an open circle at (0, -1), and a separate line of slope 1 starting at a solid point at (0, 1) and continuing to the right.","xMin":-3,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"polynomials":[{"coeffs":[-1,2],"to":0,"arrows":"start"},{"coeffs":[1,1],"from":0,"arrows":"end"}],"points":[{"at":[0,-1],"open":true},{"at":[0,1]}]}
{{< /multiplechoice >}}

{{< multiplechoice
  question="A piecewise function is defined by $f(x)=x^2-2$ if $x<1$ and $f(x)=-x^2+2$ if $x>1$. Find its domain."
  answer="$(-\infty,1)\cup(1,\infty)$"
  hint="Neither piece's interval includes $x=1$ itself, so check whether that input is covered at all."
>}}
$(-\infty,\infty)$
$(-\infty,1)\cup(1,\infty)$
$(-\infty,1]$
$[1,\infty)$
{{< /multiplechoice >}}

---

<small>This section is adapted from [Precalculus 2e, Section 1.2: Domain and Range](https://openstax.org/books/precalculus-2e/pages/1-2-domain-and-range) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every figure as an accessible inline SVG, including the two opening bar charts (whose bar heights are read from the source charts), the domain-and-range function-machine diagram, the number lines, the toolkit function library, and the piecewise graphs; presented the interval-notation summary and the inequality/set-builder/interval comparison as Markdown tables, with the comparison's number lines following as a labelled figure group and the generic $a$-and-$b$ number lines of the first summary replaced by its own description column; omitted the media links; converted the practice problems ("Try Its") into interactive exercises with instant feedback, presented as multiple choice because interval and set-builder notation cannot be graded as free-response math; presented the piecewise-sketching practice item as a "which graph is correct" question, since the graphing component cannot accept a piecewise answer; and adapted selected end-of-section exercises (Verbal, Algebraic, Graphical, and Numeric subsections) into the section-final interactive Practice block.</small>
