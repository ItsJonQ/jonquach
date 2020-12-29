---
date: "2020-10-23"
title: "Creating a Variable System"
category: "Design Systems"
topCaption: "⏱ Ready. Get Set. Go."
draft: false
image: "/assets/posts/creating-a-variable-system/featured.png"
featuredImage: "/assets/posts/creating-a-variable-system/featured.png"
---

Working with globalized variables maybe one of the trickier aspects to any design or code project. It’s sort of like accumulating a collection of a particular collectable, say [Pokemon cards](https://www.pokemon.com/us/pokemon-tcg/). It’s cool that you can collect these cards! I mean, who wouldn’t want an original [1st edition base set Charizard](https://www.ebay.ca/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=1st+edition+charizard&_sacat=0).

<!-- more -->

As your collection grows, without some sort of organization system, say a binder, it may become difficult to find cards you want. The same can be said about variables. It’s not enough to support it as a feature. You also have to encourage or provide a framework for maintaining them.
When it comes to styles, there are many ways to create, manage, and share variables. Although CSS variables have more only recently become a thing, using variables to control styles isn’t a new concept. Folks working with languages like Sass/Less have enjoyed the benefits of variables for many years. Even with the powerful variable support of Sass, projects can evolve in a manner that requires contributors to peck and hunt for these values.

It’s something I’ve experienced many times before spanning across many projects. There is a bright side of enduring many hours of global searching and diving into debugging tools. That is, it’s helped provide me with some insight and ideas on how this can be done better. If I had to boil it down to a couple of ideas, it would be to centralize and to use a “getter” (more on that later).

### Centralize

I found it most effective to keep all your global/system variables in a single place. It doesn’t necessarily have to be a single file. In fact, it’s probably better to have a collection of smaller well-named files. As long as there’s a single happy folder where these variables can live. Going back to our Pokemon card analogy. It would be like keeping all of your important and prized cards in a single binder. Maybe ordered by series, rarity, colour, or whatever aspect suits your style.

Having things in a single place, a single “source of truth”, makes it easier for your future self, and more importantly, other contributors and users to find what they need.

### The “Getter”

![Getter illustration](/assets/posts/creating-a-variable-system/get.png)

Now that your system variables are in a centralized place, you need a way to “get” them and use them. This is where a “getter” really comes in handy.

The implementation may be different depending on the programming language you’re working with. For example, there’s no native way to “get” CSS variables from a set collection. You have to know the exact name of the variable when you’re using the CSS var function. This means, you’ll have to create your own “getter” function to do this, which can be done in JavaScript and Sass.

There are a couple of tiny but very important details for this “get” function.

One of the best features is that it allows you to “remap” how your variables are named.

It’s common to prefix globalized CSS variables with something to avoid accidental overrides, especially when integrating multiple style systems into a single environment.

So you may have variables that are named `my-project-v2-color-main`. With a “getter” function, you can adjust it so that you only need to provide `color-main`, and the function will take care of filling out the rest. Maybe you prefer camelCase. You can configure your “get” function to transform `colorMain` to the underlying `my-project-v2-color-main`.

This makes your variable references much easier to read and to remember!

A bonus feature for this is that this abstraction allows for the underlying variable to be renamed. That is, without affecting hundreds of files. Maybe you’ve decided to change the prefix from `my-project-v2` to `mpv2-`. You can do this and all of your variable “get” references will still work.

The ability to make adjustments between the “get” reference and the final output cannot be understated.

G2’s **entire** Style System relies on this fundamental mechanic.

Below is a compact example showing how variables are (centrally) defined, how they’re retrieved, and the resulting CSS output.

![A simplified example of how G2’s variable flows from a central definition to CSS output.](/assets/posts/creating-a-variable-system/code-snippet.png)

Under the hood, the “get” function goes through a series of transformations to handle prefixing and wrapping the values in `var()`.

### Tooling

![Design tokens illustration](/assets/posts/creating-a-variable-system/tokens.png)

Centralizing your variables unlocks the ability to dramatically improve your development workflow with tooling. If your variables exist as a common data type (e.g. a JSON object) it opens up the possibility of using these variables in interesting and valuable ways.

It could be used to generate variable values in other formats for other applications, like creating a color palette in Figma. Another use case would be for documentation generators to tap into this data and render out a table with all of the values.

In the case of G2, that data is used to create types (TypeScript) which can power autocomplete features in Code Editors like Visual Studio Code. These values show up automatically as soon as you use the “get” function. Imagine having all of the values at the power of your fingertips, presented in built-in autocomplete dropdown.

![Screenshot of G2’s “get” function with autocomplete features in VS Code.](/assets/posts/creating-a-variable-system/vscode.png)

These are just some ideas of how your centralized variables can be used to complement and enhance your project’s design and development experience.

### Conclusion

In my opinion, variables are critical for any medium to large scale design/code project. It’s not enough for you to have them. You must provide support for how your variables can be reliably referenced while anticipating modifications in the not too distant future.

Centralizing all of your variables in a single place makes them much easier to find and work with, especially for folks who are unfamiliar with your project. Creating a “getter” function enables the opportunity to streamline your workflow, such as allowing for shorter names that may be easier to remember. Lastly, having your variables in a common format allows them to be used outside of the codebase in interesting, helpful, and delightful ways.

P.S. Here’s the source code for [G2’s centralize variables](https://github.com/ItsJonQ/g2/blob/master/packages/styles/src/theme/config.js)!

---

Originally posted on the [G2 Components project blog](https://g2components.wordpress.com/2020/10/23/creating-a-variable-system/).
