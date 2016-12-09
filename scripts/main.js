// jQuery Document			
$(document).ready(function () {
	// $("#btn").button();
	$("#btn1").button();
	$("#btn2").button();
	$("#btn2").hide();
	$("#btn1").on("click", function () {
		$("#start").fadeOut(888);
		$("code").slideUp(888).delay(888);
  		$("#accordion").delay(888).slideDown(1508);
		$("#accordion").accordion({
			collapsible: true,
			heightStyle: "content",
			active: false
		});
		$("#tabs").tabs({
			collapsible: true
		});
		$("#btn2").delay(1008).fadeIn(888);
	});
	$("#btn2").click(function() {
		$(this).fadeOut(888);
		$("#start").delay(1008).fadeIn(888);
		$("#accordion").slideUp(888).delay(888);
  		$("code").delay(888).slideDown(1508);		
	});
	$("#btn3").button();
	$("#btn3").click(function() {
		$("ol > li > a").toggle("slide", 888);
	});
});