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
        var categoriaImagen = $(this).attr("id");
        
        switch (categoriaImagen) {
        	case "afiches":
        		var div = 0;

				while (div < 2) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/afiche-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');

					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
        	break;
        	case "catalogos":
				var div = 0;
				while (div < 8) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/catalogo-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
			case "empresas":
				var div = 0;
				while (div < 1) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/empresa-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
    		case "etiquetas":
				var div = 0;
				while (div < 3) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/etiqueta-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;

    		case "carpetas":
	    				var div = 0;

	    				while (div < 4) {
							var wrapper = $(".carousel-inner");
							var item = $("<div></div>");
							item.addClass('item text-center imagen-dinamica-' + div);
							var imagen = $("<img/>");
							imagen.attr("src",("images/productos-demo/folder-" + div + ".png"));
							item.append(imagen);
							wrapper.append(item);
							$(".carousel-inner .item:first").addClass('active');
							
							var indicator =  $(".carousel-indicators");
							var listIndicator = $("<li></li>");
							listIndicator.attr('data-target',"#lightbox");
							listIndicator.attr({
								"data-target": '#lightbox',
								"data-slide-to": div
							});
							indicator.append(listIndicator);
							$(".carousel-indicators li:first").addClass('active');
							div++;
	    				}
	    	break;

	    	case "pop":
				var div = 0;

				while (div < 1) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/pop-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
			case "promociones":
				var div = 0;

				while (div < 6) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/promocional-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
			case "volantes":
				var div = 0;

				while (div < 1) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/volante-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
			case "hojas":
				var div = 0;
				while (div < 3) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/hoja-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
			case "tarjetas":
				var div = 0;
				while (div < 1) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/tarjeta-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
			case "brochures":
				var div = 0;
				while (div < 5) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/brochure-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
			case "sobres":
				var div = 0;
				while (div < 3) {
					var wrapper = $(".carousel-inner");
					var item = $("<div></div>");
					item.addClass('item text-center imagen-dinamica-' + div);
					var imagen = $("<img/>");
					imagen.attr("src",("images/productos-demo/sobre-" + div + ".png"));
					item.append(imagen);
					wrapper.append(item);
					$(".carousel-inner .item:first").addClass('active');
					
					var indicator =  $(".carousel-indicators");
					var listIndicator = $("<li></li>");
					listIndicator.attr('data-target',"#lightbox");
					listIndicator.attr({
						"data-target": '#lightbox',
						"data-slide-to": div
					});
					indicator.append(listIndicator);
					$(".carousel-indicators li:first").addClass('active');
					div++;
				}
			break;
        }
    	
    });

	$("#close").click(function() {
		$(".carousel-inner .item").remove();
		 $(".carousel-indicators li").remove();
	});
});


jQuery(document).ready(function($) {
	(function($){
		    $.fn.scrollingTo = function( opts ) {
		        var defaults = {
		            animationTime : 1000,
		            easing : '',
		            callbackBeforeTransition : function(){},
		            callbackAfterTransition : function(){}
		        };

		        var config = $.extend( {}, defaults, opts );

		        $(this).click(function(e){
		            var eventVal = e;
		            e.preventDefault();

		            var $section = $(document).find( $(this).data('section') );
		            if ( $section.length < 1 ) {
		                return false;
		            };

		            if ( $('html, body').is(':animated') ) {
		                $('html, body').stop( true, true );
		            };

		            var scrollPos = $section.offset().top;

		            if ( $(window).scrollTop() == scrollPos ) {
		                return false;
		            };

		            config.callbackBeforeTransition(eventVal, $section);

		            $('html, body').animate({
		                'scrollTop' : (scrollPos+'px' )
		            }, config.animationTime, config.easing, function(){
		                config.callbackAfterTransition(eventVal, $section);
		            });
		        });
		    };
		}(jQuery));
});