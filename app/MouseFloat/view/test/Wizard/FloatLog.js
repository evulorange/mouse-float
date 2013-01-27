Ext.ns('MF.view.test.Wizard');

Ext.define('MF.view.test.Wizard.FloatLog' ,
            MF.view.test.Wizard.FloatLog = {
    extend: 'Ext.panel.Panel',
    alias: 'widget.fstwizard',
    
    config: {
        model: null
    },
    
    toggles: [],
    
    constructor: function(config) {
        this.callParent(arguments);
        this.initConfig(config);
    },

    initComponent: function() {
        this.callParent(arguments);
    },
    
    /**
     * @param {MF.model.FloatLog} fl
     */
    applyModel: function(fl) {
        console.log(fl);
        if (fl) {
            this.removeAll();
            this.model = fl;
            
            this.addDocked({
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    text: 'Mouse #' + fl.getMouse().getId()
                }]
            });
        } else {
            console.log(fl);
        }
    }
});