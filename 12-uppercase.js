const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    request
      .pipe(map({ wantStrings: true }, chunk => chunk.toUpperCase()))
      .pipe(response);
  }
});

server.listen(port);
