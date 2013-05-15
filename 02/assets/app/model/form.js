define(["domino-model"], function (parent) {
  "use strict";

  var self = parent.subclass(function FormModel() {
    parent.apply(this, arguments);
  });

  self.defineField("schema", {

  });

  return self;
});