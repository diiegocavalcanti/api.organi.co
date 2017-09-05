module.exports = function(app) {
    var controller = app.controllers.usuarios;
    app.get('/usuarios', controller.usuarios);
    app.get('/usuarios/:id', controller.getUsuario);
}