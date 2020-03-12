//Comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', (cliente) => {
    console.log('conectado');
});

socket.on('disconnect', (cliente) => {
    console.log('desconectado del servidor');
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});

socket.on('estadoActual', (data) => {
    label.text(data.actual);
});