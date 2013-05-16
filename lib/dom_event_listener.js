define(["domino-class"], function (parent) {
  "use strict";

  var self = parent.subclass(function DomEventListener(target) {
    Object.defineProperties(this, {
      target: {
        value: target
      },
      controllers: {
        value: {}
      }
    });

    this.eventTypes.forEach(function (type) {
      target.addEventListener(type, this, false);
    }, this);
  });

  /**
   * @method handleEvent
   * @paran {Event} event
   */
  self.defineMethod(function handleEvent(event) { });

  /**
   * @property eventTypes
   */
  self.defineField("eventTypes", [
    "hashchange"
  ]);

  /**
   * @method addController
   * @param {Controller} controller
   */
  self.defineMethod(function addController(controller) {
    this.controllers[controller.viewId] = controller;
  });

  return self;
});