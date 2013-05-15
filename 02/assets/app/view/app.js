define(["/lib/view/ejs.js", "/lib/view/dom.js", "ejs!app/template/app.ejs", "app/controller/app"], function (EjsView, DomView, ejs, AppController) {
  var self = DomView.subclass(EjsView.subclassWithEjs(ejs), DomView);

  self.defineField("controllerClass", AppController);

  return self;
});
