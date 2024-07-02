Ext.define('Extbasico.view.minhaconta.MinhacontaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.minhacontacontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirmação', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    }
});
