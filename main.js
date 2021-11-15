$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });


    // Cette partie permet d'enlever l'Hamburger apres l'option desire... 
    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');


        if($(window).scrollTop() > 100){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });

    

});



var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop : true,
  grabCursor: true,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
  },
});