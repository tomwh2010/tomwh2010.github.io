$(function()
{	
	$(".roomU").click(function(){
    alert("The paragraph U was clicked.");
});

	var img = $("#myImgId").mapster(
        {
            mapKey: "room",
			fillOpacity: 0.4,
			fillColor: "00ff00"
        });

        $(".hotspot").on(
        {
            "mouseover": function()
            {
                var keys = $(this).attr("data-key");
                img.mapster("highlight", keys);
            },
            "mouseout": function()
            {
                img.mapster("highlight", false);
            }

        });
        
        $("#features").tooltip(
		{
			track: true,
			items: "area[alt]",
			content: function()
			{
				return $(this).attr("alt");
			}
		});
});
