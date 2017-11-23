---
layout: "post"
title: "Styleguide"
topCaption: "So stylish. Such fasion 💅"
dropCap: false
---

{% Section %}
  {% Text size: 'lead' %}
    Welcome to the (mini) styleguide for my site! If you're curious about how all this stuff is coded up, check out the {% Link href: 'https://github.com/itsjonq/jonquach' %}source{% endLink %}.
  {% endText %}
{% endSection %}

<hr />
<div class='u-pad-v-6'></div>

{% Heading class: 'u-mrg-b-6' small: true em: true %}
  Typography
{% endHeading %}

{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true muted: true %}
    Headings.
  {% endHeading %}

  <h1>H1 heading</h1>
  <h2>H2 heading</h2>
  <h3>H3 heading</h3>
  <h4>H4 heading</h4>
  <h5>H5 heading</h5>
  <h6>H6 heading</h6>
{% endSection %}


{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true muted: true %}
    Blockquote.
  {% endHeading %}

  <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta, massa id maximus facilisis, lacus augue egestas mi, vulputate pharetra diam sem ac purus.</blockquote>
{% endSection %}


{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true muted: true %}
    Paragraph.
  {% endHeading %}

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta, massa id maximus facilisis, lacus augue egestas mi, vulputate pharetra diam sem ac purus.</p>
{% endSection %}

{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true muted: true %}
    Opening.
  {% endHeading %}
  {% CopyContainer dropCap: true %}
    <p>
      First word.
    </p>
  {% endCopyContainer %}
{% endSection %}

{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true muted: true %}
    Body text.
  {% endHeading %}
  <p>
    Normal. <strong>Bold</strong>. <em>Emphasis</em>. <a>Link</a>.
  </p>
{% endSection %}

{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true muted: true %}
    Text shades.
  {% endHeading %}
  <p>
    Normal .
    {% Text subtle: true %}Subtle{% endText %}.
    {% Text muted: true %}Muted{% endText %}.
    {% Text faint: true %}Faint{% endText %}.
  </p>
{% endSection %}

{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true muted: true %}
    Family.
  {% endHeading %}
  <p>
    Sans .
    {% Text serif: true %}Serif{% endText %}.
    {% Text code: true %}Code{% endText %}.
  </p>
{% endSection %}

{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true muted: true %}
    Images.
  {% endHeading %}
  {% CopyContainer %}
    <p>
      <img src='http://lorempixel.com/400/200/' />
    </p>
  {% endCopyContainer %}
{% endSection %}


---


{% Section %}
  {% Heading class: 'u-mrg-b-6' small: true, em: true %}
    Post.
  {% endHeading %}
  {% CopyContainer %}
    {% Post
      category: 'Category',
      title: 'Lorem ipsum dolor sit amet'
      excerpt: 'Consectetur adipiscing elit. Morbi porta, massa id maximus facilisis, lacus augue egestas mi, vulputate pharetra diam sem ac purus.'
    %}
  {% endCopyContainer %}
{% endSection %}
