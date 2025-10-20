
//슬라이드
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

showSlide(current);

next?.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prev?.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});


//토글 메뉴
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".close-btn");

  menuToggle.addEventListener("click", () => {
    sideMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // 배경 스크롤 방지
  });

  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});