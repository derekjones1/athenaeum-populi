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
$\{4,0,-4,-8,-12\}$
$\{-5,-12\}$
$\{-12,-8,-4,0,4\}$
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
$(-\infty,\infty)$
$[0,\infty)$
$(-\infty,5]$
$(-\infty,0)\cup(0,\infty)$
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

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from −3 to 3 with an open circle at 2. A heavy line runs left from 2 to the arrow and right from 2 to the arrow, showing every real number except 2.","min":-3,"max":3,"intervals":[{"to":2,"toType":"open"},{"from":2,"fromType":"open"}]}'>
<svg role="img" aria-label="A number line from −3 to 3 with an open circle at 2. A heavy line runs left from 2 to the arrow and right from 2 to the arrow, showing every real number except 2." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 76" width="320" height="76" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 23 L 16 30 L 24 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 23 L 304 30 L 296 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="16" y1="30" x2="243" y2="30" stroke="currentColor" stroke-width="3.5"/>
  <line x1="253" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="24" x2="28" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="55" text-anchor="middle" font-size="12" fill="currentColor">−3</text>
  <line x1="72" y1="24" x2="72" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="72" y="55" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="116" y1="24" x2="116" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="116" y="55" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="160" y1="24" x2="160" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="160" y="55" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="204" y1="24" x2="204" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="204" y="55" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <text x="248" y="55" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="292" y1="24" x2="292" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="55" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <circle cx="248" cy="30" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="248" cy="30" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>

In interval form, the domain of $f$ is $(-\infty,2)\cup(2,\infty)$.

{{< multiplechoice
  question="Find the domain of the function $f(x)=\tfrac{1+4x}{2x-1}$."
  answer="$(-\infty,\tfrac{1}{2})\cup(\tfrac{1}{2},\infty)$"
  hint="Set the denominator equal to zero; that input is the one value to exclude."
>}}
$(-\infty,\tfrac{1}{2})\cup(\tfrac{1}{2},\infty)$
$(-\infty,-\tfrac{1}{2})\cup(-\tfrac{1}{2},\infty)$
$(-\infty,2)\cup(2,\infty)$
$[\tfrac{1}{2},\infty)$
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
$[-\tfrac{5}{2},\infty)$
$(-\infty,-\tfrac{5}{2}]$
$[\tfrac{5}{2},\infty)$
$(-\infty,\infty)$
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

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from 4 to 11 with an open circle at 5 and a solid dot at 10, and a heavy line between them.","min":4,"max":11,"title":"5 &lt; h ≤ 10","intervals":[{"from":5,"fromType":"open","to":10,"toType":"closed"}]}'>
<svg role="img" aria-label="A number line from 4 to 11 with an open circle at 5 and a solid dot at 10, and a heavy line between them." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="70.7" y1="45" x2="254.3" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <text x="65.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="103.4" y1="39" x2="103.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="103.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="141.1" y1="39" x2="141.1" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="141.1" y="70" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <line x1="178.9" y1="39" x2="178.9" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="178.9" y="70" text-anchor="middle" font-size="12" fill="currentColor">8</text>
  <line x1="216.6" y1="39" x2="216.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="216.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">9</text>
  <line x1="254.3" y1="39" x2="254.3" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="254.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">11</text>
  <circle cx="65.7" cy="45" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="254.3" cy="45" r="5" fill="currentColor"/>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">5 &lt; h ≤ 10</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from 4 to 11 with a solid dot at 5 and an open circle at 10, and a heavy line between them.","min":4,"max":11,"title":"5 ≤ h &lt; 10","intervals":[{"from":5,"fromType":"closed","to":10,"toType":"open"}]}'>
<svg role="img" aria-label="A number line from 4 to 11 with a solid dot at 5 and an open circle at 10, and a heavy line between them." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="65.7" y1="45" x2="249.3" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="65.7" y1="39" x2="65.7" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="65.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="103.4" y1="39" x2="103.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="103.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="141.1" y1="39" x2="141.1" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="141.1" y="70" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <line x1="178.9" y1="39" x2="178.9" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="178.9" y="70" text-anchor="middle" font-size="12" fill="currentColor">8</text>
  <line x1="216.6" y1="39" x2="216.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="216.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">9</text>
  <text x="254.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">11</text>
  <circle cx="65.7" cy="45" r="5" fill="currentColor"/>
  <circle cx="254.3" cy="45" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">5 ≤ h &lt; 10</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from 4 to 11 with open circles at 5 and at 10 and a heavy line between them.","min":4,"max":11,"title":"5 &lt; h &lt; 10","intervals":[{"from":5,"fromType":"open","to":10,"toType":"open"}]}'>
<svg role="img" aria-label="A number line from 4 to 11 with open circles at 5 and at 10 and a heavy line between them." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="70.7" y1="45" x2="249.3" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <text x="65.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="103.4" y1="39" x2="103.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="103.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="141.1" y1="39" x2="141.1" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="141.1" y="70" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <line x1="178.9" y1="39" x2="178.9" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="178.9" y="70" text-anchor="middle" font-size="12" fill="currentColor">8</text>
  <line x1="216.6" y1="39" x2="216.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="216.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">9</text>
  <text x="254.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">11</text>
  <circle cx="65.7" cy="45" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="254.3" cy="45" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">5 &lt; h &lt; 10</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from 4 to 11 with an open circle at 10 and a heavy line running left from 10 to the arrow.","min":4,"max":11,"title":"h &lt; 10","intervals":[{"to":10,"toType":"open"}]}'>
<svg role="img" aria-label="A number line from 4 to 11 with an open circle at 10 and a heavy line running left from 10 to the arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="16" y1="45" x2="249.3" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="65.7" y1="39" x2="65.7" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="65.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="103.4" y1="39" x2="103.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="103.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="141.1" y1="39" x2="141.1" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="141.1" y="70" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <line x1="178.9" y1="39" x2="178.9" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="178.9" y="70" text-anchor="middle" font-size="12" fill="currentColor">8</text>
  <line x1="216.6" y1="39" x2="216.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="216.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">9</text>
  <text x="254.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">11</text>
  <circle cx="254.3" cy="45" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">h &lt; 10</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from 4 to 11 with a solid dot at 10 and a heavy line running right from 10 to the arrow.","min":4,"max":11,"title":"h ≥ 10","intervals":[{"from":10,"fromType":"closed"}]}'>
<svg role="img" aria-label="A number line from 4 to 11 with a solid dot at 10 and a heavy line running right from 10 to the arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="254.3" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="65.7" y1="39" x2="65.7" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="65.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="103.4" y1="39" x2="103.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="103.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="141.1" y1="39" x2="141.1" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="141.1" y="70" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <line x1="178.9" y1="39" x2="178.9" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="178.9" y="70" text-anchor="middle" font-size="12" fill="currentColor">8</text>
  <line x1="216.6" y1="39" x2="216.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="216.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">9</text>
  <line x1="254.3" y1="39" x2="254.3" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="254.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">11</text>
  <circle cx="254.3" cy="45" r="5" fill="currentColor"/>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">h ≥ 10</text>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from 4 to 11 covered by a heavy line from arrow to arrow, showing all real numbers.","min":4,"max":11,"title":"All real numbers","intervals":[{}]}'>
<svg role="img" aria-label="A number line from 4 to 11 covered by a heavy line from arrow to arrow, showing all real numbers." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 38 L 16 45 L 24 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 38 L 304 45 L 296 52" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="16" y1="45" x2="304" y2="45" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="39" x2="28" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="70" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="65.7" y1="39" x2="65.7" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="65.7" y="70" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="103.4" y1="39" x2="103.4" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="103.4" y="70" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="141.1" y1="39" x2="141.1" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="141.1" y="70" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <line x1="178.9" y1="39" x2="178.9" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="178.9" y="70" text-anchor="middle" font-size="12" fill="currentColor">8</text>
  <line x1="216.6" y1="39" x2="216.6" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="216.6" y="70" text-anchor="middle" font-size="12" fill="currentColor">9</text>
  <line x1="254.3" y1="39" x2="254.3" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="254.3" y="70" text-anchor="middle" font-size="12" fill="currentColor">10</text>
  <line x1="292" y1="39" x2="292" y2="51" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="70" text-anchor="middle" font-size="12" fill="currentColor">11</text>
  <text x="160" y="16" text-anchor="middle" font-size="14" fill="currentColor">All real numbers</text>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from −2 to 7. A heavy line joins solid dots at 1 and 3, and a second heavy line runs from an open circle at 5 to the right arrow.","min":-2,"max":7,"intervals":[{"from":1,"to":3},{"from":5,"fromType":"open"}]}'>
<svg role="img" aria-label="A number line from −2 to 7. A heavy line joins solid dots at 1 and 3, and a second heavy line runs from an open circle at 5 to the right arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 76" width="320" height="76" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 23 L 16 30 L 24 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 23 L 304 30 L 296 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="116" y1="30" x2="174.7" y2="30" stroke="currentColor" stroke-width="3.5"/>
  <line x1="238.3" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="3.5"/>
  <line x1="28" y1="24" x2="28" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="28" y="55" text-anchor="middle" font-size="12" fill="currentColor">−2</text>
  <line x1="57.3" y1="24" x2="57.3" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="57.3" y="55" text-anchor="middle" font-size="12" fill="currentColor">−1</text>
  <line x1="86.7" y1="24" x2="86.7" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="86.7" y="55" text-anchor="middle" font-size="12" fill="currentColor">0</text>
  <line x1="116" y1="24" x2="116" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="116" y="55" text-anchor="middle" font-size="12" fill="currentColor">1</text>
  <line x1="145.3" y1="24" x2="145.3" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="145.3" y="55" text-anchor="middle" font-size="12" fill="currentColor">2</text>
  <line x1="174.7" y1="24" x2="174.7" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="174.7" y="55" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="204" y1="24" x2="204" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="204" y="55" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <text x="233.3" y="55" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <line x1="262.7" y1="24" x2="262.7" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="262.7" y="55" text-anchor="middle" font-size="12" fill="currentColor">6</text>
  <line x1="292" y1="24" x2="292" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="55" text-anchor="middle" font-size="12" fill="currentColor">7</text>
  <circle cx="116" cy="30" r="5" fill="currentColor"/>
  <circle cx="174.7" cy="30" r="5" fill="currentColor"/>
  <circle cx="233.3" cy="30" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"numberline","ariaLabel":"A number line from −5 to 5. A heavy line runs from the left arrow to a solid dot at −2, and a second heavy line runs from a solid dot at −1 to an open circle at 3.","min":-5,"max":5,"intervals":[{"to":-2,"toType":"closed"},{"from":-1,"fromType":"closed","to":3,"toType":"open"}]}'>
<svg role="img" aria-label="A number line from −5 to 5. A heavy line runs from the left arrow to a solid dot at −2, and a second heavy line runs from a solid dot at −1 to an open circle at 3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 76" width="320" height="76" font-family="Helvetica, Arial, sans-serif">
  <line x1="16" y1="30" x2="304" y2="30" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 24 23 L 16 30 L 24 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 296 23 L 304 30 L 296 37" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="16" y1="30" x2="107.2" y2="30" stroke="currentColor" stroke-width="3.5"/>
  <line x1="133.6" y1="30" x2="234.2" y2="30" stroke="currentColor" stroke-width="3.5"/>
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
  <text x="239.2" y="55" text-anchor="middle" font-size="12" fill="currentColor">3</text>
  <line x1="265.6" y1="24" x2="265.6" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="265.6" y="55" text-anchor="middle" font-size="12" fill="currentColor">4</text>
  <line x1="292" y1="24" x2="292" y2="36" stroke="currentColor" stroke-width="1.5"/>
  <text x="292" y="55" text-anchor="middle" font-size="12" fill="currentColor">5</text>
  <circle cx="107.2" cy="30" r="5" fill="currentColor"/>
  <circle cx="133.6" cy="30" r="5" fill="currentColor"/>
  <circle cx="239.2" cy="30" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>

{{< multiplechoice
  question="Which words describe the set graphed on the number line above?"
  answer="values that are less than or equal to $-2$, or values that are greater than or equal to $-1$ and less than 3"
  hint="Read each heavy stretch separately, then check whether each endpoint dot is solid or hollow."
>}}
values that are less than or equal to $-2$, or values that are greater than or equal to $-1$ and less than 3
values that are less than $-2$, or values that are greater than $-1$ and less than or equal to 3
values that are between $-2$ and $-1$, or values that are greater than 3
values that are greater than or equal to $-2$ and less than 3
{{< /multiplechoice >}}

{{< multiplechoice
  question="Write the same set in interval notation."
  answer="$(-\infty,-2]\cup[-1,3)$"
  hint="A solid dot takes a bracket and a hollow dot takes a parenthesis; join the two pieces with $\cup$."
>}}
$(-\infty,-2]\cup[-1,3)$
$(-\infty,-2)\cup(-1,3]$
$[-2,-1]\cup(3,\infty)$
$(-\infty,-2]\cup[-1,3]$
{{< /multiplechoice >}}

## Finding domain and range from graphs

Another way to identify the domain and range of functions is by using graphs.
Because the domain refers to the set of possible input values, the domain of
a graph consists of all the input values shown on the $x$-axis. The range is
the set of possible output values, which are shown on the $y$-axis. Keep in
mind that if the graph continues beyond the portion of the graph we can see,
the domain and range may be greater than the visible values.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A curve beginning at a solid point at (−5, 5), falling to a low point near (−0.7, −2), rising to a high point near (2.2, −0.8), then falling steeply off the bottom of the grid near x = 4.9. A horizontal arrow labelled Domain runs right from x = −5, and a vertical arrow labelled Range runs down from y = 5.","xMin":-6,"xMax":6,"yMin":-9,"yMax":7,"unit":20,"tickLabels":true,"polynomials":[{"coeffs":[-1.9302,0.438,0.2517,-0.0762,-0.0107],"from":-5,"arrows":"end"}],"points":[{"at":[-5,5]},{"at":[-5,6]},{"at":[5,5]}],"segments":[{"from":[-5,6],"to":[5.7,6],"arrows":"end"},{"from":[5,5],"to":[5,-8.7],"arrows":"end"}],"texts":[{"at":[2,6],"text":"Domain","dy":-9,"anchor":"middle"},{"at":[5,2],"text":"Range","dx":-9,"anchor":"end"}]}'>
<svg role="img" aria-label="A curve beginning at a solid point at (−5, 5), falling to a low point near (−0.7, −2), rising to a high point near (2.2, −0.8), then falling steeply off the bottom of the grid near x = 4.9. A horizontal arrow labelled Domain runs right from x = −5, and a vertical arrow labelled Range runs down from y = 5." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 372" width="292" height="372" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="346" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="346" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="346" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="346" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="346" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="346" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="346" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="346" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="346" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="346" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="346" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="346" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="266" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="266" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="266" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="266" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="266" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="266" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="266" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="266" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="166" x2="268" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="348" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,166 268,171 268,161" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,166 24,161 24,171" fill="currentColor"/>
  <polygon points="146,358 141,348 151,348" fill="currentColor"/>
  <text x="276" y="158" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="163" x2="26" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="181" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="163" x2="46" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="181" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="163" x2="66" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="181" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="163" x2="86" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="181" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="163" x2="106" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="181" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="163" x2="126" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="181" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="163" x2="166" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="181" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="163" x2="186" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="181" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="163" x2="206" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="181" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="163" x2="226" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="181" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="163" x2="246" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="181" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="163" x2="266" y2="169" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="181" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="346" x2="149" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="350" font-size="11" fill="currentColor" text-anchor="end">−9</text>
  <line x1="143" y1="326" x2="149" y2="326" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="330" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="143" y1="306" x2="149" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="310" font-size="11" fill="currentColor" text-anchor="end">−7</text>
  <line x1="143" y1="286" x2="149" y2="286" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="290" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="146" x2="149" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="150" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="126" x2="149" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="130" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <polyline points="46,65.8 46.3,66.4 46.5,67 46.8,67.6 47,68.3 47.3,68.9 47.5,69.5 47.8,70.1 48,70.7 48.3,71.4 48.5,72 48.8,72.6 49,73.2 49.3,73.8 49.5,74.5 49.8,75.1 50,75.7 50.3,76.4 50.5,77 50.8,77.6 51,78.2 51.3,78.9 51.5,79.5 51.8,80.1 52,80.8 52.3,81.4 52.5,82 52.8,82.7 53,83.3 53.3,83.9 53.5,84.6 53.8,85.2 54,85.9 54.3,86.5 54.5,87.1 54.8,87.8 55,88.4 55.3,89 55.5,89.7 55.8,90.3 56,91 56.3,91.6 56.5,92.2 56.8,92.9 57,93.5 57.3,94.2 57.5,94.8 57.8,95.4 58,96.1 58.3,96.7 58.5,97.4 58.8,98 59,98.6 59.3,99.3 59.5,99.9 59.8,100.5 60,101.2 60.3,101.8 60.5,102.5 60.8,103.1 61,103.7 61.3,104.4 61.5,105 61.8,105.6 62,106.3 62.3,106.9 62.5,107.5 62.8,108.2 63,108.8 63.3,109.4 63.5,110.1 63.8,110.7 64,111.3 64.3,112 64.5,112.6 64.8,113.2 65,113.8 65.3,114.5 65.5,115.1 65.8,115.7 66,116.3 66.3,117 66.5,117.6 66.8,118.2 67,118.8 67.3,119.5 67.5,120.1 67.8,120.7 68,121.3 68.3,121.9 68.5,122.5 68.8,123.1 69,123.8 69.3,124.4 69.5,125 69.8,125.6 70,126.2 70.3,126.8 70.5,127.4 70.8,128 71,128.6 71.3,129.2 71.5,129.8 71.8,130.4 72,131 72.3,131.6 72.5,132.2 72.8,132.8 73,133.4 73.3,134 73.5,134.6 73.8,135.2 74,135.7 74.3,136.3 74.5,136.9 74.8,137.5 75,138.1 75.3,138.6 75.5,139.2 75.8,139.8 76,140.4 76.3,140.9 76.5,141.5 76.8,142.1 77,142.6 77.3,143.2 77.5,143.8 77.8,144.3 78,144.9 78.3,145.5 78.5,146 78.8,146.6 79,147.1 79.3,147.7 79.5,148.2 79.8,148.8 80,149.3 80.3,149.8 80.5,150.4 80.8,150.9 81,151.5 81.3,152 81.5,152.5 81.8,153.1 82,153.6 82.3,154.1 82.5,154.6 82.8,155.2 83,155.7 83.3,156.2 83.5,156.7 83.8,157.2 84,157.7 84.3,158.3 84.5,158.8 84.8,159.3 85,159.8 85.3,160.3 85.5,160.8 85.8,161.3 86,161.8 86.3,162.3 86.5,162.7 86.8,163.2 87,163.7 87.3,164.2 87.5,164.7 87.8,165.2 88,165.6 88.3,166.1 88.5,166.6 88.8,167.1 89,167.5 89.3,168 89.5,168.4 89.8,168.9 90,169.4 90.3,169.8 90.5,170.3 90.8,170.7 91,171.2 91.3,171.6 91.5,172.1 91.8,172.5 92,172.9 92.3,173.4 92.5,173.8 92.8,174.2 93,174.7 93.3,175.1 93.5,175.5 93.8,175.9 94,176.3 94.3,176.8 94.5,177.2 94.8,177.6 95,178 95.3,178.4 95.5,178.8 95.8,179.2 96,179.6 96.3,180 96.5,180.4 96.8,180.8 97,181.1 97.3,181.5 97.5,181.9 97.8,182.3 98,182.7 98.3,183 98.5,183.4 98.8,183.8 99,184.1 99.3,184.5 99.5,184.9 99.8,185.2 100,185.6 100.3,185.9 100.5,186.3 100.8,186.6 101,187 101.3,187.3 101.5,187.6 101.8,188 102,188.3 102.3,188.6 102.5,189 102.8,189.3 103,189.6 103.3,189.9 103.5,190.2 103.8,190.5 104,190.8 104.3,191.2 104.5,191.5 104.8,191.8 105,192.1 105.3,192.4 105.5,192.6 105.8,192.9 106,193.2 106.3,193.5 106.5,193.8 106.8,194.1 107,194.3 107.3,194.6 107.5,194.9 107.8,195.1 108,195.4 108.3,195.7 108.5,195.9 108.8,196.2 109,196.4 109.3,196.7 109.5,196.9 109.8,197.2 110,197.4 110.3,197.7 110.5,197.9 110.8,198.1 111,198.4 111.3,198.6 111.5,198.8 111.8,199 112,199.2 112.3,199.5 112.5,199.7 112.8,199.9 113,200.1 113.3,200.3 113.5,200.5 113.8,200.7 114,200.9 114.3,201.1 114.5,201.3 114.8,201.5 115,201.6 115.3,201.8 115.5,202 115.8,202.2 116,202.4 116.3,202.5 116.5,202.7 116.8,202.9 117,203 117.3,203.2 117.5,203.3 117.8,203.5 118,203.6 118.3,203.8 118.5,203.9 118.8,204.1 119,204.2 119.3,204.4 119.5,204.5 119.8,204.6 120,204.7 120.3,204.9 120.5,205 120.8,205.1 121,205.2 121.3,205.3 121.5,205.5 121.8,205.6 122,205.7 122.3,205.8 122.5,205.9 122.8,206 123,206.1 123.3,206.2 123.5,206.3 123.8,206.3 124,206.4 124.3,206.5 124.5,206.6 124.8,206.7 125,206.7 125.3,206.8 125.5,206.9 125.8,207 126,207 126.3,207.1 126.5,207.1 126.8,207.2 127,207.3 127.3,207.3 127.5,207.4 127.8,207.4 128,207.4 128.3,207.5 128.5,207.5 128.8,207.6 129,207.6 129.3,207.6 129.5,207.6 129.8,207.7 130,207.7 130.3,207.7 130.5,207.7 130.8,207.8 131,207.8 131.3,207.8 131.5,207.8 131.8,207.8 132,207.8 132.3,207.8 132.5,207.8 132.8,207.8 133,207.8 133.3,207.8 133.5,207.8 133.8,207.8 134,207.7 134.3,207.7 134.5,207.7 134.8,207.7 135,207.7 135.3,207.6 135.5,207.6 135.8,207.6 136,207.5 136.3,207.5 136.5,207.5 136.8,207.4 137,207.4 137.3,207.4 137.5,207.3 137.8,207.3 138,207.2 138.3,207.2 138.5,207.1 138.8,207 139,207 139.3,206.9 139.5,206.9 139.8,206.8 140,206.7 140.3,206.7 140.5,206.6 140.8,206.5 141,206.5 141.3,206.4 141.5,206.3 141.8,206.2 142,206.1 142.3,206.1 142.5,206 142.8,205.9 143,205.8 143.3,205.7 143.5,205.6 143.8,205.5 144,205.4 144.3,205.3 144.5,205.2 144.8,205.1 145,205 145.3,204.9 145.5,204.8 145.8,204.7 146,204.6 146.3,204.5 146.5,204.4 146.8,204.3 147,204.2 147.3,204 147.5,203.9 147.8,203.8 148,203.7 148.3,203.6 148.5,203.4 148.8,203.3 149,203.2 149.3,203.1 149.5,202.9 149.8,202.8 150,202.7 150.3,202.5 150.5,202.4 150.8,202.3 151,202.1 151.3,202 151.5,201.8 151.8,201.7 152,201.6 152.3,201.4 152.5,201.3 152.8,201.1 153,201 153.3,200.8 153.5,200.7 153.8,200.5 154,200.4 154.3,200.2 154.5,200.1 154.8,199.9 155,199.8 155.3,199.6 155.5,199.5 155.8,199.3 156,199.2 156.3,199 156.5,198.9 156.8,198.7 157,198.5 157.3,198.4 157.5,198.2 157.8,198.1 158,197.9 158.3,197.7 158.5,197.6 158.8,197.4 159,197.2 159.3,197.1 159.5,196.9 159.8,196.7 160,196.6 160.3,196.4 160.5,196.2 160.8,196.1 161,195.9 161.3,195.7 161.5,195.6 161.8,195.4 162,195.2 162.3,195.1 162.5,194.9 162.8,194.7 163,194.6 163.3,194.4 163.5,194.2 163.8,194.1 164,193.9 164.3,193.7 164.5,193.6 164.8,193.4 165,193.2 165.3,193.1 165.5,192.9 165.8,192.7 166,192.5 166.3,192.4 166.5,192.2 166.8,192 167,191.9 167.3,191.7 167.5,191.5 167.8,191.4 168,191.2 168.3,191.1 168.5,190.9 168.8,190.7 169,190.6 169.3,190.4 169.5,190.2 169.8,190.1 170,189.9 170.3,189.8 170.5,189.6 170.8,189.4 171,189.3 171.3,189.1 171.5,189 171.8,188.8 172,188.7 172.3,188.5 172.5,188.4 172.8,188.2 173,188.1 173.3,187.9 173.5,187.8 173.8,187.6 174,187.5 174.3,187.3 174.5,187.2 174.8,187 175,186.9 175.3,186.8 175.5,186.6 175.8,186.5 176,186.4 176.3,186.2 176.5,186.1 176.8,186 177,185.8 177.3,185.7 177.5,185.6 177.8,185.5 178,185.3 178.3,185.2 178.5,185.1 178.8,185 179,184.9 179.3,184.8 179.5,184.7 179.8,184.5 180,184.4 180.3,184.3 180.5,184.2 180.8,184.1 181,184 181.3,183.9 181.5,183.8 181.8,183.7 182,183.7 182.3,183.6 182.5,183.5 182.8,183.4 183,183.3 183.3,183.2 183.5,183.2 183.8,183.1 184,183 184.3,183 184.5,182.9 184.8,182.8 185,182.8 185.3,182.7 185.5,182.7 185.8,182.6 186,182.6 186.3,182.5 186.5,182.5 186.8,182.4 187,182.4 187.3,182.4 187.5,182.3 187.8,182.3 188,182.3 188.3,182.3 188.5,182.2 188.8,182.2 189,182.2 189.3,182.2 189.5,182.2 189.8,182.2 190,182.2 190.3,182.2 190.5,182.2 190.8,182.2 191,182.3 191.3,182.3 191.5,182.3 191.8,182.3 192,182.4 192.3,182.4 192.5,182.4 192.8,182.5 193,182.5 193.3,182.6 193.5,182.6 193.8,182.7 194,182.8 194.3,182.8 194.5,182.9 194.8,183 195,183 195.3,183.1 195.5,183.2 195.8,183.3 196,183.4 196.3,183.5 196.5,183.6 196.8,183.7 197,183.9 197.3,184 197.5,184.1 197.8,184.2 198,184.4 198.3,184.5 198.5,184.6 198.8,184.8 199,185 199.3,185.1 199.5,185.3 199.8,185.4 200,185.6 200.3,185.8 200.5,186 200.8,186.2 201,186.4 201.3,186.6 201.5,186.8 201.8,187 202,187.2 202.3,187.4 202.5,187.7 202.8,187.9 203,188.1 203.3,188.4 203.5,188.6 203.8,188.9 204,189.2 204.3,189.4 204.5,189.7 204.8,190 205,190.3 205.3,190.6 205.5,190.9 205.8,191.2 206,191.5 206.3,191.8 206.5,192.1 206.8,192.5 207,192.8 207.3,193.2 207.5,193.5 207.8,193.9 208,194.2 208.3,194.6 208.5,195 208.8,195.4 209,195.8 209.3,196.2 209.5,196.6 209.8,197 210,197.4 210.3,197.8 210.5,198.3 210.8,198.7 211,199.2 211.3,199.6 211.5,200.1 211.8,200.5 212,201 212.3,201.5 212.5,202 212.8,202.5 213,203 213.3,203.5 213.5,204.1 213.8,204.6 214,205.1 214.3,205.7 214.5,206.2 214.8,206.8 215,207.4 215.3,207.9 215.5,208.5 215.8,209.1 216,209.7 216.3,210.3 216.5,211 216.8,211.6 217,212.2 217.3,212.9 217.5,213.5 217.8,214.2 218,214.9 218.3,215.6 218.5,216.2 218.8,216.9 219,217.7 219.3,218.4 219.5,219.1 219.8,219.8 220,220.6 220.3,221.3 220.5,222.1 220.8,222.9 221,223.6 221.3,224.4 221.5,225.2 221.8,226.1 222,226.9 222.3,227.7 222.5,228.5 222.8,229.4 223,230.2 223.3,231.1 223.5,232 223.8,232.9 224,233.8 224.3,234.7 224.5,235.6 224.8,236.5 225,237.5 225.3,238.4 225.5,239.4 225.8,240.4 226,241.3 226.3,242.3 226.5,243.3 226.8,244.3 227,245.4 227.3,246.4 227.5,247.5 227.8,248.5 228,249.6 228.3,250.7 228.5,251.7 228.8,252.8 229,254 229.3,255.1 229.5,256.2 229.8,257.4 230,258.5 230.3,259.7 230.5,260.9 230.8,262.1 231,263.3 231.3,264.5 231.5,265.7 231.8,266.9 232,268.2 232.3,269.5 232.5,270.7 232.8,272 233,273.3 233.3,274.6 233.5,275.9 233.8,277.3 234,278.6 234.3,280 234.5,281.4 234.8,282.8 235,284.2 235.3,285.6 235.5,287 235.8,288.4 236,289.9 236.3,291.3 236.5,292.8 236.8,294.3 237,295.8 237.3,297.3 237.5,298.8 237.8,300.4 238,301.9 238.3,303.5 238.5,305.1 238.8,306.7 239,308.3 239.3,309.9 239.5,311.6 239.8,313.2 240,314.9 240.3,316.6 240.5,318.3 240.8,320 241,321.7 241.3,323.4 241.5,325.2 241.8,326.9 242,328.7 242.3,330.5 242.5,332.3 242.8,334.1 243,336 243.2,337.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="244.3,345.4 238,336.1 247.9,334.8" fill="currentColor"/>
  <line x1="46" y1="46" x2="250" y2="46" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="260,46 250,51 250,41" fill="currentColor"/>
  <line x1="246" y1="66" x2="246" y2="330" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="246,340 241,330 251,330" fill="currentColor"/>
  <circle cx="46" cy="66" r="4" fill="currentColor"/>
  <circle cx="46" cy="46" r="4" fill="currentColor"/>
  <circle cx="246" cy="66" r="4" fill="currentColor"/>
  <text x="186" y="37" font-size="13" fill="currentColor" text-anchor="middle">Domain</text>
  <text x="237" y="126" font-size="13" fill="currentColor" text-anchor="end">Range</text>
</svg>
</div>

We can observe that the graph extends horizontally from $-5$ to the right
without bound, so the domain is $[-5,\infty)$. The vertical extent of the
graph is all range values $5$ and below, so the range is $(-\infty,5]$. Note
that the domain and range are always written from smaller to larger values,
or from left to right for domain, and from the bottom of the graph to the top
of the graph for range.

**Example.** Find the domain and range of the function $f$ whose graph is
shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f from an open circle at (−3, 0), falling to a low point at (−2, −4), rising to a high point at (0, 0), then falling to a solid point at (1, −4).","xMin":-4,"xMax":2,"yMin":-6,"yMax":2,"unit":24,"tickLabels":true,"cubics":[{"a":-1,"b":-3,"c":0,"d":0,"from":-3,"to":1,"arrows":false}],"points":[{"at":[-3,0],"open":true},{"at":[1,-4]}],"texts":[{"at":[0.4,-2.4],"text":"f","italic":true}]}'>
<svg role="img" aria-label="The graph of f from an open circle at (−3, 0), falling to a low point at (−2, −4), rising to a high point at (0, 0), then falling to a solid point at (1, −4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 244" width="196" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="218" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="218" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="218" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="170" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="170" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="170" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="170" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="170" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="170" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="74" x2="172" y2="74" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,74 172,79 172,69" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,74 24,69 24,79" fill="currentColor"/>
  <polygon points="122,230 117,220 127,220" fill="currentColor"/>
  <text x="180" y="66" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="71" x2="26" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="89" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="71" x2="50" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="89" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="71" x2="74" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="89" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="71" x2="98" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="89" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="71" x2="146" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="89" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="71" x2="170" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="89" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="119" y1="218" x2="125" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="222" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="119" y1="146" x2="125" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="150" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="119" y1="122" x2="125" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="126" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <polyline points="50,74 50.3,76.2 50.5,78.4 50.8,80.6 51,82.8 51.3,84.9 51.5,86.9 51.8,89 52,91 52.3,93 52.5,95 52.8,96.9 53,98.8 53.3,100.7 53.5,102.5 53.8,104.3 54,106.1 54.3,107.9 54.5,109.6 54.8,111.3 55,113 55.3,114.6 55.5,116.2 55.8,117.8 56,119.4 56.3,120.9 56.5,122.4 56.8,123.9 57,125.3 57.3,126.8 57.5,128.2 57.8,129.5 58,130.9 58.3,132.2 58.5,133.5 58.8,134.8 59,136 59.3,137.2 59.5,138.4 59.8,139.6 60,140.7 60.3,141.9 60.5,142.9 60.8,144 61,145.1 61.3,146.1 61.5,147.1 61.8,148.1 62,149 62.3,149.9 62.5,150.8 62.8,151.7 63,152.6 63.3,153.4 63.5,154.2 63.8,155 64,155.8 64.3,156.5 64.5,157.2 64.8,157.9 65,158.6 65.3,159.3 65.5,159.9 65.8,160.5 66,161.1 66.3,161.7 66.5,162.2 66.8,162.8 67,163.3 67.3,163.8 67.5,164.2 67.8,164.7 68,165.1 68.3,165.5 68.5,165.9 68.8,166.3 69,166.7 69.3,167 69.5,167.3 69.8,167.6 70,167.9 70.3,168.2 70.5,168.4 70.8,168.6 71,168.8 71.3,169 71.5,169.2 71.8,169.3 72,169.5 72.3,169.6 72.5,169.7 72.8,169.8 73,169.9 73.3,169.9 73.5,170 73.8,170 74,170 74.3,170 74.5,170 74.8,169.9 75,169.9 75.3,169.8 75.5,169.7 75.8,169.6 76,169.5 76.3,169.4 76.5,169.2 76.8,169.1 77,168.9 77.3,168.7 77.5,168.5 77.8,168.3 78,168.1 78.3,167.9 78.5,167.6 78.8,167.4 79,167.1 79.3,166.8 79.5,166.5 79.8,166.2 80,165.9 80.3,165.5 80.5,165.2 80.8,164.8 81,164.5 81.3,164.1 81.5,163.7 81.8,163.3 82,162.9 82.3,162.5 82.5,162 82.8,161.6 83,161.1 83.3,160.7 83.5,160.2 83.8,159.7 84,159.2 84.3,158.7 84.5,158.2 84.8,157.7 85,157.2 85.3,156.7 85.5,156.1 85.8,155.6 86,155 86.3,154.4 86.5,153.9 86.8,153.3 87,152.7 87.3,152.1 87.5,151.5 87.8,150.9 88,150.3 88.3,149.6 88.5,149 88.8,148.4 89,147.7 89.3,147.1 89.5,146.4 89.8,145.8 90,145.1 90.3,144.4 90.5,143.8 90.8,143.1 91,142.4 91.3,141.7 91.5,141 91.8,140.3 92,139.6 92.3,138.9 92.5,138.2 92.8,137.5 93,136.8 93.3,136.1 93.5,135.3 93.8,134.6 94,133.9 94.3,133.2 94.5,132.4 94.8,131.7 95,131 95.3,130.2 95.5,129.5 95.8,128.7 96,128 96.3,127.2 96.5,126.5 96.8,125.7 97,125 97.3,124.2 97.5,123.5 97.8,122.7 98,122 98.3,121.3 98.5,120.5 98.8,119.8 99,119 99.3,118.3 99.5,117.5 99.8,116.8 100,116 100.3,115.3 100.5,114.5 100.8,113.8 101,113 101.3,112.3 101.5,111.6 101.8,110.8 102,110.1 102.3,109.4 102.5,108.7 102.8,107.9 103,107.2 103.3,106.5 103.5,105.8 103.8,105.1 104,104.4 104.3,103.7 104.5,103 104.8,102.3 105,101.6 105.3,100.9 105.5,100.2 105.8,99.6 106,98.9 106.3,98.2 106.5,97.6 106.8,96.9 107,96.3 107.3,95.6 107.5,95 107.8,94.4 108,93.7 108.3,93.1 108.5,92.5 108.8,91.9 109,91.3 109.3,90.7 109.5,90.1 109.8,89.6 110,89 110.3,88.4 110.5,87.9 110.8,87.3 111,86.8 111.3,86.3 111.5,85.8 111.8,85.3 112,84.8 112.3,84.3 112.5,83.8 112.8,83.3 113,82.9 113.3,82.4 113.5,82 113.8,81.5 114,81.1 114.3,80.7 114.5,80.3 114.8,79.9 115,79.5 115.3,79.2 115.5,78.8 115.8,78.5 116,78.1 116.3,77.8 116.5,77.5 116.8,77.2 117,76.9 117.3,76.6 117.5,76.4 117.8,76.1 118,75.9 118.3,75.7 118.5,75.5 118.8,75.3 119,75.1 119.3,74.9 119.5,74.8 119.8,74.6 120,74.5 120.3,74.4 120.5,74.3 120.8,74.2 121,74.1 121.3,74.1 121.5,74 121.8,74 122,74 122.3,74 122.5,74 122.8,74.1 123,74.1 123.3,74.2 123.5,74.3 123.8,74.4 124,74.5 124.3,74.7 124.5,74.8 124.8,75 125,75.2 125.3,75.4 125.5,75.6 125.8,75.8 126,76.1 126.3,76.4 126.5,76.7 126.8,77 127,77.3 127.3,77.7 127.5,78.1 127.8,78.5 128,78.9 128.3,79.3 128.5,79.8 128.8,80.2 129,80.7 129.3,81.2 129.5,81.8 129.8,82.3 130,82.9 130.3,83.5 130.5,84.1 130.8,84.7 131,85.4 131.3,86.1 131.5,86.8 131.8,87.5 132,88.2 132.3,89 132.5,89.8 132.8,90.6 133,91.4 133.3,92.3 133.5,93.2 133.8,94.1 134,95 134.3,95.9 134.5,96.9 134.8,97.9 135,98.9 135.3,100 135.5,101.1 135.8,102.1 136,103.3 136.3,104.4 136.5,105.6 136.8,106.8 137,108 137.3,109.2 137.5,110.5 137.8,111.8 138,113.1 138.3,114.5 138.5,115.8 138.8,117.2 139,118.7 139.3,120.1 139.5,121.6 139.8,123.1 140,124.6 140.3,126.2 140.5,127.8 140.8,129.4 141,131 141.3,132.7 141.5,134.4 141.8,136.1 142,137.9 142.3,139.7 142.5,141.5 142.8,143.3 143,145.2 143.3,147.1 143.5,149 143.8,151 144,153 144.3,155 144.5,157.1 144.8,159.1 145,161.2 145.3,163.4 145.5,165.6 145.8,167.8 146,170" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="50" cy="74" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="146" cy="170" r="4" fill="currentColor"/>
  <text x="131.6" y="131.6" font-size="13" fill="currentColor" font-style="italic">f</text>
</svg>
</div>

**Solution.** We can observe that the horizontal extent of the graph is $-3$
to 1, so the domain of $f$ is $(-3,1]$.

The vertical extent of the graph is 0 to $-4$, so the range is $[-4,0]$. The
graph below marks both.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same graph of f with its extent marked: a horizontal segment at height 1 from an open circle above x = −3 to a solid dot above x = 1 shows the domain, and a vertical segment at x = 1.6 from a solid dot at height 0 down to a solid dot at height −4 shows the range.","xMin":-4,"xMax":3,"yMin":-6,"yMax":2,"unit":24,"tickLabels":true,"cubics":[{"a":-1,"b":-3,"c":0,"d":0,"from":-3,"to":1,"arrows":false}],"points":[{"at":[-3,0],"open":true},{"at":[1,-4]},{"at":[-3,1],"open":true},{"at":[1,1]},{"at":[1.8,0]},{"at":[1.8,-4]}],"segments":[{"from":[-3,1],"to":[1,1]},{"from":[1.8,0],"to":[1.8,-4]}],"texts":[{"at":[-1.6,1],"text":"Domain","dy":-10,"anchor":"middle"},{"at":[2,-2],"text":"Range","dx":4}]}'>
<svg role="img" aria-label="The same graph of f with its extent marked: a horizontal segment at height 1 from an open circle above x = −3 to a solid dot above x = 1 shows the domain, and a vertical segment at x = 1.6 from a solid dot at height 0 down to a solid dot at height −4 shows the range." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 244" width="220" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="218" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="218" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="218" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="218" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="194" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="194" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="194" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="194" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="194" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="194" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="194" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="74" x2="196" y2="74" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="206,74 196,79 196,69" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,74 24,69 24,79" fill="currentColor"/>
  <polygon points="122,230 117,220 127,220" fill="currentColor"/>
  <text x="204" y="66" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="71" x2="26" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="89" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="71" x2="50" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="89" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="71" x2="74" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="89" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="71" x2="98" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="89" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="71" x2="146" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="89" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="71" x2="170" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="89" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="71" x2="194" y2="77" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="89" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="119" y1="218" x2="125" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="222" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="119" y1="146" x2="125" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="150" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="119" y1="122" x2="125" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="126" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <polyline points="50,74 50.3,76.2 50.5,78.4 50.8,80.6 51,82.8 51.3,84.9 51.5,86.9 51.8,89 52,91 52.3,93 52.5,95 52.8,96.9 53,98.8 53.3,100.7 53.5,102.5 53.8,104.3 54,106.1 54.3,107.9 54.5,109.6 54.8,111.3 55,113 55.3,114.6 55.5,116.2 55.8,117.8 56,119.4 56.3,120.9 56.5,122.4 56.8,123.9 57,125.3 57.3,126.8 57.5,128.2 57.8,129.5 58,130.9 58.3,132.2 58.5,133.5 58.8,134.8 59,136 59.3,137.2 59.5,138.4 59.8,139.6 60,140.7 60.3,141.9 60.5,142.9 60.8,144 61,145.1 61.3,146.1 61.5,147.1 61.8,148.1 62,149 62.3,149.9 62.5,150.8 62.8,151.7 63,152.6 63.3,153.4 63.5,154.2 63.8,155 64,155.8 64.3,156.5 64.5,157.2 64.8,157.9 65,158.6 65.3,159.3 65.5,159.9 65.8,160.5 66,161.1 66.3,161.7 66.5,162.2 66.8,162.8 67,163.3 67.3,163.8 67.5,164.2 67.8,164.7 68,165.1 68.3,165.5 68.5,165.9 68.8,166.3 69,166.7 69.3,167 69.5,167.3 69.8,167.6 70,167.9 70.3,168.2 70.5,168.4 70.8,168.6 71,168.8 71.3,169 71.5,169.2 71.8,169.3 72,169.5 72.3,169.6 72.5,169.7 72.8,169.8 73,169.9 73.3,169.9 73.5,170 73.8,170 74,170 74.3,170 74.5,170 74.8,169.9 75,169.9 75.3,169.8 75.5,169.7 75.8,169.6 76,169.5 76.3,169.4 76.5,169.2 76.8,169.1 77,168.9 77.3,168.7 77.5,168.5 77.8,168.3 78,168.1 78.3,167.9 78.5,167.6 78.8,167.4 79,167.1 79.3,166.8 79.5,166.5 79.8,166.2 80,165.9 80.3,165.5 80.5,165.2 80.8,164.8 81,164.5 81.3,164.1 81.5,163.7 81.8,163.3 82,162.9 82.3,162.5 82.5,162 82.8,161.6 83,161.1 83.3,160.7 83.5,160.2 83.8,159.7 84,159.2 84.3,158.7 84.5,158.2 84.8,157.7 85,157.2 85.3,156.7 85.5,156.1 85.8,155.6 86,155 86.3,154.4 86.5,153.9 86.8,153.3 87,152.7 87.3,152.1 87.5,151.5 87.8,150.9 88,150.3 88.3,149.6 88.5,149 88.8,148.4 89,147.7 89.3,147.1 89.5,146.4 89.8,145.8 90,145.1 90.3,144.4 90.5,143.8 90.8,143.1 91,142.4 91.3,141.7 91.5,141 91.8,140.3 92,139.6 92.3,138.9 92.5,138.2 92.8,137.5 93,136.8 93.3,136.1 93.5,135.3 93.8,134.6 94,133.9 94.3,133.2 94.5,132.4 94.8,131.7 95,131 95.3,130.2 95.5,129.5 95.8,128.7 96,128 96.3,127.2 96.5,126.5 96.8,125.7 97,125 97.3,124.2 97.5,123.5 97.8,122.7 98,122 98.3,121.3 98.5,120.5 98.8,119.8 99,119 99.3,118.3 99.5,117.5 99.8,116.8 100,116 100.3,115.3 100.5,114.5 100.8,113.8 101,113 101.3,112.3 101.5,111.6 101.8,110.8 102,110.1 102.3,109.4 102.5,108.7 102.8,107.9 103,107.2 103.3,106.5 103.5,105.8 103.8,105.1 104,104.4 104.3,103.7 104.5,103 104.8,102.3 105,101.6 105.3,100.9 105.5,100.2 105.8,99.6 106,98.9 106.3,98.2 106.5,97.6 106.8,96.9 107,96.3 107.3,95.6 107.5,95 107.8,94.4 108,93.7 108.3,93.1 108.5,92.5 108.8,91.9 109,91.3 109.3,90.7 109.5,90.1 109.8,89.6 110,89 110.3,88.4 110.5,87.9 110.8,87.3 111,86.8 111.3,86.3 111.5,85.8 111.8,85.3 112,84.8 112.3,84.3 112.5,83.8 112.8,83.3 113,82.9 113.3,82.4 113.5,82 113.8,81.5 114,81.1 114.3,80.7 114.5,80.3 114.8,79.9 115,79.5 115.3,79.2 115.5,78.8 115.8,78.5 116,78.1 116.3,77.8 116.5,77.5 116.8,77.2 117,76.9 117.3,76.6 117.5,76.4 117.8,76.1 118,75.9 118.3,75.7 118.5,75.5 118.8,75.3 119,75.1 119.3,74.9 119.5,74.8 119.8,74.6 120,74.5 120.3,74.4 120.5,74.3 120.8,74.2 121,74.1 121.3,74.1 121.5,74 121.8,74 122,74 122.3,74 122.5,74 122.8,74.1 123,74.1 123.3,74.2 123.5,74.3 123.8,74.4 124,74.5 124.3,74.7 124.5,74.8 124.8,75 125,75.2 125.3,75.4 125.5,75.6 125.8,75.8 126,76.1 126.3,76.4 126.5,76.7 126.8,77 127,77.3 127.3,77.7 127.5,78.1 127.8,78.5 128,78.9 128.3,79.3 128.5,79.8 128.8,80.2 129,80.7 129.3,81.2 129.5,81.8 129.8,82.3 130,82.9 130.3,83.5 130.5,84.1 130.8,84.7 131,85.4 131.3,86.1 131.5,86.8 131.8,87.5 132,88.2 132.3,89 132.5,89.8 132.8,90.6 133,91.4 133.3,92.3 133.5,93.2 133.8,94.1 134,95 134.3,95.9 134.5,96.9 134.8,97.9 135,98.9 135.3,100 135.5,101.1 135.8,102.1 136,103.3 136.3,104.4 136.5,105.6 136.8,106.8 137,108 137.3,109.2 137.5,110.5 137.8,111.8 138,113.1 138.3,114.5 138.5,115.8 138.8,117.2 139,118.7 139.3,120.1 139.5,121.6 139.8,123.1 140,124.6 140.3,126.2 140.5,127.8 140.8,129.4 141,131 141.3,132.7 141.5,134.4 141.8,136.1 142,137.9 142.3,139.7 142.5,141.5 142.8,143.3 143,145.2 143.3,147.1 143.5,149 143.8,151 144,153 144.3,155 144.5,157.1 144.8,159.1 145,161.2 145.3,163.4 145.5,165.6 145.8,167.8 146,170" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <line x1="50" y1="50" x2="146" y2="50" stroke="currentColor" stroke-width="1.4"/>
  <line x1="165.2" y1="74" x2="165.2" y2="170" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="50" cy="74" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="146" cy="170" r="4" fill="currentColor"/>
  <circle cx="50" cy="50" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="146" cy="50" r="4" fill="currentColor"/>
  <circle cx="165.2" cy="74" r="4" fill="currentColor"/>
  <circle cx="165.2" cy="170" r="4" fill="currentColor"/>
  <text x="83.6" y="40" font-size="13" fill="currentColor" text-anchor="middle">Domain</text>
  <text x="174" y="122" font-size="13" fill="currentColor">Range</text>
</svg>
</div>

**Example.** Find the domain and range of the function $f$ whose graph is
shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A line graph titled Alaska Crude Oil Production. The horizontal axis is the year from 1973 to 2008 and the vertical axis is thousand barrels per day from 0 to 2,200. Production sits near 200 through 1976, climbs steeply to about 1,600 by 1980, drifts up to a peak of about 2,010 in 1988, then declines steadily to about 680 in 2008.","xMin":1973,"xMax":2008,"yMin":0,"yMax":2200,"xUnit":8,"yUnit":0.1,"margin":46,"xGridStep":5,"yGridStep":200,"tickLabels":true,"xTickStep":5,"yTickStep":400,"xTickGrouping":false,"xLabel":"t","yLabel":"b","maxWidth":360,"polylines":[{"through":[[1973,215],[1974,195],[1975,190],[1976,180],[1977,465],[1978,1230],[1979,1400],[1980,1610],[1981,1610],[1982,1690],[1983,1710],[1984,1720],[1985,1830],[1986,1870],[1987,1960],[1988,2010],[1989,1870],[1990,1780],[1991,1800],[1992,1710],[1993,1590],[1994,1580],[1995,1490],[1996,1400],[1997,1300],[1998,1180],[1999,1050],[2000,970],[2001,980],[2002,980],[2003,940],[2004,880],[2005,830],[2006,740],[2007,720],[2008,680]]}]}'>
<svg role="img" aria-label="A line graph titled Alaska Crude Oil Production. The horizontal axis is the year from 1973 to 2008 and the vertical axis is thousand barrels per day from 0 to 2,200. Production sits near 200 through 1976, climbs steeply to about 1,600 by 1980, drifts up to a peak of about 2,010 in 1988, then declines steadily to about 680 in 2008." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 312" width="372" height="312" font-family="Helvetica, Arial, sans-serif">
  <line x1="46" y1="266" x2="46" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="266" x2="206" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="266" x2="246" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="266" x2="286" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="266" x2="326" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="326" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="246" x2="326" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="226" x2="326" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="206" x2="326" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="186" x2="326" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="166" x2="326" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="146" x2="326" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="126" x2="326" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="106" x2="326" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="86" x2="326" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="66" x2="326" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="46" x2="326" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="328" y2="266" stroke="currentColor" stroke-width="1"/>
  <line x1="46" y1="44" x2="46" y2="266" stroke="currentColor" stroke-width="1"/>
  <polygon points="338,266 328,271 328,261" fill="currentColor"/>
  <polygon points="46,34 51,44 41,44" fill="currentColor"/>
  <text x="336" y="258" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="54" y="44" font-size="13" fill="currentColor" font-style="italic">b</text>
  <line x1="62" y1="263" x2="62" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="281" font-size="11" fill="currentColor" text-anchor="middle">1975</text>
  <line x1="102" y1="263" x2="102" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="102" y="281" font-size="11" fill="currentColor" text-anchor="middle">1980</text>
  <line x1="142" y1="263" x2="142" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="142" y="281" font-size="11" fill="currentColor" text-anchor="middle">1985</text>
  <line x1="182" y1="263" x2="182" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="281" font-size="11" fill="currentColor" text-anchor="middle">1990</text>
  <line x1="222" y1="263" x2="222" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="222" y="281" font-size="11" fill="currentColor" text-anchor="middle">1995</text>
  <line x1="262" y1="263" x2="262" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="262" y="281" font-size="11" fill="currentColor" text-anchor="middle">2000</text>
  <line x1="302" y1="263" x2="302" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="302" y="281" font-size="11" fill="currentColor" text-anchor="middle">2005</text>
  <line x1="43" y1="266" x2="49" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="270" font-size="11" fill="currentColor" text-anchor="end">0</text>
  <line x1="43" y1="226" x2="49" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="230" font-size="11" fill="currentColor" text-anchor="end">400</text>
  <line x1="43" y1="186" x2="49" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="190" font-size="11" fill="currentColor" text-anchor="end">800</text>
  <line x1="43" y1="146" x2="49" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="150" font-size="11" fill="currentColor" text-anchor="end">1,200</text>
  <line x1="43" y1="106" x2="49" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="110" font-size="11" fill="currentColor" text-anchor="end">1,600</text>
  <line x1="43" y1="66" x2="49" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="40" y="70" font-size="11" fill="currentColor" text-anchor="end">2,000</text>
  <polyline points="46,244.5 54,246.5 62,247 70,248 78,219.5 86,143 94,126 102,105 110,105 118,97 126,95 134,94 142,83 150,79 158,70 166,65 174,79 182,88 190,86 198,95 206,107 214,108 222,117 230,126 238,136 246,148 254,161 262,169 270,168 278,168 286,172 294,178 302,183 310,192 318,194 326,198" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"A line graph titled World Population Increase. The horizontal axis is the year from 1950 to 2002 and the vertical axis is millions of people from 0 to 100. The curve rises from about 47 million in 1950 to about 75 million by 1966, levels off near 74 to 76 million through the mid-1970s, rises to a peak of about 89 million in 1985, then eases back to about 76 million by 2002.","xMin":1950,"xMax":2002,"yMin":0,"yMax":100,"xUnit":5.4,"yUnit":2.2,"margin":34,"xGridStep":10,"yGridStep":10,"tickLabels":true,"xTickStep":10,"yTickStep":20,"xTickGrouping":false,"xLabel":"t","yLabel":"P","maxWidth":360,"smoothCurves":[{"freeform":true,"through":[[1950,47],[1955,53],[1960,56],[1963,63],[1966,74],[1970,76],[1975,74],[1980,81],[1985,89],[1990,84],[1995,80],[2002,76]]}]}'>
<svg role="img" aria-label="A line graph titled World Population Increase. The horizontal axis is the year from 1950 to 2002 and the vertical axis is millions of people from 0 to 100. The curve rises from about 47 million in 1950 to about 75 million by 1966, levels off near 74 to 76 million through the mid-1970s, rises to a peak of about 89 million in 1985, then eases back to about 76 million by 2002." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.8 288" width="348.8" height="288" font-family="Helvetica, Arial, sans-serif">
  <line x1="34" y1="254" x2="34" y2="34" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="88" y1="254" x2="88" y2="34" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="142" y1="254" x2="142" y2="34" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="196" y1="254" x2="196" y2="34" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="250" y1="254" x2="250" y2="34" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="304" y1="254" x2="304" y2="34" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="254" x2="314.8" y2="254" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="232" x2="314.8" y2="232" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="210" x2="314.8" y2="210" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="188" x2="314.8" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="166" x2="314.8" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="144" x2="314.8" y2="144" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="122" x2="314.8" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="100" x2="314.8" y2="100" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="78" x2="314.8" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="56" x2="314.8" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="34" x2="314.8" y2="34" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="34" y1="254" x2="316.8" y2="254" stroke="currentColor" stroke-width="1"/>
  <line x1="34" y1="32" x2="34" y2="254" stroke="currentColor" stroke-width="1"/>
  <polygon points="326.8,254 316.8,259 316.8,249" fill="currentColor"/>
  <polygon points="34,22 39,32 29,32" fill="currentColor"/>
  <text x="324.8" y="246" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">t</text>
  <text x="42" y="32" font-size="13" fill="currentColor" font-style="italic">P</text>
  <line x1="34" y1="251" x2="34" y2="257" stroke="currentColor" stroke-width="1"/>
  <text x="34" y="269" font-size="11" fill="currentColor" text-anchor="middle">1950</text>
  <line x1="88" y1="251" x2="88" y2="257" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="269" font-size="11" fill="currentColor" text-anchor="middle">1960</text>
  <line x1="142" y1="251" x2="142" y2="257" stroke="currentColor" stroke-width="1"/>
  <text x="142" y="269" font-size="11" fill="currentColor" text-anchor="middle">1970</text>
  <line x1="196" y1="251" x2="196" y2="257" stroke="currentColor" stroke-width="1"/>
  <text x="196" y="269" font-size="11" fill="currentColor" text-anchor="middle">1980</text>
  <line x1="250" y1="251" x2="250" y2="257" stroke="currentColor" stroke-width="1"/>
  <text x="250" y="269" font-size="11" fill="currentColor" text-anchor="middle">1990</text>
  <line x1="304" y1="251" x2="304" y2="257" stroke="currentColor" stroke-width="1"/>
  <text x="304" y="269" font-size="11" fill="currentColor" text-anchor="middle">2000</text>
  <line x1="31" y1="254" x2="37" y2="254" stroke="currentColor" stroke-width="1"/>
  <text x="28" y="258" font-size="11" fill="currentColor" text-anchor="end">0</text>
  <line x1="31" y1="210" x2="37" y2="210" stroke="currentColor" stroke-width="1"/>
  <text x="28" y="214" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="31" y1="166" x2="37" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="28" y="170" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="31" y1="122" x2="37" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="28" y="126" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <line x1="31" y1="78" x2="37" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="28" y="82" font-size="11" fill="currentColor" text-anchor="end">80</text>
  <line x1="31" y1="34" x2="37" y2="34" stroke="currentColor" stroke-width="1"/>
  <text x="28" y="38" font-size="11" fill="currentColor" text-anchor="end">100</text>
  <path d="M 34 150.6 C 43 146.2 52 140.3 61 137.4 C 70 134.5 79 134.5 88 130.8 C 93.4 128.6 98.8 121.7 104.2 115.4 C 109.6 109.1 115 93.2 120.4 91.2 C 127.6 88.5 134.8 86.8 142 86.8 C 151 86.8 160 91.2 169 91.2 C 178 91.2 187 81.3 196 75.8 C 205 70.3 214 58.2 223 58.2 C 232 58.2 241 65.9 250 69.2 C 259 72.5 268 75.5 277 78 C 289.6 81.5 302.2 83.9 314.8 86.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
</div>

{{< multiplechoice
  question="Using the World Population Increase graph above, identify the domain using interval notation."
  answer="$[1950,2002]$"
  hint="The domain is the horizontal extent of the graph, read off the year axis."
>}}
$[1950,2002]$
$[0,100]$
$[47,89]$
$[1950,2000]$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Using the same graph, identify the range using interval notation, in people."
  answer="$[47{,}000{,}000,\,89{,}000{,}000]$"
  hint="The range is the vertical extent; remember the axis is labeled in millions of people."
>}}
$[47{,}000{,}000,\,89{,}000{,}000]$
$[0,100{,}000{,}000]$
$[47,89]$
$[1950,2002]$
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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the constant function f of x equals c: a horizontal line, drawn here above the x-axis, extending with arrows in both directions.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","lines":[{"y":2,"label":"f(x) = c","labelSide":"left","labelAt":0.7}]}'>
<svg role="img" aria-label="The graph of the constant function f of x equals c: a horizontal line, drawn here above the x-axis, extending with arrows in both directions." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="30" y1="62" x2="166" y2="62" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,62 166,67 166,57" fill="currentColor"/>
  <polygon points="20,62 30,57 30,67" fill="currentColor"/>
  <text x="129.2" y="50" font-size="13" fill="currentColor" text-anchor="middle">f(x) = c</text>
</svg>
</div>

For the constant function $f(x)=c$, the domain consists of all real numbers;
there are no restrictions on the input. The only output value is the constant
$c$, so the range is the set $\{c\}$ that contains this single element. In
interval notation, this is written as $[c,c]$, the interval that both begins
and ends with $c$. Domain: $(-\infty,\infty)$. Range: $[c,c]$.

**Identity function** — $f(x)=x$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the identity function f of x equals x: a straight line through the origin rising at 45 degrees.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","lines":[{"slope":1,"intercept":0}]}'>
<svg role="img" aria-label="The graph of the identity function f of x equals x: a straight line through the origin rising at 45 degrees." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="27.1" y1="168.9" x2="168.9" y2="27.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="176,20 172.5,30.6 165.4,23.5" fill="currentColor"/>
  <polygon points="20,176 23.5,165.4 30.6,172.5" fill="currentColor"/>
</svg>
</div>

For the identity function $f(x)=x$, there is no restriction on $x$. Both the
domain and range are the set of all real numbers. Domain:
$(-\infty,\infty)$. Range: $(-\infty,\infty)$.

**Absolute value function** — $f(x)=\lvert x\rvert$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the absolute value function f of x equals the absolute value of x: a V shape with its corner at the origin, rising to the left and to the right.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","polylines":[{"through":[[-4,4],[0,0],[4,4]],"arrows":true}]}'>
<svg role="img" aria-label="The graph of the absolute value function f of x equals the absolute value of x: a V shape with its corner at the origin, rising to the left and to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="31.7,31.7 98,98 164.3,31.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,26 36.6,29.5 29.5,36.6" fill="currentColor"/>
  <polygon points="170,26 166.5,36.6 159.4,29.5" fill="currentColor"/>
</svg>
</div>

For the absolute value function $f(x)=\lvert x\rvert$, there is no
restriction on $x$. However, because absolute value is defined as a distance
from 0, the output can only be greater than or equal to 0. Domain:
$(-\infty,\infty)$. Range: $[0,\infty)$.

**Quadratic function** — $f(x)=x^2$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the quadratic function f of x equals x squared: an upward-opening parabola with its vertex at the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","quadratics":[{"a":1}]}'>
<svg role="img" aria-label="The graph of the quadratic function f of x equals x squared: an upward-opening parabola with its vertex at the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="64,33.7 64,33.8 64.3,34.7 64.5,35.7 64.8,36.6 65,37.5 65.3,38.4 65.5,39.3 65.8,40.2 66,41.1 66.3,42 66.5,42.9 66.8,43.7 67,44.6 67.3,45.5 67.5,46.3 67.8,47.2 68,48 68.3,48.8 68.5,49.7 68.8,50.5 69,51.3 69.3,52.1 69.5,52.9 69.8,53.7 70,54.4 70.3,55.2 70.5,56 70.8,56.7 71,57.5 71.3,58.2 71.5,59 71.8,59.7 72,60.4 72.3,61.2 72.5,61.9 72.8,62.6 73,63.3 73.3,64 73.5,64.7 73.8,65.3 74,66 74.3,66.7 74.5,67.3 74.8,68 75,68.6 75.3,69.2 75.5,69.9 75.8,70.5 76,71.1 76.3,71.7 76.5,72.3 76.8,72.9 77,73.5 77.3,74.1 77.5,74.7 77.8,75.2 78,75.8 78.3,76.3 78.5,76.9 78.8,77.4 79,77.9 79.3,78.5 79.5,79 79.8,79.5 80,80 80.3,80.5 80.5,81 80.8,81.5 81,81.9 81.3,82.4 81.5,82.9 81.8,83.3 82,83.8 82.3,84.2 82.5,84.7 82.8,85.1 83,85.5 83.3,85.9 83.5,86.3 83.8,86.7 84,87.1 84.3,87.5 84.5,87.9 84.8,88.2 85,88.6 85.3,89 85.5,89.3 85.8,89.7 86,90 86.3,90.3 86.5,90.7 86.8,91 87,91.3 87.3,91.6 87.5,91.9 87.8,92.2 88,92.4 88.3,92.7 88.5,93 88.8,93.2 89,93.5 89.3,93.7 89.5,94 89.8,94.2 90,94.4 90.3,94.7 90.5,94.9 90.8,95.1 91,95.3 91.3,95.5 91.5,95.7 91.8,95.8 92,96 92.3,96.2 92.5,96.3 92.8,96.5 93,96.6 93.3,96.7 93.5,96.9 93.8,97 94,97.1 94.3,97.2 94.5,97.3 94.8,97.4 95,97.5 95.3,97.6 95.5,97.7 95.8,97.7 96,97.8 96.3,97.8 96.5,97.9 96.8,97.9 97,97.9 97.3,98 97.5,98 97.8,98 98,98 98.3,98 98.5,98 98.8,98 99,97.9 99.3,97.9 99.5,97.9 99.8,97.8 100,97.8 100.3,97.7 100.5,97.7 100.8,97.6 101,97.5 101.3,97.4 101.5,97.3 101.8,97.2 102,97.1 102.3,97 102.5,96.9 102.8,96.7 103,96.6 103.3,96.5 103.5,96.3 103.8,96.2 104,96 104.3,95.8 104.5,95.7 104.8,95.5 105,95.3 105.3,95.1 105.5,94.9 105.8,94.7 106,94.4 106.3,94.2 106.5,94 106.8,93.7 107,93.5 107.3,93.2 107.5,93 107.8,92.7 108,92.4 108.3,92.2 108.5,91.9 108.8,91.6 109,91.3 109.3,91 109.5,90.7 109.8,90.3 110,90 110.3,89.7 110.5,89.3 110.8,89 111,88.6 111.3,88.2 111.5,87.9 111.8,87.5 112,87.1 112.3,86.7 112.5,86.3 112.8,85.9 113,85.5 113.3,85.1 113.5,84.7 113.8,84.2 114,83.8 114.3,83.3 114.5,82.9 114.8,82.4 115,81.9 115.3,81.5 115.5,81 115.8,80.5 116,80 116.3,79.5 116.5,79 116.8,78.5 117,77.9 117.3,77.4 117.5,76.9 117.8,76.3 118,75.8 118.3,75.2 118.5,74.7 118.8,74.1 119,73.5 119.3,72.9 119.5,72.3 119.8,71.7 120,71.1 120.3,70.5 120.5,69.9 120.8,69.2 121,68.6 121.3,68 121.5,67.3 121.8,66.7 122,66 122.3,65.3 122.5,64.7 122.8,64 123,63.3 123.3,62.6 123.5,61.9 123.8,61.2 124,60.4 124.3,59.7 124.5,59 124.8,58.2 125,57.5 125.3,56.7 125.5,56 125.8,55.2 126,54.4 126.3,53.7 126.5,52.9 126.8,52.1 127,51.3 127.3,50.5 127.5,49.7 127.8,48.8 128,48 128.3,47.2 128.5,46.3 128.8,45.5 129,44.6 129.3,43.7 129.5,42.9 129.8,42 130,41.1 130.3,40.2 130.5,39.3 130.8,38.4 131,37.5 131.3,36.6 131.5,35.7 131.8,34.7 132,33.8 132,33.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="62,26 69.3,34.4 59.6,36.9" fill="currentColor"/>
  <polygon points="134,26 136.4,36.9 126.7,34.4" fill="currentColor"/>
</svg>
</div>

For the quadratic function $f(x)=x^2$, the domain is all real numbers since
the horizontal extent of the graph is the whole real number line. Because the
graph does not include any negative values for the range, the range is only
nonnegative real numbers. Domain: $(-\infty,\infty)$. Range: $[0,\infty)$.

**Cubic function** — $f(x)=x^3$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the cubic function f of x equals x cubed: an S-shaped curve through the origin, falling to the lower left and rising to the upper right.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","cubics":[{"a":1}]}'>
<svg role="img" aria-label="The graph of the cubic function f of x equals x cubed: an S-shaped curve through the origin, falling to the lower left and rising to the upper right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="70.6,161.5 70.8,160.5 71,158.8 71.3,157.1 71.5,155.4 71.8,153.8 72,152.2 72.3,150.7 72.5,149.2 72.8,147.7 73,146.2 73.3,144.8 73.5,143.4 73.8,142 74,140.7 74.3,139.3 74.5,138.1 74.8,136.8 75,135.6 75.3,134.3 75.5,133.2 75.8,132 76,130.9 76.3,129.8 76.5,128.7 76.8,127.6 77,126.6 77.3,125.6 77.5,124.6 77.8,123.6 78,122.7 78.3,121.8 78.5,120.9 78.8,120 79,119.2 79.3,118.3 79.5,117.5 79.8,116.8 80,116 80.3,115.3 80.5,114.5 80.8,113.8 81,113.2 81.3,112.5 81.5,111.9 81.8,111.2 82,110.6 82.3,110.1 82.5,109.5 82.8,108.9 83,108.4 83.3,107.9 83.5,107.4 83.8,106.9 84,106.5 84.3,106 84.5,105.6 84.8,105.2 85,104.8 85.3,104.4 85.5,104 85.8,103.7 86,103.3 86.3,103 86.5,102.7 86.8,102.4 87,102.1 87.3,101.8 87.5,101.6 87.8,101.3 88,101.1 88.3,100.9 88.5,100.6 88.8,100.4 89,100.3 89.3,100.1 89.5,99.9 89.8,99.7 90,99.6 90.3,99.4 90.5,99.3 90.8,99.2 91,99.1 91.3,98.9 91.5,98.8 91.8,98.8 92,98.7 92.3,98.6 92.5,98.5 92.8,98.4 93,98.4 93.3,98.3 93.5,98.3 93.8,98.2 94,98.2 94.3,98.2 94.5,98.1 94.8,98.1 95,98.1 95.3,98.1 95.5,98 95.8,98 96,98 96.3,98 96.5,98 96.8,98 97,98 97.3,98 97.5,98 97.8,98 98,98 98.3,98 98.5,98 98.8,98 99,98 99.3,98 99.5,98 99.8,98 100,98 100.3,98 100.5,98 100.8,97.9 101,97.9 101.3,97.9 101.5,97.9 101.8,97.8 102,97.8 102.3,97.8 102.5,97.7 102.8,97.7 103,97.6 103.3,97.6 103.5,97.5 103.8,97.4 104,97.3 104.3,97.2 104.5,97.2 104.8,97.1 105,96.9 105.3,96.8 105.5,96.7 105.8,96.6 106,96.4 106.3,96.3 106.5,96.1 106.8,95.9 107,95.8 107.3,95.6 107.5,95.4 107.8,95.1 108,94.9 108.3,94.7 108.5,94.4 108.8,94.2 109,93.9 109.3,93.6 109.5,93.3 109.8,93 110,92.7 110.3,92.3 110.5,92 110.8,91.6 111,91.2 111.3,90.8 111.5,90.4 111.8,90 112,89.5 112.3,89.1 112.5,88.6 112.8,88.1 113,87.6 113.3,87.1 113.5,86.5 113.8,85.9 114,85.4 114.3,84.8 114.5,84.1 114.8,83.5 115,82.8 115.3,82.2 115.5,81.5 115.8,80.7 116,80 116.3,79.2 116.5,78.5 116.8,77.7 117,76.8 117.3,76 117.5,75.1 117.8,74.2 118,73.3 118.3,72.4 118.5,71.4 118.8,70.4 119,69.4 119.3,68.4 119.5,67.3 119.8,66.2 120,65.1 120.3,64 120.5,62.8 120.8,61.7 121,60.4 121.3,59.2 121.5,57.9 121.8,56.7 122,55.3 122.3,54 122.5,52.6 122.8,51.2 123,49.8 123.3,48.3 123.5,46.8 123.8,45.3 124,43.8 124.3,42.2 124.5,40.6 124.8,38.9 125,37.3 125.3,35.5 125.4,34.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="69.5,169.4 65.9,158.9 75.8,160.2" fill="currentColor"/>
  <polygon points="126.5,26.6 130.1,37.1 120.2,35.8" fill="currentColor"/>
</svg>
</div>

For the cubic function $f(x)=x^3$, the domain is all real numbers because the
horizontal extent of the graph is the whole real number line. The same
applies to the vertical extent of the graph, so the domain and range include
all real numbers. Domain: $(-\infty,\infty)$. Range: $(-\infty,\infty)$.

**Reciprocal function** — $f(x)=\tfrac{1}{x}$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the reciprocal function f of x equals 1 over x: two branches approaching but never touching the axes, one in the upper right and one in the lower left.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","curves":[{"kind":"reciprocal"}]}'>
<svg role="img" aria-label="The graph of the reciprocal function f of x equals 1 over x: two branches approaching but never touching the axes, one in the upper right and one in the lower left." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="34,103.1 34,103.1 34.3,103.1 34.5,103.1 34.8,103.1 35,103.1 35.3,103.2 35.5,103.2 35.8,103.2 36,103.2 36.3,103.2 36.5,103.3 36.8,103.3 37,103.3 37.3,103.3 37.5,103.4 37.8,103.4 38,103.4 38.3,103.4 38.5,103.4 38.8,103.5 39,103.5 39.3,103.5 39.5,103.5 39.8,103.6 40,103.6 40.3,103.6 40.5,103.6 40.8,103.7 41,103.7 41.3,103.7 41.5,103.7 41.8,103.8 42,103.8 42.3,103.8 42.5,103.8 42.8,103.9 43,103.9 43.3,103.9 43.5,103.9 43.8,104 44,104 44.3,104 44.5,104.1 44.8,104.1 45,104.1 45.3,104.1 45.5,104.2 45.8,104.2 46,104.2 46.3,104.3 46.5,104.3 46.8,104.3 47,104.4 47.3,104.4 47.5,104.4 47.7,104.4 48,104.5 48.3,104.5 48.5,104.5 48.8,104.6 49,104.6 49.3,104.6 49.5,104.7 49.8,104.7 50,104.8 50.3,104.8 50.5,104.8 50.8,104.9 51,104.9 51.3,104.9 51.5,105 51.8,105 52,105 52.2,105.1 52.5,105.1 52.8,105.2 53,105.2 53.3,105.2 53.5,105.3 53.8,105.3 54,105.4 54.3,105.4 54.5,105.4 54.8,105.5 55,105.5 55.3,105.6 55.5,105.6 55.8,105.7 56,105.7 56.3,105.8 56.5,105.8 56.7,105.9 57,105.9 57.3,106 57.5,106 57.8,106 58,106.1 58.3,106.2 58.5,106.2 58.8,106.3 59,106.3 59.3,106.4 59.5,106.4 59.8,106.5 60,106.5 60.3,106.6 60.5,106.6 60.8,106.7 61,106.8 61.2,106.8 61.5,106.9 61.8,106.9 62,107 62.3,107.1 62.5,107.1 62.8,107.2 63,107.3 63.3,107.3 63.5,107.4 63.8,107.5 64,107.5 64.3,107.6 64.5,107.7 64.8,107.7 65,107.8 65.3,107.9 65.5,108 65.8,108 66,108.1 66.3,108.2 66.5,108.3 66.8,108.4 67,108.5 67.3,108.5 67.5,108.6 67.8,108.7 68,108.8 68.3,108.9 68.5,109 68.8,109.1 69,109.2 69.3,109.3 69.5,109.4 69.8,109.5 70,109.6 70.3,109.7 70.5,109.8 70.8,109.9 71,110 71.3,110.1 71.5,110.2 71.8,110.3 72,110.5 72.3,110.6 72.5,110.7 72.8,110.8 73,111 73.3,111.1 73.5,111.2 73.8,111.4 74,111.5 74.3,111.6 74.5,111.8 74.8,111.9 75,112.1 75.3,112.2 75.5,112.4 75.8,112.6 76,112.7 76.3,112.9 76.5,113.1 76.8,113.2 77,113.4 77.3,113.6 77.5,113.8 77.8,114 78,114.2 78.3,114.4 78.5,114.6 78.8,114.8 79,115.1 79.3,115.3 79.5,115.5 79.8,115.8 80,116 80.3,116.3 80.5,116.5 80.8,116.8 81,117.1 81.3,117.3 81.5,117.6 81.8,117.9 82,118.3 82.3,118.6 82.5,118.9 82.8,119.2 83,119.6 83.3,120 83.5,120.3 83.8,120.7 84,121.1 84.3,121.6 84.5,122 84.8,122.5 85,122.9 85.3,123.4 85.5,123.9 85.8,124.4 86,125 86.3,125.6 86.5,126.2 86.8,126.8 87,127.5 87.3,128.1 87.5,128.9 87.8,129.6 88,130.4 88.3,131.2 88.5,132.1 88.8,133 89,134 89.3,135 89.5,136.1 89.8,137.3 90,138.5 90.3,139.8 90.5,141.2 90.8,142.7 91,144.3 91.3,146 91.5,147.8 91.8,149.8 92,152 92.3,154.3 92.5,156.9 92.8,159.7 92.9,162" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,102.5 36.3,98.2 35.6,108.2" fill="currentColor"/>
  <polygon points="93.5,170 87.8,160.4 97.8,159.7" fill="currentColor"/>
  <polyline points="103.1,34 103.3,36.3 103.5,39.1 103.8,41.7 104,44 104.3,46.2 104.5,48.2 104.8,50 105,51.7 105.3,53.3 105.5,54.8 105.8,56.2 106,57.5 106.3,58.7 106.5,59.9 106.8,61 107,62 107.3,63 107.5,63.9 107.8,64.8 108,65.6 108.3,66.4 108.5,67.1 108.8,67.9 109,68.5 109.3,69.2 109.5,69.8 109.8,70.4 110,71 110.3,71.6 110.5,72.1 110.8,72.6 111,73.1 111.3,73.5 111.5,74 111.8,74.4 112,74.9 112.3,75.3 112.5,75.7 112.8,76 113,76.4 113.3,76.8 113.5,77.1 113.8,77.4 114,77.8 114.3,78.1 114.5,78.4 114.8,78.7 115,78.9 115.3,79.2 115.5,79.5 115.8,79.7 116,80 116.3,80.2 116.5,80.5 116.8,80.7 117,80.9 117.3,81.2 117.5,81.4 117.8,81.6 118,81.8 118.3,82 118.5,82.2 118.8,82.4 119,82.6 119.3,82.8 119.5,82.9 119.8,83.1 120,83.3 120.3,83.4 120.5,83.6 120.8,83.8 121,83.9 121.3,84.1 121.5,84.2 121.8,84.4 122,84.5 122.3,84.6 122.5,84.8 122.8,84.9 123,85 123.3,85.2 123.5,85.3 123.8,85.4 124,85.5 124.3,85.7 124.5,85.8 124.8,85.9 125,86 125.3,86.1 125.5,86.2 125.8,86.3 126,86.4 126.3,86.5 126.5,86.6 126.8,86.7 127,86.8 127.3,86.9 127.5,87 127.8,87.1 128,87.2 128.3,87.3 128.5,87.4 128.8,87.5 129,87.5 129.3,87.6 129.5,87.7 129.8,87.8 130,87.9 130.3,88 130.5,88 130.8,88.1 131,88.2 131.3,88.3 131.5,88.3 131.8,88.4 132,88.5 132.3,88.5 132.5,88.6 132.8,88.7 133,88.7 133.3,88.8 133.5,88.9 133.8,88.9 134,89 134.3,89.1 134.5,89.1 134.8,89.2 135,89.2 135.3,89.3 135.5,89.4 135.8,89.4 136,89.5 136.3,89.5 136.5,89.6 136.8,89.6 137,89.7 137.3,89.7 137.5,89.8 137.8,89.8 138,89.9 138.3,90 138.5,90 138.8,90 139,90.1 139.3,90.1 139.5,90.2 139.8,90.2 140,90.3 140.3,90.3 140.5,90.4 140.8,90.4 141,90.5 141.3,90.5 141.5,90.6 141.8,90.6 142,90.6 142.3,90.7 142.5,90.7 142.8,90.8 143,90.8 143.3,90.8 143.5,90.9 143.8,90.9 144,91 144.3,91 144.5,91 144.8,91.1 145,91.1 145.3,91.1 145.5,91.2 145.8,91.2 146,91.3 146.3,91.3 146.5,91.3 146.8,91.4 147,91.4 147.3,91.4 147.5,91.5 147.8,91.5 148,91.5 148.3,91.6 148.5,91.6 148.8,91.6 149,91.6 149.3,91.7 149.5,91.7 149.8,91.7 150,91.8 150.3,91.8 150.5,91.8 150.8,91.9 151,91.9 151.3,91.9 151.5,91.9 151.8,92 152,92 152.3,92 152.5,92.1 152.8,92.1 153,92.1 153.3,92.1 153.5,92.2 153.8,92.2 154,92.2 154.3,92.2 154.5,92.3 154.8,92.3 155,92.3 155.3,92.3 155.5,92.4 155.8,92.4 156,92.4 156.3,92.4 156.5,92.5 156.8,92.5 157,92.5 157.3,92.5 157.5,92.6 157.8,92.6 158,92.6 158.3,92.6 158.5,92.6 158.8,92.7 159,92.7 159.3,92.7 159.5,92.7 159.8,92.8 160,92.8 160.3,92.8 160.5,92.8 160.8,92.8 161,92.9 161.3,92.9 161.5,92.9 161.8,92.9 162,92.9 162,92.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="102.5,26 108.2,35.6 98.2,36.3" fill="currentColor"/>
  <polygon points="170,93.5 159.7,97.8 160.4,87.8" fill="currentColor"/>
</svg>
</div>

For the reciprocal function $f(x)=\tfrac{1}{x}$, we cannot divide by 0, so we
must exclude 0 from the domain. Further, 1 divided by any value can never be
0, so the range also will not include 0. In set-builder notation, we could
also write $\{x\mid x\ne 0\}$, the set of all real numbers that are not zero.
Domain: $(-\infty,0)\cup(0,\infty)$. Range: $(-\infty,0)\cup(0,\infty)$.

**Reciprocal squared function** — $f(x)=\tfrac{1}{x^2}$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the reciprocal squared function f of x equals 1 over x squared: two branches, both above the horizontal axis, approaching but never touching the axes.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","curves":[{"kind":"reciprocal-squared"}]}'>
<svg role="img" aria-label="The graph of the reciprocal squared function f of x equals 1 over x squared: two branches, both above the horizontal axis, approaching but never touching the axes." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="34,96.6 34,96.6 34.3,96.6 34.5,96.6 34.8,96.5 35,96.5 35.3,96.5 35.5,96.5 35.8,96.5 36,96.5 36.3,96.5 36.5,96.5 36.8,96.4 37,96.4 37.3,96.4 37.5,96.4 37.8,96.4 38,96.4 38.3,96.4 38.5,96.4 38.8,96.3 39,96.3 39.3,96.3 39.5,96.3 39.8,96.3 40,96.3 40.3,96.3 40.5,96.2 40.8,96.2 41,96.2 41.3,96.2 41.5,96.2 41.8,96.2 42,96.1 42.3,96.1 42.5,96.1 42.8,96.1 43,96.1 43.3,96.1 43.5,96 43.8,96 44,96 44.3,96 44.5,96 44.8,95.9 45,95.9 45.3,95.9 45.5,95.9 45.8,95.9 46,95.8 46.3,95.8 46.5,95.8 46.8,95.8 47,95.8 47.3,95.7 47.5,95.7 47.7,95.7 48,95.7 48.3,95.6 48.5,95.6 48.8,95.6 49,95.6 49.3,95.5 49.5,95.5 49.8,95.5 50,95.5 50.3,95.4 50.5,95.4 50.8,95.4 51,95.4 51.3,95.3 51.5,95.3 51.8,95.3 52,95.2 52.2,95.2 52.5,95.2 52.8,95.2 53,95.1 53.3,95.1 53.5,95.1 53.8,95 54,95 54.3,95 54.5,94.9 54.8,94.9 55,94.8 55.3,94.8 55.5,94.8 55.8,94.7 56,94.7 56.3,94.7 56.5,94.6 56.7,94.6 57,94.5 57.3,94.5 57.5,94.4 57.8,94.4 58,94.4 58.3,94.3 58.5,94.3 58.8,94.2 59,94.2 59.3,94.1 59.5,94.1 59.8,94 60,94 60.3,93.9 60.5,93.9 60.8,93.8 61,93.7 61.2,93.7 61.5,93.6 61.8,93.6 62,93.5 62.3,93.4 62.5,93.4 62.8,93.3 63,93.2 63.3,93.2 63.5,93.1 63.8,93 64,93 64.3,92.9 64.5,92.8 64.8,92.7 65,92.6 65.3,92.6 65.5,92.5 65.8,92.4 66,92.3 66.3,92.2 66.5,92.1 66.8,92 67,91.9 67.3,91.8 67.5,91.7 67.8,91.6 68,91.5 68.3,91.4 68.5,91.3 68.8,91.2 69,91.1 69.3,90.9 69.5,90.8 69.8,90.7 70,90.6 70.3,90.4 70.5,90.3 70.8,90.1 71,90 71.3,89.8 71.5,89.7 71.8,89.5 72,89.4 72.3,89.2 72.5,89 72.8,88.9 73,88.7 73.3,88.5 73.5,88.3 73.8,88.1 74,87.9 74.3,87.7 74.5,87.4 74.8,87.2 75,87 75.3,86.7 75.5,86.5 75.8,86.2 76,86 76.3,85.7 76.5,85.4 76.8,85.1 77,84.8 77.3,84.5 77.5,84.1 77.8,83.8 78,83.4 78.3,83 78.5,82.7 78.8,82.3 79,81.8 79.3,81.4 79.5,81 79.8,80.5 80,80 80.3,79.5 80.5,79 80.8,78.4 81,77.8 81.3,77.2 81.5,76.6 81.8,75.9 82,75.2 82.3,74.5 82.5,73.7 82.8,72.9 83,72.1 83.3,71.2 83.5,70.3 83.8,69.3 84,68.2 84.3,67.2 84.5,66 84.8,64.8 85,63.5 85.3,62.1 85.5,60.7 85.8,59.1 86,57.5 86.3,55.8 86.5,53.9 86.8,51.9 87,49.8 87.3,47.5 87.5,45.1 87.8,42.5 88,39.7 88.3,36.7 88.5,34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,96.9 35.8,91.5 36.2,101.5" fill="currentColor"/>
  <polygon points="89,26 93.3,36.3 83.3,35.6" fill="currentColor"/>
  <polyline points="107.5,34 107.8,36.7 108,39.7 108.3,42.5 108.5,45.1 108.8,47.5 109,49.8 109.3,51.9 109.5,53.9 109.8,55.8 110,57.5 110.3,59.1 110.5,60.7 110.8,62.1 111,63.5 111.3,64.8 111.5,66 111.8,67.2 112,68.2 112.3,69.3 112.5,70.3 112.8,71.2 113,72.1 113.3,72.9 113.5,73.7 113.8,74.5 114,75.2 114.3,75.9 114.5,76.6 114.8,77.2 115,77.8 115.3,78.4 115.5,79 115.8,79.5 116,80 116.3,80.5 116.5,81 116.8,81.4 117,81.8 117.3,82.3 117.5,82.7 117.8,83 118,83.4 118.3,83.8 118.5,84.1 118.8,84.5 119,84.8 119.3,85.1 119.5,85.4 119.8,85.7 120,86 120.3,86.2 120.5,86.5 120.8,86.7 121,87 121.3,87.2 121.5,87.4 121.8,87.7 122,87.9 122.3,88.1 122.5,88.3 122.8,88.5 123,88.7 123.3,88.9 123.5,89 123.8,89.2 124,89.4 124.3,89.5 124.5,89.7 124.8,89.8 125,90 125.3,90.1 125.5,90.3 125.8,90.4 126,90.6 126.3,90.7 126.5,90.8 126.8,90.9 127,91.1 127.3,91.2 127.5,91.3 127.8,91.4 128,91.5 128.3,91.6 128.5,91.7 128.8,91.8 129,91.9 129.3,92 129.5,92.1 129.8,92.2 130,92.3 130.3,92.4 130.5,92.5 130.8,92.6 131,92.6 131.3,92.7 131.5,92.8 131.8,92.9 132,93 132.3,93 132.5,93.1 132.8,93.2 133,93.2 133.3,93.3 133.5,93.4 133.8,93.4 134,93.5 134.3,93.6 134.5,93.6 134.8,93.7 135,93.7 135.3,93.8 135.5,93.9 135.8,93.9 136,94 136.3,94 136.5,94.1 136.8,94.1 137,94.2 137.3,94.2 137.5,94.3 137.8,94.3 138,94.4 138.3,94.4 138.5,94.4 138.8,94.5 139,94.5 139.3,94.6 139.5,94.6 139.8,94.7 140,94.7 140.3,94.7 140.5,94.8 140.8,94.8 141,94.8 141.3,94.9 141.5,94.9 141.8,95 142,95 142.3,95 142.5,95.1 142.8,95.1 143,95.1 143.3,95.2 143.5,95.2 143.8,95.2 144,95.2 144.3,95.3 144.5,95.3 144.8,95.3 145,95.4 145.3,95.4 145.5,95.4 145.8,95.4 146,95.5 146.3,95.5 146.5,95.5 146.8,95.5 147,95.6 147.3,95.6 147.5,95.6 147.8,95.6 148,95.7 148.3,95.7 148.5,95.7 148.8,95.7 149,95.8 149.3,95.8 149.5,95.8 149.8,95.8 150,95.8 150.3,95.9 150.5,95.9 150.8,95.9 151,95.9 151.3,95.9 151.5,96 151.8,96 152,96 152.3,96 152.5,96 152.8,96.1 153,96.1 153.3,96.1 153.5,96.1 153.8,96.1 154,96.1 154.3,96.2 154.5,96.2 154.8,96.2 155,96.2 155.3,96.2 155.5,96.2 155.8,96.3 156,96.3 156.3,96.3 156.5,96.3 156.8,96.3 157,96.3 157.3,96.3 157.5,96.4 157.8,96.4 158,96.4 158.3,96.4 158.5,96.4 158.8,96.4 159,96.4 159.3,96.4 159.5,96.5 159.8,96.5 160,96.5 160.3,96.5 160.5,96.5 160.8,96.5 161,96.5 161.3,96.5 161.5,96.6 161.8,96.6 162,96.6 162,96.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="107,26 112.7,35.6 102.7,36.3" fill="currentColor"/>
  <polygon points="170,96.9 159.8,101.5 160.2,91.5" fill="currentColor"/>
</svg>
</div>

For the reciprocal squared function $f(x)=\tfrac{1}{x^2}$, we cannot divide
by $0$, so we must exclude $0$ from the domain. There is also no $x$ that can
give an output of 0, so 0 is excluded from the range as well. Note that the
output of this function is always positive due to the square in the
denominator, so the range includes only positive numbers. Domain:
$(-\infty,0)\cup(0,\infty)$. Range: $(0,\infty)$.

**Square root function** — $f(x)=\sqrt{x}$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the square root function f of x equals the square root of x: a curve starting at the origin and rising to the right, flattening as it goes.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","curves":[{"kind":"sqrt"}]}'>
<svg role="img" aria-label="The graph of the square root function f of x equals the square root of x: a curve starting at the origin and rising to the right, flattening as it goes." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="98,98 98,97.8 98,97.7 98,97.5 98,97.4 98,97.3 98,97.1 98.1,97 98.1,96.8 98.1,96.7 98.1,96.5 98.2,96.3 98.2,96.2 98.2,96 98.2,95.9 98.3,95.8 98.3,95.6 98.4,95.5 98.4,95.3 98.5,95.2 98.5,95 98.6,94.8 98.6,94.7 98.7,94.5 98.7,94.4 98.8,94.3 98.8,94.1 98.9,94 99,93.8 99.1,93.7 99.1,93.5 99.2,93.3 99.3,93.2 99.4,93 99.4,92.9 99.5,92.8 99.6,92.6 99.7,92.5 99.8,92.3 99.9,92.2 100,92 100.1,91.8 100.2,91.7 100.3,91.5 100.4,91.4 100.5,91.3 100.6,91.1 100.8,91 100.9,90.8 101,90.7 101.1,90.5 101.3,90.3 101.4,90.2 101.5,90 101.6,89.9 101.8,89.8 101.9,89.6 102.1,89.5 102.2,89.3 102.4,89.2 102.5,89 102.7,88.8 102.8,88.7 103,88.5 103.1,88.4 103.3,88.3 103.4,88.1 103.6,88 103.8,87.8 104,87.7 104.1,87.5 104.3,87.3 104.5,87.2 104.7,87 104.8,86.9 105,86.8 105.2,86.6 105.4,86.5 105.6,86.3 105.8,86.2 106,86 106.2,85.8 106.4,85.7 106.6,85.5 106.8,85.4 107,85.3 107.2,85.1 107.5,85 107.7,84.8 107.9,84.7 108.1,84.5 108.4,84.3 108.6,84.2 108.8,84 109,83.9 109.3,83.8 109.5,83.6 109.8,83.5 110,83.3 110.3,83.2 110.5,83 110.8,82.8 111,82.7 111.3,82.5 111.5,82.4 111.8,82.3 112,82.1 112.3,82 112.6,81.8 112.9,81.7 113.1,81.5 113.4,81.3 113.7,81.2 114,81 114.2,80.9 114.5,80.8 114.8,80.6 115.1,80.5 115.4,80.3 115.7,80.2 116,80 116.3,79.8 116.6,79.7 116.9,79.5 117.2,79.4 117.5,79.3 117.8,79.1 118.2,79 118.5,78.8 118.8,78.7 119.1,78.5 119.5,78.3 119.8,78.2 120.1,78 120.4,77.9 120.8,77.8 121.1,77.6 121.5,77.5 121.8,77.3 122.2,77.2 122.5,77 122.9,76.8 123.2,76.7 123.6,76.5 123.9,76.4 124.3,76.3 124.6,76.1 125,76 125.4,75.8 125.8,75.7 126.1,75.5 126.5,75.3 126.9,75.2 127.3,75 127.6,74.9 128,74.8 128.4,74.6 128.8,74.5 129.2,74.3 129.6,74.2 130,74 130.4,73.8 130.8,73.7 131.2,73.5 131.6,73.4 132,73.3 132.4,73.1 132.9,73 133.3,72.8 133.7,72.7 134.1,72.5 134.6,72.3 135,72.2 135.4,72 135.8,71.9 136.3,71.8 136.7,71.6 137.2,71.5 137.6,71.3 138.1,71.2 138.5,71 139,70.8 139.4,70.7 139.9,70.5 140.3,70.4 140.8,70.3 141.2,70.1 141.7,70 142.2,69.8 142.7,69.7 143.1,69.5 143.6,69.3 144.1,69.2 144.6,69 145,68.9 145.5,68.8 146,68.6 146.5,68.5 147,68.3 147.5,68.2 148,68 148.5,67.8 149,67.7 149.5,67.5 150,67.4 150.5,67.3 151,67.1 151.6,67 152.1,66.8 152.6,66.7 153.1,66.5 153.7,66.3 154.2,66.2 154.7,66 155.2,65.9 155.8,65.8 156.3,65.6 156.9,65.5 157.4,65.3 158,65.2 158.5,65 159.1,64.8 159.6,64.7 160.2,64.5 160.7,64.4 161.3,64.3 161.8,64.1 162.3,64" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="170,62 161.6,69.3 159.1,59.6" fill="currentColor"/>
</svg>
</div>

For the square root function $f(x)=\sqrt{x}$, we cannot take the square root
of a negative real number, so the domain must be 0 or greater. The range also
excludes negative numbers because the square root of a positive number $x$ is
defined to be positive, even though the square of the negative number
$-\sqrt{x}$ also gives us $x$. Domain: $[0,\infty)$. Range: $[0,\infty)$.

**Cube root function** — $f(x)=\sqrt[3]{x}$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of the cube root function f of x equals the cube root of x: a curve through the origin rising to the right and falling to the left, steep near the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":18,"tickLabels":true,"tickStep":2,"yLabel":"f(x)","curves":[{"kind":"cbrt"}]}'>
<svg role="img" aria-label="The graph of the cube root function f of x equals the cube root of x: a curve through the origin rising to the right and falling to the left, steep near the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 196" width="196" height="196" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="170" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="170" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="170" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="170" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="170" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="170" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="170" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="170" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="170" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="170" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="170" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="170" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="170" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="170" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="170" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="98" x2="172" y2="98" stroke="currentColor" stroke-width="1"/>
  <line x1="98" y1="24" x2="98" y2="172" stroke="currentColor" stroke-width="1"/>
  <polygon points="182,98 172,103 172,93" fill="currentColor"/>
  <polygon points="98,14 103,24 93,24" fill="currentColor"/>
  <polygon points="14,98 24,93 24,103" fill="currentColor"/>
  <polygon points="98,182 93,172 103,172" fill="currentColor"/>
  <text x="180" y="90" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="106" y="24" font-size="13" fill="currentColor" font-style="italic">f(x)</text>
  <line x1="26" y1="95" x2="26" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="113" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="62" y1="95" x2="62" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="113" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="95" x2="134" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="113" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="170" y1="95" x2="170" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="113" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="95" y1="170" x2="101" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="174" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="95" y1="134" x2="101" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="138" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="95" y1="62" x2="101" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="66" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="95" y1="26" x2="101" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="35.7,125.2 36.3,125.1 37.9,124.9 39.5,124.7 41,124.4 42.5,124.2 44,124 45.5,123.7 47,123.5 48.4,123.2 49.8,123 51.1,122.8 52.5,122.5 53.8,122.3 55.1,122 56.3,121.8 57.6,121.6 58.8,121.3 60,121.1 61.1,120.9 62.3,120.6 63.4,120.4 64.5,120.1 65.6,119.9 66.6,119.7 67.6,119.4 68.6,119.2 69.6,119 70.6,118.7 71.5,118.5 72.4,118.2 73.3,118 74.2,117.8 75,117.5 75.9,117.3 76.7,117 77.5,116.8 78.2,116.6 79,116.3 79.7,116.1 80.4,115.9 81.1,115.6 81.8,115.4 82.4,115.1 83.1,114.9 83.7,114.7 84.3,114.4 84.9,114.2 85.5,114 86,113.7 86.6,113.5 87.1,113.2 87.6,113 88.1,112.8 88.5,112.5 89,112.3 89.4,112 89.9,111.8 90.3,111.6 90.7,111.3 91.1,111.1 91.4,110.9 91.8,110.6 92.1,110.4 92.5,110.1 92.8,109.9 93.1,109.7 93.4,109.4 93.7,109.2 93.9,109 94.2,108.7 94.5,108.5 94.7,108.2 94.9,108 95.1,107.8 95.3,107.5 95.5,107.3 95.7,107 95.9,106.8 96.1,106.6 96.2,106.3 96.4,106.1 96.5,105.9 96.6,105.6 96.8,105.4 96.9,105.1 97,104.9 97.1,104.7 97.2,104.4 97.3,104.2 97.3,104 97.4,103.7 97.5,103.5 97.6,103.2 97.6,103 97.7,102.8 97.7,102.5 97.8,102.3 97.8,102 97.8,101.8 97.9,101.6 97.9,101.3 97.9,101.1 97.9,100.9 97.9,100.6 98,100.4 98,100.1 98,99.9 98,99.7 98,99.4 98,99.2 98,99 98,98.7 98,98.5 98,98.2 98,98 98,97.8 98,97.5 98,97.3 98,97 98,96.8 98,96.6 98,96.3 98,96.1 98,95.9 98,95.6 98.1,95.4 98.1,95.1 98.1,94.9 98.1,94.7 98.1,94.4 98.2,94.2 98.2,94 98.2,93.7 98.3,93.5 98.3,93.2 98.4,93 98.4,92.8 98.5,92.5 98.6,92.3 98.7,92 98.7,91.8 98.8,91.6 98.9,91.3 99,91.1 99.1,90.9 99.2,90.6 99.4,90.4 99.5,90.1 99.6,89.9 99.8,89.7 99.9,89.4 100.1,89.2 100.3,89 100.5,88.7 100.7,88.5 100.9,88.2 101.1,88 101.3,87.8 101.5,87.5 101.8,87.3 102.1,87 102.3,86.8 102.6,86.6 102.9,86.3 103.2,86.1 103.5,85.9 103.9,85.6 104.2,85.4 104.6,85.1 104.9,84.9 105.3,84.7 105.7,84.4 106.1,84.2 106.6,84 107,83.7 107.5,83.5 107.9,83.2 108.4,83 108.9,82.8 109.4,82.5 110,82.3 110.5,82 111.1,81.8 111.7,81.6 112.3,81.3 112.9,81.1 113.6,80.9 114.2,80.6 114.9,80.4 115.6,80.1 116.3,79.9 117,79.7 117.8,79.4 118.5,79.2 119.3,79 120.1,78.7 121,78.5 121.8,78.2 122.7,78 123.6,77.8 124.5,77.5 125.4,77.3 126.4,77 127.4,76.8 128.4,76.6 129.4,76.3 130.4,76.1 131.5,75.9 132.6,75.6 133.7,75.4 134.9,75.1 136,74.9 137.2,74.7 138.4,74.4 139.7,74.2 140.9,74 142.2,73.7 143.5,73.5 144.9,73.2 146.2,73 147.6,72.8 149,72.5 150.5,72.3 152,72 153.5,71.8 155,71.6 156.5,71.3 158.1,71.1 159.7,70.9 160.3,70.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="27.8,126.3 37,120 38.4,129.9" fill="currentColor"/>
  <polygon points="168.2,69.7 159,76 157.6,66.1" fill="currentColor"/>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 2 times the square root of x plus 4. It begins at a solid point at (−4, 0) and rises to the right, passing near (0, 4) and continuing with an arrow.","xMin":-5,"xMax":5,"yMin":-1,"yMax":6,"unit":24,"tickLabels":true,"curves":[{"kind":"sqrt","a":2,"h":-4,"arrows":"end"}],"points":[{"at":[-4,0]}],"texts":[{"at":[-2.4,3.1],"text":"f","italic":true}]}'>
<svg role="img" aria-label="The graph of f of x equals 2 times the square root of x plus 4. It begins at a solid point at (−4, 0) and rises to the right, passing near (0, 4) and continuing with an arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 220" width="292" height="220" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="194" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="194" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="194" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="194" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="194" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="194" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="194" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="194" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="194" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="194" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="170" x2="268" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="196" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,170 268,175 268,165" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,170 24,165 24,175" fill="currentColor"/>
  <polygon points="146,206 141,196 151,196" fill="currentColor"/>
  <text x="276" y="162" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="167" x2="26" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="185" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="50" y1="167" x2="50" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="185" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="74" y1="167" x2="74" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="185" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="167" x2="98" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="185" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="122" y1="167" x2="122" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="185" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="167" x2="170" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="185" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="194" y1="167" x2="194" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="185" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="218" y1="167" x2="218" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="185" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="242" y1="167" x2="242" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="185" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="167" x2="266" y2="173" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="185" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="143" y1="194" x2="149" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="198" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="146" x2="149" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="150" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="98" x2="149" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="102" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="74" x2="149" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="78" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="50" x2="149" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="54" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <polyline points="50,170 50,169.5 50,169 50,168.5 50,168 50.1,167.5 50.1,167 50.1,166.5 50.2,166 50.2,165.5 50.3,165 50.3,164.5 50.4,164 50.4,163.5 50.5,163 50.6,162.5 50.7,162 50.8,161.5 50.8,161 50.9,160.5 51,160 51.1,159.5 51.3,159 51.4,158.5 51.5,158 51.6,157.5 51.8,157 51.9,156.5 52,156 52.2,155.5 52.3,155 52.5,154.5 52.7,154 52.8,153.5 53,153 53.2,152.5 53.4,152 53.6,151.5 53.8,151 54,150.5 54.2,150 54.4,149.5 54.6,149 54.8,148.5 55,148 55.3,147.5 55.5,147 55.8,146.5 56,146 56.3,145.5 56.5,145 56.8,144.5 57,144 57.3,143.5 57.6,143 57.9,142.5 58.2,142 58.5,141.5 58.8,141 59.1,140.5 59.4,140 59.7,139.5 60,139 60.3,138.5 60.7,138 61,137.5 61.3,137 61.7,136.5 62,136 62.4,135.5 62.8,135 63.1,134.5 63.5,134 63.9,133.5 64.3,133 64.6,132.5 65,132 65.4,131.5 65.8,131 66.3,130.5 66.7,130 67.1,129.5 67.5,129 67.9,128.5 68.4,128 68.8,127.5 69.3,127 69.7,126.5 70.2,126 70.6,125.5 71.1,125 71.6,124.5 72,124 72.5,123.5 73,123 73.5,122.5 74,122 74.5,121.5 75,121 75.5,120.5 76,120 76.6,119.5 77.1,119 77.6,118.5 78.2,118 78.7,117.5 79.3,117 79.8,116.5 80.4,116 80.9,115.5 81.5,115 82.1,114.5 82.7,114 83.3,113.5 83.8,113 84.4,112.5 85,112 85.6,111.5 86.3,111 86.9,110.5 87.5,110 88.1,109.5 88.8,109 89.4,108.5 90,108 90.7,107.5 91.3,107 92,106.5 92.7,106 93.3,105.5 94,105 94.7,104.5 95.4,104 96.1,103.5 96.8,103 97.5,102.5 98.2,102 98.9,101.5 99.6,101 100.3,100.5 101,100 101.8,99.5 102.5,99 103.3,98.5 104,98 104.8,97.5 105.5,97 106.3,96.5 107,96 107.8,95.5 108.6,95 109.4,94.5 110.2,94 111,93.5 111.8,93 112.6,92.5 113.4,92 114.2,91.5 115,91 115.8,90.5 116.7,90 117.5,89.5 118.3,89 119.2,88.5 120,88 120.9,87.5 121.8,87 122.6,86.5 123.5,86 124.4,85.5 125.3,85 126.1,84.5 127,84 127.9,83.5 128.8,83 129.8,82.5 130.7,82 131.6,81.5 132.5,81 133.4,80.5 134.4,80 135.3,79.5 136.3,79 137.2,78.5 138.2,78 139.1,77.5 140.1,77 141.1,76.5 142,76 143,75.5 144,75 145,74.5 146,74 147,73.5 148,73 149,72.5 150,72 151.1,71.5 152.1,71 153.1,70.5 154.2,70 155.2,69.5 156.3,69 157.3,68.5 158.4,68 159.4,67.5 160.5,67 161.6,66.5 162.7,66 163.8,65.5 164.8,65 165.9,64.5 167,64 168.1,63.5 169.3,63 170.4,62.5 171.5,62 172.6,61.5 173.8,61 174.9,60.5 176,60 177.2,59.5 178.3,59 179.5,58.5 180.7,58 181.8,57.5 183,57 184.2,56.5 185.4,56 186.6,55.5 187.8,55 189,54.5 190.2,54 191.4,53.5 192.6,53 193.8,52.5 195,52 196.3,51.5 197.5,51 198.8,50.5 200,50 201.3,49.5 202.5,49 203.8,48.5 205,48 206.3,47.5 207.6,47 208.9,46.5 210.2,46 211.5,45.5 212.8,45 214.1,44.5 215.4,44 216.7,43.5 218,43 219.3,42.5 220.7,42 222,41.5 223.3,41 224.7,40.5 226,40 227.4,39.5 228.8,39 230.1,38.5 231.5,38 232.9,37.5 234.3,37 235.6,36.5 237,36 238.4,35.5 239.8,35 241.3,34.5 242.7,34 244.1,33.5 245.5,33 246.9,32.5 248.4,32 249.8,31.5 251.3,31 252.7,30.5 254.2,30 255.6,29.5 257.1,29 258.4,28.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="266,26 258.1,33.9 254.9,24.4" fill="currentColor"/>
  <circle cx="50" cy="170" r="4" fill="currentColor"/>
  <text x="88.4" y="95.6" font-size="13" fill="currentColor" font-style="italic">f</text>
</svg>
</div>

{{< multiplechoice
  question="Find the domain of $f(x)=-\sqrt{2-x}$."
  answer="$(-\infty,2]$"
  hint="The radicand must be nonnegative: solve $2-x\ge 0$."
>}}
$(-\infty,2]$
$[2,\infty)$
$(-\infty,-2]$
$(-\infty,\infty)$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Find the range of $f(x)=-\sqrt{2-x}$."
  answer="$(-\infty,0]$"
  hint="A square root is never negative, so think about what the leading minus sign does to every output."
>}}
$(-\infty,0]$
$[0,\infty)$
$(-\infty,2]$
$(-\infty,\infty)$
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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of C of n. A straight segment rises from the origin to (10, 50), then a horizontal ray continues right at height 50 with an arrow.","xMin":0,"xMax":22,"yMin":0,"yMax":60,"xUnit":13,"yUnit":4,"xGridStep":5,"yGridStep":10,"tickLabels":true,"xLabel":"n","yLabel":"C(n)","polylines":[{"through":[[0,0],[10,50],[21,50]],"arrows":"end"}],"texts":[{"at":[7,50],"text":"C(n)","dy":16,"anchor":"middle"}]}'>
<svg role="img" aria-label="The graph of C of n. A straight segment rises from the origin to (10, 50), then a horizontal ray continues right at height 50 with an arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 292" width="338" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="91" y1="266" x2="91" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="266" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="221" y1="266" x2="221" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="286" y1="266" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="312" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="312" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="312" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="312" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="312" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="314" y2="266" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="266" stroke="currentColor" stroke-width="1"/>
  <polygon points="324,266 314,271 314,261" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="322" y="258" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">n</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">C(n)</text>
  <line x1="91" y1="263" x2="91" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="91" y="281" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="156" y1="263" x2="156" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="281" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="221" y1="263" x2="221" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="221" y="281" font-size="11" fill="currentColor" text-anchor="middle">15</text>
  <line x1="286" y1="263" x2="286" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="281" font-size="11" fill="currentColor" text-anchor="middle">20</text>
  <line x1="23" y1="226" x2="29" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="230" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="186" x2="29" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="190" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="146" x2="29" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="150" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="106" x2="29" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="110" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="66" x2="29" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="70" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <polyline points="26,266 156,66 291,66" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="299,66 289,71 289,61" fill="currentColor"/>
  <text x="117" y="82" font-size="13" fill="currentColor" text-anchor="middle">C(n)</text>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of C of g. A horizontal segment runs at height 25 from g = 0 to g = 2, then a straight line rises to (4, 45) and continues with an arrow.","xMin":0,"xMax":4.5,"yMin":0,"yMax":60,"xUnit":62,"yUnit":4,"xGridStep":0.5,"yGridStep":10,"tickLabels":true,"xLabel":"g","yLabel":"C(g)","polylines":[{"through":[[0,25],[2,25],[4.4,49]],"arrows":"end"}],"texts":[{"at":[2.2,34],"text":"C(g)","anchor":"end","dx":-4}]}'>
<svg role="img" aria-label="The graph of C of g. A horizontal segment runs at height 25 from g = 0 to g = 2, then a straight line rises to (4, 45) and continues with an arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 292" width="331" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="57" y1="266" x2="57" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="88" y1="266" x2="88" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="119" y1="266" x2="119" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="150" y1="266" x2="150" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="181" y1="266" x2="181" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="212" y1="266" x2="212" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="243" y1="266" x2="243" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="274" y1="266" x2="274" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="305" y1="266" x2="305" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="305" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="305" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="305" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="305" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="305" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="305" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="307" y2="266" stroke="currentColor" stroke-width="1"/>
  <line x1="26" y1="24" x2="26" y2="266" stroke="currentColor" stroke-width="1"/>
  <polygon points="317,266 307,271 307,261" fill="currentColor"/>
  <polygon points="26,14 31,24 21,24" fill="currentColor"/>
  <text x="315" y="258" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">g</text>
  <text x="34" y="24" font-size="13" fill="currentColor" font-style="italic">C(g)</text>
  <line x1="57" y1="263" x2="57" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="57" y="281" font-size="11" fill="currentColor" text-anchor="middle">0.5</text>
  <line x1="88" y1="263" x2="88" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="88" y="281" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="119" y1="263" x2="119" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="119" y="281" font-size="11" fill="currentColor" text-anchor="middle">1.5</text>
  <line x1="150" y1="263" x2="150" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="281" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="181" y1="263" x2="181" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="181" y="281" font-size="11" fill="currentColor" text-anchor="middle">2.5</text>
  <line x1="212" y1="263" x2="212" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="212" y="281" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="243" y1="263" x2="243" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="243" y="281" font-size="11" fill="currentColor" text-anchor="middle">3.5</text>
  <line x1="274" y1="263" x2="274" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="274" y="281" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="305" y1="263" x2="305" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="305" y="281" font-size="11" fill="currentColor" text-anchor="middle">4.5</text>
  <line x1="23" y1="226" x2="29" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="230" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="23" y1="186" x2="29" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="190" font-size="11" fill="currentColor" text-anchor="end">20</text>
  <line x1="23" y1="146" x2="29" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="150" font-size="11" fill="currentColor" text-anchor="end">30</text>
  <line x1="23" y1="106" x2="29" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="110" font-size="11" fill="currentColor" text-anchor="end">40</text>
  <line x1="23" y1="66" x2="29" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="70" font-size="11" fill="currentColor" text-anchor="end">50</text>
  <line x1="23" y1="26" x2="29" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="30" font-size="11" fill="currentColor" text-anchor="end">60</text>
  <polyline points="26,166 150,166 292.1,74.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="298.8,70 293.1,79.6 287.7,71.2" fill="currentColor"/>
  <text x="158.4" y="130" font-size="13" fill="currentColor" text-anchor="end">C(g)</text>
</svg>
</div>

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

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals x squared for x at most 1: the left half of a parabola falling from the top of the grid to the origin and rising to a solid point at (1, 1).","xMin":-4,"xMax":4,"yMin":-2,"yMax":5,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"to":1,"arrows":"start"}],"points":[{"at":[1,1]}]}'>
<svg role="img" aria-label="The graph of f of x equals x squared for x at most 1: the left half of a parabola falling from the top of the grid to the origin and rising to a solid point at (1, 1)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 220" width="244" height="220" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="194" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="194" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="194" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="194" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="194" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="194" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="194" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="194" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="218" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="218" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="218" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="218" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="220" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="196" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,146 220,151 220,141" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="122,206 117,196 127,196" fill="currentColor"/>
  <text x="228" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="122" x2="125" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="119" y1="74" x2="125" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="70.3,34.5 70.5,35.5 70.8,36.6 71,37.6 71.3,38.7 71.5,39.7 71.8,40.8 72,41.8 72.3,42.9 72.5,43.9 72.8,44.9 73,46 73.3,47 73.5,48 73.8,49 74,50 74.3,51 74.5,52 74.8,53 75,54 75.3,54.9 75.5,55.9 75.8,56.9 76,57.8 76.3,58.8 76.5,59.7 76.8,60.7 77,61.6 77.3,62.6 77.5,63.5 77.8,64.4 78,65.3 78.3,66.2 78.5,67.2 78.8,68.1 79,69 79.3,69.9 79.5,70.7 79.8,71.6 80,72.5 80.3,73.4 80.5,74.2 80.8,75.1 81,76 81.3,76.8 81.5,77.7 81.8,78.5 82,79.3 82.3,80.2 82.5,81 82.8,81.8 83,82.6 83.3,83.4 83.5,84.2 83.8,85 84,85.8 84.3,86.6 84.5,87.4 84.8,88.2 85,89 85.3,89.7 85.5,90.5 85.8,91.2 86,92 86.3,92.7 86.5,93.5 86.8,94.2 87,95 87.3,95.7 87.5,96.4 87.8,97.1 88,97.8 88.3,98.5 88.5,99.2 88.8,99.9 89,100.6 89.3,101.3 89.5,102 89.8,102.7 90,103.3 90.3,104 90.5,104.7 90.8,105.3 91,106 91.3,106.6 91.5,107.2 91.8,107.9 92,108.5 92.3,109.1 92.5,109.7 92.8,110.4 93,111 93.3,111.6 93.5,112.2 93.8,112.7 94,113.3 94.3,113.9 94.5,114.5 94.8,115.1 95,115.6 95.3,116.2 95.5,116.7 95.8,117.3 96,117.8 96.3,118.4 96.5,118.9 96.8,119.4 97,120 97.3,120.5 97.5,121 97.8,121.5 98,122 98.3,122.5 98.5,123 98.8,123.5 99,124 99.3,124.4 99.5,124.9 99.8,125.4 100,125.8 100.3,126.3 100.5,126.7 100.8,127.2 101,127.6 101.3,128.1 101.5,128.5 101.8,128.9 102,129.3 102.3,129.7 102.5,130.2 102.8,130.6 103,131 103.3,131.4 103.5,131.7 103.8,132.1 104,132.5 104.3,132.9 104.5,133.2 104.8,133.6 105,134 105.3,134.3 105.5,134.7 105.8,135 106,135.3 106.3,135.7 106.5,136 106.8,136.3 107,136.6 107.3,136.9 107.5,137.2 107.8,137.5 108,137.8 108.3,138.1 108.5,138.4 108.8,138.7 109,139 109.3,139.2 109.5,139.5 109.8,139.7 110,140 110.3,140.2 110.5,140.5 110.8,140.7 111,141 111.3,141.2 111.5,141.4 111.8,141.6 112,141.8 112.3,142 112.5,142.2 112.8,142.4 113,142.6 113.3,142.8 113.5,143 113.8,143.2 114,143.3 114.3,143.5 114.5,143.7 114.8,143.8 115,144 115.3,144.1 115.5,144.2 115.8,144.4 116,144.5 116.3,144.6 116.5,144.7 116.8,144.9 117,145 117.3,145.1 117.5,145.2 117.8,145.2 118,145.3 118.3,145.4 118.5,145.5 118.8,145.6 119,145.6 119.3,145.7 119.5,145.7 119.8,145.8 120,145.8 120.3,145.9 120.5,145.9 120.8,145.9 121,146 121.3,146 121.5,146 121.8,146 122,146 122.3,146 122.5,146 122.8,146 123,146 123.3,145.9 123.5,145.9 123.8,145.9 124,145.8 124.3,145.8 124.5,145.7 124.8,145.7 125,145.6 125.3,145.6 125.5,145.5 125.8,145.4 126,145.3 126.3,145.2 126.5,145.2 126.8,145.1 127,145 127.3,144.9 127.5,144.7 127.8,144.6 128,144.5 128.3,144.4 128.5,144.2 128.8,144.1 129,144 129.3,143.8 129.5,143.7 129.8,143.5 130,143.3 130.3,143.2 130.5,143 130.8,142.8 131,142.6 131.3,142.4 131.5,142.2 131.8,142 132,141.8 132.3,141.6 132.5,141.4 132.8,141.2 133,141 133.3,140.7 133.5,140.5 133.8,140.2 134,140 134.3,139.7 134.5,139.5 134.8,139.2 135,139 135.3,138.7 135.5,138.4 135.8,138.1 136,137.8 136.3,137.5 136.5,137.2 136.8,136.9 137,136.6 137.3,136.3 137.5,136 137.8,135.7 138,135.3 138.3,135 138.5,134.7 138.8,134.3 139,134 139.3,133.6 139.5,133.2 139.8,132.9 140,132.5 140.3,132.1 140.5,131.7 140.8,131.4 141,131 141.3,130.6 141.5,130.2 141.8,129.7 142,129.3 142.3,128.9 142.5,128.5 142.8,128.1 143,127.6 143.3,127.2 143.5,126.7 143.8,126.3 144,125.8 144.3,125.4 144.5,124.9 144.8,124.4 145,124 145.3,123.5 145.5,123 145.8,122.5 146,122" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="68.5,26.7 75.6,35.4 65.8,37.6" fill="currentColor"/>
  <circle cx="146" cy="122" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 3 for x greater than 1 and at most 2: a horizontal segment at height 3 from an open circle at (1, 3) to a solid point at (2, 3).","xMin":-4,"xMax":4,"yMin":-2,"yMax":5,"unit":24,"tickLabels":true,"segments":[{"from":[1,3],"to":[2,3]}],"points":[{"at":[1,3],"open":true},{"at":[2,3]}]}'>
<svg role="img" aria-label="The graph of f of x equals 3 for x greater than 1 and at most 2: a horizontal segment at height 3 from an open circle at (1, 3) to a solid point at (2, 3)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 220" width="244" height="220" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="194" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="194" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="194" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="194" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="194" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="194" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="194" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="194" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="218" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="218" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="218" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="218" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="220" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="196" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,146 220,151 220,141" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="122,206 117,196 127,196" fill="currentColor"/>
  <text x="228" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="122" x2="125" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="119" y1="74" x2="125" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="146" y1="74" x2="170" y2="74" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="146" cy="74" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="170" cy="74" r="4" fill="currentColor"/>
</svg>
</div>

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals x for x greater than 2: a straight line from an open circle at (2, 2) rising to the right with an arrow.","xMin":-4,"xMax":4,"yMin":-2,"yMax":5,"unit":24,"tickLabels":true,"polylines":[{"through":[[2,2],[4,4]],"arrows":"end"}],"points":[{"at":[2,2],"open":true}]}'>
<svg role="img" aria-label="The graph of f of x equals x for x greater than 2: a straight line from an open circle at (2, 2) rising to the right with an arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 220" width="244" height="220" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="194" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="194" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="194" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="194" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="194" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="194" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="194" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="194" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="218" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="218" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="218" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="218" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="220" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="196" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,146 220,151 220,141" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="122,206 117,196 127,196" fill="currentColor"/>
  <text x="228" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="122" x2="125" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="119" y1="74" x2="125" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="170,98 212.3,55.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="218,50 214.5,60.6 207.4,53.5" fill="currentColor"/>
  <circle cx="170" cy="98" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>

Now that we have sketched each piece individually, we combine them in the
same coordinate plane.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The three pieces on one grid: the parabola y = x squared down to the origin and up to a solid point at (1, 1); a horizontal segment at height 3 from an open circle at (1, 3) to a solid point at (2, 3); and a line from an open circle at (2, 2) rising to the right with an arrow.","xMin":-4,"xMax":4,"yMin":-2,"yMax":5,"unit":24,"tickLabels":true,"quadratics":[{"a":1,"to":1,"arrows":"start"}],"segments":[{"from":[1,3],"to":[2,3]}],"polylines":[{"through":[[2,2],[4,4]],"arrows":"end"}],"points":[{"at":[1,1]},{"at":[1,3],"open":true},{"at":[2,3]},{"at":[2,2],"open":true}]}'>
<svg role="img" aria-label="The three pieces on one grid: the parabola y = x squared down to the origin and up to a solid point at (1, 1); a horizontal segment at height 3 from an open circle at (1, 3) to a solid point at (2, 3); and a line from an open circle at (2, 2) rising to the right with an arrow." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 220" width="244" height="220" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="194" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="194" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="194" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="194" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="194" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="194" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="194" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="194" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="218" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="218" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="218" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="218" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="218" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="218" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="220" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="122" y1="24" x2="122" y2="196" stroke="currentColor" stroke-width="1"/>
  <polygon points="230,146 220,151 220,141" fill="currentColor"/>
  <polygon points="122,14 127,24 117,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="122,206 117,196 127,196" fill="currentColor"/>
  <text x="228" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="130" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="119" y1="194" x2="125" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="119" y1="170" x2="125" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="119" y1="122" x2="125" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="119" y1="98" x2="125" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="119" y1="74" x2="125" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="119" y1="50" x2="125" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="119" y1="26" x2="125" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="70.3,34.5 70.5,35.5 70.8,36.6 71,37.6 71.3,38.7 71.5,39.7 71.8,40.8 72,41.8 72.3,42.9 72.5,43.9 72.8,44.9 73,46 73.3,47 73.5,48 73.8,49 74,50 74.3,51 74.5,52 74.8,53 75,54 75.3,54.9 75.5,55.9 75.8,56.9 76,57.8 76.3,58.8 76.5,59.7 76.8,60.7 77,61.6 77.3,62.6 77.5,63.5 77.8,64.4 78,65.3 78.3,66.2 78.5,67.2 78.8,68.1 79,69 79.3,69.9 79.5,70.7 79.8,71.6 80,72.5 80.3,73.4 80.5,74.2 80.8,75.1 81,76 81.3,76.8 81.5,77.7 81.8,78.5 82,79.3 82.3,80.2 82.5,81 82.8,81.8 83,82.6 83.3,83.4 83.5,84.2 83.8,85 84,85.8 84.3,86.6 84.5,87.4 84.8,88.2 85,89 85.3,89.7 85.5,90.5 85.8,91.2 86,92 86.3,92.7 86.5,93.5 86.8,94.2 87,95 87.3,95.7 87.5,96.4 87.8,97.1 88,97.8 88.3,98.5 88.5,99.2 88.8,99.9 89,100.6 89.3,101.3 89.5,102 89.8,102.7 90,103.3 90.3,104 90.5,104.7 90.8,105.3 91,106 91.3,106.6 91.5,107.2 91.8,107.9 92,108.5 92.3,109.1 92.5,109.7 92.8,110.4 93,111 93.3,111.6 93.5,112.2 93.8,112.7 94,113.3 94.3,113.9 94.5,114.5 94.8,115.1 95,115.6 95.3,116.2 95.5,116.7 95.8,117.3 96,117.8 96.3,118.4 96.5,118.9 96.8,119.4 97,120 97.3,120.5 97.5,121 97.8,121.5 98,122 98.3,122.5 98.5,123 98.8,123.5 99,124 99.3,124.4 99.5,124.9 99.8,125.4 100,125.8 100.3,126.3 100.5,126.7 100.8,127.2 101,127.6 101.3,128.1 101.5,128.5 101.8,128.9 102,129.3 102.3,129.7 102.5,130.2 102.8,130.6 103,131 103.3,131.4 103.5,131.7 103.8,132.1 104,132.5 104.3,132.9 104.5,133.2 104.8,133.6 105,134 105.3,134.3 105.5,134.7 105.8,135 106,135.3 106.3,135.7 106.5,136 106.8,136.3 107,136.6 107.3,136.9 107.5,137.2 107.8,137.5 108,137.8 108.3,138.1 108.5,138.4 108.8,138.7 109,139 109.3,139.2 109.5,139.5 109.8,139.7 110,140 110.3,140.2 110.5,140.5 110.8,140.7 111,141 111.3,141.2 111.5,141.4 111.8,141.6 112,141.8 112.3,142 112.5,142.2 112.8,142.4 113,142.6 113.3,142.8 113.5,143 113.8,143.2 114,143.3 114.3,143.5 114.5,143.7 114.8,143.8 115,144 115.3,144.1 115.5,144.2 115.8,144.4 116,144.5 116.3,144.6 116.5,144.7 116.8,144.9 117,145 117.3,145.1 117.5,145.2 117.8,145.2 118,145.3 118.3,145.4 118.5,145.5 118.8,145.6 119,145.6 119.3,145.7 119.5,145.7 119.8,145.8 120,145.8 120.3,145.9 120.5,145.9 120.8,145.9 121,146 121.3,146 121.5,146 121.8,146 122,146 122.3,146 122.5,146 122.8,146 123,146 123.3,145.9 123.5,145.9 123.8,145.9 124,145.8 124.3,145.8 124.5,145.7 124.8,145.7 125,145.6 125.3,145.6 125.5,145.5 125.8,145.4 126,145.3 126.3,145.2 126.5,145.2 126.8,145.1 127,145 127.3,144.9 127.5,144.7 127.8,144.6 128,144.5 128.3,144.4 128.5,144.2 128.8,144.1 129,144 129.3,143.8 129.5,143.7 129.8,143.5 130,143.3 130.3,143.2 130.5,143 130.8,142.8 131,142.6 131.3,142.4 131.5,142.2 131.8,142 132,141.8 132.3,141.6 132.5,141.4 132.8,141.2 133,141 133.3,140.7 133.5,140.5 133.8,140.2 134,140 134.3,139.7 134.5,139.5 134.8,139.2 135,139 135.3,138.7 135.5,138.4 135.8,138.1 136,137.8 136.3,137.5 136.5,137.2 136.8,136.9 137,136.6 137.3,136.3 137.5,136 137.8,135.7 138,135.3 138.3,135 138.5,134.7 138.8,134.3 139,134 139.3,133.6 139.5,133.2 139.8,132.9 140,132.5 140.3,132.1 140.5,131.7 140.8,131.4 141,131 141.3,130.6 141.5,130.2 141.8,129.7 142,129.3 142.3,128.9 142.5,128.5 142.8,128.1 143,127.6 143.3,127.2 143.5,126.7 143.8,126.3 144,125.8 144.3,125.4 144.5,124.9 144.8,124.4 145,124 145.3,123.5 145.5,123 145.8,122.5 146,122" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="68.5,26.7 75.6,35.4 65.8,37.6" fill="currentColor"/>
  <polyline points="170,98 212.3,55.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="218,50 214.5,60.6 207.4,53.5" fill="currentColor"/>
  <line x1="146" y1="74" x2="170" y2="74" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="146" cy="122" r="4" fill="currentColor"/>
  <circle cx="146" cy="74" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="170" cy="74" r="4" fill="currentColor"/>
  <circle cx="170" cy="98" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>

Note that the graph does pass the vertical line test even at $x=1$ and $x=2$
because the points $(1,3)$ and $(2,2)$ are not part of the graph of the
function, though $(1,1)$ and $(2,3)$ are.

{{< multiplechoice
  mode="graph"
  question="Which graph shows the piecewise function $f(x)=x^3$ if $x<-1$, $f(x)=-2$ if $-1<x<4$, and $f(x)=\sqrt{x}$ if $x>4$?"
  answerIndex="1"
  hint="Check where each piece starts and stops: the square-root piece only exists past $x=4$, and the middle piece sits at height $-2$."
>}}
<svg role="img" aria-label="A cubic curve rising from the lower left to an open circle at (−1, −1); a horizontal segment at height −2 between open circles at (−1, −2) and (4, −2); and a square-root curve starting at the origin and rising to the right, crossing the horizontal segment." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 228" width="338" height="228" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="202" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="202" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="202" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="202" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="202" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="202" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="202" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="202" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="202" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="202" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="202" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="202" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="312" y1="202" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="312" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="312" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="312" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="312" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="312" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="312" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="312" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="114" x2="314" y2="114" stroke="currentColor" stroke-width="1"/>
  <line x1="92" y1="24" x2="92" y2="204" stroke="currentColor" stroke-width="1"/>
  <polygon points="324,114 314,119 314,109" fill="currentColor"/>
  <polygon points="92,14 97,24 87,24" fill="currentColor"/>
  <polygon points="14,114 24,109 24,119" fill="currentColor"/>
  <polygon points="92,214 87,204 97,204" fill="currentColor"/>
  <text x="322" y="106" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="100" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="48" y1="111" x2="48" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="129" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="136" y1="111" x2="136" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="129" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="180" y1="111" x2="180" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="129" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="224" y1="111" x2="224" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="129" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="268" y1="111" x2="268" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="268" y="129" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="312" y1="111" x2="312" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="312" y="129" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="89" y1="202" x2="95" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="206" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="89" y1="26" x2="95" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="58.3,193.4 58.3,193.3 58.5,192 58.6,190.8 58.8,189.5 59,188.3 59.2,187 59.4,185.8 59.5,184.6 59.7,183.4 59.9,182.2 60.1,181.1 60.3,179.9 60.5,178.8 60.6,177.7 60.8,176.5 61,175.5 61.2,174.4 61.4,173.3 61.6,172.2 61.8,171.2 61.9,170.2 62.1,169.1 62.3,168.1 62.5,167.1 62.7,166.1 62.9,165.2 63,164.2 63.2,163.3 63.4,162.3 63.6,161.4 63.8,160.5 64,159.6 64.1,158.7 64.3,157.8 64.5,157 64.7,156.1 64.9,155.3 65,154.4 65.2,153.6 65.4,152.8 65.6,152 65.8,151.2 66,150.5 66.2,149.7 66.3,148.9 66.5,148.2 66.7,147.5 66.9,146.7 67.1,146 67.3,145.3 67.4,144.6 67.6,144 67.8,143.3 68,142.6 68.2,142 68.3,141.3 68.5,140.7 68.7,140.1 68.9,139.5 69.1,138.9 69.3,138.3 69.5,137.7 69.6,137.1 69.8,136.6 70,136" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="57.2,201.3 53.6,190.7 63.5,192.1" fill="currentColor"/>
  <polyline points="92,114 92,113.8 92,113.5 92,113.3 92,113 92.1,112.8 92.1,112.5 92.1,112.3 92.2,112 92.2,111.8 92.3,111.5 92.3,111.3 92.4,111 92.5,110.8 92.6,110.5 92.6,110.3 92.7,110 92.8,109.8 92.9,109.5 93,109.3 93.1,109 93.2,108.8 93.4,108.5 93.5,108.3 93.6,108 93.8,107.8 93.9,107.5 94.1,107.3 94.2,107 94.4,106.8 94.5,106.5 94.7,106.3 94.9,106 95.1,105.8 95.3,105.5 95.5,105.3 95.7,105 95.9,104.8 96.1,104.5 96.3,104.3 96.5,104 96.8,103.8 97,103.5 97.2,103.3 97.5,103 97.7,102.8 98,102.5 98.2,102.3 98.5,102 98.8,101.8 99.1,101.5 99.4,101.3 99.6,101 99.9,100.8 100.2,100.5 100.5,100.3 100.9,100 101.2,99.8 101.5,99.5 101.8,99.3 102.2,99 102.5,98.8 102.9,98.5 103.2,98.3 103.6,98 103.9,97.8 104.3,97.5 104.7,97.3 105.1,97 105.5,96.8 105.8,96.5 106.2,96.3 106.7,96 107.1,95.8 107.5,95.5 107.9,95.3 108.3,95 108.8,94.8 109.2,94.6 109.6,94.3 110.1,94.1 110.5,93.8 111,93.6 111.5,93.3 111.9,93.1 112.4,92.8 112.9,92.6 113.4,92.3 113.9,92.1 114.4,91.8 114.9,91.6 115.4,91.3 115.9,91.1 116.4,90.8 117,90.6 117.5,90.3 118,90.1 118.6,89.8 119.1,89.6 119.7,89.3 120.3,89.1 120.8,88.8 121.4,88.6 122,88.3 122.6,88.1 123.2,87.8 123.8,87.6 124.4,87.3 125,87.1 125.6,86.8 126.2,86.6 126.8,86.3 127.5,86.1 128.1,85.8 128.7,85.6 129.4,85.3 130,85.1 130.7,84.8 131.4,84.6 132,84.3 132.7,84.1 133.4,83.8 134.1,83.6 134.8,83.3 135.5,83.1 136.2,82.8 136.9,82.6 137.6,82.3 138.3,82.1 139,81.8 139.8,81.6 140.5,81.3 141.2,81.1 142,80.8 142.7,80.6 143.5,80.3 144.3,80.1 145,79.8 145.8,79.6 146.6,79.3 147.4,79.1 148.2,78.8 149,78.6 149.8,78.3 150.6,78.1 151.4,77.8 152.2,77.6 153.1,77.3 153.9,77.1 154.7,76.8 155.6,76.6 156.4,76.3 157.3,76.1 158.2,75.8 159,75.6 159.9,75.3 160.8,75.1 161.7,74.9 162.6,74.6 163.5,74.4 164.4,74.1 165.3,73.9 166.2,73.6 167.1,73.4 168,73.1 168.9,72.9 169.9,72.6 170.8,72.4 171.8,72.1 172.7,71.9 173.7,71.6 174.6,71.4 175.6,71.1 176.6,70.9 177.6,70.6 178.6,70.4 179.5,70.1 180.5,69.9 181.5,69.6 182.6,69.4 183.6,69.1 184.6,68.9 185.6,68.6 186.6,68.4 187.7,68.1 188.7,67.9 189.8,67.6 190.8,67.4 191.9,67.1 193,66.9 194,66.6 195.1,66.4 196.2,66.1 197.3,65.9 198.4,65.6 199.5,65.4 200.6,65.1 201.7,64.9 202.8,64.6 203.9,64.4 205.1,64.1 206.2,63.9 207.3,63.6 208.5,63.4 209.6,63.1 210.8,62.9 211.9,62.6 213.1,62.4 214.3,62.1 215.5,61.9 216.6,61.6 217.8,61.4 219,61.1 220.2,60.9 221.4,60.6 222.6,60.4 223.9,60.1 225.1,59.9 226.3,59.6 227.6,59.4 228.8,59.1 230,58.9 231.3,58.6 232.5,58.4 233.8,58.1 235.1,57.9 236.4,57.6 237.6,57.4 238.9,57.1 240.2,56.9 241.5,56.6 242.8,56.4 244.1,56.1 245.4,55.9 246.8,55.7 248.1,55.4 249.4,55.2 250.7,54.9 252.1,54.7 253.4,54.4 254.8,54.2 256.2,53.9 257.5,53.7 258.9,53.4 260.3,53.2 261.6,52.9 263,52.7 264.4,52.4 265.8,52.2 267.2,51.9 268.6,51.7 270.1,51.4 271.5,51.2 272.9,50.9 274.3,50.7 275.8,50.4 277.2,50.2 278.7,49.9 280.1,49.7 281.6,49.4 283.1,49.2 284.5,48.9 286,48.7 287.5,48.4 289,48.2 290.5,47.9 292,47.7 293.5,47.4 295,47.2 296.5,46.9 298,46.7 299.6,46.4 301.1,46.2 302.5,45.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="310.4,44.7 301.3,51.2 299.8,41.3" fill="currentColor"/>
  <line x1="70" y1="158" x2="180" y2="158" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="70" cy="136" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="70" cy="158" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="180" cy="158" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="92" cy="114" r="4" fill="currentColor"/>
</svg>
===OPT===
<svg role="img" aria-label="A cubic curve rising from the lower left to an open circle at (−1, −1); a horizontal segment at height −2 between open circles at (−1, −2) and (4, −2); and a square-root curve from an open circle at (4, 2) rising slowly to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 228" width="338" height="228" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="202" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="202" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="202" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="202" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="202" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="202" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="202" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="202" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="202" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="202" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="202" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="202" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="312" y1="202" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="312" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="312" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="312" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="312" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="312" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="312" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="312" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="114" x2="314" y2="114" stroke="currentColor" stroke-width="1"/>
  <line x1="92" y1="24" x2="92" y2="204" stroke="currentColor" stroke-width="1"/>
  <polygon points="324,114 314,119 314,109" fill="currentColor"/>
  <polygon points="92,14 97,24 87,24" fill="currentColor"/>
  <polygon points="14,114 24,109 24,119" fill="currentColor"/>
  <polygon points="92,214 87,204 97,204" fill="currentColor"/>
  <text x="322" y="106" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="100" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="48" y1="111" x2="48" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="129" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="136" y1="111" x2="136" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="129" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="180" y1="111" x2="180" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="129" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="224" y1="111" x2="224" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="129" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="268" y1="111" x2="268" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="268" y="129" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="312" y1="111" x2="312" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="312" y="129" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="89" y1="202" x2="95" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="206" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="89" y1="26" x2="95" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="58.3,193.4 58.3,193.3 58.5,192 58.6,190.8 58.8,189.5 59,188.3 59.2,187 59.4,185.8 59.5,184.6 59.7,183.4 59.9,182.2 60.1,181.1 60.3,179.9 60.5,178.8 60.6,177.7 60.8,176.5 61,175.5 61.2,174.4 61.4,173.3 61.6,172.2 61.8,171.2 61.9,170.2 62.1,169.1 62.3,168.1 62.5,167.1 62.7,166.1 62.9,165.2 63,164.2 63.2,163.3 63.4,162.3 63.6,161.4 63.8,160.5 64,159.6 64.1,158.7 64.3,157.8 64.5,157 64.7,156.1 64.9,155.3 65,154.4 65.2,153.6 65.4,152.8 65.6,152 65.8,151.2 66,150.5 66.2,149.7 66.3,148.9 66.5,148.2 66.7,147.5 66.9,146.7 67.1,146 67.3,145.3 67.4,144.6 67.6,144 67.8,143.3 68,142.6 68.2,142 68.3,141.3 68.5,140.7 68.7,140.1 68.9,139.5 69.1,138.9 69.3,138.3 69.5,137.7 69.6,137.1 69.8,136.6 70,136" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="57.2,201.3 53.6,190.7 63.5,192.1" fill="currentColor"/>
  <polyline points="180,70 180.4,69.9 180.9,69.8 181.3,69.7 181.7,69.6 182.1,69.5 182.6,69.4 183,69.3 183.4,69.1 183.9,69 184.3,68.9 184.8,68.8 185.2,68.7 185.6,68.6 186.1,68.5 186.5,68.4 187,68.3 187.4,68.2 187.8,68.1 188.3,68 188.7,67.9 189.2,67.8 189.6,67.7 190.1,67.5 190.5,67.4 191,67.3 191.4,67.2 191.9,67.1 192.3,67 192.8,66.9 193.2,66.8 193.7,66.7 194.2,66.6 194.6,66.5 195.1,66.4 195.5,66.3 196,66.2 196.5,66.1 196.9,66 197.4,65.8 197.9,65.7 198.3,65.6 198.8,65.5 199.3,65.4 199.8,65.3 200.2,65.2 200.7,65.1 201.2,65 201.6,64.9 202.1,64.8 202.6,64.7 203.1,64.6 203.6,64.5 204,64.4 204.5,64.2 205,64.1 205.5,64 206,63.9 206.5,63.8 206.9,63.7 207.4,63.6 207.9,63.5 208.4,63.4 208.9,63.3 209.4,63.2 209.9,63.1 210.4,63 210.9,62.9 211.4,62.8 211.9,62.6 212.4,62.5 212.9,62.4 213.4,62.3 213.9,62.2 214.4,62.1 214.9,62 215.4,61.9 215.9,61.8 216.4,61.7 216.9,61.6 217.4,61.5 217.9,61.4 218.4,61.3 218.9,61.2 219.4,61.1 220,60.9 220.5,60.8 221,60.7 221.5,60.6 222,60.5 222.5,60.4 223.1,60.3 223.6,60.2 224.1,60.1 224.6,60 225.1,59.9 225.7,59.8 226.2,59.7 226.7,59.6 227.2,59.5 227.8,59.3 228.3,59.2 228.8,59.1 229.4,59 229.9,58.9 230.4,58.8 231,58.7 231.5,58.6 232,58.5 232.6,58.4 233.1,58.3 233.7,58.2 234.2,58.1 234.7,58 235.3,57.9 235.8,57.7 236.4,57.6 236.9,57.5 237.5,57.4 238,57.3 238.6,57.2 239.1,57.1 239.7,57 240.2,56.9 240.8,56.8 241.3,56.7 241.9,56.6 242.4,56.5 243,56.4 243.6,56.3 244.1,56.1 244.7,56 245.2,55.9 245.8,55.8 246.4,55.7 246.9,55.6 247.5,55.5 248.1,55.4 248.6,55.3 249.2,55.2 249.8,55.1 250.3,55 250.9,54.9 251.5,54.8 252.1,54.7 252.6,54.6 253.2,54.4 253.8,54.3 254.4,54.2 255,54.1 255.5,54 256.1,53.9 256.7,53.8 257.3,53.7 257.9,53.6 258.5,53.5 259,53.4 259.6,53.3 260.2,53.2 260.8,53.1 261.4,53 262,52.8 262.6,52.7 263.2,52.6 263.8,52.5 264.4,52.4 265,52.3 265.6,52.2 266.2,52.1 266.8,52 267.4,51.9 268,51.8 268.6,51.7 269.2,51.6 269.8,51.5 270.4,51.4 271,51.2 271.6,51.1 272.2,51 272.8,50.9 273.4,50.8 274,50.7 274.7,50.6 275.3,50.5 275.9,50.4 276.5,50.3 277.1,50.2 277.7,50.1 278.4,50 279,49.9 279.6,49.8 280.2,49.7 280.8,49.5 281.5,49.4 282.1,49.3 282.7,49.2 283.4,49.1 284,49 284.6,48.9 285.2,48.8 285.9,48.7 286.5,48.6 287.1,48.5 287.8,48.4 288.4,48.3 289,48.2 289.7,48.1 290.3,47.9 291,47.8 291.6,47.7 292.2,47.6 292.9,47.5 293.5,47.4 294.2,47.3 294.8,47.2 295.5,47.1 296.1,47 296.8,46.9 297.4,46.8 298.1,46.7 298.7,46.6 299.4,46.5 300,46.3 300.7,46.2 301.4,46.1 302,46 302.7,45.9 303.3,45.8 303.4,45.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="311.3,44.5 302.2,51.1 300.7,41.2" fill="currentColor"/>
  <line x1="70" y1="158" x2="180" y2="158" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="70" cy="136" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="70" cy="158" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="180" cy="158" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="180" cy="70" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
===OPT===
<svg role="img" aria-label="A cubic curve rising from the lower left to an open circle at (−1, −1); a horizontal segment at height 2 between open circles at (−1, 2) and (4, 2); and a square-root curve from an open circle at (4, 2) rising slowly to the right." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 228" width="338" height="228" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="202" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="48" y1="202" x2="48" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="70" y1="202" x2="70" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="114" y1="202" x2="114" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="136" y1="202" x2="136" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="202" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="180" y1="202" x2="180" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="202" y1="202" x2="202" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="202" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="246" y1="202" x2="246" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="268" y1="202" x2="268" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="202" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="312" y1="202" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="202" x2="312" y2="202" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="180" x2="312" y2="180" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="312" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="136" x2="312" y2="136" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="92" x2="312" y2="92" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="70" x2="312" y2="70" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="48" x2="312" y2="48" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="312" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="114" x2="314" y2="114" stroke="currentColor" stroke-width="1"/>
  <line x1="92" y1="24" x2="92" y2="204" stroke="currentColor" stroke-width="1"/>
  <polygon points="324,114 314,119 314,109" fill="currentColor"/>
  <polygon points="92,14 97,24 87,24" fill="currentColor"/>
  <polygon points="14,114 24,109 24,119" fill="currentColor"/>
  <polygon points="92,214 87,204 97,204" fill="currentColor"/>
  <text x="322" y="106" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="100" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="48" y1="111" x2="48" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="48" y="129" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="136" y1="111" x2="136" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="136" y="129" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="180" y1="111" x2="180" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="129" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="224" y1="111" x2="224" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="129" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="268" y1="111" x2="268" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="268" y="129" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="312" y1="111" x2="312" y2="117" stroke="currentColor" stroke-width="1"/>
  <text x="312" y="129" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="89" y1="202" x2="95" y2="202" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="206" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="89" y1="26" x2="95" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="58.3,193.4 58.3,193.3 58.5,192 58.6,190.8 58.8,189.5 59,188.3 59.2,187 59.4,185.8 59.5,184.6 59.7,183.4 59.9,182.2 60.1,181.1 60.3,179.9 60.5,178.8 60.6,177.7 60.8,176.5 61,175.5 61.2,174.4 61.4,173.3 61.6,172.2 61.8,171.2 61.9,170.2 62.1,169.1 62.3,168.1 62.5,167.1 62.7,166.1 62.9,165.2 63,164.2 63.2,163.3 63.4,162.3 63.6,161.4 63.8,160.5 64,159.6 64.1,158.7 64.3,157.8 64.5,157 64.7,156.1 64.9,155.3 65,154.4 65.2,153.6 65.4,152.8 65.6,152 65.8,151.2 66,150.5 66.2,149.7 66.3,148.9 66.5,148.2 66.7,147.5 66.9,146.7 67.1,146 67.3,145.3 67.4,144.6 67.6,144 67.8,143.3 68,142.6 68.2,142 68.3,141.3 68.5,140.7 68.7,140.1 68.9,139.5 69.1,138.9 69.3,138.3 69.5,137.7 69.6,137.1 69.8,136.6 70,136" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="57.2,201.3 53.6,190.7 63.5,192.1" fill="currentColor"/>
  <polyline points="180,70 180.4,69.9 180.9,69.8 181.3,69.7 181.7,69.6 182.1,69.5 182.6,69.4 183,69.3 183.4,69.1 183.9,69 184.3,68.9 184.8,68.8 185.2,68.7 185.6,68.6 186.1,68.5 186.5,68.4 187,68.3 187.4,68.2 187.8,68.1 188.3,68 188.7,67.9 189.2,67.8 189.6,67.7 190.1,67.5 190.5,67.4 191,67.3 191.4,67.2 191.9,67.1 192.3,67 192.8,66.9 193.2,66.8 193.7,66.7 194.2,66.6 194.6,66.5 195.1,66.4 195.5,66.3 196,66.2 196.5,66.1 196.9,66 197.4,65.8 197.9,65.7 198.3,65.6 198.8,65.5 199.3,65.4 199.8,65.3 200.2,65.2 200.7,65.1 201.2,65 201.6,64.9 202.1,64.8 202.6,64.7 203.1,64.6 203.6,64.5 204,64.4 204.5,64.2 205,64.1 205.5,64 206,63.9 206.5,63.8 206.9,63.7 207.4,63.6 207.9,63.5 208.4,63.4 208.9,63.3 209.4,63.2 209.9,63.1 210.4,63 210.9,62.9 211.4,62.8 211.9,62.6 212.4,62.5 212.9,62.4 213.4,62.3 213.9,62.2 214.4,62.1 214.9,62 215.4,61.9 215.9,61.8 216.4,61.7 216.9,61.6 217.4,61.5 217.9,61.4 218.4,61.3 218.9,61.2 219.4,61.1 220,60.9 220.5,60.8 221,60.7 221.5,60.6 222,60.5 222.5,60.4 223.1,60.3 223.6,60.2 224.1,60.1 224.6,60 225.1,59.9 225.7,59.8 226.2,59.7 226.7,59.6 227.2,59.5 227.8,59.3 228.3,59.2 228.8,59.1 229.4,59 229.9,58.9 230.4,58.8 231,58.7 231.5,58.6 232,58.5 232.6,58.4 233.1,58.3 233.7,58.2 234.2,58.1 234.7,58 235.3,57.9 235.8,57.7 236.4,57.6 236.9,57.5 237.5,57.4 238,57.3 238.6,57.2 239.1,57.1 239.7,57 240.2,56.9 240.8,56.8 241.3,56.7 241.9,56.6 242.4,56.5 243,56.4 243.6,56.3 244.1,56.1 244.7,56 245.2,55.9 245.8,55.8 246.4,55.7 246.9,55.6 247.5,55.5 248.1,55.4 248.6,55.3 249.2,55.2 249.8,55.1 250.3,55 250.9,54.9 251.5,54.8 252.1,54.7 252.6,54.6 253.2,54.4 253.8,54.3 254.4,54.2 255,54.1 255.5,54 256.1,53.9 256.7,53.8 257.3,53.7 257.9,53.6 258.5,53.5 259,53.4 259.6,53.3 260.2,53.2 260.8,53.1 261.4,53 262,52.8 262.6,52.7 263.2,52.6 263.8,52.5 264.4,52.4 265,52.3 265.6,52.2 266.2,52.1 266.8,52 267.4,51.9 268,51.8 268.6,51.7 269.2,51.6 269.8,51.5 270.4,51.4 271,51.2 271.6,51.1 272.2,51 272.8,50.9 273.4,50.8 274,50.7 274.7,50.6 275.3,50.5 275.9,50.4 276.5,50.3 277.1,50.2 277.7,50.1 278.4,50 279,49.9 279.6,49.8 280.2,49.7 280.8,49.5 281.5,49.4 282.1,49.3 282.7,49.2 283.4,49.1 284,49 284.6,48.9 285.2,48.8 285.9,48.7 286.5,48.6 287.1,48.5 287.8,48.4 288.4,48.3 289,48.2 289.7,48.1 290.3,47.9 291,47.8 291.6,47.7 292.2,47.6 292.9,47.5 293.5,47.4 294.2,47.3 294.8,47.2 295.5,47.1 296.1,47 296.8,46.9 297.4,46.8 298.1,46.7 298.7,46.6 299.4,46.5 300,46.3 300.7,46.2 301.4,46.1 302,46 302.7,45.9 303.3,45.8 303.4,45.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="311.3,44.5 302.2,51.1 300.7,41.2" fill="currentColor"/>
  <line x1="70" y1="70" x2="180" y2="70" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="70" cy="136" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="70" cy="70" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="180" cy="70" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
</svg>
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

---

<small>This section is adapted from [Precalculus 2e, Section 1.2: Domain and Range](https://openstax.org/books/precalculus-2e/pages/1-2-domain-and-range) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: recreated every figure as an accessible inline SVG, including the two opening bar charts (whose bar heights are read from the source charts), the domain-and-range function-machine diagram, the number lines, the toolkit function library, and the piecewise graphs; presented the interval-notation summary and the inequality/set-builder/interval comparison as Markdown tables, with the comparison's number lines following as a labelled figure group and the generic $a$-and-$b$ number lines of the first summary replaced by its own description column; omitted the media links and end-of-section exercises; converted the practice problems ("Try Its") into interactive exercises with instant feedback, presented as multiple choice because interval and set-builder notation cannot be graded as free-response math; and presented the piecewise-sketching practice item as a "which graph is correct" question, since the graphing component cannot accept a piecewise answer.</small>
