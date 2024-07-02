Ext.define('Extbasico.view.configuracoes.ConfiguracoesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.configuracoesmodel',
    data: {
        name: 'Extbasico'
    },
    stores: {
        storemodel: {
            autoLoad: true,
            fields: ['id', 'text'],
            data: [
                { id: 1, text: 'Primeiro' },
                { id: 2, text: 'Segundo' },
                { id: 3, text: 'Terceiro' }
            ]
        },
        storemodel2: {
            autoLoad: true,
            fields: ['name', 'email', 'phone', 'dept'],
            data: [
                { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", dept: "bridge" },
                { name: 'ModernWorf', email: "worf.moghsson@enterprise.com", phone: "555-222-2222", dept: "engine" },
                { name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333", dept: "bridge" },
                { name: 'Data', email: "mr.data@enterprise.com", phone: "555-444-4444", dept: "bridge" }
            ]
        },
    }
});