// import { carousel } from "./carousel.js";
// import './carousel.css';

let darkModeStatus = false;

import { mobileNav } from "./nav-menu.js"
// import './nav-menu.css';

// Init Carousel
// carousel();

// Init navigation
mobileNav();

const header = document.querySelector('header');
const lightDarkToggle = document.querySelector('.theme-toggle');
const darkModeToggle = document.querySelector('.theme-toggle');
const fixHeaderBtn = document.querySelector('.fixed-header-btn');
const layoutContainer = document.querySelector('.layout-change');
const backgroundSquares = document.querySelectorAll('.square');
const previewItems = document.querySelectorAll('.preview-item');
const ghostHeader = document.querySelector('.ghost-header');
const githubCalendar = document.querySelector('.github-calendar');

lightDarkToggle.addEventListener('click', toggleDarkMode)

fixHeaderBtn.addEventListener('click', () => {
  header.classList.toggle('fixed-header');
  ghostHeader.classList.toggle('show');
  layoutContainer.classList.toggle('vertical-buffer');
  fixHeaderBtn.classList.toggle('btn-setting-active');
})




backgroundSquares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    enhanceSquare(square);
  });

  square.addEventListener('mouseout', () => {
    minimizeSquare(square);
  });
});

function enhanceSquare(square) {
  const hoveredSquare = square.querySelector('.foreground-square');
  hoveredSquare.classList.add('show');
}

function minimizeSquare(square) {
  const hoveredSquare = square.querySelector('.foreground-square');
  hoveredSquare.classList.remove('show')

}

previewItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    if (item.querySelector('.hover-title')){
      item.querySelector('.hover-title').style.setProperty('opacity', '1');
    }
  })

  item.addEventListener('mouseout', (e) => {
    if (item.querySelector('.hover-title')){
      item.querySelector('.hover-title').style.setProperty('opacity', '0');
    }
  })
})

// IIFE to set dark mode 
let setDarkLightMode = ( () => {
  if (window.matchMedia) {
    // check device prefers dark mode
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    // if prefers: dark mode, run the click function
    if (query.matches){
      toggleDarkMode();
    }
  }
})()



function toggleDarkMode () {
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
}