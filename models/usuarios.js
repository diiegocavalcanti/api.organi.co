var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        id: { type: String, required: true },
        nome: { type: String, required: true },
        sobrenome: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true, index: { unique: true } },
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
            { id_produto: { type: Number }, qtde: { type: Number } }
        ],
        compras: [{
            id_compra: { type: Number },
            data: { type: String },
            hora: { type: String },
            produtos: [{
                id_produto: { type: Number },
                qtde: { type: Number }
            }]

        }]

    });

    return mongoose.model('usuarios', schema);
};