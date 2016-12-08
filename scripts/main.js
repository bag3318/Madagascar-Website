// jQuery Document			
$(document).ready(function () {

	$("#btn").button();
	$("#btn1").button();
	$("#btn1").on("click", function () {
		$("#start").fadeOut(888);
		$("#accordion").fadeIn(888); // or 300
		$("#accordion").accordion({
			collapsible: true,
			heightStyle: "content",
			active: false
		});
		$("#tabs").tabs({
			collapsible: true,
			heightStyle: "fill"
		});
	});
});