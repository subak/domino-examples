define(function () {
  requirejs.config({
    paths: {
      "domino-class":       "node_modules/domino-class/lib/class",
      "domino-error":       "node_modules/domino-class/lib/error",
      "domino-model":       "node_modules/domino-mvc/lib/model",
      "domino-view":        "node_modules/domino-mvc/lib/view",
      "domino-controller":  "node_modules/domino-mvc/lib/controller",
      "domino-application": "node_modules/domino-mvc/lib/application",
      "domino-router":      "node_modules/domino-mvc/lib/router",
      "domino-routes":      "lib/routes",
      "domino-mvc":         "node_modules/domino-mvc/lib/mvc",
      "url":                "lib/url",
      "EventEmitter":       "lib/EventEmitter",
      "XRegExp":            "node_modules/domino-mvc/node_modules/xregexp/xregexp-all"
    }
  });
});