define(["domino-view", "ejs!app/template/title.ejs"], function (parent, ejs) {
  "use strict";

  function TitleView () {
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

  var fn = parent.extends(TitleView);

  return TitleView;
});
