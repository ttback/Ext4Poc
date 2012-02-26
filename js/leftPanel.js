		    //=============================================================
		    // Accordion
		    //=============================================================


		    var leftPanel = {
		        title : 'Accordion and TreePanel',
		        collapsible: true,
		        layout: 'accordion',
				region:'west',
				margins:'5 0 5 5',
				width: 210,
				split:true,
		        

		        bodyStyle: {
		            'background-color': '#eee'
		        },

		        items: [
		            itemTree, {
		                title: 'Item 2',
		                html: 'Some content'
		            }, {
		                title: 'Item 3',
		                html : 'Some content'
		            }
		        ]
		    };
