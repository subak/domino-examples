define(["domino-model"], function (parent) {
  "use strict";

  function AppModel() {
    parent.apply(this, arguments);
  }

  var fn = parent.extends(AppModel);

  return AppModel;
});