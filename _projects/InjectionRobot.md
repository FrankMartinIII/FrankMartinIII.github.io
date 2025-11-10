---
layout: page
title: Needle-Wielding Robot for Injection
description: 
img: assets/img/Assembly.jpg
importance: 1
category: work
related_publications: false
featured: true
---

Our lab is developing a robotic system capable of performing precision medical procedures such as injections and other tasks involving the manipulation of a needle. <a href="../masters/" >This project is a continuation of what I began during my master's degree. </a> For this task, we have upgraded the Stewart platform by replacing the previous universal joints with ball joints. The robot uses computer vision to identify marked areas on the skin. I have built a small stereo camera mount that attached two cameras to the top of the Stewart platform, enabling accurate tracking of the region of interest where the injection will be administered. As of now, I am using the cameras to track an X-mark drawn on the skin that indicates the targeted area. <a href= "../InjectionTracking/" >I have outlined those efforts on my other page here. </a>

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

