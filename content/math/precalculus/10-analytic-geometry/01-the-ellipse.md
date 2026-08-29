---
title: The Ellipse
description: >-
  Writing equations of ellipses in standard form, graphing ellipses centered
  at the origin and centered elsewhere, and solving applied problems such as
  the whispering-chamber and semi-elliptical-arch questions — adapted from
  OpenStax Precalculus 2e, Section 10.1.
source_section: "10.1"
weight: 1
---

{{< callout type="info" >}}
**By the end of this section, you will be able to:**

- Write equations of ellipses in standard form
- Graph ellipses centered at the origin
- Graph ellipses not centered at the origin
- Solve applied problems involving ellipses
{{< /callout >}}

Can you imagine standing at one end of a large room and still being able to hear a whisper from a person standing at the other end? The National Statuary Hall in Washington, D.C., is such a room. It is a semi-circular room called a *whispering chamber* because the shape makes it possible for sound to travel along the walls and dome. In this section, we will investigate the shape of this room and its real-world applications, including how far apart two people in Statuary Hall can stand and still hear each other whisper.

### Writing Equations of Ellipses in Standard Form

A conic section, or **conic**, is a shape resulting from intersecting a right circular cone with a plane. The angle at which the plane intersects the cone determines the shape, as shown below.

{{< apfigure kind="figure" >}}
{"ariaLabel":"Three double cones, each cut by a shaded plane. Left: a plane tilted less steeply than the cone edge cuts one nappe in a closed curve, an ellipse. Middle: a vertical plane cuts both nappes in two open curves, a hyperbola. Right: a plane tilted parallel to one cone edge cuts one nappe in a single open curve, a parabola. Hidden parts of the base circles and traces are dashed.","unit":24,"polygons":[{"points":[[-2.656,-2.834],[1.144,-2.834],[2.656,-0.566],[-1.144,-0.566]],"fill":true},{"points":[[5.77,-3.82],[7.03,-2.98],[7.03,3.82],[5.77,2.98]],"fill":true},{"points":[[12.153,0.222],[13.287,0.978],[11.127,-3.072],[9.993,-3.828]],"fill":true}],"segments":[{"from":[0,0],"to":[1.719,-2.772]},{"from":[0,0],"to":[-1.719,-3.115]},{"from":[0,0],"to":[1.719,3.115]},{"from":[0,0],"to":[-1.719,2.772]},{"from":[-1.6,-3],"to":[-1.674,-3.058]},{"from":[-1.674,-3.058],"to":[-1.719,-3.116]},{"from":[-1.719,-3.116],"to":[-1.735,-3.171]},{"from":[-1.735,-3.171],"to":[-1.722,-3.224]},{"from":[-1.722,-3.224],"to":[-1.678,-3.273]},{"from":[-1.678,-3.273],"to":[-1.607,-3.317]},{"from":[-1.607,-3.317],"to":[-1.507,-3.355]},{"from":[-1.507,-3.355],"to":[-1.382,-3.388]},{"from":[-1.382,-3.388],"to":[-1.233,-3.414]},{"from":[-1.233,-3.414],"to":[-1.063,-3.433]},{"from":[-1.063,-3.433],"to":[-0.875,-3.444]},{"from":[-0.875,-3.444],"to":[-0.672,-3.448]},{"from":[-0.672,-3.448],"to":[-0.457,-3.444]},{"from":[-0.457,-3.444],"to":[-0.235,-3.433]},{"from":[-0.235,-3.433],"to":[-0.009,-3.414]},{"from":[-0.009,-3.414],"to":[0.218,-3.388]},{"from":[0.218,-3.388],"to":[0.441,-3.355]},{"from":[0.441,-3.355],"to":[0.656,-3.317]},{"from":[0.656,-3.317],"to":[0.86,-3.273]},{"from":[0.86,-3.273],"to":[1.05,-3.224]},{"from":[1.05,-3.224],"to":[1.221,-3.171]},{"from":[1.221,-3.171],"to":[1.372,-3.116]},{"from":[1.372,-3.116],"to":[1.499,-3.058]},{"from":[1.499,-3.058],"to":[1.6,-3]},{"from":[1.6,-3],"to":[1.674,-2.942]},{"from":[1.719,-2.884],"to":[1.735,-2.829]},{"from":[1.722,-2.776],"to":[1.678,-2.727]},{"from":[1.607,-2.683],"to":[1.507,-2.645]},{"from":[1.382,-2.612],"to":[1.233,-2.586]},{"from":[1.063,-2.567],"to":[0.875,-2.556]},{"from":[0.672,-2.552],"to":[0.457,-2.556]},{"from":[0.235,-2.567],"to":[0.009,-2.586]},{"from":[-0.218,-2.612],"to":[-0.441,-2.645]},{"from":[-0.656,-2.683],"to":[-0.86,-2.727]},{"from":[-1.05,-2.776],"to":[-1.221,-2.829]},{"from":[-1.372,-2.884],"to":[-1.499,-2.942]},{"from":[-1.6,3],"to":[-1.674,2.942]},{"from":[-1.674,2.942],"to":[-1.719,2.884]},{"from":[-1.719,2.884],"to":[-1.735,2.829]},{"from":[-1.735,2.829],"to":[-1.722,2.776]},{"from":[-1.722,2.776],"to":[-1.678,2.727]},{"from":[-1.678,2.727],"to":[-1.607,2.683]},{"from":[-1.607,2.683],"to":[-1.507,2.645]},{"from":[-1.507,2.645],"to":[-1.382,2.612]},{"from":[-1.382,2.612],"to":[-1.233,2.586]},{"from":[-1.233,2.586],"to":[-1.063,2.567]},{"from":[-1.063,2.567],"to":[-0.875,2.556]},{"from":[-0.875,2.556],"to":[-0.672,2.552]},{"from":[-0.672,2.552],"to":[-0.457,2.556]},{"from":[-0.457,2.556],"to":[-0.235,2.567]},{"from":[-0.235,2.567],"to":[-0.009,2.586]},{"from":[-0.009,2.586],"to":[0.218,2.612]},{"from":[0.218,2.612],"to":[0.441,2.645]},{"from":[0.441,2.645],"to":[0.656,2.683]},{"from":[0.656,2.683],"to":[0.86,2.727]},{"from":[0.86,2.727],"to":[1.05,2.776]},{"from":[1.05,2.776],"to":[1.221,2.829]},{"from":[1.221,2.829],"to":[1.372,2.884]},{"from":[1.372,2.884],"to":[1.499,2.942]},{"from":[1.499,2.942],"to":[1.6,3]},{"from":[1.6,3],"to":[1.674,3.058]},{"from":[1.719,3.116],"to":[1.735,3.171]},{"from":[1.722,3.224],"to":[1.678,3.273]},{"from":[1.607,3.317],"to":[1.507,3.355]},{"from":[1.382,3.388],"to":[1.233,3.414]},{"from":[1.063,3.433],"to":[0.875,3.444]},{"from":[0.672,3.448],"to":[0.457,3.444]},{"from":[0.235,3.433],"to":[0.009,3.414]},{"from":[-0.218,3.388],"to":[-0.441,3.355]},{"from":[-0.656,3.317],"to":[-0.86,3.273]},{"from":[-1.05,3.224],"to":[-1.221,3.171]},{"from":[-1.372,3.116],"to":[-1.499,3.058]},{"from":[0.907,-1.7],"to":[0.972,-1.624]},{"from":[1.024,-1.545],"to":[1.059,-1.465]},{"from":[1.076,-1.385],"to":[1.073,-1.308]},{"from":[1.049,-1.235],"to":[1.003,-1.168]},{"from":[0.934,-1.11],"to":[0.844,-1.062]},{"from":[0.735,-1.027],"to":[0.609,-1.005]},{"from":[0.468,-0.998],"to":[0.318,-1.005]},{"from":[0.162,-1.027],"to":[0.006,-1.062]},{"from":[-0.147,-1.11],"to":[-0.293,-1.168]},{"from":[-0.428,-1.235],"to":[-0.55,-1.308]},{"from":[-0.656,-1.385],"to":[-0.745,-1.465]},{"from":[-0.817,-1.545],"to":[-0.87,-1.624]},{"from":[-0.907,-1.7],"to":[-0.926,-1.773]},{"from":[-0.926,-1.773],"to":[-0.929,-1.841]},{"from":[-0.929,-1.841],"to":[-0.918,-1.904]},{"from":[-0.918,-1.904],"to":[-0.892,-1.961]},{"from":[-0.892,-1.961],"to":[-0.854,-2.012]},{"from":[-0.854,-2.012],"to":[-0.804,-2.057]},{"from":[-0.804,-2.057],"to":[-0.744,-2.095]},{"from":[-0.744,-2.095],"to":[-0.674,-2.126]},{"from":[-0.674,-2.126],"to":[-0.596,-2.15]},{"from":[-0.596,-2.15],"to":[-0.51,-2.167]},{"from":[-0.51,-2.167],"to":[-0.418,-2.178]},{"from":[-0.418,-2.178],"to":[-0.321,-2.181]},{"from":[-0.321,-2.181],"to":[-0.219,-2.178]},{"from":[-0.219,-2.178],"to":[-0.113,-2.167]},{"from":[-0.113,-2.167],"to":[-0.004,-2.15]},{"from":[-0.004,-2.15],"to":[0.106,-2.126]},{"from":[0.106,-2.126],"to":[0.218,-2.095]},{"from":[0.218,-2.095],"to":[0.328,-2.057]},{"from":[0.328,-2.057],"to":[0.438,-2.012]},{"from":[0.438,-2.012],"to":[0.544,-1.961]},{"from":[0.544,-1.961],"to":[0.646,-1.904]},{"from":[0.646,-1.904],"to":[0.741,-1.841]},{"from":[0.741,-1.841],"to":[0.829,-1.773]},{"from":[0.829,-1.773],"to":[0.907,-1.7]},{"from":[5.7,0],"to":[7.419,-2.772]},{"from":[5.7,0],"to":[3.981,-3.115]},{"from":[5.7,0],"to":[7.419,3.115]},{"from":[5.7,0],"to":[3.981,2.772]},{"from":[4.1,-3],"to":[4.026,-3.058]},{"from":[4.026,-3.058],"to":[3.981,-3.116]},{"from":[3.981,-3.116],"to":[3.965,-3.171]},{"from":[3.965,-3.171],"to":[3.978,-3.224]},{"from":[3.978,-3.224],"to":[4.022,-3.273]},{"from":[4.022,-3.273],"to":[4.093,-3.317]},{"from":[4.093,-3.317],"to":[4.193,-3.355]},{"from":[4.193,-3.355],"to":[4.318,-3.388]},{"from":[4.318,-3.388],"to":[4.467,-3.414]},{"from":[4.467,-3.414],"to":[4.637,-3.433]},{"from":[4.637,-3.433],"to":[4.825,-3.444]},{"from":[4.825,-3.444],"to":[5.028,-3.448]},{"from":[5.028,-3.448],"to":[5.243,-3.444]},{"from":[5.243,-3.444],"to":[5.465,-3.433]},{"from":[5.465,-3.433],"to":[5.691,-3.414]},{"from":[5.691,-3.414],"to":[5.918,-3.388]},{"from":[5.918,-3.388],"to":[6.141,-3.355]},{"from":[6.141,-3.355],"to":[6.356,-3.317]},{"from":[6.356,-3.317],"to":[6.56,-3.273]},{"from":[6.56,-3.273],"to":[6.75,-3.224]},{"from":[6.75,-3.224],"to":[6.921,-3.171]},{"from":[6.921,-3.171],"to":[7.072,-3.116]},{"from":[7.072,-3.116],"to":[7.199,-3.058]},{"from":[7.199,-3.058],"to":[7.3,-3]},{"from":[7.3,-3],"to":[7.374,-2.942]},{"from":[7.419,-2.884],"to":[7.435,-2.829]},{"from":[7.422,-2.776],"to":[7.378,-2.727]},{"from":[7.307,-2.683],"to":[7.207,-2.645]},{"from":[7.082,-2.612],"to":[6.933,-2.586]},{"from":[6.763,-2.567],"to":[6.575,-2.556]},{"from":[6.372,-2.552],"to":[6.157,-2.556]},{"from":[5.935,-2.567],"to":[5.709,-2.586]},{"from":[5.482,-2.612],"to":[5.259,-2.645]},{"from":[5.044,-2.683],"to":[4.84,-2.727]},{"from":[4.65,-2.776],"to":[4.479,-2.829]},{"from":[4.328,-2.884],"to":[4.201,-2.942]},{"from":[4.1,3],"to":[4.026,2.942]},{"from":[4.026,2.942],"to":[3.981,2.884]},{"from":[3.981,2.884],"to":[3.965,2.829]},{"from":[3.965,2.829],"to":[3.978,2.776]},{"from":[3.978,2.776],"to":[4.022,2.727]},{"from":[4.022,2.727],"to":[4.093,2.683]},{"from":[4.093,2.683],"to":[4.193,2.645]},{"from":[4.193,2.645],"to":[4.318,2.612]},{"from":[4.318,2.612],"to":[4.467,2.586]},{"from":[4.467,2.586],"to":[4.637,2.567]},{"from":[4.637,2.567],"to":[4.825,2.556]},{"from":[4.825,2.556],"to":[5.028,2.552]},{"from":[5.028,2.552],"to":[5.243,2.556]},{"from":[5.243,2.556],"to":[5.465,2.567]},{"from":[5.465,2.567],"to":[5.691,2.586]},{"from":[5.691,2.586],"to":[5.918,2.612]},{"from":[5.918,2.612],"to":[6.141,2.645]},{"from":[6.141,2.645],"to":[6.356,2.683]},{"from":[6.356,2.683],"to":[6.56,2.727]},{"from":[6.56,2.727],"to":[6.75,2.776]},{"from":[6.75,2.776],"to":[6.921,2.829]},{"from":[6.921,2.829],"to":[7.072,2.884]},{"from":[7.072,2.884],"to":[7.199,2.942]},{"from":[7.199,2.942],"to":[7.3,3]},{"from":[7.3,3],"to":[7.374,3.058]},{"from":[7.419,3.116],"to":[7.435,3.171]},{"from":[7.422,3.224],"to":[7.378,3.273]},{"from":[7.307,3.317],"to":[7.207,3.355]},{"from":[7.082,3.388],"to":[6.933,3.414]},{"from":[6.763,3.433],"to":[6.575,3.444]},{"from":[6.372,3.448],"to":[6.157,3.444]},{"from":[5.935,3.433],"to":[5.709,3.414]},{"from":[5.482,3.388],"to":[5.259,3.355]},{"from":[5.044,3.317],"to":[4.84,3.273]},{"from":[4.65,3.224],"to":[4.479,3.171]},{"from":[4.328,3.116],"to":[4.201,3.058]},{"from":[5.796,2.597],"to":[5.833,2.472]},{"from":[5.833,2.472],"to":[5.871,2.348]},{"from":[5.871,2.348],"to":[5.909,2.227]},{"from":[5.909,2.227],"to":[5.947,2.11]},{"from":[5.947,2.11],"to":[5.985,1.995]},{"from":[5.985,1.995],"to":[6.022,1.885]},{"from":[6.022,1.885],"to":[6.06,1.78]},{"from":[6.06,1.78],"to":[6.098,1.681]},{"from":[6.098,1.681],"to":[6.136,1.589]},{"from":[6.136,1.589],"to":[6.173,1.506]},{"from":[6.173,1.506],"to":[6.211,1.434]},{"from":[6.211,1.434],"to":[6.249,1.375]},{"from":[6.249,1.375],"to":[6.287,1.331]},{"from":[6.287,1.331],"to":[6.324,1.305]},{"from":[6.324,1.305],"to":[6.362,1.298]},{"from":[6.362,1.298],"to":[6.4,1.313]},{"from":[6.4,1.313],"to":[6.438,1.348]},{"from":[6.476,1.405],"to":[6.513,1.482]},{"from":[6.551,1.576],"to":[6.589,1.686]},{"from":[6.627,1.808],"to":[6.664,1.941]},{"from":[6.702,2.083],"to":[6.74,2.233]},{"from":[6.778,2.388],"to":[6.815,2.549]},{"from":[6.853,2.714],"to":[6.891,2.882]},{"from":[6.929,3.053],"to":[6.967,3.227]},{"from":[5.796,-3.403],"to":[5.833,-3.227]},{"from":[5.833,-3.227],"to":[5.871,-3.053]},{"from":[5.871,-3.053],"to":[5.909,-2.882]},{"from":[5.909,-2.882],"to":[5.947,-2.714]},{"from":[5.947,-2.714],"to":[5.985,-2.549]},{"from":[5.985,-2.549],"to":[6.022,-2.388]},{"from":[6.022,-2.388],"to":[6.06,-2.233]},{"from":[6.06,-2.233],"to":[6.098,-2.083]},{"from":[6.098,-2.083],"to":[6.136,-1.941]},{"from":[6.136,-1.941],"to":[6.173,-1.808]},{"from":[6.173,-1.808],"to":[6.211,-1.686]},{"from":[6.211,-1.686],"to":[6.249,-1.576]},{"from":[6.249,-1.576],"to":[6.287,-1.482]},{"from":[6.287,-1.482],"to":[6.324,-1.405]},{"from":[6.324,-1.405],"to":[6.362,-1.348]},{"from":[6.362,-1.348],"to":[6.4,-1.313]},{"from":[6.4,-1.313],"to":[6.438,-1.298]},{"from":[6.476,-1.305],"to":[6.513,-1.331]},{"from":[6.551,-1.375],"to":[6.589,-1.434]},{"from":[6.627,-1.506],"to":[6.664,-1.589]},{"from":[6.702,-1.681],"to":[6.74,-1.78]},{"from":[6.778,-1.885],"to":[6.815,-1.995]},{"from":[6.853,-2.11],"to":[6.891,-2.227]},{"from":[6.929,-2.348],"to":[6.967,-2.472]},{"from":[11.4,0],"to":[13.119,-2.772]},{"from":[11.4,0],"to":[9.681,-3.115]},{"from":[11.4,0],"to":[13.119,3.115]},{"from":[11.4,0],"to":[9.681,2.772]},{"from":[9.8,-3],"to":[9.726,-3.058]},{"from":[9.726,-3.058],"to":[9.681,-3.116]},{"from":[9.681,-3.116],"to":[9.665,-3.171]},{"from":[9.665,-3.171],"to":[9.678,-3.224]},{"from":[9.678,-3.224],"to":[9.722,-3.273]},{"from":[9.722,-3.273],"to":[9.793,-3.317]},{"from":[9.793,-3.317],"to":[9.893,-3.355]},{"from":[9.893,-3.355],"to":[10.018,-3.388]},{"from":[10.018,-3.388],"to":[10.167,-3.414]},{"from":[10.167,-3.414],"to":[10.337,-3.433]},{"from":[10.337,-3.433],"to":[10.525,-3.444]},{"from":[10.525,-3.444],"to":[10.728,-3.448]},{"from":[10.728,-3.448],"to":[10.943,-3.444]},{"from":[10.943,-3.444],"to":[11.165,-3.433]},{"from":[11.165,-3.433],"to":[11.391,-3.414]},{"from":[11.391,-3.414],"to":[11.618,-3.388]},{"from":[11.618,-3.388],"to":[11.841,-3.355]},{"from":[11.841,-3.355],"to":[12.056,-3.317]},{"from":[12.056,-3.317],"to":[12.26,-3.273]},{"from":[12.26,-3.273],"to":[12.45,-3.224]},{"from":[12.45,-3.224],"to":[12.621,-3.171]},{"from":[12.621,-3.171],"to":[12.772,-3.116]},{"from":[12.772,-3.116],"to":[12.899,-3.058]},{"from":[12.899,-3.058],"to":[13,-3]},{"from":[13,-3],"to":[13.074,-2.942]},{"from":[13.119,-2.884],"to":[13.135,-2.829]},{"from":[13.122,-2.776],"to":[13.078,-2.727]},{"from":[13.007,-2.683],"to":[12.907,-2.645]},{"from":[12.782,-2.612],"to":[12.633,-2.586]},{"from":[12.463,-2.567],"to":[12.275,-2.556]},{"from":[12.072,-2.552],"to":[11.857,-2.556]},{"from":[11.635,-2.567],"to":[11.409,-2.586]},{"from":[11.182,-2.612],"to":[10.959,-2.645]},{"from":[10.744,-2.683],"to":[10.54,-2.727]},{"from":[10.35,-2.776],"to":[10.179,-2.829]},{"from":[10.028,-2.884],"to":[9.901,-2.942]},{"from":[9.8,3],"to":[9.726,2.942]},{"from":[9.726,2.942],"to":[9.681,2.884]},{"from":[9.681,2.884],"to":[9.665,2.829]},{"from":[9.665,2.829],"to":[9.678,2.776]},{"from":[9.678,2.776],"to":[9.722,2.727]},{"from":[9.722,2.727],"to":[9.793,2.683]},{"from":[9.793,2.683],"to":[9.893,2.645]},{"from":[9.893,2.645],"to":[10.018,2.612]},{"from":[10.018,2.612],"to":[10.167,2.586]},{"from":[10.167,2.586],"to":[10.337,2.567]},{"from":[10.337,2.567],"to":[10.525,2.556]},{"from":[10.525,2.556],"to":[10.728,2.552]},{"from":[10.728,2.552],"to":[10.943,2.556]},{"from":[10.943,2.556],"to":[11.165,2.567]},{"from":[11.165,2.567],"to":[11.391,2.586]},{"from":[11.391,2.586],"to":[11.618,2.612]},{"from":[11.618,2.612],"to":[11.841,2.645]},{"from":[11.841,2.645],"to":[12.056,2.683]},{"from":[12.056,2.683],"to":[12.26,2.727]},{"from":[12.26,2.727],"to":[12.45,2.776]},{"from":[12.45,2.776],"to":[12.621,2.829]},{"from":[12.621,2.829],"to":[12.772,2.884]},{"from":[12.772,2.884],"to":[12.899,2.942]},{"from":[12.899,2.942],"to":[13,3]},{"from":[13,3],"to":[13.074,3.058]},{"from":[13.119,3.116],"to":[13.135,3.171]},{"from":[13.122,3.224],"to":[13.078,3.273]},{"from":[13.007,3.317],"to":[12.907,3.355]},{"from":[12.782,3.388],"to":[12.633,3.414]},{"from":[12.463,3.433],"to":[12.275,3.444]},{"from":[12.072,3.448],"to":[11.857,3.444]},{"from":[11.635,3.433],"to":[11.409,3.414]},{"from":[11.182,3.388],"to":[10.959,3.355]},{"from":[10.744,3.317],"to":[10.54,3.273]},{"from":[10.35,3.224],"to":[10.179,3.171]},{"from":[10.028,3.116],"to":[9.901,3.058]},{"from":[10.177,-3.415],"to":[10.349,-3.14]},{"from":[10.349,-3.14],"to":[10.513,-2.88]},{"from":[10.513,-2.88],"to":[10.668,-2.637]},{"from":[10.668,-2.637],"to":[10.814,-2.409]},{"from":[10.814,-2.409],"to":[10.952,-2.198]},{"from":[10.952,-2.198],"to":[11.081,-2.003]},{"from":[11.081,-2.003],"to":[11.202,-1.824]},{"from":[11.202,-1.824],"to":[11.314,-1.661]},{"from":[11.314,-1.661],"to":[11.417,-1.514]},{"from":[11.417,-1.514],"to":[11.512,-1.383]},{"from":[11.512,-1.383],"to":[11.598,-1.269]},{"from":[11.598,-1.269],"to":[11.676,-1.17]},{"from":[11.676,-1.17],"to":[11.745,-1.088]},{"from":[11.745,-1.088],"to":[11.805,-1.022]},{"from":[11.805,-1.022],"to":[11.857,-0.972]},{"from":[11.857,-0.972],"to":[11.9,-0.938]},{"from":[11.9,-0.938],"to":[11.935,-0.92]},{"from":[11.961,-0.918],"to":[11.978,-0.932]},{"from":[11.987,-0.963],"to":[11.987,-1.009]},{"from":[11.979,-1.072],"to":[11.962,-1.151]},{"from":[11.936,-1.245],"to":[11.902,-1.356]},{"from":[11.86,-1.484],"to":[11.808,-1.627]},{"from":[11.748,-1.786],"to":[11.68,-1.962]},{"from":[11.603,-2.153],"to":[11.517,-2.361]}],"points":[],"texts":[{"at":[0,-4.6],"text":"Ellipse","anchor":"middle"},{"at":[5.7,-4.6],"text":"Hyperbola","anchor":"middle"},{"at":[11.4,-4.6],"text":"Parabola","anchor":"middle"}]}
{{< /apfigure >}}

Conic sections can also be described by a set of points in the coordinate plane. Later in this chapter, we will see that the graph of any quadratic equation in two variables is a conic section. The signs of the equations and the coefficients of the variable terms determine the shape. This section focuses on the four variations of the standard form of the equation for the ellipse. An **ellipse** is the set of all points $(x,y)$ in a plane such that the sum of their distances from two fixed points is a constant. Each fixed point is called a **focus** (plural: **foci**).

We can draw an ellipse using a piece of cardboard, two thumbtacks, a pencil, and string. Place the thumbtacks in the cardboard to form the foci of the ellipse. Cut a piece of string longer than the distance between the two thumbtacks (the length of the string represents the constant in the definition). Tack each end of the string to the cardboard, and trace a curve with a pencil held taut against the string. The result is an ellipse.

{{< apfigure kind="figure" >}}
{"ariaLabel":"An ellipse traced by a taut string looped around two thumbtacks pushed into the paper at the foci. Two segments run from a point on the curve to each thumbtack, showing the string held taut as it moves around to trace the ellipse.","unit":50,"polygons":[{"points":[[4,0],[3.998,0.084],[3.99,0.167],[3.978,0.251],[3.961,0.334],[3.939,0.417],[3.913,0.499],[3.881,0.581],[3.845,0.662],[3.804,0.742],[3.759,0.821],[3.709,0.899],[3.654,0.976],[3.595,1.052],[3.532,1.127],[3.464,1.2],[3.392,1.272],[3.316,1.342],[3.236,1.411],[3.152,1.478],[3.064,1.543],[2.973,1.606],[2.877,1.667],[2.779,1.726],[2.677,1.784],[2.571,1.839],[2.463,1.891],[2.351,1.942],[2.237,1.99],[2.12,2.035],[2,2.078],[1.878,2.119],[1.753,2.157],[1.627,2.193],[1.498,2.225],[1.368,2.255],[1.236,2.283],[1.103,2.307],[0.968,2.329],[0.832,2.348],[0.695,2.364],[0.557,2.377],[0.418,2.387],[0.279,2.394],[0.14,2.399],[0,2.4],[-0.14,2.399],[-0.279,2.394],[-0.418,2.387],[-0.557,2.377],[-0.695,2.364],[-0.832,2.348],[-0.968,2.329],[-1.103,2.307],[-1.236,2.283],[-1.368,2.255],[-1.498,2.225],[-1.627,2.193],[-1.753,2.157],[-1.878,2.119],[-2,2.078],[-2.12,2.035],[-2.237,1.99],[-2.351,1.942],[-2.463,1.891],[-2.571,1.839],[-2.677,1.784],[-2.779,1.726],[-2.877,1.667],[-2.973,1.606],[-3.064,1.543],[-3.152,1.478],[-3.236,1.411],[-3.316,1.342],[-3.392,1.272],[-3.464,1.2],[-3.532,1.127],[-3.595,1.052],[-3.654,0.976],[-3.709,0.899],[-3.759,0.821],[-3.804,0.742],[-3.845,0.662],[-3.881,0.581],[-3.913,0.499],[-3.939,0.417],[-3.961,0.334],[-3.978,0.251],[-3.99,0.167],[-3.998,0.084],[-4,0],[-3.998,-0.084],[-3.99,-0.167],[-3.978,-0.251],[-3.961,-0.334],[-3.939,-0.417],[-3.913,-0.499],[-3.881,-0.581],[-3.845,-0.662],[-3.804,-0.742],[-3.759,-0.821],[-3.709,-0.899],[-3.654,-0.976],[-3.595,-1.052],[-3.532,-1.127],[-3.464,-1.2],[-3.392,-1.272],[-3.316,-1.342],[-3.236,-1.411],[-3.152,-1.478],[-3.064,-1.543],[-2.973,-1.606],[-2.877,-1.667],[-2.779,-1.726],[-2.677,-1.784],[-2.571,-1.839],[-2.463,-1.891],[-2.351,-1.942],[-2.237,-1.99],[-2.12,-2.035],[-2,-2.078],[-1.878,-2.119],[-1.753,-2.157],[-1.627,-2.193],[-1.498,-2.225],[-1.368,-2.255],[-1.236,-2.283],[-1.103,-2.307],[-0.968,-2.329],[-0.832,-2.348],[-0.695,-2.364],[-0.557,-2.377],[-0.418,-2.387],[-0.279,-2.394],[-0.14,-2.399],[0,-2.4],[0.14,-2.399],[0.279,-2.394],[0.418,-2.387],[0.557,-2.377],[0.695,-2.364],[0.832,-2.348],[0.968,-2.329],[1.103,-2.307],[1.236,-2.283],[1.368,-2.255],[1.498,-2.225],[1.627,-2.193],[1.753,-2.157],[1.878,-2.119],[2,-2.078],[2.12,-2.035],[2.237,-1.99],[2.351,-1.942],[2.463,-1.891],[2.571,-1.839],[2.677,-1.784],[2.779,-1.726],[2.877,-1.667],[2.973,-1.606],[3.064,-1.543],[3.152,-1.478],[3.236,-1.411],[3.316,-1.342],[3.392,-1.272],[3.464,-1.2],[3.532,-1.127],[3.595,-1.052],[3.654,-0.976],[3.709,-0.899],[3.759,-0.821],[3.804,-0.742],[3.845,-0.662],[3.881,-0.581],[3.913,-0.499],[3.939,-0.417],[3.961,-0.334],[3.978,-0.251],[3.99,-0.167],[3.998,-0.084]]}],"points":[{"at":[-3.2,0]},{"at":[3.2,0]},{"at":[1.69,2.175],"label":"Pencil"}],"texts":[{"at":[-3.2,-0.4],"text":"Focus","anchor":"middle"},{"at":[3.2,-0.4],"text":"Focus","anchor":"middle"}],"segments":[{"from":[-3.2,0],"to":[1.69,2.175]},{"from":[3.2,0],"to":[1.69,2.175]},{"from":[-3.2,-0.9],"to":[3.2,-0.9],"arrow":"both","label":"Foci","labelSide":"right"}]}
{{< /apfigure >}}

Every ellipse has two axes of symmetry. The longer axis is called the **major axis**, and the shorter axis is called the **minor axis**. Each endpoint of the major axis is the **vertex** of the ellipse (plural: **vertices**), and each endpoint of the minor axis is a **co-vertex** of the ellipse. The **center of an ellipse** is the midpoint of both the major and minor axes. The axes are perpendicular at the center. The foci always lie on the major axis, and the sum of the distances from the foci to any point on the ellipse (the constant sum) is greater than the distance between the foci. See the figure below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal ellipse centered at the origin with its major axis on the x-axis and minor axis on the y-axis. The vertices sit at the ends of the major axis, the co-vertices at the ends of the minor axis, the two foci lie inside the ellipse on the major axis, and the center is the origin.","xMin":-9,"xMax":9,"yMin":-6,"yMax":6,"tickLabels":false,"circles":[{"at":[0,0],"rx":5,"ry":4}],"points":[{"at":[5,0],"label":"Vertex","labelSide":"ne"},{"at":[-5,0],"label":"Vertex","labelSide":"nw"},{"at":[0,4],"label":"Co-vertex","labelSide":"ne"},{"at":[0,-4],"label":"Co-vertex","labelSide":"se"},{"at":[3,0],"label":"Focus","labelSide":"s","labelNudge":[0,14]},{"at":[-3,0],"label":"Focus","labelSide":"s","labelNudge":[0,14]},{"at":[0,0],"label":"Center","labelSide":"sw"}],"texts":[{"at":[2.2,0.35],"text":"Major Axis","anchor":"middle"},{"at":[0.3,2],"text":"Minor Axis","anchor":"start"}]}
{{< /apfigure >}}

In this section, we restrict ellipses to those that are positioned vertically or horizontally in the coordinate plane. That is, the axes will either lie on or be parallel to the $x$- and $y$-axes. Later in the chapter, we will see ellipses that are rotated in the coordinate plane.

To work with horizontal and vertical ellipses in the coordinate plane, we consider two cases: those that are centered at the origin and those that are centered at a point other than the origin. First we will learn to derive the equations of ellipses, and then we will learn how to write the equations of ellipses in standard form. Later we will use what we learn to draw the graphs.

### Deriving the Equation of an Ellipse Centered at the Origin

To derive the equation of an ellipse centered at the origin, we begin with the foci $(-c,0)$ and $(c,0)$. The ellipse is the set of all points $(x,y)$ such that the sum of the distances from $(x,y)$ to the foci is constant, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal ellipse centered at the origin with vertices at (negative a, 0) and (a, 0) and foci at (negative c, 0) and (c, 0). Segments of length d1 and d2 connect a point (x, y) on the ellipse to the two foci.","xMin":-8,"xMax":8,"yMin":-4,"yMax":4,"tickLabels":false,"circles":[{"at":[0,0],"rx":5,"ry":3}],"points":[{"at":[5,0],"label":"(a, 0)","labelSide":"ne"},{"at":[-5,0],"label":"(−a, 0)","labelSide":"nw"},{"at":[4,0],"label":"(c, 0)","labelSide":"sw"},{"at":[-4,0],"label":"(−c, 0)","labelSide":"se"},{"at":[2.868,2.457],"label":"(x, y)","labelSide":"ne"}],"segments":[{"from":[-4,0],"to":[2.868,2.457],"label":"d₁","labelAt":0.35},{"from":[4,0],"to":[2.868,2.457],"label":"d₂","labelAt":0.4}]}
{{< /apfigure >}}

If $(a,0)$ is a vertex of the ellipse, the distance from $(-c,0)$ to $(a,0)$ is $a-(-c)=a+c$. The distance from $(c,0)$ to $(a,0)$ is $a-c$. The sum of the distances from the foci to the vertex is

$$(a+c)+(a-c)=2a$$

If $(x,y)$ is a point on the ellipse, then we can define the following variables:

$$
\begin{array}{lrcl}
& d_1 &=& \text{the distance from }(-c,0)\text{ to }(x,y) \\[4pt]
& d_2 &=& \text{the distance from }(c,0)\text{ to }(x,y)
\end{array}
$$

By the definition of an ellipse, $d_1+d_2$ is constant for any point $(x,y)$ on the ellipse. We know that the sum of these distances is $2a$ for the vertex $(a,0)$. It follows that $d_1+d_2=2a$ for any point on the ellipse. We will begin the derivation by applying the distance formula. The rest of the derivation is algebraic.

$$
\begin{array}{lrcl}
\text{Distance formula.} & d_1+d_2 &=& \sqrt{(x-(-c))^2+(y-0)^2}+\sqrt{(x-c)^2+(y-0)^2}=2a \\[4pt]
\text{Simplify expressions.} & \sqrt{(x+c)^2+y^2}+\sqrt{(x-c)^2+y^2} &=& 2a \\[4pt]
\text{Move radical to opposite side.} & \sqrt{(x+c)^2+y^2} &=& 2a-\sqrt{(x-c)^2+y^2} \\[4pt]
\text{Square both sides.} & (x+c)^2+y^2 &=& \left[2a-\sqrt{(x-c)^2+y^2}\right]^2 \\[4pt]
\text{Expand the squares.} & x^2+2cx+c^2+y^2 &=& 4a^2-4a\sqrt{(x-c)^2+y^2}+(x-c)^2+y^2 \\[4pt]
\text{Expand remaining squares.} & x^2+2cx+c^2+y^2 &=& 4a^2-4a\sqrt{(x-c)^2+y^2}+x^2-2cx+c^2+y^2 \\[4pt]
\text{Combine like terms.} & 2cx &=& 4a^2-4a\sqrt{(x-c)^2+y^2}-2cx \\[4pt]
\text{Isolate the radical.} & 4cx-4a^2 &=& -4a\sqrt{(x-c)^2+y^2} \\[4pt]
\text{Divide by 4.} & cx-a^2 &=& -a\sqrt{(x-c)^2+y^2} \\[4pt]
\text{Square both sides.} & \left[cx-a^2\right]^2 &=& a^2\left[\sqrt{(x-c)^2+y^2}\right]^2 \\[4pt]
\text{Expand the squares.} & c^2x^2-2a^2cx+a^4 &=& a^2(x^2-2cx+c^2+y^2) \\[4pt]
\text{Distribute }a^2. & c^2x^2-2a^2cx+a^4 &=& a^2x^2-2a^2cx+a^2c^2+a^2y^2 \\[4pt]
\text{Rewrite.} & a^2x^2-c^2x^2+a^2y^2 &=& a^4-a^2c^2 \\[4pt]
\text{Factor common terms.} & x^2(a^2-c^2)+a^2y^2 &=& a^2(a^2-c^2) \\[4pt]
\text{Set }b^2=a^2-c^2. & x^2b^2+a^2y^2 &=& a^2b^2 \\[4pt]
\text{Divide both sides by }a^2b^2. & \tfrac{x^2b^2}{a^2b^2}+\tfrac{a^2y^2}{a^2b^2} &=& \tfrac{a^2b^2}{a^2b^2} \\[4pt]
\text{Simplify.} & \tfrac{x^2}{a^2}+\tfrac{y^2}{b^2} &=& 1
\end{array}
$$

Thus, the standard equation of an ellipse is $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$. This equation defines an ellipse centered at the origin. If $a>b$, the ellipse is stretched further in the horizontal direction, and if $b>a$, the ellipse is stretched further in the vertical direction.

### Writing Equations of Ellipses Centered at the Origin in Standard Form

Standard forms of equations tell us about key features of graphs. Take a moment to recall some of the standard forms of equations we've worked with in the past: linear, quadratic, cubic, exponential, logarithmic, and so on. By learning to interpret standard forms of equations, we are bridging the relationship between algebraic and geometric representations of mathematical phenomena.

The key features of the ellipse are its center, vertices, co-vertices, foci, and lengths and positions of the major and minor axes. Just as with other equations, we can identify all of these features just by looking at the standard form of the equation. There are four variations of the standard form of the ellipse. These variations are categorized first by the location of the center (the origin or not the origin), and then by the position (horizontal or vertical). Each is presented along with a description of how the parts of the equation relate to the graph. Interpreting these parts allows us to form a mental picture of the ellipse.

{{< callout type="info" >}}
  **Standard Forms of the Equation of an Ellipse with Center $(0,0)$.**

  The standard form of the equation of an ellipse with center $(0,0)$ and major axis on the $x$-axis is

  $$\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$$

  where

  - $a>b$
  - the length of the major axis is $2a$
  - the coordinates of the vertices are $(\pm a,0)$
  - the length of the minor axis is $2b$
  - the coordinates of the co-vertices are $(0,\pm b)$
  - the coordinates of the foci are $(\pm c,0)$, where $c^2=a^2-b^2$. See (a) below.

  The standard form of the equation of an ellipse with center $(0,0)$ and major axis on the $y$-axis is

  $$\tfrac{x^2}{b^2}+\tfrac{y^2}{a^2}=1$$

  where

  - $a>b$
  - the length of the major axis is $2a$
  - the coordinates of the vertices are $(0,\pm a)$
  - the length of the minor axis is $2b$
  - the coordinates of the co-vertices are $(\pm b,0)$
  - the coordinates of the foci are $(0,\pm c)$, where $c^2=a^2-b^2$. See (b) below.

  Note that the vertices, co-vertices, and foci are related by the equation $c^2=a^2-b^2$. When we are given the coordinates of the foci and vertices of an ellipse, we can use this relationship to find the equation of the ellipse in standard form.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal ellipse centered at the origin with major axis on the x-axis: vertices at (−a, 0) and (a, 0), co-vertices at (0, −b) and (0, b), and foci at (−c, 0) and (c, 0).","xMin":-8,"xMax":8,"yMin":-4,"yMax":4,"tickLabels":false,"circles":[{"at":[0,0],"rx":5,"ry":3}],"points":[{"at":[5,0],"label":"(a, 0)","labelSide":"ne"},{"at":[-5,0],"label":"(−a, 0)","labelSide":"nw"},{"at":[0,3],"label":"(0, b)","labelSide":"ne"},{"at":[0,-3],"label":"(0, −b)","labelSide":"se"},{"at":[4,0],"label":"(c, 0)","labelSide":"sw"},{"at":[-4,0],"label":"(−c, 0)","labelSide":"se"}]}
{{< /apfigure >}}

*(a) Horizontal ellipse with center $(0,0)$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical ellipse centered at the origin with major axis on the y-axis: vertices at (0, −a) and (0, a), co-vertices at (−b, 0) and (b, 0), and foci at (0, −c) and (0, c).","xMin":-6,"xMax":6,"yMin":-7,"yMax":7,"tickLabels":false,"circles":[{"at":[0,0],"rx":4,"ry":5}],"points":[{"at":[0,5],"label":"(0, a)","labelSide":"ne"},{"at":[0,-5],"label":"(0, −a)","labelSide":"se"},{"at":[4,0],"label":"(b, 0)","labelSide":"ne"},{"at":[-4,0],"label":"(−b, 0)","labelSide":"nw"},{"at":[0,3],"label":"(0, c)","labelSide":"e","labelNudge":[10,0]},{"at":[0,-3],"label":"(0, −c)","labelSide":"e","labelNudge":[10,0]}]}
{{< /apfigure >}}

*(b) Vertical ellipse with center $(0,0)$.*

{{< callout type="info" >}}
  **How To:** given the vertices and foci of an ellipse centered at the origin, write its equation in standard form.

  1. Determine whether the major axis lies on the $x$- or $y$-axis.
     - If the given coordinates of the vertices and foci have the form $(\pm a,0)$ and $(\pm c,0)$ respectively, then the major axis is the $x$-axis. Use the standard form $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$.
     - If the given coordinates of the vertices and foci have the form $(0,\pm a)$ and $(0,\pm c)$, respectively, then the major axis is the $y$-axis. Use the standard form $\tfrac{x^2}{b^2}+\tfrac{y^2}{a^2}=1$.
  2. Use the equation $c^2=a^2-b^2$, along with the given coordinates of the vertices and foci, to solve for $b^2$.
  3. Substitute the values for $a^2$ and $b^2$ into the standard form of the equation determined in Step 1.
{{< /callout >}}

**Example.** What is the standard form equation of the ellipse that has vertices $(\pm8,0)$ and foci $(\pm5,0)$?

**Solution.** The foci are on the $x$-axis, so the major axis is the $x$-axis. Thus, the equation will have the form

$$\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$$

The vertices are $(\pm8,0)$, so $a=8$ and $a^2=64$.

The foci are $(\pm5,0)$, so $c=5$ and $c^2=25$.

We know that the vertices and foci are related by the equation $c^2=a^2-b^2$. Solving for $b^2$, we have:

$$
\begin{array}{lrcl}
& c^2 &=& a^2-b^2 \\[4pt]
\text{Substitute for }c^2\text{ and }a^2. & 25 &=& 64-b^2 \\[4pt]
\text{Solve for }b^2. & b^2 &=& 39
\end{array}
$$

Now we need only substitute $a^2=64$ and $b^2=39$ into the standard form of the equation. The equation of the ellipse is $\tfrac{x^2}{64}+\tfrac{y^2}{39}=1$.

{{< fillin
  question="What is the standard form equation of the ellipse that has vertices $(0,\pm4)$ and foci $(0,\pm\sqrt{15})$?"
  answer="x^2+\frac{y^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$x^2+\tfrac{y^2}{16}=1$"
  hint="The foci lie on the $y$-axis, so use $\tfrac{x^2}{b^2}+\tfrac{y^2}{a^2}=1$ with $a^2=16$ and $c^2=15$, then solve $c^2=a^2-b^2$ for $b^2$."
>}}

{{< callout type="info" >}}
  **Q&A.** *Can we write the equation of an ellipse centered at the origin given coordinates of just one focus and vertex?*

  Yes. Ellipses are symmetrical, so the coordinates of the vertices of an ellipse centered around the origin will always have the form $(\pm a,0)$ or $(0,\pm a)$. Similarly, the coordinates of the foci will always have the form $(\pm c,0)$ or $(0,\pm c)$. Knowing this, we can use $a$ and $c$ from the given points, along with the equation $c^2=a^2-b^2$, to find $b^2$.
{{< /callout >}}

### Writing Equations of Ellipses Not Centered at the Origin

Like the graphs of other equations, the graph of an ellipse can be translated. If an ellipse is translated $h$ units horizontally and $k$ units vertically, the center of the ellipse will be $(h,k)$. This translation results in the standard form of the equation we saw previously, with $x$ replaced by $(x-h)$ and $y$ replaced by $(y-k)$.

{{< callout type="info" >}}
  **Standard Forms of the Equation of an Ellipse with Center $(h,k)$.**

  The standard form of the equation of an ellipse with center $(h,k)$ and major axis parallel to the $x$-axis is

  $$\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1$$

  where

  - $a>b$
  - the length of the major axis is $2a$
  - the coordinates of the vertices are $(h\pm a,k)$
  - the length of the minor axis is $2b$
  - the coordinates of the co-vertices are $(h,k\pm b)$
  - the coordinates of the foci are $(h\pm c,k)$, where $c^2=a^2-b^2$. See (a) below.

  The standard form of the equation of an ellipse with center $(h,k)$ and major axis parallel to the $y$-axis is

  $$\tfrac{(x-h)^2}{b^2}+\tfrac{(y-k)^2}{a^2}=1$$

  where

  - $a>b$
  - the length of the major axis is $2a$
  - the coordinates of the vertices are $(h,k\pm a)$
  - the length of the minor axis is $2b$
  - the coordinates of the co-vertices are $(h\pm b,k)$
  - the coordinates of the foci are $(h,k\pm c)$, where $c^2=a^2-b^2$. See (b) below.

  Just as with ellipses centered at the origin, ellipses that are centered at a point $(h,k)$ have vertices, co-vertices, and foci that are related by the equation $c^2=a^2-b^2$. We can use this relationship along with the midpoint and distance formulas to find the equation of the ellipse in standard form when the vertices and foci are given.
{{< /callout >}}

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal ellipse centered at (h, k) with major axis parallel to the x-axis: vertices at (h−a, k) and (h+a, k), co-vertices at (h, k−b) and (h, k+b), and foci at (h−c, k) and (h+c, k).","xMin":-4,"xMax":10,"yMin":-3,"yMax":7,"tickLabels":false,"circles":[{"at":[3,2],"rx":5,"ry":4}],"points":[{"at":[3,2],"label":"(h, k)","labelSide":"n"},{"at":[8,2],"label":"(h+a, k)","labelSide":"ne"},{"at":[-2,2],"label":"(h−a, k)","labelSide":"nw"},{"at":[3,6],"label":"(h, k+b)","labelSide":"n"},{"at":[3,-2],"label":"(h, k−b)","labelSide":"s"},{"at":[6,2],"label":"(h+c, k)","labelSide":"sw"},{"at":[0,2],"label":"(h−c, k)","labelSide":"se"}]}
{{< /apfigure >}}

*(a) Horizontal ellipse with center $(h,k)$.*

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical ellipse centered at (h, k) with major axis parallel to the y-axis: vertices at (h, k−a) and (h, k+a), co-vertices at (h−b, k) and (h+b, k), and foci at (h, k−c) and (h, k+c).","xMin":-3,"xMax":7,"yMin":-4,"yMax":10,"tickLabels":false,"circles":[{"at":[2,3],"rx":4,"ry":5}],"points":[{"at":[2,3],"label":"(h, k)","labelSide":"n"},{"at":[2,8],"label":"(h, k+a)","labelSide":"n"},{"at":[2,-2],"label":"(h, k−a)","labelSide":"s"},{"at":[-2,3],"label":"(h−b, k)","labelSide":"nw"},{"at":[6,3],"label":"(h+b, k)","labelSide":"ne"},{"at":[2,6],"label":"(h, k+c)","labelSide":"se"},{"at":[2,0],"label":"(h, k−c)","labelSide":"ne"}]}
{{< /apfigure >}}

*(b) Vertical ellipse with center $(h,k)$.*

{{< callout type="info" >}}
  **How To:** given the vertices and foci of an ellipse not centered at the origin, write its equation in standard form.

  1. Determine whether the major axis is parallel to the $x$- or $y$-axis.
     - If the $y$-coordinates of the given vertices and foci are the same, then the major axis is parallel to the $x$-axis. Use the standard form $\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1$.
     - If the $x$-coordinates of the given vertices and foci are the same, then the major axis is parallel to the $y$-axis. Use the standard form $\tfrac{(x-h)^2}{b^2}+\tfrac{(y-k)^2}{a^2}=1$.
  2. Identify the center of the ellipse $(h,k)$ using the midpoint formula and the given coordinates for the vertices.
  3. Find $a^2$ by solving for the length of the major axis, $2a$, which is the distance between the given vertices.
  4. Find $c^2$ using $h$ and $k$, found in Step 2, along with the given coordinates for the foci.
  5. Solve for $b^2$ using the equation $c^2=a^2-b^2$.
  6. Substitute the values for $h,k,a^2,$ and $b^2$ into the standard form of the equation determined in Step 1.
{{< /callout >}}

**Example.** What is the standard form equation of the ellipse that has vertices $(-2,-8)$ and $(-2,2)$ and foci $(-2,-7)$ and $(-2,1)$?

**Solution.** The $x$-coordinates of the vertices and foci are the same, so the major axis is parallel to the $y$-axis. Thus, the equation of the ellipse will have the form

$$\tfrac{(x-h)^2}{b^2}+\tfrac{(y-k)^2}{a^2}=1$$

First, we identify the center, $(h,k)$. The center is halfway between the vertices, $(-2,-8)$ and $(-2,2)$. Applying the midpoint formula, we have:

$$
\begin{array}{lrcl}
& (h,k) &=& \left(\tfrac{-2+(-2)}{2},\tfrac{-8+2}{2}\right) \\[4pt]
& &=& (-2,-3)
\end{array}
$$

Next, we find $a^2$. The length of the major axis, $2a$, is bounded by the vertices. We solve for $a$ by finding the distance between the $y$-coordinates of the vertices.

$$
\begin{array}{lrcl}
& 2a &=& 2-(-8) \\[4pt]
& 2a &=& 10 \\[4pt]
& a &=& 5
\end{array}
$$

So $a^2=25$.

Now we find $c^2$. The foci are given by $(h,k\pm c)$. So, $(h,k-c)=(-2,-7)$ and $(h,k+c)=(-2,1)$. We substitute $k=-3$ using either of these points to solve for $c$.

$$
\begin{array}{lrcl}
& k+c &=& 1 \\[4pt]
& -3+c &=& 1 \\[4pt]
& c &=& 4
\end{array}
$$

So $c^2=16$.

Next, we solve for $b^2$ using the equation $c^2=a^2-b^2$.

$$
\begin{array}{lrcl}
& c^2 &=& a^2-b^2 \\[4pt]
& 16 &=& 25-b^2 \\[4pt]
& b^2 &=& 9
\end{array}
$$

Finally, we substitute the values found for $h,k,a^2,$ and $b^2$ into the standard form equation for an ellipse:

$$\tfrac{(x+2)^2}{9}+\tfrac{(y+3)^2}{25}=1$$

{{< fillin
  question="What is the standard form equation of the ellipse that has vertices $(-3,3)$ and $(5,3)$ and foci $(1-2\sqrt{3},3)$ and $(1+2\sqrt{3},3)$?"
  answer="\frac{(x-1)^2}{16}+\frac{(y-3)^2}{4}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x-1)^2}{16}+\tfrac{(y-3)^2}{4}=1$"
  hint="The $y$-coordinates of the vertices and foci match, so the major axis is horizontal; find the center by the midpoint formula, $a$ from the distance to a vertex, $c$ from the distance to a focus, then solve $c^2=a^2-b^2$."
>}}

### Graphing Ellipses Centered at the Origin

Just as we can write the equation for an ellipse given its graph, we can graph an ellipse given its equation. To graph ellipses centered at the origin, we use the standard form $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1,\ a>b$ for horizontal ellipses and $\tfrac{x^2}{b^2}+\tfrac{y^2}{a^2}=1,\ a>b$ for vertical ellipses.

{{< callout type="info" >}}
  **How To:** given the standard form of an equation for an ellipse centered at $(0,0)$, sketch the graph.

  1. Use the standard forms of the equations of an ellipse to determine the major axis, vertices, co-vertices, and foci.
     - If the equation is in the form $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$, where $a>b$, then
       - the major axis is the $x$-axis
       - the coordinates of the vertices are $(\pm a,0)$
       - the coordinates of the co-vertices are $(0,\pm b)$
       - the coordinates of the foci are $(\pm c,0)$
     - If the equation is in the form $\tfrac{x^2}{b^2}+\tfrac{y^2}{a^2}=1$, where $a>b$, then
       - the major axis is the $y$-axis
       - the coordinates of the vertices are $(0,\pm a)$
       - the coordinates of the co-vertices are $(\pm b,0)$
       - the coordinates of the foci are $(0,\pm c)$
  2. Solve for $c$ using the equation $c^2=a^2-b^2$.
  3. Plot the center, vertices, co-vertices, and foci in the coordinate plane, and draw a smooth curve to form the ellipse.
{{< /callout >}}

**Example.** Graph the ellipse given by the equation $\tfrac{x^2}{9}+\tfrac{y^2}{25}=1$. Identify and label the center, vertices, co-vertices, and foci.

**Solution.** First, we determine the position of the major axis. Because $25>9$, the major axis is on the $y$-axis. Therefore, the equation is in the form $\tfrac{x^2}{b^2}+\tfrac{y^2}{a^2}=1$, where $b^2=9$ and $a^2=25$. It follows that:

- the center of the ellipse is $(0,0)$
- the coordinates of the vertices are $(0,\pm a)=(0,\pm\sqrt{25})=(0,\pm5)$
- the coordinates of the co-vertices are $(\pm b,0)=(\pm\sqrt{9},0)=(\pm3,0)$
- the coordinates of the foci are $(0,\pm c)$, where $c^2=a^2-b^2$. Solving for $c$, we have:

$$
\begin{array}{lrcl}
& c &=& \pm\sqrt{a^2-b^2} \\[4pt]
& &=& \pm\sqrt{25-9} \\[4pt]
& &=& \pm\sqrt{16} \\[4pt]
& &=& \pm4
\end{array}
$$

Therefore, the coordinates of the foci are $(0,\pm4)$.

Next, we plot and label the center, vertices, co-vertices, and foci, and draw a smooth curve to form the ellipse.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical ellipse centered at the origin with vertices at (0, 5) and (0, -5), co-vertices at (3, 0) and (-3, 0), and foci at (0, 4) and (0, -4).","xMin":-6,"xMax":6,"yMin":-7,"yMax":7,"tickLabels":true,"circles":[{"at":[0,0],"rx":3,"ry":5}],"points":[{"at":[0,5],"label":"(0, 5)","labelSide":"ne"},{"at":[0,-5],"label":"(0, −5)","labelSide":"se"},{"at":[3,0],"label":"(3, 0)","labelSide":"ne"},{"at":[-3,0],"label":"(−3, 0)","labelSide":"nw"},{"at":[0,4]},{"at":[0,-4]}],"texts":[{"at":[2.3,4.2],"text":"(0, 4)","anchor":"start"},{"at":[2.3,-3.8],"text":"(0, −4)","anchor":"start"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph the ellipse given by the equation $\tfrac{x^2}{36}+\tfrac{y^2}{4}=1$. Enter the coordinates of the two vertices, separated by a comma."
  answer="(6,0),(-6,0)"
  answerMode="unordered"
  answerDisplay="$(6,0)$ and $(-6,0)$"
  hint="Since $36>4$, the major axis is the $x$-axis with $a^2=36$, so the vertices are $(\pm a,0)$."
>}}

{{< fillin
  question="For the same ellipse $\tfrac{x^2}{36}+\tfrac{y^2}{4}=1$, enter the coordinates of the two foci, separated by a comma."
  answer="(4\sqrt{2},0),(-4\sqrt{2},0)"
  answerMode="unordered"
  answerDisplay="$(4\sqrt{2},0)$ and $(-4\sqrt{2},0)$"
  hint="Solve $c^2=a^2-b^2=36-4$ and place the foci at $(\pm c,0)$."
>}}

**Example.** Graph the ellipse given by the equation $4x^2+25y^2=100$. Rewrite the equation in standard form. Then identify and label the center, vertices, co-vertices, and foci.

**Solution.** First, use algebra to rewrite the equation in standard form.

$$
\begin{array}{lrcl}
& 4x^2+25y^2 &=& 100 \\[4pt]
& \tfrac{4x^2}{100}+\tfrac{25y^2}{100} &=& \tfrac{100}{100} \\[4pt]
& \tfrac{x^2}{25}+\tfrac{y^2}{4} &=& 1
\end{array}
$$

Next, we determine the position of the major axis. Because $25>4$, the major axis is on the $x$-axis. Therefore, the equation is in the form $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$, where $a^2=25$ and $b^2=4$. It follows that:

- the center of the ellipse is $(0,0)$
- the coordinates of the vertices are $(\pm a,0)=(\pm\sqrt{25},0)=(\pm5,0)$
- the coordinates of the co-vertices are $(0,\pm b)=(0,\pm\sqrt{4})=(0,\pm2)$
- the coordinates of the foci are $(\pm c,0)$, where $c^2=a^2-b^2$. Solving for $c$, we have:

$$
\begin{array}{lrcl}
& c &=& \pm\sqrt{a^2-b^2} \\[4pt]
& &=& \pm\sqrt{25-4} \\[4pt]
& &=& \pm\sqrt{21}
\end{array}
$$

Therefore the coordinates of the foci are $(\pm\sqrt{21},0)$.

Next, we plot and label the center, vertices, co-vertices, and foci, and draw a smooth curve to form the ellipse.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal ellipse centered at the origin with vertices at (5, 0) and (-5, 0), co-vertices at (0, 2) and (0, -2), and foci at the square root of 21 and its opposite on the x-axis.","xMin":-6,"xMax":6,"yMin":-5,"yMax":5,"tickLabels":true,"circles":[{"at":[0,0],"rx":5,"ry":2}],"points":[{"at":[5,0]},{"at":[-5,0]},{"at":[0,2]},{"at":[0,-2]},{"at":[4.583,0]},{"at":[-4.583,0]}],"texts":[{"at":[5,2.7],"text":"(5, 0)","anchor":"middle"},{"at":[-5,2.7],"text":"(−5, 0)","anchor":"middle"},{"at":[0.4,2.4],"text":"(0, 2)","anchor":"start"},{"at":[0.4,-2.7],"text":"(0, −2)","anchor":"start"},{"at":[3.6,-2.7],"text":"(√21, 0)","anchor":"start"},{"at":[-3.6,-2.7],"text":"(−√21, 0)","anchor":"end"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph the ellipse given by the equation $49x^2+16y^2=784$. Rewrite it in standard form."
  answer="\frac{x^2}{16}+\frac{y^2}{49}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{16}+\tfrac{y^2}{49}=1$"
  hint="Divide both sides of $49x^2+16y^2=784$ by $784$."
>}}

{{< fillin
  question="For the same ellipse $49x^2+16y^2=784$, enter the coordinates of the two foci, separated by a comma."
  answer="(0,\sqrt{33}),(0,-\sqrt{33})"
  answerMode="unordered"
  answerDisplay="$(0,\sqrt{33})$ and $(0,-\sqrt{33})$"
  hint="In standard form, $a^2=49$ and $b^2=16$; the major axis is the $y$-axis, so the foci are $(0,\pm c)$ with $c^2=a^2-b^2$."
>}}

### Graphing Ellipses Not Centered at the Origin

When an ellipse is not centered at the origin, we can still use the standard forms to find the key features of the graph. When the ellipse is centered at some point $(h,k)$, we use the standard forms $\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1,\ a>b$ for horizontal ellipses and $\tfrac{(x-h)^2}{b^2}+\tfrac{(y-k)^2}{a^2}=1,\ a>b$ for vertical ellipses. From these standard equations, we can easily determine the center, vertices, co-vertices, foci, and positions of the major and minor axes.

{{< callout type="info" >}}
  **How To:** given the standard form of an equation for an ellipse centered at $(h,k)$, sketch the graph.

  1. Use the standard forms of the equations of an ellipse to determine the center, position of the major axis, vertices, co-vertices, and foci.
     - If the equation is in the form $\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1$, where $a>b$, then
       - the center is $(h,k)$
       - the major axis is parallel to the $x$-axis
       - the coordinates of the vertices are $(h\pm a,k)$
       - the coordinates of the co-vertices are $(h,k\pm b)$
       - the coordinates of the foci are $(h\pm c,k)$
     - If the equation is in the form $\tfrac{(x-h)^2}{b^2}+\tfrac{(y-k)^2}{a^2}=1$, where $a>b$, then
       - the center is $(h,k)$
       - the major axis is parallel to the $y$-axis
       - the coordinates of the vertices are $(h,k\pm a)$
       - the coordinates of the co-vertices are $(h\pm b,k)$
       - the coordinates of the foci are $(h,k\pm c)$
  2. Solve for $c$ using the equation $c^2=a^2-b^2$.
  3. Plot the center, vertices, co-vertices, and foci in the coordinate plane, and draw a smooth curve to form the ellipse.
{{< /callout >}}

**Example.** Graph the ellipse given by the equation $\tfrac{(x+2)^2}{4}+\tfrac{(y-5)^2}{9}=1$. Identify and label the center, vertices, co-vertices, and foci.

**Solution.** First, we determine the position of the major axis. Because $9>4$, the major axis is parallel to the $y$-axis. Therefore, the equation is in the form $\tfrac{(x-h)^2}{b^2}+\tfrac{(y-k)^2}{a^2}=1$, where $b^2=4$ and $a^2=9$. It follows that:

- the center of the ellipse is $(h,k)=(-2,5)$
- the coordinates of the vertices are $(h,k\pm a)=(-2,5\pm\sqrt{9})=(-2,5\pm3)$, or $(-2,2)$ and $(-2,8)$
- the coordinates of the co-vertices are $(h\pm b,k)=(-2\pm\sqrt{4},5)=(-2\pm2,5)$, or $(-4,5)$ and $(0,5)$
- the coordinates of the foci are $(h,k\pm c)$, where $c^2=a^2-b^2$. Solving for $c$, we have:

$$
\begin{array}{lrcl}
& c &=& \pm\sqrt{a^2-b^2} \\[4pt]
& &=& \pm\sqrt{9-4} \\[4pt]
& &=& \pm\sqrt{5}
\end{array}
$$

Therefore, the coordinates of the foci are $(-2,5-\sqrt{5})$ and $(-2,5+\sqrt{5})$.

Next, we plot and label the center, vertices, co-vertices, and foci, and draw a smooth curve to form the ellipse.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A vertical ellipse centered at (-2, 5) with vertices at (-2, 2) and (-2, 8), co-vertices at (-4, 5) and (0, 5), and foci at (-2, 5 minus the square root of 5) and (-2, 5 plus the square root of 5).","xMin":-8,"xMax":4,"yMin":0,"yMax":10,"tickLabels":true,"circles":[{"at":[-2,5],"rx":2,"ry":3}],"points":[{"at":[-2,8],"label":"(−2, 8)","labelSide":"n"},{"at":[-2,2],"label":"(−2, 2)","labelSide":"s"},{"at":[-4,5],"label":"(−4, 5)","labelSide":"w"},{"at":[0,5],"label":"(0, 5)","labelSide":"e"},{"at":[-2,7.236]},{"at":[-2,2.764]}],"texts":[{"at":[0.3,7.236],"text":"(−2, 5+√5)","anchor":"start"},{"at":[0.3,2.764],"text":"(−2, 5−√5)","anchor":"start"}]}
{{< /apfigure >}}

{{< fillin
  question="Graph the ellipse given by the equation $\tfrac{(x-4)^2}{36}+\tfrac{(y-2)^2}{20}=1$. Enter the center as an ordered pair $(x,y)$."
  answer="(4,2)"
  answerDisplay="$(4,2)$"
  hint="The center of $\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1$ is $(h,k)$."
>}}

{{< fillin
  question="For the same ellipse $\tfrac{(x-4)^2}{36}+\tfrac{(y-2)^2}{20}=1$, enter the coordinates of the two vertices, separated by a comma."
  answer="(-2,2),(10,2)"
  answerMode="unordered"
  answerDisplay="$(-2,2)$ and $(10,2)$"
  hint="Since $36>20$, the major axis is parallel to the $x$-axis with $a^2=36$, so the vertices are $(h\pm a,k)$."
>}}

**Example.** Graph the ellipse given by the equation $4x^2+9y^2-40x+36y+100=0$. Identify and label the center, vertices, co-vertices, and foci.

**Solution.** We must begin by rewriting the equation in standard form.

$$4x^2+9y^2-40x+36y+100=0$$

Group terms that contain the same variable, and move the constant to the opposite side of the equation.

$$(4x^2-40x)+(9y^2+36y)=-100$$

Factor out the coefficients of the squared terms.

$$4(x^2-10x)+9(y^2+4y)=-100$$

Complete the square twice. Remember to balance the equation by adding the same constants to each side.

$$4(x^2-10x+25)+9(y^2+4y+4)=-100+100+36$$

Rewrite as perfect squares.

$$4(x-5)^2+9(y+2)^2=36$$

Divide both sides by the constant term to place the equation in standard form.

$$\tfrac{(x-5)^2}{9}+\tfrac{(y+2)^2}{4}=1$$

Now that the equation is in standard form, we can determine the position of the major axis. Because $9>4$, the major axis is parallel to the $x$-axis. Therefore, the equation is in the form $\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1$, where $a^2=9$ and $b^2=4$. It follows that:

- the center of the ellipse is $(h,k)=(5,-2)$
- the coordinates of the vertices are $(h\pm a,k)=(5\pm\sqrt{9},-2)=(5\pm3,-2)$, or $(2,-2)$ and $(8,-2)$
- the coordinates of the co-vertices are $(h,k\pm b)=(5,-2\pm\sqrt{4})=(5,-2\pm2)$, or $(5,-4)$ and $(5,0)$
- the coordinates of the foci are $(h\pm c,k)$, where $c^2=a^2-b^2$. Solving for $c$, we have:

$$
\begin{array}{lrcl}
& c &=& \pm\sqrt{a^2-b^2} \\[4pt]
& &=& \pm\sqrt{9-4} \\[4pt]
& &=& \pm\sqrt{5}
\end{array}
$$

Therefore, the coordinates of the foci are $(5-\sqrt{5},-2)$ and $(5+\sqrt{5},-2)$.

Next we plot and label the center, vertices, co-vertices, and foci, and draw a smooth curve to form the ellipse, as shown below.

{{< apfigure kind="graph" >}}
{"ariaLabel":"A horizontal ellipse centered at (5, -2) with vertices at (2, -2) and (8, -2), co-vertices at (5, 0) and (5, -4), and foci at (5 minus the square root of 5, -2) and (5 plus the square root of 5, -2).","xMin":-1,"xMax":12,"yMin":-7,"yMax":2,"tickLabels":true,"circles":[{"at":[5,-2],"rx":3,"ry":2}],"points":[{"at":[2,-2],"label":"(2, −2)","labelSide":"w"},{"at":[8,-2],"label":"(8, −2)","labelSide":"e"},{"at":[5,0],"label":"(5, 0)","labelSide":"ne"},{"at":[5,-4],"label":"(5, −4)","labelSide":"se"},{"at":[2.764,-2]},{"at":[7.236,-2]}],"texts":[{"at":[2.764,-5.6],"text":"(5−√5, −2)","anchor":"middle"},{"at":[7.236,-5.6],"text":"(5+√5, −2)","anchor":"middle"}],"unit":45}
{{< /apfigure >}}

{{< fillin
  question="Express the equation of the ellipse $4x^2+y^2-24x+2y+21=0$ in standard form."
  answer="\frac{(x-3)^2}{4}+\frac{(y+1)^2}{16}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x-3)^2}{4}+\tfrac{(y+1)^2}{16}=1$"
  hint="Group the $x$- and $y$-terms, complete the square for each, and divide by the resulting constant."
>}}

{{< fillin
  question="For the same ellipse $4x^2+y^2-24x+2y+21=0$, enter its center as an ordered pair $(x,y)$."
  answer="(3,-1)"
  answerDisplay="$(3,-1)$"
  hint="Once the equation is in standard form $\tfrac{(x-h)^2}{b^2}+\tfrac{(y-k)^2}{a^2}=1$, the center is $(h,k)$."
>}}

### Solving Applied Problems Involving Ellipses

Many real-world situations can be represented by ellipses, including orbits of planets, satellites, moons and comets, and shapes of boat keels, rudders, and some airplane wings. A medical device called a lithotripter uses elliptical reflectors to break up kidney stones by generating sound waves. Some buildings, called whispering chambers, are designed with elliptical domes so that a person whispering at one focus can easily be heard by someone standing at the other focus. This occurs because of the acoustic properties of an ellipse. When a sound wave originates at one focus of a whispering chamber, the sound wave will be reflected off the elliptical dome and back to the other focus, as shown below. In the whisper chamber at the Museum of Science and Industry in Chicago, two people standing at the foci — about 43 feet apart — can hear each other whisper. When these chambers are placed in unexpected places, such as the ones inside Bush International Airport in Houston and Grand Central Terminal in New York City, they can induce surprised reactions among travelers.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A semi-elliptical dome with two foci, F prime on the left and F on the right. Several rays leave F prime, strike the inside of the dome, and reflect to arrive at F.","unit":55,"polygons":[{"points":[[4,0],[3.999,0.042],[3.998,0.084],[3.995,0.126],[3.99,0.167],[3.985,0.209],[3.978,0.251],[3.97,0.292],[3.961,0.334],[3.951,0.375],[3.939,0.417],[3.927,0.458],[3.913,0.499],[3.897,0.54],[3.881,0.581],[3.864,0.621],[3.845,0.662],[3.825,0.702],[3.804,0.742],[3.782,0.781],[3.759,0.821],[3.734,0.86],[3.709,0.899],[3.682,0.938],[3.654,0.976],[3.625,1.014],[3.595,1.052],[3.564,1.09],[3.532,1.127],[3.498,1.164],[3.464,1.2],[3.429,1.236],[3.392,1.272],[3.355,1.307],[3.316,1.342],[3.277,1.377],[3.236,1.411],[3.195,1.444],[3.152,1.478],[3.109,1.51],[3.064,1.543],[3.019,1.575],[2.973,1.606],[2.925,1.637],[2.877,1.667],[2.828,1.697],[2.779,1.726],[2.728,1.755],[2.677,1.784],[2.624,1.811],[2.571,1.839],[2.517,1.865],[2.463,1.891],[2.407,1.917],[2.351,1.942],[2.294,1.966],[2.237,1.99],[2.179,2.013],[2.12,2.035],[2.06,2.057],[2,2.078],[1.939,2.099],[1.878,2.119],[1.816,2.138],[1.753,2.157],[1.69,2.175],[1.627,2.193],[1.563,2.209],[1.498,2.225],[1.433,2.241],[1.368,2.255],[1.302,2.269],[1.236,2.283],[1.169,2.295],[1.103,2.307],[1.035,2.318],[0.968,2.329],[0.9,2.338],[0.832,2.348],[0.763,2.356],[0.695,2.364],[0.626,2.37],[0.557,2.377],[0.487,2.382],[0.418,2.387],[0.349,2.391],[0.279,2.394],[0.209,2.397],[0.14,2.399],[0.07,2.4],[0,2.4],[-0.07,2.4],[-0.14,2.399],[-0.209,2.397],[-0.279,2.394],[-0.349,2.391],[-0.418,2.387],[-0.487,2.382],[-0.557,2.377],[-0.626,2.37],[-0.695,2.364],[-0.763,2.356],[-0.832,2.348],[-0.9,2.338],[-0.968,2.329],[-1.035,2.318],[-1.103,2.307],[-1.169,2.295],[-1.236,2.283],[-1.302,2.269],[-1.368,2.255],[-1.433,2.241],[-1.498,2.225],[-1.563,2.209],[-1.627,2.193],[-1.69,2.175],[-1.753,2.157],[-1.816,2.138],[-1.878,2.119],[-1.939,2.099],[-2,2.078],[-2.06,2.057],[-2.12,2.035],[-2.179,2.013],[-2.237,1.99],[-2.294,1.966],[-2.351,1.942],[-2.407,1.917],[-2.463,1.891],[-2.517,1.865],[-2.571,1.839],[-2.624,1.811],[-2.677,1.784],[-2.728,1.755],[-2.779,1.726],[-2.828,1.697],[-2.877,1.667],[-2.925,1.637],[-2.973,1.606],[-3.019,1.575],[-3.064,1.543],[-3.109,1.51],[-3.152,1.478],[-3.195,1.444],[-3.236,1.411],[-3.277,1.377],[-3.316,1.342],[-3.355,1.307],[-3.392,1.272],[-3.429,1.236],[-3.464,1.2],[-3.498,1.164],[-3.532,1.127],[-3.564,1.09],[-3.595,1.052],[-3.625,1.014],[-3.654,0.976],[-3.682,0.938],[-3.709,0.899],[-3.734,0.86],[-3.759,0.821],[-3.782,0.781],[-3.804,0.742],[-3.825,0.702],[-3.845,0.662],[-3.864,0.621],[-3.881,0.581],[-3.897,0.54],[-3.913,0.499],[-3.927,0.458],[-3.939,0.417],[-3.951,0.375],[-3.961,0.334],[-3.97,0.292],[-3.978,0.251],[-3.985,0.209],[-3.99,0.167],[-3.995,0.126],[-3.998,0.084],[-3.999,0.042],[-4,0]]}],"points":[{"at":[-3.2,0]},{"at":[3.2,0],"label":"F"}],"texts":[{"at":[-3.2,-0.3],"text":"F′","anchor":"middle"}],"segments":[{"from":[-3.2,0],"to":[2,2.078],"arrow":true},{"from":[2,2.078],"to":[3.2,0],"arrow":true},{"from":[-3.2,0],"to":[-0.695,2.364],"arrow":true},{"from":[-0.695,2.364],"to":[3.2,0],"arrow":true},{"from":[-3.2,0],"to":[-3.064,1.543],"arrow":true},{"from":[-3.064,1.543],"to":[3.2,0],"arrow":true}]}
{{< /apfigure >}}

**Example.** A large room in an art gallery is a whispering chamber. Its dimensions are $46$ feet wide by $96$ feet long.

- What is the standard form of the equation of the ellipse representing the outline of the room? Hint: assume a horizontal ellipse, and let the center of the room be the point $(0,0)$.
- If two visitors standing at the foci of this room can hear each other whisper, how far apart are the two visitors? Round to the nearest foot.

{{< apfigure kind="figure" >}}
{"ariaLabel":"A horizontal ellipse representing the outline of a whispering-chamber floor, with a focus marked on each side of center. Rays leave one focus, strike the wall, and reflect to arrive at the other focus.","unit":55,"polygons":[{"points":[[4,0],[3.998,0.084],[3.99,0.167],[3.978,0.251],[3.961,0.334],[3.939,0.417],[3.913,0.499],[3.881,0.581],[3.845,0.662],[3.804,0.742],[3.759,0.821],[3.709,0.899],[3.654,0.976],[3.595,1.052],[3.532,1.127],[3.464,1.2],[3.392,1.272],[3.316,1.342],[3.236,1.411],[3.152,1.478],[3.064,1.543],[2.973,1.606],[2.877,1.667],[2.779,1.726],[2.677,1.784],[2.571,1.839],[2.463,1.891],[2.351,1.942],[2.237,1.99],[2.12,2.035],[2,2.078],[1.878,2.119],[1.753,2.157],[1.627,2.193],[1.498,2.225],[1.368,2.255],[1.236,2.283],[1.103,2.307],[0.968,2.329],[0.832,2.348],[0.695,2.364],[0.557,2.377],[0.418,2.387],[0.279,2.394],[0.14,2.399],[0,2.4],[-0.14,2.399],[-0.279,2.394],[-0.418,2.387],[-0.557,2.377],[-0.695,2.364],[-0.832,2.348],[-0.968,2.329],[-1.103,2.307],[-1.236,2.283],[-1.368,2.255],[-1.498,2.225],[-1.627,2.193],[-1.753,2.157],[-1.878,2.119],[-2,2.078],[-2.12,2.035],[-2.237,1.99],[-2.351,1.942],[-2.463,1.891],[-2.571,1.839],[-2.677,1.784],[-2.779,1.726],[-2.877,1.667],[-2.973,1.606],[-3.064,1.543],[-3.152,1.478],[-3.236,1.411],[-3.316,1.342],[-3.392,1.272],[-3.464,1.2],[-3.532,1.127],[-3.595,1.052],[-3.654,0.976],[-3.709,0.899],[-3.759,0.821],[-3.804,0.742],[-3.845,0.662],[-3.881,0.581],[-3.913,0.499],[-3.939,0.417],[-3.961,0.334],[-3.978,0.251],[-3.99,0.167],[-3.998,0.084],[-4,0],[-3.998,-0.084],[-3.99,-0.167],[-3.978,-0.251],[-3.961,-0.334],[-3.939,-0.417],[-3.913,-0.499],[-3.881,-0.581],[-3.845,-0.662],[-3.804,-0.742],[-3.759,-0.821],[-3.709,-0.899],[-3.654,-0.976],[-3.595,-1.052],[-3.532,-1.127],[-3.464,-1.2],[-3.392,-1.272],[-3.316,-1.342],[-3.236,-1.411],[-3.152,-1.478],[-3.064,-1.543],[-2.973,-1.606],[-2.877,-1.667],[-2.779,-1.726],[-2.677,-1.784],[-2.571,-1.839],[-2.463,-1.891],[-2.351,-1.942],[-2.237,-1.99],[-2.12,-2.035],[-2,-2.078],[-1.878,-2.119],[-1.753,-2.157],[-1.627,-2.193],[-1.498,-2.225],[-1.368,-2.255],[-1.236,-2.283],[-1.103,-2.307],[-0.968,-2.329],[-0.832,-2.348],[-0.695,-2.364],[-0.557,-2.377],[-0.418,-2.387],[-0.279,-2.394],[-0.14,-2.399],[0,-2.4],[0.14,-2.399],[0.279,-2.394],[0.418,-2.387],[0.557,-2.377],[0.695,-2.364],[0.832,-2.348],[0.968,-2.329],[1.103,-2.307],[1.236,-2.283],[1.368,-2.255],[1.498,-2.225],[1.627,-2.193],[1.753,-2.157],[1.878,-2.119],[2,-2.078],[2.12,-2.035],[2.237,-1.99],[2.351,-1.942],[2.463,-1.891],[2.571,-1.839],[2.677,-1.784],[2.779,-1.726],[2.877,-1.667],[2.973,-1.606],[3.064,-1.543],[3.152,-1.478],[3.236,-1.411],[3.316,-1.342],[3.392,-1.272],[3.464,-1.2],[3.532,-1.127],[3.595,-1.052],[3.654,-0.976],[3.709,-0.899],[3.759,-0.821],[3.804,-0.742],[3.845,-0.662],[3.881,-0.581],[3.913,-0.499],[3.939,-0.417],[3.961,-0.334],[3.978,-0.251],[3.99,-0.167],[3.998,-0.084]]}],"points":[{"at":[-3.2,0]},{"at":[3.2,0]}],"texts":[{"at":[-3.2,-0.4],"text":"Focus","anchor":"middle"},{"at":[3.2,-0.4],"text":"Focus","anchor":"middle"}],"segments":[{"from":[-3.2,0],"to":[2,2.078],"arrow":true},{"from":[2,2.078],"to":[3.2,0],"arrow":true},{"from":[-3.2,0],"to":[-0.695,2.364],"arrow":true},{"from":[-0.695,2.364],"to":[3.2,0],"arrow":true}]}
{{< /apfigure >}}

**Solution.**

- We are assuming a horizontal ellipse with center $(0,0)$, so we need to find an equation of the form $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1$, where $a>b$. We know that the length of the major axis, $2a$, is longer than the length of the minor axis, $2b$. So the length of the room, $96$, is represented by the major axis, and the width of the room, $46$, is represented by the minor axis.

  Solving for $a$, we have $2a=96$, so $a=48$, and $a^2=2{,}304$.

  Solving for $b$, we have $2b=46$, so $b=23$, and $b^2=529$.

  Therefore, the equation of the ellipse is $\tfrac{x^2}{2{,}304}+\tfrac{y^2}{529}=1$.
- To find the distance between the senators, we must find the distance between the foci, $(\pm c,0)$, where $c^2=a^2-b^2$. Solving for $c$, we have:

$$
\begin{array}{lrcl}
\text{Substitute using the values found in part (a).} & c^2 &=& 2{,}304-529 \\[4pt]
\text{Take the square root of both sides.} & c &=& \pm\sqrt{2{,}304-529} \\[4pt]
\text{Subtract.} & c &=& \pm\sqrt{1775} \\[4pt]
\text{Round to the nearest foot.} & c &\approx& \pm42
\end{array}
$$

The points $(\pm42,0)$ represent the foci. Thus, the distance between the senators is $2(42)=84$ feet.

{{< fillin
  question="Suppose a whispering chamber is $480$ feet long and $320$ feet wide. Assuming a horizontal ellipse centered at $(0,0)$, write the standard form of the equation of the ellipse representing the room."
  answer="\frac{x^2}{57600}+\frac{y^2}{25600}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{57{,}600}+\tfrac{y^2}{25{,}600}=1$"
  hint="The length, $2a=480$, gives $a^2$; the width, $2b=320$, gives $b^2$."
>}}

{{< fillin
  question="For the same whispering chamber (length $480$ feet, width $320$ feet), if two people stand at the foci and can hear each other whisper, how far apart are they? Round to the nearest foot."
  answer="358"
  answerForm="decimal"
  answerDisplay="$358$ feet"
  hint="Find $c=\sqrt{a^2-b^2}$ from part (a), then the distance between the foci is $2c$."
>}}

{{< callout type="info" >}}
**Media.** Access these online resources for additional instruction and practice with ellipses.
{{< /callout >}}

## Key equations

| Horizontal ellipse, center at origin | $\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1,\ a>b$ |
| :--- | :--- |
| Vertical ellipse, center at origin | $\tfrac{x^2}{b^2}+\tfrac{y^2}{a^2}=1,\ a>b$ |
| Horizontal ellipse, center $(h,k)$ | $\tfrac{(x-h)^2}{a^2}+\tfrac{(y-k)^2}{b^2}=1,\ a>b$ |
| Vertical ellipse, center $(h,k)$ | $\tfrac{(x-h)^2}{b^2}+\tfrac{(y-k)^2}{a^2}=1,\ a>b$ |

## Key concepts

- An ellipse is the set of all points $(x,y)$ in a plane such that the sum of their distances from two fixed points is a constant. Each fixed point is called a focus (plural: foci).
- When given the coordinates of the foci and vertices of an ellipse, we can write the equation of the ellipse in standard form.
- When given an equation for an ellipse centered at the origin in standard form, we can identify its vertices, co-vertices, foci, and the lengths and positions of the major and minor axes in order to graph the ellipse.
- When given the equation for an ellipse centered at some point other than the origin, we can identify its key features and graph the ellipse.
- Real-world situations can be modeled using the standard equations of ellipses and then evaluated to find key features, such as lengths of axes and distance between foci.

## Practice

### Write equations of ellipses in standard form

{{< fillin
  question="An ellipse is centered at the origin, symmetric with respect to the $x$- and $y$-axes, and has a focus at $(0,-2)$ and a point $(5,0)$ on its graph. Write the standard form of its equation."
  answer="\frac{x^2}{25}+\frac{y^2}{29}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{25}+\tfrac{y^2}{29}=1$"
  hint="The point $(5,0)$ gives $b^2=25$ directly; the focus $(0,-2)$ gives $c^2=4$, so solve $c^2=a^2-b^2$ for $a^2$."
>}}

{{< fillin
  question="An ellipse has center $(-3,4)$, vertex $(1,4)$, and one focus at $(-3+2\sqrt{3},4)$. Write the standard form of its equation."
  answer="\frac{(x+3)^2}{16}+\frac{(y-4)^2}{4}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x+3)^2}{16}+\tfrac{(y-4)^2}{4}=1$"
  hint="The distance from center to vertex gives $a$; the distance from center to focus gives $c$; then solve $c^2=a^2-b^2$ for $b^2$."
>}}

{{< fillin
  question="Write the equation $4x^2+40x+25y^2-100y+100=0$ in standard form."
  answer="\frac{(x+5)^2}{25}+\frac{(y-2)^2}{4}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{(x+5)^2}{25}+\tfrac{(y-2)^2}{4}=1$"
  hint="Group the $x$- and $y$-terms, factor out the leading coefficients, complete the square for each variable, and divide by the resulting constant."
>}}

### Graph ellipses centered at the origin

{{< fillin
  question="Graph the ellipse $\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$, noting its center, vertices, and foci. Enter the two vertices, separated by a comma."
  answer="(4,0),(-4,0)"
  answerMode="unordered"
  answerDisplay="$(4,0)$ and $(-4,0)$"
  hint="Since $16>9$, the major axis is the $x$-axis, so the vertices are $(\pm a,0)$ with $a^2=16$."
>}}

{{< fillin
  question="For the same ellipse $\tfrac{x^2}{16}+\tfrac{y^2}{9}=1$, enter the two foci, separated by a comma."
  answer="(\sqrt{7},0),(-\sqrt{7},0)"
  answerMode="unordered"
  answerDisplay="$(\sqrt{7},0)$ and $(-\sqrt{7},0)$"
  hint="Solve $c^2=a^2-b^2=16-9$ and place the foci at $(\pm c,0)$."
>}}

{{< fillin
  question="Graph the ellipse $81x^2+49y^2=1$, noting its center, vertices, and foci. Enter the two vertices, separated by a comma."
  answer="(0,1/7),(0,-1/7)"
  answerMode="unordered"
  answerDisplay="$(0,\tfrac{1}{7})$ and $(0,-\tfrac{1}{7})$"
  hint="Rewrite as $\tfrac{x^2}{1/81}+\tfrac{y^2}{1/49}=1$; since $\tfrac{1}{49}>\tfrac{1}{81}$, the major axis is the $y$-axis."
>}}

### Graph ellipses not centered at the origin

{{< fillin
  question="Graph the ellipse $4x^2-8x+16y^2-32y-44=0$, noting its center, vertices, and foci. Enter the center as an ordered pair $(x,y)$."
  answer="(1,1)"
  answerDisplay="$(1,1)$"
  hint="Group the $x$- and $y$-terms and complete the square for each to reach standard form; the center is $(h,k)$."
>}}

{{< fillin
  question="For the same ellipse $4x^2-8x+16y^2-32y-44=0$, enter the two vertices, separated by a comma."
  answer="(5,1),(-3,1)"
  answerMode="unordered"
  answerDisplay="$(5,1)$ and $(-3,1)$"
  hint="In standard form the equation is $\tfrac{(x-1)^2}{16}+\tfrac{(y-1)^2}{4}=1$; the vertices are $(h\pm a,k)$."
>}}

{{< fillin
  question="Graph the ellipse $x^2+8x+4y^2-40y+112=0$, noting its center, vertices, and foci. Enter the two foci, separated by a comma."
  answer="(-4+\sqrt{3},5),(-4-\sqrt{3},5)"
  answerMode="unordered"
  answerDisplay="$(-4+\sqrt{3},5)$ and $(-4-\sqrt{3},5)$"
  hint="In standard form the equation is $\tfrac{(x+4)^2}{4}+\tfrac{(y-5)^2}{1}=1$; solve $c^2=a^2-b^2$ and place the foci at $(h\pm c,k)$."
>}}

### Solve applied problems involving ellipses

{{< fillin
  question="A semi-elliptical arch has a height of $12$ feet and a span of $40$ feet. Find the equation for the ellipse, assuming the origin is at the center of its span."
  answer="\frac{x^2}{400}+\frac{y^2}{144}=1"
  answerForm="conic-standard-form"
  answerDisplay="$\tfrac{x^2}{400}+\tfrac{y^2}{144}=1$"
  hint="Half the span gives $a$, and the height gives $b$."
>}}

{{< fillin
  question="For the same semi-elliptical arch (height $12$ feet, span $40$ feet), find the distance from the center at which the height is $6$ feet. Round to the nearest hundredth."
  answer="17.32"
  answerForm="decimal"
  answerDisplay="$17.32$ feet"
  hint="Substitute $y=6$ into $\tfrac{x^2}{400}+\tfrac{y^2}{144}=1$ and solve for $x$."
>}}

{{< fillin
  question="A whispering gallery has a length of $120$ feet, and the foci are located $30$ feet from the center. Find the height of the ceiling at the center. Round to the nearest hundredth of a foot."
  answer="51.96"
  answerForm="decimal"
  answerDisplay="$51.96$ feet"
  hint="Half the length gives $a=60$ and the distance to a focus gives $c=30$; the height at the center is $b=\sqrt{a^2-c^2}$."
>}}

---

<small>This section is adapted from [Precalculus 2e, Section 10.1: The Ellipse](https://openstax.org/books/precalculus-2e/pages/10-1-the-ellipse) by Jay Abramson and OpenStax, © OpenStax, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Access the original for free at [openstax.org](https://openstax.org/details/books/precalculus-2e). Changes: omitted a `coreq-skills` block the pinned CNXML prepends before the section proper (its own review of completing the square and graphing a circle, keyed to Intermediate Algebra 9.2.1 and 11.1.4, with its own worked examples and two "Practice Makes Perfect" exercise sets) — confirmed against the rendered PDF, page 1010 (true PDF index 1020), where the chapter-opening folio runs directly into the "10.1 The Ellipse" heading and its Learning Objectives with no corequisite-skills material between them. Omitted the National Statuary Hall photograph (a credit photograph, per house convention) but kept the paragraph that introduces it, describing the room generically rather than "as shown in Figure 1." Recreated all twelve remaining source figures as accessible spec-first figures, comparing each against the rendered PDF: the three-cone conic-sections diagram (drawn as an exact schematic: each right double cone and its cutting plane, with the base circles, cone silhouettes, and the ellipse, hyperbola, and parabola traces all computed from the cone equation under a fixed oblique projection, hidden portions dashed) and the thumbtack-and-string construction (simplified to its essential geometry — an exactly sampled ellipse with the taut string drawn to the two foci; the pencil-and-hand illustration is represented by the string alone) as `kind="figure"` figures; the generic center/vertices/co-vertices/foci definition diagram, the $d_1$/$d_2$ derivation diagram, the two horizontal/vertical standard-forms figure pairs (center at the origin and at $(h,k)$), and all four worked-example answer graphs (Examples 3, 4, 5, and 6) as `kind="graph"` figures with the exact numbers each example derives; and the whispering-chamber reflective-property illustration and Example 7's room diagram as `kind="figure"` ray diagrams. Every "write in standard form" fill-in declares `answerForm="conic-standard-form"`, confirmed by replaying each printed general-form equation ($4x^2+40x+25y^2-100y+100=0$, $49x^2+16y^2=784$, $4x^2+y^2-24x+2y+21=0$) through the grader to confirm it reports `form` rather than `correct`. Every vertices/co-vertices/foci ask is keyed as a two-member `answerMode="unordered"` list of ordered pairs rather than a $\pm$ expression, per this chapter's grading constraints. Six retained Try Its and Practice items ask for only one or two of a source exercise's several requested quantities (e.g., "graph the ellipse, noting its center, vertices, and foci" is split into a standard-form or center fill-in plus a vertices or foci fill-in) rather than a single combined response, since the underlying quantities are not commensurable in one graded answer; each such split is disclosed here rather than merging unlike quantities into one component. Twelve selected end-of-section exercises (three per objective) were adapted into interactive Practice components, independently re-derived by hand and in Node rather than read off the source key; the applied Practice items' rounded answers were checked against both full-precision and the source's own rounded intermediates, and no discrepancy was found in this section.</small>
