define(["domino-model"], function (parent) {
  function ItemModel() {
    parent.apply(this, arguments);
  }

  var fn = parent.extends(ItemModel);

  fn.schema = {

  };

  fn.getId = function () {
    var value = this.get();
    return value.author_id + value.published;
  };

  return ItemModel;
});