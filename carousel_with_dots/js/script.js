const elsSlide = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

const slideWrapper = document.querySelector(".slide_wrapper");
const slideInner = document.querySelector(".slide_inner");
const width = window.getComputedStyle(slideWrapper).width;

let slideIndex = 1;
let offset = 0;

slideInner.style.width = 100 * elsSlide.length + "%";

elsSlide.forEach((v) => {
  v.style.width = width;
});

slideInner.style.transition = "0.3s ease all";

nextBtn.addEventListener("click", () => {
  if (offset == +width.slice(0, width.length - 2) * (elsSlide.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }
  slideInner.style.transform = `translateX(-${offset}px)`;
});

prevBtn.addEventListener("click", () => {
  if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (elsSlide.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }
  slideInner.style.transform = `translateX(-${offset}px)`;
});

// Adding dots

const indicators = document.createElement("ul");
indicators.classList.add("caroules-indikators");
slideWrapper.append(indicators);

let dots = [];

for (let i = 0; i < elsSlide.length; i++) {
  const dot = document.createElement("li");
  dot.setAttribute("data-slide-to", i + 1);
  dot.classList.add("indicator-dots");
  if (i == 0) dot.style.opacity = 1;
  indicators.append(dot);
  dot.push(dot);
}
