$(document).ready(function(){


	$(".slider-slick").slick({
		dots: true,
		infinite: true,
		/*centerMode: true,
		variableWidth: true,*/
		autoplay: true,
		/*fade: true,*/
		cssEase: 'linear',
  		adaptiveHeight: true,
  		arrows: false,
  		centerMode: true,
  		variableWidth: true
	});

	$(".slider-slick-gallery").slick({
		dots: false,
		infinite: true,
		/*centerMode: true,
		variableWidth: true,*/
		autoplay: true,
		/*fade: true,*/
		cssEase: 'linear',
  		adaptiveHeight: true,
  		arrows: false,
  		asNavFor: '.slider-slick-gallery-nav',
  		centerMode: true,
  		variableWidth: true
	});

	$(".slider-slick-gallery-nav").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: ".slider-slick-gallery",
		dots: false,
		arrows: false,
		/*centerMode: true,*/
		focusOnSelect: true
	});	


	$('.page-goto-up').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: '0px'}, 300);
	});



	$('#js-menu-sp-trigger').on('click', function(e){
		e.preventDefault();

		$('#js-nav-sp').toggleClass('is-shown');

	});

});
