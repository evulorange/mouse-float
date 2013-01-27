Ext.ns('MF.store');

Ext.define('MF.store.FloatLogs', 
            MF.store.FloatLogs = {
    extend: 'Ext.data.Store',
    model: 'MF.model.FloatLog',
    data: [
        {id: 1, mouse_id: '34FE'},
        {id: 2, mouse_id: 'DD90'}
    ],
    test: function() {
        console.log('test');
    }
});
