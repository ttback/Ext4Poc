var itemTreeStore = Ext.create('Ext.data.TreeStore', {
    root: {
        text: 'Root Node',
        expanded: true,
        children: [{
            text: 'Root Item 1',
            leaf: true
        }, {
            text: 'Root Item 2',
            leaf: true
        }, {
            text: 'Category 1',
            children: [{
                text: 'Item 1',
                leaf: true
            }]
        }, {
            text: 'Category 2',
            children: [{
                text: 'Item 1',
                leaf: true
            }]
        }]
    }
});


var itemTree = Ext.create('Ext.tree.Panel', {
    title: 'TreePanel',
	rootVisible: false,
    store: itemTreeStore
});
