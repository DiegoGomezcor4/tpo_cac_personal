const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const carouselIndicators = document.querySelectorAll(".carousel-indicators span");

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    counter = index;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    carouselIndicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    indicator.classList.add("active");
  });
});

setInterval(() => {
  counter++;
  if (counter >= carouselImages.length) {
    counter = 0;
  }
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  carouselIndicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  carouselIndicators[counter].classList.add("active");
}, 4000);
