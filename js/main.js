//Add class for active mask.
$('#feedback-link').on('click', function () {
  $('.modal-window').addClass('active-mask');
  $('.popup').addClass('active-popup');
});

//Remove class of active mask, click on modal window.
$('.modal-window').on('click', function () {
  $('.modal-window').removeClass('active-mask');
  $('.popup').removeClass('active-popup');
});

//Remove class of active mask when click on close image.
$('#close-popup-block').on('click', function () {
  $('.modal-window').removeClass('active-mask');
  $('.popup').removeClass('active-popup');
});

//Add class to body to hide overflow.
$('#feedback-link').on('click', function () {
  $('body').addClass('overflow');
});
$('.modal-window').on('click', function () {
  $('body').removeClass('overflow');
});

//Remove class overflow for body after click on close button
$('#close-popup-block').on('click', function () {
  $('body').removeClass('overflow');
});

//Slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    autoplayTimeout:4000,
    navClass: ['left', 'right'],
    autoplay:true,
    loop:true,
    animateOut: 'fadeOut',
    navContainerClass: 'wrap-slider',
  });
});



