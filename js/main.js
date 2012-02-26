Ext.require(['*']);

Ext.onReady(function(){
        var viewport = Ext.create('Ext.Viewport', {
            layout:'border',
            items:[
                leftPanel,rightPanel]
        });
    });
