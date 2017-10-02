var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        nome: { type: String, required: true },
        sobrenome: { type: String, required: true },
        email: { type: String, required: true, index: { unique: true } },
        senha: { type: String, required: true },
        cpf: { type: String },
        endereco: {
            rua: { type: String },
            numero: { type: String },
            cep: { type: String },
            bairro: { type: String },
            cidade: { type: String },
            estado: { type: String },
            complemento: { type: String }
        },
        carrinho: [
            { id_produto: { type: String }, qtde: { type: String } }
        ],
        compras: [{
            id_compra: { type: String },
            data: { type: String },
            hora: { type: String },
            produtos: [{
                id_produto: { type: String },
                qtde: { type: String }
            }]

        }]

    });

    return mongoose.model('usuarios', schema);
};