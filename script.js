function showNav() {
  const nav = document.querySelector("nav");

  nav.classList.toggle("show");
}
// nav.classList.toggle("show");

const prev = document.getElementById("prev");
const sliderImage = document.getElementById("sliderImage");
const next = document.getElementById("next");

const image = [
  "images/dining-room-full-C6wMy_7k.jpg",
  "images/portfolio-living.jpg",
  "images/accent-chair-OcTKRyc0.jpg",
  "images/wall-art-setup-DURCPBtk.jpg",
  "images/portfolio-bedroom.jpg",
  "images/decor-setup-Ci0VA2gr.jpg",
  "images/portfolio-office.jpg",
  "images/industrial-shelving-TXiAMAui.jpg",
];
let currentImage = 0;

function nextImage() {
  currentImage++;

  if (currentImage > image.length) {
    currentImage = 0;
  }
  sliderImage.src = image[currentImage];
}

next.addEventListener("click", nextImage);

function previuosImage() {
  currentImage--;

  if (currentImage < 0) {
    currentImage = image.length - 8;
  }
  sliderImage.src = image[currentImage];
}
prev.addEventListener("click", previuosImage);

const thumbnail = document.querySelectorAll(".thumbnail");
function displayImage(image) {
  sliderImage.src = image.src;
}
thumbnail.forEach(function (image) {
  image.addEventListener("click", function () {
    displayImage(image);
  });
});
