const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(directoryPath, (error, files) => {
  if (error) throw error;
  
  for (let value of files) {
    if (path.extname(value) === extension) {
      console.log(value);
    }
  }
});
