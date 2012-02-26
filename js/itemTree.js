var tree = Ext.create('Ext.tree.Panel', {
    title: 'TreePanel',
    root: {
        text: 'Root Node',
        expanded: true,
        children: [{
            text: 'Item 1',
            leaf: true
        }, {
            text: 'Item 2',
            leaf: true
        }, {
            text: 'Folder',
            children: [{
                text: 'Item 3',
                leaf: true
            }]
        }]
    }
});
