jQuery(document).ready(function(){

	//responsive tictactoe grid
	//height of wach column depends on font-size;

	$(".row").css("height",($(window).width()/9.10) + "px");
	$(".elem.circle span").css("border-width", $(".elem.circle span").width()/3.5 + "px" )
	
	$(".animate span").not("#mid").css("width",$(".animate").width()/5.117 + "px");
	$(".animate span").eq(2). css("width",$(".animate").width()/3.0702 + "px");

	$(window).resize(function(){

		//adjusting border-width of the circles		
		$(".elem.circle span").css("border-width", $(".elem.circle span").width()/3.5 + "px" )

		//adjusting height of the row
		$(".row").css("height",($(window).width()/9.10) + "px");
		
		//adjusting the html logo
		$(".animate span").not("#mid"). css("width",$(".animate").width()/5.117 + "px");
		$(".animate span").eq(2). css("width",$(".animate").width()/3.0702 + "px");

	});
});