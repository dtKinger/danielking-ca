export function mobileNav () {
  const LIST = document.querySelector('.list');
  const HAMBURGER = document.querySelector('.hamburger');
  const MOBILE_NAV = document.querySelector('#mobile-nav');

  HAMBURGER.addEventListener('click', () => {
    HAMBURGER.classList.toggle('active');
    LIST.classList.toggle('expand');
  })
}

