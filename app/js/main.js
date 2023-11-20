const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

  breakpoints: {      
     
    320: {
      slidesPerView: 1,     
    },
    
     
    992: {
      slidesPerView: 2,      
    }     
  },

  

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

  breakpoints: {      
     
    320: {
      slidesPerView: 1,     
    },
    
     
    992: {
      slidesPerView: 2,      
    }     
  },

  
  pagination: {
    el: '.socialnetwork__pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.socialnetwork-button-right',
    prevEl: '.socialnetwork-button-left',
  },
  
});

const menuBtn = document.querySelector('.burger__menu');
const menu = document.querySelector('.menu__list');
const logoWhite = document.querySelector('.header__logo-white');
const logoBlack = document.querySelector('.header__logo');
const burgerMenuWhite = document.querySelector('.burger__menu-white');
const telWhite = document.querySelector('.header__contacts-phone');
console.log(telWhite)

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
  logoWhite.classList.toggle('logo__active');
  logoBlack.classList.toggle('logo__black--active');
  burgerMenuWhite.classList.toggle('.burger__menu-white--active');
  telWhite.classList.toggle('phoneColor--active');
});



