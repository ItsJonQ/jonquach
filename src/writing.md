---
title: "Writing"
topCaption: "Scribbles… ✍️"
---

{% for post in site.posts %}
  {% assign excerpt = post.excerpt | strip_html %}
  {% if forloop.first == true %}
{% Section %}
  {% template post/topCaption.html post: page %}{% endtemplate %}
  {% Framed %}
    {% Heading em: true, small: true, class: 'u-mrg-b-6' %}
      Latest Post
    {% endHeading %}
    {% CopyContainer %}
      {% Post
        featured: true
        category: post.categories.first
        excerpt: excerpt
        link: post.url
        title: post.title
      %}
    {% endCopyContainer %}
  {% endFramed %}
{% endSection %}
  {% else %}
{% Post
  category: post.categories.first
  excerpt: excerpt
  link: post.url
  title: post.title
%}
  {% endif %}
{% endfor %}
