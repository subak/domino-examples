define(["/lib/dom_event_listener.js"], function (parent) {
  var self = parent.subclass(function EventListener(target, opts) {
    parent.call(this, target);
    Object.defineProperties(this, {
      rootController: {
        value: opts && opts.rootController || null
      },
      rootEvents: {
        value: opts && opts.rootEvents || null
      },
      rootEventTypes: {
        value: opts && opts.rootEventTypes || null
      }
    });
  });

  self.defineMethod(function handleEvent(event) {
    if ( 0 <= this.rootEventTypes.indexOf(event.type) ) {
      var events = eval('(function () { return ' + this.rootEvents + '; }).call(event.target);');
      var args = events[event.type];
      var controller = this.rootController;
      controller[args[0]].apply(controller, args.slice(1));
    }
  });

  self.defineField("eventTypes", [
    "hashchange"
  ]);

  self.defineField();

  return self;
});