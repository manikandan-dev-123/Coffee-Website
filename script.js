const firstSelect = document.querySelector("#menu-open");
const thirdParty = document.querySelector("#menu-close");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

firstSelect .addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
thirdParty.addEventListener("click", () => firstSelect.click());


// Close menu when the close nav link is clicked

navLinks.forEach(link => {
link.addEventListener("click", () => firstSelect.click())
});

// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
loop: true,
grabCursor: true, 
spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullests: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//   Responice breakpoints
breakpoints: {
    0:{
        slidesPerView: 1
    },
    765:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    }
}
});