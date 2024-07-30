/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/front.js":
/*!*************************!*\
  !*** ./blocks/front.js ***!
  \*************************/
/***/ (() => {

eval("//frontend js functionality\nwindow.addEventListener('DOMContentLoaded', function () {\n   var displayedVideos = document.querySelector('.displayed-video video');\n   var videos = document.querySelectorAll('.thumb-bar-video .thumb-container .thumb-video-item video');\n   var thumbBarItems = document.querySelectorAll('.thumb-bar-video .thumb-container .thumb-video-item');\n   var individualTexts = document.querySelectorAll('.thumb-bar-video .thumb-container .texts');\n   var text = document.querySelector('.text');\n   var overlay = document.querySelector('.overlay');\n\n   //set video describtion functionality\n   function setText() {\n      var setTextArray = [];\n      for (var i = 0; i < individualTexts.length; i++) {\n         var individualText = individualTexts[i];\n         setTextArray.push(individualText.innerHTML);\n      }\n      return setTextArray;\n   }\n   //save individual text inside result\n   var result = setText();\n\n   //loop through viddeo, controls all click activity\n\n   var _loop = function _loop(i) {\n      var video = videos[i];\n      video.controls = false;\n      video.setAttribute('text', result[i]);\n      text.textContent = video.getAttribute('text', result[0]);\n\n      video.addEventListener('click', function (e) {\n         text.textContent = video.getAttribute('text', result[i]);\n         displayedVideos.src = e.target.src;\n         displayedVideos.poster = video.poster;\n         displayedVideos.controls = true;\n\n         if (text.classList.contains(\"none\") || overlay.classList.contains(\"none\")) {\n            text.classList.remove(\"none\");\n            text.classList.add(\"text\");\n            overlay.classList.remove(\"none\");\n            overlay.classList.add(\"overlay\");\n         }\n      });\n      text.addEventListener('click', function (e) {\n         displayedVideos.play();\n         text.classList.add(\"none\");\n         overlay.classList.add(\"none\");\n      });\n   };\n\n   for (var i = 0; i < videos.length; i++) {\n      _loop(i);\n   }\n\n   //pause podcast when another is clicked\n   var tracks = Array.from(document.querySelectorAll('audio'));\n   tracks.forEach(function (track) {\n      track.addEventListener('play', function (event) {\n         tracks.forEach(function (track) {\n            if (track !== event.target) track.pause();\n         });\n      });\n   });\n\n   //Add new class for pages Banner\n   var pageBody = document.querySelector('body');\n   var bannerHome = document.querySelector('.banner-section');\n\n   if (pageBody.className === 'home page-template-default page page-id-8 logged-in' || pageBody.className === 'home page-template-default page page-id-8') {\n      if (bannerHome) {\n         bannerHome.classList.remove(\"banner-page\");\n      }\n   } else {\n      if (bannerHome) {\n         bannerHome.classList.add(\"banner-page\");\n      }\n   }\n});\n\n//# sourceURL=webpack://orangeline-interiors/./blocks/front.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _blocks_front_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../blocks/front.js */ \"./blocks/front.js\");\n/* harmony import */ var _blocks_front_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_front_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n(function ($) {\n  $(document).ready(function () {\n    $(window).scroll(function () {\n      var scroll = $(window).scrollTop();\n      if (scroll > 100) {\n        $(\".site-header\").addClass(\"head-scroll\");\n      } else {\n        $(\".site-header\").removeClass(\"head-scroll\");\n      }\n    });\n  });\n\n  $('.js-nav-toggle').click(function (e) {\n    e.preventDefault();\n    console.log('bvvvv');\n    $('.js-nav-toggle').toggleClass('new');\n    $('.js-menu-toggle, html, body, header').toggleClass('menu-open');\n  });\n\n  //scroll down on click bannericon\n  $(\".js-scroll-next-block\").click(function () {\n    var nextSection = $(this).closest('section').next('section');\n    var offsetTop = nextSection.offset().top - 5 * parseFloat($('body').css('font-size'));\n    $('html, body').animate({\n      scrollTop: offsetTop\n    }, 1000);\n  });\n\n  //testimonial carousel\n  $(\".testimonial-container\").each(function () {\n    var $slider = $(this).find('.testimonial-slide');\n    var $gallerySlide = $slider.find(\"figure\");\n    var $navPrev = $(this).find(\".prev\");\n    var $navNext = $(this).find(\".next\");\n    var SlideLength = $gallerySlide.length;\n    var currentCarouselID = 0;\n    var isAnimate = false;\n\n    function init() {\n      TweenLite.set($gallerySlide, {\n        left: \"-100%\"\n      });\n      $navPrev.on(\"click\", gotoPrevSlide);\n      $navNext.on(\"click\", gotoNextSlide);\n      gotoSlide(0, 0);\n    }\n\n    function gotoPrevSlide() {\n      var slideToGo = currentCarouselID - 1;\n      if (slideToGo < 0) {\n        slideToGo = SlideLength - 1;\n      }\n      gotoSlide(slideToGo, 1, \"prev\");\n    }\n\n    function gotoNextSlide() {\n      var slideToGo = currentCarouselID + 1;\n      if (slideToGo >= SlideLength) {\n        slideToGo = 0;\n      }\n      gotoSlide(slideToGo, 1, \"next\");\n    }\n\n    function gotoSlide(slideID, _time, _direction) {\n      if (!isAnimate) {\n        isAnimate = true;\n        var prevSlideID = currentCarouselID;\n        currentCarouselID = slideID;\n        var $prevSlide = $gallerySlide.eq(prevSlideID);\n        var $currentSlide = $gallerySlide.eq(currentCarouselID);\n        var time = _time || 1;\n        var direction = _direction || \"next\";\n\n        if (direction == \"next\") {\n          TweenLite.to($prevSlide, time, {\n            left: \"-100%\"\n          });\n          TweenLite.fromTo($currentSlide, time, {\n            left: \"100%\"\n          }, {\n            left: \"0\"\n          });\n        } else {\n          TweenLite.to($prevSlide, time, {\n            left: \"100%\"\n          });\n          TweenLite.fromTo($currentSlide, time, {\n            left: \"-100%\"\n          }, {\n            left: \"0\"\n          });\n        }\n\n        TweenLite.delayedCall(time, function () {\n          isAnimate = false;\n        });\n      }\n    }\n\n    init();\n  });\n\n  $(function () {\n    $(\".gallery-container\").each(function () {\n      var $carousel = $(this);\n      var numSlides = 1;\n      var $items = $carousel.find(\".gallery-slide figure\");\n      var itemWidth = $items.width() / numSlides;\n\n      gsap.set($items, {\n        width: itemWidth,\n        x: function x(i) {\n          return i * itemWidth;\n        }\n      });\n\n      $carousel.parent().find(\".carousel-action\").on(\"click tap\", function () {\n        if (gsap.isTweening(\".gallery-slide figure\")) return;\n\n        var action = $(this).hasClass(\"next\") ? \"next\" : \"prev\";\n        jump($carousel, action, $carousel.data(\"scroll\") || 1);\n      });\n\n      $items.on(\"click tap\", function () {\n        if (numSlides > 1) {\n          var x = gsap.getProperty(this, \"x\");\n          var action = x > 0 ? \"next\" : \"prev\";\n          jump($carousel, action, Math.abs(x) / itemWidth || 1);\n        }\n      });\n    });\n  });\n\n  function jump($carousel, action, numScroll) {\n    var speed = 0.5;\n    var $items = $carousel.find(\".gallery-slide figure\");\n    var itemWidth = $items.width();\n    var totalWidth = itemWidth * $items.length;\n    var moveBy = (action === \"next\" ? \"-=\" : \"+=\") + itemWidth * numScroll;\n\n    gsap.to($items, {\n      duration: speed,\n      x: moveBy,\n      ease: \"none\",\n      modifiers: {\n        x: gsap.utils.unitize(gsap.utils.wrap(-itemWidth, totalWidth - itemWidth))\n      }\n    });\n  }\n})(jQuery);\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n  window.addEventListener(\"load\", function (e) {\n    var $slides = document.querySelectorAll(\".banner-img figure\");\n    var slidesNum = $slides.length;\n    var currentSlideID = 0;\n    var isAnimating = false;\n    // Set the initial opacity of all slides to 0\n    gsap.set($slides, { opacity: 0 });\n\n    // Display the first slide immediately\n    gsap.set($slides[0], { opacity: 1 });\n\n    // Function to handle slide transitions\n    function gotoSlide(slideID, _time, _direction) {\n      if (!isAnimating) {\n        isAnimating = true; // Prevent other animations while one is running\n        var prevSlideID = currentSlideID;\n        currentSlideID = slideID;\n        var $prevSlide = $slides[prevSlideID];\n        var $currentSlide = $slides[currentSlideID];\n        var time = _time !== null ? _time : 1;\n\n        // Animate the previous slide out and the current slide in\n        gsap.to($prevSlide, { duration: time, opacity: 0 });\n        gsap.to($currentSlide, { duration: time, opacity: 1 });\n        // Allow animations after the current one completes\n        gsap.delayedCall(time, function () {\n          isAnimating = false;\n        });\n      }\n    }\n\n    // Function to advance to the next slide and continue autoplay\n    function play() {\n      var nextSlideID = currentSlideID + 1 >= slidesNum ? 0 : currentSlideID + 1;\n      gotoSlide(nextSlideID, 1, \"next\");\n      // Recursively call play() after a 4-second delay\n      gsap.delayedCall(4, play);\n    }\n\n    // Start the autoplay immediately\n    play();\n  }, false);\n});\n\n//# sourceURL=webpack://orangeline-interiors/./src/js/main.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orangeline-interiors/./src/css/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;