define(["domino-model"], function (parent) {
  "use strict";

  function AppModel() {
    parent.apply(this, arguments);
  }

  var fn = parent.extends(AppModel);

  fn.request = function () {
    require(["http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=define&tagmode=any&format=json"], function(data) {
      this.set(data);
    }.bind(this));
  };

  return AppModel;
});