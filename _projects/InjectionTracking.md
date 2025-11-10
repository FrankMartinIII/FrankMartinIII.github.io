---
layout: page
title: Injection Site Tracking
description: Finding a region of interest using a hand-drawn X-mark.
img: assets/img/XMarksTheSpot.png
importance: 4
category: work
related_publications: false
featured: true
---

We are developing a robot that can deliver injections. Our goal is to make robots that be easily controlled by human operators and doctors. I wanted to take on the challenging task of building a system that naturally fits into a clinical setting without too much change the routine of medical staff. To integrate a robot for injection as seamlessly as possible, it was logical to me that we would want to allow doctors and nurses to easily mark an area on the skin, akin to what they might do before a surgical procedure, and have the robotic system automatically acquire and track the region of interest from these markings. 

I came up with multiple ideas to accomplish this, conducting many experiments with ellipse fitting, circle detection, and contour tracking. Ultimately, we settled on the idea of using an X shape. Why? An X is easy for a human to draw, has an exact point of interest, and is intuitive for a human to understand. Regardless of the size and shape of the X, it is obvious that the injection should be delivered at the intersection point, though detecting this with computer vision and retrieving a full 6 degree-of-freedom pose is more challenging.

OpenCV has no built-in solution for detecting a hand-drawn X, so I created a method for this purpose. This solution does not use machine learning.
<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/image.png" title="example image" class="img-fluid rounded z-depth-1 w-50" %}
    </div>
</div>

First, I masked out the desired area using thresholding and various morphological operations. These steps help to reduce noise caused by hair and other features on the skin.

<div class="row">
    <div class="col-sm mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/image1.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
</div>
This area is too thick to consistently detect lines, so I proceeded by applying morphological skeletonization to the developed mask. After doing this, we can actually find line segments in the image using the Hough transform.
<div class="row">
    <div class="col-sm mt-5 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/image2.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
    <div class="col-sm mt-5 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/LineSegs.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
</div>
I clustered the lines into two groups and used RANSAC on the end points to determine the dominant lines that make up the X. It is then straightforward to find the intersection point and map it back to the original image. This method works very well even in more complex examples with a lot of adversarial features.
<div class="row">
    <div class="col-sm mt-5 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/image3.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
    <div class="col-sm mt-5 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/image4.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
</div>

This one point does not provide enough information to find the full 3D pose. I needed a way to at least move the robot into a position parallel to the skin's surface and over the general region of interest. Since the region is quite small, we could consider it approximately planar. Defining a plane requires 3 non-collinear points, and finding its pose in world space first requires the XYZ coordinates of those points in the camera frame, which can then be transformed to the world coordinate system. For this, I created and calibrated a stereo camera setup to triangulate these points. Instead of drawing more features on the skin, we can search for matching features across our stereo pair. To do this, I segmented a small area around the intersection point in the two images, which we can find using the above method on two stereo aligned images.

<div class="row">
    <div class="col-sm mt-5 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/StereoAligned.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
</div>


I then used Shi-Tomasi corner detection, SIFT, and Brute-Force matcher to find matching keypoints. Then, the coordinates of the top matches can be triangulated and then used with RANSAC to fit a plane.
<div class="row">
    <div class="col-sm mt-5 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/FeaturePts.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-5 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/MatchedPts.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
</div>
<div class="caption">
    Best matched feature points with distances.
</div>
<div class="row">
    <div class="col-sm mt-5 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/XDetection/CamFrame.png" title="example image" class="img-fluid rounded z-depth-1 w-100" %}
    </div>
</div>
<div class="caption">
    Coordinates of matched points in camera frame.
</div>

