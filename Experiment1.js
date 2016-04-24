

//first I would remove the .home-slider div and the .magazine-logos div from the bottom of page.
jQuery('.magazine-logos').remove();

var wrap = jQuery('.home-slider');
    wrap.children().remove();
    // removed slider and logos div.

    jQuery('<div><h1>AS SEEN IN THE MEDIA</h1></div><div><ul><li><a href="/magazine-category"><img src="img/magazine-1.jpg" width="100" height="125" /></a></li><li><a href="/magazine-category"><img src="img/magazine-2.jpg" width="100" height="125" /></a></li><li><a href="/magazine-category"><img src="img/magazine-3.jpg" width="100" height="125" /></a></li><li><a href="/magazine-category"><img src="img/magazine-4.jpg" width="100" height="125"</a></li><li><a href="/magazine-category"><img src="img/magazine-5.jpg" width="100" height="125"</a></li><li><a href="/magazine-category"><img src="img/magazine-6.jpg" width="100" height="125"</a></li></ul><div class="view-link"><p><a class="mag-products" title="magazine-products" onclick="send_to_analytics();" href="http://www.coxandcox.co.uk/as-seen-in-the-press#page=1&top=536&"</a>View all products featured in media</p></div></div></div>').appendTo(wrap);

    var myList = wrap.find('ul');
    var myHeader = wrap.find('h1');
    var myView = wrap.find('a');
    myHeader.css({
        'text-align':'center',
        'padding-bottom' : '10px',
        'font-size':'20px',
    });

    myView.css({
        'display':'flex',
        'float':'right',
        'text-decoration': 'underline',
        'padding-top' : '30px'
    });

    myList.css({
        'display':'flex',
        'justify-content':'space-around'
    });
    var items = myList.find('li');
    items.hover(function () {
        console.log('over');
    }, function () {
        console.log('you left');
    });
