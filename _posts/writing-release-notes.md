---
date: '2019-01-09'
title: 'Writing Release Notes'
category: 'Engineering'
draft: false
topCaption: '"Bug Fixes. The End."'
---

If you work on a library or module (be it open sourced or closed), writing really good (at least adequate) release notes is one of the most important things you can do.

<!-- more -->

(Other than perhaps documentation and the code itself. Obvi.)

I think it's interesting that many open-source libraries and tools, even those published by some of my favourite **Open Sourcerers**, seem to lack adequate release notes (or any release notes at all).

![Releases without notes](/assets/posts/release-notes-empty.png)

(To avoid picking on anyone, the above screenshot is from one of my repos. Haha.)

**I get it though. I totally get it.**

Writing documentation is the worst - at least that's how I feel most of the time. And writing release notes is almost like writing documentation.

At Help Scout, I maintain a [bunch of libraries](https://github.com/search?q=topic%3Aopen-source+org%3Ahelpscout+fork%3Atrue) (all open source). Unless the project is in an experimental phase, I try to ensure that every single version bump is accompanied by release notes.

This may seem like a lot of work. Writing and publishing notes for all the various releases for all the various projects. In reality, it isn't! In fact, **I most never directly write release notes**.

Over time, I've learned to streamline the process of reviewing, documenting, and publishing my updates. In this post, I'm going to share the release notes workflow that I found works best for me.

The process can be broken down into three main parts:

-   The Git Commit(s)
-   The Pull Request
-   The Release Notes

### The Git Commit(s)

This is probably the most a critical part of the entire process.

I like to be [pretty thorough](https://github.com/helpscout/fancy/commit/952152b25361b10aced2e903c78482bdefade224) with my Git commits. This includes writing several paragraphs, including documentation and/or code samples. Not only do I think it's incredibly useful from a Git standpoint, but consider this...

If you have really good Git commits, you can literally **copy and paste** those Git commits as your Pull Request description!

### The Pull request

Let's pretend you've written some amazing Git commits. Of course you have, because you're awesome.

You've copied and pasted them into your Pull Request description. Not only that, but you've also taken the time to take screenshots or even capture GIFs of the updates.

In a way, I like to think of Pull Requests as being mini blog posts. As such, I do my best to be as thorough as possible, without going overboard to the point where it's boring or painful to read.

Fun Tip: I recommend formatting your description in a way that is **not** Pull Request specific. By that, I mean you should favour words like "update", instead of words like "Pull Request" or "PR".

Example:

**Non-Pull Request specific**<br />
"This _update_ fixes the interaction issues with the `Button` component when it is rendered within a `Form`."

**Pull Request specific**<br />
"This _PR_ fixes the interaction issues with the `Button` component when it is rendered within a `Form`."

This helps set us up for our next and final trick!

### The Release Notes

Awesome! Your changes have been tested, approved, merged, built, and released 🎉. Now it's time to share your changes with the world.

Remember that handy trick we used to create the Pull Request? We can do the same thing here! Simply **copy** your Pull Request description and **paste** it as your release notes.

And... **That's it!**

With this workflow, you'll have wonderfully informative and helpful Git commits, Pull Request descriptions, and release notes.

Whether you give this workflow a shot or not, I encourage you to consider spending a little bit of time to write something (anything) the next time you publish a release - especially if it can disrupt experiences, break applications, or set things on fire.
