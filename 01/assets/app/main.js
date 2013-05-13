define(["/lib/ext.js!"], function (Ext) {
  var el = document.querySelector("#root_view");

  new Ext.Viewport({
    renderTo: el,
    layout: {
      type: "border",
      padding: 10
    },
    cls: "container",
    items: [{
      region: "north",
      xtype: "header",
      cls: "app-title",
      layout: {
        type: "hbox",
        align: "middle"
      },
      items: [{
        xtype: "component",
        html: "<h1>渋谷オリジナルAR</h1>"
      }]
    }, {
      region: "west",
      title: "メニュー",
      split: true,
      collapsible: true,
      width: "20%"
    },
      {
        region: "center",
        xtype:  "panel",
        layout: {
          type:    "table",
          columns: 3,
          tdAttrs: { style: 'padding: 10px;' }
        },
        items:  [
          {
            html:  "<form><h2>KitchenSink.DummyText.mediumText</h2></form>",
            width: 200
          },
          {
            title: 'Title',
            html:  "KitchenSink.DummyText.mediumText",
            width: 200
          },
          {
            title: 'Header Icons',
            tools: [
              { type: 'pin' },
              { type: 'refresh' },
              { type: 'search' },
              { type: 'save' }
            ],
            html:  "",
            width: 200
          },
          {
            title:       'Collapsed Panel',
            collapsed:   true,
            collapsible: true,
            html:        "hoge",
            colspan:     3
          }
        ]

        // bodyPadding: 10,
      // layout: {
      //     type: 'hbox',
      //     pack: 'start',
      //     align: 'stretch'
      // },
      // defaults: {
      //     frame: true
      // },
      // items: [{
      //     title: 'Panel 1',
      //     flex: 1,
      //     margin: 5,
      //     html: 'flex : 1'
      // }, {
      //     title: 'Panel 2',
      //     flex: 2,
      //     margin: 5,
      //     html: "hoge"
      // }]

    }]
  });
  
  // var el = document.querySelector("#root_view");
  // var extView = new Ext.container.Container({
  //   layout: {
  //     type: "hbox"
  //   },
  //   renderTo: el,
  //   //contentEl: el,
  //   items: [{
  //       xtype: 'datefield',
  //       name: 'startDate',
  //       fieldLabel: 'Start date'
  //   },{
  //       xtype: 'datefield',
  //       name: 'endDate',
  //       fieldLabel: 'End date'
  //   }]
  // });



  //extView.render(el);
  
  // var extView = new Ext.Viewport({
  //   contentEl: el,
  //   hidden: true,
  //   //autoShow: false,
  //   layout: {
  //     type: "border",
  //     padding: 5
  //   },
  //   defaults: {
  //     split: true
  //   },
  //   items: [{
  //     region: "west",
  //     collapsible: false,
  //     title: "West",
  //     split: true,
  //     width: "30%",
  //     html: "hoge",
  //   }, {
  //     region: 'north',
  //     collapsible: false,
  //     title: 'North',
  //     split: true,
  //     height: 100,
  //     minHeight: 60,
  //     html: 'north',
  //   }]
  // });
  
  //extView.show();
  
  // Ext.create("Ext.window.Window", {
  //   height: 300,
  //   width: 300
  // });
  // 
  // Ext.create('Ext.Button', {
  //     text: 'Click me',
  //     renderTo: Ext.getBody(),
  //     handler: function() {
  //         alert('You clicked the button!');
  //     }
  // });
});