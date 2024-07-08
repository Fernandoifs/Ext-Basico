Ext.define('Extbasico.store.StoreProdutos', {
    extend: 'Ext.data.Store',
    alias: 'store.storeprodutosshared',
    model: 'Extbasico.model.Produtos',
    data: {
        items: [
            { idproduto: 1, nome: 'Produto A', estoque: 100, preco: 10.50 },
            { idproduto: 2, nome: 'Produto B', estoque: 200, preco: 20.75 },
            { idproduto: 3, nome: 'Produto C', estoque: 150, preco: 15.30 },
            { idproduto: 4, nome: 'Produto D', estoque: 50, preco: 5.99 }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
