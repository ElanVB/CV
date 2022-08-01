/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
   $(window).on("load", function() {

      // will first fade out the loading animation
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

				main();
      });
  	});
})(jQuery);

function main() {
	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	// setTimeout(function() {

   	// $('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	// }, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
  	// $(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
		$(".owl-slider").owlCarousel({
			items: 2,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			nav: true
		});

		$(".single-owl-slider").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			nav: true
		});

		$('.button.accordion').click(function(){
			$('.single-owl-slider').trigger('to.owl.carousel', 0)
		});

		/*---------------------------------------------------- */
		/* Accordion (Summaries)
		------------------------------------------------------ */
		var accordionButton = $('.accordion');
		// var nav = $('.main-navigation');
		// var down = false;

		// toggle button
		accordionButton.on('click', function(e) {
			e.preventDefault();

			var button = $(this);

			var thisButtonActive = button.text() == "Read Less -";

			// toggle all active accordions (close them)
			var actives = $(".accordion-active");
			actives.slideToggle({
				duration: 600,
				easing: "linear"
			});

			actives.each(function() {
				var section = $(this);
				var buttonTitle = section.attr("id");
				//************************************************ */
				// var button = $("#" + buttonTitle + "-button");
				var button = $("a[title='" + buttonTitle + "']");
				//************************************************ */
				button.html("Read More +");

				// var parentSection = section.closest("section");
				// var parentId = parentSection.attr("id");
				button.attr("href", "#" + button.closest("section").attr("id"));
				// button.attr("href", "#" + button.closest("section").attr("id") + "-samples");
				// button.attr("href", "#" + button.closest("section").attr("id").slice(0, -8));
				// button.attr("href", "#" + buttonTitle);
				// button.attr("href", "#writing-samples");
				// button.attr("href", "#summaries");

			});
			actives.toggleClass("accordion-active");

			// if this button is the active one, just collapse
			if (!thisButtonActive) {
				// open the correct accordion
				button.html("Read Less -");

				// because a looping owlCarousel clones the items
				// I need to change the html of the cloned button too
				$("a[title='" + button.attr("title") + "']").html("Read Less -");

				// button.attr("href", "#summaries");
				// button.attr("href", "#writing-samples");
				//************************************************ */
				// var summaryId = button.attr("id").slice(0, -7);
				// console.log(summaryId);
				var summaryId = button.attr("title");
				//************************************************ */
				// var summarySection = $("#" + summaryId);

				//************************************************ */
				// console.log(button.attr("title"));
				// var parentSection = $("#" + button.attr("title"));
				// var parentSection = button.closest("section");
				// //************************************************ */
				// var parentId = parentSection.attr("id");
				// button.attr("href", "#" + parentId);
				// console.log(button.closest("section").attr("id").slice(0, -8));
				button.attr("href", "#" + button.closest("section").attr("id").slice(0, -8));
				// button.attr("href", "#" + button.closest("section").attr("id") + "-samples");
				// button.attr("href", "#" + summaryId);
				// var summaryId = this.id;
				var summarySection = $("#" + summaryId);
				// var summarySection = $(summaryIdString);

				summarySection.toggleClass('accordion-active');
				summarySection.slideToggle({
					duration: 600,
					easing: "linear"
				});
			}


			// if (down) {
			// 	nav.slideToggle({
			// 		duration: 300,
			// 		easing: "linear"
			// 	});
			// } else {
			// 	nav.slideToggle({
			// 		duration: 300,
			// 		easing: "linear"
			// 	});
			// }

			// down = !down;

		});

		/*----------------------------------------------------- */
		/* Alert Boxes
			------------------------------------------------------- */
		$('.alert-box').on('click', '.close', function() {
			$(this).parent().fadeOut(500);
		});


		/*----------------------------------------------------- */
		/* Stat Counter
			------------------------------------------------------- */
		//  var statSection = $("#stats"),
		//      stats = $(".stat-count");

		//  statSection.waypoint({

		//  	handler: function(direction) {

		//     	if (direction === "down") {

		// 		   stats.each(function () {
		// 			   var $this = $(this);

		// 			   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
		// 			   	duration: 4000,
		// 			   	easing: 'swing',
		// 			   	step: function (curValue) {
		// 			      	$this.text(Math.ceil(curValue));
		// 			    	}
		// 			  	});
		// 			});

		//      	}

		//      	// trigger once only
		//      	this.destroy();

		// 	},

		// 	offset: "90%"

		// });


	/*---------------------------------------------------- */
		/*	Masonry
		------------------------------------------------------ */
		var containerProjects = $('#hobbie-folio-wrapper');

		containerProjects.imagesLoaded( function() {

			containerProjects.masonry( {
					itemSelector: '.hobbie-folio-item',
					resize: true
			});

		});


		/*----------------------------------------------------*/
		/*	Modal Popup
		------------------------------------------------------*/
		//  $('.hobbie-item-wrap a').magnificPopup({

		//     type:'inline',
		//     fixedContentPos: false,
		//     removalDelay: 300,
		//     showCloseBtn: false,
		//     mainClass: 'mfp-fade'

		//  });

		//  $(document).on('click', '.popup-modal-dismiss', function (e) {
		//  	e.preventDefault();
		//  	$.magnificPopup.close();
		//  });

		/*---------------------------------------------------- */
		/*	Masonry
		------------------------------------------------------ */
		var containerProjects = $('#folio-wrapper');

		containerProjects.imagesLoaded( function() {

			containerProjects.masonry( {
					itemSelector: '.folio-item',
					resize: true
			});

		});


		/*----------------------------------------------------*/
		/*	Modal Popup
		------------------------------------------------------*/
		$('.item-wrap a[href^="#modal"]').magnificPopup({

				type:'inline',
				fixedContentPos: false,
				removalDelay: 300,
				showCloseBtn: false,
				mainClass: 'mfp-fade',
				callbacks: {
					open: function() {
						$('body').css('overflow', 'hidden');
					},
					close: function() {
						$('body').css('overflow', '');
					}
				}

		 });

		 $(document).on('click', '.popup-modal-dismiss', function (e) {
			 e.preventDefault();
			 $.magnificPopup.close();
		 });

		// var tooltips = document.querySelectorAll('.tooltip span.tooltiptext');
		// window.onmousemove = function (e) {
		// 		var x = (e.clientX + 20) + 'px',
		// 				y = (e.clientY - 15) + 'px';
		// 				// y = (e.clientY - 20) + 'px';
		// 		for (var i = 0; i < tooltips.length; i++) {
		// 				tooltips[i].style.top = y;
		// 				tooltips[i].style.left = x;
		// 		}
		// };

		/*-----------------------------------------------------*/
			/* Navigation Menu
		 ------------------------------------------------------ */
		 var toggleButton = $('.menu-toggle'),
				 nav = $('.main-navigation');
			var cvDownloadButton = $('.relative-button');
			var down = false;
			// var distance = nav.height();
			var distance = nav.outerHeight();
			// console.log(`The hight of the nav is ${distance}.`)

		 // toggle button
			toggleButton.on('click', function(e) {

			e.preventDefault();

			toggleButton.toggleClass('is-clicked');
			// nav.slideToggle({
			// 	duration: 100,
			// 	easing: "linear"
			// });

			// get height position of nav
			// get height of nav
			// move download button (change hight position) in slide
			// cvDownloadButton.toggleClass('is-clicked');
			// console.log(`Moving download button by ${distance}.`)

			if (down) {
				cvDownloadButton.css({'transform': `translateY(0px)`});
				nav.slideToggle({
					duration: 300,
					easing: "linear"
				});
				// cvDownloadButton.css({'transform': 'translateY(0px)'});
			} else {
				cvDownloadButton.css({'transform': `translateY(${distance}px)`});
				nav.slideToggle({
					duration: 100,
					easing: "linear"
				});
				// cvDownloadButton.css({'transform': 'translateY(100px)'});
			}
			down = !down;
		});

		 // nav items
			nav.find('li a').on("click", function() {

			 // update the toggle button
			 toggleButton.toggleClass('is-clicked');
				cvDownloadButton.css({'transform': `translateY(0px)`});
				down = !down;
				// cvDownloadButton.css({'transform': 'translateY(-100px)'});
			// cvDownloadButton.toggleClass('is-clicked');
			// fadeout the navigation panel
			 nav.fadeOut();

			});


		 /*---------------------------------------------------- */
			/* Highlight the current section in the navigation bar
			------------------------------------------------------ */
		var sections = $("section"),
		navigation_links = $("#main-nav-wrap li a");

		sections.waypoint( {

				 handler: function(direction) {

				 var active_section;

				active_section = $('section#' + this.element.id);

				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');
				// var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');

					 navigation_links.parent().removeClass("current");
				active_link.parent().addClass("current");

			},

			offset: '25%'
		});

		 /*---------------------------------------------------- */
		/*  Placeholder Plugin Settings
		------------------------------------------------------ */
		// $('input, textarea, select').placeholder()


		// 	/*---------------------------------------------------- */
		// /*	contact form
		// ------------------------------------------------------ */

		// /* local validation */
		// $('#contactForm').validate({

		// 	/* submit via ajax */
		// 	submitHandler: function(form) {

		// 		var sLoader = $('#submit-loader');

		// 		$.ajax({

		// 	      type: "POST",
		// 	      url: "inc/sendEmail.php",
		// 	      data: $(form).serialize(),
		// 	      beforeSend: function() {

		// 	      	sLoader.fadeIn();

		// 	      },
		// 	      success: function(msg) {

		//             // Message was sent
		//             if (msg == 'OK') {
		//             	sLoader.fadeOut();
		//                $('#message-warning').hide();
		//                $('#contactForm').fadeOut();
		//                $('#message-success').fadeIn();
		//             }
		//             // There was an error
		//             else {
		//             	sLoader.fadeOut();
		//                $('#message-warning').html(msg);
		// 	            $('#message-warning').fadeIn();
		//             }

		// 	      },
		// 	      error: function() {

		// 	      	sLoader.fadeOut();
		// 	      	$('#message-warning').html("Something went wrong. Please try again.");
		// 	         $('#message-warning').fadeIn();

		// 	      }

		//       });
		// 		}

		// });


		 /*----------------------------------------------------- */
			/* Back to top
		 ------------------------------------------------------- */
		var pxShow = 300; // height on which the button will show
		var fadeInTime = 400; // how slow/fast you want the button to show
		var fadeOutTime = 400; // how slow/fast you want the button to hide
		var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

		 // Show or hide the sticky footer button
		jQuery(window).scroll(function() {

			if (!( $("#header-search").hasClass('is-visible'))) {

				if (jQuery(window).scrollTop() >= pxShow) {
					jQuery("#go-top").fadeIn(fadeInTime);
				} else {
					jQuery("#go-top").fadeOut(fadeOutTime);
				}

			}

		});

		/*---------------------------------------------------- */
		/* Smooth Scrolling
		------------------------------------------------------ */
		$('.smoothscroll').on('click', function (e) {

			e.preventDefault();

			var target = this.hash,
				$target = $(target);

				$('html, body').animate({
					'scrollTop': $target.offset().top
				}, 800, 'swing', function () {
					window.location.hash = target;
				});

			});
}