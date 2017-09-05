var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/organico');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Servidor rodando na porta: ' + app.get('port'));
});