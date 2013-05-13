define(["url", "domino-mvc"], function (url, domino) {
  var parent = domino.Router;

  function Router(request, response) {
    try {
      this.parseRequest(request);
    } catch (e) {
      if (e instanceof this.constructor.RouteError) {
        return response.end("route error");
      } else {
        throw new Error;
      }
    }

    response.end("emit(" + this.action + ", " + this.params.scope + ").");
  }

  Router.request = function (request, response) {
    new this(request, response);
  };

  var fn = domino.Router.extends(Router);

  fn.parseRequest = function (request) {
    var parsedUrl = url.parse(request.url, true);
    this.superClass.call(this, this.getTarget(request.method, parsedUrl.pathname), parsedUrl.query, domino.routes.railsRestStyle);
  };

  fn.getTarget = function ( method, pathname ) {
    return method + " " + pathname;
  };

  return Router;
});