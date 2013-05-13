define(["domino-view", "ejs!app/template/item.ejs"], function (parent, ejs) {
  function ItemView() {
    parent.apply(this, arguments);
  }

  var fn = parent.extends(ItemView);

  fn.render = function () {
    return ejs.render(this);
  };

  return ItemView;
});