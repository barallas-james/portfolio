$(document).ready(function(){
    $('.sidenav').sidenav();

    $(window).on('scroll', function(){
		if ($(window).scrollTop()) {
			$('nav').addClass('black');
			$('nav').removeClass('transparent');
		}

		else {
			$('nav').removeClass('black');
			$('nav').addClass('transparent');
		}
	});
});