---
layout: page
title: MR Fixture Adjustment
description: HoloLens interface for human-robot interaction.
img: assets/img/hololens.avif
importance: 3
category: work
related_publications: true
featured: true
---

<div class="row justify-content-sm-center" style="padding-bottom: 30px">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZgWkBI3HsqI?si=JkfbBuWc0HSSzE9l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

At Hofstra, we have developed several autonomous robotic systems designed to assist surgeons with closing wounds. Our automomous wound closure systems take a 3D scan of the wound and plan magnetic fixture placement positions on the wound's surface. Communicating robot intent (e.g. where fixtures will be placed) is critical in medical robotics, where uncertainty can compromise both safety and procedural accuracy. Mixed Reality (MR) systems have emerged as effective tools for presenting surgical information directly within the clinical workspace. To allow surgeons to interface with the robotic system, we created a MR application for the Microsoft HoloLens 2.

The system sends the wound model and suggested fixture placements to the HoloLens application, displaying them in full 3D in the environment. The user can then manipulate the wound and fixture placements using their hands to correct any errors made by the system, placing the fixtures as they think best. When the user is ready, they can confirm the fixture placements, sending the positions and rotations back to the robot for placement.


I developed the surface‑alignment algorithm that ensures each holographic fixture automatically orients itself flush to the wound surface. This is done by finding the surface normal at the fixture's current position, removing the need for precise manual rotation and making adjustments fast an intuitive. I also designed and implemented the entire networking stack for this project, which sends the wound model and fixture positions from a server to the HoloLens 2 and allows the HoloLens 2 to send back fixture position and orientation data after user interaction. Additionally, this code reconciles the differences between Unity's coordinate system and the coordinate systems used in our robotic platforms.

<div class="row">
    <div class="col-sm mt-1 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Hololens/UI.jpg" title="Interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Interface
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Hololens/w15andUI.jpg" title="wound and UI" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Hololens/w15prior2.jpg" title="wound" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pre-manipulation by user in AR.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Hololens/w15postandUI.jpg" title="wound and UI" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Hololens/w15postgood.jpg" title="wound" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Post-manipulation by user in AR.
</div>

<!--[2] {% cite MRWound %}-->