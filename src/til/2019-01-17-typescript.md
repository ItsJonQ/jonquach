---
title: 'Infering Types in Switch Statements'
category: 'TypeScript'
date: 2019-01-17
---

You can infer types in TypeScript using a plain ol' [Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement.

This is very handy for Redux implementations, or just reducers in general.

```js
// Create the base action type (interface)
interface Action {
  type: string
}

// Extends the base Action with desired actions
// Use readonly type to define the value for inference
class Yes implements Action {
  readonly type = 'YES'
  constructor(public payload: string) {}
}

class No implements Action {
  readonly type = 'NO'
  constructor(public payload: string) {}
}

class Maybe implements Action {
  readonly type = 'MAYBE'
  constructor(public payload: string) {}
}

// Create an union/enum with the accepted action types
type Actions = Yes | No | Maybe

// In this example redux-like reducer, the Actions type is defined as the
// argument. Each switch case will now be aware of the support types.
function reducer(action: Actions) {
  switch(action) {
    case 'YES': {
      return { ... }
    }
    case 'NO': {
      return { ... }
    }
    case 'MAYBE': {
      return { ... }
    }
    default: {
      return { ... }
    }
  }
}
```

I picked this up when going through the [Practical Advanced TypeScript](https://egghead.io/courses/practical-advanced-typescript) course on [Egg Head](https://egghead.io).
