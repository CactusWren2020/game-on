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

var postIndex = 1;
showPosts(postIndex);

function plusPost(n) {
  showPosts((postIndex += n));
}

function currentPost(n) {
  showPosts((postIndex = n));
}

function showPosts(n) {
  var i;
  var posts = document.getElementsByClassName("post");
  if (n > posts.length) {
    postIndex = 1;
  }
  if (n < 1) {
    postIndex = posts.length;
  }
  for (i = 0; i < posts.length; i++) {
    posts[i].style.display = "none";
  }
  posts[postIndex - 1].style.display = "flex";
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
