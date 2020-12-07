---
title: 'What it means to be a Design Engineer'
date: '2017-12-08'
category: 'Product'
topCaption: '🎨 + 💻?'
draft: false
---

Recently, I had a catch-up chat with a product designer colleague from work (his name is [Buzz](https://www.buzzusborne.com/) and he is awesome). One of the things we talked about was the various things I did at [Help Scout](https://www.helpscout.net/).

<!-- more -->

He was specifically curious what skills, experience, or traits one would need to do what I do on a daily basis. In other words, my role as the team's Design Engineer. This led me thinking…

> Welp. What in the hecky is a "Design Engineer" anyway? (In the context of product design).

I first heard of this role (a couple of years back) when I listened to an episode of ["Design Details"](https://designdetails.simplecast.fm/112), featuring [Daniel Eden](https://daneden.me/) as a guest. Dan by the way, is no stranger to the world of design (or engineering). At the time of this podcast episode, he was a Designer Engineer at Dropbox. He also created [Animate.css](https://github.com/daneden/animate.css/), which was (and may be still), the go to CSS animation library at the time. It's got over 47K stars on Github for Christmas sake.

On this episode, Dan talked about several interesting topics: open sourcing, learning and using Vim (which coincidentally, was the thing that inspired me to finally learn it), and the design/engineering challenges he faced at Dropbox (and what he did to try to solve it).

You see, Dan doesn't just design things. He also codes things! (Hey, just like me!).

I think there's a distinct difference between someone who is a designer that **happens** to occassionally dabble a bit in code, or a developer who **happens** to every-now-and-then dabble a Sketch… Versus someone who is totally comfortable and proficient in both fields. Being experienced in both disciplines is hard! However, an indirect benefit is that it provides a world of insight into how folks on either side of the product design spectrum works (and think).

Dan knew this. Using this insight, he create [Scooter.scss](https://github.com/dropbox/scooter), Dropbox's SCSS framework. (Note: As of this post, Dan is no longer with Dropbox and the Scooter Github repo hasn't been updated in 2 years). At the time, and even for modern CS standards, Scooter was an incredibly well thought-out design system. It was built with developer inspired design patterns. Something that allowed developers to extend and scale. All the while making it familiar and accessible to designers, especially to the folks who've used (and depend on) frameworks like Bootstrap.

At this point in my life, I was like Dan (except much less experienced). I started off as a graphic designer, then moved into web, and eventually product design. I had also learned code, mostly Javascript, and had experience with a bunch of frameworks and libraries (jQuery, Lodash, Backbone, and a bit of Angular/Ember). Scooter was the thing that inspired me to look at front-end code (specifically CSS) differently.

I had already started experimenting with this concept. I had become extremely familiar with Bootstrap (I read through their entire source code. Multiple times.), and had outgrown Bootstrap - Which, by the way, I still respect and love. I had a need to figure out how to craft a more flexible solution that worked at scale. By scale, I meant something that worked across multiple web properties. Something that was easily customizable. And most importantly, something that was easy to **incrementally** implement without breaking **everything**. For the most part, I felt like Scooter did this. So it was a no-brainer I had used it as my **primary source** for how to build a robust SCSS system.

> Scooter became my Bootstrap.

At my previous company, I was fortunate enough to work with some very friendly and talented front-end engineers. They embraced and encouraged my grandiose CSS ambitions of creating something custom that would scale. Because of this, I became more and more involved with the front-end code.

I learned, first-hand, about component design. I learned about state handling. I learned about data flow. I learned how data and states can affect the various bits of UI in a bunch of different (and sometimes unpredictable) ways. Working closely with these guys allowed me to create a custom from-scratch CSS framework that worked with their (Ember) code. Admittedly, It took a bit to get there. I made boo boos, but I learned from them. Before I knew it, I had created my own "Scooter.scss".

It was an SCSS framework called "Fly", and it leveraged the things I had learned from Bootstrap and Scooter, combined with was a series of approaches and best practices that I had developed on my own. It worked. It was great! In fact, my Fly CSS framework is still around today, I was told pretty recently that one of the Ember engineers there still use and rely on it almost every day.

So! With all that said… What does it mean to be a Design Engineer?

First off, being a Design Engineer shouldn't mean you're just okay at both disciplines. This isn't a "jack of all trades, master of none" kind of thing. You should be a master at both (or master'ish at both). In addition to having first-hand design and dev chops, ideally, you should have experience working with other designers and developers. This allows you to get a better sense of how others think and work. You also have to be… excuse the typical resume buzzword I'm about to drop, an excellent communicator. Period.

As a Design Engineer, you are rare. Ideas and concepts from both professions seem straight forward to you. You just get it. No biggy. But, you should know that it's completely alien for folks working in opposite teams.

> Developers are scared of pixels, and designers are scared of command line.

Because of this division, things get miscommunicated. **All the time**. You as a Design Engineer, have the ability, no, the **responsibility** to streamline how both teams communicate and work with each other. You are the bridge between both worlds. You know how to engineer solutions that help the design team soar. And you know how to design solutions to help the dev team shine.

You deliver excellence, by helping others deliver excellence (faster and better). You're there to teach folks in either teams to embrace foreign concepts. You're there to become the beacon of hope when someone on the design team is struggling with "npm install", or someone on dev team spent hours fidgeting with CSS.

So Buzz, and internet strangers, all this (and a bag of potato chips) is what it means to be a Design Engineer.

![Design Engineer. Yes!](/assets/posts/me_irl/design-engineer-yes.jpg)
