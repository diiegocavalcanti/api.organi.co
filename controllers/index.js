module.exports = function() {
    var controller = {};
    controller.index = function(req, res) {
        res.render('index', {
            title: 'Organi.co API',
            message: 'Bem vindo a api Organi.co'
        })
    }

    return controller;
};