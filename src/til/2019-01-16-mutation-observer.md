---
title: 'MutationObserver is neat'
category: 'JavaScript'
date: 2019-01-16
---

You can observe changes in the DOM by creating a [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

I looked into this when I was theorizing how to performantly attach `onMount`/`onUnmount` based events onto DOM nodes.

```js
// Create a MutationObserver instance
const mutationObserver = new MutationObserver(function(mutations) {
  // Do a thing for every mutation
  mutations.forEach(onMutation)
})

// Start observing a DOM node. In this case, the root document
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true,
})

const onMutation = mutation => {
  // There's a couple of things mutation provides.
  // For this example, we only care about add/remove.
  const { addedNodes, removedNodes } = mutation

  for (let i = 0, len = addedNodes.length; i < len; i++) {
    const node = addedNodes[i]
    // Do something on a match
    if (isElement(node) && node.matches('.showtime')) {
      console.log('mounted!')
    }
  }

  for (let i = 0, len = removedNodes.length; i < len; i++) {
    const node = removedNodes[i]
    // Do something on a match
    if (isElement(node) && node.matches('.showtime')) {
      console.log('unmounted!')
    }

    // Self Cleanup, assuming there's a root node
    if (isElement(node) && node.matches('#root')) {
      mutationObserver.disconnect()
    }
  }
}

// Util function
function isElement(node) {
  return node && node.nodeType === 1
}
```

[CodeSandbox example](https://codesandbox.io/s/8zl24kpyq9)!
