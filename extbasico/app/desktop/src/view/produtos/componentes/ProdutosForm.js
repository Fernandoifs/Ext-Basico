Ext.define('Extbasico.view.produtos.componentes.ProdutosForm', {
    extend: 'Ext.window.Window',
    xtype: 'widget.produtosform',

    layout: 'fit',
    height: 200,
    width: 350,
    iconCls: 'fa fa-user',
    title: 'Editar Produto',
    autoShow: true,

    items: [{
        xtype: 'form',
        items: [{
            xtype: 'textfield',
            name: 'Nome',
            fieldLabel: 'Produto',
            allowBlank: false
        }]
    }],

    buttons: [{
        text: 'Salvar',
        handler: function() {
            console.log('salvando...')
        }
    }, {
        text: 'Cancelar',
        handler: function() {
            this.up('window').close();
        }
    }]
});

//Ext.create('Extbasico.view.produtos.ProdutosForm').show();

