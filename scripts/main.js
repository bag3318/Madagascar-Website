	// jQuery Document			
$(document).ready(function() { // here we declare our document ready function; this makes it so that the script will run only AFTER the page loads.
    "use strict"; // define a use strict statement to interperet errors much better than without it.
    // below we define all our variables
    var btn1 = $("#btn1").button(); // define button 1 
    var btn2 = $("#btn2").button(); // define button 2
    var btn3 = $("#btn3").button(); // define button 3
    var start = $("#start"); // define start button
    var code = $("code"); // define code
    var accordion = $("#accordion"); // define accordion
    var tabs = $("#tabs"); // define tabs
    var span = $("ol > li > span"); // define links
    btn2.hide(); // hide the button 2 on the webpage
    btn1.on("click", function() { // when button 1 is clicked
		start.fadeOut(887); // make the start button fade out
		$("#opener").fadeOut(888);
		$(".dynamic").fadeOut(889);
        code.slideUp(888).delay(888); // then take the text art (the one that says madagascar), which is code and slide it up to hide it, then delay 888 milliseconds
        accordion.delay(888).slideDown(1508); // now the accordion will slide down in 1508 milliseconds but first we need to delay it another 888 milliseconds
        accordion.accordion({ // now we define that our accordion is an accordion
            collapsible: true, // make sure that it is collapsible
            heightStyle: "content", // set the height style only = to the height of the content on the accordion
            active: false // and initially do not make any sections active
        }); // close the definer
        tabs.tabs({ // now we define that our tabs are actually tabs
            collapsible: true // now lets make sure that the tabs are collapsible
        }); // close the definer
        btn2.delay(890).fadeIn(888);
		$("#opener").fadeIn(888);
		$(".dynamic").fadeIn(889);
    }); // close the click function
    btn2.on("click", function() { // now when button 2 is clicked ...
		
        $(this).fadeOut(887); // fade button 2 (this) out
		$("#opener").fadeOut(888);
		$(".dynamic").fadeOut(889);
        start.delay(890).fadeIn(887); // then make the start button delay 887 milliseconds and fade in in 888 milliseconds
        accordion.slideUp(888).delay(888); // now we must hide the accordion by sliding it up and then delay 888 milliseconds
        code.delay(888).slideDown(1508); // now slide down the code but first delay 888 milliseconds then slide down in 1508 milliseconds
		$("#opener").fadeIn(888);
		$(".dynamic").fadeIn(889);	
    }); // close the click function
    btn3.click(function() { // now when button 3 is clicked ...
        span.toggle("slide", 888); // toggle the links in the citations accordion section in 888 milliseconds
    }); // close the click function
	// here is the function for the disclaimer
    $("#opener").button(); // define that the disclaimer button is a jQuery button
    $("#dialog").dialog({ // start the disclaimer function
        autoOpen: false, // here we make sure the dialog box doesn't automatically open
        show: { // however; when it does open...
            effect: "blind", // do the blind effect
            duration: 1008 // for 1008 milliseconds
        }, // close this object
        hide: { // now the hide object
            effect: "explode", // make it explode for the hide effect
            duration: 1008 // and set the duration to 1008 milliseconds
        } // close the object
    }); // close the function
	// below is just initiating the disclaimer when it is open
    $("#opener").on("click", function() {
        $("#dialog").dialog("open");
    });
}); // close the document ready function