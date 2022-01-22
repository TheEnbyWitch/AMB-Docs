---
title: Use AMB in C++
layout: ../../../layouts/MainLayout.astro
---

There are only 2 classes:
 - [UAMBEngineSubsystem](#amb-engine-subsystem) - tracks the Effect Stacks, handles creating them and merges them on render.
 - [UAMBEffectStack](#amb-engine-subsystem) - a class containing the properties of the effect.

## AMB Engine Subsystem

### Create AMB Effect Stack

```cpp
UAMBEffectStack* Effect = UAMBEngineSubsystem::Get()->CreateAMBEffectStack();
```

Description:

This will create an AMB effect that will be tracked by the subsystem.

> **Note:** 
>
> It is recommended this to be saved into an UPROPERTY variable or a variable in your blueprint, as the AMB system **will not** prevent this from being garbage collected!!

Outputs:
* Return Value - UAMBEffectStack*

---

### Remove AMB Effect Stack
```cpp
UAMBEngineSubsystem::Get()->RemoveAMBEffectStack( Effect );
```

Description:

This will delete the effect stack and make all references NULL.

Inputs:
* Effect Stack - UAMBEffectStack*

## AMB Effect Stack

### SetActive
```cpp
Effect->SetActive( true );
```

Description:
Controls if the effect should be active or not.

Inputs:
* Active

---

### SetCurrentFrameWeight
```cpp
Effect->SetCurrentFrameWeight( 0.5f );
```

Description:

Sets how much the current frame will affect the accumulation buffer. 1.0f == full weight.

Inputs:
* Current Frame Weight *( Default: 1.0 )* - The weight of the current frame.

---

### Set Zoom
```cpp
Effect->SetZoom( FVector2D( 4.0f ) );
```

Description:

Sets how much zoom to apply to the accumulation buffer.

The recommended starting value is 4.

Inputs:
* Zoom X *( Default: 0.0 )* - Zoom factor on X axis
* Zoom Y *( Default: 0.0 )* - Zoom factor on Y axis

---

### Reset Frame Accumulation
```cpp
Effect->ResetFrameAccumulation();
```

Description:
Resets the accumulation buffer.

---