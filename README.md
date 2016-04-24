Timeline.js
=================

**Timeline** is a JavaScript plugin, that arranges items in a given list similar to the old facebook stream. You can see an example at [https://mgrossklaus.github.io/timeline/](https://mgrossklaus.github.io/timeline/).


Usage
=================
Include the `timeline.css` and `timeline.js` and use a markup like the following:

```html
<ul id="timeline">
  <li class="timeline__item"></li>
  ...
  <li class="timeline__item"></li>
</ul>
```
Create an instance of the Timeline like this:
```javascript
var timeline = new Timeline(document.getElementById('timeline'));
```
Afterwards you can update the list by calling `timeline.updateList();`. This rearranges all the items, what could be useful if you e.g. changed the items content and therefore their height.

After appending a new item `foo` to the list, you can call `timeline.arrangeItem(foo)` to set it to the correct position.

Settings
=================
**Timeline** accepts one DOM element as the first parameter and an optional settings object as the second parameter:

```javascript
  var timeline = new Timeline(document.getElementById('timeline'), {
    item: 'item-class',
    odd:  'item-class--odd',
    even: 'item-class--even',
});
```

| option | default | explanation |
|---|---|---|
| `item` | `timeline__item` | CSS class of all items in a Timeline list element |
| `odd` | `timeline__item--odd` | CSS class for items that will be put to the left |
| `even` | `timeline__item--even` | CSS class for items that will be put to the right |

Todos
=================
* Updating the list after prepending elements
