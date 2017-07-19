$(document).ready(function(){
	function ant() {
		$("#link1").animate({'margin-left':'+=20px'},1000).animate({'margin-left':'-=20px'},1000, ant)
	}

ant();


	$(window).mousemove(function(e)
	{

			if(e.pageX+70 > $(window).width()){
				$(".right").show('slide', {direction: 'right'}, 1000);
			}
			else{
				$(".right").hide('slide', {direction: 'right'}, 1000);
			}
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

/*
	$(window).mousemove(function(e)
		{
			if(e.pageY+40 < $(window).height()){
				$(".back").slideUp();
			}
			else{
				$(".back").slideDown();
			}

			
		});
*/
