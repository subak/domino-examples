define(["domino-view"], function(parent) {
  "use strict";

  /**
   * @class EjsView
   * @abstract
   * @constructor
   */
  var self = parent.subClass(function EjsView() {
    parent.apply(this, arguments);
  });

  /**
   * @method subCassWithEjs
   * @static
   * @param {EJS} ejs
   * @returns {Function} class
   */
  self.defineClassMethod(function subClassWithEjs (parent, ejs) {
    return function () {
      parent.apply(this, arguments);

      var value = "<div data-view-id='" + this.id + "'></div>";

      Object.defineProperties(this, {
        value: {
          value: value
        },
        render: {
          value: function () {
            return value = ejs.render(this);
          }
        }
      });
    };
  });

  return self;
});