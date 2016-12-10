// jQuery Document			
$(document).ready(function () {
	"use strict";
	var btn1 = $("#btn1").button();
	var btn2 = $("#btn2").button();
	var btn3 = $("#btn3").button();
	var start = $("#start");
	var code = $("code");
	var accordion = $("#accordion");
	var tabs = $("#tabs");
	var span = $("ol > li > span");
	btn2.hide();
	btn1.on("click", function () {
		start.fadeOut(888);
		code.slideUp(888).delay(888);
  		accordion.delay(888).slideDown(1508);
		accordion.accordion({
			collapsible: true,
			heightStyle: "content",
			active: false
		});
		tabs.tabs({
			collapsible: true
		});
		btn2.delay(1008).fadeIn(888);
	});
	btn2.on("click", function() {
		$(this).fadeOut(888);
		start.delay(1008).fadeIn(888);
		accordion.slideUp(888).delay(888);
  		code.delay(888).slideDown(1508);		
	});
	btn3.click(function() {
		span.toggle("slide", 888);
	});
});