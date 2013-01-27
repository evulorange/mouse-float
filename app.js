Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'MF',

    appFolder: 'app/MouseFloat',
    
    controllers: [
        'Tests'
    ],

    launch: function() {
//        Ext.create('Ext.container.Viewport', {
//            layout: 'fit',
//            items: [
//                {
//                    xtype: 'fstwizard'
//                }
//            ]
//        });
        
        this.getController('Tests').wizardAction();
    }
});