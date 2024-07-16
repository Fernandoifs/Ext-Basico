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
    onDelete: function (button) {
        debugger
        var me = this,
            vm = me.getViewModel(),
            dialog = me.getView(),
            record = vm.get('record');

        Ext.Msg.confirm('Confirmação', 'Deseja realmente excluir?!', function (option) {
            if (option === 'yes') {
                dialog.mask('Excluindo, aguarde...');
                record.erase({
                    callback: function (record) {
                        dialog.unmask();
                        if (record.dropped) {
                            Ext.toast('Registro Excluido!', 4000);
                            dialog.close();
                        } else {
                            record.reject();
                        }
                    },
                });
            }
        })
    }
    //duvidas ondelete
    //pq a referencia é o button
    //pq o uso das variaveis, me,dialog,record
});