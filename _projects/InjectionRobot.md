---
layout: page
title: Needle-Wielding Robot for Injection
description: 
img: assets/img/Assembly.jpg
importance: 1
category: work
related_publications: true
featured: true
---

Our lab is developing a robotic system capable of performing precision medical procedures such as injections and other tasks involving the manipulation of a needle. <a href="../masters/" >This project is a continuation of what I began during my master's degree. </a> For this task, we have upgraded the Stewart platform by replacing the previous universal joints with ball joints. The robot uses computer vision to identify marked areas on the skin. I have built a small stereo camera mount that attached two cameras to the top of the Stewart platform, enabling accurate tracking of the region of interest where the injection will be administered. As of now, I am using the cameras to track an X-mark drawn on the skin that indicates the targeted area. <a href= "../injectionTracking/" >I have outlined those efforts on my other page here. </a>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Assembly.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Assem_Stewart_Ball_Joint.PNG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I have been experimenting with visual servoing techniques for robot control. My current approach is to use position-based visual servoing (PBVS) for the initial positioning of the robot and then switch to image-based visual servoing (IBVS) for small adjustments. The inverse kinematics of a closed-chain parallel robot like the Stewart platform are relatively easy to calculate, making it simple to solve for the leg lengths required to reach a particular pose. However, the forward kinematic problem (determing platform pose from known leg lengths) is difficult to solve. This presents a challenge when using visual servoing in a high precision scenario, as we want to know the platform's current pose. To accomplish this, I built a ROS node that reads real-time actuator feedback from the robot and feeds it to another node that uses the Newton-Raphson method to iteratively estimate the robot's pose.

Another focus of this project is the calibration of our Stewart platform to increase its accuracy. I have been working on a calibration method using <strong>ArUco markers</strong>. A camera is mounted to the aluminum frame that suports the robot, and the geometry of the base as well as its position relative to the camera are known. By attaching an ArUco marker to the top of the platform, we can determine its pose in the camera frame. This can be converted to a pose in the world frame by using the known transformation between the base and the camera. We can then command the platform to move throughout its workspace, tracking the desired pose versus the actual pose achieved, and use this data to perform nonlinear least squares optimization to minimize the error.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
