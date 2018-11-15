const fs = require('fs');

const path = process.argv[2];
const fileContent = fs.readFileSync(path).toString();
const count = fileContent.split('\n').length - 1;
console.log(count);
