const elSlide = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

let shown = 1;

const slideFunc = () => {
  if (shown < 1) {
    shown = elSlide.length;
  }
  if (shown > elSlide.length) {
    shown = 1;
  }
  elSlide.forEach((el) => {
    el.style.display = "none";
  });
  elSlide[shown - 1].style.display = "flex";
};

slideFunc();

prevBtn.onclick = () => {
  shown -= 1;
  slideFunc();
};

nextBtn.onclick = () => {
  shown += 1;
  slideFunc();
};
