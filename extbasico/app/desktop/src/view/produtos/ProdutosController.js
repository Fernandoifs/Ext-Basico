Ext.define('Extbasico.view.produtos.ProdutosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.produtoscontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirmação', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    },
    onEditar: function () {
        var grid = this.lookupReference('produtosGrid'),
            selection = grid.getSelectionModel().getSelection();

        if (selection.length === 0) {
            Ext.Msg.alert('Aviso', 'Nenhum produto selecionado para edição.');
            return;
        }

        var record = selection[0]; // Obtém o primeiro registro selecionado
        var editor = grid.findPlugin('rowediting');
        editor.startEdit(record, 0);
    },
    // Verifica a linha selecionada
    //onLinhaSelecionada: function (grid, record, index, eOpts) {
    //    var nome = record[0].get('nome');
    //    Ext.Msg.alert('Seleção', 'Você selecionou o produto <b>' + nome + '</b>!');
    //}
});