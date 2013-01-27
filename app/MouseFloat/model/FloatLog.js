Ext.ns('MF.model');

Ext.define('MF.model.FloatLog', 
            MF.model.FloatLog = {
    extend: 'Ext.data.Model',
    hasOne: 'MF.model.Mouse',
    fields: [
        {name: 'id',        type: 'int'},
        {name: 'mouse_id',   type: 'string'}
    ],
    getMouse: function() {
        return new MF.model.Mouse();
    }
});
