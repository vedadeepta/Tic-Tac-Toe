jQuery(document).ready(function(){

	//responsive tictactoe grid
	//height of wach column depends on font-size;

      

	if($(window).width() > 550)
	{
		$(".row").css("height",($(window).width()/9.10) + "px");


		$(".animate span").not("#mid").css("width",$(".animate").width()/5.117 + "px");
		$(".animate span").eq(2). css("width",$(".animate").width()/3.0702 + "px");
	}
	else
	{
		$(".row").css("height",($(window).width()/4.16) +"px");
		$(".phone").css("height",$(".phone").width()/3 +"px");
	}

   
     
    $(".elem").css("height",$(".col-4").height()+"px");

	$(".elem.circle span").css("border-width", $(".elem.circle span").width()/4.2+ "px" )
	
	$(window).resize(function(){

		//adjusting height of the row	
		if($(window).width() > 550)
		{
			$(".row").css("height",($(window).width()/9.10) + "px");
					//adjusting the html logo
			$(".animate span").not("#mid"). css("width",$(".animate").width()/5.117 + "px");
			$(".animate span").eq(2). css("width",$(".animate").width()/3.0702 + "px");
		}
		else
		{
			$(".row").css("height",($(window).width()/4.16) + "px");
			$(".phone").css("height",$(".phone").width()/3 +"px");
		}

		for(i=0; i<=5; i++)
		{
       
			$(".elem.circle span").css("border-width", $(".elem.circle span").width()/4.2+ "px" );
		}
		
 		$(".elem").css("height",$(".col-4").height()+"px");
	});
});