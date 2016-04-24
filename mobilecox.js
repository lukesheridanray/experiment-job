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
    exp.vars = {
        favorites: '<button type="button" title="Add to Favs" class="button-fav manyMore"  style="border-radius: 0px; height: 50px;"><span><span>Add to Favourites</span></span></button>',
        newHTML: ""
    };

    // Styles
    // String containing the CSS for the experiment
    exp.css = '\
        .image-box .holder {\
        border: 1px solid #ccc;\
      }\
        #header .holder {\
        display: none;\
      }\
      .AWA-thumbnail img {\
            border: solid 1px #ccc;\
            width: 100px;\
        }\
        #AWA-images {\
          position: absolute;\
          left: 0;\
          right: 0;\
          margin-left: auto;\
          margin-right: auto;\
          display: inline-flex;\
          justify-content: space-around;\
          align-items: center;\
          padding-top: 10px;\
          padding-bottom: 0px;\
          margin-top: -25px;\
          margin-bottom: 0px;\
          padding-left: 0px;\
      }\
          .info-box {\
           text-align: center;\
           background: none\
         }\
         .product-detail .info-box {\
          background: none; \
          border: none;\
          padding: 25px 10px; \
          margin-top: 140px;\
    }\
      ';

      // <div style="position: absolute; left: 50%;">
      //  <div style="position: relative; left: -50%; border: dotted red 1px;">


 // Functions
 // Object containing functions, some helpful functions are included
 exp.func = {};

 // Init function
 // Called to run the actual experiment, DOM manipulation, event listeners, etc
 exp.init = function() {
        if (window.location.pathname === "/") {
            // Put homepage changes here
            exp.log("On homepage");
        } else if (jQuery(".button.btn-cart").length) {
            exp.log("On product page");
            productPage();
        } else {
            exp.log("No changes needed");
        }


        function productPage() {
            // Append style to head
      $('head').append('<style type="text/css">'+exp.css+'</style>');
            $("#id").append(exp.vars.favorites);


            $('.switcher').remove();


            //STOP CAROSElL!!! Make NEW!

              // jQuery('.holder').hide();
              // jQuery('<div class="AWA-holder"> \
              // <ul style="position: relative; height: 944px; margin-left: -649px;">\
              // <li class="" style="left: 0px; width: 649px;">\
              // <img src="http://m.coxandcox.co.uk/media/catalog/product/cache/5/thumbnail/400x582/9df78eab33525d08d6e5fb8d27136e95/a/l/alma-glass-dome-pendant-h-domepend-cut-out.png" alt="">\
              // </li>\
              // <li class="active" style="left: 649px; width: 649px;">\
              // <img src="http://m.coxandcox.co.uk/media/catalog/product/cache/5/thumbnail/400x582/9df78eab33525d08d6e5fb8d27136e95/a/l/alma-glass-dome-pendant-h-domepend-cut-out.png" alt="">\
              // </li>\
              // <li class="" style="left: 1298px; width: 649px;">\
              // <img src="http://m.coxandcox.co.uk/media/catalog/product/cache/5/thumbnail/400x582/9df78eab33525d08d6e5fb8d27136e95/a/l/alma-glass-dome-pendant-h-domepend.png" alt="">\
              // </li>\
              // </ul>\
              // </div>').prependTo('.image-box');



    //
    //           <div class="AWA-holder">
    //     <ul style="position: relative; height: 944px; margin-left: -649px;">
    //                         <li class="" style="left: 0px; width: 649px;">
    //                 <img src="http://m.coxandcox.co.uk/media/catalog/product/cache/5/thumbnail/400x582/9df78eab33525d08d6e5fb8d27136e95/a/l/alma-glass-dome-pendant-h-domepend-cut-out.png" alt="">
    //             </li>
    //                         <li class="active" style="left: 649px; width: 649px;">
    //                 <img src="http://m.coxandcox.co.uk/media/catalog/product/cache/5/thumbnail/400x582/9df78eab33525d08d6e5fb8d27136e95/a/l/alma-glass-dome-pendant-h-domepend-cut-out.png" alt="">
    //             </li>
    //                         <li class="" style="left: 1298px; width: 649px;">
    //                 <img src="http://m.coxandcox.co.uk/media/catalog/product/cache/5/thumbnail/400x582/9df78eab33525d08d6e5fb8d27136e95/a/l/alma-glass-dome-pendant-h-domepend.png" alt="">
    //             </li>
    //                 </ul>
    // </div>



            var images = [];

            jQuery(".holder").last().find("li").find("img").each(function() {
                var image = jQuery(this).attr("src");
                images.push(image);
            });

            exp.log(images);


            var imageDiv = "<div id='AWA-images'>";

            for (var i = 0; i < images.length; i++) {
                imageDiv += "<div class='AWA-thumbnail'><img src='" + images[i] + "'></div>";
            }

            imageDiv += "</div>";
            exp.log(imageDiv);

            jQuery(".info-box").before(imageDiv);

            jQuery(".AWA-thumbnail img").click(function(e) {
                var src = jQuery(this).attr("src");
                jQuery(".holder .active img").attr("src", src);
            });
        }

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
