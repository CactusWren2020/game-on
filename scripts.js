// const mobileMenu = document.querySelector('#mobile-menu');
// const mobileButton = document.querySelector('#mobile-menu-button');
// const hamburgerIcon = document.querySelector('#hamburger-icon');
// const xIcon = document.querySelector('#x-icon');

// function menuToggle(sub) {
//     var closed = sub.className.indexOf('closed') !== -1;
//     if (closed) {
//         sub.className = sub.className.replace('closed', 'open');
//     } else {
//         sub.className = sub.className.replace('open', 'closed');
//     }
//     hamburgerIcon.classList.toggle('hidden');
//         xIcon.classList.toggle('hidden');
// }

// mobileButton.addEventListener('click', () => menuToggle(mobileMenu));

// slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "inline-flex";

}