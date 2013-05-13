require(["knockout", "app/application", "domReady!"], function(ko, Application) {
  "use strict";

  new Application()

  //var appView = new AppView();

  var title = ko.observable("Hello, world.");

//  var title = new Model(ko.observable("02"));

  ko.applyBindings({app: "hello world!", title: title}, document.documentElement);
});