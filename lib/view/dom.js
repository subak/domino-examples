define(["domino-view"], function (parent) {
  "use strict";

  /**
   * @class DominoView
   * @param {Model} model
   * @param {EJS} ejs
   * @constructor
   */
  var self = parent.extends(function DomView(model, ejs) {
    return ejs;
  });

  /**
   * @method renderDom
   * @param {EJS} ejs
   * @returns {string}
   */
  self.defineMethod(function renderDom(ejs) {
    return "html";
  });

  return self;
});