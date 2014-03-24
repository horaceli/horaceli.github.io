---
layout: page
title: Hello World!
tagline: horace.li / horaceli.com
---
{% include JB/setup %}

# Latest Post
{% for post in site.posts limit:1 %}
  {% assign post = site.posts.first %}
  {% assign content = post.content %}
  {% include themes/twitter/post_detail.html %}
{% endfor %}
# Recent Posts
{% for post in site.posts offset:1 limit:2 %}
... Show the next to posts ...
{% endfor %}
