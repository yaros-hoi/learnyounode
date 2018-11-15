const findFiles = require('./6-module');

const directoryPath = process.argv[2];
const extension = 'md';

findFiles(directoryPath, extension, (error, files) => {
  if (error) return console.log(error);
  
  for (let file of files) {
    console.log(file);
  }
});
