// Définitions des variables

// NAV
const largeNav = document.getElementById("largeNav");
const largeNavTop = document.getElementById("largeNavTop");
const smallNav = document.getElementById("smallNav");
//MEBU BURGER
const burgerMenu = document.getElementById("burgerMenu");
const burgerMenuI = document.getElementById("burgerMenuI");
// SCROLL TO TOP
const scrollToTop = document.getElementById("scrollToTop");
//  CARROUSEL 
let slide = new Array(
  "asset/img/carrousel-1.png",
  "asset/img/carrousel-2-wayne.png",
  "asset/img/carrousel-3-stark.png"
);
let numero = 0;
// SECTEURS 
const btnContainer = document.getElementById("myBtnContainer");
const allBtn = document.getElementById("allBtn");
const lilleBtn = document.getElementById("lilleBtn");
const arrasBtn = document.getElementById("arrasBtn");
const touquetBtn = document.getElementById("touquetBtn");
const btns = btnContainer.getElementsByClassName("btn");
const x = document.getElementsByClassName("filterDiv");
const current = document.getElementsByClassName("active");
const show = "show";
let clickedBtn = "all";

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

// SECTEURS

filterSelection(clickedBtn);

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function () {

        current[0].classList.remove("active");
        this.classList.add("active");

        if (i === 0) {
            clickedBtn = "all";
            filterSelection(clickedBtn);
        } else if (i === 1) {
            clickedBtn = "lille";
            filterSelection(clickedBtn);
        } else if (i === 2) {
            clickedBtn = "arras";
            filterSelection(clickedBtn);
        } else if (i === 3) {
            clickedBtn = "touquet";
            filterSelection(clickedBtn);
        }
    });
}

// Fonction de sélection du filtre
function filterSelection(c) {
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], show);
        if (x[i].className.indexOf(c) > -1) addClass(x[i], show);
    }
}
// Fonction d'ajout de classe
function addClass(element) {
    if (element.className.indexOf(show) == -1) {
        element.classList.add(show);
    }
}
// Fonction de retrait de classe
function removeClass(element) {
    if (element.className.indexOf(show) > -1) {
        element.classList.remove(show);
    }
}