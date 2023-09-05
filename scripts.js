// import { carousel } from "./carousel.js";
// import './carousel.css';

let darkModeStatus = false;
let stickyHeaderActive = false;

import { mobileNav } from "./nav-menu.js"
// import './nav-menu.css';

// Init Carousel
// carousel();

// Init navigation
mobileNav();

const header = document.querySelector('header');
const lightDarkToggle = document.querySelector('.theme-toggle');
const fixHeaderBtn = document.querySelector('.fixed-header-btn');
const layoutContainer = document.querySelector('.layout-change');
const backgroundSquares = document.querySelectorAll('.square');
const previewItems = document.querySelectorAll('.preview-item');
const ghostHeader = document.querySelector('.ghost-header');
const jumpLinks = document.querySelectorAll('.jump-link');


jumpLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    try{
    if(window.location.pathname === '/'){
      e.preventDefault(); // test links without this too
    }
    let hash = e.target.hash;
    let destination = document.getElementById(`${hash.slice(1, hash.length)}`)
    if (stickyHeaderActive === false){
      destination.scrollIntoView(
        {
          behavior: "smooth", block: "start"
        })  
    } else if (stickyHeaderActive === true){
      destination.scrollIntoView(
        {
          behavior: "instant", block: "start"
        })
        window.scrollTo(
          {
            top: window.scrollY - 120,
            left: 0,
            behavior: "smooth",
          }
        )
     }
    } catch (error) {
      console.log(error);
    }   
  })
})

lightDarkToggle.addEventListener('click', toggleDarkMode)
fixHeaderBtn.addEventListener('click', toggleStickyHeader)


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
    if (localStorage.getItem("darkMode")){
      console.log(`No OS dark mode preference detected, loading localStorage...`)
        if (localStorage.getItem("darkMode") === "true" &&
            darkModeStatus === false){
          toggleDarkMode();
        }
    } else if (query.matches){
      console.log(`Dark mode preference detected`)
      toggleDarkMode();
    }  else {

    }   
  }
})()

let setStickyStatus = ( () => {
  if (localStorage.getItem("stickyHeader") === "true" &&
    stickyHeaderActive === false){
      toggleStickyHeader();
  }
})();



function toggleDarkMode () {
  if (darkModeStatus === false){
    document.documentElement.style.setProperty('--text-color-default', 'white')
    document.documentElement.style.setProperty('--bg-color-default', 'rgb(35, 35, 35)')
    document.documentElement.style.setProperty('--accent-color-default', 'white')
    document.documentElement.style.setProperty('--crosshair-border-color', 'white')
    document.documentElement.style.setProperty('--filter-inversion-state', '1')
  } else if (darkModeStatus === true){
    document.documentElement.style.setProperty('--text-color-default', 'rgb(35, 35, 35)')
    document.documentElement.style.setProperty('--bg-color-default', 'white')
    document.documentElement.style.setProperty('--accent-color-default', 'rgb(35, 35, 35)')
    document.documentElement.style.setProperty('--crosshair-border-color', 'rgb(35, 35, 35)')
    document.documentElement.style.setProperty('--filter-inversion-state', '0')
  }
  lightDarkToggle.classList.toggle('btn-setting-active');
  darkModeStatus = !darkModeStatus; // toggle it.
  localStorage.setItem('darkMode', darkModeStatus.toString());
}

function toggleStickyHeader () {
  header.classList.toggle('fixed-header');
  ghostHeader.classList.toggle('show');
  layoutContainer.classList.toggle('vertical-buffer');
  fixHeaderBtn.classList.toggle('btn-setting-active');
  stickyHeaderActive = !stickyHeaderActive;
  localStorage.setItem('stickyHeader', stickyHeaderActive.toString());
}