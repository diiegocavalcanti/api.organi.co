module.exports = function(app) {
    let controller = {};
    let Usuario = app.models.usuarios;

    controller.listarUsuarios = function(req, res) {

        Usuario.find().exec().then(
            function(usuarios) {
                return res.json(usuarios);
            },
            function(error) {
                res.render('error', { message: 'Usuário não encontrado', error: { status: 404, stack: error } }).status(500);
            }
        );

    }
    controller.getUsuario = function(req, res) {
        let id = req.params.id;
        Usuario.findById(id).exec()
            .then(function(usuario) {
                    return usuario ? res.json(usuario) : res.render('error', { message: 'Usuário não encontrado', error: { status: 404, stack: 'Id não encontrado' } }).status(404);
                },
                function(error) {
                    res.render('error', { message: 'Aconteceu um erro', error: { status: 500, stack: error } }).status(500);
                });


    };

    controller.salvarUsuario = function(req, res) {
        let usuario = new Usuario(req.body);
        usuario.save(function(erro, usuario){
            if(erro) {
                res.status(500).end();
                console.log(erro)
            } else {
                console.log(usuario);
                res.json(usuario);
            }
        });
    };

    controller.removerUsuario = function(req, res) {

    };
    return controller;
}