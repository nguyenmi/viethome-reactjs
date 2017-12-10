import $ from 'jquery'


$(document).ready(function(){
	$(".video").slick({
		prevArrow: '.next-prev .left',
		nextArrow: '.next-prev .right',
	});


	// this is js slick slider news

	$(".slick-slider").slick({
		prevArrow: '.slider-next .left',
		nextArrow: '.slider-next .right',
		slidesToShow: 4,
  		slidesToScroll: 1,
  		// autoplay: true,
  		// autoplaySpeed: 6000,

	});

    $("#menu-show").click(function(){
    	$('.navigation').toggleClass("show");
    });

	// this is js slick video-detail
	$(".slick-detailvideo").slick({
		prevArrow: '.next-prev .left',
		nextArrow: '.next-prev .right',
		slidesToShow: 3,
  		slidesToScroll: 1,
  		// autoplay: true,
  		// autoplaySpeed: 6000,

	});
});
