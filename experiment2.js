    jQuery(".downloads-links-block")
      .appendTo(".product-shop");
    jQuery(".whishlist_wrap")
      .appendTo(".product-img-box");
    jQuery("#social")
      .appendTo(".product-img-box");
    jQuery(".download-text").css("display", "none");

  jQuery(this).parents('.download-text:first').toggleClass('.download-text some_other_class');
        jQuery('.download-holder').hover(function(){
            jQuery('.download-text').show();
        },function(){
            jQuery('.download-text').hide();
            console.log();
        });
        // var wrap = jQuery('[title="Garden Answers"]');
        //     wrap.children().remove();
        //     // removed slider and logos div.
        //
        //     jQuery('<div>hi<div>').appendTo(wrap);



// The problem I ran into on this experiment is that each div that had the class
// each div that had the class ".download-text" also had the ID of #Fancybox
// this made it difficult to call each individual div of '.download-text'
// I tried using the parent first with no luck.
