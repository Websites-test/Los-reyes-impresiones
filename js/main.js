;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Burger Menu
	var burgerMenu = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(){
			if ( $('#fh5co-navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}
			
		});
	};

	var owlCrouselFeatureSlide = function() {
		
		var owl = $('.owl-carousel');

		owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
			var current = elem.item.index;
			$(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
		});
		owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
			window.setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
			}, 400);
     	});

		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    smartSpeed: 500,
		    autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		    navText: [	
		      "<i class='icon-arrow-left2 owl-direction'></i>",
		      "<i class='icon-arrow-right2 owl-direction'></i>"
	     	],

		});
		
	};


	// Magnific Popup
	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};


	// Animate Feature
	var animateFeatureIcons = function() {
		if ( $('#fh5co-features').length > 0 ) {	
			$('#fh5co-features .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Products
	var animateProducts = function() {
		if ( $('#fh5co-products').length > 0 ) {	
			$('#fh5co-products .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};

	// Animate Clients Logo
	var animateClientLogo = function() {
		if ( $('#fh5co-clients').length > 0 ) {	
			$('#fh5co-clients .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};


	// Waypoints 
	var featureIconsWayPoint = function() {
		if ( $('#fh5co-features').length > 0 ) {
			$('#fh5co-features').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					
					

					setTimeout(animateFeatureIcons, 200);
					
					
					$(this).addClass('animated');
						
				}
			} , { offset: '80%' } );
		}
	};
	var productsWayPoint = function() {
		if ( $('#fh5co-products').length > 0 ) {
			$('#fh5co-products').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					
					

					setTimeout(animateProducts, 200);
					
					
					$(this).addClass('animated');
						
				}
			} , { offset: '80%' } );
		}
	};

	var clientsWayPoint = function() {
		if ( $('#fh5co-products').length > 0 ) {
			$('#fh5co-products').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					
					

					setTimeout(animateClientLogo, 200);
					
					
					$(this).addClass('animated');
						
				}
			} , { offset: '80%' } );
		}
	};

	
	
	$(function(){
		
		burgerMenu();
		owlCrouselFeatureSlide();
		magnifPopup();

		featureIconsWayPoint();
		productsWayPoint();
		clientsWayPoint();
		

	});


}());

/*Scroll top button*/
 $(document).ready(function(){
  
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});

/*Change color menu scroll*/
$(document).ready(function(){
  $(window).bind('scroll', function() {
    var distance = 700;
    if ($(window).scrollTop() > distance) {
      $('nav').addClass('scrolled');
    }
    else {
      $('nav').removeClass('scrolled');
    }
  });
});


/*Cambio imagenes slider productos*/


$(document).ready(function(){
	$('.imagen-portafolio').click(function(){
        var dataImagen = $(this).attr("data-slide-to");
        
        for (var i = dataImagen.length - 1; i >= 0; i--) {
        	var position = dataImagen[i];

        	if(position == "0"){
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/10.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/11.jpg" alt="item3"/>');
        	
        	}else if (position == "1") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/3.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/8.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/5.jpg" alt="item3"/>');
        	
        	}else if (position == "2") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/15.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/16.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/17.jpg" alt="item3"/>');
        	
        	}else if (position == "3") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/11.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/12.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/13.jpg" alt="item3"/>');
        	
        	}else if (position == "4") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/3.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/10.jpg" alt="item3"/>');
        	
        	}else if (position == "5") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/3.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/10.jpg" alt="item3"/>');
        	
        	}else if (position == "6") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/3.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/10.jpg" alt="item3"/>');
        	
        	}else if (position == "7") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/3.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/10.jpg" alt="item3"/>');
        	
        	}else if (position == "8") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/3.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/10.jpg" alt="item3"/>');
        	
        	}else if (position == "9") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/3.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/10.jpg" alt="item3"/>');
        	
        	}else if (position == "10") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/3.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/10.jpg" alt="item3"/>');
        	
        	}else if (position == "11") {
        		$('.imagen-dinamica-1').prepend('<img  src="images/productos-demo/2.jpg" alt="item1"/>');
        		$('.imagen-dinamica-2').prepend('<img  src="images/productos-demo/3.jpg" alt="item2"/>');
        		$('.imagen-dinamica-3').prepend('<img  src="images/productos-demo/10.jpg" alt="item3"/>');
        	}
        }
    });
    $("#close").click(function(){
		$('.imagen-dinamica-1 img').remove();
		$('.imagen-dinamica-2 img').remove();
		$('.imagen-dinamica-3 img').remove();
    })
});