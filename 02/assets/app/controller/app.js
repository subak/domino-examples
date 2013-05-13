define(["/lib/controller/dom.js"], function (parent) {
  "use strict";

  function AppController() {
    parent.apply(this, arguments);
  }

  var fn = parent.extends(AppController);

  fn.domEvents = {
    "click": "click"
  };

  fn.click = function (ev) {

  };

  return AppController;
});