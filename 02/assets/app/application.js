define(["domino-application", "app/model/app", "app/view/app", "app/controller/app"], function (parent, AppModel, AppView, AppController) {
  function Application() {
    var model = new AppModel();
    var view = new AppView(model);
    var controller = new AppController(model);

//    view.on("render", function () {
//      var el = this.getElementById(model.id);
//
//      controller.domAddEventListener(el);
//    });
  }

  var fn = parent.extends(Application);

  fn.getElementById = function (id) {
    return document.querySelector("[data-id='" + id + "']");
  };

  return Application;
});