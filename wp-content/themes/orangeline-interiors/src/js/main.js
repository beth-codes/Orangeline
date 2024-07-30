import '../css/main.scss';
import '/blocks/front.js';


(function($){
   $(document).ready(function(){
      $(window).scroll(function(){
         var scroll = $(window).scrollTop();
         if (scroll > 100) {
           $(".site-header").addClass("head-scroll");
         }
    
         else{
            $(".site-header").removeClass("head-scroll");
         }
      })
    });

    $('.js-nav-toggle').click(function(e) {
      e.preventDefault();
      console.log('bvvvv');
      $('.js-nav-toggle').toggleClass('new');
      $('.js-menu-toggle, html, body, header').toggleClass('menu-open');
   });
   
   //scroll down on click bannericon
    $(".js-scroll-next-block").click(function() {
      var nextSection = $(this).closest('section').next('section');
      var offsetTop = nextSection.offset().top - 5 * parseFloat($('body').css('font-size'));
      $('html, body').animate({
      scrollTop: offsetTop
      }, 1000);
    });

  //testimonial carousel
    $(".testimonial-container").each(function() {
      var $slider = $(this).find('.testimonial-slide');
      var $gallerySlide = $slider.find("figure");
      var $navPrev = $(this).find(".prev");
      var $navNext = $(this).find(".next");
      var SlideLength = $gallerySlide.length;
      var currentCarouselID = 0;
      var isAnimate = false;
    
      function init() {
         TweenLite.set($gallerySlide, {
            left: "-100%"
         });
         $navPrev.on("click", gotoPrevSlide);
         $navNext.on("click", gotoNextSlide);
         gotoSlide(0, 0);
      }
    
      function gotoPrevSlide() {
         var slideToGo = currentCarouselID - 1;
         if (slideToGo < 0) {
            slideToGo = SlideLength - 1;
         }
         gotoSlide(slideToGo, 1, "prev");
      }
    
      function gotoNextSlide() {
         var slideToGo = currentCarouselID + 1;
         if (slideToGo >= SlideLength) {
            slideToGo = 0;
         }
         gotoSlide(slideToGo, 1, "next");
      }
    
      function gotoSlide(slideID, _time, _direction) {
         if (!isAnimate) {
          isAnimate = true;
            var prevSlideID = currentCarouselID;
            currentCarouselID = slideID;
            var $prevSlide = $gallerySlide.eq(prevSlideID);
            var $currentSlide = $gallerySlide.eq(currentCarouselID);
            var time = _time || 1;
            var direction = _direction || "next";
            
            if (direction == "next") {
                  TweenLite.to($prevSlide, time, {
                     left: "-100%"
                  });
                  TweenLite.fromTo($currentSlide, time, {
                     left: "100%"
                  }, {
                     left: "0"
                  });
            } else {
                  TweenLite.to($prevSlide, time, {
                     left: "100%"
                  });
                  TweenLite.fromTo($currentSlide, time, {
                     left: "-100%"
                  }, {
                     left: "0"
                  });
            }
            
            TweenLite.delayedCall(time, function() {
              isAnimate = false;
            });
         }
      }
    
      init();
    })


    

    $(function() {
      $(".gallery-container").each(function() {
        let $carousel = $(this);
        let numSlides =  1;
        let $items = $carousel.find(".gallery-slide figure");
        let itemWidth = $items.width() / numSlides;
        
        gsap.set($items, {
          width: itemWidth,
          x: i => i * itemWidth
        });
        
        $carousel.parent().find(".carousel-action").on("click tap", function() {
          if (gsap.isTweening(".gallery-slide figure")) return;
    
          let action = $(this).hasClass("next") ? "next" : "prev";
          jump($carousel, action, $carousel.data("scroll") || 1);
        });
    
        $items.on("click tap", function() {
          if (numSlides > 1) {
            let x = gsap.getProperty(this, "x");
            let action = x > 0 ? "next" : "prev";
            jump($carousel, action, Math.abs(x) / itemWidth || 1);
          }
        });
      });
    });
    
    function jump($carousel, action, numScroll) {
      let speed = 0.5;
      let $items = $carousel.find(".gallery-slide figure");
      let itemWidth = $items.width();
      let totalWidth = itemWidth * $items.length;
      let moveBy = (action === "next" ? "-=" : "+=") + (itemWidth * numScroll);
    
      gsap.to($items, {
        duration: speed,
        x: moveBy,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-itemWidth, totalWidth - itemWidth))
        }
      });
    }
    



})(jQuery)





document.addEventListener("DOMContentLoaded", function(event){
   window.addEventListener("load", function(e){
       const $slides = document.querySelectorAll(".banner-img figure");
       const slidesNum = $slides.length;
       let currentSlideID = 0;
       let isAnimating = false;
       // Set the initial opacity of all slides to 0
       gsap.set($slides, { opacity: 0 });

       // Display the first slide immediately
       gsap.set($slides[0], { opacity: 1 });


       // Function to handle slide transitions
       function gotoSlide(slideID, _time, _direction) {
           if (!isAnimating) {
               isAnimating = true; // Prevent other animations while one is running
               const prevSlideID = currentSlideID;
               currentSlideID = slideID;
               const $prevSlide = $slides[prevSlideID];
               const $currentSlide = $slides[currentSlideID];
               const time = _time !== null ? _time : 1;

                // Animate the previous slide out and the current slide in
                gsap.to($prevSlide, { duration: time, opacity: 0 });
                gsap.to($currentSlide, { duration: time, opacity: 1 });
               // Allow animations after the current one completes
               gsap.delayedCall(time, function() {
                   isAnimating = false;
               });
           }
       }

       // Function to advance to the next slide and continue autoplay
       function play() {
           const nextSlideID = currentSlideID + 1 >= slidesNum ? 0 : currentSlideID + 1;
           gotoSlide(nextSlideID, 1, "next");
           // Recursively call play() after a 4-second delay
           gsap.delayedCall(4, play);
       }

       // Start the autoplay immediately
       play();

     
   }, false);
});