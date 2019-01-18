---
title: 'Dangerously Undefining (Almost) Everything'
category: 'JavaScript'
date: 2019-01-18
---

In JavaScript, you can set global things (very important things) to others value (like `null` or `undefined`).

As a general rule, I **never** touch core Objects, prototypes, or methods. Unfortunately adding to or modifying core prototypes (like `String.prototype` or `Array.prototype`) are suggested answers you'd find on sites like StackOverflow.

So you can do things like...

```
Array.prototype.forEach = undefined
```

Which removes the `forEach` method for `Array`.

Heck, you can even do this (below) and remove `Array` all together:

```
window.Array = undefined
```

In fact, you can this with a bunch of stuff. Curiously though, you can't do this with `window.document` or `window` itself.

Probably for the best anyway 😂.