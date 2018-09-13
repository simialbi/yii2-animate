/*globals jQuery,yii,window,moment,JSON:false */
(function ($, window, undefined) {
	var animationEnd = (function (el) {
		var animations = {
			animation: 'animationend',
			OAnimation: 'oAnimationEnd',
			MozAnimation: 'mozAnimationEnd',
			WebkitAnimation: 'webkitAnimationEnd'
		};

		for (var t in animations) {
			if (el.style[t] !== undefined) {
				return animations[t];
			}
		}
	})(document.createElement('div'));

	$.fn.extend({
		animateCss: function (animationName, callback) {
			var $elements = this, $w = $(window), threshold = 0;

			$elements.one(animationEnd, function () {
				var $this = $(this);
				$this.removeClass('animated ' + animationName);
				$this.data('animation', null);

				if (typeof callback === 'function') {
					callback();
				}
			});

			$w.on('scroll.animation resize.animation lookup.animation', function () {
				$elements.filter(function () {
					var $e = $(this);
					if ($e.is(':hidden')) {
						return;
					}

					var wt = $w.scrollTop(), wb = wt + $w.height(), et = $e.offset().top, eb = et + $e.height();

					return eb >= wt - threshold && et <= wb + threshold;
				}).addClass('animated ' + animationName);
			});

			$w.trigger('scroll.animation');

			return this;
		}
	});

	$('[data-animation]').each(function () {
		var $this = $(this);

		$this.animateCss($this.data('animation'));
	});
})(jQuery, window);