var produtos = [{
        id: 2,
        titulo: 'Banana',
        descricao: 'Banana descricao exemplo',
        imgUrl: 'http://api.organi.co/public/images/banana.jpg',
        preco: 2.99,
        qtdeDisponivel: 234,
        qtdeRef: 'UNIDADE',
        tipo: 'FRUTA',
        validade: '10/11/2017',
        isOrganico: false
    },
    {
        id: 3,
        titulo: 'Limão',
        descricao: 'Limão descricao exemplo',
        imgUrl: 'http://api.organi.co/public/images/limao.jpg',
        preco: 0.99,
        qtdeDisponivel: 234,
        qtdeRef: 'UNIDADE',
        tipo: 'FRUTA',
        validade: '10/11/2017',
        isOrganico: false
    },
    {
        id: 4,
        titulo: 'Pimentão',
        descricao: 'Pimentão descricao exemplo',
        imgUrl: 'http://api.organi.co/public/images/pimentao.jpg',
        preco: 0.99,
        qtdeDisponivel: 234,
        qtdeRef: 'UNIDADE',
        tipo: 'VERDURA',
        validade: '10/11/2017',
        isOrganico: true
    },
    {
        id: 5,
        titulo: 'Batata Inglesa',
        descricao: 'Batata Inglesa descricao exemplo',
        imgUrl: 'http://api.organi.co/public/images/batata_inglesa.jpg',
        preco: 2.99,
        qtdeDisponivel: 234,
        qtdeRef: 'KILO',
        tipo: 'LEGUME',
        validade: '10/11/2017',
        isOrganico: false
    }
];

module.exports = function() {
    var controller = {};
    controller.produtos = function(req, res) {
        res.json(produtos);
    };
    controller.getProduto = function(req, res) {
        let id = req.params.id;
        let produto = produtos.filter(function(produto) {
            return produto.id == id;
        })[0];

        return produto ? res.json(produto) : res.render('error', { message: 'Produto não encontrado', error: { status: 404, stack: 'Id não encontrado' } }).status(404);
    }
    controller.getTiposProdutos = function(req, res) {
        let tipo = req.params.tipo;
        tipo = tipo.toUpperCase();
        let produto = produtos.filter(function(produto) {
            return produto.tipo == tipo;
        })[0];

        return produto ? res.json(produto) : res.render('error', { message: 'Produto não encontrado', error: { status: 404, stack: 'Tipo não encontrado' } }).status(404);
    }
    return controller;
};