const largeNav = document.getElementById("largeNav");
const largeNavTop = document.getElementById("largeNavTop");
const smallNav = document.getElementById("smallNav");
const burgerMenu = document.getElementById("burgerMenu");
const burgerMenuI = document.getElementById("burgerMenuI");
const scrollToTop = document.getElementById("scrollToTop");


//  CARROUSEL 

let slide = new Array(
  "asset/img/img-1-carrousel.png",
  "asset/img/carrousel-2.png",
  "asset/img/carrousel-3.png"
);

let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
}

// LARGE NAV ANIMATION

window.onscroll = function () {
  scrollNav();
  scrollToTopFunction();
};
function scrollNav() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    largeNav.classList.add("navSlideOut");
  } else {
    largeNav.classList.remove("navSlideOut");
  }
}

// SCROLL TO TOP ANIMATION

function scrollToTopFunction() {
  if (
    document.body.scrollTop > 1080 ||
    document.documentElement.scrollTop > 1080
  ) {
    scrollToTop.classList.add("scrollToTopShow");
    scrollToTop.classList.remove("scrollToTopHidden");
  } else {
    scrollToTop.classList.add("scrollToTopHidden");
    scrollToTop.classList.remove("scrollToTopShow");
  }
}
scrollToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// MENNU BURGER ANIMATION

burgerMenuI.classList.add("fa-bars");

window.addEventListener("resize", () => {
  if (window.innerWidth >= 800) {
    burgerMenuI.classList.remove("fa-times");
    burgerMenuI.classList.add("fa-bars");

    smallNav.classList.remove("smallNavShow");
    smallNav.classList.add("smallNavHidden");
  }
});
burgerMenu.addEventListener("click", () => {
  if (smallNav.classList == "smallNavHidden") {
    burgerMenuI.classList.remove("fa-bars");
    burgerMenuI.classList.add("fa-times");

    smallNav.classList.remove("smallNavHidden");
    smallNav.classList.add("smallNavShow");
  } else {
    burgerMenuI.classList.remove("fa-times");
    burgerMenuI.classList.add("fa-bars");

    smallNav.classList.remove("smallNavShow");
    smallNav.classList.add("smallNavHidden");
  }
});

// FLIP CARD

const cards = document.querySelectorAll(".servicesSquares");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((Square) => Square.addEventListener("click", flipCard));