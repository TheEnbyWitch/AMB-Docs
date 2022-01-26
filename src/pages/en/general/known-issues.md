---
title: Known Issues
layout: ../../../layouts/MainLayout.astro
---

## Ensure condition failed

```
Pass Accumulation Motion Blur has a read dependency on AMB Scene Color Copy, but it was never written to.
```

This only happens once per-session when the engine is built in Development or Debug and the user is running the game with a debugger. I have not found this to cause any issues, but if anyone knows how I could go around fixing it, please email me at support-uemarketplace@enbywit.ch

This does not affect Shipping and Test builds of the game.

There are more in UE5.0EA, but I haven't seen it causing any issues either.
```
LogOutputDevice: Error: Ensure condition failed: (!bFailedToLoadProducedContent || bIsUntrackedRenderTarget) || (GNumExplicitGPUsForRendering > 1 && RenderTarget.GetLoadAction() == ERenderTargetLoadAction::EClear) [File:D:/build/++UE5/Sync/Engine/Source/Runtime/RenderCore/Private/RenderGraphValidation.cpp] [Line: 830] 
Pass 'Combine' attempted to bind texture 'AMB Scene Color Copy' as a render target without the 'Load' action specified, despite a prior pass having produced it. It's invalid to completely clobber the contents of a resource. Create a new texture instance instead.
LogStats:             FDebug::EnsureFailed -  0.000 s
LogOutputDevice: Error: Ensure condition failed: Resource->bProduced || Resource->bExternal [File:D:/build/++UE5/Sync/Engine/Source/Runtime/RenderCore/Private/RenderGraphValidation.cpp] [Line: 548] 
Pass Accumulation Motion Blur has a read dependency on AMB Scene Color Copy, but it was never written to.
LogStats:             FDebug::EnsureFailed -  0.000 s
```

## Engine freezes for a moment when the effect shows up for the first time in the session

Same reason as above, except the user isn't running the engine with a debugger. This does not affect Shipping and Test builds of the game.

## Mobile support

Currently the PostProcess stuff in the ViewExtension API does not work when using the Mobile Renderer without editing engine code. The shader code compiles on Android and the game runs when using the plugin, the effect just doesn't appear. You might be able to use a Desktop Renderer on Mobile, but I've been unable to test it myself yet.