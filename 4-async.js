const fs = require('fs');

let count = 0;
const path = process.argv[2];

fs.readFile(path, 'utf8', (error, data) => {
  if (error) throw error;
  
  count = data.split('\n').length - 1;
  getCount();
});

function getCount () {
  console.log(count);
}
