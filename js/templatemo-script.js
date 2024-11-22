/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').click(function(){
		$('.tm-nav').slideToggle();
	});

	$( window ).resize(function() {
		if($( window ).width() > 767) {
			$('.tm-nav').show();
		} else {
			$('.tm-nav').hide();
		}
	});

  // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  $('body').bind('touchstart', function() {});

  // Smooth scroll
  // https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

$(window).load(function() {
	// Remove preloader
	// https://ihatetomatoes.net/create-custom-preloading-screen/
	$('body').addClass('loaded');
});

var map = '';
var center;

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(13.758468,100.567481),
    scrollwheel: false
  };
  
  map = new google.maps.Map(document.getElementById('google-map'),  mapOptions);

  google.maps.event.addDomListener(map, 'idle', function() {
    calculateCenter();
  });
  
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
  document.body.appendChild(script);
}
$(document).ready(function(){                
  loadGoogleMap();                
});