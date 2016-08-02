$(document).ready(function(){
	recent=false;
	$(".col-4").hover(function(){
		var selector="#"+this.id+" h2";
		if($(selector).text() != "X" && $(selector).text() != "O")
		{
			$(selector).text("X");
			recent=true;
		}
	},function(){
		var selector="#"+this.id+" h2";
		if(recent==true)
		{
			$(selector).text("");
			recent=false;
		}
	});
});