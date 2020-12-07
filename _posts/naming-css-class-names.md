---
date: "2019-01-14"
title: "Naming CSS Class Names"
category: "CSS"
draft: false
topCaption: "😅 Um... Box?"
image: "/assets/posts/naming-things-is-hard.png"
featuredImage: "/assets/posts/naming-things-is-hard.png"
---

You're working on some UI. It's a series of CSS problems. You figured out the styles required to solve it. All you gotta do is create a couple of new CSS class names.

<!-- more -->

You pause for a bit... and ask to yourself...

> "What the heck do I call this stupid thing!"

As designers and developers, we've all been there. I've seen this happen so many times. When coaching or pairing with others, I'll ask:

"Ok! What should we name this?"

I've heard responses like:

"Box?" "Main?" "Element?" "Box... Element?"

These, although technically not wrong, are unfortunately vague and unhelpful.

**Naming things is hard.**

I know the feels. I too experienced this from time to time. Thankfully, I've spent enough time naming things to know what works - especially for complex or larger code bases.

The next time you find yourself in a "WTF do I name this thing!" type situation, try the following.

Take a deep breath. Clear your mind. Think of keywords describing what the thing is, where it's located, and how it's being used.

Give yourself 15-30 seconds to scribble down those keywords. It's fine if the words don't make sense. Just write something down. Anything!

**Times up!** Pick the best words and mash them together.

Call it `.AppSecondaryPricingPageCallToActionFooterNewsletterBox` if you have to.

Is it verbose? Yes.<br />
Is it ugly? Most definitely.<br />
Is it clear? **Absolutely**.

Remember, you can always refactor it later! Maybe when the name annoys you enough or when you randomly come up with something better. When that time comes, maybe 2 or 6 months later, you'll be glad that `.AppSecondaryPricingPageCallToActionFooterNewsletterBox` was quick to find and easy to understand.

When in doubt, favour **clarity** over **cleverness**.

---

Note: If your team/company has guidelines on how you should name your CSS class names, please _follow them_. These tips are for folks who have the flexibility to define/challenge existing conventions.

---

P.S. You may have noticed I use PascalCase for my class name examples. I have thoughts on this. Will write about this in a future blog post. Stay tuned!
