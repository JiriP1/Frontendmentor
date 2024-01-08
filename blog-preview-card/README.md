# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)





## Overview

### Screenshot

![desktop](./images/solution-desktop.png)
![mobile](./images/solution-mobile.png)


- Solution URL: [Add solution URL here](https://jirip1.github.io/Frontendmentor/blog-preview-card)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

With hover effect on element A(child), changing styles of element B(parent).

```css
.card:has(.card-title:hover) {
    box-shadow: 20px 20px  var(--Black); /* from: box-shadow: 10px 10px;  to: box-shadow: 20px 20px;*/
    transition: .3s;/* box-shadow  fast-in */
}

.card-title:hover {
    color: var(--Yellow);
    transition: .3s;/* changing title  fast-in */
}
```




### Useful resources

- [Kevin Powell](https://www.youtube.com/@KevinPowell) - :has() pseudo-class
- [MDN](https://developer.mozilla.org/en-US/)


