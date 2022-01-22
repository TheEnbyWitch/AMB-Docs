---
title: Use AMB in Sequencer
layout: ../../../layouts/MainLayout.astro
---

This is probably the easiest way to use this plugin! All you really need to do is add an `Accumulation Based Motion Blur Track` to your sequence, which will contain all the necessary properties.

![](/sequencer/track-add.png)

You can now animate the relevant keyframes as desired.

![](/sequencer/overview_new.png)

There can only be one working track at a time.

## What does each channel do?

### Enabled
Decides whether the motion blur effect is active or not.

### Current Frame Weight
Please refer to the [How does it work?](/en/general/how-does-it-work) page for a more in-depth explanation.<br>
TL;DR: It affects how much the current frame will affect the accumulation buffer.

### Zoom
This will make the accumulation buffer appear to zoom in or out.

### Reset Accumulation Buffer
Everytime a key is triggered, the Current Frame Weight will temporarily assume a value of `1.0` in order to make the current frame take over the accumulation buffer completely. Very useful for Camera Cuts!

This also done automatically whenever the effect is reenabled if it was inactive.