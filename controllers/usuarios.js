let usuarios = [{
    id: 3,
    nome: "Diego",
    sobrenome: "Cavalcanti",
    email: "diego@agenciamoob.com.br",
    senha: "1234admin",
    cpf: "99999999999",
    endereco: {
        rua: "Rua do Riachuelo",
        numero: "325",
        cep: "50050400",
        bairro: "Boa Vista",
        cidade: "Recife",
        estado: "Pernambuco",
        complemento: "Apto 20"
    },
    carrinho: [
        { id_produto: 2, qtde: 10 },
        { id_produto: 3, qtde: 1 },
        { id_produto: 4, qtde: 500 }
    ],
    compras: [{
        id_compra: 1,
        data: "11/09/2017",
        hora: "12:59:17",
        produtos: [{
            id_produto: 10,
            qtde: 100
        }]

    }]
}];

function getUsuarios() {
    return usuarios;
}

module.exports = function() {
    var controller = {};
    controller.usuarios = function(req, res) {
        res.json(getUsuarios());
    }
    controller.getUsuario = function(req, res) {
        let id = req.params.id;
        let usuario = usuarios.filter(function(usuario) {
            return usuario.id == id;
        })[0];

        return usuario ? res.json(usuario) : res.render('error', { message: 'Usuário não encontrado', error: { status: 404, stack: 'Id não encontrado' } }).status(404);
    };

    controller.salvarUsuario = function(req, res) {

    };

    controller.removerUsuario = function(req, res) {

    };
    return controller;
}