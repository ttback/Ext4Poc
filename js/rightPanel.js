

var item1 = stockGrid;

    var item2 = Ext.create('Ext.Panel', {
        title: 'Accordion Item 2',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });

    var item3 = Ext.create('Ext.Panel', {
        title: 'Accordion Item 3',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });

    var item4 = Ext.create('Ext.Panel', {
        title: 'Accordion Item 4',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });

    var item5 = Ext.create('Ext.Panel', {
        title: 'Accordion Item 5',
        html: '&lt;empty panel&gt;',
        cls:'empty'
    });

    var rightPanel = Ext.create('Ext.Panel', {
        region:'center',
		margins:'5 5 5 0',
                
        layout:'accordion',
        items: [item1, item2, item3, item4, item5]
    });
