(function($){

  $.fn.oddEvenTimeline = function() {

    return this.each(function() {

      init($(this));


      function init($list) {

        var $items  = $list.find('.timeline__item:not(.timeline__item--odd,.timeline__item--even)');

        $.each($items, function() {
          arrangeSingleItem($list, $(this));
        });
      }


      function arrangeSingleItem($list, $item) {

        var $lastLeft             = $list.find('.timeline__item--odd').last(),
            $lastRight            = $list.find('.timeline__item--even').last(),
            lastLeftOuterHeight   = $lastLeft.outerHeight(),
            lastLeftTopPosition   = $lastLeft.offset().top,
            lastLeftEndPosition   = lastLeftOuterHeight + lastLeftTopPosition,
            lastRightOuterHeight  = $lastRight.outerHeight(),
            lastRightTopPosition  = $lastRight.offset().top,
            lastRightEndPosition  = lastRightOuterHeight + lastRightTopPosition;

        if(lastRightEndPosition < lastLeftEndPosition) {
          $item.addClass('timeline__item--even');
        }
        else {
          $item.addClass('timeline__item--odd');
        }
      }

    });

  };
  
}(jQuery));