define(["/lib/view/ejs.js", "/lib/view/dom.js", "ejs!app/template/app.ejs"], function (EjsView, DomView, ejs) {
  var self = DomView.subclass(EjsView.subclassWithEjs(ejs), DomView);
  return self;
});

//define(["domino-view", "ejs!app/template/app.ejs"], function(parent, ejs) {
//  function AppView () {
//    parent.apply(this, arguments);
//  }
//
//  var fn = parent.extends(AppView);
//
//  fn.render = function () {
//    return ejs.render(this);
//  };
//
//  return AppView;
//});