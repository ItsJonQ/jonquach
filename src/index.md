---
layout: "default"
title: "Hello"
---

{% Section %}
  {% Framed %}
    <div class='u-mrg-b-5'>
      {% Heading small: true, muted: true %}
        Hello
      {% endHeading %}
    </div>
    <h1 class='tx-h3 tx-h2@md tx-h1@lg'>
      I'm Q.<br />
      A designer & developer,<br />
      specializing in UI system<br />
      design and mascots!
    </h1>
  {% endFramed %}
{% endSection %}


{% Section %}
  {% CopyContainer %}
    {% Heading class: 'u-mrg-b-6' small: true, em: true %}
      Latest Post
    {% endHeading %}

    {% assign post = site.posts.first %}
    {% assign excerpt = post.excerpt | strip_html %}
    {% Post
      category: post.categories.first
      excerpt: excerpt
      link: post.url
      title: post.title
    %}
  {% endCopyContainer %}
{% endSection %}
