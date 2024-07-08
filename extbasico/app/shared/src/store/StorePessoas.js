Ext.define('Extbasico.store.StorePessoas', {
    extend: 'Ext.data.Store',
    alias: 'store.storepessoasshared',
    model: 'Extbasico.model.Pessoas',
    data: { 
        items: [
            { name: 'Jean Lucy', phone: "555-111-1111", email: "jeanluc.picard@enterprise.com", address: "123 Starfleet St.", dept: "bridge" },
            { name: 'Worf', phone: "555-222-2222", email: "worf.moghsson@enterprise.com", address: "456 Klingon Way", dept: "security" },
            { name: 'Deanna', phone: "555-333-3333", email: "deanna.troi@enterprise.com", address: "789 Betazoid Blvd.", dept: "medical" },
            { name: 'Data', phone: "555-444-4444", email: "mr.data@enterprise.com", address: "101 Android Ave.", dept: "bridge" }
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
