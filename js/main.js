Ext.require(['Ext.Viewport','Ext.data.TreeStore']);

Ext.define('Ext4Poc.Viewport', 
{
    extend: 'Ext.Viewport',
    requires:['Ext4Poc.ui.itemTree','Ext4Poc.ui.stockGrid'],
    
    initComponent: function() 
    {
        Ext.apply(this, {
			 layout:'border',
             items:[getLeftPanel(),getRightPanel()]
        });
        
        this.callParent(arguments);
    }
});

Ext.onReady(function(){
	var viewport = Ext.create('Ext4Poc.Viewport');
});
