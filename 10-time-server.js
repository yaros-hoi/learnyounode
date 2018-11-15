const net = require('net');
const strftime = require('strftime');

const port = process.argv[2];

const server = net.createServer(socket => {
  socket.write(strftime('%Y-%m-%d %H:%M'));
  socket.write('\n');
  socket.end();
});

server.listen(port);
