---
title: Configuration
layout: ../../../layouts/MainLayout.astro
---

The configuration for the plugin is accessible in `Project Settings -> Game -> Accumulation-based Motion Blur`
![](/config/overview.png)

---

### Default Pass Location

This option determines when the effect will be executed.

Dropdown options:
* Before Post Process Materials - *Default*
* After Post Process Materials
---
### Enable Framerate Scaling

When enabled, the plugin will make an effort to have the effect look consistently between framerates (from 24 to 144 FPS by default, determined by the Framerate Scaling Curve).

[![](/config/AMB_FramerateScaling.png)](/config/AMB_FramerateScaling.png)

You hopefully shouldn't need to change the other settings, I tried to make them as best as possible.

*Disabled by default.*

---
### Framerate Scaling Curve

This determines how the Current Frame Weight Value will be scaled depending on the framerate.

*Default values are: 60FPS = 1.0, 24FPS = 2.5 and 144FPS = 0.42*

---
### Current Frame Weight Influence

This determines how much the Current Frame Weight will impact the influence of the Framerate Scaling Curve. A value of 1.0 will make the current frame affect the accumulation buffer at 100%, regardless of framerate.

*Default values are: 0.0 = 1.0, 0.5 = 1.0, 1.0 = 0.0*

## THE DANGER ZONE

_(Added in 1.0.1)_

This is where experimental or potentially dangerous settings lie.

### Clamp Current Frame Weight
_(Added in 1.0.1)_

By default, the Current Frame Weight will be clamped to a value between 0 and 1, you can turn it off to use a value higher than 1, however it is very much not recommended to do so.