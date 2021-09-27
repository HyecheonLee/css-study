const body = document.body
const sliders = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener('click', ev => {
  activeSlide = (activeSlide + 1) % sliders.length;
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', ev => {
  activeSlide = (activeSlide + sliders.length - 1) % sliders.length;
  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  sliders.forEach(slide => {
    slide.classList.remove('active');
  });
  sliders[activeSlide].classList.add("active");
}
