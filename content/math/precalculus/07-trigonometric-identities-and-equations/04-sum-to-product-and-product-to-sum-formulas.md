---
title: Sum-to-Product and Product-to-Sum Formulas
description: >-
  Deriving the product-to-sum and sum-to-product formulas from the sum and
  difference identities, then using them to rewrite trigonometric products
  and sums, evaluate exact values, and verify identities — adapted from
  OpenStax Precalculus 2e, Section 7.4.
source_section: "7.4"
weight: 4
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Express products as sums
- Express sums as products
{{< /callout >}}

A band marches down the field creating an amazing sound that bolsters the crowd. That sound travels as a wave that can be interpreted using trigonometric functions. For example, the figure below represents a sound wave for the musical note A. In this section, we will investigate trigonometric identities that are the foundation of everyday phenomena such as sound waves.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A sound wave for the musical note A: a sine curve dipping first below the axis and oscillating between y equals negative 1 and 1, completing four full cycles and part of a fifth as x runs from 0 to 0.01, with the x-axis marked every 0.002.","xMin":0,"xMax":0.0105,"yMin":-1.4,"yMax":1.4,"xUnit":36000,"yUnit":55,"xTickStep":0.002,"yTickStep":1,"tickLabels":true,"xTickGrouping":false,"curves":[{"kind":"sine","a":-1,"b":2764.6}]}
{{< /apfigure >}}

## Expressing Products as Sums

We have already learned a number of formulas useful for expanding or simplifying trigonometric expressions, but sometimes we may need to express the product of cosine and sine as a sum. We can use the **product-to-sum formulas**, which express products of trigonometric functions as sums. Let's investigate the cosine identity first and then the sine identity.

### Expressing Products as Sums for Cosine

We can derive the product-to-sum formula from the sum and difference identities for **cosine**. If we add the two equations, we get:

$$
\begin{array}{rcl}
\cos\alpha\cos\beta+\sin\alpha\sin\beta &=& \cos(\alpha-\beta) \\
\cos\alpha\cos\beta-\sin\alpha\sin\beta &=& \cos(\alpha+\beta) \\
\hline
2\cos\alpha\cos\beta &=& \cos(\alpha-\beta)+\cos(\alpha+\beta)
\end{array}
$$

Then, we divide by $2$ to isolate the product of cosines:

$$\cos\alpha\cos\beta=\tfrac{1}{2}[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$$

{{< callout type="info" >}}
  **How to:** given a product of cosines, express as a sum.

  1. Write the formula for the product of cosines.
  2. Substitute the given angles into the formula.
  3. Simplify.
{{< /callout >}}

**Example.** Write the following product of cosines as a sum: $2\cos\left(\tfrac{7x}{2}\right)\cos\left(\tfrac{3x}{2}\right)$.

**Solution.** We begin by writing the formula for the product of cosines:

$$\cos\alpha\cos\beta=\tfrac{1}{2}[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$$

We can then substitute the given angles into the formula and simplify.

$$
\begin{array}{lrcl}
& 2\cos\left(\tfrac{7x}{2}\right)\cos\left(\tfrac{3x}{2}\right) &=& (2)\left(\tfrac12\right)\left[\cos\left(\tfrac{7x}{2}-\tfrac{3x}{2}\right)+\cos\left(\tfrac{7x}{2}+\tfrac{3x}{2}\right)\right] \\[4pt]
& &=& \cos\left(\tfrac{4x}{2}\right)+\cos\left(\tfrac{10x}{2}\right) \\[4pt]
& &=& \cos(2x)+\cos(5x)
\end{array}
$$

{{< fillin
  question="Use the product-to-sum formula to write the product as a sum or difference: $\cos(2\theta)\cos(4\theta)$."
  answer="\frac{1}{2}\cos(6\theta)+\frac{1}{2}\cos(2\theta)"
  answerForm="expanded"
  answerDisplay="$\tfrac12\cos(6\theta)+\tfrac12\cos(2\theta)$"
  hint="Use $\cos\alpha\cos\beta=\tfrac12[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$ with $\alpha=2\theta$ and $\beta=4\theta$, then simplify each resulting angle."
>}}

### Expressing the Product of Sine and Cosine as a Sum

Next, we will derive the product-to-sum formula for sine and cosine from the sum and difference formulas for **sine**. If we add the sum and difference identities, we get:

$$
\begin{array}{rcl}
\sin(\alpha+\beta) &=& \sin\alpha\cos\beta+\cos\alpha\sin\beta \\
\sin(\alpha-\beta) &=& \sin\alpha\cos\beta-\cos\alpha\sin\beta \\
\hline
\sin(\alpha+\beta)+\sin(\alpha-\beta) &=& 2\sin\alpha\cos\beta
\end{array}
$$

Then, we divide by 2 to isolate the product of cosine and sine:

$$\sin\alpha\cos\beta=\tfrac{1}{2}[\sin(\alpha+\beta)+\sin(\alpha-\beta)]$$

**Example.** Express the following product as a sum containing only sine or cosine and no products: $\sin(4\theta)\cos(2\theta)$.

**Solution.** Write the formula for the product of sine and cosine. Then substitute the given values into the formula and simplify.

$$
\begin{array}{lrcl}
& \sin\alpha\cos\beta &=& \tfrac12[\sin(\alpha+\beta)+\sin(\alpha-\beta)] \\[4pt]
& \sin(4\theta)\cos(2\theta) &=& \tfrac12[\sin(4\theta+2\theta)+\sin(4\theta-2\theta)] \\[4pt]
& &=& \tfrac12[\sin(6\theta)+\sin(2\theta)]
\end{array}
$$

{{< fillin
  question="Use the product-to-sum formula to write the product as a sum: $\sin(x+y)\cos(x-y)$."
  answer="\frac{1}{2}\sin(2x)+\frac{1}{2}\sin(2y)"
  answerForm="expanded"
  answerDisplay="$\tfrac12\sin(2x)+\tfrac12\sin(2y)$"
  hint="Use $\sin\alpha\cos\beta=\tfrac12[\sin(\alpha+\beta)+\sin(\alpha-\beta)]$ with $\alpha=x+y$ and $\beta=x-y$."
>}}

### Expressing Products of Sines in Terms of Cosine

Expressing the product of sines in terms of **cosine** is also derived from the sum and difference identities for cosine. In this case, we will first subtract the two cosine formulas:

$$
\begin{array}{rcl}
\cos(\alpha-\beta) &=& \cos\alpha\cos\beta+\sin\alpha\sin\beta \\
-\cos(\alpha+\beta) &=& -(\cos\alpha\cos\beta-\sin\alpha\sin\beta) \\
\hline
\cos(\alpha-\beta)-\cos(\alpha+\beta) &=& 2\sin\alpha\sin\beta
\end{array}
$$

Then, we divide by 2 to isolate the product of sines:

$$\sin\alpha\sin\beta=\tfrac{1}{2}[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$$

Similarly we could express the product of cosines in terms of sine or derive other product-to-sum formulas.

{{< callout type="info" >}}
  **The Product-to-Sum Formulas.**

  The **product-to-sum formulas** are as follows:

  $$\cos\alpha\cos\beta=\tfrac{1}{2}[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$$

  $$\sin\alpha\cos\beta=\tfrac{1}{2}[\sin(\alpha+\beta)+\sin(\alpha-\beta)]$$

  $$\sin\alpha\sin\beta=\tfrac{1}{2}[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$$

  $$\cos\alpha\sin\beta=\tfrac{1}{2}[\sin(\alpha+\beta)-\sin(\alpha-\beta)]$$
{{< /callout >}}

**Example.** Write $\cos(3\theta)\cos(5\theta)$ as a sum or difference.

**Solution.** We have the product of cosines, so we begin by writing the related formula. Then we substitute the given angles and simplify.

$$
\begin{array}{lrcl}
\text{}&\cos\alpha\cos\beta &=& \tfrac12[\cos(\alpha-\beta)+\cos(\alpha+\beta)] \\[4pt]
& \cos(3\theta)\cos(5\theta) &=& \tfrac12[\cos(3\theta-5\theta)+\cos(3\theta+5\theta)] \\[4pt]
\text{Use even-odd identity.} & &=& \tfrac12[\cos(2\theta)+\cos(8\theta)]
\end{array}
$$

{{< fillin
  question="Use the product-to-sum formula to evaluate $\cos\tfrac{11\pi}{12}\cos\tfrac{\pi}{12}$."
  answer="\frac{-2-\sqrt3}{4}"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac{-2-\sqrt3}{4}$"
  hint="Use $\cos\alpha\cos\beta=\tfrac12[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$ with $\alpha=\tfrac{11\pi}{12}$ and $\beta=\tfrac{\pi}{12}$, then evaluate each cosine exactly."
>}}

## Expressing Sums as Products

Some problems require the reverse of the process we just used. The **sum-to-product formulas** allow us to express sums of sine or cosine as products. These formulas can be derived from the product-to-sum identities. For example, with a few substitutions, we can derive the sum-to-product identity for sine. Let $\tfrac{u+v}{2}=\alpha$ and $\tfrac{u-v}{2}=\beta$.

Then,

$$
\begin{array}{lrcl}
& \alpha+\beta &=& \tfrac{u+v}{2}+\tfrac{u-v}{2} \\[4pt]
& &=& \tfrac{2u}{2} \\[4pt]
& &=& u
\end{array}
$$

$$
\begin{array}{lrcl}
& \alpha-\beta &=& \tfrac{u+v}{2}-\tfrac{u-v}{2} \\[4pt]
& &=& \tfrac{2v}{2} \\[4pt]
& &=& v
\end{array}
$$

Thus, replacing $\alpha$ and $\beta$ in the product-to-sum formula with the substitute expressions, we have

$$
\begin{array}{lrcl}
\text{}&\sin\alpha\cos\beta &=& \tfrac12[\sin(\alpha+\beta)+\sin(\alpha-\beta)] \\[4pt]
\text{Substitute for }(\alpha+\beta)\text{ and }(\alpha-\beta). & \sin\left(\tfrac{u+v}{2}\right)\cos\left(\tfrac{u-v}{2}\right) &=& \tfrac12[\sin u+\sin v] \\[4pt]
\text{}&2\sin\left(\tfrac{u+v}{2}\right)\cos\left(\tfrac{u-v}{2}\right) &=& \sin u+\sin v
\end{array}
$$

The other sum-to-product identities are derived similarly.

{{< callout type="info" >}}
  **Sum-to-Product Formulas.**

  The **sum-to-product formulas** are as follows:

  $$\sin\alpha+\sin\beta=2\sin\left(\tfrac{\alpha+\beta}{2}\right)\cos\left(\tfrac{\alpha-\beta}{2}\right)$$

  $$\sin\alpha-\sin\beta=2\sin\left(\tfrac{\alpha-\beta}{2}\right)\cos\left(\tfrac{\alpha+\beta}{2}\right)$$

  $$\cos\alpha-\cos\beta=-2\sin\left(\tfrac{\alpha+\beta}{2}\right)\sin\left(\tfrac{\alpha-\beta}{2}\right)$$

  $$\cos\alpha+\cos\beta=2\cos\left(\tfrac{\alpha+\beta}{2}\right)\cos\left(\tfrac{\alpha-\beta}{2}\right)$$
{{< /callout >}}

**Example.** Write the following difference of sines expression as a product: $\sin(4\theta)-\sin(2\theta)$.

**Solution.** We begin by writing the formula for the difference of sines.

$$\sin\alpha-\sin\beta=2\sin\left(\tfrac{\alpha-\beta}{2}\right)\cos\left(\tfrac{\alpha+\beta}{2}\right)$$

Substitute the values into the formula, and simplify.

$$
\begin{array}{lrcl}
& \sin(4\theta)-\sin(2\theta) &=& 2\sin\left(\tfrac{4\theta-2\theta}{2}\right)\cos\left(\tfrac{4\theta+2\theta}{2}\right) \\[4pt]
& &=& 2\sin\left(\tfrac{2\theta}{2}\right)\cos\left(\tfrac{6\theta}{2}\right) \\[4pt]
& &=& 2\sin\theta\cos(3\theta)
\end{array}
$$

{{< multiplechoice
  question="Use the sum-to-product formula to write the sum as a product: $\sin(3\theta)+\sin(\theta)$."
  answer="2\sin(2\theta)\cos(\theta)"
  hint="Let $u=3\theta$ and $v=\theta$; the sum-to-product formula for sine gives $2\sin\left(\tfrac{u+v}{2}\right)\cos\left(\tfrac{u-v}{2}\right)$."
>}}
2\sin(2\theta)\cos(\theta)
2\cos(2\theta)\sin(\theta)
\sin(2\theta)\cos(\theta)
2\sin(2\theta)\sin(\theta)
{{< /multiplechoice >}}

**Example.** Evaluate $\cos(15^\circ)-\cos(75^\circ)$.

**Solution.** We begin by writing the formula for the difference of cosines.

$$\cos\alpha-\cos\beta=-2\sin\left(\tfrac{\alpha+\beta}{2}\right)\sin\left(\tfrac{\alpha-\beta}{2}\right)$$

Then we substitute the given angles and simplify.

$$
\begin{array}{lrcl}
& \cos(15^\circ)-\cos(75^\circ) &=& -2\sin\left(\tfrac{15^\circ+75^\circ}{2}\right)\sin\left(\tfrac{15^\circ-75^\circ}{2}\right) \\[4pt]
& &=& -2\sin(45^\circ)\sin(-30^\circ) \\[4pt]
& &=& -2\left(\tfrac{\sqrt2}{2}\right)\left(-\tfrac12\right) \\[4pt]
& &=& \tfrac{\sqrt2}{2}
\end{array}
$$

**Example.** Prove the identity:

$$\tfrac{\cos(4t)-\cos(2t)}{\sin(4t)+\sin(2t)}=-\tan t$$

**Solution.** We will start with the left side, the more complicated side of the equation, and rewrite the expression until it matches the right side.

$$
\begin{array}{lrcl}
& \tfrac{\cos(4t)-\cos(2t)}{\sin(4t)+\sin(2t)} &=& \tfrac{-2\sin\left(\tfrac{4t+2t}{2}\right)\sin\left(\tfrac{4t-2t}{2}\right)}{2\sin\left(\tfrac{4t+2t}{2}\right)\cos\left(\tfrac{4t-2t}{2}\right)} \\[8pt]
& &=& \tfrac{-2\sin(3t)\sin t}{2\sin(3t)\cos t} \\[8pt]
& &=& \tfrac{-\cancel{2}\cancel{\sin(3t)}\sin t}{\cancel{2}\cancel{\sin(3t)}\cos t} \\[8pt]
& &=& -\tfrac{\sin t}{\cos t} \\[8pt]
& &=& -\tan t
\end{array}
$$

**Analysis.** Recall that verifying trigonometric identities has its own set of rules. The procedures for solving an equation are not the same as the procedures for verifying an identity. When we prove an identity, we pick one side to work on and make substitutions until that side is transformed into the other side.

**Example.** Verify the identity $\csc^2\theta-2=\tfrac{\cos(2\theta)}{\sin^2\theta}$.

**Solution.** For verifying this equation, we are bringing together several of the identities. We will use the double-angle formula and the reciprocal identities. We will work with the right side of the equation and rewrite it until it matches the left side.

$$
\begin{array}{lrcl}
& \tfrac{\cos(2\theta)}{\sin^2\theta} &=& \tfrac{1-2\sin^2\theta}{\sin^2\theta} \\[4pt]
& &=& \tfrac{1}{\sin^2\theta}-\tfrac{2\sin^2\theta}{\sin^2\theta} \\[4pt]
& &=& \csc^2\theta-2
\end{array}
$$

{{< fillin
  question="Simplify the left side of the identity $\tan\theta\cot\theta-\cos^2\theta$ to a single trigonometric function."
  answer="\sin^2\theta"
  answerForm="single-trig-function"
  answerDisplay="$\sin^2\theta$"
  hint="Write $\tan\theta\cot\theta$ as $\left(\tfrac{\sin\theta}{\cos\theta}\right)\left(\tfrac{\cos\theta}{\sin\theta}\right)$, which reduces to $1$, then apply the Pythagorean identity."
>}}

## Key equations

| Product-to-sum formulas | $\begin{array}{l}\cos\alpha\cos\beta=\tfrac{1}{2}[\cos(\alpha-\beta)+\cos(\alpha+\beta)] \\ \sin\alpha\cos\beta=\tfrac{1}{2}[\sin(\alpha+\beta)+\sin(\alpha-\beta)] \\ \sin\alpha\sin\beta=\tfrac{1}{2}[\cos(\alpha-\beta)-\cos(\alpha+\beta)] \\ \cos\alpha\sin\beta=\tfrac{1}{2}[\sin(\alpha+\beta)-\sin(\alpha-\beta)] \end{array}$ |
| :--- | :--- |
| Sum-to-product formulas | $\begin{array}{l}\sin\alpha+\sin\beta=2\sin\left(\tfrac{\alpha+\beta}{2}\right)\cos\left(\tfrac{\alpha-\beta}{2}\right) \\ \sin\alpha-\sin\beta=2\sin\left(\tfrac{\alpha-\beta}{2}\right)\cos\left(\tfrac{\alpha+\beta}{2}\right) \\ \cos\alpha-\cos\beta=-2\sin\left(\tfrac{\alpha+\beta}{2}\right)\sin\left(\tfrac{\alpha-\beta}{2}\right) \\ \cos\alpha+\cos\beta=2\cos\left(\tfrac{\alpha+\beta}{2}\right)\cos\left(\tfrac{\alpha-\beta}{2}\right) \end{array}$ |

## Key concepts

- From the sum and difference identities, we can derive the product-to-sum formulas and the sum-to-product formulas for sine and cosine.
- We can use the product-to-sum formulas to rewrite products of sines, products of cosines, and products of sine and cosine as sums or differences of sines and cosines. See Example 1, Example 2, and Example 3.
- We can also derive the sum-to-product identities from the product-to-sum identities using substitution.
- We can use the sum-to-product formulas to rewrite sum or difference of sines, cosines, or products of sine and cosine as products of sines and cosines. See Example 4.
- Trigonometric expressions are often simpler to evaluate using the formulas. See Example 5.
- The identities can be verified using other formulas or by converting the expressions to sines and cosines. To verify an identity, we choose the more complicated side of the equals sign and rewrite it until it is transformed into the other side. See Example 6 and Example 7.

## Key terms

**product-to-sum formula** — a trigonometric identity that allows the writing of a product of trigonometric functions as a sum or difference of trigonometric functions. **sum-to-product formula** — a trigonometric identity that allows, by using substitution, the writing of a sum of trigonometric functions as a product of trigonometric functions.

## Practice

### Express products as sums

{{< fillin
  question="Rewrite the product as a sum or difference: $16\sin(16x)\sin(11x)$."
  answer="8\cos(5x)-8\cos(27x)"
  answerForm="expanded"
  answerDisplay="$8\cos(5x)-8\cos(27x)$"
  hint="Use $\sin\alpha\sin\beta=\tfrac12[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$ with $\alpha=16x$ and $\beta=11x$, then distribute the $16$."
>}}

{{< fillin
  question="Rewrite the product as a sum or difference: $2\sin(5x)\cos(3x)$."
  answer="\sin(2x)+\sin(8x)"
  answerForm="expanded"
  answerDisplay="$\sin(2x)+\sin(8x)$"
  hint="Use $\sin\alpha\cos\beta=\tfrac12[\sin(\alpha+\beta)+\sin(\alpha-\beta)]$ with $\alpha=5x$ and $\beta=3x$."
>}}

{{< fillin
  question="Rewrite the product as a sum or difference: $\sin(-x)\sin(5x)$."
  answer="\frac{1}{2}\cos(6x)-\frac{1}{2}\cos(4x)"
  answerForm="expanded"
  answerDisplay="$\tfrac12\cos(6x)-\tfrac12\cos(4x)$"
  hint="Use the odd property $\sin(-x)=-\sin x$ first, then apply $\sin\alpha\sin\beta=\tfrac12[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$ with $\alpha=x$ and $\beta=5x$."
>}}

{{< fillin
  question="Evaluate using a sum or difference of two functions: $\cos(45^\circ)\cos(15^\circ)$."
  answer="\frac{1}{4}(1+\sqrt3)"
  answerForm="evaluated-trig"
  answerDisplay="$\tfrac14(1+\sqrt3)$"
  hint="Use $\cos\alpha\cos\beta=\tfrac12[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$ with $\alpha=45^\circ$ and $\beta=15^\circ$, then evaluate each cosine exactly."
>}}

{{< fillin
  question="Evaluate using a sum or difference of two functions, leaving your answer in terms of sine and cosine: $2\sin(100^\circ)\sin(20^\circ)$."
  answer="\cos(80^\circ)-\cos(120^\circ)"
  answerForm="expanded"
  answerDisplay="$\cos(80^\circ)-\cos(120^\circ)$"
  hint="Use $\sin\alpha\sin\beta=\tfrac12[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$ with $\alpha=100^\circ$ and $\beta=20^\circ$, then distribute the $2$."
>}}

### Express sums as products

{{< fillin
  question="Rewrite the sum as a product of two functions: $\cos(7x)+\cos(-7x)$."
  answer="2\cos(7x)"
  answerForm="single-trig-function"
  answerDisplay="$2\cos(7x)$"
  hint="Cosine is even, so $\cos(-7x)=\cos(7x)$ — the sum-to-product formula then collapses to a single term."
>}}

{{< multiplechoice
  question="Rewrite the sum as a product of two functions: $\cos(6t)+\cos(4t)$."
  answer="2\cos(5t)\cos(t)"
  hint="Let $u=6t$ and $v=4t$; the sum-to-product formula for cosine gives $2\cos\left(\tfrac{u+v}{2}\right)\cos\left(\tfrac{u-v}{2}\right)$."
>}}
2\cos(5t)\cos(t)
2\sin(5t)\sin(t)
\cos(5t)\cos(t)
2\cos(5t)\sin(t)
{{< /multiplechoice >}}

{{< fillin
  question="Rewrite the sum as a product of two functions, leaving your answer in terms of sine and cosine: $\sin(76^\circ)+\sin(14^\circ)$."
  answer="\sqrt{2}\cos(31^\circ)"
  answerForm="single-trig-function"
  answerDisplay="$\sqrt2\cos(31^\circ)$"
  hint="Use $\sin\alpha+\sin\beta=2\sin\left(\tfrac{\alpha+\beta}{2}\right)\cos\left(\tfrac{\alpha-\beta}{2}\right)$ with $\alpha=76^\circ$ and $\beta=14^\circ$, then evaluate $\sin(45^\circ)$ exactly."
>}}

{{< fillin
  question="Rewrite the sum as a product of two functions, then evaluate the result numerically, rounded to four decimal places: $\cos(58^\circ)+\cos(12^\circ)$."
  answer="1.5081"
  answerForm="decimal"
  answerDisplay="$1.5081$"
  hint="Use $\cos\alpha+\cos\beta=2\cos\left(\tfrac{\alpha+\beta}{2}\right)\cos\left(\tfrac{\alpha-\beta}{2}\right)$ with $\alpha=58^\circ$ and $\beta=12^\circ$, then evaluate on a calculator."
>}}

{{< fillin
  question="Rewrite the sum as a product of two functions, then evaluate the result numerically, rounded to four decimal places: $\cos(44^\circ)-\cos(22^\circ)$."
  answer="-0.2078"
  answerForm="decimal"
  answerDisplay="$-0.2078$"
  hint="Use $\cos\alpha-\cos\beta=-2\sin\left(\tfrac{\alpha+\beta}{2}\right)\sin\left(\tfrac{\alpha-\beta}{2}\right)$ with $\alpha=44^\circ$ and $\beta=22^\circ$, then evaluate on a calculator."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 7.4: Sum-to-Product and Product-to-Sum Formulas](https://openstax.org/books/precalculus-2e/pages/7-4-sum-to-product-and-product-to-sum-formulas) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted the decorative photograph of the UCLA marching band (Figure 1); recreated the note-A sound-wave graph (Figure 2) as an accessible spec-first SVG drawn from the exact 440-Hz sine formula $y=-\sin(2\pi\cdot440x)$ (the source curve dips below the axis first) over the source's $0$-to-$0.01$ window with its $0.002$-step axis labels. Converted the boxed "The Product-to-Sum Formulas" and "Sum-to-Product Formulas" identity lists into the book's callout convention. Every retained Try It became a real interactive component. The three rewrite-as-a-sum Try Its (product-to-sum) became `fillin` components with `answerForm="expanded"`, since the printed product and the keyed sum are the same value and only the shape — a top-level sum versus a top-level product — separates a correct retype of the prompt from the correct answer; each answer is written as a distributed sum of terms (no factored-out leading coefficient) so the shape check itself passes on the keyed value. The rewrite-as-a-product (sum-to-product) Try It whose answer still holds two multiplied trigonometric applications ($2\sin(2\theta)\cos(\theta)$, no available token separates a product answer from a retyped sum) became a `multiplechoice` instead, with distractors that swap which factor carries which function or drop the leading coefficient — each verified numerically distinct from the correct value and from each other. The verify-identity Try It was adapted per this chapter's proof-item policy into "simplify the left side to a single trigonometric function," graded `single-trig-function`, since the identity's left side genuinely reduces to $\sin^2\theta$. Struck-through cancellation shown in the printed derivation of Example 6 is rendered with `\cancel{}`. Omitted the "Access these online resources" media links. The "See Example_07_04_0N" cross-references in Key Concepts were rewritten as "See Example N," matching this section's own example numbering. Adapted ten selected end-of-section exercises — three product-to-sum rewrites, two items from the source's product-to-sum evaluate groups (one evaluated exactly, one left in terms of sine and cosine as its own instruction asks), two sum-to-product rewrites that reduce to a single term, one general sum-to-product rewrite, and two sum-to-product rewrites evaluated numerically to four decimal places — into ten interactive components (nine `fillin`, one `multiplechoice`) in a closing Practice block, one group per objective. Every fillin's `answerForm` was chosen only after replaying its exercise's own printed subject through the grader to confirm the form rejects it.</small>
