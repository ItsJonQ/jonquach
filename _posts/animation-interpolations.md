---
date: "2020-08-19"
title: "Animation Interpolations"
category: "Component Design"
topCaption: "🎞 From this, to that."
draft: false
image: "/assets/posts/animation-interpolations/featured.png"
featuredImage: "/assets/posts/animation-interpolations/featured.png"
---

In other words… smoothly transitioning from one thing to another thing! In traditional animation (think the good ol’ hand drawn stuff), this process of transitioning between two key poses (or key frames) is known as [inbetweening](https://en.wikipedia.org/wiki/Inbetweening#:~:text=Inbetweening%20or%20tweening%20is%20a,smoothly%20into%20the%20second%20image.).

<!-- more -->

We can use this principle from the wonderful world of animation and apply it to the web interfaces we’re building to achieve some really amazing effects!

### The Parts

In the context of code, an interpolation is made up of a couple of parts. To achieve a sweet animated interpolation, we have to familiarize with these parts (it’s not too hard, I promise!)

- **InputValue** – The initial (or current) value
- **InputRange** – A range for the input value
- **OutputRange** – A range for the output (transformed) value

Right, I know the above doesn’t explain much, but it’s important to remember these terms. Let’s go with an example.

Let’s pretend, we want to transition the background color from red to blue, based on how much the user has scrolled. We only want this effect to apply from the top to about 200px down the page (Fancy, right?!).

The amount scrolled would be the **InputValue**. The top of the page (`0px`) to where we want it to end (`200px`) would be the **InputRange**. Lastly, the red and blue values would be our **OutputRange**.

These values can be visualized like so:

![An illustration visualizing an input value (100), an input range (0 to 200), an output range (a blend of red to blue), and the result (purple).](/assets/posts/animation-interpolations/input-output.png)

If the user has scrolled `100px`, based on our `[0, 200]` range, the resulting color should be a mixture of red and blue.

**That’s it**! That’s animation interpolation!

### Examples

Let’s take our above example of transitioning between red to blue (OutputRange) based on where we position our mouse (Input). If our mouse is on the leftest side of the screen, it should be pure red. If our mouse is the rightest side of the screen, it should be pure blue (InputRange). The interpolation function will **MATH** out the rest, giving us a slick and smooth color transitioning effect:

![A circle transitioning from red to blue (based on mouse position).](/assets/posts/animation-interpolations/interpolation-mouse-red-blue.gif)

[Link to live code example](https://codesandbox.io/s/interpolation-color-example-hzeyg?file=/src/App.js)

Color transitioning circles are neat. But how’s about a more… practical?… example.

An interaction that’s become common in the world of mobile is to smoothly transition text or images as the user scrolls. We can apply the same interpolation technique to achieve just that!

![A Cover image scaling and fading as the content is scrolled.](/assets/posts/animation-interpolations/scroll-interpolation.gif)

[Link to live code example](https://codesandbox.io/s/interpolation-example-vserl?file=/src/App.js)

In the above example, the (Cover) image grows and fades as the user scrolls. The Title text also grows the further down the user scrolls.

Mobile apps use this technique all the time. Now you know how your favourite apps achieve liquid smooth, hyper slick, and super responsive interactions.

### Give it a go

![Screenshot of the CodeSandbox example](/assets/posts/animation-interpolations/code-sandbox.png)

I’ve created a CodeSandbox where you can play around with the red/blue ball. Under the code comment “Change these colors”, add your own colors to see how you can make the ball magically transition as you move your mouse!

[Click here to check out the CodeSandbox](https://codesandbox.io/s/interpolation-color-example-hzeyg?file=/src/App.js)

If you’re interested in seeing how the (gasp) MATH works under the hood, feel free to [peek at the source code](https://github.com/ItsJonQ/g2/blob/master/packages/utils/src/math/interpolate.js). Otherwise, just use the `interpolate()` function from `@wp-g2/utils` and start making things move!

P.S. If you just wanted a no-frills, dependency-free version of the `interpolate()` function code for your project, I’ve prepared a [gist](https://gist.github.com/ItsJonQ/a62257fcbe64e15a8fd0937463fdbc5b) for that.

---

Originally posted on the [G2 Components project blog](https://g2components.wordpress.com/2020/08/19/animation-interpolations/).
