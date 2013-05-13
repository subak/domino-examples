define([
  "knockout", "domino-application", "domino-model", "app/model/app", "app/view/app", "app/controller/app", "app/model/item", "app/view/item"
], function (ko, parent, Model, AppModel, AppView, AppController, ItemModel, ItemView) {
  function Application() {
    parent.apply(this, arguments);

    var model = this.appModel = this.addModel(new AppModel());

    this.appView = this.addView(new AppView(model));
    var controller = new AppController(model);

    model.on("update", this.createItemView.bind(this));

    this.itemObservableArray = ko.observableArray();

    this.title = new Model(ko.observable("Hello, world."));
    this.html = this.appView.render();
  }

  var fn = parent.extends(Application);

  fn.afterBinding = function () {
    var el = this.getElement(this.appView.id);

    ko.applyBindings({items: this.itemObservableArray}, el);

    this.appModel.request();
  };

  fn.getElement = function (id) {
    return document.querySelector("[data-id='" + id + "']");
  };

  fn.createItemView = function (data) {
    data.items.forEach(function (data) {
      var item = new ItemModel(data);
      var _item = this.getModel(item.id);
      if ( !_item ) {
        this.addModel(item);
        var itemView = new ItemView(item);
        this.itemObservableArray.push({html: itemView.render()});

        //var el = this.getElement(itemView.id);
        //ko.applyBindings(item.get(), el);
        //this.itemObservableArray.push(item.get());
        //this.addView.addSubView("item", this.addView(new ItemView(item)));
      }
    }, this);
  };

  return Application;
});