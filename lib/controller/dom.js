define(["domino-controller"], function (parent) {
  "use strict";

  function DomController() {
    parent.apply(this, arguments);
  }

  var fn = parent.extends(DomController);

  fn.handleEvent = function (ev) {
    this[this.domEvents[ev.type]](ev);
  };

  fn.domAddEventListener = function (element) {
    Object.keys(this.domEvents).forEach(function (type) {
      element.addEventListener(type, this, false);
    }, this);
  };

  fn.domRemoveEventListener = function (element) {
    Object.keys(this.domEvents).forEach(function (type) {
      element.removeEventListener(type, this, false);
    }, this);
  };

  return DomController;
});