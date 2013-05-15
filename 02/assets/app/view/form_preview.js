define(["/lib/view/ejs.js", "/lib/view/dom.js", "ejs!app/template/form_preview.ejs"], function (EjsView, DomView, ejs) {
  var self = DomView.subclass(EjsView.subclassWithEjs(ejs), DomView);
  self.prototype.name = "FormPreviewView";

  return self;
});