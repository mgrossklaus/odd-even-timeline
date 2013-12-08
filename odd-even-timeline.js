(function($){

	$.fn.oddEvenTimeline = function() {

		return this.each(function() {

			init($(this));


			function init($list) {

				var $items	= $list.find('.timeline__item--not-arranged');

				$($items[0]).add($($items[1])).removeClass('timeline__item--not-arranged');
				$items.splice(0, 2);

				$.each($items, function() {
					arrangeSingleItem($list, $(this));
				});
			}


			function arrangeSingleItem($list, $item) {

				var $lefts								= $list.find('.timeline__item--odd'),
						$rights								= $list.find('.timeline__item--even'),
						$lastLeft							= $($lefts[$lefts.length-1]),
						$lastRight						= $($rights[$rights.length-1]),
						lastLeftOuterHeight		= $lastLeft.outerHeight(),
						lastLeftTopPosition		= $lastLeft.offset().top,
						lastLeftEndPosition		= lastLeftOuterHeight + lastLeftTopPosition,
						lastRightOuterHeight	= $lastRight.outerHeight(),
						lastRightTopPosition	= $lastRight.offset().top,
						lastRightEndPosition	= lastRightOuterHeight + lastRightTopPosition;

				if(lastRightEndPosition < lastLeftEndPosition) {
					$item.addClass('timeline__item--even');
				}
				else {
					$item.addClass('timeline__item--odd');
				}

				$item.removeClass('timeline-item--not-arranged');
			}

		});

	};
	
}(jQuery));