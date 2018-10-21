function twhjson()
{ 
	var filter=$("#myImgId").attr('alt');
	//add room
	$.getJSON( "/static/data.json", function( data ) {
		var buff="";
		var buff2="";
		var onmouseover2="";
		var onmouseout2="";
		var tabletmouse="";
		$.each( data, function( key, val ) {
			if(val.floor.indexOf(filter)>-1)
			{
				var alt="";
				alt+="<b>"+val.sromnum+" "+val.navn+"</b><br/>";
				alt+=val.roomtype;
				var coords=val.coords;
				var id="high_"+val.roomnum;
				buff+="<area id='"+id+"' "+tabletmouse+" shape='"+val.shape+"' alt='"+alt+"' coords='"+coords+"' href='#'>";
				buff2+="<a href=\"#\" onmouseover=\""+onmouseover+"\" onmouseout=\""+onmouseout+"\">"+val.sromnum+" "+val.navn+"</a> <br>";
			}
		});
		$("#features").html(buff);
		$("#romoversikt").html(buff2);
		$("#romtypeoversikt").html("tbd");
		$("#high_all").attr("alt", "").attr("onmouseover", onmouseover2);
		$("#high_all").attr("onmouseout", onmouseout2);
	});
}

$(function(){
	twhjson();

});
