document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const slides = slider.children;
  const totalSlides = slides.length;
  let index = 0;

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
  });

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
  });
});
