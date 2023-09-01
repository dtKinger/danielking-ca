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
const fixHeaderBtn = document.querySelector('.fixed-header-btn')
const crosshairContainer = document.querySelector('.crosshair-container')
const backgroundSquares = document.querySelectorAll('.square');
const foregroundSquares = document.querySelectorAll('.foreground-square');

fixHeaderBtn.addEventListener('click', () => {
  header.classList.toggle('fixed-header')
  crosshairContainer.classList.toggle('vertical-buffer');
  fixHeaderBtn.classList.toggle('btn-setting-active');
})


lightDarkToggle.addEventListener('click', () => {
  if (darkModeStatus === false){
    document.documentElement.style.setProperty('--text-color-default', 'white')
    document.documentElement.style.setProperty('--bg-color-default', 'rgb(35, 35, 35)')
    document.documentElement.style.setProperty('--accent-color-default', 'white')
    document.documentElement.style.setProperty('--crosshair-border-color', 'white')
    darkModeToggle.textContent = 'Light mode';
  } else if (darkModeStatus === true){
    document.documentElement.style.setProperty('--text-color-default', 'rgb(35, 35, 35)')
    document.documentElement.style.setProperty('--bg-color-default', 'white')
    document.documentElement.style.setProperty('--accent-color-default', 'rgb(35, 35, 35)')
    document.documentElement.style.setProperty('--crosshair-border-color', 'rgb(35, 35, 35)')
    darkModeToggle.textContent = 'Dark mode';
  }
  lightDarkToggle.classList.toggle('btn-setting-active');
  darkModeStatus = !darkModeStatus; // toggle it.
})

backgroundSquares.forEach( (square) => {
  square.addEventListener('mouseover', (e) => {
    console.log(e.target)
    console.log(square.childNodes)
    square.querySelector('.foreground-square').classList.add('show');
  })
})