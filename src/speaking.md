---
layout: "post"
title: "Speaking"
topCaption: "Ahem… 🎙"
---

<div class='u-mrg-v-10'>
  {% for post in site.data.speaking %}
    {% assign date = post.date | date: "%B %d, %Y" %}
    {% Post
      category: post.event
      excerpt: date
      link: post.url
      title: post.title
    %}
  {% endfor %}
</div>
