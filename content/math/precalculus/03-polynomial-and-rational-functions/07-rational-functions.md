---
title: Rational Functions
description: >-
  Using arrow notation to describe the local and end behavior of a rational
  function, solving applied concentration problems, finding domains,
  identifying vertical and horizontal asymptotes, and graphing rational
  functions from their intercepts, asymptotes, and removable discontinuities
  — adapted from OpenStax Precalculus 2e, Section 3.7.
source_section: "3.7"
weight: 7
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Use arrow notation
- Solve applied problems involving rational functions
- Find the domains of rational functions
- Identify vertical asymptotes
- Identify horizontal asymptotes
- Graph rational functions
{{< /callout >}}

Suppose we know that the cost of making a product is dependent on the number
of items, $x$, produced. This is given by the equation
$C(x)=15{,}000x-0.1x^2+1000$. If we want to know the average cost for
producing $x$ items, we would divide the cost function by the number of
items, $x$.

The average cost function, which yields the average cost per item for $x$
items produced, is

$$f(x)=\tfrac{15{,}000x-0.1x^2+1000}{x}$$

Many other application problems require finding an average value in a
similar way, giving us variables in the denominator. Written without a
variable in the denominator, this function will contain a negative integer
power.

In the last few sections, we have worked with polynomial functions, which
are functions with non-negative integers for exponents. In this section, we
explore rational functions, which have variables in the denominator.

## Using arrow notation

We have seen the graphs of the basic reciprocal function and the squared
reciprocal function from our study of toolkit functions. Examine these
graphs, shown below, and notice some of their features.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The toolkit graph of f of x equals 1 over x. On a grid from −4 to 4 on both axes, the left branch falls from near the top at x just below 0 down and off the bottom, and the right branch rises from off the bottom at x just above 0 up toward the top, each branch flattening toward the x-axis as it runs away from the origin.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}]}'>
<svg role="img" aria-label="The toolkit graph of f of x equals 1 over x. On a grid from −4 to 4 on both axes, the left branch falls from near the top at x just below 0 down and off the bottom, and the right branch rises from off the bottom at x just above 0 up toward the top, each branch flattening toward the x-axis as it runs away from the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="234" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="234" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="234" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="234" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="234" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="234" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="234" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="234" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="234" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="234" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="127" x2="26" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="145" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="52" y1="127" x2="52" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="145" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="78" y1="127" x2="78" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="145" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="104" y1="127" x2="104" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="145" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="156" y1="127" x2="156" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="145" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="182" y1="127" x2="182" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="145" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208" y1="127" x2="208" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="145" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="234" y1="127" x2="234" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="145" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="127" y1="234" x2="133" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="238" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="127" y1="208" x2="133" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="212" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="127" y1="182" x2="133" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="186" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="156" x2="133" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="160" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="127" y1="104" x2="133" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="108" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="127" y1="78" x2="133" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="82" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="52" x2="133" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="56" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="34,137 34,137 34.3,137.1 34.5,137.1 34.8,137.1 35,137.1 35.3,137.1 35.5,137.2 35.8,137.2 36,137.2 36.3,137.2 36.5,137.2 36.8,137.2 37,137.3 37.3,137.3 37.5,137.3 37.8,137.3 38,137.3 38.3,137.4 38.5,137.4 38.8,137.4 39,137.4 39.3,137.4 39.5,137.5 39.8,137.5 40,137.5 40.3,137.5 40.5,137.6 40.8,137.6 41,137.6 41.3,137.6 41.5,137.6 41.8,137.7 42,137.7 42.3,137.7 42.5,137.7 42.8,137.7 43,137.8 43.3,137.8 43.5,137.8 43.8,137.8 44,137.9 44.3,137.9 44.5,137.9 44.8,137.9 45,138 45.3,138 45.5,138 45.8,138 46,138 46.3,138.1 46.5,138.1 46.8,138.1 47,138.1 47.3,138.2 47.5,138.2 47.8,138.2 48,138.2 48.3,138.3 48.5,138.3 48.8,138.3 49,138.3 49.3,138.4 49.5,138.4 49.8,138.4 50,138.4 50.3,138.5 50.5,138.5 50.8,138.5 51,138.6 51.3,138.6 51.5,138.6 51.8,138.6 52,138.7 52.3,138.7 52.5,138.7 52.8,138.8 53,138.8 53.3,138.8 53.5,138.8 53.8,138.9 54,138.9 54.3,138.9 54.5,139 54.8,139 55,139 55.3,139 55.5,139.1 55.8,139.1 56,139.1 56.3,139.2 56.5,139.2 56.8,139.2 57,139.3 57.3,139.3 57.5,139.3 57.8,139.4 58,139.4 58.3,139.4 58.5,139.5 58.8,139.5 59,139.5 59.3,139.6 59.5,139.6 59.8,139.6 60,139.7 60.3,139.7 60.5,139.7 60.8,139.8 61,139.8 61.3,139.8 61.5,139.9 61.8,139.9 62,139.9 62.3,140 62.5,140 62.8,140.1 63,140.1 63.3,140.1 63.5,140.2 63.8,140.2 64,140.2 64.3,140.3 64.5,140.3 64.8,140.4 65,140.4 65.3,140.4 65.5,140.5 65.8,140.5 66,140.6 66.3,140.6 66.5,140.6 66.8,140.7 67,140.7 67.3,140.8 67.5,140.8 67.8,140.9 68,140.9 68.3,140.9 68.5,141 68.8,141 69,141.1 69.3,141.1 69.5,141.2 69.8,141.2 70,141.3 70.3,141.3 70.5,141.4 70.8,141.4 71,141.5 71.3,141.5 71.5,141.6 71.8,141.6 72,141.7 72.3,141.7 72.5,141.8 72.8,141.8 73,141.9 73.3,141.9 73.5,142 73.8,142 74,142.1 74.3,142.1 74.5,142.2 74.8,142.2 75,142.3 75.3,142.3 75.5,142.4 75.8,142.5 76,142.5 76.3,142.6 76.5,142.6 76.8,142.7 77,142.8 77.3,142.8 77.5,142.9 77.8,142.9 78,143 78.3,143.1 78.5,143.1 78.8,143.2 79,143.3 79.3,143.3 79.5,143.4 79.8,143.5 80,143.5 80.3,143.6 80.5,143.7 80.8,143.7 81,143.8 81.3,143.9 81.5,143.9 81.8,144 82,144.1 82.3,144.2 82.5,144.2 82.8,144.3 83,144.4 83.3,144.5 83.5,144.5 83.8,144.6 84,144.7 84.3,144.8 84.5,144.9 84.8,144.9 85,145 85.3,145.1 85.5,145.2 85.8,145.3 86,145.4 86.3,145.5 86.5,145.5 86.8,145.6 87,145.7 87.3,145.8 87.5,145.9 87.8,146 88,146.1 88.3,146.2 88.5,146.3 88.8,146.4 89,146.5 89.3,146.6 89.5,146.7 89.8,146.8 90,146.9 90.3,147 90.5,147.1 90.8,147.2 91,147.3 91.3,147.4 91.5,147.6 91.8,147.7 92,147.8 92.3,147.9 92.5,148 92.8,148.1 93,148.3 93.3,148.4 93.5,148.5 93.8,148.6 94,148.8 94.3,148.9 94.5,149 94.8,149.2 95,149.3 95.3,149.5 95.5,149.6 95.8,149.7 96,149.9 96.3,150 96.5,150.2 96.8,150.3 97,150.5 97.3,150.6 97.5,150.8 97.8,151 98,151.1 98.3,151.3 98.5,151.5 98.8,151.6 99,151.8 99.3,152 99.5,152.2 99.8,152.3 100,152.5 100.3,152.7 100.5,152.9 100.8,153.1 101,153.3 101.3,153.5 101.5,153.7 101.8,153.9 102,154.1 102.3,154.4 102.5,154.6 102.8,154.8 103,155 103.3,155.3 103.5,155.5 103.8,155.8 104,156 104.3,156.3 104.5,156.5 104.8,156.8 105,157 105.3,157.3 105.5,157.6 105.8,157.9 106,158.2 106.3,158.5 106.5,158.8 106.8,159.1 107,159.4 107.3,159.7 107.5,160 107.8,160.4 108,160.7 108.3,161.1 108.5,161.4 108.8,161.8 109,162.2 109.3,162.6 109.5,163 109.8,163.4 110,163.8 110.3,164.2 110.5,164.7 110.8,165.1 111,165.6 111.3,166.1 111.5,166.5 111.8,167 112,167.6 112.3,168.1 112.5,168.6 112.8,169.2 113,169.8 113.3,170.4 113.5,171 113.8,171.6 114,172.3 114.3,172.9 114.5,173.6 114.8,174.3 115,175.1 115.3,175.8 115.5,176.6 115.8,177.4 116,178.3 116.3,179.2 116.5,180.1 116.8,181 117,182 117.3,183 117.5,184.1 117.8,185.2 118,186.3 118.3,187.5 118.5,188.8 118.8,190.1 119,191.5 119.3,192.9 119.5,194.4 119.8,196 120,197.6 120.3,199.3 120.5,201.2 120.8,203.1 121,205.1 121.3,207.3 121.5,209.5 121.8,211.9 122,214.5 122.3,217.2 122.5,220.1 122.8,223.2 123,226" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,136.5 36.3,132.2 35.6,142.2" fill="currentColor"/>
  <polygon points="123.5,234 117.8,224.4 127.8,223.7" fill="currentColor"/>
  <polyline points="137,34 137.3,36.8 137.5,39.9 137.8,42.8 138,45.5 138.3,48.1 138.5,50.5 138.8,52.7 139,54.9 139.3,56.9 139.5,58.8 139.8,60.7 140,62.4 140.3,64 140.5,65.6 140.8,67.1 141,68.5 141.3,69.9 141.5,71.2 141.8,72.5 142,73.7 142.3,74.8 142.5,75.9 142.8,77 143,78 143.3,79 143.5,79.9 143.8,80.8 144,81.7 144.3,82.6 144.5,83.4 144.8,84.2 145,84.9 145.3,85.7 145.5,86.4 145.8,87.1 146,87.7 146.3,88.4 146.5,89 146.8,89.6 147,90.2 147.3,90.8 147.5,91.4 147.8,91.9 148,92.4 148.3,93 148.5,93.5 148.8,93.9 149,94.4 149.3,94.9 149.5,95.3 149.8,95.8 150,96.2 150.3,96.6 150.5,97 150.8,97.4 151,97.8 151.3,98.2 151.5,98.6 151.8,98.9 152,99.3 152.3,99.6 152.5,100 152.8,100.3 153,100.6 153.3,100.9 153.5,101.2 153.8,101.5 154,101.8 154.3,102.1 154.5,102.4 154.8,102.7 155,103 155.3,103.2 155.5,103.5 155.8,103.7 156,104 156.3,104.2 156.5,104.5 156.8,104.7 157,105 157.3,105.2 157.5,105.4 157.8,105.6 158,105.9 158.3,106.1 158.5,106.3 158.8,106.5 159,106.7 159.3,106.9 159.5,107.1 159.8,107.3 160,107.5 160.3,107.7 160.5,107.8 160.8,108 161,108.2 161.3,108.4 161.5,108.5 161.8,108.7 162,108.9 162.3,109 162.5,109.2 162.8,109.4 163,109.5 163.3,109.7 163.5,109.8 163.8,110 164,110.1 164.3,110.3 164.5,110.4 164.8,110.5 165,110.7 165.3,110.8 165.5,111 165.8,111.1 166,111.2 166.3,111.4 166.5,111.5 166.8,111.6 167,111.7 167.3,111.9 167.5,112 167.8,112.1 168,112.2 168.3,112.3 168.5,112.4 168.8,112.6 169,112.7 169.3,112.8 169.5,112.9 169.8,113 170,113.1 170.3,113.2 170.5,113.3 170.8,113.4 171,113.5 171.3,113.6 171.5,113.7 171.8,113.8 172,113.9 172.3,114 172.5,114.1 172.8,114.2 173,114.3 173.3,114.4 173.5,114.5 173.8,114.5 174,114.6 174.3,114.7 174.5,114.8 174.8,114.9 175,115 175.3,115.1 175.5,115.1 175.8,115.2 176,115.3 176.3,115.4 176.5,115.5 176.8,115.5 177,115.6 177.3,115.7 177.5,115.8 177.8,115.8 178,115.9 178.3,116 178.5,116.1 178.8,116.1 179,116.2 179.3,116.3 179.5,116.3 179.8,116.4 180,116.5 180.3,116.5 180.5,116.6 180.8,116.7 181,116.7 181.3,116.8 181.5,116.9 181.8,116.9 182,117 182.3,117.1 182.5,117.1 182.8,117.2 183,117.2 183.3,117.3 183.5,117.4 183.8,117.4 184,117.5 184.3,117.5 184.5,117.6 184.8,117.7 185,117.7 185.3,117.8 185.5,117.8 185.8,117.9 186,117.9 186.3,118 186.5,118 186.8,118.1 187,118.1 187.3,118.2 187.5,118.2 187.8,118.3 188,118.3 188.3,118.4 188.5,118.4 188.8,118.5 189,118.5 189.3,118.6 189.5,118.6 189.8,118.7 190,118.7 190.3,118.8 190.5,118.8 190.8,118.9 191,118.9 191.3,119 191.5,119 191.8,119.1 192,119.1 192.3,119.1 192.5,119.2 192.8,119.2 193,119.3 193.3,119.3 193.5,119.4 193.8,119.4 194,119.4 194.3,119.5 194.5,119.5 194.8,119.6 195,119.6 195.3,119.6 195.5,119.7 195.8,119.7 196,119.8 196.3,119.8 196.5,119.8 196.8,119.9 197,119.9 197.3,119.9 197.5,120 197.8,120 198,120.1 198.3,120.1 198.5,120.1 198.8,120.2 199,120.2 199.3,120.2 199.5,120.3 199.8,120.3 200,120.3 200.3,120.4 200.5,120.4 200.8,120.4 201,120.5 201.3,120.5 201.5,120.5 201.8,120.6 202,120.6 202.3,120.6 202.5,120.7 202.8,120.7 203,120.7 203.3,120.8 203.5,120.8 203.8,120.8 204,120.9 204.3,120.9 204.5,120.9 204.8,121 205,121 205.3,121 205.5,121 205.8,121.1 206,121.1 206.3,121.1 206.5,121.2 206.8,121.2 207,121.2 207.3,121.2 207.5,121.3 207.8,121.3 208,121.3 208.3,121.4 208.5,121.4 208.8,121.4 209,121.4 209.3,121.5 209.5,121.5 209.8,121.5 210,121.5 210.3,121.6 210.5,121.6 210.8,121.6 211,121.7 211.3,121.7 211.5,121.7 211.8,121.7 212,121.8 212.3,121.8 212.5,121.8 212.8,121.8 213,121.9 213.3,121.9 213.5,121.9 213.8,121.9 214,122 214.3,122 214.5,122 214.8,122 215,122 215.3,122.1 215.5,122.1 215.8,122.1 216,122.1 216.3,122.2 216.5,122.2 216.8,122.2 217,122.2 217.3,122.3 217.5,122.3 217.8,122.3 218,122.3 218.3,122.3 218.5,122.4 218.8,122.4 219,122.4 219.3,122.4 219.5,122.4 219.8,122.5 220,122.5 220.3,122.5 220.5,122.5 220.8,122.6 221,122.6 221.3,122.6 221.5,122.6 221.8,122.6 222,122.7 222.3,122.7 222.5,122.7 222.8,122.7 223,122.7 223.3,122.8 223.5,122.8 223.8,122.8 224,122.8 224.3,122.8 224.5,122.8 224.8,122.9 225,122.9 225.3,122.9 225.5,122.9 225.8,122.9 226,123 226,123" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="136.5,26 142.2,35.6 132.2,36.3" fill="currentColor"/>
  <polygon points="234,123.5 223.7,127.8 224.4,117.8" fill="currentColor"/>
</svg>
</div>
<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The toolkit graph of f of x equals 1 over x squared. On a grid from −4 to 4 on both axes, both branches rise steeply toward the top on either side of x=0 and flatten toward the x-axis moving away from the origin, so the whole curve stays above the x-axis.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,0,1]}]}'>
<svg role="img" aria-label="The toolkit graph of f of x equals 1 over x squared. On a grid from −4 to 4 on both axes, both branches rise steeply toward the top on either side of x=0 and flatten toward the x-axis moving away from the origin, so the whole curve stays above the x-axis." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="234" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="234" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="234" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="234" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="234" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="234" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="234" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="234" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="234" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="234" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="127" x2="26" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="145" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="52" y1="127" x2="52" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="145" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="78" y1="127" x2="78" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="145" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="104" y1="127" x2="104" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="145" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="156" y1="127" x2="156" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="145" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="182" y1="127" x2="182" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="145" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208" y1="127" x2="208" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="145" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="234" y1="127" x2="234" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="145" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="127" y1="234" x2="133" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="238" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="127" y1="208" x2="133" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="212" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="127" y1="182" x2="133" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="186" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="156" x2="133" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="160" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="127" y1="104" x2="133" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="108" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="127" y1="78" x2="133" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="82" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="52" x2="133" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="56" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <polyline points="34,128.1 34,128.1 34.3,128.1 34.5,128.1 34.8,128.1 35,128.1 35.3,128 35.5,128 35.8,128 36,128 36.3,128 36.5,128 36.8,128 37,128 37.3,128 37.5,127.9 37.8,127.9 38,127.9 38.3,127.9 38.5,127.9 38.8,127.9 39,127.9 39.3,127.9 39.5,127.9 39.8,127.8 40,127.8 40.3,127.8 40.5,127.8 40.8,127.8 41,127.8 41.3,127.8 41.5,127.8 41.8,127.7 42,127.7 42.3,127.7 42.5,127.7 42.8,127.7 43,127.7 43.3,127.7 43.5,127.7 43.8,127.6 44,127.6 44.3,127.6 44.5,127.6 44.8,127.6 45,127.6 45.3,127.6 45.5,127.5 45.8,127.5 46,127.5 46.3,127.5 46.5,127.5 46.8,127.5 47,127.4 47.3,127.4 47.5,127.4 47.8,127.4 48,127.4 48.3,127.4 48.5,127.4 48.8,127.3 49,127.3 49.3,127.3 49.5,127.3 49.8,127.3 50,127.3 50.3,127.2 50.5,127.2 50.8,127.2 51,127.2 51.3,127.2 51.5,127.1 51.8,127.1 52,127.1 52.3,127.1 52.5,127.1 52.8,127.1 53,127 53.3,127 53.5,127 53.8,127 54,127 54.3,126.9 54.5,126.9 54.8,126.9 55,126.9 55.3,126.9 55.5,126.8 55.8,126.8 56,126.8 56.3,126.8 56.5,126.7 56.8,126.7 57,126.7 57.3,126.7 57.5,126.7 57.8,126.6 58,126.6 58.3,126.6 58.5,126.6 58.8,126.5 59,126.5 59.3,126.5 59.5,126.5 59.8,126.4 60,126.4 60.3,126.4 60.5,126.4 60.8,126.3 61,126.3 61.3,126.3 61.5,126.3 61.8,126.2 62,126.2 62.3,126.2 62.5,126.1 62.8,126.1 63,126.1 63.3,126.1 63.5,126 63.8,126 64,126 64.3,125.9 64.5,125.9 64.8,125.9 65,125.8 65.3,125.8 65.5,125.8 65.8,125.7 66,125.7 66.3,125.7 66.5,125.6 66.8,125.6 67,125.6 67.3,125.5 67.5,125.5 67.8,125.5 68,125.4 68.3,125.4 68.5,125.4 68.8,125.3 69,125.3 69.3,125.2 69.5,125.2 69.8,125.2 70,125.1 70.3,125.1 70.5,125 70.8,125 71,125 71.3,124.9 71.5,124.9 71.8,124.8 72,124.8 72.3,124.7 72.5,124.7 72.8,124.6 73,124.6 73.3,124.5 73.5,124.5 73.8,124.4 74,124.4 74.3,124.3 74.5,124.3 74.8,124.2 75,124.2 75.3,124.1 75.5,124.1 75.8,124 76,124 76.3,123.9 76.5,123.9 76.8,123.8 77,123.7 77.3,123.7 77.5,123.6 77.8,123.6 78,123.5 78.3,123.4 78.5,123.4 78.8,123.3 79,123.2 79.3,123.2 79.5,123.1 79.8,123 80,123 80.3,122.9 80.5,122.8 80.8,122.8 81,122.7 81.3,122.6 81.5,122.5 81.8,122.5 82,122.4 82.3,122.3 82.5,122.2 82.8,122.1 83,122 83.3,122 83.5,121.9 83.8,121.8 84,121.7 84.3,121.6 84.5,121.5 84.8,121.4 85,121.3 85.3,121.2 85.5,121.1 85.8,121 86,120.9 86.3,120.8 86.5,120.7 86.8,120.6 87,120.5 87.3,120.4 87.5,120.3 87.8,120.2 88,120 88.3,119.9 88.5,119.8 88.8,119.7 89,119.5 89.3,119.4 89.5,119.3 89.8,119.2 90,119 90.3,118.9 90.5,118.7 90.8,118.6 91,118.4 91.3,118.3 91.5,118.1 91.8,118 92,117.8 92.3,117.7 92.5,117.5 92.8,117.3 93,117.2 93.3,117 93.5,116.8 93.8,116.6 94,116.4 94.3,116.2 94.5,116.1 94.8,115.9 95,115.7 95.3,115.4 95.5,115.2 95.8,115 96,114.8 96.3,114.6 96.5,114.3 96.8,114.1 97,113.9 97.3,113.6 97.5,113.4 97.8,113.1 98,112.8 98.3,112.6 98.5,112.3 98.8,112 99,111.7 99.3,111.4 99.5,111.1 99.8,110.8 100,110.5 100.3,110.1 100.5,109.8 100.8,109.5 101,109.1 101.3,108.7 101.5,108.4 101.8,108 102,107.6 102.3,107.2 102.5,106.8 102.8,106.3 103,105.9 103.3,105.4 103.5,105 103.8,104.5 104,104 104.3,103.5 104.5,103 104.8,102.4 105,101.9 105.3,101.3 105.5,100.7 105.8,100.1 106,99.5 106.3,98.8 106.5,98.2 106.8,97.5 107,96.8 107.3,96 107.5,95.3 107.8,94.5 108,93.7 108.3,92.8 108.5,92 108.8,91.1 109,90.1 109.3,89.2 109.5,88.2 109.8,87.1 110,86.1 110.3,84.9 110.5,83.8 110.8,82.6 111,81.3 111.3,80 111.5,78.6 111.8,77.2 112,75.8 112.3,74.2 112.5,72.6 112.8,70.9 113,69.2 113.3,67.4 113.5,65.4 113.8,63.4 114,61.3 114.3,59.1 114.5,56.8 114.8,54.4 115,51.9 115.3,49.2 115.5,46.4 115.8,43.4 116,40.3 116.3,37 116.5,34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,128.4 35.8,123 36.2,133" fill="currentColor"/>
  <polygon points="117,26 121.3,36.3 111.3,35.6" fill="currentColor"/>
  <polyline points="143.5,34 143.8,37 144,40.3 144.3,43.4 144.5,46.4 144.8,49.2 145,51.9 145.3,54.4 145.5,56.8 145.8,59.1 146,61.3 146.3,63.4 146.5,65.4 146.8,67.4 147,69.2 147.3,70.9 147.5,72.6 147.8,74.2 148,75.8 148.3,77.2 148.5,78.6 148.8,80 149,81.3 149.3,82.6 149.5,83.8 149.8,84.9 150,86.1 150.3,87.1 150.5,88.2 150.8,89.2 151,90.1 151.3,91.1 151.5,92 151.8,92.8 152,93.7 152.3,94.5 152.5,95.3 152.8,96 153,96.8 153.3,97.5 153.5,98.2 153.8,98.8 154,99.5 154.3,100.1 154.5,100.7 154.8,101.3 155,101.9 155.3,102.4 155.5,103 155.8,103.5 156,104 156.3,104.5 156.5,105 156.8,105.4 157,105.9 157.3,106.3 157.5,106.8 157.8,107.2 158,107.6 158.3,108 158.5,108.4 158.8,108.7 159,109.1 159.3,109.5 159.5,109.8 159.8,110.1 160,110.5 160.3,110.8 160.5,111.1 160.8,111.4 161,111.7 161.3,112 161.5,112.3 161.8,112.6 162,112.8 162.3,113.1 162.5,113.4 162.8,113.6 163,113.9 163.3,114.1 163.5,114.3 163.8,114.6 164,114.8 164.3,115 164.5,115.2 164.8,115.4 165,115.7 165.3,115.9 165.5,116.1 165.8,116.2 166,116.4 166.3,116.6 166.5,116.8 166.8,117 167,117.2 167.3,117.3 167.5,117.5 167.8,117.7 168,117.8 168.3,118 168.5,118.1 168.8,118.3 169,118.4 169.3,118.6 169.5,118.7 169.8,118.9 170,119 170.3,119.2 170.5,119.3 170.8,119.4 171,119.5 171.3,119.7 171.5,119.8 171.8,119.9 172,120 172.3,120.2 172.5,120.3 172.8,120.4 173,120.5 173.3,120.6 173.5,120.7 173.8,120.8 174,120.9 174.3,121 174.5,121.1 174.8,121.2 175,121.3 175.3,121.4 175.5,121.5 175.8,121.6 176,121.7 176.3,121.8 176.5,121.9 176.8,122 177,122 177.3,122.1 177.5,122.2 177.8,122.3 178,122.4 178.3,122.5 178.5,122.5 178.8,122.6 179,122.7 179.3,122.8 179.5,122.8 179.8,122.9 180,123 180.3,123 180.5,123.1 180.8,123.2 181,123.2 181.3,123.3 181.5,123.4 181.8,123.4 182,123.5 182.3,123.6 182.5,123.6 182.8,123.7 183,123.7 183.3,123.8 183.5,123.9 183.8,123.9 184,124 184.3,124 184.5,124.1 184.8,124.1 185,124.2 185.3,124.2 185.5,124.3 185.8,124.3 186,124.4 186.3,124.4 186.5,124.5 186.8,124.5 187,124.6 187.3,124.6 187.5,124.7 187.8,124.7 188,124.8 188.3,124.8 188.5,124.9 188.8,124.9 189,125 189.3,125 189.5,125 189.8,125.1 190,125.1 190.3,125.2 190.5,125.2 190.8,125.2 191,125.3 191.3,125.3 191.5,125.4 191.8,125.4 192,125.4 192.3,125.5 192.5,125.5 192.8,125.5 193,125.6 193.3,125.6 193.5,125.6 193.8,125.7 194,125.7 194.3,125.7 194.5,125.8 194.8,125.8 195,125.8 195.3,125.9 195.5,125.9 195.8,125.9 196,126 196.3,126 196.5,126 196.8,126.1 197,126.1 197.3,126.1 197.5,126.1 197.8,126.2 198,126.2 198.3,126.2 198.5,126.3 198.8,126.3 199,126.3 199.3,126.3 199.5,126.4 199.8,126.4 200,126.4 200.3,126.4 200.5,126.5 200.8,126.5 201,126.5 201.3,126.5 201.5,126.6 201.8,126.6 202,126.6 202.3,126.6 202.5,126.7 202.8,126.7 203,126.7 203.3,126.7 203.5,126.7 203.8,126.8 204,126.8 204.3,126.8 204.5,126.8 204.8,126.9 205,126.9 205.3,126.9 205.5,126.9 205.8,126.9 206,127 206.3,127 206.5,127 206.8,127 207,127 207.3,127.1 207.5,127.1 207.8,127.1 208,127.1 208.3,127.1 208.5,127.1 208.8,127.2 209,127.2 209.3,127.2 209.5,127.2 209.8,127.2 210,127.3 210.3,127.3 210.5,127.3 210.8,127.3 211,127.3 211.3,127.3 211.5,127.4 211.8,127.4 212,127.4 212.3,127.4 212.5,127.4 212.8,127.4 213,127.4 213.3,127.5 213.5,127.5 213.8,127.5 214,127.5 214.3,127.5 214.5,127.5 214.8,127.6 215,127.6 215.3,127.6 215.5,127.6 215.8,127.6 216,127.6 216.3,127.6 216.5,127.7 216.8,127.7 217,127.7 217.3,127.7 217.5,127.7 217.8,127.7 218,127.7 218.3,127.7 218.5,127.8 218.8,127.8 219,127.8 219.3,127.8 219.5,127.8 219.8,127.8 220,127.8 220.3,127.8 220.5,127.9 220.8,127.9 221,127.9 221.3,127.9 221.5,127.9 221.8,127.9 222,127.9 222.3,127.9 222.5,127.9 222.8,128 223,128 223.3,128 223.5,128 223.8,128 224,128 224.3,128 224.5,128 224.8,128 225,128.1 225.3,128.1 225.5,128.1 225.8,128.1 226,128.1 226,128.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="143,26 148.7,35.6 138.7,36.3" fill="currentColor"/>
  <polygon points="234,128.4 223.8,133 224.2,123" fill="currentColor"/>
</svg>
</div>
Several things are apparent if we examine the graph of $f(x)=\tfrac{1}{x}$.

1. On the left branch of the graph, the curve approaches the $x$-axis
   ($y=0$) as $x\to-\infty$.
2. As the graph approaches $x=0$ from the left, the curve drops, but as we
   approach zero from the right, the curve rises.
3. Finally, on the right branch of the graph, the curve approaches the
   $x$-axis ($y=0$) as $x\to\infty$.

To summarize, we use **arrow notation** to show that $x$ or $f(x)$ is
approaching a particular value. See the table below.

| Symbol | Meaning |
| :--- | :--- |
| $x\to a^{-}$ | $x$ approaches $a$ from the left ($x<a$ but close to $a$) |
| $x\to a^{+}$ | $x$ approaches $a$ from the right ($x>a$ but close to $a$) |
| $x\to\infty$ | $x$ approaches infinity ($x$ increases without bound) |
| $x\to-\infty$ | $x$ approaches negative infinity ($x$ decreases without bound) |
| $f(x)\to\infty$ | the output approaches infinity (the output increases without bound) |
| $f(x)\to-\infty$ | the output approaches negative infinity (the output decreases without bound) |
| $f(x)\to a$ | the output approaches $a$ |

### Local behavior of $f(x)=\tfrac{1}{x}$

Let's begin by looking at the reciprocal function, $f(x)=\tfrac{1}{x}$. We
cannot divide by zero, which means the function is undefined at $x=0$; so
zero is not in the domain. As the input values approach zero from the left
side (becoming very small, negative values), the function values decrease
without bound (in other words, they approach negative infinity). We can see
this behavior in the table below.

| $x$ | $-0.1$ | $-0.01$ | $-0.001$ | $-0.0001$ |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)=\tfrac{1}{x}$ | $-10$ | $-100$ | $-1{,}000$ | $-10{,}000$ |

We write in arrow notation

$$\text{as }x\to0^{-},\ f(x)\to-\infty$$

As the input values approach zero from the right side (becoming very small,
positive values), the function values increase without bound (approaching
infinity). We can see this behavior in the table below.

| $x$ | $0.1$ | $0.01$ | $0.001$ | $0.0001$ |
| :--- | ---: | ---: | ---: | ---: |
| $f(x)=\tfrac{1}{x}$ | $10$ | $100$ | $1{,}000$ | $10{,}000$ |

We write in arrow notation

$$\text{as }x\to0^{+},\ f(x)\to\infty$$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 1 over x with four labelled arrows: near the top, as x approaches 0 from the right, f(x) approaches infinity; on the left, as x approaches negative infinity, f(x) approaches 0; on the right, as x approaches infinity, f(x) approaches 0; near the bottom, as x approaches 0 from the left, f(x) approaches negative infinity.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"texts":[{"at":[0.3,4.85],"text":"Right of 0: f(x) → ∞","anchor":"start"},{"at":[-4.9,0.65],"text":"As x → −∞: f(x) → 0","anchor":"start"},{"at":[1.1,0.65],"text":"As x → ∞: f(x) → 0","anchor":"start"},{"at":[0.3,-4.55],"text":"Left of 0: f(x) → −∞","anchor":"start"}]}'>
<svg role="img" aria-label="The graph of f of x equals 1 over x with four labelled arrows: near the top, as x approaches 0 from the right, f(x) approaches infinity; on the left, as x approaches negative infinity, f(x) approaches 0; on the right, as x approaches infinity, f(x) approaches 0; near the bottom, as x approaches 0 from the left, f(x) approaches negative infinity." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="266" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="266" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="194" x2="149" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="170" x2="149" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="98" x2="149" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="74" x2="149" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="50" x2="149" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="34,151.1 34,151.1 34.3,151.2 34.5,151.2 34.8,151.2 35,151.2 35.3,151.2 35.5,151.2 35.8,151.2 36,151.2 36.3,151.2 36.5,151.3 36.8,151.3 37,151.3 37.3,151.3 37.5,151.3 37.8,151.3 38,151.3 38.3,151.3 38.5,151.4 38.8,151.4 39,151.4 39.3,151.4 39.5,151.4 39.8,151.4 40,151.4 40.3,151.4 40.5,151.5 40.8,151.5 41,151.5 41.3,151.5 41.5,151.5 41.8,151.5 42,151.5 42.3,151.6 42.5,151.6 42.8,151.6 43,151.6 43.3,151.6 43.5,151.6 43.8,151.6 44,151.6 44.3,151.7 44.5,151.7 44.8,151.7 45,151.7 45.3,151.7 45.5,151.7 45.8,151.7 46,151.8 46.3,151.8 46.5,151.8 46.8,151.8 47,151.8 47.3,151.8 47.5,151.8 47.8,151.9 48,151.9 48.3,151.9 48.5,151.9 48.8,151.9 49,151.9 49.3,152 49.5,152 49.8,152 50,152 50.3,152 50.5,152 50.8,152 51,152.1 51.3,152.1 51.5,152.1 51.8,152.1 52,152.1 52.3,152.1 52.5,152.2 52.8,152.2 53,152.2 53.3,152.2 53.5,152.2 53.8,152.2 54,152.3 54.3,152.3 54.5,152.3 54.8,152.3 55,152.3 55.3,152.3 55.5,152.4 55.8,152.4 56,152.4 56.3,152.4 56.5,152.4 56.8,152.5 57,152.5 57.3,152.5 57.5,152.5 57.8,152.5 58,152.5 58.3,152.6 58.5,152.6 58.8,152.6 59,152.6 59.3,152.6 59.5,152.7 59.8,152.7 60,152.7 60.3,152.7 60.5,152.7 60.8,152.8 61,152.8 61.3,152.8 61.5,152.8 61.8,152.8 62,152.9 62.3,152.9 62.5,152.9 62.8,152.9 63,152.9 63.3,153 63.5,153 63.8,153 64,153 64.3,153 64.5,153.1 64.8,153.1 65,153.1 65.3,153.1 65.5,153.2 65.8,153.2 66,153.2 66.3,153.2 66.5,153.2 66.8,153.3 67,153.3 67.3,153.3 67.5,153.3 67.8,153.4 68,153.4 68.3,153.4 68.5,153.4 68.8,153.5 69,153.5 69.3,153.5 69.5,153.5 69.8,153.6 70,153.6 70.3,153.6 70.5,153.6 70.8,153.7 71,153.7 71.3,153.7 71.5,153.7 71.8,153.8 72,153.8 72.3,153.8 72.5,153.8 72.8,153.9 73,153.9 73.3,153.9 73.5,153.9 73.8,154 74,154 74.3,154 74.5,154.1 74.8,154.1 75,154.1 75.3,154.1 75.5,154.2 75.8,154.2 76,154.2 76.3,154.3 76.5,154.3 76.8,154.3 77,154.3 77.3,154.4 77.5,154.4 77.8,154.4 78,154.5 78.3,154.5 78.5,154.5 78.8,154.6 79,154.6 79.3,154.6 79.5,154.7 79.8,154.7 80,154.7 80.3,154.8 80.5,154.8 80.8,154.8 81,154.9 81.3,154.9 81.5,154.9 81.8,155 82,155 82.3,155 82.5,155.1 82.8,155.1 83,155.1 83.3,155.2 83.5,155.2 83.8,155.3 84,155.3 84.3,155.3 84.5,155.4 84.8,155.4 85,155.4 85.3,155.5 85.5,155.5 85.8,155.6 86,155.6 86.3,155.6 86.5,155.7 86.8,155.7 87,155.8 87.3,155.8 87.5,155.8 87.8,155.9 88,155.9 88.3,156 88.5,156 88.8,156.1 89,156.1 89.3,156.1 89.5,156.2 89.8,156.2 90,156.3 90.3,156.3 90.5,156.4 90.8,156.4 91,156.5 91.3,156.5 91.5,156.6 91.8,156.6 92,156.7 92.3,156.7 92.5,156.8 92.8,156.8 93,156.9 93.3,156.9 93.5,157 93.8,157 94,157.1 94.3,157.1 94.5,157.2 94.8,157.2 95,157.3 95.3,157.3 95.5,157.4 95.8,157.5 96,157.5 96.3,157.6 96.5,157.6 96.8,157.7 97,157.8 97.3,157.8 97.5,157.9 97.8,157.9 98,158 98.3,158.1 98.5,158.1 98.8,158.2 99,158.3 99.3,158.3 99.5,158.4 99.8,158.5 100,158.5 100.3,158.6 100.5,158.7 100.8,158.7 101,158.8 101.3,158.9 101.5,158.9 101.8,159 102,159.1 102.3,159.2 102.5,159.2 102.8,159.3 103,159.4 103.3,159.5 103.5,159.6 103.8,159.6 104,159.7 104.3,159.8 104.5,159.9 104.8,160 105,160 105.3,160.1 105.5,160.2 105.8,160.3 106,160.4 106.3,160.5 106.5,160.6 106.8,160.7 107,160.8 107.3,160.9 107.5,161 107.8,161.1 108,161.2 108.3,161.3 108.5,161.4 108.8,161.5 109,161.6 109.3,161.7 109.5,161.8 109.8,161.9 110,162 110.3,162.1 110.5,162.2 110.8,162.3 111,162.5 111.3,162.6 111.5,162.7 111.8,162.8 112,162.9 112.3,163.1 112.5,163.2 112.8,163.3 113,163.5 113.3,163.6 113.5,163.7 113.8,163.9 114,164 114.3,164.1 114.5,164.3 114.8,164.4 115,164.6 115.3,164.7 115.5,164.9 115.8,165 116,165.2 116.3,165.4 116.5,165.5 116.8,165.7 117,165.9 117.3,166 117.5,166.2 117.8,166.4 118,166.6 118.3,166.8 118.5,166.9 118.8,167.1 119,167.3 119.3,167.5 119.5,167.7 119.8,167.9 120,168.2 120.3,168.4 120.5,168.6 120.8,168.8 121,169 121.3,169.3 121.5,169.5 121.8,169.8 122,170 122.3,170.3 122.5,170.5 122.8,170.8 123,171 123.3,171.3 123.5,171.6 123.8,171.9 124,172.2 124.3,172.5 124.5,172.8 124.8,173.1 125,173.4 125.3,173.8 125.5,174.1 125.8,174.4 126,174.8 126.3,175.2 126.5,175.5 126.8,175.9 127,176.3 127.3,176.7 127.5,177.1 127.8,177.6 128,178 128.3,178.5 128.5,178.9 128.8,179.4 129,179.9 129.3,180.4 129.5,180.9 129.8,181.4 130,182 130.3,182.6 130.5,183.2 130.8,183.8 131,184.4 131.3,185.1 131.5,185.7 131.8,186.4 132,187.1 132.3,187.9 132.5,188.7 132.8,189.5 133,190.3 133.3,191.2 133.5,192.1 133.8,193 134,194 134.3,195 134.5,196.1 134.8,197.2 135,198.4 135.3,199.6 135.5,200.9 135.8,202.2 136,203.6 136.3,205.1 136.5,206.6 136.8,208.3 137,210 137.3,211.8 137.5,213.8 137.8,215.8 138,218 138.3,220.3 138.5,222.8 138.8,225.4 139,228.3 139.3,231.3 139.5,234.6 139.8,238.2 140,242 140.3,246.2 140.5,250.7 140.6,253.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,150.8 36.2,146.2 35.8,156.2" fill="currentColor"/>
  <polygon points="141,261.2 135.5,251.4 145.5,251" fill="currentColor"/>
  <polyline points="151.4,38.8 151.5,41.3 151.8,45.8 152,50 152.3,53.8 152.5,57.4 152.8,60.7 153,63.7 153.3,66.6 153.5,69.2 153.8,71.7 154,74 154.3,76.2 154.5,78.2 154.8,80.2 155,82 155.3,83.7 155.5,85.4 155.8,86.9 156,88.4 156.3,89.8 156.5,91.1 156.8,92.4 157,93.6 157.3,94.8 157.5,95.9 157.8,97 158,98 158.3,99 158.5,99.9 158.8,100.8 159,101.7 159.3,102.5 159.5,103.3 159.8,104.1 160,104.9 160.3,105.6 160.5,106.3 160.8,106.9 161,107.6 161.3,108.2 161.5,108.8 161.8,109.4 162,110 162.3,110.6 162.5,111.1 162.8,111.6 163,112.1 163.3,112.6 163.5,113.1 163.8,113.5 164,114 164.3,114.4 164.5,114.9 164.8,115.3 165,115.7 165.3,116.1 165.5,116.5 165.8,116.8 166,117.2 166.3,117.6 166.5,117.9 166.8,118.2 167,118.6 167.3,118.9 167.5,119.2 167.8,119.5 168,119.8 168.3,120.1 168.5,120.4 168.8,120.7 169,121 169.3,121.2 169.5,121.5 169.8,121.7 170,122 170.3,122.2 170.5,122.5 170.8,122.7 171,123 171.3,123.2 171.5,123.4 171.8,123.6 172,123.8 172.3,124.1 172.5,124.3 172.8,124.5 173,124.7 173.3,124.9 173.5,125.1 173.8,125.2 174,125.4 174.3,125.6 174.5,125.8 174.8,126 175,126.1 175.3,126.3 175.5,126.5 175.8,126.6 176,126.8 176.3,127 176.5,127.1 176.8,127.3 177,127.4 177.3,127.6 177.5,127.7 177.8,127.9 178,128 178.3,128.1 178.5,128.3 178.8,128.4 179,128.5 179.3,128.7 179.5,128.8 179.8,128.9 180,129.1 180.3,129.2 180.5,129.3 180.8,129.4 181,129.5 181.3,129.7 181.5,129.8 181.8,129.9 182,130 182.3,130.1 182.5,130.2 182.8,130.3 183,130.4 183.3,130.5 183.5,130.6 183.8,130.7 184,130.8 184.3,130.9 184.5,131 184.8,131.1 185,131.2 185.3,131.3 185.5,131.4 185.8,131.5 186,131.6 186.3,131.7 186.5,131.8 186.8,131.9 187,132 187.3,132 187.5,132.1 187.8,132.2 188,132.3 188.3,132.4 188.5,132.4 188.8,132.5 189,132.6 189.3,132.7 189.5,132.8 189.8,132.8 190,132.9 190.3,133 190.5,133.1 190.8,133.1 191,133.2 191.3,133.3 191.5,133.3 191.8,133.4 192,133.5 192.3,133.5 192.5,133.6 192.8,133.7 193,133.7 193.3,133.8 193.5,133.9 193.8,133.9 194,134 194.3,134.1 194.5,134.1 194.8,134.2 195,134.2 195.3,134.3 195.5,134.4 195.8,134.4 196,134.5 196.3,134.5 196.5,134.6 196.8,134.7 197,134.7 197.3,134.8 197.5,134.8 197.8,134.9 198,134.9 198.3,135 198.5,135 198.8,135.1 199,135.1 199.3,135.2 199.5,135.2 199.8,135.3 200,135.3 200.3,135.4 200.5,135.4 200.8,135.5 201,135.5 201.3,135.6 201.5,135.6 201.8,135.7 202,135.7 202.3,135.8 202.5,135.8 202.8,135.9 203,135.9 203.3,135.9 203.5,136 203.8,136 204,136.1 204.3,136.1 204.5,136.2 204.8,136.2 205,136.2 205.3,136.3 205.5,136.3 205.8,136.4 206,136.4 206.3,136.4 206.5,136.5 206.8,136.5 207,136.6 207.3,136.6 207.5,136.6 207.8,136.7 208,136.7 208.3,136.7 208.5,136.8 208.8,136.8 209,136.9 209.3,136.9 209.5,136.9 209.8,137 210,137 210.3,137 210.5,137.1 210.8,137.1 211,137.1 211.3,137.2 211.5,137.2 211.8,137.2 212,137.3 212.3,137.3 212.5,137.3 212.8,137.4 213,137.4 213.3,137.4 213.5,137.5 213.8,137.5 214,137.5 214.3,137.6 214.5,137.6 214.8,137.6 215,137.7 215.3,137.7 215.5,137.7 215.8,137.7 216,137.8 216.3,137.8 216.5,137.8 216.8,137.9 217,137.9 217.3,137.9 217.5,137.9 217.8,138 218,138 218.3,138 218.5,138.1 218.8,138.1 219,138.1 219.3,138.1 219.5,138.2 219.8,138.2 220,138.2 220.3,138.2 220.5,138.3 220.8,138.3 221,138.3 221.3,138.3 221.5,138.4 221.8,138.4 222,138.4 222.3,138.4 222.5,138.5 222.8,138.5 223,138.5 223.3,138.5 223.5,138.6 223.8,138.6 224,138.6 224.3,138.6 224.5,138.7 224.8,138.7 225,138.7 225.3,138.7 225.5,138.8 225.8,138.8 226,138.8 226.3,138.8 226.5,138.8 226.8,138.9 227,138.9 227.3,138.9 227.5,138.9 227.8,139 228,139 228.3,139 228.5,139 228.8,139 229,139.1 229.3,139.1 229.5,139.1 229.8,139.1 230,139.1 230.3,139.2 230.5,139.2 230.8,139.2 231,139.2 231.3,139.2 231.5,139.3 231.8,139.3 232,139.3 232.3,139.3 232.5,139.3 232.8,139.4 233,139.4 233.3,139.4 233.5,139.4 233.8,139.4 234,139.5 234.3,139.5 234.5,139.5 234.8,139.5 235,139.5 235.3,139.5 235.5,139.6 235.8,139.6 236,139.6 236.3,139.6 236.5,139.6 236.8,139.7 237,139.7 237.3,139.7 237.5,139.7 237.8,139.7 238,139.7 238.3,139.8 238.5,139.8 238.8,139.8 239,139.8 239.3,139.8 239.5,139.8 239.8,139.9 240,139.9 240.3,139.9 240.5,139.9 240.8,139.9 241,139.9 241.3,140 241.5,140 241.8,140 242,140 242.3,140 242.5,140 242.8,140 243,140.1 243.3,140.1 243.5,140.1 243.8,140.1 244,140.1 244.3,140.1 244.5,140.2 244.8,140.2 245,140.2 245.3,140.2 245.5,140.2 245.8,140.2 246,140.2 246.3,140.3 246.5,140.3 246.8,140.3 247,140.3 247.3,140.3 247.5,140.3 247.8,140.3 248,140.4 248.3,140.4 248.5,140.4 248.8,140.4 249,140.4 249.3,140.4 249.5,140.4 249.8,140.4 250,140.5 250.3,140.5 250.5,140.5 250.8,140.5 251,140.5 251.3,140.5 251.5,140.5 251.8,140.6 252,140.6 252.3,140.6 252.5,140.6 252.8,140.6 253,140.6 253.3,140.6 253.5,140.6 253.8,140.7 254,140.7 254.3,140.7 254.5,140.7 254.8,140.7 255,140.7 255.3,140.7 255.5,140.7 255.8,140.8 256,140.8 256.3,140.8 256.5,140.8 256.8,140.8 257,140.8 257.3,140.8 257.5,140.8 257.8,140.8 258,140.9 258,140.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="151,30.8 156.5,40.6 146.5,41" fill="currentColor"/>
  <polygon points="266,141.2 255.8,145.8 256.2,135.8" fill="currentColor"/>
  <text x="153.2" y="29.6" font-size="13" fill="currentColor" text-anchor="start">Right of 0: f(x) → ∞</text>
  <text x="28.4" y="130.4" font-size="13" fill="currentColor" text-anchor="start">As x → −∞: f(x) → 0</text>
  <text x="172.4" y="130.4" font-size="13" fill="currentColor" text-anchor="start">As x → ∞: f(x) → 0</text>
  <text x="153.2" y="255.2" font-size="13" fill="currentColor" text-anchor="start">Left of 0: f(x) → −∞</text>
</svg>
</div>
This behavior creates a **vertical asymptote**, which is a vertical line
that the graph approaches but never crosses. In this case, the graph is
approaching the vertical line $x=0$ as the input becomes close to zero.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 1 over x with a dashed red vertical line at x=0, labelled x=0, showing the vertical asymptote.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0","labelSide":"right"}]}'>
<svg role="img" aria-label="The graph of f of x equals 1 over x with a dashed red vertical line at x=0, labelled x=0, showing the vertical asymptote." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="266" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="266" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="194" x2="149" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="170" x2="149" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="98" x2="149" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="74" x2="149" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="50" x2="149" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="146" y1="272" x2="146" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,151.1 34,151.1 34.3,151.2 34.5,151.2 34.8,151.2 35,151.2 35.3,151.2 35.5,151.2 35.8,151.2 36,151.2 36.3,151.2 36.5,151.3 36.8,151.3 37,151.3 37.3,151.3 37.5,151.3 37.8,151.3 38,151.3 38.3,151.3 38.5,151.4 38.8,151.4 39,151.4 39.3,151.4 39.5,151.4 39.8,151.4 40,151.4 40.3,151.4 40.5,151.5 40.8,151.5 41,151.5 41.3,151.5 41.5,151.5 41.8,151.5 42,151.5 42.3,151.6 42.5,151.6 42.8,151.6 43,151.6 43.3,151.6 43.5,151.6 43.8,151.6 44,151.6 44.3,151.7 44.5,151.7 44.8,151.7 45,151.7 45.3,151.7 45.5,151.7 45.8,151.7 46,151.8 46.3,151.8 46.5,151.8 46.8,151.8 47,151.8 47.3,151.8 47.5,151.8 47.8,151.9 48,151.9 48.3,151.9 48.5,151.9 48.8,151.9 49,151.9 49.3,152 49.5,152 49.8,152 50,152 50.3,152 50.5,152 50.8,152 51,152.1 51.3,152.1 51.5,152.1 51.8,152.1 52,152.1 52.3,152.1 52.5,152.2 52.8,152.2 53,152.2 53.3,152.2 53.5,152.2 53.8,152.2 54,152.3 54.3,152.3 54.5,152.3 54.8,152.3 55,152.3 55.3,152.3 55.5,152.4 55.8,152.4 56,152.4 56.3,152.4 56.5,152.4 56.8,152.5 57,152.5 57.3,152.5 57.5,152.5 57.8,152.5 58,152.5 58.3,152.6 58.5,152.6 58.8,152.6 59,152.6 59.3,152.6 59.5,152.7 59.8,152.7 60,152.7 60.3,152.7 60.5,152.7 60.8,152.8 61,152.8 61.3,152.8 61.5,152.8 61.8,152.8 62,152.9 62.3,152.9 62.5,152.9 62.8,152.9 63,152.9 63.3,153 63.5,153 63.8,153 64,153 64.3,153 64.5,153.1 64.8,153.1 65,153.1 65.3,153.1 65.5,153.2 65.8,153.2 66,153.2 66.3,153.2 66.5,153.2 66.8,153.3 67,153.3 67.3,153.3 67.5,153.3 67.8,153.4 68,153.4 68.3,153.4 68.5,153.4 68.8,153.5 69,153.5 69.3,153.5 69.5,153.5 69.8,153.6 70,153.6 70.3,153.6 70.5,153.6 70.8,153.7 71,153.7 71.3,153.7 71.5,153.7 71.8,153.8 72,153.8 72.3,153.8 72.5,153.8 72.8,153.9 73,153.9 73.3,153.9 73.5,153.9 73.8,154 74,154 74.3,154 74.5,154.1 74.8,154.1 75,154.1 75.3,154.1 75.5,154.2 75.8,154.2 76,154.2 76.3,154.3 76.5,154.3 76.8,154.3 77,154.3 77.3,154.4 77.5,154.4 77.8,154.4 78,154.5 78.3,154.5 78.5,154.5 78.8,154.6 79,154.6 79.3,154.6 79.5,154.7 79.8,154.7 80,154.7 80.3,154.8 80.5,154.8 80.8,154.8 81,154.9 81.3,154.9 81.5,154.9 81.8,155 82,155 82.3,155 82.5,155.1 82.8,155.1 83,155.1 83.3,155.2 83.5,155.2 83.8,155.3 84,155.3 84.3,155.3 84.5,155.4 84.8,155.4 85,155.4 85.3,155.5 85.5,155.5 85.8,155.6 86,155.6 86.3,155.6 86.5,155.7 86.8,155.7 87,155.8 87.3,155.8 87.5,155.8 87.8,155.9 88,155.9 88.3,156 88.5,156 88.8,156.1 89,156.1 89.3,156.1 89.5,156.2 89.8,156.2 90,156.3 90.3,156.3 90.5,156.4 90.8,156.4 91,156.5 91.3,156.5 91.5,156.6 91.8,156.6 92,156.7 92.3,156.7 92.5,156.8 92.8,156.8 93,156.9 93.3,156.9 93.5,157 93.8,157 94,157.1 94.3,157.1 94.5,157.2 94.8,157.2 95,157.3 95.3,157.3 95.5,157.4 95.8,157.5 96,157.5 96.3,157.6 96.5,157.6 96.8,157.7 97,157.8 97.3,157.8 97.5,157.9 97.8,157.9 98,158 98.3,158.1 98.5,158.1 98.8,158.2 99,158.3 99.3,158.3 99.5,158.4 99.8,158.5 100,158.5 100.3,158.6 100.5,158.7 100.8,158.7 101,158.8 101.3,158.9 101.5,158.9 101.8,159 102,159.1 102.3,159.2 102.5,159.2 102.8,159.3 103,159.4 103.3,159.5 103.5,159.6 103.8,159.6 104,159.7 104.3,159.8 104.5,159.9 104.8,160 105,160 105.3,160.1 105.5,160.2 105.8,160.3 106,160.4 106.3,160.5 106.5,160.6 106.8,160.7 107,160.8 107.3,160.9 107.5,161 107.8,161.1 108,161.2 108.3,161.3 108.5,161.4 108.8,161.5 109,161.6 109.3,161.7 109.5,161.8 109.8,161.9 110,162 110.3,162.1 110.5,162.2 110.8,162.3 111,162.5 111.3,162.6 111.5,162.7 111.8,162.8 112,162.9 112.3,163.1 112.5,163.2 112.8,163.3 113,163.5 113.3,163.6 113.5,163.7 113.8,163.9 114,164 114.3,164.1 114.5,164.3 114.8,164.4 115,164.6 115.3,164.7 115.5,164.9 115.8,165 116,165.2 116.3,165.4 116.5,165.5 116.8,165.7 117,165.9 117.3,166 117.5,166.2 117.8,166.4 118,166.6 118.3,166.8 118.5,166.9 118.8,167.1 119,167.3 119.3,167.5 119.5,167.7 119.8,167.9 120,168.2 120.3,168.4 120.5,168.6 120.8,168.8 121,169 121.3,169.3 121.5,169.5 121.8,169.8 122,170 122.3,170.3 122.5,170.5 122.8,170.8 123,171 123.3,171.3 123.5,171.6 123.8,171.9 124,172.2 124.3,172.5 124.5,172.8 124.8,173.1 125,173.4 125.3,173.8 125.5,174.1 125.8,174.4 126,174.8 126.3,175.2 126.5,175.5 126.8,175.9 127,176.3 127.3,176.7 127.5,177.1 127.8,177.6 128,178 128.3,178.5 128.5,178.9 128.8,179.4 129,179.9 129.3,180.4 129.5,180.9 129.8,181.4 130,182 130.3,182.6 130.5,183.2 130.8,183.8 131,184.4 131.3,185.1 131.5,185.7 131.8,186.4 132,187.1 132.3,187.9 132.5,188.7 132.8,189.5 133,190.3 133.3,191.2 133.5,192.1 133.8,193 134,194 134.3,195 134.5,196.1 134.8,197.2 135,198.4 135.3,199.6 135.5,200.9 135.8,202.2 136,203.6 136.3,205.1 136.5,206.6 136.8,208.3 137,210 137.3,211.8 137.5,213.8 137.8,215.8 138,218 138.3,220.3 138.5,222.8 138.8,225.4 139,228.3 139.3,231.3 139.5,234.6 139.8,238.2 140,242 140.3,246.2 140.5,250.7 140.6,253.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,150.8 36.2,146.2 35.8,156.2" fill="currentColor"/>
  <polygon points="141,261.2 135.5,251.4 145.5,251" fill="currentColor"/>
  <polyline points="151.4,38.8 151.5,41.3 151.8,45.8 152,50 152.3,53.8 152.5,57.4 152.8,60.7 153,63.7 153.3,66.6 153.5,69.2 153.8,71.7 154,74 154.3,76.2 154.5,78.2 154.8,80.2 155,82 155.3,83.7 155.5,85.4 155.8,86.9 156,88.4 156.3,89.8 156.5,91.1 156.8,92.4 157,93.6 157.3,94.8 157.5,95.9 157.8,97 158,98 158.3,99 158.5,99.9 158.8,100.8 159,101.7 159.3,102.5 159.5,103.3 159.8,104.1 160,104.9 160.3,105.6 160.5,106.3 160.8,106.9 161,107.6 161.3,108.2 161.5,108.8 161.8,109.4 162,110 162.3,110.6 162.5,111.1 162.8,111.6 163,112.1 163.3,112.6 163.5,113.1 163.8,113.5 164,114 164.3,114.4 164.5,114.9 164.8,115.3 165,115.7 165.3,116.1 165.5,116.5 165.8,116.8 166,117.2 166.3,117.6 166.5,117.9 166.8,118.2 167,118.6 167.3,118.9 167.5,119.2 167.8,119.5 168,119.8 168.3,120.1 168.5,120.4 168.8,120.7 169,121 169.3,121.2 169.5,121.5 169.8,121.7 170,122 170.3,122.2 170.5,122.5 170.8,122.7 171,123 171.3,123.2 171.5,123.4 171.8,123.6 172,123.8 172.3,124.1 172.5,124.3 172.8,124.5 173,124.7 173.3,124.9 173.5,125.1 173.8,125.2 174,125.4 174.3,125.6 174.5,125.8 174.8,126 175,126.1 175.3,126.3 175.5,126.5 175.8,126.6 176,126.8 176.3,127 176.5,127.1 176.8,127.3 177,127.4 177.3,127.6 177.5,127.7 177.8,127.9 178,128 178.3,128.1 178.5,128.3 178.8,128.4 179,128.5 179.3,128.7 179.5,128.8 179.8,128.9 180,129.1 180.3,129.2 180.5,129.3 180.8,129.4 181,129.5 181.3,129.7 181.5,129.8 181.8,129.9 182,130 182.3,130.1 182.5,130.2 182.8,130.3 183,130.4 183.3,130.5 183.5,130.6 183.8,130.7 184,130.8 184.3,130.9 184.5,131 184.8,131.1 185,131.2 185.3,131.3 185.5,131.4 185.8,131.5 186,131.6 186.3,131.7 186.5,131.8 186.8,131.9 187,132 187.3,132 187.5,132.1 187.8,132.2 188,132.3 188.3,132.4 188.5,132.4 188.8,132.5 189,132.6 189.3,132.7 189.5,132.8 189.8,132.8 190,132.9 190.3,133 190.5,133.1 190.8,133.1 191,133.2 191.3,133.3 191.5,133.3 191.8,133.4 192,133.5 192.3,133.5 192.5,133.6 192.8,133.7 193,133.7 193.3,133.8 193.5,133.9 193.8,133.9 194,134 194.3,134.1 194.5,134.1 194.8,134.2 195,134.2 195.3,134.3 195.5,134.4 195.8,134.4 196,134.5 196.3,134.5 196.5,134.6 196.8,134.7 197,134.7 197.3,134.8 197.5,134.8 197.8,134.9 198,134.9 198.3,135 198.5,135 198.8,135.1 199,135.1 199.3,135.2 199.5,135.2 199.8,135.3 200,135.3 200.3,135.4 200.5,135.4 200.8,135.5 201,135.5 201.3,135.6 201.5,135.6 201.8,135.7 202,135.7 202.3,135.8 202.5,135.8 202.8,135.9 203,135.9 203.3,135.9 203.5,136 203.8,136 204,136.1 204.3,136.1 204.5,136.2 204.8,136.2 205,136.2 205.3,136.3 205.5,136.3 205.8,136.4 206,136.4 206.3,136.4 206.5,136.5 206.8,136.5 207,136.6 207.3,136.6 207.5,136.6 207.8,136.7 208,136.7 208.3,136.7 208.5,136.8 208.8,136.8 209,136.9 209.3,136.9 209.5,136.9 209.8,137 210,137 210.3,137 210.5,137.1 210.8,137.1 211,137.1 211.3,137.2 211.5,137.2 211.8,137.2 212,137.3 212.3,137.3 212.5,137.3 212.8,137.4 213,137.4 213.3,137.4 213.5,137.5 213.8,137.5 214,137.5 214.3,137.6 214.5,137.6 214.8,137.6 215,137.7 215.3,137.7 215.5,137.7 215.8,137.7 216,137.8 216.3,137.8 216.5,137.8 216.8,137.9 217,137.9 217.3,137.9 217.5,137.9 217.8,138 218,138 218.3,138 218.5,138.1 218.8,138.1 219,138.1 219.3,138.1 219.5,138.2 219.8,138.2 220,138.2 220.3,138.2 220.5,138.3 220.8,138.3 221,138.3 221.3,138.3 221.5,138.4 221.8,138.4 222,138.4 222.3,138.4 222.5,138.5 222.8,138.5 223,138.5 223.3,138.5 223.5,138.6 223.8,138.6 224,138.6 224.3,138.6 224.5,138.7 224.8,138.7 225,138.7 225.3,138.7 225.5,138.8 225.8,138.8 226,138.8 226.3,138.8 226.5,138.8 226.8,138.9 227,138.9 227.3,138.9 227.5,138.9 227.8,139 228,139 228.3,139 228.5,139 228.8,139 229,139.1 229.3,139.1 229.5,139.1 229.8,139.1 230,139.1 230.3,139.2 230.5,139.2 230.8,139.2 231,139.2 231.3,139.2 231.5,139.3 231.8,139.3 232,139.3 232.3,139.3 232.5,139.3 232.8,139.4 233,139.4 233.3,139.4 233.5,139.4 233.8,139.4 234,139.5 234.3,139.5 234.5,139.5 234.8,139.5 235,139.5 235.3,139.5 235.5,139.6 235.8,139.6 236,139.6 236.3,139.6 236.5,139.6 236.8,139.7 237,139.7 237.3,139.7 237.5,139.7 237.8,139.7 238,139.7 238.3,139.8 238.5,139.8 238.8,139.8 239,139.8 239.3,139.8 239.5,139.8 239.8,139.9 240,139.9 240.3,139.9 240.5,139.9 240.8,139.9 241,139.9 241.3,140 241.5,140 241.8,140 242,140 242.3,140 242.5,140 242.8,140 243,140.1 243.3,140.1 243.5,140.1 243.8,140.1 244,140.1 244.3,140.1 244.5,140.2 244.8,140.2 245,140.2 245.3,140.2 245.5,140.2 245.8,140.2 246,140.2 246.3,140.3 246.5,140.3 246.8,140.3 247,140.3 247.3,140.3 247.5,140.3 247.8,140.3 248,140.4 248.3,140.4 248.5,140.4 248.8,140.4 249,140.4 249.3,140.4 249.5,140.4 249.8,140.4 250,140.5 250.3,140.5 250.5,140.5 250.8,140.5 251,140.5 251.3,140.5 251.5,140.5 251.8,140.6 252,140.6 252.3,140.6 252.5,140.6 252.8,140.6 253,140.6 253.3,140.6 253.5,140.6 253.8,140.7 254,140.7 254.3,140.7 254.5,140.7 254.8,140.7 255,140.7 255.3,140.7 255.5,140.7 255.8,140.8 256,140.8 256.3,140.8 256.5,140.8 256.8,140.8 257,140.8 257.3,140.8 257.5,140.8 257.8,140.8 258,140.9 258,140.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="151,30.8 156.5,40.6 146.5,41" fill="currentColor"/>
  <polygon points="266,141.2 255.8,145.8 256.2,135.8" fill="currentColor"/>
  <text x="168" y="79.4" font-size="13" fill="currentColor" text-anchor="start">x = 0</text>
</svg>
</div>
{{< callout type="info" >}}
  **Vertical asymptote.** A **vertical asymptote** of a graph is a vertical
  line $x=a$ where the graph tends toward positive or negative infinity as
  the input approaches $a$ from either the left or the right. We write

  $$\text{as }x\to a^{-},\ f(x)\to\pm\infty\ \text{ or }\ x\to a^{+},\ f(x)\to\pm\infty$$
{{< /callout >}}

### End behavior of $f(x)=\tfrac{1}{x}$

As the values of $x$ approach infinity, the function values approach 0. As
the values of $x$ approach negative infinity, the function values approach
0. Symbolically, using arrow notation

$$\text{as }x\to\infty,\ f(x)\to0,\ \text{ and as }x\to-\infty,\ f(x)\to0$$

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 1 over x again, with the same four labelled arrows highlighting its end behavior: as x approaches negative infinity or positive infinity, f(x) approaches 0, and as x approaches 0 from the left or right, f(x) approaches negative infinity or infinity respectively.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"texts":[{"at":[0.3,4.85],"text":"Right of 0: f(x) → ∞","anchor":"start"},{"at":[-4.9,0.65],"text":"As x → −∞: f(x) → 0","anchor":"start"},{"at":[1.1,0.65],"text":"As x → ∞: f(x) → 0","anchor":"start"},{"at":[0.3,-4.55],"text":"Left of 0: f(x) → −∞","anchor":"start"}]}'>
<svg role="img" aria-label="The graph of f of x equals 1 over x again, with the same four labelled arrows highlighting its end behavior: as x approaches negative infinity or positive infinity, f(x) approaches 0, and as x approaches 0 from the left or right, f(x) approaches negative infinity or infinity respectively." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="266" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="266" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="194" x2="149" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="170" x2="149" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="98" x2="149" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="74" x2="149" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="50" x2="149" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="34,151.1 34,151.1 34.3,151.2 34.5,151.2 34.8,151.2 35,151.2 35.3,151.2 35.5,151.2 35.8,151.2 36,151.2 36.3,151.2 36.5,151.3 36.8,151.3 37,151.3 37.3,151.3 37.5,151.3 37.8,151.3 38,151.3 38.3,151.3 38.5,151.4 38.8,151.4 39,151.4 39.3,151.4 39.5,151.4 39.8,151.4 40,151.4 40.3,151.4 40.5,151.5 40.8,151.5 41,151.5 41.3,151.5 41.5,151.5 41.8,151.5 42,151.5 42.3,151.6 42.5,151.6 42.8,151.6 43,151.6 43.3,151.6 43.5,151.6 43.8,151.6 44,151.6 44.3,151.7 44.5,151.7 44.8,151.7 45,151.7 45.3,151.7 45.5,151.7 45.8,151.7 46,151.8 46.3,151.8 46.5,151.8 46.8,151.8 47,151.8 47.3,151.8 47.5,151.8 47.8,151.9 48,151.9 48.3,151.9 48.5,151.9 48.8,151.9 49,151.9 49.3,152 49.5,152 49.8,152 50,152 50.3,152 50.5,152 50.8,152 51,152.1 51.3,152.1 51.5,152.1 51.8,152.1 52,152.1 52.3,152.1 52.5,152.2 52.8,152.2 53,152.2 53.3,152.2 53.5,152.2 53.8,152.2 54,152.3 54.3,152.3 54.5,152.3 54.8,152.3 55,152.3 55.3,152.3 55.5,152.4 55.8,152.4 56,152.4 56.3,152.4 56.5,152.4 56.8,152.5 57,152.5 57.3,152.5 57.5,152.5 57.8,152.5 58,152.5 58.3,152.6 58.5,152.6 58.8,152.6 59,152.6 59.3,152.6 59.5,152.7 59.8,152.7 60,152.7 60.3,152.7 60.5,152.7 60.8,152.8 61,152.8 61.3,152.8 61.5,152.8 61.8,152.8 62,152.9 62.3,152.9 62.5,152.9 62.8,152.9 63,152.9 63.3,153 63.5,153 63.8,153 64,153 64.3,153 64.5,153.1 64.8,153.1 65,153.1 65.3,153.1 65.5,153.2 65.8,153.2 66,153.2 66.3,153.2 66.5,153.2 66.8,153.3 67,153.3 67.3,153.3 67.5,153.3 67.8,153.4 68,153.4 68.3,153.4 68.5,153.4 68.8,153.5 69,153.5 69.3,153.5 69.5,153.5 69.8,153.6 70,153.6 70.3,153.6 70.5,153.6 70.8,153.7 71,153.7 71.3,153.7 71.5,153.7 71.8,153.8 72,153.8 72.3,153.8 72.5,153.8 72.8,153.9 73,153.9 73.3,153.9 73.5,153.9 73.8,154 74,154 74.3,154 74.5,154.1 74.8,154.1 75,154.1 75.3,154.1 75.5,154.2 75.8,154.2 76,154.2 76.3,154.3 76.5,154.3 76.8,154.3 77,154.3 77.3,154.4 77.5,154.4 77.8,154.4 78,154.5 78.3,154.5 78.5,154.5 78.8,154.6 79,154.6 79.3,154.6 79.5,154.7 79.8,154.7 80,154.7 80.3,154.8 80.5,154.8 80.8,154.8 81,154.9 81.3,154.9 81.5,154.9 81.8,155 82,155 82.3,155 82.5,155.1 82.8,155.1 83,155.1 83.3,155.2 83.5,155.2 83.8,155.3 84,155.3 84.3,155.3 84.5,155.4 84.8,155.4 85,155.4 85.3,155.5 85.5,155.5 85.8,155.6 86,155.6 86.3,155.6 86.5,155.7 86.8,155.7 87,155.8 87.3,155.8 87.5,155.8 87.8,155.9 88,155.9 88.3,156 88.5,156 88.8,156.1 89,156.1 89.3,156.1 89.5,156.2 89.8,156.2 90,156.3 90.3,156.3 90.5,156.4 90.8,156.4 91,156.5 91.3,156.5 91.5,156.6 91.8,156.6 92,156.7 92.3,156.7 92.5,156.8 92.8,156.8 93,156.9 93.3,156.9 93.5,157 93.8,157 94,157.1 94.3,157.1 94.5,157.2 94.8,157.2 95,157.3 95.3,157.3 95.5,157.4 95.8,157.5 96,157.5 96.3,157.6 96.5,157.6 96.8,157.7 97,157.8 97.3,157.8 97.5,157.9 97.8,157.9 98,158 98.3,158.1 98.5,158.1 98.8,158.2 99,158.3 99.3,158.3 99.5,158.4 99.8,158.5 100,158.5 100.3,158.6 100.5,158.7 100.8,158.7 101,158.8 101.3,158.9 101.5,158.9 101.8,159 102,159.1 102.3,159.2 102.5,159.2 102.8,159.3 103,159.4 103.3,159.5 103.5,159.6 103.8,159.6 104,159.7 104.3,159.8 104.5,159.9 104.8,160 105,160 105.3,160.1 105.5,160.2 105.8,160.3 106,160.4 106.3,160.5 106.5,160.6 106.8,160.7 107,160.8 107.3,160.9 107.5,161 107.8,161.1 108,161.2 108.3,161.3 108.5,161.4 108.8,161.5 109,161.6 109.3,161.7 109.5,161.8 109.8,161.9 110,162 110.3,162.1 110.5,162.2 110.8,162.3 111,162.5 111.3,162.6 111.5,162.7 111.8,162.8 112,162.9 112.3,163.1 112.5,163.2 112.8,163.3 113,163.5 113.3,163.6 113.5,163.7 113.8,163.9 114,164 114.3,164.1 114.5,164.3 114.8,164.4 115,164.6 115.3,164.7 115.5,164.9 115.8,165 116,165.2 116.3,165.4 116.5,165.5 116.8,165.7 117,165.9 117.3,166 117.5,166.2 117.8,166.4 118,166.6 118.3,166.8 118.5,166.9 118.8,167.1 119,167.3 119.3,167.5 119.5,167.7 119.8,167.9 120,168.2 120.3,168.4 120.5,168.6 120.8,168.8 121,169 121.3,169.3 121.5,169.5 121.8,169.8 122,170 122.3,170.3 122.5,170.5 122.8,170.8 123,171 123.3,171.3 123.5,171.6 123.8,171.9 124,172.2 124.3,172.5 124.5,172.8 124.8,173.1 125,173.4 125.3,173.8 125.5,174.1 125.8,174.4 126,174.8 126.3,175.2 126.5,175.5 126.8,175.9 127,176.3 127.3,176.7 127.5,177.1 127.8,177.6 128,178 128.3,178.5 128.5,178.9 128.8,179.4 129,179.9 129.3,180.4 129.5,180.9 129.8,181.4 130,182 130.3,182.6 130.5,183.2 130.8,183.8 131,184.4 131.3,185.1 131.5,185.7 131.8,186.4 132,187.1 132.3,187.9 132.5,188.7 132.8,189.5 133,190.3 133.3,191.2 133.5,192.1 133.8,193 134,194 134.3,195 134.5,196.1 134.8,197.2 135,198.4 135.3,199.6 135.5,200.9 135.8,202.2 136,203.6 136.3,205.1 136.5,206.6 136.8,208.3 137,210 137.3,211.8 137.5,213.8 137.8,215.8 138,218 138.3,220.3 138.5,222.8 138.8,225.4 139,228.3 139.3,231.3 139.5,234.6 139.8,238.2 140,242 140.3,246.2 140.5,250.7 140.6,253.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,150.8 36.2,146.2 35.8,156.2" fill="currentColor"/>
  <polygon points="141,261.2 135.5,251.4 145.5,251" fill="currentColor"/>
  <polyline points="151.4,38.8 151.5,41.3 151.8,45.8 152,50 152.3,53.8 152.5,57.4 152.8,60.7 153,63.7 153.3,66.6 153.5,69.2 153.8,71.7 154,74 154.3,76.2 154.5,78.2 154.8,80.2 155,82 155.3,83.7 155.5,85.4 155.8,86.9 156,88.4 156.3,89.8 156.5,91.1 156.8,92.4 157,93.6 157.3,94.8 157.5,95.9 157.8,97 158,98 158.3,99 158.5,99.9 158.8,100.8 159,101.7 159.3,102.5 159.5,103.3 159.8,104.1 160,104.9 160.3,105.6 160.5,106.3 160.8,106.9 161,107.6 161.3,108.2 161.5,108.8 161.8,109.4 162,110 162.3,110.6 162.5,111.1 162.8,111.6 163,112.1 163.3,112.6 163.5,113.1 163.8,113.5 164,114 164.3,114.4 164.5,114.9 164.8,115.3 165,115.7 165.3,116.1 165.5,116.5 165.8,116.8 166,117.2 166.3,117.6 166.5,117.9 166.8,118.2 167,118.6 167.3,118.9 167.5,119.2 167.8,119.5 168,119.8 168.3,120.1 168.5,120.4 168.8,120.7 169,121 169.3,121.2 169.5,121.5 169.8,121.7 170,122 170.3,122.2 170.5,122.5 170.8,122.7 171,123 171.3,123.2 171.5,123.4 171.8,123.6 172,123.8 172.3,124.1 172.5,124.3 172.8,124.5 173,124.7 173.3,124.9 173.5,125.1 173.8,125.2 174,125.4 174.3,125.6 174.5,125.8 174.8,126 175,126.1 175.3,126.3 175.5,126.5 175.8,126.6 176,126.8 176.3,127 176.5,127.1 176.8,127.3 177,127.4 177.3,127.6 177.5,127.7 177.8,127.9 178,128 178.3,128.1 178.5,128.3 178.8,128.4 179,128.5 179.3,128.7 179.5,128.8 179.8,128.9 180,129.1 180.3,129.2 180.5,129.3 180.8,129.4 181,129.5 181.3,129.7 181.5,129.8 181.8,129.9 182,130 182.3,130.1 182.5,130.2 182.8,130.3 183,130.4 183.3,130.5 183.5,130.6 183.8,130.7 184,130.8 184.3,130.9 184.5,131 184.8,131.1 185,131.2 185.3,131.3 185.5,131.4 185.8,131.5 186,131.6 186.3,131.7 186.5,131.8 186.8,131.9 187,132 187.3,132 187.5,132.1 187.8,132.2 188,132.3 188.3,132.4 188.5,132.4 188.8,132.5 189,132.6 189.3,132.7 189.5,132.8 189.8,132.8 190,132.9 190.3,133 190.5,133.1 190.8,133.1 191,133.2 191.3,133.3 191.5,133.3 191.8,133.4 192,133.5 192.3,133.5 192.5,133.6 192.8,133.7 193,133.7 193.3,133.8 193.5,133.9 193.8,133.9 194,134 194.3,134.1 194.5,134.1 194.8,134.2 195,134.2 195.3,134.3 195.5,134.4 195.8,134.4 196,134.5 196.3,134.5 196.5,134.6 196.8,134.7 197,134.7 197.3,134.8 197.5,134.8 197.8,134.9 198,134.9 198.3,135 198.5,135 198.8,135.1 199,135.1 199.3,135.2 199.5,135.2 199.8,135.3 200,135.3 200.3,135.4 200.5,135.4 200.8,135.5 201,135.5 201.3,135.6 201.5,135.6 201.8,135.7 202,135.7 202.3,135.8 202.5,135.8 202.8,135.9 203,135.9 203.3,135.9 203.5,136 203.8,136 204,136.1 204.3,136.1 204.5,136.2 204.8,136.2 205,136.2 205.3,136.3 205.5,136.3 205.8,136.4 206,136.4 206.3,136.4 206.5,136.5 206.8,136.5 207,136.6 207.3,136.6 207.5,136.6 207.8,136.7 208,136.7 208.3,136.7 208.5,136.8 208.8,136.8 209,136.9 209.3,136.9 209.5,136.9 209.8,137 210,137 210.3,137 210.5,137.1 210.8,137.1 211,137.1 211.3,137.2 211.5,137.2 211.8,137.2 212,137.3 212.3,137.3 212.5,137.3 212.8,137.4 213,137.4 213.3,137.4 213.5,137.5 213.8,137.5 214,137.5 214.3,137.6 214.5,137.6 214.8,137.6 215,137.7 215.3,137.7 215.5,137.7 215.8,137.7 216,137.8 216.3,137.8 216.5,137.8 216.8,137.9 217,137.9 217.3,137.9 217.5,137.9 217.8,138 218,138 218.3,138 218.5,138.1 218.8,138.1 219,138.1 219.3,138.1 219.5,138.2 219.8,138.2 220,138.2 220.3,138.2 220.5,138.3 220.8,138.3 221,138.3 221.3,138.3 221.5,138.4 221.8,138.4 222,138.4 222.3,138.4 222.5,138.5 222.8,138.5 223,138.5 223.3,138.5 223.5,138.6 223.8,138.6 224,138.6 224.3,138.6 224.5,138.7 224.8,138.7 225,138.7 225.3,138.7 225.5,138.8 225.8,138.8 226,138.8 226.3,138.8 226.5,138.8 226.8,138.9 227,138.9 227.3,138.9 227.5,138.9 227.8,139 228,139 228.3,139 228.5,139 228.8,139 229,139.1 229.3,139.1 229.5,139.1 229.8,139.1 230,139.1 230.3,139.2 230.5,139.2 230.8,139.2 231,139.2 231.3,139.2 231.5,139.3 231.8,139.3 232,139.3 232.3,139.3 232.5,139.3 232.8,139.4 233,139.4 233.3,139.4 233.5,139.4 233.8,139.4 234,139.5 234.3,139.5 234.5,139.5 234.8,139.5 235,139.5 235.3,139.5 235.5,139.6 235.8,139.6 236,139.6 236.3,139.6 236.5,139.6 236.8,139.7 237,139.7 237.3,139.7 237.5,139.7 237.8,139.7 238,139.7 238.3,139.8 238.5,139.8 238.8,139.8 239,139.8 239.3,139.8 239.5,139.8 239.8,139.9 240,139.9 240.3,139.9 240.5,139.9 240.8,139.9 241,139.9 241.3,140 241.5,140 241.8,140 242,140 242.3,140 242.5,140 242.8,140 243,140.1 243.3,140.1 243.5,140.1 243.8,140.1 244,140.1 244.3,140.1 244.5,140.2 244.8,140.2 245,140.2 245.3,140.2 245.5,140.2 245.8,140.2 246,140.2 246.3,140.3 246.5,140.3 246.8,140.3 247,140.3 247.3,140.3 247.5,140.3 247.8,140.3 248,140.4 248.3,140.4 248.5,140.4 248.8,140.4 249,140.4 249.3,140.4 249.5,140.4 249.8,140.4 250,140.5 250.3,140.5 250.5,140.5 250.8,140.5 251,140.5 251.3,140.5 251.5,140.5 251.8,140.6 252,140.6 252.3,140.6 252.5,140.6 252.8,140.6 253,140.6 253.3,140.6 253.5,140.6 253.8,140.7 254,140.7 254.3,140.7 254.5,140.7 254.8,140.7 255,140.7 255.3,140.7 255.5,140.7 255.8,140.8 256,140.8 256.3,140.8 256.5,140.8 256.8,140.8 257,140.8 257.3,140.8 257.5,140.8 257.8,140.8 258,140.9 258,140.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="151,30.8 156.5,40.6 146.5,41" fill="currentColor"/>
  <polygon points="266,141.2 255.8,145.8 256.2,135.8" fill="currentColor"/>
  <text x="153.2" y="29.6" font-size="13" fill="currentColor" text-anchor="start">Right of 0: f(x) → ∞</text>
  <text x="28.4" y="130.4" font-size="13" fill="currentColor" text-anchor="start">As x → −∞: f(x) → 0</text>
  <text x="172.4" y="130.4" font-size="13" fill="currentColor" text-anchor="start">As x → ∞: f(x) → 0</text>
  <text x="153.2" y="255.2" font-size="13" fill="currentColor" text-anchor="start">Left of 0: f(x) → −∞</text>
</svg>
</div>
Based on this overall behavior and the graph, we can see that the function
approaches 0 but never actually reaches 0; it seems to level off as the
inputs become large. This behavior creates a **horizontal asymptote**, a
horizontal line that the graph approaches as the input increases or
decreases without bound. In this case, the graph is approaching the
horizontal line $y=0$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals 1 over x with both asymptotes dashed: a vertical line at x=0 labelled x=0 and a horizontal line at y=0 labelled y=0.","xMin":-5,"xMax":5,"yMin":-5,"yMax":5,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0","labelSide":"right"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0","labelSide":"left"}]}'>
<svg role="img" aria-label="The graph of f of x equals 1 over x with both asymptotes dashed: a vertical line at x=0 labelled x=0 and a horizontal line at y=0 labelled y=0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="266" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="266" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="194" x2="149" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="198" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="170" x2="149" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="122" x2="149" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="126" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="98" x2="149" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="102" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="74" x2="149" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="78" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="50" x2="149" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="54" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="146" y1="272" x2="146" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="146" x2="272" y2="146" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,151.1 34,151.1 34.3,151.2 34.5,151.2 34.8,151.2 35,151.2 35.3,151.2 35.5,151.2 35.8,151.2 36,151.2 36.3,151.2 36.5,151.3 36.8,151.3 37,151.3 37.3,151.3 37.5,151.3 37.8,151.3 38,151.3 38.3,151.3 38.5,151.4 38.8,151.4 39,151.4 39.3,151.4 39.5,151.4 39.8,151.4 40,151.4 40.3,151.4 40.5,151.5 40.8,151.5 41,151.5 41.3,151.5 41.5,151.5 41.8,151.5 42,151.5 42.3,151.6 42.5,151.6 42.8,151.6 43,151.6 43.3,151.6 43.5,151.6 43.8,151.6 44,151.6 44.3,151.7 44.5,151.7 44.8,151.7 45,151.7 45.3,151.7 45.5,151.7 45.8,151.7 46,151.8 46.3,151.8 46.5,151.8 46.8,151.8 47,151.8 47.3,151.8 47.5,151.8 47.8,151.9 48,151.9 48.3,151.9 48.5,151.9 48.8,151.9 49,151.9 49.3,152 49.5,152 49.8,152 50,152 50.3,152 50.5,152 50.8,152 51,152.1 51.3,152.1 51.5,152.1 51.8,152.1 52,152.1 52.3,152.1 52.5,152.2 52.8,152.2 53,152.2 53.3,152.2 53.5,152.2 53.8,152.2 54,152.3 54.3,152.3 54.5,152.3 54.8,152.3 55,152.3 55.3,152.3 55.5,152.4 55.8,152.4 56,152.4 56.3,152.4 56.5,152.4 56.8,152.5 57,152.5 57.3,152.5 57.5,152.5 57.8,152.5 58,152.5 58.3,152.6 58.5,152.6 58.8,152.6 59,152.6 59.3,152.6 59.5,152.7 59.8,152.7 60,152.7 60.3,152.7 60.5,152.7 60.8,152.8 61,152.8 61.3,152.8 61.5,152.8 61.8,152.8 62,152.9 62.3,152.9 62.5,152.9 62.8,152.9 63,152.9 63.3,153 63.5,153 63.8,153 64,153 64.3,153 64.5,153.1 64.8,153.1 65,153.1 65.3,153.1 65.5,153.2 65.8,153.2 66,153.2 66.3,153.2 66.5,153.2 66.8,153.3 67,153.3 67.3,153.3 67.5,153.3 67.8,153.4 68,153.4 68.3,153.4 68.5,153.4 68.8,153.5 69,153.5 69.3,153.5 69.5,153.5 69.8,153.6 70,153.6 70.3,153.6 70.5,153.6 70.8,153.7 71,153.7 71.3,153.7 71.5,153.7 71.8,153.8 72,153.8 72.3,153.8 72.5,153.8 72.8,153.9 73,153.9 73.3,153.9 73.5,153.9 73.8,154 74,154 74.3,154 74.5,154.1 74.8,154.1 75,154.1 75.3,154.1 75.5,154.2 75.8,154.2 76,154.2 76.3,154.3 76.5,154.3 76.8,154.3 77,154.3 77.3,154.4 77.5,154.4 77.8,154.4 78,154.5 78.3,154.5 78.5,154.5 78.8,154.6 79,154.6 79.3,154.6 79.5,154.7 79.8,154.7 80,154.7 80.3,154.8 80.5,154.8 80.8,154.8 81,154.9 81.3,154.9 81.5,154.9 81.8,155 82,155 82.3,155 82.5,155.1 82.8,155.1 83,155.1 83.3,155.2 83.5,155.2 83.8,155.3 84,155.3 84.3,155.3 84.5,155.4 84.8,155.4 85,155.4 85.3,155.5 85.5,155.5 85.8,155.6 86,155.6 86.3,155.6 86.5,155.7 86.8,155.7 87,155.8 87.3,155.8 87.5,155.8 87.8,155.9 88,155.9 88.3,156 88.5,156 88.8,156.1 89,156.1 89.3,156.1 89.5,156.2 89.8,156.2 90,156.3 90.3,156.3 90.5,156.4 90.8,156.4 91,156.5 91.3,156.5 91.5,156.6 91.8,156.6 92,156.7 92.3,156.7 92.5,156.8 92.8,156.8 93,156.9 93.3,156.9 93.5,157 93.8,157 94,157.1 94.3,157.1 94.5,157.2 94.8,157.2 95,157.3 95.3,157.3 95.5,157.4 95.8,157.5 96,157.5 96.3,157.6 96.5,157.6 96.8,157.7 97,157.8 97.3,157.8 97.5,157.9 97.8,157.9 98,158 98.3,158.1 98.5,158.1 98.8,158.2 99,158.3 99.3,158.3 99.5,158.4 99.8,158.5 100,158.5 100.3,158.6 100.5,158.7 100.8,158.7 101,158.8 101.3,158.9 101.5,158.9 101.8,159 102,159.1 102.3,159.2 102.5,159.2 102.8,159.3 103,159.4 103.3,159.5 103.5,159.6 103.8,159.6 104,159.7 104.3,159.8 104.5,159.9 104.8,160 105,160 105.3,160.1 105.5,160.2 105.8,160.3 106,160.4 106.3,160.5 106.5,160.6 106.8,160.7 107,160.8 107.3,160.9 107.5,161 107.8,161.1 108,161.2 108.3,161.3 108.5,161.4 108.8,161.5 109,161.6 109.3,161.7 109.5,161.8 109.8,161.9 110,162 110.3,162.1 110.5,162.2 110.8,162.3 111,162.5 111.3,162.6 111.5,162.7 111.8,162.8 112,162.9 112.3,163.1 112.5,163.2 112.8,163.3 113,163.5 113.3,163.6 113.5,163.7 113.8,163.9 114,164 114.3,164.1 114.5,164.3 114.8,164.4 115,164.6 115.3,164.7 115.5,164.9 115.8,165 116,165.2 116.3,165.4 116.5,165.5 116.8,165.7 117,165.9 117.3,166 117.5,166.2 117.8,166.4 118,166.6 118.3,166.8 118.5,166.9 118.8,167.1 119,167.3 119.3,167.5 119.5,167.7 119.8,167.9 120,168.2 120.3,168.4 120.5,168.6 120.8,168.8 121,169 121.3,169.3 121.5,169.5 121.8,169.8 122,170 122.3,170.3 122.5,170.5 122.8,170.8 123,171 123.3,171.3 123.5,171.6 123.8,171.9 124,172.2 124.3,172.5 124.5,172.8 124.8,173.1 125,173.4 125.3,173.8 125.5,174.1 125.8,174.4 126,174.8 126.3,175.2 126.5,175.5 126.8,175.9 127,176.3 127.3,176.7 127.5,177.1 127.8,177.6 128,178 128.3,178.5 128.5,178.9 128.8,179.4 129,179.9 129.3,180.4 129.5,180.9 129.8,181.4 130,182 130.3,182.6 130.5,183.2 130.8,183.8 131,184.4 131.3,185.1 131.5,185.7 131.8,186.4 132,187.1 132.3,187.9 132.5,188.7 132.8,189.5 133,190.3 133.3,191.2 133.5,192.1 133.8,193 134,194 134.3,195 134.5,196.1 134.8,197.2 135,198.4 135.3,199.6 135.5,200.9 135.8,202.2 136,203.6 136.3,205.1 136.5,206.6 136.8,208.3 137,210 137.3,211.8 137.5,213.8 137.8,215.8 138,218 138.3,220.3 138.5,222.8 138.8,225.4 139,228.3 139.3,231.3 139.5,234.6 139.8,238.2 140,242 140.3,246.2 140.5,250.7 140.6,253.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,150.8 36.2,146.2 35.8,156.2" fill="currentColor"/>
  <polygon points="141,261.2 135.5,251.4 145.5,251" fill="currentColor"/>
  <polyline points="151.4,38.8 151.5,41.3 151.8,45.8 152,50 152.3,53.8 152.5,57.4 152.8,60.7 153,63.7 153.3,66.6 153.5,69.2 153.8,71.7 154,74 154.3,76.2 154.5,78.2 154.8,80.2 155,82 155.3,83.7 155.5,85.4 155.8,86.9 156,88.4 156.3,89.8 156.5,91.1 156.8,92.4 157,93.6 157.3,94.8 157.5,95.9 157.8,97 158,98 158.3,99 158.5,99.9 158.8,100.8 159,101.7 159.3,102.5 159.5,103.3 159.8,104.1 160,104.9 160.3,105.6 160.5,106.3 160.8,106.9 161,107.6 161.3,108.2 161.5,108.8 161.8,109.4 162,110 162.3,110.6 162.5,111.1 162.8,111.6 163,112.1 163.3,112.6 163.5,113.1 163.8,113.5 164,114 164.3,114.4 164.5,114.9 164.8,115.3 165,115.7 165.3,116.1 165.5,116.5 165.8,116.8 166,117.2 166.3,117.6 166.5,117.9 166.8,118.2 167,118.6 167.3,118.9 167.5,119.2 167.8,119.5 168,119.8 168.3,120.1 168.5,120.4 168.8,120.7 169,121 169.3,121.2 169.5,121.5 169.8,121.7 170,122 170.3,122.2 170.5,122.5 170.8,122.7 171,123 171.3,123.2 171.5,123.4 171.8,123.6 172,123.8 172.3,124.1 172.5,124.3 172.8,124.5 173,124.7 173.3,124.9 173.5,125.1 173.8,125.2 174,125.4 174.3,125.6 174.5,125.8 174.8,126 175,126.1 175.3,126.3 175.5,126.5 175.8,126.6 176,126.8 176.3,127 176.5,127.1 176.8,127.3 177,127.4 177.3,127.6 177.5,127.7 177.8,127.9 178,128 178.3,128.1 178.5,128.3 178.8,128.4 179,128.5 179.3,128.7 179.5,128.8 179.8,128.9 180,129.1 180.3,129.2 180.5,129.3 180.8,129.4 181,129.5 181.3,129.7 181.5,129.8 181.8,129.9 182,130 182.3,130.1 182.5,130.2 182.8,130.3 183,130.4 183.3,130.5 183.5,130.6 183.8,130.7 184,130.8 184.3,130.9 184.5,131 184.8,131.1 185,131.2 185.3,131.3 185.5,131.4 185.8,131.5 186,131.6 186.3,131.7 186.5,131.8 186.8,131.9 187,132 187.3,132 187.5,132.1 187.8,132.2 188,132.3 188.3,132.4 188.5,132.4 188.8,132.5 189,132.6 189.3,132.7 189.5,132.8 189.8,132.8 190,132.9 190.3,133 190.5,133.1 190.8,133.1 191,133.2 191.3,133.3 191.5,133.3 191.8,133.4 192,133.5 192.3,133.5 192.5,133.6 192.8,133.7 193,133.7 193.3,133.8 193.5,133.9 193.8,133.9 194,134 194.3,134.1 194.5,134.1 194.8,134.2 195,134.2 195.3,134.3 195.5,134.4 195.8,134.4 196,134.5 196.3,134.5 196.5,134.6 196.8,134.7 197,134.7 197.3,134.8 197.5,134.8 197.8,134.9 198,134.9 198.3,135 198.5,135 198.8,135.1 199,135.1 199.3,135.2 199.5,135.2 199.8,135.3 200,135.3 200.3,135.4 200.5,135.4 200.8,135.5 201,135.5 201.3,135.6 201.5,135.6 201.8,135.7 202,135.7 202.3,135.8 202.5,135.8 202.8,135.9 203,135.9 203.3,135.9 203.5,136 203.8,136 204,136.1 204.3,136.1 204.5,136.2 204.8,136.2 205,136.2 205.3,136.3 205.5,136.3 205.8,136.4 206,136.4 206.3,136.4 206.5,136.5 206.8,136.5 207,136.6 207.3,136.6 207.5,136.6 207.8,136.7 208,136.7 208.3,136.7 208.5,136.8 208.8,136.8 209,136.9 209.3,136.9 209.5,136.9 209.8,137 210,137 210.3,137 210.5,137.1 210.8,137.1 211,137.1 211.3,137.2 211.5,137.2 211.8,137.2 212,137.3 212.3,137.3 212.5,137.3 212.8,137.4 213,137.4 213.3,137.4 213.5,137.5 213.8,137.5 214,137.5 214.3,137.6 214.5,137.6 214.8,137.6 215,137.7 215.3,137.7 215.5,137.7 215.8,137.7 216,137.8 216.3,137.8 216.5,137.8 216.8,137.9 217,137.9 217.3,137.9 217.5,137.9 217.8,138 218,138 218.3,138 218.5,138.1 218.8,138.1 219,138.1 219.3,138.1 219.5,138.2 219.8,138.2 220,138.2 220.3,138.2 220.5,138.3 220.8,138.3 221,138.3 221.3,138.3 221.5,138.4 221.8,138.4 222,138.4 222.3,138.4 222.5,138.5 222.8,138.5 223,138.5 223.3,138.5 223.5,138.6 223.8,138.6 224,138.6 224.3,138.6 224.5,138.7 224.8,138.7 225,138.7 225.3,138.7 225.5,138.8 225.8,138.8 226,138.8 226.3,138.8 226.5,138.8 226.8,138.9 227,138.9 227.3,138.9 227.5,138.9 227.8,139 228,139 228.3,139 228.5,139 228.8,139 229,139.1 229.3,139.1 229.5,139.1 229.8,139.1 230,139.1 230.3,139.2 230.5,139.2 230.8,139.2 231,139.2 231.3,139.2 231.5,139.3 231.8,139.3 232,139.3 232.3,139.3 232.5,139.3 232.8,139.4 233,139.4 233.3,139.4 233.5,139.4 233.8,139.4 234,139.5 234.3,139.5 234.5,139.5 234.8,139.5 235,139.5 235.3,139.5 235.5,139.6 235.8,139.6 236,139.6 236.3,139.6 236.5,139.6 236.8,139.7 237,139.7 237.3,139.7 237.5,139.7 237.8,139.7 238,139.7 238.3,139.8 238.5,139.8 238.8,139.8 239,139.8 239.3,139.8 239.5,139.8 239.8,139.9 240,139.9 240.3,139.9 240.5,139.9 240.8,139.9 241,139.9 241.3,140 241.5,140 241.8,140 242,140 242.3,140 242.5,140 242.8,140 243,140.1 243.3,140.1 243.5,140.1 243.8,140.1 244,140.1 244.3,140.1 244.5,140.2 244.8,140.2 245,140.2 245.3,140.2 245.5,140.2 245.8,140.2 246,140.2 246.3,140.3 246.5,140.3 246.8,140.3 247,140.3 247.3,140.3 247.5,140.3 247.8,140.3 248,140.4 248.3,140.4 248.5,140.4 248.8,140.4 249,140.4 249.3,140.4 249.5,140.4 249.8,140.4 250,140.5 250.3,140.5 250.5,140.5 250.8,140.5 251,140.5 251.3,140.5 251.5,140.5 251.8,140.6 252,140.6 252.3,140.6 252.5,140.6 252.8,140.6 253,140.6 253.3,140.6 253.5,140.6 253.8,140.7 254,140.7 254.3,140.7 254.5,140.7 254.8,140.7 255,140.7 255.3,140.7 255.5,140.7 255.8,140.8 256,140.8 256.3,140.8 256.5,140.8 256.8,140.8 257,140.8 257.3,140.8 257.5,140.8 257.8,140.8 258,140.9 258,140.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="151,30.8 156.5,40.6 146.5,41" fill="currentColor"/>
  <polygon points="266,141.2 255.8,145.8 256.2,135.8" fill="currentColor"/>
  <text x="168" y="79.4" font-size="13" fill="currentColor" text-anchor="start">x = 0</text>
  <text x="83" y="134" font-size="13" fill="currentColor" text-anchor="middle">y = 0</text>
</svg>
</div>
{{< callout type="info" >}}
  **Horizontal asymptote.** A **horizontal asymptote** of a graph is a
  horizontal line $y=b$ where the graph approaches the line as the inputs
  increase or decrease without bound. We write

  $$\text{as }x\to\infty\ \text{or}\ x\to-\infty,\ f(x)\to b$$
{{< /callout >}}

**Example.** Use arrow notation to describe the end behavior and local
behavior of the function graphed below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of a rational function with a vertical asymptote at x=2 and a horizontal asymptote at y=4. The left branch falls from the horizontal asymptote near y=4 as x approaches 2 from the left, dropping toward negative infinity; the right branch drops from positive infinity just right of x=2 and levels off toward y=4 as x increases.","xMin":-6,"xMax":6,"yMin":-12,"yMax":12,"unit":18,"tickLabels":true,"tickStep":2,"rationals":[{"num":[-7,4],"den":[-2,1]}],"lines":[{"x":2,"dashed":true,"arrows":false,"label":"x = 2","labelSide":"right"},{"y":4,"dashed":true,"arrows":false,"label":"y = 4","labelSide":"left"}]}'>
<svg role="img" aria-label="The graph of a rational function with a vertical asymptote at x=2 and a horizontal asymptote at y=4. The left branch falls from the horizontal asymptote near y=4 as x approaches 2 from the left, dropping toward negative infinity; the right branch drops from positive infinity just right of x=2 and levels off toward y=4 as x increases." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 484" width="268" height="484" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="458" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="458" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="458" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="458" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="458" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="458" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="152" y1="458" x2="152" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="458" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="458" x2="188" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="458" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="458" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="458" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="458" x2="242" y2="458" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="440" x2="242" y2="440" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="422" x2="242" y2="422" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="404" x2="242" y2="404" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="386" x2="242" y2="386" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="368" x2="242" y2="368" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="350" x2="242" y2="350" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="332" x2="242" y2="332" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="314" x2="242" y2="314" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="296" x2="242" y2="296" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="278" x2="242" y2="278" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="260" x2="242" y2="260" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="224" x2="242" y2="224" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="242" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="188" x2="242" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="242" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="152" x2="242" y2="152" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="242" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="242" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="242" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="242" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="242" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="242" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="242" x2="244" y2="242" stroke="currentColor" stroke-width="1"/>
  <line x1="134" y1="24" x2="134" y2="460" stroke="currentColor" stroke-width="1"/>
  <polygon points="254,242 244,247 244,237" fill="currentColor"/>
  <polygon points="134,14 139,24 129,24" fill="currentColor"/>
  <polygon points="14,242 24,237 24,247" fill="currentColor"/>
  <polygon points="134,470 129,460 139,460" fill="currentColor"/>
  <text x="252" y="234" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="142" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="239" x2="26" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="257" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="62" y1="239" x2="62" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="257" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="239" x2="98" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="257" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="170" y1="239" x2="170" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="257" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="239" x2="206" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="257" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="242" y1="239" x2="242" y2="245" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="257" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="131" y1="458" x2="137" y2="458" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="462" font-size="11" fill="currentColor" text-anchor="end">−12</text>
  <line x1="131" y1="422" x2="137" y2="422" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="426" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="131" y1="386" x2="137" y2="386" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="390" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="131" y1="350" x2="137" y2="350" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="354" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="131" y1="314" x2="137" y2="314" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="318" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="131" y1="278" x2="137" y2="278" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="282" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="131" y1="206" x2="137" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="210" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="131" y1="170" x2="137" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="174" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="131" y1="134" x2="137" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="138" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="131" y1="98" x2="137" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="102" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="131" y1="62" x2="137" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="66" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="131" y1="26" x2="137" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="30" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="170" y1="464" x2="170" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="170" x2="248" y2="170" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,172.4 34,172.4 34.3,172.4 34.5,172.4 34.8,172.4 35,172.4 35.3,172.4 35.5,172.4 35.8,172.4 36,172.4 36.3,172.4 36.5,172.4 36.8,172.4 37,172.4 37.3,172.4 37.5,172.4 37.8,172.4 38,172.5 38.3,172.5 38.5,172.5 38.8,172.5 39,172.5 39.3,172.5 39.5,172.5 39.8,172.5 40,172.5 40.3,172.5 40.5,172.5 40.8,172.5 41,172.5 41.3,172.5 41.5,172.5 41.8,172.5 42,172.5 42.3,172.5 42.5,172.5 42.8,172.5 43,172.6 43.3,172.6 43.5,172.6 43.8,172.6 44,172.6 44.3,172.6 44.5,172.6 44.8,172.6 45,172.6 45.3,172.6 45.5,172.6 45.8,172.6 46,172.6 46.3,172.6 46.5,172.6 46.8,172.6 47,172.6 47.3,172.6 47.5,172.6 47.8,172.7 48,172.7 48.3,172.7 48.5,172.7 48.8,172.7 49,172.7 49.3,172.7 49.5,172.7 49.8,172.7 50,172.7 50.3,172.7 50.5,172.7 50.8,172.7 51,172.7 51.3,172.7 51.5,172.7 51.8,172.7 52,172.7 52.3,172.8 52.5,172.8 52.8,172.8 53,172.8 53.3,172.8 53.5,172.8 53.8,172.8 54,172.8 54.3,172.8 54.5,172.8 54.8,172.8 55,172.8 55.3,172.8 55.5,172.8 55.8,172.8 56,172.8 56.3,172.8 56.5,172.9 56.8,172.9 57,172.9 57.3,172.9 57.5,172.9 57.8,172.9 58,172.9 58.3,172.9 58.5,172.9 58.8,172.9 59,172.9 59.3,172.9 59.5,172.9 59.8,172.9 60,172.9 60.3,173 60.5,173 60.8,173 61,173 61.3,173 61.5,173 61.8,173 62,173 62.3,173 62.5,173 62.8,173 63,173 63.3,173 63.5,173 63.8,173 64,173.1 64.3,173.1 64.5,173.1 64.8,173.1 65,173.1 65.3,173.1 65.5,173.1 65.8,173.1 66,173.1 66.3,173.1 66.5,173.1 66.8,173.1 67,173.1 67.3,173.2 67.5,173.2 67.8,173.2 68,173.2 68.3,173.2 68.5,173.2 68.8,173.2 69,173.2 69.3,173.2 69.5,173.2 69.8,173.2 70,173.2 70.3,173.2 70.5,173.3 70.8,173.3 71,173.3 71.3,173.3 71.5,173.3 71.8,173.3 72,173.3 72.3,173.3 72.5,173.3 72.8,173.3 73,173.3 73.3,173.3 73.5,173.4 73.8,173.4 74,173.4 74.3,173.4 74.5,173.4 74.8,173.4 75,173.4 75.3,173.4 75.5,173.4 75.8,173.4 76,173.4 76.3,173.5 76.5,173.5 76.8,173.5 77,173.5 77.3,173.5 77.5,173.5 77.8,173.5 78,173.5 78.3,173.5 78.5,173.5 78.8,173.6 79,173.6 79.3,173.6 79.5,173.6 79.8,173.6 80,173.6 80.3,173.6 80.5,173.6 80.8,173.6 81,173.6 81.3,173.7 81.5,173.7 81.8,173.7 82,173.7 82.3,173.7 82.5,173.7 82.8,173.7 83,173.7 83.3,173.7 83.5,173.7 83.8,173.8 84,173.8 84.3,173.8 84.5,173.8 84.8,173.8 85,173.8 85.3,173.8 85.5,173.8 85.8,173.8 86,173.9 86.3,173.9 86.5,173.9 86.8,173.9 87,173.9 87.3,173.9 87.5,173.9 87.8,173.9 88,174 88.3,174 88.5,174 88.8,174 89,174 89.3,174 89.5,174 89.8,174 90,174.1 90.3,174.1 90.5,174.1 90.8,174.1 91,174.1 91.3,174.1 91.5,174.1 91.8,174.1 92,174.2 92.3,174.2 92.5,174.2 92.8,174.2 93,174.2 93.3,174.2 93.5,174.2 93.8,174.2 94,174.3 94.3,174.3 94.5,174.3 94.8,174.3 95,174.3 95.3,174.3 95.5,174.3 95.8,174.4 96,174.4 96.3,174.4 96.5,174.4 96.8,174.4 97,174.4 97.3,174.5 97.5,174.5 97.8,174.5 98,174.5 98.3,174.5 98.5,174.5 98.8,174.5 99,174.6 99.3,174.6 99.5,174.6 99.8,174.6 100,174.6 100.3,174.6 100.5,174.7 100.8,174.7 101,174.7 101.3,174.7 101.5,174.7 101.8,174.7 102,174.8 102.3,174.8 102.5,174.8 102.8,174.8 103,174.8 103.3,174.9 103.5,174.9 103.8,174.9 104,174.9 104.3,174.9 104.5,174.9 104.8,175 105,175 105.3,175 105.5,175 105.8,175 106,175.1 106.3,175.1 106.5,175.1 106.8,175.1 107,175.1 107.3,175.2 107.5,175.2 107.8,175.2 108,175.2 108.3,175.2 108.5,175.3 108.8,175.3 109,175.3 109.3,175.3 109.5,175.4 109.8,175.4 110,175.4 110.3,175.4 110.5,175.4 110.8,175.5 111,175.5 111.3,175.5 111.5,175.5 111.8,175.6 112,175.6 112.3,175.6 112.5,175.6 112.8,175.7 113,175.7 113.3,175.7 113.5,175.7 113.8,175.8 114,175.8 114.3,175.8 114.5,175.8 114.8,175.9 115,175.9 115.3,175.9 115.5,175.9 115.8,176 116,176 116.3,176 116.5,176.1 116.8,176.1 117,176.1 117.3,176.1 117.5,176.2 117.8,176.2 118,176.2 118.3,176.3 118.5,176.3 118.8,176.3 119,176.4 119.3,176.4 119.5,176.4 119.8,176.4 120,176.5 120.3,176.5 120.5,176.5 120.8,176.6 121,176.6 121.3,176.6 121.5,176.7 121.8,176.7 122,176.8 122.3,176.8 122.5,176.8 122.8,176.9 123,176.9 123.3,176.9 123.5,177 123.8,177 124,177 124.3,177.1 124.5,177.1 124.8,177.2 125,177.2 125.3,177.2 125.5,177.3 125.8,177.3 126,177.4 126.3,177.4 126.5,177.4 126.8,177.5 127,177.5 127.3,177.6 127.5,177.6 127.8,177.7 128,177.7 128.3,177.8 128.5,177.8 128.8,177.9 129,177.9 129.3,178 129.5,178 129.8,178 130,178.1 130.3,178.2 130.5,178.2 130.8,178.3 131,178.3 131.3,178.4 131.5,178.4 131.8,178.5 132,178.5 132.3,178.6 132.5,178.6 132.8,178.7 133,178.8 133.3,178.8 133.5,178.9 133.8,178.9 134,179 134.3,179.1 134.5,179.1 134.8,179.2 135,179.3 135.3,179.3 135.5,179.4 135.8,179.5 136,179.5 136.3,179.6 136.5,179.7 136.8,179.7 137,179.8 137.3,179.9 137.5,180 137.8,180 138,180.1 138.3,180.2 138.5,180.3 138.8,180.4 139,180.5 139.3,180.5 139.5,180.6 139.8,180.7 140,180.8 140.3,180.9 140.5,181 140.8,181.1 141,181.2 141.3,181.3 141.5,181.4 141.8,181.5 142,181.6 142.3,181.7 142.5,181.8 142.8,181.9 143,182 143.3,182.1 143.5,182.2 143.8,182.3 144,182.5 144.3,182.6 144.5,182.7 144.8,182.8 145,183 145.3,183.1 145.5,183.2 145.8,183.4 146,183.5 146.3,183.6 146.5,183.8 146.8,183.9 147,184.1 147.3,184.2 147.5,184.4 147.8,184.6 148,184.7 148.3,184.9 148.5,185.1 148.8,185.2 149,185.4 149.3,185.6 149.5,185.8 149.8,186 150,186.2 150.3,186.4 150.5,186.6 150.8,186.8 151,187.1 151.3,187.3 151.5,187.5 151.8,187.8 152,188 152.3,188.3 152.5,188.5 152.8,188.8 153,189.1 153.3,189.3 153.5,189.6 153.8,189.9 154,190.3 154.3,190.6 154.5,190.9 154.8,191.2 155,191.6 155.3,192 155.5,192.3 155.8,192.7 156,193.1 156.3,193.6 156.5,194 156.8,194.5 157,194.9 157.3,195.4 157.5,195.9 157.8,196.4 158,197 158.3,197.6 158.5,198.2 158.8,198.8 159,199.5 159.3,200.1 159.5,200.9 159.8,201.6 160,202.4 160.3,203.2 160.5,204.1 160.8,205 161,206 161.3,207 161.5,208.1 161.8,209.3 162,210.5 162.3,211.8 162.5,213.2 162.8,214.7 163,216.3 163.3,218 163.5,219.8 163.8,221.8 164,224 164.3,226.3 164.5,228.9 164.8,231.7 165,234.8 165.3,238.2 165.5,242 165.8,246.2 166,251 166.3,256.4 166.5,262.6 166.8,269.7 167,278 167.3,287.8 167.5,299.6 167.8,314 168,332 168.3,355.1 168.5,386 168.7,421.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,172.3 36.1,167.4 35.9,177.4" fill="currentColor"/>
  <polygon points="168.8,429.2 163.7,419.2 173.7,419.2" fill="currentColor"/>
  <polyline points="172.4,34 172.5,40.4 172.8,52.2 173,62 173.3,70.3 173.5,77.4 173.8,83.6 174,89 174.3,93.8 174.5,98 174.8,101.8 175,105.2 175.3,108.3 175.5,111.1 175.8,113.7 176,116 176.3,118.2 176.5,120.2 176.8,122 177,123.7 177.3,125.3 177.5,126.8 177.8,128.2 178,129.5 178.3,130.7 178.5,131.9 178.8,133 179,134 179.3,135 179.5,135.9 179.8,136.8 180,137.6 180.3,138.4 180.5,139.1 180.8,139.9 181,140.5 181.3,141.2 181.5,141.8 181.8,142.4 182,143 182.3,143.6 182.5,144.1 182.8,144.6 183,145.1 183.3,145.5 183.5,146 183.8,146.4 184,146.9 184.3,147.3 184.5,147.7 184.8,148 185,148.4 185.3,148.8 185.5,149.1 185.8,149.4 186,149.8 186.3,150.1 186.5,150.4 186.8,150.7 187,150.9 187.3,151.2 187.5,151.5 187.8,151.7 188,152 188.3,152.2 188.5,152.5 188.8,152.7 189,152.9 189.3,153.2 189.5,153.4 189.8,153.6 190,153.8 190.3,154 190.5,154.2 190.8,154.4 191,154.6 191.3,154.8 191.5,154.9 191.8,155.1 192,155.3 192.3,155.4 192.5,155.6 192.8,155.8 193,155.9 193.3,156.1 193.5,156.2 193.8,156.4 194,156.5 194.3,156.6 194.5,156.8 194.8,156.9 195,157 195.3,157.2 195.5,157.3 195.8,157.4 196,157.5 196.3,157.7 196.5,157.8 196.8,157.9 197,158 197.3,158.1 197.5,158.2 197.8,158.3 198,158.4 198.3,158.5 198.5,158.6 198.8,158.7 199,158.8 199.3,158.9 199.5,159 199.8,159.1 200,159.2 200.3,159.3 200.5,159.4 200.8,159.5 201,159.5 201.3,159.6 201.5,159.7 201.8,159.8 202,159.9 202.3,160 202.5,160 202.8,160.1 203,160.2 203.3,160.3 203.5,160.3 203.8,160.4 204,160.5 204.3,160.5 204.5,160.6 204.8,160.7 205,160.7 205.3,160.8 205.5,160.9 205.8,160.9 206,161 206.3,161.1 206.5,161.1 206.8,161.2 207,161.2 207.3,161.3 207.5,161.4 207.8,161.4 208,161.5 208.3,161.5 208.5,161.6 208.8,161.6 209,161.7 209.3,161.7 209.5,161.8 209.8,161.8 210,161.9 210.3,162 210.5,162 210.8,162 211,162.1 211.3,162.1 211.5,162.2 211.8,162.2 212,162.3 212.3,162.3 212.5,162.4 212.8,162.4 213,162.5 213.3,162.5 213.5,162.6 213.8,162.6 214,162.6 214.3,162.7 214.5,162.7 214.8,162.8 215,162.8 215.3,162.8 215.5,162.9 215.8,162.9 216,163 216.3,163 216.5,163 216.8,163.1 217,163.1 217.3,163.1 217.5,163.2 217.8,163.2 218,163.3 218.3,163.3 218.5,163.3 218.8,163.4 219,163.4 219.3,163.4 219.5,163.5 219.8,163.5 220,163.5 220.3,163.6 220.5,163.6 220.8,163.6 221,163.6 221.3,163.7 221.5,163.7 221.8,163.7 222,163.8 222.3,163.8 222.5,163.8 222.8,163.9 223,163.9 223.3,163.9 223.5,163.9 223.8,164 224,164 224.3,164 224.5,164.1 224.8,164.1 225,164.1 225.3,164.1 225.5,164.2 225.8,164.2 226,164.2 226.3,164.2 226.5,164.3 226.8,164.3 227,164.3 227.3,164.3 227.5,164.4 227.8,164.4 228,164.4 228.3,164.4 228.5,164.5 228.8,164.5 229,164.5 229.3,164.5 229.5,164.6 229.8,164.6 230,164.6 230.3,164.6 230.5,164.6 230.8,164.7 231,164.7 231.3,164.7 231.5,164.7 231.8,164.8 232,164.8 232.3,164.8 232.5,164.8 232.8,164.8 233,164.9 233.3,164.9 233.5,164.9 233.8,164.9 234,164.9 234,164.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="172.3,26 177.4,35.9 167.4,36.1" fill="currentColor"/>
  <polygon points="242,165.5 231.7,169.8 232.4,159.8" fill="currentColor"/>
  <text x="192" y="121.7" font-size="13" fill="currentColor" text-anchor="start">x = 2</text>
  <text x="77" y="158" font-size="13" fill="currentColor" text-anchor="middle">y = 4</text>
</svg>
</div>
**Solution.** Notice that the graph is showing a vertical asymptote at
$x=2$, which tells us that the function is undefined at $x=2$.

$$\text{as }x\to2^{-},\ f(x)\to-\infty,\ \text{ and as }x\to2^{+},\ f(x)\to\infty$$

And as the inputs decrease without bound, the graph appears to be leveling
off at output values of 4, indicating a horizontal asymptote at $y=4$. As
the inputs increase without bound, the graph levels off at 4.

$$\text{as }x\to\infty,\ f(x)\to4\ \text{ and as }x\to-\infty,\ f(x)\to4$$

{{< multiplechoice
  question="Use arrow notation to describe the end behavior and local behavior of the reciprocal squared function $f(x)=\tfrac{1}{x^2}$."
  answer="As $x\to\pm\infty$, $f(x)\to0$; as $x\to0$, $f(x)\to\infty$"
  hint="Squaring $x$ keeps the denominator positive on both sides of 0, so both branches behave the same way there."
>}}
As $x\to\pm\infty$, $f(x)\to0$; as $x\to0$, $f(x)\to\infty$
As $x\to\pm\infty$, $f(x)\to\infty$; as $x\to0$, $f(x)\to0$
As $x\to\pm\infty$, $f(x)\to0$; as $x\to0^{-}$, $f(x)\to-\infty$ and as $x\to0^{+}$, $f(x)\to\infty$
As $x\to\pm\infty$, $f(x)\to1$; as $x\to0$, $f(x)\to\infty$
{{< /multiplechoice >}}

**Example.** Sketch a graph of the reciprocal function shifted two units to
the left and up three units. Identify the horizontal and vertical asymptotes
of the graph, if any.

**Solution.** Shifting the graph left 2 and up 3 would result in the
function

$$f(x)=\tfrac{1}{x+2}+3$$

or equivalently, by giving the terms a common denominator,

$$f(x)=\tfrac{3x+7}{x+2}$$

The graph of the shifted function is displayed below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the quantity 3x+7 over x+2, with a vertical asymptote at x=−2 and a horizontal asymptote at y=3. The left branch falls toward negative infinity as x approaches −2 from the left, and the right branch drops from positive infinity just right of x=−2 and levels off toward y=3.","xMin":-7,"xMax":7,"yMin":-3,"yMax":7,"unit":18,"tickLabels":true,"tickStep":1,"rationals":[{"num":[7,3],"den":[2,1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2","labelSide":"right"},{"y":3,"dashed":true,"arrows":false,"label":"y = 3","labelSide":"left"}]}'>
<svg role="img" aria-label="The graph of f of x equals the quantity 3x+7 over x+2, with a vertical asymptote at x=−2 and a horizontal asymptote at y=3. The left branch falls toward negative infinity as x approaches −2 from the left, and the right branch drops from positive infinity just right of x=−2 and levels off toward y=3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 232" width="304" height="232" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="206" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="44" y1="206" x2="44" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="206" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="80" y1="206" x2="80" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="206" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="206" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="206" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="206" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="188" y1="206" x2="188" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="206" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="224" y1="206" x2="224" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="206" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="260" y1="206" x2="260" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="206" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="278" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="188" x2="278" y2="188" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="278" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="278" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="278" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="278" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="80" x2="278" y2="80" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="278" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="44" x2="278" y2="44" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="152" x2="280" y2="152" stroke="currentColor" stroke-width="1"/>
  <line x1="152" y1="24" x2="152" y2="208" stroke="currentColor" stroke-width="1"/>
  <polygon points="290,152 280,157 280,147" fill="currentColor"/>
  <polygon points="152,14 157,24 147,24" fill="currentColor"/>
  <polygon points="14,152 24,147 24,157" fill="currentColor"/>
  <polygon points="152,218 147,208 157,208" fill="currentColor"/>
  <text x="288" y="144" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="160" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="149" x2="26" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="167" font-size="11" fill="currentColor" text-anchor="middle">−7</text>
  <line x1="44" y1="149" x2="44" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="44" y="167" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="62" y1="149" x2="62" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="167" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="80" y1="149" x2="80" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="167" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="149" x2="98" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="167" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="116" y1="149" x2="116" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="167" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="134" y1="149" x2="134" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="134" y="167" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="170" y1="149" x2="170" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="167" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="188" y1="149" x2="188" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="188" y="167" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="149" x2="206" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="167" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="224" y1="149" x2="224" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="224" y="167" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="242" y1="149" x2="242" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="167" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="260" y1="149" x2="260" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="167" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="278" y1="149" x2="278" y2="155" stroke="currentColor" stroke-width="1"/>
  <text x="278" y="167" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="149" y1="206" x2="155" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="149" y1="188" x2="155" y2="188" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="192" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="149" y1="170" x2="155" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="174" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="149" y1="134" x2="155" y2="134" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="138" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="149" y1="116" x2="155" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="120" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="149" y1="98" x2="155" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="102" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="149" y1="80" x2="155" y2="80" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="84" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="149" y1="62" x2="155" y2="62" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="66" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="149" y1="44" x2="155" y2="44" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="48" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="149" y1="26" x2="155" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="30" font-size="11" fill="currentColor" text-anchor="end">7</text>
  <line x1="116" y1="212" x2="116" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="98" x2="284" y2="98" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,102 34,102 34.3,102 34.5,102 34.8,102 35,102 35.3,102 35.5,102 35.8,102 36,102 36.3,102.1 36.5,102.1 36.8,102.1 37,102.1 37.3,102.1 37.5,102.1 37.8,102.1 38,102.2 38.3,102.2 38.5,102.2 38.8,102.2 39,102.2 39.3,102.2 39.5,102.2 39.8,102.2 40,102.3 40.3,102.3 40.5,102.3 40.8,102.3 41,102.3 41.3,102.3 41.5,102.3 41.8,102.4 42,102.4 42.3,102.4 42.5,102.4 42.8,102.4 43,102.4 43.3,102.5 43.5,102.5 43.8,102.5 44,102.5 44.3,102.5 44.5,102.5 44.8,102.5 45,102.6 45.3,102.6 45.5,102.6 45.8,102.6 46,102.6 46.3,102.6 46.5,102.7 46.8,102.7 47,102.7 47.3,102.7 47.5,102.7 47.8,102.7 48,102.8 48.3,102.8 48.5,102.8 48.8,102.8 49,102.8 49.3,102.9 49.5,102.9 49.8,102.9 50,102.9 50.3,102.9 50.5,102.9 50.8,103 51,103 51.3,103 51.5,103 51.8,103 52,103.1 52.3,103.1 52.5,103.1 52.8,103.1 53,103.1 53.3,103.2 53.5,103.2 53.8,103.2 54,103.2 54.3,103.2 54.5,103.3 54.8,103.3 55,103.3 55.3,103.3 55.5,103.4 55.8,103.4 56,103.4 56.3,103.4 56.5,103.4 56.8,103.5 57,103.5 57.3,103.5 57.5,103.5 57.8,103.6 58,103.6 58.3,103.6 58.5,103.6 58.8,103.7 59,103.7 59.3,103.7 59.5,103.7 59.8,103.8 60,103.8 60.3,103.8 60.5,103.8 60.8,103.9 61,103.9 61.3,103.9 61.5,103.9 61.8,104 62,104 62.3,104 62.5,104.1 62.7,104.1 63,104.1 63.3,104.1 63.5,104.2 63.8,104.2 64,104.2 64.3,104.3 64.5,104.3 64.8,104.3 65,104.4 65.3,104.4 65.5,104.4 65.8,104.4 66,104.5 66.3,104.5 66.5,104.5 66.8,104.6 67,104.6 67.2,104.6 67.5,104.7 67.8,104.7 68,104.8 68.3,104.8 68.5,104.8 68.8,104.9 69,104.9 69.3,104.9 69.5,105 69.8,105 70,105 70.3,105.1 70.5,105.1 70.8,105.2 71,105.2 71.3,105.2 71.5,105.3 71.7,105.3 72,105.4 72.3,105.4 72.5,105.4 72.8,105.5 73,105.5 73.3,105.6 73.5,105.6 73.8,105.7 74,105.7 74.3,105.8 74.5,105.8 74.8,105.9 75,105.9 75.3,106 75.5,106 75.8,106 76,106.1 76.2,106.2 76.5,106.2 76.8,106.3 77,106.3 77.3,106.4 77.5,106.4 77.8,106.5 78,106.5 78.3,106.6 78.5,106.6 78.8,106.7 79,106.8 79.3,106.8 79.5,106.9 79.8,106.9 80,107 80.3,107.1 80.5,107.1 80.8,107.2 81,107.3 81.3,107.3 81.5,107.4 81.8,107.5 82,107.5 82.3,107.6 82.5,107.7 82.8,107.7 83,107.8 83.3,107.9 83.5,108 83.8,108 84,108.1 84.3,108.2 84.5,108.3 84.8,108.4 85,108.5 85.3,108.5 85.5,108.6 85.8,108.7 86,108.8 86.3,108.9 86.5,109 86.8,109.1 87,109.2 87.3,109.3 87.5,109.4 87.8,109.5 88,109.6 88.3,109.7 88.5,109.8 88.8,109.9 89,110 89.3,110.1 89.5,110.2 89.8,110.3 90,110.5 90.3,110.6 90.5,110.7 90.8,110.8 91,111 91.3,111.1 91.5,111.2 91.8,111.4 92,111.5 92.3,111.6 92.5,111.8 92.8,111.9 93,112.1 93.3,112.2 93.5,112.4 93.8,112.6 94,112.7 94.3,112.9 94.5,113.1 94.8,113.2 95,113.4 95.3,113.6 95.5,113.8 95.8,114 96,114.2 96.3,114.4 96.5,114.6 96.8,114.8 97,115.1 97.3,115.3 97.5,115.5 97.8,115.8 98,116 98.3,116.3 98.5,116.5 98.8,116.8 99,117.1 99.3,117.3 99.5,117.6 99.8,117.9 100,118.3 100.3,118.6 100.5,118.9 100.8,119.2 101,119.6 101.3,120 101.5,120.3 101.8,120.7 102,121.1 102.3,121.6 102.5,122 102.8,122.5 103,122.9 103.3,123.4 103.5,123.9 103.8,124.4 104,125 104.3,125.6 104.5,126.2 104.8,126.8 105,127.5 105.3,128.1 105.5,128.9 105.8,129.6 106,130.4 106.3,131.2 106.5,132.1 106.8,133 107,134 107.3,135 107.5,136.1 107.8,137.3 108,138.5 108.3,139.8 108.5,141.2 108.8,142.7 109,144.3 109.3,146 109.5,147.8 109.8,149.8 110,152 110.3,154.3 110.5,156.9 110.8,159.7 111,162.8 111.3,166.2 111.5,170 111.8,174.2 112,179 112.3,184.4 112.5,190.6 112.8,197.7 112.8,198" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,101.6 36.2,97 35.8,107" fill="currentColor"/>
  <polygon points="113,206 107.7,196.2 117.7,195.9" fill="currentColor"/>
  <polyline points="121.1,34 121.3,36.3 121.5,39.1 121.8,41.7 122,44 122.3,46.2 122.5,48.2 122.8,50 123,51.7 123.3,53.3 123.5,54.8 123.8,56.2 124,57.5 124.3,58.7 124.5,59.9 124.8,61 125,62 125.3,63 125.5,63.9 125.8,64.8 126,65.6 126.3,66.4 126.5,67.1 126.8,67.9 127,68.5 127.3,69.2 127.5,69.8 127.8,70.4 128,71 128.3,71.6 128.5,72.1 128.8,72.6 129,73.1 129.3,73.5 129.5,74 129.8,74.4 130,74.9 130.3,75.3 130.5,75.7 130.8,76 131,76.4 131.3,76.8 131.5,77.1 131.8,77.4 132,77.8 132.3,78.1 132.5,78.4 132.8,78.7 133,78.9 133.3,79.2 133.5,79.5 133.8,79.7 134,80 134.3,80.2 134.5,80.5 134.8,80.7 135,80.9 135.3,81.2 135.5,81.4 135.8,81.6 136,81.8 136.3,82 136.5,82.2 136.8,82.4 137,82.6 137.3,82.8 137.5,82.9 137.8,83.1 138,83.3 138.3,83.4 138.5,83.6 138.8,83.8 139,83.9 139.3,84.1 139.5,84.2 139.8,84.4 140,84.5 140.3,84.6 140.5,84.8 140.8,84.9 141,85 141.3,85.2 141.5,85.3 141.8,85.4 142,85.5 142.3,85.7 142.5,85.8 142.8,85.9 143,86 143.3,86.1 143.5,86.2 143.8,86.3 144,86.4 144.3,86.5 144.5,86.6 144.8,86.7 145,86.8 145.3,86.9 145.5,87 145.8,87.1 146,87.2 146.3,87.3 146.5,87.4 146.8,87.5 147,87.5 147.3,87.6 147.5,87.7 147.8,87.8 148,87.9 148.3,88 148.5,88 148.8,88.1 149,88.2 149.3,88.3 149.5,88.3 149.8,88.4 150,88.5 150.3,88.5 150.5,88.6 150.8,88.7 151,88.7 151.3,88.8 151.5,88.9 151.8,88.9 152,89 152.3,89.1 152.5,89.1 152.8,89.2 153,89.2 153.3,89.3 153.5,89.4 153.8,89.4 154,89.5 154.3,89.5 154.5,89.6 154.8,89.6 155,89.7 155.3,89.7 155.5,89.8 155.8,89.8 156,89.9 156.3,90 156.5,90 156.8,90 157,90.1 157.3,90.1 157.5,90.2 157.8,90.2 158,90.3 158.3,90.3 158.5,90.4 158.8,90.4 159,90.5 159.3,90.5 159.5,90.6 159.8,90.6 160,90.6 160.3,90.7 160.5,90.7 160.8,90.8 161,90.8 161.3,90.8 161.5,90.9 161.8,90.9 162,91 162.3,91 162.5,91 162.8,91.1 163,91.1 163.3,91.1 163.5,91.2 163.8,91.2 164,91.3 164.3,91.3 164.5,91.3 164.8,91.4 165,91.4 165.3,91.4 165.5,91.5 165.8,91.5 166,91.5 166.3,91.6 166.5,91.6 166.8,91.6 167,91.6 167.3,91.7 167.5,91.7 167.8,91.7 168,91.8 168.3,91.8 168.5,91.8 168.8,91.9 169,91.9 169.3,91.9 169.5,91.9 169.8,92 170,92 170.3,92 170.5,92.1 170.8,92.1 171,92.1 171.3,92.1 171.5,92.2 171.8,92.2 172,92.2 172.3,92.2 172.5,92.3 172.8,92.3 173,92.3 173.3,92.3 173.5,92.4 173.8,92.4 174,92.4 174.3,92.4 174.5,92.5 174.8,92.5 175,92.5 175.3,92.5 175.5,92.6 175.8,92.6 176,92.6 176.3,92.6 176.5,92.6 176.8,92.7 177,92.7 177.3,92.7 177.5,92.7 177.8,92.8 178,92.8 178.3,92.8 178.5,92.8 178.8,92.8 179,92.9 179.3,92.9 179.5,92.9 179.8,92.9 180,92.9 180.3,93 180.5,93 180.8,93 181,93 181.3,93 181.5,93.1 181.8,93.1 182,93.1 182.3,93.1 182.5,93.1 182.8,93.1 183,93.2 183.3,93.2 183.5,93.2 183.8,93.2 184,93.2 184.3,93.3 184.5,93.3 184.8,93.3 185,93.3 185.3,93.3 185.5,93.3 185.8,93.4 186,93.4 186.3,93.4 186.5,93.4 186.8,93.4 187,93.4 187.3,93.5 187.5,93.5 187.8,93.5 188,93.5 188.3,93.5 188.5,93.5 188.8,93.5 189,93.6 189.3,93.6 189.5,93.6 189.8,93.6 190,93.6 190.3,93.6 190.5,93.7 190.8,93.7 191,93.7 191.3,93.7 191.5,93.7 191.8,93.7 192,93.7 192.3,93.8 192.5,93.8 192.8,93.8 193,93.8 193.3,93.8 193.5,93.8 193.8,93.8 194,93.8 194.3,93.9 194.5,93.9 194.8,93.9 195,93.9 195.3,93.9 195.5,93.9 195.8,93.9 196,93.9 196.3,94 196.5,94 196.8,94 197,94 197.3,94 197.5,94 197.8,94 198,94 198.3,94.1 198.5,94.1 198.8,94.1 199,94.1 199.3,94.1 199.5,94.1 199.8,94.1 200,94.1 200.3,94.2 200.5,94.2 200.8,94.2 201,94.2 201.3,94.2 201.5,94.2 201.8,94.2 202,94.2 202.3,94.2 202.5,94.3 202.8,94.3 203,94.3 203.3,94.3 203.5,94.3 203.8,94.3 204,94.3 204.3,94.3 204.5,94.3 204.8,94.3 205,94.4 205.3,94.4 205.5,94.4 205.8,94.4 206,94.4 206.3,94.4 206.5,94.4 206.8,94.4 207,94.4 207.3,94.4 207.5,94.5 207.8,94.5 208,94.5 208.3,94.5 208.5,94.5 208.8,94.5 209,94.5 209.3,94.5 209.5,94.5 209.8,94.5 210,94.6 210.3,94.6 210.5,94.6 210.8,94.6 211,94.6 211.3,94.6 211.5,94.6 211.8,94.6 212,94.6 212.3,94.6 212.5,94.6 212.8,94.7 213,94.7 213.3,94.7 213.5,94.7 213.8,94.7 214,94.7 214.3,94.7 214.5,94.7 214.8,94.7 215,94.7 215.3,94.7 215.5,94.7 215.8,94.8 216,94.8 216.3,94.8 216.5,94.8 216.8,94.8 217,94.8 217.3,94.8 217.5,94.8 217.8,94.8 218,94.8 218.3,94.8 218.5,94.8 218.8,94.8 219,94.9 219.3,94.9 219.5,94.9 219.8,94.9 220,94.9 220.3,94.9 220.5,94.9 220.8,94.9 221,94.9 221.3,94.9 221.5,94.9 221.8,94.9 222,94.9 222.3,95 222.5,95 222.8,95 223,95 223.3,95 223.5,95 223.8,95 224,95 224.3,95 224.5,95 224.8,95 225,95 225.3,95 225.5,95 225.8,95 226,95.1 226.3,95.1 226.5,95.1 226.8,95.1 227,95.1 227.3,95.1 227.5,95.1 227.8,95.1 228,95.1 228.3,95.1 228.5,95.1 228.8,95.1 229,95.1 229.3,95.1 229.5,95.1 229.8,95.2 230,95.2 230.3,95.2 230.5,95.2 230.8,95.2 231,95.2 231.3,95.2 231.5,95.2 231.8,95.2 232,95.2 232.3,95.2 232.5,95.2 232.8,95.2 233,95.2 233.3,95.2 233.5,95.2 233.8,95.2 234,95.3 234.3,95.3 234.5,95.3 234.8,95.3 235,95.3 235.3,95.3 235.5,95.3 235.8,95.3 236,95.3 236.3,95.3 236.5,95.3 236.8,95.3 237,95.3 237.3,95.3 237.5,95.3 237.8,95.3 238,95.3 238.3,95.3 238.5,95.4 238.8,95.4 239,95.4 239.3,95.4 239.5,95.4 239.8,95.4 240,95.4 240.3,95.4 240.5,95.4 240.8,95.4 241,95.4 241.3,95.4 241.5,95.4 241.8,95.4 242,95.4 242.3,95.4 242.5,95.4 242.8,95.4 243,95.4 243.3,95.5 243.5,95.5 243.8,95.5 244,95.5 244.3,95.5 244.5,95.5 244.8,95.5 245,95.5 245.3,95.5 245.5,95.5 245.8,95.5 246,95.5 246.3,95.5 246.5,95.5 246.8,95.5 247,95.5 247.3,95.5 247.5,95.5 247.8,95.5 248,95.5 248.3,95.6 248.5,95.6 248.8,95.6 249,95.6 249.3,95.6 249.5,95.6 249.8,95.6 250,95.6 250.3,95.6 250.5,95.6 250.8,95.6 251,95.6 251.3,95.6 251.5,95.6 251.8,95.6 252,95.6 252.3,95.6 252.5,95.6 252.8,95.6 253,95.6 253.3,95.6 253.5,95.6 253.8,95.6 254,95.7 254.3,95.7 254.5,95.7 254.8,95.7 255,95.7 255.3,95.7 255.5,95.7 255.8,95.7 256,95.7 256.3,95.7 256.5,95.7 256.8,95.7 257,95.7 257.3,95.7 257.5,95.7 257.8,95.7 258,95.7 258.3,95.7 258.5,95.7 258.8,95.7 259,95.7 259.3,95.7 259.5,95.7 259.8,95.7 260,95.8 260.3,95.8 260.5,95.8 260.8,95.8 261,95.8 261.3,95.8 261.5,95.8 261.8,95.8 262,95.8 262.3,95.8 262.5,95.8 262.8,95.8 263,95.8 263.3,95.8 263.5,95.8 263.8,95.8 264,95.8 264.3,95.8 264.5,95.8 264.8,95.8 265,95.8 265.3,95.8 265.5,95.8 265.8,95.8 266,95.8 266.3,95.8 266.5,95.8 266.8,95.9 267,95.9 267.3,95.9 267.5,95.9 267.8,95.9 268,95.9 268.3,95.9 268.5,95.9 268.8,95.9 269,95.9 269.3,95.9 269.5,95.9 269.8,95.9 270,95.9 270,95.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="120.5,26 126.2,35.6 116.2,36.3" fill="currentColor"/>
  <polygon points="278,96 267.9,100.9 268.1,90.9" fill="currentColor"/>
  <text x="138" y="66.2" font-size="13" fill="currentColor" text-anchor="start">x = −2</text>
  <text x="225.9" y="80" font-size="13" fill="currentColor" text-anchor="middle">y = 3</text>
</svg>
</div>
Notice that this function is undefined at $x=-2$, and the graph also is
showing a vertical asymptote at $x=-2$.

$$\text{as }x\to-2^{-},\ f(x)\to-\infty,\ \text{ and as }x\to-2^{+},\ f(x)\to\infty$$

As the inputs increase and decrease without bound, the graph appears to be
leveling off at output values of 3, indicating a horizontal asymptote at
$y=3$.

$$\text{as }x\to\pm\infty,\ f(x)\to3$$

**Analysis.** Notice that horizontal and vertical asymptotes are shifted
left 2 and up 3 along with the function.

{{< fillin
  question="The reciprocal function is shifted right 3 units and down 4 units. Find the vertical asymptote of the resulting graph."
  answer="x=3"
  answerForm="solved:x"
  answerDisplay="$x=3$"
  hint="A horizontal shift right by $h$ moves the reciprocal function's asymptote at $x=0$ to $x=h$."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same shifted graph."
  answer="y=-4"
  answerDisplay="$y=-4$"
  hint="A vertical shift down by $k$ moves the reciprocal function's asymptote at $y=0$ to $y=-k$."
>}}

## Solving applied problems involving rational functions

In the example above, we shifted a toolkit function in a way that resulted
in the function $f(x)=\tfrac{3x+7}{x+2}$. This is an example of a rational
function. A **rational function** is a function that can be written as the
quotient of two polynomial functions. Many real-world problems require us to
find the ratio of two polynomial functions. Problems involving rates and
concentrations often involve rational functions.

{{< callout type="info" >}}
  **Rational function.** A **rational function** is a function that can be
  written as the quotient of two polynomial functions $P(x)$ and $Q(x)$.

  $$f(x)=\tfrac{P(x)}{Q(x)}=\tfrac{a_px^p+a_{p-1}x^{p-1}+\ldots+a_1x+a_0}{b_qx^q+b_{q-1}x^{q-1}+\ldots+b_1x+b_0},\quad Q(x)\ne0$$
{{< /callout >}}

**Example.** After running out of pre-packaged supplies, a nurse in a
refugee camp is preparing an intravenous sugar solution for patients in the
camp hospital. A large mixing tank currently contains 100 gallons of water
into which 5 pounds of sugar have been mixed. A tap will open pouring 10
gallons per minute of distilled water into the tank at the same time sugar
is poured into the tank at a rate of 1 pound per minute. Find the
concentration (pounds per gallon) of sugar in the tank after 12 minutes. Is
that a greater concentration than at the beginning?

**Solution.** Let $t$ be the number of minutes since the tap opened. Since
the water increases at 10 gallons per minute, and the sugar increases at 1
pound per minute, these are constant rates of change. This tells us the
amount of water in the tank is changing linearly, as is the amount of sugar
in the tank. We can write an equation independently for each:

$$
\begin{array}{lrcl}
\text{water:} & W(t) &=& 100+10t\ \text{in gallons} \\[4pt]
\text{sugar:} & S(t) &=& 5+1t\ \text{in pounds}
\end{array}
$$

The concentration, $C$, will be the ratio of pounds of sugar to gallons of
water

$$C(t)=\tfrac{5+t}{100+10t}$$

The concentration after 12 minutes is given by evaluating $C(t)$ at $t=12$.

$$
\begin{array}{lrcl}
& C(12) &=& \tfrac{5+12}{100+10(12)} \\[4pt]
& &=& \tfrac{17}{220}
\end{array}
$$

This means the concentration is 17 pounds of sugar to 220 gallons of water.

At the beginning, the concentration is

$$
\begin{array}{lrcl}
& C(0) &=& \tfrac{5+0}{100+10(0)} \\[4pt]
& &=& \tfrac{1}{20}
\end{array}
$$

Since $\tfrac{17}{220}\approx0.08>\tfrac{1}{20}=0.05$, the concentration is
greater after 12 minutes than at the beginning.

**Analysis.** To find the horizontal asymptote, divide the leading
coefficient in the numerator by the leading coefficient in the denominator:

$$\tfrac{1}{10}=0.1$$

Notice the horizontal asymptote is $y=0.1$. This means the concentration,
$C$, the ratio of pounds of sugar to gallons of water, will approach 0.1 in
the long term.

{{< fillin
  question="There are 1,200 first-year and 1,500 second-year students at a rally at noon. After 12 p.m., 20 first-year students arrive at the rally every five minutes while 15 second-year students leave the rally. Find the ratio of first-year to second-year students at 1 p.m."
  answer="\frac{12}{11}"
  answerDisplay="$\tfrac{12}{11}$"
  hint="One hour is twelve 5-minute intervals; add $20$ first-years and subtract $15$ second-years per interval, then form the ratio."
>}}

## Finding the domains of rational functions

A vertical asymptote represents a value at which a rational function is
undefined, so that value is not in the domain of the function. A reciprocal
function cannot have values in its domain that cause the denominator to
equal zero. In general, to find the domain of a rational function, we need
to determine which inputs would cause division by zero.

{{< callout type="info" >}}
  **Domain of a rational function.** The domain of a rational function
  includes all real numbers except those that cause the denominator to
  equal zero.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a rational function, find the domain.

  1. Set the denominator equal to zero.
  2. Solve to find the $x$-values that cause the denominator to equal zero.
  3. The domain is all real numbers except those found in Step 2.
{{< /callout >}}

**Example.** Find the domain of $f(x)=\tfrac{x+3}{x^2-9}$.

**Solution.** Begin by setting the denominator equal to zero and solving.

$$
\begin{array}{lrcl}
& x^2-9 &=& 0 \\[4pt]
& x^2 &=& 9 \\[4pt]
& x &=& \pm3
\end{array}
$$

The denominator is equal to zero when $x=\pm3$. The domain of the function
is all real numbers except $x=\pm3$.

**Analysis.** A graph of this function, shown below, confirms that the
function is not defined when $x=\pm3$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the quantity x+3 over x squared minus 9, which reduces to 1 over x−3, with a vertical asymptote at x=3 and a horizontal asymptote at y=0.","xMin":-6,"xMax":6,"yMin":-4,"yMax":4,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[3,1],"den":[-9,0,1]}],"lines":[{"x":3,"dashed":true,"arrows":false,"label":"x = 3","labelSide":"right"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0","labelSide":"left"}]}'>
<svg role="img" aria-label="The graph of f of x equals the quantity x+3 over x squared minus 9, which reduces to 1 over x−3, with a vertical asymptote at x=3 and a horizontal asymptote at y=0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 244" width="340" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="218" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="218" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="218" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="218" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="218" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="218" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="218" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="218" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="218" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="218" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="314" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="314" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="314" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="314" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="314" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="314" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="314" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="122" x2="316" y2="122" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="24" x2="170" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="326,122 316,127 316,117" fill="currentColor"/>
  <polygon points="170,14 175,24 165,24" fill="currentColor"/>
  <polygon points="14,122 24,117 24,127" fill="currentColor"/>
  <polygon points="170,230 165,220 175,220" fill="currentColor"/>
  <text x="324" y="114" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="178" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="119" x2="26" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="137" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="50" y1="119" x2="50" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="137" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="74" y1="119" x2="74" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="137" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="98" y1="119" x2="98" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="137" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="122" y1="119" x2="122" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="137" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="146" y1="119" x2="146" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="137" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="194" y1="119" x2="194" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="137" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="218" y1="119" x2="218" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="137" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="242" y1="119" x2="242" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="137" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="266" y1="119" x2="266" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="137" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="290" y1="119" x2="290" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="137" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="314" y1="119" x2="314" y2="125" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="137" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="167" y1="218" x2="173" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="222" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="167" y1="194" x2="173" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="198" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="167" y1="170" x2="173" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="174" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="167" y1="146" x2="173" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="167" y1="98" x2="173" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="102" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="167" y1="74" x2="173" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="78" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="167" y1="50" x2="173" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="54" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="167" y1="26" x2="173" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="164" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="242" y1="224" x2="242" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="122" x2="320" y2="122" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,124.8 34,124.8 34.3,124.8 34.5,124.8 34.8,124.8 35,124.8 35.3,124.8 35.5,124.8 35.8,124.8 36,124.8 36.3,124.8 36.5,124.8 36.8,124.8 37,124.8 37.3,124.8 37.5,124.8 37.8,124.8 38,124.8 38.3,124.8 38.5,124.8 38.8,124.8 39,124.8 39.3,124.8 39.5,124.8 39.8,124.8 40,124.9 40.3,124.9 40.5,124.9 40.8,124.9 41,124.9 41.3,124.9 41.5,124.9 41.8,124.9 42,124.9 42.3,124.9 42.5,124.9 42.8,124.9 43,124.9 43.3,124.9 43.5,124.9 43.8,124.9 44,124.9 44.3,124.9 44.5,124.9 44.8,124.9 45,124.9 45.3,124.9 45.5,124.9 45.8,124.9 46,124.9 46.3,124.9 46.5,124.9 46.8,125 47,125 47.3,125 47.5,125 47.8,125 48,125 48.3,125 48.5,125 48.8,125 49,125 49.3,125 49.5,125 49.8,125 50,125 50.3,125 50.5,125 50.8,125 51,125 51.3,125 51.5,125 51.8,125 52,125 52.3,125 52.5,125 52.8,125 53,125 53.3,125.1 53.5,125.1 53.8,125.1 54,125.1 54.3,125.1 54.5,125.1 54.8,125.1 55,125.1 55.3,125.1 55.5,125.1 55.8,125.1 56,125.1 56.3,125.1 56.5,125.1 56.8,125.1 57,125.1 57.3,125.1 57.5,125.1 57.8,125.1 58,125.1 58.3,125.1 58.5,125.1 58.8,125.1 59,125.1 59.3,125.2 59.5,125.2 59.8,125.2 60,125.2 60.3,125.2 60.5,125.2 60.8,125.2 61,125.2 61.3,125.2 61.5,125.2 61.8,125.2 62,125.2 62.3,125.2 62.5,125.2 62.8,125.2 63,125.2 63.3,125.2 63.5,125.2 63.8,125.2 64,125.2 64.3,125.2 64.5,125.2 64.8,125.2 65,125.3 65.3,125.3 65.5,125.3 65.8,125.3 66,125.3 66.3,125.3 66.5,125.3 66.8,125.3 67,125.3 67.3,125.3 67.5,125.3 67.8,125.3 68,125.3 68.3,125.3 68.5,125.3 68.8,125.3 69,125.3 69.3,125.3 69.5,125.3 69.8,125.3 70,125.3 70.3,125.4 70.5,125.4 70.8,125.4 71,125.4 71.3,125.4 71.5,125.4 71.8,125.4 72,125.4 72.3,125.4 72.5,125.4 72.8,125.4 73,125.4 73.3,125.4 73.5,125.4 73.8,125.4 74,125.4 74.3,125.4 74.5,125.4 74.8,125.4 75,125.4 75.3,125.5 75.5,125.5 75.8,125.5 76,125.5 76.3,125.5 76.5,125.5 76.8,125.5 77,125.5 77.3,125.5 77.5,125.5 77.8,125.5 78,125.5 78.3,125.5 78.5,125.5 78.8,125.5 79,125.5 79.3,125.5 79.5,125.5 79.8,125.6 80,125.6 80.3,125.6 80.5,125.6 80.8,125.6 81,125.6 81.3,125.6 81.5,125.6 81.8,125.6 82,125.6 82.3,125.6 82.5,125.6 82.8,125.6 83,125.6 83.3,125.6 83.5,125.6 83.8,125.6 84,125.6 84.3,125.7 84.5,125.7 84.8,125.7 85,125.7 85.3,125.7 85.5,125.7 85.8,125.7 86,125.7 86.3,125.7 86.5,125.7 86.8,125.7 87,125.7 87.3,125.7 87.5,125.7 87.8,125.7 88,125.7 88.3,125.7 88.5,125.8 88.8,125.8 89,125.8 89.3,125.8 89.5,125.8 89.8,125.8 89.8,125.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,124.7 36.1,119.8 35.9,129.8" fill="currentColor"/>
  <polygon points="97.8,126 87.6,130.7 87.9,120.7" fill="currentColor"/>
  <polyline points="106.2,126.2 106.3,126.2 106.5,126.3 106.8,126.3 107,126.3 107.3,126.3 107.5,126.3 107.8,126.3 108,126.3 108.3,126.3 108.5,126.3 108.8,126.3 109,126.3 109.3,126.3 109.5,126.3 109.8,126.4 110,126.4 110.3,126.4 110.5,126.4 110.8,126.4 111,126.4 111.3,126.4 111.5,126.4 111.8,126.4 112,126.4 112.3,126.4 112.5,126.4 112.8,126.5 113,126.5 113.3,126.5 113.5,126.5 113.8,126.5 114,126.5 114.3,126.5 114.5,126.5 114.8,126.5 115,126.5 115.3,126.5 115.5,126.6 115.8,126.6 116,126.6 116.3,126.6 116.5,126.6 116.8,126.6 117,126.6 117.3,126.6 117.5,126.6 117.8,126.6 118,126.6 118.3,126.7 118.5,126.7 118.8,126.7 119,126.7 119.3,126.7 119.5,126.7 119.8,126.7 120,126.7 120.3,126.7 120.5,126.7 120.8,126.8 121,126.8 121.3,126.8 121.5,126.8 121.8,126.8 122,126.8 122.3,126.8 122.5,126.8 122.8,126.8 123,126.8 123.3,126.9 123.5,126.9 123.8,126.9 124,126.9 124.3,126.9 124.5,126.9 124.8,126.9 125,126.9 125.3,126.9 125.5,126.9 125.8,127 126,127 126.3,127 126.5,127 126.8,127 127,127 127.3,127 127.5,127 127.8,127 128,127.1 128.3,127.1 128.5,127.1 128.8,127.1 129,127.1 129.3,127.1 129.5,127.1 129.8,127.1 130,127.1 130.3,127.2 130.5,127.2 130.8,127.2 131,127.2 131.3,127.2 131.5,127.2 131.8,127.2 132,127.2 132.3,127.2 132.5,127.3 132.8,127.3 133,127.3 133.3,127.3 133.5,127.3 133.8,127.3 134,127.3 134.3,127.3 134.5,127.4 134.8,127.4 135,127.4 135.3,127.4 135.5,127.4 135.8,127.4 136,127.4 136.3,127.4 136.5,127.5 136.8,127.5 137,127.5 137.3,127.5 137.5,127.5 137.8,127.5 138,127.5 138.3,127.6 138.5,127.6 138.8,127.6 139,127.6 139.3,127.6 139.5,127.6 139.8,127.6 140,127.6 140.3,127.7 140.5,127.7 140.8,127.7 141,127.7 141.3,127.7 141.5,127.7 141.8,127.7 142,127.8 142.3,127.8 142.5,127.8 142.8,127.8 143,127.8 143.3,127.8 143.5,127.8 143.8,127.9 144,127.9 144.3,127.9 144.5,127.9 144.8,127.9 145,127.9 145.3,128 145.5,128 145.8,128 146,128 146.3,128 146.5,128 146.8,128 147,128.1 147.3,128.1 147.5,128.1 147.8,128.1 148,128.1 148.3,128.1 148.5,128.2 148.8,128.2 149,128.2 149.3,128.2 149.5,128.2 149.8,128.2 150,128.3 150.3,128.3 150.5,128.3 150.8,128.3 151,128.3 151.3,128.3 151.5,128.4 151.8,128.4 152,128.4 152.3,128.4 152.5,128.4 152.8,128.5 153,128.5 153.3,128.5 153.5,128.5 153.8,128.5 154,128.5 154.3,128.6 154.5,128.6 154.8,128.6 155,128.6 155.3,128.6 155.5,128.7 155.8,128.7 156,128.7 156.3,128.7 156.5,128.7 156.8,128.8 157,128.8 157.3,128.8 157.5,128.8 157.8,128.8 158,128.9 158.3,128.9 158.5,128.9 158.8,128.9 159,128.9 159.3,129 159.5,129 159.8,129 160,129 160.3,129 160.5,129.1 160.8,129.1 161,129.1 161.3,129.1 161.5,129.2 161.8,129.2 162,129.2 162.3,129.2 162.5,129.2 162.8,129.3 163,129.3 163.3,129.3 163.5,129.3 163.8,129.4 164,129.4 164.3,129.4 164.5,129.4 164.8,129.5 165,129.5 165.3,129.5 165.5,129.5 165.8,129.6 166,129.6 166.3,129.6 166.5,129.6 166.8,129.7 167,129.7 167.3,129.7 167.5,129.7 167.8,129.8 168,129.8 168.3,129.8 168.5,129.8 168.8,129.9 169,129.9 169.3,129.9 169.5,129.9 169.8,130 170,130 170.3,130 170.5,130.1 170.8,130.1 171,130.1 171.3,130.1 171.5,130.2 171.8,130.2 172,130.2 172.3,130.3 172.5,130.3 172.8,130.3 173,130.3 173.3,130.4 173.5,130.4 173.8,130.4 174,130.5 174.3,130.5 174.5,130.5 174.8,130.6 175,130.6 175.3,130.6 175.5,130.7 175.8,130.7 176,130.7 176.3,130.8 176.5,130.8 176.8,130.8 177,130.9 177.3,130.9 177.5,130.9 177.8,131 178,131 178.3,131 178.5,131.1 178.8,131.1 179,131.1 179.3,131.2 179.5,131.2 179.8,131.3 180,131.3 180.3,131.3 180.5,131.4 180.8,131.4 181,131.4 181.3,131.5 181.5,131.5 181.8,131.6 182,131.6 182.3,131.6 182.5,131.7 182.8,131.7 183,131.8 183.3,131.8 183.5,131.8 183.8,131.9 184,131.9 184.3,132 184.5,132 184.8,132.1 185,132.1 185.3,132.1 185.5,132.2 185.8,132.2 186,132.3 186.3,132.3 186.5,132.4 186.8,132.4 187,132.5 187.3,132.5 187.5,132.6 187.8,132.6 188,132.7 188.3,132.7 188.5,132.8 188.8,132.8 189,132.9 189.3,132.9 189.5,133 189.8,133 190,133.1 190.3,133.1 190.5,133.2 190.8,133.2 191,133.3 191.3,133.3 191.5,133.4 191.8,133.5 192,133.5 192.3,133.6 192.5,133.6 192.8,133.7 193,133.8 193.3,133.8 193.5,133.9 193.8,133.9 194,134 194.3,134.1 194.5,134.1 194.8,134.2 195,134.3 195.3,134.3 195.5,134.4 195.8,134.5 196,134.5 196.3,134.6 196.5,134.7 196.8,134.7 197,134.8 197.3,134.9 197.5,134.9 197.8,135 198,135.1 198.3,135.2 198.5,135.2 198.8,135.3 199,135.4 199.3,135.5 199.5,135.6 199.8,135.6 200,135.7 200.3,135.8 200.5,135.9 200.8,136 201,136 201.3,136.1 201.5,136.2 201.8,136.3 202,136.4 202.3,136.5 202.5,136.6 202.8,136.7 203,136.8 203.3,136.9 203.5,137 203.8,137.1 204,137.2 204.3,137.3 204.5,137.4 204.8,137.5 205,137.6 205.3,137.7 205.5,137.8 205.8,137.9 206,138 206.3,138.1 206.5,138.2 206.8,138.3 207,138.5 207.3,138.6 207.5,138.7 207.8,138.8 208,138.9 208.3,139.1 208.5,139.2 208.8,139.3 209,139.5 209.3,139.6 209.5,139.7 209.8,139.9 210,140 210.3,140.1 210.5,140.3 210.8,140.4 211,140.6 211.3,140.7 211.5,140.9 211.8,141 212,141.2 212.3,141.4 212.5,141.5 212.8,141.7 213,141.9 213.3,142 213.5,142.2 213.8,142.4 214,142.6 214.3,142.8 214.5,142.9 214.8,143.1 215,143.3 215.3,143.5 215.5,143.7 215.8,143.9 216,144.2 216.3,144.4 216.5,144.6 216.8,144.8 217,145 217.3,145.3 217.5,145.5 217.8,145.8 218,146 218.3,146.3 218.5,146.5 218.8,146.8 219,147 219.3,147.3 219.5,147.6 219.8,147.9 220,148.2 220.3,148.5 220.5,148.8 220.8,149.1 221,149.4 221.3,149.8 221.5,150.1 221.8,150.4 222,150.8 222.3,151.2 222.5,151.5 222.8,151.9 223,152.3 223.3,152.7 223.5,153.1 223.8,153.6 224,154 224.3,154.5 224.5,154.9 224.8,155.4 225,155.9 225.3,156.4 225.5,156.9 225.8,157.4 226,158 226.3,158.6 226.5,159.2 226.8,159.8 227,160.4 227.3,161.1 227.5,161.7 227.8,162.4 228,163.1 228.3,163.9 228.5,164.7 228.8,165.5 229,166.3 229.3,167.2 229.5,168.1 229.8,169 230,170 230.3,171 230.5,172.1 230.8,173.2 231,174.4 231.3,175.6 231.5,176.9 231.8,178.2 232,179.6 232.3,181.1 232.5,182.6 232.8,184.3 233,186 233.3,187.8 233.5,189.8 233.8,191.8 234,194 234.3,196.3 234.5,198.8 234.8,201.4 235,204.3 235.3,207.3 235.5,210" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="98.3,126 108.4,121.3 108.1,131.3" fill="currentColor"/>
  <polygon points="236,218 230.3,208.4 240.3,207.7" fill="currentColor"/>
  <polyline points="248.5,34 248.8,36.7 249,39.7 249.3,42.6 249.5,45.2 249.8,47.7 250,50 250.3,52.2 250.5,54.2 250.8,56.2 251,58 251.3,59.7 251.5,61.4 251.8,62.9 252,64.4 252.3,65.8 252.5,67.1 252.8,68.4 253,69.6 253.3,70.8 253.5,71.9 253.8,73 254,74 254.3,75 254.5,75.9 254.8,76.8 255,77.7 255.3,78.5 255.5,79.3 255.8,80.1 256,80.9 256.3,81.6 256.5,82.3 256.8,82.9 257,83.6 257.3,84.2 257.5,84.8 257.8,85.4 258,86 258.3,86.6 258.5,87.1 258.8,87.6 259,88.1 259.3,88.6 259.5,89.1 259.8,89.5 260,90 260.3,90.4 260.5,90.9 260.8,91.3 261,91.7 261.3,92.1 261.5,92.5 261.8,92.8 262,93.2 262.3,93.6 262.5,93.9 262.8,94.2 263,94.6 263.3,94.9 263.5,95.2 263.8,95.5 264,95.8 264.3,96.1 264.5,96.4 264.8,96.7 265,97 265.3,97.2 265.5,97.5 265.8,97.7 266,98 266.3,98.2 266.5,98.5 266.8,98.7 267,99 267.3,99.2 267.5,99.4 267.8,99.6 268,99.8 268.3,100.1 268.5,100.3 268.8,100.5 269,100.7 269.3,100.9 269.5,101.1 269.8,101.2 270,101.4 270.3,101.6 270.5,101.8 270.8,102 271,102.1 271.3,102.3 271.5,102.5 271.8,102.6 272,102.8 272.3,103 272.5,103.1 272.8,103.3 273,103.4 273.3,103.6 273.5,103.7 273.8,103.9 274,104 274.3,104.1 274.5,104.3 274.8,104.4 275,104.5 275.3,104.7 275.5,104.8 275.8,104.9 276,105.1 276.3,105.2 276.5,105.3 276.8,105.4 277,105.5 277.3,105.7 277.5,105.8 277.8,105.9 278,106 278.3,106.1 278.5,106.2 278.8,106.3 279,106.4 279.3,106.5 279.5,106.6 279.8,106.7 280,106.8 280.3,106.9 280.5,107 280.8,107.1 281,107.2 281.3,107.3 281.5,107.4 281.8,107.5 282,107.6 282.3,107.7 282.5,107.8 282.8,107.9 283,108 283.3,108 283.5,108.1 283.8,108.2 284,108.3 284.3,108.4 284.5,108.4 284.8,108.5 285,108.6 285.3,108.7 285.5,108.8 285.8,108.8 286,108.9 286.3,109 286.5,109.1 286.8,109.1 287,109.2 287.3,109.3 287.5,109.3 287.8,109.4 288,109.5 288.3,109.5 288.5,109.6 288.8,109.7 289,109.7 289.3,109.8 289.5,109.9 289.8,109.9 290,110 290.3,110.1 290.5,110.1 290.8,110.2 291,110.2 291.3,110.3 291.5,110.4 291.8,110.4 292,110.5 292.3,110.5 292.5,110.6 292.8,110.7 293,110.7 293.3,110.8 293.5,110.8 293.8,110.9 294,110.9 294.3,111 294.5,111 294.8,111.1 295,111.1 295.3,111.2 295.5,111.2 295.8,111.3 296,111.3 296.3,111.4 296.5,111.4 296.8,111.5 297,111.5 297.3,111.6 297.5,111.6 297.8,111.7 298,111.7 298.3,111.8 298.5,111.8 298.8,111.9 299,111.9 299.3,111.9 299.5,112 299.8,112 300,112.1 300.3,112.1 300.5,112.2 300.8,112.2 301,112.2 301.3,112.3 301.5,112.3 301.8,112.4 302,112.4 302.3,112.4 302.5,112.5 302.8,112.5 303,112.6 303.3,112.6 303.5,112.6 303.8,112.7 304,112.7 304.3,112.7 304.5,112.8 304.8,112.8 305,112.9 305.3,112.9 305.5,112.9 305.8,113 306,113 306.1,113" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="248,26 253.7,35.6 243.7,36.3" fill="currentColor"/>
  <polygon points="314,114 303.5,117.7 304.7,107.8" fill="currentColor"/>
  <text x="264" y="68.9" font-size="13" fill="currentColor" text-anchor="start">x = 3</text>
  <text x="206" y="110" font-size="13" fill="currentColor" text-anchor="middle">y = 0</text>
</svg>
</div>
There is a vertical asymptote at $x=3$ and a hole in the graph at $x=-3$. We
will discuss these types of holes in greater detail later in this section.

{{< fillin
  question="Find the domain of $f(x)=\tfrac{4x}{5(x-1)(x-5)}$. Write the domain in interval notation."
  answer="(-\infty,1)\cup(1,5)\cup(5,\infty)"
  answerDisplay="$(-\infty,1)\cup(1,5)\cup(5,\infty)$"
  hint="The denominator is zero when $x=1$ or $x=5$; remove both points from the real line."
>}}

## Identifying vertical asymptotes of rational functions

By looking at the graph of a rational function, we can investigate its
local behavior and easily see whether there are asymptotes. We may even be
able to approximate their location. Even without the graph, however, we can
still determine whether a given rational function has any asymptotes, and
calculate their location.

### Vertical asymptotes

The vertical asymptotes of a rational function may be found by examining
the factors of the denominator that are not common to the factors in the
numerator. Vertical asymptotes occur at the zeros of such factors.

{{< callout type="info" >}}
  **How to:** given a rational function, identify any vertical asymptotes
  of its graph.

  1. Factor the numerator and denominator.
  2. Note any restrictions in the domain of the function.
  3. Reduce the expression by canceling common factors in the numerator and
     the denominator.
  4. Note any values that cause the denominator to be zero in this
     simplified version. These are where the vertical asymptotes occur.
  5. Note any restrictions in the domain where asymptotes do not occur.
     These are removable discontinuities.
{{< /callout >}}

**Example.** Find the vertical asymptotes of the graph of
$k(x)=\tfrac{5+2x^2}{2-x-x^2}$.

**Solution.** First, factor the numerator and denominator.

$$
\begin{array}{lrcl}
& k(x) &=& \tfrac{5+2x^2}{2-x-x^2} \\[4pt]
& &=& \tfrac{5+2x^2}{(2+x)(1-x)}
\end{array}
$$

To find the vertical asymptotes, we determine where this function will be
undefined by setting the denominator equal to zero:

$$
\begin{array}{lrcl}
& (2+x)(1-x) &=& 0 \\[4pt]
& x &=& -2,1
\end{array}
$$

Neither $x=-2$ nor $x=1$ are zeros of the numerator, so the two values
indicate two vertical asymptotes. The graph below confirms the location of
the two vertical asymptotes.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of k of x equals the quantity 5+2x squared over 2−x−x squared, with vertical asymptotes at x=−2 and x=1 and a horizontal asymptote at y=−2.","xMin":-6,"xMax":6,"yMin":-7,"yMax":5,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[5,0,2],"den":[2,-1,-1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2","labelSide":"right"},{"x":1,"dashed":true,"arrows":false,"label":"x = 1","labelSide":"left"},{"y":-2,"dashed":true,"arrows":false,"label":"y = −2","labelSide":"left"}]}'>
<svg role="img" aria-label="The graph of k of x equals the quantity 5+2x squared over 2−x−x squared, with vertical asymptotes at x=−2 and x=1 and a horizontal asymptote at y=−2." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="268" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,126 268,131 268,121" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="123" x2="106" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="123" x2="126" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="123" x2="206" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="123" x2="226" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="123" x2="246" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="141" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="123" x2="266" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="141" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−7</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="146" x2="149" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="106" y1="272" x2="106" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="166" y1="272" x2="166" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="166" x2="272" y2="166" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="33.8,182.9 34,183 34.3,183.1 34.5,183.1 34.8,183.2 35,183.3 35.3,183.4 35.5,183.4 35.8,183.5 36,183.6 36.3,183.7 36.5,183.7 36.8,183.8 37,183.9 37.3,184 37.5,184 37.8,184.1 38,184.2 38.3,184.3 38.5,184.4 38.8,184.4 39,184.5 39.3,184.6 39.5,184.7 39.8,184.8 40,184.9 40.3,184.9 40.5,185 40.8,185.1 41,185.2 41.3,185.3 41.5,185.4 41.8,185.5 42,185.6 42.3,185.6 42.5,185.7 42.8,185.8 43,185.9 43.3,186 43.5,186.1 43.8,186.2 44,186.3 44.3,186.4 44.5,186.5 44.8,186.6 45,186.7 45.3,186.8 45.5,186.9 45.8,187 46,187.1 46.3,187.2 46.5,187.3 46.8,187.4 47,187.5 47.3,187.6 47.5,187.8 47.8,187.9 48,188 48.3,188.1 48.5,188.2 48.8,188.3 49,188.4 49.3,188.5 49.5,188.7 49.8,188.8 50,188.9 50.3,189 50.5,189.2 50.8,189.3 51,189.4 51.3,189.5 51.5,189.7 51.8,189.8 52,189.9 52.3,190 52.5,190.2 52.8,190.3 53,190.4 53.3,190.6 53.5,190.7 53.8,190.9 54,191 54.3,191.1 54.5,191.3 54.8,191.4 55,191.6 55.3,191.7 55.5,191.9 55.8,192 56,192.2 56.3,192.3 56.5,192.5 56.8,192.7 57,192.8 57.3,193 57.5,193.1 57.8,193.3 58,193.5 58.3,193.6 58.5,193.8 58.8,194 59,194.2 59.3,194.3 59.5,194.5 59.8,194.7 60,194.9 60.3,195.1 60.5,195.2 60.8,195.4 61,195.6 61.3,195.8 61.5,196 61.8,196.2 62,196.4 62.3,196.6 62.5,196.8 62.8,197 63,197.2 63.3,197.5 63.5,197.7 63.8,197.9 64,198.1 64.3,198.3 64.5,198.6 64.8,198.8 65,199 65.3,199.3 65.5,199.5 65.8,199.8 66,200 66.3,200.2 66.5,200.5 66.8,200.8 67,201 67.3,201.3 67.5,201.5 67.8,201.8 68,202.1 68.3,202.4 68.5,202.6 68.8,202.9 69,203.2 69.3,203.5 69.5,203.8 69.8,204.1 70,204.4 70.3,204.7 70.5,205.1 70.8,205.4 71,205.7 71.3,206 71.5,206.4 71.8,206.7 72,207.1 72.3,207.4 72.5,207.8 72.8,208.1 73,208.5 73.3,208.9 73.5,209.2 73.8,209.6 74,210 74.3,210.4 74.5,210.8 74.8,211.2 75,211.7 75.3,212.1 75.5,212.5 75.8,213 76,213.4 76.3,213.9 76.5,214.3 76.8,214.8 77,215.3 77.3,215.8 77.5,216.3 77.8,216.8 78,217.3 78.3,217.8 78.5,218.4 78.8,218.9 79,219.5 79.3,220 79.5,220.6 79.8,221.2 80,221.8 80.3,222.4 80.5,223.1 80.8,223.7 81,224.4 81.3,225 81.5,225.7 81.8,226.4 82,227.1 82.3,227.8 82.5,228.6 82.8,229.3 83,230.1 83.3,230.9 83.5,231.7 83.8,232.6 84,233.4 84.3,234.3 84.5,235.2 84.8,236.1 85,237 85.3,238 85.5,239 85.8,240 86,241 86.3,242.1 86.5,243.1 86.8,244.3 87,245.4 87.3,246.6 87.5,247.8 87.8,249 88,250.3 88.3,251.6 88.5,253 88.8,254.4 89,255.8 89.3,257.3 89.3,257.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,181 36.9,178.6 34.5,188.3" fill="currentColor"/>
  <polygon points="90.5,265.5 84,256.3 93.9,254.8" fill="currentColor"/>
  <polyline points="121.9,35.8 122,36.5 122.3,38 122.5,39.5 122.8,40.9 123,42.3 123.3,43.7 123.5,45 123.8,46.3 124,47.5 124.3,48.7 124.5,49.8 124.8,50.9 125,52 125.3,53.1 125.5,54.1 125.8,55 126,56 126.3,56.9 126.5,57.8 126.8,58.7 127,59.5 127.3,60.3 127.5,61.1 127.8,61.9 128,62.7 128.3,63.4 128.5,64.1 128.8,64.8 129,65.4 129.3,66.1 129.5,66.7 129.8,67.3 130,67.9 130.3,68.4 130.5,69 130.8,69.5 131,70 131.3,70.5 131.5,71 131.8,71.4 132,71.9 132.3,72.3 132.5,72.7 132.8,73.1 133,73.5 133.3,73.9 133.5,74.3 133.8,74.6 134,74.9 134.3,75.2 134.5,75.6 134.8,75.8 135,76.1 135.3,76.4 135.5,76.6 135.8,76.9 136,77.1 136.3,77.3 136.5,77.5 136.8,77.7 137,77.9 137.3,78.1 137.5,78.2 137.8,78.4 138,78.5 138.3,78.6 138.5,78.7 138.8,78.8 139,78.9 139.3,79 139.5,79 139.8,79.1 140,79.1 140.3,79.1 140.5,79.2 140.8,79.2 141,79.1 141.3,79.1 141.5,79.1 141.8,79 142,79 142.3,78.9 142.5,78.8 142.8,78.7 143,78.6 143.3,78.4 143.5,78.3 143.8,78.1 144,78 144.3,77.8 144.5,77.6 144.8,77.3 145,77.1 145.3,76.9 145.5,76.6 145.8,76.3 146,76 146.3,75.7 146.5,75.3 146.8,75 147,74.6 147.3,74.2 147.5,73.8 147.8,73.3 148,72.9 148.3,72.4 148.5,71.9 148.8,71.3 149,70.8 149.3,70.2 149.5,69.6 149.8,68.9 150,68.3 150.3,67.6 150.5,66.8 150.8,66.1 151,65.3 151.3,64.4 151.5,63.5 151.8,62.6 152,61.7 152.3,60.6 152.5,59.6 152.8,58.5 153,57.3 153.3,56.1 153.5,54.8 153.8,53.5 154,52.1 154.3,50.6 154.5,49.1 154.8,47.5 155,45.8 155.3,44 155.5,42.1 155.8,40.1 156,38 156.2,36.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="120.8,27.9 127.1,37 117.2,38.5" fill="currentColor"/>
  <polygon points="157,28.3 161,38.8 151,37.8" fill="currentColor"/>
  <polyline points="174,256.8 174.3,253.7 174.5,250.5 174.8,247.5 175,244.6 175.3,241.9 175.5,239.3 175.8,236.9 176,234.6 176.3,232.4 176.5,230.3 176.8,228.3 177,226.4 177.3,224.6 177.5,222.9 177.8,221.3 178,219.7 178.3,218.2 178.5,216.8 178.8,215.4 179,214.1 179.3,212.8 179.5,211.6 179.8,210.4 180,209.2 180.3,208.2 180.5,207.1 180.8,206.1 181,205.1 181.3,204.2 181.5,203.3 181.8,202.4 182,201.5 182.3,200.7 182.5,199.9 182.8,199.1 183,198.4 183.3,197.7 183.5,197 183.8,196.3 184,195.6 184.3,195 184.5,194.4 184.8,193.8 185,193.2 185.3,192.6 185.5,192.1 185.8,191.5 186,191 186.3,190.5 186.5,190 186.8,189.5 187,189 187.3,188.6 187.5,188.1 187.8,187.7 188,187.3 188.3,186.9 188.5,186.5 188.8,186.1 189,185.7 189.3,185.3 189.5,185 189.8,184.6 190,184.3 190.3,183.9 190.5,183.6 190.8,183.3 191,182.9 191.3,182.6 191.5,182.3 191.8,182 192,181.7 192.3,181.5 192.5,181.2 192.8,180.9 193,180.6 193.3,180.4 193.5,180.1 193.8,179.9 194,179.6 194.3,179.4 194.5,179.2 194.8,178.9 195,178.7 195.3,178.5 195.5,178.3 195.8,178.1 196,177.9 196.3,177.6 196.5,177.4 196.8,177.3 197,177.1 197.3,176.9 197.5,176.7 197.8,176.5 198,176.3 198.3,176.2 198.5,176 198.8,175.8 199,175.6 199.3,175.5 199.5,175.3 199.8,175.2 200,175 200.3,174.9 200.5,174.7 200.8,174.6 201,174.4 201.3,174.3 201.5,174.1 201.8,174 202,173.9 202.3,173.7 202.5,173.6 202.8,173.5 203,173.4 203.3,173.2 203.5,173.1 203.8,173 204,172.9 204.3,172.8 204.5,172.6 204.8,172.5 205,172.4 205.3,172.3 205.5,172.2 205.8,172.1 206,172 206.3,171.9 206.5,171.8 206.8,171.7 207,171.6 207.3,171.5 207.5,171.4 207.8,171.3 208,171.2 208.3,171.1 208.5,171.1 208.8,171 209,170.9 209.3,170.8 209.5,170.7 209.8,170.6 210,170.5 210.3,170.5 210.5,170.4 210.8,170.3 211,170.2 211.3,170.2 211.5,170.1 211.8,170 212,169.9 212.3,169.9 212.5,169.8 212.8,169.7 213,169.7 213.3,169.6 213.5,169.5 213.8,169.5 214,169.4 214.3,169.3 214.5,169.3 214.8,169.2 215,169.1 215.3,169.1 215.5,169 215.8,169 216,168.9 216.3,168.9 216.5,168.8 216.8,168.7 217,168.7 217.3,168.6 217.5,168.6 217.8,168.5 218,168.5 218.3,168.4 218.5,168.4 218.8,168.3 219,168.3 219.3,168.2 219.5,168.2 219.8,168.1 220,168.1 220.3,168 220.5,168 220.8,167.9 221,167.9 221.3,167.9 221.5,167.8 221.8,167.8 222,167.7 222.3,167.7 222.5,167.6 222.8,167.6 223,167.6 223.3,167.5 223.5,167.5 223.8,167.4 224,167.4 224.3,167.4 224.5,167.3 224.8,167.3 225,167.3 225.3,167.2 225.5,167.2 225.8,167.1 226,167.1 226.3,167.1 226.5,167 226.8,167 227,167 227.3,166.9 227.5,166.9 227.8,166.9 228,166.8 228.3,166.8 228.5,166.8 228.8,166.8 229,166.7 229.3,166.7 229.5,166.7 229.8,166.6 230,166.6 230.3,166.6 230.5,166.5 230.8,166.5 231,166.5 231.3,166.5 231.5,166.4 231.8,166.4 232,166.4 232.3,166.4 232.5,166.3 232.8,166.3 233,166.3 233.3,166.3 233.5,166.2 233.8,166.2 234,166.2 234.3,166.2 234.5,166.1 234.8,166.1 235,166.1 235.3,166.1 235.5,166 235.8,166 236,166 236.3,166 236.5,166 236.8,165.9 237,165.9 237.3,165.9 237.5,165.9 237.8,165.9 238,165.8 238.3,165.8 238.5,165.8 238.8,165.8 239,165.8 239.3,165.7 239.5,165.7 239.8,165.7 240,165.7 240.3,165.7 240.5,165.6 240.8,165.6 241,165.6 241.3,165.6 241.5,165.6 241.8,165.6 242,165.5 242.3,165.5 242.5,165.5 242.8,165.5 243,165.5 243.3,165.5 243.5,165.4 243.8,165.4 244,165.4 244.3,165.4 244.5,165.4 244.8,165.4 245,165.3 245.3,165.3 245.5,165.3 245.8,165.3 246,165.3 246.3,165.3 246.5,165.3 246.8,165.2 247,165.2 247.3,165.2 247.5,165.2 247.8,165.2 248,165.2 248.3,165.2 248.5,165.1 248.8,165.1 249,165.1 249.3,165.1 249.5,165.1 249.8,165.1 250,165.1 250.3,165.1 250.5,165 250.8,165 251,165 251.3,165 251.5,165 251.8,165 252,165 252.3,165 252.5,165 252.8,164.9 253,164.9 253.3,164.9 253.5,164.9 253.8,164.9 254,164.9 254.3,164.9 254.5,164.9 254.8,164.9 255,164.9 255.3,164.8 255.5,164.8 255.8,164.8 256,164.8 256.3,164.8 256.5,164.8 256.8,164.8 257,164.8 257.3,164.8 257.5,164.8 257.8,164.8 258,164.7 258,164.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="173.5,264.8 169.2,254.5 179.1,255.1" fill="currentColor"/>
  <polygon points="266,164.5 256.2,169.8 255.9,159.8" fill="currentColor"/>
  <text x="122" y="79.4" font-size="13" fill="currentColor" text-anchor="start">x = −2</text>
  <text x="150" y="213" font-size="13" fill="currentColor" text-anchor="end">x = 1</text>
  <text x="216.6" y="154" font-size="13" fill="currentColor" text-anchor="middle">y = −2</text>
</svg>
</div>
### Removable discontinuities

Occasionally, a graph will contain a hole: a single point where the graph is
not defined, indicated by an open circle. We call such a hole a **removable
discontinuity**.

For example, the function $f(x)=\tfrac{x^2-1}{x^2-2x-3}$ may be re-written
by factoring the numerator and the denominator.

$$f(x)=\tfrac{(x+1)(x-1)}{(x+1)(x-3)}$$

Notice that $x+1$ is a common factor to the numerator and the denominator.
The zero of this factor, $x=-1$, is the location of the removable
discontinuity. Notice also that $x-3$ is not a factor in both the numerator
and denominator. The zero of this factor, $x=3$, is the vertical asymptote.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the quantity x squared minus 1, over x squared minus 2x minus 3, which reduces to the quantity x−1 over x−3. There is a vertical asymptote at x=3 and an open circle marking a removable discontinuity at (−1, 0.5).","xMin":-6,"xMax":8,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-1,0,1],"den":[-3,-2,1]}],"lines":[{"x":3,"dashed":true,"arrows":false,"label":"x = 3","labelSide":"right"}],"points":[{"at":[-1,0.5],"open":true}]}'>
<svg role="img" aria-label="The graph of f of x equals the quantity x squared minus 1, over x squared minus 2x minus 3, which reduces to the quantity x−1 over x−3. There is a vertical asymptote at x=3 and an open circle marking a removable discontinuity at (−1, 0.5)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 292" width="332" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="286" y1="266" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="266" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="306" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="306" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="306" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="308" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,146 308,151 308,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="316" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="143" x2="46" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="143" x2="86" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="143" x2="126" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="143" x2="166" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="143" x2="186" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="143" x2="206" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="143" x2="246" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="286" y1="143" x2="286" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="161" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="306" y1="143" x2="306" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="161" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="126" x2="149" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="130" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="206" y1="272" x2="206" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,130.7 34,130.7 34.3,130.7 34.5,130.7 34.8,130.7 35,130.7 35.3,130.7 35.5,130.7 35.8,130.7 36,130.7 36.3,130.7 36.5,130.7 36.8,130.7 37,130.7 37.3,130.7 37.5,130.7 37.8,130.8 38,130.8 38.3,130.8 38.5,130.8 38.8,130.8 39,130.8 39.3,130.8 39.5,130.8 39.8,130.8 40,130.8 40.3,130.8 40.5,130.8 40.8,130.8 41,130.8 41.3,130.9 41.5,130.9 41.8,130.9 42,130.9 42.3,130.9 42.5,130.9 42.8,130.9 43,130.9 43.3,130.9 43.5,130.9 43.8,130.9 44,130.9 44.3,130.9 44.5,131 44.8,131 45,131 45.3,131 45.5,131 45.8,131 46,131 46.3,131 46.5,131 46.8,131 47,131 47.3,131 47.5,131 47.8,131.1 48,131.1 48.3,131.1 48.5,131.1 48.8,131.1 49,131.1 49.3,131.1 49.5,131.1 49.8,131.1 50,131.1 50.3,131.1 50.5,131.1 50.8,131.2 51,131.2 51.3,131.2 51.5,131.2 51.8,131.2 52,131.2 52.3,131.2 52.5,131.2 52.8,131.2 53,131.2 53.3,131.2 53.5,131.2 53.8,131.3 54,131.3 54.3,131.3 54.5,131.3 54.8,131.3 55,131.3 55.3,131.3 55.5,131.3 55.8,131.3 56,131.3 56.3,131.3 56.5,131.4 56.8,131.4 57,131.4 57.3,131.4 57.5,131.4 57.8,131.4 58,131.4 58.3,131.4 58.5,131.4 58.8,131.4 59,131.4 59.3,131.5 59.5,131.5 59.8,131.5 60,131.5 60.3,131.5 60.5,131.5 60.8,131.5 61,131.5 61.3,131.5 61.5,131.5 61.8,131.5 62,131.6 62.3,131.6 62.5,131.6 62.8,131.6 63,131.6 63.3,131.6 63.5,131.6 63.8,131.6 64,131.6 64.3,131.6 64.5,131.7 64.8,131.7 65,131.7 65.3,131.7 65.5,131.7 65.8,131.7 66,131.7 66.3,131.7 66.5,131.7 66.8,131.7 67,131.8 67.3,131.8 67.5,131.8 67.8,131.8 68,131.8 68.3,131.8 68.5,131.8 68.8,131.8 69,131.8 69.3,131.9 69.5,131.9 69.8,131.9 70,131.9 70.3,131.9 70.5,131.9 70.8,131.9 71,131.9 71.3,131.9 71.5,131.9 71.8,132 72,132 72.3,132 72.5,132 72.8,132 73,132 73.3,132 73.5,132 73.8,132 74,132.1 74.3,132.1 74.5,132.1 74.8,132.1 75,132.1 75.3,132.1 75.5,132.1 75.8,132.1 76,132.2 76.3,132.2 76.5,132.2 76.8,132.2 77,132.2 77.3,132.2 77.5,132.2 77.8,132.2 78,132.3 78.3,132.3 78.5,132.3 78.8,132.3 79,132.3 79.3,132.3 79.5,132.3 79.8,132.3 80,132.3 80.3,132.4 80.5,132.4 80.8,132.4 81,132.4 81.3,132.4 81.5,132.4 81.8,132.4 82,132.5 82.3,132.5 82.5,132.5 82.8,132.5 83,132.5 83.3,132.5 83.5,132.5 83.8,132.5 84,132.6 84.3,132.6 84.5,132.6 84.8,132.6 85,132.6 85.3,132.6 85.5,132.6 85.8,132.7 86,132.7 86.3,132.7 86.5,132.7 86.8,132.7 87,132.7 87.3,132.7 87.5,132.8 87.8,132.8 88,132.8 88.3,132.8 88.5,132.8 88.8,132.8 89,132.8 89.3,132.9 89.5,132.9 89.8,132.9 90,132.9 90.3,132.9 90.5,132.9 90.8,132.9 91,133 91.3,133 91.5,133 91.8,133 92,133 92.3,133 92.5,133 92.8,133.1 93,133.1 93.3,133.1 93.5,133.1 93.8,133.1 94,133.1 94.3,133.2 94.5,133.2 94.8,133.2 95,133.2 95.3,133.2 95.5,133.2 95.8,133.3 96,133.3 96.3,133.3 96.5,133.3 96.8,133.3 97,133.3 97.3,133.4 97.5,133.4 97.8,133.4 98,133.4 98.3,133.4 98.5,133.4 98.8,133.5 99,133.5 99.3,133.5 99.5,133.5 99.8,133.5 100,133.5 100.3,133.6 100.5,133.6 100.8,133.6 101,133.6 101.3,133.6 101.5,133.7 101.8,133.7 102,133.7 102.3,133.7 102.5,133.7 102.8,133.7 103,133.8 103.3,133.8 103.5,133.8 103.8,133.8 104,133.8 104.3,133.9 104.5,133.9 104.8,133.9 105,133.9 105.3,133.9 105.5,134 105.8,134 106,134 106.3,134 106.5,134 106.8,134.1 107,134.1 107.3,134.1 107.5,134.1 107.8,134.1 108,134.2 108.3,134.2 108.5,134.2 108.8,134.2 109,134.2 109.3,134.3 109.5,134.3 109.8,134.3 110,134.3 110.3,134.4 110.5,134.4 110.8,134.4 111,134.4 111.3,134.4 111.5,134.5 111.8,134.5 112,134.5 112.3,134.5 112.5,134.6 112.8,134.6 113,134.6 113.3,134.6 113.5,134.6 113.8,134.7 114,134.7 114.3,134.7 114.5,134.7 114.8,134.8 115,134.8 115.3,134.8 115.5,134.8 115.8,134.9 116,134.9 116.3,134.9 116.5,134.9 116.8,135 117,135 117.3,135 117.5,135 117.8,135.1 117.8,135.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,130.4 36.1,125.7 35.9,135.7" fill="currentColor"/>
  <polygon points="125.8,136 115.3,139.8 116.4,129.9" fill="currentColor"/>
  <polyline points="134.2,137.1 134.3,137.1 134.5,137.2 134.8,137.2 135,137.3 135.3,137.3 135.5,137.3 135.8,137.4 136,137.4 136.3,137.5 136.5,137.5 136.8,137.6 137,137.6 137.3,137.6 137.5,137.7 137.8,137.7 138,137.8 138.3,137.8 138.5,137.9 138.8,137.9 139,137.9 139.3,138 139.5,138 139.8,138.1 140,138.1 140.3,138.2 140.5,138.2 140.8,138.3 141,138.3 141.3,138.4 141.5,138.4 141.8,138.5 142,138.5 142.3,138.5 142.5,138.6 142.8,138.6 143,138.7 143.3,138.7 143.5,138.8 143.8,138.9 144,138.9 144.3,139 144.5,139 144.8,139.1 145,139.1 145.3,139.2 145.5,139.2 145.8,139.3 146,139.3 146.3,139.4 146.5,139.4 146.8,139.5 147,139.6 147.3,139.6 147.5,139.7 147.8,139.7 148,139.8 148.3,139.9 148.5,139.9 148.8,140 149,140 149.3,140.1 149.5,140.2 149.8,140.2 150,140.3 150.3,140.3 150.5,140.4 150.8,140.5 151,140.5 151.3,140.6 151.5,140.7 151.8,140.7 152,140.8 152.3,140.9 152.5,141 152.8,141 153,141.1 153.3,141.2 153.5,141.2 153.8,141.3 154,141.4 154.3,141.5 154.5,141.5 154.8,141.6 155,141.7 155.3,141.8 155.5,141.8 155.8,141.9 156,142 156.3,142.1 156.5,142.2 156.8,142.2 157,142.3 157.3,142.4 157.5,142.5 157.8,142.6 158,142.7 158.3,142.8 158.5,142.8 158.8,142.9 159,143 159.3,143.1 159.5,143.2 159.8,143.3 160,143.4 160.3,143.5 160.5,143.6 160.8,143.7 161,143.8 161.3,143.9 161.5,144 161.8,144.1 162,144.2 162.3,144.3 162.5,144.4 162.8,144.5 163,144.6 163.3,144.7 163.5,144.8 163.8,144.9 164,145 164.3,145.2 164.5,145.3 164.8,145.4 165,145.5 165.3,145.6 165.5,145.8 165.8,145.9 166,146 166.3,146.1 166.5,146.3 166.8,146.4 167,146.5 167.3,146.6 167.5,146.8 167.8,146.9 168,147.1 168.3,147.2 168.5,147.3 168.8,147.5 169,147.6 169.3,147.8 169.5,147.9 169.8,148.1 170,148.2 170.3,148.4 170.5,148.5 170.8,148.7 171,148.9 171.3,149 171.5,149.2 171.8,149.4 172,149.5 172.3,149.7 172.5,149.9 172.8,150.1 173,150.2 173.3,150.4 173.5,150.6 173.8,150.8 174,151 174.3,151.2 174.5,151.4 174.8,151.6 175,151.8 175.3,152 175.5,152.2 175.8,152.4 176,152.7 176.3,152.9 176.5,153.1 176.8,153.4 177,153.6 177.3,153.8 177.5,154.1 177.8,154.3 178,154.6 178.3,154.8 178.5,155.1 178.8,155.4 179,155.6 179.3,155.9 179.5,156.2 179.8,156.5 180,156.8 180.3,157.1 180.5,157.4 180.8,157.7 181,158 181.3,158.3 181.5,158.7 181.8,159 182,159.3 182.3,159.7 182.5,160 182.8,160.4 183,160.8 183.3,161.2 183.5,161.6 183.8,162 184,162.4 184.3,162.8 184.5,163.2 184.8,163.6 185,164.1 185.3,164.6 185.5,165 185.8,165.5 186,166 186.3,166.5 186.5,167 186.8,167.6 187,168.1 187.3,168.7 187.5,169.2 187.8,169.8 188,170.4 188.3,171.1 188.5,171.7 188.8,172.4 189,173.1 189.3,173.8 189.5,174.5 189.8,175.2 190,176 190.3,176.8 190.5,177.6 190.8,178.5 191,179.3 191.3,180.2 191.5,181.2 191.8,182.1 192,183.1 192.3,184.2 192.5,185.3 192.8,186.4 193,187.5 193.3,188.7 193.5,190 193.8,191.3 194,192.7 194.3,194.1 194.5,195.6 194.8,197.1 195,198.7 195.3,200.4 195.5,202.2 195.8,204 196,206 196.3,208.1 196.5,210.2 196.8,212.5 197,214.9 197.3,217.4 197.5,220.1 197.8,223 198,226 198.3,229.2 198.5,232.7 198.8,236.3 199,240.3 199.3,244.5 199.5,249.1 199.8,254 199.9,257.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="126.3,136 136.8,132.5 135.5,142.4" fill="currentColor"/>
  <polygon points="200.3,265.1 194.8,255.4 204.8,254.9" fill="currentColor"/>
  <polyline points="214.7,34 214.8,34.6 215,37.1 215.3,39.5 215.5,41.8 215.8,43.9 216,46 216.3,48 216.5,49.8 216.8,51.6 217,53.3 217.3,54.9 217.5,56.4 217.8,57.9 218,59.3 218.3,60.7 218.5,62 218.8,63.3 219,64.5 219.3,65.6 219.5,66.7 219.8,67.8 220,68.9 220.3,69.9 220.5,70.8 220.8,71.8 221,72.7 221.3,73.5 221.5,74.4 221.8,75.2 222,76 222.3,76.8 222.5,77.5 222.8,78.2 223,78.9 223.3,79.6 223.5,80.3 223.8,80.9 224,81.6 224.3,82.2 224.5,82.8 224.8,83.3 225,83.9 225.3,84.4 225.5,85 225.8,85.5 226,86 226.3,86.5 226.5,87 226.8,87.4 227,87.9 227.3,88.4 227.5,88.8 227.8,89.2 228,89.6 228.3,90 228.5,90.4 228.8,90.8 229,91.2 229.3,91.6 229.5,92 229.8,92.3 230,92.7 230.3,93 230.5,93.3 230.8,93.7 231,94 231.3,94.3 231.5,94.6 231.8,94.9 232,95.2 232.3,95.5 232.5,95.8 232.8,96.1 233,96.4 233.3,96.6 233.5,96.9 233.8,97.2 234,97.4 234.3,97.7 234.5,97.9 234.8,98.2 235,98.4 235.3,98.6 235.5,98.9 235.8,99.1 236,99.3 236.3,99.6 236.5,99.8 236.8,100 237,100.2 237.3,100.4 237.5,100.6 237.8,100.8 238,101 238.3,101.2 238.5,101.4 238.8,101.6 239,101.8 239.3,101.9 239.5,102.1 239.8,102.3 240,102.5 240.3,102.6 240.5,102.8 240.8,103 241,103.1 241.3,103.3 241.5,103.5 241.8,103.6 242,103.8 242.3,103.9 242.5,104.1 242.8,104.2 243,104.4 243.3,104.5 243.5,104.7 243.8,104.8 244,104.9 244.3,105.1 244.5,105.2 244.8,105.4 245,105.5 245.3,105.6 245.5,105.7 245.8,105.9 246,106 246.3,106.1 246.5,106.2 246.8,106.4 247,106.5 247.3,106.6 247.5,106.7 247.8,106.8 248,107 248.3,107.1 248.5,107.2 248.8,107.3 249,107.4 249.3,107.5 249.5,107.6 249.8,107.7 250,107.8 250.3,107.9 250.5,108 250.8,108.1 251,108.2 251.3,108.3 251.5,108.4 251.8,108.5 252,108.6 252.3,108.7 252.5,108.8 252.8,108.9 253,109 253.3,109.1 253.5,109.2 253.8,109.2 254,109.3 254.3,109.4 254.5,109.5 254.8,109.6 255,109.7 255.3,109.8 255.5,109.8 255.8,109.9 256,110 256.3,110.1 256.5,110.2 256.8,110.2 257,110.3 257.3,110.4 257.5,110.5 257.8,110.5 258,110.6 258.3,110.7 258.5,110.8 258.8,110.8 259,110.9 259.3,111 259.5,111 259.8,111.1 260,111.2 260.3,111.3 260.5,111.3 260.8,111.4 261,111.5 261.3,111.5 261.5,111.6 261.8,111.7 262,111.7 262.3,111.8 262.5,111.8 262.8,111.9 263,112 263.3,112 263.5,112.1 263.8,112.1 264,112.2 264.3,112.3 264.5,112.3 264.8,112.4 265,112.4 265.3,112.5 265.5,112.6 265.8,112.6 266,112.7 266.3,112.7 266.5,112.8 266.8,112.8 267,112.9 267.3,112.9 267.5,113 267.8,113 268,113.1 268.3,113.1 268.5,113.2 268.8,113.3 269,113.3 269.3,113.4 269.5,113.4 269.8,113.5 270,113.5 270.3,113.5 270.5,113.6 270.8,113.6 271,113.7 271.3,113.7 271.5,113.8 271.8,113.8 272,113.9 272.3,113.9 272.5,114 272.8,114 273,114.1 273.3,114.1 273.5,114.1 273.8,114.2 274,114.2 274.3,114.3 274.5,114.3 274.8,114.4 275,114.4 275.3,114.4 275.5,114.5 275.8,114.5 276,114.6 276.3,114.6 276.5,114.7 276.8,114.7 277,114.7 277.3,114.8 277.5,114.8 277.8,114.9 278,114.9 278.3,114.9 278.5,115 278.8,115 279,115 279.3,115.1 279.5,115.1 279.8,115.2 280,115.2 280.3,115.2 280.5,115.3 280.8,115.3 281,115.3 281.3,115.4 281.5,115.4 281.8,115.4 282,115.5 282.3,115.5 282.5,115.5 282.8,115.6 283,115.6 283.3,115.6 283.5,115.7 283.8,115.7 284,115.7 284.3,115.8 284.5,115.8 284.8,115.8 285,115.9 285.3,115.9 285.5,115.9 285.8,116 286,116 286.3,116 286.5,116.1 286.8,116.1 287,116.1 287.3,116.2 287.5,116.2 287.8,116.2 288,116.2 288.3,116.3 288.5,116.3 288.8,116.3 289,116.4 289.3,116.4 289.5,116.4 289.8,116.4 290,116.5 290.3,116.5 290.5,116.5 290.8,116.6 291,116.6 291.3,116.6 291.5,116.6 291.8,116.7 292,116.7 292.3,116.7 292.5,116.8 292.8,116.8 293,116.8 293.3,116.8 293.5,116.9 293.8,116.9 294,116.9 294.3,116.9 294.5,117 294.8,117 295,117 295.3,117 295.5,117.1 295.8,117.1 296,117.1 296.3,117.1 296.5,117.2 296.8,117.2 297,117.2 297.3,117.2 297.5,117.3 297.8,117.3 298,117.3 298,117.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="214,26 219.8,35.5 209.9,36.4" fill="currentColor"/>
  <polygon points="306,118 295.6,122.1 296.5,112.2" fill="currentColor"/>
  <circle cx="126" cy="136" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="228" y="59.3" font-size="13" fill="currentColor" text-anchor="start">x = 3</text>
</svg>
</div>
{{< callout type="info" >}}
  **Removable discontinuities of rational functions.** A **removable
  discontinuity** occurs in the graph of a rational function at $x=a$ if $a$
  is a zero for a factor in the denominator that is common with a factor in
  the numerator. We factor the numerator and denominator and check for
  common factors. If we find any, we set the common factor equal to 0 and
  solve. This is the location of the removable discontinuity. This is true
  if the multiplicity of this factor is greater than or equal to that in the
  denominator. If the multiplicity of this factor is greater in the
  denominator, then there is still an asymptote at that value.
{{< /callout >}}

**Example.** Find the vertical asymptotes and removable discontinuities of
the graph of $k(x)=\tfrac{x-2}{x^2-4}$.

**Solution.** Factor the numerator and the denominator.

$$k(x)=\tfrac{x-2}{(x-2)(x+2)}$$

Notice that there is a common factor in the numerator and the denominator,
$x-2$. The zero for this factor is $x=2$. This is the location of the
removable discontinuity.

Notice that there is a factor in the denominator that is not in the
numerator, $x+2$. The zero for this factor is $x=-2$. The vertical
asymptote is $x=-2$.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of k of x equals the quantity x−2 over x squared minus 4, which reduces to 1 over x+2. There is a vertical asymptote at x=−2 and an open circle marking a removable hole at (2, 1/4).","xMin":-8,"xMax":4,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":2,"rationals":[{"num":[-2,1],"den":[-4,0,1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2","labelSide":"right"}],"points":[{"at":[2,0.25],"open":true}]}'>
<svg role="img" aria-label="The graph of k of x equals the quantity x−2 over x squared minus 4, which reduces to 1 over x+2. There is a vertical asymptote at x=−2 and an open circle marking a removable hole at (2, 1/4)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="266" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="266" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="266" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="266" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="126" y1="266" x2="126" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="266" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="266" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
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
  <line x1="24" y1="146" x2="268" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="186" y1="24" x2="186" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,146 268,151 268,141" fill="currentColor"/>
  <polygon points="186,14 191,24 181,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="186,278 181,268 191,268" fill="currentColor"/>
  <text x="276" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="194" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="183" y1="266" x2="189" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="183" y1="226" x2="189" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="183" y1="186" x2="189" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="183" y1="106" x2="189" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="183" y1="66" x2="189" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="183" y1="26" x2="189" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="180" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="146" y1="272" x2="146" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,149.6 34,149.6 34.3,149.6 34.5,149.6 34.8,149.6 35,149.6 35.3,149.6 35.5,149.6 35.8,149.6 36,149.6 36.3,149.6 36.5,149.7 36.8,149.7 37,149.7 37.3,149.7 37.5,149.7 37.8,149.7 38,149.7 38.3,149.7 38.5,149.7 38.8,149.7 39,149.7 39.3,149.7 39.5,149.8 39.8,149.8 40,149.8 40.3,149.8 40.5,149.8 40.8,149.8 41,149.8 41.3,149.8 41.5,149.8 41.8,149.8 42,149.8 42.3,149.9 42.5,149.9 42.8,149.9 43,149.9 43.3,149.9 43.5,149.9 43.8,149.9 44,149.9 44.3,149.9 44.5,149.9 44.8,150 45,150 45.3,150 45.5,150 45.8,150 46,150 46.3,150 46.5,150 46.8,150 47,150 47.3,150.1 47.5,150.1 47.8,150.1 48,150.1 48.3,150.1 48.5,150.1 48.8,150.1 49,150.1 49.3,150.1 49.5,150.1 49.8,150.2 50,150.2 50.3,150.2 50.5,150.2 50.8,150.2 51,150.2 51.3,150.2 51.5,150.2 51.8,150.2 52,150.3 52.3,150.3 52.5,150.3 52.8,150.3 53,150.3 53.3,150.3 53.5,150.3 53.8,150.3 54,150.3 54.3,150.4 54.5,150.4 54.8,150.4 55,150.4 55.3,150.4 55.5,150.4 55.8,150.4 56,150.4 56.3,150.5 56.5,150.5 56.8,150.5 57,150.5 57.3,150.5 57.5,150.5 57.8,150.5 58,150.5 58.3,150.6 58.5,150.6 58.8,150.6 59,150.6 59.3,150.6 59.5,150.6 59.8,150.6 60,150.7 60.3,150.7 60.5,150.7 60.8,150.7 61,150.7 61.3,150.7 61.5,150.7 61.8,150.7 62,150.8 62.3,150.8 62.5,150.8 62.8,150.8 63,150.8 63.3,150.8 63.5,150.8 63.8,150.9 64,150.9 64.3,150.9 64.5,150.9 64.8,150.9 65,150.9 65.3,151 65.5,151 65.8,151 66,151 66.3,151 66.5,151 66.8,151 67,151.1 67.3,151.1 67.5,151.1 67.8,151.1 68,151.1 68.3,151.1 68.5,151.2 68.8,151.2 69,151.2 69.3,151.2 69.5,151.2 69.8,151.2 70,151.3 70.3,151.3 70.5,151.3 70.8,151.3 71,151.3 71.3,151.4 71.5,151.4 71.8,151.4 72,151.4 72.3,151.4 72.5,151.4 72.8,151.5 73,151.5 73.3,151.5 73.5,151.5 73.8,151.5 74,151.6 74.3,151.6 74.5,151.6 74.8,151.6 75,151.6 75.3,151.7 75.5,151.7 75.8,151.7 76,151.7 76.3,151.7 76.5,151.8 76.8,151.8 77,151.8 77.3,151.8 77.5,151.8 77.8,151.9 78,151.9 78.3,151.9 78.5,151.9 78.8,151.9 79,152 79.3,152 79.5,152 79.8,152 80,152.1 80.3,152.1 80.5,152.1 80.8,152.1 81,152.2 81.3,152.2 81.5,152.2 81.8,152.2 82,152.3 82.3,152.3 82.5,152.3 82.8,152.3 83,152.3 83.3,152.4 83.5,152.4 83.8,152.4 84,152.5 84.3,152.5 84.5,152.5 84.8,152.5 85,152.6 85.3,152.6 85.5,152.6 85.8,152.6 86,152.7 86.3,152.7 86.5,152.7 86.8,152.8 87,152.8 87.3,152.8 87.5,152.8 87.8,152.9 88,152.9 88.3,152.9 88.5,153 88.8,153 89,153 89.3,153 89.5,153.1 89.8,153.1 90,153.1 90.3,153.2 90.5,153.2 90.8,153.2 91,153.3 91.3,153.3 91.5,153.3 91.8,153.4 92,153.4 92.3,153.4 92.5,153.5 92.8,153.5 93,153.5 93.3,153.6 93.5,153.6 93.8,153.7 94,153.7 94.3,153.7 94.5,153.8 94.8,153.8 95,153.8 95.3,153.9 95.5,153.9 95.8,154 96,154 96.3,154 96.5,154.1 96.8,154.1 97,154.2 97.3,154.2 97.5,154.2 97.8,154.3 98,154.3 98.3,154.4 98.5,154.4 98.8,154.5 99,154.5 99.3,154.6 99.5,154.6 99.8,154.6 100,154.7 100.3,154.7 100.5,154.8 100.8,154.8 101,154.9 101.3,154.9 101.5,155 101.8,155 102,155.1 102.3,155.1 102.5,155.2 102.8,155.2 103,155.3 103.3,155.4 103.5,155.4 103.8,155.5 104,155.5 104.3,155.6 104.5,155.6 104.8,155.7 105,155.8 105.3,155.8 105.5,155.9 105.8,155.9 106,156 106.3,156.1 106.5,156.1 106.8,156.2 107,156.3 107.3,156.3 107.5,156.4 107.8,156.5 108,156.5 108.3,156.6 108.5,156.7 108.8,156.7 109,156.8 109.3,156.9 109.5,157 109.8,157 110,157.1 110.3,157.2 110.5,157.3 110.8,157.3 111,157.4 111.3,157.5 111.5,157.6 111.8,157.7 112,157.8 112.3,157.9 112.5,157.9 112.8,158 113,158.1 113.3,158.2 113.5,158.3 113.8,158.4 114,158.5 114.3,158.6 114.5,158.7 114.8,158.8 115,158.9 115.3,159 115.5,159.1 115.8,159.2 116,159.3 116.3,159.4 116.5,159.6 116.8,159.7 117,159.8 117.3,159.9 117.5,160 117.8,160.2 118,160.3 118.3,160.4 118.5,160.5 118.8,160.7 119,160.8 119.3,161 119.5,161.1 119.8,161.2 120,161.4 120.3,161.5 120.5,161.7 120.8,161.8 121,162 121.3,162.2 121.5,162.3 121.8,162.5 122,162.7 122.3,162.8 122.5,163 122.8,163.2 123,163.4 123.3,163.6 123.5,163.8 123.8,164 124,164.2 124.3,164.4 124.5,164.6 124.8,164.8 125,165 125.3,165.3 125.5,165.5 125.8,165.8 126,166 126.3,166.3 126.5,166.5 126.8,166.8 127,167.1 127.3,167.3 127.5,167.6 127.8,167.9 128,168.2 128.3,168.5 128.5,168.9 128.8,169.2 129,169.5 129.3,169.9 129.5,170.2 129.8,170.6 130,171 130.3,171.4 130.5,171.8 130.8,172.2 131,172.7 131.3,173.1 131.5,173.6 131.8,174.1 132,174.6 132.3,175.1 132.5,175.6 132.8,176.2 133,176.8 133.3,177.4 133.5,178 133.8,178.7 134,179.3 134.3,180 134.5,180.8 134.8,181.6 135,182.4 135.3,183.2 135.5,184.1 135.8,185 136,186 136.3,187 136.5,188.1 136.8,189.2 137,190.4 137.3,191.7 137.5,193.1 137.8,194.5 138,196 138.3,197.6 138.5,199.3 138.8,201.2 139,203.1 139.3,205.3 139.5,207.5 139.8,210 140,212.7 140.3,215.6 140.5,218.7 140.8,222.2 141,226 141.3,230.2 141.5,234.9 141.8,240.1 142,246 142.2,252.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,149.3 36.1,144.6 35.8,154.6" fill="currentColor"/>
  <polygon points="142.5,260.3 137.2,250.5 147.2,250.1" fill="currentColor"/>
  <polyline points="149.8,39.7 150,46 150.3,51.9 150.5,57.1 150.8,61.8 151,66 151.3,69.8 151.5,73.3 151.8,76.4 152,79.3 152.3,82 152.5,84.5 152.8,86.7 153,88.9 153.3,90.8 153.5,92.7 153.8,94.4 154,96 154.3,97.5 154.5,98.9 154.8,100.3 155,101.6 155.3,102.8 155.5,103.9 155.8,105 156,106 156.3,107 156.5,107.9 156.8,108.8 157,109.6 157.3,110.4 157.5,111.2 157.8,112 158,112.7 158.3,113.3 158.5,114 158.8,114.6 159,115.2 159.3,115.8 159.5,116.4 159.8,116.9 160,117.4 160.3,117.9 160.5,118.4 160.8,118.9 161,119.3 161.3,119.8 161.5,120.2 161.8,120.6 162,121 162.3,121.4 162.5,121.8 162.8,122.1 163,122.5 163.3,122.8 163.5,123.1 163.8,123.5 164,123.8 164.3,124.1 164.5,124.4 164.8,124.7 165,124.9 165.3,125.2 165.5,125.5 165.8,125.7 166,126 166.3,126.2 166.5,126.5 166.8,126.7 167,127 167.3,127.2 167.5,127.4 167.8,127.6 168,127.8 168.3,128 168.5,128.2 168.8,128.4 169,128.6 169.3,128.8 169.5,129 169.8,129.2 170,129.3 170.3,129.5 170.5,129.7 170.8,129.8 171,130 171.3,130.2 171.5,130.3 171.8,130.5 172,130.6 172.3,130.8 172.5,130.9 172.8,131 173,131.2 173.3,131.3 173.5,131.5 173.8,131.6 174,131.7 174.3,131.8 174.5,132 174.8,132.1 175,132.2 175.3,132.3 175.5,132.4 175.8,132.6 176,132.7 176.3,132.8 176.5,132.9 176.8,133 177,133.1 177.3,133.2 177.5,133.3 177.8,133.4 178,133.5 178.3,133.6 178.5,133.7 178.8,133.8 179,133.9 179.3,134 179.5,134.1 179.8,134.1 180,134.2 180.3,134.3 180.5,134.4 180.8,134.5 181,134.6 181.3,134.7 181.5,134.7 181.8,134.8 182,134.9 182.3,135 182.5,135 182.8,135.1 183,135.2 183.3,135.3 183.5,135.3 183.8,135.4 184,135.5 184.3,135.5 184.5,135.6 184.8,135.7 185,135.7 185.3,135.8 185.5,135.9 185.8,135.9 186,136 186.3,136.1 186.5,136.1 186.8,136.2 187,136.2 187.3,136.3 187.5,136.4 187.8,136.4 188,136.5 188.3,136.5 188.5,136.6 188.8,136.6 189,136.7 189.3,136.8 189.5,136.8 189.8,136.9 190,136.9 190.3,137 190.5,137 190.8,137.1 191,137.1 191.3,137.2 191.5,137.2 191.8,137.3 192,137.3 192.3,137.4 192.5,137.4 192.8,137.4 193,137.5 193.3,137.5 193.5,137.6 193.8,137.6 194,137.7 194.3,137.7 194.5,137.8 194.8,137.8 195,137.8 195.3,137.9 195.5,137.9 195.8,138 196,138 196.3,138 196.5,138.1 196.8,138.1 197,138.2 197.3,138.2 197.5,138.2 197.8,138.3 198,138.3 198.3,138.3 198.5,138.4 198.8,138.4 199,138.5 199.3,138.5 199.5,138.5 199.8,138.6 200,138.6 200.3,138.6 200.5,138.7 200.8,138.7 201,138.7 201.3,138.8 201.5,138.8 201.8,138.8 202,138.9 202.3,138.9 202.5,138.9 202.8,139 203,139 203.3,139 203.5,139 203.8,139.1 204,139.1 204.3,139.1 204.5,139.2 204.8,139.2 205,139.2 205.3,139.2 205.5,139.3 205.8,139.3 206,139.3 206.3,139.4 206.5,139.4 206.8,139.4 207,139.4 207.3,139.5 207.5,139.5 207.8,139.5 208,139.5 208.3,139.6 208.5,139.6 208.8,139.6 209,139.7 209.3,139.7 209.5,139.7 209.8,139.7 210,139.8 210.3,139.8 210.5,139.8 210.8,139.8 211,139.8 211.3,139.9 211.5,139.9 211.8,139.9 212,139.9 212.3,140 212.5,140 212.8,140 213,140 213.3,140.1 213.5,140.1 213.8,140.1 214,140.1 214.3,140.1 214.5,140.2 214.8,140.2 215,140.2 215.3,140.2 215.5,140.2 215.8,140.3 216,140.3 216.3,140.3 216.5,140.3 216.8,140.3 217,140.4 217.3,140.4 217.5,140.4 217.8,140.4 217.8,140.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="149.5,31.7 154.8,41.5 144.8,41.9" fill="currentColor"/>
  <polygon points="225.8,141 215.4,145.3 216.1,135.3" fill="currentColor"/>
  <polyline points="234.2,141.5 234.3,141.5 234.5,141.5 234.8,141.5 235,141.5 235.3,141.5 235.5,141.5 235.8,141.5 236,141.6 236.3,141.6 236.5,141.6 236.8,141.6 237,141.6 237.3,141.6 237.5,141.6 237.8,141.6 238,141.7 238.3,141.7 238.5,141.7 238.8,141.7 239,141.7 239.3,141.7 239.5,141.7 239.8,141.7 240,141.7 240.3,141.8 240.5,141.8 240.8,141.8 241,141.8 241.3,141.8 241.5,141.8 241.8,141.8 242,141.8 242.3,141.8 242.5,141.9 242.8,141.9 243,141.9 243.3,141.9 243.5,141.9 243.8,141.9 244,141.9 244.3,141.9 244.5,141.9 244.8,141.9 245,142 245.3,142 245.5,142 245.8,142 246,142 246.3,142 246.5,142 246.8,142 247,142 247.3,142 247.5,142.1 247.8,142.1 248,142.1 248.3,142.1 248.5,142.1 248.8,142.1 249,142.1 249.3,142.1 249.5,142.1 249.8,142.1 250,142.2 250.3,142.2 250.5,142.2 250.8,142.2 251,142.2 251.3,142.2 251.5,142.2 251.8,142.2 252,142.2 252.3,142.2 252.5,142.2 252.8,142.3 253,142.3 253.3,142.3 253.5,142.3 253.8,142.3 254,142.3 254.3,142.3 254.5,142.3 254.8,142.3 255,142.3 255.3,142.3 255.5,142.3 255.8,142.4 256,142.4 256.3,142.4 256.5,142.4 256.8,142.4 257,142.4 257.3,142.4 257.5,142.4 257.8,142.4 258,142.4 258,142.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="226.3,141 236.5,136.6 236,146.6" fill="currentColor"/>
  <polygon points="266,142.7 255.9,147.4 256.2,137.4" fill="currentColor"/>
  <circle cx="226" cy="141" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="162" y="79.4" font-size="13" fill="currentColor" text-anchor="start">x = −2</text>
</svg>
</div>
The graph of this function will have the vertical asymptote at $x=-2$, but
at $x=2$ the graph will have a hole.

{{< fillin
  question="Find the vertical asymptotes of $f(x)=\tfrac{x^2-25}{x^3-6x^2+5x}$. If there is more than one, separate them with a comma."
  answer="x=0,x=1"
  answerMode="unordered"
  answerDisplay="$x=0$ or $x=1$"
  hint="Factor numerator and denominator, cancel the common factor, then find where the reduced denominator is zero."
>}}

{{< fillin
  question="That same function has a removable discontinuity. Give it as an ordered pair $(x,y)$."
  answer="(5,\frac{1}{2})"
  answerDisplay="$(5,\tfrac{1}{2})$"
  hint="The common factor $x-5$ cancels; evaluate the reduced function at $x=5$ to get the missing point's $y$-value."
>}}

## Identifying horizontal asymptotes of rational functions

While vertical asymptotes describe the behavior of a graph as the
**output** gets very large or very small, horizontal asymptotes help
describe the behavior of a graph as the **input** gets very large or very
small. Recall that a polynomial's end behavior will mirror that of the
leading term. Likewise, a rational function's end behavior will mirror that
of the ratio of the leading terms of the numerator and denominator
functions.

There are three distinct outcomes when checking for horizontal asymptotes:

**Case 1:** If the degree of the denominator > degree of the numerator,
there is a **horizontal asymptote** at $y=0$.

Example: $f(x)=\tfrac{4x+2}{x^2+4x-5}$

In this case, the end behavior is $f(x)\approx\tfrac{4x}{x^2}=\tfrac{4}{x}$.
This tells us that, as the inputs increase or decrease without bound, this
function will behave similarly to the function $g(x)=\tfrac{4}{x}$, and the
outputs will approach zero, resulting in a horizontal asymptote at $y=0$.
See the graph below. Note that this graph crosses the horizontal asymptote.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the quantity 4x+2 over x squared plus 4x minus 5, with vertical asymptotes at x=−5 and x=1 and a horizontal asymptote at y=0 that the graph crosses near the origin.","xMin":-10,"xMax":10,"yMin":-3,"yMax":4,"unit":15,"tickLabels":true,"tickStep":1,"rationals":[{"num":[2,4],"den":[-5,4,1]}],"lines":[{"x":-5,"dashed":true,"arrows":false,"label":"x = −5","labelSide":"right"},{"x":1,"dashed":true,"arrows":false,"label":"x = 1","labelSide":"left"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0","labelSide":"left"}]}'>
<svg role="img" aria-label="The graph of f of x equals the quantity 4x+2 over x squared plus 4x minus 5, with vertical asymptotes at x=−5 and x=1 and a horizontal asymptote at y=0 that the graph crosses near the origin." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 157" width="352" height="157" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="131" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="41" y1="131" x2="41" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="131" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="71" y1="131" x2="71" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="131" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="101" y1="131" x2="101" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="131" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="131" y1="131" x2="131" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="131" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="161" y1="131" x2="161" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="191" y1="131" x2="191" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="131" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="221" y1="131" x2="221" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="131" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="251" y1="131" x2="251" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="131" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="281" y1="131" x2="281" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="296" y1="131" x2="296" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="311" y1="131" x2="311" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="131" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="131" x2="326" y2="131" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="326" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="101" x2="326" y2="101" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="71" x2="326" y2="71" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="56" x2="326" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="41" x2="326" y2="41" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="86" x2="328" y2="86" stroke="currentColor" stroke-width="1"/>
  <line x1="176" y1="24" x2="176" y2="133" stroke="currentColor" stroke-width="1"/>
  <polygon points="338,86 328,91 328,81" fill="currentColor"/>
  <polygon points="176,14 181,24 171,24" fill="currentColor"/>
  <polygon points="14,86 24,81 24,91" fill="currentColor"/>
  <polygon points="176,143 171,133 181,133" fill="currentColor"/>
  <text x="336" y="78" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="184" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="83" x2="26" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="101" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="41" y1="83" x2="41" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="41" y="101" font-size="11" fill="currentColor" text-anchor="middle">−9</text>
  <line x1="56" y1="83" x2="56" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="101" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="71" y1="83" x2="71" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="71" y="101" font-size="11" fill="currentColor" text-anchor="middle">−7</text>
  <line x1="86" y1="83" x2="86" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="101" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="101" y1="83" x2="101" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="101" y="101" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="116" y1="83" x2="116" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="101" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="131" y1="83" x2="131" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="131" y="101" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="146" y1="83" x2="146" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="101" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="161" y1="83" x2="161" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="161" y="101" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="191" y1="83" x2="191" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="191" y="101" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="206" y1="83" x2="206" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="101" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="221" y1="83" x2="221" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="221" y="101" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="236" y1="83" x2="236" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="101" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="251" y1="83" x2="251" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="251" y="101" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="83" x2="266" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="101" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="281" y1="83" x2="281" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="281" y="101" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="296" y1="83" x2="296" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="296" y="101" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="311" y1="83" x2="311" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="311" y="101" font-size="11" fill="currentColor" text-anchor="middle">9</text>
  <line x1="326" y1="83" x2="326" y2="89" stroke="currentColor" stroke-width="1"/>
  <text x="326" y="101" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="173" y1="131" x2="179" y2="131" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="135" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="173" y1="116" x2="179" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="120" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="173" y1="101" x2="179" y2="101" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="105" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="173" y1="71" x2="179" y2="71" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="75" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="173" y1="56" x2="179" y2="56" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="60" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="173" y1="41" x2="179" y2="41" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="45" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="173" y1="26" x2="179" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="101" y1="137" x2="101" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="191" y1="137" x2="191" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="86" x2="332" y2="86" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="33.9,97.5 34,97.5 34.3,97.5 34.5,97.6 34.8,97.6 35,97.7 35.3,97.7 35.5,97.8 35.8,97.8 36,97.8 36.3,97.9 36.5,97.9 36.8,98 37,98 37.3,98.1 37.5,98.1 37.8,98.1 38,98.2 38.3,98.2 38.5,98.3 38.8,98.3 39,98.4 39.3,98.4 39.5,98.5 39.8,98.5 40,98.6 40.3,98.6 40.5,98.7 40.8,98.7 41,98.8 41.3,98.8 41.5,98.8 41.8,98.9 42,99 42.3,99 42.5,99.1 42.8,99.1 43,99.2 43.3,99.2 43.5,99.3 43.8,99.3 44,99.4 44.3,99.4 44.5,99.5 44.8,99.5 45,99.6 45.3,99.7 45.5,99.7 45.8,99.8 46,99.8 46.3,99.9 46.5,99.9 46.8,100 47,100.1 47.3,100.1 47.5,100.2 47.8,100.2 48,100.3 48.3,100.4 48.5,100.4 48.7,100.5 49,100.6 49.3,100.6 49.5,100.7 49.8,100.8 50,100.8 50.3,100.9 50.5,101 50.8,101 51,101.1 51.3,101.2 51.5,101.2 51.8,101.3 52,101.4 52.3,101.5 52.5,101.5 52.8,101.6 53,101.7 53.3,101.8 53.5,101.8 53.8,101.9 54,102 54.3,102.1 54.5,102.2 54.7,102.2 55,102.3 55.2,102.4 55.5,102.5 55.8,102.6 56,102.7 56.3,102.8 56.5,102.8 56.8,102.9 57,103 57.3,103.1 57.5,103.2 57.8,103.3 58,103.4 58.3,103.5 58.5,103.6 58.8,103.7 59,103.8 59.3,103.9 59.5,104 59.8,104.1 60,104.2 60.3,104.3 60.5,104.4 60.8,104.5 61,104.6 61.3,104.7 61.5,104.8 61.8,104.9 62,105.1 62.2,105.2 62.5,105.3 62.8,105.4 63,105.5 63.3,105.6 63.5,105.8 63.8,105.9 64,106 64.3,106.1 64.5,106.3 64.8,106.4 65,106.5 65.3,106.7 65.5,106.8 65.8,106.9 66,107.1 66.3,107.2 66.5,107.4 66.8,107.5 67,107.7 67.3,107.8 67.5,108 67.8,108.1 68,108.3 68.3,108.4 68.5,108.6 68.8,108.8 69,108.9 69.3,109.1 69.5,109.3 69.7,109.5 70,109.6 70.3,109.8 70.5,110 70.8,110.2 71,110.4 71.3,110.6 71.5,110.8 71.8,111 72,111.2 72.3,111.4 72.5,111.6 72.8,111.8 73,112 73.3,112.2 73.5,112.5 73.8,112.7 74,112.9 74.3,113.2 74.5,113.4 74.8,113.6 75,113.9 75.3,114.2 75.5,114.4 75.8,114.7 76,115 76.3,115.2 76.5,115.5 76.8,115.8 77,116.1 77.2,116.4 77.5,116.7 77.8,117 78,117.3 78.3,117.7 78.5,118 78.8,118.3 79,118.7 79.3,119 79.5,119.4 79.8,119.8 80,120.2 80.3,120.6 80.5,121 80.8,121.4 81,121.8 81.3,122.2 81.5,122.7 81.8,123.1 82,123.6 82,123.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,96.4 36.6,92.8 35.2,102.7" fill="currentColor"/>
  <polygon points="85.3,131 76.7,123.8 85.8,119.8" fill="currentColor"/>
  <polyline points="113.3,33.9 113.5,34.9 113.8,36 114,37 114.3,38 114.5,38.9 114.8,39.9 115,40.7 115.3,41.6 115.5,42.4 115.8,43.2 116,44 116.3,44.7 116.5,45.5 116.8,46.2 117,46.9 117.3,47.5 117.5,48.2 117.8,48.8 118,49.4 118.3,50 118.5,50.5 118.8,51.1 119,51.6 119.3,52.1 119.5,52.7 119.8,53.2 120,53.6 120.3,54.1 120.5,54.6 120.8,55 121,55.5 121.3,55.9 121.5,56.3 121.8,56.7 122,57.1 122.3,57.5 122.5,57.9 122.8,58.3 123,58.6 123.3,59 123.5,59.3 123.8,59.7 124,60 124.3,60.3 124.5,60.7 124.8,61 125,61.3 125.3,61.6 125.5,61.9 125.8,62.2 126,62.5 126.3,62.7 126.5,63 126.8,63.3 127,63.6 127.3,63.8 127.5,64.1 127.8,64.3 128,64.6 128.3,64.8 128.5,65.1 128.8,65.3 129,65.5 129.3,65.7 129.5,66 129.8,66.2 130,66.4 130.3,66.6 130.5,66.8 130.8,67 131,67.3 131.3,67.5 131.5,67.7 131.8,67.8 132,68 132.3,68.2 132.5,68.4 132.8,68.6 133,68.8 133.3,69 133.5,69.1 133.8,69.3 134,69.5 134.3,69.7 134.5,69.8 134.8,70 135,70.2 135.3,70.3 135.5,70.5 135.8,70.6 136,70.8 136.3,71 136.5,71.1 136.8,71.3 137,71.4 137.3,71.6 137.5,71.7 137.8,71.9 138,72 138.3,72.1 138.5,72.3 138.8,72.4 139,72.6 139.3,72.7 139.5,72.8 139.8,73 140,73.1 140.3,73.2 140.5,73.4 140.8,73.5 141,73.6 141.3,73.8 141.5,73.9 141.8,74 142,74.1 142.3,74.3 142.5,74.4 142.8,74.5 143,74.6 143.3,74.7 143.5,74.9 143.8,75 144,75.1 144.3,75.2 144.5,75.3 144.8,75.4 145,75.6 145.3,75.7 145.5,75.8 145.8,75.9 146,76 146.3,76.1 146.5,76.2 146.8,76.3 147,76.4 147.3,76.5 147.5,76.7 147.8,76.8 148,76.9 148.3,77 148.5,77.1 148.8,77.2 149,77.3 149.3,77.4 149.5,77.5 149.8,77.6 150,77.7 150.3,77.8 150.5,77.9 150.8,78 151,78.1 151.3,78.2 151.5,78.3 151.8,78.4 152,78.5 152.3,78.6 152.5,78.7 152.8,78.8 153,78.9 153.3,79 153.5,79.1 153.8,79.2 154,79.3 154.3,79.4 154.5,79.5 154.8,79.6 155,79.8 155.3,79.9 155.5,80 155.8,80.1 156,80.2 156.3,80.3 156.5,80.4 156.8,80.5 157,80.6 157.3,80.7 157.5,80.8 157.8,80.9 158,81 158.3,81.1 158.5,81.2 158.8,81.3 159,81.4 159.3,81.5 159.5,81.6 159.8,81.7 160,81.8 160.3,81.9 160.5,82 160.8,82.1 161,82.3 161.3,82.4 161.5,82.5 161.8,82.6 162,82.7 162.3,82.8 162.5,82.9 162.8,83 163,83.1 163.3,83.3 163.5,83.4 163.8,83.5 164,83.6 164.3,83.7 164.5,83.9 164.8,84 165,84.1 165.3,84.2 165.5,84.4 165.8,84.5 166,84.6 166.3,84.7 166.5,84.9 166.8,85 167,85.1 167.3,85.3 167.5,85.4 167.8,85.6 168,85.7 168.3,85.9 168.5,86 168.8,86.1 169,86.3 169.3,86.5 169.5,86.6 169.8,86.8 170,86.9 170.3,87.1 170.5,87.3 170.8,87.4 171,87.6 171.3,87.8 171.5,88 171.8,88.1 172,88.3 172.3,88.5 172.5,88.7 172.8,88.9 173,89.1 173.3,89.3 173.5,89.5 173.8,89.8 174,90 174.3,90.2 174.5,90.5 174.8,90.7 175,90.9 175.3,91.2 175.5,91.5 175.8,91.7 176,92 176.3,92.3 176.5,92.6 176.8,92.9 177,93.2 177.3,93.5 177.5,93.8 177.8,94.2 178,94.5 178.3,94.9 178.5,95.3 178.8,95.7 179,96.1 179.3,96.5 179.5,97 179.8,97.4 180,97.9 180.3,98.4 180.5,98.9 180.8,99.5 181,100.1 181.3,100.7 181.5,101.3 181.8,102 182,102.7 182.3,103.4 182.5,104.2 182.8,105 183,105.9 183.3,106.8 183.5,107.8 183.8,108.9 184,110 184.3,111.2 184.5,112.5 184.8,113.9 185,115.5 185.3,117.1 185.5,118.9 185.7,120.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="111.8,26 118.6,34.9 108.7,36.8" fill="currentColor"/>
  <polygon points="186.5,128.1 180.5,118.7 190.4,117.6" fill="currentColor"/>
  <polyline points="196.3,36.8 196.5,38 196.8,39.8 197,41.5 197.3,43 197.5,44.4 197.8,45.7 198,46.9 198.3,48 198.5,49.1 198.8,50.1 199,51 199.3,51.9 199.5,52.7 199.8,53.5 200,54.2 200.3,54.9 200.5,55.5 200.8,56.2 201,56.7 201.3,57.3 201.5,57.9 201.8,58.4 202,58.9 202.3,59.3 202.5,59.8 202.8,60.2 203,60.6 203.3,61 203.5,61.4 203.8,61.8 204,62.1 204.3,62.5 204.5,62.8 204.8,63.1 205,63.4 205.3,63.7 205.5,64 205.8,64.3 206,64.6 206.3,64.8 206.5,65.1 206.8,65.3 207,65.6 207.3,65.8 207.5,66 207.8,66.2 208,66.5 208.3,66.7 208.5,66.9 208.8,67.1 209,67.2 209.3,67.4 209.5,67.6 209.8,67.8 210,68 210.3,68.1 210.5,68.3 210.8,68.5 211,68.6 211.3,68.8 211.5,68.9 211.8,69.1 212,69.2 212.3,69.3 212.5,69.5 212.8,69.6 213,69.7 213.3,69.9 213.5,70 213.8,70.1 214,70.2 214.3,70.4 214.5,70.5 214.8,70.6 215,70.7 215.3,70.8 215.5,70.9 215.8,71 216,71.1 216.3,71.2 216.5,71.3 216.8,71.4 217,71.5 217.3,71.6 217.5,71.7 217.8,71.8 218,71.9 218.3,72 218.5,72.1 218.8,72.2 219,72.2 219.3,72.3 219.5,72.4 219.8,72.5 220,72.6 220.3,72.6 220.5,72.7 220.8,72.8 221,72.9 221.3,72.9 221.5,73 221.8,73.1 222,73.2 222.3,73.2 222.5,73.3 222.8,73.4 223,73.4 223.3,73.5 223.5,73.6 223.8,73.6 224,73.7 224.3,73.8 224.5,73.8 224.8,73.9 225,73.9 225.3,74 225.5,74.1 225.8,74.1 226,74.2 226.3,74.2 226.5,74.3 226.8,74.3 227,74.4 227.3,74.4 227.5,74.5 227.8,74.6 228,74.6 228.3,74.7 228.5,74.7 228.8,74.8 229,74.8 229.3,74.9 229.5,74.9 229.8,75 230,75 230.3,75 230.5,75.1 230.8,75.1 231,75.2 231.3,75.2 231.5,75.3 231.8,75.3 232,75.4 232.3,75.4 232.5,75.4 232.8,75.5 233,75.5 233.3,75.6 233.5,75.6 233.8,75.7 234,75.7 234.3,75.7 234.5,75.8 234.8,75.8 235,75.8 235.3,75.9 235.5,75.9 235.8,76 236,76 236.3,76 236.5,76.1 236.8,76.1 237,76.1 237.3,76.2 237.5,76.2 237.8,76.3 238,76.3 238.3,76.3 238.5,76.4 238.8,76.4 239,76.4 239.3,76.5 239.5,76.5 239.8,76.5 240,76.6 240.3,76.6 240.5,76.6 240.8,76.6 241,76.7 241.3,76.7 241.5,76.7 241.8,76.8 242,76.8 242.3,76.8 242.5,76.9 242.8,76.9 243,76.9 243.3,76.9 243.5,77 243.8,77 244,77 244.3,77.1 244.5,77.1 244.8,77.1 245,77.1 245.3,77.2 245.5,77.2 245.8,77.2 246,77.3 246.3,77.3 246.5,77.3 246.8,77.3 247,77.4 247.3,77.4 247.5,77.4 247.8,77.4 248,77.5 248.3,77.5 248.5,77.5 248.8,77.5 249,77.6 249.3,77.6 249.5,77.6 249.8,77.6 250,77.7 250.3,77.7 250.5,77.7 250.8,77.7 251,77.8 251.3,77.8 251.5,77.8 251.8,77.8 252,77.8 252.3,77.9 252.5,77.9 252.8,77.9 253,77.9 253.3,78 253.5,78 253.8,78 254,78 254.3,78 254.5,78.1 254.8,78.1 255,78.1 255.3,78.1 255.5,78.1 255.8,78.2 256,78.2 256.3,78.2 256.5,78.2 256.8,78.2 257,78.3 257.3,78.3 257.5,78.3 257.8,78.3 258,78.3 258.3,78.4 258.5,78.4 258.8,78.4 259,78.4 259.3,78.4 259.5,78.5 259.8,78.5 260,78.5 260.3,78.5 260.5,78.5 260.8,78.5 261,78.6 261.3,78.6 261.5,78.6 261.8,78.6 262,78.6 262.3,78.7 262.5,78.7 262.8,78.7 263,78.7 263.3,78.7 263.5,78.7 263.8,78.8 264,78.8 264.3,78.8 264.5,78.8 264.8,78.8 265,78.8 265.3,78.9 265.5,78.9 265.8,78.9 266,78.9 266.3,78.9 266.5,78.9 266.8,79 267,79 267.3,79 267.5,79 267.8,79 268,79 268.3,79.1 268.5,79.1 268.8,79.1 269,79.1 269.3,79.1 269.5,79.1 269.8,79.1 270,79.2 270.3,79.2 270.5,79.2 270.8,79.2 271,79.2 271.3,79.2 271.5,79.2 271.8,79.3 272,79.3 272.3,79.3 272.5,79.3 272.8,79.3 273,79.3 273.3,79.3 273.5,79.4 273.8,79.4 274,79.4 274.3,79.4 274.5,79.4 274.8,79.4 275,79.4 275.3,79.5 275.5,79.5 275.8,79.5 276,79.5 276.3,79.5 276.5,79.5 276.8,79.5 277,79.5 277.3,79.6 277.5,79.6 277.8,79.6 278,79.6 278.3,79.6 278.5,79.6 278.8,79.6 279,79.7 279.3,79.7 279.5,79.7 279.8,79.7 280,79.7 280.3,79.7 280.5,79.7 280.8,79.7 281,79.8 281.3,79.8 281.5,79.8 281.8,79.8 282,79.8 282.3,79.8 282.5,79.8 282.8,79.8 283,79.8 283.3,79.9 283.5,79.9 283.8,79.9 284,79.9 284.3,79.9 284.5,79.9 284.8,79.9 285,79.9 285.3,79.9 285.5,80 285.8,80 286,80 286.3,80 286.5,80 286.8,80 287,80 287.3,80 287.5,80 287.8,80.1 288,80.1 288.3,80.1 288.5,80.1 288.8,80.1 289,80.1 289.3,80.1 289.5,80.1 289.8,80.1 290,80.2 290.3,80.2 290.5,80.2 290.8,80.2 291,80.2 291.3,80.2 291.5,80.2 291.8,80.2 292,80.2 292.3,80.2 292.5,80.3 292.8,80.3 293,80.3 293.3,80.3 293.5,80.3 293.8,80.3 294,80.3 294.3,80.3 294.5,80.3 294.8,80.3 295,80.4 295.3,80.4 295.5,80.4 295.8,80.4 296,80.4 296.3,80.4 296.5,80.4 296.8,80.4 297,80.4 297.3,80.4 297.5,80.5 297.8,80.5 298,80.5 298.3,80.5 298.5,80.5 298.8,80.5 299,80.5 299.3,80.5 299.5,80.5 299.8,80.5 300,80.5 300.3,80.6 300.5,80.6 300.8,80.6 301,80.6 301.3,80.6 301.5,80.6 301.8,80.6 302,80.6 302.3,80.6 302.5,80.6 302.8,80.6 303,80.6 303.3,80.7 303.5,80.7 303.8,80.7 304,80.7 304.3,80.7 304.5,80.7 304.8,80.7 305,80.7 305.3,80.7 305.5,80.7 305.8,80.7 306,80.8 306.3,80.8 306.5,80.8 306.8,80.8 307,80.8 307.3,80.8 307.5,80.8 307.8,80.8 308,80.8 308.3,80.8 308.5,80.8 308.8,80.8 309,80.8 309.3,80.9 309.5,80.9 309.8,80.9 310,80.9 310.3,80.9 310.5,80.9 310.8,80.9 311,80.9 311.3,80.9 311.5,80.9 311.8,80.9 312,80.9 312.3,80.9 312.5,81 312.8,81 313,81 313.3,81 313.5,81 313.8,81 314,81 314.3,81 314.5,81 314.8,81 315,81 315.3,81 315.5,81 315.8,81.1 316,81.1 316.3,81.1 316.5,81.1 316.8,81.1 317,81.1 317.3,81.1 317.5,81.1 317.8,81.1 318,81.1 318,81.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="195.5,28.9 201.5,38.3 191.6,39.3" fill="currentColor"/>
  <polygon points="326,81.3 315.9,86.1 316.1,76.1" fill="currentColor"/>
  <text x="117" y="111.8" font-size="13" fill="currentColor" text-anchor="start">x = −5</text>
  <text x="169" y="49.7" font-size="13" fill="currentColor" text-anchor="end">x = 1</text>
  <text x="288.3" y="68" font-size="13" fill="currentColor" text-anchor="middle">y = 0</text>
</svg>
</div>
**Case 2:** If the degree of the denominator < degree of the numerator by
one, we get a slant asymptote.

Example: $f(x)=\tfrac{3x^2-2x+1}{x-1}$

In this case, the end behavior is $f(x)\approx\tfrac{3x^2}{x}=3x$. This
tells us that as the inputs increase or decrease without bound, this
function will behave similarly to the function $g(x)=3x$. As the inputs
grow large, the outputs will grow and not level off, so this graph has no
horizontal asymptote. However, the graph of $g(x)=3x$ looks like a diagonal
line, and since $f$ will behave similarly to $g$, it will approach a line
close to $y=3x$. This line is a slant asymptote.

To find the equation of the slant asymptote, divide
$\tfrac{3x^2-2x+1}{x-1}$. The quotient is $3x+1$, and the remainder is 2.
The slant asymptote is the graph of the line $g(x)=3x+1$. See the graph
below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the quantity 3x squared minus 2x plus 1 over x−1, with a vertical asymptote at x=1 and a dashed slant asymptote along y=3x+1.","xMin":-5,"xMax":5,"yMin":-12,"yMax":12,"unit":20,"tickLabels":true,"tickStep":2,"rationals":[{"num":[1,-2,3],"den":[-1,1]}],"lines":[{"x":1,"dashed":true,"arrows":false,"label":"x = 1","labelSide":"right"},{"slope":3,"intercept":1,"dashed":true,"arrows":false,"label":"y = 3x + 1","labelSide":"right"}]}'>
<svg role="img" aria-label="The graph of f of x equals the quantity 3x squared minus 2x plus 1 over x−1, with a vertical asymptote at x=1 and a dashed slant asymptote along y=3x+1." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 532" width="252" height="532" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="506" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="46" y1="506" x2="46" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="66" y1="506" x2="66" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="506" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="106" y1="506" x2="106" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="506" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="166" y1="506" x2="166" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="186" y1="506" x2="186" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="506" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="226" y1="506" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="506" x2="226" y2="506" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="486" x2="226" y2="486" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="466" x2="226" y2="466" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="446" x2="226" y2="446" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="426" x2="226" y2="426" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="406" x2="226" y2="406" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="386" x2="226" y2="386" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="366" x2="226" y2="366" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="346" x2="226" y2="346" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="226" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="306" x2="226" y2="306" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="286" x2="226" y2="286" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="226" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="226" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="226" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="226" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="226" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="226" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="226" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="226" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="226" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="226" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="226" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="226" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="266" x2="228" y2="266" stroke="currentColor" stroke-width="1"/>
  <line x1="126" y1="24" x2="126" y2="508" stroke="currentColor" stroke-width="1"/>
  <polygon points="238,266 228,271 228,261" fill="currentColor"/>
  <polygon points="126,14 131,24 121,24" fill="currentColor"/>
  <polygon points="14,266 24,261 24,271" fill="currentColor"/>
  <polygon points="126,518 121,508 131,508" fill="currentColor"/>
  <text x="236" y="258" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="134" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="46" y1="263" x2="46" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="281" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="263" x2="86" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="281" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="166" y1="263" x2="166" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="281" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="263" x2="206" y2="269" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="281" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="123" y1="506" x2="129" y2="506" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="510" font-size="11" fill="currentColor" text-anchor="end">−12</text>
  <line x1="123" y1="466" x2="129" y2="466" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="470" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="123" y1="426" x2="129" y2="426" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="430" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="123" y1="386" x2="129" y2="386" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="390" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="123" y1="346" x2="129" y2="346" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="350" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="123" y1="306" x2="129" y2="306" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="310" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="123" y1="226" x2="129" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="230" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="123" y1="186" x2="129" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="190" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="123" y1="146" x2="129" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="150" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="123" y1="106" x2="129" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="110" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="123" y1="66" x2="129" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="70" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="123" y1="26" x2="129" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="30" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="146" y1="512" x2="146" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="37.3" y1="512" x2="201.3" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="44.6,498.1 44.8,497.7 45,496.9 45.3,496.2 45.5,495.5 45.8,494.7 46,494 46.3,493.3 46.5,492.5 46.8,491.8 47,491.1 47.3,490.4 47.5,489.6 47.8,488.9 48,488.2 48.3,487.4 48.5,486.7 48.8,486 49,485.2 49.3,484.5 49.5,483.8 49.8,483.1 50,482.3 50.3,481.6 50.5,480.9 50.8,480.1 51,479.4 51.3,478.7 51.5,478 51.8,477.2 52,476.5 52.3,475.8 52.5,475.1 52.8,474.3 53,473.6 53.3,472.9 53.5,472.1 53.8,471.4 54,470.7 54.3,470 54.5,469.2 54.8,468.5 55,467.8 55.3,467.1 55.5,466.3 55.8,465.6 56,464.9 56.3,464.2 56.5,463.4 56.8,462.7 57,462 57.3,461.3 57.5,460.5 57.8,459.8 58,459.1 58.3,458.4 58.5,457.6 58.8,456.9 59,456.2 59.3,455.5 59.5,454.7 59.8,454 60,453.3 60.3,452.6 60.5,451.9 60.8,451.1 61,450.4 61.3,449.7 61.5,449 61.8,448.2 62,447.5 62.3,446.8 62.5,446.1 62.8,445.4 63,444.6 63.3,443.9 63.5,443.2 63.8,442.5 64,441.8 64.3,441 64.5,440.3 64.8,439.6 65,438.9 65.3,438.2 65.5,437.4 65.8,436.7 66,436 66.3,435.3 66.5,434.6 66.8,433.8 67,433.1 67.3,432.4 67.5,431.7 67.8,431 68,430.3 68.3,429.5 68.5,428.8 68.8,428.1 69,427.4 69.3,426.7 69.5,426 69.8,425.2 70,424.5 70.3,423.8 70.5,423.1 70.8,422.4 71,421.7 71.3,421 71.5,420.2 71.8,419.5 72,418.8 72.3,418.1 72.5,417.4 72.8,416.7 73,416 73.3,415.2 73.5,414.5 73.8,413.8 74,413.1 74.3,412.4 74.5,411.7 74.8,411 75,410.3 75.3,409.6 75.5,408.8 75.8,408.1 76,407.4 76.3,406.7 76.5,406 76.8,405.3 77,404.6 77.3,403.9 77.5,403.2 77.8,402.5 78,401.8 78.3,401.1 78.5,400.4 78.8,399.6 79,398.9 79.3,398.2 79.5,397.5 79.8,396.8 80,396.1 80.3,395.4 80.5,394.7 80.8,394 81,393.3 81.3,392.6 81.5,391.9 81.8,391.2 82,390.5 82.3,389.8 82.5,389.1 82.8,388.4 83,387.7 83.3,387 83.5,386.3 83.8,385.6 84,384.9 84.3,384.2 84.5,383.5 84.8,382.8 85,382.1 85.3,381.4 85.5,380.7 85.8,380 86,379.3 86.3,378.6 86.5,377.9 86.8,377.3 87,376.6 87.3,375.9 87.5,375.2 87.8,374.5 88,373.8 88.3,373.1 88.5,372.4 88.8,371.7 89,371 89.3,370.3 89.5,369.7 89.8,369 90,368.3 90.3,367.6 90.5,366.9 90.8,366.2 91,365.5 91.3,364.9 91.5,364.2 91.8,363.5 92,362.8 92.3,362.1 92.5,361.5 92.8,360.8 93,360.1 93.3,359.4 93.5,358.7 93.8,358.1 94,357.4 94.3,356.7 94.5,356 94.8,355.4 95,354.7 95.3,354 95.5,353.3 95.8,352.7 96,352 96.3,351.3 96.5,350.7 96.8,350 97,349.3 97.3,348.7 97.5,348 97.8,347.3 98,346.7 98.3,346 98.5,345.3 98.8,344.7 99,344 99.3,343.4 99.5,342.7 99.8,342 100,341.4 100.3,340.7 100.5,340.1 100.8,339.4 101,338.8 101.3,338.1 101.5,337.5 101.8,336.8 102,336.2 102.3,335.5 102.5,334.9 102.8,334.2 103,333.6 103.3,333 103.5,332.3 103.8,331.7 104,331 104.3,330.4 104.5,329.8 104.8,329.1 105,328.5 105.3,327.9 105.5,327.3 105.8,326.6 106,326 106.3,325.4 106.5,324.8 106.8,324.1 107,323.5 107.3,322.9 107.5,322.3 107.8,321.7 108,321.1 108.3,320.4 108.5,319.8 108.8,319.2 109,318.6 109.3,318 109.5,317.4 109.8,316.8 110,316.2 110.3,315.6 110.5,315 110.8,314.4 111,313.9 111.3,313.3 111.5,312.7 111.8,312.1 112,311.5 112.3,311 112.5,310.4 112.8,309.8 113,309.2 113.3,308.7 113.5,308.1 113.8,307.6 114,307 114.3,306.4 114.5,305.9 114.8,305.4 115,304.8 115.3,304.3 115.5,303.7 115.8,303.2 116,302.7 116.3,302.1 116.5,301.6 116.8,301.1 117,300.6 117.3,300.1 117.5,299.6 117.8,299.1 118,298.6 118.3,298.1 118.5,297.6 118.8,297.1 119,296.6 119.3,296.2 119.5,295.7 119.8,295.2 120,294.8 120.3,294.3 120.5,293.9 120.8,293.4 121,293 121.3,292.6 121.5,292.2 121.8,291.7 122,291.3 122.3,290.9 122.5,290.5 122.8,290.2 123,289.8 123.3,289.4 123.5,289.1 123.8,288.7 124,288.4 124.3,288 124.5,287.7 124.8,287.4 125,287.1 125.3,286.8 125.5,286.5 125.8,286.3 126,286 126.3,285.8 126.5,285.5 126.8,285.3 127,285.1 127.3,284.9 127.5,284.7 127.8,284.6 128,284.4 128.3,284.3 128.5,284.2 128.8,284.1 129,284.1 129.3,284 129.5,284 129.8,284 130,284 130.3,284 130.5,284.1 130.8,284.2 131,284.3 131.3,284.5 131.5,284.7 131.8,284.9 132,285.1 132.3,285.4 132.5,285.8 132.8,286.1 133,286.5 133.3,287 133.5,287.5 133.8,288.1 134,288.7 134.3,289.3 134.5,290.1 134.8,290.9 135,291.7 135.3,292.7 135.5,293.7 135.8,294.8 136,296 136.3,297.3 136.5,298.7 136.8,300.2 137,301.9 137.3,303.7 137.5,305.6 137.8,307.7 138,310 138.3,312.5 138.5,315.2 138.8,318.1 139,321.3 139.3,324.8 139.5,328.6 139.8,332.8 140,337.3 140.3,342.4 140.5,348 140.8,354.1 141,361 141.3,368.7 141.5,377.3 141.8,387 142,398 142.3,410.6 142.5,425.1 142.8,441.9 143,461.7 143.2,477.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="42,505.7 40.5,494.6 50,497.8" fill="currentColor"/>
  <polygon points="143.3,485.2 138.1,475.2 148.1,475.1" fill="currentColor"/>
  <polyline points="152.2,37.6 152.3,39.3 152.5,43.4 152.8,47.2 153,50.7 153.3,53.9 153.5,56.8 153.8,59.5 154,62 154.3,64.3 154.5,66.4 154.8,68.3 155,70.1 155.3,71.8 155.5,73.3 155.8,74.7 156,76 156.3,77.2 156.5,78.3 156.8,79.3 157,80.3 157.3,81.1 157.5,81.9 157.8,82.7 158,83.3 158.3,83.9 158.5,84.5 158.8,85 159,85.5 159.3,85.9 159.5,86.2 159.8,86.6 160,86.9 160.3,87.1 160.5,87.3 160.8,87.5 161,87.7 161.3,87.8 161.5,87.9 161.8,88 162,88 162.3,88 162.5,88 162.8,88 163,87.9 163.3,87.9 163.5,87.8 163.8,87.7 164,87.6 164.3,87.4 164.5,87.3 164.8,87.1 165,86.9 165.3,86.7 165.5,86.5 165.8,86.2 166,86 166.3,85.7 166.5,85.5 166.8,85.2 167,84.9 167.3,84.6 167.5,84.3 167.8,84 168,83.6 168.3,83.3 168.5,82.9 168.8,82.6 169,82.2 169.3,81.8 169.5,81.5 169.8,81.1 170,80.7 170.3,80.3 170.5,79.8 170.8,79.4 171,79 171.3,78.6 171.5,78.1 171.8,77.7 172,77.2 172.3,76.8 172.5,76.3 172.8,75.8 173,75.4 173.3,74.9 173.5,74.4 173.8,73.9 174,73.4 174.3,72.9 174.5,72.4 174.8,71.9 175,71.4 175.3,70.9 175.5,70.4 175.8,69.9 176,69.3 176.3,68.8 176.5,68.3 176.8,67.7 177,67.2 177.3,66.7 177.5,66.1 177.8,65.6 178,65 178.3,64.4 178.5,63.9 178.8,63.3 179,62.8 179.3,62.2 179.5,61.6 179.8,61 180,60.5 180.3,59.9 180.5,59.3 180.8,58.7 181,58.1 181.3,57.6 181.5,57 181.8,56.4 182,55.8 182.3,55.2 182.5,54.6 182.8,54 183,53.4 183.3,52.8 183.5,52.2 183.8,51.6 184,50.9 184.3,50.3 184.5,49.7 184.8,49.1 185,48.5 185.3,47.9 185.5,47.2 185.8,46.6 186,46 186.3,45.4 186.5,44.7 186.8,44.1 187,43.5 187.3,42.9 187.5,42.2 187.8,41.6 188,41 188.3,40.3 188.5,39.7 188.8,39 189,38.4 189.3,37.8 189.5,37.1 189.8,36.5 190,35.8 190.3,35.2 190.5,34.5 190.6,34.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="151.8,29.6 157.3,39.3 147.3,39.9" fill="currentColor"/>
  <polygon points="193.5,26.7 194.6,37.8 185.3,34.2" fill="currentColor"/>
  <text x="162" y="211" font-size="13" fill="currentColor" text-anchor="start">x = 1</text>
  <text x="180.4" y="137.3" font-size="13" fill="currentColor" text-anchor="start">y = 3x + 1</text>
</svg>
</div>
**Case 3:** If the degree of the denominator = degree of the numerator,
there is a horizontal asymptote at $y=\tfrac{a_n}{b_n}$, where $a_n$ and
$b_n$ are the leading coefficients of $p(x)$ and $q(x)$ for
$f(x)=\tfrac{p(x)}{q(x)}$, $q(x)\ne0$.

Example: $f(x)=\tfrac{3x^2+2}{x^2+4x-5}$

In this case, the end behavior is $f(x)\approx\tfrac{3x^2}{x^2}=3$. This
tells us that as the inputs grow large, this function will behave like the
function $g(x)=3$, which is a horizontal line. As $x\to\pm\infty$,
$f(x)\to3$, resulting in a horizontal asymptote at $y=3$. See the graph
below. Note that this graph crosses the horizontal asymptote.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the quantity 3x squared plus 2 over x squared plus 4x minus 5, with vertical asymptotes at x=−5 and x=1 and a horizontal asymptote at y=3.","xMin":-20,"xMax":16,"yMin":-6,"yMax":10,"unit":12,"tickLabels":true,"tickStep":2,"rationals":[{"num":[2,0,3],"den":[-5,4,1]}],"lines":[{"x":-5,"dashed":true,"arrows":false,"label":"x = −5","labelSide":"right"},{"x":1,"dashed":true,"arrows":false,"label":"x = 1","labelSide":"left"},{"y":3,"dashed":true,"arrows":false,"label":"y = 3","labelSide":"left"}]}'>
<svg role="img" aria-label="The graph of f of x equals the quantity 3x squared plus 2 over x squared plus 4x minus 5, with vertical asymptotes at x=−5 and x=1 and a horizontal asymptote at y=3." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484 244" width="484" height="244" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="218" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="38" y1="218" x2="38" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="218" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="62" y1="218" x2="62" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="218" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="218" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="218" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="110" y1="218" x2="110" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="218" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="134" y1="218" x2="134" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="146" y1="218" x2="146" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="158" y1="218" x2="158" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="218" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="218" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="218" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="218" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="218" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="230" y1="218" x2="230" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="218" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="254" y1="218" x2="254" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="278" y1="218" x2="278" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="290" y1="218" x2="290" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="302" y1="218" x2="302" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="314" y1="218" x2="314" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="326" y1="218" x2="326" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="338" y1="218" x2="338" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="350" y1="218" x2="350" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="362" y1="218" x2="362" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="374" y1="218" x2="374" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="386" y1="218" x2="386" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="398" y1="218" x2="398" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="410" y1="218" x2="410" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="422" y1="218" x2="422" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="434" y1="218" x2="434" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="446" y1="218" x2="446" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="458" y1="218" x2="458" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="458" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="458" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="458" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="458" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="170" x2="458" y2="170" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="158" x2="458" y2="158" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="134" x2="458" y2="134" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="458" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="110" x2="458" y2="110" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="458" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="458" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="458" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="62" x2="458" y2="62" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="458" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="38" x2="458" y2="38" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="458" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="460" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="266" y1="24" x2="266" y2="220" stroke="currentColor" stroke-width="1"/>
  <polygon points="470,146 460,151 460,141" fill="currentColor"/>
  <polygon points="266,14 271,24 261,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="266,230 261,220 271,220" fill="currentColor"/>
  <text x="468" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="274" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−20</text>
  <line x1="50" y1="143" x2="50" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="161" font-size="11" fill="currentColor" text-anchor="middle">−18</text>
  <line x1="74" y1="143" x2="74" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="74" y="161" font-size="11" fill="currentColor" text-anchor="middle">−16</text>
  <line x1="98" y1="143" x2="98" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="98" y="161" font-size="11" fill="currentColor" text-anchor="middle">−14</text>
  <line x1="122" y1="143" x2="122" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="122" y="161" font-size="11" fill="currentColor" text-anchor="middle">−12</text>
  <line x1="146" y1="143" x2="146" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="146" y="161" font-size="11" fill="currentColor" text-anchor="middle">−10</text>
  <line x1="170" y1="143" x2="170" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="170" y="161" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="194" y1="143" x2="194" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="194" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="218" y1="143" x2="218" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="218" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="242" y1="143" x2="242" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="242" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="290" y1="143" x2="290" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="290" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="314" y1="143" x2="314" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="314" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="338" y1="143" x2="338" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="338" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="362" y1="143" x2="362" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="362" y="161" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="386" y1="143" x2="386" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="386" y="161" font-size="11" fill="currentColor" text-anchor="middle">10</text>
  <line x1="410" y1="143" x2="410" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="410" y="161" font-size="11" fill="currentColor" text-anchor="middle">12</text>
  <line x1="434" y1="143" x2="434" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="434" y="161" font-size="11" fill="currentColor" text-anchor="middle">14</text>
  <line x1="458" y1="143" x2="458" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="458" y="161" font-size="11" fill="currentColor" text-anchor="middle">16</text>
  <line x1="263" y1="218" x2="269" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="222" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="263" y1="194" x2="269" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="198" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="263" y1="170" x2="269" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="174" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="263" y1="122" x2="269" y2="122" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="126" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="263" y1="98" x2="269" y2="98" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="102" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="263" y1="74" x2="269" y2="74" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="78" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="263" y1="50" x2="269" y2="50" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="54" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="263" y1="26" x2="269" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="260" y="30" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="206" y1="224" x2="206" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="278" y1="224" x2="278" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="110" x2="464" y2="110" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,99.7 34,99.7 34.3,99.7 34.5,99.7 34.8,99.7 35,99.7 35.3,99.7 35.5,99.7 35.8,99.6 36,99.6 36.3,99.6 36.5,99.6 36.8,99.6 37,99.6 37.3,99.5 37.5,99.5 37.8,99.5 38,99.5 38.3,99.5 38.5,99.5 38.8,99.5 39,99.4 39.3,99.4 39.5,99.4 39.8,99.4 40,99.4 40.3,99.4 40.5,99.3 40.8,99.3 41,99.3 41.3,99.3 41.5,99.3 41.8,99.3 42,99.2 42.3,99.2 42.5,99.2 42.8,99.2 43,99.2 43.3,99.2 43.5,99.1 43.8,99.1 44,99.1 44.3,99.1 44.5,99.1 44.8,99.1 45,99 45.3,99 45.5,99 45.8,99 46,99 46.3,98.9 46.5,98.9 46.8,98.9 47,98.9 47.3,98.9 47.5,98.9 47.8,98.8 48,98.8 48.3,98.8 48.5,98.8 48.8,98.8 49,98.8 49.3,98.7 49.5,98.7 49.8,98.7 50,98.7 50.3,98.7 50.5,98.6 50.8,98.6 51,98.6 51.3,98.6 51.5,98.6 51.8,98.5 52,98.5 52.3,98.5 52.5,98.5 52.8,98.5 53,98.5 53.3,98.4 53.5,98.4 53.8,98.4 54,98.4 54.3,98.4 54.5,98.3 54.8,98.3 55,98.3 55.3,98.3 55.5,98.3 55.8,98.2 56,98.2 56.3,98.2 56.5,98.2 56.8,98.2 57,98.1 57.3,98.1 57.5,98.1 57.8,98.1 58,98.1 58.3,98 58.5,98 58.8,98 59,98 59.3,98 59.5,97.9 59.8,97.9 60,97.9 60.3,97.9 60.5,97.9 60.8,97.8 61,97.8 61.3,97.8 61.5,97.8 61.8,97.7 62,97.7 62.3,97.7 62.5,97.7 62.8,97.7 63,97.6 63.3,97.6 63.5,97.6 63.8,97.6 64,97.5 64.3,97.5 64.5,97.5 64.8,97.5 65,97.5 65.3,97.4 65.5,97.4 65.8,97.4 66,97.4 66.3,97.3 66.5,97.3 66.8,97.3 67,97.3 67.3,97.3 67.5,97.2 67.8,97.2 68,97.2 68.3,97.2 68.5,97.1 68.8,97.1 69,97.1 69.3,97.1 69.5,97 69.8,97 70,97 70.3,97 70.5,96.9 70.8,96.9 71,96.9 71.3,96.9 71.5,96.8 71.8,96.8 72,96.8 72.3,96.8 72.5,96.7 72.8,96.7 73,96.7 73.3,96.7 73.5,96.6 73.8,96.6 74,96.6 74.3,96.6 74.5,96.5 74.8,96.5 75,96.5 75.3,96.5 75.5,96.4 75.8,96.4 76,96.4 76.3,96.4 76.5,96.3 76.8,96.3 77,96.3 77.3,96.2 77.5,96.2 77.8,96.2 78,96.2 78.3,96.1 78.5,96.1 78.8,96.1 79,96.1 79.3,96 79.5,96 79.8,96 80,95.9 80.3,95.9 80.5,95.9 80.8,95.9 81,95.8 81.3,95.8 81.5,95.8 81.8,95.7 82,95.7 82.3,95.7 82.5,95.7 82.8,95.6 83,95.6 83.3,95.6 83.5,95.5 83.8,95.5 84,95.5 84.3,95.4 84.5,95.4 84.8,95.4 85,95.3 85.3,95.3 85.5,95.3 85.8,95.3 86,95.2 86.3,95.2 86.5,95.2 86.8,95.1 87,95.1 87.3,95.1 87.5,95 87.8,95 88,95 88.3,94.9 88.5,94.9 88.8,94.9 89,94.8 89.3,94.8 89.5,94.8 89.8,94.7 90,94.7 90.3,94.7 90.5,94.6 90.8,94.6 91,94.6 91.3,94.5 91.5,94.5 91.8,94.5 92,94.4 92.3,94.4 92.5,94.4 92.8,94.3 93,94.3 93.3,94.3 93.5,94.2 93.8,94.2 94,94.2 94.3,94.1 94.5,94.1 94.8,94 95,94 95.3,94 95.5,93.9 95.8,93.9 96,93.9 96.3,93.8 96.5,93.8 96.8,93.7 97,93.7 97.3,93.7 97.5,93.6 97.8,93.6 98,93.6 98.3,93.5 98.5,93.5 98.8,93.4 99,93.4 99.3,93.4 99.5,93.3 99.8,93.3 100,93.2 100.3,93.2 100.5,93.2 100.8,93.1 101,93.1 101.3,93 101.5,93 101.8,93 102,92.9 102.3,92.9 102.5,92.8 102.8,92.8 103,92.7 103.3,92.7 103.5,92.7 103.8,92.6 104,92.6 104.3,92.5 104.5,92.5 104.8,92.4 105,92.4 105.3,92.4 105.5,92.3 105.8,92.3 106,92.2 106.3,92.2 106.5,92.1 106.8,92.1 107,92 107.3,92 107.5,91.9 107.8,91.9 108,91.8 108.3,91.8 108.5,91.8 108.8,91.7 109,91.7 109.3,91.6 109.5,91.6 109.8,91.5 110,91.5 110.3,91.4 110.5,91.4 110.8,91.3 111,91.3 111.3,91.2 111.5,91.2 111.8,91.1 112,91.1 112.3,91 112.5,91 112.8,90.9 113,90.9 113.3,90.8 113.5,90.8 113.8,90.7 114,90.6 114.3,90.6 114.5,90.5 114.8,90.5 115,90.4 115.3,90.4 115.5,90.3 115.8,90.3 116,90.2 116.3,90.2 116.5,90.1 116.8,90 117,90 117.3,89.9 117.5,89.9 117.8,89.8 118,89.7 118.3,89.7 118.5,89.6 118.8,89.6 119,89.5 119.3,89.5 119.5,89.4 119.8,89.3 120,89.3 120.3,89.2 120.5,89.1 120.8,89.1 121,89 121.3,89 121.5,88.9 121.8,88.8 122,88.8 122.3,88.7 122.5,88.6 122.8,88.6 123,88.5 123.3,88.4 123.5,88.4 123.8,88.3 124,88.2 124.3,88.2 124.5,88.1 124.8,88 125,88 125.3,87.9 125.5,87.8 125.8,87.8 126,87.7 126.3,87.6 126.5,87.5 126.8,87.5 127,87.4 127.3,87.3 127.5,87.3 127.8,87.2 128,87.1 128.3,87 128.5,87 128.8,86.9 129,86.8 129.3,86.7 129.5,86.7 129.8,86.6 130,86.5 130.3,86.4 130.5,86.3 130.8,86.3 131,86.2 131.3,86.1 131.5,86 131.8,85.9 132,85.8 132.3,85.8 132.5,85.7 132.8,85.6 133,85.5 133.3,85.4 133.5,85.3 133.8,85.3 134,85.2 134.3,85.1 134.5,85 134.8,84.9 135,84.8 135.3,84.7 135.5,84.6 135.8,84.5 136,84.4 136.3,84.4 136.5,84.3 136.8,84.2 137,84.1 137.3,84 137.5,83.9 137.8,83.8 138,83.7 138.3,83.6 138.5,83.5 138.8,83.4 139,83.3 139.3,83.2 139.5,83.1 139.8,83 140,82.9 140.3,82.8 140.5,82.7 140.8,82.6 141,82.4 141.3,82.3 141.5,82.2 141.8,82.1 142,82 142.3,81.9 142.5,81.8 142.8,81.7 143,81.6 143.3,81.4 143.5,81.3 143.8,81.2 144,81.1 144.3,81 144.5,80.9 144.8,80.7 145,80.6 145.3,80.5 145.5,80.4 145.8,80.2 146,80.1 146.3,80 146.5,79.9 146.8,79.7 147,79.6 147.3,79.5 147.5,79.3 147.8,79.2 148,79.1 148.3,78.9 148.5,78.8 148.8,78.6 149,78.5 149.3,78.4 149.5,78.2 149.8,78.1 150,77.9 150.3,77.8 150.5,77.6 150.8,77.5 151,77.3 151.3,77.2 151.5,77 151.8,76.9 152,76.7 152.3,76.6 152.5,76.4 152.8,76.3 153,76.1 153.3,75.9 153.5,75.8 153.8,75.6 154,75.4 154.3,75.3 154.5,75.1 154.8,74.9 155,74.7 155.3,74.6 155.5,74.4 155.8,74.2 156,74 156.3,73.8 156.5,73.7 156.8,73.5 157,73.3 157.3,73.1 157.5,72.9 157.8,72.7 158,72.5 158.3,72.3 158.5,72.1 158.8,71.9 159,71.7 159.3,71.5 159.5,71.3 159.8,71.1 160,70.8 160.3,70.6 160.5,70.4 160.8,70.2 161,70 161.3,69.7 161.5,69.5 161.8,69.3 162,69 162.3,68.8 162.5,68.6 162.8,68.3 163,68.1 163.3,67.8 163.5,67.6 163.8,67.3 164,67.1 164.3,66.8 164.5,66.5 164.8,66.3 165,66 165.3,65.7 165.5,65.4 165.8,65.2 166,64.9 166.3,64.6 166.5,64.3 166.8,64 167,63.7 167.3,63.4 167.5,63.1 167.8,62.8 168,62.5 168.3,62.1 168.5,61.8 168.8,61.5 169,61.2 169.3,60.8 169.5,60.5 169.8,60.1 170,59.8 170.3,59.4 170.5,59.1 170.8,58.7 171,58.3 171.3,57.9 171.5,57.6 171.8,57.2 172,56.8 172.3,56.4 172.5,56 172.8,55.6 173,55.1 173.3,54.7 173.5,54.3 173.8,53.8 174,53.4 174.3,53 174.5,52.5 174.8,52 175,51.6 175.3,51.1 175.5,50.6 175.8,50.1 176,49.6 176.3,49.1 176.5,48.5 176.8,48 177,47.5 177.3,46.9 177.5,46.4 177.8,45.8 178,45.2 178.3,44.6 178.5,44 178.8,43.4 179,42.8 179.3,42.1 179.5,41.5 179.8,40.8 180,40.1 180.3,39.5 180.5,38.8 180.8,38 181,37.3 181.3,36.6 181.5,35.8 181.8,35 182,34.3 182.1,34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,100.2 35.7,94.6 36.3,104.6" fill="currentColor"/>
  <polygon points="184.3,26.3 186.3,37.3 176.7,34.6" fill="currentColor"/>
  <polyline points="224.9,209.9 225,209.5 225.3,208.3 225.5,207.1 225.8,205.9 226,204.7 226.3,203.6 226.5,202.5 226.8,201.4 227,200.4 227.3,199.3 227.5,198.3 227.8,197.4 228,196.4 228.3,195.5 228.5,194.6 228.8,193.7 229,192.8 229.3,191.9 229.5,191.1 229.8,190.3 230,189.5 230.3,188.7 230.5,188 230.8,187.2 231,186.5 231.3,185.8 231.5,185.1 231.8,184.4 232,183.7 232.3,183 232.5,182.4 232.8,181.7 233,181.1 233.3,180.5 233.5,179.9 233.8,179.3 234,178.7 234.3,178.2 234.5,177.6 234.8,177.1 235,176.5 235.3,176 235.5,175.5 235.8,175 236,174.5 236.3,174 236.5,173.5 236.8,173 237,172.5 237.3,172.1 237.5,171.6 237.8,171.2 238,170.7 238.3,170.3 238.5,169.9 238.8,169.5 239,169.1 239.3,168.7 239.5,168.3 239.8,167.9 240,167.5 240.3,167.1 240.5,166.8 240.8,166.4 241,166 241.3,165.7 241.5,165.3 241.8,165 242,164.7 242.3,164.3 242.5,164 242.8,163.7 243,163.4 243.3,163.1 243.5,162.8 243.8,162.5 244,162.2 244.3,161.9 244.5,161.6 244.8,161.3 245,161 245.3,160.7 245.5,160.5 245.8,160.2 246,160 246.3,159.7 246.5,159.4 246.8,159.2 247,158.9 247.3,158.7 247.5,158.5 247.8,158.2 248,158 248.3,157.8 248.5,157.6 248.8,157.3 249,157.1 249.3,156.9 249.5,156.7 249.8,156.5 250,156.3 250.3,156.1 250.5,155.9 250.8,155.7 251,155.5 251.3,155.3 251.5,155.1 251.8,155 252,154.8 252.3,154.6 252.5,154.4 252.8,154.3 253,154.1 253.3,154 253.5,153.8 253.8,153.7 254,153.5 254.3,153.4 254.5,153.2 254.8,153.1 255,152.9 255.3,152.8 255.5,152.7 255.8,152.5 256,152.4 256.3,152.3 256.5,152.2 256.8,152.1 257,151.9 257.3,151.8 257.5,151.7 257.8,151.6 258,151.5 258.3,151.4 258.5,151.4 258.8,151.3 259,151.2 259.3,151.1 259.5,151 259.8,151 260,150.9 260.3,150.8 260.5,150.8 260.8,150.7 261,150.7 261.3,150.6 261.5,150.6 261.8,150.5 262,150.5 262.3,150.5 262.5,150.4 262.8,150.4 263,150.4 263.3,150.4 263.5,150.4 263.8,150.4 264,150.4 264.3,150.5 264.5,150.5 264.8,150.5 265,150.6 265.3,150.6 265.5,150.7 265.8,150.7 266,150.8 266.3,150.9 266.5,151 266.8,151.1 267,151.2 267.3,151.3 267.5,151.5 267.8,151.6 268,151.8 268.3,152 268.5,152.2 268.8,152.4 269,152.7 269.3,152.9 269.5,153.2 269.8,153.5 270,153.9 270.3,154.2 270.5,154.7 270.8,155.1 271,155.6 271.3,156.1 271.5,156.7 271.8,157.3 272,158 272.3,158.8 272.5,159.6 272.8,160.5 273,161.6 273.3,162.7 273.5,164 273.8,165.5 274,167.2 274.3,169.1 274.5,171.3 274.8,173.8 275,176.8 275.3,180.3 275.5,184.6 275.8,189.8 276,196.4 276.3,204.9 276.3,208.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="223.5,217.8 220.4,207.1 230.2,208.8" fill="currentColor"/>
  <polygon points="276.5,216.2 271.3,206.3 281.3,206.1" fill="currentColor"/>
  <polyline points="279.4,47.2 279.5,55.1 279.8,66.5 280,75 280.3,81.6 280.5,86.8 280.8,91.1 281,94.6 281.3,97.6 281.5,100.2 281.8,102.4 282,104.3 282.3,106 282.5,107.5 282.8,108.8 283,110 283.3,111.1 283.5,112 283.8,112.9 284,113.7 284.3,114.4 284.5,115.1 284.8,115.7 285,116.2 285.3,116.8 285.5,117.2 285.8,117.7 286,118.1 286.3,118.5 286.5,118.8 286.8,119.2 287,119.5 287.3,119.8 287.5,120 287.8,120.3 288,120.5 288.3,120.8 288.5,121 288.8,121.2 289,121.4 289.3,121.5 289.5,121.7 289.8,121.9 290,122 290.3,122.1 290.5,122.3 290.8,122.4 291,122.5 291.3,122.6 291.5,122.7 291.8,122.8 292,122.9 292.3,123 292.5,123.1 292.8,123.2 293,123.2 293.3,123.3 293.5,123.4 293.8,123.4 294,123.5 294.3,123.6 294.5,123.6 294.8,123.7 295,123.7 295.3,123.7 295.5,123.8 295.8,123.8 296,123.9 296.3,123.9 296.5,123.9 296.8,124 297,124 297.3,124 297.5,124 297.8,124.1 298,124.1 298.3,124.1 298.5,124.1 298.8,124.1 299,124.2 299.3,124.2 299.5,124.2 299.8,124.2 300,124.2 300.3,124.2 300.5,124.2 300.8,124.2 301,124.2 301.3,124.2 301.5,124.2 301.8,124.2 302,124.3 302.3,124.3 302.5,124.3 302.8,124.3 303,124.3 303.3,124.3 303.5,124.2 303.8,124.2 304,124.2 304.3,124.2 304.5,124.2 304.8,124.2 305,124.2 305.3,124.2 305.5,124.2 305.8,124.2 306,124.2 306.3,124.2 306.5,124.2 306.8,124.2 307,124.2 307.3,124.1 307.5,124.1 307.8,124.1 308,124.1 308.3,124.1 308.5,124.1 308.8,124.1 309,124.1 309.3,124.1 309.5,124 309.8,124 310,124 310.3,124 310.5,124 310.8,124 311,124 311.3,123.9 311.5,123.9 311.8,123.9 312,123.9 312.3,123.9 312.5,123.9 312.8,123.9 313,123.8 313.3,123.8 313.5,123.8 313.8,123.8 314,123.8 314.3,123.8 314.5,123.7 314.8,123.7 315,123.7 315.3,123.7 315.5,123.7 315.8,123.7 316,123.6 316.3,123.6 316.5,123.6 316.8,123.6 317,123.6 317.3,123.6 317.5,123.5 317.8,123.5 318,123.5 318.3,123.5 318.5,123.5 318.8,123.4 319,123.4 319.3,123.4 319.5,123.4 319.8,123.4 320,123.4 320.3,123.3 320.5,123.3 320.8,123.3 321,123.3 321.3,123.3 321.5,123.2 321.8,123.2 322,123.2 322.3,123.2 322.5,123.2 322.8,123.1 323,123.1 323.3,123.1 323.5,123.1 323.8,123.1 324,123.1 324.3,123 324.5,123 324.8,123 325,123 325.3,123 325.5,122.9 325.8,122.9 326,122.9 326.3,122.9 326.5,122.9 326.8,122.8 327,122.8 327.3,122.8 327.5,122.8 327.8,122.8 328,122.7 328.3,122.7 328.5,122.7 328.8,122.7 329,122.7 329.3,122.7 329.5,122.6 329.8,122.6 330,122.6 330.3,122.6 330.5,122.6 330.8,122.5 331,122.5 331.3,122.5 331.5,122.5 331.8,122.5 332,122.4 332.3,122.4 332.5,122.4 332.8,122.4 333,122.4 333.3,122.4 333.5,122.3 333.8,122.3 334,122.3 334.3,122.3 334.5,122.3 334.8,122.2 335,122.2 335.3,122.2 335.5,122.2 335.8,122.2 336,122.1 336.3,122.1 336.5,122.1 336.8,122.1 337,122.1 337.3,122.1 337.5,122 337.8,122 338,122 338.3,122 338.5,122 338.8,121.9 339,121.9 339.3,121.9 339.5,121.9 339.8,121.9 340,121.9 340.3,121.8 340.5,121.8 340.8,121.8 341,121.8 341.3,121.8 341.5,121.7 341.8,121.7 342,121.7 342.3,121.7 342.5,121.7 342.8,121.7 343,121.6 343.3,121.6 343.5,121.6 343.8,121.6 344,121.6 344.3,121.6 344.5,121.5 344.8,121.5 345,121.5 345.3,121.5 345.5,121.5 345.8,121.5 346,121.4 346.3,121.4 346.5,121.4 346.8,121.4 347,121.4 347.3,121.4 347.5,121.3 347.8,121.3 348,121.3 348.3,121.3 348.5,121.3 348.8,121.2 349,121.2 349.3,121.2 349.5,121.2 349.8,121.2 350,121.2 350.3,121.2 350.5,121.1 350.8,121.1 351,121.1 351.3,121.1 351.5,121.1 351.8,121.1 352,121 352.3,121 352.5,121 352.8,121 353,121 353.3,121 353.5,120.9 353.8,120.9 354,120.9 354.3,120.9 354.5,120.9 354.8,120.9 355,120.8 355.3,120.8 355.5,120.8 355.8,120.8 356,120.8 356.3,120.8 356.5,120.8 356.8,120.7 357,120.7 357.3,120.7 357.5,120.7 357.8,120.7 358,120.7 358.3,120.6 358.5,120.6 358.8,120.6 359,120.6 359.3,120.6 359.5,120.6 359.8,120.6 360,120.5 360.3,120.5 360.5,120.5 360.8,120.5 361,120.5 361.3,120.5 361.5,120.4 361.8,120.4 362,120.4 362.3,120.4 362.5,120.4 362.8,120.4 363,120.4 363.3,120.3 363.5,120.3 363.8,120.3 364,120.3 364.3,120.3 364.5,120.3 364.8,120.3 365,120.2 365.3,120.2 365.5,120.2 365.8,120.2 366,120.2 366.3,120.2 366.5,120.2 366.8,120.1 367,120.1 367.3,120.1 367.5,120.1 367.8,120.1 368,120.1 368.3,120.1 368.5,120 368.8,120 369,120 369.3,120 369.5,120 369.8,120 370,120 370.3,120 370.5,119.9 370.8,119.9 371,119.9 371.3,119.9 371.5,119.9 371.8,119.9 372,119.9 372.3,119.8 372.5,119.8 372.8,119.8 373,119.8 373.3,119.8 373.5,119.8 373.8,119.8 374,119.8 374.3,119.7 374.5,119.7 374.8,119.7 375,119.7 375.3,119.7 375.5,119.7 375.8,119.7 376,119.6 376.3,119.6 376.5,119.6 376.8,119.6 377,119.6 377.3,119.6 377.5,119.6 377.8,119.6 378,119.5 378.3,119.5 378.5,119.5 378.8,119.5 379,119.5 379.3,119.5 379.5,119.5 379.8,119.5 380,119.4 380.3,119.4 380.5,119.4 380.8,119.4 381,119.4 381.3,119.4 381.5,119.4 381.8,119.4 382,119.3 382.3,119.3 382.5,119.3 382.8,119.3 383,119.3 383.3,119.3 383.5,119.3 383.8,119.3 384,119.2 384.3,119.2 384.5,119.2 384.8,119.2 385,119.2 385.3,119.2 385.5,119.2 385.8,119.2 386,119.2 386.3,119.1 386.5,119.1 386.8,119.1 387,119.1 387.3,119.1 387.5,119.1 387.8,119.1 388,119.1 388.3,119.1 388.5,119 388.8,119 389,119 389.3,119 389.5,119 389.8,119 390,119 390.3,119 390.5,118.9 390.8,118.9 391,118.9 391.3,118.9 391.5,118.9 391.8,118.9 392,118.9 392.3,118.9 392.5,118.9 392.8,118.8 393,118.8 393.3,118.8 393.5,118.8 393.8,118.8 394,118.8 394.3,118.8 394.5,118.8 394.8,118.8 395,118.8 395.3,118.7 395.5,118.7 395.8,118.7 396,118.7 396.3,118.7 396.5,118.7 396.8,118.7 397,118.7 397.3,118.7 397.5,118.6 397.8,118.6 398,118.6 398.3,118.6 398.5,118.6 398.8,118.6 399,118.6 399.3,118.6 399.5,118.6 399.8,118.6 400,118.5 400.3,118.5 400.5,118.5 400.8,118.5 401,118.5 401.3,118.5 401.5,118.5 401.8,118.5 402,118.5 402.3,118.5 402.5,118.4 402.8,118.4 403,118.4 403.3,118.4 403.5,118.4 403.8,118.4 404,118.4 404.3,118.4 404.5,118.4 404.8,118.4 405,118.3 405.3,118.3 405.5,118.3 405.8,118.3 406,118.3 406.3,118.3 406.5,118.3 406.8,118.3 407,118.3 407.3,118.3 407.5,118.2 407.8,118.2 408,118.2 408.3,118.2 408.5,118.2 408.8,118.2 409,118.2 409.3,118.2 409.5,118.2 409.8,118.2 410,118.1 410.3,118.1 410.5,118.1 410.8,118.1 411,118.1 411.3,118.1 411.5,118.1 411.8,118.1 412,118.1 412.3,118.1 412.5,118.1 412.8,118 413,118 413.3,118 413.5,118 413.8,118 414,118 414.3,118 414.5,118 414.8,118 415,118 415.3,118 415.5,117.9 415.8,117.9 416,117.9 416.3,117.9 416.5,117.9 416.8,117.9 417,117.9 417.3,117.9 417.5,117.9 417.8,117.9 418,117.9 418.3,117.9 418.5,117.8 418.8,117.8 419,117.8 419.3,117.8 419.5,117.8 419.8,117.8 420,117.8 420.3,117.8 420.5,117.8 420.8,117.8 421,117.8 421.3,117.7 421.5,117.7 421.8,117.7 422,117.7 422.3,117.7 422.5,117.7 422.8,117.7 423,117.7 423.3,117.7 423.5,117.7 423.8,117.7 424,117.7 424.3,117.6 424.5,117.6 424.8,117.6 425,117.6 425.3,117.6 425.5,117.6 425.8,117.6 426,117.6 426.3,117.6 426.5,117.6 426.8,117.6 427,117.6 427.3,117.5 427.5,117.5 427.8,117.5 428,117.5 428.3,117.5 428.5,117.5 428.8,117.5 429,117.5 429.3,117.5 429.5,117.5 429.8,117.5 430,117.5 430.3,117.5 430.5,117.4 430.8,117.4 431,117.4 431.3,117.4 431.5,117.4 431.8,117.4 432,117.4 432.3,117.4 432.5,117.4 432.8,117.4 433,117.4 433.3,117.4 433.5,117.4 433.8,117.3 434,117.3 434.3,117.3 434.5,117.3 434.8,117.3 435,117.3 435.3,117.3 435.5,117.3 435.8,117.3 436,117.3 436.3,117.3 436.5,117.3 436.8,117.3 437,117.2 437.3,117.2 437.5,117.2 437.8,117.2 438,117.2 438.3,117.2 438.5,117.2 438.8,117.2 439,117.2 439.3,117.2 439.5,117.2 439.8,117.2 440,117.2 440.3,117.1 440.5,117.1 440.8,117.1 441,117.1 441.3,117.1 441.5,117.1 441.8,117.1 442,117.1 442.3,117.1 442.5,117.1 442.8,117.1 443,117.1 443.3,117.1 443.5,117.1 443.8,117 444,117 444.3,117 444.5,117 444.8,117 445,117 445.3,117 445.5,117 445.8,117 446,117 446.3,117 446.5,117 446.8,117 447,117 447.3,117 447.5,116.9 447.8,116.9 448,116.9 448.3,116.9 448.5,116.9 448.8,116.9 449,116.9 449.3,116.9 449.5,116.9 449.8,116.9 450,116.9 450,116.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="279.3,39.2 284.4,49.1 274.4,49.3" fill="currentColor"/>
  <polygon points="458,116.7 448.1,121.9 447.9,111.9" fill="currentColor"/>
  <text x="228" y="68.9" font-size="13" fill="currentColor" text-anchor="start">x = −5</text>
  <text x="256" y="101.5" font-size="13" fill="currentColor" text-anchor="end">x = 1</text>
  <text x="366.3" y="98" font-size="13" fill="currentColor" text-anchor="middle">y = 3</text>
</svg>
</div>
Notice that, while the graph of a rational function will never cross a
**vertical asymptote**, the graph may or may not cross a horizontal or
slant asymptote. Also, although the graph of a rational function may have
many vertical asymptotes, the graph will have at most one horizontal (or
slant) asymptote.

It should be noted that, if the degree of the numerator is larger than the
degree of the denominator by more than one, the **end behavior** of the
graph will mimic the behavior of the reduced end behavior fraction. For
instance, if we had the function

$$f(x)=\tfrac{3x^5-x^2}{x+3}$$

with end behavior

$$f(x)\approx\tfrac{3x^5}{x}=3x^4,$$

the end behavior of the graph would look similar to that of an even
polynomial with a positive leading coefficient.

$$x\to\pm\infty,\ f(x)\to\infty$$

{{< callout type="info" >}}
  **Horizontal asymptotes of rational functions.** The **horizontal
  asymptote** of a rational function can be determined by looking at the
  degrees of the numerator and denominator.

  - Degree of numerator *is less than* degree of denominator: horizontal
    asymptote at $y=0$.
  - Degree of numerator *is greater than* degree of denominator by one: no
    horizontal asymptote; slant asymptote.
  - Degree of numerator *is equal to* degree of denominator: horizontal
    asymptote at ratio of leading coefficients.
{{< /callout >}}

**Example.** For the functions below, identify the horizontal or slant
asymptote.

(a) $g(x)=\tfrac{6x^3-10x}{2x^3+5x^2}$

(b) $h(x)=\tfrac{x^2-4x+1}{x+2}$

(c) $k(x)=\tfrac{x^2+4x}{x^3-8}$

**Solution.** For these solutions, we will use
$f(x)=\tfrac{p(x)}{q(x)}$, $q(x)\ne0$.

(a) $g(x)=\tfrac{6x^3-10x}{2x^3+5x^2}$: The degree of $p=$ degree of $q=3$,
so we can find the horizontal asymptote by taking the ratio of the leading
terms. There is a horizontal asymptote at $y=\tfrac{6}{2}$ or $y=3$.

(b) $h(x)=\tfrac{x^2-4x+1}{x+2}$: The degree of $p=2$ and degree of $q=1$.
Since $p>q$ by 1, there is a slant asymptote found at
$\tfrac{x^2-4x+1}{x+2}$.

$$
\begin{array}{r|rrr}
-2 & 1 & -4 & 1 \\
   &   & -2 & 12 \\
\hline
   & 1 & -6 & 13
\end{array}
$$

The quotient is $x-6$ and the remainder is 13. There is a slant asymptote at
$y=x-6$.

(c) $k(x)=\tfrac{x^2+4x}{x^3-8}$: The degree of $p=2<$ degree of $q=3$, so
there is a horizontal asymptote $y=0$.

**Example.** In the sugar concentration problem earlier, we created the
equation $C(t)=\tfrac{5+t}{100+10t}$.

Find the horizontal asymptote and interpret it in context of the problem.

**Solution.** Both the numerator and denominator are linear (degree 1).
Because the degrees are equal, there will be a horizontal asymptote at the
ratio of the leading coefficients. In the numerator, the leading term is
$t$, with coefficient 1. In the denominator, the leading term is $10t$,
with coefficient 10. The horizontal asymptote will be at the ratio of these
values:

$$t\to\infty,\ C(t)\to\tfrac{1}{10}$$

This function will have a horizontal asymptote at $y=\tfrac{1}{10}$.

This tells us that as the values of $t$ increase, the values of $C$ will
approach $\tfrac{1}{10}$. In context, this means that, as more time goes
by, the concentration of sugar in the tank will approach one-tenth of a
pound of sugar per gallon of water or $\tfrac{1}{10}$ pounds per gallon.

**Example.** Find the horizontal and vertical asymptotes of the function

$$f(x)=\tfrac{(x-2)(x+3)}{(x-1)(x+2)(x-5)}$$

**Solution.** First, note that this function has no common factors, so
there are no potential removable discontinuities.

The function will have vertical asymptotes when the denominator is zero,
causing the function to be undefined. The denominator will be zero at
$x=1,-2,\text{ and }5$, indicating vertical asymptotes at these values.

The numerator has degree 2, while the denominator has degree 3. Since the
degree of the denominator is greater than the degree of the numerator, the
denominator will grow faster than the numerator, causing the outputs to
tend towards zero as the inputs get large, and so as $x\to\pm\infty$,
$f(x)\to0$. This function will have a horizontal asymptote at $y=0$. See
the graph below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the quantity x−2 times x+3, over the quantity x−1 times x+2 times x−5, with vertical asymptotes at x=−2, x=1, and x=5, and a horizontal asymptote at y=0.","xMin":-6,"xMax":8,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-6,1,1],"den":[10,-7,-4,1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2","labelSide":"right","labelAt":0.2},{"x":1,"dashed":true,"arrows":false,"label":"x = 1","labelSide":"left","labelAt":0.62},{"x":5,"dashed":true,"arrows":false,"label":"x = 5","labelSide":"left","labelAt":0.85},{"y":0,"dashed":true,"arrows":false,"label":"y = 0","labelSide":"left","labelAt":0.08}]}'>
<svg role="img" aria-label="The graph of f of x equals the quantity x−2 times x+3, over the quantity x−1 times x+2 times x−5, with vertical asymptotes at x=−2, x=1, and x=5, and a horizontal asymptote at y=0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 292" width="332" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="286" y1="266" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="266" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="306" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="306" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="306" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="308" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,146 308,151 308,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="316" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="143" x2="46" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="143" x2="86" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="143" x2="126" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="143" x2="166" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="143" x2="186" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="143" x2="206" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="143" x2="246" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="286" y1="143" x2="286" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="161" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="306" y1="143" x2="306" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="161" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="126" x2="149" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="130" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="106" y1="272" x2="106" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="166" y1="272" x2="166" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="246" y1="272" x2="246" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="146" x2="312" y2="146" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,147.6 34,147.6 34.3,147.6 34.5,147.6 34.8,147.6 35,147.6 35.3,147.6 35.5,147.6 35.8,147.6 36,147.6 36.3,147.6 36.5,147.6 36.8,147.6 37,147.6 37.3,147.6 37.5,147.6 37.8,147.6 38,147.6 38.3,147.6 38.5,147.6 38.8,147.6 39,147.6 39.3,147.6 39.5,147.6 39.8,147.6 40,147.6 40.3,147.6 40.5,147.6 40.8,147.6 41,147.6 41.3,147.6 41.5,147.6 41.8,147.6 42,147.6 42.3,147.6 42.5,147.6 42.8,147.6 43,147.6 43.3,147.6 43.5,147.6 43.8,147.6 44,147.6 44.3,147.6 44.5,147.6 44.8,147.6 45,147.6 45.3,147.6 45.5,147.6 45.8,147.6 46,147.6 46.3,147.6 46.5,147.6 46.8,147.6 47,147.6 47.3,147.6 47.5,147.6 47.8,147.5 48,147.5 48.3,147.5 48.5,147.5 48.8,147.5 49,147.5 49.3,147.5 49.5,147.5 49.8,147.5 50,147.5 50.3,147.5 50.5,147.5 50.8,147.5 51,147.5 51.3,147.5 51.5,147.5 51.8,147.5 52,147.5 52.3,147.5 52.5,147.5 52.8,147.5 53,147.5 53.3,147.5 53.5,147.5 53.8,147.5 54,147.5 54.3,147.5 54.5,147.5 54.8,147.5 55,147.5 55.3,147.5 55.5,147.5 55.8,147.5 56,147.5 56.3,147.5 56.5,147.5 56.8,147.5 57,147.5 57.3,147.5 57.5,147.5 57.8,147.5 58,147.5 58.3,147.5 58.5,147.5 58.8,147.5 59,147.5 59.3,147.5 59.5,147.5 59.8,147.4 60,147.4 60.3,147.4 60.5,147.4 60.8,147.4 61,147.4 61.3,147.4 61.5,147.4 61.8,147.4 62,147.4 62.3,147.4 62.5,147.4 62.8,147.4 63,147.4 63.3,147.4 63.5,147.4 63.8,147.4 64,147.4 64.3,147.4 64.5,147.4 64.8,147.4 65,147.4 65.3,147.4 65.5,147.3 65.8,147.3 66,147.3 66.3,147.3 66.5,147.3 66.8,147.3 67,147.3 67.3,147.3 67.5,147.3 67.8,147.3 68,147.3 68.3,147.3 68.5,147.3 68.8,147.3 69,147.3 69.3,147.2 69.5,147.2 69.8,147.2 70,147.2 70.3,147.2 70.5,147.2 70.8,147.2 71,147.2 71.3,147.2 71.5,147.2 71.8,147.2 72,147.1 72.3,147.1 72.5,147.1 72.8,147.1 73,147.1 73.3,147.1 73.5,147.1 73.8,147.1 74,147.1 74.3,147 74.5,147 74.8,147 75,147 75.3,147 75.5,147 75.8,147 76,147 76.3,146.9 76.5,146.9 76.8,146.9 77,146.9 77.3,146.9 77.5,146.9 77.8,146.9 78,146.8 78.3,146.8 78.5,146.8 78.8,146.8 79,146.8 79.3,146.7 79.5,146.7 79.8,146.7 80,146.7 80.3,146.7 80.5,146.6 80.8,146.6 81,146.6 81.3,146.6 81.5,146.6 81.8,146.5 82,146.5 82.3,146.5 82.5,146.5 82.8,146.4 83,146.4 83.3,146.4 83.5,146.3 83.8,146.3 84,146.3 84.3,146.2 84.5,146.2 84.8,146.2 85,146.1 85.3,146.1 85.5,146.1 85.8,146 86,146 86.3,146 86.5,145.9 86.8,145.9 87,145.8 87.3,145.8 87.5,145.7 87.8,145.7 88,145.6 88.3,145.6 88.5,145.5 88.8,145.5 89,145.4 89.3,145.4 89.5,145.3 89.8,145.3 90,145.2 90.3,145.1 90.5,145.1 90.8,145 91,144.9 91.3,144.8 91.5,144.8 91.8,144.7 92,144.6 92.3,144.5 92.5,144.4 92.8,144.3 93,144.2 93.3,144.1 93.5,144 93.8,143.9 94,143.8 94.3,143.6 94.5,143.5 94.8,143.4 95,143.2 95.3,143.1 95.5,142.9 95.8,142.7 96,142.6 96.3,142.4 96.5,142.2 96.8,142 97,141.8 97.3,141.5 97.5,141.3 97.8,141 98,140.8 98.3,140.5 98.5,140.1 98.8,139.8 99,139.4 99.3,139 99.5,138.6 99.8,138.2 100,137.7 100.3,137.1 100.5,136.5 100.8,135.9 101,135.2 101.3,134.4 101.5,133.5 101.8,132.5 102,131.4 102.3,130.2 102.5,128.7 102.8,127.1 103,125.1 103.3,122.8 103.5,120.1 103.8,116.7 104,112.5 104.3,107 104.5,99.8 104.8,89.7 105,74.4 105.2,57" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,147.6 36,142.6 36,152.6" fill="currentColor"/>
  <polygon points="105.3,49 110.2,59.1 100.2,59" fill="currentColor"/>
  <polyline points="106.8,244.3 107,226.9 107.3,211.7 107.5,201.5 107.8,194.3 108,188.9 108.3,184.7 108.5,181.3 108.8,178.5 109,176.2 109.3,174.3 109.5,172.6 109.8,171.2 110,169.9 110.3,168.8 110.5,167.9 110.8,167 111,166.2 111.3,165.5 111.5,164.8 111.8,164.3 112,163.7 112.3,163.2 112.5,162.8 112.8,162.4 113,162 113.3,161.6 113.5,161.3 113.8,161 114,160.7 114.3,160.4 114.5,160.2 114.8,159.9 115,159.7 115.3,159.5 115.5,159.3 115.8,159.1 116,158.9 116.3,158.8 116.5,158.6 116.8,158.4 117,158.3 117.3,158.2 117.5,158 117.8,157.9 118,157.8 118.3,157.7 118.5,157.6 118.8,157.5 119,157.4 119.3,157.3 119.5,157.2 119.8,157.1 120,157.1 120.3,157 120.5,156.9 120.8,156.8 121,156.8 121.3,156.7 121.5,156.7 121.8,156.6 122,156.6 122.3,156.5 122.5,156.5 122.8,156.4 123,156.4 123.3,156.3 123.5,156.3 123.8,156.3 124,156.2 124.3,156.2 124.5,156.2 124.8,156.1 125,156.1 125.3,156.1 125.5,156 125.8,156 126,156 126.3,156 126.5,156 126.8,155.9 127,155.9 127.3,155.9 127.5,155.9 127.8,155.9 128,155.9 128.3,155.9 128.5,155.9 128.8,155.9 129,155.8 129.3,155.8 129.5,155.8 129.8,155.8 130,155.8 130.3,155.8 130.5,155.8 130.8,155.8 131,155.8 131.3,155.8 131.5,155.8 131.8,155.9 132,155.9 132.3,155.9 132.5,155.9 132.8,155.9 133,155.9 133.3,155.9 133.5,155.9 133.8,155.9 134,155.9 134.3,156 134.5,156 134.8,156 135,156 135.3,156 135.5,156.1 135.8,156.1 136,156.1 136.3,156.1 136.5,156.1 136.8,156.2 137,156.2 137.3,156.2 137.5,156.3 137.8,156.3 138,156.3 138.3,156.3 138.5,156.4 138.8,156.4 139,156.5 139.3,156.5 139.5,156.5 139.8,156.6 140,156.6 140.3,156.6 140.5,156.7 140.8,156.7 141,156.8 141.3,156.8 141.5,156.9 141.8,156.9 142,157 142.3,157 142.5,157.1 142.8,157.1 143,157.2 143.3,157.2 143.5,157.3 143.8,157.4 144,157.4 144.3,157.5 144.5,157.6 144.8,157.6 145,157.7 145.3,157.8 145.5,157.8 145.8,157.9 146,158 146.3,158.1 146.5,158.2 146.8,158.3 147,158.3 147.3,158.4 147.5,158.5 147.8,158.6 148,158.7 148.3,158.8 148.5,158.9 148.8,159 149,159.1 149.3,159.3 149.5,159.4 149.8,159.5 150,159.6 150.3,159.8 150.5,159.9 150.8,160 151,160.2 151.3,160.3 151.5,160.5 151.8,160.7 152,160.8 152.3,161 152.5,161.2 152.8,161.4 153,161.6 153.3,161.8 153.5,162 153.8,162.2 154,162.4 154.3,162.7 154.5,162.9 154.8,163.2 155,163.4 155.3,163.7 155.5,164 155.8,164.3 156,164.7 156.3,165 156.5,165.4 156.8,165.8 157,166.2 157.3,166.6 157.5,167 157.8,167.5 158,168 158.3,168.6 158.5,169.1 158.8,169.8 159,170.4 159.3,171.1 159.5,171.9 159.8,172.7 160,173.6 160.3,174.6 160.5,175.7 160.8,176.8 161,178.1 161.3,179.5 161.5,181.1 161.8,182.8 162,184.8 162.3,187 162.5,189.5 162.8,192.5 163,195.9 163.3,200 163.5,204.8 163.8,210.7 164,218.2 164.3,227.7 164.5,240.4 164.6,250.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="106.8,252.3 101.8,242.3 111.8,242.3" fill="currentColor"/>
  <polygon points="164.8,258.2 159.6,248.3 169.6,248.1" fill="currentColor"/>
  <polyline points="167.4,52.9 167.5,62.7 167.8,75.4 168,85 168.3,92.4 168.5,98.3 168.8,103.2 169,107.2 169.3,110.6 169.5,113.6 169.8,116.1 170,118.4 170.3,120.3 170.5,122.1 170.8,123.7 171,125.1 171.3,126.4 171.5,127.5 171.8,128.6 172,129.6 172.3,130.5 172.5,131.3 172.8,132.1 173,132.8 173.3,133.5 173.5,134.1 173.8,134.7 174,135.2 174.3,135.7 174.5,136.2 174.8,136.7 175,137.1 175.3,137.5 175.5,137.9 175.8,138.3 176,138.7 176.3,139 176.5,139.3 176.8,139.6 177,139.9 177.3,140.2 177.5,140.5 177.8,140.7 178,141 178.3,141.2 178.5,141.5 178.8,141.7 179,141.9 179.3,142.1 179.5,142.3 179.8,142.5 180,142.7 180.3,142.9 180.5,143.1 180.8,143.2 181,143.4 181.3,143.6 181.5,143.7 181.8,143.9 182,144 182.3,144.2 182.5,144.3 182.8,144.5 183,144.6 183.3,144.7 183.5,144.8 183.8,145 184,145.1 184.3,145.2 184.5,145.3 184.8,145.5 185,145.6 185.3,145.7 185.5,145.8 185.8,145.9 186,146 186.3,146.1 186.5,146.2 186.8,146.3 187,146.4 187.3,146.5 187.5,146.6 187.8,146.7 188,146.8 188.3,146.9 188.5,147 188.8,147 189,147.1 189.3,147.2 189.5,147.3 189.8,147.4 190,147.5 190.3,147.6 190.5,147.6 190.8,147.7 191,147.8 191.3,147.9 191.5,148 191.8,148 192,148.1 192.3,148.2 192.5,148.3 192.8,148.3 193,148.4 193.3,148.5 193.5,148.6 193.8,148.6 194,148.7 194.3,148.8 194.5,148.8 194.8,148.9 195,149 195.3,149.1 195.5,149.1 195.8,149.2 196,149.3 196.3,149.3 196.5,149.4 196.8,149.5 197,149.5 197.3,149.6 197.5,149.7 197.8,149.7 198,149.8 198.3,149.9 198.5,149.9 198.8,150 199,150.1 199.3,150.1 199.5,150.2 199.8,150.3 200,150.3 200.3,150.4 200.5,150.5 200.8,150.5 201,150.6 201.3,150.7 201.5,150.7 201.8,150.8 202,150.9 202.3,151 202.5,151 202.8,151.1 203,151.2 203.3,151.2 203.5,151.3 203.8,151.4 204,151.4 204.3,151.5 204.5,151.6 204.8,151.6 205,151.7 205.3,151.8 205.5,151.9 205.8,151.9 206,152 206.3,152.1 206.5,152.1 206.8,152.2 207,152.3 207.3,152.4 207.5,152.4 207.8,152.5 208,152.6 208.3,152.7 208.5,152.7 208.8,152.8 209,152.9 209.3,153 209.5,153.1 209.8,153.1 210,153.2 210.3,153.3 210.5,153.4 210.8,153.5 211,153.6 211.3,153.6 211.5,153.7 211.8,153.8 212,153.9 212.3,154 212.5,154.1 212.8,154.2 213,154.3 213.3,154.4 213.5,154.5 213.8,154.5 214,154.6 214.3,154.7 214.5,154.8 214.8,154.9 215,155 215.3,155.1 215.5,155.2 215.8,155.3 216,155.5 216.3,155.6 216.5,155.7 216.8,155.8 217,155.9 217.3,156 217.5,156.1 217.8,156.2 218,156.4 218.3,156.5 218.5,156.6 218.8,156.7 219,156.9 219.3,157 219.5,157.1 219.8,157.3 220,157.4 220.3,157.5 220.5,157.7 220.8,157.8 221,158 221.3,158.1 221.5,158.3 221.8,158.4 222,158.6 222.3,158.7 222.5,158.9 222.8,159 223,159.2 223.3,159.4 223.5,159.6 223.8,159.7 224,159.9 224.3,160.1 224.5,160.3 224.8,160.5 225,160.7 225.3,160.9 225.5,161.1 225.8,161.3 226,161.6 226.3,161.8 226.5,162 226.8,162.2 227,162.5 227.3,162.7 227.5,163 227.8,163.3 228,163.5 228.3,163.8 228.5,164.1 228.8,164.4 229,164.7 229.3,165 229.5,165.3 229.8,165.6 230,166 230.3,166.3 230.5,166.7 230.8,167 231,167.4 231.3,167.8 231.5,168.2 231.8,168.6 232,169.1 232.3,169.5 232.5,170 232.8,170.5 233,171 233.3,171.5 233.5,172.1 233.8,172.6 234,173.2 234.3,173.8 234.5,174.5 234.8,175.1 235,175.8 235.3,176.6 235.5,177.3 235.8,178.1 236,179 236.3,179.9 236.5,180.8 236.8,181.8 237,182.8 237.3,183.9 237.5,185.1 237.8,186.3 238,187.6 238.3,189 238.5,190.5 238.8,192 239,193.7 239.3,195.5 239.5,197.5 239.8,199.6 240,201.9 240.3,204.4 240.5,207.1 240.8,210.1 241,213.4 241.3,217 241.5,221 241.8,225.5 242,230.5 242.3,236.2 242.5,242.8 242.8,250.3 242.8,251.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="167.3,44.9 172.4,54.9 162.4,55" fill="currentColor"/>
  <polygon points="243,259.1 237.7,249.3 247.7,249" fill="currentColor"/>
  <polyline points="249.2,38.6 249.3,39.4 249.5,47 249.8,53.5 250,59.2 250.3,64.3 250.5,68.8 250.8,72.8 251,76.4 251.3,79.7 251.5,82.6 251.8,85.3 252,87.8 252.3,90.1 252.5,92.2 252.8,94.2 253,96 253.3,97.7 253.5,99.3 253.8,100.8 254,102.1 254.3,103.4 254.5,104.7 254.8,105.8 255,106.9 255.3,108 255.5,108.9 255.8,109.9 256,110.7 256.3,111.6 256.5,112.4 256.8,113.1 257,113.9 257.3,114.6 257.5,115.2 257.8,115.9 258,116.5 258.3,117.1 258.5,117.6 258.8,118.2 259,118.7 259.3,119.2 259.5,119.7 259.8,120.1 260,120.6 260.3,121 260.5,121.4 260.8,121.8 261,122.2 261.3,122.6 261.5,123 261.8,123.3 262,123.7 262.3,124 262.5,124.3 262.8,124.6 263,124.9 263.3,125.2 263.5,125.5 263.8,125.8 264,126.1 264.3,126.3 264.5,126.6 264.8,126.8 265,127.1 265.3,127.3 265.5,127.6 265.8,127.8 266,128 266.3,128.2 266.5,128.4 266.8,128.6 267,128.8 267.3,129 267.5,129.2 267.8,129.4 268,129.6 268.3,129.8 268.5,129.9 268.8,130.1 269,130.3 269.3,130.4 269.5,130.6 269.8,130.7 270,130.9 270.3,131 270.5,131.2 270.8,131.3 271,131.5 271.3,131.6 271.5,131.8 271.8,131.9 272,132 272.3,132.1 272.5,132.3 272.8,132.4 273,132.5 273.3,132.6 273.5,132.7 273.8,132.9 274,133 274.3,133.1 274.5,133.2 274.8,133.3 275,133.4 275.3,133.5 275.5,133.6 275.8,133.7 276,133.8 276.3,133.9 276.5,134 276.8,134.1 277,134.2 277.3,134.3 277.5,134.4 277.8,134.5 278,134.5 278.3,134.6 278.5,134.7 278.8,134.8 279,134.9 279.3,135 279.5,135 279.8,135.1 280,135.2 280.3,135.3 280.5,135.3 280.8,135.4 281,135.5 281.3,135.6 281.5,135.6 281.8,135.7 282,135.8 282.3,135.8 282.5,135.9 282.8,136 283,136 283.3,136.1 283.5,136.2 283.8,136.2 284,136.3 284.3,136.3 284.5,136.4 284.8,136.5 285,136.5 285.3,136.6 285.5,136.6 285.8,136.7 286,136.7 286.3,136.8 286.5,136.8 286.8,136.9 287,137 287.3,137 287.5,137.1 287.8,137.1 288,137.2 288.3,137.2 288.5,137.3 288.8,137.3 289,137.4 289.3,137.4 289.5,137.5 289.8,137.5 290,137.5 290.3,137.6 290.5,137.6 290.8,137.7 291,137.7 291.3,137.8 291.5,137.8 291.8,137.9 292,137.9 292.3,137.9 292.5,138 292.8,138 293,138.1 293.3,138.1 293.5,138.1 293.8,138.2 294,138.2 294.3,138.3 294.5,138.3 294.8,138.3 295,138.4 295.3,138.4 295.5,138.4 295.8,138.5 296,138.5 296.3,138.6 296.5,138.6 296.8,138.6 297,138.7 297.3,138.7 297.5,138.7 297.8,138.8 298,138.8 298.1,138.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="249,30.6 254.3,40.5 244.3,40.8" fill="currentColor"/>
  <polygon points="306,139.7 295.5,143.5 296.6,133.6" fill="currentColor"/>
  <text x="128" y="225.6" font-size="13" fill="currentColor" text-anchor="start">x = −2</text>
  <text x="150" y="119.8" font-size="13" fill="currentColor" text-anchor="end">x = 1</text>
  <text x="230" y="61.8" font-size="13" fill="currentColor" text-anchor="end">x = 5</text>
  <text x="43.4" y="128" font-size="13" fill="currentColor" text-anchor="middle">y = 0</text>
</svg>
</div>
{{< fillin
  question="Find the vertical asymptotes of the function $f(x)=\tfrac{(2x-1)(2x+1)}{(x-2)(x+3)}$. If there is more than one, separate them with a comma."
  answer="x=2,x=-3"
  answerMode="unordered"
  answerDisplay="$x=2$ or $x=-3$"
  hint="The two factors already sit in the denominator with no matching factor in the numerator, so each gives an asymptote."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function."
  answer="y=4"
  answerDisplay="$y=4$"
  hint="Both the numerator and denominator are degree 2; take the ratio of their leading coefficients."
>}}

{{< callout type="info" >}}
  **Intercepts of rational functions.** A rational function will have a
  $y$-intercept when the input is zero, if the function is defined at zero.
  A rational function will not have a $y$-intercept if the function is not
  defined at zero.

  Likewise, a rational function will have $x$-intercepts at the inputs that
  cause the output to be zero. Since a fraction is only equal to zero when
  the numerator is zero, $x$-intercepts can only occur when the numerator
  of the rational function is equal to zero.
{{< /callout >}}

**Example.** Find the intercepts of
$f(x)=\tfrac{(x-2)(x+3)}{(x-1)(x+2)(x-5)}$.

**Solution.** We can find the $y$-intercept by evaluating the function at
zero

$$
\begin{array}{lrcl}
& f(0) &=& \tfrac{(0-2)(0+3)}{(0-1)(0+2)(0-5)} \\[4pt]
& &=& \tfrac{-6}{10} \\[4pt]
& &=& -\tfrac{3}{5} \\[4pt]
& &=& -0.6
\end{array}
$$

The $x$-intercepts will occur when the function is equal to zero:

$$
\begin{array}{lrcl}
0=\tfrac{(x-2)(x+3)}{(x-1)(x+2)(x-5)} & \text{This is zero when the numerator is zero.} \\[4pt]
0=(x-2)(x+3) & \\[4pt]
x=2,-3 &
\end{array}
$$

The $y$-intercept is $(0,-0.6)$, the $x$-intercepts are $(2,0)$ and
$(-3,0)$. See the graph below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same graph of f of x equals the quantity x−2 times x+3, over the quantity x−1 times x+2 times x−5, now marked with its y-intercept at (0, −0.6) and its x-intercepts at (2, 0) and (−3, 0).","xMin":-6,"xMax":8,"yMin":-6,"yMax":6,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-6,1,1],"den":[10,-7,-4,1]}],"lines":[{"x":-2,"dashed":true,"arrows":false,"label":"x = −2","labelSide":"right","labelAt":0.65},{"x":1,"dashed":true,"arrows":false,"label":"x = 1","labelSide":"left","labelAt":0.2},{"x":5,"dashed":true,"arrows":false,"label":"x = 5","labelSide":"left","labelAt":0.85},{"y":0,"dashed":true,"arrows":false,"label":"y = 0","labelSide":"left","labelAt":0.08}],"points":[{"at":[0,-0.6],"label":"(0, −0.6)","labelSide":"se"},{"at":[2,0],"label":"(2, 0)","labelSide":"ne"},{"at":[-3,0],"label":"(−3, 0)","labelSide":"nw"}]}'>
<svg role="img" aria-label="The same graph of f of x equals the quantity x−2 times x+3, over the quantity x−1 times x+2 times x−5, now marked with its y-intercept at (0, −0.6) and its x-intercepts at (2, 0) and (−3, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 292" width="332" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="286" y1="266" x2="286" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="306" y1="266" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="306" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="246" x2="306" y2="246" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="226" x2="306" y2="226" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="306" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="186" x2="306" y2="186" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="166" x2="306" y2="166" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="126" x2="306" y2="126" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="306" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="306" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="306" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="306" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="306" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="146" x2="308" y2="146" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="318,146 308,151 308,141" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,146 24,141 24,151" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="316" y="138" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="143" x2="26" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="161" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="143" x2="46" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="161" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="143" x2="66" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="161" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="143" x2="86" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="161" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="143" x2="106" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="161" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="143" x2="126" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="161" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="143" x2="166" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="161" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="143" x2="186" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="161" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="143" x2="206" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="161" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="143" x2="226" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="161" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="143" x2="246" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="161" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="143" x2="266" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="161" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="286" y1="143" x2="286" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="286" y="161" font-size="11" fill="currentColor" text-anchor="middle">7</text>
  <line x1="306" y1="143" x2="306" y2="149" stroke="currentColor" stroke-width="1"/>
  <text x="306" y="161" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="126" x2="149" y2="126" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="130" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="106" y1="272" x2="106" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="166" y1="272" x2="166" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="246" y1="272" x2="246" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="146" x2="312" y2="146" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,147.6 34,147.6 34.3,147.6 34.5,147.6 34.8,147.6 35,147.6 35.3,147.6 35.5,147.6 35.8,147.6 36,147.6 36.3,147.6 36.5,147.6 36.8,147.6 37,147.6 37.3,147.6 37.5,147.6 37.8,147.6 38,147.6 38.3,147.6 38.5,147.6 38.8,147.6 39,147.6 39.3,147.6 39.5,147.6 39.8,147.6 40,147.6 40.3,147.6 40.5,147.6 40.8,147.6 41,147.6 41.3,147.6 41.5,147.6 41.8,147.6 42,147.6 42.3,147.6 42.5,147.6 42.8,147.6 43,147.6 43.3,147.6 43.5,147.6 43.8,147.6 44,147.6 44.3,147.6 44.5,147.6 44.8,147.6 45,147.6 45.3,147.6 45.5,147.6 45.8,147.6 46,147.6 46.3,147.6 46.5,147.6 46.8,147.6 47,147.6 47.3,147.6 47.5,147.6 47.8,147.5 48,147.5 48.3,147.5 48.5,147.5 48.8,147.5 49,147.5 49.3,147.5 49.5,147.5 49.8,147.5 50,147.5 50.3,147.5 50.5,147.5 50.8,147.5 51,147.5 51.3,147.5 51.5,147.5 51.8,147.5 52,147.5 52.3,147.5 52.5,147.5 52.8,147.5 53,147.5 53.3,147.5 53.5,147.5 53.8,147.5 54,147.5 54.3,147.5 54.5,147.5 54.8,147.5 55,147.5 55.3,147.5 55.5,147.5 55.8,147.5 56,147.5 56.3,147.5 56.5,147.5 56.8,147.5 57,147.5 57.3,147.5 57.5,147.5 57.8,147.5 58,147.5 58.3,147.5 58.5,147.5 58.8,147.5 59,147.5 59.3,147.5 59.5,147.5 59.8,147.4 60,147.4 60.3,147.4 60.5,147.4 60.8,147.4 61,147.4 61.3,147.4 61.5,147.4 61.8,147.4 62,147.4 62.3,147.4 62.5,147.4 62.8,147.4 63,147.4 63.3,147.4 63.5,147.4 63.8,147.4 64,147.4 64.3,147.4 64.5,147.4 64.8,147.4 65,147.4 65.3,147.4 65.5,147.3 65.8,147.3 66,147.3 66.3,147.3 66.5,147.3 66.8,147.3 67,147.3 67.3,147.3 67.5,147.3 67.8,147.3 68,147.3 68.3,147.3 68.5,147.3 68.8,147.3 69,147.3 69.3,147.2 69.5,147.2 69.8,147.2 70,147.2 70.3,147.2 70.5,147.2 70.8,147.2 71,147.2 71.3,147.2 71.5,147.2 71.8,147.2 72,147.1 72.3,147.1 72.5,147.1 72.8,147.1 73,147.1 73.3,147.1 73.5,147.1 73.8,147.1 74,147.1 74.3,147 74.5,147 74.8,147 75,147 75.3,147 75.5,147 75.8,147 76,147 76.3,146.9 76.5,146.9 76.8,146.9 77,146.9 77.3,146.9 77.5,146.9 77.8,146.9 78,146.8 78.3,146.8 78.5,146.8 78.8,146.8 79,146.8 79.3,146.7 79.5,146.7 79.8,146.7 80,146.7 80.3,146.7 80.5,146.6 80.8,146.6 81,146.6 81.3,146.6 81.5,146.6 81.8,146.5 82,146.5 82.3,146.5 82.5,146.5 82.8,146.4 83,146.4 83.3,146.4 83.5,146.3 83.8,146.3 84,146.3 84.3,146.2 84.5,146.2 84.8,146.2 85,146.1 85.3,146.1 85.5,146.1 85.8,146 86,146 86.3,146 86.5,145.9 86.8,145.9 87,145.8 87.3,145.8 87.5,145.7 87.8,145.7 88,145.6 88.3,145.6 88.5,145.5 88.8,145.5 89,145.4 89.3,145.4 89.5,145.3 89.8,145.3 90,145.2 90.3,145.1 90.5,145.1 90.8,145 91,144.9 91.3,144.8 91.5,144.8 91.8,144.7 92,144.6 92.3,144.5 92.5,144.4 92.8,144.3 93,144.2 93.3,144.1 93.5,144 93.8,143.9 94,143.8 94.3,143.6 94.5,143.5 94.8,143.4 95,143.2 95.3,143.1 95.5,142.9 95.8,142.7 96,142.6 96.3,142.4 96.5,142.2 96.8,142 97,141.8 97.3,141.5 97.5,141.3 97.8,141 98,140.8 98.3,140.5 98.5,140.1 98.8,139.8 99,139.4 99.3,139 99.5,138.6 99.8,138.2 100,137.7 100.3,137.1 100.5,136.5 100.8,135.9 101,135.2 101.3,134.4 101.5,133.5 101.8,132.5 102,131.4 102.3,130.2 102.5,128.7 102.8,127.1 103,125.1 103.3,122.8 103.5,120.1 103.8,116.7 104,112.5 104.3,107 104.5,99.8 104.8,89.7 105,74.4 105.2,57" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,147.6 36,142.6 36,152.6" fill="currentColor"/>
  <polygon points="105.3,49 110.2,59.1 100.2,59" fill="currentColor"/>
  <polyline points="106.8,244.3 107,226.9 107.3,211.7 107.5,201.5 107.8,194.3 108,188.9 108.3,184.7 108.5,181.3 108.8,178.5 109,176.2 109.3,174.3 109.5,172.6 109.8,171.2 110,169.9 110.3,168.8 110.5,167.9 110.8,167 111,166.2 111.3,165.5 111.5,164.8 111.8,164.3 112,163.7 112.3,163.2 112.5,162.8 112.8,162.4 113,162 113.3,161.6 113.5,161.3 113.8,161 114,160.7 114.3,160.4 114.5,160.2 114.8,159.9 115,159.7 115.3,159.5 115.5,159.3 115.8,159.1 116,158.9 116.3,158.8 116.5,158.6 116.8,158.4 117,158.3 117.3,158.2 117.5,158 117.8,157.9 118,157.8 118.3,157.7 118.5,157.6 118.8,157.5 119,157.4 119.3,157.3 119.5,157.2 119.8,157.1 120,157.1 120.3,157 120.5,156.9 120.8,156.8 121,156.8 121.3,156.7 121.5,156.7 121.8,156.6 122,156.6 122.3,156.5 122.5,156.5 122.8,156.4 123,156.4 123.3,156.3 123.5,156.3 123.8,156.3 124,156.2 124.3,156.2 124.5,156.2 124.8,156.1 125,156.1 125.3,156.1 125.5,156 125.8,156 126,156 126.3,156 126.5,156 126.8,155.9 127,155.9 127.3,155.9 127.5,155.9 127.8,155.9 128,155.9 128.3,155.9 128.5,155.9 128.8,155.9 129,155.8 129.3,155.8 129.5,155.8 129.8,155.8 130,155.8 130.3,155.8 130.5,155.8 130.8,155.8 131,155.8 131.3,155.8 131.5,155.8 131.8,155.9 132,155.9 132.3,155.9 132.5,155.9 132.8,155.9 133,155.9 133.3,155.9 133.5,155.9 133.8,155.9 134,155.9 134.3,156 134.5,156 134.8,156 135,156 135.3,156 135.5,156.1 135.8,156.1 136,156.1 136.3,156.1 136.5,156.1 136.8,156.2 137,156.2 137.3,156.2 137.5,156.3 137.8,156.3 138,156.3 138.3,156.3 138.5,156.4 138.8,156.4 139,156.5 139.3,156.5 139.5,156.5 139.8,156.6 140,156.6 140.3,156.6 140.5,156.7 140.8,156.7 141,156.8 141.3,156.8 141.5,156.9 141.8,156.9 142,157 142.3,157 142.5,157.1 142.8,157.1 143,157.2 143.3,157.2 143.5,157.3 143.8,157.4 144,157.4 144.3,157.5 144.5,157.6 144.8,157.6 145,157.7 145.3,157.8 145.5,157.8 145.8,157.9 146,158 146.3,158.1 146.5,158.2 146.8,158.3 147,158.3 147.3,158.4 147.5,158.5 147.8,158.6 148,158.7 148.3,158.8 148.5,158.9 148.8,159 149,159.1 149.3,159.3 149.5,159.4 149.8,159.5 150,159.6 150.3,159.8 150.5,159.9 150.8,160 151,160.2 151.3,160.3 151.5,160.5 151.8,160.7 152,160.8 152.3,161 152.5,161.2 152.8,161.4 153,161.6 153.3,161.8 153.5,162 153.8,162.2 154,162.4 154.3,162.7 154.5,162.9 154.8,163.2 155,163.4 155.3,163.7 155.5,164 155.8,164.3 156,164.7 156.3,165 156.5,165.4 156.8,165.8 157,166.2 157.3,166.6 157.5,167 157.8,167.5 158,168 158.3,168.6 158.5,169.1 158.8,169.8 159,170.4 159.3,171.1 159.5,171.9 159.8,172.7 160,173.6 160.3,174.6 160.5,175.7 160.8,176.8 161,178.1 161.3,179.5 161.5,181.1 161.8,182.8 162,184.8 162.3,187 162.5,189.5 162.8,192.5 163,195.9 163.3,200 163.5,204.8 163.8,210.7 164,218.2 164.3,227.7 164.5,240.4 164.6,250.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="106.8,252.3 101.8,242.3 111.8,242.3" fill="currentColor"/>
  <polygon points="164.8,258.2 159.6,248.3 169.6,248.1" fill="currentColor"/>
  <polyline points="167.4,52.9 167.5,62.7 167.8,75.4 168,85 168.3,92.4 168.5,98.3 168.8,103.2 169,107.2 169.3,110.6 169.5,113.6 169.8,116.1 170,118.4 170.3,120.3 170.5,122.1 170.8,123.7 171,125.1 171.3,126.4 171.5,127.5 171.8,128.6 172,129.6 172.3,130.5 172.5,131.3 172.8,132.1 173,132.8 173.3,133.5 173.5,134.1 173.8,134.7 174,135.2 174.3,135.7 174.5,136.2 174.8,136.7 175,137.1 175.3,137.5 175.5,137.9 175.8,138.3 176,138.7 176.3,139 176.5,139.3 176.8,139.6 177,139.9 177.3,140.2 177.5,140.5 177.8,140.7 178,141 178.3,141.2 178.5,141.5 178.8,141.7 179,141.9 179.3,142.1 179.5,142.3 179.8,142.5 180,142.7 180.3,142.9 180.5,143.1 180.8,143.2 181,143.4 181.3,143.6 181.5,143.7 181.8,143.9 182,144 182.3,144.2 182.5,144.3 182.8,144.5 183,144.6 183.3,144.7 183.5,144.8 183.8,145 184,145.1 184.3,145.2 184.5,145.3 184.8,145.5 185,145.6 185.3,145.7 185.5,145.8 185.8,145.9 186,146 186.3,146.1 186.5,146.2 186.8,146.3 187,146.4 187.3,146.5 187.5,146.6 187.8,146.7 188,146.8 188.3,146.9 188.5,147 188.8,147 189,147.1 189.3,147.2 189.5,147.3 189.8,147.4 190,147.5 190.3,147.6 190.5,147.6 190.8,147.7 191,147.8 191.3,147.9 191.5,148 191.8,148 192,148.1 192.3,148.2 192.5,148.3 192.8,148.3 193,148.4 193.3,148.5 193.5,148.6 193.8,148.6 194,148.7 194.3,148.8 194.5,148.8 194.8,148.9 195,149 195.3,149.1 195.5,149.1 195.8,149.2 196,149.3 196.3,149.3 196.5,149.4 196.8,149.5 197,149.5 197.3,149.6 197.5,149.7 197.8,149.7 198,149.8 198.3,149.9 198.5,149.9 198.8,150 199,150.1 199.3,150.1 199.5,150.2 199.8,150.3 200,150.3 200.3,150.4 200.5,150.5 200.8,150.5 201,150.6 201.3,150.7 201.5,150.7 201.8,150.8 202,150.9 202.3,151 202.5,151 202.8,151.1 203,151.2 203.3,151.2 203.5,151.3 203.8,151.4 204,151.4 204.3,151.5 204.5,151.6 204.8,151.6 205,151.7 205.3,151.8 205.5,151.9 205.8,151.9 206,152 206.3,152.1 206.5,152.1 206.8,152.2 207,152.3 207.3,152.4 207.5,152.4 207.8,152.5 208,152.6 208.3,152.7 208.5,152.7 208.8,152.8 209,152.9 209.3,153 209.5,153.1 209.8,153.1 210,153.2 210.3,153.3 210.5,153.4 210.8,153.5 211,153.6 211.3,153.6 211.5,153.7 211.8,153.8 212,153.9 212.3,154 212.5,154.1 212.8,154.2 213,154.3 213.3,154.4 213.5,154.5 213.8,154.5 214,154.6 214.3,154.7 214.5,154.8 214.8,154.9 215,155 215.3,155.1 215.5,155.2 215.8,155.3 216,155.5 216.3,155.6 216.5,155.7 216.8,155.8 217,155.9 217.3,156 217.5,156.1 217.8,156.2 218,156.4 218.3,156.5 218.5,156.6 218.8,156.7 219,156.9 219.3,157 219.5,157.1 219.8,157.3 220,157.4 220.3,157.5 220.5,157.7 220.8,157.8 221,158 221.3,158.1 221.5,158.3 221.8,158.4 222,158.6 222.3,158.7 222.5,158.9 222.8,159 223,159.2 223.3,159.4 223.5,159.6 223.8,159.7 224,159.9 224.3,160.1 224.5,160.3 224.8,160.5 225,160.7 225.3,160.9 225.5,161.1 225.8,161.3 226,161.6 226.3,161.8 226.5,162 226.8,162.2 227,162.5 227.3,162.7 227.5,163 227.8,163.3 228,163.5 228.3,163.8 228.5,164.1 228.8,164.4 229,164.7 229.3,165 229.5,165.3 229.8,165.6 230,166 230.3,166.3 230.5,166.7 230.8,167 231,167.4 231.3,167.8 231.5,168.2 231.8,168.6 232,169.1 232.3,169.5 232.5,170 232.8,170.5 233,171 233.3,171.5 233.5,172.1 233.8,172.6 234,173.2 234.3,173.8 234.5,174.5 234.8,175.1 235,175.8 235.3,176.6 235.5,177.3 235.8,178.1 236,179 236.3,179.9 236.5,180.8 236.8,181.8 237,182.8 237.3,183.9 237.5,185.1 237.8,186.3 238,187.6 238.3,189 238.5,190.5 238.8,192 239,193.7 239.3,195.5 239.5,197.5 239.8,199.6 240,201.9 240.3,204.4 240.5,207.1 240.8,210.1 241,213.4 241.3,217 241.5,221 241.8,225.5 242,230.5 242.3,236.2 242.5,242.8 242.8,250.3 242.8,251.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="167.3,44.9 172.4,54.9 162.4,55" fill="currentColor"/>
  <polygon points="243,259.1 237.7,249.3 247.7,249" fill="currentColor"/>
  <polyline points="249.2,38.6 249.3,39.4 249.5,47 249.8,53.5 250,59.2 250.3,64.3 250.5,68.8 250.8,72.8 251,76.4 251.3,79.7 251.5,82.6 251.8,85.3 252,87.8 252.3,90.1 252.5,92.2 252.8,94.2 253,96 253.3,97.7 253.5,99.3 253.8,100.8 254,102.1 254.3,103.4 254.5,104.7 254.8,105.8 255,106.9 255.3,108 255.5,108.9 255.8,109.9 256,110.7 256.3,111.6 256.5,112.4 256.8,113.1 257,113.9 257.3,114.6 257.5,115.2 257.8,115.9 258,116.5 258.3,117.1 258.5,117.6 258.8,118.2 259,118.7 259.3,119.2 259.5,119.7 259.8,120.1 260,120.6 260.3,121 260.5,121.4 260.8,121.8 261,122.2 261.3,122.6 261.5,123 261.8,123.3 262,123.7 262.3,124 262.5,124.3 262.8,124.6 263,124.9 263.3,125.2 263.5,125.5 263.8,125.8 264,126.1 264.3,126.3 264.5,126.6 264.8,126.8 265,127.1 265.3,127.3 265.5,127.6 265.8,127.8 266,128 266.3,128.2 266.5,128.4 266.8,128.6 267,128.8 267.3,129 267.5,129.2 267.8,129.4 268,129.6 268.3,129.8 268.5,129.9 268.8,130.1 269,130.3 269.3,130.4 269.5,130.6 269.8,130.7 270,130.9 270.3,131 270.5,131.2 270.8,131.3 271,131.5 271.3,131.6 271.5,131.8 271.8,131.9 272,132 272.3,132.1 272.5,132.3 272.8,132.4 273,132.5 273.3,132.6 273.5,132.7 273.8,132.9 274,133 274.3,133.1 274.5,133.2 274.8,133.3 275,133.4 275.3,133.5 275.5,133.6 275.8,133.7 276,133.8 276.3,133.9 276.5,134 276.8,134.1 277,134.2 277.3,134.3 277.5,134.4 277.8,134.5 278,134.5 278.3,134.6 278.5,134.7 278.8,134.8 279,134.9 279.3,135 279.5,135 279.8,135.1 280,135.2 280.3,135.3 280.5,135.3 280.8,135.4 281,135.5 281.3,135.6 281.5,135.6 281.8,135.7 282,135.8 282.3,135.8 282.5,135.9 282.8,136 283,136 283.3,136.1 283.5,136.2 283.8,136.2 284,136.3 284.3,136.3 284.5,136.4 284.8,136.5 285,136.5 285.3,136.6 285.5,136.6 285.8,136.7 286,136.7 286.3,136.8 286.5,136.8 286.8,136.9 287,137 287.3,137 287.5,137.1 287.8,137.1 288,137.2 288.3,137.2 288.5,137.3 288.8,137.3 289,137.4 289.3,137.4 289.5,137.5 289.8,137.5 290,137.5 290.3,137.6 290.5,137.6 290.8,137.7 291,137.7 291.3,137.8 291.5,137.8 291.8,137.9 292,137.9 292.3,137.9 292.5,138 292.8,138 293,138.1 293.3,138.1 293.5,138.1 293.8,138.2 294,138.2 294.3,138.3 294.5,138.3 294.8,138.3 295,138.4 295.3,138.4 295.5,138.4 295.8,138.5 296,138.5 296.3,138.6 296.5,138.6 296.8,138.6 297,138.7 297.3,138.7 297.5,138.7 297.8,138.8 298,138.8 298.1,138.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="249,30.6 254.3,40.5 244.3,40.8" fill="currentColor"/>
  <polygon points="306,139.7 295.5,143.5 296.6,133.6" fill="currentColor"/>
  <circle cx="146" cy="158" r="4" fill="currentColor"/>
  <circle cx="186" cy="146" r="4" fill="currentColor"/>
  <circle cx="86" cy="146" r="4" fill="currentColor"/>
  <text x="134.8" y="146.8" font-size="13" fill="currentColor" text-anchor="end">(0, −0.6)</text>
  <text x="197.2" y="134.8" font-size="13" fill="currentColor" text-anchor="start">(2, 0)</text>
  <text x="86" y="169" font-size="13" fill="currentColor" text-anchor="middle">(−3, 0)</text>
  <text x="122" y="112.2" font-size="13" fill="currentColor" text-anchor="start">x = −2</text>
  <text x="150" y="225.6" font-size="13" fill="currentColor" text-anchor="end">x = 1</text>
  <text x="230" y="61.8" font-size="13" fill="currentColor" text-anchor="end">x = 5</text>
  <text x="43.4" y="128" font-size="13" fill="currentColor" text-anchor="middle">y = 0</text>
</svg>
</div>
{{< fillin
  question="Write the reciprocal squared function, shifted right 3 units and down 4 units, as a single rational function $\tfrac{P(x)}{Q(x)}$."
  answer="\frac{-4x^2+24x-35}{x^2-6x+9}"
  answerForm="single-fraction"
  answerDisplay="$\tfrac{-4x^2+24x-35}{x^2-6x+9}$"
  hint="Start from $\tfrac{1}{(x-3)^2}-4$, give both terms the denominator $(x-3)^2$, then combine into one fraction."
>}}

{{< fillin
  question="Find the vertical asymptote of that function."
  answer="x=3"
  answerDisplay="$x=3$"
  hint="The denominator $(x-3)^2$ is zero only at $x=3$."
>}}

{{< fillin
  question="Find the horizontal asymptote of that function."
  answer="y=-4"
  answerDisplay="$y=-4$"
  hint="Numerator and denominator have the same degree; take the ratio of their leading coefficients."
>}}

## Graphing rational functions

We saw in the example above that the numerator of a rational function
reveals the $x$-intercepts of the graph, whereas the denominator reveals the
vertical asymptotes of the graph. As with polynomials, factors of the
numerator may have integer powers greater than one. Fortunately, the effect
on the shape of the graph at those intercepts is the same as we saw with
polynomials.

The vertical asymptotes associated with the factors of the denominator will
mirror one of the two toolkit reciprocal functions. When the degree of the
factor in the denominator is odd, the distinguishing characteristic is that
on one side of the vertical asymptote the graph heads towards positive
infinity, and on the other side the graph heads towards negative infinity.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The toolkit graph of y equals 1 over x on a grid from −4 to 4, with a dashed vertical asymptote at x=0. The graph heads toward negative infinity just left of the asymptote and toward positive infinity just right of it.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,1]}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0","labelSide":"right"}],"texts":[{"at":[1.1,2.6],"text":"y = 1/x","anchor":"start"}]}'>
<svg role="img" aria-label="The toolkit graph of y equals 1 over x on a grid from −4 to 4, with a dashed vertical asymptote at x=0. The graph heads toward negative infinity just left of the asymptote and toward positive infinity just right of it." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="234" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="234" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="234" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="234" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="234" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="234" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="234" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="234" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="234" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="234" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="127" x2="26" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="145" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="52" y1="127" x2="52" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="145" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="78" y1="127" x2="78" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="145" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="104" y1="127" x2="104" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="145" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="156" y1="127" x2="156" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="145" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="182" y1="127" x2="182" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="145" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208" y1="127" x2="208" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="145" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="234" y1="127" x2="234" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="145" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="127" y1="234" x2="133" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="238" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="127" y1="208" x2="133" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="212" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="127" y1="182" x2="133" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="186" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="156" x2="133" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="160" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="127" y1="104" x2="133" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="108" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="127" y1="78" x2="133" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="82" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="52" x2="133" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="56" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="130" y1="240" x2="130" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,137 34,137 34.3,137.1 34.5,137.1 34.8,137.1 35,137.1 35.3,137.1 35.5,137.2 35.8,137.2 36,137.2 36.3,137.2 36.5,137.2 36.8,137.2 37,137.3 37.3,137.3 37.5,137.3 37.8,137.3 38,137.3 38.3,137.4 38.5,137.4 38.8,137.4 39,137.4 39.3,137.4 39.5,137.5 39.8,137.5 40,137.5 40.3,137.5 40.5,137.6 40.8,137.6 41,137.6 41.3,137.6 41.5,137.6 41.8,137.7 42,137.7 42.3,137.7 42.5,137.7 42.8,137.7 43,137.8 43.3,137.8 43.5,137.8 43.8,137.8 44,137.9 44.3,137.9 44.5,137.9 44.8,137.9 45,138 45.3,138 45.5,138 45.8,138 46,138 46.3,138.1 46.5,138.1 46.8,138.1 47,138.1 47.3,138.2 47.5,138.2 47.8,138.2 48,138.2 48.3,138.3 48.5,138.3 48.8,138.3 49,138.3 49.3,138.4 49.5,138.4 49.8,138.4 50,138.4 50.3,138.5 50.5,138.5 50.8,138.5 51,138.6 51.3,138.6 51.5,138.6 51.8,138.6 52,138.7 52.3,138.7 52.5,138.7 52.8,138.8 53,138.8 53.3,138.8 53.5,138.8 53.8,138.9 54,138.9 54.3,138.9 54.5,139 54.8,139 55,139 55.3,139 55.5,139.1 55.8,139.1 56,139.1 56.3,139.2 56.5,139.2 56.8,139.2 57,139.3 57.3,139.3 57.5,139.3 57.8,139.4 58,139.4 58.3,139.4 58.5,139.5 58.8,139.5 59,139.5 59.3,139.6 59.5,139.6 59.8,139.6 60,139.7 60.3,139.7 60.5,139.7 60.8,139.8 61,139.8 61.3,139.8 61.5,139.9 61.8,139.9 62,139.9 62.3,140 62.5,140 62.8,140.1 63,140.1 63.3,140.1 63.5,140.2 63.8,140.2 64,140.2 64.3,140.3 64.5,140.3 64.8,140.4 65,140.4 65.3,140.4 65.5,140.5 65.8,140.5 66,140.6 66.3,140.6 66.5,140.6 66.8,140.7 67,140.7 67.3,140.8 67.5,140.8 67.8,140.9 68,140.9 68.3,140.9 68.5,141 68.8,141 69,141.1 69.3,141.1 69.5,141.2 69.8,141.2 70,141.3 70.3,141.3 70.5,141.4 70.8,141.4 71,141.5 71.3,141.5 71.5,141.6 71.8,141.6 72,141.7 72.3,141.7 72.5,141.8 72.8,141.8 73,141.9 73.3,141.9 73.5,142 73.8,142 74,142.1 74.3,142.1 74.5,142.2 74.8,142.2 75,142.3 75.3,142.3 75.5,142.4 75.8,142.5 76,142.5 76.3,142.6 76.5,142.6 76.8,142.7 77,142.8 77.3,142.8 77.5,142.9 77.8,142.9 78,143 78.3,143.1 78.5,143.1 78.8,143.2 79,143.3 79.3,143.3 79.5,143.4 79.8,143.5 80,143.5 80.3,143.6 80.5,143.7 80.8,143.7 81,143.8 81.3,143.9 81.5,143.9 81.8,144 82,144.1 82.3,144.2 82.5,144.2 82.8,144.3 83,144.4 83.3,144.5 83.5,144.5 83.8,144.6 84,144.7 84.3,144.8 84.5,144.9 84.8,144.9 85,145 85.3,145.1 85.5,145.2 85.8,145.3 86,145.4 86.3,145.5 86.5,145.5 86.8,145.6 87,145.7 87.3,145.8 87.5,145.9 87.8,146 88,146.1 88.3,146.2 88.5,146.3 88.8,146.4 89,146.5 89.3,146.6 89.5,146.7 89.8,146.8 90,146.9 90.3,147 90.5,147.1 90.8,147.2 91,147.3 91.3,147.4 91.5,147.6 91.8,147.7 92,147.8 92.3,147.9 92.5,148 92.8,148.1 93,148.3 93.3,148.4 93.5,148.5 93.8,148.6 94,148.8 94.3,148.9 94.5,149 94.8,149.2 95,149.3 95.3,149.5 95.5,149.6 95.8,149.7 96,149.9 96.3,150 96.5,150.2 96.8,150.3 97,150.5 97.3,150.6 97.5,150.8 97.8,151 98,151.1 98.3,151.3 98.5,151.5 98.8,151.6 99,151.8 99.3,152 99.5,152.2 99.8,152.3 100,152.5 100.3,152.7 100.5,152.9 100.8,153.1 101,153.3 101.3,153.5 101.5,153.7 101.8,153.9 102,154.1 102.3,154.4 102.5,154.6 102.8,154.8 103,155 103.3,155.3 103.5,155.5 103.8,155.8 104,156 104.3,156.3 104.5,156.5 104.8,156.8 105,157 105.3,157.3 105.5,157.6 105.8,157.9 106,158.2 106.3,158.5 106.5,158.8 106.8,159.1 107,159.4 107.3,159.7 107.5,160 107.8,160.4 108,160.7 108.3,161.1 108.5,161.4 108.8,161.8 109,162.2 109.3,162.6 109.5,163 109.8,163.4 110,163.8 110.3,164.2 110.5,164.7 110.8,165.1 111,165.6 111.3,166.1 111.5,166.5 111.8,167 112,167.6 112.3,168.1 112.5,168.6 112.8,169.2 113,169.8 113.3,170.4 113.5,171 113.8,171.6 114,172.3 114.3,172.9 114.5,173.6 114.8,174.3 115,175.1 115.3,175.8 115.5,176.6 115.8,177.4 116,178.3 116.3,179.2 116.5,180.1 116.8,181 117,182 117.3,183 117.5,184.1 117.8,185.2 118,186.3 118.3,187.5 118.5,188.8 118.8,190.1 119,191.5 119.3,192.9 119.5,194.4 119.8,196 120,197.6 120.3,199.3 120.5,201.2 120.8,203.1 121,205.1 121.3,207.3 121.5,209.5 121.8,211.9 122,214.5 122.3,217.2 122.5,220.1 122.8,223.2 123,226" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,136.5 36.3,132.2 35.6,142.2" fill="currentColor"/>
  <polygon points="123.5,234 117.8,224.4 127.8,223.7" fill="currentColor"/>
  <polyline points="137,34 137.3,36.8 137.5,39.9 137.8,42.8 138,45.5 138.3,48.1 138.5,50.5 138.8,52.7 139,54.9 139.3,56.9 139.5,58.8 139.8,60.7 140,62.4 140.3,64 140.5,65.6 140.8,67.1 141,68.5 141.3,69.9 141.5,71.2 141.8,72.5 142,73.7 142.3,74.8 142.5,75.9 142.8,77 143,78 143.3,79 143.5,79.9 143.8,80.8 144,81.7 144.3,82.6 144.5,83.4 144.8,84.2 145,84.9 145.3,85.7 145.5,86.4 145.8,87.1 146,87.7 146.3,88.4 146.5,89 146.8,89.6 147,90.2 147.3,90.8 147.5,91.4 147.8,91.9 148,92.4 148.3,93 148.5,93.5 148.8,93.9 149,94.4 149.3,94.9 149.5,95.3 149.8,95.8 150,96.2 150.3,96.6 150.5,97 150.8,97.4 151,97.8 151.3,98.2 151.5,98.6 151.8,98.9 152,99.3 152.3,99.6 152.5,100 152.8,100.3 153,100.6 153.3,100.9 153.5,101.2 153.8,101.5 154,101.8 154.3,102.1 154.5,102.4 154.8,102.7 155,103 155.3,103.2 155.5,103.5 155.8,103.7 156,104 156.3,104.2 156.5,104.5 156.8,104.7 157,105 157.3,105.2 157.5,105.4 157.8,105.6 158,105.9 158.3,106.1 158.5,106.3 158.8,106.5 159,106.7 159.3,106.9 159.5,107.1 159.8,107.3 160,107.5 160.3,107.7 160.5,107.8 160.8,108 161,108.2 161.3,108.4 161.5,108.5 161.8,108.7 162,108.9 162.3,109 162.5,109.2 162.8,109.4 163,109.5 163.3,109.7 163.5,109.8 163.8,110 164,110.1 164.3,110.3 164.5,110.4 164.8,110.5 165,110.7 165.3,110.8 165.5,111 165.8,111.1 166,111.2 166.3,111.4 166.5,111.5 166.8,111.6 167,111.7 167.3,111.9 167.5,112 167.8,112.1 168,112.2 168.3,112.3 168.5,112.4 168.8,112.6 169,112.7 169.3,112.8 169.5,112.9 169.8,113 170,113.1 170.3,113.2 170.5,113.3 170.8,113.4 171,113.5 171.3,113.6 171.5,113.7 171.8,113.8 172,113.9 172.3,114 172.5,114.1 172.8,114.2 173,114.3 173.3,114.4 173.5,114.5 173.8,114.5 174,114.6 174.3,114.7 174.5,114.8 174.8,114.9 175,115 175.3,115.1 175.5,115.1 175.8,115.2 176,115.3 176.3,115.4 176.5,115.5 176.8,115.5 177,115.6 177.3,115.7 177.5,115.8 177.8,115.8 178,115.9 178.3,116 178.5,116.1 178.8,116.1 179,116.2 179.3,116.3 179.5,116.3 179.8,116.4 180,116.5 180.3,116.5 180.5,116.6 180.8,116.7 181,116.7 181.3,116.8 181.5,116.9 181.8,116.9 182,117 182.3,117.1 182.5,117.1 182.8,117.2 183,117.2 183.3,117.3 183.5,117.4 183.8,117.4 184,117.5 184.3,117.5 184.5,117.6 184.8,117.7 185,117.7 185.3,117.8 185.5,117.8 185.8,117.9 186,117.9 186.3,118 186.5,118 186.8,118.1 187,118.1 187.3,118.2 187.5,118.2 187.8,118.3 188,118.3 188.3,118.4 188.5,118.4 188.8,118.5 189,118.5 189.3,118.6 189.5,118.6 189.8,118.7 190,118.7 190.3,118.8 190.5,118.8 190.8,118.9 191,118.9 191.3,119 191.5,119 191.8,119.1 192,119.1 192.3,119.1 192.5,119.2 192.8,119.2 193,119.3 193.3,119.3 193.5,119.4 193.8,119.4 194,119.4 194.3,119.5 194.5,119.5 194.8,119.6 195,119.6 195.3,119.6 195.5,119.7 195.8,119.7 196,119.8 196.3,119.8 196.5,119.8 196.8,119.9 197,119.9 197.3,119.9 197.5,120 197.8,120 198,120.1 198.3,120.1 198.5,120.1 198.8,120.2 199,120.2 199.3,120.2 199.5,120.3 199.8,120.3 200,120.3 200.3,120.4 200.5,120.4 200.8,120.4 201,120.5 201.3,120.5 201.5,120.5 201.8,120.6 202,120.6 202.3,120.6 202.5,120.7 202.8,120.7 203,120.7 203.3,120.8 203.5,120.8 203.8,120.8 204,120.9 204.3,120.9 204.5,120.9 204.8,121 205,121 205.3,121 205.5,121 205.8,121.1 206,121.1 206.3,121.1 206.5,121.2 206.8,121.2 207,121.2 207.3,121.2 207.5,121.3 207.8,121.3 208,121.3 208.3,121.4 208.5,121.4 208.8,121.4 209,121.4 209.3,121.5 209.5,121.5 209.8,121.5 210,121.5 210.3,121.6 210.5,121.6 210.8,121.6 211,121.7 211.3,121.7 211.5,121.7 211.8,121.7 212,121.8 212.3,121.8 212.5,121.8 212.8,121.8 213,121.9 213.3,121.9 213.5,121.9 213.8,121.9 214,122 214.3,122 214.5,122 214.8,122 215,122 215.3,122.1 215.5,122.1 215.8,122.1 216,122.1 216.3,122.2 216.5,122.2 216.8,122.2 217,122.2 217.3,122.3 217.5,122.3 217.8,122.3 218,122.3 218.3,122.3 218.5,122.4 218.8,122.4 219,122.4 219.3,122.4 219.5,122.4 219.8,122.5 220,122.5 220.3,122.5 220.5,122.5 220.8,122.6 221,122.6 221.3,122.6 221.5,122.6 221.8,122.6 222,122.7 222.3,122.7 222.5,122.7 222.8,122.7 223,122.7 223.3,122.8 223.5,122.8 223.8,122.8 224,122.8 224.3,122.8 224.5,122.8 224.8,122.9 225,122.9 225.3,122.9 225.5,122.9 225.8,122.9 226,123 226,123" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="136.5,26 142.2,35.6 132.2,36.3" fill="currentColor"/>
  <polygon points="234,123.5 223.7,127.8 224.4,117.8" fill="currentColor"/>
  <text x="152" y="72.4" font-size="13" fill="currentColor" text-anchor="start">x = 0</text>
  <text x="158.6" y="62.4" font-size="13" fill="currentColor" text-anchor="start">y = 1/x</text>
</svg>
</div>
When the degree of the factor in the denominator is even, the
distinguishing characteristic is that the graph either heads toward
positive infinity on both sides of the vertical asymptote or heads toward
negative infinity on both sides.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The toolkit graph of y equals 1 over x squared on a grid from −4 to 4, with a dashed vertical asymptote at x=0. The graph heads toward positive infinity on both sides of the asymptote.","xMin":-4,"xMax":4,"yMin":-4,"yMax":4,"unit":26,"tickLabels":true,"tickStep":1,"rationals":[{"num":[1],"den":[0,0,1]}],"lines":[{"x":0,"dashed":true,"arrows":false,"label":"x = 0","labelSide":"right"}],"texts":[{"at":[1.1,2.6],"text":"y = 1/x²","anchor":"start"}]}'>
<svg role="img" aria-label="The toolkit graph of y equals 1 over x squared on a grid from −4 to 4, with a dashed vertical asymptote at x=0. The graph heads toward positive infinity on both sides of the asymptote." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260" width="260" height="260" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="234" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="52" y1="234" x2="52" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="78" y1="234" x2="78" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="104" y1="234" x2="104" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="156" y1="234" x2="156" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="182" y1="234" x2="182" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="208" y1="234" x2="208" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="234" y1="234" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="234" x2="234" y2="234" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="208" x2="234" y2="208" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="182" x2="234" y2="182" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="156" x2="234" y2="156" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="104" x2="234" y2="104" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="78" x2="234" y2="78" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="52" x2="234" y2="52" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="234" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="130" x2="236" y2="130" stroke="currentColor" stroke-width="1"/>
  <line x1="130" y1="24" x2="130" y2="236" stroke="currentColor" stroke-width="1"/>
  <polygon points="246,130 236,135 236,125" fill="currentColor"/>
  <polygon points="130,14 135,24 125,24" fill="currentColor"/>
  <polygon points="14,130 24,125 24,135" fill="currentColor"/>
  <polygon points="130,246 125,236 135,236" fill="currentColor"/>
  <text x="244" y="122" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="138" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="127" x2="26" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="145" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="52" y1="127" x2="52" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="145" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="78" y1="127" x2="78" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="78" y="145" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="104" y1="127" x2="104" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="104" y="145" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="156" y1="127" x2="156" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="156" y="145" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="182" y1="127" x2="182" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="182" y="145" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="208" y1="127" x2="208" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="208" y="145" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="234" y1="127" x2="234" y2="133" stroke="currentColor" stroke-width="1"/>
  <text x="234" y="145" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="127" y1="234" x2="133" y2="234" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="238" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="127" y1="208" x2="133" y2="208" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="212" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="127" y1="182" x2="133" y2="182" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="186" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="127" y1="156" x2="133" y2="156" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="160" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="127" y1="104" x2="133" y2="104" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="108" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="127" y1="78" x2="133" y2="78" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="82" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="127" y1="52" x2="133" y2="52" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="56" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="127" y1="26" x2="133" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="124" y="30" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="130" y1="240" x2="130" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,128.1 34,128.1 34.3,128.1 34.5,128.1 34.8,128.1 35,128.1 35.3,128 35.5,128 35.8,128 36,128 36.3,128 36.5,128 36.8,128 37,128 37.3,128 37.5,127.9 37.8,127.9 38,127.9 38.3,127.9 38.5,127.9 38.8,127.9 39,127.9 39.3,127.9 39.5,127.9 39.8,127.8 40,127.8 40.3,127.8 40.5,127.8 40.8,127.8 41,127.8 41.3,127.8 41.5,127.8 41.8,127.7 42,127.7 42.3,127.7 42.5,127.7 42.8,127.7 43,127.7 43.3,127.7 43.5,127.7 43.8,127.6 44,127.6 44.3,127.6 44.5,127.6 44.8,127.6 45,127.6 45.3,127.6 45.5,127.5 45.8,127.5 46,127.5 46.3,127.5 46.5,127.5 46.8,127.5 47,127.4 47.3,127.4 47.5,127.4 47.8,127.4 48,127.4 48.3,127.4 48.5,127.4 48.8,127.3 49,127.3 49.3,127.3 49.5,127.3 49.8,127.3 50,127.3 50.3,127.2 50.5,127.2 50.8,127.2 51,127.2 51.3,127.2 51.5,127.1 51.8,127.1 52,127.1 52.3,127.1 52.5,127.1 52.8,127.1 53,127 53.3,127 53.5,127 53.8,127 54,127 54.3,126.9 54.5,126.9 54.8,126.9 55,126.9 55.3,126.9 55.5,126.8 55.8,126.8 56,126.8 56.3,126.8 56.5,126.7 56.8,126.7 57,126.7 57.3,126.7 57.5,126.7 57.8,126.6 58,126.6 58.3,126.6 58.5,126.6 58.8,126.5 59,126.5 59.3,126.5 59.5,126.5 59.8,126.4 60,126.4 60.3,126.4 60.5,126.4 60.8,126.3 61,126.3 61.3,126.3 61.5,126.3 61.8,126.2 62,126.2 62.3,126.2 62.5,126.1 62.8,126.1 63,126.1 63.3,126.1 63.5,126 63.8,126 64,126 64.3,125.9 64.5,125.9 64.8,125.9 65,125.8 65.3,125.8 65.5,125.8 65.8,125.7 66,125.7 66.3,125.7 66.5,125.6 66.8,125.6 67,125.6 67.3,125.5 67.5,125.5 67.8,125.5 68,125.4 68.3,125.4 68.5,125.4 68.8,125.3 69,125.3 69.3,125.2 69.5,125.2 69.8,125.2 70,125.1 70.3,125.1 70.5,125 70.8,125 71,125 71.3,124.9 71.5,124.9 71.8,124.8 72,124.8 72.3,124.7 72.5,124.7 72.8,124.6 73,124.6 73.3,124.5 73.5,124.5 73.8,124.4 74,124.4 74.3,124.3 74.5,124.3 74.8,124.2 75,124.2 75.3,124.1 75.5,124.1 75.8,124 76,124 76.3,123.9 76.5,123.9 76.8,123.8 77,123.7 77.3,123.7 77.5,123.6 77.8,123.6 78,123.5 78.3,123.4 78.5,123.4 78.8,123.3 79,123.2 79.3,123.2 79.5,123.1 79.8,123 80,123 80.3,122.9 80.5,122.8 80.8,122.8 81,122.7 81.3,122.6 81.5,122.5 81.8,122.5 82,122.4 82.3,122.3 82.5,122.2 82.8,122.1 83,122 83.3,122 83.5,121.9 83.8,121.8 84,121.7 84.3,121.6 84.5,121.5 84.8,121.4 85,121.3 85.3,121.2 85.5,121.1 85.8,121 86,120.9 86.3,120.8 86.5,120.7 86.8,120.6 87,120.5 87.3,120.4 87.5,120.3 87.8,120.2 88,120 88.3,119.9 88.5,119.8 88.8,119.7 89,119.5 89.3,119.4 89.5,119.3 89.8,119.2 90,119 90.3,118.9 90.5,118.7 90.8,118.6 91,118.4 91.3,118.3 91.5,118.1 91.8,118 92,117.8 92.3,117.7 92.5,117.5 92.8,117.3 93,117.2 93.3,117 93.5,116.8 93.8,116.6 94,116.4 94.3,116.2 94.5,116.1 94.8,115.9 95,115.7 95.3,115.4 95.5,115.2 95.8,115 96,114.8 96.3,114.6 96.5,114.3 96.8,114.1 97,113.9 97.3,113.6 97.5,113.4 97.8,113.1 98,112.8 98.3,112.6 98.5,112.3 98.8,112 99,111.7 99.3,111.4 99.5,111.1 99.8,110.8 100,110.5 100.3,110.1 100.5,109.8 100.8,109.5 101,109.1 101.3,108.7 101.5,108.4 101.8,108 102,107.6 102.3,107.2 102.5,106.8 102.8,106.3 103,105.9 103.3,105.4 103.5,105 103.8,104.5 104,104 104.3,103.5 104.5,103 104.8,102.4 105,101.9 105.3,101.3 105.5,100.7 105.8,100.1 106,99.5 106.3,98.8 106.5,98.2 106.8,97.5 107,96.8 107.3,96 107.5,95.3 107.8,94.5 108,93.7 108.3,92.8 108.5,92 108.8,91.1 109,90.1 109.3,89.2 109.5,88.2 109.8,87.1 110,86.1 110.3,84.9 110.5,83.8 110.8,82.6 111,81.3 111.3,80 111.5,78.6 111.8,77.2 112,75.8 112.3,74.2 112.5,72.6 112.8,70.9 113,69.2 113.3,67.4 113.5,65.4 113.8,63.4 114,61.3 114.3,59.1 114.5,56.8 114.8,54.4 115,51.9 115.3,49.2 115.5,46.4 115.8,43.4 116,40.3 116.3,37 116.5,34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,128.4 35.8,123 36.2,133" fill="currentColor"/>
  <polygon points="117,26 121.3,36.3 111.3,35.6" fill="currentColor"/>
  <polyline points="143.5,34 143.8,37 144,40.3 144.3,43.4 144.5,46.4 144.8,49.2 145,51.9 145.3,54.4 145.5,56.8 145.8,59.1 146,61.3 146.3,63.4 146.5,65.4 146.8,67.4 147,69.2 147.3,70.9 147.5,72.6 147.8,74.2 148,75.8 148.3,77.2 148.5,78.6 148.8,80 149,81.3 149.3,82.6 149.5,83.8 149.8,84.9 150,86.1 150.3,87.1 150.5,88.2 150.8,89.2 151,90.1 151.3,91.1 151.5,92 151.8,92.8 152,93.7 152.3,94.5 152.5,95.3 152.8,96 153,96.8 153.3,97.5 153.5,98.2 153.8,98.8 154,99.5 154.3,100.1 154.5,100.7 154.8,101.3 155,101.9 155.3,102.4 155.5,103 155.8,103.5 156,104 156.3,104.5 156.5,105 156.8,105.4 157,105.9 157.3,106.3 157.5,106.8 157.8,107.2 158,107.6 158.3,108 158.5,108.4 158.8,108.7 159,109.1 159.3,109.5 159.5,109.8 159.8,110.1 160,110.5 160.3,110.8 160.5,111.1 160.8,111.4 161,111.7 161.3,112 161.5,112.3 161.8,112.6 162,112.8 162.3,113.1 162.5,113.4 162.8,113.6 163,113.9 163.3,114.1 163.5,114.3 163.8,114.6 164,114.8 164.3,115 164.5,115.2 164.8,115.4 165,115.7 165.3,115.9 165.5,116.1 165.8,116.2 166,116.4 166.3,116.6 166.5,116.8 166.8,117 167,117.2 167.3,117.3 167.5,117.5 167.8,117.7 168,117.8 168.3,118 168.5,118.1 168.8,118.3 169,118.4 169.3,118.6 169.5,118.7 169.8,118.9 170,119 170.3,119.2 170.5,119.3 170.8,119.4 171,119.5 171.3,119.7 171.5,119.8 171.8,119.9 172,120 172.3,120.2 172.5,120.3 172.8,120.4 173,120.5 173.3,120.6 173.5,120.7 173.8,120.8 174,120.9 174.3,121 174.5,121.1 174.8,121.2 175,121.3 175.3,121.4 175.5,121.5 175.8,121.6 176,121.7 176.3,121.8 176.5,121.9 176.8,122 177,122 177.3,122.1 177.5,122.2 177.8,122.3 178,122.4 178.3,122.5 178.5,122.5 178.8,122.6 179,122.7 179.3,122.8 179.5,122.8 179.8,122.9 180,123 180.3,123 180.5,123.1 180.8,123.2 181,123.2 181.3,123.3 181.5,123.4 181.8,123.4 182,123.5 182.3,123.6 182.5,123.6 182.8,123.7 183,123.7 183.3,123.8 183.5,123.9 183.8,123.9 184,124 184.3,124 184.5,124.1 184.8,124.1 185,124.2 185.3,124.2 185.5,124.3 185.8,124.3 186,124.4 186.3,124.4 186.5,124.5 186.8,124.5 187,124.6 187.3,124.6 187.5,124.7 187.8,124.7 188,124.8 188.3,124.8 188.5,124.9 188.8,124.9 189,125 189.3,125 189.5,125 189.8,125.1 190,125.1 190.3,125.2 190.5,125.2 190.8,125.2 191,125.3 191.3,125.3 191.5,125.4 191.8,125.4 192,125.4 192.3,125.5 192.5,125.5 192.8,125.5 193,125.6 193.3,125.6 193.5,125.6 193.8,125.7 194,125.7 194.3,125.7 194.5,125.8 194.8,125.8 195,125.8 195.3,125.9 195.5,125.9 195.8,125.9 196,126 196.3,126 196.5,126 196.8,126.1 197,126.1 197.3,126.1 197.5,126.1 197.8,126.2 198,126.2 198.3,126.2 198.5,126.3 198.8,126.3 199,126.3 199.3,126.3 199.5,126.4 199.8,126.4 200,126.4 200.3,126.4 200.5,126.5 200.8,126.5 201,126.5 201.3,126.5 201.5,126.6 201.8,126.6 202,126.6 202.3,126.6 202.5,126.7 202.8,126.7 203,126.7 203.3,126.7 203.5,126.7 203.8,126.8 204,126.8 204.3,126.8 204.5,126.8 204.8,126.9 205,126.9 205.3,126.9 205.5,126.9 205.8,126.9 206,127 206.3,127 206.5,127 206.8,127 207,127 207.3,127.1 207.5,127.1 207.8,127.1 208,127.1 208.3,127.1 208.5,127.1 208.8,127.2 209,127.2 209.3,127.2 209.5,127.2 209.8,127.2 210,127.3 210.3,127.3 210.5,127.3 210.8,127.3 211,127.3 211.3,127.3 211.5,127.4 211.8,127.4 212,127.4 212.3,127.4 212.5,127.4 212.8,127.4 213,127.4 213.3,127.5 213.5,127.5 213.8,127.5 214,127.5 214.3,127.5 214.5,127.5 214.8,127.6 215,127.6 215.3,127.6 215.5,127.6 215.8,127.6 216,127.6 216.3,127.6 216.5,127.7 216.8,127.7 217,127.7 217.3,127.7 217.5,127.7 217.8,127.7 218,127.7 218.3,127.7 218.5,127.8 218.8,127.8 219,127.8 219.3,127.8 219.5,127.8 219.8,127.8 220,127.8 220.3,127.8 220.5,127.9 220.8,127.9 221,127.9 221.3,127.9 221.5,127.9 221.8,127.9 222,127.9 222.3,127.9 222.5,127.9 222.8,128 223,128 223.3,128 223.5,128 223.8,128 224,128 224.3,128 224.5,128 224.8,128 225,128.1 225.3,128.1 225.5,128.1 225.8,128.1 226,128.1 226,128.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="143,26 148.7,35.6 138.7,36.3" fill="currentColor"/>
  <polygon points="234,128.4 223.8,133 224.2,123" fill="currentColor"/>
  <text x="146" y="156" font-size="13" fill="currentColor" text-anchor="start">x = 0</text>
  <text x="158.6" y="62.4" font-size="13" fill="currentColor" text-anchor="start">y = 1/x²</text>
</svg>
</div>
For example, the graph of
$f(x)=\tfrac{(x+1)^2(x-3)}{(x+3)^2(x-2)}$ is shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The graph of f of x equals the quantity x+1 squared times x−3, over the quantity x+3 squared times x−2, with vertical asymptotes at x=−3 and x=2, a horizontal asymptote at y=1, a bounce at the x-intercept (−1, 0), a crossing at the x-intercept (3, 0), and a y-intercept at (0, 1/6).","xMin":-8,"xMax":8,"yMin":-12,"yMax":18,"unit":15,"tickLabels":true,"tickStep":2,"rationals":[{"num":[-3,-5,-1,1],"den":[-18,-3,4,1]}],"lines":[{"x":-3,"dashed":true,"arrows":false,"label":"x = −3","labelSide":"right","labelAt":0.07},{"x":2,"dashed":true,"arrows":false,"label":"x = 2","labelSide":"left","labelAt":0.07},{"y":1,"dashed":true,"arrows":false,"label":"y = 1","labelSide":"left"}],"points":[{"at":[-1,0],"label":"(−1, 0)","labelSide":"nw"},{"at":[3,0],"label":"(3, 0)","labelSide":"ne"},{"at":[0,0.16666666666666666],"label":"(0, 1/6)","labelSide":"ne"}]}'>
<svg role="img" aria-label="The graph of f of x equals the quantity x+1 squared times x−3, over the quantity x+3 squared times x−2, with vertical asymptotes at x=−3 and x=2, a horizontal asymptote at y=1, a bounce at the x-intercept (−1, 0), a crossing at the x-intercept (3, 0), and a y-intercept at (0, 1/6)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 502" width="292" height="502" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="476" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="41" y1="476" x2="41" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="56" y1="476" x2="56" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="71" y1="476" x2="71" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="86" y1="476" x2="86" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="101" y1="476" x2="101" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="116" y1="476" x2="116" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="131" y1="476" x2="131" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="161" y1="476" x2="161" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="176" y1="476" x2="176" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="191" y1="476" x2="191" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="206" y1="476" x2="206" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="221" y1="476" x2="221" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="236" y1="476" x2="236" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="251" y1="476" x2="251" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="476" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="476" x2="266" y2="476" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="461" x2="266" y2="461" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="446" x2="266" y2="446" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="431" x2="266" y2="431" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="416" x2="266" y2="416" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="401" x2="266" y2="401" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="386" x2="266" y2="386" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="371" x2="266" y2="371" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="356" x2="266" y2="356" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="341" x2="266" y2="341" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="326" x2="266" y2="326" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="311" x2="266" y2="311" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="281" x2="266" y2="281" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="251" x2="266" y2="251" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="236" x2="266" y2="236" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="221" x2="266" y2="221" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="206" x2="266" y2="206" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="191" x2="266" y2="191" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="176" x2="266" y2="176" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="161" x2="266" y2="161" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="131" x2="266" y2="131" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="116" x2="266" y2="116" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="101" x2="266" y2="101" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="71" x2="266" y2="71" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="56" x2="266" y2="56" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="41" x2="266" y2="41" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="296" x2="268" y2="296" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="478" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,296 268,301 268,291" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,296 24,291 24,301" fill="currentColor"/>
  <polygon points="146,488 141,478 151,478" fill="currentColor"/>
  <text x="276" y="288" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="293" x2="26" y2="299" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="311" font-size="11" fill="currentColor" text-anchor="middle">−8</text>
  <line x1="56" y1="293" x2="56" y2="299" stroke="currentColor" stroke-width="1"/>
  <text x="56" y="311" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="86" y1="293" x2="86" y2="299" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="311" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="116" y1="293" x2="116" y2="299" stroke="currentColor" stroke-width="1"/>
  <text x="116" y="311" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="176" y1="293" x2="176" y2="299" stroke="currentColor" stroke-width="1"/>
  <text x="176" y="311" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="293" x2="206" y2="299" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="311" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="236" y1="293" x2="236" y2="299" stroke="currentColor" stroke-width="1"/>
  <text x="236" y="311" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="266" y1="293" x2="266" y2="299" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="311" font-size="11" fill="currentColor" text-anchor="middle">8</text>
  <line x1="143" y1="476" x2="149" y2="476" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="480" font-size="11" fill="currentColor" text-anchor="end">−12</text>
  <line x1="143" y1="446" x2="149" y2="446" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="450" font-size="11" fill="currentColor" text-anchor="end">−10</text>
  <line x1="143" y1="416" x2="149" y2="416" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="420" font-size="11" fill="currentColor" text-anchor="end">−8</text>
  <line x1="143" y1="386" x2="149" y2="386" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="390" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="356" x2="149" y2="356" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="360" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="326" x2="149" y2="326" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="330" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="236" x2="149" y2="236" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="240" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">6</text>
  <line x1="143" y1="176" x2="149" y2="176" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="180" font-size="11" fill="currentColor" text-anchor="end">8</text>
  <line x1="143" y1="146" x2="149" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="150" font-size="11" fill="currentColor" text-anchor="end">10</text>
  <line x1="143" y1="116" x2="149" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="120" font-size="11" fill="currentColor" text-anchor="end">12</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">14</text>
  <line x1="143" y1="56" x2="149" y2="56" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="60" font-size="11" fill="currentColor" text-anchor="end">16</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">18</text>
  <line x1="101" y1="482" x2="101" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="176" y1="482" x2="176" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="281" x2="272" y2="281" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="33.7,261.4 33.8,261.3 34,261.2 34.3,261.2 34.5,261.1 34.8,261 35,260.9 35.3,260.8 35.5,260.7 35.8,260.6 36,260.5 36.3,260.4 36.5,260.3 36.8,260.2 37,260.1 37.3,260.1 37.5,260 37.8,259.9 38,259.8 38.3,259.7 38.5,259.6 38.8,259.5 39,259.4 39.3,259.3 39.5,259.1 39.8,259 40,258.9 40.3,258.8 40.5,258.7 40.8,258.6 41,258.5 41.3,258.4 41.5,258.3 41.8,258.2 42,258 42.3,257.9 42.5,257.8 42.8,257.7 43,257.6 43.3,257.5 43.5,257.3 43.8,257.2 44,257.1 44.3,257 44.5,256.8 44.8,256.7 45,256.6 45.3,256.4 45.5,256.3 45.8,256.2 46,256 46.3,255.9 46.5,255.8 46.8,255.6 47,255.5 47.3,255.3 47.5,255.2 47.8,255 48,254.9 48.3,254.8 48.5,254.6 48.8,254.4 49,254.3 49.3,254.1 49.5,254 49.8,253.8 50,253.7 50.3,253.5 50.5,253.3 50.8,253.2 51,253 51.3,252.8 51.5,252.6 51.8,252.5 52,252.3 52.3,252.1 52.5,251.9 52.8,251.7 53,251.6 53.3,251.4 53.5,251.2 53.8,251 54,250.8 54.3,250.6 54.5,250.4 54.8,250.2 55,250 55.3,249.8 55.5,249.6 55.8,249.3 56,249.1 56.3,248.9 56.5,248.7 56.8,248.5 57,248.2 57.3,248 57.5,247.8 57.8,247.5 58,247.3 58.3,247 58.5,246.8 58.8,246.5 59,246.3 59.3,246 59.5,245.7 59.8,245.5 60,245.2 60.3,244.9 60.5,244.6 60.8,244.4 61,244.1 61.3,243.8 61.5,243.5 61.8,243.2 62,242.9 62.2,242.6 62.5,242.2 62.8,241.9 63,241.6 63.3,241.3 63.5,240.9 63.8,240.6 64,240.2 64.3,239.9 64.5,239.5 64.8,239.1 65,238.8 65.3,238.4 65.5,238 65.8,237.6 66,237.2 66.3,236.8 66.5,236.4 66.8,236 67,235.5 67.3,235.1 67.5,234.7 67.8,234.2 68,233.7 68.3,233.3 68.5,232.8 68.8,232.3 69,231.8 69.3,231.3 69.5,230.8 69.7,230.2 70,229.7 70.3,229.2 70.5,228.6 70.8,228 71,227.4 71.3,226.8 71.5,226.2 71.8,225.6 72,225 72.3,224.3 72.5,223.6 72.8,223 73,222.3 73.3,221.6 73.5,220.8 73.8,220.1 74,219.3 74.3,218.5 74.5,217.7 74.8,216.9 75,216.1 75.3,215.2 75.5,214.3 75.8,213.4 76,212.5 76.3,211.6 76.5,210.6 76.8,209.6 77,208.6 77.2,207.5 77.5,206.4 77.8,205.3 78,204.2 78.3,203 78.5,201.8 78.8,200.5 79,199.2 79.3,197.9 79.5,196.6 79.8,195.2 80,193.7 80.3,192.2 80.5,190.7 80.8,189.1 81,187.4 81.3,185.8 81.5,184 81.8,182.2 82,180.3 82.3,178.4 82.5,176.4 82.8,174.3 83,172.1 83.3,169.9 83.5,167.6 83.8,165.2 84,162.7 84.3,160 84.5,157.3 84.8,154.5 85,151.6 85.3,148.5 85.5,145.3 85.8,142 86,138.5 86.3,134.9 86.5,131 86.8,127.1 87,122.9 87.3,118.5 87.5,113.9 87.8,109 88,103.9 88.3,98.5 88.5,92.9 88.8,86.9 89,80.6 89.3,73.9 89.5,66.8 89.8,59.3 90,51.3 90.3,42.8 90.3,41.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,263.7 34.1,256 37,265.6" fill="currentColor"/>
  <polygon points="90.5,33.7 95.2,43.8 85.2,43.5" fill="currentColor"/>
  <polyline points="107.3,40.1 107.5,57 107.8,78.9 108,98.3 108.3,115.6 108.5,131 108.8,144.8 109,157.2 109.3,168.3 109.5,178.4 109.8,187.5 110,195.8 110.3,203.3 110.5,210.2 110.8,216.4 111,222.2 111.3,227.4 111.5,232.2 111.8,236.7 112,240.8 112.3,244.5 112.5,248 112.8,251.2 113,254.2 113.3,257 113.5,259.5 113.8,261.9 114,264.1 114.3,266.2 114.5,268.1 114.8,269.9 115,271.6 115.3,273.2 115.5,274.6 115.8,276 116,277.3 116.3,278.4 116.5,279.6 116.8,280.6 117,281.6 117.3,282.5 117.5,283.4 117.8,284.2 118,285 118.3,285.7 118.5,286.4 118.8,287 119,287.6 119.3,288.1 119.5,288.7 119.8,289.2 120,289.6 120.3,290.1 120.5,290.5 120.8,290.9 121,291.2 121.3,291.6 121.5,291.9 121.8,292.2 122,292.5 122.3,292.7 122.5,293 122.8,293.2 123,293.5 123.3,293.7 123.5,293.9 123.8,294 124,294.2 124.3,294.4 124.5,294.5 124.8,294.7 125,294.8 125.3,294.9 125.5,295 125.8,295.1 126,295.2 126.3,295.3 126.5,295.4 126.8,295.5 127,295.5 127.3,295.6 127.5,295.7 127.8,295.7 128,295.8 128.3,295.8 128.5,295.8 128.8,295.9 129,295.9 129.3,295.9 129.5,295.9 129.8,296 130,296 130.3,296 130.5,296 130.8,296 131,296 131.3,296 131.5,296 131.8,296 132,296 132.3,296 132.5,296 132.8,295.9 133,295.9 133.3,295.9 133.5,295.9 133.8,295.9 134,295.8 134.3,295.8 134.5,295.8 134.8,295.7 135,295.7 135.3,295.7 135.5,295.7 135.8,295.6 136,295.6 136.3,295.5 136.5,295.5 136.8,295.5 137,295.4 137.3,295.4 137.5,295.3 137.8,295.3 138,295.3 138.3,295.2 138.5,295.2 138.8,295.1 139,295.1 139.3,295 139.5,295 139.8,294.9 140,294.9 140.3,294.8 140.5,294.8 140.8,294.7 141,294.7 141.3,294.6 141.5,294.6 141.8,294.5 142,294.4 142.3,294.4 142.5,294.3 142.8,294.3 143,294.2 143.3,294.2 143.5,294.1 143.8,294 144,294 144.3,293.9 144.5,293.9 144.8,293.8 145,293.7 145.3,293.7 145.5,293.6 145.8,293.6 146,293.5 146.3,293.4 146.5,293.4 146.8,293.3 147,293.2 147.3,293.2 147.5,293.1 147.8,293.1 148,293 148.3,292.9 148.5,292.9 148.8,292.8 149,292.7 149.3,292.7 149.5,292.6 149.8,292.5 150,292.4 150.3,292.4 150.5,292.3 150.8,292.2 151,292.2 151.3,292.1 151.5,292 151.8,291.9 152,291.9 152.3,291.8 152.5,291.7 152.8,291.6 153,291.6 153.3,291.5 153.5,291.4 153.8,291.3 154,291.2 154.3,291.2 154.5,291.1 154.8,291 155,290.9 155.3,290.8 155.5,290.8 155.8,290.7 156,290.6 156.3,290.5 156.5,290.4 156.8,290.3 157,290.2 157.3,290.1 157.5,290 157.8,289.9 158,289.8 158.3,289.7 158.5,289.6 158.8,289.5 159,289.4 159.3,289.3 159.5,289.2 159.8,289.1 160,289 160.3,288.9 160.5,288.7 160.8,288.6 161,288.5 161.3,288.4 161.5,288.2 161.8,288.1 162,288 162.3,287.8 162.5,287.7 162.8,287.5 163,287.4 163.3,287.2 163.5,287.1 163.8,286.9 164,286.7 164.3,286.6 164.5,286.4 164.8,286.2 165,286 165.3,285.8 165.5,285.6 165.8,285.4 166,285.1 166.3,284.9 166.5,284.6 166.8,284.4 167,284.1 167.3,283.8 167.5,283.5 167.8,283.2 168,282.8 168.3,282.5 168.5,282.1 168.8,281.7 169,281.3 169.3,280.8 169.5,280.3 169.8,279.8 170,279.2 170.3,278.6 170.5,277.9 170.8,277.2 171,276.4 171.3,275.5 171.5,274.5 171.8,273.5 172,272.2 172.3,270.9 172.5,269.3 172.8,267.5 173,265.4 173.3,262.9 173.5,259.9 173.8,256.3 174,251.8 174.3,245.9 174.5,238.2 174.8,227.4 175,211.1 175.3,184.1 175.5,138.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="107.3,32.1 112.4,42.1 102.4,42.2" fill="currentColor"/>
  <polygon points="175.5,130.1 180.5,140.1 170.5,140.1" fill="currentColor"/>
  <polyline points="176.5,446 176.8,400 177,372.9 177.3,356.7 177.5,345.9 177.8,338.1 178,332.3 178.3,327.8 178.5,324.2 178.8,321.2 179,318.7 179.3,316.6 179.5,314.8 179.8,313.2 180,311.9 180.3,310.7 180.5,309.6 180.8,308.6 181,307.7 181.3,306.9 181.5,306.2 181.8,305.5 182,304.9 182.3,304.4 182.5,303.8 182.8,303.3 183,302.9 183.3,302.5 183.5,302.1 183.8,301.7 184,301.4 184.3,301 184.5,300.7 184.8,300.4 185,300.1 185.3,299.9 185.5,299.6 185.8,299.4 186,299.1 186.3,298.9 186.5,298.7 186.8,298.5 187,298.3 187.3,298.1 187.5,297.9 187.8,297.8 188,297.6 188.3,297.4 188.5,297.3 188.8,297.1 189,297 189.3,296.9 189.5,296.7 189.8,296.6 190,296.5 190.3,296.3 190.5,296.2 190.8,296.1 191,296 191.3,295.9 191.5,295.8 191.8,295.7 192,295.6 192.3,295.5 192.5,295.4 192.8,295.3 193,295.2 193.3,295.1 193.5,295 193.8,294.9 194,294.9 194.3,294.8 194.5,294.7 194.8,294.6 195,294.5 195.3,294.5 195.5,294.4 195.8,294.3 196,294.2 196.3,294.2 196.5,294.1 196.8,294 197,294 197.3,293.9 197.5,293.8 197.8,293.8 198,293.7 198.3,293.7 198.5,293.6 198.8,293.5 199,293.5 199.3,293.4 199.5,293.4 199.8,293.3 200,293.3 200.3,293.2 200.5,293.2 200.8,293.1 201,293.1 201.3,293 201.5,293 201.8,292.9 202,292.9 202.3,292.8 202.5,292.8 202.8,292.7 203,292.7 203.3,292.6 203.5,292.6 203.8,292.5 204,292.5 204.3,292.5 204.5,292.4 204.8,292.4 205,292.3 205.3,292.3 205.5,292.3 205.8,292.2 206,292.2 206.3,292.1 206.5,292.1 206.8,292.1 207,292 207.3,292 207.5,291.9 207.8,291.9 208,291.9 208.3,291.8 208.5,291.8 208.8,291.8 209,291.7 209.3,291.7 209.5,291.7 209.8,291.6 210,291.6 210.3,291.6 210.5,291.5 210.8,291.5 211,291.5 211.3,291.4 211.5,291.4 211.8,291.4 212,291.3 212.3,291.3 212.5,291.3 212.8,291.2 213,291.2 213.3,291.2 213.5,291.2 213.8,291.1 214,291.1 214.3,291.1 214.5,291 214.8,291 215,291 215.3,291 215.5,290.9 215.8,290.9 216,290.9 216.3,290.9 216.5,290.8 216.8,290.8 217,290.8 217.3,290.7 217.5,290.7 217.8,290.7 218,290.7 218.3,290.6 218.5,290.6 218.8,290.6 219,290.6 219.3,290.5 219.5,290.5 219.8,290.5 220,290.5 220.3,290.4 220.5,290.4 220.8,290.4 221,290.4 221.3,290.4 221.5,290.3 221.8,290.3 222,290.3 222.3,290.3 222.5,290.2 222.8,290.2 223,290.2 223.3,290.2 223.5,290.1 223.8,290.1 224,290.1 224.3,290.1 224.5,290.1 224.8,290 225,290 225.3,290 225.5,290 225.8,290 226,289.9 226.3,289.9 226.5,289.9 226.8,289.9 227,289.9 227.3,289.8 227.5,289.8 227.8,289.8 228,289.8 228.3,289.8 228.5,289.7 228.8,289.7 229,289.7 229.3,289.7 229.5,289.7 229.8,289.6 230,289.6 230.3,289.6 230.5,289.6 230.8,289.6 231,289.5 231.3,289.5 231.5,289.5 231.8,289.5 232,289.5 232.3,289.5 232.5,289.4 232.8,289.4 233,289.4 233.3,289.4 233.5,289.4 233.8,289.3 234,289.3 234.3,289.3 234.5,289.3 234.8,289.3 235,289.3 235.3,289.2 235.5,289.2 235.8,289.2 236,289.2 236.3,289.2 236.5,289.2 236.8,289.1 237,289.1 237.3,289.1 237.5,289.1 237.8,289.1 238,289.1 238.3,289 238.5,289 238.8,289 239,289 239.3,289 239.5,289 239.8,289 240,288.9 240.3,288.9 240.5,288.9 240.8,288.9 241,288.9 241.3,288.9 241.5,288.8 241.8,288.8 242,288.8 242.3,288.8 242.5,288.8 242.8,288.8 243,288.8 243.3,288.7 243.5,288.7 243.8,288.7 244,288.7 244.3,288.7 244.5,288.7 244.8,288.7 245,288.6 245.3,288.6 245.5,288.6 245.8,288.6 246,288.6 246.3,288.6 246.5,288.6 246.8,288.5 247,288.5 247.3,288.5 247.5,288.5 247.8,288.5 248,288.5 248.3,288.5 248.5,288.5 248.8,288.4 249,288.4 249.3,288.4 249.5,288.4 249.8,288.4 250,288.4 250.3,288.4 250.5,288.3 250.8,288.3 251,288.3 251.3,288.3 251.5,288.3 251.8,288.3 252,288.3 252.3,288.3 252.5,288.2 252.8,288.2 253,288.2 253.3,288.2 253.5,288.2 253.8,288.2 254,288.2 254.3,288.2 254.5,288.1 254.8,288.1 255,288.1 255.3,288.1 255.5,288.1 255.8,288.1 256,288.1 256.3,288.1 256.5,288.1 256.8,288 257,288 257.3,288 257.5,288 257.8,288 258,288 258,288" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="176.5,454 171.5,444 181.5,444" fill="currentColor"/>
  <polygon points="266,287.6 256.2,293.1 255.8,283.1" fill="currentColor"/>
  <circle cx="131" cy="296" r="4" fill="currentColor"/>
  <circle cx="191" cy="296" r="4" fill="currentColor"/>
  <circle cx="146" cy="293.5" r="4" fill="currentColor"/>
  <text x="131" y="319" font-size="13" fill="currentColor" text-anchor="middle">(−1, 0)</text>
  <text x="202.2" y="316.2" font-size="13" fill="currentColor" text-anchor="start">(3, 0)</text>
  <text x="157.2" y="282.3" font-size="13" fill="currentColor" text-anchor="start">(0, 1/6)</text>
  <text x="117" y="453.7" font-size="13" fill="currentColor" text-anchor="start">x = −3</text>
  <text x="160" y="453.7" font-size="13" fill="currentColor" text-anchor="end">x = 2</text>
  <text x="236.7" y="269" font-size="13" fill="currentColor" text-anchor="middle">y = 1</text>
</svg>
</div>
- At the $x$-intercept $x=-1$ corresponding to the $(x+1)^2$ factor of the
  numerator, the graph bounces, consistent with the quadratic nature of the
  factor.
- At the $x$-intercept $x=3$ corresponding to the $(x-3)$ factor of the
  numerator, the graph passes through the axis as we would expect from a
  linear factor.
- At the vertical asymptote $x=-3$ corresponding to the $(x+3)^2$ factor of
  the denominator, the graph heads towards positive infinity on both sides
  of the asymptote, consistent with the behavior of the function
  $f(x)=\tfrac{1}{x^2}$.
- At the vertical asymptote $x=2$, corresponding to the $(x-2)$ factor of
  the denominator, the graph heads towards positive infinity on the left
  side of the asymptote and towards negative infinity on the right side.

{{< callout type="info" >}}
  **How to:** given a rational function, sketch a graph.

  1. Evaluate the function at 0 to find the $y$-intercept.
  2. Factor the numerator and denominator.
  3. For factors in the numerator not common to the denominator, determine
     where each factor of the numerator is zero to find the $x$-intercepts.
  4. Find the multiplicities of the $x$-intercepts to determine the
     behavior of the graph at those points.
  5. For factors in the denominator, note the multiplicities of the zeros
     to determine the local behavior. For those factors not common to the
     numerator, find the vertical asymptotes by setting those factors equal
     to zero and then solve.
  6. For factors in the denominator common to factors in the numerator,
     find the removable discontinuities by setting those factors equal to 0
     and then solve.
  7. Compare the degrees of the numerator and the denominator to determine
     the horizontal or slant asymptotes.
  8. Sketch the graph.
{{< /callout >}}

**Example.** Sketch a graph of $f(x)=\tfrac{(x+2)(x-3)}{(x+1)^2(x-2)}$.

**Solution.** We can start by noting that the function is already factored,
saving us a step.

Next, we will find the intercepts. Evaluating the function at zero gives
the $y$-intercept:

$$
\begin{array}{lrcl}
& f(0) &=& \tfrac{(0+2)(0-3)}{(0+1)^2(0-2)} \\[4pt]
& &=& 3
\end{array}
$$

To find the $x$-intercepts, we determine when the numerator of the function
is zero. Setting each factor equal to zero, we find $x$-intercepts at
$x=-2$ and $x=3$. At each, the behavior will be linear (multiplicity 1),
with the graph passing through the intercept.

We have a $y$-intercept at $(0,3)$ and $x$-intercepts at $(-2,0)$ and
$(3,0)$.

To find the vertical asymptotes, we determine when the denominator is equal
to zero. This occurs when $x+1=0$ and when $x-2=0$, giving us vertical
asymptotes at $x=-1$ and $x=2$.

There are no common factors in the numerator and denominator. This means
there are no removable discontinuities.

Finally, the degree of denominator is larger than the degree of the
numerator, telling us this graph has a horizontal asymptote at $y=0$.

To sketch the graph, we might start by plotting the three intercepts.
Since the graph has no $x$-intercepts between the vertical asymptotes, and
the $y$-intercept is positive, we know the function must remain positive
between the asymptotes, letting us fill in the middle portion of the graph
as shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The middle portion of the graph of f of x equals the quantity x+2 times x−3, over the quantity x+1 squared times x−2, drawn only between its two vertical asymptotes. The curve dips from the y-intercept at (0, 3) to a low point and back up, and the x-intercepts at (−2, 0) and (3, 0) are marked as isolated points beyond the drawn portion.","xMin":-5,"xMax":5,"yMin":-4,"yMax":6,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-6,-1,1],"den":[-2,-3,0,1],"from":-1,"to":2}],"points":[{"at":[-2,0]},{"at":[3,0]}]}'>
<svg role="img" aria-label="The middle portion of the graph of f of x equals the quantity x+2 times x−3, over the quantity x+1 squared times x−2, drawn only between its two vertical asymptotes. The curve dips from the y-intercept at (0, 3) to a low point and back up, and the x-intercepts at (−2, 0) and (3, 0) are marked as isolated points beyond the drawn portion." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="266" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="170" x2="268" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,170 268,175 268,165" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,170 24,165 24,175" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
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
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
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
  <polyline points="137.6,36.1 137.8,38.3 138,41.4 138.3,44.4 138.5,47.3 138.8,50 139,52.6 139.3,55.1 139.5,57.6 139.8,59.9 140,62.1 140.3,64.3 140.5,66.4 140.8,68.4 141,70.3 141.3,72.2 141.5,74 141.8,75.7 142,77.4 142.3,79 142.5,80.6 142.8,82.1 143,83.6 143.3,85 143.5,86.4 143.8,87.7 144,89 144.3,90.2 144.5,91.4 144.8,92.6 145,93.8 145.3,94.9 145.5,95.9 145.8,97 146,98 146.3,99 146.5,99.9 146.8,100.9 147,101.8 147.3,102.7 147.5,103.5 147.8,104.4 148,105.2 148.3,106 148.5,106.7 148.8,107.5 149,108.2 149.3,108.9 149.5,109.6 149.8,110.3 150,111 150.3,111.6 150.5,112.2 150.8,112.8 151,113.4 151.3,114 151.5,114.6 151.8,115.1 152,115.7 152.3,116.2 152.5,116.7 152.8,117.2 153,117.7 153.3,118.2 153.5,118.7 153.8,119.2 154,119.6 154.3,120 154.5,120.5 154.8,120.9 155,121.3 155.3,121.7 155.5,122.1 155.8,122.5 156,122.8 156.3,123.2 156.5,123.6 156.8,123.9 157,124.3 157.3,124.6 157.5,124.9 157.8,125.2 158,125.6 158.3,125.9 158.5,126.2 158.8,126.5 159,126.7 159.3,127 159.5,127.3 159.8,127.6 160,127.8 160.3,128.1 160.5,128.3 160.8,128.6 161,128.8 161.3,129 161.5,129.2 161.8,129.5 162,129.7 162.3,129.9 162.5,130.1 162.8,130.3 163,130.5 163.3,130.7 163.5,130.9 163.8,131 164,131.2 164.3,131.4 164.5,131.5 164.8,131.7 165,131.9 165.3,132 165.5,132.2 165.8,132.3 166,132.4 166.3,132.6 166.5,132.7 166.8,132.8 167,132.9 167.3,133 167.5,133.2 167.8,133.3 168,133.4 168.3,133.5 168.5,133.5 168.8,133.6 169,133.7 169.3,133.8 169.5,133.9 169.8,133.9 170,134 170.3,134.1 170.5,134.1 170.8,134.2 171,134.2 171.3,134.3 171.5,134.3 171.8,134.3 172,134.4 172.3,134.4 172.5,134.4 172.8,134.4 173,134.4 173.3,134.4 173.5,134.4 173.8,134.4 174,134.4 174.3,134.4 174.5,134.3 174.8,134.3 175,134.3 175.3,134.2 175.5,134.2 175.8,134.1 176,134 176.3,134 176.5,133.9 176.8,133.8 177,133.7 177.3,133.6 177.5,133.5 177.8,133.4 178,133.3 178.3,133.1 178.5,133 178.8,132.8 179,132.7 179.3,132.5 179.5,132.3 179.8,132.1 180,131.9 180.3,131.7 180.5,131.4 180.8,131.2 181,130.9 181.3,130.6 181.5,130.3 181.8,130 182,129.7 182.3,129.3 182.5,129 182.8,128.6 183,128.1 183.3,127.7 183.5,127.2 183.8,126.7 184,126.2 184.3,125.6 184.5,125 184.8,124.4 185,123.7 185.3,123 185.5,122.2 185.8,121.4 186,120.5 186.3,119.6 186.5,118.5 186.8,117.4 187,116.3 187.3,115 187.5,113.6 187.8,112.1 188,110.5 188.3,108.7 188.5,106.8 188.8,104.6 189,102.3 189.3,99.7 189.5,96.7 189.8,93.5 190,89.8 190.3,85.6 190.5,80.8 190.8,75.2 191,68.7 191.3,61.1 191.5,51.8 191.8,40.5 191.9,34.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="137,28.1 142.7,37.7 132.7,38.5" fill="currentColor"/>
  <polygon points="192,26.4 196.8,36.4 186.8,36.3" fill="currentColor"/>
  <circle cx="98" cy="170" r="4" fill="currentColor"/>
  <circle cx="218" cy="170" r="4" fill="currentColor"/>
</svg>
</div>
The factor associated with the vertical asymptote at $x=-1$ was squared, so
we know the behavior will be the same on both sides of the asymptote. The
graph heads toward positive infinity as the inputs approach the asymptote
on the right, so the graph will head toward positive infinity on the left
as well.

For the vertical asymptote at $x=2$, the factor was not squared, so the
graph will have opposite behavior on either side of the asymptote. After
passing through the $x$-intercepts, the graph will then level off toward an
output of zero, as indicated by the horizontal asymptote.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The full graph of f of x equals the quantity x+2 times x−3, over the quantity x+1 squared times x−2, with vertical asymptotes at x=−1 and x=2 and a horizontal asymptote at y=0. Both sides of x=−1 rise toward positive infinity; the graph falls from positive infinity left of x=2 and rises from negative infinity right of x=2, then levels off toward y=0.","xMin":-5,"xMax":5,"yMin":-4,"yMax":6,"unit":24,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-6,-1,1],"den":[-2,-3,0,1]}],"lines":[{"x":-1,"dashed":true,"arrows":false,"label":"x = −1","labelSide":"right"},{"x":2,"dashed":true,"arrows":false,"label":"x = 2","labelSide":"left"},{"y":0,"dashed":true,"arrows":false,"label":"y = 0","labelSide":"left"}]}'>
<svg role="img" aria-label="The full graph of f of x equals the quantity x+2 times x−3, over the quantity x+1 squared times x−2, with vertical asymptotes at x=−1 and x=2 and a horizontal asymptote at y=0. Both sides of x=−1 rise toward positive infinity; the graph falls from positive infinity left of x=2 and rises from negative infinity right of x=2, then levels off toward y=0." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
  <line x1="26" y1="266" x2="26" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="50" y1="266" x2="50" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="74" y1="266" x2="74" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="98" y1="266" x2="98" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="122" y1="266" x2="122" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="170" y1="266" x2="170" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="194" y1="266" x2="194" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="218" y1="266" x2="218" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="242" y1="266" x2="242" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="266" y1="266" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="266" x2="266" y2="266" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="242" x2="266" y2="242" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="218" x2="266" y2="218" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="194" x2="266" y2="194" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="122" x2="266" y2="122" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="98" x2="266" y2="98" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="74" x2="266" y2="74" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="50" x2="266" y2="50" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="170" x2="268" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,170 268,175 268,165" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,170 24,165 24,175" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
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
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="242" x2="149" y2="242" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="246" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="218" x2="149" y2="218" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="222" font-size="11" fill="currentColor" text-anchor="end">−2</text>
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
  <line x1="122" y1="272" x2="122" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="194" y1="272" x2="194" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="20" y1="170" x2="272" y2="170" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,175.5 34,175.5 34.3,175.5 34.5,175.5 34.8,175.5 35,175.5 35.3,175.5 35.5,175.5 35.8,175.6 36,175.6 36.3,175.6 36.5,175.6 36.8,175.6 37,175.6 37.3,175.6 37.5,175.6 37.8,175.6 38,175.7 38.3,175.7 38.5,175.7 38.8,175.7 39,175.7 39.3,175.7 39.5,175.7 39.8,175.7 40,175.7 40.3,175.8 40.5,175.8 40.8,175.8 41,175.8 41.3,175.8 41.5,175.8 41.8,175.8 42,175.8 42.3,175.8 42.5,175.9 42.8,175.9 43,175.9 43.3,175.9 43.5,175.9 43.8,175.9 44,175.9 44.3,175.9 44.5,176 44.8,176 45,176 45.3,176 45.5,176 45.8,176 46,176 46.3,176 46.5,176.1 46.8,176.1 47,176.1 47.3,176.1 47.5,176.1 47.8,176.1 48,176.1 48.3,176.1 48.5,176.1 48.8,176.2 49,176.2 49.3,176.2 49.5,176.2 49.8,176.2 50,176.2 50.3,176.2 50.5,176.2 50.8,176.3 51,176.3 51.3,176.3 51.5,176.3 51.8,176.3 52,176.3 52.3,176.3 52.5,176.3 52.8,176.4 53,176.4 53.3,176.4 53.5,176.4 53.8,176.4 54,176.4 54.3,176.4 54.5,176.4 54.8,176.5 55,176.5 55.3,176.5 55.5,176.5 55.8,176.5 56,176.5 56.3,176.5 56.5,176.5 56.8,176.6 57,176.6 57.3,176.6 57.5,176.6 57.8,176.6 58,176.6 58.3,176.6 58.5,176.6 58.8,176.7 59,176.7 59.3,176.7 59.5,176.7 59.8,176.7 60,176.7 60.3,176.7 60.5,176.7 60.8,176.7 61,176.8 61.3,176.8 61.5,176.8 61.8,176.8 62,176.8 62.3,176.8 62.5,176.8 62.8,176.8 63,176.9 63.3,176.9 63.5,176.9 63.8,176.9 64,176.9 64.3,176.9 64.5,176.9 64.8,176.9 65,176.9 65.3,176.9 65.5,177 65.8,177 66,177 66.3,177 66.5,177 66.8,177 67,177 67.3,177 67.5,177 67.8,177 68,177.1 68.3,177.1 68.5,177.1 68.8,177.1 69,177.1 69.3,177.1 69.5,177.1 69.8,177.1 70,177.1 70.3,177.1 70.5,177.1 70.8,177.1 71,177.1 71.3,177.2 71.5,177.2 71.8,177.2 72,177.2 72.3,177.2 72.5,177.2 72.8,177.2 73,177.2 73.3,177.2 73.5,177.2 73.8,177.2 74,177.2 74.3,177.2 74.5,177.2 74.8,177.2 75,177.2 75.3,177.2 75.5,177.2 75.8,177.2 76,177.2 76.3,177.2 76.5,177.2 76.8,177.2 77,177.2 77.3,177.2 77.5,177.2 77.8,177.2 78,177.2 78.3,177.2 78.5,177.2 78.8,177.2 79,177.2 79.3,177.1 79.5,177.1 79.8,177.1 80,177.1 80.3,177.1 80.5,177.1 80.8,177.1 81,177.1 81.3,177 81.5,177 81.8,177 82,177 82.3,177 82.5,177 82.8,176.9 83,176.9 83.3,176.9 83.5,176.9 83.8,176.8 84,176.8 84.3,176.8 84.5,176.7 84.8,176.7 85,176.7 85.3,176.6 85.5,176.6 85.8,176.6 86,176.5 86.3,176.5 86.5,176.4 86.8,176.4 87,176.3 87.3,176.3 87.5,176.2 87.8,176.2 88,176.1 88.3,176 88.5,176 88.8,175.9 89,175.8 89.3,175.8 89.5,175.7 89.8,175.6 90,175.5 90.3,175.5 90.5,175.4 90.8,175.3 91,175.2 91.3,175.1 91.5,175 91.8,174.9 92,174.7 92.3,174.6 92.5,174.5 92.8,174.4 93,174.2 93.3,174.1 93.5,174 93.8,173.8 94,173.6 94.3,173.5 94.5,173.3 94.8,173.1 95,172.9 95.3,172.8 95.5,172.6 95.8,172.3 96,172.1 96.3,171.9 96.5,171.7 96.8,171.4 97,171.1 97.3,170.9 97.5,170.6 97.8,170.3 98,170 98.3,169.7 98.5,169.3 98.8,169 99,168.6 99.3,168.3 99.5,167.9 99.8,167.4 100,167 100.3,166.6 100.5,166.1 100.8,165.6 101,165.1 101.3,164.5 101.5,164 101.8,163.4 102,162.7 102.3,162.1 102.5,161.4 102.8,160.7 103,159.9 103.3,159.1 103.5,158.3 103.8,157.4 104,156.5 104.3,155.5 104.5,154.5 104.8,153.4 105,152.3 105.3,151.1 105.5,149.8 105.8,148.5 106,147.1 106.3,145.6 106.5,144 106.8,142.4 107,140.6 107.3,138.7 107.5,136.8 107.8,134.6 108,132.4 108.3,130 108.5,127.5 108.8,124.8 109,121.9 109.3,118.9 109.5,115.6 109.8,112.1 110,108.3 110.3,104.2 110.5,99.9 110.8,95.2 111,90.2 111.3,84.8 111.5,79 111.8,72.6 112,65.8 112.3,58.3 112.5,50.2 112.8,41.4 112.8,39.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,175.1 36.2,170.6 35.8,180.6" fill="currentColor"/>
  <polygon points="113,31.7 117.7,41.9 107.7,41.6" fill="currentColor"/>
  <polyline points="137.6,36.1 137.8,38.3 138,41.4 138.3,44.4 138.5,47.3 138.8,50 139,52.6 139.3,55.1 139.5,57.6 139.8,59.9 140,62.1 140.3,64.3 140.5,66.4 140.8,68.4 141,70.3 141.3,72.2 141.5,74 141.8,75.7 142,77.4 142.3,79 142.5,80.6 142.8,82.1 143,83.6 143.3,85 143.5,86.4 143.8,87.7 144,89 144.3,90.2 144.5,91.4 144.8,92.6 145,93.8 145.3,94.9 145.5,95.9 145.8,97 146,98 146.3,99 146.5,99.9 146.8,100.9 147,101.8 147.3,102.7 147.5,103.5 147.8,104.4 148,105.2 148.3,106 148.5,106.7 148.8,107.5 149,108.2 149.3,108.9 149.5,109.6 149.8,110.3 150,111 150.3,111.6 150.5,112.2 150.8,112.8 151,113.4 151.3,114 151.5,114.6 151.8,115.1 152,115.7 152.3,116.2 152.5,116.7 152.8,117.2 153,117.7 153.3,118.2 153.5,118.7 153.8,119.2 154,119.6 154.3,120 154.5,120.5 154.8,120.9 155,121.3 155.3,121.7 155.5,122.1 155.8,122.5 156,122.8 156.3,123.2 156.5,123.6 156.8,123.9 157,124.3 157.3,124.6 157.5,124.9 157.8,125.2 158,125.6 158.3,125.9 158.5,126.2 158.8,126.5 159,126.7 159.3,127 159.5,127.3 159.8,127.6 160,127.8 160.3,128.1 160.5,128.3 160.8,128.6 161,128.8 161.3,129 161.5,129.2 161.8,129.5 162,129.7 162.3,129.9 162.5,130.1 162.8,130.3 163,130.5 163.3,130.7 163.5,130.9 163.8,131 164,131.2 164.3,131.4 164.5,131.5 164.8,131.7 165,131.9 165.3,132 165.5,132.2 165.8,132.3 166,132.4 166.3,132.6 166.5,132.7 166.8,132.8 167,132.9 167.3,133 167.5,133.2 167.8,133.3 168,133.4 168.3,133.5 168.5,133.5 168.8,133.6 169,133.7 169.3,133.8 169.5,133.9 169.8,133.9 170,134 170.3,134.1 170.5,134.1 170.8,134.2 171,134.2 171.3,134.3 171.5,134.3 171.8,134.3 172,134.4 172.3,134.4 172.5,134.4 172.8,134.4 173,134.4 173.3,134.4 173.5,134.4 173.8,134.4 174,134.4 174.3,134.4 174.5,134.3 174.8,134.3 175,134.3 175.3,134.2 175.5,134.2 175.8,134.1 176,134 176.3,134 176.5,133.9 176.8,133.8 177,133.7 177.3,133.6 177.5,133.5 177.8,133.4 178,133.3 178.3,133.1 178.5,133 178.8,132.8 179,132.7 179.3,132.5 179.5,132.3 179.8,132.1 180,131.9 180.3,131.7 180.5,131.4 180.8,131.2 181,130.9 181.3,130.6 181.5,130.3 181.8,130 182,129.7 182.3,129.3 182.5,129 182.8,128.6 183,128.1 183.3,127.7 183.5,127.2 183.8,126.7 184,126.2 184.3,125.6 184.5,125 184.8,124.4 185,123.7 185.3,123 185.5,122.2 185.8,121.4 186,120.5 186.3,119.6 186.5,118.5 186.8,117.4 187,116.3 187.3,115 187.5,113.6 187.8,112.1 188,110.5 188.3,108.7 188.5,106.8 188.8,104.6 189,102.3 189.3,99.7 189.5,96.7 189.8,93.5 190,89.8 190.3,85.6 190.5,80.8 190.8,75.2 191,68.7 191.3,61.1 191.5,51.8 191.8,40.5 191.9,34.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="137,28.1 142.7,37.7 132.7,38.5" fill="currentColor"/>
  <polygon points="192,26.4 196.8,36.4 186.8,36.3" fill="currentColor"/>
  <polyline points="196.7,249.9 196.8,248.7 197,241 197.3,234.5 197.5,228.9 197.8,224.1 198,219.9 198.3,216.2 198.5,212.9 198.8,209.9 199,207.3 199.3,204.9 199.5,202.7 199.8,200.8 200,199 200.3,197.3 200.5,195.8 200.8,194.4 201,193.1 201.3,191.9 201.5,190.8 201.8,189.7 202,188.7 202.3,187.8 202.5,186.9 202.8,186.1 203,185.4 203.3,184.6 203.5,184 203.8,183.3 204,182.7 204.3,182.1 204.5,181.6 204.8,181.1 205,180.6 205.3,180.1 205.5,179.7 205.8,179.2 206,178.8 206.3,178.4 206.5,178.1 206.8,177.7 207,177.4 207.3,177 207.5,176.7 207.8,176.4 208,176.1 208.3,175.8 208.5,175.6 208.8,175.3 209,175.1 209.3,174.8 209.5,174.6 209.8,174.4 210,174.2 210.3,174 210.5,173.8 210.8,173.6 211,173.4 211.3,173.2 211.5,173 211.8,172.9 212,172.7 212.3,172.5 212.5,172.4 212.8,172.2 213,172.1 213.3,172 213.5,171.8 213.8,171.7 214,171.6 214.3,171.5 214.5,171.3 214.8,171.2 215,171.1 215.3,171 215.5,170.9 215.8,170.8 216,170.7 216.3,170.6 216.5,170.5 216.8,170.4 217,170.3 217.3,170.2 217.5,170.2 217.8,170.1 218,170 218.3,169.9 218.5,169.8 218.8,169.8 219,169.7 219.3,169.6 219.5,169.6 219.8,169.5 220,169.4 220.3,169.4 220.5,169.3 220.8,169.3 221,169.2 221.3,169.1 221.5,169.1 221.8,169 222,169 222.3,168.9 222.5,168.9 222.8,168.8 223,168.8 223.3,168.7 223.5,168.7 223.8,168.6 224,168.6 224.3,168.6 224.5,168.5 224.8,168.5 225,168.4 225.3,168.4 225.5,168.4 225.8,168.3 226,168.3 226.3,168.3 226.5,168.2 226.8,168.2 227,168.2 227.3,168.1 227.5,168.1 227.8,168.1 228,168 228.3,168 228.5,168 228.8,168 229,167.9 229.3,167.9 229.5,167.9 229.8,167.9 230,167.8 230.3,167.8 230.5,167.8 230.8,167.8 231,167.7 231.3,167.7 231.5,167.7 231.8,167.7 232,167.6 232.3,167.6 232.5,167.6 232.8,167.6 233,167.6 233.3,167.6 233.5,167.5 233.8,167.5 234,167.5 234.3,167.5 234.5,167.5 234.8,167.5 235,167.4 235.3,167.4 235.5,167.4 235.8,167.4 236,167.4 236.3,167.4 236.5,167.4 236.8,167.3 237,167.3 237.3,167.3 237.5,167.3 237.8,167.3 238,167.3 238.3,167.3 238.5,167.3 238.8,167.2 239,167.2 239.3,167.2 239.5,167.2 239.8,167.2 240,167.2 240.3,167.2 240.5,167.2 240.8,167.2 241,167.2 241.3,167.1 241.5,167.1 241.8,167.1 242,167.1 242.3,167.1 242.5,167.1 242.8,167.1 243,167.1 243.3,167.1 243.5,167.1 243.8,167.1 244,167.1 244.3,167.1 244.5,167 244.8,167 245,167 245.3,167 245.5,167 245.8,167 246,167 246.3,167 246.5,167 246.8,167 247,167 247.3,167 247.5,167 247.8,167 248,167 248.3,167 248.5,167 248.8,167 249,167 249.3,167 249.5,167 249.8,166.9 250,166.9 250.3,166.9 250.5,166.9 250.8,166.9 251,166.9 251.3,166.9 251.5,166.9 251.8,166.9 252,166.9 252.3,166.9 252.5,166.9 252.8,166.9 253,166.9 253.3,166.9 253.5,166.9 253.8,166.9 254,166.9 254.3,166.9 254.5,166.9 254.8,166.9 255,166.9 255.3,166.9 255.5,166.9 255.8,166.9 256,166.9 256.3,166.9 256.5,166.9 256.8,166.9 257,166.9 257.3,166.9 257.5,166.9 257.8,166.9 258,166.9 258,166.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="196.5,257.9 191.8,247.8 201.8,248.1" fill="currentColor"/>
  <polygon points="266,166.9 256,171.9 256,161.9" fill="currentColor"/>
  <text x="138" y="213" font-size="13" fill="currentColor" text-anchor="start">x = −1</text>
  <text x="172" y="79.4" font-size="13" fill="currentColor" text-anchor="end">x = 2</text>
  <text x="236.7" y="152" font-size="13" fill="currentColor" text-anchor="middle">y = 0</text>
</svg>
</div>
{{< fillin
  question="Given the function $f(x)=\tfrac{(x+2)^2(x-2)}{2(x-1)^2(x-3)}$, find its vertical asymptotes. If there is more than one, separate them with a comma."
  answer="x=1,x=3"
  answerMode="unordered"
  answerDisplay="$x=1$ or $x=3$"
  hint="Set each denominator factor equal to zero; neither cancels with a numerator factor."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function."
  answer="y=\frac{1}{2}"
  answerDisplay="$y=\tfrac{1}{2}$"
  hint="Numerator and denominator both have degree 3; take the ratio of their leading coefficients."
>}}

{{< fillin
  question="Find the $y$-intercept of that same function, as an ordered pair $(x,y)$."
  answer="(0,\frac{4}{3})"
  answerDisplay="$(0,\tfrac{4}{3})$"
  hint="Evaluate the function at $x=0$."
>}}

## Writing rational functions

Now that we have analyzed the equations for rational functions and how they
relate to a graph of the function, we can use information given by a graph
to write the function. A rational function written in factored form will
have an $x$-intercept where each factor of the numerator is equal to zero.
(An exception occurs in the case of a removable discontinuity.) As a
result, we can form a numerator of a function whose graph will pass through
a set of $x$-intercepts by introducing a corresponding set of factors.
Likewise, because the function will have a vertical asymptote where each
factor of the denominator is equal to zero, we can form a denominator that
will produce the vertical asymptotes by introducing a corresponding set of
factors.

{{< callout type="info" >}}
  **Writing rational functions from intercepts and asymptotes.** If a
  rational function has $x$-intercepts at $x=x_1,x_2,\ldots,x_n$, vertical
  asymptotes at $x=v_1,v_2,\ldots,v_m$, and no $x_i=$ any $v_j$, then the
  function can be written in the form:

  $$f(x)=a\tfrac{(x-x_1)^{p_1}(x-x_2)^{p_2}\cdots(x-x_n)^{p_n}}{(x-v_1)^{q_1}(x-v_2)^{q_2}\cdots(x-v_m)^{q_m}}$$

  where the powers $p_i$ or $q_i$ on each factor can be determined by the
  behavior of the graph at the corresponding intercept or asymptote, and
  the stretch factor $a$ can be determined given a value of the function
  other than the $x$-intercept or by the horizontal asymptote if it is
  nonzero.
{{< /callout >}}

{{< callout type="info" >}}
  **How to:** given a graph of a rational function, write the function.

  1. Determine the factors of the numerator. Examine the behavior of the
     graph at the $x$-intercepts to determine the zeroes and their
     multiplicities. (This is easy to do when finding the "simplest"
     function with small multiplicities — such as 1 or 3 — but may be
     difficult for larger multiplicities — such as 5 or 7, for example.)
  2. Determine the factors of the denominator. Examine the behavior on both
     sides of each vertical asymptote to determine the factors and their
     powers.
  3. Use any clear point on the graph to find the stretch factor.
{{< /callout >}}

**Example.** Write an equation for the rational function shown below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"An unlabeled graph of a rational function with two vertical asymptotes and a horizontal asymptote near y=0, passing through two x-intercepts. The left branch rises from a dip near the left asymptote up through the top of the grid; the middle branch dips down through both x-intercepts to a low point and rises back up; the right branch descends steeply then levels off near the horizontal axis.","xMin":-6,"xMax":6,"yMin":-7,"yMax":5,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-24,-4,4],"den":[12,0,-9,3]}]}'>
<svg role="img" aria-label="An unlabeled graph of a rational function with two vertical asymptotes and a horizontal asymptote near y=0, passing through two x-intercepts. The left branch rises from a dip near the left asymptote up through the top of the grid; the middle branch dips down through both x-intercepts to a low point and rises back up; the right branch descends steeply then levels off near the horizontal axis." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="268" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,126 268,131 268,121" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="123" x2="106" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="123" x2="126" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="123" x2="206" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="123" x2="226" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="123" x2="246" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="141" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="123" x2="266" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="141" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−7</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="146" x2="149" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <polyline points="34,129.1 34,129.1 34.3,129.1 34.5,129.1 34.8,129.1 35,129.1 35.3,129.1 35.5,129.1 35.8,129.1 36,129.1 36.3,129.1 36.5,129.1 36.8,129.1 37,129.1 37.3,129.2 37.5,129.2 37.8,129.2 38,129.2 38.3,129.2 38.5,129.2 38.8,129.2 39,129.2 39.3,129.2 39.5,129.2 39.8,129.2 40,129.2 40.3,129.2 40.5,129.2 40.8,129.2 41,129.2 41.3,129.2 41.5,129.2 41.8,129.2 42,129.2 42.3,129.2 42.5,129.2 42.8,129.2 43,129.2 43.3,129.2 43.5,129.2 43.8,129.2 44,129.2 44.3,129.2 44.5,129.2 44.8,129.2 45,129.3 45.3,129.3 45.5,129.3 45.8,129.3 46,129.3 46.3,129.3 46.5,129.3 46.8,129.3 47,129.3 47.3,129.3 47.5,129.3 47.8,129.3 48,129.3 48.3,129.3 48.5,129.3 48.8,129.3 49,129.3 49.3,129.3 49.5,129.3 49.8,129.3 50,129.3 50.3,129.3 50.5,129.3 50.8,129.3 51,129.3 51.3,129.3 51.5,129.3 51.8,129.3 52,129.3 52.3,129.3 52.5,129.3 52.8,129.3 53,129.3 53.3,129.4 53.5,129.4 53.8,129.4 54,129.4 54.3,129.4 54.5,129.4 54.8,129.4 55,129.4 55.3,129.4 55.5,129.4 55.8,129.4 56,129.4 56.3,129.4 56.5,129.4 56.8,129.4 57,129.4 57.3,129.4 57.5,129.4 57.8,129.4 58,129.4 58.3,129.4 58.5,129.4 58.8,129.4 59,129.4 59.3,129.4 59.5,129.4 59.8,129.4 60,129.4 60.3,129.4 60.5,129.4 60.8,129.4 61,129.4 61.3,129.4 61.5,129.4 61.8,129.4 62,129.4 62.3,129.4 62.5,129.4 62.8,129.4 63,129.4 63.3,129.4 63.5,129.4 63.8,129.4 64,129.4 64.3,129.4 64.5,129.4 64.8,129.5 65,129.5 65.3,129.5 65.5,129.5 65.8,129.5 66,129.5 66.3,129.5 66.5,129.5 66.8,129.5 67,129.5 67.3,129.5 67.5,129.5 67.8,129.5 68,129.5 68.3,129.5 68.5,129.5 68.8,129.5 69,129.5 69.3,129.5 69.5,129.5 69.8,129.5 70,129.5 70.3,129.5 70.5,129.5 70.8,129.5 71,129.5 71.3,129.5 71.5,129.5 71.8,129.5 72,129.5 72.3,129.5 72.5,129.5 72.8,129.5 73,129.5 73.3,129.5 73.5,129.5 73.8,129.5 74,129.5 74.3,129.5 74.5,129.5 74.8,129.4 75,129.4 75.3,129.4 75.5,129.4 75.8,129.4 76,129.4 76.3,129.4 76.5,129.4 76.8,129.4 77,129.4 77.3,129.4 77.5,129.4 77.8,129.4 78,129.4 78.3,129.4 78.5,129.4 78.8,129.4 79,129.4 79.3,129.4 79.5,129.4 79.8,129.4 80,129.4 80.3,129.4 80.5,129.4 80.8,129.4 81,129.4 81.3,129.4 81.5,129.3 81.8,129.3 82,129.3 82.3,129.3 82.5,129.3 82.8,129.3 83,129.3 83.3,129.3 83.5,129.3 83.8,129.3 84,129.3 84.3,129.3 84.5,129.3 84.8,129.2 85,129.2 85.3,129.2 85.5,129.2 85.8,129.2 86,129.2 86.3,129.2 86.5,129.2 86.8,129.2 87,129.2 87.3,129.1 87.5,129.1 87.8,129.1 88,129.1 88.3,129.1 88.5,129.1 88.8,129.1 89,129 89.3,129 89.5,129 89.8,129 90,129 90.3,129 90.5,128.9 90.8,128.9 91,128.9 91.3,128.9 91.5,128.9 91.8,128.9 92,128.8 92.3,128.8 92.5,128.8 92.8,128.8 93,128.7 93.3,128.7 93.5,128.7 93.8,128.7 94,128.6 94.3,128.6 94.5,128.6 94.8,128.6 95,128.5 95.3,128.5 95.5,128.5 95.8,128.4 96,128.4 96.3,128.4 96.5,128.3 96.8,128.3 97,128.3 97.3,128.2 97.5,128.2 97.8,128.2 98,128.1 98.3,128.1 98.5,128 98.8,128 99,128 99.3,127.9 99.5,127.9 99.8,127.8 100,127.8 100.3,127.7 100.5,127.7 100.8,127.6 101,127.6 101.3,127.5 101.5,127.4 101.8,127.4 102,127.3 102.3,127.2 102.5,127.2 102.8,127.1 103,127 103.3,127 103.5,126.9 103.8,126.8 104,126.7 104.3,126.7 104.5,126.6 104.8,126.5 105,126.4 105.3,126.3 105.5,126.2 105.8,126.1 106,126 106.3,125.9 106.5,125.8 106.8,125.7 107,125.6 107.3,125.4 107.5,125.3 107.8,125.2 108,125 108.3,124.9 108.5,124.8 108.8,124.6 109,124.5 109.3,124.3 109.5,124.1 109.8,124 110,123.8 110.3,123.6 110.5,123.4 110.8,123.2 111,123 111.3,122.8 111.5,122.6 111.8,122.3 112,122.1 112.3,121.8 112.5,121.6 112.8,121.3 113,121 113.3,120.7 113.5,120.4 113.8,120 114,119.7 114.3,119.3 114.5,118.9 114.8,118.5 115,118.1 115.3,117.7 115.5,117.2 115.8,116.7 116,116.2 116.3,115.7 116.5,115.1 116.8,114.5 117,113.8 117.3,113.1 117.5,112.4 117.8,111.6 118,110.8 118.3,109.9 118.5,108.9 118.8,107.9 119,106.8 119.3,105.6 119.5,104.3 119.8,102.9 120,101.4 120.3,99.8 120.5,98 120.8,96 121,93.8 121.3,91.4 121.5,88.7 121.8,85.7 122,82.3 122.3,78.4 122.5,73.9 122.8,68.8 123,62.8 123.3,55.7 123.5,47.2 123.6,44.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,129 36.1,124.1 35.9,134.1" fill="currentColor"/>
  <polygon points="123.8,36.7 128.5,46.8 118.5,46.6" fill="currentColor"/>
  <polyline points="128.2,254 128.3,249 128.5,238.5 128.8,230 129,222.9 129.3,216.9 129.5,211.8 129.8,207.4 130,203.6 130.3,200.2 130.5,197.2 130.8,194.5 131,192.1 131.3,190 131.5,188 131.8,186.3 132,184.6 132.3,183.2 132.5,181.8 132.8,180.6 133,179.5 133.3,178.4 133.5,177.4 133.8,176.5 134,175.7 134.3,174.9 134.5,174.2 134.8,173.5 135,172.9 135.3,172.3 135.5,171.8 135.8,171.3 136,170.8 136.3,170.4 136.5,169.9 136.8,169.6 137,169.2 137.3,168.9 137.5,168.5 137.8,168.2 138,168 138.3,167.7 138.5,167.5 138.8,167.3 139,167.1 139.3,166.9 139.5,166.7 139.8,166.5 140,166.4 140.3,166.3 140.5,166.1 140.8,166 141,165.9 141.3,165.9 141.5,165.8 141.8,165.7 142,165.7 142.3,165.6 142.5,165.6 142.8,165.6 143,165.6 143.3,165.5 143.5,165.5 143.8,165.6 144,165.6 144.3,165.6 144.5,165.6 144.8,165.7 145,165.7 145.3,165.8 145.5,165.8 145.8,165.9 146,166 146.3,166.1 146.5,166.2 146.8,166.3 147,166.4 147.3,166.5 147.5,166.6 147.8,166.8 148,166.9 148.3,167 148.5,167.2 148.8,167.4 149,167.5 149.3,167.7 149.5,167.9 149.8,168.1 150,168.2 150.3,168.5 150.5,168.7 150.8,168.9 151,169.1 151.3,169.3 151.5,169.6 151.8,169.8 152,170.1 152.3,170.3 152.5,170.6 152.8,170.9 153,171.2 153.3,171.5 153.5,171.8 153.8,172.1 154,172.4 154.3,172.8 154.5,173.1 154.8,173.5 155,173.8 155.3,174.2 155.5,174.6 155.8,175 156,175.4 156.3,175.8 156.5,176.2 156.8,176.7 157,177.1 157.3,177.6 157.5,178.1 157.8,178.6 158,179.1 158.3,179.6 158.5,180.1 158.8,180.7 159,181.2 159.3,181.8 159.5,182.4 159.8,183 160,183.6 160.3,184.3 160.5,185 160.8,185.6 161,186.3 161.3,187.1 161.5,187.8 161.8,188.6 162,189.4 162.3,190.2 162.5,191 162.8,191.9 163,192.8 163.3,193.7 163.5,194.7 163.8,195.6 164,196.6 164.3,197.7 164.5,198.8 164.8,199.9 165,201 165.3,202.2 165.5,203.4 165.8,204.7 166,206 166.3,207.4 166.5,208.8 166.8,210.2 167,211.7 167.3,213.3 167.5,214.9 167.8,216.6 168,218.3 168.3,220.2 168.5,222 168.8,224 169,226 169.3,228.2 169.5,230.4 169.8,232.7 170,235.1 170.3,237.6 170.5,240.2 170.8,243 171,245.8 171.3,248.8 171.5,252 171.7,254.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="128,262 123.2,251.9 133.2,252.1" fill="currentColor"/>
  <polygon points="172.3,262.4 166.6,252.8 176.5,252" fill="currentColor"/>
  <polyline points="194.2,247.4 194.3,245.1 194.5,235.7 194.8,227.2 195,219.4 195.3,212.4 195.5,205.9 195.8,200 196,194.6 196.3,189.6 196.5,185 196.8,180.8 197,176.8 197.3,173.2 197.5,169.9 197.8,166.8 198,163.9 198.3,161.2 198.5,158.7 198.8,156.3 199,154.1 199.3,152.1 199.5,150.2 199.8,148.4 200,146.7 200.3,145.2 200.5,143.7 200.8,142.3 201,141 201.3,139.8 201.5,138.6 201.8,137.6 202,136.5 202.3,135.6 202.5,134.6 202.8,133.8 203,133 203.3,132.2 203.5,131.5 203.8,130.8 204,130.1 204.3,129.5 204.5,128.9 204.8,128.4 205,127.9 205.3,127.4 205.5,126.9 205.8,126.4 206,126 206.3,125.6 206.5,125.2 206.8,124.8 207,124.5 207.3,124.2 207.5,123.8 207.8,123.5 208,123.3 208.3,123 208.5,122.7 208.8,122.5 209,122.2 209.3,122 209.5,121.8 209.8,121.6 210,121.4 210.3,121.2 210.5,121.1 210.8,120.9 211,120.7 211.3,120.6 211.5,120.4 211.8,120.3 212,120.2 212.3,120 212.5,119.9 212.8,119.8 213,119.7 213.3,119.6 213.5,119.5 213.8,119.4 214,119.3 214.3,119.2 214.5,119.2 214.8,119.1 215,119 215.3,118.9 215.5,118.9 215.8,118.8 216,118.8 216.3,118.7 216.5,118.6 216.8,118.6 217,118.6 217.3,118.5 217.5,118.5 217.8,118.4 218,118.4 218.3,118.4 218.5,118.3 218.8,118.3 219,118.3 219.3,118.2 219.5,118.2 219.8,118.2 220,118.2 220.3,118.1 220.5,118.1 220.8,118.1 221,118.1 221.3,118.1 221.5,118.1 221.8,118.1 222,118 222.3,118 222.5,118 222.8,118 223,118 223.3,118 223.5,118 223.8,118 224,118 224.3,118 224.5,118 224.8,118 225,118 225.3,118 225.5,118 225.8,118 226,118 226.3,118 226.5,118 226.8,118 227,118 227.3,118 227.5,118 227.8,118 228,118 228.3,118.1 228.5,118.1 228.8,118.1 229,118.1 229.3,118.1 229.5,118.1 229.8,118.1 230,118.1 230.3,118.1 230.5,118.1 230.8,118.1 231,118.2 231.3,118.2 231.5,118.2 231.8,118.2 232,118.2 232.3,118.2 232.5,118.2 232.8,118.2 233,118.3 233.3,118.3 233.5,118.3 233.8,118.3 234,118.3 234.3,118.3 234.5,118.3 234.8,118.4 235,118.4 235.3,118.4 235.5,118.4 235.8,118.4 236,118.4 236.3,118.5 236.5,118.5 236.8,118.5 237,118.5 237.3,118.5 237.5,118.5 237.8,118.5 238,118.6 238.3,118.6 238.5,118.6 238.8,118.6 239,118.6 239.3,118.6 239.5,118.7 239.8,118.7 240,118.7 240.3,118.7 240.5,118.7 240.8,118.7 241,118.8 241.3,118.8 241.5,118.8 241.8,118.8 242,118.8 242.3,118.8 242.5,118.9 242.8,118.9 243,118.9 243.3,118.9 243.5,118.9 243.8,118.9 244,119 244.3,119 244.5,119 244.8,119 245,119 245.3,119 245.5,119.1 245.8,119.1 246,119.1 246.3,119.1 246.5,119.1 246.8,119.1 247,119.2 247.3,119.2 247.5,119.2 247.8,119.2 248,119.2 248.3,119.2 248.5,119.2 248.8,119.3 249,119.3 249.3,119.3 249.5,119.3 249.8,119.3 250,119.3 250.3,119.4 250.5,119.4 250.8,119.4 251,119.4 251.3,119.4 251.5,119.4 251.8,119.5 252,119.5 252.3,119.5 252.5,119.5 252.8,119.5 253,119.5 253.3,119.6 253.5,119.6 253.8,119.6 254,119.6 254.3,119.6 254.5,119.6 254.8,119.6 255,119.7 255.3,119.7 255.5,119.7 255.8,119.7 256,119.7 256.3,119.7 256.5,119.8 256.8,119.8 257,119.8 257.3,119.8 257.5,119.8 257.8,119.8 258,119.8 258,119.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="194,255.4 189.2,245.3 199.2,245.5" fill="currentColor"/>
  <polygon points="266,120.3 255.7,124.7 256.3,114.7" fill="currentColor"/>
</svg>
</div>
**Solution.** The graph appears to have $x$-intercepts at $x=-2$ and $x=3$.
At both, the graph passes through the intercept, suggesting linear factors.
The graph has two vertical asymptotes. The one at $x=-1$ seems to exhibit
the basic behavior similar to $\tfrac{1}{x}$, with the graph heading toward
positive infinity on one side and heading toward negative infinity on the
other. The asymptote at $x=2$ is exhibiting a behavior similar to
$\tfrac{1}{x^2}$, with the graph heading toward negative infinity on both
sides of the asymptote. See the annotated graph below.

<div class="ap-figure" data-spec='{"type":"graph","ariaLabel":"The same rational function graph, now annotated: dashed vertical asymptotes at x=−1 and x=2, and x-intercepts marked at (−2, 0) and (3, 0).","xMin":-6,"xMax":6,"yMin":-7,"yMax":5,"unit":20,"tickLabels":true,"tickStep":1,"rationals":[{"num":[-24,-4,4],"den":[12,0,-9,3]}],"lines":[{"x":-1,"dashed":true,"arrows":false,"label":"x = −1","labelSide":"right"},{"x":2,"dashed":true,"arrows":false,"label":"x = 2","labelSide":"left"}],"points":[{"at":[-2,0],"label":"(−2, 0)","labelSide":"nw"},{"at":[3,0],"label":"(3, 0)","labelSide":"ne"}]}'>
<svg role="img" aria-label="The same rational function graph, now annotated: dashed vertical asymptotes at x=−1 and x=2, and x-intercepts marked at (−2, 0) and (3, 0)." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 292" width="292" height="292" font-family="Helvetica, Arial, sans-serif">
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
  <line x1="26" y1="146" x2="266" y2="146" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="106" x2="266" y2="106" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="86" x2="266" y2="86" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="66" x2="266" y2="66" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="46" x2="266" y2="46" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="26" y1="26" x2="266" y2="26" stroke="currentColor" stroke-width="0.4" opacity="0.2"/>
  <line x1="24" y1="126" x2="268" y2="126" stroke="currentColor" stroke-width="1"/>
  <line x1="146" y1="24" x2="146" y2="268" stroke="currentColor" stroke-width="1"/>
  <polygon points="278,126 268,131 268,121" fill="currentColor"/>
  <polygon points="146,14 151,24 141,24" fill="currentColor"/>
  <polygon points="14,126 24,121 24,131" fill="currentColor"/>
  <polygon points="146,278 141,268 151,268" fill="currentColor"/>
  <text x="276" y="118" font-size="13" fill="currentColor" text-anchor="end" font-style="italic">x</text>
  <text x="154" y="24" font-size="13" fill="currentColor" font-style="italic">y</text>
  <line x1="26" y1="123" x2="26" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="26" y="141" font-size="11" fill="currentColor" text-anchor="middle">−6</text>
  <line x1="46" y1="123" x2="46" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="46" y="141" font-size="11" fill="currentColor" text-anchor="middle">−5</text>
  <line x1="66" y1="123" x2="66" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="66" y="141" font-size="11" fill="currentColor" text-anchor="middle">−4</text>
  <line x1="86" y1="123" x2="86" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="86" y="141" font-size="11" fill="currentColor" text-anchor="middle">−3</text>
  <line x1="106" y1="123" x2="106" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="106" y="141" font-size="11" fill="currentColor" text-anchor="middle">−2</text>
  <line x1="126" y1="123" x2="126" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="126" y="141" font-size="11" fill="currentColor" text-anchor="middle">−1</text>
  <line x1="166" y1="123" x2="166" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="166" y="141" font-size="11" fill="currentColor" text-anchor="middle">1</text>
  <line x1="186" y1="123" x2="186" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="186" y="141" font-size="11" fill="currentColor" text-anchor="middle">2</text>
  <line x1="206" y1="123" x2="206" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="141" font-size="11" fill="currentColor" text-anchor="middle">3</text>
  <line x1="226" y1="123" x2="226" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="226" y="141" font-size="11" fill="currentColor" text-anchor="middle">4</text>
  <line x1="246" y1="123" x2="246" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="246" y="141" font-size="11" fill="currentColor" text-anchor="middle">5</text>
  <line x1="266" y1="123" x2="266" y2="129" stroke="currentColor" stroke-width="1"/>
  <text x="266" y="141" font-size="11" fill="currentColor" text-anchor="middle">6</text>
  <line x1="143" y1="266" x2="149" y2="266" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="270" font-size="11" fill="currentColor" text-anchor="end">−7</text>
  <line x1="143" y1="246" x2="149" y2="246" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="250" font-size="11" fill="currentColor" text-anchor="end">−6</text>
  <line x1="143" y1="226" x2="149" y2="226" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="230" font-size="11" fill="currentColor" text-anchor="end">−5</text>
  <line x1="143" y1="206" x2="149" y2="206" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="210" font-size="11" fill="currentColor" text-anchor="end">−4</text>
  <line x1="143" y1="186" x2="149" y2="186" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="190" font-size="11" fill="currentColor" text-anchor="end">−3</text>
  <line x1="143" y1="166" x2="149" y2="166" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="170" font-size="11" fill="currentColor" text-anchor="end">−2</text>
  <line x1="143" y1="146" x2="149" y2="146" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="150" font-size="11" fill="currentColor" text-anchor="end">−1</text>
  <line x1="143" y1="106" x2="149" y2="106" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="110" font-size="11" fill="currentColor" text-anchor="end">1</text>
  <line x1="143" y1="86" x2="149" y2="86" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="90" font-size="11" fill="currentColor" text-anchor="end">2</text>
  <line x1="143" y1="66" x2="149" y2="66" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="70" font-size="11" fill="currentColor" text-anchor="end">3</text>
  <line x1="143" y1="46" x2="149" y2="46" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="50" font-size="11" fill="currentColor" text-anchor="end">4</text>
  <line x1="143" y1="26" x2="149" y2="26" stroke="currentColor" stroke-width="1"/>
  <text x="140" y="30" font-size="11" fill="currentColor" text-anchor="end">5</text>
  <line x1="126" y1="272" x2="126" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <line x1="186" y1="272" x2="186" y2="20" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 5"/>
  <polyline points="34,129.1 34,129.1 34.3,129.1 34.5,129.1 34.8,129.1 35,129.1 35.3,129.1 35.5,129.1 35.8,129.1 36,129.1 36.3,129.1 36.5,129.1 36.8,129.1 37,129.1 37.3,129.2 37.5,129.2 37.8,129.2 38,129.2 38.3,129.2 38.5,129.2 38.8,129.2 39,129.2 39.3,129.2 39.5,129.2 39.8,129.2 40,129.2 40.3,129.2 40.5,129.2 40.8,129.2 41,129.2 41.3,129.2 41.5,129.2 41.8,129.2 42,129.2 42.3,129.2 42.5,129.2 42.8,129.2 43,129.2 43.3,129.2 43.5,129.2 43.8,129.2 44,129.2 44.3,129.2 44.5,129.2 44.8,129.2 45,129.3 45.3,129.3 45.5,129.3 45.8,129.3 46,129.3 46.3,129.3 46.5,129.3 46.8,129.3 47,129.3 47.3,129.3 47.5,129.3 47.8,129.3 48,129.3 48.3,129.3 48.5,129.3 48.8,129.3 49,129.3 49.3,129.3 49.5,129.3 49.8,129.3 50,129.3 50.3,129.3 50.5,129.3 50.8,129.3 51,129.3 51.3,129.3 51.5,129.3 51.8,129.3 52,129.3 52.3,129.3 52.5,129.3 52.8,129.3 53,129.3 53.3,129.4 53.5,129.4 53.8,129.4 54,129.4 54.3,129.4 54.5,129.4 54.8,129.4 55,129.4 55.3,129.4 55.5,129.4 55.8,129.4 56,129.4 56.3,129.4 56.5,129.4 56.8,129.4 57,129.4 57.3,129.4 57.5,129.4 57.8,129.4 58,129.4 58.3,129.4 58.5,129.4 58.8,129.4 59,129.4 59.3,129.4 59.5,129.4 59.8,129.4 60,129.4 60.3,129.4 60.5,129.4 60.8,129.4 61,129.4 61.3,129.4 61.5,129.4 61.8,129.4 62,129.4 62.3,129.4 62.5,129.4 62.8,129.4 63,129.4 63.3,129.4 63.5,129.4 63.8,129.4 64,129.4 64.3,129.4 64.5,129.4 64.8,129.5 65,129.5 65.3,129.5 65.5,129.5 65.8,129.5 66,129.5 66.3,129.5 66.5,129.5 66.8,129.5 67,129.5 67.3,129.5 67.5,129.5 67.8,129.5 68,129.5 68.3,129.5 68.5,129.5 68.8,129.5 69,129.5 69.3,129.5 69.5,129.5 69.8,129.5 70,129.5 70.3,129.5 70.5,129.5 70.8,129.5 71,129.5 71.3,129.5 71.5,129.5 71.8,129.5 72,129.5 72.3,129.5 72.5,129.5 72.8,129.5 73,129.5 73.3,129.5 73.5,129.5 73.8,129.5 74,129.5 74.3,129.5 74.5,129.5 74.8,129.4 75,129.4 75.3,129.4 75.5,129.4 75.8,129.4 76,129.4 76.3,129.4 76.5,129.4 76.8,129.4 77,129.4 77.3,129.4 77.5,129.4 77.8,129.4 78,129.4 78.3,129.4 78.5,129.4 78.8,129.4 79,129.4 79.3,129.4 79.5,129.4 79.8,129.4 80,129.4 80.3,129.4 80.5,129.4 80.8,129.4 81,129.4 81.3,129.4 81.5,129.3 81.8,129.3 82,129.3 82.3,129.3 82.5,129.3 82.8,129.3 83,129.3 83.3,129.3 83.5,129.3 83.8,129.3 84,129.3 84.3,129.3 84.5,129.3 84.8,129.2 85,129.2 85.3,129.2 85.5,129.2 85.8,129.2 86,129.2 86.3,129.2 86.5,129.2 86.8,129.2 87,129.2 87.3,129.1 87.5,129.1 87.8,129.1 88,129.1 88.3,129.1 88.5,129.1 88.8,129.1 89,129 89.3,129 89.5,129 89.8,129 90,129 90.3,129 90.5,128.9 90.8,128.9 91,128.9 91.3,128.9 91.5,128.9 91.8,128.9 92,128.8 92.3,128.8 92.5,128.8 92.8,128.8 93,128.7 93.3,128.7 93.5,128.7 93.8,128.7 94,128.6 94.3,128.6 94.5,128.6 94.8,128.6 95,128.5 95.3,128.5 95.5,128.5 95.8,128.4 96,128.4 96.3,128.4 96.5,128.3 96.8,128.3 97,128.3 97.3,128.2 97.5,128.2 97.8,128.2 98,128.1 98.3,128.1 98.5,128 98.8,128 99,128 99.3,127.9 99.5,127.9 99.8,127.8 100,127.8 100.3,127.7 100.5,127.7 100.8,127.6 101,127.6 101.3,127.5 101.5,127.4 101.8,127.4 102,127.3 102.3,127.2 102.5,127.2 102.8,127.1 103,127 103.3,127 103.5,126.9 103.8,126.8 104,126.7 104.3,126.7 104.5,126.6 104.8,126.5 105,126.4 105.3,126.3 105.5,126.2 105.8,126.1 106,126 106.3,125.9 106.5,125.8 106.8,125.7 107,125.6 107.3,125.4 107.5,125.3 107.8,125.2 108,125 108.3,124.9 108.5,124.8 108.8,124.6 109,124.5 109.3,124.3 109.5,124.1 109.8,124 110,123.8 110.3,123.6 110.5,123.4 110.8,123.2 111,123 111.3,122.8 111.5,122.6 111.8,122.3 112,122.1 112.3,121.8 112.5,121.6 112.8,121.3 113,121 113.3,120.7 113.5,120.4 113.8,120 114,119.7 114.3,119.3 114.5,118.9 114.8,118.5 115,118.1 115.3,117.7 115.5,117.2 115.8,116.7 116,116.2 116.3,115.7 116.5,115.1 116.8,114.5 117,113.8 117.3,113.1 117.5,112.4 117.8,111.6 118,110.8 118.3,109.9 118.5,108.9 118.8,107.9 119,106.8 119.3,105.6 119.5,104.3 119.8,102.9 120,101.4 120.3,99.8 120.5,98 120.8,96 121,93.8 121.3,91.4 121.5,88.7 121.8,85.7 122,82.3 122.3,78.4 122.5,73.9 122.8,68.8 123,62.8 123.3,55.7 123.5,47.2 123.6,44.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="26,129 36.1,124.1 35.9,134.1" fill="currentColor"/>
  <polygon points="123.8,36.7 128.5,46.8 118.5,46.6" fill="currentColor"/>
  <polyline points="128.2,254 128.3,249 128.5,238.5 128.8,230 129,222.9 129.3,216.9 129.5,211.8 129.8,207.4 130,203.6 130.3,200.2 130.5,197.2 130.8,194.5 131,192.1 131.3,190 131.5,188 131.8,186.3 132,184.6 132.3,183.2 132.5,181.8 132.8,180.6 133,179.5 133.3,178.4 133.5,177.4 133.8,176.5 134,175.7 134.3,174.9 134.5,174.2 134.8,173.5 135,172.9 135.3,172.3 135.5,171.8 135.8,171.3 136,170.8 136.3,170.4 136.5,169.9 136.8,169.6 137,169.2 137.3,168.9 137.5,168.5 137.8,168.2 138,168 138.3,167.7 138.5,167.5 138.8,167.3 139,167.1 139.3,166.9 139.5,166.7 139.8,166.5 140,166.4 140.3,166.3 140.5,166.1 140.8,166 141,165.9 141.3,165.9 141.5,165.8 141.8,165.7 142,165.7 142.3,165.6 142.5,165.6 142.8,165.6 143,165.6 143.3,165.5 143.5,165.5 143.8,165.6 144,165.6 144.3,165.6 144.5,165.6 144.8,165.7 145,165.7 145.3,165.8 145.5,165.8 145.8,165.9 146,166 146.3,166.1 146.5,166.2 146.8,166.3 147,166.4 147.3,166.5 147.5,166.6 147.8,166.8 148,166.9 148.3,167 148.5,167.2 148.8,167.4 149,167.5 149.3,167.7 149.5,167.9 149.8,168.1 150,168.2 150.3,168.5 150.5,168.7 150.8,168.9 151,169.1 151.3,169.3 151.5,169.6 151.8,169.8 152,170.1 152.3,170.3 152.5,170.6 152.8,170.9 153,171.2 153.3,171.5 153.5,171.8 153.8,172.1 154,172.4 154.3,172.8 154.5,173.1 154.8,173.5 155,173.8 155.3,174.2 155.5,174.6 155.8,175 156,175.4 156.3,175.8 156.5,176.2 156.8,176.7 157,177.1 157.3,177.6 157.5,178.1 157.8,178.6 158,179.1 158.3,179.6 158.5,180.1 158.8,180.7 159,181.2 159.3,181.8 159.5,182.4 159.8,183 160,183.6 160.3,184.3 160.5,185 160.8,185.6 161,186.3 161.3,187.1 161.5,187.8 161.8,188.6 162,189.4 162.3,190.2 162.5,191 162.8,191.9 163,192.8 163.3,193.7 163.5,194.7 163.8,195.6 164,196.6 164.3,197.7 164.5,198.8 164.8,199.9 165,201 165.3,202.2 165.5,203.4 165.8,204.7 166,206 166.3,207.4 166.5,208.8 166.8,210.2 167,211.7 167.3,213.3 167.5,214.9 167.8,216.6 168,218.3 168.3,220.2 168.5,222 168.8,224 169,226 169.3,228.2 169.5,230.4 169.8,232.7 170,235.1 170.3,237.6 170.5,240.2 170.8,243 171,245.8 171.3,248.8 171.5,252 171.7,254.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="128,262 123.2,251.9 133.2,252.1" fill="currentColor"/>
  <polygon points="172.3,262.4 166.6,252.8 176.5,252" fill="currentColor"/>
  <polyline points="194.2,247.4 194.3,245.1 194.5,235.7 194.8,227.2 195,219.4 195.3,212.4 195.5,205.9 195.8,200 196,194.6 196.3,189.6 196.5,185 196.8,180.8 197,176.8 197.3,173.2 197.5,169.9 197.8,166.8 198,163.9 198.3,161.2 198.5,158.7 198.8,156.3 199,154.1 199.3,152.1 199.5,150.2 199.8,148.4 200,146.7 200.3,145.2 200.5,143.7 200.8,142.3 201,141 201.3,139.8 201.5,138.6 201.8,137.6 202,136.5 202.3,135.6 202.5,134.6 202.8,133.8 203,133 203.3,132.2 203.5,131.5 203.8,130.8 204,130.1 204.3,129.5 204.5,128.9 204.8,128.4 205,127.9 205.3,127.4 205.5,126.9 205.8,126.4 206,126 206.3,125.6 206.5,125.2 206.8,124.8 207,124.5 207.3,124.2 207.5,123.8 207.8,123.5 208,123.3 208.3,123 208.5,122.7 208.8,122.5 209,122.2 209.3,122 209.5,121.8 209.8,121.6 210,121.4 210.3,121.2 210.5,121.1 210.8,120.9 211,120.7 211.3,120.6 211.5,120.4 211.8,120.3 212,120.2 212.3,120 212.5,119.9 212.8,119.8 213,119.7 213.3,119.6 213.5,119.5 213.8,119.4 214,119.3 214.3,119.2 214.5,119.2 214.8,119.1 215,119 215.3,118.9 215.5,118.9 215.8,118.8 216,118.8 216.3,118.7 216.5,118.6 216.8,118.6 217,118.6 217.3,118.5 217.5,118.5 217.8,118.4 218,118.4 218.3,118.4 218.5,118.3 218.8,118.3 219,118.3 219.3,118.2 219.5,118.2 219.8,118.2 220,118.2 220.3,118.1 220.5,118.1 220.8,118.1 221,118.1 221.3,118.1 221.5,118.1 221.8,118.1 222,118 222.3,118 222.5,118 222.8,118 223,118 223.3,118 223.5,118 223.8,118 224,118 224.3,118 224.5,118 224.8,118 225,118 225.3,118 225.5,118 225.8,118 226,118 226.3,118 226.5,118 226.8,118 227,118 227.3,118 227.5,118 227.8,118 228,118 228.3,118.1 228.5,118.1 228.8,118.1 229,118.1 229.3,118.1 229.5,118.1 229.8,118.1 230,118.1 230.3,118.1 230.5,118.1 230.8,118.1 231,118.2 231.3,118.2 231.5,118.2 231.8,118.2 232,118.2 232.3,118.2 232.5,118.2 232.8,118.2 233,118.3 233.3,118.3 233.5,118.3 233.8,118.3 234,118.3 234.3,118.3 234.5,118.3 234.8,118.4 235,118.4 235.3,118.4 235.5,118.4 235.8,118.4 236,118.4 236.3,118.5 236.5,118.5 236.8,118.5 237,118.5 237.3,118.5 237.5,118.5 237.8,118.5 238,118.6 238.3,118.6 238.5,118.6 238.8,118.6 239,118.6 239.3,118.6 239.5,118.7 239.8,118.7 240,118.7 240.3,118.7 240.5,118.7 240.8,118.7 241,118.8 241.3,118.8 241.5,118.8 241.8,118.8 242,118.8 242.3,118.8 242.5,118.9 242.8,118.9 243,118.9 243.3,118.9 243.5,118.9 243.8,118.9 244,119 244.3,119 244.5,119 244.8,119 245,119 245.3,119 245.5,119.1 245.8,119.1 246,119.1 246.3,119.1 246.5,119.1 246.8,119.1 247,119.2 247.3,119.2 247.5,119.2 247.8,119.2 248,119.2 248.3,119.2 248.5,119.2 248.8,119.3 249,119.3 249.3,119.3 249.5,119.3 249.8,119.3 250,119.3 250.3,119.4 250.5,119.4 250.8,119.4 251,119.4 251.3,119.4 251.5,119.4 251.8,119.5 252,119.5 252.3,119.5 252.5,119.5 252.8,119.5 253,119.5 253.3,119.6 253.5,119.6 253.8,119.6 254,119.6 254.3,119.6 254.5,119.6 254.8,119.6 255,119.7 255.3,119.7 255.5,119.7 255.8,119.7 256,119.7 256.3,119.7 256.5,119.8 256.8,119.8 257,119.8 257.3,119.8 257.5,119.8 257.8,119.8 258,119.8 258,119.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  <polygon points="194,255.4 189.2,245.3 199.2,245.5" fill="currentColor"/>
  <polygon points="266,120.3 255.7,124.7 256.3,114.7" fill="currentColor"/>
  <circle cx="106" cy="126" r="4" fill="currentColor"/>
  <circle cx="206" cy="126" r="4" fill="currentColor"/>
  <text x="94.8" y="114.8" font-size="13" fill="currentColor" text-anchor="end">(−2, 0)</text>
  <text x="217.2" y="146.2" font-size="13" fill="currentColor" text-anchor="start">(3, 0)</text>
  <text x="142" y="79.4" font-size="13" fill="currentColor" text-anchor="start">x = −1</text>
  <text x="170" y="59.3" font-size="13" fill="currentColor" text-anchor="end">x = 2</text>
</svg>
</div>
We can use this information to write a function of the form

$$f(x)=a\tfrac{(x+2)(x-3)}{(x+1)(x-2)^2}$$

To find the stretch factor, we can use another clear point on the graph,
such as the $y$-intercept $(0,-2)$.

$$
\begin{array}{lrcl}
& -2 &=& a\tfrac{(0+2)(0-3)}{(0+1)(0-2)^2} \\[4pt]
& -2 &=& a\tfrac{-6}{4} \\[4pt]
& a &=& \tfrac{-8}{-6}=\tfrac{4}{3}
\end{array}
$$

This gives us a final function of
$f(x)=\tfrac{4(x+2)(x-3)}{3(x+1)(x-2)^2}$.

## Key equations

| Rational function | $f(x)=\tfrac{P(x)}{Q(x)}=\tfrac{a_px^p+a_{p-1}x^{p-1}+\ldots+a_1x+a_0}{b_qx^q+b_{q-1}x^{q-1}+\ldots+b_1x+b_0},\ Q(x)\ne0$ |
| :--- | :--- |

## Key concepts

- We can use arrow notation to describe local behavior and end behavior of
  the toolkit functions $f(x)=\tfrac{1}{x}$ and $f(x)=\tfrac{1}{x^2}$.
- A function that levels off at a horizontal value has a horizontal
  asymptote. A function can have more than one vertical asymptote.
- Application problems involving rates and concentrations often involve
  rational functions.
- The domain of a rational function includes all real numbers except those
  that cause the denominator to equal zero.
- The vertical asymptotes of a rational function will occur where the
  denominator of the function is equal to zero and the numerator is not
  zero.
- A removable discontinuity might occur in the graph of a rational function
  if an input causes both numerator and denominator to be zero.
- A rational function's end behavior will mirror that of the ratio of the
  leading terms of the numerator and denominator functions.
- Graph rational functions by finding the intercepts, behavior at the
  intercepts and asymptotes, and end behavior.
- If a rational function has $x$-intercepts at $x=x_1,x_2,\ldots,x_n$,
  vertical asymptotes at $x=v_1,v_2,\ldots,v_m$, and no $x_i=$ any $v_j$,
  then the function can be written in the form
  $f(x)=a\tfrac{(x-x_1)^{p_1}(x-x_2)^{p_2}\cdots(x-x_n)^{p_n}}{(x-v_1)^{q_1}(x-v_2)^{q_2}\cdots(x-v_m)^{q_m}}$.

## Practice

### Use arrow notation

{{< multiplechoice
  question="Which statement correctly describes the end behavior of $f(x)=\tfrac{x}{2x+1}$?"
  answer="As $x\to\pm\infty$, $f(x)\to\tfrac{1}{2}$"
  hint="Divide the leading term of the numerator by the leading term of the denominator."
>}}
As $x\to\pm\infty$, $f(x)\to0$
As $x\to\pm\infty$, $f(x)\to\tfrac{1}{2}$
As $x\to\pm\infty$, $f(x)\to2$
As $x\to\pm\infty$, $f(x)\to-\tfrac{1}{2}$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which statement correctly describes the local behavior of that same function, $f(x)=\tfrac{x}{2x+1}$, near its vertical asymptote?"
  answer="As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to-\infty$"
  hint="The vertical asymptote is at $x=-\tfrac{1}{2}$; check the sign of the numerator there and how the denominator's sign changes on each side."
>}}
As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to-\infty$
As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to-\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to\infty$
As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to\infty$
As $x\to-\tfrac{1}{2}^{-}$, $f(x)\to-\infty$, and as $x\to-\tfrac{1}{2}^{+}$, $f(x)\to-\infty$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which statement correctly describes the end behavior of $f(x)=\tfrac{-2x}{x-6}$?"
  answer="As $x\to\pm\infty$, $f(x)\to-2$"
  hint="Divide the leading term of the numerator by the leading term of the denominator."
>}}
As $x\to\pm\infty$, $f(x)\to0$
As $x\to\pm\infty$, $f(x)\to2$
As $x\to\pm\infty$, $f(x)\to6$
As $x\to\pm\infty$, $f(x)\to-2$
{{< /multiplechoice >}}

{{< multiplechoice
  question="Which statement correctly describes the local behavior of that same function, $f(x)=\tfrac{-2x}{x-6}$, near its vertical asymptote?"
  answer="As $x\to6^{-}$, $f(x)\to\infty$, and as $x\to6^{+}$, $f(x)\to-\infty$"
  hint="The vertical asymptote is at $x=6$; the numerator there is negative, so check how the denominator's sign changes on each side."
>}}
As $x\to6^{-}$, $f(x)\to\infty$, and as $x\to6^{+}$, $f(x)\to-\infty$
As $x\to6^{-}$, $f(x)\to-\infty$, and as $x\to6^{+}$, $f(x)\to\infty$
As $x\to6^{-}$, $f(x)\to\infty$, and as $x\to6^{+}$, $f(x)\to\infty$
As $x\to6^{-}$, $f(x)\to-\infty$, and as $x\to6^{+}$, $f(x)\to-\infty$
{{< /multiplechoice >}}

### Solve applied problems involving rational functions

{{< fillin
  question="In the refugee camp hospital, a large mixing tank currently contains 300 gallons of water, into which 8 pounds of sugar have been mixed. A tap opens, pouring 20 gallons of water per minute into the tank at the same time sugar is poured into the tank at a rate of 2 pounds per minute. Find the rational function $C(t)$ giving the concentration (pounds per gallon) of sugar in the tank after $t$ minutes."
  answer="\frac{8+2t}{300+20t}"
  answerDisplay="$C(t)=\tfrac{8+2t}{300+20t}$"
  hint="Write the pounds of sugar and gallons of water as linear functions of $t$, then divide sugar by water."
>}}

{{< fillin
  question="The concentration $C$ of a drug in a patient's bloodstream $t$ hours after injection is given by $C(t)=\tfrac{100t}{2t^2+75}$. Approximate, to the nearest hundredth, the number of hours at which the concentration is highest."
  answer="6.12"
  answerDisplay="$t\approx6.12$ hours"
  hint="Graph or tabulate $C(t)$ and locate its peak; the maximum occurs at $t=\sqrt{37.5}$."
>}}

### Find the domains of rational functions

{{< fillin
  question="Find the domain of $f(x)=\tfrac{x+1}{x^2-1}$. Write the domain in interval notation."
  answer="(-\infty,-1)\cup(-1,1)\cup(1,\infty)"
  answerDisplay="$(-\infty,-1)\cup(-1,1)\cup(1,\infty)$"
  hint="The denominator factors as $(x-1)(x+1)$; remove both zeros from the real line."
>}}

{{< fillin
  question="Find the domain of $f(x)=\tfrac{x^2+4x-3}{x^4-5x^2+4}$. Write the domain in interval notation."
  answer="(-\infty,-2)\cup(-2,-1)\cup(-1,1)\cup(1,2)\cup(2,\infty)"
  answerDisplay="$(-\infty,-2)\cup(-2,-1)\cup(-1,1)\cup(1,2)\cup(2,\infty)$"
  hint="The denominator factors as $(x^2-1)(x^2-4)$; remove all four zeros from the real line."
>}}

### Identify vertical asymptotes

{{< fillin
  question="Find the vertical asymptote of $f(x)=\tfrac{2}{5x+2}$."
  answer="x=-\frac{2}{5}"
  answerDisplay="$x=-\tfrac{2}{5}$"
  hint="Set the denominator equal to zero and solve for $x$."
>}}

{{< fillin
  question="Find the vertical asymptotes of $f(x)=\tfrac{x}{x^2+5x-36}$. If there is more than one, separate them with a comma."
  answer="x=4,x=-9"
  answerMode="unordered"
  answerDisplay="$x=4$ or $x=-9$"
  hint="Factor the denominator as $(x-4)(x+9)$; neither factor cancels with the numerator."
>}}

### Identify horizontal asymptotes

{{< fillin
  question="Find the horizontal asymptote of $f(x)=\tfrac{3x-4}{x^3-16x}$."
  answer="y=0"
  answerDisplay="$y=0$"
  hint="Compare the degree of the numerator to the degree of the denominator."
>}}

{{< fillin
  question="Find the horizontal asymptote of $f(x)=\tfrac{4-2x}{3x-1}$."
  answer="y=-\frac{2}{3}"
  answerDisplay="$y=-\tfrac{2}{3}$"
  hint="Numerator and denominator both have degree 1; take the ratio of their leading coefficients."
>}}

### Graph rational functions

{{< fillin
  question="Find the vertical asymptote of $a(x)=\tfrac{x^2+2x-3}{x^2-1}$."
  answer="x=-1"
  answerDisplay="$x=-1$"
  hint="Factor both numerator and denominator, cancel the common factor, then find where the reduced denominator is zero."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function, $a(x)=\tfrac{x^2+2x-3}{x^2-1}$."
  answer="y=1"
  answerDisplay="$y=1$"
  hint="Numerator and denominator have the same degree; take the ratio of their leading coefficients."
>}}

{{< fillin
  question="That same function, $a(x)=\tfrac{x^2+2x-3}{x^2-1}$, has a removable discontinuity. Give it as an ordered pair $(x,y)$."
  answer="(1,2)"
  answerDisplay="$(1,2)$"
  hint="The factor $x-1$ cancels; evaluate the reduced function at $x=1$."
>}}

{{< fillin
  question="Find the $y$-intercept of that same function, $a(x)=\tfrac{x^2+2x-3}{x^2-1}$, as an ordered pair $(x,y)$."
  answer="(0,3)"
  answerDisplay="$(0,3)$"
  hint="Evaluate the function at $x=0$."
>}}

{{< fillin
  question="Find the vertical asymptotes of $w(x)=\tfrac{(x-1)(x+3)(x-5)}{(x+2)^2(x-4)}$. If there is more than one, separate them with a comma."
  answer="x=-2,x=4"
  answerMode="unordered"
  answerDisplay="$x=-2$ or $x=4$"
  hint="Neither denominator factor, $(x+2)^2$ or $(x-4)$, matches a numerator factor."
>}}

{{< fillin
  question="Find the horizontal asymptote of that same function, $w(x)=\tfrac{(x-1)(x+3)(x-5)}{(x+2)^2(x-4)}$."
  answer="y=1"
  answerDisplay="$y=1$"
  hint="Numerator and denominator both have degree 3; take the ratio of their leading coefficients."
>}}

{{< fillin
  question="Find the $y$-intercept of that same function, $w(x)=\tfrac{(x-1)(x+3)(x-5)}{(x+2)^2(x-4)}$, as an ordered pair $(x,y)$."
  answer="(0,-\frac{15}{16})"
  answerDisplay="$(0,-\tfrac{15}{16})$"
  hint="Evaluate the function at $x=0$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 3.7: Rational
Functions](https://openstax.org/books/precalculus-2e/pages/3-7-rational-functions)
by Jay Abramson and OpenStax, © OpenStax, licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access
the original for free at
[openstax.org](https://openstax.org/details/books/precalculus-2e). Changes:
recreated every graph as an accessible inline SVG built from the `rationals`
num/den primitive, matching the source's window, asymptotes (dashed lines),
marked intercepts, and open-circle holes — the toolkit pair $f(x)=\tfrac{1}{x}$
and $f(x)=\tfrac{1}{x^2}$; four framings of $f(x)=\tfrac{1}{x}$ itself (its
local-behavior arrows, its vertical asymptote alone, its end-behavior
arrows again, and both asymptotes together); $f(x)=\tfrac{1}{x-2}+4$;
$f(x)=\tfrac{3x+7}{x+2}$; $f(x)=\tfrac{x+3}{x^2-9}$ (Example 4's Analysis
figure, deliberately left without its hole marked, matching the source's own
staging); $k(x)=\tfrac{5+2x^2}{2-x-x^2}$; the removable-discontinuity
walkthrough $f(x)=\tfrac{x^2-1}{x^2-2x-3}$; $k(x)=\tfrac{x-2}{x^2-4}$; the
three horizontal/slant-asymptote Case examples; $f(x)=\tfrac{(x-2)(x+3)}{(x-1)(x+2)(x-5)}$
plain and with its intercepts marked; the odd- and even-multiplicity toolkit
pair; $f(x)=\tfrac{(x+1)^2(x-3)}{(x+3)^2(x-2)}$; the middle-portion and full
graphs of $f(x)=\tfrac{(x+2)(x-3)}{(x+1)^2(x-2)}$; and the unlabeled and
annotated mystery graph of $f(x)=\tfrac{4(x+2)(x-3)}{3(x+1)(x-2)^2}$; omitted
the two graphs embedded only in the print answer key (the reciprocal-squared
Try It and the closing "describe its behavior and sketch" Try It), since
displaying either would hand a learner the answer to its own interactive
question, and converted both Try Its into fillin components about their
asymptotes, intercept, and removable discontinuity instead; omitted the
"Media" callout's four external video links, which carry no transcribable
mathematics; converted every retained "Try It" into interactive `fillin` or
`multiplechoice` components, using multiple choice for every arrow-notation
end-/local-behavior judgment (not gradable as free-response math), an
ordered pair with default ordered grading for every removable-discontinuity
hole, `answerMode="unordered"` for every multi-asymptote list, and
interval-notation answers for every domain ask; trimmed the two richest Try
Its (the rewritten reciprocal-squared-shift Try It and the closing "describe
and sketch" Try It) to three sequential sub-questions apiece, dropping their
intercept sub-asks, to respect the two-to-three-question cap on an in-page
practice set; and adapted 12 selected end-of-section exercises — two
local/end-behavior pairs, two applied concentration/optimization problems,
two domain-in-interval-notation problems, two vertical-asymptote problems,
two horizontal-asymptote problems, and two multi-fact "find the domain,
asymptotes, and intercepts" problems (split into their separate facts, the
way a multipart source item is expanded) — into 19 interactive components in
a closing Practice block, one group per objective.</small>
