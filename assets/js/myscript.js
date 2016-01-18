var app = {
    init: function() {
        // Start Carousel
        app.startOwlCaraousel();
        app.toggleMenu();
    },
    startOwlCaraousel: function() {
    	// Start Carousel
	  	$("#slide").owlCarousel({
	      	slideSpeed : 300,
	      	paginationSpeed : 400,
	      	singleItem:true,
	      	autoPlay:true
	  });
	},

	toggleMenu:function() {
		// toogle menu in mobile
	    var pull        = $('#mobile-nav');
	        menu        = $('nav ul');
	        menuHeight  = menu.height();
	 
	    $(pull).on('click', function(e) {
	        e.preventDefault();
	        menu.slideToggle();
	    });
	},

	onResizeFuntion:function(){
		// remove style when rezizing
	    var w = $(window).width();
	    if(w > 900 && menu.is(':hidden')) {
	        menu.removeAttr('style');
	    }
	}


};

jQuery(document).ready(function($){
    app.init();
    $(window).resize(app.onResizeFuntion()); 

});
