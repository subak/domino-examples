define(
  ["domino-application", "app/model/app", "app/view/app", "app/controller/app", "app/model/item", "app/view/item"],
  function (parent, AppModel, AppView, AppController, ItemModel, ItemView) {
  function Application() {
    parent.apply(this, arguments);

    var model = this.addModel(new AppModel());
    this.appView = this.addView(new AppView(model));
    var controller = new AppController(model);

    model.on("update", this.createItemView.bind(this));

    model.request();
  }

  var fn = parent.extends(Application);

  fn.getElement = function (id) {
    return document.querySelector("[data-id='" + id + "']");
  };

  fn.createItemView = function (data) {
    data.items.forEach(function (data) {
      var item = new ItemModel(data);
      var _item = this.getModel(item.id);
      if ( !_item ) {
        this.addModel(item);
        this.addView.addSubView("item", this.addView(new ItemView(item)));
      }
    }, this);
  };

  return Application;
});