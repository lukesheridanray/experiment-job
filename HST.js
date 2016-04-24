

    //
    // CGIT Optimizely Boilerplate - version 0.1.4
    //

    // JSHint flags
    // jshint multistr: true
    // jshint jquery: true
    //
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
    	exp.log('Safeguarding v1');

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

        // Variables
        // Object containing variables, generally these would be strings or jQuery objects
    	exp.vars = {
    	};

        // Styles
        // String containing the CSS for the experiment
    	exp.css = "\
    		.safeguarding-header {\
    			padding: 0 0;\
    		}\
        .safeguarding-inner {\
          padding-top: 98px;\
          padding-left: 20px;\
          padding-right: 430px;\
          height: 350;\
        }\
    		";



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


    	exp.waitFor(function() { return $(".footer").length; }, exp.init, 10000);

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
