define(["domino-view", "ejs!app/template/app.ejs"], function(parent, ejs) {
  function AppView () {

  }

  var fn = parent.extends(AppView);

  return AppView;
});