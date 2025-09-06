(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true,
	    dots:true,
	    autoplay:false,
	    responsive:{
	        0:{
	            items:1,
	            nav:false,
	            dots:true,
	            margin:5
	        },
	        576:{
	            items:1,
	            nav:true,
	            dots:true,
	            margin:10
	        },
	        768:{
	            items:1,
	            nav:true,
	            dots:true,
	            margin:15
	        }
	    }
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        var offset = $(window).width() < 768 ? 70 : 49; // Adjust offset for mobile
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - offset
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP - Make responsive
    if ($(window).width() > 768) {
        $('.social-links a').tooltip();
    }

    // Add touch optimization for mobile
    $(window).on('resize', function() {
        if ($(window).width() <= 768) {
            $('.social-links a').tooltip('dispose');
        } else {
            $('.social-links a').tooltip();
        }
    });

    // Improved mobile menu handling
    $('.navbar-toggler').on('click', function() {
        setTimeout(function() {
            if ($('.navbar-collapse').hasClass('show')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'auto');
            }
        }, 300);
    });

    // Close mobile menu when clicking on a link
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() <= 767) {
            $('.navbar-collapse').collapse('hide');
            $('body').css('overflow', 'auto');
        }
    });

})(jQuery);
