var requirejs = require("requirejs");
requirejs.config({
  baseDir: __dirname,
});

requirejs(["http", "st", "app/router"], function(http, st, Router) {
  var none = { max: 1, maxSize: 0, length: function() {
    return Infinity
  }};
  var noCaching = {
    fd: none,
    stat: none,
    index: none,
    readdir: none,
    content: none
  };

  var mount = st({
    path: __dirname + "/../",
    url: "/",
    index: "00/assets/index.html",
    passthrough: true,
    cache: noCaching
  });
  http.createServer(function (request, response) {
    mount(request, response, Router.request.bind(Router, request, response));
  }).listen(5000);
});
