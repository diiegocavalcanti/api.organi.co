
module.exports = function(app) {
    let controller = {};
    let Produtos = app.models.produtos;

    controller.produtos = function(req, res){
        Produtos.find().exec().then(function(produtos){
            return res.json(produtos);
        });
    }

    controller.getProduto = function(req, res) {
        let id = req.params.id;
        Produtos.findById(id).exec().then(
            function(produto){
                return produto ? res.json(produto) : res.render('error', { message: 'Produto não encontrado', error: { status: 404, stack: 'Id não encontrado' } }).status(404);

            }, function(error){
                res.render('error', { message: 'Aconteceu um erro', error: { status: 500, stack: error } }).status(500);

            });

            }


    controller.getTiposProdutos = function(req, res) {
        let tipo = req.params.tipo;
        tipo = tipo.toUpperCase();

        var condicao = { tipo: tipo };

        Produtos.find(condicao).exec().then(
            function(produto){
                return produto ? res.json(produto) : res.render('error', { message: 'Produto não encontrado', error: { status: 404, stack: 'Id não encontrado' } }).status(404);

            }, function(error){
                res.render('error', { message: 'Aconteceu um erro', error: { status: 500, stack: error } }).status(500);

            });
    }

    controller.insertProduto = function(req, res){
        let produto = new Produtos(req.body);

        Produtos.insert(function(erro, produto) {
            if(erro) {
                res.status(500).end();
                console.log(erro)
            } else {
                console.log(produto);
                res.json(produto);
            }
        });

    }
    return controller;
};