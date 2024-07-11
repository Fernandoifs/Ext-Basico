Ext.define('Extbasico.view.produtos.produtosview', {
    extend: 'Ext.container.Container',
    xtype: 'produtosview',
    cls: 'produtosview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: { type: 'produtoscontroller' },
    viewModel: { type: 'produtosmodel' },
    layout: 'vbox',
    alias: 'produtus',
    items: [
        {
            xtype: 'grid',
            title: 'Produtos Cadastrados',
            flex: 1,
            //store: { type: 'storeprodutosshared' },// declaração do store para usar na grid
            bind: {
                store: '{storeprodutosmodel}'
            },
            plugins: {
                rowedit: {
                    autoConfirm: false
                }
            },
            columns: [
                {
                    text: 'Produto',
                    dataIndex: 'nome',
                    editable: true,
                    width: 250,
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
                select: 'onLinhaSelecionada'
            }
        },
        {
            xtype: 'container',
            layout: 'hbox',
            padding: 10,
            items: [
                {
                    xtype: 'button',
                    text: 'Incluir',
                    handler: 'onAddClick',
                    iconCls: 'x-fa fa-plus'
                },
                {
                    xtype: 'button',
                    text: 'Alterar',
                    handler: 'onEditar',
                    iconCls: 'x-fa fa-edit',
                    margin: '0 0 0 10'
                },
                {
                    xtype: 'button',
                    text: 'Excluir',
                    handler: 'onDeleteClick',
                    iconCls: 'x-fa fa-trash',
                    margin: '0 0 0 10'
                }
            ]
        },
    ],
});
