document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const slideArray = Array.from(document.querySelectorAll(".slide"));
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const yearSpan = document.querySelector(".championship_title .year");
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slideArray.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slideArray.length - 1;
    } else {
      currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateYear(currentIndex);
  }

  function updateYear(index) {
    const year = slideArray[index].getAttribute("data-year");
    yearSpan.textContent = year;
  }

  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  showSlide(currentIndex);
});
