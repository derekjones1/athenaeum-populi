---
title: Fractions
description: >-
  Simplifying fractions, multiplying and dividing fractions, adding and
  subtracting fractions with like and unlike denominators, using the order of
  operations to simplify fractions, evaluating variable expressions with
  fractions, and simplifying complex fractions — adapted from OpenStax
  Intermediate Algebra 2e, Section 1.3.
source_section: "1.3"
weight: 3
---

{{< callout type="info" >}}
  **By the end of this section, you will be able to:** simplify fractions,
  multiply and divide fractions, add and subtract fractions, use the order of
  operations to simplify fractions, and evaluate variable expressions with
  fractions.
{{< /callout >}}

## Simplify fractions

A **fraction** is a way to represent parts of a whole. The fraction
$\tfrac{2}{3}$ represents two of three equal parts. In the fraction
$\tfrac{2}{3}$, the $2$ is called the **numerator** and the $3$ is called the
**denominator**. The line is called the fraction bar.

<svg viewBox="0 0 160 160" role="img" aria-label="A circle divided into three equal sectors, with two of the three sectors shaded to represent the fraction two-thirds." style={{ maxWidth: 160, display: 'block', margin: '1.5rem auto' }}>
  <path d="M80 80 L80 10 A70 70 0 0 1 140.6 115 Z" fill="currentColor" opacity="0.5" />
  <path d="M80 80 L140.6 115 A70 70 0 0 1 19.4 115 Z" fill="currentColor" opacity="0.5" />
  <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
  <line x1="80" y1="80" x2="80" y2="10" stroke="currentColor" strokeWidth="1.5" />
  <line x1="80" y1="80" x2="140.6" y2="115" stroke="currentColor" strokeWidth="1.5" />
  <line x1="80" y1="80" x2="19.4" y2="115" stroke="currentColor" strokeWidth="1.5" />
</svg>

<p style={{ textAlign: 'center' }}>In the circle, $\tfrac{2}{3}$ of the circle is shaded — $2$ of the $3$ equal parts.</p>

{{< callout type="info" >}}
  **Fraction.** A **fraction** is written $\tfrac{a}{b}$, where $b \neq 0$ and
  $a$ is the **numerator** and $b$ is the **denominator**.

  A fraction represents parts of a whole. The denominator $b$ is the number of
  equal parts the whole has been divided into, and the numerator $a$ indicates
  how many parts are included.
{{< /callout >}}

Fractions that have the same value are **equivalent fractions**. The
Equivalent Fractions Property allows us to find equivalent fractions and also
simplify fractions.

{{< callout type="info" >}}
  **Equivalent Fractions Property.** If $a$, $b$, and $c$ are numbers where
  $b \neq 0$, $c \neq 0$, then

  $$\tfrac{a}{b} = \tfrac{a \cdot c}{b \cdot c} \quad\text{and}\quad \tfrac{a \cdot c}{b \cdot c} = \tfrac{a}{b}.$$
{{< /callout >}}

A fraction is considered simplified if there are no common factors, other than
$1$, in its numerator and denominator. For example,

- $\tfrac{2}{3}$ is simplified because there are no common factors of $2$ and
  $3$.
- $\tfrac{10}{15}$ is not simplified because $5$ is a common factor of $10$
  and $15$.

We simplify, or reduce, a fraction by removing the common factors of the
numerator and denominator. A fraction is not simplified until all common
factors have been removed. If an expression has fractions, it is not
completely simplified until the fractions are simplified.

Sometimes it may not be easy to find common factors of the numerator and
denominator. When this happens, a good idea is to factor the numerator and the
denominator into prime numbers. Then divide out the common factors using the
Equivalent Fractions Property.

**Example.** Simplify: $-\tfrac{315}{770}$.

Rewrite the numerator and denominator to show the common factors. If needed,
use a factor tree. Then simplify using the Equivalent Fractions Property by
dividing out common factors, and multiply the remaining factors, if necessary.

$$
\begin{array}{lrcl}
\text{Rewrite as the product of the primes.} & -\tfrac{315}{770} &=& -\tfrac{3 \cdot 3 \cdot 5 \cdot 7}{2 \cdot 5 \cdot 7 \cdot 11} \\[10pt]
\text{Divide out the common factors } 5 \text{ and } 7. && =& -\tfrac{3 \cdot 3}{2 \cdot 11} \\[10pt]
\text{Multiply the remaining factors.} && =& -\tfrac{9}{22}
\end{array}
$$

{{< fillin
  question="Simplify: $-\tfrac{69}{120}$."
  answer="-\frac{23}{40}"
  answerDisplay="$-\tfrac{23}{40}$"
  hint="Factor $69 = 3 \cdot 23$ and $120 = 2^3 \cdot 3 \cdot 5$, then divide out the common factor of $3$."
>}}

{{< fillin
  question="Simplify: $-\tfrac{120}{192}$."
  answer="-\frac{5}{8}"
  answerDisplay="$-\tfrac{5}{8}$"
  hint="The greatest common factor of $120$ and $192$ is $24$."
>}}

We now summarize the steps you should follow to simplify fractions.

{{< callout type="info" >}}
  **Simplify a fraction.**

  1. Rewrite the numerator and denominator to show the common factors. If
     needed, factor the numerator and denominator into prime numbers first.
  2. Simplify using the Equivalent Fractions Property by dividing out common
     factors.
  3. Multiply any remaining factors.
{{< /callout >}}

## Multiply and divide fractions

Many people find multiplying and dividing fractions easier than adding and
subtracting fractions.

To multiply fractions, we multiply the numerators and multiply the
denominators.

{{< callout type="info" >}}
  **Fraction Multiplication.** If $a$, $b$, $c$, and $d$ are numbers where
  $b \neq 0$, and $d \neq 0$, then

  $$\tfrac{a}{b} \cdot \tfrac{c}{d} = \tfrac{ac}{bd}.$$

  To multiply fractions, multiply the numerators and multiply the
  denominators.
{{< /callout >}}

When multiplying fractions, the properties of positive and negative numbers
still apply, of course. It is a good idea to determine the sign of the product
as the first step. In the next example, we will multiply a negative by a
negative, so the product will be positive.

When multiplying a fraction by an integer, it may be helpful to write the
integer as a fraction. Any integer, $a$, can be written as $\tfrac{a}{1}$. So,
for example, $3 = \tfrac{3}{1}$.

**Example.** Multiply: $-\tfrac{12}{5}(-20x)$.

The first step is to find the sign of the product. Since the signs are the
same, the product is positive.

$$
\begin{array}{lrcl}
\text{Determine the sign of the product; the product is positive.} && & \tfrac{12}{5}(20x) \\[4pt]
\text{Write } 20x \text{ as a fraction.} && =& \tfrac{12}{5}\left(\tfrac{20x}{1}\right) \\[10pt]
\text{Multiply.} && =& \tfrac{12 \cdot 20x}{5 \cdot 1} \\[10pt]
\text{Rewrite } 20 \text{ to show the common factor } 5 \text{ and divide it out.} && =& \tfrac{12 \cdot 4 \cdot 5 \cdot x}{5 \cdot 1} \\[10pt]
\text{Simplify.} && =& 48x
\end{array}
$$

{{< fillin
  question="Multiply: $\tfrac{11}{3}(-9a)$."
  answer="-33a"
  answerDisplay="$-33a$"
  hint="The signs are different, so the product is negative. Write $-9a$ as a fraction and divide out the common factor of $3$."
>}}

{{< fillin
  question="Multiply: $\tfrac{13}{7}(-14b)$."
  answer="-26b"
  answerDisplay="$-26b$"
  hint="The signs are different, so the product is negative. Divide out the common factor of $7$."
>}}

Now that we know how to multiply fractions, we are almost ready to divide.
Before we can do that, we need some vocabulary. The **reciprocal** of a
fraction is found by inverting the fraction, placing the numerator in the
denominator and the denominator in the numerator. The reciprocal of
$\tfrac{2}{3}$ is $\tfrac{3}{2}$. Since $4$ is written in fraction form as
$\tfrac{4}{1}$, the reciprocal of $4$ is $\tfrac{1}{4}$.

To divide fractions, we multiply the first fraction by the reciprocal of the
second.

{{< callout type="info" >}}
  **Fraction Division.** If $a$, $b$, $c$, and $d$ are numbers where
  $b \neq 0$, $c \neq 0$, and $d \neq 0$, then

  $$\tfrac{a}{b} \div \tfrac{c}{d} = \tfrac{a}{b} \cdot \tfrac{d}{c}.$$

  To divide fractions, multiply the first fraction by the **reciprocal** of
  the second.
{{< /callout >}}

We need to say $b \neq 0$, $c \neq 0$, and $d \neq 0$, to be sure we don't
divide by zero!

**Example.** Find the quotient: $-\tfrac{7}{18} \div \left(-\tfrac{14}{27}\right)$.

$$
\begin{array}{lrcl}
\text{To divide, multiply the first fraction by the reciprocal of the second.} && & -\tfrac{7}{18}\left(-\tfrac{27}{14}\right) \\[10pt]
\text{Determine the sign of the product, and then multiply.} && =& \tfrac{7 \cdot 27}{18 \cdot 14} \\[10pt]
\text{Rewrite showing common factors.} && =& \tfrac{7 \cdot 9 \cdot 3}{9 \cdot 2 \cdot 7 \cdot 2} \\[10pt]
\text{Remove common factors.} && =& \tfrac{3}{2 \cdot 2} \\[10pt]
\text{Simplify.} && =& \tfrac{3}{4}
\end{array}
$$

{{< fillin
  question="Divide: $-\tfrac{7}{27} \div \left(-\tfrac{35}{36}\right)$."
  answer="\frac{4}{15}"
  answerDisplay="$\tfrac{4}{15}$"
  hint="The signs are the same, so the quotient is positive. Multiply $\tfrac{7}{27}$ by the reciprocal $\tfrac{36}{35}$ and divide out common factors."
>}}

{{< fillin
  question="Divide: $-\tfrac{5}{14} \div \left(-\tfrac{15}{28}\right)$."
  answer="\frac{2}{3}"
  answerDisplay="$\tfrac{2}{3}$"
  hint="The signs are the same, so the quotient is positive. Multiply $\tfrac{5}{14}$ by the reciprocal $\tfrac{28}{15}$."
>}}

The numerators or denominators of some fractions contain fractions
themselves. A fraction in which the numerator or the denominator is a fraction
is called a **complex fraction**.

{{< callout type="info" >}}
  **Complex Fraction.** A **complex fraction** is a fraction in which the
  numerator or the denominator contains a fraction.
{{< /callout >}}

Some examples of complex fractions are:

$$\cfrac{\frac{6}{7}}{3} \qquad \cfrac{\frac{3}{4}}{\frac{5}{8}} \qquad \cfrac{\frac{x}{2}}{\frac{5}{6}}$$

To simplify a complex fraction, remember that the fraction bar means division.
For example, the complex fraction $\cfrac{\frac{3}{4}}{\frac{5}{8}}$ means
$\tfrac{3}{4} \div \tfrac{5}{8}$.

**Example.** Simplify: $\cfrac{\frac{x}{2}}{\frac{xy}{6}}$.

$$
\begin{array}{lrcl}
\text{Rewrite as division.} && & \tfrac{x}{2} \div \tfrac{xy}{6} \\[10pt]
\text{Multiply the first fraction by the reciprocal of the second.} && =& \tfrac{x}{2} \cdot \tfrac{6}{xy} \\[10pt]
\text{Multiply.} && =& \tfrac{x \cdot 6}{2 \cdot xy} \\[10pt]
\text{Look for common factors.} && =& \tfrac{x \cdot 3 \cdot 2}{2 \cdot x \cdot y} \\[10pt]
\text{Divide common factors and simplify.} && =& \tfrac{3}{y}
\end{array}
$$

{{< fillin
  question="Simplify: $\cfrac{\frac{a}{8}}{\frac{ab}{6}}$."
  answer="\frac{3}{4b}"
  answerDisplay="$\tfrac{3}{4b}$"
  hint="Rewrite as $\tfrac{a}{8} \div \tfrac{ab}{6}$, multiply by the reciprocal, then divide out the common factor of $a$."
>}}

{{< fillin
  question="Simplify: $\cfrac{\frac{p}{2}}{\frac{pq}{8}}$."
  answer="\frac{4}{q}"
  answerDisplay="$\tfrac{4}{q}$"
  hint="Rewrite as $\tfrac{p}{2} \div \tfrac{pq}{8}$, multiply by the reciprocal, then divide out the common factor of $p$."
>}}

## Add and subtract fractions

When we multiplied fractions, we just multiplied the numerators and multiplied
the denominators right straight across. To add or subtract fractions, they
must have a common denominator.

{{< callout type="info" >}}
  **Fraction Addition and Subtraction.** If $a$, $b$, and $c$ are numbers
  where $c \neq 0$, then

  $$\tfrac{a}{c} + \tfrac{b}{c} = \tfrac{a + b}{c} \quad\text{and}\quad \tfrac{a}{c} - \tfrac{b}{c} = \tfrac{a - b}{c}.$$

  To add or subtract fractions, add or subtract the numerators and place the
  result over the common denominator.
{{< /callout >}}

The **least common denominator** (LCD) of two fractions is the smallest number
that can be used as a common denominator of the fractions. The LCD of the two
fractions is the least common multiple (LCM) of their denominators.

{{< callout type="info" >}}
  **Least Common Denominator.** The **least common denominator** (LCD) of two
  fractions is the least common multiple (LCM) of their denominators.
{{< /callout >}}

After we find the least common denominator of two fractions, we convert the
fractions to equivalent fractions with the LCD. Putting these steps together
allows us to add and subtract fractions because their denominators will be the
same!

**Example.** Add: $\tfrac{7}{12} + \tfrac{5}{18}$.

**Step 1. Do they have a common denominator?** No — rewrite each fraction with
the LCD (least common denominator). Find the LCD of $12$, $18$:

$$
\begin{array}{rcl}
12 &=& 2 \cdot 2 \cdot 3 \\
18 &=& 2 \cdot\phantom{2 \cdot{}} 3 \cdot 3 \\
\text{LCD} &=& 2 \cdot 2 \cdot 3 \cdot 3 = 36
\end{array}
$$

We multiply the numerator and denominator of each fraction by the factor
needed to get the denominator to be $36$. Do not simplify the equivalent
fractions! If you do, you'll get back to the original fractions and lose the
common denominator.

$$
\begin{array}{lrcl}
&& & \tfrac{7}{12} + \tfrac{5}{18} \\[10pt]
&& =& \tfrac{7 \cdot 3}{12 \cdot 3} + \tfrac{5 \cdot 2}{18 \cdot 2} \\[10pt]
&& =& \tfrac{21}{36} + \tfrac{10}{36}
\end{array}
$$

**Step 2. Add or subtract the fractions.** Add:

$$\tfrac{21}{36} + \tfrac{10}{36} = \tfrac{31}{36}$$

**Step 3. Simplify, if possible.** Since $31$ is prime, its only factors are
$1$ and $31$. Since $31$ does not go into $36$, the answer is simplified.

{{< fillin
  question="Add: $\tfrac{7}{12} + \tfrac{11}{15}$."
  answer="\frac{79}{60}"
  answerDisplay="$\tfrac{79}{60}$"
  hint="The LCD of $12$ and $15$ is $60$. Rewrite each fraction with denominator $60$, then add the numerators."
>}}

{{< fillin
  question="Add: $\tfrac{13}{15} + \tfrac{17}{20}$."
  answer="\frac{103}{60}"
  answerDisplay="$\tfrac{103}{60}$"
  hint="The LCD of $15$ and $20$ is $60$. Rewrite each fraction with denominator $60$, then add the numerators."
>}}

{{< callout type="info" >}}
  **Add or subtract fractions.**

  1. Do they have a common denominator?
     - Yes — go to step 2.
     - No — rewrite each fraction with the LCD (least common denominator).
       Find the LCD. Change each fraction into an equivalent fraction with the
       LCD as its denominator.
  2. Add or subtract the fractions.
  3. Simplify, if possible.
{{< /callout >}}

We now have all four operations for fractions. The table below summarizes
fraction operations.

| Fraction Multiplication | Fraction Division |
| :--- | :--- |
| $\tfrac{a}{b} \cdot \tfrac{c}{d} = \tfrac{ac}{bd}$ | $\tfrac{a}{b} \div \tfrac{c}{d} = \tfrac{a}{b} \cdot \tfrac{d}{c}$ |
| Multiply the numerators and multiply the denominators. | Multiply the first fraction by the reciprocal of the second. |

| Fraction Addition | Fraction Subtraction |
| :--- | :--- |
| $\tfrac{a}{c} + \tfrac{b}{c} = \tfrac{a + b}{c}$ | $\tfrac{a}{c} - \tfrac{b}{c} = \tfrac{a - b}{c}$ |
| Add the numerators and place the sum over the common denominator. | Subtract the numerators and place the difference over the common denominator. |

To multiply or divide fractions, an LCD is *not* needed. To add or subtract
fractions, an LCD *is* needed.

When starting an exercise, always identify the operation and then recall the
methods needed for that operation.

**Example.** Simplify: (a) $\tfrac{5x}{6} - \tfrac{3}{10}$ and (b)
$\tfrac{5x}{6} \cdot \tfrac{3}{10}$.

First ask, "What is the operation?" Identifying the operation will determine
whether or not we need a common denominator. Remember, we need a common
denominator to add or subtract, but not to multiply or divide.

**(a)** What is the operation? The operation is subtraction.

Do the fractions have a common denominator? No. Find the LCD of $6$ and $10$:

$$
\begin{array}{rcl}
6 &=& 2 \cdot 3 \\
10 &=& 2 \cdot\phantom{3 \cdot{}} 5 \\
\text{LCD} &=& 2 \cdot 3 \cdot 5 = 30
\end{array}
$$

Rewrite each fraction as an equivalent fraction with the LCD, then subtract the
numerators and place the difference over the common denominator. There are no
common factors, so the fraction is simplified.

$$
\begin{array}{lrcl}
&& & \tfrac{5x}{6} - \tfrac{3}{10} \\[10pt]
&& =& \tfrac{5x \cdot 5}{6 \cdot 5} - \tfrac{3 \cdot 3}{10 \cdot 3} \\[10pt]
&& =& \tfrac{25x}{30} - \tfrac{9}{30} \\[10pt]
&& =& \tfrac{25x - 9}{30}
\end{array}
$$

**(b)** What is the operation? Multiplication. To multiply fractions, multiply
the numerators and multiply the denominators.

$$
\begin{array}{lrcl}
\tfrac{5x}{6} \cdot \tfrac{3}{10} && =& \tfrac{5x \cdot 3}{6 \cdot 10} \\[10pt]
\text{Rewrite, showing common factors. Remove common factors.} && =& \tfrac{5 \cdot x \cdot 3}{2 \cdot 3 \cdot 2 \cdot 5} \\[10pt]
\text{Simplify.} && =& \tfrac{x}{4}
\end{array}
$$

Notice, we needed an LCD to add $\tfrac{5x}{6} - \tfrac{3}{10}$, but not to
multiply $\tfrac{5x}{6} \cdot \tfrac{3}{10}$.

{{< fillin
  question="Simplify: $\tfrac{3a}{4} - \tfrac{8}{9}$."
  answer="\frac{27a-32}{36}"
  answerDisplay="$\tfrac{27a - 32}{36}$"
  hint="This is subtraction, so find the LCD of $4$ and $9$, which is $36$. Rewrite each fraction with denominator $36$."
>}}

{{< fillin
  question="Simplify: $\tfrac{3a}{4} \cdot \tfrac{8}{9}$."
  answer="\frac{2a}{3}"
  answerDisplay="$\tfrac{2a}{3}$"
  hint="This is multiplication, so no LCD is needed. Multiply across and divide out common factors."
>}}

{{< fillin
  question="Simplify: $\tfrac{4k}{5} - \tfrac{1}{6}$."
  answer="\frac{24k-5}{30}"
  answerDisplay="$\tfrac{24k - 5}{30}$"
  hint="This is subtraction, so find the LCD of $5$ and $6$, which is $30$."
>}}

{{< fillin
  question="Simplify: $\tfrac{4k}{5} \cdot \tfrac{1}{6}$."
  answer="\frac{2k}{15}"
  answerDisplay="$\tfrac{2k}{15}$"
  hint="This is multiplication, so no LCD is needed. Multiply across and divide out the common factor of $2$."
>}}

## Use the order of operations to simplify fractions

The fraction bar in a fraction acts as grouping symbol. The order of
operations then tells us to simplify the numerator and then the denominator.
Then we divide.

{{< callout type="info" >}}
  **Simplify an expression with a fraction bar.**

  1. Simplify the expression in the numerator. Simplify the expression in the
     denominator.
  2. Simplify the fraction.
{{< /callout >}}

Where does the negative sign go in a fraction? Usually the negative sign is in
front of the fraction, but you will sometimes see a fraction with a negative
numerator, or sometimes with a negative denominator. Remember that fractions
represent division. When the numerator and denominator have different signs,
the quotient is negative.

$$
\begin{array}{lrcl}
\tfrac{-1}{3} = -\tfrac{1}{3} && & \tfrac{\text{negative}}{\text{positive}} = \text{negative} \\[10pt]
\tfrac{1}{-3} = -\tfrac{1}{3} && & \tfrac{\text{positive}}{\text{negative}} = \text{negative}
\end{array}
$$

{{< callout type="info" >}}
  **Placement of Negative Sign in a Fraction.** For any positive numbers $a$
  and $b$,

  $$\tfrac{-a}{b} = \tfrac{a}{-b} = -\tfrac{a}{b}.$$
{{< /callout >}}

**Example.** Simplify: $\tfrac{4(-3) + 6(-2)}{-3(2) - 2}$.

The fraction bar acts like a grouping symbol. So completely simplify the
numerator and the denominator separately.

$$
\begin{array}{lrcl}
&& & \tfrac{4(-3) + 6(-2)}{-3(2) - 2} \\[10pt]
\text{Multiply.} && =& \tfrac{-12 + (-12)}{-6 - 2} \\[10pt]
\text{Simplify.} && =& \tfrac{-24}{-8} \\[10pt]
\text{Divide.} && =& 3
\end{array}
$$

{{< fillin
  question="Simplify: $\tfrac{8(-2) + 4(-3)}{-5(2) + 3}$."
  answer="4"
  hint="Simplify the numerator and denominator separately. Numerator: $-16 - 12$. Denominator: $-10 + 3$."
>}}

{{< fillin
  question="Simplify: $\tfrac{7(-1) + 9(-3)}{-5(3) - 2}$."
  answer="2"
  hint="Simplify the numerator and denominator separately. Numerator: $-7 - 27$. Denominator: $-15 - 2$."
>}}

Now we'll look at complex fractions where the numerator or denominator
contains an expression that can be simplified. So we first must completely
simplify the numerator and denominator separately using the order of
operations. Then we divide the numerator by the denominator as the fraction
bar means division.

**Example.** Simplify: $\cfrac{\left(\frac{1}{2}\right)^2}{4 + 3^2}$.

Simplify the numerator:

$$\cfrac{\left(\frac{1}{2}\right)^2}{4 + 3^2} = \cfrac{\frac{1}{4}}{4 + 3^2}$$

Simplify the denominator:

$$\cfrac{\frac{1}{4}}{4 + 3^2} = \cfrac{\frac{1}{4}}{4 + 9} = \cfrac{\frac{1}{4}}{13}$$

Divide the numerator by the denominator, and simplify if possible:

$$\cfrac{\frac{1}{4}}{13} = \tfrac{1}{4} \div \tfrac{13}{1} = \tfrac{1}{4} \cdot \tfrac{1}{13} = \tfrac{1}{52}$$

{{< fillin
  question="Simplify: $\cfrac{\left(\frac{1}{3}\right)^2}{2^3 + 2}$."
  answer="\frac{1}{90}"
  answerDisplay="$\tfrac{1}{90}$"
  hint="Numerator: $\left(\tfrac{1}{3}\right)^2 = \tfrac{1}{9}$. Denominator: $2^3 + 2 = 10$. Then divide $\tfrac{1}{9}$ by $10$."
>}}

{{< fillin
  question="Simplify: $\cfrac{1 + 4^2}{\left(\frac{1}{4}\right)^2}$."
  answer="272"
  hint="Numerator: $1 + 16 = 17$. Denominator: $\left(\tfrac{1}{4}\right)^2 = \tfrac{1}{16}$. Then divide $17$ by $\tfrac{1}{16}$."
>}}

{{< callout type="info" >}}
  **Simplify complex fractions.**

  1. Simplify the numerator.
  2. Simplify the denominator.
  3. Divide the numerator by the denominator. Simplify if possible.
{{< /callout >}}

**Example.** Simplify: $\cfrac{\frac{1}{2} + \frac{2}{3}}{\frac{3}{4} - \frac{1}{6}}$.

It may help to put parentheses around the numerator and the denominator.

$$\cfrac{\left(\frac{1}{2} + \frac{2}{3}\right)}{\left(\frac{3}{4} - \frac{1}{6}\right)}$$

Simplify the numerator (LCD $= 6$) and simplify the denominator
(LCD $= 12$):

$$\cfrac{\left(\frac{1}{2} + \frac{2}{3}\right)}{\left(\frac{3}{4} - \frac{1}{6}\right)} = \cfrac{\left(\frac{3}{6} + \frac{4}{6}\right)}{\left(\frac{9}{12} - \frac{2}{12}\right)} = \cfrac{\frac{7}{6}}{\frac{7}{12}}$$

Divide the numerator by the denominator, then divide out common factors and
simplify:

$$\cfrac{\frac{7}{6}}{\frac{7}{12}} = \tfrac{7}{6} \div \tfrac{7}{12} = \tfrac{7}{6} \cdot \tfrac{12}{7} = \tfrac{7 \cdot 6 \cdot 2}{6 \cdot 7 \cdot 1} = 2$$

{{< fillin
  question="Simplify: $\cfrac{\frac{1}{3} + \frac{1}{2}}{\frac{3}{4} - \frac{2}{3}}$."
  answer="10"
  hint="Numerator: $\tfrac{1}{3} + \tfrac{1}{2} = \tfrac{5}{6}$. Denominator: $\tfrac{3}{4} - \tfrac{2}{3} = \tfrac{1}{12}$. Then divide."
>}}

{{< fillin
  question="Simplify: $\cfrac{\frac{2}{3} - \frac{1}{6}}{\frac{1}{4} + \frac{1}{3}}$."
  answer="\frac{6}{7}"
  answerDisplay="$\tfrac{6}{7}$"
  hint="Numerator: $\tfrac{2}{3} - \tfrac{1}{6} = \tfrac{1}{2}$. Denominator: $\tfrac{1}{4} + \tfrac{1}{3} = \tfrac{7}{12}$. Then divide."
>}}

## Evaluate variable expressions with fractions

We have evaluated expressions before, but now we can evaluate expressions with
fractions. Remember, to evaluate an expression, we substitute the value of the
variable into the expression and then simplify.

**Example.** Evaluate $2x^2 y$ when $x = \tfrac{1}{4}$ and $y = -\tfrac{2}{3}$.

Substitute the values into the expression.

$$
\begin{array}{lrcl}
\text{Substitute } \tfrac{1}{4} \text{ for } x \text{ and } -\tfrac{2}{3} \text{ for } y. && & 2\left(\tfrac{1}{4}\right)^2\left(-\tfrac{2}{3}\right) \\[10pt]
\text{Simplify exponents first.} && =& 2\left(\tfrac{1}{16}\right)\left(-\tfrac{2}{3}\right) \\[10pt]
\text{Multiply; divide out the common factors.} && =& -\tfrac{2 \cdot 1 \cdot 2}{2 \cdot 2 \cdot 4 \cdot 3} \\[10pt]
\text{Simplify.} && =& -\tfrac{1}{12}
\end{array}
$$

{{< fillin
  question="Evaluate $3ab^2$ when $a = -\tfrac{2}{3}$ and $b = -\tfrac{1}{2}$."
  answer="-\frac{1}{2}"
  answerDisplay="$-\tfrac{1}{2}$"
  hint="Simplify the exponent first: $b^2 = \tfrac{1}{4}$. Then multiply $3 \cdot \left(-\tfrac{2}{3}\right) \cdot \tfrac{1}{4}$."
>}}

{{< fillin
  question="Evaluate $4c^3 d$ when $c = -\tfrac{1}{2}$ and $d = -\tfrac{4}{3}$."
  answer="\frac{2}{3}"
  answerDisplay="$\tfrac{2}{3}$"
  hint="Simplify the exponent first: $c^3 = -\tfrac{1}{8}$. Then multiply $4 \cdot \left(-\tfrac{1}{8}\right) \cdot \left(-\tfrac{4}{3}\right)$."
>}}

## Key terms

**fraction** — a way to represent parts of a whole, written $\tfrac{a}{b}$
with numerator $a$ and denominator $b \neq 0$. **numerator** — the top number
in a fraction, indicating how many equal parts are included. **denominator** —
the bottom number in a fraction, the number of equal parts the whole is
divided into. **equivalent fractions** — fractions that have the same value.
**reciprocal** — the fraction obtained by inverting a given fraction,
exchanging its numerator and denominator. **complex fraction** — a fraction in
which the numerator or the denominator contains a fraction. **least common
denominator (LCD)** — the least common multiple of the denominators of two
fractions, used as their common denominator.

---

<small>This section is adapted from [Intermediate Algebra 2e, Section 1.3: Fractions](https://openstax.org/books/intermediate-algebra-2e/pages/1-3-fractions) by Lynn Marecek and Andrea Honeycutt Mathis, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/intermediate-algebra-2e). Changes: recreated the shaded-circle figure as an accessible inline graphic and the worked-example step tables as typeset math; omitted the Be Prepared quiz, the media link, and the end-of-section exercises; and converted the practice problems ("Try Its") into interactive exercises with instant feedback.</small>
