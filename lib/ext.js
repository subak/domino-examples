define({
  load: function(name, req, onload, config) {
    Ext.onReady(function () { onload(Ext); });
  }
});