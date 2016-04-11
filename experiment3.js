
// I added the content below
jQuery('<div class="Luke-header"><h2>FAQ</h2>').appendTo('#table-tops');
jQuery('<div id="size-chart" class="my-style"><ul><li><a href=""><p>> I usually wear S/M/L/XL exct. in other brands. What size should I buy?</p></a></li></ul></div>').appendTo('#table-tops');
jQuery('<div id="answer-question-one" class="my-style"><ul><li>Simply buy the size you usually wear. Our garments are standard sizes, but if you have any problems with fit, returns in the UK are free and easy via Collect+ (outside of end of season sale period).</li></ul></div>').appendTo('#table-tops');

// jQuery('#size-chart').hover(function(){
//     jQuery('#size-chart').css('text-decoration', 'underline');
// });
// I styled the content below, centered, underlined, ect.
jQuery('.Luke-header').css({
  'padding-top' : '10px',
  'padding-bottom' : '20px',
});
jQuery('#answer-question-one').css({
  'display': 'none',
});
var wrap = jQuery('.my-style');
var myList = wrap.find('li');

myList.css({
      'list-style-type': 'none',
      'text-decoration': 'underline',
  });
  var grape = jQuery('#answer-question-one');
  var myList = grape.find('li');

  myList.css({
        'text-decoration': 'none',
        'text-indent': '50px',
        'list-style-type': 'none',
    });

  // jQuery('.my-style, li').click(function(){
  //     jQuery('#answer-question-one').show();
  // },function(){
  //     jQuery('#answer-question-one').hide();
  //     console.log('I did it!');
  // });
// THIS IS THE FUNCTIONALITY OF THE SCRIPT!!!
  jQuery(document).ready(function() {

  jQuery('#answer-question-one').hide();

  jQuery('#size-chart').click(function() {
    jQuery('#answer-question-one').toggle();

  });
});
