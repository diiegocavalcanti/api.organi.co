var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        titulo: { type: String, required: true },
        descricao: { type: String, required: true },
        imgUrl: { type: String, required: true},
        preco: { type: String, required: true },
        qtdeDisponivel: { type: String },
        qtdeRef: { type: String },
        tipo: { type: String },
        validade: { type: String },
        isOrganico: { type: Boolean }

    });

    return mongoose.model('produtos', schema);
};