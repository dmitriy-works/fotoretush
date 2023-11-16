const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const socialnetwork__swiper = new Swiper('.socialnetwork__swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

  
  pagination: {
    el: '.socialnetwork__pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.socialnetwork-button-right',
    prevEl: '.socialnetwork-button-left',
  },

  
});