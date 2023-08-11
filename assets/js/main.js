
$(document).ready(function(){

    // sticky nav 
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 50){
            $('.header-menu').addClass ('sticky');
        }else{
            $('.header-menu').removeClass ('sticky')
        }
    })

      // mean menu js 
      jQuery(document).ready(function () {
        jQuery('#mobile-menu').meanmenu({
          meanScreenWidth: "991",
          meanMenuContainer: '.mobile-menu',
        });
      });
   

    // one page nav 

    $('#nav').onePageNav({
        currentClass: 'current',
        scrollSpeed: 750,
    });



    // popup js 

    $(document).ready(function() {
        $('.popup').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
              }
        });
      });

    //   video popup 

    $(document).ready(function() {
        $('.popup-video').magnificPopup({
            type:'iframe'
        });
      });


    //   counter js 
    jQuery(document).ready(function($) {
        $('.counter-increament').counterUp({
            delay: 10,
            time: 1000
        });
    });


    // slick slider js  testimonial area 

    
    $('.testimonial').slick({
        dots: true,
        prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        infinite: false,
        loop: true,
        speed: 300,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              arrows:false,
              
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


});







