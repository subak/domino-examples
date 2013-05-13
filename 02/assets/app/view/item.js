define(["domino-view"], function (parent) {
  function ItemView() {
    parent.apply(this, arguments);
  }

  var fn = parent.extends(ItemView);

  return ItemView;
});