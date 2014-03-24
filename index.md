---
layout: default
title: horace.li Home
---
{% include JB/setup %}

{% for post in site.posts limit:3 %}
  {% assign post = site.posts.first %}
  {% assign content = post.content %}
  {% include themes/twitter/post_detail.html %}
{% endfor %}