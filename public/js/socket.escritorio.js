//Comando para establecer la conexion
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    data = { escritorio: escritorio }
    socket.emit('atenderTicket', data, function(resp) {
        if (resp === 'No hay tickest') {
            label.text(resp);
            alert(resp)
            return;
        }
        label.text('Ticket ' + resp.numero);
    });
});