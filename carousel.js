export function carousel(){
  const SLIDER_BTNS = document.querySelectorAll('.image-select .img-svg')
  const CAROUSEL = document.querySelector('.carousel-images');
  // const CAROUSEL_IMAGES_CONTAINER = document.querySelectorAll('.carousel-images li');
  const PREVIOUS_IMAGE = document.querySelector('.previous');
  const NEXT_IMAGE = document.querySelector('.next');

  let positionTracker = 0;

  window.addEventListener('DOMContentLoaded', () => {
    SLIDER_BTNS[0].classList.add('active');
    PREVIOUS_IMAGE.classList.add('zero-opacity');
  });

  PREVIOUS_IMAGE.addEventListener('click', () => {
    if (positionTracker > 0){
      positionTracker -= 1;
      let transformDistance = positionTracker * -90;
      CAROUSEL.style.transform = `translateX(${transformDistance}vw)`;
    }
    updateActiveDot();
    hideOrShowArrows();
  });

  NEXT_IMAGE.addEventListener('click', (e) => {
    if (positionTracker < 3){
      positionTracker += 1;
      let transformDistance = positionTracker * -90;
      CAROUSEL.style.transform = `translateX(${transformDistance}vw)`;
    };
    updateActiveDot(); 
    hideOrShowArrows();
  });

  function updateActiveDot () {
    // Remove all
    for (let i = 0; i < SLIDER_BTNS.length; i += 1 ){
      SLIDER_BTNS[i].classList.remove('active');
    }
    SLIDER_BTNS[positionTracker].classList.add('active');
  }


  SLIDER_BTNS.forEach( (button, index) => {
    button.addEventListener('click', (e) => {
      // Remove all Actives
      for (let i = 0; i < SLIDER_BTNS.length; i += 1 ){
        SLIDER_BTNS[i].classList.remove('active');
        PREVIOUS_IMAGE.classList.remove('zero-opacity');
        NEXT_IMAGE.classList.remove('zero-opacity');
      }
      // add active if clicked
      button.classList.add('active');
      // Update position tracker
      positionTracker = index;

      hideOrShowArrows();
      console.log(positionTracker);

    });
  })

  // Carousel 
  for (let i = 0; i < SLIDER_BTNS.length; i += 1){
    SLIDER_BTNS[i].addEventListener('click', () => {
      // TransformX the corresponding carousel image
      let transformDistance = i * -90; // calculate viewport units
      // This transform: translate is transitioned in style.css
      CAROUSEL.style.transform = `translateX(${transformDistance}vw)`;
    })
  };

  function hideOrShowArrows () {
    // Hide arrows at the start and end of slideshow.
    PREVIOUS_IMAGE.classList.remove('zero-opacity');
    NEXT_IMAGE.classList.remove('zero-opacity');
    if (SLIDER_BTNS[0].classList.contains('active')){
      PREVIOUS_IMAGE.classList.add('zero-opacity');
    } else if (SLIDER_BTNS[3].classList.contains('active')){
      NEXT_IMAGE.classList.add('zero-opacity');
    };
  }
}



// To use

// EXAMPLE HTML

/*
<div class="carousel-container">
    <ul class="carousel-images">
      <li><img src="./images/aleksandr-popov-1.jpg" alt=""></li>
      <li><img src="./images/chi-hung-wong-1.jpg" alt=""></li>
      <li><img src="./images/donny-jiang-1.jpg" alt=""></li>
      <li><img src="./images/kevin-laminto-1.jpg" alt=""></li>
    </ul>
  </div>
  <div class="carousel-btns">
    <ul class="image-select">
      <li id="select-img1"><svg class="img-svg select-img1"></svg></li>
      <li id="select-img2"><svg class="img-svg select-img2"></svg></li>
      <li id="select-img3"><svg class="img-svg select-img3"></svg></li>
      <li id="select-img4"><svg class="img-svg select-img4"></svg></li>
    </ul>
  </div>
*/