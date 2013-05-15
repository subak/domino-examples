define(["domino-view"], function (parent) {
  "use strict";

  var self = parent.extends(
    /**
     * レイアウトするView
     * modelのrenderメソッドに連動しない
     * @constructor
     */
    function LayoutView (a, b, c) {


    }
  );

  self.addMethod(
    /**
     *
     * @param {View} view
     */
    function addSubView (view) {

    }
  );

  self.addMethod(
    /**
     *
     * @param {View} view
     */
    function removeSubView(view) {

    }
  );

  return self;
});