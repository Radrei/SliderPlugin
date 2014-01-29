(function($){
    $.fn.MySlider = function() {
		setInterval(function(){
			$('#test li:first-child').animate({left: '300px'}, function(){
				$(this).next('li').animate({left: '-+300px'}).end().appendTo('#test').css({left: '0px'});
			});
		}, 3000);
		
    };
})(jQuery);


/*http://www.blockcoders.net/loop-fade-list-elements-jquery*/