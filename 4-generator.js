const fs = require('fs');

const path = process.argv[2];

const getCount = () =>{
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) throw error;
    
    const count = data.split('\n').length - 1;
    console.log(count)
  });
};

function run(generator) {
  const iterator = generator(data => iterator.next(data));
  
  iterator.next();
}

run(function* () {
  yield getCount();
});
