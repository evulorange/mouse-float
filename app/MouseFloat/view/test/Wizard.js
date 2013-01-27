Ext.ns('MF.view.test');

Ext.define('MF.view.test.Wizard' ,
            MF.view.test.Wizard = {
    extend: 'Ext.panel.Panel',
    alias: 'widget.fstwizard',
    requires: [
        'MF.view.test.Wizard.FloatLog'
    ],
    
    config: {
        title: 'FST Wizard - Video #XXXX',
        floatLogs: null
    },
    
//    listeners: {
//        click: {
//            element: 'video',
//            fn: function() {
//                console.log(arguments);
//            }
//        }
//    },
    
    items: [
        {
            html: '<div width="200" height="200" background-color="#000">'
                    + '&nbsp;</div>'
        },
        {
            html: '<video id="example_video_1" class="video-js vjs-default-skin"'
                + ' controls preload="auto" width="640" height="264"'
                + ' poster="http://video-js.zencoder.com/oceans-clip.png"'
                + ' data-setup=\'{"example_option":true}\'>'
                + '<source src="http://video-js.zencoder.com/oceans-clip.mp4" type=\'video/mp4\' />'
                + '<source src="http://video-js.zencoder.com/oceans-clip.webm" type=\'video/webm\' />'
                + '<source src="http://video-js.zencoder.com/oceans-clip.ogv" type=\'video/ogg\' />'
               + '</video>'
        }
    ],
    
//    afterRender: function() {
//        this.mon(this.items.getAt(1), 'click', function() {
//            console.log(arguments);
//        }, this, {
//            delegate: '.video-js'
//        });
//    },
    
    constructor: function(config) {
        this.callParent(arguments);
        this.initConfig(config);
//    },
//
////    initComponent: function() {
////        console.log(arguments);
////        this.callParent(arguments);
////    },
//    
//    /**
//     * @param {MF.store.FloatLogs} fl
//     */
//    applyFloatLogs: function(fl) {
//        console.log(fl);
//        fl.test();
//        if (fl) {
//            fl.on('datachanged', function() {
//                this.removeAll(false);
//                
//                    console.log('a');
//                fl.each(function(floatLog) {
//                    this.add(Ext.create('MF.view.test.Wizard.FloatLog', {
//                        model: floatLog
//                    }));
//                }, this);
//                
//            }, this);
//        } else {
//            console.log(fl);
//        }
    }
});