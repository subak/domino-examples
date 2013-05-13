var http = require("http"),
  st = require("st");

var mount = st({
  path: "",
  url: "/",
  index: true,
  cache: false
});

http.createServer(mount).listen(5000);