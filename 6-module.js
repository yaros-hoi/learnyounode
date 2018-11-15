const fs = require('fs');
const path = require('path');

const findFiles = (directoryPath, extension, callback) => {
  fs.readdir(directoryPath, (error, files) => {
    if (error) return callback(error);
    
    const fileArray = files.filter(file => path.extname(file) === `.${extension}`);
  
    callback(null, fileArray);
  });
};

module.exports = findFiles;
