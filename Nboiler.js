if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = function($) {



    // Initialise the experiment object
    var exp = {};

    // Wrapper for console.log, to prevent the exp breaking on browsers which don't
    // (always) have 'console' set (e.g. IE9)
    exp.log = function(str) {
        if (typeof window.console !== 'undefined') {
            console.log(str);
        }
    };

    // Log the experiment, useful when multiple experiments are running
    exp.log('Mobile - v2');

    /*
    // Condition
    // If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
    exp.condition = $('.unique-selector');
    */
    //exp.condition = $("#main_internal_full_box");

    // Check for a condition and return false if it has not been met
    // if (exp.condition && !exp.condition.length) {
    //     exp.log('Gift Guide 2 failed a condition');
    //     return false;
    // }
    // Commenting out conditions since IE is having a hard time with it

    // Variables
    // Object containing variables, generally these would be strings or jQuery objects
    //PUT THE HTML CHANGES HERE!!
    exp.vars = {};

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
        .image-box .holder {\
        border: 1px solid #ccc;\
      }\
        #header .holder {\
        display: none;\
      }\
      ';


	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
        // Append style to head
		$('head').append('<style type="text/css">'+exp.css+'</style>');


    var images = [];

    jQuery(".holder").last().find("li").find("img").each(function() {
     var image = jQuery(this).attr("src");
     images.push(image);
    });

    exp.log(images);


    var imageDiv = "<div id='AWA-images'>";

    for (var i = 0; i < images.length; i++) {
     imageDiv += "<div class='AWA-thumbnail'><img src='" + images[i] + "'></div>"
    }

    imageDiv += "</div>";
    exp.log(imageDiv);

    jQuery(".info-box").before(imageDiv);

    jQuery(".AWA-thumbnail img").attr("style", "border: solid 1px red; width: 100px;");


    jQuery(".AWA-thumbnail img").click(function(e) {
     var src = jQuery(this).attr("src");
     jQuery(".holder .active img").attr("src", src);
    });


	};

    // Run the experiment
    exp.waitFor = function(condition, callback, timeout, keepAlive) {
        timeout = timeout || 20000;
        keepAlive = keepAlive || false;
        var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if (condition()) {
                if (!keepAlive) {
                    clearInterval(interval);
                }
                callback();
            } else if (attempts > maxAttempts) {
                clearInterval(interval);
            }
            attempts ++;
        }, intervalTime);
    };

    exp.waitFor(function() { return $(".top-menu").length }, exp.init, 10000);



	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
};
var waitForjQuery = function(time) {
    time = time || 50;
    var $ = window.jQuery;
    if ($) {
        exp($);
    } else {
        setTimeout(function () {
            waitForjQuery(time * 2);
        }, time);
    }
};
waitForjQuery(1000);






 jQuery(".holder").last().find("li").find("img")
 var images = [];

jQuery(".holder").last().find("li").find("img").each(function() {
 var image = jQuery(this).attr("src");
 images.push(image);
});

console.log(images);


var imageDiv = "<div id='AWA-images'>";

for (var i = 0; i < images.length; i++) {
 imageDiv += "<div class='AWA-thumbnail'><img src='" + images[i] + "'></div>"
}

imageDiv += "</div>";
console.log(imageDiv);


var images = [];

jQuery(".holder").last().find("li").find("img").each(function() {
 var image = jQuery(this).attr("src");
 images.push(image);
});

console.log(images);




var imageDiv = "<div id='AWA-images'>";

for (var i = 0; i < images.length; i++) {
 imageDiv += "<div class='AWA-thumbnail'><img src='" + images[i] + "'></div>"
}

imageDiv += "</div>";
console.log(imageDiv);

jQuery(".info-box").before(imageDiv);

jQuery(".AWA-thumbnail img").attr("style", "border: solid 1px red; width: 100px;");


var images = [];

jQuery(".holder").last().find("li").find("img").each(function() {
 var image = jQuery(this).attr("src");
 images.push(image);
});

console.log(images);


var imageDiv = "<div id='AWA-images'>";

for (var i = 0; i < images.length; i++) {
 imageDiv += "<div class='AWA-thumbnail'><img src='" + images[i] + "'></div>"
}

imageDiv += "</div>";
console.log(imageDiv);

jQuery(".info-box").before(imageDiv);

jQuery(".AWA-thumbnail img").attr("style", "border: solid 1px red; width: 100px;");


jQuery(".AWA-thumbnail img").click(function(e) {
 var src = jQuery(this).attr("src");
 jQuery(".holder .active img").attr("src", src);
});









var images = [];

jQuery(".holder").last().find("li").find("img").each(function() {
 var image = jQuery(this).attr("src");
 images.push(image);
});

console.log(images);


var imageDiv = "<div id='AWA-images'>";

for (var i = 0; i < images.length; i++) {
 imageDiv += "<div class='AWA-thumbnail'><img src='" + images[i] + "'></div>"
}

imageDiv += "</div>";
console.log(imageDiv);

jQuery(".info-box").before(imageDiv);

jQuery(".AWA-thumbnail img").attr("style", "border: solid 1px red; width: 100px;");


jQuery(".AWA-thumbnail img").click(function(e) {
 var src = jQuery(this).attr("src");
 jQuery(".holder .active img").attr("src", src);
});
