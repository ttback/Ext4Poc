Ext.define('Ext4Poc.ui.itemTree', {
	extend : 'Ext.tree.Panel',
	initComponent : function() 
	{
		var itemTreeStore = Ext.create('Ext.data.TreeStore', {
			root : {
				text : 'Root Node',
				expanded : true,
				children : [{
					text : 'Root Item 1',
					leaf : true
				}, {
					text : 'Root Item 2',
					leaf : true
				}, {
					text : 'Category 1',
					children : [{
						text : 'Item 1',
						leaf : true
					}]
				}, {
					text : 'Category 2',
					children : [{
						text : 'Item 1',
						leaf : true
					}]
				}]
			}
		});

		Ext.apply(this, {
			title : 'TreePanel',
			rootVisible : false,
			store : itemTreeStore
		});

		this.callParent(arguments);
	}
});
