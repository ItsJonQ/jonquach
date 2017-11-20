---
layout: "copy"
title: "Styleguide"
---

{% Heading class: 'u-mrg-b-6' small: true %}
  <em>Typography</em>
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
  {% CopyContainer %}
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
