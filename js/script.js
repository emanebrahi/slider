let sliderContainer = document.querySelector(".slider-inner");
let nextBtn = document.querySelector(".nextbtn");
let prevBtn = document.querySelector(".prevbtn");
let slideImg = document.querySelector(".slideImg");

let images = [
  "images/sliderone.jpeg",
  "images/slider-two.jpeg",
  "images/sliderthree.jpeg",
];

let sliderIndex = 0;
const slider = function () {
  slideImg.setAttribute("src", images[sliderIndex]);
  sliderIndex++;
  if (sliderIndex >= images.length) {
    images.unshift("images/sliderone.jpeg");
    sliderIndex = 0;
  }
};

let id;
id = setInterval(slider, "1000");

let nextIndex = 1;
nextBtn.onclick = function () {
  slideImg.setAttribute("src", images[nextIndex]);

  nextIndex++;
  if (nextIndex >= images.length) {
    images.unshift("images/sliderone.jpeg");
    nextIndex = 1;
  }
};

let previousIndex = images.length - 1;
prevBtn.addEventListener("click", function () {
  slideImg.setAttribute("src", images[previousIndex]);
  previousIndex--;
  if (previousIndex < 0) {
    images.push("images/sliderone.jpeg");
    previousIndex = images.length - 1;
  }
});

sliderContainer.addEventListener("mouseenter", function () {
  clearInterval(id);
});

sliderContainer.addEventListener("mouseleave", function () {
  clearInterval(id);
  id = setInterval(slider, 1000);
});
