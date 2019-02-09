// Comando para establecer la conexión

var socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado');
})

socket.on('disconnect', function() {
    console.log('Desconectado');
})

socket.on('estadoActual', function(res) {
    label.text(res.actual);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

})