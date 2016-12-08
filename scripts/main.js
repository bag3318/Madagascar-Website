// jQuery Document			
$(document).ready(function () {
	$("#btn1").button();
	$("#btn1").on("click", function () {
		$("#start").fadeOut(888);
		$( "code" ).slideUp( 888 ).delay( 888 );
  		$( "#accordion" ).fadeIn( 1000 );
		$("#accordion").accordion({
			collapsible: true,
			heightStyle: "content",
			active: false
		});
		$("#tabs").tabs({
			collapsible: true,
			heightStyle: "fill"
		});
		$("#accordion").tooltip();
	});
});