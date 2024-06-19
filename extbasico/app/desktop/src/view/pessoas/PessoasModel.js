Ext.define('Extbasico.view.pessoas.PessoasModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.pessoasmodel',
	data: {
		name: 'Extbasico'
	},
    stores: {
        storemodel: {
            fields: ['id', 'text'],
            data: [
                { id: 1, text: 'Primeiro' },
                { id: 2, text: 'Segundo' },
                { id: 3, text: 'Terceiro' }
            ]
        }
    }
});