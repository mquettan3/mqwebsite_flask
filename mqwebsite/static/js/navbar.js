var handledScroll = false;
var addFixedHeaderOn = 1;
var addPrepareHeaderOn = 200;
var docElem = document.documentElement;

window.addEventListener('scroll', function (event) {
    if (!handledScroll) {
        handledScroll = true;
        handleCurrentScroll();
    }
}, false);

function handleCurrentScroll() {
  var sy = scrollY();
  if ( sy > addFixedHeaderOn ) {
    $(".header").addClass('header-fixed');
  }
  else {
    $(".header").removeClass('header-fixed');
  }

  if ( sy > addFixedHeaderOn ) {
    $(".header").addClass('header-prepare');
  }
  else {
    $(".header").removeClass('header-prepare');
  }

  //Make sure this gets called again.
  handledScroll = false;
}

function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
}

$(".nav-menu-icon").on("click", function (event) {
  $(".nav-menu-icon").toggleClass('active');
  $(".nav-menu").toggleClass('active');
  return false;
});
