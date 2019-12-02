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
$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});