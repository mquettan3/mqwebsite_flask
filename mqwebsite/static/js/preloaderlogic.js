

//Scroll so that the header is taken into account.  Offset the scroll by the height of the header
$('body').scrollspy({
    target: '#header',
    offset: 80
})

// Page slow-scrolling feature
$('a.page-scroll').bind('click', function (event) {
    var link = $(this);
    $('html, body').stop().animate({
        scrollTop: $(link.attr('href')).offset().top - 65
    }, 500);
    event.preventDefault();
});


//This file is for javascript that's local to the preloader.
var loaded = false;

//Preloader logic
window.onload = function() {
    if(!loaded) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
        //Force the pre-loader to exist for at least 1 second.  Anything less is pretty jarring to see.
        setTimeout(function() { // Made the pre-loader not have a default wait time because Ryuga complained.
            $('.loader-wrapper').addClass('animated fadeOut');
        }, 1000);
        $('.loader-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.loader-wrapper').remove();
        })
        loaded = true;
    }
}();
//End Preloader logic
