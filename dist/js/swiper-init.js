let mySwiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      preloadImages: false,
      speed: 1600,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});