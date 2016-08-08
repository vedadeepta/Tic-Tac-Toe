jQuery(document).ready(function(){

	//responsive tictactoe grid
	//height of wach column depends on font-size;

	$(".row").css("height",($(window).width()/9.10) + "px");
	$(".elem.circle span").css("border-width", $(".elem.circle span").width()/4.2+ "px" )
	
	$(".animate span").not("#mid").css("width",$(".animate").width()/5.117 + "px");
	$(".animate span").eq(2). css("width",$(".animate").width()/3.0702 + "px");

	$(window).resize(function(){

		//adjusting border-width of the circles	
		for(var i=0; i<3; i++)//loop for workaround, because after resizing $(".elem.circle span").width() was returng 0
		{
			$(".elem.circle span").css("border-width", $(".elem.circle span").width()/4.2+ "px" )
		}
		//$(".elem.circle span").css("border-width", $(".elem.circle span").width()/3.5+ "px" )
		//console.log($(".elem.circle span").width()/4.3 | 0);

		//adjusting height of the row
		$(".row").css("height",($(window).width()/9.10) + "px");
		
		//adjusting the html logo
		$(".animate span").not("#mid"). css("width",$(".animate").width()/5.117 + "px");
		$(".animate span").eq(2). css("width",$(".animate").width()/3.0702 + "px");

	});
});