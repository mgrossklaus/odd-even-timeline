/**
 * Timeline JavaScript Plugin.
 * Arranges item to the left and the right similar to the previous facebook timeline stream.
 *
 * See instructions at: https://github.com/mgrossklaus/timeline
 * Demo: https://mgrossklaus.github.io/timeline
 *
 * @author: Michael Großklaus (https://www.mgrossklaus.de)
 */

var Timeline = function(list, options) {
  'use strict';

  var listItems,

      // extend a default set of classes with the assigned ones.
      classes = extend({
        item: 'timeline__item',
        odd:  'timeline__item--odd',
        even: 'timeline__item--even',
      }, options);

  listItems = list.getElementsByClassName(classes.item);

  // return if we can't find any items to arrange.
  if (listItems.length === 0) {
    return;
  }

  // the first two items should always arranged to
  // the left and the right.
  listItems[0].classList.add(classes.odd);
  listItems[1].classList.add(classes.even);

  updateList();

  /**
   * arranges all items in a timeline that do not have the either 'odd' or 'even' class
   * by calling arrangeItem() for each of these items.
   */
  function updateList() {
    var items   = list.querySelectorAll('.' + classes.item + ':not(.' + classes.odd + '):not(.' + classes.even + ')'),
        itemsL  = items.length;

    for (var i = 0; i < itemsL; i++) {
      arrangeItem(items[i]);
    }
  }

  /**
   * adds either the 'odd' or the 'even' class to a single item
   * by comparing the coordinate of the lower edges of the last
   * odd and the last even item.
   */
  function arrangeItem(item) {
    var oddAll  = list.getElementsByClassName(classes.odd),
        evenAll = list.getElementsByClassName(classes.even);

    item.classList.add(
      oddAll[oddAll.length - 1].getBoundingClientRect().bottom > evenAll[evenAll.length - 1].getBoundingClientRect().bottom ?
        classes.even : classes.odd
      );
  }

  /**
   * merges two objects and returns a merged object.
   */
  function extend(defaultClasses, params) {
    var extended = defaultClasses;

    for (var prop in params) {
      if (Object.prototype.hasOwnProperty.call(params, prop)) {
        extended[prop] = params[prop];
      }
    }

    return extended;
  }

  /**
   * return functions for the public API.
   */
  return {
    updateList: updateList,
    arrangeItem: arrangeItem
  }
};
