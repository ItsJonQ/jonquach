---
layout: "default"
title: "Hello"
topCaption: "Hello 👋"
folks:
  - image: "logo--npm.png"
    title: "npm"
  - image: "logo--google.png"
    title: "Google"
  - image: "logo--idonethis.png"
    title: "iDoneThis"
  - image: "logo--cio.png"
    title: "Customer.io"
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

<div class="u-mrg-b-10 u-pad-v-3">
  <p>
    {% Text class: 'u-op-6' %}
      Some awesome folks I've worked with
    {% endText %}
  </p>
  <div class="o-flexy u-mrg-v-8">
    {% for folk in page.folks %}
      <div class="o-flexy__block tx-center u-pad-h-2 u-pad-h-8@md">
        <img src="/images/{{ folk.image }}" width="120" alt="{{ folk.title }}">
      </div>
    {% endfor %}
  </div>
</div>
