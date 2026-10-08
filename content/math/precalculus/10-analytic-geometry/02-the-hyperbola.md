---
title: The Hyperbola
description: >-
  Locating a hyperbola's vertices and foci, writing and graphing its
  standard-form equation whether centered at the origin or shifted to
  $(h,k)$, and modeling real-world hyperbolic shapes such as cooling towers
  — adapted from OpenStax Precalculus 2e, Section 10.2.
source_section: "10.2"
weight: 2
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Locate a hyperbola's vertices and foci
- Write equations of hyperbolas in standard form
- Graph hyperbolas centered at the origin
- Graph hyperbolas not centered at the origin
- Solve applied problems involving hyperbolas
{{< /callout >}}

What do paths of comets, supersonic booms, ancient Grecian pillars, and natural draft cooling towers have in common? They can all be modeled by the same type of conic. For instance, when something moves faster than the speed of sound, a shock wave in the form of a cone is created. A portion of a conic is formed when the wave intersects the ground, resulting in a sonic boom.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A jet flies to the left, and a cone-shaped shock wave trails behind it, opening to the right, with nested circular wavefronts. The cone's lower part meets the flat ground below, and the curve where it meets the ground is one branch of a hyperbola, opening away from the jet. Labels: Wake created from shock wave; Portion of a hyperbola.","unit":34,"polygons":[{"points":[[-2.58,-1.968],[6.82,-1.968],[10.78,-0.032],[1.38,-0.032]],"fill":true},{"points":[[-2.5,0.0],[-2.1,0.13],[-0.45,0.15],[-0.2,0.6],[0.05,0.6],[-0.03,0.12],[0.06,0.04],[0.06,-0.09],[-2.1,-0.13]],"fill":true},{"points":[[-1.5,-0.05],[-0.6,-0.05],[-0.3,-0.5],[-0.6,-0.5]],"fill":true}],"segments":[{"from":[3.762,-0.725],"to":[3.784,-0.651]},{"from":[3.784,-0.651],"to":[3.804,-0.575]},{"from":[3.804,-0.575],"to":[3.823,-0.498]},{"from":[3.823,-0.498],"to":[3.84,-0.419]},{"from":[3.84,-0.419],"to":[3.856,-0.34]},{"from":[3.856,-0.34],"to":[3.87,-0.26]},{"from":[3.87,-0.26],"to":[3.882,-0.179]},{"from":[3.882,-0.179],"to":[3.893,-0.097]},{"from":[3.893,-0.097],"to":[3.902,-0.015]},{"from":[3.902,-0.015],"to":[3.909,0.066]},{"from":[3.909,0.066],"to":[3.914,0.148]},{"from":[3.914,0.148],"to":[3.918,0.229]},{"from":[3.918,0.229],"to":[3.92,0.31]},{"from":[3.92,0.31],"to":[3.92,0.39]},{"from":[3.92,0.39],"to":[3.918,0.469]},{"from":[3.918,0.469],"to":[3.915,0.546]},{"from":[3.915,0.546],"to":[3.909,0.623]},{"from":[3.909,0.623],"to":[3.902,0.697]},{"from":[3.902,0.697],"to":[3.893,0.771]},{"from":[3.893,0.771],"to":[3.883,0.842]},{"from":[3.883,0.842],"to":[3.87,0.911]},{"from":[3.87,0.911],"to":[3.857,0.978]},{"from":[3.857,0.978],"to":[3.841,1.042]},{"from":[3.841,1.042],"to":[3.824,1.104]},{"from":[3.824,1.104],"to":[3.805,1.163]},{"from":[3.805,1.163],"to":[3.785,1.219]},{"from":[3.785,1.219],"to":[3.763,1.272]},{"from":[3.763,1.272],"to":[3.74,1.322]},{"from":[3.74,1.322],"to":[3.716,1.369]},{"from":[3.716,1.369],"to":[3.69,1.412]},{"from":[3.69,1.412],"to":[3.663,1.451]},{"from":[3.663,1.451],"to":[3.635,1.488]},{"from":[3.635,1.488],"to":[3.606,1.52]},{"from":[3.606,1.52],"to":[3.576,1.549]},{"from":[3.576,1.549],"to":[3.545,1.573]},{"from":[3.545,1.573],"to":[3.513,1.594]},{"from":[3.513,1.594],"to":[3.48,1.611]},{"from":[3.48,1.611],"to":[3.446,1.624]},{"from":[3.446,1.624],"to":[3.412,1.633]},{"from":[3.412,1.633],"to":[3.378,1.637]},{"from":[3.378,1.637],"to":[3.343,1.638]},{"from":[3.343,1.638],"to":[3.307,1.635]},{"from":[3.307,1.635],"to":[3.272,1.627]},{"from":[3.272,1.627],"to":[3.236,1.616]},{"from":[3.236,1.616],"to":[3.2,1.6]},{"from":[3.2,1.6],"to":[3.164,1.58]},{"from":[3.164,1.58],"to":[3.128,1.557]},{"from":[3.128,1.557],"to":[3.093,1.53]},{"from":[3.093,1.53],"to":[3.057,1.498]},{"from":[3.057,1.498],"to":[3.022,1.464]},{"from":[3.022,1.464],"to":[2.988,1.425]},{"from":[2.988,1.425],"to":[2.954,1.383]},{"from":[2.954,1.383],"to":[2.92,1.337]},{"from":[2.92,1.337],"to":[2.887,1.288]},{"from":[2.887,1.288],"to":[2.855,1.236]},{"from":[2.855,1.236],"to":[2.824,1.181]},{"from":[2.824,1.181],"to":[2.794,1.123]},{"from":[2.794,1.123],"to":[2.765,1.062]},{"from":[2.765,1.062],"to":[2.737,0.999]},{"from":[2.737,0.999],"to":[2.71,0.933]},{"from":[2.71,0.933],"to":[2.684,0.864]},{"from":[2.684,0.864],"to":[2.66,0.794]},{"from":[2.66,0.794],"to":[2.637,0.721]},{"from":[2.637,0.721],"to":[2.615,0.647]},{"from":[2.615,0.647],"to":[2.595,0.571]},{"from":[2.595,0.571],"to":[2.576,0.494]},{"from":[2.576,0.494],"to":[2.559,0.415]},{"from":[2.559,0.415],"to":[2.543,0.336]},{"from":[2.543,0.336],"to":[2.53,0.255]},{"from":[2.53,0.255],"to":[2.517,0.174]},{"from":[2.517,0.174],"to":[2.507,0.093]},{"from":[2.507,0.093],"to":[2.498,0.011]},{"from":[2.498,0.011],"to":[2.491,-0.071]},{"from":[2.491,-0.071],"to":[2.485,-0.152]},{"from":[2.485,-0.152],"to":[2.482,-0.234]},{"from":[2.482,-0.234],"to":[2.48,-0.314]},{"from":[2.48,-0.314],"to":[2.48,-0.394]},{"from":[2.48,-0.394],"to":[2.482,-0.473]},{"from":[2.482,-0.473],"to":[2.486,-0.55]},{"from":[2.486,-0.55],"to":[2.491,-0.627]},{"from":[2.491,-0.627],"to":[2.498,-0.701]},{"from":[2.498,-0.701],"to":[2.507,-0.774]},{"from":[2.507,-0.774],"to":[2.518,-0.846]},{"from":[2.518,-0.846],"to":[2.53,-0.914]},{"from":[2.53,-0.914],"to":[2.544,-0.981]},{"from":[2.544,-0.981],"to":[2.56,-1.045]},{"from":[2.56,-1.045],"to":[2.577,-1.107]},{"from":[2.577,-1.107],"to":[2.596,-1.166]},{"from":[2.596,-1.166],"to":[2.616,-1.222]},{"from":[2.616,-1.222],"to":[2.638,-1.275]},{"from":[5.532,-0.544],"to":[5.551,-0.441]},{"from":[5.551,-0.441],"to":[5.569,-0.337]},{"from":[5.569,-0.337],"to":[5.584,-0.232]},{"from":[5.584,-0.232],"to":[5.597,-0.126]},{"from":[5.597,-0.126],"to":[5.609,-0.021]},{"from":[5.609,-0.021],"to":[5.618,0.085]},{"from":[5.618,0.085],"to":[5.626,0.191]},{"from":[5.626,0.191],"to":[5.631,0.296]},{"from":[5.631,0.296],"to":[5.634,0.4]},{"from":[5.634,0.4],"to":[5.635,0.504]},{"from":[5.635,0.504],"to":[5.634,0.607]},{"from":[5.634,0.607],"to":[5.631,0.708]},{"from":[5.631,0.708],"to":[5.626,0.809]},{"from":[5.626,0.809],"to":[5.618,0.907]},{"from":[5.618,0.907],"to":[5.609,1.004]},{"from":[5.609,1.004],"to":[5.598,1.098]},{"from":[5.598,1.098],"to":[5.585,1.191]},{"from":[5.585,1.191],"to":[5.569,1.281]},{"from":[5.569,1.281],"to":[5.552,1.368]},{"from":[5.552,1.368],"to":[5.533,1.453]},{"from":[5.533,1.453],"to":[5.512,1.535]},{"from":[5.512,1.535],"to":[5.489,1.613]},{"from":[5.489,1.613],"to":[5.464,1.689]},{"from":[5.464,1.689],"to":[5.438,1.761]},{"from":[5.438,1.761],"to":[5.409,1.829]},{"from":[5.409,1.829],"to":[5.38,1.894]},{"from":[5.38,1.894],"to":[5.348,1.955]},{"from":[5.348,1.955],"to":[5.316,2.012]},{"from":[5.316,2.012],"to":[5.281,2.065]},{"from":[5.281,2.065],"to":[5.246,2.113]},{"from":[5.246,2.113],"to":[5.209,2.158]},{"from":[5.209,2.158],"to":[5.17,2.198]},{"from":[5.17,2.198],"to":[5.131,2.234]},{"from":[5.131,2.234],"to":[5.091,2.265]},{"from":[5.091,2.265],"to":[5.049,2.292]},{"from":[5.049,2.292],"to":[5.007,2.314]},{"from":[5.007,2.314],"to":[4.964,2.331]},{"from":[4.964,2.331],"to":[4.92,2.344]},{"from":[4.92,2.344],"to":[4.875,2.352]},{"from":[4.875,2.352],"to":[4.83,2.355]},{"from":[4.83,2.355],"to":[4.785,2.353]},{"from":[4.785,2.353],"to":[4.739,2.347]},{"from":[4.739,2.347],"to":[4.693,2.336]},{"from":[4.693,2.336],"to":[4.646,2.32]},{"from":[4.646,2.32],"to":[4.6,2.3]},{"from":[4.6,2.3],"to":[4.554,2.275]},{"from":[4.554,2.275],"to":[4.507,2.245]},{"from":[4.507,2.245],"to":[4.461,2.211]},{"from":[4.461,2.211],"to":[4.415,2.173]},{"from":[4.415,2.173],"to":[4.37,2.13]},{"from":[4.37,2.13],"to":[4.325,2.082]},{"from":[4.325,2.082],"to":[4.28,2.031]},{"from":[4.28,2.031],"to":[4.236,1.975]},{"from":[4.236,1.975],"to":[4.193,1.916]},{"from":[4.193,1.916],"to":[4.151,1.852]},{"from":[4.151,1.852],"to":[4.109,1.785]},{"from":[4.109,1.785],"to":[4.069,1.714]},{"from":[4.069,1.714],"to":[4.03,1.64]},{"from":[4.03,1.64],"to":[3.991,1.563]},{"from":[3.991,1.563],"to":[3.954,1.482]},{"from":[3.954,1.482],"to":[3.919,1.398]},{"from":[3.919,1.398],"to":[3.884,1.312]},{"from":[3.884,1.312],"to":[3.852,1.223]},{"from":[3.852,1.223],"to":[3.82,1.131]},{"from":[3.82,1.131],"to":[3.791,1.037]},{"from":[3.791,1.037],"to":[3.762,0.942]},{"from":[3.762,0.942],"to":[3.736,0.844]},{"from":[3.736,0.844],"to":[3.711,0.744]},{"from":[3.711,0.744],"to":[3.688,0.643]},{"from":[3.688,0.643],"to":[3.667,0.541]},{"from":[3.667,0.541],"to":[3.648,0.437]},{"from":[3.648,0.437],"to":[3.631,0.333]},{"from":[3.631,0.333],"to":[3.615,0.228]},{"from":[3.615,0.228],"to":[3.602,0.123]},{"from":[3.602,0.123],"to":[3.591,0.017]},{"from":[3.591,0.017],"to":[3.582,-0.089]},{"from":[3.582,-0.089],"to":[3.574,-0.194]},{"from":[3.574,-0.194],"to":[3.569,-0.3]},{"from":[3.569,-0.3],"to":[3.566,-0.404]},{"from":[3.566,-0.404],"to":[3.565,-0.508]},{"from":[3.565,-0.508],"to":[3.566,-0.61]},{"from":[3.566,-0.61],"to":[3.569,-0.712]},{"from":[3.569,-0.712],"to":[3.574,-0.812]},{"from":[3.574,-0.812],"to":[3.582,-0.91]},{"from":[3.582,-0.91],"to":[3.591,-1.007]},{"from":[3.591,-1.007],"to":[3.603,-1.102]},{"from":[3.603,-1.102],"to":[3.616,-1.194]},{"from":[3.616,-1.194],"to":[3.631,-1.284]},{"from":[3.631,-1.284],"to":[3.649,-1.371]},{"from":[3.649,-1.371],"to":[3.668,-1.456]},{"from":[7.273,-0.378],"to":[7.291,-0.248]},{"from":[7.291,-0.248],"to":[7.306,-0.118]},{"from":[7.306,-0.118],"to":[7.32,0.013]},{"from":[7.32,0.013],"to":[7.331,0.143]},{"from":[7.331,0.143],"to":[7.339,0.273]},{"from":[7.339,0.273],"to":[7.345,0.403]},{"from":[7.345,0.403],"to":[7.349,0.532]},{"from":[7.349,0.532],"to":[7.35,0.659]},{"from":[7.35,0.659],"to":[7.349,0.786]},{"from":[7.349,0.786],"to":[7.345,0.912]},{"from":[7.345,0.912],"to":[7.339,1.035]},{"from":[7.339,1.035],"to":[7.331,1.157]},{"from":[7.331,1.157],"to":[7.32,1.277]},{"from":[7.32,1.277],"to":[7.306,1.394]},{"from":[7.306,1.394],"to":[7.291,1.509]},{"from":[7.291,1.509],"to":[7.273,1.621]},{"from":[7.273,1.621],"to":[7.253,1.731]},{"from":[7.253,1.731],"to":[7.23,1.837]},{"from":[7.23,1.837],"to":[7.206,1.94]},{"from":[7.206,1.94],"to":[7.179,2.039]},{"from":[7.179,2.039],"to":[7.15,2.135]},{"from":[7.15,2.135],"to":[7.119,2.227]},{"from":[7.119,2.227],"to":[7.085,2.314]},{"from":[7.085,2.314],"to":[7.05,2.398]},{"from":[7.05,2.398],"to":[7.013,2.477]},{"from":[7.013,2.477],"to":[6.975,2.552]},{"from":[6.975,2.552],"to":[6.934,2.622]},{"from":[6.934,2.622],"to":[6.892,2.688]},{"from":[6.892,2.688],"to":[6.848,2.749]},{"from":[6.848,2.749],"to":[6.803,2.804]},{"from":[6.803,2.804],"to":[6.756,2.855]},{"from":[6.756,2.855],"to":[6.708,2.901]},{"from":[6.708,2.901],"to":[6.658,2.941]},{"from":[6.658,2.941],"to":[6.608,2.976]},{"from":[6.608,2.976],"to":[6.556,3.006]},{"from":[6.556,3.006],"to":[6.503,3.03]},{"from":[6.503,3.03],"to":[6.45,3.048]},{"from":[6.45,3.048],"to":[6.395,3.062]},{"from":[6.395,3.062],"to":[6.34,3.07]},{"from":[6.34,3.07],"to":[6.284,3.072]},{"from":[6.284,3.072],"to":[6.228,3.068]},{"from":[6.228,3.068],"to":[6.171,3.06]},{"from":[6.171,3.06],"to":[6.115,3.045]},{"from":[6.115,3.045],"to":[6.057,3.025]},{"from":[6.057,3.025],"to":[6.0,3.0]},{"from":[6.0,3.0],"to":[5.943,2.969]},{"from":[5.943,2.969],"to":[5.885,2.933]},{"from":[5.885,2.933],"to":[5.829,2.892]},{"from":[5.829,2.892],"to":[5.772,2.845]},{"from":[5.772,2.845],"to":[5.716,2.794]},{"from":[5.716,2.794],"to":[5.66,2.737]},{"from":[5.66,2.737],"to":[5.605,2.675]},{"from":[5.605,2.675],"to":[5.55,2.609]},{"from":[5.55,2.609],"to":[5.497,2.538]},{"from":[5.497,2.538],"to":[5.444,2.462]},{"from":[5.444,2.462],"to":[5.392,2.382]},{"from":[5.392,2.382],"to":[5.342,2.297]},{"from":[5.342,2.297],"to":[5.292,2.208]},{"from":[5.292,2.208],"to":[5.244,2.116]},{"from":[5.244,2.116],"to":[5.197,2.019]},{"from":[5.197,2.019],"to":[5.152,1.919]},{"from":[5.152,1.919],"to":[5.108,1.816]},{"from":[5.108,1.816],"to":[5.066,1.709]},{"from":[5.066,1.709],"to":[5.025,1.599]},{"from":[5.025,1.599],"to":[4.987,1.486]},{"from":[4.987,1.486],"to":[4.95,1.371]},{"from":[4.95,1.371],"to":[4.915,1.253]},{"from":[4.915,1.253],"to":[4.881,1.133]},{"from":[4.881,1.133],"to":[4.85,1.011]},{"from":[4.85,1.011],"to":[4.821,0.887]},{"from":[4.821,0.887],"to":[4.794,0.761]},{"from":[4.794,0.761],"to":[4.77,0.634]},{"from":[4.77,0.634],"to":[4.747,0.506]},{"from":[4.747,0.506],"to":[4.727,0.377]},{"from":[4.727,0.377],"to":[4.709,0.247]},{"from":[4.709,0.247],"to":[4.694,0.117]},{"from":[4.694,0.117],"to":[4.68,-0.014]},{"from":[4.68,-0.014],"to":[4.669,-0.144]},{"from":[4.669,-0.144],"to":[4.661,-0.274]},{"from":[4.661,-0.274],"to":[4.655,-0.404]},{"from":[4.655,-0.404],"to":[4.651,-0.533]},{"from":[4.651,-0.533],"to":[4.65,-0.661]},{"from":[4.65,-0.661],"to":[4.651,-0.787]},{"from":[4.651,-0.787],"to":[4.655,-0.913]},{"from":[4.655,-0.913],"to":[4.661,-1.036]},{"from":[4.661,-1.036],"to":[4.669,-1.158]},{"from":[4.669,-1.158],"to":[4.68,-1.278]},{"from":[4.68,-1.278],"to":[4.694,-1.395]},{"from":[4.694,-1.395],"to":[4.709,-1.51]},{"from":[4.709,-1.51],"to":[4.727,-1.622]},{"from":[9.003,-0.216],"to":[9.02,-0.061]},{"from":[9.02,-0.061],"to":[9.035,0.094]},{"from":[9.035,0.094],"to":[9.046,0.249]},{"from":[9.046,0.249],"to":[9.055,0.404]},{"from":[9.055,0.404],"to":[9.061,0.558]},{"from":[9.061,0.558],"to":[9.064,0.711]},{"from":[9.064,0.711],"to":[9.065,0.863]},{"from":[9.065,0.863],"to":[9.063,1.013]},{"from":[9.063,1.013],"to":[9.057,1.162]},{"from":[9.057,1.162],"to":[9.05,1.309]},{"from":[9.05,1.309],"to":[9.039,1.453]},{"from":[9.039,1.453],"to":[9.026,1.596]},{"from":[9.026,1.596],"to":[9.009,1.735]},{"from":[9.009,1.735],"to":[8.991,1.872]},{"from":[8.991,1.872],"to":[8.969,2.005]},{"from":[8.969,2.005],"to":[8.945,2.135]},{"from":[8.945,2.135],"to":[8.918,2.261]},{"from":[8.918,2.261],"to":[8.889,2.384]},{"from":[8.889,2.384],"to":[8.857,2.503]},{"from":[8.857,2.503],"to":[8.823,2.617]},{"from":[8.823,2.617],"to":[8.786,2.727]},{"from":[8.786,2.727],"to":[8.747,2.833]},{"from":[8.747,2.833],"to":[8.706,2.933]},{"from":[8.706,2.933],"to":[8.663,3.029]},{"from":[8.663,3.029],"to":[8.617,3.12]},{"from":[8.617,3.12],"to":[8.57,3.205]},{"from":[8.57,3.205],"to":[8.52,3.285]},{"from":[8.52,3.285],"to":[8.469,3.36]},{"from":[8.469,3.36],"to":[8.415,3.429]},{"from":[8.415,3.429],"to":[8.36,3.492]},{"from":[8.36,3.492],"to":[8.304,3.549]},{"from":[8.304,3.549],"to":[8.246,3.601]},{"from":[8.246,3.601],"to":[8.186,3.646]},{"from":[8.186,3.646],"to":[8.126,3.685]},{"from":[8.126,3.685],"to":[8.064,3.718]},{"from":[8.064,3.718],"to":[8.0,3.745]},{"from":[8.0,3.745],"to":[7.936,3.765]},{"from":[7.936,3.765],"to":[7.871,3.779]},{"from":[7.871,3.779],"to":[7.805,3.787]},{"from":[7.805,3.787],"to":[7.739,3.788]},{"from":[7.739,3.788],"to":[7.672,3.783]},{"from":[7.672,3.783],"to":[7.604,3.772]},{"from":[7.604,3.772],"to":[7.536,3.754]},{"from":[7.536,3.754],"to":[7.468,3.73]},{"from":[7.468,3.73],"to":[7.4,3.7]},{"from":[7.4,3.7],"to":[7.332,3.664]},{"from":[7.332,3.664],"to":[7.264,3.621]},{"from":[7.264,3.621],"to":[7.196,3.572]},{"from":[7.196,3.572],"to":[7.128,3.518]},{"from":[7.128,3.518],"to":[7.061,3.457]},{"from":[7.061,3.457],"to":[6.995,3.39]},{"from":[6.995,3.39],"to":[6.929,3.318]},{"from":[6.929,3.318],"to":[6.864,3.241]},{"from":[6.864,3.241],"to":[6.8,3.158]},{"from":[6.8,3.158],"to":[6.736,3.069]},{"from":[6.736,3.069],"to":[6.674,2.976]},{"from":[6.674,2.976],"to":[6.614,2.877]},{"from":[6.614,2.877],"to":[6.554,2.774]},{"from":[6.554,2.774],"to":[6.496,2.665]},{"from":[6.496,2.665],"to":[6.44,2.553]},{"from":[6.44,2.553],"to":[6.385,2.436]},{"from":[6.385,2.436],"to":[6.331,2.315]},{"from":[6.331,2.315],"to":[6.28,2.19]},{"from":[6.28,2.19],"to":[6.23,2.062]},{"from":[6.23,2.062],"to":[6.183,1.93]},{"from":[6.183,1.93],"to":[6.137,1.795]},{"from":[6.137,1.795],"to":[6.094,1.656]},{"from":[6.094,1.656],"to":[6.053,1.515]},{"from":[6.053,1.515],"to":[6.014,1.372]},{"from":[6.014,1.372],"to":[5.977,1.226]},{"from":[5.977,1.226],"to":[5.943,1.078]},{"from":[5.943,1.078],"to":[5.911,0.928]},{"from":[5.911,0.928],"to":[5.882,0.777]},{"from":[5.882,0.777],"to":[5.855,0.624]},{"from":[5.855,0.624],"to":[5.831,0.471]},{"from":[5.831,0.471],"to":[5.809,0.316]},{"from":[5.809,0.316],"to":[5.791,0.161]},{"from":[5.791,0.161],"to":[5.774,0.006]},{"from":[5.774,0.006],"to":[5.761,-0.149]},{"from":[5.761,-0.149],"to":[5.75,-0.304]},{"from":[5.75,-0.304],"to":[5.743,-0.459]},{"from":[5.743,-0.459],"to":[5.737,-0.612]},{"from":[5.737,-0.612],"to":[5.735,-0.765]},{"from":[5.735,-0.765],"to":[5.736,-0.916]},{"from":[5.736,-0.916],"to":[5.739,-1.066]},{"from":[5.739,-1.066],"to":[5.745,-1.214]},{"from":[5.745,-1.214],"to":[5.754,-1.36]},{"from":[5.754,-1.36],"to":[5.765,-1.504]},{"from":[5.765,-1.504],"to":[5.78,-1.645]},{"from":[5.78,-1.645],"to":[5.797,-1.784]},{"from":[0.0,0.0],"to":[7.351,3.674]},{"from":[0.0,0.0],"to":[1.989,-1.098]},{"from":[5.797,-1.784],"to":[5.666,-1.764]},{"from":[5.666,-1.764],"to":[5.535,-1.745]},{"from":[5.535,-1.745],"to":[5.404,-1.725]},{"from":[5.404,-1.725],"to":[5.274,-1.705]},{"from":[5.274,-1.705],"to":[5.144,-1.686]},{"from":[5.144,-1.686],"to":[5.015,-1.666]},{"from":[5.015,-1.666],"to":[4.886,-1.647]},{"from":[4.886,-1.647],"to":[4.758,-1.627]},{"from":[4.758,-1.627],"to":[4.63,-1.607]},{"from":[4.63,-1.607],"to":[4.503,-1.588]},{"from":[4.503,-1.588],"to":[4.377,-1.568]},{"from":[4.377,-1.568],"to":[4.251,-1.549]},{"from":[4.251,-1.549],"to":[4.126,-1.529]},{"from":[4.126,-1.529],"to":[4.002,-1.509]},{"from":[4.002,-1.509],"to":[3.88,-1.49]},{"from":[3.88,-1.49],"to":[3.758,-1.47]},{"from":[3.758,-1.47],"to":[3.637,-1.451]},{"from":[3.637,-1.451],"to":[3.518,-1.431]},{"from":[3.518,-1.431],"to":[3.4,-1.411]},{"from":[3.4,-1.411],"to":[3.284,-1.392]},{"from":[3.284,-1.392],"to":[3.17,-1.372]},{"from":[3.17,-1.372],"to":[3.057,-1.353]},{"from":[3.057,-1.353],"to":[2.948,-1.333]},{"from":[2.948,-1.333],"to":[2.84,-1.313]},{"from":[2.84,-1.313],"to":[2.736,-1.294]},{"from":[2.736,-1.294],"to":[2.636,-1.274]},{"from":[2.636,-1.274],"to":[2.539,-1.255]},{"from":[2.539,-1.255],"to":[2.446,-1.235]},{"from":[2.446,-1.235],"to":[2.359,-1.216]},{"from":[2.359,-1.216],"to":[2.277,-1.196]},{"from":[2.277,-1.196],"to":[2.202,-1.176]},{"from":[2.202,-1.176],"to":[2.135,-1.157]},{"from":[2.135,-1.157],"to":[2.076,-1.137]},{"from":[2.076,-1.137],"to":[2.027,-1.118]},{"from":[2.027,-1.118],"to":[1.989,-1.098]},{"from":[1.989,-1.098],"to":[1.963,-1.078]},{"from":[1.963,-1.078],"to":[1.95,-1.059]},{"from":[1.95,-1.059],"to":[1.951,-1.039]},{"from":[1.951,-1.039],"to":[1.968,-1.02]},{"from":[1.968,-1.02],"to":[2.0,-1.0]},{"from":[2.0,-1.0],"to":[2.048,-0.98]},{"from":[2.048,-0.98],"to":[2.112,-0.961]},{"from":[2.112,-0.961],"to":[2.19,-0.941]},{"from":[2.19,-0.941],"to":[2.283,-0.922]},{"from":[2.283,-0.922],"to":[2.39,-0.902]},{"from":[2.39,-0.902],"to":[2.508,-0.882]},{"from":[2.508,-0.882],"to":[2.637,-0.863]},{"from":[2.637,-0.863],"to":[2.776,-0.843]},{"from":[2.776,-0.843],"to":[2.924,-0.824]},{"from":[2.924,-0.824],"to":[3.079,-0.804]},{"from":[3.079,-0.804],"to":[3.241,-0.784]},{"from":[3.241,-0.784],"to":[3.408,-0.765]},{"from":[3.408,-0.765],"to":[3.581,-0.745]},{"from":[3.581,-0.745],"to":[3.758,-0.726]},{"from":[3.758,-0.726],"to":[3.939,-0.706]},{"from":[3.939,-0.706],"to":[4.123,-0.687]},{"from":[4.123,-0.687],"to":[4.31,-0.667]},{"from":[4.31,-0.667],"to":[4.5,-0.647]},{"from":[4.5,-0.647],"to":[4.692,-0.628]},{"from":[4.692,-0.628],"to":[4.887,-0.608]},{"from":[4.887,-0.608],"to":[5.083,-0.589]},{"from":[5.083,-0.589],"to":[5.281,-0.569]},{"from":[5.281,-0.569],"to":[5.481,-0.549]},{"from":[5.481,-0.549],"to":[5.681,-0.53]},{"from":[5.681,-0.53],"to":[5.883,-0.51]},{"from":[5.883,-0.51],"to":[6.086,-0.491]},{"from":[6.086,-0.491],"to":[6.29,-0.471]},{"from":[6.29,-0.471],"to":[6.495,-0.451]},{"from":[6.495,-0.451],"to":[6.701,-0.432]},{"from":[6.701,-0.432],"to":[6.908,-0.412]},{"from":[6.908,-0.412],"to":[7.115,-0.393]},{"from":[7.115,-0.393],"to":[7.323,-0.373]},{"from":[7.323,-0.373],"to":[7.531,-0.353]},{"from":[7.531,-0.353],"to":[7.74,-0.334]},{"from":[7.74,-0.334],"to":[7.95,-0.314]},{"from":[7.95,-0.314],"to":[8.16,-0.295]},{"from":[8.16,-0.295],"to":[8.37,-0.275]},{"from":[8.37,-0.275],"to":[8.581,-0.255]},{"from":[8.581,-0.255],"to":[8.792,-0.236]},{"from":[8.792,-0.236],"to":[9.003,-0.216]},{"from":[0.9,-2.45],"to":[1.9,-1.1],"arrow":true},{"from":[2.2,3.7],"to":[5.065,2.662],"arrow":true}],"texts":[{"at":[1.6,3.95],"text":"Wake created from shock wave","anchor":"middle"},{"at":[-0.4,-2.85],"text":"Portion of a hyperbola","anchor":"middle"}]}
{{< /apfigure >}}

*A shock wave intersecting the ground forms a portion of a conic and results in a sonic boom.*

Most people are familiar with the sonic boom created by supersonic aircraft, but humans were breaking the sound barrier long before the first supersonic flight. The crack of a whip occurs because the tip is exceeding the speed of sound. The bullets shot from many firearms also break the sound barrier, although the bang of the gun usually supersedes the sound of the sonic boom.

### Locating the Vertices and Foci of a Hyperbola

In analytic geometry, a **hyperbola** is a conic section formed by intersecting a right circular cone with a plane at an angle such that both halves of the cone are intersected. This intersection produces two separate unbounded curves that are mirror images of each other.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A double cone formed by two nappes joined at a shared apex, cut by a plane parallel to the cone's axis so the plane crosses both nappes and traces two separate, mirror-image open curves — a hyperbola.","unit":26,"polygons":[{"points":[[0.07,-3.82],[1.33,-2.98],[1.33,3.82],[0.07,2.98]],"fill":true}],"segments":[{"from":[0,0],"to":[1.719,-2.772]},{"from":[0,0],"to":[-1.719,-3.115]},{"from":[0,0],"to":[1.719,3.115]},{"from":[0,0],"to":[-1.719,2.772]},{"from":[-1.6,-3],"to":[-1.674,-3.058]},{"from":[-1.674,-3.058],"to":[-1.719,-3.116]},{"from":[-1.719,-3.116],"to":[-1.735,-3.171]},{"from":[-1.735,-3.171],"to":[-1.722,-3.224]},{"from":[-1.722,-3.224],"to":[-1.678,-3.273]},{"from":[-1.678,-3.273],"to":[-1.607,-3.317]},{"from":[-1.607,-3.317],"to":[-1.507,-3.355]},{"from":[-1.507,-3.355],"to":[-1.382,-3.388]},{"from":[-1.382,-3.388],"to":[-1.233,-3.414]},{"from":[-1.233,-3.414],"to":[-1.063,-3.433]},{"from":[-1.063,-3.433],"to":[-0.875,-3.444]},{"from":[-0.875,-3.444],"to":[-0.672,-3.448]},{"from":[-0.672,-3.448],"to":[-0.457,-3.444]},{"from":[-0.457,-3.444],"to":[-0.235,-3.433]},{"from":[-0.235,-3.433],"to":[-0.009,-3.414]},{"from":[-0.009,-3.414],"to":[0.218,-3.388]},{"from":[0.218,-3.388],"to":[0.441,-3.355]},{"from":[0.441,-3.355],"to":[0.656,-3.317]},{"from":[0.656,-3.317],"to":[0.86,-3.273]},{"from":[0.86,-3.273],"to":[1.05,-3.224]},{"from":[1.05,-3.224],"to":[1.221,-3.171]},{"from":[1.221,-3.171],"to":[1.372,-3.116]},{"from":[1.372,-3.116],"to":[1.499,-3.058]},{"from":[1.499,-3.058],"to":[1.6,-3]},{"from":[1.6,-3],"to":[1.674,-2.942]},{"from":[1.719,-2.884],"to":[1.735,-2.829]},{"from":[1.722,-2.776],"to":[1.678,-2.727]},{"from":[1.607,-2.683],"to":[1.507,-2.645]},{"from":[1.382,-2.612],"to":[1.233,-2.586]},{"from":[1.063,-2.567],"to":[0.875,-2.556]},{"from":[0.672,-2.552],"to":[0.457,-2.556]},{"from":[0.235,-2.567],"to":[0.009,-2.586]},{"from":[-0.218,-2.612],"to":[-0.441,-2.645]},{"from":[-0.656,-2.683],"to":[-0.86,-2.727]},{"from":[-1.05,-2.776],"to":[-1.221,-2.829]},{"from":[-1.372,-2.884],"to":[-1.499,-2.942]},{"from":[-1.6,3],"to":[-1.674,2.942]},{"from":[-1.674,2.942],"to":[-1.719,2.884]},{"from":[-1.719,2.884],"to":[-1.735,2.829]},{"from":[-1.735,2.829],"to":[-1.722,2.776]},{"from":[-1.722,2.776],"to":[-1.678,2.727]},{"from":[-1.678,2.727],"to":[-1.607,2.683]},{"from":[-1.607,2.683],"to":[-1.507,2.645]},{"from":[-1.507,2.645],"to":[-1.382,2.612]},{"from":[-1.382,2.612],"to":[-1.233,2.586]},{"from":[-1.233,2.586],"to":[-1.063,2.567]},{"from":[-1.063,2.567],"to":[-0.875,2.556]},{"from":[-0.875,2.556],"to":[-0.672,2.552]},{"from":[-0.672,2.552],"to":[-0.457,2.556]},{"from":[-0.457,2.556],"to":[-0.235,2.567]},{"from":[-0.235,2.567],"to":[-0.009,2.586]},{"from":[-0.009,2.586],"to":[0.218,2.612]},{"from":[0.218,2.612],"to":[0.441,2.645]},{"from":[0.441,2.645],"to":[0.656,2.683]},{"from":[0.656,2.683],"to":[0.86,2.727]},{"from":[0.86,2.727],"to":[1.05,2.776]},{"from":[1.05,2.776],"to":[1.221,2.829]},{"from":[1.221,2.829],"to":[1.372,2.884]},{"from":[1.372,2.884],"to":[1.499,2.942]},{"from":[1.499,2.942],"to":[1.6,3]},{"from":[1.6,3],"to":[1.674,3.058]},{"from":[1.719,3.116],"to":[1.735,3.171]},{"from":[1.722,3.224],"to":[1.678,3.273]},{"from":[1.607,3.317],"to":[1.507,3.355]},{"from":[1.382,3.388],"to":[1.233,3.414]},{"from":[1.063,3.433],"to":[0.875,3.444]},{"from":[0.672,3.448],"to":[0.457,3.444]},{"from":[0.235,3.433],"to":[0.009,3.414]},{"from":[-0.218,3.388],"to":[-0.441,3.355]},{"from":[-0.656,3.317],"to":[-0.86,3.273]},{"from":[-1.05,3.224],"to":[-1.221,3.171]},{"from":[-1.372,3.116],"to":[-1.499,3.058]},{"from":[0.096,2.597],"to":[0.133,2.472]},{"from":[0.133,2.472],"to":[0.171,2.348]},{"from":[0.171,2.348],"to":[0.209,2.227]},{"from":[0.209,2.227],"to":[0.247,2.11]},{"from":[0.247,2.11],"to":[0.285,1.995]},{"from":[0.285,1.995],"to":[0.322,1.885]},{"from":[0.322,1.885],"to":[0.36,1.78]},{"from":[0.36,1.78],"to":[0.398,1.681]},{"from":[0.398,1.681],"to":[0.436,1.589]},{"from":[0.436,1.589],"to":[0.473,1.506]},{"from":[0.473,1.506],"to":[0.511,1.434]},{"from":[0.511,1.434],"to":[0.549,1.375]},{"from":[0.549,1.375],"to":[0.587,1.331]},{"from":[0.587,1.331],"to":[0.624,1.305]},{"from":[0.624,1.305],"to":[0.662,1.298]},{"from":[0.662,1.298],"to":[0.7,1.313]},{"from":[0.7,1.313],"to":[0.738,1.348]},{"from":[0.776,1.405],"to":[0.813,1.482]},{"from":[0.851,1.576],"to":[0.889,1.686]},{"from":[0.927,1.808],"to":[0.964,1.941]},{"from":[1.002,2.083],"to":[1.04,2.233]},{"from":[1.078,2.388],"to":[1.115,2.549]},{"from":[1.153,2.714],"to":[1.191,2.882]},{"from":[1.229,3.053],"to":[1.267,3.227]},{"from":[0.096,-3.403],"to":[0.133,-3.227]},{"from":[0.133,-3.227],"to":[0.171,-3.053]},{"from":[0.171,-3.053],"to":[0.209,-2.882]},{"from":[0.209,-2.882],"to":[0.247,-2.714]},{"from":[0.247,-2.714],"to":[0.285,-2.549]},{"from":[0.285,-2.549],"to":[0.322,-2.388]},{"from":[0.322,-2.388],"to":[0.36,-2.233]},{"from":[0.36,-2.233],"to":[0.398,-2.083]},{"from":[0.398,-2.083],"to":[0.436,-1.941]},{"from":[0.436,-1.941],"to":[0.473,-1.808]},{"from":[0.473,-1.808],"to":[0.511,-1.686]},{"from":[0.511,-1.686],"to":[0.549,-1.576]},{"from":[0.549,-1.576],"to":[0.587,-1.482]},{"from":[0.587,-1.482],"to":[0.624,-1.405]},{"from":[0.624,-1.405],"to":[0.662,-1.348]},{"from":[0.662,-1.348],"to":[0.7,-1.313]},{"from":[0.7,-1.313],"to":[0.738,-1.298]},{"from":[0.776,-1.305],"to":[0.813,-1.331]},{"from":[0.851,-1.375],"to":[0.889,-1.434]},{"from":[0.927,-1.506],"to":[0.964,-1.589]},{"from":[1.002,-1.681],"to":[1.04,-1.78]},{"from":[1.078,-1.885],"to":[1.115,-1.995]},{"from":[1.153,-2.11],"to":[1.191,-2.227]},{"from":[1.229,-2.348],"to":[1.267,-2.472]}]}
{{< /apfigure >}}

*A hyperbola.*

Like the ellipse, the hyperbola can also be defined as a set of points in the coordinate plane. A hyperbola is the set of all points $(x,y)$ in a plane such that the difference of the distances between $(x,y)$ and the foci is a positive constant.

Notice that the definition of a hyperbola is very similar to that of an ellipse. The distinction is that the hyperbola is defined in terms of the *difference* of two distances, whereas the ellipse is defined in terms of the *sum* of two distances.

As with the ellipse, every hyperbola has two axes of symmetry. The **transverse axis** is a line segment that passes through the center of the hyperbola and has vertices as its endpoints. The foci lie on the line that contains the transverse axis. The **conjugate axis** is perpendicular to the transverse axis and has the co-vertices as its endpoints. The **center of a hyperbola** is the midpoint of both the transverse and conjugate axes, where they intersect. Every hyperbola also has two **asymptotes** that pass through its center. As a hyperbola recedes from the center, its branches approach these asymptotes. The **central rectangle** of the hyperbola is centered at the origin with sides that pass through each vertex and co-vertex; it is a useful tool for graphing the hyperbola and its asymptotes. To sketch the asymptotes of the hyperbola, simply sketch and extend the diagonals of the central rectangle.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal hyperbola centered at the origin with its key features labeled: two vertices on the x-axis where the branches turn, two foci on the x-axis just beyond the vertices inside the branches, two co-vertices on the y-axis, the center at the origin, the transverse axis along the x-axis between the vertices, the conjugate axis along the y-axis between the co-vertices, a dashed central rectangle through the vertices and co-vertices, and two dashed asymptotes along the rectangle's diagonals.","xMin":-7.5,"xMax":7.5,"yMin":-6,"yMax":6,"unit":28,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":4,"b":3}],"segments":[{"from":[4,3],"to":[4,-3],"dashed":true},{"from":[4,-3],"to":[-4,-3],"dashed":true},{"from":[-4,-3],"to":[-4,3],"dashed":true},{"from":[-4,3],"to":[4,3],"dashed":true},{"from":[5.55,1.3],"to":[4.15,0.12],"arrows":"end"},{"from":[5.85,-1.3],"to":[5.1,-0.15],"arrows":"end"},{"from":[-5.55,-1.3],"to":[-4.15,-0.12],"arrows":"end"},{"from":[-5.85,1.3],"to":[-5.1,0.15],"arrows":"end"},{"from":[1.35,4.05],"to":[0.13,3.1],"arrows":"end"},{"from":[-1.35,-4.05],"to":[-0.13,-3.1],"arrows":"end"},{"from":[-1.25,0.5],"to":[-0.15,0.06],"arrows":"end"},{"from":[2.5,-4.75],"to":[2.5,-0.12],"arrows":"end"},{"from":[5.3,5.45],"to":[6.35,4.8],"arrows":"end"},{"from":[6.0,-5.45],"to":[6.7,-5.06],"arrows":"end"},{"from":[-2.3,4.9],"to":[-0.12,1.4],"arrows":"end"}],"lines":[{"through":[[0,0],[4,3]],"dashed":true},{"through":[[0,0],[4,-3]],"dashed":true}],"points":[{"at":[4,0]},{"at":[-4,0]},{"at":[0,3]},{"at":[0,-3]},{"at":[5,0]},{"at":[-5,0]},{"at":[0,0]}],"texts":[{"at":[6.0,1.6],"text":"Vertex","anchor":"middle"},{"at":[6.1,-1.9],"text":"Focus","anchor":"middle"},{"at":[-6.0,-1.9],"text":"Vertex","anchor":"middle"},{"at":[-6.1,1.6],"text":"Focus","anchor":"middle"},{"at":[2.3,4.25],"text":"Co‑vertex","anchor":"middle"},{"at":[-2.3,-4.55],"text":"Co‑vertex","anchor":"middle"},{"at":[-2.3,0.55],"text":"Center","anchor":"middle"},{"at":[2.5,-5.35],"text":"Transverse axis","anchor":"middle"},{"at":[-3.2,5.15],"text":"Conjugate axis","anchor":"middle"},{"at":[4.6,5.7],"text":"Asymptote","anchor":"middle"},{"at":[5.4,-5.95],"text":"Asymptote","anchor":"middle"}]}
{{< /apfigure >}}

*Key features of the hyperbola.*

In this section, we will limit our discussion to hyperbolas that are positioned vertically or horizontally in the coordinate plane; the axes will either lie on or be parallel to the $x$- and $y$-axes. We will consider two cases: those that are centered at the origin, and those that are centered at a point other than the origin.

#### Deriving the Equation of a Hyperbola Centered at the Origin

Let $(-c,0)$ and $(c,0)$ be the foci of a hyperbola centered at the origin. The hyperbola is the set of all points $(x,y)$ such that the difference of the distances from $(x,y)$ to the foci is constant.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal hyperbola centered at the origin with vertices (-a, 0) and (a, 0) and foci (-c, 0) and (c, 0). A point (x, y) on the right branch connects by a segment labeled d₂ to the left focus and by a segment labeled d₁ to the right focus.","xMin":-10,"xMax":10,"yMin":-7,"yMax":7,"unit":20,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":4,"b":3}],"segments":[{"from":[-5,0],"to":[8,5.196],"label":"d₂"},{"from":[5,0],"to":[8,5.196],"label":"d₁","labelSide":"e"}],"points":[{"at":[-4,0],"label":"(−a, 0)","labelSide":"se"},{"at":[4,0],"label":"(a, 0)","labelSide":"sw"},{"at":[-5,0],"label":"(−c, 0)","labelSide":"nw"},{"at":[5,0],"label":"(c, 0)","labelSide":"se"},{"at":[8,5.196],"label":"(x, y)","labelSide":"nw"}]}
{{< /apfigure >}}

If $(a,0)$ is a vertex of the hyperbola, the distance from $(-c,0)$ to $(a,0)$ is $a-(-c)=a+c$. The distance from $(c,0)$ to $(a,0)$ is $c-a$. The difference of the distances from the foci to the vertex is

$$(a+c)-(c-a)=2a$$

If $(x,y)$ is a point on the hyperbola, we can define the following variables:

$$
\begin{array}{l}
d_2=\text{the distance from }(-c,0)\text{ to }(x,y) \\
d_1=\text{the distance from }(c,0)\text{ to }(x,y)
\end{array}
$$

By definition of a hyperbola, $d_2-d_1$ is constant for any point $(x,y)$ on the hyperbola. We know that the difference of these distances is $2a$ for the vertex $(a,0)$. It follows that $d_2-d_1=2a$ for any point on the hyperbola. As with the derivation of the equation of an ellipse, we will begin by applying the distance formula. The rest of the derivation is algebraic. Compare this derivation with the one from the previous section for ellipses.

$$
\begin{array}{lrcl}
\text{Distance Formula.} & d_2-d_1 &=& \sqrt{(x-(-c))^2+(y-0)^2}-\sqrt{(x-c)^2+(y-0)^2}=2a \\[4pt]
\text{Simplify expressions.} & &=& \sqrt{(x+c)^2+y^2}-\sqrt{(x-c)^2+y^2}=2a \\[4pt]
\text{Move radical to opposite side.} & \sqrt{(x+c)^2+y^2} &=& 2a+\sqrt{(x-c)^2+y^2} \\[4pt]
\text{Square both sides.} & (x+c)^2+y^2 &=& \left(2a+\sqrt{(x-c)^2+y^2}\right)^2 \\[4pt]
\text{Expand the squares.} & x^2+2cx+c^2+y^2 &=& 4a^2+4a\sqrt{(x-c)^2+y^2}+(x-c)^2+y^2 \\[4pt]
\text{Expand remaining square.} & x^2+2cx+c^2+y^2 &=& 4a^2+4a\sqrt{(x-c)^2+y^2}+x^2-2cx+c^2+y^2 \\[4pt]
\text{Combine like terms.} & 2cx &=& 4a^2+4a\sqrt{(x-c)^2+y^2}-2cx \\[4pt]
\text{Isolate the radical.} & 4cx-4a^2 &=& 4a\sqrt{(x-c)^2+y^2} \\[4pt]
\text{Divide by }4. & cx-a^2 &=& a\sqrt{(x-c)^2+y^2} \\[4pt]
\text{Square both sides.} & (cx-a^2)^2 &=& a^2\left(\sqrt{(x-c)^2+y^2}\right)^2 \\[4pt]
\text{Expand the squares.} & c^2x^2-2a^2cx+a^4 &=& a^2(x^2-2cx+c^2+y^2) \\[4pt]
\text{Distribute }a^2. & c^2x^2-2a^2cx+a^4 &=& a^2x^2-2a^2cx+a^2c^2+a^2y^2 \\[4pt]
\text{Combine like terms.} & a^4+c^2x^2 &=& a^2x^2+a^2c^2+a^2y^2 \\[4pt]
\text{Rearrange terms.} & c^2x^2-a^2x^2-a^2y^2 &=& a^2c^2-a^4 \\[4pt]
\text{Factor common terms.} & x^2(c^2-a^2)-a^2y^2 &=& a^2(c^2-a^2) \\[4pt]
\text{Set }b^2=c^2-a^2. & x^2b^2-a^2y^2 &=& a^2b^2 \\[4pt]
\text{Divide both sides by }a^2b^2. & \tfrac{x^2b^2}{a^2b^2}-\tfrac{a^2y^2}{a^2b^2} &=& \tfrac{a^2b^2}{a^2b^2} \\[4pt]
& \tfrac{x^2}{a^2}-\tfrac{y^2}{b^2} &=& 1
\end{array}
$$

This equation defines a hyperbola centered at the origin with vertices $(\pm a,0)$ and co-vertices $(0,\pm b)$.

{{< callout type="info" >}}
  **Standard Forms of the Equation of a Hyperbola with Center (0,0).** The standard form of the equation of a hyperbola with center $(0,0)$ and transverse axis on the $x$-axis is
  $$\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$$

  where

  - the length of the transverse axis is $2a$
  - the coordinates of the vertices are $(\pm a,0)$
  - the length of the conjugate axis is $2b$
  - the coordinates of the co-vertices are $(0,\pm b)$
  - the distance between the foci is $2c$, where $c^2=a^2+b^2$
  - the coordinates of the foci are $(\pm c,0)$
  - the equations of the asymptotes are $y=\pm\tfrac{b}{a}x$

  See the horizontal case below.

  The standard form of the equation of a hyperbola with center $(0,0)$ and transverse axis on the $y$-axis is
  $$\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$$

  where

  - the length of the transverse axis is $2a$
  - the coordinates of the vertices are $(0,\pm a)$
  - the length of the conjugate axis is $2b$
  - the coordinates of the co-vertices are $(\pm b,0)$
  - the distance between the foci is $2c$, where $c^2=a^2+b^2$
  - the coordinates of the foci are $(0,\pm c)$
  - the equations of the asymptotes are $y=\pm\tfrac{a}{b}x$

  See the vertical case below.

  Note that the vertices, co-vertices, and foci are related by the equation $c^2=a^2+b^2$. When we are given the equation of a hyperbola, we can use this relationship to identify its vertices and foci.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal hyperbola centered at the origin, with vertices labeled (a, 0) and (−a, 0), co-vertices (0, b) and (0, −b), foci (c, 0) and (−c, 0) just beyond the vertices, the center (0, 0), a dashed central rectangle through the vertices and co-vertices, and dashed diagonal asymptotes labeled y = (b/a)x and y = −(b/a)x.","xMin":-7.5,"xMax":7.5,"yMin":-6,"yMax":6,"unit":24,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":4,"b":3}],"segments":[{"from":[4,3],"to":[4,-3],"dashed":true},{"from":[4,-3],"to":[-4,-3],"dashed":true},{"from":[-4,-3],"to":[-4,3],"dashed":true},{"from":[-4,3],"to":[4,3],"dashed":true},{"from":[-1.85,0.7],"to":[-0.22,0.08],"arrows":"end"}],"lines":[{"through":[[0,0],[4,3]],"dashed":true,"label":"y = (b/a)x"},{"through":[[0,0],[4,-3]],"dashed":true,"label":"y = −(b/a)x"}],"points":[{"at":[4,0],"label":"(a, 0)","labelSide":"sw"},{"at":[-4,0],"label":"(−a, 0)","labelSide":"se"},{"at":[0,3],"label":"(0, b)","labelSide":"ne"},{"at":[0,-3],"label":"(0, −b)","labelSide":"se"},{"at":[5,0],"label":"(c, 0)","labelSide":"ne"},{"at":[-5,0],"label":"(−c, 0)","labelSide":"nw"},{"at":[0,0]}],"texts":[{"at":[-2.0,0.85],"text":"(0, 0)","anchor":"end"}]}
{{< /apfigure >}}

*(a) Horizontal hyperbola with center $(0,0)$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical hyperbola centered at the origin, with vertices labeled (0, a) and (0, −a), co-vertices (b, 0) and (−b, 0), foci (0, c) and (0, −c) just beyond the vertices, the center (0, 0), a dashed central rectangle, and dashed diagonal asymptotes labeled y = (a/b)x and y = −(a/b)x.","xMin":-7.5,"xMax":7.5,"yMin":-8,"yMax":8,"unit":24,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":4,"b":3,"vertical":true}],"segments":[{"from":[3,4],"to":[3,-4],"dashed":true},{"from":[3,-4],"to":[-3,-4],"dashed":true},{"from":[-3,-4],"to":[-3,4],"dashed":true},{"from":[-3,4],"to":[3,4],"dashed":true},{"from":[1.15,-0.75],"to":[0.2,-0.12],"arrows":"end"}],"lines":[{"through":[[0,0],[3,4]],"dashed":true,"label":"y = (a/b)x"},{"through":[[0,0],[3,-4]],"dashed":true,"label":"y = −(a/b)x"}],"points":[{"at":[0,4],"label":"(0, a)","labelSide":"se"},{"at":[0,-4],"label":"(0, −a)","labelSide":"ne"},{"at":[3,0],"label":"(b, 0)","labelSide":"se"},{"at":[-3,0],"label":"(−b, 0)","labelSide":"sw"},{"at":[0,5],"label":"(0, c)","labelSide":"ne"},{"at":[0,-5],"label":"(0, −c)","labelSide":"se"},{"at":[0,0]}],"texts":[{"at":[1.2,-1.05],"text":"(0, 0)","anchor":"start"}]}
{{< /apfigure >}}

*(b) Vertical hyperbola with center $(0,0)$.*

{{< callout type="info" >}}
  **How To: Given the equation of a hyperbola in standard form, locate its vertices and foci.**

  - Determine whether the transverse axis lies on the $x$- or $y$-axis. Notice that $a^2$ is always under the variable with the positive coefficient. So, if you set the other variable equal to zero, you can easily find the intercepts. In the case where the hyperbola is centered at the origin, the intercepts coincide with the vertices.
  - If the equation has the form $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$, then the transverse axis lies on the $x$-axis. The vertices are located at $(\pm a,0)$, and the foci are located at $(\pm c,0)$.
  - If the equation has the form $\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$, then the transverse axis lies on the $y$-axis. The vertices are located at $(0,\pm a)$, and the foci are located at $(0,\pm c)$.
  - Solve for $a$ using the equation $a=\sqrt{a^2}$.
  - Solve for $c$ using the equation $c=\sqrt{a^2+b^2}$.
{{< /callout >}}

**Example.** Identify the vertices and foci of the hyperbola with equation $\tfrac{y^2}{49}-\tfrac{x^2}{32}=1$.

**Solution.** The equation has the form $\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$, so the transverse axis lies on the $y$-axis. The hyperbola is centered at the origin, so the vertices serve as the $y$-intercepts of the graph. To find the vertices, set $x=0$, and solve for $y$.

$$
\begin{array}{lrcl}
& 1 &=& \tfrac{y^2}{49}-\tfrac{x^2}{32} \\[4pt]
& 1 &=& \tfrac{y^2}{49}-\tfrac{0^2}{32} \\[4pt]
& 1 &=& \tfrac{y^2}{49} \\[4pt]
& y^2 &=& 49 \\[4pt]
& y &=& \pm\sqrt{49}=\pm7
\end{array}
$$

The foci are located at $(0,\pm c)$. Solving for $c$,

$$c=\sqrt{a^2+b^2}=\sqrt{49+32}=\sqrt{81}=9$$

Therefore, the vertices are located at $(0,\pm7)$, and the foci are located at $(0,\pm9)$.

{{< fillin
  question="Identify the vertices of the hyperbola with equation $\tfrac{x^2}{9}-\tfrac{y^2}{25}=1$. Enter both vertices, as ordered pairs separated by a comma."
  answer="(3,0),(-3,0)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(3,0)$ and $(-3,0)$"
  hint="The transverse axis lies along the axis of the positive squared term; the vertices sit $a$ units from the center along it, where $a^2$ is that term's denominator."
>}}

{{< fillin
  question="Identify the foci of the hyperbola with equation $\tfrac{x^2}{9}-\tfrac{y^2}{25}=1$. Enter both foci, as ordered pairs separated by a comma, in exact form."
  answer="(\sqrt{34},0),(-\sqrt{34},0)"
  answerMode="unordered"
  answerForm="exact simplified-radical"
  answerDisplay="$(\sqrt{34},0)$ and $(-\sqrt{34},0)$"
  hint="Find $c$ from $c^2=a^2+b^2$; the foci lie on the transverse axis, $c$ units from the center."
>}}

### Writing Equations of Hyperbolas in Standard Form

Just as with ellipses, writing the equation for a hyperbola in standard form allows us to calculate the key features: its center, vertices, co-vertices, foci, asymptotes, and the lengths and positions of the transverse and conjugate axes. Conversely, an equation for a hyperbola can be found given its key features. We begin by finding standard equations for hyperbolas centered at the origin. Then we will turn our attention to finding standard equations for hyperbolas centered at some point other than the origin.

#### Hyperbolas Centered at the Origin

Reviewing the standard forms given for hyperbolas centered at $(0,0)$, we see that the vertices, co-vertices, and foci are related by the equation $c^2=a^2+b^2$. Note that this equation can also be rewritten as $b^2=c^2-a^2$. This relationship is used to write the equation for a hyperbola when given the coordinates of its foci and vertices.

{{< callout type="info" >}}
  **How To: Given the vertices and foci of a hyperbola centered at $(0,0)$, write its equation in standard form.**

  - Determine whether the transverse axis lies on the $x$- or $y$-axis.
  - If the given coordinates of the vertices and foci have the form $(\pm a,0)$ and $(\pm c,0)$, respectively, then the transverse axis is the $x$-axis. Use the standard form $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$.
  - If the given coordinates of the vertices and foci have the form $(0,\pm a)$ and $(0,\pm c)$, respectively, then the transverse axis is the $y$-axis. Use the standard form $\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$.
  - Find $b^2$ using the equation $b^2=c^2-a^2$.
  - Substitute the values for $a^2$ and $b^2$ into the standard form of the equation determined in Step 1.
{{< /callout >}}

**Example.** What is the standard form equation of the hyperbola that has vertices $(\pm6,0)$ and foci $(\pm2\sqrt{10},0)$?

**Solution.** The vertices and foci are on the $x$-axis. Thus, the equation for the hyperbola will have the form $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$.

The vertices are $(\pm6,0)$, so $a=6$ and $a^2=36$.

The foci are $(\pm2\sqrt{10},0)$, so $c=2\sqrt{10}$ and $c^2=40$.

Solving for $b^2$, we have

$$
\begin{array}{lrcl}
& b^2 &=& c^2-a^2 \\[4pt]
& b^2 &=& 40-36 \\[4pt]
& b^2 &=& 4
\end{array}
$$

Finally, we substitute $a^2=36$ and $b^2=4$ into the standard form of the equation, $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$. The equation of the hyperbola is $\tfrac{x^2}{36}-\tfrac{y^2}{4}=1$, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal hyperbola centered at the origin, x squared over 36 minus y squared over 4 equals 1, opening left and right with vertices at (-6, 0) and (6, 0).","xMin":-10,"xMax":10,"yMin":-7,"yMax":7,"tickLabels":true,"unit":16,"tickStep":2,"hyperbolas":[{"at":[0,0],"a":6,"b":2}]}
{{< /apfigure >}}

{{< fillin
  question="What is the standard form equation of the hyperbola that has vertices $(0,\pm2)$ and foci $(0,\pm2\sqrt{5})$?"
  answer="\frac{y^2}{4}-\frac{x^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{y^2}{4}-\tfrac{x^2}{16}=1$"
  hint="The vertices and foci lie on the $y$-axis, so use $\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$; read $a$ from the vertices and $c$ from the foci, then find $b^2=c^2-a^2$."
>}}

#### Hyperbolas Not Centered at the Origin

Like the graphs for other equations, the graph of a hyperbola can be translated. If a hyperbola is translated $h$ units horizontally and $k$ units vertically, the center of the hyperbola will be $(h,k)$. This translation results in the standard form of the equation we saw previously, with $x$ replaced by $(x-h)$ and $y$ replaced by $(y-k)$.

{{< callout type="info" >}}
  **Standard Forms of the Equation of a Hyperbola with Center ($h$, $k$).** The standard form of the equation of a hyperbola with center $(h,k)$ and transverse axis parallel to the $x$-axis is
  $$\tfrac{(x-h)^2}{a^2}-\tfrac{(y-k)^2}{b^2}=1$$

  where

  - the length of the transverse axis is $2a$
  - the coordinates of the vertices are $(h\pm a,k)$
  - the length of the conjugate axis is $2b$
  - the coordinates of the co-vertices are $(h,k\pm b)$
  - the distance between the foci is $2c$, where $c^2=a^2+b^2$
  - the coordinates of the foci are $(h\pm c,k)$

  The asymptotes of the hyperbola coincide with the diagonals of the central rectangle. The length of the rectangle is $2a$ and its width is $2b$. The slopes of the diagonals are $\pm\tfrac{b}{a}$, and each diagonal passes through the center $(h,k)$. Using the point-slope formula, it is simple to show that the equations of the asymptotes are $y=\pm\tfrac{b}{a}(x-h)+k$. See the horizontal case below.

  The standard form of the equation of a hyperbola with center $(h,k)$ and transverse axis parallel to the $y$-axis is
  $$\tfrac{(y-k)^2}{a^2}-\tfrac{(x-h)^2}{b^2}=1$$

  where

  - the length of the transverse axis is $2a$
  - the coordinates of the vertices are $(h,k\pm a)$
  - the length of the conjugate axis is $2b$
  - the coordinates of the co-vertices are $(h\pm b,k)$
  - the distance between the foci is $2c$, where $c^2=a^2+b^2$
  - the coordinates of the foci are $(h,k\pm c)$

  Using the reasoning above, the equations of the asymptotes are $y=\pm\tfrac{a}{b}(x-h)+k$. See the vertical case below.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal hyperbola centered at (h, k), with vertices labeled (h+a, k) and (h−a, k), co-vertices (h, k+b) and (h, k−b), foci (h+c, k) and (h−c, k) just beyond the vertices, a dashed central rectangle, and dashed diagonal asymptotes labeled y = (b/a)(x−h)+k and y = −(b/a)(x−h)+k.","xMin":-1,"xMax":16,"yMin":-1,"yMax":13,"unit":24,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[8,6],"a":3,"b":4}],"segments":[{"from":[11,10],"to":[11,2],"dashed":true},{"from":[11,2],"to":[5,2],"dashed":true},{"from":[5,2],"to":[5,10],"dashed":true},{"from":[5,10],"to":[11,10],"dashed":true},{"from":[3.6,4.75],"to":[4.85,5.88],"arrows":"end"},{"from":[12.4,4.75],"to":[11.15,5.88],"arrows":"end"},{"from":[8,3.9],"to":[8,5.8],"arrows":"end"}],"lines":[{"through":[[8,6],[11,10]],"dashed":true,"label":"y = (b/a)(x−h)+k"},{"through":[[8,6],[11,2]],"dashed":true,"label":"y = −(b/a)(x−h)+k"}],"points":[{"at":[11,6]},{"at":[5,6]},{"at":[8,10],"label":"(h, k+b)","labelSide":"n"},{"at":[8,2],"label":"(h, k−b)","labelSide":"s"},{"at":[13,6],"label":"(h+c, k)","labelSide":"n"},{"at":[3,6],"label":"(h−c, k)","labelSide":"n"},{"at":[8,6]}],"texts":[{"at":[2.6,3.95],"text":"(h−a, k)","anchor":"middle"},{"at":[13.4,3.95],"text":"(h+a, k)","anchor":"middle"},{"at":[8,3.3],"text":"(h, k)","anchor":"middle"}]}
{{< /apfigure >}}

*(a) Horizontal hyperbola with center $(h,k)$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical hyperbola centered at (h, k), with vertices labeled (h, k+a) and (h, k−a), co-vertices (h+b, k) and (h−b, k), foci (h, k+c) and (h, k−c) just beyond the vertices, a dashed central rectangle, and dashed diagonal asymptotes labeled y = (a/b)(x−h)+k and y = −(a/b)(x−h)+k.","xMin":-5,"xMax":9,"yMin":-6,"yMax":10,"unit":24,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[2,2],"a":4,"b":3,"vertical":true}],"segments":[{"from":[5,6],"to":[5,-2],"dashed":true},{"from":[5,-2],"to":[-1,-2],"dashed":true},{"from":[-1,-2],"to":[-1,6],"dashed":true},{"from":[-1,6],"to":[5,6],"dashed":true}],"lines":[{"through":[[2,2],[5,6]],"dashed":true,"label":"y = (a/b)(x−h)+k"},{"through":[[2,2],[5,-2]],"dashed":true,"label":"y = −(a/b)(x−h)+k"}],"points":[{"at":[2,6],"label":"(h, k+a)","labelSide":"s"},{"at":[2,-2],"label":"(h, k−a)","labelSide":"n"},{"at":[5,2],"label":"(h+b, k)","labelSide":"se"},{"at":[-1,2],"label":"(h−b, k)","labelSide":"sw"},{"at":[2,7],"label":"(h, k+c)","labelSide":"ne"},{"at":[2,-3],"label":"(h, k−c)","labelSide":"se"},{"at":[2,2],"label":"(h, k)","labelSide":"e"}]}
{{< /apfigure >}}

*(b) Vertical hyperbola with center $(h,k)$.*

Like hyperbolas centered at the origin, hyperbolas centered at a point $(h,k)$ have vertices, co-vertices, and foci that are related by the equation $c^2=a^2+b^2$. We can use this relationship along with the midpoint and distance formulas to find the standard equation of a hyperbola when the vertices and foci are given.

{{< callout type="info" >}}
  **How To: Given the vertices and foci of a hyperbola centered at $(h,k)$, write its equation in standard form.**

  - Determine whether the transverse axis is parallel to the $x$- or $y$-axis.
  - If the $y$-coordinates of the given vertices and foci are the same, then the transverse axis is parallel to the $x$-axis. Use the standard form $\tfrac{(x-h)^2}{a^2}-\tfrac{(y-k)^2}{b^2}=1$.
  - If the $x$-coordinates of the given vertices and foci are the same, then the transverse axis is parallel to the $y$-axis. Use the standard form $\tfrac{(y-k)^2}{a^2}-\tfrac{(x-h)^2}{b^2}=1$.
  - Identify the center of the hyperbola, $(h,k)$, using the midpoint formula and the given coordinates for the vertices.
  - Find $a^2$ by solving for the length of the transverse axis, $2a$, which is the distance between the given vertices.
  - Find $c^2$ using $h$ and $k$ found in Step 2 along with the given coordinates for the foci.
  - Solve for $b^2$ using the equation $b^2=c^2-a^2$.
  - Substitute the values for $h,k,a^2,$ and $b^2$ into the standard form of the equation determined in Step 1.
{{< /callout >}}

**Example.** What is the standard form equation of the hyperbola that has vertices at $(0,-2)$ and $(6,-2)$ and foci at $(-2,-2)$ and $(8,-2)$?

**Solution.** The $y$-coordinates of the vertices and foci are the same, so the transverse axis is parallel to the $x$-axis. Thus, the equation of the hyperbola will have the form

$$\tfrac{(x-h)^2}{a^2}-\tfrac{(y-k)^2}{b^2}=1$$

First, we identify the center, $(h,k)$. The center is halfway between the vertices $(0,-2)$ and $(6,-2)$. Applying the midpoint formula, we have

$$(h,k)=\left(\tfrac{0+6}{2},\tfrac{-2+(-2)}{2}\right)=(3,-2)$$

Next, we find $a^2$. The length of the transverse axis, $2a$, is bounded by the vertices. So, we can find $a^2$ by finding the distance between the $x$-coordinates of the vertices.

$$
\begin{array}{lrcl}
& 2a &=& \lvert0-6\rvert \\[4pt]
& 2a &=& 6 \\[4pt]
& a &=& 3 \\[4pt]
& a^2 &=& 9
\end{array}
$$

Now we need to find $c^2$. The coordinates of the foci are $(h\pm c,k)$. So $(h-c,k)=(-2,-2)$ and $(h+c,k)=(8,-2)$. We can use the $x$-coordinate from either of these points to solve for $c$. Using the point $(8,-2)$, and substituting $h=3$,

$$
\begin{array}{lrcl}
& h+c &=& 8 \\[4pt]
& 3+c &=& 8 \\[4pt]
& c &=& 5 \\[4pt]
& c^2 &=& 25
\end{array}
$$

Next, solve for $b^2$ using the equation $b^2=c^2-a^2$:

$$
\begin{array}{lrcl}
& b^2 &=& c^2-a^2 \\[4pt]
& &=& 25-9 \\[4pt]
& &=& 16
\end{array}
$$

Finally, substitute the values found for $h,k,a^2,$ and $b^2$ into the standard form of the equation.

$$\tfrac{(x-3)^2}{9}-\tfrac{(y+2)^2}{16}=1$$

{{< fillin
  question="What is the standard form equation of the hyperbola that has vertices $(1,-2)$ and $(1,8)$ and foci $(1,-10)$ and $(1,16)$?"
  answer="\frac{(y-3)^2}{25}-\frac{(x-1)^2}{144}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(y-3)^2}{25}-\tfrac{(x-1)^2}{144}=1$"
  hint="The center is the midpoint of the vertices; $a$ is the distance from the center to a vertex, $c$ the distance to a focus, and $b^2=c^2-a^2$."
>}}

### Graphing Hyperbolas Centered at the Origin

When we have an equation in standard form for a hyperbola centered at the origin, we can interpret its parts to identify the key features of its graph: the center, vertices, co-vertices, asymptotes, foci, and lengths and positions of the transverse and conjugate axes. To graph hyperbolas centered at the origin, we use the standard form $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$ for horizontal hyperbolas and the standard form $\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$ for vertical hyperbolas.

{{< callout type="info" >}}
  **How To: Given a standard form equation for a hyperbola centered at $(0,0)$, sketch the graph.**

  - Determine which of the standard forms applies to the given equation.
  - Use the standard form identified in Step 1 to determine the position of the transverse axis; coordinates for the vertices, co-vertices, and foci; and the equations for the asymptotes.
  - If the equation is in the form $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$, then
    - the transverse axis is on the $x$-axis
    - the coordinates of the vertices are $(\pm a,0)$
    - the coordinates of the co-vertices are $(0,\pm b)$
    - the coordinates of the foci are $(\pm c,0)$
    - the equations of the asymptotes are $y=\pm\tfrac{b}{a}x$
  - If the equation is in the form $\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$, then
    - the transverse axis is on the $y$-axis
    - the coordinates of the vertices are $(0,\pm a)$
    - the coordinates of the co-vertices are $(\pm b,0)$
    - the coordinates of the foci are $(0,\pm c)$
    - the equations of the asymptotes are $y=\pm\tfrac{a}{b}x$
  - Solve for the coordinates of the foci using the equation $c=\pm\sqrt{a^2+b^2}$.
  - Plot the vertices, co-vertices, foci, and asymptotes in the coordinate plane, and draw a smooth curve to form the hyperbola.
{{< /callout >}}

**Example.** Graph the hyperbola given by the equation $\tfrac{y^2}{64}-\tfrac{x^2}{36}=1$. Identify and label the vertices, co-vertices, foci, and asymptotes.

**Solution.** The standard form that applies to the given equation is $\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$. Thus, the transverse axis is on the $y$-axis.

The coordinates of the vertices are $(0,\pm a)=(0,\pm\sqrt{64})=(0,\pm8)$

The coordinates of the co-vertices are $(\pm b,0)=(\pm\sqrt{36},0)=(\pm6,0)$

The coordinates of the foci are $(0,\pm c)$, where $c=\pm\sqrt{a^2+b^2}$. Solving for $c$, we have

$$c=\pm\sqrt{a^2+b^2}=\pm\sqrt{64+36}=\pm\sqrt{100}=\pm10$$

Therefore, the coordinates of the foci are $(0,\pm10)$

The equations of the asymptotes are $y=\pm\tfrac{a}{b}x=\pm\tfrac{8}{6}x=\pm\tfrac{4}{3}x$

Plot and label the vertices and co-vertices, and then sketch the central rectangle. Sides of the rectangle are parallel to the axes and pass through the vertices and co-vertices. Sketch and extend the diagonals of the central rectangle to show the asymptotes. The central rectangle and asymptotes provide the framework needed to sketch an accurate graph of the hyperbola. Label the foci and asymptotes, and draw a smooth curve to form the hyperbola, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical hyperbola centered at the origin, y squared over 64 minus x squared over 36 equals 1, opening up and down, with vertices at (0, 8) and (0, −8), co-vertices at (6, 0) and (−6, 0), foci at (0, 10) and (0, −10), the center (0, 0), a dashed central rectangle with corners (±6, ±8), and dashed asymptotes y = (4/3)x and y = −(4/3)x along its diagonals.","xMin":-13,"xMax":13,"yMin":-12,"yMax":12,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[0,0],"a":8,"b":6,"vertical":true}],"segments":[{"from":[6,8],"to":[6,-8],"dashed":true},{"from":[6,-8],"to":[-6,-8],"dashed":true},{"from":[-6,-8],"to":[-6,8],"dashed":true},{"from":[-6,8],"to":[6,8],"dashed":true},{"from":[2.4,-1.9],"to":[0.25,-0.2],"arrows":"end"}],"lines":[{"through":[[0,0],[3,4]],"dashed":true,"label":"y = (4/3)x"},{"through":[[0,0],[3,-4]],"dashed":true,"label":"y = −(4/3)x"}],"points":[{"at":[0,8],"label":"(0, 8)","labelSide":"se"},{"at":[0,-8],"label":"(0, −8)","labelSide":"ne"},{"at":[6,0],"label":"(6, 0)","labelSide":"se"},{"at":[-6,0],"label":"(−6, 0)","labelSide":"sw"},{"at":[0,10],"label":"(0, 10)","labelSide":"ne"},{"at":[0,-10],"label":"(0, −10)","labelSide":"se"},{"at":[0,0]}],"texts":[{"at":[3.6,-2.6],"text":"(0, 0)","anchor":"middle"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph the hyperbola given by the equation $\tfrac{x^2}{144}-\tfrac{y^2}{81}=1$. Identify its vertices, as ordered pairs separated by a comma."
  answer="(12,0),(-12,0)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(12,0)$ and $(-12,0)$"
  hint="The transverse axis lies along the axis of the positive squared term; the vertices sit $a$ units from the center along it, where $a^2$ is that term's denominator."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{x^2}{144}-\tfrac{y^2}{81}=1$, identify its foci, as ordered pairs separated by a comma."
  answer="(15,0),(-15,0)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(15,0)$ and $(-15,0)$"
  hint="Find $c$ from $c^2=a^2+b^2$; the foci lie on the transverse axis, $c$ units from the center."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{x^2}{144}-\tfrac{y^2}{81}=1$, write the equations of its asymptotes, separated by a comma."
  answer="y=\frac{3}{4}x,y=-\frac{3}{4}x"
  answerMode="unordered"
  answerForm="slope-intercept-form simplified-radical"
  answerDisplay="$y=\tfrac34x$ and $y=-\tfrac34x$"
  hint="The asymptotes pass through the center with slopes $\pm\tfrac{b}{a}$ when the transverse axis is horizontal and $\pm\tfrac{a}{b}$ when it is vertical; reduce the slope."
>}}

### Graphing Hyperbolas Not Centered at the Origin

Graphing hyperbolas centered at a point $(h,k)$ other than the origin is similar to graphing ellipses centered at a point other than the origin. We use the standard forms $\tfrac{(x-h)^2}{a^2}-\tfrac{(y-k)^2}{b^2}=1$ for horizontal hyperbolas, and $\tfrac{(y-k)^2}{a^2}-\tfrac{(x-h)^2}{b^2}=1$ for vertical hyperbolas. From these standard form equations we can easily calculate and plot key features of the graph: the coordinates of its center, vertices, co-vertices, and foci; the equations of its asymptotes; and the positions of the transverse and conjugate axes.

{{< callout type="info" >}}
  **How To: Given a general form for a hyperbola centered at $(h,k)$, sketch the graph.**

  - Convert the general form to that standard form. Determine which of the standard forms applies to the given equation.
  - Use the standard form identified in Step 1 to determine the position of the transverse axis; coordinates for the center, vertices, co-vertices, foci; and equations for the asymptotes.
  - If the equation is in the form $\tfrac{(x-h)^2}{a^2}-\tfrac{(y-k)^2}{b^2}=1$, then
    - the transverse axis is parallel to the $x$-axis
    - the center is $(h,k)$
    - the coordinates of the vertices are $(h\pm a,k)$
    - the coordinates of the co-vertices are $(h,k\pm b)$
    - the coordinates of the foci are $(h\pm c,k)$
    - the equations of the asymptotes are $y=\pm\tfrac{b}{a}(x-h)+k$
  - If the equation is in the form $\tfrac{(y-k)^2}{a^2}-\tfrac{(x-h)^2}{b^2}=1$, then
    - the transverse axis is parallel to the $y$-axis
    - the center is $(h,k)$
    - the coordinates of the vertices are $(h,k\pm a)$
    - the coordinates of the co-vertices are $(h\pm b,k)$
    - the coordinates of the foci are $(h,k\pm c)$
    - the equations of the asymptotes are $y=\pm\tfrac{a}{b}(x-h)+k$
  - Solve for the coordinates of the foci using the equation $c=\pm\sqrt{a^2+b^2}$.
  - Plot the center, vertices, co-vertices, foci, and asymptotes in the coordinate plane and draw a smooth curve to form the hyperbola.
{{< /callout >}}

**Example.** Graph the hyperbola given by the equation $9x^2-4y^2-36x-40y-388=0$. Identify and label the center, vertices, co-vertices, foci, and asymptotes.

**Solution.** Start by expressing the equation in standard form. Group terms that contain the same variable, and move the constant to the opposite side of the equation.

$$(9x^2-36x)-(4y^2+40y)=388$$

Factor the leading coefficient of each expression.

$$9(x^2-4x)-4(y^2+10y)=388$$

Complete the square twice. Remember to balance the equation by adding the same constants to each side.

$$9(x^2-4x+4)-4(y^2+10y+25)=388+36-100$$

Rewrite as perfect squares.

$$9(x-2)^2-4(y+5)^2=324$$

Divide both sides by the constant term to place the equation in standard form.

$$\tfrac{(x-2)^2}{36}-\tfrac{(y+5)^2}{81}=1$$

The standard form that applies to the given equation is $\tfrac{(x-h)^2}{a^2}-\tfrac{(y-k)^2}{b^2}=1$, where $a^2=36$ and $b^2=81$, or $a=6$ and $b=9$. Thus, the transverse axis is parallel to the $x$-axis. It follows that:

- the center of the hyperbola is $(h,k)=(2,-5)$
- the coordinates of the vertices are $(h\pm a,k)=(2\pm6,-5)$, or $(-4,-5)$ and $(8,-5)$
- the coordinates of the co-vertices are $(h,k\pm b)=(2,-5\pm9)$, or $(2,-14)$ and $(2,4)$
- the coordinates of the foci are $(h\pm c,k)$, where $c=\pm\sqrt{a^2+b^2}$. Solving for $c$, we have

$$c=\pm\sqrt{36+81}=\pm\sqrt{117}=\pm3\sqrt{13}$$

Therefore, the coordinates of the foci are $(2-3\sqrt{13},-5)$ and $(2+3\sqrt{13},-5)$.

The equations of the asymptotes are $y=\pm\tfrac{b}{a}(x-h)+k=\pm\tfrac{3}{2}(x-2)-5$.

Next, we plot and label the center, vertices, co-vertices, foci, and asymptotes and draw smooth curves to form the hyperbola, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal hyperbola centered at (2, −5), with vertices at (8, −5) and (−4, −5), co-vertices at (2, 4) and (2, −14), foci at (2+3√13, −5) and (2−3√13, −5) just beyond the vertices, the transverse axis between the vertices and the conjugate axis between the co-vertices drawn dashed through the center, and dashed asymptotes y = (3/2)(x−2)−5 and y = −(3/2)(x−2)−5 crossing at the center.","xMin":-13,"xMax":19,"yMin":-19,"yMax":9,"grid":false,"tickLabels":false,"hyperbolas":[{"at":[2,-5],"a":6,"b":9}],"lines":[{"through":[[2,-5],[8,4]],"dashed":true},{"through":[[2,-5],[8,-14]],"dashed":true}],"segments":[{"from":[-4,-5],"to":[8,-5],"dashed":true},{"from":[2,4],"to":[2,-14],"dashed":true},{"from":[-7.3,-9.3],"to":[-4.2,-5.35],"arrows":"end"},{"from":[11.3,-9.3],"to":[8.2,-5.35],"arrows":"end"},{"from":[4.03,-6.08],"to":[2.22,-5.12],"arrows":"end"},{"from":[8.1,6.35],"to":[8.95,5.5],"arrows":"end"},{"from":[8.95,-17.25],"to":[9.6,-16.3],"arrows":"end"}],"points":[{"at":[8,-5]},{"at":[-4,-5]},{"at":[2,4],"label":"(2, 4)","labelSide":"e"},{"at":[2,-14],"label":"(2, −14)","labelSide":"e"},{"at":[12.8167,-5],"label":"(2+3√13, −5)","labelSide":"se"},{"at":[-8.8167,-5],"label":"(2−3√13, −5)","labelSide":"sw"},{"at":[2,-5]}],"texts":[{"at":[-8.6,-10.2],"text":"(−4, −5)","anchor":"middle"},{"at":[12.6,-10.2],"text":"(8, −5)","anchor":"middle"},{"at":[0.7,7.0],"text":"y = (3/2)(x−2)−5","anchor":"start"},{"at":[0.6,-18.4],"text":"y = −(3/2)(x−2)−5","anchor":"start"},{"at":[6.0,-7.0],"text":"(2, −5)","anchor":"middle"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph the hyperbola given by the standard form of an equation $\tfrac{(y+4)^2}{100}-\tfrac{(x-3)^2}{64}=1$. Identify its center, as an ordered pair."
  answer="(3,-4)"
  answerForm="decimal"
  answerDisplay="$(3,-4)$"
  hint="The center $(h,k)$ is read directly from the shifted squared binomials."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{(y+4)^2}{100}-\tfrac{(x-3)^2}{64}=1$, identify its vertices, as ordered pairs separated by a comma."
  answer="(3,-14),(3,6)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(3,-14)$ and $(3,6)$"
  hint="The transverse axis is parallel to the axis of the positive squared term; the vertices sit $a$ units from the center along it, where $a^2$ is that term's denominator."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{(y+4)^2}{100}-\tfrac{(x-3)^2}{64}=1$, write the equations of its asymptotes, separated by a comma."
  answer="y=\frac{5}{4}(x-3)-4,y=-\frac{5}{4}(x-3)-4"
  answerMode="unordered"
  answerForm="no-like-terms"
  answerDisplay="$y=\tfrac54(x-3)-4$ and $y=-\tfrac54(x-3)-4$"
  hint="The asymptotes pass through the center $(h,k)$ with slopes $\pm\tfrac{a}{b}$ when the transverse axis is vertical and $\pm\tfrac{b}{a}$ when it is horizontal: $y=m(x-h)+k$."
>}}

### Solving Applied Problems Involving Hyperbolas

As we discussed at the beginning of this section, hyperbolas have real-world applications in many fields, such as astronomy, physics, engineering, and architecture. The design efficiency of hyperbolic cooling towers is particularly interesting. Cooling towers are used to transfer waste heat to the atmosphere and are often touted for their ability to generate power efficiently. Because of their hyperbolic form, these structures are able to withstand extreme winds while requiring less material than any other forms of their size and strength. For example, a 500-foot tower can be made of a reinforced concrete shell only 6 or 8 inches wide!

The first hyperbolic towers were designed in 1914 and were 35 meters high. Today, the tallest cooling towers are in France, standing a remarkable 170 meters tall. In the following example we will use the design layout of a cooling tower to find a hyperbolic equation that models its sides.

**Example.** The design layout of a cooling tower is shown below. The tower stands $179.6$ meters tall. The diameter of the top is $72$ meters. At their closest, the sides of the tower are $60$ meters apart.

{{< apfigure kind="figure" >}}
{"ariaLabel":"Project design for a natural draft cooling tower, drawn as the two hyperbolic sides of the tower with dashed perpendicular lines — the vertical center line and the horizontal waist line — crossing at the center. Dimension lines give the top diameter 72 m, the waist diameter 60 m at the narrowest point, the height 79.6 m from the waist to the top, and the overall height 179.6 m.","unit":1.6,"segments":[{"from":[-39.051,-100],"to":[-38.342,-95.51]},{"from":[-38.342,-95.51],"to":[-37.653,-91.02]},{"from":[-37.653,-91.02],"to":[-36.986,-86.53]},{"from":[-36.986,-86.53],"to":[-36.341,-82.04]},{"from":[-36.341,-82.04],"to":[-35.719,-77.55]},{"from":[-35.719,-77.55],"to":[-35.123,-73.06]},{"from":[-35.123,-73.06],"to":[-34.552,-68.57]},{"from":[-34.552,-68.57],"to":[-34.009,-64.08]},{"from":[-34.009,-64.08],"to":[-33.495,-59.59]},{"from":[-33.495,-59.59],"to":[-33.011,-55.1]},{"from":[-33.011,-55.1],"to":[-32.559,-50.61]},{"from":[-32.559,-50.61],"to":[-32.139,-46.12]},{"from":[-32.139,-46.12],"to":[-31.754,-41.63]},{"from":[-31.754,-41.63],"to":[-31.404,-37.14]},{"from":[-31.404,-37.14],"to":[-31.091,-32.65]},{"from":[-31.091,-32.65],"to":[-30.815,-28.16]},{"from":[-30.815,-28.16],"to":[-30.578,-23.67]},{"from":[-30.578,-23.67],"to":[-30.381,-19.18]},{"from":[-30.381,-19.18],"to":[-30.224,-14.69]},{"from":[-30.224,-14.69],"to":[-30.108,-10.2]},{"from":[-30.108,-10.2],"to":[-30.034,-5.71]},{"from":[-30.034,-5.71],"to":[-30.002,-1.22]},{"from":[-30.002,-1.22],"to":[-30.011,3.27]},{"from":[-30.011,3.27],"to":[-30.063,7.76]},{"from":[-30.063,7.76],"to":[-30.156,12.25]},{"from":[-30.156,12.25],"to":[-30.29,16.74]},{"from":[-30.29,16.74],"to":[-30.466,21.23]},{"from":[-30.466,21.23],"to":[-30.681,25.72]},{"from":[-30.681,25.72],"to":[-30.936,30.21]},{"from":[-30.936,30.21],"to":[-31.229,34.7]},{"from":[-31.229,34.7],"to":[-31.559,39.19]},{"from":[-31.559,39.19],"to":[-31.926,43.68]},{"from":[-31.926,43.68],"to":[-32.327,48.17]},{"from":[-32.327,48.17],"to":[-32.761,52.66]},{"from":[-32.761,52.66],"to":[-33.228,57.15]},{"from":[-33.228,57.15],"to":[-33.726,61.64]},{"from":[-33.726,61.64],"to":[-34.254,66.13]},{"from":[-34.254,66.13],"to":[-34.809,70.62]},{"from":[-34.809,70.62],"to":[-35.392,75.11]},{"from":[-35.392,75.11],"to":[-36,79.6]},{"from":[39.051,-100],"to":[38.342,-95.51]},{"from":[38.342,-95.51],"to":[37.653,-91.02]},{"from":[37.653,-91.02],"to":[36.986,-86.53]},{"from":[36.986,-86.53],"to":[36.341,-82.04]},{"from":[36.341,-82.04],"to":[35.719,-77.55]},{"from":[35.719,-77.55],"to":[35.123,-73.06]},{"from":[35.123,-73.06],"to":[34.552,-68.57]},{"from":[34.552,-68.57],"to":[34.009,-64.08]},{"from":[34.009,-64.08],"to":[33.495,-59.59]},{"from":[33.495,-59.59],"to":[33.011,-55.1]},{"from":[33.011,-55.1],"to":[32.559,-50.61]},{"from":[32.559,-50.61],"to":[32.139,-46.12]},{"from":[32.139,-46.12],"to":[31.754,-41.63]},{"from":[31.754,-41.63],"to":[31.404,-37.14]},{"from":[31.404,-37.14],"to":[31.091,-32.65]},{"from":[31.091,-32.65],"to":[30.815,-28.16]},{"from":[30.815,-28.16],"to":[30.578,-23.67]},{"from":[30.578,-23.67],"to":[30.381,-19.18]},{"from":[30.381,-19.18],"to":[30.224,-14.69]},{"from":[30.224,-14.69],"to":[30.108,-10.2]},{"from":[30.108,-10.2],"to":[30.034,-5.71]},{"from":[30.034,-5.71],"to":[30.002,-1.22]},{"from":[30.002,-1.22],"to":[30.011,3.27]},{"from":[30.011,3.27],"to":[30.063,7.76]},{"from":[30.063,7.76],"to":[30.156,12.25]},{"from":[30.156,12.25],"to":[30.29,16.74]},{"from":[30.29,16.74],"to":[30.466,21.23]},{"from":[30.466,21.23],"to":[30.681,25.72]},{"from":[30.681,25.72],"to":[30.936,30.21]},{"from":[30.936,30.21],"to":[31.229,34.7]},{"from":[31.229,34.7],"to":[31.559,39.19]},{"from":[31.559,39.19],"to":[31.926,43.68]},{"from":[31.926,43.68],"to":[32.327,48.17]},{"from":[32.327,48.17],"to":[32.761,52.66]},{"from":[32.761,52.66],"to":[33.228,57.15]},{"from":[33.228,57.15],"to":[33.726,61.64]},{"from":[33.726,61.64],"to":[34.254,66.13]},{"from":[34.254,66.13],"to":[34.809,70.62]},{"from":[34.809,70.62],"to":[35.392,75.11]},{"from":[35.392,75.11],"to":[36,79.6]},{"from":[-39.051,-100],"to":[39.051,-100]},{"from":[-36,79.6],"to":[36,79.6]},{"from":[-30,0],"to":[30,0],"dashed":true,"arrow":"both"},{"from":[-36,87.6],"to":[36,87.6],"arrow":"both","label":"72 m"},{"from":[-44,0],"to":[-44,79.6],"arrow":"both"},{"from":[-44,0],"to":[-44,-0.001]},{"from":[-109.051,-100],"to":[-109.051,79.6],"arrow":"both"},{"from":[-44,0],"to":[-30,0],"dashed":true},{"from":[-109.051,79.6],"to":[-36,79.6],"dashed":true},{"from":[0,-100],"to":[0,79.6],"dashed":true,"gapTexts":true},{"from":[-109.051,-100],"to":[-39.051,-100],"dashed":true}],"texts":[{"at":[0,4],"text":"60 m","anchor":"middle"},{"at":[-48,39.8],"text":"79.6 m","anchor":"end"},{"at":[-113.051,-30.200000000000003],"text":"179.6 m","anchor":"end"}]}
{{< /apfigure >}}

*Project design for a natural draft cooling tower.*

Find the equation of the hyperbola that models the sides of the cooling tower. Assume that the center of the hyperbola—indicated by the intersection of dashed perpendicular lines in the figure—is the origin of the coordinate plane. Round final values to four decimal places.

**Solution.** We are assuming the center of the tower is at the origin, so we can use the standard form of a horizontal hyperbola centered at the origin: $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$, where the branches of the hyperbola form the sides of the cooling tower. We must find the values of $a^2$ and $b^2$ to complete the model.

First, we find $a^2$. Recall that the length of the transverse axis of a hyperbola is $2a$. This length is represented by the distance where the sides are closest, which is given as $60$ meters. So, $2a=60$. Therefore, $a=30$ and $a^2=900$.

To solve for $b^2$, we need to substitute for $x$ and $y$ in our equation using a known point. To do this, we can use the dimensions of the tower to find some point $(x,y)$ that lies on the hyperbola. We will use the top right corner of the tower to represent that point. Since the $y$-axis bisects the tower, our $x$-value can be represented by the radius of the top, or $36$ meters. The $y$-value is represented by the distance from the origin to the top, which is given as $79.6$ meters. Therefore,

$$
\begin{array}{lrcl}
\text{Standard form of horizontal hyperbola.} & \tfrac{x^2}{a^2}-\tfrac{y^2}{b^2} &=& 1 \\[4pt]
\text{Isolate }b^2. & b^2 &=& \tfrac{y^2}{x^2/a^2-1} \\[4pt]
\text{Substitute for }a^2,x,\text{ and }y. & &=& \tfrac{(79.6)^2}{(36)^2/900-1} \\[4pt]
\text{Round to four decimal places.} & &\approx& 14{,}400.3636
\end{array}
$$

The sides of the tower can be modeled by the hyperbolic equation

$$\tfrac{x^2}{900}-\tfrac{y^2}{14{,}400.3636}=1,\text{ or }\tfrac{x^2}{30^2}-\tfrac{y^2}{120.0015^2}=1$$

{{< apfigure kind="figure" >}}
{"ariaLabel":"Project design for a natural draft cooling tower, drawn as the two hyperbolic sides of the tower with dashed perpendicular lines — the vertical center line and the horizontal waist line — crossing at the center. Dimension lines give the top diameter 60 m, the waist diameter 40 m at the narrowest point, the height 67.082 m from the waist to the top, and the overall height 167.082 m.","unit":1.6,"segments":[{"from":[-38.873,-100],"to":[-37.686,-95.823]},{"from":[-37.686,-95.823],"to":[-36.513,-91.646]},{"from":[-36.513,-91.646],"to":[-35.357,-87.469]},{"from":[-35.357,-87.469],"to":[-34.217,-83.292]},{"from":[-34.217,-83.292],"to":[-33.098,-79.115]},{"from":[-33.098,-79.115],"to":[-31.999,-74.938]},{"from":[-31.999,-74.938],"to":[-30.925,-70.761]},{"from":[-30.925,-70.761],"to":[-29.876,-66.584]},{"from":[-29.876,-66.584],"to":[-28.857,-62.407]},{"from":[-28.857,-62.407],"to":[-27.87,-58.23]},{"from":[-27.87,-58.23],"to":[-26.919,-54.052]},{"from":[-26.919,-54.052],"to":[-26.008,-49.875]},{"from":[-26.008,-49.875],"to":[-25.14,-45.698]},{"from":[-25.14,-45.698],"to":[-24.322,-41.521]},{"from":[-24.322,-41.521],"to":[-23.557,-37.344]},{"from":[-23.557,-37.344],"to":[-22.852,-33.167]},{"from":[-22.852,-33.167],"to":[-22.212,-28.99]},{"from":[-22.212,-28.99],"to":[-21.643,-24.813]},{"from":[-21.643,-24.813],"to":[-21.15,-20.636]},{"from":[-21.15,-20.636],"to":[-20.739,-16.459]},{"from":[-20.739,-16.459],"to":[-20.415,-12.282]},{"from":[-20.415,-12.282],"to":[-20.182,-8.105]},{"from":[-20.182,-8.105],"to":[-20.043,-3.928]},{"from":[-20.043,-3.928],"to":[-20,0.249]},{"from":[-20,0.249],"to":[-20.054,4.426]},{"from":[-20.054,4.426],"to":[-20.205,8.603]},{"from":[-20.205,8.603],"to":[-20.449,12.78]},{"from":[-20.449,12.78],"to":[-20.783,16.957]},{"from":[-20.783,16.957],"to":[-21.204,21.134]},{"from":[-21.204,21.134],"to":[-21.707,25.311]},{"from":[-21.707,25.311],"to":[-22.285,29.489]},{"from":[-22.285,29.489],"to":[-22.933,33.666]},{"from":[-22.933,33.666],"to":[-23.646,37.843]},{"from":[-23.646,37.843],"to":[-24.417,42.02]},{"from":[-24.417,42.02],"to":[-25.241,46.197]},{"from":[-25.241,46.197],"to":[-26.114,50.374]},{"from":[-26.114,50.374],"to":[-27.03,54.551]},{"from":[-27.03,54.551],"to":[-27.986,58.728]},{"from":[-27.986,58.728],"to":[-28.977,62.905]},{"from":[-28.977,62.905],"to":[-30,67.082]},{"from":[38.873,-100],"to":[37.686,-95.823]},{"from":[37.686,-95.823],"to":[36.513,-91.646]},{"from":[36.513,-91.646],"to":[35.357,-87.469]},{"from":[35.357,-87.469],"to":[34.217,-83.292]},{"from":[34.217,-83.292],"to":[33.098,-79.115]},{"from":[33.098,-79.115],"to":[31.999,-74.938]},{"from":[31.999,-74.938],"to":[30.925,-70.761]},{"from":[30.925,-70.761],"to":[29.876,-66.584]},{"from":[29.876,-66.584],"to":[28.857,-62.407]},{"from":[28.857,-62.407],"to":[27.87,-58.23]},{"from":[27.87,-58.23],"to":[26.919,-54.052]},{"from":[26.919,-54.052],"to":[26.008,-49.875]},{"from":[26.008,-49.875],"to":[25.14,-45.698]},{"from":[25.14,-45.698],"to":[24.322,-41.521]},{"from":[24.322,-41.521],"to":[23.557,-37.344]},{"from":[23.557,-37.344],"to":[22.852,-33.167]},{"from":[22.852,-33.167],"to":[22.212,-28.99]},{"from":[22.212,-28.99],"to":[21.643,-24.813]},{"from":[21.643,-24.813],"to":[21.15,-20.636]},{"from":[21.15,-20.636],"to":[20.739,-16.459]},{"from":[20.739,-16.459],"to":[20.415,-12.282]},{"from":[20.415,-12.282],"to":[20.182,-8.105]},{"from":[20.182,-8.105],"to":[20.043,-3.928]},{"from":[20.043,-3.928],"to":[20,0.249]},{"from":[20,0.249],"to":[20.054,4.426]},{"from":[20.054,4.426],"to":[20.205,8.603]},{"from":[20.205,8.603],"to":[20.449,12.78]},{"from":[20.449,12.78],"to":[20.783,16.957]},{"from":[20.783,16.957],"to":[21.204,21.134]},{"from":[21.204,21.134],"to":[21.707,25.311]},{"from":[21.707,25.311],"to":[22.285,29.489]},{"from":[22.285,29.489],"to":[22.933,33.666]},{"from":[22.933,33.666],"to":[23.646,37.843]},{"from":[23.646,37.843],"to":[24.417,42.02]},{"from":[24.417,42.02],"to":[25.241,46.197]},{"from":[25.241,46.197],"to":[26.114,50.374]},{"from":[26.114,50.374],"to":[27.03,54.551]},{"from":[27.03,54.551],"to":[27.986,58.728]},{"from":[27.986,58.728],"to":[28.977,62.905]},{"from":[28.977,62.905],"to":[30,67.082]},{"from":[-38.873,-100],"to":[38.873,-100]},{"from":[-30,67.082],"to":[30,67.082]},{"from":[-20,0],"to":[20,0],"dashed":true,"arrow":"both"},{"from":[-30,75.082],"to":[30,75.082],"arrow":"both","label":"60 m"},{"from":[-34,0],"to":[-34,67.082],"arrow":"both"},{"from":[-34,0],"to":[-34,-0.001]},{"from":[-108.87299999999999,-100],"to":[-108.87299999999999,67.082],"arrow":"both"},{"from":[-34,0],"to":[-20,0],"dashed":true},{"from":[-108.87299999999999,67.082],"to":[-30,67.082],"dashed":true},{"from":[0,-100],"to":[0,67.082],"dashed":true,"gapTexts":true},{"from":[-108.87299999999999,-100],"to":[-38.873,-100],"dashed":true}],"texts":[{"at":[0,4],"text":"40 m","anchor":"middle"},{"at":[-38,33.541],"text":"67.082 m","anchor":"end"},{"at":[-112.87299999999999,-36.459],"text":"167.082 m","anchor":"end"}]}
{{< /apfigure >}}

*Project design for a natural draft cooling tower.*

{{< fillin
  question="A design for a cooling tower project, shown above, has an overall height of $167.082$ meters, a diameter at the top of $60$ meters, and a waist diameter (where the sides are closest, $30\sqrt{5}\approx67.082$ meters below the top) of $40$ meters. Assuming the hyperbola's center is at the waist, at the origin of the coordinate plane, find the equation that models the sides of the tower, using the exact height $30\sqrt{5}$."
  answer="\frac{x^2}{400}-\frac{y^2}{3600}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{400}-\tfrac{y^2}{3{,}600}=1$"
  hint="The waist diameter is $2a$. The top right corner lies on the hyperbola: substitute its $x$ (the top radius) and its exact height $y=30\sqrt5$ above the waist into $b^2=\tfrac{y^2}{x^2/a^2-1}$."
>}}

## Key equations

| Hyperbola, center at origin, transverse axis on $x$-axis | $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$ |
| :--- | :--- |
| Hyperbola, center at origin, transverse axis on $y$-axis | $\tfrac{y^2}{a^2}-\tfrac{x^2}{b^2}=1$ |
| Hyperbola, center at $(h,k)$, transverse axis parallel to $x$-axis | $\tfrac{(x-h)^2}{a^2}-\tfrac{(y-k)^2}{b^2}=1$ |
| Hyperbola, center at $(h,k)$, transverse axis parallel to $y$-axis | $\tfrac{(y-k)^2}{a^2}-\tfrac{(x-h)^2}{b^2}=1$ |

## Key concepts

- A hyperbola is the set of all points $(x,y)$ in a plane such that the difference of the distances between $(x,y)$ and the foci is a positive constant.
- The standard form of a hyperbola can be used to locate its vertices and foci.
- When given the coordinates of the foci and vertices of a hyperbola, we can write the equation of the hyperbola in standard form.
- When given an equation for a hyperbola, we can identify its vertices, co-vertices, foci, asymptotes, and lengths and positions of the transverse and conjugate axes in order to graph the hyperbola.
- Real-world situations can be modeled using the standard equations of hyperbolas. For instance, given the dimensions of a natural draft cooling tower, we can find a hyperbolic equation that models its sides.

## Practice

### Locate a hyperbola's vertices and foci

{{< fillin
  question="The hyperbola $\tfrac{(x-1)^2}{9}-\tfrac{(y-2)^2}{16}=1$ is already in standard form. Enter its two vertices, as ordered pairs separated by a comma."
  answer="(4,2),(-2,2)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(4,2)$ and $(-2,2)$"
  hint="The transverse axis is parallel to the axis of the positive squared term; the vertices sit $a$ units from the center along it, where $a^2$ is that term's denominator."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{(x-1)^2}{9}-\tfrac{(y-2)^2}{16}=1$, enter its two foci, as ordered pairs separated by a comma."
  answer="(6,2),(-4,2)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(6,2)$ and $(-4,2)$"
  hint="Find $c$ from $c^2=a^2+b^2$; the foci lie on the transverse axis, $c$ units from the center."
>}}

{{< fillin
  question="The hyperbola $\tfrac{(x-2)^2}{49}-\tfrac{(y+7)^2}{49}=1$ is already in standard form. Enter its two vertices, as ordered pairs separated by a comma."
  answer="(9,-7),(-5,-7)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(9,-7)$ and $(-5,-7)$"
  hint="The transverse axis is parallel to the axis of the positive squared term; the vertices sit $a$ units from the center along it, where $a^2$ is that term's denominator."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{(x-2)^2}{49}-\tfrac{(y+7)^2}{49}=1$, enter its two foci, as ordered pairs separated by a comma, in exact form."
  answer="(2+7\sqrt{2},-7),(2-7\sqrt{2},-7)"
  answerMode="unordered"
  answerForm="exact simplified-radical no-like-terms"
  answerDisplay="$(2+7\sqrt2,-7)$ and $(2-7\sqrt2,-7)$"
  hint="Find $c$ from $c^2=a^2+b^2$; the foci lie on the transverse axis, $c$ units from the center."
>}}

### Write equations of hyperbolas in standard form

{{< fillin
  question="A hyperbola centered at the origin has vertices $(3,0)$ and $(-3,0)$ and one focus at $(5,0)$. Write its equation in standard form."
  answer="\frac{x^2}{9}-\frac{y^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{9}-\tfrac{y^2}{16}=1$"
  hint="Read $a$ from the vertices and $c$ from the focus, then find $b^2=c^2-a^2$ to complete $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$."
>}}

{{< fillin
  question="A hyperbola has vertices $(1,1)$ and $(11,1)$ and one focus at $(12,1)$. Write its equation in standard form."
  answer="\frac{(x-6)^2}{25}-\frac{(y-1)^2}{11}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x-6)^2}{25}-\tfrac{(y-1)^2}{11}=1$"
  hint="The center is the midpoint of the vertices; $a$ is the distance from the center to a vertex, $c$ the distance to the focus, and $b^2=c^2-a^2$."
>}}

### Graph hyperbolas centered at the origin

{{< fillin
  question="The hyperbola $\tfrac{x^2}{25}-\tfrac{y^2}{36}=1$ is centered at the origin. Enter its two vertices, as ordered pairs separated by a comma."
  answer="(5,0),(-5,0)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(5,0)$ and $(-5,0)$"
  hint="The transverse axis is parallel to the axis of the positive squared term; the vertices sit $a$ units from the center along it, where $a^2$ is that term's denominator."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{x^2}{25}-\tfrac{y^2}{36}=1$, enter its two foci, as ordered pairs separated by a comma, in exact form."
  answer="(\sqrt{61},0),(-\sqrt{61},0)"
  answerMode="unordered"
  answerForm="exact simplified-radical"
  answerDisplay="$(\sqrt{61},0)$ and $(-\sqrt{61},0)$"
  hint="Find $c$ from $c^2=a^2+b^2$; the foci lie on the transverse axis, $c$ units from the center."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{x^2}{25}-\tfrac{y^2}{36}=1$, write the equations of its two asymptotes, separated by a comma."
  answer="y=\frac{6}{5}x,y=-\frac{6}{5}x"
  answerMode="unordered"
  answerForm="slope-intercept-form simplified-radical"
  answerDisplay="$y=\tfrac65x$ and $y=-\tfrac65x$"
  hint="The asymptotes pass through the center with slopes $\pm\tfrac{b}{a}$ when the transverse axis is horizontal and $\pm\tfrac{a}{b}$ when it is vertical; reduce the slope."
>}}

{{< fillin
  question="The hyperbola $\tfrac{y^2}{4}-\tfrac{x^2}{81}=1$ is centered at the origin. Enter its two vertices, as ordered pairs separated by a comma."
  answer="(0,2),(0,-2)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(0,2)$ and $(0,-2)$"
  hint="The transverse axis is parallel to the axis of the positive squared term; the vertices sit $a$ units from the center along it, where $a^2$ is that term's denominator."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{y^2}{4}-\tfrac{x^2}{81}=1$, enter its two foci, as ordered pairs separated by a comma, in exact form."
  answer="(0,\sqrt{85}),(0,-\sqrt{85})"
  answerMode="unordered"
  answerForm="exact simplified-radical"
  answerDisplay="$(0,\sqrt{85})$ and $(0,-\sqrt{85})$"
  hint="Find $c$ from $c^2=a^2+b^2$; the foci lie on the transverse axis, $c$ units from the center."
>}}

{{< fillin
  question="For the hyperbola $\tfrac{y^2}{4}-\tfrac{x^2}{81}=1$, write the equations of its two asymptotes, separated by a comma."
  answer="y=\frac{2}{9}x,y=-\frac{2}{9}x"
  answerMode="unordered"
  answerForm="slope-intercept-form simplified-radical"
  answerDisplay="$y=\tfrac29x$ and $y=-\tfrac29x$"
  hint="The asymptotes pass through the center with slopes $\pm\tfrac{b}{a}$ when the transverse axis is horizontal and $\pm\tfrac{a}{b}$ when it is vertical; reduce the slope."
>}}

### Graph hyperbolas not centered at the origin

{{< fillin
  question="Write the equation $-4x^2+24x+16y^2-128y+156=0$ in standard form."
  answer="\frac{(y-4)^2}{4}-\frac{(x-3)^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(y-4)^2}{4}-\tfrac{(x-3)^2}{16}=1$"
  hint="Group the $x$- and $y$-terms, factor out each leading coefficient, then complete the square in both variables."
>}}

{{< fillin
  question="For the same hyperbola, $-4x^2+24x+16y^2-128y+156=0$, enter its two vertices, as ordered pairs separated by a comma."
  answer="(3,6),(3,2)"
  answerMode="unordered"
  answerForm="decimal"
  answerDisplay="$(3,6)$ and $(3,2)$"
  hint="Work from the standard form you wrote above. The transverse axis is parallel to the axis of the positive squared term; the vertices sit $a$ units from the center along it, where $a^2$ is that term's denominator."
>}}

{{< fillin
  question="For the same hyperbola, $-4x^2+24x+16y^2-128y+156=0$, enter its two foci, as ordered pairs separated by a comma, in exact form."
  answer="(3,4+2\sqrt{5}),(3,4-2\sqrt{5})"
  answerMode="unordered"
  answerForm="exact simplified-radical no-like-terms"
  answerDisplay="$(3,4+2\sqrt5)$ and $(3,4-2\sqrt5)$"
  hint="Work from the standard form you wrote above. Find $c$ from $c^2=a^2+b^2$; the foci lie on the transverse axis, $c$ units from the center."
>}}

{{< fillin
  question="For the same hyperbola, $-4x^2+24x+16y^2-128y+156=0$, write the equations of its two asymptotes, separated by a comma."
  answer="y=\frac{1}{2}(x-3)+4,y=-\frac{1}{2}(x-3)+4"
  answerMode="unordered"
  answerForm="no-like-terms"
  answerDisplay="$y=\tfrac12(x-3)+4$ and $y=-\tfrac12(x-3)+4$"
  hint="Work from the standard form you wrote above. The asymptotes pass through the center $(h,k)$ with slopes $\pm\tfrac{b}{a}$ when the transverse axis is horizontal and $\pm\tfrac{a}{b}$ when it is vertical: $y=m(x-h)+k$."
>}}

{{< fillin
  question="Find the equations of the asymptotes of the hyperbola $\tfrac{(x-3)^2}{25}-\tfrac{(y+4)^2}{4}=1$, separated by a comma."
  answer="y=\frac{2}{5}(x-3)-4,y=-\frac{2}{5}(x-3)-4"
  answerMode="unordered"
  answerForm="no-like-terms"
  answerDisplay="$y=\tfrac25(x-3)-4$ and $y=-\tfrac25(x-3)-4$"
  hint="The asymptotes pass through the center $(h,k)$ with slopes $\pm\tfrac{b}{a}$ when the transverse axis is horizontal and $\pm\tfrac{a}{b}$ when it is vertical: $y=m(x-h)+k$."
>}}

### Solve applied problems involving hyperbolas

{{< fillin
  question="A hedge shaped like a hyperbola is planted near a fountain at the center of a yard. The hedge follows the asymptotes $y=x$ and $y=-x$, and its closest distance to the fountain is $5$ yards. Find the equation of the hyperbola. Place the fountain at the origin, with the vertices of the hedge on the $x$-axis."
  answer="\frac{x^2}{25}-\frac{y^2}{25}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{25}-\tfrac{y^2}{25}=1$"
  hint="The closest approach to the fountain is the vertex distance $a$, and the asymptotes' slope is $\tfrac{b}{a}$; solve for $b$ and use $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$."
>}}

{{< fillin
  question="A hedge shaped like a hyperbola is planted near a fountain at the center of a yard. The hedge follows the asymptotes $y=\tfrac{1}{2}x$ and $y=-\tfrac{1}{2}x$, and its closest distance to the fountain is $10$ yards. Find the equation of the hyperbola. Place the fountain at the origin, with the vertices of the hedge on the $x$-axis."
  answer="\frac{x^2}{100}-\frac{y^2}{25}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{100}-\tfrac{y^2}{25}=1$"
  hint="The closest approach to the fountain is the vertex distance $a$, and the asymptotes' slope is $\tfrac{b}{a}$; solve for $b$ and use $\tfrac{x^2}{a^2}-\tfrac{y^2}{b^2}=1$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 10.2: The Hyperbola](https://openstax.org/books/precalculus-2e/pages/10-2-the-hyperbola) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own review of the Distance Formula and graphing a hyperbola centered at the origin, keyed to Intermediate Algebra 11.1.1/11.4.1, complete with its own worked example and two "Practice Makes Perfect" exercises) — confirmed against the rendered PDF, page 1026 (true PDF index 1036), where the section heading "10.2 The Hyperbola" runs directly into the sonic-boom introduction with no corequisite-skills material between them; the section's own five learning objectives, from the module's abstract, are unaffected. Omitted the credit photograph of the Drax power station cooling towers (Figure 10, credit: Les Haines, Flickr), keeping the sentences that surround it. Recreated every instructional figure as an accessible spec-first SVG: the sonic-boom schematic (Figure 1: a jet trailing its cone-shaped shock wave, the cone's circular wavefronts and the hyperbola where it meets the ground computed from one cone and ground plane under an oblique projection) and the double-cone conic-section diagram (Figure 2) as `kind="figure"` figures, the latter built with the parent's cone-schematic generator (`hyperbola` panel); the generic key-features diagram (Figure 3) and the foci-distance diagram ($d_1$, $d_2$, Figure 4) as labeled graphs built from the `hyperbolas` primitive with dashed `lines`/`segments` for the asymptotes and central rectangle; the origin- and $(h,k)$-centered standard-form summary pairs (Figures 5 and 7) as two side-by-side `apfigure`s each, one per orientation; and every worked example's answer graph (Figures 6, 8, 9) the same way — Figure 8's second panel, the central rectangle with its corners labelled, is drawn into the graph itself as a dashed rectangle — with $c^2=a^2+b^2$ verified by script for every labelled focus and every asymptote line confirmed to pass through its central rectangle's corner; and the two cooling-tower design diagrams (Figures 11 and 12) as `kind="figure"` profiles whose two sides are sampled exactly from the tower's own hyperbola ($x=\pm a\sqrt{1+y^2/b^2}$ between the base and the top), with the vertical center line and the waist dashed (the "dashed perpendicular lines" whose intersection the example names as the center) and the printed dimensions on arrowed dimension lines. **Confirmed source defect (not corrected here since it affects no graded content):** the CNXML alt text for Figure 7 (`Figure_10_02_005`, the $(h,k)$ standard-forms figure) describes a horizontal parabola with a directrix and latus rectum — the alt text of a parabola figure from a different section — while the figure's own caption and the surrounding prose both describe, and the rendered PDF page confirms, the two-panel horizontal/vertical hyperbola-with-center-$(h,k)$ pair reproduced above; the recreation follows the caption, prose, and PDF, not the mismatched alt text. **Confirmed source defect, silently corrected in prose (harmless, ungraded):** the CNXML and PDF both read "the center of the ellipse is $(h,k)=(2,-5)$" in Example 5's key-feature list — a copy-paste leftover from the parallel ellipse-chapter example, since the whole example is otherwise consistently about a hyperbola; rendered here as "the center of the hyperbola" for readability. **Confirmed source defect, not corrected (alt text only, no rendered effect):** Figure 9's (`Figure_10_02_008`) alt text gives Example 5's second vertex as "$(8,5)$", dropping the negative sign the algebra and the printed PDF page both carry ($(h+a,k)=(2+6,-5)=(8,-5)$); the figure recreated above and its `ariaLabel` use the correct $(8,-5)$. **Confirmed source defect, worked around:** Try It 6's figure (`Figure_10_02_012`) alt text states the cooling-tower design's height-to-waist distance as "79.6 meters from the top" and both the top and waist diameters as "60 meters," reusing Example 6's own numbers; the rendered PDF page (1039, true PDF index 1049) shows the actual figure labels $167.082\text{ m}$ total height, $60\text{ m}$ top diameter, $40\text{ m}$ waist diameter, and $67.082\text{ m}$ from the waist to the top — the values used here, matching the source's own printed answer $\tfrac{x^2}{400}-\tfrac{y^2}{3{,}600}=1$; because that answer's $b^2=3{,}600$ follows only from the exact height $30\sqrt5$ (the printed $67.082$ m, carried through, gives $b^2\approx3{,}599.9958$), the local question states the height as $30\sqrt5\approx67.082$ m and asks for the exact value. Computing $b^2$ directly from the printed $67.082\text{ m}$ intermediate gives $b^2\approx3{,}599.9958$ rather than the source's clean $3{,}600$ (the design's underlying exact height above the waist is $\sqrt{4{,}500}\approx67.08204$, of which $67.082$ is itself a rounded display value) — a sub-$0.01\%$ rounding-path difference; the source's own $3{,}600$ is shipped as printed. Kept the "Media" callout's introductory sentence but omitted its four external links, matching house precedent elsewhere in this book. Every retained Try It's vertices/foci/asymptotes/center ask was split into one fill-in per named quantity — the source's own Try Its 4 and 5 request four and five quantities respectively, each Try It here keeps three of them (the 2–3 consecutive-question convention for in-page practice), independently re-derived and verified against the printed key. Ten retained Section Exercises (two per objective) were expanded into nineteen interactive Practice components (the two hedge exercises add "Place the fountain at the origin, with the vertices of the hedge on the $x$-axis," which the source leaves unstated although its answers assume it — the asymptotes and closest distance alone also fit the vertical hyperbola), one group per objective, every one independently re-derived (including by running the arithmetic in Node and replaying every standard-form answer's printed general-form equation through the real grader under `conic-standard-form`) rather than read off the source key.</small>
