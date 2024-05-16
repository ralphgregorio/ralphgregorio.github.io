---
layout: post
title: Valorant Discord Bot
date: 2022-01-06 10:18:00
categories: [javascript, mongodb, discord]
---

Built a discord bot which abused the valorant api to get unimpeded access to gather rank information from all players. With that, the bot is able to grab any rank and match information from any player in valorant as long as the name and token are provided.

## Features

###### Gather Rank Information
![rank-info](/assets/val_bot/rank-info.png)

###### Gather Match Information
![match-info](/assets/val_bot/match-info.png)

###### Linking User Information
We also store user information in MongoDB Atlas to speed up rank and match info queries.


[Look at the source code here!](https://github.com/ralphgregorio/ValorantDiscordBot)
