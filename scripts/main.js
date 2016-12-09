// jQuery Document			
$(document).ready(function () {
	$("#btn1").button();
	$("#btn1").on("click", function () {
		$("#start").fadeOut(888);
		$( "code" ).slideUp( 888 ).delay( 888 );
  		$( "#accordion" ).delay(888).slideDown( 1500 );
		$("#accordion").accordion({
			collapsible: true,
			heightStyle: "content",
			active: false
		});
		$("#tabs").tabs({
			collapsible: true
		});
	});
});