module.exports = function(app) {
    var controller = app.controllers.usuarios;
    app.get('/usuarios', controller.listarUsuarios);
    app.get('/usuarios/:id', controller.getUsuario);
    app.post('/usuario', controller.salvarUsuario);

}