Ext.define('Extbasico.view.produtos.ProdutosView', {
    extend: 'Ext.container.Container',
    xtype: 'produtosview',
    cls: 'produtosview',
    requires: ['Ext.grid.rowedit.Plugin', 'Ext.grid.plugin.PagingToolbar'],
    controller: { type: 'produtoscontroller' },
    viewModel: { type: 'produtosmodel' },
    layout: 'vbox',
    items: [
        {
            xtype: 'grid',
            title: 'Produtos Cadastrados',
            reference: 'produtosGrid', //referencia paraa usar na controller 
            flex: 1,
            store: { type: 'storeprodutosshared' },// declaração do store para usar na grid
            // bind: {
            //     store: '{storeprodutosmodel}'
            // },
            plugins: {
                rowedit: {
                    autoConfirm: false
                },
                //pagingtoolbar: true
            },
            columns: [
                {
                    text: 'Produto',
                    dataIndex: 'nome',
                    editable: true,
                    width: 250,
                    flex: 1,
                    cell: { userCls: 'bold' }
                },
                {
                    text: 'Estoque',
                    dataIndex: 'estoque',
                    editable: true,
                    width: 150
                },
                {
                    text: 'Preço',
                    dataIndex: 'preco',
                    editable: true,
                    width: 200
                }
            ],
            listeners: {
                canceledit: 'onEditCancelled',
                //select: 'onLinhaSelecionada'
                mousedown: 'onMouseDown'
            }
        },
        // {
        //     xtype: 'button',
        //     text: 'Open Form',
        //     handler: function () {
        //         Ext.create('Ext.window.Window', {
        //             title: 'New User',
        //             height: 400,
        //             width: 350,
        //             layout: 'fit',
        //             items: [
        //                 {
        //                     xtype: 'userform'  // Utiliza o componente reutilizável
        //                 }
        //             ]
        //         }).show();
        //     }
        // }
        // {
        //     xtype: 'container',
        //     layout: 'hbox',
        //     padding: 10,
        //     items: [
        //         {
        //             xtype: 'button',
        //             text: 'Incluir',
        //             handler: 'onAddClick',
        //             iconCls: 'x-fa fa-plus'
        //         },
        //         {
        //             xtype: 'button',
        //             text: 'Alterar',
        //             handler: 'onEditar',
        //             iconCls: 'x-fa fa-edit',
        //             margin: '0 0 0 10'
        //         },
        //         {
        //             xtype: 'button',
        //             text: 'Excluir',
        //             handler: 'onDelete',
        //             iconCls: 'x-fa fa-trash',
        //             margin: '0 0 0 10'
        //         }
        //     ]
        // },
        {
            xtype: 'toolbar', ///botoes de crud, usar o toolbar aí não precisa declarar xtype
            dock: 'bottom',
            padding: 10,
            items: [
                {
                    text: 'Incluir',
                    handler: 'onAddClick',
                    iconCls: 'x-fa fa-plus'
                },
                {
                    text: 'Alterar',
                    handler: 'onAlterar',
                    iconCls: 'x-fa fa-edit',
                    margin: '0 0 0 10'
                },
                {
                    text: 'Excluir',
                    handler: 'onDelete',
                    iconCls: 'x-fa fa-trash',
                    margin: '0 0 0 10'
                }
            ]
        },
    ],
});
