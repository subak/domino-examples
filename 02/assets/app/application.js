define([
  "knockout", "domino-application", "domino-model", "app/event_listener.js",
  "app/view/app", "app/controller/app",
  "app/model/item", "app/view/item",
  //"app/view/title",
  "app/model/form", "app/view/form",
  "app/view/form_preview"
], function (
  ko, parent, Model, EventListener,
  AppView, AppController,
  ItemModel, ItemView,
  //TitleView,
  FormModel, FormView,
  FormPreviewView) {
  "use strict";

  /**
   * @class Application
   * @constructor
   */
  var self = parent.subclass(function Application() {
    parent.apply(this, arguments);

    var formModel = new FormModel;

    var appView = new AppView(new Model, {id: "app"});
    //new TitleView(scopeModel);
    new FormView(formModel, {id: "form"});
    var p = new FormPreviewView(formModel, {id: "form_preview"});

    appView.render(); // domViewの場合は連動してdomを置き換える
    formModel.value = {}; // render
    p.render();

    var eventListener = new EventListener(window, {
      rootController: appView.controller,
      rootEventTypes: ["hashchange"],
      rootEvents: '{hashchange: ["scopeChange", event.newURL, event.oldURL]}'
    });

  });

  /**
   * @method getElement
   * @param {int} id
   * @returns {HTMLElement}
   */
  self.defineMethod(function getElement (id) {
    return document.querySelector("[data-view-id='" + id + "']");
  });

  /**
   * @method createItemView
   * @param {Object} data
   */
  self.defineMethod(function createItemView(data) {
    data.items.forEach(function (data) {
      var item = new ItemModel(data);
      var _item = this.getModel(item.id);
      if (!_item) {
        this.addModel(item);
        var itemView = new ItemView(item);
        itemView.render();
      }
    }, this);
  });

  return self;
});