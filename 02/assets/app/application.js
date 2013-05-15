define([
  "knockout", "domino-application", "domino-model",
  "app/model/app", "app/view/app", "app/controller/app",
  "app/model/item", "app/view/item",
  "app/view/title",
  "app/model/form", "app/view/form"
], function (ko, parent, Model, AppModel, AppView, AppController, ItemModel, ItemView, TitleView,
             FormModel, FormView) {
  function Application() {
    parent.apply(this, arguments);

    var scopeModel = new Model;
    var formModel = new FormModel;

    var appView = new AppView(new Model, {id: "app"});
    new TitleView(scopeModel);
    new FormView(formModel, {id: "form"});

    formModel.value = {}; // render
    appView.render(); // domViewの場合は連動してdomを置き換える
  }

  var fn = parent.extends(Application);

  fn.getElement = function (id) {
    return document.querySelector("[data-view-id='" + id + "']");
  };

  fn.createItemView = function (data) {
    data.items.forEach(function (data) {
      var item = new ItemModel(data);
      var _item = this.getModel(item.id);
      if (!_item) {
        this.addModel(item);
        var itemView = new ItemView(item);
        itemView.render();
      }
    }, this);
  };

  return Application;
});