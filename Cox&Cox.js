jQuery(".image-box .holder").css("border","1px solid #ccc");
jQuery(".product-detail .btn-cart").css("border-radius","0");
jQuery(".product-detail .btn-cart").css("height","50px");
jQuery(".actions").prepend('<button type="button" title="Add to Favs" class="button-fav manyMore"  style="border-radius: 0px; height: 50px;"><span><span>Add to Favourites</span></span></button>');
jQuery('.actions').append('<button type="button" title="Add to Favs" class="button-fav"  style="border-radius: 0px; height: 50px;"><span><span>Add to Favourites</span></span></button>');
jQuery(".button-fav").css("width","100%");
jQuery('button.button-fav.manyMore').css('margin-bottom', '10px');
jQuery('#header img').remove();
jQuery('<img class="coxandlogo" style="width: 125px; padding-top: 1px; " src="http://www.coxandcox.co.uk/skin/frontend/default/coxampcox/images/CoxandCox-homepagelogo.png" alt="">').appendTo('#headerIn');

var newHeader = jQuery('#header');
newHeader.css({
    'background':'none',

});

var myHeader = ('#header');
myHeader.css({
  'background' : 'none'

});
// #header {
//     padding: 0;
//     margin: 0 -8px;
//     min-height: 38px;
//     position: relative;
//     background: #fff;
//     /* background: url(http://m.coxandcox.co.uk/skin/frontend/default/coxmobile/images/coxhead.png) repeat-x scroll 0 0 #555555; */
//     height: 50px;
//     padding-top: 30px;
//     border: 1px solid #ccc;




//* NOTE - Add href to Umara Z-Trail More Information Link
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
    exp.log('Mobile - v1');

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
