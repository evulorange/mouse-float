Ext.ns('MF.view.test');

Ext.define('MF.view.test.Wizard' ,
            MF.view.test.Wizard = {
    extend: 'Ext.container.Container',
    alias: 'widget.fstwizard',
    requires: [
        'MF.view.test.Wizard.FloatLog'
    ],
    
    config: {
        title: 'FST Wizard - Video #XXXX',
        floatLogs: null
    },
    
    constructor: function(config) {
        this.callParent(arguments);
        this.initConfig(config);
    },

//    initComponent: function() {
//        console.log(arguments);
//        this.callParent(arguments);
//    },
    
    /**
     * @param {MF.store.FloatLogs} fl
     */
    applyFloatLogs: function(fl) {
        console.log(fl);
        fl.test();
        if (fl) {
            fl.on('datachanged', function() {
                this.removeAll(false);
                
                    console.log('a');
                fl.each(function(floatLog) {
                    this.add(Ext.create('MF.view.test.Wizard.FloatLog', {
                        model: floatLog
                    }));
                }, this);
                
            }, this);
        } else {
            console.log(fl);
        }
    }
});