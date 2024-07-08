Ext.define('Extbasico.view.pessoas.pessoasview', {
    extend: 'Ext.container.Container',
    xtype: 'pessoasview',
    cls: 'pessoasview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: { type: 'pessoascontroller' },
    viewModel: { type: 'pessoasmodel' },
    store: { type: 'storepessoasshared' }, // declaração do store para usar na grid
    layout: 'vbox',
    items: [
        {
            xtype: 'grid',
            title: 'Pessoas Cadastradas',
            flex: 1,
            store: { type: 'storepessoasshared' },
            plugins: {
                rowedit: {
                    autoConfirm: false
                }
            },
            columns: [
                {
                    text: 'Nome',
                    dataIndex: 'name',
                    editable: true,
                    width: 250,
                    cell: { userCls: 'bold' }
                },
                {
                    text: 'Telefone',
                    dataIndex: 'phone',
                    editable: true,
                    width: 150
                },
                {
                    text: 'Endereço',
                    dataIndex: 'address',
                    editable: true,
                    width: 200
                },
                {
                    text: 'Email',
                    dataIndex: 'email',
                    editable: true,
                    width: 230
                }
            ],
            listeners: {
                canceledit: 'onEditCancelled'
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
                    handler: 'onEditClick',
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
        // {
        //     xtype: 'container',
        //     layout: 'hbox',
        //     padding: 10,
        //     items: [
        //         {
        //             xtype: 'combobox',
        //             id: 'combo1',
        //             label: 'Selecione uma pessoa',
        //             style: 'padding: 5px 10px 10px 15px;',
        //             labelWidth: 90,
        //             displayField: 'text',
        //             valueField: 'id',
        //             clearable: true,
        //             bind: {
        //                 store: '{storemodel}'
        //             }
        //         },
        //         {
        //             xtype: 'combobox',
        //             id: 'combo2',
        //             label: 'Selecione uma pessoa',
        //             style: 'padding: 5px 10px 10px 15px;',
        //             displayField: 'name',
        //             valueField: 'id',
        //             clearable: true,
        //             grow: true,
        //             growMin: 180,
        //             growMax: 300,
        //             matchFieldWidth: true,
        //             editable: true,
        //             queryMode: 'local',
        //             anyMatch: true,
        //             bind: {
        //                 store: '{storemodel2}'
        //             }
        //         }
        //    ]
        //}
    ],
 
});
