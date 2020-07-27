---
title: Travbot Update Log 1
description: Post detailing the changes made to TravBot in version 2.4.0.
date: 2020-02-29
tags:
  - TravBot
layout: layouts/post.njk
---

# TravBot Log 1 (02/29/2020)

Welcome to the first [TravBot](https://github.com/keanuplayz/TravBot) update log!

The project has existed *long* before this day, of course.

I just never really wanted to write changelogs. Too lazy.

Anyways, on with the log.

First off, the progress in January and Febuary was tremendous.

A little recap of what has been done:

* The entire bot has been rewritten to use a new framework. (New command handler, logging module, and a lot more.)
* Today, I added three new commands. These are [`.poll`](https://github.com/keanuplayz/TravBot/blob/dev/commands/poll.js), [`.urban`](https://github.com/keanuplayz/TravBot/blob/dev/commands/urban.js) and [`.shorten`](https://github.com/keanuplayz/TravBot/blob/dev/commands/shorten.js).
* I renovated most of the commands.

Regarding the three new commands, I would like to explain their usage.

## Poll

Using poll, you can interact with the users by creating polls which use the Discord reaction system.

Users can create a poll by using `.poll [question]`.

![poll](https://i.imgur.com/UmumLaI.png "Poll Demo")

## Urban

Urban can be used to easily look op definitions on Urban Dictionary. It uses the `relevant-urban` library.

Users can query Urban Dictionary by using `.urban [word]`.

![urban](https://i.imgur.com/wPwe1pN.png "Urban demo")

## Shorten

Shorten can be used to quickly shorten a link. Easy for sharing a website or file with an extremely long link.

Users can shorten a link by using `.shorten [URL]`.

![shorten](https://i.imgur.com/6gByamt.png "Shorten demo")
