$(function(){
	$('.main_banners').slick({
		cssEase: 'ease',
		speed: 900,
		autoplay: true,
		pause: 5000,
		nextArrow: '<button type="button" class="banner_next banner_arrows">Next</button>',
		prevArrow: '<button type="button" class="banner_prev banner_arrows">Prev</button>',
		responsive: [
			{
	      breakpoint: 900,
	      settings: {
	        arrows: false
	      }
	    }
		]
	});
	$('.main_product_carousel').slick({
		centerMode: true,
  	slidesToShow: 2,
  	arrows: false,
  	autoplay: true,
  	responsive: [
  		{
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 440,
	      settings: {
	      	centerMode: false,
	        slidesToShow: 1
	      }
	    }
  	]
	});
	$('.lan_toggle span').click(function(){
		$('.langs').toggleClass('open');
		return false;
	});

	$('.top_nav_toggle').click(function(){
		$('.top_mob_nav, .top_nav_toggle').toggleClass('open');
	});
	$('.main_menu_toggle').click(function(){
		$('.main_offset_menu').toggleClass('open');
		if ($('.main_offset_menu').hasClass('open')) {
			$('body').addClass('open_menu');
		}
		else {
			$('body').removeClass('open_menu');
		}
	});
});