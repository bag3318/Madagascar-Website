// JavaScript Document
var pageReload = (function(){
	"use strict";
	function reload() {
		window.location.reload(true);
	}
	function init() {
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