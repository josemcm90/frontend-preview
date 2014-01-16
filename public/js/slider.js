var Slider = (function($, Swiper){
	var _options = {
		autoplay: 5000,
		pagination: '.slider-pagination',
		paginationClickable: true,
		loop: true,
		calculateHeight: true,
		grabCursor: true,
	};

	var width_switch = 1000;

	var _mySwiper = {};

	function _onClickPrev(e){
		e.preventDefault();
		_mySwiper.swipePrev();
	};

	function _onClickNext(e){
		e.preventDefault();
		_mySwiper.swipeNext();
	};

	function _width_check(){
		var width = $(this).width();

		if( width > width_switch ){
			_mySwiper.resizeFix();
		}		
	}

	return {
		init : function(){
			_mySwiper = new Swiper('.swiper-container', _options);
			$('.slider-prev').on('click', _onClickPrev);
			$('.slider-next').on('click', _onClickNext);
			$(window).on('resize', _width_check);
		},
		resize_fix : function(){
			console.log('test')
			
		}
	};

})(jQuery, Swiper);
