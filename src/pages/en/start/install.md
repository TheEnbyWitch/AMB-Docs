---
title: Installation
layout: ../../../layouts/MainLayout.astro
---

There are 2 ways you can go around installing this plugin, which depends on where you bought it.

## Option 1: Install from Unreal Marketplace

<!--If you're here this early, I'm so sorry, but I need this thing to be up and public first before I can actually write (and take screenshots for) how to install this way. Though you can probably figure this out on your own.-->
1) In the Epic Games Launcher, go into `Unreal Engine -> Library`
2) In the `Vault` section, find `Accumulation-based Motion Blur`, and press `Install to Engine`
3) After the plugin gets installed, you can open up your project, open `Plugins` and enable it there

## Option 2: Install from itch.io

No compiled binaries are offered via itch.io, so your project will need to have a C++ game module (just a dummy class will do if your project is BP-only).

1) Download the Source zip
2) Copy the AccumulationMotionBlur folder to your project's Plugins folder, like so:
![](/install/itch_plugins.png)
3) Compile the project and have fun!