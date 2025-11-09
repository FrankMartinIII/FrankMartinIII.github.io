---
layout: page
title: 6-DOF End-Effector for Wound Closure Robot 
description: Stepper motors and a Stewart platform operated using ROS on a Raspberry Pi 4B—completed for Master's Thesis
img: assets/img/StewartPlatform-1 (2).jpg
importance: 7
category: work
related_publications: true
featured: true
---

At the Hofstra Precision Robotics Lab, we have collaborated for many years with Northwell Health to develop new robotics systems for medical applications. Earlier work in the lab resulted in the developmnet of several gantry robots designed for automated wound closure. Although these systems successfully demonstrated proof of concept, they were large, noisy, and mechanically constrained, making them unsuitable for use in clinical environments.

To address these limitations, I led the development of a new 6-degree-of-freedom end-effector that smaller and more portable. This new design represents a step toward a more practical and deployable robotic wound closure system. The new end-effector design consisted of a <strong>Stewart platform</strong> and stepper motors, which can operate simultaneously and independetly to move into a variety of positions and perform tasks such as attaching magnetic wound-closure fixtures to a patient. My task also included the challenge of writing and engineering all of the robot controller code and deploying it to a <strong>Raspberry Pi 4B</strong>.  

In short, my contributions consisted of the following (and more):
<ul>
    <li>Writing drivers to interface with two stepper motors and six linear actuator motors from a Raspberry Pi 4B.</li>
    <li>Development of a precise stepping algorithm to ensure two stepper motors could rotate in opposite directions to operate the end-effector and release fixtures.</li>
    <li>Testing, modeling, and comparing the operation of 6 linear actuator motors for our Stewart platform.</li>
    <li>Assembly of the Stewart platform using linear actuators and universal joints.</li>
    <li>Kinematic analysis of our Stewart platform and implementation in the control code.</li>
    <li>Measurement of the operation of the Stewart platform using an IMU.</li>
    <li>Graphing and analysis of Stewart platform movement and error.</li>
</ul>

I created the system using <strong>ROS</strong>, with each part of the system operating using a series of node communicating with each other over messages.

<strong>This project was completed as a part of my master's thesis, which </strong> <a href = "https://colelibrary.idm.oclc.org/login?url=https://www.proquest.com/dissertations-theses/miniaturization-robotic-wound-closure-system-end/docview/3142495251/se-2?accountid=41461"> <b>you can read here.</b> </a>


<div class="row">
    <div class="col-sm mt-1 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/StewartPlatform-1 (2).jpg" title="Stewart platform" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Stewart platform after completion.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/PiAndTwoSteppers.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LACTestbed.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Pi connected to steppers.   Right: Linear actuator control board test bed.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/IMUCode.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/StewIMUClose.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Measuring Stewart platform performance with IMU.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/StepperClose.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/L12.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LACWired.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Shinani Y07-43D1-4275 6-lead stepper motor. Middle: Actuonix L12-30 mm linear actuator with feedback. Right: Linear actuator control board.
</div>
