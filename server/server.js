const express = require('express');

//socket no trabaja sobre express, trabaja sobre el servidor que definamos(como el que trae por defecto NODE)
const socketIO =  require('socket.io');

// 1 levantamos el servidor (por defecto de NODE) 
const http =  require('http');
//express está basado en éste http

const path = require('path');

const app = express();
// 1
let server = http.createServer(app);
//??le pasamos app porque está montado en el http/server son muy parecidas
//así ya tenemos montado el server con la confidración que podamos hacerle al express


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));



module.exports.io = socketIO(server);
require('./sockets/socket');

// IO = INPUT-OUTPUT = ES LA COMUNICACIÓN DEL BACKEND
// cuando tengamos que hacer lo referenciamos por medio del IO







//escuchar server
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});