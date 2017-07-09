$(document).ready(function(){
	$(window).mousemove(function(e)
		{
			if(e.pageY+40 < $(window).height()){
				$(".back").slideUp();
			}
			else{
				$(".back").slideDown();
			}

			if(e.pageX+40 > $(window).width()){
				$(".right").show('slide', {direction: 'right'}, 1000);
			}
			else{
				$(".right").hide('slide', {direction: 'right'}, 1000);
			}
		      //mouse coordinates: e.pageX e.pageY
		      //window height $(window).height()
		});

		$(".right li").mouseenter(function(){
			$(this).addClass('active');
		});
		$(".right li").mouseleave(function(){
			$(this).removeClass('active');
		});
});

function goBack() {
	window.history.back();
}