const http = require('http');
const concatStream = require('concat-stream');

let count = 0;
const results = [];
const iterationCount = 3;

function getResult (count) {
  for (let i = 0; i < count; i++) {
    console.log(results[i])
  }
}

const getData = (index, countCall) => {
  http
    .get(process.argv[index + 2], response => {
      response.setEncoding('utf8');
      response
        .pipe(concatStream(data => {
          results[index] = data;
          count++;
      
          if (count === countCall) {
            getResult(countCall);
          }
        }));
    })
    .on('error', console.error);
};

for (let i = 0; i < iterationCount; i++) {
  getData(i, iterationCount)
}
