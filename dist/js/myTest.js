$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav',
    lazyLoad: 'ondemand'
  });
  $('.slider-x').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider-nav',
    lazyLoad: 'ondemand',
    dots: false
  });
  $('.slider-nav').slick({
    centerMode: true,
    //centerPadding: '60px',
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    lazyLoad: 'ondemand',
    centerMode: true,
  });  
});