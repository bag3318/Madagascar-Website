// JavaScript Document
var scroller = (function titleScroller(text) { // define a master function set to a global variable; pass in the text parameter
    "use strict"; // make sure to use strict mode
	document.title = text; // make the html documents title = to the text parameter of the master function
    setTimeout(function () { // set the timeout
        titleScroller(text.substr(1) + text.substr(0, 1)); 
    }, 88);  // 88 milliseconds between timeouts
	function init() {
		var element = window;
		element.addEventListener("load", function() {
			var script = scroller();
			script.titleScroller(text);
		});
	}
	return function returnAPI(api) {
		return {
			init1: init,
			titleScroller: titleScroller(text)
		};
	};
}("...Madagascar Imperialism and Nationalism..."));
