const arrayOfNumbers = process.argv.filter(item => Number(item));
const sum = arrayOfNumbers.reduce((acc, current) => Number(acc) + Number(current));
console.log(sum);
