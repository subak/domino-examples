define(["/lib/view/ejs.js", "ejs!app/template/form.ejs"], function (parent, ejs) {
  var FormView = parent.subclassWithEjs(ejs);
  return FormView;
});