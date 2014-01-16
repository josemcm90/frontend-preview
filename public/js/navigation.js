var Navigation = (function($){
	var mobile_icon = $('#mobile-nav-icon'),
		menu = $('.menu'),
		width_switch = 1000;

	function _toggle(){
		menu.slideToggle();
		return false;
	}

	function _width_check(){
		var width = $(this).width();

		if( width > width_switch && menu.is(':hidden') ){
			menu.show();
		}
	}

	return {
		init: function(){
			$(mobile_icon).on('click', _toggle);
			$(window).on('resize', _width_check);
		}
	}
})(jQuery);