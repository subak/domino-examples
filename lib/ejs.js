define({
  load: function(name, req, onload, config) {
    path = name.replace(/^[^!]*!/, "");
    req(["text!" + path], function(template) {
      var ejs = new EJS({text: template});
      onload(ejs);
    });
  }
});