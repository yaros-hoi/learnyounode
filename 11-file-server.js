const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((request, response) => {
  const stream = fs.createReadStream(file, { encoding: 'utf8' });
  
  stream.pipe(response);
  
  stream.on('data', data  => {
    console.log(data);
  });
});

server.listen(port);
