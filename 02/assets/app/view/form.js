define(["/lib/view/ejs.js", "/lib/view/dom.js", "ejs!app/template/form.ejs"], function (EjsView, DomView, ejs) {
  var self = DomView.subclass(EjsView.subclassWithEjs(ejs), DomView);
  self.prototype.name = "FormView";

  return self;
});
