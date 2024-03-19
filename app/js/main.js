$(function(){

  const btn = $('.scroll');

  $(window).on('scroll', (function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  }));
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
  

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__item-city').on('click', function () {
    $('.menu__submenu').toggleClass('menu__submenu--active');
  });

  $('.price__right').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.gallery__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '260px',
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '160px',
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px',
        }
      }
    ]
  });

  $('.testimonials__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
});