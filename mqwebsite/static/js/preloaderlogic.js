//This file is for javascript that's local to the preloader.
var loaded = false;

//Preloader logic
window.onload = function() {
    if(!loaded) {
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
