let element_in_viewport = function (el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

function animateProgressBars() {
	if ($("[data-animate-width]").length>0) {
		$("[data-animate-width]").each(function() {
			$(this).animate({width: $(this).attr("data-animate-width")}, 800, 'linear' );
			var animatedObject = $(this);
			var Delay = animatedObject.find("span").attr("data-effect-delay");
			setTimeout(function() {
				animatedObject.find("span").show('slow');
			}, Delay);
		});
	};
}

let scrollHandler = function () {
	if (element_in_viewport(document.getElementById("progress_bars"))) {
		//If about me page is in the viewport, animate the progress bars.
		animateProgressBars();

		//Stop checking if the progress bars are in view.
		$(window).off('scroll.progress_bar_event');
	}
}

setTimeout(function() {
	//Call Meteor Method to check if the progress_bars id is in the viewport.
	if (element_in_viewport(document.getElementById("progress_bars"))) {
		//If so, animate the progress bars now!
		animateProgressBars();
	} else {
		//If not, check each time we scroll if the progress_bars are in view.
		$(window).on('scroll.progress_bar_event', scrollHandler);
	}
}, 1000);
