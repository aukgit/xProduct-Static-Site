(function($) {
	"use strict";
	/**
	 * Vertically Centering
	 * @usedPlugins jquery,flexbox-fallback
	 */
	if($('html').hasClass('no-flexbox') && $('html').hasClass('no-flexboxlegacy')){
		if($('header nav > ul > li > a').length > 0) $('header nav > ul > li > a').flexVerticalCenter('top');
		if($('.met_parallax_line.met_vcenter .met_content').length > 0) $('.met_parallax_line.met_vcenter .met_content').flexVerticalCenter('top');
		if($('.met_recent_work_overlay.met_vcenter > div').length > 0) $('.met_recent_work_overlay.met_vcenter > div').flexVerticalCenter('top');
		if($('.knob .met_bgcolor.met_vcenter i').length > 0) $('.knob .met_bgcolor.met_vcenter i').flexVerticalCenter('top');
		if($('.met_header_socials.met_vcenter a').length > 0) $('.met_header_socials.met_vcenter a').flexVerticalCenter('top');
		if($('.met_portfolio2_item_overlay.met_vcenter .met_portfolio2_item_miscs').length > 0) $('.met_portfolio2_item_overlay.met_vcenter .met_portfolio2_item_miscs').flexVerticalCenter('top');
		if($('.met_parallax_content.met_vcenter .met_parallax_content_box').length > 0) $('.met_parallax_content.met_vcenter .met_parallax_content_box').flexVerticalCenter('top');

	}
	if($('.dl-menuwrapper').length > 0) $('.dl-menuwrapper').flexVerticalCenter('top');

	/**
	 * Scroll Speed and Styling
	 * @usedPlugins jquery,nicescroll
	 * @usedAt      Every page that contains body tag with data-smooth-scrolling 1
	 */
	if($('body').attr('data-smooth-scrolling') == 1 && !$('html').hasClass('touch')){
		$("html").niceScroll({
			scrollspeed: 60,
			mousescrollstep: 35,
			cursorwidth: 5,
			cursorcolor: '#A9A9A9',
			cursorborder: 'none',
			background: 'rgba(255,255,255,0.3)',
			cursorborderradius: 3,
			autohidemode: false,
			cursoropacitymin: 0.1,
			cursoropacitymax: 1
		});
	}


	/**
	 * DL Menu
	 * @usedPlugins jquery, dlmenu
	 * @usedAt      shortcode
	 */
	var dl_menu = $('#dl-menu');
	if(dl_menu.length > 0)
		dl_menu.dlmenu({
			animationClasses : { 'in' : 'dl-animate-in-3', 'out' : 'dl-animate-out-3' }
		});



	/**
	 * Parallax
	 * @usedPlugins jquery, parallax
	 * @usedAt      Parallax Lines on Pages
	 */
	if(!$('html').hasClass('touch')){
		var met_parallax_item_1 = $(".met_parallax_item_1");
		met_parallax_item_1.length > 0 ? met_parallax_item_1.parallax("50%", "0") : true;
	}


	/**
	 * Tabs
	 * @usedPlugins jquery, bootstrap
	 * @usedAt      Tabbed Contents
	 */
	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});


	/**
	 * Php Ajax Contact Form
	 * @usedPlugins jquery
	 * @usedAt      Contact Page
	 */
	$('.met_contact_form').bind('submit', function(){
		var form    = $(this);
		var me      = $(this).children('button[type=submit]');

		me.attr('disabled','disabled');

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: form.serialize(),
			success: function(returnedInfo){

				var message = $('.met_contact_thank_you');
				returnedInfo == 1 ? message.show() : message.html('Our Mail Servers Are Currently Down').show();
				setInterval(function(){message.fadeOut()},5000);
				me.removeAttr('disabled');

			}
		});
		return false;
	});



	/**
	 * Main Menu
	 * @usedPlugins jquery, superfish, hoverIntent
	 * @usedAt      Global
	 */
	var main_menu = $('header nav ul');
	if(main_menu.length > 0 && !$('html').hasClass('touch')){
		main_menu.superfish({
			delay: 250
		});
	}





	/**
	 * Fixed Header
	 * @usedPlugins jquery
	 * @usedAt      Header
	 */
	var met_fixed_header = $('.met_fixed_header');
	met_fixed_header.next().css('margin-top',met_fixed_header.height()+'px');
	$(window).bind('resize', function(){
		met_fixed_header.next().css('margin-top',met_fixed_header.height()+'px');
	});



	/**
	 * Element Height Adjuster
	 * @usedPlugins jquery
	 */
	function heightAdjuster(element){
		var w               = element.data('width');
		var h               = element.data('height');
		var currentWidth    = element.width();
		var ratio           = h / w;
		var newHeight       = currentWidth * ratio;
		element.css('height', newHeight+'px');
	}

	/**
	 * Sticky Header Resizing
	 * @usedAt      global, dom ready, window resize
	 */
	function stickyHeaderSize(){
		if($('.met_boxed_layout').length > 0 && $('.met_fixed_header').length > 0){
			var fixed_header = $('.met_fixed_header');
			fixed_header.attr('data-fixed-width', $('.met_page_wrapper').width()+'px');
			fixed_header.attr('data-fixed-left', $('.met_page_wrapper').offset().left+'px');

			fixed_header.css({
				'left' : fixed_header.attr('data-fixed-left'),
				'width' : fixed_header.attr('data-fixed-width')
			});
		}
	}

})(jQuery);
