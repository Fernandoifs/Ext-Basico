Ext.define('Extbasico.view.produtos.ProdutosModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.produtosmodel',
    fields: [
        { name: 'idproduto', type: 'int' },
        { name: 'produto', type: 'string' },
        { name: 'estoque', type: 'int' },
        { name: 'preco', type: 'float' }
    ]
});
