// import { carousel } from "./carousel.js";
// import './carousel.css';

let darkModeStatus = false;

import { mobileNav } from "./nav-menu.js"
// import './nav-menu.css';

// Init Carousel
// carousel();

// Init navigation
mobileNav();

const header = document.querySelector('header')
const lightDarkToggle = document.querySelector('.theme-toggle')
const heading1 = document.querySelector('h1')
const buttons = document.querySelectorAll('button')
const darkModeToggle = document.querySelector('.theme-toggle')

header.classList.toggle('.fixed-header')

lightDarkToggle.addEventListener('click', () => {
  if (darkModeStatus === false){
    document.body.style.setProperty('background', 'var(--bg-color-dark-mode)'); 
    document.body.style.setProperty('color', 'var(--text-color-dark-mode)');
    buttons.forEach((button) => button.style.setProperty('background-color', 'var(--accent-color-dark-mode)'))
    buttons.forEach((button) => button.style.setProperty('color', 'var(--accent-color-light-mode)'))
    darkModeToggle.textContent = 'Light mode';
  } else if (darkModeStatus === true){
    document.body.style.setProperty('background', 'var(--bg-color-light-mode)'); 
    document.body.style.setProperty('color', 'var(--text-color-light-mode)');
    buttons.forEach((button) => button.style.setProperty('background-color', 'var(--accent-color-light-mode)'))
    buttons.forEach((button) => button.style.setProperty('color', 'var(--accent-color-dark-mode)'))
    darkModeToggle.textContent = 'Dark mode';
  }
  darkModeStatus = !darkModeStatus; // toggle it.
})