---
title: Use AMB via Console
layout: ../../../layouts/MainLayout.astro
---

IMPORTANT: This is only intended to be used for debug purposes!

| Command | Purpose |
| ------- | ------- |
| r.AMB | Globally enables or disables the effect. (It does not trigger it on its own, use r.AMB.Toggle for that) |
| r.AMB.Toggle | Toggles the effect. Useful if it's staying on the screen after a game session. |
| r.AMB.SetIntensity | Sets the Current Frame Weight. |
| r.AMB.ForceResetAccumulationBuffer | Temporarily makes the Current Frame Weight be 1.0 for one frame |