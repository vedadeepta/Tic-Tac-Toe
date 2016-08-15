jQuery(document).ready(function(){

	

	$(".headingdown").addClass("headingup");
	$(".transhead-down").addClass("transhead-up");
	

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
				for(i=0; i<=5; i++)
				{
					$(selector + ".circle"+ " span").css("border-width", $(selector + ".circle"+ " span").width()/4.2  + "px" );
				}
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


		var index="";
		var selector = "#" + this.id + " .elem";

		if(recent == true)
		{

			$(".box").toggleClass("uparrow");
			$(".animate span").css("animation-duration",'0.8s').hide().show(0);
			$(".hal").css("animation-duration",'1s').hide().show(0);

			recent=false;
			if(cl === "cross")
			{
				$(selector+"." + cl+" span").css("width","0%");
				$(selector+"." + cl + " span:nth-child(1)").css("top","20%");
				$(selector+"." + cl + " span:nth-child(2)").css("top","80%");
				
				$(selector +"."+cl + " span:nth-child(1)").animate({width: "52%", top:"50%"},450);
				$(selector +"."+cl + " span:nth-child(2)").animate({width: "52%", top:"50%"},450);
				$(selector +"."+cl + " span").css("background","#842c80");

				cl="circle"
			}
			else
			{
				$(selector +"."+cl+ " span").css("border","solid "+"#842c80");
				var width=0;
				for(i=0; i<=5;i++)
				{
					width =  $(selector + ".circle"+ " span").width()/5;
				}

				$(selector+"." + cl+" span").css("width","0%");
				$(selector+"." + cl+" span").css("height","0%");
				$(selector+"." + cl+" span").css("border-width","0%");
				$(selector +"."+cl + " span:nth-child(1)").animate({width:"50%",height:"50%","border-width": width+"px"},300);

				cl="cross";
			}
	    }

	});

});