---
layout: post
title: "Bootstrap 4 Cards"
date: 2016-05-04
---

### Cards

---

I've put together some cards using bootstrap 4 that link to my projects on github. The [documentation](http://v4-alpha.getbootstrap.com/components/card/) was really easy to get through and with some little CSS translate effects they move really nicely on hover.

Each card has html like the following example:

### HTML:
<div class="well">
``` HTML
    <div class="card card-block projectCard">
      <h4 class="card-title text-thin">Responsive Portfilio</h4>
      <p class="card-text">Portfolio developed for responsiveness & mobile first design.<br>Features a JavaScript parallax background effect & responsive Slick carousel.<br>Technologies used: Bootstrap, CSS3, Slick</p>
      <a href="http://kfmahre.github.io/Portfolio/" type="button" class="card-link btn btn-primary-outline">Live Version</a>
      <footer>
        <small class="text-muted">
          <a href="https://github.com/kfmahre/Portfolio" class="card-link text-thin">https://github.com/kfmahre/Portfolio</a>
        </small>
      </footer>
    </div>
```
</div>

If you're going to try this remember as per the documentation to wrap the cards in a:
<div class="well">
``` HTML
<div class="card-columns text-xs-center">
```
</div>
followed by a closing div tag, of course.

---

## CSS:

<div class="well">
``` CSS
.card-text {
  font-size: .9em;
}

.card-link {
  font-size: 1em;
}

.blurb {
  z-index: 1;
}

.projectCard {
  margin: 3px;
  z-index: 3;
  transform-style: preserve-3d;
}

.projectCard:hover {
  transform: translate(-2px,-2px);
  box-shadow: 2px 2px 4px #81969A;
}
```
</div>
Adding those styles in made it so the cards will *pop* out a bit when they are hovered over.

Looks nice, and it was fun to figure out!