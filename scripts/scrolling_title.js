// JavaScript Document
var scroll = (function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 88); // 500
	function init() {
		var element = window;
		element.addEventListener("load", function() {
			var script = scroll();
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