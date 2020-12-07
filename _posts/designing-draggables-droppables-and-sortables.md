---
date: "2020-08-17"
title: "Designing Draggables, Droppables, and Sortables"
category: "Component Design"
topCaption: "👆 Drag it, drop it, sort it."
draft: false
image: "/assets/posts/designing-draggables-droppables-and-sortables/featured.png"
featuredImage: "/assets/posts/designing-draggables-droppables-and-sortables/featured.png"
---

Drag gestures are becoming increasingly more popular in Web UIs – and for good reason! They’re super easy to use!

<!-- more -->

They extend the fluid “life-like” experience we’ve become accustomed to from the mobile/tablet world. Therefore, it’s important that this library includes a solid and flexible drag / drop / sort system.

The funny thing is… Drag/Sort systems are almost always excluded from Component libraries. The main reason is… well… because they’re heavy and complicated (aka. really hard!). I believe taking on this complexity is worth it as we’ll be able to provide users with an easy to use + powerful way to create highly interactive experiences – be that in Gutenberg’s UI, custom Block controls, WP Admin, and beyond.

### Identifying Features

![Features / use case illustration](/assets/posts/designing-draggables-droppables-and-sortables/use-cases.png)

An illustration of 4 drag system features: Dropzones, cross-app, sorting, and cross-context.
From my research, experience, and experiments, I’ve identified 4 primary features (or use cases) that a draggable system should have:

#### Dropzones

1. Cross-application
2. Sorting
3. Cross-context
4. Dropzones

Dropzones are typically used to as areas (or targets) that allow users to drop files into. For example, dropping a .png image file to upload to a server. The draggable element typically comes from outside the browser, like from a user’s desktop. Dropzones may also accommodate the dragging and dropping of non-file elements from within the app.

#### Cross-Application

Cross-app drag/drop interactions enable users to drag things from the browser and drop them into a separate application. For example, dragging a chunk of content and pasting it into a separate Notes application.

#### Sorting

Sorting enables users to drag items (typically within a list/grid) to re-arrange the order of things. The sorting feedback is often communicated with animations that visualize items shifting into their new positions. As an added (and more challenging) bonus, sorting should accommodate nested lists.

#### Cross-Context

Cross-context interactions enable users to drag/drop elements from different “types”. The best example of this would be a Kanban style board (e.g. Trello), where users can drag/drop cards into different columns.

Within the context of React (and JavaScript), there are libraries that support one or some of these features, but not all. To provide an elegant and cohesive drag experience, we have to provide singular components and/or APIs that can accommodate these 4 major features. This may mean stitching together several libraries (under the hood) to achieve this effect. Features aside, the drag system must also accommodate accessibility concerns, which is often lacking or omitted from drag/drop libraries.

(One of the solutions I evaluated, [React Beautiful DND](https://github.com/atlassian/react-beautiful-dnd) has tremendous [a11y support](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/accessibility.md)!)

### Accessibility Considerations

![Accessibility considerations illustration](/assets/posts/designing-draggables-droppables-and-sortables/a11y.png)

An illustration indicating screen reader, dragless actions, and reduced motion.
There are several accessibility concerns the drag system should support (out-of-the-box):

#### Screen-reader support

Dragless actions (e.g. clicking or using keyboard only for interactions)
Reduced motion
Screen Reader Support
The drag system should have proper aria descriptions, tab handling, and identifiers. It would be great to support the announcements (for voiceovers) during various lifecycle events during the drag/drop experience.

#### Dragless Actions

Users should be able to perform all of the drag interactions without actually having to drag anything. This may mean providing on-screen buttons, allowing for actions to be triggered by mouse clicks. It may also mean having deliberate focus interactions, allowing for keyboard-only interaction.

#### Reduced Motion

Users should be able to reduce/disable animations from interactions like drag/sort.

#### Experiments

I’ve evaluated a handful of libraries, including:

- Sortable.js
- React Sortable HOC
- React DND
- React Beautiful DND

The best solution, in my opinion, would be React Beautiful DND, as it accommodates most of the features and a11y concerns outlined above (but not all). My hope is that is is flexible enough to serve as the foundations of an app-wide drag/drop system.

One example I created with React Beautiful DND would be a simple mock “Block Builder”:

A GIF demonstrating cross-context and sortable drag interactions in a mock “block builder”.
([Link to the live demo](https://g2-components.xyz/iframe.html?id=components-draggable--drag-builder))

It demonstrates how blocks can be dragged into a content area, as well as how content can be re-ordered through drag interactions.

### What’s Next

We are still incredibly early in researching and refining a drag system. The research has been helpful in identifying core features and must-have a11y concerns. Beyond this, there’s also a lot of considerations and care we must put into the design of drag experiences as well as component API.

It should feel easy for designers and devs to work with and implement a drag/drop interaction.

It should feel even easier for users to use these experiences.

P.S. Here’s a link to the [original Github issue](https://github.com/ItsJonQ/g2/issues/23).

---

Originally posted on the [G2 Components project blog](https://g2components.wordpress.com/2020/08/17/designing-draggables-droppables-and-sortables/).
