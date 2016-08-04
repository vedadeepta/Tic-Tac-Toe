$(document).ready(function(){
	recent = false;

	$(".col-4").hover(function(){
		var selector = "#" + this.id + " h2";
		if($(selector).text() != "X" && $(selector).text() != "O")
		{
			$(selector).text("X");
			recent = true;
		}
	},function(){
		var selector = "#" + this.id + " h2";
		if(recent == true)
		{
			$(selector).text(" ");
			recent = false;
		}
	});

	$(".col-4").bind('click',function(){

		$(".box").toggleClass("uparrow");

		var selector = "";

		if(recent == true)
		{
			recent=false;

			for(i=0; i < 9; i++)
			{
				selector = "#" + i +" h2";
				if($(selector).text() != "X" && $(selector).text() != "O")
				{
					$(selector).text(" ");
				} 
			}
	    }

		
	});
});