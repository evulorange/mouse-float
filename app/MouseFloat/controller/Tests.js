Ext.ns('MF.controller');

Ext.define('MF.controller.Tests', 
           MF.controller.Tests = {
    extend: 'Ext.app.Controller',
    
    views: [
        'test.Wizard'
    ],
    
    stores: [
        'Mice', 'FloatLogs'
    ],
    
    models: [
        'Mouse', 'FloatLog'
    ],

    init: function() {
        console.log('Initialized Users! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },
    
    wizardAction: function() {
        Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            },
            items: [
                this.getView('test.Wizard').create({
                    floatLogs: this.getStore('FloatLogs')
                })
            ]
        });
        
        this.getStore('FloatLogs').loadData([
            {id: 1, mouse_id: '34FE'},
            {id: 2, mouse_id: 'DD90'}
        ]);
        
//        this.getStore('Mice').each(function(record) {
//            
//        }, this);
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});