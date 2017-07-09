$(document).ready(function(){
//	open and close popup
	$("#n").click(function(e){
		$("#drop").slideDown("fast");
		e.stopPropagation();
	});

	$("#b").click(function(e){
		e.stopPropagation();
	});

	$("#d").click(function(e){
		e.stopPropagation();
	});

	$(document).click(function(){
		if($("#d").is(':visible')){
				$("#d").slideUp("slow",function(){
					$("#b").animate({height: '-=10px'},function(){
						$("#drop").hide();
					});	
			});	
		}
		else{
			$("#drop").hide();
		}			
	
	});
//
//	animate popup
	$("#b").click(function(){
		
		if($("#d").is(':hidden')){
			$(this).animate({
				height: '+=10px'
			});	
			
		}
		else {
			$(this).animate({
				height: '-=10px'
			});		
		}
		$("#d").animate({
			height: 'toggle'
		});	

	});

//open and close menu
	$("#link").click(function(e){
		$("#menu").slideDown("fast");
	});

	$(".close").click(function(){
		 $("#menu").hide();
	});


/*
	
	$(".bar").css({
				'font-size': '-=1em'
			},"2000","swing");

	$("#my").animate({width:'toggle'},350);

*/

		
	$("#my").show(500,function(){
		$("strong").css({
			'font-size': '+=20px'
		});
	});	

/*	$("#time").click(function(){
		var d = new Date($.now());
		$(this).text(d);
	});
*/


});