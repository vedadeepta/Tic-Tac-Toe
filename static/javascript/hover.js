jQuery(document).ready(function(){


	

	recent = false;
	var cl = "circle"

	$(".col-4").hover(function(){

		
		var selector = "#" + this.id + " .elem";
		//console.log(selector);

		if( $(selector).attr("class") == "elem" )
		{
			$(selector).addClass(cl);
			
			recent = true;


			if(cl === "cross")
			{
				$(selector +"."+cl+ " span").css("background","#e0a0ea");
			}
			else
			{
				$(selector +"."+cl+ " span").css("border","solid "+"#e0a0ea");
				$(selector + ".circle"+ " span").css("border-width", $(selector + ".circle"+ " span").width()/4.2  + "px" )
			}
		}

	},function(){

		var selector = "#" + this.id + " .elem";
		if(recent == true)
		{
			//console.log("got it");
			$(selector +"."+cl+ " span").css("background","none");
			$(selector +"."+cl+ " span").css("border","none");
			$(selector + ".circle"+ " span").css("border-width", "0px" )
			$(selector).removeClass(cl);
			recent = false;
		}
	});

	$(".col-4").bind('click',function(){

		$(".box").toggleClass("uparrow");
		$(".animate span").css("animation-duration",'0.8s').hide().show(0);

		var index="";
		var selector = "#" + this.id + " .elem";

		if(recent == true)
		{
			recent=false;
			if(cl === "cross")
			{
				$(selector +"."+cl+ " span").css("background","#842c80");
				cl="circle";
			}
			else
			{
				$(selector +"."+cl+ " span").css("border","solid "+"#842c80");
				$(selector + ".circle"+ " span").css("border-width", $(selector + ".circle"+ " span").width()/4.2 + "px" )
				cl="cross";
			}
	    }

	});

});