// JavaScript Document
var scroller = (function titleScroller(text) { // define a master function set to a global variable; pass in the text parameter
    "use strict"; // make sure to use strict mode
	document.title = text; // make the html documents title = to the text parameter of the master function
    setTimeout(function () { // set the timeout
        titleScroller(text.substr(1) + text.substr(0, 1)); 
    }, 88);  // 88 milliseconds between timeouts
	function init() { // delcare initiation function
		var element = window; // set the variable element = to window
		element.addEventListener("load", function() { // add an event listener to element
			var script = scroller(); // set a new variable, script, = to the scroller global variable
			script.titleScroller(text); // execute the function
		}); // close method
	} // close the init function    
	return function returnAPI(api) {
		return {
			init1: init,
			titleScroller: titleScroller(text)
		};
	};
}("...Madagascar Imperialism and Nationalism..."));
