//This file is for global javascript that affects the entire page.

//WOW Animations init
new WOW().init;

// Add gray color for background in blank layout
$('body').addClass('gray-bg');
$('body').addClass('landing-page');

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
