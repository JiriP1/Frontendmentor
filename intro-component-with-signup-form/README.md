# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![desktop](./screenshots/solution-desktop-state-1.png)
![desktop](./screenshots/solution-desktop-state-2.png)
![desktop](./screenshots/solution-desktop-state-3.png)
![mobile](./screenshots/solution-mobile-state.png)

### Links

- Live Site URL: [https://jirip1.github.io/Frontendmentor/intro-component-with-signup-form](https://jirip1.github.io/Frontendmentor/intro-component-with-signup-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- CSS Grid

### What I learned

```js
  // email Validation   
    email_input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)

  //input value checker
  inputs.value === "something"
```

### Useful resources

- [Kevin Powell](https://www.youtube.com/@KevinPowell)
- [MDN](https://developer.mozilla.org/en-US/)

## Author

- Frontend Mentor - [@jirip](https://www.frontendmentor.io/profile/JiriP1)  
