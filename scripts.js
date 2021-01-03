// scroll to top button

//Get the button:
mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// mobile menu
const mobileMenu = document.querySelector("#mobile-menu");
const mobileButton = document.querySelector("#mobile-menu-button");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const xIcon = document.querySelector("#x-icon");
const menuItems = document.querySelector(".nav-mobile");
const navItems = document.querySelector(".nav-right-mobile");
const navRightButton = document.querySelector(".nav-right-button-mobile");

function menuToggle(sub) {
  var closed = sub.className.indexOf("closed") !== -1;
  if (closed) {
    sub.className = sub.className.replace("closed", "open");
    menuItems.classList.add("come-in");
    navItems.classList.add("come-in");
    navRightButton.classList.add("come-in");
  } else {
    sub.className = sub.className.replace("open", "closed");
    menuItems.classList.remove("come-in");
    navItems.classList.remove("come-in");
    navRightButton.classList.remove("come-in");
  }
  hamburgerIcon.classList.toggle("hidden");
  xIcon.classList.toggle("hidden");
}

mobileButton.addEventListener("click", () => menuToggle(mobileMenu));

// slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "inline-flex";
}

//blog slider 

var postIndex = 0;
showPosts(postIndex); //loads initial slides

function plusPost(n) {  
  showPosts((postIndex += n));
}

function showPosts(x) {
  var posts = document.getElementsByClassName("post");
 
if (x < 0) { //sets postIndex to last item
  postIndex = posts.length - 1;
}
if (x === posts.length) { //sets postIndex to first item
  postIndex = 0;
}
//sets all slides to display none
for (i = 0; i < posts.length; i++) {
  posts[i].style.display = "none";
}
//display postIndex
posts[postIndex].style.display = "flex";
switch(postIndex) {
  case 0:
    posts[postIndex + 1].style.display = "flex";
    posts[postIndex + 2].style.display = "flex";
    break;
  case 1:
    posts[postIndex + 1].style.display = "flex";
    posts[postIndex + 2].style.display = "flex";
    break;
  case 2: 
    posts[postIndex + 1].style.display = "flex";
    posts[postIndex + 2].style.display = "flex";
    break;
  case 3:
    posts[postIndex + 1].style.display = "flex";
    posts[postIndex + 2].style.display = "flex";
    break;
  case 4:
    posts[postIndex + 1].style.display = "flex";
    posts[0].style.display = "flex";
    break;
  case 5:
    posts[0].style.display = "flex";
    posts[1].style.display = "flex";
    break;
   
  }
 
}

//is-visible plugin

(function ($) {
  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

//slide-ins

$(window).scroll(function (event) {
  $(".module").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});

var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function (i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function (event) {
  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});

$(window).scroll(function (event) {
  $(".fader").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("fade-in");
    }
  });
});
