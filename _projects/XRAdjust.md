---
layout: page
title: MR Fixture Adjustment
description: HoloLens application for human-robot interaction.
img: assets/img/hololens.avif
importance: 3
category: work
related_publications: false
featured: true
---

At Hofstra, we have developed several robotic systems designed to assist surgeons with closing wounds. To accomplish this task, the system takes a 3D scan of the wound and places magnetic fixtures on the around the wound's surface. To allow surgeons to interface with the robotic system, we created an XR application for the Microsoft HoloLens 2.

The system sends the wound model and suggested fixture placements to the HoloLens application, displaying them in full 3D in the environment. The user can then manipulate the wound and fixture placements using their hands to correct any errors made by the system. When the user is ready, they can confirm the fixture placements, sending the positions and rotations back to the robot for placement.


I implemented an algorithm that forces holographic fixture models to align themselves along the wound surface. This is done by finding the surface normal at the fixture's current position, ensuring that the user can always easily place the fixture flush with the wound's surface without having to rotate it with extreme precision.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Hololens/FixturesPre.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Hololens/fixturesHoriz.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Pre-manipulation by user in AR. Right: Post-manipulation by user in AR.
</div>