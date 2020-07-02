

var socket =  io();

//para saber cuando ya se conectó socket al server
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

//para saber cuando si se desconecta el socket del server
socket.on('disconnect', function(){
// ON para ESCUCHAR INFORMACIÓN/SUCESOS 
    console.log('Perdimos la conexión con el servidor');
});


// EMIT para enviar información (solo al server de 1 a 1)
socket.emit('enviarMensaje', {
    usuario: 'Ismael',
    mensaje: 'Hola Mundo'
}, function( resp ) {
    console.log('respuesta del servidor: ', resp);
});


// ESCUCHAR INFORMACIÓN
socket.on('enviarMensaje', function(mensaje){

    console.log('Servidor', mensaje);

}); 

