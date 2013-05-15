define(["domino-controller"], function (parent) {
  "use strict";

  var self = parent.subclass(function AppController() {
    parent.apply(this, arguments);
  });

  self.defineMethod(function scopeChange(newURL, oldURL) {
    debugger
  });

  return self;
});