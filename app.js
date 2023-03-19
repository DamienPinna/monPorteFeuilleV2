let carousel = document.querySelector(".carousel");
let figure = carousel.querySelector("figure");
let nav = carousel.querySelector("nav");
let numImages = figure.childElementCount;
let theta = (2 * Math.PI) / numImages;
let currImage = 0;

nav.addEventListener("click", onClick, true);

function onClick(e) {
  e.stopPropagation();

  var t = e.target;
  if (t.tagName.toUpperCase() != "BUTTON") return;

  if (t.classList.contains("next")) {
    currImage++;
  } else {
    currImage--;
  }

  figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
