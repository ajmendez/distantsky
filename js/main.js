/*global jQuery:false */
(function ($) {
	var $nav = $("#navigation");
	$(window).load(function(){
      $nav.sticky({ topSpacing: 0 });
    });
    $("#navigation").on('sticky-start', function() {
		$('#navmain').toggleClass('hover');
		$('#navintro').toggleClass('hover');
	});
	$nav.on('sticky-end', function() {
		$('#navmain').toggleClass('hover');
		$('#navintro').toggleClass('hover');
	});
    var h = $(window).height();
    var w = $(window).width();

	
	// smooth links
	var $root = $('html, body');
	$('ul.nav>li>a').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 500, function () {
	        window.location.hash = href;
	    });
	    return false;
	});
	
	
    
    
	$('#movie').nivoLightbox({
    effect: 'fadeScale',
    theme: 'default',
    keyboardNav: true,
    clickOverlayToClose: true,
    beforeShowLightbox: function(){
        try {
            pJSDom[0].pJS.particles.move.enable = false;
        } catch (ignore) {
        };
        
    },
    errorMessage: 'The requested content cannot be loaded. Please try again later.',
    videoAutoplay: true,
    });
    
    
    
    var owl = $('.owl-carousel');
    if (w < 800) {
        var navtext = ['<i class="fa fa-2x fa-chevron-left"></i><br />Closer to us', '<i class="fa fa-2x fa-chevron-right"></i><br>Further away']
    } else {
        var navtext = ['<i class="fa fa-5x fa-chevron-left"></i><br />Closer to us', '<i class="fa fa-5x fa-chevron-right"></i><br>Further away']
    }
    owl.owlCarousel({
        loop:false,
        nav:(w > 450),
        navText:navtext,
        smartSpeed: 600,
        fluidSpeed: 100,
        dotsSpeed: 100,
        dots: (w > 650),
        stagePadding: 0,
        responsive:{
            0:{
                items:1
            },
        }
    });
    $(document.documentElement).keyup(function(event) {
        // handle cursor keys
        if (event.keyCode == 37 | event.keyCode == 38) {
            owl.trigger('prev.owl');
        } else if (event.keyCode == 39 | event.keyCode == 40) {
            owl.trigger('next.owl');
        }
    });
    
    $('.infoexpand').hide();
    $('.infoheader h3').click(function() {
        $(this).parent().find('ul').slideToggle();
    });
	$('img.hovercone').bind("click touchstart", function (e) {
	    'use strict'; //satisfy code inspectors
	    var link = $(this); //preselect the link
		link.toggleClass('hover');
	});
	
    
    
})(jQuery);








