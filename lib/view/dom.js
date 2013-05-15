define(["domino-view"], function (parent) {
  "use strict";

  /**
   * @class DominoView
   * @param {Model} model
   * @param {EJS} ejs
   * @constructor
   */
  var self = parent.subclass(function DomView() {
    parent.apply(this, arguments);
  });

  /**
   * @method getElementByViewId
   * @param {string} id
   * @returns {HTMLElement}
   */
  self.defineMethod(function getElementByViewId(id) {
    return document.querySelector("[data-view-id='" + id + "']");
  });

  self.defineMethod(function render() {
    this.getElementByViewId(this.id).outerHTML = this.value;
    return this.value;
  });


  return self;
});