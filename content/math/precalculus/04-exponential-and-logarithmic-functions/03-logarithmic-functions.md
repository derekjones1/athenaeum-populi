---
title: Logarithmic Functions
description: >-
  Converting between logarithmic and exponential form, evaluating logarithms
  by hand and with a calculator, and using the common (base-10) and natural
  (base-$e$) logarithms — adapted from OpenStax Precalculus 2e, Section 4.3.
source_section: "4.3"
weight: 3
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Convert from logarithmic to exponential form
- Convert from exponential to logarithmic form
- Evaluate logarithms
- Use common logarithms
- Use natural logarithms
{{< /callout >}}

In 2010, a major earthquake struck Haiti, destroying or damaging over 285,000 homes. One year later, another, stronger earthquake devastated Honshu, Japan, destroying or damaging over 332,000 buildings. Even though both caused substantial damage, the earthquake in 2011 was 100 times stronger than the earthquake in Haiti. How do we know? The magnitudes of earthquakes are measured on a scale known as the Richter Scale. The Haitian earthquake registered a 7.0 on the Richter Scale, whereas the Japanese earthquake registered a 9.0.

The Richter Scale is a base-ten logarithmic scale. In other words, an earthquake of magnitude 8 is not twice as great as an earthquake of magnitude 4. It is $10^{8-4}=10^4=10{,}000$ times as great! In this lesson, we will investigate the nature of the Richter Scale and the base-ten function upon which it depends.

## Converting from Logarithmic to Exponential Form

In order to analyze the magnitude of earthquakes or compare the magnitudes of two different earthquakes, we need to be able to convert between logarithmic and exponential form. For example, suppose the amount of energy released from one earthquake were 500 times greater than the amount of energy released from another. We want to calculate the difference in magnitude. The equation that represents this problem is $10^x=500$, where $x$ represents the difference in magnitudes on the **Richter Scale**. How would we solve for $x$?

We have not yet learned a method for solving exponential equations. None of the algebraic tools discussed so far is sufficient to solve $10^x=500$. We know that $10^2=100$ and $10^3=1000$, so it is clear that $x$ must be some value between 2 and 3, since $y=10^x$ is increasing. We can examine a graph to better estimate the solution.

{{< apfigure kind="graph" >}}
{"ariaLabel":"The curve y equals 10 to the x power, rising from near 0 at x = -0.5 to 1,000 at x = 3. A dashed horizontal line at y = 500 crosses the curve at about x = 2.7, the value being estimated.","xMin":-0.5,"xMax":3,"yMin":-100,"yMax":1000,"xUnit":110,"yUnit":0.45,"margin":40,"grid":false,"tickLabels":true,"xTickStep":0.5,"yTickStep":100,"curves":[{"kind":"exp","a":1,"h":0,"k":0,"b":10}],"lines":[{"y":500,"dashed":true,"arrows":false}],"texts":[{"at":[2.15,850],"text":"y = 10ˣ","anchor":"start"},{"at":[0.3,560],"text":"y = 500","anchor":"start"}]}
{{< /apfigure >}}

Estimating from a graph, however, is imprecise. To find an algebraic solution, we must introduce a new function. Observe that the graph passes the horizontal line test. The exponential function $y=b^x$ is one-to-one, so its inverse, $x=b^y$, is also a function. As is the case with all inverse functions, we simply interchange $x$ and $y$ and solve for $y$ to find the inverse function. To represent $y$ as a function of $x$, we use a logarithmic function of the form $y=\log_b(x)$. The base $b$ **logarithm** of a number is the exponent by which we must raise $b$ to get that number.

We read a logarithmic expression as, "The logarithm with base $b$ of $x$ is equal to $y$," or, simplified, "log base $b$ of $x$ is $y$." We can also say, "$b$ raised to the power of $y$ is $x$," because logs are exponents. For example, the base 2 logarithm of 32 is 5, because 5 is the exponent we must apply to 2 to get 32. Since $2^5=32$, we can write $\log_2 32=5$. We read this as "log base 2 of 32 is 5."

We can express the relationship between logarithmic form and its corresponding exponential form as follows:

$$\log_b(x)=y\iff b^y=x,\quad b>0,\ b\ne1$$

Note that the base $b$ is always positive. To help with converting back and forth, take a close look at the equations: in both forms, $y$ is the exponent and $b$ is the base — a quick way to remember the relationship is to think "$b$ to the $y$ equals $x$."

Because logarithm is a function, it is most correctly written as $\log_b(x)$, using parentheses to denote function evaluation, just as we would with $f(x)$. However, when the input is a single variable or number, it is common to see the parentheses dropped and the expression written without parentheses, as $\log_b x$. Note that many calculators require parentheses around the $x$. For example, $\log_b(c)=a$ means $b^a=c$.

Notice that, comparing the logarithm function and the exponential function, the input and the output are switched. This means $y=\log_b(x)$ and $y=b^x$ are inverse functions.

{{< callout type="info" >}}
**Definition of the Logarithmic Function.** A **logarithm** base $b$ of a positive number $x$ satisfies the following definition.

For $x>0$, $b>0$, $b\ne1$,

$$y=\log_b(x)\ \text{is equivalent to}\ b^y=x$$

where,

  - we read $\log_b(x)$ as, "the logarithm with base $b$ of $x$" or the "log base $b$ of $x$."
  - the logarithm $y$ is the exponent to which $b$ must be raised to get $x$.

Also, since the logarithmic and exponential functions switch the $x$ and $y$ values, the domain and range of the exponential function are interchanged for the logarithmic function. Therefore,

  - the domain of the logarithm function with base $b$ is $(0,\infty)$.
  - the range of the logarithm function with base $b$ is $(-\infty,\infty)$.
{{< /callout >}}

{{< callout type="info" >}}
**Q&A.** *Can we take the logarithm of a negative number?*

No. Because the base of an exponential function is always positive, no power of that base can ever be negative. We can never take the logarithm of a negative number. Also, we cannot take the logarithm of zero. Calculators may output a log of a negative number when in complex mode, but the log of a negative number is not a real number.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given an equation in logarithmic form $\log_b(x)=y$, convert it to exponential form.

1. Examine the equation $y=\log_b(x)$ and identify $b$, $y$, and $x$.
2. Rewrite $\log_b(x)=y$ as $b^y=x$.
{{< /callout >}}

**Example.** Write the following logarithmic equations in exponential form.

(a) $\log_6(\sqrt6)=\tfrac{1}{2}$

(b) $\log_3(9)=2$

**Solution.** First, identify the values of $b$, $y$, and $x$. Then, write the equation in the form $b^y=x$.

(a) Here, $b=6$, $y=\tfrac{1}{2}$, and $x=\sqrt6$. Therefore, the equation $\log_6(\sqrt6)=\tfrac{1}{2}$ is equivalent to $6^{1/2}=\sqrt6$.

(b) Here, $b=3$, $y=2$, and $x=9$. Therefore, the equation $\log_3(9)=2$ is equivalent to $3^2=9$.

{{< fillin
  question="Write $\log_{10}(1{,}000{,}000)=6$ in exponential form."
  answer="10^6=1{,}000{,}000"
  answerForm="exponential-form"
  answerDisplay="$10^6=1{,}000{,}000$"
  hint="Identify $b=10$, $y=6$, and $x=1{,}000{,}000$, then rewrite as $b^y=x$."
>}}

{{< fillin
  question="Write $\log_5(25)=2$ in exponential form."
  answer="5^2=25"
  answerForm="exponential-form"
  answerDisplay="$5^2=25$"
  hint="Identify $b=5$, $y=2$, and $x=25$, then rewrite as $b^y=x$."
>}}

## Converting from Exponential to Logarithmic Form

To convert from exponents to logarithms, we follow the same steps in reverse. We identify the base $b$, exponent $x$, and output $y$. Then we write $x=\log_b(y)$.

**Example.** Write the following exponential equations in logarithmic form.

(a) $2^3=8$

(b) $5^2=25$

(c) $10^{-4}=\tfrac{1}{10{,}000}$

**Solution.** First, identify the values of $b$, $y$, and $x$. Then, write the equation in the form $x=\log_b(y)$.

(a) Here, $b=2$, $x=3$, and $y=8$. Therefore, the equation $2^3=8$ is equivalent to $\log_2(8)=3$.

(b) Here, $b=5$, $x=2$, and $y=25$. Therefore, the equation $5^2=25$ is equivalent to $\log_5(25)=2$.

(c) Here, $b=10$, $x=-4$, and $y=\tfrac{1}{10{,}000}$. Therefore, the equation $10^{-4}=\tfrac{1}{10{,}000}$ is equivalent to $\log_{10}\left(\tfrac{1}{10{,}000}\right)=-4$.

{{< multiplechoice
  question="Which equation is $3^2=9$ written in logarithmic form?"
  answer="$\log_3(9)=2$"
  hint="The base of the power becomes the base of the logarithm, and the exponent becomes the value the logarithm equals."
>}}
$\log_3(9)=2$
$\log_9(3)=2$
$\log_2(9)=3$
$\log_3(2)=9$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which equation is $5^3=125$ written in logarithmic form?"
  answer="$\log_5(125)=3$"
  hint="The base of the power becomes the base of the logarithm, and the exponent becomes the value the logarithm equals."
>}}
$\log_5(125)=3$
$\log_{125}(5)=3$
$\log_3(125)=5$
$\log_5(3)=125$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which equation is $2^{-1}=\tfrac{1}{2}$ written in logarithmic form?"
  answer="$\log_2\left(\tfrac{1}{2}\right)=-1$"
  hint="The base of the power becomes the base of the logarithm, and the exponent becomes the value the logarithm equals."
>}}
$\log_2\left(\tfrac{1}{2}\right)=-1$
$\log_{1/2}(2)=-1$
$\log_2(-1)=\tfrac{1}{2}$
$\log_{-1}\left(\tfrac{1}{2}\right)=2$
{{< /multiplechoice >}}

## Evaluating Logarithms

Knowing the squares, cubes, and roots of numbers allows us to evaluate many logarithms mentally. For example, consider $\log_2 8$. We ask, "To what exponent must $2$ be raised in order to get 8?" Because we already know $2^3=8$, it follows that $\log_2 8=3$.

Now consider solving $\log_7 49$ and $\log_3 27$ mentally.

- We ask, "To what exponent must 7 be raised in order to get 49?" We know $7^2=49$. Therefore, $\log_7 49=2$.
- We ask, "To what exponent must 3 be raised in order to get 27?" We know $3^3=27$. Therefore, $\log_3 27=3$.

Even some seemingly more complicated logarithms can be evaluated without a calculator. For example, let's evaluate $\log_{2/3}\tfrac{4}{9}$ mentally.

- We ask, "To what exponent must $\tfrac{2}{3}$ be raised in order to get $\tfrac{4}{9}$?" We know $2^2=4$ and $3^2=9$, so $\left(\tfrac{2}{3}\right)^2=\tfrac{4}{9}$. Therefore, $\log_{2/3}\left(\tfrac{4}{9}\right)=2$.

{{< callout type="info" >}}
**How to:** given a logarithm of the form $y=\log_b(x)$, evaluate it mentally.

1. Rewrite the argument $x$ as a power of $b$: $b^y=x$.
2. Use previous knowledge of powers of $b$ to identify $y$ by asking, "To what exponent should $b$ be raised in order to get $x$?"
{{< /callout >}}

**Example.** Solve $y=\log_4(64)$ without using a calculator.

**Solution.** First we rewrite the logarithm in exponential form: $4^y=64$. Next, we ask, "To what exponent must 4 be raised in order to get 64?"

We know

$$4^3=64$$

Therefore,

$$\log_4(64)=3$$

{{< fillin
  question="Solve $y=\log_{121}(11)$ without using a calculator."
  answer="1/2"
  answerForm="evaluated-logarithm"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Rewrite as $121^y=11$, and recall that $\sqrt{121}=(121)^{1/2}=11$."
>}}

**Example.** Evaluate $y=\log_3\left(\tfrac{1}{27}\right)$ without using a calculator.

**Solution.** First we rewrite the logarithm in exponential form: $3^y=\tfrac{1}{27}$. Next, we ask, "To what exponent must 3 be raised in order to get $\tfrac{1}{27}$?"

We know $3^3=27$, but what must we do to get the reciprocal, $\tfrac{1}{27}$? Recall from working with exponents that $b^{-a}=\tfrac{1}{b^a}$. We use this information to write

$$
\begin{array}{lrcl}
& 3^{-3} &=& \tfrac{1}{3^3} \\[4pt]
& &=& \tfrac{1}{27}
\end{array}
$$

Therefore, $\log_3\left(\tfrac{1}{27}\right)=-3$.

{{< fillin
  question="Evaluate $y=\log_2\left(\tfrac{1}{32}\right)$ without using a calculator."
  answer="-5"
  answerForm="evaluated-logarithm"
  answerDisplay="$-5$"
  hint="Rewrite as $2^y=\tfrac{1}{32}$, and recall that $b^{-a}=\tfrac{1}{b^a}$."
>}}

## Using Common Logarithms

Sometimes you may see a logarithm written without a base. When you see one written this way, you need to look at the expression before evaluating it. It may be that the base you use doesn't matter. If you find it in computer science, it often means $\log_2(x)$. However, in mathematics it almost always means the common logarithm of 10. In other words, the expression $\log(x)$ often means $\log_{10}(x)$.

{{< callout type="info" >}}
**Definition of the Common Logarithm.** A **common logarithm** is a logarithm with base $10$. We can also write $\log_{10}(x)$ simply as $\log(x)$. The common logarithm of a positive number $x$ satisfies the following definition.

For $x>0$,

$$y=\log(x)\ \text{is equivalent to}\ 10^y=x$$

We read $\log(x)$ as, "the logarithm with base $10$ of $x$" or "log base 10 of $x$."

The logarithm $y$ is the exponent to which $10$ must be raised to get $x$.
{{< /callout >}}

Currently, we use $\log(x)$ or $\text{lg}(x)$ as the common logarithm, $\text{lb}(x)$ as the binary logarithm, and $\ln(x)$ as the natural logarithm. Writing $\log(x)$ without specifying a base is now considered bad form, despite being frequently found in older materials.

{{< callout type="info" >}}
  **Source note.** The source module (m49363) gets this sentence wrong
  twice. It prints “$\log_b(x)$, $\text{lg}(x)$ as the common logarithm”,
  but a base-$b$ logarithm is not the common (base-10) logarithm the
  paragraph above defines; and it then deprecates the wrong notation, “Writing
  $\text{lg}(x)$ without specifying a base is now considered bad form”, when
  ISO 80000-2 fixes $\text{lg}$ at base 10 and it is bare $\log(x)$ that is
  ambiguous — exactly as the paragraph above explains. This page writes
  “$\log(x)$ or $\text{lg}(x)$” and “Writing $\log(x)$”.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given a common logarithm of the form $y=\log(x)$, evaluate it mentally.

1. Rewrite the argument $x$ as a power of $10$: $10^y=x$.
2. Use previous knowledge of powers of $10$ to identify $y$ by asking, "To what exponent must $10$ be raised in order to get $x$?"
{{< /callout >}}

**Example.** Evaluate $y=\log(1000)$ without using a calculator.

**Solution.** First we rewrite the logarithm in exponential form: $10^y=1000$. Next, we ask, "To what exponent must $10$ be raised in order to get 1000?" We know

$$10^3=1000$$

Therefore, $\log(1000)=3$.

{{< fillin
  question="Evaluate $y=\log(1{,}000{,}000)$."
  answer="6"
  answerForm="evaluated-logarithm"
  answerDisplay="$6$"
  hint="Ask what power of $10$ gives $1{,}000{,}000$."
>}}

{{< callout type="info" >}}
**How to:** given a common logarithm with the form $y=\log(x)$, evaluate it using a calculator.

1. Press **[LOG]**.
2. Enter the value given for $x$, followed by **[)]**.
3. Press **[ENTER]**.
{{< /callout >}}

**Example.** Evaluate $y=\log(321)$ to four decimal places using a calculator.

**Solution.**

1. Press **[LOG]**.
2. Enter 321, followed by **[)]**.
3. Press **[ENTER]**.

Rounding to four decimal places, $\log(321)\approx2.5065$.

**Analysis.** Note that $10^2=100$ and that $10^3=1000$. Since 321 is between 100 and 1000, we know that $\log(321)$ must be between $\log(100)$ and $\log(1000)$. This gives us the following:

$$
\begin{array}{lcccl}
100 &<& 321 &<& 1000 \\[4pt]
2 &<& 2.5065 &<& 3
\end{array}
$$

{{< fillin
  question="Evaluate $y=\log(123)$ to four decimal places using a calculator."
  answer="2.0899"
  answerForm="decimal"
  answerDisplay="$2.0899$"
  hint="Enter 123 and press the log key, then round the display to four decimal places."
>}}

**Example.** The amount of energy released from one earthquake was 500 times greater than the amount of energy released from another. The equation $10^x=500$ represents this situation, where $x$ is the difference in magnitudes on the Richter Scale. To the nearest thousandth, what was the difference in magnitudes?

**Solution.** We begin by rewriting the exponential equation in logarithmic form.

$$
\begin{array}{lrcl}
& 10^x &=& 500 \\[4pt]
\text{Use the definition of the common log.} & \log(500) &=& x
\end{array}
$$

Next we evaluate the logarithm using a calculator: to the nearest thousandth, $\log(500)\approx2.699$.

The difference in magnitudes was about $2.699$.

{{< fillin
  question="The amount of energy released from one earthquake was 8,500 times greater than the amount of energy released from another. The equation $10^x=8{,}500$ represents this situation, where $x$ is the difference in magnitudes on the Richter Scale. To the nearest thousandth, what was the difference in magnitudes?"
  answer="3.929"
  answerForm="decimal"
  answerDisplay="$3.929$"
  hint="Rewrite the equation in logarithmic form, $x=\log(8{,}500)$, then evaluate with a calculator."
>}}

## Using Natural Logarithms

The most frequently used base for logarithms is $e$, the value of which is approximately $2.71828$. Base $e$ logarithms are important in calculus and some scientific applications; they are called **natural logarithms**. The base $e$ logarithm, $\log_e(x)$, has its own notation, $\ln(x)$.

Most values of $\ln(x)$ can be found only using a calculator. The major exception is that, because the logarithm of 1 is always 0 in any base, $\ln1=0$. For other natural logarithms, we can use the $\ln$ key that can be found on most scientific calculators. We can also find the natural logarithm of any power of $e$ using the inverse property of logarithms.

{{< callout type="info" >}}
**Definition of the Natural Logarithm.** A **natural logarithm** is a logarithm with base $e$. We write $\log_e(x)$ simply as $\ln(x)$. The natural logarithm of a positive number $x$ satisfies the following definition.

For $x>0$,

$$y=\ln(x)\ \text{is equivalent to}\ e^y=x$$

We read $\ln(x)$ as, "the logarithm with base $e$ of $x$" or "the natural logarithm of $x$."

The logarithm $y$ is the exponent to which $e$ must be raised to get $x$.

Since the functions $y=e^x$ and $y=\ln(x)$ are inverse functions, $\ln(e^x)=x$ for all $x$ and $e^{\ln(x)}=x$ for $x>0$.
{{< /callout >}}

{{< callout type="info" >}}
**How to:** given a natural logarithm with the form $y=\ln(x)$, evaluate it using a calculator.

1. Press **[LN]**.
2. Enter the value given for $x$, followed by **[)]**.
3. Press **[ENTER]**.
{{< /callout >}}

**Example.** Evaluate $y=\ln(500)$ to four decimal places using a calculator.

**Solution.**

1. Press **[LN]**.
2. Enter 500, followed by **[)]**.
3. Press **[ENTER]**.

Rounding to four decimal places, $\ln(500)\approx6.2146$.

{{< multiplechoice
  question="Evaluate $\ln(-500)$."
  answer="It is not possible; the natural logarithm of a negative number is not a real number."
  hint="The domain of every logarithm, including the natural logarithm, is the positive real numbers."
>}}
It is not possible; the natural logarithm of a negative number is not a real number.
$\approx6.2146$
$\approx-6.2146$
$0$
{{< /multiplechoice >}}

## Key equations

| Definition of the logarithmic function | For $x>0,b>0,b\ne1$, $y=\log_b(x)$ if and only if $b^y=x$. |
| :--- | :--- |
| Definition of the common logarithm | For $x>0$, $y=\log(x)$ if and only if $10^y=x$. |
| Definition of the natural logarithm | For $x>0$, $y=\ln(x)$ if and only if $e^y=x$. |

## Key concepts

- The inverse of an exponential function is a logarithmic function, and the inverse of a logarithmic function is an exponential function.
- Logarithmic equations can be written in an equivalent exponential form, using the definition of a logarithm.
- Exponential equations can be written in their equivalent logarithmic form using the definition of a logarithm.
- Logarithmic functions with base $b$ can be evaluated mentally using previous knowledge of powers of $b$.
- Common logarithms can be evaluated mentally using previous knowledge of powers of $10$.
- When common logarithms cannot be evaluated mentally, a calculator can be used.
- Real-world exponential problems with base $10$ can be rewritten as a common logarithm and then evaluated using a calculator.
- Natural logarithms can be evaluated using a calculator.

## Practice

### Convert from logarithmic to exponential form

{{< fillin
  question="Rewrite $\log_a(b)=c$ in exponential form."
  answer="a^c=b"
  answerForm="exponential-form"
  answerDisplay="$a^c=b$"
  hint="The base of the logarithm becomes the base of the power, and the value the logarithm equals becomes the exponent."
>}}

{{< fillin
  question="Rewrite $\ln(w)=n$ in exponential form."
  answer="e^n=w"
  answerForm="exponential-form"
  answerDisplay="$e^n=w$"
  hint="A natural logarithm has base $e$; the value the logarithm equals becomes the exponent on $e$."
>}}

### Convert from exponential to logarithmic form

{{< fillin
  question="Rewrite $c^d=k$ in logarithmic form."
  answer="\log_c(k)=d"
  answerDisplay="$\log_c(k)=d$"
  hint="The base of the power becomes the base of the logarithm; the exponent becomes the value the logarithm equals."
>}}

{{< fillin
  question="Rewrite $e^k=h$ in logarithmic form."
  answer="\ln(h)=k"
  answerDisplay="$\ln(h)=k$"
  hint="A power of $e$ converts to a natural logarithm, $\ln$."
>}}

### Evaluate logarithms

{{< fillin
  question="Evaluate $\log_6(\sqrt6)$ without using a calculator."
  answer="1/2"
  answerForm="evaluated-logarithm"
  answerDisplay="$\tfrac{1}{2}$"
  hint="Ask what power of $6$ gives $\sqrt6$; recall that $\sqrt6=6^{1/2}$."
>}}

{{< fillin
  question="Evaluate $6\log_8(4)$ without using a calculator."
  answer="4"
  answerForm="evaluated-logarithm"
  answerDisplay="$4$"
  hint="First find $\log_8(4)$ by asking what power of $8$ gives $4$, then multiply the result by $6$."
>}}

### Use common logarithms

{{< fillin
  question="Evaluate $\log(0.001)$ without using a calculator."
  answer="-3"
  answerForm="evaluated-logarithm"
  answerDisplay="$-3$"
  hint="Rewrite $0.001$ as a power of $10$."
>}}

{{< fillin
  question="Evaluate $\log(\sqrt2)$ using a calculator. Round to the nearest thousandth."
  answer="0.151"
  answerForm="decimal"
  answerDisplay="$0.151$"
  hint="Enter $\sqrt2$ and press the log key, then round the display to three decimal places."
>}}

### Use natural logarithms

{{< fillin
  question="Evaluate $\ln(1)$ without using a calculator."
  answer="0"
  answerForm="evaluated-logarithm"
  answerDisplay="$0$"
  hint="The logarithm of $1$ is always $0$, in any base."
>}}

{{< fillin
  question="Evaluate $25\ln\left(e^{2/5}\right)$ without using a calculator."
  answer="10"
  answerForm="evaluated-logarithm"
  answerDisplay="$10$"
  hint="Use $\ln(e^x)=x$ to evaluate the logarithm first, then multiply by $25$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 4.3: Logarithmic Functions](https://openstax.org/books/precalculus-2e/pages/4-3-logarithmic-functions) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative photograph of earthquake damage in Honshu, Japan, which carries no mathematics, and reworded the sentence that pointed at it; omitted three purely typographic arrow/mnemonic illustrations (a figure showing the positions of the exponent and base in $\log_a(x)=y$ and $x=a^y$; a circular-arrow "Think $b$ to the $y=x$" mnemonic; and a circular-arrow illustration of $\log_b(c)=a$ meaning $b^a=c$), folding each one's content directly into the surrounding prose instead; recreated the graph of $y=10^x$ and $y=500$ as an accessible inline SVG built from the exact curve equation; corrected the sentence introducing common-logarithm notation, which the pinned CNXML gets wrong twice: it prints "$\log_b(x), \text{lg}(x)$ as the common logarithm" — a base-$b$ logarithm is not the common (base-10) logarithm the surrounding paragraph defines — and then deprecates the wrong notation, "Writing $\text{lg}(x)$ without specifying a base is now considered bad form", when $\text{lg}$ is fixed at base 10 by ISO 80000-2 and it is bare $\log(x)$ that is ambiguous, exactly as the paragraph above this one explains; this page writes "$\log(x)$ or $\text{lg}(x)$ as the common logarithm" and "Writing $\log(x)$ without specifying a base"; converted the "write the following exponential equations in logarithmic form" Try It's three numeric parts ($3^2=9$, $5^3=125$, $2^{-1}=\tfrac{1}{2}$) from fill-ins into multiple-choice questions, because the pinned compute-engine build grades any two true, fully numeric equations as equal to each other regardless of content (for example $1+1=2$ grades correct against $3+3=6$), which would let a learner pass by retyping the printed exponential equation with no available answer-shape guard against it; converted the "Evaluate $\ln(-500)$" Try It into a multiple-choice question, since its answer is that the expression is undefined rather than a number; omitted the "Access this online resource" media link; and adapted ten selected end-of-section exercises — two logarithmic-to-exponential rewrites, two exponential-to-logarithmic rewrites, two mental base-$b$ evaluations, two common-logarithm evaluations, and two natural-logarithm evaluations — into interactive components in a closing Practice block, one group per objective.</small>
