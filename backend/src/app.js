const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');

//Configuraciones
server.set('port',8080);
server.set('host','localhost');

//Middlewares
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'build')));
server.use('/pregunta1', require('./routes/pregunta1'));
server.use('/pregunta2', require('./routes/pregunta2'));
server.use('/pregunta3', require('./routes/pregunta3'));


//Rutas
server.get('/', function (req, res) {
   res.send('<h1> Hola Ecuador con Express </h1>')
});
server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
})
server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})



module.exports = server;
