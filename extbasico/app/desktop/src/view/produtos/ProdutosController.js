Ext.define('Extbasico.view.produtos.ProdutosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.produtoscontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirmação', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    },
    onEditar: function (editor, context) {
        context.store.sync({
            success: function () {
                Ext.Msg.alert('Sucesso', 'Produto atualizado com sucesso.');
            },
            failure: function () {
                Ext.Msg.alert('Erro', 'Falha ao atualizar o produto.');
            }
        });
    },
    // Verifica a linha selecionada
    onLinhaSelecionada: function (grid, record, index, eOpts) {
        var nome = record[0].get('nome');
        Ext.Msg.alert('Seleção', 'Você selecionou o produto <b>' + nome + '</b>!');
    }
});