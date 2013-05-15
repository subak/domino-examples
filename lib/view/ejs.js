define(["domino-view"], function(parent) {
  "use strict";

  /**
   * @class EjsView
   * @abstract
   * @constructor
   */
  var self = parent.subclass(function EjsView() {
    parent.apply(this, arguments);
  });

  /**
   * TODO: 名前を付けれるようにしたい
   * @method subclassWithEjs
   * @static
   * @param {EJS} ejs
   * @returns {Function} class
   */
  self.defineClassMethod(function subclassWithEjs (ejs, aParent) {
    if ( !aParent ) { aParent = parent; }
    return function () {
      aParent.apply(this, arguments);

      this.value = "<div data-view-id='" + this.id + "'></div>";

      Object.defineProperties(this, {
//        value: {
//          value: value
//        },
        render: {
          value: function () {
            this.value = ejs.render(this);
            this.super.render.call(this);
          }
        }
      });
    };
  });

  return self;
});