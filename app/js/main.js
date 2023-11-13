$(function () {
  $(".slider__items").slick({
    arrows: false,
    dots: true,
  });

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "11px",
    ratedFill: "#F2C938",
  });

  $(".gallery__slider-items").slick({
    arrows: true,
    slidesToShow: 5,
    prevArrow:
      '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-prev.svg"</button>',
    nextArrow:
      '<button type="button" class="slick-next slick-btn"><img src="images/arrow-next.svg"</button>',
    responsive: [
      {
        breakpoint: 791,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          infinite: true,
          arrows: false,
        },
      },
    ],
  });

  // const burgerMenu = document.querySelector('.burger-menu');
  // const menuList = document.querySelector('.header__menu-list');

  // burgerMenu.addEventListener('click', () => {
  //   menuList.classList.toggle('menu--open');
  // });

  const burgerMenu = document.querySelector(".burger-menu");
  const menuList = document.querySelector(".menu__list");

  burgerMenu.addEventListener("click", function () {
    menuList.classList.toggle("menu__list--active");
  });

  $(".popup__link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(".ceramic__popup-link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(".menu, bike__column").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
