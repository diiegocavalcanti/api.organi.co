module.exports = function(app) {
    var controller = app.controllers.produtos;
    app.get('/produtos', controller.produtos);
    app.get('/produtos/:id', controller.getProduto);
    app.get('/produtos/tipo/:tipo', controller.getTiposProdutos);
};