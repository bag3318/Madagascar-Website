// JavaScript Document
var scroller = (function titleScroller(text) {
    "use strict";
	document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 88); // 500
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