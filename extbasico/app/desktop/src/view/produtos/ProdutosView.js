Ext.define('Extbasico.view.produtos.produtosview', {
    extend: 'Ext.grid.Grid',
    xtype: 'produtosview',
    cls: 'produtosview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: { type: 'produtoscontroller' },
    viewModel: { type: 'produtosmodel' },
    store: { type: 'storeprodutosshared' }, //declaração do store para usar na grid
    grouped: true,
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
            width: 100,
            cell: { userCls: 'bold' }
        },
        {
            text: 'Email',
            dataIndex: 'email',
            editable: true,
            width: 230
        },
        {
            text: 'Telefone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    },
    //EXEMPLOS DE COMBO
    // COMBO 1
    items: [{
        xtype: 'container',
        layout: 'hbox',
        //docked: 'bottom', //localização do componente
        items: [{
            xtype: 'combobox',
            id: 'combo1',
            label: 'Selecione uma pessoa', //identificação e placeholder
            style: 'padding: 5px 10px 10px 15px;',
            labelWidth: 90,
            displayField: 'text',
            valueField: 'id',//campo que a vai pegar da store  
            clearable: true,//permite limpar campo 
            bind: {
                store: '{storemodel}' //declarado na model, não existe o store separado, precisa bindar da model
            }
        },
        {
            xtype: 'combobox',
            id: 'combo2',
            label: 'Selecione uma pessoa',
            style: 'padding: 5px 10px 10px 15px;',
            displayField: 'name',//rever
            valueField: 'id',
            clearable: true,
            grow: true, //*aumenta a combo se o valor for maior
            growMin: 180,
            growMax: 300,//*
            matchFieldWidth: true,//aumenta o a exibição do campo da combo
            editable: true,//permite escrever no campo da combo
            queryMode: 'local',//ao escrever busca autocompleta com o valor da combo,salva valores localmente
            anyMatch: true,//busca qualquer palavra dentro dos valores
            bind: {
                store: '{storemodel2}' //declarado na model, não existe o store separado, precisa bindar da model
            }
            // store: {
            //     type: 'storeprodutosshared', //componente store criado, basta declarar dessa forma
            //     autoLoad: true
            // }
        }
        ]
    }]
});
