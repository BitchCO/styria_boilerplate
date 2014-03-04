// Retina swap
(function($, window, document) {

	$(function(){

		if (window.devicePixelRatio >= 2) {

			$("img.hires").each(function() {

				$("img.hires").each(function() {

					var img = $(this),
						imgSrc = img.attr('src'),
						imgType = imgSrc.substr(-4),
						imgBaseName = imgSrc.substr(0, imgSrc.length - 4),
						imgWidth =img.css('width');

					imgBaseName += '@2x' + imgType;
					img.attr('src', imgBaseName);
					img.css({'width': imgWidth});
				});
			});
		}
	});

}(window.jQuery, window, document));

// Something Example
// (function($, window, document) {

// 	if ($('#timeline').length){

// 		var _cfg = {
// 			timeline: $('#timeline'),
// 			period: $('#timeline').children('.period').css({'cursor': 'pointer'})
// 		};

// 		var _Timeline = {

// 			init: function() {
	
// 				_Timeline.setEvents();
// 			},


// 			setEvents: function() {

// 				_cfg.period.each(function() {

// 					$(this).on('mouseenter', function(evt) {

// 						$(this).siblings('.period').stop().animate({
// 							width: '10%'
// 						}, 400, 'easeInOutCubic');

// 						$(this).stop().animate({
// 							width: '60%'
// 						}, 410, 'easeInOutCubic');
// 					}).on('mouseout', function(evt) {

// 						$(this).siblings('.period').stop().animate({
// 							width: '20%'
// 						}, 800, 'easeInOutCubic');

// 						$(this).stop().animate({
// 							width: '20%'
// 						}, 790, 'easeInOutCubic');
// 					});
// 				});
// 			},

// 		};

// 		$(function(){
// 			_Timeline.init();
// 		});
// 	}

// }(window.jQuery, window, document));



