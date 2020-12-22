---
date: "2020-09-21"
title: "Creating a Context System"
category: "Design Systems"
topCaption: "👑 Context is King."
draft: false
image: "/assets/posts/creating-a-context-system/featured.png"
featuredImage: "/assets/posts/creating-a-context-system/featured.png"
---

One of the more “abstract” but important and powerful systems within [G2 Components](https://github.com/itsjonq/g2) is it’s “Context” system. Given the name, those familiar with libraries like React may immediately think of `React.Context`. It’s kinda close, but it’s much much more than that.

<!-- more -->

The goal of G2’s Context system is to provide “awareness” to the components. Components that are “connected” to this system can become “aware” of each other, and can modify their behaviours depending on how they’re composed together. A simple example would be how a `MenuItem` may automatically render a right chevron icon when it is used within a link, because it knows that it should render as link.

This is still a bit abstract (haha! Sorry)…

Let’s try to find some non Component-library real-world examples to help visualize these relationships.

The best examples that mirror G2’s Context systems can be found in the world of video games. Take the highly acclaimed The [Legend of Zelda: Breath of the Wild](https://www.zelda.com/breath-of-the-wild/) on the Nintendo Switch. Within the gaming industry, devs and designers marvelled at Zelda for it’s “systemic” game design.

### Systemic Design

A “systemic” game has many characteristics. One would be the game’s rules for how objects can interact with each other and how they can be affected by their environments.

For example, let’s take the humble bow and arrow.

A game’s rule may be…
If you shoot an arrow through fire, the arrow becomes a flaming arrow.
If a flaming arrow hits an object, like a plank of wood, that object is set on fire.

![Illustration of a “flaming” arrow firing at a plank of wood.](/assets/posts/creating-a-context-system/fire-plank.png)

These behavioural rules are built directly into the game objects. Things happen without explicit instructions from the player. These mechanics and systems allow for interesting and organic gameplay moments, adding to the expansive open-world experiences of Zelda.

Mark Brown of the Game Maker’s Toolkit series highlights these systems in his video “[The Rise of the Systematic Game](https://www.youtube.com/watch?v=SnpAAX9CkIc)”. I highly recommend you check it out (both the video and the channel) if you’re interested in game design!

### Systemic UI

The idea that something may behave differently based on context, and for it to happen (almost) automatically is a **powerful** one. And it’s one that can directly applied to UI design and development.

![Illustration of instructions being “read” to a component.](/assets/posts/creating-a-context-system/component-instructions.png)

Without a Context system, developers would have to dictate bindings and rules for individual components anytime they’re used within application code. This is often verbose, clunky, and leads to fragmented experiences and side-effects as the application grows.

![Illustration of instructions being part of a component’s DNA.](/assets/posts/creating-a-context-system/component-dna.png)

With a Context system, having these rules and relationships encapsulated and built into the many tiny UI component means far less logic and glue-coded is needed to coordinate these behaviours in an application (like WordPress's Gutenberg).

![Illustration of a component behaving differently when used in different parts of an application.](/assets/posts/creating-a-context-system/component-context.png)

Not only that, but the amount of (base) UI components can be reduced, as we can use the same component in multiple context, and their aesthetics and behaviours can adjust to match. Using game design again as an example, it’s like how a single “tree” can be added and used in different “forests”. This tree’s behaviour would adapt to the rules and environment of the forest.

### Customization

A neat feature of the Context system is the ability to customize the behaviour of components when the time comes. Let’s be honest… The time will always come, because we always need to adjust or tweak something for reasons.

Rather than hacking together something to crawl, inspect, and hijack UI components, which is the typical way we’d adjust things (unfortunately), we can create rules such that changes all Button components within a certain area to be size: small. This workflow is very similar to the cascading style rule nature of CSS. In fact, the Context system was heavily inspired by the rendering mechanics of CSS! The difference is in addition to adjusting aesthetics, we are also able to adjust and refine functionality.

### In Conclusion

G2’s Context system adds awareness to all of the components, allowing them to automatically adapt their behaviours depending on how they’re used and where they’re rendered. A lot of the aesthetic and functional rules and logic have already been considered and implemented. This allows you, the designer/developer, to more eloquently compose varying UI parts together to create new and wonderful experiences for users.

If you’re curious about G2’s Context system, you can [check it out here on Github](https://github.com/ItsJonQ/g2/tree/master/packages/context)!

---

Originally posted on the [G2 Components project blog](https://g2components.wordpress.com/2020/09/21/creating-a-context-system/).
