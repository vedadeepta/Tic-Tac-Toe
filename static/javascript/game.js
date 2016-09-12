function clear_board()
{
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
	if (data.r == -1 )
	{
		restart();
	}
	else
	{
		$(".animate span").css("animation-duration",'0.8s').hide().show(0);
		$(".hal").css("animation-duration",'0.8s').hide().show(0);
	
		setTimeout(function(){
			var p=data.r;
			console.log(p);
			var selector = "#" + p + " .elem";
	
			$(selector).addClass("circle");
	
			draw_circle(selector,"circle");
	
			cl="cross"

			if(checkScore(process_board()) == 10)
			{
				$(".box").removeClass("uparrow");
				computer_done=true; 
			}

			else
			{
				restart();
			}
		},4000);
	}

} 
function doSetTimeout(i,str)
{
	setTimeout(function(){
		selector = "#" + str[i] + " .elem.circle span";
		$(selector).css("border-color","red");
	},(i+1)*800);
}
function restart()
{

	str = return_win_pos(process_board());

	console.log(str);

	var i=0;

	while ( i < str.length)
	{
		doSetTimeout(i,str);
		i++;

		//setTimeout(function(){i++},500);
	}

	$(".restart").toggleClass("restart_show");

}

function return_win_pos(board) 
{
    
    for(var i=0; i<board.length; i+=3)
    {
        if(board[i]!=="n" && board[i] === board[i+1] && board[i] === board[i+2] && board[i+1] === board[i+2])
        {
            return i + "" + (i+1) + "" + (i+2);
        }
    }

    //columns
    for(var i=0; i<3; i++)
    {
        if(board[i]!=="n" && board[i] === board[i+3] && board[i] === board[i+6] && board[i+3] === board[i+6])
        {
            return i + "" + (i+3) + "" + (i+6);
        }
    }

    //diagonals
    
    if(board[0]!=="n" && board[0] === board[4] && board[0] === board[8] && board[4] === board[8])
    {
        return 0 + "" + 4 + "" + 8;
    }
    
    else if(board[2]!=="n" && board[2] === board[4] && board[2] === board[6] && board[4] === board[6])
    {
        return 2 + "" + 4 + "" + 6;
    }
    else
    {
        return false;
    }
}

function checkWin(board) 
{
    
    for(var i=0; i<board.length; i+=3)
    {
        if(board[i]!=="n" && board[i] === board[i+1] && board[i] === board[i+2] && board[i+1] === board[i+2])
        {
            return true;
        }
    }

    //columns
    for(var i=0; i<3; i++)
    {
        if(board[i]!=="n" && board[i] === board[i+3] && board[i] === board[i+6] && board[i+3] === board[i+6])
        {
            return true;
        }
    }

    //diagonals
    
    if(board[0]!=="n" && board[0] === board[4] && board[0] === board[8] && board[4] === board[8])
    {
        return true;
    }
    
    else if(board[2]!=="n" && board[2] === board[4] && board[2] === board[6] && board[4] === board[6])
    {
        return true;
    }
    else
    {
        return false;
    }
}

function checkScore(board)
{
    if(checkWin(board))
    {
    	return 1;
    }
    else
    {
        for(var i=0; i<board.length; i++)
        {
            if(board[i] === "n")
            {
                return 10;
            }
        }
        return 0;
    }
}

function sendRequest(str)
{
	$.getJSON('/_compute_pos',{a : str },draw_move);
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
			str=str+"n";
		}
	}

	return str;	
}


