let swiper = new Swiper(".carousel", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 5000,
  },
});

const openMobileMenu = function () {
  let mainMenu = document.querySelector(".nav");
  let mainMenuBtn = document.querySelector(".burger");

  mainMenu.classList.toggle("menu-open");
};
