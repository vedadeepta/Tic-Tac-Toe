jQuery(document).ready(function(){

	recent = false;
	var cl = "circle"

	$(".col-4").hover(function(){

		
		var selector = "#" + this.id + " .elem";
		//console.log(selector);

		if( $(selector).attr("class") == "elem" )
		{
			$(selector).addClass(cl);
			$(".elem.circle span").css("border-width", $(".elem.circle span").width()/4 | 0 + "px" )
			recent = true;
		}

	},function(){

		var selector = "#" + this.id + " .elem";
		if(recent == true)
		{
			$(selector).removeClass(cl);
			recent = false;
		}
	});

	$(".col-4").bind('click',function(){

		$(".box").toggleClass("uparrow");
		$(".animate span").css("animation-duration",'0.8s').hide().show(0);

		var selector = "";
		var index="";

		if(recent == true)
		{
			recent=false;
			if(cl === "cross")
			{
				cl="circle";
			}
			else
			{
				cl="cross";
			}
	    }

	});

});