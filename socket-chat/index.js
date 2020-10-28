const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

/**
 * Evento de conexao de um socket
 */
io.on('connection', (socket) => {
  console.log('+ Um usuário se conectou. :)');

  socket.on('disconnect', () => {
    console.log('- Um usuário se desconectou. :(');
  });

  socket.on('chat message', (payload) => {
    console.log('message: ', payload);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor iniciou na porta 3000!');
});
