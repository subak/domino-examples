define(["domino-view", "ejs!app/template/app.ejs"], function(parent, ejs) {
  function AppView () {
    parent.apply(this, arguments);

    //this.model.on("item.create", this.itemCreate.bind(this));

  }

  var fn = parent.extends(AppView);

  //fn.itemCreate = function (model) {};

  return AppView;
});