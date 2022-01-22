---
title: Use AMB in Blueprints
layout: ../../../layouts/MainLayout.astro
---

![](/bp/bp_overview.png)

Here's all the available nodes in Blueprint!

## AMBEngine Subsystem

### Create AMBEffect Stack

![](/bp/create_ambeffect_stack.png)

Description:

This will create an AMB effect that will be tracked by the subsystem.

Target is `AMBEngine Subsystem`

> **Note:** 
>
> It is recommended this to be saved into an UPROPERTY variable or a variable in your blueprint, as the AMB system **will not** prevent this from being garbage collected!!

Inputs:
* In - Exec
* Target - AMBEngine Subsystem

Outputs:
* Out - Exec
* Return Value - AMBEffect Stack

---

### Remove AMBEffect Stack

![](/bp/remove_ambeffect_stack.png)

Description:

This will delete the effect stack and make all references NULL.

Target is `AMBEngine Subsystem`

Inputs:
* In - Exec
* Target - AMBEngine Subsystem
* Effect Stack - AMBEffect Stack

Outputs:
* Out - Exec

---

## AMBEffect Stack

### SetActive

![](/bp/setactive.png)

Description:

Controls if the effect should be active or not.

Target is `AMBEffect Stack`

Inputs:
* In - Exec
* Target - AMBEffect Stack
* Active - Boolean

Outputs:
* Out - Exec

---

### SetCurrentFrameWeight

![](/bp/setcurrentframeweight.png)

Description:

Sets how much the current frame will affect the accumulation buffer. 1.0f == full weight.

Target is `AMBEffect Stack`

Inputs:
* In - Exec
* Target - AMBEffect Stack
* Current Frame Weight - Float *( The weight of the current frame. Default: 1.0 )*

Outputs:
* Out - Exec

---

### Set Zoom

![](/bp/setzoom.png)

Description:

Sets how much zoom to apply to the accumulation buffer.

The recommended starting value is 4.

Target is `AMBEffect Stack`

Inputs:
* In - Exec
* Target - AMBEffect Stack
* Zoom X - Float *( Zoom factor on X axis. Default: 0.0 )*
* Zoom Y - Float *( Zoom factor on Y axis. Default: 0.0 )*

Outputs:
* Out - Exec

---

### Reset Frame Accumulation

![](/bp/resetframeaccum.png)

Description:

Resets the accumulation buffer.

Target is `AMBEffect Stack`

Inputs:
* In - Exec
* Target - AMBEffect Stack

Outputs:
* Out - Exec

---