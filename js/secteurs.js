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
        removeClass(x[i]);
        if (x[i].className.indexOf(c) > -1) addClass(x[i]);
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