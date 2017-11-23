---
layout: "default"
title: "Hello"
topCaption: "Hello 👋"
---

{% Section %}
  {% template post/topCaption.html post: page %}{% endtemplate %}
  {% Framed %}
    <h1 class='tx-h3 tx-h2@sm tx-h1@lg'>
      I'm Q.<br />
      A designer & developer,<br />
      specializing in UI system<br />
      design and mascots!
    </h1>
    {% QFace %}
  {% endFramed %}
{% endSection %}

{% Section %}
  {% CopyContainer %}
    <div>
      <p>
        {% Text size: 'lead' %}
          I'm a <strong>Design Engineer</strong> at {% Link href: 'https://www.helpscout.net/', subtle: true %}<strong>Help Scout</strong>{% endLink %}, where I create tools, frameworks, processes, and smiles.
        {% endText %}
      </p>
    </div>
  {% endCopyContainer %}
{% endSection %}
