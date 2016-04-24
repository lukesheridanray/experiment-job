//
// CGIT Optimizely Boilerplate - version 0.1.3
//

// JSHint flags
// jshint multistr: true
// jshint jquery: true

/*
Notes
100% (50/50)
GA 3
"Revenue Per Visitor
Number of Transactions
Basket Page Views"
*/

// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

// Initialise the experiment object
var exp = {};

// Log the experiment, useful when multiple experiments are running
console.log('Size guide - 0.2');

// Condition
// If we cannot rely on URL's to target the experiment, we can use a unique CSS selector
exp.condition = $('#product_size_guide');

// Check for a condition and return false if it has not been met
if(exp.condition && !exp.condition.length) {
    console.log('Experiment failed a condition');
    return false;
}

// Variables
// Object containing variables, generally these would be strings or jQuery objects
exp.vars = {
    'sizeGuideLink': $('#product_size_guide'),
    'sizeGuideLinkAlt': $('#size_fit .popup'),
    'productURL': window.universal_variable.product.url,
    'gender': '',
    'type': ''
};

// select gender by size guide, or return false if none
// select bottoms or tops by url, or return false if neither found


if(
    exp.vars.sizeGuideLink.attr('href').indexOf('size-guide-men') !== -1 ||
    exp.vars.sizeGuideLink.attr('href').indexOf('size-guide-footwear') !== -1
) {
    exp.vars.gender = 'mens';
} else {
    return false;
}

if (
    exp.vars.productURL.indexOf('trousers') !== -1 ||
    exp.vars.productURL.indexOf('chinos') !== -1 ||
    exp.vars.productURL.indexOf('swimshorts') !== -1 ||
    exp.vars.productURL.indexOf('pants') !== -1 ||
    exp.vars.productURL.indexOf('shorts') !== -1
) {
    exp.vars.type = 'bottoms';
} else if( exp.vars.sizeGuideLink.attr('href').indexOf('size-guide-footwear') !== -1 ) {
    exp.vars.type = 'footwear';
} else {
    exp.vars.type = 'tops';
}

exp.vars.sizeCharts = {
    'mens': {
        'tops': ' \
<div id="size-guide-men"> \
        <p class="sub-title">Tops</p> \
        <table> \
            <tr class="alt"> \
                <th>Size</th> \
                <td>XS</td> \
                <td>S</td> \
                <td>M</td> \
                <td>L</td> \
                <td>XL</td> \
                <td>XXL</td> \
                <td>XXXL</td> \
            </tr> \
            <tr> \
                <th>Chest (inches)</th> \
                <td>34-36"</td> \
                <td>36-38"</td> \
                <td>38-40"</td> \
                <td>40-42"</td> \
                <td>42-44"</td> \
                <td>44.5-46.5"</td> \
                <td>46.5-48.5"</td> \
            </tr> \
            <tr class="alt"> \
                <th>Chest (cm)</th> \
                <td>86-91</td> \
                <td>91-96</td> \
                <td>96-101</td> \
                <td>101-106</td> \
                <td>106-111</td> \
                <td>112-118</td> \
                <td>118-123</td> \
            </tr> \
        </table> \
</div>',
        'bottoms': ' \
<div id="size-guide-men"> \
        <p class="sub-title">Bottoms</p> \
        <table> \
            <tr class="alt"> \
                <th>Size</th> \
                <td>XS</td> \
                <td>S</td> \
                <td>M</td> \
                <td>L</td> \
                <td>XL</td> \
                <td>XXL</td> \
                <td>XXXL</td> \
            </tr> \
            <tr> \
                <th>Waist (cm)</th> \
                <td>71</td> \
                <td>76</td> \
                <td>81</td> \
                <td>86</td> \
                <td>91</td> \
                <td>96</td> \
                <td>101</td> \
            </tr> \
            <tr class="alt"> \
                <th>Waist (inches)</th> \
                <td>28"</td> \
                <td>30"</td> \
                <td>32"</td> \
                <td>34"</td> \
                <td>36"</td> \
                <td>38"</td> \
                <td>40"</td> \
            </tr> \
            <tr class="alt"> \
                <th>Leg Regular (cm)</th> \
                <td>81</td> \
                <td>81</td> \
                <td>81</td> \
                <td>81</td> \
                <td>81</td> \
                <td>81</td> \
                <td>81</td> \
            </tr> \
            <tr class="alt"> \
                <th>Leg Regular (inches)</th> \
                <td>32"</td> \
                <td>32"</td> \
                <td>32"</td> \
                <td>32"</td> \
                <td>32"</td> \
                <td>32"</td> \
                <td>32"</td> \
            </tr> \
            <tr class="alt"> \
                <th>Leg Long (cm)</th> \
                <td>86</td> \
                <td>86</td> \
                <td>86</td> \
                <td>86</td> \
                <td>86</td> \
                <td>86</td> \
                <td>86</td> \
            </tr> \
            <tr class="alt"> \
                <th>Leg Long (inches)</th> \
                <td>34"</td> \
                <td>34"</td> \
                <td>34"</td> \
                <td>34"</td> \
                <td>34"</td> \
                <td>34"</td> \
                <td>34"</td> \
            </tr> \
        </table> \
</div>',
'footwear': ' \
<div id="size-guide-footwear"> \
        <p class="sub-heading">Footwear</p> \
        <table> \
            <tr class="alt"> \
                <th>UK</th> \
                <td>6</td> \
                <td>7</td> \
                <td>8</td> \
                <td>9</td> \
                <td>10</td> \
                <td>11</td> \
                <td>12</td> \
            </tr> \
            <tr> \
                <th>EU</th> \
                <td>40</td> \
                <td>41</td> \
                <td>42</td> \
                <td>43</td> \
                <td>44</td> \
                <td>45</td> \
                <td>46</td> \
            </tr> \
            <tr class="alt"> \
                <th>US</th> \
                <td>7</td> \
                <td>8</td> \
                <td>9</td> \
                <td>10</td> \
                <td>11</td> \
                <td>12</td> \
                <td>13</td> \
            </tr> \
        </table> \
</div>'
},
    'womens': ' \
<div id="size-guide-women"> \
        <p class="sub-title">Tops</p> \
        <table> \
            <tr class="alt"> \
                <th>Size</th> \
                <td>S</td> \
                <td>M</td> \
                <td>L</td> \
                <td>XL</td> \
                <td>XXL</td> \
            </tr> \
            <tr> \
                <th>Chest (cm)</th> \
                <td>81-86</td> \
                <td>86-91</td> \
                <td>91-96</td> \
                <td>96-101</td> \
                <td>101-106</td> \
            </tr> \
            <tr class="alt"> \
                <th>Chest (inches)</th> \
                <td>32-34"</td> \
                <td>34-36"</td> \
                <td>36-38"</td> \
                <td>38-40"</td> \
                <td>40-42"</td> \
            </tr> \
            <tr class="alt"> \
                <th>Waist (cm)</th> \
                <td>76-81</td> \
                <td>81-86</td> \
                <td>86-91</td> \
                <td>91-96</td> \
                <td>96-101</td> \
            </tr> \
            <tr class="alt"> \
                <th>Waist (inches)</th> \
                <td>30-32"</td> \
                <td>32-34"</td> \
                <td>34-36"</td> \
                <td>36-38"</td> \
                <td>38-40"</td> \
            </tr> \
        </table> \
</div>'
};

exp.vars.sizeGuideContent = ' \
    <div id="size_guide"> \
    <p class="title">Size Guide</p> \
    <p>Lyle and Scott sizes fits true to size across all ranges.<br /> \
    We recommend you <b>buy your normal size</b>.</p>' +
    exp.vars.sizeCharts[ exp.vars.gender ][ exp.vars.type ] +
    '<div class="modal-accordion"> \
        <p class="sub-heading">FAQ</p> \
        <div class="modal-accordion--item"> \
            <p class="modal-accordion--title sub-title"><a href="#">How do I make sure I buy the right size?</a></p> \
            <p class="modal-accordion--content">To be absolutely certain, measure your chest and waist and use the chart above.<br /> \
            Chest: Place the tape under your armpits and measure across the broadest part of your chest.<br /> \
            Waist: Place the tape measure around your waist, just below your navel.<br /> \
            Tip: Measure against your body, not over clothes. Hold the tape measure gently but firmly and do not pull it tight. If you\'re in between two sizes go for the larger size.</p> \
        <div class="modal-accordion--item"> \
            <p class="modal-accordion--title sub-title"><a href="#">The last time I bought a Lyle &amp; Scott garment it was too large/small. How do I avoid this?</a></p> \
            <p class="modal-accordion--content">We are sorry you have had problems in the past. In August 2013, we standardised Lyle &amp; Scott sizes across all ranges. We now recommend buying your normal size.</p> \
        </div> \
        <div class="modal-accordion--item"> \
            <p class="modal-accordion--title sub-title"><a href="#">Is there a difference in size between the various ranges?</a></p> \
            <p class="modal-accordion--content">No, not any more. Since August 2013, all Lyle &amp; Scott ranges come in standardised sizes.</p> \
        </div> \
        <div class="modal-accordion--item"> \
            <p class="modal-accordion--title sub-title"><a href="#">I\'m still not sure. What should I do?</a></p> \
            <p class="modal-accordion--content">The best thing to do is place your order and try it on at home. Returns in the \
            UK are free via Collect+ (outside of end of season sale period), so it\'s quick and \
            easy to get a full refund if you are not satisfied with the fit.</p> \
        </div> \
    </div> \
    <script type="text/javascript"> \
        jQuery(".modal-accordion--title a").unbind().bind("click",function(e){ \
            e.preventDefault(); \
            var _this = jQuery(this); \
            _this.toggleClass("open"); \
            _this.parent("p").next("p").slideToggle(); \
        }); \
    </script> \
    </div>';

// Styles
// String containing the CSS for the experiment
exp.css = ' \
#size-guide-footwear, #size-guide-men, #size-guide-women { width: auto; } \
.modal-accordion--content { display: none; } \
.pop_up .modal-accordion--title.sub-title { font-size: 1.6em; } \
.modal-accordion--title a:before { background-image: url("//cdn.optimizely.com/img/174847139/dbb6b47043884472b791924977416b5e.png"); \
background-position: 0 0; background-repeat: no-repeat; background-color: transparent; content: " "; float: left; margin: 7px 7px 0 0; width: 12px; height: 12px; } \
.modal-accordion--title a.open:before { background-image: url("//cdn.optimizely.com/img/174847139/f21d25d0da88459486fab2a59fc97333.png"); } ';

// Functions
// Object containing functions, some helpful functions are included
exp.func = {};

// This function waits till a DOM element is available, then runs a callback function
exp.func.waitForElement = function(selector, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($(selector).length) {
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

// This function waits till a function is available, then runs a callback function
exp.func.waitForFunction = function(func, callback, timeout, keepAlive) {
    timeout = timeout || 20000;
    keepAlive = keepAlive || false;
    var intervalTime = 50,
        maxAttempts = timeout / intervalTime,
        attempts = 0,
        interval = setInterval(function() {
            if ($.isFunction(func)) {
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

exp.vars.openSizeGuide = function(e) {
    e.preventDefault();
    alert('bound');
};

// Init function
// Called to run the actual experiment, DOM manipulation, event listeners, etc
exp.init = function() {

    // append styles to head
    $('head').append('<style type="text/css">'+this.css+'</style>');

    // unbind and rebind size guide link
    //this.vars.sizeGuideLink.unbind().bind( 'click', exp.vars.openSizeGuide );
    this.vars.sizeGuideLink.unbind();
    this.vars.sizeGuideLinkAlt.unbind();

    this.vars.sizeGuideLink.attr({'href':'/modal-content/'});
    this.vars.sizeGuideLinkAlt.attr({'href':'/modal-content/'});
    var a = $('.pop_up');
    $.fn.popUp({$triggers: $('#product_size_guide, #size_fit .popup'), $popUpContainer: a, callback: function() {
        var new_top_val = parseInt(a.css('top').replace('px',''))+20;
        a
        .html( exp.vars.sizeGuideContent )
        .removeClass('loading').addClass('loaded')
        .css({'margin-left':'-400px','top':new_top_val})
        .prepend('<span class="close grey">x</span>')
        .positionInCenter(a(window));
    }});
};

// Run the experiment
exp.init();

// Return the experiment object so we can access it later if required
return exp;

// Close the IIFE, passing in jQuery and any other global variables as required
})(jQuery);
