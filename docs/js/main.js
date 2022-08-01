$('.navbar-nav a , .footer-link a').click(function () {
	var target = $(this.hash);
	$('html, body').animate({
		scrollTop: target.offset().top - $('header').height()
	}, 500);
	return false;
});
