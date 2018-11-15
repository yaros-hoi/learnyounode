const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((request, response) => {
  let result = {};
  const parsedURL = url.parse(request.url, true);
  const time = new Date(parsedURL.query.iso);
  
  if(parsedURL.pathname === '/api/parsetime') {
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  
  if(parsedURL.pathname === '/api/unixtime') {
    result = {
      unixtime: time.getTime()
    }
  }
  
  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
  }
  
  response.writeHead(404);
  response.end();
});

server.listen(port);
