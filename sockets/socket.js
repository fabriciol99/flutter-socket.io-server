const { io } = require('../index');

io.on('connection', client => {

    console.log('cliente Conectado');

    client.on('disconnect', () => { 
        console.log('cliente Desconectado');
     });

     client.on('mensaje', ( payload ) => {
        console.log('Mensaje recibido', payload);
        
        client.emit( 'mensaje', { admin: 'Nuevo menasje'});
     });
});
