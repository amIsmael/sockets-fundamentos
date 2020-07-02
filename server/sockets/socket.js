const { io } = require('../server');


//para saber cuando ya se conectó un usuario/cliente al server
//client tiene toda la información de la conexión que se estableció
io.on('connection', (client)=>{
    
    //cuando se conecta el usuario
    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        nombre:'Administrador',
        mensaje: 'Bienvenido a la aplicación'
    });


    //si el cliente se desconecta de la aplicación
    client.on('disconnect', ()=>{
        console.log('Usuario Desconectado');
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        
        //si viene el usuario 
        //if (mensaje.usuario){
        //    callback({
        //        respuesta: 'proceso exitoso'
        //    });
        //}else{
        //    
        //    callback({
        //        respuesta: 'YAVALIÖBERTAALGO'
        //    });
        //}


    });





});