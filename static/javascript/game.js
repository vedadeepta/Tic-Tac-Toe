function restart()
{
	$(".restart").toggleClass("restart_show");

	for(i=0; i<9; i++)
	{

		var selector = "#" + i + " .elem";

		if($(selector).hasClass("cross"))
		{
				$(selector +".cross" + " span").removeAttr('style');
				$(selector).removeClass("cross");
		}
		else
		{
				$(selector +".circle" + " span").removeAttr('style');
				$(selector).removeClass("circle");
		}

	}
}

function draw_move(data)
{
	$(".animate span").css("animation-duration",'0.8s').hide().show(0);
	$(".hal").css("animation-duration",'1s').hide().show(0);


	setTimeout(function(){ $("#bottom").text(data.r); computer_done=true; },4000);

} 

function process_board()
{
	str="";

	index="";

	for(i=0; i<9; i++)
	{
		if ($("#" + i + ">div").hasClass("cross"))
		{
			str=str+"x";
		}
		else if ($("#" + i + ">div").hasClass("circle"))
		{
			str=str+"o";
		}
		else
		{
			str=str+"n"
		}
	}

	$.getJSON('/_compute_pos',{a : str },draw_move);

}


