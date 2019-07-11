AOS.init();

$(document).ready(function () {
  $(".sidenav").sidenav();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
});

$(".slider-text").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-img",
  autoplay: true,
  fade: true,
  cssEase: "linear"
});

$(".slider-img").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-text",
  autoplay: true,
  arrows: false
});

$('.slider-hero').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
