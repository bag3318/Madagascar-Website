// JavaScript Document
var pageReload = (function(){ // create a global variable set to an anonymous function
	"use strict"; // make sure to use strict mode
	function reload() { // create a function named reload
		window.location.reload(true); // then this is the reload page code
	}
	function init() { // define initiation function
		var element = document.querySelector("#btn");
		element.addEventListener("click", function() {
			var script = pageReload();
			script.reload();
		});
	}
	return function returnAPI(api) {
		return {
			init: init,
			reload: reload
		};
	};
}());