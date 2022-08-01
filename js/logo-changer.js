(function($) {
jQuery(document).ready(function($) {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 40) {
            jQuery('.logo').addClass('small-logo');
        } else {
            jQuery('.logo').removeClass('small-logo');
        }
    });
});
})(jQuery);