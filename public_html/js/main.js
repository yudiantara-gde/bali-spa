/*
	Free Loe Span Landing Page
	https://yudiantara-gde.github.io/leo-spa/
	Free for personal and commercial use under the CCA 3.0 license
*/

(function($) {
	
	// Navigation
	//==============================================
	//superfish menu
	$('#balispa-nav.sf-menu').superfish({
		delay: 500,
		animation: {
			opacity: 'show'
		},
		animationOut: {
			opacity: 'hide'
		},
		autoArrows: false,
		dropShadows: false,
		onBeforeShow: function(ul) {
			jQuery(this).removeClass('animated fast fadeOutDown');
			jQuery(this).addClass('animated fast fadeInUp');
		},
		onBeforeHide: function(ul) {
			jQuery(this).removeClass('animated fast fadeInUp');
			jQuery(this).addClass('animated fast fadeOutDown');
		}
	});

	// Navigation
//==============================================


})(jQuery);