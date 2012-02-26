
Ext.require([
    'Ext.window.Window',
    'Ext.panel.Panel',
    'Ext.toolbar.*',
    'Ext.tree.Panel',
    'Ext.container.Viewport',
    'Ext.form.*',
    'Ext.tab.*',
    'Ext.slider.*',
    'Ext.layout.*',
    'Ext.button.*',
    'Ext.grid.*',
    'Ext.data.*',
    'EXt.util.*'
]);

Ext.onReady(function() {
    Ext.panel.Panel.prototype.defaultDockWeights = { top: 1, bottom: 3, left: 5, right: 7 };

    var items = [];
   

    /**
     * Grid
     */
     var myData = [
         ['3m Co',71.72,0.02,0.03,'9/1 12:00am'],
         ['Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am'],
         ['Altria Group Inc',83.81,0.28,0.34,'9/1 12:00am'],
         ['American Express Company',52.55,0.01,0.02,'9/1 12:00am'],
         ['American International Group, Inc.',64.13,0.31,0.49,'9/1 12:00am'],
         ['AT&T Inc.',31.61,-0.48,-1.54,'9/1 12:00am'],
         ['Boeing Co.',75.43,0.53,0.71,'9/1 12:00am'],
         ['Caterpillar Inc.',67.27,0.92,1.39,'9/1 12:00am'],
         ['Citigroup, Inc.',49.37,0.02,0.04,'9/1 12:00am'],
         ['E.I. du Pont de Nemours and Company',40.48,0.51,1.28,'9/1 12:00am']
     ];

    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'},
           {name: 'price', type: 'float'},
           {name: 'change', type: 'float'},
           {name: 'pctChange', type: 'float'},
           {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ],
        sorters: {
            property : 'company',
            direction: 'ASC'
        },
        data: myData,
        pageSize: 8
    });

    var pagingBar = Ext.createWidget('pagingtoolbar', {
        store      : store,
        displayInfo: true,
        displayMsg : 'Displaying topics {0} - {1} of {2}'
    });

    items.push({
        xtype: 'gridpanel',

        height: 200,
        width : 450,

        x: 690, y: 100,

        title: 'GridPanel',
        collapsible: true,

        store: store,

        columns: [
            {header: "Company",      flex: 1, sortable: true, dataIndex: 'company'},
            {header: "Price",        width: 75,  sortable: true, dataIndex: 'price'},
            {header: "Change",       width: 75,  sortable: true, dataIndex: 'change'},
            {header: "% Change",     width: 75,  sortable: true, dataIndex: 'pctChange'},
            {header: "Last Updated", width: 85,  sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ],
        loadMask        : true,

        viewConfig: {
            stripeRows: true
        },

        bbar: pagingBar,
        tbar: [
            {text: 'Toolbar'},
            '->',
            {
                xtype: 'triggerfield',
                trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger'
            }
        ]
    });

    //=============================================================
    // Accordion / Tree
    //=============================================================
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

    var accConfig = {
        title : 'Accordion and TreePanel',
        collapsible: true,
        layout: 'accordion',

        x: 690, y: 830,

        width : 450,
        height: 240,

        bodyStyle: {
            'background-color': '#eee'
        },

        items: [
            tree, {
                title: 'Item 2',
                html: 'Some content'
            }, {
                title: 'Item 3',
                html : 'Some content'
            }
        ]
    };

    items.push(accConfig);

    /**
     * Tabs
     */
    var tabCfg = {
        xtype: 'tabpanel',

        width : 310,
        height: 150,

        activeTab: 0,

        defaults: {
            bodyStyle: 'padding:10px;'
        },

        items: [
            {
                title: 'Tab 1',
                html : 'Free-standing tab panel'
            },
            {
                title   : 'Tab 2',
                closable: true
            },
            {
                title   : 'Tab 3',
                closable: true
            }
        ]
    };

    items.push(Ext.applyIf({
        x: 50, y: 970,

        enableTabScroll: true,

        items: [
            {
                title: 'Tab 1',
                html : 'Tab panel 1 content'
            },
            {
                title   : 'Tab 2',
                html : 'Tab panel 2 content',
                closable: true
            },
            {
                title   : 'Tab 3',
                html : 'Tab panel 3 content',
                closable: true
            },
            {
                title   : 'Tab 4',
                html : 'Tab panel 4 content',
                closable: true
            },
            {
                title   : 'Tab 5',
                html : 'Tab panel 5 content',
                closable: true
            },
            {
                title   : 'Tab 6',
                html : 'Tab panel 6 content',
                closable: true
            }
        ]
    }, tabCfg));

    items.push(Ext.apply({
        plain: true,
        x    : 370, y: 970
    }, tabCfg));

    /**
     * DatePicker
     */
    items.push({
        xtype: 'panel',

        x: 50, y: 1130,

        border: false,
        width : 180,

        items: {
            xtype: 'datepicker'
        }
    });

    //=============================================================
    // Resizable
    //=============================================================
    var rszEl = Ext.getBody().createChild({
        style: 'background: transparent;',
        html: '<div style="padding:20px;">Resizable handles</div>'
    });

    rszEl.position('absolute', 1, 240, 1130);
    rszEl.setSize(180, 180);
    Ext.create('Ext.resizer.Resizer', {
        el: rszEl,
        handles: 'all',
        pinned: true
    });

    /**
     * ProgressBar / Slider
     */
    var progressbar = Ext.createWidget('progressbar', {
        value: 0.5
    });

    items.push({
        xtype: 'panel',
        title: 'ProgressBar / Slider',

        x: 690, y: 1080,

        width: 450,
        height: 200,

        bodyPadding: 5,
        layout     : {
            type : 'vbox',
            align: 'stretch'
        },

        items: [
            progressbar,
            {
                xtype    : 'slider',
                hideLabel: true,
                value    : 50,
                margin   : '5 0 0 0'
            },
            {
                xtype   : 'slider',
                vertical: true,
                value   : 50,
                height  : 100,
                margin  : '5 0 0 0'
            }
        ]
    });

    items.push({
        width:250,
        height:182,
        x: 430, y: 1130,
        xtype: 'gridpanel',
        title: 'Framed Grid',
        collapsible: true,
        store: store,
        multiSelect: true,
        emptyText: 'No images to display',
        frame: true,
        enableColumnMove: false,
        columns: [
            {header: "Company",      flex: 1, sortable: true, dataIndex: 'company'},
            {header: "Price",        width: 75,  sortable: true, dataIndex: 'price'},
            {header: "Change",       width: 75,  sortable: true, dataIndex: 'change'}
        ]
    });
    
    

    for (var i = 0; i < items.length; i++) {
        items[i].style = {
            position: 'relative'
        };
        var item = Ext.ComponentManager.create(items[i], 'panel');
        item.render(document.body);
    }

    setTimeout(function() {
        Ext.QuickTips.init();
        progressbar.wait({
            text: 'Progress text...'
        });
    }, 7000);
        
    /**
     * Stylesheet Switcher
     */
    Ext.get('styleswitcher_select').on('change', function(e, select) {
        var name = select[select.selectedIndex].value,
            currentPath = window.location.pathname,
            isCurrent = currentPath.match(name);
        
        if (!isCurrent) {
            window.location = name;
        }
    });
});

