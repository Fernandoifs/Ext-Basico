// Ext.define('Extbasico.view.produtos.componentes.ProdutosForm', {
//     extend: 'Ext.window.Window',
//     xtype: 'widget.produtosform',

//     layout: 'fit',
//     height: 200,
//     width: 350,
//     iconCls: 'fa fa-user',
//     title: 'Editar Produto',
//     autoShow: true,

//     items: [{
//         xtype: 'form',
//         items: [{
//             xtype: 'textfield',
//             name: 'Nome',
//             fieldLabel: 'Produto',
//             allowBlank: false
//         }]
//     }],

//     buttons: [{
//         text: 'Salvar',
//         handler: function() {
//             console.log('salvando...')
//         }
//     }, {
//         text: 'Cancelar',
//         handler: function() {
//             this.up('window').close();
//         }
//     }]
// });

Ext.define('Extbasico.view.produtos.componentes.ProdutosForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userform',
    title: 'Novo Cadastro',
    bodyPadding: 10,
    defaultType: 'textfield',
    frame: true,
    border: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 1,
    items: [
        {
            fieldLabel: 'Produto',
            name: 'produto',
            placeholder: 'Produto',
            allowBlank: false
        },
        {
            fieldLabel: 'Estoque',
            name: 'estoque',
            allowBlank: false
        },
        {
            fieldLabel: 'Preco',
            name: 'preco',
            allowBlank: false
        },
    ],
    buttons: [
        {
            text: 'Cancelar',
            handler: function () {
                var form = this.up('form').getForm();
                form.close()
            }

        },
        {
            text: 'Enviar',
            handler: function () {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function () {
                            Ext.Msg.alert('Success', 'Form submitted successfully.');
                        },
                        failure: function () {
                            Ext.Msg.alert('Failed', 'Form submission failed.');
                        }
                    });
                }
            }
        }
    ]
});