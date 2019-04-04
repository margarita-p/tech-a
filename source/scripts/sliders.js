(function($) {
	'use strict';
	$(function() {

    $('.slider-company').slick({
      arrows: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
			autoplaySpeed: 5000,
      infinite: true,
      prevArrow: '<button class="slick-btn slick-btn--prev" type="button" tabindex="0" aria-lable="Назад"><svg width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      nextArrow: '<button class="slick-btn slick-btn--next" type="button" tabindex="0" aria-lable="Вперёд"><svg width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
          }
        },

      ]
    });

    $('.slider-brends').slick({
      arrows: true,
      dots: false,
      slidesToShow: 7,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      // variableWidth: true,
      // centerMode: true,
      // variableWidth: true,
      prevArrow: '<button class="slick-btn slick-btn--prev" type="button" tabindex="0" aria-lable="Назад"><svg width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      nextArrow: '<button class="slick-btn slick-btn--next" type="button" tabindex="0" aria-lable="Вперёд"><svg width="30" height="20"><use xlink:href="assets/images/sprites/sprite.svg#arrow"></use></svg></button>',
      responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            // centerMode: true,
          }
        },

      ]
    });


	});
})(jQuery);
