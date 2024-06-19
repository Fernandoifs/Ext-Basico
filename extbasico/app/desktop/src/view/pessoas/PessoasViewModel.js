Ext.define('Extbasico.view.pessoas.PessoasViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.pessoasviewmodel',
	data: {
		name: 'Extbasico'
	},
    stores: {
        dataview: {
            fields: ['id', 'text'],
            data: [
                { id: 1, text: 'Primeiro' },
                { id: 2, text: 'Segundo' },
                { id: 3, text: 'Terceiro' }
            ]
        },
        storepessoas: {
            fields: ['name'],
            data: 'storepessoas'
        }

    }
});