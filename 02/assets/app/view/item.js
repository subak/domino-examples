define(["domino-view", "ejs!app/template/item.ejs"], function (parent, ejs) {
  "use strict";

  function ItemView() {
    parent.apply(this, arguments);

    var product = "<span data-view-id='" + this.id + "'></span>";

    Object.defineProperties(this, {
      product: {
        get: function () {
          return product;
        }
      }
    });

    this.render = function () {
      product = ejs.render(this);
      return product;
    }
  }

  var fn = parent.extends(ItemView);

  return ItemView;
});