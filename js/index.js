let slide = new Array(
  "../asset/img/img-1-carrousel.png",
  "../asset/img/carrousel-2.png",
  "../asset/img/carrousel-3.png"
);
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
}
